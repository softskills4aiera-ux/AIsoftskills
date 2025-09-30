import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module3Subtopics, 
  module3Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module3Data';

interface Module3Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module3: React.FC<Module3Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'prompt-engineering',
    moduleTitle: 'Prompt Engineering',
    moduleDescription: 'Master the art of effective AI communication and prompt design for academic, professional, and personal productivity.',
    moduleColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
    moduleNumber: 3,
    
    // Intro content
    learningObjectives: [
      'Prompt design for effective AI interaction',
      'Context management for complex AI conversations',
      'AI communication strategies for different domains',
      'Prompt optimization for better results',
      'Bias recognition and ethical AI use',
      'Advanced prompt engineering techniques'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module3Subtopics,
    assessment: module3Assessment,
    
    // Progress management functions
    loadModuleProgress,
    saveModuleProgress,
    updateSubtopicProgress,
    
    // Navigation
    onNavigateHome,
    onNavigateCatalog,
  };

  return <ModuleTemplate {...moduleProps} />;
};

export default Module3;
