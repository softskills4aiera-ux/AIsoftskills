import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module6Subtopics, 
  module6Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module6Data';

interface Module6Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module6: React.FC<Module6Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'teamwork',
    moduleTitle: 'Teamwork & Collaboration',
    moduleDescription: 'Master effective collaboration and teamwork skills for success in academic, professional, and personal group settings.',
    moduleColor: 'bg-gradient-to-r from-orange-500 to-yellow-500',
    moduleNumber: 6,
    
    // Intro content
    learningObjectives: [
      'Team dynamics and group collaboration strategies',
      'Leadership skills for team success',
      'Conflict management and resolution',
      'Remote collaboration and virtual teamwork',
      'Inclusive team building and diversity',
      'Team performance optimization'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module6Subtopics,
    assessment: module6Assessment,
    
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

export default Module6;