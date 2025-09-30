import { VideoChallenge } from '../../types/challengeTypes';

export const activeListeningVideoChallenge: VideoChallenge = {
  title: "Video-Based Active Listening Challenge",
  description: "Watch Professor Thompson explain exam requirements and demonstrate your active listening skills through interactive assessment",
  type: "video-interactive",
  
  video: {
    url: "/videos/challenges/professor-exam-explanation.mp4",
    title: "Professor Thompson's Final Exam Instructions",
    duration: 180, // 3 minutes
    description: "Professor Thompson explains the upcoming final exam format, requirements, and important details for her Psychology 101 course.",
    allowPause: false,
    showControls: false,
    transcript: `Professor Thompson: "Good morning class. I want to go over the final exam details since I've been getting a lot of questions. 

The exam will be on December 15th at 2 PM in the main auditorium, not our usual classroom. You'll have 2 hours to complete it. 

The exam covers three main areas: cognitive psychology from chapters 8-12, social psychology from chapters 15-18, and research methods from chapters 3-5. 

You're allowed to bring one 3x5 index card with handwritten notes - no photocopies or printed materials. Also, bring a calculator for the statistics section. 

My office hours this week are Tuesday and Thursday from 1-3 PM if you have questions. The exam is worth 40% of your final grade, so please prepare thoroughly. 

Any questions about the format or content?"`
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
      question: "Which chapters will be covered on the exam? (Select all that apply)",
      options: [
        "Chapters 8-12 (Cognitive Psychology)",
        "Chapters 15-18 (Social Psychology)", 
        "Chapters 3-5 (Research Methods)",
        "Chapters 1-2 (Introduction)",
        "Chapters 20-22 (Advanced Topics)"
      ],
      correct: [0, 1, 2],
      points: 30,
      explanation: "The professor mentioned three specific areas: cognitive psychology (chapters 8-12), social psychology (chapters 15-18), and research methods (chapters 3-5)."
    },
    {
      id: 3,
      type: "short-answer",
      question: "What materials are you allowed to bring to the exam?",
      expectedKeywords: ["3x5 index card", "handwritten notes", "calculator", "statistics"],
      forbiddenKeywords: ["photocopies", "printed materials", "textbook", "laptop"],
      points: 25,
      explanation: "Students can bring a 3x5 index card with handwritten notes (specifically no photocopies or printed materials) and a calculator for the statistics section."
    },
    {
      id: 4,
      type: "comprehension",
      question: "When are the professor's office hours this week, and what percentage of your final grade is this exam worth?",
      correctAnswer: "Tuesday and Thursday from 1-3 PM, exam is worth 40% of final grade",
      points: 20,
      explanation: "Professor Thompson mentioned office hours are Tuesday and Thursday 1-3 PM this week, and the exam is worth 40% of the final grade."
    }
  ],
  
  listeningSkillsAssessment: {
    criteria: [
      {
        skill: "Information Retention",
        weight: 30,
        measures: [
          "Correctly identified specific dates, times, and locations",
          "Remembered numerical information (percentages, chapter numbers)",
          "Recalled detailed requirements and restrictions"
        ]
      },
      {
        skill: "Comprehension",
        weight: 25,
        measures: [
          "Understood main concepts and exam structure",
          "Grasped relationships between topics and chapters", 
          "Identified important vs. minor details"
        ]
      },
      {
        skill: "Attention Management",
        weight: 25,
        measures: [
          "Focused throughout entire 3-minute explanation",
          "Didn't miss key information despite multiple details",
          "Maintained concentration without video controls"
        ]
      },
      {
        skill: "Critical Analysis",
        weight: 20,
        measures: [
          "Distinguished between facts and suggestions",
          "Identified implications (exam importance, preparation needs)",
          "Understood context and urgency of information"
        ]
      }
    ],
    scoringRubric: {
      "90-100": { 
        level: "Expert Listener", 
        description: "Exceptional active listening skills with perfect comprehension and retention. Ready for advanced listening challenges." 
      },
      "80-89": { 
        level: "Proficient Listener", 
        description: "Strong active listening skills with good comprehension. Minor areas for improvement in detail retention." 
      },
      "70-79": { 
        level: "Developing Listener", 
        description: "Basic active listening skills present, but needs practice with complex information and sustained attention." 
      },
      "60-69": { 
        level: "Novice Listener", 
        description: "Struggles with information retention and sustained attention. Needs significant practice in active listening techniques." 
      },
      "0-59": { 
        level: "Beginning Listener", 
        description: "Requires foundational training in listening skills. Focus on basic attention and note-taking strategies first." 
      }
    }
  },
  
  instructions: [
    "Find a quiet environment free from distractions (phone away, notifications off)",
    "Watch the video completely without pausing or rewinding - you only get one chance",
    "Pay attention to both explicit information and implied meanings",
    "Take mental notes of key details, numbers, dates, and requirements",
    "Answer all comprehension questions immediately after the video ends",
    "Be honest in your responses - this assessment helps identify your listening strengths and areas for improvement"
  ],
  
  successCriteria: [
    "Score 80% or higher on comprehension questions",
    "Demonstrate retention of specific details (dates, times, locations, percentages)",
    "Show understanding of main concepts and requirements", 
    "Identify key action items and next steps from the professor's instructions"
  ],
  
  adaptiveFeatures: {
    retakePolicy: "Can retake once after 24 hours with a different video scenario of similar complexity",
    personalizedFeedback: true,
    difficultyAdjustment: "Next listening challenges adapt based on performance - higher scores unlock more complex scenarios",
    skillTracking: "Progress tracked across multiple listening scenarios to build comprehensive listening profile"
  }
};




