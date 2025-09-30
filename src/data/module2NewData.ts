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
