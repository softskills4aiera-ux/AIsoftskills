// Module 5: Design Thinking (Creativity to Solve Problems) Data Structure
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

export const module5Subtopics: SubtopicData[] = [
  {
    id: 'empathy',
    title: 'Empathy',
    emoji: '❤️',
    context: 'academic',
    discover: {
      scenario: "You're designing a mobile app for elderly users, but you're 20 years old and have no idea what challenges they face. Your initial design is too complex and uses small text. How do you truly understand your users' needs and create solutions that actually help them?",
      problemExplanation: [
        "Assumption Bias: Designing based on your own experience instead of user needs",
        "Lack of User Research: Not understanding the target audience's real challenges",
        "Solution-First Thinking: Jumping to solutions before understanding the problem",
        "Limited Perspective: Not considering different abilities, backgrounds, and contexts"
      ],
      solutionApproach: [
        "User Research: Interviews, observations, and surveys to understand real needs",
        "Empathy Mapping: Visualizing user thoughts, feelings, and behaviors",
        "Persona Development: Creating detailed user profiles based on research",
        "Journey Mapping: Understanding the complete user experience"
      ]
    },
    video: {
      title: "Master Empathy for Better Solutions",
      duration: 5,
      content: [
        "User Research: How to conduct interviews and observations",
        "Empathy Mapping: Visualizing user thoughts and feelings",
        "Persona Development: Creating detailed user profiles",
        "Journey Mapping: Understanding complete user experiences",
        "Bias Recognition: Identifying and overcoming design assumptions"
      ],
      script: `[HOOK - 30 seconds]
"Great design starts with empathy. Today, I'll show you how to truly understand your users and create solutions that actually help them in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, empathy helps you:
- Design better projects by understanding your audience's needs
- Conduct effective research by connecting with participants
- Create presentations that resonate with your professors and peers

Techniques: Conduct user interviews, create empathy maps, develop personas based on research.

Example: Sarah designed a study app that helped 80% more students because she interviewed 20 students first to understand their real study challenges."

[PROFESSIONAL - 2 minutes]
"In your career, empathy helps you:
- Design products that users actually want and need
- Build better relationships with clients and colleagues
- Create solutions that solve real business problems

Techniques: User research, customer journey mapping, stakeholder interviews, usability testing.

Example: Mike's product design increased user satisfaction by 60% because he spent time understanding customer pain points through empathy mapping."

[PERSONAL - 1 minute]
"In personal life, empathy helps you:
- Understand family and friends' perspectives better
- Resolve conflicts by seeing different viewpoints
- Build stronger relationships through understanding

Techniques: Active listening, perspective-taking, asking open-ended questions, observing non-verbal cues.

Example: Lisa improved her relationship with her parents by using empathy mapping to understand their concerns about her career choices."

[CALL TO ACTION - 30 seconds]
"Ready to design with empathy? Start by interviewing one person about a problem they face. Remember, great solutions come from understanding, not assuming. Begin today!"`
    },
    quiz: {
      title: "Test Your Empathy Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the first step in empathy-driven design?",
          options: [
            "Start designing solutions",
            "Conduct user research to understand needs",
            "Make assumptions based on your experience",
            "Copy successful designs"
          ],
          correct: 1,
          explanation: "Always start with user research to understand real needs before designing solutions."
        },
        {
          id: 2,
          question: "What is an empathy map used for?",
          options: [
            "Creating visual designs",
            "Understanding user thoughts, feelings, and behaviors",
            "Testing prototypes",
            "Managing project timelines"
          ],
          correct: 1,
          explanation: "Empathy maps help visualize what users think, feel, see, hear, say, and do."
        },
        {
          id: 3,
          question: "How do you overcome assumption bias in design?",
          options: [
            "Trust your instincts",
            "Conduct user research and validate assumptions",
            "Follow industry best practices",
            "Use your own experience"
          ],
          correct: 1,
          explanation: "User research and validation help overcome bias and ensure solutions meet real needs."
        },
        {
          id: 4,
          question: "What makes a good user persona?",
          options: [
            "Based on assumptions",
            "Detailed, research-based profile with goals and pain points",
            "Generic demographic information",
            "Your ideal user"
          ],
          correct: 1,
          explanation: "Good personas are detailed, research-based profiles that include goals, pain points, and behaviors."
        },
        {
          id: 5,
          question: "Why is empathy important in personal relationships?",
          options: [
            "It's not important",
            "It helps understand different perspectives and build stronger connections",
            "It makes you more popular",
            "It's only useful in professional settings"
          ],
          correct: 1,
          explanation: "Empathy helps understand different perspectives and builds stronger, more meaningful relationships."
        }
      ]
    },
    challenge: {
      title: "Empathy Mapping Challenge",
      description: "Create an empathy map for a specific user group facing a real problem",
      instructions: [
        "Choose a user group: Select a specific group (students, elderly, parents, etc.)",
        "Identify a problem: Find a real challenge this group faces",
        "Conduct research: Interview 2-3 people from this group",
        "Create empathy map: Map what they think, feel, see, hear, say, and do",
        "Identify insights: Find key insights and opportunities for solutions"
      ],
      successCriteria: [
        "Conducted at least 2 user interviews",
        "Created a detailed empathy map with all sections filled",
        "Identified 3+ key insights about user needs",
        "Documented assumptions that were proven wrong",
        "Generated 2+ potential solution opportunities"
      ]
    },
    feedback: {
      strengths: [
        "Strong user research skills and interview techniques",
        "Excellent empathy mapping with detailed insights",
        "Good identification of user pain points and needs",
        "Creative solution opportunities based on research"
      ],
      improvements: [
        "Consider conducting more diverse user interviews",
        "Dive deeper into emotional aspects of user experience",
        "Validate insights with additional research methods",
        "Connect insights more directly to solution opportunities"
      ],
      nextSteps: [
        "Practice empathy mapping with different user groups",
        "Learn advanced user research techniques",
        "Apply empathy insights to ideation process",
        "Develop skills in user journey mapping"
      ]
    },
    badge: {
      name: "Empathy Master",
      emoji: "❤️",
      description: "Demonstrated deep understanding of user needs through empathy mapping"
    },
    shareMessage: "Just mastered empathy-driven design! 🎉 Learned to truly understand users through research and empathy mapping. Ready to create solutions that actually help people! #DesignThinking #Empathy #UserResearch"
  },
  {
    id: 'ideation',
    title: 'Ideation',
    emoji: '💡',
    context: 'professional',
    discover: {
      scenario: "Your team needs to come up with innovative solutions for reducing food waste in college cafeterias. The usual brainstorming session produces the same old ideas: better labeling, smaller portions, donation programs. How do you break out of conventional thinking and generate truly creative solutions?",
      problemExplanation: [
        "Conventional Thinking: Sticking to obvious, safe solutions that everyone suggests",
        "Limited Creativity: Not exploring wild, unconventional ideas that could lead to breakthroughs",
        "Groupthink: Team members conforming to the first few ideas presented",
        "Solution Constraints: Self-imposed limitations on what's 'feasible' or 'realistic'"
      ],
      solutionApproach: [
        "Divergent Thinking: Generating many different ideas without judgment",
        "Creative Techniques: Brainstorming, mind mapping, SCAMPER, and other ideation methods",
        "Wild Ideas: Encouraging unconventional, even impossible-sounding solutions",
        "Idea Building: Combining and building upon others' ideas to create new possibilities"
      ]
    },
    video: {
      title: "Unlock Creative Ideation Techniques",
      duration: 5,
      content: [
        "Brainstorming Methods: Traditional and alternative brainstorming techniques",
        "Creative Constraints: Using limitations to spark innovation",
        "Idea Building: Combining and evolving ideas through collaboration",
        "Wild Ideas: Encouraging unconventional thinking for breakthrough solutions",
        "Idea Selection: Choosing the best ideas for further development"
      ],
      script: `[HOOK - 30 seconds]
"Stuck with the same old ideas? Today, I'll show you how to unlock your creative potential and generate breakthrough solutions in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, ideation helps you:
- Generate creative solutions for projects and assignments
- Think outside the box for research and presentations
- Collaborate effectively in group brainstorming sessions

Techniques: Use mind mapping, SCAMPER method, and 'yes, and...' thinking. Set quantity goals before quality.

Example: Alex's group generated 50+ ideas for their sustainability project using rapid ideation, leading to an innovative campus recycling solution."

[PROFESSIONAL - 2 minutes]
"In your career, ideation helps you:
- Develop innovative products and services
- Solve complex business problems creatively
- Lead effective brainstorming sessions with teams

Techniques: Use design thinking methods, encourage wild ideas, build on others' concepts, use creative constraints.

Example: Sarah's team developed a breakthrough customer service solution by encouraging 'impossible' ideas that led to a simple, effective innovation."

[PERSONAL - 1 minute]
"In personal life, ideation helps you:
- Find creative solutions to everyday problems
- Plan memorable experiences and activities
- Approach challenges with fresh perspectives

Techniques: Use 'what if' thinking, challenge assumptions, combine unrelated concepts, think in opposites.

Example: Tom planned an amazing surprise party by using ideation techniques to combine multiple creative elements."

[CALL TO ACTION - 30 seconds]
"Ready to unlock your creativity? Start your next brainstorming session with a quantity goal - aim for 20+ ideas before judging any. Remember, wild ideas often lead to breakthrough solutions. Begin today!"`
    },
    quiz: {
      title: "Test Your Ideation Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the key principle of effective brainstorming?",
          options: [
            "Focus on quality over quantity",
            "Generate many ideas without judgment first",
            "Only suggest realistic ideas",
            "Let the most experienced person lead"
          ],
          correct: 1,
          explanation: "Effective brainstorming focuses on quantity first - generate many ideas without judgment, then evaluate."
        },
        {
          id: 2,
          question: "What does SCAMPER stand for in creative ideation?",
          options: [
            "A brainstorming technique",
            "Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse",
            "A project management method",
            "A design software tool"
          ],
          correct: 1,
          explanation: "SCAMPER is a creative technique using Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse."
        },
        {
          id: 3,
          question: "Why are 'wild ideas' important in ideation?",
          options: [
            "They're always the best solutions",
            "They break conventional thinking and can lead to breakthrough innovations",
            "They're easier to implement",
            "They impress clients"
          ],
          correct: 1,
          explanation: "Wild ideas break conventional thinking patterns and often lead to breakthrough innovations."
        },
        {
          id: 4,
          question: "What is 'yes, and...' thinking in ideation?",
          options: [
            "Agreeing with every idea",
            "Building on others' ideas instead of criticizing them",
            "Saying yes to everything",
            "A negotiation technique"
          ],
          correct: 1,
          explanation: "'Yes, and...' thinking builds on others' ideas rather than criticizing, fostering creative collaboration."
        },
        {
          id: 5,
          question: "How do creative constraints help ideation?",
          options: [
            "They limit creativity",
            "They provide focus and can spark innovative solutions",
            "They make ideation easier",
            "They're not useful in ideation"
          ],
          correct: 1,
          explanation: "Creative constraints provide focus and can actually spark more innovative solutions by forcing creative thinking."
        }
      ]
    },
    challenge: {
      title: "Creative Ideation Challenge",
      description: "Generate 20+ creative solutions for a real problem using multiple ideation techniques",
      instructions: [
        "Choose a problem: Select a real challenge you or others face",
        "Set constraints: Define time, budget, or other limitations",
        "Use multiple techniques: Try brainstorming, SCAMPER, mind mapping",
        "Generate quantity: Aim for 20+ different ideas",
        "Select top ideas: Choose 3-5 most promising solutions for further development"
      ],
      successCriteria: [
        "Generated 20+ different ideas",
        "Used at least 2 different ideation techniques",
        "Included some 'wild' or unconventional ideas",
        "Built on and combined ideas creatively",
        "Selected 3-5 promising solutions with clear reasoning"
      ]
    },
    feedback: {
      strengths: [
        "Excellent quantity of creative ideas generated",
        "Strong use of multiple ideation techniques",
        "Good balance of conventional and wild ideas",
        "Creative idea building and combination"
      ],
      improvements: [
        "Consider more diverse ideation techniques",
        "Push further with wild and unconventional ideas",
        "Better documentation of idea evolution process",
        "Stronger connection between ideas and problem context"
      ],
      nextSteps: [
        "Practice different ideation techniques regularly",
        "Learn advanced creative thinking methods",
        "Apply ideation skills to real projects",
        "Develop skills in idea evaluation and selection"
      ]
    },
    badge: {
      name: "Ideation Innovator",
      emoji: "💡",
      description: "Demonstrated exceptional creative thinking and idea generation skills"
    },
    shareMessage: "Just unlocked my creative potential! 🎉 Generated 20+ innovative ideas using multiple ideation techniques. Ready to think outside the box and create breakthrough solutions! #DesignThinking #Ideation #Creativity"
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    emoji: '🔧',
    context: 'personal',
    discover: {
      scenario: "You have a great idea for a mobile app that helps students find study groups, but you're not sure if people will actually use it. You could spend months building the full app, or you could create a simple prototype to test your concept first. How do you quickly build and test your ideas before investing too much time and resources?",
      problemExplanation: [
        "Over-Engineering: Spending too much time building perfect solutions before validating the concept",
        "Fear of Failure: Avoiding testing because you're afraid the idea won't work",
        "Resource Waste: Investing significant time and money in unproven solutions",
        "Late Feedback: Only discovering problems after building the complete solution"
      ],
      solutionApproach: [
        "Rapid Prototyping: Building quick, low-fidelity versions to test concepts",
        "Fail Fast: Testing early and often to identify problems quickly",
        "Iterative Development: Building, testing, learning, and improving in cycles",
        "User Feedback: Getting real user input on prototypes before final development"
      ]
    },
    video: {
      title: "Build and Test Your Ideas",
      duration: 5,
      content: [
        "Prototype Types: Paper, digital, and physical prototypes for different purposes",
        "Rapid Prototyping: Quick methods to test concepts and gather feedback",
        "User Testing: How to test prototypes with real users effectively",
        "Iteration Process: Building, testing, learning, and improving cycles",
        "Prototype Fidelity: Choosing the right level of detail for your testing goals"
      ],
      script: `[HOOK - 30 seconds]
"Don't build the perfect solution - build a prototype first! Today, I'll show you how to quickly test your ideas and avoid costly mistakes in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, prototyping helps you:
- Test project ideas before committing to full development
- Get feedback from professors and peers early in the process
- Learn through building and iterating on concepts

Techniques: Use paper prototypes, simple mockups, and rapid testing methods. Focus on testing core concepts, not perfect execution.

Example: Lisa tested her research presentation with a simple paper prototype, getting feedback that improved her final presentation by 40%."

[PROFESSIONAL - 2 minutes]
"In your career, prototyping helps you:
- Validate business ideas before major investments
- Test product concepts with real customers
- Reduce development risks and costs

Techniques: Use wireframes, mockups, and minimum viable products. Test core value propositions, not full features.

Example: Mike's team saved 6 months of development by prototyping their app concept first, discovering key usability issues early."

[PERSONAL - 1 minute]
"In personal life, prototyping helps you:
- Test new habits and lifestyle changes before committing fully
- Try out new hobbies and activities with minimal investment
- Plan events and experiences by testing ideas first

Techniques: Start small, test with friends and family, iterate based on feedback, scale what works.

Example: Sarah tested her new morning routine with a 3-day prototype, adjusting it based on what actually worked for her schedule."

[CALL TO ACTION - 30 seconds]
"Ready to prototype your next idea? Start with the simplest version possible - even a sketch on paper. Remember, the goal is to learn, not to build the perfect solution. Begin today!"`
    },
    quiz: {
      title: "Test Your Prototyping Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the main purpose of prototyping?",
          options: [
            "To build the final solution",
            "To test concepts and gather feedback before full development",
            "To impress stakeholders",
            "To save money on development"
          ],
          correct: 1,
          explanation: "Prototyping is primarily for testing concepts and gathering feedback before investing in full development."
        },
        {
          id: 2,
          question: "What is 'rapid prototyping'?",
          options: [
            "Building prototypes very quickly",
            "Creating quick, low-fidelity versions to test concepts fast",
            "Using expensive tools",
            "Skipping the testing phase"
          ],
          correct: 1,
          explanation: "Rapid prototyping focuses on creating quick, low-fidelity versions to test concepts and gather feedback fast."
        },
        {
          id: 3,
          question: "Why is 'failing fast' important in prototyping?",
          options: [
            "It's not important",
            "It helps identify problems early and reduces wasted resources",
            "It makes you look smart",
            "It's required for good design"
          ],
          correct: 1,
          explanation: "Failing fast helps identify problems early, reducing wasted time and resources on unworkable solutions."
        },
        {
          id: 4,
          question: "What should you focus on when testing prototypes?",
          options: [
            "Perfect execution and design",
            "Core concepts and user experience",
            "Technical implementation",
            "Marketing and sales"
          ],
          correct: 1,
          explanation: "Prototype testing should focus on core concepts and user experience, not perfect execution."
        },
        {
          id: 5,
          question: "How do you choose the right prototype fidelity?",
          options: [
            "Always use high fidelity",
            "Match the fidelity to your testing goals and available resources",
            "Use the lowest fidelity possible",
            "Let the client decide"
          ],
          correct: 1,
          explanation: "Choose prototype fidelity based on your testing goals and available resources - not too detailed, not too simple."
        }
      ]
    },
    challenge: {
      title: "Rapid Prototyping Challenge",
      description: "Create and test a prototype for a real problem using rapid prototyping methods",
      instructions: [
        "Choose a problem: Select a real challenge you or others face",
        "Define the concept: Identify the core solution you want to test",
        "Create a prototype: Build a quick, low-fidelity version (paper, digital, or physical)",
        "Test with users: Get feedback from 2-3 people who face this problem",
        "Iterate: Improve the prototype based on feedback and test again"
      ],
      successCriteria: [
        "Created a functional prototype in under 2 hours",
        "Tested with at least 2 real users",
        "Gathered specific feedback on core concept",
        "Made at least one improvement based on feedback",
        "Documented learnings and next steps"
      ]
    },
    feedback: {
      strengths: [
        "Excellent rapid prototyping skills and quick execution",
        "Strong user testing approach and feedback gathering",
        "Good iteration process based on user input",
        "Clear documentation of learnings and improvements"
      ],
      improvements: [
        "Consider testing with more diverse user groups",
        "Focus more on testing core value propositions",
        "Improve feedback collection and analysis methods",
        "Better documentation of prototype evolution"
      ],
      nextSteps: [
        "Practice different prototyping methods and tools",
        "Develop skills in user testing and feedback analysis",
        "Apply prototyping to real projects and challenges",
        "Learn advanced prototyping and testing techniques"
      ]
    },
    badge: {
      name: "Prototype Builder",
      emoji: "🔧",
      description: "Demonstrated excellent rapid prototyping and user testing skills"
    },
    shareMessage: "Just mastered rapid prototyping! 🎉 Built and tested a prototype in record time, gathering valuable user feedback. Ready to test ideas fast and avoid costly mistakes! #DesignThinking #Prototyping #UserTesting"
  },
  {
    id: 'testing',
    title: 'Testing',
    emoji: '🧪',
    context: 'academic',
    discover: {
      scenario: "You've built a prototype of your study app and you're excited to show it to users. But when you test it with real students, they're confused by the interface, can't find key features, and give up after 2 minutes. How do you conduct effective user testing to understand what's really happening and improve your solution?",
      problemExplanation: [
        "Assumption-Based Design: Building solutions based on your assumptions rather than real user behavior",
        "Poor Testing Methods: Asking leading questions or not observing actual user behavior",
        "Ignoring Feedback: Dismissing negative feedback or not acting on user insights",
        "Testing Too Late: Only testing after building the complete solution"
      ],
      solutionApproach: [
        "User-Centered Testing: Observing real users interacting with your solution",
        "Effective Testing Methods: Think-aloud protocols, task-based testing, and observation",
        "Data-Driven Decisions: Using testing results to guide design improvements",
        "Continuous Testing: Testing early, often, and throughout the development process"
      ]
    },
    video: {
      title: "Validate Ideas with Real Users",
      duration: 5,
      content: [
        "User Testing Methods: Think-aloud protocols, task-based testing, and observation techniques",
        "Testing Planning: Setting clear objectives and success criteria for user tests",
        "Data Collection: Gathering meaningful feedback and behavioral insights",
        "Analysis and Action: Turning test results into actionable design improvements",
        "Continuous Testing: Building testing into the entire design process"
      ],
      script: `[HOOK - 30 seconds]
"Your prototype looks perfect to you, but will it work for real users? Today, I'll show you how to conduct effective user testing and validate your ideas in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, testing helps you:
- Validate project ideas with real users before final submission
- Get honest feedback from professors and peers on your work
- Learn through observing how others interact with your solutions

Techniques: Use think-aloud protocols, task-based testing, and observation. Focus on behavior, not opinions.

Example: Alex tested his research presentation with 5 classmates, discovering that his complex charts confused everyone - leading to a much clearer final version."

[PROFESSIONAL - 2 minutes]
"In your career, testing helps you:
- Validate product concepts with real customers before launch
- Identify usability issues that could hurt business success
- Make data-driven design decisions based on user behavior

Techniques: Use A/B testing, usability testing, and user interviews. Test core user journeys, not just features.

Example: Sarah's team increased user engagement by 40% after testing revealed that users couldn't find the main feature - leading to a complete navigation redesign."

[PERSONAL - 1 minute]
"In personal life, testing helps you:
- Try new approaches and get feedback from friends and family
- Validate lifestyle changes before committing fully
- Improve your communication and relationships through feedback

Techniques: Test with trusted people, observe reactions, ask for specific feedback, iterate based on results.

Example: Tom improved his cooking by testing new recipes with friends, learning which flavors and techniques actually worked for his audience."

[CALL TO ACTION - 30 seconds]
"Ready to test your next idea? Start by observing one person use your solution without any help. Remember, what users do is more important than what they say. Begin today!"`
    },
    quiz: {
      title: "Test Your Testing Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the most important thing to observe during user testing?",
          options: [
            "What users say they like",
            "How users actually behave and interact with your solution",
            "How long users spend testing",
            "What users think about the design"
          ],
          correct: 1,
          explanation: "Observing actual user behavior is more reliable than self-reported opinions or preferences."
        },
        {
          id: 2,
          question: "What is a 'think-aloud protocol' in user testing?",
          options: [
            "Asking users to think quietly",
            "Having users verbalize their thoughts while using your solution",
            "Testing in complete silence",
            "Asking users to think before speaking"
          ],
          correct: 1,
          explanation: "Think-aloud protocols involve users verbalizing their thoughts while interacting with your solution."
        },
        {
          id: 3,
          question: "When should you start testing your solution?",
          options: [
            "After building the complete solution",
            "As early as possible, even with rough prototypes",
            "Only when you're confident it works",
            "When you have a large budget"
          ],
          correct: 1,
          explanation: "Start testing as early as possible, even with rough prototypes, to catch issues before they become expensive to fix."
        },
        {
          id: 4,
          question: "What should you focus on when analyzing test results?",
          options: [
            "Positive feedback only",
            "Patterns in user behavior and common issues",
            "Individual user preferences",
            "Technical performance metrics"
          ],
          correct: 1,
          explanation: "Focus on patterns in user behavior and common issues rather than individual preferences or isolated feedback."
        },
        {
          id: 5,
          question: "How do you make testing actionable?",
          options: [
            "Ignore negative feedback",
            "Turn test insights into specific design improvements",
            "Test with more users",
            "Change everything based on one user's feedback"
          ],
          correct: 1,
          explanation: "Make testing actionable by turning insights into specific, prioritized design improvements."
        }
      ]
    },
    challenge: {
      title: "User Testing Challenge",
      description: "Conduct user testing on a real solution and turn insights into actionable improvements",
      instructions: [
        "Choose a solution: Select something you've created or use an existing product/service",
        "Plan your test: Define objectives, tasks, and success criteria",
        "Recruit users: Find 2-3 people who represent your target audience",
        "Conduct testing: Use think-aloud protocols and observe behavior",
        "Analyze results: Identify patterns and prioritize improvements"
      ],
      successCriteria: [
        "Tested with at least 2 real users",
        "Used think-aloud protocols effectively",
        "Identified 3+ specific usability issues",
        "Prioritized improvements based on impact and effort",
        "Created actionable next steps for improvement"
      ]
    },
    feedback: {
      strengths: [
        "Excellent user testing methodology and execution",
        "Strong observation skills and behavioral insights",
        "Good analysis of test results and pattern identification",
        "Clear prioritization of improvements and next steps"
      ],
      improvements: [
        "Consider testing with more diverse user groups",
        "Improve task design and testing scenarios",
        "Better documentation of testing process and results",
        "Stronger connection between insights and actionable improvements"
      ],
      nextSteps: [
        "Practice different user testing methods and techniques",
        "Develop skills in test planning and analysis",
        "Apply testing to real projects and solutions",
        "Learn advanced usability testing and research methods"
      ]
    },
    badge: {
      name: "User Testing Expert",
      emoji: "🧪",
      description: "Demonstrated excellent user testing skills and data-driven design approach"
    },
    shareMessage: "Just mastered user testing! 🎉 Conducted effective user tests and turned insights into actionable improvements. Ready to validate ideas with real users and make data-driven decisions! #DesignThinking #UserTesting #Validation"
  },
  {
    id: 'iteration',
    title: 'Iteration',
    emoji: '🔄',
    context: 'professional',
    discover: {
      scenario: "Your first version of the mobile app didn't work as expected - users found it confusing and only 20% completed the main task. Your team is discouraged and wants to start over completely. But you know that great solutions come from iteration, not perfection. How do you systematically improve your solution based on user feedback and testing results?",
      problemExplanation: [
        "Perfectionism: Expecting the first version to be perfect and getting discouraged by failures",
        "Starting Over: Abandoning solutions instead of improving them based on feedback",
        "Ignoring Data: Not using testing results and user feedback to guide improvements",
        "Lack of Process: No systematic approach to iteration and improvement"
      ],
      solutionApproach: [
        "Iterative Mindset: Embracing failure as learning and improvement opportunities",
        "Data-Driven Iteration: Using testing results and feedback to guide improvements",
        "Systematic Process: Following a structured approach to iteration and refinement",
        "Continuous Improvement: Building iteration into the entire development process"
      ]
    },
    video: {
      title: "Iterate Your Way to Success",
      duration: 5,
      content: [
        "Iteration Mindset: Embracing failure as learning and improvement opportunities",
        "Data-Driven Iteration: Using feedback and testing results to guide improvements",
        "Systematic Process: Following structured approaches to iteration and refinement",
        "Continuous Improvement: Building iteration into the entire development process",
        "Success Metrics: Measuring progress and improvement over time"
      ],
      script: `[HOOK - 30 seconds]
"Great solutions aren't built - they're iterated! Today, I'll show you how to systematically improve your ideas and turn failures into breakthroughs in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, iteration helps you:
- Improve projects and assignments based on feedback and testing
- Learn from mistakes and build better solutions over time
- Develop resilience and persistence in problem-solving

Techniques: Use feedback loops, A/B testing, and systematic improvement processes. Focus on learning, not perfection.

Example: Lisa improved her research paper from a C to an A by iterating based on professor feedback, making 4 rounds of improvements that strengthened her argument."

[PROFESSIONAL - 2 minutes]
"In your career, iteration helps you:
- Continuously improve products and services based on user feedback
- Build better solutions through systematic refinement
- Develop competitive advantages through rapid improvement cycles

Techniques: Use agile development, continuous deployment, and user feedback loops. Measure progress and iterate quickly.

Example: Mike's team increased user satisfaction by 60% through 8 iterations of their app, each based on real user testing and feedback."

[PERSONAL - 1 minute]
"In personal life, iteration helps you:
- Improve habits and lifestyle changes through trial and error
- Build better relationships through continuous learning and adjustment
- Develop skills and abilities through practice and refinement

Techniques: Set small improvement goals, track progress, adjust based on results, celebrate small wins.

Example: Sarah improved her fitness routine by iterating every 2 weeks, adjusting exercises and schedule based on what actually worked for her body and schedule."

[CALL TO ACTION - 30 seconds]
"Ready to iterate your way to success? Start by making one small improvement to something you're working on. Remember, progress beats perfection every time. Begin today!"`
    },
    quiz: {
      title: "Test Your Iteration Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the key mindset for successful iteration?",
          options: [
            "Expecting perfection on the first try",
            "Embracing failure as learning and improvement opportunities",
            "Avoiding mistakes at all costs",
            "Only making small changes"
          ],
          correct: 1,
          explanation: "Successful iteration requires embracing failure as learning opportunities and focusing on continuous improvement."
        },
        {
          id: 2,
          question: "What should guide your iteration process?",
          options: [
            "Your personal preferences",
            "Data, feedback, and testing results",
            "Industry best practices only",
            "What worked for others"
          ],
          correct: 1,
          explanation: "Iteration should be guided by data, feedback, and testing results rather than assumptions or preferences."
        },
        {
          id: 3,
          question: "How often should you iterate?",
          options: [
            "Only when something is completely broken",
            "Continuously, based on feedback and testing cycles",
            "Once per year",
            "When you have time"
          ],
          correct: 1,
          explanation: "Iteration should be continuous, based on regular feedback and testing cycles, not just when problems arise."
        },
        {
          id: 4,
          question: "What is the most important thing to measure during iteration?",
          options: [
            "How many changes you make",
            "Progress toward your goals and user needs",
            "How fast you can make changes",
            "How many features you add"
          ],
          correct: 1,
          explanation: "Measure progress toward your goals and user needs, not just the quantity or speed of changes."
        },
        {
          id: 5,
          question: "How do you know when to stop iterating?",
          options: [
            "When you run out of ideas",
            "When you've achieved your goals or reached diminishing returns",
            "When users stop complaining",
            "When you're tired of working on it"
          ],
          correct: 1,
          explanation: "Stop iterating when you've achieved your goals or when further improvements show diminishing returns."
        }
      ]
    },
    challenge: {
      title: "Iteration Challenge",
      description: "Systematically improve a solution through multiple iteration cycles based on feedback",
      instructions: [
        "Choose a solution: Select something you want to improve",
        "Set improvement goals: Define what success looks like",
        "Gather feedback: Get input from users, peers, or mentors",
        "Make improvements: Implement changes based on feedback",
        "Test and measure: Evaluate improvements and plan next iteration"
      ],
      successCriteria: [
        "Completed at least 3 iteration cycles",
        "Gathered feedback from multiple sources",
        "Made measurable improvements based on feedback",
        "Documented progress and learnings",
        "Created plan for continued iteration"
      ]
    },
    feedback: {
      strengths: [
        "Excellent iteration mindset and systematic approach",
        "Strong use of feedback and data to guide improvements",
        "Good documentation of progress and learnings",
        "Clear planning for continued iteration and improvement"
      ],
      improvements: [
        "Consider more diverse feedback sources",
        "Improve measurement and progress tracking",
        "Better documentation of iteration process",
        "Stronger connection between feedback and specific improvements"
      ],
      nextSteps: [
        "Practice different iteration methods and techniques",
        "Develop skills in feedback collection and analysis",
        "Apply iteration to real projects and challenges",
        "Learn advanced continuous improvement methodologies"
      ]
    },
    badge: {
      name: "Iteration Master",
      emoji: "🔄",
      description: "Demonstrated excellent iteration skills and continuous improvement mindset"
    },
    shareMessage: "Just mastered the art of iteration! 🎉 Systematically improved my solution through multiple cycles of feedback and refinement. Ready to iterate my way to breakthrough solutions! #DesignThinking #Iteration #ContinuousImprovement"
  },
  {
    id: 'user-centered-design',
    title: 'User-Centered Design',
    emoji: '👥',
    context: 'personal',
    discover: {
      scenario: "You're designing a new study app for college students, but you keep adding features that you think are cool - like AI-powered study recommendations and social challenges. However, when you test it with real students, they just want a simple way to track their study time and get reminders. How do you keep users at the center of your design decisions and avoid building features nobody wants?",
      problemExplanation: [
        "Feature Creep: Adding features based on what you think is cool, not what users need",
        "Assumption-Based Design: Making design decisions based on your preferences, not user research",
        "Ignoring User Feedback: Dismissing user needs in favor of your own ideas",
        "Lack of User Focus: Not keeping users at the center of design decisions"
      ],
      solutionApproach: [
        "User Research: Understanding real user needs through research and testing",
        "User-Centered Decisions: Making design choices based on user data, not assumptions",
        "Feature Prioritization: Focusing on features that solve real user problems",
        "Continuous User Input: Keeping users involved throughout the design process"
      ]
    },
    video: {
      title: "Design with Users in Mind",
      duration: 5,
      content: [
        "User Research: Understanding real user needs, goals, and pain points",
        "User-Centered Decisions: Making design choices based on user data and feedback",
        "Feature Prioritization: Focusing on features that solve real user problems",
        "Continuous User Input: Keeping users involved throughout the design process",
        "User Journey Mapping: Understanding the complete user experience"
      ],
      script: `[HOOK - 30 seconds]
"Great design isn't about what you think is cool - it's about what users actually need. Today, I'll show you how to keep users at the center of every design decision in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, user-centered design helps you:
- Create projects and presentations that resonate with your audience
- Design solutions that actually solve real problems for real people
- Build better relationships with professors and peers through understanding their needs

Techniques: Conduct user research, create user personas, map user journeys, test with real users.

Example: Alex designed a study group app that 90% of students actually used because he interviewed 50 students first to understand their real study challenges."

[PROFESSIONAL - 2 minutes]
"In your career, user-centered design helps you:
- Create products and services that customers actually want and use
- Build better business outcomes through user satisfaction and loyalty
- Make data-driven design decisions that reduce risk and increase success

Techniques: Use user research, A/B testing, user journey mapping, and continuous user feedback.

Example: Sarah's product design increased user retention by 70% because she focused on solving real user problems rather than adding cool features."

[PERSONAL - 1 minute]
"In personal life, user-centered design helps you:
- Create experiences and solutions that actually help the people you care about
- Build better relationships through understanding others' needs and perspectives
- Make decisions that consider the impact on others, not just yourself

Techniques: Practice empathy, ask for feedback, observe others' needs, consider different perspectives.

Example: Tom planned a family reunion that everyone loved because he asked each family member what they wanted instead of planning what he thought would be fun."

[CALL TO ACTION - 30 seconds]
"Ready to design with users in mind? Start your next project by interviewing one person about their needs. Remember, great design solves real problems for real people. Begin today!"`
    },
    quiz: {
      title: "Test Your User-Centered Design Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the core principle of user-centered design?",
          options: [
            "Making designs that look beautiful",
            "Keeping users at the center of all design decisions",
            "Following industry best practices",
            "Using the latest design trends"
          ],
          correct: 1,
          explanation: "User-centered design keeps users at the center of all design decisions, focusing on their needs and goals."
        },
        {
          id: 2,
          question: "How do you prioritize features in user-centered design?",
          options: [
            "Based on what you think is cool",
            "Based on what solves real user problems and needs",
            "Based on what competitors are doing",
            "Based on what's easiest to build"
          ],
          correct: 1,
          explanation: "Prioritize features based on what solves real user problems and needs, not personal preferences or trends."
        },
        {
          id: 3,
          question: "What is the most important source of design decisions?",
          options: [
            "Your personal experience",
            "User research, feedback, and behavioral data",
            "Industry best practices",
            "What worked for other companies"
          ],
          correct: 1,
          explanation: "User research, feedback, and behavioral data should be the primary source of design decisions."
        },
        {
          id: 4,
          question: "How do you avoid assumption-based design?",
          options: [
            "Trust your instincts",
            "Conduct user research and validate assumptions with real users",
            "Follow design trends",
            "Copy successful designs"
          ],
          correct: 1,
          explanation: "Conduct user research and validate assumptions with real users to avoid assumption-based design."
        },
        {
          id: 5,
          question: "What is the goal of user-centered design?",
          options: [
            "To create beautiful designs",
            "To create solutions that users actually want, need, and can use effectively",
            "To impress stakeholders",
            "To win design awards"
          ],
          correct: 1,
          explanation: "The goal is to create solutions that users actually want, need, and can use effectively."
        }
      ]
    },
    challenge: {
      title: "User-Centered Design Challenge",
      description: "Design a solution using user-centered design principles and validate with real users",
      instructions: [
        "Choose a problem: Select a real challenge that affects you or others",
        "Conduct user research: Interview 3-5 people who face this problem",
        "Create user personas: Develop detailed profiles based on your research",
        "Design a solution: Create a solution focused on real user needs",
        "Test with users: Validate your solution with real users and iterate"
      ],
      successCriteria: [
        "Conducted user research with at least 3 people",
        "Created detailed user personas based on research",
        "Designed solution focused on real user needs",
        "Tested solution with real users",
        "Iterated based on user feedback"
      ]
    },
    feedback: {
      strengths: [
        "Excellent user research and empathy skills",
        "Strong user-centered design approach and decision-making",
        "Good creation of user personas and journey mapping",
        "Clear focus on real user needs and problems"
      ],
      improvements: [
        "Consider more diverse user research methods",
        "Improve user persona development and validation",
        "Better documentation of user research process",
        "Stronger connection between research and design decisions"
      ],
      nextSteps: [
        "Practice different user research methods and techniques",
        "Develop skills in user persona creation and validation",
        "Apply user-centered design to real projects",
        "Learn advanced user experience research methods"
      ]
    },
    badge: {
      name: "User-Centered Designer",
      emoji: "👥",
      description: "Demonstrated excellent user-centered design skills and user research approach"
    },
    shareMessage: "Just mastered user-centered design! 🎉 Created solutions focused on real user needs through research and validation. Ready to design with users at the center of every decision! #DesignThinking #UserCenteredDesign #UserResearch"
  }
];

export const module5Assessment = {
  title: "Design Thinking Mastery Assessment",
  questions: [
    {
      id: 1,
      question: "What is the primary goal of the empathy phase in design thinking?",
      options: [
        "To create beautiful designs",
        "To understand user needs and perspectives",
        "To generate as many ideas as possible",
        "To test final solutions"
      ],
      correct: 1,
      explanation: "The empathy phase focuses on understanding user needs, motivations, and perspectives."
    },
    {
      id: 2,
      question: "Which tool helps visualize user thoughts, feelings, and behaviors?",
      options: [
        "Mood board",
        "Empathy map",
        "Wireframe",
        "Prototype"
      ],
      correct: 1,
      explanation: "Empathy maps help visualize what users think, feel, see, hear, say, and do."
    },
    {
      id: 3,
      question: "What is the main purpose of user personas?",
      options: [
        "To make designs look professional",
        "To create detailed, research-based user profiles for design decisions",
        "To impress clients",
        "To save time in the design process"
      ],
      correct: 1,
      explanation: "Personas help make design decisions based on detailed, research-based user profiles."
    },
    {
      id: 4,
      question: "How do you overcome assumption bias in design?",
      options: [
        "Trust your experience",
        "Conduct user research and validate assumptions",
        "Follow industry trends",
        "Use your intuition"
      ],
      correct: 1,
      explanation: "User research and validation help overcome bias and ensure solutions meet real needs."
    },
    {
      id: 5,
      question: "What makes empathy important in both professional and personal contexts?",
      options: [
        "It's only important professionally",
        "It helps understand different perspectives and build stronger relationships",
        "It makes you more creative",
        "It's required for good design"
      ],
      correct: 1,
      explanation: "Empathy helps understand different perspectives and builds stronger relationships in all contexts."
    }
  ]
};








