import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module7Subtopics, module7Assessment } from '../data/module7NewData';

interface Module7NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module7New: React.FC<Module7NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'data-driven',
    currentSubtopic: 0,
    completedSubtopics: [],
    quizScores: {},
    badges: [],
    challengeResponses: {},
    lastAccessed: new Date().toISOString(),
    totalXP: 0,
    successStreak: 0,
    highestStreak: 0,
    lastStreakDate: new Date().toISOString()
  });

  const saveModuleProgress = (progress: any) => {
    console.log('Saving Module 7 progress:', progress);
    localStorage.setItem('module7Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Data-Driven Decision Making"
      moduleDescription="Make informed decisions using data analysis and evidence"
      moduleColor="from-blue-600 to-indigo-600"
      moduleId="data-driven"
      moduleNumber={7}
      
      learningObjectives={[
        'Analyze data to find insights',
        'Apply statistical thinking',
        'Create effective data visualizations',
        'Test hypotheses systematically',
        'Define and track meaningful metrics',
        'Make evidence-based decisions'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module7Subtopics}
      assessment={module7Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module7New;
