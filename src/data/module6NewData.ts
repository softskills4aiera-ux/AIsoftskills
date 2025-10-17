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
          title: 'Navigate Team Chaos Kit',
          description: 'B.Com group project, 5 members. Week 1: Polite, zero work. Week 2: Fights erupt. Navigate forming→storming→norming→performing. A grade achieved!',
          instructions: [
            '• Forming Week 1: Intros, goal "A grade"—polite, zero work',
            '• Storming Week 2: Fights erupt—acknowledge, facilitate compromise',
            '• RACI matrix: All tasks R/A/C/I—no overlap, weekly review',
            '• Team norms: Fridays 4PM, 24hr reply, deadlines=commitments',
            '• Performing Week 5-6: High trust, A grade, Professor praises!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoid conflict—team stuck, navigate it',
            '• No RACI—confusion chaos, create Week 2',
            '• No norms—frustration, write + sign',
            '• Ignore quiet members—lost ideas',
            '• Only problems—celebrate wins weekly'
          ],
          successCriteria: [
            '✅ 4 stages navigated in 6 weeks',
            '✅ RACI: All tasks assigned clearly',
            '✅ Norms: Written, signed, followed',
            '✅ Safety: All voices heard',
            '✅ A grade, Professor praises teamwork!'
          ]
        },
        professional: {
          title: 'Internship Team Boss',
          description: 'New marketing analytics team, 6 members. Week 1: Polite. Week 2: Chaos (Meera vs Karan, roles unclear). Navigate to performing, ROI +25%, promoted Team Lead!',
          instructions: [
            '• Forming Week 1: 1-on-1 chats, build rapport—polite, zero work',
            '• Storming Week 2: Conflicts erupt—acknowledge, facilitate solutions',
            '• Propose RACI: All tasks R/A/C/I clear—bi-weekly review',
            '• Co-create norms: Meetings, replies, feedback—signed, reviewed',
            '• Performing Week 5-8: ROI +25%, promoted Team Lead!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Silent storming—team stuck, facilitate',
            '• Complain only—propose solutions',
            '• Let dominance—invite all voices',
            '• No celebration—celebrate weekly wins',
            '• Don\'t document—reflect, share learnings'
          ],
          successCriteria: [
            '✅ 4 stages in 8 weeks',
            '✅ Conflicts facilitated, norming achieved',
            '✅ RACI + norms documented, followed',
            '✅ All voices heard, safety created',
            '✅ Promoted Team Lead, ROI +25%!'
          ]
        },
        personal: {
          title: 'Friends + Business = Win',
          description: '4 friends, resume/LinkedIn side business. Week 1: Excited! Week 2: Money fights, role chaos. Navigate storming: 43 clients, ₹40K profit, friendship stronger!',
          instructions: [
            '• Forming Week 1: Coffee, excited "₹10K!"—roles assigned',
            '• Storming Week 2: Money fights—acknowledge, split by work fairly',
            '• Simple RACI: All tasks R clear—Google Doc, monthly review',
            '• Friend-team norms: Sundays 5PM, transparent money, friendship first',
            '• Performing Mo 2-3: 43 clients, ₹40K, friendship stronger!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Friends won\'t fight"—expect storming',
            '• Equal split—split by work fairly',
            '• No RACI—confusion, create RACI',
            '• Avoid money talk—transparent sheet always',
            '• Business>friendship—friendship first, no 10PM pressure'
          ],
          successCriteria: [
            '✅ 4 stages in 3 months',
            '✅ Money fair, friendship intact',
            '✅ RACI: All roles assigned',
            '✅ Norms balance: friendship + business',
            '✅ ₹40K, 43 clients, viral post!'
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
          title: 'Lead Without Authority Kit',
          description: 'Business plan competition, no team. "I\'m not a leader." Professor: "Build influence!" Result: Recruit 4, inspire with vision, top 3 finish ₹25K prize!',
          instructions: [
            '• Build influence: Help 5, best assignments—10 respect you',
            '• Recruit with vision: "Change lives, win ₹1L"—8 interested, select 4',
            '• Inspire shared vision: "YOUR why?"—everyone inspired, committed',
            '• Lead by example: 30hr/week, admit mistakes—team mirrors behavior',
            '• Delegate + develop: Goals + feedback—top 3, ₹25K prize!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Wait for title—lead NOW',
            '• Do everything—delegate with support',
            '• Boring pitch—inspire with vision',
            '• Say, don\'t do—model behavior first',
            '• No feedback—give specific constructive'
          ],
          successCriteria: [
            '✅ 10 classmates respect you',
            '✅ Vision inspires 8, recruit 4',
            '✅ 30hr/week, team follows example',
            '✅ All 4 excel with feedback',
            '✅ Top 3, ₹25K, judges praise!'
          ]
        },
        professional: {
          title: 'Intern to Leader Boss',
          description: 'Manager: "Lead social media project. No authority, recruit volunteers." You: "No one will follow me!" Result: Build influence, 50K→180K followers, ₹8L sales, CEO job offer!',
          instructions: [
            '• Build influence: Help colleagues, excel, coffee 10—respect earned',
            '• Recruit with vision: "200K followers, ₹10L sales, portfolio"—6 volunteer, select 4',
            '• Inspire shared "whys": Portfolio, showcase, skills—commitment high',
            '• Lead by example: 15hr/week, admit mistakes—team mirrors',
            '• Delegate + mentor: Goals + support—180K followers, ₹8L, CEO offer!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Recruit without influence—help + excel FIRST',
            '• Boring pitch—vision-focused: learn, portfolio',
            '• Micromanage—delegate with TRUST',
            '• No mentorship—weekly 1-on-1s, feedback',
            '• "I did"—say "WE did, team delivered"'
          ],
          successCriteria: [
            '✅ 10 colleagues respect you',
            '✅ Vision recruits 6, select 4',
            '✅ 15hr/week, team mirrors behavior',
            '✅ 4 grow into leaders, CEO visibility',
            '✅ CEO offer: 180K (3.6×), ₹8L!'
          ]
        },
        personal: {
          title: 'Career Fair From Zero',
          description: 'Want to organize career fair, no authority. "Nobody will help!" Mentor: "Build influence!" Result: 600 students, 20 companies, 60 internships, Student Leader award, 3 job offers!',
          instructions: [
            '• Build influence: Help 20, LinkedIn 100, network—50 respect you',
            '• Inspire vision: "500 students, 20 companies, 50 internships"—8 volunteer, select 5',
            '• Lead by example: 20hr/week, 40 reject, persist—team inspired',
            '• Delegate + empower: 5 leads, goals + support—600 students, 60 internships!',
            '• Execute + legacy: Smooth event, 5 leaders mentored—award, 3 job offers!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Recruit without influence—help 20 FIRST',
            '• 40 reject, quit—persist, follow 3×',
            '• Micromanage—delegate with TRUST',
            '• "I organized"—say "WE organized"',
            '• Graduate, fair dies—mentor 5 leaders, succession'
          ],
          successCriteria: [
            '✅ 50 students, 10 alumni respect',
            '✅ Vision: 8 volunteer, 5 selected',
            '✅ 20hr/week, persist 40 rejections',
            '✅ 600 students, 60 internships delivered',
            '✅ Award, 3 offers, succession created!'
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
          title: 'Conflict to Win-Win Kit',
          description: 'Group project. Priya: "Digital!" Rahul: "Traditional!" Personal attacks, stop talking. Address early, find win-win integrated strategy. 8/10 grade achieved!',
          instructions: [
            '• Address Day 1: Call meeting, ground rules—stop escalation',
            '• Active listen: Priya (Gen Z), Rahul (families)—both valid',
            '• Separate people/problem: Stop attacks, focus strategy—reframe "reach BOTH?"',
            '• Brainstorm win-win: 4 options—50/50 start, track, data-driven',
            '• Execute: Integrated strategy, 8/10—Professor praises teamwork!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoid conflict—escalates, address Day 1',
            '• Aggressive "stop fighting!"—listen actively',
            '• Take sides—be neutral, validate BOTH',
            '• 50/50 no WHY—interests FIRST',
            '• No follow-up—check, resolve issues'
          ],
          successCriteria: [
            '✅ Day 1 addressed, within 24hr',
            '✅ Both interests understood',
            '✅ Focus strategy, not personal',
            '✅ Win-win: Both satisfied',
            '✅ 8/10, Professor praises!'
          ]
        },
        professional: {
          title: 'Mediate Like a Boss',
          description: 'Meera: "Redesign all!" Karan: "Too risky!" Manager: "Mediate?" You: "Just intern!" Result: Phased redesign + A/B test, 60% conversion up, full-time job offer!',
          instructions: [
            '• Accept mediation: "Facilitation, not authority"—prepare 1hr',
            '• Listen 10min: Meera (conversions), Karan (risk)—both valid',
            '• Separate people/problem: Focus strategy, not "reckless"—reframe',
            '• Brainstorm: 4 options—phased + A/B test, both satisfied',
            '• Execute: 60% conversions up—all-hands, full-time job offer!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Decline "just intern"—accept opportunity',
            '• No preparation—prepare structure',
            '• Take sides—neutral, validate BOTH',
            '• Force 50/50—find win-win',
            '• No follow-up—measure results'
          ],
          successCriteria: [
            '✅ Intern mediates, prepared',
            '✅ Both understood actively',
            '✅ Focus strategy, not personal',
            '✅ Phased + A/B, both satisfied',
            '✅ Full-time job, 60% conversion!'
          ]
        },
        personal: {
          title: 'Roommate Conflict Solved',
          description: 'Rent fight. You: "₹5K each!" Roommate: "Unfair, you have bigger room!" Avoid each other. Address early, win-win: Base ₹4K + ₹2K premium. Friendship preserved!',
          instructions: [
            '• Address Day 1: "Let\'s talk," coffee, ground rules—early stops resentment',
            '• Listen 10min: Room size vs shared spaces—both want fairness',
            '• Separate people/problem: Focus rent, not "selfish"—reframe',
            '• Brainstorm: 4 options—base + premium, both feel fair',
            '• Execute: ₹6K/₹4K, no resentment—friendship stronger!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Avoid talk—address Day 1',
            '• Demand "equal, final"—listen together',
            '• Positions not interests—ask WHY',
            '• Math compromise—find logic fair',
            '• Verbal only—write, both sign'
          ],
          successCriteria: [
            '✅ Day 1, coffee shop neutral',
            '✅ Both interests understood',
            '✅ Focus rent, not friendship',
            '✅ Base + premium, both fair',
            '✅ Friendship stronger, skills applied!'
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
          title: 'Remote Team Boss Mode',
          description: '5 members, 4 cities, never met. Week 1: Chaos (gaps, missed meetings, isolation). Master remote tools + async + connection. Top 5 finish achieved!',
          instructions: [
            '• Setup: Zoom intros, 4 tools, norms, core 2-5PM—documented',
            '• Build rapport: 15min 1-on-1s, #random, Sunday personal—trust builds',
            '• Master async: Detailed messages (what/format/deadline)—1day response',
            '• Over-communicate: Daily Slack updates, Notion decisions—aligned',
            '• Top 5: Business plan, judges praise—remote mastery!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Too many tools—agree 4-5 only',
            '• Vague async—detailed: what/why/format/deadline',
            '• Assume everyone knows—over-communicate',
            '• Skip rapport—15min chats, #random',
            '• Camera off—camera ON, presence'
          ],
          successCriteria: [
            '✅ Tools (4), norms, core 2-5PM',
            '✅ 1-on-1s, #random active',
            '✅ Detailed messages, 1-day responses',
            '✅ Daily Slack, Notion, aligned',
            '✅ Top 5, judges praise remote!'
          ]
        },
        professional: {
          title: 'Fix Remote Chaos Boss',
          description: '6 members, 5 cities, 2 countries. Week 1: Gaps, 8 tools, isolation. Manager: "Fix this!" Result: 8→5 tools, +40% efficiency, ₹1.2Cr revenue, CEO job offer!',
          instructions: [
            '• Audit 3 days: Gaps, 8 tools, isolation—5 interviewed, documented',
            '• Framework: 8→5 tools, async, daily, core 2-5PM—team 6/6 approved',
            '• Consolidate: Asana+Trello→Notion, 1hr workshop—+40% efficiency',
            '• Rapport: 15min 1-on-1s, rituals, #random, camera-on—trust↑',
            '• Over-communicate: Daily Slack, Decisions Log—CEO offer!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Complain only—PROPOSE framework',
            '• Force tools—TEAM VOTES',
            '• No training—1hr workshop',
            '• Don\'t share—share YOUR updates FIRST',
            '• No measure—prove impact with data'
          ],
          successCriteria: [
            '✅ Gaps, 8 tools documented',
            '✅ 8→5 tools, 6/6 approved',
            '✅ +40% efficiency, chaos eliminated',
            '✅ 15min chats, #random, camera-on',
            '✅ CEO offer: +40%, +25%, 9/10!'
          ]
        },
        personal: {
          title: 'Build Remote Side Biz Win',
          description: '4 friends, 3 cities, freelance writing. Week 1: Excited! Week 2: Chaos, missed deadlines. Master remote: ₹50K in 3 months, LinkedIn 8K, course ₹50K!',
          instructions: [
            '• Foundation: ₹20K goal, 5 tools, roles, transparent split—agreed',
            '• Virtual friendship: 1-on-1s, WhatsApp memes, Zoom casual—friends FIRST',
            '• Async detailed: "1000w, Friday, ₹2000"—Mo 1: 5 clients, ₹10K',
            '• Over-communicate: Daily Slack, Notion tracker—no missed deadlines',
            '• Navigate together: Redistribute, support—Mo 3: ₹50K, course ₹50K!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Figure out"—ASSIGN roles clear',
            '• Overwhelmed, no help—REDISTRIBUTE',
            '• Hide earnings—TRANSPARENT sheet',
            '• Business>friendship—FRIENDSHIP FIRST',
            '• Only work, no fun—burnout, low morale, CELEBRATE wins: virtual parties, recognize, fun together'
          ],
          successCriteria: [
            '✅ 5 tools, roles, transparent split',
            '✅ 1-on-1s, WhatsApp, friends FIRST',
            '✅ Detailed async: Mo 1 ₹10K',
            '✅ Daily Slack, Notion tracker aligned',
            '✅ Mo 3: ₹50K, course ₹50K!'
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
          title: 'Bridge 4 Domains Kit',
          description: 'Farmer business project. You (B.Com), Priya (Agriculture), Rahul (Tech), Ankit (Economics). Different jargon, priorities. Bridge domains, A grade achieved!',
          instructions: [
            '• Learn 3 domains 15hr: Agriculture, Tech, Economics—speak their language',
            '• Translate jargon: NOT "unit economics," YES "10% commission"—simple',
            '• Ask translation: "crop cycles"→"seasonal tomatoes"—understand always',
            '• Common goal: "100 farmers ₹50K/mo"—all priorities aligned',
            '• A grade: Integrated, Professor praises—bridge builder expert!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stay business silo—learn 15hr basics',
            '• "Optimize CAC"—translate ALWAYS',
            '• "MY most important"—find common goal',
            '• Dismiss expertise—respect ALL perspectives',
            '• "MY vs YOUR"—say "OUR goal"'
          ],
          successCriteria: [
            '✅ Learned 3 domains 15hr',
            '✅ Jargon translated simply',
            '✅ Terms understood, asked',
            '✅ Common goal: 100 farmers aligned',
            '✅ A grade, Professor praises bridge!'
          ]
        },
        professional: {
          title: 'Bridge 5 Functions Boss',
          description: 'Launch handmade crafts. You (Marketing), Priya (PM), Rahul (Eng), Ankit (Ops), Sarah (Support). Silos, jargon. Bridge all: 1200 customers, ₹6L GMV, CEO full-time offer!',
          instructions: [
            '• Learn 4 functions 20hr: PM, Eng, Ops, Support—communicate all',
            '• Shared language: Notion glossary 20 terms—jargon translated',
            '• Common goal: "₹5L GMV, 1000 customers"—roadmap integrated',
            '• Bridge meetings: Translate terms—smooth, faster progress',
            '• Launch: 1200 customers, ₹6L—CEO offer, bridge builder!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stay marketing silo—learn 20hr',
            '• "CAC" no explain—translate ALWAYS',
            '• Dismiss ops—respect expertise',
            '• "Marketing most important"—ALL equal',
            '• "MY campaign"—say "WE launched"'
          ],
          successCriteria: [
            '✅ Learned 4 functions 20hr',
            '✅ Glossary 20 terms built',
            '✅ ₹5L goal, roadmap integrated',
            '✅ Translate meetings, smooth communication',
            '✅ CEO offer: ₹6L GMV, 1200 customers!'
          ]
        },
        personal: {
          title: 'College Fest Bridge Win',
          description: 'Organize 3-day fest, 5000 students. Need: Events, sponsors, marketing, logistics, finance. Different expertise, jargon. Bridge all: 6000 students, ₹6L sponsors, success!',
          instructions: [
            '• Recruit 5 functions: Events, sponsors, marketing, logistics, finance—diverse expertise',
            '• Learn 5 functions 15hr: All basics—communicate all now',
            '• Translate + align: ₹2L vs ₹0—sequence: sponsors FIRST, aligned',
            '• Bridge: "Deliverables"→"logos posters"—translate all, connected',
            '• Execute: 6K students, ₹6L sponsors—award, 2 job offers!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Only coordinate—learn 15hr basics',
            '• Use jargon—translate ALWAYS',
            '• Don\'t align—sequence: sponsors first',
            '• Disrespect complexity—respect expertise',
            '• "I organized fest"—team unappreciated, say "WE organized, all functions contributed" celebrate'
          ],
          successCriteria: [
            '✅ 5 functions recruited',
            '✅ Learned 5 functions 15hr',
            '✅ ₹5L goal, sequenced logically',
            '✅ Translate meetings, connected all',
            '✅ 6K students, ₹6L, award, 2 jobs!'
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
          title: 'Build Study Team Squad',
          description: '5 students, study alone, no trust. Group project fails. Professor: "5 individuals, not TEAM!" Build "The Achievers." ALL 5 score 80%+!',
          instructions: [
            '• Form + intros: Recruit 4, share strengths/goal 80%+—complementary, agreed',
            '• Build trust: Share "Finance 55% failed"—all share struggles, safe',
            '• Shared rituals: Mon-Fri study, Friday fun, monthly outings—memories, identity',
            '• Support struggles: Priya stress, Finance 45%→70%, Ankit procrastination—loyalty',
            '• Identity "The Achievers": Name, values, rituals, story—ALL 5 score 80%+!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• No vulnerability—share struggles, be HUMAN',
            '• Only study—Friday fun, create MEMORIES',
            '• Ignore wins—celebrate ALL improvements',
            '• Ignore struggles—support actively',
            '• Stay individuals—create identity: name, values, story'
          ],
          successCriteria: [
            '✅ 5 members, complementary strengths',
            '✅ Vulnerability shared, all supported',
            '✅ Daily study, Friday fun, monthly outings',
            '✅ Priya stress, Finance 45%→70%, Ankit helped',
            '✅ ALL 80%+, "The Achievers" won!'
          ]
        },
        professional: {
          title: 'Build Growth Hackers Team',
          description: 'Marketing team, 5 alone, no trust. Project fails. Manager: "5 individuals, not TEAM. Build it!" Result: Morale 3.2→8.6, +50% productivity, CEO full-time offer!',
          instructions: [
            '• Assess 3.2/10: Interview all—no trust, connection, identity documented',
            '• Build trust: Share "campaign typo"—all share, support, deliver—trust deepens',
            '• Shared rituals: Friday lunches, escape rooms, volunteering—connection, identity',
            '• Celebrate+support: "WE did!" pizza, Priya family→cover—ALL recognized',
            '• Identity "Growth Hackers": Name, values, goals, rituals—8.6/10, CEO offer!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Ask vulnerability only—share YOUR FIRST',
            '• Force fun—ASK team, co-create',
            '• Only big wins—celebrate ALL',
            '• "Personal not work"—support HUMANS',
            '• No measurement—survey morale, track 3.2→8.6'
          ],
          successCriteria: [
            '✅ Assessed: 3.2/10, no trust documented',
            '✅ Vulnerability+reliability, trust deepens',
            '✅ Lunches, offsites, memories created',
            '✅ ALL celebrated+supported',
            '✅ CEO offer: 8.6/10, +50%, 10M, 5 offers!'
          ]
        },
        personal: {
          title: 'Build Support Network Life',
          description: 'Build 5-friend support network. No deep connections yet. Create rituals, support struggles, celebrate wins. Result: Life-long bonds, resilience, growth together!',
          instructions: [
            '• Recruit "The Tribe": 4 with shared values—all YES',
            '• Build trust: Share "scared failure"—all share, safe, connected',
            '• Shared rituals: Saturday dinners, monthly adventures, quarterly retreats—deep connection',
            '• Support struggles: Priya rejections, Finance 45%, Ankit lonely—loyalty built',
            '• Identity "The Tribe": Name, values, story, bracelets—Year 2: 4 tribes, award!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Choose convenience—choose SHARED values',
            '• Surface-level—be vulnerable FIRST',
            '• "Meet weekly" but monthly—COMMIT consistently',
            '• Fun only—be there struggles actively',
            '• Stay acquaintances, no identity—no commitment, dissolves, create name/values/goals/rituals/story build Tribe'
          ],
          successCriteria: [
            '✅ 5 recruited, shared values',
            '✅ Vulnerability shared, all supported',
            '✅ Saturday dinners, monthly adventures, retreats',
            '✅ All struggles supported through',
            '✅ Year 2: 4 tribes, award won!'
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
