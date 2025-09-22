import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AICharacter from './AICharacter';
import { aiModules, AIModule } from '../data/aiModulesData';

interface AIModuleDisplayProps {
  onModuleSelect?: (module: AIModule) => void;
}

const AIModuleDisplay: React.FC<AIModuleDisplayProps> = ({ onModuleSelect }) => {
  const [selectedModule, setSelectedModule] = useState<AIModule | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleModuleSelect = (module: AIModule) => {
    setSelectedModule(module);
    setShowVideo(true);
    onModuleSelect?.(module);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setSelectedModule(null);
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900">
      {/* AI Character and Module Grid */}
      <div className="relative z-10">
        <AICharacter
          modules={aiModules}
          onModuleSelect={handleModuleSelect}
          selectedModule={selectedModule}
        />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleVideoClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedModule.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedModule.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-200">
                      {selectedModule.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleVideoClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-100 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Video Player */}
              <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                {selectedModule.videoUrl ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    onEnded={handleVideoClose}
                  >
                    <source src={selectedModule.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🎬</div>
                      <h3 className="text-xl font-semibold mb-2">Video Coming Soon!</h3>
                      <p className="text-gray-300">
                        {selectedModule.videoScript}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Description */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  About This Module
                </h4>
                <p className="text-gray-700 dark:text-gray-100">
                  {selectedModule.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={handleVideoClose}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Add your module enrollment logic here
                    console.log(`Enrolling in ${selectedModule.name} module`);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  Start Learning
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIModuleDisplay;


