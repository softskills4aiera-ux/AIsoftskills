// Module 2: Adaptive Learning & Lifelong Learning Skills
// Comprehensive data for Gen Z students

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

// Module 2 Subtopics Data
export const module2Data: SubtopicData[] = [
  {
    id: 'learning-strategies',
    title: 'Learning Strategies',
    emoji: '🧠',
    context: 'academic',
    discover: {
      scenario: "B.Com 2nd year. 6 subjects. Study 8hrs daily. Scoring 60%. Notes messy, forget last week, exams = blur. Friends study less, score better. Working hard, not smart.",
      problemExplanation: [
        "Passive learning: Re-read notes 5×. Doesn't transfer to long-term memory. Exam: blank",
        "No active engagement: Read 'Debentures = debt' 10×. Exam: 'Differentiate?' Freeze",
        "Cramming: Poor time management → cram. Ineffective. Forget after exam",
        "Don't know how you learn: Visual? Auditory? Kinesthetic? No systematic approach"
      ],
      solutionApproach: [
        "Active recall: Close book, quiz yourself. Forces RETRIEVE, not recognize. +50% retention",
        "Feynman: Explain to 10-year-old. Can't explain simply? Don't understand. Teach friend = master",
        "Spaced repetition: Review Day 1, 3, 7, 14, 30. Not cram 1 day. Fights forgetting",
        "80/20 rule: Focus 20% content (80% exam questions). 8hrs → 4hrs, better scores"
      ]
    },
    video: {
      title: 'Stop Wasting 8 Hours: Study Smarter, Not Harder (B.Com Edition)',
      duration: 8,
      content: [
        'Welcome to the world of effective learning strategies!',
        'Today we will explore proven methods that will transform how you study and retain information.',
        'First, let us understand the difference between passive and active learning.',
        'These strategies will help you learn more effectively in less time.'
      ],
      script: `**INTRO (0:00-0:30)**

Yo, B.Com fam! Quick question - you study 8 hours but still forget everything by exam day? Your notes look like a crime scene? You are not dumb - you are just using Stone Age methods in an AI era. I am about to drop the EXACT learning hacks that top scorers use (but never tell you about). Let us go!

**SECTION 1: The Passive Learning Trap (0:30-2:00)**

Here is the brutal truth - re-reading notes 5 times does NOT work. It just makes you THINK you know stuff (psychologists call this "fluency illusion"). Your brain is like "oh I have seen this before" but come exam time? Blank.

Example: You read "Debentures are long-term debt instruments" 10 times. Exam question: "Differentiate debentures from bonds with examples." You freeze. Why? You never ACTIVELY engaged with the concept.

The Fix: Active Recall
Instead of re-reading, close your book and quiz yourself:
- What are debentures?
- How do they differ from bonds?
- Give me 3 real companies that issue them

This forces your brain to RETRIEVE info, not just recognize it. Harvard study showed active recall boosts retention by 50% compared to re-reading.

**SECTION 2: Spaced Repetition - The Memory Cheat Code (2:00-3:30)**

Cramming the night before? Your brain dumps 80% within 48 hours (Ebbinghaus Forgetting Curve - look it up). Top students use Spaced Repetition:

Day 1: Learn Cost Accounting formulas
Day 2: Quick 10-min review
Day 4: Review again
Day 7: Review again
Day 14: Review again

Each review takes LESS time but the knowledge sticks FOREVER. Use apps like Anki or just a Google Calendar reminder.

B.Com Example: Learning ratio formulas
- Day 1: Current Ratio formula
- Day 3: Recite it from memory
- Day 7: Solve 3 problems
- Day 14: Teach it to a friend

By exam time, it is burned into your brain.

**SECTION 3: Feynman Technique - The "Teach a 5-Year-Old" Method (3:30-5:00)**

Nobel winner Richard Feynman said: "If you cannot explain it simply, you do not understand it." Here is how:

Step 1: Pick a concept (e.g., Break-Even Analysis)
Step 2: Explain it like you are teaching your younger sibling
- NO jargon
- Use everyday examples
Step 3: Where did you struggle to explain? That is your knowledge gap - go fix it

Real Example:
Bad: "Break-even is where total revenue equals total cost"
Good: "Imagine you sell momos for Rs 20. Each momo costs Rs 10 to make. You also pay Rs 5000/month for the stall. Break-even is when you have sold enough momos (500 momos = Rs 10,000 revenue - Rs 5000 costs - Rs 5000 fixed cost = break even) to cover ALL costs. After that? Pure profit"

See the difference? The second one SHOWS understanding.

**SECTION 4: The 80/20 Rule - Work Smarter, Not Harder (5:00-6:30)**

Pareto Principle: 20% of topics give you 80% of marks. Stop treating all chapters equally!

How to find the 20%:
1. Check past 5 years question papers
2. Identify repeating topics
3. Master THOSE first

B.Com Example (Financial Accounting):
- Journal Entries: 30% of marks (HIGH priority)
- Subsidiary Books: 15% of marks (MEDIUM priority)
- Theory of Accounting: 5% of marks (LOW priority initially)

Spend 60% of study time on high-priority topics. Once you have aced those, move to the rest.

**SECTION 5: Pomodoro Technique + Active Breaks (6:30-7:30)**

Your brain is not a machine - it needs breaks. The Pomodoro Technique:
- 25 min: Deep focus (phone on airplane mode)
- 5 min: Active break (NOT scrolling Insta - do jumping jacks, stretch, walk)
- Repeat 4 times
- Then take a 20-30 min break

Why active breaks? Movement boosts blood flow to your brain (Stanford research shows it improves focus by 25%).

Study Schedule Example:
- 9:00-9:25: Cost Accounting
- 9:25-9:30: Walk around
- 9:30-9:55: Business Law
- 9:55-10:00: Stretches
(After 2 hours, you have covered 4 Pomodoros = 100 min of DEEP work vs 8 hours of distracted "studying")

**CONCLUSION (7:30-8:00)**

Let us recap the 5 game-changers:
1. Active Recall > Re-reading
2. Spaced Repetition > Cramming
3. Feynman Technique > Memorizing
4. 80/20 Rule > Studying everything equally
5. Pomodoro > 8-hour marathons

Real talk: These are not "hacks" - they are backed by DECADES of neuroscience research. MIT, Stanford, Harvard students all use these. Now you do too.

Your action plan TODAY:
1. Pick your hardest B.Com subject
2. Choose ONE strategy from this video
3. Use it for 1 week
4. Watch your retention skyrocket

Drop a comment telling me which strategy you will try first - I reply to everyone! Now go study smarter, not harder. Peace!`
    },
    quiz: {
      title: 'Learning Strategies Quiz',
      questions: [
        {
          id: 1,
          question: 'You spend 8 hours re-reading your Financial Accounting notes but still blank out in exams. What is the core problem?',
          options: [
            'You need to study even more hours',
            'You are using passive learning instead of active recall',
            'The textbook is too difficult',
            'You need better highlighters'
          ],
          correct: 1,
          explanation: 'Re-reading creates a fluency illusion where your brain recognizes information but cannot retrieve it under exam pressure. Active recall (testing yourself without looking) forces your brain to practice retrieval, which is exactly what exams test. Harvard research shows active recall improves retention by 50% compared to passive re-reading.'
        },
        {
          id: 2,
          question: 'Your friend explains Break-Even Analysis using a momo stall example instead of just the formula. What technique is this?',
          options: [
            'Memorization technique',
            'Feynman Technique - explaining concepts simply',
            'Note-taking shortcut',
            'Exam trick'
          ],
          correct: 1,
          explanation: 'The Feynman Technique involves explaining concepts as if teaching a beginner, using real-world examples instead of jargon. If you cannot explain it simply, you do not truly understand it - this reveals knowledge gaps before the exam does. Named after Nobel laureate Richard Feynman, it transforms surface-level memorization into deep understanding.'
        },
        {
          id: 3,
          question: 'You studied Cost Accounting formulas for 10 hours straight last night. By exam day (3 days later), you have forgotten 80%. What should you have done instead?',
          options: [
            'Study for 15 hours instead',
            'Use spaced repetition - review at increasing intervals (Day 1, 2, 4, 7, 14)',
            'Highlight the formulas in different colors',
            'Make longer notes'
          ],
          correct: 1,
          explanation: 'The Ebbinghaus Forgetting Curve shows we forget 80% of crammed information within 48 hours. Spaced repetition combats this by reviewing material at strategic intervals (Day 1, 2, 4, 7, 14), strengthening memory pathways each time. Each review takes LESS time but knowledge retention becomes permanent, making it far more efficient than cramming.'
        },
        {
          id: 4,
          question: 'After 2 hours of "studying" with your phone nearby, you realize you barely remember anything. What is the fix?',
          options: [
            'Study for longer hours',
            'Use Pomodoro: 25 min deep focus + 5 min active break, repeat',
            'Drink more coffee',
            'Study at night instead'
          ],
          correct: 1,
          explanation: 'Your brain cannot sustain deep focus for hours - attention naturally wavers. The Pomodoro Technique works with your biology: 25 minutes of phone-free deep focus, then a 5-minute active break (walk/stretch, NOT scrolling). After 4 cycles, take a longer break. This delivers 100 minutes of quality focus in 2 hours versus 8 hours of distracted pseudo-studying.'
        },
        {
          id: 5,
          question: 'You have 7 chapters to study but only 3 days left. Past papers show 3 chapters give 70% of marks. What should you do?',
          options: [
            'Study all chapters equally to be safe',
            'Apply 80/20 rule - master the 3 high-value chapters first',
            'Skip studying and hope for the best',
            'Just read summaries of all chapters'
          ],
          correct: 1,
          explanation: 'The Pareto Principle (80/20 rule) states that 20% of topics typically yield 80% of marks. Identify these by analyzing past 5 years of question papers - patterns always emerge. Master high-priority topics first to secure most marks, then tackle the rest if time permits. This strategic approach beats equal time distribution, especially under time constraints.'
        }
      ]
    },
    challenge: {
      title: 'Learning Strategy Implementation',
      description: 'Apply effective learning strategies to master a new skill or subject',
      contexts: {
        academic: {
          title: 'Academic Learning Strategy Challenge',
          description: 'Transform your study approach for your hardest B.Com subject using science-backed strategies',
          instructions: [
            '1️⃣ **Choose Your Target**: Pick your lowest-scoring B.Com subject (Cost Accounting, Business Law, etc.)',
            '2️⃣ **Baseline Assessment**: Write down what you currently do - how many hours, what methods (re-reading? highlighting?)',
            '3️⃣ **Strategy Selection**: Choose 3 strategies from the video (Active Recall, Spaced Repetition, Feynman, Pomodoro, 80/20)',
            '4️⃣ **Create Study Plan**: Design a 1-week plan - WHEN you will study, WHICH strategy for each session, HOW you will track progress',
            '5️⃣ **Implement & Track**: Follow plan for 7 days - keep a daily log (what worked, what felt hard, retention check)',
            '6️⃣ **Measure Results**: Test yourself on the same topics you studied before vs now - compare scores/recall quality',
            '7️⃣ **Reflect & Refine**: Which strategy helped most? What will you change? Write a 1-page reflection',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Trying ALL strategies at once (stick to 2-3 max)',
            '• Not tracking progress (how will you know what works?)',
            '• Giving up after 2 days ("it feels weird" - new habits take time!)',
            '• Studying passive material actively (cannot actively recall videos - take notes THEN quiz yourself)',
            '• Skipping the reflection - this is where real learning about learning happens'
          ],
          successCriteria: [
            '✅ You scored 20%+ higher on self-tests compared to your old method',
            '✅ You can explain WHY each strategy works (neuroscience behind it)',
            '✅ Your study time DECREASED but retention INCREASED (efficiency proof)',
            '✅ You taught one strategy to a classmate and they understood it',
            '✅ You stuck to the plan for 6+ days (consistency)',
            '✅ You identified your personal best strategy and can adapt it to other subjects'
          ]
        },
        professional: {
          title: 'Professional Skill Development Challenge',
          description: 'Use learning strategies to master a career-relevant skill (Excel, Tally, public speaking, etc.)',
          instructions: [
            '1️⃣ **Identify Career Skill**: Pick a job-critical skill (Excel pivot tables, Tally accounting, business communication)',
            '2️⃣ **Research Best Methods**: Find top 3 learning resources (YouTube playlists, Udemy courses, LinkedIn Learning)',
            '3️⃣ **Create Learning Plan**: Break skill into milestones (Week 1: Basics, Week 2: Intermediate, Week 3: Advanced)',
            '4️⃣ **Active Practice**: Do NOT just watch tutorials - build real projects (create sample company accounts in Tally)',
            '5️⃣ **Track & Adjust**: Keep a learning log - what is clicking? What is confusing? Pivot if needed',
            '6️⃣ **Teach Someone**: Explain what you learned to a classmate (Feynman Technique for professionals)',
            '7️⃣ **Apply at Internship**: Use the skill in a real work context or freelance project',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Tutorial hell - watching 50 videos but never practicing (build projects!)',
            '• Learning without a goal (Excel for what? Accounting? Data analysis? Be specific)',
            '• No accountability - join a community or find a study buddy',
            '• Not documenting progress (future employers want to see your learning journey)',
            '• Ignoring soft skills - technical skill + communication = career gold'
          ],
          successCriteria: [
            '✅ You can demonstrate the skill in a real project (portfolio-worthy)',
            '✅ You used active learning (built something, not just watched)',
            '✅ You can teach the skill basics to a beginner',
            '✅ You applied it in internship/freelance work',
            '✅ You identified next-level skills to learn',
            '✅ You have a replicable process for learning ANY new professional skill'
          ]
        },
        personal: {
          title: 'Personal Learning Challenge',
          description: 'Master a personal skill or hobby using science-backed learning strategies',
          instructions: [
            '1️⃣ **Pick Your Passion**: Choose a hobby you have always wanted to learn (guitar, cooking, fitness, photography)',
            '2️⃣ **Find Resources**: Identify top learning resources (apps, YouTube channels, local classes)',
            '3️⃣ **Set Clear Goals**: Make it measurable (learn 5 chords, cook 3 dishes, run 5K)',
            '4️⃣ **Spaced Practice**: Practice 20-30 min daily instead of 3 hours on Sunday (consistency beats intensity)',
            '5️⃣ **Join Community**: Find online groups or local meetups (accountability + inspiration)',
            '6️⃣ **Track Progress**: Keep a journal or video diary - celebrate small wins',
            '7️⃣ **Share Journey**: Post your progress on social media or teach a friend',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Perfectionism paralysis - waiting to start until you have the perfect guitar/camera/setup',
            '• No schedule - learning happens when you make time, not when you find time',
            '• Comparing to experts on day 1 (they have 10,000 hours of practice, you have 10)',
            '• Quitting after first failure (everyone sucks at first - push through the dip)',
            '• Not making it fun - if you dread practicing, you will quit (gamify it!)'
          ],
          successCriteria: [
            '✅ You can perform the skill at a functional level (play a song, cook a meal, run 5K)',
            '✅ You understand YOUR personal learning process for this skill',
            '✅ You built a consistent practice habit (4+ days per week)',
            '✅ You can identify what works for YOU (some learn by watching, some by doing)',
            '✅ You are motivated to keep improving (this is now a lifelong hobby)',
            '✅ You helped inspire someone else to start learning'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong metacognitive awareness by reflecting on your learning process',
        'Your ability to adapt strategies based on results demonstrates flexibility',
        'You\'re willing to experiment with different approaches to find what works',
        'Your systematic approach to learning shows good organizational skills',
        'You understand the importance of active engagement in learning'
      ],
      improvements: [
        'Consider tracking your learning progress more systematically',
        'Try incorporating more visual learning techniques like mind mapping',
        'Practice explaining concepts to others to strengthen understanding',
        'Experiment with different study environments to find what works best',
        'Set more specific learning goals with clear success criteria'
      ],
      nextSteps: [
        'Continue experimenting with different learning strategies',
        'Share your successful strategies with classmates or colleagues',
        'Consider learning about memory techniques to complement your strategies',
        'Explore how to apply these strategies to different types of content',
        'Develop a personal learning system that you can use for any new skill'
      ]
    },
    badge: {
      name: 'Learning Strategist',
      emoji: '🧠',
      description: 'Master of effective learning strategies and techniques'
    },
    shareMessage: 'Just mastered the art of effective learning! 🧠 #LearningStrategies #StudySmart'
  },
  {
    id: 'memory-techniques',
    title: 'Memory Techniques',
    emoji: '🧩',
    context: 'academic',
    discover: {
      scenario: "Corporate Law exam, 10 days. Memorize 100+ sections, cases, definitions. Tried highlighting, re-reading, notes. Forget in 2 days. Brain = sieve. Friend remembers using 'weird memory tricks.'",
      problemExplanation: [
        "Rote memorization: Repeat without understanding. Brain doesn't store. Quick forgetting",
        "No memory techniques: Rely repetition alone. Slow, ineffective",
        "No connections: New info isolated. Brain can't hook to anything. Falls out",
        "Stress interferes: Anxiety blocks memory. Stressed study = poor retention"
      ],
      solutionApproach: [
        "Memory Palace: Pick place (house, campus). Place info at stations. Brain loves spatial memory",
        "Vivid absurd images: Baby company wearing diaper = Section 3. Absurd = unforgettable",
        "Acronyms & chunking: PEAR = Profit, Equity, Assets, Revenue. Break 100 into 10 chunks",
        "Spaced repetition: Review Day 1, 3, 7, 14, 30. Anki app automates. Fights forgetting"
      ]
    },
    video: {
      title: 'Remember 100+ Facts With ZERO Rote Learning (B.Com Memory Hacks)',
      duration: 8,
      content: [
        'Welcome to the fascinating world of memory techniques!',
        'Today we will explore proven methods used by memory champions worldwide.',
        'Your brain is incredibly powerful - let me show you how to use it optimally.',
        'These techniques will transform how you memorize and retain information.'
      ],
      script: `**INTRO (0:00-0:30)**

Hey B.Com warriors! Got a Corporate Law exam with 100+ sections to memorize? Trying to cram ratios, Acts, and case laws but your brain is like "nope, not today"? Here is the harsh truth - rote learning is the SLOWEST way to remember stuff. I am about to drop memory hacks that memory champions use (yes, those people who memorize 1000 random numbers). Let us go!

**SECTION 1: The Memory Palace (Method of Loci) (0:30-2:30)**

Imagine this - you need to remember all sections of the Companies Act. Instead of repeating "Section 2, definitions... Section 3, formation..." boring! Try this:

The Memory Palace Technique:
1. Pick a place you know REALLY well (your house, college campus, daily commute route)
2. Mentally walk through it and place each piece of info at specific "stations"

Real B.Com Example - Companies Act Sections:
- Front gate = Section 2 (Definitions) - imagine a GIANT dictionary at your gate
- Living room = Section 3 (Company Formation) - visualize a baby company being born on your sofa (weird? PERFECT!)
- Kitchen = Section 4 (MOA/AOA) - imagine cooking up legal documents in a pot
- Bedroom = Section 5 (Share Capital) - money stacks on your bed

Why This Works: Your brain LOVES spatial memory (you never forget where your home is, right?). We are hijacking that superpower for exams!

Pro Tip: Make images ABSURD. Normal = forgettable. Absurd = unforgettable. A baby company wearing a diaper? You will NEVER forget that is Section 3!

**SECTION 2: Mnemonics - Turn Boring Lists Into Catchy Phrases (2:30-4:00)**

Need to remember financial ratios in order? DO NOT just list them. Make them SING.

Example 1: Liquidity Ratios (Current Ratio, Quick Ratio, Cash Ratio)
Mnemonic: "Can Quails Cry?"
- Can = Current Ratio
- Quails = Quick Ratio  
- Cry = Cash Ratio

Example 2: Companies Act 2013 - Formation Requirements (Name, Address, MOA, AOA, Directors)
Mnemonic: "Nerdy Aunts Make Amazing Desserts"
- Nerdy = Name availability
- Aunts = Address registration
- Make = MOA filing
- Amazing = AOA filing
- Desserts = Directors appointment

Real Talk: It sounds silly BUT your brain remembers stories and patterns WAY better than random lists. Embrace the weird!

**SECTION 3: Chunking - Break It Down (4:00-5:30)**

Your brain can hold 7±2 items in short-term memory. That is why phone numbers are chunked: 9876-543-210 instead of 9876543210.

Apply to B.Com:
BAD way to memorize ratios:
"Current Ratio = Current Assets / Current Liabilities Quick Ratio = Current Assets minus Inventory / Current Liabilities Cash Ratio = Cash / Current Liabilities"
(50 words = brain overload!)

GOOD way (Chunked):
Group 1: Liquidity Ratios Formula Pattern
- All divide by Current Liabilities (CL)
- Current = ALL current assets / CL
- Quick = Current assets MINUS inventory / CL  
- Cash = ONLY cash / CL

See? We grouped by PATTERN (all use CL). Now you remember the pattern, not 50 separate words!

**SECTION 4: The Linking Method - Chain Them Together (5:30-6:30)**

Need to remember a sequence of accounting steps? LINK them with a crazy story.

Example: Steps in Final Accounts Preparation
1. Trial Balance
2. Trading Account  
3. P&L Account
4. Balance Sheet

Story Method:
"A TRIAL lawyer (Trial Balance) went TRADING stocks (Trading Account), made PROFIT buying a Ferrari (P&L), and now has perfect BALANCE in life (Balance Sheet)"

Your brain LOVES narratives. Facts alone? Boring. Facts in a story? Sticky!

**SECTION 5: Spaced Repetition - The Forgetting Curve Hack (6:30-7:30)**

Here is the science: You forget 50% of new info within 24 hours (Ebbinghaus Curve). But if you review at STRATEGIC times, it sticks forever.

The Magic Review Schedule:
- Day 1: Learn Section 2 of Companies Act
- Day 2: Quick 5-min review (before forgetting kicks in)
- Day 4: Review again (slightly harder to recall = stronger memory)
- Day 7: Review again  
- Day 14: Final review

Each review takes LESS time but memory gets STRONGER. Use apps like Anki or RemNote to automate this.

B.Com Hack: Make flashcards for ratios/sections. Review them using spaced repetition. By exam time, they are BURNED into your brain.

**CONCLUSION (7:30-8:00)**

Let us recap the 5 Memory Superpowers:
1. Memory Palace - spatial memory for lists/sections
2. Mnemonics - catchy phrases for sequences  
3. Chunking - group by patterns, not random facts
4. Linking - story-based memory for processes
5. Spaced Repetition - review strategically, not desperately

Real talk: These are not "tricks" - they are how memory champions memorize 1000s of facts. Your B.Com syllabus? Easy mode.

Your action plan TODAY:
1. Pick ONE technique (start with Memory Palace or Mnemonics)
2. Apply it to your hardest subject  
3. Test yourself in 24 hours - you will be SHOCKED at your recall

Drop a comment - which technique will you try first? Let us turn that sieve brain into a steel trap! Peace!`
    },
    quiz: {
      title: 'Memory Techniques Quiz',
      questions: [
        {
          id: 6,
          question: 'You need to memorize 50 sections of the Companies Act. You try repeating "Section 2 definitions, Section 3 formation" 100 times but forget by next day. What is the best memory technique?',
          options: [
            'Repeat 200 times instead',
            'Use Memory Palace - place each section at locations in your house',
            'Highlight the sections in different colors',
            'Just read the textbook again'
          ],
          correct: 1,
          explanation: 'The Memory Palace (Method of Loci) leverages your brain spatial memory superpower - you never forget where rooms in your house are. By placing each section at familiar locations (gate=Section 2, living room=Section 3), you create a mental map that is almost impossible to forget. This technique is used by memory champions worldwide.'
        },
        {
          id: 7,
          question: 'Your mnemonic for liquidity ratios is "Can Quails Cry?" (Current, Quick, Cash Ratio). Why does this silly phrase work better than just memorizing the list?',
          options: [
            'It is easier to spell',
            'Your brain remembers patterns and stories far better than random lists',
            'It takes less time to write',
            'It sounds professional'
          ],
          correct: 1,
          explanation: 'Your brain evolved to remember stories, not lists. "Can Quails Cry?" creates a narrative pattern that engages multiple memory pathways (auditory, emotional, visual). Random lists like "Current Ratio Quick Ratio Cash Ratio" have no pattern, so your brain treats each as separate facts. Mnemonics hijack your story-memory system for boring lists.'
        },
        {
          id: 8,
          question: 'You are trying to memorize financial ratio formulas. Instead of 50 separate facts, you group them as "All Liquidity Ratios divide by Current Liabilities". What technique is this?',
          options: [
            'Chunking - grouping by pattern to reduce cognitive load',
            'Highlighting',
            'Speed reading',
            'Repetition'
          ],
          correct: 0,
          explanation: 'Chunking reduces cognitive load by finding patterns. Your brain can hold 7±2 items in short-term memory - that is why phone numbers are chunked (9876-543-210 not 9876543210). By recognizing that ALL liquidity ratios use "Current Liabilities" as denominator, you remember ONE pattern instead of THREE separate formulas. This is how experts think!'
        },
        {
          id: 9,
          question: 'You made flashcards for accounting steps. Instead of just re-reading them daily, you cover the answer and try to recall from memory. What is this technique called and why does it work?',
          options: [
            'Passive review - saves time',
            'Active Recall - strengthens retrieval pathways by forcing your brain to work',
            'Highlighting - makes important points stand out',
            'Summary writing - condenses information'
          ],
          correct: 1,
          explanation: 'Active Recall is THE most powerful study technique (proven by 100+ studies). When you RETRIEVE information from memory (vs just recognizing it while re-reading), you strengthen the neural pathways. Exams test RETRIEVAL, not recognition. Practice what you will perform! Re-reading feels easier but creates fluency illusion - you think you know it, but exam day proves otherwise.'
        },
        {
          id: 10,
          question: 'You learned Corporate Law Section 2 today. According to spaced repetition science, when should you review it again for maximum retention?',
          options: [
            'Tomorrow, then Day 4, then Day 7, then Day 14',
            'Every day for 30 days straight',
            'Never - you already know it',
            'Only the night before the exam'
          ],
          correct: 0,
          explanation: 'The Ebbinghaus Forgetting Curve shows you forget 50% within 24 hours. Spaced Repetition fights this by reviewing at STRATEGIC intervals (Day 1, 2, 4, 7, 14). Each review BEFORE you forget strengthens the memory pathway. Daily review is overkill (wastes time). Cramming the night before only gets info into short-term memory. Spaced repetition = permanent memory with minimal time investment.'
        }
      ]
    },
    challenge: {
      title: 'Memory Mastery Challenge',
      description: 'Master memory techniques by memorizing and recalling complex information',
      contexts: {
        academic: {
          title: 'Academic Memory Challenge',
          description: 'Use memory techniques to ace your hardest B.Com exam (100+ facts to memorize)',
          instructions: [
            '1️⃣ **Choose Your Hardest Subject**: Pick the exam with most memorization (Corporate Law, Acts, ratios, definitions)',
            '2️⃣ **Categorize Content**: Break into types - Lists (sections), Sequences (accounting steps), Formulas (ratios), Definitions',
            '3️⃣ **Match Technique to Type**: Memory Palace for lists, Mnemonics for sequences, Chunking for formulas, Linking for definitions',
            '4️⃣ **Create Memory Systems**: Build 1 Memory Palace (your house/campus), 3 mnemonics, 2 chunking patterns',
            '5️⃣ **Test Without Notes**: After creating memory system, close book - can you recall 80%+?',
            '6️⃣ **Spaced Repetition**: Review Day 1, 2, 4, 7 using Anki/RemNote or physical flashcards',
            '7️⃣ **Teach a Classmate**: Explain ONE technique to a friend - teaching = best test of understanding',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Using ONE technique for everything (match technique to content type!)',
            '• Making boring memory images (absurd = memorable, normal = forgettable)',
            '• Not testing yourself - just creating memory system is not enough',
            '• Skipping spaced repetition - you will forget 80% within 48 hours without it',
            '• Keeping techniques secret - teaching others strengthens YOUR memory too'
          ],
          successCriteria: [
            '✅ You can recall 90%+ of memorized content without notes',
            '✅ You used 3+ different memory techniques strategically',
            '✅ Your Memory Palace has 10+ "stations" with vivid imagery',
            '✅ You created mnemonics for at least 3 sequences/lists',
            '✅ You tested yourself 5+ times and tracked improvement',
            '✅ You taught ONE technique to a classmate successfully'
          ]
        },
        professional: {
          title: 'Professional Memory Challenge',
          description: 'Memorize client names, presentations, or job interview prep using memory techniques',
          instructions: [
            '1️⃣ **Choose Professional Need**: Pick what you need to memorize (presentation, client names, interview prep, product details)',
            '2️⃣ **Identify Technique Match**: Presentation outline = Memory Palace, Client names = Visual association, Interview FAQs = Chunking + mnemonics',
            '3️⃣ **Build Memory System**: Create visual anchors for each item (client name → visual pun, presentation points → journey through office)',
            '4️⃣ **Practice in Real Context**: Rehearse presentation WITHOUT slides, recall client names in mock meetings',
            '5️⃣ **Stress Test**: Can you recall under pressure? (mock presentation to friends, timed recall)',
            '6️⃣ **Apply at Work**: Use in real meeting/presentation - track confidence level (1-10 scale)',
            '7️⃣ **Document & Share**: Write down your system, teach it to 1 colleague/intern',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Not practicing under pressure (real presentations have stress - simulate it!)',
            '• Relying on slides/notes as backup (defeats the purpose - commit to memory)',
            '• Not customizing techniques for workplace (Memory Palace of your office > random house)',
            '• Forgetting to review - professional info needs spaced repetition too',
            '• Not tracking ROI - measure confidence boost, time saved, client impression'
          ],
          successCriteria: [
            '✅ You delivered 1+ presentation/meeting using ONLY memory (no slides/notes)',
            '✅ You can recall names of 20+ clients/colleagues with visual associations',
            '✅ Your memory system is workplace-adapted (office Memory Palace, industry mnemonics)',
            '✅ You used it in high-stakes situation (interview, pitch, client meeting)',
            '✅ You measured impact (confidence 8+/10, positive feedback received)',
            '✅ You taught the system to 1+ colleague - they found it useful'
          ]
        },
        personal: {
          title: 'Personal Memory Challenge',
          description: 'Use memory techniques for personal goals (languages, speeches, names at events)',
          instructions: [
            '1️⃣ **Pick Personal Goal**: Choose what matters to YOU (learn language vocab, wedding speech, remember names at networking event)',
            '2️⃣ **Select Right Technique**: Language vocab = Linking + imagery, Speech = Memory Palace, Names = Visual association',
            '3️⃣ **Build Your System**: Create personal memory anchors (wedding speech points = journey through couple relationship timeline)',
            '4️⃣ **Daily Practice**: 10-15 min daily (consistency > intensity) - test yourself without prompts',
            '5️⃣ **Find Accountability**: Share goal with friend, join memory challenge group online',
            '6️⃣ **Real-World Application**: Use at actual event (give speech, use language in conversation, remember names at party)',
            '7️⃣ **Reflect & Celebrate**: What worked? What felt awkward? Share your win on social media!',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• No clear goal - "improve memory" is vague, "memorize 100 Spanish words" is measurable',
            '• Inconsistent practice - 15 min daily beats 2 hours on Sunday',
            '• Not making it fun - if it feels like homework, you will quit (gamify it!)',
            '• Comparing to memory champions on Day 1 (they have 1000s of hours practice)',
            '• Not celebrating progress - remembered 10 names at party? That is a WIN!'
          ],
          successCriteria: [
            '✅ You achieved your personal memory goal (100 words learned, speech delivered, 20 names remembered)',
            '✅ You practiced 5+ days per week consistently',
            '✅ You used memory techniques in real situation (not just practice)',
            '✅ You can explain which technique worked best for YOU',
            '✅ You feel proud and motivated to continue (this is now a habit)',
            '✅ You inspired 1+ person to start their own memory challenge'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong understanding of different memory techniques',
        'Your ability to adapt techniques to different types of information is excellent',
        'You demonstrate creativity in creating memorable associations',
        'Your systematic approach to memory practice shows good discipline',
        'You\'re willing to experiment with different techniques to find what works'
      ],
      improvements: [
        'Consider practicing memory techniques more regularly',
        'Try combining multiple techniques for complex information',
        'Focus on creating more vivid and emotional associations',
        'Practice retrieval more frequently to strengthen memory pathways',
        'Experiment with different memory palace locations'
      ],
      nextSteps: [
        'Continue practicing memory techniques daily',
        'Explore advanced memory techniques like the Major System',
        'Consider joining a memory competition or group',
        'Teach memory techniques to others to reinforce your own learning',
        'Develop a personal memory system for lifelong learning'
      ]
    },
    badge: {
      name: 'Memory Master',
      emoji: '🧩',
      description: 'Expert in memory techniques and retention strategies'
    },
    shareMessage: 'Just mastered powerful memory techniques! 🧩 #MemoryMaster #StudySmart'
  },
  {
    id: 'information-processing',
    title: 'Information Processing',
    emoji: '⚡',
    context: 'academic',
    discover: {
      scenario: "Business Economics assignment. 5 research papers, 10 news articles, 3 case studies. Tabs everywhere. Copying random paragraphs. NO idea how to organize. Drowning in info, zero insights. Brain = mush. 3 days left.",
      problemExplanation: [
        "Info overload: Too much info → cognitive fatigue. Brain can't process 20 inputs",
        "No filtering: Read everything cover-to-cover. 80% irrelevant. Waste time",
        "No system: Copy-paste random paragraphs. Try organize later (never works). Frankenstein doc",
        "Can't distinguish sources: Reliable vs unreliable? Peer-reviewed vs blog? Use bad sources"
      ],
      solutionApproach: [
        "SQ3R: Survey (skim abstract), Question (what need?), Read (relevant only), Recite, Review. Strategic reading",
        "5W+H: Who, What, When, Where, Why, How. Organize systematically. Not random copy-paste",
        "Mind maps: Central topic → branches → twigs. Visual hierarchy. Brain processes visually",
        "Digital tools: Notion (organize), Zotero (sources), Evernote (capture). Retrieve easily"
      ]
    },
    video: {
      title: 'From Info Chaos to Insights: Process Like a Pro (B.Com Edition)',
      duration: 8,
      content: [
        'Welcome to the world of effective information processing!',
        'In our digital age, the ability to process information efficiently is crucial.',
        'Learn how to transform overwhelming information into actionable insights.',
        'These techniques will save you hours and improve your work quality dramatically.'
      ],
      script: `**INTRO (0:00-0:30)**

Hey B.Com hustlers! Ever had 50 browser tabs open for ONE assignment, copying random paragraphs into a Google Doc, hoping it magically becomes insights? Then panic-delete everything 2 hours before deadline because it is all MESS? Yeah, been there. Today I am teaching you how PROS process information - economists, researchers, consultants. Let us turn that info chaos into crystal-clear insights!

**SECTION 1: The Information Overwhelm Problem (0:30-1:30)**

Here is what most students do WRONG:
1. Open 20 sources at once (tabs everywhere!)
2. Read everything cover-to-cover (80% is irrelevant!)
3. Copy-paste random "good-sounding" paragraphs
4. Try to organize it later (spoiler: this never works)
5. End result: A Frankenstein doc with zero original thought

Why This Fails: Your brain cannot process 20 inputs simultaneously. You are trying to boil the ocean. Information processing requires STRUCTURE, not chaos.

The Fix: Use the INPUT → PROCESS → OUTPUT framework:
- INPUT: Strategic capture (what to collect)
- PROCESS: Organization + analysis (how to make sense)
- OUTPUT: Synthesis (your original insights)

Let us break it down!

**SECTION 2: INPUT - The SQ3R Method for Strategic Reading (1:30-3:30)**

Stop reading research papers like novels! Use SQ3R:

**S = SURVEY (2 minutes per source)**
Skim the abstract, headings, conclusion. Ask: "Is this even relevant to MY research question?"
Example - B.Com assignment on "Impact of GST on Small Businesses":
- Paper 1: GST implementation challenges (RELEVANT ✅)
- Paper 2: GST in Singapore (SKIP ❌ - different country!)

Pro Tip: Survey 10 sources, keep only 5 relevant ones. Saved you 50% reading time!

**Q = QUESTION (1 minute)**
Before reading, write 3 questions YOU want this source to answer.
Example:
1. What is GST impact on pricing?
2. How do small businesses comply?
3. What are the challenges?

**R1 = READ (Active, not passive!)**
Read ONLY to find answers to YOUR questions. Ignore everything else.
Highlight/annotate as you go (PDF: Adobe Reader, Papers: Google Docs comments).

**R2 = RECITE (in your own words)**
Close the paper. Write a 3-sentence summary from memory:
"This paper found that GST increased compliance costs by 15% for small businesses. Main challenge: lack of digital infrastructure. Recommendation: government should provide training."

**R3 = REVIEW**
Compare your summary to the paper. Did you miss key points? Adjust.

Result: You now have a USABLE summary, not 50 highlighted PDFs you will never re-read.

**SECTION 3: PROCESS - The 5W+H Analysis Framework (3:30-5:00)**

You have summaries. Now make sense of them using 5W+H:

**Who?** Which stakeholders are affected? (Small businesses, government, consumers)
**What?** What is the core issue/finding? (GST compliance burden)
**When?** When did this happen/study conducted? (2017 GST rollout)
**Where?** Where is this applicable? (India, urban vs rural)
**Why?** Why does this matter? (Affects 60M small businesses!)
**How?** How does it work/what is the mechanism? (Digital filing system)

B.Com Example - Organizing GST Research:
Create a table:
| Source | Who | What | Why | Key Insight |
| Paper 1 | Small biz | 15% cost increase | No digital infra | Need govt training |
| Article 2 | Retailers | Pricing confusion | Multiple tax slabs | Simplify structure |

Now you have STRUCTURE, not random notes!

**SECTION 4: OUTPUT - The Synthesis Pyramid (5:00-6:30)**

Do NOT just list summaries. Create ORIGINAL insights by synthesizing.

The Synthesis Pyramid:
**Level 1 (Base):** Facts from sources (GST increased costs 15%)
**Level 2 (Middle):** Patterns across sources (3 papers ALL mention digital infrastructure gap)
**Level 3 (Top):** YOUR insight (Problem is not GST itself, but lack of govt support for digital transition)

This is how you go from C-grade "I listed stuff" to A-grade "I have original analysis"!

Example Synthesis Statement:
"While existing research focuses on GST tax rates, the real barrier for small businesses is the digital divide. Without addressing infrastructure and training gaps, policy changes alone will not reduce compliance burden."

See? You just created ORIGINAL thought by connecting dots across sources!

**SECTION 5: Tools to Save Your Sanity (6:30-7:30)**

Digital Tools for B.Com Students:
1. **Notion/Obsidian:** Create a research database (tag by theme, source type)
2. **Mendeley/Zotero:** Auto-organize research papers with citations
3. **Mindmeister:** Visual mind maps to connect ideas
4. **Google Keep:** Quick capture of random insights (tag them!)

Analog Tool (works GREAT):
- Index cards: 1 source = 1 card. Physically arrange them by theme. Sounds old-school but your brain LOVES spatial organization!

**CONCLUSION (7:30-8:00)**

Let us recap the framework:
1. SQ3R for INPUT - survey, question, read actively, recite, review
2. 5W+H for PROCESS - who, what, when, where, why, how
3. Synthesis Pyramid for OUTPUT - facts → patterns → insights

Real talk: This is how McKinsey consultants, economists, and PhD researchers work. It feels slower at first, but you will finish assignments 3X faster with 10X better quality.

Your action plan TODAY:
1. Pick 1 assignment with research component
2. Use SQ3R on just 2 sources
3. Fill out 5W+H table
4. Write 1 synthesis statement

Drop a comment - what is your biggest info processing struggle? I will reply to everyone! Now go turn that chaos into clarity. Peace!`
    },
    quiz: {
      title: 'Information Processing Quiz',
      questions: [
        {
          id: 11,
          question: 'You have 10 research papers for your GST assignment. You start reading Paper 1 word-by-word from page 1. After 2 hours, you realize 80% is irrelevant. What should you have done?',
          options: [
            'Read even more carefully',
            'Use SQ3R - Survey first (skim abstract/headings) to check relevance BEFORE deep reading',
            'Just use Wikipedia instead',
            'Copy the introduction and hope for the best'
          ],
          correct: 1,
          explanation: 'SQ3R (Survey, Question, Read, Recite, Review) saves massive time by having you SURVEY (skim) first to determine if a source is even relevant to your research question. Most students waste hours reading irrelevant papers cover-to-cover. Survey 10 sources in 20 minutes, keep only 5 relevant ones, THEN deep-read those. This is how researchers actually work.'
        },
        {
          id: 12,
          question: 'You highlighted 50 paragraphs in a research paper but cannot remember ANY of it the next day. What went wrong?',
          options: [
            'You need to highlight in more colors',
            'You did passive reading - should have used RECITE step (summarize from memory in your own words)',
            'The paper was too difficult',
            'You need to read it 10 more times'
          ],
          correct: 1,
          explanation: 'Highlighting is PASSIVE - it creates fluency illusion (you recognize highlighted text but cannot recall it). The RECITE step in SQ3R forces ACTIVE processing: close the paper, write a 3-sentence summary from memory. This is retrieval practice (same as active recall). If you cannot recite it, you did not learn it. Highlighting 50 paragraphs = learning ZERO paragraphs.'
        },
        {
          id: 13,
          question: 'You are organizing research notes for your Business Economics assignment. You have facts from 5 sources but zero original insights. How do you create A-grade analysis?',
          options: [
            'Just list all the facts from each source',
            'Use Synthesis Pyramid - find PATTERNS across sources, then create YOUR insight',
            'Copy-paste the best-sounding paragraphs',
            'Add more sources to make it look impressive'
          ],
          correct: 1,
          explanation: 'The Synthesis Pyramid goes: Level 1 (Base) = Facts from sources, Level 2 (Middle) = Patterns ACROSS sources, Level 3 (Top) = YOUR original insight connecting the dots. Example: If 3 sources ALL mention "digital infrastructure gap" for GST compliance, YOUR synthesis = "The real GST barrier is not tax policy but digital divide." This is how you go from C-grade (I listed stuff) to A-grade (I analyzed and synthesized).'
        },
        {
          id: 14,
          question: 'You have notes from 8 sources but they are a chaotic mess. You cannot find anything when writing. What framework organizes this?',
          options: [
            'Just ctrl+F to search',
            'Use 5W+H framework - organize by Who/What/When/Where/Why/How in a table',
            'Highlight everything in different colors',
            'Start over from scratch'
          ],
          correct: 1,
          explanation: 'The 5W+H framework (Who, What, When, Where, Why, How) creates STRUCTURE from chaos. Make a table: each row = 1 source, columns = Who is affected? What is the finding? Why does it matter? How does it work? Now you can instantly see patterns (3 sources mention same "Who"), compare findings, and synthesize. Without structure, your notes are just random paragraphs you will never re-read. Structure = usable knowledge.'
        },
        {
          id: 15,
          question: 'Your friend finishes research assignments 3X faster than you with better quality. They mention using "strategic reading, not reading everything." What do they mean?',
          options: [
            'They skip all the hard parts',
            'They use SQ3R - Survey to filter out 50% irrelevant sources, Question to read only for answers, not cover-to-cover',
            'They use ChatGPT for everything',
            'They are just naturally smarter'
          ],
          correct: 1,
          explanation: 'Strategic reading means: (1) Survey 10 sources, eliminate 5 irrelevant ones (saved 50% time), (2) Question: write 3 specific questions you need answered, (3) Read ONLY to find those answers, skip everything else. Most students read 100% of every source (massive time waste). Pros read 20% of every source strategically. SQ3R is literally how McKinsey consultants, academics, and researchers process information at scale.'
        }
      ]
    },
    challenge: {
      title: 'Information Processing Mastery',
      description: 'Develop skills to efficiently process, organize, and synthesize information',
      contexts: {
        academic: {
          title: 'Academic Information Processing Challenge',
          description: 'Transform research chaos into A-grade insights for your next B.Com assignment',
          instructions: [
            '1️⃣ **Choose Assignment**: Pick a research-heavy B.Com assignment (Business Law case analysis, Economics policy review, Marketing strategy)',
            '2️⃣ **Strategic Sourcing**: Find 8-10 sources (journals, case studies, news articles) - survey ALL in 30 min, keep only 5 most relevant',
            '3️⃣ **SQ3R Processing**: For each kept source - Survey (skim), Question (write 3 Qs), Read (for answers), Recite (3-sentence summary), Review',
            '4️⃣ **5W+H Organization**: Create table - columns: Source, Who, What, Why, How, Key Insight',
            '5️⃣ **Synthesis Pyramid**: Find patterns across sources (what do 3+ sources agree on?), write YOUR original insight',
            '6️⃣ **Draft Assignment**: Write with structure - Facts (Level 1), Patterns (Level 2), Your Analysis (Level 3)',
            '7️⃣ **Peer Review**: Share your synthesis with 1 classmate - can they follow your logic?',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Reading sources cover-to-cover without surveying first (wastes 50% of time)',
            '• Copy-pasting paragraphs hoping they magically become insights (plagiarism + no learning)',
            '• No organization system - 50 tabs open, ctrl+F to find stuff (recipe for disaster)',
            '• Listing facts with zero synthesis (C-grade: "I read stuff" vs A-grade: "I analyzed")',
            '• Not testing understanding - if you cannot explain synthesis to a friend, you do not have one'
          ],
          successCriteria: [
            '✅ You processed 5+ sources using SQ3R in under 4 hours (not 2 days!)',
            '✅ Your 5W+H table clearly shows patterns across sources',
            '✅ You wrote 1+ synthesis statement that is YOUR original insight (not from sources)',
            '✅ Your assignment has clear structure: Facts → Patterns → Analysis',
            '✅ A classmate could follow your logic when you explained it',
            '✅ You saved 50%+ time compared to old chaotic method'
          ]
        },
        professional: {
          title: 'Professional Information Processing Challenge',
          description: 'Process market research or industry reports like a management consultant',
          instructions: [
            '1️⃣ **Choose Professional Task**: Pick a work/internship research task (industry analysis, competitor research, market trends)',
            '2️⃣ **Gather Intel**: Find 6-8 sources (industry reports, LinkedIn articles, company filings, expert interviews)',
            '3️⃣ **Strategic Filtering**: Survey all sources in 20 min - keep only ones answering YOUR specific business question',
            '4️⃣ **SQ3R + Note Template**: For each source, fill template: Key Finding, Supporting Data, Business Implication',
            '5️⃣ **Stakeholder Analysis**: Who cares about this? (Boss, clients, investors) - organize info by their priorities',
            '6️⃣ **Executive Summary**: Write 1-page synthesis - What matters? Why? What should we do?',
            '7️⃣ **Presentation**: Present findings in 5-min deck - test on a colleague/mentor',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Presenting data dumps with no recommendations ("Here are 50 facts!" - boss wants: "What should we DO?")',
            '• Not filtering by stakeholder priorities (your boss wants ROI, not industry history)',
            '• Using academic language in business context (say "profit driver" not "economic factor")',
            '• No visual organization - walls of text (use tables, charts - busy execs skim)',
            '• Forgetting the "So what?" test - every fact needs business implication'
          ],
          successCriteria: [
            '✅ You delivered actionable recommendations, not just data',
            '✅ Your executive summary is 1 page with clear: Findings → Implications → Recommendations',
            '✅ You organized by stakeholder priorities (what THEY care about)',
            '✅ Your presentation passed the 5-minute test (concise, impactful)',
            '✅ Colleague/boss gave positive feedback on clarity',
            '✅ You can apply this process to ANY business research task'
          ]
        },
        personal: {
          title: 'Personal Information Processing Challenge',
          description: 'Research and decide on a personal goal using pro information processing',
          instructions: [
            '1️⃣ **Pick Personal Decision**: Choose something you are researching (career path, grad school, side hustle, major purchase)',
            '2️⃣ **Define Key Questions**: Write 5 questions you NEED answered (e.g., MBA vs CFA - which is better for investment banking?)',
            '3️⃣ **Multi-Source Research**: Find 8 sources (Reddit AMAs, YouTube, articles, expert interviews) - diverse perspectives!',
            '4️⃣ **SQ3R Processing**: Survey to filter, read for YOUR questions only, recite summaries',
            '5️⃣ **Pro-Con Matrix**: Create table: Option A vs B, columns: Cost, Time, Career Impact, Success Rate, Personal Fit',
            '6️⃣ **Decision Synthesis**: Based on patterns, what is YOUR decision? Write 1-paragraph rationale',
            '7️⃣ **Accountability Share**: Share decision + rationale with mentor/friend who will challenge your logic',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Confirmation bias - only reading sources that agree with what you already believe',
            '• Analysis paralysis - researching for 6 months, never deciding (set deadline!)',
            '• Not checking source credibility (Reddit bro-science ≠ industry expert)',
            '• Ignoring opportunity cost - "free" options still cost TIME',
            '• Not stress-testing decision - if a friend pokes holes in your logic, it is weak'
          ],
          successCriteria: [
            '✅ You made a decision backed by processed information (not gut feeling alone)',
            '✅ Your pro-con matrix has 5+ factors with data/evidence for each',
            '✅ You can explain your rationale in 2 minutes - clear logic flow',
            '✅ You checked for confirmation bias (included sources you disagree with)',
            '✅ A mentor/friend challenged your logic and you defended it successfully',
            '✅ You feel confident in the decision (information reduces anxiety!)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong analytical skills in processing information',
        'Your ability to organize information systematically is excellent',
        'You demonstrate good critical thinking in source evaluation',
        'Your synthesis skills help you connect ideas effectively',
        'You\'re systematic in your approach to information processing'
      ],
      improvements: [
        'Consider using more visual organization techniques like mind maps',
        'Practice synthesizing information from multiple sources more regularly',
        'Focus on developing stronger critical thinking skills',
        'Try using digital tools to enhance your information processing',
        'Work on presenting processed information more clearly'
      ],
      nextSteps: [
        'Continue practicing information processing techniques',
        'Explore advanced tools for information management',
        'Develop your critical thinking skills further',
        'Share your information processing techniques with others',
        'Create a personal knowledge management system'
      ]
    },
    badge: {
      name: 'Information Processor',
      emoji: '⚡',
      description: 'Expert in processing, organizing, and synthesizing information'
    },
    shareMessage: 'Just mastered the art of information processing! ⚡ #InformationProcessing #CriticalThinking'
  },
  {
    id: 'skill-transfer',
    title: 'Skill Transfer',
    emoji: '🔄',
    context: 'professional',
    discover: {
      scenario: "Aced Financial Accounting (journal entries, ledgers, trial balance). Now Cost Accounting feels COMPLETELY different. Re-learning from scratch. Friend: 'They're basically same—just different application.' Frustrated—why can't TRANSFER what you know?",
      problemExplanation: [
        "No metacognitive awareness: Learn at surface (steps), not principle (WHY works)",
        "Surface not deep: Financial 'Debit assets.' Cost feels different. Didn't learn 'Debit = IN' (works everywhere)",
        "Can't identify transferable: Don't see patterns. Financial vs Cost = different. Actually SAME double-entry",
        "Poor abstraction: Learn Financial alone. Can't abstract principle to Cost, Management, Tax"
      ],
      solutionApproach: [
        "Learn principles: Not 'Journal format' (surface). Learn 'Every transaction dual effect—IN/OUT' (principle). Transfers instantly",
        "Identify core: Ask 'What's UNIVERSAL?' Financial: double-entry. Cost: same. Transfer = instant",
        "Use analogies: Financial = personal expenses. Cost = business expenses. Same concept, different context",
        "Reflect: After learning, ask 'What principle? Where else applies?' Reflection = transfer"
      ]
    },
    video: {
      title: 'Stop Re-Learning Everything: Master Skill Transfer (B.Com Hacks)',
      duration: 8,
      content: [
        'Welcome to the world of skill transfer!',
        'Learn how to apply knowledge from one context to another effortlessly.',
        'Stop re-learning everything from scratch - transfer what you already know!',
        'These techniques will make you a faster, smarter learner in all areas.'
      ],
      script: `**INTRO (0:00-0:30)**

B.Com fam, real talk - you aced Financial Accounting but Cost Accounting feels like a new planet? You nailed Statistics but Business Analytics feels impossible? Here is the secret: 80% of what you are "re-learning" is stuff you ALREADY know - you just do not see the connection. I am about to teach you Skill Transfer - how to recycle your existing skills for NEW contexts. Let us go!

**SECTION 1: The "Starting From Scratch" Trap (0:30-1:30)**

Most students do this:
- Financial Accounting ✅ (learned journal entries, ledgers, trial balance)
- Cost Accounting starts → "This is totally different!" → Re-learn from zero ❌

Reality Check: Cost Accounting uses THE SAME double-entry system, THE SAME debit-credit logic. Only difference? WHAT you are tracking (costs vs financial transactions).

The Problem: You learned Financial Accounting at SURFACE level (steps to follow) instead of PRINCIPLE level (WHY double-entry works).

Surface Learning = "In Financial, I debit assets, credit liabilities"
Principle Learning = "Debit = what comes IN, Credit = what goes OUT - this rule works EVERYWHERE"

When you learn principles, you transfer to Cost, Management, Tax accounting instantly!

**SECTION 2: The Skill Transfer Framework (1:30-3:30)**

Here is how to transfer ANY skill:

**Step 1: Identify the Core Principle**
Ask: "What is the UNIVERSAL rule here that works across contexts?"

Example - Accounting:
- Surface: "Journal entry format is Date-Particulars-Debit-Credit"
- Principle: "Every transaction has dual effect - something comes in, something goes out"

Once you get the PRINCIPLE, you can apply it to:
- Cost Accounting (materials IN, work-in-progress OUT)
- Tax Accounting (income IN, deductions OUT)
- Personal finance (salary IN, expenses OUT)

**Step 2: Find the Analogies**
Connect new context to something you ALREADY know.

Example:
- Financial Accounting ledger = Cost sheet (both track flow)
- Trial Balance = Cost reconciliation statement (both ensure accuracy)
- P&L statement = Production cost statement (both show profitability)

See? Same concepts, different labels!

**Step 3: Practice the Transfer**
Do NOT just "understand" it - APPLY it!

Take a Financial Accounting problem → Convert it to Cost Accounting context
Example: If journal entry tracks "Purchased goods Rs 10,000"
In Cost Accounting: "Issued raw materials Rs 10,000" → SAME logic, different purpose!

**SECTION 3: Real B.Com Transfer Examples (3:30-5:30)**

**Transfer 1: Statistics → Business Analytics**
- Statistics: You learned mean, median, standard deviation
- Analytics: SAME formulas, just applied to business data (sales trends, customer behavior)
- Transfer hack: "Standard deviation in stats = sales volatility in analytics"

**Transfer 2: Economics → Marketing**
- Economics: Supply-Demand curve
- Marketing: Customer demand curve, pricing strategy
- Transfer hack: "Economics principles = Marketing strategy foundations"

**Transfer 3: Business Law → Corporate Governance**
- Law: Contract principles (offer, acceptance, consideration)
- Governance: Shareholder agreements (SAME contract principles!)
- Transfer hack: "Legal reasoning transfers to ALL business contexts"

**Transfer 4: Communication Skills → Every Subject**
- Presentation skills in Semester 1
- Use SAME skills for: Group projects, viva, job interviews, client pitches
- Transfer hack: "Soft skills are universal - learn once, use forever"

**SECTION 4: The Metacognitive Question Framework (5:30-6:30)**

After learning ANYTHING, ask yourself:
1. **What is the core principle?** (Not "what are the steps" but "WHY does this work?")
2. **Where else can I use this?** (Which other subjects/jobs/life areas?)
3. **What is this similar to?** (Find analogies to existing knowledge)
4. **How would I teach this?** (Teaching reveals if you understand principles)

Example - After learning Break-Even Analysis:
1. Core principle? "Fixed costs + Variable costs = Total costs, find where Revenue = Costs"
2. Where else? Personal finance (monthly expenses vs income), startup planning, freelancing
3. Similar to? See-saw balance (costs on one side, revenue on other, find equilibrium)
4. Teach it? "Imagine selling momos - how many to cover stall rent + ingredients?"

**SECTION 5: Build Your Transfer Map (6:30-7:30)**

Create a "Skills Map" - visually connect what you know:

Center: "Double-Entry System"
Branches:
- Financial Accounting (learned ✅)
- Cost Accounting (applying... 🔄)
- Tax Accounting (future 📅)
- Personal budgeting (life skill 🏠)

When you see the MAP, you realize: "I am not learning 4 separate things - I am applying ONE principle 4 ways!"

This is how experts think. Beginners see 10 different subjects. Experts see 3 core principles with 10 applications.

**CONCLUSION (7:30-8:00)**

Let us recap Skill Transfer:
1. Learn PRINCIPLES, not just procedures
2. Ask: "What is the core rule that works everywhere?"
3. Find analogies between new and existing knowledge
4. Practice applying skills in different contexts
5. Build a mental map connecting all your skills

Real talk: This is THE skill that separates good students from GREAT ones. You are not just collecting knowledge - you are building a SYSTEM where everything connects.

Your action plan TODAY:
1. Pick 2 B.Com subjects you know well
2. Write down 1 core principle they SHARE
3. Apply that principle to a 3rd subject you are learning

Drop a comment - what skill are you going to transfer? Let us level up! Peace!`
    },
    quiz: {
      title: 'Skill Transfer Quiz',
      questions: [
        {
          id: 16,
          question: 'You aced Financial Accounting but struggle with Cost Accounting, even though both use double-entry systems. What is the problem?',
          options: [
            'Cost Accounting is just harder',
            'You learned Financial Accounting at surface level (steps) not principle level (WHY it works)',
            'You need to study more hours',
            'They are completely different subjects'
          ],
          correct: 1,
          explanation: 'When you learn at SURFACE level (memorize steps: "debit assets, credit liabilities"), you cannot transfer to new contexts. When you learn at PRINCIPLE level ("debit = what comes IN, credit = what goes OUT"), that rule works in Financial, Cost, Tax, and even personal budgeting. Surface learning = re-learn everything. Principle learning = transfer instantly. This is why some students breeze through accounting while others struggle - same content, different depth.'
        },
        {
          id: 17,
          question: 'Your friend says "Statistics and Business Analytics are basically the same - just different data." How can you use this insight to transfer your Statistics knowledge?',
          options: [
            'Ignore it - they are completely different',
            'Identify the core principle (mean, median work for ALL data - exam scores or sales trends)',
            'Just memorize Analytics formulas separately',
            'Wait for the teacher to explain everything'
          ],
          correct: 1,
          explanation: 'Skill transfer happens when you identify CORE PRINCIPLES that work across contexts. Mean, median, standard deviation are NOT "Statistics formulas" - they are universal data analysis tools. You already know HOW to calculate them from Statistics. In Analytics, you just apply them to business data (customer age distribution, sales variance). Same tool, different application. Recognizing this saves you 50% learning time!'
        },
        {
          id: 18,
          question: 'You learned Break-Even Analysis in Cost Accounting. Where else can you apply the SAME principle (Fixed costs + Variable costs, find revenue = costs point)?',
          options: [
            'Nowhere - it only works in Cost Accounting',
            'Personal finance, startup planning, freelancing - anywhere with costs vs revenue',
            'Only in other accounting subjects',
            'Just memorize it for exams'
          ],
          correct: 1,
          explanation: 'Break-Even is a UNIVERSAL principle: "At what point do earnings cover expenses?" This applies to: (1) Personal budget (monthly salary vs expenses), (2) Freelancing (how many projects to cover living costs?), (3) Startup (units to sell before profit). Students who see it as "just a Cost Accounting formula" miss 90% of its value. Experts transfer it to LIFE decisions. This is metacognition - thinking "where ELSE can I use this?"'
        },
        {
          id: 19,
          question: 'You are learning Business Analytics after completing Statistics. Instead of starting from scratch, what is the smartest transfer approach?',
          options: [
            'Forget Statistics - Analytics is new',
            'Create analogies: "Mean in Statistics = Average sales in Analytics, Standard deviation = Sales volatility"',
            'Just memorize Analytics as separate formulas',
            'Ask teacher to re-teach everything'
          ],
          correct: 1,
          explanation: 'Analogies are transfer bridges connecting new knowledge to existing knowledge. When you say "Standard deviation = sales volatility," your brain goes "OH! I already know standard deviation from Statistics - I just apply it to sales data!" This is 10X faster than treating Analytics as a new subject. Research shows students who build analogies learn 3X faster with better retention because they leverage existing neural pathways instead of building new ones from scratch.'
        },
        {
          id: 20,
          question: 'After learning Economics supply-demand curves, you realize they are similar to Marketing pricing strategies. What skill are you demonstrating?',
          options: [
            'Memorization',
            'Pattern recognition - seeing same principle (price affects demand) across different subjects',
            'Confusion',
            'Guessing'
          ],
          correct: 1,
          explanation: 'Pattern recognition is THE core skill of experts. Beginners see "10 different subjects." Experts see "3 principles applied 10 ways." When you recognize that Economics supply-demand = Marketing pricing strategy = SAME principle (higher price → lower demand), you have just unlocked transfer. Now you can predict: "This principle probably works in Real Estate, E-commerce, Freelancing too!" One principle learned, infinite applications. This is how you become a FAST learner.'
        }
      ]
    },
    challenge: {
      title: 'Skill Transfer Mastery',
      description: 'Develop the ability to transfer skills and knowledge across different contexts',
      contexts: {
        academic: {
          title: 'Academic Skill Transfer Challenge',
          description: 'Transfer what you learned in one B.Com subject to accelerate learning in another',
          instructions: [
            '1️⃣ **Pick Your Mastered Subject**: Choose a B.Com subject you scored 75%+ in (Financial Accounting, Statistics, Economics)',
            '2️⃣ **Identify Core Principles**: Write down 3 PRINCIPLES (not steps) - e.g., "Double-entry = dual effect" not "debit left, credit right"',
            '3️⃣ **Find Transfer Target**: Pick a current/upcoming subject that shares principles (Financial → Cost, Stats → Analytics, Econ → Marketing)',
            '4️⃣ **Create Analogy Map**: Draw connections - "Financial ledger = Cost sheet", "Stats mean = Analytics average"',
            '5️⃣ **Apply & Test**: Take 1 problem from OLD subject, convert it to NEW subject context - does principle work?',
            '6️⃣ **Identify Gaps**: What DOES NOT transfer? (surface features, terminology, specific formulas - these you learn fresh)',
            '7️⃣ **Teach Transfer**: Explain to a classmate how Subject A helps with Subject B using your analogy map',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Transferring steps instead of principles (steps change, principles do not)',
            '• Assuming 100% transfers (80% principles transfer, 20% is new - learn that 20% fresh)',
            '• Not testing the transfer (just "feeling" like they are similar is not enough - solve actual problems)',
            '• Ignoring differences (forcing transfer where it does not fit creates confusion)',
            '• Not documenting what transfers (create a reusable map for future subjects)'
          ],
          successCriteria: [
            '✅ You identified 3+ core principles from old subject that work in new subject',
            '✅ You created an analogy map showing clear connections',
            '✅ You solved 5+ problems in new subject using transferred knowledge',
            '✅ You learned new subject 40%+ faster than if starting from scratch',
            '✅ You taught transfer map to 1 classmate - they understood it',
            '✅ You have a documented process for transferring to NEXT subject'
          ]
        },
        professional: {
          title: 'Professional Skill Transfer Challenge',
          description: 'Transfer B.Com skills to workplace/internship contexts',
          instructions: [
            '1️⃣ **Identify Workplace Need**: What skill does your internship/job need? (Excel analysis, client communication, presentation)',
            '2️⃣ **Find B.Com Connection**: Which B.Com subject taught this principle? (Stats → Data analysis, Marketing → Communication, Accounting → Excel)',
            '3️⃣ **Extract Core Principle**: What is the TRANSFERABLE rule? (Stats hypothesis testing = Business A/B testing)',
            '4️⃣ **Translate to Work Context**: Reframe academic skill in business language (not "null hypothesis" say "baseline performance")',
            '5️⃣ **Pilot Project**: Apply transferred skill in small work task first (analyze 1 dataset before presenting to boss)',
            '6️⃣ **Seek Feedback**: Show boss/mentor - did transfer work? What needs adaptation?',
            '7️⃣ **Document & Scale**: Write down what transferred successfully - apply to bigger projects',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Using academic jargon at work (say "customer trends" not "statistical distribution")',
            '• Assuming theory = practice (academic Excel ≠ real messy business data - adapt!)',
            '• Not translating examples (textbook case studies ≠ your company - find parallels)',
            '• Overconfidence - "I know this from college" (work adds complexity - stay humble, ask questions)',
            '• Not showcasing transfer (bosses love "I applied my Stats knowledge to solve this" - show your value!)'
          ],
          successCriteria: [
            '✅ You successfully applied 1+ B.Com skill at internship/job',
            '✅ You translated academic concept to business language',
            '✅ Boss/mentor gave positive feedback on your application',
            '✅ You identified what transfers vs what needs work adaptation',
            '✅ You saved time by not re-learning from scratch (leveraged college knowledge)',
            '✅ You documented transfer process for resume/interviews (shows learning agility!)'
          ]
        },
        personal: {
          title: 'Personal Skill Transfer Challenge',
          description: 'Apply B.Com skills to solve personal life challenges',
          instructions: [
            '1️⃣ **Identify Personal Challenge**: What life decision stresses you? (budgeting, side hustle planning, major purchase)',
            '2️⃣ **Find B.Com Skill Match**: Which subject helps? (Accounting → Budgeting, Economics → Pricing, Stats → Risk analysis)',
            '3️⃣ **Extract Principle**: What is the core rule? (Break-Even = "When do earnings cover expenses?" works for budgets too)',
            '4️⃣ **Apply to Life**: Use B.Com frameworks for personal decisions (create personal P&L, cost-benefit analysis for purchases)',
            '5️⃣ **Track Results**: Did B.Com thinking improve your decision? (saved money? reduced stress? better outcome?)',
            '6️⃣ **Share Hack**: Teach 1 friend how to use B.Com skills for life (budgeting, decision-making)',
            '7️⃣ **Build Life System**: Create templates (personal budget using accounting format, decision matrix using business analysis)',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Overthinking - not every life decision needs a 5-page analysis (use frameworks, but stay practical)',
            '• Ignoring emotions - business logic + gut feeling = best personal decisions (not one or the other)',
            '• Not simplifying - academic complexity works in exams, life needs simple systems',
            '• Keeping skills in silo - "B.Com is for college" (NO! These are LIFE skills - use them!)',
            '• Not celebrating wins - you just used Cost Accounting to plan a trip budget? That is AWESOME!'
          ],
          successCriteria: [
            '✅ You applied 1+ B.Com framework to personal life decision',
            '✅ You achieved measurable result (saved Rs X, made better choice, reduced stress)',
            '✅ You created simplified templates for future use (personal budget, decision matrix)',
            '✅ You taught 1 friend to use B.Com thinking for life',
            '✅ You see B.Com as life skills, not just exam subjects',
            '✅ You feel confident applying academic knowledge to real life'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You show strong metacognitive awareness about your learning',
        'Your ability to identify underlying principles is excellent',
        'You demonstrate good pattern recognition skills',
        'Your use of analogies helps others understand connections',
        'You\'re systematic in your approach to skill transfer'
      ],
      improvements: [
        'Consider practicing pattern recognition more regularly',
        'Try creating more analogies to strengthen connections',
        'Focus on developing deeper understanding of principles',
        'Practice reflecting on your learning process more often',
        'Work on helping others develop transfer skills'
      ],
      nextSteps: [
        'Continue practicing skill transfer across different contexts',
        'Develop your pattern recognition skills further',
        'Create more analogies and connections between domains',
        'Teach others about skill transfer techniques',
        'Build a personal framework for lifelong skill transfer'
      ]
    },
    badge: {
      name: 'Skill Transfer Expert',
      emoji: '🔄',
      description: 'Master of transferring skills and knowledge across contexts'
    },
    shareMessage: 'Just mastered the art of skill transfer! 🔄 #SkillTransfer #LifelongLearning'
  },
  {
    id: 'learning-agility',
    title: 'Learning Agility',
    emoji: '⚡',
    context: 'professional',
    discover: {
      scenario: "Internship boss: 'Switch to Tally ERP. Need you productive by Monday.' Never used Tally. Classmates took 3-month course. You have 4 days. Panic or learn FAST?",
      problemExplanation: [
        "Constant new tools: Tally, SAP, PowerBI. Internships demand instant productivity. No time for courses",
        "Too slow: Traditional '3-month course' = too slow. Job market moves faster",
        "Fear mistakes: Scared to experiment. But trial-error = learn fastest. Waiting perfect = never start",
        "No system: Re-invent wheel every time. Need rapid acquisition framework"
      ],
      solutionApproach: [
        "70-20-10: 70% hands-on (open Tally, make mistakes!), 20% ask colleagues, 10% watch tutorials",
        "Just-In-Time: Don't learn entire software. Learn ONLY 20% you need Monday. Minimum Viable Skill",
        "Experimentation Loop: Try → Fail → Google → Fix → Repeat. Each error teaches",
        "Learning Sprints: 1 week functional, not 3 months expert. Pressure = focus"
      ]
    },
    video: {
      title: 'Learn ANY Skill in 4 Days: The Learning Agility Blueprint',
      duration: 8,
      content: [
        'Learning agility is the ability to learn quickly and adapt to new situations.',
        'In today fast-paced world, this skill separates good performers from great ones.',
        'Learn the exact framework used by top performers to master new skills rapidly.',
        'These techniques will help you stay ahead in your career and academics.'
      ],
      script: `**INTRO (0:00-0:30)**

Your boss drops a bomb: "Learn Tally ERP by Monday" and it is Thursday. Your classmates took 3-month courses. You have 4 DAYS. Feel like quitting? NOPE! I am about to teach you Learning Agility - how Navy SEALs, startup founders, and top consultants learn skills at 10X speed. This is not about being "naturally smart" - it is a SYSTEM. Let us go!

**SECTION 1: The "I Need Time" Myth (0:30-1:30)**

Most students think: "I need a full course to learn Tally" → Sign up for 3-month program → Watch 50 hours of tutorials → Still not productive

Reality: You do NOT need to know 100% of Tally. You need to know the 20% that delivers 80% of results (Pareto Principle again!).

The Agile Learning Mindset:
- Traditional: "Learn everything THEN apply" (slow, overwhelming)
- Agile: "Learn just enough → Apply immediately → Learn more as needed" (fast, practical)

Example - Tally ERP:
You do NOT need: Advanced reports, multi-currency, payroll (yet)
You DO need: Create company, record transactions, generate basic vouchers (THIS gets you productive Day 1!)

Focus on MINIMUM VIABLE SKILL - what is the smallest skillset that makes you useful?

**SECTION 2: The 70-20-10 Rapid Learning Model (1:30-3:30)**

How do people ACTUALLY learn fast? Not through courses - through this:

**70% = LEARNING BY DOING**
Do NOT watch 50 Tally tutorials. Watch 1 tutorial, PAUSE, replicate in Tally immediately.
- Watch: How to create company (5 min)
- DO: Create a dummy company right now (5 min)
- Repeat for each feature

Example Day 1 Plan:
- 9:00-9:15: Watch "Create Company" → DO IT
- 9:15-9:30: Watch "Create Vouchers" → DO IT
- 9:30-10:00: Practice with sample data
By 10 AM, you have created 3 companies and 20 vouchers. That is DOING, not just watching!

**20% = LEARNING FROM PEOPLE**
Find someone who ALREADY knows Tally - ask them:
"What is the ONE thing beginners mess up?" (saves you hours of trial-and-error)
"What is the 20% I should focus on first?"
"Can I screen-share and you watch me for 10 min?" (instant feedback!)

Your network = your speed advantage.

**10% = FORMAL LEARNING**
Yes, watch YouTube tutorials - but ONLY for concepts you need RIGHT NOW.
Do NOT binge 50 videos. Learn → Apply → Learn more → Apply more.

**SECTION 3: Just-In-Time Learning (3:30-5:00)**

Do NOT learn everything upfront. Learn AS you need it.

Scenario: Boss asks you to create a Sales Voucher in Tally
- Traditional: "Let me complete the full Tally course first" (takes 2 days)
- Agile: YouTube "Tally sales voucher" → Watch 3-min video → Do it in 10 min → DONE in 15 min total!

The key: Break learning into MICRO-TASKS
- Need to create voucher? Learn ONLY vouchers (not entire Tally)
- Need to generate report? Learn ONLY that report type
- Cumulative learning: By end of week, you know 20 features (learned on-demand)

This is how senior employees learn - they Google/YouTube exactly what they need, exactly when they need it!

**SECTION 4: The Experimentation Loop (5:00-6:30)**

Learning Agility = COMFORTABLE with trial-and-error.

The Loop:
1. **Try:** Attempt the task (create Tally voucher)
2. **Fail:** Error message / wrong output
3. **Debug:** Google the error / ask colleague
4. **Fix:** Try again with new info
5. **Repeat:** Until it works!

Most students fear Step 2 (Fail) → They wait for perfect knowledge before trying.
Agile learners EXPECT failure → They use it as learning data.

Tally Example:
- Try 1: Voucher saved but numbers wrong → Learn about debit-credit in Tally
- Try 2: Numbers correct but date wrong → Learn date format
- Try 3: Perfect! → Now you ACTUALLY understand vouchers (not just theory)

Failure = Feedback. The faster you fail, the faster you learn!

**SECTION 5: Build Your Learning Sprint System (6:30-7:30)**

When you need to learn ANYTHING fast (new software, new subject, new skill):

**Day 1-2: Foundation Sprint**
- Identify 20% of skills that give 80% results
- Watch 3-5 tutorials (max 30 min each)
- DO each one immediately after watching
- Create 5+ practice examples

**Day 3-4: Application Sprint**
- Apply to REAL task (not practice - actual work)
- Fail → Debug → Iterate
- Ask 2-3 questions to someone experienced
- Document what you learned (cheat sheet for future)

Result: By Day 4, you are 70% productive (good enough!) vs 0% waiting for "perfect knowledge"

**CONCLUSION (7:30-8:00)**

Let us recap Learning Agility:
1. **70-20-10 Model** - Do (70%), People (20%), Courses (10%)
2. **Just-In-Time** - Learn what you need, when you need it
3. **Experimentation** - Fail fast, learn faster
4. **Minimum Viable Skill** - 20% knowledge → 80% productivity
5. **Learning Sprints** - 2-day foundation, 2-day application = DONE

Real talk: This is how the BEST employees operate. While others wait for training, agile learners YouTube + experiment + ask colleagues = productive in days, not months.

Your action plan TODAY:
1. Pick 1 skill you need to learn urgently
2. Identify the 20% that gets you 80% productive
3. Watch 1 tutorial, DO it immediately

Drop a comment - what skill are you learning agile-style? Let us crush it! Peace!`
    },
    quiz: {
      title: 'Learning Agility Quiz',
      questions: [
        {
          id: 21,
          question: 'Your boss needs you productive in Tally ERP by Monday (4 days). Your classmate took a 3-month course. What is the agile approach?',
          options: [
            'Panic and say you need more time',
            'Learn ONLY the 20% of Tally you need for your job (invoices, vouchers) using 70% doing, 20% asking colleagues, 10% tutorials',
            'Watch all 50 Tally tutorial videos this weekend',
            'Tell boss you cannot do it'
          ],
          correct: 1,
          explanation: 'Learning Agility is about SPEED + EFFECTIVENESS. You do NOT need to know 100% of Tally - identify the 20% that delivers 80% of your job tasks. Use the 70-20-10 model: 70% hands-on practice (create dummy invoices), 20% asking experienced colleagues (shortcuts, common errors), 10% watching targeted tutorials (ONLY what you need). By focusing on Minimum Viable Skill, you are productive in days while others wait months for "complete knowledge."'
        },
        {
          id: 22,
          question: 'You watched 10 hours of Excel tutorials but still cannot create the report your boss needs. What went wrong?',
          options: [
            'Excel is too hard',
            'You did passive learning (watching) instead of active doing (70% experimentation)',
            'You need 20 more hours of tutorials',
            'You should give up'
          ],
          correct: 1,
          explanation: 'The 70-20-10 model shows that 70% of real learning comes from DOING, not watching. Watching 10 hours = you recognize features but cannot execute. Agile approach: Watch 5-min tutorial on pivot tables → PAUSE → Create 3 pivot tables yourself → Make mistakes → Debug → Repeat. By hour 2, you have DONE 20+ practice examples vs watched 10 hours of theory. Experience beats observation 10:1.'
        },
        {
          id: 23,
          question: 'Your colleague learned PowerBI in 2 days and is already creating dashboards. You are on Day 5 of a Udemy course still watching videos. What is their secret?',
          options: [
            'They are naturally gifted',
            'They used Just-In-Time Learning - learned ONLY what they needed for their specific dashboard, not entire PowerBI',
            'They cheated',
            'They already knew PowerBI'
          ],
          correct: 1,
          explanation: 'Just-In-Time Learning is THE agility hack. Instead of learning "everything about PowerBI" (overwhelming, slow), they asked: "What do I need for THIS dashboard?" (bar charts, filters). They learned ONLY those 2 features, built the dashboard, then learned more features AS needed later. You are learning breadth-first (entire course). They learned depth-first (specific need). In fast-paced jobs, depth-first wins every time.'
        },
        {
          id: 24,
          question: 'You tried creating a Tally invoice and got error messages 5 times. You feel like giving up. What should you do?',
          options: [
            'Give up - you are not cut out for this',
            'Embrace the Experimentation Loop - each error teaches you something, Google it, fix it, try again',
            'Wait for a teacher to show you the perfect way',
            'Avoid Tally and stick to what you know'
          ],
          correct: 1,
          explanation: 'Learning Agility requires being COMFORTABLE with failure. Each error is DATA, not disaster. Try → Fail → Google error → Fix → Try again. By attempt #6, you understand Tally vouchers better than someone who watched 10 tutorials but never tried. McKinsey consultants learn client industries this way - they do NOT wait for perfect knowledge, they experiment on the job and iterate. Fast failure = fast learning. Perfection paralysis = no progress.'
        },
        {
          id: 25,
          question: 'In the 70-20-10 learning model, where does the MOST learning happen?',
          options: [
            'From reading textbooks and watching courses (70%)',
            'From hands-on experience and doing challenging tasks (70%)',
            'From mentors and teachers (70%)',
            'From group study (70%)'
          ],
          correct: 1,
          explanation: '70% of learning comes from EXPERIENCE - doing challenging tasks, making mistakes, solving real problems. Only 10% comes from formal learning (courses, books). This is why internships teach more than textbooks, why "learning by doing" beats "learning by watching." For Tally, Excel, coding: 1 hour of practice > 10 hours of tutorials. The 70-20-10 model is backed by decades of corporate learning research - experience is the ultimate teacher.'
        }
      ]
    },
    challenge: {
      title: 'Learning Agility Challenge',
      description: 'Develop your ability to learn quickly and adapt to new situations',
      contexts: {
        academic: {
          title: 'Academic Learning Agility Challenge',
          description: 'Master a new B.Com subject in 2 weeks using rapid learning techniques',
          instructions: [
            '1️⃣ **Choose Urgent Subject**: Pick a B.Com subject starting soon or one you are failing (need rapid improvement)',
            '2️⃣ **Define Minimum Viable Knowledge**: What is the 20% that gets you 60%+ marks? (past papers show this!)',
            '3️⃣ **2-Week Learning Sprint**: Week 1 = Foundation (watch 1-hour crash course + solve 20 problems), Week 2 = Application (practice tests + doubt clearing)',
            '4️⃣ **70-20-10 in Action**: 70% solving problems yourself, 20% asking toppers/teachers, 10% watching videos',
            '5️⃣ **Daily Experimentation**: Try different learning approaches (flashcards? mind maps? teaching friends?) - track what works',
            '6️⃣ **Feedback Loop**: Take mock test Week 1 end - what did you miss? Adjust Week 2 focus',
            '7️⃣ **Document System**: Write down your 2-week sprint process - reuse for next subject',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Starting from Chapter 1 when exam is in 2 weeks (use past papers to prioritize!)',
            '• Waiting for perfect understanding before solving problems (solve first, understand while doing)',
            '• No feedback mechanism - how do you know if you are improving? (take weekly mock tests)',
            '• Lone wolf mode - not asking toppers/teachers for shortcuts (pride costs time)',
            '• Not time-boxing - "I will learn when I feel ready" (set hard deadlines!)'
          ],
          successCriteria: [
            '✅ You achieved 60%+ marks in test/assignment for rapidly learned subject',
            '✅ You learned in 2 weeks what normally takes 6 weeks (3X speed)',
            '✅ You can explain your rapid learning process to others',
            '✅ You identified YOUR best learning methods through experimentation',
            '✅ You have a documented 2-week sprint template for future subjects',
            '✅ You feel confident you can learn ANY new B.Com subject rapidly'
          ]
        },
        professional: {
          title: 'Professional Learning Agility Challenge',
          description: 'Master a job-critical skill (Tally, Excel, PowerBI) in 1 week using 70-20-10',
          instructions: [
            '1️⃣ **Identify Job Need**: What skill does your internship/job need urgently? (Tally, Advanced Excel, PowerBI, SAP)',
            '2️⃣ **Find Minimum Viable Skill**: What is the core 20% for your job? (For Tally: vouchers + reports, NOT entire software)',
            '3️⃣ **Day 1-2 Foundation**: Watch 3 targeted tutorials (max 1 hour total) + DO each immediately in software',
            '4️⃣ **Day 3-4 Real Application**: Use skill for ACTUAL work task (not practice - real project!)',
            '5️⃣ **Leverage People (20%)**: Find 1 colleague who knows the skill - shadow them for 30 min, ask top 3 beginner mistakes',
            '6️⃣ **Experiment & Debug**: When stuck, Google → Try → Fail → Fix (embrace errors as teachers)',
            '7️⃣ **Week-End Review**: Can you do the core task without help? Document what you learned',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Tutorial hell - watching 50 videos but never opening the actual software (DO first, watch later!)',
            '• Perfectionism - "I will use it when I master it" (use it NOW at 60% skill, master WHILE using)',
            '• Not asking for help - colleagues can save you 5 hours with 1 tip (ego costs time)',
            '• Learning in isolation - not testing on real work tasks (practice ≠ real messy data)',
            '• No documentation - you will forget your shortcuts in 2 weeks (write cheat sheet!)'
          ],
          successCriteria: [
            '✅ You are productive with new skill within 1 week (not expert, but FUNCTIONAL)',
            '✅ You used skill for real work task successfully',
            '✅ Boss/colleague gave feedback that you picked it up fast',
            '✅ You created personal cheat sheet for future reference',
            '✅ You can teach basics to another beginner',
            '✅ You have reusable 1-week sprint process for NEXT skill'
          ]
        },
        personal: {
          title: 'Personal Learning Agility Challenge',
          description: 'Rapidly pick up a new life skill using agile learning (cooking, fitness, language)',
          instructions: [
            '1️⃣ **Pick Urgent Personal Goal**: Choose a skill you need/want NOW (cooking for hostel life, basic fitness, conversational Hindi)',
            '2️⃣ **Set 2-Week Goal**: Make it specific (cook 5 meals, run 2km without stopping, have 5-min conversation in Hindi)',
            '3️⃣ **Find Fast-Track Resource**: YouTube crash course (30 min) + 1 app/tool (Duolingo for Hindi, FitBod for fitness)',
            '4️⃣ **Daily Mini-Practice**: 20 min daily doing (NOT watching) - cook 1 dish, do 1 workout, speak 5 Hindi sentences',
            '5️⃣ **Learn from Community**: Join Reddit/Discord for the skill - ask "what do beginners mess up?" (learn from others mistakes)',
            '6️⃣ **Track Wins**: Daily log - what worked? What felt hard? Adjust next day',
            '7️⃣ **Real-World Test**: Week 2 - cook for friends, run with group, speak Hindi with local vendor',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Buying equipment before practicing (Rs 5000 yoga mat but practiced twice - start with basics first!)',
            '• No consistency - 3 hours Sunday, nothing Mon-Sat (20 min daily > 3 hours once)',
            '• Comparing Day 1 you to 5-year experts on YouTube (they sucked once too!)',
            '• Not making it social - solo learning is lonely and demotivating (find a buddy!)',
            '• All input, no output - watching cooking videos but never cooking (DO beats watch!)'
          ],
          successCriteria: [
            '✅ You achieved your 2-week goal (5 meals cooked, 2km run, 5-min Hindi conversation)',
            '✅ You practiced 5+ days per week consistently (agility needs consistency)',
            '✅ You used the skill in real situation (cooked for friends, ran with group)',
            '✅ You can teach Day 1 basics to a beginner',
            '✅ You feel motivated to continue (it is now a habit, not a challenge)',
            '✅ You have a system for learning ANY personal skill rapidly'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You demonstrate strong adaptability to new situations',
        'Your growth mindset enables continuous learning',
        'You learn effectively from experience and feedback',
        'Your experimentation approach accelerates learning',
        'You build helpful learning networks'
      ],
      improvements: [
        'Increase your comfort with ambiguity and uncertainty',
        'Practice more deliberate reflection on experiences',
        'Seek out more challenging learning opportunities',
        'Build stronger relationships with diverse learners',
        'Document and refine your learning processes'
      ],
      nextSteps: [
        'Take on a stretch assignment outside your comfort zone',
        'Build a personal learning network across domains',
        'Practice rapid learning in low-stakes situations',
        'Mentor others in developing learning agility',
        'Continuously refine your learning strategies'
      ]
    },
    badge: {
      name: 'Agile Learner',
      emoji: '⚡',
      description: 'Master of rapid learning and adaptation'
    },
    shareMessage: 'Just developed serious learning agility! ⚡ #LearningAgility #GrowthMindset'
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    emoji: '📈',
    context: 'professional',
    discover: {
      scenario: "Scored 65% Semester 3. Want 75%+ but don't know HOW. Study hard, results flat. Plateaued. Friend: 60% → 78% using 'some system.' Need continuous improvement framework, not one-time bursts.",
      problemExplanation: [
        "Work hard, no improvement: Effort without system = plateau. Sem 3-6: 65%, 66%, 64%, 65%",
        "No tracking: No idea WHAT works. Flying blind. Can't improve what don't measure",
        "One-time bursts: Study hard before exams, back to old habits. Temporary ≠ continuous",
        "Repeat mistakes: Weak at ratios? Ignore, fail again. Same mistakes every exam"
      ],
      solutionApproach: [
        "Kaizen: 1% better daily. Day 1: 40% retention. Day 30: 65%. 1.01^365 = 37× better",
        "PDCA weekly: Plan (improve what?), Do (try new), Check (marks improve?), Act (keep or change)",
        "Track metrics: Grade trend, study efficiency, topic scores. Data reveals patterns",
        "Deliberate Practice: Focus weak areas. Weak ratios? Solve 10 ratio problems daily"
      ]
    },
    video: {
      title: '1% Better Every Day: The Continuous Improvement System (B.Com Edition)',
      duration: 8,
      content: [
        'Continuous improvement is the practice of constantly getting better.',
        'Small improvements compound into remarkable results over time.',
        'Learn the exact system that top students use to go from average to excellent.',
        'These techniques will help you break through plateaus and achieve consistent growth.'
      ],
      script: `**INTRO (0:00-0:30)**

B.Com crew! Stuck at 65% every semester? Study hard but results stay flat? Feel like you hit a ceiling? Here is the brutal truth - EFFORT without SYSTEM = plateau. But here is the good news: Top students who go from 60% → 80% are not studying 5X harder - they are using CONTINUOUS IMPROVEMENT systems. I am about to drop the exact framework. Let us go!

**SECTION 1: Why You Plateau (0:30-1:30)**

Most students improvement journey:
- Semester 1: 60% (new, trying hard)
- Semester 2: 65% (some improvement)
- Semester 3-6: 65%, 66%, 64%, 65% (STUCK!)

Why? You are working hard but doing THE SAME THINGS!
- Same study method (re-reading notes)
- Same time management (cramming before exams)
- Same mistakes (weak at ratios, ignore them, fail ratios again)

Einstein said: "Insanity is doing the same thing expecting different results."

The Fix: Continuous Improvement = SYSTEMATIC upgrades to your learning process, not just "trying harder"

**SECTION 2: The Kaizen Mindset - 1% Better Daily (1:30-3:00)**

Japanese companies use Kaizen - instead of giant one-time changes, make TINY improvements daily.

B.Com Application:
Bad Approach: "I will study 10 hours straight before finals!" (burnout, not sustainable)
Kaizen Approach: "I will improve study efficiency 1% daily"

What Does 1% Look Like?
- Day 1: Study 2 hours, retain 40%
- Day 2: Add active recall - retain 42% (1% better!)
- Day 10: Retain 50%
- Day 30: Retain 65%

Math Magic: 1.01^365 = 37.8 (1% daily improvement = 37X better in 1 year!)

Real Example:
Semester 3: 65% using old methods
Semester 4: Apply Kaizen
- Week 1: Use Pomodoro (1% better focus)
- Week 2: Add flashcards (1% better retention)
- Week 3: Study with accountability partner (1% consistency)
Result: Semester 4 = 72% (7% jump from tiny daily tweaks!)

**SECTION 3: The PDCA Improvement Cycle (3:00-5:00)**

How do you ACTUALLY improve systematically? Use PDCA (Plan-Do-Check-Act) WEEKLY:

**WEEK 1 Example - Improving Financial Accounting:**

**PLAN (Monday):**
Goal: Improve journal entry speed and accuracy
Method: Will solve 5 journal entries daily using active recall

**DO (Tue-Sat):**
Execute the plan - solve 5 entries daily, time yourself

**CHECK (Sunday):**
Results: Week 1 average = 10 min per entry, 70% accuracy
Analysis: Still making debit-credit errors in certain types

**ACT (Sunday):**
Decision: Keep daily practice (it is working!) but ADD error journal (track which entry types I mess up)

**WEEK 2: Repeat PDCA with adjustments**

By Week 4: 5 min per entry, 90% accuracy (MEASURABLE improvement!)

This is how Toyota builds cars, how athletes train - PDCA is the UNIVERSAL improvement system.

**SECTION 4: Deliberate Practice - Fix Your Weak Spots (5:00-6:30)**

Random practice = plateau. Deliberate practice = breakthrough!

**Random Practice:**
"I will solve 100 problems" (mix of easy and hard, no focus)
Result: You get better at what you are ALREADY good at (waste of time!)

**Deliberate Practice:**
1. Identify weakness (ratio analysis - you score 40% here)
2. Focus ONLY on that (solve 10 ratio problems daily)
3. Get feedback (check solutions, understand errors)
4. Iterate (try harder ratio problems)
5. Result: Ratio score jumps to 75%!

B.Com Application:
- Week 1-2: Focus on weak topic (ratios)
- Week 3-4: Next weak topic (theory questions)
- By semester end: ALL weak areas are now strengths!

Generic "study everything" = slow improvement
Laser-focused deliberate practice = fast improvement

**SECTION 5: The Accountability & Tracking System (6:30-7:30)**

Improvement needs 2 things: TRACKING + ACCOUNTABILITY

**Tracking (Data-Driven Improvement):**
Create simple spreadsheet:
| Week | Study Hours | Topics Covered | Mock Test Score | What Worked | What Failed |
| 1 | 15 | Ratios | 55% | Active recall | Cramming theory |
| 2 | 14 | Theory | 62% | Spaced rep | Skipping practice |

Patterns emerge: "Active recall works! Cramming does not!" → Adjust!

**Accountability (Social Pressure Works!):**
- Study partner: Weekly check-in (did you hit targets?)
- Public commitment: Tell 3 friends your goal (social pressure helps!)
- Consequence: If you miss weekly target, you owe friend coffee (small stakes work!)

Why This Works: Goals in your head = easy to ignore. Goals shared publicly = 65% more likely to achieve (research-backed!)

**CONCLUSION (7:30-8:00)**

Let us recap Continuous Improvement:
1. **Kaizen** - 1% better daily compounds to 37X in a year
2. **PDCA Cycle** - Plan, Do, Check, Act weekly (systematic, not random)
3. **Deliberate Practice** - focus on weak areas, not random practice
4. **Track Everything** - data shows what works (grades, time, methods)
5. **Accountability** - share goals, get consequences (social pressure helps!)

Real talk: Toppers are not born - they are BUILT through continuous improvement systems. You can go from 65% → 80% not by studying 3X harder, but by improving 1% smarter DAILY.

Your action plan THIS WEEK:
1. Identify 1 weak area (specific topic, not "everything")
2. Run 1 PDCA cycle (plan improvement, do it, check results, adjust)
3. Track it (simple spreadsheet or notebook)

Drop a comment - what is your improvement goal? Let us build systems, not just effort! Peace!`
    },
    quiz: {
      title: 'Continuous Improvement Quiz',
      questions: [
        {
          id: 26,
          question: 'You have been stuck at 65% for 3 semesters despite studying hard. Your friend improved from 60% to 78% using "Kaizen." What does this mean?',
          options: [
            'Study 10 hours before exams instead of 5',
            'Improve 1% daily through small systematic changes (better method, not more hours)',
            'Take a different course',
            'Give up and accept 65%'
          ],
          correct: 1,
          explanation: 'Kaizen is Japanese for "continuous improvement" - instead of giant one-time efforts (study 10 hours before finals), make TINY daily improvements (1% better focus, 1% better retention method, 1% better time management). These compound exponentially. Math: 1.01^365 = 37X better in a year. Your friend did not study 3X harder - they improved their SYSTEM 1% daily. Week 1: added Pomodoro (1% focus), Week 2: used flashcards (1% retention). Result: 18% grade jump from micro-improvements!'
        },
        {
          id: 27,
          question: 'You tried a new study method for Financial Accounting. How do you know if it ACTUALLY worked using PDCA cycle?',
          options: [
            'Just feel like it worked',
            'PLAN the method → DO it for 1 week → CHECK results (mock test score) → ACT (keep if better, change if not)',
            'Keep doing it forever without checking',
            'Ask friends if they think it works'
          ],
          correct: 1,
          explanation: 'PDCA (Plan-Do-Check-Act) is the scientific method for improvement. PLAN: "I will use active recall for journal entries this week." DO: Execute daily. CHECK: Sunday mock test - did accuracy improve? 60% → 70% = YES! ACT: Keep active recall, add spaced repetition next week. Without CHECK step, you are guessing. Data beats feelings. This is how Toyota, athletes, and top students improve - they MEASURE everything, adjust based on data, iterate weekly.'
        },
        {
          id: 28,
          question: 'You solved 100 practice problems but your ratio analysis score is still 40%. What is wrong with your practice approach?',
          options: [
            'You need to solve 200 problems',
            'You did random practice (easy + hard mixed) - should do DELIBERATE practice (focus ONLY on ratios until mastery)',
            'Ratios are just too hard',
            'You need a tutor'
          ],
          correct: 1,
          explanation: 'Random practice = you practice what you are already good at (comfortable, but no growth). Deliberate Practice = (1) Identify weakness (ratios = 40%), (2) Focus ONLY on that (solve 10 ratio problems DAILY), (3) Get feedback (why did I get it wrong?), (4) Iterate (try harder ratios). In 2 weeks, ratios jump to 75%! This is how athletes train - they do not "play casually," they drill WEAK skills until they become strengths. Your 100 random problems had maybe 10 ratio problems - not enough focused reps!'
        },
        {
          id: 29,
          question: 'You set a goal to improve from 65% to 75% but 3 months later you are still at 66%. What critical element was missing?',
          options: [
            'You are not smart enough',
            'No tracking + accountability - goals stayed in your head, no data to show what works, no one checking on you',
            'The goal was too ambitious',
            'You need to study more hours'
          ],
          correct: 1,
          explanation: 'Goals without tracking = flying blind. Goals without accountability = easy to ignore. You need BOTH. Tracking: Weekly spreadsheet (study hours, methods used, mock test scores) reveals patterns - "Active recall works! Re-reading does not!" Accountability: Share goal with study partner, weekly check-ins, small consequences (miss target = buy friend coffee). Research shows publicly committed goals are 65% more likely to succeed. Your 65→75 goal failed because it was invisible (only in your head) and unmeasured (no data).'
        },
        {
          id: 30,
          question: 'If you improve just 1% every day for a full year, what is your total improvement?',
          options: [
            '365% (1% x 365 days)',
            '37X better (3,700% due to compounding)',
            '100% (doubles)',
            '10% total'
          ],
          correct: 1,
          explanation: 'This is the POWER of compounding! 1% daily improvement compounds exponentially: 1.01^365 = 37.78 (you are 37X better!). Not 365% (that would be linear addition). Real example: Day 1 you retain 40% of what you study. Improve 1% daily. Day 365 you retain 1,480% (basically photographic memory!). This is why Kaizen (tiny daily improvements) beats "study 10 hours before finals" (one-time massive effort). Small consistent upgrades > big inconsistent bursts. Toppers use this - they are not 10X smarter, they improve 1% daily for 3 years!'
        }
      ]
    },
    challenge: {
      title: 'Continuous Improvement Challenge',
      description: 'Build a sustainable system for lifelong improvement',
      contexts: {
        academic: {
          title: 'Academic Continuous Improvement Challenge',
          description: 'Go from 65% to 75%+ using systematic improvement over 1 semester',
          instructions: [
            '1️⃣ **Choose Target**: Pick 1 B.Com subject to improve (not all - focus wins)',
            '2️⃣ **Baseline Metrics**: Week 1 - take diagnostic test, note current score, identify top 3 weak topics',
            '3️⃣ **Weekly PDCA Cycle**: Every Monday PLAN (this week I will improve X), Tue-Sat DO, Sunday CHECK (mock test), Sunday ACT (keep/change)',
            '4️⃣ **Deliberate Practice Daily**: 30 min ONLY on weakest topic (if ratios = 40%, solve 5 ratio problems daily until 75%+)',
            '5️⃣ **Track in Spreadsheet**: Columns: Week, Hours, Topics, Test Score, What Worked, What Failed',
            '6️⃣ **Monthly Review**: End of month - compare Week 1 vs Week 4 scores, adjust strategy for next month',
            '7️⃣ **Accountability Partner**: Weekly study buddy check-in (did you hit targets? Show data!)',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Trying to improve ALL subjects at once (pick 1, master it, then next)',
            '• No baseline measurement - how do you know you improved? (always start with diagnostic test)',
            '• Skipping weekly CHECK step - just "doing" without measuring (feels productive but no data)',
            '• Giving up after 2 weeks because results are small (1% daily = 7% in 1 week, 30% in 1 month - patience!)',
            '• Lone wolf mode - no accountability means goals die when motivation fades'
          ],
          successCriteria: [
            '✅ Your target subject improved 8-12% in 1 semester (measurable growth)',
            '✅ You have 12+ weeks of tracked data (shows consistency)',
            '✅ You can explain WHAT worked using your data (not guessing - evidence!)',
            '✅ Your accountability partner confirms you hit 80%+ of weekly targets',
            '✅ You now have a reusable system for improving ANY subject',
            '✅ You taught the system to 1 classmate - they are using it'
          ]
        },
        professional: {
          title: 'Professional Continuous Improvement Challenge',
          description: 'Build a career-long improvement system starting at internship/first job',
          instructions: [
            '1️⃣ **Choose Career Skill**: Pick 1 job-critical skill to master (Excel, communication, time management, industry knowledge)',
            '2️⃣ **Set 90-Day Goal**: Make it measurable (Excel: create 10 dashboards, Communication: lead 5 meetings)',
            '3️⃣ **Weekly PDCA**: PLAN Mon (this week improve X), DO Tue-Fri, CHECK Fri (boss feedback), ACT (adjust)',
            '4️⃣ **Deliberate Practice**: 20 min daily OUTSIDE work hours on weak area (if presentations suck, practice 1 daily)',
            '5️⃣ **Seek Feedback**: Weekly ask boss/mentor: "What 1 thing should I improve?" (external input beats self-assessment)',
            '6️⃣ **Track Metrics**: Leading (hours practiced) + Lagging (boss rating, project success rate)',
            '7️⃣ **Monthly Career Review**: Am I growing? Getting better projects? Getting recognized? Adjust if not',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• No clear metrics - "I want to improve" is vague, "Lead 5 client meetings" is measurable',
            '• Not seeking feedback - you think you improved but boss sees no change (ask explicitly!)',
            '• All work, no practice - expecting to improve just by doing job (athletes practice OUTSIDE games!)',
            '• Not documenting growth - you improved but have no proof for performance reviews (track everything!)',
            '• Comparing to 10-year veterans after 3 months (compare to YOUR past self only)'
          ],
          successCriteria: [
            '✅ You achieved 90-day goal (measurable, documented)',
            '✅ Boss/mentor confirms visible improvement (external validation)',
            '✅ You have 12 weeks of tracked practice data',
            '✅ You received recognition (better projects, praise, responsibility)',
            '✅ You built a career-long habit (this is now autopilot, not effort)',
            '✅ You mentored 1 junior in continuous improvement'
          ]
        },
        personal: {
          title: 'Personal Continuous Improvement Challenge',
          description: 'Build lifelong 1% daily improvement habit for personal goals',
          instructions: [
            '1️⃣ **Pick 1 Life Area**: Choose 1 personal goal (fitness, language, creative skill, relationships)',
            '2️⃣ **Define 1% Daily**: Make it micro-small (1 pushup, 5 Spanish words, 1 guitar chord)',
            '3️⃣ **Track Streak**: Use habit tracker app (Habitica, Streaks) or simple calendar (X = did it, O = missed)',
            '4️⃣ **Weekly Reflection**: Sunday - what worked this week? What blocked you? Adjust next week',
            '5️⃣ **Monthly Level-Up**: When 1% feels easy, increase slightly (1 pushup → 5 pushups after 4 weeks)',
            '6️⃣ **Social Accountability**: Post weekly progress on Instagram/Twitter (public commitment works!)',
            '7️⃣ **90-Day Milestone**: Set visible goal (after 90 days of 1% daily, what will you achieve?)',
            '',
            '**⚠️ Common Mistakes to Avoid:**',
            '• Starting too big (30-min workout daily = you quit Day 3, 1-min workout = sustainable)',
            '• Breaking streak and giving up (missed 1 day? Just start again tomorrow - do not spiral!)',
            '• No tracking - "I think I am improving" (data or it did not happen)',
            '• Comparing to experts (Instagram fitness influencers have 5 years practice - you have 5 days!)',
            '• All input, no celebration - track wins! (30-day streak? Treat yourself!)'
          ],
          successCriteria: [
            '✅ You maintained 1% daily habit for 90+ days (3-month streak)',
            '✅ You have visible improvement (10 pushups → 50, 0 Spanish → 500 words)',
            '✅ Your tracking data shows consistency (80%+ days completed)',
            '✅ You inspired 1+ friend to start their own 1% habit',
            '✅ The habit is now autopilot (you do it without thinking)',
            '✅ You have a system for improving ANY life area'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You demonstrate commitment to ongoing growth',
        'Your systematic approach ensures consistent progress',
        'You effectively track and measure improvement',
        'You build sustainable improvement habits',
        'You help others embrace continuous improvement'
      ],
      improvements: [
        'Be patient with the compounding process',
        'Focus on process goals, not just outcomes',
        'Increase your feedback frequency for faster learning',
        'Share your journey more to build accountability',
        'Celebrate small wins to maintain momentum'
      ],
      nextSteps: [
        'Expand continuous improvement to new areas',
        'Mentor someone else in building improvement habits',
        'Read about Kaizen and continuous improvement',
        'Join or create an improvement-focused community',
        'Document your long-term improvement journey'
      ]
    },
    badge: {
      name: 'Kaizen Master',
      emoji: '📈',
      description: 'Champion of continuous improvement and lifelong growth'
    },
    shareMessage: 'Committed to getting 1% better every day! 📈 #ContinuousImprovement #Kaizen'
  }
];

// Helper functions
export const updateSubtopicProgress = (subtopicId: string, progress: number): void => {
  console.log(`Updated progress for ${subtopicId}: ${progress}%`);
};

export const generatePersonalizedFeedback = (responses: any[]): string => {
  return "Personalized feedback based on your responses...";
};

export const loadModuleProgress = (): any => {
  return {};
};

export const saveModuleProgress = (progress: any): void => {
  console.log('Saving module progress:', progress);
};

export const module2Subtopics = module2Data;

// Module 2 Assessment - 30 Questions (5 from each subtopic)
export const module2Assessment: AssessmentData = {
  id: 'module2-assessment',
  title: 'Adaptive Learning & Lifelong Learning Assessment',
  description: 'Comprehensive test covering all adaptive learning and lifelong learning skills',
  questions: [
    // Learning Strategies (1-5)
    { id: 1, question: 'What is the main benefit of active learning over passive learning?', options: ['It takes less time', 'It improves long-term retention and understanding', 'It requires less effort', 'It works for all subjects equally'], correct: 1, explanation: 'Active learning (testing yourself, teaching others, applying concepts) engages multiple cognitive processes, forcing your brain to RETRIEVE and USE information, not just recognize it. This creates stronger neural pathways compared to passive methods (re-reading, highlighting) which create fluency illusion. Research shows active learners retain 50% more information long-term.' },
    { id: 2, question: 'The Feynman Technique involves:', options: ['Speed reading', 'Explaining concepts in simple terms', 'Memorizing with flashcards', 'Highlighting text'], correct: 1, explanation: 'Named after Nobel laureate Richard Feynman, this technique tests TRUE understanding by forcing you to explain complex concepts as if teaching a beginner. If you cannot explain it simply without jargon, you do not truly understand it - this reveals knowledge gaps before exams do. It transforms surface memorization into deep comprehension.' },
    { id: 3, question: 'Spaced repetition helps learning by:', options: ['Cramming information', 'Reviewing at increasing intervals', 'Reading once thoroughly', 'Only reviewing before exams'], correct: 1, explanation: 'The Ebbinghaus Forgetting Curve shows we forget 50% of new information within 24 hours. Spaced repetition combats this by reviewing at strategic intervals (Day 1, 2, 4, 7, 14), strengthening memory pathways each time. Each review takes LESS time but retention becomes permanent, making it far superior to cramming which only creates short-term memory.' },
    { id: 4, question: 'The Pomodoro Technique uses:', options: ['45 min work, 15 min break', '25 min work, 5 min break', '60 min work, 10 min break', 'Continuous study'], correct: 1, explanation: 'The Pomodoro Technique uses 25-minute focused work sessions followed by 5-minute breaks, working with your brain natural attention span rather than against it. After 4 cycles, take a longer 15-30 minute break. This delivers 100 minutes of deep focus in 2 hours versus 8 hours of distracted studying, preventing burnout while maximizing productivity.' },
    { id: 5, question: 'What is the 80/20 rule in learning?', options: ['Study 80 hours per week', 'Focus on the most important 20% of content', 'Take 80% breaks', 'Learn 80% theory, 20% practice'], correct: 1, explanation: 'The Pareto Principle (80/20 rule) states that 20% of topics typically yield 80% of exam marks. Identify this 20% by analyzing past 5 years question papers - patterns always emerge. Master high-priority content first to secure most marks, then tackle the rest. This strategic focus beats equal time distribution, especially under time constraints.' },
    
    // Memory Techniques (6-10)
    { id: 6, question: 'The Method of Loci (Memory Palace) uses:', options: ['Random images', 'Familiar locations to store information', 'Alphabetical lists', 'Color coding'], correct: 1, explanation: 'The Memory Palace leverages your brain powerful spatial memory (you never forget your house layout). By mentally placing information at familiar locations (gate=Section 2, living room=Section 3), you create a mental map that is nearly impossible to forget. This ancient technique is used by memory champions to memorize thousands of facts.' },
    { id: 7, question: 'Why are absurd, vivid images more memorable?', options: ['They\'re easier to draw', 'They stand out and trigger emotional engagement', 'They take less effort', 'They\'re more realistic'], correct: 1, explanation: 'Your brain evolved to remember unusual, emotionally engaging events (survival mechanism). A "baby company wearing diaper" (Section 3: Company Formation) is absurd and thus UNFORGETTABLE, while "company formation procedures" is normal and forgettable. Memory champions intentionally create bizarre imagery because absurdity = memorability. Embrace the weird!' },
    { id: 8, question: 'Chunking helps memory by:', options: ['Breaking information into smaller pieces', 'Memorizing everything at once', 'Using only visual memory', 'Avoiding repetition'], correct: 0, explanation: 'Your brain can hold 7±2 items in short-term memory (Miller Law). Chunking breaks large information into patterns - that is why phone numbers are 9876-543-210 (3 chunks) not 9876543210 (10 separate digits). For B.Com: group all liquidity ratios by common pattern (all divide by Current Liabilities) instead of memorizing 3 separate formulas. Chunking = finding patterns to reduce cognitive load.' },
    { id: 9, question: 'Active recall is superior to re-reading because:', options: ['It\'s faster', 'It strengthens retrieval pathways', 'It requires no effort', 'It works without understanding'], correct: 1, explanation: 'Re-reading creates fluency illusion - you RECOGNIZE highlighted text but cannot RECALL it under exam pressure. Active recall practices exactly what exams test: retrieval from memory. Every retrieval strengthens the neural pathway. This is why closing your book and testing yourself beats re-reading the same page 10 times. Practice retrieval, perform retrieval!' },
    { id: 10, question: 'How often should you review using spaced repetition?', options: ['Only once', 'At increasing intervals over time', 'Every day forever', 'Only before exams'], correct: 1, explanation: 'Optimal review schedule: Day 1 (learn), Day 2, Day 4, Day 7, Day 14 (review). Each review happens just BEFORE you would forget, strengthening the memory. Daily review is overkill (wastes time). One-time review or cramming before exams fails because forgetting already happened. Spaced repetition = reviewing at scientifically optimal intervals for permanent retention with minimal time.' },
    
    // Information Processing (11-15)
    { id: 11, question: 'SQ3R stands for:', options: ['Study, Question, Read, Recite, Review', 'Survey, Question, Read, Recite, Review', 'Scan, Question, Read, Remember, Review', 'Speed, Quality, Read, Review, Repeat'], correct: 1, explanation: 'SQ3R (Survey, Question, Read, Recite, Review) is a systematic reading method that saves massive time. Survey (skim) first to check relevance, Question (write what you need to find), Read (only for answers), Recite (summarize from memory), Review (check accuracy). This is how researchers process 10 papers in the time students read 1, by filtering out irrelevant content early.' },
    { id: 12, question: 'Critical thinking in information processing involves:', options: ['Reading quickly', 'Evaluating credibility and relevance', 'Accepting all information', 'Memorizing facts'], correct: 1, explanation: 'Critical thinking asks: Is this source credible? Is this information relevant to MY research question? Are there biases? Does this align with other reliable sources? Without this filter, you waste hours on low-quality or irrelevant information. This separates A-grade analysis (I evaluated sources critically) from C-grade work (I accepted everything at face value).' },
    { id: 13, question: 'The 5W+H framework includes:', options: ['5 words and 1 header', 'Who, What, When, Where, Why, How', '5 weeks and 1 hour', '5 ways and 1 habit'], correct: 1, explanation: 'The 5W+H framework (Who, What, When, Where, Why, How) creates STRUCTURE from research chaos. Making a table with these columns for each source lets you instantly see patterns (3 sources mention same "Who"), compare findings, and synthesize insights. Without structure, notes are just random paragraphs you will never re-read. Structure = usable knowledge.' },
    { id: 14, question: 'Information organization is important because:', options: ['It looks professional', 'It enables effective retrieval and connections', 'It reduces information amount', 'It impresses others'], correct: 1, explanation: 'Disorganized notes = you spend 2 hours searching for that quote you know you saved somewhere (frustration!). Organized notes with tags/categories = find anything in 30 seconds. More importantly, organization reveals CONNECTIONS between ideas, enabling synthesis. Facts in isolation = C-grade listing. Connected facts = A-grade analysis. Organization is not cosmetic, it is cognitive!' },
    { id: 15, question: 'The first step in SQ3R is:', options: ['Question', 'Survey (overview)', 'Read carefully', 'Recite immediately'], correct: 1, explanation: 'Survey (skim abstract, headings, conclusion) happens FIRST to determine if source is even relevant before wasting hours reading it cover-to-cover. Most students read Paper 1 word-by-word for 2 hours then realize it is about Singapore GST (not India). Survey 10 sources in 20 minutes, keep only 5 relevant ones, THEN deep-read. Survey = filter, saves 50% time!' },
    
    // Skill Transfer (16-20)
    { id: 16, question: 'Skill transfer means:', options: ['Learning new skills', 'Applying skills from one context to another', 'Forgetting old skills', 'Teaching skills to others'], correct: 1, explanation: 'Skill transfer is applying knowledge from Context A to Context B (Financial Accounting → Cost Accounting, Statistics → Analytics). When you learn at PRINCIPLE level ("double-entry = dual effect") instead of surface level ("debit assets, credit liabilities"), that principle works across ALL accounting contexts. This is why some students breeze through new subjects - they transfer, not re-learn. Transfer = learning efficiency!' },
    { id: 17, question: 'The key to skill transfer is understanding:', options: ['Surface procedures', 'Underlying principles', 'Specific examples only', 'Individual cases'], correct: 1, explanation: 'Surface learning = memorizing steps (breaks when context changes). Principle learning = understanding WHY it works (transfers everywhere). Example: Surface = "In Financial, debit assets," Principle = "Debit = what comes IN." The principle works in Cost, Tax, personal budgets. Understanding principles turns 10 separate subjects into 3 core concepts with 10 applications. This is expert thinking!' },
    { id: 18, question: 'Metacognition means:', options: ['Learning fast', 'Thinking about your own thinking', 'Memorizing facts', 'Taking notes'], correct: 1, explanation: 'Metacognition is thinking ABOUT your thinking - asking "How am I learning? What is the core principle here? Where else can I use this?" Instead of just absorbing information, you analyze your learning process. This self-awareness enables transfer because you recognize patterns across contexts. Beginners learn content. Experts learn content + how they learn (meta-level).' },
    { id: 19, question: 'Analogies help skill transfer by:', options: ['Making learning faster', 'Revealing connections between domains', 'Reducing practice needs', 'Memorizing procedures'], correct: 1, explanation: 'Analogies are transfer bridges. "Statistics mean = Analytics average sales" connects new knowledge (Analytics) to existing knowledge (Statistics). Your brain goes "OH! I already know mean - just apply to sales data!" This is 10X faster than treating Analytics as completely new. Research shows analogy-based learning accelerates understanding by 3X because you leverage existing neural pathways.' },
    { id: 20, question: 'Pattern recognition enables transfer by:', options: ['Reducing study time', 'Identifying common structures across contexts', 'Avoiding mistakes', 'Simplifying content'], correct: 1, explanation: 'Pattern recognition sees "Economics supply-demand = Marketing pricing = Real Estate market dynamics = SAME PRINCIPLE (price affects demand)." Beginners see 10 different subjects. Experts see 3 principles applied 10 ways. Once you spot the pattern, you can predict: "This probably works in E-commerce too!" One pattern learned, infinite applications. This is fast learning!' },
    
    // Learning Agility (21-25)
    { id: 21, question: 'Learning agility is:', options: ['Learning many things', 'Quickly learning and adapting to new situations', 'Only learning from books', 'Avoiding change'], correct: 1, explanation: 'Learning Agility = speed + adaptability. When boss says "Learn Tally by Monday," agile learners identify the 20% they need (invoices, vouchers), learn it in 4 days using 70% doing, 20% asking colleagues, 10% tutorials, and are productive Day 5. Slow learners enroll in 3-month course and miss the deadline. In 2025 job market, "I can learn ANYTHING fast" > "I know everything."' },
    { id: 22, question: 'A growth mindset believes:', options: ['Talent is fixed', 'Abilities develop through effort', 'Some people can\'t learn', 'Intelligence is unchangeable'], correct: 1, explanation: 'Growth mindset (Stanford psychologist Carol Dweck) believes "I cannot do this YET" not "I cannot do this EVER." Skills are built through effort, not born. This mindset is CRITICAL for learning agility - if you believe Tally is "too hard for you," you will not even try. If you believe "I can learn this with right approach," you experiment until you succeed. Mindset determines if you start!' },
    { id: 23, question: 'The 70-20-10 learning model suggests:', options: ['70% theory, 20% practice, 10% review', '70% experience, 20% relationships, 10% formal learning', '70% reading, 20% writing, 10% testing', '70% solo, 20% group, 10% teaching'], correct: 1, explanation: '70% of learning comes from DOING (hands-on practice, making mistakes, solving real problems), 20% from PEOPLE (mentors, colleagues, communities), only 10% from formal courses/books. This is why internships teach more than textbooks. For Tally: 1 hour creating invoices yourself (70%) > 10 hours watching tutorials (10%). Experience is the ultimate teacher - corporate learning research proves this!' },
    { id: 24, question: 'Just-in-time learning means:', options: ['Always being late', 'Learning what you need when you need it', 'Learning everything in advance', 'Never preparing'], correct: 1, explanation: 'Just-In-Time = learn what you NEED, when you NEED it, not "just in case." Monday boss needs pivot tables? Learn pivot tables Tuesday (30 min), not "entire Excel in 6 months." This is how consultants work - they do not know everything upfront, they learn rapidly on-demand. Your knowledge grows organically based on real needs. Efficient, practical, sustainable!' },
    { id: 25, question: 'Experimentation supports learning agility by:', options: ['Wasting time', 'Enabling rapid learning through trial and error', 'Avoiding mistakes', 'Following rules strictly'], correct: 1, explanation: 'Experimentation = Try → Fail → Debug → Fix → Repeat. Each error is DATA, not disaster. Creating your 1st Tally invoice, you will make mistakes - wrong tax, wrong date. That is GOOD! Each error teaches you something. By attempt #10, you are an expert. Waiting for "perfect knowledge before trying" = analysis paralysis, you never start. Fast failure = fast learning!' },
    
    // Continuous Improvement (26-30)
    { id: 26, question: 'Kaizen philosophy emphasizes:', options: ['Dramatic changes', 'Small, continuous improvements', 'Waiting for perfection', 'Competing with others'], correct: 1, explanation: 'Kaizen (Japanese: continuous improvement) = improve 1% daily instead of 100% once. Small changes feel easy and sustainable. They compound exponentially - 1.01^365 = 37X better in a year! Your friend improved from 60% to 78% not by studying 5X harder, but by adding Pomodoro (Week 1), flashcards (Week 2), study buddy (Week 3) - micro-improvements that compounded. Giant bursts burn out. Kaizen sustains!' },
    { id: 27, question: 'PDCA cycle stands for:', options: ['Prepare, Deliver, Complete, Assess', 'Plan, Do, Check, Act', 'Practice, Develop, Create, Apply', 'Perfect, Deploy, Control, Achieve'], correct: 1, explanation: 'PDCA (Plan-Do-Check-Act) is the scientific method for improvement. PLAN: "I will use active recall this week." DO: Execute. CHECK: Did mock test score improve? ACT: If yes, keep it + add spaced repetition. If no, try different method. Without CHECK (measurement), you are guessing if methods work. Data beats feelings. This is how Toyota, athletes, and top students systematically improve every week!' },
    { id: 28, question: 'Deliberate practice focuses on:', options: ['Practicing what you\'re good at', 'Targeting specific weaknesses with feedback', 'Casual, relaxed practice', 'Quantity over quality'], correct: 1, explanation: 'Random practice = you practice what you are already good at (comfortable but no growth). Deliberate Practice = (1) Identify weakness (ratios = 40%), (2) Focus ONLY on that (10 ratio problems daily), (3) Get feedback (why wrong?), (4) Iterate. In 2 weeks, ratios jump to 75%! This is how athletes train - they drill WEAK skills. Your 100 random problems had maybe 10 ratios - not enough focused reps. Deliberate > random!' },
    { id: 29, question: 'Why track progress in continuous improvement?', options: ['To compete with others', 'To stay motivated and measure growth', 'It\'s not important', 'Only for work goals'], correct: 1, explanation: 'Tracking provides (1) Motivation (seeing Week 1: 55% → Week 4: 68% keeps you going!), (2) Evidence of what works ("Active recall worked, re-reading failed" - data reveals patterns), (3) Accountability (shared tracker with study buddy creates social pressure). Goals without tracking = invisible and easy to abandon. Research shows tracked goals are 3X more likely to succeed. Track or it did not happen!' },
    { id: 30, question: 'Improving 1% daily compounds to approximately:', options: ['365% improvement yearly', '37x improvement yearly', 'No real difference', '100% improvement yearly'], correct: 1, explanation: 'Compounding math: 1.01^365 = 37.78 (you are 37X better!). Not 365% (that would be linear). Real example: Day 1 retain 40% of study material, improve 1% daily, Day 365 = photographic memory! This is why Kaizen (tiny daily improvements) destroys "study 10 hours before finals" (one-time burst). Small consistent upgrades > big inconsistent efforts. Toppers are not 10X smarter - they improved 1% daily for years!' }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! You\'re a master of adaptive learning!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great work! You have strong learning skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good progress! Keep practicing these techniques!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review the material and develop your learning strategies!', xpReward: 100 }
  }
};
