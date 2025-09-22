import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import BrochureModal from './BrochureModal';
import LeadCaptureModal from './LeadCaptureModal';
import jsPDF from 'jspdf';

interface BrochureData {
  title: string;
  description: string;
  topics: Array<{
    category: string;
    courses: string[];
  }>;
  features: string[];
  pricing: {
    individual: string;
    team: string;
    enterprise: string;
  };
}

interface LeadCaptureForm {
  name: string;
  email: string;
  phone: string;
  interest: string;
}



interface BrochureInstructorsProps {
  onLeadCaptureSuccess?: () => void;
  isLoggedIn?: boolean;
  hasProvidedLeadDetails?: boolean;
}

const BrochureInstructors: React.FC<BrochureInstructorsProps> = ({ 
  onLeadCaptureSuccess, 
  isLoggedIn = false, 
  hasProvidedLeadDetails = false 
}) => {
  const [brochureData, setBrochureData] = useState<BrochureData | null>(null);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [isLeadCaptureModalOpen, setIsLeadCaptureModalOpen] = useState(false);
  const [leadCaptureAction, setLeadCaptureAction] = useState<'download' | 'preview'>('download');
  const [hasProvidedDetails, setHasProvidedDetails] = useState(false);

  // Check if user has access to brochure functionality (download/preview buttons)
  const hasBrochureAccess = isLoggedIn || hasProvidedLeadDetails || hasProvidedDetails;
  
  // Check if user can see course topics (logged in users see immediately, others need to provide details)
  const canSeeTopics = isLoggedIn || hasProvidedDetails;

  // Create brochure content
  const createBrochureContent = (brochureData: BrochureData | null): string => {
    if (!brochureData) return '';
    
    return `
Aiera Soft Skills Academy
${brochureData.title}

${brochureData.description}

COURSE TOPICS:
${brochureData.topics.map((topic, index) => `${index + 1}. ${topic}`).join('\n')}

KEY FEATURES:
${brochureData.features.map((feature, index) => `• ${feature}`).join('\n')}

PRICING:
Individual: ${brochureData.pricing.individual}
Team (5-20): ${brochureData.pricing.team}
Enterprise (20+): ${brochureData.pricing.enterprise}

CONTACT INFORMATION:
Email: info@aiera-softskills.com
Website: https://aiera-softskills.com

Thank you for your interest in Aiera Soft Skills Academy!
This brochure was generated on ${new Date().toLocaleDateString()}.
    `.trim();
  };

  // Download brochure function - Generate Professional PDF
  const downloadBrochure = (brochureData: BrochureData | null, userName: string) => {
    if (!brochureData) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add text with word wrap
    const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12, isBold: boolean = false) => {
      doc.setFontSize(fontSize);
      if (isBold) {
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setFont('helvetica', 'normal');
      }
      
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * fontSize * 0.5) + 5; // Increased line spacing
    };

    // Helper function to check if we need a new page
    const checkNewPage = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
        return true;
      }
      return false;
    };

    // Cover Page
    doc.setFillColor(41, 128, 185); // Blue background
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    doc.setTextColor(255, 255, 255); // White text
    yPosition = addText('Aiera Soft Skills Academy', 20, 60, pageWidth - 40, 24, true);
    yPosition = addText('Empowering Future Leaders Through AI-Driven Learning', 20, yPosition, pageWidth - 40, 16, true);
    
    yPosition = 120;
    doc.setTextColor(255, 255, 255);
    yPosition = addText(brochureData.title, 20, yPosition, pageWidth - 40, 18, true);
    yPosition = addText(brochureData.description, 20, yPosition, pageWidth - 40, 12);
    
    yPosition = 200;
    doc.setTextColor(255, 255, 255);
    yPosition = addText('Prepared for: ' + userName, 20, yPosition, pageWidth - 40, 14, true);
    yPosition = addText('Generated on: ' + new Date().toLocaleDateString(), 20, yPosition, pageWidth - 40, 12);

    // Page 2 - Course Overview
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    yPosition = 20;
    
    yPosition = addText('COURSE OVERVIEW', 20, yPosition, pageWidth - 40, 20, true);
    yPosition += 10;
    
    yPosition = addText('Our comprehensive 8-module program covers essential soft skills for academic, professional, and personal success. Each module includes 6 subtopics with interactive learning experiences, assessments, and real-world applications.', 20, yPosition, pageWidth - 40, 12);
    yPosition += 15;

    // Modules and Subtopics
    const modules = [
      {
        title: 'Module 1: Communication Skills (Human)',
        subtopics: ['Active Listening', 'Public Speaking', 'Written Communication', 'Non-verbal Communication', 'Conflict Resolution', 'Presentation Skills']
      },
      {
        title: 'Module 2: Adaptive Learning & Lifelong Learning Skills',
        subtopics: ['Learning Strategies', 'Memory Techniques', 'Information Processing', 'Skill Transfer', 'Learning Agility', 'Continuous Improvement']
      },
      {
        title: 'Module 3: Prompt-Context Engineering (Machine)',
        subtopics: ['Prompt Design', 'Context Management', 'AI Communication', 'Prompt Optimization', 'Bias Recognition', 'Ethical AI Use']
      },
      {
        title: 'Module 4: Critical Thinking & Problem Solving',
        subtopics: ['Logical Reasoning', 'Problem Analysis', 'Creative Solutions', 'Decision Making', 'Risk Assessment', 'Root Cause Analysis']
      },
      {
        title: 'Module 5: Design Thinking (Creativity to Solve Problems)',
        subtopics: ['Empathy', 'Ideation', 'Prototyping', 'Testing', 'Iteration', 'User-Centered Design']
      },
      {
        title: 'Module 6: Teamwork & Collaboration',
        subtopics: ['Team Dynamics', 'Leadership', 'Conflict Management', 'Remote Collaboration', 'Cross-functional Teams', 'Team Building']
      },
      {
        title: 'Module 7: Data-Driven Decision Making',
        subtopics: ['Data Analysis', 'Statistical Thinking', 'Data Visualization', 'Hypothesis Testing', 'Metrics & KPIs', 'Evidence-Based Decisions']
      },
      {
        title: 'Module 8: Managing Mental & Physical Health',
        subtopics: ['Stress Management', 'Work-Life Balance', 'Mental Health Awareness', 'Physical Wellness', 'Resilience Building', 'Mindfulness Practices']
      }
    ];

    modules.forEach((module, index) => {
      checkNewPage(40);
      
      // Module title
      yPosition = addText(module.title, 20, yPosition, pageWidth - 40, 14, true);
      yPosition += 5;
      
      // Subtopics
      module.subtopics.forEach((subtopic, subIndex) => {
        checkNewPage(15);
        yPosition = addText(`• ${subtopic}`, 30, yPosition, pageWidth - 50, 11);
      });
      
      yPosition += 10;
    });

    // Page 3 - Features and Benefits
    doc.addPage();
    yPosition = 20;
    
    // Check if we have enough space for the heading and all features
    const features = [
      'AI-Powered Learning: Personalized feedback and adaptive content',
      'Real-World Applications: Academic, professional, and personal contexts',
      'Interactive Assessments: Quizzes, challenges, and practical exercises',
      'Progress Tracking: XP system, badges, and achievement recognition',
      'Video Content: 5-minute focused lessons with comprehensive scripts',
      'Flexible Learning: Self-paced modules accessible anytime',
      'Expert-Designed: Content created by industry professionals',
      'Comprehensive Coverage: 48 subtopics across 8 essential skill areas'
    ];
    
    // Calculate space needed for heading + all features
    const spaceNeeded = 50 + (features.length * 20); // 50 for heading, 20 per feature
    if (yPosition + spaceNeeded > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Add a subtle background for the section
    doc.setFillColor(248, 250, 252); // Very light gray background
    doc.rect(15, yPosition - 5, pageWidth - 30, 180, 'F');
    
    yPosition = addText('KEY FEATURES & BENEFITS', 20, yPosition, pageWidth - 40, 20, true);
    yPosition += 15;
    
    // Add subtitle
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    yPosition = addText('Transform your skills with our comprehensive learning platform', 20, yPosition, pageWidth - 40, 11);
    yPosition += 12;
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    features.forEach((feature, index) => {
      // Add simple bullet point
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('•', 20, yPosition + 2);
      
      // Add feature text with proper width
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      yPosition = addText(feature, 30, yPosition, pageWidth - 50, 10);
      yPosition += 6; // Compact spacing between features
    });

    // Page 4 - Pricing and Contact
    doc.addPage();
    yPosition = 20;
    
    yPosition = addText('PRICING & CONTACT INFORMATION', 20, yPosition, pageWidth - 40, 20, true);
    yPosition += 20;
    
    // Pricing
    yPosition = addText('PRICING PLANS', 20, yPosition, pageWidth - 40, 16, true);
    yPosition += 10;
    
    yPosition = addText(`Individual: ${brochureData.pricing.individual}`, 20, yPosition, pageWidth - 40, 14, true);
    yPosition = addText(`Team (5-20): ${brochureData.pricing.team}`, 20, yPosition, pageWidth - 40, 14, true);
    yPosition = addText(`Enterprise (20+): ${brochureData.pricing.enterprise}`, 20, yPosition, pageWidth - 40, 14, true);
    yPosition += 20;
    
    // Contact Information
    yPosition = addText('CONTACT INFORMATION', 20, yPosition, pageWidth - 40, 16, true);
    yPosition += 10;
    
    yPosition = addText('Email: info@aiera-softskills.com', 20, yPosition, pageWidth - 40, 12);
    yPosition = addText('Website: https://aiera-softskills.com', 20, yPosition, pageWidth - 40, 12);
    yPosition = addText('Phone: +1 (555) 123-4567', 20, yPosition, pageWidth - 40, 12);
    yPosition += 20;
    
    // Footer
    yPosition = addText('Thank you for your interest in Aiera Soft Skills Academy!', 20, yPosition, pageWidth - 40, 12, true);
    yPosition = addText('Start your journey to professional excellence today.', 20, yPosition, pageWidth - 40, 12);

    // Save the PDF
    const fileName = `Aiera_Soft_Skills_Brochure_${userName.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
  };

  useEffect(() => {
    // Load brochure data
    fetch('/brochureData.json')
      .then(res => res.json())
      .then(data => setBrochureData(data.brochure))
      .catch(err => console.error('Error loading brochure data:', err));
  }, []);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleBrochureAction = (action: 'download' | 'preview') => {
    // If user has access, allow direct action
    if (hasBrochureAccess) {
      if (action === 'download') {
        downloadBrochure(brochureData, 'Authorized User');
      } else if (action === 'preview') {
        setIsBrochureModalOpen(true);
      }
    } else {
      // If user doesn't have access, show lead capture modal
      setLeadCaptureAction(action);
      setIsLeadCaptureModalOpen(true);
    }
  };

  const handleLeadCaptureSuccess = (formData: LeadCaptureForm) => {
    // Set flag that user has provided details
    setHasProvidedDetails(true);
    
    // Notify parent component that lead capture was successful
    if (onLeadCaptureSuccess) {
      onLeadCaptureSuccess();
    }
    
    if (leadCaptureAction === 'download') {
      // Handle brochure download
      console.log('Downloading brochure for:', formData);
      
      // Create and download professional PDF brochure
      downloadBrochure(brochureData, formData.name);
      
      // Show success notification
      alert(`Thank you ${formData.name}! Your brochure download will begin shortly.`);
    } else {
      // Show brochure preview
      setIsBrochureModalOpen(true);
    }
    
    // Log lead capture for testing
    const totalLeads = JSON.parse(localStorage.getItem('brochureSubmissions') || '[]').length;
    console.log(`Lead captured successfully! Total leads: ${totalLeads}`);
  };

  if (!brochureData) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Brochure Card */}
      <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism dark:glassmorphism-dark rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {brochureData.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {brochureData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {hasBrochureAccess ? (
                  // User has access - show brochure buttons
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBrochureAction('download')}
                      className="btn-primary flex items-center justify-center space-x-2"
                    >
                      <Download size={18} />
                      <span>Download Brochure</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBrochureAction('preview')}
                      className="btn-secondary flex items-center justify-center space-x-2"
                    >
                      <Eye size={18} />
                      <span>Preview</span>
                    </motion.button>
                  </>
                ) : (
                  // User doesn't have access - show "Get Brochure" button
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setLeadCaptureAction('download');
                      setIsLeadCaptureModalOpen(true);
                    }}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <Download size={18} />
                    <span>Get Brochure</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Accordion of Topics - Shown for logged-in users or after providing lead details */}
            <AnimatePresence>
              {canSeeTopics ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      🎯 Course Topics Unlocked!
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Thank you for your interest! Here are the detailed course topics:
                    </p>
                  </div>
                  
                  {brochureData.topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleCategory(index)}
                        className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-dark-400 hover:bg-gray-100 dark:hover:bg-dark-500 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {topic.category}
                        </span>
                        {expandedCategories.includes(index) ? (
                          <ChevronUp size={20} className="text-gray-500" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedCategories.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 py-3 bg-white dark:bg-dark-300"
                          >
                            <ul className="space-y-2">
                              {topic.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-dark-400 dark:to-dark-500 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Course Topics Locked
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Provide your details above to unlock the complete course brochure and see all available topics.
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      📧 We'll send you the full course details
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadCaptureModalOpen}
        onClose={() => setIsLeadCaptureModalOpen(false)}
        onSuccess={handleLeadCaptureSuccess}
        actionType={leadCaptureAction}
      />


      {/* Brochure Preview Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        brochureData={brochureData}
      />

    </div>
  );
};

export default BrochureInstructors;
