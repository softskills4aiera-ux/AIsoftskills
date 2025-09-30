// Module 6: Teamwork & Collaboration Data Structure
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

export const module6Subtopics: SubtopicData[] = [
  {
    id: 'team-dynamics',
    title: 'Team Dynamics',
    emoji: '👥',
    context: 'academic',
    discover: {
      scenario: "Your group project team has different personalities: one member is very quiet, another dominates discussions, and a third always arrives late. The project deadline is approaching, but you're struggling to work together effectively. How do you build better team dynamics and collaboration?",
      problemExplanation: [
        "Personality Conflicts: Different working styles and communication preferences",
        "Role Confusion: Unclear responsibilities and expectations",
        "Communication Issues: Poor information sharing and feedback",
        "Motivation Differences: Varying levels of commitment and engagement"
      ],
      solutionApproach: [
        "Team Building: Understanding different personalities and working styles",
        "Role Clarity: Defining clear responsibilities and expectations",
        "Communication Protocols: Establishing effective communication channels",
        "Motivation Strategies: Engaging all team members and building commitment"
      ]
    },
    video: {
      title: "Building Effective Team Dynamics",
      duration: 5,
      content: [
        "Personality Types: Understanding different working styles and preferences",
        "Role Definition: Clarifying responsibilities and expectations",
        "Communication Protocols: Establishing effective team communication",
        "Conflict Resolution: Managing disagreements and building consensus",
        "Team Motivation: Engaging all members and building commitment"
      ]
    },
    quiz: {
      title: "Test Your Team Dynamics Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the first step in building effective team dynamics?",
          options: [
            "Assign roles immediately",
            "Understand each team member's strengths and working style",
            "Set strict deadlines",
            "Choose a team leader"
          ],
          correct: 1,
          explanation: "Understanding each member's strengths and working style helps build better collaboration."
        },
        {
          id: 2,
          question: "How do you handle a team member who dominates discussions?",
          options: [
            "Let them lead everything",
            "Create structured discussion formats and encourage others to participate",
            "Ignore them",
            "Complain to the professor"
          ],
          correct: 1,
          explanation: "Structured discussion formats help ensure everyone has a chance to contribute."
        },
        {
          id: 3,
          question: "What's the best way to clarify team roles and responsibilities?",
          options: [
            "Assume everyone knows what to do",
            "Have a team meeting to discuss and document roles clearly",
            "Let the professor assign roles",
            "Work it out as you go"
          ],
          correct: 1,
          explanation: "Clear documentation of roles and responsibilities prevents confusion and conflicts."
        },
        {
          id: 4,
          question: "How do you motivate a team member who seems disengaged?",
          options: [
            "Ignore them and do their work",
            "Have a private conversation to understand their concerns and find ways to engage them",
            "Complain about them to others",
            "Give them easier tasks"
          ],
          correct: 1,
          explanation: "Understanding their concerns and finding ways to engage them is more effective than ignoring the issue."
        },
        {
          id: 5,
          question: "What's the key to successful team communication?",
          options: [
            "Meeting frequently",
            "Establishing clear communication protocols and regular check-ins",
            "Using only email",
            "Letting everyone communicate however they want"
          ],
          correct: 1,
          explanation: "Clear protocols and regular check-ins ensure everyone stays informed and engaged."
        }
      ]
    },
    challenge: {
      title: "Practice Team Dynamics",
      description: "Apply team dynamics principles to improve collaboration in your current group project",
      instructions: [
        "Assess your current team's dynamics and identify areas for improvement",
        "Have a team meeting to discuss working styles and preferences",
        "Clarify roles and responsibilities for each team member",
        "Establish communication protocols and regular check-ins",
        "Implement strategies to engage all team members"
      ],
      successCriteria: [
        "Identified team dynamics issues and improvement areas",
        "Clarified roles and responsibilities for all members",
        "Established effective communication protocols",
        "Implemented strategies to engage all team members"
      ]
    },
    feedback: {
      strengths: ["You're great at understanding different personalities and building consensus"],
      improvements: ["Focus on establishing clearer communication protocols and addressing conflicts more directly"],
      nextSteps: ["Practice facilitating team discussions and managing different working styles"]
    },
    badge: {
      name: "Team Builder",
      emoji: "👥",
      description: "Mastered team dynamics and collaboration building"
    },
    shareMessage: "Just mastered team dynamics! Ready to build amazing teams that work together! 👥 #Teamwork #Collaboration"
  },
  {
    id: 'leadership-skills',
    title: 'Leadership Skills',
    emoji: '🎯',
    context: 'professional',
    discover: {
      scenario: "You've been asked to lead a cross-functional project team at your internship. The team includes people from different departments with varying experience levels. Some team members are resistant to change, and you need to deliver results while building team cohesion. How do you develop your leadership skills and guide the team to success?",
      problemExplanation: [
        "Authority Challenges: Leading without formal authority or experience",
        "Resistance to Change: Team members reluctant to adopt new approaches",
        "Cross-Functional Complexity: Managing people from different departments and backgrounds",
        "Results Pressure: Balancing team building with delivering outcomes"
      ],
      solutionApproach: [
        "Leadership Styles: Understanding different approaches to leadership",
        "Influence Without Authority: Building trust and credibility",
        "Change Management: Guiding teams through transitions and improvements",
        "Results Focus: Balancing people and performance outcomes"
      ]
    },
    video: {
      title: "Developing Leadership Skills for Professional Success",
      duration: 5,
      content: [
        "Leadership Styles: Understanding different approaches and when to use them",
        "Influence Without Authority: Building trust and credibility with peers",
        "Change Management: Guiding teams through transitions and improvements",
        "Decision Making: Making tough decisions while maintaining team morale",
        "Results Delivery: Balancing people development with performance outcomes"
      ]
    },
    quiz: {
      title: "Test Your Leadership Skills Knowledge",
      questions: [
        {
          id: 1,
          question: "What's the most important quality of an effective leader?",
          options: [
            "Being the smartest person in the room",
            "Building trust and inspiring others to achieve common goals",
            "Making all decisions quickly",
            "Having the most experience"
          ],
          correct: 1,
          explanation: "Building trust and inspiring others to achieve common goals is fundamental to effective leadership."
        },
        {
          id: 2,
          question: "How do you lead effectively without formal authority?",
          options: [
            "Use your title to force compliance",
            "Build trust, demonstrate expertise, and focus on shared goals",
            "Avoid making decisions",
            "Let others lead"
          ],
          correct: 1,
          explanation: "Leading without authority requires building trust, demonstrating expertise, and focusing on shared goals."
        },
        {
          id: 3,
          question: "What's the best approach to managing resistance to change?",
          options: [
            "Ignore the resistance",
            "Understand concerns, communicate benefits, and involve people in the process",
            "Force the change through",
            "Avoid making changes"
          ],
          correct: 1,
          explanation: "Understanding concerns, communicating benefits, and involving people helps reduce resistance to change."
        },
        {
          id: 4,
          question: "How do you balance team building with delivering results?",
          options: [
            "Focus only on results",
            "Integrate team development into project work and celebrate both people and performance",
            "Focus only on team building",
            "Alternate between the two"
          ],
          correct: 1,
          explanation: "Integrating team development into project work creates sustainable high performance."
        },
        {
          id: 5,
          question: "What's the key to making effective team decisions?",
          options: [
            "Make all decisions yourself",
            "Gather input, consider options, and make decisions that align with team goals",
            "Let the team vote on everything",
            "Avoid making decisions"
          ],
          correct: 1,
          explanation: "Effective decisions balance input gathering with clear direction and goal alignment."
        }
      ]
    },
    challenge: {
      title: "Practice Leadership Skills",
      description: "Take on a leadership role in a project or initiative and apply leadership principles",
      instructions: [
        "Identify an opportunity to lead a project or initiative",
        "Assess your team's needs and your leadership approach",
        "Build trust and credibility with team members",
        "Guide the team through challenges and changes",
        "Focus on both team development and results delivery"
      ],
      successCriteria: [
        "Successfully led a project or initiative",
        "Built trust and credibility with team members",
        "Managed challenges and changes effectively",
        "Delivered results while developing the team"
      ]
    },
    feedback: {
      strengths: ["You're great at inspiring others and building consensus around goals"],
      improvements: ["Focus on developing more systematic approaches to change management and decision making"],
      nextSteps: ["Practice leading different types of teams and projects to build leadership versatility"]
    },
    badge: {
      name: "Team Leader",
      emoji: "🎯",
      description: "Mastered leadership skills and team guidance"
    },
    shareMessage: "Just mastered leadership skills! Ready to lead teams to success! 🎯 #Leadership #TeamSuccess"
  },
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution',
    emoji: '🤝',
    context: 'personal',
    discover: {
      scenario: "Your study group is falling apart due to conflicts over workload distribution and meeting times. One member feels they're doing more work, another is frustrated with last-minute changes, and a third is struggling with personal issues affecting their participation. How do you resolve these conflicts and rebuild team cohesion?",
      problemExplanation: [
        "Workload Disputes: Perceived unfair distribution of tasks and responsibilities",
        "Communication Breakdown: Misunderstandings and lack of clear expectations",
        "Personal Issues: External factors affecting team participation",
        "Trust Erosion: Previous conflicts damaging team relationships"
      ],
      solutionApproach: [
        "Conflict Analysis: Understanding the root causes of disagreements",
        "Communication Repair: Rebuilding trust and improving dialogue",
        "Fair Process: Establishing equitable procedures for decision making",
        "Relationship Building: Restoring trust and team cohesion"
      ]
    },
    video: {
      title: "Conflict Resolution for Personal and Professional Relationships",
      duration: 5,
      content: [
        "Conflict Analysis: Understanding root causes and different conflict styles",
        "Communication Repair: Rebuilding trust and improving dialogue",
        "Mediation Skills: Facilitating resolution between conflicting parties",
        "Fair Process: Establishing equitable procedures for decision making",
        "Relationship Restoration: Rebuilding trust and team cohesion"
      ]
    },
    quiz: {
      title: "Test Your Conflict Resolution Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in resolving a conflict?",
          options: [
            "Choose a side",
            "Understand all perspectives and identify the root cause",
            "Ignore the conflict",
            "Make a quick decision"
          ],
          correct: 1,
          explanation: "Understanding all perspectives and identifying root causes is essential for effective conflict resolution."
        },
        {
          id: 2,
          question: "How do you handle a conflict where both parties feel wronged?",
          options: [
            "Choose the person you like more",
            "Focus on interests rather than positions and find common ground",
            "Avoid the conflict",
            "Let them work it out themselves"
          ],
          correct: 1,
          explanation: "Focusing on underlying interests rather than positions helps find mutually beneficial solutions."
        },
        {
          id: 3,
          question: "What's the best approach to mediating a conflict between team members?",
          options: [
            "Take sides",
            "Remain neutral, listen to all parties, and facilitate dialogue",
            "Make the decision yourself",
            "Ignore the conflict"
          ],
          correct: 1,
          explanation: "Effective mediation requires neutrality, active listening, and facilitating constructive dialogue."
        },
        {
          id: 4,
          question: "How do you prevent conflicts from recurring?",
          options: [
            "Avoid difficult topics",
            "Establish clear processes, expectations, and communication protocols",
            "Hope they don't happen again",
            "Change the team"
          ],
          correct: 1,
          explanation: "Clear processes, expectations, and communication protocols help prevent future conflicts."
        },
        {
          id: 5,
          question: "What's the key to rebuilding trust after a conflict?",
          options: [
            "Pretend it never happened",
            "Acknowledge the issue, take responsibility, and demonstrate consistent behavior",
            "Blame others",
            "Start over with new people"
          ],
          correct: 1,
          explanation: "Rebuilding trust requires acknowledgment, responsibility, and consistent demonstration of improved behavior."
        }
      ]
    },
    challenge: {
      title: "Practice Conflict Resolution",
      description: "Apply conflict resolution skills to address a real conflict in your personal or professional life",
      instructions: [
        "Identify a conflict you're involved in or can help resolve",
        "Analyze the root causes and different perspectives involved",
        "Use active listening and empathy to understand all parties",
        "Facilitate dialogue and work toward a mutually acceptable solution",
        "Establish processes to prevent similar conflicts in the future"
      ],
      successCriteria: [
        "Identified root causes and understood all perspectives",
        "Used effective communication and listening skills",
        "Facilitated dialogue between conflicting parties",
        "Reached a mutually acceptable resolution"
      ]
    },
    feedback: {
      strengths: ["You're excellent at understanding different perspectives and finding common ground"],
      improvements: ["Focus on developing more systematic approaches to conflict prevention and trust rebuilding"],
      nextSteps: ["Practice mediating conflicts and establishing better communication protocols"]
    },
    badge: {
      name: "Conflict Resolver",
      emoji: "🤝",
      description: "Mastered conflict resolution and relationship building"
    },
    shareMessage: "Just mastered conflict resolution! Ready to turn conflicts into opportunities for growth! 🤝 #ConflictResolution #Teamwork"
  },
  {
    id: 'remote-collaboration',
    title: 'Remote Collaboration',
    emoji: '💻',
    context: 'professional',
    discover: {
      scenario: "Your team is now working remotely, and you're struggling with collaboration. Video calls are awkward, people miss important updates, and it's hard to maintain team cohesion. Some team members are more engaged than others, and you're concerned about project quality and deadlines. How do you build effective remote collaboration?",
      problemExplanation: [
        "Communication Barriers: Lack of face-to-face interaction and informal communication",
        "Technology Challenges: Different tools and comfort levels with remote work technology",
        "Engagement Issues: Difficulty maintaining team connection and motivation",
        "Coordination Problems: Managing schedules, time zones, and project coordination"
      ],
      solutionApproach: [
        "Technology Mastery: Using the right tools for different types of collaboration",
        "Communication Protocols: Establishing clear communication channels and expectations",
        "Engagement Strategies: Building team connection and maintaining motivation",
        "Coordination Systems: Managing schedules, deadlines, and project workflows"
      ]
    },
    video: {
      title: "Mastering Remote Collaboration and Virtual Teamwork",
      duration: 5,
      content: [
        "Technology Tools: Choosing and using the right collaboration platforms",
        "Communication Protocols: Establishing effective remote communication practices",
        "Virtual Engagement: Building team connection and maintaining motivation",
        "Project Coordination: Managing schedules, deadlines, and workflows remotely",
        "Performance Management: Tracking progress and maintaining accountability"
      ]
    },
    quiz: {
      title: "Test Your Remote Collaboration Skills",
      questions: [
        {
          id: 1,
          question: "What's the most important factor in successful remote collaboration?",
          options: [
            "Having the latest technology",
            "Clear communication protocols and regular check-ins",
            "Working the same hours",
            "Being in the same time zone"
          ],
          correct: 1,
          explanation: "Clear communication protocols and regular check-ins are essential for remote collaboration success."
        },
        {
          id: 2,
          question: "How do you maintain team engagement in remote work?",
          options: [
            "Have more meetings",
            "Create opportunities for informal interaction and recognize contributions",
            "Send more emails",
            "Work longer hours"
          ],
          correct: 1,
          explanation: "Informal interaction and recognition help maintain engagement in remote teams."
        },
        {
          id: 3,
          question: "What's the best approach to managing different time zones?",
          options: [
            "Everyone works the same hours",
            "Establish core hours, use asynchronous communication, and respect time zone differences",
            "Ignore time zones",
            "Work 24/7"
          ],
          correct: 1,
          explanation: "Core hours, asynchronous communication, and time zone respect enable effective global collaboration."
        },
        {
          id: 4,
          question: "How do you ensure accountability in remote teams?",
          options: [
            "Monitor everyone constantly",
            "Set clear expectations, use project management tools, and have regular check-ins",
            "Trust everyone completely",
            "Have daily meetings"
          ],
          correct: 1,
          explanation: "Clear expectations, project management tools, and regular check-ins ensure accountability without micromanagement."
        },
        {
          id: 5,
          question: "What's the key to effective virtual meetings?",
          options: [
            "Keep them short",
            "Have clear agendas, engage all participants, and follow up with action items",
            "Have them frequently",
            "Use video for everything"
          ],
          correct: 1,
          explanation: "Clear agendas, participant engagement, and follow-up action items make virtual meetings effective."
        }
      ]
    },
    challenge: {
      title: "Practice Remote Collaboration",
      description: "Improve remote collaboration in your current team or project",
      instructions: [
        "Assess your current remote collaboration practices and identify improvement areas",
        "Establish or improve communication protocols and tools",
        "Create opportunities for informal team interaction and engagement",
        "Implement better project coordination and accountability systems",
        "Measure and improve team performance and satisfaction"
      ],
      successCriteria: [
        "Established clear communication protocols and tools",
        "Created opportunities for team engagement and interaction",
        "Improved project coordination and accountability",
        "Measured and improved team performance"
      ]
    },
    feedback: {
      strengths: ["You're great at using technology effectively and maintaining clear communication"],
      improvements: ["Focus on building more informal team connections and improving engagement strategies"],
      nextSteps: ["Practice leading remote teams and developing virtual collaboration best practices"]
    },
    badge: {
      name: "Remote Collaborator",
      emoji: "💻",
      description: "Mastered remote collaboration and virtual teamwork"
    },
    shareMessage: "Just mastered remote collaboration! Ready to lead virtual teams to success! 💻 #RemoteWork #VirtualTeams"
  },
  {
    id: 'inclusive-teams',
    title: 'Inclusive Teams',
    emoji: '🌈',
    context: 'academic',
    discover: {
      scenario: "Your diverse study group includes international students, students with different learning styles, and varying levels of English proficiency. Some members feel excluded from discussions, others struggle with cultural differences, and the group isn't leveraging everyone's unique strengths. How do you build a truly inclusive team environment?",
      problemExplanation: [
        "Cultural Barriers: Different communication styles and cultural expectations",
        "Language Challenges: Varying levels of English proficiency affecting participation",
        "Learning Differences: Different learning styles and academic backgrounds",
        "Inclusion Gaps: Some members feeling excluded or undervalued"
      ],
      solutionApproach: [
        "Cultural Awareness: Understanding and respecting different cultural perspectives",
        "Inclusive Communication: Adapting communication styles to include everyone",
        "Strength Recognition: Identifying and leveraging each member's unique contributions",
        "Equity Practices: Ensuring fair participation and opportunity for all"
      ]
    },
    video: {
      title: "Building Inclusive and Diverse Teams",
      duration: 5,
      content: [
        "Cultural Awareness: Understanding and respecting different cultural perspectives",
        "Inclusive Communication: Adapting styles to include all team members",
        "Strength Recognition: Identifying and leveraging unique contributions",
        "Equity Practices: Ensuring fair participation and opportunity",
        "Bias Awareness: Recognizing and addressing unconscious biases"
      ]
    },
    quiz: {
      title: "Test Your Inclusive Team Building Skills",
      questions: [
        {
          id: 1,
          question: "What's the first step in building an inclusive team?",
          options: [
            "Set strict rules",
            "Understand and respect different cultural perspectives and communication styles",
            "Choose similar people",
            "Ignore differences"
          ],
          correct: 1,
          explanation: "Understanding and respecting different perspectives and styles is fundamental to inclusion."
        },
        {
          id: 2,
          question: "How do you ensure all team members can participate effectively?",
          options: [
            "Use only English",
            "Adapt communication styles, provide multiple ways to contribute, and be patient with different approaches",
            "Let everyone figure it out",
            "Have the same rules for everyone"
          ],
          correct: 1,
          explanation: "Adapting communication and providing multiple contribution methods ensures effective participation."
        },
        {
          id: 3,
          question: "What's the best approach to leveraging diverse strengths?",
          options: [
            "Give everyone the same tasks",
            "Identify each person's unique strengths and assign roles that maximize their contributions",
            "Focus on weaknesses",
            "Let people choose their own tasks"
          ],
          correct: 1,
          explanation: "Identifying and leveraging unique strengths creates more effective and engaged teams."
        },
        {
          id: 4,
          question: "How do you address unconscious bias in team interactions?",
          options: [
            "Ignore it",
            "Educate the team, create awareness, and establish inclusive practices",
            "Blame individuals",
            "Avoid the topic"
          ],
          correct: 1,
          explanation: "Education, awareness, and inclusive practices help address unconscious bias effectively."
        },
        {
          id: 5,
          question: "What's the key to maintaining inclusion over time?",
          options: [
            "Set it up once",
            "Continuously assess, adapt practices, and ensure all voices are heard",
            "Hope it works",
            "Change the team"
          ],
          correct: 1,
          explanation: "Inclusion requires continuous assessment, adaptation, and ensuring all voices are heard."
        }
      ]
    },
    challenge: {
      title: "Practice Inclusive Team Building",
      description: "Apply inclusive practices to improve diversity and inclusion in your current team",
      instructions: [
        "Assess your team's current inclusion practices and identify improvement areas",
        "Learn about different cultural perspectives and communication styles in your team",
        "Implement inclusive communication and participation practices",
        "Identify and leverage each team member's unique strengths",
        "Establish ongoing practices to maintain inclusion and equity"
      ],
      successCriteria: [
        "Assessed current inclusion practices and identified improvements",
        "Implemented inclusive communication and participation practices",
        "Leveraged unique strengths of all team members",
        "Established ongoing inclusion and equity practices"
      ]
    },
    feedback: {
      strengths: ["You're excellent at recognizing different perspectives and building cultural awareness"],
      improvements: ["Focus on developing more systematic approaches to bias awareness and equity practices"],
      nextSteps: ["Practice leading diverse teams and implementing inclusive practices"]
    },
    badge: {
      name: "Inclusive Leader",
      emoji: "🌈",
      description: "Mastered inclusive team building and diversity management"
    },
    shareMessage: "Just mastered inclusive team building! Ready to create teams where everyone thrives! 🌈 #Inclusion #Diversity"
  },
  {
    id: 'team-communication',
    title: 'Team Communication',
    emoji: '📢',
    context: 'professional',
    discover: {
      scenario: "Your project team is struggling with communication issues. Important updates are getting lost in email threads, decisions are made without everyone's input, and there's confusion about project status and next steps. The client is asking for updates, but the team can't provide clear information. How do you establish effective team communication?",
      problemExplanation: [
        "Information Silos: Important updates not reaching all team members",
        "Decision Confusion: Unclear who makes decisions and how they're communicated",
        "Status Ambiguity: Team members unsure about project progress and priorities",
        "Client Communication: Inability to provide clear, consistent updates to stakeholders"
      ],
      solutionApproach: [
        "Communication Channels: Establishing clear channels for different types of information",
        "Decision Processes: Creating transparent decision-making and communication procedures",
        "Status Tracking: Implementing systems for project visibility and progress updates",
        "Stakeholder Management: Ensuring clear, consistent communication with all stakeholders"
      ]
    },
    video: {
      title: "Effective Team Communication for Project Success",
      duration: 5,
      content: [
        "Communication Channels: Establishing clear channels for different information types",
        "Decision Processes: Creating transparent decision-making procedures",
        "Status Tracking: Implementing project visibility and progress systems",
        "Stakeholder Communication: Managing clear, consistent external communication",
        "Feedback Loops: Creating systems for continuous communication improvement"
      ]
    },
    quiz: {
      title: "Test Your Team Communication Skills",
      questions: [
        {
          id: 1,
          question: "What's the most important element of effective team communication?",
          options: [
            "Using the latest technology",
            "Clarity, consistency, and ensuring everyone has the information they need",
            "Having frequent meetings",
            "Using formal language"
          ],
          correct: 1,
          explanation: "Clarity, consistency, and ensuring everyone has needed information are fundamental to effective communication."
        },
        {
          id: 2,
          question: "How do you ensure important decisions are communicated effectively?",
          options: [
            "Send an email",
            "Use multiple channels, confirm understanding, and provide context for decisions",
            "Tell people in person",
            "Post it on a board"
          ],
          correct: 1,
          explanation: "Multiple channels, confirmation, and context ensure decisions are understood and acted upon."
        },
        {
          id: 3,
          question: "What's the best approach to project status communication?",
          options: [
            "Update when asked",
            "Establish regular updates, use visual tools, and make status easily accessible",
            "Update only when there are problems",
            "Let people figure it out"
          ],
          correct: 1,
          explanation: "Regular updates, visual tools, and accessibility ensure everyone stays informed about project status."
        },
        {
          id: 4,
          question: "How do you handle communication with external stakeholders?",
          options: [
            "Let anyone communicate",
            "Designate spokespeople, prepare consistent messages, and coordinate all external communication",
            "Respond to each request individually",
            "Avoid external communication"
          ],
          correct: 1,
          explanation: "Designated spokespeople and coordinated messaging ensure consistent, professional external communication."
        },
        {
          id: 5,
          question: "What's the key to improving team communication over time?",
          options: [
            "Set it up once",
            "Regularly assess effectiveness, gather feedback, and adapt communication practices",
            "Hope it improves",
            "Change the team"
          ],
          correct: 1,
          explanation: "Continuous assessment, feedback, and adaptation ensure communication practices remain effective."
        }
      ]
    },
    challenge: {
      title: "Practice Team Communication",
      description: "Improve communication practices in your current team or project",
      instructions: [
        "Assess current communication practices and identify improvement areas",
        "Establish clear communication channels and protocols",
        "Implement better decision-making and status communication processes",
        "Improve stakeholder communication and coordination",
        "Create feedback systems to continuously improve communication"
      ],
      successCriteria: [
        "Established clear communication channels and protocols",
        "Improved decision-making and status communication",
        "Enhanced stakeholder communication and coordination",
        "Created systems for continuous communication improvement"
      ]
    },
    feedback: {
      strengths: ["You're excellent at organizing information and ensuring clear communication"],
      improvements: ["Focus on developing more systematic approaches to stakeholder management and feedback systems"],
      nextSteps: ["Practice managing complex communication across multiple stakeholders and projects"]
    },
    badge: {
      name: "Communication Coordinator",
      emoji: "📢",
      description: "Mastered team communication and stakeholder management"
    },
    shareMessage: "Just mastered team communication! Ready to keep everyone informed and aligned! 📢 #TeamCommunication #ProjectSuccess"
  }
];

export const module6Assessment: AssessmentData = {
  title: "Teamwork & Collaboration Final Assessment",
  description: "Test your mastery of teamwork and collaboration skills. This comprehensive assessment evaluates your understanding of team dynamics, leadership, conflict resolution, and effective collaboration.",
  questions: [
    {
      id: 1,
      question: "What's the most important factor in building effective team dynamics?",
      options: [
        "Having the same personalities",
        "Understanding different working styles and building mutual respect",
        "Working in the same location",
        "Having the same goals"
      ],
      correct: 1,
      explanation: "Understanding different working styles and building mutual respect creates strong team dynamics."
    },
    {
      id: 2,
      question: "How do you lead effectively without formal authority?",
      options: [
        "Use your title to force compliance",
        "Build trust, demonstrate expertise, and focus on shared goals",
        "Avoid making decisions",
        "Let others lead"
      ],
      correct: 1,
      explanation: "Leading without authority requires building trust, demonstrating expertise, and focusing on shared goals."
    },
    {
      id: 3,
      question: "What's the best approach to resolving team conflicts?",
      options: [
        "Choose a side quickly",
        "Understand all perspectives, identify root causes, and find mutually beneficial solutions",
        "Ignore the conflict",
        "Let the manager decide"
      ],
      correct: 1,
      explanation: "Effective conflict resolution requires understanding all perspectives and finding mutually beneficial solutions."
    },
    {
      id: 4,
      question: "How do you maintain team engagement in remote work?",
      options: [
        "Have more meetings",
        "Create opportunities for informal interaction and recognize contributions",
        "Send more emails",
        "Work longer hours"
      ],
      correct: 1,
      explanation: "Informal interaction and recognition help maintain engagement in remote teams."
    },
    {
      id: 5,
      question: "What's the key to building inclusive teams?",
      options: [
        "Hire similar people",
        "Understand different perspectives, adapt communication, and leverage unique strengths",
        "Set strict rules",
        "Ignore differences"
      ],
      correct: 1,
      explanation: "Inclusive teams understand different perspectives, adapt communication, and leverage unique strengths."
    },
    {
      id: 6,
      question: "How do you ensure effective team communication?",
      options: [
        "Use only email",
            "Establish clear channels, regular updates, and confirm understanding",
        "Have daily meetings",
        "Let everyone communicate however they want"
      ],
      correct: 1,
      explanation: "Effective communication requires clear channels, regular updates, and confirmation of understanding."
    }
  ],
  gradingScale: {
    excellent: { min: 80, max: 100, message: "Excellent! You've mastered teamwork and collaboration!", xpReward: 100 },
    good: { min: 70, max: 79, message: "Good job! You have strong teamwork skills.", xpReward: 75 },
    satisfactory: { min: 60, max: 69, message: "Satisfactory. Keep practicing to improve further.", xpReward: 50 },
    needsImprovement: { min: 0, max: 59, message: "Keep learning! Teamwork skills improve with practice.", xpReward: 25 }
  }
};

// Local Storage Helper Functions
export const saveModuleProgress = (progress: ModuleProgress): void => {
  localStorage.setItem('module6Progress', JSON.stringify(progress));
};

export const loadModuleProgress = (): ModuleProgress | null => {
  const stored = localStorage.getItem('module6Progress');
  return stored ? JSON.parse(stored) : null;
};

export const updateSubtopicProgress = (subtopicId: string, score: number, response: string): void => {
  const progress = loadModuleProgress() || {
    moduleId: 'teamwork',
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
  const subtopicIndex = module6Subtopics.findIndex(subtopic => subtopic.id === subtopicId);
  if (subtopicIndex !== -1 && !progress.completedSubtopics.includes(subtopicIndex)) {
    progress.completedSubtopics.push(subtopicIndex);
  }

  // Award badge based on score
  if (score >= 80 && !progress.badges.includes('Team Player')) {
    progress.badges.push('Team Player');
  }

  saveModuleProgress(progress);
};