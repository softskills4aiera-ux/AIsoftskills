// Module 8: Managing Mental & Physical Health Data Structure
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

export const module8Subtopics: SubtopicData[] = [
  {
    id: 'stress-management',
    title: 'Stress Management',
    emoji: '🧘',
    context: 'academic',
    discover: {
      scenario: "You're in the middle of finals week with 5 exams, 3 papers due, and a part-time job. You're feeling overwhelmed, having trouble sleeping, and your anxiety is through the roof. Your performance is suffering, and you're worried you might burn out completely. How do you manage this stress effectively and maintain your well-being?",
      problemExplanation: [
        "Overwhelming Pressure: Multiple deadlines and responsibilities creating intense stress",
        "Physical Symptoms: Sleep problems, anxiety, and physical tension affecting performance",
        "Performance Decline: Stress impacting academic performance and decision-making",
        "Burnout Risk: Chronic stress leading to exhaustion and potential mental health issues"
      ],
      solutionApproach: [
        "Stress Identification: Recognizing stress triggers and early warning signs",
        "Coping Strategies: Developing healthy stress management techniques and routines",
        "Time Management: Creating realistic schedules and prioritizing tasks effectively",
        "Support Systems: Building networks and seeking help when needed"
      ]
    },
    video: {
      title: "Master Stress Management for Success",
      duration: 5,
      content: [
        "Stress Identification: Recognizing stress triggers and early warning signs",
        "Coping Strategies: Developing healthy stress management techniques and routines",
        "Time Management: Creating realistic schedules and prioritizing tasks effectively",
        "Support Systems: Building networks and seeking help when needed",
        "Prevention: Building resilience and preventing chronic stress"
      ],
      script: `[HOOK - 30 seconds]
"Stress is inevitable, but how you manage it determines whether it helps or hurts you. Today, I'll show you how to master stress management and turn pressure into performance in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, stress management helps you:
- Handle academic pressure, exams, and deadlines effectively
- Maintain mental health and well-being during challenging periods
- Perform at your best under pressure and avoid burnout

Techniques: Identify stress triggers, use breathing exercises, create study schedules, practice time management, seek support.

Example: Sarah managed her finals week stress by creating a realistic study schedule, using 5-minute breathing breaks between study sessions, and reaching out to her study group for support, improving her performance by 30%."

[PROFESSIONAL - 2 minutes]
"In your career, stress management helps you:
- Handle workplace pressure, deadlines, and high-stakes situations
- Maintain work-life balance and prevent professional burnout
- Lead teams effectively during challenging periods

Techniques: Set boundaries, delegate effectively, use stress-reduction techniques, maintain perspective, build support networks.

Example: Mike managed a high-pressure project by breaking it into manageable tasks, using meditation during breaks, and maintaining clear communication with his team, delivering the project on time with reduced stress."

[PERSONAL - 1 minute]
"In personal life, stress management helps you:
- Handle life transitions, family responsibilities, and personal challenges
- Maintain relationships and personal well-being during difficult times
- Build resilience for future challenges

Techniques: Practice self-care, maintain social connections, use relaxation techniques, set personal boundaries, seek professional help when needed.

Example: Tom managed family stress during a difficult period by establishing daily self-care routines, maintaining regular exercise, and seeking counseling support, improving his family relationships and personal well-being."

[CALL TO ACTION - 30 seconds]
"Ready to master stress management? Start by identifying your stress triggers and implementing one healthy coping strategy today. Remember, great stress management builds resilience and improves performance. Begin today!"`
    },
    quiz: {
      title: "Test Your Stress Management Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the first step in effective stress management?",
          options: [
            "Avoid all stressful situations",
            "Identify your stress triggers and early warning signs",
            "Work harder to overcome stress",
            "Ignore stress until it goes away"
          ],
          correct: 1,
          explanation: "The first step is to identify your stress triggers and early warning signs."
        },
        {
          id: 2,
          question: "What are healthy stress management techniques?",
          options: [
            "Avoiding all responsibilities",
            "Breathing exercises, time management, and seeking support",
            "Working longer hours",
            "Isolating yourself from others"
          ],
          correct: 1,
          explanation: "Healthy techniques include breathing exercises, time management, and seeking support."
        },
        {
          id: 3,
          question: "How does time management help with stress?",
          options: [
            "It eliminates all deadlines",
            "It creates realistic schedules and helps prioritize tasks effectively",
            "It makes work easier",
            "It reduces the amount of work"
          ],
          correct: 1,
          explanation: "Time management creates realistic schedules and helps prioritize tasks effectively."
        },
        {
          id: 4,
          question: "What is the role of support systems in stress management?",
          options: [
            "They do all the work for you",
            "They provide emotional support, practical help, and different perspectives",
            "They eliminate stress completely",
            "They are not important"
          ],
          correct: 1,
          explanation: "Support systems provide emotional support, practical help, and different perspectives."
        },
        {
          id: 5,
          question: "How do you prevent chronic stress?",
          options: [
            "By avoiding all challenges",
            "By building resilience, maintaining boundaries, and practicing self-care",
            "By working harder",
            "By ignoring problems"
          ],
          correct: 1,
          explanation: "Prevent chronic stress by building resilience, maintaining boundaries, and practicing self-care."
        }
      ]
    },
    challenge: {
      title: "Stress Management Challenge",
      description: "Develop and implement a personal stress management plan",
      instructions: [
        "Identify triggers: Recognize your personal stress triggers and warning signs",
        "Choose techniques: Select 3-5 stress management techniques that work for you",
        "Create routine: Develop a daily stress management routine",
        "Practice regularly: Implement your techniques consistently for at least one week",
        "Evaluate and adjust: Assess effectiveness and make improvements"
      ],
      successCriteria: [
        "Identified personal stress triggers and warning signs",
        "Selected appropriate stress management techniques",
        "Created and maintained a daily stress management routine",
        "Practiced techniques consistently for at least one week",
        "Demonstrated improved stress management and well-being"
      ]
    },
    feedback: {
      strengths: [
        "Excellent identification of stress triggers and warning signs",
        "Strong selection and implementation of stress management techniques",
        "Good creation and maintenance of stress management routines",
        "Clear demonstration of improved stress management and well-being"
      ],
      improvements: [
        "Consider more diverse stress management techniques and approaches",
        "Improve consistency in practicing stress management routines",
        "Better integration of stress management into daily life",
        "Stronger focus on building long-term resilience and prevention"
      ],
      nextSteps: [
        "Practice different stress management techniques and find what works best",
        "Develop skills in advanced stress management and resilience building",
        "Apply stress management to challenging real-world situations",
        "Learn about mindfulness, meditation, and other advanced techniques"
      ]
    },
    badge: {
      name: "Stress Manager",
      emoji: "🧘",
      description: "Demonstrated excellent stress management and resilience building skills"
    },
    shareMessage: "Just mastered stress management! 🎉 Developed effective coping strategies, created healthy routines, and built resilience for life's challenges. Ready to handle pressure with confidence! #StressManagement #Resilience #Wellbeing"
  },
  {
    id: 'work-life-balance',
    title: 'Work-Life Balance',
    emoji: '⚖️',
    context: 'professional',
    discover: {
      scenario: "You've been working 60+ hours per week for months, constantly checking emails on weekends, and missing important family events. Your relationships are suffering, you're exhausted, and you're starting to resent your job. You love your work but feel like you're losing yourself. How do you create a sustainable work-life balance that allows you to excel professionally while maintaining your personal well-being?",
      problemExplanation: [
        "Work Overload: Excessive work hours and constant availability expectations",
        "Boundary Blurring: Work responsibilities spilling into personal time and relationships",
        "Relationship Strain: Missing important personal events and connections",
        "Identity Loss: Losing sense of self outside of work and career"
      ],
      solutionApproach: [
        "Boundary Setting: Creating clear boundaries between work and personal life",
        "Time Management: Prioritizing and protecting personal time effectively",
        "Communication: Setting expectations with colleagues, managers, and family",
        "Self-Care: Maintaining personal interests, relationships, and well-being"
      ]
    },
    video: {
      title: "Achieve Sustainable Work-Life Balance",
      duration: 5,
      content: [
        "Boundary Setting: Creating clear boundaries between work and personal life",
        "Time Management: Prioritizing and protecting personal time effectively",
        "Communication: Setting expectations with colleagues, managers, and family",
        "Self-Care: Maintaining personal interests, relationships, and well-being",
        "Sustainability: Building long-term balance that supports both career and personal life"
      ],
      script: `[HOOK - 30 seconds]
"Work-life balance isn't about perfect equality - it's about creating sustainable harmony between your career and personal life. Today, I'll show you how to achieve work-life balance that supports both your success and well-being in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, work-life balance helps you:
- Manage academic workload while maintaining social life and personal interests
- Avoid burnout during intense study periods and exam seasons
- Build healthy habits that will serve you throughout your career

Techniques: Set study boundaries, schedule personal time, maintain social connections, pursue hobbies, get adequate rest.

Example: Lisa maintained work-life balance during her senior year by setting strict study hours, scheduling regular social activities, and pursuing her photography hobby, improving both her grades and personal satisfaction."

[PROFESSIONAL - 2 minutes]
"In your career, work-life balance helps you:
- Maintain high performance while preserving personal relationships and health
- Avoid burnout and maintain long-term career sustainability
- Lead by example and create healthy workplace cultures

Techniques: Set work boundaries, communicate availability clearly, delegate effectively, prioritize self-care, maintain personal interests.

Example: Mike achieved work-life balance by setting clear work hours, using his vacation time, and maintaining his passion for hiking, leading to improved job performance and personal fulfillment."

[PERSONAL - 1 minute]
"In personal life, work-life balance helps you:
- Maintain strong relationships with family and friends
- Pursue personal interests and hobbies that bring joy
- Take care of your physical and mental health

Techniques: Protect personal time, communicate needs clearly, maintain relationships, pursue passions, practice self-care.

Example: Tom improved his work-life balance by setting phone-free family dinners, scheduling regular date nights with his partner, and pursuing his love of cooking, strengthening his relationships and personal well-being."

[CALL TO ACTION - 30 seconds]
"Ready to achieve work-life balance? Start by setting one clear boundary between work and personal time today. Remember, great work-life balance leads to better performance, stronger relationships, and greater life satisfaction. Begin today!"`
    },
    quiz: {
      title: "Test Your Work-Life Balance Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the key to achieving work-life balance?",
          options: [
            "Working all the time",
            "Setting clear boundaries and prioritizing both work and personal life",
            "Avoiding personal life",
            "Working harder"
          ],
          correct: 1,
          explanation: "The key is setting clear boundaries and prioritizing both work and personal life."
        },
        {
          id: 2,
          question: "How do you set effective work boundaries?",
          options: [
            "By avoiding all work",
            "By defining work hours, availability, and communication expectations",
            "By working all the time",
            "By ignoring work"
          ],
          correct: 1,
          explanation: "Set effective boundaries by defining work hours, availability, and communication expectations."
        },
        {
          id: 3,
          question: "What is the role of communication in work-life balance?",
          options: [
            "To avoid talking about work",
            "To set clear expectations with colleagues, managers, and family",
            "To complain about work",
            "To avoid personal topics"
          ],
          correct: 1,
          explanation: "Communication helps set clear expectations with colleagues, managers, and family."
        },
        {
          id: 4,
          question: "How does self-care contribute to work-life balance?",
          options: [
            "It's not important",
            "It maintains personal interests, relationships, and well-being",
            "It's selfish",
            "It wastes time"
          ],
          correct: 1,
          explanation: "Self-care maintains personal interests, relationships, and well-being."
        },
        {
          id: 5,
          question: "What is sustainable work-life balance?",
          options: [
            "Working all the time",
            "Long-term balance that supports both career success and personal well-being",
            "Avoiding work",
            "Perfect equality between work and life"
          ],
          correct: 1,
          explanation: "Sustainable balance supports both career success and personal well-being long-term."
        }
      ]
    },
    challenge: {
      title: "Work-Life Balance Challenge",
      description: "Create and implement a sustainable work-life balance plan",
      instructions: [
        "Assess current situation: Evaluate your current work-life balance and identify areas for improvement",
        "Set boundaries: Define clear boundaries between work and personal time",
        "Create schedule: Develop a realistic schedule that protects personal time",
        "Communicate expectations: Set clear expectations with colleagues, managers, and family",
        "Implement and maintain: Put your plan into action and make adjustments as needed"
      ],
      successCriteria: [
        "Assessed current work-life balance situation accurately",
        "Set clear and realistic boundaries between work and personal life",
        "Created a sustainable schedule that protects personal time",
        "Communicated expectations effectively with relevant people",
        "Implemented and maintained the work-life balance plan successfully"
      ]
    },
    feedback: {
      strengths: [
        "Excellent assessment of current work-life balance situation",
        "Strong boundary setting and schedule creation skills",
        "Good communication of expectations with colleagues and family",
        "Clear implementation and maintenance of work-life balance plan"
      ],
      improvements: [
        "Consider more diverse work-life balance strategies and approaches",
        "Improve consistency in maintaining boundaries and schedules",
        "Better integration of work-life balance into daily routines",
        "Stronger focus on long-term sustainability and adaptability"
      ],
      nextSteps: [
        "Practice different work-life balance techniques and find what works best",
        "Develop skills in advanced time management and boundary setting",
        "Apply work-life balance principles to challenging situations",
        "Learn about workplace culture and leadership in work-life balance"
      ]
    },
    badge: {
      name: "Balance Master",
      emoji: "⚖️",
      description: "Demonstrated excellent work-life balance and boundary setting skills"
    },
    shareMessage: "Just mastered work-life balance! 🎉 Created sustainable boundaries, protected personal time, and achieved harmony between career and life. Ready to excel professionally while maintaining personal well-being! #WorkLifeBalance #Boundaries #Sustainability"
  },
  {
    id: 'mental-health-awareness',
    title: 'Mental Health Awareness',
    emoji: '🧠',
    context: 'personal',
    discover: {
      scenario: "You've been feeling down for weeks, having trouble concentrating, and losing interest in things you used to enjoy. You're not sure if this is just normal stress or something more serious. You're hesitant to talk about it because you don't want to seem weak or different. How do you recognize mental health issues and take appropriate action?",
      problemExplanation: [
        "Stigma and Shame: Fear of judgment and reluctance to seek help for mental health concerns",
        "Symptom Recognition: Difficulty identifying when feelings and behaviors indicate mental health issues",
        "Help-Seeking Barriers: Not knowing where to turn or how to access mental health resources",
        "Self-Stigma: Internalizing negative beliefs about mental health and help-seeking"
      ],
      solutionApproach: [
        "Mental Health Literacy: Understanding common mental health conditions and their symptoms",
        "Self-Awareness: Recognizing personal mental health patterns and warning signs",
        "Help-Seeking Skills: Knowing when and how to seek professional mental health support",
        "Support Systems: Building networks and resources for mental health and well-being"
      ]
    },
    video: {
      title: "Build Mental Health Awareness and Support",
      duration: 5,
      content: [
        "Mental Health Literacy: Understanding common mental health conditions and their symptoms",
        "Self-Awareness: Recognizing personal mental health patterns and warning signs",
        "Help-Seeking Skills: Knowing when and how to seek professional mental health support",
        "Support Systems: Building networks and resources for mental health and well-being",
        "Stigma Reduction: Challenging mental health stigma and promoting help-seeking"
      ],
      script: `[HOOK - 30 seconds]
"Mental health is just as important as physical health, but many people struggle to recognize when they need help. Today, I'll show you how to build mental health awareness and create supportive systems in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, mental health awareness helps you:
- Recognize when academic stress becomes a mental health concern
- Support friends and classmates who may be struggling
- Access campus mental health resources and support services

Techniques: Learn about common mental health conditions, recognize warning signs, know campus resources, practice self-care, support others.

Example: Sarah recognized her anxiety was affecting her studies and reached out to campus counseling services, learning coping strategies that improved both her mental health and academic performance."

[PROFESSIONAL - 2 minutes]
"In your career, mental health awareness helps you:
- Maintain mental well-being in high-pressure work environments
- Support colleagues and create mentally healthy workplace cultures
- Recognize when work stress becomes a mental health concern

Techniques: Monitor stress levels, practice workplace self-care, support colleagues, know employee assistance programs, promote mental health awareness.

Example: Mike noticed a colleague showing signs of depression and gently encouraged them to seek help, while also implementing team stress management practices that improved overall workplace well-being."

[PERSONAL - 1 minute]
"In personal life, mental health awareness helps you:
- Recognize and address mental health concerns in yourself and loved ones
- Build supportive relationships and communities
- Access appropriate mental health resources and support

Techniques: Educate yourself about mental health, practice self-awareness, support family and friends, know local resources, challenge stigma.

Example: Tom recognized his partner's depression symptoms and supported them in seeking professional help, while also learning how to be a supportive partner during their recovery."

[CALL TO ACTION - 30 seconds]
"Ready to build mental health awareness? Start by learning about common mental health conditions and recognizing the signs in yourself and others. Remember, mental health awareness saves lives and builds stronger communities. Begin today!"`
    },
    quiz: {
      title: "Test Your Mental Health Awareness Knowledge",
      questions: [
        {
          id: 1,
          question: "What is mental health awareness?",
          options: [
            "Avoiding mental health topics",
            "Understanding mental health conditions, recognizing signs, and knowing when to seek help",
            "Only focusing on physical health",
            "Ignoring mental health issues"
          ],
          correct: 1,
          explanation: "Mental health awareness is understanding mental health conditions, recognizing signs, and knowing when to seek help."
        },
        {
          id: 2,
          question: "What are common signs of mental health concerns?",
          options: [
            "Only extreme symptoms",
            "Changes in mood, behavior, sleep, appetite, and daily functioning",
            "Only physical symptoms",
            "Only when others notice"
          ],
          correct: 1,
          explanation: "Common signs include changes in mood, behavior, sleep, appetite, and daily functioning."
        },
        {
          id: 3,
          question: "When should you seek professional mental health help?",
          options: [
            "Never",
            "When symptoms persist, interfere with daily life, or cause significant distress",
            "Only in emergencies",
            "Only when others tell you to"
          ],
          correct: 1,
          explanation: "Seek help when symptoms persist, interfere with daily life, or cause significant distress."
        },
        {
          id: 4,
          question: "How can you support someone with mental health concerns?",
          options: [
            "By ignoring the problem",
            "By listening without judgment, encouraging professional help, and providing ongoing support",
            "By telling them to get over it",
            "By avoiding them"
          ],
          correct: 1,
          explanation: "Support by listening without judgment, encouraging professional help, and providing ongoing support."
        },
        {
          id: 5,
          question: "What is the role of stigma in mental health?",
          options: [
            "It's not important",
            "It prevents people from seeking help and creates barriers to recovery",
            "It helps people",
            "It's always positive"
          ],
          correct: 1,
          explanation: "Stigma prevents people from seeking help and creates barriers to recovery."
        }
      ]
    },
    challenge: {
      title: "Mental Health Awareness Challenge",
      description: "Develop mental health awareness and support skills",
      instructions: [
        "Educate yourself: Learn about common mental health conditions and their symptoms",
        "Practice self-awareness: Monitor your own mental health and recognize patterns",
        "Build support skills: Learn how to support others with mental health concerns",
        "Know resources: Identify mental health resources and support services available to you",
        "Take action: Apply your knowledge to support yourself or others"
      ],
      successCriteria: [
        "Demonstrated understanding of common mental health conditions and symptoms",
        "Showed self-awareness of personal mental health patterns and warning signs",
        "Developed skills in supporting others with mental health concerns",
        "Identified relevant mental health resources and support services",
        "Applied mental health awareness knowledge in real situations"
      ]
    },
    feedback: {
      strengths: [
        "Excellent understanding of mental health conditions and symptoms",
        "Strong self-awareness of personal mental health patterns",
        "Good skills in supporting others with mental health concerns",
        "Clear knowledge of mental health resources and support services"
      ],
      improvements: [
        "Consider more diverse mental health conditions and scenarios",
        "Improve understanding of professional mental health services",
        "Better skills in challenging mental health stigma",
        "Stronger focus on prevention and early intervention"
      ],
      nextSteps: [
        "Continue learning about different mental health conditions and treatments",
        "Develop skills in mental health advocacy and stigma reduction",
        "Apply mental health awareness in various personal and professional contexts",
        "Learn about crisis intervention and emergency mental health support"
      ]
    },
    badge: {
      name: "Mental Health Advocate",
      emoji: "🧠",
      description: "Demonstrated excellent mental health awareness and support skills"
    },
    shareMessage: "Just mastered mental health awareness! 🎉 Learned to recognize mental health signs, support others, and access resources. Ready to build mentally healthy communities and support well-being! #MentalHealth #Awareness #Support"
  },
  {
    id: 'physical-wellness',
    title: 'Physical Wellness',
    emoji: '💪',
    context: 'academic',
    discover: {
      scenario: "You've been studying for 12 hours a day, eating mostly fast food, and haven't exercised in months. You're constantly tired, getting sick frequently, and your energy levels are at an all-time low. Your academic performance is suffering because you can't focus or stay alert. How do you build physical wellness habits that support your academic and personal success?",
      problemExplanation: [
        "Sedentary Lifestyle: Lack of physical activity and movement throughout the day",
        "Poor Nutrition: Unhealthy eating habits and inadequate nutrition affecting energy and focus",
        "Sleep Deprivation: Inconsistent sleep patterns and inadequate rest affecting performance",
        "Health Neglect: Ignoring preventive care and health maintenance"
      ],
      solutionApproach: [
        "Physical Activity: Incorporating regular exercise and movement into daily routines",
        "Nutrition: Developing healthy eating habits and proper nutrition for energy and focus",
        "Sleep Hygiene: Establishing consistent sleep patterns and adequate rest",
        "Preventive Care: Maintaining regular health checkups and preventive health practices"
      ]
    },
    video: {
      title: "Build Physical Wellness for Peak Performance",
      duration: 5,
      content: [
        "Physical Activity: Incorporating regular exercise and movement into daily routines",
        "Nutrition: Developing healthy eating habits and proper nutrition for energy and focus",
        "Sleep Hygiene: Establishing consistent sleep patterns and adequate rest",
        "Preventive Care: Maintaining regular health checkups and preventive health practices",
        "Energy Management: Optimizing physical health for sustained performance and well-being"
      ],
      script: `[HOOK - 30 seconds]
"Physical wellness is the foundation of peak performance in every area of life. Today, I'll show you how to build physical wellness habits that boost your energy, focus, and overall success in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, physical wellness helps you:
- Maintain energy and focus for long study sessions and exams
- Reduce stress and improve mental clarity for better academic performance
- Build healthy habits that support long-term success and well-being

Techniques: Regular exercise, healthy nutrition, consistent sleep, stress management, preventive care.

Example: Sarah improved her grades by 25% after implementing a daily exercise routine, healthy meal prep, and consistent sleep schedule, boosting her energy and focus during study sessions."

[PROFESSIONAL - 2 minutes]
"In your career, physical wellness helps you:
- Maintain high energy and focus for demanding work schedules
- Reduce sick days and improve productivity and performance
- Build resilience and stamina for long-term career success

Techniques: Workplace exercise, healthy eating, stress management, ergonomic setup, regular health checkups.

Example: Mike increased his productivity by 30% by implementing daily walks, healthy meal planning, and regular exercise, leading to better work performance and career advancement."

[PERSONAL - 1 minute]
"In personal life, physical wellness helps you:
- Have energy for family, friends, and personal activities
- Maintain health and vitality for long-term life satisfaction
- Set a positive example for loved ones and build healthy relationships

Techniques: Family activities, healthy cooking, regular exercise, adequate rest, preventive health care.

Example: Tom transformed his family's health by implementing weekend hikes, family cooking nights, and regular health checkups, improving everyone's energy and well-being."

[CALL TO ACTION - 30 seconds]
"Ready to build physical wellness? Start by adding one healthy habit to your daily routine today. Remember, great physical wellness boosts energy, focus, and success in every area of life. Begin today!"`
    },
    quiz: {
      title: "Test Your Physical Wellness Knowledge",
      questions: [
        {
          id: 1,
          question: "What is the foundation of physical wellness?",
          options: [
            "Only exercise",
            "Regular physical activity, proper nutrition, adequate sleep, and preventive care",
            "Only diet",
            "Only sleep"
          ],
          correct: 1,
          explanation: "Physical wellness includes regular physical activity, proper nutrition, adequate sleep, and preventive care."
        },
        {
          id: 2,
          question: "How does physical activity benefit academic and professional performance?",
          options: [
            "It doesn't help",
            "It improves energy, focus, and mental clarity",
            "It wastes time",
            "It only helps athletes"
          ],
          correct: 1,
          explanation: "Physical activity improves energy, focus, and mental clarity for better performance."
        },
        {
          id: 3,
          question: "What is the role of nutrition in physical wellness?",
          options: [
            "It's not important",
            "It provides energy, supports focus, and maintains overall health",
            "It only affects weight",
            "It's only for athletes"
          ],
          correct: 1,
          explanation: "Nutrition provides energy, supports focus, and maintains overall health."
        },
        {
          id: 4,
          question: "How does sleep affect physical wellness?",
          options: [
            "It's not important",
            "It allows recovery, improves focus, and supports overall health",
            "It only affects mood",
            "It's only for children"
          ],
          correct: 1,
          explanation: "Sleep allows recovery, improves focus, and supports overall health."
        },
        {
          id: 5,
          question: "What is preventive care in physical wellness?",
          options: [
            "Only emergency care",
            "Regular health checkups and early intervention to maintain health",
            "Only when sick",
            "Only for older people"
          ],
          correct: 1,
          explanation: "Preventive care includes regular health checkups and early intervention to maintain health."
        }
      ]
    },
    challenge: {
      title: "Physical Wellness Challenge",
      description: "Develop and implement a comprehensive physical wellness plan",
      instructions: [
        "Assess current health: Evaluate your current physical wellness and identify areas for improvement",
        "Set goals: Establish specific, measurable goals for physical activity, nutrition, and sleep",
        "Create plan: Develop a realistic plan that fits your lifestyle and schedule",
        "Implement habits: Start with small, sustainable changes and build consistency",
        "Monitor progress: Track your progress and make adjustments as needed"
      ],
      successCriteria: [
        "Assessed current physical wellness situation accurately",
        "Set specific and measurable physical wellness goals",
        "Created a realistic and sustainable physical wellness plan",
        "Implemented physical wellness habits consistently",
        "Demonstrated improved physical wellness and energy levels"
      ]
    },
    feedback: {
      strengths: [
        "Excellent assessment of current physical wellness situation",
        "Strong goal setting and planning for physical wellness",
        "Good implementation of physical wellness habits and routines",
        "Clear demonstration of improved physical wellness and energy"
      ],
      improvements: [
        "Consider more diverse physical wellness activities and approaches",
        "Improve consistency in maintaining physical wellness habits",
        "Better integration of physical wellness into daily routines",
        "Stronger focus on long-term sustainability and habit formation"
      ],
      nextSteps: [
        "Practice different physical wellness activities and find what works best",
        "Develop skills in advanced fitness, nutrition, and health management",
        "Apply physical wellness principles to challenging situations",
        "Learn about sports psychology and performance optimization"
      ]
    },
    badge: {
      name: "Wellness Champion",
      emoji: "💪",
      description: "Demonstrated excellent physical wellness and health management skills"
    },
    shareMessage: "Just mastered physical wellness! 🎉 Built healthy habits for exercise, nutrition, and sleep that boost energy and performance. Ready to achieve peak physical wellness and sustained success! #PhysicalWellness #Health #Performance"
  },
  {
    id: 'resilience-building',
    title: 'Resilience Building',
    emoji: '🌱',
    context: 'professional',
    discover: {
      scenario: "You just received devastating news - you didn't get the promotion you worked so hard for, and your project was cancelled after months of effort. You're feeling defeated, questioning your abilities, and wondering if you should give up on your career goals. How do you build resilience and bounce back from this setback stronger than before?",
      problemExplanation: [
        "Setback Impact: Major disappointments and failures affecting confidence and motivation",
        "Negative Thinking: Catastrophic thinking and self-doubt spiraling out of control",
        "Recovery Difficulty: Struggling to bounce back and move forward from setbacks",
        "Future Fear: Anxiety about future failures and reduced willingness to take risks"
      ],
      solutionApproach: [
        "Mindset Shifts: Developing growth mindset and reframing setbacks as learning opportunities",
        "Emotional Regulation: Managing difficult emotions and maintaining perspective during challenges",
        "Support Systems: Building networks and resources for support during difficult times",
        "Adaptive Strategies: Developing flexible approaches and problem-solving skills"
      ]
    },
    video: {
      title: "Build Unshakeable Resilience",
      duration: 5,
      content: [
        "Mindset Shifts: Developing growth mindset and reframing setbacks as learning opportunities",
        "Emotional Regulation: Managing difficult emotions and maintaining perspective during challenges",
        "Support Systems: Building networks and resources for support during difficult times",
        "Adaptive Strategies: Developing flexible approaches and problem-solving skills",
        "Growth Through Adversity: Using challenges as opportunities for personal and professional development"
      ],
      script: `[HOOK - 30 seconds]
"Resilience isn't about avoiding failure - it's about bouncing back stronger from every setback. Today, I'll show you how to build unshakeable resilience that turns challenges into opportunities in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, resilience building helps you:
- Bounce back from academic setbacks, failed exams, and disappointing grades
- Maintain motivation and confidence during challenging coursework
- Develop persistence and determination for long-term academic success

Techniques: Reframe failures as learning, seek support, maintain perspective, practice self-compassion, focus on growth.

Example: Sarah failed her first major exam but used it as motivation to improve her study methods, eventually graduating with honors and learning valuable lessons about persistence."

[PROFESSIONAL - 2 minutes]
"In your career, resilience building helps you:
- Recover from job rejections, project failures, and career setbacks
- Maintain confidence and motivation during challenging periods
- Develop leadership skills and inspire others during difficult times

Techniques: Learn from failures, maintain professional networks, practice emotional regulation, focus on solutions, support others.

Example: Mike's startup failed after two years, but he used the experience to build a successful consulting business, applying lessons learned to help other entrepreneurs avoid similar pitfalls."

[PERSONAL - 1 minute]
"In personal life, resilience building helps you:
- Navigate relationship challenges, health issues, and life transitions
- Maintain hope and optimism during difficult personal periods
- Support family and friends through their own challenges

Techniques: Practice gratitude, maintain social connections, focus on what you can control, seek professional help when needed, help others.

Example: Tom faced a serious health diagnosis but used it as motivation to improve his lifestyle, strengthen his relationships, and find new meaning in life, inspiring others with his positive attitude."

[CALL TO ACTION - 30 seconds]
"Ready to build unshakeable resilience? Start by reframing your next setback as a learning opportunity. Remember, great resilience turns challenges into stepping stones for growth. Begin today!"`
    },
    quiz: {
      title: "Test Your Resilience Building Knowledge",
      questions: [
        {
          id: 1,
          question: "What is resilience?",
          options: [
            "Avoiding all challenges",
            "The ability to bounce back from setbacks and adapt to change",
            "Never failing",
            "Being perfect"
          ],
          correct: 1,
          explanation: "Resilience is the ability to bounce back from setbacks and adapt to change."
        },
        {
          id: 2,
          question: "How do you build resilience?",
          options: [
            "By avoiding challenges",
            "Through mindset shifts, emotional regulation, support systems, and adaptive strategies",
            "By working harder",
            "By ignoring problems"
          ],
          correct: 1,
          explanation: "Build resilience through mindset shifts, emotional regulation, support systems, and adaptive strategies."
        },
        {
          id: 3,
          question: "What is a growth mindset?",
          options: [
            "Always being positive",
            "Believing abilities can be developed through effort and learning",
            "Never making mistakes",
            "Being naturally talented"
          ],
          correct: 1,
          explanation: "A growth mindset believes abilities can be developed through effort and learning."
        },
        {
          id: 4,
          question: "How do support systems help with resilience?",
          options: [
            "They solve all problems",
            "They provide emotional support, different perspectives, and practical help during challenges",
            "They eliminate challenges",
            "They're not important"
          ],
          correct: 1,
          explanation: "Support systems provide emotional support, different perspectives, and practical help during challenges."
        },
        {
          id: 5,
          question: "What is the role of failure in resilience building?",
          options: [
            "It should be avoided",
            "It provides learning opportunities and helps develop resilience skills",
            "It's always bad",
            "It means you're not good enough"
          ],
          correct: 1,
          explanation: "Failure provides learning opportunities and helps develop resilience skills."
        }
      ]
    },
    challenge: {
      title: "Resilience Building Challenge",
      description: "Develop and demonstrate resilience skills in the face of challenges",
      instructions: [
        "Identify challenge: Choose a current challenge or setback you're facing",
        "Reframe perspective: Practice reframing the challenge as a learning opportunity",
        "Develop strategies: Create specific strategies for managing emotions and moving forward",
        "Build support: Identify and strengthen your support systems",
        "Take action: Implement your resilience strategies and track your progress"
      ],
      successCriteria: [
        "Identified a real challenge or setback to work with",
        "Successfully reframed the challenge as a learning opportunity",
        "Developed specific strategies for emotional regulation and problem-solving",
        "Strengthened support systems and resources",
        "Demonstrated resilience by taking positive action and learning from the experience"
      ]
    },
    feedback: {
      strengths: [
        "Excellent reframing of challenges as learning opportunities",
        "Strong emotional regulation and perspective-maintaining skills",
        "Good development of support systems and adaptive strategies",
        "Clear demonstration of resilience and growth through challenges"
      ],
      improvements: [
        "Consider more diverse resilience strategies and approaches",
        "Improve emotional regulation during high-stress situations",
        "Better integration of resilience practices into daily life",
        "Stronger focus on helping others build resilience"
      ],
      nextSteps: [
        "Practice different resilience techniques and find what works best",
        "Develop skills in advanced emotional regulation and stress management",
        "Apply resilience building to increasingly challenging situations",
        "Learn about trauma-informed care and supporting others through difficult times"
      ]
    },
    badge: {
      name: "Resilience Builder",
      emoji: "🌱",
      description: "Demonstrated excellent resilience building and growth mindset skills"
    },
    shareMessage: "Just mastered resilience building! 🎉 Developed unshakeable resilience, learned to bounce back from setbacks, and turned challenges into growth opportunities. Ready to thrive through any adversity! #Resilience #GrowthMindset #Adaptability"
  },
  {
    id: 'mindfulness-practices',
    title: 'Mindfulness Practices',
    emoji: '🧘‍♀️',
    context: 'personal',
    discover: {
      scenario: "Your mind is constantly racing with worries about the future, regrets about the past, and overwhelming thoughts about everything you need to do. You feel scattered, anxious, and unable to focus on the present moment. You're missing out on life because you're always thinking about what's next or what went wrong. How do you develop mindfulness practices that help you stay present and find peace?",
      problemExplanation: [
        "Mental Overwhelm: Constant racing thoughts and inability to focus on the present",
        "Anxiety and Worry: Excessive focus on future concerns and past regrets",
        "Scattered Attention: Difficulty concentrating and being fully present in activities",
        "Life Disconnection: Missing out on current experiences due to mental preoccupation"
      ],
      solutionApproach: [
        "Present Moment Awareness: Developing skills to focus attention on the current moment",
        "Mindfulness Techniques: Learning specific practices for cultivating mindfulness and awareness",
        "Stress Reduction: Using mindfulness to manage anxiety, worry, and mental overwhelm",
        "Life Integration: Incorporating mindfulness into daily activities and routines"
      ]
    },
    video: {
      title: "Master Mindfulness for Inner Peace",
      duration: 5,
      content: [
        "Present Moment Awareness: Developing skills to focus attention on the current moment",
        "Mindfulness Techniques: Learning specific practices for cultivating mindfulness and awareness",
        "Stress Reduction: Using mindfulness to manage anxiety, worry, and mental overwhelm",
        "Life Integration: Incorporating mindfulness into daily activities and routines",
        "Inner Peace: Finding calm, clarity, and contentment through mindful living"
      ],
      script: `[HOOK - 30 seconds]
"Mindfulness is the art of being fully present in your life. Today, I'll show you how to master mindfulness practices that bring inner peace, clarity, and joy to every moment in just 5 minutes."

[ACADEMIC - 2 minutes]
"In college, mindfulness practices help you:
- Improve focus and concentration during study sessions and exams
- Manage academic stress and anxiety effectively
- Enhance learning and memory through present-moment awareness

Techniques: Mindful breathing, body scans, mindful studying, walking meditation, stress reduction practices.

Example: Sarah improved her exam performance by 20% after implementing daily mindfulness practices, reducing anxiety and improving focus during study sessions and tests."

[PROFESSIONAL - 2 minutes]
"In your career, mindfulness practices help you:
- Maintain focus and clarity during high-pressure work situations
- Manage workplace stress and improve decision-making
- Enhance leadership presence and communication effectiveness

Techniques: Mindful meetings, breathing exercises, mindful communication, stress management, present-moment leadership.

Example: Mike became a more effective leader by practicing mindfulness before important meetings, improving his presence, listening skills, and decision-making under pressure."

[PERSONAL - 1 minute]
"In personal life, mindfulness practices help you:
- Find peace and contentment in daily activities
- Improve relationships through present-moment attention
- Reduce anxiety and worry about the future

Techniques: Mindful eating, mindful walking, gratitude practices, loving-kindness meditation, daily mindfulness routines.

Example: Tom transformed his family relationships by practicing mindful listening and presence, creating deeper connections and more meaningful moments with his loved ones."

[CALL TO ACTION - 30 seconds]
"Ready to master mindfulness? Start with just 5 minutes of mindful breathing today. Remember, great mindfulness brings peace, clarity, and joy to every moment of your life. Begin today!"`
    },
    quiz: {
      title: "Test Your Mindfulness Practices Knowledge",
      questions: [
        {
          id: 1,
          question: "What is mindfulness?",
          options: [
            "Thinking about the future",
            "Paying attention to the present moment with openness and curiosity",
            "Avoiding all thoughts",
            "Being perfect"
          ],
          correct: 1,
          explanation: "Mindfulness is paying attention to the present moment with openness and curiosity."
        },
        {
          id: 2,
          question: "What are common mindfulness techniques?",
          options: [
            "Only meditation",
            "Breathing exercises, body scans, mindful walking, and present-moment awareness",
            "Only yoga",
            "Only sitting still"
          ],
          correct: 1,
          explanation: "Common techniques include breathing exercises, body scans, mindful walking, and present-moment awareness."
        },
        {
          id: 3,
          question: "How does mindfulness help with stress?",
          options: [
            "It eliminates all stress",
            "It helps manage stress by bringing attention to the present moment and reducing worry",
            "It increases stress",
            "It doesn't help"
          ],
          correct: 1,
          explanation: "Mindfulness helps manage stress by bringing attention to the present moment and reducing worry."
        },
        {
          id: 4,
          question: "How do you integrate mindfulness into daily life?",
          options: [
            "Only during meditation",
            "By practicing present-moment awareness during daily activities",
            "Only in special places",
            "Only when stressed"
          ],
          correct: 1,
          explanation: "Integrate mindfulness by practicing present-moment awareness during daily activities."
        },
        {
          id: 5,
          question: "What is the benefit of regular mindfulness practice?",
          options: [
            "It's not beneficial",
            "It improves focus, reduces stress, and enhances overall well-being",
            "It wastes time",
            "It only helps in emergencies"
          ],
          correct: 1,
          explanation: "Regular practice improves focus, reduces stress, and enhances overall well-being."
        }
      ]
    },
    challenge: {
      title: "Mindfulness Practices Challenge",
      description: "Develop and maintain a consistent mindfulness practice",
      instructions: [
        "Choose techniques: Select 2-3 mindfulness techniques that work for you",
        "Create routine: Establish a daily mindfulness practice routine",
        "Practice regularly: Commit to daily practice for at least one week",
        "Integrate daily: Incorporate mindfulness into daily activities and routines",
        "Track progress: Monitor your practice and its effects on your well-being"
      ],
      successCriteria: [
        "Selected appropriate mindfulness techniques for personal practice",
        "Created and maintained a consistent daily mindfulness routine",
        "Practiced mindfulness techniques regularly for at least one week",
        "Integrated mindfulness into daily activities and routines",
        "Demonstrated improved focus, stress management, and overall well-being"
      ]
    },
    feedback: {
      strengths: [
        "Excellent selection and implementation of mindfulness techniques",
        "Strong creation and maintenance of daily mindfulness routines",
        "Good integration of mindfulness into daily activities",
        "Clear demonstration of improved focus, stress management, and well-being"
      ],
      improvements: [
        "Consider more diverse mindfulness techniques and approaches",
        "Improve consistency in daily mindfulness practice",
        "Better integration of mindfulness into challenging situations",
        "Stronger focus on long-term mindfulness habit formation"
      ],
      nextSteps: [
        "Practice different mindfulness techniques and find what works best",
        "Develop skills in advanced meditation and mindfulness practices",
        "Apply mindfulness to challenging situations and stress management",
        "Learn about mindfulness-based stress reduction and therapeutic applications"
      ]
    },
    badge: {
      name: "Mindfulness Master",
      emoji: "🧘‍♀️",
      description: "Demonstrated excellent mindfulness practices and present-moment awareness skills"
    },
    shareMessage: "Just mastered mindfulness practices! 🎉 Developed present-moment awareness, found inner peace, and integrated mindfulness into daily life. Ready to live with clarity, calm, and joy in every moment! #Mindfulness #PresentMoment #InnerPeace"
  }
];

export const module8Assessment: AssessmentData = {
  title: "Managing Mental & Physical Health Mastery Assessment",
  description: "Test your mastery of mental and physical health management skills. This comprehensive assessment evaluates your understanding of stress management, work-life balance, mindfulness, and overall wellness strategies.",
  questions: [
    {
      id: 1,
      question: "What is the foundation of effective stress management?",
      options: [
        "Avoiding all stressful situations",
        "Identifying triggers, developing coping strategies, and building support systems",
        "Working harder to overcome stress",
        "Ignoring stress until it goes away"
      ],
      correct: 1,
      explanation: "The foundation is identifying triggers, developing coping strategies, and building support systems."
    },
    {
      id: 2,
      question: "How do you maintain work-life balance?",
      options: [
        "By working all the time",
        "By setting boundaries, prioritizing self-care, and managing time effectively",
        "By avoiding personal life",
        "By working harder"
      ],
      correct: 1,
      explanation: "Maintain work-life balance by setting boundaries, prioritizing self-care, and managing time effectively."
    },
    {
      id: 3,
      question: "What is mental health awareness?",
      options: [
        "Avoiding mental health topics",
        "Understanding mental health, recognizing signs, and knowing when to seek help",
        "Only focusing on physical health",
        "Ignoring mental health issues"
      ],
      correct: 1,
      explanation: "Mental health awareness is understanding mental health, recognizing signs, and knowing when to seek help."
    },
    {
      id: 4,
      question: "How do you build physical wellness?",
      options: [
        "By avoiding exercise",
        "Through regular exercise, proper nutrition, adequate sleep, and preventive care",
        "By eating whatever you want",
        "By avoiding doctors"
      ],
      correct: 1,
      explanation: "Build physical wellness through regular exercise, proper nutrition, adequate sleep, and preventive care."
    },
    {
      id: 5,
      question: "What is resilience building?",
      options: [
        "Avoiding all challenges",
        "Developing the ability to bounce back from setbacks and adapt to change",
        "Working harder",
        "Ignoring problems"
      ],
      correct: 1,
      explanation: "Resilience building is developing the ability to bounce back from setbacks and adapt to change."
    }
  ],
  gradingScale: {
    excellent: { min: 80, max: 100, message: "Excellent! You've mastered mental and physical health management!", xpReward: 100 },
    good: { min: 70, max: 79, message: "Good job! You have strong wellness skills.", xpReward: 75 },
    satisfactory: { min: 60, max: 69, message: "Satisfactory. Keep practicing to improve further.", xpReward: 50 },
    needsImprovement: { min: 0, max: 59, message: "Keep learning! Wellness skills improve with practice.", xpReward: 25 }
  }
};

// Local Storage Helper Functions
export const saveModuleProgress = (progress: ModuleProgress): void => {
  localStorage.setItem('module8Progress', JSON.stringify(progress));
};

export const loadModuleProgress = (): ModuleProgress | null => {
  const stored = localStorage.getItem('module8Progress');
  return stored ? JSON.parse(stored) : null;
};

export const updateSubtopicProgress = (subtopicId: string, score: number, response: string): void => {
  const progress = loadModuleProgress() || {
    moduleId: 'mental-health',
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
  progress.quizScores[subtopicId] = score;
  progress.challengeResponses[subtopicId] = response;
  
  if (!progress.completedSubtopics.includes(parseInt(subtopicId.split('-')[1]))) {
    progress.completedSubtopics.push(parseInt(subtopicId.split('-')[1]));
  }
  
  progress.totalXP += score;
  progress.lastAccessed = new Date().toISOString();
  
  saveModuleProgress(progress);
};







