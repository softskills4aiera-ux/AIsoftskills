// Module 1: Communication Skills Data Structure
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

export const module1Subtopics: SubtopicData[] = [
  {
    id: 'active-listening',
    title: 'Active Listening',
    emoji: '🎧',
    context: 'academic',
    discover: {
      scenario: "Your professor is explaining the final exam format, but you're already thinking about your job interview tomorrow. Your group project partner is sharing concerns, but you're distracted by notifications. You realize you've missed the key points for the upcoming exam. How do you focus and absorb information effectively?",
      problemExplanation: [
        "Distraction: Phone notifications, friend conversations, and internal thoughts prevent focus",
        "Multitasking: Trying to listen while thinking about other things reduces comprehension",
        "Passive Listening: Just hearing words without understanding or processing meaning",
        "Missing Critical Information: Key exam content and project details are lost"
      ],
      solutionApproach: [
        "Focus Techniques: Phone away, active note-taking, eye contact with speaker",
        "Engagement Strategies: Asking clarifying questions, summarizing key points",
        "Memory Techniques: Connecting new information to existing knowledge",
        "Follow-up Actions: Office hours, study groups, peer discussions"
      ]
    },
    video: {
      title: "Active Listening for Academic Success",
      duration: 5,
      content: [
        "Lecture Listening: How to stay focused during long lectures",
        "Group Work: Active listening in study groups and project meetings",
        "Professor Communication: Effective listening during office hours and feedback sessions",
        "Note-Taking Integration: Combining listening with effective note-taking",
        "Memory Retention: Techniques to remember what you've heard"
      ]
    },
    quiz: {
      title: "Test Your Active Listening Knowledge",
      questions: [
        {
          id: 1,
          question: "Your professor says 'This needs more research' - what should you do first?",
          options: [
            "Immediately start researching",
            "Ask clarifying questions about what specific research is needed",
            "Ignore the feedback and continue as planned",
            "Ask other students what they think"
          ],
          correct: 1,
          explanation: "Always ask clarifying questions to understand exactly what's needed before taking action."
        },
        {
          id: 2,
          question: "Group member is struggling with their part - how do you listen effectively?",
          options: [
            "Give them advice immediately",
            "Listen completely, then ask questions to understand their specific challenges",
            "Tell them to figure it out themselves",
            "Take over their part"
          ],
          correct: 1,
          explanation: "Active listening means understanding the full situation before offering solutions."
        },
        {
          id: 3,
          question: "What's the difference between hearing and active listening in academic settings?",
          options: [
            "There's no difference",
            "Hearing is passive, active listening involves understanding and responding",
            "Active listening is just louder",
            "Hearing is for lectures, active listening is for conversations"
          ],
          correct: 1,
          explanation: "Active listening requires engagement, understanding, and response, not just hearing words."
        },
        {
          id: 4,
          question: "How do you take effective notes during exam review sessions?",
          options: [
            "Write down everything the professor says",
            "Focus on key concepts and ask questions about unclear points",
            "Record the session and listen later",
            "Just listen without taking notes"
          ],
          correct: 1,
          explanation: "Focus on key concepts and engage by asking questions about unclear points."
        },
        {
          id: 5,
          question: "What's the best way to listen and understand complex academic concepts?",
          options: [
            "Memorize the definitions",
            "Connect new concepts to things you already know",
            "Ask the professor to simplify everything",
            "Skip the complex parts"
          ],
          correct: 1,
          explanation: "Connecting new information to existing knowledge helps with understanding and retention."
        }
      ]
    },
    challenge: {
      title: "Practice Active Listening",
      description: "Practice active listening in your next lecture or study session",
      instructions: [
        "Before the session: Put your phone away, prepare note-taking materials",
        "During the session: Maintain eye contact, ask at least 2 clarifying questions",
        "After the session: Summarize 3 key points you learned",
        "Reflection: Write down what helped you listen better and what was challenging"
      ],
      successCriteria: [
        "Asked at least 2 relevant questions",
        "Created clear, organized notes",
        "Can explain 3 key concepts from the session",
        "Identified specific listening strategies that worked"
      ]
    },
    feedback: {
      strengths: ["You're great at listening to peers and asking thoughtful questions"],
      improvements: ["Focus on maintaining eye contact with authority figures and reducing internal distractions"],
      nextSteps: ["Practice active listening in your next professor meeting and group study session"]
    },
    badge: {
      name: "Active Listener",
      emoji: "🎧",
      description: "Mastered the art of active listening in academic settings"
    },
    shareMessage: "Just mastered active listening for my studies! Ready to absorb knowledge like a sponge! 🎧 #StudySmart #CommunicationSkills"
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    emoji: '🎤',
    context: 'professional',
    discover: {
      scenario: "Job interview tomorrow, you need to present your final year project to potential employers. Your hands are shaking, voice is cracking, and you're worried about technical questions. Plus, you've been applying to 50+ jobs with no responses. How do you present confidently and handle interview anxiety?",
      problemExplanation: [
        "Interview Anxiety: Physical symptoms of nervousness affecting performance",
        "Application Fatigue: Multiple rejections leading to self-doubt and decreased confidence",
        "Technical Concerns: Worry about being asked difficult questions beyond your knowledge",
        "Presentation Skills: Lack of experience presenting to professional audiences"
      ],
      solutionApproach: [
        "Confidence Building: Preparation, practice, and positive self-talk",
        "Anxiety Management: Breathing techniques, visualization, and reframing",
        "Technical Preparation: Research company, practice common questions, prepare examples",
        "Presentation Skills: Structure, storytelling, and audience engagement"
      ]
    },
    video: {
      title: "Public Speaking for Professional Success",
      duration: 5,
      content: [
        "Interview Presentations: How to present your projects confidently to employers",
        "Career Fair Communication: Elevator pitches and portfolio presentations",
        "Networking Events: Introducing yourself professionally to industry contacts",
        "Anxiety Management: Techniques to handle nervousness and build confidence",
        "Follow-up Strategies: Post-interview communication and relationship building"
      ]
    },
    quiz: {
      title: "Test Your Public Speaking Knowledge",
      questions: [
        {
          id: 1,
          question: "How do you adjust your presentation style for an interviewer vs. a client?",
          options: [
            "Use the same style for both",
            "Be more formal with interviewers, more casual with clients",
            "Research the audience and adjust tone, examples, and level of detail accordingly",
            "Always be very formal"
          ],
          correct: 2,
          explanation: "Always research your audience and tailor your presentation to their needs and context."
        },
        {
          id: 2,
          question: "What's the best way to handle technical questions during presentations?",
          options: [
            "Pretend you know the answer",
            "Say 'I don't know' and move on",
            "Acknowledge what you know, admit what you don't, and explain how you'd find out",
            "Change the subject"
          ],
          correct: 2,
          explanation: "Honesty and problem-solving approach shows professionalism and confidence."
        },
        {
          id: 3,
          question: "How do you maintain confidence when presenting to senior professionals?",
          options: [
            "Avoid eye contact",
            "Speak quietly to show respect",
            "Maintain good posture, speak clearly, and focus on your value",
            "Let them lead the conversation"
          ],
          correct: 2,
          explanation: "Confidence comes from good preparation, clear communication, and knowing your value."
        },
        {
          id: 4,
          question: "How do you follow up after a job interview without being pushy?",
          options: [
            "Send multiple emails",
            "Call them directly",
            "Send one professional thank-you email within 24 hours",
            "Wait for them to contact you"
          ],
          correct: 2,
          explanation: "One professional thank-you email within 24 hours shows professionalism without being pushy."
        },
        {
          id: 5,
          question: "What do you say when asked 'Why should we hire you?'",
          options: [
            "I need a job",
            "I'm really smart",
            "Based on my skills and experience, I can contribute to your team by...",
            "I don't know"
          ],
          correct: 2,
          explanation: "Focus on specific skills and how they benefit the company, not your personal needs."
        }
      ]
    },
    challenge: {
      title: "Record Professional Presentation",
      description: "Record a 3-minute professional presentation for a job interview",
      instructions: [
        "Choose a topic: Your final year project, a relevant experience, or a skill you want to highlight",
        "Structure your presentation: Introduction, main points, conclusion",
        "Record yourself: Use your phone or computer to record the presentation",
        "Self-evaluate: Watch the recording and note areas for improvement",
        "Practice again: Record a second version incorporating improvements"
      ],
      successCriteria: [
        "Clear introduction and conclusion",
        "Well-organized main points",
        "Good eye contact with camera",
        "Confident voice and body language",
        "Within 3-minute time limit"
      ]
    },
    feedback: {
      strengths: ["You have good content and clear structure"],
      improvements: ["Work on maintaining eye contact and reducing filler words like 'um' and 'uh'"],
      nextSteps: ["Practice the presentation 3 more times and focus on smooth transitions between points"]
    },
    badge: {
      name: "Confident Speaker",
      emoji: "🎤",
      description: "Mastered professional presentation skills for interviews and workplace"
    },
    shareMessage: "Ready to present anywhere - from classroom to boardroom! Just nailed my interview presentation skills! 🎤 #JobReady #PublicSpeaking"
  },
  {
    id: 'written-communication',
    title: 'Written Communication',
    emoji: '✍️',
    context: 'professional',
    discover: {
      scenario: "First day at your new job, you need to email your manager about project updates, respond to a senior colleague's feedback, and write a professional message to a client. But first, you need to write a compelling cover letter and follow up on job applications. Your current emails sound like text messages. How do you level up your professional writing?",
      problemExplanation: [
        "Informal Writing Style: Using casual language, abbreviations, and emojis in professional contexts",
        "Lack of Structure: Emails without clear subject lines, greetings, or professional closings",
        "Unclear Purpose: Messages that don't clearly state what you need or want",
        "Inappropriate Tone: Being too casual with senior colleagues or too formal with peers"
      ],
      solutionApproach: [
        "Professional Format: Proper email structure, subject lines, and signatures",
        "Appropriate Tone: Matching formality level to audience and context",
        "Clear Communication: Stating purpose, providing context, and requesting specific actions",
        "Follow-up Strategies: Professional persistence without being pushy"
      ]
    },
    video: {
      title: "Professional Written Communication",
      duration: 5,
      content: [
        "Email Structure: Subject lines, greetings, body, closings, and signatures",
        "Tone Adaptation: Formal vs. informal communication based on audience",
        "Cover Letter Writing: Compelling applications that stand out to employers",
        "Follow-up Communication: Post-interview and post-application strategies",
        "Client Communication: Professional external communication standards"
      ]
    },
    quiz: {
      title: "Test Your Written Communication Knowledge",
      questions: [
        {
          id: 1,
          question: "How do you email a senior colleague vs. a peer?",
          options: [
            "Use the same tone for both",
            "Be more formal with senior colleagues, more casual with peers",
            "Always be very formal",
            "Be casual with everyone"
          ],
          correct: 1,
          explanation: "Adjust your tone based on the relationship and context."
        },
        {
          id: 2,
          question: "What's the appropriate tone for client communication?",
          options: [
            "Very casual and friendly",
            "Professional but warm, clear and respectful",
            "Extremely formal and distant",
            "Use lots of technical jargon"
          ],
          correct: 1,
          explanation: "Professional but warm tone builds trust while maintaining boundaries."
        },
        {
          id: 3,
          question: "How do you respond professionally to negative feedback?",
          options: [
            "Defend yourself immediately",
            "Thank them, acknowledge the feedback, and ask for specific examples",
            "Ignore the feedback",
            "Send a long explanation"
          ],
          correct: 1,
          explanation: "Acknowledge feedback professionally and seek clarification."
        },
        {
          id: 4,
          question: "How do you write a compelling cover letter that stands out?",
          options: [
            "Use a generic template",
            "Research the company and tailor your letter to their specific needs",
            "Focus only on your achievements",
            "Make it very long and detailed"
          ],
          correct: 1,
          explanation: "Tailor your cover letter to show you understand the company's needs."
        },
        {
          id: 5,
          question: "What's the best way to follow up on job applications?",
          options: [
            "Send multiple emails",
            "Call them directly",
            "Send one professional follow-up email after 1-2 weeks",
            "Wait indefinitely"
          ],
          correct: 2,
          explanation: "One professional follow-up shows persistence without being pushy."
        }
      ]
    },
    challenge: {
      title: "Write Professional Emails",
      description: "Write 3 different professional emails",
      instructions: [
        "Cover Letter: Write a compelling cover letter for a job you're interested in",
        "Manager Email: Write an email to your manager about a project update",
        "Senior Colleague Email: Write an email responding to feedback from a senior colleague",
        "Self-Review: Check each email for professional tone, clear structure, and appropriate language"
      ],
      successCriteria: [
        "Clear subject lines for all emails",
        "Appropriate greetings and closings",
        "Professional tone matching the audience",
        "Clear purpose and specific requests",
        "No spelling or grammar errors"
      ]
    },
    feedback: {
      strengths: ["Your emails are clear and well-structured"],
      improvements: ["Your cover letters need more personality and specific examples of your achievements"],
      nextSteps: ["Practice writing emails to different audiences and focus on tailoring your message to each recipient"]
    },
    badge: {
      name: "Professional Writer",
      emoji: "✍️",
      description: "Mastered professional written communication for workplace and job search"
    },
    shareMessage: "My emails are now crystal clear! Just leveled up my professional writing game! ✍️ #ProfessionalCommunication #JobSearch"
  },
  {
    id: 'non-verbal-communication',
    title: 'Non-verbal Communication',
    emoji: '💪',
    context: 'personal',
    discover: {
      scenario: "Family dinner where your parents want you to explain your career choice, but you're sitting slouched, avoiding eye contact, and fidgeting with your phone. Your body language is screaming 'I'm not confident' even though you are. How do you show confidence in personal situations?",
      problemExplanation: [
        "Poor Posture: Slouching and closed body language conveying lack of confidence",
        "Avoiding Eye Contact: Looking away or at phone instead of engaging with family",
        "Fidgeting: Nervous habits that distract from the message",
        "Mixed Signals: Saying you're confident while body language shows otherwise"
      ],
      solutionApproach: [
        "Confident Posture: Sitting up straight, open body language, facing the person",
        "Eye Contact: Maintaining appropriate eye contact without staring",
        "Calm Presence: Reducing fidgeting and nervous habits",
        "Authentic Expression: Aligning body language with your words and feelings"
      ]
    },
    video: {
      title: "Non-verbal Communication for Personal Success",
      duration: 5,
      content: [
        "Confident Body Language: Posture, gestures, and positioning",
        "Eye Contact Mastery: Appropriate eye contact for different situations",
        "Facial Expressions: Conveying confidence and authenticity",
        "Personal Space: Understanding and respecting boundaries",
        "Cultural Sensitivity: Adapting non-verbal communication to different contexts"
      ]
    },
    quiz: {
      title: "Test Your Non-verbal Communication Knowledge",
      questions: [
        {
          id: 1,
          question: "What body language shows confidence in family discussions?",
          options: [
            "Slouching and looking away",
            "Sitting up straight, making eye contact, and using open gestures",
            "Crossing your arms and legs",
            "Looking at your phone"
          ],
          correct: 1,
          explanation: "Open posture and eye contact convey confidence and engagement."
        },
        {
          id: 2,
          question: "How do you maintain eye contact without staring in social situations?",
          options: [
            "Look directly into their eyes the entire time",
            "Look at their eyes 60-70% of the time, occasionally looking away naturally",
            "Avoid eye contact completely",
            "Look over their shoulder"
          ],
          correct: 1,
          explanation: "Natural eye contact patterns feel comfortable and confident."
        },
        {
          id: 3,
          question: "What does your posture say about your confidence level?",
          options: [
            "Nothing important",
            "It communicates confidence, openness, and engagement",
            "Only your words matter",
            "Posture is irrelevant"
          ],
          correct: 1,
          explanation: "Posture is a powerful non-verbal communication tool."
        },
        {
          id: 4,
          question: "How do you handle social media pressure and comparison?",
          options: [
            "Compare yourself to others constantly",
            "Focus on your own journey and authentic self-expression",
            "Try to copy others' success",
            "Avoid social media completely"
          ],
          correct: 1,
          explanation: "Authentic self-expression builds genuine confidence."
        },
        {
          id: 5,
          question: "What's the best way to communicate your values to family and friends?",
          options: [
            "Tell them what they should believe",
            "Share your experiences and listen to theirs with respect",
            "Avoid discussing values",
            "Only communicate online"
          ],
          correct: 1,
          explanation: "Respectful dialogue builds understanding and connection."
        }
      ]
    },
    challenge: {
      title: "Practice Confident Body Language",
      description: "Practice confident body language in your next family gathering or social event",
      instructions: [
        "Before the event: Practice confident posture and eye contact in front of a mirror",
        "During the event: Focus on sitting up straight, making eye contact, and reducing fidgeting",
        "Engage actively: Ask questions, share your thoughts, and listen attentively",
        "Self-monitor: Notice when you're slouching or avoiding eye contact and correct it",
        "Reflect: After the event, note what felt natural and what was challenging"
      ],
      successCriteria: [
        "Maintained good posture throughout the event",
        "Made appropriate eye contact during conversations",
        "Reduced fidgeting and nervous habits",
        "Actively participated in discussions",
        "Felt more confident and authentic"
      ]
    },
    feedback: {
      strengths: ["You have natural warmth and authenticity in your interactions"],
      improvements: ["Focus on maintaining eye contact and reducing fidgeting when discussing important topics"],
      nextSteps: ["Practice confident body language in low-stakes situations before important conversations"]
    },
    badge: {
      name: "Body Language Pro",
      emoji: "💪",
      description: "Mastered confident non-verbal communication for personal relationships"
    },
    shareMessage: "My confidence is showing! Just mastered the art of confident body language! 💪 #Confidence #PersonalGrowth"
  },
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution',
    emoji: '🤝',
    context: 'academic',
    discover: {
      scenario: "Group project disagreement about approach, team member not pulling their weight, conflict with professor about grades, peer pressure about academic choices. How do you navigate these conflicts without burning bridges?",
      problemExplanation: [
        "Group Work Conflicts: Different opinions on project direction and workload distribution",
        "Academic Disputes: Disagreements with professors about grades, feedback, or expectations",
        "Peer Pressure: Pressure from friends about academic choices, study habits, or career paths",
        "Avoidance: Tendency to avoid conflict rather than address issues directly"
      ],
      solutionApproach: [
        "Direct Communication: Addressing issues early before they escalate",
        "Active Listening: Understanding all perspectives before proposing solutions",
        "Collaborative Problem-Solving: Finding win-win solutions that work for everyone",
        "Professional Boundaries: Maintaining respect while advocating for yourself"
      ]
    },
    video: {
      title: "Conflict Resolution for Academic Success",
      duration: 5,
      content: [
        "Group Project Management: Handling disagreements and unequal participation",
        "Professor Communication: Addressing grades, feedback, and academic concerns professionally",
        "Peer Pressure Navigation: Standing up for your academic choices and values",
        "Study Group Dynamics: Resolving conflicts in collaborative learning environments",
        "Academic Integrity: Handling situations involving cheating, plagiarism, or unfair practices"
      ]
    },
    quiz: {
      title: "Test Your Conflict Resolution Knowledge",
      questions: [
        {
          id: 1,
          question: "Group member isn't contributing - how do you address this?",
          options: [
            "Do their work for them",
            "Talk to them privately, express concerns, and offer support",
            "Complain to the professor immediately",
            "Ignore the problem"
          ],
          correct: 1,
          explanation: "Direct, private communication often resolves issues effectively."
        },
        {
          id: 2,
          question: "Professor gives you a lower grade than expected - how do you respond?",
          options: [
            "Argue with them immediately",
            "Request a meeting to understand the grading criteria and discuss your work",
            "Accept it without question",
            "Complain to other students"
          ],
          correct: 1,
          explanation: "Professional approach shows maturity and respect."
        },
        {
          id: 3,
          question: "What's the best way to resolve conflicts in study groups?",
          options: [
            "Let one person make all decisions",
            "Discuss issues openly, listen to all perspectives, and find compromises",
            "Avoid discussing problems",
            "Form separate study groups"
          ],
          correct: 1,
          explanation: "Open communication and compromise build stronger teams."
        },
        {
          id: 4,
          question: "How do you handle peer pressure about academic choices?",
          options: [
            "Always follow what your friends do",
            "Make decisions based on your goals and values, communicate them respectfully",
            "Avoid your friends",
            "Try to change your friends' minds"
          ],
          correct: 1,
          explanation: "Stay true to your values while respecting others' choices."
        },
        {
          id: 5,
          question: "What's the appropriate way to dispute a grade with a professor?",
          options: [
            "Send an angry email",
            "Request a meeting, bring your work, and discuss the grading criteria professionally",
            "Complain to other professors",
            "Accept any grade without question"
          ],
          correct: 1,
          explanation: "Professional approach with evidence shows respect and maturity."
        }
      ]
    },
    challenge: {
      title: "Role-play Conflict Resolution",
      description: "Role-play conflict resolution scenarios with study partners",
      instructions: [
        "Choose scenarios: Pick 2-3 common academic conflict situations",
        "Role-play: Take turns playing different roles (student, professor, group member)",
        "Practice techniques: Use active listening, 'I' statements, and collaborative problem-solving",
        "Debrief: Discuss what worked, what was challenging, and how to improve",
        "Apply: Use these techniques in your next real academic conflict"
      ],
      successCriteria: [
        "Used active listening in all scenarios",
        "Expressed concerns using 'I' statements",
        "Proposed collaborative solutions",
        "Maintained respectful communication",
        "Felt more confident handling conflicts"
      ]
    },
    feedback: {
      strengths: ["You're naturally empathetic and good at understanding different perspectives"],
      improvements: ["You avoid conflict but need to learn to address issues directly and assertively"],
      nextSteps: ["Practice expressing your needs and boundaries in low-stakes situations"]
    },
    badge: {
      name: "Peacemaker",
      emoji: "🤝",
      description: "Mastered conflict resolution skills for academic and professional success"
    },
    shareMessage: "I can resolve any conflict! Just learned to navigate disagreements like a pro! 🤝 #ConflictResolution #Leadership"
  },
  {
    id: 'presentation-skills',
    title: 'Presentation Skills',
    emoji: '📊',
    context: 'professional',
    discover: {
      scenario: "Client presentation tomorrow, your slides are boring, audience is disengaged, and you're reading from notes. Your manager is watching, and this could impact your performance review. How do you create engaging presentations that actually connect with your audience?",
      problemExplanation: [
        "Boring Content: Text-heavy slides, lack of visual appeal, and poor storytelling",
        "Audience Disengagement: Reading from notes, lack of eye contact, and monotone delivery",
        "Poor Structure: Unclear organization, missing key points, and weak conclusions",
        "Performance Pressure: High-stakes situations affecting confidence and delivery"
      ],
      solutionApproach: [
        "Visual Design: Clean slides, relevant images, and clear data visualization",
        "Storytelling: Compelling narratives that connect with audience needs and interests",
        "Audience Engagement: Interactive elements, questions, and two-way communication",
        "Confident Delivery: Practice, preparation, and techniques to manage nerves"
      ]
    },
    video: {
      title: "Presentation Skills for Workplace Success",
      duration: 5,
      content: [
        "Visual Design Principles: Creating engaging slides that support your message",
        "Storytelling Techniques: Structuring presentations with compelling narratives",
        "Audience Engagement: Interactive elements and two-way communication",
        "Confident Delivery: Managing nerves and projecting confidence",
        "Handling Questions: Responding to audience questions and feedback professionally"
      ]
    },
    quiz: {
      title: "Test Your Presentation Skills Knowledge",
      questions: [
        {
          id: 1,
          question: "How do you make boring data interesting in client presentations?",
          options: [
            "Use lots of text",
            "Create visual charts, tell a story with the data, and connect it to client benefits",
            "Just show the numbers",
            "Avoid data completely"
          ],
          correct: 1,
          explanation: "Visual storytelling makes data meaningful and engaging."
        },
        {
          id: 2,
          question: "What's the difference between academic and professional presentation styles?",
          options: [
            "No difference",
            "Academic focuses on theory, professional focuses on practical applications and results",
            "Professional is always more formal",
            "Academic is always longer"
          ],
          correct: 1,
          explanation: "Professional presentations focus on practical value and results."
        },
        {
          id: 3,
          question: "How do you handle questions during workplace presentations?",
          options: [
            "Avoid questions",
            "Listen carefully, acknowledge the question, and provide thoughtful responses",
            "Answer quickly and move on",
            "Let someone else answer"
          ],
          correct: 1,
          explanation: "Engaging with questions shows confidence and expertise."
        },
        {
          id: 4,
          question: "What's the best way to present to senior management?",
          options: [
            "Use lots of technical jargon",
            "Focus on high-level insights, business impact, and clear recommendations",
            "Show all the details",
            "Be very casual"
          ],
          correct: 1,
          explanation: "Senior management wants strategic insights and clear recommendations."
        },
        {
          id: 5,
          question: "How do you handle negative feedback during presentations?",
          options: [
            "Get defensive",
            "Listen actively, acknowledge the feedback, and ask for clarification",
            "Ignore it",
            "Argue your point"
          ],
          correct: 1,
          explanation: "Professional handling of feedback shows maturity and openness to improvement."
        }
      ]
    },
    challenge: {
      title: "Create Engaging Presentation",
      description: "Create engaging slide deck for a client presentation",
      instructions: [
        "Choose a topic: A project you've worked on, a skill you want to highlight, or a business idea",
        "Design slides: Create 5-7 slides with clear visuals, minimal text, and compelling content",
        "Practice presentation: Rehearse your presentation focusing on storytelling and engagement",
        "Record yourself: Present to camera and evaluate your delivery",
        "Get feedback: Share with a friend or colleague and incorporate their suggestions"
      ],
      successCriteria: [
        "Clean, visually appealing slide design",
        "Clear narrative structure with beginning, middle, and end",
        "Minimal text, maximum visual impact",
        "Confident delivery with good eye contact",
        "Engaging storytelling that connects with audience"
      ]
    },
    feedback: {
      strengths: ["Your content is well-researched and your structure is clear"],
      improvements: ["Focus on visual design and storytelling to make your presentations more engaging"],
      nextSteps: ["Practice using more visuals and less text, and work on connecting with your audience emotionally"]
    },
    badge: {
      name: "Presentation Master",
      emoji: "📊",
      description: "Mastered engaging presentation skills for workplace and professional success"
    },
    shareMessage: "My presentations are now captivating! Just learned to tell stories that stick! 📊 #PresentationSkills #ProfessionalGrowth"
  }
];

export const module1Assessment = {
  title: "Communication Skills Final Assessment",
  duration: 60, // minutes
  questions: [
    {
      id: 1,
      question: "In a group project meeting, your teammate is explaining their idea but you disagree. What's the best approach?",
      options: [
        "Interrupt them immediately to share your concerns",
        "Listen completely, then ask clarifying questions before sharing your perspective",
        "Stay quiet and implement your own idea later",
        "Tell them their idea won't work"
      ],
      correct: 1,
      explanation: "Active listening requires understanding the full idea before responding. Ask questions to clarify before sharing concerns."
    },
    {
      id: 2,
      question: "You're presenting to senior management about a project delay. How should you structure your presentation?",
      options: [
        "Start with excuses and blame external factors",
        "Begin with the current status, explain the delay clearly, and present a recovery plan",
        "Focus only on the positive aspects and avoid mentioning the delay",
        "Make it very technical to show your expertise"
      ],
      correct: 1,
      explanation: "Professional presentations should be transparent, solution-focused, and appropriate for the audience level."
    },
    {
      id: 3,
      question: "You need to email a professor about a grade dispute. What's the most professional approach?",
      options: [
        "Send an angry email demanding a grade change",
        "Request a meeting to discuss the grading criteria and your work professionally",
        "Complain to other students about the unfair grading",
        "Accept the grade without question"
      ],
      correct: 1,
      explanation: "Professional communication requires respectful dialogue and seeking understanding before making demands."
    },
    {
      id: 4,
      question: "During a job interview, you notice the interviewer seems distracted. What should you do?",
      options: [
        "Continue speaking as planned",
        "Pause, make eye contact, and ask if they'd like you to clarify anything",
        "Speak louder to get their attention",
        "End the interview early"
      ],
      correct: 1,
      explanation: "Adapting to your audience's engagement level shows communication awareness and professionalism."
    },
    {
      id: 5,
      question: "A colleague gives you negative feedback about your presentation. How do you respond?",
      options: [
        "Defend yourself and explain why they're wrong",
        "Thank them, ask for specific examples, and discuss how to improve",
        "Ignore the feedback completely",
        "Complain to your manager about the colleague"
      ],
      correct: 1,
      explanation: "Professional growth requires accepting feedback gracefully and seeking specific guidance for improvement."
    },
    {
      id: 6,
      question: "You're in a study group and one member isn't contributing. What's the best approach?",
      options: [
        "Do their work for them",
        "Talk to them privately, express concerns, and offer support",
        "Complain to the professor immediately",
        "Exclude them from the group"
      ],
      correct: 1,
      explanation: "Direct, private communication often resolves issues effectively and maintains group harmony."
    },
    {
      id: 7,
      question: "You need to present complex data to a client. How do you make it engaging?",
      options: [
        "Show all the raw data in tables",
        "Create visual charts, tell a story with the data, and connect it to client benefits",
        "Use lots of technical jargon to show expertise",
        "Avoid data completely"
      ],
      correct: 1,
      explanation: "Visual storytelling makes data meaningful and connects information to audience needs."
    },
    {
      id: 8,
      question: "During a family dinner, your parents question your career choice. How do you respond confidently?",
      options: [
        "Avoid eye contact and change the subject",
        "Sit up straight, make eye contact, and explain your decision with passion and reasoning",
        "Get defensive and argue",
        "Agree with them to avoid conflict"
      ],
      correct: 1,
      explanation: "Confident body language and clear communication help convey your authentic self and values."
    },
    {
      id: 9,
      question: "You receive a confusing email from a client. What's the best response?",
      options: [
        "Reply with your best guess about what they mean",
        "Ask clarifying questions to ensure you understand their needs before responding",
        "Forward it to your manager",
        "Ignore it until they follow up"
      ],
      correct: 1,
      explanation: "Clarifying communication prevents misunderstandings and shows professionalism."
    },
    {
      id: 10,
      question: "You're nervous before a big presentation. What's the best way to manage this?",
      options: [
        "Focus on your mistakes and what could go wrong",
        "Practice your opening, visualize success, and focus on your audience's needs",
        "Memorize everything word for word",
        "Avoid practicing to stay spontaneous"
      ],
      correct: 1,
      explanation: "Confidence comes from preparation, positive visualization, and audience-focused thinking."
    }
  ],
  sections: [
    {
      name: "Active Listening", 
      questions: 2,
      context: "Academic and professional scenarios"
    },
    {
      name: "Public Speaking", 
      questions: 2,
      context: "Interview and presentation situations"
    },
    {
      name: "Written Communication",
      questions: 2,
      context: "Email, cover letter, and professional writing"
    },
    {
      name: "Non-verbal Communication",
      questions: 1,
      context: "Body language and personal interactions"
    },
    {
      name: "Conflict Resolution",
      questions: 1,
      context: "Academic and workplace conflict scenarios"
    },
    {
      name: "Presentation Skills",
      questions: 2,
      context: "Professional presentation situations"
    }
  ],
  practicalChallenge: {
    title: "How Communication Skills Help in Career Success",
    duration: 5, // minutes
    requirements: [
      "Clear introduction and conclusion",
      "3 main points with examples",
      "Professional visual aids (slides or props)",
      "Confident delivery with good eye contact",
      "Within 5-minute time limit"
    ]
  },
  scoring: {
    quizQuestions: 100, // points (10 questions × 10 points each)
    practicalPresentation: 0, // points (optional)
    totalPossible: 100
  },
  gradeLevels: [
    { range: "90-100", grade: "Communication Master", description: "Excellent" },
    { range: "80-89", grade: "Communication Expert", description: "Very Good" },
    { range: "70-79", grade: "Communication Proficient", description: "Good" },
    { range: "60-69", grade: "Communication Developing", description: "Needs Improvement" },
    { range: "0-59", grade: "Communication Beginner", description: "Requires Additional Practice" }
  ]
};

// Local Storage Helper Functions
export const saveModuleProgress = (progress: ModuleProgress): void => {
  localStorage.setItem('moduleProgress', JSON.stringify(progress));
};

export const loadModuleProgress = (): ModuleProgress | null => {
  const stored = localStorage.getItem('moduleProgress');
  return stored ? JSON.parse(stored) : null;
};

export const updateSubtopicProgress = (subtopicId: string, score: number, response: string): void => {
  const progress = loadModuleProgress() || {
    moduleId: 'communication-skills',
    currentSubtopic: 1,
    completedSubtopics: [],
    quizScores: {},
    badges: [],
    challengeResponses: {},
    lastAccessed: new Date().toISOString(),
    totalXP: 0
  };

  // Update progress
  progress.quizScores[subtopicId] = score;
  progress.challengeResponses[subtopicId] = response;
  
  if (!progress.completedSubtopics.includes(parseInt(subtopicId.split('-')[1]))) {
    progress.completedSubtopics.push(parseInt(subtopicId.split('-')[1]));
  }
  
  progress.totalXP += score * 10; // 10 XP per quiz point
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
