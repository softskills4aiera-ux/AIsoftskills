import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module8Subtopics, 
  module8Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module8Data';

interface Module8Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module8: React.FC<Module8Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'mental-health',
    moduleTitle: 'Mental & Physical Health',
    moduleDescription: 'Master mental wellness and stress management for success in academic, professional, and personal life.',
    moduleColor: 'bg-gradient-to-r from-teal-500 to-green-500',
    moduleNumber: 8,
    
    // Intro content
    learningObjectives: [
      'Stress management and resilience building',
      'Work-life balance and time management',
      'Mindfulness and meditation techniques',
      'Emotional intelligence and self-awareness',
      'Physical health for cognitive performance',
      'Mental wellness strategies for success'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module8Subtopics,
    assessment: module8Assessment,
    
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

export default Module8;