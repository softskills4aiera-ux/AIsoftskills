import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Download, Eye, Trash2, RefreshCw, BarChart3, Users, Mail } from 'lucide-react';
import { leadService, LeadData } from '../services/leadService';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [selectedLead, setSelectedLead] = useState<LeadData | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
      loadAnalytics();
    }
  }, [isOpen]);

  const loadLeads = () => {
    const allLeads = leadService.getLeads();
    setLeads(allLeads);
  };

  const loadAnalytics = () => {
    const analyticsData = leadService.getAnalytics();
    setAnalytics(analyticsData);
  };

  const handleDeleteLead = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      await leadService.deleteLead(id);
      loadLeads();
      loadAnalytics();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all leads? This action cannot be undone.')) {
      leadService.clearLeads();
      loadLeads();
      loadAnalytics();
    }
  };

  const exportLeads = () => {
    const dataStr = leadService.exportLeads();
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `brochure-submissions-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ maxHeight: '90vh', overflow: 'hidden' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 size={24} />
                <div>
                  <h2 className="text-2xl font-bold">Admin Panel</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    Manage brochure submissions and view analytics
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-4 sm:p-6" style={{ maxHeight: 'calc(90vh - 120px)' }}>
            {/* Analytics Summary */}
            {analytics && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="bg-gradient-to-br from-neon-blue to-blue-500 text-white p-3 sm:p-4 rounded-xl text-center">
                  <Users size={20} className="mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{analytics.totalLeads}</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Total Leads</div>
                </div>
                <div className="bg-gradient-to-br from-neon-green to-green-500 text-white p-3 sm:p-4 rounded-xl text-center">
                  <Download size={20} className="mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{analytics.downloadLeads}</div>
                  <div className="text-green-100 text-xs sm:text-sm">Downloads</div>
                </div>
                <div className="bg-gradient-to-br from-neon-purple to-purple-500 text-white p-3 sm:p-4 rounded-xl text-center">
                  <Eye size={20} className="mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{analytics.previewLeads}</div>
                  <div className="text-purple-100 text-xs sm:text-sm">Previews</div>
                </div>
                <div className="bg-gradient-to-br from-neon-yellow to-yellow-500 text-white p-3 sm:p-4 rounded-xl text-center">
                  <Mail size={20} className="mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{Object.keys(analytics.interestBreakdown).length}</div>
                  <div className="text-yellow-100 text-xs sm:text-sm">Interest Areas</div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadLeads}
                className="btn-primary flex items-center space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              >
                <RefreshCw size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Refresh</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={exportLeads}
                className="btn-secondary flex items-center space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">Export JSON</span>
                <span className="sm:hidden">Export</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClearAll}
                className="px-3 sm:px-4 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm sm:text-base"
              >
                <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Clear All</span>
              </motion.button>
            </div>

            {/* Leads Table */}
            <div className="bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 dark:bg-dark-400">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Interest
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-dark-300 divide-y divide-gray-200 dark:divide-gray-700">
                    {leads.map((lead, index) => (
                      <motion.tr
                        key={lead.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-dark-400 transition-colors duration-200"
                      >
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {lead.name}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <div className="max-w-[200px] truncate" title={lead.email}>
                            {lead.email}
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200">
                            {lead.interest}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.actionType === 'download' 
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                              : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200'
                          }`}>
                            {lead.actionType === 'download' ? (
                              <>
                                <Download size={12} className="mr-1" />
                                <span className="hidden sm:inline">Download</span>
                              </>
                            ) : (
                              <>
                                <Eye size={12} className="mr-1" />
                                <span className="hidden sm:inline">Preview</span>
                              </>
                            )}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <div className="max-w-[120px] truncate" title={formatDate(lead.submittedAt)}>
                            {formatDate(lead.submittedAt)}
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {leads.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400 text-lg">
                    No leads captured yet. Start by having users fill out the brochure form!
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default AdminPanel;

