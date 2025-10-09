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
      scenario: 'Your Business Law professor is explaining Contract Act sections critical for semester exams. You are physically in class but mentally scrolling Instagram, planning weekend, worrying about pending assignments. 20 minutes later, you realize you have ZERO notes and no idea what Section 10 is about. Your classmate who was actively listening can explain it perfectly. You just wasted 20 minutes and will have to re-learn everything from YouTube later.',
      problemExplanation: [
        'Physical presence but mental absence = you attend class but learn nothing (time wasted!)',
        'Missing critical exam information that professors emphasize in lectures (YouTube does not know what YOUR professor thinks is important)',
        'Not building rapport with professors = no recommendation letters for internships/placements',
        'Your questions stay in your head, confusion compounds, you fall behind week after week',
        'Classmates who actively listen get better grades with LESS outside study (they learn in class, you re-learn at home)'
      ],
      solutionApproach: [
        'Phone on airplane mode BEFORE class starts (notifications = attention killers)',
        'Use Cornell note-taking method (main points left, details right, summary bottom)',
        'Practice "mental paraphrasing" - after each 5-min segment, mentally summarize in your own words',
        'Ask 1-2 strategic questions per class (shows engagement, clarifies confusion, professors remember active students)',
        'Post-lecture 5-min review - can you explain 3 key concepts from today? If not, you were not listening'
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
          question: 'Your Business Law professor says "Section 10 will definitely be on the exam" but you were checking Instagram. You missed it. What is the core problem?',
          options: [
            'The professor spoke too quietly',
            'You were fake listening - physically present but mentally absent',
            'You need better notes from classmates',
            'The topic is too hard'
          ],
          correct: 1,
          explanation: 'Fake listening is when you HEAR words but your brain is elsewhere (phone, daydreaming, lunch plans). You can be in class for 3 hours but learn ZERO if you are not mentally present. Active listening requires 100% mental presence - phone on airplane mode, focusing on speaker, mentally paraphrasing what they say. Professors emphasize what THEY think is exam-critical (YouTube does not know this!). Miss it in class = re-learn at 2 AM.'
        },
        {
          id: 2,
          question: 'After a 60-minute lecture, you cannot recall a single key concept. Your classmate can explain 5 main points. What did they do differently?',
          options: [
            'They are naturally smarter',
            'They used active listening - Cornell notes, mental paraphrasing every 10 min, asked clarifying questions',
            'They recorded the lecture',
            'They sat in the front row'
          ],
          correct: 1,
          explanation: 'Active listening is not passive absorption - it is ACTIVE processing. Cornell method: Left = main concepts, Right = details, Bottom = your 3-sentence summary. Mental paraphrasing every 10 min: "Prof said consideration is essential - so basically no one-sided contracts." Asking questions: "What happens if consideration is inadequate?" These techniques force your brain to PROCESS, not just HEAR. Your classmate learned in class, you have to re-learn at home. Same 60 minutes, different outcomes!'
        },
        {
          id: 3,
          question: 'Job interview question: "Tell me about a time you failed." You answer: "I am a fast learner and team player." What went wrong?',
          options: [
            'You gave a perfect answer',
            'You did not actively listen - answered generic "strengths" not the ACTUAL question about failure',
            'The interviewer was unclear',
            'You were too nervous'
          ],
          correct: 1,
          explanation: 'Active listening in interviews = answer what they ASKED, not what you PREPARED. They asked about FAILURE, you answered about STRENGTHS (you were on autopilot, not listening). Pro tip: Take 2-second pause before answering - shows you are processing the actual question, not regurgitating prepared script. Interviewers spot fake listening instantly. Active listening = you address their specific question with relevant example.'
        },
        {
          id: 4,
          question: 'Your professor explains a concept for 10 minutes. You took detailed notes but cannot explain it to your friend. What is missing?',
          options: [
            'You need more notes',
            'You did passive transcription, not active processing - should have paraphrased in your own words',
            'The concept is too difficult',
            'You need to re-read your notes'
          ],
          correct: 1,
          explanation: 'Detailed notes ≠ understanding. You were a transcription machine, not a learner. Active listening requires PARAPHRASING: after each concept, mentally rephrase in YOUR words. "Section 10: consideration essential" → "Basically, contracts need both sides to give something valuable, no freebies." If you cannot paraphrase, you did not listen actively. Test: Can you teach this to a 10-year-old? If no, you only copied words, did not process meaning.'
        },
        {
          id: 5,
          question: 'Your friend says "I am so stressed about placements." You reply "Me too! By the way, new iPhone launched!" What listening mistake did you make?',
          options: [
            'You were being supportive',
            'You made it about YOU and dismissed their feelings (failed to reflect emotion)',
            'You tried to cheer them up',
            'You changed to a lighter topic'
          ],
          correct: 1,
          explanation: 'Active listening in personal contexts requires: (1) Pause YOUR agenda (stop thinking about your placement stress), (2) Reflect their emotion: "Sounds really overwhelming," (3) Ask open question: "What is stressing you most?", (4) THEN offer support. You failed step 1 (made it about you) and step 2 (dismissed feelings). Result: Friend feels unheard, relationship weakens. Active listening builds deep connections - people remember who made them feel HEARD.'
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
      scenario: 'Tomorrow you have to present your B.Com project on "GST Impact on Small Businesses" to 60+ students, 3 professors, and 2 external examiners. 20% of your final grade depends on this. Last semester, your classmate Rohan went blank mid-presentation, stammered for 2 minutes, and scored 12/20. You have been practicing for days, but every time you imagine standing at that podium, your hands sweat, your throat tightens, and you forget everything. Your slides are ready, your research is solid, but your fear of public humiliation is paralyzing. What if you forget your points? What if someone asks a question you cannot answer? What if your voice shakes and everyone thinks you are incompetent?',
      problemExplanation: [
        '🧠 Stage Fright Spiral: Your amygdala (fear center) perceives the audience as a "threat," triggering fight-or-flight response. Result: Shaky hands, rapid heartbeat, mental fog. This is NOT weakness - it is biology. Even Obama felt it.',
        '📝 Preparation Paradox: You have memorized your script word-for-word, but memory fails under stress. Why? Rote memorization relies on fragile neural pathways. One forgotten word = complete derailment. You need structure, not scripts.',
        '👥 Audience Projection: You assume everyone is judging you harshly. Reality: 80% of the audience is thinking about their own presentation, lunch plans, or Instagram. They WANT you to succeed (empathy bias). Your imagined scrutiny is 10x worse than reality.',
        '🎯 Perfectionism Trap: You believe you must deliver a flawless, TED-Talk-level presentation. Result: Crippling pressure. Truth: Authenticity > Perfection. Minor mistakes make you relatable. Steve Jobs forgot his lines multiple times - nobody remembers that.',
        '🗣️ Vocal Insecurity: Your voice sounds shaky/weak during practice. Why? Shallow breathing due to anxiety. Solution: Diaphragmatic breathing + vocal warm-ups. Your voice is an instrument - it needs tuning.',
        '⏱️ Time Anxiety: Fear of going over/under time limit adds pressure. You rush through slides, skip examples, confuse the audience. Solution: Rehearse with a timer 5+ times. Muscle memory eliminates time stress.'
      ],
      solutionApproach: [
        '🎭 Reframe the Narrative: Public speaking is NOT a performance where you are judged - it is a CONVERSATION where you share value. Shift from "What will they think of me?" to "What can I teach them?" This mental flip reduces anxiety by 60% (Harvard study).',
        '🏗️ The 3-Act Structure: Hook (30 sec: shocking stat/story) → Body (3 main points with B.Com examples) → Close (call-to-action + memorable quote). This structure is your safety net - even if you forget details, the framework guides you.',
        '💪 Power Posing + Breathing: 2 mins before presenting, stand in a "power pose" (hands on hips, chest out) in the restroom. This increases testosterone (confidence) and reduces cortisol (stress). Then: 4-7-8 breathing (inhale 4 sec, hold 7 sec, exhale 8 sec). Calms your nervous system instantly.',
        '🎤 Vocal Authority Toolkit: (1) Speak from diaphragm, not throat. (2) Vary pace: slow for important points, faster for examples. (3) Use strategic pauses (3-5 sec after key statements). (4) End sentences with downward inflection (sounds confident, not questioning).',
        '👁️ Eye Contact Formula: Do NOT scan the room randomly (looks nervous). Instead: "Triangle Technique" - pick 3 friendly faces (left, center, right), speak to each for 3-5 seconds, rotate. Creates intimacy with entire room.',
        '🛡️ Q&A Armor: Prepare for 10 likely questions. For unexpected questions: "Great question. Let me think... [pause 3 sec]... Based on my research, [answer]. If I do not have complete data, I will follow up." Honesty > Bluffing. Examiners respect intellectual humility.'
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
          question: 'You are presenting your Financial Management project. 2 minutes in, you completely forget your next point. Your mind goes blank. What should you do?',
          options: [
            'Panic, apologize profusely, and ask to start over',
            'Pause for 3 seconds, glance at your notes/slide, then continue: "Now, let us move to the next key point..."',
            'Fill the silence with "um, uh, like" while frantically trying to remember',
            'Skip to the conclusion immediately to end the embarrassment'
          ],
          correct: 1,
          explanation: 'A 3-second pause feels like eternity to YOU, but to the audience, it signals you are thinking (confidence signal). Briefly checking notes is professional, not a failure - even TED speakers do this. Apologizing draws attention to the mistake; moving forward confidently makes the audience forget it happened. Filler words ("um, uh") make you sound unprepared and amplify the awkwardness.'
        },
        {
          id: 7,
          question: 'Your professor asks: "How does your GST analysis account for the 2024 rate changes?" You did NOT research 2024 changes. What is your BEST response?',
          options: [
            'Bluff: "The 2024 changes align with my analysis, so the conclusions remain valid."',
            'Deflect: "That is outside the scope of this presentation."',
            'Honest + Proactive: "That is an excellent question. My research focused on 2022-2023 data, so I have not analyzed the 2024 changes yet. I would be happy to research that and share my findings with you by Friday."',
            'Panic: "I... I am not sure. I did not cover that."'
          ],
          correct: 2,
          explanation: 'Bluffing is dangerous - if the professor knows the answer (they usually do), you lose ALL credibility. Deflecting sounds defensive and dismissive. Panicking shows lack of composure. The honest + proactive approach demonstrates: (1) Intellectual humility (admitting knowledge gaps), (2) Professionalism (offering to follow up), (3) Confidence (not rattled by the question). Professors RESPECT this - they are testing your character, not just your knowledge.'
        },
        {
          id: 8,
          question: 'You notice 3 students in the back row are on their phones, clearly not paying attention. How should you respond?',
          options: [
            'Call them out: "Excuse me, can you please put your phones away?"',
            'Ignore them and continue - you cannot control the audience',
            'Use an engagement technique: Ask a question to the room, make eye contact with attentive students, or move closer to the back (proximity effect)',
            'Get flustered and lose confidence, thinking "My presentation is boring"'
          ],
          correct: 2,
          explanation: 'Calling them out creates confrontation and disrupts flow - you lose more attention. Ignoring them is passive, but getting flustered is worse (affects YOUR performance). The best approach: Use engagement techniques to recapture attention without confrontation. Ask a question ("Raise your hand if you have used Tally"), move toward the back (people pay more attention when speaker is near), or make eye contact with engaged students (positive reinforcement). Reality check: In ANY presentation, 10-20% will zone out - that is normal. Focus on the 80% who ARE listening.'
        },
        {
          id: 9,
          question: 'You are presenting and realize your slide deck is out of order - Slide 5 is showing when you are on Point 2. What do you do?',
          options: [
            'Stop presenting, apologize, and spend 2 minutes fixing the slides while the audience waits',
            'Continue speaking confidently and say: "Apologies for the slide order - let me explain this concept without the visual for now" and keep going',
            'Panic and say: "I am so sorry, this always happens to me, technology hates me"',
            'Blame someone else: "Whoever set up this projector messed up my presentation"'
          ],
          correct: 1,
          explanation: 'Stopping to fix slides kills momentum and makes the audience uncomfortable - they are watching you fumble, not learning. Panicking or blaming others destroys your credibility and professionalism. The pro move: Acknowledge briefly ("Apologies for the slide order"), then CONTINUE speaking confidently. Your content matters more than slides. Slides are support tools, not the presentation itself. This shows composure under pressure - a trait employers and professors value. Bonus: Have a backup plan (PDF on phone, printed notes) for tech failures.'
        },
        {
          id: 10,
          question: 'Which opening is MOST effective for a B.Com presentation on "E-commerce Taxation Challenges"?',
          options: [
            '"Hello everyone. Today I will talk about e-commerce taxation challenges. Let us begin with the definition..."',
            '"Good morning. My name is Priya, and I am presenting on e-commerce taxation. I have 3 main points to cover..."',
            '"In 2023, Amazon paid ZERO income tax in India despite ₹20,000 crore revenue. How? Today, I will reveal the 3 tax loopholes e-commerce giants exploit - and why this matters to YOU as future accountants."',
            '"E-commerce taxation is a very important and interesting topic that affects many businesses in India and around the world..."'
          ],
          correct: 2,
          explanation: 'Option 1 is boring and generic - audience zones out immediately. Option 2 is slightly better (structure preview) but still lacks impact. Option 4 is vague and uses weak words ("very important," "interesting") without substance. Option 3 is the WINNER because it uses: (1) Shocking stat (₹20,000 crore, zero tax), (2) Curiosity gap ("How?"), (3) Promise of value ("3 loopholes"), (4) Personal relevance ("matters to YOU"). This hijacks attention in the first 10 seconds. Rule: Your opening should make the audience think "I NEED to hear this" not "Oh, another boring presentation."'
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
      scenario: 'It is 11:47 PM. Your Financial Accounting assignment is due tomorrow at 9 AM, but you just realized you misunderstood the question - you analyzed the wrong company is financial statements. You need to email your professor, Dr. Sharma, requesting a 48-hour extension. You have been staring at a blank Gmail screen for 20 minutes. Should you start with "Hey" or "Dear Professor"? How do you explain your mistake without sounding incompetent? What if she thinks you are just procrastinating? One wrong word and you risk sounding unprofessional, desperate, or entitled. Your grade (and reputation) depends on this email.',
      problemExplanation: [
        '📧 Tone Paralysis: You do not know if "Hey Dr. Sharma" is too casual or "Dear Esteemed Professor" is too formal. B.Com students often swing between overly casual (WhatsApp-style) and robotic formality (Victorian-era letters). Result: You sound either disrespectful or like a robot.',
        '🏗️ Structure Confusion: You do not know where to start. Should you apologize first? Explain the situation? Make the request? You end up with a 300-word rambling email that buries your actual request in paragraph 3. Professors skim emails - if they do not see your point in 10 seconds, they move on.',
        '❌ Grammar Anxiety: You are terrified of typos, wrong punctuation, or using "your" instead of "you are." One grammar mistake = "This student is careless." You spend 15 minutes Googling "comma rules" instead of writing. Perfectionism becomes procrastination.',
        '🙏 Request Weakness: You write: "If possible, maybe, could you consider giving me an extension? Only if you have time. No pressure." This sounds uncertain and entitled. Professors respect CLEAR, JUSTIFIED requests, not wishy-washy begging.',
        '⏰ Timing Disaster: You send the email at 11:58 PM (looks like you are procrastinating) or 6:00 AM (looks desperate). Timing affects perception. Late-night emails scream "I did not plan ahead."',
        '🔄 No Follow-Up Plan: You send the email, then obsessively refresh your inbox every 5 minutes. After 24 hours of silence, you panic: "Did she ignore me? Should I send another email? What if I annoy her?" You have no follow-up strategy.'
      ],
      solutionApproach: [
        '🎯 The 3-Part Email Formula: (1) Opening (State purpose in 1 sentence), (2) Body (Explain situation + justify request with 2-3 sentences), (3) Closing (Clear ask + thank you). This structure works for 90% of professional emails. Example: "I am writing to request a 48-hour extension for the Financial Accounting assignment due tomorrow. I misunderstood the assignment requirements and analyzed the wrong company. I have already started the correct analysis and can submit high-quality work by Friday. Thank you for considering my request."',
        '📏 Tone Calibration: Use the "Professional-Friendly" tone: Formal enough to show respect, human enough to build connection. Formula: "Dear [Title] [Last Name]" + Clear sentences + "Thank you" + "Best regards, [Your Full Name]." Avoid: Emojis, slang ("gonna," "wanna"), exclamation marks (!!!), ALL CAPS.',
        '✅ The 5-Minute Proofreading Protocol: (1) Write your email, (2) Read it OUT LOUD (catches awkward phrasing), (3) Use Grammarly/spell-check, (4) Check recipient name/email (sending to wrong person = disaster), (5) Wait 5 minutes, re-read, THEN send. This eliminates 95% of errors.',
        '💪 Request Confidence: Use the "Reason-Request-Reassurance" framework. Reason: "I misunderstood the requirements." Request: "I am requesting a 48-hour extension." Reassurance: "I have already started the correct analysis and will submit quality work." This shows accountability + commitment.',
        '⏱️ Strategic Timing: Send emails between 8 AM - 6 PM on weekdays (shows professionalism). If you write late at night, use "Schedule Send" for 8 AM next day. For urgent requests, send early morning (shows you are proactive, not procrastinating).',
        '🔁 Follow-Up Framework: If no response in 48 hours, send a polite follow-up: "Dear Professor Sharma, I wanted to follow up on my email from [date] regarding the assignment extension. I understand you are busy, and I would appreciate any guidance you can provide. Thank you." One follow-up = persistent. Three follow-ups = annoying.'
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
          question: 'You need to email your professor requesting a meeting to discuss your low grade. Which subject line is BEST?',
          options: [
            'Hey',
            'Request for Meeting to Discuss Grade - Priya Sharma, Roll No. 2023-045',
            'URGENT: NEED TO TALK ASAP!!!',
            'Question'
          ],
          correct: 1,
          explanation: 'Option 2 is the winner because it follows the [Purpose] - [Your Name/Identifier] formula. The professor knows: (1) What you want (meeting), (2) Why (discuss grade), (3) Who you are (name + roll number). This gets opened and prioritized. Option 1 is too vague. Option 3 sounds desperate and unprofessional (ALL CAPS + exclamation marks). Option 4 is generic - "Question" about what? Specific subject lines get 3x higher open rates.'
        },
        {
          id: 12,
          question: 'You are emailing a potential internship supervisor. Which opening is MOST professional?',
          options: [
            'Hey! Hope you are doing great!',
            'Dear Mr. Kapoor, I am writing to express my interest in the Financial Analyst internship position advertised on LinkedIn.',
            'Hiya! I saw your internship post and I am super interested!',
            'To Whom It May Concern, I humbly beseech you to consider my application...'
          ],
          correct: 1,
          explanation: 'Option 2 is professional-friendly: "Dear Mr. Kapoor" (respectful), states purpose immediately (internship interest), mentions source (LinkedIn). Option 1 is too casual ("Hey," "Hope you are doing great" is filler). Option 3 is unprofessional ("Hiya," "super"). Option 4 is overly formal and outdated ("humbly beseech" sounds like a Victorian letter). Modern professionalism = CLEAR + RESPECTFUL, not flowery.'
        },
        {
          id: 13,
          question: 'Your professor has not responded to your email in 3 days. What should you do?',
          options: [
            'Send 3 follow-up emails in one day to show you are serious',
            'Wait one more day (total 4 days/96 hours), then send ONE polite follow-up acknowledging their busy schedule',
            'Assume they are ignoring you and give up',
            'Go to their office unannounced and demand a response'
          ],
          correct: 1,
          explanation: 'Option 2 is the professional approach. Wait 48-96 hours (professors are busy), then send ONE follow-up: "Dear Professor, I wanted to follow up on my email from [date]. I understand you have a busy schedule. Thank you." Option 1 is annoying (3 emails = spam). Option 3 is defeatist (they might have just missed it). Option 4 is confrontational and disrespectful. ONE follow-up = persistent. THREE follow-ups = entitled.'
        },
        {
          id: 14,
          question: 'You wrote an email at 1 AM requesting an assignment extension. When should you send it?',
          options: [
            'Send immediately at 1 AM (shows urgency)',
            'Use "Schedule Send" to send at 8 AM the next morning',
            'Wait until 11 PM the next night to send',
            'Send at 6 AM to show you are an early riser'
          ],
          correct: 1,
          explanation: 'Option 2 is the smart move. Sending at 1 AM signals: "I procrastinated and am now panicking" (bad look). Use Gmail is "Schedule Send" feature to send at 8-10 AM (professional hours). This shows you are organized, not desperate. Option 3 (11 PM) has the same problem as 1 AM. Option 4 (6 AM) is slightly better but still looks desperate. Best window: 8 AM - 6 PM on weekdays.'
        },
        {
          id: 15,
          question: 'Which email body is MOST effective for requesting an extension?',
          options: [
            '"I am so sorry, but I was really busy with other stuff and did not manage my time well. If possible, maybe you could consider giving me an extension? No pressure though!"',
            '"I am writing to request a 48-hour extension for the Cost Accounting assignment. I underestimated the complexity of the variance analysis section. I have completed 70% of the work and will submit high-quality analysis by Friday. Thank you for considering my request."',
            '"Hi, I need more time for the assignment because I have been stressed lately. Can I get an extension? Let me know ASAP. Thanks!"',
            '"I humbly request that you grant me the gracious favor of additional time to complete the assignment, as I have encountered unforeseen circumstances that have impeded my progress."'
          ],
          correct: 1,
          explanation: 'Option 2 uses the Reason-Request-Reassurance framework perfectly. Reason: "I underestimated the complexity" (accountability, not excuses). Request: "48-hour extension" (specific, not vague). Reassurance: "70% complete, high-quality by Friday" (shows commitment). Option 1 is weak ("maybe," "if possible," "no pressure" = uncertain). Option 3 is too casual ("Hi," "ASAP," vague reasons). Option 4 is overly formal and wordy ("humbly request," "gracious favor" = outdated). Clear + Accountable + Committed = 85% approval rate.'
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
      scenario: 'You are in a virtual interview for a Financial Analyst internship at Deloitte. You have prepared excellent answers about financial modeling, Excel skills, and your B.Com coursework. But 10 minutes in, the interviewer (Ms. Gupta) starts checking her phone, her smile fades, and she leans back in her chair. You finish explaining your Cost Accounting project, and she says: "Okay, thank you. We will be in touch." The call ends abruptly. You are confused - your answers were solid. What went wrong? Your NON-VERBAL communication sabotaged you. You slouched, avoided eye contact with the camera, fidgeted with your pen, and spoke in a monotone. Ms. Gupta interpreted this as: disinterest, lack of confidence, and poor communication skills. Your words said "I am qualified," but your body language screamed "I am unprepared."',
      problemExplanation: [
        '📹 Virtual Interview Blindness: You focused on your WORDS, ignoring that 93% of communication is non-verbal (38% tone, 55% body language - Mehrabian study). On video calls, your body language is MAGNIFIED. Slouching looks worse on camera. Poor eye contact (looking at screen, not camera) makes you seem evasive. You thought content mattered most - wrong. Delivery > Content in first impressions.',
        '🪑 Posture Disaster: You slouched in your chair, shoulders hunched, leaning to one side. Why this kills you: Slouching signals low energy, disinterest, and lack of confidence. Interviewers subconsciously think: "If they cannot sit up straight for a 30-minute interview, how will they handle client meetings?" Posture is your silent resume.',
        '👀 Eye Contact Failure: You looked at the interviewer on your screen (natural instinct), not at your webcam. Result: To Ms. Gupta, it looked like you were staring at her chin or avoiding eye contact. In Indian professional culture, eye contact = respect + confidence. Avoiding it = dishonesty or insecurity. You lost trust in the first 5 minutes.',
        '✋ Fidgeting Epidemic: You clicked your pen, touched your face, adjusted your hair 10+ times. Why this destroys credibility: Fidgeting signals nervousness, lack of preparation, and anxiety. Interviewers think: "They cannot control their nerves in an interview - how will they handle high-pressure client work?" Stillness = confidence.',
        '😐 Monotone + Blank Face: You spoke in a flat tone with minimal facial expressions (trying to sound "professional"). Result: You sounded robotic and disengaged. Humans connect through emotion. No vocal variety + no facial expression = "This person is boring and will not fit our team culture." Enthusiasm is contagious - so is apathy.',
        '🚫 Misreading Cues: Ms. Gupta leaned back (disengagement signal), checked her phone (boredom signal), and gave short responses (wrap-it-up signal). You missed ALL of these and kept talking. Why this matters: Non-verbal literacy is a professional skill. If you cannot read a room (or Zoom), you cannot adapt. Adaptability = employability.'
      ],
      solutionApproach: [
        '🎥 The Camera Eye Contact Trick: In virtual interviews, look at your WEBCAM (not the screen) when speaking. Place a sticky note with an arrow next to your camera as a reminder. When listening, you can look at the screen. This creates the illusion of direct eye contact. Practice this for 5 minutes daily - it feels unnatural at first but becomes automatic.',
        '🦸 Power Posing (Pre-Interview Ritual): 2 minutes before the interview, stand in a "power pose" (feet wide, hands on hips, chest out) in private. This increases testosterone (confidence) by 20% and decreases cortisol (stress) by 25% (Amy Cuddy, Harvard). Then, sit with: Back straight, shoulders back, feet flat on floor, hands visible on desk (not fidgeting). This posture signals: "I am confident and ready."',
        '🎭 The 3-Expression Rule: Your face should match your message. Talking about a challenging project? Slight furrow (seriousness). Discussing teamwork? Smile (warmth). Explaining technical skills? Neutral + focused (competence). Practice in a mirror: Say "I am excited about this opportunity" with a blank face, then with a genuine smile. Feel the difference? Interviewers do too.',
        '✋ Hand Gesture Formula: Keep hands at chest level (power zone), use purposeful gestures to emphasize points. "Three key skills" = hold up 3 fingers. "Growth from 60% to 85%" = upward hand motion. Avoid: Hands below desk (looks like you are hiding something), hands above head (aggressive), fidgeting (nervous). Still hands when not gesturing = composed.',
        '🎤 Vocal Variety Toolkit: Vary your pace (slow for important points, faster for examples), volume (slightly louder for emphasis), and pitch (downward inflection at end of sentences = confidence). Record yourself answering a question in monotone, then with variety. The second version is 3x more engaging. Enthusiasm is audible.',
        '👁️ The Cue-Reading Framework: Watch for: (1) Leaning forward = interested, keep going. (2) Leaning back = losing interest, wrap up soon. (3) Checking phone/watch = bored, change approach or ask a question. (4) Nodding = agreement, you are on the right track. (5) Furrowed brow = confusion, clarify your point. Adapt in real-time - this is advanced communication.'
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
          question: 'You are in a virtual interview for an accounting internship. Where should you look to create the best impression of eye contact?',
          options: [
            'At the interviewer on your screen (where their face appears)',
            'At your webcam (the camera lens) when speaking, at the screen when listening',
            'At your notes to show you are prepared',
            'Alternate between the ceiling and your keyboard'
          ],
          correct: 1,
          explanation: 'Option 2 is correct. When SPEAKING, look at your webcam (camera lens) - this creates the illusion of direct eye contact for the interviewer. When LISTENING, you can look at the screen naturally. Looking at the screen while speaking makes it appear to the interviewer that you are looking down or away, which signals evasiveness or lack of confidence. This is the #1 virtual interview mistake B.Com students make.'
        },
        {
          id: 17,
          question: 'During your Financial Management presentation, you notice the professor leaning back in their chair and checking their phone. What should you do?',
          options: [
            'Continue presenting for another 10 minutes as planned - they are probably just multitasking',
            'Stop immediately and ask: "Am I boring you?"',
            'Wrap up your current point quickly and ask: "Would you like me to clarify anything, or should I move to the summary?"',
            'Speak louder and faster to regain their attention'
          ],
          correct: 2,
          explanation: 'Option 3 is the professional response. Leaning back + checking phone = disengagement signals. Ignoring these (Option 1) wastes everyone is time. Calling them out (Option 2) is confrontational. Speaking louder/faster (Option 4) is annoying. The smart move: Acknowledge the signal by wrapping up and offering to clarify or summarize. This shows emotional intelligence - you can READ the room and ADAPT. Employers value this skill.'
        },
        {
          id: 18,
          question: 'You are explaining your B.Com project in an interview. Which hand gesture strategy is MOST effective?',
          options: [
            'Keep your hands completely still on your lap throughout the entire explanation',
            'Use purposeful gestures at chest level: "Three key findings" (hold up 3 fingers), "Revenue growth" (upward hand motion)',
            'Keep your hands in your pockets to look casual and relaxed',
            'Wave your hands constantly above your head to show enthusiasm'
          ],
          correct: 1,
          explanation: 'Option 2 is the winner. Purposeful gestures at CHEST LEVEL (the "power zone") amplify your message without distracting. Counting on fingers, showing growth with upward motion = visual + verbal = 2x retention. Option 1 (still hands) looks robotic. Option 3 (hands in pockets) signals you are hiding something or insecure. Option 4 (excessive gestures above head) is distracting and aggressive. Rule: Gestures should SUPPORT your words, not compete with them.'
        },
        {
          id: 19,
          question: 'Before your Big 4 firm interview, you have 2 minutes alone in the waiting room. What should you do to boost your confidence?',
          options: [
            'Sit quietly and review your notes one more time',
            'Stand in a "power pose" (feet wide, hands on hips, chest out) for 2 full minutes',
            'Scroll through Instagram to distract yourself from nerves',
            'Practice your answers by whispering to yourself'
          ],
          correct: 1,
          explanation: 'Option 2 is scientifically proven to work. Power posing for 2 minutes increases testosterone (confidence hormone) by 20% and decreases cortisol (stress hormone) by 25% (Amy Cuddy, Harvard). Your body language affects your BRAIN chemistry, which affects your PERFORMANCE. Option 1 (reviewing notes) adds stress. Option 3 (Instagram) distracts but does not build confidence. Option 4 (whispering) might look odd if someone walks in. Power pose in private = instant confidence boost.'
        },
        {
          id: 20,
          question: 'You say "I am very excited about this internship opportunity" but your face is blank and your tone is flat. What message does the interviewer receive?',
          options: [
            'You are excited (they believe your words)',
            'You are lying or not actually interested (they believe your body language and tone)',
            'You are professional and composed',
            'You are nervous but sincere'
          ],
          correct: 1,
          explanation: 'Option 2 is the reality. The 93% Rule: 7% words, 38% tone, 55% body language. When your WORDS say one thing but your BODY/TONE say another, people believe your body. Blank face + flat tone = "This person is lying or does not care." Your brain cannot fake enthusiasm - if you do not FEEL it, your body will not SHOW it. Solution: Before saying "I am excited," think of something that genuinely excites you (the learning opportunity, the company culture, the team). Your face will naturally light up, and your tone will match. Authenticity > Acting.'
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
      scenario: 'Your B.Com group project (30% of final grade) is due in 5 days. You have 4 team members: You, Priya (perfectionist, wants to redo everything), Arjun (procrastinator, has not done his part), and Neha (conflict-avoider, agrees with everyone). Yesterday, Priya and Arjun had a heated argument in the WhatsApp group. Priya: "Arjun, your section is garbage. I am redoing it." Arjun: "Maybe if you were not so controlling, I could actually contribute!" Now Arjun has left the group chat, Priya is furious and threatening to complain to the professor, and Neha is panicking. The project is falling apart. You need to resolve this conflict NOW, or everyone fails.',
      problemExplanation: [
        '🔥 Escalation Spiral: What started as a work-style difference (Priya is detail-oriented, Arjun is last-minute) exploded into personal attacks ("garbage," "controlling"). Why? No one addressed the REAL issue early (unclear roles + missed deadlines). Small conflicts ignored = big explosions later. Now emotions > logic.',
        '🗣️ Communication Breakdown: Priya gave harsh feedback publicly (WhatsApp group = humiliating). Arjun got defensive and attacked back. Neha stayed silent (conflict-avoidance = enabling dysfunction). Result: No one is listening, everyone is reacting. Conflict resolution Rule #1: Private feedback, public praise. They violated this.',
        '😤 Emotional Hijacking: Priya feels disrespected (her work is being ignored). Arjun feels attacked (his contribution was dismissed). Neha feels anxious (caught in the middle). When emotions are high, the prefrontal cortex (logic center) shuts down. They are in fight-or-flight mode, not problem-solving mode. You cannot reason with someone in emotional hijack.',
        '🎯 Unclear Roles + Accountability: Who is responsible for what? Who decides if work is "good enough"? No one defined this upfront. Result: Priya assumed she is the quality controller (she is not). Arjun thought "good enough" was acceptable (it was not). Ambiguity breeds conflict.',
        '⏰ Deadline Pressure: 5 days left = high stress. Stress amplifies conflict. People say things they do not mean. Priya is not usually cruel; Arjun is not usually defensive. But under pressure, worst behaviors emerge. Conflict resolution under time pressure requires de-escalation FIRST, problem-solving SECOND.',
        '🚫 No Conflict Resolution Process: When the argument started, no one said: "Let us pause, cool down, and discuss this calmly tomorrow." Instead, they kept fighting until Arjun rage-quit. Groups without a conflict resolution process implode under pressure. You need a system, not hope.'
      ],
      solutionApproach: [
        '🧊 De-Escalation First (Calm the Storm): Before solving the problem, lower the temperature. Step 1: Private messages to Arjun and Priya separately (not group chat). "Hey, I know yesterday was intense. Can we take 24 hours to cool down, then meet to fix this? I value both of you and want us to succeed together." This acknowledges emotions, buys time, and shows you care. Avoid: "You both need to calm down" (dismissive). Do: "This is stressful for everyone. Let us reset."',
        '👂 Active Listening (Understand, Do Not Judge): Meet with Arjun and Priya separately first (not together - that will reignite the fight). Ask: "What is frustrating you most about this project?" Listen 80%, talk 20%. Paraphrase: "So you feel your work was dismissed without fair feedback?" (Arjun) or "You feel the quality standards are not being met?" (Priya). This validates their feelings without taking sides. People calm down when they feel HEARD.',
        '🔍 Identify the REAL Problem (Not the Surface Issue): The fight is not about "garbage work" or "controlling behavior." The REAL issues: (1) No clear quality standards agreed upon upfront, (2) No accountability for deadlines, (3) No process for giving feedback constructively. Address these root causes, not the symptoms. Ask: "What would success look like for you?" Find common ground: Both want a good grade.',
        '🤝 Find Win-Win Solutions (Not Compromise = Everyone Loses): Compromise: "Priya, lower your standards. Arjun, work harder." Result: Both unhappy. Win-Win: "Let us define quality standards together (3 criteria), set mini-deadlines (check-ins every 2 days), and use a feedback template (2 strengths + 1 improvement)." This gives Priya structure and Arjun clarity. Both win.',
        '📋 Create a Conflict Resolution Agreement: Before ending the meeting, establish rules: (1) Feedback is private, not in group chat. (2) If someone is upset, we take a 24-hour cooling-off period. (3) Decisions are made by majority vote, not one person. (4) We assume positive intent (no one is trying to sabotage). Write this down. When the next conflict arises (it will), you have a process.',
        '🔄 Follow-Up + Accountability: After resolving the conflict, check in daily: "How is everyone feeling? Any issues?" Do NOT assume "fixed = forever." Conflicts resurface under stress. Proactive check-ins prevent re-escalation. Also: Celebrate small wins. "Great job on yesterday is section, Arjun!" Positive reinforcement rebuilds trust.'
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
