import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Volume2,
  VolumeX,
  CheckCircle,
  Award,
  Share2
} from 'lucide-react';
import { 
  module1Subtopics, 
  module1Assessment,
  ModuleProgress,
  SubtopicData,
  saveModuleProgress,
  loadModuleProgress,
  updateSubtopicProgress,
  generatePersonalizedFeedback
} from '../data/module1Data';

interface ModuleStep {
  id: string;
  title: string;
  emoji: string;
  description: string;
  completed: boolean;
  content: any;
}

interface UserProgress {
  xp: number;
  streak: number;
  level: number;
  badges: string[];
}

const CommunicationModule: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 0,
    streak: 3,
    level: 1,
    badges: []
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const moduleSteps: ModuleStep[] = [
    {
      id: 'discover',
      title: 'Discover',
      emoji: '🎯',
      description: 'Snackable Explainer',
      completed: false,
      content: {
        type: 'explainer',
        title: 'Communication Skills 101',
        points: [
          '🗣️ Active listening is key to understanding others',
          '💬 Clear messaging prevents misunderstandings',
          '🤝 Empathy builds stronger relationships',
          '📢 Public speaking boosts confidence',
          '✍️ Written communication is just as important'
        ]
      }
    },
    {
      id: 'play',
      title: 'Play',
      emoji: '🎥',
      description: 'Video Lesson',
      completed: false,
      content: {
        type: 'video',
        title: 'Master the Art of Conversation',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        reactions: ['❤️', '👍', '💡']
      }
    },
    {
      id: 'reflect',
      title: 'Reflect',
      emoji: '✅',
      description: 'Quick Quiz',
      completed: false,
      content: {
        type: 'quiz',
        title: 'Test Your Knowledge',
        questions: [
          {
            id: 1,
            question: 'What is the most important aspect of communication?',
            options: ['Speaking clearly', 'Active listening', 'Using big words', 'Talking fast'],
            correct: 1
          },
          {
            id: 2,
            question: 'How should you handle misunderstandings?',
            options: ['Ignore them', 'Ask clarifying questions', 'Blame others', 'Speak louder'],
            correct: 1
          }
        ]
      }
    },
    {
      id: 'challenge',
      title: 'Challenge',
      emoji: '🎮',
      description: 'Mini Simulation',
      completed: false,
      content: {
        type: 'simulation',
        title: 'Handle This Situation',
        scenario: 'Your colleague keeps interrupting you in meetings. How do you respond?',
        options: [
          { id: 'a', text: 'Interrupt them back to show dominance', emoji: '😤' },
          { id: 'b', text: 'Address it privately and set boundaries', emoji: '🤝' },
          { id: 'c', text: 'Ignore it and hope it stops', emoji: '🙈' },
          { id: 'd', text: 'Complain to your manager', emoji: '📢' }
        ],
        correct: 'b'
      }
    },
    {
      id: 'action',
      title: 'Action',
      emoji: '📝',
      description: 'Assignment',
      completed: false,
      content: {
        type: 'assignment',
        title: 'Practice Makes Perfect',
        description: 'Record a 2-minute video introducing yourself to a new team member. Focus on clear communication and confidence.',
        placeholder: 'Share your video or describe your approach...'
      }
    },
    {
      id: 'feedback',
      title: 'Feedback',
      emoji: '🤖',
      description: 'AI Feedback',
      completed: false,
      content: {
        type: 'feedback',
        title: 'Personalized Feedback',
        description: 'Get instant AI-powered feedback on your communication style.'
      }
    },
    {
      id: 'win',
      title: 'Win',
      emoji: '🏆',
      description: 'Badge Unlock',
      completed: false,
      content: {
        type: 'badge',
        title: 'Communication Champion',
        description: 'You\'ve mastered the basics of effective communication!',
        badgeIcon: '🗣️',
        xpReward: 100
      }
    },
    {
      id: 'share',
      title: 'Share',
      emoji: '📊',
      description: 'Progress Dashboard',
      completed: false,
      content: {
        type: 'dashboard',
        title: 'Your Progress',
        description: 'Track your learning journey and achievements.'
      }
    }
  ];

  const handleStepComplete = (stepIndex: number) => {
    const newSteps = [...moduleSteps];
    newSteps[stepIndex].completed = true;
    
    // Add XP
    setUserProgress(prev => ({
      ...prev,
      xp: prev.xp + 50,
      level: Math.floor((prev.xp + 50) / 200) + 1
    }));

    // Show confetti for quiz completion
    if (stepIndex === 2) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    // Move to next step
    if (stepIndex < moduleSteps.length - 1) {
      setTimeout(() => setCurrentStep(stepIndex + 1), 1000);
    }
  };

  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSimulationChoice = (choiceId: string) => {
    if (choiceId === moduleSteps[3].content.correct) {
      handleStepComplete(3);
    }
  };

  const handleAssignmentSubmit = () => {
    handleStepComplete(4);
  };

  const generateFeedback = () => {
    setFeedbackText('Great job! Your communication shows confidence and clarity. Keep practicing active listening and you\'ll become a communication expert! 🎉');
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      handleStepComplete(5);
    }, 3000);
  };

  const renderStepContent = (step: ModuleStep, index: number) => {
    switch (step.content.type) {
      case 'explainer':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="grid gap-4">
              {step.content.points.map((point: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="emoji-card"
                >
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{point}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStepComplete(index)}
              className="btn-neon w-full"
            >
              Ready to communicate! 🗣️
            </motion.button>
          </motion.div>
        );

      case 'video':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-neon-lime to-teal-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">Communication Video</p>
                  <p className="text-sm opacity-80">Click to play</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setVideoMuted(!videoMuted)}
                  className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {step.content.reactions.map((reaction: string, i: number) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl hover:animate-bounce"
                  >
                    {reaction}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStepComplete(index)}
              className="btn-neon w-full"
            >
              Video watched! Next step 🎯
            </motion.button>
          </motion.div>
        );

      case 'quiz':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            {step.content.questions.map((question: any, qIndex: number) => (
              <div key={question.id} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {question.question}
                </h4>
                <div className="grid gap-3">
                  {question.options.map((option: string, oIndex: number) => (
                    <motion.button
                      key={oIndex}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuizAnswer(question.id, option)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 ${
                        quizAnswers[question.id] === option
                          ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-midnight-900 shadow-lg'
                          : 'bg-white/50 dark:bg-midnight-700/50 hover:bg-white/70 dark:hover:bg-midnight-600/50'
                      }`}
                    >
                      <span className="font-medium text-gray-800 dark:text-white">{option}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStepComplete(index)}
              disabled={Object.keys(quizAnswers).length < step.content.questions.length}
              className="btn-neon w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answers 🎯
            </motion.button>
          </motion.div>
        );

      case 'simulation':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="emoji-card">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-6">
                {step.content.scenario}
              </p>
              <div className="grid gap-3">
                {step.content.options.map((option: any) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSimulationChoice(option.id)}
                    className="p-4 rounded-xl text-left bg-white/50 dark:bg-midnight-700/50 hover:bg-white/70 dark:hover:bg-midnight-600/50 transition-all duration-200 flex items-center gap-3"
                  >
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-100">{option.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'assignment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="emoji-card">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-6">
                {step.content.description}
              </p>
              <div className="space-y-4">
                <textarea
                  placeholder={step.content.placeholder}
                  className="w-full p-4 rounded-xl bg-white/50 dark:bg-midnight-700/50 border border-white/30 dark:border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-neon-lime/50"
                  rows={4}
                />
                <div className="flex gap-3">
                  <button className="btn-secondary flex-1">
                    📹 Record Video
                  </button>
                  <button className="btn-secondary flex-1">
                    📎 Upload File
                  </button>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAssignmentSubmit}
              className="btn-neon w-full"
            >
              Submit Assignment 🎯
            </motion.button>
          </motion.div>
        );

      case 'feedback':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="emoji-card">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-6">
                {step.content.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateFeedback}
                className="btn-neon w-full"
              >
                Generate AI Feedback 🤖
              </motion.button>
            </div>
            
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="emoji-card bg-gradient-to-br from-neon-lime/20 to-teal-400/20 border-neon-lime/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-midnight-900 font-bold">
                      🤖
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-gray-100">{feedbackText}</p>
                      <div className="flex gap-1 mt-2">
                        <div className="w-2 h-2 bg-neon-lime rounded-full animate-typing"></div>
                        <div className="w-2 h-2 bg-neon-lime rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-neon-lime rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );

      case 'badge':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-6xl mb-6 shadow-2xl"
              >
                {step.content.badgeIcon}
              </motion.div>
              <h3 className="text-3xl font-bold gradient-text-lime mb-2">{step.content.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{step.content.description}</p>
              <div className="xp-badge text-lg">
                +{step.content.xpReward} XP
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStepComplete(index)}
              className="btn-neon w-full"
            >
              Claim Badge! 🏆
            </motion.button>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text-lime">{step.content.title}</h3>
            <div className="grid gap-6">
              <div className="emoji-card">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Communication Stats</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">XP Progress</span>
                      <span className="xp-badge">{userProgress.xp} XP</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(userProgress.xp % 200) / 2}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Current Level</span>
                    <span className="text-lg font-bold gradient-text-lime">Level {userProgress.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Streak</span>
                    <span className="streak-counter">🔥 {userProgress.streak} days</span>
                  </div>
                </div>
              </div>
              
              <div className="emoji-card">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Share Your Progress</h4>
                <div className="flex gap-3">
                  <button className="btn-secondary flex-1">
                    🗣️ Share Video
                  </button>
                  <button className="btn-secondary flex-1">
                    📧 Email Progress
                  </button>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStepComplete(index)}
              className="btn-neon w-full"
            >
              Complete Module! 🎉
            </motion.button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900">
      {/* Header */}
      <div className="sticky top-0 z-50 glassmorphism dark:glassmorphism-dark border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-lime to-teal-400 rounded-2xl flex items-center justify-center text-midnight-900 font-bold text-xl">
                🗣️
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text-lime">Communication Skills</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Module 1 of 8</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="streak-counter">🔥 {userProgress.streak}</div>
              <div className="xp-badge">{userProgress.xp} XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          {moduleSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-midnight-900 shadow-lg scale-110'
                    : step.completed
                    ? 'bg-gradient-to-r from-teal-500 to-violet-500 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-midnight-700/50 text-gray-400'
                }`}
              >
                {step.completed ? '✅' : step.emoji}
              </motion.div>
              {index < moduleSteps.length - 1 && (
                <div className={`w-16 h-1 mx-2 rounded-full ${
                  step.completed ? 'bg-gradient-to-r from-teal-500 to-violet-500' : 'bg-gray-300 dark:bg-midnight-600'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Current Step Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card-genz p-8"
          >
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">{moduleSteps[currentStep].emoji}</div>
              <h2 className="text-3xl font-bold gradient-text-lime mb-2">
                {moduleSteps[currentStep].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {moduleSteps[currentStep].description}
              </p>
            </div>
            
            {renderStepContent(moduleSteps[currentStep], currentStep)}
          </motion.div>
        </div>
      </div>

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100,
                  rotate: 0 
                }}
                animate={{ 
                  y: -100, 
                  rotate: 360,
                  opacity: 0 
                }}
                transition={{ 
                  duration: 3, 
                  delay: Math.random() * 0.5,
                  ease: "easeOut" 
                }}
                className="absolute text-4xl"
              >
                🗣️
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunicationModule;