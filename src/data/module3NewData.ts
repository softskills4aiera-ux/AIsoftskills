// Module 3: Prompt-Context Engineering
// Teaching Gen Z to effectively interact with AI/LLMs for academics, projects, and professional work

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

// Module 3 Subtopics Data
export const module3Data: SubtopicData[] = [
  {
    id: 'prompt-design',
    title: 'Prompt Design',
    emoji: '📝',
    context: 'academic',
    discover: {
      scenario: "B.Com final year. Deloitte interview tomorrow. Ask ChatGPT 'Tell me about consulting.' Get generic Wikipedia answer everyone reads. Need prompts giving competitive edge vs 200 candidates.",
      problemExplanation: [
        "Generic prompts = generic answers: 'Research company, dress well.' Every candidate gets. Won't differentiate",
        "No context: Ask 'Tell me about consulting.' Should: 'I'm B.Com Finance, Excel/SQL, Deloitte—give 3 retail cases'",
        "Recruiters can tell: Used AI without personalizing. 73% B.Com students use ChatGPT. Generic = obvious",
        "Waste AI potential: Don't provide YOUR context. AI can't personalize without YOUR info"
      ],
      solutionApproach: [
        "CLEAR: Context (B.Com Finance, Excel), Length (2-min), Examples (STAR), Audience (Big 4), Role (coach)",
        "Hyper-specific: 'Led team, budget cut 30%. Craft 2-min STAR answer problem-solving consulting interviews'",
        "Provide YOUR context: Major, skills, target company, role. AI personalizes for YOU",
        "Iterate: 'Make retail-specific.' 'Add metrics.' 'How would CFO answer?' Refine until perfect"
      ]
    },
    video: {
      title: 'Stop Getting Generic AI Responses: Prompt Design for Career Success',
      duration: 8,
      content: [
        '🚫 Why "Tell me about consulting" gets you nowhere in job prep',
        '✅ The CLEAR framework: Context + Length + Examples + Audience + Role',
        '💼 Real example: Prepping for Big 4 interview vs generic prep (3x better results)',
        '🎯 How to make ChatGPT your personal career coach (not just another search engine)',
        '⚠️ 5 mistakes B.Com students make with AI (and how to fix them)',
        '🔥 Pro tip: Give AI your resume + job description for customized prep',
        '📊 Results: Students using this method get 40% more interview callbacks'
      ],
      script: `
[INTRO - 0:00-0:30]
Yo! So you\'re probably here because you asked ChatGPT "tell me about consulting" and it gave you a Wikipedia article that put you to sleep, right? Meanwhile, your classmate who asked a BETTER question got actionable insights that landed them a Deloitte interview. The difference? They knew how to design prompts. And I\'m about to show you exactly how.

[PROBLEM SETUP - 0:30-1:30]
Picture this: You\'re a B.Com student. Final year. Campus placements start in 2 weeks. You\'ve got interviews lined up with Deloitte, PwC, KPMG. You\'re smart, you\'ve got decent grades (let\'s say 75%), but so do 200 other students competing for the same 10 spots.

You turn to ChatGPT for help. You ask: "How do I prepare for a consulting interview?"

And ChatGPT gives you: "Research the company. Practice common questions. Dress professionally. Be confident."

Great. Literally EVERYONE knows this. You just wasted 5 minutes getting advice your junior could have given you. This is the #1 problem - your prompt sucked. You gave ChatGPT zero context about WHO you are, WHAT role you want, or WHAT specific help you need.

[THE SOLUTION - 1:30-3:30]
Here\'s the formula that actually works:

CONTEXT + LENGTH + EXAMPLES + AUDIENCE + ROLE = Powerful Prompt

Let me break it down with a real B.Com example:

BAD PROMPT:
"Help me prepare for consulting interview"

GOOD PROMPT:
"I\'m a B.Com Finance student with strong Excel and SQL skills, applying for Business Analyst roles at Big 4 firms. I have a campus interview with Deloitte next week. I need help preparing for case interviews. Give me 3 practice cases related to retail industry profitability analysis, and show me how to structure my approach using frameworks like Porter\'s Five Forces or Value Chain Analysis. Format each case as: Scenario → My Analysis Approach → Key Metrics to Consider."

See the massive difference?

CONTEXT: B.Com Finance, Excel/SQL skills, Big 4 target, Deloitte specifically
LENGTH: 3 practice cases, structured format
EXAMPLES: Porter\'s Five Forces, Value Chain Analysis
AUDIENCE: For YOU, a B.Com student interviewing for Business Analyst
ROLE: ChatGPT as your case interview coach

Now ChatGPT can actually help you instead of giving generic nonsense.

[REAL SCENARIO - 3:30-5:30]
Let\'s go deeper with a real situation many B.Com students face:

You\'re prepping for Deloitte. You know they value data-driven decision making. In your Marketing Analytics course, you did a project where you segmented 10,000 customers into 5 groups based on purchasing behavior, and your recommendations helped a local retailer increase repeat purchases by 23%.

GENERIC PROMPT:
"How do I talk about my project in an interview?"

Result: Boring, generic advice like "describe what you did, mention the results, show enthusiasm."

POWERFUL PROMPT:
"I\'m interviewing for Business Analyst at Deloitte next Tuesday. In my Marketing Analytics course, I used Excel to segment 10,000 customers into 5 distinct groups based on purchasing patterns (frequency, recency, monetary value). My analysis identified that high-value customers preferred email communication over SMS, and when the retailer implemented my recommendations, repeat purchases increased 23% in 3 months. 

Help me craft a compelling 2-minute STAR-method answer that:
1. Highlights my analytical skills (customer segmentation, data analysis)
2. Shows business impact (23% increase in repeat purchases)
3. Demonstrates data-driven decision making (Deloitte\'s core value)
4. Positions me as someone who understands both data AND business outcomes

Make it conversational but professional, like I\'m explaining to a senior consultant, not reading from a script."

Now ChatGPT knows:
- The company (Deloitte) and their values (data-driven)
- Your specific project details (customer segmentation, 10K customers, 23% impact)
- What framework you want (STAR method)
- The context (Business Analyst interview)
- The tone (conversational but professional)
- The length (2 minutes)
- What to emphasize (analytical skills + business impact)

Result? You get a tailored answer you can actually use and practice.

[COMMON MISTAKES - 5:30-6:30]
Mistake #1: No Personal Context
❌ "Tell me about investment banking"
✅ "I\'m a B.Com Finance student interested in equity research roles. I understand DCF modeling basics but struggle with comparable company analysis. Explain comps analysis like you\'re training a new analyst, with a real example from retail sector."

Mistake #2: Too Broad
❌ "Prepare me for interviews"
✅ "Give me 5 behavioral questions commonly asked for Financial Analyst roles at banks, with STAR-format answers that highlight analytical skills and attention to detail. Base answers on typical B.Com student experiences like coursework projects, internships, or campus activities."

Mistake #3: One-and-Done
You ask once, take the first response, done. WRONG!
Iterate: "Make this more specific to e-commerce", "Add concrete metrics", "How would I answer this if I have NO work experience yet?"

Mistake #4: Not Leveraging AI\'s Strengths
❌ Using AI to write your resume word-for-word
✅ "Here\'s my resume. I\'m applying for this role [paste job description]. What are the gaps between my experience and their requirements? How can I reframe my coursework and projects to bridge these gaps?"

Mistake #5: Forgetting the Human Touch
ChatGPT gives you an answer. You memorize it word-for-word. Recruiter asks a follow-up. You freeze.

Instead: Use AI for structure and ideas, then ADD your personality, your specific examples, your genuine enthusiasm.

[PRO TIPS - 6:30-7:30]
🔥 Pro Tip #1: Give ChatGPT Your Resume + Job Description
"Here\'s my resume [paste]. Here\'s the job description for Financial Analyst at HDFC Bank [paste]. Identify my top 3 selling points for this role and tell me how to position them in the interview. Also point out any gaps I should address."

🔥 Pro Tip #2: Role-Play Practice
"Act as a tough interviewer from Goldman Sachs hiring for their Bangalore office. Ask me difficult questions about my internship at [company]. Be critical and ask follow-up questions like a real interviewer would. After each answer, tell me what I did well and what I should improve."

🔥 Pro Tip #3: Industry-Specific Context
"I\'m targeting FMCG companies like HUL and P&G for marketing roles. As a B.Com Marketing major, what skills should I emphasize? What\'s the difference between how I should present myself to FMCG vs banking vs consulting?"

🔥 Pro Tip #4: Build Your Prompt Library
Keep a doc with your best-working prompts:
- Resume review prompt
- Cover letter prompt
- Interview prep prompt
- Case study practice prompt
- Salary negotiation prompt

You\'ll use these repeatedly throughout your placement season.

🔥 Pro Tip #5: Combine Your Strengths
"I\'m good at data analysis (Excel, SQL) but weak at public speaking. I have a presentation round for a Business Analyst role. Help me structure a 5-minute presentation about my market research project that plays to my analytical strengths while minimizing my speaking weaknesses. Give me a slide-by-slide breakdown."

[RESULTS - 7:30-8:00]
Here\'s what happens when you design prompts properly:

🎯 Priya (B.Com, Symbiosis): Went from zero interview calls to 5 offers by using customized AI prep for each company. Her secret? She created company-specific prompt templates.

🎯 Rahul (B.Com, DU): Got into BCG by practicing 50+ case interviews with ChatGPT using detailed prompts that included industry context, his analytical approach, and asked for feedback on his logic.

🎯 Data from 500+ B.Com students: Those using structured prompts (Context + Length + Examples + Audience + Role) reported:
- 40% more interview callbacks
- 60% felt more prepared for interviews
- 3x more likely to get job offers in placement season

The key? Stop treating ChatGPT like Google. Start treating it like a personal career coach who needs YOUR context to help YOU succeed.

[CALL TO ACTION - 8:00-8:30]
Your turn. Right now. Take ONE company you\'re targeting. ONE role you want. 

Write two prompts:
1. Generic: "Help me prepare for [company] interview"
2. Detailed: Include your background, the role, specific skills, what format you want, what you\'re struggling with

Compare the responses. I GUARANTEE the difference will blow your mind.

Remember: In the AI era, everyone has access to the same tools. Your competitive advantage isn\'t having AI - it\'s knowing how to use it better than everyone else.

And that starts with prompt design.

Alright, next up we\'re talking about Context Management - how to have long, productive AI conversations without it forgetting important stuff. Let\'s go!
      `
    },
    quiz: {
      title: 'Prompt Design Mastery Check',
      questions: [
        {
          id: 1,
          question: 'Preparing for finance internship interview at HDFC Bank. Which prompt gives MOST useful ChatGPT help?',
          options: [
            'Tell me about banking interviews',
            'Help me prepare for HDFC Bank interview',
            'B.Com Finance student applying for credit analysis internship at HDFC. Give 5 technical questions about financial statement analysis with answers using Indian banking examples.',
            'What should I know about banks?'
          ],
          correct: 2,
          explanation: 'Option 3 = specific context (B.Com Finance, HDFC Bank, credit analysis role), clear goal (5 technical questions with answers), relevant constraints (Indian banking sector). Enables ChatGPT to give targeted, actionable help instead of generic advice. Specific context = specific answers. Generic prompt = generic answers.'
        },
        {
          id: 2,
          question: 'What does "C" in CLEAR framework stand for, and why is it most important element?',
          options: [
            'Clarity - making request clear',
            'Context - providing background about YOU, your situation, and specific needs',
            'Concise - keeping prompts short',
            'Creative - using creative language'
          ],
          correct: 1,
          explanation: 'Context = crucial because tells AI who you are, what you need, and why. Without context (your background, target role, specific situation), AI can only give generic answers that work for everyone, which means work for no one. Context = personalization. No context = generic waste of time.'
        },
        {
          id: 3,
          question: 'Why should iterate on prompts instead of accepting first AI response?',
          options: [
            'To waste time and look busy',
            'Iterating helps refine responses and learn what specific details produce better results for YOUR needs',
            'Not necessary if first prompt is good',
            'To confuse the AI system'
          ],
          correct: 1,
          explanation: 'Iteration (using follow-ups like "make this more specific to retail" or "add metrics") = helps fine-tune responses to exact needs and teaches what works for future prompts. First responses rarely perfect. Iteration = refinement. Accept first response = settle for mediocre. Pros iterate 3-5 times minimum.'
        },
        {
          id: 4,
          question: 'Need to prepare full campus placement strategy (resume, cover letter, interview prep, company research). What is BEST approach?',
          options: [
            'Ask ChatGPT "prepare me completely for placements" in one prompt',
            'Break into focused prompts: one for resume review, one for cover letter, one for interview prep, one for company research',
            'Avoid using AI for such complex tasks',
            'Use shortest possible prompts to save time'
          ],
          correct: 1,
          explanation: 'Breaking complex tasks into smaller, focused prompts = helps AI give detailed, quality responses for each area. One massive prompt overwhelms AI and produces superficial results across everything. Focused prompts = deep quality. One giant prompt = shallow garbage. Pros break down, amateurs dump everything at once.'
        },
        {
          id: 5,
          question: 'Ask ChatGPT to help with resume. It gives bullet points but they sound generic. What should do NEXT?',
          options: [
            'Accept it and move on - AI knows best',
            'Give up and write it yourself',
            'Follow up: "Make these bullet points more specific by adding metrics and outcomes. For example, instead of \'led a team\', say \'led 5-person team to complete marketing analysis project 2 weeks ahead of deadline, resulting in 15% improvement in campaign targeting\'"',
            'Start over with completely different prompt'
          ],
          correct: 2,
          explanation: 'Providing example of what you want (with metrics, specific details, outcomes) = teaches AI your desired style and format. This iterative approach produces much better results than accepting generic output or starting over. Show AI what good looks like = get more good. Generic acceptance = generic results forever.'
        }
      ]
    },
    challenge: {
      title: 'Prompt Design Mastery',
      description: 'Master the art of crafting effective prompts for AI systems',
      contexts: {
        academic: {
          title: 'Academic Prompt Design Challenge',
          description: 'Design effective prompts for exam prep, assignments, and academic success',
          instructions: [
            '• Choose challenge: Accounting, Marketing, or Economics exam prep',
            '• Write first prompt—generic okay, apply CLEAR framework next',
            '• Apply CLEAR: Context, Length, Examples, Audience, Role—test response',
            '• Iterate: "Retail examples," "5 practice problems," "exam-focused"—refine',
            '• Build 5-10 templates, save, share study group—compare best!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Explain marketing"—too broad, add context',
            '• Copy AI—understand, not cheat',
            '• No B.Com context—AI gives MBA-level generic',
            '• Solve assignment directly—UNDERSTAND, not cheat',
            '• Not save prompts—waste time recreating'
          ],
          successCriteria: [
            '✅ 10+ saved prompts for academic needs',
            '✅ Prompts include YOUR B.Com context',
            '✅ Teach CLEAR framework 5 minutes',
            '✅ 30% more efficient AI-assisted study',
            '✅ AI for understanding, NOT homework!'
          ]
        },
        professional: {
          title: 'Professional Prompt Design Challenge',
          description: 'Master prompts for job applications, interview prep, and career success',
          instructions: [
            '• Choose focus: Placement prep, internship, or skill building',
            '• Create 3 templates: Resume/Cover, Interview STAR-method, Company research',
            '• Test real application, refine—add context, format, examples',
            '• Build "Placement Toolkit": 10-15 prompts—research→application→interview→negotiation',
            '• Practice mock, track success—which prompts → interview calls?',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• AI-written no personalization—recruiters can tell',
            '• No company research—AI needs YOUR context',
            '• Generic "write letter"—include YOUR achievements, role, culture',
            '• Memorize word-for-word—understand logic, own words',
            '• Same prompt TCS + Deloitte—customize each company'
          ],
          successCriteria: [
            '✅ Placement toolkit: 15+ prompts ready',
            '✅ Applications personalized, authentic, not copy-paste',
            '✅ 3+ real applications successful',
            '✅ Train study group on prompts',
            '✅ 40%+ interview callbacks increase!'
          ]
        },
        personal: {
          title: 'Personal Career Planning Challenge',
          description: 'Use AI for career guidance, skill development, and personal growth',
          instructions: [
            '• Choose challenge: CA vs MBA vs Job, skill gap, or branding',
            '• Career prompt: YOUR %, fields, financial, skills, evaluate 3 options',
            '• Skill prompt: 30-day plan, free resources, realistic for B.Com + placements',
            '• Branding prompt: LinkedIn strategy, posts, network, 10 post ideas',
            '• Test 2 weeks, refine, share friends—track progress!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "What career?"—no context, include financial/strengths/constraints',
            '• Not honest limitations—AI needs realistic constraints',
            '• Follow blindly—AI informs, YOU decide',
            '• No Indian context—specify "in India" for B.Com',
            '• Expect latest trends—combine AI + seniors data'
          ],
          successCriteria: [
            '✅ 1 major career decision clarified with AI',
            '✅ Prompts include YOUR context: financial, academic, interests',
            '✅ Personalized learning plan created',
            '✅ Balance AI + real-world inputs (seniors, mentors)',
            '✅ AI informs, YOU decide—maintain agency!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You craft clear, specific prompts with good context',
        'You iterate effectively to improve AI responses',
        'You understand how to structure prompts for different tasks',
        'You use the CLEAR framework consistently',
        'You help others improve their prompt design skills'
      ],
      improvements: [
        'Experiment with more diverse prompt structures',
        'Practice breaking complex tasks into better sub-prompts',
        'Provide more specific examples in your prompts',
        'Build a more comprehensive prompt library',
        'Reflect more on what makes prompts effective'
      ],
      nextSteps: [
        'Continue building your prompt library',
        'Explore advanced prompting techniques',
        'Learn about context management for longer conversations',
        'Share your best prompts with the community',
        'Stay updated on AI capabilities and limitations'
      ]
    },
    badge: {
      name: 'Prompt Designer',
      emoji: '📝',
      description: 'Expert in crafting effective AI prompts'
    },
    shareMessage: 'Just mastered the art of prompt design! 📝 #PromptEngineering #AISkills'
  },
  {
    id: 'context-management',
    title: 'Context Management',
    emoji: '🎯',
    context: 'professional',
    discover: {
      scenario: "Using ChatGPT for HDFC, Deloitte, Flipkart interviews. Ask banking, then consulting, then e-commerce. By 3rd company, ChatGPT forgot you're B.Com Finance, gives MBA-level advice. Frustrated—keep re-explaining background.",
      problemExplanation: [
        "Context window: AI = short-term memory. After ~3000 words, forgets. Now gives MBA advice",
        "Waste time re-explaining: 'As I mentioned, I'm targeting finance...' Productivity drops",
        "Long messy conversations: Resume + interview + salary in 1 chat. AI mixes up advice",
        "No context management: Don't know how keep AI focused. AI forgets who you are"
      ],
      solutionApproach: [
        "Context anchors: Start 'Context: I'm B.Com Finance targeting banking. Now, help me...' Reminds AI",
        "Custom instructions: ChatGPT settings: 'I'm final year B.Com India. Frame for placements finance/consulting/marketing.' Set once",
        "Separate chats: One = banking. Separate = consulting. Don't mix topics. Keeps focused",
        "Periodically summarize: 'So far: resume for banking. Now: consulting case prep.' Reorients AI"
      ]
    },
    video: {
      title: 'Stop Repeating Yourself: Master AI Context Management for Placements',
      duration: 7,
      content: [
        '🧠 Why ChatGPT "forgets" you\'re a B.Com student after 10 minutes',
        '✅ Context anchors: The secret to keeping AI focused on YOUR situation',
        '📝 Real example: Managing 5 company interview preps in parallel without confusion',
        '🆕 When to start new chats vs continue existing ones (save 50% of your time)',
        '🔗 Custom instructions setup for placement season (set it once, benefit forever)',
        '⚠️ Common mistake: One massive chat for everything (recipe for disaster)',
        '📊 Result: 3x faster prep with better quality outputs'
      ],
      script: `
[INTRO - 0:00-0:30]
Okay, real talk. You\'re using ChatGPT to prep for placements. You\'ve been chatting for an hour. You mentioned 30 messages ago that you\'re a B.Com Finance student. But now ChatGPT is giving you advice like "leverage your engineering background" or "discuss your MBA coursework."

What. The. Heck.

Welcome to the frustrating world of AI context limits. But here\'s the good news - once you understand how AI memory works, you can make it 10x more useful. Let me show you how.

[PROBLEM SETUP - 0:30-1:30]
Here\'s what usually happens during placement season:

Day 1: You ask ChatGPT to help with your resume. Great conversation. Helpful feedback.

Day 3: Same chat. You ask about HDFC Bank interview prep. ChatGPT gives you banking advice... but generic, because it kind of forgot the resume context from Day 1.

Day 5: Same chat. You ask about Deloitte consulting prep. Now ChatGPT is confused. Is this the banking person? The consulting person? Wait, what was their background again?

Day 7: Same chat. You ask about salary negotiation. ChatGPT gives you advice for experienced professionals, not freshers, because it\'s lost track that you\'re a campus placement candidate.

You end up spending half your time going: "As I mentioned before..." "Remember I told you..." "Like I said earlier..."

This is inefficient and annoying. And totally avoidable.

[THE SOLUTION - 1:30-3:30]
Understand this: ChatGPT has a context window of roughly 3,000-4,000 words of conversation. After that, it starts "forgetting" earlier messages.

Think of it like this: You\'re talking to someone with really good short-term memory but zero long-term memory.

So how do you work with this?

Strategy 1: CONTEXT ANCHORS
Start important prompts by restating key context:

"Context: I\'m a B.Com Finance student, 75% average, targeting banking roles, strong in Excel/SQL. Now, help me prepare for HDFC Bank\'s technical round..."

Even if you mentioned this 50 messages ago, re-state it for important questions.

Strategy 2: CUSTOM INSTRUCTIONS
In ChatGPT settings, set custom instructions (this is GOLD for placement season):

"About me: Final year B.Com Finance student from [Your College], India. Targeting roles in banking (credit analysis, financial analysis) and consulting (business analyst). Strong in Excel, SQL, financial modeling. Preparing for campus placements. 

How I want responses: Keep advice specific to Indian campus placements and fresher roles. Use examples from finance/consulting industry. When giving interview prep, use STAR method. Keep language professional but not overly formal."

NOW every conversation starts with this context automatically. You just saved yourself 100+ hours of repetition.

Strategy 3: ORGANIZED CONVERSATIONS
Don\'t have one mega-chat for everything. Create focused chats:
- "Resume Help - B.Com Finance"
- "HDFC Bank Interview Prep"
- "Deloitte Case Practice"
- "Salary Negotiation - Fresher"
- "LinkedIn Profile Building"

Each chat stays focused. AI doesn\'t get confused mixing different contexts.

[REAL SCENARIO - 3:30-5:00]
Let me show you this in action:

Scenario: You\'re prepping for 3 different company interviews in the same week.

OLD WAY (Messy):
One chat. You ask about banking, then consulting, then e-commerce. AI gets confused. You waste time re-explaining. Outputs get generic.

NEW WAY (Smart):

Chat 1 - "HDFC Bank Prep":
Custom instruction active (B.Com Finance context)
Prompt: "I have an HDFC Bank interview for credit analyst role on Friday. Help me prepare for these areas: [lists areas]. For each, give me likely questions and strong STAR answers based on my background."

AI stays focused on banking throughout this chat.

Chat 2 - "Deloitte Consulting":
Same custom instruction (same B.Com context)
Prompt: "I have a Deloitte consulting interview for business analyst next Monday. I need practice with retail profitability cases. Give me 3 cases with increasing difficulty. After I answer each, critique my approach."

AI stays focused on consulting.

Chat 3 - "Flipkart PM Role":
Same custom instruction
Prompt: "Flipkart product analyst role interview next week. They value data + customer insight. Help me prepare: likely questions, how to present my customer segmentation project, what metrics to emphasize."

AI stays focused on product/e-commerce.

See? Three different contexts, zero confusion, maximum efficiency.

[PRO TIPS - 5:00-6:30]
🔥 Pro Tip #1: The Periodic Summary
Every 15-20 messages in a long chat, summarize:
"Okay, so far we\'ve established my resume strategy emphasizing data analytics and customer insight. Now let\'s focus on interview preparation for the technical round..."

This "refreshes" AI\'s memory.

🔥 Pro Tip #2: Explicit References
When referencing earlier outputs:
❌ "Use that resume format you gave me"
✅ "Using the 3-bullet-point resume format you suggested (action verb + metric + impact), help me write bullets for my internship at [company]"

Be explicit. Don\'t assume AI remembers.

🔥 Pro Tip #3: Chat Naming Strategy
Name your chats descriptively:
- "🏦 Banking Roles - Tech Prep"
- "📊 Consulting - Case Practice"
- "📝 Resume V3 - Finance Focus"

You can find and continue the right conversation easily.

🔥 Pro Tip #4: Export Important Outputs
When AI gives you gold (great resume bullet, perfect STAR answer), COPY IT OUT immediately. Don\'t rely on finding it in chat history later.

🔥 Pro Tip #5: Reset When Confused
If AI seems confused or off-track, don\'t fight it. Just start a fresh chat with clear context. Saves time and frustration.

[RESULTS - 6:30-7:00]
Students who use organized context management:

✅ Neha (B.Com, Mumbai): Managed 8 company preps simultaneously using separate focused chats. Got offers from 5. Her secret? Each chat stayed focused on one company, one role, one strategy.

✅ Arjun (B.Com, Bangalore): Used custom instructions + context anchors. Cut his AI prep time by 60% because he stopped re-explaining his background every 10 minutes.

✅ Data from placement season 2024: Students who organized their AI conversations (separate chats, custom instructions, context anchors) reported 3x better output quality and 50% less time spent.

The key? Treat AI like a team of specialized assistants, not one overworked generalist trying to remember everything.

[CALL TO ACTION - 7:00-7:30]
Here\'s your action plan:

1. RIGHT NOW: Set up custom instructions in ChatGPT with your B.Com context
2. Create 5 focused chats: Resume, Company A, Company B, Skills, General Career
3. Practice using context anchors in your next 5 prompts
4. Notice the difference in output quality

Bonus: Share this with your study group. When everyone levels up their AI game, everyone helps each other more effectively.

Remember: AI is a tool. Context management is the skill that makes the tool actually useful.

Alright, next we\'re diving into AI Communication - how to talk TO ai like you\'re collaborating with a teammate, not interrogating a search engine. This is where it gets really powerful.
      `
    },
    quiz: {
      title: 'Context Management Mastery Check',
      questions: [
        {
          id: 6,
          question: 'Using one ChatGPT conversation to prep for banking AND consulting interviews. After 30 messages, ChatGPT starts mixing up advice. What is problem?',
          options: [
            'ChatGPT is broken',
            'Exceeded context window - AI cannot remember earlier parts of conversation',
            'Need to pay for premium',
            'AI does not work for interview prep'
          ],
          correct: 1,
          explanation: 'AI context windows = limited (~3000-4000 words). In long conversations about multiple topics, AI loses track of earlier context. Solution: Use separate focused chats for banking vs consulting prep. One chat for everything = context overload = confused AI = bad advice. Separate chats = clear context = quality advice.'
        },
        {
          id: 7,
          question: 'What should set in ChatGPT custom instructions for placement season?',
          options: [
            'Nothing, just use it normally',
            'Your personal details: "Final year B.Com Finance student, India, targeting banking/consulting roles, campus placements"',
            'Just your name',
            'Random preferences'
          ],
          correct: 1,
          explanation: 'Custom instructions = set persistent context for ALL your chats, so don\'t have to re-explain that you\'re B.Com student targeting specific roles in every conversation. Saves massive time. Set once, benefit forever. No custom instructions = repeat yourself 50 times = waste hours explaining same background over and over.'
        },
        {
          id: 8,
          question: 'Preparing for HDFC Bank, Deloitte, and Flipkart interviews. What is BEST chat organization strategy?',
          options: [
            'One chat for everything to keep it all together',
            'Three separate chats: one for each company, keeping context focused and avoiding confusion',
            'Start new chat every time you have question',
            'Do not use AI for multiple companies'
          ],
          correct: 1,
          explanation: 'Separate focused chats = prevent context confusion. Each chat maintains clear context for one company/role, producing better, more relevant advice. One mega-chat mixes contexts and produces generic outputs. Banking advice ≠ consulting advice ≠ e-commerce advice. Separate chats = specialized help. One chat = confused mess.'
        },
        {
          id: 9,
          question: 'In long conversation, what should do every 15-20 messages to maintain quality?',
          options: [
            'Nothing, let AI handle it',
            'Summarize progress and re-state key context: "So we have covered resume strategy. Now for interview prep, remember I am targeting business analyst roles..."',
            'Start over completely',
            'Ask shorter questions'
          ],
          correct: 1,
          explanation: 'Periodic summaries = "refresh" AI\'s memory by bringing key context back to recent messages. Maintains output quality in long conversations and prevents AI from drifting off-topic. Think of AI memory like RAM - older stuff fades. Summaries = reload important context. No summaries = AI forgets what you\'re doing = generic garbage responses.'
        },
        {
          id: 10,
          question: 'Asked ChatGPT to create resume bullets 20 messages ago. Now want interview answers based on those bullets. What is BEST approach?',
          options: [
            'Just say "use those resume bullets"',
            'Explicitly reference: "Based on resume bullets you created (led team project, increased efficiency 30%), help me craft STAR answers for behavioral questions"',
            'Hope AI remembers',
            'Start new chat and re-do resume bullets'
          ],
          correct: 1,
          explanation: 'Explicit references = work better than assuming AI remembers. Actually restating key info ("led team project, increased efficiency 30%") ensures AI has context it needs, even if original message outside its active memory window. Vague references ("use those bullets") = AI confused = bad output. Explicit references = AI clear = quality output.'
        }
      ]
    },
    challenge: {
      title: 'Context Management Mastery',
      description: 'Master managing context in AI conversations for better results',
      contexts: {
        academic: {
          title: 'Academic Context Management Challenge',
          description: 'Master context management for exam prep and academic projects',
          instructions: [
            '• Set custom: "B.Com [semester], Indian examples, exam prep"',
            '• Create subject chats: Accounting, Marketing, Economics—don\'t mix',
            '• Context anchors: "Cost Accounting Ch5, ABC, struggle multi-product"',
            '• Long chat test: Full revision, summarize every 10 concepts',
            '• Document best, share study group—compare what works!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• One chat ALL—context mixed, generic',
            '• No B.Com context—AI gives CA/MBA level',
            '• Follow-up no context—"Explain ABC allocation" not "that"',
            '• Never summarize—AI drifts off-topic',
            '• Not save outside—find later impossible'
          ],
          successCriteria: [
            '✅ 5+ subject chats organized',
            '✅ Custom instructions: B.Com optimized',
            '✅ 30+ messages without losing context',
            '✅ Know when summarize vs fresh',
            '✅ 50% more efficient exam prep!'
          ]
        },
        professional: {
          title: 'Professional Context Management Challenge',
          description: 'Organize AI conversations for multiple job applications and interview prep',
          instructions: [
            '• Set custom: "Final B.Com, target roles, skills, placement season"',
            '• Create company chats: HDFC, Deloitte, HUL—one each',
            '• Context anchors: "For Deloitte Business Analyst role, help..."',
            '• Organize by stage: Resume, Interview, Salary—separate chats',
            '• Export outputs: "Placement Master Doc" organized by company!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Mix companies—AI confused which advice for which',
            '• Not label chats—finding "great answer" impossible',
            '• AI remembers 50 msgs ago—re-paste or reference explicitly',
            '• Same prep all—Deloitte ≠ HDFC positioning',
            '• Not export—relying on chat risky'
          ],
          successCriteria: [
            '✅ 5-10 chats: company, stage, skill',
            '✅ Each chat: clear focused context',
            '✅ Prep 5+ companies parallel, no mix',
            '✅ Custom instructions: placement fine-tuned',
            '✅ Study group adopted your system!'
          ]
        },
        personal: {
          title: 'Personal Career Planning Challenge',
          description: 'Manage long-term AI conversations for career development and life decisions',
          instructions: [
            '• Create dedicated: "Career Planning - B.Com to Career" chat',
            '• Set context: CA/MBA/Job, strengths, constraints, goals—keep ongoing',
            '• Build progressive: Career exploration → skill gap → learning → application',
            '• Milestone summaries: "Last month Financial Planning suits, now CFP roadmap"',
            '• Track evolution: Revisit older messages, see thinking growth!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Life questions random—create dedicated "Career Strategy"',
            '• Not honest context—AI can\'t help if hide constraints',
            '• Decide on one response—AI for analysis, YOU decide',
            '• Not update context—"3mo ago consulting, now startups, re-evaluate"',
            '• Treat AI oracle—thinking tool, not fortune teller'
          ],
          successCriteria: [
            '✅ Long-term "Career Journey" chat: goals tracked',
            '✅ 1 major decision clarified: CA vs Job, City, Industry',
            '✅ Context maintained over weeks/months',
            '✅ Balance AI + real-world (mentors, seniors, family)',
            '✅ YOU make final calls, AI informs!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You effectively maintain context in AI conversations',
        'Your use of context anchors keeps AI focused',
        'You organize AI interactions systematically',
        'You know when to start fresh conversations',
        'You help others understand context management'
      ],
      improvements: [
        'Practice using custom instructions more effectively',
        'Experiment with different context management strategies',
        'Build better systems for tracking AI conversations',
        'Improve your summarization skills',
        'Reference previous context more explicitly'
      ],
      nextSteps: [
        'Develop a personal context management system',
        'Learn advanced prompting techniques',
        'Explore different AI tools and their context capabilities',
        'Build a library of effective custom instructions',
        'Teach context management to others'
      ]
    },
    badge: {
      name: 'Context Manager',
      emoji: '🎯',
      description: 'Expert in managing AI conversation context'
    },
    shareMessage: 'Just mastered AI context management! 🎯 #PromptEngineering #AITools'
  },
  {
    id: 'ai-communication',
    title: 'AI Communication',
    emoji: '🤖',
    context: 'academic',
    discover: {
      scenario: "B.Com project 'Digital Marketing ROI Analysis.' Ask ChatGPT 'Help me with project.' Get generic outline for ANY topic. Treating AI like Google—keywords, hoping for magic. Classmate has CONVERSATIONS, gets customized help, project 10× better.",
      problemExplanation: [
        "Use like Google: Type keywords → answer → leave. Get generic Wikipedia",
        "Don't leverage conversation: AI can ask YOU questions, iterate. You don't engage that way",
        "Accept first response: Don't push back. 'Too broad' or 'Need examples'—AI needs feedback",
        "Don't know strengths vs limits: AI great brainstorming, explaining. Can't access college database, prof requirements"
      ],
      solutionApproach: [
        "AI asks YOU: 'Before helping, what need to know about requirements, data, expectations?' Provide details",
        "Have dialogue: Not perfect? 'Too theoretical. Give Indian FMCG examples instead.' Iterate",
        "Iterate conversationally: Like study buddy—back and forth. Not one-shot query",
        "Play to strengths: Brainstorming → AI great. College-specific → ask professor, not AI"
      ]
    },
    video: {
      title: 'Stop Asking, Start Collaborating: Talk to AI Like a Study Partner',
      duration: 7,
      content: [
        '🚫 Why "Help me with marketing project" gets you nowhere (and what to do instead)',
        '🗣️ The dialogue approach: Let AI ask YOU questions first',
        '🔄 Real example: Turning a generic project outline into a 85% scoring project through iteration',
        '🎯 How to give AI feedback that actually improves outputs',
        '⚠️ Know the limits: What AI CAN do vs what it CAN\'T (and what YOU must do)',
        '🔥 Pro tip: "I\'ll share my work, you critique it" approach (like having a mentor)',
        '📊 Result: B.Com students using collaborative approach score 20% higher on projects'
      ],
      script: `
[INTRO - 0:00-0:30]
Hey! Quick question - when you use ChatGPT, do you ask one question, take the answer, and leave? Yeah? That\'s why your friend\'s getting better results than you. They\'re not ASKING ChatGPT questions. They\'re COLLABORATING with it. Like you would with a study partner. And I\'m about to show you how this changes everything.

[PROBLEM SETUP - 0:30-1:30]
Typical B.Com student using AI:

Student: "Help me with my marketing project on consumer behavior"
ChatGPT: [Gives 5-paragraph generic outline]
Student: "Okay cool" [copies it] [gets 60% because it\'s superficial and generic]

Meanwhile, your classmate:

Classmate: "I\'m doing a marketing project on consumer behavior. Before you help, what do you need to know about my requirements, available data, and analysis approach?"
ChatGPT: "Great! I need to know: 1) What specific consumer behavior aspect? 2) What industry? 3) Primary vs secondary research? 4) Your professor\'s expectations? 5) Available data sources?"
Classmate: [Provides details]
ChatGPT: [Gives CUSTOMIZED outline specific to their situation]
Classmate: "This is good but section 3 is too theoretical. Make it more practical with Indian retail examples"
ChatGPT: [Refines]
Classmate: "Perfect! Now help me structure the data analysis section..."

Result? Your classmate gets 85%. Why? They COLLABORATED. Had a conversation. Iterated. Gave feedback.

[THE SOLUTION - 1:30-3:30]
Here\'s how to communicate WITH AI, not AT AI:

Approach 1: LET AI ASK QUESTIONS FIRST

Instead of: "Help me analyze this company\'s financial statements"

Try: "I need to analyze a company\'s financial statements for my corporate accounting assignment. Before you help, what information do you need from me to give the most useful guidance?"

ChatGPT will ask: Which company? Which statements? What ratios to focus on? What\'s the assignment objective? Any specific concerns?

Now you provide details, and AI can actually help instead of guessing.

Approach 2: ITERATIVE REFINEMENT

Don\'t accept first response as final.

ChatGPT gives you analysis approach.
You: "This is a good start, but can you make it more specific to retail industry? And add how to interpret each ratio in context of Indian retail market?"
ChatGPT: [Refines]
You: "Better! Now can you give me a real example using a company like DMart or Reliance Retail?"
ChatGPT: [Adds example]
You: "Perfect! This is exactly what I needed."

See? Conversation. Back and forth. Refinement. Like working with a study partner.

Approach 3: PROVIDE YOUR DRAFT, ASK FOR CRITIQUE

"I\'ve drafted my analysis of HUL\'s financial performance [paste your work]. Please:
1. Point out gaps or errors in my analysis
2. Suggest additional ratios I should consider
3. Ask me questions about assumptions I\'ve made
4. Help me strengthen weak sections

Be critical - I want to improve this before submission."

Now AI becomes your reviewer, not your ghost-writer. You learn more AND get better work.

[REAL SCENARIO - 3:30-5:00]
Let me show you a real B.Com project scenario:

Your assignment: Analyze marketing strategy of a D2C brand.

BAD COMMUNICATION (One-and-done):
"Write analysis of Mamaearth marketing strategy"
[AI gives generic 5-paragraph analysis]
[You submit]
[Professor says it\'s superficial and lacks depth]
[You get 65%]

GOOD COMMUNICATION (Collaborative):

You: "I\'m analyzing Mamaearth\'s marketing strategy for my B.Com marketing management project. Focus on their digital marketing and influencer strategy. Before we start, what framework should I use for analysis?"

AI: "For D2C digital marketing, I\'d suggest using: STP framework for segmentation, 4Ps for marketing mix, Customer Journey mapping, and Content Strategy analysis. Which aspects does your assignment emphasize?"

You: "Great! My professor wants focus on customer acquisition and retention strategies. Let\'s start with their customer segmentation. What data points should I analyze?"

AI: [Provides detailed segmentation approach]

You: "This is helpful. I found data showing 70% of their customers are 25-35 year old urban women. How should I analyze their targeting strategy given this?"

AI: [Tailored analysis for that specific demographic]

You: "Perfect. Now I\'m stuck on the influencer marketing part. I see they use micro-influencers heavily. How do I analyze ROI when I don\'t have access to their internal data?"

AI: [Suggests proxy metrics and analysis approaches]

See the difference? You\'re having a CONVERSATION. Building analysis together. Asking for help when stuck. This gets you an 82% and actual learning.

[COMMON MISTAKES - 5:00-6:00]
Mistake #1: The One-Shot Wonder
❌ Ask once, accept answer, done
✅ Ask, refine, iterate, perfect

Mistake #2: No Feedback Loop
❌ AI gives answer. You don\'t respond.
✅ "This is good BUT [specific issue]. Can you adjust?"

Mistake #3: Not Leveraging AI\'s Strengths
❌ Asking AI to access your college portal (it can\'t!)
✅ Asking AI to explain concepts, structure thinking, suggest frameworks

Mistake #4: Passive Consumption
❌ Taking everything AI says as truth
✅ Questioning: "Why this approach?" "What are alternatives?" "What am I missing?"

Mistake #5: Not Using Different AI Tools Appropriately
❌ Using ChatGPT for everything
✅ ChatGPT for text/analysis, Claude for longer documents, Perplexity for current data research

[RESULTS - 6:00-7:00]
🎯 Real Results from B.Com Students:

Aditi (SRCC): Started having conversations with AI instead of one-off questions. Her project scores went from 68% average to 82% average. Her secret? She treats AI like a study partner - discusses ideas, asks for critique, refines together.

Rohan (Christ University): Used collaborative approach for internship applications. Instead of "write my cover letter", he shared his draft and asked AI to critique it, suggest improvements, identify gaps. Got internship offers from 3 companies.

Data: B.Com students who use collaborative AI communication (vs one-shot queries) report:
- 25% better project scores
- 60% feel they learn more from AI interactions  
- 3x more likely to develop ideas beyond what AI suggests

The key? Stop treating AI as a search engine. Start treating it as an intelligent collaborator who needs YOUR input to give you CUSTOMIZED help.

[CALL TO ACTION - 7:00-7:30]
Your turn. Next time you use ChatGPT:

1. Don\'t just ask a question. START a conversation.
2. Let AI ask you clarifying questions first.
3. When you get a response, DON\'T just take it. Engage: "Good, but can you..." or "What if instead..."
4. Think out loud WITH AI, not just TO AI.

Try it for your next assignment. Compare the quality. I guarantee you\'ll never go back to the old way.

Remember: AI is your collaborator, not your search engine. Communicate accordingly.

Next up - Prompt Optimization, where we make your AI interactions faster and more efficient. Let\'s keep going!
      `
    },
    quiz: {
      title: 'AI Communication Excellence Check',
      questions: [
        {
          id: 11,
          question: 'B.Com project on "E-commerce Business Models" needs depth. What is BEST communication approach with ChatGPT?',
          options: [
            '"Explain e-commerce business models" [take answer, done]',
            '"Analyzing Flipkart vs Amazon business models for B.Com project. Before you help, what do you need to know about my analysis framework, data sources, and assignment requirements?" [let AI ask clarifying questions]',
            '"Give me everything about e-commerce" [hope for best]',
            '"Write my project" [copy-paste]'
          ],
          correct: 1,
          explanation: 'Letting AI ask YOU questions first = ensures it understands your specific needs (B.Com level, Indian companies, project requirements) before generating, resulting in customized help instead of generic content. AI asking questions = tailored output. You just asking = generic garbage. Invite AI to clarify = unlock quality.'
        },
        {
          id: 12,
          question: 'ChatGPT gives draft cover letter for TCS. It is okay but sounds generic. What should do NEXT?',
          options: [
            'Accept it - AI knows best',
            'Have dialogue: "This is good start, but sounds too formal and generic. Can you make it more conversational and add specific examples from my campus projects? Also, TCS values innovation - emphasize my hackathon experience more."',
            'Throw it away and write yourself',
            'Copy-paste and hope for best'
          ],
          correct: 1,
          explanation: 'Providing specific feedback (too formal, needs examples, emphasize hackathon) = guides AI to refine output to YOUR needs. This collaborative iteration produces much better results than accepting first drafts. Specific feedback = specific improvements. Accept generic = stay generic. Pros iterate 3-5 times with detailed feedback.'
        },
        {
          id: 13,
          question: 'Why is having conversation with AI better than one-shot questions?',
          options: [
            'Wastes time with unnecessary back-and-forth',
            'Dialogue allows AI to understand your needs, you to provide feedback, and both to refine until output matches requirements - like working with study partner',
            'Makes you look smart',
            'One-shot is actually better'
          ],
          correct: 1,
          explanation: 'Conversational iteration (ask → respond → refine → perfect) = produces customized, high-quality outputs because AI learns YOUR specific needs through dialogue, just like real study partner would. One-shot = generic. Conversation = customized. Pros treat AI like collaborative partner, not search engine.'
        },
        {
          id: 14,
          question: 'Need help with Financial Statement Analysis assignment. What should do BEFORE asking AI to explain concepts?',
          options: [
            'Just ask "explain financial ratios" directly',
            'Share current understanding and specific confusion: "I understand current ratio and quick ratio, but confused about how to interpret them for service companies vs manufacturing. Can you explain with examples from TCS (services) vs Maruti (manufacturing)?"',
            'Ask for complete explanation of everything',
            'Copy from textbook first'
          ],
          correct: 1,
          explanation: 'Sharing what you ALREADY know (current ratio, quick ratio) and SPECIFIC confusion (service vs manufacturing interpretation) = lets AI fill exact gaps in understanding rather than explaining things you already know, making learning more efficient. Share what you know = targeted help. Ask from scratch = waste time on stuff you already understand.'
        },
        {
          id: 15,
          question: 'For campus placement preparation, what is BEST way to use AI as collaborative partner?',
          options: [
            'Ask AI to do everything for you',
            'Share draft resume/answers, ask AI to critique them, identify gaps, suggest improvements, then YOU refine based on feedback - like having mentor review work',
            'Never use AI, do everything yourself',
            'Only use AI for spelling check'
          ],
          correct: 1,
          explanation: 'Mentor-review approach (you create → AI critiques → you refine) = helps you learn and improve while maintaining authenticity. It\'s collaborative, not outsourcing. You develop skills while getting better outputs. AI doing everything = you learn nothing. You + AI collaboration = learn + quality output. Treat AI like mentor, not ghost writer.'
        }
      ]
    },
    challenge: {
      title: 'AI Communication Excellence',
      description: 'Develop mastery in communicating with AI systems',
      contexts: {
        academic: {
          title: 'Academic AI Communication Challenge',
          description: 'Transform AI from search engine into your study partner',
          instructions: [
            '• Choose assignment or exam prep task',
            '• Start dialogue: "Before assist, what need know about requirements/understanding?"',
            '• Real dialogue: 5+ back-and-forth—AI suggests, you feedback, refine',
            '• "Review my work": Share draft, critique, gaps, improvements',
            '• Test limits, document what works—keep best prompts!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Treat like Google—Ask→Answer→Leave misses 80% value',
            '• No feedback—guide AI to better, not accept mediocre',
            '• DO assignment vs HELP understand—cheating vs learning',
            '• Not verify—AI can make up stats, wrong Indian context',
            '• One-way—talk WITH AI, not AT AI'
          ],
          successCriteria: [
            '✅ 3+ multi-turn conversations: excellent outputs',
            '✅ Distinguish: AI helps learning vs does work',
            '✅ "Review my draft" not "do it for me"',
            '✅ Know AI limits: no college access, verify data',
            '✅ 20%+ quality improved, understanding increased!'
          ]
        },
        professional: {
          title: 'Professional AI Communication Challenge',
          description: 'Use collaborative AI communication for interview success and workplace preparation',
          instructions: [
            '• Select real interview prep (or realistic scenario)',
            '• Collaborative: "Prepping [company] [role], share background, ask questions"',
            '• Iterative refinement: STAR draft → critique → refine → perfect',
            '• AI roleplay: "Act tough interviewer, harsh feedback wanted"',
            '• Identify gaps, salary negotiation roleplay—document patterns that work!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Prepare me"—no dialogue about YOUR situation',
            '• Not use mock interviews—missing huge practice opportunity',
            '• Accept AI-generated—personalize with YOUR experiences, voice',
            '• Not ask challenge—"Point weaknesses" "Make better?"',
            '• One-way dump—you dump, AI responds, ends inefficient'
          ],
          successCriteria: [
            '✅ 3+ roleplay interview sessions with AI',
            '✅ Iterate answers through dialogue: excellent',
            '✅ AI identifies gaps: profile vs job requirements',
            '✅ Answers authentic (YOUR experiences) + structured',
            '✅ 50% faster placement prep!'
          ]
        },
        personal: {
          title: 'Personal Development Communication Challenge',
          description: 'Use AI as thinking partner for career decisions and personal growth',
          instructions: [
            '• Choose decision: CA vs MBA vs Job, city, industry, higher studies',
            '• "Thinking partner": Share situation, priorities, ask questions—probe thinking',
            '• Honest dialogue: "Want balance + high-pay consulting contradiction, help think"',
            '• Challenge assumptions: "MBA because everyone, challenge—what not considering?"',
            '• Iterate scenarios: CA 5-year vs Job, compare—keep decision journal!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "What career?"—no context: personality, constraints, priorities',
            '• Take first suggestion—AI helps think, not decides',
            '• Not honest—hiding constraints = unrealistic advice',
            '• Expect AI knows Indian market—combine AI + real placement data',
            '• Surface-level—go deep, explore contradictions, challenge'
          ],
          successCriteria: [
            '✅ AI dialogue: 1 major decision clarified',
            '✅ Thinking clearer: AI asked unasked questions',
            '✅ Challenged AI, defend/refine reasoning',
            '✅ Combined AI + real-world data (placement, seniors, mentors)',
            '✅ YOU make decisions, AI helps think better!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You communicate effectively with AI systems',
        'You use iterative refinement skillfully',
        'You understand AI capabilities and limitations',
        'You provide clear context and requirements',
        'You help others improve AI communication'
      ],
      improvements: [
        'Experiment with more diverse communication styles',
        'Practice providing more specific context',
        'Improve your feedback quality to AI',
        'Build more systematic AI communication habits',
        'Share more AI communication knowledge'
      ],
      nextSteps: [
        'Continue developing AI communication mastery',
        'Explore different AI tools and communication styles',
        'Build a comprehensive AI communication guide',
        'Mentor others in AI communication',
        'Stay current with evolving AI capabilities'
      ]
    },
    badge: {
      name: 'AI Communicator',
      emoji: '🤖',
      description: 'Master of effective AI communication'
    },
    shareMessage: 'Just mastered AI communication! 🤖 #AITools #PromptEngineering'
  },
  {
    id: 'prompt-optimization',
    title: 'Prompt Optimization',
    emoji: '⚡',
    context: 'professional',
    discover: {
      scenario: "Placements. Applying 20 companies. Each needs customized resume, cover letter. Company #1: 8 tries to get good resume bullet. Company #2: 7 tries. 40hrs just iterating! Senior has 'optimized prompts'—works FIRST try. She does 5 companies in time you do 1.",
      problemExplanation: [
        "Time waste: 30 mins iterating each. 20 companies × 30 mins = 10 hours wasted",
        "Reinvent wheel: Start from scratch each. No reusable templates. Repeat 20 times",
        "Inconsistent quality: Sometimes great, sometimes mediocre. Don't know why",
        "No learning curve: Don't document what works. Same mistakes. No improvement"
      ],
      solutionApproach: [
        "Prompt Library: Save 10-15 best prompts. Reuse, don't recreate",
        "Few-Shot: Give 2-3 examples. 'Here are 3 strong bullets. Write 5 more, same format.' Matches pattern",
        "Chain-of-Thought: Add 'Let's think step-by-step:' AI gives better reasoning. 40% more accurate",
        "Master Templates: One perfect prompt per task. Customize variables. 5 companies in time you do 1"
      ]
    },
    video: {
      title: 'From 8 Tries to 1 Try: Optimize Your Prompts for Placement Season',
      duration: 7,
      content: [
        '⏰ Why you\'re wasting 30 hours in placement season with bad prompts (and how to fix it)',
        '📚 The Prompt Library method: Create once, reuse 20 times (10x efficiency)',
        '🎯 Few-shot prompting: Show AI 3 examples, get perfect pattern matching',
        '🧠 Chain-of-thought: The "magic phrase" that makes AI 40% more accurate',
        '🔬 A/B testing: How to identify which prompt structures work best for YOU',
        '📊 Real results: Optimized prompts = 5 companies/hour vs 5 companies/day',
        '🔥 Master template: The one prompt that works for 90% of situations'
      ],
      script: `
[INTRO - 0:00-0:30]
Okay, brutal honesty time. How many times have you asked ChatGPT the same basic thing in different ways, hoping to get a better answer? "Write my resume bullet." Then "Write a strong resume bullet." Then "Write an impactful resume bullet for my internship." Eight tries later, you finally get something good.

Meanwhile, your senior applied to 15 companies in the time you did 3. How? Optimized prompts. Templates that WORK on the first try. Let me show you how to build your own.

[PROBLEM SETUP - 0:30-1:30]
Placement season reality check:

You need to apply to 20 companies. Each needs:
- Customized resume (5 bullets minimum)
- Cover letter (3-4 paragraphs)
- Answer to "Why this company?" (for HR screening)
- Prep for company-specific interview questions

If each task takes 8 AI iterations to get right, you\'re looking at:
20 companies × 30 AI iterations = 600 prompts = 40+ hours of just fighting with ChatGPT

That\'s insane. You don\'t have 40 hours. Placements start in 2 weeks.

Here\'s what smart students do: They spend 2 hours ONCE creating optimized prompt templates. Then they apply those templates 20 times with minor customization. Same 20 companies, done in 8 hours total.

That\'s the power of optimization.

[THE SOLUTION - 1:30-3:30]
Three optimization techniques that will change your life:

TECHNIQUE 1: FEW-SHOT PROMPTING

Instead of explaining what you want in words, SHOW examples.

BAD PROMPT: "Write strong resume bullets for my marketing internship"

OPTIMIZED PROMPT: "Here are 3 excellent resume bullets:
- Analyzed customer feedback from 500+ surveys using Excel, identifying 3 key pain points that informed product roadmap decisions
- Led social media campaign for campus fest, growing Instagram following by 340% in 2 weeks through targeted content strategy
- Conducted competitor analysis of 10 D2C brands, presenting insights that helped client refine their market positioning

Notice the pattern: Action verb + Scope/Scale + Tool/Method + Business Impact

Now write 5 bullets for my internship at [company] where I [what you did], following this EXACT pattern and quality level."

Result? First try success. Every time.

TECHNIQUE 2: CHAIN-OF-THOUGHT

For complex tasks, add this magic phrase: "Let\'s think through this step-by-step:"

Example:
"I\'m choosing between HDFC Bank (secure, traditional) and a fintech startup (exciting, risky). Let\'s think through this step-by-step:
1. What are my priorities? (Career growth, learning, stability, money)
2. What does each option offer in each area?
3. What\'s my risk tolerance given family situation?
4. What\'s the opportunity cost of each choice?
5. What would I regret more in 5 years - playing it safe or taking the risk?

Walk me through this analysis systematically."

AI gives WAY better analysis with step-by-step thinking than just "which should I choose?"

TECHNIQUE 3: MASTER TEMPLATES

Create one perfect prompt for each task type. Example:

RESUME BULLET TEMPLATE:
"Context: I\'m a B.Com [major] student applying for [role] at [company]. 
Experience: During [project/internship], I [what you did] using [tools/methods].
Result: [Quantifiable outcome if possible].

Write a compelling resume bullet following this pattern: [Action verb] + [Specific scope with numbers] + [Method/tool used] + [Business impact]. 

Good example: "Analyzed sales data from 1000+ transactions using Excel pivot tables, identifying seasonal patterns that increased inventory efficiency by 18%"

Write a bullet for my experience above, matching this quality and specificity level."

Save this template. Now for each new experience, you just fill in the variables. First-try success.

[REAL SCENARIO - 3:30-5:00]
Real optimization in action:

Week 1 of placements (Before optimization):
You\'re applying to Deloitte. You try 6 different prompts for cover letter. Finally get something decent. Takes 45 minutes.

You create your OPTIMIZED COVER LETTER TEMPLATE:

"I\'m applying to [COMPANY] for [ROLE]. 

My background: B.Com [Major], [Key skills], [Standout achievement with metric]

Company research: [What I know about company culture/values from my research]

Connection: [How my experience/goals align with their needs]

Request: Write opening paragraph that:
1. Shows I researched the company (mention specific recent initiative or value)
2. Connects my background to the role requirements  
3. Includes one impressive metric from my experience
4. Sounds authentic and professional, not corporate-generic
5. Is 4-5 sentences max

Examples of good opening paragraphs: [paste 2-3 examples from online resources]

Match this quality level."

Week 2 of placements (After optimization):
Deloitte? Fill template, 8 minutes, perfect.
HDFC? Fill template, 7 minutes, perfect.
HUL? Fill template, 8 minutes, perfect.

You\'ve applied to 15 companies while your friends are still on company #4.

[PRO TIPS - 5:00-6:30]
🔥 Pro Tip #1: The Prompt Library
Create a doc with these templates:
- Resume Bullet Generator
- Cover Letter Opener
- Cover Letter Body (achievement highlight)
- Interview Answer (STAR format)
- Company Research Summary
- Salary Negotiation Script
- Thank You Email

Each template is battle-tested and optimized. Just customize variables.

🔥 Pro Tip #2: A/B Test to Find Your Best Pattern
Try 2 different prompt approaches for same task. Compare outputs. The winner becomes your template.

Prompt A: Direct style
Prompt B: Few-shot with examples

Whichever consistently gives better results = your go-to pattern.

🔥 Pro Tip #3: Learn from the Best
When you see a REALLY good AI output (yours or someone else\'s), reverse-engineer: What was the prompt? What made it work? Save that pattern.

🔥 Pro Tip #4: Combine Techniques
"[FEW-SHOT] Here are 3 example answers. [CHAIN-OF-THOUGHT] Let\'s think step-by-step about how to adapt this pattern to my situation. [SPECIFIC FORMAT] Give me the answer in STAR format, 150 words max."

Combined techniques = elite-level outputs.

🔥 Pro Tip #5: Version Your Templates
Resume Bullet Template v1 → v2 → v3
Keep improving based on what gets you results (interview calls, positive feedback).

[RESULTS - 6:30-7:00]
Students who optimize prompts:

✅ Sanya (LSR): Built library of 12 optimized templates during placement prep. Applied to 25 companies in same time her friends did 8. Got 7 interview calls (vs average 2-3).

✅ Karthik (Loyola): Used few-shot prompting for all applications. Reduced time per company from 2 hours to 25 minutes. Quality stayed high - 5 offers.

✅ Placement Cell Data 2024: Students using optimized prompt templates:
- 75% reduction in AI iteration time
- 2.5x more applications completed
- No drop in quality (actually 15% improvement because templates are battle-tested)

The key? Work smart, not hard. Optimize once, benefit forever.

[CALL TO ACTION - 7:00-7:30]
Your action plan:

1. This week: Document your next 5 successful AI prompts. What made them work?
2. Create 3 master templates from those patterns
3. Test templates on new situations
4. Refine and version them
5. Share with study group (compare whose templates work best)

By the time placements hit, you\'ll have an arsenal of optimized prompts that make you 10x faster than everyone else.

Remember: In placement season, speed + quality = competitive advantage. Prompt optimization gives you both.

Alright, next we\'re talking about Bias Recognition - because AI can be wrong, biased, or outdated, and you need to know when. Critical skill. Let\'s go!
      `
    },
    quiz: {
      title: 'Prompt Optimization Mastery Check',
      questions: [
        {
          id: 16,
          question: 'Need resume bullets for 5 different internships/projects. What is MOST efficient approach using few-shot prompting?',
          options: [
            'Ask "write my resume" 5 different times',
            'Give ChatGPT 3 examples of excellent bullets, then say: "Using this EXACT pattern (action verb + scale + method + impact), write 5 bullets for my experiences: [list experiences]"',
            'Write them yourself without AI',
            'Copy bullets from online'
          ],
          correct: 1,
          explanation: 'Few-shot prompting (showing 3 examples) = teaches AI your desired pattern. Then it can generate 5, 10, or 20 bullets matching that exact quality and format. You optimize once (create good examples), benefit multiple times (all bullets match that standard). Show AI what good looks like = get more good. No examples = generic output.'
        },
        {
          id: 17,
          question: 'Deciding between 3 career options (CA, MBA, Job). Which prompt optimization technique produces BEST analysis?',
          options: [
            '"Tell me which is best"',
            'Chain-of-thought: "Let us analyze step-by-step: 1) My financial situation, 2) Time commitment of each option, 3) Career growth potential, 4) Alignment with my strengths, 5) Risk factors. Walk through each step systematically."',
            '"Give me pros and cons"',
            '"What should I do?"'
          ],
          correct: 1,
          explanation: 'Chain-of-thought prompting ("step-by-step" analysis) = makes AI break down complex decisions systematically, considering each factor thoroughly. Produces deeper, more useful analysis than quick generic advice. Force AI to think step-by-step = quality analysis. One-shot question = shallow generic answer. Complex decisions need systematic thinking.'
        },
        {
          id: 18,
          question: 'Building prompt library for placement season. What should be FIRST 3 templates?',
          options: [
            'Random prompts you liked',
            '3 most common tasks: Resume bullets, Cover letter opener, Interview STAR answers - create one perfect optimized prompt for each',
            'Only interview questions',
            'Copy others templates'
          ],
          correct: 1,
          explanation: 'Focus on highest-frequency tasks first (resume, cover letter, interviews) = these give maximum ROI. One optimized template for each gets reused 20+ times during placements, saving massive time while maintaining quality. High-frequency tasks = high impact. Random templates = wasted effort. Build library strategically, not randomly.'
        },
        {
          id: 19,
          question: 'Two prompts for company research. Which will you make optimized template? Prompt A: "Tell me about [company]" - Prompt B: "Research [company]: recent news, culture, values, key challenges. Format as: 1) Business overview, 2) Why they are hiring, 3) What they value in candidates, 4) Recent initiatives, 5) Questions I should ask them. Sources needed."',
          options: [
            'Prompt A - simpler is better',
            'Prompt B - specific structure, clear format, multiple angles, actionable outputs',
            'Neither, research manually',
            'Mix both randomly'
          ],
          correct: 1,
          explanation: 'Prompt B = optimized because specifies exactly what you need (5 specific aspects), in what format (numbered list), and requests sources. This becomes reusable template - just change company name. Works perfectly every time vs Prompt A requiring 5-6 iterations. Specific template = consistent quality. Vague template = inconsistent garbage.'
        },
        {
          id: 20,
          question: 'Created 2 different prompt templates for interview answers. How to determine which to keep in library?',
          options: [
            'Keep both, why choose?',
            'A/B test: Use each template 3 times, compare quality of outputs, keep one that consistently produces better answers with less iteration needed',
            'Use whichever is shorter',
            'Pick randomly'
          ],
          correct: 1,
          explanation: 'A/B testing (systematic comparison) = identifies which prompt structure works BEST for your needs. Test each template multiple times, track results (quality, iteration needed, time taken), keep the winner. This evidence-based approach builds library of prompts you KNOW work. Test and measure = quality library. Random guessing = mediocre templates.'
        }
      ]
    },
    challenge: {
      title: 'Prompt Optimization Challenge',
      description: 'Optimize prompts for maximum effectiveness and efficiency',
      contexts: {
        academic: {
          title: 'Academic Prompt Optimization Challenge',
          description: 'Build reusable templates for exam prep, assignments, and studying',
          instructions: [
            '• Identify 5 common tasks: Concept, practice, revision, doubts, assignments',
            '• Create optimized template each: "B.Com [semester], understand [X], confused [gap], step-by-step: definition, why matters, Indian example, mistakes, exams"',
            '• Test 3 times different topics—consistent quality?',
            '• A/B test variations: Compare structures, keep winner',
            '• Build "B.Com Survival Library": 10-15 templates, share study group!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Too generic—"Explain [concept]" not template, placeholder',
            '• No YOUR context—B.Com level, Indian examples',
            '• Rare tasks—optimize 20% used 80% time',
            '• Not test before save—one good ≠ reliable',
            '• Static templates—update as learn better'
          ],
          successCriteria: [
            '✅ 10-15 tested templates for academic tasks',
            '✅ 90%+ success rate on first try',
            '✅ 60%+ time cut, quality maintained',
            '✅ Library organized, find in 10 seconds',
            '✅ Exam prep 2× faster than before!'
          ]
        },
        professional: {
          title: 'Professional Prompt Optimization Challenge',
          description: 'Build battle-tested templates for 20+ company applications',
          instructions: [
            '• Map placement tasks: Resume, Cover, Research, Interview, Salary, LinkedIn',
            '• Create MASTER template each: few-shot + chain-of-thought + format',
            '• Test 3 companies—consistent outputs with name swaps?',
            '• A/B test versions: Which structure → best results fastest?',
            '• Build "Placement Arsenal": 12-15 templates, usage guide, track ROI!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Too rigid—Deloitte vs Startup need different approaches',
            '• Not document customization—template [COMPANY], what else customize?',
            '• Optimize perfection—good 30min works 85% vs perfect 5hr',
            '• No version control—track v1 vs v2 vs v3',
            '• Keep secret—share study group, improve together'
          ],
          successCriteria: [
            '✅ 12-15 battle-tested templates: placement cycle',
            '✅ 80%+ success rate on first try',
            '✅ Full application in under 45 minutes',
            '✅ Templates documented: customization instructions',
            '✅ 15+ companies applied vs 5-8 average!'
          ]
        },
        personal: {
          title: 'Personal Development Optimization Challenge',
          description: 'Create optimized prompts for life decisions and skill building',
          instructions: [
            '• Identify recurring: Career clarity, Skill development, Work-life, Financial, Relationships',
            '• Create "thinking partner" template: Situation, priorities, constraints, step-by-step—challenge assumptions',
            '• Test 3 decisions—consistent clarity?',
            '• Skill template: "Learn [skill], [time], [style], 30-day plan realistic"',
            '• Build "Life OS" library: Career, Skills, Goals, Problems—version, improve!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Same structure all—career ≠ relationship issue',
            '• Not honest templates—garbage in = garbage out',
            '• Optimize sounds good—what helps better decisions?',
            '• Not combine real-world—AI complements mentors, not replaces',
            '• Create never use—apply templates, not just create'
          ],
          successCriteria: [
            '✅ 8-10 personal templates: recurring decisions/goals',
            '✅ 2 major life decisions clarified using templates',
            '✅ Templates produce useful insights, not generic',
            '✅ Teach friends create their own templates',
            '✅ Decision quality improved: more factors, systematic, fewer regrets!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You systematically optimize your prompts',
        'You use advanced techniques effectively',
        'You build and maintain useful prompt libraries',
        'You test prompts rigorously',
        'You share optimization knowledge with others'
      ],
      improvements: [
        'Experiment with more advanced techniques',
        'Build more comprehensive prompt libraries',
        'Practice more systematic A/B testing',
        'Learn from the broader prompt engineering community',
        'Document your optimization insights better'
      ],
      nextSteps: [
        'Master advanced prompting techniques',
        'Build domain-specific prompt libraries',
        'Contribute to prompt engineering community',
        'Explore emerging AI capabilities',
        'Mentor others in prompt optimization'
      ]
    },
    badge: {
      name: 'Prompt Optimizer',
      emoji: '⚡',
      description: 'Master of prompt optimization and efficiency'
    },
    shareMessage: 'Just optimized my AI prompts like a pro! ⚡ #PromptEngineering #AIOptimization'
  },
  {
    id: 'bias-recognition',
    title: 'Bias Recognition',
    emoji: '🔍',
    context: 'academic' as const,
    discover: {
      scenario: "Ask ChatGPT 'Best career paths B.Com India.' AI emphasizes CA, MBA, banking. Barely mentions entrepreneurship, digital marketing, fintech. Cousin (works startup): 'AI's outdated, biased toward traditional.' AI can be biased! Might miss opportunities that suit YOU better.",
      problemExplanation: [
        "Past data bias: Trained on past. Reflects WAS popular, not IS emerging. Misses AI/ML roles",
        "Cultural bias: US-centric advice when need India-specific. Work culture, salary different",
        "Temporal bias: Data cutoff 1-2 years old. Doesn't know companies founded last year, recent shifts",
        "Prestige bias: Overemphasize Big 4. Undervalue startups. Might be better for YOUR goals"
      ],
      solutionApproach: [
        "Ask what's missing: 'What perspectives missing? Give unconventional alternatives too.' Forces beyond defaults",
        "Multiple viewpoints: 'Give advice from: 1) Parent, 2) Startup founder, 3) HR, 4) Recent grad non-traditional'",
        "Cross-reference: Don't stop at AI. Talk seniors, check placement data, consult mentors. AI + humans = truth",
        "Ask AI identify biases: 'What biases in your advice? What overvaluing or undervaluing?' Self-awareness check"
      ]
    },
    video: {
      title: 'Don\'t Let AI\'s Biases Derail Your Career: Recognize and Counter Them',
      duration: 7,
      content: [
        '⚠️ Why ChatGPT pushed me toward CA when startup suited me better (true story)',
        '🌍 Cultural bias: AI gives Silicon Valley advice when you need Indian job market reality',
        '📅 Temporal bias: AI\'s data is 2 years old - missing the fintech/AI boom',
        '✅ The "multiple perspectives" prompt that reveals bias instantly',
        '🔍 Cross-reference strategy: AI + Placement cell data + Senior advice = Truth',
        '🔥 Pro move: Ask AI to identify its OWN biases',
        '📊 Result: Make career decisions based on reality, not AI\'s outdated assumptions'
      ],
      script: `
[INTRO - 0:00-0:30]
Real story. My friend Ananya, B.Com from Pune. Asked ChatGPT: "What\'s the best career path after B.Com?" AI said: CA, then MBA, then banking jobs. Traditional stuff. She almost started CA prep.

Then she talked to her cousin working at Razorpay. Cousin said: "Fintech is BOOMING. They\'re hiring B.Com grads for analyst roles. Better pay than traditional banking, amazing growth, and you don\'t need CA."

Ananya realized: ChatGPT\'s advice was biased toward traditional paths. It missed the entire fintech revolution. Good thing she didn\'t blindly follow it.

This is why bias recognition matters. Let me show you how to spot it.

[PROBLEM SETUP - 0:30-1:30]
AI biases come from three main sources:

1. TRAINING DATA BIAS
ChatGPT is trained on internet content. What\'s most written about? Traditional careers. Big companies. US job market. 

What\'s LESS written about? New-age roles (growth hacker, AI trainer, community manager). Tier-2 city opportunities. Non-corporate paths.

So when you ask "career options for B.Com", AI overrepresents what\'s in its training data (CA, MBA, banking) and underrepresents emerging options (fintech analyst, business ops at startups, digital marketing specialist).

2. TEMPORAL BIAS  
ChatGPT\'s training data has a cutoff date (usually 1-2 years old). 

It doesn\'t know:
- Companies founded last year (missing 100s of great startups)
- Recent industry shifts (AI/ML role explosion, remote work normalization)
- Current salary trends (market rates changed post-COVID)
- Latest placement statistics from your college

3. CULTURAL BIAS
Much of AI\'s training is US/Europe-centric.

You ask about work-life balance? AI gives you US tech company examples.
You need India reality? Tier-1 vs tier-2 city dynamics? Arranged marriage impact on city choice? AI\'s understanding is limited.

[THE SOLUTION - 1:30-3:30]
How to recognize and counter bias:

STRATEGY 1: THE MULTIPLE PERSPECTIVES PROMPT

Instead of: "What career should I choose after B.Com?"

Try: "I\'m deciding on career after B.Com. Give me advice from these 5 perspectives:
1. A CA who loves their traditional path
2. A startup employee who rejected corporate for growth
3. An MBA grad who thinks higher education is essential  
4. A successful entrepreneur who skipped all of that
5. A B.Com grad working abroad vs in India

For each perspective, what would they recommend and why? Where might each perspective be biased?"

Now you see the full picture, INCLUDING the biases in each viewpoint.

STRATEGY 2: ASK AI TO IDENTIFY ITS OWN BIAS

"You just recommended CA and MBA as top paths. What biases might exist in this advice? What career options might you be undervaluing or overlooking? What\'s your training data likely missing about current Indian job market for B.Com grads?"

AI will actually tell you: "I may be biased toward traditional paths due to more historical content. I might be missing emerging roles in fintech, analytics, or digital spaces. My data about Indian tier-2 city opportunities might be limited."

Mind. Blown. Use AI to check its own biases!

STRATEGY 3: THE TRIANGULATION METHOD

Never make decisions on AI alone. Triangulate:
- AI insight (broad patterns, frameworks, considerations)
- Real data (your college placement report, LinkedIn salary data, industry reports)
- Human expertise (seniors who got placed, mentors in the field, family understanding your constraints)

Where all three align = probably reliable.
Where they conflict = dig deeper before deciding.

[REAL SCENARIO - 3:30-5:00]
Let\'s apply this:

You ask ChatGPT: "Should I learn Python or stick to Excel for finance roles?"

AI response: "Excel is standard for finance. Python is more for tech/data science roles."

BIAS CHECK:

You: "What biases might exist in this advice? What\'s changing in finance industry that I should know?"

AI: "My training may underrepresent how rapidly finance is becoming data-driven. Many modern finance roles now expect Python for financial modeling, risk analysis, and algorithmic trading. I may be giving advice based on 2020 finance, not 2024 finance."

You: "Give me perspective of: 1) Traditional bank HR, 2) Fintech startup founder, 3) Recent finance grad working in analytics"

AI: 
1. Traditional bank: "Excel is sufficient, Python is nice-to-have"
2. Fintech founder: "Python is must-have, Excel is basic expectation"
3. Recent grad: "I got job because of Python skills, my Excel-only friends struggled"

Now you cross-reference with:
- Your college placement data (check job descriptions for finance roles)
- LinkedIn posts from finance professionals (what skills do they list?)
- Your senior who joined HDFC analytics team (ask what they actually use)

REALITY: Finance is splitting. Traditional banking = Excel focused. Modern finance/fintech/analytics = Python important.

Your decision should depend on WHICH finance you\'re targeting, not on AI\'s first response.

[COMMON MISTAKES - 5:00-6:00]
Mistake #1: Trusting AI Completely
❌ "ChatGPT said so, must be true"
✅ "Interesting. Let me verify with current data."

Mistake #2: Not Specifying Indian Context
❌ "Career options for B.Com"
✅ "Career options for B.Com graduate in India, considering both metro and tier-2 city opportunities"

Mistake #3: Not Asking for Recent Trends
❌ Accepting advice that might be 2 years outdated
✅ "What\'s changed in this industry in last 2 years? What emerging roles am I not aware of?"

Mistake #4: Single Source Thinking
❌ AI says X, so you do X
✅ AI says X, Placement report says Y, Senior says Z → You investigate the discrepancy

Mistake #5: Not Questioning Assumptions
❌ "AI recommended Big 4, so that\'s the best"
✅ "Why are you recommending Big 4? What\'s the bias toward brand names? What alternatives exist?"

[RESULTS - 6:00-7:00]
🎯 Rajesh (B.Com, Bangalore): Almost chose CA because ChatGPT emphasized it. Then asked for multiple perspectives, talked to 5 working professionals across different paths. Chose Business Analyst at startup - loves it, would have been miserable in CA.

🎯 Meera (B.Com, Delhi): Used AI for career research but triangulated with placement cell data and senior experiences. Identified bias in AI\'s advice (was US-centric). Made informed choice for treasury role at Axis Bank.

🎯 Critical stat: 40% of students who followed AI career advice without bias-checking reported regret within 6 months. Those who cross-referenced and questioned biases? Only 8% regret rate.

The key? Use AI as ONE input, not THE input. Recognize its biases, compensate for them, make fully-informed decisions.

[CALL TO ACTION - 7:00-7:30]
Next time you ask AI for important advice:

1. Get the advice
2. Ask: "What biases might exist in this advice?"
3. Request: "Give me perspectives that contradict this"
4. Cross-reference with 2-3 real-world sources
5. Then decide

AI is powerful. But it\'s not omniscient. Question it. Verify it. Complement it with human wisdom.

Your career is too important to outsource to an algorithm - even a smart one.

Next up - Ethical AI Use, where we talk about the line between AI helping you vs AI doing the work for you. This gets into academic integrity, workplace ethics, and long-term skill development. Let\'s dive in!
      `
    },
    quiz: {
      title: 'Bias Recognition Mastery Check',
      questions: [
        {
          id: 21,
          question: 'ChatGPT suggests pursue CA or MBA after B.Com, barely mentioning other options. What type of bias is this MOST likely?',
          options: [
            'No bias - CA and MBA are objectively best',
            'Training data bias - traditional paths have more content online than emerging careers, so AI overemphasizes them',
            'Cultural bias only',
            'AI is trying to trick you'
          ],
          correct: 1,
          explanation: 'AI training = includes more content about traditional, established career paths (CA, MBA, banking) than emerging fields (fintech, analytics, startups), leading to overrepresentation of traditional advice. This doesn\'t mean traditional is bad, just that AI might be missing newer options that could suit you better. More training data = more emphasis. Less data = less visibility.'
        },
        {
          id: 22,
          question: 'Ask AI about "top companies for B.Com placements." It lists TCS, Infosys, Wipro, Deloitte. Your college placement data shows 15 startups also hired well. What is happening?',
          options: [
            'AI is completely wrong',
            'Prestige bias - AI overvalues brand-name companies because more content exists about them, may undervalue lesser-known but great companies',
            'Startups are bad, AI is protecting you',
            'Your placement data is wrong'
          ],
          correct: 1,
          explanation: 'AI = tends to emphasize well-known companies (more online content, more historical data) and may miss excellent but less-famous options like fast-growing startups. Always cross-reference AI suggestions with YOUR college\'s actual placement data. Brand names = more data = AI recommends. Hidden gems = less data = AI misses. Verify with real data.'
        },
        {
          id: 23,
          question: 'How should handle AI advice on important career decisions?',
          options: [
            'Trust AI completely - it knows better than humans',
            'Use triangulation: AI insights + Recent placement data + Advice from people in that career = Informed decision',
            'Ignore AI completely',
            'Just ask your parents'
          ],
          correct: 1,
          explanation: 'Triangulation (combining AI analysis with current data and human experience) = compensates for AI\'s biases. AI gives frameworks and considerations, data shows current reality, humans provide context and wisdom. All three together = best decisions. AI alone = biased. Data alone = no context. Humans alone = limited perspective. Combine all three = informed choice.'
        },
        {
          id: 24,
          question: 'Best way to counter AI bias when researching career options?',
          options: [
            'Do not ask about careers at all',
            'Ask: "Give me advice from 5 different perspectives: conservative parent, startup founder, corporate HR, entrepreneur, recent grad who chose unconventional path. Include where each perspective might be biased."',
            'Accept first response',
            'Only ask yes/no questions'
          ],
          correct: 1,
          explanation: 'Requesting multiple perspectives = forces AI to present diverse viewpoints, revealing biases in each. Helps you see full spectrum of options and make decisions based on YOUR priorities, not AI\'s training data skews. One perspective = one bias. Multiple perspectives = see all biases = make informed choice. Force AI to show you all angles.'
        },
        {
          id: 25,
          question: 'AI suggests "Marketing roles pay less than Finance roles for B.Com grads." How should verify before making career choice?',
          options: [
            'Believe it - AI has all data',
            'Cross-reference: Check recent salary reports (AmbitionBox, Glassdoor India), your college placement data, talk to recent grads in both fields, consider total compensation not just base salary',
            'Ignore completely',
            'Ask AI again hoping for different answer'
          ],
          correct: 1,
          explanation: 'Salary claims = need verification with current, India-specific data. AI might be using outdated or US-centric information. Check multiple current sources (salary websites, placement reports, actual professionals) before making major decisions based on compensation assumptions. AI data = may be old/wrong region. Current local data = truth. Verify before deciding career path.'
        }
      ]
    },
    challenge: {
      title: 'Bias Recognition Challenge',
      description: 'Develop critical thinking to recognize and counter AI biases in career/academic decisions',
      contexts: {
        academic: {
          title: 'Academic Bias Recognition Challenge',
          description: 'Identify biases in AI academic guidance and research',
          instructions: [
            '• Choose research topic: business ethics, market analysis, economic policy',
            '• Ask ChatGPT for analysis',
            '• Detect bias: "What perspectives missing? Cultural/temporal biases exist?"',
            '• Request counterarguments: "CONTRADICT this, different stakeholders"',
            '• Cross-reference: Google Scholar, news, textbook, professor—verify with 2+ sources!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Use AI as-is—check bias/accuracy',
            '• Not consider recency—pre-COVID vs post-COVID',
            '• Accept first perspective—ask alternatives',
            '• Not specify Indian—getting global, need local',
            '• One-time check—bias detection = habit every interaction'
          ],
          successCriteria: [
            '✅ Identify 3+ bias types: training, temporal, cultural',
            '✅ Auto ask "What missing?" "Alternative views?"',
            '✅ Cross-reference 2+ authoritative sources',
            '✅ Explain classmates how spot bias',
            '✅ Caught 1+ biased/outdated AI advice, corrected!'
          ]
        },
        professional: {
          title: 'Professional Bias Recognition Challenge',
          description: 'Spot biases in AI career advice and company research',
          instructions: [
            '• Ask "Best career B.Com Finance India"—analyze response',
            '• Detect biases: Traditional vs emerging, brand vs startup, metro vs tier-2',
            '• Request 5 perspectives: Big 4, fintech, CA, entrepreneur, remote—where biased?',
            '• Cross-reference: Placement data, LinkedIn salary, seniors experiences—reality check',
            '• Build checklist, create "Reality-Checked Career Guide"—AI + verified + human!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Decide solely AI—check current placement trends',
            '• Not recognize US-bias—$80K ≠ 8 LPA purchasing power',
            '• Accept company descriptions—check Glassdoor/AmbitionBox',
            '• Not question why—always ask "why this path?"',
            '• Interview prep bias—AI cookie-cutter, need authentic YOU'
          ],
          successCriteria: [
            '✅ Biases identified, corrected with real data',
            '✅ Triangulation: AI + Data + Human advice',
            '✅ Spot US-centric vs India-relevant',
            '✅ Verify company info beyond AI',
            '✅ Helped friends recognize AI bias!'
          ]
        },
        personal: {
          title: 'Personal Bias Recognition Challenge',
          description: 'Develop critical awareness of AI biases in life decisions',
          instructions: [
            '• Choose decision: City, higher studies, industry suits personality',
            '• Get AI initial advice',
            '• Probe bias: "What assumptions? Priorities different? Options not considering?"',
            '• Request contradicting: "Work-life over salary" vs "Growth over stability"',
            '• Triangulate: AI + Family + Mentor + Gut + Market—document process!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Use AI validate already decided—confirmation bias',
            '• AI doesn\'t understand YOUR family, financial, values',
            '• Treat AI universal—biased toward certain types/situations',
            '• Not question why X over Y—ask "why?"',
            '• Irreversible decisions on AI—dropping out, quitting primarily AI'
          ],
          successCriteria: [
            '✅ 1+ major bias identified in AI advice',
            '✅ "Multiple perspectives" prompt for important decisions',
            '✅ Combine AI + human wisdom who know you',
            '✅ Articulate: AI helped + advice biased/limited where',
            '✅ AI informs, doesn\'t dictate—maintain critical thinking!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You critically evaluate AI outputs instead of accepting blindly',
        'You recognize different types of bias (training data, temporal, cultural, prestige)',
        'You cross-reference AI advice with multiple sources effectively',
        'You ask for multiple perspectives to reveal bias',
        'You help others develop bias awareness'
      ],
      improvements: [
        'Deepen understanding of how AI training works and where biases originate',
        'Practice identifying subtle biases, not just obvious ones',
        'Build more systematic bias-checking process (checklist, verification steps)',
        'Engage more with AI ethics discussions and research',
        'Document bias cases to build pattern recognition'
      ],
      nextSteps: [
        'Continue developing critical AI literacy as essential life skill',
        'Explore AI ethics research and stay informed on bias discussions',
        'Teach bias recognition to friends, family, study group',
        'Build personal framework for evaluating AI advice quality',
        'Stay updated on AI limitations and improvements'
      ]
    },
    badge: { name: 'Bias Detective', emoji: '🔍', description: 'Expert in recognizing AI biases' },
    shareMessage: 'Just learned to recognize AI biases! 🔍 #AIEthics'
  },
  {
    id: 'ethical-ai-use',
    title: 'Ethical AI Use',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: "Prof: 'Use AI for Financial Analysis assignment, but cite and demonstrate YOUR understanding.' Friend asks ChatGPT write entire analysis, copies, submits. Gets caught. Zero marks. Where's the line? Internship: Want ChatGPT draft client emails with confidential financial data. Okay to paste client info? Need understand ethical AI use.",
      problemExplanation: [
        "Unclear boundaries: 'AI-assisted' vs 'AI doing work'? When help become cheating? Don't know line",
        "Academic integrity: Policies vary by class. Allowed one = cheating another. Confusion",
        "Privacy disasters: Paste confidential internship data into ChatGPT. Security breach. Don't realize public",
        "Skill erosion: Over-rely AI = never develop critical thinking, writing. Hurts interviews, jobs"
      ],
      solutionApproach: [
        "Golden Rule: AI enhances YOUR thinking, not replaces. Makes you smarter, not lazy. LEARN, not AVOID",
        "Academic: AI understanding = Good. AI doing assignments = Bad. AI structuring YOUR ideas = Gray (check prof)",
        "Always cite: 'Analysis framework with ChatGPT assistance' or 'Concept from Claude AI.' Give credit",
        "'Explain to friend' test: Can't explain AI content in own words? Don't understand. Don't submit. Learn first"
      ]
    },
    video: {
      title: 'The Line Between Help and Cheating: Ethical AI Use for Career Success',
      duration: 8,
      content: [
        '⚠️ Real story: Student got zero for AI-written assignment (and how to avoid this)',
        '✅ The clear line: AI for understanding = Good, AI for doing = Bad',
        '🔒 Privacy disasters: What NEVER to share with ChatGPT (real examples)',
        '🏛️ How to cite AI properly in assignments (exact format)',
        '🏢 Workplace AI ethics: Check company policy FIRST (varies wildly)',
        '🧠 The "explain it to a friend" test - if you can\'t, you don\'t understand it',
        '📊 Long-term impact: Skills you don\'t develop now will hurt you in jobs/interviews'
      ],
      script: `
[INTRO - 0:00-0:30]
True story from last semester. Student - let\'s call him Raj - had a Corporate Finance assignment due. He asked ChatGPT to write the entire analysis. Copied it word-for-word. Submitted.

Professor called him in: "This isn\'t your writing style. This is clearly AI-generated. Zero marks. Academic integrity violation on your record."

Raj protested: "But AI is allowed! You said we could use it!"

Professor: "I said you could use it to HELP your learning. Not to DO the assignment FOR you. There\'s a line. You crossed it."

Let me show you where that line is. Because using AI ethically isn\'t just about avoiding trouble - it\'s about actually developing skills that will get you hired and keep you employed.

[THE LINE - 0:30-2:00]
Here\'s the clear distinction:

ETHICAL (Using AI to Learn):
✅ "Explain how to calculate WACC. I understand cost of equity but confused about cost of debt calculation."
✅ "I\'ve drafted my analysis of HUL\'s financials. Critique it. Point out errors. Ask me questions to deepen my understanding."
✅ "Help me structure my thoughts on this case study. What framework should I use? Why?"
✅ "I got this answer wrong on the practice test. Explain WHY it\'s wrong and how to think about it correctly."

Result: YOU understand the content. YOU can explain it. YOU developed the skill.

UNETHICAL (Using AI to Avoid Learning):
❌ "Write my complete financial analysis assignment on HUL"
❌ "Give me answers to these 20 assignment questions" [copy-paste]
❌ "Write my resume" [use without any personal input]
❌ "Do this case study for me" [submit AI\'s work as yours]

Result: YOU learned nothing. You\'ll crash in interviews when asked to demonstrate these skills. You\'ve stolen credit for AI\'s work.

THE TEST: Can you explain the content to a friend without looking at notes? 
Yes = You learned with AI help (ethical)
No = AI did the work, you didn\'t learn (unethical)

[WORKPLACE ETHICS - 2:00-3:30]
Now, workplace scenario. You\'re interning at HDFC Bank. You\'re drafting an email to a client about their loan application.

You think: "ChatGPT can help me write this professionally."

You paste: "Client name: Ramesh Kumar, Loan amount: 25 lakhs, Credit score: 680, Purpose: Business expansion, Collateral: Property in Pune..."

STOP. You just violated client privacy. ChatGPT is not a secure system. This data is now in OpenAI\'s servers. Potential security breach. Potential legal issue. You could be fired.

Here\'s the RIGHT way:

✅ "Help me write a professional email to a client about loan approval. Don\'t need specific details. Just give me a template with professional tone, clear structure, and key points to cover: approval notification, next steps, timeline, documents needed."

No client data shared. You get the help you need. Zero security risk.

WORKPLACE RULES:
1. Check company AI policy (some ban it, some embrace it, some have restrictions)
2. NEVER share: Client data, Financial information, Proprietary strategies, Employee information, Passwords/credentials
3. DO use AI for: Learning new skills, Understanding concepts, Professional writing improvement (with generic examples), Research and analysis (public information only)
4. Be transparent: If your company allows AI, be open about using it. If they don\'t, don\'t use it at work.

[ACADEMIC INTEGRITY - 3:30-5:00]
College policies are evolving. Here\'s how to stay ethical:

ALWAYS ASK YOUR PROFESSOR:
"What\'s your policy on AI tools for this assignment?"

Three common responses:

Policy 1: "AI allowed, must cite"
✅ Use AI to help understand, structure, revise
✅ Cite it: "Analysis framework developed with assistance from ChatGPT (OpenAI, 2024)"
✅ Demonstrate understanding in your own words

Policy 2: "AI for learning only, not for assignment"
✅ Use AI to understand concepts while studying
✅ Close ChatGPT when doing actual assignment
✅ Apply what you learned, write in your own words

Policy 3: "No AI allowed"
✅ Don\'t use it for this class
✅ Respect the policy even if you disagree
✅ Develop skills without AI assistance

When policy is unclear? ASK. Don\'t assume.

And remember: Even when AI is allowed, there\'s a difference between:
- Using AI as a tutor (ethical)
- Using AI as a ghost-writer (unethical)

[LONG-TERM THINKING - 5:00-6:30]
Here\'s what students don\'t realize:

If you use AI to DO your assignments, you get through B.Com without developing skills.

Then placements come. Interview asks: "Analyze this company\'s balance sheet."

You freeze. You never actually LEARNED financial analysis. ChatGPT did it for you all semester.

No job offer.

OR

You GET the job (somehow). First week, manager asks: "Draft this financial report."

You can\'t. You relied on AI for everything in college. Never developed writing skills.

You struggle. You might get fired.

Ethical AI use isn\'t just about "not getting caught." It\'s about actually developing the skills you\'ll need for your career.

Use AI to:
✅ Understand concepts FASTER (so you learn more in same time)
✅ Get feedback on your work (like having a tutor)
✅ Structure your thinking (organize ideas better)
✅ Practice more efficiently (generate practice problems)

Result: You learn MORE, not less. You\'re better prepared for career, not worse.

That\'s ethical AI use. Using tools to amplify YOUR capabilities, not to bypass developing them.

[PRO TIPS - 6:30-7:30]
🔥 The Citation Formula:
"[Your analysis/writing]. Framework and concept clarification assisted by ChatGPT (OpenAI, 2024). Analysis and conclusions are my own."

Clear. Honest. Gives credit. Shows you did the thinking.

🔥 The Privacy Rule:
Before pasting ANYTHING into AI, ask: "Is this confidential? Does this contain someone else\'s personal/financial info? Would my company/client be okay with this being on OpenAI\'s servers?"

If answer is no or uncertain, DON\'T paste it.

🔥 The Understanding Test:
After using AI for assignment, close it. Explain the concept to yourself out loud. 
Can you? = You learned with AI help (good)
Can\'t you? = AI did the work, you didn\'t learn (bad - redo it)

🔥 The Professional Judgment:
In workplace, when unsure:
1. Check company policy
2. Ask your manager
3. Err on side of caution

Don\'t risk your job/reputation for convenience.

🔥 The Growth Mindset:
Every time you use AI, ask: "Am I getting smarter from this interaction, or just getting work done faster?"

If just faster, not smarter = you\'re using AI wrong.

[RESULTS - 7:30-8:00]
✅ Students who use AI ethically:
- Develop deeper understanding (AI helps them learn MORE)
- Perform better in interviews (they actually have the skills)
- Maintain good reputation with professors and employers
- Build sustainable relationship with AI tools (no fear of getting caught)
- Long-term career success (skills compound over time)

❌ Students who use AI unethically:
- Get caught eventually (AI detection is getting better)
- Skill gaps show up in jobs/interviews (can\'t perform under pressure)
- Damage reputation (integrity matters in professional world)
- Miss learning opportunities (never develop critical capabilities)
- Career struggles (skills you don\'t have will haunt you)

Your choice. Short-term convenience or long-term success?

[CALL TO ACTION - 8:00-8:30]
Starting today:

1. Check your professors\' AI policies for each class
2. Set your personal AI ethics code: "I use AI to understand better, not to avoid understanding"
3. Practice the citation format
4. Test yourself: After AI helps, can you explain it without AI?
5. Protect privacy: Never paste confidential data

Remember: In the AI era, integrity is your competitive advantage. Companies WANT people who use AI ethically and effectively. That\'s you.

Cheaters might win short-term. But you\'re playing the long game. And you\'re going to win.

Alright, that\'s Module 3! You\'ve now got the complete framework for using AI ethically and effectively for your B.Com journey and career. Time to put it into practice. Let\'s crush those placements!
      `
    },
    quiz: {
      title: 'Ethical AI Use Judgment Check',
      questions: [
        {
          id: 26,
          question: 'Financial Management assignment: "Analyze TCS financial statements." Which AI use is ETHICAL?',
          options: [
            '"Analyze TCS financials for me" [copy AI analysis, submit as yours]',
            '"I have analyzed TCS financials [paste YOUR work]. Critique my analysis. What did I miss? Are my ratio interpretations correct?" [improve based on AI feedback, cite AI assistance]',
            'Use AI but do not tell anyone',
            'Do not use AI at all even if allowed'
          ],
          correct: 1,
          explanation: 'Ethical use = YOU do work first, AI helps you improve it. You learn through process and AI feedback. Cite AI assistance. Develops your skills while leveraging AI\'s capabilities. Unethical = AI does work, you just submit it. You create → AI critiques → You improve = ethical. AI creates → You copy = plagiarism.'
        },
        {
          id: 27,
          question: 'Interning at HDFC Bank. Want to use ChatGPT to improve client email. Email contains client loan details (amount, credit score, personal info). What should do?',
          options: [
            'Paste everything - ChatGPT needs context to help',
            'REMOVE all client-specific data, use generic placeholders: "Help me write professional email about loan approval. Template should include: greeting, approval notification, next steps, timeline, closing. Do not need real client details."',
            'Use AI at home so company will not know',
            'Only paste client name, not other details'
          ],
          correct: 1,
          explanation: 'NEVER share confidential client/company data with AI tools. Use generic templates instead. Sharing client information = violates privacy, could be security breach, can get you fired. Even if AI would help more with full context, protecting confidential information = non-negotiable. Privacy > convenience. Always.'
        },
        {
          id: 28,
          question: 'How should cite AI assistance in academic work?',
          options: [
            'Do not mention it - might hurt your grade',
            'Clearly state: "Concept clarification and framework assisted by ChatGPT (OpenAI, 2024). Analysis and conclusions are my own."',
            'Just write "used AI" at bottom',
            'Mention it verbally to professor but not in assignment'
          ],
          correct: 1,
          explanation: 'Proper citation = gives credit to AI assistance while making clear that YOU did thinking and analysis. Shows academic integrity and transparency. Format: Tool name, Company, Year, plus clarification of what you did vs what AI did. Transparency = integrity. Hiding AI use = academic dishonesty. Cite properly = respect rules.'
        },
        {
          id: 29,
          question: 'The "Understanding Test" for ethical AI use: After AI helps with concept/assignment, what should do?',
          options: [
            'Submit immediately - AI is always right',
            'Close ChatGPT. Explain concept out loud to yourself or friend without looking at notes. If cannot explain clearly, did not learn it - go back and actually understand before submitting.',
            'Just memorize what AI wrote',
            'Add more AI content to make it longer'
          ],
          correct: 1,
          explanation: '"Explain it to friend" test = ensures YOU actually understand content, not just copied AI output. If can\'t explain in your own words, haven\'t learned it - and will struggle in exams/interviews where AI can\'t help. Redo learning process. Can explain = learned. Can\'t explain = just copied. Test yourself always.'
        },
        {
          id: 30,
          question: 'Long-term perspective: What is REAL risk of unethical AI use (beyond getting caught)?',
          options: [
            'No real risk if you do not get caught',
            'Skill erosion: Never develop critical thinking, analysis, and communication skills. When jobs/interviews require these skills without AI assistance, struggle because never built foundation.',
            'It is actually fine to always use AI',
            'Only risk is bad grades'
          ],
          correct: 1,
          explanation: 'Biggest risk = isn\'t getting caught - it\'s never developing essential skills. In interviews, can\'t use ChatGPT. In jobs, need to think independently. If over-relied on AI during B.Com, will lack analytical and communication skills that make you valuable. Use AI to learn BETTER, not to avoid learning. Skills = career. No skills = no career. AI crutch now = career struggle later.'
        }
      ]
    },
    challenge: {
      title: 'Ethical AI Challenge',
      description: 'Build personal AI ethics code and practice it consistently',
      contexts: {
        academic: {
          title: 'Academic Integrity Challenge',
          description: 'Define and practice ethical AI use for B.Com academics',
          instructions: [
            '• Review ALL professors\' AI policies—create policy matrix',
            '• Personal code: "AI to UNDERSTAND, never AVOID understanding"',
            '• Practice: Try yourself → AI check → Revise → Cite clearly',
            '• Test: Close AI, explain to friend—if can\'t, used wrong',
            '• Build habits: Doubts ✅, Concepts ✅, Practice ✅, Homework ❌—document dilemmas!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Cite AI" = ethical—citation doesn\'t excuse outsourcing thinking',
            '• "Everyone cheating"—integrity = individual choice',
            '• Not develop skills—regret in placements/jobs',
            '• AI for assignments, not learning—backwards priorities',
            '• Hide AI use when allowed—transparency = ethical strength'
          ],
          successCriteria: [
            '✅ Written personal AI ethics code',
            '✅ Know every professor policy, follow',
            '✅ Pass "explain without AI" test',
            '✅ 5+ assignments: cited, understood, learned',
            '✅ Guided 3+ classmates toward ethical AI!'
          ]
        },
        professional: {
          title: 'Workplace AI Ethics Challenge',
          description: 'Practice ethical AI use in internships and job preparation',
          instructions: [
            '• Before internship: Find company AI policy—HR, manager, portal',
            '• Create boundaries: CAN (learn tools, writing, skills) vs CAN\'T (client data, confidential, proprietary)',
            '• Practice privacy: Identify confidential (redact), public (safe use)',
            '• Build transparent: If allowed, open about using. Unsure? Ask first.',
            '• Develop judgment: Legal? Policy? Privacy? Integrity? Skills?—test scenarios!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Secret AI at work—risky, unethical if against policy',
            '• Paste client presentations, financial, strategy—privacy violation',
            '• Fake expertise interviews—"expert Python" but AI wrote code',
            '• Not ask policy afraid no—better know than violate unknowingly',
            '• AI ethics = rules—principles for professional success'
          ],
          successCriteria: [
            '✅ Know, follow AI policy at internship',
            '✅ Never shared confidential: 100% clean record',
            '✅ Explain colleagues: appropriate vs inappropriate',
            '✅ Interviews: honest skills (AI-assisted learning ≠ AI-faked)',
            '✅ Manager trusts your AI judgment!'
          ]
        },
        personal: {
          title: 'Personal AI Ethics Challenge',
          description: 'Build sustainable, ethical relationship with AI for lifelong success',
          instructions: [
            '• Define AI philosophy: "Amplify capabilities, not fake. Learn faster, not avoid. Credit. Privacy. Real skills."',
            '• Test gray areas: "Structure thoughts" (ethical?) vs "Write MBA statement" (ethical?)',
            '• Long-term thinking: Every interaction "Building skills or eroding?"',
            '• Verification habits: AI important advice → verify 2+ human sources',
            '• Protect others, mentor friends—ethical AI before mistakes!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Major life decisions no human—AI doesn\'t know YOU deeply',
            '• Share family/friends info—no permission violation',
            '• Over-rely every decision—erodes judgment, decision skills',
            '• "Ethical if not caught"—ethics = integrity, not avoiding consequences',
            '• Not think long-term—skills not develop now limit decades'
          ],
          successCriteria: [
            '✅ Written personal AI ethics code',
            '✅ 1+ decision NOT use AI—prevented learning easier',
            '✅ Articulate line: AI help vs AI doing work',
            '✅ Protect privacy: yours and others consistently',
            '✅ Known "responsible AI user"—model good practices!'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        'You demonstrate strong ethical awareness in AI use',
        'You protect privacy and confidential information consistently',
        'You use AI to enhance learning, not to replace it',
        'You cite AI assistance appropriately and transparently',
        'You help others develop ethical AI practices'
      ],
      improvements: [
        'Deepen understanding of AI ethics beyond just "rules to follow"',
        'Build more nuanced judgment for gray-area situations',
        'Engage more with ongoing AI ethics discussions in your field',
        'Develop frameworks for workplace AI ethical dilemmas',
        'Practice explaining ethics to others more clearly'
      ],
      nextSteps: [
        'Continue developing ethical judgment as AI capabilities evolve',
        'Stay informed on changing AI policies in academics and workplace',
        'Help establish AI ethics guidelines in your workplace/college',
        'Mentor others in responsible AI use',
        'Build reputation as ethical AI practitioner in your professional network'
      ]
    },
    badge: { name: 'Ethical AI Advocate', emoji: '⚖️', description: 'Champion of ethical AI use' },
    shareMessage: 'Committed to ethical AI use! ⚖️ #AIEthics'
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

export const module3Subtopics = module3Data;

// Module 3 Assessment - 30 Questions
export const module3Assessment: AssessmentData = {
  id: 'module3-assessment',
  title: 'Prompt Engineering & AI Communication Assessment',
  description: 'Test your mastery of AI interaction and prompt engineering',
  questions: [
    // Prompt Design (1-5)
    { id: 1, question: 'CLEAR framework C stands for:', options: ['Clarity', 'Context', 'Concise', 'Creative'], correct: 1, explanation: 'Context is the foundation - providing background (B.Com student, target role, specific situation) helps AI give relevant, customized responses instead of generic advice.' },
    { id: 2, question: 'Which prompt is better?', options: ['"Explain AI"', '"Explain AI to college student in 3 paragraphs with examples"', '"Tell about AI"', '"What is AI?"'], correct: 1, explanation: 'Specific prompts with audience (college student), format (3 paragraphs), and requirements (examples) produce targeted, useful outputs. Generic prompts get generic responses.' },
    { id: 3, question: 'Why iterate on prompts?', options: ['Waste time', 'Refine and improve responses', 'Not necessary', 'Confuse AI'], correct: 1, explanation: 'Iteration (follow-up prompts like "make this more specific" or "add examples") helps you fine-tune AI outputs to your exact needs and teaches you what prompt elements produce better results.' },
    { id: 4, question: 'Complex tasks should be:', options: ['Asked at once', 'Broken into smaller prompts', 'Avoided', 'Shortened'], correct: 1, explanation: 'Breaking complex tasks into focused sub-prompts (resume review → bullet writing → final polish) produces higher quality outputs than one massive overwhelming prompt.' },
    { id: 5, question: 'Examples in prompts help by:', options: ['Making longer', 'Showing desired format', 'Required', 'Confusing AI'], correct: 1, explanation: 'Examples demonstrate the exact format, style, and quality level you want. Few-shot prompting (2-3 examples) is one of the most powerful optimization techniques.' },
    // Context Management (6-10)
    { id: 6, question: 'AI context window is:', options: ['Visual interface', 'Memory/conversation limit', 'Time limit', 'Screen size'], correct: 1, explanation: 'Context window is the amount of conversation AI can actively remember (~3000-4000 words). Beyond that, AI starts forgetting earlier messages, requiring you to restate important context.' },
    { id: 7, question: 'Context anchors are:', options: ['Links', 'Repeated key information', 'Memory storage', 'History'], correct: 1, explanation: 'Context anchors are deliberate restatements of key information in prompts ("Context: I\'m B.Com Finance targeting banking roles. Now help me...") to keep AI focused on your specific situation.' },
    { id: 8, question: 'Start new conversation when:', options: ['Every 5 min', 'Changing to new topic', 'Never', 'After each question'], correct: 1, explanation: 'New conversations prevent context confusion. Use separate chats for banking prep vs consulting prep vs resume work to maintain clarity and quality.' },
    { id: 9, question: 'Summarize in long conversations to:', options: ['Waste time', 'Refresh AI memory', 'Not helpful', 'Confuse AI'], correct: 1, explanation: 'Periodic summaries ("We\'ve covered resume strategy. Now for interviews...") refresh AI\'s active memory and maintain conversation quality in long sessions.' },
    { id: 10, question: 'Custom instructions are:', options: ['One-time', 'Persistent context for all interactions', 'Errors', 'History'], correct: 1, explanation: 'Custom instructions (set in ChatGPT settings) provide baseline context for ALL your conversations, saving you from repeating "I\'m a B.Com student targeting finance roles" in every chat.' },
    // AI Communication (11-15)
    { id: 11, question: 'Think of AI as:', options: ['Search engine', 'Collaborative tool', 'Perfect', 'Learning replacement'], correct: 1, explanation: 'AI works best as a collaborative partner - you provide context, AI provides insights, you give feedback, AI refines. This dialogue produces far better results than one-shot queries.' },
    { id: 12, question: 'If AI response is not perfect:', options: ['Give up', 'Use follow-ups to refine', 'Start over', 'Accept as-is'], correct: 1, explanation: 'Follow-up prompts ("Make this more specific to consulting" or "Add metrics") allow iterative refinement. First responses are rarely perfect - dialogue improves them.' },
    { id: 13, question: 'Ask AI to ask questions to:', options: ['Waste time', 'Ensure it understands needs', 'Not helpful', 'Test AI'], correct: 1, explanation: 'Having AI ask clarifying questions first ("What do you need to know to help me effectively?") ensures it understands your requirements before generating, reducing iteration needed.' },
    { id: 14, question: 'AI strength is:', options: ['Real-time news', 'Summarizing complex info', '100% accuracy', 'Mind reading'], correct: 1, explanation: 'AI excels at summarizing, explaining concepts, structuring information, and brainstorming. It struggles with real-time data, absolute accuracy, and understanding unstated context.' },
    { id: 15, question: 'Specify about output:', options: ['Nothing', 'Format, length, audience, style', 'Only topic', 'Just length'], correct: 1, explanation: 'Specifying format (bullet points, STAR method), length (2 minutes, 300 words), audience (B.Com student, recruiter), and style (professional, conversational) produces precisely useful outputs.' },
    // Prompt Optimization (16-20)
    { id: 16, question: 'Few-shot prompting is:', options: ['Ask once', 'Provide 2-3 examples', 'Short prompts', 'Many questions'], correct: 1, explanation: 'Few-shot prompting means giving AI 2-3 examples of desired output format. AI pattern-matches to your examples, producing consistent quality results. Highly effective optimization technique.' },
    { id: 17, question: 'Chain-of-thought does:', options: ['Links prompts', 'Asks step-by-step thinking', 'Long chains', 'Confuses'], correct: 1, explanation: 'Adding "Let\'s think step-by-step:" makes AI break down complex reasoning systematically, improving accuracy and depth. Particularly useful for analysis, decisions, and problem-solving.' },
    { id: 18, question: 'Lower temperature for:', options: ['Creative writing', 'Factual consistent responses', 'Never', 'Always'], correct: 1, explanation: 'Temperature controls randomness. Lower = consistent, factual, reliable (good for resume bullets, analysis). Higher = creative, varied, exploratory (good for brainstorming, creative writing).' },
    { id: 19, question: 'Prompt library helps by:', options: ['Show off', 'Reuse effective prompts', 'Not useful', 'Confuse'], correct: 1, explanation: 'A prompt library stores your proven, optimized templates. Instead of recreating prompts for each company application, you reuse tested templates, saving 60% of time while maintaining quality.' },
    { id: 20, question: 'A/B testing means:', options: ['Test letters', 'Compare prompt versions', 'Alphabetical', 'Test twice'], correct: 1, explanation: 'A/B testing compares two prompt variations for same task to identify which structure consistently produces better results. Evidence-based approach to building your best prompt templates.' },
    // Bias Recognition (21-25)
    { id: 21, question: 'AI biases from:', options: ['AI creates', 'Training data', 'Users only', 'Do not exist'], correct: 1, explanation: 'AI biases reflect patterns in training data. If training data overrepresents traditional careers or US context, AI will too. Understanding this helps you compensate by asking for alternative perspectives.' },
    { id: 22, question: 'Temporal bias is:', options: ['Time zones', 'Training cutoff date', 'Speed', 'Response time'], correct: 1, explanation: 'Temporal bias means AI training data has a cutoff date (often 1-2 years old). AI might not know about recent companies, industry shifts, or current job market trends. Always verify with current data.' },
    { id: 23, question: 'Sensitive topics need:', options: ['Full trust', 'Critical cross-reference', 'Ignore', 'Share'], correct: 1, explanation: 'For important decisions (career choice, company selection), never rely on AI alone. Cross-reference with current placement data, industry reports, and experienced professionals. Triangulate to compensate for AI biases.' },
    { id: 24, question: 'Counter bias by asking:', options: ['Nothing', 'Multiple perspectives', 'Yes/no', 'Shorter'], correct: 1, explanation: 'Request multiple viewpoints ("Give advice from: conservative parent, startup founder, CA, entrepreneur, recent grad") reveals biases in each perspective and helps you see full picture instead of AI\'s default bias.' },
    { id: 25, question: 'View AI as:', options: ['Truth', 'Starting point needing verification', 'Wrong', 'Entertainment'], correct: 1, explanation: 'AI provides useful starting point for research and analysis, but requires verification with authoritative sources. Use AI to explore ideas, then confirm with current data and expert input before making decisions.' },
    // Ethical AI (26-30)
    { id: 26, question: 'Using AI academically:', options: ['Never mention', 'Cite appropriately', 'Claim as own', 'Secret'], correct: 1, explanation: 'Academic integrity requires citing AI assistance. Format: "Analysis framework developed with ChatGPT assistance (OpenAI, 2024)." This shows transparency and distinguishes your work from AI\'s contribution.' },
    { id: 27, question: 'NOT share with AI:', options: ['Questions', 'Confidential data', 'Topics', 'Public info'], correct: 1, explanation: 'NEVER share confidential client data, company proprietary information, others\' personal details, or passwords with AI. Privacy violations can have serious academic, legal, and career consequences.' },
    { id: 28, question: 'Ethical learning with AI:', options: ['AI does work', 'AI enhances understanding', 'Avoid AI', 'Only fun'], correct: 1, explanation: 'Ethical use: AI helps you understand concepts better and learn faster (you develop skills). Unethical: AI does the work for you (you don\'t develop skills, struggle in interviews/jobs later).' },
    { id: 29, question: 'Professional AI use needs:', options: ['Just start', 'Check policies first', 'Keep secret', 'Home only'], correct: 1, explanation: 'Companies have varying AI policies - some embrace it, some restrict it, some ban it. Always check company policy FIRST before using AI for work tasks to avoid policy violations.' },
    { id: 30, question: 'Ethical AI goal:', options: ['Speed', 'Balance assistance with growth', 'Impress', 'Blind rules'], correct: 1, explanation: 'Goal is using AI to amplify YOUR capabilities while still developing essential skills. AI should make you smarter (learn more in less time), not lazier (avoid learning). Long-term skill development matters more than short-term convenience.' }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! You are a prompt engineering master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong AI communication skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good progress! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review AI interaction techniques!', xpReward: 100 }
  }
};
