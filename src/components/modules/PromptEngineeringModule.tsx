import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, CheckCircle, X, Award, Share2, Users2, Heart, Zap } from 'lucide-react';
import VideoModal from '../VideoModal';
import { module3Subtopics, module3Assessment } from '../../data/module3Data';

const PromptEngineeringModule: React.FC = () => {
  const [currentView, setCurrentView] = useState<'intro' | 'subtopic-select' | 'subtopic' | 'assessment' | 'assessment-results'>('intro');
  const [currentSubtopic, setCurrentSubtopic] = useState(0);
  const [currentStep, setCurrentStep] = useState<'discover' | 'video' | 'quiz' | 'quiz-results' | 'challenge' | 'feedback' | 'badge'>('discover');
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  const [quizScore, setQuizScore] = useState(0);
  const [quizResults, setQuizResults] = useState<{[key: number]: boolean}>({});
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [completedSubtopics, setCompletedSubtopics] = useState<number[]>([]);
  const [assessmentAnswers, setAssessmentAnswers] = useState<{[key: number]: number}>({});
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  const currentSubtopicData = module3Subtopics[currentSubtopic];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    const results: {[key: number]: boolean} = {};
    let correct = 0;
    
    currentSubtopicData.quiz.questions.forEach((question) => {
      const userAnswer = quizAnswers[question.id];
      const isCorrect = userAnswer === question.correct;
      results[question.id] = isCorrect;
      if (isCorrect) correct++;
    });
    
    setQuizResults(results);
    setQuizScore(correct);
    setCurrentStep('quiz-results');
  };

  const handleStepNavigation = (step: typeof currentStep) => {
    setCurrentStep(step);
  };

  const handleNextStep = () => {
    const steps = ['discover', 'video', 'quiz', 'quiz-results', 'challenge', 'feedback', 'badge'] as const;
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePreviousStep = () => {
    const steps = ['discover', 'video', 'quiz', 'quiz-results', 'challenge', 'feedback', 'badge'] as const;
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleSubtopicComplete = () => {
    if (!completedSubtopics.includes(currentSubtopic)) {
      setCompletedSubtopics(prev => [...prev, currentSubtopic]);
      setEarnedBadges(prev => [...prev, currentSubtopicData.badge.name]);
    }
    setCurrentView('subtopic-select');
    setCurrentStep('discover');
    setQuizAnswers({});
    setQuizResults({});
    setQuizScore(0);
  };

  const renderIntroView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center py-20"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-8xl mb-6"
      >
        🤖
      </motion.div>
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Prompt-Context Engineering (Machine)
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        Master the art of communicating with AI systems. Learn to craft effective prompts, 
        manage context, and optimize AI interactions for better results in academic and professional settings.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-lg font-semibold mb-2">Prompt Design</h3>
          <p className="text-gray-600 dark:text-gray-400">Learn to create clear, effective prompts that get desired AI responses</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold mb-2">Context Management</h3>
          <p className="text-gray-600 dark:text-gray-400">Master the art of providing relevant context for better AI understanding</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="text-4xl mb-4">⚖️</div>
          <h3 className="text-lg font-semibold mb-2">Ethical AI Use</h3>
          <p className="text-gray-600 dark:text-gray-400">Understand responsible AI usage and bias recognition</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentView('subtopic-select')}
        className="btn-primary text-lg px-8 py-4"
      >
        Start AI Mastery Journey
      </motion.button>
    </motion.div>
  );

  const renderSubtopicSelectView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your AI Skill Path
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Select a subtopic to master AI communication and prompt engineering
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {module3Subtopics.map((subtopic, index) => (
          <motion.div
            key={subtopic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => {
              setCurrentSubtopic(index);
              setCurrentView('subtopic');
              setCurrentStep('discover');
            }}
            className={`card-genz cursor-pointer relative overflow-hidden ${
              completedSubtopics.includes(index) ? 'ring-2 ring-green-400' : ''
            }`}
          >
            {completedSubtopics.includes(index) && (
              <div className="absolute top-4 right-4 text-green-400">
                <CheckCircle size={24} />
              </div>
            )}
            <div className="text-4xl mb-4">{subtopic.emoji}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {subtopic.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                {subtopic.context}
              </span>
              <span>6 steps</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {subtopic.discover.scenario.substring(0, 100)}...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                Start Learning →
              </span>
              {completedSubtopics.includes(index) && (
                <span className="text-green-600 dark:text-green-400 text-sm">
                  ✓ Completed
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderStepNavigation = () => {
    const steps = [
      { key: 'discover', label: 'Discover', icon: '🔍' },
      { key: 'video', label: 'Learn', icon: '📹' },
      { key: 'quiz', label: 'Quiz', icon: '❓' },
      { key: 'quiz-results', label: 'Results', icon: '📊' },
      { key: 'challenge', label: 'Practice', icon: '💪' },
      { key: 'feedback', label: 'Feedback', icon: '💬' },
      { key: 'badge', label: 'Badge', icon: '🏆' }
    ];

    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          {steps.map((step, index) => {
            const isActive = step.key === currentStep;
            const isCompleted = steps.findIndex(s => s.key === currentStep) > index;
            
            return (
              <motion.button
                key={step.key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStepNavigation(step.key as typeof currentStep)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg'
                    : isCompleted
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-sm">{step.icon}</span>
                <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                {isCompleted && <CheckCircle size={16} className="text-green-500" />}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSubtopicView = () => {
    if (!currentSubtopicData) return null;

    const renderStepContent = () => {
      switch (currentStep) {
        case 'discover':
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentSubtopicData.emoji}</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Discover: {currentSubtopicData.title}
                </h2>
              </div>

              <div className="card-genz mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Real-World Scenario
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {currentSubtopicData.discover.scenario}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-genz">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">⚠️</span>
                    Problems Identified
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.discover.problemExplanation.map((problem, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-genz">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">💡</span>
                    Solution Approach
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.discover.solutionApproach.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );

        case 'video':
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📹</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Learn: {currentSubtopicData.video.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Duration: {currentSubtopicData.video.duration} minutes
                </p>
              </div>

              <div className="card-genz mb-8">
                <div className="flex items-center justify-center mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowVideoModal(true)}
                    className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                  >
                    <Play size={24} />
                    <span>Watch Learning Video</span>
                  </motion.button>
                </div>
              </div>

              <div className="card-genz">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {currentSubtopicData.video.content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );

        case 'quiz':
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">❓</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Quiz: {currentSubtopicData.quiz.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Test your understanding with {currentSubtopicData.quiz.questions.length} questions
                </p>
              </div>

              <div className="space-y-6">
                {currentSubtopicData.quiz.questions.map((question, qIndex) => (
                  <div key={question.id} className="card-genz">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Question {qIndex + 1}: {question.question}
                    </h3>
                    <div className="space-y-3">
                      {question.options.map((option, oIndex) => (
                        <motion.button
                          key={oIndex}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleAnswerSelect(question.id, oIndex)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            quizAnswers[question.id] === oIndex
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                              quizAnswers[question.id] === oIndex
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}>
                              {quizAnswers[question.id] === oIndex && (
                                <div className="w-full h-full rounded-full bg-white scale-50"></div>
                              )}
                            </div>
                            <span className="text-base leading-relaxed">{option}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < currentSubtopicData.quiz.questions.length}
                  className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </motion.button>
              </div>
            </motion.div>
          );

        case 'quiz-results':
          const percentage = Math.round((quizScore / currentSubtopicData.quiz.questions.length) * 100);
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📊</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Quiz Results
                </h2>
                <div className="text-2xl font-bold mb-2">
                  <span className={percentage >= 70 ? 'text-green-600' : 'text-red-600'}>
                    {quizScore}/{currentSubtopicData.quiz.questions.length} ({percentage}%)
                  </span>
                </div>
                <p className={`text-lg ${percentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                  {percentage >= 70 ? '🎉 Great job! You passed!' : '💪 Keep learning! Try again.'}
                </p>
              </div>

              <div className="space-y-4">
                {currentSubtopicData.quiz.questions.map((question, index) => (
                  <div key={question.id} className="card-genz">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        quizResults[question.id] ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {quizResults[question.id] ? <CheckCircle size={20} /> : <X size={20} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          {question.question}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Your answer: {question.options[quizAnswers[question.id]]}
                        </p>
                        {!quizResults[question.id] && (
                          <p className="text-green-600 dark:text-green-400 mb-2">
                            Correct answer: {question.options[question.correct]}
                          </p>
                        )}
                        {question.explanation && (
                          <p className="text-gray-700 dark:text-gray-300 text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded">
                            {question.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );

        case 'challenge':
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💪</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Practice: {currentSubtopicData.challenge.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {currentSubtopicData.challenge.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-genz">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📋</span>
                    Instructions
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.challenge.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-genz">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    Success Criteria
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.challenge.successCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextStep}
                  className="btn-primary px-8 py-3"
                >
                  Complete Challenge
                </motion.button>
              </div>
            </motion.div>
          );

        case 'feedback':
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💬</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Feedback & Growth
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Reflect on your learning and plan your next steps
                </p>
              </div>

              <div className="grid gap-6">
                <div className="card-genz">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💪</span>
                    Your Strengths
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.feedback.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-genz">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    Areas for Improvement
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.feedback.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-genz">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚀</span>
                    Next Steps
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopicData.feedback.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );

        case 'badge':
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-8xl mb-6"
              >
                {currentSubtopicData.badge.emoji}
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Congratulations! 🎉
                </h2>
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                  You earned: {currentSubtopicData.badge.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {currentSubtopicData.badge.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="card-genz max-w-md mx-auto mb-8"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                  <Share2 size={20} className="mr-2" />
                  Share Your Achievement
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {currentSubtopicData.shareMessage}
                </p>
                <div className="flex space-x-3 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <Users2 size={16} />
                    <span>Share</span>
                  </motion.button>
                </div>
              </motion.div>

              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubtopicComplete}
                  className="btn-primary flex items-center space-x-2 px-8 py-3"
                >
                  <Award size={20} />
                  <span>Continue Learning</span>
                </motion.button>
              </div>
            </motion.div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('subtopic-select')}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back to Topics</span>
            </motion.button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentSubtopicData.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 capitalize">
                {currentSubtopicData.context} Context
              </p>
            </div>
            
            <div className="w-32"></div>
          </div>

          {/* Step Navigation */}
          {renderStepNavigation()}

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreviousStep}
              disabled={currentStep === 'discover'}
              className="btn-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
              <span>Previous</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextStep}
              disabled={currentStep === 'badge' || (currentStep === 'quiz' && Object.keys(quizAnswers).length < currentSubtopicData.quiz.questions.length)}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <AnimatePresence mode="wait">
        {currentView === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 px-6"
          >
            {renderIntroView()}
          </motion.div>
        )}

        {currentView === 'subtopic-select' && (
          <motion.div
            key="subtopic-select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 px-6"
          >
            {renderSubtopicSelectView()}
          </motion.div>
        )}

        {currentView === 'subtopic' && (
          <motion.div
            key="subtopic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderSubtopicView()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl="/videos/prompt-engineering.mp4"
        title={currentSubtopicData?.video.title || ''}
        videoScript={undefined}
      />
    </div>
  );
};

export default PromptEngineeringModule;
