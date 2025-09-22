// Challenge Types for Video-Based Interactive Assessments

export interface VideoChallenge {
  title: string;
  description: string;
  type: 'video-interactive';
  video: {
    url: string;
    title: string;
    duration: number; // in seconds
    description: string;
    allowPause: boolean;
    showControls: boolean;
    transcript?: string;
  };
  comprehensionQuestions: ComprehensionQuestion[];
  listeningSkillsAssessment: ListeningAssessment;
  instructions: string[];
  successCriteria: string[];
  adaptiveFeatures: AdaptiveFeatures;
}

export interface ComprehensionQuestion {
  id: number;
  type: 'multiple-choice' | 'multiple-select' | 'short-answer' | 'comprehension';
  question: string;
  options?: string[];
  correct?: number | number[];
  correctAnswer?: string;
  expectedKeywords?: string[];
  forbiddenKeywords?: string[];
  points: number;
  explanation: string;
}

export interface ListeningAssessment {
  criteria: AssessmentCriteria[];
  scoringRubric: { [key: string]: ScoringLevel };
}

export interface AssessmentCriteria {
  skill: string;
  weight: number; // percentage
  measures: string[];
}

export interface ScoringLevel {
  level: string;
  description: string;
}

export interface AdaptiveFeatures {
  retakePolicy: string;
  personalizedFeedback: boolean;
  difficultyAdjustment: string;
  skillTracking: string;
}

export interface ChallengeResult {
  totalScore: number;
  skillBreakdown: { [skill: string]: number };
  level: string;
  feedback: string[];
  nextSteps: string[];
  canRetake: boolean;
  completedAt: string;
}



