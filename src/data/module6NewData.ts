// Module 6: Teamwork & Collaboration - Gen Z focused

export interface SubtopicData {
  id: string;
  title: string;
  emoji: string;
  context: 'academic' | 'professional' | 'personal';
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

export const module6Data: SubtopicData[] = [
  {
    id: 'team-dynamics',
    title: 'Team Dynamics',
    emoji: '👥',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team is struggling with conflicts, unclear roles, and poor collaboration despite talented members.',
      problemExplanation: ['Unclear roles and responsibilities', 'Poor communication patterns', 'Personality conflicts', 'No shared goals'],
      solutionApproach: ['Understand team development stages', 'Clarify roles using RACI matrix', 'Build psychological safety', 'Establish team norms', 'Foster open communication']
    },
    video: { title: 'Understanding Team Dynamics', duration: 6, content: ['Teams go through stages: forming, storming, norming, performing.', 'Storming is natural - conflict helps teams grow.', 'Psychological safety: team members feel safe to take risks.', 'RACI: Responsible, Accountable, Consulted, Informed.', 'Team norms: agreed ways of working together.', 'Diversity strengthens teams when managed well.'] },
    quiz: {
      title: 'Team Dynamics Quiz',
      questions: [
        { id: 1, question: 'Team development stages are:', options: ['Starting, working, finishing', 'Forming, storming, norming, performing', 'Beginning, middle, end', 'Planning, doing, reviewing'], correct: 1 },
        { id: 2, question: 'Storming stage involves:', options: ['Perfect harmony', 'Conflict and disagreement', 'No interaction', 'Immediate success'], correct: 1 },
        { id: 3, question: 'Psychological safety means:', options: ['Physical safety', 'Feel safe to take risks and speak up', 'No challenges', 'Avoiding conflict'], correct: 1 },
        { id: 4, question: 'RACI matrix clarifies:', options: ['Salaries', 'Roles and responsibilities', 'Timelines', 'Budgets'], correct: 1 },
        { id: 5, question: 'Team norms are:', options: ['Rules from management', 'Agreed ways of working together', 'Individual preferences', 'Optional guidelines'], correct: 1 }
      ]
    },
    challenge: { title: 'Team Dynamics Mastery', description: 'Build effective team dynamics', contexts: {
      academic: { title: 'Academic Team Dynamics', description: 'Build strong study/project teams', instructions: ['Form study team', 'Clarify roles', 'Establish norms', 'Navigate conflicts', 'Build trust'], successCriteria: ['Clear roles', 'Good communication', 'Effective collaboration', 'Handle conflicts well'] },
      professional: { title: 'Professional Team Dynamics', description: 'Excel in workplace teams', instructions: ['Join/lead team', 'Use RACI for roles', 'Build psychological safety', 'Establish team norms', 'Navigate team stages'], successCriteria: ['High-performing team', 'Clear responsibilities', 'Strong collaboration', 'Navigate conflicts'] },
      personal: { title: 'Personal Team Dynamics', description: 'Build strong personal teams', instructions: ['Form personal team/group', 'Clarify expectations', 'Build trust', 'Handle disagreements'], successCriteria: ['Strong relationships', 'Clear communication', 'Mutual support'] }
    } },
    feedback: { strengths: ['Good team understanding', 'Build trust well', 'Navigate conflicts'], improvements: ['Clarify roles more', 'Build more psychological safety', 'Establish stronger norms'], nextSteps: ['Study team dynamics', 'Practice facilitation', 'Lead teams'] },
    badge: { name: 'Team Builder', emoji: '👥', description: 'Expert in team dynamics' },
    shareMessage: 'Just mastered team dynamics! 👥 #Teamwork #Collaboration'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    emoji: '🎯',
    context: 'professional' as const,
    discover: {
      scenario: 'You have opportunities to lead but lack confidence and skills to inspire and guide others effectively.',
      problemExplanation: ['Confuse leadership with authority', 'Lack leadership skills', 'Fear of responsibility', 'No leadership model'],
      solutionApproach: ['Understand leadership styles', 'Lead by example', 'Inspire and motivate', 'Delegate effectively', 'Develop others', 'Build influence without authority']
    },
    video: { title: 'Developing Leadership Skills', duration: 6, content: ['Leadership is influence, not authority.', 'Different styles: servant, transformational, situational.', 'Lead by example: model the behavior you want.', 'Inspire with vision and purpose.', 'Delegate to develop others, not just offload work.', 'Build influence through competence and character.'] },
    quiz: {
      title: 'Leadership Quiz',
      questions: [
        { id: 6, question: 'Leadership is primarily:', options: ['Having authority', 'Influence and inspiring others', 'Being bossy', 'Having a title'], correct: 1 },
        { id: 7, question: 'Servant leadership focuses on:', options: ['Being served', 'Serving and developing team members', 'Avoiding responsibility', 'Following orders'], correct: 1 },
        { id: 8, question: 'Lead by example means:', options: ['Give orders', 'Model the behavior you want to see', 'Do everything yourself', 'Avoid delegation'], correct: 1 },
        { id: 9, question: 'Effective delegation:', options: ['Dump unwanted tasks', 'Develop others through responsibility', 'Avoid work', 'Control everything'], correct: 1 },
        { id: 10, question: 'Leadership without authority requires:', options: ['Forcing compliance', 'Building influence through competence', 'Having a title', 'Being aggressive'], correct: 1 }
      ]
    },
    challenge: { title: 'Leadership Challenge', description: 'Develop leadership capabilities', contexts: {
      academic: { title: 'Academic Leadership', description: 'Lead student teams and initiatives', instructions: ['Take leadership role', 'Set vision', 'Inspire team', 'Delegate tasks', 'Develop team members'], successCriteria: ['Effective leadership', 'Team achieves goals', 'Members grow', 'Strong influence'] },
      professional: { title: 'Professional Leadership', description: 'Lead in workplace', instructions: ['Lead project/team', 'Apply leadership style', 'Build influence', 'Develop others', 'Achieve results'], successCriteria: ['Strong leadership', 'Team performance', 'Others developed', 'Business results'] },
      personal: { title: 'Personal Leadership', description: 'Lead in personal contexts', instructions: ['Lead personal initiative', 'Inspire others', 'Model behavior', 'Help others grow'], successCriteria: ['Positive influence', 'Others inspired', 'Goals achieved'] }
    } },
    feedback: { strengths: ['Good leadership instincts', 'Inspire others well', 'Lead by example'], improvements: ['Delegate more', 'Develop more leadership styles', 'Build more influence'], nextSteps: ['Take leadership roles', 'Study leadership', 'Mentor others'] },
    badge: { name: 'Leader', emoji: '🎯', description: 'Emerging leader and influencer' },
    shareMessage: 'Just developed leadership skills! 🎯 #Leadership #Teamwork'
  },
  {
    id: 'conflict-management',
    title: 'Conflict Management',
    emoji: '🤝',
    context: 'professional' as const,
    discover: {
      scenario: 'Team conflicts are escalating and affecting productivity. You need skills to manage and resolve disagreements constructively.',
      problemExplanation: ['Avoiding conflicts', 'Aggressive confrontation', 'No conflict resolution skills', 'Conflicts damage relationships'],
      solutionApproach: ['Address conflicts early', 'Use active listening', 'Find win-win solutions', 'Separate people from problems', 'Mediate fairly']
    },
    video: { title: 'Managing Team Conflicts', duration: 6, content: ['Conflict is natural and can be productive.', 'Address conflicts early before they escalate.', 'Listen actively to all perspectives.', 'Separate people from the problem.', 'Focus on interests, not positions.', 'Seek win-win solutions that satisfy everyone.'] },
    quiz: {
      title: 'Conflict Management Quiz',
      questions: [
        { id: 11, question: 'Healthy team conflict:', options: ['Should be avoided', 'Can improve decisions and relationships', 'Is always destructive', 'Means team is failing'], correct: 1 },
        { id: 12, question: 'When conflicts arise:', options: ['Ignore them', 'Address early before escalation', 'Wait for them to resolve', 'Blame someone'], correct: 1 },
        { id: 13, question: 'Separate people from problem means:', options: ['Isolate people', 'Focus on issue not personalities', 'Remove team members', 'Avoid people'], correct: 1 },
        { id: 14, question: 'Win-win solutions:', options: ['Impossible', 'Satisfy all parties interests', 'One side wins', 'Compromise quality'], correct: 1 },
        { id: 15, question: 'Best conflict approach:', options: ['Aggressive', 'Collaborative problem-solving', 'Avoidance', 'Competition'], correct: 1 }
      ]
    },
    challenge: { title: 'Conflict Management Challenge', description: 'Master constructive conflict resolution', contexts: {
      academic: { title: 'Academic Conflict', description: 'Resolve study team conflicts', instructions: ['Identify team conflict', 'Listen to all sides', 'Find common ground', 'Facilitate resolution'], successCriteria: ['Conflict resolved', 'Relationships maintained', 'Better solutions', 'Team stronger'] },
      professional: { title: 'Professional Conflict', description: 'Manage workplace conflicts', instructions: ['Address workplace conflict', 'Use mediation skills', 'Focus on interests', 'Find win-win'], successCriteria: ['Productive resolution', 'Relationships preserved', 'Business outcomes', 'Team cohesion'] },
      personal: { title: 'Personal Conflict', description: 'Handle personal disagreements', instructions: ['Address personal conflict', 'Listen empathetically', 'Find mutual solution'], successCriteria: ['Conflict resolved', 'Relationship strengthened', 'Mutual understanding'] }
    } },
    feedback: { strengths: ['Handle conflicts well', 'Listen actively', 'Find win-win'], improvements: ['Address conflicts earlier', 'Mediate better', 'Build more skills'], nextSteps: ['Practice mediation', 'Study conflict resolution', 'Help others resolve conflicts'] },
    badge: { name: 'Peacemaker', emoji: '🤝', description: 'Expert in conflict resolution' },
    shareMessage: 'Just mastered conflict management! 🤝 #ConflictResolution #Teamwork'
  },
  {
    id: 'remote-collaboration',
    title: 'Remote Collaboration',
    emoji: '💻',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team is distributed across locations and time zones. Remote work creates communication and collaboration challenges.',
      problemExplanation: ['Communication gaps', 'Time zone difficulties', 'Lack of personal connection', 'Tool overload'],
      solutionApproach: ['Use async communication effectively', 'Leverage collaboration tools', 'Build virtual rapport', 'Set clear expectations', 'Over-communicate intentionally']
    },
    video: { title: 'Remote Collaboration Excellence', duration: 6, content: ['Remote work requires intentional collaboration.', 'Async communication: detailed messages, clear context.', 'Use right tools: Slack for chat, Zoom for meetings, Notion for docs.', 'Build rapport virtually: casual chats, video on.', 'Over-communicate: document decisions, share updates.', 'Respect time zones and work-life boundaries.'] },
    quiz: {
      title: 'Remote Collaboration Quiz',
      questions: [
        { id: 16, question: 'Async communication means:', options: ['Fast replies', 'Messages that do not require immediate response', 'Video calls', 'Phone calls'], correct: 1 },
        { id: 17, question: 'In remote teams, you should:', options: ['Under-communicate', 'Over-communicate intentionally', 'Avoid communication', 'Only use email'], correct: 1 },
        { id: 18, question: 'Build virtual rapport by:', options: ['Avoiding personal topics', 'Casual chats and video-on meetings', 'Text only', 'Minimal interaction'], correct: 1 },
        { id: 19, question: 'Working across time zones:', options: ['Ignore them', 'Respect boundaries and schedule thoughtfully', 'Expect immediate responses', 'Work 24/7'], correct: 1 },
        { id: 20, question: 'Remote collaboration tools should:', options: ['Use all available', 'Choose right tool for each purpose', 'Avoid tools', 'Use one only'], correct: 1 }
      ]
    },
    challenge: { title: 'Remote Collaboration Challenge', description: 'Master remote teamwork', contexts: {
      academic: { title: 'Academic Remote Work', description: 'Collaborate on remote projects', instructions: ['Join remote team project', 'Use collaboration tools', 'Communicate async', 'Build virtual rapport'], successCriteria: ['Effective remote collaboration', 'Clear communication', 'Project success', 'Strong connections'] },
      professional: { title: 'Professional Remote Work', description: 'Excel in remote workplace', instructions: ['Work on distributed team', 'Master remote tools', 'Build virtual presence', 'Deliver results'], successCriteria: ['Productive remotely', 'Strong virtual relationships', 'Business results', 'Team cohesion'] },
      personal: { title: 'Personal Remote Collaboration', description: 'Collaborate remotely on personal projects', instructions: ['Remote personal project', 'Use digital tools', 'Stay connected', 'Achieve goals'], successCriteria: ['Effective remote work', 'Maintain connections', 'Goals achieved'] }
    } },
    feedback: { strengths: ['Good remote communication', 'Use tools well', 'Build virtual rapport'], improvements: ['Over-communicate more', 'Try more tools', 'Build stronger connections'], nextSteps: ['Master async communication', 'Learn advanced tools', 'Build remote leadership'] },
    badge: { name: 'Remote Collaborator', emoji: '💻', description: 'Expert in remote teamwork' },
    shareMessage: 'Just mastered remote collaboration! 💻 #RemoteWork #Teamwork'
  },
  {
    id: 'cross-functional-teams',
    title: 'Cross-functional Teams',
    emoji: '🔀',
    context: 'professional' as const,
    discover: {
      scenario: 'You work with people from different departments with different expertise, priorities, and languages. Collaboration is challenging.',
      problemExplanation: ['Different expertise and jargon', 'Competing priorities', 'Siloed thinking', 'Communication barriers'],
      solutionApproach: ['Learn to translate between domains', 'Find common goals', 'Respect different perspectives', 'Bridge communication gaps', 'Focus on shared outcomes']
    },
    video: { title: 'Cross-functional Collaboration', duration: 6, content: ['Cross-functional teams bring diverse expertise.', 'Challenge: different languages and priorities.', 'Learn enough to communicate: speak their language.', 'Find common goals that transcend departments.', 'Respect expertise: everyone brings unique value.', 'Focus on shared outcomes, not territorial wins.'] },
    quiz: {
      title: 'Cross-functional Teams Quiz',
      questions: [
        { id: 21, question: 'Cross-functional teams include:', options: ['Same expertise', 'People from different departments/specialties', 'Only managers', 'One department'], correct: 1 },
        { id: 22, question: 'To work across functions:', options: ['Use only your jargon', 'Learn to translate between domains', 'Avoid communication', 'Demand they adapt'], correct: 1 },
        { id: 23, question: 'Different priorities should:', options: ['Cause conflict', 'Be aligned around common goals', 'Be ignored', 'Lead to competition'], correct: 1 },
        { id: 24, question: 'Respect for expertise means:', options: ['Defer to all opinions', 'Value each perspective for its unique contribution', 'Only trust your own', 'Ignore differences'], correct: 1 },
        { id: 25, question: 'Cross-functional success requires:', options: ['Avoiding others', 'Focus on shared outcomes', 'Territorial thinking', 'Working in silos'], correct: 1 }
      ]
    },
    challenge: { title: 'Cross-functional Challenge', description: 'Excel in diverse teams', contexts: {
      academic: { title: 'Academic Cross-functional', description: 'Work across academic disciplines', instructions: ['Join interdisciplinary project', 'Learn other fields basics', 'Find common goals', 'Bridge communication'], successCriteria: ['Effective collaboration', 'Mutual understanding', 'Integrated solutions', 'Project success'] },
      professional: { title: 'Professional Cross-functional', description: 'Collaborate across departments', instructions: ['Work on cross-functional project', 'Learn other functions', 'Align priorities', 'Deliver together'], successCriteria: ['Smooth collaboration', 'Aligned goals', 'Business results', 'Strong relationships'] },
      personal: { title: 'Personal Cross-functional', description: 'Collaborate with diverse people', instructions: ['Work with diverse group', 'Appreciate differences', 'Find common purpose'], successCriteria: ['Effective collaboration', 'Mutual respect', 'Shared success'] }
    } },
    feedback: { strengths: ['Bridge functions well', 'Respect expertise', 'Find common goals'], improvements: ['Learn more domains', 'Translate better', 'Build more bridges'], nextSteps: ['Work on more cross-functional projects', 'Learn multiple domains', 'Become bridge builder'] },
    badge: { name: 'Bridge Builder', emoji: '🔀', description: 'Expert in cross-functional collaboration' },
    shareMessage: 'Just mastered cross-functional teamwork! 🔀 #Collaboration #Teamwork'
  },
  {
    id: 'team-building',
    title: 'Team Building',
    emoji: '🏗️',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team lacks cohesion and trust. Members work in silos and do not support each other.',
      problemExplanation: ['No trust or connection', 'Work in silos', 'No shared identity', 'Weak relationships'],
      solutionApproach: ['Build trust through vulnerability', 'Create shared experiences', 'Celebrate wins together', 'Support each other', 'Build team identity']
    },
    video: { title: 'Building Strong Teams', duration: 6, content: ['Strong teams are built, not born.', 'Trust comes from vulnerability and reliability.', 'Share successes and failures as a team.', 'Celebrate wins, learn from losses together.', 'Create team rituals and traditions.', 'Support each other beyond work tasks.'] },
    quiz: {
      title: 'Team Building Quiz',
      questions: [
        { id: 26, question: 'Team trust requires:', options: ['Time only', 'Vulnerability and reliability', 'Perfection', 'Avoiding mistakes'], correct: 1 },
        { id: 27, question: 'Team building involves:', options: ['Work tasks only', 'Creating connection and shared identity', 'Forcing fun', 'Avoiding personal topics'], correct: 1 },
        { id: 28, question: 'Celebrate team wins to:', options: ['Show off', 'Build morale and team identity', 'Create competition', 'Waste time'], correct: 1 },
        { id: 29, question: 'Support team members by:', options: ['Doing their work', 'Offering help and encouragement', 'Criticizing', 'Ignoring struggles'], correct: 1 },
        { id: 30, question: 'Team identity creates:', options: ['Division', 'Cohesion and commitment', 'Exclusivity', 'Problems'], correct: 1 }
      ]
    },
    challenge: { title: 'Team Building Challenge', description: 'Build cohesive, high-performing teams', contexts: {
      academic: { title: 'Academic Team Building', description: 'Build strong study teams', instructions: ['Form/join study team', 'Build trust', 'Create shared goals', 'Support each other'], successCriteria: ['Strong team bonds', 'Mutual support', 'Shared success', 'Lasting relationships'] },
      professional: { title: 'Professional Team Building', description: 'Build workplace team cohesion', instructions: ['Build team trust', 'Create team identity', 'Celebrate together', 'Support members'], successCriteria: ['High team cohesion', 'Strong performance', 'Member satisfaction', 'Team resilience'] },
      personal: { title: 'Personal Team Building', description: 'Build personal support networks', instructions: ['Build personal team', 'Create connections', 'Support each other'], successCriteria: ['Strong bonds', 'Mutual support', 'Shared growth'] }
    } },
    feedback: { strengths: ['Build trust well', 'Create team spirit', 'Support others'], improvements: ['Build deeper connections', 'Create more rituals', 'Support more consistently'], nextSteps: ['Continue team building', 'Study team psychology', 'Facilitate team activities'] },
    badge: { name: 'Team Architect', emoji: '🏗️', description: 'Expert in building strong teams' },
    shareMessage: 'Just mastered team building! 🏗️ #TeamBuilding #Collaboration'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module6Subtopics = module6Data;

// Module 6 Assessment
export const module6Assessment: AssessmentData = {
  id: 'module6-assessment',
  title: 'Teamwork & Collaboration Assessment',
  description: 'Test your teamwork and collaboration mastery',
  questions: [
    // Team Dynamics (1-5)
    { id: 1, question: 'Team stages:', options: ['Start, work, finish', 'Forming, storming, norming, performing', 'Begin, middle, end', 'Plan, do, review'], correct: 1 },
    { id: 2, question: 'Storming involves:', options: ['Harmony', 'Conflict and disagreement', 'No interaction', 'Success'], correct: 1 },
    { id: 3, question: 'Psychological safety:', options: ['Physical safety', 'Feel safe to take risks', 'No challenges', 'No conflict'], correct: 1 },
    { id: 4, question: 'RACI clarifies:', options: ['Salaries', 'Roles and responsibilities', 'Timelines', 'Budgets'], correct: 1 },
    { id: 5, question: 'Team norms:', options: ['Management rules', 'Agreed ways of working', 'Individual preferences', 'Optional'], correct: 1 },
    // Leadership (6-10)
    { id: 6, question: 'Leadership is:', options: ['Authority', 'Influence and inspiration', 'Being bossy', 'Title'], correct: 1 },
    { id: 7, question: 'Servant leadership:', options: ['Being served', 'Serving and developing team', 'Avoiding responsibility', 'Following'], correct: 1 },
    { id: 8, question: 'Lead by example:', options: ['Give orders', 'Model desired behavior', 'Do everything', 'No delegation'], correct: 1 },
    { id: 9, question: 'Effective delegation:', options: ['Dump tasks', 'Develop through responsibility', 'Avoid work', 'Control all'], correct: 1 },
    { id: 10, question: 'Leadership without authority:', options: ['Force', 'Build influence through competence', 'Title', 'Aggression'], correct: 1 },
    // Conflict Management (11-15)
    { id: 11, question: 'Healthy conflict:', options: ['Avoid', 'Can improve decisions', 'Always destructive', 'Team failing'], correct: 1 },
    { id: 12, question: 'When conflicts arise:', options: ['Ignore', 'Address early', 'Wait', 'Blame'], correct: 1 },
    { id: 13, question: 'Separate people from problem:', options: ['Isolate', 'Focus on issue not personalities', 'Remove members', 'Avoid'], correct: 1 },
    { id: 14, question: 'Win-win solutions:', options: ['Impossible', 'Satisfy all interests', 'One wins', 'Compromise quality'], correct: 1 },
    { id: 15, question: 'Best conflict approach:', options: ['Aggressive', 'Collaborative problem-solving', 'Avoidance', 'Competition'], correct: 1 },
    // Remote Collaboration (16-20)
    { id: 16, question: 'Async communication:', options: ['Fast replies', 'No immediate response needed', 'Video calls', 'Phone'], correct: 1 },
    { id: 17, question: 'Remote teams should:', options: ['Under-communicate', 'Over-communicate intentionally', 'Avoid communication', 'Email only'], correct: 1 },
    { id: 18, question: 'Virtual rapport:', options: ['Avoid personal', 'Casual chats and video', 'Text only', 'Minimal'], correct: 1 },
    { id: 19, question: 'Time zones:', options: ['Ignore', 'Respect and schedule thoughtfully', 'Expect immediate', 'Work 24/7'], correct: 1 },
    { id: 20, question: 'Remote tools:', options: ['Use all', 'Right tool for purpose', 'Avoid', 'One only'], correct: 1 },
    // Cross-functional (21-25)
    { id: 21, question: 'Cross-functional teams:', options: ['Same expertise', 'Different departments/specialties', 'Only managers', 'One department'], correct: 1 },
    { id: 22, question: 'Across functions:', options: ['Use your jargon', 'Translate between domains', 'Avoid communication', 'Demand adaptation'], correct: 1 },
    { id: 23, question: 'Different priorities:', options: ['Cause conflict', 'Align around common goals', 'Ignore', 'Competition'], correct: 1 },
    { id: 24, question: 'Respect expertise:', options: ['Defer to all', 'Value each unique contribution', 'Only trust own', 'Ignore'], correct: 1 },
    { id: 25, question: 'Cross-functional success:', options: ['Avoid others', 'Focus on shared outcomes', 'Territorial', 'Silos'], correct: 1 },
    // Team Building (26-30)
    { id: 26, question: 'Team trust needs:', options: ['Time only', 'Vulnerability and reliability', 'Perfection', 'No mistakes'], correct: 1 },
    { id: 27, question: 'Team building:', options: ['Work only', 'Connection and shared identity', 'Forced fun', 'Avoid personal'], correct: 1 },
    { id: 28, question: 'Celebrate wins to:', options: ['Show off', 'Build morale and identity', 'Competition', 'Waste time'], correct: 1 },
    { id: 29, question: 'Support members by:', options: ['Do their work', 'Offer help and encouragement', 'Criticize', 'Ignore'], correct: 1 },
    { id: 30, question: 'Team identity creates:', options: ['Division', 'Cohesion and commitment', 'Exclusivity', 'Problems'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Teamwork master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong collaboration skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review teamwork techniques!', xpReward: 100 }
  }
};
