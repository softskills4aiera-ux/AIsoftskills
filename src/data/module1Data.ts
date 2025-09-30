// Module 1: Communication Skills
// Clean, structured data for Gen Z learners

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

// Module 1 Data - Communication Skills
export const module1Data: SubtopicData[] = [
  // Subtopic 1: Active Listening
  {
    id: 'active-listening',
    title: 'Active Listening',
    emoji: '👂',
    context: 'professional',
    discover: {
      scenario: "You're in a team meeting discussing a new project. Your colleague is explaining their concerns, but you're distracted by your phone notifications and thinking about your lunch plans. When they finish, you realize you missed key details and can't contribute meaningfully to the discussion.",
      problemExplanation: [
        "Poor listening leads to misunderstandings and missed opportunities",
        "Distractions prevent you from building strong relationships",
        "You appear disinterested and unprofessional to colleagues"
      ],
      solutionApproach: [
        "Develop focused attention and eliminate distractions",
        "Learn to ask clarifying questions that show engagement",
        "Build stronger professional relationships through active listening"
      ]
    },
    video: {
      title: "The Art of Active Listening",
      duration: 8.5,
      content: [
        "Understanding the difference between hearing and listening",
        "Techniques for maintaining focus and attention",
        "Non-verbal cues that show you're engaged",
        "Asking effective follow-up questions",
        "Practicing active listening in different contexts"
      ],
      script: "In this video, we'll explore the fundamental skill of active listening..."
    },
    quiz: {
      title: "Active Listening Quiz",
      questions: [
        {
          id: 1,
          question: "You're in a job interview and the interviewer is explaining the company culture. You notice they're speaking slowly and seem passionate about their values. What's the best way to show active listening?",
          options: [
            "Nod occasionally while checking your phone for messages",
            "Maintain eye contact, nod, and ask a follow-up question about how those values impact daily work",
            "Interrupt to share your own experience with company values",
            "Take detailed notes without looking up from your paper"
          ],
          correct: 1,
          explanation: "Active listening involves full attention, non-verbal engagement, and thoughtful responses. Asking follow-up questions shows genuine interest and helps you understand the role better."
        },
        {
          id: 2,
          question: "During a group project meeting, your teammate is explaining their research findings. They seem nervous and keep looking down. How can you encourage them to continue sharing?",
          options: [
            "Tell them to speak up and be more confident",
            "Lean forward, maintain eye contact, and say 'That's really interesting, can you tell me more about...'",
            "Wait for them to finish and then immediately present your own ideas",
            "Check your phone while they're talking to show you're multitasking"
          ],
          correct: 1,
          explanation: "Encouraging body language and asking follow-up questions creates a safe space for sharing. This builds trust and helps team members feel valued."
        },
        {
          id: 3,
          question: "Your friend is telling you about a difficult situation with their roommate. They're clearly upset and keep repeating the same points. What should you do?",
          options: [
            "Give them advice immediately to solve their problem",
            "Listen patiently, acknowledge their feelings, and ask what they need from you",
            "Change the subject to something more positive",
            "Tell them to stop complaining and deal with it"
          ],
          correct: 1,
          explanation: "Sometimes people need to be heard and understood before they can move forward. Acknowledging feelings and asking what they need shows empathy and support."
        },
        {
          id: 4,
          question: "In a virtual team meeting, your manager is explaining new procedures. The connection is poor and you're missing some words. What's the best approach?",
          options: [
            "Pretend you understand and figure it out later",
            "Ask them to repeat the key points and confirm your understanding",
            "Wait for someone else to ask questions",
            "Send a private message to a colleague asking for clarification"
          ],
          correct: 1,
          explanation: "It's better to ask for clarification than to make assumptions. This shows professionalism and ensures you understand expectations correctly."
        },
        {
          id: 5,
          question: "Your professor is giving a lecture on a complex topic. You're struggling to follow their explanation. What's the most effective way to engage?",
          options: [
            "Take notes on everything they say without asking questions",
            "Ask specific questions about the parts you don't understand",
            "Wait until after class to ask questions",
            "Focus on memorizing the key terms they mention"
          ],
          correct: 1,
          explanation: "Asking questions during the lecture shows engagement and helps clarify concepts immediately. This benefits both you and other students who might have similar questions."
        }
      ]
    },
    challenge: {
      title: "Active Listening Challenge",
      description: "Practice active listening in real-world scenarios",
      contexts: {
        academic: {
          title: "Study Group Active Listening",
          description: "Practice active listening during study group sessions",
      instructions: [
            "Join a study group or create one with classmates",
            "During discussions, focus entirely on what others are saying",
            "Ask at least 3 clarifying questions per session",
            "Summarize what you heard before contributing your own ideas",
            "Reflect on how active listening improved the group dynamic"
      ],
      successCriteria: [
            "Demonstrated full attention during group discussions",
            "Asked thoughtful, clarifying questions",
            "Successfully summarized others' points before adding your own",
            "Received positive feedback from group members about your listening"
          ]
        },
        professional: {
          title: "Workplace Listening Excellence",
          description: "Apply active listening skills in professional settings",
          instructions: [
            "During meetings, practice the 80/20 rule (listen 80%, speak 20%)",
            "Take notes on key points and ask follow-up questions",
            "Use non-verbal cues like nodding and maintaining eye contact",
            "Summarize what you heard before responding",
            "Reflect on how this improved your professional relationships"
          ],
          successCriteria: [
            "Consistently demonstrated active listening in meetings",
            "Asked relevant follow-up questions that added value",
            "Received positive feedback from colleagues about your engagement",
            "Successfully avoided misunderstandings through better listening"
          ]
        },
        personal: {
          title: "Relationship Listening Practice",
          description: "Strengthen personal relationships through active listening",
      instructions: [
            "Choose a family member or close friend for this challenge",
            "Have a conversation where you focus entirely on listening",
            "Ask open-ended questions to encourage deeper sharing",
            "Practice reflecting back what you heard",
            "Notice how this changes the quality of your relationship"
      ],
      successCriteria: [
            "Demonstrated genuine interest in the other person's perspective",
            "Asked questions that encouraged deeper sharing",
            "Successfully reflected back what you heard",
            "Received positive feedback about feeling heard and understood"
          ]
        }
      }
    },
    feedback: {
      strengths: [
        "You demonstrate genuine interest in others' perspectives",
        "Your follow-up questions show active engagement",
        "You create a safe space for others to share"
      ],
      improvements: [
        "Practice maintaining eye contact during conversations",
        "Work on eliminating distractions during important discussions",
        "Develop techniques for remembering key points"
      ],
      nextSteps: [
        "Practice active listening in your next team meeting",
        "Try the echo technique with a friend or colleague",
        "Set a goal to ask at least 3 clarifying questions per day"
      ]
    },
    badge: {
      name: "Active Listener",
      emoji: "👂",
      description: "Master of focused attention and empathetic listening"
    },
    shareMessage: "Just mastered active listening skills! Ready to build stronger relationships through truly hearing others. #CommunicationSkills #GenZReady"
  }
];

// Assessment for Module 1
export const module1Assessment: AssessmentData = {
  id: 'module1-assessment',
  title: 'Communication Skills Assessment',
  description: 'Comprehensive test covering all communication skills subtopics',
      questions: [
    // Questions from Active Listening (5 questions)
        {
          id: 1,
      question: "In a job interview, the interviewer asks about your experience with team projects. You should:",
          options: [
        "Immediately start listing all your achievements",
        "Listen to the full question, pause, then provide a relevant example",
        "Ask them to repeat the question if you didn't hear it clearly",
        "Give a brief answer and ask about the company culture"
          ],
          correct: 1,
      explanation: "Active listening involves hearing the complete question before responding, which allows you to provide a more relevant and thoughtful answer."
        },
        {
          id: 2,
      question: "During a group project meeting, your teammate is explaining their research. The best way to show engagement is:",
          options: [
        "Nod while checking your phone",
        "Maintain eye contact and ask clarifying questions",
        "Interrupt to share your own ideas",
        "Take detailed notes without looking up"
          ],
          correct: 1,
      explanation: "Active listening requires full attention and engagement, demonstrated through eye contact and thoughtful questions."
        },
        {
          id: 3,
      question: "Your friend is sharing a personal problem. The most supportive response is:",
          options: [
        "Immediately offer solutions",
        "Listen fully, acknowledge their feelings, and ask what they need",
        "Change the subject to something positive",
        "Tell them to stop complaining"
          ],
          correct: 1,
      explanation: "Sometimes people need to be heard and understood before they can move forward. Acknowledging feelings shows empathy."
        },
        {
          id: 4,
      question: "In a virtual meeting with poor connection, you miss some words. You should:",
          options: [
        "Pretend you understand and figure it out later",
        "Ask for clarification on the key points you missed",
        "Wait for someone else to ask questions",
        "Send a private message to a colleague"
          ],
          correct: 1,
      explanation: "It's better to ask for clarification than to make assumptions. This shows professionalism and ensures understanding."
        },
        {
          id: 5,
      question: "During a lecture, you're struggling to follow a complex explanation. The best approach is:",
          options: [
        "Take notes on everything without asking questions",
        "Ask specific questions about unclear parts",
        "Wait until after class to ask questions",
        "Focus on memorizing key terms"
      ],
      correct: 1,
      explanation: "Asking questions during the lecture shows engagement and helps clarify concepts immediately for everyone."
    },

    // Questions from Public Speaking (5 questions)
    {
      id: 6,
      question: "You're presenting your final project to a class of 30 students. To manage nervousness, you should:",
          options: [
        "Memorize your entire presentation word-for-word",
        "Practice with friends, focus on your message, and use breathing techniques",
        "Avoid eye contact to reduce anxiety",
        "Read directly from your slides"
          ],
          correct: 1,
      explanation: "Preparation, practice, and breathing techniques help manage nervousness while maintaining connection with your audience."
        },
        {
      id: 7,
      question: "During a job interview presentation, you notice the interviewer looking confused. You should:",
          options: [
        "Continue with your planned presentation",
        "Pause, ask if they have questions, and clarify the confusing part",
        "Speed up to finish quickly",
        "Ignore their reaction and keep going"
          ],
          correct: 1,
      explanation: "Adapting to your audience's needs shows good communication skills and ensures your message is understood."
        },
        {
      id: 8,
      question: "You're giving a presentation about climate change to a mixed audience. The best approach is:",
          options: [
        "Use only scientific terminology to sound professional",
        "Start with relatable examples, use clear language, and include visual aids",
        "Focus only on statistics and data",
        "Speak as quickly as possible to cover more content"
          ],
          correct: 1,
      explanation: "Effective presentations connect with the audience through relatable examples and clear communication."
        },
        {
      id: 9,
      question: "Your voice starts shaking during an important presentation. The best response is:",
          options: [
        "Stop speaking and apologize",
        "Take a deep breath, slow down, and continue with confidence",
        "Speak louder to cover the shaking",
        "Rush through the rest quickly"
          ],
          correct: 1,
      explanation: "Managing nervousness with breathing and pacing shows professionalism and helps you regain control."
        },
        {
      id: 10,
      question: "When presenting virtually, the most important factor for engagement is:",
          options: [
        "Having perfect lighting and background",
        "Maintaining eye contact with the camera and speaking clearly",
        "Using lots of animations in your slides",
        "Speaking as fast as possible to keep attention"
          ],
          correct: 1,
      explanation: "Virtual presentations require extra focus on eye contact and clear speech to maintain audience engagement."
    },

    // Questions from Written Communication (5 questions)
    {
      id: 11,
      question: "You need to email your professor about a grade dispute. The most professional approach is:",
          options: [
        "Send an immediate angry email demanding an explanation",
        "Write a respectful email with specific examples and request a meeting",
        "Post about it on social media first",
        "Send a text message instead"
          ],
          correct: 1,
      explanation: "Professional written communication requires respect, specificity, and appropriate channels for serious matters."
        },
        {
      id: 12,
      question: "When writing a cover letter for a job application, you should:",
          options: [
        "Use the same template for all applications",
        "Customize it for the specific role, highlight relevant skills, and show enthusiasm",
        "Keep it under 50 words",
        "Focus only on your academic achievements"
          ],
          correct: 1,
      explanation: "Effective cover letters are tailored to the specific role and demonstrate how your skills match their needs."
        },
        {
      id: 13,
      question: "You're writing a group project report. The best approach for collaboration is:",
          options: [
        "Have one person write everything",
        "Assign sections, use shared documents, and review each other's work",
        "Write your part separately and combine at the end",
        "Use only bullet points"
          ],
          correct: 1,
      explanation: "Collaborative writing requires clear organization, shared tools, and peer review for quality and consistency."
        },
        {
      id: 14,
      question: "When writing a complaint email to a company, the most effective approach is:",
          options: [
        "Use all caps and exclamation marks to show urgency",
        "Be specific about the problem, provide evidence, and suggest a solution",
        "Threaten legal action immediately",
        "Send multiple emails to different departments"
          ],
          correct: 1,
      explanation: "Professional complaint writing requires specificity, evidence, and constructive suggestions for resolution."
        },
        {
      id: 15,
      question: "You're writing a LinkedIn post about your internship experience. The best strategy is:",
          options: [
        "Share only positive experiences",
        "Be authentic, share both challenges and learnings, and engage with comments",
        "Use only hashtags without text",
        "Copy someone else's successful post"
          ],
          correct: 1,
      explanation: "Authentic professional writing on social media builds credibility and meaningful connections."
    },

    // Questions from Non-Verbal Communication (5 questions)
    {
      id: 16,
      question: "During a job interview, your body language should convey:",
          options: [
        "Relaxation by slouching in your chair",
        "Confidence through good posture, appropriate eye contact, and open gestures",
        "Nervousness by fidgeting with your hands",
        "Disinterest by avoiding eye contact"
          ],
          correct: 1,
      explanation: "Professional body language demonstrates confidence, engagement, and respect for the interviewer."
        },
        {
      id: 17,
      question: "In a virtual meeting, the most important non-verbal element is:",
          options: [
        "Having a perfect background",
        "Maintaining eye contact with the camera and appropriate facial expressions",
        "Wearing formal business attire",
        "Having perfect lighting"
          ],
          correct: 1,
      explanation: "Virtual communication relies heavily on facial expressions and eye contact to convey engagement and understanding."
        },
        {
      id: 18,
      question: "When giving a presentation, your gestures should:",
          options: [
        "Be minimal to avoid distraction",
        "Emphasize key points naturally and help illustrate concepts",
        "Be large and dramatic for attention",
        "Follow a specific pattern regardless of content"
          ],
          correct: 1,
      explanation: "Effective gestures support your message and help the audience understand and remember key points."
        },
        {
      id: 19,
      question: "During a difficult conversation with a friend, your body language should:",
          options: [
        "Show dominance by standing tall",
        "Be open and approachable, showing you're listening",
        "Cross your arms to show you're serious",
        "Avoid physical contact completely"
          ],
          correct: 1,
      explanation: "Supportive body language in personal conversations shows empathy and creates a safe space for discussion."
        },
        {
      id: 20,
      question: "When meeting someone for the first time, the most important non-verbal cue is:",
          options: [
        "A firm handshake",
        "Genuine smile and appropriate eye contact",
        "Perfect posture",
        "Expensive clothing"
          ],
          correct: 1,
      explanation: "First impressions are most influenced by genuine warmth and engagement, not physical attributes."
    },

    // Questions from Conflict Resolution (5 questions)
    {
      id: 21,
      question: "Your roommate is playing loud music while you're studying. The best approach is:",
      options: [
        "Turn up your own music louder",
        "Calmly explain the situation and find a compromise",
        "Complain to other roommates",
        "Wait until they're gone to study"
      ],
      correct: 1,
      explanation: "Effective conflict resolution requires direct, respectful communication and willingness to find solutions."
    },
    {
      id: 22,
      question: "During a group project, two team members are arguing about the approach. You should:",
      options: [
        "Take sides with the person you agree with",
        "Facilitate discussion, help them find common ground, and focus on the project goal",
        "Avoid getting involved",
        "Report them to the professor"
      ],
      correct: 1,
      explanation: "Conflict resolution skills help maintain team harmony and focus on shared objectives."
    },
    {
      id: 23,
      question: "A friend is upset with you but won't tell you why. The best response is:",
      options: [
        "Ignore them until they get over it",
        "Approach them privately, acknowledge their feelings, and ask to talk",
        "Ask mutual friends what's wrong",
        "Confront them publicly"
      ],
      correct: 1,
      explanation: "Addressing conflicts directly and privately shows respect and creates space for honest communication."
    },
    {
      id: 24,
      question: "You disagree with a professor's grading on an assignment. The professional approach is:",
      options: [
        "Argue with them in front of the class",
        "Schedule office hours, present your case respectfully, and listen to their feedback",
        "Complain to other students",
        "Accept the grade without question"
      ],
      correct: 1,
      explanation: "Professional conflict resolution requires respectful dialogue and willingness to understand different perspectives."
    },
    {
      id: 25,
      question: "Two friends are having a disagreement and want you to take sides. You should:",
      options: [
        "Choose the side of your closer friend",
        "Stay neutral, encourage them to talk directly, and offer to mediate if needed",
        "Avoid both of them",
        "Tell them to figure it out themselves"
      ],
      correct: 1,
      explanation: "Neutral mediation helps friends resolve conflicts without damaging relationships."
    },

    // Questions from Presentation Skills (5 questions)
    {
      id: 26,
      question: "You're presenting to a diverse audience with different technical backgrounds. The best approach is:",
      options: [
        "Use only technical jargon to sound professional",
        "Start with basics, use analogies, and provide multiple examples",
        "Focus only on the most advanced concepts",
        "Speak very slowly to ensure understanding"
      ],
      correct: 1,
      explanation: "Effective presentations adapt to audience needs and use various techniques to ensure comprehension."
    },
    {
      id: 27,
      question: "Your presentation is running over time. The best response is:",
      options: [
        "Skip to the conclusion quickly",
        "Acknowledge the time constraint, prioritize key points, and offer to continue discussion later",
        "Speak faster to fit everything in",
        "Ignore the time limit"
      ],
      correct: 1,
      explanation: "Time management in presentations shows respect for the audience and professional planning skills."
    },
    {
      id: 28,
      question: "During a virtual presentation, your internet connection becomes unstable. You should:",
      options: [
        "Continue as if nothing is wrong",
        "Acknowledge the issue, switch to audio-only if needed, and adjust your approach",
        "End the presentation immediately",
        "Blame the technology and stop"
      ],
      correct: 1,
      explanation: "Adapting to technical challenges demonstrates professionalism and commitment to effective communication."
    },
    {
      id: 29,
      question: "You're presenting research findings that challenge popular beliefs. The best approach is:",
      options: [
        "Present only the data that supports your argument",
        "Present all evidence fairly, acknowledge limitations, and invite discussion",
        "Avoid presenting controversial findings",
        "Present your findings as absolute truth"
      ],
      correct: 1,
      explanation: "Ethical presentation of research requires honesty, transparency, and openness to different perspectives."
    },
    {
      id: 30,
      question: "After your presentation, someone asks a question you can't answer. The best response is:",
      options: [
        "Make up an answer to sound knowledgeable",
        "Acknowledge you don't know, offer to find out, and provide contact information for follow-up",
        "Ignore the question and move on",
        "Deflect to someone else immediately"
      ],
      correct: 1,
      explanation: "Honesty about knowledge limitations builds credibility and shows commitment to providing accurate information."
    }
  ],
  gradingScale: {
    excellent: { 
      min: 90, 
      max: 100, 
      message: "Outstanding! You've mastered communication skills and are ready to excel in any professional setting.", 
      xpReward: 100 
    },
    good: { 
      min: 80, 
      max: 89, 
      message: "Great job! You have strong communication skills with room for continued growth.", 
      xpReward: 75 
    },
    satisfactory: { 
      min: 70, 
      max: 79, 
      message: "Good foundation! Keep practicing to strengthen your communication skills.", 
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

// Helper functions
export const updateSubtopicProgress = (subtopicId: string, progress: number): void => {
  // Implementation for updating progress
  console.log(`Updated progress for ${subtopicId}: ${progress}%`);
};

export const generatePersonalizedFeedback = (responses: any[]): string => {
  // Implementation for generating AI feedback
  return "Personalized feedback based on your responses...";
};

// Export for compatibility with existing imports
export const module1Subtopics = module1Data;

// Progress management functions
export const loadModuleProgress = (): any => {
  // Implementation for loading module progress
  return {};
};

export const saveModuleProgress = (progress: any): void => {
  // Implementation for saving module progress
  console.log('Saving module progress:', progress);
};
