import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module6Subtopics, module6Assessment } from '../data/module6NewData';

interface Module6NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module6New: React.FC<Module6NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'teamwork',
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
    console.log('Saving Module 6 progress:', progress);
    localStorage.setItem('module6Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Teamwork & Collaboration"
      moduleDescription="Build effective teamwork and collaboration skills for success in any team environment"
      moduleColor="from-green-600 to-teal-600"
      moduleId="teamwork"
      moduleNumber={6}
      
      learningObjectives={[
        'Understand and navigate team dynamics',
        'Develop leadership skills for any context',
        'Manage conflicts constructively',
        'Excel in remote collaboration',
        'Work effectively across functions',
        'Build cohesive, high-performing teams'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module6Subtopics}
      assessment={module6Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module6New;
