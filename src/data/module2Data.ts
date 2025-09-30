// Module 2: Adaptive Learning & Lifelong Learning Skills Data Structure
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

export const module2Subtopics: SubtopicData[] = [
  {
    id: 'learning-strategies',
    title: 'Learning Strategies',
    emoji: '📚',
    context: 'academic',
    discover: {
      scenario: "Your professor just introduced a completely new subject that's nothing like what you've studied before. Traditional memorization isn't working, and you're falling behind while classmates seem to grasp concepts faster. You need to develop new learning approaches to master this challenging material and succeed academically.",
      problemExplanation: [
        "One-Size-Fits-All Learning: Using the same study methods for all subjects and topics",
        "Passive Learning: Just reading and highlighting without active engagement",
        "Information Overload: Trying to learn everything at once without prioritization",
        "Learning Style Mismatch: Not adapting methods to match the subject or your strengths"
      ],
      solutionApproach: [
        "Adaptive Methods: Different strategies for different types of content and subjects",
        "Active Learning: Engaging with material through questioning, summarizing, and teaching",
        "Strategic Planning: Breaking down complex topics and prioritizing key concepts",
        "Metacognitive Awareness: Understanding how you learn best and adjusting accordingly"
      ]
    },
    video: {
      title: "Master Adaptive Learning Strategies",
      duration: 5,
      content: [
        "Learning Style Assessment: Identifying your optimal learning preferences and methods",
        "Subject-Specific Strategies: Different approaches for STEM, humanities, and practical skills",
        "Active Learning Techniques: Engaging methods that boost retention and understanding",
        "Study Planning: Creating adaptive study schedules that evolve with your progress",
        "Learning Transfer: Applying knowledge from one domain to accelerate learning in another"
      ],
      script: `[HOOK - 30 seconds]
"The secret to academic success isn't working harder - it's learning smarter. Today, I'll show you how to master adaptive learning strategies in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, adaptive learning strategies help you:
- Master new subjects faster by adapting your approach to the content type
- Improve retention through active learning techniques like the Feynman method
- Build study systems that evolve with your academic challenges

Techniques: Use the VARK model (Visual, Auditory, Reading, Kinesthetic), practice spaced repetition, and teach concepts to others.

Example: Alex improved his chemistry grades by 40% by switching from passive reading to active problem-solving and visual concept mapping."

[PROFESSIONAL - 2 minutes]
"In your career, adaptive learning helps you:
- Quickly master new technologies and industry trends
- Develop cross-functional skills that make you more valuable
- Stay competitive in rapidly changing job markets

Techniques: Set learning goals, use microlearning for busy schedules, build learning networks, and apply new skills immediately.

Example: Maria got promoted to data analyst by using adaptive learning to master Python programming in 3 months while working full-time."

[PERSONAL - 1 minute]
"In personal life, adaptive learning helps you:
- Pick up new hobbies and interests more effectively
- Develop life skills and personal growth
- Stay mentally sharp and curious throughout life

Techniques: Follow your interests, learn through multiple channels, and connect new knowledge to existing experiences.

Example: Tom learned to cook gourmet meals by adapting his engineering problem-solving skills to recipe development and technique mastery."

[CALL TO ACTION - 30 seconds]
"Ready to become a learning machine? Start by identifying one subject you're struggling with and try a new learning strategy today. Remember, the best learners are adaptive learners. Begin now!"`
    },
    quiz: {
      title: "Test Your Learning Strategies Knowledge",
      questions: [
        {
          id: 1,
          question: "You're struggling with a new math concept. What's the most adaptive learning approach?",
          options: [
            "Read the textbook chapter multiple times",
            "Try different learning methods: visual diagrams, practice problems, and teaching it to someone",
            "Memorize all the formulas",
            "Wait for the next lecture to understand better"
          ],
          correct: 1,
          explanation: "Adaptive learning means trying multiple approaches to find what works best for that specific content type."
        },
        {
          id: 2,
          question: "How do you adapt your learning strategy when switching from history to physics?",
          options: [
            "Use the same study methods for both",
            "Adjust your approach: narrative learning for history, problem-solving practice for physics",
            "Focus only on memorization for both subjects",
            "Study them at the same time to save time"
          ],
          correct: 1,
          explanation: "Different subjects require different learning strategies - historical thinking vs. mathematical problem-solving."
        },
        {
          id: 3,
          question: "What's the key to effective spaced repetition in adaptive learning?",
          options: [
            "Review everything every day",
            "Adjust review intervals based on how well you know each concept",
            "Review everything once a week",
            "Only review right before exams"
          ],
          correct: 1,
          explanation: "Adaptive spaced repetition adjusts intervals based on your mastery level of each concept."
        },
        {
          id: 4,
          question: "How do you know if your learning strategy is working?",
          options: [
            "You feel like you're studying hard",
            "You can explain concepts clearly and apply them to new problems",
            "You've read all the assigned materials",
            "You've spent many hours studying"
          ],
          correct: 1,
          explanation: "True learning is measured by understanding and application, not time spent or effort exerted."
        },
        {
          id: 5,
          question: "What should you do when a learning method stops being effective?",
          options: [
            "Keep using it anyway",
            "Analyze why it's not working and try a different approach",
            "Take a break from studying",
            "Switch to a completely different subject"
          ],
          correct: 1,
          explanation: "Adaptive learners continuously evaluate and adjust their methods based on effectiveness."
        }
      ]
    },
    challenge: {
      title: "Design Your Adaptive Learning System",
      description: "Create a personalized learning system for a challenging subject",
      instructions: [
        "Choose a subject you find challenging or want to learn",
        "Identify the type of content (conceptual, procedural, factual, metacognitive)",
        "Design 3 different learning strategies suited to this content type",
        "Create a study schedule that incorporates spaced repetition",
        "Test your system for one week and track your progress",
        "Adjust your approach based on what works best"
      ],
      successCriteria: [
        "Identified appropriate learning strategies for your content type",
        "Created a realistic and sustainable study schedule",
        "Used at least 2 different learning modalities (visual, auditory, kinesthetic)",
        "Tracked progress and made adjustments based on results",
        "Can explain concepts clearly after one week of practice"
      ]
    },
    feedback: {
      strengths: ["You're naturally curious and willing to try new approaches"],
      improvements: ["Focus on consistency and tracking progress to identify what works best"],
      nextSteps: ["Apply your adaptive learning system to your most challenging subject this semester"]
    },
    badge: {
      name: "Learning Strategist",
      emoji: "📚",
      description: "Mastered adaptive learning strategies for academic success"
    },
    shareMessage: "Just mastered adaptive learning strategies! Ready to learn anything faster and smarter! 📚 #AdaptiveLearning #StudySmarter"
  },
  {
    id: 'memory-techniques',
    title: 'Memory Techniques',
    emoji: '🧠',
    context: 'professional',
    discover: {
      scenario: "You're in a new job where you need to remember client names, product details, industry terminology, and complex procedures. Your memory feels overwhelmed, and you're worried about making mistakes or appearing unprepared in meetings. How do you develop powerful memory techniques for professional success?",
      problemExplanation: [
        "Information Overload: Too much new information to remember using basic methods",
        "Lack of Memory Systems: No structured approach to organizing and retaining information",
        "Passive Memory: Relying on repetition instead of active memory techniques",
        "Context Switching: Difficulty remembering information across different professional contexts"
      ],
      solutionApproach: [
        "Memory Palaces: Using spatial memory to organize and recall information",
        "Association Techniques: Connecting new information to existing knowledge",
        "Chunking Strategies: Breaking complex information into manageable pieces",
        "Active Recall: Testing memory to strengthen retention and retrieval"
      ]
    },
    video: {
      title: "Build a Powerful Professional Memory",
      duration: 5,
      content: [
        "Memory Palace Technique: Creating mental spaces to store and organize information",
        "Name and Face Association: Remembering clients, colleagues, and networking contacts",
        "Technical Information: Memorizing procedures, specifications, and industry knowledge",
        "Presentation Memory: Delivering talks and pitches without notes",
        "Long-term Retention: Maintaining professional knowledge over time"
      ],
      script: `[HOOK - 30 seconds]
"Your memory is your most valuable professional tool. Today, I'll show you how to build a powerful memory system that will transform your career in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, memory techniques help you:
- Remember complex theories and formulas for exams without cramming
- Retain information from multiple courses simultaneously
- Build knowledge that connects across different subjects

Techniques: Use memory palaces for structured information, create vivid associations, and practice active recall instead of passive review.

Example: Jessica memorized all anatomy terms for medical school using memory palaces, reducing her study time by 60% while improving test scores."

[PROFESSIONAL - 2 minutes]
"In your career, memory techniques help you:
- Remember client names, preferences, and project details effortlessly
- Master industry knowledge and technical specifications
- Deliver presentations confidently without relying on notes

Techniques: Create mental filing systems, use acronyms and mnemonics, and practice spaced repetition for long-term retention.

Example: Robert impressed clients by remembering their personal details and project histories, leading to a 40% increase in repeat business."

[PERSONAL - 1 minute]
"In personal life, memory techniques help you:
- Remember important dates, appointments, and commitments
- Learn new languages and skills more effectively
- Maintain relationships by remembering personal details

Techniques: Use visual associations, create memory triggers, and practice daily memory exercises.

Example: Linda strengthened her relationships by remembering friends' interests, important dates, and conversation details using simple memory techniques."

[CALL TO ACTION - 30 seconds]
"Ready to unlock your memory potential? Start by choosing one type of information you need to remember and try the memory palace technique today. Your future self will thank you!"`
    },
    quiz: {
      title: "Test Your Memory Techniques Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the most effective way to remember a list of 20 client names for a networking event?",
          options: [
            "Write them down and read repeatedly",
            "Create a memory palace and place each name in a specific location with visual associations",
            "Try to memorize them all at once",
            "Just focus on the most important ones"
          ],
          correct: 1,
          explanation: "Memory palaces with visual associations provide the strongest recall for lists of information."
        },
        {
          id: 2,
          question: "How do you remember technical procedures in a new job?",
          options: [
            "Read the manual multiple times",
            "Break procedures into chunks, create acronyms, and practice active recall",
            "Ask colleagues to remind you each time",
            "Write detailed notes to reference"
          ],
          correct: 1,
          explanation: "Chunking and active recall create stronger procedural memory than passive reading."
        },
        {
          id: 3,
          question: "What's the best way to remember information for long-term professional use?",
          options: [
            "Cram before you need it",
            "Use spaced repetition and connect new information to existing knowledge",
            "Review everything once a month",
            "Rely on digital tools to store everything"
          ],
          correct: 1,
          explanation: "Spaced repetition and knowledge connections create lasting professional memory."
        },
        {
          id: 4,
          question: "How do you remember names and faces at professional networking events?",
          options: [
            "Focus only on reading name tags",
            "Create visual associations between names and distinctive facial features",
            "Try to remember everyone's business card",
            "Just focus on having good conversations"
          ],
          correct: 1,
          explanation: "Visual associations between names and faces create the strongest memory for people."
        },
        {
          id: 5,
          question: "What should you do if you forget important information during a presentation?",
          options: [
            "Panic and apologize",
            "Use memory triggers you've prepared and gracefully transition to related topics",
            "Read directly from your notes",
            "End the presentation early"
          ],
          correct: 1,
          explanation: "Prepared memory triggers and smooth transitions show professionalism and preparation."
        }
      ]
    },
    challenge: {
      title: "Build Your Professional Memory Palace",
      description: "Create a memory palace for important professional information",
      instructions: [
        "Choose a familiar location (your home, office, or school) as your memory palace",
        "Identify 10 pieces of important professional information you need to remember",
        "Assign each piece of information to a specific location in your palace",
        "Create vivid, memorable associations for each item",
        "Practice walking through your palace and recalling the information",
        "Test your recall after 24 hours and adjust your associations as needed"
      ],
      successCriteria: [
        "Successfully created a memory palace with 10 locations",
        "Developed memorable associations for each piece of information",
        "Can recall all 10 items in order after initial practice",
        "Maintained 80%+ recall after 24 hours",
        "Can explain the technique to someone else"
      ]
    },
    feedback: {
      strengths: ["You have good visualization skills and attention to detail"],
      improvements: ["Practice more vivid and unusual associations to make memories stickier"],
      nextSteps: ["Expand your memory palace system to include more professional information categories"]
    },
    badge: {
      name: "Memory Master",
      emoji: "🧠",
      description: "Built powerful memory systems for professional success"
    },
    shareMessage: "My memory is now my superpower! Just built a professional memory palace! 🧠 #MemoryTechniques #ProfessionalGrowth"
  },
  {
    id: 'information-processing',
    title: 'Information Processing',
    emoji: '⚡',
    context: 'professional',
    discover: {
      scenario: "You're overwhelmed with information at work: emails, reports, market research, industry updates, and meeting notes. You're spending more time managing information than using it effectively. Important insights are getting lost in the noise, and you need to develop better systems for processing and using information strategically.",
      problemExplanation: [
        "Information Overload: Too much information coming from too many sources",
        "Poor Filtering: No system to distinguish important from trivial information",
        "Passive Consumption: Reading without analyzing or synthesizing insights",
        "Knowledge Silos: Information stored in isolation without connections or context"
      ],
      solutionApproach: [
        "Information Architecture: Creating systems to organize and categorize information",
        "Active Processing: Analyzing, synthesizing, and extracting insights from data",
        "Strategic Filtering: Prioritizing information based on relevance and importance",
        "Knowledge Integration: Connecting information across sources and contexts"
      ]
    },
    video: {
      title: "Master Information Processing for Success",
      duration: 5,
      content: [
        "Information Filtering: Identifying and prioritizing valuable information sources",
        "Active Reading: Techniques for extracting insights from complex documents",
        "Synthesis Skills: Combining information from multiple sources into actionable insights",
        "Digital Organization: Creating systems for managing and retrieving information",
        "Decision Support: Using processed information to make better professional decisions"
      ],
      script: `[HOOK - 30 seconds]
"In the information age, your ability to process and use information effectively determines your success. Today, I'll show you how to master information processing in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, information processing helps you:
- Research efficiently and identify the most relevant sources for your projects
- Synthesize information from multiple sources into coherent arguments
- Develop critical thinking skills that professors value

Techniques: Use the SQ3R method (Survey, Question, Read, Recite, Review), create concept maps, and practice information synthesis.

Example: Michael improved his research paper grades by 35% by learning to process and synthesize information from multiple academic sources effectively."

[PROFESSIONAL - 2 minutes]
"In your career, information processing helps you:
- Stay informed about industry trends without information overload
- Make data-driven decisions based on processed insights
- Communicate complex information clearly to stakeholders

Techniques: Create information filters, use active reading strategies, build knowledge management systems, and practice executive summarization.

Example: Sarah became the go-to analyst at her company by developing superior information processing skills that turned data into actionable business insights."

[PERSONAL - 1 minute]
"In personal life, information processing helps you:
- Make better decisions about health, finances, and relationships
- Stay informed without being overwhelmed by news and social media
- Learn new skills more efficiently

Techniques: Curate quality information sources, practice critical evaluation, and create personal knowledge systems.

Example: David made better investment decisions by learning to process financial information effectively rather than following random advice."

[CALL TO ACTION - 30 seconds]
"Ready to master information processing? Start by identifying your most important information sources and create a simple filtering system today. Turn information overload into insight advantage!"`
    },
    quiz: {
      title: "Test Your Information Processing Knowledge",
      questions: [
        {
          id: 1,
          question: "You receive 50+ emails daily with industry updates. What's the most effective processing approach?",
          options: [
            "Read every email completely",
            "Create filters and categories, scan for key insights, and deep-read only high-priority items",
            "Delete most emails without reading",
            "Save everything to read later"
          ],
          correct: 1,
          explanation: "Strategic filtering and prioritized processing prevents overload while capturing important insights."
        },
        {
          id: 2,
          question: "How do you synthesize information from multiple research sources for a project?",
          options: [
            "Copy the best parts from each source",
            "Identify common themes, contradictions, and gaps, then create an integrated analysis",
            "Use only the most recent source",
            "Present each source separately"
          ],
          correct: 1,
          explanation: "Effective synthesis requires analyzing relationships between sources and creating integrated insights."
        },
        {
          id: 3,
          question: "What's the best way to process complex technical documentation?",
          options: [
            "Read it word-for-word from beginning to end",
            "Use active reading: preview structure, identify key concepts, take notes, and summarize",
            "Skim quickly for general understanding",
            "Ask someone else to explain it"
          ],
          correct: 1,
          explanation: "Active reading strategies help extract maximum understanding from complex technical content."
        },
        {
          id: 4,
          question: "How do you avoid information overload while staying informed?",
          options: [
            "Read everything available",
            "Curate high-quality sources, set time limits, and focus on actionable insights",
            "Only read headlines",
            "Avoid all information sources"
          ],
          correct: 1,
          explanation: "Strategic curation and time management prevent overload while maintaining awareness."
        },
        {
          id: 5,
          question: "What's the key to turning processed information into better decisions?",
          options: [
            "Collect more information",
            "Focus on actionable insights and connect information to specific decision criteria",
            "Trust your gut feelings",
            "Follow what others are doing"
          ],
          correct: 1,
          explanation: "Effective decision-making requires connecting processed insights to specific decision frameworks."
        }
      ]
    },
    challenge: {
      title: "Design Your Information Processing System",
      description: "Create a personal system for processing professional information effectively",
      instructions: [
        "Audit your current information sources (emails, reports, news, social media)",
        "Categorize sources by importance and relevance to your goals",
        "Create filters and organization systems for different types of information",
        "Develop templates for processing and summarizing key information",
        "Practice active reading and note-taking techniques for one week",
        "Measure time saved and insights gained compared to your old approach"
      ],
      successCriteria: [
        "Identified and categorized all major information sources",
        "Created effective filtering and organization systems",
        "Developed consistent processing and note-taking methods",
        "Reduced information processing time by at least 25%",
        "Generated more actionable insights from the same information"
      ]
    },
    feedback: {
      strengths: ["You're good at identifying important information and asking relevant questions"],
      improvements: ["Focus on developing more systematic approaches to information synthesis"],
      nextSteps: ["Apply your processing system to a current work project and track the results"]
    },
    badge: {
      name: "Information Processor",
      emoji: "⚡",
      description: "Mastered systematic information processing for professional advantage"
    },
    shareMessage: "Information overload conquered! Just built my personal processing system! ⚡ #InformationProcessing #Productivity"
  },
  {
    id: 'skill-transfer',
    title: 'Skill Transfer',
    emoji: '🔄',
    context: 'academic',
    discover: {
      scenario: "You've mastered problem-solving in mathematics, but struggle to apply similar thinking to your economics course. Your programming logic skills aren't helping with your writing assignments. You need to learn how to transfer skills and knowledge across different domains to become a more versatile learner.",
      problemExplanation: [
        "Domain Isolation: Treating each subject as completely separate with no connections",
        "Surface Learning: Focusing on specific content rather than underlying principles",
        "Limited Transfer: Not recognizing how skills from one area apply to others",
        "Compartmentalized Thinking: Missing opportunities to leverage existing strengths"
      ],
      solutionApproach: [
        "Pattern Recognition: Identifying underlying principles that apply across domains",
        "Abstract Thinking: Extracting general strategies from specific contexts",
        "Analogical Reasoning: Drawing connections between different fields and situations",
        "Metacognitive Awareness: Understanding how your learning processes apply broadly"
      ]
    },
    video: {
      title: "Master Skill Transfer for Accelerated Learning",
      duration: 5,
      content: [
        "Pattern Recognition: Identifying transferable principles across different subjects",
        "Cross-Domain Application: Using skills from one field to excel in another",
        "Learning Acceleration: How skill transfer speeds up mastery of new domains",
        "Metacognitive Strategies: Understanding your learning processes for better transfer",
        "Integration Techniques: Connecting knowledge across academic and professional contexts"
      ],
      script: `[HOOK - 30 seconds]
"The secret to rapid learning isn't starting from scratch every time - it's transferring skills you already have. Today, I'll show you how to master skill transfer in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, skill transfer helps you:
- Apply problem-solving skills from math to physics, chemistry, and economics
- Use writing skills from English to create better lab reports and research papers
- Transfer critical thinking from philosophy to analyze case studies in business

Techniques: Look for underlying patterns, practice analogical thinking, and explicitly connect new learning to existing skills.

Example: Emma improved her statistics performance by 50% by transferring her logical reasoning skills from computer programming to statistical analysis."

[PROFESSIONAL - 2 minutes]
"In your career, skill transfer helps you:
- Adapt quickly to new roles by leveraging existing competencies
- Solve novel problems using familiar frameworks from different contexts
- Become more valuable by applying diverse skills to workplace challenges

Techniques: Map your transferable skills, practice cross-functional thinking, and look for patterns in successful problem-solving approaches.

Example: James transitioned from engineering to product management successfully by transferring his systems thinking and problem-solving skills to business strategy."

[PERSONAL - 1 minute]
"In personal life, skill transfer helps you:
- Learn new hobbies faster by applying skills from existing interests
- Solve personal challenges using professional problem-solving approaches
- Develop versatility and adaptability in various life situations

Techniques: Reflect on your strengths, experiment with applying skills in new contexts, and look for connections between different areas of your life.

Example: Lisa used her project management skills from work to successfully plan her wedding and organize family events."

[CALL TO ACTION - 30 seconds]
"Ready to accelerate your learning through skill transfer? Identify one skill you're strong in and find a new domain where you can apply it today. Your existing strengths are your learning superpowers!"`
    },
    quiz: {
      title: "Test Your Skill Transfer Knowledge",
      questions: [
        {
          id: 1,
          question: "You're strong in logical reasoning from math. How can you transfer this to improve your essay writing?",
          options: [
            "Use numbers and equations in your essays",
            "Apply logical structure: clear premises, evidence, and conclusions to build arguments",
            "Write only about mathematical topics",
            "Avoid using any mathematical thinking"
          ],
          correct: 1,
          explanation: "Logical reasoning principles transfer as structured thinking and argumentation skills."
        },
        {
          id: 2,
          question: "What's the key to successful skill transfer between different academic subjects?",
          options: [
            "Memorize facts from both subjects",
            "Identify underlying principles and patterns that apply across domains",
            "Study both subjects simultaneously",
            "Focus only on the differences between subjects"
          ],
          correct: 1,
          explanation: "Successful transfer requires recognizing abstract principles that apply across contexts."
        },
        {
          id: 3,
          question: "How do you transfer problem-solving skills from one field to another?",
          options: [
            "Use exactly the same methods",
            "Adapt the general approach while adjusting for domain-specific requirements",
            "Ignore your previous experience",
            "Only use domain-specific methods"
          ],
          correct: 1,
          explanation: "Effective transfer adapts general strategies to fit new contexts and requirements."
        },
        {
          id: 4,
          question: "What prevents effective skill transfer in academic settings?",
          options: [
            "Having too many skills",
            "Thinking of subjects as completely separate without looking for connections",
            "Studying too hard",
            "Taking too many courses"
          ],
          correct: 1,
          explanation: "Compartmentalized thinking prevents recognition of transferable skills and principles."
        },
        {
          id: 5,
          question: "How can you improve your ability to transfer skills across different contexts?",
          options: [
            "Focus only on memorizing specific content",
            "Practice identifying patterns, reflect on your learning processes, and explicitly look for connections",
            "Avoid trying new approaches",
            "Study each subject in isolation"
          ],
          correct: 1,
          explanation: "Metacognitive awareness and pattern recognition enhance skill transfer abilities."
        }
      ]
    },
    challenge: {
      title: "Map and Apply Your Transferable Skills",
      description: "Identify your strong skills and transfer them to a challenging new domain",
      instructions: [
        "List 3-5 skills or subjects where you excel",
        "For each skill, identify the underlying principles or strategies that make you successful",
        "Choose a challenging subject or area where you want to improve",
        "Map how your existing skills could apply to this new domain",
        "Create a specific plan to apply one transferred skill to improve in the new area",
        "Practice for one week and document your progress and insights"
      ],
      successCriteria: [
        "Clearly identified underlying principles of your strong skills",
        "Made explicit connections between existing skills and new domain",
        "Created a specific application plan with measurable goals",
        "Successfully applied transferred skills to show improvement",
        "Reflected on the transfer process and lessons learned"
      ]
    },
    feedback: {
      strengths: ["You have diverse interests and good analytical thinking skills"],
      improvements: ["Practice making more explicit connections between different areas of knowledge"],
      nextSteps: ["Apply skill transfer techniques to your most challenging academic subject this semester"]
    },
    badge: {
      name: "Skill Transfer Expert",
      emoji: "🔄",
      description: "Mastered the art of applying skills across different domains for accelerated learning"
    },
    shareMessage: "My skills are now transferable superpowers! Learning faster by connecting the dots! 🔄 #SkillTransfer #LearningHacks"
  },
  {
    id: 'learning-agility',
    title: 'Learning Agility',
    emoji: '🚀',
    context: 'professional',
    discover: {
      scenario: "Your industry is rapidly changing with new technologies, regulations, and market demands. Your current skills are becoming outdated, and you need to continuously learn and adapt to stay relevant. You must develop learning agility to thrive in an environment of constant change and uncertainty.",
      problemExplanation: [
        "Fixed Mindset: Believing abilities are static rather than developable",
        "Learning Resistance: Avoiding new challenges due to fear of failure or discomfort",
        "Slow Adaptation: Taking too long to adjust to new information or changing circumstances",
        "Comfort Zone Dependency: Sticking to familiar approaches rather than experimenting"
      ],
      solutionApproach: [
        "Growth Mindset: Embracing challenges as opportunities to develop new capabilities",
        "Rapid Experimentation: Quickly testing new approaches and learning from results",
        "Feedback Integration: Actively seeking and incorporating feedback for continuous improvement",
        "Change Readiness: Developing comfort with uncertainty and ambiguity"
      ]
    },
    video: {
      title: "Develop Learning Agility for Career Success",
      duration: 5,
      content: [
        "Growth Mindset Development: Cultivating beliefs that support continuous learning",
        "Rapid Learning Cycles: Accelerating the learn-apply-adjust process",
        "Failure Recovery: Learning from setbacks and bouncing back stronger",
        "Change Navigation: Thriving in uncertain and rapidly changing environments",
        "Continuous Improvement: Building systems for ongoing skill development"
      ],
      script: `[HOOK - 30 seconds]
"In today's fast-changing world, learning agility isn't just an advantage - it's survival. Today, I'll show you how to develop learning agility that will future-proof your career in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, learning agility helps you:
- Adapt quickly when professors change course requirements or teaching styles
- Master new subjects and concepts faster than your peers
- Recover from academic setbacks and turn them into learning opportunities

Techniques: Embrace challenges, seek feedback actively, experiment with new study methods, and view mistakes as learning data.

Example: Carlos struggled initially in computer science but developed learning agility that helped him master programming languages faster than students with stronger initial backgrounds."

[PROFESSIONAL - 2 minutes]
"In your career, learning agility helps you:
- Stay relevant as industries and technologies evolve rapidly
- Take on new roles and responsibilities with confidence
- Lead change initiatives and help others adapt to new circumstances

Techniques: Seek stretch assignments, build learning networks, practice rapid prototyping, and develop comfort with ambiguity.

Example: Jennifer advanced from junior developer to tech lead in 18 months by demonstrating exceptional learning agility when her company adopted new technologies."

[PERSONAL - 1 minute]
"In personal life, learning agility helps you:
- Adapt to life changes and transitions more smoothly
- Develop new interests and capabilities throughout your life
- Model continuous learning for family and friends

Techniques: Stay curious, embrace new experiences, learn from diverse perspectives, and maintain a beginner's mind.

Example: Mark successfully transitioned from corporate life to entrepreneurship by applying his learning agility to master new skills quickly."

[CALL TO ACTION - 30 seconds]
"Ready to develop learning agility? Start by identifying one area where you've been avoiding change or challenge, and take one small step toward growth today. Your future depends on your ability to learn and adapt!"`
    },
    quiz: {
      title: "Test Your Learning Agility Knowledge",
      questions: [
        {
          id: 1,
          question: "Your company introduces a new software system you've never used. What's the most agile learning approach?",
          options: [
            "Wait for formal training to be offered",
            "Immediately start experimenting, seek quick tutorials, and ask colleagues for tips",
            "Resist the change and stick to old methods",
            "Complain about the unnecessary change"
          ],
          correct: 1,
          explanation: "Learning agility involves proactive experimentation and rapid skill acquisition."
        },
        {
          id: 2,
          question: "You make a mistake on an important project. How does learning agility help you respond?",
          options: [
            "Hide the mistake and hope no one notices",
            "Analyze what went wrong, extract lessons, and apply improvements immediately",
            "Blame external factors",
            "Avoid similar projects in the future"
          ],
          correct: 1,
          explanation: "Learning agility turns failures into valuable learning experiences and rapid improvement."
        },
        {
          id: 3,
          question: "What's the key characteristic of someone with high learning agility?",
          options: [
            "Never making mistakes",
            "Quickly adapting approaches based on new information and feedback",
            "Sticking to proven methods",
            "Avoiding challenging situations"
          ],
          correct: 1,
          explanation: "Learning agility is characterized by rapid adaptation and continuous adjustment based on new information."
        },
        {
          id: 4,
          question: "How do you develop comfort with uncertainty in rapidly changing environments?",
          options: [
            "Avoid uncertain situations",
            "Practice taking small risks, focus on learning rather than perfect outcomes, and build tolerance for ambiguity",
            "Wait until everything becomes clear",
            "Only work in stable, predictable environments"
          ],
          correct: 1,
          explanation: "Building comfort with uncertainty requires gradual exposure and focusing on learning over perfect outcomes."
        },
        {
          id: 5,
          question: "What's the best way to accelerate your learning in a new role or field?",
          options: [
            "Take your time to avoid mistakes",
            "Seek diverse perspectives, experiment rapidly, and actively request feedback",
            "Copy what successful people are doing exactly",
            "Focus only on formal training programs"
          ],
          correct: 1,
          explanation: "Rapid learning requires active engagement, experimentation, and diverse input sources."
        }
      ]
    },
    challenge: {
      title: "Develop Your Learning Agility",
      description: "Practice rapid learning and adaptation in a new skill or domain",
      instructions: [
        "Choose a new skill that's relevant to your goals but outside your comfort zone",
        "Set a 2-week learning sprint with specific milestones",
        "Use multiple learning methods: tutorials, practice, feedback, and experimentation",
        "Track your progress daily and adjust your approach based on what works",
        "Seek feedback from someone experienced in this skill area",
        "Reflect on your learning process and identify strategies that accelerated your progress"
      ],
      successCriteria: [
        "Chose an appropriately challenging new skill to learn",
        "Demonstrated rapid progress through multiple learning methods",
        "Actively sought and incorporated feedback during the learning process",
        "Showed flexibility in adjusting learning strategies based on results",
        "Reflected thoughtfully on the learning process and extracted transferable insights"
      ]
    },
    feedback: {
      strengths: ["You show curiosity and willingness to try new approaches"],
      improvements: ["Practice being more comfortable with initial confusion and imperfect performance"],
      nextSteps: ["Apply your learning agility to a current professional challenge or opportunity"]
    },
    badge: {
      name: "Learning Agility Champion",
      emoji: "🚀",
      description: "Developed exceptional ability to learn and adapt rapidly in changing environments"
    },
    shareMessage: "My learning agility is my superpower! Ready to adapt and thrive in any environment! 🚀 #LearningAgility #FutureReady"
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    emoji: '📈',
    context: 'personal',
    discover: {
      scenario: "You want to grow personally and professionally, but you often start improvement efforts that fizzle out after a few weeks. You lack a systematic approach to continuous development and struggle to maintain momentum in your growth journey. How do you build sustainable systems for lifelong improvement?",
      problemExplanation: [
        "Inconsistent Effort: Starting improvement initiatives but not maintaining them long-term",
        "Lack of Systems: No structured approach to tracking and sustaining growth",
        "Perfectionism: All-or-nothing thinking that leads to giving up after small setbacks",
        "No Measurement: Inability to track progress and celebrate incremental improvements"
      ],
      solutionApproach: [
        "Growth Systems: Creating sustainable processes for continuous development",
        "Progress Tracking: Measuring improvement and celebrating small wins",
        "Habit Formation: Building improvement into daily routines and practices",
        "Reflective Practice: Regular assessment and adjustment of improvement strategies"
      ]
    },
    video: {
      title: "Build Systems for Continuous Improvement",
      duration: 5,
      content: [
        "Growth Mindset Cultivation: Developing beliefs that support continuous improvement",
        "Habit Architecture: Building improvement into your daily and weekly routines",
        "Progress Measurement: Tracking growth and celebrating incremental wins",
        "Reflection Practices: Regular review and adjustment of improvement strategies",
        "Sustainable Motivation: Maintaining momentum through ups and downs"
      ],
      script: `[HOOK - 30 seconds]
"The secret to extraordinary achievement isn't talent or luck - it's continuous improvement. Today, I'll show you how to build systems for lifelong growth in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, continuous improvement helps you:
- Steadily enhance your study skills and academic performance over time
- Build learning habits that compound throughout your education
- Develop self-awareness about your strengths and growth areas

Techniques: Set weekly improvement goals, track your study effectiveness, seek regular feedback, and reflect on your learning process.

Example: Patricia improved her GPA from 3.0 to 3.8 over two years by implementing small, consistent improvements to her study habits and learning strategies."

[PROFESSIONAL - 2 minutes]
"In your career, continuous improvement helps you:
- Advance steadily through skill development and performance enhancement
- Stay competitive and relevant in rapidly changing job markets
- Build a reputation as someone who grows and adapts

Techniques: Set professional development goals, seek regular feedback, track skill development, and invest in continuous learning.

Example: Marcus went from entry-level analyst to director in five years by consistently improving his skills and taking on progressively challenging assignments."

[PERSONAL - 1 minute]
"In personal life, continuous improvement helps you:
- Develop better relationships, health habits, and life satisfaction
- Achieve long-term goals through consistent small actions
- Model growth mindset for family and friends

Techniques: Set personal growth goals, track habits, practice self-reflection, and celebrate progress regularly.

Example: Rachel transformed her health, relationships, and career satisfaction by implementing a simple daily improvement system focused on small, consistent actions."

[CALL TO ACTION - 30 seconds]
"Ready to transform your life through continuous improvement? Start by identifying one small improvement you can make today and commit to tracking it for one week. Small steps lead to extraordinary results!"`
    },
    quiz: {
      title: "Test Your Continuous Improvement Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the most effective approach to sustainable personal improvement?",
          options: [
            "Make dramatic changes all at once",
            "Focus on small, consistent improvements that build over time",
            "Wait until you have perfect conditions",
            "Try to improve everything simultaneously"
          ],
          correct: 1,
          explanation: "Sustainable improvement comes from small, consistent changes that compound over time."
        },
        {
          id: 2,
          question: "How do you maintain motivation for continuous improvement when progress feels slow?",
          options: [
            "Give up and try something else",
            "Track small wins, celebrate progress, and trust the compounding effect",
            "Increase the intensity dramatically",
            "Compare yourself to others constantly"
          ],
          correct: 1,
          explanation: "Sustainable motivation comes from recognizing and celebrating incremental progress."
        },
        {
          id: 3,
          question: "What's the key to building improvement habits that stick?",
          options: [
            "Rely on willpower and motivation",
            "Start small, attach to existing routines, and track consistently",
            "Make dramatic lifestyle changes",
            "Wait for the perfect time to start"
          ],
          correct: 1,
          explanation: "Sustainable habits are built through small starts, routine attachment, and consistent tracking."
        },
        {
          id: 4,
          question: "How often should you reflect on and adjust your improvement strategies?",
          options: [
            "Never - stick to the original plan",
            "Weekly or monthly to assess progress and make necessary adjustments",
            "Only when things go wrong",
            "Daily to make constant changes"
          ],
          correct: 1,
          explanation: "Regular reflection allows for course correction while maintaining consistency."
        },
        {
          id: 5,
          question: "What's the best way to handle setbacks in your improvement journey?",
          options: [
            "Give up and start over later",
            "Analyze what happened, learn from it, and get back on track quickly",
            "Dramatically increase your efforts",
            "Ignore the setback and pretend it didn't happen"
          ],
          correct: 1,
          explanation: "Resilient improvement involves learning from setbacks and quickly returning to consistent practice."
        }
      ]
    },
    challenge: {
      title: "Design Your Personal Improvement System",
      description: "Create a sustainable system for continuous personal and professional growth",
      instructions: [
        "Identify 2-3 key areas where you want to improve (personal, academic, or professional)",
        "For each area, define one small daily or weekly practice that will drive improvement",
        "Create a simple tracking system to monitor your consistency and progress",
        "Set up a weekly reflection process to assess progress and make adjustments",
        "Implement your system for 2 weeks and track both consistency and outcomes",
        "Refine your system based on what works best for your lifestyle and goals"
      ],
      successCriteria: [
        "Defined clear improvement areas with specific, measurable practices",
        "Created a realistic tracking system that you can maintain consistently",
        "Maintained 80%+ consistency with your improvement practices for 2 weeks",
        "Conducted weekly reflections and made thoughtful adjustments",
        "Demonstrated measurable progress in at least one improvement area"
      ]
    },
    feedback: {
      strengths: ["You have good self-awareness and genuine desire for growth"],
      improvements: ["Focus on consistency over intensity and celebrate small wins more regularly"],
      nextSteps: ["Expand your improvement system to include one new area of growth"]
    },
    badge: {
      name: "Continuous Improver",
      emoji: "📈",
      description: "Built sustainable systems for lifelong personal and professional growth"
    },
    shareMessage: "Every day I'm getting better! Just built my personal improvement system! 📈 #ContinuousImprovement #PersonalGrowth"
  }
];

export const module2Assessment = {
  id: 'module2-assessment',
  title: "Adaptive Learning & Lifelong Learning Skills Final Assessment",
  description: 'Comprehensive test covering all adaptive learning and lifelong learning skills',
  duration: 60, // minutes
  questions: [
    {
      id: 1,
      question: "You're struggling with a new subject that requires different thinking than your previous courses. What's the most adaptive approach?",
      options: [
        "Use the same study methods that worked before",
        "Experiment with different learning strategies and adjust based on what works for this specific content",
        "Give up and focus on easier subjects",
        "Wait for someone to teach you the right way"
      ],
      correct: 1,
      explanation: "Adaptive learning requires adjusting strategies based on the specific demands of new content and contexts."
    },
    {
      id: 2,
      question: "How do you build a memory palace for professional information like client names and project details?",
      options: [
        "Try to memorize everything through repetition",
        "Choose a familiar location, assign information to specific spots, and create vivid associations",
        "Write everything down and refer to notes constantly",
        "Hope you'll remember through regular exposure"
      ],
      correct: 1,
      explanation: "Memory palaces use spatial memory and vivid associations to create powerful recall systems."
    },
    {
      id: 3,
      question: "You're overwhelmed with information from multiple sources at work. What's the best processing strategy?",
      options: [
        "Try to read everything completely",
        "Create filters to prioritize information, use active reading for key items, and synthesize insights",
        "Ignore most information to avoid overload",
        "Ask others to summarize everything for you"
      ],
      correct: 1,
      explanation: "Effective information processing requires strategic filtering, active reading, and synthesis skills."
    },
    {
      id: 4,
      question: "How do you transfer problem-solving skills from mathematics to improve your performance in economics?",
      options: [
        "Use mathematical formulas in economics",
        "Apply logical reasoning patterns and systematic analysis approaches from math to economic problems",
        "Study both subjects completely separately",
        "Focus only on memorizing economic theories"
      ],
      correct: 1,
      explanation: "Skill transfer involves applying underlying thinking patterns and approaches across different domains."
    },
    {
      id: 5,
      question: "Your industry is rapidly changing with new technologies. How do you develop learning agility?",
      options: [
        "Resist change and stick to familiar methods",
        "Embrace challenges, experiment with new approaches, and actively seek feedback",
        "Wait for formal training on new technologies",
        "Avoid roles that require learning new skills"
      ],
      correct: 1,
      explanation: "Learning agility requires embracing change, rapid experimentation, and continuous feedback integration."
    },
    {
      id: 6,
      question: "What's the key to maintaining continuous improvement in your personal and professional development?",
      options: [
        "Make dramatic changes all at once",
        "Focus on small, consistent improvements with regular tracking and reflection",
        "Only work on improvement when motivated",
        "Copy what successful people do exactly"
      ],
      correct: 1,
      explanation: "Sustainable improvement comes from consistent small changes, tracking progress, and regular reflection."
    },
    {
      id: 7,
      question: "How do you adapt your learning strategy when switching from a theoretical course to a hands-on lab class?",
      options: [
        "Use the same study approach for both",
        "Shift from reading-focused to practice-focused learning with more hands-on experimentation",
        "Only focus on the theoretical background",
        "Avoid the hands-on components"
      ],
      correct: 1,
      explanation: "Different learning contexts require adapted strategies - theoretical vs. practical learning approaches."
    },
    {
      id: 8,
      question: "You need to remember a complex procedure for a new job. What's the most effective memory approach?",
      options: [
        "Read the manual repeatedly",
        "Break the procedure into chunks, create mnemonics, and practice active recall",
        "Ask colleagues to remind you each time",
        "Hope you'll learn through repetition"
      ],
      correct: 1,
      explanation: "Complex procedures are best remembered through chunking, mnemonics, and active recall practice."
    },
    {
      id: 9,
      question: "How do you synthesize information from multiple research sources for a comprehensive analysis?",
      options: [
        "Use only the most recent source",
        "Identify patterns, contradictions, and gaps across sources to create integrated insights",
        "Present each source separately without connection",
        "Copy the best parts from each source"
      ],
      correct: 1,
      explanation: "Effective synthesis requires analyzing relationships between sources and creating integrated understanding."
    },
    {
      id: 10,
      question: "What's the best approach when you encounter a setback in your learning or improvement goals?",
      options: [
        "Give up and try something completely different",
        "Analyze what happened, extract lessons, adjust your approach, and continue with renewed focus",
        "Increase the intensity dramatically",
        "Ignore the setback and continue exactly as before"
      ],
      correct: 1,
      explanation: "Resilient learning involves analyzing setbacks, extracting lessons, and making thoughtful adjustments."
    }
  ],
  sections: [
    {
      name: "Learning Strategies",
      questions: 2,
      context: "Adaptive approaches to different types of content and contexts"
    },
    {
      name: "Memory Techniques",
      questions: 2,
      context: "Professional memory systems and retention strategies"
    },
    {
      name: "Information Processing",
      questions: 2,
      context: "Managing information overload and extracting insights"
    },
    {
      name: "Skill Transfer",
      questions: 1,
      context: "Applying skills across different domains and contexts"
    },
    {
      name: "Learning Agility",
      questions: 1,
      context: "Rapid adaptation and learning in changing environments"
    },
    {
      name: "Continuous Improvement",
      questions: 2,
      context: "Sustainable systems for lifelong learning and growth"
    }
  ],
  practicalChallenge: {
    title: "Design and Implement a Personal Learning System",
    duration: 10, // minutes
    requirements: [
      "Identify a challenging skill or subject you want to master",
      "Design an adaptive learning plan using multiple strategies from this module",
      "Create a memory system for key information retention",
      "Develop an information processing workflow",
      "Build in continuous improvement and progress tracking"
    ]
  },
  scoring: {
    quizQuestions: 100, // points (10 questions × 10 points each)
    practicalPresentation: 0, // points (optional)
    totalPossible: 100
  },
  gradeLevels: [
    { range: "90-100", grade: "Adaptive Learning Master", description: "Excellent" },
    { range: "80-89", grade: "Adaptive Learning Expert", description: "Very Good" },
    { range: "70-79", grade: "Adaptive Learning Proficient", description: "Good" },
    { range: "60-69", grade: "Adaptive Learning Developing", description: "Needs Improvement" },
    { range: "0-59", grade: "Adaptive Learning Beginner", description: "Requires Additional Practice" }
  ],
  gradingScale: {
    excellent: { 
      min: 90, 
      max: 100, 
      message: "Outstanding! You've mastered adaptive learning skills and are ready to excel in any learning environment.", 
      xpReward: 100 
    },
    good: { 
      min: 80, 
      max: 89, 
      message: "Great job! You have strong adaptive learning skills with room for continued growth.", 
      xpReward: 75 
    },
    satisfactory: { 
      min: 70, 
      max: 79, 
      message: "Good foundation! Keep practicing to strengthen your adaptive learning skills.", 
      xpReward: 50 
    },
    needsImprovement: { 
      min: 0, 
      max: 69, 
      message: "Keep learning! Review the module content and practice these skills in real-world situations.", 
      xpReward: 25 
    }
  }
};

// Local Storage Helper Functions
export const saveModuleProgress = (progress: ModuleProgress): void => {
  localStorage.setItem('module2Progress', JSON.stringify(progress));
};

export const loadModuleProgress = (): ModuleProgress | null => {
  const stored = localStorage.getItem('module2Progress');
  return stored ? JSON.parse(stored) : null;
};

export const updateSubtopicProgress = (subtopicId: string, score: number, response: string): void => {
  const progress = loadModuleProgress() || {
    moduleId: 'adaptive-learning',
    currentSubtopic: 1,
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
  progress.quizScores[subtopicId] = score;
  progress.challengeResponses[subtopicId] = response;
  
  if (!progress.completedSubtopics.includes(parseInt(subtopicId.split('-')[1]))) {
    progress.completedSubtopics.push(parseInt(subtopicId.split('-')[1]));
  }
  
  progress.totalXP += score * 10; // 10 XP per quiz point
  
  // Update success streak
  const today = new Date().toDateString();
  const lastStreakDate = new Date(progress.lastStreakDate || '').toDateString();
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
  
  if (score >= 3) { // Success threshold: 3+ out of 5 correct
    if (lastStreakDate === yesterday || progress.successStreak === 0) {
      // Continue or start streak
      progress.successStreak += 1;
      progress.highestStreak = Math.max(progress.successStreak, progress.highestStreak);
    } else if (lastStreakDate !== today) {
      // Reset streak if gap in days
      progress.successStreak = 1;
    }
    progress.lastStreakDate = new Date().toISOString();
  } else if (score < 3) {
    // Break streak on poor performance
    progress.successStreak = 0;
  }
  
  progress.lastAccessed = new Date().toISOString();
  
  saveModuleProgress(progress);
};

export const generatePersonalizedFeedback = (progress: ModuleProgress): string => {
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  // Analyze quiz scores
  Object.entries(progress.quizScores).forEach(([subtopic, score]) => {
    if (score >= 8) {
      strengths.push(subtopic.replace('-', ' '));
    } else {
      improvements.push(`${subtopic.replace('-', ' ')} - Focus on key concepts`);
    }
  });
  
  return `Strengths: ${strengths.join(', ')}. Areas for improvement: ${improvements.join(', ')}.`;
};
