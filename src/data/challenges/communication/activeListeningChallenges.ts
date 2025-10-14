import { VideoChallenge } from '../../../types/challengeTypes';

// Video-based Active Listening Challenge
export const activeListeningVideoChallenge: VideoChallenge = {
  title: "Video Comprehension Challenge",
  description: "Watch Professor Thompson explain exam details and test your listening comprehension",
  type: "video-interactive",
  
  video: {
    url: "/videos/challenges/professor-exam-explanation.mp4",
    title: "Professor Thompson's Final Exam Instructions",
    duration: 180,
    description: "Psychology professor explains final exam requirements with multiple specific details",
    allowPause: false,
    showControls: false,
    transcript: `Professor Thompson: "Good morning class. I want to go over the final exam details since I've been getting a lot of questions. The exam will be on December 15th at 2 PM in the main auditorium, not our usual classroom. You'll have 2 hours to complete it. The exam covers three main areas: cognitive psychology from chapters 8-12, social psychology from chapters 15-18, and research methods from chapters 3-5. You're allowed to bring one 3x5 index card with handwritten notes - no photocopies or printed materials. Also, bring a calculator for the statistics section. My office hours this week are Tuesday and Thursday from 1-3 PM if you have questions. The exam is worth 40% of your final grade, so please prepare thoroughly. Any questions about the format or content?"`
  },
  
  comprehensionQuestions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "When and where is the final exam?",
      options: [
        "December 15th at 2 PM in the regular classroom",
        "December 15th at 2 PM in the main auditorium", 
        "December 16th at 2 PM in the main auditorium",
        "December 15th at 3 PM in the main auditorium"
      ],
      correct: 1,
      points: 25,
      explanation: "The professor clearly stated December 15th at 2 PM in the main auditorium, emphasizing it's NOT the usual classroom."
    },
    {
      id: 2,
      type: "multiple-select",
      question: "Which chapters will be covered? (Select all that apply)",
      options: [
        "Chapters 8-12 (Cognitive Psychology)",
        "Chapters 15-18 (Social Psychology)", 
        "Chapters 3-5 (Research Methods)",
        "Chapters 1-2 (Introduction)"
      ],
      correct: [0, 1, 2],
      points: 30,
      explanation: "Three areas: cognitive psychology (8-12), social psychology (15-18), and research methods (3-5)."
    },
    {
      id: 3,
      type: "short-answer",
      question: "What materials can you bring to the exam?",
      expectedKeywords: ["3x5 index card", "handwritten notes", "calculator"],
      forbiddenKeywords: ["photocopies", "printed materials"],
      points: 25,
      explanation: "3x5 index card with handwritten notes (no photocopies) and calculator for statistics."
    },
    {
      id: 4,
      type: "comprehension",
      question: "What percentage of your final grade is this exam worth?",
      correctAnswer: "40%",
      points: 20,
      explanation: "Professor specifically mentioned the exam is worth 40% of the final grade."
    }
  ],
  
  listeningSkillsAssessment: {
    criteria: [
      {
        skill: "Information Retention",
        weight: 30,
        measures: ["Dates, times, locations", "Specific requirements", "Numerical details"]
      },
      {
        skill: "Comprehension", 
        weight: 25,
        measures: ["Main concepts", "Relationships between ideas", "Important vs minor details"]
      },
      {
        skill: "Attention Management",
        weight: 25,
        measures: ["Sustained focus", "No missed information", "Concentration throughout"]
      },
      {
        skill: "Critical Analysis",
        weight: 20,
        measures: ["Facts vs opinions", "Implications", "Context understanding"]
      }
    ],
    scoringRubric: {
      "90-100": { level: "Expert Listener", description: "Exceptional active listening with perfect retention" },
      "80-89": { level: "Proficient Listener", description: "Strong listening skills with good comprehension" },
      "70-79": { level: "Developing Listener", description: "Basic skills, room for improvement" },
      "60-69": { level: "Novice Listener", description: "Needs significant practice" },
      "0-59": { level: "Beginning Listener", description: "Requires foundational training" }
    }
  },
  
  instructions: [
    "Find a quiet environment free from distractions",
    "Watch the video completely without pausing",
    "Take mental notes of key details and numbers",
    "Answer questions immediately after video ends"
  ],
  
  successCriteria: [
    "Score 80% or higher on comprehension questions",
    "Demonstrate retention of specific details",
    "Show understanding of main concepts"
  ],
  
  adaptiveFeatures: {
    retakePolicy: "Can retake after 24 hours with different scenario",
    personalizedFeedback: true,
    difficultyAdjustment: "Next challenges adapt based on performance",
    skillTracking: "Progress tracked across multiple scenarios"
  }
};

// Real-world Active Listening Challenge  
export const activeListeningRealWorldChallenge = {
  id: 'active-listening-real-world',
  title: "Real-World Listening Practice",
  description: "Practice active listening in an actual lecture, meeting, or important conversation",
  type: 'real-world-practice',
  duration: "30-60 minutes",
  difficulty: 'intermediate' as const,
  xpReward: 150,
  
  instructions: [
    "Choose an upcoming lecture, meeting, or important conversation",
    "Prepare: Put phone away, bring note-taking materials", 
    "During: Maintain focus, ask 2+ clarifying questions",
    "After: Summarize 3 key points you learned",
    "Reflect: Write what helped and what was challenging"
  ],
  
  selfAssessmentQuestions: [
    {
      question: "How many clarifying questions did you ask?",
      type: "number",
      minValue: 0,
      target: 2
    },
    {
      question: "Rate your focus level throughout the session (1-10):",
      type: "scale",
      minValue: 1,
      maxValue: 10,
      target: 7
    },
    {
      question: "List 3 key points you learned:",
      type: "text",
      required: true
    },
    {
      question: "What listening strategies worked best for you?",
      type: "text", 
      required: true
    }
  ],
  
  successCriteria: [
    "Asked at least 2 relevant questions",
    "Maintained focus rating of 7+ out of 10",
    "Identified 3 clear key points",
    "Documented effective listening strategies"
  ]
};

export default { activeListeningVideoChallenge, activeListeningRealWorldChallenge };





