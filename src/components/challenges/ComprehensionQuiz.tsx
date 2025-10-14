import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';
import { ComprehensionQuestion, ChallengeResult } from '../../types/challengeTypes';
import { ListeningSkillsService } from '../../services/listeningSkillsService';

interface ComprehensionQuizProps {
  questions: ComprehensionQuestion[];
  onComplete: (result: ChallengeResult) => void;
  timeLimit?: number; // in seconds
}

const ComprehensionQuiz: React.FC<ComprehensionQuizProps> = ({
  questions,
  onComplete,
  timeLimit = 300 // 5 minutes default
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: any }>({});
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Timer effect
  React.useEffect(() => {
    if (quizStarted && timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResults) {
      handleSubmitQuiz();
    }
  }, [timeRemaining, quizStarted, showResults]);

  const handleAnswerChange = (questionId: number, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    const evaluation = ListeningSkillsService.evaluateComprehension(questions, userAnswers);
    const skillBreakdown = ListeningSkillsService.calculateSkillBreakdown(
      {
        criteria: [
          { skill: "Information Retention", weight: 30, measures: [] },
          { skill: "Comprehension", weight: 25, measures: [] },
          { skill: "Attention Management", weight: 25, measures: [] },
          { skill: "Critical Analysis", weight: 20, measures: [] }
        ],
        scoringRubric: {}
      },
      evaluation.score,
      evaluation.results
    );

    const feedback = ListeningSkillsService.generatePersonalizedFeedback(
      evaluation.score,
      skillBreakdown,
      {
        criteria: [
          { skill: "Information Retention", weight: 30, measures: [] },
          { skill: "Comprehension", weight: 25, measures: [] },
          { skill: "Attention Management", weight: 25, measures: [] },
          { skill: "Critical Analysis", weight: 20, measures: [] }
        ],
        scoringRubric: {}
      }
    );

    const result: ChallengeResult = {
      totalScore: evaluation.score,
      skillBreakdown,
      level: evaluation.score >= 90 ? "Expert Listener" : 
             evaluation.score >= 80 ? "Proficient Listener" :
             evaluation.score >= 70 ? "Developing Listener" :
             evaluation.score >= 60 ? "Novice Listener" : "Beginning Listener",
      feedback: feedback.feedback,
      nextSteps: feedback.nextSteps,
      canRetake: evaluation.score < 80,
      completedAt: new Date().toISOString()
    };

    setShowResults(true);
    onComplete(result);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="emoji-card text-center"
      >
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="text-xl font-bold mb-4">Ready for Comprehension Assessment?</h3>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          You'll have {Math.floor(timeLimit / 60)} minutes to answer {questions.length} questions about what you just heard.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startQuiz}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Assessment
        </motion.button>
      </motion.div>
    );
  }

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="emoji-card text-center"
      >
        <div className="text-5xl mb-4">🏆</div>
        <h3 className="text-xl font-bold mb-4">Assessment Complete!</h3>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Results are being processed. You'll see your detailed feedback in the next step.
        </p>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = userAnswers[question.id] !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Timer and Progress */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-600">
          <Clock size={20} />
          <span className="font-medium">Time: {formatTime(timeRemaining)}</span>
        </div>
        <div className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="emoji-card"
        >
          <h3 className="text-lg font-semibold mb-4">
            {question.question}
          </h3>

          {/* Multiple Choice */}
          {question.type === 'multiple-choice' && (
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={userAnswers[question.id] === index}
                    onChange={() => handleAnswerChange(question.id, index)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-base">{option}</span>
                </label>
              ))}
            </div>
          )}

          {/* Multiple Select */}
          {question.type === 'multiple-select' && (
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={(userAnswers[question.id] as number[])?.includes(index) || false}
                    onChange={(e) => {
                      const currentSelections = (userAnswers[question.id] as number[]) || [];
                      if (e.target.checked) {
                        handleAnswerChange(question.id, [...currentSelections, index]);
                      } else {
                        handleAnswerChange(question.id, currentSelections.filter(i => i !== index));
                      }
                    }}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-base">{option}</span>
                </label>
              ))}
            </div>
          )}

          {/* Short Answer */}
          {(question.type === 'short-answer' || question.type === 'comprehension') && (
            <textarea
              value={userAnswers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
          )}

          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Points: {question.points}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isAnswered
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ComprehensionQuiz;





