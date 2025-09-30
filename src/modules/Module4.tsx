import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';
import { 
  module4Subtopics, 
  module4Assessment,
  loadModuleProgress,
  saveModuleProgress,
  updateSubtopicProgress
} from '../data/module4Data';

interface Module4Props {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module4: React.FC<Module4Props> = ({ onNavigateHome, onNavigateCatalog }) => {
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'critical-thinking',
    moduleTitle: 'Critical Thinking',
    moduleDescription: 'Develop analytical thinking and problem-solving skills for academic, professional, and personal decision-making.',
    moduleColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
    moduleNumber: 4,
    
    // Intro content
    learningObjectives: [
      'Logical reasoning for complex problem solving',
      'Problem analysis and root cause identification',
      'Creative solutions for challenging situations',
      'Decision making under uncertainty',
      'Risk assessment and mitigation strategies',
      'Root cause analysis techniques'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: module4Subtopics,
    assessment: module4Assessment,
    
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

export default Module4;