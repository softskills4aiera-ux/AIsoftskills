// Module 3: Prompt-Context Engineering
// Teaching Gen Z to effectively interact with AI/LLMs for academics, projects, and professional work

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
    instructions?: string[];
    successCriteria?: string[];
    contexts?: {
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

// Module 3 Subtopics Data
export const module3Data: SubtopicData[] = [
  {
    id: 'prompt-design',
    title: 'Prompt Design',
    emoji: '📝',
    context: 'academic',
    discover: {
      scenario: 'You\'re using ChatGPT to help with your research paper, but the AI keeps giving generic, unhelpful responses. You need to learn how to craft prompts that get exactly the information you need.',
      problemExplanation: [
        'Vague prompts lead to vague, unhelpful AI responses',
        'Not providing enough context results in generic answers',
        'Poor prompt structure makes it hard for AI to understand your needs',
        'Not iterating on prompts means missing better results'
      ],
      solutionApproach: [
        'Use the CLEAR framework: Context, Length, Examples, Audience, Role',
        'Be specific about what you want and in what format',
        'Provide relevant context and background information',
        'Give examples of desired output format',
        'Iterate and refine prompts based on results',
        'Break complex requests into smaller, focused prompts'
      ]
    },
    video: {
      title: 'Mastering Prompt Design for AI',
      duration: 7,
      content: [
        'Welcome to the world of prompt engineering!',
        'Prompt design is the skill of communicating effectively with AI systems.',
        'Think of AI as a knowledgeable but literal assistant.',
        'The quality of AI output depends heavily on the quality of your prompt.',
        'The CLEAR framework helps structure effective prompts.',
        'C - Context: Provide background information and situation.',
        'L - Length: Specify desired output length or format.',
        'E - Examples: Show what you want with concrete examples.',
        'A - Audience: Define who the output is for.',
        'R - Role: Assign a role or perspective to the AI.',
        'Specificity is key: "Explain photosynthesis" vs "Explain photosynthesis to a 10-year-old using a cooking analogy".',
        'Break complex tasks into steps: Don\'t ask AI to write entire essay at once.',
        'Iterate on prompts: If first response isn\'t perfect, refine your prompt.',
        'Use constraints creatively: "In exactly 3 bullet points" or "Using only simple words".',
        'Practice prompt design regularly to develop intuition for what works.'
      ]
    },
    quiz: {
      title: 'Prompt Design Quiz',
      questions: [
        {
          id: 1,
          question: 'What does the "C" in CLEAR framework stand for?',
          options: ['Clarity', 'Context', 'Concise', 'Creative'],
          correct: 1,
          explanation: 'Context provides background information that helps AI understand your needs.'
        },
        {
          id: 2,
          question: 'Which prompt is more effective?',
          options: ['"Explain AI"', '"Explain AI to a college student in 3 paragraphs with real-world examples"', '"Tell me about AI"', '"What is AI?"'],
          correct: 1,
          explanation: 'Specific prompts with context, audience, and format constraints produce better results.'
        },
        {
          id: 3,
          question: 'Why should you iterate on prompts?',
          options: ['To waste time', 'To refine and improve AI responses', 'It\'s not necessary', 'To confuse the AI'],
          correct: 1,
          explanation: 'Iterating on prompts helps you learn what works and get better results.'
        },
        {
          id: 4,
          question: 'What should you do with complex tasks?',
          options: ['Ask everything at once', 'Break them into smaller, focused prompts', 'Avoid using AI', 'Use shorter prompts'],
          correct: 1,
          explanation: 'Breaking complex tasks into steps helps AI understand and deliver better results.'
        },
        {
          id: 5,
          question: 'Providing examples in prompts helps because:',
          options: ['It makes prompts longer', 'It shows AI the desired format and style', 'It\'s required', 'It confuses the AI'],
          correct: 1,
          explanation: 'Examples demonstrate the format, style, and level of detail you want.'
        }
      ]
    },
    challenge: {
      title: 'Prompt Design Mastery',
      description: 'Master the art of crafting effective prompts for AI systems',
      contexts: {
        academic: {
          title: 'Academic Prompt Design Challenge',
          description: 'Use AI effectively for research, studying, and academic writing',
          instructions: [
            'Choose an academic task (essay research, concept explanation, study guide)',
            'Craft prompts using the CLEAR framework',
            'Test multiple prompt variations and compare results',
            'Refine prompts based on output quality',
            'Document your best prompts for different academic tasks',
            'Share effective prompts with classmates',
            'Create a personal prompt library for common academic needs'
          ],
          successCriteria: [
            'Your prompts consistently produce high-quality academic outputs',
            'You can explain the CLEAR framework to others',
            'You\'ve built a library of effective academic prompts',
            'You can adapt prompts for different subjects',
            'You understand when AI is helpful vs when to do work yourself',
            'You use AI ethically and cite it appropriately'
          ]
        },
        professional: {
          title: 'Professional Prompt Design Challenge',
          description: 'Use AI to enhance professional work and productivity',
          instructions: [
            'Identify professional tasks where AI can help (emails, reports, analysis)',
            'Design prompts for common professional scenarios',
            'Test prompts for business writing, data analysis, or problem-solving',
            'Iterate to achieve professional-quality outputs',
            'Build a professional prompt template library',
            'Train colleagues on effective prompt design',
            'Integrate AI tools into your professional workflow'
          ],
          successCriteria: [
            'Your prompts produce professional-quality outputs',
            'You\'ve improved work efficiency using AI',
            'You can train others in prompt design',
            'You have a library of professional prompt templates',
            'You understand AI limitations in professional contexts',
            'You use AI ethically and responsibly at work'
          ]
        },
        personal: {
          title: 'Personal Prompt Design Challenge',
          description: 'Use AI for personal learning, creativity, and problem-solving',
          instructions: [
            'Choose personal goals where AI can help (learning, planning, creativity)',
            'Experiment with different prompt styles and approaches',
            'Use AI for personal development, hobby learning, or life planning',
            'Refine prompts for personalized, relevant outputs',
            'Build a collection of helpful personal prompts',
            'Share useful prompts with friends and family',
            'Develop AI interaction habits for lifelong learning'
          ],
          successCriteria: [
            'You can use AI effectively for personal goals',
            'Your prompts produce personalized, useful outputs',
            'You\'ve helped others learn to use AI',
            'You have a personal AI toolkit',
            'You balance AI assistance with personal growth',
            'You use AI ethically in personal contexts'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You craft clear, specific prompts with good context',
        'You iterate effectively to improve AI responses',
        'You understand how to structure prompts for different tasks',
        'You use the CLEAR framework consistently',
        'You help others improve their prompt design skills'
      ],
      improvements: [
        'Experiment with more diverse prompt structures',
        'Practice breaking complex tasks into better sub-prompts',
        'Provide more specific examples in your prompts',
        'Build a more comprehensive prompt library',
        'Reflect more on what makes prompts effective'
      ],
      nextSteps: [
        'Continue building your prompt library',
        'Explore advanced prompting techniques',
        'Learn about context management for longer conversations',
        'Share your best prompts with the community',
        'Stay updated on AI capabilities and limitations'
      ]
    },
    badge: {
      name: 'Prompt Designer',
      emoji: '📝',
      description: 'Expert in crafting effective AI prompts'
    },
    shareMessage: 'Just mastered the art of prompt design! 📝 #PromptEngineering #AISkills'
  },
  {
    id: 'context-management',
    title: 'Context Management',
    emoji: '🎯',
    context: 'professional',
    discover: {
      scenario: 'You\'re having a long conversation with ChatGPT about a complex project, but it keeps forgetting important details you mentioned earlier. You need to learn how to manage context in AI conversations.',
      problemExplanation: [
        'AI has limited memory and context windows',
        'Important information gets lost in long conversations',
        'No systematic approach to maintaining context',
        'Difficulty referencing previous parts of conversation'
      ],
      solutionApproach: [
        'Understand AI context windows and limitations',
        'Use context anchors: repeatedly reference key information',
        'Summarize and re-state important points periodically',
        'Start new conversations for new topics',
        'Use system prompts or custom instructions to set persistent context',
        'Break long tasks into contextualized sub-conversations'
      ]
    },
    video: {
      title: 'Managing AI Context Effectively',
      duration: 6,
      content: [
        'Context management is crucial for effective AI conversations.',
        'AI systems have a "context window" - a limit on how much they can remember.',
        'Think of it like short-term memory for AI.',
        'Use context anchors to keep important information active.',
        'Start key prompts with: "Remember that we\'re working on..." or "In the context of..."',
        'Periodically summarize what\'s been discussed.',
        'This refreshes the AI\'s memory and keeps it on track.',
        'Start new conversations for substantially new topics.',
        'Don\'t try to cover everything in one endless chat.',
        'Use custom instructions or system prompts for persistent context.',
        'These set the stage for all your interactions.',
        'Break complex projects into focused sub-conversations.',
        'Each conversation should have a clear, specific goal.',
        'Reference previous outputs explicitly when needed.',
        'Say: "Based on the analysis you provided earlier..." instead of assuming it remembers.'
      ]
    },
    quiz: {
      title: 'Context Management Quiz',
      questions: [
        {
          id: 6,
          question: 'What is an AI context window?',
          options: ['A visual interface', 'The amount of conversation AI can remember', 'A time limit', 'A screen size'],
          correct: 1,
          explanation: 'Context window is the limit on how much conversation history AI can process.'
        },
        {
          id: 7,
          question: 'What are context anchors?',
          options: ['Links to websites', 'Repeated references to key information', 'AI memory storage', 'Chat history'],
          correct: 1,
          explanation: 'Context anchors repeatedly reference important information to keep it active.'
        },
        {
          id: 8,
          question: 'When should you start a new AI conversation?',
          options: ['Every 5 minutes', 'When changing to a substantially new topic', 'Never', 'After every question'],
          correct: 1,
          explanation: 'New conversations work best for new topics to avoid context confusion.'
        },
        {
          id: 9,
          question: 'Why summarize periodically in long AI conversations?',
          options: ['To waste time', 'To refresh AI\'s memory and maintain focus', 'It\'s not helpful', 'To confuse the AI'],
          correct: 1,
          explanation: 'Periodic summaries refresh context and keep the conversation on track.'
        },
        {
          id: 10,
          question: 'What are custom instructions/system prompts?',
          options: ['One-time commands', 'Persistent context that applies to all interactions', 'Error messages', 'Chat history'],
          correct: 1,
          explanation: 'Custom instructions set persistent context that guides all AI interactions.'
        }
      ]
    },
    challenge: {
      title: 'Context Management Mastery',
      description: 'Master managing context in AI conversations for better results',
      contexts: {
        academic: {
          title: 'Academic Context Management Challenge',
          description: 'Manage context effectively in AI-assisted academic work',
          instructions: [
            'Start a complex academic project with AI assistance',
            'Practice using context anchors throughout the conversation',
            'Summarize progress at key milestones',
            'Create custom instructions for your academic needs',
            'Break the project into focused sub-conversations',
            'Reference previous AI outputs explicitly',
            'Document your context management strategies'
          ],
          successCriteria: [
            'AI maintains focus throughout long projects',
            'You effectively reference previous context',
            'You know when to start new conversations',
            'You use custom instructions effectively',
            'You can teach context management to peers',
            'Your AI-assisted work is coherent and consistent'
          ]
        },
        professional: {
          title: 'Professional Context Management Challenge',
          description: 'Maintain effective AI context for professional projects',
          instructions: [
            'Use AI for a multi-stage professional project',
            'Set up custom instructions for your professional role',
            'Use context anchors for key business requirements',
            'Organize conversations by project phase or topic',
            'Summarize decisions and next steps regularly',
            'Reference previous outputs in new prompts',
            'Build a system for managing professional AI conversations'
          ],
          successCriteria: [
            'Your professional AI outputs are consistent',
            'You maintain context across multiple sessions',
            'You organize AI conversations effectively',
            'You can train colleagues on context management',
            'You integrate AI seamlessly into workflow',
            'Your AI-assisted work meets professional standards'
          ]
        },
        personal: {
          title: 'Personal Context Management Challenge',
          description: 'Use AI effectively for ongoing personal projects',
          instructions: [
            'Choose a personal project requiring multiple AI interactions',
            'Practice maintaining context across sessions',
            'Use custom instructions for personalized responses',
            'Organize your AI conversations by topic',
            'Build a system for tracking AI-assisted personal projects',
            'Share context management tips with friends',
            'Develop long-term AI collaboration habits'
          ],
          successCriteria: [
            'You maintain effective context in personal AI use',
            'Your AI interactions are organized and trackable',
            'You can revisit and build on previous conversations',
            'You help others manage AI context',
            'You use AI consistently for personal growth',
            'You balance AI assistance with personal agency'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You effectively maintain context in AI conversations',
        'Your use of context anchors keeps AI focused',
        'You organize AI interactions systematically',
        'You know when to start fresh conversations',
        'You help others understand context management'
      ],
      improvements: [
        'Practice using custom instructions more effectively',
        'Experiment with different context management strategies',
        'Build better systems for tracking AI conversations',
        'Improve your summarization skills',
        'Reference previous context more explicitly'
      ],
      nextSteps: [
        'Develop a personal context management system',
        'Learn advanced prompting techniques',
        'Explore different AI tools and their context capabilities',
        'Build a library of effective custom instructions',
        'Teach context management to others'
      ]
    },
    badge: {
      name: 'Context Manager',
      emoji: '🎯',
      description: 'Expert in managing AI conversation context'
    },
    shareMessage: 'Just mastered AI context management! 🎯 #PromptEngineering #AITools'
  },
  {
    id: 'ai-communication',
    title: 'AI Communication',
    emoji: '🤖',
    context: 'academic',
    discover: {
      scenario: 'You know AI can help with your studies and projects, but you\'re not sure how to communicate your needs clearly to get useful assistance.',
      problemExplanation: [
        'Treating AI like a search engine instead of a collaborator',
        'Not understanding AI\'s strengths and limitations',
        'Poor communication leads to misaligned outputs',
        'Missing opportunities to leverage AI capabilities'
      ],
      solutionApproach: [
        'Understand AI as a collaborative tool, not just a question-answerer',
        'Communicate your goals and constraints clearly',
        'Use conversational follow-ups to refine outputs',
        'Provide feedback to guide AI toward better responses',
        'Learn to ask clarifying questions before generating',
        'Understand different AI tools and their specialties'
      ]
    },
    video: {
      title: 'Effective AI Communication',
      duration: 6,
      content: [
        'Communicating with AI is different from using search engines.',
        'AI can engage in back-and-forth dialogue to understand your needs.',
        'Start conversations by clearly stating your goal.',
        '"I need help writing a persuasive essay about climate change" vs just "climate change".',
        'Use follow-up questions to refine outputs.',
        '"Can you make this more formal?" or "Add specific examples".',
        'Provide feedback: "This is good, but can you focus more on..."',
        'Ask AI to ask YOU questions before generating.',
        '"What information do you need from me to write this effectively?"',
        'Understand AI\'s strengths: summarizing, explaining, brainstorming, drafting.',
        'Understand AI\'s limitations: can\'t access real-time data, may have biases, can make mistakes.',
        'Different AI tools have different capabilities.',
        'ChatGPT for conversation, Midjourney for images, GitHub Copilot for code.',
        'Be specific about format: "bullet points", "table format", "step-by-step guide".',
        'Think of AI as a smart assistant who needs clear direction.'
      ]
    },
    quiz: {
      title: 'AI Communication Quiz',
      questions: [
        {
          id: 11,
          question: 'How should you think of AI?',
          options: ['As a search engine', 'As a collaborative tool and assistant', 'As perfect and always right', 'As a replacement for learning'],
          correct: 1,
          explanation: 'AI works best as a collaborative tool that needs clear communication and guidance.'
        },
        {
          id: 12,
          question: 'What should you do if AI\'s first response isn\'t perfect?',
          options: ['Give up', 'Use follow-up prompts to refine it', 'Start completely over', 'Accept it as-is'],
          correct: 1,
          explanation: 'Follow-up prompts allow you to iteratively improve AI responses.'
        },
        {
          id: 13,
          question: 'Why ask AI to ask you questions first?',
          options: ['To waste time', 'To ensure AI understands your needs before generating', 'It\'s not helpful', 'To test the AI'],
          correct: 1,
          explanation: 'Having AI ask questions ensures it understands your needs and constraints.'
        },
        {
          id: 14,
          question: 'Which is an AI strength?',
          options: ['Accessing real-time news', 'Summarizing and explaining complex information', 'Being 100% factually accurate', 'Reading your mind'],
          correct: 1,
          explanation: 'AI excels at summarizing, explaining, and transforming information.'
        },
        {
          id: 15,
          question: 'What should you specify about AI output?',
          options: ['Nothing, let AI decide', 'Format, length, audience, and style', 'Only the topic', 'Just the length'],
          correct: 1,
          explanation: 'Specifying format, length, audience, and style produces more useful outputs.'
        }
      ]
    },
    challenge: {
      title: 'AI Communication Excellence',
      description: 'Develop mastery in communicating with AI systems',
      contexts: {
        academic: {
          title: 'Academic AI Communication Challenge',
          description: 'Communicate effectively with AI for academic success',
          instructions: [
            'Use AI for different academic tasks: research, writing, studying',
            'Practice conversational refinement with follow-ups',
            'Have AI ask you questions to understand requirements',
            'Provide specific format and style requirements',
            'Use AI ethically: for learning, not cheating',
            'Verify AI outputs and add your own insights',
            'Document effective communication patterns'
          ],
          successCriteria: [
            'You communicate academic needs clearly to AI',
            'You use follow-ups effectively to refine outputs',
            'You understand when to use AI vs when not to',
            'You use AI ethically for learning enhancement',
            'You can teach others effective AI communication',
            'Your AI-assisted work demonstrates understanding'
          ]
        },
        professional: {
          title: 'Professional AI Communication Challenge',
          description: 'Use AI communication for professional excellence',
          instructions: [
            'Apply AI to professional tasks systematically',
            'Communicate business context and constraints clearly',
            'Use iterative refinement for professional quality',
            'Build AI communication into your workflow',
            'Train team members on effective AI communication',
            'Maintain professional standards with AI assistance',
            'Document AI communication best practices'
          ],
          successCriteria: [
            'You communicate professional needs effectively to AI',
            'Your AI-assisted work meets professional standards',
            'You\'ve improved team productivity with AI',
            'You can train others in professional AI use',
            'You balance AI assistance with human judgment',
            'You use AI ethically in professional contexts'
          ]
        },
        personal: {
          title: 'Personal AI Communication Challenge',
          description: 'Master AI communication for personal growth',
          instructions: [
            'Use AI for various personal development goals',
            'Practice clear communication of personal context',
            'Iterate to get personalized, relevant responses',
            'Build AI into your personal learning routine',
            'Share AI communication skills with friends',
            'Maintain personal agency while using AI',
            'Develop lifelong AI collaboration skills'
          ],
          successCriteria: [
            'You communicate personal goals clearly to AI',
            'AI outputs are personalized and useful',
            'You\'ve integrated AI into personal growth',
            'You help others use AI for personal development',
            'You maintain balance between AI help and self-reliance',
            'You use AI ethically for personal goals'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You communicate effectively with AI systems',
        'You use iterative refinement skillfully',
        'You understand AI capabilities and limitations',
        'You provide clear context and requirements',
        'You help others improve AI communication'
      ],
      improvements: [
        'Experiment with more diverse communication styles',
        'Practice providing more specific context',
        'Improve your feedback quality to AI',
        'Build more systematic AI communication habits',
        'Share more AI communication knowledge'
      ],
      nextSteps: [
        'Continue developing AI communication mastery',
        'Explore different AI tools and communication styles',
        'Build a comprehensive AI communication guide',
        'Mentor others in AI communication',
        'Stay current with evolving AI capabilities'
      ]
    },
    badge: {
      name: 'AI Communicator',
      emoji: '🤖',
      description: 'Master of effective AI communication'
    },
    shareMessage: 'Just mastered AI communication! 🤖 #AITools #PromptEngineering'
  },
  {
    id: 'prompt-optimization',
    title: 'Prompt Optimization',
    emoji: '⚡',
    context: 'professional',
    discover: {
      scenario: 'Your AI prompts work, but they take multiple iterations to get good results. You want to learn how to optimize prompts for faster, better outputs on the first try.',
      problemExplanation: [
        'Trial-and-error wastes time and effort',
        'Not learning from what works and what doesn\'t',
        'Missing optimization techniques used by experts',
        'Not testing prompts systematically'
      ],
      solutionApproach: [
        'Learn prompt patterns that consistently work well',
        'Use temperature and parameter controls effectively',
        'Test prompts systematically with A/B comparisons',
        'Build a library of optimized prompt templates',
        'Learn from the prompt engineering community',
        'Apply chain-of-thought and few-shot prompting'
      ]
    },
    video: {
      title: 'Optimizing AI Prompts',
      duration: 6,
      content: [
        'Prompt optimization makes your AI interactions faster and more effective.',
        'Learn from what works: keep a prompt library of your best prompts.',
        'Use prompt patterns: templates that consistently produce good results.',
        'Few-shot prompting: Give 2-3 examples of what you want.',
        'Chain-of-thought: Ask AI to think step-by-step before answering.',
        '"Let\'s think through this step by step:" often improves reasoning.',
        'Temperature controls creativity: lower for factual, higher for creative.',
        'Test prompts systematically: compare different versions side-by-side.',
        'Learn from the community: sites like PromptBase, LangChain docs.',
        'Optimize for your common use cases: build reusable templates.',
        'Combine techniques: few-shot + chain-of-thought + specific format.',
        'Remember: optimization is about consistency, not perfection.'
      ]
    },
    quiz: {
      title: 'Prompt Optimization Quiz',
      questions: [
        {
          id: 16,
          question: 'What is few-shot prompting?',
          options: ['Asking once', 'Providing 2-3 examples of desired output', 'Using short prompts', 'Asking many questions'],
          correct: 1,
          explanation: 'Few-shot prompting provides examples to demonstrate the desired output format.'
        },
        {
          id: 17,
          question: 'What does chain-of-thought prompting do?',
          options: ['Links prompts together', 'Asks AI to think step-by-step', 'Creates long chains', 'Confuses the AI'],
          correct: 1,
          explanation: 'Chain-of-thought prompting asks AI to reason step-by-step for better answers.'
        },
        {
          id: 18,
          question: 'When should you use lower temperature settings?',
          options: ['For creative writing', 'For factual, consistent responses', 'Never', 'Always'],
          correct: 1,
          explanation: 'Lower temperature produces more consistent, factual responses.'
        },
        {
          id: 19,
          question: 'Why build a prompt library?',
          options: ['To show off', 'To reuse effective prompts and save time', 'It\'s not useful', 'To confuse others'],
          correct: 1,
          explanation: 'A prompt library lets you reuse proven effective prompts for common tasks.'
        },
        {
          id: 20,
          question: 'What is A/B testing in prompt optimization?',
          options: ['Testing two letters', 'Comparing different prompt versions to see which works better', 'Using alphabetical order', 'Testing AI twice'],
          correct: 1,
          explanation: 'A/B testing compares prompt variations to identify what works best.'
        }
      ]
    },
    challenge: {
      title: 'Prompt Optimization Challenge',
      description: 'Optimize prompts for maximum effectiveness and efficiency',
      contexts: {
        academic: {
          title: 'Academic Prompt Optimization Challenge',
          description: 'Build optimized prompts for academic excellence',
          instructions: [
            'Identify 5-10 common academic AI tasks you do',
            'Create initial prompts for each task',
            'Test variations using different optimization techniques',
            'Compare results and identify best-performing prompts',
            'Build a library of optimized academic prompts',
            'Share your prompt library with study group',
            'Continue refining based on results'
          ],
          successCriteria: [
            'You have 10+ optimized academic prompts',
            'Your prompts produce consistently good results',
            'You can explain optimization techniques to others',
            'You\'ve reduced time spent refining AI outputs',
            'Your prompt library is organized and accessible',
            'You help classmates optimize their prompts'
          ]
        },
        professional: {
          title: 'Professional Prompt Optimization Challenge',
          description: 'Optimize prompts for professional productivity',
          instructions: [
            'Map your common professional AI use cases',
            'Create and test optimized prompts for each',
            'Use advanced techniques: few-shot, chain-of-thought',
            'A/B test different prompt approaches',
            'Build a professional prompt template library',
            'Train team members on optimized prompts',
            'Measure time/quality improvements'
          ],
          successCriteria: [
            'You have a comprehensive professional prompt library',
            'Your prompts produce professional-quality outputs consistently',
            'You\'ve improved team productivity with AI',
            'You can train others in prompt optimization',
            'You measure and demonstrate ROI of optimization',
            'Your optimized prompts become team standards'
          ]
        },
        personal: {
          title: 'Personal Prompt Optimization Challenge',
          description: 'Optimize AI prompts for personal growth',
          instructions: [
            'Identify personal AI use cases (learning, planning, creativity)',
            'Experiment with different prompt optimization techniques',
            'Build a personal prompt collection',
            'Test and refine prompts for your specific needs',
            'Share useful prompts with friends and family',
            'Continue optimizing based on results',
            'Develop AI optimization as a lifelong skill'
          ],
          successCriteria: [
            'You have optimized prompts for personal goals',
            'You get better AI results faster',
            'You can teach prompt optimization to others',
            'You\'ve built a sustainable optimization practice',
            'You balance optimization with experimentation',
            'You use AI effectively for personal development'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You systematically optimize your prompts',
        'You use advanced techniques effectively',
        'You build and maintain useful prompt libraries',
        'You test prompts rigorously',
        'You share optimization knowledge with others'
      ],
      improvements: [
        'Experiment with more advanced techniques',
        'Build more comprehensive prompt libraries',
        'Practice more systematic A/B testing',
        'Learn from the broader prompt engineering community',
        'Document your optimization insights better'
      ],
      nextSteps: [
        'Master advanced prompting techniques',
        'Build domain-specific prompt libraries',
        'Contribute to prompt engineering community',
        'Explore emerging AI capabilities',
        'Mentor others in prompt optimization'
      ]
    },
    badge: {
      name: 'Prompt Optimizer',
      emoji: '⚡',
      description: 'Master of prompt optimization and efficiency'
    },
    shareMessage: 'Just optimized my AI prompts like a pro! ⚡ #PromptEngineering #AIOptimization'
  },
  {
    id: 'bias-recognition',
    title: 'Bias Recognition',
    emoji: '🔍',
    context: 'academic' as const,
    discover: {
      scenario: 'You\'re using AI for research and realize some responses seem biased. You need to learn how to recognize and account for AI biases.',
      problemExplanation: ['AI reflects biases from training data', 'Uncritical acceptance is risky', 'Lack of diverse perspectives'],
      solutionApproach: ['Understand common AI biases', 'Cross-reference with reliable sources', 'Ask AI for multiple perspectives', 'Question responses critically']
    },
    video: { title: 'Recognizing AI Bias', duration: 6, content: ['AI can have biases from training data.', 'Cultural, temporal, and source biases exist.', 'Always ask: What perspectives are missing?', 'Request multiple viewpoints.', 'Cross-reference with authoritative sources.', 'Use AI as starting point, not final word.'] },
    quiz: {
      title: 'Bias Recognition Quiz',
      questions: [
        { id: 21, question: 'Where do AI biases come from?', options: ['AI creates them', 'Training data and design choices', 'User inputs only', 'They don\'t exist'], correct: 1, explanation: 'AI biases reflect patterns in training data.' },
        { id: 22, question: 'What is temporal bias?', options: ['Time zones', 'AI training data cutoff date', 'Processing speed', 'Response time'], correct: 1, explanation: 'Temporal bias means AI doesn\'t know recent events.' },
        { id: 23, question: 'How to handle AI on sensitive topics?', options: ['Trust completely', 'Cross-reference and think critically', 'Ignore', 'Share immediately'], correct: 1, explanation: 'Critical topics require verification beyond AI.' },
        { id: 24, question: 'To counter bias, ask:', options: ['Nothing special', 'Give multiple perspectives', 'Yes/no only', 'Shorter answers'], correct: 1, explanation: 'Multiple perspectives reveal biases.' },
        { id: 25, question: 'View AI information as:', options: ['Absolute truth', 'Starting point requiring verification', 'Always wrong', 'Entertainment'], correct: 1, explanation: 'AI provides starting points needing verification.' }
      ]
    },
    challenge: { title: 'Bias Recognition', description: 'Develop skills to recognize AI biases', contexts: { academic: { title: 'Academic Bias Recognition', description: 'Critically evaluate AI for academic work', instructions: ['Use AI for research with multiple perspectives', 'Identify biases', 'Request multiple viewpoints', 'Cross-reference with sources'], successCriteria: ['Identify biases in outputs', 'Critically evaluate AI', 'Cross-reference reliably', 'Explain bias to others'] }, professional: { title: 'Professional Bias Recognition', description: 'Apply bias awareness professionally', instructions: ['Use AI for professional analysis', 'Identify biases affecting outcomes', 'Verify with industry expertise', 'Build bias-checking workflow'], successCriteria: ['Recognize professional biases', 'Team uses AI critically', 'Created bias-awareness processes'] }, personal: { title: 'Personal Bias Recognition', description: 'Develop critical AI awareness', instructions: ['Use AI for personal decisions', 'Identify biases', 'Seek diverse perspectives', 'Verify AI advice'], successCriteria: ['Critically evaluate AI advice', 'Recognize biases', 'Help others develop awareness'] } } },
    feedback: { strengths: ['You critically evaluate outputs', 'You recognize biases', 'You cross-reference effectively'], improvements: ['Understand AI training deeper', 'Identify subtle biases', 'Build systematic processes'], nextSteps: ['Continue developing critical literacy', 'Explore AI ethics research', 'Teach others about bias'] },
    badge: { name: 'Bias Detective', emoji: '🔍', description: 'Expert in recognizing AI biases' },
    shareMessage: 'Just learned to recognize AI biases! 🔍 #AIEthics'
  },
  {
    id: 'ethical-ai-use',
    title: 'Ethical AI Use',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: 'You\'re using AI for assignments but unsure about ethical boundaries. When is AI helpful vs cheating?',
      problemExplanation: ['Unclear boundaries', 'Citation confusion', 'Over-reliance prevents learning', 'Privacy concerns'],
      solutionApproach: ['Understand policies', 'Use AI for learning, not replacement', 'Cite appropriately', 'Protect private data', 'Focus on understanding']
    },
    video: { title: 'Using AI Ethically', duration: 7, content: ['Ethical AI use is crucial for integrity.', 'AI should enhance learning, not replace it.', 'Good: Help me understand. Bad: Do my work.', 'Always cite AI assistance.', 'Check policies - they vary.', 'Never share confidential data.', 'Use AI for growth, not shortcuts.', 'Develop judgment about appropriate use.', 'Integrity > convenience.'] },
    quiz: {
      title: 'Ethical AI Quiz',
      questions: [
        { id: 26, question: 'When using AI academically:', options: ['Never mention it', 'Cite AI assistance appropriately', 'Claim as your own', 'Use secretly'], correct: 1, explanation: 'Academic integrity requires citing AI.' },
        { id: 27, question: 'What NOT to share with AI?', options: ['General questions', 'Confidential data and passwords', 'Learning topics', 'Public info'], correct: 1, explanation: 'Never share sensitive information with AI.' },
        { id: 28, question: 'Ethical AI for learning means:', options: ['AI does all work', 'AI enhances understanding', 'Avoid AI completely', 'Only for fun'], correct: 1, explanation: 'Ethical use enhances learning, doesn\'t replace it.' },
        { id: 29, question: 'Before using AI professionally:', options: ['Just start', 'Check company policies', 'Keep secret', 'Only use at home'], correct: 1, explanation: 'Organizations have different AI policies.' },
        { id: 30, question: 'Ethical AI use goal:', options: ['Speed', 'Balance assistance with genuine growth', 'Impress others', 'Follow rules blindly'], correct: 1, explanation: 'Balance AI capabilities with personal development.' }
      ]
    },
    challenge: { title: 'Ethical AI Challenge', description: 'Develop ethical AI judgment', contexts: { academic: { title: 'Academic Ethics', description: 'Build ethical practices', instructions: ['Review policies', 'Identify appropriate use', 'Use AI for learning', 'Always cite'], successCriteria: ['Follow policies', 'Use ethically', 'Cite appropriately', 'Demonstrate integrity'] }, professional: { title: 'Professional Ethics', description: 'Practice ethical AI at work', instructions: ['Learn policies', 'Protect confidential info', 'Use transparently', 'Help establish guidelines'], successCriteria: ['Follow policies', 'Protect data', 'Use responsibly', 'Guide team ethics'] }, personal: { title: 'Personal Ethics', description: 'Develop ethical habits', instructions: ['Reflect on values', 'Protect privacy', 'Use for growth', 'Help others use ethically'], successCriteria: ['Align with values', 'Protect privacy', 'Use for growth', 'Model responsible use'] } } },
    feedback: { strengths: ['Strong ethical awareness', 'Protect privacy', 'Use AI for growth', 'Cite appropriately'], improvements: ['Deepen AI ethics understanding', 'Build clearer guidelines', 'Engage more with ethics'], nextSteps: ['Continue developing judgment', 'Stay informed on ethics', 'Help establish guidelines'] },
    badge: { name: 'Ethical AI Advocate', emoji: '⚖️', description: 'Champion of ethical AI use' },
    shareMessage: 'Committed to ethical AI use! ⚖️ #AIEthics'
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

export const module3Subtopics = module3Data;

// Module 3 Assessment - 30 Questions
export const module3Assessment: AssessmentData = {
  id: 'module3-assessment',
  title: 'Prompt Engineering & AI Communication Assessment',
  description: 'Test your mastery of AI interaction and prompt engineering',
  questions: [
    // Prompt Design (1-5)
    { id: 1, question: 'CLEAR framework C stands for:', options: ['Clarity', 'Context', 'Concise', 'Creative'], correct: 1 },
    { id: 2, question: 'Which prompt is better?', options: ['"Explain AI"', '"Explain AI to college student in 3 paragraphs with examples"', '"Tell about AI"', '"What is AI?"'], correct: 1 },
    { id: 3, question: 'Why iterate on prompts?', options: ['Waste time', 'Refine and improve responses', 'Not necessary', 'Confuse AI'], correct: 1 },
    { id: 4, question: 'Complex tasks should be:', options: ['Asked at once', 'Broken into smaller prompts', 'Avoided', 'Shortened'], correct: 1 },
    { id: 5, question: 'Examples in prompts help by:', options: ['Making longer', 'Showing desired format', 'Required', 'Confusing AI'], correct: 1 },
    // Context Management (6-10)
    { id: 6, question: 'AI context window is:', options: ['Visual interface', 'Memory/conversation limit', 'Time limit', 'Screen size'], correct: 1 },
    { id: 7, question: 'Context anchors are:', options: ['Links', 'Repeated key information', 'Memory storage', 'History'], correct: 1 },
    { id: 8, question: 'Start new conversation when:', options: ['Every 5 min', 'Changing to new topic', 'Never', 'After each question'], correct: 1 },
    { id: 9, question: 'Summarize in long conversations to:', options: ['Waste time', 'Refresh AI memory', 'Not helpful', 'Confuse AI'], correct: 1 },
    { id: 10, question: 'Custom instructions are:', options: ['One-time', 'Persistent context for all interactions', 'Errors', 'History'], correct: 1 },
    // AI Communication (11-15)
    { id: 11, question: 'Think of AI as:', options: ['Search engine', 'Collaborative tool', 'Perfect', 'Learning replacement'], correct: 1 },
    { id: 12, question: 'If AI response is not perfect:', options: ['Give up', 'Use follow-ups to refine', 'Start over', 'Accept as-is'], correct: 1 },
    { id: 13, question: 'Ask AI to ask questions to:', options: ['Waste time', 'Ensure it understands needs', 'Not helpful', 'Test AI'], correct: 1 },
    { id: 14, question: 'AI strength is:', options: ['Real-time news', 'Summarizing complex info', '100% accuracy', 'Mind reading'], correct: 1 },
    { id: 15, question: 'Specify about output:', options: ['Nothing', 'Format, length, audience, style', 'Only topic', 'Just length'], correct: 1 },
    // Prompt Optimization (16-20)
    { id: 16, question: 'Few-shot prompting is:', options: ['Ask once', 'Provide 2-3 examples', 'Short prompts', 'Many questions'], correct: 1 },
    { id: 17, question: 'Chain-of-thought does:', options: ['Links prompts', 'Asks step-by-step thinking', 'Long chains', 'Confuses'], correct: 1 },
    { id: 18, question: 'Lower temperature for:', options: ['Creative writing', 'Factual consistent responses', 'Never', 'Always'], correct: 1 },
    { id: 19, question: 'Prompt library helps by:', options: ['Show off', 'Reuse effective prompts', 'Not useful', 'Confuse'], correct: 1 },
    { id: 20, question: 'A/B testing means:', options: ['Test letters', 'Compare prompt versions', 'Alphabetical', 'Test twice'], correct: 1 },
    // Bias Recognition (21-25)
    { id: 21, question: 'AI biases from:', options: ['AI creates', 'Training data', 'Users only', 'Do not exist'], correct: 1 },
    { id: 22, question: 'Temporal bias is:', options: ['Time zones', 'Training cutoff date', 'Speed', 'Response time'], correct: 1 },
    { id: 23, question: 'Sensitive topics need:', options: ['Full trust', 'Critical cross-reference', 'Ignore', 'Share'], correct: 1 },
    { id: 24, question: 'Counter bias by asking:', options: ['Nothing', 'Multiple perspectives', 'Yes/no', 'Shorter'], correct: 1 },
    { id: 25, question: 'View AI as:', options: ['Truth', 'Starting point needing verification', 'Wrong', 'Entertainment'], correct: 1 },
    // Ethical AI (26-30)
    { id: 26, question: 'Using AI academically:', options: ['Never mention', 'Cite appropriately', 'Claim as own', 'Secret'], correct: 1 },
    { id: 27, question: 'NOT share with AI:', options: ['Questions', 'Confidential data', 'Topics', 'Public info'], correct: 1 },
    { id: 28, question: 'Ethical learning with AI:', options: ['AI does work', 'AI enhances understanding', 'Avoid AI', 'Only fun'], correct: 1 },
    { id: 29, question: 'Professional AI use needs:', options: ['Just start', 'Check policies first', 'Keep secret', 'Home only'], correct: 1 },
    { id: 30, question: 'Ethical AI goal:', options: ['Speed', 'Balance assistance with growth', 'Impress', 'Blind rules'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! You are a prompt engineering master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong AI communication skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good progress! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review AI interaction techniques!', xpReward: 100 }
  }
};
