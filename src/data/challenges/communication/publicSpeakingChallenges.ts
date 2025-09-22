// Public Speaking Challenge Data

export const publicSpeakingVideoChallenge = {
  id: 'public-speaking-video',
  title: "Speech Recording Assessment",
  description: "Record a 3-minute professional introduction speech and receive detailed feedback",
  type: 'video-recording' as const,
  duration: "15 minutes",
  difficulty: 'intermediate' as const,
  xpReward: 200,
  
  scenario: {
    context: "Job interview introduction",
    prompt: "You're interviewing for your dream internship. Introduce yourself professionally in 3 minutes, covering your background, skills, and why you're interested in this position.",
    requirements: [
      "Speak for exactly 2-3 minutes",
      "Maintain good eye contact with camera",
      "Use confident body language",
      "Include: background, skills, interest in position",
      "End with a strong closing statement"
    ]
  },
  
  assessmentCriteria: [
    {
      category: "Content Structure",
      weight: 25,
      elements: ["Clear introduction", "Logical flow", "Strong conclusion", "Relevant examples"]
    },
    {
      category: "Delivery",
      weight: 25, 
      elements: ["Clear pronunciation", "Appropriate pace", "Voice projection", "Minimal filler words"]
    },
    {
      category: "Body Language",
      weight: 25,
      elements: ["Eye contact", "Confident posture", "Natural gestures", "Professional appearance"]
    },
    {
      category: "Engagement",
      weight: 25,
      elements: ["Enthusiasm", "Authenticity", "Connection with audience", "Compelling narrative"]
    }
  ],
  
  technicalRequirements: {
    videoLength: { min: 120, max: 200 }, // 2-3.5 minutes
    audioQuality: "Clear speech required",
    videoQuality: "Face clearly visible",
    environment: "Professional background recommended"
  }
};

export const publicSpeakingPresentationChallenge = {
  id: 'public-speaking-presentation',
  title: "Mini-Presentation Challenge", 
  description: "Create and deliver a 5-minute presentation on a topic of your choice",
  type: 'presentation-practice' as const,
  duration: "45 minutes",
  difficulty: 'advanced' as const,
  xpReward: 250,
  
  scenario: {
    context: "Class presentation simulation",
    prompt: "Choose a topic you're passionate about and create a 5-minute presentation that informs and engages your audience.",
    topicSuggestions: [
      "A skill you've learned recently",
      "A problem in your community and your solution",
      "An innovative technology or idea",
      "A personal achievement or challenge overcome",
      "A cause you care about"
    ]
  },
  
  deliverables: [
    {
      item: "Presentation Slides",
      requirements: ["5-7 slides maximum", "Clear visuals", "Minimal text", "Professional design"],
      timeAllocation: "20 minutes"
    },
    {
      item: "Recorded Presentation",
      requirements: ["5-minute delivery", "Use slides", "Engaging delivery", "Clear conclusion"],
      timeAllocation: "25 minutes (including practice)"
    }
  ],
  
  evaluationRubric: [
    {
      criteria: "Content Quality",
      excellent: "Clear, well-researched, engaging content with strong examples",
      good: "Solid content with adequate examples and research",
      needsWork: "Basic content, limited examples or research"
    },
    {
      criteria: "Slide Design",
      excellent: "Professional, visually appealing, supports speech perfectly",
      good: "Clean design, mostly supports speech well",
      needsWork: "Basic design, some slides unclear or distracting"
    },
    {
      criteria: "Delivery Skills",
      excellent: "Confident, engaging, excellent pace and eye contact",
      good: "Generally confident with good pace and some eye contact",
      needsWork: "Nervous delivery, too fast/slow, limited eye contact"
    }
  ]
};

export const publicSpeakingAnxietyChallenge = {
  id: 'public-speaking-anxiety',
  title: "Confidence Building Practice",
  description: "Practice speaking techniques to overcome anxiety and build confidence",
  type: 'self-practice' as const,
  duration: "20 minutes",
  difficulty: 'beginner' as const,
  xpReward: 100,
  
  exercises: [
    {
      name: "Mirror Practice",
      duration: "5 minutes",
      instructions: [
        "Stand in front of a mirror",
        "Practice introducing yourself confidently",
        "Focus on eye contact and posture",
        "Repeat 3 times with increasing confidence"
      ]
    },
    {
      name: "Breathing Technique",
      duration: "5 minutes", 
      instructions: [
        "Practice 4-7-8 breathing (inhale 4, hold 7, exhale 8)",
        "Repeat 5 cycles",
        "Use before any speaking situation",
        "Notice how it calms your nerves"
      ]
    },
    {
      name: "Voice Projection",
      duration: "5 minutes",
      instructions: [
        "Read a paragraph aloud at normal volume",
        "Read the same paragraph projecting to back of room",
        "Practice varying your tone and pace",
        "Record yourself to hear the difference"
      ]
    },
    {
      name: "Confidence Affirmations",
      duration: "5 minutes",
      instructions: [
        "Say: 'I have valuable ideas to share'",
        "Say: 'My voice matters and people want to hear it'", 
        "Say: 'I am prepared and confident'",
        "Repeat each 5 times with conviction"
      ]
    }
  ],
  
  selfReflection: [
    "Which exercise helped reduce your anxiety most?",
    "How did your confidence change from start to finish?",
    "What will you practice more before your next speaking opportunity?",
    "Rate your overall confidence improvement (1-10)"
  ]
};

export default {
  publicSpeakingVideoChallenge,
  publicSpeakingPresentationChallenge,
  publicSpeakingAnxietyChallenge
};
