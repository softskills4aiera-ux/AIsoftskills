// Module 6: Teamwork & Collaboration - Gen Z focused

export interface SubtopicData {
  id: string;
  title: string;
  emoji: string;
  context: 'academic' | 'professional' | 'personal';
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

export const module6Data: SubtopicData[] = [
  {
    id: 'team-dynamics',
    title: 'Team Dynamics',
    emoji: '👥',
    context: 'professional' as const,
    discover: {
      scenario: "B.Com group project. 5 members. Week 1: 'This'll be awesome!' Week 2: Priya vs Rahul fight, Ankit silent, Sarah ghosting. Prof: 'You're storming—it's normal. Learn team dynamics or fail.'",
      problemExplanation: [
        "Forming confusion: Week 1 = super polite, zero work. Everyone nice, no one leads",
        "Storming chaos: Week 2 = fights everywhere. Don't know if team's broken or normal",
        "Role disaster: 'You do slides, I'll research'—who approves? Who decides? Overlap + gaps",
        "Ankit silent: Has ideas, Rahul interrupts, gives up. Lost 50% of team IQ"
      ],
      solutionApproach: [
        "Know stages: Forming (polite/low output) → Storming (fights/normal) → Norming (clarity) → Performing (crushing it)",
        "Navigate storming: Don't panic. Facilitate: 'Priya why research? Rahul why skip?' Find middle ground. Breakthrough happens here",
        "RACI matrix: Each task = R (does it), A (approves), C (advises), I (informed). Zero overlap/gaps",
        "Psychological safety: Ask Ankit's opinion. Thank disagreement. Share your mistakes. Everyone speaks = team wins"
      ]
    },
    video: {
      title: 'From Chaos to High Performance: Team Dynamics for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR TALENTED TEAM IS A MESS

"Week 1: Your B.Com group project team is excited. 5 talented members. Everyone agrees: 'This will be great!' Week 2: Chaos. Priya vs Rahul (market research debate). Ankit is silent but complains privately. Sarah disappears for 3 days. You think: 'We have talent, but we are a mess!' Your professor says: 'You are in storming stage. This is normal.' You think: 'Normal? We are failing!' By the end of this video, you will understand team dynamics - how teams form, storm, norm, and perform. You will learn to navigate chaos and reach high performance. Let us fix your team."

[0:45-2:30] THE 4 STAGES: FORMING → STORMING → NORMING → PERFORMING

"Teams go through 4 stages (Tuckman Model).

STAGE 1 - FORMING (Week 1): Polite, agreeable, avoiding conflict.
Behavior: 'This will be great!' 'I agree!' 'Whatever you think!'
Productivity: LOW (everyone is cautious, testing boundaries).
Problem: You mistake politeness for teamwork. Reality: This is honeymoon phase, not high performance.

STAGE 2 - STORMING (Week 2-3): Conflict, disagreement, power struggles.
Behavior: Priya vs Rahul (market research debate). Ankit feels unheard. Sarah withdraws.
Productivity: DROPS (energy goes to conflict, not work).
Problem: You think team is broken. Reality: Storming is NORMAL and NECESSARY. Honest opinions emerge. Power dynamics surface. This is where teams either break or breakthrough.

STAGE 3 - NORMING (Week 4-5): Resolve conflicts, agree on norms, roles clear.
Behavior: 'Let us establish ground rules.' 'Here is who does what.' 'We will meet weekly.'
Productivity: RISES (energy goes to work, not conflict).
Progress: Team finds its rhythm. Trust builds. Collaboration improves.

STAGE 4 - PERFORMING (Week 6+): High trust, clear roles, smooth collaboration.
Behavior: Team operates like well-oiled machine. Minimal conflict. Maximum output.
Productivity: HIGH (team delivers excellent results).
Goal: This is where you want to be. But you must navigate forming → storming → norming to get here.

KEY INSIGHT: Most teams get stuck in STORMING because they do not know how to navigate it. You will learn how."

[2:30-4:00] STORMING IS NORMAL (Do Not Panic, Navigate It)

"Week 2: Priya wants market research. Rahul says: 'Waste of time.' Conflict erupts. You panic: 'Team is broken!'

WRONG MINDSET: 'Conflict = team failure. We should avoid conflict. Everyone should agree.'
Result: You suppress conflict. Priya and Rahul stay silent. Resentment builds. Team stays stuck in forming (polite but unproductive).

RIGHT MINDSET: 'Conflict = team growth. Storming is normal. Let us navigate it.'
Result: You facilitate: 'Priya, why is research important? Rahul, why skip it?' Priya: 'Research ensures we target right market.' Rahul: 'We have limited time. Research might delay us.' You: 'What if we do quick research (2 days, not 2 weeks)? Priya gets data. Rahul gets speed.' Both agree. Conflict resolved. Team moves to norming.

HOW TO NAVIGATE STORMING:
1. Acknowledge it: 'We are in storming. Conflict is normal. Let us work through it.'
2. Address conflicts early: Do not let them fester. Priya vs Rahul? Discuss immediately.
3. Use tools: RACI (clarify roles), norms (establish expectations), psychological safety (everyone can speak).
4. Be patient: Storming takes 2-3 weeks. Do not expect immediate harmony.
5. Celebrate norming: Week 4, conflicts reduce. You say: 'We made it through storming! We are stronger now.'

RESULT: By Week 6, team reaches PERFORMING (high trust, smooth collaboration, excellent results)."

[4:00-5:30] RACI MATRIX: ELIMINATE ROLE CONFUSION

"Week 3: You assign tasks. 'Priya, research. Rahul, slides. Ankit, data. Sarah, design. I coordinate.' Week 4: Chaos. Priya and Ankit both research (overlap). Nobody writes report (gap). Sarah misses deadline: 'I thought Rahul was doing design!' (confusion).

PROBLEM: Unclear roles. You said 'Priya, research' but did not clarify: Who approves research? Who gives input? Who needs updates?

SOLUTION: RACI Matrix. For EACH task, assign:
- R (Responsible): Who DOES the work?
- A (Accountable): Who APPROVES/owns outcome?
- C (Consulted): Who gives INPUT before?
- I (Informed): Who needs UPDATES after?

EXAMPLE: Task = Market Research
- R: Priya (does research)
- A: You (approve research scope and quality)
- C: Rahul, Ankit (give input on what to research)
- I: Sarah (gets research findings to inform design)

RACI eliminates:
1. Overlapping work: Only Priya is R for research (not Ankit).
2. Gaps: Every task has R and A (report writing is assigned).
3. Confusion: Sarah knows she is I (informed), not R (responsible) for research.

CREATE RACI in Week 2 (before storming escalates). Review weekly. Update as needed. RACI transforms chaos into clarity."

[5:30-6:45] PSYCHOLOGICAL SAFETY: THE #1 PREDICTOR OF TEAM PERFORMANCE

"Ankit is silent in meetings but complains privately: 'Nobody listens. Priya and Rahul dominate. I gave up.'

PROBLEM: Ankit does not feel psychologically safe (safe to speak up, disagree, make mistakes without punishment).

RESULT: Lost ideas (Ankit has good ideas, team never hears them). Team loses 50% of its intelligence.

GOOGLE PROJECT ARISTOTLE (2015): Google studied 180 teams. Question: What makes teams high-performing? Answer: Psychological safety is #1 predictor. More important than talent, resources, or strategy.

HOW TO BUILD PSYCHOLOGICAL SAFETY:
1. Invite quiet voices: 'Ankit, we have not heard from you. What do you think?'
2. Thank dissent: Rahul disagrees with Priya. You say: 'Thank you for disagreeing. Let us explore both perspectives.'
3. Share your own mistakes: 'I messed up the timeline. My bad. Let us fix it.' (Models vulnerability.)
4. No blame: Sarah misses deadline. You say: 'What happened? How can we help?' (not: 'You are irresponsible!')
5. Establish norm: 'In this team, all ideas are welcome. Disagreement is good. Mistakes are learning opportunities.'

RESULT: Ankit starts speaking up. Team hears his ideas. Priya and Rahul listen. Team performance improves 2×."

[6:45-7:45] TEAM NORMS: CREATE PREDICTABILITY

"Week 4: You schedule meeting for 10 AM. Priya arrives 10:00. Rahul arrives 10:15. Ankit arrives 10:30. Sarah forgets. You are frustrated: 'Why can we not be on time?'

PROBLEM: No agreed norms (shared expectations for how we work together). Priya expects: 'Meetings start on time.' Rahul expects: '10 AM means 10:15 (IST).' Different expectations = frustration.

SOLUTION: Establish team norms in Week 2. Hold 1-hour meeting. Ask: 'How do we want to work together?'

AGREE ON:
1. Meetings: Start 10:00 sharp (no IST). Attendance mandatory (unless 24-hour notice). Agenda shared 1 day before.
2. Communication: Reply within 24 hours. WhatsApp for urgent. Email for updates. Weekly 30-min check-in.
3. Decision-making: Consensus (discuss until everyone agrees). Voting (if consensus fails). Veto (anyone can veto if strong objection).
4. Conflict: Address directly (no private complaints). Focus on issue, not person. Seek win-win.
5. Accountability: Deadlines are commitments. If you miss, inform 48 hours ahead. Peer feedback monthly.

WRITE NORMS DOWN. Review in Week 4. Update as needed. Norms create predictability and trust."

[7:45-8:00] YOUR CHALLENGE (Navigate Your Team to Performing)

"Here is your action step: Pick a team (group project, club, startup, study group).

1. Identify stage: Are you in forming (polite)? Storming (conflict)? Norming (resolving)? Performing (high trust)?
2. If storming: Acknowledge it. Address conflicts. Use RACI. Build psychological safety. Establish norms.
3. If norming: Solidify norms. Build trust. Prepare for performing.
4. If performing: Maintain it. Celebrate wins. Continuous improvement.

GOAL: Navigate your team from chaos (storming) to high performance (performing) in 4-6 weeks.

Stop blaming your team. Start understanding team dynamics. Navigate the stages. Win."

[End Screen: "Next Video: Leadership - Influence Without Authority"]`,
      content: [
        'Forming → Storming → Norming → Performing: Teams go through 4 stages (Tuckman Model)',
        'Storming is NORMAL and NECESSARY: Conflict helps teams grow (do not avoid it, navigate it)',
        'RACI Matrix: Clarify roles (Responsible, Accountable, Consulted, Informed) to eliminate confusion',
        'Psychological Safety: #1 predictor of team performance (Google Project Aristotle research)',
        'Team Norms: Establish shared expectations (meetings, communication, decision-making, conflict, accountability)',
        'Navigate Storming: Acknowledge it, address conflicts early, use tools (RACI, norms, psychological safety)',
        'B.Com Applications: Group projects, club leadership, startup teams, study groups, workplace teams'
      ]
    },
    quiz: {
      title: 'Team Dynamics Quiz',
      questions: [
        {
          id: 1,
          question: 'Week 1: Everyone polite, no work. Week 2: Conflicts erupt. You panic: "Team broken!" What stage?',
          options: [
            'Just normal project phases',
            'Forming → Storming (conflict = growth)',
            'Linear beginning to end',
            'Standard workflow progression'
          ],
          correct: 1,
          explanation: 'Forming → Storming (Tuckman Model). Week 1 (Forming): Polite, no real work. Testing boundaries, unclear roles. Week 2 (Storming): Conflicts erupt. Think "Team broken!" Reality: Storming NORMAL and NECESSARY. Honest opinions emerge, power dynamics surface, roles tested. Navigate storming (acknowledge it, address conflicts, use RACI, build psychological safety) to reach norming (conflicts resolve, productivity rises) and performing (high trust, excellent results). Don\'t panic at storming. Navigate it. High performance earned through stages, not automatic.'
        },
        {
          id: 2,
          question: 'Storming: Priya wants research. Rahul: "Waste of time!" Teammate: "Avoid conflict, just agree." Right?',
          options: [
            'Yes - conflict means failing',
            'No - Storming NORMAL. Navigate it',
            'Yes - perfect teams no conflict',
            'Yes - suppress conflict immediately'
          ],
          correct: 1,
          explanation: 'NO - avoiding conflict keeps team stuck (polite but unproductive). Storming NORMAL and NECESSARY. Honest opinions emerge: Priya and Rahul disagree (good! Find best approach). Power dynamics surface: Who decides? Roles tested: Who does what? Suppressing conflict: Silent, resentment builds, never reach high performance. Navigating conflict: Facilitate: "Priya, why research important?" "Rahul, why skip?" "What if QUICK research (2 days)? Priya gets data, Rahul gets speed." Both agree. Conflict resolved. Team moves to norming. Do NOT avoid storming. Navigate it. Conflict = growth, not failure.'
        },
        {
          id: 3,
          question: 'Priya and Ankit both research (overlap). Nobody writes report (gap). Sarah confused. What prevents this?',
          options: [
            'Better communication - talk more',
            'RACI Matrix - clear roles',
            'More meetings - daily check-ins',
            'Stricter deadlines - enforce rules'
          ],
          correct: 1,
          explanation: 'RACI Matrix prevents role confusion. Problem: Said "Priya, research" but didn\'t clarify: Who approves? Who gives input? Who needs updates? Result: Overlap, gaps, confusion. RACI Solution: For EACH task, assign: R (Responsible: DOES work), A (Accountable: APPROVES/owns outcome), C (Consulted: gives INPUT before), I (Informed: needs UPDATES after). Example: Market Research → R: Priya (does research), A: You (approve), C: Rahul, Ankit (give input), I: Sarah (gets findings). RACI eliminates: (1) Overlap (only Priya is R), (2) Gaps (every task has R and A), (3) Confusion (Sarah knows she\'s I, not R). RACI transforms chaos into clarity.'
        },
        {
          id: 4,
          question: 'Ankit silent, complains: "Nobody listens. I gave up." Google found #1 predictor of team performance?',
          options: [
            'Talent - smartest members',
            'Psychological Safety - safe to speak',
            'Resources - best tools',
            'Strategy - best plan'
          ],
          correct: 1,
          explanation: 'Psychological Safety = #1 predictor (Google Project Aristotle, 2015). Google studied 180 teams. Psychological safety (feel safe to speak up, disagree, make mistakes without punishment) matters MORE than talent, resources, or strategy. Ankit lacks it: "Nobody listens. Priya and Rahul dominate. I gave up." Result: (1) Lost ideas (Ankit has good ideas, team never hears), (2) Passive resistance (does minimum work), (3) Team loses 50% intelligence (only loud voices heard). Build psychological safety: (1) Invite quiet voices ("Ankit, what think?"), (2) Thank dissent, (3) Share mistakes, (4) No blame, (5) Establish norm ("All ideas welcome"). Result: Ankit speaks up, performance improves 2×. Psychological safety = THE differentiator between mediocre and high-performing teams.'
        },
        {
          id: 5,
          question: 'Meeting 10 AM. Priya 10:00. Rahul 10:15. Ankit 10:30. Sarah forgets. You frustrated. What\'s missing?',
          options: [
            'Discipline - team lazy',
            'Team Norms - agreed expectations',
            'Punishment - stricter consequences',
            'Leadership - enforce rules'
          ],
          correct: 1,
          explanation: 'Team Norms missing. Problem: No agreed expectations. Priya expects: "Meetings start on time." Rahul expects: "10 AM means 10:15 (IST)." Ankit expects: "Meetings optional if busy." Sarah expects: "Someone will remind me." Different expectations = frustration. Solution: Establish team norms in Week 2. Ask: "How want to work together?" Agree on: (1) Meetings: Start 10:00 sharp, attendance mandatory (unless 24-hour notice), agenda shared 1 day before. (2) Communication: Reply within 24 hours, WhatsApp for urgent, weekly check-ins. (3) Decision-making: Consensus, voting if needed, veto for strong objections. (4) Conflict: Address directly, focus on issue not person, seek win-win. (5) Accountability: Deadlines are commitments, inform 48 hours ahead if miss. Write norms down. Review in Week 4. Update as needed. Norms create predictability and trust. Without norms: chaos, frustration. With norms: smooth collaboration, high performance.'
        }
      ]
    },
    challenge: {
      title: 'Team Dynamics Mastery',
      description: 'Navigate your team from storming to performing',
      contexts: {
        academic: {
          title: 'Academic Team Dynamics Excellence',
          description: 'You are assigned to a B.Com group project (Marketing Strategy for Local Business). Team: 5 members (you, Priya, Rahul, Ankit, Sarah). Week 1: Forming (polite, excited). Week 2: Storming (conflicts erupt). Goal: Navigate your team through all 4 stages (forming → storming → norming → performing) to deliver excellent project and achieve A grade.',
          instructions: [
            '1. Week 1 - Navigate Forming Stage (Day 1-7, 3 hours): First meeting: Introduce yourselves (name, strengths, what you bring to team). Discuss project goal: "Create marketing strategy for local business." Clarify purpose: "Why are we doing this? What is success?" (Success = A grade + learn marketing + build teamwork skills). Assign temporary coordinator (you volunteer). Schedule: Weekly meetings (Fridays 4 PM), daily WhatsApp check-ins. Observe: Everyone is polite, agreeable. "This will be great!" But no real work happens (normal in forming). Action: Do not mistake politeness for high performance. Prepare for storming.',
            '2. Week 2 - Navigate Storming Stage (Day 8-14, 8 hours): Conflicts emerge. Priya: "We need 2 weeks for market research." Rahul: "Waste of time! Let us start presentation now." Ankit is silent (feels unheard). Sarah does not respond to messages for 2 days. You think: "Team is broken!" Action: (1) Acknowledge storming: "We are in storming stage. Conflict is normal. Let us work through it." (2) Facilitate Priya-Rahul conflict: "Priya, why is research important?" (Answer: "Ensures we target right customers.") "Rahul, why skip it?" (Answer: "Limited time, 6 weeks total.") "What if we do QUICK research (3 days, not 2 weeks)? Survey 30 people, analyze top 3 insights. Priya gets data, Rahul gets speed." Both agree. (3) Invite Ankit: "Ankit, we have not heard from you. What do you think about research approach?" (Ankit shares idea: "We can use Google Forms for quick survey.") Thank him. (4) Check on Sarah: "Sarah, noticed you have not responded. Are you okay? Need help?" (Sarah: "Overwhelmed with 3 projects. Struggling with design software.") Offer help: "Let us pair you with Priya for design. She can help." Sarah agrees. Storming is being navigated.',
            '3. Week 2 - Create RACI Matrix (Day 10, 2 hours): Hold 2-hour meeting to clarify roles using RACI. List all tasks: (1) Market Research, (2) Competitive Analysis, (3) Marketing Strategy, (4) Presentation Design, (5) Presentation Slides, (6) Final Report. For EACH task, assign: R (Responsible: who does work?), A (Accountable: who approves?), C (Consulted: who gives input?), I (Informed: who gets updates?). Example: Market Research → R: Priya, A: You, C: Rahul + Ankit, I: Sarah. Competitive Analysis → R: Ankit, A: You, C: Priya, I: All. Marketing Strategy → R: Rahul, A: You, C: All, I: All. Design → R: Sarah, A: You, C: Priya, I: All. Slides → R: Priya + Sarah, A: You, C: All, I: All. Report → R: You, A: Professor, C: All, I: All. Document RACI in shared Google Sheet. Review weekly. Update as needed. Result: No more overlap, gaps, or confusion.',
            '4. Week 2 - Establish Team Norms (Day 12, 1 hour): Hold 1-hour meeting to establish norms. Ask: "How do we want to work together?" Discuss and agree on: (1) Meetings: Fridays 4 PM sharp (no IST), attendance mandatory (unless 24-hour notice), agenda shared 1 day before, decisions by consensus. (2) Communication: Reply within 24 hours, WhatsApp for urgent, email for updates, daily check-in (share: What I did? What I will do? Blockers?). (3) Conflict: Address directly (no private complaints), focus on issue not person, seek win-win, escalate to you if unresolved. (4) Accountability: Deadlines are commitments, inform 48 hours ahead if miss, peer feedback every 2 weeks. (5) Quality: Draft → Peer review → Revise → Final (no last-minute work). Write norms in shared doc. Everyone signs (commitment). Review in Week 4. Result: Predictability and trust.',
            '5. Week 3-4 - Navigate Norming Stage (Day 15-28, 15 hours): Conflicts reduce. Team finds rhythm. Priya completes research (3 days, 30 surveys, top 3 insights). Ankit completes competitive analysis (5 competitors, SWOT). Rahul drafts marketing strategy (4 Ps: Product, Price, Place, Promotion). Sarah designs presentation (clean, professional). You coordinate, review, give feedback. Weekly meetings are productive (clear agenda, decisions made, action items assigned). Daily check-ins keep everyone aligned. Psychological safety improves: Ankit speaks up more, Sarah asks for help when stuck, Priya and Rahul collaborate (not compete). Team is norming. Action: (1) Celebrate progress: "We completed research and analysis! Great work, team!" (2) Give positive feedback: "Priya, your research insights are excellent. Ankit, your SWOT is thorough. Rahul, your strategy is creative. Sarah, your design is professional." (3) Address small issues early: Rahul misses 1 deadline (strategy draft). You ask: "What happened?" (Rahul: "Underestimated time.") "How can we help?" (Rahul: "Need 2 more days.") Team agrees. No blame, just support. Norming solidifies.',
            '6. Week 5-6 - Reach Performing Stage (Day 29-42, 10 hours): Team operates like well-oiled machine. High trust, clear roles, smooth collaboration. Minimal conflict, maximum output. Priya and Sarah collaborate on slides (research + design). Rahul and Ankit refine strategy (marketing + competitive insights). You write final report (synthesize all work). Weekly meetings are efficient (30 mins, not 2 hours). Daily check-ins are brief (5 mins). Everyone knows their role, delivers on time, supports each other. Week 6: Final presentation to professor. Team presents together (each person presents their section). Professor feedback: "Excellent work! Clear strategy, thorough research, professional presentation. A grade!" Team celebrates. You reflect: "We navigated forming → storming → norming → performing. We transformed chaos into high performance." Result: A grade + strong teamwork skills + lasting friendships.',
            '7. Week 6 - Reflect and Document Learnings (Day 43, 2 hours): Hold final team meeting to reflect. Ask: (1) What went well? (Team: "RACI clarified roles. Norms created predictability. Psychological safety helped Ankit speak up. Navigating storming made us stronger.") (2) What can we improve? (Team: "Start RACI earlier (Week 1, not Week 2). Address conflicts faster (Day 1, not Day 3). More frequent check-ins (daily, not every 2 days).") (3) What did we learn? (Team: "Storming is normal. Conflict is growth. High performance is earned through navigating stages. Tools (RACI, norms, psychological safety) work.") Document learnings in shared doc. Share with professor (extra credit for reflection). Apply learnings to next team project. You became team dynamics expert.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoiding storming: Suppressing conflict to keep peace. Result: Team stays in forming (polite but unproductive). Solution: Navigate storming (acknowledge, facilitate, use tools).',
            '• No RACI: Assigning tasks verbally without clarifying R, A, C, I. Result: Overlap, gaps, confusion. Solution: Create RACI matrix in Week 2, review weekly.',
            '• No norms: Assuming everyone has same expectations. Result: Frustration (late arrivals, missed deadlines, poor communication). Solution: Establish norms in Week 2, write them down, review in Week 4.',
            '• Ignoring quiet voices: Letting Priya and Rahul dominate, Ankit stays silent. Result: Lost ideas, team underperforms. Solution: Invite quiet voices, build psychological safety.',
            '• No celebration: Focusing only on problems, not progress. Result: Low morale, burnout. Solution: Celebrate wins (completed research, finished strategy), give positive feedback.'
          ],
          successCriteria: [
            '✅ You navigate all 4 stages: Forming (Week 1) → Storming (Week 2) → Norming (Week 3-4) → Performing (Week 5-6)',
            '✅ You create RACI matrix (all tasks have R, A, C, I assigned, no overlap/gaps/confusion)',
            '✅ You establish team norms (meetings, communication, conflict, accountability, quality - written and signed)',
            '✅ You build psychological safety (Ankit speaks up, Sarah asks for help, all voices heard)',
            '✅ You navigate storming successfully (Priya-Rahul conflict resolved, team moves to norming)',
            '✅ You deliver excellent project (A grade, thorough research, clear strategy, professional presentation)',
            '✅ Team reflects and documents learnings (what worked, what to improve, what learned)',
            '✅ You become team dynamics expert (can apply to future teams, teach others)'
          ]
        },
        professional: {
          title: 'Professional Team Dynamics Mastery',
          description: 'You join a new team at your internship (Marketing Analytics team, 6 members). Week 1: Forming (everyone is polite). Week 2: Storming (conflicts over priorities, unclear roles). Your manager says: "Navigate this team to high performance." Goal: Apply team dynamics principles to transform chaos into performing team and deliver excellent results.',
          instructions: [
            '1. Week 1 - Observe Forming Stage (Day 1-5, 5 hours): First team meeting: Introductions (name, role, experience). Manager explains team goal: "Analyze marketing campaigns, provide insights to improve ROI." You observe: Everyone is polite, agreeable. "Sounds great!" "I agree!" But no real work happens. People are testing boundaries: Who is in charge? What can I say? Roles are unclear: Who does what? You recognize: This is forming stage (normal, low productivity). Action: Do not expect high performance yet. Prepare for storming. Build relationships: Have 1-on-1 coffee chats with each team member. Learn their strengths, working styles, concerns. Build rapport early (helps navigate storming later).',
            '2. Week 2 - Navigate Storming Stage (Day 6-12, 10 hours): Conflicts emerge. Senior analyst (Meera) wants to focus on Facebook ads. Junior analyst (Karan) says: "Instagram is more important!" Debate escalates. Designer (Priya) feels ignored: "Nobody asks for my input." Data engineer (Amit) is overwhelmed: "Too many requests, unclear priorities." You recognize: Storming stage (conflict, power struggles, role confusion). Action: (1) Acknowledge storming in team meeting: "We are in storming stage. Conflict is normal. Let us work through it." (2) Facilitate Meera-Karan conflict: "Meera, why Facebook?" (Answer: "60% of budget, need to optimize.") "Karan, why Instagram?" (Answer: "Fastest growing, younger audience.") "What if we analyze BOTH? Meera leads Facebook (her expertise), Karan leads Instagram (his passion). Compare results. Learn which performs better." Both agree. (3) Invite Priya: "Priya, we need your design perspective. What makes ads visually effective?" (Priya shares insights. Team listens.) (4) Help Amit: "Amit, let us prioritize requests. What is urgent? What can wait?" Create priority matrix. Amit feels supported. Storming is being navigated.',
            '3. Week 2 - Propose RACI Matrix to Manager (Day 8, 3 hours): You notice: Role confusion is causing chaos. You propose to manager: "Can we create RACI matrix to clarify roles?" Manager: "Great idea! Lead this." You facilitate 2-hour workshop. List all recurring tasks: (1) Campaign Analysis, (2) Data Collection, (3) Report Writing, (4) Presentation Design, (5) Stakeholder Communication. For EACH task, assign RACI. Example: Campaign Analysis → R: Meera (Facebook) + Karan (Instagram), A: Manager, C: Priya (design insights) + Amit (data), I: Stakeholders. Data Collection → R: Amit, A: Manager, C: Meera + Karan (what data needed), I: All. Report Writing → R: You, A: Manager, C: All, I: Stakeholders. Design → R: Priya, A: Manager, C: Meera + Karan (what to visualize), I: All. Stakeholder Communication → R: Manager, A: Director, C: You (report writer), I: Team. Document RACI in Notion. Share with team. Review bi-weekly. Result: Clarity. Everyone knows their role.',
            '4. Week 2 - Co-create Team Norms (Day 10, 2 hours): You facilitate norms workshop. Ask: "How do we want to work together?" Team discusses and agrees: (1) Meetings: Mondays 10 AM (stand-up, 15 mins), Fridays 3 PM (weekly review, 1 hour), agenda shared 1 day before, decisions by consensus (manager breaks ties). (2) Communication: Slack for urgent (reply within 2 hours during work hours), email for updates, no after-hours messages (respect work-life balance), weekly async updates (what I did, what I will do, blockers). (3) Conflict: Address directly (1-on-1 first, then team if unresolved), focus on issue not person, seek win-win, manager mediates if needed. (4) Accountability: Deadlines are commitments, inform 2 days ahead if miss, peer feedback monthly, celebrate wins weekly. (5) Quality: Draft → Peer review → Manager review → Final (no last-minute work). Document norms in Notion. Team signs (digital commitment). Review in Week 4. Manager approves: "Excellent norms. This will help us perform." Result: Predictability and trust.',
            '5. Week 3-4 - Support Norming Stage (Day 13-28, 20 hours): Conflicts reduce. Team finds rhythm. Meera analyzes Facebook ads (CTR, CPC, ROI). Karan analyzes Instagram (engagement, reach, conversions). Priya designs visualizations (charts, infographics). Amit provides data (clean, timely). You write weekly reports (synthesize insights, recommend actions). Manager reviews, gives feedback. Weekly meetings are productive. Slack communication is clear. Psychological safety improves: Priya shares design ideas confidently. Amit asks for help when overwhelmed. Meera and Karan collaborate (share learnings). Team is norming. Action: (1) Build psychological safety: In meetings, you ask: "What is everyone working on? Any blockers?" Create space for vulnerability. When Amit says: "I am stuck on data pipeline," you respond: "How can we help?" (not: "Why is it not done?"). No blame, just support. (2) Celebrate small wins: "Meera, your Facebook analysis found 20% cost savings! Karan, your Instagram insights increased engagement 15%! Priya, your visualizations made data clear! Amit, your data pipeline is reliable!" Team morale rises. (3) Give feedback: Monthly 1-on-1s. Share: "What you are doing well? What you can improve?" Receive feedback too: "What can I do better?" Continuous improvement. Norming solidifies.',
            '6. Week 5-8 - Maintain Performing Stage (Day 29-56, 25 hours): Team operates at high performance. High trust, clear roles, smooth collaboration. Minimal conflict, maximum output. Meera and Karan share insights (Facebook + Instagram = comprehensive view). Priya designs dashboards (real-time metrics). Amit automates data collection (saves 10 hours/week). You write strategic reports (actionable recommendations). Manager presents to director: "Marketing ROI improved 25%! This team is excellent!" Team is performing. Action: (1) Maintain norms: Continue weekly meetings, Slack communication, peer feedback. Do not let standards slip. (2) Continuous improvement: After each project, ask: "What went well? What can we improve?" Iterate on processes. (3) Celebrate wins: Team lunch after big wins. Public recognition in company meeting. Manager nominates team for "Team of the Quarter" award. (4) Mentor new members: New analyst joins (Week 7). You onboard them: "Here is how we work (RACI, norms, psychological safety). Here is what we learned (storming is normal, navigate it)." New member integrates smoothly. Performing stage is sustained.',
            '7. Month 3 - Reflect and Share Learnings (Day 90, 3 hours): Manager asks: "How did we transform from chaos (Week 2) to high performance (Week 8)?" You lead reflection session. Team shares: (1) What worked: "RACI clarified roles. Norms created predictability. Psychological safety helped everyone contribute. Navigating storming made us stronger." (2) What we learned: "Storming is normal. Conflict is growth. High performance is earned. Tools work (RACI, norms, psychological safety)." (3) What we will teach: "New teams should expect storming, use RACI, establish norms, build psychological safety." Manager documents learnings. Shares with other teams. You present at company all-hands: "How We Built a High-Performing Team." You become team dynamics expert. Other teams ask for your help. You mentor 3 other teams. Your career grows (promoted to Team Lead after 6 months).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Staying silent during storming: Watching conflicts escalate without facilitating. Result: Team gets stuck, performance suffers. Solution: Acknowledge storming, facilitate conflicts, use tools.',
            '• Not proposing solutions: Complaining about chaos without offering RACI, norms. Result: Chaos continues. Solution: Proactively propose RACI, co-create norms.',
            '• Ignoring psychological safety: Letting dominant voices (Meera) overshadow quiet voices (Priya). Result: Lost ideas, underperformance. Solution: Invite all voices, create safe space.',
            '• No celebration: Focusing only on problems, not wins. Result: Low morale, burnout. Solution: Celebrate wins weekly, give positive feedback, recognize contributions.',
            '• Not documenting learnings: Navigating storming but not capturing what worked. Result: Cannot replicate success, cannot teach others. Solution: Reflect, document, share learnings.'
          ],
          successCriteria: [
            '✅ You navigate team through all 4 stages (forming → storming → norming → performing in 8 weeks)',
            '✅ You facilitate conflicts successfully (Meera-Karan resolved, team moves to norming)',
            '✅ You create RACI matrix (all roles clear, no confusion, manager approves)',
            '✅ You co-create team norms (meetings, communication, conflict, accountability - documented and followed)',
            '✅ You build psychological safety (all voices heard, people ask for help, no blame culture)',
            '✅ Team delivers excellent results (marketing ROI improves 25%, director recognizes team)',
            '✅ You document and share learnings (present at company all-hands, mentor other teams)',
            '✅ Your career grows (promoted to Team Lead, recognized as team dynamics expert)'
          ]
        },
        personal: {
          title: 'Personal Team Dynamics Wisdom',
          description: 'You and 4 friends decide to start a side project (B.Com students creating a freelance service: Resume writing + LinkedIn optimization for students). Week 1: Excited, everyone agrees. Week 2: Conflicts (who does what? How to split money? Different commitment levels). Goal: Apply team dynamics to navigate your friend group through storming to performing and build successful side business.',
          instructions: [
            '1. Week 1 - Forming Stage (Day 1-7, 5 hours): First meeting at coffee shop. You and 4 friends (Priya, Rahul, Ankit, Sarah) discuss side project idea: "Let us offer resume writing + LinkedIn optimization. Charge ₹1000/client. Split money equally." Everyone is excited: "This will be great!" "We will make so much money!" "Let us start!" But no real plan. Who does what? How to get clients? How to deliver service? You recognize: Forming stage (excitement, no structure). Action: (1) Clarify purpose: "Why are we doing this? What is success?" (Success = ₹10K revenue in 3 months + learn entrepreneurship + build skills). (2) Set first milestone: "Let us get 5 clients in Month 1." (3) Schedule: Weekly meetings (Sundays 5 PM at coffee shop), daily WhatsApp group for updates. (4) Assign temporary roles: You (coordinator), Priya (marketing), Rahul (sales), Ankit (resume writing), Sarah (LinkedIn optimization). Temporary because roles will evolve. Forming stage is navigated.',
            '2. Week 2 - Storming Stage (Day 8-14, 10 hours): Conflicts erupt. Priya: "I am posting on Instagram daily, but nobody is helping!" Rahul: "I am busy with exams, cannot do sales calls." Ankit: "I wrote 2 resumes, but nobody paid me yet. Where is my money?" Sarah: "LinkedIn optimization takes 3 hours/client. I cannot do this for ₹200 (₹1000/5 people). Not worth it." You think: "Our friendship is breaking! This was a mistake!" You recognize: Storming stage (conflict over roles, money, commitment). Action: (1) Acknowledge storming: "Guys, we are in storming stage. Conflict is normal. Let us work through it. Our friendship matters more than money. Let us fix this together." (2) Address Priya: "Priya, thank you for posting daily. That is hard work. How can we support you?" (Priya: "I need content. Can Ankit share resume tips? Can Sarah share LinkedIn tips?") Ankit and Sarah agree to create content. (3) Address Rahul: "Rahul, exams are important. What can you realistically commit?" (Rahul: "2 hours/week for sales calls.") "Okay, let us adjust expectations. Quality over quantity." (4) Address money: "Let us create clear money split. Not equal (₹200 each), but based on work. Resume writing (₹400), LinkedIn (₹400), marketing (₹100), sales (₹100). Fair?" Everyone agrees. (5) Address Sarah: "Sarah, ₹400 for 3 hours = ₹133/hour. Is that fair?" (Sarah: "Yes, if we get consistent clients.") "Let us aim for 10 clients/month. That is ₹4000/month for you." Sarah agrees. Storming is being navigated.',
            '3. Week 2 - Create Simple RACI (Day 10, 2 hours): You propose: "Let us clarify who does what using RACI." Friends: "What is RACI?" You explain: "R = who does work, A = who approves, C = who gives input, I = who gets updates." You create simple RACI for key tasks: (1) Marketing (Instagram posts) → R: Priya, A: You, C: Ankit + Sarah (content), I: All. (2) Sales (client calls) → R: Rahul, A: You, C: All (pricing, packages), I: All. (3) Resume Writing → R: Ankit, A: You (quality check), C: Client, I: All. (4) LinkedIn Optimization → R: Sarah, A: You (quality check), C: Client, I: All. (5) Money Management → R: You, A: All (transparent), C: All, I: All. Document RACI in shared Google Doc. Review monthly. Result: Clarity. No more "I thought you were doing it" confusion.',
            '4. Week 2 - Establish Friend-Team Norms (Day 12, 2 hours): Sunday meeting at coffee shop. You facilitate: "How do we want to work together as friends AND business partners?" Discuss and agree: (1) Meetings: Sundays 5 PM (1 hour), attendance mandatory (unless emergency), agenda in WhatsApp 1 day before, decisions by consensus (if tie, vote). (2) Communication: WhatsApp group for updates (reply within 24 hours), no pressure after 10 PM (respect personal time), weekly check-in (share: clients served, money earned, challenges). (3) Money: Transparent (all earnings/expenses in shared sheet), split based on work (not equal), pay within 7 days of receiving client payment, save 20% for business expenses (marketing, tools). (4) Conflict: Address directly (1-on-1 first, then group if needed), focus on issue not person, friendship first (business second), take breaks if heated (cool down, then discuss). (5) Commitment: Realistic commitments (do not overpromise), inform 2 days ahead if cannot deliver, support each other (if someone is overwhelmed, others help). Write norms in Google Doc. Everyone signs (digital pinky promise). Review in Month 2. Result: Friendship + business can coexist with clear norms.',
            '5. Week 3-4 - Norming Stage (Day 15-28, 15 hours): Conflicts reduce. Team finds rhythm. Priya posts on Instagram (3 times/week, using content from Ankit and Sarah). Rahul does sales calls (2 hours/week, converts 2 clients). Ankit writes resumes (2 clients/week, ₹400 each). Sarah optimizes LinkedIn (2 clients/week, ₹400 each). You coordinate (quality check, client communication, money management). Month 1 results: 8 clients, ₹8000 revenue (₹3200 Ankit, ₹3200 Sarah, ₹800 Priya, ₹800 Rahul). Everyone is happy. Psychological safety improves: Rahul admits: "I am struggling with sales calls. Can someone help?" You pair him with Priya (she is good at communication). Sarah asks: "Can I increase price to ₹500? 3 hours is a lot." Team discusses, agrees (₹1100/client now). Ankit shares: "I made a mistake on one resume. Client was unhappy." Team supports: "Mistakes happen. Let us fix it together." No blame. Team is norming.',
            '6. Month 2-3 - Performing Stage (Day 29-90, 30 hours): Team operates smoothly. High trust, clear roles, smooth collaboration. Priya and Rahul collaborate (marketing + sales = 15 clients/month). Ankit and Sarah deliver excellent service (5-star reviews, referrals). You manage operations (client onboarding, quality, money). Month 2: 15 clients, ₹16,500 revenue. Month 3: 20 clients, ₹22,000 revenue. Total 3 months: 43 clients, ₹46,500 revenue. After expenses (₹6,500 for marketing, tools): ₹40,000 profit. Split: Ankit (₹16,000), Sarah (₹16,000), Priya (₹4,000), Rahul (₹4,000). Everyone is thrilled. You celebrate: Team dinner (₹2,000 from business fund). Reflect: "We navigated storming. We built successful business. We strengthened our friendship." Performing stage achieved.',
            '7. Month 3 - Reflect and Plan Next Steps (Day 90, 3 hours): Sunday meeting. Reflect: (1) What worked: "RACI clarified roles. Norms balanced friendship + business. Transparent money management built trust. Supporting each other through challenges strengthened friendship." (2) What we learned: "Storming is normal (even among friends). Conflict is growth. Clear expectations prevent resentment. Business + friendship can coexist with structure." (3) What next: "Scale to 50 clients/month? Hire 2 more writers? Expand to other colleges?" Discuss options. Decide: Continue for 3 more months, then decide. You document learnings. Share on LinkedIn: "How We Built ₹40K Side Business as B.Com Students." Post goes viral (5000 likes). Other students ask: "How did you manage team dynamics?" You mentor 5 other student teams. You became team dynamics expert.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Assuming friendship = no conflict: Thinking "We are friends, we will not fight." Result: Conflicts surprise you, damage friendship. Solution: Expect storming, prepare for it, navigate it.',
            '• Equal split without considering work: Splitting money equally (₹200 each) when work is unequal (Sarah does 3 hours, Priya does 30 mins). Result: Resentment. Solution: Split based on work (fair, not equal).',
            '• No clear roles: Assuming "We will figure it out" without RACI. Result: Confusion, overlap, gaps. Solution: Create simple RACI, review monthly.',
            '• Avoiding money conversations: Not discussing money openly (awkward). Result: Assumptions, resentment, broken trust. Solution: Transparent money management (shared sheet, clear split, pay on time).',
            '• Prioritizing business over friendship: Pushing too hard, ignoring personal boundaries. Result: Burnout, damaged friendship. Solution: Friendship first (norms include: no pressure after 10 PM, support when overwhelmed, take breaks if heated).'
          ],
          successCriteria: [
            '✅ You navigate friend-team through all 4 stages (forming → storming → norming → performing in 3 months)',
            '✅ You resolve conflicts without damaging friendship (money split, commitment levels, role clarity)',
            '✅ You create simple RACI (all roles clear, no confusion)',
            '✅ You establish friend-team norms (balance friendship + business, transparent money, realistic commitments)',
            '✅ You build successful side business (43 clients, ₹40K profit in 3 months)',
            '✅ You strengthen friendship (support each other, celebrate together, no resentment)',
            '✅ You document and share learnings (LinkedIn post goes viral, mentor other student teams)',
            '✅ You prove: Friendship + business can coexist with clear team dynamics'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📊 Understand Team Stages: You recognize forming (Week 1: polite, low productivity), storming (Week 2: conflict, necessary), norming (Week 3-4: resolving, productivity rises), performing (Week 5+: high trust, excellent results). You do not panic when team hits storming. You acknowledge: "This is normal. Let us navigate it." You use tools (RACI, norms, psychological safety) to move team through stages. Result: You transform chaos into high performance. Teams you lead reach performing stage in 6-8 weeks (vs teams without this knowledge stay stuck in storming for months).',
        '🎯 RACI Mastery: You create RACI matrix to clarify roles. For EACH task, you assign: R (Responsible: who does work?), A (Accountable: who approves?), C (Consulted: who gives input?), I (Informed: who gets updates?). Example: Market Research → R: Priya, A: You, C: Rahul + Ankit, I: Sarah. Result: No overlap (only Priya does research), no gaps (every task has R and A), no confusion (everyone knows their role). You document RACI, review weekly, update as needed. Teams you work with have 90% less role confusion and 50% faster delivery.',
        '🛡️ Build Psychological Safety: You create environment where everyone feels safe to speak up, disagree, make mistakes, ask for help. You invite quiet voices ("Ankit, what do you think?"), thank dissent ("Thank you for disagreeing"), share your mistakes ("I messed up"), give no-blame support ("What happened? How can we help?"), establish safety norm ("All ideas welcome"). Result: Ankit speaks up, Sarah asks for help, team hears all voices (not just loud ones). Team performance improves 2× because you unlocked 100% of team intelligence (vs 50% when quiet voices are silenced).',
        '📋 Establish Team Norms: You co-create norms with team (not impose top-down). You ask: "How do we want to work together?" Team agrees on: Meetings (start time, attendance, agenda), communication (response time, platform, check-ins), decision-making (consensus, voting, veto), conflict (address directly, focus on issue, seek win-win), accountability (deadlines are commitments, inform ahead if miss, peer feedback). You document norms, team signs, review in Week 4. Result: Predictability (everyone knows what to expect), trust (commitments are kept), smooth collaboration (no frustration from misaligned expectations).',
        '🚀 Navigate Storming Successfully: When conflicts erupt (Priya vs Rahul on research), you do not avoid or escalate. You FACILITATE: "Priya, why is research important? Rahul, why skip it? What if we do quick research (3 days, not 2 weeks)? Both get what they need." Conflict resolved. Team moves to norming. You transformed conflict (destructive) into dialogue (constructive). Result: Team does not get stuck in storming. You navigate to performing in 6 weeks (vs teams without facilitation stay stuck for months or fail).'
      ],
      improvements: [
        '⚡ Start RACI Earlier: You create RACI in Week 2 (during storming). Good. But you can start earlier. Improve: Create RACI in Week 1 (during forming) to PREVENT storming. Clarify roles before conflicts emerge. Result: Smoother storming (fewer role-based conflicts), faster norming (roles already clear). Example: If you had assigned RACI in Week 1, Priya and Ankit would not both research (overlap prevented). Start RACI Day 1, not Day 8.',
        '🗣️ Facilitate Conflicts Faster: When Priya-Rahul conflict emerges (Day 8), you facilitate on Day 10 (2-day delay). Improve: Facilitate on Day 8 (same day). Why? (1) Conflicts escalate fast (Day 8: disagreement, Day 10: resentment, Day 12: broken communication). (2) Early resolution prevents escalation. (3) Team spends less time in storming (2 days vs 5 days). Practice: When you notice conflict, address within 24 hours. Ask: "I noticed tension between X and Y. Can we discuss this?" Facilitate immediately. Result: Faster norming, less damage.',
        '📊 Measure Team Health: You navigate team to performing. But you do not measure: How healthy is our team? Improve: Measure team health monthly. Survey team (anonymous): (1) Psychological safety (1-10: Do you feel safe to speak up?), (2) Role clarity (1-10: Do you know your role?), (3) Communication (1-10: Is communication clear?), (4) Trust (1-10: Do you trust team?), (5) Satisfaction (1-10: Are you satisfied with team?). Track over time. Week 2 (storming): Safety 4/10, Clarity 3/10, Trust 5/10. Week 8 (performing): Safety 9/10, Clarity 9/10, Trust 9/10. Measurement shows progress and identifies issues early ("Trust dropped from 8/10 to 6/10. Why? Let us address this").',
        '🎓 Learn Advanced Team Dynamics: You know Tuckman Model (forming, storming, norming, performing). Good. But learn more: (1) Belbin Team Roles (9 roles: Plant, Resource Investigator, Coordinator, Shaper, Monitor Evaluator, Teamworker, Implementer, Completer Finisher, Specialist). Understand: Teams need diverse roles. If everyone is Shaper (assertive, driven), team has too much conflict. Balance roles. (2) Patrick Lencioni "5 Dysfunctions of a Team" (absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results). Diagnose: Which dysfunction does your team have? Address it. Advanced knowledge = better team leadership.',
        '👥 Mentor More Teams: You navigated 1 team to performing. Good. But mentor more. Improve: Volunteer to facilitate team dynamics for 3 other teams (group projects, clubs, startups). Teach: (1) Expect storming, (2) Use RACI, (3) Establish norms, (4) Build psychological safety, (5) Navigate to performing. When you teach, you discover gaps in your understanding. You also build reputation as team dynamics expert. Result: Other teams seek your help. Your leadership brand grows. You become go-to person for team building.'
      ],
      nextSteps: [
        '📚 Read Team Dynamics Books: (1) "The Five Dysfunctions of a Team" by Patrick Lencioni (diagnose and fix team problems), (2) "Team of Teams" by General Stanley McChrystal (how to scale team dynamics to large organizations), (3) "The Culture Code" by Daniel Coyle (how great teams build psychological safety and trust). Apply: For each book, extract 3 key lessons. Practice: Apply 1 lesson to your current team. Observe: Does it improve team performance? Document learnings.',
        '🧠 Take Belbin Team Roles Assessment: Go to belbin.com. Take free assessment (15 mins). Discover your natural team role (are you Coordinator? Implementer? Plant?). Understand: (1) Your strengths (Coordinator = good at facilitating, organizing), (2) Your weaknesses (Coordinator = may be indecisive, avoid conflict), (3) Roles your team needs (if everyone is Plant/creative, team needs Implementer/executor). Apply: In next team, identify each member role. Balance team (need mix of creative + executor + analyzer + coordinator roles). Result: Balanced team = high performance.',
        '🎯 Facilitate 5 Team Norm Workshops: Volunteer to facilitate team norms workshops for 5 different teams (group projects, clubs, startups, study groups, volunteer teams). Practice: (1) Ask: "How do we want to work together?", (2) Guide discussion (meetings, communication, conflict, accountability), (3) Document norms, (4) Get team sign-off, (5) Review in 1 month. After 5 workshops, you will master facilitation. You will see patterns: "Teams always struggle with communication norms. I should spend more time on this." You become expert facilitator. Teams seek you out.',
        '📊 Create Team Health Dashboard: For your current team, create dashboard tracking: (1) Psychological safety (monthly survey: 1-10), (2) Role clarity (1-10), (3) Communication quality (1-10), (4) Trust level (1-10), (5) Team satisfaction (1-10), (6) Productivity (tasks completed/week), (7) Conflict frequency (conflicts/month). Update monthly. Review with team. Discuss: "Safety dropped from 8/10 to 6/10. Why? What can we do?" Data-driven team management = continuous improvement. Share dashboard template with other teams. Help them measure team health.',
        '👥 Teach Team Dynamics Workshop: Create 1-hour workshop: "From Chaos to High Performance: Team Dynamics for B.Com Students." Content: (1) Tuckman Model (forming, storming, norming, performing), (2) RACI Matrix (clarify roles), (3) Team Norms (establish expectations), (4) Psychological Safety (Google Project Aristotle research), (5) Navigating Storming (facilitate conflicts). Deliver workshop to 3 groups (college clubs, student teams, startup teams). When you teach, you master. You also build network of people who understand team dynamics. Collaborate on future projects.'
      ]
    },
    badge: { name: 'Team Builder', emoji: '👥', description: 'Expert in team dynamics' },
    shareMessage: 'Just mastered team dynamics! 👥 #Teamwork #Collaboration'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    emoji: '🎯',
    context: 'professional' as const,
    discover: {
      scenario: "College club needs president. You decline: 'Not a leader.' Rohan (average student) accepts. 6 months: 200 members, 10 events, ₹2L raised. You: 'How?!' He leads by example, inspires vision, delegates, develops others. Leadership = influence, not authority.",
      problemExplanation: [
        "Think leadership = authority: 'I'm not president, can't lead.' Wrong. Leadership = influence (people respect you)",
        "Don't know how: 'Can't inspire, delegate, give feedback.' Leadership = skill (learnable), not talent",
        "Fear responsibility: 'If we fail, my fault.' Rohan: 'Fail = learn. Either way, grow.' You avoid = stagnate",
        "Wait for permission: 'Will lead when given authority.' Rohan didn't wait—led study groups, helped juniors, proposed ideas before president"
      ],
      solutionApproach: [
        "Leadership = influence: Build via competence (good work), character (reliable), contribution (help others). Title follows respect",
        "Lead by example: Actions > words. Want hard work? Work hard. Want honesty? Be honest. Team copies your behavior",
        "Inspire with vision: Not 'organize 10 events.' Say: 'Let's be #1 club, change 200 lives, launch 50 startups.' Vision > tasks",
        "Delegate to develop: Don't do everything—empower 10 leads. They learn, you scale, club grows beyond you"
      ]
    },
    video: {
      title: 'How Average Rohan Became Best Leader: Influence Without Authority',
      duration: 8,
      script: `[0:00-0:45] WHY ROHAN WON AND YOU STAYED ON THE SIDELINES

"You: Smart, organized, capable. Nominated for club president. You declined: 'I am not a leader.' Rohan: Average student, not particularly smart or charismatic. Accepted president role. You thought: 'He will fail.' 6 months later: Club has 200 members (4× growth), 10 events, ₹2L sponsorships. Rohan = 'Best Club President.' You are shocked: 'How? I am smarter than him!' Reality: Leadership is NOT about intelligence or charisma. Leadership is INFLUENCE. Rohan built influence through: Lead by example, inspire with vision, delegate effectively, develop others. You waited for permission. He created opportunities. By the end of this video, you will learn leadership - influence without authority. Let us fix this."

[0:45-2:15] LEADERSHIP = INFLUENCE, NOT AUTHORITY

"You think: 'Leadership = having authority (president, manager, boss). I am not president, so I cannot lead.'

WRONG.

Leadership = INFLUENCE (ability to inspire and guide others to achieve shared goals).
Authority = POSITION (title, power to make decisions).

You can have authority WITHOUT influence:
- Authoritarian boss: Has title (authority). Nobody respects him (no influence). People comply (forced) but do not commit (not inspired). Result: Mediocre performance.

You can have influence WITHOUT authority:
- You (NOT president): No title (no authority). But you lead study group (10 members). You arrive prepared (competence). You help struggling members (character). You share notes (contribution). People respect you. They follow your suggestions. You have INFLUENCE without authority. You are a leader without a title.

ROHAN HAS BOTH:
- Authority: President title (can make decisions).
- Influence: People respect him (he leads by example, inspires with vision, develops others).

Result: High commitment (people WANT to follow him, not forced). 200 members, 10 events, ₹2L sponsorships.

LESSON: Build INFLUENCE first (through competence, character, contribution). Authority will follow (people will nominate you for president because you already lead).

Stop waiting for authority. Start building influence."

[2:15-3:45] LEAD BY EXAMPLE (Actions > Words)

"Rohan says: 'Let us arrive on time.' He arrives 10 minutes EARLY. Result: Others arrive early too (they follow his example).

If Rohan said 'arrive on time' but arrived late himself: Nobody would follow. Hypocrisy kills leadership.

LEAD BY EXAMPLE:
1. Work ethic: You want team to work hard? Work hard yourself. Rohan stays late, does grunt work (setting up chairs, cleaning up). Others see: 'President is doing grunt work? I should help.' Team works hard.

2. Integrity: You want team to be honest? Be honest yourself. Rohan admits: 'I messed up the event budget. My bad. Let us fix it.' Others see: 'President admits mistakes? I can too.' Team becomes honest.

3. Respect: You want team to respect each other? Respect them first. Rohan listens to juniors: 'What do you think?' Values their opinions. Others see: 'President respects us? We should respect each other.' Team becomes respectful.

YOUR BEHAVIOR SETS THE STANDARD. Team follows your EXAMPLE, not your WORDS.

You say: 'Work hard' but you slack off? Team slacks off.
You say: 'Be honest' but you hide mistakes? Team hides mistakes.
You say: 'Respect each other' but you interrupt people? Team interrupts.

Model the behavior you want to see. Your actions are your leadership."

[3:45-5:15] INSPIRE WITH VISION (People Follow Vision, Not Tasks)

"Rohan does NOT say: 'Let us organize 10 events this year.'

He says: 'Let us make this the #1 entrepreneurship club in the state. Let us create opportunities for 200 students to learn, network, and launch startups. Let us change lives.'

DIFFERENCE:
Tasks = boring (organize 10 events = checklist).
Vision = inspiring (change lives = purpose).

People do not follow tasks. They follow VISION.

HOW TO INSPIRE WITH VISION:
1. Paint the future: 'Imagine: 200 members, 10 events/year, ₹2L sponsorships, 50 startups launched by our members. We can make this happen.'

2. Connect to purpose: 'Why does this matter? Because B.Com students lack entrepreneurship exposure. We will fill this gap. We will change their career trajectories.'

3. Make it personal: 'What is YOUR why? What do you want to achieve through this club?' (Everyone shares: 'I want to launch a startup.' 'I want to network with entrepreneurs.' 'I want to learn business skills.') Vision becomes SHARED.

RESULT: 50 members become 200 members. Why? Vision is compelling. People join because they are INSPIRED, not because tasks are exciting.

Start with vision. Connect to purpose. Make it shared. Then execute tasks."

[5:15-6:30] DELEGATE TO DEVELOP (Not to Dump Work)

"You think: 'If I want it done right, I must do it myself.' So you do everything. Result: Burnout. Team does not grow. Club does not scale.

Rohan thinks: 'If I want to scale, I must develop others.' So he delegates. Result: He works 10 hours/week (not 40). Team grows (10 leaders). Club scales (100 hours/week capacity).

DELEGATION IS NOT DUMPING WORK. IT IS DEVELOPING PEOPLE.

BAD DELEGATION (Dumping):
'Priya, organize event. Figure it out. Report back.' (No support, no guidance, no development.)
Result: Priya struggles. Event is mediocre. Priya does not learn. You blame her: 'She did not do it right.'

GOOD DELEGATION (Developing):
'Priya, organize event. Here is the goal: 100 attendees, ₹10K budget. Here are resources: Venue contacts, sponsor list, event checklist. I am here to help. What do you need?' (Clear goal, resources, support.)
Result: Priya succeeds. Event is excellent (120 attendees!). Priya learns. You celebrate her: 'Priya organized her first event. 120 attendees! Outstanding!'

DELEGATE TO:
1. Develop others (they learn by doing)
2. Scale impact (10 people > 1 person)
3. Build succession (when you leave, 10 leaders can take over)

Empower, support, trust. Do not dump, blame, micromanage."

[6:30-7:30] BUILD INFLUENCE WITHOUT AUTHORITY

"You are NOT president. You are NOT manager. You have NO authority. Can you still lead?

YES. Build influence without authority.

HOW:
1. Deliver excellent work: Be the most RELIABLE person. If you commit, you DELIVER. People trust you. They ask: 'Can you lead this project?' (You have influence.)

2. Help others succeed: Mentor juniors. Share knowledge. Support teammates. People appreciate you. They ask: 'Can you help me with this?' (You have influence.)

3. Contribute ideas: In meetings, propose solutions. People value your input. They ask: 'What do you think we should do?' (You have influence.)

4. Build relationships: Know people. Understand their goals. Connect them. People like you. They ask: 'Can you introduce me to X?' (You have influence.)

5. Be consistent: Show up. Follow through. Be dependable. People rely on you. They ask: 'Can we count on you?' (You have influence.)

ROHAN BEFORE PRESIDENT:
- Organized study groups (no title, just initiative)
- Helped juniors (no authority, just service)
- Proposed ideas (no position, just contribution)

People noticed: 'Rohan takes initiative. Rohan helps others. Rohan contributes.'

When president position opened: Everyone thought: 'Rohan should lead.' He EARNED leadership through influence.

You wait for authority. He builds influence. Authority follows influence."

[7:30-8:00] YOUR CHALLENGE (Lead Without Waiting for Permission)

"Here is your action step: Do NOT wait for authority (president, manager, team lead).

START LEADING NOW:
1. Lead study group (10 members, no title needed)
2. Organize club event (volunteer, no authority needed)
3. Mentor 3 juniors (help with assignments, no position needed)
4. Propose ideas in meetings (contribute, no permission needed)
5. Lead by example (arrive early, work hard, be reliable)

RESULT: Over 6 months, you will build INFLUENCE. People will respect you, follow you, ask for your guidance.

When leadership position opens: People will nominate YOU (because you already lead).

Stop waiting for permission. Start building influence. Lead without authority."

[End Screen: "Next Video: Conflict Management - Turn Disagreements into Growth"]`,
      content: [
        'Leadership = Influence, Not Authority: Inspire and guide others to achieve shared goals (no title needed)',
        'Lead by Example: Your behavior sets the standard (people follow what you DO, not what you SAY)',
        'Inspire with Vision: Paint compelling future, connect to purpose, make it shared (people follow vision, not tasks)',
        'Delegate to Develop: Empower others, provide support, trust them (develop people, not dump work)',
        'Develop Others: Create more leaders through mentorship, feedback, opportunities, celebration',
        'Build Influence Without Authority: Competence + Character + Contribution = Influence (authority follows)',
        'B.Com Applications: Club leadership, group projects, study groups, internships, startup teams'
      ]
    },
    quiz: {
      title: 'Leadership Quiz',
      questions: [
        {
          id: 6,
          question: 'You decline president: "No authority." Rohan accepts. 6 months: Club grows 4×. What is leadership?',
          options: [
            'Having authority and title',
            'Influence - inspiring others',
            'Being bossy, giving orders',
            'Having position and power'
          ],
          correct: 1,
          explanation: 'Leadership = INFLUENCE (inspiring and guiding others), NOT authority (title/position). Think: "I\'m not president (no authority), so I can\'t lead." Reality: Can lead WITHOUT authority. Rohan built influence through: (1) Lead by example (arrives early, does grunt work, models behavior), (2) Inspire with vision ("Let\'s make this #1 club"), (3) Delegate effectively (empowers 10 team leads), (4) Develop others (mentors, creates opportunities). Result: 200 members follow him because they RESPECT him (influence), not because they HAVE TO (authority). Can have influence without authority: Lead study group (10 members, no title needed), mentor juniors (no authority needed), contribute ideas (no position needed). People respect you, follow you, ask for guidance. You\'re a leader without a title. Build influence first (competence + character + contribution). Authority follows influence. Stop waiting for president title. Start leading now.'
        },
        {
          id: 7,
          question: 'Rohan: "I serve you. How can I help you succeed?" Which leadership style?',
          options: [
            'Authoritarian - "Do as I say"',
            'Servant leadership - serve team',
            'Avoiding responsibility completely',
            'Passive - let team do anything'
          ],
          correct: 1,
          explanation: 'Servant leadership = focuses on SERVING and DEVELOPING team members, not being served. Rohan asks: "How can I help you succeed?" (servant mindset). He: (1) Mentors 10 team leads (weekly 1-on-1s, feedback, support), (2) Creates opportunities (junior wants to learn marketing? Make them Marketing Lead), (3) Removes obstacles (team needs venue? Rohan negotiates with college), (4) Celebrates team (public recognition, not self-promotion). Result: Team grows, succeeds, stays committed. Servant leadership ≠ weak leadership. It\'s STRONG leadership that prioritizes team development over personal glory. Simon Sinek: "Leaders eat last" (military: Officers eat after soldiers are fed. Leaders sacrifice for team). Rohan sacrifices time (stays late to help), credit (celebrates team, not himself), comfort (does grunt work). Team appreciates, respects, follows him. Serve your team. Ask: "How can I help you succeed?" Mentor, support, remove obstacles, celebrate them. They\'ll follow you because you serve them, not because you boss them.'
        },
        {
          id: 8,
          question: 'Rohan: "Arrive on time." He arrives 10 min early. Team follows. If he arrived late?',
          options: [
            'Yes - team follows words',
            'No - team follows actions',
            'Yes - authority means obey',
            'No - team figures it out'
          ],
          correct: 1,
          explanation: 'Team follows what leader DOES (behavior), not what leader SAYS (words). Rohan arrives 10 minutes early. Team sees his behavior, follows his example. Result: Team arrives early. If Rohan said "arrive on time" but arrived late himself: Team would arrive late too (they follow his behavior, not his words). Hypocrisy kills leadership. Lead by example means: (1) Work ethic (want team to work hard? Work hard yourself), (2) Integrity (want honesty? Admit your mistakes), (3) Respect (want respect? Respect others first). Your BEHAVIOR sets the standard. Team mirrors your actions. You arrive late? Team arrives late. You work hard? Team works hard. You admit mistakes? Team admits mistakes. Your actions are your leadership. Don\'t say "work hard" while you slack off. Don\'t say "be honest" while you hide mistakes. Model the behavior you want to see. Your team will follow your example, not your words.'
        },
        {
          id: 9,
          question: 'Delegate to Priya. A: "Figure it out." B: "Goal: 100 attendees. Resources: contacts, checklist. I\'m here." Which?',
          options: [
            'A - Dump tasks, avoid work',
            'B - Develop through support',
            'A - Builds independence',
            'Neither - do everything yourself'
          ],
          correct: 1,
          explanation: 'Option B = effective delegation (develop others through responsibility + support). Option A = dumping work ("Figure it out" = no support, no guidance). Result: Priya struggles, event is mediocre, Priya doesn\'t learn, you blame her. Option B provides: (1) Clear goal (100 attendees, ₹10K budget - Priya knows success criteria), (2) Resources (venue contacts, checklist - Priya has tools), (3) Support ("I\'m here to help" - Priya can ask questions). Result: Priya succeeds (120 attendees!), learns (event management skills), grows (confidence, leadership). Effective delegation: (1) Develops others (they learn by doing), (2) Scales impact (10 people > 1 person), (3) Builds succession (when you leave, 10 leaders can take over). Delegation ≠ dumping unwanted tasks or avoiding work. Delegation = developing people through empowerment + support. Delegate to develop. Provide clear goals, resources, support. Trust them. Celebrate their success. They\'ll grow into leaders.'
        },
        {
          id: 10,
          question: 'NOT president. But lead study group, mentor juniors. People ask: "What should we do?" How?',
          options: [
            'Forcing compliance through pressure',
            'COMPETENCE + CHARACTER + CONTRIBUTION',
            'Having title or position',
            'Being aggressive and demanding'
          ],
          correct: 1,
          explanation: 'Built influence without authority through: (1) COMPETENCE (deliver excellent work, people trust your judgment - "You\'re reliable, I trust your suggestions"), (2) CHARACTER (you\'re honest, caring, reliable, people trust your intentions - "You help others, I respect you"), (3) CONTRIBUTION (mentor juniors, share knowledge, add value, people appreciate you - "You helped me, I\'ll follow you"). Result: People respect you, follow your suggestions, ask for your guidance. You have INFLUENCE without authority. You\'re a leader without a title. Rohan did this BEFORE becoming president: Organized study groups (competence), helped juniors (character), contributed ideas (contribution). People noticed. When president position opened: Everyone nominated Rohan (he already had influence). Authority followed influence. Do NOT wait for authority (president, manager, team lead). Build influence NOW: Deliver excellent work, help others, contribute ideas, be reliable, be consistent. Over 6 months, you\'ll have influence. People will follow you. Authority will come.'
        }
      ]
    },
    challenge: {
      title: 'Leadership Challenge',
      description: 'Build influence and lead without authority',
      contexts: {
        academic: {
          title: 'Academic Leadership Excellence',
          description: 'You are a B.Com 2nd year student. Your college is organizing "Business Plan Competition" (50 teams, ₹1L prize). You want to participate but have no team. You think: "I am not a leader. Nobody will join my team." Your professor says: "Leadership is not about authority. Build influence. People will follow." Goal: Build a team, lead them to create excellent business plan, win competition (or reach top 5), develop leadership skills.',
          instructions: [
            '1. Week 1 - Build Influence Before Recruiting (Days 1-7, 10 hours): Before recruiting team, build influence. Action: (1) Deliver excellent work: In class, submit best assignments (professors notice: "You are excellent student"). (2) Help others: Help 5 classmates with assignments (they appreciate: "You helped me, thank you!"). (3) Contribute ideas: In class discussions, share insights (classmates notice: "You have good ideas"). (4) Be reliable: When you commit to group work, deliver on time (classmates trust: "You are reliable"). (5) Be visible: Attend club events, network, introduce yourself (people know you). After 1 week, you have built initial influence. 10 classmates respect you. Now recruit.',
            '2. Week 1 - Recruit Team with Vision (Days 5-7, 5 hours): Do NOT say: "Join my team for business plan competition." (Boring. Nobody cares.) Say: "I am building a team to create a business that solves real student problems. Our goal: Win ₹1L prize, launch actual startup, change student lives. I need 4 people: Marketing expert, finance expert, operations expert, tech expert. We will work hard, learn entrepreneurship, build something meaningful. Who is in?" (Vision is compelling.) Result: 8 people express interest. You interview 8, select 4 best (Priya - marketing, Rahul - finance, Ankit - operations, Sarah - tech). Team formed. They joined because of VISION, not because of YOUR authority (you have none).',
            '3. Week 2 - Inspire with Vision (Day 8, 2 hours): First team meeting. Do NOT say: "Let us create business plan and win." (Task-focused.) Say: "Our vision: Create a business that solves real student problems (affordable meal delivery for hostel students). Our purpose: Help 1000 students eat healthy, affordable meals. Our goal: Win ₹1L, launch startup, change lives. Our why: We are B.Com students. We learn business theory. Let us apply it. Let us build something REAL." Ask each member: "What is YOUR why?" Priya: "I want to learn marketing." Rahul: "I want to understand startup finance." Ankit: "I want to launch a business." Sarah: "I want to build tech product." Vision becomes SHARED. Everyone is inspired. Commitment is high.',
            '4. Week 2-4 - Lead by Example (Days 8-28, 30 hours): Model the behavior you want. (1) Work ethic: You work 30 hours/week (research, business model, pitch deck). Team sees, follows. They work hard too. (2) Integrity: You miss 1 deadline (market research). You admit: "I underestimated time. My bad. I will finish by tomorrow." Team sees: "Leader admits mistakes. I can too." (3) Respect: In meetings, you ask everyone: "What do you think?" You listen, value opinions. Team sees: "Leader respects us. We should respect each other." Your behavior sets standard. Team follows your example.',
            '5. Week 3-5 - Delegate to Develop (Days 15-35, 20 hours): Do NOT do everything yourself. Delegate to develop team. (1) Priya (Marketing): "Create marketing strategy. Goal: Reach 1000 students. Resources: Social media templates, competitor analysis. I am here to help. What do you need?" Priya creates excellent strategy (Instagram + WhatsApp + college posters). (2) Rahul (Finance): "Create financial model. Goal: ₹10L revenue in Year 1, break-even in Month 6. Resources: Excel template, startup finance guide. I am here to help." Rahul creates detailed model (revenue, costs, profit). (3) Ankit (Operations): "Design delivery operations. Goal: 100 meals/day, 30-min delivery. Resources: Operations checklist, logistics guide." Ankit designs efficient operations. (4) Sarah (Tech): "Design app mockup. Goal: Easy ordering, payment, tracking. Resources: Figma templates, UX best practices." Sarah designs beautiful app. You coordinate, provide support, do not micromanage. Team develops skills, confidence, ownership.',
            '6. Week 5-6 - Develop Others Through Feedback (Days 35-42, 10 hours): Give feedback to develop team. (1) Priya: "Your marketing strategy is excellent! Instagram + WhatsApp will reach 1000 students. Next time: Add influencer partnerships for faster growth." (Specific, positive, constructive.) (2) Rahul: "Your financial model is thorough! Revenue projections are realistic. Next time: Add sensitivity analysis (what if revenue is 20% lower?)." (3) Ankit: "Your operations design is efficient! 30-min delivery is achievable. Next time: Add contingency plan (what if delivery partner fails?)." (4) Sarah: "Your app mockup is beautiful! UX is intuitive. Next time: Add accessibility features (voice input for low-literacy users)." Feedback develops skills. Team improves. You create 4 future leaders.',
            '7. Week 6-8 - Compete and Win (Days 42-56, 25 hours): Finalize business plan. Practice pitch (10 times). Competition day: You present (5 mins intro), Priya presents marketing (3 mins), Rahul presents finance (3 mins), Ankit presents operations (3 mins), Sarah presents tech (3 mins), you conclude (3 mins). Total: 20 mins. Judges ask questions. Team answers confidently. Result: Top 3 finish! ₹25K prize (not ₹1L, but excellent for first attempt). Judges feedback: "Excellent teamwork. Clear vision. Thorough execution. This team has strong leadership." You celebrate with team: "We did not win ₹1L, but we learned entrepreneurship, built real business plan, developed leadership skills. We won in learning." Team agrees. You reflect: "I led without authority. I built influence through: Vision, example, delegation, development. I am a leader."',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Waiting for authority: "I am not president, so I cannot lead." Result: No leadership opportunities. Solution: Lead without authority (study group, competition team, club event).',
            '• Doing everything yourself: Not delegating, trying to control all work. Result: Burnout, team does not grow. Solution: Delegate to develop (clear goals + resources + support).',
            '• Task-focused, not vision-focused: "Let us create business plan" (boring). Result: Low commitment. Solution: Inspire with vision ("Let us solve real problems, change lives").',
            '• Not leading by example: Saying "work hard" but slacking off. Result: Hypocrisy, team does not follow. Solution: Model behavior (work hard yourself, team follows).',
            '• No feedback: Not developing team through constructive feedback. Result: Team does not improve. Solution: Give specific, timely, constructive feedback (develop skills).'
          ],
          successCriteria: [
            '✅ You build influence before recruiting (help others, deliver excellent work, contribute ideas)',
            '✅ You recruit team with vision (8 people interested, select 4 best)',
            '✅ You inspire with shared vision (everyone knows their "why," commitment is high)',
            '✅ You lead by example (work 30 hours/week, admit mistakes, respect team)',
            '✅ You delegate to develop (Priya, Rahul, Ankit, Sarah all create excellent work)',
            '✅ You give feedback to develop skills (specific, positive, constructive)',
            '✅ Team reaches top 3 in competition (₹25K prize, judges recognize strong leadership)',
            '✅ You develop leadership skills (influence without authority, vision, delegation, development)'
          ]
        },
        professional: {
          title: 'Professional Leadership Mastery',
          description: 'You are an intern at a startup. Your manager says: "We need someone to lead our social media strategy project. No authority, no team assigned. You must recruit volunteers, inspire them, deliver results. Interested?" You think: "I have no authority. Why would anyone follow me?" Manager: "This is leadership. Build influence." Goal: Lead project without authority, deliver excellent results, build leadership skills.',
          instructions: [
            '1. Week 1 - Build Influence in Company (Days 1-7, 15 hours): Before recruiting team, build influence. Action: (1) Deliver excellent work: Complete your intern tasks excellently (manager notices: "You are outstanding intern"). (2) Help colleagues: Help 3 colleagues with their work (they appreciate: "Thank you for helping!"). (3) Contribute in meetings: Share 2 ideas in team meetings (colleagues notice: "You have good ideas"). (4) Be reliable: When you commit to tasks, deliver on time (colleagues trust: "You are reliable"). (5) Build relationships: Have coffee chats with 10 colleagues (know them, understand their goals). After 1 week, 10 colleagues respect you. Now recruit.',
            '2. Week 1 - Recruit Volunteer Team with Vision (Days 5-7, 5 hours): Approach 10 colleagues: "I am leading social media strategy project. Our goal: Increase followers 50K → 200K in 3 months, engagement 2% → 5%, generate ₹10L in sales from social media. I need 4 volunteers: Content creator, designer, analyst, community manager. This is opportunity to: (1) Learn social media marketing, (2) Build portfolio (showcase results in resume), (3) Get visibility (present to CEO). No authority, no extra pay, just learning and impact. Interested?" Result: 6 people volunteer (vision is compelling). You select 4 best. Team formed. They joined because of VISION and OPPORTUNITY, not because you have authority.',
            '3. Week 2 - Inspire with Shared Vision (Day 8, 2 hours): First team meeting. Paint vision: "Our goal: Transform our social media from mediocre (50K followers, 2% engagement) to excellent (200K followers, 5% engagement, ₹10L sales). Our purpose: Help 1M people discover our product through engaging content. Our impact: Company grows, we grow (skills, portfolio, career). Our why: We are early in career. This is opportunity to lead, learn, make impact." Ask each: "What is YOUR why?" Content creator: "I want to build content portfolio." Designer: "I want to showcase my design work." Analyst: "I want to learn data-driven marketing." Community manager: "I want to build community management skills." Vision becomes SHARED. Commitment is high.',
            '4. Week 2-8 - Lead by Example (Days 8-56, 60 hours): Model behavior. (1) Work ethic: You work 15 hours/week (content strategy, performance tracking, team coordination). Team sees, works hard too. (2) Integrity: You make mistake (posted wrong content, got 100 dislikes). You admit publicly: "I messed up. My bad. Let us learn: Always review content before posting." Team sees: "Leader admits mistakes. Safe to make mistakes." (3) Accountability: You commit to weekly reports. You deliver every week (no excuses). Team sees: "Leader keeps commitments. We should too." Your example sets standard.',
            '5. Week 3-8 - Delegate to Develop Team (Days 15-56, 40 hours): Delegate effectively. (1) Content creator: "Create 20 posts/week. Goal: 5% engagement. Resources: Content calendar, copywriting guide. Weekly 1-on-1 for feedback." (2) Designer: "Design 20 graphics/week. Goal: Eye-catching, on-brand. Resources: Brand guidelines, design tools. Weekly feedback." (3) Analyst: "Track metrics weekly. Goal: Identify what content works. Resources: Analytics tools, reporting template. Weekly insights." (4) Community manager: "Respond to comments, build community. Goal: 90% response rate. Resources: Community guidelines, response templates. Weekly check-in." You provide: Clear goals, resources, support. You do NOT micromanage. Team develops skills, delivers excellent work.',
            '6. Week 4-8 - Develop Others Through Mentorship (Days 22-56, 20 hours): Mentor team weekly. (1) Content creator: "Your posts are getting 8% engagement (vs 5% goal)! Outstanding! What is working?" (They share: "Storytelling + questions drive engagement.") "Excellent learning. Can you teach this to team?" (They present in team meeting. They grow as leader.) (2) Designer: "Your graphics are beautiful! Engagement on visual posts is 10%! Can you create design system for team?" (They create design system. They grow as leader.) (3) Analyst: "Your insights are actionable! You found: Video posts get 3× engagement vs images. Can you present this to CEO?" (They present. CEO recognizes them. They grow in visibility.) (4) Community manager: "You respond to 95% of comments! Community loves you. Can you train new intern on community management?" (They train intern. They grow as mentor.) You create 4 future leaders by developing them.',
            '7. Month 3 - Deliver Results and Get Recognized (Days 56-90, 30 hours): Results: Followers 50K → 180K (3.6× growth), engagement 2% → 6% (3× improvement), sales from social media ₹0 → ₹8L. CEO presents in all-hands: "Social media team delivered outstanding results! 180K followers, ₹8L sales. This is excellent leadership." CEO asks: "Who led this?" Manager: "Our intern led this project. No authority, recruited volunteers, inspired them, delivered results." CEO: "Impressive. I want to meet this intern." You present to CEO: "How We Grew Social Media 3.6× in 3 Months." CEO offers: "Join us full-time after graduation. We need leaders like you." Result: Job offer, leadership recognition, career growth. You led without authority. You built influence. You won.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not building influence first: Recruiting team without influence. Result: Nobody joins (they do not know/respect you). Solution: Build influence first (help others, deliver excellent work), then recruit.',
            '• Task-focused recruitment: "Join my team to create business plan" (boring). Result: Low interest. Solution: Vision-focused ("Solve real problems, change lives, learn entrepreneurship").',
            '• Micromanaging: Delegating but controlling every detail. Result: Team feels untrusted, does not grow. Solution: Delegate with clear goals + resources + support, then TRUST them.',
            '• No feedback: Not developing team through mentorship. Result: Team does not improve, does not grow into leaders. Solution: Weekly 1-on-1s, specific feedback, create opportunities.',
            '• Taking all credit: Presenting to CEO as "I did this." Result: Team feels unappreciated. Solution: "WE did this. Team delivered. I just coordinated." (Celebrate team, build loyalty.)'
          ],
          successCriteria: [
            '✅ You build influence before recruiting (help 5 classmates, deliver excellent work, contribute ideas)',
            '✅ You recruit team with vision (8 people interested, select 4 best)',
            '✅ You inspire with shared vision (everyone knows their "why," commitment is high)',
            '✅ You lead by example (work 15 hours/week, admit mistakes, keep commitments)',
            '✅ You delegate effectively (clear goals + resources + support, team delivers excellent work)',
            '✅ You develop team (weekly mentorship, feedback, opportunities, 4 people grow into leaders)',
            '✅ You deliver outstanding results (followers 3.6×, engagement 3×, ₹8L sales)',
            '✅ CEO recognizes your leadership and offers full-time job'
          ]
        },
        personal: {
          title: 'Personal Leadership Wisdom',
          description: 'You want to organize a "B.Com Students Career Fair" (help 500 students meet 20 companies, get internships/jobs). You have no authority (not club president, not college admin). You think: "Nobody will help me. I cannot do this alone." Your mentor says: "Leadership is influence. Build it. People will follow." Goal: Lead this initiative without authority, organize successful career fair, help 500 students.',
          instructions: [
            '1. Month 1 - Build Influence and Recruit Core Team (Days 1-30, 40 hours): Build influence first. Action: (1) Help 20 students: Review resumes, give career advice, connect to alumni (they appreciate: "You helped me!"). (2) Contribute value: Post career tips on LinkedIn (100 students follow you, engage with posts). (3) Build relationships: Network with 10 alumni, 5 professors, 3 company HRs (know people, understand their goals). (4) Be visible: Attend career events, introduce yourself, share your vision ("I want to organize career fair"). After 1 month, 50 students respect you, 10 alumni know you, 5 professors support you. Now recruit core team. Approach 10 students: "I am organizing career fair. Goal: Help 500 students meet 20 companies. I need core team (5 people): Company outreach, student outreach, logistics, marketing, finance. This is opportunity to: Lead, learn event management, build network, help 500 students. Interested?" Result: 8 people volunteer. You select 5 best. Core team formed. They joined because of VISION and YOUR INFLUENCE (you helped them, they respect you).',
            '2. Month 2 - Inspire Core Team with Vision (Day 31, 3 hours): First core team meeting. Paint vision: "Our goal: Organize career fair that helps 500 B.Com students meet 20 companies, get 50 internships, 20 jobs. Our purpose: B.Com students struggle with career guidance. We will fill this gap. Our impact: Change 500 career trajectories. Our why: We are students. We faced career confusion. Let us help others." Ask each: "What is YOUR why?" Company outreach lead: "I want to build corporate network." Student outreach lead: "I want to help students like me." Logistics lead: "I want to learn event management." Marketing lead: "I want to build marketing portfolio." Finance lead: "I want to manage ₹2L budget." Vision becomes SHARED. Everyone is inspired.',
            '3. Month 2-3 - Lead by Example (Days 31-90, 80 hours): Model behavior. (1) Work ethic: You work 20 hours/week (coordinate, pitch to companies, solve problems). Team sees, works hard too. (2) Service: You do grunt work (call 50 companies, get rejected 40 times, finally get 10 companies to commit). Team sees: "Leader does hard work. We should too." (3) Persistence: Company rejects you. You follow up 3 times. They finally agree. Team sees: "Leader does not give up. We should persist too." (4) Transparency: You share challenges in team meetings: "I am struggling to get companies. Only 10 committed, need 20. Ideas?" Team helps. Together, you reach 20 companies. Your example inspires team.',
            '4. Month 2-4 - Delegate and Empower (Days 31-120, 60 hours): Delegate to develop team. (1) Company outreach lead: "Get 20 companies. Goal: Mix of Big 4, startups, MNCs. Resources: Company list, pitch template, my intro to 5 HRs. I am here to help." They get 20 companies (excellent!). (2) Student outreach lead: "Get 500 students. Goal: All years, diverse interests. Resources: WhatsApp groups, poster templates, professor support. I am here to help." They get 600 students (exceeded goal!). (3) Logistics lead: "Manage venue, setup, registration. Goal: Smooth experience. Resources: Venue contacts, setup checklist, volunteer team. I am here to help." They execute flawlessly. (4) Marketing lead: "Promote event. Goal: 1000 registrations. Resources: Social media, college notice boards, email lists." They get 1200 registrations. (5) Finance lead: "Manage ₹2L budget (sponsorships, expenses). Goal: Break-even. Resources: Budget template, sponsor list." They raise ₹2.5L, spend ₹2L, profit ₹50K. Team delivers beyond expectations because you EMPOWERED them (clear goals + resources + support + trust).',
            '5. Month 4 - Execute Career Fair (Day 120, 12 hours): Event day: 600 students, 20 companies, 8 hours. Team executes: Registration (smooth), company booths (organized), student-company meetings (productive), networking lunch (engaging). Results: 60 internship offers, 25 job offers, 500 students networked. Students feedback: "This was excellent! Thank you for organizing!" Companies feedback: "Well-organized event. We will come next year." College principal: "Outstanding initiative. I am proud of you." You celebrate with team: "WE did this. Thank you for your hard work, dedication, leadership. You made this happen." (Celebrate team, not yourself.)',
            '6. Month 4 - Reflect and Develop Team (Day 125, 5 hours): Final team meeting. Reflect: (1) What worked: "Vision inspired us. Your example motivated us. Delegation developed us. Support empowered us." (2) What we learned: "Leadership is influence. We led without authority. We built something meaningful." (3) What next: "3 team members want to organize career fair next year. 2 want to start their own initiatives." You mentor them: "Here is what I learned. Apply it. I am here to support." You created 5 future leaders. When you graduate, 5 people can continue career fair. Leadership legacy.',
            '7. Month 5 - Get Recognized (Day 150): College nominates you for "Student Leader of the Year" award. You win. Award ceremony: You present: "How I Led Without Authority: Organizing Career Fair for 500 Students." 200 students attend. 50 students approach you: "Can you mentor me? I want to lead like you." You mentor 10 students. You became leadership role model. Your LinkedIn post: "How I Organized Career Fair Without Authority" gets 10K likes. Recruiters message you: "We need leaders like you. Interested in joining our company?" You have 3 job offers. Leadership opened doors.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not building influence first: Recruiting without influence. Result: Nobody volunteers. Solution: Help others, deliver excellent work, build relationships FIRST.',
            '• Giving up after rejection: 40 companies reject you, you give up. Result: No career fair. Solution: Persist (follow up 3 times, finally get 10 companies).',
            '• Micromanaging volunteers: Controlling every detail because "I have no authority, must control." Result: Team feels untrusted, quits. Solution: Delegate with trust (clear goals + resources + support).',
            '• Taking all credit: "I organized career fair" (ignoring team). Result: Team feels unappreciated, does not help next time. Solution: "WE organized. Team delivered. I just coordinated."',
            '• Not creating succession: You graduate, career fair dies (nobody to continue). Result: One-time impact. Solution: Develop 5 leaders, mentor them, create succession (career fair continues for 5 years).'
          ],
          successCriteria: [
            '✅ You build influence in company (help colleagues, deliver excellent work, contribute ideas)',
            '✅ You recruit volunteer team with vision (6 people volunteer, select 4 best)',
            '✅ You inspire with shared vision (everyone knows their "why," high commitment)',
            '✅ You lead by example (work 20 hours/week, do grunt work, persist through rejection)',
            '✅ You delegate and empower (team delivers beyond expectations: 600 students, 20 companies, 60 internships, 25 jobs)',
            '✅ You execute successful career fair (500 students helped, college principal recognizes you)',
            '✅ You develop 5 future leaders (mentor them, create succession, career fair continues)',
            '✅ You win "Student Leader of the Year," get 3 job offers, become leadership role model'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '💡 Understand Leadership = Influence: You know leadership is INFLUENCE (inspiring and guiding others), not authority (title/position). You do not wait for president title or manager position. You build influence through: (1) Competence (deliver excellent work), (2) Character (reliable, honest, caring), (3) Contribution (help others, add value). Result: People respect you, follow you, ask for your guidance. You are a leader without a title. You lead study groups, mentor juniors, organize initiatives - all without authority. Influence first, authority later.',
        '👔 Lead by Example Mastery: You model the behavior you want to see. You want team to work hard? You work hard (stay late, do grunt work). You want honesty? You admit mistakes ("I messed up"). You want respect? You respect others first (listen, value opinions). Result: Team follows your EXAMPLE, not your WORDS. You arrive early → team arrives early. You work hard → team works hard. You admit mistakes → team admits mistakes. Your behavior sets the standard. You understand: Actions > words. Hypocrisy kills leadership. Consistency builds it.',
        '🎯 Inspire with Vision: You do not just assign tasks ("organize 10 events"). You paint compelling vision ("Let us make this #1 club, change 200 lives"). You connect to purpose ("B.Com students lack entrepreneurship exposure. We will fill this gap"). You make it personal ("What is YOUR why?"). Result: People are INSPIRED, not just instructed. They commit because vision is meaningful, not because tasks are easy. You understand: People follow vision, not tasks. Vision inspires. Purpose motivates. Tasks execute.',
        '🤝 Delegate to Develop: You delegate to DEVELOP others, not dump work. You provide: (1) Clear goals (100 attendees, ₹10K budget), (2) Resources (venue contacts, checklist), (3) Support ("I am here to help"), (4) Trust (do not micromanage). Result: Team succeeds (120 attendees!), learns (event management skills), grows (confidence, leadership). You understand: Delegation develops people. You scale impact (10 people > 1 person). You build succession (when you leave, 10 leaders can take over). Effective delegation = empowerment + support + trust.',
        '🌱 Develop Others into Leaders: You create more leaders through: (1) Mentorship (weekly 1-on-1s, ask: "What challenges? How can I help?"), (2) Feedback (specific, timely, constructive: "Excellent work! Next time: Try X"), (3) Opportunities (junior wants to learn marketing? Make them Marketing Lead), (4) Celebration (public recognition: "Priya organized first event. 120 attendees! Outstanding!"). Result: 10 team members grow into leaders. When you leave, 10 people can lead. You multiplied your impact. You understand: Great leaders create more leaders, not followers.'
      ],
      improvements: [
        '⚡ Build Influence Faster: You build influence in 1 week (help 5 people, deliver excellent work). Good. But you can go faster. Improve: Build influence in 3 days. How? (1) Help 10 people (not 5) in 3 days (2 hours/day helping others), (2) Contribute 5 ideas (not 2) in meetings (be more vocal), (3) Network with 20 people (not 10) through coffee chats (30 mins each). Result: Faster influence = faster leadership opportunities. In competitive environments (college, startups), speed matters. Build influence fast, seize opportunities fast.',
        '🎯 Learn More Leadership Styles: You know servant leadership (serve team). Good. But learn more: (1) Transformational leadership (inspire with vision, develop others - Steve Jobs, Elon Musk), (2) Situational leadership (adapt style to situation - directive when urgent, coaching when learning, supportive when confident - Ken Blanchard), (3) Democratic leadership (involve team in decisions - consensus-driven), (4) Authentic leadership (be yourself, lead from your values - Brené Brown). Different situations need different styles. Master 4-5 styles. Adapt based on context. Flexible leadership = effective leadership.',
        '📊 Measure Leadership Impact: You lead team to success (200 members, 10 events, ₹2L sponsorships). But you do not measure YOUR leadership impact. Improve: Measure: (1) Team growth (how many people developed leadership skills? 10 team leads), (2) Influence growth (how many people seek your guidance? Track monthly: Month 1 = 5 people, Month 6 = 50 people), (3) Results delivered (followers, revenue, events organized), (4) Succession (how many can lead after you leave? 10 people). Measurement shows: Your leadership is working (influence growing, team developing, results delivered). Use data to improve: "Only 5 people developed into leaders. Goal was 10. What can I do better? More mentorship? More opportunities?"',
        '🗣️ Improve Public Speaking: You inspire 1-on-1 and in small groups (5-10 people). Good. But improve public speaking for large groups (50-500 people). Why? (1) Scale influence (inspire 500 people at once, not 10), (2) Build visibility (present at college events, company all-hands, conferences), (3) Career growth (public speaking is top leadership skill). Practice: (1) Join Toastmasters (practice weekly), (2) Present in college events (start with 5 mins, build to 20 mins), (3) Record yourself (watch, improve). After 6 months, you will inspire large audiences. Leadership scales.',
        '👥 Mentor More People: You mentor 3-5 people. Good. But mentor more. Improve: Mentor 20 people over 1 year. Why? (1) Multiply impact (20 people × their impact = 20× your impact), (2) Build network (20 mentees become your advocates, open doors), (3) Master mentorship (after 20 mentees, you see patterns, become expert). Create mentorship program: "I will mentor 20 B.Com students on leadership. Apply: Share your goals, challenges, why you want mentorship." Select 20. Meet monthly (1 hour each). Share: Leadership lessons, feedback, opportunities. After 1 year, 20 people developed. Your leadership legacy grows.'
      ],
      nextSteps: [
        '📚 Read Leadership Classics: (1) "Leaders Eat Last" by Simon Sinek (servant leadership - serve your team), (2) "Start with Why" by Simon Sinek (inspire with purpose), (3) "The 7 Habits of Highly Effective People" by Stephen Covey (character-based leadership), (4) "Dare to Lead" by Brené Brown (authentic, vulnerable leadership), (5) "Good to Great" by Jim Collins (Level 5 leadership - humble + driven). Apply: Extract 3 key lessons per book. Practice: Apply 1 lesson to your current team. Observe: Does it improve team performance? Document learnings.',
        '🎯 Take Leadership Assessment: Take StrengthsFinder 2.0 assessment (discover your top 5 strengths). Understand: (1) Your natural leadership strengths (are you Strategic? Achiever? Relator?), (2) How to leverage strengths (if you are Strategic, lead with vision and planning), (3) How to manage weaknesses (if you are not Woo/social, partner with someone who is). Apply: Lead from your strengths. If you are Strategic (good at vision), focus on inspiring with vision. If you are Achiever (good at execution), focus on delivering results. Authentic leadership = lead from YOUR strengths, not copy others.',
        '🎤 Practice Public Speaking: Join Toastmasters or college public speaking club. Goal: Deliver 20 speeches in 6 months. Progression: (1) Month 1-2: 5-min speeches (introduce yourself, share story), (2) Month 3-4: 10-min speeches (teach concept, inspire audience), (3) Month 5-6: 20-min speeches (present project, lead workshop). Practice: Speak at college events, club meetings, company presentations. Record yourself, watch, improve. After 20 speeches, you will inspire large audiences (50-500 people). Public speaking scales your influence.',
        '👥 Create Leadership Development Program: Design 3-month program: "Leadership Without Authority for B.Com Students." Content: (1) Week 1-4: Build influence (competence, character, contribution), (2) Week 5-8: Lead by example (model behavior), (3) Week 9-12: Delegate and develop (empower others). Deliver to 20 students. Meet weekly (1 hour). Give assignments (lead study group, mentor junior, organize event). Give feedback. After 3 months, 20 students develop leadership skills. You become leadership educator. Your impact multiplies.',
        '📊 Build Leadership Portfolio: Document your leadership journey. Create portfolio: (1) Projects led (business plan competition, career fair, social media strategy), (2) Teams built (recruited 4-10 people per project), (3) Results delivered (top 3 finish, 500 students helped, 3.6× growth), (4) People developed (10 team members grew into leaders), (5) Recognition received (Student Leader of the Year, CEO job offer). Use portfolio: (1) Job interviews (prove leadership skills), (2) Grad school applications (demonstrate impact), (3) Mentorship (inspire others). Leadership portfolio = career accelerator.'
      ]
    },
    badge: { name: 'Leader', emoji: '🎯', description: 'Emerging leader and influencer' },
    shareMessage: 'Just developed leadership skills! 🎯 #Leadership #Teamwork'
  },
  {
    id: 'conflict-management',
    title: 'Conflict Management',
    emoji: '🤝',
    context: 'professional' as const,
    discover: {
      scenario: "B.Com Financial Analysis group. Priya: 'Primary research!' Rahul: 'Waste of time, secondary!' Fight escalates. Day 1: disagree. Day 5: 'You're lazy!' Silent treatment. Report: 5/10. 'Disjointed, poor teamwork.' You avoided conflict. It exploded.",
      problemExplanation: [
        "Avoid conflict: 'Hope it resolves.' It doesn't. Day 1 = disagree. Day 5 = personal attacks, silent treatment",
        "No skills: Try 'Just get along?' or '50/50 compromise.' Doesn't work. Don't know active listening, interests, win-win",
        "Win-lose thinking: Pick Priya. Rahul feels defeated, disengages, does minimum. Team weak",
        "Focus positions not interests: 'Primary!' vs 'Secondary!' (positions). Should ask: WHY? (Priya = quality, Rahul = time)"
      ],
      solutionApproach: [
        "Address early (Day 1): 'Different views on research. Let's discuss both perspectives, find solution.' Stop before escalation",
        "Active listening: Ask Priya WHY primary (quality). Ask Rahul WHY secondary (time). Paraphrase. Now know interests",
        "Separate people from problem: Not 'You're lazy/unrealistic.' Say: 'Issue = research method. We all want great report. Let's solve together'",
        "Find win-win: Quick primary (30 students online, 2 days). Priya gets quality. Rahul gets time. Both win"
      ]
    },
    video: {
      title: 'From 5/10 to 8/10: Turn Conflict into Growth',
      duration: 8,
      script: `[0:00-0:45] WHY YOU FAILED (Avoided Conflict)

"Week 3: Priya vs Rahul conflict (primary vs secondary research). You avoided it: 'I hope they resolve it themselves.' Week 4: Submit report. Professor: 5/10. 'Disjointed. Poor teamwork.' You FAILED because you did NOT manage conflict. You avoided it. It escalated. Relationship damaged (Priya and Rahul not talking). Productivity destroyed (working separately). Quality suffered (5/10 grade). Meanwhile, another team had same conflict. They ADDRESSED it (Day 1, facilitated discussion, found win-win). Result: 8/10 grade. 'Excellent teamwork.' By the end of this video, you will learn conflict management - address early, listen actively, find win-win, turn disagreements into growth. Let us fix this."

[0:45-2:15] ADDRESS CONFLICTS EARLY (Day 1, Not Day 5)

"Priya vs Rahul conflict emerges Day 1.

YOU (Avoiding): 'This is uncomfortable. I will stay out of it. Maybe they will resolve it themselves.'
Day 1: Disagreement (primary vs secondary research).
Day 3: Personal attacks ('You are lazy!' 'You are unrealistic!').
Day 5: Silent treatment (not talking, working separately).
Week 4: Disjointed report. 5/10 grade. Relationship damaged.

OTHER TEAM (Addressing Early): Day 1, team leader says: 'I notice you both have different views. Let us discuss. Priya, what is your perspective? Rahul, what is yours? Let us find solution that works for both.'
Day 1: Conflict resolved (found win-win: Quick primary research, 30 students online, 2 days).
Week 4: Cohesive report. 8/10 grade. Relationship strengthened.

DIFFERENCE: Early intervention (Day 1) vs late/no intervention (Day 5).

LESSON: Address conflicts EARLY. Do not wait. Do not avoid. Do not hope they resolve themselves.

Early = easier resolution (disagreement, not personal attacks).
Late = harder resolution (resentment, damaged relationship).

When you notice conflict, address within 24 hours. Early intervention prevents escalation."

[2:15-3:45] ACTIVE LISTENING: UNDERSTAND BOTH SIDES

"Priya and Rahul argue. You interrupt: 'Stop fighting! Compromise: Do 50% primary, 50% secondary.' Result: Neither is satisfied.

WRONG APPROACH. You did not LISTEN. You did not understand their perspectives.

RIGHT APPROACH - ACTIVE LISTENING:

Step 1: Listen to Priya (5 mins, no interruption).
You: 'Priya, tell me your perspective. Why is primary research important?'
Priya: 'Secondary data is outdated (2020 data, we are in 2024). Primary research gives us current, reliable data. Our analysis will be more accurate. We will get better grade.'
You (paraphrase): 'So you want quality and reliability?'
Priya: 'Yes!'

Step 2: Listen to Rahul (5 mins, no interruption).
You: 'Rahul, tell me your perspective. Why is secondary research enough?'
Rahul: 'We have 2 weeks. Primary research takes 3 weeks (design survey, collect responses, analyze). We will miss deadline. Secondary data is good enough for B.Com project.'
You (paraphrase): 'So you want to finish on time?'
Rahul: 'Yes!'

NOW YOU UNDERSTAND:
Priya interest = QUALITY (reliable, current data).
Rahul interest = TIME (meet deadline).

Active listening reveals INTERESTS. Interests enable win-win solutions.

Without listening: You compromise (50/50 = both lose).
With listening: You find win-win (quick primary research = both win)."

[3:45-5:15] SEPARATE PEOPLE FROM PROBLEM

"Conflict escalated because it became PERSONAL.

Priya: 'You are LAZY!' (Attacking Rahul as a person.)
Rahul: 'You are UNREALISTIC!' (Attacking Priya as a person.)

Focus shifted from PROBLEM (research method) to PEOPLE (character attacks). Result: Damaged relationship.

SOLUTION: Separate people from problem.

You say: 'Let us focus on the ISSUE (research method), not on each other. Priya is not unrealistic. Rahul is not lazy. We are all trying to deliver excellent report. We just have different views on HOW. Let us discuss the ISSUE.'

REFRAME:
- Problem = Research method (not Priya or Rahul)
- Goal = Excellent report (shared goal)
- Challenge = Find research method that ensures quality AND meets deadline (problem to solve TOGETHER)

Priya and Rahul stop attacking each other. They focus on problem.

Priya: 'I need quality data.'
Rahul: 'I need to meet deadline.'
You: 'How can we get quality data AND meet deadline?'

Team brainstorms: Quick primary research (30 students online, 2 days). Both agree.

LESSON: Separate people from problem. Focus on ISSUE, not personalities. Preserve relationships while solving problems."

[5:15-6:30] FIND WIN-WIN (Not Compromise)

"You think: 'Compromise = good conflict resolution.'

WRONG. Compromise = both lose something.

Compromise: 'Do 50% primary, 50% secondary research.'
Priya: 'I wanted 100% primary. Now only 50%. I lose.'
Rahul: 'I wanted 0% primary. Now 50%. I lose.'
Result: Both dissatisfied. Resentment builds.

BETTER: Win-win = both get what they NEED.

Process:
1. Identify interests (WHY they want what they want):
   Priya = Quality (reliable, current data)
   Rahul = Time (meet deadline)

2. Brainstorm options (creative solutions):
   (a) Quick primary research (30 students online, 2 days)
   (b) Primary + secondary (survey 30 for current trends, use secondary for historical data)
   (c) Focus group (10 students, 2-hour discussion, deep insights, 1 day)

3. Evaluate (which satisfies BOTH interests?):
   Option (a): Quick primary research (30 students, 2 days).
   Priya gets quality (primary data, current).
   Rahul gets time (2 days, not 3 weeks).

4. Agree: Both say: 'This works for me.'

WIN-WIN FOUND. Both satisfied. Relationship preserved. Excellent report (8/10).

Win-win requires: Understanding interests, creative brainstorming, collaborative evaluation.

Stop compromising. Start finding win-win."

[6:30-7:30] CONFLICT = GROWTH (If Managed Well)

"Priya and Rahul disagreed (Week 3). You facilitated. They found win-win (quick primary research).

RESULTS:
1. Better solution: Quick primary research is BETTER than either pure primary (too slow) or pure secondary (outdated). Combines quality + time. Conflict improved decision.

2. Stronger relationship: Priya and Rahul learned to work through disagreement. Trust increased. They collaborate better now.

3. Team skill: Team learned conflict resolution. Week 6: Another conflict (presentation format). Team resolves it themselves (they learned from Week 3).

CONFLICT BECAME GROWTH OPPORTUNITY.

Managed well, conflict is PRODUCTIVE:
- Improves decisions (diverse perspectives = better solutions)
- Strengthens relationships (work through disagreement = build trust)
- Builds skills (learn conflict resolution)

Managed poorly, conflict is DESTRUCTIVE:
- Damages relationships (personal attacks, resentment)
- Destroys productivity (silent treatment, separate work)
- Breaks teams (people refuse to work together)

LESSON: Do not AVOID conflict. MANAGE it. Turn disagreements into growth."

[7:30-8:00] YOUR CHALLENGE (Resolve 1 Conflict This Week)

"Here is your action step: Identify 1 conflict in your team (group project, club, startup, study group).

RESOLVE IT:
1. Address early (within 24 hours, do not wait)
2. Listen actively (understand both perspectives, paraphrase, identify interests)
3. Separate people from problem (focus on issue, not personalities)
4. Find win-win (brainstorm options, evaluate, agree on solution that satisfies both)
5. Follow up (check: Is conflict resolved? Relationship preserved?)

RESULT: Conflict resolved. Relationship strengthened. Team performance improved.

Stop avoiding conflict. Start managing it. Turn disagreements into growth."

[End Screen: "Next Video: Remote Collaboration - Work Across Distance"]`,
      content: [
        'Address Conflicts Early: Day 1 intervention (easier resolution) > Day 5 intervention (escalated, harder)',
        'Active Listening: Understand BOTH perspectives deeply (paraphrase, identify interests, not positions)',
        'Separate People from Problem: Focus on ISSUE (research method), not personalities ("lazy," "unrealistic")',
        'Find Win-Win Solutions: Both get what they need (quality + time), not compromise (both lose something)',
        'Mediate Fairly: Be neutral, give equal time, validate both, facilitate (not dictate)',
        'Conflict = Growth: Managed well = improves decisions, strengthens relationships, builds skills',
        'B.Com Applications: Group projects, team conflicts, club disagreements, workplace disputes'
      ]
    },
    quiz: {
      title: 'Conflict Management Quiz',
      questions: [
        {
          id: 11,
          question: 'You avoided conflict. Week 4: 5/10 grade. Other team addressed it early: 8/10. What does this show?',
          options: [
            'Conflict should be avoided',
            'Managed conflict improves decisions',
            'Conflict always destructive',
            'Conflict means incompatible'
          ],
          correct: 1,
          explanation: 'Healthy conflict, if MANAGED WELL, improves decisions and strengthens relationships. Your team: Avoided conflict → escalated to personal attacks → damaged relationship → 5/10 grade. Other team: Addressed conflict early (Day 1) → listened to both sides → found win-win (quick primary research) → strengthened relationship → 8/10 grade. Difference: Conflict management. Managed well, conflict PRODUCTIVE: (1) Improves decisions (Priya perspective: quality, Rahul perspective: time → win-win solution: quick primary research combines both = BETTER than either pure primary or pure secondary), (2) Strengthens relationships (work through disagreement together = build trust), (3) Builds skills (team learns conflict resolution). Managed poorly (avoided or aggressive), conflict DESTRUCTIVE: damages relationships, destroys productivity, breaks teams. Do NOT avoid conflict. MANAGE it. Address early, listen actively, separate people from problem, find win-win. Turn disagreements into growth.'
        },
        {
          id: 12,
          question: 'Day 1: Priya vs Rahul disagree on research. When address conflict?',
          options: [
            'Ignore - resolves itself',
            'Address EARLY (Day 1)',
            'Wait for them to resolve',
            'Wait until escalates'
          ],
          correct: 1,
          explanation: 'Address conflicts EARLY (Day 1, within 24 hours), not late (Day 5+). Early intervention: Day 1 (disagreement on research method) → You facilitate: "I notice different views. Let\'s discuss. Priya, your perspective? Rahul, yours? Let\'s find solution." → Conflict resolved same day (found win-win) → Relationship preserved → Productivity maintained. Late/no intervention: Day 1 (disagreement) → Day 3 (personal attacks: "You\'re lazy!") → Day 5 (silent treatment) → Week 4 (damaged relationship, destroyed productivity, 5/10 grade). Why early better: (1) Easier resolution (disagreement easier to resolve than resentment), (2) Prevents escalation (stops before personal attacks), (3) Preserves relationship (address issue before damage). When notice conflict (tension, disagreement, argument), address within 24 hours. Do NOT wait, avoid, or hope it resolves itself. Conflicts escalate if ignored. Early intervention prevents escalation. Address early, resolve quickly, move forward.'
        },
        {
          id: 13,
          question: 'Priya: "You\'re LAZY!" Rahul: "You\'re UNREALISTIC!" What does "separate people from problem" mean?',
          options: [
            'Isolate people - remove them',
            'Focus on ISSUE, not personalities',
            'Remove members who cause conflict',
            'Avoid people, work separately'
          ],
          correct: 1,
          explanation: 'Separate people from problem = focus on ISSUE, not personalities. Conflict escalated because focus shifted from PROBLEM (research method) to PEOPLE (character attacks: "lazy," "unrealistic"). Result: Damaged relationship. Solution: Reframe conflict. Say: "Let\'s focus on the ISSUE (research method), not on each other. Priya not unrealistic. Rahul not lazy. We\'re all trying to deliver excellent report. We just have different views on HOW. Let\'s discuss the ISSUE." Reframe: (1) Problem = Research method (not Priya or Rahul as people), (2) Goal = Excellent report (shared goal, not personal victory), (3) Challenge = Find research method that ensures quality AND meets deadline (problem to solve TOGETHER, not battle to win). Result: Priya and Rahul stop attacking each other, focus on problem, brainstorm solutions, find win-win. Relationship preserved while solving issue. Separate people from problem. Attack the PROBLEM, not the PERSON. Focus on shared goal, not personal blame. Preserve relationships while solving issues.'
        },
        {
          id: 14,
          question: '"Compromise: 50% primary, 50% secondary." Priya: "I lose." Rahul: "I lose." What\'s better than compromise?',
          options: [
            'One side must win',
            'Win-win - satisfy BOTH interests',
            'One wins, one loses',
            'Compromise quality for peace'
          ],
          correct: 1,
          explanation: 'Win-win solutions = satisfy BOTH parties interests, not compromise (both lose). Compromise: 50% primary, 50% secondary. Priya loses (wanted 100% primary). Rahul loses (wanted 0% primary). Both dissatisfied. Resentment builds. Win-win: Understand interests. Priya interest = QUALITY (reliable, current data). Rahul interest = TIME (meet deadline). Brainstorm options: (a) Quick primary research (30 students online, 2 days), (b) Primary + secondary (survey 30 for current, use secondary for historical), (c) Focus group (10 students, 2 hours, 1 day). Evaluate: Option (a) satisfies BOTH. Priya gets quality (primary data, current). Rahul gets time (2 days, not 3 weeks). Agree: Both say "This works for me." Win-win found. Result: Both satisfied, relationship preserved, excellent report (8/10). Win-win requires: (1) Identify interests (WHY they want what they want), (2) Creative brainstorming (explore options), (3) Collaborative evaluation (which satisfies both?). Aim for win-win, not compromise. Win-win = both gain. Compromise = both lose.'
        },
        {
          id: 15,
          question: 'Priya vs Rahul conflict. Best approach for resolution?',
          options: [
            'Aggressive - force solution',
            'Collaborative problem-solving',
            'Avoidance - stay out',
            'Competition - decide winner'
          ],
          correct: 1,
          explanation: 'Collaborative problem-solving = best approach for conflict resolution. Process: (1) Listen actively to BOTH (Priya: "I want quality." Rahul: "I want time."), (2) Separate people from problem (focus on research method, not "lazy" or "unrealistic"), (3) Identify interests (Priya = quality, Rahul = time), (4) Brainstorm win-win options (quick primary research), (5) Agree on solution (both say "This works"). Result: Conflict resolved, both satisfied, relationship preserved, better decision (quick primary research > pure primary or pure secondary). Other approaches fail: (1) Aggressive (forces solution, both feel unheard, resentment builds), (2) Avoidance (conflict escalates, damages relationship), (3) Competition (win-lose, loser disengages, team weakens). Use collaborative problem-solving. Listen, understand, separate issue from people, find win-win. Conflict becomes growth opportunity (better decisions, stronger relationships, learned skills). Collaborative > aggressive, avoidance, or competition.'
        }
      ]
    },
    challenge: {
      title: 'Conflict Management Challenge',
      description: 'Turn conflict from 5/10 grade to 8/10 grade',
      contexts: {
        academic: {
          title: 'Academic Conflict Resolution Mastery',
          description: 'You are working on B.Com group project (Marketing Strategy Report). Team: You, Priya, Rahul. Week 2: Conflict erupts. Priya: "We should focus on digital marketing (Instagram, Facebook)." Rahul: "Traditional marketing is more important (TV, newspapers)!" Debate escalates. Personal attacks. They stop talking. Goal: Manage conflict, find win-win, deliver excellent report (8/10+ grade).',
          instructions: [
            '1. Day 1 - Address Conflict Early (2 hours): Priya vs Rahul conflict emerges (Day 1: disagreement on marketing focus). Do NOT avoid. Address immediately. Action: Call team meeting (same day, 1 hour). Say: "I notice you both have different views on marketing focus. This is important discussion. Let us talk through it. We are a team. We will find solution that works for everyone." Set ground rules: (1) No personal attacks (focus on issue, not person), (2) Listen without interrupting (everyone gets 5 mins to speak), (3) Goal is win-win (both satisfied, not one wins). Priya and Rahul agree to discuss. Conflict is being addressed early (Day 1, not Day 5).',
            '2. Day 1 - Active Listening to Both Sides (1 hour): Listen to Priya (5 mins, no interruption). You: "Priya, tell me your perspective. Why do you think digital marketing is important?" Priya: "Our target audience is Gen Z (18-25 years). They are on Instagram, Facebook, not watching TV or reading newspapers. Digital marketing reaches them. It is also measurable (we can track clicks, engagement, ROI)." You paraphrase: "So you want to reach target audience effectively and measure results?" Priya: "Yes!" Listen to Rahul (5 mins, no interruption). You: "Rahul, tell me your perspective. Why do you think traditional marketing is important?" Rahul: "Our client is local business (restaurant). Their customers are families (30-50 years), not just Gen Z. Families watch TV, read newspapers. Traditional marketing reaches them. It is also credible (TV ads = established business)." You paraphrase: "So you want to reach ALL customers (not just Gen Z) and build credibility?" Rahul: "Yes!" Now you understand: Priya wants to reach Gen Z effectively. Rahul wants to reach ALL customers (including families). Both are valid. Interests identified.',
            '3. Day 1 - Separate People from Problem (30 mins): Conflict is escalating to personal. Priya: "You are old-fashioned!" Rahul: "You are naive!" Stop this. You say: "Let us focus on the ISSUE (marketing strategy), not on each other. Priya is not naive. Rahul is not old-fashioned. We are all trying to deliver excellent report. We just have different views on HOW to reach customers. Let us discuss the ISSUE." Reframe: (1) Problem = Marketing strategy (how to reach customers?), not Priya or Rahul. (2) Goal = Excellent report that recommends effective marketing for client. (3) Challenge = Find marketing strategy that reaches Gen Z (Priya concern) AND families (Rahul concern). Priya and Rahul stop attacking each other. They focus on problem: "How do we reach BOTH Gen Z and families?" Problem is reframed as challenge to solve together.',
            '4. Day 1 - Brainstorm Win-Win Options (1 hour): You facilitate brainstorming. Say: "Let us brainstorm options. How can we reach BOTH Gen Z and families?" No judgment, all ideas welcome. OPTIONS: (a) Integrated strategy: 60% digital (Instagram, Facebook for Gen Z) + 40% traditional (local newspaper ads for families). (b) Phased approach: Month 1-3 digital (build Gen Z base), Month 4-6 traditional (expand to families). (c) Hybrid campaigns: Digital ads that families can also see (Facebook targets 18-50 years, not just 18-25). (d) Measure and optimize: Start 50/50, track which works better, shift budget. You list all 4 options. Ask: "Which satisfies BOTH interests (reach Gen Z + reach families)?" Team discusses.',
            '5. Day 1 - Evaluate and Agree on Win-Win (1 hour): Evaluate options. Priya: "Option (a) - Integrated strategy works for me. 60% digital reaches Gen Z (my concern). 40% traditional reaches families (Rahul concern)." Rahul: "I agree. 40% traditional is enough to reach families. 60% digital makes sense for Gen Z." You: "Option (d) - Measure and optimize also works. Start 50/50, track results, shift budget to what works. Data-driven." Both: "Even better! Let us do (d). Measure and optimize." Win-win found. Both satisfied. You document: "Marketing strategy: 50% digital, 50% traditional. Track metrics (reach, engagement, ROI) monthly. Optimize based on data." Conflict resolved. Relationship preserved. Both feel heard, respected, satisfied.',
            '6. Week 3-4 - Execute Win-Win Solution (15 hours): Priya leads digital marketing analysis (Instagram, Facebook strategies, metrics). Rahul leads traditional marketing analysis (TV, newspaper strategies, reach). You coordinate (synthesize both into integrated strategy, create measurement framework). Week 4: Submit report. Professor feedback: 8/10. "Excellent integrated strategy! You considered multiple customer segments (Gen Z + families). Data-driven approach (measure and optimize) is sophisticated. Great teamwork!" Team celebrates. Priya: "I am glad we discussed this. Integrated strategy is BETTER than pure digital." Rahul: "I agree. I learned digital marketing is important for Gen Z." Conflict improved decision. Relationship strengthened.',
            '7. Week 4 - Reflect on Conflict Management (1 hour): Team meeting to reflect. You ask: "What did we learn from Week 2 conflict?" Priya: "I learned to listen to other perspectives. Rahul concern (reach families) was valid." Rahul: "I learned digital marketing is important. Priya concern (reach Gen Z) was valid." You: "We learned: (1) Address conflicts early (Day 1, not Day 5), (2) Listen actively (understand both interests), (3) Separate people from problem (focus on issue, not personalities), (4) Find win-win (integrated strategy > pure digital or pure traditional). Conflict made us BETTER." Team agrees. You document learnings. Apply to future conflicts. You became conflict management expert.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoiding conflict: "I will stay out of it." Result: Conflict escalates, damages team. Solution: Address early (Day 1, within 24 hours).',
            '• Aggressive confrontation: "Stop fighting! Compromise!" Result: Both feel unheard, resentment builds. Solution: Listen actively, facilitate (not dictate).',
            '• Taking sides: "Priya is right. Rahul is wrong." Result: Rahul disengages, team weakens. Solution: Be neutral, validate both, find win-win.',
            '• Compromise without understanding: "Do 50/50" without knowing WHY they want what they want. Result: Both dissatisfied. Solution: Identify interests first, then find win-win.',
            '• No follow-up: Resolving conflict but not checking if resolution holds. Result: Conflict resurfaces. Solution: Follow up (Week 3: "Is integrated strategy working? Any issues?").'
          ],
          successCriteria: [
            '✅ You address conflict early (Day 1, within 24 hours of noticing disagreement)',
            '✅ You listen actively to both sides (Priya: quality, Rahul: reach all customers)',
            '✅ You separate people from problem (focus on marketing strategy, not "naive" or "old-fashioned")',
            '✅ You facilitate win-win brainstorming (4 options generated, team evaluates)',
            '✅ You agree on win-win solution (integrated strategy: 60% digital, 40% traditional)',
            '✅ Team delivers excellent report (8/10 grade, professor praises teamwork)',
            '✅ Conflict strengthened relationship (Priya and Rahul learned to work through disagreement)',
            '✅ Team learned conflict resolution skills (can handle future conflicts independently)'
          ]
        },
        professional: {
          title: 'Professional Conflict Resolution Excellence',
          description: 'You are intern at marketing agency. Your team (5 members) has conflict. Senior designer (Meera): "We should redesign client website completely (modern, minimalist)." Junior developer (Karan): "That is too risky! Small improvements are safer (fix bugs, update content)." Debate escalates. Manager asks you: "Can you mediate this conflict?" Goal: Resolve conflict, find win-win, deliver excellent client work.',
          instructions: [
            '1. Day 1 - Accept Mediation Role (1 hour): Manager: "Meera and Karan are in conflict. Can you mediate?" You: "I am just an intern. I have no authority. Why would they listen to me?" Manager: "Mediation is not about authority. It is about facilitation. You listen, you facilitate, they decide. Try it." You accept. You schedule 1-hour mediation meeting with Meera and Karan. You prepare: (1) Read about conflict resolution (active listening, interests vs positions, win-win), (2) Set ground rules (no personal attacks, listen without interrupting, goal is win-win), (3) Plan structure (listen to Meera 10 mins, listen to Karan 10 mins, identify interests, brainstorm options, agree on solution). You are ready to mediate.',
            '2. Day 1 - Mediation Session: Listen to Both (1 hour): Meeting starts. You explain: "I am here to facilitate, not decide. You both will find solution. Ground rules: No personal attacks, listen without interrupting, goal is win-win. Agreed?" Both agree. Listen to Meera (10 mins): "Meera, tell me your perspective. Why complete redesign?" Meera: "Current website is outdated (2018 design). Competitors have modern websites. We are losing clients. Complete redesign (modern, minimalist, fast) will attract clients, improve conversions." You: "So you want to attract clients and improve conversions?" Meera: "Yes!" Listen to Karan (10 mins): "Karan, tell me your perspective. Why small improvements?" Karan: "Complete redesign takes 3 months, costs ₹5L, high risk (what if clients do not like it?). Small improvements take 1 month, cost ₹1L, low risk (fix bugs, update content, improve speed). Safer approach." You: "So you want to minimize risk and cost?" Karan: "Yes!" Interests identified: Meera = attract clients, improve conversions. Karan = minimize risk, cost.',
            '3. Day 1 - Separate People from Problem (15 mins): Conflict is getting personal. Meera: "You are too conservative!" Karan: "You are too reckless!" You intervene: "Let us focus on the ISSUE (website strategy), not on each other. Meera is not reckless. Karan is not conservative. You both want what is best for client. You just have different views on HOW. Let us discuss the ISSUE." Reframe: (1) Problem = Website strategy (how to improve client website?), (2) Goal = Attract clients, improve conversions (Meera goal), minimize risk and cost (Karan goal), (3) Challenge = Find website strategy that improves conversions AND minimizes risk. Meera and Karan stop attacking each other. They focus on problem.',
            '4. Day 1 - Brainstorm Win-Win Options (30 mins): You facilitate: "How can we improve conversions AND minimize risk? Let us brainstorm." OPTIONS: (a) Phased redesign: Month 1 (redesign homepage only, test with users), Month 2 (if successful, redesign 3 more pages), Month 3 (complete redesign). Lower risk (test before full commitment). (b) A/B test: Keep current website for 50% visitors, show new design to 50%, measure which converts better. Data-driven decision. (c) Hybrid: Redesign visual design (modern, minimalist) but keep structure (low risk, moderate impact). (d) Quick wins first: Month 1 (small improvements: fix bugs, improve speed), Month 2-3 (redesign if quick wins work). You list all 4. Ask: "Which satisfies BOTH interests?"',
            '5. Day 1 - Evaluate and Agree (30 mins): Team evaluates. Meera: "Option (a) - Phased redesign works. We redesign (my goal), but test first (Karan concern about risk). If homepage redesign improves conversions, we continue. If not, we stop. Lower risk." Karan: "I agree. Phased approach reduces risk. We test before committing ₹5L. If it works, great. If not, we only spent ₹1L on homepage." You: "Option (b) - A/B test also works. Data-driven." Both: "Let us combine (a) and (b). Phased redesign + A/B test each phase. Test homepage redesign with 50% visitors. If conversions improve, redesign next pages." Win-win found. Both satisfied. You document: "Website strategy: Phased redesign (homepage first) + A/B test each phase. Measure conversions. Continue if successful." Manager approves. Conflict resolved.',
            '6. Week 2-4 - Execute Win-Win Solution (40 hours): Meera redesigns homepage (modern, minimalist). Karan implements A/B test (50% see new design, 50% see old). Week 2: Measure. New design: 8% conversion (vs 5% old design = 60% improvement!). Karan: "Data shows new design works. Let us continue." Meera: "I am glad we tested first. Now we have data." Week 3-4: Redesign 3 more pages, A/B test each. All improve conversions. Client is thrilled: "Website conversions improved 60%! Excellent work!" Manager: "Outstanding conflict resolution. You turned disagreement into better solution. Meera and Karan are now collaborating excellently." Conflict became growth.',
            '7. Week 4 - Reflect and Share Learnings (2 hours): Manager asks you to present: "How You Resolved Meera-Karan Conflict" at company all-hands. You present: (1) Addressed early (Day 1, not Day 5), (2) Listened actively (understood both interests: conversions + risk), (3) Separated people from problem (focused on website strategy, not "reckless" or "conservative"), (4) Found win-win (phased redesign + A/B test = both satisfied), (5) Result: 60% conversion improvement, stronger team relationship. Company learns from your example. 3 other teams ask you to mediate their conflicts. You became conflict resolution expert. Manager: "Impressive leadership for an intern. We want you full-time." Job offer received.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Declining mediation: "I am just an intern, I cannot mediate." Result: Miss leadership opportunity. Solution: Accept (mediation is facilitation, not authority).',
            '• Not preparing: Going into mediation without plan. Result: Chaotic, ineffective. Solution: Prepare (read about conflict resolution, set ground rules, plan structure).',
            '• Taking sides: "Meera is right, redesign is better." Result: Karan disengages. Solution: Be neutral, validate both, facilitate win-win.',
            '• Forcing compromise: "Do 50% redesign, 50% small improvements." Result: Neither satisfied. Solution: Find win-win (phased redesign + A/B test = both satisfied).',
            '• No follow-up: Resolving conflict but not checking results. Result: Do not know if solution works. Solution: Follow up (Week 2: measure A/B test results, adjust if needed).'
          ],
          successCriteria: [
            '✅ You accept mediation role (despite being intern with no authority)',
            '✅ You address conflict early (Day 1, schedule mediation same day)',
            '✅ You listen actively to both (Meera: conversions, Karan: risk/cost)',
            '✅ You separate people from problem (focus on website strategy, not personalities)',
            '✅ You facilitate win-win (phased redesign + A/B test = both satisfied)',
            '✅ Solution delivers excellent results (60% conversion improvement, client thrilled)',
            '✅ You present learnings at company all-hands (3 other teams ask for your help)',
            '✅ Manager offers full-time job (recognizes your conflict resolution and leadership skills)'
          ]
        },
        personal: {
          title: 'Personal Conflict Resolution Wisdom',
          description: 'You and your roommate (both B.Com students) have conflict. You: "We should split rent equally (₹5000 each)." Roommate: "That is unfair! You have the bigger room!" You: "But we share kitchen, bathroom equally!" Conflict escalates. Tension at home. You avoid each other. Goal: Resolve conflict, preserve friendship, find fair solution.',
          instructions: [
            '1. Day 1 - Address Conflict Early (1 hour): Rent conflict emerges (Day 1: disagreement on split). Do NOT avoid (hoping it resolves itself). Address same day. You say: "Hey, I notice we have different views on rent split. This is important. Let us talk through it. We are friends. We will find solution that is fair to both of us. Can we discuss now?" Roommate agrees. You sit down (coffee shop, neutral location, 1 hour). Ground rules: (1) No yelling (speak calmly), (2) Listen without interrupting (each gets 10 mins), (3) Goal is fair solution (both satisfied). Conflict is being addressed early.',
            '2. Day 1 - Active Listening (30 mins): Listen to roommate (10 mins). You: "Tell me your perspective. Why do you think equal split is unfair?" Roommate: "You have bigger room (150 sq ft). I have smaller room (100 sq ft). You get 50% more space but pay same rent. That is unfair. I feel like I am subsidizing your bigger room." You paraphrase: "So you feel rent should be proportional to room size?" Roommate: "Yes!" Listen to yourself (reflect on your perspective, 10 mins): "I think equal split is fair because we share kitchen, bathroom, living room equally. Room size is only part of apartment. Common areas matter too." Your interest: Fair split considering shared spaces. Roommate interest: Fair split considering room size. Both want FAIRNESS, but define it differently. Interests identified.',
            '3. Day 1 - Separate Issue from Friendship (10 mins): Conflict is getting personal. Roommate: "You are selfish!" You: "You are unreasonable!" Stop. You say: "Let us focus on the ISSUE (rent split), not on each other. I am not selfish. You are not unreasonable. We are both trying to be fair. We just have different views on what FAIR means. Let us discuss the ISSUE." Reframe: (1) Problem = Rent split (how to split fairly?), not you or roommate as people. (2) Goal = Fair solution (both feel rent is fair). (3) Challenge = Find rent split that considers room size (roommate concern) AND shared spaces (your concern). You both focus on problem, not personalities. Friendship is preserved.',
            '4. Day 1 - Brainstorm Win-Win Options (20 mins): You brainstorm together. "How can we split rent fairly considering BOTH room size and shared spaces?" OPTIONS: (a) Proportional to room size: You pay 60% (₹6000), roommate pays 40% (₹4000). (b) Base rent + room premium: Base ₹4000 each (for shared spaces), you pay ₹2000 extra (for bigger room). Total: You ₹6000, roommate ₹4000. (c) Equal split but you compensate: You pay ₹5000 rent + ₹500 to roommate monthly (compensate for bigger room). Total: You ₹5500, roommate ₹4500. (d) Negotiate with landlord: Ask for ₹1000 rent reduction (₹10K → ₹9K). You pay ₹5000, roommate ₹4000. You list all 4. Ask: "Which feels fair to both of us?"',
            '5. Day 1 - Evaluate and Agree (20 mins): You evaluate. Roommate: "Option (b) makes sense. Base ₹4000 each (we share kitchen, bathroom, living room equally - your concern). You pay ₹2000 extra (you have bigger room - my concern). Fair." You: "I agree. ₹2000 extra for 50 sq ft extra space = ₹40/sq ft. Fair. Total: I pay ₹6000, you pay ₹4000." Both satisfied. Win-win found. You document: "Rent split: Base ₹4000 each (shared spaces), you pay ₹2000 extra (bigger room). Total: ₹6000 + ₹4000 = ₹10,000." Sign agreement. Conflict resolved. Friendship preserved. Both feel solution is fair.',
            '6. Month 2-3 - Live with Win-Win Solution (ongoing): You pay ₹6000, roommate pays ₹4000. Both are happy. No resentment. Friendship is strong. You reflect: "We could have avoided each other, let resentment build, damaged friendship. Instead, we addressed conflict early, listened, found win-win. Friendship is stronger now." Month 3: Roommate thanks you: "I appreciate you listening to my concern. ₹4000 feels fair. I am glad we talked." You: "I appreciate you too. ₹6000 feels fair for bigger room. I am glad we resolved this." Conflict resolution preserved friendship.',
            '7. Month 3 - Apply Learning to New Conflict (2 hours): New conflict: Cleaning duties. Roommate: "You do not clean enough!" You: "I clean every week!" Tension builds. But this time, you apply conflict resolution skills immediately. Day 1: You say: "Let us discuss cleaning. What is your perspective?" Listen actively. Roommate: "I clean 3 times/week (kitchen, bathroom). You clean 1 time/week (bedroom only). Feels unfair." You: "I see. Let us find fair solution. What if we create cleaning schedule? Monday: You clean kitchen. Wednesday: I clean bathroom. Friday: You clean living room. Sunday: I clean kitchen. We alternate." Roommate: "Fair!" Conflict resolved in 1 conversation (vs 1 week if avoided). You became conflict resolution expert. You apply skills to all conflicts (team, family, friends). Relationships are strong.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoiding conversation: Not discussing rent split, letting resentment build. Result: Damaged friendship. Solution: Address early (Day 1, have conversation).',
            '• Demanding your way: "Rent should be equal. That is final." Result: Roommate feels unheard, resentment builds. Solution: Listen to their perspective, find fair solution together.',
            '• Not understanding their interest: Focusing on positions ("equal split" vs "proportional split") without understanding WHY. Result: Cannot find win-win. Solution: Ask "WHY do you think proportional is fair?" (Understand interest: room size matters).',
            '• Compromise without satisfaction: "Let us split ₹5250 and ₹4750" (mathematical compromise). Result: Neither feels solution is truly fair. Solution: Find win-win that BOTH feel is fair (base + premium = clear logic).',
            '• Not documenting: Verbal agreement without documentation. Result: Forget details, conflict resurfaces. Solution: Write down agreement (rent split, cleaning schedule), both sign.'
          ],
          successCriteria: [
            '✅ You address conflict early (Day 1, initiate conversation)',
            '✅ You listen actively (understand roommate perspective: room size matters)',
            '✅ You separate issue from friendship (focus on rent split, not "selfish" or "unreasonable")',
            '✅ You brainstorm win-win options (4 options generated)',
            '✅ You agree on fair solution (base ₹4000 + ₹2000 premium = both feel it is fair)',
            '✅ You document agreement (written, signed, clear)',
            '✅ Friendship is preserved and strengthened (no resentment, mutual respect)',
            '✅ You apply skills to future conflicts (cleaning schedule resolved in 1 conversation)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '⚡ Address Conflicts Early: You address conflicts within 24 hours (Day 1, not Day 5). When Priya-Rahul conflict emerges, you call meeting same day: "Let us discuss this." Result: Conflict resolved before escalation (disagreement, not personal attacks). Relationship preserved. Productivity maintained. You understand: Early intervention prevents escalation. Conflicts escalate if ignored (Day 1: disagreement → Day 3: personal attacks → Day 5: silent treatment). You stop escalation by addressing early. Teams you work with have 80% fewer escalated conflicts because you intervene early.',
        '👂 Active Listening Mastery: You listen deeply to BOTH sides. You ask: "Tell me your perspective. Why is this important to you?" You paraphrase: "So you want X?" You identify interests (WHY they want what they want), not just positions (WHAT they say they want). Example: Priya position = "primary research." Priya interest = "quality data." Understanding interests enables win-win solutions. You do not interrupt, judge, or rush. You give each person 5-10 mins to speak fully. Result: Both feel heard, respected, understood. They are willing to find solution because you listened.',
        '🎯 Separate People from Problem: When conflict becomes personal ("You are lazy!" "You are unrealistic!"), you reframe. You say: "Let us focus on the ISSUE, not on each other. We are all trying to deliver excellent work. We just have different views on HOW. Let us discuss the ISSUE." You shift focus from PEOPLE (character attacks) to PROBLEM (research method, marketing strategy, website design). Result: Relationship is preserved while solving issue. Team attacks the PROBLEM together, not each other. You understand: Attack problem, not person. Preserve relationships while solving issues.',
        '🤝 Find Win-Win Solutions: You do NOT compromise (50/50 = both lose). You find win-win (both get what they need). Process: (1) Identify interests (Priya = quality, Rahul = time), (2) Brainstorm creative options (quick primary research, integrated strategy, phased redesign), (3) Evaluate together (which satisfies BOTH?), (4) Agree (both say "This works for me"). Result: Both satisfied, relationship preserved, BETTER solution (win-win solutions are often better than either original proposal). You understand: Win-win > compromise. Both gain > both lose.',
        '🔄 Turn Conflict into Growth: You view conflict as OPPORTUNITY, not threat. Priya-Rahul conflict → You facilitate → Win-win solution (quick primary research) → Result: (1) Better decision (combines quality + time), (2) Stronger relationship (worked through disagreement), (3) Team skill (learned conflict resolution). Conflict made team BETTER. You understand: Managed well, conflict is productive (improves decisions, strengthens relationships, builds skills). You do not avoid conflict. You manage it constructively. Teams you work with grow through conflict, not break from it.'
      ],
      improvements: [
        '⚡ Address Even Earlier: You address conflicts within 24 hours (Day 1). Good. But you can go faster. Improve: Address within 1 hour of noticing conflict. Why? (1) Prevents even minor escalation (1 hour: disagreement, 24 hours: frustration, 3 days: personal attacks), (2) Shows team: "We address issues immediately, not let them fester," (3) Builds culture of open communication (team feels safe raising concerns immediately). Practice: When you notice tension (body language, tone, words), address immediately: "I notice tension. Can we discuss this now?" Result: Conflicts resolved in 1 hour, not 1 day. Faster resolution = healthier team.',
        '🎓 Learn Advanced Mediation: You know basic mediation (listen, separate people from problem, find win-win). Good. But learn advanced: (1) Caucusing (meet with each party separately before joint session - understand their perspective deeply, build trust), (2) Reframing (transform negative statements into constructive: "You never listen" → "You want to be heard more"), (3) Reality testing ("If we do not resolve this, what happens?" - motivates resolution), (4) BATNA (Best Alternative To Negotiated Agreement - understand each party walkaway point). Advanced mediation handles complex conflicts (3+ parties, deep-rooted issues, high emotions). Study professional mediation techniques.',
        '📊 Track Conflict Resolution Success Rate: You resolve conflicts. But you do not track: How many conflicts resolved successfully? Improve: Track monthly: (1) Conflicts identified (how many?), (2) Conflicts addressed (% addressed within 24 hours?), (3) Win-win found (% where both satisfied?), (4) Relationship preserved (% where relationship strengthened?), (5) Escalations prevented (% that did not escalate to personal attacks?). Example: Month 1: 5 conflicts, 4 addressed within 24 hours (80%), 3 win-win found (60%), 4 relationships preserved (80%). Month 6: 8 conflicts, 8 addressed within 24 hours (100%), 7 win-win found (87%), 8 relationships preserved (100%). Track improvement. Identify patterns: "Conflicts about money are harder to resolve. I need to improve financial conflict mediation."',
        '🗣️ Practice Difficult Conversations: You resolve conflicts between others (Priya vs Rahul). Good. But practice having difficult conversations YOURSELF (when YOU are in conflict). Improve: Next time you have conflict (with professor, manager, friend, family), apply same skills: (1) Address early (within 24 hours), (2) Listen actively (understand their perspective), (3) Share your perspective (explain your interests), (4) Separate issue from relationship (focus on problem, not person), (5) Find win-win (brainstorm options, agree on solution). Having difficult conversations is harder than mediating (you are emotionally involved). Practice: Have 5 difficult conversations in 3 months. Build skill.',
        '👥 Teach Conflict Resolution: You resolve conflicts. But you do not teach others. Improve: Create 1-hour workshop: "Turn Conflict into Growth: Conflict Resolution for B.Com Students." Content: (1) Address early (Day 1, not Day 5), (2) Active listening (understand interests), (3) Separate people from problem (focus on issue), (4) Find win-win (brainstorm, evaluate, agree), (5) Case study (Priya-Rahul conflict resolution). Deliver to 3 groups (college teams, clubs, startups). When you teach, you master. You also help 50+ students learn conflict resolution. Your impact multiplies.'
      ],
      nextSteps: [
        '📚 Read Conflict Resolution Books: (1) "Getting to Yes" by Roger Fisher & William Ury (Harvard Negotiation Project - interests-based negotiation, win-win solutions), (2) "Crucial Conversations" by Kerry Patterson (how to have difficult conversations when stakes are high), (3) "Difficult Conversations" by Douglas Stone (Harvard Negotiation Project - handle emotionally charged conflicts), (4) "Nonviolent Communication" by Marshall Rosenberg (communicate without blame, focus on needs). Apply: Extract 3 key techniques per book. Practice: Apply 1 technique to next conflict. Observe: Does it help? Document learnings.',
        '🎯 Take Mediation Training: Enroll in mediation certification course (online, 20 hours, ₹5K). Learn: (1) Mediation process (pre-mediation, opening, storytelling, problem-solving, agreement), (2) Advanced techniques (caucusing, reframing, reality testing, BATNA), (3) Handling difficult situations (high emotions, power imbalances, multiple parties). Practice: Mediate 10 conflicts as part of training. Get certified. Certification proves: You are trained mediator. Companies value this skill. Add to resume. Opens career opportunities (HR, consulting, management).',
        '🧠 Practice 10 Mediations: Volunteer to mediate 10 conflicts over 6 months (group projects, club disagreements, roommate disputes, family conflicts, workplace tensions). Track: (1) Conflict type (task, relationship, values), (2) Parties involved (2-person, 3-person, group), (3) Outcome (win-win found? Relationship preserved?), (4) Learnings (what worked? What did not?). After 10 mediations, you will see patterns: "Task conflicts are easier (focus on interests, find win-win). Relationship conflicts are harder (deep emotions, need more time). Values conflicts are hardest (different core beliefs, need creative solutions)." Pattern recognition = expertise.',
        '📊 Create Conflict Resolution Framework: Document your conflict resolution process. Create framework: (1) ASSESS: Notice conflict early (tension, disagreement, argument). (2) ADDRESS: Within 24 hours, call meeting. Set ground rules. (3) LISTEN: Active listening to all parties (5-10 mins each, paraphrase, identify interests). (4) REFRAME: Separate people from problem (focus on issue, shared goal). (5) BRAINSTORM: Generate win-win options (3-5 options, no judgment). (6) EVALUATE: Which satisfies all interests? (7) AGREE: Document solution, get commitment. (8) FOLLOW-UP: Check if solution works, adjust if needed. Share framework with 10 teams. Help them resolve conflicts. Framework becomes standard in your college/company.',
        '👥 Become Conflict Resolution Consultant: After resolving 20+ conflicts, offer conflict resolution consulting. Service: "I help teams resolve conflicts constructively. ₹2000/session (2 hours). Process: Listen to all parties, identify interests, facilitate win-win, document agreement." Target: College teams, student startups, small businesses. Month 1: 5 clients, ₹10K revenue. Month 3: 15 clients, ₹30K revenue. You help 15 teams resolve conflicts. You earn ₹30K. You build reputation as conflict resolution expert. Career opportunities open (HR roles, consulting firms, mediation services). Conflict resolution is valuable skill. Monetize it.'
      ]
    },
    badge: { name: 'Peacemaker', emoji: '🤝', description: 'Expert in conflict resolution' },
    shareMessage: 'Just mastered conflict management! 🤝 #ConflictResolution #Teamwork'
  },
  {
    id: 'remote-collaboration',
    title: 'Remote Collaboration',
    emoji: '💻',
    context: 'professional' as const,
    discover: {
      scenario: "Remote Marketing internship. 5 members, 3 cities. Week 1: 'This'll be great!' Week 2: Chaos. Priya replies 2 days late, meeting time confusion, never met anyone (isolated), 7 tools (which for what?). Deadline missed. Manager: 'Remote needs INTENTIONAL collaboration: over-communicate, right tools, virtual rapport.'",
      problemExplanation: [
        "Vague messages: 'Send data?' 2 days later: 'What data?' In office = 2min clarify. Remote = 2 days back-and-forth",
        "No connection: Only Slack text. Never met faces. Feel isolated. Low trust, transactional, don't care about team",
        "Tool chaos: 7 tools (Slack, Zoom, Notion, Asana, Drive, Email, WhatsApp). Update in Slack, Priya checks Email. Info lost",
        "Under-communicate: Office = see Priya stuck, tap shoulder. Remote = assume she's working. She's stuck 2 days, you don't know"
      ],
      solutionApproach: [
        "Async mastery: Not 'Send data?' Say: 'Send Instagram data (Jan-Mar 2024), Excel, metrics: reach/engagement/conversions. Need Friday for client report.' Full context = no back-and-forth",
        "Right tools: Slack (chat 3×/day), Zoom (meetings + calendar invite), Notion (docs + tasks, not 2 tools), Drive (files). 5 tools max, clear purpose each",
        "Virtual rapport: Video ON (see faces), 15min coffee chats (no agenda, life talk), Friday show-and-tell. Know people = trust + engagement",
        "Over-communicate: Daily updates 'Did X, will do Y, blocked on Z.' Document decisions. Share progress. Ask questions immediately, don't wait 2 days"
      ]
    },
    video: {
      title: 'Remote Work Mastery: From Chaos to Smooth Collaboration',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR REMOTE TEAM IS STRUGGLING

"Week 1: Remote internship. Excited! 'I can work from home!' Week 2: Chaos. Communication gaps (Priya responds 2 days later). Time zone confusion (Ankit misses meeting). Isolation (never met team face-to-face). Tool overload (7 tools - which for what?). Week 3: Deadline missed. Manager: 'What happened?' You: 'Remote work is hard!' Manager: 'Remote requires INTENTIONAL collaboration. In office: tap shoulder, quick chat, read body language. Remote: must be intentional. Over-communicate, use right tools, build virtual rapport, set clear expectations.' By the end of this video, you will master remote collaboration. Let us fix this."

[0:45-2:15] ASYNC COMMUNICATION: DETAILED MESSAGES WITH FULL CONTEXT

"You send Slack message: 'Can you send me the data?' Priya responds 2 days later: 'What data?' You: 'The data I asked for!' Priya: 'Which data? For what? In what format?'

PROBLEM: Vague message. No context.

In office: Quick back-and-forth (2 mins, clarified).
You: 'Can you send data?'
Priya: 'Which data?'
You: 'Marketing campaign data.'
Priya: 'Instagram or Facebook?'
You: 'Instagram.'
Done.

Remote: This takes 2 DAYS (message → 1 day wait → response → 1 day wait → clarification → 1 day wait).

SOLUTION: Detailed async messages with FULL CONTEXT.

GOOD ASYNC MESSAGE:
'Hi Priya! Can you send marketing campaign data for Instagram ads (Jan-Mar 2024) in Excel format? Need metrics: reach, engagement, conversions, cost. Need by Friday 5 PM for client report. Let me know if you have questions or need clarification. Thanks!'

INCLUDES:
- What: Marketing campaign data
- Which: Instagram ads
- When: Jan-Mar 2024
- Format: Excel
- Metrics: Reach, engagement, conversions, cost
- Deadline: Friday 5 PM
- Why: Client report
- Open for questions: Let me know if you need clarification

Priya can respond immediately (all info provided). No back-and-forth needed. Async communication is superpower: Work across time zones, think before responding, document for reference."

[2:15-3:45] USE RIGHT TOOLS (Not All Tools)

"Your team uses 7 tools: Slack, Zoom, Notion, Asana, Google Drive, Email, WhatsApp. You are confused: Which for what?

PROBLEM: Tool overload. Important updates lost. Duplicated work. Frustration.

SOLUTION: Right tool for each purpose. Agree as team:

SLACK: Quick chat, questions, daily updates (check 3×/day: morning, lunch, evening).
ZOOM: Meetings, face-to-face discussions (schedule in advance, send calendar invite, record for those who miss).
NOTION: Docs, knowledge base, project plans, tasks (single source of truth - all info here).
GOOGLE DRIVE: File storage, sharing (organize in folders, set permissions).
EMAIL: External communication (clients, vendors), formal updates.

REDUCE 7 tools to 5. Remove: Asana (use Notion for tasks), WhatsApp (use Slack for team chat).

AGREE ON:
- Which tool for what purpose (write in team doc)
- How often to check each tool (Slack 3×/day, Email 2×/day, Notion 1×/day)
- Where to find information (all project docs in Notion #project-name)

Right tools + clear purpose = efficient collaboration. No more: 'Where is that file?' 'Which tool did you use?' 'I did not see your message.'"

[3:45-5:15] BUILD VIRTUAL RAPPORT (Intentional Connection)

"Week 3: You have never met team face-to-face. All communication is Slack text. You feel isolated. Team feels like strangers.

PROBLEM: No personal connection. Low trust. Transactional relationships.

OFFICE: Connection happens naturally (coffee chats, lunch together, casual conversations).
REMOTE: Connection requires INTENTION.

BUILD VIRTUAL RAPPORT:

1. Video-on meetings: Turn camera ON (see faces, read expressions, build connection). Not: Audio-only (feels like conference call with strangers).

2. Virtual coffee chats: Schedule 15-min casual 1-on-1s (no agenda, just talk). 'How was your weekend?' 'What hobbies?' 'What are you watching?' Get to know them as PEOPLE, not just workers.

3. Team rituals: 
   - Friday show-and-tell: Everyone shares something they are proud of (work or personal).
   - Monday motivation: Share goals for week.
   - Birthday celebrations: Virtual cake, team sings, 5 mins fun.

4. Personal sharing: Start meetings with 5 mins personal. 'Any updates? How is everyone?' Before jumping into work.

5. Informal channels: Create Slack #random for non-work chat (memes, jokes, life updates, pet photos).

RESULT: You know team as people. Trust builds. Engagement increases. Isolation decreases. Team feels connected despite distance."

[5:15-6:30] OVER-COMMUNICATE (Prevent Assumptions)

"In office: Visual awareness. You SEE Priya working, Rahul in meeting, Ankit at desk. You KNOW what everyone is doing.

Remote: You see NOBODY. You ASSUME everyone is working. Reality: Priya is stuck. Rahul is blocked. Ankit is confused. You do not know.

PROBLEM: Under-communication. Assumptions. Delays.

SOLUTION: OVER-COMMUNICATE intentionally.

DAILY UPDATES (End of day, 5 mins, post in Slack):
'Today I completed: Instagram campaign analysis.
Tomorrow I will: Create report for client.
Blocked on: Need data from Priya (requested Monday, waiting).'

BENEFITS:
- Visibility: Team knows what you are doing.
- Blockers identified: Priya sees 'waiting on data from me' → sends data immediately.
- Alignment: Everyone knows team progress.

DOCUMENT DECISIONS:
Meeting decision: 'We will focus on Instagram ads (not Facebook).'
Document in Notion: 'Decision: Focus on Instagram. Rationale: Higher engagement. Date: Jan 15. Decided by: Team consensus.'
People who missed meeting can read. Future reference.

SHARE PROGRESS:
Working on task? Update Asana: 'In Progress' (people know you are working), 'Blocked' (people know you need help), 'Done' (people know it is complete).

Over-communication = transparency = trust = alignment."

[6:30-7:30] SET CLEAR EXPECTATIONS (Prevent Frustration)

"You expect Priya to respond in 2 hours. Priya responds in 2 days. You are frustrated. Priya is confused: 'I did not know it was urgent.'

PROBLEM: No clear expectations.

SOLUTION: Set expectations as team. Agree on:

1. Response time:
   - Urgent (marked 'URGENT' in subject): 2 hours
   - Normal: 24 hours
   - Low priority: 48 hours

2. Availability:
   - Core hours: 11 AM-3 PM IST (everyone available for meetings, quick questions)
   - Flexible hours: Outside core hours (work when you want, as long as you deliver)

3. Meeting attendance:
   - Mandatory (unless informed 24 hours ahead)
   - Camera on (build connection)
   - Be on time (respect others time)

4. Work hours:
   - Flexible (40 hours/week, but you choose when)
   - Deliverable-focused (deliver on commitments, hours are secondary)

5. Communication:
   - Slack for quick chat
   - Zoom for meetings
   - Notion for docs
   - Email for external

Write expectations in team doc. Review monthly. Clear expectations = no frustration."

[7:30-8:00] YOUR CHALLENGE (Master Remote Collaboration)

"Here is your action step: If you are on remote team (internship, project, startup):

1. Write detailed async messages (full context, specific request, deadline)
2. Agree on tool purpose (which tool for what? Document it)
3. Schedule virtual coffee chat (15 mins, 1-on-1, get to know teammate)
4. Share daily update (what I did, what I will do, blockers)
5. Set team expectations (response time, availability, meeting norms)

RESULT: Remote collaboration improves. Communication is clear. Connection is strong. Productivity is high.

Remote work is future. Master it now."

[End Screen: "Next Video: Cross-functional Teams - Bridge Different Expertise"]`,
      content: [
        'Async Communication: Detailed messages with full context (what, which, when, format, deadline, why)',
        'Right Tools for Purpose: Slack (chat), Zoom (meetings), Notion (docs + tasks), Drive (files), Email (external)',
        'Build Virtual Rapport: Video-on meetings, virtual coffee chats, team rituals, personal sharing, informal channels',
        'Over-Communicate: Daily updates, document decisions, share progress, proactive questions, visibility',
        'Clear Expectations: Response time, availability (core hours), meeting norms, work hours, communication platforms',
        'Respect Boundaries: Time zones, work hours, weekends, personal time (prevent burnout)',
        'B.Com Applications: Remote internships, distributed team projects, online collaboration, freelance work'
      ]
    },
    quiz: {
      title: 'Remote Collaboration Quiz',
      questions: [
        {
          id: 16,
          question: 'Slack: "Send data?" Priya 2 days: "What data?" 4-day back-and-forth. What is async communication?',
          options: [
            'Fast replies within minutes',
            'Detailed messages with full context',
            'Video calls only',
            'Phone calls only'
          ],
          correct: 1,
          explanation: 'Async communication = messages that don\'t require immediate response (people respond when available, not instantly). Your message: "Can you send data?" is vague (no context). Priya needs clarification. Back-and-forth takes 4 days. Do async well: Detailed messages with FULL CONTEXT. Good message: "Hi Priya! Can you send marketing campaign data for Instagram ads (Jan-Mar 2024) in Excel format? Need metrics: reach, engagement, conversions, cost. Need by Friday 5 PM for client report. Let me know if questions. Thanks!" Includes: What (marketing data), which (Instagram), when (Jan-Mar 2024), format (Excel), metrics (reach, engagement, conversions, cost), deadline (Friday 5 PM), why (client report), open for questions. Priya can respond immediately (all info provided, no clarification needed). Result: 1-day turnaround (not 4 days). Master async: Detailed messages, full context, clear deadlines. Async = superpower: Work across time zones, think before responding, document for reference.'
        },
        {
          id: 17,
          question: 'Office: SEE team. Remote: See NOBODY. Priya stuck, Rahul blocked. You don\'t know. What do?',
          options: [
            'Under-communicate - they\'ll ask',
            'Over-communicate INTENTIONALLY',
            'Avoid communication - focus work',
            'Email only - weekly updates'
          ],
          correct: 1,
          explanation: 'Remote teams should OVER-COMMUNICATE intentionally (office communication happens naturally through visual awareness, remote requires intention). In office: You SEE Priya working, Rahul in meeting, Ankit at desk. You KNOW what everyone doing. Remote: You see NOBODY. You ASSUME everyone working. Reality: Priya stuck (waiting for data from you, didn\'t tell you), Rahul blocked (needs approval, didn\'t ask), Ankit confused (unclear on task, didn\'t clarify). Don\'t know because remote teams under-communicate. Solution: Over-communicate. (1) Daily updates (end of day, 5 mins, Slack): "Today I completed X, tomorrow I\'ll do Y, blocked on Z (need data from Priya)." (2) Document decisions (meeting decision? Document in Notion). (3) Share progress (update task status: In Progress, Blocked, Done). (4) Proactive questions (unclear? Ask immediately, don\'t wait). (5) Visibility (share what you\'re working on). Result: Team knows what you\'re doing, blockers identified early, everyone aligned. Over-communicate. Default is under-communication. Intentionally share more. Transparency = trust = alignment.'
        },
        {
          id: 18,
          question: 'Never met team. All Slack text. Feel isolated. Team = strangers. Build virtual rapport?',
          options: [
            'Avoid personal - stay professional',
            'Video-on + virtual coffee chats',
            'Text only - video unnecessary',
            'Minimal interaction - work only'
          ],
          correct: 1,
          explanation: 'Build virtual rapport through INTENTIONAL connection (office connection happens naturally, remote requires intention). Problem: All communication is Slack text. Never see faces. Don\'t know them as people. Result: Isolation, low trust, transactional relationships. Solution: (1) Video-on meetings (turn camera ON, see faces, read expressions, build connection - not audio-only), (2) Virtual coffee chats (schedule 15-min casual 1-on-1s, no agenda, just talk: "How was weekend? What hobbies? What are you watching?" - know them as PEOPLE), (3) Team rituals (Friday show-and-tell: share something you\'re proud of, Monday motivation: share goals, birthday celebrations: virtual cake), (4) Personal sharing (start meetings with 5 mins personal: "Any updates? How is everyone?"), (5) Informal channels (Slack #random for non-work chat: memes, jokes, life updates). Result: Know team as people, trust builds, engagement increases, isolation decreases, team feels connected despite distance. Build virtual rapport intentionally. Video-on, casual chats, team rituals, personal sharing. Connection = trust = engagement = retention.'
        },
        {
          id: 19,
          question: 'Meeting "Monday 10 AM." Only 3/5 join. Priya, Rahul miss. What went wrong?',
          options: [
            'Ignore time zones - figure out',
            'Specify time zone + calendar invite',
            'Expect immediate responses always',
            'Work 24/7 for all zones'
          ],
          correct: 1,
          explanation: 'Work across time zones by respecting boundaries and scheduling thoughtfully. Problem: Said "Monday 10 AM" (ambiguous - whose time?). No calendar invite (manual time conversion errors). No confirmation (people forget). Result: 2 people miss meeting. Solution: (1) Specify time zone: "Monday 10 AM IST" (clear), (2) Send calendar invite (Google Calendar auto-converts to each person local time, sends reminders), (3) Confirm attendance (ask: "Can everyone make it?" - people reply "Yes" or suggest alternative), (4) Record meeting (for those who miss, they can watch later), (5) Rotate meeting times (if 10 AM IST inconvenient for someone in different time zone, alternate with 3 PM IST next week - fair to all). Also respect: Work hours (don\'t message 11 PM expecting response), weekends (don\'t assign urgent tasks Saturday), personal time (don\'t expect 24/7 availability). Respect time zones and boundaries. Clear scheduling, calendar invites, confirmations, recordings, rotation. Respect prevents: Missed meetings, burnout, resentment, turnover.'
        },
        {
          id: 20,
          question: '7 tools: Slack, Zoom, Notion, Asana, Drive, Email, WhatsApp. Confused. Updates lost. Solution?',
          options: [
            'Use all tools - more better',
            'RIGHT TOOL for each PURPOSE',
            'Avoid tools - email only',
            'One tool for everything'
          ],
          correct: 1,
          explanation: 'Choose right tool for each purpose (not all tools, not one tool). Problem: 7 tools (Slack, Zoom, Notion, Asana, Drive, Email, WhatsApp). Confusion: Which for what? Result: Important updates lost (sent in wrong tool), duplicated work (tasks in Asana + Notion), frustration (learning 7 tools, switching between them). Solution: Agree as team on tool purpose. SLACK: Quick chat, questions, daily updates (check 3×/day). ZOOM: Meetings, face-to-face (schedule in advance, calendar invite, record). NOTION: Docs, knowledge base, project plans, tasks (single source of truth). GOOGLE DRIVE: File storage, sharing (organize in folders, permissions). EMAIL: External communication (clients, vendors). REDUCE 7 to 5: Remove Asana (use Notion for tasks), remove WhatsApp (use Slack for chat). AGREE ON: (1) Which tool for what purpose (write in team doc), (2) How often to check (Slack 3×/day, Email 2×/day, Notion 1×/day), (3) Where to find info (all project docs in Notion #project-name). Result: No more confusion, efficient collaboration. Right tools + clear purpose = productivity. Too many tools = chaos. Too few tools = limitations. Right balance = 5-6 tools with clear purpose.'
        }
      ]
    },
    challenge: {
      title: 'Remote Collaboration Challenge',
      description: 'Transform chaotic remote work into smooth collaboration',
      contexts: {
        academic: {
          title: 'Academic Remote Collaboration Mastery',
          description: 'You are assigned to a remote group project (Business Plan Competition). Team: 5 members across 4 cities (Mumbai, Delhi, Bangalore, Pune). Never met face-to-face. Week 1: Chaos (communication gaps, missed meetings, isolation). Goal: Master remote collaboration, deliver excellent business plan, win competition (or reach top 5).',
          instructions: [
            '1. Week 1 - Set Up Remote Collaboration Foundation (Day 1-3, 5 hours): First virtual meeting (Zoom, 1 hour). Introductions: Name, city, strengths, what you bring. Discuss project goal: "Create business plan, win competition." Set remote collaboration foundation: (1) Tools: Agree on Slack (chat), Zoom (meetings), Notion (docs + tasks), Google Drive (files). Document in Notion: "Our Tools Guide." (2) Communication norms: Response time (urgent = 4 hours, normal = 24 hours), daily updates (end of day in Slack), proactive questions (if unclear, ask immediately). (3) Meeting schedule: Weekly Zoom (Sundays 5 PM IST, 1 hour, camera on, record for those who miss), daily Slack check-in (5 mins, share progress). (4) Availability: Core hours (2 PM-5 PM IST when everyone is available for quick questions). Document norms in Notion. Everyone agrees. Foundation is set.',
            '2. Week 1 - Build Virtual Rapport (Day 2-7, 3 hours): Schedule 15-min virtual coffee chats with each team member (1-on-1, casual, no agenda). Learn about them: Where are you from? What are you studying? What hobbies? What are your goals? Share about yourself too. Result: You know team as PEOPLE (not just names on Slack). Trust begins. Create Slack #random channel for non-work chat (memes, jokes, life updates). Start Sunday meetings with 10 mins personal sharing: "How was your week? Any updates?" Build connection despite distance. Team feels less isolated.',
            '3. Week 2 - Master Async Communication (Day 8-14, 10 hours): Practice detailed async messages. BAD: "Can you do market research?" (Vague.) GOOD: "Hi Priya! Can you research target market for our business idea (meal delivery for students)? Need: (1) Market size (how many students?), (2) Customer needs (what do they want?), (3) Competitors (who else serves them?). Format: Google Doc with sources. Deadline: Friday 5 PM. This will inform our business model. Let me know if questions. Thanks!" Result: Priya delivers excellent research (no back-and-forth needed). Apply this to ALL communication. Team responds faster (1 day, not 4 days). Project moves smoothly.',
            '4. Week 2-3 - Over-Communicate Progress (Day 8-21, ongoing): Share daily updates in Slack (end of day, 5 mins): "Today: Completed market research analysis. Tomorrow: Will create financial model. Blocked: Need pricing data from Rahul." Benefits: (1) Team knows your progress, (2) Rahul sees he is blocking you, sends data immediately, (3) Everyone is aligned. Document decisions in Notion: Meeting decision: "We will target hostel students (not all students)." Document: "Decision: Target hostel students. Rationale: They need meal delivery most. Date: Jan 20. Decided by: Team consensus." People who missed meeting can read. Over-communication prevents assumptions and delays.',
            '5. Week 3-4 - Navigate Time Zone Challenges (Day 15-28, 5 hours): Schedule meetings considering all time zones. Use World Time Buddy (find overlapping hours). Send Google Calendar invites (auto-converts to each person local time, sends reminders). Confirm attendance: "Can everyone make Sunday 5 PM IST?" (People reply "Yes" or suggest alternative.) Record meetings (for those who miss). Respect boundaries: Do not message at 11 PM expecting response. Do not assign urgent tasks on weekends. Set status: "Offline 9 PM-9 AM. Urgent? Call. Otherwise, I will respond tomorrow morning." Result: No missed meetings, no burnout, everyone respects boundaries.',
            '6. Week 4-6 - Deliver Excellent Project (Day 22-42, 40 hours): Team collaborates smoothly. Priya (market research), Rahul (financial model), Ankit (operations plan), Sarah (marketing strategy), You (business plan synthesis). Weekly Zoom meetings (productive, camera on, everyone engaged). Daily Slack updates (everyone aligned). Notion has all docs (single source of truth). No communication gaps. No missed deadlines. Strong virtual rapport (team feels connected). Week 6: Submit business plan. Judges feedback: Top 5 finish! "Excellent plan. Clear market analysis, solid financials, thorough execution. Strong teamwork despite being remote!" Team celebrates (virtual party on Zoom, 30 mins, fun games). You reflect: "We mastered remote collaboration. Communication was clear. Connection was strong. We delivered excellent work despite never meeting face-to-face."',
            '7. Week 6 - Document Remote Collaboration Learnings (Day 43, 2 hours): Final team meeting. Reflect: "What made our remote collaboration successful?" Team shares: (1) "Detailed async messages saved time (no back-and-forth)." (2) "Right tools with clear purpose prevented confusion." (3) "Virtual coffee chats built trust." (4) "Daily updates kept us aligned." (5) "Over-communication prevented assumptions." You document learnings in Notion: "Remote Collaboration Best Practices." Share with 5 other remote teams. Help them improve. You became remote collaboration expert. Apply these skills to future remote internships, jobs, freelance work.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Vague async messages: "Can you send data?" Result: 4-day back-and-forth. Solution: Detailed messages with full context (what, which, when, format, deadline, why).',
            '• Tool chaos: Using 7 tools without clear purpose. Result: Lost updates, confusion. Solution: Agree on 5 tools with clear purpose (Slack for chat, Zoom for meetings, etc.).',
            '• No virtual rapport: Only work communication, no personal connection. Result: Isolation, low trust. Solution: Video-on meetings, virtual coffee chats, team rituals.',
            '• Under-communication: Assuming people know what you are doing. Result: Blockers unidentified, delays. Solution: Daily updates, document decisions, share progress.',
            '• No time zone respect: Messaging at 11 PM expecting response. Result: Burnout, resentment. Solution: Respect boundaries, set status, do not expect 24/7 availability.'
          ],
          successCriteria: [
            '✅ You set up remote collaboration foundation (tools, norms, meeting schedule, availability)',
            '✅ You build virtual rapport (coffee chats with each member, know them as people)',
            '✅ You master async communication (detailed messages, 1-day turnaround, no back-and-forth)',
            '✅ You over-communicate (daily updates, document decisions, share progress)',
            '✅ You navigate time zones (calendar invites, confirmations, recordings, respect boundaries)',
            '✅ Team delivers excellent project (top 5 finish, judges praise teamwork)',
            '✅ Team feels connected despite distance (virtual rapport, trust, engagement)',
            '✅ You document and share learnings (help 5 other remote teams improve)'
          ]
        },
        professional: {
          title: 'Professional Remote Collaboration Excellence',
          description: 'You join remote startup (Marketing team, 6 members across 5 cities + 2 countries). Week 1: Chaos (communication gaps, tool overload, isolation). Manager: "Fix our remote collaboration. Make us productive." Goal: Transform chaotic remote team into smooth, high-performing team.',
          instructions: [
            '1. Week 1 - Audit Current Remote Collaboration (Day 1-3, 8 hours): Observe team for 3 days. Identify problems: (1) Communication gaps (vague messages, 2-day response times), (2) Tool chaos (8 tools: Slack, Zoom, Notion, Asana, Trello, Drive, Email, WhatsApp - confusion), (3) No rapport (never met, feel like strangers), (4) Under-communication (do not know what others are doing), (5) No clear expectations (response time? Availability? Meeting norms?). Document problems. Interview 5 team members: "What is most frustrating about remote work?" Top 3: (1) "Unclear communication" (5/5 people), (2) "Feel isolated" (4/5), (3) "Too many tools" (4/5). Present findings to manager: "Here are our remote collaboration problems. I propose solutions." Manager: "Go ahead. Lead this."',
            '2. Week 1 - Propose Remote Collaboration Framework (Day 4, 4 hours): Create framework document in Notion: "Remote Collaboration Best Practices." Content: (1) TOOLS: Slack (chat, check 3×/day), Zoom (meetings, calendar invites, record), Notion (docs + tasks, single source of truth), Google Drive (files), Email (external). Reduce 8 to 5 tools. (2) COMMUNICATION: Detailed async messages (full context), daily updates (end of day in Slack), document decisions (in Notion), response time (urgent = 4 hours, normal = 24 hours). (3) CONNECTION: Weekly team meeting (Fridays 3 PM IST, camera on, start with 10 mins personal), bi-weekly virtual coffee chats (15 mins, 1-on-1, casual), team rituals (Monday motivation, Friday wins). (4) EXPECTATIONS: Core hours (2 PM-5 PM IST for meetings), flexible hours (work when you want, deliver on commitments), meeting norms (camera on, be on time, agenda shared 1 day before). Present to team. Team votes: 6/6 approve. Framework is adopted.',
            '3. Week 2 - Implement Tools Consolidation (Day 5-7, 6 hours): Migrate from 8 tools to 5. (1) Move tasks from Asana + Trello to Notion (single task board). (2) Move team chat from WhatsApp to Slack (professional, organized). (3) Organize Google Drive (create folders: Marketing Campaigns, Client Reports, Team Docs). (4) Create Notion workspace (pages: Team Handbook, Project Plans, Meeting Notes, Decisions Log). (5) Train team (1-hour Zoom workshop: "How to Use Our 5 Tools"). Result: Tool chaos eliminated. Everyone knows: Slack for chat, Zoom for meetings, Notion for docs/tasks, Drive for files, Email for external. Team efficiency improves 40% (less time switching tools, more time working).',
            '4. Week 2-4 - Build Virtual Rapport (Day 8-28, 12 hours): Execute connection initiatives. (1) Virtual coffee chats: Schedule 15-min 1-on-1s with each team member (6 people × 15 mins = 90 mins over 2 weeks). Learn about them: Hobbies, goals, challenges, life. Share about yourself. Build personal connection. (2) Team rituals: Monday motivation (everyone shares 1 goal for week), Friday wins (everyone shares 1 win - work or personal), monthly birthday celebrations (virtual cake, team sings). (3) Informal Slack channel: Create #random (memes, jokes, pet photos, life updates). Team engages (50 messages/week in #random). (4) Video-on culture: Encourage camera on in meetings (you always have camera on, team follows example). Result: Team feels connected. Isolation decreases. Trust increases. Engagement improves. Turnover risk drops.',
            '5. Week 3-6 - Drive Over-Communication (Day 15-42, ongoing): Lead by example. Share daily updates in Slack (end of day): "Today: Completed Instagram campaign analysis (CTR improved 15%). Tomorrow: Will create client report. Blocked: None." Team sees your updates, follows example. Within 2 weeks, all 6 members share daily updates. Benefits: (1) Visibility (everyone knows team progress), (2) Blockers identified early (if someone is stuck, team helps immediately), (3) Alignment (everyone on same page). Document all decisions in Notion: "Decisions Log" page. Meeting decision? Document immediately. Result: People who miss meetings stay informed. Future reference for "Why did we decide this?" Over-communication becomes team culture.',
            '6. Month 2-3 - Deliver Outstanding Results (Day 43-90, 60 hours): Remote collaboration is smooth. Clear communication (detailed async messages, daily updates). Strong connection (virtual coffee chats, team rituals). Right tools (5 tools, clear purpose). Clear expectations (response time, core hours, meeting norms). Results: Marketing campaigns improve (engagement +40%, conversions +25%), client satisfaction 9/10, team productivity +50% (vs Week 1 chaos). Manager presents to CEO: "Marketing team transformed from chaotic (Week 1) to high-performing (Month 3). Remote collaboration is excellent." CEO: "How?" Manager: "Our intern led remote collaboration transformation. Implemented framework, built rapport, drove over-communication." CEO meets you: "Impressive leadership. Join us full-time after graduation." Job offer received.',
            '7. Month 3 - Share Remote Collaboration Framework (Day 90, 5 hours): Manager asks: "Can you help other teams improve remote collaboration?" You create 1-hour workshop: "Remote Collaboration Mastery for Distributed Teams." Content: (1) Async communication (detailed messages), (2) Right tools (5 tools, clear purpose), (3) Virtual rapport (coffee chats, rituals), (4) Over-communication (daily updates, document decisions), (5) Clear expectations (response time, core hours). Deliver to 3 other teams (Sales, Product, Engineering). They adopt your framework. Company-wide remote collaboration improves. You present at company all-hands: "How We Transformed Remote Collaboration." CEO recognizes you publicly. Your LinkedIn post: "Remote Collaboration Framework" gets 5K likes. Recruiters message you: "We need remote work experts." You have 3 job offers. Remote collaboration expertise opened doors.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not proposing solutions: Complaining about chaos without offering framework. Result: Chaos continues. Solution: Propose framework (tools, communication, connection, expectations).',
            '• Forcing adoption: "Everyone must use these tools!" Result: Resistance. Solution: Present framework, team votes, adopt by consensus.',
            '• No training: Implementing new tools without training team. Result: Confusion continues. Solution: 1-hour workshop (how to use 5 tools effectively).',
            '• Not leading by example: Proposing daily updates but not sharing yours. Result: Nobody follows. Solution: Share your daily updates first, team follows example.',
            '• No measurement: Implementing framework without measuring impact. Result: Do not know if it works. Solution: Measure (productivity, response time, satisfaction) before and after. Prove framework works.'
          ],
          successCriteria: [
            '✅ You audit remote collaboration problems (communication gaps, tool chaos, isolation)',
            '✅ You propose framework (tools, communication, connection, expectations - team approves)',
            '✅ You implement tools consolidation (8 tools → 5 tools, team efficiency +40%)',
            '✅ You build virtual rapport (coffee chats, team rituals, #random channel)',
            '✅ You drive over-communication culture (daily updates, decisions log, visibility)',
            '✅ Team delivers outstanding results (engagement +40%, conversions +25%, client satisfaction 9/10)',
            '✅ You share framework company-wide (3 teams adopt it, CEO recognizes you)',
            '✅ You get job offer and become remote collaboration expert (3 job offers, LinkedIn post viral)'
          ]
        },
        personal: {
          title: 'Personal Remote Collaboration Wisdom',
          description: 'You and 3 friends (all B.Com students, different cities: Mumbai, Delhi, Pune) want to start remote side business (freelance content writing for startups). Week 1: Excited! Week 2: Chaos (poor communication, missed deadlines, feel disconnected). Goal: Master remote collaboration, build successful remote business, earn ₹20K/month.',
          instructions: [
            '1. Week 1 - Set Up Remote Business Foundation (Day 1-5, 8 hours): First Zoom meeting (1 hour). Discuss business idea: "Freelance content writing (blog posts, social media, website copy) for startups. Charge ₹2000/project. Goal: 10 clients/month = ₹20K revenue." Set foundation: (1) Tools: Slack (free plan, team chat), Zoom (free, weekly meetings), Notion (free, docs + tasks + client tracker), Google Drive (files), Gmail (client communication). All free tools (no budget yet). (2) Roles: You (client acquisition + coordination), Priya (blog writing), Rahul (social media), Ankit (website copy). (3) Communication: Daily Slack updates (what I did, will do, blockers), weekly Zoom (Sundays 6 PM IST, 1 hour), response time (24 hours). (4) Money: Transparent (shared sheet: earnings, expenses, split), split based on work (writer gets 60%, you get 40% for client acquisition). Document in Notion. Everyone agrees.',
            '2. Week 1 - Build Virtual Friendship (Day 3-7, 3 hours): Schedule 20-min video calls with each friend (1-on-1, casual). Catch up: "How is life? How is college? What are you excited about?" Share your life too. Create WhatsApp group (separate from Slack) for personal chat (not business - just friendship). Share memes, jokes, life updates. Start Zoom meetings with 10 mins casual: "How was everyone week?" Build connection. You are friends first, business partners second. Connection strengthens commitment.',
            '3. Week 2-3 - Master Async Client Communication (Day 8-21, 15 hours): Get first 5 clients (through LinkedIn, cold emails). Practice detailed async communication with clients. BAD client message: "Can you write blog post?" (Vague.) GOOD: "Hi! I am interested in your content writing service. Need: 1 blog post (1000 words) on topic: How to raise seed funding for startups. Audience: First-time founders. Tone: Practical, actionable. Deadline: Next Friday. Budget: ₹2000. Can you do this? Let me know if you need more details." Result: Clear requirements, no back-and-forth, smooth delivery. Priya writes blog (excellent quality), client is happy, pays ₹2000. Apply to all 5 clients. Month 1: 5 clients, ₹10K revenue (₹6K to writers, ₹4K to you). Async communication enables remote business.',
            '4. Week 2-4 - Over-Communicate with Team (Day 8-28, ongoing): Share daily updates in Slack: "Today: Got 2 new clients (blog + social media). Assigned blog to Priya, social media to Rahul. Tomorrow: Will follow up with 3 leads. Blocked: None." Priya and Rahul share updates: "Today: Completed blog for Client A. Tomorrow: Will start social media for Client B." Benefits: (1) You know team progress, (2) Clients are being served on time, (3) Everyone is aligned. Document client details in Notion: Client tracker (name, project, deadline, status, payment). Transparent. Everyone can see: Which clients? What projects? What deadlines? Over-communication builds trust and prevents missed deadlines.',
            '5. Month 2 - Navigate Challenges Together (Day 29-60, 20 hours): Challenge 1: Client is unhappy (blog quality). You address in team Zoom: "Client feedback: Blog is too generic. They want specific examples. Priya, can you revise?" Priya: "Yes, I will add 3 case studies." Revise, resubmit, client is happy. Challenge 2: Rahul is overwhelmed (5 social media projects, exams coming). You support: "Rahul, let us redistribute. Ankit, can you take 2 projects?" Ankit: "Yes!" Rahul: "Thank you!" Team supports each other. Challenge 3: You are burned out (client acquisition + coordination = 30 hours/week). Team helps: "Let us all do client acquisition. Each person gets 1 client/week." Load is distributed. Challenges are navigated together (not alone). Remote team is strong.',
            '6. Month 3 - Scale Remote Business (Day 61-90, 30 hours): Business grows. Month 1: 5 clients, ₹10K. Month 2: 8 clients, ₹16K. Month 3: 12 clients, ₹24K. Total 3 months: 25 clients, ₹50K revenue. After expenses (₹5K for tools, marketing): ₹45K profit. Split: Writers (₹27K = ₹9K each), You (₹18K). Everyone is thrilled. You celebrate: Virtual team party (Zoom, 1 hour, games, fun). Reflect: "We built ₹50K remote business in 3 months. We mastered remote collaboration. We proved: Remote work works if done intentionally." Plan next 3 months: Scale to 20 clients/month = ₹40K revenue. Remote business is successful.',
            '7. Month 3 - Share Remote Business Learnings (Day 90, 4 hours): You document: "How We Built ₹50K Remote Business as B.Com Students." Learnings: (1) Detailed async communication (no back-and-forth with clients or team), (2) Right tools (5 free tools, clear purpose), (3) Virtual friendship (coffee chats, WhatsApp personal group, Zoom casual time), (4) Over-communication (daily updates, client tracker, transparency), (5) Support each other (redistribute work when overwhelmed, solve challenges together). Share on LinkedIn. Post goes viral (8K likes). 50 students message: "Can you teach us remote collaboration?" You create online course: "Remote Collaboration for Students" (₹500, 2 hours). 100 students enroll = ₹50K additional revenue. Remote collaboration expertise became income stream.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• No clear roles: Assuming "we will figure it out." Result: Confusion, overlap. Solution: Assign roles (client acquisition, writing, coordination).',
            '• Not supporting each other: Rahul is overwhelmed, nobody helps. Result: Rahul burns out, quits. Solution: Redistribute work, support each other.',
            '• No transparency: Hiding earnings, expenses, client details. Result: Distrust, suspicion. Solution: Shared sheet (all earnings/expenses visible), Notion client tracker (everyone sees clients, projects, payments).',
            '• Prioritizing business over friendship: Pushing too hard, ignoring personal boundaries. Result: Damaged friendship. Solution: Friendship first (WhatsApp personal group, casual Zoom time, respect boundaries).',
            '• Not celebrating: Focusing only on work, no fun. Result: Burnout, low morale. Solution: Celebrate wins (virtual parties, recognize contributions, have fun together).'
          ],
          successCriteria: [
            '✅ You audit remote collaboration problems (communication, tools, isolation)',
            '✅ You propose and implement framework (tools, communication, connection, expectations)',
            '✅ You consolidate tools (8 → 5 tools, team efficiency improves)',
            '✅ You build virtual friendship (coffee chats, personal WhatsApp group, casual Zoom time)',
            '✅ You drive over-communication (daily updates, client tracker, transparency)',
            '✅ You build successful remote business (25 clients, ₹50K revenue in 3 months)',
            '✅ You support each other through challenges (redistribute work, solve together)',
            '✅ You share learnings and create course (LinkedIn viral, 100 students enroll, ₹50K additional revenue)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '📝 Async Communication Mastery: You write detailed async messages with full context (what, which, when, format, deadline, why). Example: Not "Can you send data?" But "Can you send marketing campaign data for Instagram ads (Jan-Mar 2024) in Excel format with metrics: reach, engagement, conversions, cost? Need by Friday 5 PM for client report." Result: People can respond immediately (no back-and-forth needed). 1-day turnaround (not 4 days). You understand: Async is superpower for remote work. Detailed messages save time, prevent confusion, enable work across time zones.',
        '🔧 Right Tools for Purpose: You choose right tool for each purpose. Slack (chat, check 3×/day), Zoom (meetings, calendar invites, record), Notion (docs + tasks, single source of truth), Google Drive (files), Email (external). You reduce tool chaos (8 tools → 5 tools). You document: Which tool for what, how often to check, where to find info. Result: No confusion, efficient collaboration, team productivity improves 40%. You understand: Right tools + clear purpose = productivity. Too many tools = chaos. Too few = limitations.',
        '🎥 Build Virtual Rapport: You create INTENTIONAL connection despite distance. Video-on meetings (see faces), virtual coffee chats (15 mins, casual, know them as people), team rituals (Monday motivation, Friday wins, birthday celebrations), personal sharing (start meetings with 10 mins personal), informal channels (Slack #random for non-work chat). Result: Team feels connected, trust builds, isolation decreases, engagement improves, turnover drops. You understand: Remote connection requires intention (office connection happens naturally). Video-on, casual chats, rituals, personal sharing = strong virtual relationships.',
        '📢 Over-Communicate Intentionally: You share daily updates (what I did, will do, blockers), document decisions (meeting outcomes in Notion), share progress (update task status), ask proactive questions (if unclear, ask immediately, do not wait). Result: Team knows what you are doing, blockers identified early, everyone aligned, no assumptions, no delays. You understand: Remote default is under-communication (people do not see you working). Intentionally over-communicate. Transparency = trust = alignment = productivity.',
        '⏰ Respect Time Zones and Boundaries: You specify time zones (10 AM IST, not just 10 AM), send calendar invites (auto-converts time), confirm attendance, record meetings (for those who miss), rotate meeting times (fair to all). You respect boundaries: Do not message 11 PM, do not assign urgent tasks on weekends, set status (offline hours). Result: No missed meetings, no burnout, no resentment, team appreciates respect. You understand: Remote work enables flexibility. Respect it. Clear scheduling + boundary respect = sustainable remote work.'
      ],
      improvements: [
        '⚡ Async Even More Detailed: Your async messages include: what, which, when, format, deadline, why. Good. But add more: (1) Priority (urgent, normal, low), (2) Dependencies (need X before I can do Y), (3) Alternatives (if you cannot do X, can you do Y?), (4) Success criteria (what does good look like?). Example: "Hi Priya! URGENT: Can you send Instagram data (Jan-Mar 2024) in Excel? Need metrics: reach, engagement, conversions. Deadline: Friday 5 PM (I need this to complete client report by Monday). If you cannot get all metrics, reach + engagement is enough. Success: Data is accurate, sourced, formatted for analysis. Questions?" More detail = even less back-and-forth. 0-day turnaround (Priya has everything she needs).',
        '🎯 Master More Remote Tools: You know 5 tools (Slack, Zoom, Notion, Drive, Email). Good. But learn more: (1) Loom (async video messages - explain complex topics visually), (2) Miro (virtual whiteboard - brainstorm, collaborate visually), (3) Calendly (schedule meetings - no back-and-forth on time), (4) Grammarly (write clear messages), (5) Time zone converters (World Time Buddy, Every Time Zone). More tools = more capabilities. Example: Use Loom to explain complex task (5-min video) instead of long text message (saves time, clearer). Master 10+ remote tools. Become power user.',
        '📊 Measure Remote Collaboration Quality: You implement remote collaboration practices. But you do not measure: How effective are they? Improve: Survey team monthly (anonymous): (1) Communication clarity (1-10: Are messages clear?), (2) Tool effectiveness (1-10: Do tools help or hinder?), (3) Connection (1-10: Do you feel connected to team?), (4) Productivity (1-10: Are you productive remotely?), (5) Satisfaction (1-10: Are you satisfied with remote work?). Track over time. Week 1: Clarity 4/10, Connection 3/10, Productivity 5/10. Month 3: Clarity 9/10, Connection 8/10, Productivity 9/10. Measurement shows: Your practices work. Use data to improve: "Connection is 8/10 (good) but can be 9/10. Need more virtual coffee chats."',
        '🗣️ Improve Async Video Communication: You use text (Slack, Email). Good. But add async video: Use Loom to record 2-5 min videos explaining: (1) Complex tasks (show screen, explain step-by-step), (2) Feedback (record video feedback on work - more personal than text), (3) Updates (weekly video update - more engaging than text). Async video combines: (1) Clarity of video (see face, hear tone, watch screen), (2) Flexibility of async (watch when convenient, rewatch if needed). Practice: Send 1 Loom video/week. Team loves it (clearer than text, more personal). Async video = next-level remote communication.',
        '👥 Build Remote Leadership Skills: You collaborate remotely. Good. But build remote LEADERSHIP: (1) Lead remote team (coordinate project, facilitate meetings, drive results), (2) Mentor remotely (1-on-1 video calls, give feedback, develop others), (3) Present remotely (company all-hands, webinars, workshops - engage virtual audience), (4) Build remote culture (establish norms, rituals, values for remote team). Remote leadership is different from office leadership (cannot tap shoulder, read room, have hallway conversations). Master remote-specific leadership skills. Lead distributed teams effectively.'
      ],
      nextSteps: [
        '📚 Read Remote Work Books: (1) "Remote: Office Not Required" by Jason Fried (Basecamp founder - remote work best practices), (2) "The Year Without Pants" by Scott Berkun (WordPress remote work culture), (3) "Distributed Teams" by John O\'Duinn (how to build high-performing remote teams), (4) "The Long-Distance Leader" by Kevin Eikenberry (lead remote teams effectively). Apply: Extract 3 key practices per book. Practice: Apply 1 practice to your remote team. Observe: Does it improve collaboration? Document learnings.',
        '🎯 Master Remote Collaboration Tools: Take courses on: (1) Slack (advanced features: workflows, integrations, bots), (2) Notion (databases, templates, automations), (3) Zoom (breakout rooms, polls, reactions, recording), (4) Loom (async video, screen recording, editing), (5) Miro (virtual whiteboard, brainstorming, workshops). Become power user. Create templates (Notion project template, Slack daily update template, Zoom meeting agenda template). Share with team. Efficiency improves 50%. Tool mastery = remote work superpower.',
        '🧠 Practice 20 Remote Collaborations: Work on 20 remote projects over 1 year (internships, freelance, group projects, club initiatives, startup teams). Track: (1) Team size (2-person, 5-person, 10-person), (2) Geography (same city, different cities, different countries), (3) Duration (1 month, 3 months, 6 months), (4) Tools used (which tools worked best?), (5) Challenges faced (communication gaps, isolation, time zones), (6) Solutions applied (async communication, virtual rapport, over-communication), (7) Outcomes (project success, team satisfaction, learnings). After 20 remote collaborations, you will master remote work. You will handle any remote situation (any team size, any geography, any duration).',
        '📊 Create Remote Collaboration Course: Document your remote collaboration expertise. Create online course: "Remote Collaboration Mastery for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Async communication (detailed messages, full context, clear deadlines), (2) Module 2: Right tools (Slack, Zoom, Notion, Drive, Email - purpose for each), (3) Module 3: Virtual rapport (video-on, coffee chats, rituals, personal sharing), (4) Module 4: Over-communication (daily updates, document decisions, share progress), (5) Module 5: Time zones and boundaries (calendar invites, respect boundaries, sustainable work). Sell to 200 students = ₹2L revenue. Help 200 students master remote work. Build reputation as remote collaboration expert.',
        '👥 Consult on Remote Collaboration: Offer remote collaboration consulting to startups, small businesses, student teams. Service: "I help teams improve remote collaboration. ₹5000/team (5 hours). Process: (1) Audit current practices (identify problems), (2) Propose framework (tools, communication, connection, expectations), (3) Implement (train team, set up tools, establish norms), (4) Measure impact (productivity, satisfaction, before/after). Guarantee: 40% productivity improvement or money back." Month 1: 3 clients, ₹15K. Month 6: 10 clients, ₹50K. You help 10 teams transform remote collaboration. You earn ₹50K. You build reputation. Career opportunities open (remote work consultant, HR roles, startup operations roles).'
      ]
    },
    badge: { name: 'Remote Collaborator', emoji: '💻', description: 'Expert in remote teamwork' },
    shareMessage: 'Just mastered remote collaboration! 💻 #RemoteWork #Teamwork'
  },
  {
    id: 'cross-functional-teams',
    title: 'Cross-functional Teams',
    emoji: '🔀',
    context: 'professional' as const,
    discover: {
      scenario: "E-commerce startup. Cross-functional team: You (Business), Priya (Tech), Rahul (Design), Ankit (Engineering). Week 1: 'All expertise!' Week 2: Chaos. You: 'Customer acquisition!' Priya: 'Fix bugs!' Everyone different priority. You say 'CAC, LTV'—Priya confused. Priya says 'microservices, API'—you confused. Week 3: Zero progress.",
      problemExplanation: [
        "Jargon barrier: You 'CAC, LTV.' Priya 'What?' Later Priya 'microservices, API.' You 'What?' Business/Tech/Design/Engineering = different languages",
        "Competing priorities: You want users. Priya wants bug fixes. Rahul wants UI. Ankit wants scale. Everyone thinks THEIR priority #1",
        "Silos: 'My job = marketing, don't care about tech.' Priya: 'My job = code, don't care about business.' Disconnected work = failed product",
        "No shared language: You speak Business. Priya speaks Tech. Rahul speaks Design. Meetings = frustration, nobody understands anyone"
      ],
      solutionApproach: [
        "Translate: When you say 'CAC,' add '= cost to get 1 customer, ₹500.' When Priya says 'microservices,' ask 'Simple terms?' She: 'Break app into small parts'",
        "Common goal: 'Launch platform: 1000 artisans, 10K customers, ₹10L GMV.' Now ALL priorities serve THIS: users + bugs + UI + scale = success",
        "Respect perspectives: You: 'Acquisition = priority.' Priya: 'Bugs = priority.' Both valid! Integrate: 'Fix bugs Week 1-2, THEN acquire customers Week 3-4'",
        "Build relationships: Coffee chat with Priya. Learn what she enjoys. Appreciate her skills. Ask her input. Teach her business. Colleagues → friends"
      ]
    },
    video: {
      title: 'Bridge Builder: Master Cross-Functional Collaboration',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR CROSS-FUNCTIONAL TEAM IS STUCK

"You (Business), Priya (Tech), Rahul (Design), Ankit (Engineering). Week 1: 'We have all expertise!' Week 2: Chaos. You: 'Customer acquisition!' Priya: 'Fix bugs!' Rahul: 'Better UI!' Ankit: 'Scalable architecture!' Different priorities. You explain using business jargon ('CAC, LTV'). Priya is confused. Priya explains using tech jargon ('microservices, API'). You are confused. Week 3: No progress. Professor: 'Cross-functional teams are powerful (diverse expertise) but challenging (different languages, priorities). Learn to translate, align, respect, bridge, focus on shared outcomes.' By the end of this video, you will master cross-functional collaboration. Let us fix this."

[0:45-2:15] TRANSLATE BETWEEN DOMAINS (Learn to Speak Their Language)

"You (Business): 'We need to optimize CAC through targeted ads.'
Priya (Tech): 'What is CAC?'
You (frustrated): 'Customer Acquisition Cost! Everyone knows this!'

Priya feels stupid. Communication breaks down.

Later:
Priya (Tech): 'We need microservices, API gateway, load balancer.'
You: 'What?'
Priya (frustrated): 'Basic tech! Everyone knows this!'

You feel stupid. Communication breaks down.

PROBLEM: Different domains speak different LANGUAGES (jargon).

Business jargon: CAC, LTV, ROI, conversion funnel.
Tech jargon: Microservices, API, load balancer, scalability.
Design jargon: UI/UX, wireframes, prototypes, user flow.
Engineering jargon: Backend, frontend, database, deployment.

SOLUTION: TRANSLATE between domains.

When you say 'CAC,' EXPLAIN: 'Customer Acquisition Cost - how much we spend to get 1 customer. Currently ₹500/customer. Goal: Reduce to ₹300.'

When Priya says 'microservices,' ASK: 'Can you explain in simple terms?' Priya: 'Breaking app into small parts. Payment part, product catalog part, user account part. Each works independently. Easier to fix, scale.'

TRANSLATION ENABLES:
- Understanding (everyone knows what you mean)
- Collaboration (can discuss intelligently)
- Better decisions (integrate all perspectives)

Learn basics of other domains (10 hours each). Translate your jargon. Ask for translation. Build shared language."

[2:15-3:45] ALIGN AROUND COMMON GOALS (Not Competing Priorities)

"You: 'Priority #1: Customer acquisition!'
Priya: 'Priority #1: Fix bugs!'
Rahul: 'Priority #1: Better UI!'
Ankit: 'Priority #1: Scalable architecture!'

Everyone has DIFFERENT priority #1. You argue. No alignment. No progress.

PROBLEM: Competing priorities. Each department optimizes for THEIR goal.

SOLUTION: Find COMMON GOAL that transcends departments.

COMMON GOAL: 'Launch successful e-commerce platform: 1000 artisans selling, 10,000 customers buying, ₹10L GMV, 8/10 satisfaction, 99% uptime, scalable to 100K users.'

NOW ALIGN: How do ALL priorities serve common goal?

1. Customer acquisition (your priority) → Get 10,000 customers (serves common goal)
2. Bug fixing (Priya priority) → 99% uptime, customers trust platform (serves common goal)
3. Better UI (Rahul priority) → 8/10 satisfaction, customers enjoy platform (serves common goal)
4. Scalable architecture (Ankit priority) → Handle 100K users, platform grows (serves common goal)

ALL priorities serve SHARED goal.

INTEGRATED ROADMAP:
Month 1: Fix critical bugs (Priya) - app must work reliably.
Month 2: Improve UI (Rahul) - app must look trustworthy.
Month 3: Customer acquisition (You) - get 10,000 customers.
Month 4: Scale architecture (Ankit) - handle growth.

Everyone gets their priority. But sequenced to serve common goal.

Common goal unites cross-functional team. Competing priorities divide."

[3:45-5:15] RESPECT DIFFERENT PERSPECTIVES (All Are Valid)

"You (Business): 'Customer acquisition is most important!'
Priya (Tech): 'Bug fixing is most important!'

Who is right?

BOTH.

Your perspective: 'No customers = no business.' (Valid.)
Priya perspective: 'App crashes = customers leave.' (Valid.)

Both perspectives are VALUABLE.

WRONG APPROACH: 'I am right. You are wrong. My priority wins.'
Result: Priya feels disrespected. She disengages. Team loses her expertise.

RIGHT APPROACH: 'Both perspectives are valid. How do we integrate them?'

You: 'Priya, why do you think bugs are priority #1?'
Priya: 'App crashes 20% of time. Users leave. We lose customers.'
You: 'You are right. Crashes lose customers. We must fix this.'

Priya: 'Why do you think customer acquisition is priority #1?'
You: 'No users = no feedback, no revenue, no validation. We need users to know if product works.'
Priya: 'You are right. We need users.'

INTEGRATE: 'What if we fix CRITICAL bugs (Week 1-2, stop crashes) THEN do customer acquisition (Week 3-4, get users to test)? We get working app + users.'

Both: 'This works!'

RESPECTING different perspectives leads to BETTER decisions (integrated solution > single perspective).

Value each perspective for its unique contribution."

[5:15-6:30] BRIDGE COMMUNICATION GAPS (Be the Translator)

"You are the BRIDGE between Business and Tech.

MEETING: You explain marketing strategy.

BAD (No translation): 'We need to optimize CAC through targeted ads, improve LTV through retention campaigns, and increase conversion rate through funnel optimization.'

Priya, Rahul, Ankit: (Confused. Do not understand. Stay silent.)

GOOD (With translation): 'We need to reduce cost of getting customers (currently ₹500, target ₹300) by showing ads to right people. We need to keep customers longer (currently 3 months, target 12 months) by improving product. We need to convert more visitors to buyers (currently 2%, target 5%) by making purchase easier.'

Priya, Rahul, Ankit: (Understand. Nod. Ask questions.)

BRIDGE COMMUNICATION:
1. Translate YOUR jargon (explain in simple terms + examples)
2. Ask for THEIR translation ('Can you explain microservices simply?')
3. Use analogies (explain tech using business analogies: 'API is like a waiter - takes your order to kitchen, brings food back')
4. Visual aids (diagrams, not just words - draw funnel, architecture, user flow)

Bridge builder = valuable team member. You enable collaboration by translating between domains."

[6:30-7:30] FOCUS ON SHARED OUTCOMES (Not Territorial Wins)

"You (Business) want: 1000 users (YOUR KPI).
Priya (Tech) wants: 99% uptime (HER KPI).
Rahul (Design) wants: 8/10 satisfaction (HIS KPI).
Ankit (Engineering) wants: Handle 10,000 requests/second (HIS KPI).

These are INDIVIDUAL outcomes. Each department optimizes for THEIR goal.

PROBLEM: Territorial thinking. 'MY department must win.'

SOLUTION: Focus on SHARED outcome.

SHARED OUTCOME: 'Launch successful platform: 1000 artisans selling, 10,000 customers buying, ₹10L GMV, 8/10 satisfaction, 99% uptime, scalable to 100K users.'

Everyone contributes to SHARED outcome:
- You drive customer acquisition (10,000 customers)
- Priya ensures reliability (99% uptime)
- Rahul ensures satisfaction (8/10)
- Ankit ensures scalability (100K users)

CELEBRATE SHARED SUCCESS: 'We launched successfully! 1000 artisans, 10,000 customers, ₹10L GMV! WE did this together!'

Not: 'MY marketing campaign got 10,000 customers!' (Territorial.)

Focus on shared outcomes. Celebrate together. Cross-functional team wins together."

[7:30-8:00] YOUR CHALLENGE (Become Bridge Builder)

"Here is your action step: If you are on cross-functional team (startup, project, internship):

1. Learn basics of other domains (10 hours: Learn tech basics, design basics, engineering basics)
2. Translate your jargon (explain CAC, LTV, ROI in simple terms)
3. Ask for translation ('Can you explain API simply?')
4. Find common goal ('What are we ALL trying to achieve?')
5. Respect all perspectives ('Your perspective is valid. How do we integrate?')

RESULT: You become BRIDGE BUILDER. You enable collaboration. You are valuable team member.

Cross-functional collaboration is future. Master it now."

[End Screen: "Next Video: Team Building - Build Trust and Cohesion"]`,
      content: [
        'Translate Between Domains: Learn basics of other domains, explain your jargon in simple terms, ask for translation',
        'Find Common Goals: Align competing priorities around shared goal that transcends departments',
        'Respect Different Perspectives: All perspectives are valid (business, tech, design, engineering) - integrate them',
        'Bridge Communication Gaps: Be the translator between domains (simple language, analogies, visual aids)',
        'Focus on Shared Outcomes: Optimize for shared outcome (successful product), not individual outcome (my department wins)',
        'Build Cross-Functional Relationships: Know them as people, appreciate expertise, ask for input, support goals',
        'B.Com Applications: Startup teams, cross-departmental projects, interdisciplinary work, workplace collaboration'
      ]
    },
    quiz: {
      title: 'Cross-functional Teams Quiz',
      questions: [
        {
          id: 21,
          question: 'Team: Business, Tech, Design, Engineering. Week 1: "All expertise!" Week 2: Chaos. What are cross-functional teams?',
          options: [
            'Same expertise team',
            'Different departments working together',
            'Only managers',
            'One department'
          ],
          correct: 1,
          explanation: 'Cross-functional teams = people from DIFFERENT departments/specialties working together. Your team: Business (you), Tech (Priya), Design (Rahul), Engineering (Ankit). Diverse expertise is POWERFUL: (1) Business understands customers, market, revenue, (2) Tech understands coding, systems, scalability, (3) Design understands user experience, visual appeal, usability, (4) Engineering understands infrastructure, performance, reliability. Together, you can build excellent product (all aspects covered). But diverse expertise is CHALLENGING: (1) Different jargon (CAC vs microservices vs wireframes vs backend), (2) Different priorities (customer acquisition vs bug fixing vs UI vs architecture), (3) Different perspectives (business vs tech vs design vs engineering). Result: Communication barriers, competing priorities, siloed thinking. Solution: Translate between domains, align around common goal, respect all perspectives, bridge communication gaps, focus on shared outcomes. In B.Com workplace, ALL companies have cross-functional teams (marketing + sales + product + engineering + finance + HR). Master cross-functional collaboration = excel in any company.'
        },
        {
          id: 22,
          question: 'You: "Optimize CAC through ads." Priya confused: "What\'s CAC?" How work across functions?',
          options: [
            'Use only your jargon',
            'TRANSLATE between domains',
            'Avoid communication - silos',
            'Demand they adapt'
          ],
          correct: 1,
          explanation: 'Work across functions by TRANSLATING between domains (not using only your jargon or demanding they adapt). Problem: You say "CAC" (business jargon). Priya does not understand (she is tech, not business). Communication breaks down. Solution: TRANSLATE. Explain CAC: "Customer Acquisition Cost - how much we spend to get 1 customer. Currently ₹500/customer. Goal: Reduce to ₹300 by showing ads to right people." Priya understands. Similarly, when Priya says "microservices" (tech jargon), ASK for translation: "Can you explain simply?" Priya: "Breaking app into small parts. Each part does one thing. Easier to fix, scale." You understand. Translation requires: (1) Learn basics of other domains (10 hours learning tech basics), (2) Explain your jargon in simple terms + examples, (3) Ask for translation (do not stay confused), (4) Use analogies (API = waiter taking order to kitchen). Result: Shared language, understanding, collaboration, better decisions. In B.Com cross-functional work, be bridge builder. Translate between domains. Enable communication. Everyone understands everyone.'
        },
        {
          id: 23,
          question: 'You: "Priority: Acquisition!" Priya: "Priority: Bugs!" Rahul: "Priority: UI!" Conflict. What do?',
          options: [
            'Fight for your priority',
            'Align around COMMON GOAL',
            'Ignore others - focus yours',
            'Let departments compete'
          ],
          correct: 1,
          explanation: 'Align different priorities around COMMON GOAL that transcends departments. Problem: You want customer acquisition, Priya wants bug fixing, Rahul wants better UI. Competing priorities. Conflict. No progress. Solution: Find COMMON GOAL: "Launch successful e-commerce platform: 1000 artisans selling, 10,000 customers buying, ₹10L GMV, 8/10 satisfaction, 99% uptime, scalable to 100K users." Now align: How do ALL priorities serve common goal? (1) Customer acquisition (your priority) → Get 10,000 customers (serves common goal), (2) Bug fixing (Priya) → 99% uptime (serves common goal), (3) Better UI (Rahul) → 8/10 satisfaction (serves common goal). ALL priorities serve shared goal. Create integrated roadmap: Month 1 (fix critical bugs), Month 2 (improve UI), Month 3 (customer acquisition). Everyone gets their priority, but sequenced to serve common goal. Result: Alignment, collaboration, no conflict. In B.Com cross-functional teams, competing priorities are normal. Do NOT fight. ALIGN around common goal. Everyone contributes to shared success.'
        },
        {
          id: 24,
          question: 'You: "Acquisition most important." Priya: "Bugs most important." Who\'s right? What is respect for expertise?',
          options: [
            'You\'re right - business always',
            'BOTH right - value each perspective',
            'Trust only your expertise',
            'Everyone should think same'
          ],
          correct: 1,
          explanation: 'Respect for expertise = value EACH perspective for its unique contribution. You think customer acquisition is most important (business perspective: no customers = no business). Priya thinks bug fixing is most important (tech perspective: app crashes = customers leave). Who is right? BOTH. Both perspectives are VALUABLE: (1) Your perspective is valid (need customers to validate product, generate revenue), (2) Priya perspective is valid (need working app or customers will leave). Respecting both leads to BETTER decision: "Fix critical bugs (Week 1-2) THEN do customer acquisition (Week 3-4). We get working app + customers." Integrated solution is BETTER than either pure customer acquisition (with buggy app, customers leave) or pure bug fixing (with no customers, no validation). In B.Com cross-functional teams, respect ALL expertise. Business brings market understanding. Tech brings technical feasibility. Design brings user experience. Engineering brings scalability. ALL are valuable. Integrate perspectives. Better decisions emerge from diverse expertise, not single perspective.'
        },
        {
          id: 25,
          question: 'You want 1000 users. Priya wants 99% uptime. Each optimizes THEIR goal. Silos. What\'s needed?',
          options: [
            'Avoid other departments',
            'Focus on SHARED OUTCOMES',
            'Defend your department',
            'Work in silos'
          ],
          correct: 1,
          explanation: 'Cross-functional success requires focus on SHARED OUTCOMES, not individual department outcomes. Problem: You optimize for YOUR KPI (1000 users), Priya optimizes for HER KPI (99% uptime), Rahul for HIS (8/10 satisfaction), Ankit for HIS (10K requests/second). Individual optimization. Territorial thinking. Silos. Result: Suboptimal product (each department does their part well, but parts do not integrate). Solution: Define SHARED OUTCOME: "Launch successful platform: 1000 artisans selling, 10,000 customers buying, ₹10L GMV, 8/10 satisfaction, 99% uptime, scalable to 100K users." Everyone contributes to SHARED outcome: You (customer acquisition), Priya (reliability), Rahul (satisfaction), Ankit (scalability). Celebrate SHARED success: "WE launched successfully! 1000 artisans, 10,000 customers, ₹10L GMV! WE did this together!" (Not: "MY marketing got 10,000 customers" - territorial.) Result: Alignment, collaboration, integrated product, shared celebration. In B.Com cross-functional work, shift from "MY department outcome" to "OUR shared outcome." Optimize for shared success. Celebrate together. Cross-functional team wins as ONE team, not separate departments.'
        }
      ]
    },
    challenge: {
      title: 'Cross-functional Challenge',
      description: 'Become bridge builder across different expertise',
      contexts: {
        academic: {
          title: 'Academic Cross-Functional Excellence',
          description: 'College project: "Create Sustainable Business Model for Local Farmers." Interdisciplinary team: You (B.Com - Business), Priya (B.Sc Agriculture - Farming), Rahul (B.Tech - Technology), Ankit (BA Economics - Policy). Week 1: Different backgrounds, jargon, priorities. Goal: Bridge domains, deliver integrated solution, achieve A grade.',
          instructions: [
            '1. Week 1 - Learn Basics of Other Domains (Days 1-7, 15 hours): You know Business. Learn basics of other 3 domains. (1) Agriculture (5 hours): Watch YouTube videos, read articles. Learn: What challenges do farmers face? (Low prices, middlemen, market access.) What is sustainable farming? (Organic, crop rotation, water conservation.) Key terms: Crop yield, soil health, irrigation, harvest season. (2) Technology (5 hours): Learn basic tech. What is app? Website? Database? E-commerce platform? How does online marketplace work? (3) Economics/Policy (5 hours): Learn policy basics. What is MSP (Minimum Support Price)? What are government schemes for farmers? What is agricultural policy? Result: You can now COMMUNICATE with Priya (agriculture), Rahul (tech), Ankit (economics). You speak their language (at basic level).',
            '2. Week 1 - First Team Meeting: Translate Your Jargon (Day 3, 2 hours): Present your business perspective. BAD (No translation): "We need to create value proposition, identify target market, develop go-to-market strategy, optimize unit economics." (Business jargon. Others confused.) GOOD (With translation): "We need to answer: (1) What value do we provide to farmers? (Help them sell directly to customers, skip middlemen, get better prices.) (2) Who are our customers? (Urban consumers who want fresh, organic produce.) (3) How do we reach customers? (Online platform, social media marketing.) (4) How do we make money? (Take 10% commission on sales.)" (Simple language. Others understand.) Result: Priya, Rahul, Ankit understand business perspective. They contribute ideas.',
            '3. Week 2 - Ask for Translation from Others (Days 8-14, 5 hours): Listen to Priya (Agriculture). She says: "We need to consider crop cycles, post-harvest losses, cold chain logistics." You are confused. ASK: "Can you explain in simple terms?" Priya: "Farmers harvest crops seasonally (tomatoes in summer, not winter). After harvest, 30% of produce spoils (no refrigeration). We need cold storage (refrigerated trucks, warehouses) to prevent spoilage." You understand. Listen to Rahul (Tech). He says: "We need responsive web app, payment gateway integration, inventory management system." ASK: "Can you explain?" Rahul: "Website that works on phones (most farmers have phones, not computers). System to accept payments (UPI, cards). System to track what farmers have in stock." You understand. Listen to Ankit (Economics). He says: "We need to analyze MSP, subsidy structures, market distortions." ASK: "Explain?" Ankit: "Government sets minimum price for crops (MSP). We need to ensure our prices are competitive with MSP." You understand. Translation enables understanding.',
            '4. Week 2 - Find Common Goal (Day 10, 2 hours): Team has different priorities. Priya: "Help farmers get better prices." Rahul: "Build scalable platform." Ankit: "Create sustainable economic model." You: "Reach 1000 customers." Competing priorities? NO. Find COMMON GOAL: "Create sustainable business that helps 100 farmers earn ₹50K/month (2× current income) by selling directly to 1000 urban customers, enabled by technology platform, supported by favorable policy." Now align: (1) Help farmers (Priya priority) = core mission, (2) Scalable platform (Rahul) = enables reaching 100 farmers + 1000 customers, (3) Sustainable economics (Ankit) = ensures long-term viability, (4) Reach customers (your priority) = generates revenue for farmers. ALL priorities serve common goal. Team is aligned.',
            '5. Week 3-4 - Integrate Perspectives into Solution (Days 15-28, 25 hours): Create integrated business model. (1) Agriculture perspective (Priya): Focus on seasonal crops (tomatoes, onions, leafy greens). Ensure quality (organic certification). Solve post-harvest losses (partner with cold storage). (2) Technology perspective (Rahul): Build mobile-first platform (farmers use phones). Simple interface (low-tech literacy). UPI payments (farmers prefer UPI). Inventory system (track what is available). (3) Economics perspective (Ankit): Price 20% above MSP (farmers earn more), 10% commission (sustainable for platform), government subsidies (apply for agricultural startup grants). (4) Business perspective (You): Target urban consumers (willing to pay premium for fresh, organic), social media marketing (Instagram, WhatsApp groups), direct delivery (farmer → customer, no middlemen). Integrated solution is BETTER than any single perspective. All expertise contributes.',
            '6. Week 5-6 - Present Integrated Solution (Days 29-42, 15 hours): Create presentation. Each person presents their domain: Priya (agriculture challenges + solutions), Rahul (technology platform), Ankit (economic model + policy), You (business model + marketing). But presentation is INTEGRATED (not 4 separate presentations). You connect all parts: "Priya identified farmer challenges (low prices, middlemen). Rahul designed platform to solve this (direct sales). Ankit ensured economic sustainability (pricing, commission, subsidies). I designed go-to-market (reach 1000 customers). Together, we created sustainable business that helps 100 farmers earn 2× income." Present to professor. Professor: A grade! "Excellent interdisciplinary work! You integrated agriculture + technology + economics + business. This is how real-world problems are solved - cross-functional collaboration." Team celebrates. You became bridge builder.',
            '7. Week 6 - Reflect on Cross-Functional Collaboration (Day 43, 2 hours): Team reflects. What made collaboration successful? (1) "We learned basics of each other domains (could communicate)." (2) "We translated jargon (everyone understood)." (3) "We aligned around common goal (not competing priorities)." (4) "We respected all perspectives (integrated solution)." (5) "We focused on shared outcome (helping farmers, not individual department wins)." You document learnings. Apply to future cross-functional teams. You became cross-functional collaboration expert.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not learning other domains: Staying in your silo (only business). Result: Cannot communicate with Priya (agriculture), Rahul (tech), Ankit (economics). Solution: Spend 15 hours learning basics of all 3 domains.',
            '• Using jargon without translation: "We need to optimize CAC" without explaining. Result: Others confused, communication breaks down. Solution: Always translate (CAC = cost to get 1 customer = ₹500).',
            '• Fighting for your priority: "Customer acquisition is most important!" Result: Conflict, no alignment. Solution: Find common goal, align all priorities around it.',
            '• Not respecting other perspectives: "Priya is wrong. Bug fixing is not important." Result: Priya disengages, team loses her expertise. Solution: Respect all perspectives, integrate them.',
            '• Territorial thinking: "MY department vs YOUR department." Result: Silos, competition, poor collaboration. Solution: "OUR shared goal" (one team, not separate departments).'
          ],
          successCriteria: [
            '✅ You learn basics of 3 other domains (agriculture, technology, economics - 15 hours total)',
            '✅ You translate your business jargon (explain CAC, LTV, ROI in simple terms)',
            '✅ You ask for translation from others (understand agriculture, tech, economics terms)',
            '✅ You find common goal (help 100 farmers earn 2× income through sustainable business)',
            '✅ You align all priorities around common goal (agriculture + tech + economics + business)',
            '✅ You integrate perspectives into solution (all expertise contributes)',
            '✅ Team delivers excellent project (A grade, professor praises interdisciplinary work)',
            '✅ You become bridge builder (can work across any domains)'
          ]
        },
        professional: {
          title: 'Professional Cross-Functional Mastery',
          description: 'You are intern at e-commerce startup. Cross-functional project: "Launch New Product Category (Handmade Crafts)." Team: You (Marketing), Priya (Product Manager), Rahul (Engineering), Ankit (Operations), Sarah (Customer Support). Week 1: Different priorities, jargon, silos. CEO: "Deliver in 6 weeks." Goal: Bridge functions, deliver successful launch.',
          instructions: [
            '1. Week 1 - Learn Other Functions (Days 1-7, 20 hours): You know Marketing. Learn basics of 4 other functions. (1) Product Management (5 hours): What does PM do? (Define product, prioritize features, coordinate teams.) Key terms: Product roadmap, user stories, MVP, product-market fit. (2) Engineering (5 hours): What does engineering do? (Build product, write code, deploy, maintain.) Key terms: Frontend, backend, API, database, deployment. (3) Operations (5 hours): What does operations do? (Manage supply chain, inventory, logistics, fulfillment.) Key terms: Inventory, suppliers, warehouses, delivery, fulfillment. (4) Customer Support (5 hours): What does support do? (Help customers, resolve issues, gather feedback.) Key terms: Tickets, resolution time, customer satisfaction, feedback loops. Result: You can communicate with all functions. You understand their work, challenges, priorities.',
            '2. Week 1 - First Cross-Functional Meeting: Build Shared Language (Day 5, 2 hours): Meeting: Each function presents priorities. You (Marketing): "We need to acquire 1000 customers in Month 1." Priya (PM): "We need to launch with 10 core features." Rahul (Engineering): "We need 4 weeks to build." Ankit (Operations): "We need 50 suppliers onboarded." Sarah (Support): "We need FAQ and help docs ready." Different priorities, different jargon. You facilitate: "Let us create shared vocabulary. I will explain marketing terms. Others explain your terms." You explain: CAC, conversion rate, customer journey. Priya explains: MVP, user stories, product roadmap. Rahul explains: Frontend, backend, API. Ankit explains: Inventory, fulfillment, suppliers. Sarah explains: Tickets, resolution time, feedback. Create team glossary in Notion (20 key terms from all functions). Everyone learns. Shared language is built.',
            '3. Week 2 - Align Around Common Goal (Day 8, 3 hours): Different priorities cause tension. You want customer acquisition. Priya wants feature completeness. Rahul wants more build time. Ankit wants more suppliers. Sarah wants better documentation. You facilitate: "What is our COMMON GOAL?" Team discusses. COMMON GOAL: "Successfully launch Handmade Crafts category: 50 suppliers, 500 products, 1000 customers, ₹5L GMV in Month 1, 8/10 customer satisfaction." Now align: How do ALL priorities serve this? (1) Customer acquisition (you) → Get 1000 customers, (2) Core features (Priya) → Enable shopping experience, (3) Build time (Rahul) → Deliver working product, (4) Suppliers (Ankit) → Provide 500 products, (5) Documentation (Sarah) → Support customers, ensure satisfaction. Create integrated roadmap: Week 1-2 (build core features), Week 3 (onboard suppliers), Week 4 (create documentation), Week 5-6 (customer acquisition). Everyone aligned.',
            '4. Week 2-4 - Bridge Communication in Meetings (Days 8-28, 15 hours): Weekly cross-functional meetings. You bridge communication. When Priya (PM) says: "We need to prioritize user stories based on MoSCoW method," you translate: "We need to decide which features are Must-have (critical), Should-have (important), Could-have (nice), Won\'t-have (later). Let us prioritize." Team understands. When Rahul (Engineering) says: "Frontend is blocked on API endpoints," you ask: "Can you explain?" Rahul: "Website needs data from server. Server is not ready. Website is stuck." You translate to Priya: "Rahul needs backend ready before he can finish frontend. Can we prioritize backend?" Priya: "Yes, I will talk to backend team." You are BRIDGE between functions. You translate, clarify, connect. Result: Smooth communication, no confusion, faster progress.',
            '5. Week 3-5 - Respect All Expertise (Days 15-35, 20 hours): Conflict: You (Marketing) want to launch with 100 products. Ankit (Operations): "Impossible! We can only onboard 20 suppliers in 2 weeks. 20 suppliers = 200 products max." You think: "Ankit is being difficult." But you RESPECT his expertise. You ask: "Ankit, why is 100 products difficult?" Ankit: "Each supplier needs: (1) Verification (check quality, certifications), (2) Onboarding (train on platform, upload products), (3) Logistics setup (delivery, packaging). This takes 4 hours/supplier. 20 suppliers = 80 hours = 2 weeks. 50 suppliers = 200 hours = 5 weeks." You understand. You respect: "You are right. Operations is complex. What if we launch with 200 products (20 suppliers), then add 300 more in Month 2 (30 more suppliers)? Phased approach." Ankit: "This works!" Respecting expertise leads to better decision (phased launch > rushed launch with operational failures).',
            '6. Week 5-6 - Execute Integrated Launch (Days 35-42, 30 hours): All functions deliver. Rahul (Engineering): Platform is built (working, fast, mobile-friendly). Ankit (Operations): 20 suppliers onboarded, 200 products listed, logistics ready. Sarah (Support): FAQ created, help docs ready, support team trained. Priya (PM): Features prioritized (core features done, nice-to-haves in Month 2). You (Marketing): Customer acquisition campaign ready (Instagram ads, influencer partnerships, WhatsApp groups). Week 6: Launch! Results: 1200 customers (exceeded 1000 goal!), ₹6L GMV (exceeded ₹5L goal!), 8.5/10 satisfaction. CEO: "Excellent cross-functional collaboration! Marketing, Product, Engineering, Operations, Support - all delivered. This is how great teams work." Team celebrates together.',
            '7. Week 6 - Reflect and Document (Day 43, 3 hours): Team reflects. You ask: "What made our cross-functional collaboration successful?" Team shares: (1) "We learned each other domains (could communicate)." (2) "We translated jargon (everyone understood)." (3) "We aligned around common goal (successful launch)." (4) "We respected all expertise (integrated perspectives)." (5) "We focused on shared outcome (celebrated together, not separate departments)." You document: "Cross-Functional Collaboration Best Practices." Present to CEO. CEO: "Excellent. Share this with all teams." You present at company all-hands. 5 teams adopt your practices. You became bridge builder. CEO offers full-time role: "We need bridge builders like you."',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not learning other domains: Staying in business silo. Result: Cannot communicate with tech, operations, support. Solution: Spend 20 hours learning basics of all functions.',
            '• Using jargon without translation: "Optimize CAC" without explaining. Result: Others confused. Solution: Always translate (CAC = cost to get 1 customer).',
            '• Not respecting operations expertise: "Ankit is being difficult about suppliers." Result: Rushed launch, operational failures. Solution: Respect his expertise, understand constraints, find phased solution.',
            '• Territorial thinking: "Marketing is most important function." Result: Other functions feel undervalued. Solution: All functions are equally important (marketing + product + engineering + operations + support = successful launch).',
            '• Not celebrating together: "MY marketing campaign got 1200 customers!" Result: Other functions feel unappreciated. Solution: "WE launched successfully! All functions contributed!"'
          ],
          successCriteria: [
            '✅ You learn basics of 4 other functions (product, engineering, operations, support - 20 hours)',
            '✅ You translate your marketing jargon (explain in simple terms)',
            '✅ You ask for translation from all functions (understand their work, challenges, priorities)',
            '✅ You align team around common goal (successful launch: 50 suppliers, 500 products, 1000 customers, ₹5L GMV)',
            '✅ You respect all expertise (integrate perspectives, find phased solution for operations constraints)',
            '✅ Team delivers successful launch (1200 customers, ₹6L GMV, 8.5/10 satisfaction)',
            '✅ You document and share practices (5 teams adopt, CEO recognizes you)',
            '✅ CEO offers full-time role as bridge builder'
          ]
        },
        personal: {
          title: 'Personal Cross-Functional Wisdom',
          description: 'You want to organize "College Fest" (3-day event, 5000 students, 20 events). You need diverse team: Event management, sponsorships, marketing, logistics, finance. Week 1: Different backgrounds, priorities. Goal: Bridge all functions, deliver successful fest.',
          instructions: [
            '1. Week 1 - Recruit Cross-Functional Team (Days 1-5, 10 hours): Recruit 5 people with different expertise. (1) Priya (Event Management major): Organize events, coordinate speakers, manage schedule. (2) Rahul (Sales background): Get sponsorships (₹5L target). (3) Ankit (Marketing club member): Promote fest, get 5000 students. (4) Sarah (Operations volunteer): Manage logistics (venue, food, setup). (5) Meera (Accounting student): Manage ₹5L budget, track expenses. Diverse team formed. Different expertise, different priorities, different languages (event jargon, sales jargon, marketing jargon, operations jargon, finance jargon). You need to bridge.',
            '2. Week 1 - Learn Basics of All Functions (Days 3-7, 15 hours): You know general coordination. Learn basics of 5 functions. (1) Event Management (3 hours): What goes into organizing event? (Venue, speakers, schedule, AV equipment, registration.) (2) Sponsorships (3 hours): How to get sponsors? (Pitch deck, sponsor benefits, negotiation.) (3) Marketing (3 hours): How to promote? (Social media, posters, word-of-mouth, influencers.) (4) Logistics (3 hours): What is logistics? (Venue setup, food, transport, volunteers.) (5) Finance (3 hours): How to manage budget? (Track income, expenses, ensure break-even.) Result: You can communicate with all 5 functions. You understand their work.',
            '3. Week 2 - First Team Meeting: Translate and Align (Day 8, 3 hours): Each person shares priorities. Priya: "I need ₹2L for speakers." Rahul: "I need to confirm sponsors before we commit to expenses." Ankit: "I need 2 weeks for marketing (cannot promote until we have confirmed events)." Sarah: "I need to book venue now (only 1 available)." Meera: "We have ₹0 now. Cannot spend ₹2L." Competing priorities, tension. You facilitate: (1) Translate: Explain each person concern in simple terms. (2) Find common goal: "Organize successful fest: 5000 students, 20 events, ₹5L sponsorships, break-even budget, 8/10 satisfaction." (3) Align: "How do all priorities serve this goal?" (4) Sequence: Week 1 (Rahul gets sponsors = ₹5L), Week 2 (Sarah books venue, Priya books speakers using sponsor money), Week 3-4 (Ankit promotes with confirmed events), Week 5-6 (Execute fest). Everyone aligned. Integrated plan.',
            '4. Week 2-4 - Bridge Communication (Days 8-28, 20 hours): Weekly meetings. You bridge. When Rahul (Sponsorships) says: "I need deliverables for sponsors," you ask: "What are deliverables?" Rahul: "What sponsors get in return (logo on posters, booth at fest, social media mentions)." You translate to Ankit (Marketing): "Rahul needs us to put sponsor logos on posters and mention them on Instagram." Ankit: "Got it!" When Sarah (Logistics) says: "I need run-of-show," you ask: "What is that?" Sarah: "Minute-by-minute schedule for fest day (9 AM: Registration, 10 AM: Inauguration, 11 AM: Event 1, etc.)." You translate to Priya (Events): "Sarah needs detailed schedule." Priya creates it. You are bridge. You connect all functions.',
            '5. Week 4-6 - Execute Fest (Days 22-42, 40 hours): All functions deliver. Rahul: ₹6L sponsorships (exceeded ₹5L goal!). Sarah: Venue booked, logistics ready (food, setup, volunteers). Priya: 20 events confirmed (speakers, schedule, AV). Ankit: 6000 students registered (exceeded 5000 goal!). Meera: Budget managed (₹6L income, ₹5L expenses, ₹1L profit). Week 6: Execute fest (3 days, 6000 students, 20 events). Results: 8.5/10 satisfaction (student feedback), ₹1L profit, college principal praises: "Best fest in 5 years! Excellent cross-functional teamwork!" Team celebrates together. You reflect: "We bridged all functions. We delivered successful fest. We became bridge builder."',
            '6. Week 6 - Reflect and Share (Day 43, 3 hours): Team reflects. What worked? (1) "We learned each other functions." (2) "We translated jargon." (3) "We aligned around common goal (successful fest)." (4) "We respected all expertise." (5) "We celebrated together (not separate functions)." You document learnings. Share with 3 other college clubs. Help them organize events using cross-functional collaboration. You became bridge builder. College nominates you for "Student Organizer of the Year." You win. Your LinkedIn post: "How We Organized 6000-Student Fest Through Cross-Functional Collaboration" gets 3K likes. Event management companies message you: "Join us." You have 2 job offers.',
            '7. Month 3 - Apply to Next Fest (Day 90): Next year fest planning starts. You recruit new team (5 people, different functions). You teach them: "Cross-functional collaboration requires: Learn other domains, translate jargon, align around common goal, respect all expertise, focus on shared outcomes." New team applies your framework. Next fest: 8000 students, 25 events, ₹8L sponsorships, ₹2L profit. Even better! Your framework works. You created replicable process. You became cross-functional collaboration expert.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not learning other functions: Only knowing coordination, not understanding event management, sponsorships, marketing, logistics, finance. Result: Cannot bridge. Solution: Learn basics of all 5 functions (15 hours).',
            '• Not translating: Using your jargon without explaining. Result: Others confused. Solution: Always translate (explain in simple terms).',
            '• Not aligning priorities: Letting Priya want ₹2L for speakers while Meera says "We have ₹0." Result: Conflict. Solution: Align (get sponsors first, then spend).',
            '• Not respecting expertise: "Sarah is overcomplicating logistics." Result: Sarah feels disrespected. Solution: Respect her expertise, understand complexity.',
            '• Taking credit: "I organized fest." Result: Team feels unappreciated. Solution: "WE organized fest. All functions contributed." (Celebrate together.)'
          ],
          successCriteria: [
            '✅ You recruit cross-functional team (5 people, 5 different functions)',
            '✅ You learn basics of all 5 functions (event, sponsorships, marketing, logistics, finance - 15 hours)',
            '✅ You build shared language (team glossary with 20 key terms from all functions)',
            '✅ You align team around common goal (successful fest: 5000 students, 20 events, ₹5L sponsorships)',
            '✅ You bridge communication in meetings (translate between functions, connect all work)',
            '✅ Team delivers successful fest (6000 students, ₹6L sponsorships, ₹1L profit, 8.5/10 satisfaction)',
            '✅ You document and share practices (3 clubs adopt, college recognizes you, win award)',
            '✅ You get job offers and become bridge builder (2 offers, LinkedIn post viral)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🌉 Translate Between Domains: You learn basics of other domains (tech, design, operations, finance - 10-20 hours each). You can now COMMUNICATE across functions. When you say "CAC," you EXPLAIN: "Customer Acquisition Cost - cost to get 1 customer, currently ₹500." When Priya says "microservices," you ASK: "Can you explain?" She explains: "Breaking app into small parts." You understand. Translation enables: Understanding, collaboration, better decisions. You understand: Cross-functional work requires SHARED LANGUAGE (not just your domain language).',
        '🎯 Align Around Common Goals: You find common goal that transcends departments. Not "MY priority vs YOUR priority." But "How do ALL priorities serve SHARED goal?" Example: Common goal = "Launch successful platform (1000 customers, ₹10L GMV)." Your priority (customer acquisition) serves this. Priya priority (bug fixing) serves this. Rahul priority (UI) serves this. ALL priorities aligned. Result: Integrated roadmap, no conflict, collaboration. You understand: Competing priorities are normal. Align them around common goal.',
        '🤝 Respect All Expertise: You respect different perspectives. Business perspective (need customers) + Tech perspective (need working app) = BETTER decision (fix bugs THEN get customers). You do not dismiss others: "Priya is wrong." You integrate: "Both are right. How do we combine?" Respecting expertise leads to: Better decisions (integrated solution > single perspective), stronger relationships (people feel valued), better collaboration (everyone contributes). You understand: All expertise is valuable (business, tech, design, operations, finance). Integrate perspectives.',
        '🗣️ Bridge Communication Gaps: You are BRIDGE between functions. When Priya says "Frontend is blocked on API endpoints," you translate to PM: "Priya needs backend ready before she can finish frontend." PM understands, prioritizes backend. You translate YOUR jargon (explain CAC, LTV, ROI in simple terms). You ask for THEIR translation ("Can you explain microservices?"). You use analogies (API = waiter taking order to kitchen). Result: Smooth communication, no confusion, faster progress. You understand: Bridge builders are valuable (enable collaboration across functions).',
        '🎪 Focus on Shared Outcomes: You optimize for SHARED outcome (successful product), not individual outcome (my department wins). You celebrate SHARED success: "WE launched successfully! All functions contributed!" (Not: "MY marketing got 1000 customers.") Result: Team alignment, integrated product, shared celebration, no territorial thinking. You understand: Cross-functional team wins as ONE team (not separate departments). Optimize for shared success. Celebrate together.'
      ],
      improvements: [
        '📚 Learn MORE Domains Deeply: You learned basics of other domains (10-20 hours each). Good. But go DEEPER. (1) Take full course on tech (50 hours: Learn coding basics, understand how apps are built, practice building simple app). (2) Take course on operations (50 hours: Learn supply chain, logistics, inventory management). (3) Take course on finance (50 hours: Learn accounting, financial modeling, budgeting). Deeper learning enables: (1) Better communication (understand nuances, not just basics), (2) Better decisions (anticipate technical/operational/financial constraints), (3) Career flexibility (can work across functions, not stuck in one domain). Example: You learn coding → You can prototype ideas yourself → Faster iteration. Invest 150 hours over 6 months. Become T-shaped professional (deep in business, broad in tech/operations/finance).',
        '🎯 Translate Even Better: You translate jargon (explain CAC, ask for microservices explanation). Good. But improve: (1) Use MORE analogies (make complex concepts simple: "API is like waiter," "Database is like filing cabinet," "Frontend is like restaurant decor, backend is like kitchen"). (2) Use visual aids (draw diagrams: customer journey funnel, technical architecture, supply chain flow). (3) Create team glossary (Notion page with 50 key terms from all functions, everyone contributes). (4) Practice explaining to non-experts (explain your work to friend who knows nothing about business - if they understand, your translation is good). Better translation = better collaboration. Practice: Explain 1 complex concept/day in simple terms.',
        '🔗 Build Cross-Functional Relationships: You work with Priya (Tech), Rahul (Design), Ankit (Operations). But do you know them as PEOPLE? Improve: (1) Have coffee chats (30 mins, 1-on-1, learn about them: What got them into tech? What do they enjoy? What are their goals?), (2) Appreciate expertise ("Priya, your coding skills are impressive. Can you teach me basics?"), (3) Ask for input ("Priya, from tech perspective, is this marketing campaign feasible?"), (4) Support their goals ("Priya wants to learn business? I will teach her marketing basics."). Strong relationships enable: Better communication, more collaboration, mutual support. Weak relationships create: Silos, conflict, territorial thinking. Build relationships across functions. Cross-functional collaboration requires cross-functional friendships.',
        '📊 Measure Cross-Functional Collaboration Quality: You implement cross-functional practices. But do you measure effectiveness? Improve: Survey team quarterly (anonymous): (1) Communication clarity (1-10: Do we understand each other?), (2) Alignment (1-10: Are we aligned on goals?), (3) Respect (1-10: Do we value all expertise?), (4) Collaboration quality (1-10: Do we work well together?), (5) Shared outcomes (1-10: Do we celebrate together?). Track over time. Week 1: Communication 4/10, Alignment 3/10, Respect 5/10. Month 3: Communication 9/10, Alignment 9/10, Respect 9/10. Measurement shows: Your practices work. Use data to improve: "Communication is 9/10 (excellent) but Respect is 7/10 (good, can be better). Need more appreciation of expertise." Measure, improve, repeat.',
        '🎓 Teach Cross-Functional Collaboration: You mastered cross-functional collaboration. Now TEACH others. (1) Create workshop: "Cross-Functional Collaboration Mastery" (2 hours). Content: Translate between domains, align around common goals, respect all expertise, bridge communication, focus on shared outcomes. Deliver to 3 teams. (2) Mentor junior team members (1-on-1, teach them how to work across functions). (3) Document best practices (Notion page: "Our Cross-Functional Collaboration Guide"). (4) Present at company all-hands ("How We Improved Cross-Functional Collaboration"). Teaching solidifies your expertise. Helps others. Builds your reputation as bridge builder. Career opportunities open (cross-functional leadership roles, operations roles, general management).'
      ],
      nextSteps: [
        '📚 Take Courses in Other Domains: (1) Tech course (50 hours: Codecademy, Coursera, YouTube - learn coding basics, build simple app), (2) Operations course (50 hours: Learn supply chain, logistics, inventory management), (3) Finance course (50 hours: Learn accounting, financial modeling, budgeting). Total: 150 hours over 6 months. Become T-shaped professional (deep in business, broad in tech/operations/finance). Apply: Use tech knowledge to prototype ideas, use operations knowledge to anticipate constraints, use finance knowledge to model business. Result: Better cross-functional collaboration, career flexibility, more opportunities.',
        '🧠 Practice 20 Cross-Functional Projects: Work on 20 cross-functional projects over 2 years (internships, college projects, club initiatives, startup teams). Track: (1) Functions involved (business + tech, business + operations, business + tech + design + operations), (2) Challenges faced (jargon barriers, competing priorities, silos), (3) Solutions applied (translate, align, respect, bridge, focus on shared outcomes), (4) Outcomes (project success, team satisfaction, learnings). After 20 projects, you will master cross-functional collaboration. You will handle any team (any functions, any complexity).',
        '📊 Create Cross-Functional Collaboration Framework: Document your expertise. Create framework: "Cross-Functional Collaboration Best Practices." Content: (1) Learn basics of other domains (10-20 hours each), (2) Translate jargon (explain in simple terms, use analogies, visual aids), (3) Align around common goals (find shared goal, align all priorities), (4) Respect all expertise (integrate perspectives, value contributions), (5) Bridge communication (translate between functions, connect work), (6) Focus on shared outcomes (optimize for shared success, celebrate together). Share with 5 teams. Measure adoption. Iterate based on feedback. Your framework becomes company standard. You become recognized expert.',
        '🎓 Teach Cross-Functional Collaboration Course: Create online course: "Cross-Functional Collaboration for B.Com Students" (3 hours, ₹1000). Content: (1) Module 1: Translate between domains (learn basics, explain jargon, ask for translation), (2) Module 2: Align around common goals (find shared goal, align priorities, create integrated roadmap), (3) Module 3: Respect all expertise (value perspectives, integrate solutions, build relationships), (4) Module 4: Bridge communication (translate, use analogies, visual aids, team glossary), (5) Module 5: Focus on shared outcomes (optimize for shared success, celebrate together). Sell to 200 students = ₹2L revenue. Help 200 students master cross-functional work. Build reputation as expert.',
        '👥 Consult on Cross-Functional Collaboration: Offer consulting to startups, small businesses, college teams. Service: "I help teams improve cross-functional collaboration. ₹5000/team (5 hours). Process: (1) Audit current collaboration (identify jargon barriers, competing priorities, silos), (2) Propose framework (translate, align, respect, bridge, focus on shared outcomes), (3) Implement (train team, create team glossary, align on common goal), (4) Measure impact (collaboration quality, project success, before/after). Guarantee: 40% improvement in collaboration quality or money back." Month 1: 3 clients, ₹15K. Month 6: 10 clients, ₹50K. You help 10 teams transform collaboration. You earn ₹50K. You build reputation. Career opportunities open (operations roles, general management, cross-functional leadership).'
      ]
    },
    badge: { name: 'Bridge Builder', emoji: '🔀', description: 'Expert in cross-functional collaboration' },
    shareMessage: 'Just mastered cross-functional teamwork! 🔀 #Collaboration #Teamwork'
  },
  {
    id: 'team-building',
    title: 'Team Building',
    emoji: '🏗️',
    context: 'professional' as const,
    discover: {
      scenario: "Startup Marketing team, 5 members. Week 1: Everyone alone. Zero meetings, zero connection. Week 2: Project fails. Manager: '5 talented individuals, but not a TEAM. No trust, no identity.' Week 3: You assigned to build team.",
      problemExplanation: [
        "Zero trust: Ask Priya 'Help?' She: 'I'm busy.' Ask Rahul 'Review?' He: 'No time.' Isolated, no one helps",
        "Work silos: You = social media, Priya = email, Rahul = ads. Deadline: nothing fits. Different messages, audiences. Failed",
        "No identity: No team name, values, goals, rituals, story. Just 'marketing team.' No commitment, pride, or cohesion",
        "Weak bonds: Priya struggling (family issue)—no one notices. You make mistake—Rahul: 'How'd you miss this?' No support"
      ],
      solutionApproach: [
        "Build trust: Vulnerability + Reliability. You: 'I made typo mistake, felt terrible, learned double-check.' Others share struggles. Team supports. Deliver on promises",
        "Shared experiences: Friday lunches (no work talk), quarterly offsites (escape room, hiking), monthly challenges, volunteer together. Create memories + identity",
        "Celebrate wins: Campaign success (1M impressions)—'WE did this!' Pizza, music, stories. Celebrate big + small. Morale + motivation",
        "Team identity: Name 'Growth Hackers,' values 'Experiment, learn, support, celebrate,' goals '10M impressions, 8/10 satisfaction,' rituals (Monday kickoff, Friday wins). 5 individuals → 1 team"
      ]
    },
    video: {
      title: 'Team Architect: Transform 5 Individuals into 1 High-Performing Team',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR TEAM IS NOT A TEAM

"You join startup. Marketing team, 5 members. Week 1: Everyone works alone. No meetings, no collaboration, no connection. You feel isolated. Week 2: Project fails. Manager: 'Why?' Team: Silence. Nobody helped each other. Worked in silos. Manager: 'We have 5 talented INDIVIDUALS, but not a TEAM. No trust, no connection, no shared identity.' Week 3: Manager assigns you: 'Build this team. Transform 5 individuals into 1 high-performing team.' By the end of this video, you will master team building. Let us transform this team."

[0:45-2:15] BUILD TRUST THROUGH VULNERABILITY + RELIABILITY

"Week 1: Team has NO TRUST. People do not open up. Do not ask for help. Do not share struggles.

PROBLEM: No vulnerability (people hide mistakes, fears, struggles). No reliability (people do not deliver on commitments).

SOLUTION: Trust = Vulnerability + Reliability.

VULNERABILITY: Share your struggles, fears, mistakes. Be HUMAN.

Team meeting. You say: 'I made mistake last week (campaign typo). I felt terrible. I was scared you would judge me. But I learned: Always double-check. I will not make this mistake again.'

Team sees: You are HUMAN (not perfect robot). You are VULNERABLE (willing to admit mistakes).

Trust begins.

Others share:
Priya: 'I am struggling with personal issue (family problem). I am distracted.'
Team supports: 'We are here for you. Take time if needed.'

Rahul: 'I feel overwhelmed (too many projects). I am scared to say no.'
Team helps: 'Let us redistribute work.'

Vulnerability creates CONNECTION.

RELIABILITY: Do what you say. Be consistent.

You promise to help Priya. You help.
You promise to review Rahul work. You review.
You show up on time. You deliver on commitments.

Team sees: You are RELIABLE (can be trusted).

Trust deepens.

Vulnerability + Reliability = TRUST.

Trust enables collaboration."

[2:15-3:45] CREATE SHARED EXPERIENCES (Spend Time Together)

"Week 3: Team works together. But do not CONNECT (do not know each other as humans).

PROBLEM: No shared experiences. Only work interactions.

SOLUTION: Create SHARED EXPERIENCES (moments of togetherness).

1. TEAM LUNCHES (Weekly, Friday, 1 hour, casual, no work talk)
   Get to know each other as HUMANS.
   'Where are you from? What hobbies? What are your goals?'
   Team learns: Priya loves painting. Rahul plays guitar. Ankit is training for marathon.
   Connection builds.

2. TEAM OFFSITES (Quarterly, 1 day, outside office, fun activities)
   Escape room, hiking, cooking class.
   Team has FUN together. Creates MEMORIES.
   'Remember when Rahul panicked in escape room?'
   Shared stories build bond.

3. TEAM CHALLENGES (Monthly, work challenge)
   'Create best campaign in 1 week.'
   Compete as TEAM vs other teams.
   Celebrate together when you win.
   Shared achievement builds pride.

4. TEAM VOLUNTEERING (Quarterly, 1 day)
   Teach at school, clean park, help NGO.
   Team does GOOD together.
   Shared purpose builds meaning.

Shared experiences create:
- Connection (spend time together, know each other)
- Memories (shared stories)
- Identity (we are team that does things together)

Team feels like TEAM (not just coworkers)."

[3:45-5:00] CELEBRATE WINS + SUPPORT THROUGH STRUGGLES

"Week 8: Campaign succeeds (1M impressions, 10K conversions).

CELEBRATE TOGETHER:

Team meeting. You say: 'WE did this! Priya (email), Rahul (ads), Ankit (content), Sarah (analytics), Me (social media) - ALL contributed. This is TEAM win!'

Order pizza. Play music. Share stories: 'What was your favorite moment?'

Priya: 'When Rahul helped me with email subject lines.'
Rahul: 'When Ankit created amazing content.'

Everyone feels:
- Recognized (their contribution mattered)
- Connected (we did this together)
- Proud (we are good team)

Celebrate ALL wins (big and small):
- Campaign success (big win)
- Priya finished difficult project (small win)
- Team hit deadline (small win)

Celebration builds: Morale, identity, motivation.

Week 9: Priya is struggling (family issue).

SUPPORT TOGETHER:

You: 'Priya, take Friday off. We will cover your work.'
Rahul: 'I will handle your email campaign.'
Ankit: 'I will help with your project.'

Priya (tearful): 'Thank you. I feel supported.'

Week 10: You make mistake (campaign has error).

Team supports:
Rahul: 'It is okay. We all make mistakes.'
Ankit: 'Let us fix this together.'
Sarah: 'I will help you create process to prevent this.'

You feel: Supported, safe, grateful.

Support creates: Trust, resilience, loyalty.

Celebrate wins together. Support through struggles together. Build resilient team."

[5:00-6:30] BUILD TEAM IDENTITY (Name, Values, Goals, Rituals, Story)

"Week 11: Team creates IDENTITY.

1. TEAM NAME: 'Growth Hackers'
   (Reflects who we are - focus on growth.)

2. TEAM VALUES: 'Experiment boldly, learn fast, support always, celebrate together.'
   (What we believe in.)

3. TEAM GOALS: 'Achieve 10M impressions, 100K conversions, 8/10 team satisfaction by year-end.'
   (What we are trying to achieve together.)

4. TEAM RITUALS:
   - Monday kickoff (15 mins, share goals for week)
   - Friday wins (15 mins, share 1 win each)
   - Monthly team lunch (1 hour, no work talk)
   - Quarterly offsite (1 day, fun activity)
   (How we work together. Repeated practices that build connection.)

5. TEAM STORY: 'We started as 5 disconnected individuals. We built trust, connection, cohesion. We became high-performing team. We are Growth Hackers.'
   (Our journey. Where we came from, where we are going.)

Identity creates:
- Commitment (people care about team)
- Pride (people are proud to be on team)
- Cohesion (people feel connected)

Team is no longer 5 individuals. Team is ONE unit with shared identity."

[6:30-7:30] MEASURE TEAM HEALTH (Track Progress)

"Week 1: Manager surveys team: 'How do you feel about team?' (1-10 scale.)

Results:
Priya: 3/10 ('I feel alone')
Rahul: 4/10 ('Nobody cares')
Ankit: 3/10 ('I am just doing my job')
Sarah: 2/10 ('I want to leave')
You: 4/10 ('This is not a team')

Average: 3.2/10. LOW MORALE.

Week 12: Survey again.

Results:
Priya: 9/10 ('I love this team')
Rahul: 8/10 ('We support each other')
Ankit: 9/10 ('I am proud to be here')
Sarah: 8/10 ('Best team I have been on')
You: 9/10 ('We are high-performing team')

Average: 8.6/10. HIGH MORALE.

Improvement: +5.4 points!

What changed?
1. Trust (vulnerability + reliability)
2. Connection (shared experiences)
3. Celebration (celebrate wins together)
4. Support (help each other beyond work)
5. Identity (name, values, goals, rituals, story)

Team is TRANSFORMED.

Measure team health regularly. Identify gaps. Improve continuously."

[7:30-8:00] YOUR CHALLENGE (Build Your Team)

"Here is your action step: If you are on team (college, internship, startup, club):

1. Build trust (share vulnerability, be reliable)
2. Create shared experiences (team lunches, offsites, challenges, volunteering)
3. Celebrate wins together (recognize all contributions)
4. Support each other (beyond work - as humans)
5. Build identity (name, values, goals, rituals, story)

RESULT: You transform disconnected individuals into high-performing team.

Strong teams are BUILT, not born. Build intentionally."

[End Screen: "Congratulations! You completed Module 6: Teamwork & Collaboration"]`,
      content: [
        'Build Trust Through Vulnerability + Reliability: Share struggles/fears/mistakes (be human), deliver on commitments (be reliable)',
        'Create Shared Experiences: Team lunches, offsites, challenges, volunteering - spend time together as humans',
        'Celebrate Wins Together: Recognize all contributions (big and small wins), build morale and team identity',
        'Support Each Other Beyond Work: Help when struggling, empathize with personal issues, build resilience',
        'Build Team Identity: Team name, values, goals, rituals, story - create shared identity and commitment',
        'Measure Team Health: Survey team regularly (1-10 scale), track morale, identify gaps, improve continuously',
        'B.Com Applications: Study groups, project teams, internship teams, club teams, startup teams'
      ]
    },
    quiz: {
      title: 'Team Building Quiz',
      questions: [
        {
          id: 26,
          question: 'Team: NO TRUST. Don\'t open up, ask help, share struggles. Build trust. What\'s needed?',
          options: [
            'Time only - builds automatically',
            'VULNERABILITY + RELIABILITY',
            'Perfection - never make mistakes',
            'Hide all errors and struggles'
          ],
          correct: 1,
          explanation: 'Team trust requires VULNERABILITY + RELIABILITY (not just time, perfection, or hiding mistakes). Trust = Vulnerability + Reliability. VULNERABILITY: Share your struggles, fears, mistakes. Be HUMAN. Example: Team meeting, you say: "I made mistake last week (campaign typo). I felt terrible. I was scared you would judge me. But I learned: Always double-check." Team sees: You are human (not perfect robot), you are vulnerable (willing to admit mistakes). Trust begins. Others share: Priya: "I am struggling with personal issue (family problem)." Team supports: "We are here for you." Vulnerability creates CONNECTION. RELIABILITY: Do what you say. Be consistent. You promise to help Priya → You help. You promise to review Rahul work → You review. You show up on time. You deliver on commitments. Team sees: You are RELIABLE (can be trusted). Trust deepens. Vulnerability + Reliability = TRUST. Trust enables collaboration. In B.Com teams (study groups, project teams, internship teams), build trust by being vulnerable (share struggles) and reliable (deliver on commitments). Without trust, team cannot collaborate effectively.'
        },
        {
          id: 27,
          question: 'Team works together but feels disconnected. Don\'t know each other as humans. Effective team building?',
          options: [
            'Work tasks only - focus work',
            'CONNECTION + SHARED IDENTITY',
            'Forcing fun - mandatory activities',
            'Avoid personal - stay professional'
          ],
          correct: 1,
          explanation: 'Effective team building involves creating CONNECTION and SHARED IDENTITY (not just work tasks, forced fun, or avoiding personal topics). CONNECTION: Create shared experiences. (1) Team lunches (weekly, Friday, 1 hour, casual, no work talk - get to know each other as HUMANS: "Where are you from? What hobbies? What are your goals?"), (2) Team offsites (quarterly, 1 day, fun activities - escape room, hiking, cooking class - create MEMORIES), (3) Team challenges (monthly, work challenge - compete as TEAM vs other teams), (4) Team volunteering (quarterly, help NGO - shared purpose). Shared experiences create: Connection (know each other), memories (shared stories), identity (we are team that does things together). SHARED IDENTITY: (1) Team NAME ("Growth Hackers"), (2) Team VALUES ("Experiment boldly, learn fast, support always"), (3) Team GOALS ("Achieve 10M impressions by year-end"), (4) Team RITUALS (Monday kickoff, Friday wins, monthly lunch), (5) Team STORY ("We started as 5 disconnected individuals, became high-performing team"). Identity creates: Commitment (people care about team), pride (people are proud), cohesion (people feel connected). In B.Com teams, build connection (spend time together as humans) and identity (name, values, goals, rituals). Team building transforms work group into cohesive team.'
        },
        {
          id: 28,
          question: 'Successful campaign: 1M impressions, 10K conversions. Some: "No time, next project." Why celebrate wins?',
          options: [
            'Show off - make others jealous',
            'Build MORALE + TEAM IDENTITY',
            'Reward only top performer',
            'Waste time - not productive'
          ],
          correct: 1,
          explanation: 'Celebrate team wins to build MORALE and TEAM IDENTITY (not to show off, create internal competition, or waste time). When team succeeds (campaign: 1M impressions, 10K conversions), CELEBRATE TOGETHER. Team meeting: "WE did this! Priya (email), Rahul (ads), Ankit (content), Sarah (analytics), Me (social media) - ALL contributed. This is TEAM win!" Order pizza, play music, share stories: "What was your favorite moment?" Everyone feels: (1) RECOGNIZED (their contribution mattered), (2) CONNECTED (we did this together), (3) PROUD (we are good team). Celebration builds: (1) MORALE (people feel good, energized, motivated), (2) IDENTITY (we are winning team, we celebrate together), (3) MOTIVATION (people want more wins). Celebrate ALL wins (big AND small): Campaign success (big win), Priya finished difficult project (small win), team hit deadline (small win). Frequent celebration maintains high morale. In B.Com teams, celebrate every win (project completion, good grade, successful presentation). Recognition builds morale. Shared celebration builds identity. Winning culture motivates excellence. Teams that celebrate together perform better (higher morale = higher performance).'
        },
        {
          id: 29,
          question: 'Priya struggling (family issue - stressed, sad). Team notices. How support team members?',
          options: [
            'Do all their work',
            'Offer HELP + ENCOURAGEMENT',
            'Criticize - "Not performing well"',
            'Ignore - "Not my problem"'
          ],
          correct: 1,
          explanation: 'Support team members by offering HELP and ENCOURAGEMENT (not doing all their work, criticizing, or ignoring). Priya is struggling (family issue - stressed, distracted, sad). Team supports: You: "Priya, take Friday off. We will cover your work." Rahul: "I will handle your email campaign." Ankit: "I will help with your project." Sarah: "Let me know if you need anything." Priya (tearful): "Thank you. I feel supported." Support creates: (1) TRUST (people know team will help when they struggle), (2) RESILIENCE (team can handle adversity together), (3) LOYALTY (people do not want to leave supportive team). Support goes BEYOND WORK. Care about team members as HUMANS (not just work output). When someone struggles (personal issue, work overwhelm, mistake), support them. When YOU make mistake (campaign has error), team supports: "It is okay. We all make mistakes. Let us fix this together." You feel: Supported (not alone), safe (can make mistakes), grateful (team has my back). In B.Com teams, support each other through: (1) Personal struggles (family issues, health problems, stress), (2) Work challenges (difficult projects, tight deadlines, mistakes), (3) Academic pressure (exams, assignments, presentations). Supportive teams are resilient teams. Resilient teams perform better under pressure.'
        },
        {
          id: 30,
          question: 'Team: NO IDENTITY (no name, values, goals, rituals). Disconnected. What does identity create?',
          options: [
            'Division - us vs them',
            'COHESION + COMMITMENT',
            'Exclusivity - excludes others',
            'Problems - unnecessary complexity'
          ],
          correct: 1,
          explanation: 'Team identity creates COHESION and COMMITMENT (not division, exclusivity, or problems). Team creates IDENTITY: (1) Team NAME: "Growth Hackers" (reflects who we are - focus on growth), (2) Team VALUES: "Experiment boldly, learn fast, support always, celebrate together" (what we believe in), (3) Team GOALS: "Achieve 10M impressions, 100K conversions, 8/10 team satisfaction by year-end" (what we are trying to achieve together), (4) Team RITUALS: Monday kickoff (15 mins, share goals for week), Friday wins (15 mins, share 1 win each), monthly team lunch (1 hour, no work talk), quarterly offsite (1 day, fun activity) - repeated practices that build connection, (5) Team STORY: "We started as 5 disconnected individuals. We built trust, connection, cohesion. We became high-performing team. We are Growth Hackers" (our journey). Identity creates: (1) COHESION (people feel CONNECTED to team - we are ONE unit, not 5 individuals), (2) COMMITMENT (people CARE about team success - not just individual success), (3) PRIDE (people are PROUD to be on team - "I am Growth Hacker"). Result: Team is no longer 5 individuals. Team is ONE unit with shared identity. In B.Com teams, build identity: Create team name (reflects who you are), define values (what you believe), set goals (what you are achieving together), establish rituals (how you work together), craft story (your journey). Identity transforms disconnected individuals into cohesive, committed team.'
        }
      ]
    },
    challenge: {
      title: 'Team Building Challenge',
      description: 'Transform disconnected individuals into high-performing team',
      contexts: {
        academic: {
          title: 'Academic Team Building Excellence',
          description: 'You form study group for B.Com final year (5 students: You, Priya, Rahul, Ankit, Sarah). Week 1: Everyone studies alone. No trust, no connection. Week 2: Group project fails (poor grade). Professor: "You are 5 individuals, not a TEAM." Goal: Build cohesive study team, achieve excellent grades, support each other.',
          instructions: [
            '1. Week 1 - Form Study Team + First Meeting (Days 1-3, 5 hours): Recruit 4 classmates (Priya, Rahul, Ankit, Sarah). First meeting (library, 2 hours). Introductions: "Hi, I am [name]. I am from [city]. My strengths: [subject]. My weaknesses: [subject]. My goal: Score 80%+ in finals. Why I joined: I want supportive study team." Everyone shares. You learn: Priya (strong in Accounting, weak in Economics), Rahul (strong in Finance, weak in Marketing), Ankit (strong in Statistics, weak in Law), Sarah (strong in Economics, weak in Accounting). You (strong in Marketing, weak in Finance). Complementary strengths! Discuss: "What do we want to achieve together?" Agree: "Score 80%+ in finals, support each other, make studying enjoyable." Foundation is set.',
            '2. Week 1-2 - Build Trust Through Vulnerability (Days 3-14, 8 hours): Second meeting. You share vulnerability: "I am scared of Finance. I failed last semester (55%). I feel stupid. But I want to improve. Can you help?" Rahul: "I can teach you Finance! I was scared of Marketing. Can you teach me?" You: "Yes!" Trust begins. Others share: Priya: "I am stressed (family pressure to score 90%+). I feel overwhelmed." Team supports: "We are here for you. Let us study together. We will help you score 90%+." Ankit: "I procrastinate (leave everything to last minute). I feel guilty." Team: "Let us create study schedule together. We will keep you accountable." Sarah: "I feel lonely (no friends in college). I joined for connection." Team: "We are your friends now!" Vulnerability creates CONNECTION. Everyone feels: Safe (can share struggles), supported (team will help), connected (not alone).',
            '3. Week 2-4 - Create Shared Study Experiences (Days 8-28, 30 hours): Establish team rituals. (1) DAILY STUDY SESSIONS (Mon-Fri, 6-9 PM, library, 3 hours): Study together. Teach each other. You teach Marketing to Rahul. Rahul teaches Finance to you. Priya teaches Accounting to Sarah. Everyone learns faster (teaching = best learning). (2) FRIDAY FUN SESSIONS (Friday, 9-10 PM, after study, 1 hour): No study. Just fun. Play games, share jokes, eat snacks. Get to know each other as HUMANS. Learn: Priya loves painting, Rahul plays guitar, Ankit is training for marathon, Sarah loves cooking. Connection deepens. (3) SUNDAY REVIEW SESSIONS (Sunday, 10 AM-2 PM, 4 hours): Review week learning. Quiz each other. Identify gaps. Plan next week. (4) MONTHLY OUTINGS (1 Saturday/month, 4 hours): Escape room, hiking, movie. Create MEMORIES. Shared experiences build: Connection (know each other), memories (shared stories), identity (we are study team that supports each other).',
            '4. Week 4-8 - Support Each Other Through Challenges (Days 22-56, 40 hours): Week 5: Priya is struggling (family pressure, stressed, crying). Team supports: You: "Priya, let us study at your pace. No pressure." Rahul: "I will help you with difficult topics." Ankit: "Let us take breaks. Mental health matters." Sarah: "I will bring you food." Priya (tearful): "Thank you. I feel supported." Week 6: You fail mid-term (Finance: 45%). You feel terrible. Team supports: Rahul: "It is okay. I will teach you Finance from basics. We have 2 months. You will score 70%+ in finals." Team creates Finance study plan (daily 1 hour with Rahul). You improve. Week 7: Ankit procrastinates (has not studied for 2 weeks). Team: "Ankit, let us study together every day. We will keep you accountable." Ankit studies with team. Procrastination reduces. Support creates: Trust (team will help), resilience (team handles challenges together), loyalty (nobody wants to leave supportive team).',
            '5. Week 8-12 - Build Team Identity (Days 50-84, 50 hours): Team creates IDENTITY. (1) Team NAME: "The Achievers" (reflects goal: achieve excellence). (2) Team VALUES: "Support always, learn together, celebrate wins, no one left behind." (3) Team GOALS: "All 5 members score 80%+ in finals, help each other improve, make studying enjoyable." (4) Team RITUALS: Daily study (Mon-Fri, 6-9 PM), Friday fun (9-10 PM), Sunday review (10 AM-2 PM), monthly outing (1 Saturday). (5) Team STORY: "We started as 5 strangers. We built trust, connection, support. We became The Achievers. We study together, grow together, succeed together." Identity creates: Commitment (everyone cares about team success), pride (proud to be Achiever), cohesion (we are ONE team). Team is no longer 5 individuals. Team is ONE unit.',
            '6. Week 12-16 - Celebrate Wins + Final Push (Days 78-112, 60 hours): Week 12: Priya scores 85% in mock test (improved from 70%). Team celebrates: Pizza party, everyone shares: "Priya, you worked so hard! We are proud!" Priya: "I could not have done this without team support." Week 14: You score 70% in Finance mock test (improved from 45%). Team celebrates: "You improved 25 points! Rahul, you are excellent teacher!" Celebrate ALL wins (big and small). Week 16: Finals. Team studies together (12 hours/day, last 2 weeks). Support each other. Quiz each other. Encourage each other: "We got this! We are The Achievers!" Finals week: Everyone gives their best. Results (2 weeks later): You: 82%, Priya: 88%, Rahul: 85%, Ankit: 81%, Sarah: 84%. ALL 5 scored 80%+! Team goal achieved! Team celebrates: Dinner party, share memories: "Remember when we started? We were strangers. Now we are family." Everyone cries (happy tears). Professor: "Excellent teamwork! You supported each other. This is what teams do." You reflect: "We built cohesive team. We achieved together. We are The Achievers."',
            '7. Week 16 - Reflect + Continue Team (Day 112, 3 hours): Final team meeting. Reflect: "What made our team successful?" Team shares: (1) "We built trust (shared vulnerabilities, supported each other)." (2) "We created shared experiences (daily study, Friday fun, monthly outings)." (3) "We celebrated wins (recognized all improvements)." (4) "We supported through struggles (Priya stress, your Finance failure, Ankit procrastination)." (5) "We built identity (The Achievers - name, values, goals, rituals, story)." Decide: "Let us continue team for next semester!" Team continues. You became team builder. Apply these skills to future teams (workplace, projects, clubs).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not building trust: Keeping everything professional, not sharing vulnerabilities. Result: No connection, team feels cold. Solution: Share struggles, be vulnerable, build trust.',
            '• Only studying (no fun): Focusing only on work, no shared experiences. Result: Team feels like obligation, not enjoyable. Solution: Friday fun sessions, monthly outings, create memories.',
            '• Not celebrating wins: Ignoring improvements and successes. Result: Low morale, no motivation. Solution: Celebrate ALL wins (big and small), recognize contributions.',
            '• Not supporting struggles: Ignoring when someone is struggling. Result: People suffer alone, team breaks. Solution: Support each other (Priya stress, your Finance failure, Ankit procrastination).',
            '• No team identity: Remaining 5 individuals, no shared identity. Result: No commitment, no cohesion. Solution: Create name, values, goals, rituals, story.'
          ],
          successCriteria: [
            '✅ You form study team (5 members with complementary strengths)',
            '✅ You build trust through vulnerability (everyone shares struggles, team supports)',
            '✅ You create shared experiences (daily study, Friday fun, Sunday review, monthly outings)',
            '✅ You support each other through challenges (Priya stress, your Finance failure, Ankit procrastination)',
            '✅ You build team identity (The Achievers - name, values, goals, rituals, story)',
            '✅ You celebrate all wins (Priya 85%, your 70%, all improvements)',
            '✅ Team achieves goal (ALL 5 members score 80%+ in finals)',
            '✅ Team continues beyond project (decide to continue for next semester)'
          ]
        },
        professional: {
          title: 'Professional Team Building Mastery',
          description: 'You join startup (Marketing team, 5 members). Week 1: Everyone works alone. No trust, no connection, no collaboration. Week 2: Project fails. Manager: "We have 5 talented individuals, but not a TEAM." Manager assigns you: "Build this team. Transform 5 individuals into 1 high-performing team." Goal: Build cohesive team, achieve excellent results.',
          instructions: [
            '1. Week 1 - Assess Current Team State (Days 1-5, 10 hours): Observe team for 5 days. Identify problems: (1) NO TRUST (people do not open up, ask for help, share struggles), (2) NO CONNECTION (people do not know each other as humans), (3) WORK IN SILOS (no collaboration, no alignment), (4) NO SHARED IDENTITY (no name, values, goals, rituals, story), (5) LOW MORALE (team satisfaction: 3.2/10). Interview each member (1-on-1, 30 mins): "How do you feel about team? What is missing?" Priya: "I feel alone." Rahul: "Nobody cares." Ankit: "Just doing my job." Sarah: "I want to leave." Document problems. Present to manager: "Here are our team problems. I propose team building plan." Manager: "Go ahead. Lead this."',
            '2. Week 1-2 - Build Trust Through Vulnerability + Reliability (Days 3-14, 12 hours): First team meeting (1 hour). You lead by example. Share vulnerability: "I made mistake last week (campaign typo). I felt terrible. I was scared you would judge me. But I learned: Always double-check. I will not make this mistake again." Team sees: You are HUMAN (not perfect robot), you are VULNERABLE (willing to admit mistakes). Trust begins. Others share: Priya: "I am struggling with personal issue (family problem). I am distracted." Team supports: "We are here for you. Take time if needed. We will cover your work." Rahul: "I feel overwhelmed (too many projects). I am scared to say no." Team: "Let us redistribute work." Vulnerability creates CONNECTION. Practice RELIABILITY: You promise to help Priya → You help. You promise to review Rahul work → You review. You show up on time. You deliver on commitments. Team sees: You are RELIABLE (can be trusted). Trust deepens. Vulnerability + Reliability = TRUST.',
            '3. Week 2-4 - Create Shared Experiences (Days 8-28, 20 hours): Establish team rituals. (1) TEAM LUNCHES (Every Friday, 1 hour, casual, no work talk): Get to know each other as HUMANS. "Where are you from? What hobbies? What are your goals?" Team learns: Priya loves painting, Rahul plays guitar, Ankit is training for marathon, Sarah loves cooking. Connection builds. (2) TEAM OFFSITES (Quarterly, 1 day, fun activity): Month 1: Escape room (team solves puzzles together, creates MEMORIES). "Remember when Rahul panicked?" Shared stories build bond. (3) TEAM CHALLENGES (Monthly, work challenge): "Create best campaign in 1 week." Compete as TEAM vs other teams. Win together. Celebrate together. (4) TEAM VOLUNTEERING (Quarterly, 1 day): Teach at school. Team does GOOD together. Shared purpose builds meaning. Shared experiences create: Connection (know each other), memories (shared stories), identity (we are team that does things together).',
            '4. Week 4-8 - Support Each Other + Celebrate Wins (Days 22-56, 30 hours): Week 5: Campaign succeeds (1M impressions, 10K conversions). CELEBRATE TOGETHER: Team meeting. You: "WE did this! Priya (email), Rahul (ads), Ankit (content), Sarah (analytics), Me (social media) - ALL contributed. This is TEAM win!" Order pizza, play music, share stories. Everyone feels: Recognized, connected, proud. Week 6: Priya is struggling (family issue). SUPPORT TOGETHER: You: "Priya, take Friday off. We will cover your work." Rahul: "I will handle your email campaign." Team supports. Priya (tearful): "Thank you." Week 7: You make mistake (campaign has error). Team supports: "It is okay. We all make mistakes. Let us fix this together." You feel: Supported, safe, grateful. Celebrate ALL wins (big and small). Support through ALL struggles. Build resilient team.',
            '5. Week 8-10 - Build Team Identity (Days 50-70, 15 hours): Team creates IDENTITY. Team workshop (2 hours). Brainstorm together: (1) Team NAME: "Growth Hackers" (reflects who we are - focus on growth). (2) Team VALUES: "Experiment boldly, learn fast, support always, celebrate together." (3) Team GOALS: "Achieve 10M impressions, 100K conversions, 8/10 team satisfaction by year-end." (4) Team RITUALS: Monday kickoff (15 mins, share goals for week), Friday wins (15 mins, share 1 win each), monthly team lunch (1 hour, no work talk), quarterly offsite (1 day, fun activity). (5) Team STORY: "We started as 5 disconnected individuals. We built trust, connection, cohesion. We became high-performing team. We are Growth Hackers." Create team poster (name, values, goals). Hang in office. Everyone signs. Identity creates: Commitment (people care about team), pride (people are proud to be Growth Hackers), cohesion (we are ONE team).',
            '6. Week 10-12 - Measure Team Health + Improve (Days 70-84, 10 hours): Survey team monthly: "How do you feel about team?" (1-10 scale.) Week 1: 3.2/10 (low morale). Week 12: 8.6/10 (high morale). Improvement: +5.4 points! What changed? (1) Trust (vulnerability + reliability), (2) Connection (shared experiences), (3) Celebration (celebrate wins together), (4) Support (help each other beyond work), (5) Identity (name, values, goals, rituals, story). Manager: "Excellent team building! You transformed disconnected individuals into high-performing team. Results: Team productivity +50%, team satisfaction 8.6/10, zero turnover (nobody left), business results excellent (10M impressions, 120K conversions - exceeded goals!)." CEO meets you: "Impressive leadership. Join us full-time after graduation. Lead team building for entire company." Job offer received.',
            '7. Month 4 - Share Team Building Framework (Day 90, 5 hours): Manager: "Can you help other teams?" You create workshop: "Team Building Mastery" (2 hours). Content: (1) Build trust (vulnerability + reliability), (2) Create shared experiences (lunches, offsites, challenges, volunteering), (3) Celebrate wins together (recognize all contributions), (4) Support each other (beyond work, as humans), (5) Build identity (name, values, goals, rituals, story). Deliver to 3 teams (Sales, Product, Engineering). They adopt your framework. Company-wide team health improves. You present at company all-hands. CEO recognizes you publicly. Your LinkedIn post: "How to Transform 5 Individuals into 1 High-Performing Team" gets 10K likes. HR leaders message you: "We need team builders like you." You have 5 job offers. Team building expertise opened doors.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not leading by example: Asking others to be vulnerable without being vulnerable yourself. Result: Nobody opens up. Solution: Share YOUR vulnerability first (your mistakes, fears, struggles).',
            '• Forcing fun: Mandatory team activities people do not enjoy. Result: Resentment. Solution: Ask team what they enjoy, co-create experiences.',
            '• Not celebrating small wins: Only celebrating big wins (campaign success), ignoring small wins (Priya finished project). Result: Low morale. Solution: Celebrate ALL wins.',
            '• Not supporting personal struggles: "That is personal, not work-related." Result: People suffer alone. Solution: Support HUMANS (not just workers). Care about personal issues.',
            '• Not measuring team health: Implementing practices without tracking impact. Result: Do not know if it works. Solution: Survey team monthly, track morale, prove practices work.'
          ],
          successCriteria: [
            '✅ You assess team problems (no trust, no connection, silos, no identity, low morale 3.2/10)',
            '✅ You build trust (vulnerability + reliability - team opens up, supports each other)',
            '✅ You create shared experiences (lunches, offsites, challenges, volunteering)',
            '✅ You celebrate wins + support struggles (campaign success, Priya family issue, your mistake)',
            '✅ You build team identity (Growth Hackers - name, values, goals, rituals, story)',
            '✅ Team health improves (morale 3.2/10 → 8.6/10, productivity +50%, zero turnover)',
            '✅ You share framework company-wide (3 teams adopt, CEO recognizes you)',
            '✅ You get job offers and become team building expert (5 offers, LinkedIn post viral)'
          ]
        },
        personal: {
          title: 'Personal Team Building Wisdom',
          description: 'You want to build personal support network (5 friends who support each other through college, career, life). Week 1: You have acquaintances, but no deep connections. Goal: Build cohesive personal team, support each other, grow together.',
          instructions: [
            '1. Week 1 - Recruit Personal Team (Days 1-7, 10 hours): Identify 4 people you want in your personal team. Criteria: (1) Shared values (what matters to them?), (2) Complementary strengths (what can they teach you?), (3) Mutual support (will they be there when you struggle?), (4) Growth mindset (do they want to grow?). You identify: Priya (B.Com classmate, values: family, learning), Rahul (college club member, values: creativity, adventure), Ankit (gym friend, values: health, discipline), Sarah (neighbor, values: kindness, community). Reach out (1-on-1, coffee chat, 1 hour each): "Hi! I want to build personal support network (5 friends who support each other through college, career, life). Would you like to join?" All 4 say yes. Team formed.',
            '2. Week 1-2 - First Meeting + Build Trust (Days 5-14, 8 hours): First meeting (cafe, 3 hours). Introductions: "Hi, I am [name]. I am from [city]. My goals: [career, personal]. My struggles: [fears, challenges]. Why I joined: I want supportive friends." Everyone shares. You share vulnerability: "I am scared of failure (career, relationships). I feel alone sometimes. I want friends who will be there when I struggle." Others share: Priya: "I am stressed (family pressure to get job). I feel overwhelmed." Rahul: "I am confused (do not know what career to pursue). I feel lost." Ankit: "I am lonely (moved to new city, no friends). I feel isolated." Sarah: "I am anxious (worried about future). I feel scared." Vulnerability creates CONNECTION. Everyone feels: Safe (can share struggles), supported (team will help), connected (not alone). Trust begins.',
            '3. Week 2-4 - Create Shared Experiences (Days 8-28, 25 hours): Establish team rituals. (1) WEEKLY DINNERS (Every Saturday, 7-10 PM, 3 hours, rotate homes): Cook together, eat together, talk (no phones - just connection). Share: "How was your week? What went well? What was hard?" Support each other. (2) MONTHLY ADVENTURES (1 Sunday/month, full day): Hiking, road trip, museum, concert. Create MEMORIES. "Remember when we got lost on hike?" Shared stories build bond. (3) QUARTERLY RETREATS (1 weekend/quarter, 2 days): Go to beach, mountains, countryside. Deep conversations: "What are your dreams? What are your fears? How can we support you?" Shared purpose builds meaning. (4) DAILY CHECK-INS (WhatsApp group, 5 mins/day): "Good morning! How are you feeling today?" Everyone shares. Stay connected daily. Shared experiences create: Connection (know each other deeply), memories (shared stories), identity (we are support network that grows together).',
            '4. Week 4-12 - Support Each Other Through Life (Days 22-84, 50 hours): Week 5: Priya is stressed (job interviews, rejections). Team supports: You: "Priya, let us practice interviews together." Rahul: "I will review your resume." Ankit: "Let us go for walk, clear your mind." Sarah: "I will cook you dinner." Priya (tearful): "Thank you. I feel supported." Week 7: You fail exam (Finance, 45%). You feel terrible. Team supports: Rahul: "It is okay. Let us study together. You will pass next time." Team creates study plan. You improve. Week 9: Ankit is lonely (misses home). Team: "Ankit, you are not alone. We are your family here." Organize surprise birthday party. Ankit (crying, happy tears): "I have never felt so loved." Week 11: Sarah is anxious (worried about future). Team: "Let us talk. What are you scared of?" Sarah shares. Team listens, supports, encourages. Support creates: Trust (team will be there), resilience (team handles life together), loyalty (nobody wants to leave supportive team).',
            '5. Week 12-16 - Build Team Identity (Days 78-112, 15 hours): Team creates IDENTITY. Team workshop (Saturday dinner, 3 hours). Brainstorm: (1) Team NAME: "The Tribe" (reflects who we are - close-knit support network). (2) Team VALUES: "Support always, grow together, celebrate wins, be there through struggles, love unconditionally." (3) Team GOALS: "Support each other through college, career, life. Grow together. Stay connected forever." (4) Team RITUALS: Weekly dinners (Saturday, 7-10 PM), monthly adventures (1 Sunday), quarterly retreats (1 weekend), daily check-ins (WhatsApp). (5) Team STORY: "We started as acquaintances. We built trust, connection, support. We became The Tribe. We support each other, grow together, love each other." Create team symbol (matching bracelets with "Tribe" engraved). Everyone wears. Identity creates: Commitment (everyone cares about Tribe), pride (proud to be Tribe member), cohesion (we are ONE family).',
            '6. Month 6-12 - Grow Together (Days 150-365, 100 hours): Team supports each other through: Priya gets job (celebrate together - dinner party), You pass Finance (celebrate - team is proud), Rahul decides career (team helps him explore options), Ankit makes new friends (team is happy for him), Sarah overcomes anxiety (team supports her therapy journey). Team grows TOGETHER. Week 52: Anniversary dinner (1 year of Tribe). Reflect: "What has Tribe meant to you?" Priya: "You supported me through job search. I could not have done it without you." You: "You helped me pass Finance. You believed in me." Rahul: "You helped me find my path. I was lost. Now I have direction." Ankit: "You became my family. I was lonely. Now I have home." Sarah: "You helped me heal. I was anxious. Now I am stronger." Everyone cries (happy tears). You reflect: "We built cohesive personal team. We support each other. We grow together. We are The Tribe. Forever."',
            '7. Year 2 - Expand Tribe (Day 400, 5 hours): Tribe decides: "Let us help others build their tribes." You create workshop: "How to Build Personal Support Network" (2 hours). Content: (1) Recruit team (shared values, complementary strengths, mutual support, growth mindset), (2) Build trust (share vulnerability, be reliable), (3) Create shared experiences (weekly dinners, monthly adventures, quarterly retreats, daily check-ins), (4) Support through life (be there when they struggle), (5) Build identity (name, values, goals, rituals, story). Deliver to 20 college students. They form 4 new tribes. You help them. Your Tribe becomes model. College recognizes you: "Student Support Leader of the Year." Your story inspires 100+ students to build their tribes. You created movement. Personal team building changed lives.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Recruiting wrong people: Choosing based on convenience (classmates, neighbors) not values/compatibility. Result: Team does not gel. Solution: Choose based on shared values, complementary strengths, mutual support.',
            '• Not being vulnerable: Keeping everything surface-level, not sharing struggles. Result: No deep connection. Solution: Share your fears, struggles, dreams. Be vulnerable first.',
            '• Inconsistent rituals: "Let us meet weekly" but only meeting once/month. Result: Connection weakens. Solution: Commit to rituals (weekly dinners, monthly adventures), show up consistently.',
            '• Not supporting struggles: Being there for fun but not for struggles. Result: Shallow relationships. Solution: Be there when they struggle (job rejections, exam failures, loneliness, anxiety).',
            '• Not building identity: Remaining acquaintances, not building shared identity. Result: No commitment, team dissolves. Solution: Create name, values, goals, rituals, story. Build Tribe.'
          ],
          successCriteria: [
            '✅ You recruit personal team (5 people with shared values, complementary strengths)',
            '✅ You build trust through vulnerability (everyone shares struggles, team supports)',
            '✅ You create shared experiences (weekly dinners, monthly adventures, quarterly retreats, daily check-ins)',
            '✅ You support each other through life (Priya job search, your Finance exam, Rahul career, Ankit loneliness, Sarah anxiety)',
            '✅ You build team identity (The Tribe - name, values, goals, rituals, story, matching bracelets)',
            '✅ Team grows together (Priya gets job, you pass exam, Rahul finds path, Ankit makes friends, Sarah heals)',
            '✅ Team celebrates 1-year anniversary (reflect on journey, everyone is grateful)',
            '✅ You expand impact (create workshop, help 20 students form 4 new tribes, create movement)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🤝 Build Trust Through Vulnerability + Reliability: You share your struggles, fears, mistakes (be HUMAN, not perfect robot). Example: "I made mistake (campaign typo). I felt terrible. But I learned." Team sees: You are vulnerable. Trust begins. You deliver on commitments (promise to help → you help, promise to review → you review, show up on time). Team sees: You are reliable. Trust deepens. Vulnerability + Reliability = TRUST. You understand: Trust is foundation of team. Without trust, team cannot collaborate, support, grow together.',
        '🎉 Create Shared Experiences: You create moments of togetherness. Team lunches (weekly, get to know each other as HUMANS), team offsites (quarterly, escape room/hiking, create MEMORIES), team challenges (monthly, compete as TEAM), team volunteering (quarterly, do GOOD together). Shared experiences create: Connection (know each other), memories (shared stories: "Remember when Rahul panicked in escape room?"), identity (we are team that does things together). You understand: Teams are built through shared experiences (not just work tasks). Spend time together. Create memories. Build connection.',
        '🏆 Celebrate Wins Together: You celebrate ALL wins (big AND small). Campaign success (big win): "WE did this! All contributed!" Priya finished project (small win): "Priya, you worked hard! We are proud!" Celebration builds: (1) MORALE (people feel good, energized, motivated), (2) IDENTITY (we are winning team, we celebrate together), (3) MOTIVATION (people want more wins). You understand: Celebration is not waste of time. Celebration builds morale, identity, motivation. Recognize all contributions. Celebrate frequently. Build winning culture.',
        '💪 Support Each Other Beyond Work: You support team members as HUMANS (not just workers). Priya struggles (family issue): "Take Friday off. We will cover your work." You make mistake (campaign error): Team supports: "It is okay. We all make mistakes. Let us fix this together." Support creates: (1) TRUST (people know team will help), (2) RESILIENCE (team can handle adversity together), (3) LOYALTY (people do not want to leave supportive team). You understand: Support goes beyond work. Care about personal struggles. Be there when they need you. Build resilient, loyal team.',
        '🎪 Build Team Identity: You create shared identity. Team NAME ("Growth Hackers" - reflects who we are), Team VALUES ("Experiment boldly, support always" - what we believe), Team GOALS ("Achieve 10M impressions" - what we are achieving together), Team RITUALS (Monday kickoff, Friday wins, monthly lunch - how we work together), Team STORY ("We started as 5 disconnected individuals, became high-performing team" - our journey). Identity creates: (1) COHESION (people feel CONNECTED - we are ONE team), (2) COMMITMENT (people CARE about team success), (3) PRIDE (people are PROUD to be on team). You understand: Identity transforms individuals into unified team. Build intentionally.'
      ],
      improvements: [
        '📊 Measure Team Health More Systematically: You build team practices (trust, shared experiences, celebration, support, identity). Good. But measure MORE systematically. Improve: (1) Survey team WEEKLY (not just monthly): "How do you feel about team this week?" (1-10 scale). Track trends. Week 1: 3/10. Week 4: 5/10. Week 8: 7/10. Week 12: 9/10. Steady improvement. (2) Track SPECIFIC metrics: Trust (1-10: Do you trust team?), Connection (1-10: Do you feel connected?), Support (1-10: Do you feel supported?), Morale (1-10: How is your morale?), Commitment (1-10: Do you care about team success?). Identify which is low. Improve that area. (3) Anonymous feedback: "What is working? What is not working? What should we do more/less?" Act on feedback. Show team: "You said X. We are doing Y to improve." Result: Team sees you LISTEN and ACT. Trust deepens. Measure systematically. Improve continuously.',
        '🎓 Study Team Psychology Deeply: You know team building basics (trust, shared experiences, celebration, support, identity). Good. But go DEEPER. Study: (1) Tuckman Stages (Forming, Storming, Norming, Performing - understand team development stages), (2) Patrick Lencioni "Five Dysfunctions of a Team" (absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results - understand team dysfunctions), (3) Google Project Aristotle (psychological safety is #1 predictor of team success - understand what makes teams effective), (4) Bruce Tuckman "Team Roles" (understand different roles people play in teams). Read 5 books on team psychology. Take course on team dynamics. Apply: Understand WHY your practices work (not just WHAT to do). Example: Why does vulnerability build trust? (Because it creates psychological safety.) Deeper understanding = better team building.',
        '🎯 Facilitate Team Activities Better: You create shared experiences (lunches, offsites, challenges). Good. But FACILITATE better. Improve: (1) Design activities intentionally: What is PURPOSE of this activity? (Build trust? Create memories? Solve problem together?) Design activity to achieve purpose. (2) Facilitate discussions: Ask powerful questions: "What did you learn from this activity? How can we apply this to our work? What did you appreciate about each other?" Deep reflection creates deeper learning. (3) Handle conflicts: When conflict arises (disagreement, tension), facilitate: "Let us hear both perspectives. What is underlying concern? How can we find solution that works for everyone?" Conflict resolution skill is critical for team builder. (4) Read energy: Is team engaged or bored? Adjust activity. If bored, switch to something more engaging. Facilitation skill = team building superpower. Practice. Improve.',
        '🔗 Build Cross-Team Connections: You build YOUR team (5 members). Excellent. But build CROSS-TEAM connections. Improve: (1) Connect your team with OTHER teams: Joint team lunches (your team + Sales team), joint team offsites (your team + Product team), joint team challenges (your team + Engineering team compete together vs other companies). Cross-team connections create: Collaboration (teams work together better), knowledge sharing (learn from each other), company cohesion (entire company feels connected). (2) Create company-wide rituals: Company all-hands (monthly, all teams together, celebrate company wins), company offsites (annual, all teams, create company-wide memories), company volunteering (quarterly, all teams, do good together). Company-wide rituals build: Company identity (we are ONE company, not separate teams), company pride (proud to work here), company commitment (care about company success). Build your team. Then build company.',
        '📚 Teach Team Building to Others: You master team building (transform 5 individuals into high-performing team). Now TEACH others. Create: (1) Workshop: "Team Building Mastery" (2 hours). Content: Trust (vulnerability + reliability), shared experiences (lunches, offsites, challenges, volunteering), celebration (recognize all wins), support (beyond work, as humans), identity (name, values, goals, rituals, story). Deliver to 10 teams. (2) Online course: "Team Building for B.Com Students" (3 hours, ₹1000). Sell to 200 students = ₹2L revenue. (3) Consulting: "I help teams improve cohesion. ₹5000/team (5 hours)." Help 10 teams = ₹50K. (4) Book: "Team Architect: How to Transform Individuals into High-Performing Teams." Self-publish. Sell 1000 copies. Teaching solidifies your expertise. Helps others. Builds your reputation. Opens career opportunities (HR roles, organizational development, team coaching).'
      ],
      nextSteps: [
        '📚 Read Team Psychology Books: (1) "The Five Dysfunctions of a Team" by Patrick Lencioni (understand team dysfunctions: absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results), (2) "Team of Teams" by General Stanley McChrystal (understand how to build high-performing teams in complex environments), (3) "The Culture Code" by Daniel Coyle (understand how great teams build culture through safety, vulnerability, purpose), (4) "Dare to Lead" by Brené Brown (understand vulnerability-based leadership and trust-building), (5) "Multipliers" by Liz Wiseman (understand how to amplify team intelligence). Read 5 books over 3 months. Extract key practices. Apply to your teams. Document learnings.',
        '🧠 Practice Building 10 Teams: Build 10 teams over 2 years (study groups, project teams, internship teams, club teams, startup teams, volunteer teams, sports teams, personal support networks). Track: (1) Team size (3-person, 5-person, 10-person), (2) Team purpose (study, work, volunteering, personal support), (3) Challenges faced (no trust, no connection, conflicts, low morale), (4) Solutions applied (vulnerability, shared experiences, celebration, support, identity), (5) Outcomes (team health 1-10, team performance, team satisfaction, team longevity). After building 10 teams, you will master team building. You will handle any team (any size, any purpose, any challenge).',
        '📊 Create Team Building Framework: Document your expertise. Create framework: "Team Architect Framework." Content: (1) ASSESS (survey team, identify problems: trust, connection, morale, identity), (2) BUILD TRUST (vulnerability + reliability exercises, team shares struggles, team delivers on commitments), (3) CREATE CONNECTION (shared experiences: lunches, offsites, challenges, volunteering), (4) CELEBRATE + SUPPORT (celebrate all wins, support all struggles, build resilience), (5) BUILD IDENTITY (name, values, goals, rituals, story - create cohesion and commitment), (6) MEASURE + IMPROVE (survey team regularly, track metrics, improve continuously). Test framework with 5 teams. Iterate based on feedback. Publish framework (blog post, LinkedIn article). Share with 1000+ people. Your framework becomes industry standard.',
        '🎓 Take Team Facilitation Course: Enroll in: (1) "Team Facilitation Mastery" course (20 hours, learn how to facilitate team meetings, workshops, offsites, conflicts), (2) "Organizational Development" course (40 hours, learn how to build high-performing organizations), (3) "Coaching Certification" (100 hours, learn how to coach teams and leaders). Total: 160 hours over 6 months. Become certified team facilitator and coach. Apply: Facilitate team workshops (earn ₹5000/workshop), coach teams (earn ₹10000/team/month), consult on organizational development (earn ₹50K/project). Team facilitation + coaching = high-income skill. Build career as team builder.',
        '👥 Consult on Team Building: Offer team building consulting to startups, small businesses, college teams. Service: "I help teams transform from disconnected individuals to high-performing teams. ₹10000/team (10 hours). Process: (1) Assess (survey team, identify problems), (2) Design (create customized team building plan: trust exercises, shared experiences, celebration rituals, support practices, identity creation), (3) Facilitate (lead team workshops, offsites, activities), (4) Measure (survey team before/after, track metrics, prove impact). Guarantee: 50% improvement in team health or money back." Month 1: 2 clients, ₹20K. Month 6: 5 clients, ₹50K. Month 12: 10 clients, ₹100K. You help 10 teams transform. You earn ₹100K. You build reputation as team building expert. Career opportunities open (HR leadership, organizational development, executive coaching).'
      ]
    },
    badge: { name: 'Team Architect', emoji: '🏗️', description: 'Expert in building strong teams' },
    shareMessage: 'Just mastered team building! 🏗️ #TeamBuilding #Collaboration'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module6Subtopics = module6Data;

// Module 6 Assessment
export const module6Assessment: AssessmentData = {
  id: 'module6-assessment',
  title: 'Teamwork & Collaboration Assessment',
  description: 'Test your teamwork and collaboration mastery',
  questions: [
    // Team Dynamics (1-5)
    { 
      id: 1, 
      question: 'Your team just formed (5 members, new project). What are the stages your team will go through?', 
      options: ['Start, work, finish', 'Forming (polite), Storming (conflict), Norming (alignment), Performing (high performance)', 'Begin, middle, end', 'Plan, do, review'], 
      correct: 1,
      explanation: 'Teams go through Tuckman\'s stages: FORMING (polite, getting to know each other, unclear roles), STORMING (conflict, disagreements, power struggles - this is NORMAL and NECESSARY), NORMING (alignment, establish norms, roles clarify), PERFORMING (high performance, smooth collaboration, deliver results). Understanding these stages helps you navigate team development. In B.Com teams, expect storming (conflict is normal), facilitate norming (establish clear roles/norms), reach performing (high performance).'
    },
    { 
      id: 2, 
      question: 'Your team is in storming stage (Week 2: conflicts, disagreements, tension). What does storming involve?', 
      options: ['Harmony and agreement', 'Conflict and disagreement (NORMAL - power struggles, competing ideas, frustration)', 'No interaction', 'Immediate success'], 
      correct: 1,
      explanation: 'Storming involves CONFLICT and DISAGREEMENT (power struggles, competing ideas, frustration, tension). This is NORMAL and NECESSARY stage of team development. Problem: Many teams avoid storming (suppress conflict, stay polite). Result: Never reach performing (unresolved issues remain). Solution: EMBRACE storming. Facilitate healthy conflict (focus on ideas not personalities, seek win-win solutions, establish norms). Navigate storming successfully → reach norming and performing. In B.Com teams, do not avoid conflict. Address disagreements constructively. Conflict handled well = stronger team.'
    },
    { 
      id: 3, 
      question: 'Your team has low psychological safety (people scared to speak up, share ideas, admit mistakes). What is psychological safety?', 
      options: ['Physical safety (no danger)', 'Feel SAFE to take risks, speak up, admit mistakes, ask questions without fear of judgment', 'No challenges or pressure', 'No conflict ever'], 
      correct: 1,
      explanation: 'Psychological safety = feel SAFE to take risks, speak up, admit mistakes, ask questions without fear of judgment, punishment, or embarrassment. Google Project Aristotle found: Psychological safety is #1 predictor of team success (more important than talent, resources, strategy). High psychological safety: People share ideas (even "crazy" ones), admit mistakes (learn from them), ask questions (no "stupid" questions), challenge status quo (improve processes). Low psychological safety: People stay silent (fear judgment), hide mistakes (fear punishment), do not ask questions (fear looking stupid). Build psychological safety: Leader shares vulnerability first, respond positively to mistakes/questions, encourage diverse opinions. In B.Com teams, psychological safety enables innovation, learning, high performance.'
    },
    { 
      id: 4, 
      question: 'Your team has confusion (who does what? who decides? who approves?). RACI matrix can help. What does RACI clarify?', 
      options: ['Salaries and compensation', 'Roles and responsibilities (Responsible, Accountable, Consulted, Informed)', 'Project timelines', 'Budget allocation'], 
      correct: 1,
      explanation: 'RACI clarifies ROLES and RESPONSIBILITIES for each task/decision. R = RESPONSIBLE (does the work), A = ACCOUNTABLE (ultimately answerable, approves work - only ONE person), C = CONSULTED (provides input, two-way communication), I = INFORMED (kept updated, one-way communication). Example: Marketing campaign. R = Marketing intern (creates campaign), A = Marketing manager (approves campaign), C = Sales team (provides customer insights), I = CEO (kept informed of results). RACI prevents: Confusion (who does what?), duplication (two people doing same work), gaps (nobody doing critical work), bottlenecks (unclear who approves). In B.Com team projects, create RACI matrix. Clarify roles. Prevent confusion. Improve efficiency.'
    },
    { 
      id: 5, 
      question: 'Your team has no clear ways of working (when to meet? how to communicate? how to make decisions?). What are team norms?', 
      options: ['Management-imposed rules', 'Team-AGREED ways of working (meeting times, communication, decision-making, conflict resolution)', 'Individual preferences', 'Optional guidelines'], 
      correct: 1,
      explanation: 'Team norms = team-AGREED ways of working. Examples: (1) Meeting norms (start on time, camera on, agenda shared 1 day before, no phones), (2) Communication norms (respond within 24 hours, use Slack for urgent, email for non-urgent, daily updates), (3) Decision norms (consensus for major decisions, majority vote for minor, leader decides if no consensus), (4) Conflict norms (address early, focus on issue not person, seek win-win). Key: Norms are AGREED by team (not imposed by manager). Team creates norms together (Week 1 meeting: "How do we want to work together?"). Result: Clear expectations, smooth collaboration, less friction. In B.Com teams, establish norms early (Week 1). Document norms. Review/update regularly. Strong norms = strong team.'
    },
    // Leadership (6-10)
    { 
      id: 6, 
      question: 'You are B.Com student (no formal authority) but want to lead team project. What is leadership?', 
      options: ['Having authority and title', 'INFLUENCE and INSPIRATION (motivate others, drive results) - can lead WITHOUT authority', 'Being bossy and controlling', 'Having manager title'], 
      correct: 1,
      explanation: 'Leadership = INFLUENCE and INSPIRATION (ability to motivate others, drive results, create positive change). Leadership ≠ authority/title. You can LEAD WITHOUT AUTHORITY through: (1) Competence (be excellent at your work, people trust your expertise), (2) Initiative (take ownership, solve problems proactively), (3) Service (help others succeed, support team), (4) Vision (articulate compelling direction, inspire others). Example: You (B.Com student, no title) lead project by: Taking initiative (organize meetings), demonstrating competence (deliver excellent work), supporting team (help struggling members), articulating vision ("Let\'s create best project in class"). Team follows you (not because you have authority, but because you INFLUENCE and INSPIRE). In B.Com, develop leadership skills NOW (lead projects, clubs, teams). Leadership is skill, not title.'
    },
    { 
      id: 7, 
      question: 'You want to be effective leader. You learn about servant leadership. What is servant leadership?', 
      options: ['Being served by team', 'SERVING and DEVELOPING team (help them succeed, grow, thrive) - leader serves team, not vice versa', 'Avoiding responsibility', 'Just following orders'], 
      correct: 1,
      explanation: 'Servant leadership = leader SERVES team (helps them succeed, grow, thrive). Traditional leadership: "Team serves leader (leader gives orders, team executes)." Servant leadership: "Leader serves team (leader removes obstacles, develops people, creates conditions for success)." Servant leader asks: "How can I help you succeed? What obstacles can I remove? How can I develop you?" Actions: (1) Remove obstacles (team blocked by approval? Leader expedites), (2) Develop people (team member wants to learn? Leader provides training), (3) Support wellbeing (team member struggling? Leader offers help). Result: Team feels supported, motivated, loyal. Team performs better (people work harder for leaders who serve them). In B.Com teams, practice servant leadership. Ask: "How can I help you?" Support team. Build trust and performance.'
    },
    { 
      id: 8, 
      question: 'You are team leader. Team has poor work ethic (late, low quality, no accountability). How do you lead by example?', 
      options: ['Give orders and criticize', 'MODEL desired behavior (be on time, deliver quality, take accountability) - team follows your example', 'Do everything yourself', 'Never delegate'], 
      correct: 1,
      explanation: 'Lead by example = MODEL desired behavior (team follows your example, not your words). Want team to be on time? YOU be on time (always). Want team to deliver quality? YOU deliver quality (always). Want team to take accountability? YOU take accountability (admit mistakes, own results). Example: You (team leader) want team to work hard. Option A: Tell team "Work harder!" (but you leave early, do minimum work). Team thinks: "Hypocrite." They do not work harder. Option B: YOU work hard (stay late, deliver excellent work, go extra mile). Team sees your example. They work harder too. Actions speak louder than words. Team watches what you DO (not what you SAY). In B.Com teams, model behavior you want to see. Be the standard. Team will follow.'
    },
    { 
      id: 9, 
      question: 'You are team leader with too much work. You need to delegate. What is effective delegation?', 
      options: ['Dump tasks you do not want to do', 'DEVELOP team through responsibility (give meaningful work, provide support, build capability)', 'Avoid work yourself', 'Control every detail'], 
      correct: 1,
      explanation: 'Effective delegation = DEVELOP team through responsibility (give meaningful work, provide support, build capability). Bad delegation: "Dump tasks" (give boring work you do not want, no support, no development). Good delegation: (1) Give MEANINGFUL work (challenging, growth opportunity), (2) Provide CONTEXT (why this matters, how it fits bigger picture), (3) Offer SUPPORT (available for questions, provide resources), (4) Give AUTONOMY (let them decide HOW to do it), (5) Provide FEEDBACK (recognize good work, coach for improvement). Result: Team member develops new skills, gains confidence, performs better. You free up time for strategic work. Win-win. In B.Com teams, delegate effectively. Develop team members. Build high-performing team.'
    },
    { 
      id: 10, 
      question: 'You are B.Com intern (no formal authority) but want to lead project. How do you lead without authority?', 
      options: ['Use force and aggression', 'Build INFLUENCE through competence, initiative, service, vision - earn respect through actions', 'Demand title first', 'Be aggressive and controlling'], 
      correct: 1,
      explanation: 'Lead without authority by building INFLUENCE through: (1) COMPETENCE (be excellent at your work, people trust your expertise. Example: You deliver best analysis in team → people ask for your input), (2) INITIATIVE (take ownership, solve problems proactively. Example: Team has no meeting notes → you volunteer to take notes → you become essential), (3) SERVICE (help others succeed. Example: Team member struggling → you help them → they appreciate you), (4) VISION (articulate compelling direction. Example: You propose "Let\'s win best project award" → team is inspired). Result: Team follows you (not because you have title, but because you EARNED their respect through actions). In B.Com, you rarely have formal authority (intern, junior, student). Master leading without authority. Build influence. Earn respect. Lead through actions, not title.'
    },
    // Conflict Management (11-15)
    { 
      id: 11, 
      question: 'Your team has conflict (disagreement on project approach). Some say "Conflict is bad, avoid it." Is this true?', 
      options: ['Yes, always avoid conflict', 'No, HEALTHY conflict can IMPROVE decisions (diverse perspectives, challenge assumptions, find better solutions)', 'Yes, conflict means team is failing', 'Yes, conflict is always destructive'], 
      correct: 1,
      explanation: 'HEALTHY conflict can IMPROVE decisions (not always destructive). Healthy conflict = disagree on IDEAS (not attack people), challenge ASSUMPTIONS (not egos), seek BETTER solutions (not winning argument). Example: Team deciding project approach. Priya: "Let\'s use Approach A (fast, risky)." Rahul: "I disagree. Approach B is better (slow, safe)." Healthy conflict: They debate IDEAS (pros/cons of each approach), challenge ASSUMPTIONS ("Is fast really better? What if we fail?"), seek BETTER solution ("What if we combine both? Fast execution + risk mitigation"). Result: Better decision (integrated solution > either pure approach). Unhealthy conflict: Attack people ("Priya, you are always reckless!"), defend egos ("I am right, you are wrong!"), win argument (not find best solution). Result: Damaged relationships, poor decision. In B.Com teams, embrace healthy conflict. Diverse perspectives improve decisions.'
    },
    { 
      id: 12, 
      question: 'Your team has small conflict (Week 2: Priya and Rahul disagree on task allocation). When should you address conflicts?', 
      options: ['Ignore and hope it goes away', 'Address EARLY (small conflicts become big if ignored)', 'Wait until it becomes major issue', 'Blame someone'], 
      correct: 1,
      explanation: 'Address conflicts EARLY (small conflicts become BIG if ignored). Small conflict (Week 2): Priya and Rahul disagree on task allocation. Option A: Ignore. Week 4: Conflict grows (Priya and Rahul not talking). Week 6: Conflict explodes (Priya and Rahul fighting, team divided). Project fails. Option B: Address early (Week 2). Facilitate conversation: "Priya, Rahul, let\'s discuss task allocation. What are your concerns?" Priya: "I have too many tasks." Rahul: "I want more challenging work." Solution: Redistribute tasks (Priya gets less, Rahul gets more challenging). Conflict resolved. Team continues smoothly. Early intervention = easy resolution. Late intervention = difficult resolution (emotions escalated, positions hardened, relationships damaged). In B.Com teams, address conflicts immediately. Do not wait. Small issue today = big crisis tomorrow.'
    },
    { 
      id: 13, 
      question: 'Your team has conflict (Priya and Rahul arguing). Conflict is getting personal ("You are lazy!" "You are controlling!"). What should you do?', 
      options: ['Isolate them from team', 'SEPARATE people from problem (focus on ISSUE, not personalities. "Let\'s discuss task allocation, not personal attacks.")', 'Remove both members', 'Avoid the situation'], 
      correct: 1,
      explanation: 'SEPARATE people from problem (focus on ISSUE, not personalities). Conflict getting personal: Priya: "Rahul, you are lazy!" Rahul: "Priya, you are controlling!" Problem: Attacking PEOPLE (not addressing ISSUE). Result: Damaged relationships, no solution. Solution: Redirect to ISSUE. You (facilitator): "Let\'s pause. We are attacking each other (not productive). Let\'s focus on ISSUE: Task allocation. Priya, what is your concern about tasks?" Priya: "I have 10 tasks, Rahul has 5. I am overwhelmed." You: "Rahul, what is your perspective?" Rahul: "I want more tasks, but Priya does not delegate." Now discussing ISSUE (task allocation), not PEOPLE (lazy, controlling). Find solution: Redistribute tasks, Priya delegates more. Conflict resolved. In B.Com teams, when conflict gets personal, redirect to issue. Focus on problem, not personalities. Preserve relationships while solving problem.'
    },
    { 
      id: 14, 
      question: 'Your team has conflict (Priya wants Approach A, Rahul wants Approach B). Some say "Someone must win, someone must lose." Is win-win possible?', 
      options: ['No, win-win is impossible', 'Yes, win-win solutions can SATISFY ALL interests (find creative solutions that meet both needs)', 'No, one person must win', 'No, win-win compromises quality'], 
      correct: 1,
      explanation: 'Yes, win-win solutions can SATISFY ALL interests (find creative solutions that meet both needs). Conflict: Priya wants Approach A (fast, risky). Rahul wants Approach B (slow, safe). Win-lose thinking: "Either Priya wins (we do A) OR Rahul wins (we do B). Someone must lose." Result: Loser is unhappy, disengaged. Win-win thinking: "What are underlying INTERESTS?" Priya interest: "Deliver fast (deadline pressure)." Rahul interest: "Minimize risk (fear of failure)." Win-win solution: "Approach C: Fast execution (satisfy Priya) + risk mitigation plan (satisfy Rahul)." Both interests satisfied. Both happy. Result: Better solution (integrated), stronger relationships (both feel heard). Win-win requires: (1) Understand interests (not just positions), (2) Creative problem-solving (find integrative solutions), (3) Collaboration (not competition). In B.Com teams, seek win-win. Satisfy all interests. Build stronger team.'
    },
    { 
      id: 15, 
      question: 'Your team has conflict. What is the BEST approach to resolve it?', 
      options: ['Aggressive (force your way)', 'COLLABORATIVE problem-solving (understand all perspectives, find solution that satisfies everyone)', 'Avoidance (ignore conflict)', 'Competition (win at all costs)'], 
      correct: 1,
      explanation: 'COLLABORATIVE problem-solving is BEST approach (understand all perspectives, find solution that satisfies everyone). Five conflict approaches: (1) AVOIDANCE (ignore conflict) - result: conflict grows, (2) ACCOMMODATION (give in) - result: your needs unmet, resentment, (3) COMPETITION (win at all costs) - result: damaged relationships, (4) COMPROMISE (split difference) - result: both partially satisfied, (5) COLLABORATION (understand all perspectives, find win-win) - result: all needs met, stronger relationships. Collaboration process: (1) Listen to all perspectives ("Priya, what do you need? Rahul, what do you need?"), (2) Identify underlying interests ("Why do you need this?"), (3) Generate options together ("What solutions could satisfy both?"), (4) Select best solution (satisfies all interests). Result: Better decisions (integrated solution), stronger relationships (everyone feels heard). In B.Com teams, use collaborative approach. Understand all perspectives. Find win-win solutions. Build high-performing team.'
    },
    // Remote Collaboration (16-20)
    { 
      id: 16, 
      question: 'Your team is remote (5 members, different cities). You learn about async communication. What is async communication?', 
      options: ['Communication requiring fast replies', 'Communication with NO immediate response needed (Slack message, email, recorded video) - work across time zones', 'Only video calls', 'Only phone calls'], 
      correct: 1,
      explanation: 'Async communication = NO immediate response needed (Slack message, email, recorded video, Notion doc). Sync communication = immediate response needed (video call, phone call, in-person meeting). Remote teams need ASYNC (work across time zones, flexible schedules). Async benefits: (1) Flexibility (respond when convenient, not immediately), (2) Thoughtful responses (time to think, craft good response), (3) Documentation (written record, can reference later), (4) Inclusivity (people in different time zones can participate). Async best practices: (1) Detailed messages (provide full context, no back-and-forth needed), (2) Clear deadlines ("Need response by Friday 5 PM"), (3) Right tool (Slack for quick updates, email for formal, Loom for complex explanations). In B.Com remote work, master async communication. Write detailed messages. Respect time zones. Enable flexible collaboration.'
    },
    { 
      id: 17, 
      question: 'Your remote team has communication gaps (people do not know what others are doing, blockers unidentified, misalignment). What should remote teams do?', 
      options: ['Under-communicate (assume people know)', 'OVER-COMMUNICATE intentionally (daily updates, document decisions, share progress) - remote default is under-communication', 'Avoid communication (too much noise)', 'Email only'], 
      correct: 1,
      explanation: 'Remote teams should OVER-COMMUNICATE intentionally (daily updates, document decisions, share progress). Office teams: Can see who is working, tap shoulder to ask question, overhear conversations. Remote teams: Cannot see work, cannot tap shoulder, miss informal communication. Remote default = UNDER-COMMUNICATION. Solution: OVER-COMMUNICATE intentionally. (1) Daily updates (end of day Slack: "Today: Completed X. Tomorrow: Will do Y. Blocked: Need Z from Priya."), (2) Document decisions (meeting decision → document in Notion, people who missed meeting can read), (3) Share progress (update task status, team knows your progress), (4) Proactive questions (if unclear, ask immediately, do not wait). Result: Visibility (everyone knows team progress), alignment (everyone on same page), blockers identified early (team helps immediately). In B.Com remote teams, over-communicate. Transparency = trust = alignment = performance.'
    },
    { 
      id: 18, 
      question: 'Your remote team feels disconnected (never met face-to-face, do not know each other as humans). How do you build virtual rapport?', 
      options: ['Avoid personal topics (keep professional)', 'Casual chats and VIDEO (virtual coffee, camera on meetings, personal sharing) - intentionally build connection', 'Text only communication', 'Minimal interaction'], 
      correct: 1,
      explanation: 'Build virtual rapport through casual chats and VIDEO (virtual coffee, camera on meetings, personal sharing). Office teams: Build rapport naturally (lunch together, hallway conversations, see each other daily). Remote teams: Rapport requires INTENTION. (1) Virtual coffee chats (15 mins, 1-on-1, casual, no agenda - learn about them as HUMANS: hobbies, goals, life), (2) Camera on meetings (see faces, read expressions, feel connected), (3) Personal sharing (start meetings with 10 mins personal: "How was your week? Any updates?"), (4) Informal channels (Slack #random for non-work chat, memes, jokes, life updates), (5) Team rituals (Friday wins, birthday celebrations, virtual games). Result: Team feels CONNECTED (not just coworkers, but humans who care about each other). Connection builds: Trust, engagement, loyalty, performance. In B.Com remote teams, build rapport intentionally. Video on. Share personally. Create connection.'
    },
    { 
      id: 19, 
      question: 'Your remote team spans 3 time zones (Mumbai, London, New York). How should you handle time zones?', 
      options: ['Ignore time zones (everyone adjusts)', 'RESPECT and schedule thoughtfully (find overlapping hours, rotate meeting times, record meetings, respect boundaries)', 'Expect immediate responses 24/7', 'Everyone must work 24/7'], 
      correct: 1,
      explanation: 'RESPECT time zones and schedule thoughtfully. Bad approach: Schedule meetings at YOUR convenient time (10 AM Mumbai = 4:30 AM London = 11:30 PM New York). London person wakes up at 4 AM (exhausted, resentful). New York person stays up till midnight (burned out). Good approach: (1) Find overlapping hours (use World Time Buddy, find time that works for all), (2) Rotate meeting times (this week 10 AM Mumbai, next week 3 PM Mumbai - fair to all), (3) Record meetings (people who miss can watch recording), (4) Async communication (use Slack/email for non-urgent, not everything needs meeting), (5) Respect boundaries (do not message at 11 PM expecting response, set status: "Offline 9 PM-9 AM"). Result: No burnout, no resentment, sustainable remote work. In B.Com remote teams, respect time zones. Schedule thoughtfully. Build sustainable collaboration.'
    },
    { 
      id: 20, 
      question: 'Your remote team uses 8 tools (Slack, Zoom, Notion, Asana, Trello, Drive, Email, WhatsApp). Team is confused (where to find updates? which tool for what?). What should you do?', 
      options: ['Use all 8 tools (more is better)', 'Choose RIGHT tool for PURPOSE (Slack for chat, Zoom for meetings, Notion for docs, Drive for files, Email for external) - reduce to 5 tools with clear purpose', 'Avoid all tools', 'Use only one tool for everything'], 
      correct: 1,
      explanation: 'Choose RIGHT tool for PURPOSE (not all tools, not one tool). Problem: 8 tools without clear purpose = confusion (where to find updates? which tool for what?), lost information (important message in wrong tool), inefficiency (switching between 8 tools). Solution: (1) Agree on tool PURPOSE: SLACK (quick chat, daily updates, check 3×/day), ZOOM (meetings, face-to-face, schedule in advance), NOTION (docs, tasks, knowledge base, single source of truth), GOOGLE DRIVE (file storage, organized folders), EMAIL (external communication). (2) Reduce 8 → 5 tools (remove Asana, Trello, WhatsApp - use Notion for tasks, Slack for chat). (3) Document in team handbook: "Which tool for what, how often to check, where to find info." Result: No confusion, efficient collaboration, team productivity improves 40%. In B.Com remote teams, choose 5-6 tools with clear purpose. Document tool usage. Prevent tool chaos.'
    },
    // Cross-functional (21-25)
    { 
      id: 21, 
      question: 'You work on startup project. Team: You (Business), Priya (Tech), Rahul (Design), Ankit (Engineering). What are cross-functional teams?', 
      options: ['Teams with same expertise (all business)', 'Teams with people from DIFFERENT departments/specialties (Business + Tech + Design + Engineering) - diverse expertise, but challenging (different languages, priorities)', 'Teams with only managers', 'Teams from one department'], 
      correct: 1,
      explanation: 'Cross-functional teams = people from DIFFERENT departments/specialties working together. Your team: Business (you), Tech (Priya), Design (Rahul), Engineering (Ankit). Diverse expertise is POWERFUL: (1) Business understands customers, market, revenue, (2) Tech understands coding, systems, scalability, (3) Design understands user experience, visual appeal, (4) Engineering understands infrastructure, performance. Together: Can build excellent product (all aspects covered). But diverse expertise is CHALLENGING: (1) Different jargon (CAC vs microservices vs wireframes vs backend), (2) Different priorities (customer acquisition vs bug fixing vs UI vs architecture), (3) Different perspectives (business vs tech vs design vs engineering). Result: Communication barriers, competing priorities, siloed thinking. Solution: Translate between domains, align around common goal, respect all expertise. In B.Com workplace, ALL companies have cross-functional teams. Master cross-functional collaboration = excel in any company.'
    },
    { 
      id: 22, 
      question: 'You (Business) say: "We need to optimize CAC through targeted ads." Priya (Tech) is confused: "What is CAC?" How should you work across functions?', 
      options: ['Use only your jargon (they should learn)', 'TRANSLATE between domains (explain CAC = "Customer Acquisition Cost - cost to get 1 customer, currently ₹500." Ask Priya to explain tech terms simply. Build shared language.)', 'Avoid communication (work in silos)', 'Demand they adapt to your language'], 
      correct: 1,
      explanation: 'Work across functions by TRANSLATING between domains. Problem: You say "CAC" (business jargon). Priya does not understand (she is tech, not business). Communication breaks down. Solution: TRANSLATE. Explain CAC: "Customer Acquisition Cost - how much we spend to get 1 customer. Currently ₹500/customer. Goal: Reduce to ₹300 by showing ads to right people." Priya understands. Similarly, when Priya says "microservices" (tech jargon), ASK for translation: "Can you explain simply?" Priya: "Breaking app into small parts. Each part does one thing. Easier to fix, scale." You understand. Translation requires: (1) Learn basics of other domains (10 hours learning tech basics), (2) Explain your jargon in simple terms + examples, (3) Ask for translation (do not stay confused), (4) Use analogies (API = waiter taking order to kitchen). Result: Shared language, understanding, collaboration. In B.Com cross-functional work, be bridge builder. Translate between domains.'
    },
    { 
      id: 23, 
      question: 'Your cross-functional team has competing priorities. You (Business): "Priority #1: Customer acquisition!" Priya (Tech): "Priority #1: Fix bugs!" Rahul (Design): "Priority #1: Better UI!" What should you do?', 
      options: ['Let priorities cause conflict', 'ALIGN priorities around COMMON GOAL: "Launch successful platform (1000 customers, ₹10L GMV)." ALL priorities serve this goal. Create integrated roadmap (Month 1: Bugs, Month 2: UI, Month 3: Acquisition).', 'Ignore other priorities', 'Let priorities lead to competition'], 
      correct: 1,
      explanation: 'ALIGN different priorities around COMMON GOAL. Problem: You want customer acquisition, Priya wants bug fixing, Rahul wants better UI. Competing priorities. Conflict. No progress. Solution: Find COMMON GOAL: "Launch successful platform: 1000 customers, ₹10L GMV, 8/10 satisfaction, 99% uptime." Now align: How do ALL priorities serve common goal? (1) Customer acquisition (your priority) → Get 1000 customers (serves common goal), (2) Bug fixing (Priya) → 99% uptime (serves common goal), (3) Better UI (Rahul) → 8/10 satisfaction (serves common goal). ALL priorities serve shared goal. Create integrated roadmap: Month 1 (fix critical bugs), Month 2 (improve UI), Month 3 (customer acquisition). Everyone gets their priority, sequenced to serve common goal. Result: Alignment, collaboration, no conflict. In B.Com cross-functional teams, competing priorities are normal. Do NOT fight. ALIGN around common goal.'
    },
    { 
      id: 24, 
      question: 'Your cross-functional team debates. You (Business): "Customer acquisition is most important." Priya (Tech): "Bug fixing is most important." Who is right? What does respect for expertise mean?', 
      options: ['You are right - business expertise is most important', 'BOTH are right. Value EACH perspective for its unique contribution. Your perspective (need customers) + Priya perspective (need working app) = BETTER decision (fix bugs THEN get customers).', 'Only trust your own expertise', 'Ignore differences'], 
      correct: 1,
      explanation: 'BOTH are right. Respect for expertise = value EACH perspective for its unique contribution. You think customer acquisition is most important (business perspective: no customers = no business). Priya thinks bug fixing is most important (tech perspective: app crashes = customers leave). Who is right? BOTH. Both perspectives are VALUABLE: (1) Your perspective is valid (need customers to validate product, generate revenue), (2) Priya perspective is valid (need working app or customers will leave). Respecting both leads to BETTER decision: "Fix critical bugs (Week 1-2) THEN do customer acquisition (Week 3-4). We get working app + customers." Integrated solution is BETTER than either pure customer acquisition (buggy app, customers leave) or pure bug fixing (no customers, no validation). In B.Com cross-functional teams, respect ALL expertise. Business, tech, design, engineering - ALL valuable. Integrate perspectives. Better decisions emerge from diverse expertise.'
    },
    { 
      id: 25, 
      question: 'Your cross-functional team has individual KPIs. You (Business): 1000 users. Priya (Tech): 99% uptime. Rahul (Design): 8/10 satisfaction. Each optimizes for THEIR KPI. Result: Silos. What does cross-functional success require?', 
      options: ['Avoid other departments', 'Focus on SHARED OUTCOMES: "Launch successful platform (1000 customers, ₹10L GMV, 8/10 satisfaction, 99% uptime)." Everyone contributes to shared outcome. Celebrate together.', 'Territorial thinking (defend your department)', 'Work in silos (each department separate)'], 
      correct: 1,
      explanation: 'Cross-functional success requires focus on SHARED OUTCOMES. Problem: You optimize for YOUR KPI (1000 users), Priya for HER KPI (99% uptime), Rahul for HIS (8/10 satisfaction). Individual optimization. Territorial thinking. Silos. Result: Suboptimal product (each department does their part well, but parts do not integrate). Solution: Define SHARED OUTCOME: "Launch successful platform: 1000 customers, ₹10L GMV, 8/10 satisfaction, 99% uptime." Everyone contributes to SHARED outcome: You (customer acquisition), Priya (reliability), Rahul (satisfaction). Celebrate SHARED success: "WE launched successfully! 1000 customers, ₹10L GMV! WE did this together!" (Not: "MY marketing got 1000 customers" - territorial.) Result: Alignment, collaboration, integrated product, shared celebration. In B.Com cross-functional work, shift from "MY department outcome" to "OUR shared outcome." Optimize for shared success. Celebrate together.'
    },
    // Team Building (26-30)
    { 
      id: 26, 
      question: 'Your team (5 members) has NO TRUST. People do not open up, ask for help, or share struggles. You want to build trust. What does team trust require?', 
      options: ['Time only (trust builds automatically)', 'VULNERABILITY + RELIABILITY: Share struggles/fears/mistakes (be human), deliver on commitments (be reliable). Trust = Vulnerability + Reliability.', 'Perfection (never make mistakes)', 'Avoiding mistakes (hide all errors)'], 
      correct: 1,
      explanation: 'Team trust requires VULNERABILITY + RELIABILITY. VULNERABILITY: Share your struggles, fears, mistakes. Be HUMAN. Example: Team meeting, you say: "I made mistake last week (campaign typo). I felt terrible. I was scared you would judge me. But I learned: Always double-check." Team sees: You are human (not perfect robot), you are vulnerable (willing to admit mistakes). Trust begins. Others share: Priya: "I am struggling with personal issue (family problem)." Team supports: "We are here for you." Vulnerability creates CONNECTION. RELIABILITY: Do what you say. Be consistent. You promise to help Priya → You help. You promise to review Rahul work → You review. You show up on time. You deliver on commitments. Team sees: You are RELIABLE (can be trusted). Trust deepens. Vulnerability + Reliability = TRUST. In B.Com teams, build trust by being vulnerable (share struggles) and reliable (deliver on commitments). Without trust, team cannot collaborate effectively.'
    },
    { 
      id: 27, 
      question: 'Your team works together on projects but feels disconnected (do not know each other as humans). What does effective team building involve?', 
      options: ['Work tasks only (just focus on work)', 'Creating CONNECTION and SHARED IDENTITY: Team lunches (know each other as humans), team offsites (create memories), team identity (name, values, goals, rituals, story). Build team, not just work group.', 'Forcing fun (mandatory activities)', 'Avoiding personal topics (keep professional)'], 
      correct: 1,
      explanation: 'Effective team building involves creating CONNECTION and SHARED IDENTITY. CONNECTION: Create shared experiences. (1) Team lunches (weekly, casual, no work talk - get to know each other as HUMANS: hobbies, goals, life), (2) Team offsites (quarterly, fun activities - escape room, hiking - create MEMORIES), (3) Team challenges (monthly, compete as TEAM), (4) Team volunteering (quarterly, do good together). Shared experiences create: Connection (know each other), memories (shared stories), identity (we are team that does things together). SHARED IDENTITY: (1) Team NAME ("Growth Hackers"), (2) Team VALUES ("Experiment boldly, support always"), (3) Team GOALS ("Achieve 10M impressions"), (4) Team RITUALS (Monday kickoff, Friday wins), (5) Team STORY ("We started as 5 disconnected individuals, became high-performing team"). Identity creates: Commitment (care about team), pride (proud to be on team), cohesion (feel connected). In B.Com teams, build connection and identity. Transform work group into cohesive team.'
    },
    { 
      id: 28, 
      question: 'Your team completes successful campaign (1M impressions, 10K conversions). Manager asks: "Should we celebrate?" Some say: "No time, move to next project." Why should you celebrate team wins?', 
      options: ['Show off to other teams', 'Build MORALE and TEAM IDENTITY: Recognize all contributions (everyone feels valued), create shared memories (we did this together), build winning culture (motivates future wins). Celebrate big AND small wins.', 'Create competition within team', 'Waste time (celebrations are not productive)'], 
      correct: 1,
      explanation: 'Celebrate team wins to build MORALE and TEAM IDENTITY. When team succeeds (campaign: 1M impressions, 10K conversions), CELEBRATE TOGETHER. Team meeting: "WE did this! Priya (email), Rahul (ads), Ankit (content), Sarah (analytics), Me (social media) - ALL contributed. This is TEAM win!" Order pizza, share stories: "What was your favorite moment?" Everyone feels: (1) RECOGNIZED (their contribution mattered), (2) CONNECTED (we did this together), (3) PROUD (we are good team). Celebration builds: (1) MORALE (people feel good, energized, motivated), (2) IDENTITY (we are winning team, we celebrate together), (3) MOTIVATION (people want more wins). Celebrate ALL wins (big AND small): Campaign success (big win), Priya finished project (small win), team hit deadline (small win). Frequent celebration maintains high morale. In B.Com teams, celebrate every win. Recognition builds morale. Shared celebration builds identity. Winning culture motivates excellence.'
    },
    { 
      id: 29, 
      question: 'Priya (team member) is struggling (family issue - stressed, distracted, sad). Team notices. How should you support team members?', 
      options: ['Do all their work for them', 'Offer HELP and ENCOURAGEMENT: "Priya, take Friday off. We will cover your work." "We are here for you." Support beyond work - care about them as HUMANS. Build resilience.', 'Criticize their performance', 'Ignore struggles (not your problem)'], 
      correct: 1,
      explanation: 'Support team members by offering HELP and ENCOURAGEMENT. Priya is struggling (family issue - stressed, distracted, sad). Team supports: You: "Priya, take Friday off. We will cover your work." Rahul: "I will handle your email campaign." Ankit: "I will help with your project." Sarah: "Let me know if you need anything." Priya (tearful): "Thank you. I feel supported." Support creates: (1) TRUST (people know team will help when they struggle), (2) RESILIENCE (team can handle adversity together), (3) LOYALTY (people do not want to leave supportive team). Support goes BEYOND WORK. Care about team members as HUMANS (not just work output). When someone struggles (personal issue, work overwhelm, mistake), support them. When YOU make mistake, team supports: "It is okay. We all make mistakes. Let us fix this together." You feel: Supported, safe, grateful. In B.Com teams, support each other through personal struggles, work challenges, academic pressure. Supportive teams are resilient teams.'
    },
    { 
      id: 30, 
      question: 'Your team has NO IDENTITY (no name, no values, no goals, no rituals, no story). People feel disconnected. Manager: "Build team identity." What does team identity create?', 
      options: ['Division (us vs them)', 'COHESION and COMMITMENT: People feel connected (we are ONE team), committed (care about team success), proud (proud to be on team). Identity transforms individuals into unified team.', 'Exclusivity (excludes others)', 'Problems (unnecessary complexity)'], 
      correct: 1,
      explanation: 'Team identity creates COHESION and COMMITMENT. Team creates IDENTITY: (1) Team NAME: "Growth Hackers" (reflects who we are), (2) Team VALUES: "Experiment boldly, learn fast, support always, celebrate together" (what we believe), (3) Team GOALS: "Achieve 10M impressions, 100K conversions, 8/10 satisfaction" (what we are achieving together), (4) Team RITUALS: Monday kickoff (share goals), Friday wins (share 1 win each), monthly lunch, quarterly offsite (repeated practices that build connection), (5) Team STORY: "We started as 5 disconnected individuals. We built trust, connection, cohesion. We became high-performing team. We are Growth Hackers" (our journey). Identity creates: (1) COHESION (people feel CONNECTED - we are ONE unit, not 5 individuals), (2) COMMITMENT (people CARE about team success - not just individual success), (3) PRIDE (people are PROUD to be on team). Result: Team is no longer 5 individuals. Team is ONE unit with shared identity. In B.Com teams, build identity: Create name, define values, set goals, establish rituals, craft story. Identity transforms disconnected individuals into cohesive, committed team.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Teamwork master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong collaboration skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review teamwork techniques!', xpReward: 100 }
  }
};
