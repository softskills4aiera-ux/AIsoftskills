import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module7Subtopics, 
  module7Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module7Data';

interface Module7Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module7: React.FC<Module7Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'data-driven',
    moduleTitle: 'Data-Driven Decisions',
    moduleDescription: 'Master evidence-based decision making and data analysis for success in academic, professional, and personal contexts.',
    moduleColor: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    moduleNumber: 7,
    
    // Intro content
    learningObjectives: [
      'Data collection and analysis techniques',
      'Statistical thinking and interpretation',
      'Evidence-based decision making frameworks',
      'Data visualization and presentation',
      'Predictive analytics and forecasting',
      'Data ethics and responsible use'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module7Subtopics,
    assessment: module7Assessment,
    
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

export default Module7;