import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module5Subtopics, 
  module5Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module5Data';

interface Module5Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module5: React.FC<Module5Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'design-thinking',
    moduleTitle: 'Design Thinking',
    moduleDescription: 'Master creative problem-solving and user-centered design for innovative solutions in academic, professional, and personal contexts.',
    moduleColor: 'bg-gradient-to-r from-pink-500 to-red-500',
    moduleNumber: 5,
    
    // Intro content
    learningObjectives: [
      'Empathy for understanding user needs and perspectives',
      'Ideation techniques for creative problem solving',
      'Prototyping for rapid solution testing',
      'Testing and iteration for continuous improvement',
      'User-centered design principles',
      'Innovation and creative thinking strategies'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module5Subtopics,
    assessment: module5Assessment,
    
    // Progress management functions
    loadModuleProgress,
    saveModuleProgress,
    updateSubtopicProgress,
    
    // Navigation
    onNavigateHome,
    onNavigateCatalog
  };

  return <ModuleTemplate {...moduleProps} />;
};

export default Module5;