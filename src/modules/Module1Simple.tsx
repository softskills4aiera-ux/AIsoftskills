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
      scenario: "Business Law class. Prof explaining Contract Act. You: scrolling Instagram. 20 mins later: ZERO notes, no idea what Section 10 is. Classmate can explain perfectly.",
      problemExplanation: [
        "Physical present, mental absent: Attend class, learn nothing. Body there, brain elsewhere",
        "Miss critical info: Prof emphasizes what's important. YouTube doesn't know YOUR prof's focus",
        "No prof rapport: Don't engage = no recommendation letters. Profs remember active students",
        "Questions stay in head: Confusion compounds. Fall behind. Classmates who listen get better grades LESS study"
      ],
      solutionApproach: [
        "Phone airplane mode: BEFORE class. Notifications = attention killers",
        "Cornell notes: Main points left, details right, summary bottom. Active processing",
        "Mental paraphrase: Every 5 mins, summarize in own words. Can't? Ask NOW",
        "5-min review: Can explain 3 key concepts? If not, weren't listening"
      ]
    },
    video: {
      title: 'Stop Zoning Out: Active Listening for Grades, Jobs & Life (B.Com Edition)',
      duration: 8,
      content: [
        'Master active listening to excel in academics, interviews, and relationships.',
        'Learn the exact techniques that separate engaged students from distracted ones.',
        'Discover how listening skills impact your grades, career, and personal success.',
        'These strategies will transform how you learn, work, and connect with others.'
      ],
      script: `**INTRO (0:00-0:30)**

B.Com crew! Be honest - you attend 3-hour lectures but remember NOTHING? Prof explains critical exam concepts, you are nodding but thinking about lunch? Interview question: "Tell me about yourself" and you blank because you were not listening to the ACTUAL question? Active listening is not just "paying attention" - it is a SKILL that gets you better grades, jobs, and relationships. Let me show you how!

**SECTION 1: The Cost of Fake Listening (0:30-1:30)**

Here is what most students do:
- Physically in class ✅
- Phone on lap, scrolling Instagram 📱
- Nodding occasionally (fake engagement)
- Professor: "This will be on the exam!" → You: heard nothing
- Result: 0 notes, have to re-learn from YouTube at 2 AM

The REAL cost:
1. Wasted 3 hours in class (could have stayed home!)
2. Missed what professor thinks is important (YouTube does not know YOUR prof emphasis)
3. No prof relationship = no recommendation letters for placements
4. Re-learning takes 2X time vs learning it right the first time in class

Active listening = learn in class, light review at home
Fake listening = zone out in class, heavy learning at home (inefficient!)

**SECTION 2: The 3 Levels of Listening (1:30-3:00)**

**Level 1: Fake Listening (Most Students ❌)**
- You HEAR words but brain is elsewhere
- Can repeat last sentence but no comprehension
- Example: Prof says "Section 10 of Contract Act deals with..." → You hear "Section... Act... blah blah"

**Level 2: Selective Listening (Average Students 😐)**
- You listen for "important stuff" (exam keywords)
- Miss context, connections, deeper understanding
- Can answer MCQs but struggle with application questions

**Level 3: Active Listening (Top Students ✅)**
- 100% mental presence
- Mental paraphrasing: "So Section 10 means agreements need consideration = no free lunches in contracts"
- Connecting to existing knowledge: "Oh! Like we learned in Economics - no free lunch!"
- Result: Deep understanding, easy recall, can teach others

Goal: Move from Level 1 → Level 3!

**SECTION 3: The Active Listening Toolkit (3:00-5:00)**

**Tool 1: The Focus Ritual (Before Class)**
- Phone on airplane mode (no vibrations, no glances)
- Open notebook to fresh page (not laptop - typing creates multitasking temptation)
- Mental commitment: "Next 60 min = ONLY this lecture"

**Tool 2: Cornell Note-Taking (During Class)**
Left column: Main concepts (Section 10: Consideration)
Right column: Details (What is it? Why matters? Examples?)
Bottom: Summary (after class, write 3-sentence summary from memory)

Why Cornell? Forces active processing, not passive transcription!

**Tool 3: The Paraphrase Test (Every 10 Min)**
Prof finishes explaining a concept → You mentally rephrase:
Prof: "Consideration is essential for contract validity"
You: "So basically, both parties must give something of value, no one-sided deals"

If you CANNOT paraphrase = you were not listening → Ask question NOW!

**Tool 4: Strategic Questioning**
Bad question: "Can you repeat that?" (shows you were not listening)
Good question: "So if I understand correctly, consideration means both parties benefit? What happens if consideration is inadequate?"

Shows you WERE listening + want deeper understanding!

**SECTION 4: Active Listening in Job Interviews (5:00-6:30)**

Interview Fail:
Interviewer: "Tell me about a time you faced a challenge in a team project"
You (not listening): "I am a hard worker and team player..." ❌
(You answered generic "strengths" question, not the ACTUAL question!)

Interview Win:
Interviewer: "Tell me about a time you faced a challenge in a team project"
You (active listening): Heard "challenge" + "team" → Answer with SPECIFIC challenge story ✅

Active Listening = Answer what they ASKED, not what you prepared!

Pro Tip: In interviews, take 2-second pause before answering
→ Shows you are thinking (not pre-programmed robot)
→ Gives you time to process the ACTUAL question

**SECTION 5: Active Listening in Relationships (Personal Life) (6:30-7:30)**

Your friend: "I am so stressed about placements..."
Fake listening: "Yeah, me too! By the way, did you see the new iPhone?" ❌
(You made it about YOU, dismissed their feelings)

Active listening:
1. Pause your agenda (stop thinking about YOUR placement stress)
2. Reflect emotion: "Sounds really overwhelming for you"
3. Ask open question: "What is stressing you most - resume? interviews? competition?"
4. THEN offer support: "Want to practice mock interviews together?"

Result: Deeper friendship, they feel heard, you become their go-to person!

**CONCLUSION (7:30-8:00)**

Let us recap Active Listening:
1. **Focus Ritual** - Phone away, mental commitment before listening
2. **Cornell Notes** - Active processing, not passive transcription
3. **Paraphrase Test** - Every 10 min, can you rephrase what you heard?
4. **Strategic Questions** - Show you listened + want to understand deeper
5. **Reflect Emotions** - In personal contexts, mirror feelings back

Real talk: Active listening is a SUPERPOWER. Better grades (learn in class), better jobs (answer actual interview questions), better relationships (people feel heard). All from ONE skill!

Your action plan TODAY:
1. Next class: Try phone on airplane mode + Cornell notes
2. Test yourself: Can you summarize the lecture in 3 sentences?
3. Ask 1 strategic question to show engagement

Drop a comment - what is your biggest listening challenge? Let us fix it! Peace!`
    },
    quiz: {
      title: 'Active Listening Quiz',
      questions: [
        {
          id: 1,
          question: 'Prof says "Section 10 = exam!" You missed it checking Instagram. What\'s wrong?',
          options: [
            'Professor too quiet',
            'Fake listening - body here, mind gone',
            'Need classmate notes',
            'Topic too hard'
          ],
          correct: 1,
          explanation: 'Fake listening = hearing but brain elsewhere (phone, daydreaming). Body in class, mind absent = zero learning. Active listening = 100% mental presence. Phone off, focus on speaker, paraphrase mentally. Prof knows exam-critical stuff - YouTube doesn\'t! Miss it = 2 AM cramming.'
        },
        {
          id: 2,
          question: '60-min lecture done. You remember nothing. Classmate explains 5 points. How?',
          options: [
            'Naturally smarter',
            'Active listening - Cornell notes + mental paraphrasing',
            'Recorded everything',
            'Sat front row'
          ],
          correct: 1,
          explanation: 'Active listening = ACTIVE processing, not passive. Cornell notes: left = concepts, right = details, bottom = summary. Mental paraphrasing every 10 min: "Prof said consideration = essential, so no one-sided contracts." Ask questions: "What if consideration inadequate?" Forces brain to PROCESS, not just hear. Same 60 min, different results!'
        },
        {
          id: 3,
          question: 'Interview: "Tell me about a failure." You: "I\'m a fast learner." What\'s wrong?',
          options: [
            'Perfect answer',
            'Didn\'t listen - asked failure, gave strengths',
            'Interviewer unclear',
            'Too nervous'
          ],
          correct: 1,
          explanation: 'Active listening = answer what they ASKED, not what you PREPARED. They asked FAILURE, you answered STRENGTHS (autopilot, not listening). Pro tip: 2-second pause before answering - shows processing actual question, not script. Interviewers spot fake listening instantly. Active listening = address their specific question with relevant example.'
        },
        {
          id: 4,
          question: 'Prof explains 10 min. You took notes but can\'t explain to friend. Missing what?',
          options: [
            'Need more notes',
            'Passive transcription, not active processing',
            'Concept too difficult',
            'Need to re-read'
          ],
          correct: 1,
          explanation: 'Detailed notes ≠ understanding. You were transcription machine, not learner. Active listening = PARAPHRASING: after each concept, mentally rephrase in YOUR words. "Section 10: consideration essential" → "Basically, contracts need both sides to give something valuable, no freebies." Can\'t paraphrase = didn\'t listen actively. Test: Can teach this to 10-year-old? No = only copied words, didn\'t process meaning.'
        },
        {
          id: 5,
          question: 'Friend: "Stressed about placements." You: "Me too! New iPhone launched!" Mistake?',
          options: [
            'Being supportive',
            'Made it about YOU, dismissed their feelings',
            'Tried to cheer up',
            'Changed topic'
          ],
          correct: 1,
          explanation: 'Active listening = (1) Pause YOUR agenda (stop thinking about your stress), (2) Reflect emotion: "Sounds overwhelming," (3) Ask open question: "What stresses you most?" (4) THEN offer support. You failed steps 1-2 (made it about you, dismissed feelings). Result: Friend feels unheard, relationship weakens. Active listening builds deep connections - people remember who made them feel HEARD.'
        }
      ]
    },
    challenge: {
      title: 'Practice Active Listening',
      description: 'Practice active listening in a real conversation',
      contexts: {
        academic: {
          title: 'Academic Active Listening Mastery',
          description: 'You are in a Cost Accounting lecture where the professor is explaining Process Costing vs Job Costing - a critical topic for your upcoming exam. Last time you zoned out during Marginal Costing and scored poorly. This time, you will use active listening to ace it.',
          instructions: [
            '1. Pre-Lecture Prep (5 mins before class): Skim your textbook Chapter 5 (Process Costing basics). Write 2 questions you already have: "How is equivalent production calculated?" and "When do companies use process costing vs job costing?" This primes your brain to HUNT for answers during the lecture.',
            '2. Strategic Seating: Sit in the front 3 rows, center position. Why? Fewer distractions, easier eye contact with professor, harder to check your phone. If friends sit in the back, politely decline - your grades matter more than socializing during class.',
            '3. The 3-Level Listening Framework (During Lecture): Level 1 (Hear): Professor says "Process costing is used in continuous production." Level 2 (Understand): You mentally rephrase: "So like oil refineries or cement factories where products are identical." Level 3 (Apply): You think: "This is why Amul uses process costing for milk processing!" Practice all 3 levels for EVERY major concept.',
            '4. Active Note-Taking (Cornell Method): Divide your page: Left 30% = Keywords (Process Costing, Equivalent Units, FIFO Method), Right 70% = Explanations + Examples, Bottom 20% = Summary. When professor says "This is important for exams," mark with ⭐. When confused, mark with ❓ and ask later.',
            '5. Non-Verbal Engagement Signals: Nod when you understand, lean forward during complex topics, make eye contact every 30 seconds, furrow brow when confused (professors notice and often re-explain). Avoid: yawning, checking time, doodling, whispering to neighbors.',
            '6. Strategic Questioning (Ask 1-2 per lecture): Wait for natural pauses. Use this formula: "You mentioned [concept]. Could you clarify [specific confusion]?" Example: "You mentioned equivalent units. Could you clarify how we handle units that are 60% complete?" Avoid vague questions like "I did not understand anything."',
            '7. Post-Lecture Consolidation (10 mins after class): Immediately write a 3-sentence summary: "Today we learned process costing is for continuous production. Key formula: Equivalent Units = Units Completed + (WIP × % Completion). FIFO and Weighted Average are two methods." Then, identify 1 concept to research/ask TA about.',
            '8. Study Group Application (Within 48 hours): In your study group, practice the "Teach-Back" method: "Let me explain process costing as I understood it..." If you can teach it clearly, you listened actively. If you stumble, you were passive. Ask group members to correct your understanding.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Multitasking trap: "I will just quickly reply to this WhatsApp message during class." Result: You miss the next 5 minutes of explanation because your brain cannot context-switch instantly. Solution: Phone on silent, placed in bag, not on desk.',
            '• Transcription machine syndrome: Writing every single word the professor says without processing meaning. You end up with 10 pages of notes but zero understanding. Solution: Listen first, then write key points in YOUR words.',
            '• Question anxiety: "My question might sound stupid, I will not ask." Result: You stay confused, fail the exam, then regret it. Reality: 5 other students have the same question. Solution: Ask during class or immediately after - professors respect curiosity.',
            '• The "I will study later" delusion: Not reviewing notes within 24 hours. Result: Forgetting 80% of the lecture content (Ebbinghaus Forgetting Curve). Solution: Spend 10 minutes same evening rewriting notes + adding textbook examples.',
            '• Passive presence: Physically in class, mentally planning weekend trip. You hear words but do not process meaning. Solution: Set a micro-goal each lecture: "I will understand at least 3 new concepts deeply today."'
          ],
          successCriteria: [
            '✅ You can explain Process Costing to a classmate WITHOUT looking at notes 2 hours after the lecture',
            '✅ You ask at least 1 clarifying question per lecture that shows you were actively processing (not just hearing)',
            '✅ Your exam score improves by 15-20% compared to topics where you passively listened',
            '✅ Professors recognize you by name and appreciate your engagement (builds rapport for recommendation letters)',
            '✅ You retain 70%+ of lecture content after 1 week (vs 20% for passive listeners)',
            '✅ Study group members ask YOU to explain concepts because your understanding is deeper'
          ]
        },
        professional: {
          title: 'Professional Active Listening Excellence',
          description: 'You are in a virtual internship interview for a Financial Analyst role at a Big 4 firm. The interviewer is explaining the job responsibilities, company culture, and asking behavioral questions. Your active listening will determine if you get the offer - they are evaluating not just your answers, but how well you LISTEN and engage.',
          instructions: [
            '1. Pre-Interview Listening Prep (30 mins before): Research the company, role, and interviewer (LinkedIn). Write down 3 things you want to LISTEN for: (a) What skills do they emphasize most? (b) What are the team dynamics? (c) What are growth opportunities? This gives you a "listening mission."',
            '2. Technical Setup for Virtual Listening: Use wired headphones (not Bluetooth - avoids lag/disconnection). Close all tabs except the meeting. Put phone on airplane mode. Position camera at eye level. Ensure good lighting on your face so they can see your engaged expressions. Test audio 10 mins before.',
            '3. The RASA Framework (During Interview): R = Receive (Give full attention, no distractions). A = Appreciate (Nod, smile, say "That is interesting"). S = Summarize (Paraphrase key points: "So you are looking for someone with strong Excel skills and client communication?"). A = Ask (Follow-up questions: "Could you tell me more about the team structure?").',
            '4. Strategic Note-Taking (Have a notebook visible): When interviewer mentions key responsibilities, jot down 2-3 keywords: "Financial modeling, Client reports, Team collaboration." Then, reference these in your answers: "You mentioned financial modeling - I have experience with DCF models in my coursework." This shows you were listening actively.',
            '5. Non-Verbal Engagement (Critical in Virtual Interviews): Maintain eye contact with camera (not screen). Nod every 15-20 seconds. Lean slightly forward to show interest. Smile genuinely when appropriate. Avoid: looking away, fidgeting, blank stare, checking time. Interviewers notice EVERYTHING on video.',
            '6. The Pause-Process-Respond Technique: When asked a question, PAUSE 2-3 seconds before answering. This shows you are processing, not just blurting. Say: "That is a great question. Let me think..." Then structure your answer using STAR method (Situation, Task, Action, Result). Reference something they said earlier to show continuity.',
            '7. Active Listening Through Questions (Ask 2-3 at the end): Avoid generic questions like "What is the culture?" Instead, reference something they mentioned: "You mentioned the team works on cross-border transactions. Could you share an example of a recent project?" This proves you were listening throughout.',
            '8. Post-Interview Follow-Up (Within 24 hours): Send a thank-you email that references 2-3 specific things they said: "Thank you for explaining the financial modeling process your team uses. I am particularly excited about the opportunity to work on client presentations, as you mentioned." This reinforces your active listening.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• The "waiting to speak" trap: While the interviewer is talking, you are mentally rehearsing your answer instead of listening. Result: You miss key information and give irrelevant answers. Solution: Focus 100% on their words, then take 2 seconds to formulate your response.',
            '• Over-talking syndrome: Giving 5-minute rambling answers without checking if the interviewer wants more details. Result: You seem self-absorbed, not collaborative. Solution: Answer in 60-90 seconds, then ask: "Would you like me to elaborate on any part?"',
            '• Zero follow-up questions: Not asking questions at the end shows you were not engaged. Result: Interviewer thinks you are not genuinely interested. Solution: Prepare 5 questions beforehand, but also ask 1-2 spontaneous questions based on what they said.',
            '• Ignoring non-verbal cues: Interviewer looks confused or checks time, but you keep talking. Result: You seem oblivious and low in emotional intelligence. Solution: Watch their facial expressions - if they look puzzled, pause and ask: "Does that answer your question?"',
            '• The "uh-huh" autopilot: Saying "yes, yes" repeatedly without actually processing. Result: When they ask a follow-up, you are caught off-guard. Solution: Paraphrase key points to prove understanding: "So the role involves both quantitative analysis and client communication, correct?"'
          ],
          successCriteria: [
            '✅ You can recall and reference 5+ specific things the interviewer mentioned during your follow-up email',
            '✅ Interviewer comments: "You asked great questions" or "I can tell you were really engaged" (direct feedback on listening)',
            '✅ You avoid awkward moments where you ask something they already explained (shows you were not listening)',
            '✅ You successfully connect your answers to their stated needs/priorities (proves active listening)',
            '✅ You receive a callback/offer, with feedback mentioning your "strong communication skills" or "great fit with team culture"',
            '✅ You feel confident and calm during the interview because you were present, not anxious about what to say next'
          ]
        },
        personal: {
          title: 'Personal Active Listening for Deeper Connections',
          description: 'Your close friend texts: "Can we talk? I am really struggling with something." You meet at a café. They open up about family pressure regarding career choices, feeling torn between passion (graphic design) and parents\' expectations (CA preparation). Your active listening will either strengthen your friendship or make them feel dismissed and alone.',
          instructions: [
            '1. Create a Distraction-Free Zone: Put your phone on silent and place it FACE DOWN (not just on the table - that signals "I might check it"). Choose a quiet corner, not a noisy area. Make eye contact and say: "I am here for you, take your time." This sets the tone: YOU are fully present.',
            '2. The 80/20 Listening Rule: Let them talk 80% of the time, you talk 20%. Your role is to UNDERSTAND, not to fix or advise (unless they explicitly ask). Resist the urge to jump in with "When I faced this..." or "You should just..." - this makes it about YOU, not them.',
            '3. Reflective Listening Technique: After they share a chunk (2-3 sentences), paraphrase to confirm understanding: "So it sounds like you are feeling pressured to pursue CA, but your heart is in design, and you are worried about disappointing your parents. Did I get that right?" This shows you are processing, not just hearing.',
            '4. Emotion Labeling (Advanced Empathy): Identify and name the emotion you sense: "It seems like you are feeling torn and maybe a bit scared about making the wrong choice?" Naming emotions helps them feel SEEN. Avoid: "Do not worry, it will be fine" (dismisses feelings) or "That is not a big deal" (invalidates their experience).',
            '5. Ask Open-Ended Questions (Not Yes/No): Instead of "Are you upset?" ask "What is the hardest part about this situation for you?" Instead of "Do you want to do design?" ask "What excites you most about graphic design?" Open questions invite deeper sharing and show genuine curiosity.',
            '6. The Pause Principle: When they finish speaking, wait 3-5 seconds before responding. Often, people will add more: "Actually, there is something else..." This "comfortable silence" signals you are not rushing them. Avoid: immediately filling silence with your opinion.',
            '7. Avoid the "Fix-It" Trap: Do not jump to solutions unless they ask: "What do you think I should do?" Even then, ask first: "Do you want advice, or do you just need to vent?" Sometimes people need to be HEARD, not FIXED. Your presence and understanding are the gift.',
            '8. Follow-Up Later (Within 2-3 days): Text: "Hey, I have been thinking about our conversation. How are you feeling now?" This shows you were not just "being polite" in the moment - you genuinely care. Reference something specific they said to prove you were listening: "Have you had a chance to think more about the design portfolio idea?"',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• The "me too" hijack: Friend shares struggle, you immediately respond: "Oh my God, same! Let me tell you about MY problem..." Result: They feel unheard and regret opening up. Solution: Acknowledge briefly ("I can relate"), then redirect: "But tell me more about YOUR situation."',
            '• Premature advice-giving: "You should just talk to your parents" or "Just follow your passion!" before fully understanding the nuances. Result: They feel judged or misunderstood. Solution: Ask 3-4 clarifying questions before offering any suggestions.',
            '• Distraction signals: Checking your phone, looking around the café, interrupting mid-sentence. Result: They shut down emotionally and keep future struggles to themselves. Solution: Treat this conversation as the MOST important thing happening right now.',
            '• Toxic positivity: "Everything happens for a reason!" or "Just stay positive!" when they are expressing real pain. Result: They feel invalidated and alone. Solution: Sit with their discomfort: "This sounds really hard. I am here for you."',
            '• The comparison trap: "At least you have options - some people do not even get to choose!" Result: They feel guilty for struggling and stop sharing. Solution: Validate their feelings: "Your feelings are completely valid. This is a tough situation."'
          ],
          successCriteria: [
            '✅ Your friend says: "Thank you for listening. I feel so much better after talking to you" (direct feedback on listening quality)',
            '✅ They share MORE over time because they trust you will listen without judgment (deepening friendship)',
            '✅ You can accurately summarize their situation and feelings 24 hours later (proves you were actively processing)',
            '✅ They explicitly ask for your advice/opinion (shows they value your input because you listened first)',
            '✅ You feel emotionally connected and present during the conversation, not distracted or planning your response',
            '✅ Other friends start coming to you with personal issues because you have a reputation as a great listener'
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
      scenario: "Tomorrow: B.Com project presentation. 60+ students, 3 profs, 2 examiners. 20% grade. Rohan went blank, scored 12/20. Imagining podium: hands sweat, throat tight, forget everything.",
      problemExplanation: [
        "Stage fright: Amygdala sees audience as 'threat.' Fight-or-flight: shaky hands, mental fog",
        "Memorized script fails: Memory fails under stress. One forgotten word = derailment",
        "Assume harsh judgment: Think everyone judging. Reality: 80% thinking own presentation, lunch",
        "Voice shaky: Shallow breathing. Voice = instrument, needs tuning"
      ],
      solutionApproach: [
        "Reframe: NOT performance, it's CONVERSATION. 'What can I teach them?' Reduces anxiety 60%",
        "3-Act: Hook (30sec stat/story) → Body (3 points) → Close (call-to-action). Safety net",
        "Power Pose + Breathing: 2 mins before, power pose. Then 4-7-8 breathing. Calms instantly",
        "Triangle Eye Contact: Pick 3 friendly faces. Speak each 3-5 sec, rotate. Don't scan randomly"
      ]
    },
    video: {
      title: 'From Shaky Voice to Standing Ovation: Public Speaking Mastery for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] THE BRUTAL TRUTH ABOUT PUBLIC SPEAKING FEAR

"Tomorrow, you present your B.Com project. Tonight, you cannot sleep. Your heart races imagining 60 pairs of eyes staring at you. Sound familiar? Here is the truth nobody tells you: Public speaking fear is NOT about your ability - it is about SURVIVAL INSTINCT. 10,000 years ago, being rejected by your tribe = death. Your brain still thinks the audience might 'reject' you, triggering fight-or-flight. But here is the game-changer: You can REWIRE this response in 8 minutes. By the end of this video, you will have a battle-tested system that has helped 1000+ B.Com students go from terrified to confident. Let us go."

[0:45-2:00] THE 3-ACT STRUCTURE (Your Safety Net)

"First, forget memorizing scripts. Under stress, memory fails. Instead, use the 3-Act Structure - your unbreakable framework:

ACT 1: THE HOOK (30 seconds) - Start with a BANG. Examples for B.Com presentations:
- Shocking Stat: 'In 2023, GST compliance errors cost Indian SMEs ₹12,000 crore. Today, I will show you how to avoid this.'
- Provocative Question: 'Raise your hand if you think accounting is boring. Keep it up if you have heard of forensic accounting catching a ₹7000 crore scam.'
- Personal Story: 'Last year, I failed my Cost Accounting exam. Today, I will share the ONE method that took me from 45% to 82%.'

Why this works: First 30 seconds determine if the audience listens or zones out. A hook hijacks their attention.

ACT 2: THE BODY (3 Main Points) - Rule of 3. Human brain loves patterns of 3. For your GST presentation:
Point 1: What is GST? (Definition + 1 example)
Point 2: Impact on Small Businesses (Data + Case Study)
Point 3: Solutions (3 actionable strategies)

Each point: 2-3 minutes. Use the 'Signpost Technique': 'First, let us understand what GST is...' 'Now, moving to the impact...' 'Finally, here are solutions...' This keeps YOU on track and the audience oriented.

ACT 3: THE CLOSE (30 seconds) - Two-part formula:
(1) Call-to-Action: 'I challenge you to research one GST case study this week.'
(2) Memorable Quote: 'As Warren Buffett said, Accounting is the language of business. Let us speak it fluently.'

Why this works: People remember the FIRST and LAST thing you say (Primacy-Recency Effect). Nail these, and they will remember your entire presentation."

[2:00-3:30] VOCAL AUTHORITY TOOLKIT (Sound Confident, Even If You Are Not)

"Your voice is 38% of your impact (UCLA study). Here is how to weaponize it:

TECHNIQUE 1: Diaphragmatic Breathing (Do this NOW)
- Place hand on belly. Inhale through nose (4 sec) - belly should expand, not chest.
- Hold (4 sec). Exhale through mouth (6 sec).
- Repeat 3x before presenting. Why? Shallow breathing = shaky voice. Deep breathing = steady, powerful voice.

TECHNIQUE 2: The Power Pause
- After key statements, pause for 3-5 seconds. Example: 'GST increased compliance costs by 40%.' [PAUSE]. Let it sink in.
- Silence feels awkward to YOU, but to the audience, it signals confidence and importance. Obama pauses 10+ times per speech.

TECHNIQUE 3: Vary Your Pace
- Important points: SLOW (90 words/min). 'The key finding is...' [slow, deliberate]
- Examples/stories: FASTER (150 words/min). 'So last year, a client came to me...' [energetic]
- Monotone = audience sleeps. Varied pace = audience engaged.

TECHNIQUE 4: Downward Inflection (Secret Weapon)
- End sentences with voice going DOWN, not up. 'GST compliance is critical.' [voice drops on 'critical']
- Upward inflection sounds like a question (insecure). Downward = statement of fact (confident).

Practice: Record yourself saying 'Accounting is important.' Once with upward inflection, once downward. Hear the difference? That is authority."

[3:30-5:00] BODY LANGUAGE HACKS (Look Confident, Even If You Are Faking It)

"Your body language is 55% of your impact. Here is the cheat code:

THE POWER POSE (2 mins before presenting)
- Find a private space (restroom, empty classroom).
- Stand: Feet shoulder-width apart, hands on hips (Wonder Woman pose), chest out, chin up.
- Hold for 2 minutes. Why? This increases testosterone (confidence hormone) by 20% and decreases cortisol (stress hormone) by 25% (Amy Cuddy, Harvard).
- You will FEEL more confident. Your brain believes your body.

THE TRIANGLE TECHNIQUE (Eye Contact Without Panic)
- Do NOT scan the room randomly (looks nervous). Do NOT stare at one person (creepy).
- Instead: Divide the room into 3 zones (left, center, right). Pick one friendly face in each zone.
- Speak to Person 1 for 5 seconds, then Person 2, then Person 3. Rotate. This creates the illusion you are making eye contact with EVERYONE.

HAND GESTURES (Purposeful, Not Fidgety)
- Avoid: Hands in pockets, crossed arms, fidgeting with pen.
- Do: Use hand gestures to emphasize numbers. 'Three main points' [hold up 3 fingers]. 'GST has two components' [hold up 2 fingers].
- Keep hands at chest level (power zone). Hands below waist = low energy. Hands above head = aggressive.

MOVEMENT (Strategic, Not Pacing)
- Stand still for your introduction (establishes authority). Move during transitions between points (signals shift). Return to center for conclusion.
- Avoid: Pacing back and forth (looks anxious). Rocking on heels (looks insecure)."

[5:00-6:30] Q&A MASTERY (Handle ANY Question Like a Pro)

"Q&A is where most students panic. Here is your armor:

STEP 1: Anticipate 10 Questions
- After preparing your presentation, write down 10 questions examiners might ask. For GST presentation: 'What is the difference between CGST and SGST?' 'How does GST affect e-commerce?' Prepare 2-3 sentence answers.

STEP 2: The Pause-Paraphrase-Answer Framework
When asked a question:
(1) PAUSE (3 seconds) - Shows you are thinking, not blurting.
(2) PARAPHRASE - 'So you are asking about the impact of GST on small retailers, correct?' (Buys time + ensures you understood)
(3) ANSWER - 'Based on my research, small retailers faced a 30% increase in compliance costs in Year 1, but this decreased to 15% by Year 3 due to simplified filing.'

STEP 3: The 'I Do Not Know' Technique (Your Secret Weapon)
- If you genuinely do not know: 'That is an excellent question. I do not have the exact data on that specific aspect, but I would be happy to research it and follow up with you after the presentation.'
- Why this works: Honesty > Bluffing. Examiners RESPECT intellectual humility. They will remember your integrity, not your knowledge gap.

STEP 4: Redirect Hostile/Irrelevant Questions
- If someone asks something off-topic: 'That is an interesting point, though it is slightly outside the scope of today's presentation on GST. I would love to discuss it with you afterward.'
- Stay calm, polite, firm. You control the narrative."

[6:30-7:45] THE 5-DAY PREPARATION PROTOCOL (Proven System)

"Here is exactly how to prepare for your presentation:

DAY 1 (5 days before): Create your 3-Act Structure outline. Write your hook, 3 main points, and close. Do NOT write a full script.

DAY 2 (4 days before): Create slides. Rule: 1 slide = 1 idea. Max 6 words per slide. Use visuals (charts, images), not paragraphs. Your slides support you, they do not replace you.

DAY 3 (3 days before): First rehearsal. Stand up, speak out loud (not in your head). Time yourself. You will likely go over time - that is normal. Identify which sections to trim.

DAY 4 (2 days before): Second rehearsal. Record yourself (phone video). Watch it (yes, it is painful). Note: filler words ('um,' 'like'), lack of eye contact, fidgeting. Fix these.

DAY 5 (1 day before): Final rehearsal in the ACTUAL room (if possible) or a similar space. Practice with your slides, test tech. Do your power pose + breathing exercises. Visualize success: See yourself delivering confidently, audience nodding, examiners smiling.

PRESENTATION DAY: Arrive 15 mins early. Test tech. Do power pose in restroom. 4-7-8 breathing (3 rounds). Tell yourself: 'I am prepared. I am confident. I am here to share value.' Then walk in and OWN it."

[7:45-8:00] YOUR CHALLENGE (Do This NOW)

"Here is your action step: Within 24 hours, record a 2-minute presentation on ANY B.Com topic (even just explaining Debit vs Credit). Use the 3-Act Structure: Hook, 3 points, Close. Watch it back. You will cringe - that is growth. Do this once a week for a month. By Week 4, you will sound like a different person. Public speaking is a SKILL, not a talent. You build it through repetition. Now go practice. Your future self - the one who nails that presentation, gets that job, leads that meeting - is counting on you. Let us make it happen."

[End Screen: "Next Video: Master Written Communication for Emails, Reports & Resumes"]`,
      content: [
        'The 3-Act Structure: Hook, Body (3 Points), Close - Your unbreakable framework',
        'Vocal Authority Toolkit: Diaphragmatic breathing, power pauses, pace variation, downward inflection',
        'Body Language Hacks: Power poses, triangle eye contact technique, strategic hand gestures and movement',
        'Q&A Mastery: Anticipate questions, Pause-Paraphrase-Answer framework, handling "I don\'t know" gracefully',
        'The 5-Day Preparation Protocol: Day-by-day system from outline to final rehearsal',
        'B.Com Examples: GST presentations, accounting topics, business case studies',
        'Confidence-Building: Reframe fear as biology, use power poses and breathing to calm nerves',
        'Common Mistakes: Memorizing scripts, monotone delivery, avoiding eye contact, fidgeting'
      ]
    },
    quiz: {
      title: 'Public Speaking Quiz',
      questions: [
        {
          id: 6,
          question: 'Financial project presentation. 2 min in, mind goes blank. What to do?',
          options: [
            'Panic and start over',
            '3-second pause, check notes, continue',
            'Fill with "um, uh" sounds',
            'Skip to conclusion'
          ],
          correct: 1,
          explanation: '3-second pause feels like eternity to YOU, but audience sees thinking (confidence signal). Checking notes = professional, not failure. TED speakers do this! Apologizing draws attention to mistake; moving forward confidently makes audience forget it happened. Filler words ("um, uh") = unprepared, amplify awkwardness.'
        },
        {
          id: 7,
          question: 'Prof: "How does your GST analysis handle 2024 changes?" You didn\'t research. Best response?',
          options: [
            'Bluff alignment with analysis',
            'Deflect as outside scope',
            'Honest + offer to research by Friday',
            'Panic and admit unsure'
          ],
          correct: 2,
          explanation: 'Bluffing = dangerous. Prof knows answer = lose ALL credibility. Deflecting = defensive, dismissive. Panicking = lack of composure. Honest + proactive shows: (1) Intellectual humility (admitting gaps), (2) Professionalism (follow-up offer), (3) Confidence (not rattled). Professors RESPECT this - testing character, not just knowledge.'
        },
        {
          id: 8,
          question: '3 students in back row on phones, not listening. How to respond?',
          options: [
            'Call them out directly',
            'Ignore and continue',
            'Use engagement techniques - ask question, move closer',
            'Get flustered and lose confidence'
          ],
          correct: 2,
          explanation: 'Calling out = confrontation, disrupts flow, lose more attention. Ignoring = passive, but getting flustered = worse (affects YOUR performance). Best approach: Engagement techniques without confrontation. Ask question ("Raise hand if used Tally"), move toward back (people pay attention when speaker near), eye contact with engaged students. Reality: ANY presentation, 10-20% zone out = normal. Focus on 80% who ARE listening.'
        },
        {
          id: 9,
          question: 'Slide deck out of order - Slide 5 showing during Point 2. What to do?',
          options: [
            'Stop and fix slides for 2 min',
            'Continue confidently, explain without visual',
            'Panic about technology hating you',
            'Blame projector setup person'
          ],
          correct: 1,
          explanation: 'Stopping to fix = kills momentum, audience uncomfortable watching you fumble. Panicking/blaming = destroys credibility, professionalism. Pro move: Acknowledge briefly ("Apologies for slide order"), then CONTINUE confidently. Content matters more than slides. Slides = support tools, not presentation itself. Shows composure under pressure - employers/professors value this. Bonus: Backup plan (PDF on phone, printed notes) for tech failures.'
        },
        {
          id: 10,
          question: 'Best opening for "E-commerce Taxation" B.Com presentation?',
          options: [
            '"Hello everyone. Today I will talk about e-commerce taxation challenges."',
            '"Good morning. My name is Priya. I have 3 main points to cover."',
            '"Amazon paid ZERO tax despite ₹20,000 crore revenue. How? I\'ll reveal 3 loopholes."',
            '"E-commerce taxation is very important and interesting topic."'
          ],
          correct: 2,
          explanation: 'Option 1 = boring, generic, audience zones out immediately. Option 2 = slightly better (structure preview) but lacks impact. Option 4 = vague, weak words ("very important," "interesting") without substance. Option 3 = WINNER: (1) Shocking stat (₹20,000 crore, zero tax), (2) Curiosity gap ("How?"), (3) Promise of value ("3 loopholes"), (4) Personal relevance. Hijacks attention in first 10 seconds. Rule: Opening should make audience think "I NEED to hear this" not "Oh, another boring presentation."'
        }
      ]
    },
    challenge: {
      title: 'Practice Public Speaking',
      description: 'Practice public speaking in different contexts',
      contexts: {
        academic: {
          title: 'Academic Presentation Mastery',
          description: 'You have a 10-minute B.Com project presentation on "Digital Payment Systems in India" next week. 20% of your grade depends on this. You will present to 50+ students, your professor, and an external examiner. Your goal: Deliver a confident, engaging presentation that showcases your research and earns you 18+/20.',
          instructions: [
            '1. Day 1 - Topic Mastery (2 hours): Deep-dive into your topic. Read 5-7 sources (research papers, case studies, news articles). Create a one-page "cheat sheet" with key stats, definitions, and examples. Example for Digital Payments: UPI transaction volume (₹125 trillion in 2023), top 3 players (PhonePe, Google Pay, Paytm), security challenges (phishing, data breaches).',
            '2. Day 2 - Build the 3-Act Structure (1 hour): Hook (30 sec): "In 2023, Indians made 100 BILLION digital transactions. But 40% of users faced fraud attempts. Today, I will reveal the 3 biggest security gaps - and solutions." Body (8 min): Point 1 (What are digital payment systems?), Point 2 (Growth + adoption data), Point 3 (Security challenges + solutions). Close (30 sec): "Digital payments are the future - but only if we fix security. I challenge you to enable 2-factor authentication today."',
            '3. Day 3 - Create Slides (1.5 hours): Use the 1 Slide = 1 Idea rule. Slide 1: Title + Your Name. Slide 2: Hook stat (₹125 trillion graphic). Slides 3-8: One slide per sub-point (use visuals, not paragraphs). Slide 9: Conclusion + Call-to-Action. Design tip: Use high-contrast colors (dark text on light background), 24pt+ font size, and icons/charts instead of bullet points.',
            '4. Day 4 - First Rehearsal (1 hour): Stand up (do NOT sit), speak out loud (not in your head), time yourself. You will likely go 12-13 minutes (over time). Identify which sections to trim. Practice your hook 5 times until it feels natural. Record audio on your phone and listen back - note filler words ("um," "like," "so") and work to eliminate them.',
            '5. Day 5 - Second Rehearsal + Feedback (1 hour): Present to a friend/family member or record video. Ask them: "Did I make eye contact? Was my voice clear? Did I seem confident?" Watch the video (yes, it is painful) and note: posture (slouching?), hand gestures (fidgeting?), facial expressions (smiling or serious?). Fix these.',
            '6. Day 6 - Q&A Preparation (45 mins): Write down 10 questions examiners might ask. For Digital Payments: "What is the difference between UPI and IMPS?" "How does blockchain improve security?" "What are RBI regulations on digital wallets?" Prepare 2-3 sentence answers. Practice saying: "Great question. I do not have exact data on that, but I will research and follow up."',
            '7. Day 7 - Final Rehearsal + Mental Prep (1 hour): Practice in the ACTUAL presentation room (if possible) or a similar space. Test your slides, check tech setup. Do a full run-through with timer. Then: Power pose for 2 mins (hands on hips, chest out), 4-7-8 breathing (3 rounds), visualization (imagine yourself speaking confidently, audience nodding, professor smiling).',
            '8. Presentation Day - Execution (15 mins before): Arrive early, test projector/laptop, ensure slides load correctly. Visit restroom: Do power pose (2 mins), splash water on face, practice your hook once. Walk into the room with head high, shoulders back. Smile at the audience. Take a deep breath. Then BEGIN with your hook. Remember: You are here to TEACH, not to be judged.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Memorizing word-for-word: You write a full script and memorize it. Result: You sound robotic, and if you forget one word, you derail completely. Solution: Memorize your STRUCTURE (3 acts), not sentences. Speak naturally around your key points.',
            '• Reading from slides: You turn your back to the audience and read paragraphs off slides. Result: Audience wonders why they need you - they can read themselves. Solution: Slides = visual support. YOU are the presentation. Glance at slides, then speak to the audience.',
            '• Ignoring time limits: You prepare 15 minutes of content for a 10-minute slot. Result: You rush, skip important points, or get cut off mid-presentation. Solution: Rehearse with timer 3+ times. Aim for 9 minutes to leave buffer for Q&A.',
            '• Zero audience engagement: You speak in a monotone for 10 minutes without asking questions or making eye contact. Result: Audience zones out, checks phones. Solution: Ask 1-2 rhetorical questions ("How many of you use UPI daily?"), make eye contact with 3-5 people, vary your vocal pace.',
            '• Panic during Q&A: Examiner asks a tough question, you freeze or bluff. Result: Loss of credibility. Solution: Use the Pause-Paraphrase-Answer framework. If you do not know, say so honestly and offer to follow up. Examiners respect humility over bluffing.'
          ],
          successCriteria: [
            '✅ You deliver your presentation within the time limit (±30 seconds)',
            '✅ You speak clearly and confidently without excessive filler words ("um," "like")',
            '✅ You make eye contact with at least 5-7 people in the audience (not just the professor)',
            '✅ You handle Q&A questions calmly, even when you do not know the answer',
            '✅ Your slides enhance your message (visuals, not text-heavy)',
            '✅ You receive a grade of 16+/20 (80%+) with positive feedback on delivery and confidence',
            '✅ At least 2-3 classmates approach you afterward to ask questions or compliment your presentation',
            '✅ You feel proud of your performance and eager to present again (not traumatized!)'
          ]
        },
        professional: {
          title: 'Professional Presentation Excellence',
          description: 'You are a 2nd-year B.Com intern at a mid-sized accounting firm. Your manager has asked you to present your findings on "Optimizing Tax Filing Processes" to the senior leadership team (5 partners, 10 senior accountants) in a 15-minute presentation. This is your chance to prove you are promotion-worthy and could secure a full-time offer. High stakes.',
          instructions: [
            '1. Audience Research (Day 1 - 1 hour): Understand WHO you are presenting to. LinkedIn-stalk the partners: What are their backgrounds? What do they care about (efficiency? cost savings? client satisfaction?). Ask your manager: "What are the top 3 priorities for leadership right now?" Tailor your presentation to THEIR goals, not just your findings.',
            '2. Craft Your Core Message (Day 1 - 30 mins): Distill your findings into ONE sentence. Example: "By implementing automated tax filing software, we can reduce processing time by 40% and save ₹15 lakhs annually." This is your North Star - every slide, every word should support this message. If it does not, cut it.',
            '3. Build the Business Case (Day 2 - 2 hours): Structure your presentation using the Problem-Solution-Impact framework. Slide 1: Title + Your Name. Slide 2: The Problem (Current tax filing takes 120 hours/month, error rate 8%, client complaints rising). Slide 3-4: The Solution (Automated software + streamlined workflow). Slide 5-6: The Impact (40% time savings, ₹15L cost reduction, 90% error reduction). Slide 7: Next Steps (Pilot program, timeline, budget). Use NUMBERS - leadership loves data.',
            '4. Design Professional Slides (Day 2 - 1 hour): Use your company is slide template (if available) or a clean, professional design. Color scheme: Blues/grays (trust, professionalism), not bright colors. Font: 28pt+ for body text, 36pt+ for titles. Visuals: Use bar charts for comparisons, line graphs for trends, icons for concepts. Avoid: Clipart, animations, dense paragraphs.',
            '5. Rehearse for Executive Presence (Day 3 - 1.5 hours): Practice standing (not sitting - even if virtual). Record video. Watch for: (1) Vocal authority (speak from diaphragm, use downward inflection), (2) Body language (open posture, purposeful gestures), (3) Eye contact (look at camera in virtual, or scan the room in person). Eliminate filler words. Aim for 13 minutes (leave 2 mins for Q&A).',
            '6. Prepare for Tough Questions (Day 3 - 1 hour): Leadership will challenge you. Anticipate 10 questions: "What is the ROI?" "What are implementation risks?" "Why this software vs competitors?" "What if clients resist?" Prepare data-backed answers. Practice the Pause-Paraphrase-Answer technique. If you do not know: "I do not have that data with me, but I will research and send you a detailed analysis by EOD tomorrow."',
            '7. Professional Setup (Day 4 - 30 mins): Dress code: Business formal (suit/blazer, not casual). Arrive 20 mins early. Test tech (projector, clicker, backup USB). Bring printed handouts (1-page summary of key findings). Set up water bottle (dry mouth from nerves is real). Visit restroom: Power pose (2 mins), 4-7-8 breathing, check appearance.',
            '8. Deliver with Confidence (Presentation Day - 15 mins): Walk in with head high. Greet everyone with eye contact and a smile. Start with your hook: "Last quarter, our tax filing process cost us ₹40 lakhs and 120 hours. Today, I will show you how to cut that by 40%." Speak to the DECISION-MAKERS (partners), not just your manager. Use pauses for emphasis. End with a clear call-to-action: "I recommend we pilot this software with 5 clients in Q2. I have prepared a detailed implementation plan and would love to discuss next steps."',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Drowning in details: You present every tiny finding from your 50-page report. Result: Leadership loses interest in 3 minutes. Solution: Focus on the TOP 3 insights that matter to THEM (time/cost savings, risk reduction, client satisfaction). Save details for the appendix.',
            '• Weak opening: You start with "Hi, my name is Priya, and today I will talk about tax filing..." Result: Zero impact, audience checks emails. Solution: Start with a PROBLEM or STAT: "We lost ₹5 lakhs last year due to tax filing errors. Here is how we fix it."',
            '• Reading from slides: You turn your back and read bullet points. Result: You look unprepared and disengaged. Solution: Slides = visual aid. YOU are the expert. Glance at slides, then speak to the audience with eye contact.',
            '• Defensive body language: You cross arms, avoid eye contact, fidget with pen. Result: You look insecure, not promotion-worthy. Solution: Open posture, hands visible (not in pockets), purposeful gestures, steady eye contact with 3-5 people.',
            '• Fumbling Q&A: A partner asks "What is the implementation timeline?" You panic: "Um, I think... maybe 3 months?" Result: Loss of credibility. Solution: Prepare answers to 10 likely questions. If caught off-guard, use the Pause-Paraphrase-Answer framework. Confidence = Preparation.'
          ],
          successCriteria: [
            '✅ You deliver your presentation within 13-15 minutes, leaving time for Q&A',
            '✅ You speak with vocal authority (no upward inflection, minimal filler words)',
            '✅ You make eye contact with all 5 partners (not just your manager)',
            '✅ You answer Q&A questions confidently with data-backed responses',
            '✅ At least 2 partners ask follow-up questions or request your implementation plan (shows interest)',
            '✅ Your manager gives positive feedback: "You presented like a senior associate, not an intern"',
            '✅ You receive a follow-up meeting request to discuss implementation (proves you influenced decision-making)',
            '✅ You feel confident and proud, knowing you represented yourself as a future leader'
          ]
        },
        personal: {
          title: 'Personal Speaking for Meaningful Connections',
          description: 'Your best friend is getting married, and you have been asked to give a 5-minute speech at the wedding reception (150 guests - family, friends, colleagues). You want to honor your friend, make people laugh and cry (in a good way), and create a memorable moment - without embarrassing yourself or your friend. No pressure!',
          instructions: [
            '1. Gather Stories (Week 1 - 1 hour): Brainstorm 10-15 memories with your friend. Focus on: (1) How you met (first impression story), (2) Defining moment (when you realized they were special), (3) Funny/embarrassing story (keeps it light), (4) Growth moment (how they have changed/matured), (5) Partner appreciation (why the couple is perfect together). Write these down - you will pick the best 3.',
            '2. Build Your Structure (Week 1 - 30 mins): Use the 3-Story Arc. Opening (30 sec): "I have known Rohan for 10 years. In that time, he has been my study partner, my wingman, and the guy who convinced me to try sushi (still not sure I forgive him for that)." Story 1 (1.5 min): How you met (funny/relatable). Story 2 (1.5 min): Defining friendship moment (emotional). Story 3 (1 min): Why the couple is perfect (heartwarming). Close (30 sec): Toast ("Here is to Rohan and Priya - may your love be as strong as Rohan is coffee addiction. Cheers!").',
            '3. Write It Down (But Do NOT Memorize) (Week 2 - 1 hour): Write your speech as bullet points, not full sentences. Example: "Story 1: Met in Cost Accounting class, he borrowed my notes, never returned them, became best friends." This gives you structure without sounding robotic. Memorize your OPENING and CLOSING word-for-word (these are critical), but speak naturally for the middle stories.',
            '4. Practice Out Loud (Week 2 - 1 hour): Stand up, speak to an imaginary audience (or your mirror). Time yourself - aim for 4.5 minutes (leaves buffer). Practice your tone: Funny stories = upbeat, faster pace. Emotional stories = slower, softer. Toast = confident, celebratory. Record audio and listen - do you sound natural or stiff? Adjust.',
            '5. Get Feedback (Week 3 - 30 mins): Present to a friend or family member. Ask: "Did I make you laugh? Did any part feel awkward? Was I too long?" Adjust based on feedback. If they say "That story about the time Rohan got locked out in his underwear might be TOO embarrassing," listen to them. You want funny, not humiliating.',
            '6. Prepare for Nerves (Day Before - 20 mins): Weddings are emotional + high-stakes. You WILL be nervous. Prepare: (1) Print your bullet points on a small card (backup if you blank), (2) Practice power pose + 4-7-8 breathing, (3) Visualize success (guests laughing, couple smiling, applause). Remind yourself: "I am here to celebrate my friend, not to be perfect."',
            '7. Setup + Execution (Wedding Day - 5 mins): Before your speech: Limit alcohol (1 drink max - you need clarity). When called up: Walk confidently to the mic, smile at the audience, make eye contact with the couple. Start with your memorized opening. Speak TO the couple (not at your notes). Use pauses for laughs and emotional moments. End with your toast, raise your glass, and SIT DOWN (do not ramble).',
            '8. Enjoy the Moment (Post-Speech): Accept compliments graciously ("Thank you, it was an honor"). Do NOT obsess over small mistakes ("I forgot to mention the time we..."). Nobody noticed. You created a beautiful moment for your friend - that is what matters.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Too many inside jokes: You reference 10 stories only you and your friend understand. Result: 148 guests are confused and bored. Solution: Pick stories that are RELATABLE. "We pulled an all-nighter before exams" = universal. "Remember when we did that thing at that place?" = meaningless.',
            '• Roasting too hard: You share embarrassing stories that are funny to you but humiliating to your friend. Result: Awkward silence, friend is upset. Solution: "Embarrassing but endearing" is the sweet spot. "He once wore mismatched shoes to an interview" = cute. "He got drunk and cried about his ex" = too much.',
            '• Reading from paper: You stare at your notes for 5 minutes, never making eye contact. Result: Disconnected, robotic. Solution: Use bullet points as a guide, but LOOK UP and speak to the audience. Eye contact = connection.',
            '• Rambling: You have no structure, so you jump from story to story for 10 minutes. Result: Guests check their phones, couple looks uncomfortable. Solution: 3 stories max, 4-5 minutes total. Brevity = impact.',
            '• Forgetting the partner: You talk only about your friend, ignoring their spouse. Result: Spouse feels excluded. Solution: Dedicate Story 3 to the couple. "When I met Priya, I knew she was perfect for Rohan because..." This honors both of them.'
          ],
          successCriteria: [
            '✅ You deliver your speech within 4-6 minutes (not too short, not too long)',
            '✅ The audience laughs at least 2-3 times (humor landed)',
            '✅ You see people wiping tears or smiling during the emotional parts (connection achieved)',
            '✅ The couple hugs you afterward and says "That was perfect" or "Thank you so much"',
            '✅ At least 5 guests approach you later to say "Great speech!" or "That story about [X] was hilarious"',
            '✅ You feel proud and happy (not embarrassed or regretful)',
            '✅ Your speech is referenced later ("Remember when you said...?") - it was MEMORABLE',
            '✅ You strengthened your friendship through your words - that is the ultimate success'
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
      scenario: "11:47 PM. Assignment due 9 AM. Analyzed WRONG company. Need email prof requesting extension. Staring blank Gmail 20 mins. 'Hey' or 'Dear Professor'? Grade depends on this.",
      problemExplanation: [
        "Tone paralysis: 'Hey' too casual or 'Dear Esteemed' too formal? Sound disrespectful or robot",
        "Structure confusion: Don't know where start. 300-word rambling, bury request paragraph 3. Profs skim—don't see point 10 sec",
        "Grammar anxiety: Terrified typos, 'your' vs 'you're.' Spend 15 mins Googling comma rules. Perfectionism = procrastination",
        "Request weak: 'If possible, maybe, could you consider?' Sounds uncertain, entitled. Profs respect CLEAR, JUSTIFIED"
      ],
      solutionApproach: [
        "3-Part: (1) Opening (purpose 1 sentence), (2) Body (explain + justify), (3) Closing (ask + thank you)",
        "Tone: 'Dear [Title] [Last Name]' + 'Thank you' + 'Best regards.' Avoid emojis, slang, !!!",
        "5-Min Proofread: Write, read OUT LOUD, Grammarly, check recipient, wait 5 mins, THEN send",
        "Reason-Request-Reassurance: 'Misunderstood' (reason). 'Requesting 48hr' (request). 'Already started, will submit quality' (reassurance)"
      ]
    },
    video: {
      title: 'Write Emails That Get Results: Professional Writing for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR EMAILS ARE BEING IGNORED

"You send an email to your professor requesting an extension. 24 hours pass. No response. 48 hours. Still nothing. You panic: 'Did I offend her? Should I follow up?' Here is the brutal truth: Your email was probably opened, skimmed for 5 seconds, and ignored. Why? Because it was too long, too vague, or too unprofessional. Professors and employers receive 50-100 emails daily. They do not READ emails - they SKIM. If your point is not clear in 10 seconds, you lose. By the end of this video, you will have a proven formula that gets 80%+ response rates. Let us fix your emails."

[0:45-2:15] THE 3-PART EMAIL FORMULA (Your Template for EVERY Email)

"Forget everything you learned about 'essay-style' writing. Professional emails follow a 3-part structure:

PART 1: THE OPENING (1 sentence - State your purpose)
Bad: 'Hi Professor, I hope you are doing well. I wanted to reach out regarding the assignment we discussed in class last week...'
Good: 'I am writing to request a 48-hour extension for the Financial Accounting assignment due Friday.'

Why this works: You stated your purpose in 10 words. The professor knows EXACTLY what you want in 3 seconds. No fluff, no guessing.

PART 2: THE BODY (2-3 sentences - Explain + Justify)
Use the Reason-Request-Reassurance framework:
- Reason: 'I misunderstood the assignment requirements and analyzed the wrong company.'
- Request: 'I am requesting a 48-hour extension to complete the correct analysis.'
- Reassurance: 'I have already started the correct work and will submit high-quality analysis by Sunday.'

Why this works: You took ACCOUNTABILITY (reason), made a CLEAR ask (request), and showed COMMITMENT (reassurance). This is not begging - it is professional negotiation.

PART 3: THE CLOSING (1 sentence - Thank + Sign-off)
'Thank you for considering my request. I appreciate your understanding.'
Sign-off: 'Best regards, [Your Full Name]'

Why this works: Gratitude + professionalism. 'Best regards' works for 90% of situations. Avoid: 'Sincerely' (too formal), 'Cheers' (too casual), 'TTYL' (unprofessional).

FULL EMAIL EXAMPLE (Under 100 words):
Subject: Request for Assignment Extension - Priya Sharma
Dear Professor Sharma,
I am writing to request a 48-hour extension for the Financial Accounting assignment due Friday. I misunderstood the assignment requirements and analyzed the wrong company. I have already started the correct analysis and will submit high-quality work by Sunday. Thank you for considering my request. I appreciate your understanding.
Best regards,
Priya Sharma
B.Com 2nd Year, Roll No. 2023-045

This email takes 15 seconds to read and has an 85% approval rate."

[2:15-3:45] SUBJECT LINES THAT GET OPENED (The First Impression)

"Your subject line determines if your email gets opened or ignored. Here is the formula:

BAD Subject Lines:
- 'Hey' (vague, unprofessional)
- 'URGENT!!!' (sounds desperate, gets ignored)
- 'Question' (too generic, what question?)
- (Blank subject) (looks like spam)

GOOD Subject Lines:
- 'Request for Assignment Extension - Priya Sharma' (clear purpose + your name)
- 'Question About GST Project Deadline - Roll No. 2023-045' (specific + identifier)
- 'Follow-Up: Internship Application Submitted Oct 5' (context + date)

Formula: [Purpose] - [Your Name/Identifier]

Why this works: The recipient knows (1) What you want, (2) Who you are, (3) Why they should care. This gets opened 3x more than vague subjects.

Pro Tip for B.Com Students: Include your Roll Number or Course Code in important emails. Professors teach 100+ students - help them identify you quickly."

[3:45-5:00] TONE MASTERY (Professional-Friendly, Not Robotic or Casual)

"B.Com students make 2 tone mistakes:

MISTAKE 1: Too Casual (WhatsApp-style)
'Hey Prof! Can I get an extension? I messed up lol. Let me know ASAP. Thanks!'
Why this fails: 'Hey,' 'lol,' 'ASAP' = disrespectful. Professors are not your friends (yet). Respect the hierarchy.

MISTAKE 2: Too Formal (Victorian-era robot)
'Esteemed Professor, I humbly beseech thee to grant me the gracious favor of an extension...'
Why this fails: You sound like a 19th-century letter. Modern professionalism is CLEAR, not flowery.

THE SWEET SPOT: Professional-Friendly
'Dear Professor Sharma, I am writing to request a 48-hour extension...'
Why this works: 'Dear' = respectful. 'Professor Sharma' = formal. 'I am writing to request' = clear, direct, professional.

TONE CHECKLIST:
✅ Use: 'Dear [Title] [Last Name],' 'I am writing to,' 'Thank you,' 'Best regards'
❌ Avoid: 'Hey,' 'Hiya,' 'lol,' 'ASAP,' emojis, exclamation marks (!!!), ALL CAPS

Test: Would you say this sentence to your professor in person? If no, rewrite it."

[5:00-6:15] THE 5-MINUTE PROOFREADING PROTOCOL (Eliminate 95% of Errors)

"One typo can destroy your credibility. 'Your' vs 'You are.' 'Their' vs 'There.' 'Professor Shrama' (typo in their name = disaster). Here is how to catch errors BEFORE you hit send:

STEP 1: Write Your Email (Do not edit while writing - just get your thoughts down)

STEP 2: Read It OUT LOUD (This is the secret weapon)
- Read every word aloud. Your ears catch awkward phrasing your eyes miss.
- If you stumble while reading, the sentence is too complex. Simplify it.

STEP 3: Use Grammarly or Spell-Check
- Free tools catch 80% of grammar/spelling errors. Use them.
- But do not rely 100% - they miss context errors ('Their' vs 'There').

STEP 4: Check the Recipient (Critical!)
- Is the email address correct? Sending to wrong person = embarrassing.
- Is the professor's name spelled correctly? 'Dr. Shrama' vs 'Dr. Sharma' = huge difference.

STEP 5: Wait 5 Minutes, Re-Read, THEN Send
- Walk away. Get water. Come back with fresh eyes.
- You will spot errors you missed before. This step prevents 90% of regrets.

Pro Tip: For HIGH-STAKES emails (job applications, internship requests), ask a friend to proofread. Fresh eyes catch what you miss."

[6:15-7:30] STRATEGIC TIMING + FOLLOW-UP (When to Send, When to Follow Up)

"TIMING MATTERS. Sending an email at 2 AM vs 9 AM changes how you are perceived.

BEST TIMES TO SEND:
- 8-10 AM (Weekdays): Inbox is fresh, you are top of the list.
- 2-4 PM (Weekdays): Post-lunch, people check emails before meetings.

WORST TIMES TO SEND:
- 11 PM - 6 AM: Looks like you are procrastinating or desperate.
- Weekends: Professors are off-duty, your email gets buried by Monday.

SOLUTION: Use 'Schedule Send' (Gmail feature)
- Write your email at 11 PM, but schedule it to send at 8 AM next day. You look professional, not desperate.

FOLLOW-UP FRAMEWORK:
- Wait 48 hours (2 business days) before following up. Professors are busy - give them time.
- ONE follow-up = persistent and professional. THREE follow-ups = annoying and entitled.

Follow-Up Template:
'Dear Professor Sharma, I wanted to follow up on my email from October 5 regarding the assignment extension. I understand you have a busy schedule, and I would appreciate any guidance you can provide. Thank you for your time. Best regards, Priya Sharma'

Why this works: Polite reminder + acknowledges their time + no pressure."

[7:30-8:00] YOUR CHALLENGE (Practice NOW)

"Here is your action step: Within 24 hours, write ONE professional email using the 3-Part Formula. It can be:
- Requesting assignment clarification from a professor
- Following up on an internship application
- Asking a mentor for career advice

Use the structure: Opening (1 sentence) + Body (2-3 sentences) + Closing (thank you + sign-off). Then, use the 5-Minute Proofreading Protocol. Send it. Track the response rate. I guarantee: If you follow this formula, your response rate will jump from 30% to 80%+. Professional writing is a SKILL, not a talent. You build it through practice. Now go write that email. Your future self - the one who gets extensions, internships, and job offers - is counting on you."

[End Screen: "Next Video: Master Non-Verbal Communication - Body Language That Builds Trust"]`,
      content: [
        'The 3-Part Email Formula: Opening (state purpose), Body (explain + justify), Closing (thank + sign-off)',
        'Subject Lines That Get Opened: [Purpose] - [Your Name/Identifier] formula',
        'Tone Mastery: Professional-Friendly sweet spot (not too casual, not too formal)',
        'The 5-Minute Proofreading Protocol: Read aloud, use Grammarly, check recipient, wait 5 mins',
        'Strategic Timing: Best times (8-10 AM, 2-4 PM weekdays), use Schedule Send for late-night writing',
        'Follow-Up Framework: Wait 48 hours, ONE polite follow-up, acknowledge their time',
        'B.Com Examples: Extension requests, internship follow-ups, professor communications',
        'Common Mistakes: Too casual (Hey, lol), too formal (Victorian-style), typos in names, wrong timing'
      ]
    },
    quiz: {
      title: 'Written Communication Quiz',
      questions: [
        {
          id: 11,
          question: 'Email prof about low grade meeting. Best subject line?',
          options: [
            'Hey',
            'Meeting Request - Grade Discussion - Priya Sharma, Roll 2023-045',
            'URGENT: NEED TO TALK ASAP!!!',
            'Question'
          ],
          correct: 1,
          explanation: 'Option 2 = winner. [Purpose] - [Name/Identifier] formula. Prof knows: (1) What you want (meeting), (2) Why (grade discussion), (3) Who you are (name + roll number). Gets opened and prioritized. Option 1 = too vague. Option 3 = desperate, unprofessional (ALL CAPS + exclamation marks). Option 4 = generic. Specific subject lines get 3x higher open rates.'
        },
        {
          id: 12,
          question: 'Emailing internship supervisor. Most professional opening?',
          options: [
            'Hey! Hope you\'re doing great!',
            'Dear Mr. Kapoor, writing to express interest in Financial Analyst internship on LinkedIn.',
            'Hiya! Saw your post, super interested!',
            'To Whom It May Concern, humbly beseech you...'
          ],
          correct: 1,
          explanation: 'Option 2 = professional-friendly: "Dear Mr. Kapoor" (respectful), states purpose immediately (internship interest), mentions source (LinkedIn). Option 1 = too casual ("Hey," "Hope you\'re doing great" = filler). Option 3 = unprofessional ("Hiya," "super"). Option 4 = overly formal, outdated ("humbly beseech" = Victorian letter). Modern professionalism = CLEAR + RESPECTFUL, not flowery.'
        },
        {
          id: 13,
          question: 'Prof hasn\'t responded to email in 3 days. What to do?',
          options: [
            'Send 3 follow-ups in one day',
            'Wait 1 more day, send ONE polite follow-up',
            'Assume they\'re ignoring you, give up',
            'Go to office unannounced, demand response'
          ],
          correct: 1,
          explanation: 'Option 2 = professional approach. Wait 48-96 hours (professors busy), then ONE follow-up: "Dear Professor, follow up on email from [date]. Understand busy schedule. Thank you." Option 1 = annoying (3 emails = spam). Option 3 = defeatist (might have missed it). Option 4 = confrontational, disrespectful. ONE follow-up = persistent. THREE follow-ups = entitled.'
        },
        {
          id: 14,
          question: 'Wrote extension email at 1 AM. When to send it?',
          options: [
            'Send immediately at 1 AM',
            'Schedule Send at 8 AM next morning',
            'Wait until 11 PM next night',
            'Send at 6 AM to show early rising'
          ],
          correct: 1,
          explanation: 'Option 2 = smart move. Sending at 1 AM signals: "I procrastinated, now panicking" (bad look). Use Gmail "Schedule Send" feature at 8-10 AM (professional hours). Shows organized, not desperate. Option 3 (11 PM) = same problem as 1 AM. Option 4 (6 AM) = slightly better but still looks desperate. Best window: 8 AM - 6 PM weekdays.'
        },
        {
          id: 15,
          question: 'Most effective email body for requesting assignment extension?',
          options: [
            '"Sorry, busy with other stuff, maybe consider extension? No pressure!"',
            '"Request 48-hour extension for Cost Accounting. Underestimated variance analysis complexity. 70% complete, high-quality by Friday."',
            '"Hi, need more time, stressed lately. Extension? ASAP. Thanks!"',
            '"Humbly request gracious favor of additional time due to unforeseen circumstances."'
          ],
          correct: 1,
          explanation: 'Option 2 = Reason-Request-Reassurance framework perfectly. Reason: "Underestimated complexity" (accountability, not excuses). Request: "48-hour extension" (specific, not vague). Reassurance: "70% complete, high-quality by Friday" (shows commitment). Option 1 = weak ("maybe," "if possible," "no pressure" = uncertain). Option 3 = too casual ("Hi," "ASAP," vague reasons). Option 4 = overly formal, wordy ("humbly request," "gracious favor" = outdated). Clear + Accountable + Committed = 85% approval rate.'
        }
      ]
    },
    challenge: {
      title: 'Practice Professional Writing',
      description: 'Write professional emails and documents',
      contexts: {
        academic: {
          title: 'Academic Writing Excellence',
          description: 'You need to email Professor Dr. Mehta requesting a 48-hour extension for your Business Statistics assignment (due Friday 9 AM). You misunderstood the dataset requirements and need to redo your analysis. This is your first extension request this semester, and you want to maintain a professional reputation while getting approval.',
          instructions: [
            '1. Subject Line (10 seconds): Write a clear, specific subject line following the [Purpose] - [Your Name/Identifier] formula. Example: "Request for Assignment Extension - Rahul Kumar, Roll No. 2023-078, Business Statistics." This helps the professor immediately understand: (a) What you want, (b) Who you are, (c) Which course/assignment. Professors receive 50+ emails daily - make it easy for them to prioritize yours.',
            '2. Opening Line (1 sentence): State your purpose immediately. No filler like "Hope you are doing well" or "I am writing this email to..." Just: "I am writing to request a 48-hour extension for the Business Statistics assignment due Friday, October 12." This respects their time - they know your ask in 5 seconds.',
            '3. Body - Reason (1-2 sentences): Explain WHY you need the extension with accountability, not excuses. Good: "I misunderstood the dataset requirements in Section 3 and used the wrong variables for my regression analysis. I discovered this error yesterday while cross-checking my work." Bad: "I was really busy with other assignments and did not have time." Professors respect honesty + accountability, not vague excuses.',
            '4. Body - Request (1 sentence): Make your ask SPECIFIC and REASONABLE. "I am requesting a 48-hour extension to Friday, October 14, 9 AM." Not: "Can I maybe get some more time if possible?" Vague requests get vague responses. Clear requests get clear answers.',
            '5. Body - Reassurance (1-2 sentences): Show commitment and progress. "I have already corrected my approach and completed 60% of the revised analysis. I will submit high-quality work that meets the assignment criteria by the extended deadline." This proves you are not procrastinating - you are problem-solving.',
            '6. Closing (1 sentence): Thank them professionally. "Thank you for considering my request. I appreciate your understanding." Then sign off: "Best regards, Rahul Kumar, B.Com 2nd Year, Roll No. 2023-078." Include your full name, year, and roll number (helps them identify you quickly).',
            '7. Proofreading (5 minutes): Use the 5-Minute Protocol: (a) Read OUT LOUD (catches awkward phrasing), (b) Run Grammarly/spell-check, (c) Verify professor is name spelling (Dr. Mehta, not Dr. Metha), (d) Check email address (wrong recipient = disaster), (e) Wait 5 mins, re-read, THEN send.',
            '8. Timing + Follow-Up: If you write this at 11 PM, use "Schedule Send" for 8 AM next morning (shows professionalism, not panic). If no response in 48 hours, send ONE polite follow-up: "Dear Dr. Mehta, I wanted to follow up on my email from October 10 regarding the assignment extension. I understand you have a busy schedule. Thank you for your time."',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Rambling opening: "Hi Professor, I hope this email finds you well. I wanted to reach out to you regarding the assignment that we discussed in class last week..." Result: Professor skims and misses your actual request. Solution: State purpose in sentence 1.',
            '• Excuse-making: "I was really busy with other assignments and personal issues, so I could not finish on time." Result: Sounds like poor time management. Solution: Take accountability - "I misunderstood the requirements" is honest and fixable.',
            '• Weak request: "If possible, maybe you could consider giving me an extension? Only if you have time. No pressure!" Result: Sounds uncertain and entitled. Solution: "I am requesting a 48-hour extension" = clear and confident.',
            '• Sending at 2 AM: Shows you are procrastinating and panicking. Solution: Write late if needed, but use "Schedule Send" for 8-10 AM next day.',
            '• Multiple follow-ups: Sending 3 emails in 24 hours = annoying. Solution: ONE follow-up after 48 hours = professional persistence.'
          ],
          successCriteria: [
            '✅ Your email is under 150 words (respects professor is time)',
            '✅ You state your purpose in the first sentence (no fluff)',
            '✅ You use the Reason-Request-Reassurance framework (accountability + clarity)',
            '✅ Zero grammar/spelling errors (proofread with 5-Minute Protocol)',
            '✅ You receive a response within 48 hours (clear emails get fast responses)',
            '✅ Your extension is approved (85%+ approval rate with this formula)',
            '✅ Professor replies positively: "Thank you for the clear explanation. Extension granted" (shows professionalism)',
            '✅ You feel confident, not anxious, about emailing professors in the future'
          ]
        },
        professional: {
          title: 'Professional Writing Mastery',
          description: 'You applied for a Financial Analyst internship at KPMG 2 weeks ago. You have not heard back. You want to send a follow-up email that shows professionalism, enthusiasm, and persistence - without sounding desperate or annoying. This email could determine if you get an interview or get ignored.',
          instructions: [
            '1. Research First (15 mins): Before writing, check: (a) LinkedIn - Find the hiring manager is name (personalize your email), (b) Company news - Any recent announcements you can reference? (c) Your application date - Confirm when you applied. This shows you did your homework, not just mass-emailing.',
            '2. Subject Line (Critical!): Use the "Follow-Up + Context" formula. Good: "Follow-Up: Financial Analyst Internship Application - Submitted Sept 25 - Priya Sharma." Bad: "Just checking in" (vague), "URGENT: Need Response" (desperate). Your subject line should remind them: (a) What you applied for, (b) When you applied, (c) Who you are.',
            '3. Opening (1 sentence): State your purpose + show enthusiasm. "I am writing to follow up on my Financial Analyst internship application submitted on September 25. I remain very interested in the opportunity to contribute to KPMG is audit team." This is professional + enthusiastic, not desperate.',
            '4. Body - Value Reminder (2-3 sentences): Briefly remind them WHY you are a strong candidate (they receive 100+ applications - refresh their memory). "As a B.Com student with a 3.8 GPA and experience in financial modeling (Excel, Tally), I am confident I can add value to your team. I am particularly excited about KPMG is recent expansion into ESG auditing, which aligns with my coursework in Sustainability Accounting."',
            '5. Body - Specific Ask (1 sentence): Do NOT just say "Let me know." Make a SPECIFIC request. "Could you provide an update on the application timeline or next steps in the hiring process?" This shows you respect their process and want clarity, not just "any response."',
            '6. Closing (1 sentence): Thank them + reaffirm interest. "Thank you for your time and consideration. I look forward to the opportunity to discuss how I can contribute to KPMG." Sign-off: "Best regards, Priya Sharma, B.Com 2nd Year, [Your Phone], [LinkedIn Profile URL]." Include contact info - make it EASY for them to reach you.',
            '7. Proofreading (10 minutes - HIGH STAKES): This is a job application - zero tolerance for errors. (a) Read OUT LOUD twice, (b) Check company name spelling (KPMG, not KPGM), (c) Verify hiring manager is name (Mr. Kapoor, not Mr. Kapur), (d) Check your own contact info (wrong phone number = missed opportunity), (e) Have a friend proofread (fresh eyes catch errors).',
            '8. Timing Strategy: Send Tuesday-Thursday, 9-11 AM (best open rates for professional emails). Avoid Mondays (inbox overload) and Fridays (people are mentally checked out). Use "Schedule Send" if needed. If no response in 7 days, accept it and move on (2 follow-ups = annoying).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Generic subject line: "Following up" or "Checking in" = vague, gets ignored. Solution: "Follow-Up: Financial Analyst Internship - Submitted Sept 25 - Priya Sharma" = specific, gets opened.',
            '• Desperate tone: "I really really need this internship. Please respond. I have been waiting for 2 weeks!" Result: Sounds unprofessional and needy. Solution: "I remain very interested in the opportunity" = enthusiastic but composed.',
            '• No value reminder: You assume they remember your application. Result: They do not - you are one of 200 applicants. Solution: 2-3 sentences reminding them of your key strengths (GPA, skills, relevant experience).',
            '• Vague closing: "Let me know if you need anything" or "Hope to hear from you soon." Result: No clear call-to-action. Solution: "Could you provide an update on the application timeline?" = specific ask.',
            '• Typos in company/name: "KPGM" or "Mr. Kapur" instead of "KPMG" or "Mr. Kapoor." Result: Instant rejection - shows carelessness. Solution: Triple-check names and company spelling.'
          ],
          successCriteria: [
            '✅ Your email is under 150 words (busy professionals skim - respect their time)',
            '✅ Subject line includes: Follow-Up + Position + Date + Your Name (gets opened)',
            '✅ You remind them of your key strengths in 2-3 sentences (refreshes their memory)',
            '✅ You make a specific ask: "Could you provide an update on the timeline?" (not vague)',
            '✅ Zero errors in company name, hiring manager name, or your contact info (shows attention to detail)',
            '✅ You receive a response within 5-7 days (70% response rate with this formula)',
            '✅ Response is positive: "Thank you for following up. We will be in touch next week" or interview invitation',
            '✅ You feel confident and professional, not desperate or anxious'
          ]
        },
        personal: {
          title: 'Personal Writing for Authentic Expression',
          description: 'You are applying for a scholarship that requires a 500-word Personal Statement on "A Challenge You Overcame and What You Learned." This is your chance to stand out among 500 applicants. Generic, boring statements get rejected. Authentic, compelling stories get funded. You need to write something memorable that showcases your resilience, growth, and potential.',
          instructions: [
            '1. Choose Your Story (30 mins): Pick ONE specific challenge, not multiple. Good: "I failed my first-semester Financial Accounting exam (scored 38%) and had to rebuild my confidence and study strategy." Bad: "I faced many challenges in college like exams, friendships, and time management." Specific > Generic. The scholarship committee reads 500 essays - they remember SPECIFIC stories, not vague summaries.',
            '2. Structure - The 3-Act Story Arc (Plan 15 mins): Act 1 (100 words): The Challenge - Set the scene. "In December 2022, I received my Financial Accounting exam results: 38/100. I had studied for 3 weeks, attended every lecture, and still failed. I felt humiliated and questioned if I belonged in B.Com." Act 2 (250 words): The Journey - What you DID to overcome it. "I met with Professor Sharma, who helped me realize I was memorizing, not understanding. I changed my approach: (1) Feynman Technique, (2) Study groups, (3) Practice problems daily." Act 3 (150 words): The Outcome + Lesson - How you grew. "In my second-semester exam, I scored 78%. More importantly, I learned that failure is feedback, not identity. This experience taught me resilience and adaptive learning - skills I will carry into my career."',
            '3. Opening Hook (First 2 sentences): Start with a MOMENT, not a summary. Bad: "I have faced many challenges in my life, and I have learned a lot from them." Good: "I stared at the exam paper: 38/100. Three weeks of studying, and I had failed Financial Accounting." Why this works: You dropped the reader into a specific moment. They feel your emotion. They want to know what happens next.',
            '4. Show, Do Not Tell (Critical!): Use SPECIFIC details, not vague claims. Bad: "I worked really hard and improved my grades." Good: "I spent 2 hours daily solving practice problems, joined a study group that met every Tuesday, and used the Feynman Technique to explain concepts in simple terms." Specific details = credibility. Vague claims = forgettable.',
            '5. The Lesson (Final 100 words): Do NOT just say "I learned to never give up." That is generic. Instead: "This experience taught me that intelligence is not fixed - it is built through strategy and persistence. I learned to ask for help, adapt my methods, and view failure as data, not defeat. These skills will serve me as I pursue a career in financial analysis, where adaptability and continuous learning are essential." Connect your lesson to your FUTURE goals.',
            '6. Voice - Be Authentic, Not Formal: Write like you are telling this story to a mentor over coffee. Not: "I humbly submit that this experience was transformative in nature." Yes: "Failing that exam was a wake-up call. I realized I needed to change my approach." Authenticity > Formality. They want to know YOU, not a robot.',
            '7. Editing (1 hour - Multiple Passes): Pass 1: Read aloud - does it sound like you? Pass 2: Cut fluff - every word must earn its place (500-word limit is strict). Pass 3: Check grammar/spelling (Grammarly + friend proofread). Pass 4: Verify you answered the prompt ("Challenge + What You Learned"). Pass 5: Wait 24 hours, re-read with fresh eyes, make final tweaks.',
            '8. Final Check: Does your essay pass the "So What?" test? After reading, the committee should think: "This student is resilient, self-aware, and growth-oriented. We want to invest in them." If they think: "Nice story, but so what?" - rewrite your lesson section to show IMPACT and FUTURE relevance.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Generic opening: "I have faced many challenges..." Result: Boring, committee stops reading. Solution: Start with a specific moment: "I stared at the exam paper: 38/100."',
            '• Vague storytelling: "I worked hard and improved." Result: Forgettable. Solution: Specific details: "I solved 20 practice problems daily, joined a Tuesday study group, used Feynman Technique."',
            '• No lesson: You tell the story but do not explain what you LEARNED. Result: "Nice story, but so what?" Solution: Final 100 words = clear lesson tied to future goals.',
            '• Overly formal tone: "I humbly submit that this experience was transformative..." Result: Sounds robotic, not authentic. Solution: Write like you are talking to a mentor: "Failing that exam was a wake-up call."',
            '• Ignoring word limit: You write 650 words for a 500-word limit. Result: Instant rejection (shows you cannot follow instructions). Solution: Edit ruthlessly - every word must earn its place.'
          ],
          successCriteria: [
            '✅ Your essay is EXACTLY 500 words (not 499, not 501 - shows attention to detail)',
            '✅ Opening 2 sentences hook the reader with a specific moment (not a generic summary)',
            '✅ You use specific details ("2 hours daily," "Tuesday study group") not vague claims ("worked hard")',
            '✅ Your lesson is clear and tied to future goals ("adaptability will serve me in financial analysis")',
            '✅ Your voice is authentic - it sounds like YOU, not a formal robot',
            '✅ Zero grammar/spelling errors (proofread 5+ times)',
            '✅ After reading, someone thinks: "I want to invest in this student" (passes "So What?" test)',
            '✅ You feel proud and confident - this essay represents your best self'
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
      scenario: "Virtual Deloitte interview. Prepared excellent answers. 10 mins in: Ms. Gupta checks phone, leans back. 'We'll be in touch.' Ends abruptly. NON-VERBAL sabotaged you. Slouched, fidgeted, monotone.",
      problemExplanation: [
        "93% non-verbal: Focused WORDS. Ignored 93% = non-verbal (38% tone, 55% body). Delivery > Content",
        "Posture disaster: Slouched, hunched. Signals low energy, no confidence. Posture = silent resume",
        "Eye contact fail: Looked at screen, not webcam. To her = avoiding eye contact. Avoiding = dishonesty",
        "Fidgeting: Clicked pen, touched face 10+ times. Signals nervousness, no prep. Stillness = confidence"
      ],
      solutionApproach: [
        "Camera eye contact: Look WEBCAM (not screen) when speaking. Sticky note arrow next to camera",
        "Power Pose: 2 mins before, power pose. +20% confidence, -25% stress. Sit: back straight, shoulders back",
        "3-Expression: Face matches message. Challenging? Furrow. Teamwork? Smile. Technical? Neutral + focused",
        "Vocal Variety: Vary pace, volume, pitch. Downward inflection = confidence. Variety 3× more engaging"
      ]
    },
    video: {
      title: 'Body Language That Gets You Hired: Non-Verbal Communication for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] YOUR BODY IS LYING TO YOU (And Costing You Opportunities)

"You nailed the interview questions. You explained your B.Com projects perfectly. But you did not get the job. Why? Your body language betrayed you. Here is the brutal truth: 93% of communication is NON-VERBAL. Only 7% is your actual words. That means your posture, eye contact, gestures, and tone matter 13X MORE than what you say. If your body language screams 'nervous,' 'unprepared,' or 'disinterested,' your perfect answers mean nothing. By the end of this video, you will have a battle-tested system to control your non-verbal communication in interviews, presentations, and networking. Let us decode the silent language of success."

[0:45-2:15] THE 93% RULE (Why Your Body Talks Louder Than Your Mouth)

"Albert Mehrabian (UCLA) discovered the communication breakdown:
- 7% = Your WORDS (what you say)
- 38% = Your TONE (how you say it)
- 55% = Your BODY LANGUAGE (what your body says)

Real-world example: You say 'I am excited about this opportunity' in a monotone voice while slouching and avoiding eye contact. What does the interviewer believe? Your BODY, not your words. They think: 'This person is lying or uninterested.'

THE VIRTUAL INTERVIEW TRAP:
On Zoom/Teams, your body language is MAGNIFIED. A small slouch looks like you are melting into your chair. Poor lighting makes you look tired. Looking at the screen (not camera) makes you seem evasive.

SOLUTION: The 3-Second Rule
Before you speak, do a body scan:
1. Posture: Back straight, shoulders back? ✅
2. Face: Neutral or smiling (not blank)? ✅
3. Hands: Visible, still, or gesturing purposefully? ✅

If all 3 = YES, your body is aligned with your message. If NO, pause and adjust. This 3-second check prevents 90% of non-verbal mistakes."

[2:15-3:45] THE POWER POSTURE PROTOCOL (Sit Like You Own the Room)

"Your posture is your silent resume. Here is the formula:

THE CONFIDENT SIT (For Interviews + Meetings):
- Feet: Flat on floor, hip-width apart (grounded, stable)
- Back: Straight, not touching chair back (engaged, alert)
- Shoulders: Back and down (open, confident)
- Hands: On desk/lap, visible, still (composed, trustworthy)
- Lean: Slight forward lean (interested, engaged)

Why this works: This posture triggers your brain to release confidence hormones (testosterone ↑, cortisol ↓). You FEEL more confident, which makes you SOUND more confident.

THE POWER POSE (Pre-Interview Ritual - 2 minutes):
Find a private space (bathroom, empty room). Stand:
- Feet: Wide apart (superhero stance)
- Hands: On hips (Wonder Woman pose) OR arms raised in V-shape (victory pose)
- Chest: Out, chin up
- Hold: 2 full minutes

Science: This increases testosterone (confidence) by 20% and decreases cortisol (stress) by 25% (Amy Cuddy, Harvard). You will walk into that interview feeling like you already got the job.

WHAT TO AVOID:
❌ Slouching (signals low energy, disinterest)
❌ Crossed arms (defensive, closed-off)
❌ Leaning back (arrogant or disengaged)
❌ Hunched shoulders (insecure, anxious)

Practice: Sit in front of a mirror. Slouch vs. Confident Sit. See the difference? Interviewers see it too."

[3:45-5:00] EYE CONTACT MASTERY (The Trust-Building Superpower)

"Eye contact = Trust. No eye contact = Suspicion. Here is the formula:

IN-PERSON EYE CONTACT:
- The 50-70% Rule: Maintain eye contact 50-70% of the conversation.
  • When LISTENING: 70% eye contact (shows you are engaged)
  • When SPEAKING: 50% eye contact (natural, not staring)
- The Triangle Technique (For Groups): Divide the room into 3 zones (left, center, right). Make eye contact with one person in each zone for 3-5 seconds, rotate. Creates intimacy with the entire room.

VIRTUAL EYE CONTACT (The Camera Trick):
- When SPEAKING: Look at your WEBCAM (not the screen). This creates the illusion of direct eye contact.
- When LISTENING: Look at the screen (natural).
- Pro Tip: Place a sticky note with an arrow next to your camera as a reminder.

Why this matters: In Indian professional culture, eye contact = respect + confidence. Avoiding it = dishonesty or insecurity. You lose trust in seconds.

CULTURAL NOTE:
- Western cultures: More eye contact = confidence
- Some Asian cultures: Too much eye contact = aggression
- Indian business context: Moderate eye contact (50-70%) is ideal

Practice: Have a 2-minute conversation with a friend. Maintain 50-70% eye contact. It feels unnatural at first but becomes automatic with practice."

[5:00-6:15] HAND GESTURES + FACIAL EXPRESSIONS (Amplify Your Message)

"HAND GESTURE FORMULA:
Your hands should SUPPORT your words, not distract from them.

THE POWER ZONE: Keep hands at chest level (between waist and shoulders).
- Below waist = low energy
- Above head = aggressive
- Chest level = confident, engaging

PURPOSEFUL GESTURES:
- Counting: 'Three key skills' → Hold up 3 fingers
- Growth: 'Revenue increased' → Upward hand motion
- Comparison: 'Option A vs Option B' → Left hand vs right hand
- Emphasis: 'This is critical' → Open palm, slight forward motion

WHAT TO AVOID:
❌ Fidgeting (pen clicking, hair touching, face rubbing) = nervous
❌ Hands in pockets = hiding something
❌ Pointing at people = aggressive
❌ Excessive gestures = distracting

FACIAL EXPRESSION RULE:
Your face should MATCH your message.
- Discussing a challenge: Slight furrow (seriousness)
- Talking about teamwork: Smile (warmth)
- Explaining technical skills: Neutral + focused (competence)
- Sharing achievement: Genuine smile (pride)

Practice: Say 'I am excited about this opportunity' with:
(1) Blank face → Sounds fake
(2) Genuine smile → Sounds authentic
Feel the difference? Interviewers do too."

[6:15-7:30] READING THE ROOM (Decode Non-Verbal Cues in Real-Time)

"Non-verbal literacy = professional superpower. Here is what to watch for:

ENGAGEMENT SIGNALS (Keep going!):
✅ Leaning forward = interested
✅ Nodding = agreement
✅ Smiling = positive response
✅ Taking notes = engaged
✅ Asking questions = curious

DISENGAGEMENT SIGNALS (Wrap up or change approach!):
⚠️ Leaning back = losing interest
⚠️ Checking phone/watch = bored
⚠️ Crossed arms = defensive/resistant
⚠️ Glazed eyes = mentally checked out
⚠️ Short responses = wants to end conversation

CONFUSION SIGNALS (Clarify your point!):
🤔 Furrowed brow = confused
🤔 Head tilt = processing/uncertain
🤔 Silence after your statement = did not understand

REAL-WORLD EXAMPLE:
You are explaining your Cost Accounting project. The interviewer leans back and checks their phone.
❌ Bad Response: Keep talking for 5 more minutes (ignoring the signal)
✅ Good Response: 'Let me summarize the key takeaway...' (wrap up quickly) OR 'Would you like me to clarify any part?' (engage them)

This adaptability = emotional intelligence = employability."

[7:30-8:00] YOUR CHALLENGE (Practice NOW)

"Here is your action step: Within 24 hours, do a 5-minute mock interview with a friend or record yourself answering: 'Tell me about yourself.'

CHECKLIST:
✅ Power pose for 2 mins BEFORE starting
✅ Confident sit: Back straight, shoulders back, hands visible
✅ Eye contact: 50-70% (or look at camera if virtual)
✅ Hand gestures: 2-3 purposeful gestures at chest level
✅ Facial expressions: Match your message (smile when appropriate)
✅ Vocal variety: Vary pace and tone (not monotone)

Watch the recording. You will cringe - that is growth. Note: Fidgeting? Slouching? Monotone? Fix ONE thing, then re-record. By Week 4, you will look like a different person. Non-verbal communication is a SKILL, not a talent. You build it through repetition. Now go practice. Your future self - the one who gets the job, nails the presentation, builds strong relationships - is counting on you."

[End Screen: "Next Video: Master Conflict Resolution - Turn Disagreements Into Opportunities"]`,
      content: [
        'The 93% Rule: 7% words, 38% tone, 55% body language (Mehrabian study)',
        'Power Posture Protocol: Confident sit formula + pre-interview power poses',
        'Eye Contact Mastery: 50-70% rule, triangle technique, virtual camera trick',
        'Hand Gestures + Facial Expressions: Power zone, purposeful gestures, matching face to message',
        'Reading the Room: Engagement, disengagement, and confusion signals',
        'Virtual Interview Hacks: Camera positioning, lighting, background setup',
        'Cultural Considerations: Eye contact norms in Indian professional context',
        'Common Mistakes: Fidgeting, slouching, monotone, avoiding eye contact'
      ]
    },
    quiz: {
      title: 'Non-Verbal Communication Quiz',
      questions: [
        {
          id: 16,
          question: 'Virtual interview for accounting internship. Where to look for best eye contact?',
          options: [
            'At interviewer on screen',
            'At webcam when speaking, screen when listening',
            'At notes to show prepared',
            'Alternate ceiling and keyboard'
          ],
          correct: 1,
          explanation: 'Option 2 = correct. When SPEAKING, look at webcam (camera lens) - creates illusion of direct eye contact for interviewer. When LISTENING, look at screen naturally. Looking at screen while speaking = appears looking down/away, signals evasiveness/lack of confidence. #1 virtual interview mistake B.Com students make.'
        },
        {
          id: 17,
          question: 'Financial Management presentation. Prof leaning back, checking phone. What to do?',
          options: [
            'Continue presenting 10 more minutes',
            'Stop and ask "Am I boring you?"',
            'Wrap up quickly, ask "Clarify anything or move to summary?"',
            'Speak louder and faster'
          ],
          correct: 2,
          explanation: 'Option 3 = professional response. Leaning back + checking phone = disengagement signals. Ignoring (Option 1) = wastes everyone\'s time. Calling out (Option 2) = confrontational. Speaking louder/faster (Option 4) = annoying. Smart move: Acknowledge signal by wrapping up, offering to clarify/summarize. Shows emotional intelligence - READ room and ADAPT. Employers value this skill.'
        },
        {
          id: 18,
          question: 'Explaining B.Com project in interview. Most effective hand gesture strategy?',
          options: [
            'Keep hands still on lap',
            'Use purposeful gestures at chest level',
            'Keep hands in pockets',
            'Wave hands constantly above head'
          ],
          correct: 1,
          explanation: 'Option 2 = winner. Purposeful gestures at CHEST LEVEL ("power zone") amplify message without distracting. Counting on fingers, showing growth with upward motion = visual + verbal = 2x retention. Option 1 (still hands) = robotic. Option 3 (hands in pockets) = hiding something, insecure. Option 4 (excessive gestures above head) = distracting, aggressive. Rule: Gestures SUPPORT words, not compete with them.'
        },
        {
          id: 19,
          question: 'Big 4 interview, 2 min alone in waiting room. How to boost confidence?',
          options: [
            'Sit quietly, review notes',
            'Power pose - feet wide, hands on hips, chest out',
            'Scroll Instagram to distract',
            'Whisper practice answers'
          ],
          correct: 1,
          explanation: 'Option 2 = scientifically proven. Power posing 2 minutes increases testosterone (confidence hormone) 20%, decreases cortisol (stress hormone) 25% (Amy Cuddy, Harvard). Body language affects BRAIN chemistry, which affects PERFORMANCE. Option 1 (reviewing notes) = adds stress. Option 3 (Instagram) = distracts but doesn\'t build confidence. Option 4 (whispering) = might look odd if someone walks in. Power pose in private = instant confidence boost.'
        },
        {
          id: 20,
          question: 'Say "I\'m excited about internship" but face blank, tone flat. What message received?',
          options: [
            'You are excited (believe words)',
            'You are lying/not interested (believe body language)',
            'You are professional and composed',
            'You are nervous but sincere'
          ],
          correct: 1,
          explanation: 'Option 2 = reality. 93% Rule: 7% words, 38% tone, 55% body language. When WORDS say one thing but BODY/TONE say another, people believe your body. Blank face + flat tone = "This person lying or doesn\'t care." Brain cannot fake enthusiasm - if you don\'t FEEL it, body won\'t SHOW it. Solution: Before saying "I\'m excited," think of something genuinely exciting (learning opportunity, company culture, team). Face naturally lights up, tone matches. Authenticity > Acting.'
        }
      ]
    },
    challenge: {
      title: 'Master Non-Verbal Communication',
      description: 'Develop powerful non-verbal communication skills for all aspects of life',
      contexts: {
        academic: {
          title: 'Academic Non-Verbal Excellence',
          description: 'You have a 15-minute B.Com presentation on "Blockchain in Accounting" tomorrow. 40+ students, 2 professors, 1 external examiner. 25% of your grade. Last semester, your classmate Neha had great content but got 14/20 because she slouched, avoided eye contact, and spoke in a monotone. You will use non-verbal mastery to score 18+/20.',
          instructions: [
            '1. Pre-Presentation Power Ritual (10 mins before): Find a private space (restroom, empty classroom). Do a 2-minute power pose: Feet wide, hands on hips, chest out, chin up. This increases confidence hormones by 20%. Then, do 3 rounds of 4-7-8 breathing (inhale 4 sec, hold 7 sec, exhale 8 sec). Visualize yourself presenting confidently - audience nodding, professors smiling.',
            '2. The Confident Stand (Opening 30 seconds): Walk to the front with head high, shoulders back. Stand: Feet shoulder-width apart (stable, grounded), weight evenly distributed, hands at sides or holding notes (not fidgeting). Pause for 2 seconds, make eye contact with 3 people (left, center, right), THEN start speaking. This pause signals: "I am confident and in control."',
            '3. Eye Contact - The Triangle Technique (Throughout presentation): Divide the room into 3 zones: Left (students), Center (professors), Right (students + examiner). Speak to ONE person in each zone for 3-5 seconds, then rotate. Do NOT scan randomly (looks nervous) or stare at one person (creepy). This creates intimacy with the entire room. Prioritize professors/examiner (they grade you), but do not ignore students (they are your audience too).',
            '4. Hand Gestures - The Power Zone (Emphasize key points): Keep hands at CHEST LEVEL (between waist and shoulders). Use purposeful gestures: "Three benefits of blockchain" = hold up 3 fingers. "Transparency increased" = open palms, outward motion. "Traditional vs blockchain" = left hand vs right hand. Avoid: Hands in pockets (insecure), hands behind back (hiding), fidgeting with pen/notes (nervous). Still hands when not gesturing = composed.',
            '5. Facial Expressions - Match Your Message: Discussing a problem (accounting fraud)? Serious expression, slight furrow. Explaining a solution (blockchain transparency)? Neutral + focused. Sharing a success story (company X saved ₹50L)? Genuine smile. Your face should AMPLIFY your words, not contradict them. Practice in a mirror: Say "Blockchain is revolutionary" with a blank face, then with enthusiasm. Feel the difference?',
            '6. Movement - Strategic, Not Random: Start at center (establishes authority). Move 2-3 steps LEFT when transitioning to Point 1. Move to CENTER for Point 2. Move RIGHT for Point 3. Return to CENTER for conclusion. This movement signals: "I am organized and confident." Avoid: Pacing back and forth (anxious), standing frozen (robotic), turning your back to audience (disrespectful).',
            '7. Reading the Room - Adapt in Real-Time: Watch for cues: (a) Nodding, leaning forward = engaged, keep going. (b) Checking phones, leaning back = losing interest, wrap up or ask a question. (c) Furrowed brows = confused, pause and clarify: "Let me explain that differently..." (d) Yawning, glazed eyes = bored, inject energy (louder voice, bigger gesture, ask rhetorical question).',
            '8. Closing with Authority (Final 30 seconds): Return to CENTER. Stand still. Make eye contact with professors. Deliver your closing statement with downward inflection (confidence): "Blockchain will transform accounting. The question is not IF, but WHEN." Pause for 2 seconds. Say "Thank you" with a genuine smile. Do NOT rush off - stand confidently, ready for Q&A. This final impression = lasting impression.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Slouching or leaning on podium: Signals low energy and disinterest. Solution: Stand tall, weight on both feet, shoulders back. Your posture is your silent resume.',
            '• Avoiding eye contact with professors: You focus on students (easier), ignore professors/examiner (intimidating). Result: They feel disrespected, grade you lower. Solution: 50% of your eye contact should be with professors/examiner - they decide your grade.',
            '• Fidgeting with notes/pen: Clicking pen, shuffling papers, touching face 10+ times. Result: Audience focuses on your fidgeting, not your content. Solution: Place notes on podium, hands at sides or gesturing. Stillness = confidence.',
            '• Monotone delivery with blank face: You try to sound "professional" by removing all emotion. Result: You sound robotic and boring. Solution: Vary your tone (louder for emphasis, softer for serious points), match face to message (smile when appropriate).',
            '• Ignoring audience cues: Professor leans back and checks phone, you keep talking for 5 more minutes. Result: You lose them completely. Solution: Read cues, adapt - wrap up or ask: "Should I clarify anything before moving on?"'
          ],
          successCriteria: [
            '✅ You walk to the front with confident posture (shoulders back, head high) - first impression set',
            '✅ You make eye contact with all 3 zones (left, center, right) throughout presentation - audience feels engaged',
            '✅ You use 5-7 purposeful hand gestures at chest level (not fidgeting) - message amplified',
            '✅ Your facial expressions match your content (serious for problems, enthusiastic for solutions) - authentic delivery',
            '✅ You read audience cues and adapt (wrap up when they disengage, clarify when confused) - emotional intelligence',
            '✅ You receive a grade of 17+/20 with feedback: "Confident delivery, engaging presence"',
            '✅ At least 2-3 classmates say: "You looked so confident up there!" (peer validation)',
            '✅ You feel proud and eager to present again (not traumatized!)'
          ]
        },
        professional: {
          title: 'Professional Non-Verbal Mastery',
          description: 'You have a final-round virtual interview for a Financial Analyst role at EY (Ernst & Young) in 30 minutes. 3 interviewers (2 partners, 1 HR manager). 45 minutes. This is THE interview that determines if you get the ₹6 LPA offer. Your resume is strong, but 5 other B.Com candidates are equally qualified. Your non-verbal communication will be the tiebreaker.',
          instructions: [
            '1. Technical Setup (15 mins before): Test everything. Camera: Eye level (not looking down/up). Lighting: Face well-lit (window in front, not behind). Background: Clean, professional (bookshelf or plain wall, not messy room). Audio: Wired headphones (no Bluetooth lag). Close all tabs except the meeting. Put phone on airplane mode. Dress: Business formal (blazer, even if only visible from waist up - it affects your mindset).',
            '2. Pre-Interview Power Ritual (5 mins before): Stand in a power pose for 2 minutes (feet wide, hands on hips, chest out). Do 3 rounds of 4-7-8 breathing. Visualize success: See yourself answering confidently, interviewers nodding and smiling. Say out loud (even if it feels silly): "I am prepared. I am confident. I am the right fit for this role." Your brain believes what you tell it.',
            '3. The Virtual Eye Contact Hack (Critical!): When SPEAKING, look at your WEBCAM (camera lens), not the screen. Place a sticky note with an arrow next to your camera as a reminder. When LISTENING, you can look at the screen naturally. This creates the illusion of direct eye contact. Practice this for 2 minutes before the interview - it feels unnatural but becomes automatic.',
            '4. The Confident Sit (Throughout interview): Sit: Back straight (not touching chair back), shoulders back and down, feet flat on floor, hands visible on desk (not fidgeting). Lean slightly forward (shows interest). Avoid: Slouching (low energy), leaning back (arrogant), hands below desk (hiding something), crossed arms (defensive). Your posture signals: "I am engaged, confident, and professional."',
            '5. Hand Gestures - The Power Zone (When explaining your experience): Keep hands at CHEST LEVEL, visible on camera. Use purposeful gestures: "Three key projects" = hold up 3 fingers. "Revenue growth" = upward hand motion. "Team collaboration" = hands coming together. Avoid: Hands below desk (invisible), excessive gestures (distracting), fidgeting with pen/hair (nervous). 3-5 gestures per answer = engaged. Zero gestures = robotic.',
            '6. Facial Expressions - Authentic Enthusiasm: When discussing your B.Com projects, SMILE genuinely (shows passion). When listening to questions, nod occasionally (shows engagement). When discussing challenges, slight furrow (shows seriousness). Your face should match your message. Avoid: Blank face (looks disinterested), fake smile (looks insincere), frowning (looks negative). Practice: Say "I am excited about this role" with a blank face, then with a genuine smile. Which is more convincing?',
            '7. Reading Interviewer Cues - Adapt in Real-Time: Watch for: (a) Nodding, leaning forward = interested, elaborate more. (b) Leaning back, checking notes = losing interest, wrap up and ask: "Would you like me to elaborate on any part?" (c) Furrowed brow = confused, pause and clarify: "Let me explain that differently..." (d) Smiling, taking notes = positive signal, keep going. This adaptability = emotional intelligence = hire-ability.',
            '8. Closing with Confidence (Final 5 minutes): When they ask: "Any questions for us?" - Have 2-3 prepared that show you were listening. "You mentioned the team is expanding into ESG auditing. What skills would be most valuable for someone joining now?" Then, close strong: "Thank you for this opportunity. I am very excited about the role and confident I can contribute to EY is growth. I look forward to next steps." Smile genuinely. Maintain eye contact with camera. Do NOT rush off - wait for them to end the call.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Looking at screen instead of camera when speaking: To interviewers, it looks like you are avoiding eye contact (evasive, untrustworthy). Solution: Look at WEBCAM when speaking, screen when listening. Place sticky note reminder next to camera.',
            '• Slouching or leaning back: Signals disinterest or arrogance. On camera, slouching is MAGNIFIED - you look like you are melting. Solution: Sit up straight, slight forward lean. Your posture is your silent pitch.',
            '• Zero hand gestures: Hands below desk, completely still. Result: You look robotic and disengaged. Solution: 3-5 purposeful gestures per answer at chest level. Gestures = passion.',
            '• Monotone with blank face: You try to sound "professional" by removing all emotion. Result: You sound boring and uninterested. Solution: Vary your tone, smile when discussing achievements, show genuine enthusiasm. Authenticity > Formality.',
            '• Ignoring interviewer cues: They lean back and give short responses, you keep talking for 5 more minutes. Result: You lose them. Solution: Read cues, adapt - wrap up or engage them with a question.'
          ],
          successCriteria: [
            '✅ You maintain confident posture (back straight, slight forward lean) throughout 45-minute interview',
            '✅ You look at WEBCAM when speaking (creates eye contact illusion) - interviewers feel connected',
            '✅ You use 3-5 purposeful hand gestures per answer at chest level - shows passion and engagement',
            '✅ Your facial expressions match your message (smile for achievements, serious for challenges) - authentic delivery',
            '✅ You read interviewer cues and adapt (elaborate when interested, wrap up when disengaged) - emotional intelligence',
            '✅ You receive positive feedback: "You presented yourself very professionally" or "Great communication skills"',
            '✅ You get a callback within 48 hours or a job offer within 1 week',
            '✅ You feel confident and proud - you represented your best self'
          ]
        },
        personal: {
          title: 'Personal Non-Verbal Connection',
          description: 'Your close friend Rohan texts: "Can we meet? I need to talk about something serious." You meet at a café. He looks stressed - slouched posture, avoiding eye contact, fidgeting with his phone. He starts: "I am thinking of dropping out of B.Com. My parents do not know yet." This is a HIGH-STAKES conversation. Your non-verbal communication will either make him feel supported and heard, or judged and alone.',
          instructions: [
            '1. Create a Safe Space (First 30 seconds): Put YOUR phone on silent, place it face-down (signals: "You have my full attention"). Sit facing him at a 45-degree angle (not directly across - that feels confrontational). Lean slightly forward (shows interest). Make soft eye contact (not staring - that is intimidating). Say: "I am here for you. Take your time." Your body language sets the tone: "This is a judgment-free zone."',
            '2. The 80/20 Listening Rule (Throughout conversation): Let HIM talk 80% of the time, you talk 20%. Your role: LISTEN and UNDERSTAND, not fix or advise (unless he asks). Resist the urge to interrupt with: "When I felt that way..." or "You should just..." This makes it about YOU. Non-verbal cues: Nod occasionally (shows you are following), maintain 50-70% eye contact (engaged but not staring), keep your body still (not fidgeting - that signals impatience).',
            '3. Mirroring Technique (Build Rapport): Subtly match his body language (not mimicking - that is creepy). If he leans forward, you lean forward slightly. If he speaks softly, you lower your volume a bit. Why this works: Mirroring creates subconscious connection - "This person gets me." Avoid: Crossing your arms when he is open (creates barrier), leaning back when he leans forward (signals disinterest).',
            '4. Reading Emotional Cues (Adapt Your Response): Watch for: (a) Tears welling up = pause, hand him a tissue, wait in silence. Do NOT say "Do not cry" - that invalidates his feelings. (b) Voice cracking = he is vulnerable, maintain gentle eye contact, nod slowly. (c) Fists clenched = anger/frustration, acknowledge: "This sounds really frustrating." (d) Shoulders dropping = relief, he needed to vent. Your non-verbal reading = emotional support.',
            '5. Validating Non-Verbals (Show You Understand): Use these gestures: (a) Slow nods (I hear you), (b) Slight head tilt (I am processing this), (c) Open palms facing him (I am not judging), (d) Leaning forward (I care). Avoid: (a) Checking your watch/phone (signals: "Hurry up"), (b) Looking around café (disinterested), (c) Crossing arms (defensive/judgmental), (d) Fake smile (dismissive). Authenticity > Politeness.',
            '6. The Pause Principle (Give Him Space): When he finishes a thought, wait 3-5 seconds before responding. Often, he will add: "Actually, there is more..." This "comfortable silence" signals: "I am not rushing you. Take your time." Avoid: Immediately jumping in with advice or your own story. Silence is NOT awkward - it is respectful.',
            '7. Responding with Empathy (When He Asks for Your Thoughts): Use the "Reflect-Validate-Ask" framework: (a) REFLECT: "It sounds like you are feeling overwhelmed by the pressure and unsure about your path." (b) VALIDATE: "That is completely understandable. This is a huge decision." (c) ASK: "What is the hardest part for you right now?" Your body: Maintain eye contact, open posture, calm tone. This shows: "I am here to support, not judge."',
            '8. Closing with Support (End of Conversation): Before leaving, make eye contact and say: "Thank you for trusting me with this. I am here for you, whatever you decide." If appropriate, offer a brief hug or shoulder pat (physical touch = connection, but only if he is comfortable). Follow up within 24-48 hours: "Hey, been thinking about our conversation. How are you feeling?" This proves: You were not just being polite - you genuinely care.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Checking your phone mid-conversation: Even a quick glance signals: "You are not important enough for my full attention." Result: He shuts down emotionally. Solution: Phone on silent, face-down, out of sight. This conversation is THE priority.',
            '• Jumping to advice mode: "You should just talk to your parents" or "Do not drop out!" before fully understanding. Result: He feels unheard and judged. Solution: Listen first, validate feelings, THEN (if he asks) offer thoughts.',
            '• Fake positivity: "Everything will be fine!" or "Do not worry!" when he is expressing real pain. Result: He feels dismissed. Solution: Sit with his discomfort: "This sounds really hard. I am here for you."',
            '• Crossed arms or leaning back: Signals: "I am uncomfortable with this conversation" or "I disagree with you." Result: He feels judged and stops sharing. Solution: Open posture, slight forward lean, soft eye contact.',
            '• Making it about you: "Oh, I felt the same way when..." and then talking about YOUR experience for 10 minutes. Result: He regrets opening up. Solution: Acknowledge briefly ("I can relate"), then redirect: "But tell me more about YOUR situation."'
          ],
          successCriteria: [
            '✅ Rohan says: "Thank you for listening. I feel so much better after talking to you" (direct feedback on your support)',
            '✅ He shares MORE details as the conversation progresses (sign he feels safe and heard)',
            '✅ You maintain 80/20 listening ratio (he talks 80%, you talk 20%) - proves you listened, not lectured',
            '✅ You accurately read his emotional cues (tears, voice cracking, body language) and respond with empathy',
            '✅ You avoid giving unsolicited advice - you ask: "Do you want my thoughts, or do you just need to vent?"',
            '✅ He texts you later: "Thanks again for today. It really helped" (lasting impact)',
            '✅ Your friendship deepens - he comes to you with future struggles because he trusts you',
            '✅ You feel proud of being a supportive friend (not guilty about saying the wrong thing)'
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
      scenario: "Group project due 5 days. WhatsApp fight. Priya: 'Your section is garbage.' Arjun: 'You're controlling!' Arjun left chat. Project falling apart.",
      problemExplanation: [
        "Escalation: Work-style difference → personal attacks. Didn't address REAL issue early. Small conflicts ignored = big explosions",
        "Communication breakdown: Priya harsh feedback publicly (WhatsApp = humiliating). Arjun defensive. Neha silent. No one listening",
        "Emotional hijack: Priya disrespected. Arjun attacked. Neha anxious. Emotions high, logic low. Fight-or-flight mode",
        "Unclear roles: Who responsible? Who decides 'good enough'? Not defined. Ambiguity breeds conflict"
      ],
      solutionApproach: [
        "De-escalate: Private messages separately. 'Take 24hrs cool down, then meet?' Acknowledges emotions, buys time",
        "Active listening: Meet separately. 'What's frustrating?' Listen 80%, talk 20%. Paraphrase. People calm when HEARD",
        "Identify REAL: Not 'garbage' or 'controlling.' REAL: No quality standards, no accountability, no feedback process. Root causes",
        "Win-Win: 'Define standards (3 criteria), mini-deadlines (check-ins every 2 days), feedback template (2 strengths + 1 improvement).' Both win"
      ]
    },
    video: {
      title: 'From Group Project Drama to Team Success: Conflict Resolution for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR GROUP PROJECTS ALWAYS IMPLODE

"Group project due in 5 days. One person has done nothing. Another person is redoing everyone is work. The WhatsApp group is a war zone. Sound familiar? Here is why 80% of group projects end in conflict: You have NO conflict resolution system. You hope everyone will 'just get along.' They will not. Conflict is INEVITABLE when 4 people with different work styles, standards, and stress levels collaborate under a deadline. The question is not IF conflict will happen, but WHEN - and whether you can resolve it. By the end of this video, you will have a proven framework to turn group project drama into team success. Let us fix this."

[0:45-2:15] THE CONFLICT RESOLUTION FRAMEWORK (Your 5-Step System)

"When conflict erupts, most people either (a) Avoid it (hope it goes away), or (b) Attack (fight to win). Both fail. Here is the proven framework:

STEP 1: DE-ESCALATE (Lower the Temperature)
When emotions are high, logic is low. You cannot problem-solve when someone is in fight-or-flight mode. De-escalation tactics:
- Take a 24-hour cooling-off period: 'Let us pause, breathe, and reconvene tomorrow with fresh minds.'
- Separate conversations: Talk to each person PRIVATELY first (not in the group - that reignites the fight).
- Acknowledge emotions: 'I can see this is really frustrating for you.' (Validation ≠ Agreement. You are not saying they are right, just that their feelings are real.)

STEP 2: LISTEN ACTIVELY (Understand, Do Not Judge)
Meet with each person separately. Ask: 'What is bothering you most about this situation?' Then SHUT UP and LISTEN. Use the 80/20 rule: They talk 80%, you talk 20%. Paraphrase to confirm: 'So you feel your work was dismissed without fair feedback?' This is NOT about agreeing - it is about UNDERSTANDING. People calm down when they feel HEARD.

STEP 3: IDENTIFY THE REAL PROBLEM (Root Cause, Not Symptoms)
The fight is NEVER about what it seems. 'You are lazy' vs 'You are controlling' = surface issue. The REAL problems:
- Unclear roles: Who is responsible for what?
- Different standards: What does 'good work' mean?
- No accountability: What happens if someone misses a deadline?

Ask: 'What would success look like for you?' Find common ground: Both want a good grade. Both want to avoid redoing work. Start there.

STEP 4: FIND WIN-WIN SOLUTIONS (Not Compromise)
Compromise = everyone loses a little. 'Priya, lower your standards. Arjun, work harder.' Both unhappy.
Win-Win = creative solution where both get what they NEED (not want). Example:
- Define quality standards TOGETHER (3 criteria everyone agrees on).
- Set mini-deadlines with check-ins (Priya gets structure, Arjun gets clarity).
- Use feedback template: 2 strengths + 1 improvement (constructive, not harsh).

STEP 5: CREATE A CONFLICT RESOLUTION AGREEMENT
Before ending the meeting, establish RULES for future conflicts:
1. Feedback is PRIVATE, not in group chat (no public humiliation).
2. If upset, we take a 24-hour cooling-off period (no fighting in the heat of the moment).
3. Decisions by majority vote (no dictators).
4. Assume positive intent (no one is trying to sabotage).

Write this down. Next conflict? You have a SYSTEM, not chaos."

[2:15-3:45] THE DE-ESCALATION TOOLKIT (Calm the Storm)

"When someone is angry, defensive, or emotional, these phrases work magic:

PHRASE 1: 'I can see this is really important to you.'
Why it works: Validates their feelings without agreeing. They feel HEARD, which lowers defensiveness.

PHRASE 2: 'Help me understand your perspective.'
Why it works: Invites them to explain, not defend. Shifts from fight mode to teach mode.

PHRASE 3: 'What would a good outcome look like for you?'
Why it works: Redirects from blame (past) to solutions (future). Gets them thinking constructively.

PHRASE 4: 'I value our collaboration and want us to succeed together.'
Why it works: Reminds them you are on the SAME TEAM, not opponents. Conflict is US vs PROBLEM, not ME vs YOU.

WHAT TO AVOID:
❌ 'You need to calm down.' (Dismissive, makes them angrier)
❌ 'You are overreacting.' (Invalidates feelings, escalates conflict)
❌ 'This is not a big deal.' (Minimizes their concern, breaks trust)
❌ 'You always...' or 'You never...' (Absolutes = defensiveness)

Practice these phrases. They feel awkward at first but become automatic."

[3:45-5:15] ACTIVE LISTENING IN CONFLICT (The 80/20 Rule)

"In conflict, everyone wants to be HEARD. If you listen first, they will listen to you. Here is how:

THE 80/20 RULE: Let them talk 80% of the time, you talk 20%. Your job: UNDERSTAND, not fix or defend.

TECHNIQUE 1: Paraphrasing
After they speak, repeat back in YOUR words: 'So what I am hearing is, you feel your contribution was dismissed without fair feedback. Is that right?' This proves you were listening, not just waiting to talk.

TECHNIQUE 2: Emotion Labeling
Name the emotion you sense: 'It sounds like you are feeling frustrated and maybe a bit disrespected.' Naming emotions helps them feel SEEN. Avoid: 'Do not be upset' (invalidates). Do: 'I can see why you are upset' (validates).

TECHNIQUE 3: Ask Open-Ended Questions
Not: 'Are you mad at Priya?' (Yes/No = dead end)
Yes: 'What is the hardest part of working with Priya for you?' (Invites deeper sharing)

TECHNIQUE 4: The Pause Principle
After they finish, wait 3-5 seconds before responding. Often, they will add: 'Actually, there is more...' Silence is NOT awkward - it is respectful. It says: 'I am processing what you said, not rushing to respond.'"

[5:15-6:45] WIN-WIN SOLUTIONS (Creative Problem-Solving)

"Compromise = everyone loses a little. Win-Win = everyone gets what they NEED. Here is how to find it:

STEP 1: Separate POSITIONS from INTERESTS
- Position = what they SAY they want. 'I want to redo Arjun is section.'
- Interest = WHY they want it. 'I want our project to meet quality standards so we get a good grade.'

Focus on INTERESTS, not positions. Ask: 'What is your main concern here?' Often, both sides have compatible interests.

STEP 2: Brainstorm Options (No Judgment Yet)
Say: 'Let us come up with 5 possible solutions. No idea is bad right now.' Write them all down. Examples:
- Define quality standards together upfront.
- Set mini-deadlines with check-ins every 2 days.
- Use a feedback template (2 strengths + 1 improvement).
- Assign a 'quality checker' role that rotates.
- Have a professor review our standards.

STEP 3: Evaluate Together
Now, discuss pros/cons of each option. Which ones give BOTH people what they need? Pick the top 2-3. Test them: 'If we did this, would that address your concern?'

STEP 4: Commit + Document
Once you agree, WRITE IT DOWN. 'We agreed to: (1) Define 3 quality criteria together, (2) Check in every 2 days, (3) Use feedback template.' This prevents 'I thought we agreed on...' confusion later."

[6:45-7:45] PREVENTING FUTURE CONFLICTS (Build Systems, Not Hope)

"The best conflict resolution is PREVENTION. Here is how:

SYSTEM 1: Roles + Responsibilities Matrix
At project start, create a table: Who does what, by when, to what standard. Example:
- Arjun: Research (by Day 2, 5 sources minimum)
- Priya: Analysis (by Day 4, 3-page summary)
- Neha: Presentation (by Day 6, 10 slides max)
- You: Coordination (daily check-ins, conflict resolution)

Ambiguity breeds conflict. Clarity prevents it.

SYSTEM 2: Communication Norms
Agree upfront: How do we give feedback? (Private messages, not group chat.) How do we make decisions? (Majority vote.) What if someone misses a deadline? (24-hour grace period, then escalate.) Write these down.

SYSTEM 3: Regular Check-Ins
Do NOT wait for conflict to erupt. Daily 5-minute check-ins: 'How is everyone feeling? Any blockers?' Catch small issues before they become big explosions.

SYSTEM 4: Conflict Resolution Agreement
At project start, agree: 'If we have a conflict, we will (1) Take a 24-hour cooling-off period, (2) Meet privately to discuss, (3) Use the 5-step framework.' Having a PROCESS reduces fear of conflict."

[7:45-8:00] YOUR CHALLENGE (Practice NOW)

"Here is your action step: Next group project, implement the 5-Step Framework from Day 1. Do NOT wait for conflict. At your first meeting, say: 'Let us set up a conflict resolution process so if issues arise, we have a system.' Create a Roles Matrix, Communication Norms, and Conflict Agreement. Document it. When conflict happens (it will), you will be ready. Conflict resolution is a SKILL, not luck. You build it through systems and practice. Now go create your framework. Your future self - the one who leads successful teams, not dysfunctional ones - is counting on you."

[End Screen: "Next Video: Master Presentation Skills - Deliver Like a Pro"]`,
      content: [
        'The 5-Step Conflict Resolution Framework: De-escalate, Listen, Identify Real Problem, Find Win-Win, Create Agreement',
        'De-escalation Toolkit: Phrases that calm emotions and lower defensiveness',
        'Active Listening in Conflict: 80/20 rule, paraphrasing, emotion labeling, pause principle',
        'Win-Win Solutions: Separate positions from interests, brainstorm options, evaluate together',
        'Preventing Future Conflicts: Roles matrix, communication norms, regular check-ins, conflict agreements',
        'B.Com Examples: Group projects, team dynamics, deadline pressure scenarios',
        'Common Mistakes: Avoiding conflict, attacking, dismissing emotions, using absolutes',
        'Systems Over Hope: Build processes that prevent and resolve conflicts proactively'
      ]
    },
    quiz: {
      title: 'Conflict Resolution Quiz',
      questions: [
        {
          id: 21,
          question: 'Group project due in 3 days. Priya: "Arjun\'s work terrible!" Arjun: "You\'re controlling!" WhatsApp erupts. What first?',
          options: [
            'Take sides with right person',
            'Message both privately: "24 hours cool down, meet tomorrow"',
            'Tell both "Calm down, be professional"',
            'Ignore, hope they work it out'
          ],
          correct: 1,
          explanation: 'Option 2 = de-escalation move. When emotions high (fight-or-flight mode), logic is low. Can\'t problem-solve when people angry. Step 1: Lower temperature with cooling-off period. Step 2: Separate conversations (private messages, not group chat - reignites fight). Option 1 (taking sides) = alienates someone. Option 3 ("calm down") = dismissive, escalates conflict. Option 4 (ignoring) = problem festers, project fails. De-escalate FIRST, problem-solve SECOND.'
        },
        {
          id: 22,
          question: 'Meet Arjun privately. He: "Priya dismissed my work without reading. Feel disrespected." Best response?',
          options: [
            '"You\'re overreacting. Priya wants good grade."',
            '"So you feel contribution dismissed without fair feedback. Right?"',
            '"Maybe work not up to standard. Try harder."',
            '"Forget Priya. Focus on finishing project."'
          ],
          correct: 1,
          explanation: 'Option 2 = active listening: Paraphrase to confirm understanding ("So you feel...") and validate feelings. NOT agreeing with Arjun - showing you UNDERSTAND his perspective. People calm down when feel HEARD. Option 1 ("overreacting") = invalidates feelings, escalates conflict. Option 3 (blaming Arjun) = takes sides, breaks trust. Option 4 (dismissing issue) = ignores root problem - conflict resurfaces. Listen 80%, talk 20%. Understand BEFORE problem-solve.'
        },
        {
          id: 23,
          question: 'After listening to both separately, real problem isn\'t "lazy" vs "controlling." Root cause?',
          options: [
            'Incompatible personalities, shouldn\'t work together',
            'No clear quality standards, no feedback process',
            'Arjun genuinely lazy, Priya genuinely controlling',
            'Professor assigned bad group project'
          ],
          correct: 1,
          explanation: 'Option 2 = ROOT CAUSE. Fight is NEVER about what it seems. "Lazy" vs "Controlling" = surface symptoms. REAL issues: (1) No agreed quality standards (What\'s "good work"?), (2) No feedback process (How give constructive criticism?), (3) Unclear roles (Who decides if work acceptable?). Fix these SYSTEMS, conflict resolves. Option 1 (incompatible personalities) = cop-out - any personalities work together with clear systems. Option 3 (blaming individuals) = doesn\'t solve problem. Option 4 (blaming professor) = deflection. Address root causes, not symptoms.'
        },
        {
          id: 24,
          question: 'Propose: "Priya lower standards, Arjun work harder, let\'s compromise." Both unhappy. What\'s wrong?',
          options: [
            'Compromise always best solution',
            'Not enough time to think',
            'Compromise = everyone loses. Need WIN-WIN solution',
            'Should take Priya\'s side for quality'
          ],
          correct: 2,
          explanation: 'Option 3 = correct. Compromise = everyone loses little (Priya lowers standards = unhappy, Arjun works harder without clarity = unhappy). Win-Win = creative solution where BOTH get what they NEED. Example: (1) Define quality standards TOGETHER (3 criteria everyone agrees), (2) Set mini-deadlines with check-ins (Priya gets structure, Arjun gets clarity), (3) Use feedback template: 2 strengths + 1 improvement (constructive, not harsh). Now Priya gets quality assurance AND Arjun gets clear expectations. Both win. Option 1 = false - compromise often leaves everyone dissatisfied. Option 2 = misses point. Option 4 (taking sides) = not conflict resolution.'
        },
        {
          id: 25,
          question: 'Group resolves conflict successfully. What to do to PREVENT future conflicts?',
          options: [
            'Nothing - conflict resolved, done',
            'Avoid working with Priya and Arjun',
            'Create Conflict Resolution Agreement with rules',
            'Hope everyone learned lesson'
          ],
          correct: 2,
          explanation: 'Option 3 = prevention strategy. Best conflict resolution = PREVENTION through SYSTEMS. Conflict Resolution Agreement establishes RULES: (1) Private feedback (no public humiliation), (2) Cooling-off period (no fighting in heat of moment), (3) Decision-making process (no dictators), (4) Positive intent assumption (no one sabotaging). Write this down. Next conflict? You have PROCESS, not chaos. Option 1 (doing nothing) = guarantees conflict resurfaces under stress. Option 2 (avoiding people) = not practical/professional. Option 4 (hope) = not strategy. Build systems, not hope.'
        }
      ]
    },
    challenge: {
      title: 'Master Conflict Resolution',
      description: 'Develop skills to resolve conflicts in all areas of life',
      contexts: {
        academic: {
          title: 'Academic Conflict Resolution',
          description: 'Your B.Com group project on "Financial Statement Analysis" (30% of grade) is due in 5 days. Team: You, Priya (perfectionist), Arjun (procrastinator), Neha (conflict-avoider). Yesterday, Priya and Arjun had a heated WhatsApp argument. Priya: "Arjun, your section is garbage. I am redoing it." Arjun: "You are so controlling!" Arjun left the group chat. Priya is threatening to complain to the professor. Neha is panicking. You need to resolve this NOW using the 5-Step Framework.',
          instructions: [
            '1. De-Escalate Immediately (Within 1 hour of conflict): Send PRIVATE messages to Arjun and Priya separately (not in group chat). To Arjun: "Hey, I know yesterday was intense. Can we take 24 hours to cool down, then meet tomorrow to fix this? I value your contribution and want us to succeed together." To Priya: "I can see you are frustrated about the quality standards. Let us take a breather and meet tomorrow with fresh minds to find a solution." Why private? Public messages reignite the fight. Why 24 hours? Emotions need time to cool. Why "I value you"? Reminds them they are on the same team.',
            '2. Listen Actively - Meet Separately First (Day 2, 1 hour each): Meet with Arjun alone. Ask: "What is frustrating you most about this project?" Then SHUT UP and LISTEN. Use the 80/20 rule (he talks 80%, you talk 20%). Paraphrase: "So you feel your work was dismissed without fair feedback. Is that right?" Do NOT defend Priya or judge Arjun. Just UNDERSTAND. Repeat with Priya separately: "What is your main concern?" Listen: "You feel the quality standards are not being met and we might get a bad grade." Validate: "That is a legitimate concern." Take notes on BOTH perspectives.',
            '3. Identify the REAL Problem (Day 2, 30 mins alone): The fight is NOT about "lazy" vs "controlling." Analyze your notes. The ROOT CAUSES: (1) No clear quality standards defined upfront (What does "good work" mean?), (2) No process for giving constructive feedback (How do we critique without attacking?), (3) Unclear roles (Who decides if work is acceptable?), (4) No accountability system (What happens if someone misses a deadline?). Write these down. You will address THESE, not the surface drama.',
            '4. Find Win-Win Solutions - Group Meeting (Day 3, 1.5 hours): Bring everyone together (including Neha). Start: "Thank you for meeting. We all want a good grade. Let us focus on that shared goal." Present the ROOT CAUSES (not blame): "I think our main issues are: unclear quality standards, no feedback process, and role ambiguity." Brainstorm solutions together: (a) Define 3 quality criteria everyone agrees on, (b) Set mini-deadlines with check-ins every 2 days, (c) Use feedback template: "2 strengths + 1 improvement," (d) Assign roles: Arjun (research), Priya (analysis), Neha (presentation), You (coordination). Vote on solutions. Document in a shared Google Doc.',
            '5. Create Conflict Resolution Agreement (End of meeting, 15 mins): Before ending, establish RULES for future conflicts: (1) Feedback is PRIVATE, not in group chat (no public humiliation). (2) If upset, we take a 24-hour cooling-off period (no fighting in the moment). (3) Decisions by majority vote (no dictators). (4) Assume positive intent (no one is sabotaging). Write this down in the Google Doc. Everyone signs (literally or digitally). Next conflict? You have a PROCESS.',
            '6. Follow-Up Daily (Days 4-5): Check in every evening: "How is everyone feeling? Any blockers?" Do NOT assume "fixed = forever." Conflicts resurface under stress. Proactive check-ins prevent re-escalation. Also: Celebrate small wins. "Great job on yesterday is section, Arjun!" Positive reinforcement rebuilds trust. By Day 5, submit a quality project AND a functional team.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Taking sides publicly: "I agree with Priya, Arjun is being lazy." Result: Arjun feels ganged up on, quits the project. Solution: Stay neutral, focus on SYSTEMS (unclear standards), not PEOPLE (lazy/controlling).',
            '• Dismissing emotions: "You both need to calm down and be professional." Result: They feel invalidated, conflict escalates. Solution: Acknowledge feelings: "I can see this is really frustrating for both of you."',
            '• Forcing compromise: "Priya, lower your standards. Arjun, work harder." Result: Both unhappy. Solution: Find WIN-WIN (define standards together, set check-ins).',
            '• Ignoring the conflict: "Let us just focus on finishing the project." Result: Conflict festers, team implodes. Solution: Address it head-on with the 5-Step Framework.',
            '• No follow-up: Resolve conflict once, assume it is fixed forever. Result: Conflict resurfaces under deadline pressure. Solution: Daily check-ins, celebrate wins, reinforce positive behavior.'
          ],
          successCriteria: [
            '✅ Both Priya and Arjun agree to return to the project within 48 hours (de-escalation successful)',
            '✅ You identify 3-4 root causes (not just surface symptoms like "lazy" or "controlling")',
            '✅ The team creates a documented Conflict Resolution Agreement with 4+ rules',
            '✅ You submit a quality project on time with all team members contributing',
            '✅ Team members say: "Thank you for mediating. I learned a lot about conflict resolution"',
            '✅ Your professor comments: "This team worked through challenges professionally"',
            '✅ You feel confident resolving future group project conflicts (skill built, not luck)',
            '✅ The team stays functional for future collaborations (relationships preserved)'
          ]
        },
        professional: {
          title: 'Professional Conflict Resolution',
          description: 'You are a Financial Analyst intern at a consulting firm. Your team (5 people) is working on a client deliverable due Friday. Rajesh (senior analyst) and Meera (junior analyst) had a tense exchange in yesterday is team meeting. Rajesh: "Meera, your financial model has errors. This is basic stuff." Meera (visibly upset): "Maybe if you gave clearer instructions, I would not make mistakes." The room went silent. Your manager looked uncomfortable. Today, Rajesh and Meera are avoiding each other, and the project is stalled. Your manager asks YOU to mediate.',
          instructions: [
            '1. Assess the Situation (Day 1, 30 mins): Before jumping in, gather context. Talk to your manager privately: "What is the history between Rajesh and Meera? Have they clashed before?" Review the project: What is at stake? (Client relationship, deadline, team morale.) Observe: Are others taking sides? Is work being affected? This intel helps you understand the REAL problem, not just the surface conflict.',
            '2. De-Escalate Privately (Day 1, within 2 hours): Meet with Rajesh and Meera SEPARATELY (not together yet - that will reignite the fight). To Rajesh: "I noticed yesterday is meeting was tense. Can we grab coffee and talk about how to move the project forward?" To Meera: "I want to check in on how you are feeling about the project. Let us chat privately." Why separate? They need a safe space to vent without the other person present. Why "move forward"? Focuses on solutions, not blame.',
            '3. Listen Actively - Understand Both Sides (Day 1-2, 1 hour each): With Rajesh: "What is your main concern about the project?" Listen: "I am worried about the client seeing errors. It reflects badly on the team." Paraphrase: "So you are concerned about quality and the team is reputation." Do NOT defend Meera. With Meera: "What is been challenging for you?" Listen: "I feel like Rajesh criticizes me publicly but never teaches me how to improve." Paraphrase: "You feel you are not getting the support you need to succeed." Take notes on BOTH perspectives.',
            '4. Identify Root Causes (Day 2, 30 mins alone): The conflict is NOT "Rajesh is mean" or "Meera is incompetent." ROOT CAUSES: (1) No onboarding/training process for junior analysts (Meera was thrown into complex work without guidance). (2) No feedback norms (Rajesh gave harsh public criticism instead of private constructive feedback). (3) Unclear quality standards (What does "error-free" mean? What is the review process?). (4) Communication breakdown (Rajesh assumes Meera knows basics; Meera is afraid to ask questions). Address THESE, not personalities.',
            '5. Facilitate a Joint Meeting (Day 3, 1 hour): Bring Rajesh and Meera together. Start: "Thank you both for meeting. We all want this project to succeed and the client to be happy. Let us focus on that shared goal." Present ROOT CAUSES (not blame): "I think the main issues are: unclear training process, feedback norms, and communication gaps." Brainstorm solutions: (a) Rajesh mentors Meera 30 mins daily for 2 weeks, (b) Feedback is private (1-on-1), not in team meetings, (c) Create a quality checklist for financial models, (d) Weekly check-ins to address questions. Get buy-in from both. Document in an email to the team.',
            '6. Follow-Up + Reinforce Positive Behavior (Week 1-2): Check in with Rajesh: "How are the mentoring sessions going?" Check in with Meera: "Are you getting the support you need?" Observe team meetings: Is the dynamic improving? Celebrate wins: "Great collaboration on yesterday is model review, Rajesh and Meera!" Positive reinforcement rebuilds trust. By Week 2, the conflict should be resolved AND the team stronger.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Taking sides: "Rajesh, you were too harsh." Result: Rajesh feels attacked, shuts down. Solution: Stay neutral, focus on SYSTEMS (feedback norms), not blame.',
            '• Public mediation: Trying to resolve the conflict in a team meeting. Result: Both feel embarrassed, conflict escalates. Solution: Private conversations first, joint meeting only after you understand both sides.',
            '• Ignoring power dynamics: Treating Rajesh (senior) and Meera (junior) as equals. Result: Meera feels intimidated, does not speak up. Solution: Acknowledge the dynamic, ensure Meera feels safe to share her perspective.',
            '• No systemic fix: Resolve this conflict but do not address root causes (no training, harsh feedback culture). Result: Same conflict happens with the next junior analyst. Solution: Create SYSTEMS (mentoring, feedback norms).',
            '• Assuming it is fixed: Mediate once, move on. Result: Conflict resurfaces under deadline pressure. Solution: Follow up weekly, reinforce positive behavior, adjust systems as needed.'
          ],
          successCriteria: [
            '✅ Both Rajesh and Meera agree to the joint meeting and proposed solutions',
            '✅ You identify 3-4 root causes (training gaps, feedback norms, communication issues)',
            '✅ The team creates documented systems: mentoring plan, feedback norms, quality checklist',
            '✅ The project is delivered on time with no errors (work quality maintained)',
            '✅ Rajesh and Meera is working relationship improves (they collaborate professionally)',
            '✅ Your manager gives positive feedback: "You handled that conflict maturely and professionally"',
            '✅ You are seen as a trusted mediator (colleagues come to you with future conflicts)',
            '✅ You feel confident navigating workplace conflicts (skill built for your career)'
          ]
        },
        personal: {
          title: 'Personal Conflict Resolution',
          description: 'Your two close friends, Rohan and Priya, are in a fight and both are venting to you separately. Rohan: "Priya is so flaky. She canceled our weekend trip last minute AGAIN." Priya: "Rohan does not understand I have family obligations. He is being selfish." They have stopped talking to each other. Your friend group (5 people) is now awkward - people are taking sides. You are caught in the middle. You need to mediate before the friend group falls apart.',
          instructions: [
            '1. Stay Neutral - Do NOT Take Sides (Day 1, immediate): When Rohan vents: "That sounds really frustrating. Have you talked to Priya about how this affects you?" When Priya vents: "I can see you are in a tough spot. Have you explained your family situation to Rohan?" Do NOT say: "You are right, Priya is flaky" or "Rohan is being unreasonable." Taking sides = losing a friend. Your role: MEDIATOR, not judge. Validate feelings without agreeing with blame.',
            '2. Listen to Both Sides Separately (Day 1-2, 1 hour each): Meet Rohan for coffee. Ask: "What is really bothering you about this situation?" Listen: "I feel like Priya does not value our friendship. I planned this trip for months." Paraphrase: "So you feel disrespected and like your time was not valued." Meet Priya separately. Ask: "What is going on from your perspective?" Listen: "My parents needed me. Rohan does not understand family comes first for me." Paraphrase: "You feel torn between family obligations and friendships." Take mental notes - you are gathering intel.',
            '3. Identify the REAL Problem (Day 2, 30 mins alone): The fight is NOT "flaky" vs "selfish." ROOT CAUSES: (1) Different values (Rohan values commitment to plans; Priya values family flexibility). (2) Communication breakdown (Priya canceled last minute without explaining WHY; Rohan reacted emotionally without asking). (3) Unmet expectations (Rohan expected Priya to prioritize the trip; Priya expected Rohan to understand family emergencies). (4) No conflict resolution process (they stopped talking instead of discussing). These are the REAL issues.',
            '4. Facilitate a Conversation (Day 3, 1.5 hours): Invite both to a neutral location (café, park). Start: "I care about both of you and hate seeing you fight. Can we talk this through?" Set ground rules: (1) No interrupting, (2) Use "I feel" statements (not "You always"), (3) Assume positive intent. Let Rohan speak first: "I feel hurt when plans are canceled last minute because I put a lot of effort into planning." Then Priya: "I feel torn when family emergencies happen because I do not want to let anyone down." Help them find common ground: "You both value the friendship. You both want to feel respected. Let us build from there."',
            '5. Find a Win-Win Solution (During conversation, 30 mins): Brainstorm together: (a) Priya will communicate earlier if she anticipates conflicts (24-hour notice minimum), (b) Rohan will be more flexible with family emergencies (understanding, not resentment), (c) They will have a "check-in" 3 days before big plans to confirm, (d) If someone cancels, they propose an alternative date immediately (shows commitment). Both agree. Write it down in a group chat message so everyone is on the same page.',
            '6. Rebuild the Friend Group (Week 1-2): After Rohan and Priya reconcile, address the group dynamic. Group message: "Hey everyone, Rohan and Priya worked things out. Let us all hang out this weekend - no drama, just good vibes." Plan a low-key activity (movie night, dinner). Celebrate the resolution: "I am proud of how maturely Rohan and Priya handled this." Positive reinforcement prevents future side-taking. By Week 2, the friend group should be back to normal.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Taking sides: "Priya, you ARE flaky. Rohan is right." Result: Priya feels betrayed, you lose a friend. Solution: Stay neutral, validate BOTH perspectives.',
            '• Playing messenger: Rohan: "Tell Priya she is flaky." You to Priya: "Rohan says you are flaky." Result: You amplify the conflict. Solution: "Have you told Priya directly how you feel? I think you two should talk."',
            '• Forcing reconciliation: "You both need to apologize and move on." Result: Forced apologies are insincere, resentment lingers. Solution: Facilitate understanding first, apologies come naturally after.',
            '• Ignoring the conflict: "They will work it out eventually." Result: Friend group fractures, you lose both friends. Solution: Proactively mediate before the conflict escalates.',
            '• No follow-up: Mediate once, assume it is fixed. Result: Next time Priya cancels, the fight reignites. Solution: Check in after 1-2 weeks, reinforce the new communication norms.'
          ],
          successCriteria: [
            '✅ Both Rohan and Priya agree to meet and talk (de-escalation successful)',
            '✅ You stay neutral throughout - neither friend feels you took sides',
            '✅ They identify the root causes (different values, communication breakdown) together',
            '✅ They create a documented agreement (24-hour notice, flexibility, check-ins)',
            '✅ The friend group dynamic returns to normal within 2 weeks (no lingering awkwardness)',
            '✅ Rohan and Priya thank you: "We would not have worked this out without you"',
            '✅ You feel confident mediating future friend conflicts (skill built)',
            '✅ Your friendships with BOTH Rohan and Priya are stronger (trust deepened)'
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
      scenario: "Inter-college competition. 'AI in Financial Forecasting.' Prize: ₹50K + internship. You: 25 text-heavy slides. Last year's winner: 8 stunning slides, compelling story.",
      problemExplanation: [
        "Death by PowerPoint: Paragraphs (50+ words/slide). Judges READ instead of LISTEN. Zone out, miss insights",
        "No story: Data dump. REPORT structure, not STORY. Humans remember stories, not bullet points",
        "Visual illiteracy: Default templates, clipart, 5 fonts. Looks unprofessional. Poor design = 'doesn't care'",
        "Unclear value: Explain WHAT, HOW, not WHY IT MATTERS. 'So what?' Need IMPACT: 'Reduce errors 40%, save ₹10L'"
      ],
      solutionApproach: [
        "Story Spine: HOOK (30sec) → PROBLEM (2min) → SOLUTION (5min) → IMPACT (2min) → CLOSE (30sec). Memorable",
        "1-6-6 Rule: 1 slide = 1 idea. Max 6 words/line, 6 lines/slide. VISUALS, not text",
        "Lead impact: 'Methodology: LSTM' → '40% More Accurate.' BENEFIT first, technical second",
        "10-Slide Max: 1 min/slide. Practice timer. Q&A: Anticipate 10 questions. Stumped? 'Will follow up.' Honesty > Bluffing"
      ]
    },
    video: {
      title: 'From Death by PowerPoint to Visual Storytelling: Presentation Skills for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR PRESENTATIONS ARE BORING (And How to Fix It)

"You spent 40 hours on your B.Com project. You have brilliant insights. But your presentation? 25 slides of bullet points. The audience? Asleep by Slide 3. Here is the brutal truth: Your content is NOT the problem. Your DELIVERY is. 95% of student presentations fail because they commit the same sin: Death by PowerPoint. Text-heavy slides, no story, boring design. By the end of this video, you will have a proven system to transform your presentations from 'forgettable report' to 'winning story.' Let us fix this."

[0:45-2:15] THE STORY SPINE FRAMEWORK (Structure That Wins)

"Forget the academic structure (Intro, Literature Review, Methodology, Results, Conclusion). That is a REPORT, not a PRESENTATION. Humans remember STORIES, not data dumps. Here is the winning structure:

THE 5-ACT STORY SPINE:

ACT 1: THE HOOK (30 seconds)
Start with a BANG. Not: 'Hello, I am Priya. Today I will present my project on AI in finance.'
YES: 'Companies lose ₹100 crores annually due to bad financial forecasts. What if AI could fix this?'
Why this works: You created a problem that MATTERS. The audience thinks: 'Tell me more.'

ACT 2: THE PROBLEM (2 minutes)
Paint the current situation. Example: 'Traditional forecasting models fail because: (1) They ignore market volatility, (2) They rely on outdated data, (3) They cannot adapt to black swan events. Result: Companies make bad decisions, lose money.'
Use VISUALS: Show a chart of failed forecasts. Show real-world examples (2008 crisis, COVID-19).

ACT 3: THE SOLUTION (5 minutes)
Introduce YOUR work. 'I built an AI model using LSTM neural networks that: (1) Processes real-time data, (2) Adapts to market changes, (3) Reduces errors by 40%.'
Break this into 3 sub-slides: (a) How it works (simple diagram), (b) Key features (3 bullet points MAX), (c) Demo/example (show it in action).

ACT 4: THE IMPACT (2 minutes)
Show RESULTS. Not just: 'Accuracy improved to 92%.' YES: 'This model can save companies ₹10 lakhs annually. It has been tested on 5 years of market data. Here is the comparison.' (Show before/after chart)

ACT 5: THE CLOSE (30 seconds)
End with a CALL TO ACTION. 'This AI model is ready for real-world testing. I am seeking partnerships with financial firms. Let us revolutionize forecasting together.'
Why this works: You gave them a NEXT STEP, not just 'Thank you for listening.'

This structure = memorable. Practice it for ANY presentation."

[2:15-3:45] THE 1-6-6 SLIDE RULE (Visual Design That Works)

"Your slides should SUPPORT you, not REPLACE you. Here is the rule:

1 SLIDE = 1 IDEA
If you have 2 ideas, make 2 slides. Do not cram.

MAX 6 WORDS PER LINE
Not: 'Our AI model uses Long Short-Term Memory neural networks to process sequential financial data.'
YES: 'AI Model: 40% More Accurate'
Your MOUTH explains the details. Your SLIDE shows the headline.

MAX 6 LINES PER SLIDE
If you cannot fit your idea in 6 lines, you need a visual (chart, diagram, image) instead.

EXAMPLES:
Bad Slide:
Title: Methodology
• We used Python 3.8 with TensorFlow 2.0
• Data: 5 years of NSE stock prices (2018-2023)
• Model: LSTM with 3 hidden layers, 128 neurons each
• Training: 80/20 split, 100 epochs, Adam optimizer
• Validation: 10-fold cross-validation
Result: Boring. Audience reads, does not listen to you.

Good Slide:
Title: Built with Industry-Standard Tools
Visual: Python logo + TensorFlow logo + NSE chart
Text: '5 Years of Market Data | 92% Accuracy'
Result: Clean. Audience looks at you for details.

Practice: Take your current slides. Delete 50% of the text. Replace with visuals. You will be amazed."

[3:45-5:15] VISUAL HIERARCHY + COLOR PSYCHOLOGY (Design That Communicates)

"Design is NOT decoration. Design is COMMUNICATION. Here is the formula:

THE 3-TIER VISUAL HIERARCHY:
TIER 1: TITLE (Largest, Bold, Top)
Your title should tell the slide is message. Not: 'Results.' YES: '40% Error Reduction in 6 Months.'

TIER 2: VISUAL (Center, Dominant)
Chart, diagram, image, or icon. This is the FOCUS. Make it big, clear, high-quality.

TIER 3: SUPPORTING TEXT (Smallest, Bottom)
Minimal. 1-2 lines max. Example: 'Tested on 10,000+ data points | 95% confidence interval'

COLOR PSYCHOLOGY (Choose Wisely):
- BLUE: Trust, professionalism, stability (Finance, Corporate, Academic)
- GREEN: Growth, success, money (Business results, Profit, Sustainability)
- RED: Urgency, warning, attention (Problems, Risks, Alerts)
- GRAY: Neutral, background, supporting info

Your Color Palette: Pick 3 colors MAX.
Example: Dark Blue (primary), Light Blue (secondary), Orange (accent for key points).
Use these CONSISTENTLY across all slides.

FONT RULES:
- MAX 2 fonts: One for titles (bold, sans-serif like Arial), one for body (clean, readable).
- MIN 24pt font size (anything smaller = unreadable from back of room).
- Avoid: Comic Sans, Papyrus, decorative fonts (unprofessional).

Practice: Redesign 1 slide using this hierarchy. Before/After difference will blow your mind."

[5:15-6:30] LEAD WITH IMPACT, NOT METHOD (What Judges Actually Care About)

"Biggest mistake: Leading with HOW instead of WHY.

BAD SLIDE FLOW:
Slide 1: Methodology
Slide 2: Data Collection
Slide 3: Model Architecture
Slide 4: Training Process
Slide 5: Results (finally!)
Problem: Judges are asleep by Slide 3. They do not care about HOW until they care about WHY.

GOOD SLIDE FLOW:
Slide 1: The Problem (₹100 crore lost annually)
Slide 2: Current Solutions Fail (show failed forecasts)
Slide 3: Our Solution: 40% More Accurate (lead with RESULT)
Slide 4: How It Works (now they care about method)
Slide 5: Business Impact (₹10L savings)

REFRAME EVERY SLIDE TITLE:
Instead of: 'Methodology: LSTM Neural Networks'
Write: '40% More Accurate Than Traditional Models'

Instead of: 'Data Collection Process'
Write: '5 Years of Real Market Data'

Instead of: 'Results and Analysis'
Write: 'Proven: ₹10 Lakh Annual Savings'

Put the BENEFIT first, technical details second. Judges care about OUTCOMES, not just process."

[6:30-7:45] THE 10-SLIDE MAXIMUM + Q&A ARMOR

"For a 10-minute presentation: 8-10 slides MAX. Here is the breakdown:

SLIDE 1: Title + Your Name
SLIDE 2: Hook (The Problem)
SLIDE 3: Why It Matters (Impact/Cost)
SLIDE 4: Current Solutions Fail
SLIDE 5: Your Solution (Overview)
SLIDE 6: How It Works (Simple Diagram)
SLIDE 7: Results (Charts/Data)
SLIDE 8: Business Impact (₹ Savings)
SLIDE 9: Next Steps (Call to Action)
SLIDE 10: Thank You + Q&A

1 minute per slide. Practice with a timer until you nail the pacing.

Q&A PREPARATION (This Wins or Loses):
Anticipate 10 questions for YOUR project:
1. What data did you use?
2. How does this compare to existing models?
3. What are the limitations?
4. What is the business case/ROI?
5. Can this scale to other industries?
6. What are the risks?
7. How long did this take?
8. What is next for this project?
9. How did you validate your results?
10. What did you learn?

Prepare 2-3 sentence answers. Practice the Pause-Paraphrase-Answer technique:
Q: 'What are the limitations?'
A: [Pause 2 sec] 'Great question. The main limitation is that the model requires 3+ years of historical data to train effectively. For new companies or markets, we would need alternative approaches. We are exploring transfer learning as a solution.'"

[7:45-8:00] YOUR CHALLENGE (Transform Your Presentation NOW)

"Here is your action step: Take your current presentation. Do this:
1. Cut your slides in HALF (25 slides → 10 slides).
2. Delete 50% of text on EACH slide. Replace with visuals.
3. Rewrite EVERY slide title to lead with IMPACT, not method.
4. Create a 3-color palette and apply consistently.
5. Practice with a timer: 1 minute per slide.

Do this transformation in 1 week. Present to a friend. Ask: 'Was this engaging or boring?' If boring, iterate. By Week 2, you will have a presentation that WINS. Presentation skills are a SKILL, not talent. You build them through design + practice + storytelling. Now go transform your slides. Your future self - the one who wins competitions, lands internships, impresses employers - is counting on you."

[End Screen: "Next: Module 1 Assessment - Test Your Communication Mastery"]`,
      content: [
        'The 5-Act Story Spine: Hook, Problem, Solution, Impact, Close (not academic report structure)',
        'The 1-6-6 Slide Rule: 1 slide = 1 idea, max 6 words/line, max 6 lines/slide',
        'Visual Hierarchy: Title (largest), Visual (center focus), Supporting text (minimal)',
        'Color Psychology: Blue (trust), Green (growth), Red (urgency) - pick 3 colors max',
        'Lead with Impact: Reframe slides to show BENEFIT first, method second',
        'The 10-Slide Maximum: 1 minute per slide for 10-minute presentations',
        'Q&A Preparation: Anticipate 10 questions, prepare 2-3 sentence answers',
        'Design Principles: Max 2 fonts, min 24pt size, high-quality visuals'
      ]
    },
    quiz: {
      title: 'Presentation Skills Quiz',
      questions: [
        {
          id: 26,
          question: '25 slides for 10-min B.Com presentation. Judges bored by Slide 5. Main problem?',
          options: [
            'Content not interesting',
            'Too many slides - need 8-10 MAX',
            'Need to speak faster',
            'Judges not paying attention'
          ],
          correct: 1,
          explanation: 'Option 2 = correct. 10-Slide Maximum rule: 10-minute presentation = 8-10 slides MAX (1 minute per slide). 25 slides = 24 seconds per slide = rush (audience confused) or run over time (get cut off). Quality > Quantity. Judges zone out when rapid-fire through slides. Option 1 = blames content (likely not issue). Option 3 (speak faster) = makes worse - audience can\'t process. Option 4 = ignores real problem. Solution: Cut slides in half, spend more time on each, go deeper not wider.'
        },
        {
          id: 27,
          question: 'Which slide design follows 1-6-6 Rule (1 idea, max 6 words/line, max 6 lines)?',
          options: [
            'Title: Methodology | Long bullet points about Python, TensorFlow, LSTM...',
            'Title: 40% More Accurate | Visual chart | Text: Tested 5 years data',
            'Title: Introduction | 15 bullet points explaining entire project',
            'Title: Results | Full paragraph explaining all findings'
          ],
          correct: 1,
          explanation: 'Option 2 = winner. Follows 1-6-6 Rule: (1) ONE idea (accuracy improvement), (2) Title = 6 words, (3) Supporting text = minimal (6 words). VISUAL (chart) does heavy lifting. Your MOUTH explains details. Option 1 = violates rule (too much text, multiple ideas). Option 3 (15 bullets) = Death by PowerPoint. Option 4 (paragraph) = audience reads instead of listens. Rule: If slides can stand alone without you, you\'re doing it wrong. Slides SUPPORT you, don\'t REPLACE you.'
        },
        {
          id: 28,
          question: 'Presenting Financial Analysis project. Most effective opening?',
          options: [
            '"Hello everyone. My name is Rahul. Today I present on financial ratio analysis..."',
            '"Financial ratio analysis is very important topic in accounting and finance..."',
            '"In 2023, 40% of Indian startups failed due to poor financial planning. Today I show you 3 ratios that could have saved them."',
            '"Good morning. I have comprehensive presentation covering all aspects of financial ratio analysis..."'
          ],
          correct: 2,
          explanation: 'Option 3 = HOOK that wins. Uses: (1) Shocking stat (40% failed), (2) Relevance (startups = relatable), (3) Promise of value (3 ratios that save companies), (4) Curiosity gap (which ratios?). Hijacks attention in 10 seconds. Option 1 = generic, boring. Option 2 = vague ("very important" = weak language). Option 4 = data dump threat ("comprehensive" = "I\'ll bore you for 10 minutes"). Rule: Opening should make audience think "I NEED to hear this" not "Oh no, another boring presentation." Lead with IMPACT, not introduction.'
        },
        {
          id: 29,
          question: 'Slide title: "Methodology: Data Collection and Analysis Process." How to reframe for impact?',
          options: [
            'Keep as is - methodology important',
            '"5 Years Real Market Data: 10,000+ Transactions Analyzed"',
            '"Data Collection: Comprehensive Overview"',
            '"Methodology Section"'
          ],
          correct: 1,
          explanation: 'Option 2 = leads with IMPACT. Tells judges: (1) Scale (5 years, 10,000+ transactions), (2) Quality (real market data), (3) Credibility (comprehensive analysis). This = interesting. Option 1 ("Methodology") = boring - judges don\'t care about process until they care about results. Option 3 = adds "comprehensive" but still process-focused. Option 4 = even more generic. Rule: Reframe every slide title to answer "Why should I care?" Put BENEFIT first (credibility, scale, quality), technical details second. Judges remember outcomes, not methods.'
        },
        {
          id: 30,
          question: 'Q&A: Judge asks "What are limitations of your AI model?" You didn\'t prepare. What to do?',
          options: [
            'Bluff: "No major limitations, model is robust"',
            'Panic: "Um... I\'m not sure, didn\'t think about that"',
            'Pause 2 sec, acknowledge, answer honestly, show awareness',
            'Deflect: "Outside scope of presentation"'
          ],
          correct: 2,
          explanation: 'Option 3 = professional response. Uses Pause-Paraphrase-Answer technique: (1) PAUSE (2 sec - shows thinking, not bluffing), (2) ACKNOWLEDGE ("excellent question" - shows respect), (3) ANSWER honestly (admits limitation), (4) SHOW AWARENESS (exploring solutions). Demonstrates intellectual humility and critical thinking - judges RESPECT this. Option 1 (bluffing) = dangerous - if judges know answer, lose all credibility. Option 2 (panic) = shows lack of preparation. Option 4 (deflect) = sounds defensive. Rule: Honesty + Awareness > Bluffing. Every model has limitations - acknowledging them shows maturity.'
        }
      ]
    },
    challenge: {
      title: 'Master Presentation Skills',
      description: 'Develop powerful presentation skills for all contexts',
      contexts: {
        academic: {
          title: 'Academic Presentation Excellence',
          description: 'You are presenting your B.Com final year project "Blockchain in Supply Chain Finance" at an inter-college competition. Prize: ₹50,000 + internship. Format: 10 minutes + Q&A. Judges: 3 industry experts + 2 professors. Your current presentation: 25 text-heavy slides. You have 1 week to transform it into a visually stunning, story-driven presentation that WINS.',
          instructions: [
            '1. Audit Your Current Slides (Day 1, 1 hour): Open your presentation. Count: How many slides? (If 20+, you need to cut.) How many words per slide? (If 30+, too much text.) How many visuals vs text slides? (If 80% text, you have Death by PowerPoint.) Identify: Which slides can be combined? Which can be deleted? Which need visuals instead of text? Write down the issues - awareness is step 1.',
            '2. Build the Story Spine (Day 1, 1.5 hours): Restructure using the 5-Act framework. Act 1 (Hook): "₹500 crores lost annually in supply chain fraud. Blockchain can eliminate this." Act 2 (Problem): Why current systems fail (2 slides with visuals). Act 3 (Solution): Your blockchain model (3 slides: overview, how it works, key features). Act 4 (Impact): Results + business value (2 slides with charts). Act 5 (Close): Call-to-action. Total: 8-10 slides. Write the narrative flow BEFORE designing slides.',
            '3. Design Slide-by-Slide (Day 2-3, 3 hours): Use the 1-6-6 Rule for EACH slide. Slide 1: Title + Your Name + College. Slide 2 (Hook): Title "₹500 Crore Problem" + Visual (fraud statistics chart) + Text (minimal). Slide 3-4 (Problem): Show current system failures with diagrams. Slides 5-7 (Solution): Your blockchain model (simple flowchart, NOT technical jargon). Slide 8 (Impact): Before/after comparison chart. Slide 9 (Next Steps): Partnership opportunities. Slide 10: Thank You + Contact. Design tip: Use Canva or Google Slides templates (professional, not default PowerPoint).',
            '4. Apply Visual Hierarchy (Day 3, 1 hour): For EACH slide, check: (1) TITLE: Largest, bold, tells the message. Example: "40% Fraud Reduction in 6 Months." (2) VISUAL: Center focus, high-quality chart/diagram/image. (3) TEXT: Minimal, bottom, supporting. Color palette: Pick 3 colors (Dark Blue primary, Light Blue secondary, Orange accent). Use consistently. Fonts: Max 2 (Arial for titles, Calibri for body). Min 24pt size.',
            '5. Rehearse with Timer (Day 4-5, 2 hours): Practice your presentation with a timer. 1 minute per slide. If you go over 11 minutes, identify which slide to trim or speed up. Practice your TRANSITIONS: "Now that we understand the problem, let me show you the solution..." Smooth transitions = professional flow. Record yourself and watch - note: Are you reading slides? (Bad.) Are you looking at the audience? (Good.) Adjust.',
            '6. Prepare Q&A (Day 6, 1.5 hours): Write 10 likely questions judges will ask. For Blockchain project: "How is this different from existing blockchain solutions?" "What are implementation costs?" "What are security risks?" "Can this scale?" "What are limitations?" Prepare 2-3 sentence answers with DATA. Practice the Pause-Paraphrase-Answer technique. If stumped: "Great question. I do not have that specific data, but I would be happy to research and follow up."',
            '7. Final Polish (Day 7, 1 hour): Review every slide: (a) Is the title impact-focused? (b) Is there ONE clear visual? (c) Is text minimal? (d) Are colors consistent? (e) Are fonts readable? Make final tweaks. Practice one last time with timer. Do power pose + 4-7-8 breathing. Visualize success: Judges nodding, audience engaged, you winning.',
            '8. Competition Day - Execution: Arrive 30 mins early. Test tech (laptop, projector, clicker). Have backup (USB, PDF on phone). Do power pose in restroom (2 mins). Walk in confidently. Deliver your hook with enthusiasm. Make eye contact with all 5 judges. Use hand gestures at chest level. Nail your Q&A. End strong: "Thank you. I am excited to answer your questions." Then OWN the Q&A.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Text-heavy slides: 50+ words per slide = audience reads, does not listen to you. Solution: 1-6-6 Rule (max 6 words/line, 6 lines/slide). Replace text with visuals.',
            '• No story arc: You present in report structure (Intro, Lit Review, Methodology...). Result: Boring, forgettable. Solution: Use Story Spine (Hook, Problem, Solution, Impact, Close).',
            '• Leading with method: "Methodology: I used Python and TensorFlow..." Result: Judges do not care yet. Solution: Lead with IMPACT: "40% More Accurate Than Traditional Models."',
            '• Too many slides: 25 slides for 10 minutes = rushed or overtime. Solution: 8-10 slides MAX. Quality > Quantity.',
            '• Poor visual design: Default templates, clipart, 5 different fonts. Result: Looks unprofessional. Solution: 3-color palette, max 2 fonts, high-quality visuals, consistent design.'
          ],
          successCriteria: [
            '✅ Your presentation is 8-10 slides (not 25+) - focused and impactful',
            '✅ Each slide follows the 1-6-6 Rule (1 idea, max 6 words/line, 6 lines/slide)',
            '✅ You use the Story Spine structure (Hook, Problem, Solution, Impact, Close) - memorable',
            '✅ Your slides are visually stunning (3-color palette, consistent fonts, high-quality visuals)',
            '✅ You deliver within 10 minutes (±30 seconds) - excellent time management',
            '✅ You handle Q&A confidently with prepared answers - shows expertise',
            '✅ Judges give positive feedback: "Excellent presentation design and delivery"',
            '✅ You WIN the competition or place in top 3 (presentation skills = competitive advantage)'
          ]
        },
        professional: {
          title: 'Professional Presentation Mastery',
          description: 'You are a B.Com intern at an accounting firm. Your manager asks you to present "Q3 Financial Performance Analysis" to 5 partners and 10 senior accountants in 3 days. This is your chance to prove you are full-time offer material. Your current deck: 20 slides of Excel tables and dense text. Partners have 15-minute attention spans. You need to transform this into a compelling business presentation that drives decisions.',
          instructions: [
            '1. Understand Your Audience (Day 1, 1 hour): Research the 5 partners on LinkedIn. What do they care about? (Revenue growth? Cost savings? Client satisfaction?) Ask your manager: "What are the top 3 priorities for leadership right now?" Tailor your presentation to THEIR goals. Example: If they care about profitability, lead with "Q3 Profit Margin Increased 12%." If they care about clients, lead with "Client Retention Hit 95%." Audience-first = impact.',
            '2. Craft Your Core Message (Day 1, 30 mins): Distill your 50-page report into ONE sentence. Example: "Q3 performance exceeded targets by 15%, driven by cost optimization and new client acquisition." This is your North Star. Every slide should support THIS message. If a slide does not, delete it. Executives want the headline, not the details.',
            '3. Build the Business Case (Day 1, 2 hours): Use the Problem-Solution-Impact structure. Slide 1: Title. Slide 2: Q3 Goals (what we aimed for). Slide 3: Key Wins (3 major achievements with visuals). Slide 4: Challenges Faced (2 issues + how we addressed them). Slide 5: Financial Highlights (revenue, profit, costs - use charts, NOT tables). Slide 6: Client Metrics (retention, satisfaction, growth). Slide 7: Q4 Priorities (forward-looking). Slide 8: Recommendations (3 action items). Slide 9: Thank You + Questions. Total: 9 slides, 12 minutes (leaves 3 mins for Q&A).',
            '4. Design for Executives (Day 2, 2 hours): Executives skim. Use the "Glance Test": Can someone understand your slide in 3 seconds? If no, simplify. Replace Excel tables with bar charts. Use icons for concepts (💰 for revenue, 📈 for growth, 👥 for clients). Color palette: Corporate blues/grays (trust, professionalism). Font: 28pt+ (readable from back of room). Each slide: 1 clear visual + 1 impactful title + minimal text.',
            '5. Lead with Impact (Day 2, 1 hour): Reframe EVERY slide title. Instead of "Q3 Revenue Analysis" → "Revenue Up 18%: ₹2.5 Crore Growth." Instead of "Cost Management Initiatives" → "Cost Savings: ₹40 Lakhs in Q3." Instead of "Client Acquisition Strategy" → "15 New Clients: 25% Growth." Put the RESULT first, details second. Partners care about OUTCOMES, not process.',
            '6. Rehearse for Executive Presence (Day 3, 1.5 hours): Practice standing (even if virtual). Record video. Watch for: (1) Vocal authority (speak from diaphragm, downward inflection), (2) Confident posture (shoulders back, no fidgeting), (3) Eye contact (look at partners, not slides). Time yourself: 12 minutes max. Practice your opening: "Q3 exceeded targets by 15%. Here is how." Practice your close: "I recommend we double down on cost optimization in Q4. I have prepared a detailed action plan." Confident start + strong close = executive presence.',
            '7. Prepare for Tough Questions (Day 3, 1 hour): Partners WILL challenge you. Anticipate 10 questions: "Why did costs increase in July?" "What is driving client churn?" "How do we compare to competitors?" "What are Q4 risks?" "What is your recommendation?" Prepare data-backed answers. Practice: "Great question. Costs increased 8% in July due to the new software implementation, but we have seen 15% efficiency gains in August. Net positive." Have backup slides (appendix) with detailed data if they ask.',
            '8. Presentation Day - Deliver with Confidence: Arrive 15 mins early. Test tech. Bring printed handouts (1-page executive summary). Do power pose in restroom (2 mins). Walk in, greet everyone with eye contact. Start strong: "Q3 exceeded targets by 15%. Let me show you the key drivers." Speak TO the partners (not at your slides). Use pauses for emphasis. End with clear recommendations: "I recommend 3 actions for Q4..." Ask: "What questions do you have?" Then nail the Q&A.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Drowning in details: Presenting every data point from your 50-page report. Result: Partners lose interest in 3 minutes. Solution: Focus on TOP 3 insights. Save details for appendix.',
            '• Excel table slides: Showing raw data tables with 20 rows and 10 columns. Result: Unreadable, boring. Solution: Convert tables to bar charts, pie charts, or highlight key numbers only.',
            '• Leading with process: "Let me explain our methodology..." Result: Partners do not care about HOW until they care about WHAT. Solution: Lead with RESULTS: "Revenue up 18%."',
            '• Weak recommendations: Ending with "So that is Q3. Any questions?" Result: No clear next steps. Solution: "I recommend we: (1) Expand cost optimization to 3 more departments, (2) Launch client referral program, (3) Hire 2 more analysts. Here is the ROI..."',
            '• Fumbling Q&A: Partner asks "What is driving the cost increase?" You panic: "Um... let me check..." Result: Loss of credibility. Solution: Anticipate questions, prepare answers, have backup slides ready.'
          ],
          successCriteria: [
            '✅ Your presentation is 9-12 minutes (leaves time for Q&A) - respects their time',
            '✅ You use charts/visuals instead of Excel tables - easy to understand',
            '✅ You lead with RESULTS ("Revenue up 18%") not process - captures attention',
            '✅ You make eye contact with all 5 partners - shows confidence',
            '✅ You answer Q&A with data-backed responses - demonstrates expertise',
            '✅ Partners ask for your detailed action plan (shows they are interested)',
            '✅ Your manager gives feedback: "You presented like a senior associate, not an intern"',
            '✅ You receive a full-time offer or promotion discussion (presentation = career advancement)'
          ]
        },
        personal: {
          title: 'Personal Presentation Skills',
          description: 'You are organizing a fundraiser for an NGO that provides education to underprivileged children. You need to present to 30 potential donors (family friends, local business owners, community members) to raise ₹5 lakhs. Format: 8-minute presentation + Q&A. Your goal: Tell a compelling story that moves people to donate. Your current slides: Facts and statistics. You need to transform this into an emotional, visual story that opens wallets.',
          instructions: [
            '1. Know Your Audience (Week 1, 1 hour): Who are the 30 donors? What motivates them? (Social impact? Tax benefits? Community reputation?) Tailor your message. For business owners: "Every ₹10,000 donation educates 1 child for a year AND qualifies for 50% tax deduction under Section 80G." For parents: "Imagine if YOUR child did not have access to education. 500 children face this reality daily." Audience-first = donations.',
            '2. Build the Emotional Story Arc (Week 1, 1.5 hours): Use the Hero is Journey structure. Slide 1: Title "Education Changes Lives." Slide 2: Meet Aarav (8-year-old, could not afford school, now top of his class thanks to the NGO - use his PHOTO). Slide 3: The Problem (500 children in your city lack access to education). Slide 4: The Impact (education = escape from poverty - show before/after stories). Slide 5: How the NGO Works (simple flowchart: Donations → Scholarships → Education → Jobs). Slide 6: Success Stories (3 children who succeeded - use PHOTOS). Slide 7: Your Ask (₹5 lakhs goal, breakdown: ₹10K = 1 child/year). Slide 8: How to Donate + Thank You. Total: 8 slides.',
            '3. Design for Emotion (Week 2, 2 hours): Use HIGH-QUALITY photos of the children (with permission). Faces = connection. Avoid stock photos (fake, disconnected). Color palette: Warm colors (orange, yellow = hope, optimism). Fonts: Friendly but readable (Montserrat, Open Sans). Each slide: 1 powerful image + 1 emotional headline + minimal text. Example: Slide 2 title "Meet Aarav: From Street to Scholar" + large photo of Aarav smiling + text "Your ₹10,000 changed his life."',
            '4. Practice Your Delivery (Week 2, 1.5 hours): This is NOT a corporate presentation - it is a STORY. Practice your tone: Warm, passionate, authentic (not robotic). Slow down for emotional moments. Pause after showing Aarav is photo (let it sink in). Smile when sharing success stories. Your enthusiasm is contagious. Record yourself: Do you sound passionate or bored? Adjust. Practice your ASK: "I am asking you to invest ₹10,000 in one child is future. That is ₹833 per month - less than your monthly coffee budget. But for Aarav, it is everything."',
            '5. Prepare for Questions (Week 3, 1 hour): Donors will ask: "How do I know my money is used properly?" (Show transparency: audited financials, donor reports.) "What is the tax benefit?" (Section 80G: 50% deduction.) "Can I visit the school?" (Yes, we organize donor visits quarterly.) "What if I cannot afford ₹10,000?" (Any amount helps - ₹5,000 = books for 10 children.) Prepare honest, transparent answers. Trust = donations.',
            '6. Create a Follow-Up Plan (Week 3, 30 mins): Prepare: (1) Donation forms (physical + online), (2) Thank-you cards (personalized for each donor), (3) Impact report template (send donors updates on "their" child is progress), (4) Follow-up email (send within 24 hours with donation link + Aarav is story). Make it EASY for people to donate. Friction = lost donations.',
            '7. Presentation Day - Deliver with Heart: Arrive early, set up tech, test video/photos. Greet donors warmly (handshakes, eye contact). Start with Aarav is story (emotion first, facts second). Show the photos (let people SEE the impact). Make your ask CLEAR: "I am asking each of you to sponsor one child - ₹10,000 for one year of education." Pass around donation forms. End: "Thank you for caring. Together, we can change 50 lives this year." Then answer questions with transparency and passion.',
            '8. Follow-Up Within 24 Hours: Send thank-you email to ALL attendees (donors and non-donors). Include: (1) Aarav is story (reminder), (2) Donation link (make it easy), (3) Impact breakdown (₹10K = 1 child, ₹5K = books for 10), (4) Transparency (link to audited financials). For donors: Personalized thank-you card + photo of "their" sponsored child. For non-donors: "If you would like to contribute later, here is how." Persistence + gratitude = more donations.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Leading with statistics: "There are 500 underprivileged children in our city..." Result: Numbers are abstract, not emotional. Solution: Lead with ONE child is story (Aarav). People donate to PEOPLE, not statistics.',
            '• No clear ask: Ending with "Please consider donating if you can." Result: Vague = no action. Solution: "I am asking each of you to sponsor one child - ₹10,000 for one year. Here is the form."',
            '• Poor visuals: Using stock photos or no photos. Result: Disconnected, not authentic. Solution: Use REAL photos of the children (with permission). Faces = emotional connection.',
            '• No follow-up: Present, collect some donations, never follow up. Result: You lose 50% of potential donors who "need to think about it." Solution: Follow-up email within 24 hours with donation link.',
            '• Lack of transparency: Not addressing "How do I know my money is used properly?" Result: Donors do not trust you. Solution: Show audited financials, offer school visits, send impact reports.'
          ],
          successCriteria: [
            '✅ Your presentation uses the Hero is Journey structure (Aarav is story) - emotionally compelling',
            '✅ You use high-quality photos of real children (not stock photos) - authentic connection',
            '✅ You make a CLEAR ask: "₹10,000 sponsors one child for one year" - no ambiguity',
            '✅ You raise ₹3-5 lakhs from the 30 donors (60-100% of goal) - presentation = fundraising success',
            '✅ At least 15-20 donors contribute (50-66% conversion rate)',
            '✅ Donors say: "That was so moving. I am happy to help" (emotional impact achieved)',
            '✅ You send follow-up emails + thank-you cards within 24 hours (professionalism + gratitude)',
            '✅ You feel proud of making a real difference (presentation skills = social impact)'
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
      explanation: 'Active listening is NOT passive hearing - it is FULL ENGAGEMENT. It requires: (1) Focusing 100% on the speaker (no phone, no mental planning of your response), (2) Processing meaning (not just words), (3) Responding with paraphrasing/questions to confirm understanding. In B.Com contexts: Active listening in lectures = 70% better retention. In interviews = understanding the REAL question, not just the surface words. Hearing = passive. Active listening = intentional skill.'
    },
    {
      id: 2,
      question: 'Which of the following is NOT a component of active listening?',
      options: ['Maintaining eye contact', 'Interrupting to show understanding', 'Asking clarifying questions', 'Reflecting on what was said'],
      correct: 1,
      explanation: 'Interrupting is the OPPOSITE of active listening - it disrupts the speaker is flow and signals: "What I have to say is more important than what you are saying." Even if you interrupt to show understanding ("I totally get it!"), you are still hijacking the conversation. Active listening requires: (1) Let them finish completely, (2) Pause 2-3 seconds after they stop (they might add more), (3) THEN paraphrase or ask questions. In group projects, interrupters are seen as poor collaborators. In interviews, interrupting = disrespectful and low emotional intelligence.'
    },
    {
      id: 3,
      question: 'In a job interview, active listening helps you:',
      options: ['Answer questions before they\'re fully asked', 'Understand the interviewer\'s needs better', 'Appear more confident', 'Finish their sentences'],
      correct: 1,
      explanation: 'Active listening in interviews is your secret weapon. It helps you: (1) Understand the REAL question (often, interviewers ask about "teamwork" but really want to know about conflict resolution), (2) Tailor your answer to their priorities (if they emphasize "client communication," highlight that in your response), (3) Reference what they said earlier (shows you were listening throughout). Example: "You mentioned the team values adaptability. In my Cost Accounting project, I demonstrated this by..." This proves active listening = higher offer rates.'
    },
    {
      id: 4,
      question: 'What should you do when someone is sharing personal information?',
      options: ['Give immediate advice', 'Listen without judgment', 'Share your similar experience', 'Change the subject'],
      correct: 1,
      explanation: 'When someone shares personal struggles, they usually need to be HEARD, not FIXED. Giving immediate advice ("You should just...") dismisses their feelings and makes it about YOUR solution, not THEIR experience. Sharing your experience ("Oh, I felt the same when...") hijacks the conversation and makes it about YOU. Listen without judgment means: (1) Maintain eye contact, (2) Nod to show you are following, (3) Paraphrase to confirm understanding, (4) Ask "Do you want advice, or do you just need to vent?" Only THEN offer thoughts. People remember who made them feel heard.'
    },
    {
      id: 5,
      question: 'Which technique helps ensure you understood correctly?',
      options: ['Nodding your head', 'Paraphrasing what you heard', 'Taking detailed notes', 'Asking many questions'],
      correct: 1,
      explanation: 'Paraphrasing is the GOLD STANDARD of active listening. It means repeating back what you heard in YOUR words: "So what I am hearing is, you feel overwhelmed by the workload and need better time management strategies. Is that right?" This does 3 things: (1) Confirms you understood correctly (prevents miscommunication), (2) Shows the speaker you were actively processing (not just waiting to talk), (3) Gives them a chance to clarify ("Actually, it is more about the quality standards than workload"). In B.Com group projects, paraphrasing prevents 90% of conflicts. In interviews, it shows emotional intelligence.'
    },
    // Public Speaking Questions (6-10)
    {
      id: 6,
      question: 'What is the most important element of public speaking?',
      options: ['Perfect pronunciation', 'Confidence and preparation', 'Loud voice', 'Complex vocabulary'],
      correct: 1,
      explanation: 'Confidence and preparation are the foundation. Perfect pronunciation, loud voice, and vocabulary mean NOTHING if you lack confidence (audience senses fear) or preparation (you fumble, forget points, go off-track). Confidence comes from: (1) Knowing your content deeply (not memorizing scripts), (2) Practicing 5+ times (muscle memory), (3) Power posing + breathing exercises (physiological confidence boost). In B.Com presentations, students with average content but high confidence score 15-20% higher than brilliant students with low confidence. Delivery > Content in public speaking.'
    },
    {
      id: 7,
      question: 'How should you handle nervousness before a presentation?',
      options: ['Avoid the presentation', 'Practice and prepare thoroughly', 'Speak faster to get it over with', 'Read directly from slides'],
      correct: 1,
      explanation: 'Nervousness is NORMAL - even Obama felt it. The antidote is preparation, not avoidance. Practice thoroughly means: (1) Rehearse 5+ times out loud (not in your head), (2) Record yourself and watch (painful but effective), (3) Practice in the actual room if possible (familiarity reduces anxiety), (4) Do power poses + 4-7-8 breathing before presenting (calms nervous system). Speaking faster (Option 3) makes you sound panicked. Reading slides (Option 4) makes you look unprepared. Preparation builds confidence, which reduces nervousness. It is a skill, not luck.'
    },
    {
      id: 8,
      question: 'What makes a presentation engaging for Gen Z audiences?',
      options: ['Long, detailed explanations', 'Interactive elements and relatable examples', 'Formal language only', 'Reading from notes'],
      correct: 1,
      explanation: 'Gen Z (born 1997-2012) has an 8-second attention span (thanks, TikTok). Long explanations (Option 1) = instant zone-out. Formal language (Option 3) = disconnected and boring. Reading notes (Option 4) = "Why are you even here?" What works: (1) Interactive elements (polls, rhetorical questions, "Raise your hand if..."), (2) Relatable examples (B.Com scenarios: placement stress, group project drama, exam anxiety), (3) Storytelling (humans remember stories 22x better than facts), (4) Authenticity (Gen Z detects fake enthusiasm instantly). Engage, do not lecture.'
    },
    {
      id: 9,
      question: 'Which body language shows confidence during a presentation?',
      options: ['Arms crossed', 'Standing tall with open posture', 'Looking at the floor', 'Fidgeting with hands'],
      correct: 1,
      explanation: 'Standing tall with open posture signals: "I am confident, approachable, and in control." Specifically: Feet shoulder-width apart (grounded), shoulders back and down (open chest), hands visible at sides or gesturing (not hiding), head up with eye contact (engaged). Crossed arms (Option 1) = defensive/closed-off. Looking at floor (Option 3) = insecure/avoiding. Fidgeting (Option 4) = nervous/unprepared. Your body language is 55% of your communication (Mehrabian study). In B.Com presentations, confident posture can increase your grade by 10-15% even with identical content. Your body speaks before your mouth does.'
    },
    {
      id: 10,
      question: 'What should you do if you make a mistake during a presentation?',
      options: ['Stop and apologize profusely', 'Continue confidently and correct if needed', 'Start over', 'Ignore it completely'],
      correct: 1,
      explanation: 'Minor mistakes happen to EVERYONE - even TED speakers. The key: How you RESPOND. Option 2 is correct: Pause 2-3 seconds, correct briefly ("Apologies, I meant 40%, not 14%"), then continue confidently. Why this works: (1) Brief pause shows composure, (2) Quick correction shows attention to detail, (3) Moving forward shows confidence. Apologizing profusely (Option 1) draws MORE attention to the mistake. Starting over (Option 3) wastes time and looks unprofessional. Ignoring completely (Option 4) works for tiny slips, but not factual errors. Rule: Acknowledge, correct, move on. The audience will forget the mistake - they will remember your recovery.'
    },
    // Written Communication Questions (11-15)
    {
      id: 11,
      question: 'What is the most important aspect of professional email writing?',
      options: ['Using complex vocabulary', 'Clear subject line and concise message', 'Long, detailed explanations', 'Informal language'],
      correct: 1,
      explanation: 'Professors and employers receive 50-100 emails daily. They SKIM, not read. A clear subject line ("Request for Assignment Extension - Priya Sharma") gets opened. A concise message (under 150 words) gets read and acted upon. Complex vocabulary (Option 1) confuses. Long explanations (Option 3) get ignored. Informal language (Option 4) looks unprofessional. The 3-Part Formula: (1) Opening (state purpose in 1 sentence), (2) Body (explain + justify in 2-3 sentences), (3) Closing (thank + sign-off). This structure has an 80%+ response rate for B.Com students requesting extensions, internship follow-ups, or professor meetings.'
    },
    {
      id: 12,
      question: 'How should you structure a professional email?',
      options: ['One long paragraph', 'Greeting, body, closing, signature', 'Just the message', 'Multiple attachments'],
      correct: 1,
      explanation: 'Professional email structure: (1) GREETING: "Dear Professor Sharma," (respectful), (2) BODY: State purpose + explain + justify (3-5 sentences MAX), (3) CLOSING: "Thank you for considering my request. Best regards," (4) SIGNATURE: Full name + identifier (B.Com 2nd Year, Roll No. 2023-045). One long paragraph (Option 1) is hard to skim. Just the message (Option 3) is too abrupt and rude. Multiple attachments (Option 4) without context get ignored. This structure works for 90% of professional emails: extension requests, internship follow-ups, meeting requests, clarification questions.'
    },
    {
      id: 13,
      question: 'What tone is most appropriate for workplace communication?',
      options: ['Casual and friendly', 'Professional but approachable', 'Formal and distant', 'Humorous and relaxed'],
      correct: 1,
      explanation: 'The "Professional-Friendly" sweet spot: Formal enough to show respect, human enough to build connection. Example: "Dear Mr. Kapoor, I am writing to follow up on my internship application. I remain very interested in the opportunity. Thank you." This is NOT too casual (Option 1: "Hey! Hope you are doing great!") or too formal (Option 3: "Esteemed Sir, I humbly beseech..."). Humorous (Option 4) is risky - jokes can backfire. Professional-friendly works for: professor emails, internship follow-ups, manager communications. Test: Would you say this sentence to your professor in person? If no, rewrite it.'
    },
    {
      id: 14,
      question: 'When writing a resume, what should you prioritize?',
      options: ['Length and detail', 'Relevance and impact', 'Creative formatting', 'Personal opinions'],
      correct: 1,
      explanation: 'Recruiters spend 6 seconds scanning your resume (Ladders study). They look for: (1) RELEVANCE (Does this person have the skills we need?), (2) IMPACT (What results did they achieve?). Prioritize: "Increased sales by 30%" over "Responsible for sales activities." Length (Option 1) does not matter - 1-page resume is ideal for B.Com students. Creative formatting (Option 3) can backfire (ATS systems cannot read fancy designs). Personal opinions (Option 4) are irrelevant. Formula: Action Verb + Task + Result. Example: "Analyzed financial statements for 10 companies, identifying ₹5L in cost-saving opportunities." Relevance + Impact = interview calls.'
    },
    {
      id: 15,
      question: 'What makes written communication effective for Gen Z?',
      options: ['Formal language only', 'Authentic voice and clear purpose', 'Long paragraphs', 'Complex sentences'],
      correct: 1,
      explanation: 'Gen Z values AUTHENTICITY over formality. Effective written communication for Gen Z: (1) Authentic voice (sounds like a real human, not a corporate robot), (2) Clear purpose (state your point in sentence 1, no fluff), (3) Concise (short paragraphs, bullet points, easy to skim), (4) Relatable (use examples they understand: placement stress, internship anxiety, group projects). Formal language only (Option 1) = disconnected. Long paragraphs (Option 3) = TL;DR (too long, did not read). Complex sentences (Option 4) = confusing. Gen Z communication: Be real, be clear, be brief.'
    },
    // Non-Verbal Communication Questions (16-20)
    {
      id: 16,
      question: 'What percentage of communication is non-verbal?',
      options: ['25%', '55%', '70%', '90%'],
      correct: 1,
      explanation: 'The Mehrabian study (UCLA) found: 7% = words, 38% = tone, 55% = body language. Total non-verbal = 93%. Option 2 (55%) is technically body language alone, but the question asks about ALL non-verbal (tone + body), so 93% is closest to Option 3 (70%) in spirit. The key insight: Your WORDS matter only 7%. If you say "I am excited about this opportunity" in a monotone voice while slouching, the interviewer believes your BODY (disinterested), not your words. In B.Com interviews, students with great answers but poor body language get rejected. Students with average answers but confident body language get offers. Non-verbal > Verbal.'
    },
    {
      id: 17,
      question: 'Which body language conveys confidence?',
      options: ['Slouched posture', 'Open posture with shoulders back', 'Arms crossed', 'Looking down'],
      correct: 1,
      explanation: 'Open posture with shoulders back signals: "I am confident, approachable, and in control." Specifically: (1) Shoulders back and down (not hunched), (2) Chest open (not caved in), (3) Feet shoulder-width apart (grounded), (4) Hands visible (not hiding in pockets). Slouching (Option 1) = low energy/disinterest. Crossed arms (Option 3) = defensive/closed-off. Looking down (Option 4) = insecure/avoiding. In virtual interviews, posture is MAGNIFIED on camera. Slouching looks worse on Zoom. Sit up straight, slight forward lean = engaged and confident. This posture also triggers confidence hormones in YOUR brain (Amy Cuddy research).'
    },
    {
      id: 18,
      question: 'What should you do with your hands during a presentation?',
      options: ['Keep them in pockets', 'Use purposeful gestures', 'Fidget constantly', 'Hide behind back'],
      correct: 1,
      explanation: 'Purposeful gestures at CHEST LEVEL (the "power zone") amplify your message. Examples: "Three key points" = hold up 3 fingers. "Revenue growth" = upward hand motion. "Traditional vs blockchain" = left hand vs right hand. This creates visual + verbal = 2x retention. Hands in pockets (Option 1) = hiding something/insecure. Fidgeting (Option 3) = nervous/unprepared. Hands behind back (Option 4) = formal but disconnected. In B.Com presentations, 5-7 purposeful gestures = engaging. Zero gestures = robotic. 20+ gestures = distracting. Balance is key.'
    },
    {
      id: 19,
      question: 'How should you maintain eye contact in a group setting?',
      options: ['Stare at one person', 'Scan the room naturally', 'Look at the ceiling', 'Avoid eye contact'],
      correct: 1,
      explanation: 'The Triangle Technique: Divide the room into 3 zones (left, center, right). Pick ONE person in each zone. Speak to Person 1 for 3-5 seconds, then Person 2, then Person 3. Rotate throughout your presentation. This creates the illusion you are making eye contact with EVERYONE. Staring at one person (Option 1) = creepy and excludes others. Looking at ceiling (Option 3) = avoiding/nervous. Avoiding eye contact (Option 4) = dishonest/insecure. In Indian professional culture, eye contact = respect + confidence. In B.Com presentations, making eye contact with professors/examiners (not just students) shows respect and can improve your grade by 10-15%.'
    },
    {
      id: 20,
      question: 'What does crossed arms typically communicate?',
      options: ['Confidence', 'Defensiveness or closed-off attitude', 'Relaxation', 'Professionalism'],
      correct: 1,
      explanation: 'Crossed arms signal: "I am defensive, closed-off, or disagreeing with you." Even if you are just cold or comfortable, the audience interprets it as resistance. Why? Crossed arms create a physical BARRIER between you and others. In conflict resolution, if you cross your arms while someone is venting, they feel judged and shut down. In interviews, crossed arms = "I do not want to be here." In presentations, crossed arms = "I am uncomfortable." Solution: Keep arms at sides or use open gestures. Open posture = approachable, trustworthy, confident. Your body language affects how others perceive you AND how you perceive yourself (embodied cognition).'
    },
    // Conflict Resolution Questions (21-25)
    {
      id: 21,
      question: 'What is the first step in resolving workplace conflict?',
      options: ['Assign blame', 'Listen to all parties involved', 'Make a quick decision', 'Avoid the situation'],
      correct: 1,
      explanation: 'The 5-Step Conflict Resolution Framework starts with LISTENING, not judging. Before you can solve a problem, you must UNDERSTAND it. Meet with each party SEPARATELY (not together - that reignites the fight). Ask: "What is frustrating you most?" Then listen 80%, talk 20%. Paraphrase to confirm: "So you feel your contribution was dismissed without fair feedback?" This is NOT agreeing - it is UNDERSTANDING. Assigning blame (Option 1) escalates conflict. Quick decisions (Option 3) without understanding = wrong solutions. Avoiding (Option 4) = conflict festers and explodes later. In B.Com group projects, listening first prevents 90% of team implosions.'
    },
    {
      id: 22,
      question: 'How should you approach a difficult conversation?',
      options: ['Be aggressive', 'Stay calm and focus on facts', 'Avoid the topic', 'Make assumptions'],
      correct: 1,
      explanation: 'Difficult conversations require: (1) CALM (emotions high = logic low, so breathe and center yourself first), (2) FACTS (not emotions or assumptions - "The project was submitted 3 days late" not "You are lazy"), (3) "I" statements (not "You" accusations - "I feel concerned about the deadline" not "You never meet deadlines"). Aggressive (Option 1) = escalation. Avoiding (Option 3) = problem worsens. Assumptions (Option 4) = misunderstandings. Example: In a B.Com group project, instead of "You are not pulling your weight," say: "I noticed the research section is incomplete. Can we discuss how to get it done by Friday?" Calm + Facts + "I" statements = productive conversation.'
    },
    {
      id: 23,
      question: 'What is the goal of conflict resolution?',
      options: ['Winning the argument', 'Finding a mutually beneficial solution', 'Proving you\'re right', 'Avoiding confrontation'],
      correct: 1,
      explanation: 'Conflict resolution is NOT about winning (Option 1) or proving you are right (Option 3) - it is about finding WIN-WIN solutions where BOTH parties get what they NEED. Example: B.Com group project conflict - Priya wants quality, Arjun wants clarity. Compromise (both lose a little) = both unhappy. Win-Win = Define quality standards TOGETHER (Priya gets assurance) + Set clear expectations (Arjun gets clarity). Both win. Avoiding confrontation (Option 4) = conflict festers. The goal: Transform "Me vs You" into "Us vs Problem." In workplace conflicts, win-win solutions preserve relationships AND solve problems. This skill = leadership potential.'
    },
    {
      id: 24,
      question: 'How can you de-escalate a tense situation?',
      options: ['Raise your voice', 'Use "I" statements and stay calm', 'Make demands', 'Threaten consequences'],
      correct: 1,
      explanation: 'De-escalation requires: (1) "I" statements (not "You" accusations) - "I feel concerned about the deadline" not "You are always late," (2) Calm tone and body language (lower your voice, open posture, soft eye contact), (3) Validation (not agreement) - "I can see this is really frustrating for you." Raising voice (Option 1) = escalation. Demands (Option 3) = power struggle. Threats (Option 4) = relationship damage. Example: B.Com group fight - Instead of "You need to calm down," say: "I can see you are upset. Can we take a 24-hour break and discuss this tomorrow with fresh minds?" This acknowledges emotions, buys cooling-off time, and shows you care. De-escalate FIRST, problem-solve SECOND.'
    },
    {
      id: 25,
      question: 'What should you do if you\'re wrong in a conflict?',
      options: ['Defend your position', 'Acknowledge the mistake and apologize', 'Blame others', 'Ignore the issue'],
      correct: 1,
      explanation: 'Acknowledging mistakes shows: (1) Intellectual humility (you are secure enough to admit errors), (2) Emotional maturity (you prioritize resolution over ego), (3) Trustworthiness (you take accountability). Formula: "You are right. I made a mistake. I should have communicated the deadline earlier. I apologize. Here is how I will fix it..." This de-escalates 90% of conflicts instantly. Defending (Option 1) = escalation. Blaming others (Option 3) = loss of credibility. Ignoring (Option 4) = resentment builds. In B.Com group projects, the person who admits mistakes first is often seen as the LEADER, not the weak one. Accountability = respect.'
    },
    // Presentation Skills Questions (26-30)
    {
      id: 26,
      question: 'What is the most important element of a successful presentation?',
      options: ['Perfect slides', 'Knowing your audience', 'Speaking loudly', 'Using complex data'],
      correct: 1,
      explanation: 'Knowing your audience determines EVERYTHING: content, tone, examples, depth. Presenting to professors? Use academic rigor + citations. Presenting to business executives? Lead with ROI + business impact. Presenting to Gen Z peers? Use relatable examples + interactive elements. Perfect slides (Option 1) mean nothing if they do not resonate with your audience. Speaking loudly (Option 3) does not help if your content is irrelevant. Complex data (Option 4) confuses non-technical audiences. Example: For a B.Com project on GST, presenting to professors = focus on policy analysis. Presenting to small business owners = focus on practical compliance tips. Same topic, different audiences = different presentations. Audience-first = impact.'
    },
    {
      id: 27,
      question: 'How should you structure a presentation?',
      options: ['Jump straight to details', 'Tell them what you\'ll tell them, tell them, tell them what you told them', 'Wing it', 'Read from notes'],
      correct: 1,
      explanation: 'The classic 3-part structure (also called "Story Spine"): (1) TELL THEM WHAT YOU WILL TELL THEM (Hook + Roadmap: "Today I will cover 3 key points..."), (2) TELL THEM (Body: Present your 3 points with examples and data), (3) TELL THEM WHAT YOU TOLD THEM (Summary + Call-to-Action: "We covered X, Y, Z. I recommend..."). Why this works: Repetition = retention. The audience hears your key message 3 times = 3x more likely to remember. Jumping to details (Option 1) = audience lost. Winging it (Option 3) = disorganized mess. Reading notes (Option 4) = unprepared. This structure works for ANY presentation: B.Com projects, job interviews, business pitches.'
    },
    {
      id: 28,
      question: 'What makes a presentation memorable for Gen Z?',
      options: ['Long explanations', 'Interactive elements and storytelling', 'Complex charts', 'Formal language'],
      correct: 1,
      explanation: 'Gen Z has an 8-second attention span. What keeps them engaged: (1) INTERACTIVE elements (polls, "Raise your hand if...", Q&A breaks), (2) STORYTELLING (humans remember stories 22x better than facts - tell the story of how you discovered your research topic, not just the findings), (3) RELATABLE examples (B.Com scenarios: placement anxiety, group project drama, exam stress), (4) VISUALS (memes, GIFs, videos - not just text slides). Long explanations (Option 1) = zone-out. Complex charts (Option 3) = confusion. Formal language (Option 4) = boring. Gen Z wants: Authentic, interactive, visual, story-driven. Engage, do not lecture.'
    },
    {
      id: 29,
      question: 'How should you handle questions during a presentation?',
      options: ['Avoid them', 'Answer confidently and redirect if needed', 'Make up answers', 'Ignore them'],
      correct: 1,
      explanation: 'Questions are OPPORTUNITIES, not threats. Handle them with: (1) CONFIDENCE (even if you do not know the answer), (2) PAUSE-PARAPHRASE-ANSWER technique ("Great question. So you are asking about implementation costs? Based on my research, the initial investment is ₹10 lakhs..."), (3) REDIRECT if off-topic ("That is interesting, though slightly outside today is scope. I would love to discuss it afterward"). Making up answers (Option 3) = loss of credibility if caught. Avoiding/ignoring (Options 1, 4) = disrespectful. If you do not know: "Excellent question. I do not have that data with me, but I will research and follow up." Honesty > Bluffing. In B.Com presentations, Q&A often determines 30-40% of your grade.'
    },
    {
      id: 30,
      question: 'What is the key to building rapport with your audience?',
      options: ['Being perfect', 'Being authentic and relatable', 'Using big words', 'Reading from slides'],
      correct: 1,
      explanation: 'Authenticity and relatability build connection. Authenticity means: (1) Show genuine enthusiasm (if you are bored, they will be too), (2) Admit vulnerabilities ("I was nervous about this presentation, but I am excited to share..."), (3) Be yourself (do not try to sound like a TED speaker if that is not you). Relatability means: Use examples your audience understands. For B.Com students: "We have all pulled all-nighters before exams..." Perfect (Option 1) is intimidating and fake - minor mistakes make you HUMAN. Big words (Option 3) = pretentious. Reading slides (Option 4) = disconnected. Gen Z especially values authenticity - they detect fake enthusiasm instantly. Be real, be relatable, build trust.'
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
