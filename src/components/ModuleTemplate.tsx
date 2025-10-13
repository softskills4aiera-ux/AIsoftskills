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
  Trophy,
  Upload,
  Camera,
  Mic,
  MicOff,
  Square,
  Trash2
} from 'lucide-react';
import VideoModal from './VideoModal';

// Generic interfaces that can be used by all modules
export interface ModuleProgress {
  moduleId: string;
  currentSubtopic: number;
  completedSubtopics: number[];
  quizScores: { [key: string]: number };
  badges: string[];
  challengeResponses: { [key: string]: string };
  lastAccessed: string;
  totalXP: number;
  successStreak: number;
  highestStreak: number;
  lastStreakDate: string;
}

export interface SubtopicData {
  id: string;
  title: string;
  emoji: string;
  context: 'academic' | 'professional' | 'personal';
  discover: {
    scenario: string;
    problemExplanation: string[];
    solutionApproach: string[];
  };
  video: {
    title: string;
    duration: number;
    content: string[];
    script?: string;
  };
  quiz: {
    title: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      correct: number;
      explanation?: string;
    }[];
  };
  challenge: {
    title: string;
    description: string;
    instructions?: string[];
    successCriteria?: string[];
    contexts?: {
      academic: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
      professional: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
      personal: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
    };
  };
  feedback: {
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
  badge: {
    name: string;
    emoji: string;
    description: string;
  };
  shareMessage: string;
}

export interface AssessmentData {
  title: string;
  description: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correct: number;
    explanation?: string;
  }[];
  gradingScale: {
    excellent: { min: number; max: number; message: string; xpReward: number };
    good: { min: number; max: number; message: string; xpReward: number };
    satisfactory: { min: number; max: number; message: string; xpReward: number };
    needsImprovement: { min: number; max: number; message: string; xpReward: number };
  };
}

// Props interface for the ModuleTemplate
export interface ModuleTemplateProps {
  // Module identification
  moduleId: string;
  moduleTitle: string;
  moduleDescription: string;
  moduleColor: string; // Tailwind color classes
  moduleNumber: number; // Module number (1-8)
  
  // Intro content
  learningObjectives: string[];
  moduleStructure: {
    introVideo: { duration: number };
    subtopics: { count: number; totalDuration: number };
    finalAssessment: { duration: number };
  };
  
  // Data
  subtopics: SubtopicData[];
  assessment: AssessmentData;
  
  // Progress management functions
  loadModuleProgress: () => ModuleProgress | null;
  saveModuleProgress: (progress: ModuleProgress) => void;
  updateSubtopicProgress: (subtopicId: string, score: number, response: string) => void;
  
  // Navigation
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
  
  // Optional customizations
  customIntroContent?: React.ReactNode;
  customAssessmentContent?: React.ReactNode;
  customStyling?: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
  };
}

const ModuleTemplate: React.FC<ModuleTemplateProps> = ({
  moduleId,
  moduleTitle,
  moduleDescription,
  moduleColor,
  moduleNumber,
  learningObjectives,
  moduleStructure,
  subtopics,
  assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress,
  onNavigateHome,
  onNavigateCatalog,
  customIntroContent,
  customAssessmentContent,
  customStyling
}) => {
  // State management
  const [currentView, setCurrentView] = useState<'intro' | 'subtopic-select' | 'subtopic' | 'assessment' | 'assessment-results'>('intro');
  const [currentSubtopic, setCurrentSubtopic] = useState(0);
  const [currentStep, setCurrentStep] = useState<'discover' | 'video' | 'quiz' | 'quiz-results' | 'challenge' | 'feedback' | 'badge'>('discover');
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<{[key: number]: boolean}>({});
  const [challengeResponse, setChallengeResponse] = useState('');
  const [selectedChallengeContext, setSelectedChallengeContext] = useState<'academic' | 'professional' | 'personal' | null>(null);
  
  // Reset context selection and file state when changing subtopics
  useEffect(() => {
    setSelectedChallengeContext(null);
    setChallengeTextInput('');
    setChallengeUploadedFiles([]);
    setFileContents({});
    setSelectedFileIndex(null);
  }, [currentSubtopic]);
  const [challengeTextInput, setChallengeTextInput] = useState('');
  const [challengeUploadedFiles, setChallengeUploadedFiles] = useState<File[]>([]);
  const [fileContents, setFileContents] = useState<{[key: string]: string}>({});
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(null);
  const [isRecordingVideo, setIsRecordingVideo] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState<Blob | null>(null);
  const [videoTranscript, setVideoTranscript] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [showBadge, setShowBadge] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState<{[key: number]: string}>({});
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<{[key: number]: boolean}>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [collapsibleSections, setCollapsibleSections] = useState<Record<string, boolean>>({});
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
        moduleId,
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
  }, [moduleId, loadModuleProgress, saveModuleProgress]);

  // Reset quiz state when subtopic changes
  useEffect(() => {
    setQuizAnswers({});
    setQuizScore(null);
    setQuizResults({});
    setChallengeResponse('');
    setCurrentStep('discover');
  }, [currentSubtopic]);

  // Cleanup camera when component unmounts
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        setCameraStream(null);
      }
    };
  }, [cameraStream]);

  // Quiz handling
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
    const currentSubtopicData = subtopics[currentSubtopic];
    const score = calculateQuizScore(currentSubtopicData);
    const results: {[key: number]: boolean} = {};
    
    currentSubtopicData.quiz.questions.forEach(question => {
      results[question.id] = quizAnswers[question.id] === question.options[question.correct];
    });
    
    setQuizScore(score);
    setQuizResults(results);
    setCurrentStep('quiz-results');
  };

  // Challenge handling
  const handleChallengeSubmit = () => {
    // Use the content from text area (user's selected content for analysis)
    let challengeContent = '';
    
    if (challengeTextInput.trim()) {
      // Determine content source for context
      let contentSource = '';
      if (selectedFileIndex === -1) {
        contentSource = 'Video Transcript';
      } else if (selectedFileIndex === -2) {
        contentSource = 'Combined Content (Files + Video)';
      } else if (selectedFileIndex !== null && selectedFileIndex >= 0) {
        const selectedFile = challengeUploadedFiles[selectedFileIndex];
        contentSource = `Uploaded File: ${selectedFile.name}`;
      } else {
        contentSource = 'Text Response';
      }
      
      challengeContent += `${contentSource}: ${challengeTextInput}\n\n`;
    }
    
    if (challengeContent.trim()) {
      const currentSubtopicData = subtopics[currentSubtopic];
      const score = calculateQuizScore(currentSubtopicData);
      
      if (moduleProgress) {
        updateSubtopicProgress(
          currentSubtopicData.id,
          score,
          challengeContent
        );
        // Reload progress after update
        const updatedProgress = loadModuleProgress();
        if (updatedProgress) {
          setModuleProgress(updatedProgress);
        }
      }
      
      setCurrentStep('feedback');
    }
  };

  // Video recording functionality
  const startVideoRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setCameraStream(stream);
      
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setRecordedVideoBlob(blob);
        // Simulate transcription (in real app, this would call a transcription service)
        setVideoTranscript("This is a simulated transcript of your video recording. In a real application, this would be generated using speech-to-text technology.");
      };
      
      mediaRecorder.start();
      setIsRecordingVideo(true);
      
      // Store mediaRecorder for stopping later
      (window as any).currentMediaRecorder = mediaRecorder;
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  const stopVideoRecording = () => {
    if ((window as any).currentMediaRecorder) {
      (window as any).currentMediaRecorder.stop();
      setIsRecordingVideo(false);
    }
    
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  // File upload handling
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = [...challengeUploadedFiles, ...files];
    setChallengeUploadedFiles(newFiles);
    
    // Read file content and store separately
    files.forEach((file, fileIndex) => {
      if (file.type.startsWith('text/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          const fileKey = `${file.name}-${Date.now()}`;
          setFileContents(prev => ({
            ...prev,
            [fileKey]: content
          }));
          
          // If this is the first file, show its content in text area
          if (selectedFileIndex === null) {
            setSelectedFileIndex(challengeUploadedFiles.length + fileIndex);
            setChallengeTextInput(content);
          }
        };
        reader.readAsText(file);
      }
    });
    
    // Clear the file input
    event.target.value = '';
  };

  const removeUploadedFile = (index: number) => {
    const fileToRemove = challengeUploadedFiles[index];
    const newFiles = challengeUploadedFiles.filter((_, i) => i !== index);
    setChallengeUploadedFiles(newFiles);
    
    // Remove file content from our tracking
    const fileKey = Object.keys(fileContents).find(key => key.startsWith(fileToRemove.name));
    if (fileKey) {
      setFileContents(prev => {
        const newContents = { ...prev };
        delete newContents[fileKey];
        return newContents;
      });
    }
    
    // Update selected file index and text area
    if (selectedFileIndex === index) {
      // If we're removing the currently selected file
      if (newFiles.length === 0) {
        setSelectedFileIndex(null);
        setChallengeTextInput('');
      } else {
        // Select the next available file
        const nextIndex = index < newFiles.length ? index : newFiles.length - 1;
        setSelectedFileIndex(nextIndex);
        const nextFile = newFiles[nextIndex];
        const nextFileKey = Object.keys(fileContents).find(key => key.startsWith(nextFile.name));
        if (nextFileKey) {
          setChallengeTextInput(fileContents[nextFileKey] || '');
        }
      }
    } else if (selectedFileIndex !== null && selectedFileIndex > index) {
      // Adjust selected index if we removed a file before the selected one
      setSelectedFileIndex(selectedFileIndex - 1);
    }
  };

  const deleteRecordedVideo = () => {
    setRecordedVideoBlob(null);
    setVideoTranscript('');
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const switchToFile = (index: number) => {
    setSelectedFileIndex(index);
    const file = challengeUploadedFiles[index];
    const fileKey = Object.keys(fileContents).find(key => key.startsWith(file.name));
    if (fileKey) {
      setChallengeTextInput(fileContents[fileKey] || '');
    }
  };

  const switchToVideoTranscript = () => {
    setSelectedFileIndex(-1); // Use -1 to indicate video transcript
    setChallengeTextInput(videoTranscript);
  };

  const switchToCombinedContent = () => {
    setSelectedFileIndex(-2); // Use -2 to indicate combined content
    let combinedContent = '';
    
    // Add all file contents
    Object.values(fileContents).forEach(content => {
      if (content.trim()) {
        combinedContent += content + '\n\n--- File Content ---\n\n';
      }
    });
    
    // Add video transcript
    if (videoTranscript.trim()) {
      combinedContent += `--- Video Transcript ---\n${videoTranscript}`;
    }
    
    setChallengeTextInput(combinedContent.trim());
  };

  const handleSkipChallenge = () => {
    const currentSubtopicData = subtopics[currentSubtopic];
    const score = Math.max(0, calculateQuizScore(currentSubtopicData) - 1); // Reduced score for skipping
    
    if (moduleProgress) {
      updateSubtopicProgress(
        currentSubtopicData.id,
        score,
        'Skipped challenge'
      );
      // Reload progress after update
      const updatedProgress = loadModuleProgress();
      if (updatedProgress) {
        setModuleProgress(updatedProgress);
      }
    }
    
    setCurrentStep('feedback');
  };

  // Assessment handling
  const handleAssessmentAnswer = (questionId: number, answer: string) => {
    setAssessmentAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateAssessmentScore = (): number => {
    let score = 0;
    assessment.questions.forEach(question => {
      if (assessmentAnswers[question.id] === question.options[question.correct]) {
        score++;
      }
    });
    return score;
  };

  const handleAssessmentSubmit = () => {
    const score = calculateAssessmentScore();
    const results: {[key: number]: boolean} = {};
    
    assessment.questions.forEach(question => {
      results[question.id] = assessmentAnswers[question.id] === question.options[question.correct];
    });
    
    setAssessmentScore(score);
    setAssessmentResults(results);
    setCurrentView('assessment-results');
  };

  // Navigation helpers
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

  const toggleCollapsible = (sectionId: string) => {
    setCollapsibleSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const CollapsibleSection = ({ 
    sectionId, 
    title, 
    children, 
    isOpen = false 
  }: { 
    sectionId: string; 
    title: string; 
    children: React.ReactNode; 
    isOpen?: boolean; 
  }) => {
    const isExpanded = collapsibleSections[sectionId] ?? isOpen;
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleCollapsible(sectionId)}
          className="flex items-center justify-between w-full text-left font-semibold text-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
        >
          <span>{title}</span>
          <span className="text-xl">{isExpanded ? '▼' : '▶'}</span>
        </button>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </div>
    );
  };


  const renderStageNavigation = () => {
    const stages = [
      { key: 'discover', label: 'Discover', icon: BookOpen },
      { key: 'video', label: 'Video', icon: Video },
      { key: 'quiz', label: 'Quiz', icon: HelpCircle },
      { key: 'challenge', label: 'Challenge', icon: Target },
      { key: 'feedback', label: 'Feedback', icon: MessageSquare },
      { key: 'badge', label: 'Badge', icon: Trophy }
    ];

    return (
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = currentStep === stage.key;
            const isCompleted = false; // You can implement completion logic here
            
            return (
              <button
                key={stage.key}
                onClick={() => setCurrentStep(stage.key as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-gray-900 shadow-lg' 
                    : isCompleted
                    ? 'bg-green-500/20 text-green-300'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{stage.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Render methods for different views
  const renderIntroView = () => {
    if (customIntroContent) {
      return customIntroContent;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700">
        {/* Header with Progress */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-8">
            {/* Top Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text-lime">
                    {moduleTitle}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Module {moduleNumber} of 8
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">
                    {moduleProgress?.totalXP || 0} XP
                  </span>
                </div>
                <div className="text-base text-gray-600 dark:text-gray-300">
                  {moduleProgress?.completedSubtopics.length || 0}/{subtopics.length} completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="text-center mb-12">
            {/* Module Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <MessageSquare size={48} className="text-white" />
            </motion.div>

            {/* Module Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold gradient-text-lime mb-6"
            >
              {moduleTitle} Mastery
            </motion.h1>

            {/* Module Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {moduleDescription}
            </motion.p>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* What You'll Learn Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                What You'll Learn
              </h3>
              <ul className="space-y-4">
                {learningObjectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Module Structure Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                Module Structure
              </h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Intro Video ({moduleStructure.introVideo.duration} mins)</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold flex-shrink-0">{moduleStructure.subtopics.count}</span>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Interactive Subtopics ({moduleStructure.subtopics.totalDuration} mins total)</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Final Assessment ({moduleStructure.finalAssessment.duration} mins)</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Choose Your Learning Path Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('subtopic-select')}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 shadow-lg"
            >
              Choose Your Learning Path
              <ArrowRight className="inline-block ml-2" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  };

  const renderSubtopicSelectView = () => {
    const completedCount = moduleProgress?.completedSubtopics.length || 0;
    const totalCount = subtopics.length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700">
        {/* Header with Progress */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-8">
            {/* Top Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text-lime">
                    {moduleTitle}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Module {moduleNumber} of 8
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">
                    {moduleProgress?.totalXP || 0} XP
                  </span>
                </div>
                <div className="text-base text-gray-600 dark:text-gray-300">
                  {completedCount}/{totalCount} completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Select any subtopic to start learning. You can jump between topics or follow them in order.
            </p>
          </motion.div>

          {/* Subtopic Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {subtopics.map((subtopic, index) => {
              const isCompleted = moduleProgress?.completedSubtopics.includes(index) || false;
              const isCurrent = moduleProgress?.currentSubtopic === index;
              
              return (
                <motion.div
                  key={subtopic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => {
                    setCurrentSubtopic(index);
                    setCurrentView('subtopic');
                  }}
                  className={`relative cursor-pointer group ${
                    isCompleted ? 'ring-2 ring-green-500' : isCurrent ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 ${
                    isCompleted ? 'border-2 border-green-200 dark:border-green-800' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{subtopic.emoji}</span>
                      {isCompleted && (
                        <CheckCircle className="text-green-500" size={24} />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {subtopic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 capitalize">
                      {subtopic.context} Context
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{subtopic.quiz.questions.length} questions</span>
                      <span>•</span>
                      <span>{subtopic.video.duration} min video</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Back to Overview Button */}
          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('intro')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Overview
            </motion.button>
          </div>

          {/* Progress Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={`rounded-xl p-4 text-center ${
              completedCount >= totalCount 
                ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                : 'bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800'
            }`}
          >
            {completedCount >= totalCount ? (
              <div className="space-y-4">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  🎉 Congratulations! You've completed all subtopics! You can now take the final assessment.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView('assessment')}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Take Final Assessment
                  <ArrowRight className="inline-block ml-2" size={20} />
                </motion.button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                  Complete all {totalCount} subtopics to unlock the final assessment! Progress: {completedCount}/{totalCount} subtopics completed.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView('assessment')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  Skip to Assessment (Testing)
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  };

  const renderSubtopicView = () => {
    const currentSubtopicData = subtopics[currentSubtopic];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentView('subtopic-select')}
                className="p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600"
                title="Back to Subtopic Selection"
              >
                <ArrowLeft size={22} />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {currentSubtopicData.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {currentSubtopicData.context} context
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base text-gray-500 dark:text-gray-400">
                Subtopic {currentSubtopic + 1} of {subtopics.length}
              </div>
            </div>
          </div>

          {/* Stage Navigation */}
          {renderStageNavigation()}

          {/* Current Step Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            {currentStep === 'discover' && (
              <div className="space-y-10">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">{currentSubtopicData.emoji}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentSubtopicData.title}
                  </h3>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-10">
                  <h4 className="text-3xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
                    Scenario
                  </h4>
                  <p className="text-xl leading-relaxed text-blue-800 dark:text-blue-200 mb-6">
                    {currentSubtopicData.discover.scenario}
                  </p>
                  
                  <CollapsibleSection sectionId="scenario-problems" title="▼ Key Issues" isOpen={true}>
                    <ul className="space-y-3 text-xl text-blue-800 dark:text-blue-200">
                      {currentSubtopicData.discover.problemExplanation.slice(0, 3).map((problem, index) => (
                        <li key={index}>• {problem}</li>
                      ))}
                    </ul>
                  </CollapsibleSection>

                  {currentSubtopicData.discover.problemExplanation.length > 3 && (
                    <CollapsibleSection sectionId="scenario-more" title="▼ Additional Context" isOpen={false}>
                      <ul className="space-y-3 text-xl text-blue-800 dark:text-blue-200">
                        {currentSubtopicData.discover.problemExplanation.slice(3).map((problem, index) => (
                          <li key={index}>• {problem}</li>
                        ))}
                      </ul>
                    </CollapsibleSection>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-10">
                    <h4 className="text-3xl font-semibold text-red-900 dark:text-red-100 mb-4">
                      Problems
                    </h4>
                    
                    <CollapsibleSection sectionId="problems-main" title="▼ Core Problems" isOpen={true}>
                      <ul className="space-y-3 text-xl text-red-800 dark:text-red-200">
                        {currentSubtopicData.discover.problemExplanation.slice(0, 4).map((problem, index) => (
                          <li key={index}>• {problem}</li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    {currentSubtopicData.discover.problemExplanation.length > 4 && (
                      <CollapsibleSection sectionId="problems-additional" title="▼ Additional Challenges" isOpen={false}>
                        <ul className="space-y-3 text-xl text-red-800 dark:text-red-200">
                          {currentSubtopicData.discover.problemExplanation.slice(4).map((problem, index) => (
                            <li key={index}>• {problem}</li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                    )}
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-10">
                    <h4 className="text-3xl font-semibold text-green-900 dark:text-green-100 mb-4">
                      Solutions
                    </h4>
                    
                    <CollapsibleSection sectionId="solutions-main" title="▼ Core Solutions" isOpen={true}>
                      <ul className="space-y-3 text-xl text-green-800 dark:text-green-200">
                        {currentSubtopicData.discover.solutionApproach.slice(0, 4).map((solution, index) => (
                          <li key={index}>• {solution}</li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    {currentSubtopicData.discover.solutionApproach.length > 4 && (
                      <CollapsibleSection sectionId="solutions-additional" title="▼ Additional Strategies" isOpen={false}>
                        <ul className="space-y-3 text-xl text-green-800 dark:text-green-200">
                          {currentSubtopicData.discover.solutionApproach.slice(4).map((solution, index) => (
                            <li key={index}>• {solution}</li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('video')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Watch Video
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Video Step */}
            {currentStep === 'video' && (
              <div className="space-y-6">
                {/* Video Title and Duration */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {currentSubtopicData.video.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Duration: {currentSubtopicData.video.duration} minutes
                  </p>
                </div>

                {/* Video Player */}
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.youtube.com/embed/okH2fggK69k"
                    title={currentSubtopicData.video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* What You'll Learn Section */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                    What You'll Learn
                  </h4>
                  <ul className="space-y-3">
                    {currentSubtopicData.video.content.map((item, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video Script Section */}
                {currentSubtopicData.video.script && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                      Video Script
                    </h4>
                    <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6">
                      <pre className="text-white text-base leading-relaxed whitespace-pre-wrap font-mono">
                        {currentSubtopicData.video.script}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('discover')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('quiz')}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    Take Quiz
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Quiz Step */}
            {currentStep === 'quiz' && (
              <div className="space-y-8">
                {/* Quiz Title and Description */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentSubtopicData.quiz.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Test your understanding with {currentSubtopicData.quiz.questions.length} questions.
                  </p>
                </div>

                {/* Quiz Questions */}
                <div className="space-y-8">
                  {currentSubtopicData.quiz.questions.map((question, questionIndex) => (
                    <div key={question.id} className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {questionIndex + 1}. {question.question}
                      </h4>
                      <div className="space-y-3">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            onClick={() => handleQuizAnswer(question.id, option)}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                              quizAnswers[question.id] === option
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <span className="text-lg">{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('video')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleQuizSubmit}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Confirm Quiz
                  </motion.button>
                </div>
              </div>
            )}

            {/* Quiz Results Step */}
            {currentStep === 'quiz-results' && (
              <div className="space-y-8">
                {/* Quiz Results Header */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
                    Quiz Results
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                    You scored {quizScore}/{currentSubtopicData.quiz.questions.length} questions correctly
                  </p>
                  
                  {/* XP Earned Banner */}
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 mb-8">
                    <p className="text-white text-2xl font-semibold">
                      +{quizScore !== null ? quizScore * 10 : 0} XP Earned
                    </p>
                  </div>
                </div>

                {/* Performance Analysis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Performance Analysis
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">✨</span>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                      {quizScore !== null && quizScore >= currentSubtopicData.quiz.questions.length * 0.8 ? 'Excellent Performance!' :
                       quizScore !== null && quizScore >= currentSubtopicData.quiz.questions.length * 0.6 ? 'Good Performance!' : 'Keep Learning!'}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {quizScore !== null && quizScore >= currentSubtopicData.quiz.questions.length * 0.8 ? 
                      "You have a strong understanding of this topic. You're ready to move on to the practical challenge!" :
                     quizScore !== null && quizScore >= currentSubtopicData.quiz.questions.length * 0.6 ? 
                      "You're doing well! Review the explanations below and continue to the challenge." :
                      "Take some time to review the explanations below. You can retake the quiz to improve your score."}
                  </p>
                </div>

                {/* Question Review */}
                <div>
                  <h4 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                    Question Review
                  </h4>
                  <div className="space-y-4">
                    {currentSubtopicData.quiz.questions.map((question, questionIndex) => {
                      const userAnswer = quizAnswers[question.id];
                      const correctAnswer = question.options[question.correct];
                      const isCorrect = userAnswer === correctAnswer;
                      
                      return (
                        <div key={question.id} className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800">
                          <div className="flex items-start gap-4">
                            {/* Green Checkmark */}
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            
                            <div className="flex-1">
                              {/* Question */}
                              <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {questionIndex + 1}. {question.question}
                              </h5>
                              
                              {/* Your Answer */}
                              <div className="mb-3">
                                <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Your Answer:
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                  {userAnswer || 'No answer selected'}
                                </p>
                              </div>
                              
                              {/* Explanation - Gen Z Friendly Format */}
                              {question.explanation && (
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500 mt-3">
                                  <p className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                                    <span>✅</span>
                                    <span>Why This Works:</span>
                                  </p>
                                  <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
                                    {question.explanation.split(/[.!?]+/).filter(s => s.trim().length > 20).slice(0, 3).map((point, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
                                        <span className="flex-1 leading-relaxed">{point.trim()}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('quiz')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Retake Quiz
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('challenge')}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    Continue to Challenge
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Challenge Step */}
            {currentStep === 'challenge' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentSubtopicData.challenge.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {currentSubtopicData.challenge.description}
                  </p>
                </div>

                {/* Challenge Context Selection - Only show if contexts exist */}
                {currentSubtopicData.challenge.contexts && !selectedChallengeContext && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                      Choose Your Learning Context
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {(['academic', 'professional', 'personal'] as const).map((context) => (
                        <motion.button
                          key={context}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedChallengeContext(context)}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-3">
                              {context === 'academic' ? '🎓' : context === 'professional' ? '💼' : '👥'}
                            </div>
                            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                              {context}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {context === 'academic' && 'Focus on academic scenarios and study situations'}
                              {context === 'professional' && 'Focus on workplace and career development'}
                              {context === 'personal' && 'Focus on personal relationships and social situations'}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenge Content - New format with contexts */}
                {selectedChallengeContext && currentSubtopicData.challenge.contexts && (
                  <div className="space-y-8">
                    {/* Context Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">
                          {selectedChallengeContext === 'academic' ? '🎓' : selectedChallengeContext === 'professional' ? '💼' : '👥'}
                        </span>
                        <h4 className="text-2xl font-bold capitalize">
                          {selectedChallengeContext} Challenge
                        </h4>
                      </div>
                      <p className="text-blue-100 text-lg">
                        {currentSubtopicData.challenge.contexts[selectedChallengeContext].description}
                      </p>
                    </div>

                    {/* Instructions */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                        Step-by-Step Instructions
                      </h4>
                      <ul className="space-y-3">
                        {currentSubtopicData.challenge.contexts[selectedChallengeContext].instructions.map((instruction, index) => (
                          <li key={index} className="text-blue-800 dark:text-blue-200 flex items-start gap-3">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-lg leading-relaxed">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Success Criteria */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                        Success Criteria
                      </h4>
                      <ul className="space-y-2">
                        {currentSubtopicData.challenge.contexts[selectedChallengeContext].successCriteria.map((criteria, index) => (
                          <li key={index} className="text-green-800 dark:text-green-200 flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                            <span className="text-lg">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Response Options */}
                    <div className="space-y-6">
                      <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Share Your Response
                      </h4>
                      
                      {/* Text Input */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📝 Write Your Response
                        </label>
                        <textarea
                          value={challengeTextInput}
                          onChange={(e) => setChallengeTextInput(e.target.value)}
                          placeholder={
                            selectedFileIndex === -1 ? "Video transcript content will appear here..." :
                            selectedFileIndex === -2 ? "Combined content from all sources will appear here..." :
                            selectedFileIndex !== null ? "Content from selected file will appear here..." : 
                            "Share your thoughts, upload files, or record video to see content here..."
                          }
                          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* File Upload */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📁 Upload Files
                        </label>
                        <div className="space-y-4">
                          <input
                            type="file"
                            multiple
                            accept=".txt,.doc,.docx,.pdf"
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/20 dark:file:text-blue-300"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Supported formats: .txt, .doc, .docx, .pdf. Upload files or record video - click content sources below to choose what to analyze.
                          </p>
                          {challengeUploadedFiles.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Content Sources:</p>
                              {challengeUploadedFiles.map((file, index) => (
                                <div key={index} className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === index 
                                    ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={() => switchToFile(index)}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === index
                                          ? 'text-blue-700 dark:text-blue-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                      }`}
                                    >
                                      {file.name}
                                    </button>
                                    {selectedFileIndex === index && (
                                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <button
                                    onClick={() => removeUploadedFile(index)}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                              
                              {/* Video Transcript Option */}
                              {videoTranscript.trim() && (
                                <div className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === -1 
                                    ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={switchToVideoTranscript}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === -1
                                          ? 'text-green-700 dark:text-green-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                                      }`}
                                    >
                                      🎥 Video Transcript
                                    </button>
                                    {selectedFileIndex === -1 && (
                                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {videoTranscript.length} characters
                                  </span>
                                </div>
                              )}
                              
                              {/* Combined Content Option */}
                              {(challengeUploadedFiles.length > 0 && videoTranscript.trim()) && (
                                <div className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === -2 
                                    ? 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={switchToCombinedContent}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === -2
                                          ? 'text-purple-700 dark:text-purple-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                      }`}
                                    >
                                      🔗 All Content Combined
                                    </button>
                                    {selectedFileIndex === -2 && (
                                      <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Files + Video
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Video Recording */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🎥 Record Video Response
                        </label>
                        <div className="space-y-4">
                          {!isRecordingVideo && !recordedVideoBlob && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={startVideoRecording}
                              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                            >
                              <Camera size={20} />
                              Start Recording
                            </motion.button>
                          )}
                          
                          {isRecordingVideo && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-red-500">
                                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                  <span className="font-semibold">Recording...</span>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={stopVideoRecording}
                                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                                >
                                  <Square size={16} />
                                  Stop Recording
                                </motion.button>
                              </div>
                              {cameraStream && (
                                <video
                                  ref={(video) => {
                                    if (video && cameraStream) {
                                      video.srcObject = cameraStream;
                                    }
                                  }}
                                  autoPlay
                                  muted
                                  className="w-full max-w-md rounded-lg border-2 border-red-500"
                                />
                              )}
                            </div>
                          )}
                          
                          {recordedVideoBlob && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-green-600">
                                  <CheckCircle size={20} />
                                  <span className="font-semibold">Video Recorded Successfully!</span>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={deleteRecordedVideo}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1"
                                >
                                  <Trash2 size={16} />
                                  Delete
                                </motion.button>
                              </div>
                              <video
                                src={URL.createObjectURL(recordedVideoBlob)}
                                controls
                                className="w-full max-w-md rounded-lg border-2 border-green-500"
                              />
                              {videoTranscript && (
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transcript:</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{videoTranscript}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center pt-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedChallengeContext(null)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                      >
                        <ArrowLeft size={20} />
                        Back to Context Selection
                      </motion.button>
                      
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSkipChallenge}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                          Skip Challenge
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleChallengeSubmit}
                          disabled={!challengeTextInput.trim() && challengeUploadedFiles.length === 0 && !videoTranscript.trim()}
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                        >
                          Submit Response
                          <ArrowRight size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Challenge Content - Old format without contexts */}
                {!currentSubtopicData.challenge.contexts && (
                  <div className="space-y-8">
                    {/* Instructions */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                        Instructions
                      </h4>
                      <ul className="space-y-2">
                        {currentSubtopicData.challenge.instructions?.map((instruction, index) => (
                          <li key={index} className="text-blue-800 dark:text-blue-200 flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span className="text-lg">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Success Criteria */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                        Success Criteria
                      </h4>
                      <ul className="space-y-2">
                        {currentSubtopicData.challenge.successCriteria?.map((criteria, index) => (
                          <li key={index} className="text-green-800 dark:text-green-200 flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                            <span className="text-lg">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Response Options */}
                    <div className="space-y-6">
                      <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Share Your Response
                      </h4>
                      
                      {/* Text Input */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📝 Write Your Response
                        </label>
                        <textarea
                          value={challengeTextInput}
                          onChange={(e) => setChallengeTextInput(e.target.value)}
                          placeholder={
                            selectedFileIndex === -1 ? "Video transcript content will appear here..." :
                            selectedFileIndex === -2 ? "Combined content from all sources will appear here..." :
                            selectedFileIndex !== null ? "Content from selected file will appear here..." : 
                            "Share your thoughts, upload files, or record video to see content here..."
                          }
                          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* File Upload */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📁 Upload Files
                        </label>
                        <div className="space-y-4">
                          <input
                            type="file"
                            multiple
                            accept=".txt,.doc,.docx,.pdf"
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/20 dark:file:text-blue-300"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Supported formats: .txt, .doc, .docx, .pdf. Upload files or record video - click content sources below to choose what to analyze.
                          </p>
                          {challengeUploadedFiles.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Content Sources:</p>
                              {challengeUploadedFiles.map((file, index) => (
                                <div key={index} className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === index 
                                    ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={() => switchToFile(index)}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === index
                                          ? 'text-blue-700 dark:text-blue-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                      }`}
                                    >
                                      {file.name}
                                    </button>
                                    {selectedFileIndex === index && (
                                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <button
                                    onClick={() => removeUploadedFile(index)}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                              
                              {/* Video Transcript Option */}
                              {videoTranscript.trim() && (
                                <div className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === -1 
                                    ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={switchToVideoTranscript}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === -1
                                          ? 'text-green-700 dark:text-green-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                                      }`}
                                    >
                                      🎥 Video Transcript
                                    </button>
                                    {selectedFileIndex === -1 && (
                                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {videoTranscript.length} characters
                                  </span>
                                </div>
                              )}
                              
                              {/* Combined Content Option */}
                              {(challengeUploadedFiles.length > 0 && videoTranscript.trim()) && (
                                <div className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 ${
                                  selectedFileIndex === -2 
                                    ? 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500' 
                                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}>
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={switchToCombinedContent}
                                      className={`text-sm font-medium transition-colors duration-200 ${
                                        selectedFileIndex === -2
                                          ? 'text-purple-700 dark:text-purple-300'
                                          : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                      }`}
                                    >
                                      🔗 All Content Combined
                                    </button>
                                    {selectedFileIndex === -2 && (
                                      <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Files + Video
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Video Recording */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600">
                        <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🎥 Record Video Response
                        </label>
                        <div className="space-y-4">
                          {!isRecordingVideo && !recordedVideoBlob && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={startVideoRecording}
                              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                            >
                              <Camera size={20} />
                              Start Recording
                            </motion.button>
                          )}
                          
                          {isRecordingVideo && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-red-500">
                                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                  <span className="font-semibold">Recording...</span>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={stopVideoRecording}
                                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                                >
                                  <Square size={16} />
                                  Stop Recording
                                </motion.button>
                              </div>
                              {cameraStream && (
                                <video
                                  ref={(video) => {
                                    if (video && cameraStream) {
                                      video.srcObject = cameraStream;
                                    }
                                  }}
                                  autoPlay
                                  muted
                                  className="w-full max-w-md rounded-lg border-2 border-red-500"
                                />
                              )}
                            </div>
                          )}
                          
                          {recordedVideoBlob && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-green-600">
                                  <CheckCircle size={20} />
                                  <span className="font-semibold">Video Recorded Successfully!</span>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={deleteRecordedVideo}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1"
                                >
                                  <Trash2 size={16} />
                                  Delete
                                </motion.button>
                              </div>
                              <video
                                src={URL.createObjectURL(recordedVideoBlob)}
                                controls
                                className="w-full max-w-md rounded-lg border-2 border-green-500"
                              />
                              {videoTranscript && (
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transcript:</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{videoTranscript}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center pt-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentStep('quiz-results')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                      >
                        <ArrowLeft size={20} />
                        Back
                      </motion.button>
                      
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSkipChallenge}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                          Skip Challenge
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleChallengeSubmit}
                          disabled={!challengeTextInput.trim() && challengeUploadedFiles.length === 0 && !videoTranscript.trim()}
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                        >
                          Submit Response
                          <ArrowRight size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Feedback Step */}
            {currentStep === 'feedback' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    AI Mentor Analysis
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Your personalized feedback and recommendations
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                      Your Strengths
                    </h4>
                    <ul className="space-y-2">
                      {currentSubtopicData.feedback.strengths.map((strength, index) => (
                        <li key={index} className="text-green-800 dark:text-green-200 flex items-start gap-2">
                          <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                          <span className="text-lg">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                      Areas for Improvement
                    </h4>
                    <ul className="space-y-2">
                      {currentSubtopicData.feedback.improvements.map((improvement, index) => (
                        <li key={index} className="text-blue-800 dark:text-blue-200 flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span className="text-lg">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                    Next Steps
                  </h4>
                  <ul className="space-y-2">
                    {currentSubtopicData.feedback.nextSteps.map((step, index) => (
                      <li key={index} className="text-purple-800 dark:text-purple-200 flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                        <span className="text-lg">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('challenge')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('badge')}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    Continue to Badge
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Badge Step */}
            {currentStep === 'badge' && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-8xl mb-6">{currentSubtopicData.badge.emoji}</div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Congratulations!
                  </h3>
                  <h4 className="text-3xl font-semibold text-green-600 dark:text-green-400 mb-2">
                    {currentSubtopicData.badge.name}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {currentSubtopicData.badge.description}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Share Your Achievement
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {currentSubtopicData.shareMessage}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'AIera Soft Skills Academy',
                          text: currentSubtopicData.shareMessage,
                        });
                      } else {
                        navigator.clipboard.writeText(currentSubtopicData.shareMessage);
                        alert('Message copied to clipboard!');
                      }
                    }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Share Achievement
                  </motion.button>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep('feedback')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Move to next subtopic or back to subtopic selection
                      if (currentSubtopic < subtopics.length - 1) {
                        setCurrentSubtopic(currentSubtopic + 1);
                        setCurrentStep('discover');
                      } else {
                        setCurrentView('subtopic-select');
                      }
                    }}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    {currentSubtopic < subtopics.length - 1 ? 'Next Subtopic' : 'Back to Overview'}
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAssessmentView = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {assessment.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {assessment.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Total Questions: {assessment.questions.length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                📊 Assessment Progress: {assessment.questions.length} questions total
              </p>
            </div>
            <div className="space-y-6">
              {assessment.questions.map((question, index) => (
                <div key={question.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {index + 1}. {question.question}
                  </h4>
                  <div className="space-y-4">
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-start space-x-4 cursor-pointer p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600">
                        <input
                          type="radio"
                          name={`assessment-${question.id}`}
                          value={option}
                          checked={assessmentAnswers[question.id] === option}
                          onChange={() => handleAssessmentAnswer(question.id, option)}
                          className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0"
                        />
                        <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  {/* Show explanation if question has one and user has selected an answer */}
                  {question.explanation && assessmentAnswers[question.id] && (
                    <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg">
                      <p className="text-base font-bold text-blue-800 dark:text-blue-300 mb-3">
                        💡 Explanation:
                      </p>
                      <p className="text-lg text-blue-700 dark:text-blue-200 leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {/* Back to Subtopics Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentView('subtopic-select')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Subtopics
              </motion.button>
              
              {/* Submit Assessment Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAssessmentSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Submit Assessment
                <ArrowRight size={20} />
              </motion.button>
              
              {/* Back to Module Overview Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentView('intro')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Module Overview
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAssessmentResultsView = () => {
    const score = assessmentScore || 0;
    const totalQuestions = assessment.questions.length;
    const percentage = (score / totalQuestions) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Assessment Complete!
            </h2>
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {percentage.toFixed(1)}%
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('intro')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Back to Module Overview
              <ArrowRight className="inline-block ml-2" size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-midnight-800 dark:to-midnight-700">
      {/* Main Content */}
      {currentView === 'intro' && renderIntroView()}
      {currentView === 'subtopic-select' && renderSubtopicSelectView()}
      {currentView === 'subtopic' && renderSubtopicView()}
      {currentView === 'assessment' && renderAssessmentView()}
      {currentView === 'assessment-results' && renderAssessmentResultsView()}
    </div>
  );
};

export default ModuleTemplate;
