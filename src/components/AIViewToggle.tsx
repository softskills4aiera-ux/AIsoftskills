import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AIModuleDisplay from './AIModuleDisplay';
import SkillsSection from './SkillsSection';

const AIViewToggle: React.FC = () => {
  const [useAIView, setUseAIView] = useState(false);

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setUseAIView(!useAIView)}
          className={`
            px-6 py-3 rounded-full font-semibold transition-all duration-300
            ${useAIView 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }
          `}
        >
          {useAIView ? '🤖 AI View Active' : '🔄 Switch to AI View'}
        </motion.button>
      </div>

      {/* Conditional Rendering */}
      {useAIView ? (
        <AIModuleDisplay />
      ) : (
        <SkillsSection />
      )}
    </div>
  );
};

export default AIViewToggle;


