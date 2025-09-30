// Module 4: Critical Thinking & Problem Solving
// Comprehensive data for Gen Z students

export interface SubtopicData {
  id: string;
  title: string;
  emoji: string;
  context: 'academic' | 'professional' | 'personal';
  discover: {
    scenario: string;
    problemExplanation: string[];
    solutionApproach: string[];
  };
  video: {
    title: string;
    duration: number;
    content: string[];
    script?: string;
  };
  quiz: {
    title: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      correct: number;
      explanation?: string;
    }[];
  };
  challenge: {
    title: string;
    description: string;
    contexts: {
      academic: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
      professional: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
      personal: {
        title: string;
        description: string;
        instructions: string[];
        successCriteria: string[];
      };
    };
  };
  feedback: {
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
  badge: {
    name: string;
    emoji: string;
    description: string;
  };
  shareMessage: string;
}

export interface AssessmentData {
  id: string;
  title: string;
  description: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correct: number;
    explanation?: string;
  }[];
  gradingScale: {
    excellent: { min: number; max: number; message: string; xpReward: number };
    good: { min: number; max: number; message: string; xpReward: number };
    satisfactory: { min: number; max: number; message: string; xpReward: number };
    needsImprovement: { min: number; max: number; message: string; xpReward: number };
  };
}

export interface ModuleProgress {
  moduleId: string;
  completedSubtopics: string[];
  currentSubtopic: string;
  overallProgress: number;
  lastAccessed: Date;
  assessmentCompleted: boolean;
  assessmentScore?: number;
}

// Module 4 Subtopics Data
export const module4Data: SubtopicData[] = [
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    emoji: '🧮',
    context: 'academic' as const,
    discover: {
      scenario: 'You are presented with complex arguments in your coursework but struggle to identify flaws in reasoning or evaluate the strength of different claims.',
      problemExplanation: ['Difficulty identifying logical fallacies', 'Cannot distinguish strong vs weak arguments', 'Emotional reasoning overrides logic'],
      solutionApproach: ['Learn common logical fallacies', 'Practice identifying premises and conclusions', 'Use formal logic structures', 'Evaluate evidence systematically']
    },
    video: { title: 'Mastering Logical Reasoning', duration: 6, content: ['Logical reasoning is the foundation of critical thinking.', 'Arguments have premises (evidence) and conclusions (claims).', 'Valid arguments: if premises are true, conclusion must be true.', 'Sound arguments: valid AND premises are actually true.', 'Watch for fallacies: ad hominem, straw man, false dichotomy.', 'Practice breaking down arguments into their components.'] },
    quiz: {
      title: 'Logical Reasoning Quiz',
      questions: [
        { id: 1, question: 'A valid argument means:', options: ['Conclusion is true', 'If premises are true, conclusion must follow', 'Everyone agrees', 'It sounds good'], correct: 1 },
        { id: 2, question: 'Ad hominem fallacy attacks:', options: ['The argument', 'The person making argument', 'The evidence', 'The conclusion'], correct: 1 },
        { id: 3, question: 'Straw man fallacy involves:', options: ['Strong arguments', 'Misrepresenting opposing view to attack it', 'Valid reasoning', 'Good evidence'], correct: 1 },
        { id: 4, question: 'False dichotomy presents:', options: ['All options', 'Only two options when more exist', 'No options', 'True choices'], correct: 1 },
        { id: 5, question: 'Sound argument requires:', options: ['Just valid structure', 'Valid structure AND true premises', 'Popular opinion', 'Emotional appeal'], correct: 1 }
      ]
    },
    challenge: { title: 'Logical Reasoning Challenge', description: 'Develop logical analysis skills', contexts: { academic: { title: 'Academic Logic', description: 'Apply logical reasoning to coursework', instructions: ['Analyze academic arguments', 'Identify fallacies', 'Evaluate evidence', 'Build sound arguments'], successCriteria: ['Identify logical structures', 'Spot fallacies', 'Construct valid arguments'] }, professional: { title: 'Professional Logic', description: 'Use logic in business decisions', instructions: ['Analyze business proposals', 'Evaluate claims critically', 'Build logical cases', 'Identify flawed reasoning'], successCriteria: ['Make logical decisions', 'Spot business fallacies', 'Present sound reasoning'] }, personal: { title: 'Personal Logic', description: 'Apply logic to life decisions', instructions: ['Evaluate personal decisions logically', 'Identify emotional vs logical reasoning', 'Build sound personal arguments'], successCriteria: ['Make logical personal decisions', 'Separate emotion from logic', 'Reason soundly'] } } },
    feedback: { strengths: ['Strong logical analysis', 'Good fallacy recognition', 'Clear reasoning'], improvements: ['Practice more formal logic', 'Identify subtle fallacies', 'Build stronger arguments'], nextSteps: ['Continue practicing', 'Study formal logic', 'Teach others'] },
    badge: { name: 'Logic Master', emoji: '🧮', description: 'Expert in logical reasoning' },
    shareMessage: 'Just mastered logical reasoning! 🧮 #CriticalThinking #Logic'
  },
  {
    id: 'problem-analysis',
    title: 'Problem Analysis',
    emoji: '🔬',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team faces complex problems but jumps to solutions without fully understanding the issues, leading to wasted effort and ineffective fixes.',
      problemExplanation: ['Rushing to solutions without analysis', 'Missing root causes', 'Solving symptoms not problems'],
      solutionApproach: ['Define problems clearly', 'Break complex problems into parts', 'Use 5 Whys technique', 'Gather and analyze data', 'Identify root causes']
    },
    video: { title: 'Systematic Problem Analysis', duration: 6, content: ['Problem analysis is the foundation of problem solving.', 'Define the problem clearly before solving it.', 'Use the 5 Whys: ask why 5 times to find root cause.', 'Break complex problems into smaller parts.', 'Gather data before jumping to conclusions.', 'Distinguish symptoms from actual problems.'] },
    quiz: {
      title: 'Problem Analysis Quiz',
      questions: [
        { id: 6, question: 'The 5 Whys technique helps:', options: ['Ask 5 questions', 'Find root cause by asking why repeatedly', 'List 5 problems', 'Generate 5 solutions'], correct: 1 },
        { id: 7, question: 'First step in problem analysis:', options: ['Find solution', 'Clearly define the problem', 'Blame someone', 'Start working'], correct: 1 },
        { id: 8, question: 'Symptoms vs problems:', options: ['Same thing', 'Symptoms are effects, problems are causes', 'Symptoms are worse', 'No difference'], correct: 1 },
        { id: 9, question: 'Complex problems should be:', options: ['Solved immediately', 'Broken into smaller parts', 'Ignored', 'Left to experts'], correct: 1 },
        { id: 10, question: 'Before solving, you should:', options: ['Act fast', 'Analyze and understand the problem', 'Guess solution', 'Wait'], correct: 1 }
      ]
    },
    challenge: { title: 'Problem Analysis Challenge', description: 'Master systematic problem analysis', contexts: { academic: { title: 'Academic Analysis', description: 'Analyze academic challenges', instructions: ['Identify academic problem', 'Use 5 Whys', 'Break into parts', 'Find root cause'], successCriteria: ['Define problem clearly', 'Find root causes', 'Systematic approach'] }, professional: { title: 'Professional Analysis', description: 'Analyze business problems', instructions: ['Identify business problem', 'Gather data', 'Use analysis frameworks', 'Find root causes'], successCriteria: ['Clear problem definition', 'Data-driven analysis', 'Root cause identification'] }, personal: { title: 'Personal Analysis', description: 'Analyze personal challenges', instructions: ['Identify personal problem', 'Apply 5 Whys', 'Understand root causes'], successCriteria: ['Clear understanding', 'Root cause awareness', 'Systematic thinking'] } } },
    feedback: { strengths: ['Systematic analysis', 'Good problem definition', 'Root cause focus'], improvements: ['Gather more data', 'Use more frameworks', 'Practice 5 Whys'], nextSteps: ['Continue practicing', 'Learn more frameworks', 'Teach others'] },
    badge: { name: 'Problem Analyzer', emoji: '🔬', description: 'Expert in problem analysis' },
    shareMessage: 'Just mastered problem analysis! 🔬 #ProblemSolving #Analysis'
  },
  {
    id: 'creative-solutions',
    title: 'Creative Solutions',
    emoji: '💡',
    context: 'professional' as const,
    discover: {
      scenario: 'You face problems that traditional approaches cannot solve. You need creative thinking to find innovative solutions.',
      problemExplanation: ['Stuck in conventional thinking', 'Fear of unconventional ideas', 'Not brainstorming effectively'],
      solutionApproach: ['Use brainstorming techniques', 'Apply SCAMPER method', 'Think laterally', 'Combine unrelated concepts', 'Challenge assumptions']
    },
    video: { title: 'Creative Problem Solving', duration: 6, content: ['Creative solutions come from breaking mental patterns.', 'Brainstorming: quantity first, quality later.', 'SCAMPER: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.', 'Lateral thinking: approach problems from new angles.', 'Challenge assumptions: what if the opposite were true?', 'Combine unrelated ideas to create innovations.'] },
    quiz: {
      title: 'Creative Solutions Quiz',
      questions: [
        { id: 11, question: 'SCAMPER stands for:', options: ['A running technique', 'Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse', 'A project method', 'A testing approach'], correct: 1 },
        { id: 12, question: 'Brainstorming rule:', options: ['Critique immediately', 'Quantity over quality initially', 'One idea only', 'No wild ideas'], correct: 1 },
        { id: 13, question: 'Lateral thinking means:', options: ['Thinking sideways', 'Approaching problems from new angles', 'Linear logic', 'Traditional methods'], correct: 1 },
        { id: 14, question: 'To generate creative ideas:', options: ['Follow rules strictly', 'Challenge assumptions and combine concepts', 'Use only proven methods', 'Avoid risks'], correct: 1 },
        { id: 15, question: 'Creative solutions require:', options: ['Perfection immediately', 'Willingness to explore unconventional ideas', 'Following templates', 'Avoiding mistakes'], correct: 1 }
      ]
    },
    challenge: { title: 'Creative Solutions Challenge', description: 'Develop innovative problem-solving skills', contexts: { academic: { title: 'Academic Creativity', description: 'Find creative academic solutions', instructions: ['Identify academic challenge', 'Brainstorm unconventional approaches', 'Apply SCAMPER', 'Test creative solutions'], successCriteria: ['Generate multiple creative ideas', 'Challenge assumptions', 'Find innovative solutions'] }, professional: { title: 'Professional Creativity', description: 'Innovate in business contexts', instructions: ['Identify business challenge', 'Use creative techniques', 'Generate innovative solutions', 'Test and refine'], successCriteria: ['Multiple innovative solutions', 'Practical creativity', 'Business value'] }, personal: { title: 'Personal Creativity', description: 'Creative personal problem-solving', instructions: ['Identify personal challenge', 'Brainstorm creative approaches', 'Challenge personal assumptions'], successCriteria: ['Generate creative solutions', 'Think outside box', 'Apply innovations'] } } },
    feedback: { strengths: ['Creative thinking', 'Good ideation', 'Challenge assumptions well'], improvements: ['Generate more ideas', 'Take more creative risks', 'Combine ideas better'], nextSteps: ['Practice daily creativity', 'Learn more techniques', 'Share innovations'] },
    badge: { name: 'Creative Thinker', emoji: '💡', description: 'Master of creative problem solving' },
    shareMessage: 'Just unlocked creative problem solving! 💡 #Creativity #Innovation'
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: 'You face important decisions but struggle with analysis paralysis or make impulsive choices without proper evaluation.',
      problemExplanation: ['Too many options cause paralysis', 'Impulsive decisions without analysis', 'Difficulty evaluating tradeoffs'],
      solutionApproach: ['Use decision matrices', 'Apply pros-cons analysis', 'Consider long-term consequences', 'Use decision frameworks', 'Test decisions with small experiments']
    },
    video: { title: 'Effective Decision Making', duration: 6, content: ['Good decisions come from systematic evaluation.', 'Decision matrix: rate options against criteria.', 'Pros and cons: list and weigh each side.', 'Consider short and long-term consequences.', 'Use the 10-10-10 rule: how will you feel in 10 mins, 10 months, 10 years?', 'Test big decisions with small experiments first.'] },
    quiz: {
      title: 'Decision Making Quiz',
      questions: [
        { id: 16, question: 'Decision matrix helps by:', options: ['Making random choice', 'Systematically rating options against criteria', 'Avoiding decisions', 'Following others'], correct: 1 },
        { id: 17, question: '10-10-10 rule considers:', options: ['10 options', 'How you will feel in 10 mins, 10 months, 10 years', '10 criteria', '10 people'], correct: 1 },
        { id: 18, question: 'Analysis paralysis means:', options: ['Good analysis', 'Overthinking prevents decision', 'Quick decisions', 'No analysis'], correct: 1 },
        { id: 19, question: 'For big decisions:', options: ['Decide immediately', 'Test with small experiments first', 'Avoid deciding', 'Flip a coin'], correct: 1 },
        { id: 20, question: 'Good decisions require:', options: ['Speed only', 'Systematic evaluation of options', 'Following gut always', 'Avoiding risks'], correct: 1 }
      ]
    },
    challenge: { title: 'Decision Making Challenge', description: 'Master systematic decision-making', contexts: { academic: { title: 'Academic Decisions', description: 'Make smart academic choices', instructions: ['Face academic decision', 'List all options', 'Create decision matrix', 'Evaluate systematically'], successCriteria: ['Systematic evaluation', 'Clear criteria', 'Confident decisions'] }, professional: { title: 'Professional Decisions', description: 'Make effective business decisions', instructions: ['Identify business decision', 'Use decision frameworks', 'Evaluate tradeoffs', 'Make informed choice'], successCriteria: ['Data-driven decisions', 'Consider tradeoffs', 'Business acumen'] }, personal: { title: 'Personal Decisions', description: 'Make wise personal choices', instructions: ['Face personal decision', 'Use 10-10-10 rule', 'Evaluate options', 'Choose wisely'], successCriteria: ['Thoughtful decisions', 'Long-term thinking', 'Wise choices'] } } },
    feedback: { strengths: ['Systematic decision approach', 'Good evaluation skills', 'Consider consequences'], improvements: ['Use more decision frameworks', 'Gather more data', 'Test decisions better'], nextSteps: ['Practice decision frameworks', 'Build decision systems', 'Mentor others'] },
    badge: { name: 'Decision Maker', emoji: '⚖️', description: 'Expert in systematic decision-making' },
    shareMessage: 'Just mastered decision making! ⚖️ #DecisionMaking #CriticalThinking'
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    emoji: '🎲',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to evaluate risks in projects or decisions but struggle to identify, quantify, and mitigate potential problems.',
      problemExplanation: ['Cannot identify all risks', 'Difficulty quantifying impact', 'No systematic risk management'],
      solutionApproach: ['Use risk matrix (probability x impact)', 'Identify risk categories', 'Plan mitigation strategies', 'Monitor risks continuously']
    },
    video: { title: 'Risk Assessment Fundamentals', duration: 6, content: ['Risk assessment evaluates potential problems.', 'Risk = Probability x Impact', 'Use risk matrix: rate likelihood and severity.', 'Categories: technical, financial, operational, reputational.', 'Mitigation: avoid, reduce, transfer, or accept risk.', 'Monitor risks continuously and adjust plans.'] },
    quiz: {
      title: 'Risk Assessment Quiz',
      questions: [
        { id: 21, question: 'Risk equals:', options: ['Impact only', 'Probability times Impact', 'Uncertainty', 'Fear'], correct: 1 },
        { id: 22, question: 'Risk matrix rates:', options: ['Cost', 'Likelihood and severity', 'Time', 'Quality'], correct: 1 },
        { id: 23, question: 'Risk mitigation strategies:', options: ['Ignore only', 'Avoid, reduce, transfer, or accept', 'Worry', 'Hope'], correct: 1 },
        { id: 24, question: 'High probability, high impact risks should:', options: ['Be ignored', 'Get highest priority attention', 'Be accepted', 'Be transferred'], correct: 1 },
        { id: 25, question: 'Risk assessment should be:', options: ['One-time', 'Continuous and updated', 'Avoided', 'Informal'], correct: 1 }
      ]
    },
    challenge: { title: 'Risk Assessment Challenge', description: 'Master risk evaluation and management', contexts: { academic: { title: 'Academic Risk', description: 'Assess academic risks', instructions: ['Identify academic project risks', 'Create risk matrix', 'Plan mitigation', 'Monitor risks'], successCriteria: ['Identify all major risks', 'Systematic assessment', 'Effective mitigation'] }, professional: { title: 'Professional Risk', description: 'Manage business risks', instructions: ['Assess project risks', 'Quantify impact', 'Build mitigation plan', 'Monitor continuously'], successCriteria: ['Comprehensive risk identification', 'Quantified assessment', 'Effective management'] }, personal: { title: 'Personal Risk', description: 'Evaluate personal risks', instructions: ['Assess personal decision risks', 'Evaluate probability and impact', 'Plan for contingencies'], successCriteria: ['Aware of risks', 'Planned mitigation', 'Informed decisions'] } } },
    feedback: { strengths: ['Good risk identification', 'Systematic assessment', 'Effective mitigation'], improvements: ['Identify more risks', 'Better quantification', 'Stronger mitigation'], nextSteps: ['Practice risk assessment', 'Learn advanced techniques', 'Build risk systems'] },
    badge: { name: 'Risk Assessor', emoji: '🎲', description: 'Expert in risk evaluation' },
    shareMessage: 'Just mastered risk assessment! 🎲 #RiskManagement #CriticalThinking'
  },
  {
    id: 'root-cause-analysis',
    title: 'Root Cause Analysis',
    emoji: '🔍',
    context: 'professional' as const,
    discover: {
      scenario: 'Problems keep recurring because you are treating symptoms rather than identifying and fixing root causes.',
      problemExplanation: ['Fixing symptoms not causes', 'Problems recur', 'No systematic root cause investigation'],
      solutionApproach: ['Use fishbone diagrams', 'Apply 5 Whys', 'Gather evidence', 'Test root cause hypotheses', 'Implement fixes that address root causes']
    },
    video: { title: 'Root Cause Analysis', duration: 6, content: ['Root cause analysis finds why problems truly occur.', 'Fishbone diagram organizes potential causes.', 'Categories: people, process, equipment, materials, environment.', '5 Whys drill down from symptom to root cause.', 'Test your root cause hypothesis with evidence.', 'Fix root causes to prevent recurrence.'] },
    quiz: {
      title: 'Root Cause Analysis Quiz',
      questions: [
        { id: 26, question: 'Root cause analysis aims to:', options: ['Fix symptoms quickly', 'Identify underlying causes of problems', 'Blame people', 'Avoid problems'], correct: 1 },
        { id: 27, question: 'Fishbone diagram organizes:', options: ['Fish types', 'Potential causes by category', 'Solutions', 'Timelines'], correct: 1 },
        { id: 28, question: 'Common cause categories:', options: ['Just people', 'People, process, equipment, materials, environment', 'Only equipment', 'Random'], correct: 1 },
        { id: 29, question: 'Why use 5 Whys:', options: ['Ask 5 people', 'Drill down to root cause', 'List 5 causes', 'Take 5 minutes'], correct: 1 },
        { id: 30, question: 'After finding root cause:', options: ['Stop there', 'Implement fixes to prevent recurrence', 'Blame someone', 'Document only'], correct: 1 }
      ]
    },
    challenge: { title: 'Root Cause Challenge', description: 'Master root cause analysis', contexts: { academic: { title: 'Academic Root Cause', description: 'Find academic problem roots', instructions: ['Identify recurring academic issue', 'Apply 5 Whys', 'Use fishbone diagram', 'Fix root cause'], successCriteria: ['Identify root cause', 'Prevent recurrence', 'Systematic approach'] }, professional: { title: 'Professional Root Cause', description: 'Solve business problems at root', instructions: ['Identify recurring business problem', 'Use RCA techniques', 'Test root cause', 'Implement lasting fix'], successCriteria: ['Find root causes', 'Prevent recurrence', 'Business impact'] }, personal: { title: 'Personal Root Cause', description: 'Understand personal patterns', instructions: ['Identify recurring personal issue', 'Apply 5 Whys', 'Understand root cause'], successCriteria: ['Self-awareness', 'Root understanding', 'Lasting change'] } } },
    feedback: { strengths: ['Find root causes well', 'Systematic investigation', 'Prevent recurrence'], improvements: ['Use more RCA tools', 'Test hypotheses better', 'Implement fixes more'], nextSteps: ['Practice RCA regularly', 'Learn advanced techniques', 'Teach others RCA'] },
    badge: { name: 'Root Cause Detective', emoji: '🔍', description: 'Expert in root cause analysis' },
    shareMessage: 'Just mastered root cause analysis! 🔍 #ProblemSolving #RCA'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => {
  console.log(`Updated progress for ${subtopicId}: ${progress}%`);
};

export const generatePersonalizedFeedback = (responses: any[]): string => {
  return "Personalized feedback based on your responses...";
};

export const loadModuleProgress = (): any => {
  return {};
};

export const saveModuleProgress = (progress: any): void => {
  console.log('Saving module progress:', progress);
};

export const module4Subtopics = module4Data;

// Module 4 Assessment - 30 Questions
export const module4Assessment: AssessmentData = {
  id: 'module4-assessment',
  title: 'Critical Thinking & Problem Solving Assessment',
  description: 'Test your critical thinking and problem-solving mastery',
  questions: [
    // Logical Reasoning (1-5)
    { id: 1, question: 'Valid argument means:', options: ['True conclusion', 'If premises true, conclusion follows', 'Popular', 'Sounds good'], correct: 1 },
    { id: 2, question: 'Ad hominem attacks:', options: ['Argument', 'The person', 'Evidence', 'Conclusion'], correct: 1 },
    { id: 3, question: 'Straw man involves:', options: ['Strong argument', 'Misrepresenting view to attack', 'Valid reasoning', 'Good evidence'], correct: 1 },
    { id: 4, question: 'False dichotomy:', options: ['All options', 'Only two when more exist', 'No options', 'True choice'], correct: 1 },
    { id: 5, question: 'Sound argument needs:', options: ['Just valid', 'Valid AND true premises', 'Opinion', 'Emotion'], correct: 1 },
    // Problem Analysis (6-10)
    { id: 6, question: '5 Whys helps:', options: ['5 questions', 'Find root cause', '5 problems', '5 solutions'], correct: 1 },
    { id: 7, question: 'First step:', options: ['Solution', 'Define problem', 'Blame', 'Start work'], correct: 1 },
    { id: 8, question: 'Symptoms vs problems:', options: ['Same', 'Symptoms are effects, problems are causes', 'Worse', 'None'], correct: 1 },
    { id: 9, question: 'Complex problems:', options: ['Solve now', 'Break into parts', 'Ignore', 'Leave to experts'], correct: 1 },
    { id: 10, question: 'Before solving:', options: ['Act fast', 'Analyze and understand', 'Guess', 'Wait'], correct: 1 },
    // Creative Solutions (11-15)
    { id: 11, question: 'SCAMPER is:', options: ['Running', 'Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse', 'Project method', 'Testing'], correct: 1 },
    { id: 12, question: 'Brainstorming rule:', options: ['Critique now', 'Quantity over quality first', 'One idea', 'No wild ideas'], correct: 1 },
    { id: 13, question: 'Lateral thinking:', options: ['Sideways', 'New angles to problems', 'Linear', 'Traditional'], correct: 1 },
    { id: 14, question: 'Creative ideas need:', options: ['Rules', 'Challenge assumptions', 'Proven only', 'No risks'], correct: 1 },
    { id: 15, question: 'Creativity requires:', options: ['Perfection', 'Explore unconventional ideas', 'Templates', 'No mistakes'], correct: 1 },
    // Decision Making (16-20)
    { id: 16, question: 'Decision matrix:', options: ['Random', 'Rate options vs criteria', 'Avoid decisions', 'Follow others'], correct: 1 },
    { id: 17, question: '10-10-10 rule:', options: ['10 options', '10 mins, 10 months, 10 years', '10 criteria', '10 people'], correct: 1 },
    { id: 18, question: 'Analysis paralysis:', options: ['Good analysis', 'Overthinking prevents decision', 'Quick', 'None'], correct: 1 },
    { id: 19, question: 'Big decisions:', options: ['Decide now', 'Test with experiments', 'Avoid', 'Coin flip'], correct: 1 },
    { id: 20, question: 'Decisions need:', options: ['Speed only', 'Systematic evaluation', 'Gut only', 'No risk'], correct: 1 },
    // Risk Assessment (21-25)
    { id: 21, question: 'Risk equals:', options: ['Impact', 'Probability times Impact', 'Uncertainty', 'Fear'], correct: 1 },
    { id: 22, question: 'Risk matrix rates:', options: ['Cost', 'Likelihood and severity', 'Time', 'Quality'], correct: 1 },
    { id: 23, question: 'Mitigation strategies:', options: ['Ignore', 'Avoid, reduce, transfer, accept', 'Worry', 'Hope'], correct: 1 },
    { id: 24, question: 'High risk needs:', options: ['Ignore', 'Highest priority', 'Accept', 'Transfer'], correct: 1 },
    { id: 25, question: 'Risk assessment:', options: ['One-time', 'Continuous', 'Avoid', 'Informal'], correct: 1 },
    // Root Cause (26-30)
    { id: 26, question: 'Root cause analysis:', options: ['Fix symptoms', 'Identify underlying causes', 'Blame', 'Avoid'], correct: 1 },
    { id: 27, question: 'Fishbone organizes:', options: ['Fish', 'Causes by category', 'Solutions', 'Time'], correct: 1 },
    { id: 28, question: 'Cause categories:', options: ['People only', 'People, process, equipment, materials, environment', 'Equipment only', 'Random'], correct: 1 },
    { id: 29, question: '5 Whys purpose:', options: ['Ask 5 people', 'Drill to root cause', '5 causes', '5 minutes'], correct: 1 },
    { id: 30, question: 'After root cause:', options: ['Stop', 'Fix to prevent recurrence', 'Blame', 'Document only'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Critical thinking master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong problem-solving skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review critical thinking techniques!', xpReward: 100 }
  }
};
