import React, { useState } from 'react';
import SimpleAICharacter from './SimpleAICharacter';
import { aiModules, AIModule } from '../data/aiModulesData';

const AITestComponent: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<AIModule | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleModuleSelect = (module: AIModule) => {
    setSelectedModule(module);
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setSelectedModule(null);
  };

  return (
    <div className="relative w-full h-full">
      {/* AI Character and Module Grid */}
      <SimpleAICharacter
        modules={aiModules}
        onModuleSelect={handleModuleSelect}
        selectedModule={selectedModule}
      />

      {/* Video Modal */}
      {showVideo && selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Video Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{selectedModule.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedModule.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedModule.description}
                  </p>
                </div>
              </div>
              <button
                onClick={handleVideoClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
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
              <p className="text-gray-700 dark:text-gray-300">
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
                  console.log(`Enrolling in ${selectedModule.name} module`);
                }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITestComponent;


