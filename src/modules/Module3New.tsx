import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module3Subtopics, module3Assessment } from '../data/module3NewData';

interface Module3NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module3New: React.FC<Module3NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'prompt-engineering',
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
    console.log('Saving Module 3 progress:', progress);
    localStorage.setItem('module3Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Prompt-Context Engineering"
      moduleDescription="Master AI communication and prompt engineering for academics, projects, and professional work"
      moduleColor="from-cyan-600 to-blue-600"
      moduleId="prompt-engineering"
      moduleNumber={3}
      
      learningObjectives={[
        'Design effective prompts for AI systems',
        'Manage context in AI conversations',
        'Communicate effectively with AI',
        'Optimize prompts for better results',
        'Recognize and mitigate AI biases',
        'Use AI ethically and responsibly'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module3Subtopics}
      assessment={module3Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module3New;
