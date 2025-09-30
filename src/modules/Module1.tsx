import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
// Test import
import * as module1Data from '../data/module1Data';
console.log('All module1Data exports:', module1Data);

const { 
  module1Subtopics, 
  module1Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} = module1Data;

interface Module1Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module1: React.FC<Module1Props> = ({ onNavigateHome, onNavigateCatalog }) => {
       // Debug: Check if module1Subtopics is defined
       console.log('module1Subtopics:', module1Subtopics);
       console.log('module1Subtopics length:', module1Subtopics?.length);
       console.log('module1Subtopics type:', typeof module1Subtopics);
       console.log('module1Subtopics is array:', Array.isArray(module1Subtopics));
       
       const moduleProps: ModuleTemplateProps = {
         // Module identification
         moduleId: 'communication-skills',
         moduleTitle: 'Communication Skills',
         moduleDescription: 'Master communication for academic success, job interviews, workplace excellence, and personal relationships.',
         moduleColor: 'bg-gradient-to-r from-green-500 to-blue-500',
         moduleNumber: 1,
    
    // Intro content
    learningObjectives: [
      'Active listening for academic and professional success',
      'Public speaking confidence for interviews and presentations',
      'Professional written communication for workplace and job search',
      'Non-verbal communication for personal and professional relationships',
      'Conflict resolution for academic and workplace situations',
      'Presentation skills for academic and professional audiences'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: Array.isArray(module1Subtopics) ? module1Subtopics : [],
    assessment: module1Assessment,
    
    // Progress management functions
    loadModuleProgress,
    saveModuleProgress,
    updateSubtopicProgress,
    
    // Navigation
    onNavigateHome,
    onNavigateCatalog,
    
    // Optional customizations (can be added later if needed)
    // customIntroContent: <CustomIntroComponent />,
    // customAssessmentContent: <CustomAssessmentComponent />,
    // customStyling: {
    //   primaryColor: 'from-blue-500 to-purple-600',
    //   secondaryColor: 'from-purple-500 to-pink-600',
    //   accentColor: 'text-blue-500'
    // }
  };

  return <ModuleTemplate {...moduleProps} />;
};

export default Module1;
