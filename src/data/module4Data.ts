// Module 4: Critical Thinking Data Structure
export interface ModuleProgress {
  moduleId: string;
  currentSubtopic: number;
  completedSubtopics: number[];
  quizScores: { [key: string]: number };
  badges: string[];
  challengeResponses: { [key: string]: string };
  lastAccessed: string;
  totalXP: number;
  successStreak: number;
  highestStreak: number;
  lastStreakDate: string;
}

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
    duration: number; // in minutes
    content: string[];
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
    instructions: string[];
    successCriteria: string[];
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

export const module4Subtopics: SubtopicData[] = [
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    emoji: '🧠',
    context: 'academic',
    discover: {
      scenario: "You're analyzing a complex research paper with conflicting data. Your professor asks you to evaluate the methodology and conclusions. You need to identify logical fallacies, assess evidence quality, and form your own reasoned opinion. How do you approach this systematically?",
      problemExplanation: [
        "Complex Information: Multiple data sources with conflicting conclusions",
        "Bias Recognition: Identifying personal and author biases in research",
        "Evidence Evaluation: Distinguishing between correlation and causation",
        "Logical Fallacies: Recognizing common reasoning errors in arguments"
      ],
      solutionApproach: [
        "Systematic Analysis: Break down arguments into premises and conclusions",
        "Evidence Assessment: Evaluate source credibility and methodology",
        "Bias Identification: Recognize personal and author biases",
        "Logical Structure: Identify fallacies and weak reasoning"
      ]
    },
    video: {
      title: "Master Logical Reasoning for Academic Success",
      duration: 5,
      content: [
        "Argument Analysis: Breaking down complex arguments into components",
        "Evidence Evaluation: Assessing source credibility and methodology",
        "Logical Fallacies: Recognizing common reasoning errors",
        "Bias Recognition: Identifying personal and author biases",
        "Critical Reading: Analyzing research papers and academic texts"
      ]
    },
    quiz: {
      title: "Test Your Logical Reasoning Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in analyzing a complex argument?",
          options: [
            "Accept the conclusion",
            "Identify the premises and conclusion",
            "Look for supporting evidence",
            "Check the author's credentials"
          ],
          correct: 1,
          explanation: "Always start by identifying the premises (supporting statements) and the conclusion (what's being argued for)."
        },
        {
          id: 2,
          question: "How do you distinguish between correlation and causation?",
          options: [
            "They're the same thing",
            "Correlation shows relationship, causation shows cause-effect",
            "Causation is always stronger than correlation",
            "You can't distinguish between them"
          ],
          correct: 1,
          explanation: "Correlation shows a relationship between variables, while causation shows that one variable causes another."
        },
        {
          id: 3,
          question: "What is a logical fallacy?",
          options: [
            "A true statement",
            "An error in reasoning that weakens an argument",
            "A complex argument",
            "A statistical error"
          ],
          correct: 1,
          explanation: "A logical fallacy is an error in reasoning that makes an argument invalid or weak."
        },
        {
          id: 4,
          question: "How do you evaluate the credibility of a source?",
          options: [
            "Check if it supports your opinion",
            "Look at the author's credentials, publication, and methodology",
            "See if it's recent",
            "Check if it's popular"
          ],
          correct: 1,
          explanation: "Evaluate credibility by examining the author's expertise, publication quality, and research methodology."
        },
        {
          id: 5,
          question: "What's the best approach to handling conflicting information?",
          options: [
            "Choose the most recent source",
            "Analyze the methodology and evidence quality of each source",
            "Go with your gut feeling",
            "Ask someone else to decide"
          ],
          correct: 1,
          explanation: "Analyze the methodology and evidence quality to determine which source is more reliable."
        }
      ]
    },
    challenge: {
      title: "Practice Logical Reasoning",
      description: "Analyze a complex argument or research paper using logical reasoning principles",
      instructions: [
        "Choose a research paper or article with a clear argument",
        "Identify the main premises and conclusion",
        "Evaluate the evidence quality and methodology",
        "Look for any logical fallacies or biases",
        "Form your own reasoned opinion based on the analysis"
      ],
      successCriteria: [
        "Clearly identified premises and conclusion",
        "Evaluated evidence quality and methodology",
        "Identified at least one potential bias or fallacy",
        "Formed a reasoned opinion with supporting evidence"
      ]
    },
    feedback: {
      strengths: ["You're excellent at breaking down complex arguments and identifying key components"],
      improvements: ["Focus on recognizing subtle biases and evaluating evidence quality more systematically"],
      nextSteps: ["Practice analyzing different types of arguments and research methodologies"]
    },
    badge: {
      name: "Logical Thinker",
      emoji: "🧠",
      description: "Mastered logical reasoning and argument analysis"
    },
    shareMessage: "Just mastered logical reasoning! Ready to analyze any argument like a pro! 🧠 #CriticalThinking #AcademicSuccess"
  },
  {
    id: 'problem-analysis',
    title: 'Problem Analysis',
    emoji: '🔍',
    context: 'professional',
    discover: {
      scenario: "Your team's project is behind schedule and over budget. The client is unhappy, and your manager wants a solution. You need to identify the root causes, analyze the problem systematically, and propose evidence-based solutions. How do you approach this complex problem?",
      problemExplanation: [
        "Surface Symptoms: Visible problems like delays and budget overruns",
        "Root Causes: Underlying issues causing the surface problems",
        "Multiple Factors: Interconnected problems affecting each other",
        "Stakeholder Perspectives: Different views on what the real problem is"
      ],
      solutionApproach: [
        "Problem Definition: Clearly define what the problem is and isn't",
        "Root Cause Analysis: Use techniques like 5 Whys and fishbone diagrams",
        "Data Collection: Gather evidence to understand the problem fully",
        "Solution Generation: Brainstorm multiple potential solutions"
      ]
    },
    video: {
      title: "Systematic Problem Analysis for Professional Success",
      duration: 5,
      content: [
        "Problem Definition: Clearly defining the problem scope and boundaries",
        "Root Cause Analysis: Using 5 Whys and fishbone diagrams",
        "Data Collection: Gathering evidence and stakeholder input",
        "Solution Generation: Brainstorming multiple approaches",
        "Implementation Planning: Creating actionable solution plans"
      ]
    },
    quiz: {
      title: "Test Your Problem Analysis Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in problem analysis?",
          options: [
            "Jump to solutions",
            "Clearly define the problem",
            "Gather all possible data",
            "Ask others for their opinions"
          ],
          correct: 1,
          explanation: "Always start by clearly defining what the problem is and what it isn't."
        },
        {
          id: 2,
          question: "What is root cause analysis?",
          options: [
            "Finding the first problem that occurred",
            "Identifying the underlying causes of surface problems",
            "Blaming someone for the problem",
            "Finding the most obvious cause"
          ],
          correct: 1,
          explanation: "Root cause analysis identifies the underlying causes that lead to surface problems."
        },
        {
          id: 3,
          question: "How do you handle multiple potential causes of a problem?",
          options: [
            "Choose the most obvious one",
            "Investigate each potential cause systematically",
            "Ask the team to vote",
            "Go with your first instinct"
          ],
          correct: 1,
          explanation: "Systematically investigate each potential cause to understand the full picture."
        },
        {
          id: 4,
          question: "What's the benefit of gathering data before proposing solutions?",
          options: [
            "It delays decision-making",
            "It provides evidence-based understanding of the problem",
            "It confuses the issue",
            "It's unnecessary for simple problems"
          ],
          correct: 1,
          explanation: "Data provides evidence-based understanding that leads to better solutions."
        },
        {
          id: 5,
          question: "How do you ensure your problem analysis is comprehensive?",
          options: [
            "Focus on one perspective",
            "Consider multiple perspectives and use structured analysis tools",
            "Trust your experience",
            "Ask only experts"
          ],
          correct: 1,
          explanation: "Comprehensive analysis requires multiple perspectives and structured tools."
        }
      ]
    },
    challenge: {
      title: "Practice Problem Analysis",
      description: "Analyze a real problem using systematic problem analysis techniques",
      instructions: [
        "Choose a problem you're currently facing (academic, professional, or personal)",
        "Clearly define the problem and its scope",
        "Use the 5 Whys technique to identify root causes",
        "Gather data and evidence about the problem",
        "Generate multiple potential solutions"
      ],
      successCriteria: [
        "Clearly defined problem statement",
        "Identified at least 3 potential root causes",
        "Gathered relevant data and evidence",
        "Generated at least 3 different solution approaches"
      ]
    },
    feedback: {
      strengths: ["You're great at identifying patterns and breaking down complex problems"],
      improvements: ["Focus on gathering more data before jumping to conclusions and considering multiple perspectives"],
      nextSteps: ["Practice using structured analysis tools like fishbone diagrams and 5 Whys"]
    },
    badge: {
      name: "Problem Solver",
      emoji: "🔍",
      description: "Mastered systematic problem analysis and root cause identification"
    },
    shareMessage: "Just mastered problem analysis! Ready to tackle any challenge systematically! 🔍 #ProblemSolving #CriticalThinking"
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    emoji: '⚖️',
    context: 'personal',
    discover: {
      scenario: "You're choosing between two job offers: one with higher pay but less growth potential, and another with lower pay but better learning opportunities. You also have family considerations and long-term career goals. How do you make this important decision systematically?",
      problemExplanation: [
        "Multiple Criteria: Different factors to consider (pay, growth, location, etc.)",
        "Uncertainty: Unknown future outcomes and consequences",
        "Emotional Factors: Personal preferences and family considerations",
        "Time Pressure: Need to decide quickly with limited information"
      ],
      solutionApproach: [
        "Criteria Definition: Identify all important decision factors",
        "Information Gathering: Collect relevant data and insights",
        "Option Evaluation: Use decision-making frameworks",
        "Risk Assessment: Consider potential outcomes and consequences"
      ]
    },
    video: {
      title: "Effective Decision Making for Life Choices",
      duration: 5,
      content: [
        "Decision Frameworks: Using structured approaches for complex decisions",
        "Criteria Weighting: Prioritizing different factors and considerations",
        "Risk Assessment: Evaluating potential outcomes and consequences",
        "Information Gathering: Collecting relevant data and insights",
        "Implementation Planning: Creating action plans for chosen options"
      ]
    },
    quiz: {
      title: "Test Your Decision Making Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in making a complex decision?",
          options: [
            "Choose the safest option",
            "Identify all your criteria and priorities",
            "Ask others for advice",
            "Go with your gut feeling"
          ],
          correct: 1,
          explanation: "Start by identifying all criteria that matter to you and their relative importance."
        },
        {
          id: 2,
          question: "How do you handle decisions with incomplete information?",
          options: [
            "Wait until you have all information",
            "Make the best decision with available information and plan for contingencies",
            "Choose randomly",
            "Avoid making the decision"
          ],
          correct: 1,
          explanation: "Make the best decision with available information while planning for different scenarios."
        },
        {
          id: 3,
          question: "What's the benefit of using decision-making frameworks?",
          options: [
            "They guarantee the right decision",
            "They provide structure and reduce bias in decision-making",
            "They make decisions faster",
            "They eliminate the need for thinking"
          ],
          correct: 1,
          explanation: "Frameworks provide structure and help reduce cognitive biases in decision-making."
        },
        {
          id: 4,
          question: "How do you evaluate the quality of your decision-making process?",
          options: [
            "By the outcome of the decision",
            "By how systematic and thorough your process was",
            "By how quickly you made the decision",
            "By how others react to your decision"
          ],
          correct: 1,
          explanation: "Good decision-making is about the process, not just the outcome."
        },
        {
          id: 5,
          question: "What should you do after making a decision?",
          options: [
            "Never look back",
            "Implement the decision and monitor outcomes",
            "Second-guess yourself",
            "Wait to see what happens"
          ],
          correct: 1,
          explanation: "Implement your decision and monitor outcomes to learn and improve."
        }
      ]
    },
    challenge: {
      title: "Practice Decision Making",
      description: "Make a real decision using a structured decision-making framework",
      instructions: [
        "Choose a decision you need to make (academic, career, or personal)",
        "Identify all your criteria and their importance",
        "Gather information about your options",
        "Use a decision matrix or similar framework",
        "Make your decision and create an implementation plan"
      ],
      successCriteria: [
        "Clearly identified decision criteria and priorities",
        "Gathered relevant information about options",
        "Used a structured framework for evaluation",
        "Created an implementation plan for the chosen option"
      ]
    },
    feedback: {
      strengths: ["You're good at considering multiple factors and thinking through consequences"],
      improvements: ["Focus on using more structured frameworks and gathering additional information"],
      nextSteps: ["Practice using decision matrices and other structured decision-making tools"]
    },
    badge: {
      name: "Decision Maker",
      emoji: "⚖️",
      description: "Mastered systematic decision making and risk assessment"
    },
    shareMessage: "Just mastered decision making! Ready to make smart choices in any situation! ⚖️ #DecisionMaking #LifeSkills"
  },
  {
    id: 'evidence-evaluation',
    title: 'Evidence Evaluation',
    emoji: '📊',
    context: 'academic',
    discover: {
      scenario: "You're writing a research paper and need to evaluate different sources. Some studies show conflicting results, others have small sample sizes, and some seem biased. Your professor emphasizes evidence-based arguments. How do you assess the quality and reliability of different sources?",
      problemExplanation: [
        "Source Quality: Varying reliability and credibility of different sources",
        "Conflicting Evidence: Studies showing different results on the same topic",
        "Bias Detection: Identifying potential biases in research and reporting",
        "Methodology Assessment: Understanding research design and statistical validity"
      ],
      solutionApproach: [
        "Source Credibility: Evaluate author expertise and publication quality",
        "Methodology Review: Assess research design and statistical methods",
        "Bias Identification: Look for potential conflicts of interest and biases",
        "Evidence Synthesis: Weigh different sources based on quality and relevance"
      ]
    },
    video: {
      title: "Evaluating Evidence for Academic Research",
      duration: 5,
      content: [
        "Source Credibility: Evaluating author expertise and publication quality",
        "Research Methodology: Understanding study design and statistical validity",
        "Bias Detection: Identifying potential conflicts of interest and biases",
        "Evidence Synthesis: Weighing different sources based on quality",
        "Critical Reading: Analyzing research papers and academic sources"
      ]
    },
    quiz: {
      title: "Test Your Evidence Evaluation Skills",
      questions: [
        {
          id: 1,
          question: "What's the most important factor in evaluating a research source?",
          options: [
            "How recent it is",
            "The methodology and research design quality",
            "How many times it's been cited",
            "The author's reputation"
          ],
          correct: 1,
          explanation: "The methodology and research design are the most important factors in determining source quality."
        },
        {
          id: 2,
          question: "How do you identify potential bias in research?",
          options: [
            "Look at the conclusions",
            "Check for funding sources, author affiliations, and study limitations",
            "See if you agree with the results",
            "Check the sample size"
          ],
          correct: 1,
          explanation: "Check funding sources, author affiliations, and study limitations to identify potential biases."
        },
        {
          id: 3,
          question: "What's the difference between correlation and causation in research?",
          options: [
            "They're the same thing",
            "Correlation shows relationship, causation shows cause-effect",
            "Causation is always more important",
            "You can't distinguish between them"
          ],
          correct: 1,
          explanation: "Correlation shows a relationship between variables, while causation shows that one causes another."
        },
        {
          id: 4,
          question: "How do you handle conflicting evidence from different sources?",
          options: [
            "Choose the most recent study",
            "Evaluate the methodology and quality of each source",
            "Go with the majority opinion",
            "Ignore the conflicting evidence"
          ],
          correct: 1,
          explanation: "Evaluate the methodology and quality of each source to determine which is more reliable."
        },
        {
          id: 5,
          question: "What makes a study's sample size adequate?",
          options: [
            "At least 100 participants",
            "Large enough to detect meaningful differences with appropriate statistical power",
            "As many as possible",
            "At least 1000 participants"
          ],
          correct: 1,
          explanation: "Sample size should be large enough to detect meaningful differences with appropriate statistical power."
        }
      ]
    },
    challenge: {
      title: "Practice Evidence Evaluation",
      description: "Evaluate the quality of different research sources on a topic of interest",
      instructions: [
        "Choose a topic you're interested in researching",
        "Find 3-5 different sources (academic papers, articles, reports)",
        "Evaluate each source's methodology and credibility",
        "Identify any potential biases or limitations",
        "Rank the sources by quality and explain your reasoning"
      ],
      successCriteria: [
        "Found diverse sources on the chosen topic",
        "Evaluated methodology and credibility of each source",
        "Identified potential biases or limitations",
        "Provided clear ranking with reasoning"
      ]
    },
    feedback: {
      strengths: ["You're excellent at identifying credible sources and understanding research methodology"],
      improvements: ["Focus on recognizing subtle biases and evaluating statistical validity more systematically"],
      nextSteps: ["Practice evaluating different types of research studies and methodologies"]
    },
    badge: {
      name: "Evidence Evaluator",
      emoji: "📊",
      description: "Mastered evidence evaluation and research methodology assessment"
    },
    shareMessage: "Just mastered evidence evaluation! Ready to assess any research like a pro! 📊 #ResearchSkills #CriticalThinking"
  },
  {
    id: 'creative-solutions',
    title: 'Creative Solutions',
    emoji: '💡',
    context: 'professional',
    discover: {
      scenario: "Your company's traditional marketing approach isn't working for younger customers. The team is stuck in conventional thinking, and competitors are gaining market share. You need to develop innovative solutions that break away from standard approaches. How do you foster creative thinking and generate breakthrough ideas?",
      problemExplanation: [
        "Conventional Thinking: Team stuck in traditional approaches and assumptions",
        "Market Changes: Shifting customer preferences and competitive landscape",
        "Innovation Barriers: Fear of failure and resistance to new ideas",
        "Solution Constraints: Limited resources and time pressure"
      ],
      solutionApproach: [
        "Divergent Thinking: Generate many different ideas without judgment",
        "Assumption Challenging: Question existing beliefs and approaches",
        "Cross-Pollination: Draw ideas from different industries and disciplines",
        "Prototype Testing: Quickly test and iterate on new concepts"
      ]
    },
    video: {
      title: "Creative Problem Solving for Professional Innovation",
      duration: 5,
      content: [
        "Divergent Thinking: Generating multiple creative solutions",
        "Assumption Challenging: Questioning existing beliefs and approaches",
        "Cross-Pollination: Drawing ideas from different fields",
        "Brainstorming Techniques: Structured approaches to idea generation",
        "Innovation Implementation: Turning creative ideas into actionable solutions"
      ]
    },
    quiz: {
      title: "Test Your Creative Problem Solving Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in creative problem solving?",
          options: [
            "Choose the best solution",
            "Generate many different ideas without judgment",
            "Research the problem thoroughly",
            "Ask experts for advice"
          ],
          correct: 1,
          explanation: "Start with divergent thinking - generate many ideas without judging them initially."
        },
        {
          id: 2,
          question: "How do you overcome creative blocks?",
          options: [
            "Work harder on the same approach",
            "Change your perspective, take breaks, and try different techniques",
            "Ask others to solve it for you",
            "Give up and try something else"
          ],
          correct: 1,
          explanation: "Change perspective, take breaks, and try different creative techniques to overcome blocks."
        },
        {
          id: 3,
          question: "What is cross-pollination in creative thinking?",
          options: [
            "Working with different people",
            "Drawing ideas from different industries and disciplines",
            "Mixing different solutions together",
            "Working in different locations"
          ],
          correct: 1,
          explanation: "Cross-pollination means drawing ideas and approaches from different industries and disciplines."
        },
        {
          id: 4,
          question: "How do you evaluate creative solutions?",
          options: [
            "Choose the most original one",
            "Evaluate feasibility, impact, and alignment with goals",
            "Go with your favorite",
            "Ask others to vote"
          ],
          correct: 1,
          explanation: "Evaluate creative solutions based on feasibility, potential impact, and alignment with goals."
        },
        {
          id: 5,
          question: "What's the benefit of prototyping creative solutions?",
          options: [
            "It's faster than planning",
            "It allows quick testing and iteration of ideas",
            "It impresses stakeholders",
            "It's cheaper than research"
          ],
          correct: 1,
          explanation: "Prototyping allows quick testing and iteration of creative ideas before full implementation."
        }
      ]
    },
    challenge: {
      title: "Practice Creative Problem Solving",
      description: "Develop creative solutions to a real problem using structured creative thinking techniques",
      instructions: [
        "Choose a problem that needs innovative solutions",
        "Use brainstorming to generate at least 20 different ideas",
        "Apply assumption challenging to question existing approaches",
        "Use cross-pollination to draw ideas from other fields",
        "Select and develop the most promising creative solutions"
      ],
      successCriteria: [
        "Generated at least 20 diverse ideas",
        "Challenged existing assumptions about the problem",
        "Applied cross-pollination techniques",
        "Developed at least 3 promising creative solutions"
      ]
    },
    feedback: {
      strengths: ["You're great at thinking outside the box and generating diverse ideas"],
      improvements: ["Focus on systematically evaluating creative solutions and implementing them effectively"],
      nextSteps: ["Practice using different creative thinking techniques and tools"]
    },
    badge: {
      name: "Creative Innovator",
      emoji: "💡",
      description: "Mastered creative problem solving and innovative thinking"
    },
    shareMessage: "Just mastered creative problem solving! Ready to innovate and think outside the box! 💡 #Innovation #CreativeThinking"
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    emoji: '⚠️',
    context: 'personal',
    discover: {
      scenario: "You're considering starting your own business while still in college. You have some savings, a business idea, and market research, but you're also concerned about financial risk, time management, and potential failure. How do you systematically assess the risks and make an informed decision?",
      problemExplanation: [
        "Financial Risk: Potential loss of savings and income",
        "Time Risk: Balancing business with academic responsibilities",
        "Market Risk: Uncertainty about customer demand and competition",
        "Personal Risk: Impact on relationships and future opportunities"
      ],
      solutionApproach: [
        "Risk Identification: List all potential risks and their consequences",
        "Probability Assessment: Estimate likelihood of different scenarios",
        "Impact Analysis: Evaluate potential consequences of each risk",
        "Mitigation Planning: Develop strategies to reduce or manage risks"
      ]
    },
    video: {
      title: "Risk Assessment for Personal Decision Making",
      duration: 5,
      content: [
        "Risk Identification: Identifying all potential risks and consequences",
        "Probability Assessment: Estimating likelihood of different scenarios",
        "Impact Analysis: Evaluating potential consequences of risks",
        "Risk Mitigation: Developing strategies to reduce or manage risks",
        "Decision Integration: Incorporating risk assessment into decision making"
      ]
    },
    quiz: {
      title: "Test Your Risk Assessment Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in risk assessment?",
          options: [
            "Calculate the probability of risks",
            "Identify all potential risks and their consequences",
            "Develop mitigation strategies",
            "Make a decision based on risks"
          ],
          correct: 1,
          explanation: "Start by identifying all potential risks and understanding their potential consequences."
        },
        {
          id: 2,
          question: "How do you assess the probability of a risk occurring?",
          options: [
            "Use your gut feeling",
            "Analyze historical data, expert opinions, and relevant factors",
            "Ask others what they think",
            "Assume it's 50/50"
          ],
          correct: 1,
          explanation: "Use historical data, expert opinions, and analysis of relevant factors to assess probability."
        },
        {
          id: 3,
          question: "What's the difference between high-probability and high-impact risks?",
          options: [
            "They're the same thing",
            "High-probability risks are likely to occur, high-impact risks have severe consequences",
            "High-impact risks are more important",
            "You can't distinguish between them"
          ],
          correct: 1,
          explanation: "High-probability risks are likely to occur, while high-impact risks have severe consequences."
        },
        {
          id: 4,
          question: "How do you prioritize risks for attention?",
          options: [
            "Focus on the most likely risks",
            "Focus on risks with high probability and high impact",
            "Focus on the most expensive risks",
            "Focus on risks you can control"
          ],
          correct: 1,
          explanation: "Prioritize risks that have both high probability of occurring and high impact if they do occur."
        },
        {
          id: 5,
          question: "What's the purpose of risk mitigation strategies?",
          options: [
            "To eliminate all risks",
            "To reduce the probability or impact of risks",
            "To make decisions easier",
            "To avoid taking any risks"
          ],
          correct: 1,
          explanation: "Risk mitigation strategies aim to reduce either the probability of risks occurring or their impact if they do occur."
        }
      ]
    },
    challenge: {
      title: "Practice Risk Assessment",
      description: "Conduct a systematic risk assessment for an important decision you're facing",
      instructions: [
        "Choose a decision with significant risks (career, financial, personal)",
        "Identify all potential risks and their consequences",
        "Assess the probability of each risk occurring",
        "Evaluate the potential impact of each risk",
        "Develop mitigation strategies for the most important risks"
      ],
      successCriteria: [
        "Identified at least 5 different risks",
        "Assessed probability and impact for each risk",
        "Prioritized risks based on probability and impact",
        "Developed mitigation strategies for top risks"
      ]
    },
    feedback: {
      strengths: ["You're good at identifying potential risks and thinking through consequences"],
      improvements: ["Focus on more systematic probability assessment and developing concrete mitigation strategies"],
      nextSteps: ["Practice using risk assessment frameworks and tools"]
    },
    badge: {
      name: "Risk Assessor",
      emoji: "⚠️",
      description: "Mastered risk assessment and mitigation planning"
    },
    shareMessage: "Just mastered risk assessment! Ready to make informed decisions in any situation! ⚠️ #RiskManagement #DecisionMaking"
  }
];

export const module4Assessment: AssessmentData = {
  title: "Critical Thinking Final Assessment",
  description: "Test your mastery of critical thinking and analytical problem-solving skills. This comprehensive assessment evaluates your understanding of logical reasoning, problem analysis, and decision-making processes.",
  questions: [
    {
      id: 1,
      question: "You're analyzing a complex problem with multiple potential causes. What's the first step in logical reasoning?",
      options: [
        "Jump to the most obvious conclusion",
        "Gather all relevant information and data",
        "Make assumptions based on experience",
        "Follow your intuition"
      ],
      correct: 1,
      explanation: "Logical reasoning requires gathering all relevant information before making conclusions. This ensures a comprehensive analysis."
    },
    {
      id: 2,
      question: "When faced with conflicting information from multiple sources, what's the best approach?",
      options: [
        "Choose the source you trust most",
        "Analyze the credibility of each source and cross-reference information",
        "Ignore the conflicting information",
        "Use the most recent information"
      ],
      correct: 1,
      explanation: "Critical thinking requires evaluating source credibility and cross-referencing information to determine accuracy."
    },
    {
      id: 3,
      question: "What is the most important aspect of problem-solving?",
      options: [
        "Finding the quickest solution",
        "Identifying the root cause of the problem",
        "Implementing the first solution that comes to mind",
        "Avoiding difficult problems"
      ],
      correct: 1,
      explanation: "Root cause analysis is essential for effective problem-solving as it addresses the underlying issue rather than just symptoms."
    },
    {
      id: 4,
      question: "When making a decision under uncertainty, what should you prioritize?",
      options: [
        "Making a quick decision to avoid delays",
        "Gathering more information to reduce uncertainty",
        "Following your gut feeling",
        "Avoiding the decision entirely"
      ],
      correct: 1,
      explanation: "Critical thinking involves gathering relevant information to make informed decisions, even when complete certainty isn't possible."
    },
    {
      id: 5,
      question: "What is the best approach to evaluating evidence?",
      options: [
        "Accept all evidence that supports your viewpoint",
        "Examine evidence objectively and consider alternative explanations",
        "Only use evidence from trusted sources",
        "Ignore evidence that contradicts your beliefs"
      ],
      correct: 1,
      explanation: "Critical thinking requires objective evaluation of evidence and consideration of alternative explanations to avoid confirmation bias."
    },
    {
      id: 6,
      question: "What is the most effective way to approach complex problems?",
      options: [
        "Break them down into smaller, manageable parts",
        "Try to solve everything at once",
        "Avoid complex problems entirely",
        "Ask someone else to solve them"
      ],
      correct: 0,
      explanation: "Breaking complex problems into smaller parts makes them more manageable and allows for systematic analysis and solution development."
    }
  ],
  gradingScale: {
    excellent: { min: 80, max: 100, message: "Excellent! You've mastered critical thinking!", xpReward: 100 },
    good: { min: 70, max: 79, message: "Good job! You have strong critical thinking skills.", xpReward: 75 },
    satisfactory: { min: 60, max: 69, message: "Satisfactory. Keep practicing to improve further.", xpReward: 50 },
    needsImprovement: { min: 0, max: 59, message: "Keep learning! Critical thinking improves with practice.", xpReward: 25 }
  }
};

// Local Storage Helper Functions
export const saveModuleProgress = (progress: ModuleProgress): void => {
  localStorage.setItem('module4Progress', JSON.stringify(progress));
};

export const loadModuleProgress = (): ModuleProgress | null => {
  const stored = localStorage.getItem('module4Progress');
  return stored ? JSON.parse(stored) : null;
};

export const updateSubtopicProgress = (subtopicId: string, score: number, response: string): void => {
  const progress = loadModuleProgress() || {
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
    lastStreakDate: ''
  };

  // Update progress
  progress.lastAccessed = new Date().toISOString();
  progress.quizScores[subtopicId] = score;
  progress.challengeResponses[subtopicId] = response;
  
  // Add XP based on score
  const xpEarned = Math.round(score / 10); // 1 XP per 10 points
  progress.totalXP += xpEarned;

  // Update success streak
  const today = new Date().toISOString().split('T')[0];
  if (progress.lastStreakDate === today) {
    // Already updated today, don't change streak
  } else if (progress.lastStreakDate === new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
    // Consecutive day, increment streak
    progress.successStreak += 1;
    progress.highestStreak = Math.max(progress.highestStreak, progress.successStreak);
  } else {
    // Streak broken, reset to 1
    progress.successStreak = 1;
    progress.highestStreak = Math.max(progress.highestStreak, 1);
  }
  progress.lastStreakDate = today;

  // Add to completed subtopics if not already there
  const subtopicIndex = module4Subtopics.findIndex(subtopic => subtopic.id === subtopicId);
  if (subtopicIndex !== -1 && !progress.completedSubtopics.includes(subtopicIndex)) {
    progress.completedSubtopics.push(subtopicIndex);
  }

  // Award badge based on score
  if (score >= 80 && !progress.badges.includes('Critical Thinker')) {
    progress.badges.push('Critical Thinker');
  }

  saveModuleProgress(progress);
};