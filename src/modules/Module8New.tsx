import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module8Subtopics, module8Assessment } from '../data/module8NewData';

interface Module8NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module8New: React.FC<Module8NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'mental-physical-health',
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
    console.log('Saving Module 8 progress:', progress);
    localStorage.setItem('module8Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Managing Mental & Physical Health"
      moduleDescription="Develop habits for mental wellness and physical health to thrive in all areas of life"
      moduleColor="from-green-600 to-emerald-600"
      moduleId="mental-physical-health"
      moduleNumber={8}
      
      learningObjectives={[
        'Manage stress effectively',
        'Achieve work-life balance',
        'Build mental health awareness',
        'Develop physical wellness habits',
        'Build resilience and grit',
        'Practice mindfulness daily'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module8Subtopics}
      assessment={module8Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module8New;
