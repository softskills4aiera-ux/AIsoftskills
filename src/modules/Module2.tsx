import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module2Subtopics, 
  module2Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module2Data';

interface Module2Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module2: React.FC<Module2Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'adaptive-learning',
    moduleTitle: 'Adaptive Learning',
    moduleDescription: 'Develop the ability to learn continuously and adapt to new challenges in academic, professional, and personal settings.',
    moduleColor: 'bg-gradient-to-r from-green-500 to-blue-500',
    moduleNumber: 2,
    
    // Intro content
    learningObjectives: [
      'Learning strategies for academic and professional success',
      'Memory techniques for better retention and recall',
      'Information processing for complex topics and subjects',
      'Skill transfer across different domains and contexts',
      'Learning agility for rapid adaptation to new challenges',
      'Continuous improvement mindset for lifelong growth'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module2Subtopics,
    assessment: module2Assessment,
    
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

export default Module2;
