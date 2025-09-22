import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Module {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  videoUrl?: string;
}

interface AICharacterProps {
  modules: Module[];
  onModuleSelect: (module: Module) => void;
  selectedModule?: Module | null;
}

const AICharacter: React.FC<AICharacterProps> = ({ 
  modules, 
  onModuleSelect, 
  selectedModule 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isIntroducing, setIsIntroducing] = useState(true);
  const [revealedModules, setRevealedModules] = useState<Module[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // AI Introduction messages
  const introductionMessages = [
    "Hello! I'm your AI learning companion. Let me show you the amazing soft skills modules we have!",
    "In the AI era, these skills will make you unstoppable. Let me reveal them one by one...",
    "Get ready to discover the superpowers that will transform your career!"
  ];

  // Module introduction messages
  const moduleMessages = {
    'communication': "First, let's master Communication Skills - the art of human connection in the AI era!",
    'adaptive-learning': "Next, Adaptive Learning - your secret weapon for staying ahead of the curve!",
    'prompt-engineering': "Here's Prompt Engineering - the language that makes AI your superpower!",
    'critical-thinking': "Critical Thinking - the problem-solving superpower that finds solutions others miss!",
    'design-thinking': "Design Thinking - the creative superpower that invents breakthrough solutions!",
    'teamwork': "Teamwork & Collaboration - the superpower that brings out the best in everyone!",
    'data-driven': "Data-Driven Decision Making - the analytical superpower that makes decisions that work!",
    'mental-health': "Finally, Mental & Physical Health - the wellness superpower that makes you thrive!"
  };

  useEffect(() => {
    if (isIntroducing) {
      // Start the AI introduction sequence
      const timer = setTimeout(() => {
        setIsIntroducing(false);
        startModuleReveal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isIntroducing]);

  const startModuleReveal = () => {
    modules.forEach((module, index) => {
      setTimeout(() => {
        setRevealedModules(prev => [...prev, module]);
        setIsSpeaking(true);
        
        // Stop speaking after 2 seconds
        setTimeout(() => {
          setIsSpeaking(false);
        }, 2000);
      }, index * 1500); // 1.5 seconds between each module reveal
    });
  };

  const handleModuleClick = (module: Module) => {
    onModuleSelect(module);
  };

  return (
    <div className="relative w-full h-full">
      {/* AI Character */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-4 z-10"
      >
        <div className="relative">
          {/* AI Avatar */}
          <motion.div
            animate={{ 
              scale: isSpeaking ? 1.1 : 1,
              rotate: isSpeaking ? [0, -5, 5, 0] : 0
            }}
            transition={{ 
              duration: 0.5,
              repeat: isSpeaking ? Infinity : 0,
              repeatType: "reverse"
            }}
            className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl">🤖</span>
          </motion.div>
          
          {/* Speaking indicator */}
          <AnimatePresence>
            {isSpeaking && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-3 h-3 bg-white rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* AI Speech Bubble */}
      <AnimatePresence>
        {isIntroducing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 z-10"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border-l-4 border-blue-500">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-gray-800 dark:text-white font-medium"
              >
                {introductionMessages[currentStep]}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Module Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pt-20">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: revealedModules.includes(module) ? 1 : 0,
              scale: revealedModules.includes(module) ? 1 : 0,
              rotate: revealedModules.includes(module) ? 0 : -180
            }}
            transition={{ 
              duration: 0.8,
              delay: revealedModules.includes(module) ? 0 : index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleModuleClick(module)}
            className={`
              relative cursor-pointer rounded-xl p-4 shadow-lg
              bg-gradient-to-br ${module.color}
              ${selectedModule?.id === module.id ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
              transition-all duration-300
            `}
          >
            {/* Module Icon */}
            <div className="text-4xl mb-2 text-center">
              {module.icon}
            </div>
            
            {/* Module Name */}
            <h3 className="text-sm font-bold text-white text-center mb-2">
              {module.name}
            </h3>
            
            {/* Play Button Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
            </motion.div>
            
            {/* Selected indicator */}
            {selectedModule?.id === module.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-sm">✓</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Module Introduction Message */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-4 left-4 right-4 z-10"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 shadow-lg">
              <p className="text-white font-medium text-center">
                {moduleMessages[selectedModule.id as keyof typeof moduleMessages] || 
                 `Let's explore ${selectedModule.name}!`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AICharacter;


