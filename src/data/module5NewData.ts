// Module 5: Design Thinking - Creativity to Solve Problems

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

export const module5Data: SubtopicData[] = [
  {
    id: 'empathy',
    title: 'Empathy',
    emoji: '❤️',
    context: 'personal' as const,
    discover: {
      scenario: 'You struggle to understand user needs or team perspectives, leading to solutions that miss the mark.',
      problemExplanation: ['Assume you know what others need', 'Skip user research', 'Do not listen deeply', 'Project own biases'],
      solutionApproach: ['Practice active listening', 'Conduct user interviews', 'Create empathy maps', 'Shadow and observe users', 'Suspend judgment']
    },
    video: { title: 'Developing Empathy', duration: 6, content: ['Empathy is understanding others deeply.', 'Set aside your assumptions and biases.', 'Listen to understand, not to respond.', 'Ask open-ended questions.', 'Observe behavior in natural context.', 'Create empathy maps: what users think, feel, say, do.'] },
    quiz: {
      title: 'Empathy Quiz',
      questions: [
        { id: 1, question: 'Empathy in design means:', options: ['Sympathy', 'Deeply understanding user needs and feelings', 'Agreeing with everyone', 'Being nice'], correct: 1 },
        { id: 2, question: 'Empathy maps capture:', options: ['Routes', 'What users think, feel, say, do', 'Emotions only', 'Demographics'], correct: 1 },
        { id: 3, question: 'To develop empathy:', options: ['Assume you know', 'Listen deeply and observe', 'Skip research', 'Use templates'], correct: 1 },
        { id: 4, question: 'Open-ended questions:', options: ['Yes/no answers', 'Encourage detailed responses', 'Limit discussion', 'Are inefficient'], correct: 1 },
        { id: 5, question: 'Suspend judgment means:', options: ['Never judge', 'Set aside biases to understand first', 'Agree with all', 'Have no opinions'], correct: 1 }
      ]
    },
    challenge: { title: 'Empathy Challenge', description: 'Develop deep user understanding', contexts: {
      academic: { title: 'Academic Empathy', description: 'Understand learning needs', instructions: ['Interview classmates', 'Create empathy maps', 'Observe study patterns', 'Design better solutions'], successCriteria: ['Deep user understanding', 'Empathy maps created', 'Solutions address real needs'] },
      professional: { title: 'Professional Empathy', description: 'Understand customer/user needs', instructions: ['Conduct user research', 'Build empathy maps', 'Shadow users', 'Design user-centric solutions'], successCriteria: ['Strong user insights', 'User-validated solutions', 'Business impact'] },
      personal: { title: 'Personal Empathy', description: 'Understand personal relationships', instructions: ['Practice deep listening', 'Understand perspectives', 'Build empathy'], successCriteria: ['Stronger relationships', 'Better understanding', 'Deeper connections'] }
    } },
    feedback: { strengths: ['Strong listening', 'Good user understanding', 'Set aside biases well'], improvements: ['Do more user research', 'Create more empathy maps', 'Observe more'], nextSteps: ['Practice empathy daily', 'Study empathy techniques', 'Teach empathy'] },
    badge: { name: 'Empathy Expert', emoji: '❤️', description: 'Master of understanding others' },
    shareMessage: 'Just developed deep empathy skills! ❤️ #DesignThinking #Empathy'
  },
  {
    id: 'ideation',
    title: 'Ideation',
    emoji: '💭',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to generate innovative solutions but get stuck with the first obvious idea or fear sharing wild ideas.',
      problemExplanation: ['Settle for first idea', 'Fear of bad ideas', 'Judging too early', 'Not enough ideation techniques'],
      solutionApproach: ['Defer judgment during brainstorming', 'Quantity breeds quality', 'Use SCAMPER and other techniques', 'Build on others ideas', 'Think divergently before converging']
    },
    video: { title: 'Effective Ideation', duration: 6, content: ['Ideation generates many possible solutions.', 'Diverge first: generate lots of ideas without judgment.', 'Wild ideas welcome: they spark innovation.', 'Build on others ideas: yes and instead of yes but.', 'SCAMPER: Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse.', 'Then converge: evaluate and select best ideas.'] },
    quiz: {
      title: 'Ideation Quiz',
      questions: [
        { id: 6, question: 'Ideation phase should:', options: ['Judge immediately', 'Generate many ideas without judgment', 'Find one good idea', 'Avoid wild ideas'], correct: 1 },
        { id: 7, question: 'Wild ideas in brainstorming:', options: ['Should be avoided', 'Welcome - they spark innovation', 'Are wastes of time', 'Should be criticized'], correct: 1 },
        { id: 8, question: 'Build on ideas with:', options: ['Yes but', 'Yes and', 'No', 'Criticism'], correct: 1 },
        { id: 9, question: 'Divergent thinking:', options: ['Narrow quickly', 'Generate many diverse ideas', 'Find one answer', 'Follow rules'], correct: 1 },
        { id: 10, question: 'Quantity in ideation:', options: ['Wastes time', 'Breeds quality through variety', 'Is unnecessary', 'Confuses'], correct: 1 }
      ]
    },
    challenge: { title: 'Ideation Challenge', description: 'Master creative idea generation', contexts: {
      academic: { title: 'Academic Ideation', description: 'Generate academic solutions', instructions: ['Identify academic challenge', 'Brainstorm many solutions', 'Use SCAMPER', 'Defer judgment'], successCriteria: ['Generate 20+ ideas', 'Include wild ideas', 'Build on others ideas'] },
      professional: { title: 'Professional Ideation', description: 'Innovate in business', instructions: ['Business challenge', 'Facilitate ideation session', 'Use techniques', 'Converge to best ideas'], successCriteria: ['Many innovative ideas', 'Team engagement', 'Selected strong solutions'] },
      personal: { title: 'Personal Ideation', description: 'Creative personal solutions', instructions: ['Personal challenge', 'Brainstorm creatively', 'No judgment initially'], successCriteria: ['Many creative ideas', 'Innovative solutions', 'Best idea selected'] }
    } },
    feedback: { strengths: ['Generate many ideas', 'Welcome wild ideas', 'Build on others'], improvements: ['Defer judgment longer', 'Use more techniques', 'Facilitate better'], nextSteps: ['Practice ideation', 'Learn more techniques', 'Facilitate sessions'] },
    badge: { name: 'Ideation Master', emoji: '💭', description: 'Expert in creative idea generation' },
    shareMessage: 'Just mastered ideation techniques! 💭 #DesignThinking #Innovation'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    emoji: '🛠️',
    context: 'professional' as const,
    discover: {
      scenario: 'You spend months building solutions only to find they do not meet user needs. You need to test ideas quickly before full investment.',
      problemExplanation: ['Build complete solutions before testing', 'Fear of imperfect prototypes', 'Not testing with users', 'Waste time and resources'],
      solutionApproach: ['Build quick, low-fidelity prototypes', 'Test early and often', 'Fail fast and cheap', 'Iterate based on feedback', 'Progress from low to high fidelity']
    },
    video: { title: 'Rapid Prototyping', duration: 6, content: ['Prototypes make ideas tangible for testing.', 'Start low-fidelity: paper sketches, wireframes.', 'Goal is to test, not to impress.', 'Test with real users early.', 'Fail fast and cheap: learn without big investment.', 'Iterate: refine based on feedback.'] },
    quiz: {
      title: 'Prototyping Quiz',
      questions: [
        { id: 11, question: 'Prototyping purpose:', options: ['Make perfect product', 'Test ideas quickly and cheaply', 'Impress stakeholders', 'Waste time'], correct: 1 },
        { id: 12, question: 'Start with:', options: ['High-fidelity perfect', 'Low-fidelity rough prototypes', 'Final product', 'No prototypes'], correct: 1 },
        { id: 13, question: 'Fail fast means:', options: ['Give up quickly', 'Learn quickly from cheap failures', 'Avoid failure', 'Fail publicly'], correct: 1 },
        { id: 14, question: 'Test prototypes with:', options: ['No one', 'Real users early and often', 'Only experts', 'After perfecting'], correct: 1 },
        { id: 15, question: 'Prototype fidelity should:', options: ['Always be high', 'Progress from low to high as you learn', 'Stay low', 'Be perfect'], correct: 1 }
      ]
    },
    challenge: { title: 'Prototyping Challenge', description: 'Master rapid prototyping and testing', contexts: {
      academic: { title: 'Academic Prototyping', description: 'Prototype academic solutions', instructions: ['Create low-fidelity prototype', 'Test with peers', 'Iterate based on feedback', 'Refine'], successCriteria: ['Multiple prototype iterations', 'User-tested', 'Improved through feedback'] },
      professional: { title: 'Professional Prototyping', description: 'Prototype business solutions', instructions: ['Build quick prototype', 'Test with users/customers', 'Iterate rapidly', 'Develop winner'], successCriteria: ['Rapid iteration', 'User validation', 'Market-ready solution'] },
      personal: { title: 'Personal Prototyping', description: 'Test personal ideas', instructions: ['Prototype personal solution', 'Test in real life', 'Learn and iterate'], successCriteria: ['Tested ideas', 'Learned from failures', 'Better solutions'] }
    } },
    feedback: { strengths: ['Prototype quickly', 'Test effectively', 'Iterate well'], improvements: ['Start with lower fidelity', 'Test with more users', 'Iterate faster'], nextSteps: ['Practice rapid prototyping', 'Learn prototyping tools', 'Teach prototyping'] },
    badge: { name: 'Prototype Pro', emoji: '🛠️', description: 'Expert in rapid prototyping' },
    shareMessage: 'Just mastered rapid prototyping! 🛠️ #DesignThinking #Prototyping'
  },
  {
    id: 'testing',
    title: 'Testing',
    emoji: '🧪',
    context: 'professional' as const,
    discover: {
      scenario: 'You build solutions based on assumptions rather than testing with real users, leading to products that nobody wants.',
      problemExplanation: ['Assume instead of test', 'No user validation', 'Confirmation bias', 'Fear of negative feedback'],
      solutionApproach: ['Test with real users', 'Create testing hypotheses', 'Observe user behavior', 'Gather quantitative and qualitative data', 'Welcome negative feedback']
    },
    video: { title: 'User Testing Fundamentals', duration: 6, content: ['Testing validates or invalidates assumptions.', 'Test with real users in real contexts.', 'Watch what users do, not just what they say.', 'Create clear testing hypotheses.', 'Welcome negative feedback: it saves you from bigger mistakes.', 'Iterate based on test results.'] },
    quiz: {
      title: 'Testing Quiz',
      questions: [
        { id: 16, question: 'User testing purpose:', options: ['Confirm you are right', 'Validate or invalidate assumptions', 'Impress users', 'Waste time'], correct: 1 },
        { id: 17, question: 'Watch what users:', options: ['Say only', 'Do (behavior over words)', 'Think', 'Want'], correct: 1 },
        { id: 18, question: 'Negative feedback:', options: ['Should be avoided', 'Is valuable learning opportunity', 'Means failure', 'Should be ignored'], correct: 1 },
        { id: 19, question: 'Testing hypotheses are:', options: ['Unnecessary', 'Clear statements of what you are testing', 'Random guesses', 'Final conclusions'], correct: 1 },
        { id: 20, question: 'Test with:', options: ['Anyone', 'Real target users in real contexts', 'Only friends', 'Experts only'], correct: 1 }
      ]
    },
    challenge: { title: 'Testing Challenge', description: 'Master user testing and validation', contexts: {
      academic: { title: 'Academic Testing', description: 'Test academic solutions', instructions: ['Create testing hypothesis', 'Test with target users', 'Gather feedback', 'Iterate'], successCriteria: ['Clear hypotheses', 'Real user testing', 'Actionable insights'] },
      professional: { title: 'Professional Testing', description: 'Validate business solutions', instructions: ['Define what to test', 'Test with customers', 'Gather data', 'Make decisions'], successCriteria: ['Validated solutions', 'Data-driven decisions', 'User satisfaction'] },
      personal: { title: 'Personal Testing', description: 'Test personal solutions', instructions: ['Test personal idea', 'Gather feedback', 'Learn and adjust'], successCriteria: ['Tested solutions', 'User feedback', 'Improved outcomes'] }
    } },
    feedback: { strengths: ['Test effectively', 'Welcome feedback', 'Iterate based on data'], improvements: ['Test more users', 'Create better hypotheses', 'Gather more data'], nextSteps: ['Practice testing', 'Learn testing methods', 'Build testing culture'] },
    badge: { name: 'Testing Expert', emoji: '🧪', description: 'Master of user validation' },
    shareMessage: 'Just mastered user testing! 🧪 #DesignThinking #UserTesting'
  },
  {
    id: 'iteration',
    title: 'Iteration',
    emoji: '🔄',
    context: 'professional' as const,
    discover: {
      scenario: 'You expect to get solutions perfect on the first try, leading to frustration and suboptimal results.',
      problemExplanation: ['Perfectionism on first try', 'Fear of iteration as failure', 'Not building on learnings', 'Linear instead of cyclical thinking'],
      solutionApproach: ['Embrace iterative mindset', 'Learn from each cycle', 'Improve incrementally', 'Build, test, learn, repeat', 'Progress over perfection']
    },
    video: { title: 'Power of Iteration', duration: 6, content: ['Design thinking is iterative, not linear.', 'Each cycle improves the solution.', 'Embrace "good enough to test" over "perfect before shipping".', 'Learn from each iteration.', 'Iteration is not failure, it is progress.', 'Build, measure, learn, repeat.'] },
    quiz: {
      title: 'Iteration Quiz',
      questions: [
        { id: 21, question: 'Iteration in design thinking:', options: ['Means failure', 'Is the path to better solutions', 'Should be avoided', 'Wastes time'], correct: 1 },
        { id: 22, question: 'Each iteration:', options: ['Starts from scratch', 'Builds on learnings from previous', 'Is identical', 'Gets worse'], correct: 1 },
        { id: 23, question: 'Ship when:', options: ['Perfect', 'Good enough to learn from users', 'Never ready', 'No testing done'], correct: 1 },
        { id: 24, question: 'Iteration mindset:', options: ['Get it right first time', 'Learn and improve continuously', 'Avoid changes', 'Never finish'], correct: 1 },
        { id: 25, question: 'Build-Measure-Learn cycle:', options: ['Happens once', 'Repeats continuously', 'Is optional', 'Too slow'], correct: 1 }
      ]
    },
    challenge: { title: 'Iteration Challenge', description: 'Master iterative improvement', contexts: {
      academic: { title: 'Academic Iteration', description: 'Iterate on academic work', instructions: ['Create initial solution', 'Test and gather feedback', 'Improve iteratively', 'Track improvements'], successCriteria: ['Multiple iterations', 'Clear improvements', 'Learning documented'] },
      professional: { title: 'Professional Iteration', description: 'Build iteratively', instructions: ['Start with MVP', 'Test with users', 'Iterate based on data', 'Improve continuously'], successCriteria: ['Rapid iteration cycles', 'User-driven improvements', 'Better product'] },
      personal: { title: 'Personal Iteration', description: 'Improve through iteration', instructions: ['Start personal project', 'Test and learn', 'Improve iteratively'], successCriteria: ['Multiple iterations', 'Continuous improvement', 'Better outcomes'] }
    } },
    feedback: { strengths: ['Embrace iteration', 'Learn from each cycle', 'Improve continuously'], improvements: ['Iterate faster', 'Learn more per cycle', 'Document learnings'], nextSteps: ['Build iteration habit', 'Teach iteration', 'Apply everywhere'] },
    badge: { name: 'Iteration Master', emoji: '🔄', description: 'Expert in continuous iteration' },
    shareMessage: 'Just mastered iterative design! 🔄 #DesignThinking #Iteration'
  },
  {
    id: 'user-centered-design',
    title: 'User-Centered Design',
    emoji: '👥',
    context: 'professional' as const,
    discover: {
      scenario: 'Your solutions are technically sound but users find them confusing or unhelpful because they were not designed with users at the center.',
      problemExplanation: ['Design for yourself, not users', 'Skip user involvement', 'Ignore user feedback', 'Technology-first instead of user-first'],
      solutionApproach: ['Involve users throughout process', 'Design for accessibility and inclusion', 'Test with diverse users', 'Iterate based on user feedback', 'Measure user satisfaction']
    },
    video: { title: 'User-Centered Design', duration: 6, content: ['Users are at the center of design thinking.', 'Involve users from start to finish.', 'Design for real people in real contexts.', 'Accessibility: design for everyone including those with disabilities.', 'Test with diverse users to avoid bias.', 'User satisfaction is the ultimate metric.'] },
    quiz: {
      title: 'User-Centered Design Quiz',
      questions: [
        { id: 26, question: 'User-centered design means:', options: ['Designer decides', 'Users guide all design decisions', 'Technology first', 'Ignore users'], correct: 1 },
        { id: 27, question: 'Involve users:', options: ['Only at end', 'Throughout entire process', 'Never', 'Once at start'], correct: 1 },
        { id: 28, question: 'Accessibility means:', options: ['Only for disabled', 'Design usable by everyone', 'Extra feature', 'Optional'], correct: 1 },
        { id: 29, question: 'Test with diverse users to:', options: ['Waste time', 'Avoid bias and ensure inclusivity', 'Complicate', 'Delay'], correct: 1 },
        { id: 30, question: 'Success metric:', options: ['Technical performance', 'User satisfaction and outcomes', 'Budget', 'Speed'], correct: 1 }
      ]
    },
    challenge: { title: 'User-Centered Design Challenge', description: 'Master designing for users', contexts: {
      academic: { title: 'Academic User-Centered', description: 'Design with users', instructions: ['Academic design project', 'Involve users throughout', 'Test with diverse users', 'Iterate on feedback'], successCriteria: ['User involvement', 'Diverse testing', 'User-validated solution'] },
      professional: { title: 'Professional User-Centered', description: 'Build user-centric products', instructions: ['Business project', 'Continuous user involvement', 'Accessibility focus', 'User satisfaction'], successCriteria: ['User-driven design', 'Accessible solution', 'High user satisfaction'] },
      personal: { title: 'Personal User-Centered', description: 'Design for others', instructions: ['Personal project for others', 'Involve intended users', 'Design for their needs'], successCriteria: ['User-focused', 'Tested with users', 'Meets real needs'] }
    } },
    feedback: { strengths: ['User-focused', 'Inclusive design', 'Test with users'], improvements: ['Involve users earlier', 'More diverse testing', 'Better accessibility'], nextSteps: ['Practice user-centered design', 'Study accessibility', 'Champion users'] },
    badge: { name: 'User Champion', emoji: '👥', description: 'Expert in user-centered design' },
    shareMessage: 'Just mastered user-centered design! 👥 #DesignThinking #UX'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module5Subtopics = module5Data;

// Module 5 Assessment
export const module5Assessment: AssessmentData = {
  id: 'module5-assessment',
  title: 'Design Thinking Assessment',
  description: 'Test your design thinking and creative problem-solving mastery',
  questions: [
    // Empathy (1-5)
    { id: 1, question: 'Empathy in design:', options: ['Sympathy', 'Deep understanding of needs', 'Agreeing', 'Being nice'], correct: 1 },
    { id: 2, question: 'Empathy maps:', options: ['Routes', 'Think, feel, say, do', 'Emotions', 'Demographics'], correct: 1 },
    { id: 3, question: 'Develop empathy by:', options: ['Assume', 'Listen and observe deeply', 'Skip research', 'Templates'], correct: 1 },
    { id: 4, question: 'Open-ended questions:', options: ['Yes/no', 'Encourage detailed responses', 'Limit discussion', 'Inefficient'], correct: 1 },
    { id: 5, question: 'Suspend judgment:', options: ['Never judge', 'Set aside biases to understand', 'Agree all', 'No opinions'], correct: 1 },
    // Ideation (6-10)
    { id: 6, question: 'Ideation should:', options: ['Judge fast', 'Generate many without judgment', 'One idea', 'No wild ideas'], correct: 1 },
    { id: 7, question: 'Wild ideas:', options: ['Avoid', 'Welcome for innovation', 'Waste', 'Criticize'], correct: 1 },
    { id: 8, question: 'Build on ideas:', options: ['Yes but', 'Yes and', 'No', 'Criticize'], correct: 1 },
    { id: 9, question: 'Divergent thinking:', options: ['Narrow', 'Generate many diverse', 'One answer', 'Follow rules'], correct: 1 },
    { id: 10, question: 'Quantity in ideation:', options: ['Wastes time', 'Breeds quality', 'Unnecessary', 'Confuses'], correct: 1 },
    // Prototyping (11-15)
    { id: 11, question: 'Prototyping purpose:', options: ['Perfect product', 'Test quickly and cheaply', 'Impress', 'Waste'], correct: 1 },
    { id: 12, question: 'Start with:', options: ['High-fidelity', 'Low-fidelity rough', 'Final product', 'No prototypes'], correct: 1 },
    { id: 13, question: 'Fail fast:', options: ['Give up', 'Learn quickly from cheap failures', 'Avoid failure', 'Fail publicly'], correct: 1 },
    { id: 14, question: 'Test with:', options: ['No one', 'Real users early', 'Only experts', 'After perfect'], correct: 1 },
    { id: 15, question: 'Fidelity should:', options: ['Always high', 'Progress low to high', 'Stay low', 'Be perfect'], correct: 1 },
    // Testing (16-20)
    { id: 16, question: 'User testing:', options: ['Confirm right', 'Validate or invalidate assumptions', 'Impress', 'Waste'], correct: 1 },
    { id: 17, question: 'Watch users:', options: ['Say', 'Do (behavior)', 'Think', 'Want'], correct: 1 },
    { id: 18, question: 'Negative feedback:', options: ['Avoid', 'Valuable learning', 'Failure', 'Ignore'], correct: 1 },
    { id: 19, question: 'Hypotheses are:', options: ['Unnecessary', 'Clear test statements', 'Guesses', 'Conclusions'], correct: 1 },
    { id: 20, question: 'Test with:', options: ['Anyone', 'Real target users', 'Friends only', 'Experts only'], correct: 1 },
    // Iteration (21-25)
    { id: 21, question: 'Iteration:', options: ['Failure', 'Path to better solutions', 'Avoid', 'Wastes time'], correct: 1 },
    { id: 22, question: 'Each iteration:', options: ['From scratch', 'Builds on learnings', 'Identical', 'Worse'], correct: 1 },
    { id: 23, question: 'Ship when:', options: ['Perfect', 'Good enough to learn', 'Never', 'Untested'], correct: 1 },
    { id: 24, question: 'Iteration mindset:', options: ['Right first time', 'Continuous learning', 'No changes', 'Never finish'], correct: 1 },
    { id: 25, question: 'Build-Measure-Learn:', options: ['Once', 'Repeats continuously', 'Optional', 'Slow'], correct: 1 },
    // User-Centered (26-30)
    { id: 26, question: 'User-centered:', options: ['Designer decides', 'Users guide decisions', 'Technology first', 'Ignore users'], correct: 1 },
    { id: 27, question: 'Involve users:', options: ['At end', 'Throughout process', 'Never', 'Once'], correct: 1 },
    { id: 28, question: 'Accessibility:', options: ['For disabled only', 'Usable by everyone', 'Extra', 'Optional'], correct: 1 },
    { id: 29, question: 'Diverse testing:', options: ['Wastes time', 'Avoids bias ensures inclusivity', 'Complicates', 'Delays'], correct: 1 },
    { id: 30, question: 'Success metric:', options: ['Technical', 'User satisfaction', 'Budget', 'Speed'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Design thinking master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong design skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review design thinking!', xpReward: 100 }
  }
};
