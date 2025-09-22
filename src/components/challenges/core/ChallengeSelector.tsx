import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Clock, Award } from 'lucide-react';

interface ChallengeOption {
  id: string;
  title: string;
  description: string;
  type: 'video-assessment' | 'real-world-practice' | 'interactive-simulation';
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: React.ReactNode;
  xpReward: number;
}

interface ChallengeSelectorProps {
  subtopicTitle: string;
  subtopicEmoji: string;
  challenges: ChallengeOption[];
  onSelectChallenge: (challengeId: string) => void;
  completedChallenges: string[];
}

const ChallengeSelector: React.FC<ChallengeSelectorProps> = ({
  subtopicTitle,
  subtopicEmoji,
  challenges,
  onSelectChallenge,
  completedChallenges
}) => {
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const isCompleted = (challengeId: string) => completedChallenges.includes(challengeId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="emoji-card text-center">
        <div className="text-5xl mb-3">{subtopicEmoji}</div>
        <h3 className="text-2xl font-bold mb-3">{subtopicTitle} Challenges</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Choose your learning path. You can complete multiple challenges for maximum mastery!
        </p>
      </div>

      {/* Challenge Options */}
      <div className="grid gap-4">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="emoji-card cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => onSelectChallenge(challenge.id)}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  {challenge.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold">{challenge.title}</h4>
                  {isCompleted(challenge.id) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  )}
                </div>
                
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {challenge.description}
                </p>

                {/* Challenge Details */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{challenge.duration}</span>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Award size={14} />
                    <span>{challenge.xpReward} XP</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-blue-500">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="emoji-card">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-1">Challenge Progress</h4>
            <p className="text-base text-gray-600 dark:text-gray-400">
              {completedChallenges.length} of {challenges.length} challenges completed
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round((completedChallenges.length / challenges.length) * 100)}%
            </div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(completedChallenges.length / challenges.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeSelector;



