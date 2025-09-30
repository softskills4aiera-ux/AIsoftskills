import React from 'react';
import ModuleTemplate from '../components/ModuleTemplate';
import { module5Subtopics, module5Assessment } from '../data/module5NewData';

interface Module5NewProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module5New: React.FC<Module5NewProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  const loadModuleProgress = () => ({
    moduleId: 'design-thinking',
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
    console.log('Saving Module 5 progress:', progress);
    localStorage.setItem('module5Progress', JSON.stringify(progress));
  };

  const updateSubtopicProgress = (id: string, progress: number) => {
    console.log(`Updated ${id}: ${progress}%`);
  };

  return (
    <ModuleTemplate
      moduleTitle="Design Thinking"
      moduleDescription="Use creativity and empathy to solve complex problems innovatively"
      moduleColor="from-pink-600 to-purple-600"
      moduleId="design-thinking"
      moduleNumber={5}
      
      learningObjectives={[
        'Develop deep empathy for users and stakeholders',
        'Master ideation and creative thinking techniques',
        'Build and test rapid prototypes',
        'Validate solutions through user testing',
        'Embrace iterative improvement',
        'Design user-centered solutions'
      ]}
      
      moduleStructure={{
        introVideo: { duration: 5 },
        subtopics: { count: 6, totalDuration: 30 },
        finalAssessment: { duration: 60 }
      }}
      
      subtopics={module5Subtopics}
      assessment={module5Assessment}
      
      loadModuleProgress={loadModuleProgress}
      saveModuleProgress={saveModuleProgress}
      updateSubtopicProgress={updateSubtopicProgress}
      onNavigateHome={onNavigateHome}
      onNavigateCatalog={onNavigateCatalog}
    />
  );
};

export default Module5New;
