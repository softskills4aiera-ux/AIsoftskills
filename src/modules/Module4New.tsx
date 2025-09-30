import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module4Subtopics, module4Assessment } from '../data/module4NewData';

interface Module4NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module4New: React.FC<Module4NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'critical-thinking',
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
    console.log('Saving Module 4 progress:', progress);
    localStorage.setItem('module4Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Critical Thinking & Problem Solving"
      moduleDescription="Develop analytical thinking and systematic problem-solving skills for academic and professional success"
      moduleColor="from-orange-600 to-red-600"
      moduleId="critical-thinking"
      moduleNumber={4}
      
      learningObjectives={[
        'Master logical reasoning and argument analysis',
        'Develop systematic problem analysis skills',
        'Generate creative solutions to complex problems',
        'Make effective decisions using frameworks',
        'Assess and manage risks systematically',
        'Identify and fix root causes of problems'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module4Subtopics}
      assessment={module4Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module4New;
