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
      scenario: 'You are in a Business Law class debate. Your classmate Rohan argues: "We should not regulate cryptocurrency because my uncle invested in Bitcoin and made ₹10 lakhs. Government regulation will kill innovation." You sense something is wrong with this argument, but you cannot articulate WHY. You stay silent. Later, the professor dismantles Rohan is argument in 30 seconds, pointing out logical fallacies you missed. You realize: You cannot think critically if you cannot identify flawed reasoning. In B.Com, whether analyzing financial reports, evaluating business proposals, or debating economic policies, logical reasoning separates A-grade students from average ones.',
      problemExplanation: [
        '🎯 Fallacy Blindness: You cannot spot logical fallacies (ad hominem, straw man, false dichotomy, appeal to emotion). Rohan used "anecdotal evidence" (uncle is success ≠ universal truth) and "slippery slope" (regulation ≠ killing ALL innovation). You missed both. Result: You accept flawed arguments as valid, make poor decisions based on bad logic.',
        '🏗️ Cannot Identify Argument Structure: You do not see: Premise 1 (Uncle made money), Premise 2 (Regulation kills innovation), Conclusion (Do not regulate). You hear it as one blob of words. Without structure, you cannot evaluate if the conclusion FOLLOWS from the premises. This is why you struggle with case studies and essay questions.',
        '😢 Emotional Reasoning Overrides Logic: Rohan is argument SOUNDS convincing because it appeals to emotion (innovation! freedom! success!). Your brain likes the story, so you accept it. But feelings ≠ facts. In Financial Management, emotional reasoning = bad investment decisions. In exams, emotional reasoning = wrong answers.',
        '📊 Cannot Evaluate Evidence Quality: Rohan cited ONE anecdote (uncle). Is this strong evidence? NO. Sample size = 1, no data on failures, no comparison to regulated markets. But you did not question it. In B.Com, you will analyze financial statements, market research, business proposals. If you cannot evaluate evidence quality, you will be manipulated by bad data.',
        '🔄 Confusing Correlation with Causation: Rohan implied: Crypto success → No regulation needed. But correlation ≠ causation. Maybe uncle succeeded DESPITE lack of regulation, not BECAUSE of it. This fallacy appears in Business Statistics, Economics, and Marketing. Miss it = fail exams.',
        '🚫 No Framework for Evaluation: You rely on "gut feeling" to judge arguments. Sometimes you are right (luck), often you are wrong (no system). You need a FRAMEWORK: (1) Identify premises and conclusion, (2) Check if conclusion follows logically, (3) Verify premises are true, (4) Spot fallacies. Without this, you are guessing.'
      ],
      solutionApproach: [
        '🧩 The Argument Anatomy Framework: Every argument has: (1) PREMISES (evidence/reasons), (2) CONCLUSION (claim). Practice: "Bitcoin is decentralized [Premise 1]. Decentralization prevents fraud [Premise 2]. Therefore, Bitcoin is fraud-proof [Conclusion]." Now evaluate: Does the conclusion FOLLOW? (Is decentralization sufficient to prevent ALL fraud?) Are premises TRUE? (Has Bitcoin had fraud cases?) This framework works for ANY argument.',
        '🚨 The Fallacy Detector Toolkit: Learn the Top 5 fallacies in B.Com contexts: (1) Ad Hominem (attack person, not argument), (2) Straw Man (misrepresent opponent is view), (3) False Dichotomy (only 2 options when more exist), (4) Appeal to Emotion (feelings replace facts), (5) Anecdotal Evidence (one story ≠ proof). Memorize these. Practice spotting them in news, ads, debates.',
        '✅ The VALID vs SOUND Test: VALID = If premises are true, conclusion MUST follow (structure is correct). SOUND = Valid AND premises are actually true (structure + truth). Example: "All B.Com students are geniuses [Premise]. You are a B.Com student [Premise]. Therefore, you are a genius [Conclusion]." VALID structure (conclusion follows), but NOT SOUND (first premise is false). Always check BOTH.',
        '📈 Evidence Quality Checklist: When evaluating evidence, ask: (1) Sample size (1 anecdote or 1000 data points?), (2) Source credibility (peer-reviewed study or random blog?), (3) Bias (who funded the research?), (4) Recency (2023 data or 1990 data?), (5) Relevance (does this evidence support THIS claim?). Use this for financial analysis, market research, case studies.',
        '🔬 The "So What?" Test: After hearing an argument, ask: "So what? Why does this matter?" If the conclusion does not follow or the evidence is weak, the argument fails. Example: "My friend got a job without a degree. So what? Does this mean degrees are useless?" NO - one case ≠ trend. This test prevents you from accepting weak arguments.',
        '💪 Practice Daily: Find 1 argument daily (news article, ad, social media post). Break it down: What are the premises? What is the conclusion? Is it valid? Is it sound? Are there fallacies? This 5-minute daily practice will make you a logical reasoning expert in 30 days.'
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
          question: 'Your professor argues: "All successful entrepreneurs dropped out of college. Mark Zuckerberg dropped out. Therefore, you should drop out to become successful." What is wrong with this argument?',
          options: [
            'Nothing - it is logically sound',
            'The first premise is false (not ALL successful entrepreneurs dropped out), making it unsound',
            'The conclusion is unpopular',
            'It uses too many examples'
          ],
          correct: 1,
          explanation: 'The argument is VALID in structure (if premises were true, conclusion would follow), but UNSOUND because the first premise is FALSE. Reality: Most successful entrepreneurs (Ratan Tata, Mukesh Ambani, Narayana Murthy) DID complete their education. The argument cherry-picks one example (Zuckerberg) and generalizes falsely. This is also "Survivorship Bias" - we hear about dropouts who succeeded, not the millions who failed. In B.Com, always check: Are the premises ACTUALLY true? Valid structure + false premises = unsound argument = reject it.'
        },
        {
          id: 2,
          question: 'During a Business Ethics debate, Arjun says: "Professor Mehta is argument about CSR is wrong because she has never run a business." What fallacy is this?',
          options: [
            'Straw Man',
            'Ad Hominem (attacking the person, not the argument)',
            'False Dichotomy',
            'Appeal to Emotion'
          ],
          correct: 1,
          explanation: 'This is Ad Hominem - attacking Professor Mehta is credentials (never run a business) instead of addressing her ARGUMENT about CSR. Why it is flawed: Her lack of business experience does not automatically make her argument wrong. You must evaluate the ARGUMENT itself (is her reasoning sound? is her evidence strong?), not her background. In B.Com, you will encounter this in group projects ("You are just a 2nd year, what do you know?") and job interviews. Always respond: "Let us focus on the argument, not the person." Evaluate ideas on merit, not credentials.'
        },
        {
          id: 3,
          question: 'Your classmate argues: "The government wants to regulate fintech. So they want to completely ban all digital payments and take us back to cash-only economy!" What fallacy is this?',
          options: [
            'Ad Hominem',
            'Straw Man (misrepresenting the opposing view to attack it)',
            'Anecdotal Evidence',
            'Appeal to Authority'
          ],
          correct: 1,
          explanation: 'This is Straw Man - your classmate MISREPRESENTED the government is position. Government said "regulate fintech" (set rules, ensure safety), NOT "ban all digital payments." By exaggerating to an extreme ("cash-only economy"), they made the position easier to attack. This fallacy is common in B.Com debates and case studies. How to spot it: Ask "Did they actually say that, or are you exaggerating?" How to counter: "The proposal is for regulation, not a complete ban. Let us discuss the actual policy, not an extreme version of it." Always address the REAL argument, not a distorted version.'
        },
        {
          id: 4,
          question: 'You are analyzing a business proposal that says: "Either we invest ₹50 lakhs in this marketing campaign, or our sales will drop to zero." What is the logical flaw?',
          options: [
            'The numbers are too specific',
            'False Dichotomy - presents only 2 extreme options when many alternatives exist',
            'It is too pessimistic',
            'The conclusion is unclear'
          ],
          correct: 1,
          explanation: 'This is False Dichotomy - presenting only 2 EXTREME options (invest ₹50L OR sales drop to ZERO) when many alternatives exist. Reality: You could invest ₹20L (smaller campaign), improve product quality, optimize pricing, enhance customer service, use organic marketing, etc. This fallacy pressures you into a binary choice to manipulate your decision. In B.Com, you will see this in: Business proposals ("Invest now or lose the opportunity forever"), Career advice ("Do MBA or you will not get promoted"), Financial decisions ("Buy insurance or risk bankruptcy"). Always ask: "What other options exist?" Reject false dichotomies.'
        },
        {
          id: 5,
          question: 'A financial advisor says: "This mutual fund returned 40% last year. The fund manager is highly experienced and well-respected. Therefore, you should invest all your savings here." Is this argument sound?',
          options: [
            'Yes - it has good evidence and a clear conclusion',
            'No - past performance ≠ future results, and appeal to authority (respected manager) does not guarantee returns. Need more evidence.',
            'Yes - experienced managers always deliver good returns',
            'No - because 40% is too high to be true'
          ],
          correct: 1,
          explanation: 'This argument is UNSOUND for multiple reasons: (1) Post Hoc Fallacy: "It returned 40% last year, so it will return 40% this year" - past performance ≠ future results. (2) Appeal to Authority: "Manager is respected" ≠ guaranteed returns. Credentials do not eliminate risk. (3) Missing critical evidence: What is the fund is risk profile? Expense ratio? Market conditions? Diversification? In B.Com Financial Management, you learn: Evaluate investments on fundamentals (risk, return, diversification), not past performance or manager reputation alone. Always demand: Risk assessment, fee structure, market analysis, diversification strategy. Logical reasoning = better financial decisions.'
        }
      ]
    },
    challenge: {
      title: 'Logical Reasoning Challenge',
      description: 'Develop logical analysis skills',
      contexts: {
        academic: {
          title: 'Academic Logic Mastery',
          description: 'Your Business Economics professor assigns a case study: "Should India adopt Universal Basic Income (UBI)?" You must write a 1500-word argumentative essay evaluating 3 scholarly articles (2 pro-UBI, 1 anti-UBI). Your grade depends on your ability to identify logical fallacies, evaluate evidence quality, and build a sound argument. Due in 5 days.',
          instructions: [
            '1. Read and Annotate (Day 1, 3 hours): Read all 3 articles. For EACH argument, highlight: (a) Premises (what evidence do they provide?), (b) Conclusion (what are they claiming?), (c) Potential fallacies (mark with ❌). Use the Argument Anatomy Framework. Example: Article 1 claims "UBI will eliminate poverty [Conclusion] because Finland trial showed positive results [Premise]." Mark this - is one country is trial enough evidence?',
            '2. Evaluate Each Argument (Day 2, 2 hours): For each article, apply the VALID vs SOUND test. Article 1: Is it VALID? (Does the conclusion follow from premises?) Is it SOUND? (Are the premises actually true? Is Finland trial representative of India?) Use the Evidence Quality Checklist: Sample size, source credibility, bias, recency, relevance. Write notes: "Article 1: Valid structure, but premise is weak (Finland ≠ India, different economies)."',
            '3. Spot Fallacies (Day 2, 1 hour): Go through each article looking for the Top 5 fallacies. Article 2 (anti-UBI) says: "UBI supporters are idealistic dreamers who do not understand economics." Mark: Ad Hominem (attacking supporters, not the argument). Article 3 says: "Either we implement UBI, or poverty will never end." Mark: False Dichotomy (many anti-poverty programs exist). Document all fallacies with examples.',
            '4. Build Your Argument (Day 3, 2 hours): Structure your essay using sound logic. Introduction: State your position (support/oppose UBI). Body Paragraph 1: Present strongest pro-UBI argument (valid + sound). Body Paragraph 2: Present strongest anti-UBI argument. Body Paragraph 3: Evaluate which argument is MORE sound (better evidence, fewer fallacies). Conclusion: Your reasoned position based on logical analysis. Use the framework: Clear premises → Logical structure → Sound conclusion.',
            '5. Strengthen Your Evidence (Day 4, 1.5 hours): For YOUR argument, ensure: (1) Sample size is adequate (cite multiple studies, not one), (2) Sources are credible (RBI reports, peer-reviewed journals, not blogs), (3) Evidence is recent (2020+ data, not 1990s), (4) You address counterarguments (show you considered opposing views). This makes your argument SOUND and defensible.',
            '6. Peer Review (Day 4, 1 hour): Have a classmate read your essay. Ask them: "Can you identify my premises and conclusion? Do you see any fallacies in my reasoning? Is my evidence strong?" If they spot flaws, revise. Fresh eyes catch logical errors you miss. This is how you build bulletproof arguments.',
            '7. Final Polish (Day 5, 1 hour): Read your essay aloud. Check: (1) Is each paragraph is conclusion supported by sound premises? (2) Did you avoid fallacies? (3) Is your evidence high-quality? (4) Does your final conclusion follow logically from your analysis? Make final tweaks. Submit with confidence - you used logical reasoning, not just opinion.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Cherry-picking evidence: Only citing studies that support YOUR view, ignoring contradictory evidence. Result: Unsound argument, professor docks points. Solution: Address counterarguments honestly, then explain why your position is stronger.',
            '• Emotional reasoning: "UBI feels like the right thing to do, so it must work." Result: Feelings ≠ facts, weak argument. Solution: Base your position on DATA and LOGIC, not emotions.',
            '• Missing fallacies in sources: Accepting articles at face value without checking for logical flaws. Result: You build YOUR argument on flawed foundations. Solution: Evaluate EVERY source for fallacies before citing it.',
            '• Weak evidence: Citing one anecdote or outdated study. Result: Your argument is easy to dismantle. Solution: Use multiple recent, credible sources with adequate sample sizes.',
            '• No clear structure: Rambling essay without clear premises → conclusion flow. Result: Professor cannot follow your logic. Solution: Each paragraph: State premise → Provide evidence → Draw mini-conclusion. Build systematically.'
          ],
          successCriteria: [
            '✅ You identify 5+ logical fallacies across the 3 articles (shows critical reading)',
            '✅ Your essay has a clear argument structure (premises → logical flow → sound conclusion)',
            '✅ You use high-quality evidence (multiple sources, recent data, credible sources)',
            '✅ You address counterarguments fairly (shows intellectual honesty)',
            '✅ Your argument is BOTH valid and sound (structure + truth)',
            '✅ You receive a grade of 80%+ with feedback: "Excellent logical reasoning and critical analysis"',
            '✅ You can defend your position in class discussion without relying on emotions',
            '✅ You feel confident evaluating ANY argument in future B.Com courses'
          ]
        },
        professional: {
          title: 'Professional Logic Excellence',
          description: 'You are a Financial Analyst intern. Your manager asks you to evaluate a business proposal: "Company X wants us to invest ₹1 crore in their AI-powered stock trading platform. They claim 60% annual returns with zero risk." Your manager says: "Analyze this proposal. Is it sound? Present your findings to the partners tomorrow." Your logical reasoning will determine if the firm invests or rejects.',
          instructions: [
            '1. Read the Proposal Critically (Day 1, 2 hours): Read the 20-page proposal. For EVERY claim, ask: Where is the evidence? Example: "60% annual returns" - based on what data? How many years? What market conditions? "Zero risk" - is this even possible? (Spoiler: NO investment is zero risk.) Highlight every claim that needs evidence. Use the Argument Anatomy Framework to identify their premises and conclusions.',
            '2. Apply the VALID vs SOUND Test (Day 1, 1 hour): Break down their main argument. Premise 1: "Our AI model has 95% accuracy." Premise 2: "High accuracy = high returns." Conclusion: "Invest ₹1 crore for 60% returns." Is this VALID? (Does high accuracy guarantee high returns? NO - market conditions, execution, competition matter.) Is this SOUND? (Is 95% accuracy claim true? Need to verify.) Document: "Argument is INVALID - conclusion does not follow from premises."',
            '3. Spot Fallacies (Day 1, 1.5 hours): Go through the proposal looking for red flags. Fallacy 1: "Our CEO is an IIT graduate and ex-Goldman Sachs analyst" (Appeal to Authority - credentials ≠ guaranteed success). Fallacy 2: "We had one client who made ₹50 lakhs in 3 months" (Anecdotal Evidence - one case ≠ proof). Fallacy 3: "Either invest now or miss this once-in-a-lifetime opportunity" (False Dichotomy + Urgency manipulation). Document all fallacies with page numbers.',
            '4. Evaluate Evidence Quality (Day 1, 1 hour): Use the 5-Question Evidence Test for their claims. "60% returns" - Sample size? (They cite 1 year of data = insufficient.) Source? (Their own backtest = biased.) Recency? (2022 bull market data = not representative of bear markets.) Bias? (They profit if you invest = conflict of interest.) Relevance? (Backtests ≠ real trading.) Verdict: WEAK evidence. Document this.',
            '5. Build Your Counter-Analysis (Day 2, 2 hours): Create a presentation for partners. Slide 1: "Proposal Claims vs Reality." Slide 2: "Logical Fallacies Identified" (list 5+ with examples). Slide 3: "Evidence Quality Issues" (weak sample size, bias, no independent verification). Slide 4: "Risk Assessment" (what they did NOT disclose: market risk, execution risk, regulatory risk). Slide 5: "Recommendation: REJECT" (explain why the argument is unsound). Use clear, logical structure.',
            '6. Prepare for Pushback (Day 2, 1 hour): Partners might challenge you: "But the CEO is from Goldman Sachs!" Your response: "Credentials are valuable, but they do not eliminate risk. We need independent verification of their 60% return claim and a clear risk disclosure." Anticipate 5 questions partners might ask. Prepare logical, evidence-based responses. Do NOT rely on gut feeling - use your analysis.',
            '7. Present Your Findings (Day 3): Walk partners through your logical analysis. Start: "I evaluated this proposal using logical reasoning and evidence quality frameworks. Here is what I found..." Present fallacies, evidence gaps, and risks systematically. End: "Based on this analysis, I recommend we REJECT this proposal and request: (1) Independent audit of returns, (2) 3+ years of data, (3) Clear risk disclosure. If they provide these, we can re-evaluate." Logical, professional, defensible.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accepting claims at face value: "They said 60% returns, so it must be true." Result: Firm loses ₹1 crore. Solution: Verify EVERY claim with evidence.',
            '• Appeal to authority bias: "The CEO is from IIT/Goldman, so the proposal must be good." Result: Credentials ≠ sound business model. Solution: Evaluate the PROPOSAL, not the credentials.',
            '• Ignoring missing information: They did not disclose risks, you did not ask. Result: Hidden risks materialize, firm suffers. Solution: Ask: "What are they NOT telling us?"',
            '• Emotional decision-making: "This sounds exciting and innovative!" Result: Excitement ≠ sound investment. Solution: Base decisions on LOGIC and DATA, not feelings.',
            '• No systematic framework: Relying on gut feeling to evaluate proposals. Result: Inconsistent, unreliable analysis. Solution: Use the Argument Anatomy + Evidence Quality frameworks EVERY time.'
          ],
          successCriteria: [
            '✅ You identify 5+ logical fallacies in the proposal (Appeal to Authority, Anecdotal Evidence, False Dichotomy, etc.)',
            '✅ You evaluate evidence quality systematically (sample size, bias, recency, relevance)',
            '✅ You present a clear logical analysis to partners (structured, evidence-based)',
            '✅ Partners agree with your recommendation (your logic is persuasive)',
            '✅ The firm avoids a bad investment (logical reasoning = saved ₹1 crore)',
            '✅ Your manager gives feedback: "Excellent critical thinking and due diligence"',
            '✅ You are trusted with future high-stakes analysis (reputation as logical thinker)',
            '✅ You feel confident evaluating ANY business proposal logically'
          ]
        },
        personal: {
          title: 'Personal Logic Application',
          description: 'Your friend Rohan is considering dropping out of B.Com to "pursue his passion" in photography. He argues: "Steve Jobs dropped out and became a billionaire. College is a waste of time. I should follow my passion now." You sense flaws in his reasoning, but he is emotional and defensive. You need to help him think logically without damaging your friendship.',
          instructions: [
            '1. Listen Without Judging (Day 1, 1 hour conversation): Meet Rohan. Let him explain his reasoning fully. Do NOT interrupt with "That is a bad idea!" Listen 80%, talk 20%. Take mental notes of his arguments: "Steve Jobs dropped out [Premise]. Jobs became successful [Premise]. Therefore, I should drop out [Conclusion]." Also note: Is he reasoning logically, or is emotion driving this? (Likely emotion: frustration with studies, fear of missing out on passion.)',
            '2. Identify the Logical Flaws (Day 1, 30 mins alone): Analyze Rohan is argument privately. Fallacy 1: Survivorship Bias (we hear about Jobs who succeeded, not millions of dropouts who failed). Fallacy 2: False Analogy (Rohan ≠ Steve Jobs - different contexts, resources, timing). Fallacy 3: False Dichotomy ("Either drop out OR waste time" - what about pursuing photography WHILE completing B.Com?). Write these down. You will present them gently, not aggressively.',
            '3. Ask Socratic Questions (Day 2, 1 hour conversation): Do NOT tell Rohan "You are wrong." Instead, ask questions that lead him to discover the flaws himself. "How many people drop out vs how many succeed like Jobs?" (Survivorship Bias.) "What resources did Jobs have that you might not?" (False Analogy.) "Could you pursue photography part-time while finishing B.Com?" (False Dichotomy.) Socratic method = he discovers flaws himself = more likely to change his mind.',
            '4. Present Alternative Evidence (Day 2, during conversation): Share data gently: "I read that 90% of dropouts do not achieve their goals, while 70% of graduates have stable careers. What if you finish B.Com (2 years left) AND build your photography portfolio simultaneously? That way, you have a safety net." Use the Evidence Quality Checklist: Provide credible sources (studies, not anecdotes), recent data, large sample sizes. Logic + empathy = persuasive.',
            '5. Help Him Build a Sound Argument (Day 3, 1 hour): If he still wants to pursue photography, help him make a LOGICAL plan, not an emotional one. Ask: "What are your premises? (1) I am passionate about photography. (2) I can build a career in it. Are these TRUE? How do you know?" Help him test Premise 2: "Can you freelance for 3 months while in college to test if you can make ₹20K/month? If yes, you have evidence. If no, you need more preparation." Turn emotion into logic.',
            '6. Respect His Decision (Day 3): After presenting logical analysis, respect his choice. Say: "I have shared my logical concerns and the data. Ultimately, it is your decision. I will support you either way, but I want you to decide based on LOGIC, not just emotion." This preserves your friendship while helping him think critically. You cannot force logic on someone, but you can offer it.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Being judgmental: "You are being stupid. Dropping out is a terrible idea." Result: Rohan gets defensive, stops listening. Solution: Ask questions, do not attack.',
            '• Using your own anecdotes: "My cousin dropped out and failed, so you will too." Result: Anecdotal evidence fallacy - you are committing the same error Rohan is making. Solution: Use DATA and STUDIES, not personal stories.',
            '• Ignoring emotions: "Let us just look at the facts." Result: Rohan feels dismissed, logic will not penetrate. Solution: Acknowledge feelings first ("I can see you are passionate about photography"), THEN introduce logic.',
            '• Forcing your conclusion: "You MUST stay in college." Result: Rohan rebels against being told what to do. Solution: Help him reach a LOGICAL conclusion himself through Socratic questioning.',
            '• No alternative options: Presenting only "Stay in college" vs "Drop out." Result: False dichotomy. Solution: Offer third options: "Finish B.Com + build photography portfolio simultaneously."'
          ],
          successCriteria: [
            '✅ You identify 3-5 logical fallacies in Rohan is reasoning (Survivorship Bias, False Analogy, False Dichotomy)',
            '✅ You use Socratic questions (not lectures) to help him discover flaws himself',
            '✅ You provide high-quality evidence (studies, data) not anecdotes',
            '✅ You help him build a LOGICAL plan (test photography income for 3 months) instead of an emotional one',
            '✅ Rohan says: "You helped me think this through logically. I did not consider those points"',
            '✅ He makes a more informed decision (stay in college + pursue photography, or drop out with a tested plan)',
            '✅ Your friendship is preserved (you helped without judging)',
            '✅ You feel confident using logical reasoning to help others make better decisions'
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
      scenario: 'Your B.Com group project is failing. Deadline: 5 days. Current status: 40% complete. The team is panicking. Priya says: "We need to work 12 hours daily!" Arjun says: "We need better tools!" Neha says: "We need to ask the professor for extension!" Everyone is proposing solutions, but NOBODY has asked: "What is the ACTUAL problem?" You spent 2 hours in a chaotic meeting with zero progress. Why? Because you are treating symptoms (not enough time, wrong tools), not diagnosing the ROOT PROBLEM. Without proper problem analysis, you will waste 5 days on wrong solutions and still fail.',
      problemExplanation: [
        '🏃 Solution Jumping: Your team skipped problem analysis and jumped straight to solutions. "Work 12 hours daily!" (treating symptom: time pressure, not root cause). "Get better tools!" (assuming tools are the problem, without verifying). This is like a doctor prescribing medicine without diagnosing the disease. Result: Wasted effort, problem persists.',
        '🎯 Vague Problem Definition: If you ask your team "What is the problem?" they say: "The project is not getting done." This is TOO VAGUE. Is it unclear requirements? Poor task division? Skill gaps? Communication issues? Vague problem = vague solutions. You need SPECIFICITY: "The problem is: We have no clear task ownership, so work is duplicated and critical sections are missed."',
        '🌳 Symptoms vs Root Causes: Your team sees SYMPTOMS (project is 40% done, deadline approaching) but not ROOT CAUSES (Why is it 40%? Is it unclear roles? Procrastination? Skill gaps? Poor communication?). Treating symptoms = temporary relief. Treating root causes = permanent fix. Example: "Low grades" is a symptom. Root cause might be: poor study method, time management, or concept gaps.',
        '🧩 No Problem Breakdown: The "project is failing" is a COMPLEX problem with multiple components. Your team treats it as one blob. Result: Overwhelm and paralysis. Solution: Break it down: (1) Requirements clarity issue? (2) Task division issue? (3) Skill gap issue? (4) Communication issue? Solve each part systematically, not the whole mess at once.',
        '📊 No Data Gathering: Your team is making decisions based on FEELINGS ("I feel like we are behind") not DATA ("We completed 12/30 tasks, 3 are blocked due to unclear requirements"). Without data, you cannot diagnose accurately. It is like a doctor diagnosing without tests - guessing, not analyzing.',
        '🔄 Recurring Problems: This is the 3rd group project where your team has the same crisis. Why? Because you never did ROOT CAUSE analysis. You applied band-aid fixes ("work harder!") instead of systemic solutions ("define roles and check-ins upfront"). Problems recur when you treat symptoms, not causes.'
      ],
      solutionApproach: [
        '🎯 The Problem Definition Framework: Use the 5W+H method to define problems precisely. WHAT is happening? (Project is 40% done.) WHERE is it happening? (Research and analysis sections are incomplete.) WHEN did it start? (After Week 2, when roles became unclear.) WHO is affected? (Entire team.) WHY is it happening? (Unclear task ownership.) HOW severe is it? (Critical - 5 days to deadline.) This specificity = actionable insights.',
        '🔬 The 5 Whys Technique: Start with the symptom, ask "Why?" 5 times to reach the root cause. Example: Problem: "Project is behind schedule." Why? "Tasks are not completed on time." Why? "People do not know what they are responsible for." Why? "We did not define roles clearly." Why? "We assumed everyone knew their part." Why? "We did not have a kickoff meeting to assign roles." ROOT CAUSE: No role definition process. Fix THIS, not the symptom.',
        '🧩 Problem Decomposition: Break complex problems into manageable parts using a tree structure. Main Problem: "Project failing." Sub-problems: (1) Requirements unclear (20% of issue), (2) Poor task division (30%), (3) Communication gaps (30%), (4) Skill gaps (20%). Now solve each sub-problem separately. This prevents overwhelm and enables systematic progress.',
        '📈 Data-Driven Diagnosis: Gather FACTS before proposing solutions. Create a task tracker: 30 total tasks, 12 completed, 8 in progress, 10 not started. Interview team members: "What is blocking you?" Analyze: 5 tasks blocked due to unclear requirements, 3 due to skill gaps, 2 due to dependencies. This DATA reveals the real problems, not guesses.',
        '🔍 Symptoms vs Root Causes Matrix: List all symptoms (project behind, team stressed, quality low). For EACH symptom, ask: "What is causing this?" Example: Symptom "Low quality work" → Root Cause "No quality standards defined + No peer review process." Always drill down from symptoms to causes. Fix causes, symptoms disappear.',
        '💡 The "Is This the Real Problem?" Test: Before solving, ask: "If we fix THIS, will the project succeed?" If no, you have not found the real problem yet. Example: "If we work 12 hours daily, will we succeed?" Maybe not - if the problem is unclear requirements, more hours = more wasted effort. Keep digging until you find the REAL problem.'
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
          question: 'Your B.Com group project is behind schedule. Your team says: "We need to work 12 hours daily to catch up!" Before implementing this solution, what should you do FIRST?',
          options: [
            'Agree and start working 12 hours immediately',
            'Use the 5 Whys to identify the ROOT CAUSE of why you are behind (unclear roles? skill gaps? communication issues?)',
            'Ask the professor for an extension',
            'Blame the team member who is slowest'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - diagnose BEFORE you solve. "Working 12 hours daily" treats the SYMPTOM (time pressure), not the ROOT CAUSE. Apply 5 Whys: "Why are we behind?" → "Tasks not done on time." → "Why?" → "Unclear who is responsible." → "Why?" → "No role definition." ROOT CAUSE: No role clarity. Solution: 1-hour meeting to define roles + task matrix (fixes root cause) vs 12-hour days (exhausting, does not fix the real problem). In B.Com, 80% of project failures come from solving the wrong problem. Always analyze first, solve second.'
        },
        {
          id: 7,
          question: 'You scored 45% in your Cost Accounting exam. Which approach uses proper problem analysis?',
          options: [
            '"I need to study harder next time" (vague solution)',
            'Use 5W+H: WHAT happened? (Failed variance analysis questions.) WHY? (Memorized formulas without understanding concepts.) ROOT CAUSE: Passive study method. SOLUTION: Switch to Feynman Technique + practice problems.',
            '"The exam was too hard" (blame external factors)',
            '"I will study 10 hours daily" (treat symptom with more time)'
          ],
          correct: 1,
          explanation: 'Option 2 demonstrates systematic problem analysis using 5W+H to define the problem precisely, then 5 Whys to find the root cause (passive study method), then proposing a targeted solution (Feynman Technique). Option 1 is vague (what does "study harder" mean?). Option 3 is blame-shifting (does not help you improve). Option 4 treats the symptom (time) not the cause (method). In B.Com, students who analyze WHY they failed (concept gaps? time management? study method?) improve 2x faster than those who just "study harder." Diagnosis > Effort.'
        },
        {
          id: 8,
          question: 'Your team identifies these issues: (A) Project is 40% complete, (B) Team is stressed, (C) Quality is low, (D) Deadline is approaching. Which are SYMPTOMS vs ROOT CAUSES?',
          options: [
            'All are root causes that need fixing',
            'A, B, C, D are all SYMPTOMS. Root causes might be: unclear roles, no quality standards, poor communication.',
            'Only D is a symptom, others are root causes',
            'They are all the same thing'
          ],
          correct: 1,
          explanation: 'Option 2 is correct. A, B, C, D are all SYMPTOMS (effects you can observe). The ROOT CAUSES (reasons WHY these symptoms exist) might be: Unclear roles (why 40% complete), No quality standards (why quality is low), Poor communication (why team is stressed), No planning (why deadline is tight). Treating symptoms = temporary relief ("Work harder!" = team more stressed). Treating root causes = permanent fix ("Define roles clearly" = progress improves, stress reduces). In B.Com problem-solving, always ask: "Is this a symptom or a cause?" Symptoms are visible effects. Causes are hidden reasons. Fix causes, symptoms disappear.'
        },
        {
          id: 9,
          question: 'You face this problem: "I cannot get a job." This problem is too complex and overwhelming. What should you do?',
          options: [
            'Give up - it is too big to solve',
            'Apply Problem Decomposition: Break into sub-problems (Resume, Skills, Applications, Interview Prep, Networking), solve each systematically',
            'Just apply to 100 companies randomly and hope for the best',
            'Wait for the perfect opportunity to come to you'
          ],
          correct: 1,
          explanation: 'Option 2 uses Problem Decomposition - breaking a complex, overwhelming problem into 5 manageable sub-problems. "Get a job" (impossible) becomes: (1) Fix resume (actionable), (2) Build skills (actionable), (3) Apply strategically (actionable), (4) Prepare for interviews (actionable), (5) Network (actionable). Now you have a SYSTEM, not chaos. Option 1 (give up) is defeatist. Option 3 (random applications) is inefficient. Option 4 (wait) is passive. In B.Com, complex problems (career planning, business analysis, project management) require decomposition. Break big problems into small parts, solve each part, make progress.'
        },
        {
          id: 10,
          question: 'Your team says: "We FEEL like we are way behind on the project." What should you do before proposing solutions?',
          options: [
            'Trust their feelings and immediately propose working longer hours',
            'Gather DATA: Quantify tasks (12/30 done), interview team members (what is blocking you?), analyze patterns (5 tasks blocked by unclear requirements)',
            'Ignore their feelings - feelings do not matter in business',
            'Tell them to stop complaining and just work harder'
          ],
          correct: 1,
          explanation: 'Option 2 is data-driven diagnosis. Feelings ("we are behind") are subjective and often inaccurate. DATA reveals the REAL problem. Quantify: 40% done (not "way behind" - you are almost half done!). Interview: 5 tasks blocked by unclear requirements (this is the bottleneck, not time). Analyze: Spending 1 hour clarifying requirements unblocks 5 tasks (high ROI). Now you have an accurate diagnosis and targeted solution. Option 1 (trust feelings) leads to wrong solutions. Option 3 (ignore feelings) is insensitive. Option 4 (work harder) treats symptoms. In B.Com business analysis, data > feelings. Always quantify before solving.'
        }
      ]
    },
    challenge: {
      title: 'Problem Analysis Challenge',
      description: 'Master systematic problem analysis',
      contexts: {
        academic: {
          title: 'Academic Problem Analysis Mastery',
          description: 'Your B.Com group project on "Financial Statement Analysis" is failing. Deadline: 5 days. Current status: 40% complete (12/30 tasks done). Team is panicking and proposing random solutions. You need to diagnose the REAL problem using systematic analysis, then propose targeted solutions that actually work.',
          instructions: [
            '1. Define the Problem Using 5W+H (Day 1, 1 hour): Call an emergency team meeting. Document: WHAT is happening? (12/30 tasks done, 8 blocked, 10 not started.) WHERE? (Research and analysis sections incomplete.) WHEN did it start? (Week 2, after we stopped daily check-ins.) WHO is affected? (All 4 members stressed.) WHY? (Unclear who owns which tasks.) HOW severe? (Critical - 30% of grade at risk.) Write this down. Now you have a PRECISE problem definition, not vague "project is failing."',
            '2. Apply the 5 Whys (Day 1, 30 mins): Start with the symptom, drill down. "Why are we at 40%?" → "Tasks not done on time." "Why?" → "People do not know their responsibilities." "Why?" → "We did not define roles clearly." "Why?" → "We assumed everyone knew their part." "Why?" → "We had no kickoff meeting with role assignment." ROOT CAUSE: No role definition process. Write this down. This is what you will FIX.',
            '3. Decompose the Problem (Day 1, 30 mins): Break "Project failing" into sub-problems. (1) Requirements Clarity: 5 tasks blocked due to unclear requirements (20% of issue). (2) Role Confusion: 8 tasks have unclear ownership (30%). (3) Communication Gaps: No daily updates, people work in silos (30%). (4) Skill Gaps: 2 tasks need Excel skills we lack (20%). Now you have 4 specific sub-problems to solve, not one overwhelming mess.',
            '4. Gather Data (Day 1, 1 hour): Interview each team member privately. "What is blocking you?" Document: Arjun - "Unclear requirements for Section 3." Priya - "Waiting for Arjun is research." Neha - "No feedback on my draft." Analyze patterns: 5 tasks blocked by unclear requirements (biggest bottleneck). 3 tasks blocked by dependencies. 2 by skill gaps. This DATA shows the priority: Fix requirements first.',
            '5. Verify Root Cause (Day 2, 30 mins): Test your diagnosis. Ask: "If we fix unclear roles and requirements, will we succeed?" Walk through: Define roles → Everyone knows their tasks → No duplication → Blockers removed → Progress accelerates. YES, this will work. You have found the REAL problem. Now propose solutions: (1) 1-hour role definition meeting, (2) Clarify requirements with professor (30 mins), (3) Daily 10-min check-ins, (4) Peer review system for quality.',
            '6. Implement Solutions (Day 2-5): Execute your targeted solutions. Day 2: Role meeting + requirements clarification. Day 3-5: Daily check-ins + execute tasks. Track progress: Are blocked tasks unblocking? Is team stress reducing? Adjust if needed. By Day 5, submit a quality project. Your systematic analysis saved the project.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Solution jumping: Proposing "work 12 hours daily" without diagnosing WHY you are behind. Result: Exhaustion, problem persists. Solution: Always diagnose first (5W+H + 5 Whys) before proposing solutions.',
            '• Vague problem definition: "The project is not going well." Result: Vague solutions that do not work. Solution: Be specific - quantify (40% done), identify blockers (unclear requirements), pinpoint timing (started Week 2).',
            '• Treating symptoms: "We are stressed" → "Let us take a break." Result: Temporary relief, problem returns. Solution: Find root cause of stress (unclear roles) and fix THAT.',
            '• No data gathering: Making decisions based on feelings ("I feel like we are behind"). Result: Inaccurate diagnosis. Solution: Quantify tasks, interview team, analyze patterns.',
            '• Ignoring patterns: This is the 3rd project with the same issue, but you never analyzed WHY. Result: Problems recur. Solution: After solving, document: "Root cause was X. Prevention: Do Y upfront next time."'
          ],
          successCriteria: [
            '✅ You define the problem precisely using 5W+H (not vague "project failing")',
            '✅ You identify the root cause using 5 Whys (unclear roles, not "lack of time")',
            '✅ You decompose the problem into 4 sub-problems and prioritize (requirements clarity = biggest bottleneck)',
            '✅ You gather data by interviewing team members and quantifying tasks',
            '✅ Your solutions are targeted (fix requirements, define roles) not generic (work harder)',
            '✅ The project is completed successfully by Day 5 (systematic analysis = success)',
            '✅ Your professor comments: "This team diagnosed and solved their issues professionally"',
            '✅ You feel confident analyzing ANY complex problem systematically in future'
          ]
        },
        professional: {
          title: 'Professional Problem Analysis Excellence',
          description: 'You are a Business Analyst intern at a consulting firm. A client (retail chain with 50 stores) reports: "Our sales dropped 20% in Q3. We need to fix this immediately." Your manager assigns you to diagnose the problem and present findings to the client in 3 days. Your problem analysis will determine the solution strategy and your credibility.',
          instructions: [
            '1. Define the Problem Using 5W+H (Day 1, 2 hours): Interview the client. WHAT happened? (Sales dropped 20% in Q3 vs Q2.) WHERE? (All stores or specific regions? Online or offline?) WHEN exactly? (July? August? September? Gradual or sudden?) WHO is affected? (All product categories or specific ones?) WHY do they think it happened? (Their hypothesis - verify later.) HOW severe? (₹2 crore revenue loss.) Document everything. Precise definition = accurate diagnosis.',
            '2. Gather Data (Day 1, 3 hours): Request: (1) Sales data by store, product category, month. (2) Customer feedback/complaints. (3) Competitor activity in Q3. (4) Marketing spend and campaigns. (5) Operational changes (new suppliers? staff changes?). Analyze the data: Which stores dropped most? (North region: -30%. South region: -10%.) Which products? (Electronics: -40%. Groceries: -5%.) When? (August specifically: -35%. July/Sept: -10%.) Patterns emerge: North region + Electronics + August = focus area.',
            '3. Apply 5 Whys (Day 1, 1 hour): Start with the specific symptom. "Why did North region electronics sales drop 40% in August?" → "Customers bought from competitors." "Why?" → "Competitors had a sale." "Why did customers not return in Sept?" → "We lost trust due to stockouts." "Why stockouts?" → "Supplier delayed shipment." "Why?" → "We did not have backup suppliers." ROOT CAUSE: Single-supplier dependency + no contingency plan. This is fixable.',
            '4. Decompose the Problem (Day 2, 1 hour): Break "20% sales drop" into sub-problems. (1) North Region Issue (40% of drop) - supplier problem. (2) Electronics Category Issue (30% of drop) - competitor pricing. (3) Customer Retention Issue (20% of drop) - lost trust from stockouts. (4) Marketing Issue (10% of drop) - low visibility in August. Now you have 4 specific problems to solve, each with different solutions.',
            '5. Verify Root Causes with Data (Day 2, 2 hours): Test your hypotheses. Supplier issue: Check delivery logs (3 delays in August = stockouts). Competitor pricing: Mystery shop competitors (they offered 15% discount in August). Customer retention: Survey customers (40% said "I went to competitor due to stockout, never came back"). Marketing: Check campaign data (August spend was 50% lower than July). Your root causes are VERIFIED with data.',
            '6. Build Your Presentation (Day 3, 2 hours): Create slides for client. Slide 1: Problem Summary (20% drop = ₹2 crore loss). Slide 2: Root Causes Identified (supplier dependency, competitor pricing, customer retention, marketing gap). Slide 3: Data Evidence (charts showing North region, August, electronics). Slide 4: Recommended Solutions (diversify suppliers, dynamic pricing, win-back campaign, increase August marketing). Slide 5: Expected Impact (recover 15% sales in Q4 = ₹1.5 crore). Logical, data-driven, actionable.',
            '7. Present with Confidence (Day 3): Walk client through your systematic analysis. Start: "We used data-driven problem analysis to identify 4 root causes of your 20% sales drop." Present each root cause with supporting data. End: "By addressing these root causes, we project 15% sales recovery in Q4. Here is the implementation plan." Client sees: You did not guess - you ANALYZED. This builds trust and credibility.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accepting client is diagnosis: "They said sales dropped due to economy." Result: You miss the real cause (supplier issues). Solution: Verify with data, do not assume.',
            '• No data gathering: Proposing solutions based on intuition. Result: Wrong solutions, client loses trust. Solution: Always gather data first (sales reports, customer feedback, competitor analysis).',
            '• Treating all symptoms equally: Spending equal effort on all regions when North region is the main issue. Result: Diluted effort. Solution: Prioritize based on data (North region = 40% of drop = focus here first).',
            '• Vague recommendations: "Improve marketing." Result: Client does not know what to do. Solution: Specific actions - "Increase August marketing spend by 50%, focus on electronics category, run win-back campaign."',
            '• No verification: Proposing root causes without data evidence. Result: Client questions your credibility. Solution: Every root cause = supporting data (delivery logs, competitor pricing, customer surveys).'
          ],
          successCriteria: [
            '✅ You define the problem precisely (20% drop, North region, electronics, August)',
            '✅ You identify 4 verified root causes with data evidence',
            '✅ You decompose the complex problem into manageable sub-problems',
            '✅ You present a data-driven analysis to the client (charts, evidence, logic)',
            '✅ Client approves your recommendations (your analysis is credible)',
            '✅ Your manager gives feedback: "Excellent problem analysis and client presentation"',
            '✅ You are assigned more high-stakes client projects (reputation as strong analyst)',
            '✅ You feel confident diagnosing ANY business problem systematically'
          ]
        },
        personal: {
          title: 'Personal Problem Analysis',
          description: 'You have been feeling unmotivated and stressed for the past 2 months. Your grades dropped from 75% to 60%. You are sleeping poorly, avoiding friends, and procrastinating on assignments. You tell yourself: "I just need to work harder." But this is treating the symptom, not diagnosing the root cause. You need systematic problem analysis to understand what is REALLY wrong.',
          instructions: [
            '1. Define the Problem Using 5W+H (Week 1, 1 hour alone): Be honest with yourself. WHAT is happening? (Grades dropped 15%, sleeping 5 hours/night, avoiding social events, procrastinating.) WHERE? (Affecting academics, health, relationships.) WHEN did it start? (2 months ago, after semester started.) WHO is affected? (You, your grades, your friendships.) WHY might this be happening? (Stress? Burnout? Unclear goals?) HOW severe? (Moderate to severe - affecting multiple life areas.) Write this down. Seeing it on paper = clarity.',
            '2. Apply 5 Whys (Week 1, 30 mins): Start with the symptom. "Why are my grades dropping?" → "I am procrastinating on assignments." "Why?" → "I feel overwhelmed by the workload." "Why overwhelmed?" → "I have no clear study schedule or priorities." "Why no schedule?" → "I did not plan my semester - just reacting to deadlines." "Why no planning?" → "I thought I could handle it like last semester (I cannot - workload increased)." ROOT CAUSE: No semester planning system for increased workload.',
            '3. Decompose the Problem (Week 1, 30 mins): Break "Feeling unmotivated and stressed" into parts. (1) Academic Problem: No study schedule, unclear priorities (40% of issue). (2) Health Problem: Poor sleep due to late-night cramming (30%). (3) Social Problem: Avoiding friends due to guilt about grades (20%). (4) Mental Health Problem: Burnout from reactive mode (10%). Now you have 4 specific areas to address, not one overwhelming "I am a mess."',
            '4. Gather Data (Week 1, 1 hour): Track your time for 3 days. How many hours studying? (4 hours, but 2 hours on phone = only 2 productive hours.) How many hours sleeping? (5-6 hours.) How many social interactions? (Zero.) What triggers procrastination? (Opening Instagram when starting assignments.) This DATA reveals patterns: You are not lazy - you are distracted and sleep-deprived. Different diagnosis = different solution.',
            '5. Identify Root Causes (Week 2, 1 hour): Analyze your data. Root Cause 1: No time-blocking system (you study reactively, not proactively). Root Cause 2: Phone addiction during study time (Instagram = 2 hours lost daily). Root Cause 3: Poor sleep hygiene (studying until 2 AM = 5-hour sleep = brain fog = poor retention). Root Cause 4: Social isolation (guilt about grades → avoid friends → more stress → worse grades = negative spiral). These are FIXABLE.',
            '6. Test Your Diagnosis (Week 2, 30 mins): Ask: "If I fix these root causes, will I feel better and perform better?" Hypothesis: Time-blocking + phone discipline + 7-hour sleep + reconnect with friends = better grades + less stress + more motivation. This makes logical sense. Now implement solutions: (1) Create weekly time-block schedule, (2) Use app blocker during study time, (3) Sleep by 11 PM (7-hour minimum), (4) Meet friends once a week (even if you feel guilty). Test for 2 weeks.',
            '7. Monitor and Adjust (Week 3-4): Track: Are grades improving? (Yes - 65% on recent test.) Sleep better? (Yes - 7 hours/night.) Less stressed? (Yes - time-blocking reduces overwhelm.) Friends reconnected? (Yes - met twice, felt supported.) Your diagnosis was CORRECT. The root causes were: No planning system, phone distraction, poor sleep, social isolation. NOT "I am lazy" or "I need to work harder." Systematic analysis = lasting improvement.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Self-blame without analysis: "I am just lazy and unmotivated." Result: You feel worse, do not fix the real problem. Solution: Analyze systematically - often the root cause is a SYSTEM issue (no schedule, poor sleep), not a character flaw.',
            '• Vague self-diagnosis: "I am stressed." Result: Vague solutions ("relax more"). Solution: Be specific - WHAT is causing stress? (Unclear priorities? Overcommitment? Poor time management?) Fix the cause.',
            '• Treating symptoms: "I will just sleep more" without addressing WHY you are sleeping poorly (late-night cramming due to no schedule). Result: Symptom returns. Solution: Fix root cause (create study schedule) and symptom disappears.',
            '• No data tracking: Relying on feelings ("I feel like I am not productive"). Result: Inaccurate diagnosis. Solution: Track time for 3 days - data reveals the truth (2 hours on phone, only 2 hours productive).',
            '• Ignoring patterns: This is the 2nd semester you felt this way, but you never analyzed WHY. Result: Problem recurs. Solution: After solving, document: "Root cause was no planning system. Prevention: Create semester schedule in Week 1 next time."'
          ],
          successCriteria: [
            '✅ You define your problem precisely using 5W+H (not vague "I am stressed")',
            '✅ You identify 3-4 root causes using 5 Whys (no planning, phone distraction, poor sleep, isolation)',
            '✅ You decompose the problem into 4 sub-problems (academic, health, social, mental health)',
            '✅ You gather data by tracking time for 3 days (reveals phone = 2 hours lost)',
            '✅ Your solutions are targeted (time-blocking, app blocker, sleep schedule) not generic ("work harder")',
            '✅ Your grades improve within 2 weeks (65% → 70%+) and stress reduces',
            '✅ You reconnect with friends and feel supported (social isolation fixed)',
            '✅ You feel confident using systematic analysis for future personal challenges'
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
      scenario: 'Your B.Com college fest needs to raise ₹5 lakhs for charity. Traditional fundraising (bake sales, donation boxes) raised only ₹50,000 last year. The committee is stuck: "Let us do another bake sale but BIGGER!" You realize: Doing the same thing expecting different results = insanity. You need CREATIVE solutions. But when you suggest "Let us do something different," everyone says: "Like what? We have always done bake sales." You are stuck in conventional thinking. Meanwhile, another college raised ₹8 lakhs with a creative approach (virtual talent show with corporate sponsorships). You need to break out of the box.',
      problemExplanation: [
        '🔒 Mental Box Trap: Your brain defaults to "what we have always done" (bake sales, donation boxes). Why? Because it is safe, familiar, and requires zero creative effort. But familiar ≠ effective. You are stuck in conventional thinking, unable to see alternatives. This happens in B.Com projects, business proposals, and career planning. "Everyone applies to Big 4, so I should too" = mental box.',
        '😨 Fear of Unconventional Ideas: When someone suggests "Let us do a virtual talent show," the committee says: "That is too risky. What if nobody participates? Let us stick to bake sales." Fear of failure kills creativity. You reject new ideas before testing them. Result: You keep using methods that do not work (bake sales = ₹50K) because they feel "safe."',
        '🎯 No Brainstorming System: Your committee meeting: Someone suggests an idea, someone else immediately criticizes it ("That will not work because..."), idea dies. Repeat. After 2 hours, you have 2 mediocre ideas. Why? You are brainstorming WRONG. Criticism during ideation kills creativity. You need: Quantity first (50 ideas), quality later (pick best 5).',
        '🧩 Cannot Combine Concepts: Creative solutions often come from COMBINING unrelated ideas. Example: Virtual (tech) + Talent Show (entertainment) + Corporate Sponsorships (business) = ₹8 lakhs. But your brain thinks in silos: "Fundraising is bake sales. Tech is separate. Business is separate." You cannot connect dots across domains.',
        '🚫 Assumption Blindness: Your committee assumes: "Students will only donate small amounts." "Corporates will not sponsor college events." "Virtual events do not work." These assumptions are UNTESTED. Maybe students WOULD donate ₹500 if the cause is compelling. Maybe corporates WOULD sponsor for brand visibility. Challenge assumptions = unlock creativity.',
        '📏 Conventional Thinking Dominates: In B.Com, you are trained to follow rules, use proven methods, avoid risks. This is good for accounting (follow GAAP standards), bad for innovation. When you face a problem that traditional methods cannot solve (fundraising, career differentiation, business innovation), conventional thinking fails. You need creative problem-solving skills.'
      ],
      solutionApproach: [
        '🎨 The SCAMPER Framework: A systematic way to generate creative ideas. S = Substitute (What can we replace? Bake sales → Virtual event). C = Combine (What can we merge? Talent show + Auction + Sponsorships). A = Adapt (What can we adapt from other contexts? Corporate CSR events → College fundraiser). M = Modify (What can we change? Small donations → Tiered sponsorships ₹5K/₹10K/₹25K). P = Put to other use (Can we repurpose? Use college auditorium for paid workshops). E = Eliminate (What can we remove? Eliminate physical event costs → Go virtual). R = Reverse (What if we flip it? Instead of asking for donations, offer value - entertainment, networking, brand visibility).',
        '💭 Brainstorming Rules (Quantity Over Quality): Rule 1: No criticism during ideation (save evaluation for later). Rule 2: Wild ideas welcome (crazy ideas spark practical ones). Rule 3: Quantity goal (50 ideas in 30 minutes). Rule 4: Build on others ideas ("Yes, and..." not "But..."). Example: "Virtual talent show" → "Yes, and we can charge ₹100 entry fee" → "Yes, and we can get corporate sponsors for prizes" → "Yes, and we can live-stream on YouTube for ad revenue." One idea → 4 revenue streams.',
        '🔄 Lateral Thinking (Approach from New Angles): Instead of "How do we raise ₹5 lakhs?" ask: "Who ELSE needs what we can offer?" Corporates need brand visibility to Gen Z. Students need entertainment. Alumni need networking. Reframe: "How do we create an event that gives corporates visibility, students entertainment, and alumni networking - while raising ₹5 lakhs?" Now you have a multi-stakeholder solution, not just "ask for donations."',
        '🧩 Concept Combination: Take 2 unrelated ideas and merge them. Idea 1: College fest (entertainment). Idea 2: Corporate CSR (funding). Combine: "Corporate-Sponsored College Fest" (corporates fund the event, get brand visibility, we raise ₹5 lakhs). Idea 3: Add virtual component (reach 10x audience, charge ₹50 entry). Idea 4: Add alumni networking session (alumni donate + recruit). Combination = innovation.',
        '❓ Challenge Assumptions: List your assumptions, then flip them. Assumption 1: "Students will not donate much." Challenge: "What if we made it compelling? ₹100 for entertainment + charity?" Assumption 2: "Corporates will not sponsor college events." Challenge: "What if we offered brand visibility to 5000 Gen Z students?" Assumption 3: "Virtual events are boring." Challenge: "What if we made it interactive with games, prizes, live chat?" Test your assumptions - often they are wrong.',
        '🔬 The "What If?" Technique: Ask wild questions. "What if we had unlimited budget?" (Hire celebrity performer → Insight: Get a popular YouTuber for free in exchange for exposure.) "What if we could not do physical events?" (Go 100% virtual → Insight: Lower costs, higher reach.) "What if students organized it, not us?" (Crowdsource ideas → Insight: Student-led initiatives get more participation.) Wild questions = creative breakthroughs.'
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
          question: 'Your college fest committee is stuck on fundraising. Last year: bake sale raised ₹50K. This year: need ₹5 lakhs. Someone suggests: "Let us do a BIGGER bake sale!" You want to apply SCAMPER. Which is the best creative alternative?',
          options: [
            'Make more cookies and sell them at higher prices (Modify)',
            'COMBINE virtual talent show + corporate sponsorships + alumni networking + entry fees for multiple revenue streams',
            'Eliminate the bake sale completely and do nothing',
            'Substitute bake sale with another traditional fundraiser (car wash)'
          ],
          correct: 1,
          explanation: 'Option 2 uses SCAMPER is COMBINE principle most effectively - merging multiple revenue streams (talent show + sponsors + alumni + fees) to reach ₹5L goal. This is creative because it breaks the "one fundraiser" assumption. Option 1 (Modify) is incremental, not creative - bigger bake sale might raise ₹80K, not ₹5L. Option 3 (Eliminate) is not a solution. Option 4 (Substitute) replaces one traditional method with another (still conventional). In B.Com, creative solutions often come from COMBINING unrelated concepts: Tech + Finance = Fintech. Entertainment + CSR = Sponsored events. Learn to merge ideas across domains.'
        },
        {
          id: 12,
          question: 'Your team is brainstorming marketing ideas for a new product. Arjun suggests: "Let us partner with Instagram influencers." Priya immediately responds: "That will not work. Influencers are too expensive." What is wrong with this approach?',
          options: [
            'Nothing - Priya is being realistic about budget constraints',
            'Priya violated Brainstorming Rule #1: NO CRITICISM during ideation. This kills creativity and momentum.',
            'Arjun is idea was too wild and needed immediate critique',
            'The team should have voted on the idea first'
          ],
          correct: 1,
          explanation: 'Option 2 is correct. Brainstorming Rule #1: Defer judgment - NO criticism during ideation (first 30 mins). Priya is immediate "That will not work" killed the idea before it could evolve. What if the team had built on it? "Yes, and we can find micro-influencers (cheaper)" → "Yes, and we can offer product exchange instead of payment" → "Yes, and we can target college influencers (free)." One "bad" idea could have sparked 3 practical ones. Criticism during ideation = creativity death. Save evaluation for AFTER you have 50 ideas. In B.Com group projects, teams that defer judgment generate 3X more innovative solutions.'
        },
        {
          id: 13,
          question: 'You need to differentiate yourself in campus placements. Traditional approach: "Build resume, practice interviews, apply to companies." This is what ALL 200 students are doing. How can you use lateral thinking?',
          options: [
            'Do the same thing but work harder (more applications, more practice)',
            'Reframe: "What do recruiters NEED that others are not providing?" → Create a portfolio website showcasing B.Com projects with measurable impact',
            'Give up - if everyone is doing it, there is no way to stand out',
            'Copy what the top student did last year'
          ],
          correct: 1,
          explanation: 'Option 2 uses lateral thinking - reframing from "How do I compete?" to "What unique value can I offer?" Traditional: Submit resume (like 200 others). Lateral: Create portfolio website with case studies, financial models, data visualizations (only YOU have this). Recruiters need proof of skills - you are providing it proactively. This is creative differentiation. Option 1 (work harder) is not creative - more of the same. Option 3 (give up) is defeatist. Option 4 (copy) is not original. In B.Com placements, lateral thinking = standing out. Ask: "What are others NOT doing that I can do?" Create your own category.'
        },
        {
          id: 14,
          question: 'Your team assumes: "Students will not pay for college events - they expect everything free." How should you challenge this assumption creatively?',
          options: [
            'Accept the assumption - students are broke, so keep events free',
            'Test the assumption: Survey 100 students "Would you pay ₹100 for a fest with entertainment + charity + prizes?" If 70% say yes, your assumption was WRONG.',
            'Ignore students and only target corporates for funding',
            'Charge ₹500 to prove students will pay (no testing)'
          ],
          correct: 1,
          explanation: 'Option 2 is the creative approach - TEST your assumptions before accepting them as truth. Survey reveals: 70% of students WILL pay ₹100 for value (entertainment + charity + prizes). Your assumption was WRONG. Now you have a new revenue stream (2000 students × ₹100 = ₹2L) you never considered. Option 1 (accept assumption) limits creativity. Option 3 (ignore students) misses opportunity. Option 4 (no testing) is risky. In B.Com, challenge assumptions about: "Customers will not pay premium prices" (test it), "This market is saturated" (maybe not), "Traditional methods are best" (maybe not). Test assumptions = unlock creative opportunities.'
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
          explanation: 'Option 2 demonstrates concept combination - merging ideas from different domains (tech, entertainment, business, community) to create an innovative solution. Each element alone is not new, but the COMBINATION is creative. Virtual platform (tech) enables scale. Talent show (entertainment) attracts students. Corporate sponsors (business) provide funding. Alumni network (community) adds donations + recruiting. Result: ₹7.5L raised (vs ₹50K traditional). In B.Com, innovation often comes from combination: Accounting + AI = Automated auditing. Finance + Social Media = Fintech apps. Your skills + Market needs = Career opportunities. Learn to connect dots across domains.'
        }
      ]
    },
    challenge: {
      title: 'Creative Solutions Challenge',
      description: 'Develop innovative problem-solving skills',
      contexts: {
        academic: {
          title: 'Academic Creative Problem-Solving',
          description: 'Your B.Com Marketing professor assigns: "Create an innovative marketing campaign for a local business with ZERO budget." Traditional approaches (flyers, social media posts) are what everyone will do. You need a creative solution that stands out and actually works. You have 2 weeks.',
          instructions: [
            '1. Apply SCAMPER to Generate Ideas (Week 1, Day 1, 1 hour): Take the traditional approach (flyers, social media) and run through SCAMPER. S (Substitute): Replace flyers with QR codes on college campus. C (Combine): Merge social media + student influencers + user-generated content contest. A (Adapt): Adapt viral TikTok challenges to the business. M (Modify): Modify social media posts to interactive stories/polls. P (Put to use): Repurpose student projects as case studies for the business. E (Eliminate): Eliminate paid ads, go 100% organic. R (Reverse): Instead of business promoting itself, get CUSTOMERS to promote it (referral rewards). Write down 20+ ideas.',
            '2. Brainstorm with "No Criticism" Rule (Week 1, Day 2, 30 mins): Get 3 classmates. Set timer: 30 minutes. Goal: 50 ideas. Rules: No criticism, wild ideas welcome, build on each other ("Yes, and..."). Ideas: "Flash mob at mall," "Collaborate with food bloggers," "Create Instagram filter with business logo," "Student ambassador program," "Guerrilla marketing stunts," "Partner with other local businesses for cross-promotion." Quantity over quality. Write EVERYTHING down.',
            '3. Challenge 3 Assumptions (Week 1, Day 3, 1 hour): List assumptions. Assumption 1: "Zero budget = limited options." Challenge: "What if zero budget is an ADVANTAGE? (Forces creativity, authenticity, grassroots marketing)." Assumption 2: "Students will not help for free." Challenge: "What if we offered them portfolio-building opportunity + recommendation letter?" Assumption 3: "Social media organic reach is dead." Challenge: "What if we created SHAREABLE content (contest, challenge, emotional story)?" Test these by researching case studies of zero-budget viral campaigns.',
            '4. Use Lateral Thinking - Reframe the Problem (Week 1, Day 4, 1 hour): Traditional: "How do we market with zero budget?" Lateral: "Who ELSE benefits if this business succeeds?" Local community benefits (jobs, local economy). Students benefit (portfolio projects). Influencers benefit (content). Reframe: "How do we create a campaign where everyone wins?" Solution: "Student-Led Community Marketing Initiative" - students create content (portfolio), business gets marketing (free), community supports local business (feel-good). Win-win-win.',
            '5. Combine Top 3 Ideas (Week 1, Day 5, 2 hours): From your 50 ideas, pick top 3. Idea 1: User-generated content contest ("Share your experience with [Business], win ₹500"). Idea 2: Student influencer partnerships (10 students with 1000+ followers promote for portfolio credit). Idea 3: Guerrilla marketing (flash mob, QR code treasure hunt on campus). COMBINE: "Launch UGC contest promoted by student influencers, with flash mob kickoff event." This is your creative campaign.',
            '6. Create Implementation Plan (Week 2, Day 1-2, 3 hours): Detail your campaign. Week 1: Recruit 10 student influencers (offer portfolio credit + recommendation). Week 2: Launch UGC contest (₹500 prize for best content). Week 3: Flash mob at college (create buzz). Week 4: Compile results (reach, engagement, sales impact). Create a presentation deck with visuals, timeline, expected impact. This is your submission.',
            '7. Present Your Creative Solution (Week 2, Day 3): Present to professor. Start: "Traditional marketing requires budget. I created a zero-budget campaign using creative problem-solving." Walk through: SCAMPER process, brainstorming (50 ideas), assumption challenges, concept combination. Show your campaign: UGC contest + influencers + flash mob. End: "Expected reach: 10,000 students. Cost: ₹500 (prize). This demonstrates creativity, strategic thinking, and execution planning." Your creative approach = A grade.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Sticking to traditional methods: "Let us just do social media posts." Result: Same as everyone else, does not stand out. Solution: Use SCAMPER to generate 20+ alternatives.',
            '• Criticizing during brainstorming: "That is a dumb idea." Result: Creativity dies, team shuts down. Solution: Defer judgment - save criticism for AFTER ideation.',
            '• Not testing assumptions: Assuming "zero budget = impossible" without exploring creative alternatives. Result: Limited thinking. Solution: Challenge assumption - "What if zero budget forces better creativity?"',
            '• One idea only: Generating 1-2 ideas and stopping. Result: Missing better alternatives. Solution: Generate 50 ideas (quantity), then pick best 5 (quality).',
            '• No combination: Keeping ideas separate instead of merging them. Result: Incremental, not innovative. Solution: Combine your top 3 ideas into one powerful campaign.'
          ],
          successCriteria: [
            '✅ You generate 50+ ideas using SCAMPER and brainstorming (quantity achieved)',
            '✅ You challenge 3 assumptions and test them (zero budget = advantage, students will help)',
            '✅ You combine multiple concepts (UGC contest + influencers + flash mob) into one innovative campaign',
            '✅ Your campaign is creative AND feasible (zero budget, high impact)',
            '✅ You present a detailed implementation plan (timeline, tactics, expected results)',
            '✅ Professor gives feedback: "Excellent creative thinking and strategic planning"',
            '✅ You receive an A grade (90%+) for innovation and execution quality',
            '✅ You feel confident applying creative problem-solving to future B.Com projects'
          ]
        },
        professional: {
          title: 'Professional Creative Innovation',
          description: 'You are a Marketing intern at a startup. The company is product launch is failing - only 100 sales in Month 1 (goal was 1000). Traditional marketing (Facebook ads, email campaigns) is not working. Your manager says: "We tried everything. I do not know what else to do." You need to generate creative solutions that break through the noise. Budget: ₹50,000. Deadline: 30 days to hit 500 sales or the product gets discontinued.',
          instructions: [
            '1. Apply SCAMPER to Current Approach (Day 1, 2 hours): Analyze what is NOT working. Current: Facebook ads (low ROI), email campaigns (2% open rate). Apply SCAMPER. S (Substitute): Replace Facebook ads with TikTok/Instagram Reels (Gen Z is there). C (Combine): Combine product with influencer unboxing + user reviews + giveaway. A (Adapt): Adapt viral challenge format to your product. M (Modify): Modify email campaigns to personalized video messages. E (Eliminate): Eliminate generic ads, focus on storytelling. R (Reverse): Instead of company promoting product, get USERS to promote it (referral program). Generate 15+ alternatives.',
            '2. Brainstorm with Team (Day 1, 1 hour): Gather marketing team + sales team + product team (diverse perspectives = better ideas). Set timer: 30 mins. Goal: 50 ideas. No criticism. Wild ideas welcome. Ideas: "Partner with micro-influencers," "Create a viral challenge," "Offer early-bird discount," "Build a community on Discord," "User-generated content contest," "Guerrilla marketing stunts," "Partner with complementary brands," "Create educational content series." Write all 50 down.',
            '3. Challenge Assumptions (Day 2, 1.5 hours): List assumptions. Assumption 1: "We need big influencers (expensive)." Challenge: "What if micro-influencers (1K-10K followers) have BETTER engagement?" Research: Micro-influencers have 7% engagement vs 1% for mega-influencers. Insight: Go micro. Assumption 2: "Customers will not create content for us." Challenge: "What if we incentivized it?" Test: Offer ₹500 for best user review video. Result: 50 submissions. Assumption 3: "We need more budget." Challenge: "What if we reallocated existing ₹50K more creatively?" Insight: ₹50K on 10 micro-influencers (₹5K each) vs ₹50K on Facebook ads (low ROI).',
            '4. Use Lateral Thinking - Reframe (Day 2, 1 hour): Traditional: "How do we sell 500 units?" Lateral: "Who ELSE benefits if our product succeeds?" Influencers benefit (content). Customers benefit (solve their problem). Complementary brands benefit (cross-promotion). Reframe: "How do we create a campaign where influencers, customers, and partners all win?" Solution: "Influencer Partnership Program" - 10 influencers get free product + ₹5K for authentic review. Their followers buy (500 sales). Influencers get content + income. You hit target. Win-win-win.',
            '5. Combine Top 5 Ideas (Day 3, 2 hours): From 50 ideas, pick top 5 based on: feasibility, cost, impact. Idea 1: Micro-influencer partnerships (10 influencers × ₹5K). Idea 2: User-generated content contest (₹500 prize). Idea 3: Referral program (₹100 discount for referrer + referee). Idea 4: Educational content series (solve customer problem, build trust). Idea 5: Limited-time launch offer (urgency). COMBINE into one integrated campaign. Execute all 5 simultaneously for maximum impact.',
            '6. Create Campaign Plan (Day 4-5, 4 hours): Build detailed plan. Week 1: Recruit 10 micro-influencers, launch UGC contest, create educational content. Week 2: Influencers post reviews, contest submissions come in, referral program goes live. Week 3: Launch offer announced, urgency created. Week 4: Measure results, optimize. Create presentation for manager with timeline, budget breakdown (₹50K allocation), expected ROI (500 sales = ₹5L revenue vs ₹50K spend = 10X ROI).',
            '7. Present and Execute (Day 6-30): Present to manager: "Traditional marketing is not working. I used creative problem-solving (SCAMPER, brainstorming, lateral thinking) to generate this integrated campaign." Show the plan. Get approval. Execute. Track daily: Sales, engagement, influencer reach. Adjust based on data. By Day 30, hit 500+ sales. Your creative thinking saved the product.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Doing more of what is not working: "Let us increase Facebook ad spend." Result: Throwing good money after bad. Solution: If it is not working, try something DIFFERENT (creative alternatives).',
            '• Immediate criticism: "Influencers are too expensive." Result: Idea dies before evolving into "micro-influencers" (affordable). Solution: Defer judgment during brainstorming.',
            '• Not testing assumptions: Assuming "customers will not create content" without testing. Result: Miss UGC opportunity. Solution: Test with small experiment (offer ₹500 prize, see response).',
            '• One-dimensional thinking: Only trying one approach (influencers OR contest OR referrals). Result: Limited impact. Solution: COMBINE multiple tactics for integrated campaign.',
            '• No measurement: Launching creative campaign without tracking results. Result: Cannot prove ROI. Solution: Track metrics daily (sales, reach, engagement), show data to manager.'
          ],
          successCriteria: [
            '✅ You generate 50+ ideas using SCAMPER and brainstorming',
            '✅ You challenge 3 assumptions and find insights (micro-influencers > mega-influencers)',
            '✅ You combine top 5 ideas into one integrated campaign',
            '✅ You create a detailed implementation plan with budget and timeline',
            '✅ You achieve 500+ sales in 30 days (creative solutions = business results)',
            '✅ Manager gives feedback: "Your creative thinking saved this product launch"',
            '✅ You are promoted or given more strategic projects (reputation as innovator)',
            '✅ You feel confident generating creative solutions for any business challenge'
          ]
        },
        personal: {
          title: 'Personal Creative Problem-Solving',
          description: 'You want to build a side income (₹10K/month) while in B.Com, but traditional options (tutoring, freelancing) are saturated and low-paying. You need a creative approach that leverages YOUR unique skills and interests. You have 1 month to test and validate an idea.',
          instructions: [
            '1. List Your Assets (Week 1, Day 1, 1 hour): What do you have that others do not? Skills: Excel, financial modeling, content creation? Interests: Finance, investing, personal finance? Network: 500 college friends, 200 LinkedIn connections? Time: 10 hours/week available? Resources: Laptop, internet, college resources? Write everything down. Creative solutions come from combining YOUR unique assets in new ways.',
            '2. Apply SCAMPER to Traditional Options (Week 1, Day 2, 1 hour): Traditional: Tutoring (₹500/hour, 20 hours/month = ₹10K, but time-intensive). Apply SCAMPER. S (Substitute): Replace 1-on-1 tutoring with group sessions (5 students × ₹300 = ₹1500/hour). C (Combine): Combine tutoring + recorded videos + study materials (sell as package). M (Modify): Modify from "teach students" to "teach working professionals" (they pay more - ₹2000/hour). E (Eliminate): Eliminate in-person, go 100% online (serve students across India). R (Reverse): Instead of you finding students, let students find YOU (create YouTube channel, they come to you). Generate 15+ alternatives.',
            '3. Brainstorm 50 Ideas (Week 1, Day 3, 1 hour): Set timer: 30 mins. No criticism. Wild ideas welcome. Ideas: "Create a personal finance Instagram page," "Sell Excel templates for B.Com students," "Start a podcast on career advice," "Create Notion templates for study planning," "Offer resume review services," "Build a newsletter on investing for students," "Create online course on Udemy," "Freelance financial modeling on Fiverr," "Start a blog with affiliate marketing," "Create TikTok content on money tips." Write 50 ideas, even crazy ones.',
            '4. Challenge Your Assumptions (Week 1, Day 4, 1 hour): Assumption 1: "I need to be an expert to teach." Challenge: "What if I am just 2 steps ahead of my audience? (I can teach 1st years as a 3rd year.)" Assumption 2: "People will not pay for my content." Challenge: "What if I provided real value? (Excel templates that save 5 hours of work = worth ₹500.)" Assumption 3: "I need a big audience first." Challenge: "What if I started with 10 paying customers, then scaled?" Test by creating 1 product (Excel template), selling to 10 friends for ₹100 each. If it works, scale.',
            '5. Combine Top 3 Ideas (Week 2, Day 1, 2 hours): From 50 ideas, pick top 3 based on: your skills, market demand, scalability. Idea 1: Excel templates for B.Com students. Idea 2: Instagram page on personal finance tips. Idea 3: Resume review service. COMBINE: "Personal Finance Instagram Page that promotes Excel Templates + Resume Reviews." Content attracts audience (free value), templates + services generate income (₹10K/month). This is your creative side hustle.',
            '6. Test with MVP (Week 2-3, 10 hours): Create Minimum Viable Product. Week 2: Create 1 Excel template (budget tracker for students), post 5 Instagram reels (personal finance tips), offer resume reviews (₹200/resume). Week 3: Promote to 50 friends, ask for feedback. Goal: Get 10 paying customers (₹2K revenue). If it works, you have validated your idea. If not, adjust based on feedback.',
            '7. Scale or Pivot (Week 4): If you hit ₹2K in Week 3, scale: Create 3 more templates, post daily on Instagram, increase prices (₹300/template, ₹500/resume review). Goal: 20 customers × ₹500 avg = ₹10K/month. If you did NOT hit ₹2K, pivot: Try a different combination from your 50 ideas. Creativity requires experimentation - not every idea works, but systematic testing finds winners.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Analysis paralysis: Generating 50 ideas but never testing any. Result: Zero income. Solution: Pick top 3, test with MVP in Week 2.',
            '• Perfectionism: "I will launch when my product is perfect." Result: You never launch. Solution: Launch MVP (80% ready), get feedback, improve iteratively.',
            '• Not leveraging your assets: Trying to do what everyone else does (tutoring) instead of using YOUR unique combination (B.Com knowledge + Excel skills + content creation). Result: Commoditized, low-paying. Solution: Combine YOUR assets creatively.',
            '• Ignoring market demand: Creating what YOU want without checking if others will pay. Result: No customers. Solution: Survey 20 people - "Would you pay ₹200 for a resume review?" Validate before building.',
            '• Giving up after first failure: First idea does not work, you quit. Result: Miss the winning idea. Solution: Test 3-5 ideas systematically. Creativity requires experimentation.'
          ],
          successCriteria: [
            '✅ You generate 50+ ideas using SCAMPER, brainstorming, and lateral thinking',
            '✅ You challenge 3 assumptions and test them with small experiments',
            '✅ You combine your top 3 ideas into one unique side hustle',
            '✅ You launch an MVP and get 10 paying customers in Week 3 (idea validated)',
            '✅ You earn ₹2K-10K in Month 1 (creative solution = income)',
            '✅ You build a scalable system (templates, content, services) that can grow',
            '✅ You feel confident that you can create income opportunities creatively (not just traditional jobs)',
            '✅ Your side hustle becomes a portfolio piece for job interviews (shows initiative and creativity)'
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
      scenario: 'You have 3 job offers after campus placements: (1) Big 4 firm (₹6 LPA, prestigious, long hours), (2) Startup (₹4.5 LPA, equity, high risk/reward, learning), (3) Family business (₹5 LPA, stability, less growth). Decision deadline: 48 hours. Your parents say Big 4. Your friends say startup. Your gut says family business. You have been staring at the offers for 6 hours, unable to decide. You keep switching: "Maybe Big 4... no wait, startup has equity... but family business is safe..." This is analysis paralysis. Meanwhile, your classmate Priya made her decision in 2 hours using a systematic framework and feels confident. You need a decision-making system, not just gut feeling.',
      problemExplanation: [
        '🔄 Analysis Paralysis: You have too many options (3 jobs) and too many criteria (salary, learning, stability, growth, work-life balance, prestige). Your brain is overwhelmed. You keep re-analyzing the same information, hoping for a "perfect" answer that does not exist. Result: Deadline approaches, stress increases, decision quality decreases. You might miss all 3 offers.',
        '😵 Decision Fatigue: You have been thinking about this for 6 hours straight. Your brain is exhausted. Decision quality deteriorates with mental fatigue. Why? Your prefrontal cortex (decision-making center) has limited energy. After hours of deliberation, you start making emotional, impulsive choices. This is why you buy junk food at the end of a long shopping trip.',
        '🎲 No Decision Framework: You are comparing apples, oranges, and bananas without a system. How do you weigh salary vs learning vs stability? You do not know. So you flip-flop based on who you talked to last (parents → Big 4, friends → startup). Without a framework, you are influenced by recency bias, not rational evaluation.',
        '👥 External Pressure Overrides Logic: Your parents want Big 4 (prestige, safety). Friends want startup (cool, equity). You want family business (comfort, less pressure). You are trying to please everyone, which means you cannot please yourself. Result: You choose based on others opinions, then regret it later ("I should have followed my gut").',
        '⏱️ Short-Term Thinking: You focus on immediate factors (salary, prestige) and ignore long-term consequences. Big 4 = high salary NOW, but burnout in 2 years? Startup = lower salary NOW, but equity worth ₹50 lakhs in 5 years? Family business = stability NOW, but limited skills growth? You are not considering 10-10-10 (how will you feel in 10 months, 10 years?).',
        '🚫 No Experimentation: This is a BIG decision (affects your career for 2-5 years), but you are making it based on limited information. You have not talked to current employees at these companies. You have not negotiated. You have not tested your assumptions ("Big 4 = prestige" - is this true? Or just perception?). You are deciding blind.'
      ],
      solutionApproach: [
        '📊 The Decision Matrix: Create a table. Rows = Your 3 options (Big 4, Startup, Family Business). Columns = Your criteria (Salary, Learning, Work-Life Balance, Growth, Stability, Prestige). Rate each option 1-10 for each criterion. Multiply by importance weight (Learning = 10/10 important to you, Prestige = 5/10). Add scores. Highest score = best fit for YOUR priorities. This removes emotion and external pressure.',
        '⚖️ Pros-Cons with Weighting: List pros and cons for EACH option. But do not treat all pros/cons equally. Weight them. Big 4 Pro: "Prestigious" (Weight: 5/10 - nice but not critical to you). Big 4 Con: "70-hour weeks" (Weight: 9/10 - critical, you value work-life balance). Startup Pro: "Equity potential ₹50L in 5 years" (Weight: 8/10 - significant). Now compare WEIGHTED pros/cons, not just count.',
        '🔮 The 10-10-10 Rule: For each option, ask: How will I feel in 10 MINUTES? (Immediate: Big 4 = excited about prestige.) 10 MONTHS? (Mid-term: Big 4 = burned out from 70-hour weeks? Startup = loving the learning?) 10 YEARS? (Long-term: Big 4 = great resume but health issues? Startup = equity payout + entrepreneurial skills?). This reveals long-term consequences you are ignoring.',
        '🧪 Test Before Committing: For BIG decisions, run small experiments. Call 3 current employees at each company. Ask: "What is the reality vs the perception?" "What do you wish you knew before joining?" "Would you choose this again?" Their insights = data. Also: Negotiate with all 3 (can Big 4 offer better work-life balance? Can startup increase salary?). Testing reduces regret.',
        '🎯 Clarify YOUR Priorities: Write down: What matters MOST to you? (Learning? Stability? Income? Growth? Work-life balance?) Rank them 1-5. Now evaluate options based on YOUR priorities, not others. If learning is #1 for you, startup might win despite lower salary. If stability is #1, family business wins. Your priorities = your decision criteria.',
        '⏰ Set a Decision Deadline: Analysis paralysis thrives on unlimited time. Set a deadline: "I will decide by 6 PM today." This forces your brain to commit. Use the time wisely: 2 hours for decision matrix, 2 hours for calling employees, 1 hour for pros-cons, 1 hour to decide. Deadline = action.'
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
          question: 'You have 3 job offers. You list 10 pros and cons for each, but after 5 hours you still cannot decide. What is happening?',
          options: [
            'You need more information to make the right choice',
            'Analysis paralysis - overthinking is preventing decision. You need a Decision Matrix with WEIGHTED criteria to cut through the noise.',
            'You should just follow your gut feeling',
            'You should ask more people for their opinions'
          ],
          correct: 1,
          explanation: 'Option 2 identifies analysis paralysis - when overthinking prevents decision-making. More information (Option 1) will not help - you are drowning in data already. Gut feeling (Option 3) ignores the analysis you did. More opinions (Option 4) adds confusion. Solution: Decision Matrix with WEIGHTED criteria. Example: Rate each job on Learning (weight 10/10), Salary (weight 7/10), Work-life (weight 9/10). Calculate weighted scores. Highest score wins. This cuts through analysis paralysis by forcing systematic evaluation based on YOUR priorities, not endless deliberation. In B.Com, analysis paralysis affects: Career choices, specialization decisions, internship selection. Framework > overthinking.'
        },
        {
          id: 17,
          question: 'You are deciding between Big 4 (₹6 LPA, prestigious) and Startup (₹4.5 LPA, high learning). Using the 10-10-10 Rule, which insight is MOST valuable?',
          options: [
            '10 minutes: Big 4 feels exciting (prestige, high salary)',
            '10 years: Startup might offer ₹50L equity + entrepreneurial skills vs Big 4 burnout and limited skills diversity',
            '10 months: Both will be challenging',
            '10 people: Ask 10 friends what they think'
          ],
          correct: 1,
          explanation: 'Option 2 (10 years perspective) is most valuable because it reveals LONG-TERM consequences you are ignoring in the excitement of the moment. Big 4 feels great in 10 minutes (prestige!), but in 10 years? Potential burnout, health issues, regret about not taking risks. Startup feels uncertain in 10 minutes (lower salary), but in 10 years? Equity payout, entrepreneurial skills, diverse network. The 10-10-10 Rule prevents short-term thinking. In B.Com, students often choose based on 10-minute feelings (prestige, peer pressure) and regret it in 10 months (burnout, wrong fit). Always consider: How will this decision affect me in 10 YEARS? Long-term thinking = better decisions.'
        },
        {
          id: 18,
          question: 'You create a pros-cons list for a job offer. Pros: 5 items. Cons: 3 items. Pros win, right? What is wrong with this approach?',
          options: [
            'Nothing - more pros means it is a good decision',
            'You did not WEIGHT the pros and cons. One critical con (70-hour weeks = weight 9/10) might outweigh 5 minor pros (prestige = weight 4/10).',
            'You should have listed more pros to be sure',
            'Cons always matter more than pros'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - counting pros vs cons is flawed because not all items are equal. Example: Big 4 has 5 pros (salary, prestige, training, resume, stability) vs 3 cons (70-hour weeks, burnout, repetitive work). Traditional counting: 5 vs 3 = Big 4 wins. But WEIGHTED analysis: If "70-hour weeks" is critical to you (weight 9/10) and "prestige" is minor (weight 4/10), that ONE con might outweigh multiple pros. Always weight based on YOUR priorities. In B.Com decision-making, weight reveals what truly matters. A job with 10 minor pros and 1 critical con (destroys work-life balance) = bad choice. Quality > quantity in pros-cons analysis.'
        },
        {
          id: 19,
          question: 'You are deciding between MBA (₹20L cost, 2 years) and Job (₹5 LPA, immediate income). This is a BIG decision. What should you do BEFORE deciding?',
          options: [
            'Decide immediately based on gut feeling - big decisions need quick action',
            'Test with small experiments: Talk to 5 MBA grads and 5 working professionals, compare their career trajectories, ROI, satisfaction. Gather DATA before committing.',
            'Avoid the decision - maybe a better option will appear',
            'Follow what most B.Com students do (if 70% do MBA, you should too)'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - test BIG decisions with small experiments before fully committing. MBA costs ₹20L and 2 years - this is not reversible. Gather data: Talk to MBA grads (What was ROI? Worth it? Regrets?). Talk to working professionals (Career growth without MBA? Salary progression?). Compare: MBA grads at Year 5 (salary, role, satisfaction) vs non-MBA at Year 5. This DATA informs your decision. Option 1 (gut feeling) is risky for ₹20L decisions. Option 3 (avoid) is passive. Option 4 (follow others) ignores YOUR goals. In B.Com, test big decisions: Internship before full-time, freelance before quitting job, part-time course before full MBA. Testing reduces regret by 80%.'
        },
        {
          id: 20,
          question: 'Your parents want you to join Big 4 (prestige). Your friends want you to join startup (cool). You want family business (comfort). How should you decide?',
          options: [
            'Choose Big 4 to make parents happy - family approval matters most',
            'Clarify YOUR priorities first (rank: learning, salary, work-life, growth, stability), then use Decision Matrix based on YOUR values, not others',
            'Choose startup to fit in with friends',
            'Flip a coin - all options are equally good'
          ],
          correct: 1,
          explanation: 'Option 2 is the systematic approach - clarify YOUR priorities FIRST, then decide based on YOUR values. If learning is your #1 priority, startup wins (10/10 learning) despite lower salary. If work-life balance is #1, family business wins (9/10 balance). If prestige is #1, Big 4 wins. The key: This is YOUR career, YOUR life, YOUR decision. Choosing to please parents (Option 1) or friends (Option 3) leads to regret ("I should have followed my gut"). Coin flip (Option 4) is abdicating responsibility. In B.Com career decisions, external pressure is intense. Resist it. Use frameworks to make decisions based on YOUR priorities, then own the outcome. You cannot please everyone - please yourself first.'
        }
      ]
    },
    challenge: {
      title: 'Decision Making Challenge',
      description: 'Master systematic decision-making',
      contexts: {
        academic: {
          title: 'Academic Decision Mastery',
          description: 'You must choose your B.Com specialization: (1) Finance (high-paying jobs, competitive), (2) Marketing (creative, diverse roles), (3) Accounting (stable, professional certifications). This decision affects your career for 5+ years. You have 3 days to decide. You are torn and keep changing your mind.',
          instructions: [
            '1. Clarify YOUR Priorities (Day 1, 1 hour): Write down what matters MOST to you in a career. Rank 1-5: ___ High salary potential, ___ Creative work, ___ Job stability, ___ Work-life balance, ___ Continuous learning, ___ Entrepreneurship potential. Be honest. If salary is #1 for you, own it. If creativity is #1, own that. Your priorities = your decision criteria. Do not rank based on what you THINK you should value - rank based on what you ACTUALLY value.',
            '2. Create a Decision Matrix (Day 1, 2 hours): Build a table. Rows: Finance, Marketing, Accounting. Columns: Your criteria (Salary, Creativity, Stability, Work-life, Learning, Entrepreneurship). Weight each criterion (1-10 based on your priorities). Rate each specialization (1-10) on each criterion. Example: Finance - Salary (9/10), Creativity (4/10), Stability (7/10). Marketing - Salary (6/10), Creativity (9/10), Stability (6/10). Accounting - Salary (7/10), Creativity (3/10), Stability (9/10). Calculate weighted scores. Highest score = best fit for YOU.',
            '3. Apply 10-10-10 Rule (Day 1, 1 hour): For each specialization, imagine: 10 MINUTES after choosing: How do you feel? (Finance = excited about money. Marketing = excited about creativity. Accounting = comfortable with stability.) 10 MONTHS into the specialization: Are you enjoying the coursework? (Finance = loving financial modeling? Marketing = loving campaign projects? Accounting = bored with repetitive entries?) 10 YEARS into your career: Where are you? (Finance = investment banker, high stress, high pay? Marketing = brand manager, creative, moderate pay? Accounting = CA, stable, respected?) Write this down for each option.',
            '4. Gather Data - Talk to Seniors (Day 2, 2 hours): Find 2 seniors in EACH specialization (Finance, Marketing, Accounting). Ask: "What is the reality vs the perception?" "What do you wish you knew before choosing?" "What are the job prospects?" "Would you choose this again?" Document their insights. This is real-world data, not assumptions. Example insight: "Finance has high-paying jobs, but competition is brutal - top 10% get great roles, rest struggle." This changes your evaluation.',
            '5. Test Your Assumptions (Day 2, 1 hour): List your assumptions. Assumption 1: "Finance = guaranteed high salary." Test: Research average B.Com Finance grad salaries (₹4-6 LPA, not ₹10L+). Assumption 2: "Marketing = creative freedom." Test: Talk to marketers (reality: 80% execution, 20% creativity). Assumption 3: "Accounting = boring." Test: Research forensic accounting, management accounting (not just data entry). Challenge your assumptions with data.',
            '6. Make Your Decision (Day 3, 1 hour): Review your Decision Matrix (which scored highest?), 10-10-10 analysis (which aligns with long-term goals?), senior insights (which has better reality?). Make your choice based on DATA, not emotion or external pressure. Write down: "I choose [X] because [3 reasons based on my priorities and data]." This clarity = confidence.',
            '7. Own Your Decision (Day 3 onwards): After choosing, stop second-guessing. You used a systematic framework. You gathered data. You made an informed choice. If doubts arise, re-read your analysis. Remind yourself: "I chose based on MY priorities and available data. I own this decision." Confidence comes from knowing you decided systematically, not impulsively.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Choosing based on others priorities: "My parents want me to do Finance, so I will." Result: Regret in 10 months when you realize you hate it. Solution: Clarify YOUR priorities first, decide based on YOUR values.',
            '• No weighting: Counting pros vs cons without weighting importance. Result: Minor pros outweigh critical cons. Solution: Weight each pro/con based on YOUR priorities (work-life balance = 9/10 for you? Weight it heavily).',
            '• Short-term thinking: Choosing Finance because "₹6 LPA sounds great right now." Result: Ignoring 10-year consequences (burnout? Limited skills?). Solution: Apply 10-10-10 Rule - think long-term.',
            '• Not testing assumptions: Assuming "Finance = guaranteed wealth" without researching reality. Result: Disappointed when reality differs. Solution: Talk to seniors, research data, test assumptions.',
            '• Analysis paralysis: Spending 3 days re-analyzing the same data. Result: Stress, no decision. Solution: Set deadline - "I will decide by Day 3, 6 PM." Use frameworks to decide, then commit.'
          ],
          successCriteria: [
            '✅ You clarify YOUR priorities (ranked 1-5) before evaluating options',
            '✅ You create a Decision Matrix with weighted criteria and calculate scores',
            '✅ You apply 10-10-10 Rule to consider long-term consequences',
            '✅ You gather data by talking to 6 seniors (2 from each specialization)',
            '✅ You test 3 assumptions and adjust your evaluation based on findings',
            '✅ You make a confident decision within 3 days (no analysis paralysis)',
            '✅ You can articulate WHY you chose this (3 data-backed reasons)',
            '✅ You feel confident and at peace with your choice (no second-guessing)'
          ]
        },
        professional: {
          title: 'Professional Decision Excellence',
          description: 'You are a Business Analyst at a consulting firm. Your client (manufacturing company) must decide: (1) Automate production (₹50L investment, 30% cost savings, 20 jobs lost), (2) Expand to new market (₹40L investment, 50% revenue growth potential, high risk), (3) Status quo (no investment, no growth, safe). You must analyze and recommend a decision to the CEO in 2 days.',
          instructions: [
            '1. Build a Decision Matrix (Day 1, 3 hours): Create a comprehensive matrix. Rows: Automation, Expansion, Status Quo. Columns: Financial ROI, Risk level, Employee impact, Market competitiveness, Implementation complexity, Time to ROI. Weight criteria based on CEO priorities (ask: "What matters most to you?"). If CEO says "Profitability is #1," weight Financial ROI as 10/10. Rate each option 1-10 on each criterion. Calculate weighted scores. This gives you a data-driven recommendation.',
            '2. Apply 10-10-10 for Each Option (Day 1, 1 hour): Automation - 10 minutes: Exciting (cost savings!). 10 months: 20 employees laid off, bad PR, union issues? 10 years: 30% cost savings = ₹5 crore saved, competitive advantage. Expansion - 10 minutes: Risky (₹40L investment). 10 months: New market traction, 50% revenue growth? 10 years: Diversified revenue, market leader in 2 regions. Status Quo - 10 minutes: Safe. 10 months: Competitors innovating, you are stagnant. 10 years: Market share lost, company irrelevant. Document insights for each timeline.',
            '3. Weighted Pros-Cons (Day 1, 1.5 hours): For each option, list pros and cons with weights. Automation Pro: "₹5 crore savings over 5 years" (Weight: 10/10 - critical). Automation Con: "20 jobs lost, bad PR" (Weight: 7/10 - significant but manageable). Expansion Pro: "50% revenue growth" (Weight: 9/10). Expansion Con: "High risk, might fail" (Weight: 8/10). Status Quo Pro: "No risk" (Weight: 3/10 - not valuable). Status Quo Con: "Competitors will overtake us" (Weight: 9/10 - critical). Calculate weighted totals. Which option has highest weighted pros minus weighted cons?',
            '4. Gather Data (Day 1, 2 hours): Research: (1) Automation ROI case studies (other manufacturers who automated - what was their experience?), (2) New market analysis (is there demand? Who are competitors?), (3) Status quo risk (what happens if we do nothing? Competitor analysis). Interview: Talk to operations head (automation feasibility?), sales head (expansion potential?), HR head (employee impact?). Data > assumptions.',
            '5. Test Assumptions (Day 2, 1 hour): Assumption 1: "Automation will save 30%." Test: Request detailed cost analysis from automation vendor. Verify with industry benchmarks. Assumption 2: "New market has 50% growth potential." Test: Commission market research (₹50K investment to validate ₹40L decision = smart). Assumption 3: "Status quo is safe." Test: Analyze competitor moves - are they automating/expanding? If yes, status quo = falling behind. Verify every assumption.',
            '6. Build Recommendation (Day 2, 3 hours): Create presentation for CEO. Slide 1: Decision Framework Used (Matrix, 10-10-10, Weighted Pros-Cons). Slide 2: Analysis Summary (scores for each option). Slide 3: Data Evidence (ROI calculations, market research, case studies). Slide 4: Risk Assessment (what could go wrong for each option?). Slide 5: Recommendation (based on analysis, recommend Option X because...). Slide 6: Implementation Plan (if CEO approves). Logical, data-driven, defensible.',
            '7. Present with Confidence (Day 2): Walk CEO through your systematic analysis. Start: "I evaluated 3 options using decision frameworks and data analysis." Present matrix, 10-10-10, pros-cons. Show data evidence. Address risks. End: "Based on this analysis, I recommend [Option X] because it aligns with your priority (profitability) and has the highest weighted score (X points). Here is the implementation plan." CEO sees: You did not guess - you ANALYZED. Decision made.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Recommending based on gut: "I feel like automation is the way to go." Result: CEO questions your credibility. Solution: Use Decision Matrix + data to support your recommendation.',
            '• Ignoring CEO priorities: Recommending expansion (growth) when CEO prioritizes profitability (automation). Result: Misaligned recommendation. Solution: Weight criteria based on CEO priorities, not yours.',
            '• Not considering 10-year impact: Recommending status quo (safe now) without considering 10-year consequences (company becomes irrelevant). Solution: Apply 10-10-10 Rule.',
            '• Weak data: "I think automation will save 30%." Result: CEO asks "Based on what?" and you have no answer. Solution: Gather data - vendor quotes, industry benchmarks, case studies.',
            '• No risk assessment: Recommending expansion without addressing "What if the new market fails?" Result: CEO sees you as naive. Solution: For each option, list risks and mitigation strategies.'
          ],
          successCriteria: [
            '✅ You create a comprehensive Decision Matrix with weighted criteria aligned to CEO priorities',
            '✅ You apply 10-10-10 Rule to reveal long-term consequences of each option',
            '✅ You gather data (ROI calculations, market research, case studies) to support your analysis',
            '✅ You test 3 assumptions and verify with data before recommending',
            '✅ You present a clear, data-driven recommendation to the CEO',
            '✅ CEO approves your recommendation and implementation plan',
            '✅ Your manager gives feedback: "Excellent strategic analysis and decision framework"',
            '✅ You feel confident making high-stakes business decisions systematically'
          ]
        },
        personal: {
          title: 'Personal Decision Wisdom',
          description: 'You are deciding: Should you do an MBA (₹20L cost, 2 years, career boost) or start working (₹5 LPA, immediate income, experience)? Your parents say MBA. Your gut says work. You have been torn for 2 months. This indecision is causing stress and missed opportunities. You need to decide in 1 week using a systematic framework.',
          instructions: [
            '1. Clarify YOUR Life Goals (Day 1, 1 hour): Before deciding MBA vs Job, ask: What do I want in 5 years? (Senior role in corporate? Entrepreneurship? Work-life balance? High income?) Write down your 5-year vision. Now evaluate: Which path (MBA or Job) gets me closer to MY vision? If your goal is entrepreneurship, maybe Job (learn business operations) + online courses > MBA (expensive, theoretical). If your goal is senior corporate role, maybe MBA (fast-track) > Job (slow climb). Your goals = your decision criteria.',
            '2. Create a Decision Matrix (Day 1, 2 hours): Rows: MBA, Job. Columns: Career growth speed, Income (5-year total), Learning, Network, Debt burden, Opportunity cost, Flexibility. Weight based on YOUR priorities. Example: If you value "No debt" highly (weight 9/10), MBA scores low (₹20L debt). If you value "Fast career growth" (weight 10/10), MBA scores high (2 years → senior roles). Calculate weighted scores. Which wins based on YOUR values?',
            '3. Apply 10-10-10 Rule (Day 2, 1 hour): MBA path - 10 minutes: Excited (prestige, learning). 10 months: Stressed (₹20L debt, tough coursework, no income). 10 years: Senior role, ₹25 LPA, but ₹20L debt repaid? Job path - 10 minutes: Uncertain (no MBA = less prestigious?). 10 months: Earning ₹5 LPA, learning on the job, no debt. 10 years: ₹12-15 LPA (slower growth), but ₹30L saved (no MBA cost + 2 years income), practical experience. Which aligns with your 10-year vision?',
            '4. Gather Data - Talk to 10 People (Day 2-3, 3 hours): Talk to 5 MBA grads: "Was it worth ₹20L? ROI? Regrets?" Talk to 5 working professionals without MBA: "Career growth? Salary progression? Do you regret not doing MBA?" Document: MBA grads say "Worth it IF you get into top companies (50% do). Otherwise, debt burden is heavy." Working professionals say "Slower growth, but practical skills and zero debt. Some regret not doing MBA, some do not." This data informs your decision.',
            '5. Test Your Assumptions (Day 4, 1 hour): Assumption 1: "MBA = guaranteed high salary." Test: Research average MBA grad salaries (₹8-12 LPA, not ₹20L+). Factor in ₹20L debt. Net benefit? Assumption 2: "Without MBA, I cannot reach senior roles." Test: LinkedIn search - how many senior managers do not have MBA? (Answer: 40%). MBA helps but is not mandatory. Assumption 3: "I need to decide NOW." Test: Can you work for 2 years, save ₹10L, then do MBA with less debt? Maybe waiting is smarter. Challenge every assumption.',
            '6. Make Your Decision (Day 5, 1 hour): Review all your analysis: Decision Matrix (which scored higher?), 10-10-10 (which aligns with long-term vision?), Data from 10 people (what is the reality?), Tested assumptions (which are true?). Make your choice based on THIS, not external pressure. Write: "I choose [MBA/Job] because: (1) [Reason based on my priorities], (2) [Reason based on data], (3) [Reason based on long-term vision]." This clarity = confidence.',
            '7. Create a Plan B (Day 5, 30 mins): No decision is permanent. Plan B: If you choose Job, you can do MBA later (part-time or after 2-3 years). If you choose MBA, you can pivot careers if it does not work out. Having a Plan B reduces decision anxiety. You are not locked in forever - you are choosing the best path based on current data. Flexibility = peace of mind.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Following others: "Most B.Com students do MBA, so I should too." Result: You ignore YOUR goals and priorities. Solution: Decide based on YOUR 5-year vision, not peer pressure.',
            '• Ignoring debt burden: "₹20L debt is fine, I will earn it back." Result: 5 years of EMI stress, limited financial freedom. Solution: Factor debt into Decision Matrix (weight it heavily if you value financial freedom).',
            '• Short-term thinking: Choosing Job because "I want income NOW" without considering 10-year career trajectory. Result: Slower growth, regret later. Solution: Apply 10-10-10 Rule.',
            '• Not testing assumptions: Assuming "MBA = guaranteed success" without researching ROI data. Result: Disappointed when reality differs. Solution: Talk to 10 people, research data, test assumptions.',
            '• Analysis paralysis: Spending 2 months deliberating. Result: Missed opportunities (job offers expire, MBA deadlines pass). Solution: Set deadline - "I will decide by Day 5." Use frameworks to decide, then commit.'
          ],
          successCriteria: [
            '✅ You clarify your 5-year life goals before evaluating MBA vs Job',
            '✅ You create a Decision Matrix with weighted criteria based on YOUR priorities',
            '✅ You apply 10-10-10 Rule to consider long-term consequences (10 years)',
            '✅ You gather data by talking to 10 people (5 MBA grads, 5 working professionals)',
            '✅ You test 3 assumptions and adjust your evaluation based on findings',
            '✅ You make a confident decision within 1 week (no analysis paralysis)',
            '✅ You can articulate WHY you chose this path (3 data-backed reasons)',
            '✅ You feel at peace with your decision (no regret, no second-guessing)'
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
      scenario: 'You are planning your college fest (budget: ₹5 lakhs, expected attendance: 2000 students, 15 events over 3 days). You are excited and confident: "What could go wrong?" Fast forward to Day 1: (1) Rain cancels outdoor events (no backup plan), (2) Headline performer cancels last minute (no contract clause), (3) Food vendor runs out of food by 2 PM (underestimated demand), (4) Sound system fails (no backup equipment), (5) ₹2 lakhs spent, but only ₹50K revenue (sponsorship fell through). The fest is a disaster. Your team is stressed. Students are angry. College admin is disappointed. Post-mortem: "We did not see this coming." Reality: You did not DO risk assessment. Every problem was predictable and preventable. Meanwhile, the rival college fest (same budget, same scale) ran smoothly because they did systematic risk assessment and had mitigation plans for EVERY major risk. You need to learn risk assessment before your next project fails.',
      problemExplanation: [
        '🙈 Cannot Identify Risks: You focus on the "happy path" (everything goes perfectly) and ignore potential problems. You think: "Rain? Unlikely. Performer cancellation? Won\'t happen. Food shortage? We ordered enough." This is optimism bias - humans naturally underestimate risks. Result: You are blindsided when problems occur. Reality: Every project has 10-20 major risks. If you cannot name them, you cannot manage them.',
        '📊 No Risk Quantification: You know "rain is a risk," but you do not quantify it. How likely? (Probability: 30% in monsoon season.) How bad? (Impact: ₹1.5L loss if outdoor events cancel, 500 students disappointed, reputation damage.) Without quantification, you cannot prioritize. You waste time worrying about low-impact risks (minor sound glitches) while ignoring high-impact risks (performer cancellation = ₹2L loss).',
        '🎯 No Risk Prioritization: You treat all risks equally. "Rain, food shortage, sound issues - all are risks, we will handle them." Wrong. Not all risks are equal. Rain (30% probability, ₹1.5L impact) = HIGH priority. Sound glitch (10% probability, ₹10K impact) = LOW priority. Without prioritization, you spread resources thin and fail to address critical risks. Result: High-impact risks materialize, project fails.',
        '🚫 No Mitigation Plans: You identify risks but do not plan mitigation. "Rain is a risk. Okay, noted." Then what? Do you have indoor backup venues? Refund policy? Rescheduling plan? No? Then you did not mitigate - you just worried. Risk assessment without mitigation = useless. When rain happens, you scramble (panic mode) instead of executing a pre-planned response (calm mode).',
        '💸 Reactive, Not Proactive: You deal with risks AFTER they occur (reactive). Performer cancels → scramble to find replacement (costs 2x, lower quality). Food runs out → order emergency catering (costs 3x, arrives late). Sound fails → rent backup equipment (costs 5x, takes 2 hours). Reactive risk management is expensive and stressful. Proactive risk management (identify + mitigate BEFORE) is cheap and calm.',
        '📉 No Risk Monitoring: You assess risks once (during planning) and never revisit. But risks evolve. Example: 2 weeks before fest, weather forecast shows 60% rain (was 30%). You do not update your risk assessment. Day 1: Rain happens. You are shocked. Reality: Risk assessment is continuous, not one-time. You must monitor risks weekly and adjust mitigation plans as probabilities change.'
      ],
      solutionApproach: [
        '🎲 Risk Formula: Risk = Probability × Impact. For EVERY potential problem, estimate: (1) Probability (0-100%): How likely is this to happen? (2) Impact (₹ or scale 1-10): How bad is it if it happens? Multiply. Example: Rain - Probability 30%, Impact ₹1.5L loss = Risk Score 0.3 × 150,000 = ₹45,000 expected loss. Performer cancellation - Probability 20%, Impact ₹2L loss = Risk Score 0.2 × 200,000 = ₹40,000. Now you can compare and prioritize risks numerically.',
        '📊 Risk Matrix (2×2 Grid): Plot risks on a matrix. X-axis: Probability (Low/High). Y-axis: Impact (Low/High). Four quadrants: (1) High Probability + High Impact = RED ZONE (address immediately), (2) High Probability + Low Impact = YELLOW (monitor), (3) Low Probability + High Impact = ORANGE (prepare contingency), (4) Low Probability + Low Impact = GREEN (accept). Example: Rain = High Probability + High Impact = RED. Sound glitch = Low Probability + Low Impact = GREEN. This visual prioritization is powerful.',
        '🗂️ Risk Categories (Identify Systematically): Do not brainstorm risks randomly. Use categories to ensure you do not miss anything. (1) Financial: Sponsorship falls through, budget overrun, low ticket sales. (2) Operational: Vendor no-show, equipment failure, staff shortage. (3) External: Weather, competitor event same day, government restrictions. (4) Reputational: Poor quality event, safety incident, negative social media. Go through EACH category and list 3-5 risks. This systematic approach identifies 20+ risks (vs random brainstorming = 5 risks).',
        '🛡️ Mitigation Strategies (4 Options): For each risk, choose a mitigation strategy. (1) AVOID: Eliminate the risk (schedule fest in winter, not monsoon → avoid rain risk). (2) REDUCE: Lower probability or impact (book 2 backup performers → reduce cancellation risk from 20% to 5%). (3) TRANSFER: Shift risk to others (buy event insurance → transfer financial loss to insurer). (4) ACCEPT: Do nothing, absorb the loss if it happens (sound glitch costs ₹10K to fix, ₹50K to prevent → accept the risk). Not all risks need mitigation - only high-priority ones.',
        '📋 Risk Register (Document Everything): Create a spreadsheet. Columns: Risk Description, Category, Probability (%), Impact (₹), Risk Score, Priority (Red/Orange/Yellow/Green), Mitigation Strategy, Owner (who is responsible?), Status (open/mitigated/closed). Example Row: "Rain cancels outdoor events | External | 30% | ₹1.5L | ₹45K | RED | Book indoor backup venues + refund policy | Priya | Mitigated." This register is your risk management dashboard. Review it weekly.',
        '🔄 Continuous Monitoring: Risk assessment is not one-and-done. Schedule weekly risk reviews (30 mins). Ask: (1) Have any risks materialized? (2) Have probabilities changed? (Weather forecast updated? Performer confirmed attendance?) (3) Are mitigation plans working? (Backup venue booked? Insurance purchased?) (4) Any NEW risks emerged? (Government announced new COVID restrictions?) Update your Risk Register. Adjust mitigation plans. This proactive monitoring prevents surprises.'
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
          question: 'You are planning a college fest. You identify "Rain" as a risk. How should you quantify it to prioritize against other risks?',
          options: [
            'Just note "Rain is a risk" and move on',
            'Calculate Risk Score: Probability (30% in monsoon) × Impact (₹1.5L loss if outdoor events cancel) = ₹45,000 expected loss',
            'Assume rain will not happen and ignore it',
            'Ask others if they think rain is a big risk'
          ],
          correct: 1,
          explanation: 'Option 2 uses the Risk Formula (Risk = Probability × Impact) to quantify the risk numerically. Rain probability = 30% (based on weather data for monsoon season). Impact = ₹1.5L (outdoor events canceled, 500 students disappointed, reputation damage). Risk Score = 0.30 × ₹150,000 = ₹45,000 expected loss. This number lets you compare rain risk against other risks (performer cancellation = ₹40K, food shortage = ₹20K, sound failure = ₹1K) and prioritize systematically. Option 1 (just noting) does not help prioritization. Option 3 (ignore) is optimism bias. Option 4 (ask others) is subjective. In B.Com projects, quantify EVERY risk using Probability × Impact. This transforms vague worry into actionable priorities.'
        },
        {
          id: 22,
          question: 'You plot risks on a Risk Matrix. "Performer cancellation" is Low Probability (20%) but High Impact (₹2L loss). Which zone is this, and what should you do?',
          options: [
            'Green Zone - Accept the risk, do nothing',
            'Orange Zone - Prepare contingency plan (contract with cancellation clause, book 2 backup performers)',
            'Red Zone - Address immediately with full mitigation',
            'Yellow Zone - Just monitor, no action needed'
          ],
          correct: 1,
          explanation: 'Option 2 correctly identifies this as Orange Zone (Low Probability + High Impact) and prescribes the right action: Prepare contingency. You cannot eliminate performer cancellation risk (they might get sick, have emergencies), but you CAN prepare. How? (1) Contract with cancellation clause (penalty if they cancel), (2) Book 2 backup performers (ready to step in), (3) Confirm attendance 48 hours before event. This reduces both probability (20% → 5% with contract) and impact (₹2L → ₹50K with backups). Red Zone (Option 3) is for High Probability + High Impact (like rain in monsoon). Yellow Zone (Option 4) is High Probability + Low Impact. Green Zone (Option 1) is Low Probability + Low Impact. In B.Com risk management, Orange Zone risks need contingency plans, not full mitigation or acceptance.'
        },
        {
          id: 23,
          question: 'You are assessing risks for your college fest. You brainstorm randomly and identify 5 risks. Your friend uses Risk Categories and identifies 22 risks. Why?',
          options: [
            'Your friend is overthinking and being paranoid',
            'Risk Categories (Financial, Operational, External, Reputational) ensure systematic identification. Random brainstorming misses 50% of risks.',
            'Your 5 risks are enough - more risks = more worry',
            'Your friend copied risks from the internet'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - systematic categorization identifies more risks than random brainstorming. When you ask "What could go wrong?" your brain jumps to obvious risks (rain, performer cancellation) and misses less obvious ones (payment delays, vendor no-show, government restrictions, negative social media). Risk Categories force you to think through EACH area: Financial (sponsorship falls through, budget overrun, low ticket sales), Operational (vendor no-show, equipment failure, staff shortage), External (weather, competitor events, government restrictions), Reputational (poor quality, safety incidents, negative publicity). Result: 20+ risks identified vs 5 from random brainstorming. In B.Com project management, comprehensive risk identification = better risk management. Missing risks = being blindsided.'
        },
        {
          id: 24,
          question: 'Sound system failure has 10% probability and ₹10K impact (Risk Score = ₹1K). Prevention (backup sound system) costs ₹50K. What should you do?',
          options: [
            'Spend ₹50K on backup system - better safe than sorry',
            'ACCEPT the risk. Prevention (₹50K) costs 50x more than the risk (₹1K). If sound fails, rent backup equipment for ₹10K.',
            'Transfer the risk by buying insurance',
            'Avoid the risk by canceling all events that need sound'
          ],
          correct: 1,
          explanation: 'Option 2 demonstrates smart risk management - ACCEPT low-priority risks where mitigation costs exceed the risk itself. Risk Score = ₹1,000 (10% × ₹10K). Prevention = ₹50,000 (buying backup system). This is 50x more expensive than the risk! Better strategy: Accept the risk. If sound fails (10% chance), rent backup equipment for ₹10K (1-time cost vs ₹50K upfront). You save ₹40K. The 4 mitigation strategies are: (1) AVOID (eliminate risk), (2) REDUCE (lower probability/impact), (3) TRANSFER (insurance), (4) ACCEPT (do nothing). Use ACCEPT for Green Zone risks (Low Probability + Low Impact) where mitigation is too expensive. In B.Com, do not over-invest in preventing low-impact risks. Focus resources on Red/Orange Zone risks.'
        },
        {
          id: 25,
          question: 'You assess risks 2 months before your college fest. 1 week before the fest, weather forecast changes from 30% rain to 60% rain. What should you do?',
          options: [
            'Stick to your original risk assessment - you already planned for 30% rain',
            'Update your Risk Register: Rain is now Red Zone (60% probability, ₹1.5L impact = ₹90K risk). Immediately execute backup plan (book indoor venues).',
            'Ignore the new forecast - weather predictions are often wrong',
            'Cancel the fest to avoid all risk'
          ],
          correct: 1,
          explanation: 'Option 2 demonstrates continuous risk monitoring - risk assessment is NOT one-time, it is ongoing. Original assessment: Rain = 30% probability, ₹1.5L impact = ₹45K risk (Orange Zone - prepare contingency). Updated assessment: Rain = 60% probability, ₹1.5L impact = ₹90K risk (Red Zone - address immediately). Action: Execute your backup plan NOW (book indoor venues, create refund policy, communicate to attendees). Waiting until fest day = too late. Option 1 (stick to original) ignores new data. Option 3 (ignore forecast) is optimism bias. Option 4 (cancel) is overreaction. In B.Com project management, schedule weekly risk reviews. Ask: Have probabilities changed? Have new risks emerged? Are mitigation plans working? Update your Risk Register and adjust plans. Continuous monitoring prevents surprises.'
        }
      ]
    },
    challenge: {
      title: 'Risk Assessment Challenge',
      description: 'Master risk evaluation and management',
      contexts: {
        academic: {
          title: 'Academic Project Risk Mastery',
          description: 'You have a major group project (40% of final grade, due in 4 weeks): Create a business plan for a startup idea, present to 3 industry judges. Your group: 5 members (you, Priya, Rahul, Anjali, Karan). You are excited but have not assessed risks. Last year, 30% of groups failed this project due to unforeseen problems. You need to identify and mitigate ALL major risks to ensure success.',
          instructions: [
            '1. Identify Risks Using Categories (Week 1, Day 1, 2 hours): Create 4 categories and brainstorm 3-5 risks per category. CATEGORY 1 - Team Risks: (1) Member drops out (sick, family emergency), (2) Unequal contribution (some members do not pull weight), (3) Conflict over ideas (disagreements paralyze progress), (4) Scheduling conflicts (cannot find common meeting times). CATEGORY 2 - Content Risks: (1) Weak business idea (judges reject it as unviable), (2) Insufficient research (data is shallow, not convincing), (3) Plagiarism accusation (accidentally used unattributed sources), (4) Misunderstanding requirements (built wrong deliverable). CATEGORY 3 - Execution Risks: (1) Technical issues during presentation (laptop crashes, file corrupted), (2) Poor presentation skills (nervous, unclear, boring), (3) Running out of time (presentation is 20 mins, you have 40 slides), (4) Missing deadline (submitted late, 20% penalty). CATEGORY 4 - External Risks: (1) Professor changes requirements mid-project, (2) Industry judges are tougher than expected, (3) Competing group has same idea (judges compare). Result: 15 risks identified systematically.',
            '2. Quantify Each Risk (Week 1, Day 2, 2 hours): For EACH of the 15 risks, estimate Probability (%) and Impact (grade points lost or project failure). Example: Risk: "Member drops out" - Probability: 20% (1 in 5 groups faces this), Impact: 8/10 (major disruption, quality drops, might fail project). Risk Score: 0.20 × 8 = 1.6. Risk: "Laptop crashes during presentation" - Probability: 10%, Impact: 6/10 (can recover but stressful). Risk Score: 0.10 × 6 = 0.6. Calculate Risk Score for all 15 risks. Document in spreadsheet.',
            '3. Plot on Risk Matrix (Week 1, Day 3, 1 hour): Create 2×2 matrix (Probability: Low/High, Impact: Low/High). Plot all 15 risks. RED ZONE (High Probability + High Impact): "Unequal contribution" (60% probability, 7/10 impact), "Weak business idea" (40% probability, 9/10 impact). ORANGE ZONE (Low Probability + High Impact): "Member drops out" (20% probability, 8/10 impact), "Plagiarism accusation" (10% probability, 10/10 impact - automatic fail). YELLOW ZONE (High Probability + Low Impact): "Scheduling conflicts" (70% probability, 3/10 impact). GREEN ZONE (Low Probability + Low Impact): "Professor changes requirements" (5% probability, 4/10 impact). Visual prioritization complete.',
            '4. Mitigate RED and ORANGE Risks (Week 1, Days 4-5, 4 hours): For each high-priority risk, choose mitigation strategy. RED Risk 1: "Unequal contribution" (60%, 7/10) → REDUCE: Create contribution tracking system (Google Doc with tasks assigned, deadlines, weekly check-ins). Set expectation: "Everyone contributes equally or we escalate to professor." Probability drops to 20%. RED Risk 2: "Weak business idea" (40%, 9/10) → REDUCE: Validate idea in Week 1. Survey 50 potential customers. Interview 3 industry experts. Pivot if idea is weak. Probability drops to 10%. ORANGE Risk 1: "Member drops out" (20%, 8/10) → REDUCE: Cross-train team (everyone knows 2 sections of project, not just 1). If someone drops, others can cover. Impact drops to 4/10. ORANGE Risk 2: "Plagiarism accusation" (10%, 10/10) → AVOID: Use Turnitin to check all content. Cite EVERY source. Zero tolerance for copy-paste. Probability drops to 2%. Document mitigation plans.',
            '5. Create Risk Register (Week 1, Day 6, 2 hours): Build spreadsheet. Columns: Risk Description, Category, Probability (%), Impact (1-10), Risk Score, Priority (Red/Orange/Yellow/Green), Mitigation Strategy, Owner (who is responsible?), Status (Open/In Progress/Mitigated). Example Row: "Unequal contribution | Team | 60% → 20% (after mitigation) | 7/10 | 1.4 | RED | Contribution tracking + weekly check-ins | Priya | In Progress." Populate all 15 risks. This is your risk management dashboard.',
            '6. Monitor Risks Weekly (Weeks 2-4, 30 mins/week): Every Monday, review Risk Register as a team. Ask: (1) Have any risks materialized? (If yes, execute mitigation plan.) (2) Have probabilities changed? (Example: Week 3, Karan misses 2 meetings → "Member drops out" probability increases from 20% to 40%. Address immediately.) (3) Are mitigation plans working? (Contribution tracking → everyone is contributing equally? Yes? Great.) (4) Any NEW risks? (Week 3: You discover judges prefer tech startups, your idea is retail → NEW RISK: "Idea mismatch with judges" → Pivot or reframe idea). Update Risk Register. Adjust plans. This weekly review keeps you proactive.',
            '7. Execute Presentation Day Contingencies (Week 4, Day 7): For presentation day, prepare for technical risks. Contingency Plan: (1) Save presentation in 3 places (laptop, USB, cloud), (2) Arrive 30 mins early to test equipment, (3) Have printed backup slides (if projector fails), (4) Assign backup presenter (if main presenter is sick). Result: When Rahul\'s laptop crashes 5 minutes before presentation, you calmly switch to USB backup. Judges do not even notice. You present flawlessly. Grade: A.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Random brainstorming: Identifying 5 obvious risks (laptop crash, member drops out) and missing 10 others (plagiarism, weak idea, unequal contribution). Solution: Use Risk Categories to systematically identify 15-20 risks.',
            '• No quantification: Knowing "member drops out is a risk" but not quantifying probability (20%) or impact (8/10). Result: Cannot prioritize. Solution: Calculate Risk Score for EVERY risk.',
            '• Treating all risks equally: Spending 2 hours preventing laptop crash (₹1K impact) while ignoring weak business idea (project failure). Solution: Use Risk Matrix to prioritize. Focus on RED/ORANGE zones.',
            '• No mitigation: Identifying risks but not planning mitigation. When risk materializes, you panic. Solution: For each RED/ORANGE risk, document mitigation strategy and assign owner.',
            '• One-time assessment: Assessing risks in Week 1, never revisiting. Week 3: Member starts missing meetings (risk probability increased), but you do not notice until too late. Solution: Weekly risk reviews.'
          ],
          successCriteria: [
            '✅ You identify 15-20 risks using 4 categories (Team, Content, Execution, External)',
            '✅ You quantify EVERY risk (Probability × Impact = Risk Score)',
            '✅ You plot risks on Risk Matrix and prioritize (Red/Orange/Yellow/Green)',
            '✅ You mitigate all RED and ORANGE risks with documented strategies',
            '✅ You create a Risk Register with 15 risks, owners, and status tracking',
            '✅ You conduct weekly risk reviews (4 weeks) and update the register',
            '✅ Your group project succeeds with zero major surprises',
            '✅ You receive A grade and feedback: "Excellent risk management and execution"'
          ]
        },
        professional: {
          title: 'Professional Risk Excellence',
          description: 'You are a Junior Business Analyst at a consulting firm. Your client (e-commerce startup, ₹50L revenue/month) wants to launch a new product category (electronics) in 3 months. Your manager assigns you: "Conduct risk assessment for this launch. Identify all major risks, quantify them, and present mitigation plan to the CEO." This is your first solo risk assessment. Success = CEO approves launch. Failure = CEO cancels launch (and questions your competence).',
          instructions: [
            '1. Identify Risks Using Categories (Week 1, 3 hours): Use 4 business risk categories. CATEGORY 1 - Financial Risks: (1) Low sales (electronics do not sell, ₹20L inventory stuck), (2) High return rate (defective products, 30% returns vs 5% for other categories), (3) Payment gateway issues (checkout failures, lost sales), (4) Supplier payment terms (they demand 100% upfront, cash flow strain). CATEGORY 2 - Operational Risks: (1) Supplier delays (electronics arrive late, miss launch date), (2) Quality issues (products are defective, customer complaints), (3) Logistics challenges (electronics are fragile, 20% damage in transit), (4) Inventory management (overstocking or understocking). CATEGORY 3 - Market Risks: (1) Competitor launches same category (price war), (2) Low customer demand (market research was wrong), (3) Regulatory issues (electronics need certifications, you do not have them), (4) Economic downturn (recession, customers cut discretionary spending). CATEGORY 4 - Reputational Risks: (1) Negative reviews (poor quality products damage brand), (2) Data breach (customer payment info stolen), (3) Poor customer service (electronics need tech support, you are not ready), (4) Social media backlash (viral complaint about defective product). Result: 16 risks identified.',
            '2. Quantify Each Risk (Week 1, 4 hours): For EACH risk, estimate Probability (%) and Impact (₹ loss). Example: Risk: "Low sales" - Probability: 30% (new category, uncertain demand), Impact: ₹20L (inventory stuck + marketing spend wasted). Risk Score: 0.30 × ₹20L = ₹6L expected loss. Risk: "Supplier delays" - Probability: 20% (supplier is new, unproven), Impact: ₹5L (miss launch date, lost revenue + reputation damage). Risk Score: 0.20 × ₹5L = ₹1L. Risk: "Data breach" - Probability: 5% (you have security measures), Impact: ₹50L (lawsuits + brand damage + customer loss). Risk Score: 0.05 × ₹50L = ₹2.5L. Calculate for all 16 risks. Document in Excel.',
            '3. Plot on Risk Matrix (Week 1, 1 hour): Create matrix. RED ZONE: "Low sales" (30%, ₹20L), "High return rate" (25%, ₹15L). ORANGE ZONE: "Data breach" (5%, ₹50L), "Supplier delays" (20%, ₹5L), "Regulatory issues" (15%, ₹10L). YELLOW ZONE: "Payment gateway issues" (40%, ₹2L). GREEN ZONE: "Economic downturn" (10%, ₹3L - low probability, you cannot control it). Prioritize: Focus mitigation on RED (₹6L + ₹3.75L = ₹9.75L total risk) and ORANGE zones (₹2.5L + ₹1L + ₹1.5L = ₹5L total risk).',
            '4. Mitigate RED and ORANGE Risks (Week 2, 8 hours): RED Risk 1: "Low sales" (30%, ₹20L) → REDUCE: (a) Pilot test: Launch with 50 products (not 500) to test demand. Investment: ₹2L (not ₹20L). (b) Pre-orders: Gauge demand before ordering inventory. (c) Marketing: ₹5L campaign targeting electronics buyers. Probability drops to 10%, Impact drops to ₹2L. RED Risk 2: "High return rate" (25%, ₹15L) → REDUCE: (a) Quality check: Inspect 100% of products before shipping. (b) Supplier guarantee: Contract clause - supplier covers defective products. (c) Clear product descriptions: Reduce "not as expected" returns. Probability drops to 10%, Impact drops to ₹5L. ORANGE Risk 1: "Data breach" (5%, ₹50L) → TRANSFER: Buy cyber insurance (₹50K premium covers ₹50L loss). ORANGE Risk 2: "Supplier delays" (20%, ₹5L) → REDUCE: (a) Contract with penalty clause (₹1L penalty if late). (b) Backup supplier (ready to step in). Probability drops to 5%. ORANGE Risk 3: "Regulatory issues" (15%, ₹10L) → AVOID: Get all certifications BEFORE launch (BIS certification for electronics). Probability drops to 2%. Document all mitigation plans with costs and timelines.',
            '5. Build Risk Register (Week 2, 2 hours): Create professional Excel sheet. Columns: Risk ID, Risk Description, Category, Probability (%), Impact (₹), Risk Score (₹), Priority, Mitigation Strategy, Cost of Mitigation, Owner, Timeline, Status. Example Row: "R001 | Low sales - electronics do not sell | Financial | 30% → 10% | ₹20L → ₹2L | ₹6L → ₹0.2L | RED | Pilot test (50 products) + pre-orders + ₹5L marketing | ₹7L | Priya (Marketing) | Week 3-6 | In Progress." Populate all 16 risks. Add summary: Total Risk (before mitigation): ₹14.75L. Total Risk (after mitigation): ₹3.2L. Mitigation investment: ₹8L. Net benefit: ₹11.55L risk reduced.',
            '6. Present to CEO (Week 3, 1 hour): Create presentation. Slide 1: Executive Summary (16 risks identified, ₹14.75L total risk, ₹8L mitigation investment → ₹3.2L residual risk). Slide 2: Risk Matrix (visual - RED/ORANGE/YELLOW/GREEN zones). Slide 3: Top 5 Risks (Low sales, High return rate, Data breach, Supplier delays, Regulatory issues) with mitigation plans. Slide 4: Cost-Benefit Analysis (₹8L mitigation investment prevents ₹11.55L expected loss → ROI 145%). Slide 5: Recommendation (Launch with mitigation plans in place. Residual risk ₹3.2L is acceptable given ₹50L+ revenue potential). Slide 6: Risk Monitoring Plan (weekly reviews for 6 months post-launch). Present confidently. CEO asks tough questions: "What if sales are even lower?" You answer: "We mitigated with pilot test. If 50 products do not sell, we stop at ₹2L loss, not ₹20L." CEO approves launch. Your manager gives feedback: "Excellent risk assessment. Very thorough."',
            '7. Monitor Post-Launch (Months 1-3, weekly reviews): After launch, track risks. Week 4: Sales are strong (pilot test worked!). Week 8: Return rate is 12% (higher than 5% target but lower than 30% worst-case). Investigate: Some products have minor defects. Action: Tighten quality checks, negotiate with supplier. Week 12: Data breach attempt detected (security measures worked, no breach). Update Risk Register weekly. By Month 3: Electronics category = ₹15L revenue/month, 8% return rate, zero major issues. CEO emails: "Great risk management. You prevented multiple disasters." Promotion discussion begins.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Incomplete risk identification: Identifying 5 obvious risks (low sales, supplier delays) and missing 11 others (data breach, regulatory issues, quality problems). Solution: Use 4 Risk Categories to systematically identify 15-20 risks.',
            '• Vague quantification: "Low sales is a big risk." How big? ₹5L? ₹20L? Cannot prioritize without numbers. Solution: Quantify EVERY risk (Probability × Impact = Risk Score in ₹).',
            '• No cost-benefit analysis: Recommending ₹10L mitigation for ₹2L risk. CEO rejects as wasteful. Solution: Calculate ROI for mitigation (₹8L investment prevents ₹11.55L loss = 145% ROI).',
            '• Weak presentation: Showing CEO a 50-row Excel sheet. CEO is confused, rejects proposal. Solution: Create visual presentation (Risk Matrix, Top 5 Risks, Cost-Benefit Analysis). Make it CEO-friendly.',
            '• No post-launch monitoring: Assessing risks pre-launch, never monitoring post-launch. Week 8: Return rate spikes to 25%, you do not notice until Month 3 (too late). Solution: Weekly risk reviews for 6 months post-launch.'
          ],
          successCriteria: [
            '✅ You identify 15-20 risks using 4 business categories (Financial, Operational, Market, Reputational)',
            '✅ You quantify EVERY risk in ₹ (Probability × Impact = Risk Score)',
            '✅ You create a Risk Matrix and prioritize (Red/Orange/Yellow/Green)',
            '✅ You mitigate RED and ORANGE risks with cost-benefit analysis (ROI 145%)',
            '✅ You build a professional Risk Register with 16 risks, costs, owners, timelines',
            '✅ You present to CEO with visual slides and get approval for launch',
            '✅ You monitor risks weekly post-launch and prevent 3 major issues',
            '✅ CEO and manager give feedback: "Excellent risk assessment and management"'
          ]
        },
        personal: {
          title: 'Personal Decision Risk Wisdom',
          description: 'You are considering a major life decision: Quit your stable job (₹6 LPA, 9-5, boring but safe) to start a business (online tutoring platform for B.Com students). You are excited about entrepreneurship but terrified of failure. Your savings: ₹5 lakhs (enough for 10 months). Your parents are against it ("Too risky!"). Your friends are split (some say "Go for it!", others say "Are you crazy?"). You need to assess risks systematically before deciding.',
          instructions: [
            '1. Identify Risks Using Categories (Week 1, 2 hours): Use 4 personal risk categories. CATEGORY 1 - Financial Risks: (1) Business fails, ₹5L savings depleted, (2) No income for 12 months (vs ₹6 LPA job), (3) Cannot find job again (1-year gap in resume), (4) Debt (need to borrow ₹3L if business takes longer). CATEGORY 2 - Career Risks: (1) Resume gap hurts future employability, (2) Skills become outdated (not working in industry), (3) Network weakens (lose corporate connections), (4) Age factor (30 years old, harder to restart career). CATEGORY 3 - Personal Risks: (1) Stress and anxiety (financial pressure, uncertainty), (2) Relationship strain (partner worried about money), (3) Social pressure (parents disappointed, friends judge), (4) Health issues (stress-induced, no health insurance without job). CATEGORY 4 - Business Risks: (1) Low customer demand (students do not pay for tutoring), (2) High competition (100+ tutoring platforms exist), (3) Execution challenges (you are not a marketer/salesperson), (4) Regulatory issues (need to register business, pay taxes). Result: 16 risks identified.',
            '2. Quantify Each Risk (Week 1, 3 hours): For EACH risk, estimate Probability (%) and Impact (scale 1-10, where 10 = life-altering negative impact). Example: Risk: "Business fails, ₹5L depleted" - Probability: 60% (most startups fail in Year 1), Impact: 8/10 (major financial setback, but not life-ending). Risk Score: 0.60 × 8 = 4.8. Risk: "Cannot find job again" - Probability: 30% (1-year gap is concerning but not disqualifying), Impact: 9/10 (career derailed). Risk Score: 0.30 × 9 = 2.7. Risk: "Relationship strain" - Probability: 40% (partner is already worried), Impact: 7/10 (serious but repairable). Risk Score: 0.40 × 7 = 2.8. Calculate for all 16 risks.',
            '3. Plot on Risk Matrix (Week 1, 1 hour): Create matrix. RED ZONE: "Business fails, ₹5L depleted" (60%, 8/10), "Low customer demand" (50%, 7/10). ORANGE ZONE: "Cannot find job again" (30%, 9/10), "Relationship strain" (40%, 7/10), "Stress and anxiety" (70%, 5/10). YELLOW ZONE: "Skills become outdated" (60%, 4/10). GREEN ZONE: "Regulatory issues" (10%, 3/10 - manageable). Prioritize: Focus on RED and ORANGE zones (highest risk to your life).',
            '4. Mitigate RED and ORANGE Risks (Week 2, 5 hours): RED Risk 1: "Business fails, ₹5L depleted" (60%, 8/10) → REDUCE: (a) Validate idea BEFORE quitting: Spend 3 months (evenings/weekends) building MVP (Minimum Viable Product) while still employed. Get 50 paying customers. If validation fails, do not quit job. (b) Reduce burn rate: Start business part-time (not full-time) for first 6 months. Keep job, work on business evenings/weekends. If business grows to ₹3 LPA revenue, THEN quit job. Probability drops to 30%, Impact drops to 4/10 (only ₹1L invested, not ₹5L). RED Risk 2: "Low customer demand" (50%, 7/10) → REDUCE: (a) Pre-sell: Get 100 students to pay ₹5000 upfront for 6-month tutoring. Revenue: ₹5L (covers your expenses for 10 months). This validates demand BEFORE you quit. (b) Niche down: Instead of "B.Com tutoring" (broad, competitive), focus on "CA Foundation tutoring" (narrow, less competition). Probability drops to 20%. ORANGE Risk 1: "Cannot find job again" (30%, 9/10) → REDUCE: (a) Keep skills updated: Take 1 online course/month (finance, marketing, tech). (b) Network actively: Attend 2 industry events/month. Stay visible. (c) Plan B: If business fails after 12 months, you have updated skills + network → finding job is easier. Probability drops to 15%, Impact drops to 6/10. ORANGE Risk 2: "Relationship strain" (40%, 7/10) → REDUCE: (a) Communicate: Sit with partner, share Risk Register, show mitigation plans. (b) Set boundaries: "I will try business for 12 months. If revenue < ₹3 LPA by Month 12, I will get a job. Deal?" Clear expectations reduce anxiety. Probability drops to 20%.',
            '5. Create Risk Register (Week 2, 2 hours): Build spreadsheet. Columns: Risk Description, Category, Probability (%), Impact (1-10), Risk Score, Priority, Mitigation Strategy, Status. Example Row: "Business fails, ₹5L depleted | Financial | 60% → 30% | 8/10 → 4/10 | 4.8 → 1.2 | RED | Validate idea for 3 months while employed, start part-time, pre-sell to 100 students | In Progress." Populate all 16 risks. Summary: Total Risk (before mitigation): 35.2 (sum of all risk scores). Total Risk (after mitigation): 12.8. Risk reduced by 64%.',
            '6. Make Decision (Week 3, 1 hour): Review Risk Register. Original decision: "Quit job immediately, start business full-time." Risk Score: 35.2 (HIGH). Mitigated decision: "Validate idea for 3 months while employed → Pre-sell to 100 students → Start part-time for 6 months → If revenue ≥ ₹3 LPA, quit job and go full-time." Risk Score: 12.8 (MODERATE, acceptable). Decision: Proceed with mitigated plan. You do NOT quit job immediately. You validate first. This reduces risk by 64% while preserving the opportunity.',
            '7. Execute and Monitor (Months 1-12): Month 1-3 (Validation Phase): Build MVP (tutoring website) while working 9-5 job. Work evenings/weekends (6 PM - 11 PM, 5 hours/day). Launch MVP. Get 20 paying students (₹1L revenue). Validation: Demand exists! Month 4-9 (Part-Time Phase): Continue job, scale business to 80 students (₹4L revenue). Quit job. Month 10-12 (Full-Time Phase): Focus 100% on business. Scale to 200 students (₹10L revenue). Result: Business is profitable. Risk mitigation worked. You avoided "quit job immediately, business fails, ₹5L depleted" disaster. Instead: Validated demand, built revenue, THEN quit job. Smart risk management.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Impulsive decision: Quitting job immediately without validating business idea. Result: Business fails, ₹5L depleted, cannot find job (resume gap). Solution: Validate FIRST (3 months while employed), THEN decide.',
            '• Ignoring personal risks: Focusing only on business risks (demand, competition) and ignoring personal risks (relationship strain, stress, health). Result: Business succeeds but relationship fails. Solution: Assess ALL 4 categories (Financial, Career, Personal, Business).',
            '• No mitigation: Identifying risks but not planning mitigation. "Business might fail. Oh well, I will deal with it." Result: When business fails, you are unprepared (no savings, no Plan B, no job prospects). Solution: Mitigate RED/ORANGE risks BEFORE taking the leap.',
            '• All-or-nothing thinking: "Either I quit job and go full-time, or I do not start business at all." Result: You take massive risk or no risk. Solution: Gradual approach (validate part-time → pre-sell → scale → THEN quit job). Reduces risk by 64%.',
            '• No monitoring: Making decision based on Week 1 risk assessment, never revisiting. Month 6: Business is not growing (demand lower than expected), but you do not adjust. Result: You burn through ₹5L savings. Solution: Monthly risk reviews. If risks materialize (low demand), pivot or exit early (save ₹3L).'
          ],
          successCriteria: [
            '✅ You identify 15-20 risks using 4 categories (Financial, Career, Personal, Business)',
            '✅ You quantify EVERY risk (Probability × Impact = Risk Score)',
            '✅ You plot risks on Risk Matrix and prioritize (Red/Orange/Yellow/Green)',
            '✅ You mitigate RED and ORANGE risks (reduce total risk by 64%)',
            '✅ You create a Risk Register with 16 risks and mitigation strategies',
            '✅ You make a data-driven decision (validate first, then quit job - not impulsive)',
            '✅ You execute the mitigated plan (3-month validation, 6-month part-time, then full-time)',
            '✅ Your business succeeds (₹10L revenue in 12 months) with minimal personal/financial damage'
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
      scenario: 'You keep failing Accounting exams (3 attempts: 45%, 48%, 42%). After each failure, you "fix" the problem: Attempt 1 (45%) → "I did not study enough" → Study 2 more hours/day. Attempt 2 (48%) → "I need better notes" → Buy premium notes for ₹2000. Attempt 3 (42%) → "I am just bad at Accounting" → Consider dropping the subject. But the problem RECURS. Why? You are treating SYMPTOMS (low study hours, bad notes), not the ROOT CAUSE. Meanwhile, your classmate Priya failed Attempt 1 (43%), did Root Cause Analysis, and scored 78% in Attempt 2. What did she find? ROOT CAUSE: "I memorize formulas without understanding concepts. During exams, I panic when questions are twisted. I cannot apply formulas to new scenarios." Her fix: Change study method from memorization to concept-based learning (solve 50 varied problems, teach concepts to friends, explain WHY formulas work). Result: 78%. You need Root Cause Analysis to stop recurring failures.',
      problemExplanation: [
        '🩹 Treating Symptoms, Not Causes: You see the SYMPTOM (failed exam, scored 45%) and apply a surface-level fix ("Study 2 more hours/day"). But you do not ask WHY you failed. Is it study hours? Study method? Concept understanding? Exam anxiety? Time management during exam? Without identifying the ROOT CAUSE, your fix is a band-aid. Result: Problem recurs (48%, then 42%). You are stuck in a loop: Fail → Surface fix → Fail again → Different surface fix → Fail again. This is exhausting and demoralizing.',
        '🔄 Recurring Problems: You have been failing Accounting for 3 attempts. Your group projects always have last-minute chaos (happened 5 times). Your internship applications always get rejected (10 applications, 0 interviews). These are RECURRING problems - clear signal that you are not addressing root causes. One-time problems = bad luck. Recurring problems = systemic issue you are not fixing. Until you do Root Cause Analysis, the pattern will continue.',
        '🤷 No Systematic Investigation: After failing, you guess the cause ("I did not study enough"). But this is a GUESS, not analysis. You do not gather evidence (What topics did I get wrong? Did I run out of time? Did I misunderstand questions? Did I know the concepts but make calculation errors?). Without systematic investigation, you fix the wrong problem. Example: You assume "low study hours" is the issue, so you study 2 more hours/day. But the REAL issue is "poor concept understanding" - more hours of bad study method = still failing.',
        '🎯 Fixing the Wrong Problem: You buy premium notes for ₹2000, thinking "better notes = better scores." But if the root cause is "exam anxiety" (you know the material but panic during exams), better notes will not help. You wasted ₹2000 and time. Worse: You feel frustrated ("I tried everything, nothing works!"). Reality: You did not try the RIGHT thing because you did not identify the root cause. Fixing the wrong problem = wasted effort + recurring failure.',
        '😞 Learned Helplessness: After 3 failures, you conclude "I am just bad at Accounting." This is learned helplessness - you believe the problem is unfixable (your inherent ability), so you give up. But the problem is NOT your ability - it is your study method (fixable!). Root Cause Analysis reveals: "I memorize without understanding" (fixable by changing study method). Without RCA, you blame yourself instead of fixing the system.',
        '💸 Expensive Recurring Costs: Every recurring problem has a cost. Failed exams = ₹5000 re-exam fees + 3 months wasted + stress + damaged confidence. Group project chaos = poor grades + strained relationships + reputation damage. Internship rejections = missed opportunities + delayed career start. These costs COMPOUND over time. Root Cause Analysis is an investment: Spend 2 hours analyzing the root cause, fix it once, save months/years of recurring costs.'
      ],
      solutionApproach: [
        '❓ The 5 Whys Technique: Start with the problem, ask "Why?" 5 times to drill down to the root cause. Example: Problem: "I failed Accounting exam (42%)." Why? "I could not solve application-based questions." Why? "I did not practice enough varied problems." Why? "I only solved textbook problems (same format)." Why? "I thought textbook problems were sufficient." Why? "I did not understand that exams test application, not memorization." ROOT CAUSE: "I study for memorization, not application." Fix: Solve 50 varied problems from past exams, case studies, real-world scenarios. This addresses the root cause, not symptoms.',
        '🐟 Fishbone Diagram (Ishikawa): Organize potential causes into categories to ensure comprehensive analysis. Draw a fishbone: Head = Problem (Failed exam). Bones = Categories: (1) Study Method (memorization vs understanding), (2) Time Management (ran out of time during exam?), (3) Concept Gaps (which topics are weak?), (4) Exam Technique (misread questions? calculation errors?), (5) External Factors (stress, health, distractions). For EACH category, brainstorm 3-5 potential causes. Then investigate which are actual root causes. This prevents tunnel vision (assuming one cause without exploring others).',
        '🔬 Gather Evidence: Do not guess the root cause - gather DATA. For failed exam: (1) Analyze your answer sheet (which questions did you get wrong? Conceptual errors or calculation errors?), (2) Compare with toppers (what did they do differently?), (3) Talk to professor (what are common mistakes?), (4) Review your study notes (are they concept-based or formula-based?). Evidence reveals the truth. Example: You discover 80% of errors were in "application questions" (not theory). This confirms root cause: "Weak application skills, not lack of knowledge."',
        '🧪 Test Your Root Cause Hypothesis: Before implementing a fix, TEST if your identified root cause is correct. Hypothesis: "I fail because I memorize without understanding." Test: Take a practice exam. For each question, explain WHY the answer is correct (not just WHAT the answer is). If you struggle to explain WHY, hypothesis is confirmed. If you can explain WHY but still get wrong answers, hypothesis is wrong (maybe root cause is calculation errors, not understanding). Testing prevents wasting time fixing the wrong cause.',
        '🔧 Implement Root Cause Fixes: Once you identify and verify the root cause, implement a fix that addresses IT, not symptoms. Root Cause: "I study for memorization, not application." Fix: (1) For every concept, solve 10 varied problems (not just textbook), (2) Teach concepts to a friend (teaching forces understanding), (3) Explain WHY formulas work (not just HOW to use them), (4) Take 5 practice exams under timed conditions (build application skills). This fix targets the root cause. Result: Next exam = 78% (not 42%).',
        '📊 Monitor and Verify: After implementing the fix, monitor results. Did the problem recur? Exam 1: 42% (before fix). Exam 2: 78% (after fix). Problem solved! But if Exam 2: 50% (slight improvement but still failing), your root cause analysis was incomplete. Go back to Fishbone, investigate other categories (maybe Time Management is also a root cause?). Root Cause Analysis is iterative - you might need 2-3 cycles to fully solve recurring problems.'
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
          question: 'You failed Accounting 3 times (45%, 48%, 42%). After each failure, you tried: Study 2 more hours, buy premium notes, hire tutor. Still failing. What is the problem?',
          options: [
            'You are not trying hard enough - need to study even more hours',
            'You are treating SYMPTOMS (study hours, notes quality), not the ROOT CAUSE (study method: memorization vs application)',
            'Accounting is too hard for you - consider dropping the subject',
            'You need an even better tutor'
          ],
          correct: 1,
          explanation: 'Option 2 identifies the core issue - treating symptoms instead of root causes. Studying more hours (symptom fix) does not work if your study METHOD is wrong (memorization instead of application). Buying premium notes (symptom fix) does not help if you are not understanding concepts. The ROOT CAUSE might be: "I memorize formulas without understanding. I cannot apply concepts to new scenarios." Fix: Change study method (solve 50 varied problems, teach concepts to friends, explain WHY formulas work). This addresses the root cause. Result: 78% next exam. In B.Com, recurring problems signal you are fixing symptoms, not root causes. Use 5 Whys or Fishbone Diagram to find the real issue.'
        },
        {
          id: 27,
          question: 'You are using the 5 Whys technique for a failed exam. You ask "Why did I fail?" and get "I did not study enough." What should you do next?',
          options: [
            'Stop here - you found the root cause (low study hours)',
            'Ask "Why did I not study enough?" and continue asking "Why?" 4 more times to drill deeper to the ROOT CAUSE',
            'Implement the fix: Study 2 more hours/day',
            'Ask 5 different people why you failed'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - "I did not study enough" is a SYMPTOM, not the root cause. The 5 Whys technique requires asking "Why?" 5 times to drill deeper. Continue: Why did I not study enough? → "I procrastinated." Why did I procrastinate? → "I found studying boring." Why was it boring? → "I was just reading passively, not engaging." Why passive reading? → "I did not know active study techniques." ROOT CAUSE: "I lack active study techniques (problem-solving, teaching, practice exams)." Fix: Learn and apply active techniques. If you stopped at "I did not study enough" (Option 1), you would study more hours using the SAME bad method (passive reading) and still fail. In B.Com, surface-level answers are symptoms. Keep asking "Why?" until you hit the root.'
        },
        {
          id: 28,
          question: 'You create a Fishbone Diagram for failed exams. You identify 5 categories: Study Method, Time Management, Concept Gaps, Exam Technique, External Factors. What is the purpose of using categories?',
          options: [
            'To make the diagram look organized and professional',
            'To ensure COMPREHENSIVE analysis - categories prevent tunnel vision and help you explore ALL potential root causes, not just the obvious ones',
            'To confuse yourself with too many options',
            'Categories are not important - just list any causes randomly'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - categories ensure comprehensive root cause analysis. Without categories, you might focus on ONE obvious cause ("I did not study enough") and miss OTHER root causes (exam anxiety, poor time management during exam, weak specific topics, calculation errors). Fishbone categories force you to explore: Study Method (memorization vs understanding?), Time Management (ran out of time?), Concept Gaps (weak in Cost Accounting?), Exam Technique (misread questions?), External Factors (stress, health issues?). For EACH category, brainstorm 3-5 potential causes. Then gather evidence to identify which are actual root causes. Example: You discover 80% of errors were in "application questions" (Study Method category), not time management or concept gaps. This data-driven approach prevents fixing the wrong problem. In B.Com problem-solving, systematic categorization > random brainstorming.'
        },
        {
          id: 29,
          question: 'You hypothesize: "I fail exams because I memorize without understanding." Before implementing a fix (concept-based learning), what should you do?',
          options: [
            'Immediately start concept-based learning - the hypothesis is obviously correct',
            'TEST the hypothesis: Take a practice exam and try to explain WHY each answer is correct (not just WHAT). If you struggle to explain WHY, hypothesis is confirmed.',
            'Ask your friends if they think your hypothesis is correct',
            'Ignore the hypothesis and try a different fix'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - always TEST your root cause hypothesis before implementing fixes. Why? You might be wrong. If you assume "memorization" is the issue but the REAL root cause is "calculation errors," you will waste 4 weeks on concept-based learning (which you already have) instead of fixing calculations. Testing: Take a practice exam. For each question, explain WHY the answer is correct. If you struggle to explain WHY (even though you know WHAT), hypothesis is confirmed (weak understanding). If you explain WHY perfectly but still get wrong answers, hypothesis is WRONG (maybe root cause is calculation accuracy, time management, or exam anxiety). Testing prevents wasting time fixing the wrong problem. In B.Com, verify root causes with evidence before investing time/money in fixes.'
        },
        {
          id: 30,
          question: 'After Root Cause Analysis, you discover: "I fail because I memorize formulas without understanding concepts." You implement a fix (concept-based learning). Next exam: 78% (up from 42%). What should you do now?',
          options: [
            'Celebrate and move on - problem is solved',
            'MONITOR results: Track next 2-3 exams to ensure problem does not recur. If it recurs, your root cause analysis was incomplete (there might be additional root causes).',
            'Go back to memorization - it is easier',
            'Stop studying - you already proved you can score 78%'
          ],
          correct: 1,
          explanation: 'Option 2 is correct - Root Cause Analysis is iterative, not one-time. You scored 78% (great!), but you need to MONITOR next 2-3 exams to ensure the problem does not recur. If Exam 3: 75%, Exam 4: 80% → Problem is SOLVED permanently. Root cause fix worked. If Exam 3: 50% (problem recurs) → Your root cause analysis was INCOMPLETE. There might be additional root causes (exam anxiety, time management, specific topic gaps). Go back to Fishbone Diagram, investigate other categories. Example: You fixed Study Method (memorization → understanding), but you still have Time Management issues (running out of time during exams). Fix that too. In B.Com, recurring problems after "fixing" them signal incomplete root cause analysis. Monitor, iterate, and refine until the problem is permanently solved.'
        }
      ]
    },
    challenge: {
      title: 'Root Cause Challenge',
      description: 'Master root cause analysis',
      contexts: {
        academic: {
          title: 'Academic Root Cause Mastery',
          description: 'You keep failing Statistics exams (4 attempts: 38%, 42%, 40%, 39%). After each failure, you tried different "fixes": Study 3 more hours/day, buy ₹3000 coaching, change study location, use different textbook. Nothing works. You are frustrated and considering dropping Statistics (required for B.Com degree). This is a RECURRING problem - clear signal you are fixing symptoms, not the root cause. You need Root Cause Analysis to break this failure cycle.',
          instructions: [
            '1. Apply 5 Whys (Week 1, Day 1, 1 hour): Start with the problem, ask "Why?" 5 times. Problem: "I failed Statistics exam (39%)." Why? "I could not solve probability questions." Why? "I did not understand the concepts." Why? "The textbook explanations were confusing." Why? "I did not seek alternative explanations (videos, professor office hours, study groups)." Why? "I assumed textbook was the only resource and did not know how to learn differently." ROOT CAUSE: "I rely on a single learning resource (textbook) without seeking alternative explanations when I do not understand. I lack meta-learning skills (knowing HOW to learn)." This is deeper than "I did not study enough" (symptom).',
            '2. Create Fishbone Diagram (Week 1, Day 2, 2 hours): Organize potential root causes into 5 categories. CATEGORY 1 - Study Method: Passive reading vs active problem-solving? Memorization vs understanding? No practice exams? CATEGORY 2 - Learning Resources: Only using textbook? Not watching videos? Not attending office hours? CATEGORY 3 - Concept Gaps: Weak math foundation (algebra, calculus)? Skipped prerequisite topics? CATEGORY 4 - Exam Technique: Misreading questions? Calculation errors? Time management during exam? CATEGORY 5 - External Factors: Math anxiety? Negative self-talk ("I am bad at math")? Distractions while studying? For EACH category, brainstorm 3-5 potential causes. Result: 20 potential root causes identified.',
            '3. Gather Evidence (Week 1, Days 3-4, 4 hours): Do not guess - collect DATA. STEP 1: Analyze your 4 exam answer sheets. Which questions did you get wrong? Pattern: 80% of errors were in "probability and distributions" (specific topics), not across all topics. 15% were calculation errors. 5% were time management. INSIGHT: Root cause is NOT "I am bad at Statistics" - it is "I am weak in specific topics (probability, distributions)." STEP 2: Compare with toppers. Talk to 3 students who scored 75%+. Ask: "How did you study probability?" Their answer: "We watched 10 YouTube videos (Khan Academy, StatQuest), solved 50 problems, formed a study group to teach each other." INSIGHT: Toppers use MULTIPLE learning resources, not just textbook. STEP 3: Talk to professor. Ask: "What are common mistakes in probability questions?" Professor: "Students memorize formulas but do not understand WHEN to use which formula. They struggle with word problems." INSIGHT: Confirms root cause - weak conceptual understanding + reliance on single resource (textbook).',
            '4. Test Root Cause Hypothesis (Week 1, Day 5, 2 hours): Hypothesis: "I fail because I rely on textbook only and do not understand probability concepts deeply." Test: Pick 5 probability questions. For EACH question: (1) Solve it, (2) Explain WHY you chose that formula (not just WHAT formula), (3) Explain what the answer MEANS in real-world context. RESULT: You solve 2/5 correctly. For the other 3, you struggle to explain WHY you chose the formula. You realize: "I memorized formulas but do not understand WHEN to use them." Hypothesis CONFIRMED. Root cause is weak conceptual understanding + single learning resource.',
            '5. Implement Root Cause Fix (Weeks 2-4, 3 weeks): Now that root cause is verified, implement a fix that addresses IT (not symptoms). ROOT CAUSE: "Weak probability concepts + reliance on single resource (textbook)." FIX: (1) Watch 15 YouTube videos on probability (Khan Academy, StatQuest, 3Blue1Brown). Take notes. Pause and solve examples. (2) Solve 60 probability problems from 3 sources (textbook, past exams, online problem sets). Focus on VARIED problems, not repetitive. (3) Join a study group (3 students). Each week, teach 2 probability concepts to the group. Teaching = deep understanding. (4) Attend professor office hours 2x/week. Ask: "WHY does this formula work? WHEN do I use it?" (5) Take 4 full-length practice exams under timed conditions. Review errors, identify patterns. Timeline: 3 weeks, 2 hours/day. This fix targets the ROOT CAUSE (concepts + resources), not symptoms (study hours).',
            '6. Monitor Results (Week 5 onwards): Take Exam 5. Result: 72% (up from 39%!). Problem is IMPROVING. But monitor next 2 exams to ensure it does not recur. Exam 6: 75%. Exam 7: 78%. Pattern: Consistent improvement, no recurrence. ROOT CAUSE FIX WORKED. You broke the failure cycle by addressing the real issue (learning method + resources), not symptoms (study hours, coaching, location).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stopping at surface-level "Why": Asking "Why did I fail?" → "I did not study enough" → STOP. This is a symptom, not root cause. Keep asking "Why?" 4 more times to drill deeper.',
            '• No evidence gathering: Guessing root cause ("I think it is study hours") without analyzing exam answer sheets, talking to toppers, or consulting professor. Result: Fix the wrong problem.',
            '• Not testing hypothesis: Assuming your root cause is correct without testing. Result: Waste 3 weeks on wrong fix (e.g., studying more hours when root cause is learning method).',
            '• Symptom fixes: Studying 3 more hours/day using the SAME bad method (passive textbook reading). More hours of bad method = still failing. Fix the method, not the hours.',
            '• Giving up too early: After 1 week of root cause fix, you score 50% (slight improvement) and conclude "Root cause analysis does not work." Reality: You need 3-4 weeks for deep fixes (learning method) to show results. Monitor, iterate, persist.'
          ],
          successCriteria: [
            '✅ You apply 5 Whys and drill to ROOT CAUSE (not surface-level symptoms)',
            '✅ You create Fishbone Diagram with 5 categories and 20 potential causes',
            '✅ You gather evidence (analyze 4 exam answer sheets, talk to 3 toppers, consult professor)',
            '✅ You test root cause hypothesis (solve 5 questions, explain WHY for each)',
            '✅ You implement root cause fix (multiple learning resources, 60 problems, study group, office hours, 4 practice exams)',
            '✅ You monitor results: Exam 5 (72%), Exam 6 (75%), Exam 7 (78%) - consistent improvement',
            '✅ Problem does NOT recur - you broke the failure cycle permanently',
            '✅ You can explain: "I failed because I relied on single resource and lacked deep understanding. I fixed it by using multiple resources and teaching concepts to others."'
          ]
        },
        professional: {
          title: 'Professional Root Cause Excellence',
          description: 'You are a Junior Marketing Analyst at an e-commerce company. Problem: Customer complaints have TRIPLED in the last 3 months (from 50/month to 150/month). Your manager tried quick fixes: (1) Hired 2 more customer service reps (complaints still 150/month), (2) Extended support hours to 24/7 (complaints still 145/month), (3) Offered ₹500 discount to complainers (complaints still 140/month, now losing ₹70K/month). Nothing works. Your manager assigns you: "Do Root Cause Analysis. Find WHY complaints are increasing. Present findings and fix in 2 weeks." This is your chance to demonstrate problem-solving skills.',
          instructions: [
            '1. Apply 5 Whys (Week 1, Day 1, 2 hours): Problem: "Customer complaints tripled (50 → 150/month)." Why? "Customers are unhappy with product quality." Why? "Products are arriving damaged." Why? "Packaging is insufficient for fragile items." Why? "We switched to cheaper packaging 3 months ago to cut costs." Why? "Finance team mandated 20% cost reduction without consulting operations." ROOT CAUSE: "Cost-cutting decision (cheaper packaging) was made without impact analysis on product quality and customer satisfaction. No cross-functional communication between Finance and Operations." This is deeper than "customers are unhappy" (symptom).',
            '2. Create Fishbone Diagram (Week 1, Days 2-3, 4 hours): Organize potential causes into 5 categories. CATEGORY 1 - Product Quality: Defective products? Damaged in shipping? Wrong items sent? CATEGORY 2 - Customer Service: Slow response times? Rude agents? Unresolved issues? CATEGORY 3 - Operations: Poor packaging? Shipping delays? Warehouse errors? CATEGORY 4 - Communication: Unclear product descriptions? Misleading marketing? No order tracking? CATEGORY 5 - External Factors: Increased competition? Seasonal issues? Supply chain problems? For EACH category, brainstorm 3-5 potential causes. Result: 25 potential root causes.',
            '3. Gather Evidence (Week 1, Days 4-5, 6 hours): Collect DATA from multiple sources. STEP 1: Analyze 150 complaints. Categorize: 80 complaints (53%) = "Product arrived damaged." 40 complaints (27%) = "Wrong item sent." 20 complaints (13%) = "Slow delivery." 10 complaints (7%) = "Rude customer service." INSIGHT: 53% are packaging/damage issues - this is the PRIMARY root cause. STEP 2: Interview warehouse manager. "What changed 3 months ago?" Answer: "Finance mandated cheaper packaging (₹10/box → ₹4/box). We warned that fragile items need better packaging, but were overruled." INSIGHT: Root cause confirmed - cost-cutting decision without impact analysis. STEP 3: Inspect packaging. Old packaging: Double-layered cardboard + bubble wrap. New packaging: Single-layer cardboard, no bubble wrap. Test: Drop test from 1 meter. Old packaging: Product intact. New packaging: Product breaks. INSIGHT: New packaging is INSUFFICIENT for fragile items. STEP 4: Calculate cost of complaints. 80 damaged products/month × ₹500 refund = ₹40K/month lost. ₹500 discounts to all 150 complainers = ₹75K/month. Total: ₹115K/month. Savings from cheaper packaging: ₹6/box × 1000 boxes/month = ₹6K/month. NET LOSS: ₹109K/month. The "cost-saving" is actually COSTING money!',
            '4. Test Root Cause Hypothesis (Week 1, Day 6, 2 hours): Hypothesis: "Complaints increased because cheaper packaging causes product damage." Test: Run a pilot. For 1 week, use OLD packaging (₹10/box) for 100 orders. Track complaints. Result: 2 complaints out of 100 orders (2% complaint rate, same as 3 months ago). For comparison: New packaging = 15 complaints out of 100 orders (15% complaint rate). HYPOTHESIS CONFIRMED. Cheaper packaging is the root cause of increased complaints.',
            '5. Build Solution (Week 2, Days 1-3, 6 hours): Present findings to management. SLIDE 1: Problem - Complaints tripled (50 → 150/month). Previous fixes failed (more reps, 24/7 support, discounts). SLIDE 2: Root Cause Analysis - Used 5 Whys + Fishbone + Evidence gathering. ROOT CAUSE: Cheaper packaging (₹4/box) causes 53% of complaints (product damage). SLIDE 3: Evidence - Analyzed 150 complaints, interviewed warehouse manager, tested packaging, ran pilot (old packaging = 2% complaints, new packaging = 15% complaints). SLIDE 4: Cost Analysis - Cheaper packaging saves ₹6K/month but costs ₹115K/month in refunds and discounts. NET LOSS: ₹109K/month. SLIDE 5: Recommendation - Revert to old packaging (₹10/box) for fragile items. Keep new packaging for non-fragile items. Estimated result: Complaints drop to 60/month (down from 150), save ₹100K/month. SLIDE 6: Implementation Plan - Week 1: Order old packaging. Week 2: Train warehouse staff. Week 3: Monitor complaint rates. Present to CEO and CFO.',
            '6. Implement and Monitor (Week 2, Days 4-7 + Month 1-3): CEO approves recommendation. Implement: Revert to old packaging for fragile items. Monitor results. Month 1: Complaints drop to 70/month (down from 150). Month 2: Complaints drop to 55/month. Month 3: Complaints stabilize at 50/month (back to baseline). ROOT CAUSE FIX WORKED. Problem solved permanently. Your manager gives feedback: "Excellent root cause analysis. You saved the company ₹100K/month and improved customer satisfaction. Promotion discussion begins."',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Treating symptoms: Hiring more customer service reps (symptom fix) when root cause is product damage (packaging issue). More reps cannot fix damaged products.',
            '• No cross-functional investigation: Only talking to customer service team, not warehouse/operations/finance. Result: Miss the root cause (packaging decision made by finance).',
            '• Not quantifying impact: Saying "complaints increased" without calculating cost (₹115K/month loss). Without numbers, management will not prioritize the fix.',
            '• Weak evidence: Guessing "packaging is the issue" without testing (pilot with old packaging). Management needs DATA, not guesses.',
            '• No monitoring: Implementing fix and assuming it worked without tracking complaints for 3 months. If complaints do not drop, your root cause analysis was wrong.'
          ],
          successCriteria: [
            '✅ You apply 5 Whys and identify ROOT CAUSE (cheaper packaging decision without impact analysis)',
            '✅ You create Fishbone Diagram with 5 categories and 25 potential causes',
            '✅ You gather evidence (analyze 150 complaints, interview warehouse manager, test packaging, run pilot)',
            '✅ You test root cause hypothesis (pilot: old packaging = 2% complaints, new packaging = 15% complaints)',
            '✅ You quantify impact (₹115K/month loss from complaints vs ₹6K/month savings from cheaper packaging = ₹109K net loss)',
            '✅ You present data-driven recommendation to CEO/CFO and get approval',
            '✅ You implement fix and monitor: Complaints drop from 150/month to 50/month over 3 months',
            '✅ Manager gives feedback: "Excellent root cause analysis. Saved ₹100K/month. Promotion discussion."'
          ]
        },
        personal: {
          title: 'Personal Root Cause Wisdom',
          description: 'You have a RECURRING problem: You procrastinate on important tasks (assignments, job applications, skill-building) and then panic at the last minute. This has happened 10+ times in the past year. Each time, you "fix" it: Set earlier deadlines (still procrastinate), use productivity apps (ignore them after 2 days), tell friends to hold you accountable (they give up after 3 reminders). Nothing works. You are frustrated and feel like you lack discipline. But the problem is NOT lack of discipline - it is that you are treating symptoms, not the root cause. You need Root Cause Analysis to break this procrastination cycle.',
          instructions: [
            '1. Apply 5 Whys (Week 1, 2 hours): Problem: "I procrastinate on important tasks." Why? "I feel overwhelmed by the task size." Why? "I do not break tasks into smaller steps." Why? "I do not know how to break tasks down effectively." Why? "I was never taught task decomposition skills." Why? "I rely on motivation (which is inconsistent) instead of systems (which are consistent)." ROOT CAUSE: "I lack task decomposition skills and rely on motivation instead of systems. When motivation is low (which is often), I procrastinate." This is deeper than "I am lazy" or "I lack discipline" (symptoms).',
            '2. Create Fishbone Diagram (Week 1, 3 hours): Organize potential causes into 5 categories. CATEGORY 1 - Task Management: No task breakdown? No clear next action? Overwhelmed by task size? CATEGORY 2 - Motivation: Waiting for "the right mood"? No intrinsic interest in task? Fear of failure? CATEGORY 3 - Environment: Too many distractions (phone, social media)? No dedicated workspace? Noisy environment? CATEGORY 4 - Energy/Health: Low energy? Poor sleep? Unhealthy diet? CATEGORY 5 - Mindset: Perfectionism (task must be perfect, so I delay)? Negative self-talk ("I am bad at this")? All-or-nothing thinking ("If I cannot do it perfectly, I will not start")? For EACH category, brainstorm 3-5 potential causes. Result: 20 potential root causes.',
            '3. Gather Evidence (Week 1, 4 hours): Track your behavior for 1 week. STEP 1: Log every time you procrastinate. Note: (1) What task? (2) Why did you delay? (3) What were you doing instead? RESULT after 1 week: You procrastinated on 8 tasks. Pattern: 6 times (75%) = "Task felt overwhelming, did not know where to start." 2 times (25%) = "Distracted by phone/social media." INSIGHT: PRIMARY root cause is task overwhelm (lack of decomposition), not distractions. STEP 2: Compare with productive people. Talk to 3 friends who do NOT procrastinate. Ask: "How do you approach big tasks?" Their answer: "We break tasks into tiny steps (10-15 mins each). We focus on starting, not finishing. We use time-blocking (dedicate 1 hour, no distractions)." INSIGHT: Productive people use SYSTEMS (task decomposition, time-blocking), not motivation. STEP 3: Reflect on past successes. When did you NOT procrastinate? Answer: "When I had clear, small next actions (e.g., \'Write introduction paragraph\' vs \'Write entire essay\')." INSIGHT: Confirms root cause - lack of task decomposition.',
            '4. Test Root Cause Hypothesis (Week 2, 2 hours): Hypothesis: "I procrastinate because I do not break tasks into small, actionable steps." Test: Pick 2 tasks you are procrastinating on. TASK 1 (Control): Do NOT break it down. Try to start. Result: You delay for 2 hours, feel overwhelmed, give up. TASK 2 (Test): Break it into 10 tiny steps (10-15 mins each). Write: "Step 1: Open document. Step 2: Write 1 sentence. Step 3: Research 1 source..." Try to start. Result: You complete Step 1 in 2 minutes. Then Step 2. Then Step 3. After 30 minutes, you have completed 3 steps and feel momentum. HYPOTHESIS CONFIRMED. Task decomposition eliminates procrastination.',
            '5. Implement Root Cause Fix (Weeks 2-4, 3 weeks): ROOT CAUSE: "I lack task decomposition skills and rely on motivation instead of systems." FIX: (1) Learn task decomposition. For EVERY task, break it into steps so small that each step takes 10-15 minutes. Example: "Apply for internship" → Step 1: Find 1 company (10 mins). Step 2: Read job description (5 mins). Step 3: Write 1 paragraph of cover letter (15 mins). Etc. (2) Use time-blocking. Schedule 1-hour blocks for important tasks. During the block: Phone off, no social media, focus on 1 step. (3) Focus on STARTING, not finishing. Tell yourself: "I will just do Step 1 (10 mins)." Once you start, momentum carries you. (4) Track progress. Use a checklist. Check off each step. Visual progress = motivation. (5) Remove distractions. Use app blockers (Freedom, Cold Turkey) to block social media during work blocks. Timeline: 3 weeks of practicing this system.',
            '6. Monitor Results (Weeks 3-6): Track: How many tasks did you procrastinate on? Week 1 (before fix): 8 tasks procrastinated. Week 3 (after fix): 2 tasks procrastinated (75% improvement). Week 6: 1 task procrastinated (87% improvement). ROOT CAUSE FIX WORKED. You broke the procrastination cycle by addressing the real issue (lack of task decomposition + reliance on motivation), not symptoms (lack of discipline).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Blaming yourself: "I am lazy. I lack discipline." This is learned helplessness. Root cause is NOT your character - it is lack of task decomposition SKILLS (fixable!).',
            '• Symptom fixes: Setting earlier deadlines (symptom fix) when root cause is task overwhelm. Earlier deadlines do not help if you still do not know how to break tasks down.',
            '• No evidence gathering: Guessing "I procrastinate because I am distracted" without tracking your behavior for 1 week. Evidence shows: 75% of procrastination is task overwhelm, only 25% is distractions.',
            '• Not testing hypothesis: Assuming task decomposition will work without testing on 2 tasks. Testing confirms it works BEFORE you invest 3 weeks in the system.',
            '• Relying on motivation: "I will start when I feel motivated." Motivation is inconsistent. Systems (task decomposition, time-blocking) work even when motivation is low.'
          ],
          successCriteria: [
            '✅ You apply 5 Whys and identify ROOT CAUSE (lack of task decomposition skills + reliance on motivation)',
            '✅ You create Fishbone Diagram with 5 categories and 20 potential causes',
            '✅ You gather evidence (track procrastination for 1 week, talk to 3 productive friends, reflect on past successes)',
            '✅ You test root cause hypothesis (Task 1 without decomposition = procrastinate 2 hours. Task 2 with decomposition = start in 2 minutes)',
            '✅ You implement root cause fix (task decomposition, time-blocking, focus on starting, checklist, app blockers)',
            '✅ You monitor results: Procrastination drops from 8 tasks/week to 1 task/week (87% improvement)',
            '✅ You break the procrastination cycle permanently by using systems, not motivation',
            '✅ You can explain: "I procrastinated because I lacked task decomposition skills. I fixed it by breaking every task into 10-15 minute steps and using time-blocking."'
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
