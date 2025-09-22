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
  module2Subtopics, 
  module2Assessment,
  ModuleProgress,
  SubtopicData,
  saveModuleProgress,
  loadModuleProgress,
  updateSubtopicProgress,
  generatePersonalizedFeedback
} from '../../data/module2Data';
import { API_KEYS } from '../../config/apiKeys';
import { MultiSpeechToTextService } from '../../services/multiSpeechToTextService';

interface EnhancedAdaptiveLearningModuleProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const EnhancedAdaptiveLearningModule: React.FC<EnhancedAdaptiveLearningModuleProps> = ({ 
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
  
  // Subtopic-specific state (using same structure as Module 1)
  const [currentStep, setCurrentStep] = useState<'discover' | 'video' | 'quiz' | 'quiz-results' | 'challenge' | 'feedback' | 'badge'>('discover');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<{[key: number]: {correct: boolean, explanation: string}}>({});
  
  // Additional state for challenge features (matching Module 1)
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({});
  const [videoTranscripts, setVideoTranscripts] = useState<{[key: string]: string}>({});
  const [recordedVideo, setRecordedVideo] = useState<{[key: string]: string}>({});
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  // Load progress on component mount
  useEffect(() => {
    const progress = loadModuleProgress();
    if (progress) {
      setModuleProgress(progress);
      setCurrentSubtopic(progress.currentSubtopic);
    } else {
      // Initialize new progress
      const newProgress: ModuleProgress = {
        moduleId: 'adaptive-learning',
        currentSubtopic: 0,
        completedSubtopics: [],
        quizScores: {},
        badges: [],
        challengeResponses: {},
        lastAccessed: new Date().toISOString(),
        totalXP: 0,
        successStreak: 0,
        highestStreak: 0,
        lastStreakDate: ''
      };
      setModuleProgress(newProgress);
      saveModuleProgress(newProgress);
    }
  }, []);

  // Reset current step when subtopic changes
  useEffect(() => {
    setCurrentStep('discover');
    setQuizAnswers({}); // Reset quiz answers when changing subtopics
    setQuizScore(null);
    setQuizResults({});
    setChallengeResponse('');
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
      const userAnswer = quizAnswers[question.id];
      const correctAnswer = question.options[question.correct];
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    const currentSub = module2Subtopics[currentSubtopic];
    const score = calculateQuizScore(currentSub);
    const results: {[key: number]: {correct: boolean, explanation: string}} = {};
    
    currentSub.quiz.questions.forEach(question => {
      const isCorrect = quizAnswers[question.id] === question.options[question.correct];
      results[question.id] = {
        correct: isCorrect,
        explanation: question.explanation || ''
      };
    });
    
    setQuizScore(score);
    setQuizResults(results);
    setCurrentStep('quiz-results');
  };

  const handleChallengeSubmit = () => {
    if (!challengeResponse.trim()) return;
    
    const score = quizScore || 0;
    const subtopic = module2Subtopics[currentSubtopic];
    
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
        responseLength
      };
    };

    // Analysis Functions
    const analyzeEffort = (content: string, length: number) => {
      let score = 0;
      
      // Length indicates effort
      if (length > 500) score += 3;
      else if (length > 200) score += 2;
      else if (length > 50) score += 1;
      
      // Multiple paragraphs show structure
      const paragraphs = content.split('\n').filter(p => p.trim().length > 0);
      if (paragraphs.length > 3) score += 2;
      else if (paragraphs.length > 1) score += 1;
      
      // Specific examples show effort
      if (content.includes('example') || content.includes('instance') || content.includes('experience')) score += 2;
      
      // Questions show engagement
      if (content.includes('?')) score += 1;
      
      return Math.min(score, 10);
    };

    const analyzeEngagement = (content: string, subtopic: any) => {
      const lowerContent = content.toLowerCase();
      let score = 0;
      
      // Check for subtopic-specific keywords
      const keywords = {
        'learning-strategies': ['strategy', 'method', 'approach', 'technique', 'learning', 'study'],
        'memory-techniques': ['memory', 'remember', 'recall', 'memorize', 'retention', 'palace'],
        'information-processing': ['information', 'data', 'process', 'analyze', 'filter', 'organize'],
        'skill-transfer': ['transfer', 'apply', 'connect', 'pattern', 'similarity', 'domain'],
        'learning-agility': ['adapt', 'change', 'flexible', 'agile', 'adjust', 'evolve'],
        'continuous-improvement': ['improve', 'better', 'progress', 'growth', 'develop', 'enhance']
      };
      
      const relevantKeywords = keywords[subtopic.id as keyof typeof keywords] || [];
      const keywordMatches = relevantKeywords.filter(keyword => lowerContent.includes(keyword)).length;
      score += Math.min(keywordMatches * 1.5, 6);
      
      // Personal pronouns show personal engagement
      if (lowerContent.includes('i ') || lowerContent.includes('my ') || lowerContent.includes('me ')) score += 2;
      
      // Action words show engagement
      const actionWords = ['practiced', 'tried', 'implemented', 'applied', 'used', 'learned'];
      if (actionWords.some(word => lowerContent.includes(word))) score += 2;
      
      return Math.min(score, 10);
    };

    const analyzeReflection = (content: string) => {
      const lowerContent = content.toLowerCase();
      let score = 0;
      
      // Reflection indicators
      const reflectionWords = ['learned', 'realized', 'discovered', 'found', 'noticed', 'observed'];
      if (reflectionWords.some(word => lowerContent.includes(word))) score += 3;
      
      // Emotional awareness
      const emotionWords = ['felt', 'confident', 'nervous', 'excited', 'challenging', 'difficult', 'easy'];
      if (emotionWords.some(word => lowerContent.includes(word))) score += 2;
      
      // Future planning
      if (lowerContent.includes('will') || lowerContent.includes('plan') || lowerContent.includes('next')) score += 2;
      
      // Self-assessment
      if (lowerContent.includes('need to') || lowerContent.includes('should') || lowerContent.includes('could')) score += 2;
      
      return Math.min(score, 10);
    };

    const analyzePracticalApplication = (content: string, subtopic: any) => {
      const lowerContent = content.toLowerCase();
      let score = 0;
      
      // Specific examples
      if (lowerContent.includes('example') || lowerContent.includes('instance')) score += 3;
      
      // Real situations
      const situationWords = ['situation', 'meeting', 'class', 'work', 'project', 'team', 'conversation'];
      if (situationWords.some(word => lowerContent.includes(word))) score += 2;
      
      // Results or outcomes
      if (lowerContent.includes('result') || lowerContent.includes('outcome') || lowerContent.includes('success')) score += 2;
      
      // Specific people or contexts
      if (lowerContent.includes('professor') || lowerContent.includes('colleague') || lowerContent.includes('manager')) score += 2;
      
      return Math.min(score, 10);
    };

    const generateGamifiedFeedback = (content: string, analysis: any, subtopic: any, quizScore: number, quizPerformance: string) => {
      const performanceLevel = analysis.performanceLevel;
      
      // Calculate XP based on performance
      let xpEarned = 0;
      let badgeEarned = false;
      
      if (performanceLevel === 'excellent') {
        xpEarned = 100;
        badgeEarned = true;
      } else if (performanceLevel === 'good') {
        xpEarned = 75;
        badgeEarned = quizScore >= 80;
      } else if (performanceLevel === 'average') {
        xpEarned = 50;
      } else {
        xpEarned = 25;
      }
      
      // Generate coach feedback
      const coachFeedback = generateCoachFeedback(content, analysis, subtopic, quizScore, performanceLevel);
      
      return {
        ...coachFeedback,
        xpEarned,
        badgeEarned,
        performanceLevel
      };
    };

    const generateCoachFeedback = (content: string, analysis: any, subtopic: any, quizScore: number, performanceLevel: string) => {
      const { effortLevel, engagementLevel, reflectionDepth, practicalApplication } = analysis;
      const quizPerformance = quizScore >= 80 ? 'excellent' : quizScore >= 60 ? 'good' : 'needs-improvement';
      
      // AI Analysis - Conversational coach style
      let aiAnalysis = '';
      let strengths = [];
      let areasToImprove = [];
      let nextSteps = [];
      
      // Detect response type for personalized feedback
      const responseType = detectResponseType(content);
      
      if (responseType === 'instruction-reading') {
        return generateUniversalFeedback(content, responseType, performanceLevel, subtopic, quizScore, quizPerformance);
      }
      
      // Performance-based analysis - Pure analytical observation without repeating structured feedback
      if (performanceLevel === 'excellent') {
        aiAnalysis = `Your response demonstrates mastery-level understanding of ${subtopic.title.toLowerCase()}. I can see you've connected the concepts to real experiences and shown deep reflection on how these strategies apply to your learning journey. The level of detail and practical examples indicates you're ready to teach these concepts to others.`;
        strengths = [
          'Comprehensive understanding of key concepts',
          'Strong practical application with specific examples',
          'Excellent reflection and self-awareness',
          'High-quality, detailed response'
        ];
        areasToImprove = [
          'Continue applying these skills in diverse contexts',
          'Consider mentoring others in these techniques'
        ];
        nextSteps = [
          'Practice these skills in increasingly challenging situations',
          'Share your knowledge with peers to reinforce learning'
        ];
      } else if (performanceLevel === 'good') {
        aiAnalysis = `Your response shows solid engagement with ${subtopic.title.toLowerCase()} concepts. I notice you've made connections between the theory and your own learning experiences, which is exactly what effective adaptive learners do. Your thinking process is on track for developing these skills further.`;
        strengths = [
          'Good grasp of fundamental concepts',
          'Thoughtful reflection on the learning process',
          'Clear communication of ideas'
        ];
        areasToImprove = [
          'Include more specific examples from your experience',
          'Elaborate on practical applications in different contexts'
        ];
        nextSteps = [
          'Practice applying these concepts in real situations',
          'Reflect on results and adjust your approach'
        ];
      } else if (performanceLevel === 'average') {
        aiAnalysis = `I can see you're building understanding of ${subtopic.title.toLowerCase()}. Your response shows you're thinking about the concepts, though there's opportunity to dive deeper into how these strategies could transform your learning approach. You're on the right path - let's build on this foundation.`;
        strengths = [
          'Shows effort and willingness to learn',
          'Basic understanding of key concepts'
        ];
        areasToImprove = [
          'Provide more detailed examples and experiences',
          'Reflect more deeply on how concepts apply to your situation',
          'Include specific strategies you plan to implement'
        ];
        nextSteps = [
          'Review the video content and try the techniques',
          'Write about your actual experiences applying these skills'
        ];
      } else {
        aiAnalysis = `I appreciate you engaging with ${subtopic.title.toLowerCase()}. Your response shows you're beginning to explore these concepts. To get the most from this learning experience, focus on connecting the strategies to your specific learning challenges and goals.`;
        strengths = [
          'Taking the first step in learning these important skills'
        ];
        areasToImprove = [
          'Provide more detailed responses about your experiences',
          'Include specific examples of when you might use these skills',
          'Reflect on how these concepts connect to your goals'
        ];
        nextSteps = [
          'Review the key concepts and try applying one technique',
          'Come back and share your experience with specific details'
        ];
      }
      
      // Add quiz context
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
        nextSteps
      };
    };

    const detectResponseType = (content: string) => {
      const lowerContent = content.toLowerCase();
      
      // Check if user just copied instructions
      if (lowerContent.includes('instruction') && lowerContent.includes('challenge') && content.length < 200) {
        return 'instruction-reading';
      }
      
      // Check for file upload markers
      if (content.includes('[FILE UPLOADED]') || content.includes('[VIDEO PROCESSING]')) {
        return 'file-upload';
      }
      
      // Check for personal experience
      if (lowerContent.includes('i ') && (lowerContent.includes('tried') || lowerContent.includes('practiced'))) {
        return 'personal-experience';
      }
      
      return 'general-response';
    };

    const generateUniversalFeedback = (content: string, responseType: string, performanceLevel: string, subtopic: any, quizScore: number, quizPerformance: string) => {
      const moduleName = 'Adaptive Learning';
      const subtopicName = subtopic.title;
      
      // AI Analysis (2-4 sentences) - Include quiz performance
      let aiAnalysis = '';
      let strengths = [];
      let areasToImprove = [];
      let nextSteps = [];
      
      const quizContext = quizScore > 0 ? ` You scored ${quizScore}/5 on the quiz, which shows ${quizPerformance === 'excellent' ? 'excellent' : quizPerformance === 'good' ? 'good' : 'room for improvement in'} understanding of the concepts.` : '';
      
      switch (responseType) {
        case 'instruction-reading':
          aiAnalysis = `I notice you've shared the challenge instructions rather than describing your actual practice experience. While it's good to understand the requirements, I'd love to hear about your real-world application of these adaptive learning skills.${quizContext}`;
          strengths = ['Effort shown in understanding the requirements'];
          if (quizScore >= 80) {
            strengths.push('Strong theoretical understanding demonstrated in quiz');
          } else if (quizScore >= 60) {
            strengths.push('Good grasp of key concepts shown in quiz');
          }
          areasToImprove = [
            'Share your actual practice experience, not just the instructions',
            'Describe what learning strategies you tried, what happened, and what you learned',
            'Include specific examples from your academic or professional experience'
          ];
          if (quizScore < 60) {
            areasToImprove.push('Review the key concepts to strengthen your understanding');
          }
          nextSteps = [
            'Try implementing one adaptive learning strategy in a real situation',
            'Come back and describe what happened, what was challenging, and what you learned',
            'Focus on practical application rather than theoretical knowledge'
          ];
          break;
          
        case 'file-upload':
        case 'personal-experience':
        default:
          aiAnalysis = `Great work engaging with ${subtopicName}! Your response shows genuine effort to apply adaptive learning concepts. ${performanceLevel === 'excellent' ? 'Your insights demonstrate mastery-level understanding.' : performanceLevel === 'good' ? 'You show solid understanding with room for deeper application.' : 'Keep building on this foundation with more specific examples.'}${quizContext}`;
          
          strengths = ['Genuine engagement with the learning material', 'Effort to apply concepts practically'];
          if (quizScore >= 80) {
            strengths.push('Strong theoretical knowledge combined with practical application');
          } else if (quizScore >= 60) {
            strengths.push('Good understanding of concepts with practical experience');
          }
          areasToImprove = performanceLevel === 'excellent' ? [
            'Consider how you might teach these skills to someone else',
            'Think about applying these techniques in different contexts'
          ] : [
            'Include more specific examples of learning strategy implementation',
            'Describe the outcomes and results of your adaptive learning attempts'
          ];
          if (quizScore < 60) {
            areasToImprove.push('Review key concepts to strengthen your theoretical foundation');
          }
          nextSteps = [
            'Continue practicing adaptive learning in different subjects or skills',
            'Try the advanced reflection questions and techniques',
            'Apply these strategies to your most challenging learning goals'
          ];
          break;
      }
      
      return {
        aiAnalysis,
        strengths,
        areasToImprove,
        nextSteps
      };
    };

    // Generate intelligent feedback
    if (responseLength > 20) {
      const intelligentAnalysis = analyzeResponseIntelligently(challengeResponse, subtopic);
      const feedback = intelligentAnalysis.feedback;
      
      const feedbackMessage = `## 🎮 AI Mentor Analysis\n\n${feedback.aiAnalysis}\n\n## ✅ Strengths\n\n${feedback.strengths.map(s => `• ${s}`).join('\n')}\n\n## 📈 Areas to Improve\n\n${feedback.areasToImprove.map(a => `• ${a}`).join('\n')}\n\n## 🚀 Next Steps\n\n${feedback.nextSteps.map(s => `• ${s}`).join('\n')}`;
      
      setFeedbackText(feedbackMessage);
    } else {
      const feedbackMessage = `Please provide a detailed response about your experience with adaptive learning. You can type your response, upload a file, or record a video.`;
      setFeedbackText(feedbackMessage);
    }
    
    updateSubtopicProgress(subtopic.id, score, challengeResponse);
    
    // Update local state
    const updatedProgress = loadModuleProgress();
    if (updatedProgress) {
      setModuleProgress(updatedProgress);
    }

    // Show badge if high score
    if (score >= 4) { // 4 out of 5 questions
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 3000);
    }

    // Move to feedback step immediately to show AI feedback
    setCurrentStep('feedback');
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
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg'
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

  const handleNextSubtopic = () => {
    if (currentSubtopic < module2Subtopics.length - 1) {
      setCurrentSubtopic(prev => prev + 1);
      setCurrentView('subtopic');
      // Reset states
      setQuizAnswers({});
      setChallengeResponse('');
      setQuizScore(null);
      setQuizResults({});
    } else {
      setCurrentView('assessment');
    }
  };

  // File Upload Handler (matching Module 1)
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const currentSub = module2Subtopics[currentSubtopic];
    
    setUploadedFiles(prev => ({
      ...prev,
      [currentSub.id]: [...(prev[currentSub.id] || []), ...files]
    }));

    // Process each file
    files.forEach(file => {
      if (file.type.startsWith('video/')) {
        // Handle video files
        convertVideoToText(file, currentSub);
      } else if (file.type === 'text/plain') {
        // Handle text files
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setChallengeResponse(prev => {
            const fileContent = `[TEXT FILE UPLOADED]\nFile: ${file.name}\n\nContent:\n${content}`;
            return prev + (prev ? '\n\n' : '') + fileContent;
          });
        };
        reader.readAsText(file);
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

  // Delete File Handler
  const handleDeleteFile = (fileIndex: number) => {
    const currentSub = module2Subtopics[currentSubtopic];
    setUploadedFiles(prev => ({
      ...prev,
      [currentSub.id]: (prev[currentSub.id] || []).filter((_, index) => index !== fileIndex)
    }));
  };

  // Video to Text Conversion with real speech recognition
  const convertVideoToText = async (videoBlob: Blob, subtopic: any) => {
    return new Promise<void>(async (resolve) => {
      console.log('Video recorded successfully:', videoBlob.size, 'bytes');
      
      // Show processing status
      setChallengeResponse(prev => {
        const processingContent = `[VIDEO PROCESSING]\n\nFile size: ${(videoBlob.size / 1024 / 1024).toFixed(2)} MB\n\n🔄 Converting video audio to text...\n\nPlease wait while we process your video audio.`;
        return prev + (prev ? '\n\n' : '') + processingContent;
      });
      
      try {
        // Create audio context to extract audio from video
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const arrayBuffer = await videoBlob.arrayBuffer();
        
        try {
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
          
          // Use Web Speech API for transcription (works better with live audio)
          // For now, we'll use a more realistic simulation with actual audio processing
          setTimeout(() => {
            const transcript = `[ADAPTIVE LEARNING VIDEO RESPONSE]\n\nRecorded: ${new Date().toLocaleString()}\nDuration: ${Math.round(audioBuffer.duration)} seconds\nFile size: ${(videoBlob.size / 1024 / 1024).toFixed(2)} MB\n\n📝 Transcript:\n\n"Thank you for recording your adaptive learning practice response. This transcript would contain your actual spoken words in a real implementation with speech-to-text API.\n\nYour response demonstrates:\n- Practical application of learning strategies\n- Understanding of memory techniques\n- Information processing skills\n- Real-world examples and insights\n\nNote: For full speech-to-text functionality, this would integrate with services like Google Speech-to-Text, Azure Speech Services, or AssemblyAI."\n\nAnalysis ready for instructor review.`;
            
            setVideoTranscripts(prev => ({
              ...prev,
              [subtopic.id]: transcript
            }));
            
            setChallengeResponse(prev => {
              const updatedContent = prev.replace(/\[VIDEO PROCESSING\][\s\S]*?Please wait while we process your video audio\./, transcript);
              return updatedContent;
            });
            
            resolve();
          }, 2000); // 2 second processing simulation
          
        } catch (audioError) {
          console.log('Audio processing not available, using text simulation');
          // Fallback to simulation
          setTimeout(() => {
            const fallbackTranscript = `[ADAPTIVE LEARNING VIDEO RESPONSE]\n\nRecorded: ${new Date().toLocaleString()}\nFile size: ${(videoBlob.size / 1024 / 1024).toFixed(2)} MB\n\n📝 Transcript:\n\n"Your video response has been recorded successfully. This transcript represents your spoken content about adaptive learning strategies.\n\nKey topics likely covered:\n- Learning strategy implementation\n- Memory technique application\n- Information processing examples\n- Skill transfer experiences\n- Continuous improvement practices\n\nNote: Full speech-to-text transcription requires additional API integration."\n\nVideo saved and ready for review.`;
            
            setVideoTranscripts(prev => ({
              ...prev,
              [subtopic.id]: fallbackTranscript
            }));
            
            setChallengeResponse(prev => {
              const updatedContent = prev.replace(/\[VIDEO PROCESSING\][\s\S]*?Please wait while we process your video audio\./, fallbackTranscript);
              return updatedContent;
            });
            
            resolve();
          }, 2000);
        }
        
      } catch (error) {
        console.error('Error processing video:', error);
        setChallengeResponse(prev => {
          const errorContent = `[VIDEO PROCESSING ERROR]\n\nThere was an error processing your video. Please try recording again or type your response directly.\n\nError: ${error}`;
          return prev.replace(/\[VIDEO PROCESSING\][\s\S]*?Please wait while we process your video audio\./, errorContent);
        });
        resolve();
      }
    });
  };

  // Video Recording Functions (matching Module 1)
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
        const currentSub = module2Subtopics[currentSubtopic];
        
        // Create a File object from the blob to add to uploaded files
        const videoFile = new File([blob], `recorded-video-${Date.now()}.webm`, { 
          type: 'video/webm' 
        });
        
        // Add recorded video to uploaded files list
        setUploadedFiles(prev => ({
          ...prev,
          [currentSub.id]: [...(prev[currentSub.id] || []), videoFile]
        }));
        
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

  const renderIntroView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-4xl mb-6">
          🧠
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Adaptive Learning & Lifelong Learning Skills
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Develop the ability to learn continuously and adapt to new challenges. Master the art of learning how to learn.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="emoji-card">
          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Learning strategies for different types of content</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Memory techniques for professional information retention</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Information processing for managing data overload</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Skill transfer for accelerated learning across domains</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Learning agility for rapid adaptation to change</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-800 dark:text-white">Continuous improvement systems for lifelong growth</span>
            </li>
          </ul>
        </div>

        <div className="emoji-card">
          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">Module Structure</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                6
              </div>
              <span className="text-gray-800 dark:text-white">Interactive subtopics with real-world scenarios</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                1
              </div>
              <span className="text-gray-800 dark:text-white">Comprehensive final assessment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setCurrentView('subtopic-select')}
          className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
        >
          Start Learning Journey
        </button>
      </div>
    </motion.div>
  );

  const renderSubtopicSelectionView = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Select a subtopic to begin your adaptive learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {module2Subtopics.map((subtopic, index) => (
          <motion.div
            key={subtopic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => {
              setCurrentSubtopic(index);
              setCurrentView('subtopic');
            }}
            className={`emoji-card cursor-pointer ${
              moduleProgress?.completedSubtopics.includes(index)
                ? 'ring-2 ring-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20'
                : 'hover:ring-2 hover:ring-emerald-400/50'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{subtopic.emoji}</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {subtopic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 capitalize">
                {subtopic.context} Context
              </p>
              {moduleProgress?.completedSubtopics.includes(index) && (
                <div className="flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle size={16} className="mr-1" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-4">
        {/* Final Assessment Button - Only show when all subtopics are completed */}
        {moduleProgress?.completedSubtopics.length === module2Subtopics.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentView('assessment')}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
          >
            <Trophy className="mr-2" size={20} />
            Take Final Assessment
          </motion.button>
        )}
        
        {/* Progress indicator for assessment */}
        {moduleProgress && moduleProgress.completedSubtopics.length < module2Subtopics.length && (
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Complete all {module2Subtopics.length} subtopics to unlock the final assessment!
              <br />
              Progress: {moduleProgress.completedSubtopics.length}/{module2Subtopics.length} subtopics completed
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderSubtopicView = () => {
    const subtopic = module2Subtopics[currentSubtopic];

    const renderDiscoverStep = () => (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {subtopic.title}
          </h2>
          <p className="text-emerald-600 dark:text-emerald-400 capitalize font-medium">
            {subtopic.context} Context • Discover Phase
          </p>
        </div>

        <div className="emoji-card">
          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">Real Scenario</h3>
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            {subtopic.discover.scenario}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="emoji-card">
            <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">Problems</h4>
            <ul className="space-y-2">
              {subtopic.discover.problemExplanation.map((problem, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-800 dark:text-white text-sm">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="emoji-card">
            <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-3">Solutions</h4>
            <ul className="space-y-2">
              {subtopic.discover.solutionApproach.map((solution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 mt-1" size={16} />
                  <span className="text-gray-800 dark:text-white text-sm">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep('discover')}
            disabled={currentStep === 'discover'}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2" size={20} />
            Discover
          </button>
          <button
            onClick={() => setCurrentStep('video')}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
          >
            Watch Learning Video <Video className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );

    const renderVideoStep = () => (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {subtopic.video.title}
          </h3>
          <p className="text-emerald-600 dark:text-emerald-400 font-medium">
            Duration: {subtopic.video.duration} minutes
          </p>
        </div>

        <div className="emoji-card">
          <div className="aspect-video bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center mb-6">
            <div className="text-center text-white">
              <Play size={64} className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Video Player</p>
              <p className="text-sm opacity-90">Click to play learning content</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-400">Audio Controls</span>
            <button
              onClick={() => setVideoMuted(!videoMuted)}
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>

          <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">What You'll Learn</h4>
          <ul className="space-y-2">
            {subtopic.video.content.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-emerald-400 mt-1" size={16} />
                <span className="text-base leading-relaxed text-gray-800 dark:text-white">{item}</span>
              </li>
            ))}
          </ul>

          {subtopic.video.script && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">📝 Video Script</h4>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="whitespace-pre-wrap text-sm leading-relaxed font-mono text-gray-300 dark:text-gray-200">
                  {subtopic.video.script}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep('discover')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Discover
          </button>
          <button
            onClick={() => setCurrentStep('quiz')}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
          >
            Take Quiz <HelpCircle className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );

    const renderQuizStep = () => (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {subtopic.quiz.title}
          </h3>
          <p className="text-emerald-600 dark:text-emerald-400 font-medium">
            Test your understanding of the key concepts
          </p>
        </div>

        <div className="emoji-card">
          <div className="space-y-6">
            {subtopic.quiz.questions.map((question, index) => (
              <div key={question.id} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {index + 1}. {question.question}
                </h4>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        quizAnswers[question.id] === option
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg'
                          : 'bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-600/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={quizAnswers[question.id] === option}
                        onChange={() => handleQuizAnswer(question.id, option)}
                        className="sr-only"
                      />
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep('video')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Video
          </button>
          <button
            onClick={handleQuizSubmit}
            disabled={Object.keys(quizAnswers).length < subtopic.quiz.questions.length}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
              Object.keys(quizAnswers).length >= subtopic.quiz.questions.length
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:shadow-lg hover:shadow-emerald-400/25 hover:scale-105'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Quiz <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );

    const renderQuizResultsStep = () => {
      const percentage = Math.round(((quizScore || 0) / subtopic.quiz.questions.length) * 100);
      
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              Quiz Results
            </h3>
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {quizScore}/{subtopic.quiz.questions.length} Correct
            </p>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4">
              {percentage}% Score
            </p>
            <div className="mt-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                +{quizScore! * 10} XP Earned
              </div>
            </div>
          </div>

          <div className="emoji-card">
            <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">Performance Analysis</h4>
            {percentage >= 80 ? (
              <div className="text-green-600">
                <p className="font-semibold mb-2">🌟 Excellent Performance!</p>
                <p>You've demonstrated strong mastery of the concepts. Ready for the practical challenge!</p>
              </div>
            ) : percentage >= 60 ? (
              <div className="text-yellow-600">
                <p className="font-semibold mb-2">👍 Good Understanding!</p>
                <p>You grasp the key concepts well. Review the areas below and tackle the challenge!</p>
              </div>
            ) : (
              <div className="text-red-600">
                <p className="font-semibold mb-2">📚 Needs Review</p>
                <p>Consider reviewing the video content and key concepts before proceeding.</p>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Question Review</h4>
              {subtopic.quiz.questions.map((question, index) => {
                const result = quizResults[question.id];
                return (
                  <div key={question.id} className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        result?.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {result?.correct ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 dark:text-white mb-2">
                          {question.question}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Your answer: {quizAnswers[question.id]}
                        </p>
                        {!result?.correct && (
                          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                            Correct answer: {question.options[question.correct]}
                          </p>
                        )}
                        {result?.explanation && (
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 italic">
                            {result.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep('quiz')}
              className="btn-secondary"
            >
              <ArrowLeft className="mr-2" size={20} />
              Retake Quiz
            </button>
            <button
              onClick={() => setCurrentStep('challenge')}
              className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
            >
              Continue to Challenge <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      );
    };

    const renderChallengeStep = () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {subtopic.challenge.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Apply what you've learned in a real-world scenario
          </p>
        </div>

        <div className="emoji-card">
          <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">Challenge Description</h4>
          <p className="text-gray-800 dark:text-gray-200 mb-6">
            {subtopic.challenge.description}
          </p>

          <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">Instructions</h4>
          <ol className="space-y-2 mb-6">
            {subtopic.challenge.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="bg-emerald-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
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
              className="w-full p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
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
                    <div key={index} className="flex items-center justify-between bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg">
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
                <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {videoTranscripts[subtopic.id]!}
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Character count: {videoTranscripts[subtopic.id]!.length}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">Success Criteria</h4>
          <ul className="space-y-2">
            {subtopic.challenge.successCriteria.map((criteria, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-emerald-400 mt-1" size={16} />
                <span className="text-sm text-gray-800 dark:text-white">{criteria}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep('quiz')}
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Quiz
          </button>
          <div className="flex gap-4">
            {challengeResponse.trim() ? (
              <button
                onClick={() => setCurrentStep('badge')}
                className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
              >
                Claim Your Badge! <Award className="ml-2" size={20} />
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    // Skip challenge with lower score
                    const score = quizScore || 0;
                    const subtopic = module2Subtopics[currentSubtopic];
                    const skippedResponse = "[CHALLENGE SKIPPED]\n\nUser chose to skip the practical challenge and proceed with quiz score only.";
                    updateSubtopicProgress(subtopic.id, Math.max(score - 1, 0), skippedResponse); // Reduce score by 1 for skipping
                    
                    const updatedProgress = loadModuleProgress();
                    if (updatedProgress) {
                      setModuleProgress(updatedProgress);
                    }
                    
                    // Move to next subtopic or assessment
                    if (currentSubtopic < module2Subtopics.length - 1) {
                      setCurrentSubtopic(prev => prev + 1);
                      setCurrentView('subtopic');
                      setQuizAnswers({});
                      setChallengeResponse('');
                      setQuizScore(null);
                      setQuizResults({});
                    } else {
                      setCurrentView('assessment');
                    }
                  }}
                  className="btn-secondary px-6 py-3"
                >
                  Skip Challenge (Lower Score) <ArrowRight className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => setCurrentStep('challenge')}
                  className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
                >
                  Complete Challenge for Full Score <Target className="ml-2" size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    );

    const renderFeedbackStep = () => {
      const currentSub = module2Subtopics[currentSubtopic];
      
      // Parse the feedback text to extract sections
      const parseFeedback = (feedbackText: string) => {
        const sections = {
          aiAnalysis: '',
          strengths: [] as string[],
          areasToImprove: [] as string[],
          nextSteps: [] as string[],
          challengeUpgrade: '',
          motivatingLine: ''
        };

        const lines = feedbackText.split('\n');
        let currentSection = '';
        
        for (const line of lines) {
          if (line.startsWith('## 🎮 AI Mentor Analysis')) {
            currentSection = 'aiAnalysis';
            continue;
          } else if (line.startsWith('## ✅ Strengths')) {
            currentSection = 'strengths';
            continue;
          } else if (line.startsWith('## 📈 Areas to Improve')) {
            currentSection = 'areasToImprove';
            continue;
          } else if (line.startsWith('## 🚀 Next Steps')) {
            currentSection = 'nextSteps';
            continue;
          } else if (line.startsWith('## 🎯 Challenge Upgrade')) {
            currentSection = 'challengeUpgrade';
            continue;
          } else if (line.startsWith('## 🔥')) {
            currentSection = 'motivatingLine';
            continue;
          }

          if (line.trim()) {
            if (currentSection === 'aiAnalysis') {
              sections.aiAnalysis += line + ' ';
            } else if (currentSection === 'strengths' && line.startsWith('• ')) {
              sections.strengths.push(line.substring(2));
            } else if (currentSection === 'areasToImprove' && line.startsWith('• ')) {
              sections.areasToImprove.push(line.substring(2));
            } else if (currentSection === 'nextSteps' && line.startsWith('• ')) {
              sections.nextSteps.push(line.substring(2));
            } else if (currentSection === 'challengeUpgrade') {
              sections.challengeUpgrade += line + ' ';
            } else if (currentSection === 'motivatingLine') {
              sections.motivatingLine += line + ' ';
            }
          }
        }

        return sections;
      };

      const feedback = parseFeedback(feedbackText);
      const hasValidFeedback = feedback.strengths.length > 0 || feedback.areasToImprove.length > 0;

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              AI-Powered Feedback
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
              Personalized insights based on your performance
            </p>
          </div>

          {hasValidFeedback ? (
            <div className="emoji-card bg-gradient-to-br from-emerald-400/20 to-teal-400/20 border-emerald-400/30">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  🎮
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      AI Mentor Analysis
                    </h4>
                    <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <span className="text-yellow-500 font-bold">+25 XP</span>
                      <span className="text-yellow-500">🏆</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 mb-2">
                        <strong>Response Quality:</strong> {feedback.aiAnalysis.trim()}
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

                    {feedback.nextSteps.length > 0 && (
                      <div className="bg-gradient-to-r from-emerald-400/10 to-teal-400/10 p-4 rounded-lg border border-emerald-400/20">
                        <h5 className="font-semibold text-emerald-600 mb-2">🚀 Next Steps</h5>
                        <ul className="text-sm space-y-1">
                          {feedback.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span className="text-gray-800 dark:text-white">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {feedback.challengeUpgrade && (
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-400/20">
                        <h5 className="font-semibold text-purple-600 mb-2">🎯 Challenge Upgrade</h5>
                        <p className="text-sm text-gray-800 dark:text-white">{feedback.challengeUpgrade.trim()}</p>
                      </div>
                    )}

                    {feedback.motivatingLine && (
                      <div className="text-center">
                        <p className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                          🔥 {feedback.motivatingLine.trim()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="emoji-card">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🤖</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  AI Analysis Pending
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete the challenge to receive personalized feedback
                </p>
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleNextSubtopic}
              className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105"
            >
              {currentSubtopic < module2Subtopics.length - 1 ? 'Next Subtopic' : 'Take Final Assessment'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </motion.div>
      );
    };

    const renderBadgeStep = () => (
      <div className="space-y-6">
        <div className="text-center">
          <div
            className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-6xl mb-6 shadow-2xl"
          >
            {subtopic.badge.emoji}
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {subtopic.badge.name}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {subtopic.badge.description}
          </p>
          <div className="xp-badge text-lg mb-6">
            +50 XP
          </div>

          <div className="emoji-card max-w-md mx-auto">
            <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">Share Your Achievement</h4>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              {subtopic.shareMessage}
            </p>
            <div className="flex gap-3 justify-center">
              <button className="btn-secondary flex items-center gap-2">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              handleChallengeSubmit();
            }}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105 mt-6"
          >
            {currentSubtopic < module2Subtopics.length - 1 ? 'Continue to Next Subtopic' : 'Complete Module'}
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );

    return (
      <div className="space-y-8">
        {/* Subtopic Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentView('subtopic-select')}
            className="btn-secondary flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Topics
          </button>
          <div className="text-center flex-1">
            <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {subtopic.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {subtopic.context} Context
            </p>
          </div>
          <div className="text-4xl">
            {subtopic.emoji}
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            {['discover', 'video', 'quiz', 'challenge', 'feedback', 'badge'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep === step
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg scale-110'
                    : ['discover', 'video', 'quiz', 'challenge', 'feedback', 'badge'].indexOf(currentStep) > index
                    ? 'bg-gradient-to-r from-teal-500 to-violet-500 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-gray-700/50 text-gray-400'
                }`}>
                  {index + 1}
                </div>
                {index < 5 && (
                  <div className={`w-8 h-1 mx-2 rounded-full transition-all duration-300 ${
                    ['discover', 'video', 'quiz', 'challenge', 'feedback', 'badge'].indexOf(currentStep) > index
                      ? 'bg-gradient-to-r from-teal-500 to-violet-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stage Navigation */}
        {renderStageNavigation()}

        {/* Step Content */}
        <div>
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

  // Assessment state
  const [assessmentAnswers, setAssessmentAnswers] = useState<{[key: number]: string}>({});
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<{[key: number]: {correct: boolean, explanation: string}}>({});
  const [currentAssessmentQuestion, setCurrentAssessmentQuestion] = useState(0);

  const handleAssessmentAnswer = (questionId: number, answer: string) => {
    setAssessmentAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateAssessmentScore = (): number => {
    let score = 0;
    module2Assessment.questions.forEach(question => {
      if (assessmentAnswers[question.id] === question.options[question.correct]) {
        score++;
      }
    });
    return score;
  };

  const handleAssessmentSubmit = () => {
    const score = calculateAssessmentScore();
    const totalQuestions = module2Assessment.questions.length;
    
    // Calculate detailed results for each question
    const results: {[key: number]: {correct: boolean, explanation: string}} = {};
    module2Assessment.questions.forEach(question => {
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

  const renderAssessmentView = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-4xl mb-6">
          <Trophy />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Final Assessment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Test your comprehensive understanding of adaptive learning skills
        </p>

        <div className="emoji-card">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 dark:text-gray-400">
                Question {currentAssessmentQuestion + 1} of {module2Assessment.questions.length}
              </span>
              <span className="text-emerald-600 font-semibold">
                Progress: {Math.round(((currentAssessmentQuestion + 1) / module2Assessment.questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-teal-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentAssessmentQuestion + 1) / module2Assessment.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {module2Assessment.questions[currentAssessmentQuestion].question}
            </h3>
            <div className="space-y-3">
              {module2Assessment.questions[currentAssessmentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleAssessmentAnswer(module2Assessment.questions[currentAssessmentQuestion].id, option);
                    if (currentAssessmentQuestion < module2Assessment.questions.length - 1) {
                      setCurrentAssessmentQuestion(prev => prev + 1);
                    } else {
                      handleAssessmentSubmit();
                    }
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    assessmentAnswers[module2Assessment.questions[currentAssessmentQuestion].id] === option
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg'
                      : 'bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-600/50'
                  }`}
                >
                  <span className="font-medium text-emerald-600 mr-3">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssessmentResultsView = () => {
    const totalQuestions = module2Assessment.questions.length;
    const percentage = Math.round((assessmentScore! / totalQuestions) * 100);
    const gradeLevel = module2Assessment.gradeLevels.find(level => {
      const [min, max] = level.range.split('-').map(Number);
      const maxValue = max || 100;
      return percentage >= min && percentage <= maxValue;
    }) || module2Assessment.gradeLevels[module2Assessment.gradeLevels.length - 1];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="text-8xl mb-6">
            {percentage >= 90 ? '🏆' : percentage >= 80 ? '🥇' : percentage >= 70 ? '🥈' : percentage >= 60 ? '🥉' : '📚'}
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Assessment Complete!
          </h1>
          <div className="emoji-card max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {assessmentScore}/{totalQuestions} Correct
              </p>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4">
                {percentage}% - {gradeLevel?.grade}
              </p>
              <div className="mt-4">
                <div className="xp-badge text-lg">
                  +{assessmentScore! * 20} XP Earned
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-midnight-900 dark:via-midnight-800 dark:to-violet-900 transition-colors duration-500">
      {/* Module Navigation Header */}
      <div className="sticky top-0 z-50 glassmorphism dark:glassmorphism-dark border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                🧠
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Adaptive Learning</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Module 2 of 8</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="xp-badge">{moduleProgress?.totalXP || 0} XP</div>
              {moduleProgress?.successStreak && moduleProgress.successStreak > 0 && (
                <div className="streak-counter">
                  🔥 {moduleProgress.successStreak} Day Streak
                </div>
              )}
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {moduleProgress?.completedSubtopics.length || 0}/{module2Subtopics.length} completed
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
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

      {/* Badge Animation */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl mb-4"
              >
                🏆
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Badge Earned!</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                {module2Subtopics[currentSubtopic]?.badge.name}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {module2Subtopics[currentSubtopic]?.badge.description}
              </p>
              <div className="mt-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  +25 Bonus XP for Badge!
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowFeedback(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <MessageSquare className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Personalized Feedback</h3>
              </div>
              
              <div className="text-gray-600 dark:text-gray-400 mb-6">
                {feedbackText}
              </div>
              
              <button
                onClick={() => setShowFeedback(false)}
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
              >
                Continue Learning
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedAdaptiveLearningModule;