import React, { useState, useEffect } from 'react';

interface Module {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  videoUrl?: string;
}

interface SimpleAICharacterProps {
  modules: Module[];
  onModuleSelect: (module: Module) => void;
  selectedModule?: Module | null;
}

const SimpleAICharacter: React.FC<SimpleAICharacterProps> = ({ 
  modules, 
  onModuleSelect, 
  selectedModule 
}) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [revealedModules, setRevealedModules] = useState<Module[]>([]);
  useEffect(() => {
    // AI messages
    const messages = [
      "Hello! I'm your AI learning companion. Let me show you the amazing soft skills modules we have!",
      "In the AI era, these skills will make you unstoppable. Let me reveal them one by one...",
      "Get ready to discover the superpowers that will transform your career!"
    ];

    const startModuleReveal = () => {
      setShowMessage(false);
      
      // Reveal modules one by one
      modules.forEach((module, index) => {
        setTimeout(() => {
          setRevealedModules(prev => [...prev, module]);
        }, index * 1000); // 1 second between each module
      });
    };

    // Start the introduction sequence
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        setCurrentMessage(messages[messageIndex]);
        setShowMessage(true);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
        startModuleReveal();
      }
    }, 2000);

    return () => clearInterval(messageInterval);
  }, [modules]);

  const handleModuleClick = (module: Module) => {
    onModuleSelect(module);
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900">
      {/* AI Character */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl">🤖</span>
        </div>
      </div>

      {/* AI Speech Bubble */}
      {showMessage && (
        <div className="absolute top-20 left-4 right-4 z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-800 dark:text-white font-medium">
              {currentMessage}
            </p>
          </div>
        </div>
      )}

      {/* Module Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pt-20">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className={`
              relative cursor-pointer rounded-xl p-4 shadow-lg transition-all duration-300
              bg-gradient-to-br ${module.color}
              ${revealedModules.includes(module) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              ${selectedModule?.id === module.id ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
              hover:scale-105 hover:shadow-xl
            `}
            onClick={() => handleModuleClick(module)}
            style={{
              transitionDelay: `${index * 0.2}s`
            }}
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
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 rounded-xl flex items-center justify-center transition-all duration-300">
              <div className="w-12 h-12 bg-white bg-opacity-0 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300">
                <span className="text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">▶️</span>
              </div>
            </div>
            
            {/* Selected indicator */}
            {selectedModule?.id === module.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Module Introduction Message */}
      {selectedModule && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 shadow-lg">
            <p className="text-white font-medium text-center">
              Let's explore {selectedModule.name}! Click to watch the video.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleAICharacter;
