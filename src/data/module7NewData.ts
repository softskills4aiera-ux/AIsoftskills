// Module 7: Data-Driven Decision Making

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

export const module7Data: SubtopicData[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    emoji: '📊',
    context: 'academic' as const,
    discover: {
      scenario: 'You have access to data but struggle to analyze it effectively to find meaningful insights and patterns.',
      problemExplanation: ['Overwhelmed by data', 'Cannot find patterns', 'No systematic analysis approach', 'Miss key insights'],
      solutionApproach: ['Clean and organize data first', 'Use descriptive statistics', 'Look for patterns and trends', 'Ask good questions of data', 'Use visualization to understand']
    },
    video: { title: 'Data Analysis Fundamentals', duration: 6, content: ['Data analysis turns raw data into insights.', 'Start with clean, organized data.', 'Descriptive statistics: mean, median, mode, range.', 'Look for patterns, trends, outliers.', 'Ask: What story does this data tell?', 'Visualization helps understanding.'] },
    quiz: {
      title: 'Data Analysis Quiz',
      questions: [
        { id: 1, question: 'First step in data analysis:', options: ['Jump to conclusions', 'Clean and organize data', 'Visualize immediately', 'Report findings'], correct: 1 },
        { id: 2, question: 'Mean, median, mode are:', options: ['Advanced techniques', 'Descriptive statistics basics', 'Unnecessary', 'Complex algorithms'], correct: 1 },
        { id: 3, question: 'Outliers are:', options: ['Errors to delete', 'Data points that differ significantly - investigate them', 'Unimportant', 'Always mistakes'], correct: 1 },
        { id: 4, question: 'Data tells:', options: ['Nothing', 'Stories and patterns when analyzed', 'Everything', 'Only facts'], correct: 1 },
        { id: 5, question: 'Visualization helps by:', options: ['Looking pretty', 'Making patterns easier to see', 'Hiding data', 'Confusing audience'], correct: 1 }
      ]
    },
    challenge: { title: 'Data Analysis Challenge', description: 'Master analyzing data for insights', contexts: {
      academic: { title: 'Academic Data Analysis', description: 'Analyze research data', instructions: ['Gather academic data', 'Clean and organize', 'Apply descriptive statistics', 'Find patterns', 'Draw conclusions'], successCriteria: ['Clean data', 'Identify patterns', 'Meaningful insights', 'Support conclusions'] },
      professional: { title: 'Professional Data Analysis', description: 'Analyze business data', instructions: ['Access business data', 'Systematic analysis', 'Find actionable insights', 'Present findings'], successCriteria: ['Actionable insights', 'Clear analysis', 'Business recommendations', 'Data-driven'] },
      personal: { title: 'Personal Data Analysis', description: 'Analyze personal data', instructions: ['Collect personal data', 'Analyze patterns', 'Find insights'], successCriteria: ['Personal insights', 'Pattern recognition', 'Informed decisions'] }
    } },
    feedback: { strengths: ['Good data organization', 'Find patterns well', 'Draw insights'], improvements: ['Use more statistics', 'Deeper analysis', 'Better visualization'], nextSteps: ['Practice analysis', 'Learn tools', 'Apply daily'] },
    badge: { name: 'Data Analyst', emoji: '📊', description: 'Expert in data analysis' },
    shareMessage: 'Just mastered data analysis! 📊 #DataAnalysis #DataDriven'
  },
  {
    id: 'statistical-thinking',
    title: 'Statistical Thinking',
    emoji: '📈',
    context: 'academic' as const,
    discover: {
      scenario: 'You struggle to interpret statistics, understand probabilities, or recognize when data is being misused.',
      problemExplanation: ['Misinterpret statistics', 'Do not understand probability', 'Fooled by misleading data', 'No statistical literacy'],
      solutionApproach: ['Learn basic probability', 'Understand correlation vs causation', 'Recognize statistical fallacies', 'Interpret confidence intervals', 'Question data sources']
    },
    video: { title: 'Statistical Thinking Basics', duration: 6, content: ['Statistics help us understand uncertainty.', 'Correlation does NOT equal causation.', 'Sample size matters: bigger is usually better.', 'Understand averages: mean vs median vs mode.', 'Confidence intervals show uncertainty range.', 'Question: How was this data collected?'] },
    quiz: {
      title: 'Statistical Thinking Quiz',
      questions: [
        { id: 6, question: 'Correlation vs causation:', options: ['Same thing', 'Correlation shows relationship, NOT that one causes the other', 'Causation is weaker', 'No difference'], correct: 1 },
        { id: 7, question: 'Larger sample sizes:', options: ['Are worse', 'Generally more reliable', 'Do not matter', 'Are too expensive'], correct: 1 },
        { id: 8, question: 'Confidence interval shows:', options: ['Certainty', 'Range of uncertainty', 'Average', 'Mode'], correct: 1 },
        { id: 9, question: 'When seeing statistics ask:', options: ['Nothing', 'How was data collected and by whom', 'Only the number', 'For more stats'], correct: 1 },
        { id: 10, question: 'Mean vs median:', options: ['Same', 'Median less affected by outliers', 'Mean is better', 'No difference'], correct: 1 }
      ]
    },
    challenge: { title: 'Statistical Thinking Challenge', description: 'Develop statistical literacy', contexts: {
      academic: { title: 'Academic Statistics', description: 'Apply statistical thinking', instructions: ['Analyze research data', 'Use appropriate statistics', 'Interpret correctly', 'Avoid fallacies'], successCriteria: ['Correct interpretation', 'Appropriate methods', 'Avoid fallacies', 'Valid conclusions'] },
      professional: { title: 'Professional Statistics', description: 'Use stats in business', instructions: ['Analyze business metrics', 'Interpret correctly', 'Communicate findings', 'Make data-driven decisions'], successCriteria: ['Accurate interpretation', 'Clear communication', 'Business insights', 'Data-driven decisions'] },
      personal: { title: 'Personal Statistics', description: 'Apply statistical thinking', instructions: ['Analyze personal data', 'Interpret statistics correctly', 'Make informed choices'], successCriteria: ['Statistical literacy', 'Informed decisions', 'Avoid misconceptions'] }
    } },
    feedback: { strengths: ['Good statistical understanding', 'Interpret correctly', 'Question data'], improvements: ['Learn more statistics', 'Practice more', 'Communicate better'], nextSteps: ['Study statistics', 'Apply regularly', 'Teach others'] },
    badge: { name: 'Statistical Thinker', emoji: '📈', description: 'Expert in statistical thinking' },
    shareMessage: 'Just mastered statistical thinking! 📈 #Statistics #DataDriven'
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    emoji: '📉',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to communicate data insights but people find your presentations confusing or lose interest in tables of numbers.',
      problemExplanation: ['Poor chart choices', 'Cluttered visualizations', 'No storytelling with data', 'Misleading visuals'],
      solutionApproach: ['Choose right chart type', 'Keep visualizations simple', 'Tell stories with data', 'Avoid misleading charts', 'Design for audience']
    },
    video: { title: 'Effective Data Visualization', duration: 6, content: ['Good visualization makes data understandable.', 'Choose right chart: bar for comparison, line for trends, pie for parts of whole.', 'Keep it simple: remove clutter, focus on message.', 'Tell a story: what should audience learn?', 'Avoid misleading: honest axes, clear scales.', 'Design for your audience understanding level.'] },
    quiz: {
      title: 'Data Visualization Quiz',
      questions: [
        { id: 11, question: 'Bar charts best for:', options: ['Trends over time', 'Comparing categories', 'Relationships', 'Parts of whole'], correct: 1 },
        { id: 12, question: 'Line charts best for:', options: ['Comparison', 'Trends over time', 'Distribution', 'Parts'], correct: 1 },
        { id: 13, question: 'Good visualization:', options: ['Shows all data', 'Is simple and focused on message', 'Is complex', 'Uses many colors'], correct: 1 },
        { id: 14, question: 'Avoid misleading by:', options: ['Hiding data', 'Using honest axes and scales', 'Manipulating scales', 'Cherry-picking'], correct: 1 },
        { id: 15, question: 'Visualize for:', options: ['Yourself', 'Your audience understanding', 'Experts only', 'Impress'], correct: 1 }
      ]
    },
    challenge: { title: 'Visualization Challenge', description: 'Master data visualization', contexts: {
      academic: { title: 'Academic Visualization', description: 'Visualize research data', instructions: ['Choose appropriate charts', 'Create clear visualizations', 'Tell data story', 'Present findings'], successCriteria: ['Clear visualizations', 'Appropriate charts', 'Compelling story', 'Audience understanding'] },
      professional: { title: 'Professional Visualization', description: 'Business data visualization', instructions: ['Visualize business data', 'Choose impactful charts', 'Tell business story', 'Drive decisions'], successCriteria: ['Business insights', 'Clear communication', 'Decision support', 'Stakeholder buy-in'] },
      personal: { title: 'Personal Visualization', description: 'Visualize personal data', instructions: ['Collect personal data', 'Create visualizations', 'Find insights'], successCriteria: ['Clear personal insights', 'Actionable patterns', 'Better decisions'] }
    } },
    feedback: { strengths: ['Choose charts well', 'Clear visualizations', 'Tell stories'], improvements: ['Simplify more', 'Try more chart types', 'Stronger storytelling'], nextSteps: ['Practice visualization', 'Learn tools', 'Study best practices'] },
    badge: { name: 'Visualization Expert', emoji: '📉', description: 'Master of data visualization' },
    shareMessage: 'Just mastered data visualization! 📉 #DataViz #DataDriven'
  },
  {
    id: 'hypothesis-testing',
    title: 'Hypothesis Testing',
    emoji: '🔬',
    context: 'academic' as const,
    discover: {
      scenario: 'You make claims based on gut feeling rather than testing hypotheses with data, leading to wrong conclusions.',
      problemExplanation: ['Assume without testing', 'Confirmation bias', 'No systematic hypothesis testing', 'Jump to conclusions'],
      solutionApproach: ['Form clear hypotheses', 'Design tests', 'Gather data systematically', 'Analyze objectively', 'Draw evidence-based conclusions']
    },
    video: { title: 'Hypothesis Testing Fundamentals', duration: 6, content: ['Hypothesis testing validates or refutes claims with data.', 'Form clear, testable hypothesis.', 'Null hypothesis: no effect or relationship.', 'Collect data systematically.', 'Analyze objectively, not to confirm bias.', 'Draw conclusions based on evidence.'] },
    quiz: {
      title: 'Hypothesis Testing Quiz',
      questions: [
        { id: 16, question: 'Hypothesis is:', options: ['Proven fact', 'Testable statement to validate or refute', 'Wild guess', 'Final conclusion'], correct: 1 },
        { id: 17, question: 'Null hypothesis states:', options: ['Your theory', 'No effect or relationship exists', 'Positive result', 'Your belief'], correct: 1 },
        { id: 18, question: 'Test hypotheses to:', options: ['Confirm beliefs', 'Objectively validate or refute with data', 'Prove you are right', 'Impress others'], correct: 1 },
        { id: 19, question: 'Confirmation bias:', options: ['Good practice', 'Seeking only data that confirms beliefs', 'Objective analysis', 'Proper testing'], correct: 1 },
        { id: 20, question: 'Draw conclusions based on:', options: ['Gut feeling', 'Evidence from systematic testing', 'Opinions', 'Hopes'], correct: 1 }
      ]
    },
    challenge: { title: 'Hypothesis Testing Challenge', description: 'Master evidence-based validation', contexts: {
      academic: { title: 'Academic Hypothesis Testing', description: 'Test academic hypotheses', instructions: ['Form clear hypothesis', 'Design experiment/study', 'Collect data', 'Analyze objectively', 'Draw conclusions'], successCriteria: ['Clear hypothesis', 'Systematic testing', 'Objective analysis', 'Evidence-based conclusions'] },
      professional: { title: 'Professional Hypothesis Testing', description: 'Test business assumptions', instructions: ['Identify business assumption', 'Form hypothesis', 'Design test', 'Gather data', 'Make decision'], successCriteria: ['Validated assumptions', 'Data-driven decisions', 'Avoided costly mistakes', 'Business impact'] },
      personal: { title: 'Personal Hypothesis Testing', description: 'Test personal assumptions', instructions: ['Identify personal belief', 'Form hypothesis', 'Gather evidence', 'Test objectively'], successCriteria: ['Tested beliefs', 'Evidence-based thinking', 'Better decisions'] }
    } },
    feedback: { strengths: ['Form clear hypotheses', 'Test systematically', 'Objective analysis'], improvements: ['Design better tests', 'Avoid bias more', 'Gather more data'], nextSteps: ['Practice hypothesis testing', 'Study experimental design', 'Apply rigorously'] },
    badge: { name: 'Hypothesis Tester', emoji: '🔬', description: 'Expert in evidence-based validation' },
    shareMessage: 'Just mastered hypothesis testing! 🔬 #DataDriven #Science'
  },
  {
    id: 'metrics-kpis',
    title: 'Metrics & KPIs',
    emoji: '🎯',
    context: 'professional' as const,
    discover: {
      scenario: 'You work on projects without clear success metrics, making it impossible to know if you are making progress or achieving goals.',
      problemExplanation: ['No clear metrics', 'Measure wrong things', 'Vanity metrics vs actionable', 'Cannot track progress'],
      solutionApproach: ['Define SMART goals', 'Choose leading and lagging indicators', 'Focus on actionable metrics', 'Track consistently', 'Use metrics to drive decisions']
    },
    video: { title: 'Metrics and KPIs', duration: 6, content: ['Metrics make progress measurable.', 'SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.', 'Leading indicators: predict future performance.', 'Lagging indicators: measure past results.', 'Vanity metrics look good but do not drive action.', 'Actionable metrics inform decisions.'] },
    quiz: {
      title: 'Metrics & KPIs Quiz',
      questions: [
        { id: 21, question: 'SMART goals are:', options: ['Simple goals', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Smart people goals', 'Easy goals'], correct: 1 },
        { id: 22, question: 'Leading indicators:', options: ['Past results', 'Predict future performance', 'Lag behind', 'Are optional'], correct: 1 },
        { id: 23, question: 'Lagging indicators:', options: ['Predict future', 'Measure past results', 'Lead performance', 'Are useless'], correct: 1 },
        { id: 24, question: 'Vanity metrics:', options: ['Are best', 'Look good but not actionable', 'Drive decisions', 'Are necessary'], correct: 1 },
        { id: 25, question: 'Good metrics:', options: ['Impress others', 'Inform decisions and drive action', 'Are complex', 'Are many'], correct: 1 }
      ]
    },
    challenge: { title: 'Metrics Challenge', description: 'Master metrics and KPIs', contexts: {
      academic: { title: 'Academic Metrics', description: 'Track academic progress', instructions: ['Set SMART goals', 'Define metrics', 'Track consistently', 'Use to improve'], successCriteria: ['Clear metrics', 'Consistent tracking', 'Progress visible', 'Goal achievement'] },
      professional: { title: 'Professional Metrics', description: 'Business KPIs', instructions: ['Define business KPIs', 'Track leading and lagging', 'Dashboard creation', 'Drive decisions'], successCriteria: ['Actionable KPIs', 'Consistent tracking', 'Data-driven decisions', 'Business results'] },
      personal: { title: 'Personal Metrics', description: 'Track personal goals', instructions: ['Set personal SMART goals', 'Define metrics', 'Track progress'], successCriteria: ['Clear personal metrics', 'Consistent tracking', 'Goal progress'] }
    } },
    feedback: { strengths: ['Define metrics well', 'Track consistently', 'Use for decisions'], improvements: ['Choose better metrics', 'Track more systematically', 'Act on insights more'], nextSteps: ['Build dashboards', 'Study KPI frameworks', 'Apply everywhere'] },
    badge: { name: 'Metrics Master', emoji: '🎯', description: 'Expert in metrics and KPIs' },
    shareMessage: 'Just mastered metrics and KPIs! 🎯 #Metrics #DataDriven'
  },
  {
    id: 'evidence-based-decisions',
    title: 'Evidence-Based Decisions',
    emoji: '✅',
    context: 'professional' as const,
    discover: {
      scenario: 'You make important decisions based on opinions, politics, or gut feeling rather than solid evidence.',
      problemExplanation: ['Opinion-driven decisions', 'Ignore available data', 'HiPPO: Highest Paid Persons Opinion', 'No evidence gathering'],
      solutionApproach: ['Gather relevant data', 'Analyze objectively', 'Consider evidence quality', 'Balance data with judgment', 'Document decision rationale']
    },
    video: { title: 'Evidence-Based Decision Making', duration: 6, content: ['Best decisions combine data and judgment.', 'Gather relevant evidence systematically.', 'Evaluate evidence quality and sources.', 'Avoid HiPPO: Highest Paid Persons Opinion.', 'Data informs, judgment decides.', 'Document reasoning for future learning.'] },
    quiz: {
      title: 'Evidence-Based Decisions Quiz',
      questions: [
        { id: 26, question: 'Evidence-based decisions:', options: ['Ignore data', 'Combine data with sound judgment', 'Only use data', 'Follow opinions'], correct: 1 },
        { id: 27, question: 'HiPPO problem:', options: ['Hippopotamus', 'Highest Paid Person Opinion overrides data', 'Good practice', 'Animal decisions'], correct: 1 },
        { id: 28, question: 'Evaluate evidence by:', options: ['Amount only', 'Quality, relevance, and source credibility', 'Who provides it', 'Age'], correct: 1 },
        { id: 29, question: 'Data role in decisions:', options: ['Makes all decisions', 'Informs decisions, judgment finalizes', 'Is unnecessary', 'Replaces thinking'], correct: 1 },
        { id: 30, question: 'Document decisions to:', options: ['Cover yourself', 'Learn from outcomes and improve', 'Blame others', 'Waste time'], correct: 1 }
      ]
    },
    challenge: { title: 'Evidence-Based Challenge', description: 'Master data-driven decision making', contexts: {
      academic: { title: 'Academic Evidence-Based', description: 'Make academic decisions with data', instructions: ['Face academic decision', 'Gather evidence', 'Evaluate quality', 'Decide based on data'], successCriteria: ['Evidence gathered', 'Quality evaluated', 'Data-informed decision', 'Documented rationale'] },
      professional: { title: 'Professional Evidence-Based', description: 'Business data-driven decisions', instructions: ['Business decision', 'Collect relevant data', 'Analyze objectively', 'Make evidence-based choice', 'Document'], successCriteria: ['Data-driven', 'Objective analysis', 'Better outcomes', 'Learning documented'] },
      personal: { title: 'Personal Evidence-Based', description: 'Data-informed personal decisions', instructions: ['Personal decision', 'Gather evidence', 'Evaluate options', 'Choose wisely'], successCriteria: ['Evidence-informed', 'Thoughtful decision', 'Better outcomes'] }
    } },
    feedback: { strengths: ['Gather evidence well', 'Evaluate objectively', 'Make data-driven decisions'], improvements: ['Gather more evidence', 'Evaluate quality better', 'Document more'], nextSteps: ['Practice evidence-based thinking', 'Build decision frameworks', 'Mentor others'] },
    badge: { name: 'Evidence-Based Decider', emoji: '✅', description: 'Expert in evidence-based decisions' },
    shareMessage: 'Just mastered evidence-based decisions! ✅ #DataDriven #Evidence'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module7Subtopics = module7Data;

// Module 7 Assessment
export const module7Assessment: AssessmentData = {
  id: 'module7-assessment',
  title: 'Data-Driven Decision Making Assessment',
  description: 'Test your data analysis and evidence-based thinking mastery',
  questions: [
    // Data Analysis (1-5)
    { id: 1, question: 'First step:', options: ['Conclusions', 'Clean and organize data', 'Visualize', 'Report'], correct: 1 },
    { id: 2, question: 'Descriptive stats:', options: ['Advanced', 'Mean, median, mode basics', 'Unnecessary', 'Complex'], correct: 1 },
    { id: 3, question: 'Outliers:', options: ['Delete', 'Investigate significant differences', 'Unimportant', 'Errors'], correct: 1 },
    { id: 4, question: 'Data tells:', options: ['Nothing', 'Stories when analyzed', 'Everything', 'Facts only'], correct: 1 },
    { id: 5, question: 'Visualization helps:', options: ['Pretty', 'See patterns easier', 'Hide data', 'Confuse'], correct: 1 },
    // Statistical Thinking (6-10)
    { id: 6, question: 'Correlation vs causation:', options: ['Same', 'Correlation shows relationship NOT cause', 'Causation weaker', 'None'], correct: 1 },
    { id: 7, question: 'Sample size:', options: ['Worse', 'Larger generally more reliable', 'Does not matter', 'Expensive'], correct: 1 },
    { id: 8, question: 'Confidence interval:', options: ['Certainty', 'Range of uncertainty', 'Average', 'Mode'], correct: 1 },
    { id: 9, question: 'Seeing statistics ask:', options: ['Nothing', 'How collected and by whom', 'Number only', 'More stats'], correct: 1 },
    { id: 10, question: 'Median vs mean:', options: ['Same', 'Median less affected by outliers', 'Mean better', 'None'], correct: 1 },
    // Visualization (11-15)
    { id: 11, question: 'Bar charts for:', options: ['Trends', 'Comparing categories', 'Relationships', 'Parts'], correct: 1 },
    { id: 12, question: 'Line charts for:', options: ['Comparison', 'Trends over time', 'Distribution', 'Parts'], correct: 1 },
    { id: 13, question: 'Good visualization:', options: ['All data', 'Simple focused on message', 'Complex', 'Many colors'], correct: 1 },
    { id: 14, question: 'Avoid misleading:', options: ['Hide data', 'Honest axes and scales', 'Manipulate', 'Cherry-pick'], correct: 1 },
    { id: 15, question: 'Visualize for:', options: ['Yourself', 'Audience understanding', 'Experts', 'Impress'], correct: 1 },
    // Hypothesis Testing (16-20)
    { id: 16, question: 'Hypothesis is:', options: ['Fact', 'Testable statement', 'Guess', 'Conclusion'], correct: 1 },
    { id: 17, question: 'Null hypothesis:', options: ['Your theory', 'No effect exists', 'Positive', 'Belief'], correct: 1 },
    { id: 18, question: 'Test to:', options: ['Confirm beliefs', 'Objectively validate or refute', 'Prove right', 'Impress'], correct: 1 },
    { id: 19, question: 'Confirmation bias:', options: ['Good', 'Seeking confirming data only', 'Objective', 'Proper'], correct: 1 },
    { id: 20, question: 'Conclude based on:', options: ['Gut', 'Evidence from testing', 'Opinions', 'Hopes'], correct: 1 },
    // Metrics (21-25)
    { id: 21, question: 'SMART goals:', options: ['Simple', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Smart people', 'Easy'], correct: 1 },
    { id: 22, question: 'Leading indicators:', options: ['Past', 'Predict future', 'Lag', 'Optional'], correct: 1 },
    { id: 23, question: 'Lagging indicators:', options: ['Predict', 'Measure past', 'Lead', 'Useless'], correct: 1 },
    { id: 24, question: 'Vanity metrics:', options: ['Best', 'Look good not actionable', 'Drive decisions', 'Necessary'], correct: 1 },
    { id: 25, question: 'Good metrics:', options: ['Impress', 'Inform and drive action', 'Complex', 'Many'], correct: 1 },
    // Evidence-Based (26-30)
    { id: 26, question: 'Evidence-based:', options: ['Ignore data', 'Combine data with judgment', 'Only data', 'Opinions'], correct: 1 },
    { id: 27, question: 'HiPPO:', options: ['Animal', 'Highest Paid Opinion overrides data', 'Good', 'Animal decisions'], correct: 1 },
    { id: 28, question: 'Evaluate evidence:', options: ['Amount', 'Quality, relevance, credibility', 'Provider', 'Age'], correct: 1 },
    { id: 29, question: 'Data role:', options: ['Decides all', 'Informs, judgment finalizes', 'Unnecessary', 'Replaces thinking'], correct: 1 },
    { id: 30, question: 'Document decisions:', options: ['Cover', 'Learn and improve', 'Blame', 'Waste'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Data-driven master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong data skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep learning!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review data concepts!', xpReward: 100 }
  }
};
