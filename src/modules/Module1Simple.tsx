import React from 'react';
import ModuleTemplate, { ModuleTemplateProps } from '../components/ModuleTemplate';

// Simple test data
const testSubtopics = [
  {
    id: 'active-listening',
    title: 'Active Listening',
    emoji: '👂',
    context: 'academic' as const,
    discover: {
      scenario: 'You\'re in a lecture and struggling to understand the professor. Your mind keeps wandering to your phone, upcoming assignments, and weekend plans. Meanwhile, the professor is explaining complex concepts that will definitely be on the exam.',
      problemExplanation: [
        'You\'re physically present but mentally distracted',
        'Missing key information that could impact your grades',
        'Not building rapport with professors for future recommendations',
        'Missing opportunities to ask clarifying questions',
        'Feeling disconnected from the learning process'
      ],
      solutionApproach: [
        'Practice focused attention techniques to stay present',
        'Use active listening strategies to engage with content',
        'Develop note-taking methods that enhance understanding',
        'Learn to ask strategic questions that show engagement',
        'Build habits that improve information retention'
      ]
    },
    video: {
      title: 'Master Active Listening: The Secret to Academic and Professional Success',
      duration: 8,
      content: [
        'The 3 Levels of Listening: Surface, Conversational, and Deep Listening',
        'Body Language That Shows You\'re Engaged: Eye contact, nodding, leaning in',
        'Verbal Cues That Demonstrate Understanding: "I see", "That makes sense", "So you\'re saying..."',
        'The Power of Paraphrasing: Restate what you heard in your own words',
        'Asking Strategic Questions: Open-ended vs. closed-ended questions',
        'Managing Distractions: Phone away, note-taking techniques, mindfulness',
        'Building Rapport: Remembering details, following up on previous conversations',
        'Common Mistakes: Interrupting, planning responses, fake listening',
        'Pro Tips: The 80/20 rule, active vs. passive listening, cultural considerations'
      ]
    },
    quiz: {
      title: 'Active Listening Quiz',
      questions: [
        {
          id: 1,
          question: 'What is the first step in active listening?',
          options: ['Interrupt to ask questions', 'Focus completely on the speaker', 'Take notes immediately', 'Think about your response'],
          correct: 1,
          explanation: 'Focusing completely on the speaker is the foundation of active listening.'
        },
        {
          id: 2,
          question: 'Which of the following is NOT a sign of active listening?',
          options: ['Maintaining eye contact', 'Nodding occasionally', 'Checking your phone', 'Asking clarifying questions'],
          correct: 2,
          explanation: 'Checking your phone shows you\'re distracted and not actively listening.'
        },
        {
          id: 3,
          question: 'What should you do when someone is speaking to show you\'re listening?',
          options: ['Plan your response', 'Summarize what they said', 'Interrupt with questions', 'Look around the room'],
          correct: 1,
          explanation: 'Summarizing what they said shows you\'re engaged and understanding their message.'
        },
        {
          id: 4,
          question: 'In a job interview, active listening helps you:',
          options: ['Answer questions before they finish', 'Understand what the interviewer really wants', 'Show off your knowledge', 'Fill awkward silences'],
          correct: 1,
          explanation: 'Active listening helps you understand the interviewer\'s needs and respond appropriately.'
        },
        {
          id: 5,
          question: 'What\'s the best way to show empathy while listening?',
          options: ['Agree with everything they say', 'Reflect their emotions back to them', 'Give advice immediately', 'Change the subject'],
          correct: 1,
          explanation: 'Reflecting emotions shows you understand and care about their feelings.'
        }
      ]
    },
    challenge: {
      title: 'Practice Active Listening',
      description: 'Practice active listening in a real conversation',
      contexts: {
        academic: {
          title: 'Academic Active Listening Mastery',
          description: 'Transform your learning experience through powerful listening skills in lectures, study groups, and academic discussions',
          instructions: [
            'Pre-lecture prep: Review materials, set learning goals, choose optimal seating',
            'During lecture: Maintain eye contact, take structured notes, avoid distractions',
            'Engagement techniques: Nod occasionally, lean forward, use facial expressions',
            'Question strategy: Prepare 2-3 thoughtful questions before class',
            'Note-taking method: Use Cornell system with main points, details, and questions',
            'Post-lecture: Summarize key points, identify unclear concepts, follow up with professor',
            'Study group dynamics: Practice paraphrasing, ask for clarification, build on others\' ideas'
          ],
          successCriteria: [
            'You can accurately repeat back 80% of key points from a 20-minute lecture',
            'You ask 2-3 thoughtful questions per class that demonstrate understanding',
            'Professors recognize you as an engaged, thoughtful student',
            'Your note-taking improves and you retain more information',
            'You contribute meaningfully to study group discussions',
            'You feel more confident and connected in academic settings'
          ]
        },
        professional: {
          title: 'Professional Active Listening Excellence',
          description: 'Master workplace communication through strategic listening in meetings, interviews, and professional interactions',
          instructions: [
            'Meeting preparation: Review agenda, prepare questions, set listening goals',
            'Interview mastery: Listen for key requirements, ask clarifying questions, show engagement',
            'Client interactions: Focus on needs, paraphrase understanding, build trust',
            'Team collaboration: Practice reflective listening, avoid interrupting, build on ideas',
            'Performance reviews: Listen for feedback, ask for specifics, show growth mindset',
            'Networking events: Remember names and details, ask follow-up questions, build relationships',
            'Remote meetings: Minimize distractions, use video, take notes, ask for clarification'
          ],
          successCriteria: [
            'You consistently understand and remember meeting action items',
            'Interviewers comment on your excellent listening and engagement',
            'Colleagues seek you out for important discussions',
            'You build stronger professional relationships through attentive listening',
            'You avoid miscommunication and costly mistakes',
            'You advance faster in your career due to strong communication skills'
          ]
        },
        personal: {
          title: 'Personal Active Listening for Deeper Connections',
          description: 'Strengthen relationships with friends, family, and romantic partners through genuine, empathetic listening',
          instructions: [
            'Create listening space: Put away devices, choose quiet environment, set aside time',
            'Show genuine interest: Ask open-ended questions, remember details, follow up later',
            'Practice empathy: Try to understand their emotions, validate their feelings, avoid judgment',
            'Avoid common traps: Don\'t try to fix everything, don\'t make it about you, don\'t interrupt',
            'Use reflective listening: "It sounds like you\'re feeling...", "What I\'m hearing is..."',
            'Handle difficult conversations: Stay calm, ask clarifying questions, focus on understanding',
            'Build trust: Keep confidences, be consistent, show you care through actions'
          ],
          successCriteria: [
            'People feel comfortable opening up to you about personal matters',
            'Your relationships become deeper and more meaningful',
            'You\'re known as someone who "really gets it" and understands others',
            'Conflicts decrease because people feel heard and understood',
            'You develop stronger emotional intelligence and social skills',
            'You become the go-to person for advice and support'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent attention to detail and focus during conversations',
        'Strong ability to ask thoughtful, clarifying questions',
        'Good use of verbal cues like "I understand" and "That makes sense"',
        'Consistent note-taking and follow-up on important points',
        'Natural ability to paraphrase and reflect back what you heard'
      ],
      improvements: [
        'Work on maintaining consistent eye contact throughout longer conversations',
        'Practice more open body language to show full engagement',
        'Try to avoid planning your response while the other person is speaking',
        'Develop techniques to handle distractions in noisy environments',
        'Build confidence in asking deeper, more probing questions'
      ],
      nextSteps: [
        'Practice active listening for 15 minutes daily with friends or family',
        'Record yourself in a practice conversation and review your listening habits',
        'Ask for specific feedback from professors, colleagues, or mentors',
        'Join a study group or discussion club to practice in academic settings',
        'Try the "listening without responding" exercise to improve pure attention'
      ]
    },
    badge: {
      name: 'Active Listener',
      emoji: '👂',
      description: 'Mastered active listening skills'
    },
    shareMessage: 'Just mastered active listening! 🎧 #CommunicationSkills'
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    emoji: '🎤',
    context: 'academic' as const,
    discover: {
      scenario: 'You need to present your research project to 50+ people and you\'re terrified. Your hands are shaking, your voice is quivering, and you\'re convinced everyone can see how nervous you are. This presentation could make or break your grade and your professor\'s recommendation for graduate school.',
      problemExplanation: [
        'Overwhelming fear of judgment and public scrutiny',
        'Constant worry about forgetting key points or going blank',
        'Lack of confidence in your speaking abilities and knowledge',
        'Not knowing how to engage and maintain audience attention',
        'Physical symptoms of anxiety affecting your performance',
        'Comparing yourself to others who seem naturally confident'
      ],
      solutionApproach: [
        'Master proven confidence-building techniques and mindset shifts',
        'Develop a foolproof presentation structure that guides you through',
        'Learn storytelling methods that captivate and engage audiences',
        'Practice vocal techniques to project confidence and authority',
        'Build a toolkit of strategies for handling nerves and unexpected situations',
        'Create a personalized preparation routine that builds your confidence'
      ]
    },
    video: {
      title: 'From Terrified to Confident: Master Public Speaking for Academic and Professional Success',
      duration: 12,
      content: [
        'The Psychology of Stage Fright: Why we fear public speaking and how to reframe it',
        'Confidence-Building Techniques: Power poses, breathing exercises, and mental preparation',
        'The Perfect Presentation Structure: Hook, roadmap, main points, and memorable close',
        'Vocal Mastery: Projection, pace, pauses, and tone that commands attention',
        'Body Language That Conveys Authority: Posture, gestures, eye contact, and movement',
        'Audience Engagement Strategies: Questions, stories, interactive elements, and visual aids',
        'Handling Q&A Sessions: Preparation techniques and graceful responses to difficult questions',
        'Managing Technical Issues: Backup plans, staying calm, and recovering from mistakes',
        'Practice Methods That Work: Rehearsal techniques, recording yourself, and getting feedback',
        'Building Your Speaking Persona: Authenticity, passion, and connecting with your audience',
        'Overcoming Common Mistakes: Filler words, reading slides, and avoiding eye contact',
        'Pro Tips from Professional Speakers: Advanced techniques for memorable presentations'
      ]
    },
    quiz: {
      title: 'Public Speaking Quiz',
      questions: [
        {
          id: 6,
          question: 'What\'s the best way to overcome stage fright?',
          options: ['Avoid eye contact', 'Practice deep breathing', 'Read from notes only', 'Speak very quietly'],
          correct: 1,
          explanation: 'Deep breathing helps calm your nervous system and reduces anxiety.'
        },
        {
          id: 7,
          question: 'How should you structure a presentation?',
          options: ['Jump straight to details', 'Tell them what you\'ll tell them, tell them, tell them what you told them', 'Wing it completely', 'Read everything from slides'],
          correct: 1,
          explanation: 'The three-part structure helps audiences follow and remember your message.'
        },
        {
          id: 8,
          question: 'What body language shows confidence?',
          options: ['Crossed arms', 'Standing straight with open posture', 'Looking at the floor', 'Fidgeting with hands'],
          correct: 1,
          explanation: 'Open posture and standing straight projects confidence and authority.'
        },
        {
          id: 9,
          question: 'How do you handle difficult questions during Q&A?',
          options: ['Ignore them', 'Admit you don\'t know and offer to follow up', 'Make up an answer', 'Change the subject'],
          correct: 1,
          explanation: 'Honesty builds trust, and offering to follow up shows professionalism.'
        },
        {
          id: 10,
          question: 'What\'s the ideal speaking pace?',
          options: ['As fast as possible', 'Slow and steady with pauses', 'Very slow and monotone', 'Vary speed constantly'],
          correct: 1,
          explanation: 'A steady pace with strategic pauses helps audience comprehension and engagement.'
        }
      ]
    },
    challenge: {
      title: 'Practice Public Speaking',
      description: 'Practice public speaking in different contexts',
      contexts: {
        academic: {
          title: 'Academic Presentation Mastery',
          description: 'Transform your academic presentations from nerve-wracking experiences into confident, engaging showcases of your knowledge and research',
          instructions: [
            'Topic selection: Choose something you\'re genuinely passionate about and know well',
            'Research and preparation: Gather comprehensive information, anticipate questions, create detailed notes',
            'Structure development: Create a compelling hook, clear roadmap, 3-5 main points, and memorable conclusion',
            'Visual aids design: Create slides that support (not replace) your speaking, use minimal text, high-quality images',
            'Practice routine: Rehearse your opening 5 times, practice transitions, time your presentation',
            'Confidence building: Practice power poses, breathing exercises, positive self-talk, and visualization',
            'Audience engagement: Prepare 2-3 questions to ask, plan interactive moments, practice eye contact',
            'Q&A preparation: Anticipate difficult questions, prepare thoughtful responses, practice saying "I don\'t know"',
            'Technical setup: Test equipment, have backup plans, arrive early to check everything',
            'Post-presentation: Reflect on what went well, identify areas for improvement, celebrate your success'
          ],
          successCriteria: [
            'You speak with clear, confident voice and maintain good posture throughout',
            'You engage the audience with eye contact, questions, and interactive elements',
            'You handle questions gracefully, even when you don\'t know the answer',
            'You stay within time limits and maintain good pacing',
            'Your visual aids enhance rather than distract from your message',
            'You feel confident and in control, even if you\'re still a bit nervous',
            'The audience is engaged and asks thoughtful follow-up questions',
            'You receive positive feedback from professors and classmates'
          ]
        },
        professional: {
          title: 'Professional Presentation Excellence',
          description: 'Master workplace presentations that advance your career and establish you as a thought leader in your field',
          instructions: [
            'Audience analysis: Research your audience\'s background, needs, and expectations',
            'Message crafting: Develop a clear, compelling message that drives action',
            'Story development: Create a narrative that connects with your audience emotionally',
            'Data integration: Use statistics, charts, and evidence to support your points',
            'Professional presence: Dress appropriately, arrive early, test technology',
            'Business context: Understand company culture, current challenges, and strategic goals',
            'Call to action: End with clear next steps and specific requests',
            'Follow-up strategy: Plan how to maintain engagement after the presentation',
            'Confidence projection: Use business-appropriate body language and vocal techniques',
            'Handling objections: Prepare responses to potential challenges or resistance'
          ],
          successCriteria: [
            'You deliver your message with authority and credibility',
            'You look and sound professional throughout the presentation',
            'You answer questions confidently and knowledgeably',
            'You achieve your stated presentation goals and objectives',
            'Your audience is engaged and asks meaningful questions',
            'You receive positive feedback from colleagues and supervisors',
            'Your presentation leads to follow-up meetings or action items',
            'You establish yourself as a knowledgeable and confident professional'
          ]
        },
        personal: {
          title: 'Personal Speaking for Meaningful Connections',
          description: 'Develop authentic speaking skills for family events, social gatherings, and personal milestones',
          instructions: [
            'Authentic voice: Speak from the heart and share your genuine thoughts and feelings',
            'Humor mastery: Use appropriate humor that connects with your specific audience',
            'Conversational tone: Keep it natural and engaging, not formal or stiff',
            'Personal stories: Share relevant anecdotes that illustrate your points',
            'Audience connection: Make eye contact, smile, and show genuine interest in your listeners',
            'Emotional intelligence: Read the room and adjust your approach accordingly',
            'Vulnerability: Be willing to share personal experiences that others can relate to',
            'Interactive engagement: Ask questions, encourage participation, create dialogue',
            'Cultural sensitivity: Respect different backgrounds and perspectives in your audience',
            'Memorable moments: Create special moments that people will remember and talk about'
          ],
          successCriteria: [
            'You feel comfortable and natural while speaking',
            'People are genuinely engaged and interested in what you\'re saying',
            'You express yourself clearly and authentically',
            'You enjoy the experience and want to speak again',
            'Your audience feels connected to you and your message',
            'People remember and reference your speech later',
            'You build stronger relationships through your speaking',
            'You feel confident expressing yourself in personal settings'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent presentation structure with clear introduction, main points, and conclusion',
        'Strong, confident voice that projects authority and engages the audience',
        'Good use of visual aids that enhance rather than distract from your message',
        'Natural storytelling ability that connects with your audience emotionally',
        'Effective handling of questions and audience interaction'
      ],
      improvements: [
        'Work on maintaining consistent eye contact with all parts of the audience',
        'Practice varying your pace and using strategic pauses for emphasis',
        'Develop more dynamic body language and gestures to support your points',
        'Build confidence in handling unexpected questions or technical difficulties',
        'Work on reducing filler words and improving vocal variety'
      ],
      nextSteps: [
        'Practice speaking for 10-15 minutes daily, even if just to yourself',
        'Record yourself giving presentations and review for areas of improvement',
        'Join a public speaking club or group to practice in a supportive environment',
        'Volunteer to speak at events, meetings, or gatherings to build experience',
        'Study great speakers online and analyze their techniques and delivery',
        'Work with a mentor or coach to get personalized feedback and guidance'
      ]
    },
    badge: {
      name: 'Confident Speaker',
      emoji: '🎤',
      description: 'Mastered public speaking skills'
    },
    shareMessage: 'Just crushed my presentation! 🎤 #PublicSpeaking #Confidence'
  },
  {
    id: 'written-communication',
    title: 'Written Communication',
    emoji: '✍️',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to write a professional email to your professor about a project extension, but you\'re not sure how to sound professional. You\'ve been staring at a blank screen for 30 minutes, worried about sounding too casual or too formal, and you\'re terrified of making grammar mistakes that will make you look unprofessional.',
      problemExplanation: [
        'Uncertainty about appropriate tone and formality level',
        'Lack of knowledge about proper email structure and etiquette',
        'Fear of grammar and spelling mistakes affecting your credibility',
        'Not knowing how to make requests professionally and persuasively',
        'Confusion about when to use different communication channels',
        'Difficulty balancing professionalism with authenticity and personality'
      ],
      solutionApproach: [
        'Master email etiquette and professional writing conventions',
        'Develop a clear, concise writing style that gets results',
        'Learn to use professional templates while maintaining authenticity',
        'Build confidence in grammar, punctuation, and proofreading skills',
        'Understand when and how to make requests that get positive responses',
        'Create a personal brand through consistent, professional communication'
      ]
    },
    video: {
      title: 'Master Professional Writing: From Emails to Reports - The Complete Guide',
      duration: 10,
      content: [
        'Email Etiquette Mastery: Subject lines, greetings, closings, and professional tone',
        'The Art of Clear and Concise Writing: Eliminating fluff and getting to the point',
        'Professional Tone Development: Balancing formality with authenticity and personality',
        'Grammar and Punctuation Essentials: Common mistakes that damage your credibility',
        'Email Structure That Gets Results: Opening, body, call-to-action, and closing',
        'Writing for Different Audiences: Professors, employers, colleagues, and clients',
        'Persuasive Writing Techniques: Making requests that get positive responses',
        'Proofreading and Editing Strategies: Catching errors before you hit send',
        'Professional Templates and Formats: When to use formal vs. casual communication',
        'Building Your Written Brand: Consistency, voice, and professional image',
        'Common Writing Mistakes to Avoid: Filler words, passive voice, and unclear sentences',
        'Advanced Techniques: Follow-up emails, difficult conversations, and crisis communication'
      ]
    },
    quiz: {
      title: 'Written Communication Quiz',
      questions: [
        {
          id: 11,
          question: 'What\'s the best subject line for a professional email?',
          options: ['Hey!', 'Question about Project Extension - John Smith', 'URGENT!!!', 'Hi there'],
          correct: 1,
          explanation: 'Clear, specific subject lines help recipients understand the email\'s purpose immediately.'
        },
        {
          id: 12,
          question: 'How should you start a professional email?',
          options: ['Hey!', 'Dear Professor Johnson,', 'Yo!', 'Hiya!'],
          correct: 1,
          explanation: 'Use formal greetings like "Dear [Title] [Last Name]," for professional communication.'
        },
        {
          id: 13,
          question: 'What makes writing clear and professional?',
          options: ['Using long, complex sentences', 'Being concise and direct', 'Using lots of jargon', 'Writing in all caps'],
          correct: 1,
          explanation: 'Clear, concise writing is easier to understand and more professional.'
        },
        {
          id: 14,
          question: 'How should you end a professional email?',
          options: ['TTYL', 'Best regards, [Your Name]', 'Peace out', 'Later!'],
          correct: 1,
          explanation: 'Professional closings like "Best regards" or "Sincerely" are appropriate for business communication.'
        },
        {
          id: 15,
          question: 'What should you do before sending an important email?',
          options: ['Send immediately', 'Proofread for errors', 'Use auto-correct only', 'Ask someone else to write it'],
          correct: 1,
          explanation: 'Always proofread to catch grammar, spelling, and clarity issues before sending.'
        }
      ]
    },
    challenge: {
      title: 'Practice Professional Writing',
      description: 'Write professional emails and documents',
      contexts: {
        academic: {
          title: 'Academic Writing Excellence',
          description: 'Master the art of professional academic communication through emails, papers, and formal correspondence',
          instructions: [
            'Tone mastery: Use formal academic language while maintaining clarity and respect',
            'Request formulation: Be specific about what you need, why you need it, and when you need it',
            'Detail inclusion: Provide relevant context, background information, and supporting evidence',
            'Proofreading process: Read aloud, use spell-check, have someone else review, check formatting',
            'Email structure: Clear subject line, proper greeting, organized body, professional closing',
            'Follow-up strategy: Know when and how to follow up without being pushy or annoying',
            'Documentation: Keep records of important communications for future reference',
            'Cultural sensitivity: Understand different communication styles across cultures and disciplines',
            'Crisis communication: Handle difficult situations professionally and diplomatically',
            'Building relationships: Use writing to build rapport with professors and academic mentors'
          ],
          successCriteria: [
            'Your writing is clear, professional, and free of grammar and spelling errors',
            'You consistently follow academic conventions and formatting requirements',
            'You receive positive responses and helpful feedback from professors',
            'You feel confident and competent in all your written communications',
            'Your requests are granted more often due to clear, persuasive writing',
            'You build strong professional relationships through effective communication',
            'You avoid miscommunication and misunderstandings in academic settings',
            'You develop a reputation as a clear, thoughtful, and professional communicator'
          ]
        },
        professional: {
          title: 'Professional Writing Mastery',
          description: 'Excel in workplace communication through effective emails, reports, and professional correspondence',
          instructions: [
            'Audience analysis: Understand your reader\'s needs, background, and communication preferences',
            'Conciseness mastery: Be complete but brief, eliminate unnecessary words and information',
            'Professional language: Use appropriate business terminology and formal tone',
            'Action item clarity: Include specific next steps, deadlines, and responsible parties',
            'Email optimization: Write subject lines that get opened, bodies that get read, and calls-to-action that get responses',
            'Report writing: Structure information logically, use headings, and include executive summaries',
            'Meeting communications: Write clear agendas, minutes, and follow-up communications',
            'Client correspondence: Maintain professionalism while building relationships and trust',
            'Crisis communication: Handle difficult situations with diplomacy and professionalism',
            'Brand consistency: Develop and maintain a consistent professional voice across all communications'
          ],
          successCriteria: [
            'Your emails are opened, read, and acted upon consistently',
            'You communicate complex information clearly and effectively',
            'You maintain a professional image in all written communications',
            'You achieve your communication goals and drive desired actions',
            'Colleagues and clients respect and trust your written communications',
            'You avoid miscommunication and costly misunderstandings',
            'Your writing contributes to your professional reputation and career advancement',
            'You feel confident handling any written communication challenge'
          ]
        },
        personal: {
          title: 'Personal Writing for Authentic Expression',
          description: 'Develop compelling personal writing skills for statements, letters, and authentic self-expression',
          instructions: [
            'Authentic voice development: Write in your own voice while maintaining professionalism',
            'Storytelling mastery: Craft compelling narratives that engage and persuade readers',
            'Active voice usage: Write with energy and directness that commands attention',
            'Personality expression: Show your unique character while maintaining appropriate boundaries',
            'Emotional intelligence: Connect with readers on an emotional level while staying professional',
            'Personal statement writing: Craft compelling stories that showcase your strengths and experiences',
            'Cover letter excellence: Write letters that stand out and get you interviews',
            'Reflection and growth: Use writing to process experiences and demonstrate learning',
            'Cultural sensitivity: Write in ways that respect and connect with diverse audiences',
            'Revision and refinement: Edit and polish your writing to perfection'
          ],
          successCriteria: [
            'Your writing authentically reflects your personality and values',
            'You tell compelling stories that engage and persuade your readers',
            'You feel confident and proud of your written communications',
            'You receive positive responses and feedback on your personal writing',
            'Your writing helps you stand out in applications and interviews',
            'You use writing as a tool for self-reflection and personal growth',
            'You connect with readers on both intellectual and emotional levels',
            'You develop a distinctive voice that people remember and respect'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Excellent writing structure with clear organization and logical flow',
        'Strong ability to express ideas clearly and concisely',
        'Good understanding of professional tone and appropriate language',
        'Effective use of formatting and visual elements to enhance readability',
        'Natural ability to adapt writing style to different audiences and purposes'
      ],
      improvements: [
        'Work on eliminating grammar and punctuation errors through careful proofreading',
        'Practice writing more concisely by removing unnecessary words and phrases',
        'Develop stronger opening and closing paragraphs that grab attention',
        'Build confidence in using more sophisticated vocabulary and sentence structures',
        'Learn to write with more personality while maintaining professionalism'
      ],
      nextSteps: [
        'Write for 15-20 minutes daily, focusing on different types of professional communication',
        'Read high-quality professional writing and analyze the techniques used',
        'Join a writing group or find a mentor to provide feedback on your work',
        'Practice writing emails, reports, and other documents for different scenarios',
        'Use grammar and style checking tools to improve your technical writing skills',
        'Study examples of excellent professional writing in your field or industry'
      ]
    },
    badge: {
      name: 'Professional Writer',
      emoji: '✍️',
      description: 'Mastered professional writing skills'
    },
    shareMessage: 'Just wrote the perfect professional email! ✍️ #WritingSkills #Professional'
  },
  {
    id: 'non-verbal-communication',
    title: 'Non-Verbal Communication',
    emoji: '👥',
    context: 'personal' as const,
    discover: {
      scenario: 'You\'re in a job interview and you think you\'re doing great, but the interviewer keeps looking at their watch and seems disengaged. You\'re confused because your answers are good, but something feels off.',
      problemExplanation: [
        'Your body language is sending mixed signals that contradict your words',
        'You\'re not reading the interviewer\'s non-verbal cues correctly',
        'Your facial expressions and gestures don\'t match your confident tone',
        'You\'re missing important signals about how the interview is really going',
        'Your posture and eye contact are undermining your professional image',
        'You\'re not using non-verbal communication to build rapport and connection'
      ],
      solutionApproach: [
        'Master the art of reading and interpreting non-verbal cues accurately',
        'Align your body language with your words to project confidence and authenticity',
        'Develop awareness of your own non-verbal communication patterns',
        'Learn to use gestures, posture, and facial expressions to enhance your message',
        'Build skills in mirroring and matching others\' communication styles',
        'Create a powerful non-verbal presence that supports your professional goals'
      ]
    },
    video: {
      title: 'Master Non-Verbal Communication: The Silent Language of Success',
      duration: 9,
      content: [
        'The 7-38-55 Rule: Understanding the impact of words, tone, and body language',
        'Reading Body Language: Posture, gestures, facial expressions, and what they reveal',
        'Eye Contact Mastery: When to look, how long to hold, and cultural considerations',
        'Facial Expression Control: Conveying emotions authentically while maintaining professionalism',
        'Gesture and Movement: Using your hands and body to emphasize and engage',
        'Personal Space and Proximity: Understanding comfort zones and appropriate distances',
        'Mirroring and Matching: Building rapport through subtle behavioral alignment',
        'Voice and Tone: The non-verbal aspects of how you speak',
        'Cultural Differences: Understanding non-verbal communication across cultures',
        'Common Mistakes: Avoiding non-verbal behaviors that undermine your message',
        'Practice Techniques: Exercises to improve your non-verbal communication skills',
        'Professional Applications: Using non-verbal skills in interviews, meetings, and presentations'
      ]
    },
    quiz: {
      title: 'Non-Verbal Communication Quiz',
      questions: [
        {
          id: 16,
          question: 'What does crossed arms typically indicate in a professional setting?',
          options: ['Confidence', 'Defensiveness or resistance', 'Comfort', 'Agreement'],
          correct: 1,
          explanation: 'Crossed arms often signal defensiveness, resistance, or a closed-off attitude.'
        },
        {
          id: 17,
          question: 'How much eye contact should you maintain during a conversation?',
          options: ['100% of the time', '50-70% of the time', 'Never', 'Only when speaking'],
          correct: 1,
          explanation: 'Maintaining eye contact 50-70% of the time shows engagement without being intimidating.'
        },
        {
          id: 18,
          question: 'What does leaning forward during a conversation typically communicate?',
          options: ['Aggression', 'Interest and engagement', 'Discomfort', 'Boredom'],
          correct: 1,
          explanation: 'Leaning forward usually indicates interest, engagement, and active listening.'
        },
        {
          id: 19,
          question: 'In a job interview, what does fidgeting with your hands suggest?',
          options: ['Confidence', 'Nervousness or lack of preparation', 'Professionalism', 'Interest'],
          correct: 1,
          explanation: 'Fidgeting typically indicates nervousness or lack of confidence and preparation.'
        },
        {
          id: 20,
          question: 'What is the most effective way to use hand gestures while speaking?',
          options: ['Keep hands in pockets', 'Use purposeful gestures that support your words', 'Wave hands constantly', 'Never use hand gestures'],
          correct: 1,
          explanation: 'Purposeful gestures that support and emphasize your words are most effective.'
        }
      ]
    },
    challenge: {
      title: 'Master Non-Verbal Communication',
      description: 'Develop powerful non-verbal communication skills for all aspects of life',
      contexts: {
        academic: {
          title: 'Academic Non-Verbal Excellence',
          description: 'Use non-verbal communication to excel in academic presentations, discussions, and interactions',
          instructions: [
            'Presentation posture: Stand tall, shoulders back, feet shoulder-width apart',
            'Eye contact strategy: Scan the room, make brief contact with different audience members',
            'Gesture usage: Use purposeful hand movements to emphasize key points',
            'Facial expressions: Match your expressions to your content and maintain engagement',
            'Movement and space: Use the space effectively without pacing nervously',
            'Voice projection: Speak clearly and vary your tone to maintain interest',
            'Reading audience: Watch for signs of confusion, engagement, or boredom',
            'Cultural awareness: Adapt your non-verbal style to diverse academic audiences',
            'Confidence building: Practice power poses and confident body language',
            'Feedback integration: Use audience non-verbal cues to adjust your presentation'
          ],
          successCriteria: [
            'You maintain confident, open body language throughout presentations',
            'You effectively use eye contact to engage all parts of your audience',
            'Your gestures enhance rather than distract from your message',
            'You can read audience non-verbal cues and adjust accordingly',
            'You project authority and credibility through your non-verbal presence',
            'You build rapport with professors and classmates through effective non-verbal communication',
            'You feel confident and in control during academic interactions',
            'You receive positive feedback about your presentation skills and presence'
          ]
        },
        professional: {
          title: 'Professional Non-Verbal Mastery',
          description: 'Master non-verbal communication for workplace success, interviews, and professional relationships',
          instructions: [
            'Interview presence: Project confidence through posture, eye contact, and gestures',
            'Meeting dynamics: Use non-verbal cues to show engagement and professionalism',
            'Client interactions: Build trust through appropriate non-verbal communication',
            'Leadership presence: Develop commanding but approachable non-verbal style',
            'Cultural sensitivity: Adapt non-verbal communication to different cultural contexts',
            'Conflict resolution: Use non-verbal skills to de-escalate and build understanding',
            'Networking events: Project approachability and confidence through body language',
            'Presentation skills: Use non-verbal communication to enhance professional presentations',
            'Team building: Foster positive relationships through effective non-verbal communication',
            'Crisis communication: Maintain calm, confident presence during difficult situations'
          ],
          successCriteria: [
            'You consistently project professional confidence and competence',
            'You build strong relationships through effective non-verbal communication',
            'You excel in interviews and professional interactions',
            'You can read and respond to others\' non-verbal cues effectively',
            'You maintain appropriate professional boundaries and respect',
            'You adapt your non-verbal style to different professional contexts',
            'You use non-verbal communication to resolve conflicts and build understanding',
            'You establish yourself as a confident, trustworthy professional'
          ]
        },
        personal: {
          title: 'Personal Non-Verbal Connection',
          description: 'Develop authentic non-verbal communication skills for personal relationships and social interactions',
          instructions: [
            'Authentic expression: Let your true personality show through your non-verbal communication',
            'Emotional intelligence: Read and respond to others\' emotional non-verbal cues',
            'Relationship building: Use non-verbal communication to build deeper connections',
            'Conflict resolution: Use non-verbal skills to resolve personal conflicts peacefully',
            'Social confidence: Project approachability and warmth in social settings',
            'Family communication: Improve relationships through better non-verbal understanding',
            'Romantic relationships: Use non-verbal communication to build intimacy and trust',
            'Friendship dynamics: Strengthen friendships through effective non-verbal communication',
            'Cultural awareness: Respect and adapt to different cultural non-verbal norms',
            'Personal growth: Use non-verbal awareness for self-improvement and emotional intelligence'
          ],
          successCriteria: [
            'You build deeper, more meaningful personal relationships',
            'You feel confident and authentic in social situations',
            'You can read others\' emotions and respond appropriately',
            'You resolve conflicts more effectively through non-verbal understanding',
            'You project warmth and approachability that attracts others',
            'You maintain healthy boundaries while building connections',
            'You feel comfortable expressing yourself non-verbally',
            'You develop stronger emotional intelligence and social skills'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Natural ability to read others\' non-verbal cues and respond appropriately',
        'Good awareness of your own body language and its impact on others',
        'Effective use of eye contact and facial expressions to build connection',
        'Confident posture and presence that projects authority and competence',
        'Ability to adapt your non-verbal style to different situations and audiences'
      ],
      improvements: [
        'Work on maintaining consistent eye contact without staring or looking away too much',
        'Practice using more purposeful gestures to support and emphasize your words',
        'Develop better awareness of cultural differences in non-verbal communication',
        'Learn to control nervous habits like fidgeting or touching your face',
        'Build confidence in using non-verbal communication to build rapport and connection'
      ],
      nextSteps: [
        'Practice observing others\' non-verbal cues in daily interactions',
        'Record yourself in conversations and presentations to analyze your body language',
        'Study different cultural norms for non-verbal communication',
        'Practice power poses and confident body language daily',
        'Take acting or public speaking classes to improve your non-verbal skills',
        'Work with a coach or mentor to get feedback on your non-verbal communication'
      ]
    },
    badge: {
      name: 'Non-Verbal Master',
      emoji: '👥',
      description: 'Mastered non-verbal communication skills'
    },
    shareMessage: 'Just mastered the art of non-verbal communication! 👥 #BodyLanguage #Confidence'
  },
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution',
    emoji: '🤝',
    context: 'professional' as const,
    discover: {
      scenario: 'You\'re working on a group project and two team members are constantly arguing about the approach. The deadline is approaching, tensions are high, and you need to find a solution that works for everyone while maintaining team harmony.',
      problemExplanation: [
        'Different personalities and working styles are clashing',
        'Communication breakdowns are preventing progress',
        'Emotions are running high and affecting productivity',
        'No clear process for resolving disagreements',
        'Fear of confrontation is preventing honest discussion',
        'Lack of conflict resolution skills is making things worse'
      ],
      solutionApproach: [
        'Learn to identify the root causes of conflicts, not just symptoms',
        'Develop active listening skills to understand all perspectives',
        'Master techniques for de-escalating tense situations',
        'Build skills in finding win-win solutions that satisfy everyone',
        'Create a framework for addressing conflicts constructively',
        'Develop emotional intelligence to manage your own reactions'
      ]
    },
    video: {
      title: 'Master Conflict Resolution: Turn Disagreements into Opportunities',
      duration: 11,
      content: [
        'Understanding Conflict: Types, causes, and when conflicts are actually healthy',
        'The Conflict Resolution Process: A step-by-step framework for any situation',
        'Active Listening in Conflict: How to truly hear and understand all sides',
        'Emotional Intelligence: Managing your own emotions during difficult conversations',
        'De-escalation Techniques: How to calm tense situations and reduce hostility',
        'Finding Common Ground: Identifying shared interests and mutual goals',
        'Win-Win Solutions: Creative problem-solving that satisfies everyone',
        'Difficult Conversations: How to address sensitive topics constructively',
        'Cultural Considerations: Resolving conflicts across different backgrounds',
        'Mediation Skills: How to help others resolve their conflicts',
        'Preventing Future Conflicts: Building systems and processes that work',
        'Personal Conflict Style: Understanding your natural approach and adapting it'
      ]
    },
    quiz: {
      title: 'Conflict Resolution Quiz',
      questions: [
        {
          id: 21,
          question: 'What is the first step in resolving a conflict?',
          options: ['Take sides', 'Listen to all perspectives', 'Make a quick decision', 'Avoid the situation'],
          correct: 1,
          explanation: 'Listening to all perspectives helps you understand the root causes and find better solutions.'
        },
        {
          id: 22,
          question: 'What is the best approach when emotions are running high?',
          options: ['Ignore the emotions', 'Take a break and reconvene later', 'Push through quickly', 'Let everyone vent'],
          correct: 1,
          explanation: 'Taking a break allows emotions to cool down and enables more rational discussion.'
        },
        {
          id: 23,
          question: 'What does "finding common ground" mean in conflict resolution?',
          options: ['Agreeing on everything', 'Identifying shared interests and goals', 'Compromising on all issues', 'Avoiding difficult topics'],
          correct: 1,
          explanation: 'Finding common ground means identifying what everyone can agree on to build from there.'
        },
        {
          id: 24,
          question: 'What is the goal of win-win solutions?',
          options: ['One person wins', 'Everyone gets something they value', 'The loudest person wins', 'Avoiding the conflict'],
          correct: 1,
          explanation: 'Win-win solutions aim to satisfy the core needs of all parties involved.'
        },
        {
          id: 25,
          question: 'How can you prevent future conflicts?',
          options: ['Avoid difficult people', 'Create clear processes and expectations', 'Always agree with others', 'Work alone'],
          correct: 1,
          explanation: 'Clear processes and expectations help prevent misunderstandings that lead to conflicts.'
        }
      ]
    },
    challenge: {
      title: 'Master Conflict Resolution',
      description: 'Develop skills to resolve conflicts in all areas of life',
      contexts: {
        academic: {
          title: 'Academic Conflict Resolution',
          description: 'Resolve conflicts in group projects, study groups, and academic settings',
          instructions: [
            'Group project conflicts: Address different work styles and contribution levels',
            'Study group dynamics: Handle disagreements about study methods and schedules',
            'Professor interactions: Navigate grading disputes and academic expectations',
            'Peer pressure situations: Stand up for your values while maintaining relationships',
            'Competition vs. collaboration: Balance individual success with team goals',
            'Cultural differences: Bridge gaps in communication styles and expectations',
            'Time management conflicts: Resolve scheduling and deadline disagreements',
            'Academic integrity: Address cheating, plagiarism, and ethical issues',
            'Leadership challenges: Lead groups through difficult decisions and conflicts',
            'Feedback delivery: Give and receive constructive criticism effectively'
          ],
          successCriteria: [
            'You can identify the root causes of academic conflicts quickly',
            'You facilitate productive discussions that lead to solutions',
            'You maintain positive relationships even after disagreements',
            'You help groups reach consensus on difficult decisions',
            'You handle criticism and feedback constructively',
            'You prevent small issues from becoming major conflicts',
            'You create an environment where everyone feels heard and valued',
            'You develop systems that prevent future conflicts in academic settings'
          ]
        },
        professional: {
          title: 'Professional Conflict Resolution',
          description: 'Navigate workplace conflicts, team dynamics, and professional disagreements',
          instructions: [
            'Team dynamics: Address personality clashes and working style differences',
            'Project conflicts: Resolve disagreements about approaches and priorities',
            'Client relations: Handle difficult clients and service delivery issues',
            'Management challenges: Navigate conflicts with supervisors and subordinates',
            'Resource allocation: Resolve disputes about budgets, time, and personnel',
            'Performance issues: Address underperformance and accountability problems',
            'Cultural workplace conflicts: Bridge differences in communication and values',
            'Change management: Help teams adapt to new processes and expectations',
            'Ethical dilemmas: Navigate conflicts between personal values and company policies',
            'Crisis communication: Handle conflicts during high-stress situations'
          ],
          successCriteria: [
            'You resolve workplace conflicts without damaging professional relationships',
            'You maintain team productivity and morale during difficult times',
            'You help teams reach decisions that benefit the organization',
            'You handle difficult conversations with professionalism and respect',
            'You prevent conflicts from escalating and affecting broader teams',
            'You build trust and credibility as a conflict resolution expert',
            'You create processes that prevent future workplace conflicts',
            'You develop a reputation as someone who can handle difficult situations'
          ]
        },
        personal: {
          title: 'Personal Conflict Resolution',
          description: 'Resolve conflicts in personal relationships, family, and social situations',
          instructions: [
            'Family dynamics: Navigate generational differences and family expectations',
            'Friendship conflicts: Address issues without losing important relationships',
            'Romantic relationships: Handle disagreements and communication breakdowns',
            'Social group dynamics: Manage conflicts in friend groups and social circles',
            'Neighbor disputes: Resolve issues with neighbors and community members',
            'Financial conflicts: Handle money-related disagreements with family and friends',
            'Lifestyle differences: Navigate conflicts about values and life choices',
            'Social media conflicts: Handle online disagreements and digital drama',
            'Personal boundaries: Establish and maintain healthy relationship boundaries',
            'Emotional support: Help others through their conflicts and difficult times'
          ],
          successCriteria: [
            'You maintain healthy relationships even after disagreements',
            'You communicate your needs and boundaries clearly and respectfully',
            'You help others resolve their conflicts without taking sides',
            'You prevent small issues from damaging important relationships',
            'You create an environment where people feel safe to express themselves',
            'You handle emotional situations with empathy and understanding',
            'You build stronger relationships through effective conflict resolution',
            'You develop emotional intelligence and interpersonal skills'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Natural ability to see multiple perspectives and understand different viewpoints',
        'Good emotional intelligence and ability to stay calm during tense situations',
        'Effective communication skills that help de-escalate conflicts',
        'Creative problem-solving approach that finds win-win solutions',
        'Strong empathy and ability to understand others\' feelings and motivations'
      ],
      improvements: [
        'Work on managing your own emotional reactions during conflicts',
        'Practice active listening skills to better understand all perspectives',
        'Develop more confidence in addressing difficult conversations directly',
        'Learn to identify root causes rather than just addressing surface symptoms',
        'Build skills in facilitating group discussions and decision-making processes'
      ],
      nextSteps: [
        'Practice conflict resolution in low-stakes situations to build confidence',
        'Study different conflict resolution models and techniques',
        'Work with a mentor or coach to develop your conflict resolution skills',
        'Take courses in mediation, negotiation, or emotional intelligence',
        'Practice active listening and empathy in all your daily interactions',
        'Reflect on past conflicts to identify patterns and areas for improvement'
      ]
    },
    badge: {
      name: 'Conflict Resolver',
      emoji: '🤝',
      description: 'Mastered conflict resolution skills'
    },
    shareMessage: 'Just mastered the art of conflict resolution! 🤝 #Peacemaker #Leadership'
  },
  {
    id: 'presentation-skills',
    title: 'Presentation Skills',
    emoji: '🎯',
    context: 'professional' as const,
    discover: {
      scenario: 'You need to present your startup idea to potential investors, but you\'re struggling to create a compelling presentation that captures their attention and convinces them to invest. You have great ideas but don\'t know how to present them effectively.',
      problemExplanation: [
        'Lack of confidence in presenting to high-stakes audiences',
        'Difficulty organizing complex information into a clear narrative',
        'Not knowing how to engage and persuade different types of audiences',
        'Struggling with visual design and presentation aesthetics',
        'Uncertainty about handling questions and objections effectively',
        'Fear of public speaking and performance anxiety'
      ],
      solutionApproach: [
        'Master the art of storytelling to create compelling narratives',
        'Develop visual design skills to create impactful presentations',
        'Build confidence through practice and preparation techniques',
        'Learn to adapt your message for different audiences and contexts',
        'Develop skills in handling Q&A sessions and difficult questions',
        'Create a personal presentation style that feels authentic and engaging'
      ]
    },
    video: {
      title: 'Master Presentation Skills: From Ideas to Impact',
      duration: 13,
      content: [
        'The Power of Storytelling: How to structure presentations that captivate audiences',
        'Visual Design Mastery: Creating slides that enhance rather than distract',
        'Audience Analysis: Understanding your audience and tailoring your message',
        'Confidence Building: Techniques to overcome nervousness and project authority',
        'Body Language and Voice: Using non-verbal communication to enhance your message',
        'Engagement Strategies: Interactive elements and techniques to keep audiences engaged',
        'Data Visualization: Presenting complex information in clear, compelling ways',
        'Handling Q&A Sessions: Preparation techniques and graceful responses',
        'Technology Mastery: Using presentation tools and handling technical issues',
        'Cultural Considerations: Adapting presentations for diverse audiences',
        'Crisis Management: Recovering from mistakes and handling unexpected situations',
        'Personal Branding: Developing your unique presentation style and voice',
        'Practice and Preparation: Rehearsal techniques that build confidence and competence'
      ]
    },
    quiz: {
      title: 'Presentation Skills Quiz',
      questions: [
        {
          id: 26,
          question: 'What is the most important element of a successful presentation?',
          options: ['Perfect slides', 'Knowing your audience', 'Speaking loudly', 'Using lots of data'],
          correct: 1,
          explanation: 'Knowing your audience allows you to tailor your message and delivery for maximum impact.'
        },
        {
          id: 27,
          question: 'How should you structure your presentation?',
          options: ['Tell them what you\'ll tell them, tell them, tell them what you told them', 'Start with data', 'End with questions', 'Use only bullet points'],
          correct: 0,
          explanation: 'The classic structure: introduction, body, conclusion helps audiences follow and remember your message.'
        },
        {
          id: 28,
          question: 'What is the best way to handle nervousness before a presentation?',
          options: ['Avoid practicing', 'Practice extensively and prepare thoroughly', 'Wing it', 'Read from notes'],
          correct: 1,
          explanation: 'Thorough preparation and practice build confidence and reduce nervousness.'
        },
        {
          id: 29,
          question: 'How much text should you put on each slide?',
          options: ['As much as possible', '7 words or less', 'Full sentences', 'No text at all'],
          correct: 1,
          explanation: 'Minimal text (7 words or less) keeps slides clean and forces you to speak, not read.'
        },
        {
          id: 30,
          question: 'What should you do if you make a mistake during a presentation?',
          options: ['Stop and apologize', 'Continue as if nothing happened', 'Acknowledge it briefly and move on', 'Ask the audience what to do'],
          correct: 2,
          explanation: 'Briefly acknowledge mistakes and continue - audiences are more forgiving than you think.'
        }
      ]
    },
    challenge: {
      title: 'Master Presentation Skills',
      description: 'Develop powerful presentation skills for all contexts',
      contexts: {
        academic: {
          title: 'Academic Presentation Excellence',
          description: 'Excel in academic presentations, research presentations, and scholarly communication',
          instructions: [
            'Research presentation structure: Organize complex academic content clearly',
            'Visual design for academia: Create slides that support scholarly communication',
            'Data presentation: Present research findings and statistical analysis effectively',
            'Audience engagement: Keep academic audiences engaged and interested',
            'Q&A handling: Answer challenging academic questions with confidence',
            'Time management: Stay within presentation time limits while covering all content',
            'Citation and credibility: Present sources and evidence professionally',
            'Collaborative presentations: Work effectively with co-presenters and teams',
            'Conference presentations: Adapt content for different academic conferences',
            'Feedback integration: Use audience feedback to improve future presentations'
          ],
          successCriteria: [
            'You present complex academic content in an accessible and engaging way',
            'You maintain audience attention throughout lengthy academic presentations',
            'You handle challenging questions with confidence and expertise',
            'You receive positive feedback from professors and academic peers',
            'You contribute meaningfully to academic discussions and debates',
            'You build credibility and recognition in your academic field',
            'You help others understand complex concepts through clear presentation',
            'You develop a reputation as an effective academic communicator'
          ]
        },
        professional: {
          title: 'Professional Presentation Mastery',
          description: 'Master workplace presentations, client pitches, and business communication',
          instructions: [
            'Business presentation structure: Organize content for maximum business impact',
            'Client pitch development: Create compelling presentations that win business',
            'Executive communication: Present to senior leadership and decision-makers',
            'Sales presentations: Use presentation skills to drive sales and revenue',
            'Team communication: Present updates, changes, and initiatives to teams',
            'Crisis communication: Handle difficult presentations during challenging times',
            'Technology integration: Use presentation tools and technology effectively',
            'Cross-cultural presentations: Adapt content for diverse business audiences',
            'Follow-up strategies: Use presentations to drive action and next steps',
            'Personal branding: Develop your professional presentation style and reputation'
          ],
          successCriteria: [
            'You deliver presentations that drive business results and decisions',
            'You win clients and business through compelling presentations',
            'You communicate effectively with all levels of the organization',
            'You handle difficult questions and objections with professionalism',
            'You adapt your style to different business contexts and audiences',
            'You use presentations to advance your career and professional goals',
            'You build a reputation as an effective business communicator',
            'You help others improve their presentation skills through mentoring'
          ]
        },
        personal: {
          title: 'Personal Presentation Skills',
          description: 'Develop presentation skills for personal projects, community involvement, and life events',
          instructions: [
            'Personal project presentations: Present your ideas and projects to friends and family',
            'Community involvement: Present at community meetings and local events',
            'Wedding speeches: Deliver meaningful speeches at important life events',
            'Volunteer presentations: Present causes and organizations you care about',
            'Personal branding: Present yourself effectively in social and professional settings',
            'Creative presentations: Present artistic and creative projects with confidence',
            'Educational presentations: Teach others about topics you\'re passionate about',
            'Social media presentations: Create compelling content for online audiences',
            'Family presentations: Present important information to family members',
            'Personal growth: Use presentations as a tool for self-expression and development'
          ],
          successCriteria: [
            'You feel confident presenting in any personal or social setting',
            'You effectively communicate your ideas and passions to others',
            'You inspire and motivate others through your presentations',
            'You build stronger relationships through effective communication',
            'You use presentations to advance causes and projects you care about',
            'You develop a personal style that feels authentic and engaging',
            'You help others by sharing your knowledge and experiences',
            'You grow personally and professionally through presentation opportunities'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'Natural storytelling ability that captivates and engages audiences',
        'Strong visual sense and ability to create compelling presentation designs',
        'Good understanding of audience needs and how to tailor messages accordingly',
        'Confident delivery style that projects authority and credibility',
        'Effective use of body language and vocal techniques to enhance your message'
      ],
      improvements: [
        'Work on managing nervousness and building confidence in high-stakes situations',
        'Practice organizing complex information into clear, logical structures',
        'Develop better skills in handling difficult questions and unexpected situations',
        'Learn to use visual aids more effectively to support rather than replace your message',
        'Build skills in adapting your presentation style to different audiences and contexts'
      ],
      nextSteps: [
        'Practice presenting regularly, even in low-stakes situations',
        'Study great presenters and analyze their techniques and styles',
        'Join a public speaking group or take presentation skills courses',
        'Record yourself presenting and review for areas of improvement',
        'Seek feedback from trusted colleagues, mentors, or presentation coaches',
        'Develop your unique presentation style and voice through experimentation'
      ]
    },
    badge: {
      name: 'Presentation Master',
      emoji: '🎯',
      description: 'Mastered presentation skills'
    },
    shareMessage: 'Just mastered the art of powerful presentations! 🎯 #PresentationSkills #Confidence'
  }
];

const testAssessment = {
  id: 'module1-assessment',
  title: 'Communication Skills Assessment',
  description: 'Comprehensive test covering all communication skills subtopics',
  questions: [
    // Active Listening Questions (1-5)
    {
      id: 1,
      question: 'What is active listening?',
      options: ['Hearing words', 'Fully engaging with the speaker', 'Taking notes', 'Agreeing with everything'],
      correct: 1,
      explanation: 'Active listening involves fully engaging with the speaker, not just hearing words.'
    },
    {
      id: 2,
      question: 'Which of the following is NOT a component of active listening?',
      options: ['Maintaining eye contact', 'Interrupting to show understanding', 'Asking clarifying questions', 'Reflecting on what was said'],
      correct: 1,
      explanation: 'Interrupting is not part of active listening - it disrupts the speaker\'s flow.'
    },
    {
      id: 3,
      question: 'In a job interview, active listening helps you:',
      options: ['Answer questions before they\'re fully asked', 'Understand the interviewer\'s needs better', 'Appear more confident', 'Finish their sentences'],
      correct: 1,
      explanation: 'Active listening helps you understand the interviewer\'s needs and respond appropriately.'
    },
    {
      id: 4,
      question: 'What should you do when someone is sharing personal information?',
      options: ['Give immediate advice', 'Listen without judgment', 'Share your similar experience', 'Change the subject'],
      correct: 1,
      explanation: 'Active listening requires listening without judgment, especially for personal matters.'
    },
    {
      id: 5,
      question: 'Which technique helps ensure you understood correctly?',
      options: ['Nodding your head', 'Paraphrasing what you heard', 'Taking detailed notes', 'Asking many questions'],
      correct: 1,
      explanation: 'Paraphrasing what you heard confirms your understanding and shows you were listening.'
    },
    // Public Speaking Questions (6-10)
    {
      id: 6,
      question: 'What is the most important element of public speaking?',
      options: ['Perfect pronunciation', 'Confidence and preparation', 'Loud voice', 'Complex vocabulary'],
      correct: 1,
      explanation: 'Confidence and preparation are the foundation of effective public speaking.'
    },
    {
      id: 7,
      question: 'How should you handle nervousness before a presentation?',
      options: ['Avoid the presentation', 'Practice and prepare thoroughly', 'Speak faster to get it over with', 'Read directly from slides'],
      correct: 1,
      explanation: 'Thorough practice and preparation are the best ways to manage presentation nerves.'
    },
    {
      id: 8,
      question: 'What makes a presentation engaging for Gen Z audiences?',
      options: ['Long, detailed explanations', 'Interactive elements and relatable examples', 'Formal language only', 'Reading from notes'],
      correct: 1,
      explanation: 'Gen Z audiences respond well to interactive elements and relatable, authentic content.'
    },
    {
      id: 9,
      question: 'Which body language shows confidence during a presentation?',
      options: ['Arms crossed', 'Standing tall with open posture', 'Looking at the floor', 'Fidgeting with hands'],
      correct: 1,
      explanation: 'Open posture and standing tall project confidence and authority.'
    },
    {
      id: 10,
      question: 'What should you do if you make a mistake during a presentation?',
      options: ['Stop and apologize profusely', 'Continue confidently and correct if needed', 'Start over', 'Ignore it completely'],
      correct: 1,
      explanation: 'Continue confidently and make corrections naturally - most audiences won\'t notice minor mistakes.'
    },
    // Written Communication Questions (11-15)
    {
      id: 11,
      question: 'What is the most important aspect of professional email writing?',
      options: ['Using complex vocabulary', 'Clear subject line and concise message', 'Long, detailed explanations', 'Informal language'],
      correct: 1,
      explanation: 'Professional emails should have clear subject lines and be concise and to the point.'
    },
    {
      id: 12,
      question: 'How should you structure a professional email?',
      options: ['One long paragraph', 'Greeting, body, closing, signature', 'Just the message', 'Multiple attachments'],
      correct: 1,
      explanation: 'Professional emails should follow a clear structure: greeting, body, closing, and signature.'
    },
    {
      id: 13,
      question: 'What tone is most appropriate for workplace communication?',
      options: ['Casual and friendly', 'Professional but approachable', 'Formal and distant', 'Humorous and relaxed'],
      correct: 1,
      explanation: 'Professional but approachable tone balances professionalism with human connection.'
    },
    {
      id: 14,
      question: 'When writing a resume, what should you prioritize?',
      options: ['Length and detail', 'Relevance and impact', 'Creative formatting', 'Personal opinions'],
      correct: 1,
      explanation: 'Resumes should prioritize relevant experience and quantifiable impact over length.'
    },
    {
      id: 15,
      question: 'What makes written communication effective for Gen Z?',
      options: ['Formal language only', 'Authentic voice and clear purpose', 'Long paragraphs', 'Complex sentences'],
      correct: 1,
      explanation: 'Gen Z values authentic communication that is clear, purposeful, and genuine.'
    },
    // Non-Verbal Communication Questions (16-20)
    {
      id: 16,
      question: 'What percentage of communication is non-verbal?',
      options: ['25%', '55%', '70%', '90%'],
      correct: 2,
      explanation: 'Research shows that approximately 70% of communication is non-verbal.'
    },
    {
      id: 17,
      question: 'Which body language conveys confidence?',
      options: ['Slouched posture', 'Open posture with shoulders back', 'Arms crossed', 'Looking down'],
      correct: 1,
      explanation: 'Open posture with shoulders back projects confidence and approachability.'
    },
    {
      id: 18,
      question: 'What should you do with your hands during a presentation?',
      options: ['Keep them in pockets', 'Use purposeful gestures', 'Fidget constantly', 'Hide behind back'],
      correct: 1,
      explanation: 'Purposeful gestures enhance communication and show engagement.'
    },
    {
      id: 19,
      question: 'How should you maintain eye contact in a group setting?',
      options: ['Stare at one person', 'Scan the room naturally', 'Look at the ceiling', 'Avoid eye contact'],
      correct: 1,
      explanation: 'Natural scanning of the room makes everyone feel included and engaged.'
    },
    {
      id: 20,
      question: 'What does crossed arms typically communicate?',
      options: ['Confidence', 'Defensiveness or closed-off attitude', 'Relaxation', 'Professionalism'],
      correct: 1,
      explanation: 'Crossed arms often signal defensiveness or being closed off to communication.'
    },
    // Conflict Resolution Questions (21-25)
    {
      id: 21,
      question: 'What is the first step in resolving workplace conflict?',
      options: ['Assign blame', 'Listen to all parties involved', 'Make a quick decision', 'Avoid the situation'],
      correct: 1,
      explanation: 'Effective conflict resolution starts with understanding all perspectives through active listening.'
    },
    {
      id: 22,
      question: 'How should you approach a difficult conversation?',
      options: ['Be aggressive', 'Stay calm and focus on facts', 'Avoid the topic', 'Make assumptions'],
      correct: 1,
      explanation: 'Difficult conversations require calm, fact-based approaches to find solutions.'
    },
    {
      id: 23,
      question: 'What is the goal of conflict resolution?',
      options: ['Winning the argument', 'Finding a mutually beneficial solution', 'Proving you\'re right', 'Avoiding confrontation'],
      correct: 1,
      explanation: 'The goal is finding solutions that work for everyone involved.'
    },
    {
      id: 24,
      question: 'How can you de-escalate a tense situation?',
      options: ['Raise your voice', 'Use "I" statements and stay calm', 'Make demands', 'Threaten consequences'],
      correct: 1,
      explanation: '"I" statements and calm demeanor help de-escalate tense situations.'
    },
    {
      id: 25,
      question: 'What should you do if you\'re wrong in a conflict?',
      options: ['Defend your position', 'Acknowledge the mistake and apologize', 'Blame others', 'Ignore the issue'],
      correct: 1,
      explanation: 'Acknowledging mistakes and apologizing shows maturity and helps resolve conflicts.'
    },
    // Presentation Skills Questions (26-30)
    {
      id: 26,
      question: 'What is the most important element of a successful presentation?',
      options: ['Perfect slides', 'Knowing your audience', 'Speaking loudly', 'Using complex data'],
      correct: 1,
      explanation: 'Understanding your audience is crucial for creating relevant and engaging presentations.'
    },
    {
      id: 27,
      question: 'How should you structure a presentation?',
      options: ['Jump straight to details', 'Tell them what you\'ll tell them, tell them, tell them what you told them', 'Wing it', 'Read from notes'],
      correct: 1,
      explanation: 'The classic structure: introduction, main content, and conclusion helps audiences follow your message.'
    },
    {
      id: 28,
      question: 'What makes a presentation memorable for Gen Z?',
      options: ['Long explanations', 'Interactive elements and storytelling', 'Complex charts', 'Formal language'],
      correct: 1,
      explanation: 'Gen Z audiences engage with interactive elements and compelling storytelling.'
    },
    {
      id: 29,
      question: 'How should you handle questions during a presentation?',
      options: ['Avoid them', 'Answer confidently and redirect if needed', 'Make up answers', 'Ignore them'],
      correct: 1,
      explanation: 'Confident answers and strategic redirection maintain presentation flow.'
    },
    {
      id: 30,
      question: 'What is the key to building rapport with your audience?',
      options: ['Being perfect', 'Being authentic and relatable', 'Using big words', 'Reading from slides'],
      correct: 1,
      explanation: 'Authenticity and relatability create genuine connections with audiences.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! You have excellent communication skills!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great job! You have strong communication skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good work! Keep practicing to improve further!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Keep learning! Review the material and try again!', xpReward: 100 }
  }
};

interface Module1SimpleProps {
  onNavigateHome?: () => void;
  onNavigateCatalog?: () => void;
}

const Module1Simple: React.FC<Module1SimpleProps> = ({ onNavigateHome, onNavigateCatalog }) => {
  console.log('Module1Simple: Creating module with test data');
  console.log('Test subtopics:', testSubtopics);
  console.log('Test subtopics length:', testSubtopics.length);
  
  const moduleProps: ModuleTemplateProps = {
    // Module identification
    moduleId: 'communication-skills',
    moduleTitle: 'Communication Skills',
    moduleDescription: 'Master communication for academic success, job interviews, workplace excellence, and personal relationships.',
    moduleColor: 'bg-gradient-to-r from-green-500 to-blue-500',
    moduleNumber: 1,
    
    // Intro content
    learningObjectives: [
      'Active listening for academic and professional success',
      'Public speaking confidence for interviews and presentations',
      'Professional written communication for workplace and job search',
      'Non-verbal communication for personal and professional relationships',
      'Conflict resolution for academic and workplace situations',
      'Presentation skills for academic and professional audiences'
    ],
    moduleStructure: {
      introVideo: { duration: 5 },
      subtopics: { count: 6, totalDuration: 30 },
      finalAssessment: { duration: 60 }
    },
    
    // Data
    subtopics: testSubtopics,
    assessment: testAssessment,
    
    // Progress management functions
    loadModuleProgress: () => ({
      moduleId: 'communication-skills',
      currentSubtopic: 0,
      completedSubtopics: [],
      quizScores: {},
      badges: [],
      challengeResponses: {},
      lastAccessed: new Date().toISOString(),
      totalXP: 0,
      successStreak: 0,
      highestStreak: 0,
      lastStreakDate: new Date().toISOString()
    }),
    saveModuleProgress: (progress: any) => console.log('Saving progress:', progress),
    updateSubtopicProgress: (id: string, progress: number) => console.log(`Updated ${id}: ${progress}%`),
    
    // Navigation
    onNavigateHome,
    onNavigateCatalog
  };

  console.log('Module1Simple: Module props created:', moduleProps);
  console.log('Module1Simple: Subtopics in props:', moduleProps.subtopics);
  console.log('Module1Simple: Subtopics length:', moduleProps.subtopics?.length);

  return <ModuleTemplate {...moduleProps} />;
};

export default Module1Simple;
