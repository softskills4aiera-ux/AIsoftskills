import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import VideoModal from './VideoModal';
import { aiModules } from '../data/aiModulesData';

interface AIHeroProps {
  onModuleClick?: (module: any) => void;
  isLoggedIn?: boolean;
  hasProvidedLeadDetails?: boolean;
}

const AIHero: React.FC<AIHeroProps> = ({ onModuleClick, isLoggedIn = false, hasProvidedLeadDetails = false }) => {
  const { isDark } = useTheme();
  const [currentPhase, setCurrentPhase] = useState<'intro' | 'moving' | 'revealing' | 'complete'>('intro');
  const [revealedModules, setRevealedModules] = useState<number[]>([]);
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [robotAnimation, setRobotAnimation] = useState<'idle' | 'pointing' | 'celebrating'>('idle');

  // Introduction messages
  const introMessages = [
    "Hello! I'm your AI learning companion. Let me show you the amazing soft skills modules we have!",
    "In the AI era, these skills will make you unstoppable. Let me reveal them one by one...",
    "Get ready to discover the superpowers that will transform your career!"
  ];

  // Sound effects (using Web Audio API for futuristic sounds)
  const playSound = (type: 'intro' | 'teleport' | 'module' | 'hover') => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      switch (type) {
        case 'intro':
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.5);
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.5);
          break;
        case 'teleport':
          oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(1760, audioContext.currentTime + 0.3);
          gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.3);
          break;
        case 'module':
          oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(1320, audioContext.currentTime + 0.2);
          gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.2);
          break;
        case 'hover':
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(1100, audioContext.currentTime + 0.1);
          gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.1);
          break;
      }
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  // Start the sequence
  useEffect(() => {
    // Show messages in sequence
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < introMessages.length) {
        setCurrentMessageIndex(messageIndex);
        setShowMessage(true);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
        setShowMessage(false);
        setCurrentPhase('moving');
        playSound('teleport');
      }
    }, 2000); // 2 seconds between each message

    return () => clearInterval(messageInterval);
  }, [introMessages.length]);

  // Handle robot movement to left
  useEffect(() => {
    if (currentPhase === 'moving') {
      const timer = setTimeout(() => {
        setCurrentPhase('revealing');
        
        // Start module reveal sequence
        aiModules.forEach((_, index) => {
          setTimeout(() => {
            setRevealedModules(prev => [...prev, index]);
            playSound('module');
          }, index * 1000); // 1 second between each module
        });

        // Mark as complete after all modules are revealed
        setTimeout(() => {
          setCurrentPhase('complete');
        }, aiModules.length * 1000 + 1000);
      }, 2000); // 2 second delay after teleport

      return () => clearTimeout(timer);
    }
  }, [currentPhase]);

  // Handle module click
  const handleModuleClick = (module: any) => {
    setSelectedModule(module);
    setSelectedModuleId(module.id);
    setCurrentVideoUrl(module.videoUrl);
    setShowVideoModal(true);
    setRobotAnimation('pointing');
    playSound('hover');
    
    // Reset robot animation after 2 seconds
    setTimeout(() => {
      setRobotAnimation('celebrating');
      setTimeout(() => {
        setRobotAnimation('idle');
      }, 1000);
    }, 2000);
    
    if (onModuleClick) {
      onModuleClick(module);
    }
  };

  // Close video modal
  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedModule(null);
    setCurrentVideoUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-gray-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/5 to-transparent"></div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* AI Robot Section */}
      <div className="relative h-screen flex items-center justify-center z-10 pt-20">

        {/* Robot Introduction Phase */}
        <AnimatePresence>
          {currentPhase === 'intro' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center z-10"
            >
              {/* Robot Emoji */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-9xl mb-6 drop-shadow-2xl"
              >
                🤖
              </motion.div>
              
              {/* Speech Bubble */}
              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    key={currentMessageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-md mx-auto"
                  >
                    <div className="text-lg font-medium text-gray-800 dark:text-white">
                      {introMessages[currentMessageIndex]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot in Left Position */}
        <AnimatePresence>
          {(currentPhase === 'moving' || currentPhase === 'revealing' || currentPhase === 'complete') && (
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10"
            >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-9xl drop-shadow-2xl"
                >
                  🤖
                </motion.div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-4 h-4 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot in Final Position */}
        <AnimatePresence>
          {(currentPhase === 'revealing' || currentPhase === 'complete') && (
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10"
            >
              <div className="relative">
                <motion.div
                  animate={robotAnimation === 'pointing' ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                    x: [0, 10, 0]
                  } : robotAnimation === 'celebrating' ? {
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                    y: [0, -10, 0]
                  } : {
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: robotAnimation === 'pointing' ? 0.5 : robotAnimation === 'celebrating' ? 0.3 : 4,
                    repeat: robotAnimation === 'idle' ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                  className="text-9xl drop-shadow-2xl"
                >
                  {robotAnimation === 'pointing' ? '🤖👉' : robotAnimation === 'celebrating' ? '🤖🎉' : '🤖'}
                </motion.div>
                
                {/* Pointing Arrow */}
                <motion.div
                  animate={{ 
                    x: [0, 10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-4xl text-blue-400"
                >
                  👉
                </motion.div>
                
                {/* Floating Particles */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-4 h-4 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/4 -right-6 w-2 h-2 bg-pink-400 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connecting Line */}
        <AnimatePresence>
          {(currentPhase === 'revealing' || currentPhase === 'complete') && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-20 top-1/2 transform -translate-y-1/2 w-[300px] h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-full z-5 shadow-lg"
            />
          )}
        </AnimatePresence>


        {/* Modules List - Two Column Staggered Layout */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] px-4">
          <div className="grid grid-cols-2 gap-6" style={{minHeight: '400px'}}>
            {/* Left Column - First 4 modules */}
            <div className="space-y-3">
              {aiModules.slice(0, 4).map((module, index) => (
                <AnimatePresence key={module.id}>
                  {revealedModules.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, x: -100, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.3
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                        className={`bg-gradient-to-r ${module.color} backdrop-blur-sm rounded-xl p-4 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border h-24 flex items-center ${
                          selectedModuleId === module.id 
                            ? 'border-yellow-400 border-2 shadow-yellow-400/50 shadow-2xl scale-105' 
                            : 'border-white/30 hover:border-white/50'
                        }`}
                      onClick={() => handleModuleClick(module)}
                      onMouseEnter={() => playSound('hover')}
                    >
                      <div className="flex items-center space-x-4 w-full">
                          <div className="text-3xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 flex-shrink-0 drop-shadow-lg">
                            {module.icon}
                          </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-bold text-lg mb-1 line-clamp-1">
                            {module.name}
                          </div>
                          <div className="text-blue-100 dark:text-blue-200 text-sm leading-relaxed line-clamp-2">
                            {module.description}
                          </div>
                        </div>
                        <div className="text-white/60 dark:text-white/70 text-2xl flex-shrink-0">
                          →
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
            
            {/* Right Column - Next 4 modules */}
            <div className="space-y-3">
              {aiModules.slice(4, 8).map((module, originalIndex) => {
                const displayIndex = originalIndex + 4; // Convert to original index
                return (
                  <AnimatePresence key={module.id}>
                    {revealedModules.includes(displayIndex) && (
                      <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeOut",
                          delay: displayIndex * 0.3
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          x: -10,
                          transition: { duration: 0.2 }
                        }}
                        className={`bg-gradient-to-r ${module.color} backdrop-blur-sm rounded-xl p-4 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border h-24 flex items-center ${
                          selectedModuleId === module.id 
                            ? 'border-yellow-400 border-2 shadow-yellow-400/50 shadow-2xl scale-105' 
                            : 'border-white/30 hover:border-white/50'
                        }`}
                        onClick={() => handleModuleClick(module)}
                        onMouseEnter={() => playSound('hover')}
                      >
                        <div className="flex items-center space-x-4 w-full">
                          <div className="text-3xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 flex-shrink-0 drop-shadow-lg">
                            {module.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-lg mb-1 line-clamp-1">
                              {module.name}
                            </div>
                            <div className="text-blue-100 text-sm leading-relaxed line-clamp-2">
                              {module.description}
                            </div>
                          </div>
                          <div className="text-white/60 text-2xl flex-shrink-0">
                            →
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Guest Message for Non-Lead Users */}
      {!isLoggedIn && !hasProvidedLeadDetails && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 right-8 z-30"
        >
          <motion.div 
            className={`bg-gradient-to-br backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 max-w-sm text-center cursor-pointer relative overflow-hidden ${
              isDark 
                ? 'from-indigo-500/20 via-purple-500/20 to-pink-500/20 border-indigo-400/30' 
                : 'from-blue-400/20 via-purple-400/20 to-pink-400/20 border-blue-300/40'
            }`}
            whileHover={{ 
              scale: 1.08,
              rotateY: 5,
              boxShadow: isDark 
                ? "0 25px 50px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(147, 51, 234, 0.2)"
                : "0 25px 50px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(147, 51, 234, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const brochureSection = document.getElementById('brochure-section');
              if (brochureSection) {
                brochureSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <div className="text-2xl mr-2">✨</div>
                <div className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>
                  Want to know more?
                </div>
                <div className="text-2xl ml-2">📚</div>
              </div>
              <div className={`text-sm mb-3 font-medium ${
                isDark ? 'text-indigo-200' : 'text-indigo-700'
              }`}>
                Click here to explore course details
              </div>
              <div className={`text-xs ${
                isDark ? 'text-purple-300' : 'text-purple-600'
              }`}>
                Subscribe for full learning content
              </div>
              
              {/* Call-to-action arrow */}
              <motion.div 
                className="mt-4 text-2xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                👇
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <VideoModal
          isOpen={showVideoModal}
          onClose={closeVideoModal}
          videoUrl={currentVideoUrl}
          title={selectedModule?.name || ''}
          videoScript={selectedModule?.videoScript}
        />
      )}
    </div>
  );
};

export default AIHero;
