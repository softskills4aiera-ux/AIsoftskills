import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Target, Brain, Eye, Zap } from 'lucide-react';
import { ChallengeResult, ListeningAssessment } from '../../types/challengeTypes';

interface ListeningAssessmentProps {
  result: ChallengeResult;
  assessment: ListeningAssessment;
  onRetake?: () => void;
  onContinue: () => void;
}

const ListeningAssessment: React.FC<ListeningAssessmentProps> = ({
  result,
  assessment,
  onRetake,
  onContinue
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'Information Retention': return <Brain size={20} />;
      case 'Comprehension': return <Eye size={20} />;
      case 'Attention Management': return <Target size={20} />;
      case 'Critical Analysis': return <Zap size={20} />;
      default: return <TrendingUp size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Overall Score */}
      <div className="emoji-card text-center">
        <div className="text-6xl mb-4">
          {result.totalScore >= 90 ? '🏆' : 
           result.totalScore >= 80 ? '🥇' :
           result.totalScore >= 70 ? '🥈' :
           result.totalScore >= 60 ? '🥉' : '📚'}
        </div>
        <h3 className="text-2xl font-bold mb-2">{result.level}</h3>
        <div className={`text-4xl font-bold mb-4 ${getScoreColor(result.totalScore)}`}>
          {result.totalScore}%
        </div>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {assessment.scoringRubric[
            Object.keys(assessment.scoringRubric).find(range => {
              const [min, max] = range.split('-').map(Number);
              return result.totalScore >= min && result.totalScore <= max;
            }) || '0-59'
          ]?.description}
        </p>
      </div>

      {/* Skill Breakdown */}
      <div className="emoji-card">
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="text-blue-500" />
          Listening Skills Breakdown
        </h4>
        
        <div className="space-y-4">
          {Object.entries(result.skillBreakdown).map(([skill, score]) => (
            <div key={skill} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-500">
                  {getSkillIcon(skill)}
                </div>
                <span className="text-base font-medium">{skill}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      score >= 80 ? 'bg-green-500' :
                      score >= 70 ? 'bg-blue-500' :
                      score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className={`text-sm font-bold ${getScoreColor(score)}`}>
                  {score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Feedback */}
      <div className="emoji-card">
        <h4 className="text-lg font-semibold mb-4 text-blue-600">💡 Personalized Feedback</h4>
        <div className="space-y-3">
          {result.feedback.map((feedback, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-blue-500 mt-1">•</div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="emoji-card">
        <h4 className="text-lg font-semibold mb-4 text-green-600">🚀 Recommended Next Steps</h4>
        <div className="space-y-3">
          {result.nextSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                {index + 1}
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        {result.canRetake && onRetake && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetake}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            🔄 Retake Challenge
          </motion.button>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          ✅ Continue Learning
        </motion.button>
      </div>

      {/* Achievement Badge */}
      {result.totalScore >= 80 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="emoji-card text-center bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-300 dark:border-yellow-600"
        >
          <Award className="text-yellow-600 mx-auto mb-3" size={48} />
          <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-2">
            Achievement Unlocked!
          </h4>
          <p className="text-base text-yellow-600 dark:text-yellow-400">
            Active Listening Badge Earned
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ListeningAssessment;





