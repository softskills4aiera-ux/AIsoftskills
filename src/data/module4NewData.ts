// Module 4: Critical Thinking & Problem Solving
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
    contexts: {
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

// Module 4 Subtopics Data
export const module4Data: SubtopicData[] = [
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    emoji: '🧮',
    context: 'academic' as const,
    discover: {
      scenario: "Business Law debate. Rohan: 'Don't regulate crypto—uncle made ₹10L.' Professor dismantles in 30sec, points out fallacies you missed.",
      problemExplanation: [
        "Fallacy blind: Can't spot anecdotal evidence, slippery slope. Accept flawed arguments, bad decisions",
        "Can't see structure: Premise 1 + Premise 2 → Conclusion? Hear blob. Struggle case studies",
        "Emotion > logic: Rohan SOUNDS good (innovation! freedom!). Brain likes story. Feelings ≠ facts",
        "Can't evaluate evidence: ONE anecdote (uncle). Sample = 1. Didn't question. Manipulated by bad data"
      ],
      solutionApproach: [
        "Argument Anatomy: PREMISES + CONCLUSION. Does conclusion FOLLOW? Premises TRUE? Works any argument",
        "Fallacy Detector: Ad Hominem, Straw Man, False Dichotomy, Appeal to Emotion, Anecdotal Evidence",
        "VALID vs SOUND: VALID = structure correct. SOUND = valid + premises true. Check BOTH",
        "Evidence Quality: Sample size? Source? Bias? Recency? Relevance? Use for financials, research"
      ]
    },
    video: {
      title: 'Stop Being Fooled: Logical Reasoning for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ARE BEING MANIPULATED (And Do Not Even Know It)

"Your classmate says: 'We should not regulate crypto because my uncle made ₹10 lakhs in Bitcoin.' You nod. Sounds reasonable. But the professor destroys this argument in 10 seconds. Why? Because it is LOGICALLY FLAWED. Here is the truth: 90% of arguments you hear daily - in class, news, ads, social media - contain logical fallacies. If you cannot spot them, you will be manipulated. In B.Com, logical reasoning is not optional - it is survival. Financial analysis? You need logic. Case studies? Logic. Debates? Logic. Job interviews? Logic. By the end of this video, you will have a battle-tested system to dissect ANY argument and spot flaws instantly. Let us make you un-foolable."

[0:45-2:15] THE ARGUMENT ANATOMY (Break Down ANY Argument in 10 Seconds)

"Every argument has 2 parts: PREMISES (evidence) and CONCLUSION (claim).

EXAMPLE 1: Rohan is Crypto Argument
'My uncle invested in Bitcoin and made ₹10 lakhs [PREMISE]. Government regulation will kill innovation [PREMISE]. Therefore, we should not regulate cryptocurrency [CONCLUSION].'

Now evaluate:
1. Does the conclusion FOLLOW from the premises? (Is one person is success enough to decide national policy? NO.)
2. Are the premises TRUE? (Does regulation ALWAYS kill innovation? NO - many regulated industries innovate.)

The argument is INVALID (conclusion does not follow) and UNSOUND (premises are questionable).

EXAMPLE 2: Valid but Unsound
'All B.Com students are billionaires [PREMISE]. You are a B.Com student [PREMISE]. Therefore, you are a billionaire [CONCLUSION].'

Is this VALID? YES - IF the premises were true, the conclusion MUST follow (structure is correct).
Is this SOUND? NO - the first premise is false (not all B.Com students are billionaires).

THE FRAMEWORK:
Step 1: Identify premises and conclusion.
Step 2: Check VALIDITY (does conclusion follow?).
Step 3: Check SOUNDNESS (are premises true?).
Step 4: Spot fallacies (flawed reasoning patterns).

Master this, and you can dissect ANY argument - in exams, debates, business proposals, or life decisions."

[2:15-4:00] THE TOP 5 FALLACIES (B.Com Edition)

"Here are the 5 fallacies you will encounter MOST in B.Com contexts:

FALLACY 1: AD HOMINEM (Attack the Person, Not the Argument)
Example: 'Professor Sharma says we should study Cost Accounting daily. But she is so boring, so her advice is useless.'
Why it is flawed: Professor is personality ≠ validity of her advice. Maybe she IS boring AND her advice is correct. Attack the ARGUMENT, not the person.
B.Com context: 'That analyst is young, so his market prediction is wrong.' (Age ≠ accuracy of analysis.)

FALLACY 2: STRAW MAN (Misrepresent to Attack)
Example: 'Priya says we should spend more time on financial analysis. So she wants us to ONLY do analysis and ignore everything else!'
Why it is flawed: Priya said 'more time,' not 'ONLY analysis.' You exaggerated her position to make it easier to attack.
B.Com context: 'The professor wants us to use Excel. So she thinks manual calculations are completely useless!' (Misrepresentation.)

FALLACY 3: FALSE DICHOTOMY (Only 2 Options When More Exist)
Example: 'Either you study 12 hours a day, or you will fail B.Com. Choose.'
Why it is flawed: False choice. Reality: You can study smart (6 hours with active recall) and succeed. There are MORE than 2 options.
B.Com context: 'Either we cut costs, or the company goes bankrupt.' (What about increasing revenue? Improving efficiency?)

FALLACY 4: APPEAL TO EMOTION (Feelings Replace Facts)
Example: 'You should invest in this startup because the founder is story is so inspiring - he overcame poverty!'
Why it is flawed: Inspiring story ≠ good business model. Feelings ≠ financial viability. Evaluate the DATA, not the emotions.
B.Com context: 'This charity needs your donation - think of the children!' (Emotional appeal, but is the charity effective? Transparent?)

FALLACY 5: ANECDOTAL EVIDENCE (One Story ≠ Proof)
Example: 'My uncle made ₹10 lakhs in crypto, so crypto is a great investment for everyone.'
Why it is flawed: Sample size = 1. What about the thousands who lost money? One success ≠ universal truth.
B.Com context: 'My friend got hired without an internship, so internships are not important.' (One case ≠ trend.)

Memorize these 5. You will spot them EVERYWHERE."

[4:00-5:30] THE VALID vs SOUND TEST (Your Logical Litmus Test)

"This is the most powerful tool in logical reasoning:

VALID = Structure is correct. IF premises are true, conclusion MUST follow.
SOUND = Valid AND premises are actually true.

EXAMPLE 1: Valid but Unsound
'All accountants are millionaires [PREMISE - FALSE]. Priya is an accountant [PREMISE - could be true]. Therefore, Priya is a millionaire [CONCLUSION].'
Analysis: VALID structure (if premises were true, conclusion follows). But UNSOUND (first premise is false).

EXAMPLE 2: Invalid (Even if Premises Are True)
'Some B.Com students get jobs [PREMISE - TRUE]. You are a B.Com student [PREMISE - TRUE]. Therefore, you WILL get a job [CONCLUSION].'
Analysis: INVALID. 'Some' ≠ 'all.' The conclusion does not logically follow. Even though premises are true, the argument fails.

EXAMPLE 3: Valid AND Sound (The Goal)
'All humans need oxygen to survive [PREMISE - TRUE]. You are human [PREMISE - TRUE]. Therefore, you need oxygen [CONCLUSION].'
Analysis: VALID structure + TRUE premises = SOUND argument. This is what you are looking for.

HOW TO USE THIS:
In exams: Case study arguments - check if they are sound.
In interviews: Business proposals - evaluate validity and soundness.
In life: Investment advice, career guidance - test before accepting.

Always ask: Is it VALID? Is it SOUND? If NO to either, reject the argument."

[5:30-7:00] EVIDENCE QUALITY CHECKLIST (Separate Good Data from Garbage)

"Not all evidence is equal. Here is how to evaluate:

THE 5-QUESTION EVIDENCE TEST:

Q1: SAMPLE SIZE - How many cases?
Bad: 'My friend got a job without a degree.' (Sample = 1)
Good: 'A study of 10,000 graduates found 85% with degrees earn 40% more.' (Sample = 10,000)

Q2: SOURCE CREDIBILITY - Who says this?
Bad: Random blog post, anonymous social media claim.
Good: Peer-reviewed journal, RBI report, audited financial statement.

Q3: BIAS - Who benefits if you believe this?
Bad: 'This mutual fund is the best!' (Said by the mutual fund company.)
Good: Independent financial analyst with no stake in the fund.

Q4: RECENCY - How old is this data?
Bad: '1995 study shows...' (28 years old, outdated)
Good: '2023 RBI report shows...' (Current, relevant)

Q5: RELEVANCE - Does this evidence support THIS specific claim?
Bad: 'Crypto is volatile. Therefore, all investments are risky.' (Crypto ≠ all investments)
Good: 'Crypto has 80% price swings. Therefore, crypto is high-risk.' (Direct relevance)

Use this checklist for: Financial reports, market research, business proposals, academic papers, investment advice."

[7:00-7:45] PRACTICE: DISSECT THIS ARGUMENT (Real-Time Example)

"Let us practice together. Here is an argument:

'Tata Motors stock price increased 30% last quarter. The CEO is very charismatic and popular. Therefore, you should invest in Tata Motors.'

YOUR TURN: Break it down.

STEP 1: Identify premises and conclusion.
Premise 1: Stock price increased 30%.
Premise 2: CEO is charismatic.
Conclusion: You should invest.

STEP 2: Check validity.
Does the conclusion FOLLOW? NO. Past performance ≠ future results. CEO charisma ≠ business fundamentals. The conclusion does not logically follow from these premises.

STEP 3: Check soundness.
Even if premises are true (stock did rise, CEO is charismatic), the argument is INVALID, so it cannot be sound.

STEP 4: Spot fallacies.
Appeal to Emotion (charismatic CEO = emotional appeal, not financial analysis).
Post Hoc Fallacy (stock rose, therefore it will keep rising = flawed logic).

VERDICT: REJECT this argument. It is logically flawed. You need MORE evidence: financial health, market conditions, competitive analysis."

[7:45-8:00] YOUR CHALLENGE (Build Your Logical Reasoning Muscle)

"Here is your action step: For the next 7 days, find ONE argument daily (news, ad, debate, social media). Use the framework:
1. Identify premises and conclusion.
2. Check: Is it valid?
3. Check: Is it sound?
4. Spot fallacies.

Write it down. By Day 7, you will have dissected 7 arguments. You will start seeing fallacies EVERYWHERE. Your critical thinking will level up. In exams, you will spot flawed case study arguments. In interviews, you will evaluate business proposals critically. In life, you will make better decisions. Logical reasoning is a SKILL, not a talent. You build it through daily practice. Now go find your first argument to dissect."

[End Screen: "Next Video: Master Problem Analysis - Find Root Causes Fast"]`,
      content: [
        'The Argument Anatomy Framework: Identify premises and conclusion, check validity and soundness',
        'Top 5 Fallacies: Ad Hominem, Straw Man, False Dichotomy, Appeal to Emotion, Anecdotal Evidence',
        'VALID vs SOUND Test: Valid = structure correct, Sound = valid + true premises',
        'Evidence Quality Checklist: Sample size, source credibility, bias, recency, relevance',
        'The "So What?" Test: Question if conclusions actually follow from evidence',
        'B.Com Applications: Financial analysis, case studies, business proposals, investment decisions',
        'Daily Practice: Dissect 1 argument per day for 30 days to build expertise'
      ]
    },
    quiz: {
      title: 'Logical Reasoning Quiz',
      questions: [
        {
          id: 1,
          question: 'Professor argues: "All successful entrepreneurs dropped out of college. Mark Zuckerberg dropped out. Therefore, you should drop out to become successful." What is wrong?',
          options: [
            'Nothing - it is logically sound',
            'First premise is false (not ALL successful entrepreneurs dropped out), making it unsound',
            'Conclusion is unpopular',
            'Uses too many examples'
          ],
          correct: 1,
          explanation: 'Argument = VALID in structure (if premises true, conclusion follows), but UNSOUND because first premise FALSE. Reality: Most successful entrepreneurs (Ratan Tata, Mukesh Ambani, Narayana Murthy) DID complete education. Cherry-picks one example (Zuckerberg), generalizes falsely. Also "Survivorship Bias" - hear about dropouts who succeeded, not millions who failed. Always check: Are premises ACTUALLY true? Valid structure + false premises = unsound = reject.'
        },
        {
          id: 2,
          question: 'During Business Ethics debate, Arjun says: "Professor Mehta argument about CSR is wrong because she has never run a business." What fallacy is this?',
          options: [
            'Straw Man',
            'Ad Hominem (attacking person, not argument)',
            'False Dichotomy',
            'Appeal to Emotion'
          ],
          correct: 1,
          explanation: 'Ad Hominem = attacking Professor Mehta credentials (never run business) instead of addressing her ARGUMENT about CSR. Why flawed: Her lack of business experience doesn\'t automatically make argument wrong. Must evaluate ARGUMENT itself (reasoning sound? evidence strong?), not background. In B.Com, encounter this in group projects ("You\'re just 2nd year, what do you know?") and interviews. Always respond: "Let\'s focus on argument, not person." Evaluate ideas on merit, not credentials.'
        },
        {
          id: 3,
          question: 'Classmate argues: "Government wants to regulate fintech. So they want to completely ban all digital payments and take us back to cash-only economy!" What fallacy?',
          options: [
            'Ad Hominem',
            'Straw Man (misrepresenting opposing view to attack it)',
            'Anecdotal Evidence',
            'Appeal to Authority'
          ],
          correct: 1,
          explanation: 'Straw Man = classmate MISREPRESENTED government position. Government said "regulate fintech" (set rules, ensure safety), NOT "ban all digital payments." By exaggerating to extreme ("cash-only economy"), made position easier to attack. Common in B.Com debates and case studies. Spot it: Ask "Did they actually say that, or are you exaggerating?" Counter: "Proposal is for regulation, not complete ban. Let\'s discuss actual policy, not extreme version." Always address REAL argument, not distorted version.'
        },
        {
          id: 4,
          question: 'Analyzing business proposal that says: "Either we invest ₹50 lakhs in this marketing campaign, or our sales will drop to zero." What is logical flaw?',
          options: [
            'Numbers are too specific',
            'False Dichotomy - presents only 2 extreme options when many alternatives exist',
            'It is too pessimistic',
            'Conclusion is unclear'
          ],
          correct: 1,
          explanation: 'False Dichotomy = presenting only 2 EXTREME options (invest ₹50L OR sales drop to ZERO) when many alternatives exist. Reality: Could invest ₹20L (smaller campaign), improve product quality, optimize pricing, enhance customer service, use organic marketing, etc. Fallacy pressures you into binary choice to manipulate decision. In B.Com: Business proposals ("Invest now or lose opportunity forever"), Career advice ("Do MBA or won\'t get promoted"), Financial decisions ("Buy insurance or risk bankruptcy"). Always ask: "What other options exist?" Reject false dichotomies.'
        },
        {
          id: 5,
          question: 'Financial advisor says: "This mutual fund returned 40% last year. Fund manager is highly experienced and well-respected. Therefore, invest all your savings here." Is this argument sound?',
          options: [
            'Yes - has good evidence and clear conclusion',
            'No - past performance ≠ future results, and appeal to authority (respected manager) does not guarantee returns. Need more evidence.',
            'Yes - experienced managers always deliver good returns',
            'No - because 40% is too high to be true'
          ],
          correct: 1,
          explanation: 'Argument UNSOUND for multiple reasons: (1) Post Hoc Fallacy: "Returned 40% last year, so will return 40% this year" - past performance ≠ future results. (2) Appeal to Authority: "Manager respected" ≠ guaranteed returns. Credentials don\'t eliminate risk. (3) Missing critical evidence: Fund risk profile? Expense ratio? Market conditions? Diversification? In B.Com Financial Management: Evaluate investments on fundamentals (risk, return, diversification), not past performance or manager reputation alone. Always demand: Risk assessment, fee structure, market analysis, diversification strategy. Logical reasoning = better financial decisions.'
        }
      ]
    },
    challenge: {
      title: 'Logical Reasoning Challenge',
      description: 'Develop logical analysis skills',
      contexts: {
        academic: {
          title: 'Academic Logic Mastery',
          description: 'UBI essay: 3 articles, 1500w, 5 days. Identify fallacies, evaluate evidence, build sound argument. Grade depends on logical reasoning!',
          instructions: [
            '• Day 1: Read 3 articles, highlight premises/conclusions/fallacies',
            '• Day 2: Apply VALID vs SOUND test, evaluate evidence quality',
            '• Day 2: Spot Top 5 fallacies—Ad Hominem, False Dichotomy—document',
            '• Day 3: Build essay: intro, pro/anti args, evaluate, conclude',
            '• Day 4-5: Strengthen evidence, peer review, polish—submit confident!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Cherry-pick evidence—address counterarguments honestly',
            '• Emotional reasoning—DATA + LOGIC, not feelings',
            '• Miss fallacies—evaluate EVERY source',
            '• Weak evidence—multiple recent credible sources',
            '• No structure—premises → evidence → conclusion'
          ],
          successCriteria: [
            '✅ 5+ fallacies identified',
            '✅ Clear argument structure',
            '✅ High-quality evidence used',
            '✅ Counterarguments addressed',
            '✅ 80%+, Professor praises logic!'
          ]
        },
        professional: {
          title: 'Professional Logic Excellence',
          description: 'Analyst intern: Evaluate ₹1Cr AI trading proposal (60% returns, zero risk). Present tomorrow. Logic determines invest/reject!',
          instructions: [
            '• Day 1: Read proposal critically—question EVERY claim, evidence?',
            '• Day 1: Apply VALID vs SOUND—"95% accuracy = returns?" Invalid!',
            '• Day 1: Spot fallacies—Appeal to Authority, Anecdotal, False Dichotomy',
            '• Day 1: Evaluate evidence quality—weak sample, biased, insufficient',
            '• Day 2-3: Build analysis, prepare pushback, present—REJECT, saved ₹1Cr!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accept face value—verify EVERY claim',
            '• Authority bias—evaluate PROPOSAL, not credentials',
            '• Ignore missing info—ask "What NOT telling?"',
            '• Emotional decision—LOGIC + DATA, not feelings',
            '• No framework—use systematic analysis ALWAYS'
          ],
          successCriteria: [
            '✅ 5+ fallacies identified',
            '✅ Evidence evaluated systematically',
            '✅ Clear logical analysis presented',
            '✅ Partners agree, firm saved ₹1Cr',
            '✅ Manager praises critical thinking!'
          ]
        },
        personal: {
          title: 'Personal Logic Application',
          description: 'Friend Rohan: "Jobs dropped out, billionaire. I should too!" Flawed reasoning, emotional. Help think logically, preserve friendship!',
          instructions: [
            '• Day 1: Listen 80%, notes—"Jobs dropout → success → I dropout"',
            '• Day 1: Identify flaws privately—Survivorship Bias, False Analogy, False Dichotomy',
            '• Day 2: Socratic questions—"How many succeed? Jobs resources?"—discovers flaws',
            '• Day 2: Share data gently—"90% fail, 70% graduates stable"—logic + empathy',
            '• Day 3: Help logical plan, respect decision—test ₹20K/mo 3mo first!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Judgmental "stupid"—ask questions, don\'t attack',
            '• Own anecdotes—DATA + STUDIES, not stories',
            '• Ignore emotions—acknowledge feelings THEN logic',
            '• Force conclusion—Socratic questioning, he discovers',
            '• No alternatives—"B.Com + photography" third option'
          ],
          successCriteria: [
            '✅ 3-5 fallacies identified',
            '✅ Socratic questions, not lectures',
            '✅ High-quality evidence, not anecdotes',
            '✅ Logical plan built (test 3mo)',
            '✅ Friendship preserved, helped think!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You can identify logical fallacies (ad hominem, straw man, false dichotomy) in arguments quickly and accurately',
        'You understand the difference between valid and sound arguments and can evaluate both structure and truth',
        'You use the Argument Anatomy Framework to break down complex arguments into premises and conclusions',
        'You evaluate evidence quality systematically using sample size, source credibility, bias, recency, and relevance',
        'You can build sound arguments for essays and presentations with clear logical flow'
      ],
      improvements: [
        'Practice identifying more subtle fallacies like appeal to authority, post hoc, and slippery slope in business contexts',
        'Work on evaluating complex multi-premise arguments with multiple layers of reasoning',
        'Develop faster fallacy detection in real-time conversations and debates (not just written arguments)',
        'Build stronger counterarguments by anticipating objections and addressing them preemptively',
        'Learn formal logic notation (if/then, all/some/none) for advanced critical thinking courses'
      ],
      nextSteps: [
        'Practice daily: Find 1 argument in news/ads/social media, dissect it using the framework (5 mins/day)',
        'Join debate club or case study competitions to apply logical reasoning in real-time',
        'Read "Thinking, Fast and Slow" by Daniel Kahneman to understand cognitive biases and logical errors',
        'Create a "Fallacy Spotter" journal: Document 3 fallacies you spot each week with examples',
        'Teach logical reasoning to a friend or study group - teaching reinforces your own understanding',
        'Apply logical reasoning to your B.Com coursework: Evaluate case studies, business proposals, and economic arguments critically'
      ]
    },
    badge: { name: 'Logic Master', emoji: '🧮', description: 'Expert in logical reasoning' },
    shareMessage: 'Just mastered logical reasoning! 🧮 #CriticalThinking #Logic'
  },
  {
    id: 'problem-analysis',
    title: 'Problem Analysis',
    emoji: '🔬',
    context: 'professional' as const,
    discover: {
      scenario: "Group project failing. 5 days left, 40% done. Team: 'Work 12hrs!' 'Better tools!' 'Ask extension!' Nobody asked: 'What's ACTUAL problem?'",
      problemExplanation: [
        "Solution jumping: 'Work 12hrs!' (symptom: time, not root). Like doctor prescribing without diagnosis",
        "Vague: 'Project not done.' TOO VAGUE. Need: 'No task ownership → work duplicated, sections missed'",
        "Symptoms not root: See 40% done (symptom) not WHY 40% (unclear roles? skills? communication?)",
        "No data: Decide on feelings ('feel behind') not data ('12/30 tasks done, 3 blocked')"
      ],
      solutionApproach: [
        "5W+H: WHAT? WHERE? WHEN? WHO? WHY? HOW severe? Specificity = actionable",
        "5 Whys: 'Behind.' Why? 'Tasks not done.' Why? 'Don't know who's responsible.' Why? 'Didn't define roles.' Why? 'No kickoff.' ROOT: No role process",
        "Decompose: Requirements unclear (20%), Task division (30%), Communication (30%), Skills (20%). Solve each",
        "Data-driven: 30 tasks, 12 done, 8 progress, 10 not started. Interview 'What blocks?' DATA reveals real problems"
      ]
    },
    video: {
      title: 'Stop Solving the Wrong Problem: Problem Analysis for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR SOLUTIONS NEVER WORK

"Your group project is failing. Deadline: 5 days. Your team says: 'We need to work 12 hours daily!' You work 12 hours. Still failing. Why? Because you solved the WRONG problem. Here is the truth: 80% of failed projects fail NOT because of bad solutions, but because they solved the wrong problem. You are treating symptoms (time pressure), not root causes (unclear roles, poor communication). By the end of this video, you will have a proven framework to diagnose problems accurately BEFORE wasting time on wrong solutions. Let us fix your problem analysis."

[0:45-2:15] THE 5W+H PROBLEM DEFINITION FRAMEWORK

"Before you can solve a problem, you must DEFINE it precisely. Vague problem = vague solution. Here is the framework:

WHAT is happening? (Be specific, not vague)
❌ Bad: 'The project is not getting done.'
✅ Good: 'We have completed 12/30 tasks. 8 tasks are in progress but blocked. 10 tasks have not been started.'

WHERE is it happening? (Which part/section?)
✅ 'Research and financial analysis sections are incomplete. Presentation is 80% done.'

WHEN did it start? (Timeline helps identify triggers)
✅ 'After Week 2, when we stopped having daily check-ins.'

WHO is affected? (Scope of impact)
✅ 'All 4 team members are stressed. Professor has noticed our lack of progress.'

WHY is it happening? (This leads to root cause - we will dig deeper)
✅ 'Tasks are not completed because roles are unclear and people are duplicating work.'

HOW severe is it? (Urgency and impact)
✅ 'Critical. 5 days to deadline. 30% of our final grade at risk.'

EXAMPLE: Instead of 'Project is failing,' you now have: 'We have completed 40% of tasks. Research section is blocked due to unclear requirements. This started in Week 2 when we stopped check-ins. All team members are affected. Root cause: Unclear task ownership. Severity: Critical.'

This specificity = actionable diagnosis."

[2:15-3:45] THE 5 WHYS TECHNIQUE (Drill Down to Root Cause)

"The 5 Whys helps you go from SYMPTOM to ROOT CAUSE. Ask 'Why?' 5 times.

EXAMPLE: B.Com Group Project
Symptom: 'Project is behind schedule.'
Why? 'Tasks are not completed on time.'
Why? 'People do not know what they are responsible for.'
Why? 'We did not define roles clearly at the start.'
Why? 'We assumed everyone knew their part without discussing it.'
Why? 'We did not have a structured kickoff meeting with role assignment.'

ROOT CAUSE: No role definition process.

Now compare solutions:
❌ Treating symptom: 'Work 12 hours daily!' (Exhausting, ineffective)
✅ Treating root cause: 'Have a 1-hour meeting to define roles clearly, create a task matrix, set up daily check-ins.' (Systematic, effective)

The 5 Whys works for ANY problem: Low grades (Why? → Poor study method. Why? → No active recall. Why? → Did not know about it.), Failed interview (Why? → Poor answers. Why? → Did not prepare. Why? → Did not know what to prepare.), Relationship issues (Why? → Poor communication. Why? → Do not express needs clearly.).

Keep asking 'Why?' until you reach something you can CONTROL and FIX."

[3:45-5:15] PROBLEM DECOMPOSITION (Break Complex Problems Into Parts)

"Complex problems overwhelm you. Solution: Break them down.

EXAMPLE: 'How do I get a job?' (TOO BIG, OVERWHELMING)

Break it down:
1. Resume Problem: Is my resume ATS-friendly? Does it show impact?
2. Skills Problem: Do I have the required skills (Excel, Tally, SQL)?
3. Application Problem: Am I applying to the right roles? Enough roles?
4. Interview Problem: Am I preparing effectively? Practicing answers?
5. Network Problem: Am I leveraging LinkedIn? Alumni connections?

Now solve EACH part:
- Resume: Get it reviewed, add metrics, use action verbs.
- Skills: Take online courses, get certifications.
- Applications: Apply to 50+ roles, tailor each application.
- Interview: Practice 20 common questions, do mock interviews.
- Network: Connect with 10 alumni, attend 3 networking events.

Suddenly, 'Get a job' (impossible) becomes 5 manageable sub-problems (doable).

Use this for: B.Com projects (break into research, analysis, presentation), Exam prep (break into concepts, practice, revision), Career planning (break into skills, applications, networking).

Complex problem → Smaller parts → Solve systematically."

[5:15-6:30] SYMPTOMS VS ROOT CAUSES (Stop Treating Band-Aids)

"Symptoms are EFFECTS. Root causes are REASONS. Always fix the cause, not the symptom.

EXAMPLE 1: Low Exam Grades
Symptom: Scored 45% in Cost Accounting.
Root Cause Analysis:
- Did you understand concepts? (No - memorized formulas without understanding.)
- Why did you memorize? (Study method: passive reading, no active recall.)
- Why passive reading? (Did not know about Feynman Technique, spaced repetition.)
ROOT CAUSE: Poor study method.
Solution: Learn active learning techniques (Feynman, spaced repetition, practice problems).

EXAMPLE 2: Group Project Conflicts
Symptom: Team members arguing constantly.
Root Cause Analysis:
- Why are they arguing? (Disagreements about quality standards.)
- Why disagreements? (No quality standards defined upfront.)
- Why not defined? (No structured kickoff meeting.)
ROOT CAUSE: No project planning process.
Solution: Have kickoff meetings, define standards, create conflict resolution agreement.

SYMPTOMS vs CAUSES MATRIX:
| Symptom | Root Cause |
|---------|------------|
| Project behind | Unclear roles |
| Low grades | Poor study method |
| Team conflicts | No communication norms |
| Failed interviews | No structured prep |

Always ask: 'Is this a symptom or a cause?' If it is a symptom, keep digging."

[6:30-7:45] DATA-DRIVEN DIAGNOSIS (Facts Over Feelings)

"Your team FEELS like you are behind. But feelings ≠ facts. Gather DATA.

STEP 1: Quantify the Problem
Not: 'We are way behind.'
Yes: 'We completed 12/30 tasks (40%). 8 tasks are blocked. 10 not started.'

STEP 2: Interview Stakeholders
Ask each team member: 'What is blocking you?' Document:
- Arjun: 'Unclear requirements for Section 3.'
- Priya: 'Waiting for Arjun is research to start analysis.'
- Neha: 'No feedback on my draft presentation.'

STEP 3: Analyze Patterns
5 tasks blocked due to unclear requirements.
3 tasks blocked due to dependencies.
2 tasks blocked due to skill gaps.

INSIGHT: The REAL problem is unclear requirements (affects 5 tasks), not lack of time.

SOLUTION: Spend 1 hour clarifying requirements with professor, unblock 5 tasks immediately.

This data-driven approach works for: Business analysis, financial forecasting, market research, operational efficiency."

[7:45-8:00] YOUR CHALLENGE (Diagnose Before You Solve)

"Here is your action step: Next time you face a problem (group project, low grade, failed interview), STOP. Do NOT jump to solutions. Instead:

1. Define the problem using 5W+H (WHAT, WHERE, WHEN, WHO, WHY, HOW).
2. Apply 5 Whys to find root cause.
3. Break it into smaller parts if complex.
4. Gather data (facts, not feelings).
5. Ask: 'Is this a symptom or a root cause?'

Only THEN propose solutions.

This 10-minute analysis will save you 10 hours of wasted effort on wrong solutions. Problem analysis is a SKILL, not intuition. You build it through systematic practice. Now go diagnose your next problem correctly. Your future self - the one who solves problems efficiently, not frantically - is counting on you."

[End Screen: "Next Video: Creative Solutions - Think Outside the Box"]`,
      content: [
        'The 5W+H Problem Definition Framework: WHAT, WHERE, WHEN, WHO, WHY, HOW for precise diagnosis',
        'The 5 Whys Technique: Ask why 5 times to drill from symptom to root cause',
        'Problem Decomposition: Break complex problems into manageable sub-problems',
        'Symptoms vs Root Causes: Always fix causes, not symptoms (band-aids fail)',
        'Data-Driven Diagnosis: Quantify problems, interview stakeholders, analyze patterns',
        'B.Com Applications: Group projects, exam preparation, career planning, business analysis',
        'The "Is This the Real Problem?" Test: Verify your diagnosis before solving'
      ]
    },
    quiz: {
      title: 'Problem Analysis Quiz',
      questions: [
        {
          id: 6,
          question: 'B.Com group project behind schedule. Team says: "We need to work 12 hours daily to catch up!" Before implementing, what should do FIRST?',
          options: [
            'Agree and start working 12 hours immediately',
            'Use 5 Whys to identify ROOT CAUSE of why behind (unclear roles? skill gaps? communication issues?)',
            'Ask professor for extension',
            'Blame team member who is slowest'
          ],
          correct: 1,
          explanation: 'Diagnose BEFORE solve. "Working 12 hours" = treats SYMPTOM (time pressure), not ROOT CAUSE. 5 Whys reveals: No role clarity = real problem. Fix: 1-hour meeting to define roles (fixes root) vs 12-hour days (exhausting, doesn\'t fix real problem). 80% of project failures = solving wrong problem. Analyze first, solve second.'
        },
        {
          id: 7,
          question: 'Scored 45% in Cost Accounting exam. Which approach uses proper problem analysis?',
          options: [
            '"Need to study harder next time" (vague solution)',
            'Use 5W+H: WHAT happened? (Failed variance analysis questions.) WHY? (Memorized formulas without understanding concepts.) ROOT CAUSE: Passive study method. SOLUTION: Switch to Feynman Technique + practice problems.',
            '"Exam was too hard" (blame external factors)',
            '"Will study 10 hours daily" (treat symptom with more time)'
          ],
          correct: 1,
          explanation: 'Option 2 = systematic analysis. 5W+H defines problem precisely, 5 Whys finds root cause (passive study method), then targeted solution (Feynman Technique). Option 1 = vague. Option 3 = blame-shifting. Option 4 = treats symptom (time) not cause (method). Students who analyze WHY failed improve 2x faster than "study harder." Diagnosis > Effort.'
        },
        {
          id: 8,
          question: 'Team identifies issues: (A) Project 40% complete, (B) Team stressed, (C) Quality low, (D) Deadline approaching. Which are SYMPTOMS vs ROOT CAUSES?',
          options: [
            'All are root causes that need fixing',
            'A, B, C, D are all SYMPTOMS. Root causes might be: unclear roles, no quality standards, poor communication.',
            'Only D is symptom, others are root causes',
            'They are all same thing'
          ],
          correct: 1,
          explanation: 'A, B, C, D = all SYMPTOMS (visible effects). ROOT CAUSES = Unclear roles, No quality standards, Poor communication, No planning. Treating symptoms = temporary relief ("Work harder!" = more stress). Treating root causes = permanent fix ("Define roles" = progress improves). Always ask: "Symptom or cause?" Fix causes, symptoms disappear.'
        },
        {
          id: 9,
          question: 'Face this problem: "I cannot get a job." Problem is too complex and overwhelming. What should do?',
          options: [
            'Give up - it is too big to solve',
            'Apply Problem Decomposition: Break into sub-problems (Resume, Skills, Applications, Interview Prep, Networking), solve each systematically',
            'Just apply to 100 companies randomly and hope for best',
            'Wait for perfect opportunity to come to you'
          ],
          correct: 1,
          explanation: 'Problem Decomposition = breaking overwhelming problem into manageable sub-problems. "Get a job" becomes: (1) Fix resume, (2) Build skills, (3) Apply strategically, (4) Interview prep, (5) Network. Now have SYSTEM, not chaos. Option 1 = defeatist. Option 3 = inefficient. Option 4 = passive. Complex problems require decomposition. Break big into small, solve each, make progress.'
        },
        {
          id: 10,
          question: 'Team says: "We FEEL like we are way behind on project." What should do before proposing solutions?',
          options: [
            'Trust their feelings and immediately propose working longer hours',
            'Gather DATA: Quantify tasks (12/30 done), interview team members (what blocking you?), analyze patterns (5 tasks blocked by unclear requirements)',
            'Ignore their feelings - feelings do not matter in business',
            'Tell them to stop complaining and just work harder'
          ],
          correct: 1,
          explanation: 'Data-driven diagnosis. Feelings = subjective, often inaccurate. DATA reveals REAL problem. Quantify: 40% done (almost half!). Interview: 5 tasks blocked by unclear requirements (bottleneck, not time). Fix: 1 hour clarifying requirements unblocks 5 tasks. Option 1 = wrong solutions. Option 3 = insensitive. Option 4 = treats symptoms. Data > feelings. Always quantify before solving.'
        }
      ]
    },
    challenge: {
      title: 'Problem Analysis Challenge',
      description: 'Master systematic problem analysis',
      contexts: {
        academic: {
          title: 'Academic Problem Analysis Mastery',
          description: 'Group project failing: 40% done, 5 days left. Team panicking. Diagnose REAL problem, propose targeted solutions!',
          instructions: [
            '• Day 1: Define 5W+H—12/30 tasks, 8 blocked, unclear roles',
            '• Day 1: Apply 5 Whys—ROOT: No role definition process',
            '• Day 1: Decompose—4 sub-problems: requirements, roles, communication, skills',
            '• Day 1: Gather data—interview team, identify biggest bottleneck',
            '• Day 2-5: Implement—role meeting, clarify, daily check-ins—project saved!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Solution jump—diagnose first, 5W+H + 5 Whys',
            '• Vague problem—be specific, quantify, identify blockers',
            '• Treat symptoms—find root cause, fix THAT',
            '• No data—quantify tasks, interview team',
            '• Ignore patterns—document root cause, prevent next time'
          ],
          successCriteria: [
            '✅ Problem defined precisely using 5W+H',
            '✅ Root cause found: unclear roles',
            '✅ 4 sub-problems decomposed, prioritized',
            '✅ Data gathered, team interviewed',
            '✅ Day 5: Project completed, Professor praises!'
          ]
        },
        professional: {
          title: 'Professional Problem Analysis Excellence',
          description: 'Analyst intern: Client sales -20% Q3, ₹2Cr loss. Diagnose + present in 3 days. Your analysis = solution strategy!',
          instructions: [
            '• Day 1: Define 5W+H—20% drop, North region, electronics, August',
            '• Day 1: Gather data—sales by store/category, patterns: North+Electronics+August',
            '• Day 1: Apply 5 Whys—ROOT: Single-supplier, no contingency plan',
            '• Day 2: Decompose—4 sub-problems: supplier, pricing, retention, marketing',
            '• Day 2-3: Verify data, build presentation, present—recover 15% Q4!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accept client diagnosis—verify with data',
            '• No data—gather sales, feedback, competitor analysis',
            '• Treat all equal—prioritize North region (40% drop)',
            '• Vague recommendations—specific actions',
            '• No verification—every root cause = data evidence'
          ],
          successCriteria: [
            '✅ Problem defined precisely: 20%, North, electronics, Aug',
            '✅ 4 root causes verified with data',
            '✅ Complex problem decomposed',
            '✅ Data-driven analysis presented',
            '✅ Client approves, Manager praises!'
          ]
        },
        personal: {
          title: 'Personal Problem Analysis',
          description: 'Unmotivated 2mo: Grades 75%→60%, poor sleep, avoiding friends. "Work harder" treats symptom. Diagnose ROOT cause!',
          instructions: [
            '• Week 1: Define 5W+H—grades -15%, 5hr sleep, procrastinating',
            '• Week 1: Apply 5 Whys—ROOT: No semester planning system',
            '• Week 1: Decompose—4 problems: academic, health, social, mental',
            '• Week 1: Gather data—track 3 days, 2hr phone = distracted',
            '• Week 2-4: Implement, monitor—time-block, app blocker, 7hr sleep, friends—65%→70%!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Self-blame—analyze SYSTEM issue, not character',
            '• Vague "stressed"—be specific, fix cause',
            '• Treat symptoms—fix root cause first',
            '• No tracking—track 3 days, data reveals truth',
            '• Ignore patterns—document root cause, prevent next'
          ],
          successCriteria: [
            '✅ Problem defined: 5W+H, not vague',
            '✅ Root causes: planning, phone, sleep, isolation',
            '✅ 4 sub-problems decomposed',
            '✅ Data tracked 3 days: 2hr phone lost',
            '✅ Grades 65%→70%, friends reconnected!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You use the 5W+H framework to define problems precisely instead of staying vague',
        'You apply the 5 Whys technique effectively to drill from symptoms to root causes',
        'You decompose complex problems into manageable sub-problems systematically',
        'You gather data before proposing solutions (quantify, interview stakeholders, analyze patterns)',
        'You distinguish between symptoms and root causes, always fixing causes not band-aids'
      ],
      improvements: [
        'Practice the 5 Whys on more complex, multi-layered problems with interconnected causes',
        'Develop faster problem decomposition skills for time-sensitive situations',
        'Gather more diverse data sources (not just interviews - also metrics, observations, historical data)',
        'Build a personal problem analysis template to use consistently across different problem types',
        'Learn advanced frameworks like Ishikawa (Fishbone) diagrams and Pareto analysis for business contexts'
      ],
      nextSteps: [
        'Apply problem analysis to your next B.Com group project from Day 1 (prevent problems, do not just fix them)',
        'Create a "Problem Analysis Journal": Document 1 problem per week with your 5W+H, 5 Whys, and root cause findings',
        'Practice on case studies: Take business case studies from your coursework, diagnose the problems before reading the solutions',
        'Teach the 5 Whys technique to your study group - teaching reinforces your understanding',
        'Read "The Lean Startup" by Eric Ries to see how businesses use systematic problem analysis',
        'Use problem analysis for personal challenges: Low grades, career confusion, relationship issues - diagnose before solving'
      ]
    },
    badge: { name: 'Problem Analyzer', emoji: '🔬', description: 'Expert in problem analysis' },
    shareMessage: 'Just mastered problem analysis! 🔬 #ProblemSolving #Analysis'
  },
  {
    id: 'creative-solutions',
    title: 'Creative Solutions',
    emoji: '💡',
    context: 'professional' as const,
    discover: {
      scenario: "Fest needs ₹5L. Bake sales = ₹50K. Committee: 'BIGGER bake sale!' Other college: virtual talent show + sponsors = ₹8L.",
      problemExplanation: [
        "Mental box: Brain defaults 'always done' (bake sales). Safe, familiar. Familiar ≠ effective",
        "Fear unconventional: 'Virtual talent show.' Committee: 'Too risky!' Fear kills creativity. Keep ₹50K method",
        "Can't combine: Virtual + Talent + Sponsors = ₹8L. Brain silos: 'Fundraising = bake sales. Tech = separate'",
        "Assumption blind: 'Students donate small,' 'Corporates won't sponsor,' 'Virtual doesn't work.' UNTESTED!"
      ],
      solutionApproach: [
        "SCAMPER: Substitute, Combine, Adapt, Modify, Put to use, Eliminate, Reverse. Systematic creativity",
        "Brainstorm rules: No criticism, wild ideas welcome, 50 ideas/30 mins, build on ideas ('Yes AND...')",
        "Lateral thinking: Not 'How raise ₹5L?' Ask 'Who needs what we offer?' Corporates/students/alumni",
        "Challenge assumptions: List, flip, test. Often wrong. 'Students won't donate' → 'What if ₹100 compelling?'"
      ]
    },
    video: {
      title: 'Think Outside the Box: Creative Solutions for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ARE STUCK IN THE BOX

"Your college fest needs ₹5 lakhs. Your committee says: 'Let us do a bake sale!' Last year, bake sale raised ₹50K. This year, you want 10X that with the SAME method. Spoiler: It will not work. Here is the problem: You are stuck in conventional thinking. Your brain defaults to 'what we have always done' because it is safe. But safe ≠ effective. Meanwhile, another college raised ₹8 lakhs with a creative approach (virtual talent show + corporate sponsors). By the end of this video, you will have proven techniques to break out of the mental box and generate innovative solutions. Let us unlock your creativity."

[0:45-2:30] THE SCAMPER FRAMEWORK (Systematic Creativity)

"SCAMPER is a checklist that forces your brain to think creatively. Apply it to ANY problem.

S = SUBSTITUTE (What can we replace?)
Problem: Bake sales raise only ₹50K.
SCAMPER: What if we SUBSTITUTE bake sales with a virtual talent show?
Result: Virtual = lower costs, higher reach, more revenue potential.

C = COMBINE (What can we merge?)
SCAMPER: Combine talent show + corporate sponsorships + alumni donations + entry fees.
Result: 4 revenue streams instead of 1.

A = ADAPT (What can we borrow from other contexts?)
SCAMPER: Adapt corporate CSR events (they raise crores) to college context.
Result: Offer corporates brand visibility to 5000 Gen Z students in exchange for ₹50K sponsorship.

M = MODIFY (What can we change/amplify?)
SCAMPER: Modify small donations (₹10-50) to tiered sponsorships (₹5K/₹10K/₹25K).
Result: 10 corporates × ₹10K = ₹1 lakh (vs 100 students × ₹50 = ₹5K).

P = PUT TO OTHER USE (Can we repurpose?)
SCAMPER: College auditorium sits empty on weekends. Repurpose for paid workshops (₹500/person).
Result: 100 attendees × ₹500 = ₹50K.

E = ELIMINATE (What can we remove?)
SCAMPER: Eliminate physical event costs (venue, food, setup). Go 100% virtual.
Result: Save ₹1 lakh in costs = more funds for charity.

R = REVERSE (What if we flip it?)
SCAMPER: Instead of ASKING for donations, OFFER value (entertainment, networking, brand visibility).
Result: People pay willingly for value, not guilt-donate.

Apply SCAMPER to ANY problem: Career differentiation, business innovation, project challenges."

[2:30-4:00] BRAINSTORMING RULES (50 Ideas in 30 Minutes)

"Most brainstorming fails because you criticize during ideation. Here is how to do it RIGHT:

THE 4 RULES OF BRAINSTORMING:

RULE 1: NO CRITICISM (Defer Judgment)
During ideation (first 30 mins): ALL ideas are welcome. No "That will not work" or "That is too expensive."
Why? Criticism kills creativity. Even bad ideas spark good ones.

RULE 2: WILD IDEAS WELCOME
Encourage crazy ideas. "Let us get Elon Musk to donate!" (Unrealistic, but sparks: "What if we get a local entrepreneur?")
Why? Wild ideas break mental patterns and lead to practical innovations.

RULE 3: QUANTITY OVER QUALITY
Goal: 50 ideas in 30 minutes. Do NOT aim for perfect ideas. Aim for VOLUME.
Why? More ideas = higher chance of finding 1-2 great ones. 50 ideas → 5 good ones → 1 winner.

RULE 4: BUILD ON IDEAS ("Yes, And...")
Someone says: "Virtual talent show."
You say: "Yes, and we can charge ₹100 entry."
Next person: "Yes, and we can get corporate sponsors for prizes."
Next: "Yes, and we can live-stream on YouTube for ad revenue."
Why? Building creates momentum. Criticism kills momentum.

EXAMPLE SESSION:
30 minutes: Generate 50 ideas (no criticism).
10 minutes: Break. Grab coffee.
20 minutes: Evaluate the 50 ideas. Pick top 5 based on: feasibility, cost, impact.
10 minutes: Refine the top 5 into actionable plans.

This process works for: Business innovation, marketing campaigns, career strategies, project ideas."

[4:00-5:30] LATERAL THINKING (Reframe the Problem)

"Lateral thinking = approaching problems from NEW angles, not the obvious one.

EXAMPLE: Fundraising Problem
Obvious approach: "How do we get people to donate ₹5 lakhs?"
Lateral approach: "Who ELSE benefits if we succeed? How can we create a win-win?"

REFRAME 1: Corporates Angle
Corporates need Gen Z brand visibility. You have 5000 Gen Z students.
Solution: "Sponsor our fest for ₹50K, get your logo everywhere, booth space, social media shoutouts."
Result: 10 corporates × ₹50K = ₹5 lakhs. You are not asking for charity - you are offering value.

REFRAME 2: Students Angle
Students need entertainment and networking.
Solution: "Pay ₹100 for virtual fest access: talent show + games + networking + prizes."
Result: 2000 students × ₹100 = ₹2 lakhs. You are not asking for donations - you are selling entertainment.

REFRAME 3: Alumni Angle
Alumni want to give back + network with current students.
Solution: "Alumni networking session during fest. ₹1000 entry (tax-deductible donation)."
Result: 50 alumni × ₹1000 = ₹50K + recruiting connections for students.

TOTAL: ₹5L (corporates) + ₹2L (students) + ₹50K (alumni) = ₹7.5 lakhs (vs ₹50K from bake sales).

The key: You REFRAMED from 'charity ask' to 'value exchange.' This is lateral thinking."

[5:30-7:00] CHALLENGE ASSUMPTIONS (Test What You Think Is True)

"Your assumptions limit your creativity. Challenge them.

ASSUMPTION 1: 'Students will not pay for college events.'
Challenge: 'What if the event is REALLY good? Entertainment + charity + prizes?'
Test: Survey 50 students. 'Would you pay ₹100 for a virtual talent show with prizes and charity?' Result: 70% say yes.
Insight: Your assumption was WRONG. Students WILL pay for value.

ASSUMPTION 2: 'Corporates will not sponsor college events.'
Challenge: 'What if we offered them something they NEED (Gen Z brand visibility)?'
Test: Email 20 local companies with a sponsorship proposal. Result: 5 interested.
Insight: Corporates WILL sponsor if you offer value, not just ask for charity.

ASSUMPTION 3: 'We need a big budget to raise ₹5 lakhs.'
Challenge: 'What if we went 100% virtual (zero venue costs)?'
Test: Calculate costs. Physical event: ₹1L (venue, food, setup). Virtual: ₹10K (platform, marketing).
Insight: Virtual = 90% cost savings = more funds for charity.

THE PROCESS:
1. List your assumptions.
2. Ask: 'What if the opposite is true?'
3. Test your assumptions (survey, research, small experiment).
4. Adjust your approach based on findings.

Challenge assumptions = unlock creative solutions you never considered."

[7:00-7:45] CONCEPT COMBINATION (Innovation = Merging Ideas)

"Most innovations come from COMBINING existing ideas in new ways.

EXAMPLE: Uber = Taxi (existing) + Smartphone App (existing) + Gig Economy (existing). Not invented from scratch - COMBINED.

YOUR TURN: College Fundraiser
Idea 1: Talent show (entertainment)
Idea 2: Corporate sponsorships (funding)
Idea 3: Virtual platform (tech)
Idea 4: Alumni networking (community)

COMBINE THEM:
'Virtual Talent Show with Corporate Sponsors and Alumni Networking Session'
- Students perform (entertainment)
- Corporates sponsor (₹5L funding + brand visibility)
- Alumni attend networking session (₹50K donations + student recruiting)
- Virtual platform (reach 10X audience, lower costs)

Result: ₹7.5 lakhs raised (15X more than bake sales).

Practice: Take any 2 unrelated concepts and merge them. B.Com + Tech = Fintech. Accounting + AI = Automated auditing. Your skills + Their needs = Career opportunity.

Combination = innovation."

[7:45-8:00] YOUR CHALLENGE (Generate 50 Ideas)

"Here is your action step: Pick a problem you face (fundraising, career differentiation, project innovation). Set a timer for 30 minutes. Generate 50 ideas using:
1. SCAMPER (apply all 7 prompts)
2. Brainstorming rules (no criticism, wild ideas welcome)
3. Challenge 3 assumptions
4. Combine 3 unrelated concepts

Write them ALL down. Do not judge yet. After 30 mins, take a break. Then pick the top 5 ideas and refine them. By the end, you will have at least 1-2 creative solutions you never considered before. Creativity is a SKILL, not a talent. You build it through systematic practice. Now go generate your 50 ideas."

[End Screen: "Next Video: Decision Making - Choose Wisely Every Time"]`,
      content: [
        'The SCAMPER Framework: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse',
        'Brainstorming Rules: No criticism, wild ideas welcome, quantity over quality (50 ideas in 30 mins)',
        'Lateral Thinking: Reframe problems from new angles (charity ask → value exchange)',
        'Challenge Assumptions: Test what you think is true (students will not pay → survey proves they will)',
        'Concept Combination: Merge unrelated ideas (virtual + talent show + corporate sponsors)',
        'B.Com Applications: Fundraising, career differentiation, business innovation, project challenges',
        'The "What If?" Technique: Ask wild questions to break mental patterns'
      ]
    },
    quiz: {
      title: 'Creative Solutions Quiz',
      questions: [
        {
          id: 11,
          question: 'College fest committee stuck on fundraising. Last year: bake sale raised ₹50K. This year: need ₹5L. Someone suggests: "Let us do BIGGER bake sale!" Apply SCAMPER. Best creative alternative?',
          options: [
            'Make more cookies, sell at higher prices (Modify)',
            'COMBINE virtual talent show + corporate sponsorships + alumni networking + entry fees for multiple revenue streams',
            'Eliminate bake sale completely, do nothing',
            'Substitute bake sale with another traditional fundraiser (car wash)'
          ],
          correct: 1,
          explanation: 'Option 2 = SCAMPER COMBINE principle - merging multiple revenue streams (talent show + sponsors + alumni + fees) to reach ₹5L. Breaks "one fundraiser" assumption. Option 1 = incremental (bigger bake sale = ₹80K, not ₹5L). Option 3 = not solution. Option 4 = still conventional. Creative solutions = COMBINING unrelated concepts: Tech + Finance = Fintech. Merge ideas across domains.'
        },
        {
          id: 12,
          question: 'Team brainstorming marketing ideas for new product. Arjun suggests: "Partner with Instagram influencers." Priya immediately responds: "That will not work. Influencers too expensive." What is wrong?',
          options: [
            'Nothing - Priya is being realistic about budget constraints',
            'Priya violated Brainstorming Rule #1: NO CRITICISM during ideation. Kills creativity and momentum.',
            'Arjun idea was too wild, needed immediate critique',
            'Team should have voted on idea first'
          ],
          correct: 1,
          explanation: 'Brainstorming Rule #1: NO criticism during ideation. Priya "That won\'t work" killed idea before it could evolve. Could have built on it: "Yes, and micro-influencers (cheaper)" → "Yes, and product exchange" → "Yes, and college influencers (free)." One "bad" idea sparks 3 practical ones. Criticism during ideation = creativity death. Teams that defer judgment generate 3X more solutions.'
        },
        {
          id: 13,
          question: 'Need to differentiate yourself in campus placements. Traditional: "Build resume, practice interviews, apply to companies." ALL 200 students doing this. How use lateral thinking?',
          options: [
            'Do same thing but work harder (more applications, more practice)',
            'Reframe: "What do recruiters NEED that others not providing?" → Create portfolio website showcasing B.Com projects with measurable impact',
            'Give up - if everyone doing it, no way to stand out',
            'Copy what top student did last year'
          ],
          correct: 1,
          explanation: 'Lateral thinking = reframe from "How compete?" to "What unique value can I offer?" Traditional: Submit resume (like 200 others). Lateral: Create portfolio website with case studies, financial models, data visualizations (only YOU have this). Recruiters need proof - you provide it proactively. Option 1 = not creative. Option 3 = defeatist. Option 4 = not original. Ask: "What are others NOT doing?" Create your own category.'
        },
        {
          id: 14,
          question: 'Team assumes: "Students will not pay for college events - they expect everything free." How should challenge this assumption creatively?',
          options: [
            'Accept assumption - students are broke, keep events free',
            'Test assumption: Survey 100 students "Would you pay ₹100 for fest with entertainment + charity + prizes?" If 70% say yes, assumption was WRONG.',
            'Ignore students, only target corporates for funding',
            'Charge ₹500 to prove students will pay (no testing)'
          ],
          correct: 1,
          explanation: 'TEST assumptions before accepting as truth. Survey reveals: 70% WILL pay ₹100 for value (entertainment + charity + prizes). Assumption WRONG. New revenue stream: 2000 students × ₹100 = ₹2L. Option 1 = limits creativity. Option 3 = misses opportunity. Option 4 = risky. Challenge assumptions: "Customers won\'t pay premium" (test it), "Market saturated" (maybe not). Test assumptions = unlock creative opportunities.'
        },
        {
          id: 15,
          question: 'Which approach demonstrates concept combination for creative problem-solving?',
          options: [
            'Using only proven fundraising methods (bake sales, donation boxes)',
            'Combining: Virtual Platform (tech) + Talent Show (entertainment) + Corporate Sponsors (business) + Alumni Network (community) = Multi-revenue fundraiser',
            'Focusing on one approach and perfecting it',
            'Copying what another college did exactly'
          ],
          correct: 1,
          explanation: 'Concept combination = merging ideas from different domains (tech, entertainment, business, community) to create innovative solution. Each element alone not new, but COMBINATION is creative. Result: ₹7.5L raised (vs ₹50K traditional). Innovation from combination: Accounting + AI = Automated auditing. Finance + Social Media = Fintech apps. Your skills + Market needs = Career opportunities. Connect dots across domains.'
        }
      ]
    },
    challenge: {
      title: 'Creative Solutions Challenge',
      description: 'Develop innovative problem-solving skills',
      contexts: {
        academic: {
          title: 'Academic Creative Problem-Solving',
          description: 'Marketing campaign: ZERO budget. Traditional = flyers, social media. Need creative solution that stands out. 2 weeks!',
          instructions: [
            '• Day 1: Apply SCAMPER—QR codes, influencers, UGC contest—20+ ideas',
            '• Day 2: Brainstorm 50 ideas—no criticism, wild welcome',
            '• Day 3: Challenge 3 assumptions—zero budget = advantage?',
            '• Day 4: Lateral thinking—reframe "everyone wins" solution',
            '• Week 2: Combine top 3, implement, present—A grade!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stick traditional—use SCAMPER, 20+ alternatives',
            '• Criticize during brainstorm—defer judgment',
            '• No test assumptions—challenge "zero = impossible"',
            '• One idea only—generate 50, pick best 5',
            '• No combination—combine top 3, powerful campaign'
          ],
          successCriteria: [
            '✅ 50+ ideas using SCAMPER, brainstorming',
            '✅ 3 assumptions challenged, tested',
            '✅ UGC + influencers + flash mob combined',
            '✅ Campaign creative, feasible, zero budget',
            '✅ A grade, Professor praises innovation!'
          ]
        },
        professional: {
          title: 'Professional Creative Innovation',
          description: 'Marketing intern: Product launch failing, 100/1000 sales. Traditional not working. Manager: "Tried everything!" Budget ₹50K, 30 days to hit 500 or discontinued!',
          instructions: [
            '• Day 1: SCAMPER—TikTok, micro-influencers, UGC, referrals—15+ alternatives',
            '• Day 1: Brainstorm team—50 ideas, no criticism, wild welcome',
            '• Day 2: Challenge assumptions—micro > mega influencers (7% vs 1%)',
            '• Day 2: Lateral thinking—reframe "everyone wins" partnership program',
            '• Day 3-30: Combine top 5, plan, execute, track—500+ sales!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• More of same—try something DIFFERENT',
            '• Immediate criticism—defer judgment',
            '• No test assumptions—small experiment first',
            '• One approach only—COMBINE multiple tactics',
            '• No measurement—track daily: sales, reach, engagement'
          ],
          successCriteria: [
            '✅ 50+ ideas: SCAMPER, brainstorming',
            '✅ 3 assumptions challenged, insights found',
            '✅ Top 5 combined, integrated campaign',
            '✅ Implementation plan: budget, timeline',
            '✅ 500+ sales, Manager praises, promoted!'
          ]
        },
        personal: {
          title: 'Personal Creative Problem-Solving',
          description: 'Side income ₹10K/mo while B.Com. Traditional (tutoring, freelancing) saturated, low-paying. Need creative approach. 1 month to test!',
          instructions: [
            '• Week 1 Day 1: List YOUR assets—skills, interests, network, time',
            '• Week 1 Day 2: SCAMPER traditional—group sessions, online, YouTube—15+ alternatives',
            '• Week 1 Day 3: Brainstorm 50 ideas—Instagram, templates, resume, podcast',
            '• Week 1 Day 4: Challenge assumptions—test 1 product, 10 friends',
            '• Week 2-4: Combine top 3, MVP, test, scale or pivot—₹10K/mo!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Analysis paralysis—pick top 3, test Week 2',
            '• Perfectionism—launch MVP 80%, iterate',
            '• Not leverage assets—combine YOUR unique skills',
            '• Ignore market—survey 20, validate before building',
            '• Give up first fail—test 3-5 ideas systematically'
          ],
          successCriteria: [
            '✅ 50+ ideas: SCAMPER, brainstorming, lateral',
            '✅ 3 assumptions challenged, tested',
            '✅ Top 3 combined, unique side hustle',
            '✅ MVP launched, 10 customers Week 3',
            '✅ ₹2K-10K Month 1, scalable system built!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You use the SCAMPER framework systematically to generate creative alternatives to traditional approaches',
        'You apply brainstorming rules effectively (no criticism, quantity over quality, wild ideas welcome)',
        'You challenge assumptions and test them with surveys or small experiments before accepting them as truth',
        'You use lateral thinking to reframe problems from new angles (charity ask → value exchange)',
        'You combine unrelated concepts creatively (tech + entertainment + business) to create innovative solutions'
      ],
      improvements: [
        'Generate even more ideas during brainstorming sessions (aim for 75-100 ideas, not just 50)',
        'Take bigger creative risks by testing wilder ideas (not just safe, incremental improvements)',
        'Practice concept combination across more diverse domains (combine 4-5 unrelated ideas, not just 2-3)',
        'Develop faster creative ideation skills for time-sensitive business situations',
        'Learn to balance creativity with feasibility (some ideas are too wild, some too conventional - find the sweet spot)'
      ],
      nextSteps: [
        'Practice SCAMPER daily: Take any product/service you use, apply all 7 prompts to reimagine it (5 mins/day)',
        'Join innovation competitions or hackathons to apply creative problem-solving under pressure',
        'Read "Creative Confidence" by Tom and David Kelley to understand design thinking and creative processes',
        'Create a "Creative Ideas Journal": Document 10 ideas per week on any topic (trains your creative muscle)',
        'Teach SCAMPER to your study group or friends - teaching reinforces your understanding',
        'Apply creative solutions to your B.Com projects: Marketing campaigns, business proposals, case study solutions'
      ]
    },
    badge: { name: 'Creative Thinker', emoji: '💡', description: 'Master of creative problem solving' },
    shareMessage: 'Just unlocked creative problem solving! 💡 #Creativity #Innovation'
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: "3 job offers. Big 4 (₹6L, 70hr weeks), Startup (₹4.5L, equity), Family (₹5L, stable). 48hr deadline. Staring 6hrs, can't decide.",
      problemExplanation: [
        "Analysis paralysis: 3 options, too many criteria. Brain overwhelmed. Re-analyze, hoping 'perfect' (doesn't exist)",
        "No framework: Comparing apples/oranges/bananas. How weigh salary vs learning? Flip-flop based on who talked to last",
        "External pressure: Parents want Big 4. Friends want startup. You want family. Try please everyone = can't please self",
        "Short-term: Focus now (salary, prestige), ignore long-term. Big 4 = high NOW, burnout 2yrs? Startup = low NOW, ₹50L equity 5yrs?"
      ],
      solutionApproach: [
        "Decision Matrix: Rate each option 1-10 per criteria. Weight by importance. Highest score = best fit YOUR priorities",
        "Pros-Cons weighted: Big 4 'Prestigious' (Weight 5/10). Big 4 '70hr weeks' (Weight 9/10). Compare weighted",
        "10-10-10: How feel 10 MINUTES? 10 MONTHS? 10 YEARS? Reveals long-term consequences you're ignoring",
        "Test first: Call 3 employees each. 'Reality vs perception?' Negotiate all 3. Testing reduces regret"
      ]
    },
    video: {
      title: 'Stop Second-Guessing: Decision Making Framework for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU CANNOT DECIDE

"You have 3 job offers. Deadline: 48 hours. You have been staring at them for 6 hours, unable to choose. Big 4? Startup? Family business? Your brain is melting. This is analysis paralysis. Meanwhile, your classmate made her decision in 2 hours and feels confident. What is her secret? A SYSTEM. By the end of this video, you will have a proven decision-making framework that eliminates second-guessing and regret. Let us fix your decisions."

[0:45-2:30] THE DECISION MATRIX (Systematic Evaluation)

"Stop comparing options in your head. Use a Decision Matrix - a table that forces systematic evaluation.

STEP 1: List Your Options (Rows)
- Option 1: Big 4 firm
- Option 2: Startup
- Option 3: Family business

STEP 2: List Your Criteria (Columns)
What matters to YOU? (Not your parents, not friends - YOU.)
- Salary
- Learning opportunities
- Work-life balance
- Career growth
- Stability
- Prestige

STEP 3: Weight Your Criteria (1-10)
Not all criteria are equal. Rank importance:
- Learning: 10/10 (most important to you)
- Work-life balance: 9/10
- Growth: 8/10
- Salary: 7/10
- Stability: 6/10
- Prestige: 4/10 (least important)

STEP 4: Rate Each Option (1-10 per criterion)
Big 4: Salary (8/10), Learning (6/10), Work-life (3/10), Growth (7/10), Stability (9/10), Prestige (10/10)
Startup: Salary (5/10), Learning (10/10), Work-life (7/10), Growth (10/10), Stability (4/10), Prestige (6/10)
Family: Salary (6/10), Learning (5/10), Work-life (9/10), Growth (5/10), Stability (10/10), Prestige (5/10)

STEP 5: Calculate Weighted Scores
Big 4: (8×7) + (6×10) + (3×9) + (7×8) + (9×6) + (10×4) = 56+60+27+56+54+40 = 293
Startup: (5×7) + (10×10) + (7×9) + (10×8) + (4×6) + (6×4) = 35+100+63+80+24+24 = 326
Family: (6×7) + (5×10) + (9×9) + (5×8) + (10×6) + (5×4) = 42+50+81+40+60+20 = 293

RESULT: Startup wins (326) based on YOUR priorities (learning, growth, work-life balance).

This matrix removes emotion. You have a data-driven decision."

[2:30-4:00] THE 10-10-10 RULE (Think Long-Term)

"Most bad decisions come from short-term thinking. The 10-10-10 Rule forces long-term perspective.

For EACH option, ask:

How will I feel in 10 MINUTES?
Big 4: Excited (prestige, high salary, parents proud)
Startup: Uncertain (lower salary, risky, friends excited)
Family: Comfortable (safe, familiar, less pressure)

How will I feel in 10 MONTHS?
Big 4: Burned out? (70-hour weeks, repetitive work, no time for life)
Startup: Energized? (Learning fast, building skills, equity growing)
Family: Bored? (Comfortable but not challenged, skills stagnating)

How will I feel in 10 YEARS?
Big 4: Great resume, but health issues from burnout? Regret not taking risks?
Startup: Equity worth ₹50L? Entrepreneurial skills? Network in startup ecosystem?
Family: Stable income, but limited career options outside family business? Skills gap?

INSIGHT: Big 4 looks great in 10 MINUTES (prestige). Startup looks better in 10 MONTHS and 10 YEARS (learning, growth, equity).

Your immediate excitement ≠ long-term satisfaction. Think beyond the moment."

[4:00-5:30] PROS-CONS WITH WEIGHTING (Not All Pros Are Equal)

"Traditional pros-cons: List everything, count which side is longer. WRONG. Not all pros/cons are equal.

EXAMPLE: Big 4 Firm
PROS:
- High salary (₹6 LPA) - Weight: 7/10
- Prestigious brand name - Weight: 4/10
- Structured training program - Weight: 6/10
- Good for resume - Weight: 5/10
Total Weighted Pros: 22/40

CONS:
- 70-hour work weeks - Weight: 9/10 (CRITICAL - you value work-life balance)
- Repetitive work after 1 year - Weight: 8/10 (you value learning)
- High burnout rate (60% leave in 2 years) - Weight: 8/10
Total Weighted Cons: 25/30

VERDICT: Cons outweigh pros (25 vs 22) when you WEIGHT them based on YOUR priorities.

Traditional counting: 4 pros vs 3 cons = Big 4 wins.
Weighted analysis: 22 weighted pros vs 25 weighted cons = Big 4 loses.

The difference? Weighting reveals what ACTUALLY matters to you."

[5:30-7:00] TEST BEFORE COMMITTING (Reduce Regret by 80%)

"For BIG decisions, run experiments BEFORE fully committing.

EXPERIMENT 1: Talk to Current Employees
Call 3 people at each company (find them on LinkedIn). Ask:
- 'What is the reality vs the perception?'
- 'What do you wish you knew before joining?'
- 'Would you choose this company again?'
- 'What is the actual work-life balance?'

Insights: Big 4 employees say '70-hour weeks are real, burnout is common.' Startup employees say 'Equity is great IF the company succeeds (50% chance).' Family business employees say 'Stable but limited growth.'

EXPERIMENT 2: Negotiate
Do not accept offers as-is. Test: 'Can Big 4 offer better work-life balance or remote work?' 'Can startup increase salary to ₹5L?' 'Can family business offer structured learning plan?' You might get concessions that change your decision.

EXPERIMENT 3: Trial Period
Ask: 'Can I do a 1-week trial/shadow before deciding?' Some companies allow this. 1 week of reality > 100 hours of speculation.

Testing = data. Data = confidence. Confidence = no regret."

[7:00-7:45] CLARIFY YOUR PRIORITIES (Your Decision, Not Theirs)

"Your parents want Big 4. Friends want startup. But what do YOU want?

EXERCISE: Rank these 1-5 (1 = most important)
___ Learning opportunities
___ Work-life balance  
___ Salary
___ Career growth potential
___ Job stability
___ Company prestige

YOUR ranking determines YOUR decision.

If Learning = #1, Startup wins (10/10 learning).
If Work-life balance = #1, Family business wins (9/10 balance).
If Salary = #1, Big 4 wins (₹6 LPA).

Stop trying to optimize for everyone else is priorities. This is YOUR career, YOUR life, YOUR decision.

Make peace with: You cannot please everyone. Choose based on YOUR values, then own it."

[7:45-8:00] YOUR CHALLENGE (Make One Decision Today)

"Here is your action step: Pick ONE decision you are facing (job offer, MBA vs job, specialization choice, internship). Use the framework:

1. Create a Decision Matrix (1 hour)
2. Apply 10-10-10 Rule (30 mins)
3. Do weighted Pros-Cons (30 mins)
4. Talk to 2-3 people who made similar decisions (1 hour)
5. Set a deadline and DECIDE (30 mins)

Total: 3.5 hours. You will have a confident, data-driven decision. No more analysis paralysis. No more regret. Decision-making is a SKILL, not luck. You build it through systematic frameworks. Now go make that decision."

[End Screen: "Next Video: Risk Assessment - Evaluate and Manage Risks"]`,
      content: [
        'The Decision Matrix: Rate options against weighted criteria for systematic evaluation',
        'The 10-10-10 Rule: How will you feel in 10 minutes, 10 months, 10 years?',
        'Pros-Cons with Weighting: Not all pros/cons are equal - weight by importance',
        'Test Before Committing: Talk to employees, negotiate, request trial periods',
        'Clarify YOUR Priorities: Rank what matters to YOU, not others',
        'Set Decision Deadlines: Analysis paralysis thrives on unlimited time',
        'B.Com Applications: Job offers, MBA decisions, specialization choices, career paths'
      ]
    },
    quiz: {
      title: 'Decision Making Quiz',
      questions: [
        {
          id: 16,
          question: 'Have 3 job offers. List 10 pros and cons for each, but after 5 hours still cannot decide. What is happening?',
          options: [
            'Need more information to make right choice',
            'Analysis paralysis - overthinking preventing decision. Need Decision Matrix with WEIGHTED criteria to cut through noise.',
            'Should just follow gut feeling',
            'Should ask more people for opinions'
          ],
          correct: 1,
          explanation: 'Analysis paralysis = overthinking prevents decision. More info won\'t help - drowning in data already. Solution: Decision Matrix with WEIGHTED criteria. Rate each job on Learning (weight 10/10), Salary (7/10), Work-life (9/10). Calculate weighted scores. Highest wins. Cuts through paralysis by forcing systematic evaluation based on YOUR priorities, not endless deliberation. Framework > overthinking.'
        },
        {
          id: 17,
          question: 'Deciding between Big 4 (₹6 LPA, prestigious) and Startup (₹4.5 LPA, high learning). Using 10-10-10 Rule, which insight MOST valuable?',
          options: [
            '10 minutes: Big 4 feels exciting (prestige, high salary)',
            '10 years: Startup might offer ₹50L equity + entrepreneurial skills vs Big 4 burnout and limited skills diversity',
            '10 months: Both will be challenging',
            '10 people: Ask 10 friends what they think'
          ],
          correct: 1,
          explanation: '10 years perspective = reveals LONG-TERM consequences ignored in moment excitement. Big 4 feels great in 10 minutes (prestige!), but in 10 years? Potential burnout, health issues, regret. Startup feels uncertain in 10 minutes (lower salary), but in 10 years? Equity payout, entrepreneurial skills, diverse network. 10-10-10 Rule prevents short-term thinking. Always consider: How will this affect me in 10 YEARS? Long-term thinking = better decisions.'
        },
        {
          id: 18,
          question: 'Create pros-cons list for job offer. Pros: 5 items. Cons: 3 items. Pros win, right? What is wrong with this approach?',
          options: [
            'Nothing - more pros means it is good decision',
            'Did not WEIGHT pros and cons. One critical con (70-hour weeks = weight 9/10) might outweigh 5 minor pros (prestige = weight 4/10).',
            'Should have listed more pros to be sure',
            'Cons always matter more than pros'
          ],
          correct: 1,
          explanation: 'Counting pros vs cons = flawed because not all items equal. Example: Big 4 has 5 pros vs 3 cons. Traditional: 5 vs 3 = Big 4 wins. But WEIGHTED: If "70-hour weeks" critical (weight 9/10) and "prestige" minor (weight 4/10), that ONE con outweighs multiple pros. Always weight based on YOUR priorities. Job with 10 minor pros + 1 critical con (destroys work-life balance) = bad choice. Quality > quantity.'
        },
        {
          id: 19,
          question: 'Deciding between MBA (₹20L cost, 2 years) and Job (₹5 LPA, immediate income). BIG decision. What should do BEFORE deciding?',
          options: [
            'Decide immediately based on gut feeling - big decisions need quick action',
            'Test with small experiments: Talk to 5 MBA grads and 5 working professionals, compare career trajectories, ROI, satisfaction. Gather DATA before committing.',
            'Avoid decision - maybe better option will appear',
            'Follow what most B.Com students do (if 70% do MBA, you should too)'
          ],
          correct: 1,
          explanation: 'Test BIG decisions with small experiments before committing. MBA = ₹20L + 2 years - not reversible. Gather data: Talk to MBA grads (ROI? Worth it? Regrets?). Talk to working professionals (Career growth without MBA? Salary progression?). Compare: MBA grads at Year 5 vs non-MBA at Year 5. DATA informs decision. Option 1 = risky for ₹20L. Option 3 = passive. Option 4 = ignores YOUR goals. Testing reduces regret by 80%.'
        },
        {
          id: 20,
          question: 'Parents want you to join Big 4 (prestige). Friends want you to join startup (cool). You want family business (comfort). How should decide?',
          options: [
            'Choose Big 4 to make parents happy - family approval matters most',
            'Clarify YOUR priorities first (rank: learning, salary, work-life, growth, stability), then use Decision Matrix based on YOUR values, not others',
            'Choose startup to fit in with friends',
            'Flip a coin - all options are equally good'
          ],
          correct: 1,
          explanation: 'Clarify YOUR priorities FIRST, then decide based on YOUR values. If learning = #1 priority, startup wins (10/10 learning). If work-life balance = #1, family business wins (9/10 balance). If prestige = #1, Big 4 wins. This is YOUR career, YOUR life, YOUR decision. Choosing to please parents or friends = leads to regret. In B.Com career decisions, external pressure intense. Use frameworks based on YOUR priorities, then own outcome. Cannot please everyone - please yourself first.'
        }
      ]
    },
    challenge: {
      title: 'Decision Making Challenge',
      description: 'Master systematic decision-making',
      contexts: {
        academic: {
          title: 'Academic Decision Mastery',
          description: 'Choose B.Com specialization: Finance/Marketing/Accounting. 5+ years impact. 3 days to decide. Torn, changing mind!',
          instructions: [
            '• Day 1: Clarify YOUR priorities—rank salary/creativity/stability/balance honestly',
            '• Day 1: Decision Matrix—weight criteria, rate each, calculate scores',
            '• Day 1: Apply 10-10-10—10 mins/10 months/10 years each option',
            '• Day 2: Talk to 6 seniors (2 each)—reality vs perception',
            '• Day 2-3: Test assumptions, make decision, own it—no second-guessing!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Others priorities—decide YOUR values',
            '• No weighting—weight by importance',
            '• Short-term thinking—10-10-10 Rule',
            '• No test assumptions—research reality',
            '• Analysis paralysis—set deadline, commit'
          ],
          successCriteria: [
            '✅ YOUR priorities clarified, ranked',
            '✅ Decision Matrix: weighted, scored',
            '✅ 10-10-10 Rule applied',
            '✅ 6 seniors interviewed',
            '✅ Day 3: Confident decision made!'
          ]
        },
        professional: {
          title: 'Professional Decision Excellence',
          description: 'Analyst: Client must decide—Automate (₹50L, 30% savings, 20 jobs lost), Expand (₹40L, 50% growth, high risk), or Status quo. Recommend to CEO in 2 days!',
          instructions: [
            '• Day 1: Decision Matrix—weight CEO priorities, rate each, calculate',
            '• Day 1: Apply 10-10-10 each option—10 mins/months/years consequences',
            '• Day 1: Weighted pros-cons—calculate totals, highest wins',
            '• Day 1: Gather data—ROI studies, market analysis, interviews',
            '• Day 2: Test assumptions, build presentation, present—CEO approves!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Gut feeling—Decision Matrix + data',
            '• Ignore CEO priorities—weight their priorities',
            '• Ignore 10-year—apply 10-10-10 Rule',
            '• Weak data—vendor quotes, benchmarks, studies',
            '• No risk assessment—list risks, mitigation'
          ],
          successCriteria: [
            '✅ Decision Matrix: CEO priorities weighted',
            '✅ 10-10-10 applied, long-term revealed',
            '✅ Data gathered: ROI, research, studies',
            '✅ 3 assumptions tested, verified',
            '✅ CEO approves, Manager praises!'
          ]
        },
        personal: {
          title: 'Personal Decision Wisdom',
          description: 'MBA (₹20L, 2yr) vs Job (₹5 LPA, immediate)? Parents say MBA. Gut says work. Torn 2 months. Decide in 1 week!',
          instructions: [
            '• Day 1: Clarify 5-year goals—which path gets you closer?',
            '• Day 1: Decision Matrix—weight YOUR priorities, calculate scores',
            '• Day 2: Apply 10-10-10—10 mins/months/years each path',
            '• Day 2-3: Talk to 10 people (5 MBA, 5 working)—reality?',
            '• Day 4-5: Test assumptions, decide, Plan B—confidence, peace!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Follow others—YOUR 5-year vision',
            '• Ignore debt—factor ₹20L heavily',
            '• Short-term thinking—10-10-10 Rule',
            '• No test—talk 10 people, research',
            '• Analysis paralysis—deadline Day 5, commit'
          ],
          successCriteria: [
            '✅ 5-year goals clarified',
            '✅ Decision Matrix: YOUR priorities weighted',
            '✅ 10-10-10 applied (10 years)',
            '✅ 10 people interviewed',
            '✅ Week 1: Confident decision, peace!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🎯 Systematic Decision Approach: You use Decision Matrix with weighted criteria instead of gut feeling. This removes emotion and external pressure from decisions. Example: When choosing between 3 job offers, you rated each on 6 criteria (salary, learning, work-life, growth, stability, prestige), weighted by YOUR priorities, and calculated scores. Result: Data-driven decision you can defend.',
        '⚖️ Weighted Evaluation Skills: You understand that not all pros/cons are equal. You weight each factor based on importance. Example: "70-hour work weeks" (weight 9/10 for you) outweighs "Prestigious brand" (weight 4/10). This reveals what ACTUALLY matters to you, not just what sounds good.',
        '🔮 Long-Term Thinking: You apply the 10-10-10 Rule - considering how you will feel in 10 minutes, 10 months, and 10 years. This prevents short-term excitement from overriding long-term fit. Example: Big 4 looks great in 10 minutes (prestige!), but in 10 years? Potential burnout. Startup looks uncertain in 10 minutes, but in 10 years? Equity + skills.',
        '🧪 Testing Before Committing: You gather data before BIG decisions. You talk to people who made similar choices, research ROI, test assumptions. Example: Before choosing MBA, you talked to 5 MBA grads and 5 working professionals to understand reality vs perception. This reduces regret by 80%.',
        '💪 Clarity on YOUR Priorities: You know what matters to YOU (not parents, not friends). You rank your priorities (learning, work-life balance, salary, growth, stability) and make decisions based on YOUR values. This leads to confident choices you can own.'
      ],
      improvements: [
        '📊 Use More Decision Frameworks: You are comfortable with Decision Matrix and 10-10-10, but there are more tools. Learn: (1) Eisenhower Matrix (urgent vs important), (2) Pareto Analysis (80/20 rule), (3) Cost-Benefit Analysis (quantify pros/cons in ₹), (4) SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats). More frameworks = better decisions for different contexts.',
        '📈 Gather More Data Points: You talk to 2-3 people before deciding. Good start, but increase sample size. For career decisions, talk to 10+ people (different roles, companies, career stages). For business decisions, analyze 5+ case studies. More data = more confident decisions. Quality AND quantity matter.',
        '⏰ Set Tighter Deadlines: You take 3-5 days for decisions. Sometimes this is appropriate, but practice making faster decisions for smaller choices. Example: Restaurant choice? 5 minutes. Elective course? 1 hour. Job offer? 2 days. Calibrate decision time to decision importance. This builds decision-making speed without sacrificing quality.',
        '🔄 Review Past Decisions: After making a decision, review it 6 months later. Ask: "Was this the right choice? What would I do differently?" Document lessons learned. Example: "I chose Big 4 based on salary (weight 10/10), but now I realize work-life balance should have been weighted higher (9/10). Next time, I will weight balance more heavily." This builds decision-making wisdom over time.',
        '🎲 Embrace Uncertainty: You still seek the "perfect" decision. Reality: No decision is perfect. All decisions involve tradeoffs and uncertainty. Practice: Make a decision with 70% confidence (not 100%), then move forward. Waiting for 100% certainty = analysis paralysis. Good decision + fast execution > perfect decision + slow execution.'
      ],
      nextSteps: [
        '📚 Study Advanced Decision Frameworks: Read "Thinking, Fast and Slow" by Daniel Kahneman (cognitive biases in decision-making), "Decisive" by Chip Heath (WRAP framework), "The Paradox of Choice" by Barry Schwartz (how too many options hurt decisions). Apply frameworks from these books to your next 5 decisions. Track: Which framework worked best for which type of decision?',
        '🧠 Build a Personal Decision System: Create a decision-making playbook for yourself. Document: (1) For small decisions (< ₹1000 impact): Use gut feeling, decide in 5 minutes. (2) For medium decisions (₹1000-₹50,000 impact): Use Decision Matrix, decide in 1-2 hours. (3) For big decisions (> ₹50,000 or life-changing): Use Decision Matrix + 10-10-10 + data gathering, decide in 2-5 days. Having a system reduces decision fatigue.',
        '🎯 Practice Daily Decision-Making: Make 3 deliberate decisions daily using frameworks. Example: Monday - Choose lunch using Decision Matrix (taste, health, cost, time). Tuesday - Choose workout using 10-10-10 (how will I feel in 10 mins, 10 hours, 10 days?). Wednesday - Choose study topic using Eisenhower Matrix (urgent vs important). Daily practice builds decision-making muscle.',
        '👥 Mentor Others on Decision-Making: Teach your frameworks to 3 friends facing decisions. Walk them through: (1) Clarify priorities, (2) Build Decision Matrix, (3) Apply 10-10-10, (4) Gather data, (5) Decide. Teaching = deeper learning. You will discover gaps in your own understanding and refine your approach.',
        '📊 Track Decision Outcomes: Create a "Decision Journal." For each major decision, document: (1) The decision, (2) Framework used, (3) Data gathered, (4) Your prediction of outcome, (5) Actual outcome 6 months later. Review quarterly. Identify patterns: Which frameworks work best for you? Where do you consistently make mistakes? This builds self-awareness and decision-making wisdom over time.'
      ]
    },
    badge: { name: 'Decision Maker', emoji: '⚖️', description: 'Expert in systematic decision-making' },
    shareMessage: 'Just mastered decision making! ⚖️ #DecisionMaking #CriticalThinking'
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    emoji: '🎲',
    context: 'professional' as const,
    discover: {
      scenario: "Fest planning. Day 1: Rain cancels outdoor (no backup), performer cancels, food runs out, sound fails. ₹2L spent, ₹50K revenue. Disaster.",
      problemExplanation: [
        "Can't identify risks: Focus 'happy path,' ignore problems. 'Rain? Unlikely.' Optimism bias. Blindsided",
        "No quantification: 'Rain is risk.' How likely? How bad? Can't prioritize without numbers",
        "No mitigation: 'Rain is risk. Noted.' Then what? No backup venues? Just worried, didn't plan",
        "Reactive: Deal AFTER occur. Performer cancels → scramble (2x cost). Proactive = cheap + calm"
      ],
      solutionApproach: [
        "Risk Formula: Probability × Impact. Rain: 30% × ₹1.5L = ₹45K. Prioritize numerically",
        "Risk Matrix: High Prob + High Impact = RED (address now). Low + Low = GREEN (accept)",
        "Categories: Financial, Operational, External, Reputational. Each 3-5 risks = 20+ total",
        "Mitigation: AVOID (winter not monsoon), REDUCE (2 backup performers), TRANSFER (insurance), ACCEPT (low-priority)"
      ]
    },
    video: {
      title: 'Stop Being Blindsided: Risk Assessment for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR PROJECTS FAIL

"Your college fest was a disaster. Rain canceled outdoor events. Performer canceled. Food ran out. ₹2 lakhs spent, ₹50K revenue. Post-mortem: 'We did not see this coming.' WRONG. You did not DO risk assessment. Every problem was predictable and preventable. Meanwhile, rival college fest (same budget) ran smoothly because they assessed risks and had mitigation plans. By the end of this video, you will learn systematic risk assessment that prevents 80% of project failures. Let us fix this."

[0:45-2:15] THE RISK FORMULA (Probability × Impact)

"Stop saying 'This is risky' without quantifying. Use the formula: Risk = Probability × Impact.

STEP 1: Estimate Probability (0-100%)
How likely is this problem to happen?
- Rain during monsoon season: 30% (weather data)
- Performer cancellation: 20% (industry average for non-contracted performers)
- Food shortage: 40% (you underestimated demand by 20%)
- Sound system failure: 10% (equipment is new, tested)

STEP 2: Estimate Impact (₹ or scale 1-10)
How bad is it IF it happens?
- Rain: ₹1.5L loss (outdoor events canceled, 500 students disappointed, reputation damage)
- Performer cancellation: ₹2L loss (headline act, refunds, reputation)
- Food shortage: ₹50K loss (emergency catering, student complaints)
- Sound failure: ₹10K loss (backup rental, 2-hour delay)

STEP 3: Calculate Risk Score
Multiply Probability × Impact:
- Rain: 0.30 × ₹1.5L = ₹45,000 expected loss
- Performer: 0.20 × ₹2L = ₹40,000 expected loss
- Food: 0.40 × ₹50K = ₹20,000 expected loss
- Sound: 0.10 × ₹10K = ₹1,000 expected loss

NOW you can prioritize: Address rain (₹45K risk) and performer (₹40K risk) FIRST. Sound (₹1K risk) is low priority.

This quantification transforms vague worry into actionable priorities."

[2:15-3:45] THE RISK MATRIX (Visual Prioritization)

"Plot your risks on a 2×2 matrix for instant visual prioritization.

X-AXIS: Probability (Low → High)
Y-AXIS: Impact (Low → High)

FOUR QUADRANTS:

🔴 RED ZONE (High Probability + High Impact)
Example: Rain (30% probability, ₹1.5L impact)
Action: ADDRESS IMMEDIATELY. Book indoor backup venues NOW. Create refund policy. This is your #1 priority.

🟠 ORANGE ZONE (Low Probability + High Impact)
Example: Performer cancellation (20% probability, ₹2L impact)
Action: PREPARE CONTINGENCY. Contract with cancellation clause. Book 2 backup performers. Have a plan ready.

🟡 YELLOW ZONE (High Probability + Low Impact)
Example: Minor sound glitches (40% probability, ₹5K impact)
Action: MONITOR. Have basic troubleshooting plan. Do not over-invest in prevention.

🟢 GREEN ZONE (Low Probability + Low Impact)
Example: Power outage (5% probability, ₹2K impact - venue has backup generator)
Action: ACCEPT. Not worth spending time/money on mitigation. Absorb the loss if it happens.

Visual matrix = instant prioritization. Focus 80% of your effort on RED and ORANGE zones."

[3:45-5:15] RISK CATEGORIES (Systematic Identification)

"Do not brainstorm risks randomly ('What could go wrong?'). You will miss 50% of risks. Use CATEGORIES to ensure comprehensive identification.

CATEGORY 1: Financial Risks
- Sponsorship falls through (₹2L shortfall)
- Budget overrun (vendors charge more than quoted)
- Low ticket sales (only 1000 students attend vs 2000 expected)
- Payment delays (vendor demands upfront payment, you do not have cash)

CATEGORY 2: Operational Risks
- Vendor no-show (food/sound/decoration vendor cancels)
- Equipment failure (sound, lights, stage setup)
- Staff shortage (volunteers drop out last minute)
- Logistics issues (transportation delays, venue access problems)

CATEGORY 3: External Risks
- Weather (rain, extreme heat)
- Competitor event (rival college schedules fest same weekend)
- Government restrictions (COVID lockdown, permit issues)
- Market conditions (recession → lower sponsorship)

CATEGORY 4: Reputational Risks
- Poor quality event (students complain on social media)
- Safety incident (injury, food poisoning)
- Negative publicity (controversy, scandal)
- Performer behavior (says something offensive)

Go through EACH category. List 3-5 risks per category. Result: 20+ risks identified (vs random brainstorming = 5 risks). Comprehensive identification = better management."

[5:15-6:45] MITIGATION STRATEGIES (4 Options)

"For each risk, choose ONE of four mitigation strategies:

STRATEGY 1: AVOID (Eliminate the risk)
Example: Rain risk → Schedule fest in winter (not monsoon) → Rain probability drops from 30% to 5%.
When to use: High-impact risks that can be eliminated by changing plans.

STRATEGY 2: REDUCE (Lower probability or impact)
Example: Performer cancellation → Book 2 backup performers + contract with cancellation clause → Probability drops from 20% to 5%, Impact drops from ₹2L to ₹50K.
When to use: Risks you cannot eliminate but can minimize.

STRATEGY 3: TRANSFER (Shift risk to others)
Example: Financial loss from cancellations → Buy event insurance (₹20K premium covers ₹5L loss) → You transfer financial risk to insurer.
When to use: High-impact risks where others can absorb the loss better than you.

STRATEGY 4: ACCEPT (Do nothing, absorb the loss)
Example: Sound glitch (₹1K expected loss) → Prevention costs ₹50K (backup sound system) → Accept the risk, fix if it happens.
When to use: Low-priority risks where mitigation costs more than the risk itself.

NOT ALL RISKS NEED MITIGATION. Focus on RED and ORANGE zones. Accept GREEN zone risks."

[6:45-7:45] THE RISK REGISTER (Your Dashboard)

"Create a Risk Register - a spreadsheet that is your risk management dashboard.

COLUMNS:
1. Risk Description: 'Rain cancels outdoor events'
2. Category: External
3. Probability: 30%
4. Impact: ₹1.5L
5. Risk Score: ₹45K
6. Priority: RED
7. Mitigation Strategy: Book indoor backup venues + refund policy
8. Owner: Priya (who is responsible for mitigation?)
9. Status: Mitigated (backup venue booked, policy created)

EXAMPLE ROWS:
| Rain cancels outdoor events | External | 30% | ₹1.5L | ₹45K | RED | Indoor backup + refund policy | Priya | Mitigated |
| Performer cancels | Operational | 20% | ₹2L | ₹40K | ORANGE | Contract clause + 2 backups | Rahul | In Progress |
| Food shortage | Operational | 40% | ₹50K | ₹20K | YELLOW | Order 20% extra + emergency caterer on standby | Anjali | Mitigated |
| Sound failure | Operational | 10% | ₹10K | ₹1K | GREEN | Accept risk | N/A | Accepted |

Review this register WEEKLY. Update probabilities, track mitigation progress, add new risks. This dashboard keeps you proactive, not reactive."

[7:45-8:00] YOUR CHALLENGE (Assess One Project)

"Here is your action step: Pick ONE upcoming project (college fest, group assignment, internship, side business). Create a Risk Register:

1. Identify 15-20 risks using categories (Financial, Operational, External, Reputational)
2. Calculate Risk Score for each (Probability × Impact)
3. Plot on Risk Matrix (Red/Orange/Yellow/Green)
4. Choose mitigation strategy for RED and ORANGE risks (Avoid/Reduce/Transfer/Accept)
5. Assign owners and track status
6. Review weekly until project completes

Result: 80% fewer surprises, 50% less stress, 90% higher success rate. Risk assessment is not paranoia - it is preparation. Now go assess those risks."

[End Screen: "Next Video: Root Cause Analysis - Stop Treating Symptoms"]`,
      content: [
        'Risk Formula: Risk = Probability × Impact (quantify every risk numerically)',
        'Risk Matrix: Plot risks on 2×2 grid (Red/Orange/Yellow/Green zones)',
        'Risk Categories: Financial, Operational, External, Reputational (systematic identification)',
        'Mitigation Strategies: Avoid, Reduce, Transfer, Accept (choose based on priority)',
        'Risk Register: Spreadsheet dashboard to track all risks and mitigation status',
        'Continuous Monitoring: Review risks weekly, update probabilities, adjust plans',
        'B.Com Applications: College fests, group projects, internships, business ventures'
      ]
    },
    quiz: {
      title: 'Risk Assessment Quiz',
      questions: [
        {
          id: 21,
          question: 'Planning college fest. Identify "Rain" as risk. How should quantify it to prioritize against other risks?',
          options: [
            'Just note "Rain is a risk" and move on',
            'Calculate Risk Score: Probability (30% in monsoon) × Impact (₹1.5L loss if outdoor events cancel) = ₹45,000 expected loss',
            'Assume rain will not happen and ignore it',
            'Ask others if they think rain is big risk'
          ],
          correct: 1,
          explanation: 'Risk Formula = Probability × Impact. Rain probability = 30%. Impact = ₹1.5L (outdoor events canceled). Risk Score = 0.30 × ₹150,000 = ₹45,000 expected loss. This number lets you compare against other risks (performer cancellation = ₹40K, food shortage = ₹20K, sound failure = ₹1K) and prioritize systematically. Quantify EVERY risk. Transforms vague worry into actionable priorities.'
        },
        {
          id: 22,
          question: 'Plot risks on Risk Matrix. "Performer cancellation" is Low Probability (20%) but High Impact (₹2L loss). Which zone, and what should do?',
          options: [
            'Green Zone - Accept risk, do nothing',
            'Orange Zone - Prepare contingency plan (contract with cancellation clause, book 2 backup performers)',
            'Red Zone - Address immediately with full mitigation',
            'Yellow Zone - Just monitor, no action needed'
          ],
          correct: 1,
          explanation: 'Orange Zone (Low Probability + High Impact) = Prepare contingency. Can\'t eliminate performer cancellation risk, but CAN prepare. How? (1) Contract with cancellation clause, (2) Book 2 backup performers, (3) Confirm attendance 48 hours before. Reduces probability (20% → 5%) and impact (₹2L → ₹50K). Orange Zone risks need contingency plans, not full mitigation or acceptance.'
        },
        {
          id: 23,
          question: 'Assessing risks for college fest. You brainstorm randomly, identify 5 risks. Friend uses Risk Categories, identifies 22 risks. Why?',
          options: [
            'Friend is overthinking and being paranoid',
            'Risk Categories (Financial, Operational, External, Reputational) ensure systematic identification. Random brainstorming misses 50% of risks.',
            'Your 5 risks are enough - more risks = more worry',
            'Friend copied risks from internet'
          ],
          correct: 1,
          explanation: 'Systematic categorization identifies more risks than random brainstorming. "What could go wrong?" = brain jumps to obvious risks (rain, performer cancellation), misses less obvious (payment delays, vendor no-show, government restrictions, negative social media). Risk Categories force thinking through EACH area: Financial, Operational, External, Reputational. Result: 20+ risks vs 5 random. Comprehensive identification = better management. Missing risks = being blindsided.'
        },
        {
          id: 24,
          question: 'Sound system failure has 10% probability and ₹10K impact (Risk Score = ₹1K). Prevention (backup sound system) costs ₹50K. What should do?',
          options: [
            'Spend ₹50K on backup system - better safe than sorry',
            'ACCEPT risk. Prevention (₹50K) costs 50x more than risk (₹1K). If sound fails, rent backup equipment for ₹10K.',
            'Transfer risk by buying insurance',
            'Avoid risk by canceling all events that need sound'
          ],
          correct: 1,
          explanation: 'ACCEPT low-priority risks where mitigation costs exceed risk itself. Risk Score = ₹1,000. Prevention = ₹50,000 (50x more expensive!). Better: Accept risk. If sound fails (10% chance), rent backup for ₹10K (1-time cost vs ₹50K upfront). Save ₹40K. Use ACCEPT for Green Zone risks (Low Probability + Low Impact) where mitigation too expensive. Don\'t over-invest in low-impact risks. Focus on Red/Orange Zone.'
        },
        {
          id: 25,
          question: 'Assess risks 2 months before college fest. 1 week before fest, weather forecast changes from 30% rain to 60% rain. What should do?',
          options: [
            'Stick to original risk assessment - already planned for 30% rain',
            'Update Risk Register: Rain now Red Zone (60% probability, ₹1.5L impact = ₹90K risk). Immediately execute backup plan (book indoor venues).',
            'Ignore new forecast - weather predictions often wrong',
            'Cancel fest to avoid all risk'
          ],
          correct: 1,
          explanation: 'Continuous risk monitoring = risk assessment NOT one-time, it\'s ongoing. Original: Rain = 30%, ₹1.5L impact = ₹45K (Orange Zone). Updated: Rain = 60%, ₹1.5L impact = ₹90K (Red Zone). Action: Execute backup plan NOW (book indoor venues, create refund policy, communicate). Option 1 = ignores new data. Option 3 = optimism bias. Option 4 = overreaction. Schedule weekly risk reviews. Update Risk Register, adjust plans. Continuous monitoring prevents surprises.'
        }
      ]
    },
    challenge: {
      title: 'Risk Assessment Challenge',
      description: 'Master risk evaluation and management',
      contexts: {
        academic: {
          title: 'Academic Project Risk Mastery',
          description: 'Group project: 40% grade, 4 weeks, 5 members. Last year 30% failed. Identify + mitigate ALL risks!',
          instructions: [
            '• Week 1 Day 1: Identify 4 categories—Team, Content, Execution, External—15 risks',
            '• Week 1 Day 2: Quantify each—Probability × Impact = Risk Score',
            '• Week 1 Day 3: Plot Risk Matrix—prioritize Red/Orange zones',
            '• Week 1 Day 4-5: Mitigate Red/Orange—tracking, validation, Turnitin, cross-train',
            '• Week 1-4: Risk Register, weekly reviews, contingencies—A grade!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Random brainstorm—use 4 categories, 15-20 risks',
            '• No quantification—calculate Risk Score EVERY risk',
            '• Treat all equal—prioritize Red/Orange zones',
            '• No mitigation—document strategy, assign owner',
            '• One-time only—weekly reviews, update register'
          ],
          successCriteria: [
            '✅ 15-20 risks: 4 categories',
            '✅ Every risk quantified: Probability × Impact',
            '✅ Risk Matrix: Red/Orange prioritized',
            '✅ Red/Orange mitigated, strategies documented',
            '✅ A grade, zero surprises!'
          ]
        },
        professional: {
          title: 'Professional Risk Excellence',
          description: 'Analyst: Client launches electronics (₹50L revenue/mo). Assess risks, quantify, present mitigation to CEO. Success = approval!',
          instructions: [
            '• Week 1: Identify 4 categories—Financial, Operational, Market, Reputational—16 risks',
            '• Week 1: Quantify each—Probability × Impact = ₹ Risk Score',
            '• Week 1: Plot Risk Matrix—Red/Orange prioritized',
            '• Week 2: Mitigate Red/Orange—pilot test, quality, insurance, certifications',
            '• Week 2-3: Risk Register, present CEO, monitor—₹15L revenue, CEO praises!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Incomplete ID—use 4 categories, 15-20 risks',
            '• Vague quantification—quantify in ₹ EVERY risk',
            '• No cost-benefit—calculate ROI mitigation',
            '• Weak presentation—visual slides, CEO-friendly',
            '• No post-launch—weekly reviews 6 months'
          ],
          successCriteria: [
            '✅ 15-20 risks: 4 business categories',
            '✅ Every risk quantified in ₹',
            '✅ Risk Matrix created, prioritized',
            '✅ Red/Orange mitigated, ROI 145%',
            '✅ CEO approves, Manager praises!'
          ]
        },
        personal: {
          title: 'Personal Decision Risk Wisdom',
          description: 'Quit job (₹6 LPA, safe) for business (tutoring platform)? Excited but terrified. ₹5L savings = 10mo. Parents against. Assess risks!',
          instructions: [
            '• Week 1: Identify 4 categories—Financial, Career, Personal, Business—16 risks',
            '• Week 1: Quantify each—Probability × Impact = Risk Score',
            '• Week 1: Plot Risk Matrix—Red/Orange prioritized',
            '• Week 2: Mitigate Red/Orange—validate 3mo while employed, part-time, pre-sell',
            '• Week 3-Mo 12: Risk Register, validate→part-time→full-time—₹10L revenue!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Impulsive quit—validate FIRST 3mo employed',
            '• Ignore personal risks—assess ALL 4 categories',
            '• No mitigation—plan before leap',
            '• All-or-nothing—gradual approach, 64% risk reduced',
            '• No monitoring—monthly reviews, pivot if needed'
          ],
          successCriteria: [
            '✅ 15-20 risks: 4 categories',
            '✅ Every risk quantified',
            '✅ Risk Matrix prioritized',
            '✅ Red/Orange mitigated, 64% reduced',
            '✅ ₹10L revenue, minimal damage!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🎲 Systematic Risk Identification: You use Risk Categories (Financial, Operational, External, Reputational) to systematically identify 15-20 risks instead of random brainstorming (5 risks). This ensures comprehensive coverage - you do not miss critical risks. Example: For college fest, you identified 20 risks across 4 categories vs your peer who identified 5 obvious risks and was blindsided by 3 major problems.',
        '📊 Quantitative Risk Assessment: You quantify EVERY risk using the formula Risk = Probability × Impact. Example: Rain risk = 30% probability × ₹1.5L impact = ₹45K expected loss. This transforms vague worry ("Rain is risky") into actionable priorities (Rain = ₹45K risk vs Sound failure = ₹1K risk → prioritize rain). You can defend your priorities with numbers, not feelings.',
        '🎯 Visual Prioritization: You use Risk Matrix (2×2 grid: Probability vs Impact) to plot risks into Red/Orange/Yellow/Green zones. This visual tool makes prioritization instant. You focus 80% of effort on Red Zone (High Probability + High Impact) and Orange Zone (Low Probability + High Impact), not wasting time on Green Zone (Low Probability + Low Impact). Smart resource allocation.',
        '🛡️ Strategic Mitigation: You understand the 4 mitigation strategies (Avoid, Reduce, Transfer, Accept) and choose the right one for each risk. Example: Rain risk → AVOID (schedule fest in winter). Performer cancellation → REDUCE (contract + backups). Financial loss → TRANSFER (insurance). Sound glitch → ACCEPT (mitigation costs 50x more than risk). You do not over-invest in low-priority risks.',
        '📋 Risk Register Discipline: You document everything in a Risk Register (spreadsheet with Risk Description, Probability, Impact, Risk Score, Priority, Mitigation Strategy, Owner, Status). This dashboard keeps you organized and accountable. You review it weekly, update probabilities, track mitigation progress. Result: Proactive risk management, not reactive firefighting.'
      ],
      improvements: [
        '🔍 Identify More Edge-Case Risks: You identify 15-20 obvious risks, but you miss 5-10 edge-case risks (low probability but catastrophic impact). Example: For college fest, you identified rain, performer cancellation, food shortage. But did you identify: "Fire breaks out during event" (0.1% probability, but ₹1 crore loss + lives at risk)? "Terrorist threat forces evacuation" (0.01% probability, but event canceled + reputation destroyed)? These are Orange Zone risks (Low Probability + High Impact) that need contingency plans. Improve: For every project, ask "What is the worst-case scenario?" and assess even 1% probability risks if impact is catastrophic.',
        '📈 Quantify Reputational Impact: You quantify financial risks well (₹ loss), but you struggle to quantify reputational risks. Example: "Negative social media backlash" - you note it as a risk, but Impact = ? How do you quantify reputation damage? Improve: Use proxy metrics. Reputation damage = X% drop in future sales + Y% increase in customer acquisition cost + Z hours of crisis management. Example: Viral complaint about defective product → 20% drop in sales for 3 months (₹10L loss) + 50 hours of PR firefighting (₹2L cost) → Total Impact = ₹12L. Now you can prioritize reputational risks against financial risks.',
        '⏰ Shorten Risk Assessment Time: You spend 8-10 hours on comprehensive risk assessment (identify, quantify, matrix, mitigate, register). This is thorough but slow. For smaller projects, you need faster risk assessment. Improve: Create a "Quick Risk Assessment" template (30 minutes). Identify top 5 risks only (not 20). Use simplified scoring (High/Medium/Low instead of numerical). Mitigate only Red Zone risks. Reserve comprehensive assessment for high-stakes projects (college fest, product launch, career decisions). Calibrate effort to project importance.',
        '🔄 Improve Monitoring Frequency: You review Risk Register weekly (good for 4-week projects), but you do not adjust frequency based on risk velocity. Example: For college fest, risks evolve slowly (weekly review is fine). For product launch, risks evolve daily (daily review needed in final week). Improve: Dynamic monitoring frequency. Low-risk projects: Monthly reviews. Medium-risk projects: Weekly reviews. High-risk projects: Daily reviews in critical phases. This prevents "We reviewed on Monday, but critical risk materialized on Wednesday and we did not notice until next Monday" delays.',
        '🎯 Build Risk Intuition: You rely heavily on frameworks (Risk Matrix, Risk Register, formulas). This is great for systematic assessment, but you lack risk intuition (gut feeling for what could go wrong). Improve: After completing 10 projects with formal risk assessment, start developing intuition. Ask: "What patterns do I see? What risks recur across projects? What risks did I miss that I should have caught?" Example: After 5 college events, you notice "Vendor no-show" is a recurring risk (happened 3 times). Now your intuition flags vendor reliability as high-priority risk for EVERY event. Frameworks + intuition = mastery.'
      ],
      nextSteps: [
        '📚 Study Advanced Risk Management: Read "The Failure of Risk Management" by Douglas Hubbard (quantifying intangible risks), "Against the Gods" by Peter Bernstein (history of risk), "The Black Swan" by Nassim Taleb (rare catastrophic risks). Apply concepts: How do you assess "unknown unknowns" (risks you do not even know exist)? How do you prepare for 0.01% probability, ₹100 crore impact events (Black Swans)? Advanced risk management goes beyond Risk Matrix.',
        '🧠 Build a Personal Risk Library: Create a document: "Common Risks by Project Type." For each project type you encounter (college events, group projects, internships, product launches, career decisions), document: (1) Top 10 risks that occurred, (2) Probability and Impact, (3) What mitigation worked, (4) What you missed. Over time, this library becomes your risk assessment cheat sheet. When you start a new college event, you open "College Events Risk Library" and have 80% of risks pre-identified. Saves 5 hours of brainstorming.',
        '🎯 Practice Rapid Risk Assessment: Challenge yourself: Assess risks for a project in 15 minutes (not 8 hours). Rules: Identify top 5 risks only. Use High/Medium/Low scoring (not numerical). Mitigate Red Zone only. Practice on small projects (weekend trip, dinner party, study session). Goal: Build speed without sacrificing quality. When you can do rapid assessment in 15 minutes, you will use risk management for EVERY decision (not just big projects). Frequency > perfection.',
        '👥 Teach Risk Assessment to 3 People: The best way to master a skill is to teach it. Walk 3 friends through risk assessment for their projects. Teach: (1) Risk Categories for systematic identification, (2) Risk = Probability × Impact formula, (3) Risk Matrix for prioritization, (4) 4 mitigation strategies, (5) Risk Register for tracking. When you teach, you discover gaps in your own understanding. You also build a network of people who use risk management (you can collaborate on future projects).',
        '📊 Conduct Post-Project Risk Reviews: After EVERY project, schedule a 30-minute "Risk Review." Ask: (1) Which risks materialized? (Did we predict them? Did mitigation work?) (2) Which risks did NOT materialize? (Did we over-invest in mitigation?) (3) Which risks did we MISS? (What blindsided us?) (4) What would we do differently next time? Document lessons learned. Over 10 projects, you will identify patterns: "We always underestimate Team Risks (people dropping out, conflicts). We should weight these higher." This continuous learning builds risk assessment mastery over time.'
      ]
    },
    badge: { name: 'Risk Assessor', emoji: '🎲', description: 'Expert in risk evaluation' },
    shareMessage: 'Just mastered risk assessment! 🎲 #RiskManagement #CriticalThinking'
  },
  {
    id: 'root-cause-analysis',
    title: 'Root Cause Analysis',
    emoji: '🔍',
    context: 'professional' as const,
    discover: {
      scenario: "Failing Accounting 3 times (45%, 48%, 42%). Each time 'fix': Study 2hrs more, buy ₹2000 notes, consider dropping. Problem RECURS. Priya: failed once, did Root Cause Analysis, scored 78%.",
      problemExplanation: [
        "Treat symptoms: Failed 45% → 'Study 2hrs more.' Don't ask WHY. Without root, fix = band-aid. Recurs (48%, 42%)",
        "Recurring: Failing 3 times. Group chaos 5 times. Apps rejected 10 times. Recurring = not fixing root",
        "No investigation: Guess 'Didn't study enough.' Don't gather evidence. Fix wrong problem. Still fail",
        "Fix wrong: Buy ₹2000 notes. But if root = exam anxiety, notes won't help. Wasted ₹2000"
      ],
      solutionApproach: [
        "5 Whys: Ask 'Why?' 5 times. ROOT: 'Study memorization not application.' Fix: 50 varied problems, teach friend, explain WHY",
        "Fishbone: Categories: Study Method, Time Mgmt, Concept Gaps, Exam Technique, External. Find actual root",
        "Gather evidence: Analyze answer sheet. Compare toppers. Talk professor. 80% errors = application questions",
        "Implement root fix: Solve 10 varied problems/concept. Teach friend. Explain WHY. 5 practice exams. Result: 78%"
      ]
    },
    video: {
      title: 'Stop Recurring Failures: Root Cause Analysis for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY PROBLEMS KEEP RECURRING

"You failed Accounting 3 times: 45%, 48%, 42%. After each failure, you 'fixed' the problem: Study 2 more hours. Buy premium notes for ₹2000. Still failing. Why? You are treating SYMPTOMS, not ROOT CAUSES. Meanwhile, your classmate failed once (43%), did Root Cause Analysis, scored 78% next time. What did she find? 'I memorize without understanding. I cannot apply concepts to new scenarios.' She changed her study method (concept-based learning, 50 varied problems). Result: 78%. By the end of this video, you will learn Root Cause Analysis to stop recurring failures forever. Let us fix this."

[0:45-2:15] THE 5 WHYS TECHNIQUE (Drill Down to Root Cause)

"Stop guessing why you failed. Use 5 Whys - ask 'Why?' 5 times to drill from symptom to root cause.

EXAMPLE: Failed Accounting Exam (42%)

Why did I fail? → 'I could not solve application-based questions.'
(This is a symptom, not root cause. Keep asking.)

Why could I not solve application questions? → 'I did not practice enough varied problems.'
(Still a symptom. Why did not you practice varied problems?)

Why did I not practice varied problems? → 'I only solved textbook problems (same format every time).'
(Getting closer. Why only textbook problems?)

Why only textbook problems? → 'I thought textbook problems were sufficient for exams.'
(Why did you think that?)

Why did I think textbook was sufficient? → 'I did not understand that exams test APPLICATION, not memorization. I studied to memorize formulas, not understand concepts.'

ROOT CAUSE FOUND: 'I study for memorization, not application.'

FIX (addresses root cause):
1. Solve 50 varied problems (past exams, case studies, real-world scenarios)
2. For every concept, explain WHY (not just HOW)
3. Teach concepts to a friend (teaching = understanding)
4. Take 5 practice exams under timed conditions

Result: Next exam = 78% (not 42%).

The 5 Whys prevents surface-level fixes. Each 'Why' goes one layer deeper until you hit the root."

[2:15-3:45] FISHBONE DIAGRAM (Organize Potential Causes)

"5 Whys works for simple problems. For complex problems (multiple potential causes), use Fishbone Diagram.

STRUCTURE:
Draw a fishbone. HEAD = Problem (Failed Accounting Exam). BONES = Categories of potential causes.

CATEGORY 1: Study Method
- Memorization vs understanding?
- Passive reading vs active problem-solving?
- No practice exams?

CATEGORY 2: Time Management
- Ran out of time during exam?
- Spent too long on hard questions?
- Poor time allocation across topics?

CATEGORY 3: Concept Gaps
- Weak in specific topics (Cost Accounting? Financial Ratios?)?
- Skipped difficult chapters?
- Did not clarify doubts?

CATEGORY 4: Exam Technique
- Misread questions?
- Calculation errors?
- Did not show working (lost marks)?

CATEGORY 5: External Factors
- Exam anxiety (know material but panic)?
- Health issues during exam?
- Distractions while studying?

For EACH category, brainstorm 3-5 potential causes. Then INVESTIGATE which are actual root causes (gather evidence).

EXAMPLE: You analyze your answer sheet. Discovery: 80% of errors were in 'application questions' (Category 1: Study Method), not time management or concept gaps. ROOT CAUSE confirmed: Study Method (memorization, not application).

Fishbone prevents tunnel vision. You explore ALL potential causes before concluding."

[3:45-5:15] GATHER EVIDENCE (Data > Guesses)

"Do not GUESS the root cause. GATHER EVIDENCE.

STEP 1: Analyze Your Performance
For failed exam: Review your answer sheet. Which questions did you get wrong?
- Conceptual errors (did not understand the concept)?
- Calculation errors (knew the concept, made math mistakes)?
- Time management (ran out of time, left questions blank)?
- Misread questions (answered something different)?

DATA: 15 questions wrong. 12 were application questions (conceptual errors). 2 were calculation errors. 1 was time management.
INSIGHT: Root cause is NOT calculation or time management (only 3 errors). Root cause is application/concept understanding (12 errors).

STEP 2: Compare with Toppers
Talk to 3 students who scored 80%+. Ask: 'How did you study? What did you do differently?'
THEIR ANSWER: 'We solved 50+ varied problems. We taught concepts to each other. We took 5 practice exams.'
INSIGHT: Toppers focus on application (varied problems), not memorization (textbook only).

STEP 3: Talk to Professor
Ask: 'What are common mistakes students make in this exam?'
PROFESSOR: 'Students memorize formulas but cannot apply them to new scenarios. Exams test application, not memory.'
INSIGHT: Confirms root cause - memorization vs application.

STEP 4: Review Your Study Notes
Are your notes formula-based ('Formula: X = Y + Z') or concept-based ('WHY does X = Y + Z? When do we use this? What happens if Z changes?')?
YOUR NOTES: Formula-based. No explanations of WHY.
INSIGHT: Your study method (notes) reinforces memorization, not understanding.

EVIDENCE from 4 sources points to SAME root cause: Study method (memorization, not application). This is not a guess - it is DATA-DRIVEN."

[5:15-6:30] TEST YOUR ROOT CAUSE HYPOTHESIS

"Before implementing a fix, TEST if your root cause is correct. Otherwise, you might fix the wrong problem.

HYPOTHESIS: 'I fail because I memorize without understanding.'

TEST: Take a practice exam (not for score, for diagnosis).
- For EACH question, explain WHY the answer is correct (not just WHAT the answer is).
- Example: Question - 'Calculate Break-Even Point.' You calculate correctly (WHAT). Now explain: 'WHY do we calculate Break-Even Point? What business decision does it inform? What happens if fixed costs increase?'

RESULT 1: You struggle to explain WHY (even though you calculated correctly).
→ Hypothesis CONFIRMED. Root cause is weak conceptual understanding.
→ Fix: Focus on WHY (concept-based learning).

RESULT 2: You explain WHY perfectly, but still get wrong answers due to calculation errors.
→ Hypothesis WRONG. Root cause is NOT understanding - it is calculation accuracy.
→ Fix: Practice calculations, double-check work, use calculator.

Testing prevents wasting time. If you assumed 'memorization' was the issue but root cause is actually 'calculation errors,' you would waste weeks on concept-based learning (which you already have) instead of fixing calculations."

[6:30-7:30] IMPLEMENT ROOT CAUSE FIXES

"Once you identify and verify root cause, implement a fix that addresses IT (not symptoms).

ROOT CAUSE: 'I study for memorization, not application.'

SYMPTOM FIXES (do NOT work):
- Study 2 more hours/day → More hours of bad study method = still failing
- Buy premium notes → Better notes do not change study method
- Hire tutor → Tutor cannot fix your study approach if you still memorize

ROOT CAUSE FIX (addresses the core issue):
1. Change Study Method: For every concept, solve 10 VARIED problems (not just textbook). Varied = past exams, case studies, real-world scenarios. This builds application skills.

2. Explain WHY: For every formula, write: 'WHY does this work? When do we use it? What are edge cases?' Teaching yourself WHY = understanding.

3. Teach Others: Find a study partner. Teach them 3 concepts/week. Teaching forces you to understand (you cannot teach what you do not understand).

4. Practice Exams: Take 5 full-length practice exams under timed conditions. This simulates real exam pressure and builds application speed.

TIMELINE: 4 weeks of root cause fix.
RESULT: Next exam = 78% (up from 42%).

Root cause fix = permanent solution. Symptom fix = temporary band-aid."

[7:30-8:00] YOUR CHALLENGE (Analyze One Recurring Problem)

"Here is your action step: Pick ONE recurring problem in your life (failed exams, group project chaos, internship rejections, procrastination, conflicts with friends).

1. Apply 5 Whys: Ask 'Why?' 5 times to drill to root cause (2 hours)
2. Create Fishbone Diagram: Identify 5 categories, brainstorm 3-5 causes per category (1 hour)
3. Gather Evidence: Analyze your performance, compare with successful people, talk to mentors (2 hours)
4. Test Hypothesis: Verify your root cause is correct (1 hour)
5. Implement Root Cause Fix: Address the core issue, not symptoms (4 weeks)
6. Monitor Results: Did the problem recur? If yes, go back to Step 1 (ongoing)

Total: 6 hours of analysis, 4 weeks of fix. Result: Recurring problem SOLVED permanently.

Stop treating symptoms. Find the root cause. Fix it once. Move on with your life."

[End Screen: "You have completed Module 4: Critical Thinking & Problem Solving!"]`,
      content: [
        'The 5 Whys: Ask "Why?" 5 times to drill from symptom to root cause',
        'Fishbone Diagram: Organize potential causes into categories (Study Method, Time Management, Concept Gaps, Exam Technique, External Factors)',
        'Gather Evidence: Analyze performance, compare with toppers, talk to professors, review study notes',
        'Test Hypothesis: Verify root cause before implementing fix (practice exam diagnosis)',
        'Implement Root Cause Fixes: Address core issue (change study method), not symptoms (study more hours)',
        'Monitor Results: Track if problem recurs, iterate if needed',
        'B.Com Applications: Failed exams, group project chaos, internship rejections, recurring conflicts'
      ]
    },
    quiz: {
      title: 'Root Cause Analysis Quiz',
      questions: [
        {
          id: 26,
          question: 'Failed Accounting 3 times (45%, 48%, 42%). After each failure, tried: Study 2 more hours, buy premium notes, hire tutor. Still failing. What is problem?',
          options: [
            'Not trying hard enough - need to study even more hours',
            'Treating SYMPTOMS (study hours, notes quality), not ROOT CAUSE (study method: memorization vs application)',
            'Accounting too hard for you - consider dropping subject',
            'Need even better tutor'
          ],
          correct: 1,
          explanation: 'Treating symptoms instead of root causes. Studying more hours (symptom fix) doesn\'t work if study METHOD wrong (memorization vs application). Buying premium notes doesn\'t help if not understanding concepts. ROOT CAUSE: "I memorize formulas without understanding. Can\'t apply to new scenarios." Fix: Change study method (solve 50 varied problems, teach concepts, explain WHY formulas work). Result: 78% next exam. Recurring problems = fixing symptoms, not root causes. Use 5 Whys or Fishbone.'
        },
        {
          id: 27,
          question: 'Using 5 Whys technique for failed exam. Ask "Why did I fail?" and get "I did not study enough." What should do next?',
          options: [
            'Stop here - found root cause (low study hours)',
            'Ask "Why did I not study enough?" and continue asking "Why?" 4 more times to drill deeper to ROOT CAUSE',
            'Implement fix: Study 2 more hours/day',
            'Ask 5 different people why you failed'
          ],
          correct: 1,
          explanation: '"I didn\'t study enough" = SYMPTOM, not root cause. 5 Whys requires asking "Why?" 5 times to drill deeper. Continue: Why didn\'t study enough? → "Procrastinated." Why? → "Found studying boring." Why boring? → "Just reading passively." Why passive? → "Didn\'t know active study techniques." ROOT CAUSE: "Lack active study techniques." If stopped at "didn\'t study enough," would study more hours using SAME bad method and still fail. Surface answers = symptoms. Keep asking "Why?" until hit root.'
        },
        {
          id: 28,
          question: 'Create Fishbone Diagram for failed exams. Identify 5 categories: Study Method, Time Management, Concept Gaps, Exam Technique, External Factors. What is purpose of using categories?',
          options: [
            'To make diagram look organized and professional',
            'To ensure COMPREHENSIVE analysis - categories prevent tunnel vision and help explore ALL potential root causes, not just obvious ones',
            'To confuse yourself with too many options',
            'Categories not important - just list any causes randomly'
          ],
          correct: 1,
          explanation: 'Categories = ensure comprehensive root cause analysis. Without categories, might focus on ONE obvious cause ("didn\'t study enough"), miss OTHER root causes (exam anxiety, poor time management, weak specific topics, calculation errors). Fishbone categories force exploring: Study Method, Time Management, Concept Gaps, Exam Technique, External Factors. For EACH category, brainstorm 3-5 potential causes. Gather evidence to identify actual root causes. Systematic categorization > random brainstorming.'
        },
        {
          id: 29,
          question: 'Hypothesize: "I fail exams because I memorize without understanding." Before implementing fix (concept-based learning), what should do?',
          options: [
            'Immediately start concept-based learning - hypothesis obviously correct',
            'TEST hypothesis: Take practice exam and try to explain WHY each answer correct (not just WHAT). If struggle to explain WHY, hypothesis confirmed.',
            'Ask friends if they think hypothesis is correct',
            'Ignore hypothesis and try different fix'
          ],
          correct: 1,
          explanation: 'Always TEST root cause hypothesis before implementing fixes. Might be wrong. If assume "memorization" is issue but REAL root cause is "calculation errors," waste 4 weeks on concept-based learning instead of fixing calculations. Testing: Take practice exam. Explain WHY answer correct. If struggle to explain WHY (even know WHAT), hypothesis confirmed. If explain WHY perfectly but still wrong answers, hypothesis WRONG. Testing prevents fixing wrong problem. Verify root causes with evidence before investing time/money.'
        },
        {
          id: 30,
          question: 'After Root Cause Analysis, discover: "I fail because I memorize formulas without understanding concepts." Implement fix (concept-based learning). Next exam: 78% (up from 42%). What should do now?',
          options: [
            'Celebrate and move on - problem is solved',
            'MONITOR results: Track next 2-3 exams to ensure problem does not recur. If recurs, root cause analysis was incomplete (might be additional root causes).',
            'Go back to memorization - it is easier',
            'Stop studying - already proved can score 78%'
          ],
          correct: 1,
          explanation: 'Root Cause Analysis = iterative, not one-time. Scored 78% (great!), but MONITOR next 2-3 exams to ensure doesn\'t recur. If Exam 3: 75%, Exam 4: 80% → Problem SOLVED permanently. If Exam 3: 50% (recurs) → Root cause analysis INCOMPLETE. Might be additional root causes (exam anxiety, time management, specific topic gaps). Go back to Fishbone, investigate other categories. Recurring problems after "fixing" = incomplete analysis. Monitor, iterate, refine until permanently solved.'
        }
      ]
    },
    challenge: {
      title: 'Root Cause Challenge',
      description: 'Master root cause analysis',
      contexts: {
        academic: {
          title: 'Academic Root Cause Mastery',
          description: 'Failing Statistics 4× (38%, 42%, 40%, 39%). Tried fixes: more hours, coaching, location, textbook. Nothing works. RECURRING problem—find ROOT cause!',
          instructions: [
            '• Week 1 Day 1: Apply 5 Whys—ROOT: Single resource, lack meta-learning',
            '• Week 1 Day 2: Fishbone Diagram—5 categories, 20 potential causes',
            '• Week 1 Day 3-4: Gather evidence—analyze exams, talk toppers, professor',
            '• Week 1 Day 5: Test hypothesis—solve 5, explain WHY each',
            '• Week 2-5: Fix root cause—YouTube, 60 problems, study group—72%→78%!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Surface-level Why—ask 5 times, drill deeper',
            '• No evidence—analyze exams, talk toppers, professor',
            '• No test hypothesis—test before 3-week fix',
            '• Symptom fixes—fix method, not hours',
            '• Give up early—3-4 weeks for deep fixes'
          ],
          successCriteria: [
            '✅ 5 Whys: ROOT CAUSE found',
            '✅ Fishbone: 5 categories, 20 causes',
            '✅ Evidence: exams, toppers, professor',
            '✅ Hypothesis tested: 5 questions',
            '✅ 72%→78%, cycle broken permanently!'
          ]
        },
        professional: {
          title: 'Professional Root Cause Excellence',
          description: 'Marketing Analyst: Complaints tripled (50→150/mo). Manager tried fixes: more reps, 24/7, discounts. Nothing works. Do Root Cause Analysis, present in 2 weeks!',
          instructions: [
            '• Week 1 Day 1: Apply 5 Whys—ROOT: Cheaper packaging, no impact analysis',
            '• Week 1 Day 2-3: Fishbone—5 categories, 25 potential causes',
            '• Week 1 Day 4-5: Evidence—analyze 150 complaints, interview, test, calculate ₹109K loss',
            '• Week 1 Day 6: Test hypothesis—pilot old packaging, 2% vs 15%',
            '• Week 2-Mo 3: Present CEO, implement, monitor—50/mo, saved ₹100K!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Treat symptoms—more reps cannot fix damaged products',
            '• No cross-functional—talk warehouse, operations, finance',
            '• No quantify—calculate ₹115K/month cost',
            '• Weak evidence—test pilot, need DATA',
            '• No monitoring—track 3 months, confirm worked'
          ],
          successCriteria: [
            '✅ 5 Whys: ROOT packaging decision',
            '✅ Fishbone: 5 categories, 25 causes',
            '✅ Evidence: 150 analyzed, pilot tested',
            '✅ Hypothesis confirmed: 2% vs 15%',
            '✅ 150→50/mo, saved ₹100K, promotion!'
          ]
        },
        personal: {
          title: 'Personal Root Cause Wisdom',
          description: 'RECURRING procrastination 10+ times/year. Tried fixes: earlier deadlines, apps, accountability. Nothing works. NOT discipline—find ROOT cause!',
          instructions: [
            '• Week 1: Apply 5 Whys—ROOT: Lack task decomposition + rely motivation',
            '• Week 1: Fishbone—5 categories, 20 potential causes',
            '• Week 1: Evidence—track 1 week, 75% overwhelm, talk 3 productive friends',
            '• Week 2: Test hypothesis—Task 1 no breakdown = delay. Task 2 breakdown = start 2min',
            '• Week 2-6: Fix—10-15min steps, time-blocking, app blockers—87% improvement!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Blame yourself—NOT character, lack SKILLS fixable',
            '• Symptom fixes—earlier deadlines not help if overwhelmed',
            '• No evidence—track 1 week, 75% overwhelm found',
            '• No test—test 2 tasks before 3-week system',
            '• Rely motivation—systems work when motivation low'
          ],
          successCriteria: [
            '✅ 5 Whys: ROOT task decomposition + motivation',
            '✅ Fishbone: 5 categories, 20 causes',
            '✅ Evidence: 1 week tracked, 75% overwhelm',
            '✅ Hypothesis tested: breakdown = start 2min',
            '✅ 8→1 tasks/week, 87% improvement, cycle broken!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '❓ 5 Whys Mastery: You ask "Why?" 5 times to drill from symptom to root cause. Example: "I failed exam" → "I could not solve application questions" → "I did not practice varied problems" → "I only used textbook" → "I thought textbook was sufficient" → ROOT CAUSE: "I study for memorization, not application." You do not stop at surface-level answers. This prevents symptom fixes (study more hours) and enables root cause fixes (change study method).',
        '🐟 Fishbone Diagram Discipline: You use categories (Study Method, Time Management, Concept Gaps, Exam Technique, External Factors) to systematically explore ALL potential root causes. This prevents tunnel vision (assuming one cause without exploring others). Example: You identified 20 potential causes across 5 categories, then gathered evidence to determine which were actual root causes (80% of errors were in Study Method, not Time Management).',
        '🔬 Evidence-Based Analysis: You gather DATA before concluding. You analyze exam answer sheets, talk to toppers, consult professors, review study notes. You do not guess ("I think it is study hours") - you VERIFY with evidence ("80% of errors were in application questions, not time management"). This data-driven approach ensures you fix the RIGHT problem, not the wrong one.',
        '🧪 Hypothesis Testing: You TEST your root cause before implementing fixes. Example: Hypothesis - "I fail because I memorize without understanding." Test: Take practice exam, explain WHY each answer is correct. If you struggle to explain WHY, hypothesis is confirmed. If not, hypothesis is wrong. Testing prevents wasting 3 weeks fixing the wrong cause.',
        '🔧 Root Cause Fixes (Not Symptom Fixes): You implement fixes that address the ROOT CAUSE, not symptoms. Example: Root cause - "I study for memorization, not application." Fix: Solve 50 varied problems, teach concepts to friends, explain WHY formulas work. Result: 78% (up from 42%). Symptom fix (study 2 more hours/day) would NOT work because it does not address the root cause (study method).'
      ],
      improvements: [
        '🔍 Dig Deeper on First "Why": You sometimes stop at the 2nd or 3rd "Why" instead of drilling to the 5th. Example: "Why did I fail?" → "I did not study enough" → STOP. This is still a symptom. Keep asking: "Why did I not study enough?" → "I procrastinated" → "Why?" → "Studying was boring" → "Why?" → "Passive reading, not engaging" → ROOT CAUSE: "I lack active study techniques." Improve: Always ask "Why?" 5 times, even if you think you found the root cause at Why #3.',
        '📊 Quantify Impact of Root Causes: You identify root causes but do not always quantify their impact. Example: "Study Method is the root cause." But how much impact? Quantify: "80% of errors were Study Method issues, 15% were calculation errors, 5% were time management." This reveals: Focus 80% of effort on Study Method, 15% on calculations, 5% on time management. Improve: For each root cause, quantify: What % of the problem does this cause? How much will fixing it improve results?',
        '🧪 Test Multiple Hypotheses: You identify ONE root cause and test it. But complex problems often have MULTIPLE root causes. Example: You find "Study Method" is the root cause and fix it. Score improves from 42% to 60% (better, but not great). Why? There is a SECOND root cause you missed (exam anxiety). Improve: After fixing one root cause, if problem persists, go back to Fishbone Diagram. Investigate other categories. Complex problems = multiple root causes.',
        '⏰ Shorten RCA Time: You spend 6-8 hours on comprehensive Root Cause Analysis (5 Whys, Fishbone, evidence gathering, testing). This is thorough but slow. For smaller problems, you need faster RCA. Improve: Create a "Quick RCA" template (1 hour). Ask 5 Whys only (skip Fishbone). Gather minimal evidence (analyze 1 data source, not 4). Test hypothesis quickly (1 practice question, not 5). Reserve comprehensive RCA for recurring, high-impact problems.',
        '🔄 Improve Monitoring Discipline: You implement root cause fix and check results once (Exam 2: 78%, problem solved!). But you do not monitor Exams 3-5 to ensure problem does not recur. Improve: After implementing fix, monitor results for 3-4 cycles (exams, projects, weeks). If problem recurs, your root cause analysis was incomplete. Go back, investigate other categories. RCA is iterative, not one-time.'
      ],
      nextSteps: [
        '📚 Study Advanced RCA Techniques: Read "The Toyota Way" by Jeffrey Liker (Toyota Production System uses RCA to eliminate defects), "Root Cause Analysis" by Bjørn Andersen (comprehensive RCA methods), "The Lean Startup" by Eric Ries (Build-Measure-Learn loop for testing hypotheses). Apply concepts: How do you do RCA for systemic problems (not just individual failures)? How do you prevent problems BEFORE they occur (proactive RCA)?',
        '🧠 Build a Personal RCA Library: Create a document: "My Recurring Problems and Root Causes." For each recurring problem you solve (failed exams, procrastination, conflicts, project chaos), document: (1) Symptom, (2) Root cause (from 5 Whys), (3) Fix implemented, (4) Result. Over time, you will see patterns: "I often have Study Method issues (memorization vs understanding). I should always check this category first." This library accelerates future RCA.',
        '🎯 Practice Rapid RCA: Challenge yourself: Do Root Cause Analysis in 30 minutes (not 6 hours). Rules: Ask 5 Whys only (skip Fishbone). Gather evidence from 1 source (not 4). Test hypothesis with 1 example (not 5). Practice on small problems (why did I miss this deadline? Why did I have this conflict?). Goal: Build RCA speed without sacrificing quality. When you can do rapid RCA in 30 minutes, you will use it for EVERY recurring problem (not just big ones).',
        '👥 Teach RCA to 3 People: The best way to master RCA is to teach it. Walk 3 friends through Root Cause Analysis for their recurring problems. Teach: (1) 5 Whys technique (drill to root cause), (2) Fishbone Diagram (systematic categorization), (3) Evidence gathering (data > guesses), (4) Hypothesis testing (verify before fixing), (5) Root cause fixes (address core issue, not symptoms). When you teach, you discover gaps in your own understanding. You also build a network of people who use RCA.',
        '📊 Conduct Post-Fix Reviews: After EVERY root cause fix, schedule a "Post-Fix Review" (30 mins, 3 months after fix). Ask: (1) Did the problem recur? (If yes, root cause analysis was incomplete. What did I miss?) (2) Did the fix work as expected? (Exam score improved from 42% to 78% as predicted?) (3) Were there unintended consequences? (Studying 3 hours/day improved grades but caused burnout?) (4) What would I do differently next time? Document lessons learned. Over 10 RCA cycles, you will build mastery: "I always miss External Factors (stress, health) in my Fishbone. I should add this category every time."'
      ]
    },
    badge: { name: 'Root Cause Detective', emoji: '🔍', description: 'Expert in root cause analysis' },
    shareMessage: 'Just mastered root cause analysis! 🔍 #ProblemSolving #RCA'
  }
];

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

export const module4Subtopics = module4Data;

// Module 4 Assessment - 30 Questions (5 from each subtopic)
export const module4Assessment: AssessmentData = {
  id: 'module4-assessment',
  title: 'Critical Thinking & Problem Solving Assessment',
  description: 'Test your critical thinking and problem-solving mastery across all 6 subtopics',
  questions: [
    // Logical Reasoning (Questions 1-5)
    {
      id: 1,
      question: 'Your professor argues: "All B.Com students who study regularly pass exams. Priya studies regularly. Therefore, Priya will pass." What makes this argument valid?',
      options: [
        'The conclusion is true because Priya is smart',
        'If the premises are true (all regular studiers pass, Priya studies regularly), the conclusion MUST follow logically (Priya will pass)',
        'It is a popular opinion among students',
        'It sounds convincing and makes sense'
      ],
      correct: 1,
      explanation: 'A valid argument means the conclusion follows logically from the premises. If "All B.Com students who study regularly pass" (Premise 1) AND "Priya studies regularly" (Premise 2) are both true, then "Priya will pass" (Conclusion) MUST be true. Validity is about logical structure, not whether premises are actually true. In B.Com critical thinking, recognizing valid arguments helps you evaluate business proposals, academic debates, and career advice systematically.'
    },
    {
      id: 2,
      question: 'During a Business Law debate, Rahul argues: "We should not listen to Anjali\'s opinion on corporate taxation because she failed her Tax Law exam last semester." What logical fallacy is this?',
      options: [
        'Valid argument based on her qualifications',
        'Ad hominem - attacking the person (her exam failure) instead of addressing her argument about corporate taxation',
        'Strong evidence against her position',
        'Logical conclusion based on her performance'
      ],
      correct: 1,
      explanation: 'Ad hominem (Latin: "to the person") attacks the person making the argument instead of addressing the argument itself. Rahul attacks Anjali\'s credibility (exam failure) rather than evaluating her taxation argument on its merits. Even if she failed Tax Law, her argument about corporate taxation might still be valid. In B.Com debates (group projects, case competitions), focus on evaluating arguments based on evidence and logic, not personal attacks. Ad hominem is a common fallacy in business discussions and should be avoided.'
    },
    {
      id: 3,
      question: 'You argue: "We should implement flexible work hours in our company." Your manager responds: "So you want everyone to work whenever they feel like it, with no structure or accountability?" What fallacy is this?',
      options: [
        'Strong counterargument addressing your proposal',
        'Straw man - misrepresenting your position (flexible hours ≠ no structure) to make it easier to attack',
        'Valid reasoning about work structure',
        'Good evidence against flexible hours'
      ],
      correct: 1,
      explanation: 'Straw man fallacy involves misrepresenting someone\'s argument to make it easier to attack. You proposed "flexible work hours" (e.g., 7 AM-10 AM start time options), but your manager distorted it to "work whenever they feel like it with no structure" (extreme version). This misrepresentation is easier to attack than your actual proposal. In B.Com workplace discussions, straw man fallacies derail productive debates. Always clarify: "That\'s not what I proposed. I meant flexible start times within 7-10 AM, with core hours 10 AM-4 PM for collaboration."'
    },
    {
      id: 4,
      question: 'Your friend says: "You either do an MBA immediately after B.Com, or you will never succeed in your career. There are no other options." What logical fallacy is this?',
      options: [
        'True statement - these are the only two career paths',
        'False dichotomy - presenting only two options (MBA now vs never succeed) when many other paths exist (work experience first, professional certifications, entrepreneurship, etc.)',
        'No fallacy - this is sound career advice',
        'Valid reasoning about MBA importance'
      ],
      correct: 1,
      explanation: 'False dichotomy (false dilemma) presents only two options when more exist. Your friend claims: (1) MBA immediately, or (2) career failure. Reality: Many successful B.Com grads took alternative paths - worked 2-3 years then did MBA, pursued CA/CFA/CMA, started businesses, or succeeded without MBA. False dichotomies oversimplify complex decisions. In B.Com career planning, recognize that success has multiple paths. Always ask: "What other options exist beyond these two?" This prevents being pressured into binary choices when better alternatives exist.'
    },
    {
      id: 5,
      question: 'Argument: "All companies that invest in employee training see productivity increases. Our company invests heavily in training. Therefore, our productivity will increase." For this to be a SOUND argument, what is required?',
      options: [
        'Just valid logical structure (which it has)',
        'Valid structure AND true premises (verify: Do ALL training-investing companies see productivity increases? Does our company actually invest heavily?)',
        'Popular opinion supporting the conclusion',
        'Emotional appeal about training benefits'
      ],
      correct: 1,
      explanation: 'A sound argument requires: (1) Valid structure (conclusion follows from premises) AND (2) True premises. This argument is valid (structure is correct), but is it sound? Premise 1: "ALL companies that invest in training see productivity increases" - Is this true? (No, some companies invest in poor training and see no gains.) Premise 2: "Our company invests heavily" - Is this true? (Verify budget data.) If either premise is false, the argument is valid but not sound. In B.Com business analysis, always verify premises with data before accepting conclusions. Validity ≠ soundness.'
    },

    // Problem Analysis (Questions 6-10)
    {
      id: 6,
      question: 'Your group project keeps missing deadlines (3 times in a row). You ask "Why?" → "We start too late." "Why?" → "Tasks are unclear." "Why?" → "No task breakdown." "Why?" → "We skip planning meetings." "Why?" → "We assume everyone knows their role." What technique is this, and what did it reveal?',
      options: [
        'Asking 5 random questions to find any cause',
        '5 Whys technique - drilling from symptom (missing deadlines) to root cause (assumption that roles are clear without planning)',
        'Listing 5 problems without solutions',
        'Finding 5 people to blame'
      ],
      correct: 1,
      explanation: '5 Whys technique asks "Why?" repeatedly (typically 5 times) to drill from symptom to root cause. Symptom: "Missing deadlines." Surface cause: "Start too late." Deeper: "Tasks unclear." Deeper: "No task breakdown." Deeper: "Skip planning meetings." Root cause: "Assume everyone knows their role without explicit planning." Fix the root cause (hold planning meetings, assign clear tasks) instead of symptom (just starting earlier without clarity). In B.Com group projects, 5 Whys prevents treating symptoms and enables permanent solutions.'
    },
    {
      id: 7,
      question: 'Your college fest budget is ₹2 lakhs over limit. Before solving this, what is the FIRST step in problem analysis?',
      options: [
        'Immediately cut expenses randomly to save ₹2 lakhs',
        'Define the problem clearly: Which expense categories are over budget? By how much? Why? What is the actual vs planned spending breakdown?',
        'Blame the finance team for poor planning',
        'Start working on solutions without understanding the problem'
      ],
      correct: 1,
      explanation: 'The first step in problem analysis is DEFINE THE PROBLEM clearly. "₹2 lakhs over budget" is vague. Define: Which categories are over (food ₹80K, decorations ₹70K, performer ₹50K)? Why (vendor price increases, underestimated quantities, unplanned expenses)? What is actual vs planned (food: ₹1.8L actual vs ₹1L planned)? Clear definition reveals: Food is the biggest overrun (₹80K). Now you can target solutions (negotiate with food vendor, reduce menu, find cheaper caterer). Jumping to solutions without definition wastes time fixing wrong problems. In B.Com, always define before solving.'
    },
    {
      id: 8,
      question: 'You notice: "Sales are down 20% this quarter." Is this a symptom or the actual problem? How do you identify the real problem?',
      options: [
        'This is the problem - sales are down, that is what we need to fix',
        'This is a SYMPTOM (effect). The actual problem (cause) might be: poor product quality, ineffective marketing, increased competition, pricing issues, or economic downturn. Analyze to find the root cause.',
        'Symptoms and problems are the same thing',
        'This is worse than a problem - it is a crisis'
      ],
      correct: 1,
      explanation: 'Symptoms are EFFECTS (what you observe). Problems are CAUSES (why it is happening). "Sales down 20%" is a symptom. The actual problem might be: (1) Product quality declined (customers switching to competitors), (2) Marketing budget cut (less visibility), (3) New competitor entered market (price war), (4) Pricing too high (customers cannot afford), (5) Economic recession (reduced spending). Analyze data: Which customer segments dropped? Which products? When did decline start? What changed? This reveals the root problem. In B.Com business analysis, treating symptoms (e.g., offering discounts) without fixing root problems (e.g., poor quality) leads to recurring issues.'
    },
    {
      id: 9,
      question: 'Your startup faces a complex problem: "Low customer retention (60% churn rate), negative reviews (2.5/5 stars), and high customer service costs (₹5L/month)." How should you approach this?',
      options: [
        'Solve all three issues simultaneously right now',
        'Break into parts: (1) Why is churn high? (analyze customer exit surveys), (2) Why negative reviews? (analyze complaints), (3) Why high service costs? (analyze ticket volume). Prioritize based on impact.',
        'Ignore the problem - it is too complex',
        'Leave it to experts - you cannot handle complex problems'
      ],
      correct: 1,
      explanation: 'Complex problems have multiple interconnected issues. Break them into manageable parts. (1) Analyze churn: Exit surveys reveal "poor onboarding" (customers do not understand product). (2) Analyze reviews: Complaints about "slow customer service response" (24-hour wait time). (3) Analyze service costs: High ticket volume because product is confusing (links to onboarding issue). Insight: These are interconnected! Root cause: Poor onboarding → confused customers → service tickets → slow response → negative reviews → churn. Fix: Improve onboarding (videos, tutorials, live demos). This addresses all three issues. In B.Com, decompose complex problems, find interconnections, prioritize root causes.'
    },
    {
      id: 10,
      question: 'Your internship application was rejected. You want to improve for next time. What should you do BEFORE creating solutions?',
      options: [
        'Act fast - immediately apply to 50 more companies',
        'Analyze and understand: Request feedback from recruiter, compare your application with successful candidates, identify gaps (skills, experience, resume quality, interview performance). Understand WHY you were rejected.',
        'Guess what went wrong and fix random things',
        'Wait and hope the next application works'
      ],
      correct: 1,
      explanation: 'Before solving, analyze and understand the problem. "Rejected" is vague. Analyze: (1) Request feedback from recruiter ("Your resume lacked relevant projects"). (2) Compare with successful candidates (they had 2-3 internships, you had 0). (3) Identify gaps (technical skills: Excel, Python; soft skills: communication). (4) Review your interview performance (struggled with behavioral questions). Now you understand WHY you were rejected. Solutions: Add relevant projects to resume, learn Excel/Python, practice behavioral interviews, gain experience through volunteering. In B.Com career planning, understanding rejection reasons enables targeted improvement instead of random applications.'
    },

    // Creative Solutions (Questions 11-15)
    {
      id: 11,
      question: 'Your college fest needs ₹2 lakhs but only has ₹50K budget. Using SCAMPER, you apply "Combine": "What if we combine our fest with the rival college\'s fest and share costs?" What does SCAMPER stand for, and why is it useful?',
      options: [
        'A running technique for brainstorming quickly',
        'Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse - a creativity framework that prompts you to think about problems from 7 different angles',
        'A project management method for scheduling',
        'A testing framework for quality assurance'
      ],
      correct: 1,
      explanation: 'SCAMPER is a creativity technique with 7 prompts: Substitute (replace something), Combine (merge with something else), Adapt (adjust for new context), Modify (change attributes), Put to other uses (repurpose), Eliminate (remove components), Reverse (flip the process). Example: College fest budget problem. Combine: Partner with rival college, share costs (₹2L becomes ₹1L each). Eliminate: Remove expensive performer, use student talent. Adapt: Adapt successful fest ideas from other colleges. SCAMPER forces you to explore 7 angles instead of one. In B.Com innovation (product development, cost reduction, marketing campaigns), SCAMPER generates diverse creative solutions.'
    },
    {
      id: 12,
      question: 'Your team is brainstorming fundraising ideas for a college event. Priya suggests: "What if we sell students\' old textbooks and donate 50% to charity?" Rahul immediately says: "That will never work - students won\'t donate books." What brainstorming rule did Rahul violate?',
      options: [
        'He should have critiqued the idea more harshly',
        'Quantity over quality first - during brainstorming, generate many ideas without criticism. Evaluate later. Rahul killed the idea prematurely.',
        'He should have suggested only one idea',
        'He should have rejected all wild ideas'
      ],
      correct: 1,
      explanation: 'Brainstorming rule: Quantity over quality FIRST. Generate 50-100 ideas without criticism. Evaluate LATER. Why? (1) Criticism kills creativity (people stop sharing ideas). (2) "Bad" ideas often spark "good" ideas (Priya\'s textbook idea might inspire "rent textbooks" or "textbook exchange platform"). (3) Evaluation is separate from generation. Rahul violated this by criticizing immediately. Result: Priya stops sharing ideas, team generates only 5 ideas instead of 50. Better approach: "Interesting! Let\'s add it to the list. What else?" Generate 50 ideas, THEN evaluate feasibility. In B.Com group projects, separate generation from evaluation to maximize creative output.'
    },
    {
      id: 13,
      question: 'Traditional thinking: "How do we increase sales?" Lateral thinking: "How do we make customers want to buy more?" What is lateral thinking, and why is it valuable?',
      options: [
        'Thinking sideways instead of forward',
        'Approaching problems from NEW ANGLES instead of traditional direct approaches. It reframes questions to unlock creative solutions.',
        'Linear, step-by-step traditional thinking',
        'Following established methods and templates'
      ],
      correct: 1,
      explanation: 'Lateral thinking (coined by Edward de Bono) approaches problems from new angles instead of direct linear approaches. Traditional: "How do we increase sales?" (direct - more ads, discounts, salespeople). Lateral: "How do we make customers want to buy more?" (reframe - improve product desirability, create FOMO, build community, gamify purchases). Reframing unlocks new solutions. Example: Dropbox did not ask "How do we get more users?" (traditional ads). They asked "How do we make users recruit other users?" (lateral - referral program: invite friends, get free storage). Result: 3900% growth. In B.Com marketing and entrepreneurship, lateral thinking generates breakthrough ideas traditional thinking misses.'
    },
    {
      id: 14,
      question: 'Your team assumes: "College students will never pay for premium study materials - they only want free content." To generate creative ideas, what should you do with this assumption?',
      options: [
        'Accept it as a rule - assumptions are usually true',
        'Challenge the assumption: "What if students WILL pay for premium materials if they see clear value (better grades, time savings, expert guidance)?" Test it with a pilot.',
        'Only use proven ideas - no need to challenge assumptions',
        'Avoid all risks by following the assumption'
      ],
      correct: 1,
      explanation: 'Creative ideas require challenging assumptions. Your team assumes "students will not pay." Challenge it: "What if they WILL pay for high-value content?" Test: Create premium study guide for ₹500 (comprehensive notes, practice exams, video explanations). Pilot with 50 students. Result: 40 students buy (80% conversion). Assumption was WRONG. Students pay for value. Now you have a business model. In B.Com entrepreneurship, many successful startups challenged "obvious" assumptions. Netflix challenged "people want to own DVDs" (wrong - they want convenient access). Uber challenged "people want to own cars" (wrong - they want convenient transportation). Always test assumptions.'
    },
    {
      id: 15,
      question: 'You are brainstorming business ideas. Your friend suggests: "What if we create a platform where students can rent formal wear for interviews instead of buying?" You think: "That is too unconventional - stick to proven ideas." What is the problem with this mindset?',
      options: [
        'Perfection - only perfect ideas should be explored',
        'Creativity requires exploring UNCONVENTIONAL ideas. Many successful businesses started as "crazy" ideas (Airbnb: rent strangers\' homes? Uber: get in strangers\' cars?). Evaluate ideas on merit, not conventionality.',
        'Templates are safer - follow established business models',
        'Mistakes must be avoided - only pursue guaranteed successes'
      ],
      correct: 1,
      explanation: 'Creativity requires exploring unconventional ideas. "Rent formal wear" sounds unconventional, but evaluate on merit: (1) Market: 10,000 students need interview attire, most cannot afford ₹5000 suits. (2) Solution: Rent for ₹500/day. (3) Revenue: 100 rentals/month × ₹500 = ₹50K/month. (4) Validation: Survey 50 students - 70% say "I would use this." This is a VIABLE business. Many successful companies started as "unconventional" ideas. Airbnb: "Rent strangers\' homes?" (now $100B company). Uber: "Get in strangers\' cars?" (now $80B company). In B.Com entrepreneurship, evaluate ideas on data and market need, not conventionality. Unconventional ≠ bad.'
    },

    // Decision Making (Questions 16-20)
    {
      id: 16,
      question: 'You have 3 job offers. You create a Decision Matrix with criteria: Salary (weight 8/10), Learning (weight 10/10), Work-life balance (weight 9/10). You rate each job 1-10 on each criterion, multiply by weights, sum scores. What is the purpose of this?',
      options: [
        'Make a random choice based on feelings',
        'Systematically rate options against WEIGHTED criteria (what matters to YOU) to make a data-driven decision instead of emotional/impulsive choice',
        'Avoid making any decision',
        'Follow what others recommend'
      ],
      correct: 1,
      explanation: 'Decision Matrix systematically evaluates options against YOUR priorities. Example: Job A (Big 4): Salary 8/10 (×8 weight = 64), Learning 6/10 (×10 = 60), Work-life 3/10 (×9 = 27). Total: 151. Job B (Startup): Salary 5/10 (×8 = 40), Learning 10/10 (×10 = 100), Work-life 7/10 (×9 = 63). Total: 203. Startup wins based on YOUR priorities (learning, work-life balance). Without matrix, you might choose Big 4 based on salary alone, ignoring that learning and work-life matter MORE to you (higher weights). In B.Com career decisions, Decision Matrix removes emotion and external pressure, enabling choices aligned with YOUR values.'
    },
    {
      id: 17,
      question: 'You are deciding: MBA (₹20L cost, 2 years) vs Job (₹5 LPA, immediate income). Using 10-10-10 Rule: In 10 minutes, MBA feels exciting (prestige!). In 10 months, MBA means ₹20L debt and stress. In 10 years, MBA might mean ₹25 LPA role but ₹20L debt repaid. What does this rule reveal?',
      options: [
        'Consider 10 different options',
        'How will you feel in 10 MINUTES, 10 MONTHS, 10 YEARS? This reveals long-term consequences you ignore in the excitement of the moment.',
        'Ask 10 people for their opinions',
        'Use 10 criteria for evaluation'
      ],
      correct: 1,
      explanation: '10-10-10 Rule (by Suzy Welch) forces long-term thinking. 10 minutes: MBA feels exciting (prestige, learning, campus life). 10 months: ₹20L debt, no income, stress, tough coursework. 10 years: MBA → ₹25 LPA, but ₹20L debt repaid? Job → ₹12 LPA (slower growth), but ₹30L saved (no MBA cost + 2 years income), practical experience. Insight: MBA looks great in 10 MINUTES but has significant costs in 10 MONTHS and mixed outcomes in 10 YEARS. This prevents impulsive decisions based on immediate excitement. In B.Com, major decisions (MBA, job offers, entrepreneurship) require long-term perspective. 10-10-10 reveals consequences beyond the moment.'
    },
    {
      id: 18,
      question: 'You have been researching MBA programs for 3 months. You have read 50 reviews, talked to 20 alumni, created 10 comparison spreadsheets. You still cannot decide. Deadline is tomorrow. What is happening?',
      options: [
        'You are doing excellent analysis - keep researching',
        'Analysis paralysis - overthinking prevents decision. You have enough data. Use a Decision Matrix, set a deadline (6 hours), and DECIDE. Perfect information does not exist.',
        'This is quick decision-making',
        'You need more data - talk to 30 more alumni'
      ],
      correct: 1,
      explanation: 'Analysis paralysis occurs when overthinking prevents decision-making. You have 50 reviews, 20 alumni insights, 10 spreadsheets - this is ENOUGH data. More data will not help because you are not lacking information, you are lacking a decision framework. Solution: (1) Use Decision Matrix (rate programs on your top 5 criteria), (2) Set deadline ("I will decide by 6 PM today"), (3) Accept that no decision is perfect (all programs have pros/cons), (4) Decide and commit. Waiting for "perfect" information = analysis paralysis. In B.Com, good decision + fast execution > perfect decision + slow execution. Decide with 70-80% confidence, not 100%.'
    },
    {
      id: 19,
      question: 'You are deciding whether to start a business (₹5L investment, high risk). This is a BIG decision. What should you do BEFORE fully committing?',
      options: [
        'Decide immediately based on gut feeling - big decisions need quick action',
        'Test with small experiments: Validate idea with 50 customers, run a pilot for 3 months with ₹50K investment, gather data. If successful, THEN commit ₹5L.',
        'Avoid the decision - too risky',
        'Flip a coin - it is 50/50 anyway'
      ],
      correct: 1,
      explanation: 'For BIG decisions (high cost, high risk, irreversible), test with small experiments before fully committing. Business idea: Online tutoring platform. Test: (1) Validate demand: Survey 100 students ("Would you pay ₹5000 for 6-month tutoring?" 70% say yes). (2) Run pilot: Invest ₹50K (build basic website, recruit 20 students, deliver service for 3 months). (3) Gather data: Revenue ₹1L (20 students × ₹5K), costs ₹60K, profit ₹40K. Customer satisfaction: 4.5/5 stars. (4) Decision: Pilot succeeded. NOW commit ₹5L to scale. Testing reduces risk by 80%. In B.Com entrepreneurship, test assumptions before betting big. Pilot > speculation.'
    },
    {
      id: 20,
      question: 'Your parents want you to join Big 4 (prestige, ₹6 LPA). Your friends want you to join a startup (cool, equity). You want family business (comfort, ₹5 LPA). How should you decide?',
      options: [
        'Choose Big 4 to make parents happy',
        'Clarify YOUR priorities first (rank: learning, salary, work-life, growth, stability). Use Decision Matrix based on YOUR values, not others. This is YOUR career.',
        'Choose startup to fit in with friends',
        'Flip a coin - all options are equally good'
      ],
      correct: 1,
      explanation: 'When facing external pressure (parents, friends), clarify YOUR priorities FIRST. Rank what matters to YOU: Learning (10/10), Work-life balance (9/10), Growth (8/10), Salary (7/10), Stability (6/10), Prestige (4/10). Now use Decision Matrix: Big 4 scores high on Salary (8/10) and Prestige (10/10) but low on Work-life (3/10). Startup scores high on Learning (10/10) and Growth (10/10). Family business scores high on Work-life (9/10) and Stability (10/10). Calculate weighted scores based on YOUR priorities. If Learning and Work-life matter MOST to you, Startup or Family business might win despite lower prestige. In B.Com career decisions, decide based on YOUR values, then own the outcome. You cannot please everyone.'
    },

    // Risk Assessment (Questions 21-25)
    {
      id: 21,
      question: 'You are planning a college fest. You identify "Rain" as a risk. Probability: 30% (monsoon season). Impact: ₹1.5L loss (outdoor events canceled). What is the Risk Score?',
      options: [
        'Impact only: ₹1.5L',
        'Risk = Probability × Impact = 0.30 × ₹1.5L = ₹45,000 expected loss. This lets you compare and prioritize risks numerically.',
        'Uncertainty - cannot be calculated',
        'Fear level - subjective feeling'
      ],
      correct: 1,
      explanation: 'Risk = Probability × Impact. Rain risk: 30% probability × ₹1.5L impact = ₹45,000 expected loss. This quantifies risk numerically, enabling prioritization. Compare: Rain (₹45K), Performer cancellation (20% × ₹2L = ₹40K), Food shortage (40% × ₹50K = ₹20K), Sound failure (10% × ₹10K = ₹1K). Prioritize: Address Rain (₹45K) and Performer (₹40K) first. Sound failure (₹1K) is low priority. Without quantification, you might waste time on low-impact risks. In B.Com project management, quantify EVERY risk (Probability × Impact) to prioritize systematically and allocate resources to high-impact risks.'
    },
    {
      id: 22,
      question: 'You plot risks on a Risk Matrix (2×2 grid: Probability vs Impact). "Performer cancellation" is Low Probability (20%) but High Impact (₹2L loss). Which zone is this, and what should you do?',
      options: [
        'Green Zone - Accept the risk, do nothing',
        'Orange Zone (Low Probability + High Impact) - Prepare contingency plan: Contract with cancellation clause, book 2 backup performers, confirm attendance 48 hours before event',
        'Red Zone - Address immediately with full mitigation',
        'Yellow Zone - Just monitor, no action needed'
      ],
      correct: 1,
      explanation: 'Risk Matrix has 4 zones: Red (High Probability + High Impact - address immediately), Orange (Low Probability + High Impact - prepare contingency), Yellow (High Probability + Low Impact - monitor), Green (Low Probability + Low Impact - accept). Performer cancellation = Orange Zone (20% probability, ₹2L impact). Action: Prepare contingency. How? (1) Contract with cancellation clause (penalty if they cancel), (2) Book 2 backup performers (ready to step in), (3) Confirm attendance 48 hours before. This reduces probability (20% → 5%) and impact (₹2L → ₹50K with backups). In B.Com event management, Orange Zone risks need contingency plans, not full mitigation or acceptance.'
    },
    {
      id: 23,
      question: 'Sound system failure has 10% probability and ₹10K impact (Risk Score = ₹1K). Prevention (backup sound system) costs ₹50K. What mitigation strategy should you use?',
      options: [
        'Avoid - eliminate the risk completely',
        'ACCEPT the risk. Prevention (₹50K) costs 50x more than the risk (₹1K). If sound fails (10% chance), rent backup equipment for ₹10K (1-time cost).',
        'Transfer - buy insurance',
        'Reduce - lower the probability'
      ],
      correct: 1,
      explanation: 'The 4 mitigation strategies are: (1) AVOID (eliminate risk), (2) REDUCE (lower probability/impact), (3) TRANSFER (insurance), (4) ACCEPT (do nothing, absorb loss). Sound failure: Risk Score = ₹1,000 (10% × ₹10K). Prevention = ₹50,000 (backup system). This is 50x more expensive than the risk! Better strategy: ACCEPT the risk. If sound fails (10% chance), rent backup equipment for ₹10K (1-time reactive cost vs ₹50K proactive cost). You save ₹40K. Use ACCEPT for Green Zone risks (Low Probability + Low Impact) where mitigation costs exceed the risk. In B.Com, do not over-invest in preventing low-impact risks. Focus resources on Red/Orange Zone risks.'
    },
    {
      id: 24,
      question: 'You assess risks for a college fest 2 months before the event. Rain probability: 30%. 1 week before the event, weather forecast changes to 60% rain. What should you do?',
      options: [
        'Stick to your original risk assessment - you already planned for 30% rain',
        'Update your Risk Register: Rain is now Red Zone (60% probability, ₹1.5L impact = ₹90K risk, up from ₹45K). Immediately execute backup plan (book indoor venues, create refund policy).',
        'Ignore the new forecast - weather predictions are often wrong',
        'Cancel the fest to avoid all risk'
      ],
      correct: 1,
      explanation: 'Risk assessment is CONTINUOUS, not one-time. Original: Rain = 30% probability, ₹1.5L impact = ₹45K risk (Orange Zone - prepare contingency). Updated: Rain = 60% probability, ₹1.5L impact = ₹90K risk (Red Zone - address immediately). Action: Execute backup plan NOW (book indoor venues, communicate to attendees, create refund policy). Waiting until fest day = too late. Option 1 (stick to original) ignores new data. Option 3 (ignore forecast) is optimism bias. Option 4 (cancel) is overreaction. In B.Com project management, schedule weekly risk reviews. Ask: Have probabilities changed? Have new risks emerged? Update Risk Register and adjust plans. Continuous monitoring prevents surprises.'
    },
    {
      id: 25,
      question: 'You are assessing risks for a college fest. You brainstorm randomly and identify 5 risks (rain, performer cancellation, food shortage, sound failure, low attendance). Your friend uses Risk Categories and identifies 22 risks. Why the difference?',
      options: [
        'Your friend is overthinking and being paranoid',
        'Risk Categories (Financial, Operational, External, Reputational) ensure systematic identification. Random brainstorming misses 50% of risks (payment delays, vendor no-show, government restrictions, negative social media).',
        'Your 5 risks are enough - more risks = more worry',
        'Your friend copied risks from the internet'
      ],
      correct: 1,
      explanation: 'Random brainstorming identifies obvious risks (rain, performer cancellation) but misses less obvious ones. Risk Categories force systematic exploration: Financial (sponsorship falls through, budget overrun, low ticket sales, payment delays), Operational (vendor no-show, equipment failure, staff shortage, logistics issues), External (weather, competitor events, government restrictions, economic downturn), Reputational (poor quality, safety incidents, negative social media, performer controversy). Result: 20-25 risks identified vs 5 from random brainstorming. Comprehensive identification = better risk management. Missing risks = being blindsided. In B.Com project management, use categories to ensure you do not miss critical risks. Systematic > random.'
    },

    // Root Cause Analysis (Questions 26-30)
    {
      id: 26,
      question: 'You failed Accounting 3 times (45%, 48%, 42%). After each failure, you tried: Study 2 more hours/day, buy premium notes for ₹2000, hire tutor. Still failing. What is the problem?',
      options: [
        'You are not trying hard enough - need to study even more hours',
        'You are treating SYMPTOMS (study hours, notes quality) not the ROOT CAUSE (study method: memorization vs application). You need Root Cause Analysis.',
        'Accounting is too hard - consider dropping it',
        'You need an even better tutor'
      ],
      correct: 1,
      explanation: 'Recurring problems signal you are fixing symptoms, not root causes. Studying more hours (symptom fix) does not work if your study METHOD is wrong (memorization instead of application). Buying premium notes (symptom fix) does not help if you are not understanding concepts. The ROOT CAUSE might be: "I memorize formulas without understanding. I cannot apply concepts to new scenarios." Fix: Change study method (solve 50 varied problems, teach concepts to friends, explain WHY formulas work). This addresses the root cause. Result: 78% next exam. In B.Com, recurring failures require Root Cause Analysis (5 Whys, Fishbone Diagram) to find and fix the real issue, not symptoms.'
    },
    {
      id: 27,
      question: 'You create a Fishbone Diagram for failed exams. You identify 5 categories: Study Method, Time Management, Concept Gaps, Exam Technique, External Factors. For EACH category, you brainstorm 3-5 potential causes. What is the purpose of using categories?',
      options: [
        'To make the diagram look organized and professional',
        'To ensure COMPREHENSIVE analysis - categories prevent tunnel vision and help you explore ALL potential root causes (Study Method, Time Management, Concept Gaps, Exam Technique, External Factors), not just the obvious ones',
        'To confuse yourself with too many options',
        'Categories are not important - just list any causes randomly'
      ],
      correct: 1,
      explanation: 'Fishbone Diagram categories ensure comprehensive root cause analysis. Without categories, you might focus on ONE obvious cause ("I did not study enough") and miss OTHER root causes (exam anxiety, poor time management during exam, weak specific topics, calculation errors). Categories force exploration: Study Method (memorization vs understanding?), Time Management (ran out of time?), Concept Gaps (weak in Cost Accounting?), Exam Technique (misread questions?), External Factors (stress, health issues?). For EACH category, brainstorm 3-5 potential causes. Then gather evidence to identify which are actual root causes. Example: 80% of errors were in "application questions" (Study Method category), not time management or concept gaps. In B.Com problem-solving, systematic categorization > random brainstorming.'
    },
    {
      id: 28,
      question: 'You are a Junior Marketing Analyst. Customer complaints tripled (50 → 150/month). You analyze 150 complaints and find: 80 (53%) = "Product arrived damaged," 40 (27%) = "Wrong item sent," 20 (13%) = "Slow delivery," 10 (7%) = "Rude service." What does this reveal?',
      options: [
        'All causes are equally important - address all simultaneously',
        '53% of complaints are packaging/damage issues - this is the PRIMARY root cause. Focus mitigation here first (investigate packaging, warehouse processes, shipping methods).',
        'Customer service is the main problem',
        'These are random issues with no pattern'
      ],
      correct: 1,
      explanation: 'Evidence gathering reveals PRIMARY root causes. 53% of complaints = "Product arrived damaged" (packaging issue). 27% = "Wrong item sent" (warehouse error). 13% = "Slow delivery" (logistics). 7% = "Rude service" (customer service). Prioritize: Fix packaging FIRST (addresses 53% of complaints). Then warehouse processes (27%). Then logistics (13%). Then customer service (7%). Without data, you might assume "customer service is the problem" and hire more reps (addresses only 7% of complaints). In B.Com business analysis, gather evidence (analyze complaints, interview stakeholders, inspect processes) to identify PRIMARY root causes. Focus resources on high-impact causes (53%), not low-impact ones (7%).'
    },
    {
      id: 29,
      question: 'You hypothesize: "I fail exams because I memorize without understanding." Before implementing a fix (concept-based learning for 4 weeks), what should you do?',
      options: [
        'Immediately start concept-based learning - the hypothesis is obviously correct',
        'TEST the hypothesis: Take a practice exam and try to explain WHY each answer is correct (not just WHAT). If you struggle to explain WHY, hypothesis is confirmed. If not, hypothesis is wrong.',
        'Ask your friends if they think your hypothesis is correct',
        'Ignore the hypothesis and try a different fix'
      ],
      correct: 1,
      explanation: 'Always TEST your root cause hypothesis before implementing fixes. Why? You might be wrong. If you assume "memorization" is the issue but the REAL root cause is "calculation errors," you will waste 4 weeks on concept-based learning (which you already have) instead of fixing calculations. Testing: Take a practice exam. For each question, explain WHY the answer is correct. If you struggle to explain WHY (even though you know WHAT), hypothesis is confirmed (weak understanding). If you explain WHY perfectly but still get wrong answers, hypothesis is WRONG (maybe root cause is calculation accuracy, time management, or exam anxiety). In B.Com, verify root causes with evidence before investing time/money in fixes. Testing prevents wasting resources on wrong solutions.'
    },
    {
      id: 30,
      question: 'After Root Cause Analysis, you discover: "I fail because I memorize formulas without understanding concepts." You implement a fix (concept-based learning). Next exam: 78% (up from 42%). What should you do now?',
      options: [
        'Celebrate and move on - problem is solved',
        'MONITOR results: Track next 2-3 exams to ensure problem does not recur. If it recurs, your root cause analysis was incomplete (there might be additional root causes like exam anxiety or time management).',
        'Go back to memorization - it is easier',
        'Stop studying - you already proved you can score 78%'
      ],
      correct: 1,
      explanation: 'Root Cause Analysis is iterative, not one-time. You scored 78% (great!), but MONITOR next 2-3 exams to ensure the problem does not recur. If Exam 3: 75%, Exam 4: 80% → Problem is SOLVED permanently. Root cause fix worked. If Exam 3: 50% (problem recurs) → Your root cause analysis was INCOMPLETE. There might be additional root causes (exam anxiety, time management, specific topic gaps). Go back to Fishbone Diagram, investigate other categories. Example: You fixed Study Method (memorization → understanding), but you still have Time Management issues (running out of time during exams). Fix that too. In B.Com, recurring problems after "fixing" them signal incomplete root cause analysis. Monitor, iterate, and refine until the problem is permanently solved.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Critical thinking master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong problem-solving skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review critical thinking techniques!', xpReward: 100 }
  }
};
