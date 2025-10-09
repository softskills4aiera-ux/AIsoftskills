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
      scenario: 'You are assigned to a B.Com group project team (5 members). Week 1: Everyone is polite, excited, agreeing on everything. "This will be great!" Week 2: Conflicts erupt. Priya wants to do market research. Rahul says: "That is a waste of time, let us just start the presentation." Ankit is silent in meetings but complains privately: "Nobody listens to me." Sarah does not respond to messages for 3 days. You are frustrated: "We have talented people, but we are a mess! Unclear who does what. Poor communication. Personality clashes. No progress." Your professor says: "Your team is in the storming stage. This is normal. You need to understand team dynamics - how teams form, develop, and perform. Navigate this stage, and you will become high-performing. Ignore it, and you will fail the project." You need to learn team dynamics to transform chaos into collaboration.',
      problemExplanation: [
        '🤝 Forming Stage (Week 1): Politeness Without Progress - Everyone is polite, agreeable, avoiding conflict. "This will be great!" But no real work happens. Why? (1) Testing boundaries (what can I say? Who is in charge?), (2) Avoiding conflict (do not want to upset anyone), (3) Unclear roles (who does what?), (4) Surface-level relationships (do not know each other yet). You mistake politeness for teamwork. Reality: Forming is NOT high performance. It is the honeymoon phase. Real work requires moving past politeness to honest collaboration. But you do not know this. You think: "We are getting along, so we are a great team!" Week 2 proves you wrong.',
        '⚡ Storming Stage (Week 2): Conflict Without Resolution - Conflicts erupt. Priya vs Rahul (market research vs skip research). Ankit feels unheard. Sarah goes silent. You think: "This team is broken! We are failing!" Reality: Storming is NORMAL and NECESSARY. Why? (1) Honest opinions emerge (Priya and Rahul disagree - good! Now you can find best approach), (2) Power dynamics surface (who makes decisions?), (3) Roles get tested (Ankit wants voice, Sarah withdraws). Storming reveals problems that were hidden in forming. Problem: You do not know how to navigate storming. You avoid conflict (hoping it goes away) or escalate conflict (blaming each other). Result: Team gets stuck in storming. Project fails.',
        '🎯 Unclear Roles: Who Does What? - Week 3: You divide tasks. "Priya, you do research. Rahul, you do slides. Ankit, you do data. Sarah, you do design. I will coordinate." Sounds clear? NO. Reality: (1) Overlapping work (Priya researches market, Ankit researches data - overlap, confusion), (2) Gaps (who writes the report? Nobody assigned. Deadline approaches, panic), (3) No accountability (Sarah misses deadline. You ask: "Where is design?" Sarah: "I thought Rahul was doing it." Rahul: "No, Sarah was assigned!"). Unclear roles = duplicated effort + missed work + blame. You need RACI matrix: Responsible (who does it?), Accountable (who approves?), Consulted (who gives input?), Informed (who needs updates?). Without RACI, chaos.',
        '🔇 No Psychological Safety: Fear of Speaking Up - Ankit is silent in meetings but complains privately: "Nobody listens to me. I have ideas, but Priya and Rahul dominate. I tried to speak up once, Rahul interrupted: That will not work. I gave up." Ankit does not feel psychologically safe (safe to take risks, speak up, make mistakes without punishment). Result: (1) Lost ideas (Ankit has good ideas, team never hears them), (2) Passive resistance (Ankit stops contributing, does minimum work), (3) Private complaints (Ankit complains to you, not to team - conflict goes underground). Team needs psychological safety: Everyone feels safe to speak, disagree, make mistakes, ask questions. Without it, only loud voices (Priya, Rahul) dominate. Quiet voices (Ankit) disappear. Team loses 50% of its intelligence.',
        '📢 Poor Communication Patterns: Assumptions and Silence - Sarah does not respond to messages for 3 days. You assume: "She is lazy. She does not care." Reality: Sarah is overwhelmed (3 other projects, family issues, struggling with design software). She wants to ask for help but fears judgment: "They will think I am incompetent." So she goes silent. You do not know this because team has poor communication patterns: (1) Assumptions (you assume Sarah is lazy, not overwhelmed), (2) No check-ins (nobody asks: "Sarah, are you okay? Need help?"), (3) One-way updates (you send tasks, expect completion, no dialogue), (4) No feedback loops (Sarah struggles, nobody knows until deadline). Good communication requires: Regular check-ins, asking questions, creating space for vulnerability, feedback loops. Without it, team operates on assumptions and silence.',
        '🎪 No Team Norms: Everyone Has Different Expectations - Week 4: You schedule meeting for 10 AM. Priya arrives 10:00 sharp. Rahul arrives 10:15. Ankit arrives 10:30. Sarah does not show up (forgot). You are frustrated: "Why can we not be on time?" Reality: Team has no agreed norms (shared expectations for how we work together). Priya expects: "Meetings start on time." Rahul expects: "10 AM means 10:15 (Indian Standard Time)." Ankit expects: "Meetings are optional if I am busy." Sarah expects: "Someone will remind me." Different expectations = frustration. Team needs norms: (1) Meetings start at 10:00 sharp (no IST), (2) If you are late, message group, (3) Attendance is mandatory unless you inform 24 hours ahead, (4) Decisions are made by consensus, not by loudest voice. Norms create predictability. Without norms, chaos.'
      ],
      solutionApproach: [
        '📊 Understand Team Development Stages (Tuckman Model): Teams go through 4 stages. FORMING (Week 1): Polite, agreeable, testing boundaries. Low productivity (everyone is cautious). Goal: Get to know each other, clarify purpose. STORMING (Week 2-3): Conflict, disagreement, power struggles. Productivity dips (energy goes to conflict). Goal: Navigate conflict, clarify roles, establish norms. This is NORMAL and NECESSARY. Do not avoid it. NORMING (Week 4-5): Resolve conflicts, agree on norms, roles clear. Productivity rises (energy goes to work). Goal: Solidify ways of working, build trust. PERFORMING (Week 6+): High trust, clear roles, smooth collaboration. High productivity (team operates like well-oiled machine). Goal: Deliver excellent results. Knowing these stages helps you: (1) Expect storming (not panic when conflict happens), (2) Navigate it (use tools: RACI, norms, psychological safety), (3) Reach performing (high performance is earned, not automatic).',
        '🎯 Clarify Roles Using RACI Matrix: Create RACI matrix to eliminate role confusion. For EACH task, assign: R (Responsible: who does the work?), A (Accountable: who approves/owns outcome?), C (Consulted: who gives input before?), I (Informed: who needs updates after?). Example: Task = Market Research. R: Priya (does research). A: You (approve research scope and quality). C: Rahul, Ankit (give input on what to research). I: Sarah (gets research findings to inform design). RACI eliminates: (1) Overlapping work (only Priya is Responsible for research), (2) Gaps (every task has R and A), (3) Confusion (everyone knows their role). Create RACI for ALL major tasks in Week 2 (before storming escalates). Review weekly. Update as needed.',
        '🛡️ Build Psychological Safety: Create environment where everyone feels safe to speak, disagree, make mistakes, ask for help. How? (1) Invite quiet voices: "Ankit, we have not heard from you. What do you think?" (2) Thank dissent: Rahul disagrees with Priya. You say: "Thank you for disagreeing. Let us explore both perspectives." (3) Share your own mistakes: "I messed up the timeline. My bad. Let us fix it." (Models vulnerability). (4) No blame: Sarah misses deadline. You say: "What happened? How can we help?" (not: "You are irresponsible!"). (5) Establish norm: "In this team, all ideas are welcome. Disagreement is good. Mistakes are learning opportunities." Psychological safety takes time. But it is the #1 predictor of team performance (Google Project Aristotle research). Without it, team underperforms. With it, team excels.',
        '📋 Establish Team Norms (Working Agreements): In Week 2 (during storming), hold 1-hour meeting to establish norms. Ask: "How do we want to work together?" Discuss and agree on: (1) Meetings: Start time (10:00 sharp, no IST), attendance (mandatory unless 24-hour notice), agenda (shared 1 day before). (2) Communication: Response time (reply within 24 hours), platform (WhatsApp for urgent, email for updates), check-ins (weekly 30-min sync). (3) Decision-making: Consensus (discuss until everyone agrees), voting (if consensus fails, majority wins), veto (anyone can veto if strong objection). (4) Conflict: Address directly (no private complaints), focus on issue not person, seek win-win. (5) Accountability: Deadlines are commitments (if you miss, inform 48 hours ahead), peer feedback (give constructive feedback monthly). Write norms down. Review in Week 4. Update as needed. Norms create predictability and trust.',
        '💬 Foster Open Communication: Transform poor communication patterns into open dialogue. (1) Regular check-ins: Weekly 30-min sync. Everyone shares: What did I do? What will I do? What is blocking me? (2) Ask, do not assume: Sarah is silent. You ask: "Sarah, I noticed you have not responded. Are you okay? Need help?" (not assume: "She is lazy"). (3) Create space for vulnerability: You share: "I am struggling with coordination. Feeling overwhelmed." (Models openness. Others feel safe to share). (4) Feedback loops: After each milestone, ask: "What went well? What can we improve?" (Continuous improvement). (5) Celebrate progress: "We finished research! Great work, Priya!" (Builds morale). Open communication requires intention. Default is assumptions and silence. Intentional communication creates trust and clarity.',
        '🚀 Navigate Storming to Reach Performing: Storming (Week 2-3) is uncomfortable but necessary. How to navigate? (1) Acknowledge it: "We are in storming stage. Conflict is normal. Let us work through it." (2) Address conflicts early: Priya vs Rahul on research. You facilitate: "Priya, why do you think research is important? Rahul, why do you think we should skip it? Let us find middle ground." (3) Use tools: RACI (clarify roles), norms (establish expectations), psychological safety (everyone can speak). (4) Be patient: Storming takes 2-3 weeks. Do not expect immediate harmony. (5) Celebrate norming: Week 4, conflicts reduce, collaboration improves. You say: "We made it through storming! We are stronger now." Result: By Week 6, team reaches performing (high trust, clear roles, smooth collaboration, excellent results). You transformed chaos into high-performing team.'
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
          question: 'Your B.Com group project team (Week 1): Everyone is polite, agreeing on everything. "This will be great!" But no real work happens. Week 2: Conflicts erupt. Priya vs Rahul debate. You panic: "Team is broken!" What stage are you in?',
          options: [
            'Starting, working, finishing - just normal project phases',
            'Forming (Week 1: polite, low productivity) → Storming (Week 2: conflict, necessary for growth). This is NORMAL. Navigate storming to reach norming and performing.',
            'Beginning, middle, end - linear progression',
            'Planning, doing, reviewing - standard workflow'
          ],
          correct: 1,
          explanation: 'Your team is transitioning from FORMING to STORMING (Tuckman Model). Week 1 (Forming): Polite, agreeable, avoiding conflict. Everyone says "This will be great!" but no real work happens. Why? Testing boundaries, unclear roles, surface relationships. Low productivity is normal in forming. Week 2 (Storming): Conflicts erupt (Priya vs Rahul). You think "Team is broken!" Reality: Storming is NORMAL and NECESSARY. Honest opinions emerge, power dynamics surface, roles get tested. Most teams get stuck here because they do not know how to navigate conflict. Navigate storming (acknowledge it, address conflicts, use RACI, build psychological safety, establish norms) to reach norming (Week 4-5: conflicts resolve, productivity rises) and performing (Week 6+: high trust, smooth collaboration, excellent results). In B.Com group projects, expect forming → storming → norming → performing. Do not panic at storming. Navigate it. High performance is earned through navigating these stages, not automatic from Day 1.'
        },
        {
          id: 2,
          question: 'Week 2: Your team is in storming. Priya wants market research. Rahul says: "Waste of time!" Conflict erupts. Your teammate says: "We should avoid conflict. Everyone should just agree." Is this right?',
          options: [
            'Yes - conflict means team is failing, avoid it at all costs',
            'No - Storming (conflict) is NORMAL and NECESSARY for team growth. Do not avoid it, NAVIGATE it. Facilitate: "Priya, why research? Rahul, why skip?" Find middle ground.',
            'Yes - perfect teams never have conflict',
            'Yes - conflict should be suppressed immediately'
          ],
          correct: 1,
          explanation: 'NO - avoiding conflict keeps team stuck in forming (polite but unproductive). Storming is NORMAL and NECESSARY. Why? (1) Honest opinions emerge: Priya and Rahul disagree (good! Now you can find best approach). (2) Power dynamics surface: Who makes decisions? (3) Roles get tested: Who does what? Suppressing conflict: Priya and Rahul stay silent, resentment builds, team never reaches high performance. Navigating conflict: You facilitate: "Priya, why is research important?" (Answer: "Ensures we target right market.") "Rahul, why skip it?" (Answer: "Limited time.") "What if we do QUICK research (2 days, not 2 weeks)? Priya gets data, Rahul gets speed." Both agree. Conflict resolved. Team moves to norming. In B.Com teams, do NOT avoid storming. Navigate it: (1) Acknowledge ("Storming is normal"), (2) Address conflicts early, (3) Use tools (RACI, norms, psychological safety), (4) Be patient (2-3 weeks), (5) Celebrate norming. Result: Team reaches performing (high trust, excellent results). Conflict = growth, not failure.'
        },
        {
          id: 3,
          question: 'Week 3: You assign tasks. "Priya, research. Rahul, slides. Ankit, data." Week 4: Priya and Ankit both research (overlap). Nobody writes report (gap). Sarah: "I thought Rahul was doing design!" What tool prevents this?',
          options: [
            'Better communication - just talk more',
            'RACI Matrix: For EACH task, assign R (Responsible: who does work?), A (Accountable: who approves?), C (Consulted: who gives input?), I (Informed: who needs updates?). Eliminates overlap, gaps, confusion.',
            'More meetings - schedule daily check-ins',
            'Stricter deadlines - enforce accountability'
          ],
          correct: 1,
          explanation: 'RACI Matrix prevents role confusion. Problem: You said "Priya, research" but did not clarify: Who approves research? Who gives input? Who needs updates? Result: Priya and Ankit both research (overlap), nobody writes report (gap), Sarah thinks Rahul is doing design (confusion). RACI Solution: For EACH task, assign: R (Responsible: who DOES the work?), A (Accountable: who APPROVES/owns outcome?), C (Consulted: who gives INPUT before?), I (Informed: who needs UPDATES after?). Example: Market Research → R: Priya (does research), A: You (approve scope/quality), C: Rahul, Ankit (give input on what to research), I: Sarah (gets findings for design). RACI eliminates: (1) Overlap (only Priya is R), (2) Gaps (every task has R and A), (3) Confusion (Sarah knows she is I, not R). Create RACI in Week 2 (before storming escalates). Review weekly. In B.Com group projects, RACI transforms chaos into clarity. Without it: duplicated effort, missed work, blame. With it: clear roles, no confusion, smooth collaboration.'
        },
        {
          id: 4,
          question: 'Ankit is silent in meetings but complains privately: "Nobody listens. Priya and Rahul dominate. I gave up." Google Project Aristotle (2015) found the #1 predictor of team performance is:',
          options: [
            'Talent - having the smartest team members',
            'Psychological Safety - team members feel safe to speak up, disagree, make mistakes without punishment. Ankit lacks this. Result: Lost ideas, team underperforms.',
            'Resources - having the best tools and budget',
            'Strategy - having the best plan'
          ],
          correct: 1,
          explanation: 'Psychological Safety is the #1 predictor of team performance (Google Project Aristotle, 2015). Google studied 180 teams. Question: What makes teams high-performing? Answer: Psychological safety (team members feel safe to speak up, disagree, make mistakes without punishment) matters MORE than talent, resources, or strategy. Ankit lacks psychological safety: "Nobody listens. Priya and Rahul dominate. I tried to speak up, Rahul interrupted. I gave up." Result: (1) Lost ideas (Ankit has good ideas, team never hears them), (2) Passive resistance (Ankit does minimum work), (3) Team loses 50% of its intelligence (only loud voices heard). Build psychological safety: (1) Invite quiet voices ("Ankit, what do you think?"), (2) Thank dissent ("Thank you for disagreeing"), (3) Share your mistakes ("I messed up"), (4) No blame ("What happened? How can we help?"), (5) Establish norm ("All ideas welcome"). Result: Ankit speaks up, team hears his ideas, performance improves 2×. In B.Com teams, psychological safety is not "nice to have." It is THE differentiator between mediocre and high-performing teams.'
        },
        {
          id: 5,
          question: 'Week 4: Meeting scheduled for 10 AM. Priya arrives 10:00. Rahul arrives 10:15. Ankit arrives 10:30. Sarah forgets. You are frustrated. What is missing?',
          options: [
            'Discipline - team members are lazy',
            'Team Norms - agreed expectations for how we work together (meetings start 10:00 sharp, attendance mandatory unless 24-hour notice). Different expectations = frustration. Norms create predictability.',
            'Punishment - need stricter consequences',
            'Leadership - need someone to enforce rules'
          ],
          correct: 1,
          explanation: 'Team Norms are missing (agreed expectations for how we work together). Problem: No agreed norms. Priya expects: "Meetings start on time." Rahul expects: "10 AM means 10:15 (IST)." Ankit expects: "Meetings are optional if busy." Sarah expects: "Someone will remind me." Different expectations = frustration. Solution: Establish team norms in Week 2. Hold 1-hour meeting. Ask: "How do we want to work together?" Agree on: (1) Meetings: Start 10:00 sharp (no IST), attendance mandatory (unless 24-hour notice), agenda shared 1 day before. (2) Communication: Reply within 24 hours, WhatsApp for urgent, weekly check-ins. (3) Decision-making: Consensus, voting if needed, veto for strong objections. (4) Conflict: Address directly, focus on issue not person, seek win-win. (5) Accountability: Deadlines are commitments, inform 48 hours ahead if miss, peer feedback monthly. Write norms down. Review in Week 4. Update as needed. Norms create predictability and trust. In B.Com teams, without norms: chaos, frustration, misaligned expectations. With norms: smooth collaboration, everyone knows what to expect, high performance.'
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
      scenario: 'You have opportunities to lead but lack confidence and skills to inspire and guide others effectively.',
      problemExplanation: ['Confuse leadership with authority', 'Lack leadership skills', 'Fear of responsibility', 'No leadership model'],
      solutionApproach: ['Understand leadership styles', 'Lead by example', 'Inspire and motivate', 'Delegate effectively', 'Develop others', 'Build influence without authority']
    },
    video: { title: 'Developing Leadership Skills', duration: 6, content: ['Leadership is influence, not authority.', 'Different styles: servant, transformational, situational.', 'Lead by example: model the behavior you want.', 'Inspire with vision and purpose.', 'Delegate to develop others, not just offload work.', 'Build influence through competence and character.'] },
    quiz: {
      title: 'Leadership Quiz',
      questions: [
        { id: 6, question: 'Leadership is primarily:', options: ['Having authority', 'Influence and inspiring others', 'Being bossy', 'Having a title'], correct: 1 },
        { id: 7, question: 'Servant leadership focuses on:', options: ['Being served', 'Serving and developing team members', 'Avoiding responsibility', 'Following orders'], correct: 1 },
        { id: 8, question: 'Lead by example means:', options: ['Give orders', 'Model the behavior you want to see', 'Do everything yourself', 'Avoid delegation'], correct: 1 },
        { id: 9, question: 'Effective delegation:', options: ['Dump unwanted tasks', 'Develop others through responsibility', 'Avoid work', 'Control everything'], correct: 1 },
        { id: 10, question: 'Leadership without authority requires:', options: ['Forcing compliance', 'Building influence through competence', 'Having a title', 'Being aggressive'], correct: 1 }
      ]
    },
    challenge: { title: 'Leadership Challenge', description: 'Develop leadership capabilities', contexts: {
      academic: { title: 'Academic Leadership', description: 'Lead student teams and initiatives', instructions: ['Take leadership role', 'Set vision', 'Inspire team', 'Delegate tasks', 'Develop team members'], successCriteria: ['Effective leadership', 'Team achieves goals', 'Members grow', 'Strong influence'] },
      professional: { title: 'Professional Leadership', description: 'Lead in workplace', instructions: ['Lead project/team', 'Apply leadership style', 'Build influence', 'Develop others', 'Achieve results'], successCriteria: ['Strong leadership', 'Team performance', 'Others developed', 'Business results'] },
      personal: { title: 'Personal Leadership', description: 'Lead in personal contexts', instructions: ['Lead personal initiative', 'Inspire others', 'Model behavior', 'Help others grow'], successCriteria: ['Positive influence', 'Others inspired', 'Goals achieved'] }
    } },
    feedback: { strengths: ['Good leadership instincts', 'Inspire others well', 'Lead by example'], improvements: ['Delegate more', 'Develop more leadership styles', 'Build more influence'], nextSteps: ['Take leadership roles', 'Study leadership', 'Mentor others'] },
    badge: { name: 'Leader', emoji: '🎯', description: 'Emerging leader and influencer' },
    shareMessage: 'Just developed leadership skills! 🎯 #Leadership #Teamwork'
  },
  {
    id: 'conflict-management',
    title: 'Conflict Management',
    emoji: '🤝',
    context: 'professional' as const,
    discover: {
      scenario: 'Team conflicts are escalating and affecting productivity. You need skills to manage and resolve disagreements constructively.',
      problemExplanation: ['Avoiding conflicts', 'Aggressive confrontation', 'No conflict resolution skills', 'Conflicts damage relationships'],
      solutionApproach: ['Address conflicts early', 'Use active listening', 'Find win-win solutions', 'Separate people from problems', 'Mediate fairly']
    },
    video: { title: 'Managing Team Conflicts', duration: 6, content: ['Conflict is natural and can be productive.', 'Address conflicts early before they escalate.', 'Listen actively to all perspectives.', 'Separate people from the problem.', 'Focus on interests, not positions.', 'Seek win-win solutions that satisfy everyone.'] },
    quiz: {
      title: 'Conflict Management Quiz',
      questions: [
        { id: 11, question: 'Healthy team conflict:', options: ['Should be avoided', 'Can improve decisions and relationships', 'Is always destructive', 'Means team is failing'], correct: 1 },
        { id: 12, question: 'When conflicts arise:', options: ['Ignore them', 'Address early before escalation', 'Wait for them to resolve', 'Blame someone'], correct: 1 },
        { id: 13, question: 'Separate people from problem means:', options: ['Isolate people', 'Focus on issue not personalities', 'Remove team members', 'Avoid people'], correct: 1 },
        { id: 14, question: 'Win-win solutions:', options: ['Impossible', 'Satisfy all parties interests', 'One side wins', 'Compromise quality'], correct: 1 },
        { id: 15, question: 'Best conflict approach:', options: ['Aggressive', 'Collaborative problem-solving', 'Avoidance', 'Competition'], correct: 1 }
      ]
    },
    challenge: { title: 'Conflict Management Challenge', description: 'Master constructive conflict resolution', contexts: {
      academic: { title: 'Academic Conflict', description: 'Resolve study team conflicts', instructions: ['Identify team conflict', 'Listen to all sides', 'Find common ground', 'Facilitate resolution'], successCriteria: ['Conflict resolved', 'Relationships maintained', 'Better solutions', 'Team stronger'] },
      professional: { title: 'Professional Conflict', description: 'Manage workplace conflicts', instructions: ['Address workplace conflict', 'Use mediation skills', 'Focus on interests', 'Find win-win'], successCriteria: ['Productive resolution', 'Relationships preserved', 'Business outcomes', 'Team cohesion'] },
      personal: { title: 'Personal Conflict', description: 'Handle personal disagreements', instructions: ['Address personal conflict', 'Listen empathetically', 'Find mutual solution'], successCriteria: ['Conflict resolved', 'Relationship strengthened', 'Mutual understanding'] }
    } },
    feedback: { strengths: ['Handle conflicts well', 'Listen actively', 'Find win-win'], improvements: ['Address conflicts earlier', 'Mediate better', 'Build more skills'], nextSteps: ['Practice mediation', 'Study conflict resolution', 'Help others resolve conflicts'] },
    badge: { name: 'Peacemaker', emoji: '🤝', description: 'Expert in conflict resolution' },
    shareMessage: 'Just mastered conflict management! 🤝 #ConflictResolution #Teamwork'
  },
  {
    id: 'remote-collaboration',
    title: 'Remote Collaboration',
    emoji: '💻',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team is distributed across locations and time zones. Remote work creates communication and collaboration challenges.',
      problemExplanation: ['Communication gaps', 'Time zone difficulties', 'Lack of personal connection', 'Tool overload'],
      solutionApproach: ['Use async communication effectively', 'Leverage collaboration tools', 'Build virtual rapport', 'Set clear expectations', 'Over-communicate intentionally']
    },
    video: { title: 'Remote Collaboration Excellence', duration: 6, content: ['Remote work requires intentional collaboration.', 'Async communication: detailed messages, clear context.', 'Use right tools: Slack for chat, Zoom for meetings, Notion for docs.', 'Build rapport virtually: casual chats, video on.', 'Over-communicate: document decisions, share updates.', 'Respect time zones and work-life boundaries.'] },
    quiz: {
      title: 'Remote Collaboration Quiz',
      questions: [
        { id: 16, question: 'Async communication means:', options: ['Fast replies', 'Messages that do not require immediate response', 'Video calls', 'Phone calls'], correct: 1 },
        { id: 17, question: 'In remote teams, you should:', options: ['Under-communicate', 'Over-communicate intentionally', 'Avoid communication', 'Only use email'], correct: 1 },
        { id: 18, question: 'Build virtual rapport by:', options: ['Avoiding personal topics', 'Casual chats and video-on meetings', 'Text only', 'Minimal interaction'], correct: 1 },
        { id: 19, question: 'Working across time zones:', options: ['Ignore them', 'Respect boundaries and schedule thoughtfully', 'Expect immediate responses', 'Work 24/7'], correct: 1 },
        { id: 20, question: 'Remote collaboration tools should:', options: ['Use all available', 'Choose right tool for each purpose', 'Avoid tools', 'Use one only'], correct: 1 }
      ]
    },
    challenge: { title: 'Remote Collaboration Challenge', description: 'Master remote teamwork', contexts: {
      academic: { title: 'Academic Remote Work', description: 'Collaborate on remote projects', instructions: ['Join remote team project', 'Use collaboration tools', 'Communicate async', 'Build virtual rapport'], successCriteria: ['Effective remote collaboration', 'Clear communication', 'Project success', 'Strong connections'] },
      professional: { title: 'Professional Remote Work', description: 'Excel in remote workplace', instructions: ['Work on distributed team', 'Master remote tools', 'Build virtual presence', 'Deliver results'], successCriteria: ['Productive remotely', 'Strong virtual relationships', 'Business results', 'Team cohesion'] },
      personal: { title: 'Personal Remote Collaboration', description: 'Collaborate remotely on personal projects', instructions: ['Remote personal project', 'Use digital tools', 'Stay connected', 'Achieve goals'], successCriteria: ['Effective remote work', 'Maintain connections', 'Goals achieved'] }
    } },
    feedback: { strengths: ['Good remote communication', 'Use tools well', 'Build virtual rapport'], improvements: ['Over-communicate more', 'Try more tools', 'Build stronger connections'], nextSteps: ['Master async communication', 'Learn advanced tools', 'Build remote leadership'] },
    badge: { name: 'Remote Collaborator', emoji: '💻', description: 'Expert in remote teamwork' },
    shareMessage: 'Just mastered remote collaboration! 💻 #RemoteWork #Teamwork'
  },
  {
    id: 'cross-functional-teams',
    title: 'Cross-functional Teams',
    emoji: '🔀',
    context: 'professional' as const,
    discover: {
      scenario: 'You work with people from different departments with different expertise, priorities, and languages. Collaboration is challenging.',
      problemExplanation: ['Different expertise and jargon', 'Competing priorities', 'Siloed thinking', 'Communication barriers'],
      solutionApproach: ['Learn to translate between domains', 'Find common goals', 'Respect different perspectives', 'Bridge communication gaps', 'Focus on shared outcomes']
    },
    video: { title: 'Cross-functional Collaboration', duration: 6, content: ['Cross-functional teams bring diverse expertise.', 'Challenge: different languages and priorities.', 'Learn enough to communicate: speak their language.', 'Find common goals that transcend departments.', 'Respect expertise: everyone brings unique value.', 'Focus on shared outcomes, not territorial wins.'] },
    quiz: {
      title: 'Cross-functional Teams Quiz',
      questions: [
        { id: 21, question: 'Cross-functional teams include:', options: ['Same expertise', 'People from different departments/specialties', 'Only managers', 'One department'], correct: 1 },
        { id: 22, question: 'To work across functions:', options: ['Use only your jargon', 'Learn to translate between domains', 'Avoid communication', 'Demand they adapt'], correct: 1 },
        { id: 23, question: 'Different priorities should:', options: ['Cause conflict', 'Be aligned around common goals', 'Be ignored', 'Lead to competition'], correct: 1 },
        { id: 24, question: 'Respect for expertise means:', options: ['Defer to all opinions', 'Value each perspective for its unique contribution', 'Only trust your own', 'Ignore differences'], correct: 1 },
        { id: 25, question: 'Cross-functional success requires:', options: ['Avoiding others', 'Focus on shared outcomes', 'Territorial thinking', 'Working in silos'], correct: 1 }
      ]
    },
    challenge: { title: 'Cross-functional Challenge', description: 'Excel in diverse teams', contexts: {
      academic: { title: 'Academic Cross-functional', description: 'Work across academic disciplines', instructions: ['Join interdisciplinary project', 'Learn other fields basics', 'Find common goals', 'Bridge communication'], successCriteria: ['Effective collaboration', 'Mutual understanding', 'Integrated solutions', 'Project success'] },
      professional: { title: 'Professional Cross-functional', description: 'Collaborate across departments', instructions: ['Work on cross-functional project', 'Learn other functions', 'Align priorities', 'Deliver together'], successCriteria: ['Smooth collaboration', 'Aligned goals', 'Business results', 'Strong relationships'] },
      personal: { title: 'Personal Cross-functional', description: 'Collaborate with diverse people', instructions: ['Work with diverse group', 'Appreciate differences', 'Find common purpose'], successCriteria: ['Effective collaboration', 'Mutual respect', 'Shared success'] }
    } },
    feedback: { strengths: ['Bridge functions well', 'Respect expertise', 'Find common goals'], improvements: ['Learn more domains', 'Translate better', 'Build more bridges'], nextSteps: ['Work on more cross-functional projects', 'Learn multiple domains', 'Become bridge builder'] },
    badge: { name: 'Bridge Builder', emoji: '🔀', description: 'Expert in cross-functional collaboration' },
    shareMessage: 'Just mastered cross-functional teamwork! 🔀 #Collaboration #Teamwork'
  },
  {
    id: 'team-building',
    title: 'Team Building',
    emoji: '🏗️',
    context: 'professional' as const,
    discover: {
      scenario: 'Your team lacks cohesion and trust. Members work in silos and do not support each other.',
      problemExplanation: ['No trust or connection', 'Work in silos', 'No shared identity', 'Weak relationships'],
      solutionApproach: ['Build trust through vulnerability', 'Create shared experiences', 'Celebrate wins together', 'Support each other', 'Build team identity']
    },
    video: { title: 'Building Strong Teams', duration: 6, content: ['Strong teams are built, not born.', 'Trust comes from vulnerability and reliability.', 'Share successes and failures as a team.', 'Celebrate wins, learn from losses together.', 'Create team rituals and traditions.', 'Support each other beyond work tasks.'] },
    quiz: {
      title: 'Team Building Quiz',
      questions: [
        { id: 26, question: 'Team trust requires:', options: ['Time only', 'Vulnerability and reliability', 'Perfection', 'Avoiding mistakes'], correct: 1 },
        { id: 27, question: 'Team building involves:', options: ['Work tasks only', 'Creating connection and shared identity', 'Forcing fun', 'Avoiding personal topics'], correct: 1 },
        { id: 28, question: 'Celebrate team wins to:', options: ['Show off', 'Build morale and team identity', 'Create competition', 'Waste time'], correct: 1 },
        { id: 29, question: 'Support team members by:', options: ['Doing their work', 'Offering help and encouragement', 'Criticizing', 'Ignoring struggles'], correct: 1 },
        { id: 30, question: 'Team identity creates:', options: ['Division', 'Cohesion and commitment', 'Exclusivity', 'Problems'], correct: 1 }
      ]
    },
    challenge: { title: 'Team Building Challenge', description: 'Build cohesive, high-performing teams', contexts: {
      academic: { title: 'Academic Team Building', description: 'Build strong study teams', instructions: ['Form/join study team', 'Build trust', 'Create shared goals', 'Support each other'], successCriteria: ['Strong team bonds', 'Mutual support', 'Shared success', 'Lasting relationships'] },
      professional: { title: 'Professional Team Building', description: 'Build workplace team cohesion', instructions: ['Build team trust', 'Create team identity', 'Celebrate together', 'Support members'], successCriteria: ['High team cohesion', 'Strong performance', 'Member satisfaction', 'Team resilience'] },
      personal: { title: 'Personal Team Building', description: 'Build personal support networks', instructions: ['Build personal team', 'Create connections', 'Support each other'], successCriteria: ['Strong bonds', 'Mutual support', 'Shared growth'] }
    } },
    feedback: { strengths: ['Build trust well', 'Create team spirit', 'Support others'], improvements: ['Build deeper connections', 'Create more rituals', 'Support more consistently'], nextSteps: ['Continue team building', 'Study team psychology', 'Facilitate team activities'] },
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
    { id: 1, question: 'Team stages:', options: ['Start, work, finish', 'Forming, storming, norming, performing', 'Begin, middle, end', 'Plan, do, review'], correct: 1 },
    { id: 2, question: 'Storming involves:', options: ['Harmony', 'Conflict and disagreement', 'No interaction', 'Success'], correct: 1 },
    { id: 3, question: 'Psychological safety:', options: ['Physical safety', 'Feel safe to take risks', 'No challenges', 'No conflict'], correct: 1 },
    { id: 4, question: 'RACI clarifies:', options: ['Salaries', 'Roles and responsibilities', 'Timelines', 'Budgets'], correct: 1 },
    { id: 5, question: 'Team norms:', options: ['Management rules', 'Agreed ways of working', 'Individual preferences', 'Optional'], correct: 1 },
    // Leadership (6-10)
    { id: 6, question: 'Leadership is:', options: ['Authority', 'Influence and inspiration', 'Being bossy', 'Title'], correct: 1 },
    { id: 7, question: 'Servant leadership:', options: ['Being served', 'Serving and developing team', 'Avoiding responsibility', 'Following'], correct: 1 },
    { id: 8, question: 'Lead by example:', options: ['Give orders', 'Model desired behavior', 'Do everything', 'No delegation'], correct: 1 },
    { id: 9, question: 'Effective delegation:', options: ['Dump tasks', 'Develop through responsibility', 'Avoid work', 'Control all'], correct: 1 },
    { id: 10, question: 'Leadership without authority:', options: ['Force', 'Build influence through competence', 'Title', 'Aggression'], correct: 1 },
    // Conflict Management (11-15)
    { id: 11, question: 'Healthy conflict:', options: ['Avoid', 'Can improve decisions', 'Always destructive', 'Team failing'], correct: 1 },
    { id: 12, question: 'When conflicts arise:', options: ['Ignore', 'Address early', 'Wait', 'Blame'], correct: 1 },
    { id: 13, question: 'Separate people from problem:', options: ['Isolate', 'Focus on issue not personalities', 'Remove members', 'Avoid'], correct: 1 },
    { id: 14, question: 'Win-win solutions:', options: ['Impossible', 'Satisfy all interests', 'One wins', 'Compromise quality'], correct: 1 },
    { id: 15, question: 'Best conflict approach:', options: ['Aggressive', 'Collaborative problem-solving', 'Avoidance', 'Competition'], correct: 1 },
    // Remote Collaboration (16-20)
    { id: 16, question: 'Async communication:', options: ['Fast replies', 'No immediate response needed', 'Video calls', 'Phone'], correct: 1 },
    { id: 17, question: 'Remote teams should:', options: ['Under-communicate', 'Over-communicate intentionally', 'Avoid communication', 'Email only'], correct: 1 },
    { id: 18, question: 'Virtual rapport:', options: ['Avoid personal', 'Casual chats and video', 'Text only', 'Minimal'], correct: 1 },
    { id: 19, question: 'Time zones:', options: ['Ignore', 'Respect and schedule thoughtfully', 'Expect immediate', 'Work 24/7'], correct: 1 },
    { id: 20, question: 'Remote tools:', options: ['Use all', 'Right tool for purpose', 'Avoid', 'One only'], correct: 1 },
    // Cross-functional (21-25)
    { id: 21, question: 'Cross-functional teams:', options: ['Same expertise', 'Different departments/specialties', 'Only managers', 'One department'], correct: 1 },
    { id: 22, question: 'Across functions:', options: ['Use your jargon', 'Translate between domains', 'Avoid communication', 'Demand adaptation'], correct: 1 },
    { id: 23, question: 'Different priorities:', options: ['Cause conflict', 'Align around common goals', 'Ignore', 'Competition'], correct: 1 },
    { id: 24, question: 'Respect expertise:', options: ['Defer to all', 'Value each unique contribution', 'Only trust own', 'Ignore'], correct: 1 },
    { id: 25, question: 'Cross-functional success:', options: ['Avoid others', 'Focus on shared outcomes', 'Territorial', 'Silos'], correct: 1 },
    // Team Building (26-30)
    { id: 26, question: 'Team trust needs:', options: ['Time only', 'Vulnerability and reliability', 'Perfection', 'No mistakes'], correct: 1 },
    { id: 27, question: 'Team building:', options: ['Work only', 'Connection and shared identity', 'Forced fun', 'Avoid personal'], correct: 1 },
    { id: 28, question: 'Celebrate wins to:', options: ['Show off', 'Build morale and identity', 'Competition', 'Waste time'], correct: 1 },
    { id: 29, question: 'Support members by:', options: ['Do their work', 'Offer help and encouragement', 'Criticize', 'Ignore'], correct: 1 },
    { id: 30, question: 'Team identity creates:', options: ['Division', 'Cohesion and commitment', 'Exclusivity', 'Problems'], correct: 1 }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Teamwork master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong collaboration skills!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep practicing!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review teamwork techniques!', xpReward: 100 }
  }
};
