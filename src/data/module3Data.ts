export const module3Subtopics = [
  {
    id: 'prompt-design',
    title: 'Prompt Design',
    emoji: '🎯',
    context: 'professional',
    discover: {
      scenario: "You need to use an AI tool to help with your research paper, but your prompts are too vague and the AI keeps giving generic responses. How do you craft effective prompts to get the specific information you need?",
      problemExplanation: [
        "Vague Instructions: Unclear prompts lead to generic or irrelevant responses",
        "Missing Context: AI doesn't understand the specific domain or requirements",
        "Poor Structure: Lack of clear format or expected output type",
        "Ineffective Iteration: Not refining prompts based on initial results"
      ],
      solutionApproach: [
        "Clear Instructions: Be specific about what you want and how you want it",
        "Provide Context: Include relevant background information and domain knowledge",
        "Structure Prompts: Use clear formatting and specify output format",
        "Iterate and Refine: Test prompts and improve based on results"
      ]
    },
    scenarios: {
      academic: ['Writing research prompts for AI tools'],
      professional: ['Designing prompts for business AI tools'],
      personal: ['Personal AI assistant prompts']
    },
    video: {
      title: 'Mastering Prompt Design',
      duration: 5,
      content: ['Introduction to prompt engineering'],
      script: 'Welcome to prompt design mastery...'
    },
    quiz: {
      title: 'Prompt Design Quiz',
      questions: [
        {
          id: 1,
          question: 'What makes a good prompt?',
          options: ['Vague instructions', 'Clear, specific instructions', 'Long paragraphs', 'No context'],
          correct: 1,
          explanation: 'Clear, specific instructions help AI understand exactly what you want and provide relevant responses.'
        }
      ]
    },
    challenge: {
      title: 'Design Your First Prompt',
      description: 'Create an effective prompt for a specific task',
      instructions: ['Choose a task', 'Write a clear prompt', 'Test and refine'],
      successCriteria: ['Clear instructions', 'Specific context', 'Expected output format']
    },
    feedback: {
      strengths: ['Clear communication', 'Good structure'],
      improvements: ['Add more context', 'Be more specific'],
      nextSteps: ['Practice with different tasks', 'Study advanced techniques']
    },
    badge: {
      name: 'Prompt Designer',
      emoji: '🎯',
      description: 'Mastered the art of prompt design'
    },
    shareMessage: 'Just mastered prompt design! Ready to create effective AI prompts!'
  },
  {
    id: 'context-engineering',
    title: 'Context Engineering',
    emoji: '🔧',
    context: 'professional',
    discover: {
      scenario: "You're using ChatGPT to help write a business proposal, but it keeps giving generic responses that don't fit your specific industry or client needs. How do you provide the right context to get relevant, tailored AI assistance?",
      problemExplanation: [
        "Generic Responses: AI provides broad answers without specific industry knowledge",
        "Missing Context: AI doesn't understand your specific situation or constraints",
        "Irrelevant Examples: AI uses examples that don't apply to your field",
        "Lack of Personalization: Responses don't match your audience or goals"
      ],
      solutionApproach: [
        "Industry Context: Provide specific industry background and terminology",
        "Audience Definition: Clearly describe who will read/use the output",
        "Constraint Specification: Include limitations, requirements, and goals",
        "Example Provision: Give AI examples of desired tone and style"
      ]
    },
    video: {
      title: "Master Context Engineering for Better AI Results",
      duration: 5,
      content: [
        "Industry Context: How to provide relevant background information",
        "Audience Targeting: Defining your specific audience and their needs",
        "Constraint Management: Setting clear parameters and limitations",
        "Example-Driven Prompts: Using examples to guide AI output",
        "Context Layering: Building complex context step by step"
      ],
      script: `[HOOK - 30 seconds]
"Context is everything in AI communication. Today, I'll show you how to engineer perfect context for any AI task in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, context engineering helps you:
- Get specific help with assignments by describing your course level and requirements
- Receive relevant examples that match your field of study
- Generate content that fits your professor's expectations

Example: Instead of 'Help me write an essay,' try 'Help me write a 5-page argumentative essay for my sophomore political science class about voting rights, using academic sources and APA format.'"

[PROFESSIONAL - 2 minutes]  
"In your career, context engineering helps you:
- Get industry-specific advice and solutions
- Generate content that matches your company's tone and style
- Solve problems that are relevant to your specific role

Example: Instead of 'Write a marketing email,' try 'Write a B2B marketing email for a SaaS startup targeting HR managers, focusing on time-saving benefits, using a professional but friendly tone.'"

[PERSONAL - 1 minute]
"In personal projects, context engineering helps you:
- Get advice tailored to your specific situation
- Generate content that matches your personal style
- Solve problems relevant to your circumstances

[CALL TO ACTION - 30 seconds]
"Start adding context to every AI interaction. Describe your situation, audience, and goals clearly!"`
    },
    quiz: {
      title: "Test Your Context Engineering Knowledge",
      questions: [
        {
          id: 1,
          question: "What makes a prompt context-rich?",
          options: [
            "Using many technical terms",
            "Providing specific background, audience, and constraints",
            "Making it as long as possible",
            "Using complex sentence structures"
          ],
          correct: 1,
          explanation: "Context-rich prompts include specific background information, clear audience definition, and relevant constraints."
        },
        {
          id: 2,
          question: "When writing a business proposal with AI help, what context should you provide?",
          options: [
            "Just the topic you want to write about",
            "Industry, client background, proposal goals, and desired tone",
            "Only your company information",
            "Just the deadline for the proposal"
          ],
          correct: 1,
          explanation: "Effective business writing requires industry context, client background, specific goals, and appropriate tone."
        },
        {
          id: 3,
          question: "How do you improve AI responses that are too generic?",
          options: [
            "Ask the AI to be more creative",
            "Add specific examples and constraints to your prompt",
            "Use more complex vocabulary",
            "Make your prompt shorter"
          ],
          correct: 1,
          explanation: "Adding specific examples, constraints, and context helps AI generate more targeted, relevant responses."
        }
      ]
    },
    challenge: {
      title: "Engineer Perfect Context",
      description: "Transform a generic prompt into a context-rich prompt for a specific scenario",
      instructions: [
        "Choose a task: Pick a real task you need AI help with",
        "Write generic prompt: Start with a basic, simple request",
        "Add context layers: Include background, audience, constraints, and examples",
        "Test both versions: Compare generic vs context-rich results",
        "Analyze improvement: Document how context changed the AI's response"
      ],
      successCriteria: [
        "Created a generic prompt and a context-rich version",
        "Context includes industry/field, audience, and specific requirements",
        "Tested both prompts with actual AI tool",
        "Documented clear improvement in AI response quality",
        "Identified key context elements that made the biggest difference"
      ]
    },
    feedback: {
      strengths: ["You understand the importance of context in AI communication"],
      improvements: ["Practice providing more specific industry context and audience details"],
      nextSteps: ["Apply context engineering to different types of AI tasks and domains"]
    },
    badge: {
      name: "Context Engineer",
      emoji: "🔧",
      description: "Mastered the art of providing rich context for better AI results"
    },
    shareMessage: "Just mastered context engineering! My AI prompts now get exactly what I need! 🔧 #PromptEngineering #AISkills"
  },
  {
    id: 'role-based-prompts',
    title: 'Role-Based Prompts',
    emoji: '🎭',
    context: 'academic',
    discover: {
      scenario: "You need help with your economics homework, but ChatGPT keeps giving you basic explanations when you need advanced analysis. How do you get AI to respond as an expert economist rather than a general assistant?",
      problemExplanation: [
        "Generic AI Persona: AI responds as a general assistant rather than subject expert",
        "Wrong Expertise Level: AI provides basic explanations when you need advanced analysis",
        "Mismatched Communication Style: AI doesn't match the professional tone you need",
        "Lack of Specialization: AI doesn't use field-specific knowledge or terminology"
      ],
      solutionApproach: [
        "Role Assignment: Tell AI to act as a specific expert or professional",
        "Expertise Level: Specify the level of knowledge and analysis you need",
        "Communication Style: Define how the expert should communicate",
        "Field Specialization: Request use of relevant terminology and frameworks"
      ]
    },
    video: {
      title: "Master Role-Based Prompts for Expert AI Help",
      duration: 5,
      content: [
        "Expert Roles: How to assign specific professional roles to AI",
        "Expertise Levels: Matching AI responses to your knowledge level",
        "Communication Styles: Getting AI to match professional communication",
        "Field Specialization: Using domain-specific knowledge and terminology",
        "Role Consistency: Maintaining expert persona throughout conversation"
      ],
      script: `[HOOK - 30 seconds]
"Transform AI into any expert you need. Today, I'll show you how to use role-based prompts to get professional-level help in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, role-based prompts help you:
- Get expert tutoring by asking AI to act as a subject professor
- Receive advanced analysis by requesting graduate-level explanations
- Practice presentations by having AI act as your audience

Example: Instead of 'Explain economics,' try 'Act as an economics professor. Explain supply and demand theory at an intermediate undergraduate level, using real-world examples from current markets.'"

[PROFESSIONAL - 2 minutes]
"In your career, role-based prompts help you:
- Get industry-specific advice by having AI act as a senior professional
- Practice interviews by having AI act as a hiring manager
- Solve problems by accessing specialized expertise

Example: 'Act as a senior marketing manager with 10 years of B2B SaaS experience. Review my email campaign strategy and provide specific improvement suggestions.'"

[PERSONAL - 1 minute]
"For personal projects, role-based prompts help you:
- Get specialized advice for hobbies and interests
- Practice skills by having AI act as a coach or mentor
- Learn from different perspectives and expertise

[CALL TO ACTION - 30 seconds]
"Start every AI conversation by defining the expert role you need. Watch how much better your results become!"`
    },
    quiz: {
      title: "Test Your Role-Based Prompting Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the best way to get advanced economics help from AI?",
          options: [
            "Ask 'Help me with economics'",
            "Ask 'Act as an economics professor and explain advanced market theory'", 
            "Ask 'Give me economics information'",
            "Ask 'What is economics?'"
          ],
          correct: 1,
          explanation: "Role-based prompts with specific expertise levels get much better, more targeted responses."
        },
        {
          id: 2,
          question: "When would you use 'Act as a hiring manager' role?",
          options: [
            "When writing your resume",
            "When practicing interview questions and getting feedback",
            "When learning about different jobs",
            "When writing cover letters"
          ],
          correct: 1,
          explanation: "The hiring manager role is perfect for interview practice and getting feedback from the employer's perspective."
        },
        {
          id: 3,
          question: "How do you specify the expertise level you need?",
          options: [
            "Just ask for help without specifying",
            "Include the level in your role assignment (beginner, intermediate, advanced)",
            "Use complex vocabulary",
            "Ask multiple questions"
          ],
          correct: 1,
          explanation: "Specifying expertise level in your role assignment ensures AI matches the complexity you need."
        }
      ]
    },
    challenge: {
      title: "Create Expert AI Assistants",
      description: "Practice creating role-based prompts for different expert scenarios",
      instructions: [
        "Choose 3 different scenarios: Pick academic, professional, and personal situations",
        "Define expert roles: Specify what kind of expert you need for each",
        "Create role-based prompts: Write detailed prompts with role, expertise level, and context",
        "Test with AI: Try your prompts and compare with generic versions",
        "Refine and improve: Adjust roles based on AI response quality"
      ],
      successCriteria: [
        "Created 3 different expert role prompts",
        "Each prompt includes role, expertise level, and specific context",
        "Tested prompts show clear improvement over generic requests",
        "Documented which role elements work best",
        "Can explain when and why to use different expert roles"
      ]
    },
    feedback: {
      strengths: ["You understand how to leverage AI expertise through role assignment"],
      improvements: ["Practice defining more specific expertise levels and communication styles"],
      nextSteps: ["Apply role-based prompting to different domains and professional scenarios"]
    },
    badge: {
      name: "AI Role Master",
      emoji: "🎭",
      description: "Mastered the art of creating expert AI assistants through role-based prompting"
    },
    shareMessage: "Just learned to turn AI into any expert I need! Role-based prompting is a game-changer! 🎭 #PromptEngineering #AIExpert"
  },
  // Adding 4 more subtopics to complete Module 3
  {
    id: 'iterative-refinement',
    title: 'Iterative Refinement',
    emoji: '🔄',
    context: 'professional',
    discover: {
      scenario: "Your first AI prompt didn't give you what you needed for your marketing campaign. The content is close but not quite right. How do you systematically improve your prompts to get exactly what you want?",
      problemExplanation: [
        "One-Shot Thinking: Expecting perfect results from the first prompt",
        "No Refinement Strategy: Not knowing how to improve prompts systematically",
        "Unclear Feedback: Not knowing what specific changes to make",
        "Prompt Abandonment: Giving up instead of iterating toward better results"
      ],
      solutionApproach: [
        "Systematic Iteration: Step-by-step prompt improvement process",
        "Specific Feedback: Identifying exactly what needs to change",
        "Incremental Changes: Making one improvement at a time",
        "Result Comparison: Testing and comparing different prompt versions"
      ]
    },
    video: {
      title: "Master Iterative Prompt Refinement",
      duration: 5,
      content: [
        "Iteration Strategy: Systematic approach to prompt improvement",
        "Feedback Analysis: Identifying what needs to change in AI responses",
        "Incremental Changes: Making targeted improvements one at a time",
        "A/B Testing: Comparing different prompt versions",
        "Refinement Patterns: Common prompt improvement techniques"
      ]
    },
    quiz: {
      title: "Test Your Iterative Refinement Knowledge",
      questions: [
        {
          id: 1,
          question: "What should you do if your first AI prompt doesn't give perfect results?",
          options: [
            "Give up and try a different AI tool",
            "Systematically refine the prompt based on what's missing",
            "Make the prompt much longer",
            "Start over with a completely different approach"
          ],
          correct: 1,
          explanation: "Systematic refinement based on specific gaps is the most effective approach to prompt improvement."
        }
      ]
    },
    challenge: {
      title: "Perfect Your Prompts Through Iteration",
      description: "Take a basic prompt and refine it through systematic iteration",
      instructions: [
        "Start with basic prompt: Choose a real task and write a simple prompt",
        "Test and analyze: Run the prompt and identify what's missing or wrong",
        "Make targeted changes: Improve one specific aspect at a time",
        "Test again: Compare results and note improvements",
        "Repeat process: Continue until you get excellent results"
      ],
      successCriteria: [
        "Completed at least 3 iterations of prompt improvement",
        "Each iteration targets a specific improvement area",
        "Documented what changed and why in each iteration",
        "Final prompt produces significantly better results than original",
        "Can explain the systematic refinement process"
      ]
    },
    feedback: {
      strengths: ["You understand the iterative nature of effective prompt engineering"],
      improvements: ["Practice identifying specific improvement areas more quickly"],
      nextSteps: ["Apply iterative refinement to complex, multi-step AI tasks"]
    },
    badge: {
      name: "Prompt Refiner",
      emoji: "🔄",
      description: "Mastered systematic prompt iteration and refinement"
    },
    shareMessage: "Just mastered prompt refinement! My AI results keep getting better with each iteration! 🔄 #PromptEngineering #ContinuousImprovement"
  },
  {
    id: 'ethical-ai-use',
    title: 'Ethical AI Use',
    emoji: '⚖️',
    context: 'academic',
    discover: {
      scenario: "You're using AI to help with your research paper, but you're unsure about academic integrity. Is it cheating? How much AI help is acceptable? How do you use AI ethically while still getting the help you need?",
      problemExplanation: [
        "Academic Integrity Confusion: Unclear boundaries between acceptable AI help and cheating",
        "Attribution Issues: Not knowing when and how to cite AI assistance",
        "Over-Dependence Risk: Using AI as a crutch instead of learning tool",
        "Policy Uncertainty: Different institutions have different AI use policies"
      ],
      solutionApproach: [
        "Policy Understanding: Learn your institution's specific AI use guidelines",
        "Transparent Usage: Always disclose when and how you used AI assistance",
        "Learning-Focused Approach: Use AI to enhance learning, not replace thinking",
        "Proper Attribution: Cite AI tools appropriately in your work"
      ]
    },
    video: {
      title: "Navigate AI Ethics in Academic and Professional Settings",
      duration: 5,
      content: [
        "Academic Integrity: Understanding AI use policies and boundaries",
        "Proper Attribution: How to cite AI assistance appropriately",
        "Learning Enhancement: Using AI to boost rather than replace learning",
        "Professional Ethics: AI use guidelines in workplace settings",
        "Transparent Practices: Building trust through honest AI disclosure"
      ]
    },
    quiz: {
      title: "Test Your AI Ethics Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the best practice when using AI for academic assignments?",
          options: [
            "Use AI secretly and don't tell anyone",
            "Check your institution's policy and disclose AI use appropriately",
            "Only use AI for brainstorming, never for writing",
            "Avoid AI completely in academic settings"
          ],
          correct: 1,
          explanation: "Following institutional policies and transparent disclosure ensures ethical AI use in academics."
        }
      ]
    },
    challenge: {
      title: "Develop Your AI Ethics Framework",
      description: "Create personal guidelines for ethical AI use in different contexts",
      instructions: [
        "Research policies: Find your institution's AI use guidelines",
        "Define boundaries: Decide what AI help is appropriate for different tasks",
        "Create attribution system: Develop consistent way to cite AI assistance",
        "Test scenarios: Apply your framework to real academic/work situations",
        "Refine guidelines: Adjust based on experience and feedback"
      ],
      successCriteria: [
        "Created comprehensive personal AI ethics framework",
        "Framework addresses academic, professional, and personal contexts",
        "Includes clear attribution and disclosure practices",
        "Tested framework with real scenarios",
        "Can explain ethical reasoning behind guidelines"
      ]
    },
    feedback: {
      strengths: ["You understand the importance of ethical AI use"],
      improvements: ["Practice applying ethical frameworks to complex scenarios"],
      nextSteps: ["Stay updated on evolving AI ethics and institutional policies"]
    },
    badge: {
      name: "AI Ethics Guardian",
      emoji: "⚖️",
      description: "Committed to ethical and responsible AI use"
    },
    shareMessage: "Just developed my AI ethics framework! Using AI responsibly and transparently! ⚖️ #AIEthics #ResponsibleAI"
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Techniques',
    emoji: '🚀',
    context: 'professional',
    discover: {
      scenario: "You've mastered basic prompting, but you need AI to help with complex, multi-step projects like market research, competitive analysis, and strategic planning. How do you use advanced prompting techniques for sophisticated tasks?",
      problemExplanation: [
        "Simple Prompts Insufficient: Basic prompts can't handle complex, multi-step tasks",
        "Lack of Structure: No systematic approach to breaking down complex requests",
        "Context Loss: AI forgets important details in long conversations",
        "Quality Inconsistency: Results vary widely without advanced techniques"
      ],
      solutionApproach: [
        "Chain-of-Thought Prompting: Breaking complex tasks into logical steps",
        "Few-Shot Learning: Providing examples to guide AI behavior",
        "Prompt Chaining: Connecting multiple prompts for complex workflows",
        "Template Systems: Creating reusable prompt frameworks"
      ]
    },
    video: {
      title: "Master Advanced Prompt Engineering Techniques",
      duration: 5,
      content: [
        "Chain-of-Thought: Breaking complex problems into logical steps",
        "Few-Shot Learning: Using examples to train AI behavior",
        "Prompt Chaining: Connecting prompts for complex workflows",
        "Template Creation: Building reusable prompt frameworks",
        "Advanced Formatting: Structuring prompts for optimal results"
      ]
    },
    quiz: {
      title: "Test Your Advanced Prompting Knowledge",
      questions: [
        {
          id: 1,
          question: "What is chain-of-thought prompting?",
          options: [
            "Writing very long prompts",
            "Breaking complex tasks into logical, sequential steps",
            "Using multiple AI tools simultaneously",
            "Thinking about your prompt before writing it"
          ],
          correct: 1,
          explanation: "Chain-of-thought prompting breaks complex tasks into logical steps, helping AI work through problems systematically."
        }
      ]
    },
    challenge: {
      title: "Build Advanced Prompt Systems",
      description: "Create a multi-step prompt system for a complex professional task",
      instructions: [
        "Choose complex task: Pick a multi-step professional project",
        "Design prompt chain: Break task into logical sequence of prompts",
        "Create templates: Build reusable prompt frameworks",
        "Test system: Run through entire prompt chain",
        "Optimize workflow: Refine based on results and efficiency"
      ],
      successCriteria: [
        "Created prompt chain with 3+ connected steps",
        "Each prompt builds on previous results",
        "System produces high-quality, consistent output",
        "Templates are reusable for similar tasks",
        "Workflow is efficient and well-documented"
      ]
    },
    feedback: {
      strengths: ["You grasp advanced prompt engineering concepts"],
      improvements: ["Practice with more complex, real-world scenarios"],
      nextSteps: ["Develop expertise in specific domains and create specialized prompt libraries"]
    },
    badge: {
      name: "Prompt Engineer Pro",
      emoji: "🚀",
      description: "Mastered advanced prompt engineering techniques and systems"
    },
    shareMessage: "Just mastered advanced prompt engineering! Building sophisticated AI workflows! 🚀 #PromptEngineering #AIExpert"
  }
];

export const module3Assessment = {
  title: "Prompt Engineering Assessment",
  questions: [
    {
      id: 1,
      question: "What is the most important aspect of prompt design?",
      options: ["Length", "Clarity", "Complexity", "Speed"],
      correct: 1,
      explanation: "Clarity is the most important aspect of prompt design as it ensures the AI understands exactly what you want."
    }
  ],
  sections: [
    {
      name: "Prompt Design",
      questions: 1,
      context: "AI interaction scenarios"
    }
  ],
  practicalChallenge: {
    title: "Create Effective Prompts",
    duration: 10,
    requirements: ["Clear instructions", "Specific context", "Expected format"]
  },
  scoring: {
    quizQuestions: 100,
    practicalPresentation: 0,
    totalPossible: 100
  },
  gradeLevels: [
    { range: "90-100", grade: "Prompt Master", description: "Excellent" },
    { range: "80-89", grade: "Prompt Expert", description: "Very Good" },
    { range: "70-79", grade: "Prompt Proficient", description: "Good" },
    { range: "60-69", grade: "Prompt Developing", description: "Needs Improvement" },
    { range: "0-59", grade: "Prompt Beginner", description: "Requires Additional Practice" }
  ]
};