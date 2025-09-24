import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import VideoModal from './VideoModal';
import { aiModules } from '../data/aiModulesData';

interface Skill {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  color: string;
  icon: string;
}

// Use the same data source as AIHero component
const skills = aiModules.map((module, index) => ({
  id: index + 1,
  title: module.name,
  description: module.description,
  videoUrl: module.videoUrl || '',
  color: module.color,
  icon: module.icon
}));

interface HeroProps {
  isLoggedIn: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoggedIn }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(null);

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'neon-blue': 'from-neon-blue to-blue-400',
      'neon-green': 'from-neon-green to-emerald-400',
      'neon-purple': 'from-neon-purple to-violet-400',
      'neon-pink': 'from-neon-pink to-rose-400',
      'neon-yellow': 'from-neon-yellow to-orange-400',
      'neon-red': 'from-neon-red to-pink-400'
    };
    return colorMap[color] || 'from-neon-blue to-blue-400';
  };

  const handleSkillClick = (skill: Skill, index: number) => {
    setSelectedSkill(skill);
    console.log('Skill clicked:', skill.title);
    
    // Toggle tooltip visibility
    if (activeTooltipIndex === index) {
      setActiveTooltipIndex(null);
    } else {
      setActiveTooltipIndex(index);
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side - Interactive Skill Wheel */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Master the Skills of the{' '}
                <span className="gradient-text">Ai-ERA</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Develop essential soft skills that will make you indispensable in the age of artificial intelligence
              </motion.p>
            </div>

            {/* Circular Skill Wheel */}
            <div className="skill-wheel-container relative pb-32 pt-8">
                             <div className="relative w-[32rem] h-[32rem] mx-auto">
                {skills.map((skill, index) => {
                  // Calculate position on the circle
                  const angle = (index * 45); // Start from top, 45° between each card
                  const radius = 240; // Distance from center
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  // Smart tooltip positioning to avoid overlap
                  let tooltipX, tooltipY;
                  
                  // For Prompt-Context (index 2), position tooltip to the left
                  if (index === 2) {
                    tooltipX = Math.cos((angle - 30) * Math.PI / 180) * 80; // Left of the card
                    tooltipY = Math.sin((angle - 30) * Math.PI / 180) * 80;
                  } else {
                    // For other cards, position tooltips inside the circle
                    tooltipX = Math.cos(angle * Math.PI / 180) * 100;
                    tooltipY = Math.sin(angle * Math.PI / 180) * 100;
                  }
                  
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.5, 
                        type: "spring",
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{ scale: 1.1, z: 30, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSkillClick(skill, index)}
                      className="cursor-pointer group absolute z-20"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`
                        w-28 h-28 rounded-2xl bg-gradient-to-br ${getColorClass(skill.color)} 
                        p-5 flex flex-col items-center justify-center text-center
                        shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                        ring-2 ring-white/20 hover:ring-white/40
                        hover:scale-110 hover:-translate-y-2 hover:rotate-1
                        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:ring-4 hover:ring-blue-400/50
                        ${selectedSkill.id === skill.id ? 'ring-4 ring-white ring-opacity-50 scale-105 animate-pulse' : ''}
                      `}>
                        <span className="text-3xl mb-2 drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-2xl">
                          {skill.icon}
                        </span>
                        <p className="text-sm font-extrabold leading-tight text-black dark:text-white drop-shadow-xl px-1 text-center break-words tracking-wider uppercase">
                          {skill.title.includes('Communication') ? 'Comm' : 
                           skill.title.includes('Adaptive') ? 'Adaptive' :
                           skill.title.includes('Prompt-Context') ? 'Prompt' :
                           skill.title.includes('Critical') ? 'Critical' :
                           skill.title.includes('Design') ? 'Design' :
                           skill.title.includes('Teamwork') ? 'Team' :
                           skill.title.includes('Data-Driven') ? 'Data' :
                           skill.title.includes('Managing') ? 'Health' :
                           skill.title.split(' ')[0]}
                        </p>
                      </div>
                      
                      {/* Smart Tooltip Positioning */}
                      <AnimatePresence>
                        {activeTooltipIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50"
                            style={{
                              left: `calc(50% + ${tooltipX}px)`,
                              top: `calc(50% + ${tooltipY}px)`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            <div className="bg-white dark:bg-dark-200 rounded-lg p-3 shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs min-w-[200px] text-center">
                              <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold leading-relaxed">
                                {skill.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                                 })}
               </div>
             </div>
          </motion.div>

          {/* Right Side - Video Player */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-lg mx-auto lg:mx-0 lg:ml-16"
          >
            <div className="neon-border rounded-2xl overflow-hidden bg-black">
              <div className="aspect-[4/3] relative">
                <iframe
                  src={selectedSkill.videoUrl}
                  title={selectedSkill.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Fullscreen Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <Maximize2 size={20} />
                </motion.button>
              </div>
              
              {/* Video Info */}
              <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
                <h3 className="text-white font-semibold mb-2">{selectedSkill.title}</h3>
                <p className="text-gray-300 text-sm">{selectedSkill.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedSkill.videoUrl}
        title={selectedSkill.title}
      />
    </section>
  );
};

export default Hero;
