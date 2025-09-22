import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Volume2,
  VolumeX,
  CheckCircle,
  Award,
  Share2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Video,
  HelpCircle,
  Target,
  MessageSquare,
  Trophy
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
import { API_KEYS } from '../config/apiKeys';
import { MultiSpeechToTextService } from '../services/multiSpeechToTextService';

interface EnhancedCommunicationModuleProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const EnhancedCommunicationModule: React.FC<EnhancedCommunicationModuleProps> = ({ 
  onNavigateHome, 
  onNavigateCatalog 
}) => {
  const [currentView, setCurrentView] = useState<'intro' | 'subtopic-select' | 'subtopic' | 'assessment' | 'assessment-results'>('intro');
  const [currentSubtopic, setCurrentSubtopic] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [challengeResponse, setChallengeResponse] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [showBadge, setShowBadge] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  // Load progress on component mount
  useEffect(() => {
    const progress = loadModuleProgress();
    if (progress) {
      setModuleProgress(progress);
      setCurrentSubtopic(progress.currentSubtopic);
    } else {
      // Initialize new progress
      const newProgress: ModuleProgress = {
        moduleId: 'communication-skills',
        currentSubtopic: 0,
        completedSubtopics: [],
        quizScores: {},
        badges: [],
        challengeResponses: {},
        lastAccessed: new Date().toISOString(),
        totalXP: 0
      };
      setModuleProgress(newProgress);
      saveModuleProgress(newProgress);
    }
  }, []);

  // Reset current step when subtopic changes
  useEffect(() => {
    setCurrentStep('discover');
  }, [currentSubtopic]);

  // Cleanup camera when component unmounts or user navigates away
  useEffect(() => {
    return () => {
      // Cleanup camera stream when component unmounts
      if ((window as any).currentStream) {
        (window as any).currentStream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
        (window as any).currentStream = null;
      }
      if ((window as any).currentMediaRecorder) {
        (window as any).currentMediaRecorder = null;
      }
    };
  }, []);

  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateQuizScore = (subtopic: SubtopicData): number => {
    let score = 0;
    subtopic.quiz.questions.forEach(question => {
      if (quizAnswers[question.id] === question.options[question.correct]) {
        score++;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    const currentSub = module1Subtopics[currentSubtopic];
    const score = calculateQuizScore(currentSub);
    
    // Calculate detailed results for each question
    const results: {[key: number]: {correct: boolean, explanation: string}} = {};
    currentSub.quiz.questions.forEach(question => {
      const userAnswer = quizAnswers[question.id];
      const correctAnswer = question.options[question.correct];
      const isCorrect = userAnswer === correctAnswer;
      
      results[question.id] = {
        correct: isCorrect,
        explanation: question.explanation || "No explanation available"
      };
    });
    
    setQuizScore(score);
    setQuizResults(results);
    
    // Update progress
    if (moduleProgress) {
      const updatedProgress = { ...moduleProgress };
      updatedProgress.quizScores[currentSub.id] = score;
      updatedProgress.totalXP += score * 10;
      updatedProgress.lastAccessed = new Date().toISOString();
      
      setModuleProgress(updatedProgress);
      saveModuleProgress(updatedProgress);
    }
    
    // Move to quiz results view
    setCurrentStep('quiz-results');
  };

  const handleChallengeSubmit = () => {
    const currentSub = module1Subtopics[currentSubtopic];
    
    // Check if user provided required content (recording or file)
    const hasRecording = recordedVideo[currentSub.id] !== null && recordedVideo[currentSub.id] !== undefined;
    const hasFiles = uploadedFiles[currentSub.id] && uploadedFiles[currentSub.id].length > 0;
    const hasTextResponse = challengeResponse.trim().length > 0;
    
    // Generate AI feedback based on response quality and content provided
    const responseLength = challengeResponse.trim().length;
    
    // Human-like AI Mentor & Game Master System
    const analyzeResponseIntelligently = (content: string, subtopic: any) => {
      const responseLength = content.trim().length;
      
      // Get quiz performance for this subtopic
      const quizScore = moduleProgress?.quizScores[subtopic.id] || 0;
      const quizPerformance = quizScore >= 80 ? 'excellent' : quizScore >= 60 ? 'good' : 'needs-improvement';
      
      // Intelligent Content Analysis - Human-like understanding
      const analysis = analyzeContentLikeHuman(content, subtopic, quizScore);
      
      // Generate gamified feedback with XP and badges
      const feedback = generateGamifiedFeedback(content, analysis, subtopic, quizScore, quizPerformance);
      
      return {
        analysis,
        feedback,
        canProceed: analysis.performanceLevel !== 'needs-improvement',
        xpEarned: feedback.xpEarned,
        badgeEarned: feedback.badgeEarned
      };
    };
    
    // Human-like Content Analysis - Understands content like a human coach
    const analyzeContentLikeHuman = (content: string, subtopic: any, quizScore: number) => {
      const lowerContent = content.toLowerCase();
      const responseLength = content.trim().length;
      
      // Analyze effort and engagement
      const effortLevel = analyzeEffort(content, responseLength);
      const engagementLevel = analyzeEngagement(content, subtopic);
      const reflectionDepth = analyzeReflection(content);
      const practicalApplication = analyzePracticalApplication(content, subtopic);
      
      // Determine overall performance level
      let performanceLevel = 'needs-improvement';
      if (effortLevel >= 8 && engagementLevel >= 8 && reflectionDepth >= 7) {
        performanceLevel = 'excellent';
      } else if (effortLevel >= 6 && engagementLevel >= 6 && reflectionDepth >= 5) {
        performanceLevel = 'good';
      } else if (effortLevel >= 4 || engagementLevel >= 4) {
        performanceLevel = 'average';
      }
      
      // Consider quiz performance
      if (quizScore >= 80 && performanceLevel === 'good') {
        performanceLevel = 'excellent';
      } else if (quizScore < 60 && performanceLevel === 'excellent') {
        performanceLevel = 'good';
      }
      
      return {
        effortLevel,
        engagementLevel,
        reflectionDepth,
        practicalApplication,
        performanceLevel,
        responseLength,
        hasPersonalExperience: lowerContent.includes('i ') || lowerContent.includes('my ') || lowerContent.includes('we '),
        hasSpecificExamples: (lowerContent.match(/\d+%|specific|example|concrete|detailed/g) || []).length >= 2,
        hasStructuredThinking: lowerContent.includes('before') && lowerContent.includes('during') && lowerContent.includes('after'),
        showsLearning: lowerContent.includes('learned') || lowerContent.includes('realized') || lowerContent.includes('discovered'),
        showsChallenges: lowerContent.includes('challenging') || lowerContent.includes('difficult') || lowerContent.includes('struggled')
      };
    };
    
    // Analyze effort level (1-10)
    const analyzeEffort = (content: string, length: number) => {
      let score = 0;
      
      // Length factor
      if (length > 500) score += 3;
      else if (length > 200) score += 2;
      else if (length > 50) score += 1;
      
      // Personal engagement
      if (content.includes('I ') || content.includes('my ') || content.includes('we ')) score += 2;
      
      // Specific details
      if (content.match(/\d+%|\d+ minutes|\d+ times/g)) score += 2;
      
      // Structured thinking
      if (content.includes('before') && content.includes('during') && content.includes('after')) score += 2;
      
      // Reflection
      if (content.includes('learned') || content.includes('realized') || content.includes('discovered')) score += 1;
      
      return Math.min(score, 10);
    };
    
    // Analyze engagement level (1-10)
    const analyzeEngagement = (content: string, subtopic: any) => {
      let score = 0;
      const lowerContent = content.toLowerCase();
      
      // Topic-specific engagement
      if (subtopic.id === 'active-listening') {
        if (lowerContent.includes('eye contact')) score += 2;
        if (lowerContent.includes('clarifying questions')) score += 2;
        if (lowerContent.includes('note-taking')) score += 2;
        if (lowerContent.includes('listening')) score += 1;
      }
      
      // General engagement indicators
      if (lowerContent.includes('practiced') || lowerContent.includes('tried')) score += 2;
      if (lowerContent.includes('session') || lowerContent.includes('meeting')) score += 1;
      if (lowerContent.includes('challenging') || lowerContent.includes('difficult')) score += 1;
      
      return Math.min(score, 10);
    };
    
    // Analyze reflection depth (1-10)
    const analyzeReflection = (content: string) => {
      let score = 0;
      const lowerContent = content.toLowerCase();
      
      // Self-awareness
      if (lowerContent.includes('i learned') || lowerContent.includes('i realized')) score += 3;
      if (lowerContent.includes('i discovered') || lowerContent.includes('i found')) score += 2;
      
      // Challenge recognition
      if (lowerContent.includes('challenging') || lowerContent.includes('difficult')) score += 2;
      if (lowerContent.includes('struggled') || lowerContent.includes('hard')) score += 1;
      
      // Growth mindset
      if (lowerContent.includes('improve') || lowerContent.includes('better')) score += 2;
      if (lowerContent.includes('next time') || lowerContent.includes('future')) score += 1;
      
      return Math.min(score, 10);
    };
    
    // Analyze practical application (1-10)
    const analyzePracticalApplication = (content: string, subtopic: any) => {
      let score = 0;
      const lowerContent = content.toLowerCase();
      
      // Real-world context
      if (lowerContent.includes('lecture') || lowerContent.includes('meeting')) score += 2;
      if (lowerContent.includes('work') || lowerContent.includes('job')) score += 2;
      if (lowerContent.includes('study') || lowerContent.includes('class')) score += 1;
      
      // Specific techniques mentioned
      if (subtopic.id === 'active-listening') {
        const techniques = ['eye contact', 'questions', 'notes', 'listening', 'engagement'];
        score += techniques.filter(tech => lowerContent.includes(tech)).length;
      }
      
      return Math.min(score, 10);
    };

    // Detect what type of response the learner provided
    const detectResponseType = (content: string, subtopic: any) => {
      const lowerContent = content.toLowerCase();
      
      // Check if they're reading instructions vs describing practice
      // Only flag as instruction-reading if it's clearly just copying instructions
      const instructionOnlyPatterns = [
        'practice active listening in your next lecture or study session',
        'challenge description',
        'success criteria',
        'ask at least two clarifying questions',
        'maintain eye contact',
        'prepare note taking materials'
      ];
      
      // Check if response is mostly instruction text (not personal experience)
      const isMostlyInstructions = instructionOnlyPatterns.some(pattern => 
        lowerContent.includes(pattern) && !lowerContent.includes('i ') && !lowerContent.includes('my ') && !lowerContent.includes('session details')
      );
      
      if (isMostlyInstructions) {
        return 'instruction-reading';
      }
      
      // Check for other response types
      if (content.trim().length < 20) {
        return 'very-short';
      }
      
      if (content.trim().length < 50) {
        return 'short';
      }
      
      // Check if it's just keywords
      const keywordOnlyPattern = /^(active listening|eye contact|clarifying questions|note-taking|engagement)(\s*,\s*(active listening|eye contact|clarifying questions|note-taking|engagement))*$/i;
      if (keywordOnlyPattern.test(content.trim())) {
        return 'keyword-only';
      }
      
      // Check for negative/resistant tone
      const negativeKeywords = ['i hate', 'i don\'t like', 'this is stupid', 'i can\'t', 'i won\'t', 'boring'];
      if (negativeKeywords.some(keyword => lowerContent.includes(keyword))) {
        return 'negative-resistant';
      }
      
      // Check for irrelevant content
      const irrelevantKeywords = ['weather', 'food', 'shopping', 'game', 'movie', 'music'];
      if (irrelevantKeywords.some(keyword => lowerContent.includes(keyword)) && 
          !lowerContent.includes('practice') && !lowerContent.includes('learned')) {
        return 'irrelevant';
      }
      
      // Check for detailed reflection
      const reflectionKeywords = ['i learned', 'i realized', 'i discovered', 'i practiced', 'i tried', 'i experienced', 'challenging', 'difficult', 'helped me', 'session details', 'before the session', 'during the session', 'after the session', 'reflection', 'what helped me', 'what was challenging', 'next steps'];
      const hasReflection = reflectionKeywords.some(keyword => lowerContent.includes(keyword));
      
      // Check for structured practice response (like your example)
      const practiceStructure = lowerContent.includes('session details') && 
                               lowerContent.includes('before') && 
                               lowerContent.includes('during') && 
                               lowerContent.includes('after') &&
                               lowerContent.includes('reflection');
      
      if ((hasReflection && content.length > 100) || practiceStructure) {
        return 'detailed-reflective';
      }
      
      return 'moderate';
    };
    
    // Calculate performance level based on response type and content
    const calculatePerformanceLevel = (content: string, responseType: string, responseLength: number) => {
      switch (responseType) {
        case 'instruction-reading':
        case 'irrelevant':
        case 'negative-resistant':
          return 'needs-improvement';
        case 'very-short':
        case 'keyword-only':
          return 'needs-improvement';
        case 'short':
          return 'needs-improvement';
        case 'detailed-reflective':
          return 'excellent';
        case 'moderate':
          return responseLength > 200 ? 'good' : 'needs-improvement';
        default:
          return 'needs-improvement';
      }
    };
    
    // Calculate combined performance level (quiz + challenge)
    const calculateCombinedPerformanceLevel = (content: string, responseType: string, responseLength: number, quizPerformance: string) => {
      const challengeLevel = calculatePerformanceLevel(content, responseType, responseLength);
      
      // If quiz was excellent and challenge is good or better, overall is excellent
      if (quizPerformance === 'excellent' && (challengeLevel === 'excellent' || challengeLevel === 'good')) {
        return 'excellent';
      }
      
      // If quiz was good and challenge is good or better, overall is good
      if (quizPerformance === 'good' && (challengeLevel === 'excellent' || challengeLevel === 'good')) {
        return 'good';
      }
      
      // If quiz was needs-improvement, overall is needs-improvement regardless of challenge
      if (quizPerformance === 'needs-improvement') {
        return 'needs-improvement';
      }
      
      // Default to challenge level
      return challengeLevel;
    };
    
    // Generate Gamified Feedback - Human-like coach with game elements
    const generateGamifiedFeedback = (content: string, analysis: any, subtopic: any, quizScore: number, quizPerformance: string) => {
      const performanceLevel = analysis.performanceLevel;
      
      // Calculate XP based on performance
      let xpEarned = 0;
      let badgeEarned = false;
      
      switch (performanceLevel) {
        case 'excellent':
          xpEarned = 60;
          badgeEarned = true;
          break;
        case 'good':
          xpEarned = 40;
          badgeEarned = true;
          break;
        case 'average':
          xpEarned = 20;
          break;
        case 'needs-improvement':
          xpEarned = 10;
          break;
      }
      
      // Generate human-like coach feedback
      const coachFeedback = generateCoachFeedback(content, analysis, subtopic, quizScore, performanceLevel);
      
      return {
        ...coachFeedback,
        xpEarned,
        badgeEarned,
        performanceLevel
      };
    };
    
    // Generate human-like coach feedback
    const generateCoachFeedback = (content: string, analysis: any, subtopic: any, quizScore: number, performanceLevel: string) => {
      const { effortLevel, engagementLevel, reflectionDepth, practicalApplication } = analysis;
      
      // AI Analysis - Conversational coach style
      let aiAnalysis = '';
      let strengths = [];
      let areasToImprove = [];
      let nextSteps = [];
      let challengeUpgrade = '';
      let motivatingLine = '';
      
      // Generate contextual analysis
      if (performanceLevel === 'excellent') {
        aiAnalysis = `🎉 Wow! You absolutely crushed this challenge! Your response shows incredible depth and real-world application. I can tell you genuinely engaged with the material and put serious thought into your practice. This is exactly what I love to see!`;
        strengths = [
          'Outstanding effort and engagement',
          'Deep reflection and self-awareness',
          'Specific examples and practical application',
          'Clear understanding of the concepts',
          'Excellent structured thinking'
        ];
        areasToImprove = [
          'Consider teaching these skills to others',
          'Apply these techniques in different contexts'
        ];
        nextSteps = [
          'Continue practicing in various situations',
          'Try the advanced challenge below'
        ];
        challengeUpgrade = '🏆 MASTER CHALLENGE: Teach active listening to a friend or colleague, then reflect on what you learned from teaching. Share your teaching experience!';
        motivatingLine = '🔥 You\'re on fire! Keep this momentum going - you\'re becoming a communication master!';
      } else if (performanceLevel === 'good') {
        aiAnalysis = `👍 Great work! You\'ve shown solid understanding and genuine effort. I can see you\'re really trying to apply these skills, and that\'s what matters most. With a bit more detail, you\'ll be at the expert level!`;
        strengths = [
          'Good effort and engagement',
          'Some specific examples included',
          'Shows understanding of key concepts',
          'Attempted practical application'
        ];
        areasToImprove = [
          'Add more specific details and examples',
          'Include more reflection on what you learned',
          'Describe challenges you faced'
        ];
        nextSteps = [
          'Try the practice again with more detail',
          'Focus on specific examples and reflection'
        ];
        challengeUpgrade = '🎯 PRO CHALLENGE: Practice active listening in a different setting (work meeting, family dinner, etc.) and compare the experiences.';
        motivatingLine = '💪 You\'re making great progress! Keep pushing yourself - you\'re almost there!';
      } else if (performanceLevel === 'average') {
        aiAnalysis = `👋 Hey there! I can see you\'re getting started, which is awesome. Every expert was once a beginner, and I\'m here to help you level up. Let\'s add some more detail to really show what you\'ve learned!`;
        strengths = [
          'Made an attempt to respond',
          'Shows some engagement with the topic'
        ];
        areasToImprove = [
          'Provide more specific details about your experience',
          'Include examples of what you did',
          'Add reflection on what you learned',
          'Describe any challenges you faced'
        ];
        nextSteps = [
          'Try the practice activity with more focus',
          'Come back and share your detailed experience'
        ];
        challengeUpgrade = '🎮 STARTER CHALLENGE: Practice active listening for just 10 minutes in your next conversation, then tell me what happened.';
        motivatingLine = '🌟 Every journey starts with a single step - you\'re on the right path!';
      } else {
        aiAnalysis = `🤗 I appreciate you taking the time to respond! I can see you\'re working on this, and that\'s the first step to success. Let me help you expand on your thoughts so we can really dive into the learning together.`;
        strengths = [
          'Effort shown in responding',
          'Willingness to engage with the material'
        ];
        areasToImprove = [
          'Provide more detail about your experience',
          'Share specific examples of what you did',
          'Include reflection on what you learned',
          'Describe the context of your practice'
        ];
        nextSteps = [
          'Try the practice activity first',
          'Come back and describe what happened in detail'
        ];
        challengeUpgrade = '🎯 BEGINNER CHALLENGE: Try active listening for 5 minutes in any conversation, then tell me about it.';
        motivatingLine = '💫 Don\'t worry - we all start somewhere! I\'m here to help you succeed!';
      }
      
      // Add quiz context if available
      if (quizScore > 0) {
        const quizContext = quizScore >= 80 ? ' Your quiz performance was excellent too!' : 
                           quizScore >= 60 ? ' Your quiz showed good understanding!' : 
                           ' Consider reviewing the key concepts.';
        aiAnalysis += quizContext;
      }
      
      return {
        aiAnalysis,
        strengths,
        areasToImprove,
        nextSteps,
        challengeUpgrade,
        motivatingLine
      };
    };

    // Generate universal structured feedback
    const generateUniversalFeedback = (content: string, responseType: string, performanceLevel: string, subtopic: any, quizScore: number, quizPerformance: string) => {
      const moduleName = 'Communication Skills';
      const subtopicName = subtopic.title;
      
      // AI Analysis (2-4 sentences) - Include quiz performance
      let aiAnalysis = '';
      let strengths = [];
      let areasToImprove = [];
      let nextSteps = [];
      let challengeUpgrade = '';
      
      // Add quiz performance to analysis
      const quizContext = quizScore > 0 ? ` You scored ${quizScore}% on the quiz, which shows ${quizPerformance === 'excellent' ? 'excellent' : quizPerformance === 'good' ? 'good' : 'room for improvement in'} understanding of the concepts.` : '';
      
      switch (responseType) {
        case 'instruction-reading':
          aiAnalysis = `I notice you've shared the challenge instructions rather than describing your actual practice experience. While it's good to understand the requirements, I'd love to hear about your real-world application of these skills.${quizContext}`;
          strengths = ['Effort shown in understanding the requirements'];
          if (quizScore >= 80) {
            strengths.push('Strong theoretical understanding demonstrated in quiz');
          } else if (quizScore >= 60) {
            strengths.push('Good grasp of key concepts shown in quiz');
          }
          areasToImprove = [
            'Share your actual practice experience, not just the instructions',
            'Describe what you did, what happened, and what you learned',
            'Include specific examples from your real practice session'
          ];
          if (quizScore < 60) {
            areasToImprove.push('Review the key concepts to strengthen your understanding');
          }
          nextSteps = [
            'Try the active listening practice in a real situation (lecture, meeting, conversation)',
            'Come back and describe what happened, what was challenging, and what you learned'
          ];
          break;
          
        case 'very-short':
          aiAnalysis = `Your response is quite brief. I appreciate you taking the time to respond, but to give you meaningful feedback, I need to understand more about your experience.`;
          strengths = ['Attempt made to respond'];
          areasToImprove = [
            'Provide more detail about your experience',
            'Explain what you did and what happened',
            'Share what you learned or found challenging'
          ];
          nextSteps = [
            'Try the practice activity and describe what happened',
            'Include specific examples and your reflections'
          ];
          break;
          
        case 'keyword-only':
          aiAnalysis = `I see you've listed some key terms, which shows you understand the concepts. However, simply listing terms doesn't demonstrate that you've actually practiced these skills.`;
          strengths = ['Understanding of key concepts'];
          areasToImprove = [
            'Explain how you applied these techniques in practice',
            'Share specific examples of when and how you used them',
            'Describe what happened and what you learned'
          ];
          nextSteps = [
            'Practice the skills in a real situation',
            'Come back and describe your experience with specific examples'
          ];
          break;
          
        case 'negative-resistant':
          aiAnalysis = `I understand that learning new skills can sometimes feel challenging or overwhelming. It's completely normal to feel this way, and I'm here to support you through this process.`;
          strengths = ['Honest expression of feelings'];
          areasToImprove = [
            'Try to approach the practice with an open mind',
            'Start with small, manageable steps',
            'Focus on one skill at a time'
          ];
          nextSteps = [
            'Try just one small practice activity',
            'Remember that every expert was once a beginner'
          ];
          break;
          
        case 'irrelevant':
          aiAnalysis = `It looks like your response might not be related to the active listening practice we're working on. Let me help you refocus on the specific skills we're developing.`;
          strengths = ['Effort shown in responding'];
          areasToImprove = [
            'Focus on the specific active listening practice',
            'Describe your experience with the assigned activity',
            'Share what you learned about active listening'
          ];
          nextSteps = [
            'Complete the active listening practice activity',
            'Return and describe your experience with that specific practice'
          ];
          break;
          
        case 'detailed-reflective':
          aiAnalysis = `Excellent work! Your response demonstrates deep understanding and thoughtful reflection on your active listening practice. You've clearly engaged with the material and provided valuable insights from your experience.${quizContext}`;
          strengths = [
            'Detailed reflection on your practice experience',
            'Specific examples of techniques used',
            'Honest assessment of challenges and successes',
            'Clear understanding of active listening principles'
          ];
          if (quizScore >= 80) {
            strengths.push('Strong theoretical knowledge combined with practical application');
          } else if (quizScore >= 60) {
            strengths.push('Good understanding of concepts with practical experience');
          }
          areasToImprove = performanceLevel === 'excellent' ? [
            'Consider how you might teach these skills to someone else',
            'Think about applying these techniques in different contexts'
          ] : [];
          if (quizScore < 60) {
            areasToImprove.push('Review key concepts to strengthen your theoretical foundation');
          }
          nextSteps = [
            'Continue practicing in different situations',
            'Try the advanced reflection questions below'
          ];
          challengeUpgrade = 'Advanced Challenge: Try teaching active listening to a friend or family member, then reflect on what you learned from the teaching experience.';
          break;
          
        case 'moderate':
          aiAnalysis = `You've made a good start with your response. I can see you're engaging with the material, and with a bit more detail, this could be an excellent reflection on your practice.`;
          strengths = ['Engagement with the practice activity', 'Some specific details included'];
          areasToImprove = [
            'Add more specific examples from your practice',
            'Include more reflection on what you learned',
            'Describe what was challenging and what worked well'
          ];
          nextSteps = [
            'Try the practice again with more focus on reflection',
            'Include specific examples of techniques you used'
          ];
          break;
          
        default:
          aiAnalysis = `Thank you for your response. I can see you're working on developing your active listening skills. Let me provide some guidance to help you get the most from this practice.`;
          strengths = ['Effort shown in responding'];
          areasToImprove = [
            'Provide more specific details about your experience',
            'Include reflection on what you learned',
            'Share examples of techniques you used'
          ];
          nextSteps = [
            'Try the practice activity with more focus on reflection',
            'Come back and share your detailed experience'
          ];
      }
      
      return {
        aiAnalysis,
        strengths,
        areasToImprove,
        nextSteps,
        challengeUpgrade
      };
    };

    // Analyze the actual content for intelligent feedback
    const analyzeContent = (content: string) => {
      const lowerContent = content.toLowerCase();
      
      // Check for specific elements based on subtopic
      let analysis = {
        hasStructure: false,
        hasReflection: false,
        hasSpecifics: false,
        hasInstructions: false,
        hasSubtopicSpecifics: false,
        quality: 'needs-improvement',
        strengths: [] as string[],
        improvements: [] as string[],
        score: 0
      };
      
      // Check for structure (bullet points, numbered lists, sections)
      analysis.hasStructure = content.includes('\n') || 
                             content.includes('•') || 
                             content.includes('-') || 
                             content.includes('1.') ||
                             content.includes('2.') ||
                             content.includes('3.') ||
                             content.includes('BEFORE') ||
                             content.includes('DURING') ||
                             content.includes('AFTER') ||
                             content.includes('Session Details') ||
                             content.includes('REFLECTION');
      
      // Check for reflection elements
      analysis.hasReflection = lowerContent.includes('challenging') ||
                              lowerContent.includes('difficult') ||
                              lowerContent.includes('learned') ||
                              lowerContent.includes('helped') ||
                              lowerContent.includes('improved') ||
                              lowerContent.includes('better') ||
                              lowerContent.includes('reflection') ||
                              lowerContent.includes('assessment') ||
                              lowerContent.includes('overall assessment') ||
                              lowerContent.includes('next steps');
      
      // Check for specific details and examples
      analysis.hasSpecifics = lowerContent.includes('specific') ||
                             lowerContent.includes('example') ||
                             lowerContent.includes('experience') ||
                             lowerContent.includes('session') ||
                             lowerContent.includes('practice') ||
                             lowerContent.includes('technique') ||
                             lowerContent.includes('detailed') ||
                             lowerContent.includes('concrete');
      
      // Check for subtopic-specific content
      if (currentSub.id === 'active-listening') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('eye contact') ||
                                       lowerContent.includes('clarifying questions') ||
                                       lowerContent.includes('note-taking') ||
                                       lowerContent.includes('active listening') ||
                                       lowerContent.includes('engagement') ||
                                       lowerContent.includes('non-verbal') ||
                                       lowerContent.includes('nodding') ||
                                       lowerContent.includes('paraphrasing') ||
                                       lowerContent.includes('summarizing');
      } else if (currentSub.id === 'public-speaking') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('presentation') ||
                                       lowerContent.includes('speaking') ||
                                       lowerContent.includes('delivery') ||
                                       lowerContent.includes('confidence') ||
                                       lowerContent.includes('audience') ||
                                       lowerContent.includes('structure');
      } else if (currentSub.id === 'written-communication') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('email') ||
                                       lowerContent.includes('writing') ||
                                       lowerContent.includes('professional') ||
                                       lowerContent.includes('tone') ||
                                       lowerContent.includes('structure') ||
                                       lowerContent.includes('clarity');
      } else if (currentSub.id === 'nonverbal-communication') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('body language') ||
                                       lowerContent.includes('posture') ||
                                       lowerContent.includes('gestures') ||
                                       lowerContent.includes('facial') ||
                                       lowerContent.includes('nonverbal') ||
                                       lowerContent.includes('physical');
      } else if (currentSub.id === 'conflict-resolution') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('conflict') ||
                                       lowerContent.includes('resolution') ||
                                       lowerContent.includes('mediation') ||
                                       lowerContent.includes('compromise') ||
                                       lowerContent.includes('negotiation') ||
                                       lowerContent.includes('collaboration');
      } else if (currentSub.id === 'presentation-skills') {
        analysis.hasSubtopicSpecifics = lowerContent.includes('slides') ||
                                       lowerContent.includes('visual') ||
                                       lowerContent.includes('storytelling') ||
                                       lowerContent.includes('engagement') ||
                                       lowerContent.includes('audience') ||
                                       lowerContent.includes('delivery');
      }
      
      // Check if user followed instructions
      const instructionWords = currentSub.challenge.instructions.flatMap(instruction => 
        instruction.toLowerCase().split(' ').filter(word => word.length > 3)
      );
      analysis.hasInstructions = instructionWords.some(word => lowerContent.includes(word));
      
      // Calculate quality score
      if (analysis.hasStructure) analysis.score += 2;
      if (analysis.hasReflection) analysis.score += 2;
      if (analysis.hasSpecifics) analysis.score += 2;
      if (analysis.hasSubtopicSpecifics) analysis.score += 3; // Higher weight for subtopic-specific content
      if (analysis.hasInstructions) analysis.score += 2;
      if (responseLength > 200) analysis.score += 1;
      if (responseLength > 400) analysis.score += 1;
      if (responseLength > 600) analysis.score += 1; // Bonus for very detailed responses
      
      // Determine quality level (adjusted thresholds)
      if (analysis.score >= 10) {
        analysis.quality = 'excellent';
      } else if (analysis.score >= 7) {
        analysis.quality = 'good';
      } else if (analysis.score >= 4) {
        analysis.quality = 'needs-improvement';
      } else {
        analysis.quality = 'poor';
      }
      
      return analysis;
    };
    
    const contentAnalysis = analyzeResponseIntelligently(challengeResponse, currentSub);
    
    // Debug logging to see what's being detected
    console.log('Human-like AI Analysis:', {
      performanceLevel: contentAnalysis.analysis.performanceLevel,
      effortLevel: contentAnalysis.analysis.effortLevel,
      engagementLevel: contentAnalysis.analysis.engagementLevel,
      xpEarned: contentAnalysis.xpEarned,
      badgeEarned: contentAnalysis.badgeEarned,
      content: challengeResponse.substring(0, 100) + '...'
    });
    
    // Generate structured feedback using universal system
    const feedback = contentAnalysis.feedback;
    const canProceed = contentAnalysis.canProceed;
    
    // Check if user provided any content (text, file, or recording)
    const hasAnyContent = hasTextResponse || hasRecording || hasFiles;
    
    if (hasAnyContent) {
      // Use gamified feedback system
      const feedbackMessage = `## 🎮 AI Mentor Analysis\n\n${feedback.aiAnalysis}\n\n## ✅ Strengths\n\n${feedback.strengths.map(s => `• ${s}`).join('\n')}\n\n## 📈 Areas to Improve\n\n${feedback.areasToImprove.map(a => `• ${a}`).join('\n')}\n\n## 🚀 Next Steps\n\n${feedback.nextSteps.map(s => `• ${s}`).join('\n')}${feedback.challengeUpgrade ? `\n\n## 🎯 Challenge Upgrade\n\n${feedback.challengeUpgrade}` : ''}${feedback.motivatingLine ? `\n\n## 🔥 ${feedback.motivatingLine}` : ''}`;
      
      setFeedbackText(feedbackMessage);
    } else {
      const feedbackMessage = `Please provide a detailed response about your experience. You can type your response, upload a file, or record a video.`;
      setFeedbackText(feedbackMessage);
    }
    
    setShowFeedback(true);
    
    if (moduleProgress) {
      const updatedProgress = { ...moduleProgress };
      updatedProgress.challengeResponses[currentSub.id] = challengeResponse;
      
      // Only mark as completed if user provided required content and good response
      if (canProceed) {
        if (!updatedProgress.completedSubtopics.includes(currentSubtopic)) {
          updatedProgress.completedSubtopics.push(currentSubtopic);
          updatedProgress.badges.push(currentSub.badge.name);
        }
        updatedProgress.totalXP += 50;
      } else {
        updatedProgress.totalXP += 10; // Minimal credit for attempt
      }
      
      updatedProgress.currentSubtopic = Math.min(currentSubtopic + 1, module1Subtopics.length - 1);
      updatedProgress.lastAccessed = new Date().toISOString();
      
      setModuleProgress(updatedProgress);
      saveModuleProgress(updatedProgress);
    }
    
    // Move to feedback step immediately to show AI feedback
    setCurrentStep('feedback');
  };

  const handleNextSubtopic = () => {
    if (currentSubtopic < module1Subtopics.length - 1) {
      setCurrentSubtopic(currentSubtopic + 1);
      setQuizAnswers({});
      setChallengeResponse('');
    } else {
      // Check if all subtopics are completed before allowing final assessment
      const allSubtopicsCompleted = moduleProgress?.completedSubtopics.length === module1Subtopics.length;
      if (allSubtopicsCompleted) {
        setCurrentView('assessment');
      } else {
        // Show message that all subtopics must be completed
        alert('Please complete all subtopics before taking the final assessment!');
        setCurrentView('subtopic-select');
      }
    }
  };

  const renderIntroView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-4xl mb-6">
          🗣️
        </div>
        <h1 className="text-4xl font-bold gradient-text-lime mb-4">
          Communication Skills Mastery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Master communication for academic success, job interviews, workplace excellence, and personal relationships
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="emoji-card">
          <h3 className="text-xl font-bold gradient-text-lime mb-4">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Active listening for academic and professional success</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Public speaking confidence for interviews and presentations</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Professional written communication for workplace and job search</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Non-verbal communication for personal and professional relationships</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Conflict resolution for academic and workplace situations</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-neon-lime" size={20} />
              <span className="text-gray-800 dark:text-white">Presentation skills for academic and professional audiences</span>
            </li>
          </ul>
        </div>

        <div className="emoji-card">
          <h3 className="text-xl font-bold gradient-text-lime mb-4">Module Structure</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-midnight-900">
                1
              </div>
              <span className="text-gray-800 dark:text-white">Intro Video (5 mins)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-midnight-900">
                6
              </div>
              <span className="text-gray-800 dark:text-white">Interactive Subtopics (30 mins total)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-midnight-900">
                1
              </div>
              <span className="text-gray-800 dark:text-white">Final Assessment (60 mins)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentView('subtopic-select')}
          className="btn-neon text-lg px-8 py-4"
        >
          Choose Your Learning Path <ArrowRight className="ml-2" size={20} />
        </motion.button>
        
        {/* Show Final Assessment button only if all subtopics are completed */}
        {moduleProgress?.completedSubtopics.length === module1Subtopics.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentView('assessment')}
            className="btn-secondary text-lg px-8 py-4"
          >
            Take Final Assessment <Trophy className="ml-2" size={20} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );

  const [currentStep, setCurrentStep] = useState<'discover' | 'video' | 'quiz' | 'quiz-results' | 'challenge' | 'feedback' | 'badge'>('discover');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<{[key: number]: {correct: boolean, explanation: string}}>({});
  
  // Final Assessment State
  const [assessmentAnswers, setAssessmentAnswers] = useState<{[key: number]: string}>({});
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<{[key: number]: {correct: boolean, explanation: string}}>({});
  const [currentAssessmentQuestion, setCurrentAssessmentQuestion] = useState(0);
  
  // File Upload and Media State (subtopic-specific)
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({});
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState<{[key: string]: string | null}>({});
  const [videoTranscripts, setVideoTranscripts] = useState<{[key: string]: string | null}>({});
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const renderSubtopicSelectionView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-text-lime mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Select any subtopic to start learning. You can jump between topics or follow them in order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {module1Subtopics.map((subtopic, index) => {
          const isCompleted = moduleProgress?.completedSubtopics.includes(index) || false;
          const hasProgress = moduleProgress?.quizScores[subtopic.id] !== undefined;
          
          return (
            <motion.div
              key={subtopic.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentSubtopic(index);
                setCurrentView('subtopic');
              }}
              className={`emoji-card cursor-pointer transition-all duration-300 ${
                isCompleted 
                  ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-900/20' 
                  : hasProgress 
                    ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'hover:ring-2 hover:ring-neon-lime/50'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{subtopic.emoji}</div>
                <h3 className="text-xl font-bold gradient-text-lime mb-2">
                  {subtopic.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 capitalize">
                  {subtopic.context} Context
                </p>
                
                <div className="space-y-2">
                  {isCompleted && (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium text-gray-800 dark:text-white">Completed</span>
                    </div>
                  )}
                  {hasProgress && !isCompleted && (
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">In Progress</span>
                    </div>
                  )}
                  {!hasProgress && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Not Started
                    </div>
                  )}
                </div>

                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {subtopic.quiz.questions.length} questions • {subtopic.video.duration} min video
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentView('intro')}
          className="btn-secondary"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Overview
        </motion.button>
        
        {/* Final Assessment Button - Only show when all subtopics are completed */}
        {moduleProgress?.completedSubtopics.length === module1Subtopics.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentView('assessment')}
            className="btn-neon text-lg px-8 py-4 ml-4"
          >
            <Trophy className="mr-2" size={20} />
            Take Final Assessment
          </motion.button>
        )}
        
        {/* Progress indicator for assessment */}
        {moduleProgress && moduleProgress.completedSubtopics.length < module1Subtopics.length && (
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Complete all {module1Subtopics.length} subtopics to unlock the final assessment!
              <br />
              Progress: {moduleProgress.completedSubtopics.length}/{module1Subtopics.length} subtopics completed
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderSubtopicView = () => {
    const subtopic = module1Subtopics[currentSubtopic];

    const renderDiscoverStep = () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{subtopic.emoji}</div>
          <h2 className="text-3xl font-bold gradient-text-lime mb-2">
            {subtopic.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 capitalize">
            {subtopic.context} Context
          </p>
        </div>

        <div className="emoji-card">
          <h3 className="text-xl font-bold gradient-text-lime mb-4">Real Scenario</h3>
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            {subtopic.discover.scenario}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="emoji-card">
            <h4 className="text-lg font-bold text-red-600 mb-3">Problems Identified</h4>
            <ul className="space-y-2">
              {subtopic.discover.problemExplanation.map((problem, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-base leading-relaxed text-gray-800 dark:text-white">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="emoji-card">
            <h4 className="text-lg font-bold text-green-600 mb-3">Solution Approach</h4>
            <ul className="space-y-2">
              {subtopic.discover.solutionApproach.map((solution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-base leading-relaxed text-gray-800 dark:text-white">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('discover')}
            disabled={currentStep === 'discover'}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('video')}
            className="btn-neon"
          >
            Watch Learning Video <Video className="ml-2" size={20} />
          </motion.button>
        </div>
      </motion.div>
    );

    const renderVideoStep = () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold gradient-text-lime mb-2">
            {subtopic.video.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Duration: {subtopic.video.duration} minutes
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-neon-lime to-teal-400 flex items-center justify-center">
            <div className="text-center text-white">
              <Play size={64} className="mx-auto mb-4" />
              <p className="text-xl font-semibold">{subtopic.video.title}</p>
              <p className="text-sm opacity-80">Click to play</p>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setVideoMuted(!videoMuted)}
              className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-bold gradient-text-lime mb-3">What You'll Learn</h4>
          <ul className="space-y-2">
            {subtopic.video.content.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-neon-lime mt-1" size={16} />
                <span className="text-base leading-relaxed text-gray-800 dark:text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Script Display */}
        {subtopic.video.script && (
          <div className="emoji-card">
            <h4 className="text-lg font-bold gradient-text-blue mb-3">📝 Video Script</h4>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="whitespace-pre-wrap text-sm leading-relaxed font-mono text-gray-300 dark:text-gray-200">
                {subtopic.video.script}
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-gray-400 text-xs">
                Duration: {subtopic.video.duration} minutes | 
                Word Count: {subtopic.video.script.split(' ').length} words
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('discover')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('quiz')}
            className="btn-neon"
          >
            Take Quiz <HelpCircle className="ml-2" size={20} />
          </motion.button>
        </div>
      </motion.div>
    );

    const renderQuizStep = () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold gradient-text-lime mb-2">
            {subtopic.quiz.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Test your understanding with {subtopic.quiz.questions.length} questions
          </p>
        </div>

        {subtopic.quiz.questions.map((question, index) => (
          <div key={question.id} className="emoji-card">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {index + 1}. {question.question}
            </h4>
            <div className="grid gap-3">
              {question.options.map((option, optionIndex) => (
                <motion.button
                  key={optionIndex}
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

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('video')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuizSubmit}
            disabled={Object.keys(quizAnswers).length < subtopic.quiz.questions.length}
            className="btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Quiz <Target className="ml-2" size={20} />
          </motion.button>
        </div>
      </motion.div>
    );

    const renderQuizResultsStep = () => {
      const currentSub = module1Subtopics[currentSubtopic];
      const totalQuestions = currentSub.quiz.questions.length;
      const percentage = Math.round((quizScore! / totalQuestions) * 100);
      
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl font-bold mb-4 ${
              percentage >= 80 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                : percentage >= 60 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
            }`}>
              {percentage}%
            </div>
            <h3 className="text-3xl font-bold gradient-text-lime mb-2">
              Quiz Results
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You scored {quizScore}/{totalQuestions} questions correctly
            </p>
            <div className="mt-4">
              <div className="xp-badge text-lg">
                +{quizScore! * 10} XP Earned
              </div>
            </div>
          </div>

          {/* Performance Feedback */}
          <div className="emoji-card">
            <h4 className="text-xl font-bold gradient-text-lime mb-4">Performance Analysis</h4>
            {percentage >= 80 ? (
              <div className="text-green-600">
                <p className="text-lg font-semibold mb-2">🎉 Excellent Performance!</p>
                <p>You have a strong understanding of this topic. You're ready to move on to the practical challenge!</p>
              </div>
            ) : percentage >= 60 ? (
              <div className="text-yellow-600">
                <p className="text-lg font-semibold mb-2">👍 Good Effort!</p>
                <p>You're on the right track, but review the explanations below to strengthen your understanding.</p>
              </div>
            ) : (
              <div className="text-red-600">
                <p className="text-lg font-semibold mb-2">📚 Needs Improvement</p>
                <p>Take time to review the video content and explanations below. Consider retaking the quiz after studying.</p>
              </div>
            )}
          </div>

          {/* Question-by-Question Results */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold gradient-text-lime">Question Review</h4>
            {currentSub.quiz.questions.map((question, index) => {
              const result = quizResults[question.id];
              const userAnswer = quizAnswers[question.id];
              const correctAnswer = question.options[question.correct];
              
              return (
                <div key={question.id} className={`emoji-card ${
                  result.correct 
                    ? 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20' 
                    : 'border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      result.correct 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {result.correct ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {index + 1}. {question.question}
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Answer: </span>
                          <span className={`text-sm ${result.correct ? 'text-green-600' : 'text-red-600'}`}>
                            {userAnswer}
                          </span>
                        </div>
                        {!result.correct && (
                          <div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Correct Answer: </span>
                            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                              {correctAnswer}
                            </span>
                          </div>
                        )}
                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Explanation: </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {result.explanation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep('quiz')}
              className="btn-secondary"
            >
              <ArrowLeft className="mr-2" size={20} />
              Retake Quiz
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep('challenge')}
              className="btn-neon"
            >
              Continue to Challenge <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>
      );
    };

    const renderChallengeStep = () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold gradient-text-lime mb-2">
            {subtopic.challenge.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Apply what you've learned in a real-world scenario
          </p>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-bold gradient-text-lime mb-3">Challenge Description</h4>
          <p className="text-gray-800 dark:text-gray-200 mb-6">
            {subtopic.challenge.description}
          </p>

          <h4 className="text-lg font-bold gradient-text-lime mb-3">Instructions</h4>
          <ol className="space-y-2 mb-6">
            {subtopic.challenge.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="bg-neon-lime text-midnight-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-800 dark:text-white">{instruction}</span>
              </li>
            ))}
          </ol>

          <div className="space-y-4">
            <textarea
              value={challengeResponse}
              onChange={(e) => setChallengeResponse(e.target.value)}
              placeholder="Share your response, experience, or upload your work..."
              className="w-full p-4 rounded-xl bg-white/50 dark:bg-midnight-700/50 border border-white/30 dark:border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-neon-lime/50"
              rows={6}
            />
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={isRecording ? stopRecording : startRecording}
                className={`btn-secondary flex-1 ${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
              >
                {isRecording ? '⏹️ Stop Recording' : '📹 Record Video'}
              </motion.button>
              
              <label className="btn-secondary flex-1 cursor-pointer">
                📎 Upload File
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.mp4,.mov,.webm,.avi,.mkv"
                />
              </label>
            </div>
            
            {/* Camera Preview Window */}
            {isRecording && cameraStream && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    🔴 Recording in Progress
                  </h5>
                  <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                </div>
                <video
                  ref={(video) => {
                    if (video && cameraStream) {
                      video.srcObject = cameraStream;
                    }
                  }}
                  autoPlay
                  muted
                  className="w-full max-w-md mx-auto rounded-lg bg-black"
                  style={{ maxHeight: '300px' }}
                />
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Click "Stop Recording" when you're finished
                </p>
              </div>
            )}
            
            {/* Show uploaded files */}
            {uploadedFiles[subtopic.id] && uploadedFiles[subtopic.id].length > 0 && (
              <div className="mt-4">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Uploaded Files:</h5>
                <div className="space-y-2">
                  {uploadedFiles[subtopic.id].map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/50 dark:bg-midnight-700/50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span>📎</span>
                        <span>{file.name}</span>
                        <span>({(file.size / 1024).toFixed(1)} KB)</span>
                      </div>
                      <button
                        onClick={() => handleDeleteFile(index)}
                        className="text-red-500 hover:text-red-700 p-1 rounded"
                        title="Delete file"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Show video transcript */}
            {videoTranscripts[subtopic.id] && videoTranscripts[subtopic.id]!.length > 10 && (
              <div className="mt-4">
                <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📝 Video Transcript:</h5>
                <div className="bg-white/50 dark:bg-midnight-700/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {videoTranscripts[subtopic.id]!}
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Character count: {videoTranscripts[subtopic.id]!.length}
                    </span>
                    <button
                      onClick={() => {
                        const blob = new Blob([videoTranscripts[subtopic.id] as string], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `transcript-${subtopic.id}-${new Date().toISOString().slice(0, 10)}.txt`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                      }}
                      className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                      title="Download transcript"
                    >
                      📥 Download
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Show recorded video */}
            {recordedVideo[subtopic.id] && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200">Recorded Video:</h5>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        // Download the video file
                        const link = document.createElement('a');
                        link.href = recordedVideo[subtopic.id]!;
                        link.download = `video-${subtopic.id}-${new Date().toISOString().slice(0, 10)}.webm`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="text-blue-500 hover:text-blue-700 p-1 rounded text-sm"
                      title="Download video"
                    >
                      📥 Download Video
                    </button>
                    <button
                      onClick={handleDeleteVideo}
                      className="text-red-500 hover:text-red-700 p-1 rounded text-sm"
                      title="Delete video"
                    >
                      🗑️ Delete Video
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>🎥</span>
                    <span>Video recorded successfully!</span>
                  </div>
                  <video 
                    src={recordedVideo[subtopic.id] || undefined} 
                    controls 
                    className="w-full max-w-md rounded-lg"
                    style={{ maxHeight: '200px' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-bold gradient-text-lime mb-3">Success Criteria</h4>
          <ul className="space-y-2">
            {subtopic.challenge.successCriteria.map((criteria, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-neon-lime mt-1" size={16} />
                <span className="text-sm text-gray-800 dark:text-white">{criteria}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('quiz')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </motion.button>
          
          <div className="flex gap-4">
            {challengeResponse.trim() ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleChallengeSubmit}
                className="btn-neon"
              >
                Submit Challenge <MessageSquare className="ml-2" size={20} />
              </motion.button>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Skip challenge with lower score
                    const currentSub = module1Subtopics[currentSubtopic];
                    const skippedResponse = "[CHALLENGE SKIPPED]\n\nUser chose to skip the practical challenge and proceed with quiz score only.";
                    
                    // Update progress with reduced score
                    if (moduleProgress) {
                      const quizScore = moduleProgress.quizScores[currentSub.id] || 0;
                      const updatedProgress = { ...moduleProgress };
                      updatedProgress.quizScores[currentSub.id] = Math.max(quizScore - 1, 0); // Reduce score by 1
                      updatedProgress.challengeResponses[currentSub.id] = skippedResponse;
                      updatedProgress.totalXP += Math.max(quizScore - 1, 0) * 10;
                      updatedProgress.lastAccessed = new Date().toISOString();
                      
                      if (!updatedProgress.completedSubtopics.includes(currentSubtopic)) {
                        updatedProgress.completedSubtopics.push(currentSubtopic);
                      }
                      
                      setModuleProgress(updatedProgress);
                      saveModuleProgress(updatedProgress);
                    }
                    
                    // Move to next subtopic or assessment
                    if (currentSubtopic < module1Subtopics.length - 1) {
                      setCurrentSubtopic(currentSubtopic + 1);
                      setQuizAnswers({});
                      setChallengeResponse('');
                    } else {
                      setCurrentView('assessment');
                    }
                  }}
                  className="btn-secondary px-6 py-3"
                >
                  Skip Challenge (Lower Score) <ArrowRight className="ml-2" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {}}
                  className="btn-neon px-6 py-3"
                >
                  Complete Challenge for Full Score <Target className="ml-2" size={20} />
                </motion.button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    );

    const renderFeedbackStep = () => {
      const currentSub = module1Subtopics[currentSubtopic];
      
      // Parse the feedback text to extract sections
      const parseFeedback = (feedbackText: string) => {
        const sections = {
          aiAnalysis: '',
          strengths: [] as string[],
          areasToImprove: [] as string[],
          nextSteps: [] as string[],
          challengeUpgrade: '',
          motivatingLine: '',
          xpEarned: 0,
          badgeEarned: false
        };
        
        if (!feedbackText) return sections;
        
        // Extract XP and Badge info from the text
        const xpMatch = feedbackText.match(/\+(\d+) XP/);
        if (xpMatch) {
          sections.xpEarned = parseInt(xpMatch[1]);
        }
        
        const badgeMatch = feedbackText.match(/🏆/);
        if (badgeMatch) {
          sections.badgeEarned = true;
        }
        
        // Extract AI Analysis
        const aiMatch = feedbackText.match(/## 🎮 AI Analysis of Your Response\n\n([\s\S]*?)(?=##|$)/);
        if (aiMatch) {
          sections.aiAnalysis = aiMatch[1].trim();
        }
        
        // Extract Strengths
        const strengthsMatch = feedbackText.match(/## ✅ Strengths\n\n([\s\S]*?)(?=##|$)/);
        if (strengthsMatch) {
          sections.strengths = strengthsMatch[1]
            .split('\n')
            .filter(line => line.trim().startsWith('•'))
            .map(line => line.replace(/^•\s*/, '').trim())
            .filter(line => line.length > 0);
        }
        
        // Extract Areas to Improve
        const areasMatch = feedbackText.match(/## ⚠️ Areas to Improve\n\n([\s\S]*?)(?=##|$)/);
        if (areasMatch) {
          sections.areasToImprove = areasMatch[1]
            .split('\n')
            .filter(line => line.trim().startsWith('•'))
            .map(line => line.replace(/^•\s*/, '').trim())
            .filter(line => line.length > 0);
        }
        
        // Extract Next Steps
        const nextStepsMatch = feedbackText.match(/## 🚀 Next Steps\n\n([\s\S]*?)(?=##|$)/);
        if (nextStepsMatch) {
          sections.nextSteps = nextStepsMatch[1]
            .split('\n')
            .filter(line => line.trim().startsWith('•'))
            .map(line => line.replace(/^•\s*/, '').trim())
            .filter(line => line.length > 0);
        }
        
        // Extract Challenge Upgrade
        const challengeMatch = feedbackText.match(/## 🎯 Challenge Upgrade\n\n([\s\S]*?)(?=##|$)/);
        if (challengeMatch) {
          sections.challengeUpgrade = challengeMatch[1].trim();
        }
        
        // Extract Motivating Line
        const motivatingMatch = feedbackText.match(/## 🔥 (.*?)$/);
        if (motivatingMatch) {
          sections.motivatingLine = motivatingMatch[1].trim();
        }
        
        return sections;
      };
      
      const feedback = parseFeedback(feedbackText);
      
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold gradient-text-lime mb-2">
              AI-Powered Feedback
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized insights on your challenge response
            </p>
          </div>

          {/* AI Feedback Display */}
          <div className="emoji-card bg-gradient-to-br from-neon-lime/20 to-teal-400/20 border-neon-lime/30">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-midnight-900 font-bold text-xl">
                🎮
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    AI Mentor Analysis
                  </h4>
                  {feedback.xpEarned > 0 && (
                    <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <span className="text-yellow-500 font-bold">+{feedback.xpEarned} XP</span>
                      {feedback.badgeEarned && <span className="text-yellow-500">🏆</span>}
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 mb-2">
                      <strong>Response Quality:</strong> {feedbackText}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/50 dark:bg-midnight-700/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-600 mb-2">✅ Strengths</h5>
                      <ul className="text-sm space-y-1">
                        {feedback.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-800 dark:text-white">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
            <div className="bg-white/50 dark:bg-midnight-700/50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-600 mb-2">🔧 Areas to Improve</h5>
              <div className="text-sm space-y-2">
                <ul className="space-y-1">
                  {feedback.areasToImprove.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-white">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-600 mb-2">🚀 Next Steps</h5>
                    <ul className="text-sm space-y-1">
                      {feedback.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-800 dark:text-white">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep('challenge')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </motion.button>
          
          {moduleProgress?.completedSubtopics.includes(currentSubtopic) ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep('badge')}
              className="btn-neon"
            >
              Claim Your Badge! <Award className="ml-2" size={20} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep('challenge')}
              className="btn-secondary"
            >
              Complete Challenge First <Target className="ml-2" size={20} />
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  };

  const renderBadgeStep = () => (
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
            {subtopic.badge.emoji}
          </motion.div>
          <h3 className="text-3xl font-bold gradient-text-lime mb-2">
            {subtopic.badge.name}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {subtopic.badge.description}
          </p>
          <div className="xp-badge text-lg mb-6">
            +50 XP
          </div>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-bold gradient-text-lime mb-3">Share Your Achievement</h4>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            {subtopic.shareMessage}
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShareProgress}
              className="btn-secondary flex-1"
            >
              <Share2 className="mr-2" size={16} />
              Share Progress
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailBadge}
              className="btn-secondary flex-1"
            >
              📧 Email Badge
            </motion.button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (currentSubtopic > 0) {
                setCurrentSubtopic(currentSubtopic - 1);
                setQuizAnswers({});
                setChallengeResponse('');
              }
            }}
            disabled={currentSubtopic === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2" size={20} />
            Previous Subtopic
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextSubtopic}
            className="btn-neon"
          >
            {currentSubtopic < module1Subtopics.length - 1 ? 'Next Subtopic' : 'Take Final Assessment'} 
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </div>
      </motion.div>
    );

    return (
      <div className="space-y-6">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('subtopic-select')}
              className="p-2 rounded-lg bg-white/50 dark:bg-midnight-700/50 hover:bg-white/70 dark:hover:bg-midnight-600/50 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h2 className="text-xl font-bold gradient-text-lime">
                {subtopic.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subtopic {currentSubtopic + 1} of {module1Subtopics.length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('subtopic-select')}
              className="btn-secondary text-sm px-3 py-2"
            >
              Choose Different Topic
            </button>
            <div className="xp-badge">{moduleProgress?.totalXP || 0} XP</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {moduleProgress?.completedSubtopics.length || 0} completed
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {['discover', 'video', 'quiz', 'quiz-results', 'challenge', 'feedback', 'badge'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep === step
                    ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-midnight-900 shadow-lg scale-110'
                    : ['discover', 'video', 'quiz', 'challenge', 'feedback', 'badge'].indexOf(currentStep) > index
                    ? 'bg-gradient-to-r from-teal-500 to-violet-500 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-midnight-700/50 text-gray-400'
                }`}
              >
                {index + 1}
              </div>
              {index < 5 && (
                <div className={`w-8 h-1 mx-2 rounded-full ${
                  ['discover', 'video', 'quiz', 'challenge', 'feedback', 'badge'].indexOf(currentStep) > index
                    ? 'bg-gradient-to-r from-teal-500 to-violet-500'
                    : 'bg-gray-300 dark:bg-midnight-600'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Stage Navigation */}
        {renderStageNavigation()}

        {/* Step Content */}
        <div className="card-genz p-8">
          {currentStep === 'discover' && renderDiscoverStep()}
          {currentStep === 'video' && renderVideoStep()}
          {currentStep === 'quiz' && renderQuizStep()}
          {currentStep === 'quiz-results' && renderQuizResultsStep()}
          {currentStep === 'challenge' && renderChallengeStep()}
          {currentStep === 'feedback' && renderFeedbackStep()}
          {currentStep === 'badge' && renderBadgeStep()}
        </div>
      </div>
    );
  };

  // Stage navigation helpers
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

  const renderStageNavigation = () => {
    const steps = [
      { id: 'discover', label: 'Discover', icon: '🔍' },
      { id: 'video', label: 'Video', icon: '📹' },
      { id: 'quiz', label: 'Quiz', icon: '📝' },
      { id: 'challenge', label: 'Challenge', icon: '💪' },
      { id: 'feedback', label: 'Feedback', icon: '🎮' },
      { id: 'badge', label: 'Badge', icon: '🏆' }
    ];

    return (
      <div className="flex justify-center mb-6">
        <div className="flex gap-2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-2xl">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                currentStep === step.id
                  ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70'
              }`}
            >
              <span className="mr-1">{step.icon}</span>
              {step.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleAssessmentAnswer = (questionId: number, answer: string) => {
    setAssessmentAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateAssessmentScore = (): number => {
    let score = 0;
    module1Assessment.questions.forEach(question => {
      if (assessmentAnswers[question.id] === question.options[question.correct]) {
        score++;
      }
    });
    return score;
  };

  const handleAssessmentSubmit = () => {
    const score = calculateAssessmentScore();
    const totalQuestions = module1Assessment.questions.length;
    
    // Calculate detailed results for each question
    const results: {[key: number]: {correct: boolean, explanation: string}} = {};
    module1Assessment.questions.forEach(question => {
      const userAnswer = assessmentAnswers[question.id];
      const correctAnswer = question.options[question.correct];
      const isCorrect = userAnswer === correctAnswer;
      
      results[question.id] = {
        correct: isCorrect,
        explanation: question.explanation || "No explanation available"
      };
    });
    
    setAssessmentScore(score);
    setAssessmentResults(results);
    setCurrentView('assessment-results');
  };

  // File Upload Handler
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const currentSub = module1Subtopics[currentSubtopic];
    setUploadedFiles(prev => ({
      ...prev,
      [currentSub.id]: [...(prev[currentSub.id] || []), ...files]
    }));
    
    // Read and analyze file content for better feedback
    files.forEach(file => {
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          if (content && content.trim().length > 0) {
            // Auto-populate the text field with file content for analysis
            setChallengeResponse(prev => prev + (prev ? '\n\n' : '') + content);
          }
        };
        reader.readAsText(file);
        } else if (file.type.startsWith('video/') || file.name.match(/\.(mp4|mov|webm|avi|mkv)$/i)) {
    // Handle video files - convert to text automatically
    console.log('Video file uploaded:', file.name, file.type);
    setChallengeResponse(prev => {
      const videoContent = `[VIDEO FILE UPLOADED]\nFile: ${file.name}\nSize: ${(file.size / 1024 / 1024).toFixed(2)} MB\nType: ${file.type}\n\n🔄 Converting video to text...\n\nPlease wait while we process your video audio.`;
      return prev + (prev ? '\n\n' : '') + videoContent;
    });
    
    // Convert video to text automatically
    convertVideoToText(file, currentSub);
  } else {
        // Handle other file types
        console.log('Other file uploaded:', file.name, file.type);
        setChallengeResponse(prev => {
          const otherContent = `[FILE UPLOADED]\nFile: ${file.name}\nSize: ${(file.size / 1024 / 1024).toFixed(2)} MB\nType: ${file.type}\n\nNote: File uploaded successfully! For text analysis, please upload a .txt file or type your response directly.`;
          return prev + (prev ? '\n\n' : '') + otherContent;
        });
      }
    });
  };

  // Delete uploaded file
  const handleDeleteFile = (index: number) => {
    const currentSub = module1Subtopics[currentSubtopic];
    setUploadedFiles(prev => ({
      ...prev,
      [currentSub.id]: (prev[currentSub.id] || []).filter((_, i) => i !== index)
    }));
    
    // Check if user has no files or videos left and remove completion status
    const remainingFiles = (uploadedFiles[currentSub.id] || []).filter((_, i) => i !== index);
    const hasVideo = recordedVideo[currentSub.id] !== null && recordedVideo[currentSub.id] !== undefined;
    
    // Clear text field content if no files or videos remain
    if (remainingFiles.length === 0 && !hasVideo) {
      setChallengeResponse('');
    }
    
    if (remainingFiles.length === 0 && !hasVideo && moduleProgress?.completedSubtopics.includes(currentSubtopic)) {
      const updatedProgress = { ...moduleProgress };
      updatedProgress.completedSubtopics = updatedProgress.completedSubtopics.filter(id => id !== currentSubtopic);
      updatedProgress.badges = updatedProgress.badges.filter(badge => badge !== currentSub.badge.name);
      setModuleProgress(updatedProgress);
      saveModuleProgress(updatedProgress);
    }
  };

  // Delete recorded video
  const handleDeleteVideo = () => {
    const currentSub = module1Subtopics[currentSubtopic];
    const currentTranscript = videoTranscripts[currentSub.id];
    
    setRecordedVideo(prev => ({
      ...prev,
      [currentSub.id]: null
    }));
    
    // Also clear the transcript
    setVideoTranscripts(prev => ({
      ...prev,
      [currentSub.id]: null
    }));
    
    // Remove transcript from text field if it exists
    if (currentTranscript) {
      setChallengeResponse(prev => {
        if (prev && prev.includes(currentTranscript)) {
          // Remove the transcript section from the text field
          return prev.replace(new RegExp(`\\n\\n\\[VIDEO TRANSCRIPT\\]\\n\\n${currentTranscript.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`), '')
                    .replace(new RegExp(`^${currentTranscript.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`), '')
                    .trim();
        }
        return prev;
      });
    }
    
    // Stop any active recording and close camera
    if ((window as any).currentMediaRecorder) {
      (window as any).currentMediaRecorder.stop();
      (window as any).currentMediaRecorder = null;
    }
    if ((window as any).currentStream) {
      (window as any).currentStream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      (window as any).currentStream = null;
    }
    setIsRecording(false);
    
    // Check if user has no files or videos left
    const hasFiles = uploadedFiles[currentSub.id] && uploadedFiles[currentSub.id].length > 0;
    
    // Clear text field content if no files or videos remain
    if (!hasFiles) {
      setChallengeResponse('');
    }
    
    // Remove completion status if user deletes required content
    if (moduleProgress?.completedSubtopics.includes(currentSubtopic)) {
      const updatedProgress = { ...moduleProgress };
      updatedProgress.completedSubtopics = updatedProgress.completedSubtopics.filter(id => id !== currentSubtopic);
      updatedProgress.badges = updatedProgress.badges.filter(badge => badge !== currentSub.badge.name);
      setModuleProgress(updatedProgress);
      saveModuleProgress(updatedProgress);
    }
  };

  // Real Audio-to-Text Conversion System
  // Video-to-Text Conversion using AssemblyAI (Free API)
  const convertVideoToText = async (videoBlob: Blob, subtopic: any) => {
    return new Promise<void>(async (resolve) => {
      console.log('Video recorded successfully:', videoBlob.size, 'bytes');
      
      // Show processing status
      setChallengeResponse(prev => {
        const processingContent = `[VIDEO PROCESSING]\n\nFile size: ${(videoBlob.size / 1024 / 1024).toFixed(2)} MB\n\n🔄 Converting video to text...\n\nPlease wait while we process your video audio.`;
        return prev + (prev ? '\n\n' : '') + processingContent;
      });
      
      try {
        // Check if API key is configured
        const apiKey = API_KEYS.ASSEMBLYAI;
        
        if (apiKey === 'YOUR_ASSEMBLYAI_API_KEY') {
          // API key not configured, show setup instructions
          setChallengeResponse(prev => {
            const setupContent = `[VIDEO PROCESSING]\n\nFile size: ${(videoBlob.size / 1024 / 1024).toFixed(2)} MB\n\n🔧 Video-to-Text Conversion Setup Required\n\nTo enable automatic video-to-text conversion:\n\n1. Get a FREE API key from AssemblyAI:\n   → Visit: https://www.assemblyai.com/\n   → Sign up for free (3 hours/month)\n   → Copy your API key\n\n2. Replace 'YOUR_ASSEMBLYAI_API_KEY' in src/config/apiKeys.ts\n\n3. Your videos will be automatically converted to text!\n\n💡 For now, please type a description of what you discussed in the video.`;
            return prev + (prev ? '\n\n' : '') + setupContent;
          });
          resolve();
          return;
        }
        
        // Use multi-service approach for better results - send video directly
        console.log('Using multi-service speech-to-text approach with original video...');
        let result;
        let transcript = '';
        
        try {
          // Try with original video first (most reliable)
          result = await MultiSpeechToTextService.transcribe(videoBlob, videoBlob);
          transcript = result.text;
          console.log(`✅ Transcription successful with ${result.provider}:`, transcript.length, 'characters');
          console.log('Confidence:', result.confidence);
          console.log('Language:', result.language);
        } catch (error) {
          console.error('Direct video transcription failed, trying audio extraction...', error);
          
          try {
            // Fallback to audio extraction if direct video fails
            const audioBlob = await convertVideoToAudio(videoBlob);
            result = await MultiSpeechToTextService.transcribe(audioBlob, videoBlob);
            transcript = result.text;
            console.log(`✅ Audio extraction transcription successful with ${result.provider}:`, transcript.length, 'characters');
          } catch (audioError) {
            console.error('All speech-to-text services failed:', audioError);
            
            // Provide a fallback message
            transcript = `[VIDEO ANALYSIS COMPLETE]\n\n⚠️ Automatic speech recognition was unable to process your video audio.\n\nThis could be due to:\n• Audio quality or clarity issues\n• Background noise\n• Unclear pronunciation\n• Language not recognized\n• Audio format compatibility\n\n💡 Please try:\n• Recording a new video with clearer speech\n• Speaking closer to the microphone\n• Reducing background noise\n• Or type your response directly in the text field below\n\nYour video has been recorded successfully (${(videoBlob.size / 1024 / 1024).toFixed(2)} MB) and you can still provide feedback manually.`;
            
            console.log('Using fallback message for user guidance');
          }
        }
        
        if (transcript && transcript.trim().length > 0) {
          // Store the transcript separately for display
          setVideoTranscripts(prev => ({
            ...prev,
            [subtopic.id]: transcript
          }));
          
          // Update the text field with the transcript
          setChallengeResponse(prev => {
            // If there's existing content, append the transcript
            if (prev && prev.trim().length > 0) {
              return prev + `\n\n[VIDEO TRANSCRIPT]\n\n${transcript}`;
            } else {
              // If no existing content, just add the transcript
              return transcript;
            }
          });
        } else {
          setChallengeResponse(prev => {
            const noSpeechContent = `[VIDEO PROCESSING COMPLETE]\n\n⚠️ No clear speech detected in your video.\n\nThis could be due to:\n- Low audio volume\n- Background noise\n- Unclear pronunciation\n- Microphone issues\n\n💡 Please try:\n- Recording again with clear speech\n- Or type your response directly in the text field`;
            return noSpeechContent;
          });
        }
        
        resolve();
      } catch (error) {
        console.error('Video-to-text conversion error:', error);
        setChallengeResponse(prev => {
          const errorContent = `[TRANSCRIPTION ERROR]\n\n❌ Unable to convert video to text.\n\nError: ${error instanceof Error ? error.message : String(error)}\n\n💡 Please try:\n- Recording a new video with clear speech\n- Or type your response directly in the text field\n- Or upload a text file with your response`;
          return prev + (prev ? '\n\n' : '') + errorContent;
        });
        resolve();
      }
    });
  };

  // Convert video to audio using Web Audio API
  const convertVideoToAudio = async (videoBlob: Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      console.log('Starting video to audio conversion...');
      
      try {
        const video = document.createElement('video');
        const videoUrl = URL.createObjectURL(videoBlob);
        video.src = videoUrl;
        video.muted = false;
        video.volume = 1.0;
        video.crossOrigin = 'anonymous';
        
        let audioContext: AudioContext;
        let mediaRecorder: MediaRecorder;
        let audioChunks: Blob[] = [];
        let isProcessing = false;
        let processingTimeout: NodeJS.Timeout;
        let shortTimeout: NodeJS.Timeout;
        
        video.onloadedmetadata = () => {
          console.log('Video metadata loaded, duration:', video.duration);
          console.log('Video videoWidth:', video.videoWidth);
          console.log('Video videoHeight:', video.videoHeight);
          console.log('Video readyState:', video.readyState);
          
          // Validate video duration - but be more lenient
          if (!isFinite(video.duration) || video.duration <= 0) {
            console.warn('Invalid video duration detected:', video.duration);
            console.log('Attempting to process anyway - some videos have metadata issues but audio is fine');
            
            // Don't reject immediately, try to process anyway
            // We'll add a timeout fallback instead
          } else {
            console.log('Video duration is valid:', video.duration, 'seconds');
          }
          
          try {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const source = audioContext.createMediaElementSource(video);
            const destination = audioContext.createMediaStreamDestination();
            
            source.connect(destination);
            
            // Try different audio formats for better compatibility
            let mimeType = 'audio/webm;codecs=opus';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
              mimeType = 'audio/webm';
              if (!MediaRecorder.isTypeSupported(mimeType)) {
                mimeType = 'audio/mp4';
                if (!MediaRecorder.isTypeSupported(mimeType)) {
                  mimeType = 'audio/wav';
                }
              }
            }
            console.log('Using audio format:', mimeType);
            console.log('MediaRecorder supported types:');
            console.log('- audio/webm;codecs=opus:', MediaRecorder.isTypeSupported('audio/webm;codecs=opus'));
            console.log('- audio/webm:', MediaRecorder.isTypeSupported('audio/webm'));
            console.log('- audio/mp4:', MediaRecorder.isTypeSupported('audio/mp4'));
            console.log('- audio/wav:', MediaRecorder.isTypeSupported('audio/wav'));
            console.log('- audio/ogg;codecs=opus:', MediaRecorder.isTypeSupported('audio/ogg;codecs=opus'));
            
            mediaRecorder = new MediaRecorder(destination.stream, {
              mimeType: mimeType
            });
            
            mediaRecorder.ondataavailable = (event) => {
              console.log('Audio data available:', event.data.size, 'bytes');
              if (event.data.size > 0) {
                audioChunks.push(event.data);
                console.log('Total audio chunks collected:', audioChunks.length);
                console.log('Total audio data size so far:', audioChunks.reduce((total, chunk) => total + chunk.size, 0), 'bytes');
              } else {
                console.warn('Empty audio data chunk received');
              }
            };
            
            mediaRecorder.onstop = () => {
              console.log('MediaRecorder stopped, total chunks:', audioChunks.length);
              const audioBlob = new Blob(audioChunks, { type: mimeType });
              console.log('Audio blob created:', audioBlob.size, 'bytes');
              console.log('Audio duration estimate:', (audioBlob.size / 16000), 'seconds (rough estimate)');
              
              // Check if we got any audio data
              if (audioBlob.size === 0) {
                console.error('No audio data captured! This might be due to:');
                console.error('1. Video has no audio track');
                console.error('2. Audio context issues');
                console.error('3. MediaRecorder not capturing audio properly');
                console.error('4. Video format not supported for audio extraction');
                
                // Try alternative approach - send original video to AssemblyAI
                console.log('Attempting to send original video file to AssemblyAI...');
                URL.revokeObjectURL(videoUrl);
                resolve(videoBlob); // Send original video instead of extracted audio
                return;
              }
              
              // Clear timeouts
              clearTimeout(processingTimeout);
              clearTimeout(shortTimeout);
              
              URL.revokeObjectURL(videoUrl);
              resolve(audioBlob);
            };
            
            mediaRecorder.onerror = (error) => {
              console.error('MediaRecorder error:', error);
              URL.revokeObjectURL(videoUrl);
              reject(new Error(`Audio conversion failed: ${error}`));
            };
            
            // Start recording audio with smaller time slices for complete coverage
            console.log('Starting MediaRecorder...');
            mediaRecorder.start(100); // Collect data every 100ms for better coverage
            isProcessing = true;
            
            // Play video to capture audio
            console.log('Playing video to capture audio...');
            video.play().then(() => {
              console.log('Video started playing');
              console.log('Video current time:', video.currentTime);
              console.log('Video duration:', video.duration);
              console.log('Video volume:', video.volume);
              console.log('Video muted:', video.muted);
              
              // Set up multiple event handlers to ensure we catch the end
              video.onended = () => {
                console.log('Video ended, stopping recording...');
                console.log('Final video current time:', video.currentTime);
                setTimeout(() => {
                  if (isProcessing && mediaRecorder && mediaRecorder.state === 'recording') {
                    console.log('Stopping MediaRecorder...');
                    mediaRecorder.stop();
                    isProcessing = false;
                  }
                }, 1000); // Reduced timeout for faster response
              };
              
              // Also listen for pause/stop events
              video.onpause = () => {
                console.log('Video paused, checking if we should stop recording...');
                if (isProcessing && mediaRecorder && mediaRecorder.state === 'recording') {
                  setTimeout(() => {
                    if (isProcessing && mediaRecorder && mediaRecorder.state === 'recording') {
                      console.log('Stopping MediaRecorder due to pause...');
                      mediaRecorder.stop();
                      isProcessing = false;
                    }
                  }, 500);
                }
              };
              
              // For videos with invalid duration, add a fallback timer
              if (!isFinite(video.duration) || video.duration <= 0) {
                console.log('Video has invalid duration, using fallback timer...');
                setTimeout(() => {
                  if (isProcessing && mediaRecorder && mediaRecorder.state === 'recording') {
                    console.log('Fallback timer triggered - stopping recording...');
                    mediaRecorder.stop();
                    isProcessing = false;
                  }
                }, 15000); // 15 second fallback for videos with invalid duration
              }
              
            }).catch(error => {
              console.error('Video playback error:', error);
              URL.revokeObjectURL(videoUrl);
              reject(new Error(`Video playback failed: ${error.message}`));
            });
            
          } catch (error) {
            console.error('Audio context setup error:', error);
            URL.revokeObjectURL(videoUrl);
            reject(new Error(`Audio context setup failed: ${error instanceof Error ? error.message : String(error)}`));
          }
        };
        
        video.onerror = (error) => {
          console.error('Video loading error:', error);
          URL.revokeObjectURL(videoUrl);
          reject(new Error('Video loading failed'));
        };
        
        video.oncanplay = () => {
          console.log('Video can play');
        };
        
        console.log('Loading video...');
        video.load();
        
        // Enhanced timeout fallback - don't rely on video duration
        processingTimeout = setTimeout(() => {
          if (isProcessing) {
            console.log('Processing timeout reached, forcing stop...');
            if (mediaRecorder && mediaRecorder.state === 'recording') {
              console.log('Stopping MediaRecorder due to timeout...');
              mediaRecorder.stop();
            }
            isProcessing = false;
          }
        }, 45000); // 45 second timeout for longer videos
        
        // Also add a shorter timeout for very short videos
        shortTimeout = setTimeout(() => {
          if (isProcessing && mediaRecorder && mediaRecorder.state === 'recording') {
            console.log('Short timeout - video might be very short, stopping...');
            mediaRecorder.stop();
          }
        }, 10000); // 10 second timeout for short videos
        
      } catch (error) {
        console.error('Video to audio conversion error:', error);
        reject(new Error(`Audio conversion setup failed: ${error instanceof Error ? error.message : String(error)}`));
      }
    });
  };

  // Transcribe audio using AssemblyAI API
  const transcribeWithAssemblyAI = async (audioBlob: Blob, apiKey: string, useFallbackSettings: boolean = false, useAutoLanguage: boolean = false): Promise<string> => {
    try {
      console.log('Starting AssemblyAI transcription...');
      console.log('Audio blob size:', audioBlob.size, 'bytes');
      console.log('Audio blob type:', audioBlob.type);
      
      // Test audio quality by creating a temporary audio element
      try {
        const testAudio = new Audio();
        const testUrl = URL.createObjectURL(audioBlob);
        testAudio.src = testUrl;
        testAudio.volume = 0.1; // Low volume for testing
        
        testAudio.onloadedmetadata = () => {
          console.log('Test audio duration:', testAudio.duration);
          console.log('Test audio ready state:', testAudio.readyState);
          console.log('Test audio can play through duration:', testAudio.duration);
        };
        
        testAudio.oncanplay = () => {
          console.log('Test audio can play - audio format is valid');
          console.log('Audio duration in test:', testAudio.duration);
          URL.revokeObjectURL(testUrl);
        };
        
        testAudio.onerror = (error) => {
          console.error('Test audio error:', error);
          console.error('This might indicate audio format issues');
          URL.revokeObjectURL(testUrl);
        };
        
        testAudio.load();
      } catch (error) {
        console.warn('Could not test audio quality:', error);
      }
      
      // Additional audio analysis
      console.log('Audio blob analysis:');
      console.log('Size in MB:', (audioBlob.size / 1024 / 1024).toFixed(2));
      console.log('Estimated duration (assuming 16kbps):', (audioBlob.size / 16000).toFixed(2), 'seconds');
      console.log('Estimated duration (assuming 64kbps):', (audioBlob.size / 64000).toFixed(2), 'seconds');
      console.log('Estimated duration (assuming 128kbps):', (audioBlob.size / 128000).toFixed(2), 'seconds');
      
      // Upload audio file to AssemblyAI
      console.log('Uploading audio to AssemblyAI...');
      const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
        method: 'POST',
        headers: {
          'authorization': apiKey,
        },
        body: audioBlob
      });
      
      console.log('Upload response status:', uploadResponse.status);
      
      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error('Upload failed:', errorText);
        throw new Error(`Upload failed: ${uploadResponse.statusText} - ${errorText}`);
      }
      
      const uploadData = await uploadResponse.json();
      console.log('Upload successful, URL:', uploadData.upload_url);
      
      // Start transcription
      console.log('Starting transcription...');
      const transcriptResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
        method: 'POST',
        headers: {
          'authorization': apiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify(useAutoLanguage ? {
          // Auto language detection settings
          audio_url: uploadData.upload_url,
          language_detection: true,
          punctuate: true,
          format_text: true,
          dual_channel: false,
          webhook_url: null,
          auto_highlights: false,
          audio_start_from: 0,
          audio_end_at: null,
          // Minimal settings for difficult audio
          redact_pii: false,
          redact_pii_audio: false,
          filter_profanity: false,
          iab_categories: false,
          sentiment_analysis: false,
          entity_detection: false
        } : useFallbackSettings ? {
          // Fallback settings - more permissive
          audio_url: uploadData.upload_url,
          language_code: 'en_us',
          punctuate: false,
          format_text: false,
          dual_channel: false,
          webhook_url: null,
          auto_highlights: false,
          audio_start_from: 0,
          audio_end_at: null,
          // Minimal settings for difficult audio
          redact_pii: false,
          redact_pii_audio: false,
          // Remove speaker_labels and speakers_expected for fallback
          filter_profanity: false,
          iab_categories: false,
          sentiment_analysis: false,
          entity_detection: false
        } : {
          // Standard settings
          audio_url: uploadData.upload_url,
          language_code: 'en_us',
          // Enhanced settings for better accuracy and completeness
          punctuate: true,
          format_text: true,
          dual_channel: false,
          webhook_url: null,
          auto_highlights: false,
          audio_start_from: 0,
          audio_end_at: null,
          word_boost: ['active listening', 'communication', 'skills', 'practice', 'feedback'],
          boost_param: 'default',
          // Additional settings to help with difficult audio
          redact_pii: false,
          redact_pii_audio: false,
          // Remove speaker_labels and speakers_expected to avoid API error
          // Try to be more permissive with audio quality
          filter_profanity: false,
          // Enable more detailed response
          iab_categories: false,
          sentiment_analysis: false,
          entity_detection: false
        })
      });
      
      console.log('Transcription request status:', transcriptResponse.status);
      
      if (!transcriptResponse.ok) {
        const errorText = await transcriptResponse.text();
        console.error('Transcription request failed:', errorText);
        throw new Error(`Transcription request failed: ${transcriptResponse.statusText} - ${errorText}`);
      }
      
      const transcriptData = await transcriptResponse.json();
      console.log('Transcription started, ID:', transcriptData.id);
      
      // Poll for completion
      let transcript = '';
      let attempts = 0;
      const maxAttempts = 60; // Increased to 60 seconds for longer videos
      
      console.log('Polling for transcription completion...');
      
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        attempts++;
        
        console.log(`Polling attempt ${attempts}/${maxAttempts}...`);
        
        const statusResponse = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptData.id}`, {
          headers: {
            'authorization': apiKey,
          }
        });
        
        if (!statusResponse.ok) {
          const errorText = await statusResponse.text();
          console.error('Status check failed:', errorText);
          throw new Error(`Status check failed: ${statusResponse.statusText} - ${errorText}`);
        }
        
        const statusData = await statusResponse.json();
        console.log('Status:', statusData.status);
        
        if (statusData.status === 'completed') {
          transcript = statusData.text || '';
          console.log('Transcription completed!');
          console.log('Transcript length:', transcript.length);
          console.log('Transcript preview:', transcript.substring(0, 200) + '...');
          console.log('Full status data:', statusData);
          
          // Check for specific error messages
          if (statusData.error) {
            console.error('AssemblyAI error:', statusData.error);
          }
          
          // Check confidence scores
          if (statusData.confidence) {
            console.log('Confidence score:', statusData.confidence);
          }
          
          // Check if there are any words detected
          if (statusData.words && statusData.words.length > 0) {
            console.log('Words detected:', statusData.words.length);
            console.log('First few words:', statusData.words.slice(0, 5));
          }
          
          // Validate transcript quality
          if (transcript.length < 10) {
            console.warn('Transcript seems too short, might be incomplete');
            console.warn('This could be due to:');
            console.warn('1. Audio quality too poor for speech recognition');
            console.warn('2. Language not recognized (trying English)');
            console.warn('3. Audio format not compatible');
            console.warn('4. Background noise overwhelming speech');
            console.warn('5. Speech too quiet or unclear');
          }
          break;
        } else if (statusData.status === 'error') {
          console.error('Transcription error:', statusData.error);
          throw new Error(`Transcription failed: ${statusData.error}`);
        } else if (statusData.status === 'processing') {
          console.log('Still processing...', `(${attempts}/${maxAttempts})`);
        }
      }
      
      if (attempts >= maxAttempts) {
        console.error('Transcription timeout after', maxAttempts, 'attempts');
        throw new Error('Transcription timeout');
      }
      
      return transcript;
    } catch (error) {
      console.error('AssemblyAI transcription error:', error);
      throw new Error(`AssemblyAI transcription failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };



  // Video Recording Handlers
  const startRecording = async () => {
    try {
      // Request camera and microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      setIsRecording(true);
      setCameraStream(stream);
      
      // Create MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const currentSub = module1Subtopics[currentSubtopic];
        setRecordedVideo(prev => ({
          ...prev,
          [currentSub.id]: url
        }));
        
        // Convert video audio to text
        await convertVideoToText(blob, currentSub);
        
        // Stop all tracks to close camera
        stream.getTracks().forEach(track => track.stop());
        
        // Clear the mediaRecorder reference
        (window as any).currentMediaRecorder = null;
        (window as any).currentStream = null;
      };
      
      mediaRecorder.start();
      
      // Store mediaRecorder and stream for stopping
      (window as any).currentMediaRecorder = mediaRecorder;
      (window as any).currentStream = stream;
      
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions and try again.');
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if ((window as any).currentMediaRecorder) {
      (window as any).currentMediaRecorder.stop();
      setIsRecording(false);
    }
    
    // Also stop the stream immediately if it exists
    if ((window as any).currentStream) {
      (window as any).currentStream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      (window as any).currentStream = null;
    }
    
    // Clear camera stream
    setCameraStream(null);
  };

  // Share Progress Handler
  const handleShareProgress = () => {
    console.log('Share Progress button clicked!');
    console.log('Navigator share available:', !!navigator.share);
    console.log('User agent:', navigator.userAgent);
    console.log('Is HTTPS:', window.location.protocol === 'https:');
    const userName = "Student"; // In real app, get from user profile
    
    let shareText = '';
    let shareTitle = '';
    
    if (currentView === 'assessment-results' && assessmentScore !== null) {
      // Share assessment results
      const totalQuestions = module1Assessment.questions.length;
      const percentage = Math.round((assessmentScore / totalQuestions) * 100);
      const gradeLevel = module1Assessment.gradeLevels.find(level => {
        const [min, max] = level.range.split('-').map(Number);
        const maxValue = max || 100;
        return percentage >= min && percentage <= maxValue;
      }) || module1Assessment.gradeLevels[module1Assessment.gradeLevels.length - 1];
      
      shareText = `🎉 ${userName} just completed the Communication Skills Final Assessment and achieved ${gradeLevel?.grade} level (${percentage}%)! Ready to communicate like a pro! 🗣️ #CommunicationSkills #AssessmentComplete

Learn more: https://aiera-softskills.com`;
      shareTitle = `${userName} achieved ${gradeLevel?.grade} - Communication Skills Assessment`;
    } else {
      // Share subtopic completion
      const currentSub = module1Subtopics[currentSubtopic];
      shareText = `🎉 ${userName} just completed the "${currentSub.title}" subtopic and earned the ${currentSub.badge.name} badge (${currentSub.badge.emoji})! ${currentSub.shareMessage} 

Check out Aiera Soft Skills Academy for more learning opportunities: https://aiera-softskills.com`;
      shareTitle = `${userName} completed ${currentSub.title} - Aiera Soft Skills Academy`;
    }
    
    console.log('Share text:', shareText);
    console.log('Share title:', shareTitle);
    
    // Always copy to clipboard first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(() => {
        console.log('Text copied to clipboard successfully');
        // Try to use native share API to show social platform options
        if (navigator.share) {
          console.log('Attempting native share...');
          navigator.share({
            title: shareTitle,
            text: shareText,
            url: 'https://aiera-softskills.com'
          }).then(() => {
            console.log('Native share successful - user selected a platform');
          }).catch((error) => {
            console.log('Native share cancelled or failed:', error);
            // Show fallback with the clean message
            alert(`Progress message copied to clipboard!\n\nMessage: "${shareText}"\n\nYou can now paste it on social media or share it with friends!`);
          });
        } else {
          console.log('Native share not available, showing fallback');
          alert(`Progress message copied to clipboard!\n\nMessage: "${shareText}"\n\nYou can now paste it on social media or share it with friends!`);
        }
      }).catch((error) => {
        console.log('Clipboard write failed:', error);
        // If clipboard fails, show the text directly
        alert(`Share this message:\n\n"${shareText}"\n\nCopy this text and share it on social media or with friends!`);
      });
    } else {
      console.log('Clipboard API not available, showing alert');
      // If clipboard fails, show the text directly
      alert(`Share this message:\n\n"${shareText}"\n\nCopy this text and share it on social media or with friends!`);
    }
  };

  // Email Badge Handler
  const handleEmailBadge = () => {
    console.log('Email Badge clicked!', { currentView, assessmentScore, currentSubtopic });
    const userName = "Student"; // In real app, get from user profile
    
    let subject = '';
    let body = '';
    
    if (currentView === 'assessment-results' && assessmentScore !== null) {
      // Email assessment results
      const totalQuestions = module1Assessment.questions.length;
      const percentage = Math.round((assessmentScore / totalQuestions) * 100);
      const gradeLevel = module1Assessment.gradeLevels.find(level => {
        const [min, max] = level.range.split('-').map(Number);
        const maxValue = max || 100;
        return percentage >= min && percentage <= maxValue;
      }) || module1Assessment.gradeLevels[module1Assessment.gradeLevels.length - 1];
      
      subject = `🎉 ${userName} achieved ${gradeLevel?.grade} level in Communication Skills!`;
      body = `Hi there!

I'm excited to share that ${userName} just completed the Communication Skills Final Assessment and achieved ${gradeLevel?.grade} level (${percentage}%)!

This achievement demonstrates mastery of communication skills including active listening, public speaking, written communication, non-verbal communication, conflict resolution, and presentation skills.

The assessment covered real-world scenarios in academic, professional, and personal contexts, preparing students for success in their careers and relationships.

Keep up the great work!

Best regards,
${userName}

---
Learn more about Aiera Soft Skills Academy: https://aiera-softskills.com`;
    } else {
      // Email subtopic completion
      const currentSub = module1Subtopics[currentSubtopic];
      subject = `🎉 ${userName} earned the ${currentSub.badge.name} badge!`;
      body = `Hi there!

I'm excited to share that ${userName} just completed the "${currentSub.title}" subtopic and earned the ${currentSub.badge.name} badge (${currentSub.badge.emoji})!

${currentSub.badge.description}

This achievement demonstrates progress in communication skills development through Aiera Soft Skills Academy. The program helps students master essential skills for academic success, career readiness, and personal growth.

Keep up the great work!

Best regards,
${userName}

---
Learn more about Aiera Soft Skills Academy: https://aiera-softskills.com`;
    }
    
    console.log('Email content:', { subject, body });
    
    // Always copy to clipboard first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(`${subject}\n\n${body}`).then(() => {
        console.log('Email content copied to clipboard successfully');
        // Try to open email client
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log('Mailto link:', mailtoLink);
        
        // Try to open email client selection dialog
        console.log('Attempting to open email client...');
        
        // Create a temporary link element and trigger it
        const emailLink = document.createElement('a');
        emailLink.href = mailtoLink;
        emailLink.target = '_self';
        emailLink.style.display = 'none';
        
        // Add to DOM, click, then remove
        document.body.appendChild(emailLink);
        emailLink.click();
        document.body.removeChild(emailLink);
        
        console.log('Email client link triggered');
        
        // Show user feedback after a delay
        setTimeout(() => {
          alert('Email client should have opened! If your default email client didn\'t open, you can:\n\n1. Copy the content from your clipboard and paste it into any email app\n2. Or manually create a new email with the copied content');
        }, 1500);
      }).catch((error) => {
        console.error('Clipboard error:', error);
        // If clipboard fails, try to open email client anyway
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Create a temporary link and click it (more reliable than window.location.href)
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        
        console.log('Email client opened via fallback method');
        alert(`Email client should have opened! If not, here's the content:\n\nSubject: ${subject}\n\nBody:\n${body}`);
      });
    } else {
      console.log('Clipboard API not available, trying email client directly');
      const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Create a temporary link and click it (more reliable than window.location.href)
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
      console.log('Email client opened directly');
      alert(`Email client should have opened! If not, here's the content:\n\nSubject: ${subject}\n\nBody:\n${body}`);
    }
  };

  const renderAssessmentView = () => {
    const currentQuestion = module1Assessment.questions[currentAssessmentQuestion];
    const totalQuestions = module1Assessment.questions.length;
    const progress = ((currentAssessmentQuestion + 1) / totalQuestions) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Assessment Header */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-neon-lime to-teal-400 rounded-full flex items-center justify-center text-4xl mb-6">
            <Trophy />
          </div>
          <h1 className="text-4xl font-bold gradient-text-lime mb-4">
            Final Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Test your mastery of communication skills
          </p>
        </div>

        {/* Progress Bar */}
        <div className="emoji-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold gradient-text-lime">
              Question {currentAssessmentQuestion + 1} of {totalQuestions}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-midnight-600 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-neon-lime to-teal-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="emoji-card">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            {currentQuestion.question}
          </h3>
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAssessmentAnswer(currentQuestion.id, option)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  assessmentAnswers[currentQuestion.id] === option
                    ? 'bg-gradient-to-r from-neon-lime to-teal-400 text-midnight-900 shadow-lg'
                    : 'bg-white/50 dark:bg-midnight-700/50 hover:bg-white/70 dark:hover:bg-midnight-600/50'
                }`}
              >
                <span className="font-medium text-gray-800 dark:text-white">{option}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentAssessmentQuestion(Math.max(0, currentAssessmentQuestion - 1))}
            disabled={currentAssessmentQuestion === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2" size={20} />
            Previous
          </motion.button>

          {currentAssessmentQuestion < totalQuestions - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentAssessmentQuestion(currentAssessmentQuestion + 1)}
              disabled={!assessmentAnswers[currentQuestion.id]}
              className="btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ArrowRight className="ml-2" size={20} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAssessmentSubmit}
              disabled={Object.keys(assessmentAnswers).length < totalQuestions}
              className="btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Assessment <Target className="ml-2" size={20} />
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  };

  const renderAssessmentResultsView = () => {
    const totalQuestions = module1Assessment.questions.length;
    const percentage = Math.round((assessmentScore! / totalQuestions) * 100);
    const gradeLevel = module1Assessment.gradeLevels.find(level => {
      const [min, max] = level.range.split('-').map(Number);
      // Handle edge cases: if max is undefined (like "90-100"), use 100
      const maxValue = max || 100;
      return percentage >= min && percentage <= maxValue;
    }) || module1Assessment.gradeLevels[module1Assessment.gradeLevels.length - 1];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Results Header */}
        <div className="text-center">
          <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-5xl font-bold mb-6 ${
            percentage >= 90 
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
              : percentage >= 80 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : percentage >= 70 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : percentage >= 60 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
          }`}>
            {percentage}%
          </div>
          <h1 className="text-4xl font-bold gradient-text-lime mb-4">
            Assessment Complete!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            You scored {assessmentScore}/{totalQuestions} questions correctly
          </p>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {gradeLevel?.grade}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {gradeLevel?.description}
          </p>
        </div>

        {/* Performance Analysis */}
        <div className="emoji-card">
          <h3 className="text-2xl font-bold gradient-text-lime mb-6">Performance Analysis</h3>
          {percentage >= 90 ? (
            <div className="text-green-600">
              <p className="text-xl font-semibold mb-4">🎉 Outstanding Performance!</p>
              <p className="text-lg mb-4">You have mastered communication skills across all areas. You're ready to excel in academic, professional, and personal situations!</p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="font-semibold mb-2">Your Strengths:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Excellent active listening and understanding</li>
                  <li>Strong professional communication skills</li>
                  <li>Confident presentation and public speaking abilities</li>
                  <li>Effective conflict resolution strategies</li>
                </ul>
              </div>
            </div>
          ) : percentage >= 80 ? (
            <div className="text-blue-600">
              <p className="text-xl font-semibold mb-4">🌟 Excellent Work!</p>
              <p className="text-lg mb-4">You have a strong foundation in communication skills with room for refinement in specific areas.</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="font-semibold mb-2">Keep Building On:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Your solid understanding of communication principles</li>
                  <li>Good professional communication habits</li>
                  <li>Strong foundation for continued growth</li>
                </ul>
              </div>
            </div>
          ) : percentage >= 70 ? (
            <div className="text-yellow-600">
              <p className="text-xl font-semibold mb-4">👍 Good Progress!</p>
              <p className="text-lg mb-4">You're developing strong communication skills. Focus on the areas below to reach the next level.</p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="font-semibold mb-2">Areas to Focus On:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Practice active listening techniques</li>
                  <li>Work on professional email and written communication</li>
                  <li>Build confidence in presentations and public speaking</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-red-600">
              <p className="text-xl font-semibold mb-4">📚 Keep Learning!</p>
              <p className="text-lg mb-4">Communication skills are essential for success. Review the subtopics and practice regularly.</p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <p className="font-semibold mb-2">Next Steps:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Review all subtopics thoroughly</li>
                  <li>Practice active listening in daily conversations</li>
                  <li>Work on professional communication skills</li>
                  <li>Consider retaking the assessment after more practice</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Question Review */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold gradient-text-lime">Question Review</h3>
          {module1Assessment.questions.map((question, index) => {
            const result = assessmentResults[question.id];
            const userAnswer = assessmentAnswers[question.id];
            const correctAnswer = question.options[question.correct];
            
            return (
              <div key={question.id} className={`emoji-card ${
                result.correct 
                  ? 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20' 
                  : 'border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    result.correct 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {result.correct ? '✓' : '✗'}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {index + 1}. {question.question}
                    </h5>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Answer: </span>
                        <span className={`text-sm ${result.correct ? 'text-green-600' : 'text-red-600'}`}>
                          {userAnswer}
                        </span>
                      </div>
                      {!result.correct && (
                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Correct Answer: </span>
                          <span className="text-sm text-green-600 font-medium">
                            {correctAnswer}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Explanation: </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {result.explanation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Share Achievement */}
        <div className="emoji-card bg-gradient-to-br from-neon-lime/20 to-teal-400/20 border-neon-lime/30">
          <h4 className="text-lg font-bold gradient-text-lime mb-3">Share Your Achievement</h4>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            You've completed the Communication Skills assessment and achieved {gradeLevel?.grade} level! Share your success with others.
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShareProgress}
              className="btn-secondary flex-1"
            >
              <Share2 className="mr-2" size={16} />
              Share Progress
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailBadge}
              className="btn-secondary flex-1"
            >
              📧 Email Badge
            </motion.button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCurrentView('subtopic-select');
              setAssessmentAnswers({});
              setAssessmentScore(null);
              setAssessmentResults({});
              setCurrentAssessmentQuestion(0);
            }}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Review Subtopics
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setAssessmentAnswers({});
              setAssessmentScore(null);
              setAssessmentResults({});
              setCurrentAssessmentQuestion(0);
              setCurrentView('assessment');
            }}
            className="btn-neon"
          >
            Retake Assessment <Target className="ml-2" size={20} />
          </motion.button>
        </div>
      </motion.div>
    );
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
              <div className="xp-badge">{moduleProgress?.totalXP || 0} XP</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {moduleProgress?.completedSubtopics.length || 0}/{module1Subtopics.length} completed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {currentView === 'intro' && renderIntroView()}
          {currentView === 'subtopic-select' && renderSubtopicSelectionView()}
          {currentView === 'subtopic' && renderSubtopicView()}
          {currentView === 'assessment' && renderAssessmentView()}
          {currentView === 'assessment-results' && renderAssessmentResultsView()}
        </div>
      </div>
      
      {/* Floating Navigation Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={onNavigateCatalog || (() => window.location.href = window.location.origin)}
          className="btn-secondary shadow-2xl"
        >
          📚 Back to Catalog
        </button>
        <button
          onClick={onNavigateHome || (() => window.location.href = window.location.origin)}
          className="btn-secondary shadow-2xl"
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default EnhancedCommunicationModule;

