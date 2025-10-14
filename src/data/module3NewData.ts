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
          question: 'You\'re preparing for a finance internship interview at HDFC Bank. Which prompt will give you the MOST useful preparation help from ChatGPT?',
          options: [
            'Tell me about banking interviews',
            'Help me prepare for HDFC Bank interview',
            'I\'m a B.Com Finance student applying for a credit analysis internship at HDFC Bank. Give me 5 technical questions they might ask about financial statement analysis and how to answer them using real examples from Indian banking sector.',
            'What should I know about banks?'
          ],
          correct: 2,
          explanation: 'Option 3 provides specific context (B.Com Finance, HDFC Bank, credit analysis role), clear goal (5 technical questions with answers), and relevant constraints (Indian banking sector), enabling ChatGPT to give targeted, actionable help instead of generic advice.'
        },
        {
          id: 2,
          question: 'What does the "C" in CLEAR framework stand for, and why is it the most important element?',
          options: [
            'Clarity - making your request clear',
            'Context - providing background about YOU, your situation, and your specific needs',
            'Concise - keeping prompts short',
            'Creative - using creative language'
          ],
          correct: 1,
          explanation: 'Context is crucial because it tells AI who you are, what you need, and why. Without context (your background, target role, specific situation), AI can only give generic answers that work for everyone, which means they work for no one.'
        },
        {
          id: 3,
          question: 'Why should you iterate on prompts instead of accepting the first AI response?',
          options: [
            'To waste time and look busy',
            'Because iterating helps you refine responses and learn what specific details produce better results for YOUR needs',
            'It\'s not necessary if your first prompt is good',
            'To confuse the AI system'
          ],
          correct: 1,
          explanation: 'Iteration (using follow-ups like "make this more specific to retail" or "add metrics") helps you fine-tune responses to your exact needs and teaches you what works for future prompts. First responses are rarely perfect.'
        },
        {
          id: 4,
          question: 'You need to prepare a full campus placement strategy (resume, cover letter, interview prep, company research). What\'s the BEST approach?',
          options: [
            'Ask ChatGPT to "prepare me completely for placements" in one prompt',
            'Break it into focused prompts: one for resume review, one for cover letter, one for interview prep, one for company research',
            'Avoid using AI for such complex tasks',
            'Use the shortest possible prompts to save time'
          ],
          correct: 1,
          explanation: 'Breaking complex tasks into smaller, focused prompts helps AI give detailed, quality responses for each area. One massive prompt overwhelms the AI and produces superficial results across everything.'
        },
        {
          id: 5,
          question: 'You ask ChatGPT to help with your resume. It gives you bullet points, but they sound generic. What should you do NEXT?',
          options: [
            'Accept it and move on - AI knows best',
            'Give up and write it yourself',
            'Follow up with: "Make these bullet points more specific by adding metrics and outcomes. For example, instead of \'led a team\', say \'led a 5-person team to complete marketing analysis project 2 weeks ahead of deadline, resulting in 15% improvement in campaign targeting\'"',
            'Start over with a completely different prompt'
          ],
          correct: 2,
          explanation: 'Providing an example of what you want (with metrics, specific details, outcomes) teaches the AI your desired style and format. This iterative approach produces much better results than accepting generic output or starting over.'
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
            '1. Choose your challenge: Financial Accounting exam prep, Marketing case study analysis, or Economics concept mastery',
            '2. Write your FIRST attempt prompt (probably too generic - that\'s okay!)',
            '3. Apply CLEAR framework: Add Context (B.Com semester, your current understanding), Length (how much detail), Examples ("like the Porter model we studied"), Audience (for YOU), Role (AI as tutor)',
            '4. Test it: Compare AI response to your first attempt',
            '5. Iterate: "Explain this using retail industry examples", "Give me 5 practice problems with solutions", "Make it more exam-focused"',
            '6. Document what works: Save your best prompts in a doc titled "My Placement Prep Prompts"',
            '7. Build 5-10 reusable templates: Concept explanation, practice problems, case study prep, exam revision, doubt clearing',
            '8. Share with study group: Compare which prompts work best',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ "Explain marketing" - Too broad, no context',
            '   ❌ Copying AI answers without understanding - defeats learning purpose',
            '   ❌ Not mentioning your B.Com syllabus context - AI gives generic MBA-level or global examples',
            '   ❌ Asking AI to solve assignment questions directly - use it to UNDERSTAND, not to cheat',
            '   ❌ Not saving good prompts - you\'ll waste time recreating them later'
          ],
          successCriteria: [
            '✅ You have 10+ saved prompts for different academic needs (exam prep, concept clarity, practice problems)',
            '✅ Your prompts include YOUR context (B.Com, specific subject, current level)',
            '✅ You can teach the CLEAR framework to a classmate in 5 minutes',
            '✅ Your AI-assisted study is more efficient (30% less time for better understanding)',
            '✅ You know the line: AI for understanding concepts = good, AI for doing homework = bad',
            '✅ You cite AI when you use it, and add your own analysis'
          ]
        },
        professional: {
          title: 'Professional Prompt Design Challenge',
          description: 'Master prompts for job applications, interview prep, and career success',
          instructions: [
            '1. Choose your focus: Campus placement prep, internship applications, or professional skill building',
            '2. Create 3 core prompt templates:',
            '   a) Resume/Cover Letter: "I\'m a B.Com [major] student with skills in [list]. I\'m applying for [role] at [company]. Here\'s the job description [paste]. Help me identify how to position my [project/internship/coursework] to match their requirements."',
            '   b) Interview Prep: "I have an interview with [company] for [role] on [date]. I\'m strong in [skills] but weak in [areas]. Give me 5 likely questions they\'ll ask and help me craft STAR-method answers using my background: [brief summary]."',
            '   c) Company Research: "I\'m interviewing with [company] for [role]. What are their key business challenges in Indian market? What skills should I emphasize? What questions should I ask the interviewer to show genuine interest?"',
            '3. Test each template with a real application you\'re working on',
            '4. Refine based on results: Add more context, specify format, request examples',
            '5. Build your "Placement Season Toolkit": 10-15 ready-to-use prompts for every stage (research → application → interview → negotiation)',
            '6. Practice with mock scenarios before real placements',
            '7. Track your success: Which prompts led to interview calls? Which helped you perform better?',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Using AI-written content without personalization - recruiters can tell!',
            '   ❌ Not researching the company first - AI needs YOU to provide company context',
            '   ❌ Generic prompts like "write my cover letter" - include YOUR achievements, the specific role, the company culture',
            '   ❌ Memorizing AI responses word-for-word - understand the logic, then use your own words',
            '   ❌ Not customizing for each company - same prompt for TCS and Deloitte won\'t work'
          ],
          successCriteria: [
            '✅ You have a complete placement prep prompt toolkit (15+ prompts ready to use)',
            '✅ Your AI-enhanced applications are personalized and authentic (not copy-paste)',
            '✅ You\'ve successfully used prompts for at least 3 real applications',
            '✅ You can train your study group on effective job application prompts',
            '✅ Your interview prep using AI is company-specific and role-specific',
            '✅ You track metrics: 40%+ increase in interview callbacks after using structured prompts'
          ]
        },
        personal: {
          title: 'Personal Career Planning Challenge',
          description: 'Use AI for career guidance, skill development, and personal growth',
          instructions: [
            '1. Choose your personal challenge: Career path decision (CA vs MBA vs Job), skill gap analysis, or personal branding',
            '2. For Career Guidance prompt: "I\'m a final year B.Com [major] student with [academic %], interested in [fields]. Financially, I [can/cannot] afford 2 more years of study. I\'m good at [skills] and enjoy [activities]. I\'m considering: [Option A], [Option B], [Option C]. Help me evaluate based on: 5-year income potential, work-life balance, job market demand in India, alignment with my strengths. Be realistic about pros and cons of each."',
            '3. For Skill Development: "I want to work in [industry/role] but I\'m weak in [skill]. I have [time available]. Create a 30-day learning plan with free resources, daily practice tasks, and milestones to track progress. Make it realistic for a B.Com student balancing placements and exams."',
            '4. For Personal Branding: "I\'m a B.Com student with interests in [areas] and skills in [tools/subjects]. Help me build a LinkedIn profile strategy: what to post, how often, what skills to highlight, how to network with professionals in [target industry]. Give me 10 post ideas I can create from my coursework and projects."',
            '5. Test your prompts and track results over 2 weeks',
            '6. Refine based on what\'s actually helping you make progress',
            '7. Share effective prompts with friends facing similar decisions',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Asking "what career should I choose?" without providing YOUR specific context (financial situation, strengths, constraints)',
            '   ❌ Not being honest about limitations - AI needs realistic constraints to give useful advice',
            '   ❌ Following AI advice blindly - use it as input, not as the final decision maker',
            '   ❌ Not considering Indian market context - specify "in India" or "for Indian B.Com graduates"',
            '   ❌ Expecting AI to know the latest placement trends - combine AI insights with recent data from seniors/placement cell'
          ],
          successCriteria: [
            '✅ You\'ve used AI to clarify at least one major career decision with structured analysis',
            '✅ Your prompts include YOUR personal context (financial, academic, interests, constraints)',
            '✅ You\'ve created a personalized learning/development plan using AI guidance',
            '✅ You balance AI advice with real-world inputs (seniors, mentors, placement data)',
            '✅ You\'ve helped 3+ friends use better prompts for their career planning',
            '✅ You maintain agency - AI informs your decisions, doesn\'t make them for you'
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
          question: 'You\'re using one ChatGPT conversation to prep for banking AND consulting interviews. After 30 messages, ChatGPT starts mixing up advice. What\'s the problem?',
          options: [
            'ChatGPT is broken',
            'You\'ve exceeded the context window - AI can\'t remember earlier parts of the conversation',
            'You need to pay for premium',
            'AI doesn\'t work for interview prep'
          ],
          correct: 1,
          explanation: 'AI context windows are limited (~3000-4000 words). In long conversations about multiple topics, AI loses track of earlier context. Solution: Use separate focused chats for banking vs consulting prep.'
        },
        {
          id: 7,
          question: 'What should you set in ChatGPT custom instructions for placement season?',
          options: [
            'Nothing, just use it normally',
            'Your personal details: "Final year B.Com Finance student, India, targeting banking/consulting roles, campus placements"',
            'Just your name',
            'Random preferences'
          ],
          correct: 1,
          explanation: 'Custom instructions set persistent context for ALL your chats, so you don\'t have to re-explain that you\'re a B.Com student targeting specific roles in every conversation. Saves massive time.'
        },
        {
          id: 8,
          question: 'You\'re preparing for HDFC Bank, Deloitte, and Flipkart interviews. What\'s the BEST chat organization strategy?',
          options: [
            'One chat for everything to keep it all together',
            'Three separate chats: one for each company, keeping context focused and avoiding confusion',
            'Start a new chat every time you have a question',
            'Don\'t use AI for multiple companies'
          ],
          correct: 1,
          explanation: 'Separate focused chats prevent context confusion. Each chat maintains clear context for one company/role, producing better, more relevant advice. One mega-chat mixes contexts and produces generic outputs.'
        },
        {
          id: 9,
          question: 'In a long conversation, what should you do every 15-20 messages to maintain quality?',
          options: [
            'Nothing, let AI handle it',
            'Summarize progress and re-state key context: "So we\'ve covered resume strategy. Now for interview prep, remember I\'m targeting business analyst roles..."',
            'Start over completely',
            'Ask shorter questions'
          ],
          correct: 1,
          explanation: 'Periodic summaries "refresh" AI\'s memory by bringing key context back to recent messages. This maintains output quality in long conversations and prevents AI from drifting off-topic.'
        },
        {
          id: 10,
          question: 'You asked ChatGPT to create resume bullets 20 messages ago. Now you want interview answers based on those bullets. What\'s the BEST approach?',
          options: [
            'Just say "use those resume bullets"',
            'Explicitly reference: "Based on the resume bullets you created (led team project, increased efficiency 30%), help me craft STAR answers for behavioral questions"',
            'Hope AI remembers',
            'Start a new chat and re-do the resume bullets'
          ],
          correct: 1,
          explanation: 'Explicit references work better than assuming AI remembers. Actually restating the key info ("led team project, increased efficiency 30%") ensures AI has the context it needs, even if the original message is outside its active memory window.'
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
            '1. Set custom instructions for academics: "B.Com [semester] student. Studying [subjects]. Preparing for semester exams and placements. Need explanations with Indian business examples."',
            '2. Create focused chats for different subjects: "Financial Accounting Help", "Marketing Concepts", "Economics Doubts"',
            '3. Practice context anchors: "Context: I\'m studying Cost Accounting, Chapter 5 on Activity-Based Costing. I understand the basics but struggle with multi-product scenarios. Now explain..."',
            '4. Test long conversation: Use one chat for full subject revision, summarizing every 10 concepts',
            '5. Reference previous learnings: "You explained ABC costing earlier using a manufacturing example. Now apply that same logic to a service industry scenario."',
            '6. Document your best academic prompts: Concept explanation, practice problems, exam revision, doubt clearing',
            '7. Share strategies with study group and compare what works best',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ One chat for ALL subjects - context gets mixed, explanations become generic',
            '   ❌ Not mentioning your B.Com syllabus context - AI gives CA/MBA level examples instead of B.Com appropriate',
            '   ❌ Asking follow-ups without context: "Explain that more" vs "Explain ABC costing allocation for multi-product scenario more"',
            '   ❌ Never summarizing in long study sessions - AI drifts off-topic',
            '   ❌ Not saving good explanations outside of chat - you\'ll struggle to find them later during exam revision'
          ],
          successCriteria: [
            '✅ You have organized chats for each major subject (5+ focused conversations)',
            '✅ Your custom instructions are set and optimized for B.Com academics',
            '✅ You can maintain productive 30+ message conversations without AI losing context',
            '✅ You know when to summarize vs when to start fresh chat',
            '✅ You\'ve taught 3+ classmates to organize their AI conversations better',
            '✅ Your exam prep using AI is 50% more efficient than before'
          ]
        },
        professional: {
          title: 'Professional Context Management Challenge',
          description: 'Organize AI conversations for multiple job applications and interview prep',
          instructions: [
            '1. Set professional custom instructions: "Final year B.Com student. Target roles: Financial Analyst, Business Analyst, Marketing Analyst. Key skills: Excel, SQL, financial modeling. Currently in placement season preparing for campus interviews at banking, consulting, and FMCG companies."',
            '2. Create company-specific chats: One for each target company (HDFC, Deloitte, HUL, etc.)',
            '3. Within each chat, use context anchors: "For this Deloitte Business Analyst role, help me..."',
            '4. Organize by interview stage: Separate chats for "Resume Building", "Interview Prep", "Salary Discussion"',
            '5. Practice progressive context building: Start with company research → role analysis → resume customization → interview prep, all in one focused chat',
            '6. Reference earlier work explicitly: "Using the STAR answer structure you helped me build for leadership question, now create one for teamwork question"',
            '7. Export and organize outputs: Copy best answers/bullets into a "Placement Prep Master Doc" organized by company',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Mixing companies in one chat - "Help with HDFC, also Deloitte, also HUL" - AI gets confused about which advice is for which company',
            '   ❌ Not labeling chats - finding "that great answer from 3 days ago" becomes impossible',
            '   ❌ Assuming AI remembers job descriptions you pasted 50 messages ago - re-paste or reference explicitly',
            '   ❌ Using same generic prep for all companies - Deloitte needs different positioning than HDFC Bank',
            '   ❌ Not exporting important outputs - relying on chat history is risky, copy out your best work'
          ],
          successCriteria: [
            '✅ You have 5-10 organized chats for placement season (by company, by stage, by skill area)',
            '✅ Each chat maintains clear, focused context throughout',
            '✅ You can prep for 5+ companies in parallel without mixing up strategies',
            '✅ Your custom instructions are fine-tuned for your placement goals',
            '✅ You have a master doc with all best AI outputs organized by company/purpose',
            '✅ Your study group adopted your context management system'
          ]
        },
        personal: {
          title: 'Personal Career Planning Challenge',
          description: 'Manage long-term AI conversations for career development and life decisions',
          instructions: [
            '1. Create a dedicated chat: "Career Planning - B.Com to Career" for your long-term career journey',
            '2. Set context once at the start: "I\'m a B.Com [major] student considering: [CA/MBA/Job/Own Business]. My strengths: [list]. My constraints: [financial/time/family]. My goals: [career vision]. Keep this context for our ongoing career discussions."',
            '3. Build progressive context over time: Start with career exploration → skill gap analysis → learning plan → application strategy',
            '4. Use milestone summaries: "Last month we identified that Financial Planning suits my analytical skills. Now let\'s create a roadmap to get CFP certification while working..."',
            '5. Reference growth journey: "Based on the skill development plan we created in August, I\'ve now completed Excel + SQL courses. What should be my next focus for investment banking roles?"',
            '6. Keep a separate "Life Decisions" chat for big questions: Higher studies? Job? Entrepreneurship? City to work in? This chat becomes your thinking partner over months',
            '7. Track decision evolution: Revisit older messages to see how your thinking has evolved',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Asking life-changing career questions in random chats - create a dedicated "Career Strategy" chat',
            '   ❌ Not providing full honest context - AI can\'t help if you hide financial constraints or family expectations',
            '   ❌ Making decisions based on one AI response - use AI for analysis, not for the actual decision',
            '   ❌ Not revisiting and updating context - "I said 3 months ago I wanted consulting, but now I\'m interested in startups. Here\'s why: [context]. Let\'s re-evaluate..."',
            '   ❌ Treating AI as oracle - it\'s a thinking tool, not a fortune teller'
          ],
          successCriteria: [
            '✅ You have a long-term "Career Journey" chat tracking your evolving goals and plans',
            '✅ You\'ve used AI to clarify at least one major decision (CA vs Job, City choice, Industry focus)',
            '✅ You can maintain context over weeks/months of sporadic conversations',
            '✅ You balance AI insights with real-world feedback (mentors, seniors, family)',
            '✅ You\'ve helped friends organize their career planning conversations with AI',
            '✅ Your decisions are better informed because of structured AI conversations, but YOU make the final calls'
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
          question: 'Your B.Com project on "E-commerce Business Models" needs depth. What\'s the BEST communication approach with ChatGPT?',
          options: [
            '"Explain e-commerce business models" [take answer, done]',
            '"I\'m analyzing Flipkart vs Amazon business models for B.Com project. Before you help, what do you need to know about my analysis framework, data sources, and assignment requirements?" [let AI ask clarifying questions]',
            '"Give me everything about e-commerce" [hope for the best]',
            '"Write my project" [copy-paste]'
          ],
          correct: 1,
          explanation: 'Letting AI ask YOU questions first ensures it understands your specific needs (B.Com level, Indian companies, project requirements) before generating, resulting in customized help instead of generic content.'
        },
        {
          id: 12,
          question: 'ChatGPT gives you a draft cover letter for TCS. It\'s okay but sounds generic. What should you do NEXT?',
          options: [
            'Accept it - AI knows best',
            'Have a dialogue: "This is a good start, but it sounds too formal and generic. Can you make it more conversational and add specific examples from my campus projects? Also, TCS values innovation - emphasize my hackathon experience more."',
            'Throw it away and write yourself',
            'Copy-paste and hope for the best'
          ],
          correct: 1,
          explanation: 'Providing specific feedback (too formal, needs examples, emphasize hackathon) guides AI to refine the output to YOUR needs. This collaborative iteration produces much better results than accepting first drafts.'
        },
        {
          id: 13,
          question: 'Why is having a conversation with AI better than one-shot questions?',
          options: [
            'It wastes time with unnecessary back-and-forth',
            'Dialogue allows AI to understand your needs, you to provide feedback, and both to refine until output matches your requirements - like working with a study partner',
            'It makes you look smart',
            'One-shot is actually better'
          ],
          correct: 1,
          explanation: 'Conversational iteration (ask → respond → refine → perfect) produces customized, high-quality outputs because AI learns YOUR specific needs through dialogue, just like a real study partner would.'
        },
        {
          id: 14,
          question: 'You need help with Financial Statement Analysis assignment. What should you do BEFORE asking AI to explain concepts?',
          options: [
            'Just ask "explain financial ratios" directly',
            'Share your current understanding and specific confusion: "I understand current ratio and quick ratio, but I\'m confused about how to interpret them for service companies vs manufacturing. Can you explain with examples from TCS (services) vs Maruti (manufacturing)?"',
            'Ask for complete explanation of everything',
            'Copy from textbook first'
          ],
          correct: 1,
          explanation: 'Sharing what you ALREADY know (current ratio, quick ratio) and SPECIFIC confusion (service vs manufacturing interpretation) lets AI fill exact gaps in your understanding rather than explaining things you already know, making learning more efficient.'
        },
        {
          id: 15,
          question: 'For your campus placement preparation, what\'s the BEST way to use AI as a collaborative partner?',
          options: [
            'Ask AI to do everything for you',
            'Share your draft resume/answers, ask AI to critique them, identify gaps, suggest improvements, then YOU refine based on feedback - like having a mentor review your work',
            'Never use AI, do everything yourself',
            'Only use AI for spelling check'
          ],
          correct: 1,
          explanation: 'The mentor-review approach (you create → AI critiques → you refine) helps you learn and improve while maintaining authenticity. It\'s collaborative, not outsourcing. You develop skills while getting better outputs.'
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
            '1. Choose an upcoming assignment or exam preparation task',
            '2. Start with AI asking YOU: "I need help with [assignment]. Before you assist, what do you need to know about my requirements, current understanding, and professor\'s expectations?"',
            '3. Have a real dialogue - at least 5 back-and-forth exchanges: AI suggests → You provide feedback → AI refines → You ask questions → AI clarifies',
            '4. Try the "review my work" approach: Share your draft analysis, ask AI to critique, point out gaps, suggest improvements',
            '5. Practice specific feedback: Instead of "make it better", say "This explanation is too complex for B.Com level - simplify" or "Add real Indian company examples"',
            '6. Test AI\'s limitations: Ask it for your college\'s specific project guidelines (it can\'t!), recent stock market data (might be outdated), your professor\'s preferences (it doesn\'t know!)',
            '7. Document what works: Keep prompts that led to best collaborative sessions',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Treating AI like Google: Ask → Get answer → Leave (misses 80% of AI\'s value)',
            '   ❌ Not providing feedback when response is off: Just accepting mediocre outputs instead of guiding AI to better',
            '   ❌ Asking AI to DO your assignment vs HELP you understand it - one is cheating, other is learning',
            '   ❌ Not verifying AI outputs: ChatGPT can make up statistics or get Indian context wrong',
            '   ❌ One-way communication: You talk AT AI instead of WITH AI'
          ],
          successCriteria: [
            '✅ You have 3+ examples of multi-turn conversations that produced excellent academic outputs',
            '✅ You can distinguish when AI helps learning vs when it does the work for you',
            '✅ You regularly use "review my draft" approach instead of "do it for me"',
            '✅ You know AI\'s limits: Can\'t access college systems, may have outdated data, needs YOUR verification',
            '✅ Your classmates ask YOU for tips on effective AI communication',
            '✅ Your project quality improved 20%+ while your understanding also increased (not just grades!)'
          ]
        },
        professional: {
          title: 'Professional AI Communication Challenge',
          description: 'Use collaborative AI communication for interview success and workplace preparation',
          instructions: [
            '1. Select a real interview you\'re preparing for (or create a realistic scenario)',
            '2. Use collaborative approach: "I\'m prepping for [company] [role] interview. I\'ll share my background and the job description. Then ask me questions to understand how best to help me prepare."',
            '3. Practice iterative refinement for interview answers: Share your STAR answer draft → AI critiques → You refine → AI suggests improvements → You perfect it',
            '4. Have AI roleplay: "Act as a tough interviewer from [company]. Ask me difficult questions. After each answer, tell me what worked and what to improve. Be harsh - I want real feedback."',
            '5. Use AI to identify gaps: "Here\'s my background [resume]. Here\'s the job description [paste]. What are the gaps? How should I address them in interview without lying?"',
            '6. Build dialogue around salary negotiation: "I\'m a fresher B.Com grad. Offer is 4.5 LPA but market rate is 5.5 LPA. How do I negotiate? Let\'s roleplay the conversation."',
            '7. Document conversation patterns that work: Save prompts that led to breakthrough insights',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Asking "prepare me for interview" without engaging in actual dialogue about YOUR specific situation',
            '   ❌ Not using AI for mock interviews - missing huge opportunity to practice with immediate feedback',
            '   ❌ Accepting AI-generated answers without personalizing with YOUR experiences and YOUR voice',
            '   ❌ Not asking AI to challenge you: "Point out weaknesses in my answer" or "What would make this answer better?"',
            '   ❌ One-way communication: You dump info, AI responds, conversation ends - this is inefficient'
          ],
          successCriteria: [
            '✅ You\'ve had at least 3 roleplay interview sessions with AI (acting as interviewer) with real-time feedback',
            '✅ You can iterate on interview answers through dialogue until they\'re excellent (not just "okay")',
            '✅ You use AI to identify and address gaps between your profile and job requirements',
            '✅ Your interview answers are authentic (YOUR experiences) but structured well (AI helped organize)',
            '✅ You\'ve practiced salary negotiation dialogue with AI (at least 2-3 scenarios)',
            '✅ Your placement preparation is 50% faster because you communicate efficiently with AI'
          ]
        },
        personal: {
          title: 'Personal Development Communication Challenge',
          description: 'Use AI as thinking partner for career decisions and personal growth',
          instructions: [
            '1. Choose a real personal decision: CA vs MBA vs Job, Which city to work in, Which industry suits you, Whether to pursue higher studies',
            '2. Start a "thinking partner" conversation: "I\'m trying to decide between [options]. I\'ll share my situation, priorities, and concerns. Then ask me questions to help me think through this clearly."',
            '3. Let AI probe your thinking: It should ask about your finances, strengths, long-term goals, risk tolerance, family situation',
            '4. Have honest dialogue: "I said I want work-life balance, but I\'m also attracted to high-paying consulting. Help me think through this contradiction."',
            '5. Use AI to challenge assumptions: "I think I should do MBA because everyone else is. Challenge this assumption - what am I not considering?"',
            '6. Iterate through scenarios: "If I choose CA, what\'s my 5-year path? What if I choose job instead? Compare realistically."',
            '7. Keep decision journal: Document your evolving thinking in the AI conversation',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Asking "What career should I choose?" without providing YOUR context (personality, constraints, priorities)',
            '   ❌ Taking AI\'s first suggestion as THE answer - AI should help you think, not decide for you',
            '   ❌ Not being honest: Hiding financial constraints or family pressure leads to unrealistic advice',
            '   ❌ Expecting AI to know Indian job market nuances - combine AI insights with real data from placement cells/seniors',
            '   ❌ Having surface-level conversation - go deep, explore contradictions, challenge assumptions'
          ],
          successCriteria: [
            '✅ You\'ve used AI dialogue to clarify at least one major life/career decision',
            '✅ Your thinking is clearer because AI asked questions you hadn\'t considered',
            '✅ You challenged AI\'s suggestions and had it defend/refine its reasoning',
            '✅ You combined AI insights with real-world data (placement stats, senior experiences, mentor advice)',
            '✅ You documented decision-making process in AI conversation for future reference',
            '✅ You maintain agency - AI helps you think better, but YOU make decisions'
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
          question: 'You need resume bullets for 5 different internships/projects. What\'s the MOST efficient approach using few-shot prompting?',
          options: [
            'Ask "write my resume" 5 different times',
            'Give ChatGPT 3 examples of excellent bullets, then say: "Using this EXACT pattern (action verb + scale + method + impact), write 5 bullets for my experiences: [list experiences]"',
            'Write them yourself without AI',
            'Copy bullets from online'
          ],
          correct: 1,
          explanation: 'Few-shot prompting (showing 3 examples) teaches AI your desired pattern. Then it can generate 5, 10, or 20 bullets matching that exact quality and format. You optimize once (create good examples), benefit multiple times (all your bullets match that standard).'
        },
        {
          id: 17,
          question: 'You\'re deciding between 3 career options (CA, MBA, Job). Which prompt optimization technique produces the BEST analysis?',
          options: [
            '"Tell me which is best"',
            'Chain-of-thought: "Let\'s analyze this step-by-step: 1) My financial situation, 2) Time commitment of each option, 3) Career growth potential, 4) Alignment with my strengths, 5) Risk factors. Walk through each step systematically."',
            '"Give me pros and cons"',
            '"What should I do?"'
          ],
          correct: 1,
          explanation: 'Chain-of-thought prompting ("step-by-step" analysis) makes AI break down complex decisions systematically, considering each factor thoroughly. This produces deeper, more useful analysis than quick generic advice.'
        },
        {
          id: 18,
          question: 'You\'re building a prompt library for placement season. What should be your FIRST 3 templates?',
          options: [
            'Random prompts you liked',
            'The 3 most common tasks: Resume bullets, Cover letter opener, Interview STAR answers - create one perfect optimized prompt for each',
            'Only interview questions',
            'Copy others\' templates'
          ],
          correct: 1,
          explanation: 'Focus on highest-frequency tasks first (resume, cover letter, interviews) because these give maximum ROI. One optimized template for each gets reused 20+ times during placements, saving massive time while maintaining quality.'
        },
        {
          id: 19,
          question: 'Two prompts for company research. Which will you make your optimized template? Prompt A: "Tell me about [company]" - Prompt B: "Research [company]: recent news, culture, values, key challenges. Format as: 1) Business overview, 2) Why they\'re hiring, 3) What they value in candidates, 4) Recent initiatives, 5) Questions I should ask them. Sources needed."',
          options: [
            'Prompt A - simpler is better',
            'Prompt B - specific structure, clear format, multiple angles, actionable outputs',
            'Neither, research manually',
            'Mix both randomly'
          ],
          correct: 1,
          explanation: 'Prompt B is optimized because it specifies exactly what you need (5 specific aspects), in what format (numbered list), and requests sources. This becomes your reusable template - just change company name. Works perfectly every time vs Prompt A requiring 5-6 iterations.'
        },
        {
          id: 20,
          question: 'You\'ve created 2 different prompt templates for interview answers. How do you determine which to keep in your library?',
          options: [
            'Keep both, why choose?',
            'A/B test: Use each template 3 times, compare quality of outputs, keep the one that consistently produces better answers with less iteration needed',
            'Use whichever is shorter',
            'Pick randomly'
          ],
          correct: 1,
          explanation: 'A/B testing (systematic comparison) identifies which prompt structure works BEST for your needs. Test each template multiple times, track results (quality, iteration needed, time taken), keep the winner. This evidence-based approach builds a library of prompts you KNOW work.'
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
            '1. Identify your 5 most common academic AI tasks: Concept explanation, Practice problems, Exam revision notes, Doubt clearing, Assignment structuring',
            '2. For EACH task, create an optimized template using techniques learned:',
            '   Example - Concept Explanation Template:',
            '   "I\'m a B.Com [semester] studying [subject]. I understand [what you know] but confused about [specific gap]. Explain [concept] step-by-step using: 1) Simple definition, 2) Why it matters in [subject], 3) Real example from Indian business (like [industry]), 4) Common mistakes students make, 5) How it appears in exams. Keep it B.Com-appropriate, not CA/MBA level."',
            '3. Test each template 3 times with different topics - does it produce consistent quality?',
            '4. A/B test variations: Try different structures, compare results, keep the winner',
            '5. Build your "B.Com Survival Prompt Library" with 10-15 templates',
            '6. Organize by subject: Financial Accounting prompts, Marketing prompts, Economics prompts, etc.',
            '7. Share with study group, compare whose templates work best, adopt the winners',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Creating templates that are too generic - "Explain [concept]" isn\'t a template, it\'s just a placeholder',
            '   ❌ Not including YOUR context (B.Com level, Indian examples) in templates - they produce generic outputs',
            '   ❌ Building templates for rare tasks instead of frequent ones - optimize the 20% you use 80% of the time',
            '   ❌ Not testing templates before saving - one good result doesn\'t mean it\'s reliable',
            '   ❌ Keeping templates static - update them as you learn what works better'
          ],
          successCriteria: [
            '✅ You have 10-15 tested, proven prompt templates for academic tasks',
            '✅ Your templates produce good results on FIRST try (90%+ success rate, minimal iteration needed)',
            '✅ You\'ve cut AI interaction time by 60%+ while maintaining or improving quality',
            '✅ Your prompt library is organized, documented, easy to use (you can find right template in 10 seconds)',
            '✅ 3+ classmates are using your templates successfully',
            '✅ Your exam/assignment prep is 2x faster than before optimization'
          ]
        },
        professional: {
          title: 'Professional Prompt Optimization Challenge',
          description: 'Build battle-tested templates for 20+ company applications',
          instructions: [
            '1. Map placement season tasks: Resume customization, Cover letters, Company research, Interview prep, Salary discussion, Thank-you emails, LinkedIn outreach',
            '2. Create MASTER TEMPLATE for each (use techniques: few-shot + chain-of-thought + specific format):',
            '   Example - Cover Letter Template:',
            '   "[FEW-SHOT] Here are 3 excellent cover letter openings: [examples]. [CONTEXT] I\'m B.Com [major] applying to [COMPANY] for [ROLE]. [MY EDGE] My standout achievement: [specific metric]. [COMPANY RESEARCH] I know [company] values [specific value from research]. [REQUEST] Write opening paragraph following the pattern of examples above, connecting my achievement to their values, sounding authentic not corporate. 4-5 sentences max."',
            '3. Test template on 3 different companies - does it produce consistently great outputs with just company-name swaps?',
            '4. A/B test different template versions: Which structure gets you best results fastest?',
            '5. Build "Placement Arsenal": 12-15 optimized templates covering all placement activities',
            '6. Create usage guide: When to use which template, how to customize variables',
            '7. Track ROI: Time saved per application, interview callback rate improvement',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Templates too rigid - "just change company name" doesn\'t work when Deloitte vs Startup need different approaches',
            '   ❌ Not documenting customization points - template says [COMPANY] but you forget what else to customize',
            '   ❌ Optimizing for perfection instead of "good enough" - perfect template takes 5 hours, good template takes 30 mins and works 85% as well',
            '   ❌ Not version controlling - Template v1 vs v2 vs v3, track which works best',
            '   ❌ Keeping templates secret - share with study group, get feedback, improve together'
          ],
          successCriteria: [
            '✅ You have 12-15 battle-tested templates for complete placement cycle',
            '✅ Each template produces good results on first try for 8 out of 10 uses (80%+ success rate)',
            '✅ You can complete one full company application (research + resume + cover letter + prep) in under 45 minutes',
            '✅ Your templates are documented with clear customization instructions',
            '✅ Your study group adopted your top 5 templates',
            '✅ You\'ve applied to 15+ companies using your optimized system (vs average 5-8 without optimization)'
          ]
        },
        personal: {
          title: 'Personal Development Optimization Challenge',
          description: 'Create optimized prompts for life decisions and skill building',
          instructions: [
            '1. Identify recurring personal decisions/goals: Career path clarity, Skill development, Work-life balance, Financial planning, Relationship navigation',
            '2. Create optimized "thinking partner" template:',
            '   "I\'m deciding [decision/goal]. My situation: [context]. My priorities: [ranked]. My constraints: [honest limitations]. Let\'s think through this step-by-step: 1) What are my real options? 2) What does each require (time/money/effort)? 3) Which aligns with my priorities? 4) What am I afraid of in each option? 5) What would I regret NOT doing? Be honest and challenge my assumptions."',
            '3. Test this template with 3 different decisions - does it consistently help clarity?',
            '4. Create skill-learning template: "I want to learn [skill] for [goal]. I have [time available]. I learn best through [your style]. Create 30-day plan: daily tasks, milestones, free resources, practice exercises, progress tracking. Make it realistic for someone juggling [your other commitments]."',
            '5. Build "Life OS" prompt library: Career decisions, Skill development, Goal setting, Problem solving, Relationship advice',
            '6. Version and improve: When template produces breakthrough insight, note what made it work',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Using same prompt structure for different decision types - career path vs relationship issue need different approaches',
            '   ❌ Not being honest in templates - garbage context in = garbage advice out',
            '   ❌ Optimizing for what sounds good vs what actually helps you make better decisions',
            '   ❌ Not combining AI insights with real-world feedback - AI should complement mentors/family/friends, not replace',
            '   ❌ Creating templates but never using them - optimization is pointless if you don\'t apply it'
          ],
          successCriteria: [
            '✅ You have 8-10 personal development templates for recurring decisions/goals',
            '✅ You\'ve used templates to gain clarity on at least 2 major life decisions',
            '✅ Your templates consistently produce useful insights (not just generic advice)',
            '✅ You can explain to friends how to create their own optimized templates',
            '✅ You combine AI template outputs with real human advice (mentors, family, experienced professionals)',
            '✅ Your decision quality improved - you consider more factors, think more systematically, have fewer regrets'
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
          question: 'ChatGPT suggests you should pursue CA or MBA after B.Com, barely mentioning other options. What type of bias is this MOST likely?',
          options: [
            'No bias - CA and MBA are objectively best',
            'Training data bias - traditional paths have more content online than emerging careers, so AI overemphasizes them',
            'Cultural bias only',
            'AI is trying to trick you'
          ],
          correct: 1,
          explanation: 'AI training includes more content about traditional, established career paths (CA, MBA, banking) than emerging fields (fintech, analytics, startups), leading to overrepresentation of traditional advice. This doesn\'t mean traditional is bad, just that AI might be missing newer options that could suit you better.'
        },
        {
          id: 22,
          question: 'You ask AI about "top companies for B.Com placements." It lists TCS, Infosys, Wipro, Deloitte. Your college placement data shows 15 startups also hired well. What\'s happening?',
          options: [
            'AI is completely wrong',
            'Prestige bias - AI overvalues brand-name companies because more content exists about them, may undervalue lesser-known but great companies',
            'Startups are bad, AI is protecting you',
            'Your placement data is wrong'
          ],
          correct: 1,
          explanation: 'AI tends to emphasize well-known companies (more online content, more historical data) and may miss excellent but less-famous options like fast-growing startups. Always cross-reference AI suggestions with YOUR college\'s actual placement data.'
        },
        {
          id: 23,
          question: 'How should you handle AI advice on important career decisions?',
          options: [
            'Trust AI completely - it knows better than humans',
            'Use triangulation: AI insights + Recent placement data + Advice from people in that career = Informed decision',
            'Ignore AI completely',
            'Just ask your parents'
          ],
          correct: 1,
          explanation: 'Triangulation (combining AI analysis with current data and human experience) compensates for AI\'s biases. AI gives you frameworks and considerations, data shows current reality, humans provide context and wisdom. All three together = best decisions.'
        },
        {
          id: 24,
          question: 'Best way to counter AI bias when researching career options?',
          options: [
            'Don\'t ask about careers at all',
            'Ask: "Give me advice from 5 different perspectives: conservative parent, startup founder, corporate HR, entrepreneur, recent grad who chose unconventional path. Include where each perspective might be biased."',
            'Accept first response',
            'Only ask yes/no questions'
          ],
          correct: 1,
          explanation: 'Requesting multiple perspectives forces AI to present diverse viewpoints, revealing biases in each. This helps you see the full spectrum of options and make decisions based on YOUR priorities, not AI\'s training data skews.'
        },
        {
          id: 25,
          question: 'AI suggests "Marketing roles pay less than Finance roles for B.Com grads." How should you verify this before making career choice?',
          options: [
            'Believe it - AI has all the data',
            'Cross-reference: Check recent salary reports (AmbitionBox, Glassdoor India), your college placement data, talk to recent grads in both fields, consider total compensation not just base salary',
            'Ignore completely',
            'Ask AI again hoping for different answer'
          ],
          correct: 1,
          explanation: 'Salary claims need verification with current, India-specific data. AI might be using outdated or US-centric information. Check multiple current sources (salary websites, placement reports, actual professionals) before making major decisions based on compensation assumptions.'
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
            '1. Choose a research topic for upcoming assignment (business ethics, market analysis, economic policy)',
            '2. Ask ChatGPT for information/analysis on the topic',
            '3. Apply bias detection: "What perspectives might be missing in this analysis? What cultural or temporal biases might exist?"',
            '4. Request counterarguments: "Give me views that CONTRADICT this analysis from different stakeholders"',
            '5. Cross-reference with: Academic journals (Google Scholar), Recent news (last 6 months), Your textbook, Professor\'s lecture notes',
            '6. Identify discrepancies: Where does AI differ from your textbook or recent research? Why?',
            '7. Build bias-checking habit: Never cite AI without verifying with at least 2 authoritative sources',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Using AI-generated content as-is for assignments without checking for bias/accuracy',
            '   ❌ Not considering recency: AI might give pre-COVID analysis for post-COVID business environment',
            '   ❌ Accepting AI\'s first perspective without asking for alternatives',
            '   ❌ Not specifying Indian context - getting global examples when you need local relevance',
            '   ❌ Treating bias detection as one-time check instead of habit in every AI interaction'
          ],
          successCriteria: [
            '✅ You can identify at least 3 types of bias in any AI response (training data, temporal, cultural)',
            '✅ You automatically ask "What\'s missing?" and "What are alternative views?" for important AI advice',
            '✅ You cross-reference AI content with 2+ authoritative sources before using in assignments',
            '✅ You can explain to classmates how to spot bias in AI research assistance',
            '✅ Your assignments show critical thinking - not just AI regurgitation',
            '✅ You\'ve caught at least one instance where AI gave biased/outdated advice and you corrected it'
          ]
        },
        professional: {
          title: 'Professional Bias Recognition Challenge',
          description: 'Spot biases in AI career advice and company research',
          instructions: [
            '1. Ask ChatGPT for career advice: "Best career paths for B.Com Finance graduate in India"',
            '2. Analyze response for biases: Traditional vs emerging roles, Brand-name vs startup bias, Metro vs tier-2 city opportunities',
            '3. Request multiple perspectives: "Give advice from: 1) Big 4 partner, 2) Fintech startup founder, 3) CA who loves their path, 4) Entrepreneur who skipped corporate, 5) B.Com grad working remotely. Where is each biased?"',
            '4. Cross-reference with reality: Your college placement data (what companies ACTUALLY hire), LinkedIn salary insights (current market rates), Seniors\' experiences (real career progression)',
            '5. Test company research bias: Ask about [Company]. Does AI overemphasize positives? Check Glassdoor for employee experiences. Compare.',
            '6. Build your bias-detection checklist: Is this India-specific? Is data current? Are emerging options included? Is this tier-2 city relevant? Does this account for MY situation?',
            '7. Create "Reality-Checked Career Guide": AI insights + verified data + human experiences = truth',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Making career decisions based solely on AI advice without checking current placement trends',
            '   ❌ Not recognizing AI\'s US-bias in salary discussions (US $80K ≠ India 8 LPA in purchasing power)',
            '   ❌ Accepting company descriptions from AI without checking employee reviews on Glassdoor/AmbitionBox',
            '   ❌ Not questioning why AI recommends certain paths over others',
            '   ❌ Ignoring bias in interview prep - AI might give cookie-cutter answers, you need authentic YOU'
          ],
          successCriteria: [
            '✅ You\'ve identified biases in career advice from AI and corrected them with real data',
            '✅ You use triangulation for all major decisions: AI + Data + Human advice',
            '✅ You can spot when AI is being US-centric vs India-relevant',
            '✅ You verify company information beyond what AI provides',
            '✅ Your placement decisions are informed by reality, not AI\'s potential biases',
            '✅ You\'ve helped friends recognize bias in their AI career research'
          ]
        },
        personal: {
          title: 'Personal Bias Recognition Challenge',
          description: 'Develop critical awareness of AI biases in life decisions',
          instructions: [
            '1. Choose a real decision: Which city to work in, Whether to pursue higher studies, Which industry suits your personality',
            '2. Get AI\'s initial advice on the decision',
            '3. Probe for bias: "What assumptions are you making about me? What if my priorities are different? What options are you not considering?"',
            '4. Request contradicting perspectives: "Now give me advice assuming I value work-life balance over salary" vs "assuming I value rapid growth over stability"',
            '5. Check your own confirmation bias: Are you asking AI questions that confirm what you already want to do?',
            '6. Triangulate decision: AI analysis + Family input + Mentor guidance + Your gut feeling + Current market data',
            '7. Document decision process: What did AI suggest? What biases did you find? How did you compensate? What did you ultimately decide and why?',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Using AI to validate decisions you\'ve already made (confirmation bias)',
            '   ❌ Not considering that AI doesn\'t understand YOUR specific family situation, financial constraints, personal values',
            '   ❌ Treating AI career advice as universal when it might be biased toward certain personality types or situations',
            '   ❌ Not questioning why AI recommends X over Y - always ask "why this suggestion?"',
            '   ❌ Making irreversible decisions (like dropping out, quitting job) based primarily on AI advice'
          ],
          successCriteria: [
            '✅ You\'ve identified at least one major bias in AI\'s advice about your life/career',
            '✅ You use "multiple perspectives" prompt for all important decisions',
            '✅ You combine AI analysis with human wisdom from people who know you',
            '✅ You can articulate where AI helped AND where its advice was biased/limited',
            '✅ You maintain critical thinking - AI informs but doesn\'t dictate your decisions',
            '✅ You\'ve helped friends recognize when they\'re blindly following biased AI advice'
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
          question: 'Your Financial Management assignment: "Analyze TCS financial statements." Which AI use is ETHICAL?',
          options: [
            '"Analyze TCS financials for me" [copy AI\'s analysis, submit as yours]',
            '"I\'ve analyzed TCS financials [paste YOUR work]. Critique my analysis. What did I miss? Are my ratio interpretations correct?" [improve based on AI feedback, cite AI assistance]',
            'Use AI but don\'t tell anyone',
            'Don\'t use AI at all even if allowed'
          ],
          correct: 1,
          explanation: 'Ethical use: YOU do the work first, AI helps you improve it. You learn through the process and AI feedback. Cite AI assistance. This develops your skills while leveraging AI\'s capabilities. Unethical: AI does the work, you just submit it.'
        },
        {
          id: 27,
          question: 'You\'re interning at HDFC Bank. You want to use ChatGPT to improve your client email. The email contains client\'s loan details (amount, credit score, personal info). What should you do?',
          options: [
            'Paste everything - ChatGPT needs context to help',
            'REMOVE all client-specific data, use generic placeholders: "Help me write professional email about loan approval. Template should include: greeting, approval notification, next steps, timeline, closing. Don\'t need real client details."',
            'Use AI at home so company won\'t know',
            'Only paste client name, not other details'
          ],
          correct: 1,
          explanation: 'NEVER share confidential client/company data with AI tools. Use generic templates instead. Sharing client information violates privacy, could be a security breach, and can get you fired. Even if AI would help more with full context, protecting confidential information is non-negotiable.'
        },
        {
          id: 28,
          question: 'How should you cite AI assistance in academic work?',
          options: [
            'Don\'t mention it - it might hurt your grade',
            'Clearly state: "Concept clarification and framework assisted by ChatGPT (OpenAI, 2024). Analysis and conclusions are my own."',
            'Just write "used AI" at the bottom',
            'Mention it verbally to professor but not in assignment'
          ],
          correct: 1,
          explanation: 'Proper citation gives credit to AI assistance while making clear that YOU did the thinking and analysis. It shows academic integrity and transparency. Format: Tool name, Company, Year, plus clarification of what you did vs what AI did.'
        },
        {
          id: 29,
          question: 'The "Understanding Test" for ethical AI use: After AI helps you with a concept/assignment, what should you do?',
          options: [
            'Submit immediately - AI is always right',
            'Close ChatGPT. Explain the concept out loud to yourself or a friend without looking at notes. If you can\'t explain it clearly, you didn\'t learn it - go back and actually understand it before submitting.',
            'Just memorize what AI wrote',
            'Add more AI content to make it longer'
          ],
          correct: 1,
          explanation: 'The "explain it to a friend" test ensures YOU actually understand the content, not just copied AI output. If you can\'t explain it in your own words, you haven\'t learned it - and you\'ll struggle in exams/interviews where AI can\'t help you. Redo the learning process.'
        },
        {
          id: 30,
          question: 'Long-term perspective: What\'s the REAL risk of unethical AI use (beyond getting caught)?',
          options: [
            'No real risk if you don\'t get caught',
            'Skill erosion: You never develop critical thinking, analysis, and communication skills. When jobs/interviews require these skills without AI assistance, you struggle because you never built the foundation.',
            'It\'s actually fine to always use AI',
            'Only risk is bad grades'
          ],
          correct: 1,
          explanation: 'The biggest risk isn\'t getting caught - it\'s never developing essential skills. In interviews, you can\'t use ChatGPT. In jobs, you need to think independently. If you over-relied on AI during B.Com, you\'ll lack the analytical and communication skills that make you valuable. Use AI to learn BETTER, not to avoid learning.'
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
            '1. Review ALL your current semester professors\' AI policies - create a policy matrix (Professor, Subject, AI Policy)',
            '2. Create your personal code: "I use AI to UNDERSTAND concepts better, never to AVOID understanding them"',
            '3. Practice the line: Take upcoming assignment, use AI ethically:',
            '   - First: Try assignment yourself',
            '   - Then: Use AI to check understanding, get feedback',
            '   - Finally: Revise based on AI input + your own thinking',
            '   - Cite: Clearly state AI\'s role',
            '4. Test yourself: Close AI, explain concepts to friend - if you can\'t, you used AI wrong',
            '5. Build ethical habits: AI for doubt clearing ✅, AI for concept explanation ✅, AI for assignment practice ✅, AI for doing homework ❌',
            '6. Document ethical dilemmas: When you\'re unsure if AI use is appropriate, write it down, discuss with professor/friends, build judgment',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Assuming "cite AI" makes any use ethical - citation doesn\'t excuse outsourcing all thinking to AI',
            '   ❌ "Everyone else is cheating with AI so I should too" - integrity is individual choice',
            '   ❌ Not developing skills because AI can do them - you\'ll regret this in placements/jobs',
            '   ❌ Using AI for assignments but never for genuine learning - backwards priorities!',
            '   ❌ Hiding AI use when policy allows it - transparency is ethical strength'
          ],
          successCriteria: [
            '✅ You have clear written personal AI ethics code',
            '✅ You know every professor\'s policy and follow them',
            '✅ You can pass the "explain without AI" test for all AI-assisted work',
            '✅ You\'ve successfully completed 5+ assignments using AI ethically (cited, understood, learned)',
            '✅ Your grades stayed high AND your understanding deepened (AI enhanced learning, not replaced it)',
            '✅ You\'ve guided 3+ classmates toward ethical AI use'
          ]
        },
        professional: {
          title: 'Workplace AI Ethics Challenge',
          description: 'Practice ethical AI use in internships and job preparation',
          instructions: [
            '1. Before first day of internship: Find company\'s AI policy (HR handbook, ask manager, check employee portal)',
            '2. Create professional AI boundaries: What you CAN use AI for (learning new tools, professional writing improvement, skill development) vs what you CAN\'T (sharing client data, confidential strategies, proprietary information)',
            '3. Practice privacy protection: Take real work scenario, identify what\'s confidential (redact it), what\'s public (safe to use)',
            '4. Build transparent habits: If company allows AI, be open about using it. If unsure, ask before using.',
            '5. Test workplace scenario: You need to analyze competitor data. Use AI for framework and approach (ethical), but don\'t share YOUR company\'s confidential competitive intelligence (unethical)',
            '6. Career prep ethics: Using AI for interview prep ✅, Using AI to fake skills you don\'t have ❌',
            '7. Develop judgment: When faced with AI use decision, ask: Legal? Allowed by policy? Protects privacy? Maintains my integrity? Develops my skills?',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ "I\'ll use AI secretly at work and no one will know" - risky and unethical if against policy',
            '   ❌ Pasting client presentations, financial data, strategy docs into ChatGPT - privacy violation',
            '   ❌ Using AI to fake expertise in interviews: "I\'m expert in Python" [you\'re not, AI just wrote code for you]',
            '   ❌ Not asking about AI policy because you\'re afraid they\'ll say no - better to know than violate unknowingly',
            '   ❌ Viewing AI ethics as "rules to follow" vs "principles for professional success"'
          ],
          successCriteria: [
            '✅ You know and follow AI policy at your internship/workplace',
            '✅ You\'ve never shared confidential information with AI (100% clean record)',
            '✅ You can explain to colleagues appropriate vs inappropriate AI use',
            '✅ In interviews, you honestly represent your skills (AI-assisted learning is fine, AI-faked skills are not)',
            '✅ Your manager trusts your judgment about when to use AI',
            '✅ You\'ve contributed to your team\'s AI ethics guidelines'
          ]
        },
        personal: {
          title: 'Personal AI Ethics Challenge',
          description: 'Build sustainable, ethical relationship with AI for lifelong success',
          instructions: [
            '1. Define your personal AI philosophy: Write down in 3-4 sentences how you want to use AI throughout your career',
            '   Example: "I use AI to amplify my capabilities, not to fake them. I use AI to learn faster, not to avoid learning. I give credit where due. I protect others\' privacy. I develop real skills even when AI could shortcut them."',
            '2. Test your ethics in gray areas: "AI to help structure my thoughts for important decision" (ethical?) vs "AI to write my personal statement for MBA application" (ethical?)',
            '3. Practice the long-term thinking: Every AI interaction, ask "Am I building skills or eroding them?"',
            '4. Build verification habits: If AI suggests something important (career advice, learning path), verify with at least 2 human sources',
            '5. Protect others: Never share friends\' personal info, family details, or anyone else\'s data with AI',
            '6. Mentor others: Help friends understand ethical AI use before they make mistakes',
            '⚠️ COMMON MISTAKES TO AVOID:',
            '   ❌ Using AI to make major life decisions without human input - AI doesn\'t know YOU deeply enough',
            '   ❌ Sharing family/friends\' personal situations with AI without their permission',
            '   ❌ Over-relying on AI for every small decision - erodes your own judgment and decision-making skills',
            '   ❌ "It\'s ethical if I don\'t get caught" mindset - ethics is about integrity, not avoiding consequences',
            '   ❌ Not thinking about long-term: Skills you don\'t develop now will limit you for decades'
          ],
          successCriteria: [
            '✅ You have written personal AI ethics code that guides all your AI interactions',
            '✅ You\'ve made at least one decision to NOT use AI when it would have been easier but would have prevented learning',
            '✅ You can clearly articulate the line between AI help (ethical) and AI doing the work (unethical)',
            '✅ You protect privacy consistently - yours and others\'',
            '✅ Your skill development trajectory is strong - AI enhanced it, didn\'t replace it',
            '✅ You\'re known among friends as the "responsible AI user" - you model good practices'
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
