// Module 5: Design Thinking - Creativity to Solve Problems

export interface SubtopicData {
  id: string; title: string; emoji: string; context: 'academic' | 'professional' | 'personal';
  discover: { scenario: string; problemExplanation: string[]; solutionApproach: string[]; };
  video: { title: string; duration: number; script?: string; content: string[]; };
  quiz: { title: string; questions: { id: number; question: string; options: string[]; correct: number; explanation?: string; }[]; };
  challenge: { title: string; description: string; contexts: {
    academic: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
    professional: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
    personal: { title: string; description: string; instructions: string[]; successCriteria: string[]; };
  }; };
  feedback: { strengths: string[]; improvements: string[]; nextSteps: string[]; };
  badge: { name: string; emoji: string; description: string; };
  shareMessage: string;
}

export interface AssessmentData {
  id: string; title: string; description: string;
  questions: { id: number; question: string; options: string[]; correct: number; explanation?: string; }[];
  gradingScale: {
    excellent: { min: number; max: number; message: string; xpReward: number };
    good: { min: number; max: number; message: string; xpReward: number };
    satisfactory: { min: number; max: number; message: string; xpReward: number };
    needsImprovement: { min: number; max: number; message: string; xpReward: number };
  };
}

export const module5Data: SubtopicData[] = [
  {
    id: 'empathy',
    title: 'Empathy',
    emoji: '❤️',
    context: 'personal' as const,
    discover: {
      scenario: "Built budgeting app. 20 categories, investment, tax. 3 months. Launch: 5 downloads, 0 users. Students: 'Too complex! We have 3 expenses: food, transport, fun. Just want split bills!' Competitor 'Split It' = 5000 users.",
      problemExplanation: [
        "Assume you know: 'I know what students want.' Built 20 categories. They want 3. Wasted 3 months",
        "Skip research: 'I'm student, I know.' Projection. Built tax (no one asked), missed bill splitting",
        "Don't listen: 'Too complicated.' You hear 'Add tutorial.' They mean 'Need 3 not 20'",
        "Miss emotional pain: Focused features. Missed feelings: 'Awkward asking ₹200. Stressed affording weekend'"
      ],
      solutionApproach: [
        "Active listening: 'Too complicated.' Ask 'What specifically? Where stuck?' Listen words + gaps + emotion",
        "User interviews: Talk 20-30 BEFORE building. 'Last time struggled money?' Find patterns",
        "Empathy maps: THINK, FEEL, SAY, DO. Design for DO (split on WhatsApp), not SAY",
        "Iterate empathy: Add expense → who paid → auto-calculate → WhatsApp. ONE pain. 5000 users"
      ]
    },
    video: {
      title: 'Build Products Users Actually Want: Empathy for B.Com Entrepreneurs',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR PRODUCT FAILED

"You spent 3 months building a budgeting app for B.Com students. 20 categories, investment tracking, tax planning. Launch: 5 downloads, 0 active users. You are confused: 'I built everything students need!' Reality: You built what YOU thought they need, not what they ACTUALLY need. Meanwhile, 'Split It' (simple bill-splitting app) has 5000 users. Why? Empathy. They interviewed 50 students, understood the real pain (bill-splitting awkwardness), built a simple solution. You assumed. They empathized. By the end of this video, you will learn empathy - the foundation of successful products. Let us fix this."

[0:45-2:15] WHAT IS EMPATHY (Understanding vs Assuming)

"Empathy ≠ Sympathy. Sympathy = 'I feel bad for you.' Empathy = 'I deeply understand your problem, emotions, and context.'

EXAMPLE: Student says 'Budgeting is hard.'

SYMPATHY: 'Oh, that is tough. Here is a budgeting app.' (You do not understand WHY it is hard.)

EMPATHY: 'Tell me more. What specifically is hard? When do you struggle most?' → Student reveals: 'I forget to log expenses. Too many steps. I just want to know: Can I afford weekend plans?' → NOW you understand the real problem (friction, not lack of features).

Empathy has 3 levels:

LEVEL 1: What they SAY
'Budgeting is important. I should track expenses.'
(This is what they tell you in interviews. Polite, generic.)

LEVEL 2: What they DO
They forget to log expenses. They check balance once a week. They split bills on WhatsApp.
(This is reality. Behavior > intentions.)

LEVEL 3: What they FEEL
'I feel awkward asking roommates for money. I feel stressed not knowing if I can afford things. I feel overwhelmed by complex apps.'
(This is the emotional pain point. The real opportunity.)

Design for Level 3 (feelings), informed by Level 2 (behavior), not Level 1 (what they say)."

[2:15-3:45] THE EMPATHY MAP (Think, Feel, Say, Do)

"After interviewing 20 students, create an Empathy Map. Four quadrants:

QUADRANT 1: THINK (What is going through their mind?)
- 'I need to save money for semester fees.'
- 'I do not understand investments.'
- 'I feel bad asking for money owed.'
- 'Budgeting apps are too complicated.'

QUADRANT 2: FEEL (What emotions do they experience?)
- Stressed about overspending
- Awkward about bill splitting
- Overwhelmed by finance jargon
- Guilty when borrowing money
- Anxious about running out of money

QUADRANT 3: SAY (What do they tell you in interviews?)
- 'Budgeting is important.'
- 'I should track my expenses.'
- 'Investment tracking sounds useful.'
(Notice: This is aspirational, not actual behavior.)

QUADRANT 4: DO (What do they actually do?)
- Forget to log expenses (too much friction)
- Split bills on WhatsApp (messy, error-prone)
- Check balance once a week (not daily)
- Avoid asking for money owed (awkward)
- Use mental math for budgeting (no app)

INSIGHT: SAY ≠ DO. They SAY 'budgeting is important' but DO 'forget to log expenses.' Design for DO (behavior), not SAY (intentions).

EMOTIONAL INSIGHT: They FEEL 'awkward about bill splitting.' This is your opportunity. Build a solution that removes awkwardness (auto-calculate, send reminders). That is empathy-driven design."

[3:45-5:15] ACTIVE LISTENING (Understand, Not Respond)

"Most people listen to RESPOND (defend, explain, solve). Empathy requires listening to UNDERSTAND.

BAD LISTENING (Respond):
Student: 'Your app is too complicated.'
You: 'But I added a tutorial! Did you watch it?' (Defensive. You are not listening.)

GOOD LISTENING (Understand):
Student: 'Your app is too complicated.'
You: 'I hear you. Can you show me where you got stuck? What would simple look like to you?' (Curious. You want to understand.)

Student shows: 'I opened the app. Saw 20 categories. Felt overwhelmed. Closed it.'
You: 'So the 20 categories felt like too much. What if there were just 3 categories: Food, Transport, Fun?'
Student: 'Yes! That is all I need.'

INSIGHT: The problem was not lack of tutorial. It was too many categories. You only learned this by listening to UNDERSTAND, not to RESPOND.

ACTIVE LISTENING TECHNIQUES:
1. Ask open-ended questions: 'Tell me about the last time you struggled with money management.' (Not: 'Do you like budgeting?' Yes/no = shallow.)
2. Follow up: 'You mentioned feeling awkward. Tell me more about that.' (Dig deeper into emotions.)
3. Repeat back: 'I hear you saying you want simplicity, not complexity. Is that right?' (Confirm understanding.)
4. Observe body language: Student says 'It is fine' but looks frustrated. Ask: 'You seem hesitant. What is on your mind?' (Words ≠ feelings.)
5. Take notes: Write down exact quotes. 'I feel awkward asking for money.' This is gold. Use their words in your design."

[5:15-6:45] OBSERVATION IN CONTEXT (Watch What They Do)

"Interviews tell you what people SAY. Observation shows what people DO.

INTERVIEW (Classroom):
You: 'How do you currently split bills?'
Student: 'We use an app.' (Polite, vague.)

OBSERVATION (Hostel Room):
You watch 3 roommates split grocery bill (₹500).
- Priya paid. She opens WhatsApp: 'Hey guys, groceries were ₹500. You each owe ₹167.'
- Rahul: 'Oh, I will pay you tomorrow.' (Forgets.)
- Anjali: 'Wait, I was not there for the milk. Should I pay full share?' (Confusion.)
- 10 messages later, still not resolved. Priya feels awkward following up.

INSIGHT: They do NOT use an app. They use WhatsApp (messy, error-prone, awkward). This is your opportunity. Build an app that integrates with WhatsApp, auto-calculates, sends reminders.

OBSERVATION REVEALS:
- Pain points: Manual calculation, forgotten payments, awkward reminders
- Context: They are in hostel, splitting bills daily (rent, food, utilities)
- Behavior: They want quick (30 seconds), not detailed (10 minutes)
- Emotion: Awkwardness is the real pain, not lack of features

Spend a day with 5 students. Watch: How do they manage money? When do they think about it? What stops them? Observation > interviews."

[6:45-7:45] SUSPEND JUDGMENT (Understand, Not Judge)

"Empathy requires suspending YOUR values and understanding THEIR reality.

JUDGMENT:
Student: 'I do not budget. I just wing it.'
You think: 'That is irresponsible. They need to learn discipline.' (Judgment blocks empathy.)

EMPATHY:
Student: 'I do not budget. I just wing it.'
You ask: 'Tell me more. Why do you wing it?' (Curiosity, not judgment.)
Student: 'Budgeting feels like homework. I have exams, assignments, internships. I do not have time to categorize every expense. I just check my balance before weekend plans.'

INSIGHT: They do not lack discipline. They lack TIME and MOTIVATION. Your complex app (20 categories, 10 minutes/day) does not fit their reality. They need a simple app (3 categories, 30 seconds/day).

SUSPEND YOUR BIAS:
- You love detailed financial tracking. They see it as a chore.
- You think investment planning is exciting. They think it is irrelevant (₹500 in account, not ₹5 lakhs).
- You value complexity. They value simplicity.

Empathy = understanding THEIR perspective, even when it differs from YOURS. This understanding reveals: Build for THEIR reality, not YOUR preferences."

[7:45-8:00] YOUR CHALLENGE (Interview 10 Users)

"Here is your action step: Pick a problem you want to solve (for B.Com students, your college, your community). Before building ANYTHING:

1. Interview 10 people (20-30 minutes each)
2. Ask open-ended questions: 'Tell me about the last time you faced this problem.'
3. Listen to UNDERSTAND (not respond, not defend)
4. Create Empathy Map: What do they think, feel, say, do?
5. Observe 3 people in natural context (how do they currently solve this?)
6. Identify: What they SAY vs what they DO vs what they FEEL

Result: You will discover the REAL problem (not what you assumed). Build a solution for THAT. Empathy = product-market fit.

Stop assuming. Start empathizing. Build products users actually want."

[End Screen: "Next Video: Ideation - Generate 100 Ideas in 1 Hour"]`,
      content: [
        'Empathy = deeply understanding user needs, emotions, and context (not sympathy)',
        'Empathy Map: What users Think, Feel, Say, Do (SAY ≠ DO, design for behavior)',
        'Active Listening: Listen to UNDERSTAND, not to RESPOND (ask open-ended questions, follow up, repeat back)',
        'Observation in Context: Watch what users DO in natural environment (reveals truth interviews miss)',
        'Suspend Judgment: Understand THEIR reality, not impose YOUR values (curiosity, not criticism)',
        'Interview 10 users BEFORE building anything (discover real problems, not assumptions)',
        'B.Com Applications: Product design, service improvement, understanding customer needs'
      ]
    },
    quiz: {
      title: 'Empathy Quiz',
      questions: [
        {
          id: 1,
          question: 'Building budgeting app for B.Com students. Assume they need 20 expense categories, investment tracking, tax planning. Launch: 5 downloads, 0 users. What went wrong?',
          options: [
            'Needed better marketing',
            'Lacked empathy - built what YOU thought they need, not what they ACTUALLY need (simple bill splitting, "Can I afford weekend plans?")',
            'Students do not care about budgeting',
            'App needed more features'
          ],
          correct: 1,
          explanation: 'Lacked empathy = ability to deeply understand user needs, emotions, context. Assumed students need complex financial tracking because YOU interested in finance. Reality: Most want simplicity (3 categories: food, transport, fun), not complexity (20 categories). They struggle with bill splitting (emotional pain: awkwardness), not investment tracking (irrelevant: have ₹500, not ₹5L). Empathy requires: Interview 20-30 users BEFORE building. Ask "Biggest money struggle?" Observe behavior. Build for THEIR reality, not YOUR assumptions.'
        },
        {
          id: 2,
          question: 'After interviewing 20 B.Com students about budgeting, create Empathy Map. Notice: They SAY "Budgeting is important" but DO "Forget to log expenses." What should design for?',
          options: [
            'What they SAY - build detailed budgeting features',
            'What they DO - design for actual behavior (make logging effortless: 30 seconds, 3 categories, auto-reminders)',
            'What they THINK - focus on their aspirations',
            'Ignore the contradiction'
          ],
          correct: 1,
          explanation: 'Design for what users DO (behavior), not what they SAY (intentions). Students SAY "budgeting important" (aspirational, polite answer). But DO "forget to log expenses" (actual behavior: too much friction, not motivated). Design for SAY = build complex features nobody uses. Design for DO = remove friction: 3 categories (not 20), 30-second logging (not 10 minutes), auto-reminders. Behavior > intentions. Observe what users actually do, not what they say they will do.'
        },
        {
          id: 3,
          question: 'Student tells you: "Your budgeting app is too complicated." You respond: "But I added a tutorial! Did you watch it?" What is wrong with this response?',
          options: [
            'Nothing - you are helping them understand app',
            'Listening to RESPOND (defend your design) instead of listening to UNDERSTAND (learn real problem: too many categories, not lack of tutorial)',
            'Should have added more tutorials',
            'Being too polite'
          ],
          correct: 1,
          explanation: 'Listening to RESPOND (defensive, justify design) instead of listening to UNDERSTAND (curious, learn real problem). Active listening: (1) Ask "Show me where you got stuck?" (2) Observe them using app, (3) Ask "What would simple look like?" They show: "Saw 20 categories, felt overwhelmed, closed app." Problem NOT lack of tutorial. It\'s too many categories. Solution: Reduce to 3. Suspend ego, stop defending, start learning. User feedback = gold, not criticism.'
        },
        {
          id: 4,
          question: 'Interview students in classroom. They say "We use an app for bill splitting." Observe them in hostel. Reality: They split bills on WhatsApp (messy, 10 messages, forgotten payments). Why is observation important?',
          options: [
            'Observation not important - interviews are enough',
            'Observation reveals what users actually DO (WhatsApp, manual calculation, awkwardness) vs what they SAY (we use app). Design for reality, not polite answers.',
            'Observation wastes time',
            'Students are lying in interviews'
          ],
          correct: 1,
          explanation: 'Observation = reveals BEHAVIOR (what users actually do) vs interviews = INTENTIONS (what users say). In classroom (formal), students give polite answers: "We use app." In hostel (natural), observe reality: Use WhatsApp (messy, error-prone), manually calculate splits, forget to pay, feel awkward following up. Reveals REAL pain point: Awkwardness + manual calculation. Solution: Build app that auto-calculates, sends reminders, integrates with WhatsApp. Observation > interviews.'
        },
        {
          id: 5,
          question: 'Student says: "I do not budget, I just wing it." Your first thought: "That is irresponsible." What should do instead to practice empathy?',
          options: [
            'Judge them and tell them to be more responsible',
            'Suspend judgment and ask: "Tell me more. Why do you wing it?" Understand THEIR reality (budgeting feels like homework, no time, just check balance before weekend plans)',
            'Agree with them that budgeting is useless',
            'Ignore their opinion'
          ],
          correct: 1,
          explanation: 'Suspend judgment = set aside YOUR values (budgeting good!) to understand THEIR reality (budgeting boring, have exams/assignments/internships, no time for 10 minutes/day categorizing). Ask: "Why wing it?" They reveal: "Just check balance before weekend plans. That\'s all I need." Insight: Don\'t lack discipline. Lack time and motivation. Your complex app doesn\'t fit their reality. Need simple app (3 categories, 30 seconds/day, "Can I afford weekend plans?" indicator). Curiosity > judgment. Build for THEIR reality, not YOUR ideals.'
        }
      ]
    },
    challenge: {
      title: 'Empathy Challenge',
      description: 'Develop deep user understanding',
      contexts: {
        academic: {
          title: 'Build Empathy Tutoring Win',
          description: 'Accounting struggles. Before building tutoring, understand EXACTLY what/why/emotions. Interview 10, empathy maps, observe. Result: 50 students, 80% grades↑ "Finally understands us!"',
          instructions: [
            '• Interview 10 students: "Last struggle?" "Most frustrating?" Listen, not respond',
            '• Empathy Map: THINK/FEEL/SAY/DO—find SAY≠DO gap, design for behavior',
            '• Observe 3 students study: Watch when stuck, emotions, real behavior',
            '• Identify emotional pain: fear, embarrassment, stress—design for emotions too',
            '• Launch tutoring: Small groups, application-focused, ₹500/mo—50 students, 80% grades↑',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "I know needs"—you\'re outlier, interview 10 students',
            '• Leading questions—get polite lies, ask open-ended',
            '• Classroom formal—polite answers, interview casual settings',
            '• Skip emotions—ask "How FEEL?" not just "What need?"',
            '• Build without validate—test with 5 first'
          ],
          successCriteria: [
            '✅ 10 students interviewed, pain points documented',
            '✅ Empathy Map created, SAY≠DO gap found',
            '✅ 3 students observed, behavior patterns seen',
            '✅ Emotional needs identified, designed for',
            '✅ 50 students enrolled, 80% grades improved'
          ]
        },
        professional: {
          title: 'Build AI Course Recs Win',
          description: 'PM, ed-tech. CEO: "AI course recommendations!" Before building, empathy: What courses need? Why? What stops? Research deeply. Result: 500 users, 300 enrollments, NPS 8.5, CEO praises!',
          instructions: [
            '• Interview 20 students: Course search struggles, frustrations, what tried',
            '• Empathy Map: THINK/FEEL/SAY/DO—they trust peers NOT AI',
            '• Shadow 5 students: Watch search behavior, want previews',
            '• Jobs-to-be-Done: Get skills, avoid waste, feel confident',
            '• Launch: Peer reviews + previews + outcomes—500 users, NPS 8.5',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Build AI!"—validate want AI or peers first',
            '• Interview 3—need 20+ for patterns',
            '• Leading questions—ask how they currently search',
            '• Ignore emotional jobs—address all 3 types',
            '• Skip validation—test before building'
          ],
          successCriteria: [
            '✅ 20 students interviewed, patterns found',
            '✅ Map shows trust peers > AI',
            '✅ 5 students shadowed, previews needed',
            '✅ All 3 jobs addressed in design',
            '✅ 500 users, 300 enrollments, NPS 8.5'
          ]
        },
        personal: {
          title: 'Fix Roommate Empathy Win',
          description: 'Roommate messy, frustrated, want move out. Before deciding, empathy: THEIR perspective? Why? Needs? Listen, suspend judgment, understand. Result: Hire cleaner ₹250 each, relationship fixed!',
          instructions: [
            '• Listen without complaining: Ask "Why hard to clean?" Understand their view',
            '• Understand context: 6 courses + 20hr job + family stress = overwhelmed',
            '• Empathy Map: THINK/FEEL/SAY/DO—overwhelmed, NOT inconsiderate',
            '• Suspend judgment: Shift anger→compassion, stressed NOT bad person',
            '• Co-create solution: Hire cleaner ₹250 each—relationship fixed!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Judge without asking WHY—anger builds',
            '• "But I\'m busy too!"—defensive, not empathetic',
            '• Impose "MUST clean"—feels controlled, worsens',
            '• One talk, assume solved—monitor, adjust',
            '• Take personally—it\'s their stress, not disrespect'
          ],
          successCriteria: [
            '✅ Active listening practiced, judgment suspended',
            '✅ Context understood: overwhelmed, not inconsiderate',
            '✅ Empathy Map created, anger→compassion',
            '✅ Solution co-created: cleaner ₹250 each',
            '✅ Relationship fixed, empathy > judgment'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '👂 Active Listening Mastery: You listen to UNDERSTAND, not to RESPOND. When users say "Your app is too complicated," you ask "Can you show me where you got stuck?" instead of defending ("But I added a tutorial!"). This curiosity reveals the real problem (too many categories, not lack of tutorial). You take notes, repeat back to confirm understanding, and follow up on emotional cues. Result: You discover insights others miss.',
        '🗺️ Empathy Map Discipline: You create detailed Empathy Maps (Think, Feel, Say, Do) after interviews. You identify the gap: What users SAY ("budgeting is important") ≠ What they DO ("forget to log expenses"). This insight drives your design: You build for behavior (make logging effortless: 30 seconds, 3 categories, auto-reminders), not intentions (complex features they say they want but never use). Designing for DO > designing for SAY.',
        '👀 Observation Skills: You observe users in their natural context (hostel, library, cafe), not just formal interviews (classroom). You watch: How do they currently solve the problem? (Split bills on WhatsApp, not apps.) When do they get stuck? (Manual calculation, forgotten payments.) What emotions do you see? (Awkwardness, frustration.) Observation reveals truths interviews miss. You design for reality, not polite answers.',
        '🧘 Suspend Judgment: You set aside YOUR values and biases to understand THEIR reality. When a student says "I do not budget, I just wing it," you do not judge ("That is irresponsible"). You ask "Why do you wing it?" and learn: They lack time and motivation, not discipline. This understanding shifts your design: Simple app (3 categories, 30 seconds) instead of complex app (20 categories, 10 minutes). Empathy requires understanding, not agreement.',
        '💡 Design for Emotional Pain Points: You identify not just functional needs (track expenses) but emotional pain points (awkwardness asking for money, stress about overspending, overwhelm from complex apps). You design solutions that address emotions: Bill-splitting app removes awkwardness (auto-calculate, send reminders). Simple dashboard reduces overwhelm (3 categories, not 20). Emotional design = user love.'
      ],
      improvements: [
        '📊 Increase Interview Sample Size: You interview 10 users (good start), but for complex problems, interview 20-30 users to identify patterns. 10 users might include outliers. 20-30 users reveal consistent patterns: "80% of students struggle with bill splitting, 60% want simplicity over features, 50% trust peer reviews over AI." Larger sample = more confident insights. For your next project, aim for 20-30 interviews.',
        '🎯 Dig Deeper on Emotions: You identify emotions (stressed, awkward, overwhelmed), but you do not always explore WHY they feel this way. Example: Student says "I feel awkward asking for money." Ask: "Tell me more about that awkwardness. When did you first feel this? What would make it less awkward?" Digging deeper reveals: "I feel like I am nagging. I worry they think I am cheap. I do not want to damage the friendship." This depth informs design: App should feel like a neutral third party (not you nagging), use friendly tone ("Friendly reminder: Rahul, you owe ₹167 for groceries 😊"), emphasize fairness ("Everyone pays their share").',
        '🔄 Observe Longer: You observe users for 1-2 hours (snapshot). But behavior changes over time. Example: Day 1 observation: Student logs expenses diligently. Week 2 observation: Student forgot to log for 5 days. This reveals: Initial motivation fades. Design must account for this: Auto-reminders, reduce friction (1-tap logging), gamification (streak tracking). Improve: Observe users over 1-2 weeks to see behavior patterns, not just snapshots.',
        '🧪 Test Empathy Map Assumptions: You create Empathy Map based on interviews (THINK, FEEL, SAY, DO). But you do not always validate it. Example: You assume "They FEEL overwhelmed by 20 categories." Test: Show 5 users a prototype with 20 categories. Watch their reaction. Do they actually look overwhelmed? Or is it something else? Testing validates your empathy insights. Improve: After creating Empathy Map, test 2-3 key assumptions with users.',
        '📈 Quantify Emotional Impact: You identify emotional pain ("awkwardness asking for money"), but you do not quantify it. How much does this awkwardness cost? Example: Survey 50 students: "How much money are you owed that you have not asked for because it feels awkward?" Average: ₹800/student. Total: ₹40,000 across 50 students. Now you can say: "Awkwardness costs students ₹40K collectively. Our app solves a ₹40K problem." Quantifying emotional pain helps prioritize and pitch solutions.'
      ],
      nextSteps: [
        '📚 Study Empathy Frameworks: Read "The Mom Test" by Rob Fitzpatrick (how to ask questions users cannot lie to), "Interviewing Users" by Steve Portigal (user research techniques), "Empathy Maps" by Dave Gray (XPLANE). Apply frameworks: How do you ask questions that reveal truth, not polite answers? How do you identify Jobs-to-be-Done? How do you observe without biasing behavior? Advanced empathy techniques = deeper insights.',
        '🧠 Build a User Research Library: Create a document: "User Research Insights by Project." For each project (budgeting app, tutoring service, course recommendations), document: (1) Key insights from interviews, (2) Empathy Map (Think, Feel, Say, Do), (3) Emotional pain points, (4) What worked in design, (5) What you missed. Over 10 projects, you will see patterns: "Users always want simplicity over features. I should default to minimal design." This library accelerates future empathy work.',
        '🎯 Practice Empathy Daily: Make empathy a daily habit, not just for work projects. Practice: (1) When a friend complains, listen to UNDERSTAND (not to solve). Ask "Tell me more. How does that make you feel?" (2) When you disagree with someone, suspend judgment. Ask "Why do they believe this? What is their context?" (3) Observe people in cafes, buses, campus. What problems do you see? What emotions? Daily practice builds empathy muscle. After 3 months, empathy becomes second nature.',
        '👥 Teach Empathy to 3 People: The best way to master empathy is to teach it. Walk 3 friends through empathy techniques for their projects. Teach: (1) Active listening (ask open-ended questions, repeat back, follow up), (2) Empathy Maps (Think, Feel, Say, Do), (3) Observation in context (watch behavior, not just interviews), (4) Suspend judgment (understand, not judge), (5) Design for emotions (not just functions). When you teach, you discover gaps in your own understanding. You also build a network of empathetic designers.',
        '📊 Conduct Empathy Audits: For your existing projects (apps, services, products), conduct "Empathy Audits." Ask: (1) Did I interview users before building? (If no, do it now. You might discover you built the wrong thing.) (2) Do I have an Empathy Map? (If no, create one based on user feedback.) (3) Am I designing for what users SAY or what they DO? (If SAY, redesign for DO.) (4) Am I addressing emotional pain points? (If no, identify and address them.) Auditing existing work reveals: Where did I lack empathy? How can I improve? This continuous improvement builds empathy mastery.'
      ]
    },
    badge: { name: 'Empathy Expert', emoji: '❤️', description: 'Master of understanding others' },
    shareMessage: 'Just developed deep empathy skills! ❤️ #DesignThinking #Empathy'
  },
  {
    id: 'ideation',
    title: 'Ideation',
    emoji: '💭',
    context: 'professional' as const,
    discover: {
      scenario: "Fest needs ₹2L. 10min brainstorm. 1 idea: 'Sponsorships.' Result: ₹30K. ₹1.7L short. Rival: 2hr session, 87 ideas, raised ₹3L.",
      problemExplanation: [
        "Settle for first: 10 mins, 'sponsorships,' stopped. 'Good enough' = enemy 'great.' No Plan B",
        "Judge early: 'Sell textbooks.' 'Stupid!' Criticism killed creativity",
        "One technique: Random brainstorm = 1 idea. Rival: 5 techniques = 87 ideas",
        "Don't build: 'Food stalls.' 'Stupid.' Should: 'Yes AND partner restaurants? AND ₹50 entry?'"
      ],
      solutionApproach: [
        "Defer judgment: '60 mins, NO criticism.' Safety. Share 10 ideas in 5 mins",
        "Quantity = quality: 50 ideas/60 mins. Ideas 1-10 obvious, 31-50 wild → gold",
        "SCAMPER: Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse",
        "Diverge → Converge: Generate 50+ (60 mins) → Plot matrix (30 mins) → Execute top 5"
      ]
    },
    video: {
      title: 'Generate 100 Ideas in 1 Hour: Ideation for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ONLY HAVE 1 IDEA

"Your college fest needs ₹2 lakhs. Your team brainstorms for 10 minutes. First idea: 'Get sponsorships.' Everyone agrees. Meeting ends. You have 1 idea. Fast forward: Sponsorships raised ₹30K. You are ₹1.7L short. Fest is in 3 weeks. Panic. Meanwhile, rival college raised ₹3 lakhs. How? They generated 87 ideas in 2 hours, selected top 10, executed 5. You had 1 idea. They had 87. The difference? Ideation techniques. By the end of this video, you will learn how to generate 100 ideas in 1 hour. Let us unlock your creativity."

[0:45-2:15] DEFER JUDGMENT (Diverge First, Converge Later)

"Your team made a fatal mistake: Judging ideas WHILE generating them.

Priya: 'What if we sell old textbooks?'
Rahul: 'That is stupid. Students will not donate.'
Priya: (stops sharing ideas)

Result: 1 idea in 10 minutes.

Ideation has 2 phases:

PHASE 1: DIVERGE (Generate without judgment)
Rule: For 60 minutes, NO criticism. No 'but,' no 'that will not work,' no 'stupid.'
Just: 'Interesting! What else?'

Priya shares: Sell textbooks, crowdfunding, alumni donations, food stalls, workshops, merchandise, talent show, partnerships, online fundraiser, skill services.
Result: 10 ideas in 5 minutes (vs 1 idea in 10 minutes with criticism).

PHASE 2: CONVERGE (Evaluate and select)
After 60 minutes, NOW you evaluate. 'Sell textbooks: Feasible? Impact? Effort?'
Select top 10 ideas. Execute top 5.

WHY THIS WORKS:
- Criticism kills creativity (people stop sharing)
- Wild ideas spark innovation (sell textbooks → rent textbooks → textbook exchange platform)
- You need quantity (50 ideas) to find quality (top 5)

Defer judgment = idea explosion. Judge while generating = idea drought."

[2:15-3:45] QUANTITY BREEDS QUALITY (Push Past Obvious)

"Set a target: Generate 50 ideas in 60 minutes.

IDEAS 1-10 (Obvious):
Sponsorships, donations, fundraisers, bake sale, car wash, crowdfunding, alumni donations, ticket sales, merchandise, food stalls.
(Everyone thinks of these. Boring. Low differentiation.)

IDEAS 11-30 (Interesting):
Food FESTIVAL (₹50 entry, 10 vendors, ₹1L revenue), paid workshops (Excel, public speaking, ₹200/person), talent show (₹100 entry fee), corporate job fair (companies pay ₹50K to recruit), Shark Tank competition (sponsors fund prize money), sell fest sponsorship packages (₹10K, ₹25K, ₹50K tiers), online fundraiser with rewards (₹500 = fest T-shirt, ₹1000 = VIP pass).
(More creative. Higher revenue potential.)

IDEAS 31-50 (Wild):
Rent out college spaces (auditorium for weddings: ₹50K/day), sell exam notes (₹100/subject), dating app for students (monetize with ads), host hackathon (₹500 entry, 100 participants = ₹50K), sell student services (resume writing, interview prep, ₹500/person), create fest NFTs (digital collectibles), live-stream fest (₹50 virtual tickets, 1000 viewers = ₹50K), sell fest naming rights (₹1L for 'XYZ Company Fest').
(Wild. But some are GOLD. Example: Hackathon raised ₹50K + attracted tech sponsors.)

You only reach IDEAS 31-50 (gold) if you push through IDEAS 1-30. Quantity breeds quality."

[3:45-5:15] SCAMPER TECHNIQUE (7 Prompts, 7× Ideas)

"Stuck on ideas? Use SCAMPER - 7 prompts that force creative thinking.

PROBLEM: Raise ₹2 lakhs for college fest.

S - SUBSTITUTE: Instead of X, use Y.
'Instead of sponsorships from local businesses, what if we get sponsorships from ALUMNI?'
(Alumni have emotional connection to college. Might donate ₹50K each.)

C - COMBINE: Merge X with Y.
'What if we combine fest with a JOB FAIR?'
(Companies pay ₹50K to set up recruitment booths. Students get jobs. Win-win.)

A - ADAPT: Adjust X for new context.
'What if we adapt Shark Tank format for our fest?'
(Students pitch business ideas. Sponsors fund prize money. Attracts corporate sponsors.)

M - MODIFY: Change attributes of X.
'What if we modify food stalls to food FESTIVAL?'
(Charge ₹50 entry fee. 10 vendors. 2000 students. Revenue: ₹1L.)

P - PUT TO OTHER USES: Repurpose X.
'What if we use our college auditorium for paid workshops?'
(Excel workshop: ₹200/person, 100 attendees = ₹20K. 10 workshops = ₹2L.)

E - ELIMINATE: Remove X.
'What if we eliminate expensive performer (₹2L) and use student talent?'
(Save ₹2L. Use saved money for better production quality.)

R - REVERSE: Flip X.
'What if instead of us PAYING for fest, we make it PROFITABLE?'
(Charge entry (₹100), sell merchandise (₹50K), sponsors pay for booths (₹1L). Revenue > costs.)

SCAMPER generates 7 ideas per problem. Apply to 5 fundraising methods = 35 ideas. This is systematic creativity."

[5:15-6:30] YES, AND (Build on Ideas, Not Kill Them)

"When someone shares an idea, you have 2 choices:

CHOICE 1: 'Yes, BUT' (Criticism)
Priya: 'Food stalls.'
Rahul: 'Yes, BUT food stalls only raise ₹20K. We need ₹2L.'
(Idea is killed. Priya stops sharing.)

CHOICE 2: 'Yes, AND' (Building)
Priya: 'Food stalls.'
Rahul: 'Yes, AND what if we partner with 10 local restaurants?'
Anjali: 'Yes, AND what if we do a food FESTIVAL with ₹50 entry fee?'
Karan: 'Yes, AND what if we sell fest merchandise at the food festival?'
You: 'Yes, AND what if we live-stream the food festival (₹50 virtual tickets)?'

One idea (food stalls, ₹20K) → 5 ideas (food festival + entry fee + merchandise + live-stream = ₹1.5L).

'Yes, AND' multiplies ideas. 'Yes, BUT' kills ideas.

In your next brainstorm, ban 'but.' Only allow 'and.' Watch ideas explode."

[6:30-7:30] ROLE STORMING (Think Like Others)

"Stuck? Pretend you are someone else.

PROMPT: 'How would ELON MUSK raise ₹2 lakhs for a college fest?'
Ideas: Viral crowdfunding campaign (tweet reaches 1M people), sell fest as NFT (digital collectibles), partner with Tesla (EV showcase at fest, they sponsor ₹1L), live-stream fest to 10K viewers (₹50/ticket = ₹5L).

PROMPT: 'How would a 10-YEAR-OLD raise ₹2 lakhs?'
Ideas: Lemonade stand (scaled: sell 10,000 lemonades at ₹20 each), bake sale (sell 1000 cupcakes at ₹200), talent show (charge ₹100 entry, 2000 attendees), sell handmade crafts.

PROMPT: 'How would a B.COM PROFESSOR raise ₹2 lakhs?'
Ideas: Paid workshops (Excel, GST, financial modeling: ₹500/person, 400 attendees = ₹2L), sell course materials (study guides, practice exams), consulting services (help students with assignments: ₹1000/assignment).

Role storming unlocks perspectives you do not have. You think like YOU (limited). Role storming thinks like 10 different people (unlimited). Result: 10× more ideas."

[7:30-8:00] YOUR CHALLENGE (Generate 50 Ideas)

"Here is your action step: Pick a problem (fundraising, business idea, academic project, personal challenge).

1. Set timer: 60 minutes
2. Set target: 50 ideas (quantity goal)
3. Defer judgment: No criticism for 60 minutes
4. Use techniques: SCAMPER (7 prompts), Role Storming (3 roles), 'Yes, AND' (build on ideas)
5. Write EVERY idea (even 'stupid' ones)
6. After 60 minutes, converge: Evaluate 50 ideas, select top 10

Result: You will have 10 strong ideas (vs 1 obvious idea). Execute top 5. Solve your problem.

Creativity is not magic. It is a PROCESS. Ideation techniques = 10× more ideas. Now go generate 50 ideas."

[End Screen: "Next Video: Prototyping - Test Ideas in 1 Day, Not 3 Months"]`,
      content: [
        'Defer Judgment: Generate ideas for 60 minutes WITHOUT criticism (diverge first, converge later)',
        'Quantity Breeds Quality: Generate 50 ideas to reach gold (ideas 31-50 are wild and innovative)',
        'SCAMPER: 7 prompts (Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse) = 7× ideas',
        'Yes, AND: Build on ideas instead of killing them (multiplies ideas)',
        'Divergent Then Convergent: Diverge (generate 50), Converge (select top 10), Execute (top 5)',
        'Role Storming: Think like others (Elon Musk, 10-year-old, professor) = new perspectives',
        'B.Com Applications: Fundraising, business ideas, marketing campaigns, problem-solving'
      ]
    },
    quiz: {
      title: 'Ideation Quiz',
      questions: [
        {
          id: 6,
          question: 'Team brainstorming fundraising ideas for college fest. Priya suggests: "Sell old textbooks." Rahul immediately says: "That will not work - students will not donate books." What mistake did Rahul make?',
          options: [
            'Nothing - he is being realistic and saving time',
            'Judged idea during DIVERGENCE phase (generation). Ideation rule: Generate 50 ideas WITHOUT criticism for 60 minutes, THEN evaluate. Early judgment kills creativity.',
            'Should have criticized idea more harshly',
            'Should have found one perfect idea instead'
          ],
          correct: 1,
          explanation: 'Violated ideation rule: Defer judgment during divergence. Ideation = 2 phases: (1) DIVERGE (generate 50+ ideas without criticism), (2) CONVERGE (evaluate, select top 10). Rahul judged during divergence ("Won\'t work"). Result: Priya stopped sharing. Team generated only 1 idea. If said "Interesting! What else?" Priya would share 10+ more ideas. Wild idea (sell textbooks) might spark viable idea (textbook rental platform). Separate generation from evaluation. Criticism during generation = creativity death. Generate 50, THEN evaluate.'
        },
        {
          id: 7,
          question: 'During ideation for business idea, someone suggests: "What if we create dating app for B.Com students?" You think: "That is too wild and unconventional." What should do?',
          options: [
            'Reject it immediately - stick to conventional business ideas',
            'WELCOME wild idea! Write it down. Wild ideas spark innovation. "Dating app" might spark "Networking app" or "Mentorship platform" (viable). Evaluate later, not now.',
            'Criticize it to keep team focused on realistic ideas',
            'Ignore it and move on to safer ideas'
          ],
          correct: 1,
          explanation: 'Wild ideas = GOLD in ideation. Why? (1) Spark innovation. "Dating app" → "Networking app" → "Mentorship platform connecting students with alumni" (viable, scalable). (2) Break mental barriers. Once say "dating app," brain thinks "We\'re thinking big. What else possible?" (3) Some wild ideas actually viable when refined. Airbnb was wild ("Rent strangers\' homes?"), now $100B company. Welcome ALL ideas during divergence. Wild → refined = innovation. Reject wild = miss breakthrough.'
        },
        {
          id: 8,
          question: 'Priya suggests: "Food stalls to raise money." Rahul responds: "Yes, BUT food stalls only raise ₹20K. We need ₹2L." What is wrong with "Yes, BUT"?',
          options: [
            'Nothing - Rahul is being realistic about revenue',
            '"Yes, BUT" is criticism disguised as agreement. KILLS idea. Better: "Yes, AND what if we do food FESTIVAL with ₹50 entry fee?" BUILDS on idea (₹20K → ₹1L).',
            'Rahul should have said "No" directly',
            '"Yes, BUT" is best way to improve ideas'
          ],
          correct: 1,
          explanation: '"Yes, BUT" = criticism disguised as agreement. Kills ideas instead of building them. Rahul said "Yes, BUT" (criticism: food stalls not enough). Result: Idea killed. Better: "Yes, AND food FESTIVAL with ₹50 entry?" (Building: ₹50 × 2000 = ₹1L). Then: "Yes, AND sell merchandise?" (+₹50K). Then: "Yes, AND live-stream?" (+₹50K virtual tickets). One idea (₹20K) → 4 ideas (₹2.2L) through "Yes, AND." Ban "Yes, BUT." Only allow "Yes, AND." Multiplies ideas instead of killing.'
        },
        {
          id: 9,
          question: 'Team stuck with 1 fundraising idea (sponsorships). You ask: "What are ALL possible ways to raise ₹2 lakhs?" (not "What is ONE best way?"). What type of thinking?',
          options: [
            'Convergent thinking - narrowing to one answer',
            'Divergent thinking - generating MANY diverse ideas (crowdfunding, workshops, food festival, hackathon, alumni donations, merchandise, job fair, etc.) before selecting best',
            'Linear thinking - following established rules',
            'Traditional thinking - using proven methods only'
          ],
          correct: 1,
          explanation: 'Divergent thinking = generates MANY diverse ideas by exploring broadly. "What are ALL possible ways?" (divergent) vs "What is ONE best way?" (convergent). Divergent: Crowdfunding, workshops, food festival, hackathon, alumni donations, merchandise, job fair, sell services, rent spaces, online fundraiser, sponsorship packages, talent show, Shark Tank competition (50+ ideas). Then convergent: Evaluate 50, select top 10. Divergent generates options. Convergent selects best. Need BOTH, but divergent comes FIRST. Always diverge first (generate 50), then converge (select 10). Skipping divergence = limited options.'
        },
        {
          id: 10,
          question: 'Team generated 50 fundraising ideas in 60 minutes. Friend says: "That is too many ideas. It is confusing. We should have just found 1 good idea and executed it." What is wrong with this thinking?',
          options: [
            'Friend is right - 50 ideas waste time',
            'Quantity breeds quality. BEST ideas (food festival ₹1L, hackathon ₹50K, workshops ₹2L) came from ideas 31-50 (wild ideas). If stopped at idea 1 (sponsorships ₹30K), would miss gold.',
            '50 ideas unnecessary - 5 ideas enough',
            'Too many ideas confuse execution'
          ],
          correct: 1,
          explanation: 'Quantity breeds quality in ideation. Why? (1) First 10 ideas = obvious (sponsorships, donations, bake sale). (2) Ideas 11-30 = interesting (food festival, workshops, hackathon). (3) Ideas 31-50 = wild (rent college spaces, sell exam notes, dating app) - some GOLD when refined. Example: Idea 35: "Hackathon" → Refined: "₹500 entry, 100 participants = ₹50K + attracts tech sponsors (₹1L)." Total: ₹1.5L from one "wild" idea. If stopped at idea 1 (₹30K), would miss this. Push through 50. Best ideas come AFTER obvious ones. Quantity → Quality.'
        }
      ]
    },
    challenge: {
      title: 'Ideation Challenge',
      description: 'Master creative idea generation',
      contexts: {
        academic: {
          title: 'Fix Attendance Ideation Win',
          description: 'Class 40% attendance. Admin threatens cancel. Traditional "mandatory" fails. Ideation: 50 ideas, top 5 executed. Result: 85% attendance, Professor/admin praise creativity!',
          instructions: [
            '• Setup ideation: 5 classmates, defer judgment, 30 ideas 45min goal',
            '• Diverge: Random, SCAMPER, Role Storm—30 ideas generated',
            '• Build "Yes AND": Top 5→20 ideas total 50',
            '• Converge: Impact vs Effort matrix—select top 10',
            '• Execute top 5: Speakers, gamify, peer groups—40%→85% attendance!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• First idea "mandatory"—obvious fails',
            '• Judge during generate—kills creativity',
            '• One technique only—use multiple',
            '• No convergence—can\'t decide what execute',
            '• Vague ideas—refine before executing'
          ],
          successCriteria: [
            '✅ 5 classmates ideation session setup',
            '✅ 30 ideas using 3 techniques',
            '✅ 50 ideas total after "Yes AND"',
            '✅ Top 10 selected via matrix',
            '✅ 40%→85% attendance achieved'
          ]
        },
        professional: {
          title: 'Build Enrollment Ideation Boss',
          description: 'Marketing Manager. Enrollments 700 (down 30%). CEO: "Innovative ideas!" Traditional ads fail. Ideation: 100 ideas, top 5 executed. Result: 1350 enrollments (93%↑), Senior Manager promotion!',
          instructions: [
            '• Assemble 6 diverse: Marketers, sales, student, alumni, professor',
            '• Diverge 5 techniques: Random, SCAMPER, HMW, Worst Flip, Role Storm—60 ideas',
            '• Build "Yes AND": Top 10→40 ideas, total 100',
            '• Converge matrix: Impact vs Cost—select top 15',
            '• Execute top 5: Referral, YouTube, placement, ₹99/mo, trial—700→1350 enrollments!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Small team—limited ideas, get diverse 6',
            '• One technique—obvious only, use 5',
            '• Judge too early—kills creativity',
            '• Don\'t build on ideas—stays 1',
            '• No criteria—use Impact vs Cost matrix'
          ],
          successCriteria: [
            '✅ 6 diverse team assembled',
            '✅ 60 ideas using 5 techniques',
            '✅ 100 ideas total after building',
            '✅ Top 15 selected, CEO approved',
            '✅ 700→1350 enrollments, promotion!'
          ]
        },
        personal: {
          title: 'Earn ₹10K Ideation Win',
          description: 'Want ₹10K/mo side income. Stuck 2 obvious (tutoring ₹500/hr, job ₹5K conflicts). Ideation: 85 ideas, test top 3. Result: ₹30K/mo templates+bookkeeping, fits studies!',
          instructions: [
            '• Solo setup: Quiet space, notebook, 40 ideas 60min target',
            '• Diverge 4 techniques: Random, SCAMPER, Skills, Role Storm—45 ideas',
            '• Build "Yes AND": Top 10→40 ideas, total 85',
            '• Converge: Income vs Time matrix—select top 5',
            '• Test + execute: Templates + bookkeeping—₹21K/mo, fits studies!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Obvious ideas only—generate 40+',
            '• One technique—use systematic 4',
            '• No testing—test top 3 first',
            '• Don\'t build on ideas—multiply potential',
            '• Quit after 10 ideas—push to 40'
          ],
          successCriteria: [
            '✅ 45 ideas using 4 techniques',
            '✅ 85 ideas total after building',
            '✅ Top 5 selected via matrix',
            '✅ Top 3 tested, 2 executed',
            '✅ ₹21K/mo achieved, Month 6 ₹30K!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🎲 Defer Judgment Discipline: You separate divergence (generate 50 ideas without criticism) from convergence (evaluate and select top 10). During divergence, you ban "Yes, BUT" and "That will not work." Result: Team feels safe sharing wild ideas. Priya shares 10 ideas (vs 1 idea when criticized). You generate 50 ideas in 60 minutes (vs 1 idea in 10 minutes with judgment). Deferring judgment = idea explosion.',
        '📈 Quantity-First Mindset: You set ambitious targets (50 ideas in 60 minutes) and push through. You understand: Ideas 1-10 are obvious, ideas 11-30 are interesting, ideas 31-50 are wild (and some are gold). You do not stop at idea 10 ("sponsorships"). You push to idea 50 ("hackathon" = ₹1.5L revenue). Quantity breeds quality. You reach gold by pushing past obvious.',
        '🛠️ Multiple Ideation Techniques: You use 5 techniques (Random Brainstorming, SCAMPER, How Might We, Worst Possible Idea, Role Storming) instead of one. Each technique generates 10-15 ideas. Total: 60 ideas (vs 10 from random brainstorming alone). You understand: More techniques = more diverse ideas. SCAMPER generates systematic ideas. Role Storming generates perspective-shifting ideas. Combining techniques = comprehensive ideation.',
        '🤝 "Yes, AND" Building: You build on ideas instead of killing them. Idea: "Food stalls" (₹20K). You build: "Yes, AND food festival?" (₹1L). "Yes, AND merchandise?" (+₹50K). "Yes, AND live-stream?" (+₹50K). One idea → 4 ideas → ₹2.2L revenue (vs ₹20K). You multiply ideas through building, not limit them through criticism. "Yes, AND" is your superpower.',
        '🎯 Convergence Discipline: After generating 50 ideas, you do not get overwhelmed. You systematically evaluate using criteria (Impact, Cost, Time, Risk). You plot on 2×2 matrix (Impact vs Effort). You select top 10 high-impact, low-effort ideas. You refine them (Who? What? When? How?). You execute top 5. This structured convergence prevents analysis paralysis and ensures you execute the BEST ideas, not random ideas.'
      ],
      improvements: [
        '⏰ Extend Divergence Time: You diverge for 60 minutes (good), but research shows: Best ideas come after 90-120 minutes. Why? Your brain needs time to exhaust obvious ideas (first 30 mins) and reach wild ideas (60-120 mins). Improve: For important problems, extend divergence to 90 minutes. Use breaks (diverge 30 mins, break 5 mins, diverge 30 mins, break 5 mins, diverge 30 mins). This sustained divergence generates 80-100 ideas (vs 50 in 60 mins).',
        '🎭 Use More Role Storming Personas: You role-storm with 3 personas (Elon Musk, 10-year-old, professor). Expand to 10 personas: (1) Competitor (how would rival college solve this?), (2) Customer (how would a B.Com student solve this?), (3) Investor (how would a VC solve this?), (4) Regulator (how would government solve this?), (5) Futurist (how would this be solved in 2030?), (6) Minimalist (simplest solution?), (7) Maximalist (most ambitious solution?), (8) Pessimist (what could go wrong?), (9) Optimist (best-case scenario?), (10) Comedian (funny/absurd solution?). 10 personas = 10× perspectives = more diverse ideas.',
        '🧪 Test Ideas Faster: You generate 50 ideas, converge to top 10, refine, then execute top 5. But you do not TEST ideas before full execution. Example: You execute "Referral program" (₹5K per referral) without testing: Will students actually refer? Test first: Offer ₹5K to 5 students, see if they refer. If yes (3 students refer 10 friends), scale. If no (0 referrals), pivot. Improve: After convergence, TEST top 3 ideas with small pilots (1 week, ₹5K investment) before full execution (3 months, ₹50K investment). Testing reduces risk.',
        '📊 Quantify Idea Impact: You select "top 10 ideas" based on qualitative assessment ("This seems high-impact"). But you do not always quantify. Example: "Guest speakers" - you say "high impact" but do not estimate: How many students will this attract? (Estimate: 30% attendance increase = 20 students/class.) How much value? (Networking, job opportunities = ₹50K value/student.) Improve: For each idea, estimate impact numerically. This helps prioritize: Guest speakers (30% increase) > Gamification (10% increase). Focus on highest-impact ideas.',
        '🔄 Iterate on Convergence Criteria: You use 4 criteria (Impact, Cost, Time, Risk). But different problems need different criteria. Example: For fundraising, add "Repeatability" (can we do this every year?). For business ideas, add "Scalability" (can we grow 10×?). For personal income, add "Passive income potential" (can I earn while sleeping?). Improve: Customize convergence criteria based on problem type. This ensures you select ideas that fit YOUR specific goals.'
      ],
      nextSteps: [
        '📚 Study Advanced Ideation: Read "Ideation" by Michael Michalko (100+ creativity techniques), "Thinkertoys" by Michael Michalko (creative thinking tools), "Creative Confidence" by Tom and David Kelley (IDEO\'s ideation methods). Apply: Learn 10 new ideation techniques (Random Word Association, Provocation, Six Thinking Hats, Mind Mapping, Morphological Analysis). Practice each on 1 problem. Build your ideation toolkit.',
        '🧠 Build an Idea Bank: Create a document: "My Best Ideas by Category." Categories: Fundraising, Business, Marketing, Academic, Personal. For each category, document: (1) Problem, (2) 50 ideas generated, (3) Top 10 selected, (4) Top 5 executed, (5) Results. Over 10 ideation sessions, you will have 500+ ideas documented. When you face a new problem, review your Idea Bank: "I generated 87 fundraising ideas for college fest. Can I adapt any for this new fundraising challenge?" Idea Bank = creativity accelerator.',
        '🎯 Practice Daily Ideation: Make ideation a daily habit. Challenge: Generate 20 ideas for small problems daily. Monday: "20 ways to save time in my morning routine." Tuesday: "20 ways to make studying more enjoyable." Wednesday: "20 ways to improve my resume." Daily practice builds ideation muscle. After 3 months (90 days × 20 ideas = 1800 ideas), you will be an idea-generating machine. Ideation becomes effortless.',
        '👥 Facilitate 5 Ideation Sessions: The best way to master ideation is to facilitate it for others. Facilitate 5 sessions for friends/teams facing problems. Practice: (1) Set rules (defer judgment, quantity target, time limit), (2) Use techniques (SCAMPER, Role Storming, Yes AND), (3) Enforce rules (stop criticism, encourage wild ideas), (4) Guide convergence (Impact vs Effort matrix). Facilitating = teaching = mastery. You will also build reputation as "the creative problem-solver."',
        '📊 Track Ideation ROI: For each ideation session, track ROI. Example: College fest fundraising. Time invested: 3 hours (ideation session). Ideas generated: 50. Top 5 executed. Revenue: ₹3L (vs ₹30K from 1 idea). ROI: ₹3L revenue / 3 hours = ₹1L/hour. Document: "Ideation session generated ₹2.7L additional revenue in 3 hours. ROI: 90,000%." This data proves: Ideation is not "wasting time brainstorming." It is high-ROI strategic thinking. Use this data to convince teams: "Invest 2 hours in ideation, generate 10× better solutions."'
      ]
    },
    badge: { name: 'Ideation Master', emoji: '💭', description: 'Expert in creative idea generation' },
    shareMessage: 'Just mastered ideation techniques! 💭 #DesignThinking #Innovation'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    emoji: '🛠️',
    context: 'professional' as const,
    discover: {
      scenario: "Study planner. You: 4 months, 15 features, ₹2L. Launch: 0 users. Priya: 1 day paper prototype, tested, coded simple (2 weeks, ₹20K). Launch: 500 users.",
      problemExplanation: [
        "Build before test: 4 months 'perfection.' Built WRONG (15 features). Should've tested Day 1 (₹0)",
        "Fear imperfection: 'Can't show paper sketch.' Waited 4 months. Users care 'Does it solve problem?'",
        "Don't test users: Tested yourself (loved 15!), developer. Not B.Com students. Built for YOU",
        "Perfectionism: Kept adding (AI, social, analytics). 'More = better.' Reality: overwhelmed. Wanted 1. Built 15"
      ],
      solutionApproach: [
        "Paper prototype: Day 1, 2hrs. Hand-draw 5 screens. Pen + paper. ₹0. Test CONCEPT",
        "Test 5 users: Day 1, 2hrs. Show paper. 'How use? Confusing?' Learned 4hrs (not 4 months)",
        "Iterate rapid: Days 2-3. V0.2 based feedback. Remove calendar, add time estimates. Test 5 new",
        "Fail fast & cheap: Paper fails Day 1 (4hrs, ₹0), pivot. Not 4 months, ₹2L, 0 users"
      ]
    },
    video: {
      title: 'Test in 1 Day, Not 4 Months: Rapid Prototyping for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU WASTED 4 MONTHS

"You spent 4 months building a study planner app. 15 features. ₹2 lakhs invested. Launch: 0 users. Students said: 'Too complicated. We just want a simple to-do list.' 4 months wasted. Meanwhile, Priya spent 1 DAY creating a paper prototype, tested it, refined it, THEN coded a simple app (2 weeks). Launch: 500 users. You built for 4 months without testing. She tested on Day 1. You failed. She succeeded. By the end of this video, you will learn rapid prototyping - test ideas in 1 day, not 4 months. Let us fix this."

[0:45-2:15] PAPER PROTOTYPES (Test in 2 Hours, Not 4 Months)

"Stop coding. Start with paper.

STEP 1: Draw Your Idea (2 hours)
Hand-draw 5 screens on paper:
- Screen 1: Home (What does user see first? 'Today: Study Accounting Ch3, Economics Ch5')
- Screen 2: Add Task (How do they add? 'Subject: Accounting, Chapter: 3, Time: 2 hours')
- Screen 3: Task List (How do they view? 'Accounting: Ch3 (2h), Economics: Ch5 (1h)')
- Screen 4: Check Off (How do they mark done? 'Tap checkbox → Task marked complete')
- Screen 5: Progress (How do they see progress? '5/10 tasks done today. 10 hours studied.')

Use pen and paper. Just boxes, text, arrows. No design skills needed.

COST: ₹0
TIME: 2 hours
PURPOSE: Test the CONCEPT (do students want this?), not execution (is code good?).

STEP 2: Test with 5 Users (2 hours)
Show paper screens to 5 B.Com students. Say: 'Walk me through: How would you use this?'

Watch them interact. They point: 'I click here to add task. Then I see my list here. Then I check off here.'

Listen to feedback:
- 'I do not need calendar integration. Just today is tasks.'
- 'Progress screen is nice but not essential.'
- 'Can you add: Time estimate for each task?' (NEW feature you did not think of!)

LEARNING in 4 hours:
- Students want SIMPLE (3 screens, not 5)
- They want TIME estimates (new feature)
- They do NOT want calendar, analytics (remove these)

You learned this in 4 HOURS (paper prototype), not 4 MONTHS (full app). Saved: 4 months, ₹2 lakhs."

[2:15-3:45] LOW-FIDELITY DIGITAL PROTOTYPE (Test in 3 Days, Not 3 Months)

"After validating paper prototype, create digital wireframe.

TOOL: Figma (free)
FIDELITY: Low (boxes, text, no design, no colors)
MAKE IT CLICKABLE: Click 'Add Task' → Goes to 'Add Task Screen'

STEP 1: Create Wireframe (2 days)
- Screen 1: Home (boxes with text: 'Accounting: Ch3 (2h)', 'Economics: Ch5 (1h)')
- Screen 2: Add Task (form: Subject dropdown, Chapter input, Time input, Add button)
- Screen 3: Check Off (tap checkbox → task marked complete)

STEP 2: Test with 10 Users (1 day)
Send Figma link. Students click through. They test: 'Can I add a task? Can I check it off? Can I see progress?'

FEEDBACK:
- 'Flow is good!'
- 'Can you add: Group tasks by SUBJECT (Accounting, Economics, Business Law)?'
- 'Can you add: Priority (High, Medium, Low)?'

REFINE: Add grouping by subject, add priority. Test again (5 students). Feedback: 'Perfect!'

COST: ₹0 (Figma is free)
TIME: 3 days
LEARNING: Flow is validated. New features (grouping, priority) identified. You are refining BEFORE coding.

Total investment: 4 hours (paper) + 3 days (wireframe) = 3.5 days, ₹0. You validated concept AND flow. NOW you can code with confidence."

[3:45-5:15] MINIMUM VIABLE PRODUCT (Build Only What is Validated)

"After validating concept (paper) and flow (wireframe), code a SIMPLE app.

MVP = Minimum Viable Product
- Minimum: Fewest features needed to test with users
- Viable: Actually works (not just prototype)
- Product: Users can use it

YOUR MVP:
Features (ONLY what is validated):
1. Add task (subject, chapter, time estimate)
2. View tasks grouped by subject
3. Check off when done
4. See progress (5/10 tasks done today)

That is it. 4 features.

NO AI (not validated).
NO social features (not validated).
NO analytics dashboard (not validated).
NO calendar integration (users said they do not want this).

BUILD TIME: 2 weeks
COST: ₹20K (developer time)

LAUNCH: 50 beta users (your classmates)
FEEDBACK: 'Perfect! Simple and fast. Exactly what I need.'

RESULT: 50 users love it. You validated before building.

TOTAL JOURNEY:
- Day 1: Paper prototype (₹0, 4 hours) → Validated concept
- Week 1: Wireframe (₹0, 3 days) → Validated flow
- Week 2-3: MVP (₹20K, 2 weeks) → Validated product
- Week 4: Launch (50 users)

Total: 18 days, ₹20K, 50 users.

VS your original approach: 4 months, ₹2L, 0 users.

Prototyping saved you 3.5 months and ₹1.8 lakhs."

[5:15-6:45] FAIL FAST AND CHEAP (Learn in Days, Not Months)

"Prototyping is RISK MANAGEMENT.

SCENARIO 1: Paper prototype FAILS
Day 1: You show paper prototype to 5 students.
Feedback: 'We do not need a study planner. We use Google Calendar. We are fine.'

LEARNING: There is no market for this. Pivot.
COST: 4 hours, ₹0
DECISION: Build something else (bill-splitting app, course finder, etc.)

You failed FAST (Day 1) and CHEAP (₹0). You can pivot immediately.

SCENARIO 2: No prototyping (your original approach)
Month 4: You launch full app.
Feedback: 'We do not need this. We use Google Calendar.'

LEARNING: There is no market for this.
COST: 4 months, ₹2 lakhs
DECISION: Too late to pivot. You already invested everything.

You failed SLOW (Month 4) and EXPENSIVE (₹2L). You cannot pivot.

PROTOTYPING = CHEAP FAILURE
- Fail on Day 1 (₹0 loss) instead of Month 4 (₹2L loss)
- Learn fast (4 hours) instead of slow (4 months)
- Pivot immediately instead of being stuck

Fail fast and cheap = succeed fast and cheap."

[6:45-7:45] PROGRESSION: LOW → HIGH FIDELITY

"Prototypes progress from low to high fidelity as you learn.

VERSION 0.1: Paper Prototype (Day 1, ₹0)
Purpose: Test concept. Do students want a study planner?
Fidelity: Low (hand-drawn boxes).
Learning: Yes, they want it. But SIMPLE, not complex.

VERSION 0.2: Refined Paper (Day 2, ₹0)
Purpose: Test refined concept. Is simple better?
Fidelity: Low (hand-drawn, refined).
Learning: Yes, simple is better. Add time estimates.

VERSION 0.3: Digital Wireframe (Week 1, ₹0)
Purpose: Test flow. Can users navigate?
Fidelity: Medium (clickable, but no design).
Learning: Flow is good. Add grouping by subject.

VERSION 0.4: MVP (Week 2-3, ₹20K)
Purpose: Test product. Will users actually use it?
Fidelity: Medium-High (working app, basic design).
Learning: Yes, 50 users love it. Add priority feature.

VERSION 1.0: Full Product (Week 4-6, ₹50K)
Purpose: Launch. Scale to 1000 users.
Fidelity: High (polished design, all features).
Result: 500 users in Month 1. Success!

Each version increases fidelity (and cost) ONLY after validating previous version. You do not jump from 0 to 100. You progress: 0 → 20 → 40 → 60 → 80 → 100."

[7:45-8:00] YOUR CHALLENGE (Prototype in 1 Day)

"Here is your action step: Pick an idea (app, service, product, process improvement).

DO NOT CODE. Instead:

1. Draw paper prototype (2 hours): 5 key screens, hand-drawn
2. Test with 5 users (2 hours): Watch them interact, listen to feedback
3. Refine prototype (1 hour): Incorporate feedback
4. Test with 5 NEW users (2 hours): Validate refinements
5. Decide (1 hour): Is this worth building? If yes, create digital wireframe. If no, pivot.

Total: 8 hours, ₹0 investment. You will know if your idea works BEFORE investing months and lakhs.

Stop building. Start prototyping. Test in 1 day, not 4 months."

[End Screen: "Next Video: Testing - Validate Assumptions with Real Users"]`,
      content: [
        'Paper Prototypes: Hand-drawn screens (₹0, 2 hours) test concept before coding (₹2L, 4 months)',
        'Test with 5 Users Immediately: Learn what users want in 4 hours, not 4 months',
        'Iterate Rapidly: Version 0.1 (paper) → 0.2 (refined) → 0.3 (wireframe) → 0.4 (MVP) → 1.0 (launch)',
        'Low-Fidelity Digital: Figma wireframes (free, 3 days) test flow before coding',
        'Minimum Viable Product: Build ONLY validated features (4 features, not 15)',
        'Fail Fast and Cheap: Learn in Day 1 (₹0) instead of Month 4 (₹2L), pivot immediately',
        'B.Com Applications: App development, service design, process improvement, product innovation'
      ]
    },
    quiz: {
      title: 'Prototyping Quiz',
      questions: [
        {
          id: 11,
          question: 'Have idea for study planner app. Friend says: "Spend 4 months coding it perfectly, then launch." You say: "No, I will create paper prototype in 2 hours and test first." What is purpose of prototyping?',
          options: [
            'Make perfect product that impresses everyone',
            'Test ideas QUICKLY (2 hours, ₹0) and CHEAPLY (paper, not code) to learn what users want BEFORE investing months and lakhs in development',
            'Impress stakeholders with professional designs',
            'Waste time drawing instead of building'
          ],
          correct: 1,
          explanation: 'Prototyping = tests ideas quickly and cheaply BEFORE expensive development. Paper prototype: 2 hours, ₹0. Test with 5 users. Learn: "Students want simple to-do list, not complex planner." Pivot immediately. Cost: 4 hours, ₹0. Without prototyping: Code 4 months, ₹2L. Launch. Learn: "Too complicated." Cost: 4 months, ₹2L (can\'t pivot, already invested). Prototyping = risk management. Test with cheap prototypes (paper, wireframes) before expensive development (code, design). Fail fast and cheap (Day 1, ₹0) vs slow and expensive (Month 4, ₹2L). Prototype EVERY idea before building. Save time, money, heartbreak.'
        },
        {
          id: 12,
          question: 'You want to test your study planner app idea. Should you start with: (A) High-fidelity prototype (polished design, animations, perfect), or (B) Low-fidelity prototype (hand-drawn paper screens)?',
          options: [
            'Start with high-fidelity (polished, perfect) to impress users',
            'Start with LOW-fidelity (paper, rough). Purpose: Test CONCEPT (do users want this?), not execution (is design pretty?). Low-fidelity is fast (2 hours), cheap (₹0), easy to change.',
            'Start with final product - no need for prototypes',
            'Skip prototypes entirely and just build'
          ],
          correct: 1,
          explanation: 'Start with LOW-fidelity (paper, hand-drawn, rough). Why? (1) Fast: 2 hours (vs 2 weeks for high-fidelity). (2) Cheap: ₹0 (vs ₹50K polished). (3) Tests concept: "Do users want study planner?" (not "Is design pretty?"). (4) Easy to change: Redraw screen in 5 minutes (vs re-code in 2 days). (5) Focuses feedback: Users focus on concept, not colors. Progression: Paper (test concept) → Wireframe (test flow) → MVP (test product) → Full product (scale). Each step increases fidelity ONLY after validating previous. Start rough, refine based on feedback. Low-fidelity = fast learning.'
        },
        {
          id: 13,
          question: 'You create a paper prototype, test with 5 students. Feedback: "We do not need a study planner. We use Google Calendar." You invested 4 hours, ₹0. What does "fail fast and cheap" mean?',
          options: [
            'Give up quickly on all ideas',
            'Learn quickly from CHEAP failures (4 hours, ₹0). You discovered "no market" on Day 1. Pivot immediately to new idea. VS failing slow and expensive (4 months, ₹2L, then discovering "no market").',
            'Avoid all failure by not testing',
            'Fail publicly to embarrass yourself'
          ],
          correct: 1,
          explanation: 'Fail fast and cheap = learn from failures quickly (Day 1) and cheaply (₹0) so can pivot immediately. Paper prototype failed (students don\'t want study planner). Cost: 4 hours, ₹0. Learning: No market. Decision: Pivot to new idea (bill-splitting app, course finder). Failed Day 1 (fast) with ₹0 (cheap). Can pivot immediately. Without prototyping: Code 4 months, invest ₹2L, launch, discover "no market." Failed Month 4 (slow) with ₹2L (expensive). Too late to pivot. Prototyping enables cheap failures (₹0) that lead to fast pivots. Fail fast and cheap on 10 ideas to find 1 winner. Better than failing slow and expensive on 1 idea.'
        },
        {
          id: 14,
          question: 'You created a paper prototype for a study planner app. Who should you test it with FIRST?',
          options: [
            'Nobody - perfect it first, then show users',
            'Real B.Com students (your target users) EARLY (Day 1, after 2 hours of drawing). Test often (every iteration). They tell you what they actually need.',
            'Only design experts who can critique the aesthetics',
            'Wait until it is perfect, then test with users'
          ],
          correct: 1,
          explanation: 'Test with REAL USERS (B.Com students) EARLY (Day 1) and OFTEN (every iteration). Why? (1) Real users tell what they actually need ("simple to-do list, not complex planner"). (2) Early testing (Day 1) prevents building wrong thing (4 months wasted). (3) Often testing (every iteration) ensures on track. Testing with experts = tells if execution good, not if concept right. Testing with yourself = confirmation bias. Testing with real users = reality check. Test paper prototype with 5 users on Day 1 (4 hours after starting). Learn what they want BEFORE investing months. Early user feedback = product-market fit.'
        },
        {
          id: 15,
          question: 'You are building a study planner app. Prototype progression: Version 0.1 (paper, ₹0), Version 0.2 (wireframe, ₹0), Version 0.3 (MVP, ₹20K), Version 1.0 (full product, ₹50K). What is the pattern?',
          options: [
            'Fidelity should always be high from the start',
            'Fidelity progresses from LOW to HIGH as you learn and validate. Start cheap (paper), increase investment (wireframe, MVP, full product) ONLY after validating each stage.',
            'Fidelity should stay low forever',
            'Skip to high-fidelity immediately to save time'
          ],
          correct: 1,
          explanation: 'Prototype fidelity = progresses from LOW to HIGH as you validate and learn. Version 0.1 (paper, ₹0): Test concept. If fails, pivot (₹0 loss). If succeeds, proceed. Version 0.2 (wireframe, ₹0): Test flow. Refine. Version 0.3 (MVP, ₹20K): Test product. If they love it, scale. Version 1.0 (full product, ₹50K): Polish and launch. Each stage increases fidelity (and cost) ONLY after validating previous. Why? Risk management. Don\'t invest ₹50K in high-fidelity until validate concept (paper, ₹0). Start with cheapest prototype (paper), progressively increase investment as gain confidence. Low → High fidelity = smart risk management.'
        }
      ]
    },
    challenge: {
      title: 'Prototyping Challenge',
      description: 'Master rapid prototyping and testing',
      contexts: {
        academic: {
          title: 'Prototype Exam Prep Win',
          description: 'Exam prep idea: videos, tests, notes, forums. Want code NOW. Remember: Prototype FIRST. Paper→test 10→iterate→decide. Result: 500 users ₹2.5L, 6 weeks NOT 4mo ₹2L fail!',
          instructions: [
            '• Paper prototype: Hand-draw 6 screens, 3hr ₹0',
            '• Test 5 students: Feedback—want tests, NOT videos/forums',
            '• Refine v0.2: Remove videos/forums, add weak areas',
            '• Wireframe Figma: 2 days ₹0, test 10, flow validated',
            '• MVP + scale: 5 features, 500 users ₹2.5L—saved 2.5mo!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Skip paper—start paper always ₹0',
            '• Test yourself—test 5 target users',
            '• One prototype—iterate 3-4 times',
            '• High-fidelity early—go low→high',
            '• "Like it" not pay—ask willingness'
          ],
          successCriteria: [
            '✅ Paper 6 screens created, tested',
            '✅ Patterns found: tests YES, videos NO',
            '✅ v0.2 refined, weak areas added',
            '✅ Wireframe validated, bookmark added',
            '✅ 500 users ₹2.5L Month 1!'
          ]
        },
        professional: {
          title: 'Prototype AI Recs Pivot Boss',
          description: 'PM, CEO: "AI course recs!" Excited tech. Remember: Prototype FIRST. Low-fidelity→test 20→iterate→build. Result: Pivot peer reviews, 1200 users ₹35L, 2 weeks NOT 3mo ₹5L fail!',
          instructions: [
            '• Paper 5 screens: Hand-draw concept, 4hr ₹0',
            '• Test 10 students: Want peer reviews NOT AI',
            '• Pivot design: AI→peer reviews + previews + jobs',
            '• Wireframe Figma: 3 days ₹0, test 20, validated',
            '• MVP + launch: 50 beta, pivot approved—1200 users ₹35L!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Build AI!"—validate first',
            '• Test 3—need 10-20 for patterns',
            '• Ignore feedback—listen, pivot',
            '• Skip wireframe—validate each stage',
            '• MVP 15 features—keep 5 core'
          ],
          successCriteria: [
            '✅ Paper tested with 10 students',
            '✅ Pivot: AI→peer reviews discovered',
            '✅ Wireframe validated with 20',
            '✅ MVP 50 beta, 40 enrollments',
            '✅ 1200 users ₹35L revenue!'
          ]
        },
        personal: {
          title: 'Prototype Morning Routine Win',
          description: 'Late, skip breakfast, rush, stressed. Idea: "6AM, 30min exercise, breakfast, 1hr review." Sounds great. TEST 1 week NOT commit 3mo. Result: v0.1 33% fail, v0.2 100% sustainable!',
          instructions: [
            '• Design v0.1: 6AM, 30min exercise, 1hr review routine',
            '• Test 3 days: Day 1 success, Day 2 fail—too ambitious',
            '• Refine v0.2: 6:30AM, 20min exercise, 30min review',
            '• Test refined: 3/3 days success—sustainable!',
            '• Commit 1mo: 89% adherence, grades↑, energy↑',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "6AM tomorrow!"—test 3 days first',
            '• No tracking—track daily data',
            '• "I\'m lazy"—analyze WHY failed',
            '• Fail once, quit—iterate until works',
            '• "100% or fail"—80% = success'
          ],
          successCriteria: [
            '✅ v0.1 designed on paper',
            '✅ 3 days tested, 33% success',
            '✅ v0.2 refined, more realistic',
            '✅ 3 days validated, 100% success',
            '✅ 1mo sustained, 89% adherence!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📝 Paper Prototype Discipline: You start with paper (hand-drawn screens, ₹0, 2 hours) before coding (₹2L, 4 months). This tests concept cheaply. Example: Study planner app - paper prototype revealed "students want simple to-do list, not complex planner" in 4 hours. You pivoted immediately (saved 4 months, ₹2L). You do not waste time building the wrong thing. Paper first = smart risk management.',
        '👥 Early User Testing: You test prototypes on Day 1 (after 2 hours of work), not Month 4 (after 4 months of work). You show rough paper sketches to 5 B.Com students. They give honest feedback: "Too complicated. We want simple." You learn what users want EARLY (Day 1) when pivoting is cheap (₹0), not LATE (Month 4) when pivoting is expensive (₹2L already invested). Early testing = fast learning.',
        '🔄 Rapid Iteration: You create multiple prototype versions. Version 0.1 (paper) → Test → Version 0.2 (refined paper) → Test → Version 0.3 (wireframe) → Test → Version 0.4 (MVP). Each iteration incorporates user feedback. Example: V0.1 had 15 features. Feedback: "Too much." V0.2 has 5 features. Feedback: "Perfect!" You refine based on reality, not assumptions. Iteration = improvement.',
        '💸 Fail Fast and Cheap: When your paper prototype fails (students say "We do not need this"), you learn in Day 1 (4 hours, ₹0). You pivot immediately to new idea. You do not waste 4 months and ₹2L building something nobody wants. You fail on 10 ideas (₹0 each) to find 1 winner. Better than failing on 1 idea (₹2L). Cheap failures = fast pivots = eventual success.',
        '📊 Progressive Fidelity: You increase prototype fidelity (and cost) ONLY after validating previous stage. Paper (₹0) → Wireframe (₹0) → MVP (₹20K) → Full product (₹50K). You do not jump from ₹0 to ₹50K. You validate at each stage. If paper fails, you lose ₹0 (not ₹50K). If wireframe fails, you lose ₹0 (not ₹50K). You only invest ₹50K after validating paper + wireframe + MVP. Smart risk management.'
      ],
      improvements: [
        '⚡ Prototype Even Faster: You create paper prototype in 2-3 hours (good). But you can go faster. Improve: Sketch on whiteboard (not paper) - faster to draw and erase. Use sticky notes for screens (rearrange flow instantly). Use pre-made UI stencils (boxes, buttons, forms). Goal: Prototype in 30 minutes (not 2 hours). For small ideas, 30-minute prototype is enough. Reserve 2-hour prototypes for complex ideas. Speed = test more ideas.',
        '👥 Test with More Users: You test paper prototype with 5 users (good start). But 5 users might include outliers. Improve: Test with 10-15 users for important ideas. Why? Patterns emerge: "10/15 students want simple to-do list" (strong signal). "2/15 students want complex planner" (outliers, ignore). More users = more confident insights. For critical products (your startup idea, major project), test with 20+ users.',
        '🔄 Iterate More Times: You iterate 2-3 times (V0.1 → V0.2 → MVP). Good, but you can iterate more. Improve: V0.1 (paper) → V0.2 (refined paper) → V0.3 (wireframe) → V0.4 (refined wireframe) → V0.5 (basic MVP) → V0.6 (refined MVP) → V1.0 (launch). Each iteration is small (2 hours, test with 3 users). More iterations = more refinement = better product. Do not jump from paper to MVP. Add intermediate steps.',
        '📏 Measure Prototype Success: You test prototype and get feedback ("I like it"). But you do not measure: HOW MUCH do they like it? Improve: Use metrics. After testing, ask: "Rate 1-10: How likely are you to use this?" 8+ = strong validation. 5-7 = needs work. <5 = pivot. Also ask: "Would you pay ₹500 for this?" Yes = validated. No = free product or pivot. Metrics > vague feedback ("I like it" might mean 5/10, not 9/10).',
        '🎨 Prototype Non-Digital Ideas: You prototype apps (paper screens, wireframes). But you can prototype ANYTHING. Service? Create a "service blueprint" (map customer journey). Process? Create a flowchart. Event? Create a schedule mockup. Physical product? Create a cardboard model. Improve: Apply prototyping to ALL ideas (digital, service, process, event, physical). Prototyping is not just for apps. It is for ANY idea you want to test before committing.'
      ],
      nextSteps: [
        '📚 Learn Prototyping Tools: Master Figma (free, wireframes and high-fidelity designs), Balsamiq (quick wireframes), InVision (clickable prototypes), Marvel (mobile app prototypes), Miro (collaborative whiteboarding). Practice: Create 1 prototype per week using different tools. Build your toolkit. When you can prototype in 30 minutes (not 2 hours), you will test EVERY idea before building.',
        '🧠 Build a Prototype Library: Create a folder: "My Prototypes." For each idea you prototype, save: (1) Paper prototype (photo), (2) Wireframe (Figma file), (3) User feedback (notes), (4) Iterations (V0.1, V0.2, V0.3), (5) Outcome (built, pivoted, shelved). Over 10 prototypes, you will see patterns: "I always over-estimate features users want. I should default to minimal." This library teaches you what works and what does not.',
        '🎯 30-Day Prototyping Challenge: Prototype 1 idea per day for 30 days. Day 1: Study planner app (paper prototype, test with 3 students). Day 2: Morning routine (write routine, test for 1 day). Day 3: Budgeting app (paper screens, test with 2 friends). Daily prototyping builds muscle memory. After 30 days, prototyping becomes automatic. You will prototype EVERY idea before committing. This prevents wasting time on ideas that do not work.',
        '👥 Teach Prototyping to 3 People: The best way to master prototyping is to teach it. Walk 3 friends through rapid prototyping for their ideas. Teach: (1) Start with paper (2 hours, ₹0), (2) Test with 5 users (listen to feedback), (3) Iterate (refine based on feedback), (4) Progress to wireframe (validate flow), (5) Build MVP (validate product). When you teach, you discover gaps in your own understanding. You also save your friends from wasting months building wrong things.',
        '📊 Track Prototyping ROI: For each prototype, calculate ROI. Example: Study planner app. Time invested: 8 hours (paper + testing + refinement). Cost: ₹0. Learning: "Students want simple to-do list, not complex planner." Savings: 4 months (not building wrong thing) + ₹2L (not wasted on development). ROI: ₹2L saved / 8 hours = ₹25K/hour. Document: "8 hours of prototyping saved ₹2L and 4 months." This data proves: Prototyping is not "wasting time drawing." It is high-ROI risk management. Use this to convince teams: "Invest 1 day in prototyping, save 4 months of building wrong things."'
      ]
    },
    badge: { name: 'Prototype Pro', emoji: '🛠️', description: 'Expert in rapid prototyping' },
    shareMessage: 'Just mastered rapid prototyping! 🛠️ #DesignThinking #Prototyping'
  },
  {
    id: 'testing',
    title: 'Testing',
    emoji: '🧪',
    context: 'professional' as const,
    discover: {
      scenario: "Job Prep Platform. Assumed 'Need templates.' 2 months, ₹1L. Launch: 2 users. 'We need REVIEWS, not templates!' PrepBuddy tested first. 3/20 used templates (15%). Pivoted to reviews. 2000 users.",
      problemExplanation: [
        "Assume not test: Assumed 'Need templates.' Built 2 weeks. Reality: 3/20 used (15%). Should've tested Day 1",
        "No validation: Built entire platform, didn't show 1 user. Tested yourself. Not B.Com students till launch",
        "Confirmation bias: Interviewed 2 active users. 'Templates okay.' Should've asked 18 who DIDN'T use",
        "Observe behavior: 'Would you use?' They 'Yes' (polite). Observe: Download, confused, give up. SAY ≠ DO"
      ],
      solutionApproach: [
        "Clear hypothesis: 'Students use templates.' Test: Offer 20. Measure: 3/20 (15%). INVALIDATED. Pivot",
        "Test 20 real users: Show 20 B.Com students. 'Try it. I'll watch. Be honest.' Document",
        "Observe behavior: They say 'Yes.' Observe: Download, confused, give up. Need reviews not templates",
        "Welcome negative: 'Not useful.' Say 'Thank you! What WOULD be useful?' Day 1 (₹0) = gift"
      ]
    },
    video: {
      title: 'Stop Building What Nobody Wants: User Testing for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY NOBODY USES YOUR PRODUCT

"You built a job prep platform. 2 months, ₹1 lakh. Launch: 2 active users. You are devastated. Users said: 'We do not need templates. We need resume REVIEWS.' You built based on assumptions (templates), not testing (what do users actually need?). Meanwhile, PrepBuddy has 2000 users. Why? They TESTED assumptions before building. Hypothesis: 'Students need templates.' Test: Offered to 20 students. Only 3 used them (15%). Pivot: Build resume review service instead. Result: 2000 users. By the end of this video, you will learn user testing - validate assumptions BEFORE building. Let us fix this."

[0:45-2:15] CREATE CLEAR HYPOTHESES (Test Statements, Not Vague Ideas)

"Before testing, write down WHAT you are testing.

VAGUE: 'Let me see if students like my platform.' (Not testable. What does 'like' mean?)

CLEAR HYPOTHESIS: 'B.Com students will use resume templates (not hire resume writers) to create job-ready resumes.'

Now you can TEST:
1. Offer templates to 20 students
2. Measure: How many use them? (3/20 = 15%)
3. Measure: How long do they spend? (Average: 5 minutes)
4. Measure: Do they complete resume? (1/3 = 33%)
5. Measure: Satisfaction (1-10)? (Average: 4/10)

RESULT: Hypothesis INVALIDATED. 15% adoption, 5 mins usage, 33% completion, 4/10 satisfaction = Templates are NOT the solution.

DECISION: Pivot. Do not build template library.

Clear hypothesis = clear test = clear learning.

MORE HYPOTHESES:
- 'Students will spend 30+ minutes practicing interview questions.' (Test: Measure time spent.)
- 'Students will read company research before applying.' (Test: Track who reads.)
- 'Students will pay ₹500 for resume reviews.' (Test: Offer paid reviews, see who pays.)

Write 3-5 hypotheses BEFORE testing. This focuses your testing."

[2:15-3:45] OBSERVE BEHAVIOR (What They DO > What They SAY)

"Users say one thing, do another. Watch behavior, not words.

TEST: Resume Templates

ASK: 'Would you use resume templates?'
USER SAYS: 'Yes, sounds useful.' (Polite answer.)
YOU CONCLUDE: 'Great! Build templates.'

OBSERVE: 'Here are 5 templates. Create your resume. I will watch.'
USER DOES: Downloads 1 template. Stares at it for 5 minutes. Gets confused. Googles 'How to customize resume template.' Gives up. Closes template.

YOU OBSERVE: They do not know HOW to use templates. They need GUIDANCE (reviews), not TOOLS (templates).

INSIGHT: What they SAY ('templates are useful') ≠ What they DO (cannot use templates, need reviews).

ALWAYS OBSERVE:
1. Watch their screen: What do they click? Where do they get stuck?
2. Watch their face: Confusion? Frustration? Relief?
3. Watch their actions: Complete task? Give up? Google for help?
4. Ask: 'What are you thinking right now?' (Reveals mental model.)

Behavior reveals truth. Words reveal politeness."

[3:45-5:15] GATHER QUANTITATIVE + QUALITATIVE DATA

"Testing gives you 2 types of data:

QUANTITATIVE (Numbers - WHAT happened):
- Adoption: 3/20 students used templates (15%)
- Time: Average 5 minutes (not 30 mins as hoped)
- Completion: 1/3 completed resume (33%)
- Satisfaction: 4/10 average rating

CONCLUSION: Low adoption, low time, low completion, low satisfaction = Hypothesis INVALIDATED.

QUALITATIVE (Interviews - WHY it happened):
Ask 17 students who did NOT use templates: 'Why not?'

ANSWERS:
- 'I do not know how to customize for MY experience.'
- 'I do not know if my resume is good after using template.'
- 'I need someone to review and tell me what to improve.'
- 'Templates are generic. I need personalized feedback.'

INSIGHT: They need REVIEWS (personalized), not TEMPLATES (generic).

COMBINE BOTH:
Quantitative: 15% adoption (WHAT)
Qualitative: 'We need reviews, not templates' (WHY)
DECISION: Pivot from templates to resume review service.

Numbers tell you WHAT. Interviews tell you WHY. You need BOTH."

[5:15-6:30] TEST WITH REAL USERS (Not Yourself, Not Friends)

"Who should you test with?

WRONG: Test with yourself
You: 'I love these templates!' (Confirmation bias. You built it, of course you love it.)

WRONG: Test with friends
Friends: 'It is great!' (They want to be supportive, not honest.)

WRONG: Test with developers
Developers: 'Nice code!' (They evaluate execution, not concept.)

RIGHT: Test with REAL TARGET USERS
20 B.Com students who are job hunting (not your friends, not yourself).

They give HONEST feedback:
- 'Templates are confusing.'
- 'I need someone to review my resume.'
- 'I would pay ₹500 for mock interview with feedback.'

This is TRUTH, not politeness.

TEST IN REAL CONTEXT:
Not: 'Imagine you are job hunting. Would you use this?' (Hypothetical.)
But: 'You are job hunting right now. Here is a template. Create your resume. I will watch.' (Real behavior.)

Real users + real context = real insights."

[6:30-7:30] WELCOME NEGATIVE FEEDBACK (It Saves You)

"When users say 'This is not useful,' do not get defensive.

DEFENSIVE RESPONSE:
User: 'Templates are confusing.'
You: 'But I worked 2 months on this! Did you read the instructions?' (Defensive. Blaming user.)

EMPATHETIC RESPONSE:
User: 'Templates are confusing.'
You: 'Thank you for being honest. Can you show me where you got confused? What would be more helpful?' (Curious. Learning.)

User shows: 'I do not know how to describe MY experience using this template. I need someone to review my resume and tell me what to improve.'

YOU LEARN: They need reviews, not templates.

NEGATIVE FEEDBACK = GIFT:
- Saves you from wasting more time (you learned on Day 1, not Month 4)
- Tells you what to build instead (reviews, not templates)
- Prevents bigger failure (0 users, ₹1L wasted)

Embrace negative feedback. It is free consulting. Users tell you: 'Do not build this. Build THAT.' Listen. Pivot. Succeed."

[7:30-8:00] YOUR CHALLENGE (Test 1 Assumption Today)

"Here is your action step: Pick 1 assumption you have about users.

EXAMPLE: 'B.Com students need resume templates.'

1. Write clear hypothesis: 'Students will use templates to create resumes (not hire writers).'
2. Create simple test: Offer 5 templates to 20 students.
3. Observe behavior: How many use them? How long? Do they complete resume?
4. Gather data: Quantitative (15% adoption) + Qualitative (interview 17 who did not use: 'Why not?')
5. Decide: Hypothesis validated (build it) or invalidated (pivot)?

Total: 1 day, ₹0 investment. You will know if your assumption is correct BEFORE investing months and lakhs.

Stop assuming. Start testing. Build what users actually want."

[End Screen: "Next Video: Iteration - Improve Through Continuous Learning"]`,
      content: [
        'Create Clear Hypotheses: Write testable statements (Students will use templates to create resumes)',
        'Test with 20 Real Users: B.Com students (target users), not yourself or friends',
        'Observe Behavior: What they DO (download, get confused, give up) > What they SAY (sounds useful)',
        'Gather Quantitative Data: Measure adoption (15%), time (5 mins), completion (33%), satisfaction (4/10)',
        'Gather Qualitative Data: Interview non-users (Why did 85% not use templates? Need reviews, not templates)',
        'Welcome Negative Feedback: Day 1 negative feedback = gift (saves 2 months, ₹1L)',
        'B.Com Applications: Product validation, feature testing, market research, assumption testing'
      ]
    },
    quiz: {
      title: 'Testing Quiz',
      questions: [
        {
          id: 16,
          question: 'Assume: "B.Com students need resume templates." Built 50 templates (2 months, ₹1L). Launch: 15% adoption. What was purpose of user testing, and when should have done it?',
          options: [
            'Testing confirms you are right - test after building to celebrate success',
            'Testing VALIDATES or INVALIDATES assumptions. Test BEFORE building (Day 1, offer templates to 20 students, measure adoption). If 15%, pivot immediately (save 2 months, ₹1L).',
            'Testing impresses users with your hard work',
            'Testing wastes time - assumptions usually correct'
          ],
          correct: 1,
          explanation: 'User testing = validates or invalidates assumptions BEFORE invest time and money. Assumption: "Students need templates." Test BEFORE building: Offer 5 templates to 20 students (1 day, ₹0). Measure: 3/20 use them (15%). Hypothesis INVALIDATED. Pivot: Build resume review service (what 85% actually need). Cost: 1 day, ₹0. Without testing: Build templates (2 months, ₹1L), launch, discover 15% adoption. Cost: 2 months, ₹1L (too late to pivot). Testing Day 1 saves from expensive mistakes Day 60. Test EVERY assumption before building. Assumptions = expensive. Testing = cheap insurance.'
        },
        {
          id: 17,
          question: 'You test resume templates. You ask: "Would you use templates?" User says: "Yes, sounds useful." You observe: User downloads template, gets confused, gives up. What should you trust?',
          options: [
            'What they SAY - build templates because they said yes',
            'What they DO (behavior). They SAY yes (polite) but DO give up (reality). They need REVIEWS (guidance), not TEMPLATES (tools). Behavior > words.',
            'What they THINK - try to read their mind',
            'What they WANT - focus on aspirations'
          ],
          correct: 1,
          explanation: 'Trust what users DO (behavior), not what they SAY (words). Users say "Yes, templates sound useful" (polite answer). But observe: Download template, stare 5 minutes, get confused ("How customize this?"), give up, Google "resume review services." Behavior reveals: Don\'t know HOW to use templates. Need GUIDANCE (reviews), not TOOLS (templates). Always observe behavior: Watch screen (what click?), watch face (confusion? frustration?), watch actions (complete task? give up?). Behavior = truth. Words = politeness. Design for what users DO, not what they SAY.'
        },
        {
          id: 18,
          question: 'You test your job prep platform with 20 students. 15 say: "This is not useful. We need resume reviews, not templates." How should you respond?',
          options: [
            'Avoid negative feedback - only test with people who will like it',
            'Welcome negative feedback! It is a GIFT. They told you on Day 1 (₹0 cost) what you would have learned on Day 60 (₹1L cost): Build reviews, not templates. Pivot immediately.',
            'Negative feedback means you failed - give up',
            'Ignore negative feedback - they do not understand your vision'
          ],
          correct: 1,
          explanation: 'Negative feedback = VALUABLE LEARNING OPPORTUNITY, not failure. 15/20 said "not useful" (75% rejection). This is GOLD. They told you: (1) What NOT to build (templates), (2) What TO build (reviews), (3) On Day 1 (when pivoting cheap: ₹0), not Day 60 (when pivoting expensive: ₹1L already invested). Response: "Thank you! This saves me from wasting 2 months and ₹1L. Tell me more: What would resume reviews look like?" Negative feedback = free consulting. Users tell exactly what to build. Listen, pivot, succeed. Embrace negative feedback early (Day 1) when pivoting cheap. Avoid it = waste months building wrong thing.'
        },
        {
          id: 19,
          question: 'Before testing, you write: "Hypothesis: B.Com students will use resume templates to create resumes (not hire writers)." Why is a clear hypothesis important?',
          options: [
            'Hypotheses are unnecessary - just test randomly',
            'Clear hypothesis makes testing MEASURABLE. You can test: Did they use templates? (3/20 = 15%). Hypothesis INVALIDATED (pivot). Without hypothesis, you get vague feedback ("It is okay") with no clear decision.',
            'Hypotheses are random guesses with no value',
            'Hypotheses are final conclusions, not tests'
          ],
          correct: 1,
          explanation: 'Clear hypothesis = makes testing measurable and actionable. Hypothesis: "Students will use templates to create resumes." Test: Offer templates to 20 students. Measure: 3/20 used them (15%). Decision: Hypothesis INVALIDATED (15% too low). Pivot. Without hypothesis, testing vague: "Let me see if students like it." Result: Vague feedback ("It\'s okay, I guess"). No clear decision. With hypothesis, testing clear: 15% adoption = hypothesis failed, pivot to reviews. Write 3-5 clear, testable hypotheses before testing. Focuses testing, enables data-driven decisions (not gut feelings).'
        },
        {
          id: 20,
          question: 'You want to test your job prep platform. Who should you test with: (A) Your friends, (B) Yourself, (C) 20 B.Com students who are actively job hunting?',
          options: [
            'Test with anyone - all feedback is equally valuable',
            'Test with REAL TARGET USERS (20 B.Com students actively job hunting) in REAL CONTEXT (they are actually creating resumes, preparing for interviews). They give honest, relevant feedback.',
            'Test with only your friends - they know you best',
            'Test with only experts (professors, career counselors)'
          ],
          correct: 1,
          explanation: 'Test with REAL TARGET USERS in REAL CONTEXT. Target users: B.Com students actively job hunting (not friends, not yourself, not random people). Real context: ACTUALLY creating resumes, preparing for interviews (not hypothetical: "Imagine job hunting"). Why? (1) Give honest feedback (friends polite: "It\'s great!"). (2) Have actual problem (job hunting), so feedback relevant. (3) Reveal real behavior (get confused by templates, need reviews). Testing with yourself = confirmation bias. Testing with friends = polite feedback. Testing with experts = academic feedback. Testing with real users = truth. Always test with 20+ target users in real context. Their feedback = product-market fit.'
        }
      ]
    },
    challenge: {
      title: 'Testing Challenge',
      description: 'Master user testing and validation',
      contexts: {
        academic: {
          title: 'Test Study Finder Assumptions',
          description: 'Study Group Finder app prototype. Assume "location+subject match." TEST it 15 students 3 days. Result: 53%→90% interest, free validated, 2 months saved!',
          instructions: [
            '• Write 5 hypotheses: Use app? Match criteria? Pay ₹200?',
            '• Test 15 students: 80% clarity, 53% interest, 20% pay',
            '• Quantitative: H5 invalidated—too expensive, make FREE',
            '• Qualitative: Interview 7 who prefer WhatsApp—why?',
            '• Refine v0.2: Add filters, verified profiles, FREE—validated!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague hypotheses—write clear testable',
            '• Test 3—need 15-20 for patterns',
            '• Ask only—observe behavior too',
            '• Ignore rejecters—they tell WHY',
            '• Test once—iterate v0.1→0.2→0.3'
          ],
          successCriteria: [
            '✅ 5 hypotheses written clearly',
            '✅ 15 students tested, data gathered',
            '✅ H5 invalidated: make FREE',
            '✅ Competition insight: vs WhatsApp',
            '✅ v0.2 validated, 2 months saved!'
          ]
        },
        professional: {
          title: 'Test AI Recs Low Adoption',
          description: 'PM, AI course recs. 3mo, ₹5L invested. Launch: 10% adoption only. TEST why low, what want 1 week. Result: Pivot peer reviews, 10%→70% adoption, CEO praises!',
          instructions: [
            '• Hypotheses: 5 reasons WHY low adoption (trust, relevance, previews)',
            '• Interview 20: 10 users, 10 non-users—trust peers NOT AI',
            '• Observe 10: Scroll past AI, read peer reviews instead',
            '• Measure: AI 33%, peers 92%—pivot peer-driven',
            '• Present pivot: CEO approved—10%→70% adoption!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Interview adopters only—interview non-users',
            '• Confirmation bias—test to invalidate',
            '• Ask, don\'t observe—watch behavior',
            '• "Spent ₹5L!"—pivot on data',
            '• Vague "some don\'t"—measure everything'
          ],
          successCriteria: [
            '✅ 5 hypotheses written',
            '✅ 20 interviewed: users + non-users',
            '✅ 10 observed: ignore AI, trust peers',
            '✅ Data: 92% trust peers > 33% AI',
            '✅ Pivot approved: 10%→70% adoption!'
          ]
        },
        personal: {
          title: 'Test 5AM Routine Reality',
          description: 'Want productivity. Assume "5AM + 3hr study = productive." Sounds great. TEST 1 week, not commit 3mo. Result: 5AM 33% fail, refine 5:30AM 1.5hr 100% success!',
          instructions: [
            '• Write hypothesis: "5AM + 3hr → 50% more work"',
            '• Test 3 days: Day 1 success, Day 2 fail—33% success',
            '• Analyze WHY: Only 5hr sleep, 3hr too ambitious',
            '• Refine: 5:30AM, 1.5hr, sleep 10PM—test 3 more',
            '• Validated: 100% success, sustainable—commit 1mo!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "5AM tomorrow!"—test 3 days first',
            '• No tracking—document daily data',
            '• "I\'m lazy"—analyze WHY failed',
            '• Fail, quit—iterate until works',
            '• "100% or fail"—80% = success'
          ],
          successCriteria: [
            '✅ Hypothesis written clearly',
            '✅ 3 days tested: 33% success',
            '✅ WHY analyzed: sleep, ambition',
            '✅ Refined: 100% success rate',
            '✅ 1mo committed, sustainable!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🧪 Clear Hypothesis Creation: You write clear, testable hypotheses before testing. Example: "B.Com students will use resume templates to create resumes (not hire writers)." This hypothesis is measurable (did they use templates? 3/20 = 15%). Clear hypothesis = clear test = clear decision (15% adoption = hypothesis invalidated, pivot). You do not test vaguely ("Let me see if students like it"). You test specifically. This enables data-driven decisions.',
        '👥 Real User Testing: You test with 20 B.Com students (target users), not yourself or friends. You test in real context (they are actually job hunting, not hypothetical). Result: Honest feedback ("We need reviews, not templates"). You avoid confirmation bias (testing with yourself) and politeness bias (testing with friends). Real users = real insights. You build for THEM, not for YOU.',
        '👀 Behavioral Observation: You watch what users DO (download template, get confused, give up), not just what they SAY ("templates sound useful"). You observe: Screen (what they click), face (confusion? frustration?), actions (complete task? give up?). Behavior reveals truth (they need reviews, not templates). Words reveal politeness. You design for behavior, not intentions.',
        '📊 Quantitative + Qualitative Data: You gather numbers (15% adoption, 5 mins usage, 33% completion, 4/10 satisfaction) AND interviews (why did 85% not use templates? "We need reviews"). Numbers tell you WHAT happened (low adoption). Interviews tell you WHY (need personalized feedback, not generic tools). You combine both for complete understanding. Data-driven decisions > gut feelings.',
        '🎁 Welcome Negative Feedback: When 15/20 students say "This is not useful," you do not get defensive. You say: "Thank you! Tell me what WOULD be useful." You embrace negative feedback as free consulting. Users tell you: Build reviews, not templates. You pivot immediately (Day 1, ₹0 cost) instead of late (Month 4, ₹1L cost). Negative feedback early = gift. Negative feedback late = disaster.'
      ],
      improvements: [
        '📈 Test with Larger Samples: You test with 15-20 users (good). But for critical products, test with 50-100 users. Why? Larger sample = more confident insights. Example: 8/15 students want feature X (53% - moderate signal). 40/100 students want feature X (40% - weaker signal than you thought). Larger sample reveals: Feature X is not as important as small sample suggested. Improve: For startup ideas or major products, test with 50-100 users before building.',
        '🧪 Test Multiple Hypotheses Simultaneously: You test 1 hypothesis at a time (students need templates). Sequential testing is slow (1 week per hypothesis = 5 weeks for 5 hypotheses). Improve: Test 5 hypotheses simultaneously in 1 testing session. Show prototype, measure: (1) Do they use templates? (2) Do they use interview questions? (3) Do they read company research? (4) Do they want reviews? (5) Will they pay? Result: 5 hypotheses tested in 1 week (not 5 weeks). Parallel testing = faster learning.',
        '🔬 A/B Test Variations: You test 1 version (resume templates). But you do not test variations. Improve: Test 2-3 variations simultaneously. Version A: Resume templates (generic). Version B: Resume templates + examples (show filled template). Version C: Resume review service (personalized feedback). Test with 20 students (7 test A, 7 test B, 6 test C). Measure adoption. Result: A = 15%, B = 30%, C = 85%. Insight: Examples help (B > A), but reviews are best (C > B). A/B testing reveals: Which variation works best?',
        '📊 Track Longitudinal Data: You test for 1 day (snapshot). But behavior changes over time. Example: Day 1: Student uses templates enthusiastically. Week 2: Student stopped using (initial motivation faded). Improve: Test for 2-4 weeks to see sustained behavior. Day 1 enthusiasm ≠ Week 4 sustained usage. Design for Week 4 reality (add reminders, reduce friction, gamify), not Day 1 excitement. Longitudinal testing = sustainable product design.',
        '🎯 Test Willingness to Pay Earlier: You validate "students like it" but test "students will PAY" late (after building). Improve: Test willingness to pay in paper prototype stage. Ask: "Would you pay ₹500 for this?" If 80% say yes, build paid product. If 20% say yes, build free product (monetize with ads or later). Testing willingness to pay early prevents: Building paid product nobody will pay for. In B.Com, always test pricing before building.'
      ],
      nextSteps: [
        '📚 Study Advanced Testing Methods: Read "The Mom Test" by Rob Fitzpatrick (how to ask questions users cannot lie to), "Testing Business Ideas" by David Bland (systematic validation), "Lean Analytics" by Alistair Croll (metrics for startups). Apply: Learn A/B testing, cohort analysis, funnel metrics, NPS (Net Promoter Score). Advanced testing = deeper insights.',
        '🧠 Build a Testing Library: Create a document: "User Testing Insights by Project." For each project you test, document: (1) Hypotheses (what you tested), (2) Test results (validated or invalidated), (3) Quantitative data (adoption %, time spent, satisfaction), (4) Qualitative insights (why users behaved this way), (5) Decision (build, pivot, shelve). Over 10 tests, you will see patterns: "Users always want simplicity over features. I should test for simplicity first." This library accelerates future testing.',
        '🎯 Practice Weekly Testing: Test 1 assumption per week for 12 weeks. Week 1: "Students need resume templates" (test with 20 students). Week 2: "Students will pay ₹500 for reviews" (test pricing). Week 3: "Students want mock interviews" (test demand). Weekly testing builds muscle memory. After 12 weeks, testing becomes automatic. You will test EVERY assumption before building. This prevents expensive mistakes.',
        '👥 Teach Testing to 3 People: The best way to master testing is to teach it. Walk 3 friends through user testing for their ideas. Teach: (1) Write clear hypotheses (testable statements), (2) Test with 20 real users (not friends), (3) Observe behavior (what they DO > what they SAY), (4) Gather quantitative + qualitative data, (5) Validate or invalidate hypotheses, (6) Pivot based on data. When you teach, you discover gaps in your own understanding. You also save your friends from building wrong things.',
        '📊 Track Testing ROI: For each test, calculate ROI. Example: Resume templates. Time invested: 1 day testing. Cost: ₹0. Learning: "15% adoption = templates are not the solution. Pivot to reviews." Savings: 2 months (not building templates) + ₹1L (not wasted on development). ROI: ₹1L saved / 1 day = ₹1L/day. Document: "1 day of testing saved ₹1L and 2 months." This data proves: Testing is not "wasting time." It is high-ROI risk management. Use this to convince teams: "Invest 1 day in testing, save 2 months of building wrong things."'
      ]
    },
    badge: { name: 'Testing Expert', emoji: '🧪', description: 'Master of user validation' },
    shareMessage: 'Just mastered user testing! 🧪 #DesignThinking #UserTesting'
  },
  {
    id: 'iteration',
    title: 'Iteration',
    emoji: '🔄',
    context: 'professional' as const,
    discover: {
      scenario: "Study planner. You: V1.0 = 6/10. 'Failed!' Gave up. Competitor: V1.0 = 5/10. Didn't give up. V1.1, V1.2, V1.3, V1.4 = 9/10, 1000 users. 3 months.",
      problemExplanation: [
        "Perfectionism: Wanted V1.0 = 10/10. Spent 4 months. Launch: 6/10. 'Failed!' V1.0 NEVER perfect",
        "Fear iteration: 'If iterate, I failed.' Paralyzed. Stay 6/10. Iteration = PROGRESS. They iterated to 9/10",
        "Don't build on learnings: Feedback 'Want estimates.' Documented... did nothing. They built V1.1, V1.2, V1.3. 5/10 → 9/10",
        "Wait perfect: 'Add V2.0, 6 months.' Competitor: 'Add V1.1, next week.' They ship weekly (24×/year)"
      ],
      solutionApproach: [
        "Iterative mindset: V1.0 = FIRST iteration. V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (9/10)",
        "Build-Measure-Learn: BUILD V1.0 → MEASURE (6/10, 'want estimates') → LEARN → BUILD V1.1 → MEASURE (7/10)",
        "Ship 'good enough': Don't wait 10/10. Ship 6/10, iterate. V1.0 → V1.4 in 3 months. Users guide",
        "Improve incremental: Don't jump 6/10 → 10/10. Go 6/10 → 7/10 → 8/10 → 9/10. Each = 1-2 features"
      ]
    },
    video: {
      title: 'From 5/10 to 9/10: The Power of Iteration for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY THEY WON AND YOU STAYED STUCK

"You launched study planner app. V1.0: 6/10 satisfaction, 50 users. You thought: 'I failed. Only 6/10.' You gave up. Competitor launched. V1.0: 5/10 satisfaction (worse than you!), 30 users. They did not give up. They iterated 4 times in 3 months. V1.4: 9/10 satisfaction, 1000 users. They went from 5/10 to 9/10. You stayed at 6/10. The difference? Iteration. They embraced 'ship imperfect, improve continuously.' You demanded 'perfect before shipping.' By the end of this video, you will learn iteration - the path from good to great. Let us fix this."

[0:45-2:15] ITERATION IS PROGRESS, NOT FAILURE

"You think: 'If I need V1.1, it means V1.0 failed.' WRONG.

V1.0 (6/10) = Your FIRST attempt based on assumptions.
V1.1 (7/10) = IMPROVEMENT based on user feedback.
V1.2 (8/10) = MORE improvement.
V1.3 (9/10) = EVEN MORE improvement.

Each iteration = PROGRESS, not failure.

COMPETITOR MINDSET:
V1.0 (5/10): 'This is our first attempt. We will improve based on your feedback. Tell us what is missing!'
Users: 'We want time estimates.'
V1.1 (7/10): Added time estimates. 'Thank you for feedback! What else?'
Users: 'We want subject grouping.'
V1.2 (8/10): Added grouping. 'Keep the feedback coming!'

They EMBRACED iteration. Users became co-creators. Result: 5/10 → 9/10.

YOUR MINDSET:
V1.0 (6/10): 'I spent 4 months. Only 6/10? I failed.'
You: (Give up. No V1.1.)

You FEARED iteration. Users had no voice. Result: Stayed at 6/10.

SHIFT YOUR MINDSET:
Iteration = Progress.
V1.0 = Starting point (not failure).
V1.1, V1.2, V1.3 = Improvement (not admitting failure).

Embrace iteration. Improve continuously. Win."

[2:15-3:45] BUILD-MEASURE-LEARN CYCLE (Repeat Every Week)

"Design thinking is a CYCLE, not a line.

LINEAR THINKING (You):
Research → Design → Build → Launch → Done.
(Stops after launch. No improvement. Stagnant.)

CYCLICAL THINKING (Competitor):
BUILD: Launch V1.0 (4 features, 1 month)
↓
MEASURE: 50 users, 6/10 satisfaction, 40% retention. Feedback: 'We want time estimates.'
↓
LEARN: Time estimates = high priority (8/10 users requested). Build this in V1.1.
↓
BUILD: Add time estimates (1 week)
↓
MEASURE: 80 users, 7/10 satisfaction, 60% retention (+1 point, +20% retention)
↓
LEARN: Time estimates worked! Next: Subject grouping (6/10 users requested).
↓
BUILD: Add grouping (1 week)
↓
MEASURE: 200 users, 8/10 satisfaction...
↓
REPEAT FOREVER

Each cycle: 1-2 weeks.
Cycles per year: 24-48.
Improvements per year: 24-48.

You do 2 cycles/year (6-month releases).
They do 24 cycles/year (weekly releases).
They learn 12× faster. They improve 12× faster. They win.

Build-Measure-Learn. Repeat. Forever."

[3:45-5:15] SHIP GOOD ENOUGH (Not Perfect)

"Perfectionism kills products.

YOU: 'I will launch when it is perfect (10/10).'
Result: You wait 6 months. Launch at 8/10. Competitor already at 9/10 (they shipped 6/10 in 1 month, iterated for 3 months).

COMPETITOR: 'I will launch when it is good enough to learn from users (6/10).'
Result: They ship in 1 month. Users give feedback. They iterate to 9/10 in 3 months total.

TIMELINE COMPARISON:
You: Month 1-6 (building, trying to be perfect) → Month 6 (launch at 8/10) → Month 7-12 (stagnant at 8/10)
Them: Month 1 (launch at 6/10) → Month 2 (iterate to 7/10) → Month 3 (iterate to 8/10) → Month 4 (iterate to 9/10) → Month 5-12 (continue improving to 9.5/10)

They reach 9/10 in Month 4. You reach 8/10 in Month 6. They win.

LESSON: Good enough + fast iteration > perfect + slow shipping.

Ship at 6/10. Iterate to 9/10. Beat perfectionists who wait for 8/10."

[5:15-6:30] INCREMENTAL IMPROVEMENT (Small Steps, Big Impact)

"Do not try to jump from 6/10 to 10/10 in one iteration.

YOU: V1.0 (6/10) → V2.0 with 10 features (trying to reach 10/10) → 3 months later → V2.0 (6.5/10). Only 0.5 improvement! Why? 8/10 features were not important.

COMPETITOR: V1.0 (6/10) → V1.1 with 1 feature (time estimates) → 1 week later → 7/10 (+1 point). → V1.2 with 1 feature (grouping) → 1 week later → 8/10 (+1 point). → V1.3 with 1 feature (priority) → 1 week later → 8.5/10 (+0.5 point).

They improved 6/10 → 8.5/10 in 3 weeks (1 feature per week).
You improved 6/10 → 6.5/10 in 3 months (10 features at once).

WHY?
- They focused on HIGH-IMPACT features (time estimates = +1 point).
- You scattered effort on LOW-IMPACT features (8/10 features = +0.1 point each).

LESSON: Incremental improvement (1 feature per week) > big-bang releases (10 features per quarter).

Measure impact of EACH feature. Build high-impact features first. Iterate weekly."

[6:30-7:30] DOCUMENT LEARNINGS (Get Smarter Each Cycle)

"After each iteration, document what you learned.

V1.0 → V1.1 LEARNINGS:
- Added: Time estimates
- Impact: Satisfaction 6/10 → 7/10 (+1 point), Retention 40% → 60% (+20%)
- Learning: 'Time estimates are HIGH-IMPACT. Users want to know: How long will this take?'
- Next priority: Subject grouping (6/10 users requested)

V1.1 → V1.2 LEARNINGS:
- Added: Subject grouping
- Impact: Satisfaction 7/10 → 8/10 (+1 point), Users 80 → 200 (2.5× growth)
- Learning: 'Grouping reduces cognitive load. Users want organized lists, not chaos.'
- Next priority: Priority levels (5/10 users requested)

Over 10 iterations, you will see PATTERNS:
- 'Users always want simplicity over features.'
- 'High-impact features improve satisfaction by +1 point.'
- 'Low-impact features improve by +0.1 point.'

These patterns make you smarter. You predict: 'This feature will be high-impact' (before building). You prioritize better. You iterate smarter.

Document learnings. Compound wisdom."

[7:30-8:00] YOUR CHALLENGE (Iterate 3 Times)

"Here is your action step: Pick a project (app, service, routine, process).

1. Launch V1.0: Good enough (6/10), not perfect
2. MEASURE: Track metrics (users, satisfaction, retention). Gather feedback.
3. LEARN: What is the #1 priority? (Most requested feature.)
4. BUILD V1.1: Add ONLY that 1 feature (1 week)
5. MEASURE: Did satisfaction improve? By how much?
6. LEARN: What worked? What is next priority?
7. BUILD V1.2: Add next feature
8. REPEAT 3 times (V1.0 → V1.1 → V1.2 → V1.3)

Total: 3 iterations in 3 weeks. You will improve 6/10 → 8/10+ through iteration.

Stop waiting for perfect. Start shipping good enough. Iterate to great."

[End Screen: "Next Video: User-Centered Design - Put Users First"]`,
      content: [
        'Iteration is Progress, Not Failure: V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) = continuous improvement',
        'Build-Measure-Learn Cycle: Build V1.0 → Measure (satisfaction, feedback) → Learn (priorities) → Build V1.1 → Repeat',
        'Ship Good Enough: Launch at 6/10 (not 10/10), iterate to 9/10 in 3 months',
        'Incremental Improvement: Add 1 feature per week (not 10 features per quarter)',
        'Document Learnings: Track what worked, what did not, why (patterns emerge over 10 iterations)',
        'Progress Over Perfection: Celebrate improvement (6/10 → 8/10), not mourn imperfection (not 10/10)',
        'B.Com Applications: Product development, skill building, process improvement, continuous learning'
      ]
    },
    quiz: {
      title: 'Iteration Quiz',
      questions: [
        {
          id: 21,
          question: 'You launched study planner app V1.0 (6/10 satisfaction). You think: "I failed. Only 6/10. I should give up." Your competitor launched V1.0 (5/10), iterated 4 times, reached V1.4 (9/10). What does this show?',
          options: [
            'Iteration means failure - your competitor failed 4 times',
            'Iteration is the path to better solutions. V1.0 (5/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (8.5/10) → V1.4 (9/10) = continuous improvement, not failure.',
            'Iteration should be avoided - get it perfect first time',
            'Iteration wastes time - better to wait for perfect'
          ],
          correct: 1,
          explanation: 'Iteration = path from good to great, not sign of failure. Competitor started 5/10 (worse than your 6/10) but iterated 4 times based on user feedback. Each iteration improved: V1.1 added time estimates (7/10), V1.2 added grouping (8/10), V1.3 added priority (8.5/10), V1.4 added collaboration (9/10). Went from 5/10 to 9/10 in 3 months through iteration. You stayed at 6/10 because thought "iteration = failure." Reality: Iteration = progress. Each version builds on learnings from previous. Embrace iteration. Ship V1.0 (good enough), gather feedback, iterate weekly. V1.0 → V1.10 in 10 weeks = 10 improvements. Waiting for perfect = 0 improvements.'
        },
        {
          id: 22,
          question: 'Your study planner app V1.0 has 4 features. Users want time estimates. You build V1.1. Do you start from scratch or build on V1.0?',
          options: [
            'Start from scratch - rebuild everything',
            'Build on learnings from V1.0. Keep the 4 features that work, ADD time estimates (5th feature). Each iteration builds on previous, not replaces it.',
            'Make V1.1 identical to V1.0',
            'Make V1.1 worse by removing features'
          ],
          correct: 1,
          explanation: 'Each iteration BUILDS ON learnings from previous, not starts from scratch. V1.0 has 4 features (add task, view list, check off, progress). Users love these (6/10 satisfaction). Users want time estimates. V1.1 = Keep 4 features + ADD time estimates (5th feature). Don\'t rebuild from scratch (waste time). Don\'t remove features (users love them). ADD based on feedback. Result: V1.1 (5 features) > V1.0 (4 features). Satisfaction: 6/10 → 7/10. Each iteration = incremental improvement, not complete overhaul. Iteration means: Keep what works, add what\'s missing, remove what doesn\'t work. Build on learnings, not start over.'
        },
        {
          id: 23,
          question: 'You built study planner app. It is at 6/10 satisfaction. When should you ship it?',
          options: [
            'Wait until it is perfect (10/10) - might take 6 more months',
            'Ship NOW at 6/10 (good enough to learn from users). Gather feedback. Iterate to 9/10 in 3 months. Good enough + fast iteration > perfect + slow shipping.',
            'Never ship - it is not ready',
            'Ship without any testing'
          ],
          correct: 1,
          explanation: 'Ship "good enough to learn from users" (6/10), not "perfect" (10/10). Why? (1) Learn faster: Ship V1.0 at 6/10 in Month 1, get feedback ("want time estimates"), iterate. (2) Improve faster: V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (9/10) in 3 months. (3) Users guide you: Tell what to build next. Waiting for perfect: Month 1-6 (building, trying reach 10/10), Month 6 (launch at 8/10), competitor already 9/10 (shipped 6/10 in Month 1, iterated). Perfectionism delays learning. Ship at 6-7/10 (good enough), iterate weekly. Reach 9/10 in 3 months (vs waiting 6 months for 8/10). Good enough + iteration > perfect + waiting.'
        },
        {
          id: 24,
          question: 'You launched study planner V1.0 (6/10). Users want time estimates. You think: "I will add time estimates + 9 other features in V2.0 (big release in 3 months)." What is wrong with this mindset?',
          options: [
            'Nothing - big releases are better than small iterations',
            'You are trying to get it right first time (V2.0 with 10 features = perfect). Iteration mindset: Learn and improve CONTINUOUSLY (V1.1 with 1 feature next week, V1.2 with 1 feature week after). Weekly iteration > quarterly big-bang.',
            'You should avoid making any changes',
            'You should never finish - keep iterating forever without shipping'
          ],
          correct: 1,
          explanation: 'Iteration mindset = learn and improve continuously (weekly small releases), not get it right first time (quarterly big releases). Plan V2.0 with 10 features in 3 months. Problem: (1) Slow learning (learn once every 3 months). (2) High risk (what if 8/10 features not important? Wasted 3 months). (3) Scattered focus (10 features at once = none excellent). Better: V1.1 with 1 feature (time estimates) next week. Measure: Satisfaction improve? (6/10 → 7/10? Yes!). Learn: Time estimates high-impact. V1.2 with 1 feature (grouping) week after. Iterate weekly. Result: 12 iterations in 3 months (vs 1 big release). Learn 12×, improve 12×. Continuous small iterations > infrequent big releases. Weekly learning > quarterly learning.'
        },
        {
          id: 25,
          question: 'Your study planner app follows Build-Measure-Learn cycle. V1.0 (6/10) → Measure (users want time estimates) → Learn (priority #1) → Build V1.1 (add time estimates) → Measure (7/10) → Learn (users want grouping) → Build V1.2. How many times should this cycle repeat?',
          options: [
            'Once - after V1.0, you are done',
            'CONTINUOUSLY - repeat forever. Each cycle improves the product. V1.0 → V1.1 → V1.2 → V1.3 → V1.4... Never stop iterating. Continuous improvement = competitive advantage.',
            'Build-Measure-Learn is optional - only if you have time',
            'Too slow - skip measuring and learning, just build'
          ],
          correct: 1,
          explanation: 'Build-Measure-Learn cycle = repeats CONTINUOUSLY, not once. Why? (1) User needs evolve: V1.0 users want time estimates. V1.1 users want grouping. V1.2 users want priority. V1.3 users want collaboration. Needs change as product matures. (2) Competition evolves: Competitor adds new features. Must iterate to stay ahead. (3) You learn: Each cycle teaches what users value. 10 cycles = 10 lessons. Stop iterating = stop learning = stagnate. Competitor iterates 24 times/year (weekly). You iterate 2 times/year (6-month releases). They learn 12× faster, improve 12× faster, grow 12× faster. Make Build-Measure-Learn default process. After every release, measure, learn, build next iteration. Never stop. Continuous iteration = continuous improvement = market leadership.'
        }
      ]
    },
    challenge: {
      title: 'Iteration Challenge',
      description: 'Master iterative improvement',
      contexts: {
        academic: {
          title: 'Iterate Paper 5→8.5 Win',
          description: 'Research paper v1.0: 3000w, 5/10. "Lacks data, weak analysis, no examples." Disappointed. ITERATE not quit. Result: 3 iterations 10 days, 5/10→8.5/10 Professor praises!',
          instructions: [
            '• Analyze v1.0 feedback: 3 priorities—data, analysis, cases',
            '• v1.1 add data: 10 data points, 3 charts—5→6.5/10',
            '• v1.2 add analysis: Explain WHY for each—6.5→7.5/10',
            '• v1.3 add cases: Amazon + Shoppers Stop—7.5→8.5/10',
            '• Total: 5→8.5/10 in 10 days, iteration = improvement!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "5/10? Failed, quit"—iterate, v1.0 = starting point',
            '• Fix all at once—overwhelmed, 1 per iteration',
            '• No feedback between—measure each iteration',
            '• Ignore feedback—address directly',
            '• Rewrite entire—incremental improvement'
          ],
          successCriteria: [
            '✅ v1.0 feedback analyzed, prioritized',
            '✅ v1.1 data: 5→6.5/10 (+1.5)',
            '✅ v1.2 analysis: 6.5→7.5/10 (+1)',
            '✅ v1.3 cases: 7.5→8.5/10 (+1)',
            '✅ Total: 5→8.5/10 in 10 days!'
          ]
        },
        professional: {
          title: 'Iterate Job Prep 5→8.5 Boss',
          description: 'Job prep v1.0: templates, questions, research. 50 users, 5/10, ₹0. Disappointed. CEO: "Iterate!" Result: 4 iterations 6 weeks, 5→8.5/10, ₹0→₹2L revenue!',
          instructions: [
            '• Measure v1.0: 50 users, 5/10, ₹0—67% want reviews',
            '• v1.1 reviews: ₹500/review—7/10, ₹25K (+2 points)',
            '• v1.2 mock interviews: ₹800—8/10, ₹80K (+1 point)',
            '• v1.3 referrals: ₹2K, alumni network—8.5/10, ₹2L!',
            '• Total: 5→8.5/10, ₹0→₹2L in 6 weeks—product-market fit!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "5/10? Failed, quit"—iterate instead',
            '• Add all 3 at once—do 1 per week',
            '• No measurement—measure each iteration',
            '• Ignore revenue—track satisfaction + revenue',
            '• Slow releases—iterate weekly'
          ],
          successCriteria: [
            '✅ v1.0 measured: 5/10, ₹0',
            '✅ v1.1: Reviews, 7/10, ₹25K',
            '✅ v1.2: Mock, 8/10, ₹80K',
            '✅ v1.3: Referrals, 8.5/10, ₹2L',
            '✅ CEO: "Outstanding product-market fit!"'
          ]
        },
        personal: {
          title: 'Iterate Freelance ₹3K→₹25K Win',
          description: 'Freelance v1.0: general services 5 types. 2 clients, ₹3K, exhausted. Disappointed. ITERATE not quit. Result: Focus resume writing, 4 iterations 7 weeks, ₹3K→₹25K/mo!',
          instructions: [
            '• Measure v1.0: ₹3K, ₹100/hr, exhausted—resume most profitable',
            '• v1.1 focus resume: ₹500-₹1.5K packages—₹6K, ₹500/hr',
            '• v1.2 add LinkedIn: ₹2K bundles—₹10K revenue',
            '• v1.3 add mock: ₹3.5K bundles—₹18K revenue',
            '• Optimize prices: Bundles ₹4K—₹25K/mo, 8× growth!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Offer 5 services—focus 1 high-value',
            '• No tracking—measure each iteration',
            '• Ignore requests—listen, add next',
            '• Stop at ₹18K—optimize to ₹25K',
            '• "₹3K doesn\'t work"—iterate 2-3mo first'
          ],
          successCriteria: [
            '✅ v1.0: ₹3K, exhausted measured',
            '✅ v1.1: Resume focus, ₹6K (2×)',
            '✅ v1.2: LinkedIn, ₹10K revenue',
            '✅ v1.3: Mock bundles, ₹18K',
            '✅ Optimized: ₹25K/mo, 8× growth!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🔄 Iterative Mindset: You embrace iteration as progress, not failure. When V1.0 scores 6/10, you do not give up. You iterate: V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (9/10). Each iteration improves based on user feedback. You understand: V1.0 is the starting point, not the finish line. Iterative mindset = growth mindset. You are never "done." You are always improving.',
        '📊 Build-Measure-Learn Discipline: After each iteration, you follow the cycle. BUILD V1.0 → MEASURE (50 users, 6/10 satisfaction, feedback: "want time estimates") → LEARN (time estimates = priority #1) → BUILD V1.1 (add time estimates) → MEASURE (80 users, 7/10, +1 point) → LEARN (time estimates worked!) → Repeat. You do not skip steps. You measure EVERY iteration. You learn from EVERY cycle. Result: 24 cycles/year (weekly releases) = 24 improvements/year.',
        '🚀 Ship Good Enough: You ship V1.0 at 6/10 (good enough to learn), not wait for 10/10 (perfect). This enables fast learning. You ship in Month 1 (6/10), gather feedback, iterate to 9/10 by Month 3. Competitor waits for perfect, ships in Month 6 (8/10). You reach 9/10 before they reach 8/10. Shipping good enough + fast iteration > waiting for perfect. You win through speed, not perfection.',
        '📈 Incremental Improvement: You add 1-2 features per iteration (not 10 features at once). V1.1: Add time estimates (1 week). Measure: +1 point satisfaction. V1.2: Add grouping (1 week). Measure: +1 point. Each iteration is focused, measurable, fast. You do not scatter effort on 10 features (cannot measure individual impact). You focus on 1 feature (clear impact: +1 point). Incremental = sustainable. Big-bang = risky.',
        '📚 Document Learnings: After each iteration, you document: What worked? (Time estimates = +1 point.) What did not? (Analytics dashboard = +0.1 point, low impact.) Why? (Users want actionable features, not passive dashboards.) Over 10 iterations, you see patterns: "Users always want simplicity over complexity." These learnings compound. You get smarter with each iteration. You predict feature impact before building. Documented learnings = compounding wisdom.'
      ],
      improvements: [
        '⚡ Iterate Even Faster: You iterate weekly (1 feature per week). Good. But you can go faster. Improve: Iterate every 3 days for small features (bug fixes, UI tweaks, minor improvements). Reserve weekly iterations for major features (new functionality). Result: 100+ iterations/year (vs 24 weekly). More iterations = more learning = faster improvement. Speed matters. Competitor iterates daily (365 times/year). You iterate weekly (52 times/year). They learn 7× faster.',
        '📊 Measure More Metrics: You measure satisfaction (6/10 → 7/10) and users (50 → 80). Good. But measure more: (1) Retention (40% → 60%?), (2) Revenue (₹0 → ₹25K?), (3) NPS (Net Promoter Score: would users recommend?), (4) Feature usage (how many use time estimates?), (5) Time spent (10 mins/day → 15 mins/day?). More metrics = deeper understanding. You learn: Time estimates improved retention +20% (high-impact). Analytics dashboard improved retention +2% (low-impact). Prioritize high-impact features.',
        '🧪 A/B Test Iterations: You build V1.1 (add time estimates) and release to all users. But you do not A/B test. Improve: Release V1.1 to 50% of users (Group A), keep V1.0 for 50% (Group B). Measure: Group A satisfaction = 7/10. Group B satisfaction = 6/10. Difference = +1 point (time estimates impact). A/B testing isolates feature impact. You know EXACTLY how much each feature improves satisfaction. This guides future iterations.',
        '📈 Learn from Failed Iterations: You iterate 10 times. 8 iterations improve satisfaction (+0.5 to +1 point each). 2 iterations do NOT improve (analytics dashboard = +0.1 point, social features = -0.2 points, users found it distracting). You document successful iterations but ignore failed ones. Improve: Document failed iterations too. "Social features decreased satisfaction by 0.2 points. Learning: Users want focus, not distractions. Remove social features in next iteration." Failed iterations teach you what NOT to build. This is valuable.',
        '🔄 Iterate on Iteration Process: You iterate on your product (V1.0 → V1.3). But you do not iterate on your ITERATION PROCESS. Improve: After 10 iterations, review your process. "I iterate weekly. Is this optimal? Should I iterate every 3 days? Should I measure more metrics? Should I A/B test?" Iterate on your process itself. Example: You discover "Weekly iterations work for features, but daily iterations work for bug fixes." Refine process. Meta-iteration = process improvement.'
      ],
      nextSteps: [
        '📚 Study Iteration Frameworks: Read "The Lean Startup" by Eric Ries (Build-Measure-Learn cycle), "Sprint" by Jake Knapp (Google Ventures 5-day iteration process), "Continuous Discovery Habits" by Teresa Torres (weekly iteration for product teams). Apply: Learn different iteration cadences (daily, weekly, monthly). Practice: Use Sprint method for 1 project (5-day iteration). Compare with weekly iteration. Which works better for which problems?',
        '🧠 Build an Iteration Log: Create a spreadsheet: "My Iterations." Columns: Version, Date, Changes Made, Satisfaction (before/after), Users (before/after), Revenue (before/after), Learning, Next Priority. Document EVERY iteration. Example: V1.0 → V1.1 | Jan 1 → Jan 8 | Added time estimates | 6/10 → 7/10 | 50 → 80 users | ₹0 → ₹25K | Time estimates are high-impact (+1 point, ₹25K revenue) | Next: Add grouping. Over 50 iterations, this log reveals patterns and teaches you what works.',
        '🎯 30-Day Iteration Challenge: Pick a project (app, service, skill, routine). Iterate EVERY DAY for 30 days. Day 1: V1.0 (baseline). Day 2: V1.1 (1 small improvement). Day 3: V1.2 (another improvement). Day 30: V1.29 (30 iterations!). Measure: How much did you improve? (6/10 → 9/10? ₹3K → ₹25K?). Daily iteration builds muscle memory. After 30 days, iteration becomes automatic. You will iterate on EVERYTHING (products, skills, routines, relationships). Continuous improvement becomes your default mode.',
        '👥 Teach Iteration to 3 People: The best way to master iteration is to teach it. Walk 3 friends through iterative improvement for their projects. Teach: (1) Ship V1.0 (good enough, not perfect), (2) Measure (satisfaction, users, revenue, feedback), (3) Learn (what is priority #1?), (4) Build V1.1 (add 1 feature), (5) Repeat weekly. When you teach, you discover gaps in your own understanding. You also build a network of people who iterate (you can collaborate on future projects).',
        '📊 Track Iteration ROI: For each iteration, calculate ROI. Example: V1.0 → V1.1 (added time estimates). Time invested: 1 week. Cost: ₹5K (developer). Impact: Satisfaction 6/10 → 7/10 (+1 point), Users 50 → 80 (+60%), Revenue ₹0 → ₹25K. ROI: ₹25K revenue / ₹5K cost = 500%. Document: "1 week iteration generated ₹25K revenue, 500% ROI." This data proves: Iteration is not "wasting time tweaking." It is high-ROI strategic improvement. Use this to convince teams: "Invest 1 week per iteration, generate 500% ROI."'
      ]
    },
    badge: { name: 'Iteration Master', emoji: '🔄', description: 'Expert in continuous iteration' },
    shareMessage: 'Just mastered iterative design! 🔄 #DesignThinking #Iteration'
  },
  {
    id: 'user-centered-design',
    title: 'User-Centered Design',
    emoji: '👥',
    context: 'professional' as const,
    discover: {
      scenario: "AI Financial Planning App. Portfolio, tax, retirement, crypto, stocks. 'Cutting-edge AI!' Launch: 10 downloads, 1 user. Students: 'I have ₹500, not ₹5L. Just want: Can I afford weekend?' SplitWise (NO AI) = 5M users.",
      problemExplanation: [
        "Tech-first: Started 'I want AI.' Then found problem. Backwards! Should start 'What problems?' Then tech",
        "Design for self: You love finance. Designed portfolio, tax. Students have ₹500, want 'Afford weekend?'",
        "Skip users: Built 3 months, didn't talk to 1 student. No interviews, prototypes, testing",
        "Feature-driven: Focused FEATURES (AI, 15 tools). Not OUTCOMES. Outcome: 'Afford weekend?' Features: portfolio. MISMATCH!"
      ],
      solutionApproach: [
        "Involve users: EVERY stage. Week 1: Interview 20. Week 2: Brainstorm WITH users. Week 3: Paper prototype. Week 4+: Build, test weekly",
        "Start outcomes: 'What achieve?' (1) Afford weekend, (2) Split bills, (3) Track overspending. THEN features",
        "Accessibility: Visual (screen reader, high contrast), Motor (keyboard, large tap), Cognitive (simple language), Contexts (2G, old phones)",
        "Measure user satisfaction: Are users satisfied? Achieve goal? User metrics (satisfaction, completion, retention) = ends"
      ]
    },
    video: {
      title: 'Why SplitWise (No AI) Beat Your AI App: User-Centered Design',
      duration: 8,
      script: `[0:00-0:45] YOU BUILT FOR TECH, THEY BUILT FOR USERS

"You built AI-powered financial planning app. Features: Portfolio optimization, tax planning, retirement calculator, crypto tracking. Cutting-edge AI! ML algorithms! Real-time data! Launch: 10 downloads, 1 user. Meanwhile, SplitWise (simple bill-splitting app, NO AI, basic tech) has 5 MILLION users. Why? You built for TECHNOLOGY (show off AI skills). They built for USERS (solve real student problem: split bills easily). You designed for YOURSELF (you love finance, AI). They designed for USERS (broke students who want simple budgeting). Result: Your impressive app failed. Their simple app succeeded. By the end of this video, you will learn user-centered design - put users at the center of EVERY decision. Let us fix this."

[0:45-2:15] START WITH USERS, NOT TECHNOLOGY

"You started WRONG.

YOUR PROCESS (Technology-First):
Step 1: 'I want to use AI and ML' (technology decision)
Step 2: 'What problem can I apply AI to?' (looking for problem to fit technology)
Step 3: 'Financial planning for students!' (forced fit)
Step 4: Build AI app (portfolio optimization, tax planning)
Step 5: Launch. 10 downloads. Fail.

SPLITWISE PROCESS (User-First):
Step 1: 'What problems do students have?' (user research)
Step 2: Interview 50 students. 'We struggle to split bills fairly. Always awkward asking friends for money.'
Step 3: 'Would bill-splitting app help?' (validate solution with users)
Step 4: Build simple bill splitter (no AI needed, basic calculator)
Step 5: Launch. 5 MILLION users. Success.

DIFFERENCE:
You: Technology → Problem (AI → financial planning)
Them: Problem → Technology (bill splitting → simple calculator)

You let technology drive design. They let users drive design.

USER-CENTERED DESIGN RULE #1:
Start with users (what problems do they have?), THEN find technology to solve it. Do NOT start with technology, then force it onto users."

[2:15-3:45] INVOLVE USERS THROUGHOUT (Not Just at Launch)

"You built for 3 months in isolation. No user interviews. No prototype testing. No user feedback. Then you launched. Result: You built the WRONG product.

If you had interviewed 10 students in WEEK 1:
You: 'Would you use portfolio optimization?'
Students: 'We have ₹500, not ₹5 lakhs. We do not invest.'
You: 'Tax planning?'
Students: 'We do not file taxes yet.'
You: 'Retirement calculator?'
Students: 'We are 20 years old. Retirement is 40 years away.'
You: 'What DO you need?'
Students: 'Can I afford weekend plans? That is it.'

ONE WEEK of user research would have saved you 3 MONTHS of building the wrong product.

USER-CENTERED DESIGN INVOLVES USERS AT EVERY STAGE:
Week 1: Interview users (what problems?)
Week 2: Brainstorm solutions WITH users (would this help?)
Week 3: Show paper prototype to users (refine based on feedback)
Week 4: Build MVP. Test with 30 users.
Week 5-52: Launch. Gather feedback. Iterate weekly.

Users are involved from Week 1 to Week 52. Not just at launch. THROUGHOUT."

[3:45-5:15] DESIGN FOR OUTCOMES, NOT FEATURES

"You focused on FEATURES (AI algorithms, 15 analysis tools, real-time data). You did not focus on OUTCOMES (what do users want to achieve?).

USER OUTCOME: 'I want to know if I can afford weekend plans without going broke.'

YOUR FEATURES:
- Portfolio optimization (does not help with weekend plans)
- Tax planning (does not help with weekend plans)
- Retirement calculator (does not help with weekend plans)
- Crypto tracking (does not help with weekend plans)

MISMATCH! Your features do not deliver the outcome users want.

SPLITWISE OUTCOME: 'I want to split bills fairly without awkwardness.'

THEIR FEATURES:
- Add expense (helps split bills)
- Auto-calculate who owes whom (helps split bills)
- Send payment reminders (helps split bills)

MATCH! Their features deliver the outcome users want.

USER-CENTERED DESIGN PROCESS:
Step 1: What do users want to ACHIEVE? (outcome: afford weekend plans)
Step 2: What features deliver this outcome? (simple dashboard: 'You spent ₹3000/₹5000. You can afford plans.')
Step 3: Build ONLY features that serve outcomes.

Do NOT build features because they are cool (AI!). Build features because they deliver user outcomes."

[5:15-6:30] MEASURE USER SATISFACTION, NOT TECH METRICS

"You measured TECH METRICS:
- AI accuracy: 95%
- Real-time data latency: 50ms
- Algorithm efficiency: O(log n)

You were PROUD of technical performance.

But you did NOT measure USER METRICS:
- User satisfaction: 1/10 (only 1 user finds it useful)
- Task completion: 10% (can users achieve their goal?)
- Time to value: 30 minutes (too long to set up)
- Retention: 0% (nobody comes back)

REALITY CHECK:
Your AI is 95% accurate. But users do not care. They care: Does this help me afford weekend plans? (No.) Then it is useless.

SPLITWISE measures USER METRICS:
- Satisfaction: 8.5/10 (users love it)
- Task completion: 95% (users successfully split bills)
- Time to value: 30 SECONDS (instant value)
- Retention: 80% (users come back weekly)

USER-CENTERED DESIGN RULE:
Optimize for USER metrics (satisfaction, task completion, retention), NOT tech metrics (accuracy, latency, efficiency).

Tech metrics matter to DEVELOPERS. User metrics matter to USERS. You are building for users, not developers."

[6:30-7:30] ACCESSIBILITY = LARGER USER BASE

"Your AI app:
- Requires high-speed internet (real-time data)
- Requires latest phone (ML algorithms)
- Requires financial knowledge (jargon: 'portfolio optimization', 'alpha', 'beta')
- English-only

RESULT: Only 10% of students can use it (urban, wealthy, English-speaking, tech-savvy).

SPLITWISE:
- Works on 2G internet (simple calculator, no real-time data)
- Works on 3-year-old phones (basic tech, no ML)
- Simple language (no jargon: 'You owe Rahul ₹200')
- Supports 10 languages (Hindi, Tamil, Telugu, etc.)

RESULT: 90% of students can use it (urban + rural, all income levels, all languages).

ACCESSIBILITY IS NOT 'NICE TO HAVE.' IT IS BUSINESS STRATEGY.

10% market (your app) vs 90% market (SplitWise). They have 9× larger market because they designed for accessibility.

USER-CENTERED DESIGN = INCLUSIVE DESIGN = LARGER MARKET."

[7:30-8:00] YOUR CHALLENGE (Redesign for Users)

"Here is your action step: Pick your AI financial app (or any product you built).

REDESIGN IT USER-CENTERED:
1. Interview 20 students: 'What financial problems do you have?' (NOT: 'Would you use my AI app?')
2. Identify top 3 problems (bill splitting, overspending tracking, affording plans)
3. Design features that solve THESE problems (not features YOU think are cool)
4. Build simple MVP (no AI needed if users do not need it)
5. Test with 30 students. Measure: Satisfaction? Task completion? Time to value?
6. Iterate based on feedback

RESULT: You will go from 1 user (tech-centered) to 1000 users (user-centered).

Stop building for technology. Start building for users."

[End Screen: "Next Module: Teamwork & Collaboration - Build Together"]`,
      content: [
        'Start with Users, Not Technology: Research user problems first, THEN find technology to solve them',
        'Involve Users Throughout: User research (Week 1) → Prototyping (Week 3) → Testing (Week 4) → Iteration (Week 5-52)',
        'Design for Outcomes: What do users want to achieve? Build features that deliver those outcomes',
        'Measure User Satisfaction: Optimize for user metrics (satisfaction, task completion, retention), not tech metrics',
        'Accessibility = Larger Market: Design for diverse users (all income levels, languages, internet speeds) = 9× larger market',
        'Iterate Based on Feedback: Users guide your roadmap through feedback, not your ego',
        'B.Com Applications: Product design, service design, app development, business model design'
      ]
    },
    quiz: {
      title: 'User-Centered Design Quiz',
      questions: [
        {
          id: 26,
          question: 'Want to build financial app for B.Com students. Which approach is user-centered design?',
          options: [
            'Start with technology (AI/ML), find problem to fit it',
            'Start with users: Interview students, discover problems (bill splitting, overspending), build solutions',
            'Designer decides everything based on expertise',
            'Ignore users, build what is technically impressive'
          ],
          correct: 1,
          explanation: 'User-centered design = starts with USERS (what problems?), THEN finds technology to solve. Interviewed 20 students, discovered real problems: bill splitting (not portfolio optimization), overspending tracking (not tax planning). Build features that solve THEIR problems (bill splitter, budget tracker), not features YOU think cool (AI, ML). Technology-first (start with AI, find problem to fit) = impressive but useless (10 downloads, 1 user). User-first (start with user problems, find technology) = simple but useful (5 million users like SplitWise). Always start with user research. Interview 20-50 users. Ask: "What problems?" NOT: "Would you use my AI app?" Build solutions for THEIR problems, not showcases for YOUR technology.'
        },
        {
          id: 27,
          question: 'You are building a study planner app. When should you involve users?',
          options: [
            'Only at end after launch to get feedback',
            'Throughout entire process: Interview, prototype, test MVP, iterate weekly. Users involved from start to finish.',
            'Never - you are expert, you know what users need',
            'Once at start to get ideas, then build in isolation'
          ],
          correct: 1,
          explanation: 'User-centered design = involves users THROUGHOUT entire process, not just at launch. Week 1: Interview 20 users ("What study problems?" Answer: "Forgetting deadlines, procrastination"). Week 2: Brainstorm solutions WITH users ("Would deadline reminders help?" Yes!). Week 3: Show paper prototype to 10 users, refine. Week 4: Build MVP, test with 30 users. Week 5-52: Launch, gather feedback, iterate weekly. Users involved from Week 1 to Week 52. Why? (1) Early involvement prevents building wrong product. (2) Continuous involvement enables iteration (users tell what to improve each week). Make user involvement continuous. Don\'t build 3 months in isolation, then launch. Build 1 week, test with users, iterate. Repeat 12 times in 3 months. 12 cycles of user feedback > 0 cycles.'
        },
        {
          id: 28,
          question: 'Your AI financial app requires high-speed internet, latest phone, and financial knowledge. Only 10% of students can use it. What does accessibility mean in user-centered design?',
          options: [
            'Accessibility only for people with disabilities - not relevant here',
            'Design usable by EVERYONE: Works on 2G internet, 3-year-old phones, simple language. Result: 90% can use it = 9× larger market.',
            'Accessibility is extra feature you add later if time',
            'Accessibility optional - focus on core features first'
          ],
          correct: 1,
          explanation: 'Accessibility = designing for EVERYONE, not just able-bodied, wealthy, urban, English-speaking users. Your AI app accessible to only 10% (requires high-speed internet = urban bias, latest phone = wealth bias, financial knowledge = education bias, English-only = language bias). Accessible design: (1) Works on 2G internet (rural students), (2) Works on 3-year-old phones (low-income students), (3) Simple language, no jargon (all education levels), (4) Supports Hindi, Tamil, Telugu (all language speakers). Result: 90% can use it. Accessibility NOT "nice to have." It\'s BUSINESS STRATEGY. 10% market (your app) vs 90% market (accessible app) = 9× larger market. SplitWise has 5M users because designed for accessibility. Your AI app has 1 user because designed for 10%. Accessibility = inclusivity = larger market = more revenue. Design for diverse users from Day 1.'
        },
        {
          id: 29,
          question: 'You tested your financial app with 10 urban, English-speaking, tech-savvy B.Com students. All loved it! You launch. Rural students complain: "Requires too much internet data." Hindi-speaking students complain: "English-only, cannot understand." Why should you test with diverse users?',
          options: [
            'Testing with diverse users wastes time - one type enough',
            'Test with diverse users to avoid bias: Urban + rural, English + Hindi speakers, tech-savvy + non-tech-savvy. Reveals hidden biases.',
            'Testing with diverse users complicates product',
            'Testing with diverse users delays launch - better launch fast'
          ],
          correct: 1,
          explanation: 'Testing with only ONE type of user (urban, English-speaking, tech-savvy) = creates BIAS. App works for them (high-speed internet, understand English, comfortable with tech). But FAILS for others (rural = slow internet, Hindi speakers = can\'t understand, non-tech-savvy = confused). Didn\'t discover these issues because didn\'t test with diverse users. Diverse testing reveals: (1) Urban bias (requires high-speed internet, rural have 2G), (2) Language bias (English-only, 60% prefer Hindi/regional), (3) Tech bias (assumes tech comfort, many struggle), (4) Wealth bias (assumes latest phone, many have 3-year-old). Test with diverse users: Urban + rural, English + Hindi + regional, tech-savvy + non-tech-savvy, high-income + low-income. Result: Design inclusive product that works for 90%, not just 10%. Diverse testing = larger market. Test diverse, design inclusive, win big.'
        },
        {
          id: 30,
          question: 'Your AI financial app has 95% AI accuracy, 50ms latency, O(log n) efficiency. You are proud! But only 1 user. What is the success metric in user-centered design?',
          options: [
            'Technical performance: AI accuracy, latency, algorithm efficiency',
            'User satisfaction and outcomes: Help users achieve goal? Satisfaction 8/10? Task completion 95%? Retention 80%? These prove app useful.',
            'Budget: Did you build it under budget?',
            'Speed: Did you launch fast?'
          ],
          correct: 1,
          explanation: 'User-centered design = measures USER METRICS (satisfaction, task completion, retention), NOT tech metrics (AI accuracy, latency, efficiency). Your AI is 95% accurate. Impressive! But users don\'t care. They care: Does this help me afford weekend plans? (No, shows portfolio optimization.) Then useless. Tech metrics matter to DEVELOPERS (proud of 95% accuracy). User metrics matter to USERS (want to achieve goal: afford plans). SplitWise has basic tech (simple calculator, no AI, no ML). But user metrics: Satisfaction 8.5/10, task completion 95%, time to value 30 seconds, retention 80%. They optimize for user metrics. You optimize for tech metrics. They have 5M users. You have 1 user. Measure what matters to USERS: (1) Satisfaction (rate 1-10), (2) Task completion (achieve goal?), (3) Time to value (how long get value?), (4) Retention (come back?), (5) NPS (recommend?). Optimize for these, not AI accuracy. Users don\'t care about algorithms. They care about solving problems.'
        }
      ]
    },
    challenge: {
      title: 'User-Centered Design Challenge',
      description: 'Master designing for users',
      contexts: {
        academic: {
          title: 'User-Centered Career Platform Win',
          description: 'Career platform idea: AI predictor. Excited tech! Professor: "STOP. Interview students FIRST." User-centered redesign: info+alumni+internships. Result: 8.5/10 satisfaction, A+ project!',
          instructions: [
            '• Interview 20 students: Want info+alumni+internships, NOT AI predictions',
            '• Define outcomes: Career awareness, real insights, opportunities',
            '• Co-ideate WITH 10: Career library, alumni directory, internship board',
            '• Prototype + test: Paper first, refine feedback—add videos, filters',
            '• MVP + iterate: 8/10 satisfaction, add success stories—8.5/10, A+!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Start with tech "use AI"—start user problems',
            '• Build isolated—involve users from Week 1',
            '• Ignore feedback—listen, change design',
            '• Feature-driven—start with outcomes first',
            '• No measurement—measure satisfaction, completion'
          ],
          successCriteria: [
            '✅ 20 students interviewed, needs found',
            '✅ User outcomes defined first',
            '✅ Co-ideated WITH 10 students',
            '✅ Prototype tested before coding',
            '✅ MVP 8/10, iterated to 8.5/10, A+!'
          ]
        },
        professional: {
          title: 'User-Centered Budget App Boss',
          description: 'PM, CEO wants AI investment/crypto/tax app. You: "Interview 50 FIRST." Find: need budgeting NOT investing. Pivot simple tools. Result: 10K users, 8.5/10, CEO praises!',
          instructions: [
            '• Interview 50 students: Need budgeting, bill split, savings—NOT AI/crypto/tax',
            '• Present CEO: "90% don\'t invest, need simple tools"—pivot approved',
            '• Define outcomes→features: Budget tracker, bill splitter, goal tracker',
            '• Accessible MVP: 2G, old phones, Hindi+English—7.5/10 satisfaction',
            '• Iterate + scale: Add categories, languages, offline—10K users, 8.5/10!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Build CEO wants—interview users first',
            '• Tech-first "have AI, build what?"—start user problems',
            '• Urban only—design for 2G, multiple languages',
            '• Tech metrics—measure user satisfaction, retention',
            '• Ignore feedback—build what users request'
          ],
          successCriteria: [
            '✅ 50 interviewed: budgeting NOT AI',
            '✅ CEO pivot: AI→user-centered approved',
            '✅ Outcomes defined, features built',
            '✅ Accessible MVP: 2G, Hindi, 7.5/10',
            '✅ 10K users, 8.5/10, CEO praises!'
          ]
        },
        personal: {
          title: 'Simple Tracker Friend Win',
          description: 'Friend 50yr: "Track expenses?" You: "AI analytics!" Built 2 weeks. Them: "Too complex, just want daily total." Built for YOU not THEM. Redesign: simple. Result: 9.5/10, 5 referrals!',
          instructions: [
            '• Stop, listen: Interview friend—want "daily total," NOT AI/analytics',
            '• Define outcomes: Daily awareness, weekly tracking, reduce overspend',
            '• Design simple: "Today: ₹500," progress bar, simple suggestions',
            '• Paper prototype: 3 screens, 1hr—"Perfect! Exactly need!"',
            '• Simple MVP: 3 features, large fonts—9/10 satisfaction, 5 referrals!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Assume needs—interview, ask what THEY need',
            '• Design for you—set aside YOUR preferences',
            '• Skip prototype—paper first, code later',
            '• Add unnecessary—build ONLY what serves outcomes',
            '• Small fonts, jargon—large fonts, simple language'
          ],
          successCriteria: [
            '✅ Interviewed: want simple NOT AI',
            '✅ Outcomes: daily, weekly, behavior defined',
            '✅ Simple features: total, progress, suggestions',
            '✅ Paper tested: "Perfect!" feedback',
            '✅ 9.5/10 satisfaction, 5 referrals!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '👥 User-First Mindset: You start with USERS (what problems do they have?), not TECHNOLOGY (what can I build with AI?). You interview 20-50 users before designing. You discover real needs (bill splitting, budgeting, career awareness), not assumed needs (investment tracking, AI predictions). You let users drive design, not your ego. Result: You build solutions users actually want (8/10 satisfaction, 5 million users like SplitWise) instead of impressive but useless products (3/10 satisfaction, 10 downloads). User-first mindset = product-market fit.',
        '🔄 Continuous User Involvement: You involve users THROUGHOUT the process, not just at launch. Week 1: Interview users. Week 2: Co-ideate WITH users. Week 3: Prototype testing. Week 4: MVP testing. Week 5-52: Gather feedback, iterate weekly. Users are involved from start to finish. Result: You do not build the wrong product (user research in Week 1 prevents 3 months of wasted coding). You iterate based on real feedback (users tell you what to improve each week). Continuous involvement = continuous improvement.',
        '🎯 Outcome-Driven Design: You design for USER OUTCOMES (what they want to achieve), not FEATURES (what is technically cool). You ask: "What do users want to achieve?" (afford weekend plans, split bills fairly, track overspending). Then you build features that deliver those outcomes (simple dashboard, bill splitter, budget tracker). You do not build features first and hope users find them useful. Outcome-driven design ensures: Features serve users, not your ego. Result: High task completion (90% of users achieve their goal).',
        '♿ Accessibility-First Approach: You design for EVERYONE, not just urban, wealthy, English-speaking, tech-savvy users. Your products: (1) Work on 2G internet (rural users can use), (2) Work on 3-year-old phones (low-income users can use), (3) Use simple language (all education levels can use), (4) Support multiple languages (Hindi, Tamil, Telugu). Result: 90% of students can use your product (vs 10% for inaccessible products). Accessibility = inclusivity = larger market = more revenue. You understand: Accessibility is business strategy, not "nice to have."',
        '📊 User Metrics Over Tech Metrics: You measure what matters to USERS (satisfaction, task completion, time to value, retention, NPS), not what matters to DEVELOPERS (AI accuracy, latency, algorithm efficiency). You optimize for user satisfaction (8/10 → 9/10), not AI accuracy (95% → 97%). Result: Users love your product (high retention, referrals), even if technology is simple (no AI, no ML). You learned: Users do not care about your algorithms. They care about solving their problems. Measure and optimize for user success, not technical performance.'
      ],
      improvements: [
        '🚀 Involve Users Even Earlier: You involve users in Week 1 (research). Good. But you can involve them BEFORE Week 1. Improve: Before starting ANY project, ask 10 potential users: "What problems do you face in [domain]?" Example: Before deciding to build financial app, ask 10 students: "What financial problems do you face?" They might say: "Budgeting" (build budget app). Or: "Finding part-time jobs" (build job board, not financial app). Involving users BEFORE project selection prevents building solutions nobody needs. Start with users from Day 0, not Week 1.',
        '🌍 Test with More Diverse Users: You test with 30-50 users. Good. But are they diverse? Improve: Test with users across: (1) Geography (urban + rural + tier-2 cities), (2) Income (high + middle + low), (3) Language (English + Hindi + 5 regional languages), (4) Age (18-25 + 25-40 + 40-60), (5) Tech comfort (tech-savvy + non-tech), (6) Abilities (able-bodied + visual/motor/cognitive impairments). More diversity = more inclusive design = larger market. SplitWise tested with diverse users, added 10 languages, reached 5 million users. Test diverse, design inclusive, win big.',
        '📈 Measure More User Metrics: You measure satisfaction (8/10) and task completion (90%). Good. But measure more: (1) Time to value (how long to get value? 30 seconds? 5 minutes?), (2) Retention (do users come back? Daily? Weekly?), (3) NPS (Net Promoter Score: would they recommend? 0-10 scale), (4) Feature usage (which features are used most?), (5) Drop-off points (where do users abandon?). More metrics = deeper understanding = better optimization. Example: You discover "Users drop off at signup (too many fields)." Fix: Reduce fields from 10 to 3. Retention improves 60% → 80%.',
        '🧪 A/B Test Design Decisions: You build V1.1 (add expense categories) and release to all users. But you do not A/B test. Improve: Release V1.1 to 50% of users (Group A), keep V1.0 for 50% (Group B). Measure: Group A satisfaction = 8.5/10. Group B satisfaction = 7.5/10. Difference = +1 point (expense categories impact). A/B testing isolates feature impact. You know EXACTLY which features improve satisfaction. This guides future design decisions. Test everything: Button colors, copy, layouts, features. Data-driven design > opinion-driven design.',
        '👥 Build User Advisory Board: You interview users once (Week 1). But you do not maintain ongoing relationships. Improve: Create User Advisory Board (10-20 power users who love your product). Meet monthly. Share roadmap: "We plan to add feature X. Would this help you?" Get feedback BEFORE building. Result: You build features users actually want (validated before coding). You avoid wasting time on features nobody needs. User Advisory Board = continuous user involvement = better product decisions. Involve users not just in research, but in strategic planning.'
      ],
      nextSteps: [
        '📚 Study User Research Methods: Read "The Mom Test" by Rob Fitzpatrick (how to interview users without bias), "Just Enough Research" by Erika Hall (practical user research), "Interviewing Users" by Steve Portigal (advanced interview techniques). Learn: (1) Open-ended questions ("What financial problems do you face?" not "Would you use my app?"), (2) Avoiding leading questions ("Do you think this is a good idea?" = biased), (3) Observing behavior (watch users use your product, do not just ask). Practice: Interview 10 users for your next project. Apply these methods.',
        '♿ Master Accessibility Guidelines: Study WCAG (Web Content Accessibility Guidelines) 2.1. Learn: (1) Perceivable (screen reader support, high contrast, captions), (2) Operable (keyboard navigation, large tap targets, no time limits), (3) Understandable (simple language, clear instructions, error prevention), (4) Robust (works on all devices, browsers, assistive tech). Practice: Audit your product for accessibility. Use tools: WAVE (web accessibility checker), Lighthouse (Chrome DevTools). Fix issues. Test with users with disabilities. Accessibility = 90% market vs 10% market.',
        '🎯 Practice Jobs-to-be-Done Framework: Read "Competing Against Luck" by Clayton Christensen. Learn: Users do not buy products. They "hire" products to do a "job." Example: Users do not buy drill. They "hire" drill to "make hole in wall." Job = outcome they want to achieve. Apply: For your next product, ask users: "What job are you hiring this product to do?" Example: "I am hiring budget tracker to help me avoid overspending" (job = financial awareness). Design for the JOB (outcome), not the PRODUCT (features). Jobs-to-be-Done = outcome-driven design.',
        '📊 Build User Metrics Dashboard: Create dashboard tracking: (1) Satisfaction (daily NPS survey: 0-10), (2) Task completion (% of users who achieve goal), (3) Time to value (median time to first success), (4) Retention (% who return Day 7, Day 30), (5) Feature usage (% using each feature), (6) Drop-off points (where users abandon). Update daily. Review weekly. Optimize: "Retention dropped from 70% to 60%. Why? Users confused by new feature. Simplify." Data-driven optimization = continuous improvement. Measure, analyze, improve, repeat.',
        '👥 Teach User-Centered Design: The best way to master user-centered design is to teach it. Walk 3 friends through user-centered design for their projects. Teach: (1) Start with user research (interview 20 users), (2) Define user outcomes (what do they want to achieve?), (3) Design features that serve outcomes, (4) Prototype and test BEFORE coding, (5) Measure user metrics (satisfaction, task completion, retention), (6) Iterate based on feedback. When you teach, you discover gaps in your own understanding. You also build a network of user-centered designers (collaborate on future projects).'
      ]
    },
    badge: { name: 'User Champion', emoji: '👥', description: 'Expert in user-centered design' },
    shareMessage: 'Just mastered user-centered design! 👥 #DesignThinking #UX'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module5Subtopics = module5Data;

// Module 5 Assessment
export const module5Assessment: AssessmentData = {
  id: 'module5-assessment',
  title: 'Design Thinking Assessment',
  description: 'Test your design thinking and creative problem-solving mastery',
  questions: [
    // Empathy (1-5)
    {
      id: 1,
      question: 'You are designing a budgeting app for B.Com students. Your friend says: "I feel bad for broke students. They need help managing money." You say: "That is sympathy. Empathy is different." What is empathy in design thinking?',
      options: [
        'Sympathy: Feeling sorry for users from a distance',
        'Deep understanding of user needs, motivations, and context through immersion in their world (interviews, observation, walking in their shoes)',
        'Agreeing with everything users say',
        'Being nice and polite to users'
      ],
      correct: 1,
      explanation: 'Empathy is DEEP UNDERSTANDING of user needs, motivations, and context, not sympathy (feeling sorry). Sympathy = "I feel bad for broke students" (distant emotion). Empathy = "I interviewed 20 students. They overspend because they do not track expenses daily. They feel anxious mid-month when money runs out. They want simple daily tracking, not complex budgeting tools" (deep understanding through immersion). Empathy requires: (1) Interviews (ask open-ended questions), (2) Observation (watch how they manage money), (3) Immersion (experience their context). Result: You understand WHY they overspend (no daily tracking), WHAT they feel (anxiety), HOW they want to solve it (simple tracking). In B.Com design thinking, empathy is the foundation. Without deep understanding, you build solutions for problems users do not have (AI investment tracker for students with ₹500). With empathy, you build solutions users actually need (simple budget tracker).'
    },
    {
      id: 2,
      question: 'You interviewed a B.Com student about financial stress. You want to organize insights. Your professor recommends: "Use an empathy map." What does an empathy map capture?',
      options: [
        'Routes: Physical paths users take',
        'Think, Feel, Say, Do: User thoughts, emotions, words, and behaviors in 4 quadrants',
        'Emotions: Only feelings',
        'Demographics: Age, gender, income'
      ],
      correct: 1,
      explanation: 'Empathy map captures 4 dimensions: THINK (thoughts: "I am bad with money"), FEEL (emotions: anxious, stressed), SAY (words: "I want to save but I cannot"), DO (behaviors: check bank balance daily, avoid looking at expenses). This 4-quadrant framework organizes interview insights. Example: Student says: "I want to save" (SAY). But they spend ₹5000/month on food delivery (DO). Mismatch! They SAY they want to save but DO not change behavior. Empathy map reveals this gap. Solution: Build app that makes behavior change easy (daily spending alerts, not just savings goals). Empathy maps are NOT routes (physical paths), emotions only (misses thoughts/behaviors), or demographics (age/gender do not explain WHY they overspend). In B.Com design thinking, empathy maps turn raw interview data into actionable insights. After 20 interviews, create 1 empathy map per user persona. Use insights to design solutions that address real needs.'
    },
    {
      id: 3,
      question: 'You are designing a study planner app. Your teammate says: "I know what students need. I was a student 2 years ago. No need to interview anyone." How should you develop empathy?',
      options: [
        'Assume you know user needs based on your own experience',
        'Listen deeply (interviews with open-ended questions) and observe (watch users in their context) to understand THEIR reality, not YOUR assumptions',
        'Skip research and start building immediately',
        'Use templates and best practices from other apps'
      ],
      correct: 1,
      explanation: 'Develop empathy by LISTENING (interviews) and OBSERVING (watching users), not ASSUMING (based on your experience). Your teammate assumes: "I was a student, so I know what students need." Problem: (1) Your experience ≠ their reality (you studied 2 years ago, context changed), (2) You are biased (you remember what YOU needed, not what THEY need), (3) Students are diverse (1st year ≠ 3rd year, high performer ≠ average). Solution: Interview 20 students. Ask open-ended questions: "What study challenges do you face?" (NOT: "Would you use my app?"). Observe: Sit with 5 students during study sessions. Watch: How do they plan? (Paper planner? Google Calendar? Nothing?) When do they procrastinate? (Social media? YouTube?) Insights: "They do not plan because planning takes too long. They want 30-second planning, not 30-minute planning." You would NOT discover this through assumptions. In B.Com design thinking, empathy requires humility: Admit you do not know user needs. Listen, observe, learn.'
    },
    {
      id: 4,
      question: 'You are interviewing B.Com students about career anxiety. Which question type encourages detailed, insightful responses?',
      options: [
        'Closed questions: "Do you feel anxious about your career?" (Yes/No)',
        'Open-ended questions: "Tell me about your career concerns. What worries you most?" (Encourages detailed stories and context)',
        'Leading questions: "You feel anxious because of job market, right?" (Limits discussion)',
        'Rapid-fire questions: "Anxiety? Stress? Fear?" (Inefficient)'
      ],
      correct: 1,
      explanation: 'Open-ended questions encourage detailed, insightful responses. Closed question: "Do you feel anxious?" Answer: "Yes." (No context, no depth.) Open-ended question: "Tell me about your career concerns." Answer: "I am anxious because I do not know what jobs exist for B.Com graduates. My parents want me to do CA, but I do not want to. I feel pressured. I also do not have skills like Excel, PowerPoint. I worry I will not get a job." (Rich context, multiple insights: lack of career awareness, family pressure, skill gaps.) Open-ended questions start with: "Tell me about...", "What...", "How...", "Why...". They invite stories, not yes/no. In B.Com design thinking, open-ended questions reveal: (1) Root causes (why anxious? Lack of career awareness), (2) Context (family pressure), (3) Unmet needs (want career exploration, skill-building). Use open-ended questions in ALL user interviews. Avoid closed/leading/rapid-fire questions (they limit insights).'
    },
    {
      id: 5,
      question: 'You interviewed a student who said: "I procrastinate by watching YouTube for 3 hours daily." You think: "That is lazy and irresponsible." What does "suspend judgment" mean in empathy?',
      options: [
        'Never judge anyone ever (impossible)',
        'Set aside your biases and assumptions to understand user perspective without labeling them (lazy, irresponsible, wrong)',
        'Agree with everything users say',
        'Have no opinions about anything'
      ],
      correct: 1,
      explanation: 'Suspend judgment means: Set aside YOUR biases to understand THEIR perspective without labeling. You judged: "Lazy, irresponsible." But if you suspend judgment and ask: "Why do you watch YouTube?" They answer: "I feel overwhelmed by assignments. I do not know where to start. YouTube helps me escape anxiety." NEW UNDERSTANDING: They procrastinate because they are OVERWHELMED (not lazy). They need: (1) Task breakdown (big assignment → small steps), (2) Starting point (what to do first?). Solution: Study planner with task breakdown feature. You would NOT discover this if you judged them as "lazy" and stopped listening. Suspend judgment ≠ agree with everything (you can disagree later) or have no opinions (you can have opinions, just set them aside during empathy). In B.Com design thinking, suspend judgment to understand root causes. "Lazy" is a label. "Overwhelmed" is a root cause. Design for root causes, not labels.'
    },
    // Ideation (6-10)
    {
      id: 6,
      question: 'You are brainstorming solutions for student overspending. Your teammate suggests: "AI-powered spending predictor." You think it is impractical. What should ideation sessions prioritize?',
      options: [
        'Judge ideas immediately to save time',
        'Generate many ideas without judgment (defer evaluation to later stage)',
        'Generate only one perfect idea',
        'Avoid wild/impractical ideas'
      ],
      correct: 1,
      explanation: 'Ideation prioritizes QUANTITY without JUDGMENT (defer evaluation). Your teammate suggests AI predictor. You think: "Impractical." If you judge immediately ("That will not work"), you kill creativity. Team stops suggesting bold ideas. Result: Safe, boring solutions. Better: Defer judgment. Say: "Interesting! What else?" Generate 50 ideas (AI predictor, daily spending alerts, bill splitter, savings challenges, peer comparisons, gamification, spending limits, category tracking, etc.). THEN evaluate (which are feasible? Impactful?). Separating ideation (generate) from evaluation (judge) enables: (1) More ideas (50 vs 5), (2) Bolder ideas (AI predictor might inspire "automated savings" - practical version), (3) Psychological safety (team feels safe suggesting wild ideas). In B.Com design thinking, ideation is divergent (expand possibilities). Evaluation is convergent (narrow to best). Do NOT mix them. Ideate first (quantity, no judgment), evaluate later (quality, critical thinking).'
    },
    {
      id: 7,
      question: 'During ideation for a study planner app, someone suggests: "AI tutor that does assignments for you!" You think: "That is cheating and impossible." How should you treat wild ideas?',
      options: [
        'Avoid wild ideas - they waste time',
        'Welcome wild ideas - they spark innovation and can be refined into practical solutions',
        'Wild ideas are useless',
        'Criticize wild ideas immediately'
      ],
      correct: 1,
      explanation: 'Welcome wild ideas - they spark innovation. "AI tutor that does assignments" sounds wild (cheating, impossible). But if you welcome it and build on it: "What if AI does not DO assignments, but BREAKS DOWN assignments into steps?" → Practical idea: "Assignment breakdown feature" (students struggle with starting, need step-by-step guidance). Wild idea sparked practical solution! Wild ideas are valuable because: (1) They push boundaries (challenge assumptions: "Why can AI not help with assignments?"), (2) They inspire practical versions (AI tutor → AI assignment breakdown), (3) They signal psychological safety (team feels safe suggesting bold ideas → more creativity). In B.Com design thinking, welcome wild ideas during ideation. Do NOT criticize ("That is cheating!"). Instead, build on them ("What if we modify this to be ethical and practical?"). Many breakthrough innovations started as wild ideas (Airbnb: "Rent your home to strangers?" Wild! Now: $100B company).'
    },
    {
      id: 8,
      question: 'Your teammate suggests: "Budget tracker with daily spending alerts." You have a concern about alert fatigue. How should you respond in ideation?',
      options: [
        '"Yes, but users will get alert fatigue" (Shuts down idea)',
        '"Yes, and we could make alerts customizable (frequency, threshold) to avoid fatigue" (Builds on idea)',
        '"No, that will not work"',
        '"That is a bad idea because..."'
      ],
      correct: 1,
      explanation: '"Yes, and..." builds on ideas. "Yes, but..." shuts them down. Your teammate: "Daily spending alerts." You: "Yes, BUT users will get alert fatigue." (Shuts down.) Teammate feels criticized, stops contributing. Better: "Yes, AND we could make alerts customizable (users choose: daily/weekly, ₹100 threshold/₹500 threshold)." (Builds on.) Teammate feels heard, adds: "AND we could add smart alerts (only when overspending, not every day)." Idea improves through collaboration! "Yes, and..." enables: (1) Collaborative building (ideas improve through iteration), (2) Psychological safety (team feels supported, not criticized), (3) Better solutions (customizable alerts > fixed alerts). "Yes, but..." creates: (1) Defensiveness (teammate defends idea instead of improving it), (2) Idea death (concerns kill ideas before they are refined). In B.Com design thinking, use "Yes, and..." during ideation. Save "Yes, but..." for evaluation stage (after generating 50 ideas, THEN critically evaluate feasibility).'
    },
    {
      id: 9,
      question: 'You are ideating solutions for career anxiety among B.Com students. Your professor says: "Use divergent thinking first." What is divergent thinking?',
      options: [
        'Narrowing options to find one right answer',
        'Generating many diverse ideas exploring multiple directions (career library, alumni network, skill courses, mock interviews, job board, mentorship, etc.)',
        'Finding the one correct solution',
        'Following established rules and best practices'
      ],
      correct: 1,
      explanation: 'Divergent thinking = generating MANY DIVERSE ideas exploring MULTIPLE directions. Career anxiety problem. Divergent thinking: (1) Career library (20 career paths explained), (2) Alumni network (talk to alumni in different careers), (3) Skill courses (Excel, PowerPoint, communication), (4) Mock interviews (practice interviews), (5) Job board (internship listings), (6) Mentorship program (1-on-1 guidance), (7) Career events (workshops, webinars), (8) Peer groups (discuss career concerns with peers). 8 different directions! Divergent ≠ convergent (narrowing to one answer). Divergent = explore possibilities. Convergent = select best. In ideation, use divergent thinking FIRST (generate 50 ideas). THEN use convergent thinking (evaluate, narrow to top 3). Divergent thinking requires: (1) Suspend judgment (no "that will not work"), (2) Welcome wild ideas (no "that is impractical"), (3) Build on ideas ("yes, and..."). In B.Com design thinking, divergent thinking expands solution space. More options = higher chance of finding breakthrough solution.'
    },
    {
      id: 10,
      question: 'Your team generated 50 ideas for a budgeting app in 1 hour. Your manager says: "50 ideas? That is too many. We only need 1 good idea. This was inefficient." Is quantity valuable in ideation?',
      options: [
        'No, quantity wastes time - better to generate 1 perfect idea',
        'Yes, quantity breeds quality - more ideas increase probability of finding excellent solutions (50 ideas → top 5 are better than 5 ideas → top 1)',
        'Quantity is unnecessary - focus on quality from start',
        'Too many ideas confuse the team'
      ],
      correct: 1,
      explanation: 'Quantity breeds quality in ideation. 50 ideas > 5 ideas. Why? (1) Probability: 50 ideas → top 5 are likely BETTER than 5 ideas → top 1. More options = higher chance of excellence. (2) Diverse exploration: First 10 ideas are obvious (budget tracker, spending alerts). Ideas 11-30 are creative (gamification, peer challenges, savings goals). Ideas 31-50 are breakthrough (automated savings, bill negotiation). You discover breakthrough ideas ONLY after exhausting obvious ones. (3) Combination: Idea #12 (gamification) + Idea #27 (peer challenges) = "Savings challenge with friends" (novel combination). Quantity enables combinations. Your manager worries about efficiency. But ideation is CHEAP (1 hour, no coding). Building wrong product is EXPENSIVE (3 months, ₹5L cost). Better: Spend 1 hour generating 50 ideas, 1 hour evaluating, build top 3. Result: Higher quality product. In B.Com design thinking, prioritize quantity in ideation (aim for 50+ ideas in 1 hour). Defer quality evaluation to convergent stage.'
    },
    // Prototyping (11-15)
    {
      id: 11,
      question: 'You have 3 ideas for a study planner app. Your manager says: "Build all 3 as fully functional apps, then test with users." You say: "That will take 3 months and cost ₹5L. Let me prototype first." What is the purpose of prototyping?',
      options: [
        'Create a perfect, polished product to impress users',
        'Test ideas quickly and cheaply BEFORE investing in full development (validate assumptions, get feedback, iterate)',
        'Impress stakeholders with high-quality mockups',
        'Prototyping is a waste of time - better to build real product'
      ],
      correct: 1,
      explanation: 'Prototyping tests ideas QUICKLY and CHEAPLY before expensive development. Your manager wants: Build 3 full apps (3 months, ₹5L), test, pick best. Problem: What if all 3 fail? You wasted 3 months + ₹5L. Better: Prototype all 3 (paper sketches, 3 hours, ₹0), test with 10 users, pick best, THEN build (1 month, ₹1.5L). Result: Faster (3 hours vs 3 months), cheaper (₹0 vs ₹5L), lower risk (test before building). Prototyping enables: (1) Fast learning (test 3 ideas in 1 day), (2) Cheap failure (idea fails at prototype stage, not after 3 months of coding), (3) User feedback (users guide which idea to build). Prototyping ≠ creating perfect product (that is development) or impressing stakeholders (that is marketing). In B.Com design thinking, prototype BEFORE building. Test assumptions cheaply. Fail fast. Iterate. THEN invest in development.'
    },
    {
      id: 12,
      question: 'You want to prototype a budgeting app. Your designer suggests: "Let me create high-fidelity mockups in Figma with animations, colors, fonts." You say: "That will take 2 weeks. Let us start simpler." What should you start with?',
      options: [
        'High-fidelity mockups (polished, detailed, pixel-perfect)',
        'Low-fidelity rough prototypes (paper sketches, wireframes, basic clickable mockups) to test core concepts quickly',
        'Final product (fully coded app)',
        'No prototypes - go straight to development'
      ],
      correct: 1,
      explanation: 'Start with LOW-FIDELITY prototypes (paper sketches, wireframes), not high-fidelity (polished mockups). Why? (1) Speed: Paper sketch = 1 hour. Figma mockup = 2 weeks. Test core concept in 1 hour, not 2 weeks. (2) Cost: Paper = ₹0. Designer time = ₹50K. Save ₹50K by testing with paper first. (3) Flexibility: Users say "I do not like this layout." Paper sketch: Redraw in 5 minutes. Figma mockup: Redesign takes 2 days. (4) Focus: Low-fidelity focuses on FUNCTIONALITY ("Does this workflow make sense?"). High-fidelity distracts with AESTHETICS ("I do not like this blue color"). Test functionality first, aesthetics later. Progression: Paper sketch (1 hour) → Test with 5 users → Refine → Wireframe (1 day) → Test with 10 users → Refine → High-fidelity mockup (1 week) → Test with 30 users → Build. In B.Com design thinking, start low-fidelity. Test fast. Iterate. Increase fidelity only after validating core concept.'
    },
    {
      id: 13,
      question: 'You prototyped a study planner app (paper sketch). You tested with 5 students. All said: "This is confusing. I do not understand how to use it." You feel discouraged. Your professor says: "Fail fast!" What does "fail fast" mean?',
      options: [
        'Give up quickly when something fails',
        'Learn quickly from cheap failures (prototype failed after 1 hour + ₹0, not after 3 months + ₹5L). Iterate based on feedback.',
        'Avoid failure at all costs',
        'Fail publicly to embarrass yourself'
      ],
      correct: 1,
      explanation: '"Fail fast" = learn quickly from CHEAP failures, not expensive failures. Your prototype failed (users confused). But failure happened after: 1 hour (paper sketch) + ₹0 (no development cost). You learned: "Workflow is confusing. Need simpler navigation." Cost of learning: 1 hour. If you had NOT prototyped and built full app first: Failure would happen after 3 months + ₹5L. Same learning ("workflow confusing"), but 3 months + ₹5L wasted. "Fail fast" means: Test early (prototype, not full product), fail cheap (1 hour, not 3 months), learn fast (iterate immediately). Opposite: "Fail slow" = build for 3 months without testing, launch, discover users are confused, waste 3 months. In B.Com design thinking, embrace cheap failures. Prototype → Test → Fail (users confused) → Learn (need simpler navigation) → Iterate (redesign) → Test again. Repeat until success. Cheap failures = fast learning = better products.'
    },
    {
      id: 14,
      question: 'You created a paper prototype for a budgeting app. Your teammate says: "This is too rough to show users. Let us perfect it first, then test." When should you test prototypes with real users?',
      options: [
        'Never test with users - you know what they need',
        'Test with real users EARLY and OFTEN (even rough prototypes) to get feedback before investing in development',
        'Test only with experts and stakeholders',
        'Test only after prototype is perfect and polished'
      ],
      correct: 1,
      explanation: 'Test with real users EARLY (rough prototypes) and OFTEN (every iteration). Your teammate wants to perfect prototype before testing. Problem: (1) You waste time perfecting something users might not want (spend 2 weeks polishing, users say "we do not need this feature"), (2) You miss early feedback (users could have told you in Week 1 "this is confusing," but you discover it in Week 3 after polishing). Better: Test rough prototype immediately (Day 1: Paper sketch → 5 users → Feedback: "Confusing navigation"). Iterate (Day 2: Redesign navigation). Test again (Day 3: 5 users → Feedback: "Better! But add spending categories"). Iterate. Repeat. Early testing enables: (1) Fast learning (discover issues in Day 1, not Week 3), (2) User-driven design (users guide every iteration), (3) Avoid wasted effort (do not perfect features users do not want). In B.Com design thinking, test early (rough prototypes are fine), test often (every iteration), test with REAL users (not experts - they are not your target users).'
    },
    {
      id: 15,
      question: 'You are prototyping a study planner app. Week 1: Paper sketch. Week 2: Wireframe. Week 3: High-fidelity mockup. Week 4: Coded prototype. How should prototype fidelity progress?',
      options: [
        'Always use high-fidelity prototypes from start',
        'Progress from low-fidelity (paper) to high-fidelity (coded) as you validate and refine the concept',
        'Stay at low-fidelity forever',
        'Skip prototyping and build perfect product'
      ],
      correct: 1,
      explanation: 'Prototype fidelity should PROGRESS from LOW to HIGH as you validate. Week 1: Paper sketch (low-fidelity, test core concept: "Does this workflow make sense?"). Users: "Yes, but navigation is confusing." Week 2: Wireframe (medium-fidelity, test refined navigation). Users: "Navigation is better! But add time estimates feature." Week 3: High-fidelity mockup (test visual design, interactions). Users: "Looks great! Colors are good, layout is clear." Week 4: Coded prototype (test real functionality). Users: "Works well! Ready to launch." Progression enables: (1) Fast early testing (paper = 1 hour, test core concept), (2) Iterative refinement (each stage addresses feedback from previous), (3) Efficient investment (invest in high-fidelity ONLY after validating low-fidelity). Do NOT start high-fidelity (wastes time if core concept is wrong). Do NOT stay low-fidelity forever (need high-fidelity to test visual design, real interactions). In B.Com design thinking, match fidelity to stage: Early = low (test concept), Middle = medium (test workflow), Late = high (test design/functionality).'
    },
    // Testing (16-20)
    {
      id: 16,
      question: 'You built a budgeting app prototype. You test with 10 students. You hope they love it and confirm you are right. What is the real purpose of user testing?',
      options: [
        'Confirm you are right and your solution is perfect',
        'Validate OR invalidate your assumptions (test if your solution actually solves user problems, be willing to be wrong)',
        'Impress users with your design skills',
        'User testing is a waste of time - you already know what users need'
      ],
      correct: 1,
      explanation: 'User testing validates OR invalidates assumptions, not confirms you are right. You assume: "Students want budgeting app with 10 features." Test with 10 students. Result: 8/10 say "Too complex. I just want simple daily spending tracker." Your assumption is INVALIDATED. This is GOOD! You learned before wasting 3 months building 10 features nobody wants. User testing is NOT about: (1) Confirmation bias (seeking evidence you are right), (2) Impressing users (showing off your skills), (3) Avoiding testing (assuming you know best). User testing IS about: (1) Humility (be willing to be wrong), (2) Learning (discover what users actually need), (3) Validation (test assumptions before building). In B.Com design thinking, approach testing with hypothesis: "I believe students want X." Test. If validated: Build X. If invalidated: Pivot to what users actually want. Be willing to be wrong. That is how you build right products.'
    },
    {
      id: 17,
      question: 'You are testing a study planner app. User says: "I love this! I will definitely use it daily." But you observe: They struggle to add a task (takes 2 minutes, multiple failed attempts). What should you trust more?',
      options: [
        'What users SAY: "I love this!"',
        'What users DO (behavior): Struggled for 2 minutes to add task (indicates poor usability)',
        'What users THINK internally',
        'What users WANT ideally'
      ],
      correct: 1,
      explanation: 'Trust what users DO (behavior), not what they SAY (words). User says: "I love this! I will use it daily." But behavior shows: Struggled 2 minutes to add task. Reality: They will NOT use it daily (too frustrating). Why mismatch? (1) Politeness (they do not want to hurt your feelings), (2) Aspirational thinking (they WANT to use it, but behavior shows it is too hard), (3) Lack of self-awareness (they do not realize they struggled). Watch behavior: (1) How long to complete task? (2 minutes = too long, should be 30 seconds), (2) How many errors? (multiple failed attempts = poor UX), (3) Facial expressions (frustration, confusion). Behavior reveals truth. Words can mislead. In B.Com design thinking, observe users silently during testing. Watch: Where do they struggle? Where do they succeed? Where do they give up? Behavior > words. Fix usability issues revealed by behavior, not reassured by words.'
    },
    {
      id: 18,
      question: 'You tested a budgeting app with 10 students. 8/10 said: "This is confusing. I do not understand how to use it." You feel like you failed. How should you view negative feedback?',
      options: [
        'Avoid negative feedback - only test with people who will like your product',
        'Negative feedback is VALUABLE LEARNING (reveals problems you can fix BEFORE launch, prevents building product nobody wants)',
        'Negative feedback means you failed as a designer',
        'Ignore negative feedback - users are wrong'
      ],
      correct: 1,
      explanation: 'Negative feedback is VALUABLE LEARNING, not failure. 8/10 users: "Confusing." You learned: (1) Navigation is unclear (users do not know where to start), (2) Instructions are missing (users need onboarding), (3) Features are overwhelming (too many options). This is GOLD! You discovered these issues BEFORE launch (at prototype stage, ₹0 cost). If you had launched without testing: 1000 users download, 800 uninstall (confusing), 1-star reviews, product fails. Negative feedback at testing stage = cheap learning (fix before launch). Negative feedback after launch = expensive failure (reputation damaged). Embrace negative feedback: (1) Thank users ("Thank you for honest feedback!"), (2) Ask follow-up ("What specifically is confusing?"), (3) Iterate (redesign based on feedback), (4) Test again. In B.Com design thinking, seek negative feedback. It reveals problems. Problems = opportunities to improve. Better to hear "confusing" from 10 test users than from 1000 real users.'
    },
    {
      id: 19,
      question: 'You are testing a study planner app. Your teammate says: "Let us just test and see what happens." You say: "No, we need clear hypotheses first." What are hypotheses in user testing?',
      options: [
        'Hypotheses are unnecessary - just test randomly',
        'Clear, testable statements of assumptions (e.g., "Students can add a task in under 30 seconds") that guide what to measure and observe',
        'Random guesses about what might work',
        'Conclusions you have already reached'
      ],
      correct: 1,
      explanation: 'Hypotheses are CLEAR, TESTABLE statements that guide testing. Without hypothesis: You test randomly, observe vaguely, learn nothing. With hypothesis: You test systematically, measure precisely, learn clearly. Example hypothesis: "Students can add a task in under 30 seconds" (testable). Test with 10 students. Measure: Average time = 2 minutes. Hypothesis INVALIDATED. Learning: Task creation is too complex. Simplify. Good hypotheses are: (1) Specific ("under 30 seconds" not "quickly"), (2) Measurable (time, completion rate, errors), (3) Testable (can be validated/invalidated through observation). Bad hypotheses: "Users will like this" (vague, not measurable). Write 3-5 hypotheses before testing: (1) "Students can complete onboarding in under 2 minutes," (2) "Students can add a task without errors," (3) "Students understand dashboard at first glance." Test. Measure. Validate/invalidate. In B.Com design thinking, hypotheses turn testing from "let us see what happens" (vague) to "let us test if X is true" (precise).'
    },
    {
      id: 20,
      question: 'You are testing a B.Com budgeting app. Your friend (MBA student) volunteers: "I will test it!" You say: "Thank you, but I need B.Com students." Who should you test with?',
      options: [
        'Anyone who is available and willing to test',
        'Real target users (B.Com students) who match your user persona (age, context, needs)',
        'Friends only (convenient and free)',
        'Experts only (professors, designers, developers)'
      ],
      correct: 1,
      explanation: 'Test with REAL TARGET USERS (B.Com students), not anyone available. Your friend (MBA student) is NOT your target user. Why? (1) Different context (MBA students have different financial needs than B.Com students), (2) Different behaviors (MBA students might be more financially literate), (3) Different problems (MBA students might not face same overspending issues). If you test with MBA student: They say "This is great!" But B.Com students say "This is confusing." You get false validation. Test with B.Com students (your target users): (1) Age 18-22 (not 25-30), (2) Income ₹0-₹5000/month (not ₹50K/month), (3) Financial literacy: Low (not high), (4) Context: College, hostel, limited budget. Match your user persona. Friends/experts are NOT target users (unless they match persona). In B.Com design thinking, recruit 10-30 users who match target persona. Test with them. Their feedback is relevant. Others feedback is noise.'
    },
    // Iteration (21-25)
    {
      id: 21,
      question: 'You launched study planner V1.0. Satisfaction: 6/10. You think: "I failed. Only 6/10." Your mentor says: "V1.0 is just the start. Iterate!" What is iteration in design thinking?',
      options: [
        'Iteration means failure - you did not get it right first time',
        'Iteration is the path to better solutions: V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (9/10) through continuous improvement based on feedback',
        'Iteration should be avoided - get it perfect first time',
        'Iteration wastes time - better to launch once and be done'
      ],
      correct: 1,
      explanation: 'Iteration is the PATH TO BETTER SOLUTIONS, not failure. V1.0 (6/10) is your STARTING POINT, not failure. Competitor launched V1.0 at 5/10 (worse than you!). But they iterated 4 times in 3 months: V1.1 (7/10), V1.2 (8/10), V1.3 (8.5/10), V1.4 (9/10). They went from 5/10 to 9/10 through iteration. You stayed at 6/10 because you thought "iteration = failure." Reality: Iteration = progress. Each version improves based on user feedback. V1.0 → V1.1: Added time estimates (users requested). V1.1 → V1.2: Added subject grouping (users requested). Each iteration delivers what users want. Result: Satisfaction improves 6/10 → 9/10. In B.Com design thinking, embrace iteration. V1.0 is never perfect. It is your first attempt. Iterate weekly based on feedback. V1.0 → V1.10 in 10 weeks = 10 improvements. Perfection is a myth. Progress is real.'
    },
    {
      id: 22,
      question: 'You are iterating on a budgeting app. V1.0 has 4 features. Users want time estimates. Do you start from scratch for V1.1 or build on V1.0?',
      options: [
        'Start from scratch - rebuild everything for V1.1',
        'Build on learnings from V1.0: Keep the 4 features that work, ADD time estimates (5th feature). Each iteration builds on previous, not replaces it.',
        'Make V1.1 identical to V1.0',
        'Make V1.1 worse by removing features'
      ],
      correct: 1,
      explanation: 'Each iteration BUILDS ON learnings from previous, not starts from scratch. V1.0 has 4 features (add task, view list, check off, progress). Users love these (6/10 satisfaction). Users want time estimates. V1.1 = Keep 4 features + ADD time estimates (5th feature). Do not rebuild from scratch (waste time, lose what works). Do not remove features (users love them). ADD based on feedback. Result: V1.1 (5 features) > V1.0 (4 features). Satisfaction: 6/10 → 7/10 (+1 point). Each iteration is INCREMENTAL IMPROVEMENT, not complete overhaul. Keep what works. Add what is missing. Remove what does not work. In B.Com design thinking, iteration is additive. V1.0 (4 features) → V1.1 (5 features) → V1.2 (6 features) → V1.3 (7 features). Each version builds on previous. Learnings compound. Product improves continuously.'
    },
    {
      id: 23,
      question: 'You built a study planner app. It is at 6/10 satisfaction. Your friend says: "Wait until it is perfect (10/10) before shipping." When should you ship?',
      options: [
        'Wait until it is perfect (10/10) - might take 6 more months',
        'Ship NOW at 6/10 (good enough to learn from users). Gather feedback. Iterate to 9/10 in 3 months. Good enough + fast iteration > perfect + slow shipping.',
        'Never ship - it is not ready',
        'Ship without any testing'
      ],
      correct: 1,
      explanation: 'Ship "good enough to learn" (6/10), not "perfect" (10/10). Why? (1) You learn faster: Ship V1.0 at 6/10 in Month 1, get feedback ("want time estimates"), iterate. (2) You improve faster: V1.0 (6/10) → V1.1 (7/10) → V1.2 (8/10) → V1.3 (9/10) in 3 months. (3) Users guide you: They tell you what to build next. Waiting for perfect: Month 1-6 (building, trying to reach 10/10), Month 6 (launch at 8/10), competitor already at 9/10 (they shipped 6/10 in Month 1, iterated). Perfectionism delays learning. You wait 6 months for 8/10. Competitor ships 6/10 in 1 month, iterates to 9/10 in 3 months. They reach 9/10 before you reach 8/10. In B.Com design thinking, ship at 6-7/10 (good enough), iterate weekly based on feedback. Reach 9/10 in 3 months (vs waiting 6 months for 8/10). Good enough + iteration > perfect + waiting.'
    },
    {
      id: 24,
      question: 'You launched study planner V1.0 (6/10). Users want time estimates. You think: "I will add time estimates + 9 other features in V2.0 (big release in 3 months)." What is iteration mindset?',
      options: [
        'Get it right first time - V2.0 with 10 features = perfect',
        'Continuous learning and improvement: V1.1 with 1 feature next week, V1.2 with 1 feature week after. Weekly iteration > quarterly big-bang.',
        'Avoid making any changes after launch',
        'Never finish - keep iterating forever without shipping'
      ],
      correct: 1,
      explanation: 'Iteration mindset = CONTINUOUS LEARNING (weekly small releases), not get it right first time (quarterly big releases). You plan V2.0 with 10 features in 3 months. Problem: (1) Slow learning (you learn once every 3 months), (2) High risk (what if 8/10 features are not important? You wasted 3 months), (3) Scattered focus (10 features at once = none are excellent). Better: V1.1 with 1 feature (time estimates) next week. Measure: Did satisfaction improve? (6/10 → 7/10? Yes!). Learn: Time estimates are high-impact. V1.2 with 1 feature (grouping) week after. Iterate weekly. Result: 12 iterations in 3 months (vs 1 big release). You learn 12×, improve 12×. In B.Com design thinking, continuous small iterations > infrequent big releases. Weekly learning > quarterly learning. Build-Measure-Learn cycle repeats EVERY WEEK, not every quarter.'
    },
    {
      id: 25,
      question: 'Your study planner follows Build-Measure-Learn cycle. V1.0 (6/10) → Measure (users want time estimates) → Learn (priority #1) → Build V1.1 → Measure (7/10) → Learn (users want grouping) → Build V1.2. How many times should this cycle repeat?',
      options: [
        'Once - after V1.0, you are done',
        'CONTINUOUSLY - repeat forever. Each cycle improves the product. V1.0 → V1.1 → V1.2 → V1.3 → V1.4... Never stop iterating. Continuous improvement = competitive advantage.',
        'Build-Measure-Learn is optional - only if you have time',
        'Too slow - skip measuring and learning, just build'
      ],
      correct: 1,
      explanation: 'Build-Measure-Learn cycle repeats CONTINUOUSLY, not once. Why? (1) User needs evolve: V1.0 users want time estimates. V1.1 users want grouping. V1.2 users want priority. V1.3 users want collaboration. Needs change as product matures. (2) Competition evolves: Competitor adds new features. You must iterate to stay ahead. (3) You learn: Each cycle teaches you what users value. 10 cycles = 10 lessons. Stop iterating = stop learning = stagnate. Competitor iterates 24 times/year (weekly). You iterate 2 times/year (6-month releases). They learn 12× faster, improve 12× faster, grow 12× faster. In B.Com design thinking, make Build-Measure-Learn your default process. After every release, measure, learn, build next iteration. Never stop. Continuous iteration = continuous improvement = market leadership. V1.0 → V1.1 → V1.2 → ... → V1.50 over 1 year. 50 improvements = unbeatable product.'
    },
    // User-Centered (26-30)
    {
      id: 26,
      question: 'You want to build a financial app for B.Com students. Which approach is user-centered design?',
      options: [
        'Designer decides everything based on their expertise',
        'Users guide all design decisions: Interview 20 students ("What financial problems do you have?"), discover real needs (bill splitting, budgeting), build solutions for THEIR problems.',
        'Technology first: "I want to use AI. What can I build?"',
        'Ignore users - you know what they need'
      ],
      correct: 1,
      explanation: 'User-centered design = USERS GUIDE decisions, not designer. You interview 20 students: "What financial problems do you have?" They answer: "Bill splitting, overspending tracking, affording weekend plans." You build: Bill splitter, budget tracker, spending dashboard. You designed for THEIR needs (bill splitting), not YOUR assumptions (investment tracking). Designer-centered design: You decide features based on YOUR expertise ("I think students need investment recommendations"). Result: 10 downloads, 1 user (students do not invest). User-centered design: Users decide features through feedback ("We need bill splitting"). Result: 5 million users (SplitWise). In B.Com design thinking, users are at the CENTER. Interview users → Discover needs → Design solutions → Test with users → Iterate based on feedback. Users guide EVERY decision. You follow users, not your ego.'
    },
    {
      id: 27,
      question: 'You are building a study planner app. When should you involve users?',
      options: [
        'Only at the end after launch to get feedback',
        'Throughout entire process: Week 1 (interview users), Week 3 (show prototype), Week 4 (test MVP), Week 5-52 (gather feedback, iterate weekly). Users involved from start to finish.',
        'Never - you are the expert, you know what users need',
        'Once at start to get initial ideas, then build in isolation'
      ],
      correct: 1,
      explanation: 'User-centered design involves users THROUGHOUT, not just at launch. Week 1: Interview 20 users ("What study problems do you have?" Answer: "Forgetting deadlines, procrastination"). Week 2: Brainstorm solutions WITH users ("Would deadline reminders help?" Yes!). Week 3: Show paper prototype to 10 users, refine based on feedback. Week 4: Build MVP, test with 30 users. Week 5-52: Launch, gather feedback, iterate weekly. Users are involved from Week 1 to Week 52. Why? (1) Early involvement prevents building wrong product (if you had interviewed users in Week 1, you would not have built portfolio optimization for broke students), (2) Continuous involvement enables iteration (users tell you what to improve each week). In B.Com design thinking, make user involvement continuous. Do not build for 3 months in isolation, then launch. Build for 1 week, test with users, iterate. Repeat 12 times in 3 months. 12 cycles of user feedback > 0 cycles.'
    },
    {
      id: 28,
      question: 'Your AI financial app requires high-speed internet, latest phone, financial knowledge. Only 10% of students can use it. What does accessibility mean in user-centered design?',
      options: [
        'Accessibility is only for people with disabilities - not relevant here',
        'Design usable by EVERYONE: Works on 2G internet, works on 3-year-old phones, uses simple language. Result: 90% of students can use it = 9× larger market.',
        'Accessibility is an extra feature you add later if you have time',
        'Accessibility is optional - focus on core features first'
      ],
      correct: 1,
      explanation: 'Accessibility = designing for EVERYONE, not just able-bodied, wealthy, urban, English-speaking users. Your AI app is accessible to only 10% of students (requires high-speed internet = urban bias, latest phone = wealth bias, financial knowledge = education bias, English-only = language bias). Accessible design: (1) Works on 2G internet (rural students can use), (2) Works on 3-year-old phones (low-income students can use), (3) Simple language, no jargon (all education levels can use), (4) Supports Hindi, Tamil, Telugu (all language speakers can use). Result: 90% of students can use it. Accessibility is NOT "nice to have." It is BUSINESS STRATEGY. 10% market (your app) vs 90% market (accessible app) = 9× larger market. SplitWise has 5 million users because they designed for accessibility. In B.Com design thinking, accessibility = inclusivity = larger market = more revenue. Design for diverse users (all income levels, internet speeds, languages, abilities) from Day 1.'
    },
    {
      id: 29,
      question: 'You tested your financial app with 10 urban, English-speaking, tech-savvy students. All loved it! You launch. Rural students complain: "Requires too much data." Hindi speakers complain: "English-only." Why test with diverse users?',
      options: [
        'Testing with diverse users wastes time - one type is enough',
        'Test with diverse users to avoid bias and ensure inclusivity: Urban + rural (different internet), English + Hindi speakers (language), tech-savvy + non-tech (comfort levels). Diverse testing reveals hidden biases.',
        'Testing with diverse users complicates the product',
        'Testing with diverse users delays launch - better to launch fast'
      ],
      correct: 1,
      explanation: 'Testing with only ONE type of user (urban, English, tech-savvy) creates BIAS. Your app works for them (high-speed internet, understand English, comfortable with tech). But it FAILS for others (rural = slow internet, Hindi speakers = cannot understand, non-tech = confused). You did not discover these issues because you did not test with diverse users. Diverse testing reveals: (1) Urban bias (app requires high-speed internet, rural students have 2G), (2) Language bias (English-only, 60% prefer Hindi/regional languages), (3) Tech bias (assumes tech comfort, many struggle with complex interfaces), (4) Wealth bias (assumes latest phone, many have old phones). Test with diverse users: Urban + rural, English + Hindi + regional, tech-savvy + non-tech, high-income + low-income. Result: You design inclusive product that works for 90% of students, not just 10%. In B.Com design thinking, diverse testing = larger market. SplitWise tested with diverse users, added 10 languages, reached 5 million users. Test diverse, design inclusive, win big.'
    },
    {
      id: 30,
      question: 'Your AI financial app has 95% AI accuracy, 50ms latency, O(log n) efficiency. You are proud! But only 1 user. What is the success metric in user-centered design?',
      options: [
        'Technical performance: AI accuracy, latency, algorithm efficiency',
        'User satisfaction and outcomes: Does it help users achieve their goal? Satisfaction 8/10? Task completion 95%? Retention 80%? These prove the app is useful.',
        'Budget: Did you build it under budget?',
        'Speed: Did you launch fast?'
      ],
      correct: 1,
      explanation: 'User-centered design measures USER METRICS (satisfaction, task completion, retention), NOT tech metrics (AI accuracy, latency, efficiency). Your AI is 95% accurate. Impressive! But users do not care. They care: Does this help me afford weekend plans? (No, it shows portfolio optimization.) Then it is useless. Tech metrics matter to DEVELOPERS (you are proud of 95% accuracy). User metrics matter to USERS (they want to achieve their goal). SplitWise has basic tech (simple calculator, no AI). But user metrics: Satisfaction 8.5/10, task completion 95% (users successfully split bills), time to value 30 seconds (instant value), retention 80% (users come back weekly). They optimize for user metrics. You optimize for tech metrics. They have 5 million users. You have 1 user. In B.Com product development, measure what matters to USERS: (1) Satisfaction (rate 1-10), (2) Task completion (did they achieve goal?), (3) Time to value (how long to get value?), (4) Retention (do they come back?), (5) NPS (would they recommend?). Optimize for these, not for AI accuracy.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Design thinking master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong design skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review design thinking!', xpReward: 100 }
  }
};
