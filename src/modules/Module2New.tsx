import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module2Subtopics, module2Assessment } from '../data/module2NewData';

interface Module2NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module2New: React.FC<Module2NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'adaptive-learning',
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
    console.log('Saving Module 2 progress:', progress);
    localStorage.setItem('module2Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Adaptive Learning & Lifelong Learning"
      moduleDescription="Master the art of learning how to learn and adapt to any situation"
      moduleColor="from-purple-600 to-indigo-600"
      moduleId="adaptive-learning"
      moduleNumber={2}
      
      learningObjectives={[
        'Master effective learning strategies',
        'Develop powerful memory techniques',
        'Process information efficiently',
        'Transfer skills across contexts',
        'Build learning agility',
        'Create continuous improvement habits'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module2Subtopics}
      assessment={module2Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module2New;
