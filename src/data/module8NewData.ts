// Module 8: Managing Mental & Physical Health - Gen Z Wellness

export interface SubtopicData {
  id: string; title: string; emoji: string; context: 'academic' | 'professional' | 'personal';
  discover: { scenario: string; problemExplanation: string[]; solutionApproach: string[]; };
  video: { title: string; duration: number; content: string[]; };
  quiz: { title: string; questions: { id: number; question: string; options: string[]; correct: number; explanation?: string; }[]; };
  challenge: { title: string; description: string; contexts: {
    academic: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
    professional: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
    personal: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
  }; };
  feedback: { strengths: string[]; improvements: string[]; nextSteps: string[]; };
  badge: { name: string; emoji: string; description: string; };
  shareMessage: string;
}

export interface AssessmentData {
  id: string; title: string; description: string;
  questions: { id: number; question: string; options: string[]; correct: number; explanation?: string; }[];
  gradingScale: {
    excellent: { min: number; max: number; message: string; xpReward: number };
    good: { min: number; max: number; message: string; xpReward: number };
    satisfactory: { min: number; max: number; message: string; xpReward: number };
    needsImprovement: { min: number; max: number; message: string; xpReward: number };
  };
}

export const module8Data: SubtopicData[] = [
  {
    id: 'stress-management',
    title: 'Stress Management',
    emoji: '😌',
    context: 'personal' as const,
    discover: {
      scenario: 'You feel overwhelmed by academic deadlines, job search pressure, and personal responsibilities. Stress is affecting your health and performance.',
      problemExplanation: ['Chronic stress affects health', 'Poor coping mechanisms', 'No stress management tools', 'Burnout risk'],
      solutionApproach: ['Identify stress triggers', 'Practice deep breathing and relaxation', 'Exercise regularly', 'Build healthy coping mechanisms', 'Set boundaries', 'Seek support when needed']
    },
    video: { title: 'Managing Stress Effectively', duration: 6, content: ['Stress is normal but chronic stress is harmful.', 'Identify your stress triggers and patterns.', 'Deep breathing activates relaxation response.', 'Exercise is one of best stress relievers.', 'Healthy coping: talk, walk, create. Unhealthy: substances, isolation.', 'Seek help when stress becomes overwhelming.'] },
    quiz: {
      title: 'Stress Management Quiz',
      questions: [
        { id: 1, question: 'Chronic stress affects:', options: ['Nothing', 'Physical and mental health', 'Only mood', 'Only work'], correct: 1 },
        { id: 2, question: 'Deep breathing helps by:', options: ['Wasting time', 'Activating relaxation response', 'Being trendy', 'Avoiding problems'], correct: 1 },
        { id: 3, question: 'Exercise for stress:', options: ['Makes worse', 'Is powerful stress reliever', 'Is optional', 'Too tiring'], correct: 1 },
        { id: 4, question: 'Healthy coping includes:', options: ['Substance use', 'Exercise, talking, creating', 'Isolation', 'Avoidance'], correct: 1 },
        { id: 5, question: 'When overwhelmed:', options: ['Push through alone', 'Seek support from others', 'Hide it', 'Quit everything'], correct: 1 }
      ]
    },
    challenge: { title: 'Stress Management Challenge', description: 'Build effective stress management skills', contexts: {
      academic: { title: 'Academic Stress Management', description: 'Manage academic stress', instructions: ['Identify academic stressors', 'Practice stress management techniques', 'Build study-life balance', 'Create support system'], successCriteria: ['Manage stress effectively', 'Healthy coping mechanisms', 'Better performance', 'Improved well-being'] },
      professional: { title: 'Professional Stress Management', description: 'Handle workplace stress', instructions: ['Identify work stressors', 'Practice stress techniques', 'Set work boundaries', 'Build resilience'], successCriteria: ['Manage work stress', 'Maintain boundaries', 'Stay productive', 'Protect health'] },
      personal: { title: 'Personal Stress Management', description: 'Build stress resilience', instructions: ['Practice relaxation techniques', 'Build stress management routine', 'Develop healthy habits'], successCriteria: ['Lower stress levels', 'Healthy coping', 'Better quality of life'] }
    } },
    feedback: { strengths: ['Recognize stress', 'Use healthy coping', 'Seek support'], improvements: ['Practice more techniques', 'Build better boundaries', 'Develop more tools'], nextSteps: ['Daily stress management', 'Learn more techniques', 'Help others'] },
    badge: { name: 'Stress Manager', emoji: '😌', description: 'Expert in managing stress' },
    shareMessage: 'Just mastered stress management! 😌 #StressManagement #Wellness'
  },
  {
    id: 'work-life-balance',
    title: 'Work-Life Balance',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: 'You are always working or studying with no time for rest, relationships, or hobbies. You feel burned out and unfulfilled.',
      problemExplanation: ['All work no rest', 'Guilt about taking breaks', 'Poor time boundaries', 'Burnout inevitable'],
      solutionApproach: ['Set clear work-life boundaries', 'Schedule rest and recreation', 'Learn to say no', 'Prioritize what matters', 'Protect personal time']
    },
    video: { title: 'Achieving Work-Life Balance', duration: 6, content: ['Balance is not equal time but right priorities.', 'Set boundaries: when work ends, it ends.', 'Schedule rest like you schedule work.', 'Learn to say no to protect your energy.', 'Quality matters more than quantity in both work and life.', 'Balance prevents burnout and improves performance.'] },
    quiz: {
      title: 'Work-Life Balance Quiz',
      questions: [
        { id: 6, question: 'Work-life balance means:', options: ['50-50 time split', 'Right priorities and boundaries', 'No work', 'All work'], correct: 1 },
        { id: 7, question: 'Boundaries help by:', options: ['Limiting success', 'Protecting energy and preventing burnout', 'Avoiding work', 'Being lazy'], correct: 1 },
        { id: 8, question: 'Rest should be:', options: ['Earned only', 'Scheduled and protected like work', 'Optional', 'When exhausted'], correct: 1 },
        { id: 9, question: 'Saying no helps:', options: ['Avoids opportunity', 'Protects time for priorities', 'Is rude', 'Limits growth'], correct: 1 },
        { id: 10, question: 'Balance improves:', options: ['Nothing', 'Both performance and well-being', 'Only mood', 'Only health'], correct: 1 }
      ]
    },
    challenge: { title: 'Work-Life Balance Challenge', description: 'Build sustainable balance', contexts: {
      academic: { title: 'Academic Balance', description: 'Balance studies and life', instructions: ['Set study boundaries', 'Schedule breaks and fun', 'Protect sleep and health', 'Build sustainable habits'], successCriteria: ['Clear boundaries', 'Sustainable schedule', 'Better performance', 'Improved well-being'] },
      professional: { title: 'Professional Balance', description: 'Balance work and life', instructions: ['Set work boundaries', 'Protect personal time', 'Practice saying no', 'Prioritize health'], successCriteria: ['Work-life boundaries', 'Sustainable pace', 'Productivity and wellness', 'Prevented burnout'] },
      personal: { title: 'Personal Balance', description: 'Create life balance', instructions: ['Assess current balance', 'Set priorities', 'Build boundaries', 'Create sustainable routine'], successCriteria: ['Better balance', 'Clear priorities', 'Improved life satisfaction'] }
    } },
    feedback: { strengths: ['Set boundaries well', 'Prioritize effectively', 'Protect personal time'], improvements: ['Maintain boundaries better', 'Say no more often', 'Rest more regularly'], nextSteps: ['Build sustainable habits', 'Model balance for others', 'Teach balance'] },
    badge: { name: 'Balance Keeper', emoji: '⚖️', description: 'Master of work-life balance' },
    shareMessage: 'Just mastered work-life balance! ⚖️ #WorkLifeBalance #Wellness'
  },
  {
    id: 'mental-health-awareness',
    title: 'Mental Health Awareness',
    emoji: '🧠',
    context: 'personal' as const,
    discover: {
      scenario: 'You or people around you struggle with mental health but there is stigma, lack of awareness, and no knowledge of resources.',
      problemExplanation: ['Mental health stigma', 'Cannot recognize signs', 'No knowledge of resources', 'Suffer in silence'],
      solutionApproach: ['Normalize mental health conversations', 'Learn warning signs', 'Know available resources', 'Practice self-care', 'Support others without judgment']
    },
    video: { title: 'Mental Health Awareness', duration: 6, content: ['Mental health is as important as physical health.', 'Common challenges: anxiety, depression, stress, burnout.', 'Warning signs: persistent sadness, withdrawal, sleep changes, loss of interest.', 'Resources: counseling services, hotlines, therapy, support groups.', 'Self-care: sleep, exercise, connection, boundaries, hobbies.', 'Support others: listen without judgment, encourage professional help.'] },
    quiz: {
      title: 'Mental Health Quiz',
      questions: [
        { id: 11, question: 'Mental health:', options: ['Is weakness', 'Is as important as physical health', 'Only for some', 'Is not real'], correct: 1 },
        { id: 12, question: 'Warning signs include:', options: ['Happiness', 'Persistent sadness, withdrawal, sleep changes', 'Occasional stress', 'Being busy'], correct: 1 },
        { id: 13, question: 'If struggling mentally:', options: ['Hide it', 'Seek professional help and support', 'Just tough it out', 'Ignore it'], correct: 1 },
        { id: 14, question: 'Support someone by:', options: ['Fixing their problems', 'Listening without judgment', 'Avoiding topic', 'Minimizing feelings'], correct: 1 },
        { id: 15, question: 'Self-care includes:', options: ['Being selfish', 'Sleep, exercise, connection, boundaries', 'Avoiding responsibility', 'Only when stressed'], correct: 1 }
      ]
    },
    challenge: { title: 'Mental Health Challenge', description: 'Build mental health awareness and practices', contexts: {
      academic: { title: 'Academic Mental Health', description: 'Protect student mental health', instructions: ['Learn campus resources', 'Practice self-care', 'Support peers', 'Reduce stigma'], successCriteria: ['Know resources', 'Regular self-care', 'Support others', 'Healthy habits'] },
      professional: { title: 'Professional Mental Health', description: 'Workplace mental wellness', instructions: ['Learn workplace resources', 'Set mental health boundaries', 'Practice stress management', 'Create supportive culture'], successCriteria: ['Know resources', 'Protect mental health', 'Support colleagues', 'Sustainable work'] },
      personal: { title: 'Personal Mental Health', description: 'Build mental wellness', instructions: ['Practice self-care daily', 'Build support network', 'Know when to seek help'], successCriteria: ['Regular self-care', 'Strong support system', 'Mental wellness'] }
    } },
    feedback: { strengths: ['Mental health awareness', 'Practice self-care', 'Support others'], improvements: ['Learn more resources', 'Practice more self-care', 'Reduce stigma more'], nextSteps: ['Advocate for mental health', 'Build support networks', 'Normalize conversations'] },
    badge: { name: 'Mental Health Advocate', emoji: '🧠', description: 'Champion of mental wellness' },
    shareMessage: 'Committed to mental health awareness! 🧠 #MentalHealth #Wellness'
  },
  {
    id: 'physical-wellness',
    title: 'Physical Wellness',
    emoji: '💪',
    context: 'personal' as const,
    discover: {
      scenario: 'You neglect physical health due to busy schedule - poor sleep, bad diet, no exercise. Energy and performance suffer.',
      problemExplanation: ['Neglect sleep and nutrition', 'Sedentary lifestyle', 'No exercise routine', 'Health suffers'],
      solutionApproach: ['Prioritize 7-9 hours sleep', 'Eat nutritious meals regularly', 'Exercise 3-5 times weekly', 'Stay hydrated', 'Build sustainable healthy habits']
    },
    video: { title: 'Physical Wellness Basics', duration: 6, content: ['Physical health fuels everything else.', 'Sleep 7-9 hours: non-negotiable for performance.', 'Nutrition: eat real food, mostly plants, not too much.', 'Exercise: 30 min most days, find what you enjoy.', 'Hydration: drink water throughout day.', 'Small habits compound into major health improvements.'] },
    quiz: {
      title: 'Physical Wellness Quiz',
      questions: [
        { id: 16, question: 'Recommended sleep:', options: ['4-5 hours', '7-9 hours', '10-12 hours', 'Whatever'], correct: 1 },
        { id: 17, question: 'Exercise frequency:', options: ['Only when feel like it', '3-5 times per week minimum', 'Daily mandatory', 'Not needed'], correct: 1 },
        { id: 18, question: 'Good nutrition:', options: ['Supplements only', 'Real food, mostly plants, not too much', 'Whatever is fast', 'Skip meals'], correct: 1 },
        { id: 19, question: 'Hydration means:', options: ['Only when thirsty', 'Drink water throughout day', 'Only coffee', 'Ignore it'], correct: 1 },
        { id: 20, question: 'Physical health affects:', options: ['Body only', 'Mental performance and overall well-being', 'Nothing', 'Appearance only'], correct: 1 }
      ]
    },
    challenge: { title: 'Physical Wellness Challenge', description: 'Build healthy physical habits', contexts: {
      academic: { title: 'Academic Wellness', description: 'Stay healthy during studies', instructions: ['Prioritize sleep', 'Eat healthy on campus', 'Exercise regularly', 'Stay hydrated'], successCriteria: ['Consistent sleep', 'Better nutrition', 'Regular exercise', 'Improved energy'] },
      professional: { title: 'Professional Wellness', description: 'Maintain health while working', instructions: ['Protect sleep schedule', 'Meal prep healthy food', 'Exercise before/after work', 'Move during workday'], successCriteria: ['Sleep protected', 'Healthy eating', 'Regular exercise', 'Sustained energy'] },
      personal: { title: 'Personal Wellness', description: 'Build lifelong health habits', instructions: ['Build sleep routine', 'Develop healthy eating', 'Find enjoyable exercise', 'Stay hydrated'], successCriteria: ['Sustainable habits', 'Improved health', 'More energy', 'Better quality of life'] }
    } },
    feedback: { strengths: ['Prioritize health', 'Build good habits', 'Consistent routines'], improvements: ['More consistent sleep', 'Better nutrition', 'More exercise'], nextSteps: ['Maintain habits', 'Optimize health', 'Inspire others'] },
    badge: { name: 'Wellness Warrior', emoji: '💪', description: 'Champion of physical health' },
    shareMessage: 'Just committed to physical wellness! 💪 #PhysicalHealth #Wellness'
  },
  {
    id: 'resilience-building',
    title: 'Resilience Building',
    emoji: '🛡️',
    context: 'personal' as const,
    discover: {
      scenario: 'Setbacks and failures knock you down hard. You struggle to bounce back and often give up when things get difficult.',
      problemExplanation: ['See failure as final', 'No resilience skills', 'Give up easily', 'Cannot bounce back'],
      solutionApproach: ['Reframe failure as learning', 'Build growth mindset', 'Develop coping strategies', 'Build support network', 'Practice self-compassion']
    },
    video: { title: 'Building Resilience', duration: 6, content: ['Resilience is bouncing back from adversity.', 'Failure is feedback, not final verdict.', 'Growth mindset: challenges are opportunities to grow.', 'Self-compassion: treat yourself with kindness.', 'Build support network: do not face challenges alone.', 'Resilience is a skill you can develop.'] },
    quiz: {
      title: 'Resilience Quiz',
      questions: [
        { id: 21, question: 'Resilience means:', options: ['Never failing', 'Bouncing back from setbacks', 'Avoiding challenges', 'Being perfect'], correct: 1 },
        { id: 22, question: 'View failure as:', options: ['Final verdict', 'Feedback and learning opportunity', 'Weakness', 'To avoid'], correct: 1 },
        { id: 23, question: 'Growth mindset sees challenges as:', options: ['Threats', 'Opportunities to grow', 'Failures', 'To avoid'], correct: 1 },
        { id: 24, question: 'Self-compassion means:', options: ['Being soft', 'Treating yourself with kindness', 'Low standards', 'Giving up'], correct: 1 },
        { id: 25, question: 'Build resilience through:', options: ['Isolation', 'Support network and practice', 'Avoiding challenges', 'Being tough alone'], correct: 1 }
      ]
    },
    challenge: { title: 'Resilience Challenge', description: 'Develop resilience and grit', contexts: {
      academic: { title: 'Academic Resilience', description: 'Bounce back from academic setbacks', instructions: ['Face academic challenge', 'Reframe as learning', 'Build support system', 'Persist and grow'], successCriteria: ['Bounce back from setbacks', 'Learn from failures', 'Maintain progress', 'Growth mindset'] },
      professional: { title: 'Professional Resilience', description: 'Handle professional setbacks', instructions: ['Face work challenge', 'Stay resilient', 'Learn and adapt', 'Keep going'], successCriteria: ['Bounce back quickly', 'Learn from mistakes', 'Career growth', 'Mental toughness'] },
      personal: { title: 'Personal Resilience', description: 'Build life resilience', instructions: ['Face personal challenge', 'Practice resilience', 'Build support', 'Grow stronger'], successCriteria: ['Overcome obstacles', 'Stronger through adversity', 'Support system', 'Personal growth'] }
    } },
    feedback: { strengths: ['Bounce back well', 'Learn from setbacks', 'Stay positive'], improvements: ['Build more resilience tools', 'Practice more self-compassion', 'Seek support more'], nextSteps: ['Continue building resilience', 'Help others develop resilience', 'Face challenges'] },
    badge: { name: 'Resilient One', emoji: '🛡️', description: 'Master of bouncing back' },
    shareMessage: 'Just built serious resilience! 🛡️ #Resilience #GrowthMindset'
  },
  {
    id: 'mindfulness-practices',
    title: 'Mindfulness Practices',
    emoji: '🧘',
    context: 'personal' as const,
    discover: {
      scenario: 'Your mind is always racing, worrying about past and future. You cannot focus or find peace in the present moment.',
      problemExplanation: ['Constant mental chatter', 'Living in past or future', 'Cannot be present', 'Anxiety and distraction'],
      solutionApproach: ['Practice mindfulness meditation', 'Focus on present moment', 'Notice thoughts without judgment', 'Use mindful breathing', 'Build daily mindfulness practice']
    },
    video: { title: 'Mindfulness Fundamentals', duration: 6, content: ['Mindfulness is present moment awareness.', 'Not emptying mind but noticing without judgment.', 'Start simple: focus on breath for 2 minutes.', 'When mind wanders (it will), gently return to breath.', 'Practice daily: consistency matters more than duration.', 'Mindfulness reduces stress and improves focus.'] },
    quiz: {
      title: 'Mindfulness Quiz',
      questions: [
        { id: 26, question: 'Mindfulness is:', options: ['Emptying mind', 'Present moment awareness without judgment', 'Relaxation only', 'Avoiding thoughts'], correct: 1 },
        { id: 27, question: 'When mind wanders:', options: ['You failed', 'Gently return to focus', 'Give up', 'Force control'], correct: 1 },
        { id: 28, question: 'Start mindfulness with:', options: ['Hour sessions', '2-5 minutes of breath focus', 'Complex techniques', 'Perfection'], correct: 1 },
        { id: 29, question: 'Mindfulness practice should be:', options: ['Only when stressed', 'Daily consistent practice', 'Long sessions only', 'Occasional'], correct: 1 },
        { id: 30, question: 'Mindfulness benefits:', options: ['Nothing proven', 'Reduces stress improves focus', 'Only relaxation', 'Is just trendy'], correct: 1 }
      ]
    },
    challenge: { title: 'Mindfulness Challenge', description: 'Build daily mindfulness practice', contexts: {
      academic: { title: 'Academic Mindfulness', description: 'Use mindfulness for studies', instructions: ['Practice daily mindfulness', 'Use before studying', 'Improve focus', 'Reduce academic stress'], successCriteria: ['Daily practice', 'Better focus', 'Lower stress', 'Improved performance'] },
      professional: { title: 'Professional Mindfulness', description: 'Mindfulness at work', instructions: ['Daily mindfulness routine', 'Use during work stress', 'Improve focus and decision-making'], successCriteria: ['Consistent practice', 'Better work focus', 'Stress management', 'Improved decisions'] },
      personal: { title: 'Personal Mindfulness', description: 'Build mindfulness habit', instructions: ['Start daily practice', 'Build consistency', 'Experience benefits'], successCriteria: ['Daily mindfulness', 'Present moment awareness', 'Reduced anxiety', 'Better well-being'] }
    } },
    feedback: { strengths: ['Practice regularly', 'Stay present', 'Non-judgmental awareness'], improvements: ['More consistent practice', 'Longer sessions gradually', 'Integrate into daily life'], nextSteps: ['Deepen practice', 'Explore techniques', 'Teach mindfulness'] },
    badge: { name: 'Mindful One', emoji: '🧘', description: 'Master of mindfulness' },
    shareMessage: 'Just started mindfulness journey! 🧘 #Mindfulness #Wellness'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module8Subtopics = module8Data;

// Module 8 Assessment
export const module8Assessment: AssessmentData = {
  id: 'module8-assessment',
  title: 'Mental & Physical Health Assessment',
  description: 'Test your wellness and health management mastery',
  questions: [
    // Stress Management (1-5)
    { id: 1, question: 'Chronic stress affects:', options: ['Nothing', 'Physical and mental health', 'Only mood', 'Only work'], correct: 1 },
    { id: 2, question: 'Deep breathing:', options: ['Wastes time', 'Activates relaxation response', 'Trendy', 'Avoids problems'], correct: 1 },
    { id: 3, question: 'Exercise for stress:', options: ['Worse', 'Powerful reliever', 'Optional', 'Too tiring'], correct: 1 },
    { id: 4, question: 'Healthy coping:', options: ['Substances', 'Exercise, talking, creating', 'Isolation', 'Avoidance'], correct: 1 },
    { id: 5, question: 'When overwhelmed:', options: ['Push alone', 'Seek support', 'Hide', 'Quit'], correct: 1 },
    // Work-Life Balance (6-10)
    { id: 6, question: 'Balance means:', options: ['50-50 split', 'Right priorities and boundaries', 'No work', 'All work'], correct: 1 },
    { id: 7, question: 'Boundaries:', options: ['Limit success', 'Protect energy prevent burnout', 'Avoid work', 'Lazy'], correct: 1 },
    { id: 8, question: 'Rest should be:', options: ['Earned', 'Scheduled and protected', 'Optional', 'When exhausted'], correct: 1 },
    { id: 9, question: 'Saying no:', options: ['Avoids opportunity', 'Protects time for priorities', 'Rude', 'Limits'], correct: 1 },
    { id: 10, question: 'Balance improves:', options: ['Nothing', 'Performance and well-being', 'Only mood', 'Only health'], correct: 1 },
    // Mental Health (11-15)
    { id: 11, question: 'Mental health:', options: ['Weakness', 'As important as physical health', 'Only for some', 'Not real'], correct: 1 },
    { id: 12, question: 'Warning signs:', options: ['Happiness', 'Persistent sadness, withdrawal, sleep changes', 'Occasional stress', 'Busy'], correct: 1 },
    { id: 13, question: 'If struggling:', options: ['Hide', 'Seek professional help', 'Tough it out', 'Ignore'], correct: 1 },
    { id: 14, question: 'Support by:', options: ['Fixing', 'Listening without judgment', 'Avoiding', 'Minimizing'], correct: 1 },
    { id: 15, question: 'Self-care:', options: ['Selfish', 'Sleep, exercise, connection, boundaries', 'Avoiding', 'Only when stressed'], correct: 1 },
    // Physical Wellness (16-20)
    { id: 16, question: 'Sleep need:', options: ['4-5 hours', '7-9 hours', '10-12 hours', 'Whatever'], correct: 1 },
    { id: 17, question: 'Exercise:', options: ['When feel like it', '3-5 times weekly minimum', 'Daily mandatory', 'Not needed'], correct: 1 },
    { id: 18, question: 'Nutrition:', options: ['Supplements', 'Real food mostly plants', 'Whatever fast', 'Skip meals'], correct: 1 },
    { id: 19, question: 'Hydration:', options: ['Only thirsty', 'Throughout day', 'Only coffee', 'Ignore'], correct: 1 },
    { id: 20, question: 'Physical health affects:', options: ['Body only', 'Mental and overall well-being', 'Nothing', 'Appearance only'], correct: 1 },
    // Resilience (21-25)
    { id: 21, question: 'Resilience:', options: ['Never fail', 'Bounce back from setbacks', 'Avoid challenges', 'Perfect'], correct: 1 },
    { id: 22, question: 'View failure:', options: ['Final', 'Feedback and learning', 'Weakness', 'Avoid'], correct: 1 },
    { id: 23, question: 'Challenges are:', options: ['Threats', 'Growth opportunities', 'Failures', 'Avoid'], correct: 1 },
    { id: 24, question: 'Self-compassion:', options: ['Soft', 'Treating self with kindness', 'Low standards', 'Giving up'], correct: 1 },
    { id: 25, question: 'Build resilience:', options: ['Isolation', 'Support and practice', 'Avoid challenges', 'Tough alone'], correct: 1 },
    // Mindfulness (26-30)
    { id: 26, question: 'Mindfulness is:', options: ['Empty mind', 'Present awareness without judgment', 'Relaxation', 'Avoid thoughts'], correct: 1 },
    { id: 27, question: 'Mind wanders:', options: ['Failed', 'Gently return to focus', 'Give up', 'Force control'], correct: 1 },
    { id: 28, question: 'Start with:', options: ['Hour sessions', '2-5 minutes breath focus', 'Complex', 'Perfection'], correct: 1 },
    { id: 29, question: 'Practice:', options: ['Only stressed', 'Daily consistent', 'Long only', 'Occasional'], correct: 1 },
    { id: 30, question: 'Benefits:', options: ['Nothing', 'Reduces stress improves focus', 'Only relaxation', 'Trendy'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Wellness master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong health awareness!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep building habits!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review wellness practices!', xpReward: 100 }
  }
};
