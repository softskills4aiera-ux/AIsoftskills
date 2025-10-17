// Module 7: Data-Driven Decision Making

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

export const module7Data: SubtopicData[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    emoji: '📊',
    context: 'academic' as const,
    discover: {
      scenario: "Marketing internship. Manager: 'Analyze 5000 Instagram posts, find insights.' Excel overwhelms you. Random rows, no pattern. Chart all 5000 = cluttered. Report: 'Some posts have more likes?' Manager: 'That's obvious. I need INSIGHTS. What content wins? What time to post?'",
      problemExplanation: [
        "5000 rows overwhelm: Random scrolling, no pattern. Analysis paralysis. Can't answer: 'What content works best?'",
        "Can't find patterns: Look at 100 posts manually. No pattern. Brain can't process 5000 points. Need: group, average, compare",
        "No structure: Jump metrics randomly (likes→comments→shares). Don't know: what questions, what metrics first, what Excel tools",
        "Data not insights: Report '345 avg likes'. Manager: 'So what? What should we DO?' Numbers without meaning = useless"
      ],
      solutionApproach: [
        "Start organized: Clean data (remove duplicates, fix errors). Sort by date. Group by content type. Calculate engagement rate. Clean data = clear insights",
        "Excel Pivot Tables: Group by content type, calculate averages. Customer stories 678 vs product 234 = 2× better! Pattern found in 5min",
        "Ask questions FIRST: 'What content wins?' 'Best posting time?' 'Engagement trend?' Write 3 specific questions, then analyze. Focused = efficient",
        "Insights + action: 'Customer stories 2× better → post 70% stories, 30% products. Target: 345→500 engagement.' Data → meaning → recommendation"
      ]
    },
    video: {
      title: 'From 5000 Rows to 1 Clear Insight: Data Analysis for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ARE OVERWHELMED BY DATA

"You are B.Com intern. Manager: 'Analyze Instagram data (5000 rows). Find insights.' You open Excel. Overwhelmed. 'Where do I start?' You look at random rows. No pattern. You create chart (all 5000 posts). Too cluttered. You report: 'Some posts have more likes than others?' Manager (disappointed): 'That is obvious. I need INSIGHTS. What content type performs best? What time to post?' You have data but cannot analyze it. By the end of this video, you will master data analysis. Turn 5000 rows into 1 clear insight. Let us fix this."

[0:45-2:00] STEP 1: CLEAN AND ORGANIZE DATA FIRST

"Before analyzing, CLEAN data.

Your Excel file (5000 rows):
- Row 234: Post date = 2099 (ERROR - should be 2024)
- Row 567: Engagement rate = blank (MISSING)
- Row 890: Same post listed twice (DUPLICATE)
- Row 1234: Likes = 1,000,000 (OUTLIER - average is 345)

PROBLEM: Dirty data → wrong insights.

SOLUTION: Clean data (20% of time, but CRITICAL).

1. Remove duplicates (Row 890 - delete duplicate)
2. Fix errors (Row 234 - change 2099 to 2024)
3. Handle missing values (Row 567 - calculate engagement rate: (likes + comments + shares) / reach × 100)
4. Investigate outliers (Row 1234 - 1M likes? Check: Is this viral post? Or data error?)
5. Standardize format (dates: all DD/MM/YYYY)

ORGANIZE:
1. Sort by date (see chronological order)
2. Group by content type (product posts together, customer stories together)
3. Create calculated columns (engagement rate, engagement per follower)

Clean, organized data = foundation of good analysis.

Excel formulas: =REMOVE_DUPLICATES(), =IF(), =VLOOKUP()."

[2:00-3:30] STEP 2: USE DESCRIPTIVE STATISTICS

"Now calculate BASIC STATISTICS.

Use Excel formulas:
- =AVERAGE(likes) → 345 (average likes per post)
- =MEDIAN(likes) → 289 (middle value, less affected by outliers)
- =MODE(likes) → 250 (most common value)
- =MIN(likes) → 23 (worst post)
- =MAX(likes) → 2,340 (best post)
- =STDEV(likes) → 156 (spread - most posts are 345 ± 156)

WHAT THIS TELLS YOU:
- Typical post: 250-345 likes
- Range: 23 to 2,340 (huge variation!)
- Outlier: Post with 2,340 likes (investigate why)

Descriptive statistics give you OVERVIEW.

Now find PATTERNS."

[3:30-5:00] STEP 3: FIND PATTERNS (Group and Compare)

"Use Excel PIVOT TABLE (group data, calculate averages, compare).

GROUP BY CONTENT TYPE:
- Product posts: Average 234 likes
- Customer story posts: Average 678 likes
- Discount posts: Average 456 likes

PATTERN: Customer stories perform 2× better than product posts!

GROUP BY POSTING TIME:
- Morning (6-12 PM): Average 289 likes
- Afternoon (12-6 PM): Average 456 likes
- Evening (6-12 AM): Average 567 likes

PATTERN: Evening posts perform 2× better than morning!

ANALYZE TREND OVER TIME:
- Month 1: Average 234 likes
- Month 2: Average 345 likes
- Month 3: Average 456 likes

TREND: Engagement increasing 50%/month!

Patterns reveal: What is working (customer stories, evening posts, growing engagement), what is not (product posts, morning posts)."

[5:00-6:30] STEP 4: VISUALIZE (Make Patterns Visible)

"Numbers are hard to understand. VISUALIZATIONS make patterns visible.

CREATE BAR CHART: Average likes by content type
- Customer stories: 678
- Discount: 456
- Product: 234

Instantly see: Customer stories perform best.

CREATE LINE CHART: Engagement trend over 3 months
- Month 1: 234
- Month 2: 345
- Month 3: 456

Instantly see: Upward trend.

CREATE HEATMAP: Engagement by day + time
- Best: Friday 7 PM (678 likes)
- Worst: Monday 9 AM (123 likes)

Instantly see: Best posting times.

Use Excel charts (Insert → Chart → Bar/Line).

Visualization helps YOU understand (see patterns visually).
Visualization helps OTHERS understand (manager sees chart, gets insight immediately)."

[6:30-7:30] STEP 5: INSIGHTS + RECOMMENDATIONS

"Do not just report DATA. Provide INSIGHTS + RECOMMENDATIONS.

DATA: 'Customer stories average 678 likes. Product posts average 234 likes.'

INSIGHT: 'Customer stories get 2× more engagement than product posts. Our audience prefers AUTHENTIC STORIES over promotional content.'

RECOMMENDATION: 'Post 70% customer stories, 30% product posts. Expected result: Increase average engagement from 345 to 500 likes (+45%).'

Manager: 'Now THAT is useful! I know what to do.'

INSIGHT = Data + Meaning + Implication.
RECOMMENDATION = What to do + Expected result.

Always end analysis with: Insights + Recommendations."

[7:30-8:00] YOUR CHALLENGE (Analyze Data Today)

"Here is your action step: Find dataset to analyze (internship data, college project data, personal finance data).

Follow 6-step process:
1. DEFINE questions (What do I want to know?)
2. CLEAN data (remove duplicates, fix errors, handle missing values)
3. ANALYZE (descriptive stats, group, compare, find patterns)
4. VISUALIZE (create charts - bar, line, heatmap)
5. INSIGHT (what does data mean?)
6. RECOMMEND (what should we do?)

RESULT: You turn raw data into actionable insights.

Data analysis is superpower. Master it now."

[End Screen: "Next Video: Statistical Thinking - Avoid Being Fooled by Data"]`,
      content: [
        'Clean and Organize Data First: Remove duplicates, fix errors, handle missing values, standardize format, investigate outliers',
        'Use Descriptive Statistics: Calculate mean, median, mode, range, standard deviation to understand data overview',
        'Find Patterns and Trends: Group data (by content type, time, etc.), calculate averages, compare, identify what works',
        'Ask Good Questions: Define specific questions before analyzing (What content type performs best? What time to post?)',
        'Use Visualization: Create bar charts (comparison), line charts (trends), heatmaps (patterns) - make insights visible',
        'Structure Analysis: DEFINE → CLEAN → ANALYZE → VISUALIZE → INSIGHT → RECOMMEND (6-step systematic process)',
        'B.Com Applications: Marketing analytics, sales data, financial analysis, customer insights, business metrics'
      ]
    },
    quiz: {
      title: 'Data Analysis Quiz',
      questions: [
        {
          id: 1,
          question: 'Receive Instagram campaign data (5000 rows). Open Excel. Overwhelmed. "Where do I start?" What is FIRST step in data analysis?',
          options: [
            'Jump to conclusions immediately',
            'CLEAN and ORGANIZE data (remove duplicates, fix errors, handle missing values, standardize format, investigate outliers) - dirty data = wrong insights',
            'Visualize immediately without cleaning',
            'Report findings without analysis'
          ],
          correct: 1,
          explanation: 'First step = CLEAN and ORGANIZE data. Excel file has: Duplicates, errors (post date = 2099 instead of 2024), missing values (engagement rate = blank), outliers (1M likes while average 345). Dirty data → wrong insights. Clean data: (1) Remove duplicates, (2) Fix errors, (3) Handle missing values, (4) Standardize format (all dates DD/MM/YYYY), (5) Investigate outliers. Clean data takes 20% of time but CRITICAL. Then organize: Sort by date, group by content type, create calculated columns. Clean, organized data = foundation of accurate analysis. Always clean first. Dirty data = garbage in, garbage out.'
        },
        {
          id: 2,
          question: 'You cleaned Instagram data. Now you want to understand it. You calculate: Average likes = 345, Median = 289, Mode = 250. What are mean, median, mode?',
          options: [
            'Advanced machine learning techniques',
            'DESCRIPTIVE STATISTICS basics (mean = average, median = middle value, mode = most common) - give overview of data',
            'Unnecessary calculations',
            'Complex algorithms for experts only'
          ],
          correct: 1,
          explanation: 'Mean, median, mode = DESCRIPTIVE STATISTICS basics (give overview of data). MEAN (average): Sum all values ÷ count. Average likes = 345. MEDIAN (middle value): Sort all values, pick middle. Median = 289 (less affected by outliers). MODE (most common): Most frequent value. Mode = 250 (most posts get ~250 likes). Also calculate: RANGE (min to max: 23 to 2,340), STANDARD DEVIATION (spread: 156 - most posts 345 ± 156). Descriptive statistics tell: Typical post (250-345 likes), variation (23 to 2,340 - huge range!), outliers (2,340 likes unusual). Use Excel: =AVERAGE(), =MEDIAN(), =MODE(), =MIN(), =MAX(), =STDEV(). Descriptive statistics = first step to understand data. Simple but powerful.'
        },
        {
          id: 3,
          question: 'You analyze Instagram data. Most posts get 250-345 likes. But one post has 1,000,000 likes (outlier). What are outliers and what should you do?',
          options: [
            'Outliers are errors - delete them immediately',
            'Outliers are data points that differ SIGNIFICANTLY from others - INVESTIGATE them (could be valuable insight or data error)',
            'Outliers are unimportant - ignore them',
            'Outliers are always mistakes - remove them'
          ],
          correct: 1,
          explanation: 'Outliers = data points that differ SIGNIFICANTLY from others. INVESTIGATE them (could be valuable insight or data error). Most posts get 250-345 likes. One post has 1,000,000 likes (outlier). Do NOT delete immediately. INVESTIGATE: (1) Is this data error? (Is 1M likes realistic? Or typo - should be 1,000?), (2) Is this valuable insight? (Is this viral post? What made it viral? Can replicate?). Investigation reveals: Real viral post (celebrity shared it). Insight: "Celebrity endorsements increase engagement 1000×. Recommendation: Partner with micro-influencers (more affordable)." Valuable insight from outlier! If deleted outlier without investigating, would miss this insight. Always investigate outliers. They often contain most valuable insights (or reveal data quality issues). Don\'t delete blindly.'
        },
        {
          id: 4,
          question: 'You analyze Instagram data. Calculate statistics, find patterns. Manager asks: "What does this data tell us?" What does data tell when analyzed properly?',
          options: [
            'Nothing - data is just numbers',
            'STORIES and PATTERNS when analyzed (customer stories perform 2× better, evening posts get more engagement, engagement growing 50%/month)',
            'Everything - data has all answers',
            'Only facts - no interpretation needed'
          ],
          correct: 1,
          explanation: 'Data tells STORIES and PATTERNS when analyzed properly. Instagram data tells story: "Audience prefers AUTHENTIC content (customer stories get 678 likes vs product posts 234). They engage most in EVENING (evening posts 567 likes vs morning 289). Engagement GROWING (Month 1: 234 → Month 3: 456, +50%/month). Best performing: Customer story posted Friday 7 PM (2,340 likes - went viral)." Data reveals: (1) PATTERNS (what works: customer stories, evening posts), (2) TRENDS (engagement growing), (3) OUTLIERS (viral post - why?), (4) INSIGHTS (audience prefers authentic over promotional), (5) RECOMMENDATIONS (post 70% customer stories, 30% product, focus on evening). Raw data = just numbers. Analyzed data = stories, patterns, insights. Data analysis = detective work. Ask: "What story does this tell?" Find patterns. Extract insights. Make recommendations.'
        },
        {
          id: 5,
          question: 'You present Instagram analysis to manager. You show table (50 rows, 10 columns of numbers). Manager: "I cannot understand this." How does visualization help?',
          options: [
            'Visualization just looks pretty - not useful',
            'Visualization makes PATTERNS EASIER TO SEE (bar chart shows customer stories perform best instantly, line chart shows upward trend instantly)',
            'Visualization hides important data',
            'Visualization confuses audience'
          ],
          correct: 1,
          explanation: 'Visualization = makes PATTERNS EASIER TO SEE. Table with 50 rows × 10 columns = 500 numbers. Manager can\'t see pattern. Bar chart showing average likes by content type: Customer stories (678), Discount (456), Product (234). Manager instantly sees: Customer stories perform best. Line chart showing engagement trend: Month 1 (234) → Month 2 (345) → Month 3 (456). Manager instantly sees: Upward trend. Heatmap showing engagement by day + time: Friday 7 PM (678 likes, red/hot), Monday 9 AM (123 likes, blue/cold). Manager instantly sees: Best posting times. Visualization transforms: Numbers (hard to understand) → Visual patterns (easy to see). Good visualization: (1) Simple (one clear message), (2) Appropriate chart type (bar for comparison, line for trends), (3) Focused (show key insights, not all data). Use visualizations. Make insights visible. Manager understands instantly.'
        }
      ]
    },
    challenge: {
      title: 'Data Analysis Challenge',
      description: 'Transform raw data into actionable insights',
      contexts: {
        academic: {
          title: 'Student Data Analysis Kit',
          description: '500 students surveyed: study habits vs GPA. Professor: "Find insights, what predicts high GPA?" Turn data into actionable recommendations.',
          instructions: [
            '• Define 5 questions first: Average GPA? Study hours vs GPA? Attendance impact? Best study method? Part-time jobs hurt?—clear focus',
            '• Clean data Excel: Remove duplicates, fix typos (GPA 12.5→8.5), standardize formats—clean data = correct insights',
            '• Pivot Tables patterns: Group by study method, attendance, jobs—online 7.8 GPA vs group 6.8, attendance 90%+ = 8.2 GPA!',
            '• Create 4-5 charts: Bar charts, scatter plots—visualize patterns instantly, professor sees insights immediately',
            '• Insights + recommendations: "Attendance matters most, use online resources, limit jobs <15hr"—data → action, A grade!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not cleaning data first: Dirty data with duplicates, errors—wrong insights, garbage in = garbage out',
            '• Skip descriptive stats: Jump to patterns without overview—miss context, calculate mean/median first',
            '• Manual pattern finding: Look at 500 rows manually—can\'t see patterns, use Pivot Tables!',
            '• Bad charts: All 500 points on one chart, cluttered—show aggregated averages, clean visuals',
            '• Data without insights: "GPA = 7.2" without meaning—add insights + recommendations, so what?'
          ],
          successCriteria: [
            '✅ You define questions: 5 specific questions before analyzing anything',
            '✅ You clean data: Remove duplicates, fix errors, standardize—ready for analysis',
            '✅ Pivot Tables: GPA by method/attendance/jobs—patterns found in minutes',
            '✅ Charts show insights: 4-5 clean visualizations—professor sees patterns instantly',
            '✅ A grade: Insights + recommendations clear, professor praises analysis'
          ]
        },
        professional: {
          title: 'Sales Data Analysis Boss',
          description: 'E-commerce intern: 10K transactions, 6 months. Manager: "What sells? What customers buy? What channels work?" Find ₹5L revenue opportunity.',
          instructions: [
            '• Define business questions: Best products? Customer segments? Channel ROI? Sales trend? What to increase sales?—align with goals',
            '• Clean 10K rows: Remove 50 duplicates, fix price typos, standardize dates—9,800 clean rows ready',
            '• Pivot insights: Electronics 32% revenue, age 18-25 = 40% sales, email ROI 4:1 (vs ads 2:1)—patterns clear',
            '• 5 charts: Pie (revenue by category), bar (age segments), line (sales trend)—CEO sees insights fast',
            '• Recommendations + impact: "Increase email budget 25%→40%, loyalty program, focus Electronics"—₹5L opportunity, job offer!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• No questions first: Analyze everything randomly—20hr wasted, define 5 questions before starting',
            '• Dirty data analysis: Duplicates, errors in—garbage out, spend 20% time cleaning',
            '• Manual 10K rows: Can\'t find patterns—Pivot Tables group/compare in minutes',
            '• Cluttered charts: All 10K transactions shown—insights lost, aggregate data cleanly',
            '• No action recommendations: Just report numbers—manager doesn\'t know what to DO, add recommendations'
          ],
          successCriteria: [
            '✅ Questions defined: 5 specific business questions aligned with sales goals',
            '✅ Data cleaned: 10K→9,800 rows, duplicates removed, errors fixed professionally',
            '✅ Insights found: Electronics 32%, email ROI 4:1, repeat customers 60% revenue—patterns clear',
            '✅ Charts communicate: 5 clean visualizations, CEO understands insights immediately',
            '✅ Job offer: ₹5L opportunity identified, CEO wants you full-time after graduation'
          ]
        },
        personal: {
          title: 'Personal Finance Data Boss',
          description: 'Track 450 expenses, 3 months. Goal: Find where ₹45K went, identify savings. Data reveals: Food 40%, dining out 2× groceries. Save ₹42K/year!',
          instructions: [
            '• Track 3 months: Walnut app, every expense, 6 categories (Food, Transport, Entertainment, Shopping, Bills, Education)—450 transactions, complete picture',
            '• Clean and analyze: Fix typos, categorize, Pivot Tables—Food 40% (₹6K/month!), dining out 2× groceries, weekends 2× weekdays',
            '• 4 charts reveal: Pie (categories), bar (dining vs groceries), line (weekly trend increasing)—visualize where money goes',
            '• Savings plan: Cut dining 60→30×/month, plan free weekends, cancel 4 subscriptions—save ₹3,500/month (₹42K/year!)',
            '• Measure Month 4: ₹15K→₹11.5K spending, share LinkedIn—viral post, create course ₹1L revenue, help 200 students',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Track 1 week, quit: Incomplete data, no patterns—track 3 months minimum',
            '• No categories: Can\'t see where money goes—use 6 categories always',
            '• Track but never analyze: No insights, no change—analyze monthly, find patterns',
            '• Insights without action: Know dining out is high, do nothing—create specific savings plan',
            '• Don\'t measure results: Implement plan, don\'t track—measure Month 4, did spending drop?'
          ],
          successCriteria: [
            '✅ Track 3 months: 450 transactions in 6 categories, complete data',
            '✅ Patterns found: Food 40%, dining 2× groceries, weekends 2× weekdays, subscription creep',
            '✅ Charts visualize: 4 clean charts show spending patterns clearly',
            '✅ Savings plan works: ₹15K→₹11.5K/month, ₹42K/year saved proven',
            '✅ You help others: LinkedIn viral, course ₹1L revenue, 200 students helped'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🧹 Clean Data Systematically: You clean data before analyzing (remove duplicates, fix errors, handle missing values, standardize format, investigate outliers). Clean data takes 20% of time but is CRITICAL. Dirty data → wrong insights. Clean data → accurate insights. You understand: Data cleaning is not optional. It is foundation of good analysis. You use Excel functions (REMOVE_DUPLICATES, IF, VLOOKUP) to clean efficiently.',
        '📊 Use Descriptive Statistics: You calculate mean, median, mode, range, standard deviation to understand data overview. Example: Instagram data (average likes 345, median 289, range 23-2,340). Descriptive stats tell you: Typical post (250-345 likes), variation (huge range), outliers (2,340 likes post). You understand: Descriptive statistics = first step to understand data. Simple but powerful.',
        '🔍 Find Patterns Using Pivot Tables: You use Excel Pivot Tables to group data and find patterns. Example: Group by content type (Customer stories: 678 likes, Product posts: 234 likes). Pattern: Customer stories perform 2× better! You compare, identify what works, what does not. You understand: Human brain cannot see patterns in 5000 rows. Pivot Tables reveal patterns instantly.',
        '📈 Create Effective Visualizations: You create visualizations that make patterns visible. Bar chart (comparison), line chart (trends), heatmap (patterns), pie chart (proportions). You choose appropriate chart type, keep it simple, focus on key message. Manager sees your chart, understands insight instantly. You understand: Good visualization = numbers (hard to understand) → visual patterns (easy to see).',
        '💡 Provide Insights and Recommendations: You do not just report data ("Average likes = 345"). You provide INSIGHTS ("Customer stories get 2× more engagement. Audience prefers authentic content.") and RECOMMENDATIONS ("Post 70% customer stories, 30% product posts. Expected result: Increase engagement from 345 to 500 likes."). Manager knows what to do. You understand: Data without insights = useless. Always end with insights + recommendations.'
      ],
      improvements: [
        '📊 Learn Advanced Statistical Techniques: You know descriptive statistics (mean, median, mode). Good. But learn ADVANCED: (1) Regression analysis (predict GPA based on study hours, attendance), (2) Hypothesis testing (is difference between customer stories and product posts statistically significant?), (3) Correlation analysis (which factors correlate most with GPA?), (4) Time series analysis (forecast future sales based on historical trend). Take statistics course (40 hours: Khan Academy, Coursera, YouTube). Practice with real datasets. Advanced statistics enable: Deeper insights (not just "customer stories perform better" but "customer stories perform 2× better with 95% confidence"), predictions (forecast next month sales), causal analysis (does attendance CAUSE higher GPA? or just correlation?).',
        '🛠️ Master Data Analysis Tools: You use Excel (formulas, pivot tables, charts). Good. But learn MORE tools: (1) Google Sheets (collaborative, cloud-based, free), (2) Tableau (powerful visualization tool, free public version), (3) Power BI (Microsoft business intelligence tool), (4) Python (pandas library for data analysis, matplotlib for visualization), (5) SQL (query databases directly, handle large datasets). More tools = more capabilities. Example: Excel handles 10,000 rows well. But 1M rows? Excel crashes. Need Python or SQL. Invest 100 hours over 6 months learning: Tableau (20 hours), Power BI (20 hours), Python basics (40 hours), SQL basics (20 hours). Become data analysis power user.',
        '📈 Improve Data Storytelling: You present findings (slides with charts). Good. But improve STORYTELLING: (1) Start with hook ("We found ₹5L revenue opportunity!"), (2) Build narrative (problem → analysis → insights → recommendations → impact), (3) Use analogies (explain complex patterns using simple analogies), (4) Show before/after (current state vs future state if recommendations implemented), (5) Make it memorable (use stories, examples, visuals). Great data storytelling: Audience understands insights, remembers key points, takes action. Practice: Present your analysis to 10 different audiences (manager, CEO, team, classmates). Get feedback. Improve storytelling. Data analysis + storytelling = powerful combination.',
        '🔄 Automate Repetitive Analysis: You analyze Instagram data once (20 hours). Good. But if you need to analyze EVERY month? 20 hours × 12 months = 240 hours/year. Improve: AUTOMATE. (1) Create Excel template (formulas, pivot tables, charts pre-built - just paste new data, analysis updates automatically), (2) Learn Excel macros (record repetitive tasks, run with one click), (3) Learn Python scripts (automate data cleaning, analysis, visualization), (4) Create dashboards (Tableau, Power BI - live dashboards that update automatically). Automation saves: Time (20 hours → 2 hours), errors (manual analysis = mistakes, automated = consistent), scalability (analyze 10 datasets as easily as 1). Invest 20 hours learning automation. Save 200+ hours/year.',
        '🎯 Practice on Diverse Datasets: You analyzed Instagram data (marketing). Good. But practice on DIVERSE datasets: (1) Sales data (e-commerce transactions, revenue, customers), (2) Financial data (expenses, investments, budgets), (3) Survey data (customer satisfaction, employee engagement), (4) Academic data (student performance, study habits), (5) Operational data (website traffic, app usage, conversion funnels). Different datasets = different patterns, different insights, different challenges. After analyzing 20 diverse datasets, you will master data analysis. You will handle ANY dataset (any industry, any size, any complexity). Find datasets: Kaggle (free datasets), internships (company data), college projects (research data), personal (finance, fitness, time tracking).'
      ],
      nextSteps: [
        '📚 Take Statistics Course: Enroll in: (1) "Statistics for Business" (40 hours, Coursera/Khan Academy - learn descriptive stats, probability, hypothesis testing, regression), (2) "Data Analysis with Excel" (20 hours, learn advanced Excel: pivot tables, formulas, macros, charts), (3) "Data Visualization" (20 hours, learn Tableau or Power BI). Total: 80 hours over 3 months. Apply: Use statistics in every analysis (not just mean, but regression, hypothesis testing). Use advanced Excel (automate analysis). Create beautiful visualizations (Tableau dashboards). Result: Deeper insights, faster analysis, better presentations.',
        '🧠 Practice 20 Data Analyses: Analyze 20 datasets over 1 year (internship data, college projects, personal data, Kaggle datasets). Track: (1) Dataset type (marketing, sales, financial, survey, operational), (2) Size (100 rows, 10,000 rows, 1M rows), (3) Questions asked (what insights were you looking for?), (4) Techniques used (descriptive stats, pivot tables, regression, visualization), (5) Insights found (what patterns did you discover?), (6) Tools used (Excel, Python, Tableau). After 20 analyses, you will master data analysis. You will handle any dataset, any question, any complexity.',
        '📊 Build Data Analysis Portfolio: Document your best analyses. Create portfolio: (1) Instagram campaign analysis (found customer stories perform 2× better), (2) Sales data analysis (found ₹5L revenue opportunity), (3) Personal finance analysis (saved ₹42K/year), (4) Student performance analysis (found attendance is strongest GPA predictor). For each: Problem, methodology, insights, recommendations, impact. Share on LinkedIn, personal website, GitHub. Portfolio demonstrates: Data analysis expertise, business impact, problem-solving skills. Use portfolio for: Job applications (show employers your skills), freelance work (attract clients), personal brand (become known as data expert).',
        '🎓 Create Data Analysis Course: Document your expertise. Create online course: "Data Analysis for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Clean and organize data (remove duplicates, fix errors, handle missing values), (2) Module 2: Descriptive statistics (mean, median, mode, range, SD), (3) Module 3: Find patterns (pivot tables, group, compare), (4) Module 4: Visualizations (bar, line, pie, heatmap charts), (5) Module 5: Insights and recommendations (turn data into action). Sell to 200 students = ₹2L revenue. Help 200 students master data analysis. Build reputation as data expert.',
        '💼 Offer Data Analysis Services: Freelance data analyst. Service: "I analyze your business data, find insights, provide recommendations. ₹5000/analysis (10 hours)." Target: Startups, small businesses, college clubs. Process: (1) Understand business question, (2) Access data, (3) Clean and analyze, (4) Create visualizations, (5) Present insights and recommendations. Month 1: 2 clients, ₹10K. Month 6: 5 clients, ₹25K. Month 12: 10 clients, ₹50K. You help 10 businesses find insights. You earn ₹50K. You build reputation. Career opportunities open (data analyst roles, business analyst roles, consulting).'
      ]
    },
    badge: { name: 'Data Analyst', emoji: '📊', description: 'Expert in data analysis' },
    shareMessage: 'Just mastered data analysis! 📊 #DataAnalysis #DataDriven'
  },
  {
    id: 'statistical-thinking',
    title: 'Statistical Thinking',
    emoji: '📈',
    context: 'academic' as const,
    discover: {
      scenario: "News: 'Coffee reduces heart disease 30%!' You: 'Should drink more!' Friend (Stats major): 'Sample size? Causation? Who funded?' You: 'Umm...' Friend: 'Small sample (50 people), correlation not causation (coffee drinkers exercise more), coffee company funded. You're being fooled.' Another: '95% dentists recommend!' You: 'Good!' Friend: '95% of how many? 20 or 10,000?' You lack statistical literacy.",
      problemExplanation: [
        "Misread stats: 'Avg B.Com salary ₹11L!' Expect ₹11L, get ₹7L. Why? Mean (₹11L) pulled by ₹50L outlier. Median (₹7L) = typical. Used wrong stat",
        "Don't get probability: Apply 10 jobs, think 10% chance. Actually 65% (1-0.9^10). Wrong expectations. Can't calculate: job odds, investment risk, exam pass rates",
        "Correlation = causation: 'Ice cream sales = drowning deaths → ice cream causes drowning!' Wrong. Summer causes both. Confuse correlation (move together) with causation (one causes other)",
        "'95% effective!' You: 'Good!' Friend: 'At what? Sample size? Who funded? Company-funded = biased.' Fooled by marketing. Don't question: sample, methodology, funding"
      ],
      solutionApproach: [
        "Mean vs Median: Mean (₹11L) = affected by outliers (₹50L). Median (₹7L) = typical. Use median for salary data. Check both, understand difference",
        "Learn probability: 10 jobs × 10% each = 65% chance (1-0.9^10), not 10%. Khan Academy free course. Calculate: job odds, investment risk, placement chances",
        "Correlation ≠ causation: Ice cream & drowning both up in summer (hot weather causes both). Always ask: 'What's the confounding variable?' Don't assume cause",
        "Question everything: Sample size? Who funded? Methodology? '95% effective' at what? Company-funded = biased. Demand evidence, read beyond headlines"
      ]
    },
    video: {
      title: 'Stop Being Fooled: Statistical Thinking for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ARE BEING FOOLED BY STATISTICS

"Article: 'Coffee reduces heart disease risk by 30%!' You: 'I should drink more coffee!' Friend (Statistics major): 'Wait. Sample size? Correlation or causation? Who funded study?' You: 'Umm... did not check.' Friend: 'Could be: Small sample (50 people - not reliable), correlation not causation (coffee drinkers exercise more - exercise reduces heart disease, not coffee), funded by coffee company (biased). You are being fooled.' You realize: You cannot interpret statistics. You are fooled by headlines. By the end of this video, you will develop statistical thinking. Stop being fooled. Let us fix this."

[0:45-2:00] CORRELATION ≠ CAUSATION (Most Important Concept)

"Article: 'Ice cream sales correlate with drowning deaths. Conclusion: Ice cream causes drowning!'

You: 'What? That makes no sense!'

Exactly. CORRELATION ≠ CAUSATION.

CORRELATION = Two things move together (when A increases, B increases).
Ice cream sales increase → Drowning deaths increase.
They CORRELATE.

But does ice cream CAUSE drowning? NO.

CONFOUNDING VARIABLE: Summer (hot weather).
Summer → People buy ice cream (hot, want ice cream).
Summer → People swim more (hot, want to cool off) → More drowning.

Summer CAUSES both ice cream sales AND drowning.
Ice cream does not cause drowning.

Another example:
'Students who study with music have higher GPA.'

Does music CAUSE higher GPA? NO.

Students who study with music are also: More organized, disciplined, motivated.
THESE traits cause higher GPA (not music itself).

Music CORRELATES with GPA. But does not CAUSE it.

LESSON: When you see 'X correlates with Y,' ask: 'Does X CAUSE Y? Or is there confounding variable?'

Do NOT assume correlation = causation."

[2:00-3:30] SAMPLE SIZE MATTERS (Big vs Small)

"Advertisement: '95% of dentists recommend this toothpaste!'

You: 'Wow, must be good!'

Friend: '95% of WHICH dentists? 20 dentists? Or 10,000?'

SCENARIO 1: Surveyed 20 dentists. 19 recommended (95%).
Sample size = 20 (TOO SMALL). Not reliable.

SCENARIO 2: Surveyed 10,000 dentists. 9,500 recommended (95%).
Sample size = 10,000 (LARGE). More reliable.

SAME percentage (95%). DIFFERENT reliability (20 vs 10,000).

LESSON: Sample size matters. Bigger = more reliable.

Small sample (n < 100): Not reliable (high uncertainty).
Medium sample (n = 100-1000): Moderately reliable.
Large sample (n > 1000): More reliable (low uncertainty).

When you see statistic, ask: 'What was sample size?'

Small sample → Be skeptical.
Large sample → More trustworthy."

[3:30-5:00] UNDERSTAND MEAN VS MEDIAN (Outliers Matter)

"Article: 'Average salary of B.Com graduates: ₹11L/year!'

You: 'Great! I will earn ₹11L!'

Reality check:
Salaries: ₹3L, ₹4L, ₹5L, ₹6L, ₹7L, ₹8L, ₹9L, ₹10L, ₹50L (one person at top company).

MEAN (average) = (3+4+5+6+7+8+9+10+50) / 9 = ₹11L.
(Pulled UP by ₹50L outlier.)

MEDIAN (middle value) = ₹7L.
(More representative of TYPICAL graduate.)

Most graduates earn ₹6-8L (NOT ₹11L).

LESSON: Mean is affected by outliers. Median is more representative.

When to use MEAN: Data without extreme outliers (test scores: 70, 75, 80, 85, 90).
When to use MEDIAN: Data with outliers (salaries: ₹3L to ₹50L).

When you see 'average,' ask: 'Is this mean or median? Are there outliers?'

Use median for: Salaries, house prices, wealth (have outliers).
Use mean for: Test scores, heights, temperatures (no extreme outliers)."

[5:00-6:30] CONFIDENCE INTERVALS (Uncertainty Range)

"Study: 'Average salary of B.Com graduates = ₹8L (95% confidence interval: ₹7L to ₹9L).'

What does this mean?

BEST ESTIMATE = ₹8L (average from sample of 500 graduates).

95% CONFIDENCE = If we repeated study 100 times, 95 times the true average would fall between ₹7L and ₹9L.

MARGIN OF ERROR = ±₹1L (we are not 100% certain, there is uncertainty).

Confidence interval shows: UNCERTAINTY RANGE (not just single number).

NARROW interval (₹7.9L to ₹8.1L) = High precision (small uncertainty).
WIDE interval (₹5L to ₹11L) = Low precision (high uncertainty).

LESSON: All statistics have uncertainty. Confidence intervals quantify uncertainty.

When you see statistic, look for confidence interval.

No confidence interval? Be skeptical (they might be hiding uncertainty)."

[6:30-7:30] QUESTION DATA SOURCES (Who, How, When, Where, What)

"Article: 'Product reduces stress by 50%!'

You: 'Wow, I should buy this!'

WAIT. Ask questions:

1. WHO collected data? (Independent researcher? Or company selling product? Company = biased.)
2. HOW was data collected? (Randomized controlled trial? Or survey? RCT = gold standard.)
3. WHEN was data collected? (2024? Or 1990? Old data might not be relevant.)
4. WHERE was data collected? (India? Or USA? Different context.)
5. WHAT was sample size? (30 people? Or 10,000? Larger = more reliable.)
6. WHAT was methodology? (Self-reported? Or measured? Measured = more objective.)

You investigate:
- WHO: Company selling product (BIASED)
- HOW: Self-reported survey (SUBJECTIVE)
- SAMPLE: 30 people (TOO SMALL)
- METHODOLOGY: Observational (NOT RCT)

Conclusion: NOT RELIABLE. Do not trust claim.

LESSON: Question data sources. Demand evidence. Think critically."

[7:30-8:00] YOUR CHALLENGE (Develop Statistical Skepticism)

"Here is your action step: Next time you see statistic (news, advertisement, social media):

QUESTION IT:
1. Sample size? (Small or large?)
2. Correlation or causation? (Confounding variables?)
3. Mean or median? (Outliers?)
4. Confidence interval? (How much uncertainty?)
5. Who funded study? (Biased source?)

RESULT: You stop being fooled. You think critically. You make better decisions.

Statistical thinking is superpower. Develop it now."

[End Screen: "Next Video: Data Visualization - Make Data Understandable"]`,
      content: [
        'Correlation ≠ Causation: Two things move together does not mean one causes the other (look for confounding variables)',
        'Sample Size Matters: Larger samples more reliable (n > 1000 = reliable, n < 100 = skeptical)',
        'Mean vs Median: Mean affected by outliers (use median for salaries, house prices), median more representative',
        'Confidence Intervals: All statistics have uncertainty (95% CI shows uncertainty range, narrow = high precision)',
        'Question Data Sources: Ask WHO collected (biased?), HOW (methodology?), WHAT (sample size?), WHEN (recent?)',
        'Statistical Fallacies: Small sample, cherry-picking, survivorship bias, Texas sharpshooter - recognize and avoid',
        'B.Com Applications: Interpret salary statistics, understand market research, evaluate business claims, make informed decisions'
      ]
    },
    quiz: {
      title: 'Statistical Thinking Quiz',
      questions: [
        {
          id: 6,
          question: 'Article: "Ice cream sales correlate with drowning deaths." Conclusion: "Ice cream causes drowning!" Is this correct? What is difference between correlation and causation?',
          options: [
            'Correlation and causation are same thing',
            'CORRELATION = two things move together (NOT that one causes other). Ice cream and drowning both increase in SUMMER (confounding variable). Ice cream does NOT cause drowning.',
            'Causation is weaker than correlation',
            'No difference between them'
          ],
          correct: 1,
          explanation: 'CORRELATION ≠ CAUSATION. CORRELATION = two things move together (when A increases, B increases). CAUSATION = one thing CAUSES other (A causes B). Example: Ice cream sales correlate with drowning deaths (both increase in summer). But ice cream does NOT cause drowning. CONFOUNDING VARIABLE: Summer (hot weather) causes BOTH ice cream sales (people want ice cream when hot) AND drowning (people swim more when hot, more swimming = more drowning). Ice cream and drowning correlate, but ice cream doesn\'t cause drowning. When see "X correlates with Y," ask: "Does X CAUSE Y? Or is there confounding variable?" Do NOT assume correlation = causation. Investigate deeper. Establish causation requires: Randomized controlled trial, control confounding variables, temporal precedence, mechanism.'
        },
        {
          id: 7,
          question: 'Advertisement: "95% of dentists recommend this toothpaste!" You investigate. Find: Surveyed 20 dentists (19 recommended). Is this reliable? Why do larger sample sizes matter?',
          options: [
            'Larger samples are worse - too expensive',
            'Larger samples are GENERALLY MORE RELIABLE (small sample n<100 = high uncertainty, large sample n>1000 = low uncertainty). 20 dentists = too small, not reliable.',
            'Sample size does not matter at all',
            'Larger samples are too expensive to consider'
          ],
          correct: 1,
          explanation: 'Larger sample sizes = GENERALLY MORE RELIABLE (lower uncertainty). Small sample (n < 100): High uncertainty, not reliable. Survey 20 dentists, 19 recommend (95%). But survey different 20 dentists, might get 15 recommend (75%). Result varies widely. Not reliable. Large sample (n > 1000): Low uncertainty, more reliable. Survey 10,000 dentists, 9,500 recommend (95%). Survey different 10,000, likely get similar result (94-96%). Result consistent. Reliable. Why? Law of large numbers: Larger sample → sample average closer to true population average. Small sample → high variability. Large sample → low variability. When see statistic, ask: "What was sample size?" Small sample (n < 100) → Be skeptical. Large sample (n > 1000) → More trustworthy. Don\'t trust claims based on small samples. Demand large samples for reliable conclusions.'
        },
        {
          id: 8,
          question: 'Study: "Average salary of B.Com graduates = ₹8L (95% confidence interval: ₹7L to ₹9L)." What does confidence interval show?',
          options: [
            'Certainty - we are 100% certain salary is ₹8L',
            'RANGE OF UNCERTAINTY - true average likely between ₹7L-₹9L (95% confidence). Narrow interval = high precision, wide interval = low precision.',
            'Just the average value',
            'The mode (most common value)'
          ],
          correct: 1,
          explanation: 'Confidence interval = shows RANGE OF UNCERTAINTY (not certainty). Study: "Average salary = ₹8L (95% CI: ₹7L to ₹9L)." Interpretation: (1) BEST ESTIMATE = ₹8L (average from sample of 500 graduates), (2) 95% CONFIDENCE = If repeated study 100 times, 95 times true average would fall between ₹7L and ₹9L, (3) MARGIN OF ERROR = ±₹1L (not 100% certain, there\'s uncertainty). Confidence interval quantifies: How certain are we? NARROW interval (₹7.9L to ₹8.1L) = High precision (small uncertainty, large sample, consistent data). WIDE interval (₹5L to ₹11L) = Low precision (high uncertainty, small sample, variable data). When see statistic, look for confidence interval. It tells: How much uncertainty? Can trust this number? No confidence interval? Be skeptical (might be hiding uncertainty). All statistics have uncertainty. Confidence intervals make uncertainty transparent.'
        },
        {
          id: 9,
          question: 'Article: "Product reduces stress by 50%!" You want to know if this is reliable. What should you ask when seeing statistics?',
          options: [
            'Nothing - just trust the statistic',
            'Ask: HOW was data collected (methodology)? By WHOM (funding source)? WHAT sample size? WHEN collected? - question data sources to assess reliability',
            'Only ask for the exact number',
            'Ask for more statistics without context'
          ],
          correct: 1,
          explanation: 'When seeing statistics, ask: HOW was data collected and by WHOM (assess reliability and bias). Questions: (1) WHO collected data? (Independent researcher = unbiased, company selling product = biased), (2) HOW collected? (Randomized controlled trial = gold standard, observational study = less reliable, self-reported survey = subjective), (3) WHAT sample size? (30 people = too small, 10,000 = more reliable), (4) WHEN collected? (2024 = recent/relevant, 1990 = old/outdated), (5) WHERE collected? (India = relevant, USA = different context), (6) WHAT methodology? (Measured objectively = reliable, self-reported = subjective). Example: "Product reduces stress by 50%!" Investigate: WHO (company selling product - BIASED), HOW (self-reported survey - SUBJECTIVE), SAMPLE (30 people - TOO SMALL), METHODOLOGY (observational - NOT RCT). Conclusion: NOT RELIABLE. Don\'t trust claim. Question all statistics. Demand transparency. Assess reliability before believing claims. Questioning data sources prevents being fooled by biased/misleading statistics.'
        },
        {
          id: 10,
          question: 'Article: "Average B.Com graduate salary: ₹11L!" But salaries are: ₹3L, ₹4L, ₹5L, ₹6L, ₹7L, ₹8L, ₹9L, ₹10L, ₹50L (outlier). Mean = ₹11L. Median = ₹7L. Which is more representative?',
          options: [
            'Mean and median are the same',
            'MEDIAN is more representative (₹7L) - less affected by outliers (₹50L). Most graduates earn ₹6-8L, not ₹11L. Use median for data with outliers.',
            'Mean is always better than median',
            'No difference - use either'
          ],
          correct: 1,
          explanation: 'MEDIAN = more representative when data has outliers. Salaries: ₹3L, ₹4L, ₹5L, ₹6L, ₹7L, ₹8L, ₹9L, ₹10L, ₹50L. MEAN (average) = ₹11L (pulled UP by ₹50L outlier). MEDIAN (middle value) = ₹7L (not affected by ₹50L outlier). Most graduates (8 out of 9) earn ₹3L-₹10L (median ₹7L is representative). Only 1 graduate earns ₹50L (outlier). Mean ₹11L NOT representative (misleading - suggests typical graduate earns ₹11L, but most earn ₹6-8L). LESSON: Use MEDIAN for data with outliers (salaries, house prices, wealth - have extreme values). Use MEAN for data without outliers (test scores, heights, temperatures). When see "average salary," ask: "Is this mean or median?" If mean, check for outliers. Median more representative of typical graduate. Mean can be misleading when outliers exist.'
        }
      ]
    },
    challenge: {
      title: 'Statistical Thinking Challenge',
      description: 'Stop being fooled by misleading statistics',
      contexts: {
        academic: {
          title: 'Stat Thinking Detective Kit',
          description: '10 articles conflict: "90% employed!" vs "60% employed!" "Salary ₹15L!" vs "₹6L!" Professor: "Which is true? Question sources, check fallacies, interpret correctly."',
          instructions: [
            '• Collect 10 conflicting claims: "90% vs 60% employed," "₹15L vs ₹6L salary"—document claim, source, date',
            '• Question sources (WHO/HOW/WHAT): Coaching institute (biased, n=50, 2015) vs government (unbiased, n=10K, 2024)—7 unreliable, 3 reliable',
            '• Spot fallacies: "₹15L salary" = cherry-picking (only top 10 companies), survivorship bias (show 5 CEOs, not 100 average)—5 articles have fallacies',
            '• Mean vs median: ₹15L mean (outliers pull up) vs ₹7L median (typical grad)—median more representative for salaries',
            '• Present findings: 3 reliable sources, 7 unreliable with reasoning—Professor A grade, statistical thinking mastered!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Trust all sources equally: Coaching institute = government data?—nope, question WHO collected, biased?',
            '• Ignore sample size: n=20 vs n=10K same trust?—check size, <100 skeptical, >1K reliable',
            '• Correlation = causation: "Internships cause ₹9L salary"—check confounding: motivation, network, skills',
            '• Miss fallacies: Accept claims blindly—recognize cherry-picking, survivorship bias',
            '• Ignore confidence intervals: Only see ₹8L point estimate—check CI, narrow = reliable, wide = uncertain'
          ],
          successCriteria: [
            '✅ 10 claims collected: Conflicting employment/salary data documented',
            '✅ Sources questioned: WHO/HOW/WHAT checked, 7 unreliable, 3 reliable identified',
            '✅ Fallacies spotted: Cherry-picking, survivorship bias, small samples recognized',
            '✅ Mean vs median: ₹15L mean misleading, ₹7L median representative understood',
            '✅ A grade: Present findings, statistical thinking praised by professor'
          ]
        },
        professional: {
          title: 'Debunk Claims Like a Boss',
          description: 'Competitor: "80% effective!" CEO panics. You investigate: n=50, biased, survivorship bias. Run own RCT n=200: 5% effect, not significant. Claim = FALSE.',
          instructions: [
            '• Investigate competitor claim: "80% effective"—check study: n=50 (small!), competitor-funded (biased!), no CI (hiding uncertainty?)—red flags everywhere',
            '• Spot fallacies: Small sample, survivorship bias (show 50 who continued, not 50 who quit), cherry-picking—claim questionable',
            '• Run own RCT: n=200 companies, randomized control, 6 months—product 15% vs control 10%, difference 5% NOT significant (p=0.15)',
            '• Calculate CI: Product 8-22%, control 5-15%—overlapping intervals = not significant, competitor claim FALSE proven',
            '• Present + go viral: Blog "Debunked 80% claim," 10K shares—consulting business ₹100K/6mo, 10 clients, expert reputation',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Trust without questioning: "80% effective" accepted—question source, sample, methodology always',
            '• Miss fallacies: Don\'t check survivorship bias, cherry-picking—learn common fallacies, spot them',
            '• Don\'t verify: Rely on competitor study only—conduct own RCT, gold standard',
            '• Ignore CI: Only see 15% point estimate—calculate CI, show uncertainty transparently',
            '• Keep private: Don\'t share debunking—publish findings, help others avoid being fooled'
          ],
          successCriteria: [
            '✅ Red flags spotted: n=50 small, biased source, no CI—claim questionable',
            '✅ Own RCT: n=200, 6 months, 5% effect not 80%—debunked with evidence',
            '✅ CI calculated: Overlapping intervals prove not significant professionally',
            '✅ CEO promotes: Saved company from panic, statistical thinking valued',
            '✅ Consulting ₹100K: 10 clients in 6 months, expert reputation built'
          ]
        },
        personal: {
          title: 'Don\'t Get Fooled Blueprint',
          description: '"Green tea reduces weight 30%!" You want to believe. But: Tea company funded, n=30, self-reported. Real effect: 1-3%. Statistical thinking saves money.',
          instructions: [
            '• Question the claim: WHO funded? (Tea company = biased). Sample size? (n=30 = small). How measured? (Self-reported = subjective)—red flags everywhere',
            '• Research multiple sources: University RCT n=1K (2% effect), meta-analysis n=10K (1-3%)—reliable sources say MINIMAL, not 30%',
            '• Spot confounding variables: Tea drinkers also exercise more, eat better—THESE cause weight loss, not tea alone (correlation ≠ causation)',
            '• Set realistic expectations: 70kg × 2% = 1.4kg loss, not 21kg—focus on proven: diet + exercise + sleep',
            '• Share learnings: Lost 6kg using evidence (not magic tea), post viral—saved 200 people from wasting money on supplements',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Confirmation bias: Want to believe, so ignore red flags—be objective, question claims you want to believe',
            '• One biased source only: Just tea company article—research multiple independent sources, meta-analyses',
            '• Miss confounding: "Tea drinkers lose weight = tea causes it"—check: do they also exercise more?',
            '• Unrealistic: Expect 21kg from tea alone—realistic: 1-3% effect, need diet + exercise',
            '• Don\'t share: Keep knowledge private—post on social, help others avoid false claims'
          ],
          successCriteria: [
            '✅ Red flags: Biased source, n=30 small, self-reported, no CI identified',
            '✅ Multiple sources: University/meta-analysis say 1-3%, not 30%—truth found',
            '✅ Confounding understood: Tea drinkers exercise more, eat better—these cause loss',
            '✅ Evidence-based: Lost 6kg diet + exercise, not magic tea—realistic works',
            '✅ Helped 200: Viral post, saved people from wasting money on supplements'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🔗 Understand Correlation ≠ Causation: You do not confuse correlation (two things move together) with causation (one causes the other). Example: Ice cream sales correlate with drowning deaths. But ice cream does NOT cause drowning. Summer (confounding variable) causes both. You look for confounding variables. You do not assume correlation = causation. You understand: Establishing causation requires RCT, controlling confounding variables, temporal precedence, mechanism.',
        '📊 Question Sample Size: You check sample size before trusting statistics. Small sample (n < 100) = high uncertainty, not reliable. Large sample (n > 1000) = low uncertainty, more reliable. Example: "95% of dentists recommend" - you ask: "95% of how many? 20? Or 10,000?" 20 = not reliable. 10,000 = more reliable. You understand: Sample size matters. Bigger = more reliable. Always check sample size.',
        '📈 Use Median for Data with Outliers: You understand: Mean is affected by outliers, median is not. Example: B.Com salaries (₹3L to ₹50L). Mean = ₹11L (pulled up by ₹50L outlier). Median = ₹7L (more representative of typical graduate). You use median for: Salaries, house prices, wealth (have outliers). You use mean for: Test scores, heights, temperatures (no outliers). You understand: Choose appropriate statistic based on data distribution.',
        '🎯 Interpret Confidence Intervals: You look for confidence intervals to assess uncertainty. Example: "Average salary ₹8L (95% CI: ₹7L to ₹9L)" - narrow interval = high precision. "Average salary ₹8L (95% CI: ₹5L to ₹11L)" - wide interval = low precision. You understand: All statistics have uncertainty. Confidence intervals quantify uncertainty. Narrow = reliable. Wide = uncertain. No interval = be skeptical.',
        '❓ Question Data Sources: You question: WHO collected data (biased?), HOW collected (methodology?), WHAT sample size, WHEN collected (recent?), WHERE collected (relevant context?). Example: "Product reduces stress 50%!" You investigate: WHO (company selling product - biased), HOW (self-reported survey - subjective), SAMPLE (30 people - too small). Conclusion: Not reliable. You understand: Question all sources. Demand transparency. Assess reliability before believing claims.'
      ],
      improvements: [
        '📚 Learn Advanced Statistics: You know basics (mean, median, correlation, confidence intervals). Good. But learn ADVANCED: (1) Hypothesis testing (is difference statistically significant? p-value < 0.05?), (2) Regression analysis (predict outcome based on multiple variables), (3) A/B testing (compare two versions, determine which is better), (4) Bayesian statistics (update beliefs based on new evidence), (5) Experimental design (design rigorous studies, control confounding variables). Take advanced statistics course (60 hours: Coursera, Khan Academy). Practice: Conduct hypothesis tests, run regression analyses, design experiments. Advanced statistics enable: Deeper insights (not just "X correlates with Y" but "X causes Y with 95% confidence"), rigorous analysis (control confounding variables), better decisions (based on statistical significance, not just patterns).',
        '🛠️ Master Statistical Software: You use Excel (formulas, basic stats). Good. But learn STATISTICAL SOFTWARE: (1) R (free, powerful statistical programming language - learn basics: 40 hours), (2) Python (pandas for data, scipy for statistics, statsmodels for regression - learn basics: 40 hours), (3) SPSS (statistical software for social sciences - learn basics: 20 hours), (4) Stata (econometrics software - learn basics: 20 hours). Statistical software enables: Advanced analyses (regression, hypothesis testing, time series), handle large datasets (1M+ rows), automate analyses (run 100 analyses in minutes). Invest 120 hours over 6 months. Become statistical analysis power user.',
        '🎯 Practice Critical Reading of Research: You question claims in news articles. Good. But practice reading ACTUAL RESEARCH PAPERS: (1) Find 10 research papers on topics you care about (B.Com employment, salary, career success), (2) Read critically: Check sample size, methodology, confidence intervals, limitations, funding source, (3) Evaluate: Is this reliable? What are weaknesses? What are confounding variables?, (4) Compare: Do multiple studies agree? Or conflicting results? Practice: Read 1 research paper/week (50 papers/year). After 50 papers, you will master: Reading research critically, identifying methodological flaws, assessing reliability, distinguishing good research from bad. Critical reading skill = invaluable for B.Com (evaluate business research, market research, academic research).',
        '📊 Teach Statistical Thinking: You developed statistical thinking. Now TEACH others. Create: (1) Workshop: "Statistical Thinking for B.Com Students" (2 hours). Content: Correlation ≠ causation, sample size matters, mean vs median, confidence intervals, question data sources, recognize fallacies. Deliver to 50 students. (2) Blog: Write 10 articles debunking common statistical myths ("Coffee causes heart disease," "Internships guarantee high salary," "Green tea causes weight loss"). (3) YouTube: Create 5 videos explaining statistical concepts (10 mins each, simple explanations, examples). Teaching: Solidifies your understanding, helps others avoid being fooled, builds your reputation as expert. Result: 100+ students learn statistical thinking, avoid being fooled, make better decisions.',
        '🔬 Conduct Your Own Studies: You evaluate others\' studies. Good. But conduct YOUR OWN: (1) Design study (research question, sample size, methodology, control variables), (2) Collect data (surveys, experiments, observations), (3) Analyze data (descriptive stats, hypothesis testing, regression), (4) Report findings (paper, presentation, blog post). Example: Research question: "Do B.Com students who attend career workshops get jobs faster?" Design: Survey 500 students (250 attended workshops, 250 did not), measure: Time to get job offer. Analyze: Workshop group (average 3 months), No-workshop group (average 5 months). Difference: 2 months. Hypothesis test: p < 0.05 (statistically significant). Conclusion: Workshops correlate with faster job placement. Conduct 5 studies over 2 years. Build research portfolio. Develop research skills. Open career opportunities (research analyst, data scientist, academic researcher).'
      ],
      nextSteps: [
        '📚 Take Advanced Statistics Course: Enroll in: (1) "Inferential Statistics" (40 hours, Coursera - learn hypothesis testing, confidence intervals, p-values, statistical significance), (2) "Regression Analysis" (30 hours, learn linear regression, multiple regression, logistic regression), (3) "Experimental Design" (20 hours, learn how to design rigorous studies, control confounding variables), (4) "Bayesian Statistics" (30 hours, learn how to update beliefs based on evidence). Total: 120 hours over 6 months. Apply: Use hypothesis testing in analyses, run regression to predict outcomes, design experiments, apply Bayesian thinking. Result: Deeper statistical understanding, rigorous analysis, better decisions.',
        '🧠 Read 50 Research Papers Critically: Read 1 research paper/week for 1 year (50 papers total). Topics: B.Com employment, salary, career success, business performance, marketing effectiveness. For each paper: (1) Evaluate sample size (large or small?), (2) Check methodology (RCT or observational?), (3) Identify confounding variables (what else could explain results?), (4) Check confidence intervals (narrow or wide?), (5) Assess funding source (biased or independent?), (6) Rate reliability (1-10 scale). After 50 papers, you will master: Critical reading, identifying flaws, assessing reliability, distinguishing good research from bad. Skill is invaluable for B.Com (evaluate business research, make evidence-based decisions).',
        '📊 Build Statistical Thinking Portfolio: Document your statistical analyses. Create portfolio: (1) Debunked competitor claim (showed 80% claim is false, actual effect 5%), (2) Evaluated health claim (showed green tea 30% claim is false, actual effect 1-3%), (3) Analyzed salary statistics (showed mean ₹11L is misleading, median ₹7L is representative), (4) Conducted own RCT (200 companies, found product effect is minimal). For each: Claim, red flags, analysis, findings, conclusion. Share on LinkedIn, personal website, GitHub. Portfolio demonstrates: Statistical thinking expertise, critical analysis skills, research rigor. Use for: Job applications (data analyst, business analyst roles), consulting (help companies evaluate claims), personal brand (become known as statistical thinker).',
        '🎓 Create Statistical Thinking Course: Document your expertise. Create online course: "Statistical Thinking for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Correlation ≠ causation (understand confounding variables, do not assume causation), (2) Module 2: Sample size matters (small sample = skeptical, large sample = reliable), (3) Module 3: Mean vs median (use median for outliers, mean otherwise), (4) Module 4: Confidence intervals (understand uncertainty, assess precision), (5) Module 5: Question data sources (WHO, HOW, WHAT, WHEN, WHERE). Sell to 200 students = ₹2L revenue. Help 200 students develop statistical literacy. Build reputation as expert.',
        '💼 Offer Statistical Consulting: Freelance statistical consultant. Service: "I evaluate statistical claims, conduct rigorous analyses, help you make evidence-based decisions. ₹10,000/project (15 hours)." Target: Startups (evaluate competitor claims), businesses (analyze their data), students (help with research projects). Process: (1) Understand claim/question, (2) Evaluate existing evidence (question sources, check methodology), (3) Conduct own analysis (if needed - design study, collect data, analyze), (4) Present findings (reliable or not, recommendations). Month 1: 2 clients, ₹20K. Month 6: 5 clients, ₹50K. Month 12: 10 clients, ₹100K. You help 10 organizations make better decisions. You earn ₹100K. Career opportunities open (data analyst, research analyst, business analyst roles).'
      ]
    },
    badge: { name: 'Statistical Thinker', emoji: '📈', description: 'Expert in statistical thinking' },
    shareMessage: 'Just mastered statistical thinking! 📈 #Statistics #DataDriven'
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    emoji: '📉',
    context: 'professional' as const,
    discover: {
      scenario: "Marketing intern. Found insights: customer stories 2× better. CEO presentation: 20 slides, tables with 1000 numbers. CEO (5min): 'Too many numbers. What's your point?' You: 'Customer stories better?' CEO: 'SHOW me! Can't see in tables.' Fails. Manager: 'Great insights, bad communication. CEO needs VISUALS.'",
      problemExplanation: [
        "Wrong chart: Pie chart for 'customer stories vs product posts'. CEO: 'Look similar.' Should use bar chart (678 vs 234 = 3× taller). Insight obvious",
        "Too cluttered: 50 bars, 10 colors, grid lines, 3D effects, legend 50 items. CEO: 'Overwhelming.' Show top 5, use 2 colors, remove clutter",
        "No story: 10 charts, no context. CEO: 'What's the story? What should we DO?' Charts without narrative = meaningless. Need: problem→insights→action",
        "Misleading visuals: Y-axis starts 330 (not 0). 340→350 looks huge, actually +3%. Manipulated axis = dishonest. CEO loses trust"
      ],
      solutionApproach: [
        "Right chart type: Comparison → bar chart (678 vs 234 = 3× taller, obvious). Trend → line. Proportion → pie. Correlation → scatter. Match chart to purpose",
        "Simplify: Top 5 only (not 50). 2 colors (highlight key, gray rest). Remove: grid, 3D, clutter. One message per chart. Less = more",
        "Tell story: Problem ('Low engagement, why?') → Analysis (3 charts) → Insight ('Stories 2× better') → Action ('70% stories') → Impact ('+45%'). Narrative = memorable",
        "Honest visuals: Y-axis starts 0 (not 330). Consistent scales. Show all data (not cherry-pick). 340→350 = +3% (small), not 'exploded'. Trust > impression"
      ]
    },
    video: {
      title: 'From Tables to Insights: Data Visualization Mastery',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR CEO CANNOT UNDERSTAND YOUR ANALYSIS

"You analyzed Instagram data. Found great insights: Customer stories perform 2× better. You present to CEO: 20 slides with tables (50 rows each, 1000 numbers total). CEO (5 mins in): 'I cannot understand this. Too many numbers. What is your point?' You: 'Customer stories perform better?' CEO: 'Show me! I cannot SEE it in these tables.' Presentation fails. Manager: 'You had great insights. But you could not COMMUNICATE them. CEO needs to SEE insights, not read 1000 numbers.' By the end of this video, you will master data visualization. Make insights VISIBLE. Let us fix this."

[0:45-2:15] CHOOSE RIGHT CHART TYPE (Bar, Line, Pie, Scatter, Heatmap)

"You want to show: 'Customer stories get more engagement than product posts.'

WRONG CHART: Pie chart (Customer stories: 40%, Product posts: 35%, Discount: 25%).
CEO: 'I cannot see which is better. They look similar.'

RIGHT CHART: Bar chart (Customer stories: 678 likes, Product posts: 234 likes, Discount: 456 likes).
CEO: 'Instantly see: Customer stories bar is 3× taller. Customer stories perform best!'

CHART TYPES:

1. BAR CHART (COMPARISON)
   Use when: Comparing categories (customer stories vs product posts vs discount posts).
   Example: Average likes by content type.

2. LINE CHART (TRENDS)
   Use when: Showing change over time (engagement: Month 1 → Month 2 → Month 3).
   Example: Engagement trend over 3 months.

3. PIE CHART (PARTS OF WHOLE)
   Use when: Showing proportions (Food: 40%, Transport: 20% of budget).
   Use SPARINGLY (hard to compare similar percentages).

4. SCATTER PLOT (RELATIONSHIPS)
   Use when: Showing correlation (study hours vs GPA).
   Example: Positive correlation between study hours and GPA.

5. HEATMAP (PATTERNS)
   Use when: Showing intensity by two dimensions (engagement by day + time).
   Example: Friday 7 PM is hottest (most engagement).

LESSON: Match chart type to purpose.
Comparison → Bar. Trend → Line. Proportion → Pie. Correlation → Scatter. Pattern → Heatmap.

Right chart makes insight OBVIOUS."

[2:15-3:45] KEEP IT SIMPLE (Remove Clutter)

"You create bar chart. But add:
- 50 bars (all content types)
- 10 colors (different color each bar)
- Grid lines (horizontal + vertical)
- Data labels (on every bar)
- Legend (50 items)
- 3D effects, shadows, gradients

CEO: 'This is overwhelming. I cannot see the main insight.'

PROBLEM: TOO CLUTTERED. Too many elements compete for attention.

SOLUTION: SIMPLIFY.

1. Show TOP 5 (not all 50 content types - focus on most important)
2. Use 2 colors (highlight customer stories in BLUE, others in GRAY - directs attention)
3. Remove clutter (grid lines, 3D effects, shadows - remove anything that does not contribute to message)
4. Large fonts (18pt+ for titles, 14pt+ for labels - easy to read)
5. One message per chart (do not try to show 5 insights in 1 chart)

RESULT: CEO sees insight INSTANTLY (not distracted by clutter).

RULE: Remove everything except: Data, insight, message.

Clutter HIDES insights. Simplicity REVEALS insights."

[3:45-5:15] TELL STORY WITH DATA (Problem → Analysis → Insights → Recommendations → Impact)

"You present 10 charts (no context, no narrative).

CEO: 'What is the STORY? What should I learn?'

You: 'Umm... here are the patterns?'

CEO: 'But what does it MEAN? What should we DO?'

PROBLEM: No storytelling. Charts without story = meaningless.

SOLUTION: Structure as STORY.

1. PROBLEM: 'Our Instagram engagement is low (345 likes/post). We need to improve. What is working?'

2. ANALYSIS: 'We analyzed 1000 posts over 3 months. Here is what we found...' (Show 3 key charts.)

3. INSIGHTS: 'Customer stories perform 2× better (678 vs 234 likes). Our audience prefers AUTHENTIC content over promotional.'

4. RECOMMENDATIONS: 'Post 70% customer stories, 30% product posts.'

5. IMPACT: 'Expected result: Increase engagement from 345 to 500 likes (+45%). Increase reach by 100K.'

Story structure: Problem → Analysis → Insights → Recommendations → Impact.

CEO: Understands (follows narrative), remembers (key points), acts (knows what to do).

No story = disconnected charts.
Good story = connected narrative with purpose."

[5:15-6:30] AVOID MISLEADING VISUALS (Be Honest)

"You want to show: 'Engagement improved from 340 to 350 (+3%).'

MISLEADING CHART: Y-axis starts at 330 (not 0).
Result: 340 to 350 looks like HUGE increase (bar grows 10× taller).
CEO: 'Wow, engagement exploded!'
Reality: Only +3% (small improvement).

HONEST CHART: Y-axis starts at 0.
Result: 340 to 350 looks like small increase (accurate).
CEO: 'OK, small improvement. Keep working.'

MISLEADING tactics:
- Truncated axes (start Y-axis at 330, not 0)
- Inconsistent scales (Y-axis changes between charts)
- Cherry-picking (show only successes, hide failures)
- 3D pie charts (distort proportions)

HONEST tactics:
- Start axes at 0
- Use consistent scales
- Show all data (successes AND failures)
- Use appropriate chart types

Honesty builds TRUST.
Misleading visuals destroy TRUST.

Even if insights are less impressive, show them HONESTLY."

[6:30-7:30] DESIGN FOR YOUR AUDIENCE

"You create visualization for CEO.

You use:
- Technical jargon ('CTR,' 'CPC,' 'ROAS')
- Complex charts (box plots, violin plots)
- Small fonts (8pt)
- No context

CEO (confused): 'What is CTR? What is this chart? I cannot read this.'

PROBLEM: You designed for YOURSELF (you understand jargon, complex charts).

SOLUTION: Design for AUDIENCE (CEO).

CEO presentation:
- Simple language (no jargon - 'Click-through rate' not 'CTR')
- Simple charts (bar, line, pie - not complex statistical charts)
- Large fonts (18pt+ titles, 14pt+ labels)
- Provide context ('Here is our Instagram performance over 3 months')

RESULT: CEO understands.

Know your audience. Design accordingly."

[7:30-8:00] YOUR CHALLENGE (Create One Perfect Chart)

"Here is your action step: Take your last analysis. Create ONE PERFECT CHART.

1. Choose right chart type (comparison? → bar. trend? → line.)
2. Simplify (show top 5, use 2 colors, remove clutter)
3. Add clear title ('Customer Stories Get 2× More Engagement')
4. Large fonts (18pt+ title)
5. One clear message

Show to 3 people. Ask: 'What is the insight?'

If they get it INSTANTLY → Good visualization.
If they are confused → Simplify more.

RESULT: You master data visualization. Make insights visible."

[End Screen: "Next Video: Hypothesis Testing - Make Data-Driven Decisions"]`,
      content: [
        'Choose Right Chart Type: Bar (comparison), Line (trends), Pie (proportions), Scatter (correlation), Heatmap (patterns)',
        'Keep It Simple: Show top 5 (not all 50), use 2-3 colors, remove clutter, large fonts, one message per chart',
        'Tell Stories with Data: Problem → Analysis → Insights → Recommendations → Impact (structured narrative)',
        'Avoid Misleading Charts: Start axes at 0, consistent scales, show all data, appropriate chart types - honesty builds trust',
        'Design for Audience: CEO (simple charts, no jargon, large fonts), Data team (complex charts OK, technical language OK)',
        'Focus on Key Insights: Show top 3-5 insights (most important, most actionable) - less is more, quality over quantity',
        'B.Com Applications: Present analysis to management, client presentations, project reports, business proposals'
      ]
    },
    quiz: {
      title: 'Data Visualization Quiz',
      questions: [
        {
          id: 11,
          question: 'You want to show: "Customer stories get more engagement than product posts and discount posts." Which chart type is BEST for comparing these 3 categories?',
          options: [
            'Line chart (shows trends over time)',
            'BAR CHART (best for COMPARING categories) - customer stories bar is 3× taller than product posts bar, comparison is obvious',
            'Scatter plot (shows relationships)',
            'Pie chart (shows parts of whole)'
          ],
          correct: 1,
          explanation: 'BAR CHART = best for COMPARING categories. Want to compare: Customer stories (678 likes) vs Product posts (234 likes) vs Discount posts (456 likes). Bar chart: 3 vertical bars, heights show values. Customer stories bar 3× taller than product posts bar. Comparison OBVIOUS. CEO instantly sees: Customer stories perform best. Chart type guide: COMPARISON → Bar chart, TRENDS → Line chart, PROPORTIONS → Pie chart, CORRELATION → Scatter plot, PATTERNS → Heatmap. Choose chart type based on purpose. Want to compare categories? Use bar chart. Want to show trend? Use line chart. Right chart type makes insight obvious. Wrong chart type hides insight.'
        },
        {
          id: 12,
          question: 'You want to show: "Instagram engagement is growing over 3 months (Month 1: 234 likes, Month 2: 345 likes, Month 3: 456 likes)." Which chart type is BEST for showing trends over time?',
          options: [
            'Bar chart (best for comparison)',
            'LINE CHART (best for showing TRENDS over time) - line goes up, clearly shows growth',
            'Pie chart (shows distribution)',
            'Heatmap (shows patterns)'
          ],
          correct: 1,
          explanation: 'LINE CHART = best for showing TRENDS over time. Want to show: Engagement over 3 months (Month 1: 234 → Month 2: 345 → Month 3: 456). Line chart: X-axis = time (Month 1, 2, 3), Y-axis = engagement (likes), line connects points. Line goes UP (shows growth clearly). CEO instantly sees: Upward trend, engagement growing. Line chart advantages for trends: (1) Shows direction (up = growth, down = decline, flat = stable), (2) Shows rate of change (steep line = fast growth, gentle line = slow growth), (3) Easy to see patterns (consistent growth, seasonal patterns, anomalies). Use line charts for: Sales trends, engagement trends, growth metrics, time series data. Line chart makes trends visible instantly.'
        },
        {
          id: 13,
          question: 'You create bar chart with 50 bars, 10 colors, grid lines, 3D effects, data labels on every bar. CEO: "This is overwhelming. I cannot see the main insight." What makes a good visualization?',
          options: [
            'Shows all data points (more is better)',
            'Is SIMPLE and FOCUSED on message (show top 5, use 2 colors, remove clutter, large fonts, one clear message) - simplicity reveals insights',
            'Is complex to look impressive',
            'Uses many colors to be colorful'
          ],
          correct: 1,
          explanation: 'Good visualization = SIMPLE and FOCUSED on message. Cluttered chart: 50 bars, 10 colors, grid lines, 3D effects. CEO can\'t see main insight (too much clutter). SIMPLIFY: (1) Show TOP 5 (not all 50 - focus on most important), (2) Use 2 colors (highlight customer stories in BLUE, others in GRAY - directs attention), (3) Remove clutter (grid lines, 3D effects, shadows, gradients - remove anything that doesn\'t contribute to message), (4) Large fonts (18pt+ titles, 14pt+ labels - easy to read), (5) One message per chart (don\'t try to show 5 insights in 1 chart - create 5 separate simple charts). Result: CEO sees insight INSTANTLY. Principle: "Less is more." Remove everything except: Data, insight, message. Clutter HIDES insights. Simplicity REVEALS insights. Simplify ruthlessly. Ask: "Does this element contribute to main message?" No? Remove it. Simple visualization = powerful visualization.'
        },
        {
          id: 14,
          question: 'You want to show: "Engagement improved from 340 to 350 likes (+3%)." You create chart with Y-axis starting at 330 (not 0). Result: Looks like huge increase. How do you avoid misleading visualizations?',
          options: [
            'Hide data that does not support your point',
            'Use HONEST axes and scales (start Y-axis at 0, use consistent scales, show all data, appropriate chart types) - honesty builds trust',
            'Manipulate scales to exaggerate improvements',
            'Cherry-pick only successful data points'
          ],
          correct: 1,
          explanation: 'Avoid misleading by using HONEST axes and scales. Misleading chart: Y-axis starts at 330 (not 0). 340 to 350 looks like HUGE increase (bar grows 10× taller). CEO thinks: "Engagement exploded!" Reality: Only +3% increase (small improvement). Dishonest. HONEST chart: Y-axis starts at 0. 340 to 350 looks like small increase (accurate). CEO understands: Small improvement, keep working. Honest. HONEST tactics: (1) Start axes at 0 (show true scale), (2) Consistent scales (same range across charts), (3) Show all data (successes AND failures), (4) Appropriate chart types (2D, not 3D). Honesty builds TRUST. Misleading visuals might impress short-term, but destroy trust long-term. Even if insights less impressive, show them honestly. Integrity matters.'
        },
        {
          id: 15,
          question: 'You create complex visualization with technical jargon (CTR, CPC, ROAS), small fonts (8pt), box plots. Present to CEO. CEO: "I cannot understand this." What should you do?',
          options: [
            'Visualize for yourself (you understand it)',
            'Visualize for YOUR AUDIENCE understanding (CEO needs: simple charts, no jargon, large fonts, context). Know audience, design accordingly.',
            'Visualize for experts only',
            'Visualize to impress with complexity'
          ],
          correct: 1,
          explanation: 'Visualize for YOUR AUDIENCE understanding (not for yourself or to impress). Created: Technical jargon (CTR, CPC, ROAS), complex charts (box plots), small fonts (8pt). CEO can\'t understand (not technical, can\'t read small fonts, doesn\'t know jargon). Designed for YOURSELF. Should design for AUDIENCE (CEO). CEO presentation needs: (1) Simple language (no jargon - explain "Click-through rate" not just "CTR"), (2) Simple charts (bar, line, pie - not box plots, violin plots), (3) Large fonts (18pt+ titles, 14pt+ labels - CEO can read easily), (4) Context ("Here\'s our Instagram performance over 3 months"). Different audiences need different visualizations: CEO (non-technical) = simple charts, no jargon, large fonts. Data team (technical) = complex charts OK, jargon OK. Before creating visualization, ask: Who is my audience? What do they know? What do they need? Design for THEM. Result: Audience understands, engages, acts on insights.'
        }
      ]
    },
    challenge: {
      title: 'Data Visualization Challenge',
      description: 'Transform numbers into visual stories',
      contexts: {
        academic: {
          title: 'Visual Storytelling Kit',
          description: 'Analyzed 500 students: 10 insights found. Professor: "Present to class, 20min, make it visual, memorable." Turn data into compelling story.',
          instructions: [
            '• Pick top 3 insights: 10 found, pick 3 best (attendance 90%+ = 8.2 GPA, online 7.8 vs group 6.8, jobs >20hr = 6.3)—focus beats overload',
            '• Right chart types: Comparison = bar chart, trends = line, proportions = pie—3 bar charts show insights instantly',
            '• Simple visuals: 2 colors (highlight key green/blue, rest gray), 24pt titles, no clutter, no 3D—class sees insight FAST',
            '• Story structure: Problem→findings→insights→recommendations→impact (8 slides)—class follows narrative, remembers, acts',
            '• Share and go viral: Post 3 charts WhatsApp/Instagram "What affects GPA"—500 likes, 50 students helped, A+ grade!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Wrong chart: Pie for comparison—hard to see differences, use bar chart',
            '• Cluttered: 50 categories, 10 colors, 3D effects—overwhelming, show top 5, 2 colors only',
            '• No story, just charts: Class confused what to do—structure as story, clear narrative',
            '• Misleading: Truncate Y-axis, exaggerate—dishonest, lost trust, start axes at 0',
            '• Technical for students: Jargon, complex charts—they can\'t understand, keep simple, relatable'
          ],
          successCriteria: [
            '✅ Top 3 insights: Most important picked from 10, focused presentation',
            '✅ Right charts: Bar for comparisons, clear insights visible immediately',
            '✅ Simple visuals: 2 colors, 24pt fonts, no clutter, clean message',
            '✅ Story works: Class engaged, remembers 3 insights, 10 students act',
            '✅ A+ grade + viral: Professor praises, 500 likes, 50 students helped'
          ]
        },
        professional: {
          title: 'Board-Ready Visual Boss',
          description: 'Analyzed 10K transactions: 15 insights. Board 30min. CEO: "Drive ₹10L budget decision." Turn insights into ₹10L approval + job offer.',
          instructions: [
            '• Pick top 5 for board: 15 insights→5 best (Electronics 32%, age 18-25 = 40%, email ROI 4:1, repeat 20% = 60% revenue)—drive decision',
            '• Impactful charts: Pie (Electronics 32% blue slice), bar (age/ROI comparison), line (₹5L→₹12L growth), donut (repeat customers)—instant impact',
            '• Professional polish: 24pt titles, 2 colors, company branding, no clutter—board sees insights from distance, looks executive',
            '• Story builds to ASK: Hook "₹5L opportunity"→insights→recommendations→"Need ₹10L budget, 4:1 ROI = ₹40L return"—board approves',
            '• Deliver + job offer: ₹42L revenue (4.2:1 ROI as predicted!), repeat 20%→28%—CEO offers full-time job after graduation!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Show all 15: Information overload, no decision—pick top 5 only, focused',
            '• Wrong charts: Line for comparison, pie for trends—insights hidden, match chart to purpose',
            '• Cluttered: 50 bars, 10 colors, grid lines—board overwhelmed, keep 2 colors, clean',
            '• No story, just charts: Board confused what to do—structure story, clear ask',
            '• Don\'t ask for budget: Present insights, no action—end with clear ask: ₹10L, ₹40L return'
          ],
          successCriteria: [
            '✅ Top 5 insights: Highest business impact picked from 15, focused',
            '✅ Professional charts: Pie/bar/line, 24pt fonts, branded, clean—board-ready',
            '✅ Story drives decision: Hook→insights→ask ₹10L→board approves immediately',
            '✅ Impact proven: ₹42L revenue, 4.2:1 ROI, repeat 20%→28%—predictions accurate',
            '✅ Job offer: CEO recognizes expertise, offers full-time after graduation'
          ]
        },
        personal: {
          title: 'Convince Friends Visually',
          description: 'You saved ₹42K/year tracking expenses. 3 friends skeptical. Show them: Food 40%, dining 2× groceries, weekends 2× weekdays. Convince them to track.',
          instructions: [
            '• Top 3 for friends: 8 insights→3 shocking (Food 40%, dining ₹4K vs groceries ₹2K, weekends ₹800 vs ₹400, subscriptions ₹9K/yr)—relatable',
            '• Simplest charts: Pie (Food 40% big slice), bars (dining vs groceries, weekend vs weekday)—friends not analysts, instant understanding',
            '• Visual story 10min: Hook "I saved ₹42K"→problem→solution→3 charts→action→results—friends see: tracking works, savings possible',
            '• Make it relatable: "You eat out 60×/mo too? Save ₹2K!" "Download Walnut app, I\'ll help analyze"—their examples, easy action',
            '• Help + create course: 3 friends save ₹5.3K/mo, create course ₹50K revenue—helped 100 students save ₹30-40L total!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Technical charts: Box plots, scatter—friends confused, use pie/bar only, simple',
            '• Not relatable: Show your data only—"doesn\'t apply to me," use THEIR examples',
            '• No potential shown: Your ₹42K savings only—not motivated, show "You save ₹30-40K too!"',
            '• Make it hard: Complex tools—they don\'t start, make easy "Download Walnut, I help"',
            '• Don\'t follow up: Convince but not help analyze—they track, no savings, help them visualize'
          ],
          successCriteria: [
            '✅ Top 3 relatable: Food/dining/weekends/subscriptions—friends shocked, convinced',
            '✅ Simple charts: Pie/bar only, anyone understands instantly, no confusion',
            '✅ Story convinces: All 3 friends download Walnut app, start tracking immediately',
            '✅ You help analyze: All 3 save ₹5.3K/month total = ₹63.6K/year together',
            '✅ Course ₹50K: 100 students helped save ₹30-40L total, massive social impact'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📊 Choose Right Chart Types: You match chart type to purpose. Comparison → bar chart. Trends → line chart. Proportions → pie chart. Correlation → scatter plot. Patterns → heatmap. Example: Want to compare customer stories vs product posts? You use bar chart (heights show difference clearly). Want to show engagement trend? You use line chart (line shows growth clearly). You understand: Right chart makes insight OBVIOUS. Wrong chart hides insight.',
        '🎨 Create Simple, Clear Visualizations: You simplify ruthlessly. Show top 5 (not all 50), use 2 colors (highlight key insight in blue, rest in gray), remove clutter (grid lines, 3D effects, shadows), large fonts (18pt+ titles, 14pt+ labels), one message per chart. Result: Audience sees insight INSTANTLY (not distracted by clutter). You understand: Clutter hides insights. Simplicity reveals insights. Less is more.',
        '📖 Tell Stories with Data: You structure presentations as STORY (not just charts). Problem → Analysis → Insights → Recommendations → Impact. Example: "Our engagement is low (problem). We analyzed 1000 posts (analysis). Customer stories perform 2× better (insight). Post 70% customer stories (recommendation). Expect +45% engagement (impact)." Story makes presentation: Engaging (audience follows narrative), memorable (audience remembers key points), actionable (audience knows what to do). You understand: Charts without story = meaningless. Charts with story = powerful.',
        '✅ Use Honest Visualizations: You create honest visuals (start axes at 0, consistent scales, show all data, appropriate chart types). You do not mislead (truncate axes, cherry-pick data, use 3D pie charts). Example: Engagement improved 340 → 350 (+3%). You show honestly (Y-axis 0-400, small improvement visible). You do not exaggerate (Y-axis 330-360, makes +3% look huge). You understand: Honesty builds trust. Misleading visuals destroy trust. Even if insights are less impressive, show them honestly. Integrity matters.',
        '👥 Design for Your Audience: You adapt visualizations to audience. CEO (non-technical): Simple charts, no jargon, large fonts, business focus. Data team (technical): Complex charts OK, jargon OK, detailed analysis. Students (mixed): Simple charts, relatable examples, visual appeal. You ask: Who is my audience? What do they know? What do they need? You design for THEM (not for yourself). You understand: Same data, different audiences = different visualizations. Know audience. Design accordingly.'
      ],
      improvements: [
        '🎨 Master Advanced Visualization Tools: You use Excel (basic charts). Good. But learn ADVANCED tools: (1) Tableau (powerful visualization tool, interactive dashboards, free public version - learn: 30 hours), (2) Power BI (Microsoft business intelligence, create dashboards, free version - learn: 30 hours), (3) Python (matplotlib, seaborn libraries for custom visualizations - learn: 40 hours), (4) D3.js (JavaScript library for interactive web visualizations - learn: 40 hours), (5) Flourish, Datawrapper (free online tools for beautiful charts - learn: 10 hours). Advanced tools enable: Interactive dashboards (users can filter, drill down), custom visualizations (not limited to Excel chart types), web-based visualizations (embed in websites, share links), animations (show how data changes over time). Invest 150 hours over 6 months. Become visualization power user.',
        '📊 Study Data Visualization Best Practices: You know basics (right chart type, simplicity, storytelling). Good. But study BEST PRACTICES: (1) Read "Storytelling with Data" by Cole Nussbaumer Knaflic (learn how to tell compelling data stories), (2) Read "The Visual Display of Quantitative Information" by Edward Tufte (learn visualization principles), (3) Follow data viz experts (Nathan Yau, Alberto Cairo, Andy Kirk - learn from their work), (4) Analyze excellent visualizations (New York Times graphics, FiveThirtyEight, The Economist - what makes them effective?). Extract principles: Color usage, typography, layout, annotations, storytelling techniques. Apply to your visualizations. Practice: Recreate 20 excellent visualizations (learn techniques). Result: Your visualizations improve from good to EXCELLENT.',
        '🎯 Practice Interactive Visualizations: You create static charts (Excel, PowerPoint). Good. But learn INTERACTIVE: (1) Tableau dashboards (users can filter by date, category, region - explore data themselves), (2) Power BI reports (drill down from high-level to details), (3) Web-based visualizations (D3.js, Plotly - users can hover for details, click to filter). Interactive benefits: (1) Engagement (users explore data, not just view), (2) Flexibility (users answer their own questions), (3) Depth (show high-level + details - users drill down if interested). Example: Sales dashboard (interactive): Top level shows: Total revenue ₹25L. User clicks "Electronics" → drills down to Electronics revenue by month. User clicks "Month 3" → sees individual transactions. Interactive enables: Self-service analytics (users explore without asking you). Learn Tableau (30 hours). Create 5 interactive dashboards. Master interactive visualization.',
        '📖 Improve Data Storytelling: You tell stories with data (problem → insights → recommendations). Good. But improve STORYTELLING: (1) Use ANALOGIES (explain complex patterns using simple analogies: "Our customer base is like iceberg - 20% visible (active customers), 80% hidden (inactive customers)"), (2) Use ANNOTATIONS (add text to charts explaining key points: "This spike = viral post, celebrity shared"), (3) Use PROGRESSIVE DISCLOSURE (start with high-level insight, progressively reveal details), (4) Use EMOTIONAL CONNECTION (show human impact: "This ₹5L revenue = 10 new jobs created"), (5) Use CALL TO ACTION (end with clear next steps: "Here is what YOU should do..."). Great storytelling: Audience understands (clear), remembers (memorable), feels (emotional), acts (motivated). Practice: Present same analysis to 10 different audiences. Adapt story each time. Improve storytelling.',
        '🎨 Develop Design Sense: You create functional visualizations (communicate insights). Good. But develop DESIGN SENSE (make them beautiful): (1) Learn color theory (complementary colors, color psychology, accessibility - colorblind-friendly palettes), (2) Learn typography (font pairing, hierarchy, readability), (3) Learn layout (white space, alignment, balance), (4) Learn visual hierarchy (what should audience see first? second? third?), (5) Study beautiful visualizations (Dribbble, Behance - see what designers create). Beautiful + functional = powerful. Ugly + functional = people do not engage. Beautiful + non-functional = useless. Aim for: Beautiful + functional. Take design course (20 hours: Coursera, Skillshare). Practice: Recreate 10 beautiful visualizations. Develop design sense. Your visualizations become: Clear (communicate insights) + beautiful (engage audience).'
      ],
      nextSteps: [
        '📚 Take Data Visualization Course: Enroll in: (1) "Data Visualization" by Coursera (30 hours - learn principles, chart types, storytelling), (2) "Tableau for Beginners" (20 hours - learn Tableau, create dashboards), (3) "Power BI Essentials" (20 hours - learn Power BI, create reports), (4) "Storytelling with Data" workshop (10 hours - learn how to tell compelling data stories). Total: 80 hours over 3 months. Apply: Create visualizations using Tableau/Power BI, tell better stories with data, design for different audiences. Result: Professional-quality visualizations, compelling presentations, drive decisions.',
        '🧠 Practice 50 Visualizations: Create 50 visualizations over 6 months (internship data, college projects, personal data, public datasets). For each: (1) Identify insight (what do I want to show?), (2) Choose chart type (bar, line, pie, scatter, heatmap), (3) Simplify (top 5, 2 colors, remove clutter), (4) Add clear title and labels, (5) Test with 3 people (do they get insight instantly?). Track: Chart type used, insight communicated, audience feedback, what worked, what did not. After 50 visualizations, you will master data visualization. You will know: Which chart for which purpose, how to simplify, how to design for audience.',
        '📊 Build Data Visualization Portfolio: Document your best visualizations. Create portfolio: (1) Instagram campaign analysis (bar chart showing customer stories perform 2× better), (2) Sales data analysis (5 charts driving ₹10L budget decision), (3) Personal finance analysis (pie + bar charts showing spending patterns), (4) Student performance analysis (bar charts showing attendance matters most). For each: Problem, visualization, insight, impact. Share on LinkedIn, personal website, Behance, Dribbble. Portfolio demonstrates: Visualization expertise, storytelling skills, business impact. Use for: Job applications (data analyst, business analyst roles), freelance work (attract clients), personal brand (become known as visualization expert).',
        '🎓 Create Data Visualization Course: Document your expertise. Create online course: "Data Visualization for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Choose right chart type (bar, line, pie, scatter, heatmap - when to use each), (2) Module 2: Simplify visualizations (show top 5, use 2 colors, remove clutter), (3) Module 3: Tell stories with data (problem → insights → recommendations → impact), (4) Module 4: Avoid misleading visuals (honest axes, consistent scales), (5) Module 5: Design for audience (CEO vs data team vs clients). Sell to 200 students = ₹2L revenue. Help 200 students master visualization. Build reputation as expert.',
        '💼 Offer Data Visualization Services: Freelance data visualization specialist. Service: "I transform your data into compelling visual stories. ₹5000/project (8 hours)." Target: Startups (visualize metrics for investors), businesses (create dashboards), students (visualize research). Process: (1) Understand data and goals, (2) Identify key insights, (3) Choose chart types, (4) Create visualizations (Tableau, Excel, PowerPoint), (5) Build story (problem → insights → recommendations). Month 1: 3 clients, ₹15K. Month 6: 8 clients, ₹40K. Month 12: 15 clients, ₹75K. You help 15 organizations communicate insights. You earn ₹75K. Career opportunities open (data visualization specialist, business intelligence analyst, presentation designer roles).'
      ]
    },
    badge: { name: 'Visualization Expert', emoji: '📉', description: 'Master of data visualization' },
    shareMessage: 'Just mastered data visualization! 📉 #DataViz #DataDriven'
  },
  {
    id: 'hypothesis-testing',
    title: 'Hypothesis Testing',
    emoji: '🔬',
    context: 'academic' as const,
    discover: {
      scenario: "Marketing intern. Manager: 'Email open 15%, test new subject lines.' Change, send 50. 18% open. Report: 'Success!' Manager: 'Control group? Significance? Sample 50 = too small (need 1000+). You assumed, didn't test. 18% might be random.'",
      problemExplanation: [
        "Assume without testing: Add testimonials. 2.3%→2.5% conversions. Report: 'Success!' Manager: 'TEST or assume? Fluctuates 2.1-2.7%. Could be random. Need control group'",
        "Confirmation bias: Test only 7 PM (8/10 high). Ignore 2 failures. Don't test 9 AM, 12 PM. Only test what you believe. Maybe 9 AM better?",
        "No systematic test: Week 1: subject lines (50). Week 2: design (30). Week 3: button (40). Different samples, no control, no stats. Can't tell what worked",
        "Jump to conclusions: 100 people, 15% vs 18%. Report: 'B wins!' Manager: 'Significant? Sample 100 = small. Need 1000+, p-value.' With 1000: p=0.08 (NOT significant). Wrong conclusion"
      ],
      solutionApproach: [
        "Clear hypothesis: Not 'subject lines matter' (vague). 'Personalized subject lines increase open 15%→20%' (testable). If change X, then Y happens. Specific numbers",
        "Rigorous test: Control (old, 1000 people) vs Test (new, 1000). Randomize. Same time, same audience. Isolate one variable. 2 weeks duration. Compare results",
        "Systematic data: Sample 1000+ per group (not 50). Random assignment. Consistent measurement. Track all outcomes (don't exclude). Large sample = reliable",
        "Objective analysis: Control 15.2%, Test 18.5%. Run statistical test: p=0.01 (< 0.05 = SIGNIFICANT!). Not eyeball. Evidence-based conclusion, not gut feeling"
      ]
    },
    video: {
      title: 'Stop Guessing, Start Testing: Hypothesis Testing for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR ASSUMPTIONS ARE WRONG

"You are Marketing intern. Manager: 'Our email open rate is 15%. I think changing subject lines will improve it. Test this.' You change subject lines. Send 50 emails. Open rate: 18%. You report: 'Success! Subject lines work!' Manager: 'Wait. Did you test properly? Control group? Statistical significance? Sample size 50 is too small. You just assumed it worked.' You realize: You made claim based on assumption (not rigorous testing). By the end of this video, you will master hypothesis testing. Stop guessing. Start testing. Let us fix this."

[0:45-2:15] STEP 1: FORM CLEAR, TESTABLE HYPOTHESIS

"Manager: 'I think subject lines matter.'

This is VAGUE. Not testable.

FORM CLEAR HYPOTHESIS:

'If I change subject lines from GENERIC to PERSONALIZED, then email open rate will increase from 15% to 20%.'

Components:
- Independent variable (what you CHANGE): Subject lines (generic → personalized)
- Dependent variable (what you MEASURE): Open rate
- Predicted direction: INCREASE
- Specific numbers: 15% → 20%

Also form NULL HYPOTHESIS:

'Changing subject lines will NOT affect open rate (will remain 15%).'

Your test will determine: Does data support your hypothesis? Or null hypothesis?

CLEAR hypothesis = testable.
VAGUE hypothesis = not testable."

[2:15-4:00] STEP 2: DESIGN RIGOROUS TEST (Control + Test Groups)

"Now design test.

BAD TEST:
- Send new subject lines to 50 people
- No control group
- Small sample

Result: Cannot draw valid conclusions.

GOOD TEST (A/B Test):

1. CONTROL GROUP: 1000 people get OLD subject lines (generic)
2. TEST GROUP: 1000 people get NEW subject lines (personalized)
3. RANDOMIZATION: Randomly assign people to control vs test (eliminates bias)
4. LARGE SAMPLE: 1000+ per group (reduces random variation)
5. CONTROL VARIABLES: Send at same time, same day, same audience (isolate effect of subject lines ONLY)
6. DURATION: Run for 2 weeks (account for day-to-day variation)

Measure: Open rate for BOTH groups.

Compare: Is test group SIGNIFICANTLY better?

Good test design = valid conclusions."

[4:00-5:30] STEP 3: ANALYZE WITH STATISTICAL SIGNIFICANCE TEST

"Test results:
- Control group: 152 open out of 1000 (15.2% open rate)
- Test group: 185 open out of 1000 (18.5% open rate)
- Difference: +3.3%

Is this SIGNIFICANT? Or random variation?

Run STATISTICAL TEST (Chi-square or t-test).

Use online calculator or Excel.

Result: p-value = 0.01

INTERPRETATION:
- p-value < 0.05 = SIGNIFICANT (difference is real, not random)
- p-value > 0.05 = NOT significant (difference could be random)

Your p-value = 0.01 (< 0.05) = SIGNIFICANT!

Conclusion: New subject lines DO improve open rate (not random).

Do NOT just eyeball: '18.5% looks bigger than 15.2%'

Use STATISTICAL TEST. Check p-value.

p < 0.05 = significant. p > 0.05 = not significant."

[5:30-6:45] STEP 4: DRAW EVIDENCE-BASED CONCLUSION

"Based on test results, draw conclusion.

Results:
- Control: 15.2%
- Test: 18.5%
- Difference: +3.3%
- p-value: 0.01 (SIGNIFICANT)

CONCLUSION:

'Personalized subject lines significantly improve email open rate from 15.2% to 18.5% (+3.3%, p < 0.05).

RECOMMENDATION: Implement personalized subject lines for all emails.

EXPECTED IMPACT: If we send 10,000 emails/month, we will get 330 more opens/month (1,850 vs 1,520).'

Evidence-based conclusion includes:
1. What you found (18.5% vs 15.2%)
2. Statistical significance (p < 0.05)
3. Recommendation (implement personalized subject lines)
4. Expected impact (330 more opens/month)

Do NOT conclude based on: Gut feeling, small sample, confirmation bias.

Conclude based on: Rigorous test, statistical significance, evidence."

[6:45-7:45] STEP 5: ITERATE (Keep Testing)

"Hypothesis testing is CONTINUOUS.

TEST 1: 'Personalized subject lines improve open rate.'
Result: YES (15% → 18%, p < 0.05). IMPLEMENT.

TEST 2: 'Adding emojis to subject lines improves open rate.'
Test: Control (personalized, no emoji): 18%, Test (personalized + emoji): 17%.
Result: NO (emoji decreased open rate, p = 0.15, not significant). DO NOT implement.

TEST 3: 'Sending at 9 AM (vs 6 PM) improves open rate.'
Test: Control (6 PM): 18%, Test (9 AM): 22%.
Result: YES (9 AM better, p < 0.01). IMPLEMENT.

Continuous testing: Test → Analyze → Implement if works → Test next → Repeat.

Each test improves performance.

Never stop testing. Always be learning."

[7:45-8:00] YOUR CHALLENGE (Test One Hypothesis)

"Here is your action step: Form ONE hypothesis about your work/study/life.

Example: 'Studying in morning (vs evening) improves retention.'

Design test:
1. Control: Study 10 topics in evening
2. Test: Study 10 topics in morning
3. Measure: Retention (quiz score next day)
4. Compare: Morning vs evening
5. Check significance

RESULT: You learn to test (not assume).

Hypothesis testing is superpower. Master it now."

[End Screen: "Next Video: Metrics & KPIs - Measure What Matters"]`,
      content: [
        'Form Clear Hypotheses: Testable statement (If I change X, then Y will happen) with specific numbers',
        'Design Rigorous Tests: Control group + test group, randomization, large sample (1000+ per group), control variables',
        'Gather Data Systematically: Sufficient sample size, random sampling, consistent measurement, complete data',
        'Analyze Objectively: Use statistical tests (chi-square, t-test), check p-value (p < 0.05 = significant), calculate confidence intervals',
        'Draw Evidence-Based Conclusions: Based on statistical significance (not gut feeling), include recommendations and expected impact',
        'Iterate Continuously: Test → Analyze → Implement if works → Test next hypothesis → Repeat (continuous improvement)',
        'B.Com Applications: A/B testing (emails, ads, posts), product testing, marketing experiments, business decisions'
      ]
    },
    quiz: {
      title: 'Hypothesis Testing Quiz',
      questions: [
        {
          id: 16,
          question: 'Manager: "I think personalized subject lines will improve email open rate." You need to test this. What is a hypothesis?',
          options: [
            'A proven fact that is already confirmed',
            'A TESTABLE STATEMENT to validate or refute with data (If I change subject lines from generic to personalized, open rate will increase from 15% to 20%)',
            'A wild guess with no basis',
            'A final conclusion'
          ],
          correct: 1,
          explanation: 'Hypothesis = TESTABLE STATEMENT to validate or refute with data. Manager says: "I think personalized subject lines will improve open rate." This vague belief. Form CLEAR HYPOTHESIS: "If I change subject lines from GENERIC to PERSONALIZED, then email open rate will increase from 15% to 20%." Hypothesis components: (1) Independent variable (what CHANGE: subject lines), (2) Dependent variable (what MEASURE: open rate), (3) Predicted direction (increase), (4) Specific numbers (15% → 20%). Hypothesis TESTABLE: Run A/B test (control: generic subject lines, test: personalized subject lines), measure open rates, compare, determine if hypothesis supported or refuted. Form clear hypotheses before testing. Vague belief ("subject lines matter") → Clear hypothesis ("personalized subject lines increase open rate from 15% to 20%"). Clear hypothesis = testable. Vague belief = not testable.'
        },
        {
          id: 17,
          question: 'You form hypothesis: "Personalized subject lines increase open rate from 15% to 20%." You also need null hypothesis. What does null hypothesis state?',
          options: [
            'Your theory that subject lines work',
            'NO EFFECT or relationship exists (subject lines will NOT affect open rate, will remain 15%) - default assumption to test against',
            'Positive result you expect',
            'Your personal belief'
          ],
          correct: 1,
          explanation: 'Null hypothesis = states NO EFFECT or relationship exists (default assumption). Your hypothesis: "Personalized subject lines increase open rate from 15% to 20%." Null hypothesis: "Changing subject lines will NOT affect open rate (will remain 15%)." Hypothesis testing logic: (1) Start with null hypothesis (assume no effect), (2) Collect data, (3) Analyze: Is there enough evidence to REJECT null hypothesis? If YES (p < 0.05) → Reject null, accept your hypothesis (subject lines DO affect open rate). If NO (p > 0.05) → Can\'t reject null (subject lines do NOT significantly affect open rate). Null hypothesis = skeptical default position ("nothing works until proven otherwise"). Your hypothesis = what want to prove. Test determines: Can reject null? Or not? Always state both: Your hypothesis (what think will happen) and null hypothesis (no effect). Test data against null. If data strongly contradicts null (p < 0.05), reject null, accept your hypothesis.'
        },
        {
          id: 18,
          question: 'Manager: "Test if personalized subject lines improve open rate." Why do we test hypotheses?',
          options: [
            'To confirm our existing beliefs',
            'To OBJECTIVELY VALIDATE or REFUTE with data (find truth, not confirm bias) - make evidence-based decisions',
            'To prove we are right',
            'To impress others with testing'
          ],
          correct: 1,
          explanation: 'Test hypotheses to OBJECTIVELY VALIDATE or REFUTE with data (not to confirm beliefs or prove you\'re right). Purpose: Find TRUTH (does personalized subject line work? Or not?). Not: Confirm what already believe. Might believe: "Personalized subject lines work." But belief ≠ truth. Test reveals truth: Control (generic): 15.2%, Test (personalized): 18.5%, p = 0.01 (significant). Conclusion: Personalized subject lines DO work (belief confirmed by data). Alternative outcome: Control 15.2%, Test 15.8%, p = 0.45 (not significant). Conclusion: Personalized subject lines do NOT significantly improve open rate (belief refuted by data). Hypothesis testing protects from: (1) Confirmation bias (seeing what want to see), (2) Assumptions (thinking something works without proof), (3) Wasted effort (implementing changes that don\'t work). Test to find truth (not to confirm beliefs). Be open to: Hypothesis confirmed (it works!) or refuted (it doesn\'t work). Either outcome valuable learning.'
        },
        {
          id: 19,
          question: 'You believe: "Posting at 7 PM gets more engagement." You test: Post 10 times at 7 PM. Results: 8 posts succeed, 2 fail. You report: "7 PM works!" Manager: "What about 9 AM? Did you test?" You: "No." This is confirmation bias. What is confirmation bias?',
          options: [
            'Good practice for testing',
            'SEEKING ONLY DATA that confirms beliefs (test only 7 PM, ignore 2 failures, do not test alternatives) - leads to biased conclusions',
            'Objective analysis approach',
            'Proper scientific testing'
          ],
          correct: 1,
          explanation: 'Confirmation bias = SEEKING ONLY DATA that confirms beliefs (leads to biased conclusions). Believe: "7 PM works." Confirmation bias: (1) Only test 7 PM (don\'t test 9 AM, 12 PM, 3 PM - maybe they work better?), (2) Focus on 8 successes (ignore 2 failures), (3) Conclude "7 PM works" (without comparing to alternatives). Proper test: Post 10 times at 7 PM, 10 times at 9 AM, 10 times at 12 PM, 10 times at 3 PM (40 posts total). Compare average engagement for each time. Results might show: 9 AM average 600 likes (best!), 7 PM average 450 likes, 12 PM average 400 likes, 3 PM average 350 likes. Conclusion: 9 AM BEST (not 7 PM). Initial conclusion was WRONG (confirmation bias - only tested belief, didn\'t test alternatives). Avoid confirmation bias: (1) Test alternatives (not just belief), (2) Look at all data (successes AND failures), (3) Be open to being wrong (maybe belief incorrect). Objective testing > confirming beliefs.'
        },
        {
          id: 20,
          question: 'You tested: Personalized subject lines (Control 15.2%, Test 18.5%, p = 0.01 significant). How should you draw conclusions?',
          options: [
            'Based on gut feeling about what works',
            'Based on EVIDENCE from systematic testing (p < 0.05 = significant, implement personalized subject lines, expect 330 more opens/month)',
            'Based on personal opinions',
            'Based on hopes and wishes'
          ],
          correct: 1,
          explanation: 'Draw conclusions based on EVIDENCE from systematic testing (not gut feeling, opinions, or hopes). Test: Control 15.2%, Test 18.5%, Difference +3.3%, p-value 0.01 (< 0.05 = SIGNIFICANT). EVIDENCE-BASED CONCLUSION: "Personalized subject lines significantly improve email open rate from 15.2% to 18.5% (+3.3%, p < 0.05). Recommendation: Implement personalized subject lines for all emails. Expected impact: 10,000 emails/month → 330 more opens/month." Conclusion based on: (1) Rigorous test (control + test groups, n=1000 each, randomized), (2) Statistical significance (p < 0.05), (3) Sufficient sample (1000 per group), (4) Objective analysis (not biased). Do NOT conclude based on: Gut feeling ("I think it works"), small sample (50 emails), confirmation bias (only looking at successes), assumptions (no testing). Evidence-based conclusions = reliable, actionable, trustworthy. Assumption-based conclusions = unreliable, risky, often wrong. Always test. Always use evidence. Make data-driven decisions.'
        }
      ]
    },
    challenge: {
      title: 'Hypothesis Testing Challenge',
      description: 'Stop assuming, start testing with evidence',
      contexts: {
        academic: {
          title: 'Test, Don\'t Assume Kit',
          description: 'You believe: "Group study > solo study." Professor: "Don\'t assume. TEST rigorously." Design experiment, collect data, analyze. Find: Group 7.5, Solo 7.3, p=0.12 NOT significant!',
          instructions: [
            '• Clear hypothesis: "Group GPA > Solo GPA by 0.5pts"—specific, testable, null hypothesis ready',
            '• Rigorous design: n=200 (100 per group), randomize (no bias), 1 semester, control variables (same hours, subjects)—isolates effect',
            '• Collect data: Group 7.5, Solo 7.3, difference +0.2—systematically monitored',
            '• T-test: p=0.12 > 0.05 NOT significant!—hypothesis REFUTED, you were WRONG, accept it (scientific thinking)',
            '• Form new hypothesis: "Online resources > no online"—test: Online 7.8, No 6.9, p=0.003 SIGNIFICANT!—A grade, mastered testing',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• No randomization: Let students choose—biased (motivated pick group), randomly assign always',
            '• Small sample: n=20 (10 per group)—unreliable, use 100+ per group minimum',
            '• Don\'t control variables: Group gets tutoring, solo doesn\'t—can\'t isolate, control everything except test variable',
            '• Confirmation bias: Only see successful group students—biased, analyze ALL data objectively',
            '• Reject refutation: p>0.05 but still say "group works"—wrong, accept refutation, form new hypothesis'
          ],
          successCriteria: [
            '✅ Clear hypothesis: Group > Solo by 0.5pts, specific and testable',
            '✅ Rigorous experiment: n=200, randomized, controlled, 1 semester completed',
            '✅ Data analyzed: t-test p=0.12 NOT significant, hypothesis REFUTED accepted',
            '✅ New hypothesis: Online 7.8 vs No 6.9, p=0.003 SIGNIFICANT proven',
            '✅ A grade: Professor praises scientific rigor, willingness to be wrong'
          ]
        },
        professional: {
          title: 'A/B Testing Boss',
          description: 'Manager: "Testimonials increase conversions 2.3%→3%? Don\'t assume. TEST." Design A/B test: n=5K each. Results: 2.84%, p=0.04 significant. ₹28.8L/year revenue!',
          instructions: [
            '• Clear hypothesis: "Testimonials 2.3%→3.0%"—specific, testable, null hypothesis (no effect)',
            '• A/B test design: n=5K each group, randomized 50/50, 2 weeks, Google Optimize—isolates testimonial effect',
            '• Run test: Control 2.36% (118/5K), Test 2.84% (142/5K), +0.48%—complete data collected',
            '• Chi-square p=0.04 <0.05 SIGNIFICANT!—testimonials work, CIs don\'t overlap, effect real',
            '• Business impact: ₹28.8L/year revenue (+48 conversions/mo × ₹5K)—CEO job offer, promoted to PM!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague hypothesis: "Group study better"—not testable, be specific "Group>Solo by 0.5pts"',
            '• No randomization: Let students choose—biased, motivated pick group, randomize always',
            '• Small n: 20 students (10 each)—unreliable, use 100+ per group minimum',
            '• Don\'t control: Group gets tutoring, solo doesn\'t—can\'t isolate, control all except test variable',
            '• Stop early: Week 1 winning, stop—premature, run full duration planned, don\'t peek'
          ],
          successCriteria: [
            '✅ Hypothesis clear: Testimonials 2.3%→3% specified, testable formed',
            '✅ Test rigorous: n=5K each, randomized, 2 weeks, controlled perfectly',
            '✅ Significant: p=0.04<0.05, testimonials proven effective, CIs confirm',
            '✅ Impact ₹28.8L: +48 conversions/mo × ₹5K, implemented, results match',
            '✅ Promoted PM: CEO recognizes testing expertise, job offer received'
          ]
        },
        personal: {
          title: 'Test Your Best Time',
          description: 'Believe: "Morning study better." Friend: "TEST it!" Experiment 20 topics: Morning 81.5%, Evening 71.5%, p=0.002 significant! GPA 7.2→8.2!',
          instructions: [
            '• Hypothesis clear: "Morning (6-9AM) > Evening (6-9PM) by 10pts"—testable, specific, null hypothesis (no difference)',
            '• Design experiment: 20 B.Com topics, randomize 10 morning/10 evening (flip coin), 1hr each, same method—isolates time effect',
            '• Conduct 4 weeks: Morning 81.5% avg (10 quizzes), Evening 71.5% avg (10 quizzes), +10pts difference—systematic data',
            '• T-test p=0.002 <0.05 SIGNIFICANT!—morning proven better, hypothesis SUPPORTED, effect real',
            '• Implement + GPA jumps: Study important topics 6-9AM, GPA 7.2→8.2 (+1.0!)—post viral 3K likes, 50 students helped!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Don\'t randomize: Easy topics morning, hard evening—biased, flip coin to assign',
            '• Small sample: 2 topics (1 each)—unreliable, test 10+ per condition minimum',
            '• Don\'t control: 2hr morning, 1hr evening—can\'t isolate time, same 1hr always',
            '• Confirmation bias: Remember morning wins, forget evening wins—write ALL scores objectively',
            '• Assume friend\'s time works for you: Everyone different—TEST for YOURSELF, find YOUR best time'
          ],
          successCriteria: [
            '✅ Hypothesis: Morning>Evening by 10pts specified, testable formed',
            '✅ Experiment: 20 topics randomized, 1hr each, controlled perfectly',
            '✅ Significant: Morning 81.5%, Evening 71.5%, p=0.002 proven',
            '✅ GPA jumps: 7.2→8.2 (+1.0pt), morning study implemented',
            '✅ Help 50: Viral post 3K likes, students test their own best time'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📝 Form Clear, Testable Hypotheses: You form specific hypotheses (not vague beliefs). Example: Not "Subject lines matter" (vague). But "Personalized subject lines increase open rate from 15% to 20%" (clear, testable, specific numbers). You include: Independent variable (what you change), dependent variable (what you measure), predicted direction, specific numbers. You also form null hypothesis (no effect). You understand: Clear hypothesis = testable. Vague belief = not testable.',
        '🔬 Design Rigorous Tests: You design proper tests with: Control group (baseline), test group (new version), randomization (eliminates bias), large sample (1000+ per group), control variables (isolate one change), sufficient duration (2+ weeks). Example: Email A/B test (Control: generic subject lines 1000 people, Test: personalized subject lines 1000 people, randomized, 2 weeks). You understand: Good test design = valid conclusions. Bad test design (no control, small sample, not randomized) = invalid conclusions.',
        '📊 Analyze Objectively with Statistical Tests: You do not just eyeball results ("18.5% looks bigger than 15.2%"). You run statistical tests (chi-square, t-test), check p-value (p < 0.05 = significant), calculate confidence intervals. Example: Test results (Control 15.2%, Test 18.5%), you run t-test, get p = 0.01 (< 0.05 = significant). You conclude: Difference is real (not random). You understand: Statistical tests prevent jumping to conclusions. p < 0.05 = significant. p > 0.05 = not significant.',
        '✅ Draw Evidence-Based Conclusions: You conclude based on evidence (not gut feeling). Your conclusions include: Results (18.5% vs 15.2%), statistical significance (p < 0.05), recommendations (implement personalized subject lines), expected impact (330 more opens/month). You do not conclude based on: Gut feeling, small sample, confirmation bias. You understand: Evidence-based conclusions = reliable, actionable. Assumption-based conclusions = unreliable, risky.',
        '🔄 Iterate Continuously: You test continuously (not just once). Test 1 → Analyze → Implement if works → Test 2 → Repeat. Example: Test personalized subject lines (works, implement), test emojis (does not work, do not implement), test 9 AM sending time (works, implement). Each test improves performance. You understand: Hypothesis testing = continuous improvement process. Never stop testing. Always be learning.'
      ],
      improvements: [
        '📚 Learn Advanced Hypothesis Testing: You know basics (A/B testing, t-test, p-value). Good. But learn ADVANCED: (1) Multivariate testing (test multiple variables simultaneously - subject line + sending time + email design), (2) Bayesian A/B testing (update beliefs based on data, stop test early if clear winner), (3) Sequential testing (continuously monitor, stop when significant), (4) Power analysis (calculate required sample size for desired power), (5) Effect size calculation (Cohen d, odds ratio - quantify practical significance). Take advanced statistics course (40 hours: Coursera). Practice: Run multivariate tests, use Bayesian methods, calculate power. Advanced methods enable: More efficient testing (test multiple variables), early stopping (save time), better decisions (consider both statistical and practical significance).',
        '🛠️ Master A/B Testing Tools: You run A/B tests manually (Excel, online calculators). Good. But learn A/B TESTING TOOLS: (1) Google Optimize (free A/B testing for websites), (2) Optimizely (enterprise A/B testing platform), (3) VWO (visual website optimizer), (4) Mixpanel (product analytics + A/B testing), (5) Amplitude (user analytics + experimentation). Tools enable: Easy test setup (no coding), automatic randomization, real-time results, statistical significance calculation, segmentation (test different user groups). Learn Google Optimize (10 hours). Run 10 A/B tests. Master A/B testing tools. Result: Run tests faster, more reliably, at scale.',
        '🎯 Avoid Common Testing Pitfalls: You run tests. Good. But avoid PITFALLS: (1) PEEKING (checking results before test ends, stopping early if winning - increases false positives), (2) MULTIPLE TESTING (running 20 tests, reporting only 1 that worked - cherry-picking), (3) SMALL EFFECTS (testing for tiny improvements that are not practically meaningful), (4) NOVELTY EFFECT (new version performs better initially, then regresses to baseline), (5) SEASONALITY (running test during holiday season, results do not generalize). Learn these pitfalls. Avoid them. Run tests rigorously: Pre-commit to sample size and duration, do not peek, correct for multiple testing, check practical significance, account for seasonality. Rigorous testing = reliable results. Sloppy testing = false positives, wrong decisions.',
        '📊 Build Experimentation Culture: You test hypotheses. Good. But build CULTURE: (1) Encourage team to test (not assume), (2) Create hypothesis backlog (list of 20 hypotheses to test), (3) Run 1-2 tests/week (continuous experimentation), (4) Share results (weekly meeting: what we tested, what we learned), (5) Celebrate learning (even when hypothesis is refuted - "We learned X does not work, saved us from implementing it"). Experimentation culture: Team tests continuously, learns fast, makes evidence-based decisions, outperforms competitors (who rely on assumptions). In B.Com teams, build experimentation culture. Test everything. Learn continuously. Improve relentlessly.',
        '🔬 Study Experimental Design: You design basic experiments (control + test groups). Good. But study EXPERIMENTAL DESIGN deeply: (1) Read "Designing Experiments" textbook (understand randomization, blocking, factorial designs), (2) Take "Experimental Design" course (30 hours: Coursera - learn advanced designs), (3) Study famous experiments (understand what makes good experiments), (4) Learn causal inference (understand how to establish causation, not just correlation). Deep understanding enables: Design better experiments (control confounding variables, increase power, reduce bias), interpret results correctly (understand limitations, threats to validity), establish causation (not just correlation). Invest 60 hours over 3 months. Become experimental design expert.'
      ],
      nextSteps: [
        '📚 Take Hypothesis Testing Course: Enroll in: (1) "Hypothesis Testing and Confidence Intervals" (20 hours, Coursera - learn t-tests, chi-square, ANOVA, p-values), (2) "A/B Testing" (15 hours, Udacity - learn how to design and run A/B tests), (3) "Experimental Design" (30 hours, learn randomization, control variables, factorial designs), (4) "Bayesian Statistics" (25 hours, learn Bayesian approach to hypothesis testing). Total: 90 hours over 3 months. Apply: Run rigorous hypothesis tests, design better experiments, use Bayesian methods. Result: More reliable testing, better decisions, continuous improvement.',
        '🧠 Run 20 Hypothesis Tests: Test 20 hypotheses over 6 months (work, study, personal life). Examples: (1) "Personalized emails improve open rate", (2) "Video content gets more engagement", (3) "Morning study improves retention", (4) "Exercise improves focus", (5) "Meditation reduces stress". For each: (1) Form clear hypothesis + null hypothesis, (2) Design test (control + test groups, randomization, sample size), (3) Collect data, (4) Analyze (statistical test, p-value, confidence intervals), (5) Conclude (supported or refuted?), (6) Implement if works. Track: Hypothesis, test design, results, p-value, conclusion, implementation. After 20 tests, you will master hypothesis testing. You will know: How to design rigorous tests, avoid common pitfalls, make evidence-based decisions.',
        '📊 Build Hypothesis Testing Portfolio: Document your best tests. Create portfolio: (1) Email subject line A/B test (personalized increased open rate 15% → 18%, p < 0.05, ₹28L revenue impact), (2) Product page testimonials test (increased conversions 2.3% → 2.85%, p < 0.05, ₹28L revenue), (3) Study time experiment (morning improved retention by 10%, p < 0.01, GPA improved 7.2 → 8.2). For each: Hypothesis, test design, results, statistical analysis, conclusion, impact. Share on LinkedIn, personal website, GitHub. Portfolio demonstrates: Hypothesis testing expertise, experimental rigor, business impact. Use for: Job applications (data analyst, product manager, growth marketer roles), consulting (help companies test assumptions), personal brand (become known as rigorous tester).',
        '🎓 Create Hypothesis Testing Course: Document your expertise. Create online course: "Hypothesis Testing for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Form clear hypotheses (testable statements with specific numbers), (2) Module 2: Design rigorous tests (control + test groups, randomization, sample size), (3) Module 3: Analyze with statistical tests (t-test, chi-square, p-values, confidence intervals), (4) Module 4: Draw evidence-based conclusions (based on p-value, include recommendations and impact), (5) Module 5: Iterate continuously (test → analyze → implement → test next). Sell to 200 students = ₹2L revenue. Help 200 students master hypothesis testing. Build reputation as expert.',
        '💼 Offer Hypothesis Testing Services: Freelance experimentation consultant. Service: "I help you test business assumptions rigorously. ₹10,000/test (20 hours)." Target: Startups (test product features), businesses (test marketing campaigns), entrepreneurs (test business ideas). Process: (1) Understand assumption ("We think X will improve Y"), (2) Form hypothesis (clear, testable), (3) Design A/B test (control + test, sample size, duration), (4) Run test (implement, monitor, collect data), (5) Analyze (statistical tests, p-value, confidence intervals), (6) Present findings (supported or refuted, recommendations, expected impact). Month 1: 2 clients, ₹20K. Month 6: 5 clients, ₹50K. Month 12: 10 clients, ₹100K. You help 10 organizations make evidence-based decisions. You earn ₹100K. Career opportunities open (growth marketer, product manager, data scientist roles).'
      ]
    },
    badge: { name: 'Hypothesis Tester', emoji: '🔬', description: 'Expert in evidence-based validation' },
    shareMessage: 'Just mastered hypothesis testing! 🔬 #DataDriven #Science'
  },
  {
    id: 'metrics-kpis',
    title: 'Metrics & KPIs',
    emoji: '🎯',
    context: 'professional' as const,
    discover: {
      scenario: "Social Media intern. Manager: 'Grow Instagram.' Work 3 months. Month 3: 'Progress?' You: '10,000 followers!' Manager: 'Was 9,800. +200 (+2%). Goal? Engagement? Conversions? Revenue? You worked 3 months BLIND. No clear metrics, can't tell if succeeding.'",
      problemExplanation: [
        "No clear metrics: 'Grow Instagram.' Work 3 months. Manager: 'Goal?' You: 'Umm...' No goal. Tracked followers (vanity), not engagement/conversions/revenue (actionable). Can't tell if succeeding",
        "Vanity metrics: Report '10,000 followers!' Manager: 'So what? Can't act on this.' Need: engagement by content type (stories 8%, products 2%) = actionable (post more stories)",
        "Can't track progress: Post daily 3 months. Manager: 'Improving?' You: 'Think so?' Don't track consistently. Should track: M1 4%, M2 4.5%, M3 5% = improving +25%",
        "Only lagging indicators: Track revenue (past results). Too late to fix. Need leading (engagement, CTR) = predict future. Engagement drops → fix NOW, prevent revenue drop"
      ],
      solutionApproach: [
        "SMART goals: Not 'grow Instagram' (vague). 'Increase engagement 5%→7% in 3 months by posting 70% stories.' Specific, Measurable, Achievable, Relevant, Time-bound",
        "Track vanity AND actionable: Vanity (10K followers, 50K likes) = looks good. Actionable (engagement by content: stories 8%, products 2%) = tells what to DO (post more stories)",
        "Consistent tracking: Daily (post performance), Weekly (avg engagement, top 3 posts), Monthly (trends). M1 4%→M2 4.5%→M3 5% = improving +25%. See progress",
        "Leading + lagging: Leading (engagement, CTR) = predict future, fix NOW. Lagging (revenue, conversions) = measure results. Engagement drops → act proactively, prevent revenue drop"
      ]
    },
    video: {
      title: 'From Vanity to Value: Metrics That Matter for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY YOU ARE WORKING BLIND

"You are Social Media Manager intern. Manager: 'Grow Instagram.' You work 3 months. Post daily. Month 3: Manager: 'How are we doing?' You: 'Good! 10,000 followers!' Manager: 'We had 9,800. So +200 (+2%). Is this good? What is our GOAL? What about engagement? Conversions? Revenue? You have been working for 3 months WITHOUT CLEAR METRICS. You do not know: Are we succeeding? What is working? What should we do more/less?' You realize: You worked hard but cannot tell if you are succeeding. By the end of this video, you will master metrics and KPIs. Stop working blind. Start measuring what matters. Let us fix this."

[0:45-2:15] STEP 1: DEFINE SMART GOALS

"Manager: 'Grow Instagram.'

This is VAGUE. Not measurable.

DEFINE SMART GOAL:

'Increase Instagram engagement rate from 5% to 7% (+40%) within 3 months by posting 70% customer stories.'

SMART components:
- SPECIFIC: Engagement rate (not just 'grow')
- MEASURABLE: 5% → 7% (can track)
- ACHIEVABLE: +40% in 3 months (challenging but possible)
- RELEVANT: Engagement drives conversions and revenue
- TIME-BOUND: 3 months (clear deadline)

SMART goal enables:
- Clear target (7%)
- Measurable progress (5% → 5.5% → 6.2% → 7%)
- Accountability (achieved or not?)

Vague goal = cannot measure.
SMART goal = can measure, can achieve."

[2:15-4:00] STEP 2: CHOOSE LEADING + LAGGING INDICATORS

"Track BOTH types.

LAGGING INDICATORS (measure past results):
- Revenue (₹5L/month from Instagram)
- Conversions (100 purchases/month)
- Follower count (10,000)

Lagging = results of your actions (tell you if you succeeded).

LEADING INDICATORS (predict future):
- Engagement rate (5% - if drops, revenue drops next month)
- Click-through rate (1.5% - if drops, conversions drop)
- Posting frequency (7/week - if drops, reach drops)

Leading = predict future (tell you if on track).

Example:
Engagement drops from 5% to 3% (LEADING indicator).
You act immediately (post more customer stories).
Next month: Engagement recovers to 5%, revenue stays stable.

Leading indicator helped you PREVENT revenue drop.

Track BOTH: Leading (act proactively) + Lagging (measure results)."

[4:00-5:30] STEP 3: VANITY vs ACTIONABLE METRICS

"VANITY METRIC: Total likes (50,000).
So what? Cannot act on this.

ACTIONABLE METRIC: Likes by content type.
- Customer stories: 600 likes
- Product posts: 200 likes
- Discount posts: 400 likes

ACTION: Post more customer stories (3× more engagement).

VANITY METRIC: Followers (10,000).
So what?

ACTIONABLE METRIC: Follower growth by content type.
- Customer stories: +50 followers/post
- Product posts: +10 followers/post

ACTION: Post more customer stories.

Actionable metrics answer: 'What should we DO?'
Vanity metrics just look impressive.

Focus on: Metrics that drive decisions.
Ignore: Metrics that just look good."

[5:30-6:45] STEP 4: TRACK CONSISTENTLY + CREATE DASHBOARD

"Do not track sporadically. Track CONSISTENTLY.

Daily: Post performance (likes, comments, engagement rate per post).
Weekly: Aggregate metrics (average engagement this week, top 3 posts).
Monthly: Trends (engagement: Month 1 vs 2 vs 3).

Consistent tracking enables:
- See trends (improving? declining?)
- Spot anomalies (why did engagement drop this week?)
- Make timely decisions (act immediately, not 3 months later)

CREATE DASHBOARD (single view, all key metrics):
1. GOALS (Engagement goal: 7%, current: 5%, progress: 71%)
2. LEADING INDICATORS (Engagement: 5%, CTR: 1.5%, Posting: 7/week)
3. LAGGING INDICATORS (Revenue: ₹5L, Conversions: 100, Followers: 10K)
4. TRENDS (Line charts: engagement over 3 months)
5. BREAKDOWN (Bar charts: engagement by content type)

Dashboard = command center for data-driven decisions."

[6:45-7:45] STEP 5: USE METRICS TO DRIVE DECISIONS

"Metrics are not just for reporting. Use to DRIVE DECISIONS.

Example:
You track engagement by content type.
Find: Customer stories (8%), Product posts (2%), Discount (5%).

DECISION: 'Post 70% customer stories, 20% discount, 10% product.'

Implement.

Next month: Average engagement improves 5% → 6.5% (+30%!).

Metrics → Insights → Decisions → Actions → Results.

This is DATA-DRIVEN decision making.

Without metrics: Decisions based on gut feeling (often wrong).
With metrics: Decisions based on data (more reliable).

Use metrics to drive EVERY decision."

[7:45-8:00] YOUR CHALLENGE (Define Your Metrics)

"Here is your action step: Pick ONE project (work/study/personal).

Define:
1. SMART goal (specific, measurable, achievable, relevant, time-bound)
2. 3 leading indicators (predict future)
3. 2 lagging indicators (measure results)
4. Track for 1 month

RESULT: You learn to measure progress, make data-driven decisions.

Metrics = superpower. Master them now."

[End Screen: "Next Video: Evidence-Based Decisions - Data + Judgment"]`,
      content: [
        'Define SMART Goals: Specific, Measurable, Achievable, Relevant, Time-bound (not vague "grow Instagram")',
        'Choose Leading Indicators: Predict future (engagement rate, CTR, posting frequency) - act proactively',
        'Choose Lagging Indicators: Measure results (revenue, conversions, followers) - confirm success',
        'Vanity vs Actionable: Vanity (total likes) looks good but not actionable. Actionable (likes by content type) drives decisions',
        'Track Consistently: Daily (post metrics), weekly (aggregates), monthly (trends) - see progress, spot anomalies',
        'Create Dashboard: Single view with goals, leading/lagging indicators, trends, breakdowns - command center',
        'Use Metrics to Drive Decisions: Metrics → Insights → Decisions → Actions → Results (data-driven, not gut feeling)',
        'B.Com Applications: Social media metrics, sales KPIs, academic progress tracking, personal goal measurement'
      ]
    },
    quiz: {
      title: 'Metrics & KPIs Quiz',
      questions: [
        {
          id: 21,
          question: 'Manager: "Grow our Instagram." You work 3 months. Manager: "How are we doing?" You: "Good! 10,000 followers!" Manager: "What was our GOAL? 15,000? 20,000? You did not define SMART goal." What are SMART goals?',
          options: [
            'Simple goals that anyone can achieve',
            'SPECIFIC, MEASURABLE, ACHIEVABLE, RELEVANT, TIME-BOUND goals (Increase engagement from 5% to 7% in 3 months)',
            'Smart people goals for intelligent teams',
            'Easy goals that require no effort'
          ],
          correct: 1,
          explanation: 'SMART goals = SPECIFIC, MEASURABLE, ACHIEVABLE, RELEVANT, TIME-BOUND. Manager says: "Grow Instagram." This VAGUE (what does "grow" mean? How much? By when?). SMART GOAL: "Increase Instagram engagement rate from 5% to 7% (+40%) within 3 months by posting 70% customer stories." SMART components: (1) SPECIFIC: Engagement rate (not just "grow"), (2) MEASURABLE: 5% → 7% (can track progress monthly: 5% → 5.5% → 6.2% → 7%), (3) ACHIEVABLE: +40% in 3 months (challenging but possible), (4) RELEVANT: Engagement drives conversions and revenue (business goal), (5) TIME-BOUND: 3 months (clear deadline, accountability). SMART goal enables: Clear target, measurable progress, accountability (achieved or not?). Vague goal ("grow Instagram") = can\'t measure progress, don\'t know if succeeding. SMART goal = can measure, can achieve, can be held accountable. Always set SMART goals. SMART goals = measurable success.'
        },
        {
          id: 22,
          question: 'Manager: "Our goal is ₹10L revenue/month from Instagram (currently ₹5L). Track revenue monthly?" You: "Yes." Manager: "Revenue is LAGGING indicator (past results). You need LEADING indicators too." What are leading indicators?',
          options: [
            'Past results that measure what already happened',
            'PREDICT FUTURE PERFORMANCE (engagement rate, CTR, posting frequency) - if engagement drops, revenue will drop next month - act proactively',
            'Indicators that lag behind performance',
            'Optional indicators not needed for tracking'
          ],
          correct: 1,
          explanation: 'Leading indicators = PREDICT FUTURE PERFORMANCE. Manager: "Revenue is LAGGING indicator (measures past results). By time see revenue is low, it\'s too late to fix. Need LEADING indicators." LEADING INDICATORS (predict future revenue): (1) Engagement rate (5% - if drops to 3%, revenue will drop next month. Fix engagement NOW, prevent revenue drop), (2) Click-through rate (1.5% - if drops, fewer people visit website, conversions drop, revenue drops. Fix CTR NOW), (3) Posting frequency (7 posts/week - if drops to 3 posts/week, reach decreases, engagement decreases, revenue decreases. Fix posting NOW). Leading indicators = early warning system. Predict problems BEFORE they happen. Can act PROACTIVELY (prevent problems). Example: Engagement drops from 5% to 3% (leading indicator warning). Act immediately (post more customer stories, improve content quality). Next month: Engagement recovers to 5%, revenue stays stable at ₹5L (prevented revenue drop!). Without leading indicators, only see revenue drop from ₹5L to ₹3L (lagging indicator). Too late to fix. Track leading indicators (predict future, act proactively) + lagging indicators (measure results, confirm success). Leading = prevent problems. Lagging = measure results.'
        },
        {
          id: 23,
          question: 'You track engagement rate (5%), CTR (1.5%), posting frequency (7/week). Manager: "These are LEADING indicators. What about LAGGING indicators?" What are lagging indicators?',
          options: [
            'Predict future performance and trends',
            'MEASURE PAST RESULTS (revenue, conversions, followers) - tell you if you SUCCEEDED - confirm your actions worked',
            'Lead performance and drive future success',
            'Are useless and should not be tracked'
          ],
          correct: 1,
          explanation: 'Lagging indicators = MEASURE PAST RESULTS. Manager: "Leading indicators predict future (engagement, CTR, posting). Good. But also need LAGGING indicators (measure results)." LAGGING INDICATORS (measure past results): (1) Revenue (₹5L/month from Instagram - result of actions), (2) Conversions (100 purchases/month from Instagram - result of engagement and CTR), (3) Follower count (10,000 followers - result of posting frequency and content quality). Lagging = results of actions. They tell: Did SUCCEED? Did actions work? Example: Posted 70% customer stories (high engagement content) for 3 months. LEADING indicators during 3 months: Engagement improved 5% → 6.5% (+30%). LAGGING indicators after 3 months: Revenue improved ₹5L → ₹6.5L (+30%), Conversions improved 100 → 130 (+30%). Lagging indicators CONFIRM: Actions (posting customer stories) worked! Leading predicted success, lagging confirmed success. Track BOTH: Leading (predict future, act proactively) + Lagging (measure results, confirm actions worked). Use both: Leading (early warning, prevent problems) + Lagging (measure success, celebrate wins, learn from failures).'
        },
        {
          id: 24,
          question: 'You report: "We have 10,000 followers! (+200 in 3 months!)" Manager: "Followers is VANITY METRIC (looks good, but so what?). We need ACTIONABLE METRICS." What are vanity metrics?',
          options: [
            'Are the best metrics to track',
            'LOOK GOOD but NOT ACTIONABLE (total followers, total likes) - cannot act on them - do not drive decisions',
            'Drive business decisions and actions',
            'Are necessary for business success'
          ],
          correct: 1,
          explanation: 'Vanity metrics = LOOK GOOD but NOT ACTIONABLE. Manager: "Followers (10,000) is VANITY METRIC. Looks impressive. But SO WHAT? What can we DO with this information? Nothing. Can\'t improve followers directly. Need ACTIONABLE METRICS." VANITY METRIC: Total followers (10,000). So what? Can\'t act on this. ACTIONABLE METRIC: Follower growth rate by content type (Customer stories: +50 followers/post, Product posts: +10 followers/post, Discount posts: +30 followers/post). Action: Post more customer stories (+50 followers/post = 5× more than product posts). VANITY METRIC: Total likes (50,000 likes across all posts). So what? ACTIONABLE METRIC: Average likes per post by posting time (Morning 9 AM: 300 likes, Evening 7 PM: 600 likes). Action: Post in evening (2× more engagement). Vanity metrics = look impressive, can\'t act on. Actionable metrics = drive decisions, tell what to do. Focus on ACTIONABLE (engagement by content type, CTR by posting time, conversions by traffic source). Ignore VANITY (total followers, total likes, total reach). Avoid vanity metrics trap. Don\'t report "We have 10,000 followers!" Report "Customer stories get 8% engagement (vs 2% for product posts). Should post 70% customer stories." Actionable metrics = drive actions = improve performance.'
        },
        {
          id: 25,
          question: 'Manager: "We need metrics that drive decisions (not just look impressive)." What makes a metric GOOD (actionable)?',
          options: [
            'Impresses others and looks good in reports',
            'INFORMS DECISIONS and DRIVES ACTION (engagement by content type → post more customer stories) - tells you WHAT TO DO',
            'Are complex and difficult to understand',
            'Are many in number (track 100+ metrics)'
          ],
          correct: 1,
          explanation: 'Good metrics = INFORM DECISIONS and DRIVE ACTION. Manager: "Good metrics answer: What should we DO? Bad metrics just look impressive." GOOD (ACTIONABLE) METRIC: Engagement rate by content type (Customer stories: 8%, Product posts: 2%, Discount posts: 5%). DECISION: "Post 70% customer stories (highest engagement), 20% discount posts (medium), 10% product posts (lowest)." ACTION: Implement new content mix. RESULT: Average engagement improves 5% → 6.5% (+30%!). Metric drove decision. Decision drove action. Action improved performance. This data-driven decision making. BAD (VANITY) METRIC: Total likes (50,000). DECISION: "Umm... keep posting?" (No clear action). RESULT: No improvement (metric didn\'t inform decision). Good metrics have 3 properties: (1) ACTIONABLE (tell what to do), (2) SIMPLE (easy to understand and communicate), (3) FEW (track 5-10 key metrics, not 100). Focus on few actionable metrics. Example: Social media (5 metrics: Engagement rate by content type, CTR by posting time, Conversions by traffic source, Revenue, Follower growth). Sales (5 metrics: Conversion rate by lead source, Average deal size, Sales cycle length, Win rate, Revenue). Track few actionable metrics. Ignore many vanity metrics. Good metrics = drive decisions = improve performance.'
        }
      ]
    },
    challenge: {
      title: 'Metrics & KPIs Challenge',
      description: 'Stop working blind, start measuring what matters',
      contexts: {
        academic: {
          title: 'Track Your GPA Like a Pro',
          description: '"Improve performance" = vague. Professor: "Define SMART goal, metrics, track!" Result: GPA 7.2→8.1, Finance lagging spotted early, fixed!',
          instructions: [
            '• SMART goal: "GPA 7.2→8.0 in 4mo, study 15hr/week structured"—Specific, Measurable, Achievable, Relevant, Time-bound',
            '• 5 leading indicators: Study 15hr/week, assignments 100%, mock 80%, attendance 90%, concepts 80%—predict future GPA, act early',
            '• 3 lagging indicators: GPA, subject scores, rank—measure results, confirm success',
            '• Track weekly: Spreadsheet, spot Finance lagging 72% (vs Acct 78%)—allocate 5hr/week practice, Finance jumps 76%!',
            '• GPA 7.2→8.1 achieved! Dashboard shared—10 classmates start tracking, A grade for data-driven approach!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague "improve performance"—can\'t measure, use SMART: GPA 7.2→8.0 in 4mo',
            '• Only track GPA (lagging)—can\'t act early, track study hours/attendance (leading) predict future',
            '• Skip weeks tracking—can\'t see trends, track EVERY week consistently',
            '• Finance lagging, do nothing—stays low, analyze metrics, increase practice, ACT',
            '• Track 50 metrics—overwhelmed, track 5-10 key (5 leading, 3 lagging) focused'
          ],
          successCriteria: [
            '✅ SMART goal: GPA 7.2→8.0 in 4mo specified clearly',
            '✅ Metrics defined: 5 leading (predict), 3 lagging (measure) chosen',
            '✅ Tracked consistently: Weekly/monthly for 4 months, no gaps',
            '✅ Finance lagging spotted: Increased practice 3→5hr, improved 72%→82%',
            '✅ Goal exceeded: GPA 8.1 achieved, rank 45→28, 10 classmates helped'
          ]
        },
        professional: {
          title: 'Stop Working Blind Boss',
          description: '"Grow Instagram" = vague. Manager: "Define SMART goal, metrics, track!" Result: Engagement 5%→7.1%, revenue ₹5L→₹7.2L (+₹26L/year), job offer!',
          instructions: [
            '• SMART goal: "Engagement 5%→7% in 3mo, post 70% customer stories, 20% discount, 10% product"—Specific, Measurable, Achievable, Relevant, Time-bound',
            '• 5 leading: Post 7/week, 70% stories, 7-9PM timing, 80% response, 2K story views—predict engagement/revenue',
            '• 5 lagging: Engagement, followers, CTR, conversions, revenue—measure results',
            '• Data Studio dashboard: Track daily, customer stories 8% engagement (vs product 2%)—post 70% stories, engagement 5%→7.1%!',
            '• Revenue ₹5L→₹7.2L (+₹26L/year), CEO job offer—data-driven approach transformed blind posting to strategic growth!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague "Grow Instagram"—can\'t track, use SMART: Engagement 5%→7% in 3mo',
            '• Vanity metrics (followers count)—can\'t act, track actionable: engagement by content type',
            '• Only lagging (revenue)—react late, track leading (engagement, CTR) predict early',
            '• Inconsistent tracking—can\'t see trends, track daily/weekly/monthly consistently',
            '• Stories 8% vs product 2%, still post 50% product—low engagement, post 70% stories!'
          ],
          successCriteria: [
            '✅ SMART goal: Engagement 5%→7% in 3mo, customer stories 70% specified',
            '✅ Metrics: 5 leading (predict), 5 lagging (measure), dashboard created',
            '✅ Tracked: Daily/weekly/monthly for 3 months, no gaps, trends visible',
            '✅ Optimized: Customer stories drive 8%, evening 7-9PM optimal, adjusted',
            '✅ Job offer: ₹26L/year revenue, CEO recognizes data-driven expertise'
          ]
        },
        personal: {
          title: 'Track Your Fitness Win',
          description: '"Get fit" = vague. Friend: "SMART goal, metrics, track!" Result: 78→70.5kg in 4mo, body fat 25%→18%, waist 36→32 inches. Viral 5K likes!',
          instructions: [
            '• SMART goal: "Lose 8kg: 78→70kg in 4mo, exercise 5days/week (3 cardio, 2 strength), eat 1800cal/day"—Specific, Measurable, Achievable, Relevant, Time-bound',
            '• 5 leading: Exercise 5days, calories 1800, steps 10K, sleep 7-8hr, water 3L—predict weight loss, act early',
            '• 3 lagging: Weight, body fat %, waist size—measure results, confirm success',
            '• Track daily MyFitnessPal/Google Fit: Week 5 exercise drops 2days—act immediately, back to 5days, progress continues 78→70.5kg!',
            '• Achieved + maintained: 70.5kg, 18% fat, 32" waist—share viral 5K likes, helped 100 people track fitness!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague "get fit"—can\'t measure, give up, use SMART: 78→70kg in 4mo',
            '• Only weight monthly (lagging)—can\'t see daily wins, track exercise/calories daily (leading)',
            '• Skip weeks tracking—lose motivation, can\'t see trends, track EVERY day',
            '• Exercise drops 2days (vs 5 target), do nothing—weight stalls, act immediately',
            '• Unrealistic "20kg in 1mo"—unhealthy, fail, use 2kg/mo sustainable healthy'
          ],
          successCriteria: [
            '✅ SMART goal: 78→70kg in 4mo, exercise 5days, 1800cal specified',
            '✅ Metrics: 5 leading (predict), 3 lagging (measure) defined clearly',
            '✅ Tracked: Daily leading, weekly weight for 4 months, no gaps',
            '✅ Goal exceeded: 70.5kg achieved, 18% fat, 32" waist all targets met',
            '✅ Helped 100: Viral 5K likes, people track fitness metrics inspired'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🎯 Define SMART Goals: You set specific, measurable, achievable, relevant, time-bound goals (not vague goals). Example: Not "Grow Instagram" (vague). But "Increase engagement from 5% to 7% (+40%) in 3 months by posting 70% customer stories" (SMART). You understand: SMART goals enable clear targets, measurable progress, accountability. Vague goals = cannot measure progress. SMART goals = can measure, can achieve.',
        '📊 Choose Right Metrics (Leading + Lagging): You track BOTH leading indicators (predict future: engagement rate, CTR, posting frequency) and lagging indicators (measure results: revenue, conversions, followers). You understand: Leading = early warning system (predict problems before they happen, act proactively). Lagging = results (tell you if you succeeded, confirm actions worked). Track both for complete picture.',
        '📈 Focus on Actionable Metrics: You track actionable metrics (engagement by content type → post more customer stories) not vanity metrics (total followers → cannot act on this). You understand: Actionable metrics answer "What should we DO?" Vanity metrics just look impressive. You focus on: Metrics that drive decisions (inform actions, improve performance). You ignore: Metrics that just look good (do not drive actions).',
        '⏱️ Track Consistently: You track daily (post metrics), weekly (aggregates), monthly (trends). You do not track sporadically. Consistent tracking enables: See trends (improving? declining?), spot anomalies (why did engagement drop this week?), make timely decisions (act immediately, not 3 months later). You understand: Consistent tracking = see progress, make data-driven decisions. Sporadic tracking = blind, cannot see trends.',
        '🎯 Use Metrics to Drive Decisions: You use metrics to drive decisions (not just report metrics). Example: You track engagement by content type. Find: Customer stories (8%), Product posts (2%). DECISION: "Post 70% customer stories." Implement. Result: Engagement improves 5% → 6.5% (+30%). You understand: Metrics → Insights → Decisions → Actions → Results. This is data-driven decision making. Without metrics: Decisions based on gut feeling (often wrong). With metrics: Decisions based on data (more reliable).'
      ],
      improvements: [
        '📚 Learn Advanced Metrics Frameworks: You know basics (SMART goals, leading/lagging, vanity/actionable). Good. But learn ADVANCED FRAMEWORKS: (1) OKRs (Objectives and Key Results - Google framework: Objective "Grow Instagram", Key Results "Engagement 5% → 7%", "Revenue ₹5L → ₹7L"), (2) North Star Metric (one metric that predicts long-term success - for Instagram: engagement rate predicts revenue), (3) Pirate Metrics (AARRR: Acquisition, Activation, Retention, Revenue, Referral - full funnel), (4) ICE Score (Impact, Confidence, Ease - prioritize which metrics to improve first), (5) Cohort Analysis (track metrics by user cohort - Month 1 users vs Month 2 users). Take course: "Advanced Metrics and KPIs" (30 hours, Coursera). Practice: Apply OKRs to your projects, identify North Star Metric, use ICE to prioritize. Advanced frameworks enable: Better goal setting (OKRs), focus on what matters (North Star), full funnel view (AARRR), smart prioritization (ICE). Invest 60 hours over 3 months. Become metrics expert.',
        '🛠️ Master Dashboard Tools: You create dashboards (Google Sheets, Data Studio). Good. But master ADVANCED TOOLS: (1) Tableau (powerful visualization, interactive dashboards), (2) Power BI (Microsoft, integrates with Excel), (3) Looker (Google, enterprise analytics), (4) Mixpanel (product analytics, user behavior), (5) Amplitude (user analytics, cohort analysis). Learn Tableau (20 hours). Create 10 dashboards. Master dashboard tools. Advanced tools enable: Better visualizations (interactive, drill-down), real-time data (auto-refresh), advanced analytics (cohort analysis, funnel analysis), sharing (publish dashboards, team access). Result: Make better decisions faster, communicate insights better, scale analytics.',
        '🎯 Build Metrics Culture in Team: You track metrics personally. Good. But build METRICS CULTURE in team: (1) Weekly metrics review (team meeting: review key metrics, discuss trends, make decisions), (2) Metrics dashboard (shared dashboard, everyone sees same metrics), (3) Metrics-driven decisions (all decisions backed by data, not opinions), (4) Celebrate wins (when metrics improve, celebrate team success), (5) Learn from failures (when metrics decline, analyze why, learn, improve). Metrics culture: Team tracks continuously, learns fast, makes data-driven decisions, outperforms competitors (who rely on gut feeling). In B.Com teams, build metrics culture. Make data-driven decision making the norm (not exception). Team that measures = team that improves.',
        '📊 Study Industry Benchmarks: You track your metrics (engagement 5%, CTR 1.5%). Good. But compare to INDUSTRY BENCHMARKS: (1) Instagram engagement rate (industry average: 3-6%, top performers: 8-12%), (2) CTR (industry average: 1-2%, top performers: 3-5%), (3) Conversion rate (industry average: 2-3%, top performers: 5-8%). Knowing benchmarks enables: Understand if you are performing well (5% engagement = average, not great), set ambitious goals (aim for top performer level: 8-12%), learn from best practices (how do top performers achieve 12% engagement?). Resources: (1) Industry reports (Hootsuite Social Media Trends, HubSpot State of Marketing), (2) Competitor analysis (track competitor metrics, learn from them), (3) Expert blogs (Neil Patel, Buffer, Sprout Social). Invest 20 hours. Learn benchmarks for your industry. Set goals based on top performer benchmarks (not just "improve from current").',
        '🔬 Experiment and Iterate: You track metrics, make decisions. Good. But EXPERIMENT continuously: (1) A/B test content types (customer stories vs product posts - which drives more engagement?), (2) Test posting times (morning vs evening - which gets more likes?), (3) Test content formats (carousel vs single image vs video - which performs best?), (4) Test captions (short vs long, emoji vs no emoji - which drives engagement?). Each experiment: Form hypothesis → Design test → Run test → Analyze metrics → Implement winner → Test next. Continuous experimentation: Test → Learn → Improve → Test → Repeat. Each test improves performance. After 20 tests, you have optimized: Content type, posting time, format, captions. Result: 2-3× performance improvement. In B.Com, adopt experimentation mindset. Always be testing. Always be learning. Always be improving.'
      ],
      nextSteps: [
        '📚 Take Metrics & KPIs Course: Enroll in: (1) "Metrics and KPIs for Business" (25 hours, Coursera - learn SMART goals, leading/lagging, vanity/actionable, dashboards), (2) "OKRs: Objectives and Key Results" (15 hours, Udemy - learn Google OKR framework), (3) "Data-Driven Decision Making" (20 hours, learn how to use metrics to drive decisions), (4) "Dashboard Design" (15 hours, learn Tableau, Power BI, visualization best practices). Total: 75 hours over 3 months. Apply: Set SMART goals for all projects, track metrics consistently, create dashboards, make data-driven decisions. Result: Metrics expertise, better decisions, measurable results.',
        '🧠 Define Metrics for 5 Projects: Practice by defining metrics for 5 projects (work, study, personal). For each project: (1) Set SMART goal (specific, measurable, achievable, relevant, time-bound), (2) Define 3-5 leading indicators (predict future), (3) Define 2-3 lagging indicators (measure results), (4) Create dashboard (goals, metrics, trends, breakdowns), (5) Track for 1 month, (6) Analyze and optimize. Projects: (1) Social media growth, (2) Academic performance, (3) Sales performance, (4) Fitness goal, (5) Personal skill development. After 5 projects, you will master: Setting SMART goals, choosing right metrics, tracking consistently, using metrics to drive decisions. Metrics become second nature.',
        '📊 Build Metrics Portfolio: Document your best metrics work. Create portfolio: (1) Instagram growth (engagement 5% → 7%, revenue ₹5L → ₹7.2L, +₹26L/year impact), (2) Academic improvement (GPA 7.2 → 8.1, exceeded goal), (3) Fitness transformation (78 kg → 70.5 kg, 4 months). For each: SMART goal, metrics (leading + lagging), dashboard (screenshot), results, insights, impact. Share on LinkedIn, personal website, GitHub. Portfolio demonstrates: Metrics expertise, data-driven decision making, measurable results. Use for: Job applications (data analyst, product manager, growth marketer roles), consulting (help companies define metrics), personal brand (become known as metrics expert).',
        '🎓 Create Metrics Course: Document your expertise. Create online course: "Metrics & KPIs for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: SMART goals (specific, measurable, achievable, relevant, time-bound), (2) Module 2: Leading vs lagging indicators (predict future vs measure results), (3) Module 3: Vanity vs actionable metrics (look good vs drive decisions), (4) Module 4: Create dashboards (goals, metrics, trends, breakdowns), (5) Module 5: Use metrics to drive decisions (metrics → insights → decisions → actions → results). Sell to 200 students = ₹2L revenue. Help 200 students master metrics. Build reputation as expert.',
        '💼 Offer Metrics Consulting: Freelance metrics consultant. Service: "I help you define metrics and track progress. ₹8,000/project (15 hours)." Target: Startups (define growth metrics), businesses (define KPIs), individuals (define personal goal metrics). Process: (1) Understand goal ("Grow Instagram", "Improve sales", "Get fit"), (2) Define SMART goal (specific, measurable, achievable, relevant, time-bound), (3) Choose metrics (3-5 leading, 2-3 lagging), (4) Create dashboard (Google Data Studio, Tableau), (5) Train on tracking (how to track daily, weekly, monthly), (6) Follow-up (monthly check-in, optimize metrics). Month 1: 2 clients, ₹16K. Month 6: 5 clients, ₹40K. Month 12: 10 clients, ₹80K. You help 10 organizations define metrics, track progress, achieve goals. You earn ₹80K. Career opportunities open (data analyst, product manager, growth marketer roles).'
      ]
    },
    badge: { name: 'Metrics Master', emoji: '🎯', description: 'Expert in metrics and KPIs' },
    shareMessage: 'Just mastered metrics and KPIs! 🎯 #Metrics #DataDriven'
  },
  {
    id: 'evidence-based-decisions',
    title: 'Evidence-Based Decisions',
    emoji: '✅',
    context: 'professional' as const,
    discover: {
      scenario: "Product Manager intern. CEO: 'Launch Feature X (AI chatbot) or Y (analytics)? Budget for ONE.' VP Sales: 'X! My gut says!' VP Marketing: 'Y! Trending!' CEO: 'What do YOU think?' You: 'Agree with VP Sales?' CEO: 'DATA? Surveys? Usage data? Or just opinions?' You: 'Just opinions.' CEO: '₹50L decision on OPINIONS (HiPPO problem). What if wrong?'",
      problemExplanation: [
        "Opinion-driven: VP Sales: 'Feature X! My gut!' VP Marketing: 'Y! Trending!' CEO: 'DATA?' You: 'No data, just opinions.' Opinions = subjective, biased, often wrong. ₹50L risk",
        "Ignore data: Have surveys (500), usage data (10K users), tickets (2K), research (100 pages). CEO: 'What does it say?' You: 'Didn't analyze, went with VP opinion.' ₹5L wasted",
        "HiPPO problem: You: 'Data shows Y (60% vs 40%).' VP Sales: '20yrs experience! X!' CEO: 'Go with VP.' 6 months: Feature X fails. ₹50L wasted. Opinion overrode data",
        "No evidence gathering: CEO: 'Bangalore or Mumbai?' You: 'Bangalore! Tech hub!' CEO: 'Market size? Competition? Cost? Revenue potential?' You: 'Umm... assumed.' ₹1Cr decision on assumption"
      ],
      solutionApproach: [
        "Gather evidence: Surveys (500): Y 60% vs X 40%. Usage (10K): 80% use analytics. Tickets (2K): 4× more analytics requests. Competitors: 3/3 analytics succeed. Market: analytics +30%/yr. 5 sources = clear answer",
        "Analyze objectively: All 5 sources → Feature Y. VP Sales: 'My gut says X!' You: 'Evidence says Y.' Don't ignore evidence to confirm bias. Follow data, not opinions",
        "Evaluate quality: Surveys (500) = high (30% weight). Usage (10K) = high (30%). VP opinion = low (0% weight). Weight by: sample size, relevance, recency, objectivity",
        "Document decision: Why Y? Evidence (5 sources), alternatives (X rejected), assumptions (can build, market grows), impact (+₹20L). Learn from outcomes, improve future decisions"
      ]
    },
    video: {
      title: 'Stop Following Opinions, Start Following Evidence',
      duration: 8,
      script: `[0:00-0:45] WHY OPINIONS FAIL

"You are Product Manager intern. CEO meeting: 'Should we launch Feature X or Y? Budget for ONE.' VP Sales: 'Feature X! My gut says so!' VP Marketing: 'Feature Y! It is trending!' CEO: 'What do YOU think?' You: 'Umm... Feature X sounds cool?' CEO: 'Do you have DATA? Or just opinions?' You: 'Just opinions.' CEO: 'We are making ₹50L decision based on OPINIONS. This is HiPPO problem (Highest Paid Person Opinion). What if VP Sales is WRONG? We waste ₹50L.' You realize: You decided based on opinions (not evidence). By the end of this video, you will master evidence-based decisions. Stop following opinions. Start following evidence. Let us fix this."

[0:45-2:15] STEP 1: GATHER RELEVANT EVIDENCE SYSTEMATICALLY

"CEO: 'Should we launch Feature X or Y?'

Do NOT decide based on opinions. GATHER EVIDENCE.

5 SOURCES:

1. CUSTOMER SURVEYS (500 customers): 'What feature would you use most?'
   Feature X: 40%, Feature Y: 60%

2. USAGE DATA (10,000 users, 6 months):
   Analytics features: 80% of users
   AI features: 20% of users
   Insight: Customers use analytics more

3. SUPPORT TICKETS (2,000 tickets):
   'Need better analytics': 800 tickets
   'Need AI chatbot': 200 tickets
   Insight: 4× more demand for analytics

4. COMPETITOR ANALYSIS (5 competitors):
   Launched analytics: 3 (all successful)
   Launched AI: 2 (1 failed, 1 struggling)
   Insight: Analytics has better success rate

5. MARKET RESEARCH:
   Analytics market: +30%/year growth
   AI chatbot market: +15%/year growth

Evidence gathered from multiple sources. Ready to analyze."

[2:15-3:45] STEP 2: EVALUATE EVIDENCE QUALITY

"Not all evidence is equal. EVALUATE QUALITY.

CUSTOMER SURVEYS (500 responses):
HIGH QUALITY (large sample, representative, recent)
Weight: 30%

USAGE DATA (10,000 users):
HIGH QUALITY (large sample, objective, behavioral)
Weight: 30%

SUPPORT TICKETS (2,000 tickets):
MEDIUM QUALITY (real pain points, but biased toward complainers)
Weight: 20%

COMPETITOR ANALYSIS (5 competitors):
MEDIUM QUALITY (useful but different markets)
Weight: 10%

MARKET RESEARCH:
MEDIUM QUALITY (macro trends, might not apply to us)
Weight: 10%

VP Sales opinion:
LOW QUALITY (subjective, no data, gut feeling)
Weight: 0%

Evaluate by:
- Sample size (larger = better)
- Relevance (our customers vs general)
- Recency (recent = better)
- Objectivity (data > opinions)
- Source credibility (research > blog)

High-quality evidence weighted more."

[3:45-5:15] STEP 3: ANALYZE OBJECTIVELY + AVOID HiPPO

"Analyze evidence OBJECTIVELY.

ALL 5 SOURCES POINT TO FEATURE Y:
1. Surveys: 60% prefer Y
2. Usage: 80% use analytics
3. Support: 4× more requests for analytics
4. Competitors: Analytics more successful
5. Market: Analytics growing faster

OBJECTIVE CONCLUSION: Feature Y is better choice.

But VP Sales says: 'I still think Feature X! My gut says so!'

This is HiPPO PROBLEM (Highest Paid Person Opinion overrides data).

VP Sales is:
- Highest paid
- Most experienced
- Most confident

So his opinion wins (even when data contradicts).

AVOID HiPPO:
Evidence says Feature Y.
Recommend Feature Y (even if VP Sales disagrees).

Data > Opinions.
Evidence > Politics.
Facts > Gut feeling."

[5:15-6:45] STEP 4: BALANCE DATA WITH JUDGMENT

"Evidence says Feature Y. But use JUDGMENT too.

EVIDENCE (Quantitative):
Feature Y wins (60% vs 40%, 4× tickets, 3/3 success)

JUDGMENT (Qualitative):
1. STRATEGIC FIT: Does Y align with vision? (Yes - we are analytics company)
2. EXECUTION RISK: Can we build Y well? (Yes - we have expertise)
3. TIMING: Is now right time? (Yes - market growing 30%/year)
4. COMPETITIVE ADVANTAGE: Will Y differentiate us? (Yes)

JUDGMENT CONFIRMS: Feature Y is right choice.

Evidence + Judgment = STRONG RECOMMENDATION.

Balance:
- Data INFORMS (facts, trends, preferences)
- Judgment DECIDES (strategy, execution, timing)

Best decisions combine BOTH."

[6:45-7:45] STEP 5: DOCUMENT + REVIEW + LEARN

"Document decision for future learning.

DECISION DOCUMENT:
1. DECISION: Launch Feature Y (analytics), not X (AI)
2. EVIDENCE: Surveys (60%), Usage (80%), Tickets (4×), Competitors (3/3), Market (30%)
3. ALTERNATIVES: Feature X rejected (less demand, lower success, slower growth)
4. ASSUMPTIONS: Customers will pay, We can build in 6 months, Market growth continues
5. EXPECTED OUTCOME: +500 customers, +₹1Cr revenue
6. REVIEW DATE: 6 months

6 months later: REVIEW.
Actual: +600 customers, +₹1.2Cr revenue (EXCEEDED targets!)

LEARNING:
Evidence was CORRECT.
Customer surveys + usage data accurately predicted demand.

Continue using evidence-based framework.

Document enables:
- Learn from outcomes
- Improve future decisions
- Institutional knowledge"

[7:45-8:00] YOUR CHALLENGE (Make ONE Evidence-Based Decision)

"Here is your action step: Face ONE decision (work/study/personal).

Instead of deciding based on opinion:
1. Gather evidence (3+ sources)
2. Evaluate quality (high/medium/low)
3. Analyze objectively (what does evidence say?)
4. Balance with judgment (strategy, execution, timing)
5. Document (decision, evidence, assumptions, expected outcome)

RESULT: Better decisions, better outcomes.

Evidence-based decisions = superpower. Master them now."

[End Screen: "Module 7 Complete! You Are Now Data-Driven Decision Maker"]`,
      content: [
        'Gather Relevant Evidence: Customer surveys, usage data, support tickets, competitor analysis, market research (multiple sources)',
        'Evaluate Evidence Quality: Sample size, relevance, recency, objectivity, source credibility (weight high-quality evidence more)',
        'Analyze Objectively: Follow evidence (not opinions), avoid HiPPO (Highest Paid Person Opinion overrides data)',
        'Balance Data with Judgment: Data informs (facts, trends), judgment decides (strategy, execution, timing) - combine both',
        'Document Decision: Decision, evidence considered, alternatives, assumptions, expected outcomes, review date',
        'Review and Learn: Check outcomes vs expectations, learn what evidence was predictive, improve future decisions',
        'B.Com Applications: Product decisions, career choices, investment decisions, business strategy, personal goals'
      ]
    },
    quiz: {
      title: 'Evidence-Based Decisions Quiz',
      questions: [
        {
          id: 26,
          question: 'CEO meeting: "Should we launch Feature X or Y?" VP Sales: "Feature X! My gut says so!" VP Marketing: "Feature Y! Trending!" CEO: "What do YOU think?" You: "Feature X sounds cool?" CEO: "Do you have DATA? Or just opinions?" What are evidence-based decisions?',
          options: [
            'Ignore data and follow gut feeling',
            'COMBINE DATA with SOUND JUDGMENT (gather evidence, evaluate quality, analyze objectively, balance with judgment, document)',
            'Only use data, ignore human judgment',
            'Follow opinions of highest paid person'
          ],
          correct: 1,
          explanation: 'Evidence-based decisions = COMBINE DATA with SOUND JUDGMENT. CEO: "Opinions are not evidence. We need DATA." Evidence-based decision process: (1) GATHER EVIDENCE (customer surveys, usage data, support tickets, competitor analysis, market research), (2) EVALUATE QUALITY (sample size, relevance, recency, objectivity, source credibility), (3) ANALYZE OBJECTIVELY (what does evidence say? Avoid confirmation bias, avoid HiPPO), (4) BALANCE WITH JUDGMENT (data informs facts/trends, judgment decides strategy/execution/timing), (5) DOCUMENT (decision, evidence, alternatives, assumptions, expected outcomes, review date). Evidence-based ≠ purely data-driven (ignores human judgment, strategy, context). Evidence-based = data + judgment. Example: Evidence says "Feature Y" (60% customer preference, 4× support tickets, 3/3 competitor success). Judgment confirms "Feature Y" (strategic fit, execution capability, timing, competitive advantage). Evidence + Judgment = STRONG RECOMMENDATION. Make evidence-based decisions (not opinion-based). Gather data, evaluate quality, analyze objectively, balance with judgment. Result: Better decisions, better outcomes, less risk.'
        },
        {
          id: 27,
          question: 'Meeting: VP Sales (highest paid): "Launch Feature X!" You: "Data shows customers prefer Feature Y (60% vs 40%)." VP Sales: "I have 20 years experience! Data is wrong!" CEO: "Let us go with Feature X." 6 months later: Feature X fails. This is HiPPO problem. What is HiPPO?',
          options: [
            'Hippopotamus animal in the room',
            'HIGHEST PAID PERSON OPINION overrides data (senior person opinion wins even when data contradicts) - leads to bad decisions',
            'Good practice for decision making',
            'Animal-based decision framework'
          ],
          correct: 1,
          explanation: 'HiPPO = HIGHEST PAID PERSON OPINION overrides data. Problem: VP Sales is highest paid, most experienced, most confident. So his opinion wins (even when data contradicts: customers prefer Feature Y 60% vs 40%). CEO follows VP Sales (defers to seniority, experience, confidence). Result: Feature X launches, fails (customers didn\'t want it). ₹50L wasted. Why HiPPO bad: (1) IGNORES EVIDENCE (data shows Feature Y, but opinion overrides), (2) AUTHORITY BIAS (senior person must be right because of experience), (3) CONFIDENCE BIAS (loud, confident opinion sounds more convincing than quiet data), (4) POLITICAL (easier to agree with boss than challenge with data). How to avoid HiPPO: (1) CULTURE (make data-driven decisions the norm, not exception), (2) EVIDENCE FIRST (always ask "What does data say?" before opinions), (3) CHALLENGE RESPECTFULLY ("I understand your experience, but data shows..."), (4) DOCUMENT (write down evidence, makes it harder to ignore). Recognize HiPPO. Don\'t let senior person opinion override evidence. Present data clearly, respectfully challenge when data contradicts opinion, advocate for evidence-based decisions. Data > Opinions. Evidence > Politics. Facts > Gut feeling.'
        },
        {
          id: 28,
          question: 'You gather evidence: (1) Customer survey (10 responses), (2) Blog article ("AI is future!"), (3) Friend opinion ("Feature X is cool"), (4) Competitor launched Feature X. CEO: "Did you evaluate QUALITY?" How should you evaluate evidence?',
          options: [
            'By amount only (more evidence = better)',
            'By QUALITY, RELEVANCE, and SOURCE CREDIBILITY (sample size, relevance, recency, objectivity, source) - weight high-quality evidence more',
            'By who provides it (senior person = more credible)',
            'By age (older evidence = more credible)'
          ],
          correct: 1,
          explanation: 'Evaluate evidence by QUALITY, RELEVANCE, and SOURCE CREDIBILITY. CEO: "You gathered evidence. But did you evaluate QUALITY?" Your evidence: (1) Survey (10 responses): LOW QUALITY (tiny sample, need 100+). Weight: 5%. (2) Blog ("AI is future!"): LOW QUALITY (opinion piece, not research). Weight: 0%. (3) Friend ("Feature X cool"): LOW QUALITY (anecdotal, not representative). Weight: 0%. (4) Competitor launched Feature X: MEDIUM QUALITY (but did it succeed? Didn\'t check). Weight: 10%. Total quality: LOW. Gathered weak evidence. Garbage in, garbage out. HIGH-QUALITY evidence: (1) Customer surveys (500 responses): HIGH QUALITY (large sample, representative, recent, relevant). Weight: 30%. (2) Usage data (10,000 users): HIGH QUALITY (large sample, objective, behavioral). Weight: 30%. (3) Support tickets (2,000 tickets): MEDIUM QUALITY (real pain points, but biased). Weight: 20%. Evaluate by: (1) SAMPLE SIZE (larger = better, 10 responses = weak, 500 = strong), (2) RELEVANCE (our customers vs general market), (3) RECENCY (recent data = better, old data might be outdated), (4) OBJECTIVITY (behavioral data > opinions), (5) SOURCE CREDIBILITY (research study > blog post). Don\'t treat all evidence equally. Evaluate quality. Weight high-quality evidence more. Ignore low-quality evidence. Result: Better decisions based on strong evidence.'
        },
        {
          id: 29,
          question: 'You gather evidence: Customers prefer Feature Y (60% vs 40%). You present to CEO. CEO: "So we should launch Feature Y?" You: "Yes, data says so." CEO: "What about strategy? Execution? Timing? Competitive advantage?" What is the role of DATA in decisions?',
          options: [
            'Data makes all decisions automatically',
            'Data INFORMS decisions (provides facts, trends), JUDGMENT FINALIZES (considers strategy, execution, timing) - combine both',
            'Data is unnecessary, judgment is enough',
            'Data replaces human thinking completely'
          ],
          correct: 1,
          explanation: 'Data INFORMS decisions, judgment FINALIZES. CEO: "Data says Feature Y. But what about strategy, execution, timing?" Need BOTH data and judgment. DATA (Quantitative): Feature Y wins (60% customer preference, 4× support tickets, 3/3 competitor success, 30% market growth). Data provides: Facts, trends, customer preferences, market dynamics. JUDGMENT (Qualitative): (1) STRATEGIC FIT: Does Feature Y align with company vision? (Yes - we\'re analytics company), (2) EXECUTION RISK: Can we build Feature Y well? (Yes - we have analytics expertise), (3) TIMING: Is now right time? (Yes - market growing 30%/year), (4) COMPETITIVE ADVANTAGE: Will Feature Y differentiate us? (Yes - we can build better analytics). Judgment provides: Strategy, execution capability, timing, competitive positioning. DATA + JUDGMENT = STRONG RECOMMENDATION: Launch Feature Y. Data alone not enough (ignores strategy, execution, context). Judgment alone not enough (ignores facts, trends, customer preferences). COMBINE BOTH: Data informs (what customers want, what market demands), Judgment decides (how to execute, when to launch, how to differentiate). Balance data with judgment. Use data to inform (not dictate). Use judgment to decide (not ignore data). Best decisions combine both.'
        },
        {
          id: 30,
          question: 'You decide: "Launch Feature Y." CEO: "Why?" You: "Data shows customers prefer it." CEO: "What evidence? What alternatives? What assumptions?" You: "Umm... I do not remember." 6 months later: Feature Y fails. CEO: "Why did we launch Y?" You: "I do not remember." Why should you DOCUMENT decisions?',
          options: [
            'To cover yourself when things go wrong',
            'To LEARN FROM OUTCOMES and IMPROVE (understand what evidence was predictive, what assumptions were wrong, refine decision process)',
            'To blame others for failures',
            'To waste time on paperwork'
          ],
          correct: 1,
          explanation: 'Document decisions to LEARN FROM OUTCOMES and IMPROVE. CEO: "You didn\'t document decision rationale?! Now we can\'t learn from this failure." Problem: Decided, moved on, forgot reasoning. When decision fails, can\'t learn (don\'t remember why decided, what evidence considered, what assumptions made). DECISION DOCUMENT includes: (1) DECISION: Launch Feature Y (analytics), not Feature X (AI). (2) EVIDENCE CONSIDERED: Customer surveys (60% prefer Y), Usage data (80% use analytics), Support tickets (4× more requests), Competitor analysis (analytics more successful), Market research (analytics growing faster). (3) ALTERNATIVES: Feature X rejected (less demand, lower success, slower growth). (4) KEY ASSUMPTIONS: Customers will pay for analytics, We can build in 6 months, Market growth continues. (5) EXPECTED OUTCOME: +500 customers, +₹1Cr revenue. (6) REVIEW DATE: 6 months. Documentation enables: (1) LEARN FROM OUTCOMES (6 months later: Did achieve +500 customers? If yes, what evidence was predictive? If no, what went wrong?), (2) IMPROVE DECISIONS (understand which evidence sources most reliable, which assumptions tend to hold, refine decision process), (3) INSTITUTIONAL KNOWLEDGE (when leave, team knows why decisions were made, can learn from history). Document all major decisions. Write down: Decision, evidence, alternatives, assumptions, expected outcomes, review date. Review outcomes. Learn. Improve. Continuous improvement in decision making.'
        }
      ]
    },
    challenge: {
      title: 'Evidence-Based Decisions Challenge',
      description: 'Stop following opinions, start following evidence',
      contexts: {
        academic: {
          title: 'Evidence Over Opinions',
          description: 'MBA vs CA career choice. Friends: "MBA!" Family: "CA!" Professor: "Gather EVIDENCE!" Result: CA chosen, ₹9L job, 9/10 satisfaction, passed first attempt!',
          instructions: [
            '• Define MBA vs CA: MBA (₹20L, ₹12L/yr, management) vs CA (₹3L, ₹8L/yr, accounting)—criteria: ROI, fit, interest, demand',
            '• Gather 5 sources: Alumni (CA 8/10 satisfaction), counselor (CA better ROI 6mo vs 2yr), self-assess (accounting interest 8/10, analytical 9/10)—systematic evidence',
            '• Evaluate quality: Counselor 35%, self-assess 25%, alumni 20%, friends 0%—weight high-quality more, ignore opinions',
            '• Analyze + judgment: MBA higher salary BUT CA better fit/ROI/balance—personal fit>salary, choose CA based on evidence+judgment',
            '• Document + review 3yrs: ₹9L job, 9/10 satisfaction, passed first attempt, CFO track—Professor A grade, mastered evidence-based!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Follow friends "MBA!"—wrong choice doesn\'t fit, gather evidence: alumni, counselor, self-assess',
            '• MBA higher salary, ignore fit—high pay but low satisfaction, balance data with personal fit',
            '• Treat friend opinion = counselor data—bad decision, evaluate quality, weight high more',
            '• Don\'t document why CA—3yrs later can\'t remember, can\'t learn, document evidence/assumptions',
            '• Never review outcomes—can\'t learn if right, set review date, check assumptions, improve'
          ],
          successCriteria: [
            '✅ Decision clear: MBA vs CA, criteria defined systematically',
            '✅ Evidence: 5 sources gathered, counselor/self-assess high quality weighted',
            '✅ Analyzed: MBA salary/demand, CA fit/ROI/balance compared objectively',
            '✅ Judgment: Personal fit>salary, CA chosen based on evidence+context',
            '✅ Succeeded: ₹9L job, 9/10 satisfaction, passed first attempt, A grade'
          ]
        },
        professional: {
          title: 'Data Over Gut Boss',
          description: 'Feature X vs Y choice. VP: "My gut says X!" You: "Let me gather evidence." Result: Feature Y launched, +600 customers, ₹1.2Cr revenue, promoted PM!',
          instructions: [
            '• Gather 5 sources: Surveys (60% prefer Y), usage (80% analytics), tickets (4× analytics requests), competitors (analytics 3/3 success), market (30% growth)—all point Feature Y',
            '• Evaluate quality: Surveys 30%, usage 30%, tickets 20%, VP gut 0%—weight high-quality, ignore opinion',
            '• Analyze: ALL 5 sources → Feature Y wins—evidence overwhelming, objective conclusion clear',
            '• Judgment: Strategic fit (analytics company), execution (our expertise), timing (30% growth)—confirms Feature Y',
            '• Document + review 6mo: +600 customers, ₹1.2Cr revenue—CEO: "You saved ₹50L mistake!" Promoted PM!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Follow HiPPO (VP Sales gut)—₹50L wasted, gather evidence, challenge respectfully with data',
            '• Ignore available data—bad decision, use surveys/usage/tickets available, analyze them',
            '• VP opinion = survey quality—biased decision, evaluate quality, weight high more',
            '• Data without judgment—incomplete, balance with strategy/execution/timing context',
            '• Don\'t document—6mo later can\'t remember why, can\'t learn, document evidence/assumptions'
          ],
          successCriteria: [
            '✅ Evidence: 5 sources gathered, surveys/usage high quality weighted 30% each',
            '✅ Analyzed: ALL 5 sources → Feature Y, objective conclusion overwhelming',
            '✅ Judgment: Strategic fit/execution/timing confirmed, evidence + context balanced',
            '✅ CEO approved: Feature Y chosen over VP gut, evidence triumphed opinion',
            '✅ Promoted PM: +600 customers, ₹1.2Cr revenue, saved ₹50L mistake'
          ]
        },
        personal: {
          title: 'Car Choice Evidence Win',
          description: 'Car A (₹10L sedan) vs B (₹8L SUV). Friend: "A!" Family: "B!" You gather evidence: A fits 80% city use, better resale. Result: 9/10 satisfaction, no regrets!',
          instructions: [
            '• Gather 5 evidence: Cost (A ₹12.5L vs B ₹11L 5yr), usage (80% city, 2 passengers = sedan OK), test drives (A comfortable), reviews (A 4.5★ vs 4.2★), resale (A 60% vs 55%)—systematic',
            '• Evaluate quality: Usage 30%, test drives 25%, cost 25%, friends 0%—weight personal data high, ignore opinions',
            '• Analyze: B cheaper BUT A better fit (80% city), comfort, reviews, resale (₹6L vs ₹4.4L offsets savings!)—objective trade-offs',
            '• Judgment: Comfort daily 2hr>₹1.5L savings, resale ₹1.6L offsets—A actually cheaper long-term, choose A',
            '• Document + review 1yr: 9/10 satisfaction, 80% city correct, ₹8K/yr maintenance, no regrets—evidence-based mastered!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Follow friend "A better!"—might not fit YOUR needs, gather evidence: cost, usage, test',
            '• B cheaper, ignore no SUV needed—pay for space not used, analyze YOUR 80% city usage',
            '• B ₹2L cheaper initially, ignore resale—worse ₹4.4L vs ₹6L, consider long-term always',
            '• Skip test drives, decide on specs—might not like comfort, test drive = high-quality evidence',
            '• Don\'t document—1yr later can\'t remember why A, can\'t learn, document evidence/assumptions'
          ],
          successCriteria: [
            '✅ Evidence: 5 sources gathered, usage/test drives weighted high personally relevant',
            '✅ Analyzed: A fit/comfort/resale vs B cheaper, trade-offs clear objectively',
            '✅ Judgment: Comfort daily>savings, resale offsets—A chosen evidence-based',
            '✅ 1yr review: 9/10 satisfaction, assumptions held, no regrets proven',
            '✅ Framework applied: Personal decisions use evidence (not just work), mastered'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📊 Gather Relevant Evidence Systematically: You gather evidence from multiple sources (not just one). Example: Product decision (5 sources: customer surveys, usage data, support tickets, competitor analysis, market research). You do not rely on single source (might be biased, incomplete). You gather diverse evidence (quantitative + qualitative, internal + external, current + historical). You understand: Multiple sources = more reliable, complete picture. Single source = risky, might miss important information.',
        '🎯 Evaluate Evidence Quality Rigorously: You do not treat all evidence equally. You evaluate quality (sample size, relevance, recency, objectivity, source credibility). Example: Customer surveys (500 responses): HIGH QUALITY, weight 30%. VP Sales opinion (gut feeling): LOW QUALITY, weight 0%. You weight high-quality evidence more, ignore low-quality evidence. You understand: High-quality evidence = reliable, actionable. Low-quality evidence = unreliable, misleading. Quality > quantity.',
        '🔬 Analyze Objectively (Avoid Confirmation Bias and HiPPO): You analyze evidence objectively (not to confirm your opinion). Example: All 5 sources point to Feature Y, but VP Sales (highest paid) says Feature X. You recommend Feature Y (follow evidence, not opinion). You avoid: Confirmation bias (seeking evidence that confirms your belief), HiPPO (Highest Paid Person Opinion overrides data), Political pressure (agreeing with boss to avoid conflict). You understand: Objective analysis = follow evidence (even when it contradicts opinions, politics, gut feeling).',
        '⚖️ Balance Data with Sound Judgment: You do not rely purely on data (ignore context, strategy, execution). You balance data with judgment. Example: Evidence says Feature Y (60% customer preference). Judgment confirms (strategic fit, execution capability, timing, competitive advantage). Data + Judgment = STRONG RECOMMENDATION. You understand: Data alone = incomplete (ignores strategy, context). Judgment alone = risky (ignores facts, trends). Combine both for best decisions.',
        '📝 Document Decisions for Learning: You document decisions (decision, evidence, alternatives, assumptions, expected outcomes, review date). You review outcomes (6 months later: did we achieve expected outcomes? What went right? What went wrong?). You learn from every decision (successes and failures). You understand: Documentation enables learning, continuous improvement. Without documentation, you repeat mistakes, cannot improve.'
      ],
      improvements: [
        '📚 Learn Decision-Making Frameworks: You know evidence-based basics (gather evidence, evaluate quality, analyze objectively). Good. But learn ADVANCED FRAMEWORKS: (1) Decision Matrix (score alternatives on multiple criteria, weight criteria by importance), (2) Pre-Mortem Analysis (imagine decision failed, work backwards to identify risks), (3) Decision Trees (map out decision paths, probabilities, expected values), (4) SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats), (5) Cost-Benefit Analysis (quantify costs and benefits, calculate ROI). Take course: "Decision Making and Problem Solving" (25 hours, Coursera). Practice: Apply decision matrix to 5 decisions, run pre-mortem on major decisions, create decision trees. Advanced frameworks enable: More structured decisions, better risk assessment, clearer trade-offs. Invest 50 hours over 2 months. Become decision-making expert.',
        '🛠️ Build Decision Journal: You document decisions. Good. But build DECISION JOURNAL (systematic record of all major decisions). For each decision: (1) DATE, (2) DECISION, (3) ALTERNATIVES CONSIDERED, (4) EVIDENCE (sources, quality, key findings), (5) REASONING (why you chose this option), (6) ASSUMPTIONS, (7) EXPECTED OUTCOME, (8) ACTUAL OUTCOME (review 6-12 months later), (9) LEARNING (what went right, what went wrong, what to do differently next time). Review journal quarterly: What patterns? Which evidence sources are most predictive? Which assumptions tend to hold? Which tend to fail? Continuous learning. After 20 decisions, you will have: Clear patterns (what works, what does not), Refined process (better at evaluating evidence, making decisions), Higher success rate (learn from failures, repeat successes). Decision journal = continuous improvement tool.',
        '🎯 Practice Counterfactual Thinking: You make decisions. Good. But practice COUNTERFACTUAL THINKING (imagine alternative scenarios). After decision: "What if I had chosen differently?" Example: You chose Feature Y (analytics). Counterfactual: "What if I had chosen Feature X (AI chatbot)?" Estimate outcome: Lower customer demand (40% vs 60%), higher execution risk (no AI expertise), lower market growth (15% vs 30%). Estimated result: +200 customers, +₹40L revenue (vs actual +600 customers, +₹1.2Cr). Insight: Feature Y was RIGHT choice (3× better outcome). Counterfactual thinking enables: Validate decisions (confirm you made right choice), Learn from alternatives (understand why other options would have failed), Improve judgment (calibrate your estimates vs actual outcomes). Practice: For every major decision, estimate counterfactual outcomes. Compare to actual. Refine estimates. Get better at predicting outcomes.',
        '📊 Develop Data Literacy: You use data. Good. But develop DEEP DATA LITERACY: (1) Statistics (understand p-values, confidence intervals, statistical significance), (2) Data visualization (create clear charts, spot patterns, communicate insights), (3) Data quality (identify biased samples, confounding variables, data errors), (4) Causal inference (distinguish correlation vs causation, understand confounders), (5) Predictive modeling (use data to predict future outcomes). Take courses: (1) "Statistics for Decision Making" (30 hours), (2) "Data Visualization" (20 hours), (3) "Causal Inference" (25 hours). Practice: Analyze datasets, create visualizations, run statistical tests. Deep data literacy enables: Better evidence evaluation (spot data quality issues), Better analysis (understand statistical significance, causation), Better predictions (use data to forecast outcomes). Invest 75 hours over 3 months. Become data-literate decision maker.',
        '🔬 Run Decision Experiments: You make decisions. Good. But run EXPERIMENTS: Test small before committing big. Example: Before launching Feature Y (₹50L investment), run EXPERIMENT: Build MVP (Minimum Viable Product, ₹5L, 1 month), Test with 100 customers, Measure: Usage, satisfaction, willingness to pay. Results: 80% usage, 85% satisfaction, 70% willing to pay. VALIDATION: Feature Y will likely succeed. Now invest ₹50L (with confidence). If experiment failed: Pivot or cancel (saved ₹45L!). Experiments enable: Validate assumptions (test before big investment), Reduce risk (fail small, not big), Learn fast (get real customer feedback). In B.Com, adopt experimentation mindset: Test small, learn, then scale. Do not bet big on untested assumptions. Experiment → Learn → Scale. This is how successful companies operate.'
      ],
      nextSteps: [
        '📚 Take Decision-Making Course: Enroll in: (1) "Decision Making and Problem Solving" (25 hours, Coursera - learn decision frameworks, biases, heuristics), (2) "Critical Thinking for Better Decisions" (20 hours, learn how to evaluate evidence, avoid biases), (3) "Data-Driven Decision Making" (20 hours, learn how to use data effectively), (4) "Behavioral Economics" (25 hours, understand how people make decisions, common biases). Total: 90 hours over 3 months. Apply: Use decision frameworks for all major decisions, evaluate evidence rigorously, avoid biases, make data-driven decisions. Result: Better decisions, better outcomes, higher success rate.',
        '🧠 Make 10 Evidence-Based Decisions: Practice by making 10 major decisions using evidence-based framework (work, study, personal). For each decision: (1) Define decision clearly (alternatives, criteria), (2) Gather evidence (3+ sources), (3) Evaluate quality (weight by quality), (4) Analyze objectively (what does evidence say?), (5) Balance with judgment (strategy, execution, timing), (6) Document (decision, evidence, assumptions, expected outcomes), (7) Review (6-12 months later: actual vs expected outcomes). Decisions: (1) Career choice, (2) Product launch, (3) Hiring decision, (4) Investment decision, (5) Major purchase, (6) Business strategy, (7) Partnership decision, (8) Location choice, (9) Education decision, (10) Lifestyle change. After 10 decisions, you will master: Evidence-based framework, rigorous analysis, objective decision making. Evidence-based decisions become second nature.',
        '📊 Build Decision-Making Portfolio: Document your best evidence-based decisions. Create portfolio: (1) Product decision (Feature Y: gathered 5 evidence sources, analyzed objectively, launched successfully, +₹1.2Cr revenue), (2) Career decision (CA vs MBA: gathered evidence, evaluated quality, chose CA, high satisfaction, strong performance), (3) Investment decision (Stock A vs B: analyzed financials, market trends, chose A, +30% return). For each: Decision, evidence gathered, quality evaluation, analysis, judgment, outcome, learning. Share on LinkedIn, personal website. Portfolio demonstrates: Evidence-based decision making, rigorous analysis, strong outcomes. Use for: Job applications (consulting, product management, strategy roles), promotions (show decision-making track record), personal brand (become known as rigorous decision maker).',
        '🎓 Teach Evidence-Based Decisions: Document your expertise. Create workshop: "Evidence-Based Decision Making for B.Com Students" (3 hours, ₹500/person). Content: (1) Module 1: Why opinions fail (HiPPO problem, confirmation bias), (2) Module 2: Gather evidence systematically (multiple sources, diverse evidence), (3) Module 3: Evaluate evidence quality (sample size, relevance, objectivity), (4) Module 4: Analyze objectively (avoid biases, follow evidence), (5) Module 5: Balance data with judgment (strategy, execution, timing), (6) Module 6: Document and learn (decision journal, review outcomes). Run workshop for 50 students = ₹25K revenue. Help 50 students master evidence-based decisions. Build reputation as expert.',
        '💼 Offer Decision Consulting: Freelance decision consultant. Service: "I help you make evidence-based decisions. ₹10,000/decision (20 hours)." Target: Businesses (product decisions, strategy decisions), individuals (career decisions, major purchases), startups (investment decisions, hiring decisions). Process: (1) Understand decision (alternatives, criteria, constraints), (2) Gather evidence (surveys, data analysis, market research), (3) Evaluate quality (weight by quality), (4) Analyze objectively (present findings), (5) Recommend (based on evidence + judgment), (6) Document (decision document for client). Month 1: 2 clients, ₹20K. Month 6: 5 clients, ₹50K. Month 12: 10 clients, ₹100K. You help 10 organizations make better decisions. You earn ₹100K. Career opportunities open (strategy consultant, product manager, decision analyst roles).'
      ]
    },
    badge: { name: 'Evidence-Based Decider', emoji: '✅', description: 'Expert in evidence-based decisions' },
    shareMessage: 'Just mastered evidence-based decisions! ✅ #DataDriven #Evidence'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module7Subtopics = module7Data;

// Module 7 Assessment
export const module7Assessment: AssessmentData = {
  id: 'module7-assessment',
  title: 'Data-Driven Decision Making Assessment',
  description: 'Test your data analysis and evidence-based thinking mastery across all 6 subtopics',
  questions: [
    // Data Analysis (1-5)
    {
      id: 1,
      question: 'You receive sales data (5000 rows, messy: duplicates, missing values, inconsistent formats). What is the FIRST step in data analysis?',
      options: [
        'Jump to conclusions immediately',
        'CLEAN and ORGANIZE data (remove duplicates, handle missing values, standardize formats) - foundation for reliable analysis',
        'Create visualizations with messy data',
        'Write report with raw data'
      ],
      correct: 1,
      explanation: 'First step = CLEAN and ORGANIZE data (not conclusions, visualizations, or reports). You have messy data (duplicates, missing values, inconsistent formats). If you analyze messy data: Garbage in, garbage out. Results will be wrong. CLEAN DATA FIRST: (1) Remove duplicates (5000 rows → 4800 rows), (2) Handle missing values (fill with median or remove rows), (3) Standardize formats (dates: DD/MM/YYYY, currency: ₹). Clean data = foundation for reliable analysis. Only after cleaning: Calculate stats, find patterns, visualize, draw insights. In B.Com, always clean data first. Messy data = unreliable analysis. Clean data = reliable analysis.'
    },
    {
      id: 2,
      question: 'You have cleaned sales data (4800 rows). What are DESCRIPTIVE STATISTICS and why use them?',
      options: [
        'Advanced machine learning algorithms',
        'MEAN, MEDIAN, MODE basics - summarize data, understand central tendency and spread (foundation before complex analysis)',
        'Unnecessary step, skip to conclusions',
        'Complex statistical models'
      ],
      correct: 1,
      explanation: 'Descriptive statistics = MEAN, MEDIAN, MODE basics (not advanced ML, not unnecessary, not complex models). Purpose: Summarize data, understand central tendency (average) and spread (variation). Example: Sales data (4800 rows). Calculate: Mean sales: ₹50K/month, Median sales: ₹45K/month, Mode: ₹40K/month, Standard deviation: ₹15K (spread). Insights: Mean > Median (right-skewed, few high sales pull average up), Mode ₹40K (most common sales amount), SD ₹15K (high variability). Descriptive stats = foundation. They tell you: What is typical? What is range? How much variation? After descriptive stats: Find patterns, visualize, draw insights. In B.Com, start with descriptive stats (simple, powerful). Understand basics before complex analysis.'
    },
    {
      id: 3,
      question: 'In sales data, you find OUTLIERS (most sales: ₹30-60K, but 3 sales: ₹500K each). What should you do with outliers?',
      options: [
        'Delete them immediately without investigation',
        'INVESTIGATE significant differences - understand why they exist (might be errors OR valuable insights like bulk orders)',
        'Ignore them as unimportant',
        'Assume they are all errors'
      ],
      correct: 1,
      explanation: 'Outliers: INVESTIGATE (not delete, not ignore, not assume errors). Outliers = data points significantly different from others. Example: Most sales ₹30-60K, but 3 sales ₹500K. INVESTIGATE: Why? (1) DATA ERRORS? Check: Are they typos? (₹50K entered as ₹500K?). If error: Correct or remove. (2) VALUABLE INSIGHTS? Check: Are they real bulk orders? Corporate clients? If real: Keep them, analyze separately. Investigation reveals: 3 × ₹500K sales = bulk orders from corporate clients (real, not errors). INSIGHT: We have 2 customer segments (regular ₹30-60K, corporate ₹500K). Different strategies needed. Outliers often reveal: Errors (need correction) OR valuable insights (different segments, special cases). In B.Com, investigate outliers. Do not delete blindly. They might be your most valuable insights.'
    },
    {
      id: 4,
      question: 'You analyzed sales data, found patterns (corporate clients buy more, Q4 has highest sales). What does DATA tell you?',
      options: [
        'Nothing useful',
        'STORIES when analyzed properly - reveals patterns, trends, insights that inform decisions (data → insights → actions)',
        'Everything automatically',
        'Only facts, no insights'
      ],
      correct: 1,
      explanation: 'Data tells STORIES when analyzed (not nothing, not everything automatically, not just facts). Raw data = numbers. Analyzed data = stories, insights, actions. Example: Sales data analysis reveals STORY: "Corporate clients (5% of customers) generate 40% of revenue. Q4 sales are 2× higher than Q1-Q3 (holiday season). Product A sells well to individuals, Product B sells well to corporates." INSIGHTS: (1) Focus on corporate clients (high-value segment), (2) Prepare inventory for Q4 (high demand), (3) Different marketing for Product A (individuals) vs Product B (corporates). ACTIONS: Hire corporate sales team, increase Q4 inventory, segment marketing. Data → Analysis → Story → Insights → Actions. This is data-driven decision making. In B.Com, data tells powerful stories. Your job: Analyze data, find stories, extract insights, take actions. Data without analysis = useless numbers. Data with analysis = actionable insights.'
    },
    {
      id: 5,
      question: 'You have sales insights (corporate clients: 40% revenue, Q4: 2× sales). Why create DATA VISUALIZATIONS?',
      options: [
        'To make pretty charts',
        'To SEE PATTERNS EASIER - humans process visuals faster than tables (bar chart shows corporate revenue instantly, line chart shows Q4 spike clearly)',
        'To hide data from audience',
        'To confuse stakeholders'
      ],
      correct: 1,
      explanation: 'Visualizations help SEE PATTERNS EASIER (not pretty charts, not hide data, not confuse). Humans process visuals 60,000× faster than text/tables. Example: TABLE vs CHART. Table: "Jan ₹30K, Feb ₹32K, Mar ₹35K, Apr ₹38K, May ₹40K, Jun ₹45K, Jul ₹50K, Aug ₹55K, Sep ₹60K, Oct ₹80K, Nov ₹100K, Dec ₹120K." Hard to see pattern. LINE CHART: Shows clear upward trend, dramatic Q4 spike (Oct-Dec). Instantly visible! BAR CHART: Corporate clients (₹40L) vs Individuals (₹60L). Instantly shows corporate = 40% of revenue. Visualizations enable: Quick pattern recognition, easy comparisons, clear communication. In B.Com, visualize data. Tables = hard to understand. Charts = easy to understand. Good visualization = communicate insights instantly. Your audience will thank you.'
    },
    // Statistical Thinking (6-10)
    {
      id: 6,
      question: 'Study: "People who drink coffee have 20% lower heart disease risk." What is the difference between CORRELATION and CAUSATION?',
      options: [
        'They are the same thing',
        'CORRELATION shows relationship (coffee drinkers have lower risk) but NOT CAUSE (maybe they also exercise more) - correlation ≠ causation',
        'Causation is weaker than correlation',
        'There is no difference'
      ],
      correct: 1,
      explanation: 'Correlation ≠ Causation (not same, causation not weaker, there IS difference). CORRELATION: Coffee drinkers have 20% lower heart disease risk (relationship exists). CAUSATION: Coffee CAUSES lower heart disease risk (coffee is the reason). Study shows correlation (relationship), NOT causation (cause). Why? CONFOUNDING VARIABLES: Maybe coffee drinkers also: Exercise more (exercise reduces heart disease), Eat healthier (diet reduces heart disease), Are wealthier (better healthcare). Coffee might not cause lower risk. Exercise/diet/wealth might be real causes. Coffee is just correlated (associated). To prove causation: Need randomized controlled trial (randomly assign people to drink coffee vs not drink coffee, control all other variables, measure heart disease). Correlation is easy to find. Causation is hard to prove. In B.Com, be skeptical. When you see "X is associated with Y", ask: Does X CAUSE Y? Or is there confounding variable Z? Correlation ≠ Causation. Remember this!'
    },
    {
      id: 7,
      question: 'Survey 1: 50 B.Com students, average GPA 7.5. Survey 2: 500 B.Com students, average GPA 7.2. Which is more RELIABLE and why?',
      options: [
        'Survey 1 is better (smaller is better)',
        'Survey 2 is more RELIABLE - LARGER sample size generally more reliable (reduces random variation, more representative)',
        'Sample size does not matter at all',
        'Both are equally reliable'
      ],
      correct: 1,
      explanation: 'Larger sample = more reliable (not smaller better, sample size DOES matter, not equally reliable). Survey 1: 50 students, GPA 7.5. Survey 2: 500 students, GPA 7.2. Which is true average? Survey 2 (500 students) is MORE RELIABLE. Why? (1) LARGER SAMPLE: 500 students more representative than 50 (covers more diversity). (2) REDUCES RANDOM VARIATION: 50 students might be lucky/unlucky sample (all high performers). 500 students averages out luck. (3) SMALLER MARGIN OF ERROR: Survey 1: ±0.5 GPA margin of error. Survey 2: ±0.15 GPA margin of error. Survey 2 is more precise. True average: Likely 7.2 (Survey 2), not 7.5 (Survey 1 - small sample, high variation). In B.Com, trust large samples more than small samples. Small sample (n<100): High variation, less reliable. Large sample (n>500): Low variation, more reliable. When you see statistics, ask: What is sample size? Large sample = trust more. Small sample = be skeptical.'
    },
    {
      id: 8,
      question: 'Study: "Average B.Com salary: ₹8L/year (95% confidence interval: ₹7L - ₹9L)." What is CONFIDENCE INTERVAL?',
      options: [
        'Absolute certainty (salary is exactly ₹8L)',
        'RANGE OF UNCERTAINTY - we are 95% confident true average is between ₹7L-₹9L (acknowledges uncertainty, more honest than single number)',
        'The average value only',
        'The most common value (mode)'
      ],
      correct: 1,
      explanation: 'Confidence interval = RANGE OF UNCERTAINTY (not certainty, not just average, not mode). Study: Average salary ₹8L (95% CI: ₹7L-₹9L). Interpretation: We are 95% CONFIDENT true average is between ₹7L-₹9L. We are NOT certain it is exactly ₹8L. Why uncertainty? (1) SAMPLE: We surveyed 500 B.Com grads (not all B.Com grads). Different sample might give different average. (2) VARIATION: Salaries vary (some ₹5L, some ₹12L). Average is estimate, not exact. 95% confidence interval: If we repeat survey 100 times, 95 times true average will be in ₹7L-₹9L range. 5 times it might be outside (due to sampling variation). Confidence interval is HONEST. It says: "We think average is ₹8L, but we are not certain. Could be ₹7L-₹9L." Single number (₹8L) is MISLEADING. It implies certainty (we are not certain). In B.Com, report confidence intervals (not just averages). Acknowledge uncertainty. Be honest about limitations. Confidence intervals = statistical honesty.'
    },
    {
      id: 9,
      question: 'News: "85% of B.Com students get placed within 6 months!" What should you ask when seeing STATISTICS?',
      options: [
        'Nothing, just accept the number',
        'HOW was data collected and BY WHOM? (sample size? methodology? who funded study? potential bias?) - question the source and method',
        'Ask for more statistics only',
        'Focus only on the number itself'
      ],
      correct: 1,
      explanation: 'When seeing statistics, ask: HOW collected and BY WHOM? (not just accept, not just more stats, not just focus on number). News: "85% placement rate!" QUESTION: (1) HOW WAS DATA COLLECTED? Sample size? (10 students or 1000 students?). Definition of "placed"? (any job or relevant job? ₹3L salary or ₹8L salary?). Time frame? (within 6 months of graduation or 6 months of starting job search?). (2) BY WHOM? College (biased - wants to look good), Independent agency (more credible), Students themselves (might be honest). Investigation reveals: Sample: 50 students (small!), Definition: Any job including ₹3L irrelevant jobs, By whom: College marketing department (biased!). REAL STORY: 85% is misleading. Small sample, loose definition, biased source. True placement rate (relevant jobs, ₹6L+): Likely 60-70%. In B.Com, be skeptical of statistics. Always ask: How? By whom? Sample size? Methodology? Potential bias? Do not accept numbers blindly. Question the source. Verify the method. Critical thinking = essential for data-driven decisions.'
    },
    {
      id: 10,
      question: 'Dataset: Salaries (₹5L, ₹6L, ₹7L, ₹7L, ₹8L, ₹8L, ₹9L, ₹50L). Mean: ₹12.5L. Median: ₹7.5L. Which better represents "typical" salary?',
      options: [
        'Mean and median are the same',
        'MEDIAN (₹7.5L) - less affected by OUTLIERS (₹50L outlier pulls mean up to ₹12.5L, median stays realistic at ₹7.5L)',
        'Mean is always better',
        'Neither is useful'
      ],
      correct: 1,
      explanation: 'Median better represents typical (not mean=median, mean not always better, both ARE useful). Dataset: ₹5L, ₹6L, ₹7L, ₹7L, ₹8L, ₹8L, ₹9L, ₹50L. MEAN: (5+6+7+7+8+8+9+50)/8 = ₹12.5L. MEDIAN: Middle value = (₹7L + ₹8L)/2 = ₹7.5L. Which is typical? MEDIAN (₹7.5L). Why? OUTLIER: ₹50L (CEO salary) pulls mean up to ₹12.5L. But 7 out of 8 people earn ₹5L-₹9L (typical is ₹7-8L, not ₹12.5L!). Mean (₹12.5L) is MISLEADING. It suggests typical salary is ₹12.5L (wrong - only 1 person earns that much). Median (₹7.5L) is REALISTIC. It represents middle person (half earn less, half earn more). When to use: MEAN: When no outliers (normal distribution). MEDIAN: When outliers exist (skewed distribution). In B.Com, use median for skewed data (salaries, house prices, wealth). Use mean for normal data (heights, test scores). Median = robust to outliers. Mean = sensitive to outliers. Know the difference!'
    },
    // Data Visualization (11-15)
    {
      id: 11,
      question: 'You need to compare sales across 5 product categories (Product A: ₹30L, Product B: ₹45L, Product C: ₹25L, Product D: ₹50L, Product E: ₹35L). What chart type?',
      options: [
        'Line chart (for trends over time)',
        'BAR CHART - best for COMPARING CATEGORIES (shows Product D highest ₹50L, Product C lowest ₹25L instantly)',
        'Scatter plot (for relationships)',
        'Pie chart (for parts of whole)'
      ],
      correct: 1,
      explanation: 'Bar chart for comparing categories (not line chart, not scatter plot, not pie chart). Use case: Compare sales across 5 product categories. BAR CHART: Shows 5 bars (A: ₹30L, B: ₹45L, C: ₹25L, D: ₹50L, E: ₹35L). Instantly see: Product D highest (₹50L), Product C lowest (₹25L), Product B second (₹45L). Easy comparison! Why not others? LINE CHART: For trends over time (sales Jan-Dec). Not for comparing categories. SCATTER PLOT: For relationships (price vs sales). Not for comparing categories. PIE CHART: For parts of whole (Product A = 17% of total). Not best for comparing values (hard to compare slice sizes). In B.Com, choose right chart: Comparing categories (Product A vs B vs C) → Bar chart. Trends over time (Jan vs Feb vs Mar) → Line chart. Relationship (price vs sales) → Scatter plot. Parts of whole (Product A = 30% of total) → Pie chart. Right chart = clear communication. Wrong chart = confusion.'
    },
    {
      id: 12,
      question: 'You need to show sales TREND over 12 months (Jan: ₹30L, Feb: ₹32L, ..., Dec: ₹50L). What chart type?',
      options: [
        'Bar chart (for category comparison)',
        'LINE CHART - best for TRENDS OVER TIME (shows upward trend, seasonal patterns, growth rate clearly)',
        'Pie chart (for distribution)',
        'Scatter plot (for correlation)'
      ],
      correct: 1,
      explanation: 'Line chart for trends over time (not bar chart, not pie chart, not scatter plot). Use case: Show sales trend over 12 months. LINE CHART: X-axis: Months (Jan-Dec), Y-axis: Sales (₹30L-₹50L). Line connects points, shows: Upward trend (₹30L → ₹50L = +67% growth!), Seasonal pattern (Q4 spike in Oct-Dec), Growth rate (steep in Q4, gradual in Q1-Q3). Instantly see: Sales are growing, Q4 is strongest, prepare for Q4 demand. Why not others? BAR CHART: Can show monthly sales, but line chart better for showing continuous trend. PIE CHART: Cannot show time trend (only shows distribution at one point). SCATTER PLOT: For relationship between 2 variables, not time trend. In B.Com, use line chart for time series: Sales over months, Stock price over years, Website traffic over weeks. Line chart shows: Trends (up/down/flat), Patterns (seasonal, cyclical), Growth rate (steep/gradual). Line chart = time trend visualization.'
    },
    {
      id: 13,
      question: 'You create dashboard with 10 charts, 20 metrics, 5 colors, complex legends. Manager: "I am confused!" What makes GOOD visualization?',
      options: [
        'Show all data possible (more is better)',
        'SIMPLE and FOCUSED on message - one chart, one message (remove clutter, highlight key insight, make it easy to understand)',
        'Complex and impressive looking',
        'Use many colors and effects'
      ],
      correct: 1,
      explanation: 'Good visualization = SIMPLE and FOCUSED (not all data, not complex, not many colors). Your dashboard: 10 charts, 20 metrics, 5 colors, complex legends. Manager: Confused! Problem: TOO MUCH INFORMATION. Cognitive overload. Cannot see key message. FIX: SIMPLIFY. One chart, one message. Example: Key insight: "Q4 sales are 2× higher than Q1-Q3." SIMPLE CHART: Line chart, 12 months, highlight Q4 spike (red color). Title: "Q4 Sales Spike: Prepare Inventory." ONE CHART, ONE MESSAGE. Manager: "Got it! Q4 is critical. I will increase inventory." Good visualization principles: (1) ONE MESSAGE (not 10 messages), (2) REMOVE CLUTTER (no unnecessary gridlines, legends, colors), (3) HIGHLIGHT KEY INSIGHT (use color to draw attention), (4) CLEAR TITLE (tells the story). In B.Com, less is more. Simple chart = clear message = action. Complex dashboard = confusion = no action. Your goal: Communicate insight (not impress with complexity). Simplicity = power.'
    },
    {
      id: 14,
      question: 'You create chart showing sales growth. Y-axis starts at ₹45L (not ₹0). Growth looks HUGE (₹45L to ₹50L). How to avoid MISLEADING visualizations?',
      options: [
        'Hide data that does not support your story',
        'Use HONEST AXES and SCALES - Y-axis should start at ₹0 (shows true growth: ₹50L is only 11% more than ₹45L, not huge)',
        'Manipulate scales to exaggerate',
        'Cherry-pick data to show only good news'
      ],
      correct: 1,
      explanation: 'Avoid misleading: HONEST AXES and SCALES (not hide data, not manipulate, not cherry-pick). Your chart: Y-axis starts at ₹45L (not ₹0). Sales: ₹45L → ₹50L. Looks HUGE (line goes from bottom to top of chart). MISLEADING! True growth: ₹50L - ₹45L = ₹5L (+11%). Not huge. Modest growth. FIX: Y-axis starts at ₹0. Now chart shows: ₹45L → ₹50L is small increase (line barely moves). HONEST representation. Other misleading tactics: (1) TRUNCATED Y-AXIS (start at ₹45L, not ₹0 - exaggerates growth), (2) CHERRY-PICKED DATA (show only good months, hide bad months), (3) MANIPULATED SCALES (use log scale to hide decline), (4) MISLEADING COLORS (red for good, green for bad - confuses). In B.Com, be HONEST. Do not manipulate visualizations to support your story. Show truth (even if it is not impressive). Honest visualization = trust, credibility. Misleading visualization = lose trust, lose credibility. Your reputation depends on honesty. Always use honest axes, scales, data. Integrity > impressive charts.'
    },
    {
      id: 15,
      question: 'You create technical chart with statistical jargon for CEO (non-technical). CEO: "I do not understand!" Who should you VISUALIZE FOR?',
      options: [
        'For yourself only',
        'For AUDIENCE UNDERSTANDING - use simple language, clear labels, explain context (CEO needs business insights, not statistical jargon)',
        'For technical experts only',
        'To impress with complexity'
      ],
      correct: 1,
      explanation: 'Visualize for AUDIENCE (not yourself, not experts only, not to impress). Your chart: Technical, statistical jargon, complex. CEO: Non-technical, confused. Problem: WRONG AUDIENCE. You visualized for yourself (technical), not for CEO (non-technical). FIX: KNOW YOUR AUDIENCE. CEO needs: Business insights (not statistical details), Simple language (not jargon), Clear recommendations (not raw data). REDESIGN: Title: "Q4 Sales Spike: Increase Inventory by 50%." Chart: Simple line chart, clear labels, no jargon. Insight: "Q4 sales are 2× higher. We need more inventory to meet demand." CEO: "Perfect! I understand. Approved!" Audience types: (1) EXECUTIVES (CEO, VP): Simple, business insights, recommendations. (2) MANAGERS: Moderate detail, actionable insights. (3) ANALYSTS: Technical, detailed, statistical. In B.Com, adapt visualization to audience. Same data, different visualizations. CEO: Simple, high-level. Analyst: Detailed, technical. Know your audience. Visualize for THEIR understanding (not yours). Good visualization = audience understands and acts. Bad visualization = audience confused and ignores.'
    },
    // Hypothesis Testing (16-20)
    {
      id: 16,
      question: 'Manager: "I think personalized emails improve open rate." You need to test this. What is a HYPOTHESIS?',
      options: [
        'A proven fact',
        'A TESTABLE STATEMENT - "Personalized emails increase open rate from 15% to 20%" (specific, measurable, can be tested with A/B test)',
        'A wild guess with no basis',
        'A final conclusion'
      ],
      correct: 1,
      explanation: 'Hypothesis = TESTABLE STATEMENT (not proven fact, not wild guess, not final conclusion). Manager: "I think personalized emails improve open rate." This is vague belief. FORM HYPOTHESIS: "If I change email subject lines from GENERIC to PERSONALIZED, then open rate will increase from 15% to 20% (+5 percentage points)." Hypothesis components: (1) SPECIFIC: What you change (generic → personalized subject lines), (2) MEASURABLE: What you measure (open rate 15% → 20%), (3) TESTABLE: Can run A/B test (control: generic, test: personalized, measure open rates, compare). Hypothesis is NOT: Proven fact (need to test first), Wild guess (based on manager observation), Final conclusion (need evidence first). Hypothesis is: Testable prediction. You will test it (A/B test), gather data (open rates), analyze (is 20% significantly better than 15%?), conclude (hypothesis supported or refuted). In B.Com, form clear hypotheses before testing. Vague belief → Clear hypothesis → Test → Evidence → Conclusion. Hypothesis = starting point for rigorous testing.'
    },
    {
      id: 17,
      question: 'Hypothesis: "Personalized emails increase open rate from 15% to 20%." You also need NULL HYPOTHESIS. What is null hypothesis?',
      options: [
        'Your theory that emails work',
        'NO EFFECT exists - "Personalized emails will NOT affect open rate (will remain 15%)" - default skeptical position to test against',
        'The positive result you expect',
        'Your personal belief'
      ],
      correct: 1,
      explanation: 'Null hypothesis = NO EFFECT (not your theory, not positive result, not belief). Your hypothesis: "Personalized emails increase open rate 15% → 20%." NULL HYPOTHESIS: "Personalized emails will NOT affect open rate (will remain 15%)." Hypothesis testing logic: (1) START with null hypothesis (assume no effect - skeptical position), (2) COLLECT DATA (run A/B test, measure open rates), (3) ANALYZE: Is there enough evidence to REJECT null hypothesis? If p-value < 0.05: Reject null (personalized emails DO work). If p-value > 0.05: Cannot reject null (personalized emails do NOT significantly work). Null hypothesis = "innocent until proven guilty." Assume nothing works until data proves otherwise. This prevents: False positives (claiming something works when it does not), Confirmation bias (seeing effects that do not exist). In B.Com, always state null hypothesis. Test data against null. If data strongly contradicts null (p < 0.05) → Reject null, accept your hypothesis. If data does not contradict null (p > 0.05) → Cannot reject null, hypothesis not supported. Null hypothesis = scientific rigor.'
    },
    {
      id: 18,
      question: 'You run A/B test: Control (generic emails): 15% open rate. Test (personalized): 18% open rate. Why TEST hypotheses?',
      options: [
        'To confirm your existing beliefs',
        'To OBJECTIVELY VALIDATE or REFUTE - find TRUTH (does personalization work or not?) based on data, not opinions',
        'To prove you are right',
        'To impress others with testing'
      ],
      correct: 1,
      explanation: 'Test to OBJECTIVELY VALIDATE or REFUTE (not confirm beliefs, not prove right, not impress). Purpose: Find TRUTH. Does personalization work? Or not? You might BELIEVE: "Personalization works." But belief ≠ truth. TEST reveals truth: Control 15%, Test 18%, Difference +3%, p-value 0.02 (< 0.05 = SIGNIFICANT). CONCLUSION: Personalization DOES work (belief confirmed by data). Alternative outcome: Control 15%, Test 15.5%, p-value 0.45 (> 0.05 = NOT significant). CONCLUSION: Personalization does NOT significantly work (belief refuted by data). Hypothesis testing protects you from: (1) CONFIRMATION BIAS (seeing what you want to see), (2) ASSUMPTIONS (thinking something works without proof), (3) WASTED EFFORT (implementing changes that do not work). In B.Com, test to find truth (not to confirm beliefs). Be open to: Hypothesis confirmed (it works!) OR Hypothesis refuted (it does not work). Either outcome is valuable learning. Testing = objective truth-seeking (not subjective belief-confirming).'
    },
    {
      id: 19,
      question: 'You believe: "Posting at 7 PM gets more engagement." You test: Post 10 times at 7 PM. 8 succeed, 2 fail. You report: "7 PM works!" Manager: "What about 9 AM? Did you test?" This is CONFIRMATION BIAS. What is it?',
      options: [
        'Good practice for testing',
        'SEEKING ONLY DATA that confirms beliefs - test only 7 PM, ignore failures, do not test alternatives (leads to biased conclusions)',
        'Objective analysis approach',
        'Proper scientific testing'
      ],
      correct: 1,
      explanation: 'Confirmation bias = SEEKING ONLY DATA that confirms beliefs (not good practice, not objective, not proper testing). You believe: "7 PM works." CONFIRMATION BIAS: (1) Test only 7 PM (do not test 9 AM, 12 PM, 3 PM - maybe they work better?), (2) Focus on 8 successes (ignore 2 failures), (3) Conclude "7 PM works" (without comparing to alternatives). PROPER TEST: Post 10 times at 7 PM, 10 times at 9 AM, 10 times at 12 PM, 10 times at 3 PM (40 posts total). Compare average engagement. Results: 9 AM: 600 likes (best!), 7 PM: 450 likes, 12 PM: 400 likes, 3 PM: 350 likes. CONCLUSION: 9 AM is BEST (not 7 PM!). Your initial conclusion was WRONG (confirmation bias - only tested your belief, did not test alternatives). In B.Com, avoid confirmation bias: (1) Test alternatives (not just your belief), (2) Look at ALL data (successes AND failures), (3) Be open to being wrong (maybe your belief is incorrect). Objective testing > confirming beliefs. Test to find truth (not to confirm what you already think).'
    },
    {
      id: 20,
      question: 'You tested: Personalized emails (Control 15%, Test 18%, p=0.02 significant). How should you CONCLUDE?',
      options: [
        'Based on gut feeling',
        'Based on EVIDENCE from testing - p<0.05 = significant, personalized emails work, implement them, expect +3% open rate improvement',
        'Based on personal opinions',
        'Based on hopes and wishes'
      ],
      correct: 1,
      explanation: 'Conclude based on EVIDENCE (not gut feeling, not opinions, not hopes). Test results: Control 15%, Test 18%, Difference +3%, p-value 0.02 (< 0.05 = SIGNIFICANT). EVIDENCE-BASED CONCLUSION: "Personalized emails significantly improve open rate from 15% to 18% (+3%, p < 0.05). RECOMMENDATION: Implement personalized emails for all campaigns. EXPECTED IMPACT: If we send 10,000 emails/month, we will get 300 more opens/month (1,800 vs 1,500)." Conclusion based on: (1) RIGOROUS TEST (control + test groups, n=1000 each, randomized), (2) STATISTICAL SIGNIFICANCE (p < 0.05 - difference is real, not random), (3) SUFFICIENT SAMPLE (1000 per group - reliable), (4) OBJECTIVE ANALYSIS (not biased). Do NOT conclude based on: Gut feeling ("I think it works"), Small sample (50 emails), Confirmation bias (only looking at successes), Assumptions (no testing). In B.Com, evidence-based conclusions = reliable, actionable, trustworthy. Assumption-based conclusions = unreliable, risky, often wrong. Always test. Always use evidence. Make data-driven decisions. Evidence > Opinions.'
    },
    // Metrics & KPIs (21-25)
    {
      id: 21,
      question: 'Manager: "Grow Instagram." You work 3 months. Manager: "How are we doing?" You: "Good!" Manager: "What was GOAL? 15K followers? 20K? You did not define SMART goal." What are SMART goals?',
      options: [
        'Simple goals anyone can achieve',
        'SPECIFIC, MEASURABLE, ACHIEVABLE, RELEVANT, TIME-BOUND - "Increase engagement from 5% to 7% in 3 months" (clear target, measurable progress)',
        'Smart people goals for intelligent teams',
        'Easy goals requiring no effort'
      ],
      correct: 1,
      explanation: 'SMART goals = SPECIFIC, MEASURABLE, ACHIEVABLE, RELEVANT, TIME-BOUND (not simple, not smart people, not easy). Manager: "Grow Instagram." VAGUE (what does "grow" mean? How much? By when?). SMART GOAL: "Increase Instagram engagement rate from 5% to 7% (+40%) within 3 months by posting 70% customer stories (high engagement content)." SMART components: (1) SPECIFIC: Engagement rate (not just "grow"), (2) MEASURABLE: 5% → 7% (can track progress monthly: 5% → 5.5% → 6.2% → 7%), (3) ACHIEVABLE: +40% in 3 months (challenging but possible with customer stories), (4) RELEVANT: Engagement drives conversions and revenue (business goal), (5) TIME-BOUND: 3 months (clear deadline, accountability). SMART goal enables: Clear target (7%), Measurable progress (track monthly), Accountability (achieved or not?). Vague goal = cannot measure progress. SMART goal = can measure, can achieve. In B.Com, always set SMART goals. Vague ("improve performance") → SMART ("increase GPA from 7.2 to 8.0 in 1 semester"). SMART goals = measurable success.'
    },
    {
      id: 22,
      question: 'Goal: Increase revenue from ₹5L to ₹10L/month. Manager: "Track revenue monthly?" You: "Yes." Manager: "Revenue is LAGGING. You need LEADING indicators too." What are leading indicators?',
      options: [
        'Past results that measure what happened',
        'PREDICT FUTURE - engagement rate, CTR, posting frequency (if engagement drops, revenue will drop next month - act proactively NOW)',
        'Indicators that lag behind performance',
        'Optional indicators not needed'
      ],
      correct: 1,
      explanation: 'Leading indicators PREDICT FUTURE (not past results, not lag behind, not optional). Manager: "Revenue is LAGGING indicator (measures past). By the time you see revenue is low, too late to fix. You need LEADING indicators." LEADING INDICATORS (predict future revenue): (1) Engagement rate (5% - if drops to 3%, revenue will drop next month. Fix engagement NOW, prevent revenue drop), (2) Click-through rate (1.5% - if drops, fewer visit website, conversions drop, revenue drops. Fix CTR NOW), (3) Posting frequency (7 posts/week - if drops to 3, reach decreases, engagement decreases, revenue decreases. Fix posting NOW). Leading indicators = early warning system. They predict problems BEFORE they happen. You can act PROACTIVELY. Example: Engagement drops 5% → 3% (leading indicator warning). You act immediately (post more customer stories, improve content). Next month: Engagement recovers to 5%, revenue stays stable at ₹5L (you prevented revenue drop!). Without leading indicators: You only see revenue drop ₹5L → ₹3L (lagging indicator). Too late to fix. In B.Com, track leading indicators (predict future, act proactively) + lagging indicators (measure results, confirm success). Leading = prevent problems. Lagging = measure results.'
    },
    {
      id: 23,
      question: 'You track engagement (5%), CTR (1.5%), posting (7/week). Manager: "These are LEADING. What about LAGGING indicators?" What are lagging indicators?',
      options: [
        'Predict future performance',
        'MEASURE PAST RESULTS - revenue, conversions, followers (tell you if you SUCCEEDED - confirm your actions worked)',
        'Lead performance and drive success',
        'Are useless and should not track'
      ],
      correct: 1,
      explanation: 'Lagging indicators MEASURE PAST RESULTS (not predict future, not lead performance, not useless). Manager: "Leading indicators predict future (engagement, CTR, posting). Good. But you also need LAGGING indicators (measure results)." LAGGING INDICATORS (measure past results): (1) Revenue (₹5L/month - result of your actions), (2) Conversions (100 purchases/month - result of engagement and CTR), (3) Follower count (10,000 followers - result of posting frequency and content quality). Lagging = results of your actions. They tell you: Did you SUCCEED? Did your actions work? Example: You posted 70% customer stories (high engagement content) for 3 months. LEADING indicators during 3 months: Engagement improved 5% → 6.5% (+30%). LAGGING indicators after 3 months: Revenue improved ₹5L → ₹6.5L (+30%), Conversions improved 100 → 130 (+30%). Lagging indicators CONFIRM: Your actions (posting customer stories) worked! Leading predicted success, lagging confirmed success. Track BOTH: Leading (predict future, act proactively) + Lagging (measure results, confirm actions worked). In B.Com, use both: Leading (early warning, prevent problems) + Lagging (measure success, celebrate wins, learn from failures).'
    },
    {
      id: 24,
      question: 'You report: "We have 10,000 followers! (+200 in 3 months!)" Manager: "Followers is VANITY METRIC. We need ACTIONABLE METRICS." What are vanity metrics?',
      options: [
        'Are the best metrics to track',
        'LOOK GOOD but NOT ACTIONABLE - total followers, total likes (cannot act on them - do not tell you WHAT TO DO)',
        'Drive business decisions effectively',
        'Are necessary for business success'
      ],
      correct: 1,
      explanation: 'Vanity metrics LOOK GOOD but NOT ACTIONABLE (not best, do not drive decisions, not necessary). Manager: "Followers (10,000) is VANITY METRIC. Looks impressive. But SO WHAT? What can we DO with this? Nothing. We cannot improve followers directly. We need ACTIONABLE METRICS." VANITY METRIC: Total followers (10,000). So what? Cannot act on this. ACTIONABLE METRIC: Follower growth rate by content type (Customer stories: +50 followers/post, Product posts: +10 followers/post, Discount posts: +30 followers/post). ACTION: Post more customer stories (+50 followers/post = 5× more than product posts). VANITY METRIC: Total likes (50,000 likes across all posts). So what? ACTIONABLE METRIC: Average likes per post by posting time (Morning 9 AM: 300 likes, Evening 7 PM: 600 likes). ACTION: Post in evening (2× more engagement). Vanity metrics = look impressive, cannot act on. Actionable metrics = drive decisions, tell you what to do. Focus on ACTIONABLE (engagement by content type, CTR by posting time, conversions by traffic source). Ignore VANITY (total followers, total likes, total reach). In B.Com, avoid vanity metrics trap. Do not report "We have 10,000 followers!" Report "Customer stories get 8% engagement (vs 2% for product posts). We should post 70% customer stories." Actionable metrics = drive actions = improve performance.'
    },
    {
      id: 25,
      question: 'Manager: "We need metrics that drive decisions (not just look impressive)." What makes a metric GOOD (actionable)?',
      options: [
        'Impresses others and looks good',
        'INFORMS DECISIONS and DRIVES ACTION - engagement by content type → post more customer stories (tells you WHAT TO DO)',
        'Are complex and difficult to understand',
        'Are many in number (track 100+ metrics)'
      ],
      correct: 1,
      explanation: 'Good metrics INFORM DECISIONS and DRIVE ACTION (not impress, not complex, not many). Manager: "Good metrics answer: What should we DO? Bad metrics just look impressive." GOOD (ACTIONABLE) METRIC: Engagement rate by content type (Customer stories: 8%, Product posts: 2%, Discount posts: 5%). DECISION: "Post 70% customer stories (highest engagement), 20% discount posts (medium), 10% product posts (lowest)." ACTION: Implement new content mix. RESULT: Average engagement improves 5% → 6.5% (+30%!). Metric drove decision. Decision drove action. Action improved performance. This is data-driven decision making. BAD (VANITY) METRIC: Total likes (50,000). DECISION: "Umm... keep posting?" (No clear action). RESULT: No improvement (metric did not inform decision). Good metrics have 3 properties: (1) ACTIONABLE (tell you what to do), (2) SIMPLE (easy to understand and communicate), (3) FEW (track 5-10 key metrics, not 100). In B.Com, focus on few actionable metrics. Example: Social media (5 metrics: Engagement by content type, CTR by posting time, Conversions by traffic source, Revenue, Follower growth). Track few actionable metrics. Ignore many vanity metrics. Good metrics = drive decisions = improve performance.'
    },
    // Evidence-Based Decisions (26-30)
    {
      id: 26,
      question: 'CEO: "Should we launch Feature X or Y?" VP Sales: "Feature X! My gut!" VP Marketing: "Feature Y! Trending!" CEO: "What do YOU think?" You: "Feature X sounds cool?" CEO: "Do you have DATA?" What are evidence-based decisions?',
      options: [
        'Ignore data, follow gut feeling',
        'COMBINE DATA with SOUND JUDGMENT - gather evidence, evaluate quality, analyze objectively, balance with judgment, document',
        'Only use data, ignore human judgment',
        'Follow opinions of highest paid person'
      ],
      correct: 1,
      explanation: 'Evidence-based = COMBINE DATA with JUDGMENT (not ignore data, not only data, not follow opinions). CEO: "Opinions are not evidence. We need DATA." Evidence-based process: (1) GATHER EVIDENCE (customer surveys, usage data, support tickets, competitor analysis, market research), (2) EVALUATE QUALITY (sample size, relevance, recency, objectivity, source credibility), (3) ANALYZE OBJECTIVELY (what does evidence say? Avoid confirmation bias, avoid HiPPO), (4) BALANCE WITH JUDGMENT (data informs facts/trends, judgment decides strategy/execution/timing), (5) DOCUMENT (decision, evidence, alternatives, assumptions, expected outcomes, review date). Evidence-based ≠ purely data-driven (ignores human judgment, strategy, context). Evidence-based = data + judgment. Example: Evidence says "Feature Y" (60% customer preference, 4× support tickets, 3/3 competitor success). Judgment confirms "Feature Y" (strategic fit, execution capability, timing, competitive advantage). Evidence + Judgment = STRONG RECOMMENDATION. In B.Com, make evidence-based decisions (not opinion-based). Gather data, evaluate quality, analyze objectively, balance with judgment. Result: Better decisions, better outcomes, less risk.'
    },
    {
      id: 27,
      question: 'Meeting: VP Sales (highest paid): "Launch Feature X!" You: "Data shows customers prefer Feature Y (60% vs 40%)." VP Sales: "I have 20 years experience! Data is wrong!" CEO: "Let us go with Feature X." 6 months: Feature X fails. This is HiPPO. What is it?',
      options: [
        'Hippopotamus animal',
        'HIGHEST PAID PERSON OPINION overrides data - senior person opinion wins even when data contradicts (leads to bad decisions)',
        'Good practice for decision making',
        'Animal-based decision framework'
      ],
      correct: 1,
      explanation: 'HiPPO = HIGHEST PAID PERSON OPINION overrides data (not hippopotamus, not good practice, not animal framework). Problem: VP Sales is highest paid, most experienced, most confident. So his opinion wins (even when data contradicts: customers prefer Feature Y 60% vs 40%). CEO follows VP Sales (defers to seniority, experience, confidence). Result: Feature X launches, fails (customers did not want it). ₹50L wasted. Why HiPPO is bad: (1) IGNORES EVIDENCE (data shows Feature Y, but opinion overrides), (2) AUTHORITY BIAS (senior person must be right because of experience), (3) CONFIDENCE BIAS (loud, confident opinion sounds more convincing than quiet data), (4) POLITICAL (easier to agree with boss than challenge with data). How to avoid HiPPO: (1) CULTURE (make data-driven decisions the norm), (2) EVIDENCE FIRST (always ask "What does data say?" before opinions), (3) CHALLENGE RESPECTFULLY ("I understand your experience, but data shows..."), (4) DOCUMENT (write down evidence, makes it harder to ignore). In B.Com, recognize HiPPO. Do not let senior person opinion override evidence. Present data clearly, respectfully challenge when data contradicts opinion, advocate for evidence-based decisions. Data > Opinions. Evidence > Politics. Facts > Gut feeling.'
    },
    {
      id: 28,
      question: 'You gather: (1) Survey (10 responses), (2) Blog ("AI is future!"), (3) Friend ("Feature X cool"), (4) Competitor launched Feature X. CEO: "Did you evaluate QUALITY?" How evaluate evidence?',
      options: [
        'By amount only (more = better)',
        'By QUALITY, RELEVANCE, SOURCE CREDIBILITY - sample size, relevance, recency, objectivity, source (weight high-quality evidence more)',
        'By who provides it (senior = credible)',
        'By age (older = more credible)'
      ],
      correct: 1,
      explanation: 'Evaluate by QUALITY, RELEVANCE, CREDIBILITY (not amount, not who provides, not age). CEO: "You gathered evidence. But did you evaluate QUALITY?" Your evidence: (1) Survey (10 responses): LOW QUALITY (tiny sample, need 100+). Weight: 5%. (2) Blog ("AI is future!"): LOW QUALITY (opinion piece, not research). Weight: 0%. (3) Friend ("Feature X cool"): LOW QUALITY (anecdotal, not representative). Weight: 0%. (4) Competitor launched Feature X: MEDIUM QUALITY (but did it succeed? You did not check). Weight: 10%. Total quality: LOW. You gathered weak evidence. Garbage in, garbage out. HIGH-QUALITY evidence: (1) Customer surveys (500 responses): HIGH QUALITY (large sample, representative, recent, relevant). Weight: 30%. (2) Usage data (10,000 users): HIGH QUALITY (large sample, objective, behavioral). Weight: 30%. (3) Support tickets (2,000 tickets): MEDIUM QUALITY (real pain points, but biased). Weight: 20%. Evaluate by: (1) SAMPLE SIZE (larger = better, 10 = weak, 500 = strong), (2) RELEVANCE (our customers vs general market), (3) RECENCY (recent = better, old might be outdated), (4) OBJECTIVITY (behavioral data > opinions), (5) SOURCE CREDIBILITY (research study > blog post). In B.Com, do not treat all evidence equally. Evaluate quality. Weight high-quality more. Ignore low-quality. Result: Better decisions based on strong evidence.'
    },
    {
      id: 29,
      question: 'You gather evidence: Customers prefer Feature Y (60% vs 40%). CEO: "So launch Feature Y?" You: "Yes, data says so." CEO: "What about strategy? Execution? Timing?" What is DATA role in decisions?',
      options: [
        'Data makes all decisions automatically',
        'Data INFORMS (provides facts, trends), JUDGMENT FINALIZES (considers strategy, execution, timing) - combine both',
        'Data is unnecessary, judgment enough',
        'Data replaces human thinking'
      ],
      correct: 1,
      explanation: 'Data INFORMS, judgment FINALIZES (not data makes all decisions, not data unnecessary, not data replaces thinking). CEO: "Data says Feature Y. But what about strategy, execution, timing?" You need BOTH data and judgment. DATA (Quantitative): Feature Y wins (60% customer preference, 4× support tickets, 3/3 competitor success, 30% market growth). Data provides: Facts, trends, customer preferences, market dynamics. JUDGMENT (Qualitative): (1) STRATEGIC FIT: Does Feature Y align with company vision? (Yes - we are analytics company), (2) EXECUTION RISK: Can we build Feature Y well? (Yes - we have analytics expertise), (3) TIMING: Is now right time? (Yes - market growing 30%/year), (4) COMPETITIVE ADVANTAGE: Will Feature Y differentiate us? (Yes - we can build better analytics). Judgment provides: Strategy, execution capability, timing, competitive positioning. DATA + JUDGMENT = STRONG RECOMMENDATION: Launch Feature Y. Data alone is not enough (ignores strategy, execution, context). Judgment alone is not enough (ignores facts, trends, customer preferences). COMBINE BOTH: Data informs (what customers want, what market demands), Judgment decides (how to execute, when to launch, how to differentiate). In B.Com, balance data with judgment. Use data to inform (not dictate). Use judgment to decide (not ignore data). Best decisions combine both.'
    },
    {
      id: 30,
      question: 'You decide: "Launch Feature Y." CEO: "Why?" You: "Data shows customers prefer it." CEO: "What evidence? Alternatives? Assumptions?" You: "I do not remember." 6 months: Feature Y fails. CEO: "Why did we launch Y?" You: "I do not remember." Why DOCUMENT decisions?',
      options: [
        'To cover yourself when things go wrong',
        'To LEARN FROM OUTCOMES and IMPROVE - understand what evidence was predictive, what assumptions wrong, refine decision process',
        'To blame others for failures',
        'To waste time on paperwork'
      ],
      correct: 1,
      explanation: 'Document to LEARN and IMPROVE (not cover yourself, not blame others, not waste time). CEO: "You did not document rationale?! Now we cannot learn from failure." Problem: You decided, moved on, forgot reasoning. When decision fails, you cannot learn (do not remember why, what evidence, what assumptions). DECISION DOCUMENT includes: (1) DECISION: Launch Feature Y (analytics), not X (AI). (2) EVIDENCE: Customer surveys (60% prefer Y), Usage data (80% use analytics), Support tickets (4× more requests), Competitor analysis (analytics more successful), Market research (analytics growing faster). (3) ALTERNATIVES: Feature X rejected (less demand, lower success, slower growth). (4) ASSUMPTIONS: Customers will pay for analytics, We can build in 6 months, Market growth continues. (5) EXPECTED OUTCOME: +500 customers, +₹1Cr revenue. (6) REVIEW DATE: 6 months. Documentation enables: (1) LEARN FROM OUTCOMES (6 months: Did we achieve +500 customers? If yes, what evidence was predictive? If no, what went wrong?), (2) IMPROVE DECISIONS (understand which evidence sources are most reliable, which assumptions tend to hold, refine process), (3) INSTITUTIONAL KNOWLEDGE (when you leave, team knows why decisions were made, can learn from history). In B.Com, document all major decisions. Write: Decision, evidence, alternatives, assumptions, expected outcomes, review date. Review outcomes. Learn. Improve. Continuous improvement in decision making.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Data-driven master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong data skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep learning!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review data concepts!', xpReward: 100 }
  }
};
