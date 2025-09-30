// Module 2: Adaptive Learning & Lifelong Learning Skills
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

// Module 2 Subtopics Data
export const module2Data: SubtopicData[] = [
  {
    id: 'learning-strategies',
    title: 'Learning Strategies',
    emoji: '🧠',
    context: 'academic',
    discover: {
      scenario: 'You\'re struggling to keep up with your university coursework. Despite spending hours studying, you\'re not retaining information effectively and your grades are suffering. You feel overwhelmed by the amount of material and don\'t know where to focus your efforts.',
      problemExplanation: [
        'Many students use passive learning methods like re-reading notes or highlighting text',
        'Without active engagement, information doesn\'t transfer to long-term memory',
        'Poor time management leads to cramming, which is ineffective for retention',
        'Lack of metacognitive awareness means students don\'t know how they learn best',
        'No systematic approach to different types of content (facts, concepts, procedures)'
      ],
      solutionApproach: [
        'Identify your learning style and preferences through self-assessment',
        'Use active learning techniques like retrieval practice and spaced repetition',
        'Implement the Feynman Technique: explain concepts in simple terms',
        'Create visual mind maps and concept diagrams for complex topics',
        'Use the Pomodoro Technique for focused study sessions',
        'Apply the 80/20 rule: focus on the most important 20% of content',
        'Regular self-testing to identify knowledge gaps'
      ]
    },
    video: {
      title: 'Mastering Learning Strategies for Academic Success',
      duration: 8,
      content: [
        'Welcome to the world of effective learning strategies!',
        'Today we\'ll explore proven methods that will transform how you study and retain information.',
        'First, let\'s understand the difference between passive and active learning.',
        'Passive learning is like watching a movie - you consume information but don\'t engage with it.',
        'Active learning is like being the director - you\'re actively involved in creating understanding.',
        'The Feynman Technique is one of the most powerful learning strategies.',
        'Named after Nobel Prize winner Richard Feynman, it involves explaining concepts in simple terms.',
        'If you can\'t explain it simply, you don\'t understand it well enough.',
        'Spaced repetition is another game-changer for long-term retention.',
        'Instead of cramming, review material at increasing intervals.',
        'This leverages the forgetting curve and strengthens memory pathways.',
        'Mind mapping helps you see connections between concepts.',
        'Start with a central idea and branch out with related concepts.',
        'Use colors, images, and keywords to make it memorable.',
        'The Pomodoro Technique helps maintain focus and prevent burnout.',
        'Work for 25 minutes, then take a 5-minute break.',
        'After 4 pomodoros, take a longer 15-30 minute break.',
        'Remember, the goal isn\'t to study longer, but to study smarter.',
        'These strategies will help you learn more effectively in less time.'
      ]
    },
    quiz: {
      title: 'Learning Strategies Quiz',
      questions: [
        {
          id: 1,
          question: 'What is the main benefit of active learning over passive learning?',
          options: [
            'It takes less time',
            'It improves long-term retention and understanding',
            'It requires less effort',
            'It works for all subjects equally'
          ],
          correct: 1,
          explanation: 'Active learning improves long-term retention and understanding by engaging multiple cognitive processes.'
        },
        {
          id: 2,
          question: 'What is the Feynman Technique?',
          options: [
            'A method for taking notes quickly',
            'Explaining concepts in simple terms to test understanding',
            'A way to memorize facts faster',
            'A technique for reading textbooks'
          ],
          correct: 1,
          explanation: 'The Feynman Technique involves explaining concepts in simple terms to identify gaps in understanding.'
        },
        {
          id: 3,
          question: 'How does spaced repetition improve learning?',
          options: [
            'By reducing study time',
            'By reviewing material at increasing intervals to strengthen memory',
            'By making notes more colorful',
            'By studying only one subject at a time'
          ],
          correct: 1,
          explanation: 'Spaced repetition leverages the forgetting curve by reviewing material at optimal intervals.'
        },
        {
          id: 4,
          question: 'What is the recommended work-break ratio in the Pomodoro Technique?',
          options: [
            '45 minutes work, 15 minutes break',
            '25 minutes work, 5 minutes break',
            '60 minutes work, 10 minutes break',
            '30 minutes work, 10 minutes break'
          ],
          correct: 1,
          explanation: 'The Pomodoro Technique uses 25-minute focused work sessions followed by 5-minute breaks.'
        },
        {
          id: 5,
          question: 'What is the primary purpose of mind mapping?',
          options: [
            'To take notes faster',
            'To visualize connections between concepts',
            'To memorize facts',
            'To organize your study schedule'
          ],
          correct: 1,
          explanation: 'Mind mapping helps visualize connections between concepts, making complex information easier to understand and remember.'
        }
      ]
    },
    challenge: {
      title: 'Learning Strategy Implementation',
      description: 'Apply effective learning strategies to master a new skill or subject',
      contexts: {
        academic: {
          title: 'Academic Learning Strategy Challenge',
          description: 'Develop and implement a personalized learning strategy for your most challenging course',
          instructions: [
            'Choose your most difficult course or subject',
            'Assess your current learning approach and identify weaknesses',
            'Select 3-4 learning strategies that match your learning style',
            'Create a study plan incorporating these strategies',
            'Implement the plan for one week and track your progress',
            'Reflect on what worked and what needs adjustment',
            'Share your experience and results'
          ],
          successCriteria: [
            'You can clearly explain your chosen learning strategies',
            'Your study plan is realistic and sustainable',
            'You demonstrate improved understanding of the material',
            'You can identify which strategies work best for you',
            'You show consistent application of the strategies',
            'You can help others implement similar strategies'
          ]
        },
        professional: {
          title: 'Professional Skill Development Challenge',
          description: 'Use learning strategies to master a new professional skill or technology',
          instructions: [
            'Identify a professional skill you need to develop',
            'Research the best learning approaches for this skill',
            'Create a structured learning plan with milestones',
            'Use active learning techniques like practice and teaching others',
            'Track your progress and adjust your approach as needed',
            'Document your learning journey and key insights',
            'Apply the skill in a real professional context'
          ],
          successCriteria: [
            'You can demonstrate proficiency in the new skill',
            'Your learning approach is systematic and efficient',
            'You can teach the skill to others',
            'You\'ve applied the skill in professional situations',
            'You can identify areas for further improvement',
            'You\'ve developed a replicable learning process'
          ]
        },
        personal: {
          title: 'Personal Learning Challenge',
          description: 'Master a new hobby or personal interest using effective learning strategies',
          instructions: [
            'Choose a hobby or skill you\'ve always wanted to learn',
            'Research the best learning resources and methods',
            'Set specific, measurable learning goals',
            'Use spaced practice and active learning techniques',
            'Find a learning partner or community for support',
            'Track your progress and celebrate milestones',
            'Share your learning journey with others'
          ],
          successCriteria: [
            'You can perform the skill at a basic level',
            'You understand the learning process for this skill',
            'You\'ve developed a consistent practice routine',
            'You can identify your strengths and areas for improvement',
            'You\'re motivated to continue learning and improving',
            'You can help others who want to learn the same skill'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong metacognitive awareness by reflecting on your learning process',
        'Your ability to adapt strategies based on results demonstrates flexibility',
        'You\'re willing to experiment with different approaches to find what works',
        'Your systematic approach to learning shows good organizational skills',
        'You understand the importance of active engagement in learning'
      ],
      improvements: [
        'Consider tracking your learning progress more systematically',
        'Try incorporating more visual learning techniques like mind mapping',
        'Practice explaining concepts to others to strengthen understanding',
        'Experiment with different study environments to find what works best',
        'Set more specific learning goals with clear success criteria'
      ],
      nextSteps: [
        'Continue experimenting with different learning strategies',
        'Share your successful strategies with classmates or colleagues',
        'Consider learning about memory techniques to complement your strategies',
        'Explore how to apply these strategies to different types of content',
        'Develop a personal learning system that you can use for any new skill'
      ]
    },
    badge: {
      name: 'Learning Strategist',
      emoji: '🧠',
      description: 'Master of effective learning strategies and techniques'
    },
    shareMessage: 'Just mastered the art of effective learning! 🧠 #LearningStrategies #StudySmart'
  },
  {
    id: 'memory-techniques',
    title: 'Memory Techniques',
    emoji: '🧩',
    context: 'academic',
    discover: {
      scenario: 'You have an important exam coming up with hundreds of facts, formulas, and concepts to memorize. Despite spending hours trying to memorize everything, you keep forgetting important details. You feel frustrated because you know the information is important but can\'t seem to make it stick in your long-term memory.',
      problemExplanation: [
        'Rote memorization without understanding leads to quick forgetting',
        'Lack of memory techniques means relying on repetition alone',
        'No connection between new information and existing knowledge',
        'Stress and anxiety interfere with memory formation',
        'Not using multiple senses and memory pathways'
      ],
      solutionApproach: [
        'Use the Method of Loci (Memory Palace) for spatial memory',
        'Create vivid, absurd mental images to make information memorable',
        'Use acronyms and acrostics for lists and sequences',
        'Apply the chunking technique to break down large amounts of information',
        'Use spaced repetition software for long-term retention',
        'Connect new information to personal experiences and emotions',
        'Practice retrieval regularly instead of just re-reading'
      ]
    },
    video: {
      title: 'Memory Techniques for Academic Success',
      duration: 7,
      content: [
        'Welcome to the fascinating world of memory techniques!',
        'Today we\'ll explore proven methods used by memory champions worldwide.',
        'The human brain is incredibly powerful, but we often don\'t use it optimally.',
        'Memory techniques work by leveraging how our brains naturally process information.',
        'The Method of Loci, also known as the Memory Palace, is one of the oldest techniques.',
        'You mentally walk through a familiar place and place information at specific locations.',
        'When you need to recall, you simply retrace your mental journey.',
        'Visual imagery is crucial for memory - the more vivid and absurd, the better.',
        'Our brains remember images much better than abstract concepts.',
        'Acronyms and acrostics help with ordered information like lists.',
        'Create memorable phrases where each letter represents an item.',
        'Chunking breaks large amounts of information into manageable pieces.',
        'Phone numbers are chunked: 555-123-4567 instead of 5551234567.',
        'Spaced repetition is the key to long-term retention.',
        'Review information at increasing intervals to strengthen memory.',
        'Active recall is more effective than passive review.',
        'Test yourself regularly instead of just re-reading notes.',
        'Connect new information to what you already know.',
        'Personal connections make memories stronger and more lasting.',
        'Practice these techniques regularly to build your memory skills.'
      ]
    },
    quiz: {
      title: 'Memory Techniques Quiz',
      questions: [
        {
          id: 6,
          question: 'What is the Method of Loci (Memory Palace)?',
          options: [
            'A technique for taking notes',
            'Using familiar locations to store and retrieve information',
            'A way to read faster',
            'A method for organizing study materials'
          ],
          correct: 1,
          explanation: 'The Method of Loci uses familiar locations to mentally store and retrieve information.'
        },
        {
          id: 7,
          question: 'Why are vivid, absurd images more memorable?',
          options: [
            'They are easier to draw',
            'They stand out and are more likely to be remembered',
            'They take less mental effort',
            'They are more realistic'
          ],
          correct: 1,
          explanation: 'Absurd and vivid images stand out in memory because they are unusual and emotionally engaging.'
        },
        {
          id: 8,
          question: 'What is chunking in memory techniques?',
          options: [
            'Breaking information into smaller, manageable pieces',
            'Memorizing everything at once',
            'Using only visual memory',
            'Repeating information many times'
          ],
          correct: 0,
          explanation: 'Chunking breaks large amounts of information into smaller, more manageable pieces.'
        },
        {
          id: 9,
          question: 'Why is active recall more effective than passive review?',
          options: [
            'It takes less time',
            'It strengthens memory pathways through retrieval practice',
            'It requires less effort',
            'It works for all types of information'
          ],
          correct: 1,
          explanation: 'Active recall strengthens memory pathways by practicing retrieval, making memories more durable.'
        },
        {
          id: 10,
          question: 'How does spaced repetition improve long-term retention?',
          options: [
            'By studying for longer periods',
            'By reviewing at optimal intervals to strengthen memory',
            'By using only one study method',
            'By memorizing everything at once'
          ],
          correct: 1,
          explanation: 'Spaced repetition reviews information at increasing intervals, which strengthens long-term memory.'
        }
      ]
    },
    challenge: {
      title: 'Memory Mastery Challenge',
      description: 'Master memory techniques by memorizing and recalling complex information',
      contexts: {
        academic: {
          title: 'Academic Memory Challenge',
          description: 'Use memory techniques to master course material for an upcoming exam',
          instructions: [
            'Choose a challenging course with lots of memorization',
            'Identify the key facts, formulas, and concepts you need to remember',
            'Apply 3-4 different memory techniques to different types of information',
            'Create a memory palace for one major topic',
            'Use spaced repetition to review the material',
            'Test yourself regularly and track your retention',
            'Share your most effective techniques with classmates'
          ],
          successCriteria: [
            'You can recall information accurately without notes',
            'Your memory techniques are systematic and organized',
            'You demonstrate improved retention over time',
            'You can explain your memory techniques to others',
            'You\'ve applied techniques to different types of content',
            'You show confidence in your ability to remember information'
          ]
        },
        professional: {
          title: 'Professional Memory Challenge',
          description: 'Use memory techniques to master professional information and presentations',
          instructions: [
            'Choose important professional information to memorize',
            'Apply memory techniques to remember key facts, procedures, or presentations',
            'Create visual associations for complex concepts',
            'Practice recalling information in professional contexts',
            'Use memory techniques during meetings or presentations',
            'Teach memory techniques to colleagues',
            'Track your professional performance improvements'
          ],
          successCriteria: [
            'You can recall professional information accurately',
            'You demonstrate improved performance in professional settings',
            'You can present information confidently without notes',
            'You\'ve taught memory techniques to others',
            'You\'ve adapted techniques for professional contexts',
            'You show increased confidence in professional situations'
          ]
        },
        personal: {
          title: 'Personal Memory Challenge',
          description: 'Use memory techniques to master personal information and skills',
          instructions: [
            'Choose personal information or skills you want to memorize',
            'Apply different memory techniques to various types of information',
            'Create a personal memory system for important information',
            'Practice memory techniques in daily life',
            'Share memory techniques with friends and family',
            'Track your personal memory improvements',
            'Develop a lifelong memory practice routine'
          ],
          successCriteria: [
            'You can recall personal information accurately',
            'You\'ve developed a personal memory system',
            'You can teach memory techniques to others',
            'You\'ve applied techniques to various personal contexts',
            'You show improved memory in daily life',
            'You\'ve made memory practice a regular habit'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong understanding of different memory techniques',
        'Your ability to adapt techniques to different types of information is excellent',
        'You demonstrate creativity in creating memorable associations',
        'Your systematic approach to memory practice shows good discipline',
        'You\'re willing to experiment with different techniques to find what works'
      ],
      improvements: [
        'Consider practicing memory techniques more regularly',
        'Try combining multiple techniques for complex information',
        'Focus on creating more vivid and emotional associations',
        'Practice retrieval more frequently to strengthen memory pathways',
        'Experiment with different memory palace locations'
      ],
      nextSteps: [
        'Continue practicing memory techniques daily',
        'Explore advanced memory techniques like the Major System',
        'Consider joining a memory competition or group',
        'Teach memory techniques to others to reinforce your own learning',
        'Develop a personal memory system for lifelong learning'
      ]
    },
    badge: {
      name: 'Memory Master',
      emoji: '🧩',
      description: 'Expert in memory techniques and retention strategies'
    },
    shareMessage: 'Just mastered powerful memory techniques! 🧩 #MemoryMaster #StudySmart'
  },
  {
    id: 'information-processing',
    title: 'Information Processing',
    emoji: '⚡',
    context: 'academic',
    discover: {
      scenario: 'You\'re overwhelmed by the massive amount of information available online and in your courses. You struggle to determine what\'s important, how to organize it effectively, and how to process it efficiently. You feel like you\'re drowning in data and can\'t make sense of it all.',
      problemExplanation: [
        'Information overload leads to cognitive fatigue and poor decision-making',
        'Lack of filtering skills means consuming irrelevant information',
        'No systematic approach to processing and organizing information',
        'Difficulty distinguishing between reliable and unreliable sources',
        'Poor information architecture leads to lost or forgotten knowledge'
      ],
      solutionApproach: [
        'Develop critical thinking skills to evaluate information quality',
        'Use the SQ3R method: Survey, Question, Read, Recite, Review',
        'Create information hierarchies and mind maps for organization',
        'Apply the 5W+H framework: Who, What, When, Where, Why, How',
        'Use digital tools for information capture and retrieval',
        'Practice active reading and note-taking techniques',
        'Develop information synthesis skills to connect ideas'
      ]
    },
    video: {
      title: 'Mastering Information Processing',
      duration: 6,
      content: [
        'Welcome to the world of effective information processing!',
        'In our digital age, the ability to process information efficiently is crucial.',
        'Information processing involves three key stages: input, processing, and output.',
        'Input is how we receive and capture information.',
        'Processing is how we analyze, organize, and understand information.',
        'Output is how we use and share the processed information.',
        'The SQ3R method is a proven approach for reading and processing text.',
        'Survey: Get an overview of the material before diving in.',
        'Question: Generate questions about what you expect to learn.',
        'Read: Read actively, looking for answers to your questions.',
        'Recite: Summarize what you\'ve learned in your own words.',
        'Review: Go back and reinforce your understanding.',
        'Critical thinking is essential for evaluating information quality.',
        'Ask: Is this information relevant to my goals?',
        'Is the source credible and authoritative?',
        'Are there any biases or hidden agendas?',
        'Does this information align with other reliable sources?',
        'Information organization is key to effective retrieval.',
        'Use categories, tags, and hierarchies to organize information.',
        'Create connections between different pieces of information.',
        'Regular review and synthesis help build knowledge networks.'
      ]
    },
    quiz: {
      title: 'Information Processing Quiz',
      questions: [
        {
          id: 11,
          question: 'What does SQ3R stand for?',
          options: [
            'Study, Question, Read, Recite, Review',
            'Survey, Question, Read, Recite, Review',
            'Scan, Question, Read, Remember, Review',
            'Study, Question, Read, Remember, Review'
          ],
          correct: 1,
          explanation: 'SQ3R stands for Survey, Question, Read, Recite, Review - a systematic approach to reading and processing information.'
        },
        {
          id: 12,
          question: 'What is the first step in the SQ3R method?',
          options: [
            'Question',
            'Survey',
            'Read',
            'Recite'
          ],
          correct: 1,
          explanation: 'Survey is the first step - getting an overview of the material before diving into details.'
        },
        {
          id: 13,
          question: 'What is critical thinking in information processing?',
          options: [
            'Reading faster',
            'Evaluating information quality and credibility',
            'Memorizing facts',
            'Taking notes'
          ],
          correct: 1,
          explanation: 'Critical thinking involves evaluating information quality, credibility, and relevance.'
        },
        {
          id: 14,
          question: 'Why is information organization important?',
          options: [
            'It makes information look better',
            'It enables effective retrieval and connection of ideas',
            'It reduces the amount of information',
            'It makes reading faster'
          ],
          correct: 1,
          explanation: 'Information organization enables effective retrieval and helps create connections between ideas.'
        },
        {
          id: 15,
          question: 'What is the 5W+H framework used for?',
          options: [
            'Memorizing information',
            'Systematically analyzing information',
            'Reading faster',
            'Taking notes'
          ],
          correct: 1,
          explanation: 'The 5W+H framework (Who, What, When, Where, Why, How) helps systematically analyze information.'
        }
      ]
    },
    challenge: {
      title: 'Information Processing Mastery',
      description: 'Develop skills to efficiently process, organize, and synthesize information',
      contexts: {
        academic: {
          title: 'Academic Information Processing Challenge',
          description: 'Process and organize complex academic information for research and study',
          instructions: [
            'Choose a complex academic topic or research project',
            'Gather information from multiple credible sources',
            'Apply the SQ3R method to process each source',
            'Use critical thinking to evaluate source credibility',
            'Organize information using mind maps or hierarchical structures',
            'Synthesize information to create original insights',
            'Present your findings in a clear, organized manner'
          ],
          successCriteria: [
            'You can efficiently process large amounts of information',
            'Your information organization is logical and accessible',
            'You demonstrate critical thinking in source evaluation',
            'You can synthesize information from multiple sources',
            'You present information clearly and coherently',
            'You can help others process information effectively'
          ]
        },
        professional: {
          title: 'Professional Information Processing Challenge',
          description: 'Process and organize professional information for decision-making and communication',
          instructions: [
            'Choose a professional topic or project requiring research',
            'Gather information from industry sources and experts',
            'Apply systematic processing techniques to analyze information',
            'Use professional tools for information organization',
            'Synthesize information for business decision-making',
            'Present findings to colleagues or stakeholders',
            'Create actionable recommendations based on processed information'
          ],
          successCriteria: [
            'You can process professional information efficiently',
            'Your analysis demonstrates business acumen',
            'You can present complex information clearly to stakeholders',
            'Your recommendations are based on solid information processing',
            'You\'ve improved your professional decision-making',
            'You can train others in information processing techniques'
          ]
        },
        personal: {
          title: 'Personal Information Processing Challenge',
          description: 'Process and organize personal information for decision-making and learning',
          instructions: [
            'Choose a personal topic you want to learn about',
            'Gather information from various sources',
            'Apply information processing techniques to understand the topic',
            'Organize information for personal use and reference',
            'Use processed information to make informed decisions',
            'Share your learning with friends or family',
            'Create a personal knowledge management system'
          ],
          successCriteria: [
            'You can process personal information effectively',
            'Your personal knowledge is well-organized',
            'You make better decisions based on processed information',
            'You can share knowledge clearly with others',
            'You\'ve developed a personal learning system',
            'You show improved critical thinking in daily life'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong analytical skills in processing information',
        'Your ability to organize information systematically is excellent',
        'You demonstrate good critical thinking in source evaluation',
        'Your synthesis skills help you connect ideas effectively',
        'You\'re systematic in your approach to information processing'
      ],
      improvements: [
        'Consider using more visual organization techniques like mind maps',
        'Practice synthesizing information from multiple sources more regularly',
        'Focus on developing stronger critical thinking skills',
        'Try using digital tools to enhance your information processing',
        'Work on presenting processed information more clearly'
      ],
      nextSteps: [
        'Continue practicing information processing techniques',
        'Explore advanced tools for information management',
        'Develop your critical thinking skills further',
        'Share your information processing techniques with others',
        'Create a personal knowledge management system'
      ]
    },
    badge: {
      name: 'Information Processor',
      emoji: '⚡',
      description: 'Expert in processing, organizing, and synthesizing information'
    },
    shareMessage: 'Just mastered the art of information processing! ⚡ #InformationProcessing #CriticalThinking'
  },
  {
    id: 'skill-transfer',
    title: 'Skill Transfer',
    emoji: '🔄',
    context: 'professional',
    discover: {
      scenario: 'You\'ve learned programming in one language but struggle to apply those skills to a new programming language. You feel like you\'re starting from scratch each time, even though you know the concepts are similar. You want to learn how to transfer your existing skills to new situations more effectively.',
      problemExplanation: [
        'Lack of metacognitive awareness about underlying principles',
        'Focus on surface-level features rather than deep understanding',
        'No systematic approach to identifying transferable skills',
        'Difficulty recognizing patterns across different contexts',
        'Poor abstraction skills limit ability to see connections'
      ],
      solutionApproach: [
        'Develop metacognitive awareness about your learning process',
        'Focus on underlying principles rather than surface features',
        'Use analogies and metaphors to connect new and existing knowledge',
        'Practice identifying patterns across different domains',
        'Create concept maps showing relationships between skills',
        'Use the Feynman Technique to deepen understanding',
        'Regularly reflect on how skills apply across contexts'
      ]
    },
    video: {
      title: 'Mastering Skill Transfer',
      duration: 7,
      content: [
        'Welcome to the world of skill transfer!',
        'Skill transfer is the ability to apply knowledge and skills from one context to another.',
        'It\'s one of the most valuable skills for lifelong learning and career success.',
        'The key to effective skill transfer is understanding underlying principles.',
        'Surface-level learning focuses on specific procedures and facts.',
        'Deep learning focuses on principles, concepts, and relationships.',
        'When you understand principles, you can apply them in new situations.',
        'Metacognition is thinking about your own thinking and learning.',
        'Ask yourself: What am I really learning here?',
        'What are the underlying principles?',
        'How does this connect to what I already know?',
        'Analogies and metaphors are powerful tools for skill transfer.',
        'They help you see connections between different domains.',
        'For example, learning to cook is like learning to program.',
        'Both require following recipes or instructions step by step.',
        'Both require understanding ingredients or components.',
        'Both require practice and experimentation.',
        'Pattern recognition is crucial for skill transfer.',
        'Look for common patterns across different domains.',
        'Practice identifying these patterns regularly.',
        'Reflection is essential for developing transfer skills.',
        'Regularly ask: How can I apply this in other situations?',
        'What principles am I learning that transfer to other domains?',
        'How can I help others see these connections?'
      ]
    },
    quiz: {
      title: 'Skill Transfer Quiz',
      questions: [
        {
          id: 16,
          question: 'What is skill transfer?',
          options: [
            'Learning new skills quickly',
            'Applying knowledge and skills from one context to another',
            'Forgetting old skills when learning new ones',
            'Only learning skills in one domain'
          ],
          correct: 1,
          explanation: 'Skill transfer is the ability to apply knowledge and skills from one context to another.'
        },
        {
          id: 17,
          question: 'What is the key to effective skill transfer?',
          options: [
            'Memorizing procedures',
            'Understanding underlying principles',
            'Learning only one skill at a time',
            'Avoiding mistakes'
          ],
          correct: 1,
          explanation: 'Understanding underlying principles is key to effective skill transfer.'
        },
        {
          id: 18,
          question: 'What is metacognition?',
          options: [
            'Learning new information',
            'Thinking about your own thinking and learning',
            'Memorizing facts',
            'Taking notes'
          ],
          correct: 1,
          explanation: 'Metacognition is thinking about your own thinking and learning processes.'
        },
        {
          id: 19,
          question: 'How do analogies help with skill transfer?',
          options: [
            'They make learning faster',
            'They help you see connections between different domains',
            'They reduce the need to practice',
            'They make information easier to memorize'
          ],
          correct: 1,
          explanation: 'Analogies help you see connections between different domains, facilitating skill transfer.'
        },
        {
          id: 20,
          question: 'Why is pattern recognition important for skill transfer?',
          options: [
            'It helps you learn faster',
            'It helps you identify common patterns across different domains',
            'It reduces the need to understand principles',
            'It makes memorization easier'
          ],
          correct: 1,
          explanation: 'Pattern recognition helps you identify common patterns across different domains, enabling skill transfer.'
        }
      ]
    },
    challenge: {
      title: 'Skill Transfer Mastery',
      description: 'Develop the ability to transfer skills and knowledge across different contexts',
      contexts: {
        academic: {
          title: 'Academic Skill Transfer Challenge',
          description: 'Transfer academic skills across different subjects and contexts',
          instructions: [
            'Choose a skill you\'ve learned in one academic subject',
            'Identify the underlying principles of that skill',
            'Find another subject where you can apply similar principles',
            'Practice applying the skill in the new context',
            'Reflect on the similarities and differences',
            'Create analogies to help others understand the transfer',
            'Document your transfer process and insights'
          ],
          successCriteria: [
            'You can identify underlying principles in academic skills',
            'You can apply skills across different academic subjects',
            'You can explain the transfer process to others',
            'You demonstrate improved learning efficiency',
            'You can help others develop transfer skills',
            'You show metacognitive awareness of your learning'
          ]
        },
        professional: {
          title: 'Professional Skill Transfer Challenge',
          description: 'Transfer professional skills across different roles and industries',
          instructions: [
            'Choose a professional skill you\'ve mastered',
            'Identify the core principles and patterns',
            'Find a new professional context to apply the skill',
            'Practice applying the skill in the new context',
            'Reflect on what transfers and what needs adaptation',
            'Share your insights with colleagues',
            'Create a framework for skill transfer in your field'
          ],
          successCriteria: [
            'You can transfer skills across professional contexts',
            'You understand the principles behind your skills',
            'You can adapt skills to new professional situations',
            'You can teach others about skill transfer',
            'You demonstrate professional versatility',
            'You\'ve created a personal skill transfer framework'
          ]
        },
        personal: {
          title: 'Personal Skill Transfer Challenge',
          description: 'Transfer personal skills across different life contexts',
          instructions: [
            'Choose a personal skill or hobby you\'ve developed',
            'Identify the underlying principles and patterns',
            'Find a new personal context to apply the skill',
            'Practice applying the skill in the new context',
            'Reflect on the transfer process and insights',
            'Share your experience with friends or family',
            'Develop a personal approach to skill transfer'
          ],
          successCriteria: [
            'You can transfer skills across personal contexts',
            'You understand the principles behind your personal skills',
            'You can apply skills in new personal situations',
            'You can help others develop transfer skills',
            'You show improved personal learning efficiency',
            'You\'ve developed a personal skill transfer system'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong metacognitive awareness about your learning',
        'Your ability to identify underlying principles is excellent',
        'You demonstrate good pattern recognition skills',
        'Your use of analogies helps others understand connections',
        'You\'re systematic in your approach to skill transfer'
      ],
      improvements: [
        'Consider practicing pattern recognition more regularly',
        'Try creating more analogies to strengthen connections',
        'Focus on developing deeper understanding of principles',
        'Practice reflecting on your learning process more often',
        'Work on helping others develop transfer skills'
      ],
      nextSteps: [
        'Continue practicing skill transfer across different contexts',
        'Develop your pattern recognition skills further',
        'Create more analogies and connections between domains',
        'Teach others about skill transfer techniques',
        'Build a personal framework for lifelong skill transfer'
      ]
    },
    badge: {
      name: 'Skill Transfer Expert',
      emoji: '🔄',
      description: 'Master of transferring skills and knowledge across contexts'
    },
    shareMessage: 'Just mastered the art of skill transfer! 🔄 #SkillTransfer #LifelongLearning'
  },
  {
    id: 'learning-agility',
    title: 'Learning Agility',
    emoji: '⚡',
    context: 'professional',
    discover: {
      scenario: 'Your company just adopted a new technology stack that you\'ve never worked with before. You need to get up to speed quickly while continuing to deliver on your current projects.',
      problemExplanation: [
        'Rapidly changing work environments require constant adaptation',
        'Traditional learning methods are too slow for modern pace',
        'Fear of failure prevents experimentation with new approaches',
        'Difficulty balancing learning with current responsibilities'
      ],
      solutionApproach: [
        'Embrace a growth mindset and view challenges as opportunities',
        'Use rapid learning techniques: just-in-time learning, micro-learning',
        'Practice deliberate experimentation in safe environments',
        'Build a personal learning network for quick knowledge access',
        'Apply the 70-20-10 learning model: 70% experience, 20% relationships, 10% formal learning'
      ]
    },
    video: {
      title: 'Developing Learning Agility',
      duration: 6,
      content: [
        'Learning agility is the ability to learn quickly and adapt to new situations.',
        'In today\'s fast-paced world, learning agility is a critical skill for success.',
        'The growth mindset is the foundation of learning agility.',
        'Believe that you can develop any skill with effort and practice.',
        'Rapid learning starts with knowing what you need to learn.',
        'Focus on just-in-time learning: learn what you need when you need it.',
        'Experimentation is key to learning agility.',
        'Try new approaches, fail fast, learn quickly, iterate.',
        'Build relationships with people who know what you need to learn.',
        'Your network is your fastest path to new knowledge.',
        'The 70-20-10 model shows how we really learn.',
        '70% from challenging experiences and assignments.',
        '20% from developmental relationships and feedback.',
        '10% from formal coursework and training.',
        'Reflect on your experiences to extract maximum learning.',
        'Ask: What worked? What didn\'t? What will I do differently?'
      ]
    },
    quiz: {
      title: 'Learning Agility Quiz',
      questions: [
        {
          id: 21,
          question: 'What is learning agility?',
          options: ['Learning many things at once', 'The ability to learn quickly and adapt to new situations', 'Only learning from books', 'Avoiding mistakes'],
          correct: 1,
          explanation: 'Learning agility is the ability to learn quickly from experience and adapt to new situations.'
        },
        {
          id: 22,
          question: 'What mindset supports learning agility?',
          options: ['Fixed mindset', 'Growth mindset', 'Perfectionist mindset', 'Risk-averse mindset'],
          correct: 1,
          explanation: 'A growth mindset believes abilities can be developed through effort and learning.'
        },
        {
          id: 23,
          question: 'What does the 70-20-10 learning model mean?',
          options: ['70% reading, 20% writing, 10% practice', '70% experience, 20% relationships, 10% formal learning', '70% theory, 20% application, 10% review', '70% solo, 20% group, 10% teaching'],
          correct: 1,
          explanation: 'The 70-20-10 model emphasizes learning from experience (70%), relationships (20%), and formal training (10%).'
        },
        {
          id: 24,
          question: 'What is just-in-time learning?',
          options: ['Learning everything in advance', 'Learning what you need when you need it', 'Always being late to learn', 'Learning only from experience'],
          correct: 1,
          explanation: 'Just-in-time learning means learning what you need exactly when you need to apply it.'
        },
        {
          id: 25,
          question: 'Why is experimentation important for learning agility?',
          options: ['It wastes time', 'It helps you learn quickly through trial and error', 'It should be avoided', 'It only works in science'],
          correct: 1,
          explanation: 'Experimentation allows rapid learning through trying new approaches and learning from failures.'
        }
      ]
    },
    challenge: {
      title: 'Learning Agility Challenge',
      description: 'Develop your ability to learn quickly and adapt to new situations',
      contexts: {
        academic: {
          title: 'Academic Learning Agility Challenge',
          description: 'Rapidly learn a new academic subject or skill using agile learning techniques',
          instructions: [
            'Choose a new subject you need to learn quickly',
            'Set a specific, time-bound learning goal',
            'Use just-in-time learning: focus on what you need now',
            'Experiment with different learning approaches',
            'Seek feedback from peers or instructors',
            'Reflect on what worked and iterate',
            'Document your rapid learning process'
          ],
          successCriteria: [
            'You can demonstrate competency in the new subject',
            'You learned faster than with traditional methods',
            'You can teach others your rapid learning approach',
            'You adapted your learning strategy based on feedback',
            'You built a reusable rapid learning framework'
          ]
        },
        professional: {
          title: 'Professional Learning Agility Challenge',
          description: 'Quickly adapt to a new technology, role, or business context',
          instructions: [
            'Identify a new professional skill or technology to master',
            'Apply the 70-20-10 model to your learning',
            'Find mentors or peers who can accelerate your learning',
            'Take on challenging projects that force you to learn',
            'Experiment in safe environments before going live',
            'Reflect regularly on your learning progress',
            'Share your learning journey with colleagues'
          ],
          successCriteria: [
            'You\'re productive with the new skill within 2-4 weeks',
            'You can apply learning agility to future changes',
            'You\'ve built a learning network for ongoing development',
            'You demonstrate adaptability in changing situations',
            'You help others develop learning agility'
          ]
        },
        personal: {
          title: 'Personal Learning Agility Challenge',
          description: 'Develop adaptability and rapid learning in personal life',
          instructions: [
            'Choose a personal skill or habit you want to develop quickly',
            'Break it down into small, achievable experiments',
            'Learn from others who have mastered this skill',
            'Try different approaches and learn from failures',
            'Reflect on your progress weekly',
            'Adjust your approach based on what you learn',
            'Celebrate small wins and maintain momentum'
          ],
          successCriteria: [
            'You make visible progress in a short timeframe',
            'You adapt your approach based on results',
            'You demonstrate resilience when facing setbacks',
            'You can quickly learn new personal skills',
            'You maintain a growth mindset in all areas'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You demonstrate strong adaptability to new situations',
        'Your growth mindset enables continuous learning',
        'You learn effectively from experience and feedback',
        'Your experimentation approach accelerates learning',
        'You build helpful learning networks'
      ],
      improvements: [
        'Increase your comfort with ambiguity and uncertainty',
        'Practice more deliberate reflection on experiences',
        'Seek out more challenging learning opportunities',
        'Build stronger relationships with diverse learners',
        'Document and refine your learning processes'
      ],
      nextSteps: [
        'Take on a stretch assignment outside your comfort zone',
        'Build a personal learning network across domains',
        'Practice rapid learning in low-stakes situations',
        'Mentor others in developing learning agility',
        'Continuously refine your learning strategies'
      ]
    },
    badge: {
      name: 'Agile Learner',
      emoji: '⚡',
      description: 'Master of rapid learning and adaptation'
    },
    shareMessage: 'Just developed serious learning agility! ⚡ #LearningAgility #GrowthMindset'
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    emoji: '📈',
    context: 'professional',
    discover: {
      scenario: 'You want to keep growing and improving throughout your career, but you\'re not sure how to maintain momentum and avoid plateaus.',
      problemExplanation: [
        'Many people plateau after initial learning phase',
        'Lack of systematic approach to ongoing improvement',
        'Difficulty measuring progress in soft skills',
        'Competing priorities make improvement seem optional'
      ],
      solutionApproach: [
        'Implement the Kaizen philosophy: small, continuous improvements',
        'Use the PDCA cycle: Plan, Do, Check, Act',
        'Build deliberate practice into daily routines',
        'Track progress with learning journals and metrics',
        'Create accountability systems and feedback loops'
      ]
    },
    video: {
      title: 'The Power of Continuous Improvement',
      duration: 6,
      content: [
        'Continuous improvement is the practice of constantly getting better.',
        'Small improvements compound into remarkable results over time.',
        'Kaizen is the Japanese philosophy of continuous improvement.',
        'It means making small improvements every single day.',
        'The PDCA cycle is a systematic approach to improvement.',
        'Plan: Identify what to improve and how.',
        'Do: Implement the improvement on a small scale.',
        'Check: Measure the results and learn from them.',
        'Act: Standardize if successful, or try a different approach.',
        'Deliberate practice is how experts get better.',
        'Focus on specific weaknesses, get feedback, iterate.',
        'Track your progress to stay motivated and see growth.',
        'Use a learning journal, metrics, or regular reviews.',
        'Accountability accelerates improvement.',
        'Share goals with others, join communities, find mentors.',
        'Remember: 1% better every day leads to 37x improvement in a year.'
      ]
    },
    quiz: {
      title: 'Continuous Improvement Quiz',
      questions: [
        {
          id: 26,
          question: 'What is Kaizen?',
          options: ['A Japanese martial art', 'The philosophy of continuous small improvements', 'A one-time change initiative', 'A type of meditation'],
          correct: 1,
          explanation: 'Kaizen is the Japanese philosophy of making small, continuous improvements every day.'
        },
        {
          id: 27,
          question: 'What does PDCA stand for?',
          options: ['Plan, Do, Check, Act', 'Prepare, Deliver, Complete, Assess', 'Practice, Develop, Create, Apply', 'Plan, Design, Create, Accomplish'],
          correct: 0,
          explanation: 'PDCA stands for Plan, Do, Check, Act - a cycle for continuous improvement.'
        },
        {
          id: 28,
          question: 'What is deliberate practice?',
          options: ['Practicing anything repeatedly', 'Focused practice on specific weaknesses with feedback', 'Practicing only what you\'re good at', 'Casual, unfocused practice'],
          correct: 1,
          explanation: 'Deliberate practice involves focused effort on specific weaknesses with regular feedback.'
        },
        {
          id: 29,
          question: 'Why track progress in continuous improvement?',
          options: ['It\'s not necessary', 'To stay motivated and measure growth', 'Only for professional goals', 'To impress others'],
          correct: 1,
          explanation: 'Tracking progress helps maintain motivation and provides evidence of improvement over time.'
        },
        {
          id: 30,
          question: 'What happens with 1% daily improvement over a year?',
          options: ['No significant change', 'About 37x improvement', 'Exactly 365% improvement', 'Burnout'],
          correct: 1,
          explanation: 'Due to compounding, improving 1% daily leads to being 37 times better after a year (1.01^365).'
        }
      ]
    },
    challenge: {
      title: 'Continuous Improvement Challenge',
      description: 'Build a sustainable system for lifelong improvement',
      contexts: {
        academic: {
          title: 'Academic Continuous Improvement Challenge',
          description: 'Develop a system for ongoing academic excellence',
          instructions: [
            'Identify one academic skill to improve systematically',
            'Apply the PDCA cycle weekly to your study approach',
            'Track your progress with specific metrics (grades, time, comprehension)',
            'Build deliberate practice into your daily routine',
            'Get regular feedback from instructors or peers',
            'Reflect monthly on what\'s working and iterate',
            'Share your improvement system with classmates'
          ],
          successCriteria: [
            'You show measurable improvement in your chosen skill',
            'You have a documented improvement system',
            'You can sustain improvement over multiple months',
            'You help others implement continuous improvement',
            'You adapt your system based on results'
          ]
        },
        professional: {
          title: 'Professional Continuous Improvement Challenge',
          description: 'Create a career-long improvement framework',
          instructions: [
            'Choose a professional skill critical to your career',
            'Set up a PDCA improvement cycle with weekly iterations',
            'Build accountability through mentors or peer groups',
            'Practice deliberately outside of work hours',
            'Track leading and lagging indicators of improvement',
            'Review progress monthly and adjust approach',
            'Document and share your improvement journey'
          ],
          successCriteria: [
            'You demonstrate consistent skill improvement',
            'Your system is sustainable long-term',
            'You receive recognition for your growth',
            'You mentor others in continuous improvement',
            'You\'ve built a career-long learning habit'
          ]
        },
        personal: {
          title: 'Personal Continuous Improvement Challenge',
          description: 'Build a lifelong habit of personal growth',
          instructions: [
            'Select a personal area for ongoing improvement',
            'Implement small daily improvements (1% better)',
            'Create a simple tracking system (journal, app, chart)',
            'Build accountability with friends or family',
            'Celebrate small wins to maintain motivation',
            'Review and adjust your approach monthly',
            'Share your improvement story to inspire others'
          ],
          successCriteria: [
            'You maintain the improvement habit for 90+ days',
            'You show measurable progress in your chosen area',
            'You\'ve inspired others to start improving',
            'You can adapt your system to new areas',
            'You embody a continuous improvement mindset'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You demonstrate commitment to ongoing growth',
        'Your systematic approach ensures consistent progress',
        'You effectively track and measure improvement',
        'You build sustainable improvement habits',
        'You help others embrace continuous improvement'
      ],
      improvements: [
        'Be patient with the compounding process',
        'Focus on process goals, not just outcomes',
        'Increase your feedback frequency for faster learning',
        'Share your journey more to build accountability',
        'Celebrate small wins to maintain momentum'
      ],
      nextSteps: [
        'Expand continuous improvement to new areas',
        'Mentor someone else in building improvement habits',
        'Read about Kaizen and continuous improvement',
        'Join or create an improvement-focused community',
        'Document your long-term improvement journey'
      ]
    },
    badge: {
      name: 'Kaizen Master',
      emoji: '📈',
      description: 'Champion of continuous improvement and lifelong growth'
    },
    shareMessage: 'Committed to getting 1% better every day! 📈 #ContinuousImprovement #Kaizen'
  }
];

// Helper functions
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

export const module2Subtopics = module2Data;

// Module 2 Assessment - 30 Questions (5 from each subtopic)
export const module2Assessment: AssessmentData = {
  id: 'module2-assessment',
  title: 'Adaptive Learning & Lifelong Learning Assessment',
  description: 'Comprehensive test covering all adaptive learning and lifelong learning skills',
  questions: [
    // Learning Strategies (1-5)
    { id: 1, question: 'What is the main benefit of active learning over passive learning?', options: ['It takes less time', 'It improves long-term retention and understanding', 'It requires less effort', 'It works for all subjects equally'], correct: 1, explanation: 'Active learning improves retention by engaging multiple cognitive processes.' },
    { id: 2, question: 'The Feynman Technique involves:', options: ['Speed reading', 'Explaining concepts in simple terms', 'Memorizing with flashcards', 'Highlighting text'], correct: 1, explanation: 'The Feynman Technique tests understanding by explaining concepts simply.' },
    { id: 3, question: 'Spaced repetition helps learning by:', options: ['Cramming information', 'Reviewing at increasing intervals', 'Reading once thoroughly', 'Only reviewing before exams'], correct: 1, explanation: 'Spaced repetition strengthens memory by reviewing at optimal intervals.' },
    { id: 4, question: 'The Pomodoro Technique uses:', options: ['45 min work, 15 min break', '25 min work, 5 min break', '60 min work, 10 min break', 'Continuous study'], correct: 1, explanation: 'Pomodoro uses 25-minute focused sessions with 5-minute breaks.' },
    { id: 5, question: 'What is the 80/20 rule in learning?', options: ['Study 80 hours per week', 'Focus on the most important 20% of content', 'Take 80% breaks', 'Learn 80% theory, 20% practice'], correct: 1, explanation: 'The 80/20 rule suggests 20% of content yields 80% of results.' },
    
    // Memory Techniques (6-10)
    { id: 6, question: 'The Method of Loci (Memory Palace) uses:', options: ['Random images', 'Familiar locations to store information', 'Alphabetical lists', 'Color coding'], correct: 1, explanation: 'Method of Loci uses familiar spatial locations to organize and recall information.' },
    { id: 7, question: 'Why are absurd, vivid images more memorable?', options: ['They\'re easier to draw', 'They stand out and trigger emotional engagement', 'They take less effort', 'They\'re more realistic'], correct: 1, explanation: 'Absurd images are memorable because they\'re unusual and emotionally engaging.' },
    { id: 8, question: 'Chunking helps memory by:', options: ['Breaking information into smaller pieces', 'Memorizing everything at once', 'Using only visual memory', 'Avoiding repetition'], correct: 0, explanation: 'Chunking breaks information into manageable, memorable pieces.' },
    { id: 9, question: 'Active recall is superior to re-reading because:', options: ['It\'s faster', 'It strengthens retrieval pathways', 'It requires no effort', 'It works without understanding'], correct: 1, explanation: 'Active recall strengthens memory by practicing retrieval.' },
    { id: 10, question: 'How often should you review using spaced repetition?', options: ['Only once', 'At increasing intervals over time', 'Every day forever', 'Only before exams'], correct: 1, explanation: 'Spaced repetition reviews at increasing intervals for optimal retention.' },
    
    // Information Processing (11-15)
    { id: 11, question: 'SQ3R stands for:', options: ['Study, Question, Read, Recite, Review', 'Survey, Question, Read, Recite, Review', 'Scan, Question, Read, Remember, Review', 'Speed, Quality, Read, Review, Repeat'], correct: 1, explanation: 'SQ3R is Survey, Question, Read, Recite, Review - a systematic reading method.' },
    { id: 12, question: 'Critical thinking in information processing involves:', options: ['Reading quickly', 'Evaluating credibility and relevance', 'Accepting all information', 'Memorizing facts'], correct: 1, explanation: 'Critical thinking evaluates information quality, credibility, and relevance.' },
    { id: 13, question: 'The 5W+H framework includes:', options: ['5 words and 1 header', 'Who, What, When, Where, Why, How', '5 weeks and 1 hour', '5 ways and 1 habit'], correct: 1, explanation: '5W+H helps analyze information systematically.' },
    { id: 14, question: 'Information organization is important because:', options: ['It looks professional', 'It enables effective retrieval and connections', 'It reduces information amount', 'It impresses others'], correct: 1, explanation: 'Organization enables retrieval and helps create knowledge connections.' },
    { id: 15, question: 'The first step in SQ3R is:', options: ['Question', 'Survey (overview)', 'Read carefully', 'Recite immediately'], correct: 1, explanation: 'Survey provides an overview before detailed reading.' },
    
    // Skill Transfer (16-20)
    { id: 16, question: 'Skill transfer means:', options: ['Learning new skills', 'Applying skills from one context to another', 'Forgetting old skills', 'Teaching skills to others'], correct: 1, explanation: 'Skill transfer applies knowledge across different contexts.' },
    { id: 17, question: 'The key to skill transfer is understanding:', options: ['Surface procedures', 'Underlying principles', 'Specific examples only', 'Individual cases'], correct: 1, explanation: 'Understanding principles enables transfer across contexts.' },
    { id: 18, question: 'Metacognition means:', options: ['Learning fast', 'Thinking about your own thinking', 'Memorizing facts', 'Taking notes'], correct: 1, explanation: 'Metacognition is awareness and understanding of your own thought processes.' },
    { id: 19, question: 'Analogies help skill transfer by:', options: ['Making learning faster', 'Revealing connections between domains', 'Reducing practice needs', 'Memorizing procedures'], correct: 1, explanation: 'Analogies reveal structural similarities across different domains.' },
    { id: 20, question: 'Pattern recognition enables transfer by:', options: ['Reducing study time', 'Identifying common structures across contexts', 'Avoiding mistakes', 'Simplifying content'], correct: 1, explanation: 'Pattern recognition identifies transferable structures and principles.' },
    
    // Learning Agility (21-25)
    { id: 21, question: 'Learning agility is:', options: ['Learning many things', 'Quickly learning and adapting to new situations', 'Only learning from books', 'Avoiding change'], correct: 1, explanation: 'Learning agility combines rapid learning with adaptation.' },
    { id: 22, question: 'A growth mindset believes:', options: ['Talent is fixed', 'Abilities develop through effort', 'Some people can\'t learn', 'Intelligence is unchangeable'], correct: 1, explanation: 'Growth mindset believes abilities can be developed through dedication and hard work.' },
    { id: 23, question: 'The 70-20-10 learning model suggests:', options: ['70% theory, 20% practice, 10% review', '70% experience, 20% relationships, 10% formal learning', '70% reading, 20% writing, 10% testing', '70% solo, 20% group, 10% teaching'], correct: 1, explanation: 'Most learning comes from experience (70%), relationships (20%), and formal training (10%).' },
    { id: 24, question: 'Just-in-time learning means:', options: ['Always being late', 'Learning what you need when you need it', 'Learning everything in advance', 'Never preparing'], correct: 1, explanation: 'Just-in-time learning focuses on immediate application needs.' },
    { id: 25, question: 'Experimentation supports learning agility by:', options: ['Wasting time', 'Enabling rapid learning through trial and error', 'Avoiding mistakes', 'Following rules strictly'], correct: 1, explanation: 'Experimentation accelerates learning through rapid feedback cycles.' },
    
    // Continuous Improvement (26-30)
    { id: 26, question: 'Kaizen philosophy emphasizes:', options: ['Dramatic changes', 'Small, continuous improvements', 'Waiting for perfection', 'Competing with others'], correct: 1, explanation: 'Kaizen focuses on small, consistent improvements that compound over time.' },
    { id: 27, question: 'PDCA cycle stands for:', options: ['Prepare, Deliver, Complete, Assess', 'Plan, Do, Check, Act', 'Practice, Develop, Create, Apply', 'Perfect, Deploy, Control, Achieve'], correct: 1, explanation: 'PDCA is Plan, Do, Check, Act - a continuous improvement cycle.' },
    { id: 28, question: 'Deliberate practice focuses on:', options: ['Practicing what you\'re good at', 'Targeting specific weaknesses with feedback', 'Casual, relaxed practice', 'Quantity over quality'], correct: 1, explanation: 'Deliberate practice systematically targets weaknesses with feedback.' },
    { id: 29, question: 'Why track progress in continuous improvement?', options: ['To compete with others', 'To stay motivated and measure growth', 'It\'s not important', 'Only for work goals'], correct: 1, explanation: 'Tracking provides motivation and evidence of improvement.' },
    { id: 30, question: 'Improving 1% daily compounds to approximately:', options: ['365% improvement yearly', '37x improvement yearly', 'No real difference', '100% improvement yearly'], correct: 1, explanation: 'Daily 1% improvement compounds to ~37x improvement over a year (1.01^365 ≈ 37.8).' }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! You\'re a master of adaptive learning!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great work! You have strong learning skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good progress! Keep practicing these techniques!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review the material and develop your learning strategies!', xpReward: 100 }
  }
};
