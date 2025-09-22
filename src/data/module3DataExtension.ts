// Module 3 Additional Subtopics - Prompt Engineering

export const module3AdditionalSubtopics = [
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
  },
  {
    id: 'output-formatting',
    title: 'Output Formatting',
    emoji: '📋',
    context: 'professional',
    discover: {
      scenario: "You need AI to generate content in specific formats - tables, bullet points, code, structured reports - but it keeps giving you paragraphs of text. How do you get AI to format output exactly how you need it?",
      problemExplanation: [
        "Format Mismatch: AI provides content in wrong format for your needs",
        "Inconsistent Structure: Output structure varies between requests",
        "No Clear Specifications: Not telling AI exactly how to format results",
        "Manual Reformatting: Spending time restructuring AI output manually"
      ],
      solutionApproach: [
        "Format Specification: Clearly define desired output structure",
        "Template Provision: Give AI examples of perfect formatting",
        "Structure Commands: Use specific formatting instructions",
        "Consistency Rules: Establish formatting standards for repeated use"
      ]
    },
    video: {
      title: "Master AI Output Formatting",
      duration: 5,
      content: [
        "Format Specification: How to request specific output structures",
        "Template Examples: Providing AI with formatting models",
        "Structure Commands: Using formatting instructions effectively",
        "Consistency Techniques: Ensuring uniform output across requests",
        "Advanced Formatting: Tables, lists, code, and complex structures"
      ]
    },
    quiz: {
      title: "Test Your Output Formatting Knowledge", 
      questions: [
        {
          id: 1,
          question: "How do you get AI to format output as a table?",
          options: [
            "Ask 'make it organized'",
            "Specify 'format as table with columns: X, Y, Z'",
            "Use the word 'table' somewhere in your prompt",
            "Ask AI to be more structured"
          ],
          correct: 1,
          explanation: "Specific formatting instructions with column definitions ensure AI creates properly structured tables."
        }
      ]
    },
    challenge: {
      title: "Master AI Output Formatting",
      description: "Get AI to produce content in 5 different specific formats",
      instructions: [
        "Choose 5 formats: Select different output types (table, bullets, code, etc.)",
        "Write format prompts: Create prompts specifying exact formatting",
        "Test each format: Verify AI produces correctly formatted output",
        "Create templates: Build reusable formatting instructions",
        "Document best practices: Note which formatting techniques work best"
      ],
      successCriteria: [
        "Successfully generated 5 different output formats",
        "Each format matches specified requirements exactly",
        "Created reusable formatting templates",
        "Documented effective formatting techniques",
        "Can explain when to use different output formats"
      ]
    },
    feedback: {
      strengths: ["You understand the importance of output formatting in prompt engineering"],
      improvements: ["Practice with more complex formatting requirements"],
      nextSteps: ["Create specialized formatting templates for your field"]
    },
    badge: {
      name: "Format Master",
      emoji: "📋", 
      description: "Mastered AI output formatting and structure control"
    },
    shareMessage: "Just mastered AI output formatting! Getting perfectly structured results every time! 📋 #PromptEngineering #Productivity"
  }
];

// These subtopics can be manually added to module3Data.ts
// No function needed - just reference for additional content
