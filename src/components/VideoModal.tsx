import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  videoScript?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title, videoScript }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <X size={20} />
          </button>

          {/* Video Player */}
          <div className="aspect-video">
            {videoUrl ? (
              videoUrl.startsWith('http') ? (
                <iframe
                  src={videoUrl}
                  title={title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoUrl}
                  title={title}
                  className="w-full h-full"
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-bold mb-4">Video Coming Soon!</h3>
                  <p className="text-lg text-blue-200 mb-6">
                    {videoScript || `Learn about ${title} - Coming soon!`}
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-blue-300">
                    <span>📚</span>
                    <span>Interactive Learning</span>
                    <span>•</span>
                    <span>🎯</span>
                    <span>Practical Skills</span>
                    <span>•</span>
                    <span>🚀</span>
                    <span>AI-Powered</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">Click outside or press ESC to close</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;

