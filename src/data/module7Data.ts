// Module 7: Data-Driven Decision Making Data Structure
export interface ModuleProgress {
  moduleId: string;
  currentSubtopic: number;
  completedSubtopics: number[];
  quizScores: { [key: string]: number };
  badges: string[];
  challengeResponses: { [key: string]: string };
  lastAccessed: string;
  totalXP: number;
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
    script?: string; // Full video script
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

export const module7Subtopics: SubtopicData[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    emoji: '📊',
    context: 'academic',
    discover: {
      scenario: "You're working on a research project and have collected survey data from 500 students about their study habits and academic performance. The data is messy, incomplete, and you're not sure how to extract meaningful insights. How do you analyze this data to find patterns and make evidence-based conclusions?",
      problemExplanation: [
        "Data Quality Issues: Missing values, inconsistent formats, and potential errors in the dataset",
        "Analysis Complexity: Large amounts of data with multiple variables and relationships",
        "Statistical Uncertainty: Not knowing which statistical methods to use for different types of data",
        "Interpretation Challenges: Difficulty translating statistical results into meaningful insights"
      ],
      solutionApproach: [
        "Data Cleaning: Identifying and addressing data quality issues and inconsistencies",
        "Exploratory Analysis: Using descriptive statistics and visualization to understand data patterns",
        "Statistical Methods: Applying appropriate statistical techniques for different data types",
        "Insight Generation: Translating statistical results into actionable insights and conclusions"
      ]
    },
    video: {
      title: "Master Data Analysis for Better Decisions",
      duration: 5,
      content: [
        "Data Cleaning: Identifying and addressing data quality issues and inconsistencies",
        "Exploratory Analysis: Using descriptive statistics and visualization to understand data patterns",
        "Statistical Methods: Applying appropriate statistical techniques for different data types",
        "Insight Generation: Translating statistical results into actionable insights and conclusions",
        "Data Storytelling: Communicating findings effectively to different audiences"
      ],
      script: `[HOOK - 30 seconds]
"Data is everywhere, but raw data is useless without proper analysis. Today, I'll show you how to master data analysis and turn information into actionable insights in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, data analysis helps you:
- Analyze research data and draw evidence-based conclusions
- Understand statistical concepts and apply them to academic projects
- Present findings clearly in papers, presentations, and discussions

Techniques: Clean data systematically, use descriptive statistics, apply appropriate tests, visualize results clearly.

Example: Sarah analyzed survey data from 300 students and discovered that students who study in groups perform 25% better on exams, leading to a recommendation for more group study programs."

[PROFESSIONAL - 2 minutes]
"In your career, data analysis helps you:
- Make data-driven business decisions and recommendations
- Analyze market trends, customer behavior, and performance metrics
- Present insights to stakeholders and drive organizational change

Techniques: Use business intelligence tools, apply statistical methods, create dashboards, tell data stories.

Example: Mike analyzed customer data and identified that 80% of revenue comes from 20% of customers, leading to a focused retention strategy that increased revenue by 30%."

[PERSONAL - 1 minute]
"In personal life, data analysis helps you:
- Track personal goals, habits, and progress over time
- Make informed decisions about health, finances, and lifestyle choices
- Understand patterns in your behavior and relationships

Techniques: Track key metrics, use simple analysis tools, identify trends, make data-driven adjustments.

Example: Tom tracked his exercise data for 6 months and discovered that morning workouts are 40% more effective for him, leading to a schedule change that improved his fitness results."

[CALL TO ACTION - 30 seconds]
"Ready to master data analysis? Start by cleaning and exploring your next dataset systematically. Remember, great analysis turns data into insights that drive better decisions. Begin today!"`
    },
    quiz: {
      title: "Test Your Data Analysis Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the first step in data analysis?",
          options: [
            "Run statistical tests",
            "Clean and explore the data to understand its structure and quality",
            "Create visualizations",
            "Write conclusions"
          ],
          correct: 1,
          explanation: "The first step is to clean and explore the data to understand its structure and quality."
        },
        {
          id: 2,
          question: "What is exploratory data analysis?",
          options: [
            "Running complex statistical tests",
            "Using descriptive statistics and visualization to understand data patterns",
            "Writing research papers",
            "Collecting new data"
          ],
          correct: 1,
          explanation: "Exploratory data analysis uses descriptive statistics and visualization to understand data patterns."
        },
        {
          id: 3,
          question: "How do you choose the right statistical method?",
          options: [
            "Always use the most complex method",
            "Based on your data type, research question, and assumptions",
            "Use the same method for everything",
            "Let the software choose"
          ],
          correct: 1,
          explanation: "Choose statistical methods based on your data type, research question, and assumptions."
        },
        {
          id: 4,
          question: "What is the goal of data analysis?",
          options: [
            "To prove your hypothesis",
            "To extract meaningful insights and make evidence-based decisions",
            "To create beautiful charts",
            "To use all available data"
          ],
          correct: 1,
          explanation: "The goal is to extract meaningful insights and make evidence-based decisions."
        },
        {
          id: 5,
          question: "How do you communicate data analysis results?",
          options: [
            "Show all the raw data",
            "Tell a clear story with key insights and supporting evidence",
            "Use technical jargon",
            "Avoid conclusions"
          ],
          correct: 1,
          explanation: "Communicate results by telling a clear story with key insights and supporting evidence."
        }
      ]
    },
    challenge: {
      title: "Data Analysis Challenge",
      description: "Analyze a real dataset and extract meaningful insights for decision making",
      instructions: [
        "Choose a dataset: Select a real dataset relevant to your interests or work",
        "Clean the data: Identify and address data quality issues",
        "Explore the data: Use descriptive statistics and visualization to understand patterns",
        "Apply analysis: Use appropriate statistical methods to answer your research questions",
        "Communicate results: Present your findings clearly with actionable insights"
      ],
      successCriteria: [
        "Successfully cleaned and prepared the dataset",
        "Conducted thorough exploratory data analysis",
        "Applied appropriate statistical methods",
        "Extracted meaningful insights and conclusions",
        "Communicated results clearly with supporting evidence"
      ]
    },
    feedback: {
      strengths: [
        "Excellent data cleaning and preparation skills",
        "Strong exploratory data analysis and pattern recognition",
        "Good application of appropriate statistical methods",
        "Clear communication of insights and actionable recommendations"
      ],
      improvements: [
        "Consider more diverse datasets and analysis scenarios",
        "Improve statistical method selection and interpretation",
        "Better visualization and storytelling techniques",
        "Stronger focus on practical applications and decision making"
      ],
      nextSteps: [
        "Practice with different types of datasets and analysis methods",
        "Develop skills in data visualization and storytelling",
        "Apply data analysis to real-world problems and decisions",
        "Learn advanced statistical methods and machine learning techniques"
      ]
    },
    badge: {
      name: "Data Analyst",
      emoji: "📊",
      description: "Demonstrated excellent data analysis skills and evidence-based decision making"
    },
    shareMessage: "Just mastered data analysis! 🎉 Analyzed real data, extracted meaningful insights, and made evidence-based decisions. Ready to turn data into actionable intelligence! #DataAnalysis #Statistics #EvidenceBased"
  },
  {
    id: 'statistical-thinking',
    title: 'Statistical Thinking',
    emoji: '🧮',
    context: 'professional',
    discover: {
      scenario: "Your company is considering a new marketing campaign, but the data shows mixed results from previous campaigns. Some campaigns increased sales by 20%, while others had no effect. The CEO wants to know if the new campaign will work, but you're not sure how to interpret the data and make a confident recommendation. How do you think statistically about this decision?",
      problemExplanation: [
        "Statistical Uncertainty: Not understanding the role of randomness and variability in data",
        "Correlation vs Causation: Confusing correlation with causation in business decisions",
        "Sample Size Issues: Making decisions based on small or unrepresentative samples",
        "Statistical Significance: Not understanding when results are meaningful vs due to chance"
      ],
      solutionApproach: [
        "Probability Thinking: Understanding uncertainty, variability, and risk in decision making",
        "Causal Reasoning: Distinguishing between correlation and causation in data",
        "Sample Considerations: Understanding representativeness, bias, and generalizability",
        "Statistical Inference: Using data to make predictions and test hypotheses"
      ]
    },
    video: {
      title: "Think Statistically for Better Decisions",
      duration: 5,
      content: [
        "Probability Thinking: Understanding uncertainty, variability, and risk in decision making",
        "Causal Reasoning: Distinguishing between correlation and causation in data",
        "Sample Considerations: Understanding representativeness, bias, and generalizability",
        "Statistical Inference: Using data to make predictions and test hypotheses",
        "Decision Making: Applying statistical thinking to real-world problems and choices"
      ],
      script: `[HOOK - 30 seconds]
"Statistical thinking isn't just about numbers - it's about understanding uncertainty, making better decisions, and avoiding common pitfalls. Today, I'll show you how to think statistically for better decisions in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, statistical thinking helps you:
- Understand research results and avoid misinterpretation of data
- Design better experiments and studies with proper controls
- Evaluate evidence critically and make informed academic decisions

Techniques: Consider uncertainty, distinguish correlation from causation, understand sample representativeness, apply statistical reasoning.

Example: Lisa designed a study comparing study methods and found that students using active recall performed 30% better, but she also controlled for prior knowledge and study time to ensure the results were meaningful."

[PROFESSIONAL - 2 minutes]
"In your career, statistical thinking helps you:
- Make data-driven business decisions with proper consideration of uncertainty
- Evaluate marketing campaigns, product launches, and strategic initiatives
- Avoid costly mistakes from misinterpreting data and trends

Techniques: Think probabilistically, consider multiple explanations, understand sample bias, apply statistical reasoning to business problems.

Example: Mike analyzed customer satisfaction data and discovered that the 15% improvement was statistically significant, leading to a confident decision to roll out the new service company-wide."

[PERSONAL - 1 minute]
"In personal life, statistical thinking helps you:
- Make informed decisions about health, finances, and lifestyle choices
- Evaluate claims and avoid being misled by misleading statistics
- Understand risk and uncertainty in personal decision making

Techniques: Question data sources, consider alternative explanations, understand probability, make evidence-based personal choices.

Example: Tom evaluated different investment options by considering historical returns, risk levels, and his personal financial goals, making a more informed decision about his retirement planning."

[CALL TO ACTION - 30 seconds]
"Ready to think statistically? Start your next decision by considering uncertainty and alternative explanations. Remember, statistical thinking helps you make better decisions by understanding what the data really means. Begin today!"`
    },
    quiz: {
      title: "Test Your Statistical Thinking Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the key principle of statistical thinking?",
          options: [
            "Always trust the data",
            "Consider uncertainty, variability, and alternative explanations",
            "Use complex statistical methods",
            "Focus on averages"
          ],
          correct: 1,
          explanation: "The key principle is to consider uncertainty, variability, and alternative explanations."
        },
        {
          id: 2,
          question: "What is the difference between correlation and causation?",
          options: [
            "They are the same thing",
            "Correlation shows relationship, causation shows one thing causes another",
            "Correlation is stronger than causation",
            "Causation is easier to prove"
          ],
          correct: 1,
          explanation: "Correlation shows relationship, causation shows one thing causes another."
        },
        {
          id: 3,
          question: "Why is sample representativeness important?",
          options: [
            "It makes analysis easier",
            "It ensures results can be generalized to the broader population",
            "It reduces data size",
            "It improves visualization"
          ],
          correct: 1,
          explanation: "Sample representativeness ensures results can be generalized to the broader population."
        },
        {
          id: 4,
          question: "What is statistical significance?",
          options: [
            "The most important result",
            "A measure of whether results are likely due to chance or real effects",
            "The size of the effect",
            "The confidence level"
          ],
          correct: 1,
          explanation: "Statistical significance measures whether results are likely due to chance or real effects."
        },
        {
          id: 5,
          question: "How do you apply statistical thinking to decisions?",
          options: [
            "By using the most data",
            "By considering uncertainty, alternatives, and evidence quality",
            "By avoiding statistics",
            "By trusting intuition"
          ],
          correct: 1,
          explanation: "Apply statistical thinking by considering uncertainty, alternatives, and evidence quality."
        }
      ]
    },
    challenge: {
      title: "Statistical Thinking Challenge",
      description: "Apply statistical thinking to a real decision or problem",
      instructions: [
        "Choose a decision: Select a real decision or problem that involves data or uncertainty",
        "Identify uncertainty: Consider what you don't know and what could go wrong",
        "Evaluate evidence: Assess the quality and reliability of available information",
        "Consider alternatives: Think about different explanations and approaches",
        "Make decision: Apply statistical reasoning to make an informed choice"
      ],
      successCriteria: [
        "Identified key uncertainties and risks in the decision",
        "Evaluated evidence quality and reliability",
        "Considered alternative explanations and approaches",
        "Applied statistical reasoning to decision making",
        "Made an informed decision with proper consideration of uncertainty"
      ]
    },
    feedback: {
      strengths: [
        "Excellent understanding of uncertainty and statistical concepts",
        "Strong ability to distinguish correlation from causation",
        "Good consideration of sample representativeness and bias",
        "Clear application of statistical thinking to real decisions"
      ],
      improvements: [
        "Consider more diverse statistical scenarios and applications",
        "Improve understanding of statistical significance and inference",
        "Better evaluation of evidence quality and reliability",
        "Stronger focus on practical decision-making applications"
      ],
      nextSteps: [
        "Practice statistical thinking with different types of problems",
        "Develop skills in statistical inference and hypothesis testing",
        "Apply statistical thinking to complex real-world decisions",
        "Learn advanced statistical methods and reasoning techniques"
      ]
    },
    badge: {
      name: "Statistical Thinker",
      emoji: "🧮",
      description: "Demonstrated excellent statistical thinking and evidence-based reasoning"
    },
    shareMessage: "Just mastered statistical thinking! 🎉 Applied statistical reasoning to real decisions, considered uncertainty, and avoided common data pitfalls. Ready to make better decisions with statistical insight! #StatisticalThinking #DataDriven #EvidenceBased"
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    emoji: '📈',
    context: 'personal',
    discover: {
      scenario: "You've analyzed your personal spending data for the past year and found some interesting patterns, but when you try to explain your findings to your family, they get confused by the numbers and tables. You need to create clear, compelling visualizations that help everyone understand the insights and make better financial decisions. How do you visualize data effectively?",
      problemExplanation: [
        "Information Overload: Too much data presented in confusing tables and numbers",
        "Poor Visual Design: Charts that are hard to read, misleading, or not appropriate for the data",
        "Audience Mismatch: Visualizations that don't match the audience's needs and understanding level",
        "Storytelling Gaps: Missing narrative and context that helps people understand the insights"
      ],
      solutionApproach: [
        "Visual Design Principles: Creating clear, accurate, and engaging visualizations",
        "Chart Selection: Choosing the right type of chart for different data types and purposes",
        "Audience Adaptation: Tailoring visualizations to different audiences and contexts",
        "Data Storytelling: Combining visuals with narrative to communicate insights effectively"
      ]
    },
    video: {
      title: "Create Compelling Data Visualizations",
      duration: 5,
      content: [
        "Visual Design Principles: Creating clear, accurate, and engaging visualizations",
        "Chart Selection: Choosing the right type of chart for different data types and purposes",
        "Audience Adaptation: Tailoring visualizations to different audiences and contexts",
        "Data Storytelling: Combining visuals with narrative to communicate insights effectively",
        "Visual Best Practices: Avoiding common mistakes and creating effective data stories"
      ],
      script: `[HOOK - 30 seconds]
"Data visualization is the bridge between raw data and human understanding. Today, I'll show you how to create compelling visualizations that tell clear, persuasive stories in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, data visualization helps you:
- Present research findings clearly in papers, presentations, and discussions
- Understand complex data patterns through visual exploration
- Communicate academic insights to different audiences effectively

Techniques: Choose appropriate chart types, use clear labels and colors, tell a story with your data, avoid misleading visualizations.

Example: Sarah created a clear line chart showing how study time correlates with exam scores, making it easy for her professor to understand the relationship and recommend study strategies."

[PROFESSIONAL - 2 minutes]
"In your career, data visualization helps you:
- Present business insights to stakeholders and decision makers
- Create dashboards and reports that drive action and change
- Communicate complex data in ways that non-technical audiences can understand

Techniques: Use business-appropriate charts, create interactive dashboards, tell data stories, focus on actionable insights.

Example: Mike created a dashboard showing customer satisfaction trends that helped his team identify issues and implement solutions, leading to a 25% improvement in customer ratings."

[PERSONAL - 1 minute]
"In personal life, data visualization helps you:
- Track personal goals, habits, and progress in clear, motivating ways
- Make informed decisions about health, finances, and lifestyle choices
- Share insights with family and friends in understandable formats

Techniques: Use simple, clear charts, focus on trends and patterns, create motivating visualizations, share insights effectively.

Example: Tom created a simple bar chart showing his monthly savings progress that motivated his family to save more and reach their financial goals faster."

[CALL TO ACTION - 30 seconds]
"Ready to create compelling visualizations? Start your next data presentation by choosing the right chart type and telling a clear story. Remember, great visualizations make data accessible and actionable for everyone. Begin today!"`
    },
    quiz: {
      title: "Test Your Data Visualization Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the most important principle in data visualization?",
          options: [
            "Using the most colors",
            "Clarity and accuracy in communicating data insights",
            "Creating complex charts",
            "Using the latest software"
          ],
          correct: 1,
          explanation: "Clarity and accuracy in communicating data insights is the most important principle."
        },
        {
          id: 2,
          question: "How do you choose the right chart type?",
          options: [
            "Use the same chart for everything",
            "Based on your data type, audience, and the story you want to tell",
            "Use the most complex chart",
            "Let the software choose"
          ],
          correct: 1,
          explanation: "Choose chart types based on your data type, audience, and the story you want to tell."
        },
        {
          id: 3,
          question: "What is data storytelling?",
          options: [
            "Making up stories about data",
            "Combining visuals with narrative to communicate insights effectively",
            "Using only text",
            "Avoiding conclusions"
          ],
          correct: 1,
          explanation: "Data storytelling combines visuals with narrative to communicate insights effectively."
        },
        {
          id: 4,
          question: "How do you adapt visualizations for different audiences?",
          options: [
            "Use the same visualization for everyone",
            "Consider their background, needs, and level of data literacy",
            "Make them more complex",
            "Use more colors"
          ],
          correct: 1,
          explanation: "Adapt visualizations by considering the audience's background, needs, and level of data literacy."
        },
        {
          id: 5,
          question: "What should you avoid in data visualization?",
          options: [
            "Using any colors",
            "Misleading scales, inappropriate chart types, and information overload",
            "Using labels",
            "Creating simple charts"
          ],
          correct: 1,
          explanation: "Avoid misleading scales, inappropriate chart types, and information overload."
        }
      ]
    },
    challenge: {
      title: "Data Visualization Challenge",
      description: "Create compelling visualizations for a real dataset and communicate insights effectively",
      instructions: [
        "Choose a dataset: Select a real dataset relevant to your interests or work",
        "Analyze the data: Understand the patterns and insights you want to communicate",
        "Select chart types: Choose appropriate visualizations for your data and audience",
        "Create visualizations: Design clear, accurate, and engaging charts",
        "Tell the story: Combine visuals with narrative to communicate insights effectively"
      ],
      successCriteria: [
        "Selected appropriate chart types for the data and audience",
        "Created clear, accurate, and visually appealing visualizations",
        "Avoided common visualization mistakes and misleading elements",
        "Combined visuals with narrative to tell a compelling data story",
        "Communicated insights effectively to the intended audience"
      ]
    },
    feedback: {
      strengths: [
        "Excellent chart selection and visual design skills",
        "Strong understanding of data visualization principles",
        "Good audience adaptation and storytelling abilities",
        "Clear communication of insights through effective visualizations"
      ],
      improvements: [
        "Consider more diverse visualization types and techniques",
        "Improve data storytelling and narrative development",
        "Better audience adaptation and context consideration",
        "Stronger focus on actionable insights and decision making"
      ],
      nextSteps: [
        "Practice with different types of data and visualization tools",
        "Develop skills in interactive visualization and dashboard creation",
        "Apply data visualization to real-world communication challenges",
        "Learn advanced visualization techniques and design principles"
      ]
    },
    badge: {
      name: "Data Visualizer",
      emoji: "📈",
      description: "Demonstrated excellent data visualization and storytelling skills"
    },
    shareMessage: "Just mastered data visualization! 🎉 Created compelling visualizations that tell clear data stories and communicate insights effectively. Ready to make data accessible and actionable for everyone! #DataVisualization #Storytelling #DataDriven"
  },
  {
    id: 'hypothesis-testing',
    title: 'Hypothesis Testing',
    emoji: '🔬',
    context: 'academic',
    discover: {
      scenario: "You're conducting a research study to test whether a new study method improves student performance. You have data from two groups: one using the traditional method and one using the new method. You need to determine if the difference in performance is statistically significant or just due to chance. How do you test your hypothesis properly?",
      problemExplanation: [
        "Statistical Significance: Not understanding when differences are meaningful vs due to chance",
        "Hypothesis Formulation: Poorly stated hypotheses that are hard to test or interpret",
        "Test Selection: Choosing inappropriate statistical tests for the data and research question",
        "Interpretation Errors: Misunderstanding p-values, confidence intervals, and statistical results"
      ],
      solutionApproach: [
        "Hypothesis Formulation: Creating clear, testable hypotheses with proper null and alternative statements",
        "Test Selection: Choosing appropriate statistical tests based on data type and research design",
        "Statistical Analysis: Conducting tests properly and interpreting results correctly",
        "Conclusion Drawing: Making appropriate conclusions based on statistical evidence"
      ]
    },
    video: {
      title: "Test Hypotheses with Statistical Rigor",
      duration: 5,
      content: [
        "Hypothesis Formulation: Creating clear, testable hypotheses with proper null and alternative statements",
        "Test Selection: Choosing appropriate statistical tests based on data type and research design",
        "Statistical Analysis: Conducting tests properly and interpreting results correctly",
        "Conclusion Drawing: Making appropriate conclusions based on statistical evidence",
        "Research Design: Designing studies that can properly test hypotheses"
      ],
      script: `[HOOK - 30 seconds]
"Hypothesis testing is the foundation of scientific research and evidence-based decision making. Today, I'll show you how to test hypotheses with statistical rigor and avoid common pitfalls in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, hypothesis testing helps you:
- Conduct rigorous research and draw valid conclusions from data
- Design experiments and studies that can properly test your ideas
- Evaluate research findings and avoid misinterpretation of results

Techniques: Formulate clear hypotheses, choose appropriate tests, interpret p-values correctly, draw valid conclusions.

Example: Lisa tested whether active recall improves exam performance by comparing two groups of students, using a t-test to determine if the 15% difference was statistically significant."

[PROFESSIONAL - 2 minutes]
"In your career, hypothesis testing helps you:
- Test business ideas and strategies with statistical rigor
- Evaluate marketing campaigns, product changes, and process improvements
- Make data-driven decisions based on solid statistical evidence

Techniques: Formulate business hypotheses, use appropriate statistical tests, interpret results correctly, make evidence-based decisions.

Example: Mike tested whether a new customer service process improved satisfaction by comparing before and after data, using statistical tests to confirm the 20% improvement was significant."

[PERSONAL - 1 minute]
"In personal life, hypothesis testing helps you:
- Test personal strategies and approaches with data and evidence
- Evaluate lifestyle changes, habits, and personal improvement methods
- Make informed decisions about health, finances, and personal development

Techniques: Formulate personal hypotheses, track relevant data, use simple statistical methods, draw evidence-based conclusions.

Example: Tom tested whether morning exercise improved his energy levels by tracking his energy for 4 weeks, using simple statistical analysis to confirm the improvement was meaningful."

[CALL TO ACTION - 30 seconds]
"Ready to test hypotheses with rigor? Start your next decision by formulating a clear hypothesis and collecting data to test it. Remember, proper hypothesis testing leads to more confident and evidence-based decisions. Begin today!"`
    },
    quiz: {
      title: "Test Your Hypothesis Testing Knowledge",
      questions: [
        {
          id: 1,
          question: "What is a hypothesis in statistical testing?",
          options: [
            "A guess about the data",
            "A testable statement about a population parameter or relationship",
            "A conclusion from the data",
            "A type of chart"
          ],
          correct: 1,
          explanation: "A hypothesis is a testable statement about a population parameter or relationship."
        },
        {
          id: 2,
          question: "What is the null hypothesis?",
          options: [
            "The hypothesis you want to prove",
            "The default assumption that there is no effect or difference",
            "The alternative hypothesis",
            "The most likely outcome"
          ],
          correct: 1,
          explanation: "The null hypothesis is the default assumption that there is no effect or difference."
        },
        {
          id: 3,
          question: "What does a p-value tell you?",
          options: [
            "The probability that your hypothesis is true",
            "The probability of observing your results if the null hypothesis is true",
            "The size of the effect",
            "The confidence level"
          ],
          correct: 1,
          explanation: "A p-value tells you the probability of observing your results if the null hypothesis is true."
        },
        {
          id: 4,
          question: "How do you choose the right statistical test?",
          options: [
            "Use the same test for everything",
            "Based on your data type, research design, and hypotheses",
            "Use the most complex test",
            "Let the software choose"
          ],
          correct: 1,
          explanation: "Choose tests based on your data type, research design, and hypotheses."
        },
        {
          id: 5,
          question: "What should you do when p < 0.05?",
          options: [
            "Accept the null hypothesis",
            "Reject the null hypothesis and conclude there is evidence of an effect",
            "Ignore the results",
            "Run more tests"
          ],
          correct: 1,
          explanation: "When p < 0.05, reject the null hypothesis and conclude there is evidence of an effect."
        }
      ]
    },
    challenge: {
      title: "Hypothesis Testing Challenge",
      description: "Design and conduct a hypothesis test for a real research question or decision",
      instructions: [
        "Formulate hypothesis: Create clear, testable null and alternative hypotheses",
        "Design study: Plan how to collect data to test your hypotheses",
        "Collect data: Gather relevant data using appropriate methods",
        "Conduct test: Choose and perform appropriate statistical tests",
        "Interpret results: Draw valid conclusions based on statistical evidence"
      ],
      successCriteria: [
        "Formulated clear, testable hypotheses with proper null and alternative statements",
        "Designed appropriate study to test the hypotheses",
        "Collected relevant data using proper methods",
        "Conducted appropriate statistical tests and interpreted results correctly",
        "Drew valid conclusions based on statistical evidence"
      ]
    },
    feedback: {
      strengths: [
        "Excellent hypothesis formulation and research design skills",
        "Strong understanding of statistical testing principles",
        "Good selection and application of appropriate statistical tests",
        "Clear interpretation of results and evidence-based conclusions"
      ],
      improvements: [
        "Consider more diverse hypothesis testing scenarios and methods",
        "Improve understanding of statistical assumptions and limitations",
        "Better interpretation of p-values and confidence intervals",
        "Stronger focus on practical applications and decision making"
      ],
      nextSteps: [
        "Practice with different types of hypothesis tests and research designs",
        "Develop skills in advanced statistical testing methods",
        "Apply hypothesis testing to real-world research and decision problems",
        "Learn about experimental design and statistical power analysis"
      ]
    },
    badge: {
      name: "Hypothesis Tester",
      emoji: "🔬",
      description: "Demonstrated excellent hypothesis testing and statistical analysis skills"
    },
    shareMessage: "Just mastered hypothesis testing! 🎉 Designed and conducted rigorous statistical tests, interpreted results correctly, and drew evidence-based conclusions. Ready to test ideas with statistical rigor! #HypothesisTesting #Statistics #EvidenceBased"
  },
  {
    id: 'metrics-kpis',
    title: 'Metrics & KPIs',
    emoji: '📊',
    context: 'professional',
    discover: {
      scenario: "Your company wants to improve customer satisfaction, but different departments are measuring different things and no one agrees on what success looks like. Marketing focuses on social media engagement, sales looks at conversion rates, and customer service tracks response times. How do you establish clear metrics and KPIs that align everyone around common goals?",
      problemExplanation: [
        "Metric Misalignment: Different departments measuring different things without clear connection to business goals",
        "Vanity Metrics: Focusing on metrics that look good but don't drive real business value",
        "Measurement Gaps: Missing key metrics that actually matter for success",
        "Actionability Issues: Metrics that don't provide clear guidance for improvement actions"
      ],
      solutionApproach: [
        "Goal Alignment: Connecting metrics to clear business objectives and outcomes",
        "Metric Selection: Choosing metrics that are relevant, measurable, and actionable",
        "KPI Framework: Establishing key performance indicators that drive decision making",
        "Measurement Systems: Creating systems to track, analyze, and act on metric data"
      ]
    },
    video: {
      title: "Design Effective Metrics & KPIs",
      duration: 5,
      content: [
        "Goal Alignment: Connecting metrics to clear business objectives and outcomes",
        "Metric Selection: Choosing metrics that are relevant, measurable, and actionable",
        "KPI Framework: Establishing key performance indicators that drive decision making",
        "Measurement Systems: Creating systems to track, analyze, and act on metric data",
        "Performance Management: Using metrics to drive improvement and accountability"
      ],
      script: `[HOOK - 30 seconds]
"Metrics and KPIs are the compass that guides your decisions and measures your success. Today, I'll show you how to design effective metrics that drive real results in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, metrics and KPIs help you:
- Track academic performance and identify areas for improvement
- Measure progress toward educational goals and career objectives
- Evaluate the effectiveness of study methods and learning strategies

Techniques: Set clear academic goals, track relevant metrics, use data to improve performance, measure learning outcomes.

Example: Sarah tracked her study time, quiz scores, and exam performance to identify that active recall methods improved her grades by 25%, leading to better study strategies."

[PROFESSIONAL - 2 minutes]
"In your career, metrics and KPIs help you:
- Measure business performance and drive strategic decisions
- Align teams around common goals and accountability measures
- Track progress toward organizational objectives and outcomes

Techniques: Align metrics with business goals, choose actionable KPIs, create measurement systems, use data for decision making.

Example: Mike established customer satisfaction KPIs that aligned marketing, sales, and service teams around common goals, leading to a 30% improvement in customer retention."

[PERSONAL - 1 minute]
"In personal life, metrics and KPIs help you:
- Track personal goals and measure progress toward life objectives
- Monitor health, fitness, and lifestyle improvements over time
- Make data-driven decisions about personal development and habits

Techniques: Set personal goals, track relevant metrics, use data to improve habits, measure life outcomes.

Example: Tom tracked his exercise frequency, sleep quality, and energy levels to optimize his daily routine, leading to better health and productivity."

[CALL TO ACTION - 30 seconds]
"Ready to design effective metrics? Start by identifying your key goals and choosing metrics that directly measure progress toward them. Remember, great metrics drive action and improvement. Begin today!"`
    },
    quiz: {
      title: "Test Your Metrics & KPIs Knowledge",
      questions: [
        {
          id: 1,
          question: "What makes a good KPI?",
          options: [
            "It's easy to measure",
            "It's relevant, measurable, actionable, and aligned with goals",
            "It's always positive",
            "It's complex"
          ],
          correct: 1,
          explanation: "A good KPI is relevant, measurable, actionable, and aligned with goals."
        },
        {
          id: 2,
          question: "What is the difference between metrics and KPIs?",
          options: [
            "They are the same thing",
            "KPIs are key metrics that directly measure progress toward important goals",
            "Metrics are more important",
            "KPIs are easier to measure"
          ],
          correct: 1,
          explanation: "KPIs are key metrics that directly measure progress toward important goals."
        },
        {
          id: 3,
          question: "How do you avoid vanity metrics?",
          options: [
            "By measuring everything",
            "By focusing on metrics that drive real business value and action",
            "By using complex calculations",
            "By avoiding social media"
          ],
          correct: 1,
          explanation: "Avoid vanity metrics by focusing on metrics that drive real business value and action."
        },
        {
          id: 4,
          question: "What is metric alignment?",
          options: [
            "Making all metrics the same",
            "Ensuring metrics support and measure progress toward common goals",
            "Using the same tools",
            "Having one person measure everything"
          ],
          correct: 1,
          explanation: "Metric alignment ensures metrics support and measure progress toward common goals."
        },
        {
          id: 5,
          question: "How do you make metrics actionable?",
          options: [
            "By making them complex",
            "By connecting them to specific actions and improvement strategies",
            "By measuring everything",
            "By avoiding negative numbers"
          ],
          correct: 1,
          explanation: "Make metrics actionable by connecting them to specific actions and improvement strategies."
        }
      ]
    },
    challenge: {
      title: "Metrics & KPIs Challenge",
      description: "Design and implement a metrics and KPI system for a real goal or project",
      instructions: [
        "Define goals: Identify clear objectives and outcomes you want to achieve",
        "Select metrics: Choose relevant, measurable, and actionable metrics",
        "Establish KPIs: Identify key performance indicators that drive decision making",
        "Create system: Set up tracking and measurement systems",
        "Monitor and act: Use metrics to drive improvement and accountability"
      ],
      successCriteria: [
        "Defined clear goals and objectives for the system",
        "Selected relevant and actionable metrics and KPIs",
        "Established effective tracking and measurement systems",
        "Created alignment between metrics and goals",
        "Demonstrated use of metrics to drive improvement and decision making"
      ]
    },
    feedback: {
      strengths: [
        "Excellent goal alignment and metric selection skills",
        "Strong understanding of KPI design and implementation",
        "Good creation of measurement systems and tracking processes",
        "Clear demonstration of metrics driving improvement and accountability"
      ],
      improvements: [
        "Consider more diverse metric types and measurement scenarios",
        "Improve understanding of leading vs lagging indicators",
        "Better focus on actionable metrics and improvement strategies",
        "Stronger emphasis on metric alignment and goal achievement"
      ],
      nextSteps: [
        "Practice with different types of goals and metric systems",
        "Develop skills in advanced KPI design and performance management",
        "Apply metrics and KPIs to complex organizational challenges",
        "Learn about balanced scorecards and performance measurement frameworks"
      ]
    },
    badge: {
      name: "Metrics Master",
      emoji: "📊",
      description: "Demonstrated excellent metrics and KPI design and implementation skills"
    },
    shareMessage: "Just mastered metrics and KPIs! 🎉 Designed effective measurement systems that align teams around common goals and drive real improvement. Ready to measure what matters and achieve better results! #Metrics #KPIs #PerformanceManagement"
  },
  {
    id: 'evidence-based-decisions',
    title: 'Evidence-Based Decisions',
    emoji: '🎯',
    context: 'personal',
    discover: {
      scenario: "You're trying to decide whether to switch to a new diet plan, but you're overwhelmed by conflicting information. Some sources say it's the best thing ever, others say it's dangerous, and you don't know who to trust. You need to make an informed decision based on reliable evidence, not just opinions and marketing claims. How do you evaluate evidence and make evidence-based decisions?",
      problemExplanation: [
        "Information Overload: Too much conflicting information from different sources",
        "Source Quality: Difficulty distinguishing between reliable evidence and biased opinions",
        "Evidence Evaluation: Not knowing how to assess the quality and relevance of evidence",
        "Decision Paralysis: Feeling overwhelmed and unable to make confident decisions"
      ],
      solutionApproach: [
        "Evidence Evaluation: Assessing the quality, relevance, and reliability of information sources",
        "Critical Thinking: Applying systematic reasoning to evaluate claims and evidence",
        "Decision Framework: Using structured approaches to make evidence-based choices",
        "Bias Recognition: Identifying and avoiding common biases in decision making"
      ]
    },
    video: {
      title: "Make Evidence-Based Decisions",
      duration: 5,
      content: [
        "Evidence Evaluation: Assessing the quality, relevance, and reliability of information sources",
        "Critical Thinking: Applying systematic reasoning to evaluate claims and evidence",
        "Decision Framework: Using structured approaches to make evidence-based choices",
        "Bias Recognition: Identifying and avoiding common biases in decision making",
        "Decision Quality: Making confident, well-reasoned decisions based on solid evidence"
      ],
      script: `[HOOK - 30 seconds]
"Evidence-based decisions are the foundation of smart choices in an information-rich world. Today, I'll show you how to evaluate evidence and make confident, well-reasoned decisions in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, evidence-based decisions help you:
- Evaluate research findings and academic sources critically
- Make informed choices about courses, majors, and career paths
- Avoid being misled by biased or unreliable information

Techniques: Evaluate source credibility, assess evidence quality, consider multiple perspectives, apply critical thinking.

Example: Lisa researched different study methods by evaluating peer-reviewed studies, comparing multiple sources, and testing methods herself before choosing the most effective approach."

[PROFESSIONAL - 2 minutes]
"In your career, evidence-based decisions help you:
- Make strategic business decisions based on solid data and analysis
- Evaluate market opportunities, product ideas, and business strategies
- Avoid costly mistakes from poor decision making and biased thinking

Techniques: Gather relevant data, evaluate evidence quality, consider alternatives, apply decision frameworks.

Example: Mike evaluated a new product idea by analyzing market data, customer feedback, and financial projections, leading to a successful launch that exceeded revenue targets by 40%."

[PERSONAL - 1 minute]
"In personal life, evidence-based decisions help you:
- Make informed choices about health, finances, and lifestyle
- Evaluate claims and avoid being misled by marketing or biased information
- Make confident decisions about important life choices

Techniques: Research thoroughly, evaluate sources, consider evidence quality, apply critical thinking.

Example: Tom researched different investment options by comparing historical returns, fees, and risk levels, making an informed decision that improved his retirement savings by 25%."

[CALL TO ACTION - 30 seconds]
"Ready to make evidence-based decisions? Start your next important choice by evaluating the quality and reliability of your information sources. Remember, great decisions are built on solid evidence and critical thinking. Begin today!"`
    },
    quiz: {
      title: "Test Your Evidence-Based Decisions Knowledge",
      questions: [
        {
          id: 1,
          question: "What is evidence-based decision making?",
          options: [
            "Making decisions quickly",
            "Using systematic evaluation of evidence to make informed choices",
            "Trusting your intuition",
            "Following popular opinion"
          ],
          correct: 1,
          explanation: "Evidence-based decision making uses systematic evaluation of evidence to make informed choices."
        },
        {
          id: 2,
          question: "How do you evaluate evidence quality?",
          options: [
            "By trusting the first source you find",
            "By assessing source credibility, methodology, and relevance",
            "By choosing the most recent information",
            "By avoiding conflicting sources"
          ],
          correct: 1,
          explanation: "Evaluate evidence quality by assessing source credibility, methodology, and relevance."
        },
        {
          id: 3,
          question: "What is critical thinking in decision making?",
          options: [
            "Being negative about everything",
            "Applying systematic reasoning to evaluate claims and evidence",
            "Avoiding decisions",
            "Trusting experts blindly"
          ],
          correct: 1,
          explanation: "Critical thinking is applying systematic reasoning to evaluate claims and evidence."
        },
        {
          id: 4,
          question: "How do you avoid decision-making biases?",
          options: [
            "By avoiding all information",
            "By recognizing common biases and using structured decision frameworks",
            "By making quick decisions",
            "By following your gut feeling"
          ],
          correct: 1,
          explanation: "Avoid biases by recognizing common biases and using structured decision frameworks."
        },
        {
          id: 5,
          question: "What makes a decision evidence-based?",
          options: [
            "It's based on personal experience",
            "It's based on systematic evaluation of relevant, high-quality evidence",
            "It's based on expert opinion",
            "It's based on popular consensus"
          ],
          correct: 1,
          explanation: "Evidence-based decisions are based on systematic evaluation of relevant, high-quality evidence."
        }
      ]
    },
    challenge: {
      title: "Evidence-Based Decisions Challenge",
      description: "Make an important decision using evidence-based approaches and critical thinking",
      instructions: [
        "Choose a decision: Select an important decision you need to make",
        "Gather evidence: Collect relevant information from multiple reliable sources",
        "Evaluate evidence: Assess the quality, credibility, and relevance of your sources",
        "Apply critical thinking: Use systematic reasoning to analyze the evidence",
        "Make decision: Draw conclusions and make your decision based on the evidence"
      ],
      successCriteria: [
        "Gathered evidence from multiple reliable and relevant sources",
        "Evaluated evidence quality, credibility, and relevance effectively",
        "Applied critical thinking and systematic reasoning to analyze evidence",
        "Identified and addressed potential biases in decision making",
        "Made a well-reasoned decision based on solid evidence"
      ]
    },
    feedback: {
      strengths: [
        "Excellent evidence gathering and evaluation skills",
        "Strong critical thinking and systematic reasoning abilities",
        "Good recognition and avoidance of decision-making biases",
        "Clear demonstration of evidence-based decision making process"
      ],
      improvements: [
        "Consider more diverse decision scenarios and evidence types",
        "Improve understanding of different types of biases and how to avoid them",
        "Better evaluation of evidence quality and source credibility",
        "Stronger focus on practical decision-making applications"
      ],
      nextSteps: [
        "Practice evidence-based decision making with different types of problems",
        "Develop skills in advanced critical thinking and reasoning",
        "Apply evidence-based approaches to complex real-world decisions",
        "Learn about decision science and behavioral economics"
      ]
    },
    badge: {
      name: "Evidence-Based Decision Maker",
      emoji: "🎯",
      description: "Demonstrated excellent evidence-based decision making and critical thinking skills"
    },
    shareMessage: "Just mastered evidence-based decisions! 🎉 Made informed choices using systematic evidence evaluation, critical thinking, and bias recognition. Ready to make confident, well-reasoned decisions in any situation! #EvidenceBased #CriticalThinking #DecisionMaking"
  }
];

export const module7Assessment = {
  title: "Data-Driven Decision Making Mastery Assessment",
  questions: [
    {
      id: 1,
      question: "What is the foundation of data-driven decision making?",
      options: [
        "Having the most data",
        "Systematic data analysis and evidence-based reasoning",
        "Using complex software",
        "Having statistical knowledge"
      ],
      correct: 1,
      explanation: "The foundation is systematic data analysis and evidence-based reasoning."
    },
    {
      id: 2,
      question: "How do you ensure data quality?",
      options: [
        "By collecting more data",
        "Through systematic data cleaning and validation processes",
        "By using expensive tools",
        "By avoiding missing values"
      ],
      correct: 1,
      explanation: "Ensure data quality through systematic data cleaning and validation processes."
    },
        {
          id: 3,
          question: "What is the purpose of exploratory data analysis?",
          options: [
            "To run statistical tests",
            "To understand data patterns and identify relationships before formal analysis",
            "To create reports",
            "To clean data"
          ],
          correct: 1,
          explanation: "Exploratory data analysis helps understand data patterns and identify relationships before formal analysis."
        },
        {
          id: 4,
          question: "How do you choose appropriate statistical methods?",
          options: [
            "Use the most complex method",
            "Based on data type, research question, and statistical assumptions",
            "Use the same method for everything",
            "Let software choose"
          ],
          correct: 1,
          explanation: "Choose methods based on data type, research question, and statistical assumptions."
        },
        {
          id: 5,
          question: "What is the goal of data analysis?",
          options: [
            "To prove hypotheses",
            "To extract meaningful insights and support evidence-based decisions",
            "To create visualizations",
            "To use all available data"
          ],
          correct: 1,
          explanation: "The goal is to extract meaningful insights and support evidence-based decisions."
        }
      ]
    };






