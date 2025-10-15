// Module 8: Managing Mental & Physical Health - Gen Z Wellness

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

export const module8Data: SubtopicData[] = [
  {
    id: 'stress-management',
    title: 'Stress Management',
    emoji: '😌',
    context: 'personal' as const,
    discover: {
      scenario: "B.Com finals. 5 exams, 20 job apps, group project, family pressure. All-nighters + coffee = headaches, no sleep, blank mind in exam. Doctor: 'Chronic stress.'",
      problemExplanation: [
        "Body breaking down: Headaches, sick monthly, 4hr sleep, high BP risk",
        "Wrong coping: Instagram 4hrs, junk food, 5 coffees/day = worse stress",
        "No toolkit: Panic before exams? Just freeze. Don't know breathing/meditation",
        "Burnout: Can't get up, don't care, brain fog. Recovery = months"
      ],
      solutionApproach: [
        "Fix body: 7-8hr sleep, regular meals, 30min exercise, doctor checkup. Health first",
        "Right coping: Talk to friends, study groups, journal, outdoors. Not: Instagram, junk food, all-nighters",
        "Build toolkit: 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s). 2min = instant calm",
        "Prevent burnout: Name triggers early. Break tasks small. Rest = non-negotiable. Ask for help"
      ]
    },
    video: {
      title: 'From Burnout to Balance: Stress Management for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY PUSHING THROUGH FAILS

"You are B.Com final year. Week 1: Exams in 2 weeks, job applications, group project, family pressure. You feel overwhelmed. Week 2: You push through. Study all night, skip meals, isolate. Result: MORE stressed. Week 3: Exam 1: Blank mind. Interview: Fumbled. Doctor: 'You have chronic stress. This damages your health, mental health, performance. You cannot just push through. You need stress management.' You realize: Pushing through makes stress worse. By the end of this video, you will master stress management. From burnout to balance. Let us fix this."

[0:45-2:00] STEP 1: IDENTIFY STRESS TRIGGERS

"First, identify WHAT causes your stress.

Common triggers for B.Com students:

ACADEMIC:
- Exams (5 subjects, 2 weeks)
- Assignments (3 pending)
- Low grades (fear of failure)

CAREER:
- Job search (20 applications, no response)
- Interviews (fear of rejection)
- Placement pressure (family expectations)

PERSONAL:
- Financial stress (tuition, living expenses)
- Relationship issues (conflicts)
- Time pressure (too many commitments)

Once you identify triggers, you can address them.

Example: Trigger = 'Exams in 2 weeks, not prepared.'

ADDRESS:
1. Break down (5 subjects → 50 topics, study 4/day = 12 days)
2. Prioritize (difficult subjects first)
3. Ask for help (study group, professor)

Identifying triggers = first step."

[2:00-3:30] STEP 2: PRACTICE DEEP BREATHING (2-Minute Stress Relief)

"When stressed, practice DEEP BREATHING.

Activates relaxation response. Reduces stress hormones in 2 minutes.

4-7-8 BREATHING TECHNIQUE:

1. Inhale through NOSE for 4 seconds (belly expands)
2. HOLD breath for 7 seconds
3. Exhale through MOUTH for 8 seconds (long, slow)

Repeat 4 cycles (2 minutes total).

EFFECT:
- Heart rate slows
- Blood pressure decreases
- Stress hormones (cortisol) reduce
- Relaxation response activates

USE WHEN:
- Before exam (calm nerves)
- Before interview (reduce anxiety)
- When overwhelmed (instant calm)

Deep breathing = instant stress relief (2 minutes).

Practice daily: Morning (start day calm), Evening (wind down), When stressed (immediate relief)."

[3:30-5:00] STEP 3: EXERCISE REGULARLY (Best Stress Reliever)

"Exercise is ONE OF THE BEST stress relievers (scientifically proven).

HOW EXERCISE REDUCES STRESS:

1. ENDORPHINS: Natural mood boosters, reduce stress
2. BREAKS STRESS CYCLE: Stops rumination, gives mental break
3. IMPROVES SLEEP: Better sleep = better stress management
4. BUILDS CONFIDENCE: Achieve fitness goals = handle stress better
5. SOCIAL: Group exercise = social support = reduces stress

RECOMMENDATION: 30 minutes/day, 5 days/week

TYPES:
- CARDIO (running, cycling, swimming - best for stress)
- YOGA (exercise + relaxation + breathing - excellent)
- TEAM SPORTS (adds social support)
- WALKING (simple, accessible, effective)

Start small:
Week 1: 10 minutes walking
Week 2: 15 minutes
Week 4: 30 minutes

Make it habit.

Exercise = powerful stress management tool (free, no side effects, multiple benefits)."

[5:00-6:30] STEP 4: BUILD HEALTHY COPING + BOUNDARIES

"When stressed, use HEALTHY COPING:

HEALTHY:
- TALK to someone (friend, family, counselor - sharing reduces stress)
- EXERCISE (walk, run, yoga - releases endorphins)
- CREATIVE (draw, write, music - expresses emotions)
- NATURE (outdoors - reduces cortisol)
- HOBBIES (cook, read, games - provides break)

UNHEALTHY (avoid these):
- Substance use (alcohol, drugs - worsens long-term)
- Isolation (avoid people - worsens mental health)
- Excessive screen time (4 hours social media - increases anxiety)
- Procrastination (avoid work - worsens stress later)

BUILD BOUNDARIES:

1. TIME: Study 8 AM - 6 PM. After 6 PM: NO STUDY.
2. SLEEP: 11 PM - 7 AM (8 hours, non-negotiable)
3. WEEKEND: One day rest (Saturday: rest, hobbies, friends)
4. DIGITAL: No work emails after 8 PM
5. ENERGY: Say NO to non-essential commitments

Boundaries = protect time, energy, mental health."

[6:30-7:45] STEP 5: SEEK SUPPORT

"You cannot handle everything alone.

When stress becomes overwhelming, SEEK SUPPORT:

1. FRIENDS/FAMILY: Share stress, get support
2. COUNSELOR: Professional help (college counseling = free, confidential)
3. STUDY GROUP: Share academic burden
4. CAREER SERVICES: Job search support
5. SUPPORT GROUPS: Talk to peers facing same stress

Seeking support is STRENGTH (not weakness).

Everyone needs help sometimes.

Support reduces stress, provides resources, prevents burnout.

In B.Com, build support system BEFORE crisis.

Know who to call when stressed.

Do not suffer alone."

[7:45-8:00] YOUR CHALLENGE (Build Stress Management Routine)

"Here is your action step: This week, build stress management routine.

Daily:
1. Morning: 4-7-8 breathing (2 minutes)
2. Exercise: 30 minutes (walk, run, yoga)
3. Evening: Relaxation (meditation, journaling, hobbies)

Weekly:
1. Identify stress triggers (what stressed you this week?)
2. Practice healthy coping (talk, exercise, create)
3. Maintain boundaries (study hours, sleep, rest day)

RESULT: Lower stress, better performance, prevent burnout.

Stress management = essential life skill. Master it now."

[End Screen: "Next Video: Work-Life Balance - Sustainable Performance"]`,
      content: [
        'Identify Stress Triggers: Academic (exams, assignments, grades), career (job search, interviews, pressure), personal (financial, relationships, time)',
        'Practice Deep Breathing: 4-7-8 technique (inhale 4s, hold 7s, exhale 8s, repeat 4× = 2 minutes) - activates relaxation response',
        'Exercise Regularly: 30 min/day, 5 days/week (cardio, yoga, walking) - releases endorphins, breaks stress cycle, improves sleep',
        'Build Healthy Coping: Talk, exercise, creative outlets, nature, hobbies (NOT: substance use, isolation, excessive screens, procrastination)',
        'Set Boundaries: Time (study 8 AM-6 PM, after 6 PM no study), sleep (8 hours), weekend (1 day rest), digital (no emails after 8 PM), energy (say no)',
        'Seek Support: Friends/family, counselor (free, confidential), study group, career services, support groups - seeking help is strength',
        'B.Com Applications: Exam stress, job search anxiety, placement pressure, financial stress, performance anxiety, burnout prevention'
      ]
    },
    quiz: {
      title: 'Stress Management Quiz',
      questions: [
        {
          id: 1,
          question: '4 weeks all-nighters. Now: headaches, sick often, brain fog. What is happening?',
          options: [
            'Just tired, totally normal',
            'Chronic stress damaging body + mind',
            'Only mood, no big deal',
            'Just work performance affected'
          ],
          correct: 1,
          explanation: 'Chronic stress = physical damage. Body breaks: high BP, weak immunity, stomach issues, anxiety, memory loss. Not just busy—medical condition. Need stress tools (breathing, exercise, boundaries) to protect health. Manage early, not push through!'
        },
        {
          id: 2,
          question: 'Exam panic: racing heart, sweating, blank mind. Does 4-7-8 breathing actually work?',
          options: [
            'Nope, total waste of time',
            'Yes! Slows heart, drops cortisol in 2min',
            'Just trendy wellness BS',
            'Avoids the real problem'
          ],
          correct: 1,
          explanation: 'Breathing activates relaxation mode. Inhale 4s, hold 7s, exhale 8s. Heart slows, BP drops, cortisol cuts. 2 minutes = instant calm, clearer thinking. Not placebo—actual physiological response. Use before exams, interviews, anytime overwhelmed. Free stress relief!'
        },
        {
          id: 3,
          question: 'Too stressed to exercise, need to study more. Does exercise actually help stress?',
          options: [
            'Nope, makes stress worse',
            'Yes! Releases endorphins, breaks worry loops',
            'Optional, not really important',
            'Too tiring when stressed'
          ],
          correct: 1,
          explanation: 'Too stressed NOT to exercise. 30min releases endorphins (natural mood boost), breaks rumination (stops worry spiral), improves sleep. Exercise beats extra study time—better focus, memory, performance. Too busy? Exercise = essential stress tool, not optional!'
        },
        {
          id: 4,
          question: 'Stressed. Cope how? (A) All-nighters, junk food, 4hr Instagram. (B) Talk, exercise, journal.',
          options: [
            'A: Isolation keeps stress away',
            'B: Talk/exercise/create cuts stress',
            'A: Avoidance works best',
            'Both work equally fine'
          ],
          correct: 1,
          explanation: 'Option A = stress spiral (feels good now, worse later). All-nighters kill memory, isolation worsens mental health, screens increase anxiety. Option B = actually reduces stress. Talk gives support, exercise releases endorphins, journal clears mind. Build healthy toolkit: talk, move, create—NOT isolate, scroll, avoid!'
        },
        {
          id: 5,
          question: 'Overwhelmed. Exams, job hunt, family pressure. "Should handle alone. Help = weakness." Do what?',
          options: [
            'Push through alone, never ask help',
            'Seek support—friends, counselor, groups',
            'Hide it from everyone',
            'Quit everything now'
          ],
          correct: 1,
          explanation: 'Asking for help = strength, not weakness. Talk to friends (emotional support), counselor (free, confidential, coping strategies), study groups (shared burden), career services (resume/interview help). Build support BEFORE crisis. Shared stress = lighter load. Everyone needs help sometimes!'
        }
      ]
    },
    challenge: {
      title: 'Stress Management Challenge',
      description: 'From burnout to balance - build stress resilience',
      contexts: {
        academic: {
          title: 'Academic Stress Management Excellence',
          description: 'B.Com final year: Exams in 2 weeks (5 subjects), job applications (20 companies), group project deadline, family pressure. You feel overwhelmed, anxious, cannot sleep. Doctor: "You have chronic stress. You need stress management NOW before burnout." Goal: Build stress management routine, reduce stress, prevent burnout, improve performance.',
          instructions: [
            '1. Week 1 - Identify Stress Triggers (Days 1-2, 4 hours): List everything causing stress: ACADEMIC: (1) Exams in 2 weeks (5 subjects, not prepared - fear of failing), (2) Assignments (3 pending, due in 1 week - feeling behind), (3) Group project (difficult teammates, deadline in 3 days - conflict), (4) Low GPA (7.2, need 8.0 for placement - pressure). CAREER: (1) Job applications (20 companies, no response - fear of rejection), (2) Interviews coming (not prepared - anxiety), (3) Family pressure ("Get good job!" - expectations). PERSONAL: (1) Financial stress (tuition fees due - worry), (2) Friends (birthday party tomorrow, feel guilty skipping - conflict), (3) Sleep (only 4 hours/night - exhausted). Triggers identified. Stress level: 9/10 (very high). Physical symptoms: Headaches, stomach pain, fatigue. Mental symptoms: Anxiety, cannot focus, irritable. You realize: Stress is overwhelming. Cannot handle alone. Need stress management.',
            '2. Week 1 - Learn Deep Breathing (4-7-8 Technique) (Days 2-3, 2 hours): Friend teaches: "4-7-8 breathing reduces stress in 2 minutes." TECHNIQUE: (1) Inhale through nose 4 seconds (belly expands, not chest), (2) Hold breath 7 seconds, (3) Exhale through mouth 8 seconds (long, slow exhale). Repeat 4 cycles (2 minutes total). Practice: First try: Feel weird, cannot hold 7 seconds. Second try: Better, can hold 5 seconds. Third try: Can do full 4-7-8. Effect: Heart rate slows (from 95 bpm to 75 bpm), feel calmer, mind clearer. Friend: "Practice 3 times/day: Morning (start day calm), before stressful events (exam, interview), evening (wind down before sleep)." You practice. Day 3: Morning breathing, before study, evening. Stress level: 8/10 (down from 9/10!). Deep breathing works!',
            '3. Week 1-2 - Start Exercise Routine (Days 3-14, 14 hours): You: "I am too busy to exercise." Friend: "You are too busy NOT to exercise. 30 minutes improves focus, reduces stress, better than 30 minutes extra study." Start: Week 1 Day 1: 10 minutes walking (feel good!). Day 2: 15 minutes. Day 3: 20 minutes. Week 2: 30 minutes/day walking + light jogging. Effect: Sleep better (fall asleep faster, deeper sleep), feel less anxious (endorphins released), more energy (not exhausted), better focus (can study 2 hours straight, before could only do 30 minutes). Stress level: 7/10 (down from 8/10!). Exercise works! Continue: 30 minutes/day, 5 days/week (Monday-Friday: morning walk/jog before study).',
            '4. Week 2 - Build Healthy Coping and Boundaries (Days 10-14, 10 hours): HEALTHY COPING: (1) Talk to friends (share exam stress - they share notes, study together, provide support). Stress reduces. (2) Journal (write worries every evening - reduces rumination, clarifies thoughts). (3) Hobbies (Saturday: cook favorite meal, play guitar 30 minutes - provides break, enjoyment). SET BOUNDARIES: (1) Study hours: 8 AM - 6 PM (10 hours, focused). After 6 PM: NO STUDY (rest, exercise, socialize). (2) Sleep: 11 PM - 7 AM (8 hours, non-negotiable. Before was 4 hours - now 8 hours!). (3) Weekend: Saturday full rest (hobbies, friends, no study guilt). Sunday: Light review only (2 hours). (4) Digital: No social media in bed (protect sleep), airplane mode during study (protect focus). (5) Energy: Say NO to non-essential (declined 2 club events - protect energy for exams). With boundaries: Study time is productive (focused, no distractions). Rest time is restful (no guilt, no work). Stress level: 6/10 (down from 7/10!).',
            '5. Week 2 - Seek Support (Days 14-16, 4 hours): You realize: Cannot handle everything alone. SEEK SUPPORT: (1) FRIENDS: Form study group (5 students, study together, share notes, clarify doubts, accountability, social support). Share exam stress. They understand ("We all feel this way!"). Stress reduces (not alone). (2) COUNSELOR: Visit college counseling (free, confidential). Counselor teaches: Cognitive reframing ("I will fail exams" → "I am prepared enough, I will do my best"), Stress management plan (daily breathing, exercise, sleep, boundaries). Provides: Perspective, validation, coping strategies. (3) CAREER SERVICES: Get help with job search (resume review, interview practice, job leads). Reduces uncertainty (have plan, not blind). (4) FAMILY: Talk to parents ("I am stressed about placement. I am doing my best. Please support me, not pressure me"). They understand, reduce pressure. Support system built. Stress level: 5/10 (down from 6/10!). Have support. Not alone.',
            '6. Week 3-4 - Apply Stress Management During Exams (Days 17-30, ongoing): Exam week: DAILY ROUTINE: 6:30 AM: Wake, 4-7-8 breathing (2 minutes). 7-7:30 AM: Exercise (30 minutes walk). 8 AM-12 PM: Study (4 hours, focused). 12-1 PM: Lunch, relaxation. 1-5 PM: Study (4 hours). 5-6 PM: Break (walk, talk to friend). 6-8 PM: Dinner, hobbies, journal. 8-10 PM: Light review (2 hours). 10-11 PM: Wind down (breathing, no screens). 11 PM: Sleep (8 hours). Exam day: Morning breathing (calm nerves), before exam breathing (clear mind), during exam (if anxious, quick breathing). Result: Exams go well! (Calmer, clearer mind, better recall). Interviews: Use breathing before (calm nerves). Perform better (confident, clear). Group project: Use boundaries (2 hours/day only, not all day). Complete successfully. Stress management worked! Stress level: 4/10 (manageable!).',
            '7. Week 5 - Review and Continue (Days 31-35, 6 hours): Exams done. Results: 4 out of 5 subjects: 80%+! (Better than expected!). 1 subject: 72% (OK). Overall: Passed all! Job search: 3 interview calls (from stress management - performed better). GPA: 7.8 (up from 7.2!). Health: Feeling better (no headaches, sleeping well, more energy). Stress level: 3/10 (low, manageable). LEARNING: Stress management works! Deep breathing (instant relief), Exercise (reduces stress, improves sleep, better performance), Boundaries (sustainable pace, no burnout), Support (not alone, have help). Continue daily: Breathing, exercise, boundaries, healthy coping. Share with classmates: 5 classmates adopt stress management routine. You helped them discover: Stress is manageable (not overwhelming), tools work (breathing, exercise, boundaries), support helps (not alone). Stress management = life skill (not just for exams, for life).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Ignoring stress: "I will push through" (no stress management). Result: Burnout (Week 6: cannot get out of bed, cannot study). Solution: Manage stress early (Week 1, when stress starts).',
            '• Unhealthy coping: Social media 4 hours/day, all-nighters, isolation. Result: Stress increases (more anxious, more exhausted). Solution: Healthy coping (exercise, talk, hobbies).',
            '• No boundaries: Study 18 hours/day, no rest, no sleep. Result: Burnout (unsustainable). Solution: Boundaries (study 10 hours, rest 8 hours, sleep 8 hours).',
            '• Not seeking support: "I should handle alone" (isolate). Result: Suffer unnecessarily, stress worsens. Solution: Seek support (friends, counselor, study group).',
            '• Inconsistent practice: Practice breathing once, give up. Result: No benefit (need daily practice). Solution: Build routine (daily breathing, exercise, boundaries).'
          ],
          successCriteria: [
            '✅ You identify stress triggers (academic: exams 5 subjects, career: job search 20 applications, personal: financial stress)',
            '✅ You practice deep breathing daily (4-7-8 technique, 3 times/day: morning, before stress, evening)',
            '✅ You exercise regularly (30 min/day walking/jogging, 5 days/week)',
            '✅ You build healthy coping (talk to friends, journal, hobbies) and boundaries (study 8 AM-6 PM, sleep 8 hours, weekend rest)',
            '✅ You seek support (study group, counselor, career services, family)',
            '✅ You reduce stress (from 9/10 to 3/10 over 5 weeks)',
            '✅ You improve performance (exams 80%+, 3 interview calls, GPA 7.8 up from 7.2)',
            '✅ You prevent burnout and help 5 classmates adopt stress management'
          ]
        },
        professional: {
          title: 'Professional Stress Management Mastery',
          description: 'You are Marketing intern at startup. Week 1: Manager: "Launch campaign in 2 weeks. Handle social media, email marketing, content creation, analytics, client meetings." You: "OK!" Week 3: Overwhelmed (too much work), stressed (cannot sleep), performance dropping (making mistakes). Manager: "You seem stressed. You need stress management." Goal: Build stress management routine for workplace stress.',
          instructions: [
            '1. Week 1 - Identify Work Stressors (Days 1-2, 3 hours): List work stressors: (1) WORKLOAD: Too many tasks (social media + emails + content + analytics + meetings = 60 hours/week work for 40 hour position!), (2) DEADLINES: Campaign launch in 2 weeks (tight deadline, high pressure), (3) EXPECTATIONS: Manager expects perfection (fear of making mistakes), (4) UNCERTAINTY: First real job, do not know if doing well (imposter syndrome), (5) WORK-LIFE: Working evenings, weekends (no boundaries, no rest, no life). Stress triggers identified. Stress level: 8/10. Physical: Headaches, fatigue, poor sleep. Mental: Anxiety, overwhelm, cannot focus.',
            '2. Week 1 - Practice Deep Breathing at Work (Days 2-4, 2 hours): Learn 4-7-8 breathing. Practice: (1) Before meetings (calm nerves, think clearly), (2) After stressful tasks (reset, recover), (3) During overwhelm (instant relief). Week 1: Use breathing 5 times/day (before meetings, during overwhelm, evening wind-down). Effect: Heart rate slows, feel calmer, think clearer. Stress level: 7/10 (down from 8/10). Manager notices: "You seem calmer in meetings. Good!" Deep breathing = work stress tool (2 minutes, can do at desk, instant relief).',
            '3. Week 1-2 - Start Exercise Routine (Days 4-14, 10 hours): You: "Too busy to exercise, need to work." Mentor: "You are too busy NOT to exercise. 30 minutes improves productivity, reduces stress." Start: Morning exercise before work. Week 1: 20 minutes walk (before 9 AM work start). Week 2: 30 minutes jog. Effect: More energy at work (not exhausted by 2 PM), better focus (can work 2 hours straight), better sleep (fall asleep faster, deeper sleep), lower stress (feel calmer, less anxious). Stress level: 6/10 (down from 7/10). Productivity improves (complete tasks faster due to better focus). Manager: "Your work quality improved! What changed?" You: "Started exercising. It improves focus and reduces stress." Manager: "Keep it up!"',
            '4. Week 2 - Set Work Boundaries (Days 10-14, 8 hours): You realize: Working 60 hours/week is unsustainable (burning out). SET BOUNDARIES with manager: "I am working 60 hours/week (social media + emails + content + analytics + meetings). This is too much for one person. I need to prioritize." Manager: "You are right. Let us prioritize: (1) MUST DO (critical): Social media (3 hours/day), Campaign content (2 hours/day), Client meetings (1 hour/day). Total: 6 hours/day (30 hours/week - sustainable!). (2) DELEGATE: Email marketing (delegate to intern), Detailed analytics (delegate to analyst). (3) POSTPONE: Non-essential tasks (after campaign launch)." Boundaries set: Work 9 AM - 6 PM (45 hours/week with breaks, down from 60 hours!). After 6 PM: NO WORK (rest, exercise, hobbies). Weekend: NO WORK (Saturday/Sunday rest). With boundaries: Work time is focused, productive. Rest time is restful (no guilt, no emails). Stress level: 5/10 (down from 6/10!). Sustainable pace.',
            '5. Week 3 - Build Healthy Coping (Days 15-21, 10 hours): When work stress appears, use HEALTHY COPING: (1) TALK to mentor (share stress about campaign deadline - mentor provides: Perspective "You are doing well. Campaign is on track", Advice "Focus on critical tasks, let go of perfection", Support "I am here if you need help"). (2) EXERCISE (30 minutes morning jog - releases endorphins, breaks work rumination, improves mood). (3) HOBBIES (evening: cook dinner, watch 1 episode show, play guitar 20 minutes - provides break, enjoyment, recovery). (4) SOCIAL (Friday: dinner with friends - laugh, relax, forget work for 2 hours - reduces stress). (5) NATURE (Saturday morning: 1 hour park walk - reduces cortisol, improves mood). Result: Stress managed effectively. Stress level: 4/10 (manageable!). Performance improves (calmer, clearer thinking, better work quality).',
            '6. Week 3-4 - Campaign Launch (Days 21-30, ongoing): Campaign launch week (high pressure). STRESS MANAGEMENT ROUTINE: Daily: 6:30 AM: Wake, 4-7-8 breathing (2 minutes). 7-7:30 AM: Exercise (30 minutes jog). 9 AM-6 PM: Work (focused, productive, boundaries maintained). 6-8 PM: Rest (cook, eat, hobbies, no work). 8-10 PM: Light work if needed (not every day). 10-11 PM: Wind down (breathing, journal, no screens). 11 PM: Sleep (8 hours). Before stressful moments: Quick breathing (before client meeting, before presenting to CEO). Result: Campaign launches successfully! CEO: "Excellent work! Campaign exceeded targets! You handled high pressure well." Manager: "You managed stress effectively. Impressed!" Stress level: 3/10 (low, manageable). No burnout!',
            '7. Week 5 - Review and Share (Days 31-35, 6 hours): Review: Started at stress level 8/10 (overwhelmed, anxious, physical symptoms, performance dropping). Now: stress level 3/10 (manageable, calm, healthy, high performance). What worked: (1) Deep breathing (instant relief, used 5 times/day), (2) Exercise (30 min/day - improved sleep, focus, mood), (3) Boundaries (work 9-6, no evenings/weekends - sustainable pace), (4) Healthy coping (talk to mentor, hobbies, social - actual stress reduction), (5) Support (mentor, friends - not alone). Results: Campaign successful (exceeded targets), Stress managed (3/10, no burnout), Performance improved (better work quality, faster completion), Health improved (sleeping well, no headaches, more energy). Share with team: 3 colleagues adopt stress management routine. Manager: "You demonstrated excellent stress management under pressure. Promoted to Marketing Associate." Promotion received! Stress management expertise drove: Campaign success, promotion, sustainable performance.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accepting 60 hours/week: "This is normal for startups" (no boundaries). Result: Burnout. Solution: Set boundaries (negotiate workload, prioritize, delegate).',
            '• Working evenings/weekends: No rest, no recovery. Result: Burnout, poor performance. Solution: Work 9-6, after 6 PM no work, weekend rest.',
            '• Skipping exercise: "Too busy to exercise." Result: Higher stress, poor sleep, low energy. Solution: 30 min/day exercise (improves productivity more than 30 min extra work).',
            '• Unhealthy coping: Work stress → drink alcohol, binge Netflix, junk food. Result: Temporary relief, long-term worsens health. Solution: Healthy coping (exercise, talk, hobbies).',
            '• Not seeking support: Suffer alone, do not tell mentor about overwhelm. Result: Stress worsens, no help. Solution: Talk to mentor (they can help - prioritize, delegate, support).'
          ],
          successCriteria: [
            '✅ You identify work stressors (60 hours/week workload, tight deadlines, high expectations)',
            '✅ You practice deep breathing at work (before meetings, during overwhelm, 5 times/day)',
            '✅ You exercise regularly (30 min/day morning jog before work)',
            '✅ You set work boundaries (work 9-6, no evenings/weekends, prioritize tasks with manager)',
            '✅ You build healthy coping (talk to mentor, hobbies, social, nature)',
            '✅ You reduce stress (from 8/10 to 3/10 over 5 weeks)',
            '✅ You launch campaign successfully (exceeded targets, CEO praises)',
            '✅ You get promoted (manager recognizes stress management expertise, promoted to Marketing Associate)'
          ]
        },
        personal: {
          title: 'Personal Stress Management Wisdom',
          description: 'Personal life: You feel stressed about everything (exams, job search, finances, relationships, future). Stress level: 9/10. Cannot sleep, anxious, overwhelmed. Friend: "You need stress management routine." Goal: Build daily stress management practice, reduce stress, improve well-being.',
          instructions: [
            '1. Week 1 - Identify Personal Stress Triggers (Days 1-2, 3 hours): List all stress sources: ACADEMIC: Exams (2 weeks, 5 subjects, not prepared), Assignments (3 pending). CAREER: Job search (20 applications, no response, fear of not getting job). FINANCIAL: Tuition fees (₹2L due in 1 month, do not have money). RELATIONSHIP: Parents (high expectations, pressure), Friends (feel guilty declining invitations due to study). HEALTH: Sleep (only 4 hours/night, exhausted), Headaches (daily tension headaches). FUTURE: Uncertainty (what if I do not get job? What if I fail exams?). Triggers identified. Stress level: 9/10 (very high). Physical: Headaches, fatigue, stomach pain. Mental: Anxiety, overwhelm, racing thoughts, cannot sleep.',
            '2. Week 1 - Start Daily Deep Breathing Practice (Days 2-4, 2 hours): Learn 4-7-8 breathing. Practice 3 times/day: (1) MORNING (7 AM, after waking): 2 minutes breathing. Starts day calm (instead of anxious). (2) MIDDAY (1 PM, after lunch): 2 minutes breathing. Resets for afternoon (instead of stress building). (3) EVENING (10 PM, before bed): 2 minutes breathing. Wind down for sleep (instead of racing thoughts). Day 1: Try breathing. Feel weird. Day 2: Easier. Feel slightly calmer. Day 4: Effect noticeable. Morning: Start day calm (instead of anxious). Midday: Feel less overwhelmed (breathing breaks stress cycle). Evening: Fall asleep faster (instead of 2 hours to fall asleep, now 20 minutes!). Stress level: 8/10 (down from 9/10). Sleep improves (4 hours → 6 hours).',
            '3. Week 1-2 - Build Exercise Habit (Days 4-14, 12 hours): Start simple: Walking. Week 1: Day 1: 10 minutes evening walk (fresh air, clears mind). Day 2: 15 minutes. Day 3: 20 minutes. Week 2: 30 minutes/day walking (morning before study). Effect: SLEEP: Better sleep (fall asleep 20 minutes, not 2 hours. Sleep 6 hours → 7 hours). MOOD: Feel less anxious (endorphins released during walk, natural mood boost). ENERGY: More energy (not exhausted all day, can study effectively). FOCUS: Better concentration (can study 1 hour straight, before could only do 20 minutes). STRESS: Lower stress (physical activity breaks rumination - stop worrying during walk, mental break). Stress level: 7/10 (down from 8/10). Exercise works! Continue: 30 minutes/day, make it non-negotiable.',
            '4. Week 2-3 - Build Healthy Coping Toolkit (Days 10-21, 15 hours): Build diverse coping strategies: (1) SOCIAL: Talk to friend about stress (2 hours/week). Friend listens, provides support ("You are doing great! Exams will be OK!"), shares own stress (not alone). (2) CREATIVE: Start journaling (10 minutes/evening). Write worries ("I am worried about exams. I am worried about job search."). Effect: Reduces rumination (worries on paper, not in head), clarifies thoughts (realize: I AM prepared for exams, job search takes time). (3) HOBBIES: Saturday morning: Cook favorite breakfast (1 hour, enjoyable, mindful activity). Saturday afternoon: Read fiction book (2 hours, escape, relaxation). (4) NATURE: Sunday morning: Park walk (1 hour, fresh air, greenery, reduces cortisol). (5) MINDFULNESS: Evening: 5 minutes mindfulness (focus on breath, present moment - reduces anxiety about future). Result: Stress reduces (coping toolkit provides: Release for emotions, breaks from stress, enjoyment, recovery). Stress level: 6/10 (down from 7/10).',
            '5. Week 3 - Set Life Boundaries (Days 21-25, 6 hours): SET BOUNDARIES: (1) STUDY: 8 AM - 6 PM (10 hours, focused). After 6 PM: NO STUDY (guilt-free rest). (2) SLEEP: 11 PM - 7 AM (8 hours, non-negotiable. Improved from 4 hours!). (3) WEEKEND: Saturday: Full rest day (hobbies, friends, nature, no study guilt). Sunday: 2 hours light review only. (4) DIGITAL: No social media in bed (protect sleep), Limit social media to 1 hour/day (was 4 hours - wasted time, increased anxiety). (5) SOCIAL: 3 hours/week with friends (maintain relationships, reduce isolation). (6) ENERGY: Say NO to non-essential commitments (declined 3 events this month - protect energy for exams). With boundaries: Have time for everything (study, exercise, sleep, friends, hobbies). No overwhelm (manageable schedule). No guilt (rest is scheduled, not stealing from study). Stress level: 5/10 (down from 6/10). Sustainable routine.',
            '6. Week 4 - Apply During High Stress (Exam Week) (Days 26-30, ongoing): Exam week (high stress trigger). DAILY ROUTINE: 6:30 AM: Wake, 4-7-8 breathing. 7-7:30 AM: Exercise (30 min walk). 8 AM-12 PM: Study (4 hours). 12-1 PM: Lunch, breathing, walk. 1-5 PM: Study (4 hours). 5-6 PM: Exercise/break. 6-8 PM: Dinner, hobbies, journal. 8-10 PM: Light review. 10-11 PM: Wind down (breathing, no screens). 11 PM: Sleep (8 hours). Stress management during exam week: Breathing (before each exam - calm nerves), Exercise (daily - maintains mood, sleep), Boundaries (after 10 PM no study - protect sleep), Healthy coping (journal, hobbies - process stress), Support (talk to friend after each exam - debrief, support). Result: Exams go well! Stress managed (5/10 throughout exam week, no spike to 9/10). Performance good (calm, clear mind, good recall). Sleep maintained (7-8 hours/night, not 4 hours). Stress management worked during high-stress period!',
            '7. Week 5 - Review and Maintain (Days 31-35, 5 hours): Exam results: 4/5 subjects 80%+! Passed all. Job search: 3 interviews (performed well - calm, confident). Stress level: 3/10 (low, manageable). Health: Improved dramatically (sleeping 7-8 hours, no headaches, more energy, feeling good). Well-being: High (have time for friends, hobbies, exercise, study - balanced life, not stressed life). LEARNING: Stress management transforms life! Before: Stress 9/10, sleep 4 hours, anxious, overwhelmed, poor performance. After: Stress 3/10, sleep 7-8 hours, calm, balanced, good performance. Tools that worked: Deep breathing (instant relief, 3 times/day), Exercise (30 min/day - mood, sleep, energy), Boundaries (study 8-6, sleep 8 hours, weekend rest), Healthy coping (journal, hobbies, friends), Support (not alone). MAINTAIN: Continue daily routine (breathing, exercise, boundaries, coping). Share on social media: "How I Reduced Stress from 9/10 to 3/10 in 1 Month." Post goes viral (2K likes). 50 people message: "I will try this!" You helped 50 people discover stress management. Stress management = life skill (better health, better performance, better life).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "I am too busy to practice stress management": Skip breathing, exercise, boundaries. Result: Stress increases (9/10 → burnout). Solution: Practice daily (breathing 6 minutes, exercise 30 minutes = 36 minutes SAVES you hours of low productivity).',
            '• Inconsistent practice: Practice breathing Week 1, stop Week 2. Result: No lasting benefit. Solution: Build routine (daily practice, non-negotiable).',
            '• No boundaries: Study 18 hours/day, sleep 4 hours. Result: Burnout, poor performance. Solution: Boundaries (study 10 hours, sleep 8 hours - better performance).',
            '• Unhealthy coping: Stress → social media 4 hours, junk food, isolation. Result: Stress worsens. Solution: Healthy coping (exercise, talk, hobbies).',
            '• Suffering alone: Do not share stress, do not seek support. Result: Stress worsens, feel isolated. Solution: Talk to friends, seek support (sharing reduces stress).'
          ],
          successCriteria: [
            '✅ You identify personal stress triggers (exams, job search, finances, relationships, sleep, future uncertainty)',
            '✅ You practice deep breathing daily (3 times/day: morning, midday, evening)',
            '✅ You build exercise habit (30 min/day walking/jogging)',
            '✅ You set life boundaries (study 8-6, sleep 8 hours, weekend rest, digital limits)',
            '✅ You use healthy coping (journal, hobbies, social, nature, mindfulness)',
            '✅ You reduce stress (from 9/10 to 3/10 over 1 month)',
            '✅ You improve well-being (sleep 7-8 hours, no headaches, more energy, balanced life)',
            '✅ You share and help others (social media post viral, help 50 people)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🎯 Identify Stress Triggers Accurately: You identify specific stress triggers (not just "I feel stressed"). Example: Academic (exams in 2 weeks, 5 subjects, not prepared), Career (20 job applications, no response), Personal (financial stress, sleep problems). You understand: Cannot solve problem you have not identified. Identifying triggers = first step. Once you know triggers (exams, job search), you can address them (break down exam prep, get career services help). You do not just feel vaguely stressed (cannot act on vague feeling). You know exactly what stresses you (can take specific actions).',
        '🧘 Practice Evidence-Based Stress Management Tools: You use scientifically proven tools (not just "try to relax"). Example: 4-7-8 deep breathing (activates parasympathetic nervous system, reduces cortisol in 2 minutes), Exercise 30 min/day (releases endorphins, improves sleep, breaks rumination), Progressive muscle relaxation (reduces physical tension), Journaling (reduces rumination, clarifies thoughts). You understand: These are not "wellness fads." These are EVIDENCE-BASED tools (scientifically proven to reduce stress). You practice consistently (daily breathing, daily exercise, daily boundaries). Consistency = stress resilience (not just temporary relief).',
        '🏃 Prioritize Exercise as Stress Management: You exercise regularly (30 min/day, 5 days/week) even when busy. You understand: "I am too busy to exercise" = wrong. "I am too busy NOT to exercise" = right. Exercise improves: Focus (better study/work productivity), Sleep (better rest, better recovery), Mood (endorphins reduce stress, improve happiness), Energy (not exhausted, more vitality). 30 minutes exercise saves you hours of low productivity (improves focus, reduces stress). You make exercise non-negotiable (like sleep, like eating). Exercise = essential stress management (not optional).',
        '🤝 Use Healthy Coping Mechanisms: When stressed, you use healthy coping (talk to friends, exercise, hobbies, nature) not unhealthy coping (substance use, isolation, excessive screens, all-nighters). You understand: Unhealthy coping feels good short-term (social media distracts you) but worsens stress long-term (wastes time, increases anxiety). Healthy coping actually reduces stress (exercise releases endorphins, talking provides support, hobbies provide recovery). You build diverse coping toolkit (exercise, talk, journal, hobbies, nature, mindfulness). Different stressors need different tools. Diverse toolkit = handle any stress.',
        '🛡️ Set and Maintain Boundaries: You set boundaries (study 8 AM-6 PM, after 6 PM no study, sleep 8 hours, weekend rest, digital limits). You MAINTAIN boundaries (say no to non-essential commitments, protect rest time, do not feel guilty). You understand: Boundaries = self-care (not selfishness). Boundaries protect: Time (for rest, recovery), Energy (for priorities), Mental health (prevent overwhelm). With boundaries: Sustainable performance (no burnout), lower stress (manageable workload), better well-being (time for health, relationships, hobbies). Without boundaries: Overcommit, overwhelm, burnout. You know: Setting boundaries is easy. Maintaining boundaries is hard (guilt, pressure, FOMO). You maintain them anyway (your health > pleasing everyone).'
      ],
      improvements: [
        '📚 Learn Advanced Stress Management Techniques: You know basics (4-7-8 breathing, exercise, boundaries). Good. But learn ADVANCED TECHNIQUES: (1) COGNITIVE BEHAVIORAL THERAPY (CBT) techniques (identify stress thoughts "I will fail exams", challenge them "I am prepared enough", reframe "I will do my best"), (2) MINDFULNESS-BASED STRESS REDUCTION (MBSR - 8-week program, reduces stress 40-50%, scientifically proven), (3) PROGRESSIVE MUSCLE RELAXATION (tense and release each muscle group - reduces physical tension), (4) VISUALIZATION (imagine calm place - beach, mountains - reduces mental stress), (5) BODY SCAN MEDITATION (focus on each body part, release tension). Take course: "Mindfulness-Based Stress Reduction" (8 weeks, 2 hours/week). Practice: Daily mindfulness, CBT reframing, body scan. Advanced techniques enable: Deeper stress reduction (beyond basics), better stress resilience (handle higher stress), faster recovery (bounce back quicker). Invest 30 hours over 2 months. Become stress management expert.',
        '🛠️ Build Comprehensive Stress Management Plan: You practice techniques ad-hoc (breathing when stressed, exercise sometimes). Good. But build COMPREHENSIVE PLAN: (1) DAILY ROUTINE: Morning (6:30 AM wake, 2 min breathing, 30 min exercise), Midday (2 min breathing after lunch), Evening (hobbies 1 hour, journal 10 min, 2 min breathing before bed). (2) WEEKLY ROUTINE: Monday-Friday (study 8-6, exercise 30 min, breathing 3×, hobbies 1 hour evening). Saturday (full rest: hobbies, friends, nature, no study guilt). Sunday (light review 2 hours, rest of day leisure). (3) MONTHLY REVIEW: Track stress level (9/10 → 8/10 → 7/10 → 6/10 over 4 weeks), Adjust what is not working (if stress not reducing, try different techniques). (4) EMERGENCY PLAN: When stress spikes (exam day, interview day, crisis): Quick breathing (5 min), Call friend (support), Take walk (break from stress), Use mantras ("I can handle this. I am prepared."). Comprehensive plan = systematic stress management (not random ad-hoc). Result: Consistent low stress (3-4/10 baseline), handle stress spikes (have emergency tools), prevent burnout (sustainable routine).',
        '🎯 Develop Stress Awareness and Early Intervention: You notice stress when severe (9/10, physical symptoms, cannot sleep). Good. But develop EARLY AWARENESS: Notice stress at 5/10 (before it becomes 9/10). Early signs: (1) PHYSICAL: Slight tension (shoulders, jaw), Mild headache, Energy drop, (2) MENTAL: Worry increasing, Difficulty focusing, Procrastinating, (3) BEHAVIORAL: Skipping exercise, Poor sleep (1-2 nights), Avoiding friends. When you notice early signs (stress at 5/10): INTERVENE IMMEDIATELY (extra breathing session, longer exercise, talk to friend, reduce commitments for few days). Result: Stress stays at 5/10 (does not escalate to 9/10). Prevention easier than cure. Early intervention prevents: Stress escalation (5/10 → 9/10 → burnout), Physical symptoms (headaches, stomach pain, illness), Performance decline (cannot focus, cannot study). In B.Com, develop stress awareness. Notice early signs. Intervene early. Keep stress at 4-5/10 (manageable). Do not let it reach 9/10 (overwhelming, hard to recover).',
        '🤝 Build and Maintain Support System: You seek support when crisis (stress 9/10, overwhelmed). Good. But build support system BEFORE crisis: (1) IDENTIFY SUPPORT PEOPLE: Friends (3 close friends you can call anytime), Family (parents, siblings who understand), Mentor (professor, senior who provides guidance), Counselor (college counseling, know how to access), Peer group (classmates facing same stress). (2) MAINTAIN RELATIONSHIPS: Regular contact (not just when need help). Catch up weekly (coffee, call, message). Share both stress AND wins (build mutual support). (3) GIVE SUPPORT: When friends stressed, support them (listen, help, be there). Mutual support = stronger system. (4) KNOW RESOURCES: College counseling (how to book?), Crisis hotline (number saved), Support groups (exam stress group, job search group). When crisis hits: You already have support system (know who to call, how to access, have relationships). Not building from scratch. In B.Com, invest in support system (weekly friend time, maintain mentor relationships, know resources). Support system = stress insurance. You might not need it now, but when stress hits, you will be grateful you built it.',
        '📊 Track Stress Levels and What Works: You practice techniques (breathing, exercise, boundaries). Good. But TRACK: (1) STRESS LEVEL DAILY: Morning: "How stressed am I? (1-10 scale)." Evening: "How stressed am I now? What changed?" Track in journal or app. (2) WHAT WORKS: After breathing session: "Did stress reduce? (Yes: 7/10 → 6/10)." After exercise: "Did stress reduce? (Yes: 6/10 → 5/10)." After talking to friend: "Did stress reduce? (Yes: 5/10 → 4/10)." Identify: What works BEST for you (everyone is different). (3) PATTERNS: "What triggers stress spikes? (Sunday evening - exam anxiety). What reduces stress most? (Exercise, talking to friend)." After 1 month tracking: You know: Your stress triggers (exams, job search), Your best stress reducers (exercise, talking), Your optimal routine (morning exercise, evening hobbies). Tracking enables: Personalize stress management (know what works for YOU), Optimize routine (do more of what works), Prevent stress (avoid triggers when possible). In B.Com, track stress. Data-driven stress management = more effective than random techniques. Know what works. Do more of it.'
      ],
      nextSteps: [
        '📚 Take Stress Management Course: Enroll in: (1) "Mindfulness-Based Stress Reduction (MBSR)" (8 weeks, 2 hours/week - gold standard stress management program, reduces stress 40-50%), (2) "Cognitive Behavioral Therapy for Stress" (6 weeks - learn CBT techniques: identify stress thoughts, challenge, reframe), (3) "Stress Management for Students" (20 hours, Coursera - learn techniques: breathing, meditation, exercise, boundaries), (4) "Resilience Building" (15 hours - build stress resilience, bounce back from stress). Total: 60 hours over 3 months. Apply: Daily MBSR practice, CBT reframing, stress management routine. Result: Significantly lower stress (baseline 3/10, not 6/10), better stress resilience (handle stress spikes better), prevent burnout.',
        '🧠 Build Daily Stress Management Routine (Non-Negotiable): Make stress management daily habit (like brushing teeth). DAILY ROUTINE: Morning (6:30 AM wake, 2 min breathing, 30 min exercise - start day calm, energized). Midday (1 PM: 2 min breathing after lunch - reset for afternoon). Evening (6-8 PM: hobbies/social - recovery from day. 10 PM: journal 10 min, breathing 2 min - wind down for sleep). Weekly: Monday-Friday (study/work, exercise, breathing, hobbies). Saturday (full rest: sleep in, hobbies, friends, nature). Sunday (light work, mostly rest). Monthly: Review stress levels (track progress), adjust routine (try new techniques if stress not reducing). Make it NON-NEGOTIABLE: Breathing (6 min/day total), Exercise (30 min/day), Sleep (8 hours/night), Weekend rest (1 day full rest). These are not optional. These are essential (like food, water, sleep). Result: Baseline stress 3-4/10 (manageable), handle stress spikes (have tools), prevent burnout (sustainable routine), better performance (focus, memory, energy), better well-being (health, happiness, relationships).',
        '📊 Create Personal Stress Management Toolkit: Document techniques that work for YOU. CREATE TOOLKIT: (1) INSTANT RELIEF (0-5 minutes): 4-7-8 breathing (2 min), Progressive muscle relaxation (5 min), Cold water on face (1 min - activates dive reflex, calms immediately), (2) SHORT-TERM (10-30 minutes): Exercise (30 min walk/run), Meditation (10 min), Journaling (10 min), Nature (20 min park walk), (3) LONG-TERM (daily practice): Exercise routine (30 min/day, 5 days/week), Meditation practice (10 min/day), Boundaries (study 8-6, sleep 8 hours), Healthy coping (hobbies, social, creative), (4) SUPPORT: Friends (3 close friends to call), Counselor (college counseling, know how to book), Support group (exam stress group, job search group), Mentor (professor, senior). Use toolkit: Stress level 4/10? Use instant relief (breathing). Stress level 7/10? Use short-term + support (exercise + call friend). Stress level 9/10? Use all + professional help (breathing + exercise + counselor). Toolkit = stress management arsenal. Different tools for different stress levels.',
        '🎓 Help Others with Stress Management: You mastered stress management. Now help others. WAYS TO HELP: (1) SHARE YOUR STORY: Social media post "How I reduced stress 9/10 → 3/10 in 1 month" (share techniques: breathing, exercise, boundaries). Help 50 people discover stress management. (2) TEACH WORKSHOP: "Stress Management for B.Com Students" (2 hours, teach: identify triggers, 4-7-8 breathing, exercise routine, boundaries, healthy coping). Run for 30 students. (3) SUPPORT FRIENDS: When friends stressed, share techniques (teach breathing, exercise together, share coping strategies). (4) CREATE RESOURCES: Write blog post, create PDF guide "Stress Management Toolkit for B.Com Students" (share on WhatsApp groups, help 100+ students). Helping others: Reinforces your learning (teaching = best way to learn), Builds reputation (known as stress management expert), Creates impact (help many people improve well-being), Feels good (making difference in others lives). In B.Com, share stress management. Help classmates. Reduce stress culture. Build wellness culture.',
        '💼 Build Long-Term Stress Resilience: You manage current stress. Good. But build LONG-TERM RESILIENCE (ability to bounce back from stress quickly). Build resilience: (1) REGULAR PRACTICE: Daily breathing, exercise, meditation (even when not stressed - builds capacity to handle stress). (2) GROWTH MINDSET: See stress as challenge (not threat). "Exams are opportunity to learn" (not "Exams are terrifying"). Mindset shapes stress response. (3) MEANING AND PURPOSE: Connect to why (why are you studying B.Com? Career goals? Help family? Personal growth?). Meaning reduces stress ("This hard work has purpose"). (4) SOCIAL CONNECTIONS: Strong relationships (friends, family, community). Social support = stress buffer. (5) SELF-COMPASSION: Be kind to yourself when stressed ("I am doing my best. It is OK to struggle sometimes"). Self-criticism increases stress. Self-compassion reduces stress. Resilience = not avoiding stress (impossible). Resilience = bouncing back quickly (stress happens, recover fast, keep going). In B.Com, build resilience (long-term investment). When stress hits, you have: Tools (breathing, exercise), Mindset (growth, not threat), Support (friends, family), Self-compassion (kind to yourself). Resilient people handle stress better, recover faster, prevent burnout.'
      ]
    },
    badge: { name: 'Stress Manager', emoji: '😌', description: 'Expert in managing stress' },
    shareMessage: 'Just mastered stress management! 😌 #StressManagement #Wellness'
  },
  {
    id: 'work-life-balance',
    title: 'Work-Life Balance',
    emoji: '⚖️',
    context: 'professional' as const,
    discover: {
      scenario: "B.Com internship. 9 AM-10 PM daily + weekends. Emails at 1 AM. 10 friend invites declined. Partner: 'Work or me?' Manager: '13hrs/day but same output as 8hr colleagues. You're burning out.'",
      problemExplanation: [
        "90hrs/week = 40hr results: Hours 9-13? Mistakes, redoing work. Hustle = inefficient",
        "Guilt trap: Saturday exhausted, force work, achieve nothing. Monday still tired",
        "Zero boundaries: Work never 'ends'. Midnight emails. No personal time. Work invaded life",
        "Relationships dying: 10 declines, partner breakup threat, family neglected. Career but no life"
      ],
      solutionApproach: [
        "Work smart 9hr: Focus 9 AM-6 PM. Quality > quantity. Breaks = better output",
        "Rest guilt-free: Saturday = zero work. Recharge = Monday productivity. Rest = performance strategy",
        "Set boundaries: Work ends 6 PM. No midnight emails. Personal time 6-10 PM = sacred",
        "Protect relationships: Friday dinner = blocked. Date nights = blocked. Career means nothing without people"
      ]
    },
    video: {
      title: 'Work Smart, Live Well: Work-Life Balance for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY 13 HOURS/DAY FAILS

"You are Product Manager intern. Month 1: Work 9 AM - 10 PM (13 hours/day), weekends too. Month 2: Exhausted, unfulfilled, relationship suffering. Month 3: Manager: 'You work 13 hours/day but output = same as colleagues who work 8 hours. You have NO work-life balance. This causes burnout, poor performance, damaged relationships, unfulfilled life. You need balance.' You realize: Working 13 hours/day is not sustainable. By the end of this video, you will master work-life balance. Work smart, live well. Let us fix this."

[0:45-2:15] STEP 1: SET CLEAR WORK-LIFE BOUNDARIES

"Define when work ENDS (not just when it starts).

BOUNDARIES:

1. WORK HOURS: 9 AM - 6 PM (9 hours, sufficient!)
   At 6 PM: Work ENDS. Close laptop. No more work.

2. PERSONAL HOURS: 6-10 PM (4 hours)
   Exercise, dinner, hobbies, partner/friends, relaxation
   Non-negotiable personal time

3. SLEEP: 10 PM - 6 AM (8 hours, protected)

4. WEEKEND:
   Saturday: ZERO work (full rest, hobbies, friends, family)
   Sunday: Maximum 2 hours light work (rest of day personal)

5. DIGITAL: No work emails after 8 PM
   Turn off notifications. Do not check.

Boundaries = protect personal time from work invasion.

Work happens during work hours (9-6, focused).
Life happens during personal hours (6-10 PM, weekends).

Clear separation.

With boundaries: Work time is efficient (9 hours focused > 13 hours distracted).
Personal time is protected (4 hours/day for life).
Sustainable performance (no burnout)."

[2:15-3:45] STEP 2: SCHEDULE REST (Like You Schedule Work)

"You schedule work meetings (blocked on calendar, non-negotiable).

But rest? 'When I have time' (never have time).

FIX: SCHEDULE REST (block on calendar, non-negotiable).

DAILY REST:
- 6:30-7 PM: Exercise (30 min - blocked on calendar)
- 8-9 PM: Hobbies (cooking, guitar, reading - blocked)
- 9-10 PM: Relaxation (TV, walk, talk - blocked)

WEEKLY REST:
- Friday 7 PM: Dinner with friends (every week, blocked, do not cancel)
- Saturday: Full rest day (sleep in, hobbies, friends - no work, blocked)
- Sunday morning: Brunch with family (blocked)

MONTHLY REST:
- First Saturday: Full day adventure (hiking, beach, museum - blocked)

When work conflicts with scheduled rest:
'Sorry, I have prior commitment' (rest IS commitment).

Manager schedules meeting 8 PM (your hobby time):
'Sorry, I have commitment 8 PM. Can we do 2 PM instead?'

You protected your rest.

Rest is not 'when I have time.'
Rest is SCHEDULED (blocked on calendar, protected like work meetings)."

[3:45-5:15] STEP 3: LEARN TO SAY NO

"You say YES to everything:
- Manager: 'Work Saturday?' You: 'Yes!'
- Colleague: 'Help my project?' You: 'Yes!'
- Friend: 'Join 5 clubs?' You: 'Yes!'

Result: Overcommitted (20 hours/day impossible!), Overwhelmed, Burnout.

LEARN TO SAY NO:

Manager: 'Work Saturday?'
You: 'I have prior commitment Saturday (rest day). Can we plan better this week to finish by Friday?'

Colleague: 'Help my project?'
You: 'I am at capacity. I cannot take more. Maybe next month?'

Friend: 'Join 5 clubs?'
You: 'I will join 1 (most important). I need to protect my energy.'

Saying NO enables:
- Protect time (for priorities)
- Protect energy (for what matters)
- Prevent overwhelm (manageable commitments)
- Sustainable performance

Saying no is not rude, avoiding opportunity, or lazy.

Saying no is: Self-care, smart strategy, necessary skill.

You cannot do everything. Protect your energy."

[5:15-6:45] STEP 4: PRIORITIZE WHAT MATTERS

"You treat everything as equally important:
- Work project (important)
- Colleague favor (not important but you do it)
- Random meeting (not important but you attend)
- Checking emails 20 times/day (not important but you do it)

Result: No time for important things (health, relationships, rest).

PRIORITIZE using EISENHOWER MATRIX:

1. URGENT + IMPORTANT (do first):
   Work deadlines, health issues, relationship conflicts

2. NOT URGENT but IMPORTANT (schedule):
   Exercise (schedule it!)
   Relationship time (schedule date night!)
   Rest (schedule weekend rest!)

3. URGENT but NOT IMPORTANT (delegate/minimize):
   Random meetings (decline)
   Colleague favors (say no)

4. NOT URGENT, NOT IMPORTANT (eliminate):
   Checking emails 20 times/day (check 3 times only)
   Social media scrolling (eliminate)

After prioritization:
IMPORTANT things get time (exercise, relationships, rest - scheduled, protected).
UNIMPORTANT things get eliminated (random meetings, distractions).

Result: Time for what matters."

[6:45-7:45] STEP 5: BALANCE = RIGHT PRIORITIES (Not Equal Time)

"Balance is not 8 hours work, 8 hours personal, 8 hours sleep (equal time daily).

Balance is RIGHT PRIORITIES at right time.

WEEKLY BALANCE:
Monday-Friday: More work (9 hours/day = 45 hours)
Saturday-Sunday: More personal (0 hours Saturday, 2 hours Sunday = 2 hours)

Weekly: 47 hours work, 35 hours personal (not equal, but balanced).

SEASONAL BALANCE:
Exam month: More study (12 hours/day)
Post-exam: More personal (6 hours/day)

Balance principles:
1. FLEXIBLE (some days more work, some more personal)
2. PRIORITIES (urgent deadline = more work today)
3. LONG-TERM (over weeks/months, both work and life get time)

Balance prevents burnout, improves performance, protects relationships."

[7:45-8:00] YOUR CHALLENGE (Build Your Balance)

"Here is your action step: This week, build work-life balance.

Set boundaries:
1. Work hours: 9 AM - 6 PM (at 6 PM, work ENDS)
2. Personal hours: 6-10 PM (exercise, hobbies, relationships)
3. Weekend: Saturday NO WORK (full rest day)

Schedule rest:
1. Exercise: 6:30 PM daily (blocked on calendar)
2. Hobbies: 8 PM daily (blocked)
3. Friends: Friday dinner (blocked)

Say no:
1. Non-essential commitments (protect energy)

RESULT: Sustainable performance, better well-being, no burnout.

Work-life balance = essential skill. Master it now."

[End Screen: "Next Video: Mental Health Awareness - Break the Stigma"]`,
      content: [
        'Set Clear Work-Life Boundaries: Work 9 AM-6 PM (at 6 PM work ENDS), personal 6-10 PM (exercise, hobbies, relationships), sleep 8 hours, weekend (Saturday zero work, Sunday 2 hours max)',
        'Schedule Rest Like Work: Block on calendar (daily: exercise 6:30 PM, hobbies 8 PM; weekly: Friday dinner, Saturday rest; monthly: adventure day)',
        'Learn to Say No: Protect energy, prevent overwhelm (say no to non-essential, Saturday work, excessive commitments - say yes to priorities only)',
        'Prioritize What Matters: Eisenhower Matrix (urgent+important: do first; not urgent but important: schedule exercise/relationships/rest; eliminate unimportant)',
        'Balance = Right Priorities Not Equal Time: Weekly balance (M-F more work, weekends more personal), seasonal balance (exam month more study, post-exam more life)',
        'Quality Over Quantity: 9 hours focused work > 13 hours distracted work. Balance prevents burnout, improves performance, protects relationships',
        'B.Com Applications: Internship balance, exam-life balance, job-life balance, prevent hustle culture burnout, sustainable performance'
      ]
    },
    quiz: {
      title: 'Work-Life Balance Quiz',
      questions: [
        {
          id: 6,
          question: '"Balance = 8hr work, 8hr personal, 8hr sleep daily." Right?',
          options: [
            'Yes, perfect 50-50 daily split',
            'No—flexible priorities + boundaries',
            'No work at all, only life',
            'All work, all the time'
          ],
          correct: 1,
          explanation: 'Balance not 50-50 daily split. Flexible priorities + clear boundaries. Some days more work, some more life. Think weekly/monthly, not daily. Work M-F 9-6, life evenings/weekends. Exams = more study, post-exams = more chill. Sustainable long-term beats rigid daily!'
        },
        {
          id: 7,
          question: '13hr/day, 7 days/week. Month 3: burned out, performance tanking. Why set boundaries?',
          options: [
            'Boundaries limit career success',
            'Protect energy, prevent burnout',
            'Boundaries help avoid work',
            'Boundaries = lazy'
          ],
          correct: 1,
          explanation: 'Boundaries force focus (9-6 finite = work efficiently). Protect personal time (6-10pm rest = recharge). 9hr focused > 13hr exhausted. Same output, no burnout. Work time productive, personal time restorative. Sustainable long-term performance. Boundaries enable success, not limit it!'
        },
        {
          id: 8,
          question: 'Saturday exhausted. "Should rest" but guilt: "Rest = lazy!" Work Saturday (achieve nothing). Earned or scheduled rest?',
          options: [
            'Earned—work hard first, then deserve',
            'Scheduled—block calendar, non-negotiable',
            'Optional—only when exhausted',
            'When you have time (flexible)'
          ],
          correct: 1,
          explanation: 'Schedule rest like work meetings—block calendar, protect it. Daily: 6:30pm exercise (non-negotiable). Weekly: Saturday rest. "When I have time" = never happens. Scheduled = guarantees rest, kills guilt, prevents burnout. Rest to work well, not work well to rest. Rest = required, not earned!'
        },
        {
          id: 9,
          question: 'Manager: "Work Saturday?" You need rest but worry "No = limits career." Help or hurt?',
          options: [
            'Hurts—avoids opportunities',
            'Helps—protects rest = better M-F performance',
            'Rude and unprofessional',
            'Limits growth'
          ],
          correct: 1,
          explanation: 'Saying no protects priorities. "I have Saturday commitment (rest day for better M-F performance). Can we finish Friday or do Monday?" Rest Saturday = energized Monday = better work than exhausted colleagues. Protect rest = sustainable high performance. Say no politely + offer alternative. Smart prioritization, not avoiding opportunity!'
        },
        {
          id: 10,
          question: 'Got balance: Work 9-6, exercise 6:30pm, hobbies 8pm, Saturday rest. What improves?',
          options: [
            'Nothing, balance kills performance',
            'Both work AND life—focused, energized, happier',
            'Only mood',
            'Only physical health'
          ],
          correct: 1,
          explanation: 'Balance = win-win. WORK: better focus, higher productivity, clearer decisions, more creativity, sustainable long-term. LIFE: better health, stronger relationships, more joy, less stress, higher satisfaction. Not trade-off (work OR life). Both improve together. Balance = performance strategy + life strategy!'
        }
      ]
    },
    challenge: {
      title: 'Work-Life Balance Challenge',
      description: 'From burnout to balance - work smart, live well',
      contexts: {
        academic: {
          title: 'Academic Balance Excellence',
          description: 'B.Com semester: Study 14 hours/day, 7 days/week (no rest, no social life, no hobbies). Month 2: Burned out, GPA dropping (exhausted, cannot focus), relationship issues (declined 15 friend invitations), unfulfilled (study only, no life, no joy). Professor: "You have no study-life balance. This causes burnout, poor performance. You need balance." Goal: Build study-life balance, sustainable performance, fulfilling life.',
          instructions: [
            '1. Week 1 - Assess Current Imbalance (Days 1-2, 4 hours): Track one week: Monday-Sunday: Study 6 AM - 8 PM (14 hours/day). Total: 98 hours/week study! Personal time: Exercise 0 hours, Friends 0 hours, Hobbies 0 hours, Rest 0 hours (no rest days). Sleep: 4-6 hours/night (exhausted). Assessment: SEVERE IMBALANCE (all study, no life). Results: GPA 7.0 (declining from 7.5 - exhaustion impairs memory, focus), Health poor (no exercise, poor sleep, stressed), Relationships damaged (declined 15 friend invitations - friends stopped asking), Unfulfilled (no joy, no hobbies, study only). You realize: Study 14 hours/day is not sustainable (burning out). Need balance.',
            '2. Week 1 - Set Study-Life Boundaries (Days 2-5, 6 hours): SET BOUNDARIES: (1) STUDY HOURS: 8 AM - 6 PM (10 hours/day, sufficient! Quality > quantity). At 6 PM: Study ENDS. Close books. No more study. (2) PERSONAL HOURS: 6-10 PM (4 hours for: 6:30-7 PM exercise, 7-8 PM dinner, 8-9 PM hobbies, 9-10 PM relaxation/social). Non-negotiable personal time. (3) SLEEP: 10 PM - 6 AM (8 hours, protected. Was 4-6 hours - now 8 hours!). (4) WEEKEND: Saturday: ZERO study (full rest, hobbies, friends, nature - no guilt). Sunday: 2 hours light review only (rest of day personal). (5) DIGITAL: No study materials in bedroom (protect sleep), No study apps after 8 PM (protect evening). Boundaries set. Communicated to friends: "I am available 6-10 PM and Saturdays now!" Friends: "Great! Let us hang out!"',
            '3. Week 2 - Schedule Rest and Personal Time (Days 6-14, 10 hours): SCHEDULE on calendar (blocked, non-negotiable): DAILY: 6:30-7 PM: Gym (exercise - blocked). 8-9 PM: Guitar practice (hobby - blocked). 9-10 PM: Call friend or TV (relaxation - blocked). WEEKLY: Friday 7 PM: Dinner with friends (every week - blocked, do not cancel). Saturday: Full rest day (sleep in 8 AM, brunch with friends 11 AM, afternoon hobbies, evening movie - blocked, zero study). Sunday: Morning family time (blocked), Afternoon 2 hours light review (blocked). When study urgent (exam coming, assignment due) and conflicts with personal time: "I have exercise 6:30 PM. I will study extra hour morning (7-8 AM) or finish tomorrow." Most times: Can adjust study hours (study 7-8 AM extra, finish by 6 PM). Protect scheduled personal time. Week 2: Attended Friday dinner (first time in 2 months!), Full Saturday rest (hobbies, friends, no guilt!), Exercise 5 days (feeling better!). Friends: "We missed you! Happy you are back!"',
            '4. Week 3-4 - Learn to Say No (Days 15-30, 8 hours): Learn to say NO: Friend 1: "Join 3 clubs?" You (before): "Yes!" (overcommit). You (now): "I will join 1 (debate club - most important). I need to protect energy for studies and personal health." Friend 1: "Understood!" Professor: "Want to volunteer for college fest (20 hours)?" You (before): "Yes!" (no time). You (now): "I am at capacity with studies. I cannot take this on. Maybe next semester?" Professor: "OK!" Friend 2: "Help me with assignment (4 hours)?" You (before): "Yes!" (sacrifice personal time). You (now): "I can help 1 hour tomorrow during lunch. But I cannot do full 4 hours (I have personal commitments)." Friend 2: "1 hour helps! Thank you!" Saying no enabled: Protect study time (10 hours/day, sufficient), Protect personal time (exercise, hobbies, friends - 4 hours/day), Prevent overwhelm (manageable commitments - study + 1 club + occasional help, not study + 3 clubs + fest + 4 hour favors). Result: Have time for priorities (study 10 hours focused, personal 4 hours enjoyed). Not overcommitted (can fulfill commitments well). Sustainable (no burnout).',
            '5. Week 4 - Apply During High Stress (Exam Week) (Days 26-30, ongoing): Exam week (high stress, temptation to abandon balance). MAINTAIN BOUNDARIES: Study hours: 8 AM-6 PM (10 hours study). Personal hours: 6-10 PM (exercise 6:30-7, dinner 7-8, light review 8-9, wind down 9-10). Weekend before exams: Saturday: Half rest (morning study 3 hours, afternoon rest 5 hours - compromised balance, not abandoned). Sunday: Study 6 hours, rest 4 hours. Exam days: Morning routine (exercise 30 min before exam - reduces anxiety), Study-life balance maintained (not abandoned). Result: Exams go well! (Rested brain performs better than exhausted brain). 4 out of 5 subjects: 85%+! GPA: 7.8 (up from 7.0!). Friends: "You balanced exams and life! Still came to Friday dinner during exam week!" Partner: "Proud of you!" Balance worked even during high stress.',
            '6. Month 2 - Review and Optimize (Days 31-60, ongoing): Month 2 results: GPA: 7.8 (up from 7.0 - better performance with balance!), Study hours: 10 hours/day (down from 14 hours - but better quality, more focused), Health: Improved (exercise 5 days/week, sleep 8 hours, more energy), Relationships: Restored (Friday dinners, Saturday friends, Sunday family - friends happy, relationship healed), Joy: Returned (hobbies, social, rest - feeling fulfilled, not just studying). Manager comparison: You (10 hours study, 4 hours personal, 8 hours sleep) vs classmate (14 hours study, 0 personal, 4 hours sleep). You: GPA 7.8, healthy, happy. Classmate: GPA 7.2 (lower!), burned out, unhappy. You: Work smart (10 hours focused, rested). Classmate: Work hard (14 hours exhausted, diminishing returns). You WIN (better performance + better well-being). Balance is not trade-off. Balance is win-win.',
            '7. Month 3 - Share and Help Others (Days 61-90, 6 hours): Share with classmates: "How I Improved GPA from 7.0 to 7.8 While Working LESS (14 hours → 10 hours)." Share: (1) Boundaries (study 8-6, personal 6-10 PM, weekend rest), (2) Scheduled rest (exercise, hobbies, friends - blocked on calendar), (3) Quality > quantity (10 hours focused > 14 hours exhausted), (4) Balance improves performance (rested brain works better). 10 classmates adopt study-life balance. Results: 8 out of 10 improve GPA (balance works!), All 10 feel happier (have life, not just study), 2 avoid burnout (were heading to burnout, balance saved them). Professor: "Excellent! You demonstrated sustainable high performance through balance. A grade!" You mastered work-life balance. Helped 10 classmates. Professor praises. Balance = sustainable success.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Studying 14 hours/day: No rest, no life. Result: Burnout (Month 2: GPA drops, exhausted). Solution: Study 10 hours (focused), rest 4 hours (recover).',
            '• Guilt about rest: "Rest = lazy. I should study more." Result: Force study when exhausted (achieve nothing). Solution: Schedule rest (Saturday rest day - guilt-free, supposed to rest).',
            '• No boundaries: Study until "done" (never done - study until midnight). Result: Work expands infinitely, no sleep, burnout. Solution: Study 8-6 (at 6 PM study ENDS, no exceptions).',
            '• Skipping personal time: Urgent assignment → skip exercise, cancel Friday dinner. Result: Personal time always loses, no life, unhappy. Solution: Protect personal time (exercise, Friday dinner are non-negotiable).',
            '• Saying yes to everything: 3 clubs + college fest + friend favors. Result: Overcommitted, overwhelmed. Solution: Say no (join 1 club, decline fest, limited help).'
          ],
          successCriteria: [
            '✅ You assess imbalance (14 hours/day study, 0 personal, GPA 7.0 declining, burned out)',
            '✅ You set boundaries (study 8-6, personal 6-10 PM, sleep 8 hours, Saturday zero study)',
            '✅ You schedule rest (exercise 6:30 PM, hobbies 8 PM, Friday dinner, Saturday rest - blocked on calendar)',
            '✅ You learn to say no (decline 2 clubs, volunteer fest, excessive favors - protect energy)',
            '✅ You maintain balance during exam week (study but keep exercise, Friday dinner, weekend semi-rest)',
            '✅ You improve performance (GPA 7.0 → 7.8 with less study hours: 14 → 10)',
            '✅ You restore well-being (health, relationships, joy - balanced, fulfilled life)',
            '✅ You help 10 classmates adopt balance (8 improve GPA, all feel happier, 2 avoid burnout)'
          ]
        },
        professional: {
          title: 'Professional Balance Mastery',
          description: 'You are Marketing intern at startup. Work 13 hours/day, weekends too (no boundaries). Month 3: Burned out, performance dropping, partner threatens breakup ("You are always working!"). Manager: "You need work-life balance." Goal: Build work-life balance, sustainable performance, healthy relationships.',
          instructions: [
            '1. Week 1 - Assess Current Imbalance (Days 1-2, 3 hours): Track one week: Monday-Sunday: Work 9 AM - 10 PM (13 hours/day, 7 days/week). Total: 91 hours/week work! Personal time: Exercise 0 hours, Partner time 0 hours (declined movie night, dinner date), Friends 0 hours (declined 3 invitations), Hobbies 0 hours. Sleep: 5 hours/night (exhausted). Assessment: SEVERE IMBALANCE (all work, no life). Results: Work performance declining (burnout, cannot focus, making mistakes), Health poor (no exercise, poor sleep, gaining weight, stressed), Relationship crisis (partner: "Choose: work or me?"), Unfulfilled (no joy, work only). Manager: "You work 13 hours but output = colleague who works 9 hours. Diminishing returns." You realize: Work 13 hours/day is unsustainable. Need balance.',
            '2. Week 1 - Set Work-Life Boundaries with Manager (Days 2-5, 6 hours): Talk to manager: "I am working 13 hours/day, 7 days/week (91 hours/week). I am burning out. Performance is dropping. I need work-life balance." Manager: "You are right. Let us set boundaries and prioritize." BOUNDARIES: (1) WORK HOURS: 9 AM - 6 PM (9 hours/day, 45 hours/week with breaks). At 6 PM: Work ENDS (leave office, close laptop, no emails). (2) PERSONAL HOURS: 6-10 PM (exercise, partner time, hobbies, rest - non-negotiable). (3) WEEKEND: Saturday: ZERO work (full rest). Sunday: Maximum 2 hours (light work only, morning). (4) WORKLOAD: Prioritize critical tasks (delegate/postpone non-essential). Reduce from 91 hours to 45 hours (cut non-essential work). Manager: "Try this for 1 month. Let us see if performance improves." Boundaries set.',
            '3. Week 1-2 - Schedule Rest and Relationships (Days 5-14, 8 hours): SCHEDULE on calendar: DAILY: 6:30-7 PM: Gym (exercise - blocked, non-negotiable). 8-9 PM: Partner time (dinner, talk, movie - blocked). 9-10 PM: Hobbies or rest (reading, TV - blocked). WEEKLY: Wednesday 8 PM: Date night with partner (every week - blocked, protected). Friday 7 PM: Dinner with friends (every week - blocked). Saturday: Full rest day (sleep in, brunch with partner 11 AM, afternoon friends/hobbies, evening relaxation - blocked, zero work). Sunday morning: Family brunch (blocked). When work urgent: Manager: "Can we have meeting 8 PM?" You: "I have commitment 8 PM (partner time). Can we do 3 PM instead?" Manager: "OK." You protected your relationship. Week 2: Attended date night (partner happy!), Friday dinner (friends happy!), Saturday full rest (first time in 3 months!). Partner: "I am so happy we have time together now!" Relationships restored.',
            '4. Week 3 - Practice Saying No (Days 15-21, 6 hours): Learn to say NO: Colleague: "Can you help my project Saturday (8 hours)?" You (before): "Yes!" (sacrifice rest). You (now): "I have commitment Saturday (rest day - I need to recharge). Can I help 1 hour Friday afternoon instead?" Colleague: "1 hour helps! Thanks!" Manager: "Can you take on new project (20 hours/week)?" You (before): "Yes!" (overcommit to 65 hours/week total). You (now): "I am at 45 hours/week capacity. To take new project, I need to delegate current project or postpone. Which is priority?" Manager: "Let us delegate current project. Take new project." Client: "Can you work Sunday?" You (now): "I have prior commitment Sunday (family time). I can deliver this Monday morning instead." Client: "OK!" Saying no enabled: Protect rest (Saturday rest day protected), Prevent overwhelm (stay at 45 hours/week, not 65 hours), Maintain relationships (partner, friends, family time protected). Result: Manageable workload (45 hours sustainable), protected personal time (4 hours/day), no overcommit.',
            '5. Week 4 - Apply During Deadline Week (Days 22-30, ongoing): Product launch week (high pressure, tight deadline). MAINTAIN BOUNDARIES (do not abandon): Work hours: 9 AM - 7 PM (10 hours, flexible +1 hour for urgent week). Personal hours: 7-10 PM (3 hours - reduced but not eliminated. Exercise 7-7:30 PM, Partner time 8-9 PM, Rest 9-10 PM). Weekend: Saturday: 4 hours light work morning, afternoon/evening rest (compromised, not abandoned). Sunday: Rest (zero work). Result: Launch successful! (Worked 10 hours/day M-F + 4 hours Saturday = 54 hours total - sufficient!). Maintained some balance (exercise 5 days, partner time 5 days, Saturday afternoon rest). Did not burn out (kept some rest, some relationships). Manager: "Excellent work! You launched product AND maintained balance!" Balance works even during high-pressure weeks.',
            '6. Month 2-3 - Review and Optimize (Days 31-90, ongoing): Month 2 results: Work performance: IMPROVED (better focus with 9 hours work than 13 hours before - rest improves productivity!). Manager: "Your work quality is excellent now. Better than when you worked 13 hours!" Health: Improved (exercise 5 days/week, sleep 8 hours, lost weight, more energy). Relationships: Restored (date night, Friday dinners, family time - partner happy, friends happy). Fulfillment: High (have work AND life - career + love + health + hobbies = fulfilled). Work-life balance score: 8/10 (was 2/10). Sustainable (can maintain long-term, no burnout risk).',
            '7. Month 3 - Share Success and Get Promoted (Days 61-90, 6 hours): Share with team: "How I Improved Work Performance by Working LESS (13 hours → 9 hours)." Share: Boundaries, scheduled rest, saying no, quality > quantity. 5 colleagues adopt work-life balance. Results: All 5 improve work quality, feel happier, relationships improve. CEO notice: "You are performing excellently AND maintaining healthy work-life balance. You are model for team. Promoted to Marketing Manager." Promotion! Balance did not hurt career. Balance HELPED career (better performance, sustainable, positive influence on team). You mastered work-life balance. Helped team. Got promoted. Balance = career success.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Working 13 hours/day: No boundaries. Result: Burnout (Month 3: cannot work, quit job). Solution: Work 9-6 (boundaries, sustainable).',
            '• Working weekends: No rest days. Result: Exhausted Monday (poor performance). Solution: Saturday zero work (rest, recover, energized Monday).',
            '• Not scheduling rest: "I will rest when I have time" (never have time). Result: No rest, burnout. Solution: Schedule rest (block on calendar, protect it).',
            '• Canceling personal time: Urgent work → skip exercise, cancel date night. Result: Personal time always loses, relationships suffer. Solution: Protect personal time (non-negotiable).',
            '• Saying yes to everything: All requests accepted. Result: Overcommitted (65 hours/week), overwhelmed, burnout. Solution: Say no to non-essential (stay at 45 hours).'
          ],
          successCriteria: [
            '✅ You assess imbalance (91 hours/week work, 0 personal, burned out, performance dropping)',
            '✅ You set work boundaries with manager (work 9-6, personal 6-10 PM, weekend rest - reduce to 45 hours/week)',
            '✅ You schedule rest (exercise 6:30 PM, partner time 8 PM, Friday dinner, Saturday rest - blocked on calendar)',
            '✅ You practice saying no (decline Saturday work, excessive projects, protect boundaries)',
            '✅ You maintain balance during deadline week (work 10 hours M-F, keep exercise and partner time, Saturday compromise)',
            '✅ You improve performance (better work quality with 9 hours than 13 hours before - rest improves productivity)',
            '✅ You restore relationships (date night, Friday dinners, family time - partner happy, friends happy)',
            '✅ You get promoted (CEO recognizes excellent performance + healthy balance, promoted to Marketing Manager)'
          ]
        },
        personal: {
          title: 'Personal Balance Wisdom',
          description: 'Personal life: Study/work 16 hours/day (no exercise, no friends, no hobbies, no rest). Month 2: Exhausted, unfulfilled, lonely. Friend: "You have no life. You need balance." Goal: Build life balance, sustainable routine, fulfillment.',
          instructions: [
            '1. Week 1 - Assess Life Balance (Days 1-3, 4 hours): Track one week: Monday-Sunday: Study/work 16 hours/day, 7 days/week. Total: 112 hours/week! Personal breakdown: Exercise: 0 hours (none), Social: 0 hours (declined 10 invitations), Hobbies: 0 hours (none), Rest: 0 hours (no rest days), Sleep: 4 hours/night (exhausted). Assessment: SEVERE IMBALANCE (all work, no life). Results: Physically exhausted (no energy, sick often), Mentally drained (cannot think creatively, burnout), Emotionally unfulfilled (no joy, no love, work only), Socially isolated (no friends time - lonely), Spiritually empty (no meaning, no purpose beyond work). Friend: "You have work. But you do not have LIFE. Life = health + relationships + joy + growth + meaning. You have none of these." You realize: Work consumed everything. Need balance.',
            '2. Week 1 - Define Life Priorities (Days 3-5, 4 hours): Define what matters in LIFE (not just work): (1) HEALTH: Exercise 30 min/day, sleep 8 hours, eat well. (2) RELATIONSHIPS: Friends 1 dinner/week, family 1 call/week, partner time 1 hour/day. (3) JOY: Hobbies 1 hour/day (guitar, cooking, reading - what you enjoy). (4) GROWTH: Learn non-work skills (photography, cooking, languages - personal development). (5) MEANING: Volunteer 2 hours/week (help others, contribute, purpose). (6) REST: 1 full rest day/week (Saturday - zero work, full recovery). Priorities defined: Health, relationships, joy, growth, meaning, rest (not just work). These are EQUALLY IMPORTANT as work (not less important). Work provides money, career. Life provides health, love, joy, meaning. Need BOTH.',
            '3. Week 1-2 - Set Life Boundaries (Days 5-14, 8 hours): SET BOUNDARIES: (1) WORK/STUDY: 8 AM - 6 PM (10 hours, sufficient). At 6 PM: STOP (no matter what - even if not "done"). (2) PERSONAL: 6-10 PM (4 hours: 6:30-7 exercise, 7-8 dinner, 8-9 hobbies, 9-10 relaxation/social). Protected, non-negotiable. (3) SLEEP: 10 PM - 6 AM (8 hours, non-negotiable. Was 4 hours - now 8!). (4) WEEKEND: Saturday: ZERO work (sleep in, hobbies, friends, nature, volunteer - full life day). Sunday: 2 hours work max (rest of day personal). (5) DIGITAL: No work/study after 8 PM (protect evening), No devices in bedroom (protect sleep). Boundaries set. Schedule rest: Exercise 6:30 PM daily (blocked), Hobbies 8 PM (blocked), Friends Friday 7 PM (blocked), Saturday full rest (blocked). Week 2: Attended exercise 5 days, hobbies 6 days, Friday dinner, Saturday full rest (first time in months!). Feel: More energized (sleep 8 hours!), Happier (have hobbies, friends!), Fulfilled (work AND life!).',
            '4. Week 3-4 - Build Life Habits (Days 15-30, 20 hours): Build sustainable life habits: PHYSICAL: Exercise 30 min/day (morning jog before work - energy boost, stress relief), Healthy eating (cook dinner 7-8 PM - nutrition, enjoyment, mindful activity), Sleep 8 hours (10 PM-6 AM - recovery, focus, health). SOCIAL: Friday dinner with friends (every week - connection, laughter, belonging), Family call Sunday (stay connected, support), Partner time daily (8-9 PM - talk, watch show, connect). JOY: Hobbies daily (8-9 PM: Monday guitar, Tuesday cooking, Wednesday reading, Thursday photography, Friday social - diverse joy sources). GROWTH: Saturday morning: Learn new skill (online course: photography 2 hours - personal development). MEANING: Sunday morning: Volunteer (2 hours teaching kids - contribution, purpose). REST: Saturday afternoon (3 hours nap, walk, nature - full recovery). After 2 weeks: Have FULL LIFE (not just work). Work 10 hours/day (sufficient, focused). Life 8 hours/day (health, relationships, joy, growth, meaning, rest). Balanced. Fulfilled.',
            '5. Month 2 - Maintain Balance During Busy Period (Days 31-60, ongoing): Busy month (exams + work project both). Temptation: Abandon balance ("Too busy for life!"). RESIST: MAINTAIN BALANCE (reduce each area slightly, not eliminate): Work/study: 11 hours/day (increased from 10, but not 16!), Exercise: 20 min/day (reduced from 30, but not zero!), Social: Friday dinner only (reduced from Friday + other, but not zero!), Hobbies: 30 min/day (reduced from 1 hour, but not zero!), Sleep: 7 hours (reduced from 8, but not 4!), Saturday: Half rest (morning work 4 hours, afternoon rest 6 hours - compromised, not abandoned). Result: Survived busy month! Work/exams done (sufficient hours), Health maintained (some exercise, some sleep), Relationships maintained (Friday dinners, partner time), No burnout (kept some rest). Learned: Balance is flexible (reduce during busy periods, but do not eliminate). Even 50% balance > 0% balance (20 min exercise > 0 min, half Saturday rest > zero rest).',
            '6. Month 3 - Review Transformation (Days 61-90, 6 hours): Month 3 results: BEFORE (no balance): Work 16 hours/day, 0 personal, exhausted, unfulfilled, lonely, GPA/work performance declining, relationship crisis. AFTER (with balance): Work 10 hours/day, 4 hours personal, energized, fulfilled, connected, performance improving, relationships healed. Specific improvements: Work/study performance: Better (10 hours focused > 16 hours exhausted - GPA 7.8 vs 7.0, work quality excellent). Health: Transformed (exercise 5 days, sleep 8 hours, lost weight, more energy, feel great). Relationships: Restored (Friday dinners every week, partner happy, family connected - love, belonging). Joy: Returned (hobbies daily - guitar, cooking, photography - fulfillment, happiness, passion). Meaning: Found (volunteer teaching kids - purpose, contribution). Fulfillment: High (have work AND life - complete, balanced, happy). Friend: "You transformed! You work less but achieve more. You have life now!" Balance transformed life.',
            '7. Month 4 - Share and Help (Days 91-100, 6 hours): Share on social media: "How I Transformed from Burned Out (16 hours/day work, no life) to Balanced (10 hours work, 4 hours life, fulfilled)." Post: (1) Before (16 hours work, exhausted, unfulfilled, lonely), (2) After (10 hours work, 4 hours life, energized, fulfilled, connected), (3) Boundaries (work 8-6, personal 6-10 PM, Saturday rest), (4) Scheduled rest (exercise, hobbies, friends - blocked on calendar), (5) Results (better performance, better health, better relationships, better life). Post goes viral (5K likes, 200 shares). 100 people message: "I needed this! I am working 16 hours/day too. I will try balance!" You helped 100 people discover: Balance is not luxury, balance is essential. Work less, achieve more. Have work AND life. You mastered work-life balance. Changed your life. Helped 100 people. Balance = life transformation.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Working 16 hours/day: "I will work hard now, balance later." Result: Burnout now, no "later" (quit, health crisis). Solution: Balance NOW (work 10 hours, sustainable).',
            '• Guilt about rest: Saturday rest → guilt → force work (achieve nothing). Result: Wasted rest, still exhausted. Solution: Schedule rest (Saturday blocked - supposed to rest, no guilt).',
            '• Flexible personal time: "I will exercise when I have time" (never have time). Result: No exercise, no life. Solution: Schedule personal time (6:30 PM exercise - blocked, protected).',
            '• Abandoning balance during busy periods: Exams → abandon all balance (16 hours study). Result: Burn out during exams (worst time). Solution: Reduce balance (11 hours study, 20 min exercise - maintain some balance).',
            '• Not protecting boundaries: Work email 10 PM → reply immediately. Result: Work invades life, no rest. Solution: Digital boundaries (no emails after 8 PM, turn off notifications).'
          ],
          successCriteria: [
            '✅ You assess life imbalance (16 hours/day work, 0 personal, exhausted, unfulfilled, lonely)',
            '✅ You define life priorities (health, relationships, joy, growth, meaning, rest - equally important as work)',
            '✅ You set life boundaries (work 8-6, personal 6-10 PM, sleep 8 hours, Saturday zero work)',
            '✅ You schedule rest and life (exercise, hobbies, friends, family, volunteer - blocked on calendar)',
            '✅ You maintain some balance during busy month (11 hours work, 20 min exercise, half Saturday rest - flexible but not abandoned)',
            '✅ You transform life (better performance, better health, restored relationships, returned joy, found meaning)',
            '✅ You share transformation (social media post viral, help 100 people)',
            '✅ You achieve fulfillment (have work AND life - balanced, happy, complete)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '⚖️ Set Clear Work-Life Boundaries: You define when work ENDS (not just when it starts). Example: Work 9 AM-6 PM (at 6 PM work ENDS - close laptop, no emails, no work). Personal 6-10 PM (exercise, hobbies, relationships - non-negotiable). Weekend: Saturday zero work (full rest). You understand: Boundaries protect personal time from work invasion, force focus during work hours (9 hours finite - work efficiently), enable rest and recovery (personal time for health, relationships, joy). With boundaries: Work time is productive (focused, energized), personal time is protected (4 hours/day for life), sustainable performance (no burnout). You maintain boundaries even when work urgent (say no to Saturday work, protect 6 PM boundary - priorities clear).',
        '📅 Schedule Rest Like Work: You schedule rest (blocked on calendar, non-negotiable) not "when I have time" (never happens). Example: Exercise 6:30 PM (blocked on calendar like work meeting), Friday dinner with friends (blocked, do not cancel), Saturday rest day (blocked, zero work). When work conflicts with scheduled rest: "Sorry, I have commitment 6:30 PM. Can we do 3 PM instead?" You protect scheduled rest. You understand: Scheduling rest guarantees it happens (not optional, not forgotten), eliminates guilt (rest is scheduled - supposed to happen), gives rest equal status to work (both important, both protected). Result: You actually rest (not just plan to rest), guilt-free (scheduled = supposed to), sustainable (consistent rest = no burnout).',
        '🛡️ Learn to Say No: You say no to protect energy and priorities. Example: Manager: "Work Saturday?" You: "I have commitment Saturday (rest day). Can we finish by Friday?" Colleague: "Help my project (8 hours)?" You: "I am at capacity. Can help 1 hour only." You understand: Cannot do everything (finite time, finite energy), saying no to non-essential = saying yes to priorities (rest, health, relationships), saying no is not rude (polite, professional, offer alternatives), saying no enables quality (do few things well > many things poorly). Result: Manageable commitments (not overcommitted), protected priorities (rest, health, relationships secure), sustainable performance (can maintain long-term).',
        '🎯 Prioritize What Matters: You distinguish important vs unimportant. Important (urgent + important): Work deadlines, health, relationship conflicts (do first). Important (not urgent): Exercise, relationship time, rest (schedule, protect). Unimportant: Random meetings, colleague favors, email checking 20×/day (say no, delegate, minimize). You understand: Important things (health, relationships, rest) deserve scheduled time (not "when I have time"). Unimportant things deserve no time (say no, eliminate). Result: Time for what matters (health 1 hour/day, relationships 2 hours/day, rest 1 day/week), no time wasted (no random meetings, no excessive favors, check emails 3×/day not 20×). Better work-life balance (priorities aligned).',
        '⚖️ Flexible Long-Term Balance: You achieve balance weekly/monthly (not rigid daily 50-50). Example: Weekly balance (M-F more work 45 hours, weekends more personal 20 hours). Busy weeks (deadline week: 54 hours work), light weeks (post-deadline: 35 hours work). You understand: Balance is not equal time daily (rigid, impractical), balance is right priorities at right time (flexible, adaptive), balance is long-term (over weeks/months, both work and life get adequate time). Some days need more work (deadline day: 10 hours), some need more personal (friend crisis: 5 hours support). Over time, both get time. Result: Sustainable balance (flexible when needed, not rigid), work gets done (deadlines met, quality high), life gets lived (health, relationships, joy - maintained).'
      ],
      improvements: [
        '📚 Study Work-Life Balance Research: You know basics (boundaries, schedule rest, say no). Good. But study RESEARCH: (1) "The 4-Hour Workweek" by Tim Ferriss (learn efficiency, automation, lifestyle design), (2) "Essentialism" by Greg McKeown (learn to do less but better - eliminate non-essential), (3) "Rest: Why You Get More Done When You Work Less" by Alex Soojung-Kim Pang (learn science of rest, deliberate rest practices), (4) Work-life balance research (studies showing: 40-50 hours/week optimal, beyond 50 hours diminishing returns, rest improves creativity and problem-solving). Read 4 books (40 hours over 2 months). Apply: Eliminate non-essential (essentialism), practice deliberate rest (not just collapse), design lifestyle (not just work). Deep understanding enables: Better boundaries (know optimal work hours: 40-50, not 90), Better rest practices (active rest: exercise, hobbies > passive rest: TV), Lifestyle design (build life you want, not default to overwork).',
        '🛠️ Build Complete Life (Not Just Work): You have work. Good. But build COMPLETE LIFE (8 dimensions): (1) CAREER (work/study - achievement, income, growth), (2) HEALTH (exercise, nutrition, sleep - energy, vitality), (3) RELATIONSHIPS (partner, friends, family - love, connection, belonging), (4) PERSONAL GROWTH (learn new skills, read, travel - development, experiences), (5) FUN/JOY (hobbies, recreation, play - happiness, passion), (6) ENVIRONMENT (home, workspace, city - comfort, beauty), (7) FINANCES (manage money, invest, save - security, freedom), (8) CONTRIBUTION (volunteer, help others, make impact - meaning, purpose). You currently have: Career (work 16 hours). Missing: 7 other dimensions. Build all 8: Career (10 hours/day work - sufficient), Health (1 hour/day exercise, sleep 8 hours), Relationships (2 hours/day partner/friends/family), Growth (Saturday morning 2 hours learn new skill), Joy (1 hour/day hobbies), Environment (Sunday organize home), Finances (Sunday 1 hour budget, invest), Contribution (Sunday 2 hours volunteer). Result: COMPLETE LIFE (all 8 dimensions, not just 1). Fulfillment, happiness, balance. In B.Com, build all 8 dimensions. Career alone = incomplete, unfulfilled. All 8 dimensions = complete, fulfilled life.',
        '🎯 Practice Saying No to Good Opportunities: You say no to bad things (easy). But struggle to say no to GOOD OPPORTUNITIES (hard). Example: Good opportunity: "Join startup as co-founder (potential ₹1Cr, but requires 80 hours/week)." Tempting! But: 80 hours/week = no life, burnout guaranteed, relationships destroyed, health damaged. SAY NO: "This is exciting opportunity. But I am committed to work-life balance (40-50 hours/week max). 80 hours/week would damage my health, relationships, well-being. I have to decline." Another good opportunity: "Prestigious MBA program (but requires quitting job, full-time 2 years, ₹20L fees, high stress)." Evaluate against priorities: Career growth (yes - MBA helps), but Health/relationships (no - 2 years high stress, no balance). SAY NO or POSTPONE: "I will apply in 2 years (after building financial cushion, life stability)." Saying no to good opportunities is HARD (FOMO - fear of missing out). But necessary (protect priorities: health, relationships, balance > every opportunity). In B.Com, not every good opportunity is right for YOU. Evaluate against priorities (does this align with health, relationships, balance?). Say no to good opportunities that damage priorities. Right opportunities will come that ALIGN with balanced life.',
        '📊 Track Work-Life Balance Metrics: You achieve balance. Good. But TRACK (ensure balance is maintained): Weekly tracking: (1) WORK HOURS: Target 45 hours/week. Track actual (Week 1: 47 hours, Week 2: 43 hours, Week 3: 52 hours - over target! Adjust.). (2) EXERCISE: Target 5 days/week. Track actual (Week 1: 5 days ✓, Week 2: 3 days ✗ - missed 2, recommit). (3) SOCIAL: Target 1 Friday dinner/week. Track actual (Week 1: Yes ✓, Week 2: Skipped ✗ - reschedule). (4) REST: Target 1 full rest day/week (Saturday). Track actual (Week 1: Yes ✓, Week 2: Worked 3 hours ✗ - protect better). (5) SLEEP: Target 8 hours/night. Track actual (Week 1: 7.5 hours average, Week 2: 7 hours - need improvement). Monthly review: What is slipping? (Week 3: work hours increased to 52, exercise dropped to 3 days). Adjust: Next week (reduce work to 45, increase exercise to 5 days). Tracking enables: Maintain balance (spot when slipping, correct quickly), Accountability (have targets, measure against targets), Continuous improvement (optimize balance over time). In B.Com, track balance metrics. What gets measured gets managed. Balance without tracking = slowly slip back to imbalance. Balance with tracking = maintain long-term.',
        '🤝 Help Others Achieve Balance: You achieved balance. Now help others. WAYS TO HELP: (1) MODEL BALANCE: Leave work at 6 PM (even when colleagues stay until 9 PM - model boundaries). Decline Saturday work (model saying no). Maintain health (model exercise, sleep - show it is possible). (2) SHARE STORY: Tell colleagues "I improved performance by working LESS (13 hours → 9 hours). Balance improved my work quality, health, relationships." Inspire them. (3) SUPPORT COLLEAGUES: When colleague working 12 hours/day → share: "I used to work 13 hours, burned out. Try boundaries (work 9-6), schedule rest. It improved my performance!" (4) TEACH WORKSHOP: "Work-Life Balance for Professionals" (2 hours, teach: boundaries, schedule rest, say no, prioritize). Run for team (20 people). (5) CREATE BALANCE CULTURE: Team norm: No emails after 8 PM, No Saturday work (unless emergency), Respect boundaries (do not schedule meetings outside 9-6). Helping others: Changes team culture (from overwork to balance), Prevents colleagues from burnout (they learn from your example), Creates positive impact (help many people improve well-being, performance). In B.Com, be balance ambassador. Model it. Share it. Help others. Build balance culture (not hustle culture).'
      ],
      nextSteps: [
        '📚 Read Work-Life Balance Books: Read: (1) "The 4-Hour Workweek" by Tim Ferriss (learn efficiency, automation, lifestyle design - work smarter, not harder), (2) "Essentialism" by Greg McKeown (learn to focus on essential, eliminate non-essential - do less, achieve more), (3) "Rest" by Alex Soojung-Kim Pang (learn science of rest, deliberate rest practices - rest is work, not opposite of work), (4) "Deep Work" by Cal Newport (learn focused work, work 4 hours focused > 8 hours distracted). Total: 4 books, 40 hours over 2 months. Apply: Eliminate non-essential (say no to 80% of requests, focus on 20% that matter), practice deliberate rest (active rest: exercise, hobbies, socializing > passive rest: TV, scrolling), work deeply (4-6 hours focused, then rest - not 12 hours distracted). Result: Work less hours (40-45 hours/week), achieve more (better quality, better results), live better life (more time for health, relationships, joy). Books provide: Research-backed strategies, inspiration, practical techniques. Invest 40 hours. Transform work-life balance.',
        '🧠 Design Your Ideal Week: You react to demands (work expands, life shrinks). Instead, DESIGN ideal week proactively. IDEAL WEEK TEMPLATE: Monday-Friday: 7-8 AM exercise, 8 AM-12 PM deep work (focused, no meetings), 12-1 PM lunch break, 1-3 PM meetings/collaboration, 3-6 PM project work, 6-10 PM personal (dinner, hobbies, relationships). Saturday: Sleep in, hobbies, friends, volunteer, rest (zero work). Sunday: Family time, light work 2 hours, rest. Weekly totals: Work 45 hours, Exercise 5 hours, Social 10 hours, Hobbies 7 hours, Rest 1 full day. Design on paper. Implement for 1 month. Adjust based on reality. After 1 month: You have template (ideal week that works for YOU). Use every week. Adjust when needed (busy week: 50 hours work, light week: 40 hours work). Ideal week template ensures: Balanced time allocation (work gets time, life gets time), Sustainable routine (can maintain long-term), Proactive not reactive (you design life, not let life happen to you). In B.Com, design your ideal week. Build life intentionally (not accidentally). Your ideal week = your ideal life (repeated 52 times).',
        '📊 Build Work-Life Balance Dashboard: Track balance visually. CREATE DASHBOARD (Google Sheets): (1) WORK HOURS (target 45, track actual weekly, visualize trend line), (2) EXERCISE (target 5 days/week, track actual, calculate percentage), (3) SOCIAL (target 1 Friday dinner/week, track attendance), (4) HOBBIES (target 7 hours/week, track actual), (5) SLEEP (target 8 hours/night, track average), (6) BALANCE SCORE (calculate: 100 = perfect balance, 50 = moderate imbalance, 0 = severe imbalance). Update weekly (5 minutes). Review monthly (trends, adjustments). Dashboard shows: Are you maintaining balance? (green if on track, red if slipping). Where is balance slipping? (work hours increased? exercise dropped?). What to adjust? (Week 3: work hours 52, exercise 3 days - reduce work, increase exercise). Dashboard enables: Visual accountability (see balance score), Early warning (spot slipping before crisis), Data-driven adjustments (adjust based on metrics). In B.Com, measure work-life balance. What gets measured gets managed. Dashboard = maintain balance long-term.',
        '🎓 Teach Work-Life Balance: You mastered balance. Now teach others. CREATE COURSE: "Work-Life Balance for B.Com Students" (3 hours course, ₹500/person). Content: (1) Module 1: Why balance matters (performance, health, relationships, fulfillment), (2) Module 2: Set boundaries (work hours, personal hours, weekend rest, digital), (3) Module 3: Schedule rest (block on calendar, protect like work meetings), (4) Module 4: Say no (protect energy, prevent overwhelm, smart prioritization), (5) Module 5: Prioritize (Eisenhower matrix, focus on important), (6) Module 6: Flexible balance (weekly/seasonal, not rigid daily 50-50). Run for 50 students = ₹25K revenue. Help 50 students avoid burnout, achieve sustainable performance, live fulfilled lives. Build reputation as balance expert. Teaching reinforces your learning (teach = best way to learn). Create impact (help many people). Feel fulfilled (making difference). In B.Com, teach balance. Help classmates, colleagues. Reduce hustle culture. Build balance culture.',
        '💼 Build Long-Term Sustainable Career: You achieve short-term balance (1 month). Good. But build LONG-TERM SUSTAINABLE CAREER (10+ years). Long-term sustainability requires: (1) CONSISTENT BOUNDARIES (work 9-6 every day for 10 years - not 13 hours for 3 months then burn out, quit, repeat), (2) REGULAR REST (Saturday rest every week for 10 years - consistent recovery, prevent burnout), (3) HEALTH PRIORITY (exercise daily for 10 years - maintain energy, avoid health crisis at 40), (4) RELATIONSHIP INVESTMENT (date night every week for 10 years - maintain love, avoid divorce), (5) CONTINUOUS LEARNING (grow skills, stay relevant - career longevity), (6) FINANCIAL CUSHION (save money - freedom to say no to bad jobs, toxic environments). Long-term thinking: "Can I maintain this routine for 10 years?" If no (working 13 hours/day - cannot maintain 10 years), change it (work 9 hours - can maintain 10 years). If yes (boundaries, rest, health, relationships - can maintain 10 years), continue it. In B.Com, think long-term (not just survive next 3 months). Build sustainable career (can maintain 10+ years). Boundaries + Rest + Health + Relationships = sustainable high performance long-term. Overwork + No rest + No health + No relationships = burnout, quit, restart. Choose sustainable.'
      ]
    },
    badge: { name: 'Balance Keeper', emoji: '⚖️', description: 'Master of work-life balance' },
    shareMessage: 'Just mastered work-life balance! ⚖️ #WorkLifeBalance #Wellness'
  },
  {
    id: 'mental-health-awareness',
    title: 'Mental Health Awareness',
    emoji: '🧠',
    context: 'personal' as const,
    discover: {
      scenario: "Friend Rohan: Was cheerful, now withdrawn. Skips classes, quit cricket, GPA 8.0→6.5. In bed 3 days, dark room. Says 'Everything's pointless. I think about not being here.' Stigma: 'Counseling = crazy.' You convince him. College counselor = free therapy. 3 months later: Back, smiling, alive.",
      problemExplanation: [
        "Stigma kills: 'Depression = weak' 'Counseling = crazy'. Rohan suffered 3 months alone. Stigma delays help, worsens condition",
        "Missed warning signs: Withdrawal, sadness, sleep changes, quit hobbies, grades drop. Noticed Month 3 (crisis), not Month 1 (early)",
        "Don't know resources: College counseling? Free? Confidential? Crisis hotlines? Therapy costs? Didn't know until Googled in crisis",
        "Wrong support: 'Just be positive!' 'Others have it worse!' = toxic positivity. Rohan felt judged, withdrew more"
      ],
      solutionApproach: [
        "Break stigma: Mental health = physical health. Depression = medical condition (not weakness). Therapy = smart (not crazy). Talk openly",
        "Learn warning signs: Withdrawal, persistent sadness, sleep/appetite changes, lost interest, suicidal thoughts. Notice early = help early",
        "Know resources NOW: College counseling (free, confidential), crisis hotlines (24/7), therapy (₹1-3K/session), support groups, apps",
        "Support right: Listen without judgment. Validate feelings. Encourage counseling. Stay connected. Not: 'Just be positive' or 'Others worse'"
      ]
    },
    video: {
      title: 'Break the Silence: Mental Health Awareness for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY STIGMA KILLS

"Your friend Rohan: Month 1: Cheerful, social, active. Month 2: Withdrawn, sad, quit cricket, grades dropping. Month 3: In bed, dark room, has not showered in 3 days. Rohan: 'I cannot get out of bed. Everything feels pointless. I think about... not being here anymore.' Suicidal thoughts. You: 'Rohan, you need help!' Rohan: 'No! People will think I am crazy. I will handle alone.' STIGMA prevented help for 3 months. Depression worsened. Almost died. By the end of this video, you will master mental health awareness. Recognize signs. Break stigma. Save lives. Let us start."

[0:45-2:15] STEP 1: BREAK STIGMA (Mental Health = Physical Health)

"Rohan: 'Depression = weakness.'

NO. Depression is MEDICAL CONDITION.

Like diabetes, hypertension. Brain chemistry imbalance.

Not character flaw. Not weakness.

If Rohan had BROKEN LEG:
- Would see doctor (no shame)
- Would get treatment (cast, rest)
- Friends would support ('Get well soon!')

Rohan has DEPRESSION:
- Same: Medical condition (needs professional treatment)
- Same: Not his fault (brain chemistry, not choice)
- Same: Treatable (therapy works, 80% improve)

But STIGMA says:
- 'Seeing counselor = crazy'
- 'Should handle alone'
- 'Weakness'

TRUTH:
- Seeing counselor = smart (taking care of mental health)
- Depression needs professional help (cannot push through)
- Seeking help = strength

Mental health = physical health.

Depression/anxiety = medical conditions.

Therapy = treatment (not shame).

Break stigma. Normalize help-seeking."

[2:15-3:45] STEP 2: LEARN WARNING SIGNS

"Rohan showed warning signs for 2 months. You did not notice.

WARNING SIGNS (Depression/Anxiety):

EMOTIONAL:
- Persistent sadness (2+ weeks, every day)
- Excessive worry (constant anxiety)
- Hopelessness ('Nothing will get better')
- Loss of interest (quit hobbies, do not enjoy anything)

BEHAVIORAL:
- Withdrawal (avoid friends, stay alone)
- Attendance drop (miss classes frequently)
- Lost motivation (do not care)

PHYSICAL:
- Sleep changes (sleep all day or cannot sleep)
- Appetite changes (not eating or overeating)
- Fatigue (no energy)

ACADEMIC:
- Grades dropping (8.0 → 6.5 GPA)
- Not submitting assignments

ALARMING (SEEK HELP IMMEDIATELY):
- Suicidal thoughts ('I want to die')
- Suicide plan (giving away possessions)
- Talking about death frequently

Early recognition = early help = better outcomes.

Learn warning signs. Notice in yourself and friends."

[3:45-5:15] STEP 3: KNOW RESOURCES

"Rohan: 'Where do I go for help?'

You: 'I do not know.'

LEARN RESOURCES (before crisis):

1. COLLEGE COUNSELING:
   - FREE (included in fees)
   - CONFIDENTIAL (cannot tell anyone)
   - PROFESSIONAL (licensed therapists)
   - Book appointment (website/phone)

2. CRISIS HOTLINES:
   - 24/7 suicide prevention
   - Call when: Suicidal thoughts, immediate crisis
   - [National crisis numbers]

3. THERAPY:
   - Private psychologists/psychiatrists
   - Paid (₹1000-3000/session)
   - Specialized (depression, anxiety, trauma)

4. SUPPORT GROUPS:
   - Peer support (depression, anxiety groups)
   - FREE or low-cost
   - 'I am not alone'

5. APPS:
   - Wysa (AI chatbot + CBT)
   - Calm/Headspace (meditation)
   - Moodfit (mood tracking)

Know resources BEFORE crisis.

When you/friend needs help, you know where to go immediately."

[5:15-6:45] STEP 4: PRACTICE SELF-CARE (Prevention)

"You helped Rohan. Good. But what about YOUR mental health?

You are at HIGH RISK:
- Chronic stress ✓
- Poor sleep (5 hours) ✓
- No exercise ✓
- Social isolation ✓
- No joy ✓

PRACTICE SELF-CARE (Prevention):

DAILY:
1. SLEEP: 8 hours (improves mood, reduces anxiety/depression risk)
2. EXERCISE: 30 min (releases endorphins, natural antidepressants)
3. SOCIAL: Talk to friends (reduces isolation)
4. HOBBIES: 1 hour (joy, meaning)
5. MINDFULNESS: 10 min meditation (reduces anxiety)

BOUNDARIES:
- Study 10 hours max (prevent burnout)
- Protect rest time

Self-care is not selfish.

Self-care is PREVENTION (protect mental health before crisis).

Build mental health reserves."

[6:45-7:45] STEP 5: SUPPORT OTHERS (Listen, Validate, Encourage Help)

"Friend shares: 'I think I am depressed.'

How to support:

DO:
1. LISTEN: 'I am here. Tell me what is going on.' (Listen without judgment)
2. VALIDATE: 'Thank you for sharing. This sounds really hard. Your feelings are valid.'
3. ENCOURAGE HELP: 'Have you considered counselor? College counseling is free. I will go with you if you want.'
4. STAY CONNECTED: 'I am here for you. Can I check in tomorrow?'

DO NOT:
- 'Just think positive!' (toxic positivity)
- 'You are being dramatic!' (judgment)
- 'You have good life, why depressed?' (invalidation)

If friend is SUICIDAL:
- Take seriously (not joking)
- Encourage help immediately (crisis hotline, counselor, hospital)
- Stay with friend (do not leave alone)
- Tell responsible adult

Supporting well: Friend feels heard, supported, encouraged to get help.

You can save lives."

[7:45-8:00] YOUR CHALLENGE (Check In on 3 Friends)

"Here is your action step: This week, check in on 3 friends.

Ask: 'How are you doing? Really?'

Create space for honest answer.

If friend struggling: Listen, validate, encourage help.

Learn: College counseling (how to access?)

Save: Crisis hotline number.

Practice: Self-care daily (sleep, exercise, social, hobbies).

RESULT: Mental health awareness, support network, prevent crisis.

Mental health matters. Break the stigma now."

[End Screen: "Next Video: Physical Wellness - Foundation for Mental Health"]`,
      content: [
        'Break Stigma: Mental health = physical health. Depression/anxiety = medical conditions (not weakness). Seeking help = strength (not shame). Therapy works (80% improve).',
        'Learn Warning Signs: Emotional (persistent sadness, anxiety, hopelessness), behavioral (withdrawal, lost interest), physical (sleep/appetite changes), alarming (suicidal thoughts - seek help immediately)',
        'Know Resources: College counseling (free, confidential), crisis hotlines (24/7, suicide prevention), therapy (paid, specialized), support groups (peer support), apps (Wysa, Calm, Moodfit)',
        'Practice Self-Care: Sleep 8 hours, exercise 30 min, social connection, hobbies, mindfulness, boundaries - prevention (protect mental health before crisis)',
        'Support Others: Listen without judgment, validate feelings, encourage professional help, stay connected (NOT: toxic positivity, judgment, invalidation)',
        'If Suicidal: Take seriously, encourage help immediately (crisis hotline, counselor, hospital), stay with friend, tell responsible adult',
        'B.Com Applications: Exam stress/anxiety, placement pressure, depression in college, peer support, crisis intervention, normalize mental health conversations'
      ]
    },
    quiz: {
      title: 'Mental Health Quiz',
      questions: [
        {
          id: 11,
          question: 'Rohan: "Depression = weakness. Should not need help." Is he right?',
          options: [
            'Yes, mental health issues = weakness',
            'No—mental health = medical condition',
            'Mental health only for some people',
            'Mental health problems not real'
          ],
          correct: 1,
          explanation: 'Depression = medical condition (like diabetes). Brain chemistry imbalance, not weakness. Broken leg = see doctor, no shame. Depression = same, see therapist, no shame. Therapy works, 80% improve. Seeking help = strength. Mental health = physical health. Break stigma!'
        },
        {
          id: 12,
          question: 'Friend: Was cheerful. Now: sad daily, withdraws, sleeps all day, quit cricket, GPA drops 8.0→6.5. What is this?',
          options: [
            'Normal, nothing concerning',
            'Warning signs—needs professional help',
            'Just occasional stress',
            'Just busy with studies'
          ],
          correct: 1,
          explanation: 'Warning signs of depression: persistent sadness (2+ months), withdrawal (avoids friends), sleep changes, lost interest (quit cricket), grades drop. Early recognition = early help. Talk: "You seem different. OK?" Encourage counseling. Recognize early, prevent crisis. If 2+ weeks, seek help!'
        },
        {
          id: 13,
          question: '3 weeks: sad daily, no sleep, lost interest, grades drop, "Everything pointless." What do?',
          options: [
            'Hide it—burden others',
            'Seek help—college counseling, talk to friends',
            'Tough it out alone',
            'Ignore it, goes away'
          ],
          correct: 1,
          explanation: 'Symptoms of depression (2+ weeks = clinical). Get college counseling (FREE, confidential). 80% improve with therapy. Talk to friends/family ("Struggling, need support"). Not burden—they want to help. If suicidal thoughts: Call crisis hotline NOW. Seeking help = strength. Depression treatable. Get help, feel better!'
        },
        {
          id: 14,
          question: 'Friend: "Depressed." Support how? (A) "Think positive! Smile!" (B) "Feelings valid. Counselor? Here for you."',
          options: [
            'A: Fix problems, give advice',
            'B: Listen, validate, encourage help',
            'A: Avoid topic',
            'A: Minimize—everyone sad'
          ],
          correct: 1,
          explanation: 'Option A (toxic positivity) = friend feels worse, withdraws. Option B = friend feels heard, supported, hopeful. Thank them for sharing, validate ("This is hard"), normalize feelings, encourage counselor (offer to go), stay connected. Listen without judgment, not fix. Support = validate + encourage help!'
        },
        {
          id: 15,
          question: 'You help friend. But YOUR health: 5hr sleep, no exercise, isolated, study 14hr/day. What is self-care?',
          options: [
            'Selfish',
            'Sleep, exercise, connect, boundaries, hobbies',
            'Avoiding responsibility',
            'Only when stressed'
          ],
          correct: 1,
          explanation: 'You are at HIGH RISK (poor sleep, no exercise, isolated, overwork). Self-care = prevention, not selfish. Daily: 8hr sleep, 30min exercise, talk to friends, hobbies, study max 10hr. Mental health bank: self-care = deposits (build reserves), stress = withdrawals. Keep deposits bigger. Cannot pour from empty cup. Self-care = foundation!'
        }
      ]
    },
    challenge: {
      title: 'Mental Health Awareness Challenge',
      description: 'Break the silence - recognize, support, prevent',
      contexts: {
        academic: {
          title: 'Academic Mental Health Excellence',
          description: 'B.Com student: Friend shows warning signs (withdrawn, sad, grades dropping). You do not know: Is this depression? Where to get help? How to support? Goal: Learn mental health awareness, recognize signs, know resources, support friend, reduce stigma.',
          instructions: [
            '1. Week 1 - Recognize Warning Signs (Days 1-3, 6 hours): Your friend Rohan: Month 1: Normally cheerful, social (plays cricket, hangs out, laughs). Month 2: Changes: Withdrawn (skips classes, avoids friends, stays in room), Sad (always down, no smile, no laughter), Sleep changes (sleeps until 2 PM or cannot sleep at night), Lost interest (quit cricket team - used to love it, stopped gaming, does not care about studies), Grades dropping (was 8.0 GPA, now 6.5 - stopped attending, stopped submitting assignments). You notice (Month 2 end): "Rohan seems different." Research warning signs online. Find: DEPRESSION WARNING SIGNS - persistent sadness, withdrawal, sleep changes, lost interest, grades dropping, fatigue. Rohan has ALL these signs! Realize: Rohan might have depression (medical condition, needs help). Not just "tired" or "stressed" (more serious). You need to: Talk to Rohan (check in), Encourage professional help (college counseling), Provide support (listen, validate).',
            '2. Week 1 - Learn Mental Health Resources (Days 3-5, 4 hours): You need to help Rohan. But where? RESEARCH RESOURCES: (1) COLLEGE COUNSELING: Visit college counseling center website. Find: FREE (included in fees!), CONFIDENTIAL (counselor cannot tell anyone), PROFESSIONAL (licensed therapists), ACCESSIBLE (book appointment online or walk-in). Services: Individual therapy, group therapy, crisis intervention, referrals. (2) CRISIS HOTLINE: Google "suicide prevention hotline India". Save number: [National crisis number]. 24/7 availability. (3) THERAPY: Research psychologists in city. Costs: ₹1500-3000/session. Locations: 5 therapists within 5km. (4) SUPPORT GROUPS: Find depression support group (meets Saturdays, college campus, free, peer-led). (5) APPS: Download Wysa (AI chatbot + CBT exercises, free), Calm (meditation, ₹500/month). Resources learned. Ready to help Rohan.',
            '3. Week 2 - Support Friend (Days 6-10, 8 hours): Talk to Rohan (Day 6): You: "Rohan, I noticed you seem different lately. You are always sad, you quit cricket, you are alone all the time. I am worried about you. Are you OK?" Rohan: "I am fine." (Deflects). You: "Rohan, I care about you. If you are struggling, I am here. You do not have to go through this alone." Rohan: (Tears). "I... I feel so sad all the time. I cannot get out of bed. I do not enjoy anything. Everything feels pointless." You: LISTEN (without interrupting, without judging, just listen). Rohan shares for 30 minutes. You: VALIDATE: "Thank you for telling me. This sounds really hard. I am sorry you are going through this. Your feelings are valid." ENCOURAGE HELP: "Rohan, these sound like symptoms of depression (medical condition). Have you considered talking to college counselor? They are professionals, free, confidential. They can really help. I will go with you if you want." Rohan: "I do not know... people will think I am crazy." You: "No one will know (confidential). And seeing counselor is smart (taking care of mental health). Depression is medical condition (like diabetes). You need professional help. I am here to support you." Rohan: "OK... I will try." You supported Rohan well (listened, validated, encouraged help, stayed connected).',
            '4. Week 2 - Accompany to Counseling (Days 10-12, 4 hours): Day 10: You accompany Rohan to college counseling center. Rohan: Nervous. You: "I am here. You got this." Rohan meets counselor (45 minutes). Rohan comes out: "Counselor was nice! Not scary. She listened. She said I have depression. She will help." Counselor recommends: Weekly therapy (CBT - cognitive behavioral therapy), Self-care (sleep, exercise, social), Follow-up next week. You: "How do you feel?" Rohan: "Relieved. I thought I was going crazy. But counselor said depression is common (1 in 4 students), treatable (therapy works). I feel hopeful." Week 2: Rohan goes to therapy (Week 1 session). You: Check in ("How was therapy?"). Rohan: "Good! Counselor is helping me identify negative thoughts, challenge them. I feel slightly better." You: STAY CONNECTED (do not abandon after counseling - ongoing support needed). Invite Rohan: Lunch (Monday), Cricket practice (Wednesday - gently encourage rejoining, not pressure), Study group (Friday). Rohan: Accepts lunch and study group (small steps). You provided: Support before counseling (encouraged help), Support during (accompanied), Support after (stayed connected, invited to activities). Comprehensive support.',
            '5. Week 3-8 - Ongoing Support (Days 15-56, 20 hours): Rohan continues therapy (weekly sessions for 6 weeks). You: Check in 2-3 times/week ("How are you? How is therapy?"). Invite to activities (lunch, study group, cricket - gently, not pressure). Progress: Week 3: Rohan attends classes 2 days (improvement from 0!). Week 4: Attends 4 days, submits 1 assignment. Week 5: Rejoins cricket practice (was afraid teammates would judge - they welcomed him back!). Week 6: Smiling occasionally (first smile in 3 months!). Week 8: Much better! Attending all classes, submitted all assignments, playing cricket, laughing with friends. Rohan: "Therapy is working. Counselor taught me coping strategies (CBT, mindfulness, self-care). I feel like myself again. Thank you for noticing, for helping me get help, for staying with me. You saved my life." You: "I am so proud of you for getting help. That took courage." Recovery takes time (8 weeks, not overnight). Your ongoing support helped (Rohan did not feel alone, had friend throughout recovery).',
            '6. Month 3 - Learn and Practice Self-Care (Days 60-90, 20 hours): You helped Rohan. But protect YOUR mental health too. Practice SELF-CARE: (1) SLEEP: 8 hours/night (was 5 hours - now 8 hours). Better mood, less anxiety. (2) EXERCISE: 30 min/day (running, reduces stress, improves mood). (3) SOCIAL: Friday dinners with friends (reduces isolation), Daily talks (connection). (4) HOBBIES: Guitar 1 hour/day (joy, passion, identity beyond studying). (5) BOUNDARIES: Study 10 hours max (prevent burnout). (6) MINDFULNESS: 10 min/day meditation (reduces anxiety). After 1 month self-care: Mood improved (less anxious, more positive), Energy improved (sleep better, more vitality), Stress reduced (manageable 4/10, was 8/10), Mental health protected (no depression symptoms, resilient). Self-care worked! Prevention is easier than cure.',
            '7. Month 4 - Reduce Stigma and Help Others (Days 91-120, 10 hours): Share Rohan story (with permission): Social media post: "My Friend Had Depression. Here is How I Helped (and what I learned)." Post: (1) Warning signs (withdrawal, sadness, grades dropping - recognize early), (2) How to support (listen, validate, encourage counseling, stay connected), (3) Resources (college counseling free, confidential), (4) Break stigma (depression = medical condition, seeking help = strength), (5) Practice self-care (protect your mental health). Post goes viral (3K likes, 500 shares). 100 students message: "I am struggling too. I did not know college counseling is free! I will go." 50 students message: "My friend is struggling. Now I know how to help. Thank you!" Impact: 100 students got help (because you shared), 50 friends got supported (because you taught how). You: Started mental health awareness club (30 members, weekly meetings, normalize conversations, peer support, invite counselors to speak). College: Reduced stigma (more students seeking help, mental health conversations normalized). You mastered mental health awareness. Helped Rohan. Helped 150 students. Reduced stigma. You can save lives.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Not recognizing warning signs: "Rohan is just tired" (miss depression signs for 3 months). Result: Crisis (suicidal thoughts). Solution: Learn warning signs, recognize early (Month 1).',
            '• Toxic positivity: "Just think positive! Smile!" Result: Friend feels judged, withdraws. Solution: Validate feelings ("This is hard. Your feelings are valid").',
            '• Not knowing resources: "I do not know where to get help." Result: Delay in treatment. Solution: Learn resources (college counseling free, confidential).',
            '• Abandoning after counseling: Help friend once, then stop checking in. Result: Friend feels alone during recovery. Solution: Ongoing support (check in 2-3 times/week).',
            '• Neglecting your mental health: Help others, ignore your own mental health. Result: You burn out, cannot help anyone. Solution: Self-care daily (sleep, exercise, boundaries).'
          ],
          successCriteria: [
            '✅ You recognize warning signs (Rohan: withdrawal, sadness, sleep changes, lost interest, grades dropping - depression signs)',
            '✅ You learn resources (college counseling free/confidential, crisis hotlines, therapy, support groups, apps)',
            '✅ You support friend well (listen, validate, encourage counseling, accompany, stay connected)',
            '✅ Friend recovers (Rohan: therapy 8 weeks, much better, back to classes/cricket, smiling)',
            '✅ You practice self-care (sleep 8 hours, exercise 30 min, social, hobbies, boundaries - protect YOUR mental health)',
            '✅ You reduce stigma (social media post viral, 150 students helped)',
            '✅ You build support culture (start mental health awareness club, 30 members)',
            '✅ Professor/counselor praises (recognize you saved friend life, helped many students)'
          ]
        },
        professional: {
          title: 'Professional Mental Health Mastery',
          description: 'You are Team Lead at startup. Colleague shows warning signs (withdrawn, exhausted, making mistakes, talks about quitting). You do not know: Mental health resources? How to support? Goal: Learn workplace mental health awareness, support colleague, build mentally healthy team culture.',
          instructions: [
            '1. Week 1 - Notice Warning Signs at Work (Days 1-3, 4 hours): Your colleague Sara: Month 1: High performer (meets deadlines, positive, collaborative). Month 2: Changes: Withdrawn (skips team meetings, eats lunch alone, does not talk), Exhausted (dark circles, yawning, looks tired), Performance dropping (missing deadlines, making mistakes, work quality poor), Irritable (short temper, snaps at teammates), Talks about quitting ("I cannot do this anymore. I want to quit."). You notice: "Sara seems different." Research: BURNOUT + DEPRESSION warning signs - exhaustion, withdrawal, performance drop, irritability, thoughts of quitting. Sara shows all! Realize: Sara might be experiencing burnout/depression (work-related mental health crisis). Need to: Check in, provide support, know workplace resources.',
            '2. Week 1 - Learn Workplace Resources (Days 3-5, 4 hours): Research company mental health resources: (1) EMPLOYEE ASSISTANCE PROGRAM (EAP): Free confidential counseling (3-6 sessions), 24/7 hotline, work-life resources. You did not know this existed! (2) HR SUPPORT: Talk to HR about mental health accommodations (flexible hours, work from home, reduced workload). (3) HEALTH INSURANCE: Mental health coverage (therapy sessions covered, psychiatry covered). (4) MANAGER SUPPORT: Talk to manager about workload, stress, need support. (5) EXTERNAL RESOURCES: Crisis hotlines, therapy, support groups. Resources learned. Ready to support Sara.',
            '3. Week 2 - Support Colleague (Days 6-12, 10 hours): Day 6: You (Team Lead): "Sara, can we talk? I noticed you seem stressed lately. Are you OK?" Sara: "I am fine." (Deflects). You: "Sara, you are valuable team member. I care about your well-being. If you are struggling, I want to help. This is safe space." Sara: (Tears). "I... I am so overwhelmed. Work is too much. I cannot sleep. I feel like I am failing. I think about quitting every day." You: LISTEN (30 minutes, no interrupting, no judging). VALIDATE: "Thank you for sharing. This sounds incredibly hard. You are not failing. You are experiencing burnout/high stress. Your feelings are valid." PROVIDE RESOURCES: "Have you heard of our EAP (Employee Assistance Program)? Free confidential counseling, 3-6 sessions. They can help with stress, burnout. I can share contact if you want." Sara: "I did not know we have this!" You: "Also, let us talk about workload. You are overwhelmed. We can redistribute tasks, adjust deadlines. Your health > any deadline." SUPPORT PLAN: (1) Sara will: Contact EAP (counseling), (2) You will: Redistribute Sara workload (reduce 50 hours/week to 40 hours), Provide flexible hours (work from home 2 days/week), Check in weekly ("How are you doing?"). Sara: "Thank you. I thought I was alone. I thought I had to quit." You: "You are not alone. We will support you."',
            '4. Week 2-6 - Implement Support Plan (Days 12-42, 20 hours): Week 2: Sara contacts EAP (starts counseling). You: Redistribute tasks (delegate 10 hours/week work to team, Sara works 40 hours now, not 50). Flexible hours (Sara works from home Wednesday/Thursday - reduces commute stress). Week 3: Sara: "Counselor is helping! Learning stress management, coping strategies." You: Check in ("How are you?"). Sara: "Better. Less overwhelmed." Week 4: Sara performance improving (meeting some deadlines, work quality better). Week 5: Sara smiling occasionally (first smile in 2 months!). Week 6: Much better! Sara: "Counseling helped so much. Workload adjustment helped. Flexible hours helped. I feel like I can handle work now. Thank you for noticing, for helping, for not judging." Your support: Recognized signs early (Month 2, not Month 6 crisis), Provided resources (EAP - free counseling), Adjusted workload (reduced 50→40 hours), Stayed supportive (weekly check-ins), No judgment (created safe space). Result: Sara recovered (Month 2 intervention prevented Month 6 crisis/quitting).',
            '5. Month 3 - Build Mentally Healthy Team Culture (Days 60-90, 15 hours): You supported Sara. Now build TEAM CULTURE: (1) NORMALIZE CONVERSATIONS: Team meeting: "Mental health is important. If anyone is struggling, please reach out. We have EAP (free counseling), I am here to talk, we will support you. No judgment." (2) SHARE RESOURCES: Email team: EAP contact, crisis hotlines, mental health apps, therapy options. Everyone knows where to get help. (3) REDUCE WORK STRESS: Team norm: No emails after 8 PM (protect evening), No weekend work (unless emergency), Realistic deadlines (not impossible), Flexible hours (work from home when needed), Manageable workload (40-45 hours, not 60). (4) ENCOURAGE BREAKS: Team takes lunch break together (social, breaks work stress), Encourage vacation (use PTO, rest, recover). (5) MODEL SELF-CARE: You leave at 6 PM (model boundaries), You do not send emails after 8 PM (model digital boundaries), You talk about therapy ("I see therapist for stress management" - normalize help-seeking). Team culture: Mental health is priority (not just productivity), Safe to talk (no judgment), Resources available (everyone knows EAP, hotlines), Support system (teammates support each other). Result: Team mental health improved (2 team members used EAP, 1 took mental health day, all feel supported).',
            '6. Month 4-6 - Sustain and Expand (Days 91-180, 20 hours): Month 4: Sara fully recovered (performing well, happy, engaged). Sara: "I want to help others too. Can I share my story?" You: "Yes! Your story can help many people." Sara shares: Company-wide talk "My Burnout and Recovery" (300 employees attend). Impact: 50 employees contact EAP (Sara story encouraged them), 10 managers adjust team workloads (prevent burnout), Company: Implements mental health training for all managers (recognize signs, support employees). Month 6: CEO: "You created mentally healthy team culture. Team productivity is UP (not down - mental health support improves performance!), Retention improved (Sara stayed, would have quit), Company culture improved (caring, supportive). Promoted to Senior Team Lead." Promotion! Supporting mental health = career success (not just moral good). You: Helped Sara recover, Built mentally healthy culture, Helped 50 employees get support, Got promoted. Mental health awareness = essential leadership skill.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Ignoring warning signs: "Sara is just stressed" (miss depression/burnout signs). Result: Sara quits or crisis. Solution: Recognize signs early, check in.',
            '• Toxic positivity: "Just be positive! Work harder!" Result: Sara feels judged, unsupported. Solution: Validate feelings, provide resources.',
            '• Not knowing resources: Cannot help because do not know where to send Sara. Result: Sara suffers alone. Solution: Learn EAP, therapy, hotlines.',
            '• Not adjusting workload: Provide counseling but keep 50 hours/week work. Result: Burnout continues. Solution: Reduce workload (40 hours), adjust stress.',
            '• Abandoning after counseling: Help Sara once, stop checking in. Result: Sara feels alone during recovery. Solution: Ongoing check-ins (weekly).'
          ],
          successCriteria: [
            '✅ You recognize warning signs (Sara: withdrawn, exhausted, performance drop, irritable, talks of quitting)',
            '✅ You learn workplace resources (EAP free counseling, HR support, health insurance, crisis hotlines)',
            '✅ You support colleague (check in, listen, validate, provide EAP contact, adjust workload)',
            '✅ Colleague recovers (Sara: EAP counseling, workload reduced, fully recovered, performing well)',
            '✅ You build mentally healthy team culture (normalize conversations, share resources, reduce work stress, encourage breaks)',
            '✅ You expand impact (Sara shares story company-wide, 50 employees use EAP, managers trained)',
            '✅ You get promoted (CEO recognizes mentally healthy culture, team productivity up, promoted to Senior Team Lead)',
            '✅ You demonstrate mental health leadership (support, culture-building, stigma reduction)'
          ]
        },
        personal: {
          title: 'Personal Mental Health Wisdom',
          description: 'Personal: You feel anxious about future (exams, job, finances), stressed, sleep problems, worried constantly. Friend: "You might have anxiety. You should see counselor." You: "I am not crazy!" (Stigma). Goal: Overcome stigma, recognize your own mental health needs, seek help, practice self-care.',
          instructions: [
            '1. Week 1 - Recognize Your Own Mental Health Needs (Days 1-3, 4 hours): Self-assessment: How do I feel? (1) EMOTIONAL: Anxious constantly (worry about exams, job search, future), Cannot relax (always tense), Irritable (short temper with friends, family). (2) PHYSICAL: Cannot sleep (mind racing, 2 hours to fall asleep), Fatigue (exhausted despite sleep), Tension (shoulders, jaw, headaches), Heart racing (panic episodes). (3) COGNITIVE: Difficulty concentrating (mind wanders to worries), Catastrophizing (everything will go wrong, worst-case thinking), Cannot make decisions (paralyzed by what-ifs). (4) IMPACT: Grades affected (cannot focus during exams), Relationships affected (irritable with loved ones), Quality of life affected (cannot enjoy anything - always worried). Check symptoms against anxiety checklist: Excessive worry (✓ 3 months), Cannot control worry (✓), Restlessness (✓), Difficulty concentrating (✓), Sleep problems (✓), Tension (✓). Diagnosis: Likely ANXIETY DISORDER (clinical, needs treatment). You realize: This is not normal stress. This is mental health condition. You need help.',
            '2. Week 1 - Overcome Stigma (Days 3-5, 3 hours): You: "But I am not crazy! Seeing counselor is for people with serious problems. I can handle this alone." Friend: "Anxiety is serious problem! It is medical condition (brain + stress). Seeing counselor is smart (like seeing doctor for fever). Not crazy. Not weak. Getting help." You research: "Is anxiety a mental illness?" Find: YES. Anxiety disorders are medical conditions (brain chemistry + stress response). Common (1 in 5 people have anxiety disorder). Treatable (therapy works, 70-80% improve with CBT). Seeing counselor is: Smart (getting professional help), Effective (therapy works better than struggling alone), Common (many people see counselors - you are not alone). Stigma: "Counselor = crazy" BROKEN. Truth: "Counselor = smart health decision" ACCEPTED. You decide: "I will try counseling. My mental health matters."',
            '3. Week 2 - Seek Professional Help (Days 6-10, 6 hours): Day 6: Book college counseling appointment (online, easy, confidential). Day 8: First session (45 minutes). Counselor: "Tell me what brings you here." You: Share anxiety (worry constantly, cannot sleep, panic episodes, affecting life). Counselor: "You have anxiety disorder (generalized anxiety disorder - GAD). Good news: This is very treatable with CBT (cognitive behavioral therapy)." Treatment plan: (1) WEEKLY THERAPY (8 sessions, CBT - identify anxiety thoughts, challenge, reframe), (2) RELAXATION TECHNIQUES (deep breathing, progressive muscle relaxation, mindfulness), (3) SELF-CARE (sleep, exercise, reduce caffeine, social connection), (4) LIFESTYLE CHANGES (boundaries, reduce stressors). You: "How long until I feel better?" Counselor: "Most people notice improvement in 4-6 weeks. Full recovery: 3-6 months." You start therapy. Week 1: Learn anxiety thought patterns ("What if I fail exams?" → "I am prepared. I will do my best."). Practice daily.',
            '4. Week 2-8 - Apply Therapy and Self-Care (Days 10-56, 30 hours): Weekly therapy (8 sessions over 8 weeks). Learn: CBT (challenge catastrophic thoughts), Relaxation (4-7-8 breathing daily, reduces panic), Mindfulness (10 min/day meditation, reduces worry), Exposure (gradually face fears, build confidence). DAILY SELF-CARE: Sleep 8 hours (improves anxiety - was 5 hours), Exercise 30 min (reduces anxiety 40%!), Limit caffeine (was 5 cups/day, now 1 cup - reduces jitteriness), Social connection (talk to friends daily - reduces isolation), Hobbies (guitar, cooking - provides joy, distraction from worry), Boundaries (study 10 hours max, protect rest). Progress: Week 2: Anxiety 8/10. Week 4: Anxiety 6/10 (CBT + self-care working!). Week 6: Anxiety 5/10, sleeping better (fall asleep 30 min, not 2 hours). Week 8: Anxiety 3/10 (manageable!), rarely panic episodes, can concentrate, exams went well! Counselor: "Excellent progress! You learned coping strategies. You practiced self-care. You can manage anxiety now." Therapy worked! Anxiety 8/10 → 3/10 in 8 weeks.',
            '5. Month 3 - Maintain Mental Health (Days 60-90, 15 hours): Therapy ended (8 sessions complete). Maintain mental health: (1) CONTINUE SELF-CARE: Sleep 8 hours, exercise 30 min, social, hobbies, boundaries (daily practice, do not stop after therapy). (2) USE CBT TOOLS: When anxious thoughts appear ("What if...?"), use CBT (challenge thought, reframe realistic). (3) PRACTICE RELAXATION: Daily 4-7-8 breathing (prevents anxiety buildup), weekly meditation. (4) MONITOR: Track anxiety levels (if increases to 6/10 for 2 weeks, schedule therapy booster session). (5) REDUCE STRESSORS: Say no to non-essential stressors, prioritize, protect boundaries. Month 3: Anxiety stable at 3-4/10 (manageable). No panic episodes. Sleep well. Concentrate better. Exams: Performed well (anxiety managed, not overwhelming). Mental health maintained!',
            '6. Month 4 - Share Story and Help Others (Days 91-120, 8 hours): Share on LinkedIn: "How I Overcame Anxiety Through Therapy and Self-Care." Post: (1) My anxiety (worry constantly, panic, cannot sleep), (2) Seeking help (college counseling, overcame stigma), (3) Treatment (CBT therapy 8 weeks, self-care daily), (4) Results (anxiety 8/10 → 3/10, sleep improved, performed well), (5) Learnings (therapy works, self-care essential, seeking help = strength). Post: 2K likes, 100 shares. 80 people message: "I have anxiety too! I did not know therapy works. I will try!" 30 people: "How did you overcome stigma? I want help but ashamed." You reply to all (share: therapy is normal, common, effective; stigma is outdated, break it; mental health matters). Impact: 80 people inspired to seek therapy. You: Helped self (anxiety managed), Helped 80 people (inspired to get help). Mental health advocacy = helping many.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stigma prevents help: "I am not crazy, I should not need counselor." Result: Suffer 6 months unnecessarily. Solution: Overcome stigma (counselor = smart, anxiety = medical condition).',
            '• Not seeking help: "I can handle alone" (anxiety for 6 months untreated). Result: Anxiety worsens, affects life. Solution: Seek help early (college counseling when anxiety persists 1 month).',
            '• Stopping self-care after therapy: Therapy ends, stop exercise, sleep, boundaries. Result: Anxiety returns. Solution: Continue self-care daily (maintenance).',
            '• Not using CBT tools: Learn CBT in therapy, do not practice daily. Result: Tools do not work. Solution: Practice CBT daily (challenge anxious thoughts).',
            '• Isolation: Anxious → withdraw from friends. Result: Isolation worsens anxiety. Solution: Maintain social connection (talk to friends, reduces isolation).'
          ],
          successCriteria: [
            '✅ You recognize your mental health needs (anxiety symptoms: worry, panic, sleep problems - need help)',
            '✅ You overcome stigma (anxiety = medical condition, seeking counselor = smart, not crazy)',
            '✅ You seek help (college counseling, book appointment, start therapy)',
            '✅ You complete therapy (8 sessions CBT, learn coping strategies, practice daily)',
            '✅ You practice self-care (sleep 8 hours, exercise 30 min, social, hobbies, boundaries - reduce anxiety)',
            '✅ You reduce anxiety (from 8/10 to 3/10 in 8 weeks)',
            '✅ You maintain mental health (continue self-care, use CBT tools, monitor, prevent relapse)',
            '✅ You share story (LinkedIn post viral, inspire 80 people to seek therapy for anxiety)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🧠 Recognize Mental Health as Important: You understand: Mental health = physical health. Depression/anxiety = medical conditions (not weakness, not character flaws). Brain chemistry imbalance (serotonin, dopamine - biological, not choice). Treatable with therapy (80% improve with treatment). Seeking help = strength (not weakness, not shame). You break stigma (normalize counseling, normalize therapy, normalize mental health conversations). You recognize: Mental illness is common (1 in 4 people experience mental health issues), Anyone can struggle (students, professionals, anyone - not just "weak people"), Treatment works (therapy, medication, self-care - effective, evidence-based). You prioritize mental health (your own and others). Mental health is not "nice to have." Mental health is ESSENTIAL (affects everything: performance, relationships, quality of life).',
        '🚨 Recognize Warning Signs Early: You learn warning signs (not just "something seems off"). Example: Friend shows: Persistent sadness (2+ weeks), withdrawal (avoids friends), sleep changes (sleeps all day or insomnia), lost interest (quit hobbies), grades/performance dropping, irritability, hopelessness. You recognize: These are depression warning signs (need professional help). You act early (Month 1-2 when signs appear, not Month 6 when crisis). Early recognition enables: Early intervention (encourage counseling early), Easier treatment (mild depression easier to treat than severe), Prevention of crisis (prevent suicidal thoughts, hospitalization). You also know alarming signs: Suicidal thoughts ("I want to die"), Suicide plan (giving away possessions, researching methods), Talking about death frequently. If these appear: Take seriously (not joking), Encourage help IMMEDIATELY (crisis hotline, counselor, hospital), Stay with friend (do not leave alone), Tell responsible adult. You can save lives by recognizing signs early.',
        '🏥 Know Mental Health Resources: You know where to get help (not searching in crisis). Resources: (1) COLLEGE COUNSELING (free, confidential, professional - know how to book: website/walk-in), (2) CRISIS HOTLINES (24/7 suicide prevention - have number saved), (3) THERAPY (psychologists, psychiatrists - know costs ₹1500-3000/session, locations), (4) SUPPORT GROUPS (depression, anxiety groups - know when/where they meet), (5) APPS (Wysa, Calm, Moodfit - downloaded, know how to use), (6) WORKPLACE (EAP employee assistance program - know it exists, how to contact). When you/friend needs help: You know immediately where to go (no time wasted searching, Googling, asking). You can provide resources quickly ("College counseling is free, here is how to book"). Knowledge of resources enables: Fast access to help (crisis? Call hotline immediately), Right resource for right need (mild stress? College counseling. Severe crisis? Hospital.), Confidence to help others (friend struggling? You know what resources to recommend).',
        '💙 Support Others Effectively: When friend struggles, you support well. You: LISTEN (without interrupting, without judging, create safe space for sharing), VALIDATE ("Thank you for sharing. This is hard. Your feelings are valid" - acknowledge their struggle, do not minimize), ENCOURAGE PROFESSIONAL HELP ("Have you considered counselor? I will go with you" - recommend resources, offer support), STAY CONNECTED (check in regularly, invite to activities, show you care - ongoing support, not one-time). You do NOT: Give toxic positivity ("Just smile!"), Judge ("You are being weak"), Invalidate ("You have good life, why sad?"), Try to fix (you are friend, not therapist - encourage professional help). You know limits (provide support, listening, encouragement; leave therapy to professionals). If friend suicidal: Take seriously, encourage crisis hotline/hospital immediately, stay with friend, tell adult. Your support helps: Friend feels heard, validated, supported (reduces isolation), Friend more likely to seek professional help (you encouraged, offered to accompany), Friend recovers better (with support system, not alone).',
        '🛡️ Practice Self-Care as Prevention: You practice self-care DAILY (not just when crisis). Daily self-care: Sleep 8 hours (improves mood, reduces anxiety/depression risk), Exercise 30 min (endorphins - natural antidepressants), Social connection (friends daily - reduces isolation risk factor), Hobbies (joy, meaning, identity beyond work), Boundaries (work/study 10 hours max - prevent burnout), Mindfulness (10 min meditation - reduces rumination, anxiety), Nutrition (regular meals - brain fuel). You understand: Self-care is PREVENTION (build mental health reserves before crisis), Self-care is not selfish (necessary for helping others - cannot pour from empty cup), Self-care is daily practice (not just when stressed - consistent practice builds resilience). Think: Mental health bank account. Self-care = deposits (build reserves). Stress = withdrawals. You keep deposits > withdrawals (prevent bankruptcy/mental health crisis). Result: You maintain good mental health (baseline mood positive, anxiety manageable, no depression), You handle stress better (resilient, bounce back quickly), You prevent crisis (no mental health emergencies, sustainable well-being).'
      ],
      improvements: [
        '📚 Mental Health First Aid Training: You support friends intuitively. Good. But get FORMAL TRAINING: "Mental Health First Aid" certification (8 hours course). Learn: (1) Recognize mental health crises (suicide risk, psychosis, panic attack, trauma - how to help), (2) Provide initial help (ALGEE framework: Assess risk, Listen non-judgmentally, Give reassurance, Encourage professional help, Encourage self-help), (3) Know when to get professional help (what you can handle vs what needs professional), (4) Cultural sensitivity (mental health across cultures, reduce stigma in different communities). Certification: Teaches structured approach (not just intuition), Builds confidence (know you are helping correctly), Recognized credential (can volunteer, teach others). Take course (8 hours online). Practice on 10 friends. Become mental health first aider (can help in crisis, know exactly what to do). In B.Com, get certified. Be resource for community. Save lives.',
        '🛠️ Build Mental Health Advocacy Skills: You help individual friends. Good. But build ADVOCACY SKILLS (help at scale): (1) PUBLIC SPEAKING: Learn to speak about mental health publicly (overcome fear, tell your story, inspire others). Practice: Talk at college event (50 people), Company talk (300 people), TEDx talk (1000 people - share mental health journey). (2) WRITING: Write mental health articles, blog posts, social media content (reach thousands). Topics: "How I Overcame Anxiety", "Mental Health Resources for B.Com Students", "Breaking Mental Health Stigma". (3) ORGANIZING: Organize mental health awareness events (college mental health week, workshops, panel discussions, invite counselors/therapists to speak). (4) POLICY: Advocate for mental health policies (college: more counselors, flexible exam policies for mental health; workplace: mental health days, EAP, manager training). Advocacy skills: Amplify your impact (help 1 friend → help 1000 people through talks, writing, organizing), Reduce stigma at scale (change culture, not just individual minds), Create systemic change (policy changes help everyone). In B.Com, build advocacy skills. Help at scale. Be mental health advocate.',
        '🎯 Deepen Mental Health Knowledge: You know basics (depression, anxiety, warning signs, resources). Good. But DEEPEN KNOWLEDGE: (1) MENTAL HEALTH CONDITIONS: Learn about: Bipolar disorder, PTSD, OCD, eating disorders, schizophrenia, personality disorders (symptoms, treatments, how to support). (2) TREATMENT MODALITIES: Understand: CBT (cognitive behavioral therapy - change thoughts/behaviors), DBT (dialectical behavior therapy - for emotional regulation), Mindfulness-based therapy, Medication (when needed, types, how they work), Group therapy, Family therapy. (3) NEUROSCIENCE: Learn how brain works (neurotransmitters, stress response, neuroplasticity - why therapy works). (4) RESEARCH: Read mental health research (what treatments are evidence-based, latest findings, best practices). Resources: Books ("The Noonday Demon" on depression, "My Age of Anxiety"), Courses ("Introduction to Psychology" Coursera, "Mental Health and Well-being" Yale), Podcasts (mental health podcasts), Follow experts (therapists, psychiatrists on social media). Invest 60 hours over 3 months. Deep knowledge enables: Better understanding (recognize nuances, different conditions, appropriate treatments), Better support (know what to recommend for different struggles), Informed advocacy (speak from knowledge, not just experience). Become mental health expert.',
        '🤝 Build Mental Health Support Network: You have individual friends. Good. But build NETWORK: (1) PEER SUPPORT GROUP: Join or create (weekly meetings, share struggles, support each other - "I am not alone"). Members: 10-15 people (students, colleagues, anyone). Activities: Share, listen, resources, guest speakers (counselors, recovered individuals). (2) ONLINE COMMUNITY: Join mental health online communities (Reddit: r/anxiety, r/depression; Facebook groups, Discord servers). Access 24/7 support (when 3 AM anxiety, post, get support). (3) PROFESSIONAL NETWORK: Connect with counselors, therapists, psychiatrists (know who to refer friends to, stay updated on resources). (4) ADVOCACY NETWORK: Connect with other mental health advocates (collaborate on events, share resources, amplify impact). Network provides: Multiple support sources (not dependent on 1-2 friends), Diverse perspectives (different people, different insights), Community (belong to mental health aware community), Resources (network shares new resources, events, opportunities). In B.Com, build network. Support and get supported. Collective support > individual support.',
        '📊 Track and Maintain Mental Health: You feel better after therapy. Good. But TRACK (maintain mental health long-term): Daily: Mood tracking (rate 1-10, identify patterns: what improves mood? What worsens?). Weekly: Self-assessment (any warning signs appearing? Sleep OK? Social connection maintained? Self-care practiced?). Monthly: Review (Am I maintaining self-care? Do I need therapy booster session? Am I at risk for relapse?). Use apps: Moodfit (mood tracking + insights), Daylio (mood diary), Sanvello (mood + anxiety/depression screening). Tracking enables: Early detection (spot when mental health declining - anxiety increasing, sleep worsening - intervene early), Maintenance accountability (track self-care: exercised 5 days? Yes ✓. Slept 8 hours? No ✗ - improve.), Pattern recognition (Sunday evenings always anxious - plan: Sunday evening relaxation routine). Prevention of relapse (catch early signs, schedule therapy session, prevent full relapse). In B.Com, track mental health. What gets measured gets managed. Regular tracking = maintain mental health long-term (prevent relapse).'
      ],
      nextSteps: [
        '📚 Take Mental Health Course: Enroll in: (1) "Mental Health First Aid" (8 hours certification - learn to help in mental health crisis, recognize signs, provide initial help, connect to resources), (2) "Introduction to Psychology" (40 hours, Coursera - understand mental health conditions, treatments, brain science), (3) "The Science of Well-Being" (20 hours, Yale, Coursera - evidence-based happiness, mental wellness practices), (4) "Stigma and Mental Health" (10 hours - understand stigma, how to reduce, advocacy). Total: 78 hours over 3 months. Apply: Help friends in crisis (mental health first aid), Understand conditions deeply (psychology knowledge), Practice well-being (Yale course evidence-based), Reduce stigma (advocacy). Result: Mental health expertise, confident helping others, evidence-based practices, effective advocacy.',
        '🧠 Practice Daily Self-Care (Build Mental Health Reserves): Make self-care daily habit (non-negotiable). DAILY ROUTINE: Morning (6:30 AM wake, 10 min mindfulness meditation, 30 min exercise). Midday (healthy lunch, 5 min breathing break). Evening (social connection 1 hour - friends/family, hobbies 1 hour - guitar/cooking/reading, journal 10 min - reflect on day). Night (10 PM wind down, 4-7-8 breathing, no screens, 11 PM sleep - 8 hours). Weekly: Friday dinner with friends (social connection), Saturday rest (hobbies, nature, full recovery), Sunday family time. Monthly: Review mental health (mood stable? Sleep good? Anxiety manageable?), Therapy booster session if needed, Adjust self-care (try new hobby, new exercise). Make NON-NEGOTIABLE: Sleep (8 hours), Exercise (30 min), Social (friends/family daily), Hobbies (1 hour), Mindfulness (10 min), Boundaries (work/study 10 hours max). Result: Strong mental health reserves (baseline mood positive, low anxiety, resilient), Handle stress better (have coping tools, support system), Prevent mental health crises (self-care protects mental health). Self-care = mental health foundation.',
        '📊 Build Personal Mental Health Support System: Identify and build support system (before crisis). SUPPORT SYSTEM: (1) CLOSE FRIENDS (3 friends you can call at 3 AM if crisis - have deep talks, provide support), (2) FAMILY (parents, siblings - understand your struggles, provide emotional support), (3) COUNSELOR/THERAPIST (have counselor contact, schedule annual check-up even if feeling fine - preventive mental health care), (4) PEER SUPPORT GROUP (join mental health support group - share struggles, learn from others, reduce isolation), (5) MENTOR (professor, senior, coach - provides guidance, perspective, wisdom), (6) ONLINE COMMUNITY (join mental health Reddit, Facebook group - 24/7 access to support). Maintain system: Regular contact (weekly friends, monthly family, annual counselor check-up), Give support (when friends struggling, be there - mutual support), Know how to access (emergency? Call close friend + crisis hotline. Need therapy? Have counselor contact.). Support system = mental health safety net. When crisis hits: Have people to call, resources to access, support to lean on. In B.Com, build support system NOW (before crisis). Invest in relationships. Know resources. Mental health support system = essential.',
        '🎓 Become Mental Health Advocate: You mastered mental health awareness. Now ADVOCATE: (1) SHARE YOUR STORY: Write blog "My Anxiety Journey: From 8/10 to 3/10 Through Therapy" (share struggles, treatment, recovery - inspire others, reduce stigma). Post on social media, LinkedIn, Medium. Reach 10K people. (2) ORGANIZE EVENTS: Organize "Mental Health Awareness Week" at college (workshops, panel discussions, counselor talks, peer support sessions). 500 students attend. (3) CREATE RESOURCES: Create "Mental Health Toolkit for B.Com Students" PDF (warning signs, resources, self-care, how to support friends). Share in WhatsApp groups. Reach 1000 students. (4) POLICY ADVOCACY: Advocate for: More college counselors (current 1 counselor : 1000 students → need 1:200), Flexible exam policies (students with mental health crisis can defer exams), Mental health days (students can take days off for mental health, not just physical health). Advocacy impact: Reach thousands (not just individual friends), Reduce stigma at scale (change culture), Create systemic change (policy changes help everyone, not just you). In B.Com, be advocate. Share story. Organize. Create resources. Advocate policy. Help thousands. Save lives.',
        '💼 Build Long-Term Mental Wellness Practice: You feel better after therapy (8 weeks). Good. But build LONG-TERM WELLNESS (10+ years). Long-term wellness requires: (1) CONTINUOUS SELF-CARE: Sleep, exercise, social, hobbies, boundaries - daily practice for life (not just 8 weeks, then stop). (2) REGULAR CHECK-INS: Annual therapy check-up (even if feeling fine - preventive mental health care, like annual physical). Catch issues early. (3) STRESS MANAGEMENT: Ongoing stress management (life will have stressors - exams, job changes, relationships - have tools to cope). (4) GROWTH MINDSET: See challenges as growth (not threats). Build resilience (bounce back from setbacks). (5) MEANING AND PURPOSE: Connect to why (why you are living, what matters to you - meaning protects mental health). (6) COMMUNITY: Maintain support network (friends, family, support group - lifelong connections). Long-term thinking: "Can I maintain this self-care for 10 years?" If yes (sleep 8 hours, exercise 30 min, social connection - sustainable), continue. Build lifelong mental wellness (not just recover from one episode, then relapse). In B.Com, think long-term. Build sustainable mental wellness practices (daily self-care, annual therapy check-ups, stress management, resilience, meaning, community). Mental wellness = lifelong practice (not one-time fix). Invest for life.'
      ]
    },
    badge: { name: 'Mental Health Advocate', emoji: '🧠', description: 'Champion of mental wellness' },
    shareMessage: 'Committed to mental health awareness! 🧠 #MentalHealth #Wellness'
  },
  {
    id: 'physical-wellness',
    title: 'Physical Wellness',
    emoji: '💪',
    context: 'personal' as const,
    discover: {
      scenario: "Study 14hrs/day. Sleep 4-5hrs. Skip breakfast, junk lunch, noodles 11 PM. Zero exercise. 2 glasses water. Month 3: Sick 3×, dark circles, GPA 7.5→6.8 (dropped despite MORE study!). Friend: 'You look terrible.' Doctor: 'Physical health = foundation. Fix it.'",
      problemExplanation: [
        "Sleep 4-5hrs: Brain fog, can't remember, sick 3×. Study 14hrs but GPA drops. Sleep = memory consolidation",
        "Junk food: Burger/fries/noodles = zero nutrients. Sugar crash, brain fog, weak immunity. Brain needs fuel",
        "Zero exercise: Sit 16hrs. Tired, can't focus, stressed, can't sleep. Exercise = energy + focus boost",
        "Dehydrated: 2 glasses water, 5 coffees. Headaches, 25% cognitive decline. Brain = 75% water"
      ],
      solutionApproach: [
        "Sleep 8hrs: 11 PM-7 AM. Wind down 10 PM (no screens). Memory consolidates, focus improves 50%",
        "Real food: Oats+eggs breakfast (₹50), dal rice lunch (₹90). No junk. Energy stable, brain fueled",
        "Exercise 30min: Morning run/yoga/sports. Energy increases (paradox!), focus improves, stress drops",
        "Hydrate 8 glasses: Carry bottle, drink hourly. Headaches gone, 25% performance boost. Easiest fix"
      ]
    },
    video: {
      title: 'Health = Performance: Physical Wellness for B.Com',
      duration: 8,
      script: `[0:00-0:45] WHY YOUR GRADES ARE DROPPING

"B.Com final year. You study 14 hours/day. Sleep 5 hours. Eat junk. No exercise. Month 3: GPA 7.5 → 6.8 (DROPPED despite studying MORE!). Friend: 'You look terrible. Dark circles. Always sick. No energy.' Doctor: 'Your lifestyle is destroying your health. Sleep 5 hours (need 8), junk food (no nutrients), no exercise (sedentary), dehydrated. Result: Weak immune system, low energy, brain fog, GRADES DROPPING. Physical health = foundation for performance. Fix: Sleep, nutrition, exercise, hydration. Recovery: 1 month.' By the end of this video, you will master physical wellness. Foundation for everything. Let us fix this."

[0:45-2:00] PILLAR 1: SLEEP (8 Hours Non-Negotiable)

"You sleep 5 hours. Study 14 hours. Result? GPA DROPS 7.5 → 6.8.

Why? Brain needs sleep to CONSOLIDATE learning.

Without sleep: Study → forget.
With sleep: Study → remember.

Sleep deprivation:
- Cannot focus (brain fog, wasted study time)
- Cannot remember (no memory consolidation)
- Cannot perform (exhausted, weak)

FIX: Sleep 8 hours (11 PM - 7 AM)

Wind-down routine:
- Stop studying 10 PM
- No screens (blue light disrupts sleep)
- 4-7-8 breathing (calm mind)
- Lights out 10:30 PM

Benefits (after 1 week):
- Focus improves 50%
- Memory improves
- Energy increases
- Grades improve

8 hours sleep + 10 hours focused study > 5 hours sleep + 14 hours foggy study.

Sleep is not wasted time. Sleep is PRODUCTIVE time."

[2:00-3:30] PILLAR 2: NUTRITION (Real Food, Not Junk)

"Your diet: Skip breakfast, burger lunch, instant noodles dinner. Coffee 5 cups.

Result? Brain fog. No energy. Crash after lunch. Grades dropping.

Brain = 2% body weight, uses 20% energy.

Brain needs:
- Complex carbs (oats, rice - sustained energy)
- Protein (eggs, dal - brain building blocks)
- Healthy fats (nuts - brain function)
- Vitamins/minerals (fruits, vegetables)

You eat: Sugar, fat, processed food (crash, fog).

FIX: Simple, affordable, nutritious

BREAKFAST: Oats + banana + eggs (₹50 - sustained energy)
LUNCH: Dal rice + vegetable (₹90 - nutrients)
SNACKS: Fruits + nuts (₹50 - no crash)
DINNER: Roti + vegetable (₹80 - balanced)

Total: ₹270/day (same as junk, but NUTRITIOUS)

Benefits (after 2 weeks):
- Energy stable (no crash)
- Focus improves
- Fewer headaches
- Stronger immune system

Quality food = quality performance."

[3:30-5:00] PILLAR 3: EXERCISE (30 Minutes Daily)

"You: No exercise. 'Too tired. No time.'

But no exercise CAUSES tiredness!

Exercise BOOSTS energy (blood flow to brain, endorphins).

Exercise benefits:
- Energy INCREASES (paradox!)
- Focus IMPROVES (50% better after exercise)
- Stress REDUCES (processes anxiety)
- Sleep IMPROVES (fall asleep faster)
- Mood IMPROVES (natural antidepressants)

30 min exercise options:
- Run/jog (free, fresh air)
- Bodyweight (push-ups, squats)
- Yoga (flexibility, calm)
- Sports (cricket, fun)

Choose what you ENJOY (sustainable).

Start small: 15 min, build to 30 min.

Morning: 7:15-7:45 AM (before breakfast)

Benefits (immediate):
30 min exercise + 9.5 hours focused study > 0 min exercise + 10 hours foggy study.

Exercise is not wasting time. Exercise is PERFORMANCE STRATEGY."

[5:00-6:30] PILLAR 4: HYDRATION (8 Glasses Daily)

"Your hydration: Water 2 glasses. Coffee 5 cups. Energy drinks 2 cans.

Net: DEHYDRATED.

Research: 1-2% dehydration → 10-20% cognitive decline!

You: 5% dehydrated → 25% performance loss!

(You could score 25% HIGHER if hydrated!)

Dehydration symptoms:
- Cannot focus
- Headaches (3-4×/week)
- Brain fog
- Exhausted

FIX: 8 glasses water/day (2 liters)

Routine:
- Morning: 2 glasses (upon waking)
- Throughout day: 6 glasses (1/hour)
- Carry bottle (refill 2× daily)

Reduce:
- Coffee 5 → 2 cups
- Energy drinks → 0
- Soda → 0

Benefits (IMMEDIATE - 1 day):
- Headaches disappear
- Energy increases
- Focus improves 25%!

Easiest performance boost: Drink water."

[6:30-7:45] BUILD SUSTAINABLE HABITS

"Do not do extreme crash diet/workout (unsustainable, quit after 1 week).

BUILD SUSTAINABLE HABITS:

Start small:
- Week 1: Sleep 8 hours (master this FIRST)
- Week 2: Add breakfast
- Week 3: Add 15 min exercise
- Week 4: Add 8 glasses water
- Week 5: Fix lunch
- Week 6: Fix dinner

Gradual (one habit/week - sustainable).

Track:
- Habit tracker (✓ each day)
- Celebrate streaks (7 days, 30 days)

Missed day? Start again (do not give up).

These are LIFELONG habits (not just for exams).

Invest now. Reap benefits for decades.

Physical health = foundation for performance."

[7:45-8:00] YOUR CHALLENGE (30-Day Health Reset)

"30-day challenge: Build physical wellness.

Week 1: Sleep 8 hours
Week 2: Add healthy breakfast
Week 3: Add 30 min exercise
Week 4: Add 8 glasses water

Track daily. Celebrate progress.

Result after 30 days:
- GPA improves (focus, memory better)
- Energy increases
- Fewer sick days
- Better mood
- Sustainable performance

Physical health = foundation.

Start today."

[End Screen: "Next Video: Resilience Building - Bounce Back Stronger"]`,
      content: [
        'Sleep 8 Hours Non-Negotiable: Brain consolidates learning during sleep (without sleep: study → forget; with sleep: study → remember). Benefits: Focus improves 50%, memory better, energy up, grades improve',
        'Nutrition (Real Food Not Junk): Brain uses 20% energy, needs complex carbs (oats, rice), protein (eggs, dal), healthy fats (nuts), vitamins (fruits, vegetables). Not junk (burger, noodles, energy drinks)',
        'Exercise 30 Minutes Daily: Boosts energy (paradox!), improves focus 50%, reduces stress, improves sleep, mood. Options: run, bodyweight, yoga, sports. 30 min exercise + 9.5 hr study > 0 min + 10 hr',
        'Hydration 8 Glasses Daily: 1-2% dehydration = 10-20% cognitive decline. Carry bottle, drink 1 glass/hour. Immediate benefits: headaches gone, energy up, focus improves 25%',
        'Build Sustainable Habits: Start small (1 habit/week), track progress, celebrate streaks. Not crash diet (unsustainable). Lifelong habits for decades of benefits',
        'Physical Health = Foundation: Study 14 hrs with poor health = GPA drops 7.5→6.8. Study 10 hrs with good health = GPA improves. Quality > quantity',
        'B.Com Applications: Exam prep with health, internship energy, placement stamina, career longevity, sustainable high performance'
      ]
    },
    quiz: {
      title: 'Physical Wellness Quiz',
      questions: [
        {
          id: 16,
          question: 'Study 14hr/day, sleep 5hr. GPA drops 7.5→6.8. Friend studies 10hr, sleeps 8hr. GPA 7.5→8.2. Why?',
          options: [
            'Sacrifice sleep for more study',
            '8hr sleep—brain consolidates learning',
            'Oversleep 10-12 hours',
            'Whatever works, flexible'
          ],
          correct: 1,
          explanation: 'Brain needs 8hr sleep to consolidate learning. No sleep = study then forget. With sleep = study then remember. 5hr sleep + 14hr foggy study < 8hr sleep + 10hr focused study. Sleep = productive time (brain consolidates). Protect 8 hours non-negotiable!'
        },
        {
          id: 17,
          question: 'No exercise (too tired). Result: exhausted, no focus, stress, bad sleep. 30min exercise daily better?',
          options: [
            'Optional, when feel like it',
            'Yes—30min daily boosts energy, focus',
            '2 hours daily mandatory',
            'Not needed, waste time'
          ],
          correct: 1,
          explanation: 'Paradox: no exercise CAUSES tiredness! 30min daily boosts blood flow, oxygen, endorphins. Energy increases, focus improves 50%, stress drops, sleep improves. 30min exercise + 9.5hr focused study > 0min exercise + 10hr foggy study. Exercise = performance strategy, not waste. Make non-negotiable!'
        },
        {
          id: 18,
          question: 'Diet: skip breakfast, burger lunch, noodles dinner, 5 coffees. Result: brain fog, crashes, grades drop. Fix?',
          options: [
            'Supplements only',
            'Real food—oats, eggs, dal, rice, veggies',
            'Whatever fast, junk food',
            'Skip meals, save time'
          ],
          correct: 1,
          explanation: 'Junk food = calories but ZERO nutrients. Brain needs complex carbs (oats, rice), protein (eggs, dal), healthy fats (nuts), vitamins (fruits, veggies). Real food = same price! Oats + eggs ₹50. Dal rice ₹90. Energy stable, focus improves, brain has fuel. Quality food = quality performance!'
        },
        {
          id: 19,
          question: '2 glasses water/day, 5 coffees, 2 energy drinks. Headaches 4×/week, no focus. 1% dehydration = 10-20% cognitive drop!',
          options: [
            'Drink only when thirsty',
            '8 glasses water daily—NOT coffee/energy drinks',
            'Coffee and energy drinks count',
            'Not important, ignore'
          ],
          correct: 1,
          explanation: 'Coffee/energy drinks DEHYDRATE. Brain = 75% water. Dehydration = headaches, brain fog, poor focus. 8 glasses water daily (2 liters). Carry bottle, 1 glass/hour. Benefits IMMEDIATE: headaches gone, focus up 25%! Could score 75→94 just by drinking water. Easiest fix for free performance boost!'
        },
        {
          id: 20,
          question: 'Neglect health: 5hr sleep, junk food, no exercise. GPA 7.5→6.8, sick 3×, exhausted, anxious. Physical health affects what?',
          options: [
            'Body only—muscles, weight',
            'Mental performance + overall well-being',
            'Nothing, separate from mental',
            'Appearance only'
          ],
          correct: 1,
          explanation: 'Physical health = FOUNDATION for everything. Affects: academics (focus, memory, grades drop), mental health (anxiety, mood, depression risk), energy (exhausted, no vitality), life quality (cannot enjoy, relationships suffer). Prioritize health: 8hr sleep, real food, 30min exercise, hydrate. GPA improves, energy up, mood stable. Health FIRST, then academics. Health = investment in performance!'
        }
      ]
    },
    challenge: {
      title: 'Physical Wellness Challenge',
      description: '30-Day Health Transformation - from exhausted to energized',
      contexts: {
        academic: {
          title: 'Academic Physical Wellness Excellence',
          description: 'B.Com final year: Study 14 hrs/day, sleep 5 hrs, junk food, no exercise. Month 3: GPA drops 7.5→6.8, sick 3×, exhausted. Doctor: "Lifestyle destroying health. Fix: Sleep 8 hrs, nutrition, exercise, hydration. Recovery: 1 month." Goal: Transform physical health, improve GPA, sustainable performance.',
          instructions: [
            '1. Week 1 - Fix Sleep First (Days 1-7, 30 hours): Current: Sleep 5 hours/night (12:30 AM-5:30 AM), exhausted, cannot focus. NEW SLEEP ROUTINE: Target 8 hours (11 PM-7 AM). Day 1-2: Set bedtime alarm 10 PM (reminder to start wind-down). Wind-down routine (10-10:30 PM): Stop studying 10 PM (close books, laptop - no matter what, even if not "done"), No screens 10 PM onwards (phone, laptop - blue light disrupts sleep. Put phone in other room), 4-7-8 breathing (calm mind: breathe in 4 sec, hold 7 sec, out 8 sec × 3 rounds), Read physical book 10 min (relaxing, not study material), Lights out 10:30 PM. Wake 7 AM (no snooze - consistency builds habit). Day 1: Hard (used to midnight study). Force yourself. Day 3: Slightly easier. Day 7: Habit forming. Week 1 results: Sleep 8 hours × 7 nights = 56 hours sleep (was 35 hours/week). Difference: 21 hours MORE rest! Benefits (immediate): Focus improves (study session: alert, sharp - can concentrate 2 hours straight, was 30 min), Energy increases (no afternoon crash, sustained vitality), Mood improves (less irritable, happier), Memory improves (remember what you study - sleep consolidates learning).',
            '2. Week 2 - Add Healthy Breakfast (Days 8-14, keep sleep + add nutrition): Week 1: Sleep fixed ✓. Week 2: Add breakfast. Current: Skip breakfast (rush to class hungry). NEW BREAKFAST ROUTINE: Wake 7 AM, Prep breakfast 7-7:30 AM (30 min): Option A: Oats (1 cup) + banana + almonds (10) + milk (₹30 total - complex carbs, protein, healthy fats, sustained energy), Option B: Boiled eggs (2) + whole wheat bread (2 slices) + banana (₹40 - protein, carbs, fills you up), Tea/coffee 1 cup (not 5!). Eat breakfast 7:30 AM (before 8 AM class). Week 2: Monday-Sunday: Breakfast every day. Benefits (immediate): No mid-morning hunger (sustained energy until lunch), Better focus in morning classes (brain has fuel, not running on empty), No sugar cravings (balanced meal prevents cravings). Week 2 results: Sleep 8 hours ✓ + Breakfast daily ✓. GPA tracking: Quiz scores improving (was 12/20, now 16/20 - better focus!).',
            '3. Week 3 - Add Exercise (Days 15-21, keep sleep + breakfast + add exercise): Week 1-2: Sleep + breakfast ✓. Week 3: Add exercise. Current: Zero exercise (sedentary 16 hours/day, exhausted). NEW EXERCISE ROUTINE: Morning exercise 7:45-8:15 AM (30 min, after breakfast, before class): Monday/Wednesday/Friday: Run/jog around campus (start 15 min, build to 30 min. Free, fresh air, cardio), Tuesday/Thursday: Bodyweight workout in hostel room (push-ups 10, squats 20, planks 30 sec, jumping jacks 50. No equipment needed), Saturday: Play cricket/football with friends (1 hour - fun + exercise + social), Sunday: Rest day (light walk 20 min, stretch). Start small: Week 3: 15 min exercise (build confidence). Week 4: 20 min. Week 5: 30 min full. Benefits (immediate - Day 1!): Energy INCREASES after exercise (paradox! Blood flow + oxygen to brain + endorphins = vitality), Focus IMPROVES (study after exercise: 50% better focus than before exercise), Stress REDUCES (anxiety lower, mood better - endorphins), Sleep IMPROVES (fall asleep faster at night, sleep deeper). Week 3: Exercise 6 days (Monday-Saturday), Rest Sunday. Result: Energy levels 7/10 (was 3/10!). Study sessions: 2 hours focused (was 30 min foggy).',
            '4. Week 4 - Add Hydration (Days 22-30, keep all + add water): Week 1-3: Sleep + breakfast + exercise ✓. Week 4: Add hydration. Current: Water 2 glasses/day, coffee 5 cups (dehydrated, headaches 4×/week). NEW HYDRATION ROUTINE: Morning: 2 glasses water (upon waking 7 AM, before breakfast - rehydrate after sleep), Study time: 1 glass water/hour (carry 1-liter bottle to class, library. Set phone reminder every hour. Refill 2× daily = 2 liters = 8 glasses), Evening: 1 glass before dinner, STOP drinking 9 PM (prevent bathroom wake-ups at night). REDUCE: Coffee 5 → 2 cups/day (morning 7:30 AM, afternoon 2 PM only. No coffee after 4 PM - disrupts sleep), Energy drinks 2 → 0 (stop buying, waste of money + unhealthy), Soda 1 → 0 (with lunch, switch to water). Week 4: Track water intake (mark bottle with times: 8 AM, 10 AM, 12 PM, 2 PM, 4 PM, 6 PM, 8 PM. Drink at each time.). Benefits (IMMEDIATE - Day 1!): Headaches DISAPPEAR (was 4×/week, now 0! Dehydration was cause), Energy increases (hydration boosts vitality, no 2 PM crash), Focus improves 25% (brain is 75% water, now properly fueled), Exam performance: Bring water bottle to exam (hydrated = sharp focus, 25% better performance).',
            '5. Week 4-8 - Maintain All 4 Pillars (Days 22-60, ongoing): Week 1-4: Built 4 health pillars ✓. Week 4-8: MAINTAIN consistency (build lifelong habits). DAILY ROUTINE: 7 AM: Wake (no snooze), 7-7:30 AM: Breakfast (oats + eggs + banana), 7:45-8:15 AM: Exercise (run/bodyweight/sports), 8 AM-6 PM: Classes + study (WITH 8 glasses water throughout day, 1 glass/hour), 6-10 PM: Study + dinner (roti + dal + vegetables, not instant noodles!), 10-10:30 PM: Wind down (no screens, 4-7-8 breathing, book), 10:30 PM: Sleep. Track daily: Habit tracker (✓ each day: Sleep 8 hours? Breakfast? Exercise 30 min? 8 glasses water? Healthy meals?). Week 4: All habits 7/7 days ✓. Week 5: 6/7 days (missed exercise 1 day - OK, continue). Week 6: 7/7 days ✓. Week 7: 7/7 days ✓. Week 8: 7/7 days ✓. Consistency building! Month 2 results: Sleep: 8 hours × 60 nights = 480 hours (was 300 hours/2 months - gained 180 hours rest!), Nutrition: Healthy meals 85% (was 0%), Exercise: 25 days/30 (was 0 days), Hydration: 8 glasses/day (was 2 glasses).',
            '6. Month 2 - Measure Transformation (Days 30-60, ongoing): Month 2: Maintain 4 pillars. Measure transformation. BEFORE (Month 0 - poor health): Sleep 5 hours, junk food, no exercise, dehydrated. GPA: 7.5 → 6.8 (DROPPED despite studying 14 hrs/day!), Energy: 3/10 (exhausted constantly), Sick: 3× in 2 months (weak immune system), Weight: Lost 5 kg (unhealthy), Focus: Poor (brain fog, cannot concentrate), Mood: Irritable, anxious, stressed. AFTER (Month 2 - good health): Sleep 8 hours, healthy food, exercise 30 min, hydrated. GPA: 6.8 → 7.9 (IMPROVED! Study 10 hrs/day but HIGH QUALITY hours), Energy: 8/10 (sustained vitality all day), Sick: 0× in Month 2 (strong immune system, no sick days), Weight: Gained 3 kg muscle (healthy weight, fit), Focus: Excellent (sharp, alert, concentrate 2 hours straight), Mood: Happy, calm, positive. COMPARISON: You (Month 0): Study 14 hrs/day × 60 days = 840 hours POOR QUALITY (exhausted, unfocused). You (Month 2): Study 10 hrs/day × 60 days = 600 hours HIGH QUALITY (focused, energized). LESSON: 600 high-quality hours > 840 low-quality hours. Physical health ENABLES academic performance. Doctor follow-up: "Excellent! Health transformed. Sleep good, nutrition good, exercise regular, hydrated. Result: Strong immune system, high energy, sharp focus, GPA improving. Continue!"',
            '7. Month 3 - Share Success and Help Others (Days 61-90, 10 hours): Month 3: You transformed (GPA 7.9, healthy, energized). Share with classmates. Social media post: "How I Improved My GPA from 6.8 to 7.9 While Studying LESS (14 hrs → 10 hrs)." Post content: (1) BEFORE: Sleep 5 hrs, junk food, no exercise. GPA dropped 7.5 → 6.8. Exhausted, sick 3×, brain fog. (2) 4 PILLARS: Sleep 8 hrs (brain consolidates learning), Healthy food (brain fuel: oats, eggs, dal rice), Exercise 30 min (energy boost, focus improves 50%), Hydration 8 glasses (cognitive function improves 25%). (3) AFTER: GPA 6.8 → 7.9 (studying 10 hrs but FOCUSED). Energy 8/10, sick 0×, happy. (4) LESSON: Physical health = foundation. Quality > quantity. 10 focused hours > 14 exhausted hours. Post: 2K likes, 300 shares. 150 classmates message: "I am doing same (sleeping 5 hrs, junk food). My GPA dropping too! I will try your routine!" You: Create "Physical Wellness Study Group" (30 members). Weekly: Share tips (meal prep, workout routines, study schedules), Support each other (accountability partners), Track progress (collective GPA improvement: Average 7.2 → 7.8!). Professor notices: "Your GPA improved significantly! What changed?" You explain 4 pillars. Professor: "Excellent! Physical health = academic performance foundation. A grade!" You transformed. Helped 150 classmates. Professor praises. Physical wellness = academic success.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Sacrificing sleep for study: Study 14 hrs, sleep 5 hrs. Result: GPA drops (brain cannot function). Solution: Sleep 8 hrs + study 10 hrs FOCUSED = better GPA.',
            '• Junk food to "save time": Burger, noodles, energy drinks. Result: Brain fog, crash, poor focus. Solution: Real food (dal rice eggs ₹270/day, same price, NUTRITIOUS).',
            '• "Too tired for exercise": No exercise because tired. Result: MORE tired (negative spiral). Solution: Exercise 30 min = BOOSTS energy (paradox! Try it 1 day, feel difference).',
            '• Dehydration: Coffee 5 cups, water 2 glasses. Result: Headaches, focus down 25%. Solution: Water 8 glasses, coffee 2 cups (instant improvement).',
            '• All-or-nothing thinking: Try to change everything Day 1, give up Day 3. Result: No sustained habits. Solution: 1 habit/week (gradual, sustainable, lifelong).'
          ],
          successCriteria: [
            '✅ You fix sleep (8 hours nightly, 11 PM-7 AM, wind-down routine, consistent)',
            '✅ You add healthy breakfast (oats + eggs daily, sustained energy, no mid-morning crash)',
            '✅ You add exercise (30 min daily, run/bodyweight/sports, energy increases, focus improves 50%)',
            '✅ You add hydration (8 glasses water daily, carry bottle, headaches disappear, focus improves 25%)',
            '✅ You transform health (GPA 6.8 → 7.9, energy 3/10 → 8/10, sick 3× → 0×, happy)',
            '✅ You maintain consistency (4 pillars daily for 90 days, habit tracker 85%+ compliance)',
            '✅ You help 150 classmates (share success, create study group, collective GPA improves)',
            '✅ Professor recognizes transformation (A grade, praise for health-performance connection)'
          ]
        },
        professional: {
          title: 'Professional Physical Wellness Mastery',
          description: 'You are Marketing Associate at agency. Work schedule: 9 AM-9 PM (12 hours daily), sleep 5 hours, lunch junk food at desk, no exercise. Month 3: Performance declining, sick 3×, exhausted, boss warns. Goal: Transform physical health, improve work performance, sustainable career.',
          instructions: [
            '1. Week 1 - Protect Sleep (Days 1-7, negotiate with manager): Current: Work until 9 PM, home 9:30 PM, dinner 10 PM, scroll phone until midnight, sleep 12:30 AM-5:30 AM (5 hours). Exhausted, performance declining. ACTION: Talk to manager (Day 1): "I am working 12 hours/day but performance declining. I am exhausted, sick 3×, cannot focus. I need work-life balance to perform better. Can I work 9 AM-6 PM (9 hours), focus on priorities?" Manager: "Your performance HAS declined. Try it 1 month. If performance improves, we continue." NEW SCHEDULE: Work 9 AM-6 PM (9 hours, leave at 6 PM sharp), Home 6:30 PM, Dinner 7 PM, Wind down 9:30-10 PM (4-7-8 breathing, book, no screens), Sleep 10 PM-6 AM (8 hours). Week 1: Monday-Friday: 8 hours sleep (was 5 hours). Saturday-Sunday: 9 hours sleep (catch up). Benefits (immediate): Focus improves (alert during meetings, sharp thinking), Energy increases (no 2 PM crash, sustained all day), Mood improves (less irritable with colleagues), Work quality IMPROVES (9 hours focused work > 12 hours exhausted work). Manager (Friday): "Your work quality improved this week! Continue."',
            '2. Week 2 - Fix Lunch (Days 8-14, meal prep + sleep): Week 1: Sleep fixed ✓. Week 2: Fix nutrition. Current: Lunch at desk (burger, fries, soda from food court ₹150, quick but junk). Afternoon: Crash 2-4 PM (cannot focus, sugar crash). NEW LUNCH ROUTINE: Sunday meal prep (2 hours): Cook dal (1 kg lasts 5 days), Cook rice (1 kg), Cut vegetables (store in containers). Cost: ₹400 for week = ₹80/day (cheaper than ₹150 junk!). Monday-Friday: Pack lunch morning (dal rice vegetable curd, ₹80), Eat lunch 1-2 PM (away from desk, take break, enjoy meal, social with colleagues), Afternoon snack: Fruits + nuts (₹30, no crash). Benefits (immediate): No afternoon crash (sustained energy 2-4 PM, most productive hours!), Focus all day (brain has nutrients, not junk), Money saved (₹70/day × 20 days = ₹1400/month saved!), Colleagues notice: "What are you eating? You have so much energy!" You: "Dal rice! Want some?" Start lunch group (5 colleagues bring healthy lunch, eat together).',
            '3. Week 3 - Add Morning Exercise (Days 15-21, wake earlier): Week 1-2: Sleep + nutrition ✓. Week 3: Add exercise. Current: No exercise (sedentary 10 hours/day at desk, exhausted). NEW EXERCISE ROUTINE: Wake 5:30 AM (30 min earlier, still get 7.5 hours sleep), Exercise 6-6:30 AM (30 min before shower): Gym near home (₹500/month, worth it!), Monday/Wednesday/Friday: Weight training (strength, build muscle), Tuesday/Thursday: Cardio (treadmill, cycling, heart health), Saturday: Long run 1 hour (outdoors, fresh air), Sunday: Rest. Shower 6:30-7 AM, Breakfast 7-7:30 AM (oats + eggs), Commute 7:45 AM, Work 9 AM (arrive energized!). Benefits (immediate): Energy SOARS (arrive at work energized, not exhausted), Focus SHARP (morning workout = brain oxygenated, alert all day), Stress LOW (work pressure does not affect - exercise processes stress), Confidence UP (getting fit, feeling strong), Boss notices: "You seem different. More energized. What changed?"',
            '4. Week 4 - Add Hydration + Movement Breaks (Days 22-30): Week 1-3: Sleep + nutrition + exercise ✓. Week 4: Add hydration + desk movement. Current: Water 2 glasses at office, coffee 6 cups, sit 9 hours straight (dehydrated, stiff, headaches). NEW ROUTINE: HYDRATION: Bring 1-liter bottle to office (refill 2× at office kitchen = 2 liters), Drink 1 glass/hour (set phone reminder: 9 AM, 10 AM, 11 AM, 12 PM, 2 PM, 3 PM, 4 PM, 5 PM), Coffee 6 → 2 cups (morning 9 AM, afternoon 2 PM only). MOVEMENT BREAKS (every hour): Stand up, Walk to water fountain (hydrate + move), Stretch 2 min (neck, shoulders, back - release desk tension), Repeat every hour (9 AM, 10 AM, 11 AM... until 5 PM). Benefits (immediate): Headaches DISAPPEAR (was 3×/week, now 0! Was dehydration), No back pain (was constant, now occasional - movement breaks help), Energy sustained (hydration + movement = no crash), Colleagues ask: "Why do you walk around so much?" You: "Movement breaks! Join me?" 3 colleagues join (build healthy office culture).',
            '5. Month 2 - Measure Work Performance (Days 30-60): Month 2: Maintain all habits. Measure work performance. BEFORE (Month 0 - poor health): Work 12 hrs/day, sleep 5 hrs, junk food, no exercise. Performance: Declining (missed 2 deadlines, poor presentation, client complained), Sick days: 3 (weak immune system), Energy: 3/10, Boss warning: "Performance must improve." AFTER (Month 2 - good health): Work 9 hrs/day, sleep 8 hrs, healthy food, exercise 30 min. Performance: EXCELLENT (met all deadlines, presentation praised, client happy), Sick days: 0, Energy: 9/10, Boss: "Performance transformation! What happened?" You explain 4 pillars. Boss: "Physical health = work performance! Promoted to Senior Marketing Associate + ₹10K raise!" Promotion! Benefits: ₹10K raise × 12 months = ₹120K/year (physical wellness paid for itself!), Better title (career growth), Respect from team (model healthy work habits).',
            '6. Month 3 - Build Healthy Office Culture (Days 61-90): Month 3: You transformed (promoted, healthy, energized). Build healthy office culture. INITIATIVES: (1) LUNCH GROUP: 10 colleagues bring healthy lunch (eat together, share recipes, social + healthy), (2) EXERCISE CHALLENGE: Office challenge "30 Days Fitness" (20 people join, track workouts, prizes for consistency), (3) HYDRATION STATIONS: Convince boss to install water dispensers on every floor (easy access, team drinks more water), (4) MOVEMENT BREAKS: Team norm "Hourly Stand" (everyone stands, stretches every hour - reduce back pain, increase energy), (5) FLEXIBLE HOURS: Boss allows 9 AM-6 PM for everyone (not just you - work-life balance for whole team). Impact: Team health improves (5 people lost weight, 8 people exercise regularly, 15 drink more water), Team performance improves (productivity UP, sick days DOWN, morale HIGH), Boss: "You transformed not just yourself but the whole team culture. Excellent leadership!" CEO notice: Company-wide wellness program based on your initiatives. You: Became wellness champion (in addition to marketing work). Physical wellness = career success + leadership opportunity.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Working 12 hours daily: No life, exhausted, performance DECLINES. Solution: Work 9 hours FOCUSED > 12 hours exhausted. Manager agrees when sees results.',
            '• Lunch at desk (junk): No break, junk food, afternoon crash. Solution: Meal prep ₹80 dal rice (cheaper + healthier + no crash + social lunch break).',
            '• "No time for exercise": Work 12 hrs, no exercise. Result: Exhausted. Solution: Wake 30 min earlier, exercise 30 min = BOOSTS energy (work better all day).',
            '• Sitting 9 hours straight: Back pain, stiff, low energy. Solution: Movement breaks every hour (walk, stretch, hydrate - 2 min saves hours of pain).',
            '• Hustle culture: "Sleep is for weak, work 12 hrs, sacrifice health for career." Result: Burnout, poor performance, no promotion. Solution: Health FIRST = better performance = promotion + raise!'
          ],
          successCriteria: [
            '✅ You protect sleep (8 hours nightly, negotiate 9 AM-6 PM work hours with manager)',
            '✅ You fix lunch (meal prep dal rice ₹80/day, no junk, no afternoon crash, save ₹1400/month)',
            '✅ You add exercise (wake 5:30 AM, gym 30 min daily, arrive at work energized)',
            '✅ You add hydration + movement (8 glasses water, hourly breaks, headaches gone, no back pain)',
            '✅ Performance improves dramatically (meet all deadlines, presentation praised, client happy)',
            '✅ You get promoted (Senior Marketing Associate + ₹10K raise = ₹120K/year increase)',
            '✅ You build healthy office culture (lunch group, fitness challenge, hydration stations, flexible hours)',
            '✅ CEO recognizes leadership (company-wide wellness program, wellness champion role)'
          ]
        },
        personal: {
          title: 'Personal Physical Wellness Wisdom',
          description: 'Personal life: Busy schedule, neglect health (sleep 6 hrs, skip meals, no exercise, no water). Month 3: Exhausted, gained weight, low energy, unhappy. Friend: "You look tired all the time. Your health is suffering." Goal: Build lifelong physical wellness habits, sustainable healthy lifestyle.',
          instructions: [
            '1. Week 1 - Sleep Audit and Fix (Days 1-7): Assess current sleep: Track 3 days: Monday: Sleep 11:30 PM-5:30 AM (6 hours), Tuesday: Sleep 12 AM-6 AM (6 hours), Wednesday: Sleep 1 AM-6:30 AM (5.5 hours). Average: 5.8 hours (need 8 hours! Deficit: 2.2 hours/night × 365 days = 803 hours/year sleep debt!). Effects: Exhausted all day, cannot focus, irritable, low energy. FIX SLEEP: Target: 8 hours (10:30 PM-6:30 AM). Identify sleep disruptors: Phone scrolling (scroll until midnight - stop!), Late dinner (10 PM - eat earlier), No wind-down (work until sleep - need routine). NEW SLEEP ROUTINE: 9 PM: Stop work (no more laptop, emails), 9-10 PM: Wind down (shower, light reading, 4-7-8 breathing, dim lights), 10 PM: Phone on airplane mode (in other room - no scrolling!), 10:30 PM: Lights out (sleep), 6:30 AM: Wake (no snooze, sunlight exposure). Week 1: Monday-Sunday: 8 hours sleep. Benefits: Energy increases (waking refreshed, not exhausted), Mood improves (less irritable, happier), Focus sharper (can concentrate on tasks).',
            '2. Week 2-3 - Nutrition Overhaul (Days 8-21, 30 hours): Week 1: Sleep fixed ✓. Week 2-3: Fix nutrition. Current audit (track 3 days): Breakfast: Coffee only (no food - hungry by 11 AM), Lunch: Whatever is convenient (pizza, sandwich, irregular timing), Dinner: Late 9-10 PM (heavy meal, then sleep - poor digestion), Snacks: Chips, cookies (sugar, processed). Result: Energy crashes, weight gain (3 kg in 3 months), unhealthy. NUTRITION OVERHAUL: Learn basics (spend 3 hours): Watch: "Nutrition basics" videos (understand macros: carbs, protein, fats, and micros: vitamins, minerals), Read: Food labels (identify healthy vs junk), Plan: Weekly meal plan (breakfasts, lunches, dinners). NEW EATING ROUTINE: BREAKFAST (7:30 AM): Oats + fruits + nuts OR Eggs + whole wheat toast + banana (₹40-50, 15 min prep, sustained energy until lunch). LUNCH (1 PM): Home-cooked OR healthy restaurant (dal + rice + vegetable + salad, ₹80-100, balanced meal). SNACKS (4 PM): Fruits, nuts, yogurt (₹30, healthy, no crash). DINNER (7:30 PM, 3 hours before sleep): Light dinner (roti + vegetable + dal OR khichdi + curd, ₹60-80, easy digestion). AVOID: Processed food (chips, cookies, instant noodles), Late heavy dinners (disrupt sleep), Sugary drinks (soda, energy drinks). Week 2-3: Follow plan 90% (allow 10% flexibility - birthday cake OK!). Benefits: Weight normalizes (lost 2 kg, feel lighter), Energy stable (no crashes, sustained all day), Digestion improves (no bloating, regular), Skin glows (nutrition shows!).',
            '3. Week 4 - Find Enjoyable Exercise (Days 22-30, 15 hours): Week 1-3: Sleep + nutrition ✓. Week 4: Add exercise. Current: No exercise for 3 months (sedentary, no stamina, tired). FIND WHAT YOU ENJOY (Week 4 - try different activities): Monday: Try running (20 min around neighborhood). Verdict: "OK, bit boring alone." Tuesday: Try YouTube workout video (30 min HIIT). Verdict: "Hard! But feel accomplished." Wednesday: Try yoga class (1 hour beginner class). Verdict: "Love it! Relaxing, stretching, calming." Thursday: Try swimming (30 min local pool). Verdict: "Fun! Full body workout, refreshing." Friday: Try dance class (Zumba 1 hour). Verdict: "SO FUN! Do not feel like exercise, feel like party!" Saturday: Try hiking with friends (2 hours nature trail). Verdict: "Amazing! Social + exercise + nature." Week 4 WINNER: Dance (Zumba) 2× week + Yoga 2× week + Hiking 1× weekend (fun, varied, sustainable). Week 5 onwards: Monday/Thursday: Zumba class 1 hour (fun, cardio, social), Tuesday/Friday: Yoga class 1 hour (flexibility, stress relief, calm), Saturday: Hiking/long walk 2 hours (nature, social), Sunday: Rest. Benefits: Actually ENJOY exercise (not chore, look forward to it!), Consistent (fun = sustainable, do not skip), Energy soars (vitality all day), Fitness improves (stamina, strength, flexibility), Social (meet people in classes, hiking group).',
            '4. Month 2 - Add Hydration and Track Progress (Days 30-60): Month 2: Sleep + nutrition + exercise ✓. Add hydration. Track all habits. HYDRATION: Carry 1-liter bottle everywhere (home, work, classes, outings), Drink 2 liters/day (refill 2× daily), Reduce coffee 3 → 1 cup/day (morning only), Zero soda, energy drinks. TRACK HABITS (habit tracker app OR notebook): Daily: Check ✓ Sleep 8 hours? Healthy meals (breakfast, lunch, dinner)? Exercise? 8 glasses water? Weekly review: How many days ✓? What to improve? Monthly review: Overall progress? Health improvements? Month 2 tracking: Sleep: 56/60 nights (93% - missed 4 nights during travel, OK!), Nutrition: 170/180 meals (94% - ate out junk 10 times, allowed flexibility), Exercise: 22/26 sessions (85% - missed 4 due to weather, illness), Hydration: 52/60 days (87% - forgot some days). Overall: 90% consistency (excellent for Month 2!). Month 2 health transformation: Weight: Lost 3 kg (total, now healthy weight), Energy: 8/10 (was 4/10), Fitness: Can hike 2 hours without breathless (was breathless after 10 min), Mood: Happy, positive, proud, Sleep quality: Deep, refreshing, Skin: Clear, glowing, Confidence: High (feel good in body).',
            '5. Month 3 - Make It Lifestyle (Days 61-90): Month 3: You transformed. Now make it LIFESTYLE (not temporary diet, permanent habit). LIFESTYLE INTEGRATION: SOCIAL: Friends notice: "You look amazing! What changed?" You: Share 4 pillars (sleep, nutrition, exercise, hydration). 5 friends join your routine (workout together, meal prep together, accountability partners). FAMILY: Parents notice: "You are healthier, happier!" You: Teach parents (they start walking 30 min daily, eat healthier). WORK: More productive (well-rested, energized, focused). Boss: "Your performance improved!" HOBBIES: More energy for hobbies (photography, travel, social - no longer too tired). IDENTITY SHIFT: Before: "I am busy, no time for health." After: "I prioritize health. Health enables everything else." Not temporary program. Permanent lifestyle. Health = foundation for life.',
            '6. Month 4-12 - Sustain Long-Term (Days 90-365): Month 4-12: Sustain habits long-term (not just 90 days, but 365 days, then lifelong). STRATEGIES: FLEXIBILITY: 80/20 rule (80% healthy habits, 20% flexibility. Birthday? Eat cake! Travel? Sleep less 1 night OK. Life happens, be flexible). ADAPTATION: Busy week? Exercise 15 min instead of 30 min (some > none). Cannot meal prep? Healthy restaurant OK. Adapt, do not abandon. RECOVERY: Missed 3 days exercise? Do not quit. Start again Day 4. Habits are practice, not perfection. EVOLUTION: Month 6: Try new exercise (rock climbing - fun!). Month 9: Try new food (meal variety, not bored). Evolve, keep interesting. COMMUNITY: Join fitness community (running club, yoga studio, hiking group). Social support = long-term sustainability. RESULTS (Year 1): Sleep: 8 hours × 365 nights (2920 hours rest!), Nutrition: 90% healthy meals (no deprivation, sustainable), Exercise: 250 days (5 days/week average), Hydration: 8 glasses daily habit. Health transformation: Weight: Healthy, fit, strong, Energy: 9/10 consistently, Fitness: Ran half-marathon (was breathless after 10 min!), Mood: Happy, confident, thriving, Quality of life: HIGH (energy for work, hobbies, social, travel). Lifelong habits built. Your 40-year-old self will thank 25-year-old self for investing in health NOW.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• All-or-nothing: Try to be "perfect" (no flexibility). Miss 1 day, quit. Result: Unsustainable. Solution: 80/20 rule (mostly healthy, some flexibility, lifelong).',
            '• Temporary mindset: "I will be healthy for 90 days, then back to normal." Result: Regain weight, lose fitness. Solution: Lifestyle change (permanent, not temporary program).',
            '• Boring routine: Same food every day (oats only), same exercise (run only). Result: Bored, quit. Solution: VARIETY (different foods, different exercises, keep interesting).',
            '• Solo journey: Do it alone, no support. Result: Hard to sustain. Solution: COMMUNITY (workout buddies, meal prep group, accountability partners - social support).',
            '• Perfection paralysis: "I cannot be perfect so I will not start." Result: Stay unhealthy. Solution: START imperfect (some > none. 15 min exercise > 0 min. Progress > perfection).'
          ],
          successCriteria: [
            '✅ You fix sleep (8 hours nightly, 10:30 PM-6:30 AM, wind-down routine, 93% consistency)',
            '✅ You overhaul nutrition (healthy breakfast/lunch/dinner, meal plan, 94% consistency, lost 3 kg)',
            '✅ You find enjoyable exercise (Zumba + yoga + hiking, fun > chore, 85% consistency, fit)',
            '✅ You add hydration (8 glasses daily, carry bottle, 87% consistency)',
            '✅ You transform health (energy 4/10 → 9/10, weight healthy, fitness high, mood happy)',
            '✅ You make it lifestyle (not temporary, identity shift, teach 5 friends + parents)',
            '✅ You sustain long-term (365 days, 80/20 flexibility, community support, evolution)',
            '✅ You thrive (ran half-marathon, high quality of life, lifelong habits, inspire others)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '😴 Prioritize Sleep (8 Hours Non-Negotiable): You understand: Sleep is not luxury, sleep is NECESSITY. Brain needs sleep to consolidate learning (without sleep: study → forget; with sleep: study → remember). You protect 8 hours (11 PM-7 AM, wind-down routine, consistent). You recognize: 8 hours sleep + 10 hours focused study > 5 hours sleep + 14 hours foggy study. Quality > quantity. Sleep deprivation destroys: Focus (brain fog), Memory (cannot consolidate), Performance (grades drop), Health (weak immune system, sick often), Mood (irritable, anxious). With 8 hours sleep: Focus sharp (alert, can concentrate), Memory strong (remember what you study), Performance high (grades improve), Health good (strong immunity, rarely sick), Mood positive (happy, calm). You treat sleep as non-negotiable (like brushing teeth, not optional). Benefits: Academic performance improves (GPA increases), Energy increases (sustained vitality), Health improves (rarely sick), Quality of life high.',
        '🥗 Eat Real Food (Not Junk): You understand: Food = fuel. Junk food = bad fuel (car with bad fuel runs poorly). Real food = good fuel (runs well). Brain uses 20% of energy, needs: Complex carbs (oats, rice - sustained energy), Protein (eggs, dal - building blocks), Healthy fats (nuts - brain function), Vitamins/minerals (fruits, vegetables - immune system). You eat REAL FOOD: Breakfast (oats + eggs), Lunch (dal rice vegetables), Snacks (fruits nuts), Dinner (roti vegetables). NOT junk (burger, noodles, energy drinks). Cost: ₹270/day (SAME as junk but NUTRITIOUS!). You recognize: Junk food causes: Energy crashes (sugar spike → crash), Brain fog (no nutrients), Weak immunity (sick often), Poor performance. Real food provides: Energy stable (sustained all day), Focus sharp (brain has fuel), Strong immunity (rarely sick), Good performance. You meal prep (save time, save money), eat regular meals (not skip), avoid processed food. Benefits: Energy sustained, Focus improves, Immunity strong, Performance high, Money saved.',
        '🏃 Exercise Daily (30 Minutes Performance Strategy): You understand: Exercise is not wasting time, exercise is INVESTING in performance. 30 min exercise = better focus, more energy, less stress, better sleep → study effectively in LESS time. Paradox: You do not exercise because "too tired." But exercise BOOSTS energy! You exercise 30 min daily: Morning (run, bodyweight, yoga, sports), Choose what you ENJOY (sustainable, not chore), Start small (15 min → build to 30 min), Consistency over intensity (30 min 6 days/week > 2 hours 1 day/week). Benefits: Energy INCREASES (blood flow + oxygen + endorphins), Focus IMPROVES (study after exercise: 50% better), Stress REDUCES (processes anxiety, calm mood), Sleep IMPROVES (fall asleep faster, sleep deeper), Health IMPROVES (immunity, stamina, prevent disease), Mood IMPROVES (endorphins = natural happiness). You recognize: 30 min exercise + 9.5 hours focused study > 0 min exercise + 10 hours foggy study. Exercise = performance strategy (not luxury, not optional, essential).',
        '💧 Stay Hydrated (8 Glasses Daily - Easiest Win): You understand: Brain is 75% water. Dehydration impairs cognitive function. 1-2% dehydration = 10-20% performance decline! You were chronically 5% dehydrated = 25% performance loss! (Could score 25% HIGHER just by drinking water!). You hydrate: 8 glasses water/day (2 liters, carry bottle, drink 1 glass/hour), Reduce coffee (5 → 2 cups/day), Zero energy drinks/soda (dehydrate + unhealthy). Benefits (IMMEDIATE - Day 1!): Headaches disappear (was 4×/week, now 0!), Energy increases (hydration boosts vitality), Focus improves 25% (brain properly fueled), Clear thinking (mental clarity), Exam performance (bring water bottle = 25% better). You recognize: Hydration is EASIEST performance boost (free, instant, 25% improvement). You drink BEFORE thirsty (thirst = already dehydrated). You track (mark bottle with times, set reminders). Hydration = no-brainer win.',
        '🔄 Build Sustainable Habits (Not Crash Diet): You understand: Crash diet/extreme workout = unsustainable (quit after 1 week). Sustainable habits = lifelong (small changes, gradual, consistent). You build habits: Start small (1 habit/week: Week 1 sleep, Week 2 breakfast, Week 3 exercise, Week 4 water), Track progress (habit tracker, ✓ each day, celebrate streaks), Allow flexibility (80/20 rule: 80% consistent, 20% flexible - birthday cake OK!), Recover from misses (missed 1 day? Start again Day 2. Missed 3 days? Analyze, adjust, continue.). You recognize: Habits are practice, not perfection. These are LIFELONG habits (not 90-day program, permanent lifestyle). You invest now, reap benefits for decades. Sustainable habits result: Consistency (can maintain years, not just weeks), No yo-yo (not lose weight, regain. Stable healthy lifestyle), Enjoyable (not suffering, thriving), Long-term health (your 40-year-old self benefits from 20-year-old self investment).'
      ],
      improvements: [
        '📚 Study Sleep Science: You know sleep is important. Good. But study SCIENCE: Read: "Why We Sleep" by Matthew Walker (understand sleep stages, REM, deep sleep, how sleep consolidates memory, why 8 hours is optimal, consequences of sleep deprivation - fascinating, motivation to protect sleep). Research: Sleep and academic performance studies (data shows: Students sleeping 8 hours: GPA 3.5 average. Students sleeping 6 hours: GPA 2.8 average. Sleep predicts GPA better than study hours!). Learn: Sleep hygiene (optimize sleep environment: dark room, cool temperature 18-20°C, comfortable bed, consistent schedule, no caffeine after 2 PM, no screens 1 hour before bed). Apply: Experiment (track sleep quality, try different routines, find what works for YOUR body). Deep understanding motivates: Protect sleep fiercely (know WHY 8 hours matters, not just "someone said so"). Optimize sleep quality (not just quantity - 8 hours deep sleep > 10 hours fragmented sleep).',
        '🥗 Learn Nutrition Science: You eat healthy. Good. But LEARN WHY: Study: Macronutrients (carbs, protein, fats - how much of each, when to eat for energy, performance, recovery), Micronutrients (vitamins, minerals - which foods provide what, deficiency symptoms), Brain nutrition (omega-3 for brain health, B vitamins for energy, antioxidants for cognition). Read: "How Not to Die" by Michael Greger OR "In Defense of Food" by Michael Pollan (evidence-based nutrition, practical advice). Learn: Cook (basic skills - dal, rice, vegetables, eggs. Not complicated. YouTube tutorials. 30 min cooking = healthy meals all week). Calculate: Your needs (TDEE - total daily energy expenditure, macro ratios for your goals: energy, focus, fitness). Deep knowledge enables: Make informed choices (not follow random diet fads), Optimize for YOUR goals (student needs sustained energy, focus - different from athlete), Enjoy food (understand food is fuel AND pleasure, not punishment).',
        '🏋️ Progressive Exercise Program: You exercise 30 min daily. Good. But build PROGRAM: Set goals: Short-term (3 months: run 5K without stopping, do 20 push-ups, touch toes in stretch), Long-term (1 year: run half-marathon, deadlift bodyweight, do 1 pull-up). Structure: Cardio 3× week (heart health, endurance, calorie burn), Strength 2× week (muscle, metabolism, functional fitness), Flexibility 2× week (yoga, prevent injury, recovery). Progressive overload: Week 1: Run 2 km. Week 4: Run 3 km. Week 8: Run 5 km. Week 12: Run 10 km. Gradual progression (build capacity, prevent injury). Track: Workout log (reps, weight, distance, time - see progress, motivation!), Fitness tests (quarterly: measure VO2max, push-ups, flexibility - data shows improvement). Hire: Coach OR use app (proper form, prevent injury, structured program). Progressive program ensures: Continuous improvement (not plateau at "exercise 30 min" forever, keep getting fitter), Motivation (achieve goals, set new ones, progression is fun), Lifelong fitness (build strong body for decades, prevent age-related decline).',
        '🧪 Track Health Metrics: You feel better. Good. But MEASURE: Get physical: Annual check-up (blood pressure, cholesterol, blood sugar, vitamin levels - catch issues early), Body composition (not just weight - muscle %, body fat %, BMI - better measure of health than scale weight). Track: Daily (weight, sleep hours, energy level 1-10, mood 1-10, workouts - spreadsheet OR app), Weekly (average weight, average sleep, workout frequency, meal quality %), Monthly (review trends, adjust habits). Wearable: Fitness tracker (Fitbit, Apple Watch, Mi Band - track steps, heart rate, sleep quality - data insights). Biomarkers: Track over time (resting heart rate improves = cardiovascular fitness, HRV improves = recovery, sleep score improves = sleep quality). Tracking enables: Objective progress (not just "feel better" - SEE data: resting heart rate 75 → 60, weight 70kg → 65kg, sleep quality 60% → 85%), Early warning (notice when metrics declining - intervene early before crisis), Optimization (experiment: Does coffee after 2 PM worsen sleep? Data shows!), Motivation (see progress chart over 1 year - massive motivation to continue).',
        '👥 Build Health Community: You built habits alone. Good. But build COMMUNITY: Find: Workout buddies (run together, gym together - accountability + social + fun), Meal prep group (cook together Sunday, share recipes, split costs), Health challenges (30-day fitness challenge with friends - competition motivates), Online community (fitness subreddit, health forum, accountability Discord - support 24/7). Teach: Share your transformation (blog, social media, talks - teaching reinforces learning, helps others), Mentor (help friend transform health - giving back, purpose), Lead: Organize (college fitness club, office wellness program, community running group - leadership opportunity). Community provides: Accountability (less likely to skip workout if friend expecting you), Motivation (see others progress, inspire each other), Support (tough day? Community encourages), Social (fitness + friendship, health does not mean isolation), Fun (workouts together, healthy potlucks, group hikes - social + healthy). In B.Com, build health community. Solo journey is hard. Community journey is sustainable, fun, impactful.'
      ],
      nextSteps: [
        '📚 Read "Why We Sleep" by Matthew Walker: Read: 300-page book, 20 hours (science of sleep, fascinating, will change how you prioritize sleep). Key learnings: Sleep stages (light, deep, REM - each serves different function), Memory consolidation (happens during sleep - why cramming without sleep fails), Sleep deprivation consequences (cognitive impairment, immune suppression, mental health issues, shortened lifespan!), Optimal sleep (8 hours target, 7-9 hours individual variation, consistency matters, quality matters). Apply: After reading, you will NEVER sacrifice sleep again (understand stakes: sleep = performance, health, longevity). Experiment: Implement book suggestions (sleep schedule, environment, habits), track results. Share: Teach 5 friends (spread knowledge, collective health improvement). Investment: 20 hours reading this book will save thousands of hours of poor performance from sleep deprivation. Read it.',
        '🏃 Set 1-Year Fitness Goal (Run Half-Marathon OR Hike Mountain): Set: Ambitious 1-year fitness goal. Options: (1) Run half-marathon (21 km - from breathless after 10 min to running 21 km!), (2) Hike challenging mountain (Triund, Kedarkantha - multi-day trek, fitness required), (3) Fitness milestone (20 pull-ups, 100 push-ups, run 5K under 25 min - measurable). Plan: 12-month training plan (gradual progression, coach OR app, structured program), Weekly workouts (build from current level to goal level - progressive overload), Nutrition plan (fuel training, recovery nutrition, optimize performance). Execute: Track weekly (distance, reps, time - see progress), Adjust (injury? Rest. Too easy? Increase intensity), Celebrate milestones (first 5K, first 10K, first 15K - motivation!). Achievement (Month 12): Complete goal (cross half-marathon finish line OR summit mountain - HUGE accomplishment!), Transform fitness (from unfit to athlete-level fitness), Build confidence (if you can run 21 km, what else can you achieve?), Inspire others (friends see transformation, get inspired). Why big goal?: Motivation (daily workouts serve bigger purpose), Transformation (forces you to build serious fitness, not just "exercise sometimes"), Proof (physical evidence: you CAN transform, you CAN achieve big goals - applies to career, life).',
        '🍳 Master Meal Prep (Batch Cook Sunday for Healthy Week): Master: Meal prep skill (cook once, eat all week - saves time, saves money, eat healthy). Sunday routine (3 hours, once per week): (1) Plan: Meals for week (breakfast, lunch, dinner, snacks - variety, balanced), Shopping list (buy ingredients for week), Budget (₹1500-2000/week = ₹200-300/day, cheaper than eating out!). (2) Prep: Batch cook (dal 1 kg, rice 1 kg, multiple vegetables, boil eggs 10), Portion: Divide into containers (5 lunches, 5 dinners - ready to grab), Store: Fridge (meals last 5 days if stored properly). (3) Morning: Grab container, microwave, eat (5 min vs 30 min cooking daily OR eating out). Benefits: Time saved (3 hours Sunday vs 1 hour daily × 7 days - save 4 hours/week!), Money saved (₹200/day home food vs ₹400/day restaurant - save ₹1400/week = ₹5600/month!), Health improved (control ingredients, portions, nutrition - vs random restaurant food), Stress reduced (no daily "what to eat?" decision fatigue). Resources: YouTube "meal prep Sunday" (hundreds of tutorials), Instagram meal prep accounts (recipe ideas, inspiration), Meal prep containers (invest ₹500 in good containers - worth it). Mastery: Month 1-3: Basic (dal rice vegetables). Month 4-6: Variety (try new recipes, cuisines, flavors). Month 7-12: Expert (can meal prep in sleep, teach others). In B.Com, meal prep = sustainable healthy eating (not rely on willpower daily, one Sunday session sets you up for success).',
        '📊 Track Health for 1 Year (Data-Driven Wellness): Track: Daily health metrics for 365 days (see transformation over time). Metrics: Sleep (hours, quality 1-10), Weight (morning, after bathroom, consistent conditions), Energy (1-10 scale, daily average), Mood (1-10 scale, daily average), Workouts (type, duration, intensity), Meals (quality: healthy, neutral, junk - track %), Water (glasses consumed). Tools: Spreadsheet (Google Sheets, simple, customizable, graphs), App (MyFitnessPal, Fitbit, Apple Health - automatic tracking), Wearable (optional, heart rate, sleep stages, steps). Weekly review (10 min): Average sleep: 7.8 hours (target 8 - close!), Average energy: 7.5/10 (was 4/10 Month 1 - improving!), Workouts: 5/7 days (target 5-6 - good!), Meals: 85% healthy (target 80% - excellent!). Monthly review (30 min): Trend graphs (weight declining, energy increasing, sleep improving - visual progress!), Wins (celebrate: ran 5K this month, first time!), Adjust (energy dipping Week 3-4? Check sleep, nutrition, stress). Year-end review: Transform data into story ("Started: Weight 68kg, energy 4/10, sleep 6hrs, no workouts. Ended: Weight 63kg, energy 8/10, sleep 8hrs, workout 250 days. Transformation!"). Share: Blog post, social media (inspire others with data, show what is possible). Why track?: See progress (daily you do not notice, but 1 year graph shows MASSIVE change), Motivation (data proves you are improving), Optimization (data shows what works for YOUR body), Proof (physical evidence of transformation). In B.Com, track for 1 year. Data-driven wellness.',
        '🎓 Become Physical Wellness Advocate: You transformed. Now HELP OTHERS. Become: Physical wellness advocate (teach, inspire, create change at scale). Actions: (1) Share story: Write "My Health Transformation" blog post (before/after, challenges, solutions, lessons - authentic, vulnerable, helpful), Post on social media (reach 1000+ people), Speak at college (guest lecture "Health = Performance" - reach 100+ students). (2) Create resources: "Physical Wellness Guide for B.Com Students" PDF (4 pillars, meal plans, workout routines, tips - actionable, practical), Share in WhatsApp groups, student forums (reach 500+ students). (3) Lead initiatives: Start "Fitness Club" at college (weekly runs, workout sessions, nutrition workshops - build community), Organize "30-Day Health Challenge" (100 students join, track together, prizes for consistency - create movement). (4) Advocate policy: College gym hours (extend to evenings for students), Healthy cafeteria options (add dal rice, fruits, salads - not just junk), Mental health days (allow students take days off for health - holistic wellness). Impact: Help hundreds (your story inspires 100+ students to start healthy habits), Create culture shift (college culture: health = priority, not sacrifice), Build leadership (wellness advocacy = leadership skill, career benefit), Feel fulfilled (helping others = meaning, purpose). In B.Com, your transformation can transform campus. Be advocate. Health = everyone deserves it.'
      ]
    },
    badge: { name: 'Wellness Warrior', emoji: '💪', description: 'Champion of physical health' },
    shareMessage: 'Just committed to physical wellness! 💪 #PhysicalHealth #Wellness'
  },
  {
    id: 'resilience-building',
    title: 'Resilience Building',
    emoji: '🛡️',
    context: 'personal' as const,
    discover: {
      scenario: "Failed Financial Accounting (35/100). Week 1: 'I'm stupid, should quit.' Bed 3 days. Week 2: Skip classes, avoid friends, stop studying. Month 2: Supplementary exam in 2 weeks. Still in bed. Friend: 'One failure shouldn't destroy you. Failure = feedback. Bounce back!'",
      problemExplanation: [
        "Failure = final: 'I'm stupid, should quit.' Bed 2 months. One failure = complete collapse. See failure as end, not feedback",
        "No resilience skills: Never learned how to fail, bounce back, cope. Education taught accounting, not resilience. One failure = collapse",
        "Give up easily: Fixed mindset ('not smart enough'). Fear trying again. Isolate. Classmate failed too, analyzed, studied, passed (72/100)",
        "Can't bounce back: Ruminate ('I'm stupid'), catastrophize ('life ruined'), shame. Stuck 2 months. Classmate bounced back in 2 weeks"
      ],
      solutionApproach: [
        "Reframe failure: Not final, it's feedback. 'Study method wrong, can improve.' Failure = temporary, learning opportunity. Ask: 'What can I learn?'",
        "Growth mindset: 'Not good YET, can learn.' Add 'YET'. Focus on process, not talent. Embrace challenges. Celebrate effort",
        "Coping toolkit: Feel emotions (1 day, not 30). 4-7-8 breathing. Journal. Take action (study 2hrs today). Talk to friend. Self-compassion",
        "Build support: 3-5 close friends, family, mentor. Don't isolate. Call friend: 'I failed, feel terrible.' Get encouragement, perspective, help"
      ]
    },
    video: {
      title: 'Bounce Back Stronger: Resilience for B.Com',
      duration: 8,
      script: `[0:00-0:45] FROM COLLAPSE TO COMEBACK

"You failed Financial Accounting (35/100). Week 1: Devastated ('I am failure'). Cry 3 days. Cannot get out of bed. Week 2: Given up. Skip classes. Stop studying. Month 2: Still in bed. Supplementary exam in 2 weeks. Not studied. Friend: 'You failed ONE exam. You are in bed 2 MONTHS! One failure should not destroy you. You need RESILIENCE - bounce back from setbacks.' You: 'I cannot.' Friend: 'You CAN. Resilience is SKILL (can learn, build, practice). By the end of this video, you will master resilience. Bounce back. Try again. Succeed. Let us start."

[0:45-2:00] REFRAME: FAILURE = FEEDBACK (Not Final)

"You think: 'I failed. I am failure. Final.'

NO. Failure is FEEDBACK.

Financial Accounting failure tells you:

WHAT went wrong:
- Study method ineffective (memorized, did not understand)
- Time management poor (studied last minute)
- Exam strategy weak (panicked, could not recall)

HOW to improve:
- Understand concepts (not just memorize)
- Practice 100 problems (not just read theory)
- Study throughout semester (not last minute)
- Practice exams (build exam skills)

THAT you CAN improve (not permanent, can learn, can pass)

Failure is not:
- Final (end of story)
- Identity (you ARE failure)
- Permanent (failed forever)

Failure is:
- Feedback (information)
- Temporary (this time, not next time)
- Learning opportunity

Classmate also failed. Week 2: Analyzed, made plan. Week 8: Passed supplementary (72/100).

You can too. Reframe: Failure = feedback."

[2:00-3:30] BUILD GROWTH MINDSET (You Can GROW)

"You think: 'I am not smart enough. I do not have talent. I cannot do accounting.'

FIXED MINDSET (limits you).

GROWTH MINDSET: 'I cannot do accounting YET. But I can LEARN.'

Intelligence is not fixed. Intelligence GROWS (through effort, practice, learning).

You failed because:
- Wrong study method (can improve)
- Not enough practice (can practice more)
- Did not understand (can seek help, learn)

NOT because: 'Not smart enough' (you CAN grow smarter through effort)

Build growth mindset:

1. Add YET: 'I cannot do accounting YET' (implies: can learn)

2. Focus on PROCESS: Not 'I am smart/stupid'
   But 'I used wrong method, I can improve method'

3. Embrace CHALLENGES: Challenges = opportunities to GROW

4. Learn from CRITICISM: Professor feedback = valuable (not attack)

5. Celebrate EFFORT: Studied 50 hours? Celebrate! (even if failed, effort matters)

Growth mindset = believe you can GROW.

Failure = need more effort/better strategy (not lack of talent).

Keep growing."

[3:30-5:00] DEVELOP COPING STRATEGIES

"When failure hits, you need COPING TOOLKIT:

1. FEEL EMOTIONS (but do not drown)
   Cry 1 day (OK to feel sad)
   Not 30 days (move forward)
   
   Use: 4-7-8 breathing, journaling, talk to friend

2. REFRAME
   'I am failure' → 'I experienced failure, I can learn'
   
   Write new story: What happened? What did I learn? What next?

3. TAKE ACTION
   After feeling, ACT
   
   Analyze failure → make plan → study 2 hours today
   
   Action builds momentum, reduces helplessness

4. SEEK SUPPORT
   Do NOT isolate
   
   Call friend: 'I failed. I feel terrible. Can we talk?'
   
   Support = encouragement, perspective, help

5. SELF-COMPASSION
   Be KIND to yourself
   
   'You failed one exam. That is OK. You can learn. You can try again. I believe in you.'

Coping toolkit = bounce back faster."

[5:00-6:30] BUILD SUPPORT NETWORK

"You failed. You isolated (avoided friends, lied to parents).

Result: Stuck (no support, cannot bounce back).

BUILD SUPPORT NETWORK:

1. CLOSE FRIENDS (3-5 who you can call when fail)
   They will: Listen, encourage, remind you of strengths

2. FAMILY (tell truth when fail)
   They will: Support you, believe in you, help you try again

3. MENTOR (professor, senior, coach)
   They will: Provide perspective, give advice, encourage persistence

4. PEER SUPPORT (classmates who also struggle)
   Share experiences, support each other, 'I am not alone'

When you fail, instead of isolating:

Call friend: 'I failed. I feel terrible.'
Friend: 'That is hard. But one failure does not define you. I am here.'

Tell parents: 'I failed Financial Accounting.'
Parents: 'We believe in you. You can pass supplementary.'

Talk to professor: 'I failed. Can you help?'
Professor: 'Let me help you understand concepts. Office hours.'

With support: Feel encouraged, not alone, can bounce back.

Do not face setbacks alone."

[6:30-7:45] PRACTICE SELF-COMPASSION

"You failed. Your self-talk: 'I am so stupid! I am failure! I am worthless!'

HARSH (makes you feel WORSE).

Self-compassionate talk: 'I failed Financial Accounting. I feel disappointed. That is OK (everyone fails sometimes). This does not mean I am stupid (I am learning). I can learn from this. I can try again. I believe in myself.'

KIND (makes you feel BETTER, MOTIVATED).

Talk to yourself like you would talk to friend who failed:

Kind. Understanding. Encouraging.

Not harsh. Not critical. Not mean.

Self-compassion fuels: Motivation (get up, try again)

Harsh self-talk fuels: Shame (stay stuck, give up)

Be your own friend."

[7:45-8:00] YOUR CHALLENGE (Bounce Back from Next Setback)

"Supplementary exam: 2 weeks away.

Your choice:

Stay in bed (give up, fail again) OR Get up (study, try again, pass)

Choose: Resilience.

Get up. Reframe (failure = feedback). Study differently (understand, practice). Seek support (professor, friends). Be kind (self-compassion).

Try again. Pass.

THAT is resilience.

Next setback: Use these skills. Bounce back. Grow stronger.

Resilience = essential skill. Build it now."

[End Screen: "Next Video: Mindfulness Practices - Train Your Mind"]`,
      content: [
        'Reframe Failure as Feedback: Failure is not final/identity/permanent. Failure = feedback (what to improve), temporary (this time, not next), learning opportunity. Ask: What is this teaching? How can I improve?',
        'Build Growth Mindset: Intelligence GROWS through effort (not fixed). "I cannot do accounting YET" (can learn). Failure = need more effort/better strategy (not lack of talent). Add YET, focus on process, embrace challenges',
        'Develop Coping Strategies: Feel emotions (cry 1 day, not 30), reframe (write new story), take action (analyze, plan, study 2 hrs), seek support (call friend, tell family), self-compassion (be kind)',
        'Build Support Network: Close friends (3-5 who listen, encourage), family (tell truth, get support), mentor (professor/senior - perspective, advice), peer support (classmates - share, not alone)',
        'Practice Self-Compassion: Talk to yourself like friend (kind, understanding, encouraging) NOT harsh ("I am stupid"). Self-compassion fuels motivation. Harsh talk fuels shame/giving up',
        'Resilience = Skill: Can learn, build, practice (not innate). Like muscle (builds through use). Every setback = practice bouncing back. Build capacity over time',
        'B.Com Applications: Exam failure bounce back, job rejection persistence, startup failure learn and pivot, relationship breakup recovery, career setback resilience'
      ]
    },
    quiz: {
      title: 'Resilience Quiz',
      questions: [
        {
          id: 21,
          question: 'Failed exam. You: Month 2, still in bed. Classmate: Failed too, Week 8 passed supplementary. What is resilience?',
          options: [
            'Never failing',
            'Bouncing back—fail, learn, try again, succeed',
            'Avoiding challenges',
            'Being perfect'
          ],
          correct: 1,
          explanation: 'Resilience = bouncing back. Process: Fail → feel emotions (1 day, not 30) → reframe (failure = feedback) → analyze (what went wrong?) → learn → try again → succeed. Classmate: analyzed, studied differently, passed in 8 weeks. You: stuck 2 months. Resilience = recover and persist. Everyone fails. Resilient people bounce back!'
        },
        {
          id: 22,
          question: 'Failed exam. Think: "I am failure, stupid, should quit." Friend: "Failure is feedback!" View failure how?',
          options: [
            'Final verdict, defines you forever',
            'Feedback—what went wrong, how to improve',
            'Weakness, not good enough',
            'Avoid at all costs'
          ],
          correct: 1,
          explanation: 'Failure = feedback, not final verdict. Tells you: WHAT went wrong (study method), HOW to improve (understand concepts, practice problems, study consistently), THAT you can improve (not permanent). Analyze, learn, try again differently → pass! Failure temporary, not identity. Reframe: What is this teaching me? How improve? Then learn, try again!'
        },
        {
          id: 23,
          question: '"Not smart enough for B.Com. No talent for accounting. Cannot do this." Fixed mindset. Growth mindset?',
          options: [
            'Challenges are threats, avoid',
            'Challenges = grow—intelligence grows through effort',
            'Challenges = failures, avoid',
            'Only do what already good at'
          ],
          correct: 1,
          explanation: 'Growth mindset: "Cannot do accounting YET." Intelligence GROWS through effort, practice, learning. Add YET. Focus on process (not "smart/stupid" but "wrong method, can improve"). Embrace challenges (opportunities to grow). Failure = need better strategy. Accounting = SKILL (can learn), not talent (have or not). Keep growing!'
        },
        {
          id: 24,
          question: 'Failed. Self-talk: "So stupid! Failure! Worthless!" Result: worse, bed, give up. Self-compassion?',
          options: [
            'Being soft, low standards',
            'Treat yourself with kindness like friend',
            'Low standards, no improvement',
            'Giving up, accept failure'
          ],
          correct: 1,
          explanation: 'Self-compassion = talk to yourself like friend. Kind, understanding, encouraging NOT harsh. "Failed. Disappointed. OK—everyone fails. Not stupid—learning, can improve. Can try again. Believe in myself." Kindness fuels motivation. Harsh talk fuels shame/giving up. Be your own friend. Kind self-talk = bounce back, try again, succeed!'
        },
        {
          id: 25,
          question: 'Failed. You: isolate, Month 2 stuck. Classmate: told friends/family, Week 8 passed. Build resilience how?',
          options: [
            'Face alone, be tough',
            'Support network + practice bouncing back',
            'Avoid all challenges',
            'Be tough, need no one'
          ],
          correct: 1,
          explanation: 'Build resilience: SUPPORT NETWORK (friends encourage, family believes, mentor guides, peer support—not alone) + PRACTICE bouncing back (every setback = practice). Isolated = stuck. Support = bounce back. Build network BEFORE failure. Every setback trains resilience muscle. Resilience = SKILL (can learn, build, strengthen). Support + practice = resilience!'
        }
      ]
    },
    challenge: {
      title: 'Resilience Challenge',
      description: 'From collapse to comeback - bounce back stronger',
      contexts: {
        academic: {
          title: 'Academic Resilience Excellence',
          description: 'Failed Financial Accounting (35/100). Devastated, in bed 2 months, given up. Supplementary exam in 2 weeks. Goal: Bounce back, study differently, pass exam, build resilience.',
          instructions: [
            '1. Week 1 Day 1-2 - Feel Emotions Then Decide (4 hours): Day 1 (exam result day): Failed (35/100). Feel devastated (cry, be sad - emotions are valid). Allow yourself: Cry (release emotions, do not bottle up), Be sad (disappointment is normal), Rest (take 1 day to process). Day 2: Decision time. You have choice: (A) Stay devastated, give up, fail supplementary (no resilience) OR (B) Feel emotions, then GET UP, bounce back, try again (resilience). Choose B. Say out loud: "I failed one exam. I feel terrible. But I will NOT give up. I will bounce back. I will try again. I will pass." (Commitment to resilience). Call friend: "I failed. I feel devastated. But I am going to try again. Will you support me?" Friend: "Yes! I am here. You can do this!" (Support secured).',
            '2. Week 1 Day 3-4 - Reframe and Analyze (8 hours): Day 3: REFRAME failure. OLD FRAME: "I am failure. I am stupid. I should quit." (Final, identity, hopeless). NEW FRAME: "I EXPERIENCED failure in Financial Accounting. This is FEEDBACK. What went wrong? How can I improve? I can try again." (Feedback, actionable, hopeful). Write in journal: "Financial Accounting Failure Analysis: (1) What went wrong: Study method (memorized formulas, did not understand concepts), Time management (studied last 2 days, not throughout semester), Exam strategy (panicked, mind blank). (2) What I learned: Rote learning fails (need to understand), Cramming ineffective (need consistent study), Panic hurts performance (need calm strategies). (3) How I will improve: Understand concepts (not memorize), Practice 100 problems (apply concepts), Study 2 hrs/day for 2 weeks (consistent), Do 5 practice exams (build exam skills), Use 4-7-8 breathing before exam (calm nerves)." Analysis complete. Have plan.',
            '3. Week 1 Day 5-7 - Build Support and Start Action (12 hours): Day 5: BUILD SUPPORT. Tell parents truth: "I failed Financial Accounting. I have supplementary in 2 weeks. I am going to study differently and pass. Will you support me?" Parents: "We believe in you. Study hard. You can do this!" (Support, belief). Talk to professor: "I failed. I want to understand where I went wrong. Can you help?" Professor: "Come to office hours. I will help you understand concepts." (Guidance secured). Join study group: 3 classmates (also taking supplementary). Study together, support each other. Day 6-7: START ACTION (do not wait, act NOW). Study 4 hours/day (understand concepts, practice problems). Action builds momentum (feel less helpless, more in control). Week 1 complete: Felt emotions (Day 1-2), Reframed (Day 3-4), Built support (Day 5), Started action (Day 6-7). Resilience process begun!',
            '4. Week 2 - Study with New Method (60 hours): Week 2: Supplementary exam in 1 week. Study intensively (but DIFFERENTLY than before). NEW STUDY METHOD: (1) UNDERSTAND (not memorize): Each concept: Read theory, Understand WHY (not just WHAT), Teach concept to friend (if can teach, you understand). (2) PRACTICE: 100 problems (apply concepts, build skills, make mistakes, learn from mistakes). (3) PROFESSOR HELP: Office hours 3× (ask questions, clarify doubts, get guidance). (4) PRACTICE EXAMS: 5 practice exams (timed, exam conditions, build exam skills, reduce panic). (5) STUDY GROUP: Study with 3 classmates (explain to each other, quiz each other, support). Week 2: Study 8-10 hours/day (focused, understanding, practicing). Self-compassion: When struggle: "This is hard. But I am learning. I am improving. I can do this." (Kind, not harsh). Support: Friends check in ("How is study going?"). Parents encourage ("We believe in you!"). Professor helps (office hours). Feel supported, motivated, capable.',
            '5. Supplementary Exam Day - Apply Resilience (3 hours): Exam day: Morning: 4-7-8 breathing 5 min (calm nerves, sharp focus), Breakfast (fuel brain), Positive self-talk: "I studied differently. I understand concepts. I practiced 100 problems. I am prepared. I can do this." (Confidence). Exam hall: Before exam: 4-7-8 breathing 2 min (calm, focused, ready). During exam: Read questions calmly (not panic), Apply concepts (understand, not just recall formulas), If stuck: Breathe (4-7-8 one round), move to next question, return later. After exam: Whatever result, you TRIED (that is resilience - bounced back, tried again, gave your best). Week later: Result: PASSED! (scored 68/100!). You: Bounced back from failure (collapsed Month 1, recovered Month 2, passed Month 3). Built resilience!',
            '6. Month 3-6 - Build Resilience Muscle (ongoing): Month 3-6: You passed supplementary (resilience worked!). Now BUILD RESILIENCE MUSCLE (face more challenges, practice bouncing back, build capacity). Challenges faced: Month 3: Failed quiz in another subject (scored 8/15). OLD you: Would collapse. NEW you: Reframe ("Feedback. What to improve?"), Study differently, Retake quiz (scored 14/15). Bounced back in 1 week (not 2 months!). Month 4: Job application rejected (applied for internship, rejected). OLD you: "I am not good enough. I will never get job." NEW you: "Rejection is normal (100 applications = 5 offers = 95 rejections normal!). Feedback: Improve resume, practice interview. Apply to 20 more companies." Applied 20, got 3 interviews, got 1 offer! Bounced back. Month 5: Relationship issue (argument with partner). OLD you: "Relationship is over. I am terrible partner." NEW you: "We had conflict. That is normal. I can apologize, communicate, resolve." Apologized, talked, resolved. Relationship stronger. Each setback: Practice bouncing back (faster each time, stronger each time). Resilience muscle building!',
            '7. Month 6 - Share and Help Others (10 hours): Month 6: You built resilience (bounced back from: exam failure, quiz failure, job rejection, relationship conflict). Share story: "How I Bounced Back from Failing Financial Accounting." Post: (1) Failure (35/100, devastated, collapsed 2 months), (2) Resilience skills (reframe, growth mindset, coping, support, self-compassion), (3) Comeback (studied differently, passed 68/100), (4) Lessons (failure is feedback, resilience is skill, can bounce back). Post: 1K likes, 150 shares. 80 students message: "I failed exam too. I am devastated. How did you bounce back?" You: Reply to all (share resilience skills, encourage). Start "Resilience Support Group" (15 members, students who failed exams, support each other, share coping strategies, encourage bounce back). Month 6: 10 members passed supplementary exams (resilience worked for them too!). Professor: "You demonstrated remarkable resilience. Failed, bounced back, passed, now helping others. Excellent growth. A grade!" You: Built resilience, passed exam, helped 80 students. Resilience = essential skill.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Seeing failure as final: "I failed, I am failure, I should quit." Result: Give up. Solution: Failure = feedback (what to improve), temporary (can pass next time).',
            '• Harsh self-talk: "I am stupid! I am worthless!" Result: Shame, paralyzed, give up. Solution: Self-compassion ("That is hard. I can learn. I believe in myself").',
            '• Isolation: Avoid friends, lie to parents, face alone. Result: Stuck (no support). Solution: Tell truth, seek support (friends, family, professor - they will help).',
            '• Rumination: Replay failure constantly, cannot move forward. Result: Stuck in past. Solution: Feel emotions (1 day), then take ACTION (analyze, plan, study - move forward).',
            '• Fixed mindset: "I am not smart enough, I do not have talent." Result: Give up. Solution: Growth mindset ("I cannot do it YET, I can LEARN through effort").'
          ],
          successCriteria: [
            '✅ You feel emotions then decide (cry 1 day, then choose to bounce back, commit to trying again)',
            '✅ You reframe and analyze (failure = feedback, write analysis: what went wrong, how to improve)',
            '✅ You build support (tell friend, parents, professor - get encouragement, guidance, help)',
            '✅ You take action (study 60 hours over 2 weeks, new method: understand + practice + professor help)',
            '✅ You pass supplementary (68/100, bounced back from 35/100 failure!)',
            '✅ You build resilience muscle (face more setbacks Month 3-6, bounce back faster each time)',
            '✅ You help 80 students (share story, start support group, 10 pass supplementary)',
            '✅ Professor recognizes resilience (A grade, praise for growth and helping others)'
          ]
        },
        professional: {
          title: 'Professional Resilience Mastery',
          description: 'Startup founder. Launched product, failed (no users, no revenue, burned ₹5L). Devastated, considering quitting. Investor: "Startups fail. Resilience = try again." Goal: Bounce back from startup failure, learn, pivot, build resilient entrepreneurship.',
          instructions: [
            '1. Month 1 - Process Failure (Days 1-30, 40 hours): Product launch: Failed (built for 6 months, launched, 0 users signed up, 0 revenue, burned ₹5L investment). Week 1: Devastated ("I am terrible entrepreneur. I wasted 6 months, ₹5L. I should quit."). Cry, feel hopeless, consider quitting. Week 2: Allow emotions (disappointment, shame, grief - valid emotions). But do not drown (feel, then move forward). Journal: Write feelings (process emotions, reduce overwhelm). Talk to co-founder: "I feel like failure." Co-founder: "I feel same. But we learned so much. We can try again." (Shared experience, support). Week 3-4: Reframe. OLD: "I am failure. Startup failed. I should quit." NEW: "Startup ATTEMPT failed. This is FEEDBACK. What went wrong? How can we improve? We can try again (pivot, new product, apply learnings)." Decision: We will NOT quit. We will bounce back. We will try again (resilience).',
            '2. Month 2 - Analyze Failure Deeply (Days 31-60, 60 hours): Month 2: Analyze why product failed (extract learnings). FAILURE ANALYSIS: Talk to 20 people who did NOT sign up: "Why did you not use our product?" Feedback: (1) "Did not solve my problem" (10 people - product-market fit issue), (2) "Too complicated" (5 people - UX issue), (3) "Did not know it existed" (5 people - marketing issue). ROOT CAUSES: (1) NO PRODUCT-MARKET FIT (built what WE thought users need, not what users ACTUALLY need), (2) POOR UX (complicated, not simple), (3) WEAK MARKETING (no one knew product existed). LEARNINGS: (1) Talk to users BEFORE building (validate problem, validate solution - do not assume), (2) Build simple MVP (not complicated full product - test fast, learn fast), (3) Market early (build audience while building product, not after). These learnings = valuable (worth ₹5L and 6 months - now know what NOT to do, what TO do). Investor meeting: "We failed. Here is analysis. Here is what we learned. We want to try again (pivot)." Investor: "Excellent analysis. Most founders quit after first failure. You bounced back, learned, want to try again. THAT is resilience. I will invest ₹3L more. Try again." (Investor invests in resilience, not just idea!).',
            '3. Month 3-4 - Pivot and Build V2 (Days 61-120, 120 hours): Month 3-4: Apply learnings. Build V2 (pivot). NEW APPROACH: (1) TALK TO USERS FIRST: Interview 50 potential users ("What is your biggest problem?"). Find: Common problem (expense tracking for students - current apps complicated, not for students). (2) BUILD SIMPLE MVP: 2 weeks (not 6 months!). Simple expense tracker (add expense, see total, categorize - basic, works). (3) TEST WITH 10 USERS: Give to 10 students. Watch them use. Feedback: "Simple! I like it! But need: split bills feature." Iterate: Add split bills (1 week). Test again: "Perfect!" (4) MARKET WHILE BUILDING: Post on college WhatsApp groups, Instagram. Build waitlist (200 students interested before launch!). Month 4: Launch V2. Result: 200 students sign up Day 1 (was 0 for V1!), 150 active users Week 1, Revenue: ₹15K Month 1 (was ₹0 for V1!). SUCCESS! (Because: Learned from failure, applied learnings, built differently).',
            '4. Month 5-12 - Scale and Build Resilience Mindset (ongoing): Month 5-12: V2 succeeds (1000 users, ₹50K/month revenue). But challenges continue: Month 5: Technical bug (app crashes, users angry). OLD you: Panic, devastate. NEW you: "Bug is feedback. Fix it. Communicate with users." Fixed in 2 days. Users happy. Month 7: Competitor launches (better funded, threatens market share). OLD you: "We will lose! We should quit!" NEW you: "Competition validates market. We have advantage: students love us, we understand them. Focus on our strengths." Doubled down on student focus. Retained users. Month 10: Co-founder wants to quit (burnout, different vision). OLD you: "Startup is over!" NEW you: "Setback. Can I continue solo? Can I find new co-founder?" Continued solo, found new co-founder Month 11. Each challenge: Practice resilience (reframe, analyze, take action, seek support, persist). Build resilience MINDSET (setbacks are normal, can handle, can bounce back, can grow).',
            '5. Year 2 - Reflect on Resilience Journey (ongoing): Year 2: Startup thriving (5000 users, ₹2L/month revenue, profitable!). Reflect on journey: Year 0: Failed V1 (0 users, ₹5L burned, devastated, almost quit). Year 1: Bounced back (analyzed, learned, pivoted, launched V2, 1000 users, ₹50K/month). Year 2: Scaled (5000 users, ₹2L/month, profitable). Faced: Product failure, technical bugs, competition, co-founder quit. Bounced back from ALL (resilience muscle strong now!). Realize: V1 failure was NECESSARY (taught what not to do, led to V2 success). Without failure: Would not have learned, would not have built successful product. Failure = teacher. Investor: "You demonstrated resilience. Most founders quit after first failure. You bounced back, learned, built successful startup. Resilience = entrepreneurship essential skill." You: Built resilient entrepreneurship (can handle failures, setbacks, challenges - bounce back, learn, grow, succeed).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Quitting after first failure: V1 failed → quit. Result: No success (never built V2). Solution: Bounce back (analyze, learn, try again - V2 succeeds).',
            '• Not analyzing failure: Failed but do not know why. Result: Repeat same mistakes. Solution: Deep analysis (talk to users, find root causes, extract learnings).',
            '• Isolation: Face failure alone, no support. Result: Harder to bounce back. Solution: Co-founder, investor, mentor support (shared burden, encouragement).',
            '• Seeing failure as waste: "Wasted ₹5L, 6 months." Result: Regret, bitterness. Solution: Reframe ("Invested ₹5L in learning. Now know what works. Worth it.").',
            '• Fixed mindset: "I am not entrepreneur material." Result: Quit. Solution: Growth mindset ("I am learning entrepreneurship. First attempt failed. Next will be better").'
          ],
          successCriteria: [
            '✅ You process failure (feel emotions, then decide to bounce back, commit to trying again)',
            '✅ You analyze deeply (talk to 20 non-users, find root causes, extract learnings)',
            '✅ You secure support (investor reinvests ₹3L, believes in your resilience)',
            '✅ You pivot and build V2 (apply learnings, build in 2 months, test with users, launch)',
            '✅ V2 succeeds (200 users Day 1, 1000 users Month 4, ₹50K/month revenue)',
            '✅ You handle ongoing challenges (bugs, competition, co-founder quit - bounce back from all)',
            '✅ You scale to success (5000 users, ₹2L/month, profitable by Year 2)',
            '✅ Investor recognizes resilience (resilience = entrepreneurship essential skill, continued funding)'
          ]
        },
        personal: {
          title: 'Personal Resilience Wisdom',
          description: 'Personal: Relationship breakup (3-year relationship ended). Devastated, heartbroken, cannot function. Month 1: In bed, crying, given up on love. Goal: Bounce back from heartbreak, heal, grow, build resilience.',
          instructions: [
            '1. Month 1 - Allow Grief (Days 1-30): Breakup: 3-year relationship ended (partner: "I do not love you anymore. I am leaving."). Week 1-2: ALLOW GRIEF (heartbreak is valid, painful, needs time). Cry (release pain, do not bottle up), Be sad (normal to grieve loss), Rest (take time to process, do not rush healing). Do NOT: Force yourself to "be strong" immediately (grief needs time), Suppress emotions (bottling up worsens pain), Rush into new relationship (rebound - avoid pain, not heal pain). DO: Feel fully (cry when need to cry, be sad when sad, allow grief process), Journal (write feelings, memories, process loss), Talk to friend (share pain, reduce isolation). Month 1: Mostly grieving (hard, painful, but necessary). End of Month 1: Grief still there but slightly less intense (healing beginning).',
            '2. Month 2 - Reframe and Learn (Days 31-60): Month 2: Grief lessening. Time to REFRAME and LEARN. OLD FRAME: "I am unlovable. I will never find love again. I am failure at relationships." (Final, identity, hopeless). NEW FRAME: "This relationship ended. That is painful. But: I am NOT unlovable (one person leaving does not mean no one will love me), I CAN find love again (many people find love after heartbreak), I am NOT failure (relationships end, that is life, not failure)." LEARN from relationship: What went well? (3 years of love, growth, memories - grateful for that). What went wrong? (communication issues, grew apart, different life goals). What did I learn? (Communication is essential, need aligned life goals, red flags to notice). How will I grow? (Work on communication skills, clarify my life goals, choose better next time). Write: "Relationship Learnings" (extract wisdom from pain - pain is not wasted if you learn from it). Month 2: Reframed (not unlovable, can find love again), Learned (communication, goals, red flags - wiser now).',
            '3. Month 3-6 - Rebuild Life (Days 61-180): Month 3-6: Rebuild life (not just recover, but GROW). REBUILD: (1) SELF: Therapy (process heartbreak, heal, grow - 8 sessions), Self-care (sleep, exercise, nutrition, mindfulness - physical and mental health), Hobbies (guitar, photography - rediscover self outside relationship, build identity), Personal growth (read, learn, develop - become better version of self). (2) SOCIAL: Friends (reconnect - was focused on relationship, neglected friends. Now rebuild friendships), Family (spend time, strengthen bonds), New social circles (join clubs, meet new people - expand social network). (3) CAREER: Focus on career (was distracted by relationship issues. Now focus: excel at work, get promoted, build career). (4) INDEPENDENCE: Build independent happy life (not dependent on relationship for happiness - can be happy alone, complete alone). Month 6: Transformed! Health: Excellent (exercise daily, sleep well, fit, energized), Social: Strong (rebuilt friendships, new friends, connected), Career: Promoted (focused, excelled, ₹8K raise), Independence: Happy alone (do not NEED relationship to be happy, WANT relationship but not NEED). Healed and GREW (not just recovered, but better than before heartbreak!).',
            '4. Month 6-12 - Open to Love Again (Days 180-365): Month 6-12: Healed, grown, ready to open to love again (but wiser, healthier, stronger). Month 8: Meet someone new (through friends). Take it slow (not rush, not rebound - heal first, then date). Communicate well (learned from past - communicate openly, honestly, early). Check alignment (life goals, values - learned to check compatibility early). Month 12: New relationship (6 months, healthy, happy, better than previous!). Why better? You are: Healed (processed heartbreak, not carrying baggage), Wiser (learned from past relationship, avoid same mistakes), Stronger (built resilience, can handle challenges), Independent (happy alone, relationship adds to happiness, not creates it). Resilience enabled: Bounce back from heartbreak (Month 1 devastated → Month 6 healed and grown), Learn and grow (relationship failure → learnings → better next relationship), Find love again (not "never find love" - found better love because grew from heartbreak). You: Built resilience through heartbreak (most painful setback, bounced back, grew, thrived).',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Suppressing grief: "Be strong, do not cry." Result: Bottled emotions, longer healing. Solution: Allow grief (cry, be sad, process - healing happens through feeling).',
            '• Rebound relationship: Jump into new relationship immediately (avoid pain). Result: Not healed, repeat same patterns. Solution: Heal FIRST (6 months solo, therapy, growth), THEN date.',
            '• Believing "unlovable": "I will never find love again." Result: Hopeless, closed to love. Solution: Reframe ("One relationship ended. I can find love again. I am lovable").',
            '• Not learning: Heartbreak but do not learn from relationship. Result: Repeat same mistakes next relationship. Solution: Extract learnings (what went wrong, how to grow, what to do differently).',
            '• Isolation: Cut off friends, family, face heartbreak alone. Result: Longer healing, depression risk. Solution: Lean on support (friends, family, therapy - support = faster healing).'
          ],
          successCriteria: [
            '✅ You allow grief (Month 1: cry, be sad, process emotions - do not suppress, do not rush)',
            '✅ You reframe (not "unlovable", but "relationship ended, I can find love again, I am lovable")',
            '✅ You learn from relationship (communication issues, life goals misalignment, red flags - extract wisdom)',
            '✅ You rebuild life (therapy, self-care, hobbies, friends, career - heal and GROW)',
            '✅ You transform (Month 6: health excellent, social strong, career promoted, independent happy)',
            '✅ You open to love again (Month 8: meet someone, Month 12: healthy relationship, better than before)',
            '✅ You demonstrate resilience (heartbreak → heal → grow → love again, wiser and stronger)',
            '✅ You help others (share healing journey, support friends through breakups, resilience model)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🔄 Reframe Failure as Feedback: You understand: Failure is not final (end of story), identity (you ARE failure), permanent (failed forever). Failure is FEEDBACK (information about what to improve), temporary (this time, not next time), learning opportunity (learn, improve, grow). When you fail: You ask: "What is this teaching me? What went wrong? How can I improve?" (Extract learning, not just feel bad). You reframe: "I experienced failure" (not "I am failure"), "This is feedback" (not "This is final"), "I can improve" (not "I cannot do this"). Result: Failure becomes teacher (every failure teaches what to improve), Growth (learn from failures, become better), Persistence (if failure is temporary and improvable, worth trying again). You bounce back faster (reframe quickly, learn quickly, try again quickly).',
        '🧠 Build Growth Mindset: You believe: Intelligence GROWS through effort (not fixed). Abilities can be DEVELOPED (through practice, learning, persistence). You add "YET" ("I cannot do accounting YET" - implies can learn). You focus on PROCESS (not "I am smart/stupid" but "I used wrong method, I can improve method"). You embrace CHALLENGES (challenges = opportunities to grow, not threats). You learn from CRITICISM (feedback = valuable, not attack). You celebrate EFFORT (studied 50 hours? Celebrate! Even if failed, effort matters). Result: Persist through challenges (if can grow, worth trying), Learn from failures (failure = need more effort/better strategy, not lack of talent), Keep improving (continuous growth, no ceiling). Growth mindset = resilience foundation (believe you can grow = keep trying despite setbacks).',
        '🛠️ Use Coping Strategies: When setback happens, you use COPING TOOLKIT: (1) Feel emotions (cry, be sad - OK, but 1 day not 30. Feel then move forward), (2) Reframe (write new story: failure = feedback, can improve), (3) Take action (analyze, make plan, take small step - action reduces helplessness), (4) Seek support (call friend, tell family, talk to mentor - do not isolate), (5) Self-compassion (talk to yourself like friend - kind, encouraging, not harsh). You practice toolkit every setback (build habit, get better at bouncing back). Result: Bounce back faster (Month 1 failure: took 2 months to recover. Month 6 failure: took 1 week to recover. Resilience muscle stronger!), Handle setbacks better (less devastated, more "OK this is setback, I can handle this"), Grow from setbacks (every setback = practice resilience, build capacity).',
        '🤝 Leverage Support Network: You built support network: Close friends (3-5 who listen, encourage when you fail), Family (tell truth, get support and belief), Mentor (professor, senior, investor - perspective, advice, guidance), Peer support (classmates, co-founders, community - share struggles, "I am not alone"). When you fail: You do NOT isolate (avoid people, lie, face alone). You DO seek support (call friend, tell family, talk to mentor - share burden, get encouragement). Result: Feel supported (not alone, people believe in you, people help you), Bounce back faster (support = encouragement, perspective, practical help - recover quicker), Stronger relationships (vulnerability deepens bonds, people appreciate you sharing). Support network = resilience safety net (when fall, network catches you, helps you get back up).',
        '💙 Practice Self-Compassion: When you fail, you talk to yourself with KINDNESS (like you would talk to friend who failed). Not harsh: "I am stupid! I am failure!" (makes you feel worse, paralyzed, give up). But kind: "I failed. I feel disappointed. That is OK. Everyone fails. I am learning. I can improve. I can try again. I believe in myself." (Makes you feel better, motivated, persist). You understand: Self-compassion is NOT low standards (you still try to improve, but you are KIND while doing it), Self-compassion IS being kind while learning, improving, trying again (kindness fuels motivation, harshness fuels shame). Result: Bounce back faster (kind talk = get up, take action vs harsh talk = stay stuck in shame), Better mental health (less shame, less depression, more self-worth), Better performance (motivated to improve, not paralyzed by shame). Self-compassion = resilience fuel.'
      ],
      improvements: [
        '📚 Read "Grit" by Angela Duckworth: Read: 300-page book, 20 hours (research on resilience, perseverance, success). Key learnings: Grit = passion + perseverance (not just talent), Success = sustained effort over time (not overnight), Growth mindset enables grit (believe you can improve = keep trying), Deliberate practice builds skills (not just time, but focused improvement). Apply: Build grit (find passion, persist despite setbacks, practice deliberately, grow continuously). Measure: Grit scale (rate your perseverance, passion - track improvement over time). Share: Teach 5 friends (spread grit mindset). Investment: 20 hours reading will transform how you approach challenges, setbacks, long-term goals. Research-backed, inspiring, practical.',
        '🛠️ Build Resilience Toolkit: You have basic coping strategies. Good. But build COMPREHENSIVE TOOLKIT: (1) Emotional: 4-7-8 breathing (instant calm), Journaling (process emotions), Meditation (mind calm), Exercise (stress relief), Talk therapy (professional support). (2) Cognitive: Reframing (failure = feedback), Growth mindset (can improve), Gratitude (notice good despite setback), Perspective (will this matter in 5 years?). (3) Behavioral: Take action (small steps, build momentum), Seek support (call friend, family, mentor), Problem-solve (analyze, make plan, execute). (4) Social: Support network (friends, family, mentor, peers), Community (join resilience groups, share experiences), Give back (help others facing setbacks - helping others helps you). Practice each tool (know when to use what: anxious? Breathe. Stuck? Take action. Alone? Seek support.). Build comprehensive toolkit = handle any setback.',
        '🎯 Face Voluntary Challenges: You bounce back from INVOLUNTARY setbacks (exam failure, breakup - did not choose). Good. But VOLUNTARILY face challenges (choose difficult things, build resilience proactively): Voluntary challenges: (1) Apply for stretch job (might get rejected - practice handling rejection), (2) Start side project (might fail - practice bouncing back), (3) Learn difficult skill (might struggle - practice persistence), (4) Have difficult conversation (might go wrong - practice handling conflict), (5) Try new things (might fail - practice trying despite fear). Why voluntary challenges?: Build resilience BEFORE crisis (practice bouncing back from small failures, build capacity for big failures), Expand comfort zone (do scary things, grow confidence), Accelerate growth (challenges = learning opportunities). Each voluntary challenge: Practice resilience skills (reframe, cope, persist, learn). Build resilience muscle proactively (not just react to involuntary setbacks, but seek challenges to grow). In B.Com, seek challenges (do not avoid). Each challenge = resilience training. Build strong resilience muscle.',
        '📊 Track Resilience Growth: You bounce back from setbacks. Good. But TRACK (measure resilience growth): Track: (1) Setbacks faced (list each setback: exam failure, job rejection, project failure, relationship issue), (2) Bounce-back time (how long to recover? Month 1 failure: 2 months recovery. Month 6 failure: 1 week recovery. Improving!), (3) Learnings extracted (what did you learn from each setback? Write down.), (4) Actions taken (how did you bounce back? What worked?), (5) Growth (how did setback make you stronger, wiser?). Review quarterly: How many setbacks faced? (More setbacks = more resilience practice!), How fast bouncing back? (Faster over time = resilience muscle stronger), What learned? (Wisdom accumulated from failures), How grown? (Stronger, wiser, more capable). Year-end: Resilience story ("Faced 10 setbacks this year. Bounced back from all. Learned: [lessons]. Grew: [growth]. Resilience score: 8/10, was 3/10."). Share (inspire others). Tracking shows: Resilience is GROWING (not static - builds over time through practice). You are getting BETTER at handling setbacks (bounce back faster, learn more, grow more). Proof of growth = motivation to continue.',
        '👥 Help Others Build Resilience: You built resilience (bounced back from failures). Now HELP OTHERS: Mentor: Friend fails exam (devastated, wants to quit). You: Share your story ("I failed too. I was in bed 2 months. But I bounced back. Here is how: reframe, analyze, study differently, seek support, self-compassion. You can bounce back too!"). Help friend: Reframe their failure, Make study plan, Offer to study together, Encourage them. Friend: Passes supplementary (your support helped!). Teach: Workshop "Building Resilience" (2 hours, 40 people, teach: what is resilience, how to bounce back, coping strategies, growth mindset, support). Create: "Resilience Toolkit" PDF (strategies, resources, examples - share with 200 students). Lead: "Resilience Support Group" (20 members, students facing setbacks, share experiences, support each other, practice resilience together). Impact: Help 50+ people bounce back from setbacks (your resilience story inspires their resilience). Build resilience culture (normalize failure, normalize bounce back, celebrate persistence). Feel fulfilled (helping others = meaning, purpose). Teaching resilience = deepens your resilience (teach = best way to learn).'
      ],
      nextSteps: [
        '📚 Read "Grit" by Angela Duckworth: Read: 300-page book, 20 hours (research on resilience, perseverance, success). Key learnings: Grit = passion + perseverance (not just talent), Success = sustained effort over time (not overnight), Growth mindset enables grit (believe you can improve = keep trying), Deliberate practice builds skills (not just time, but focused improvement). Apply: Build grit (find passion, persist despite setbacks, practice deliberately, grow continuously). Measure: Grit scale (rate your perseverance, passion - track improvement over time). Share: Teach 5 friends (spread grit mindset). Investment: 20 hours reading will transform how you approach challenges, setbacks, long-term goals. Research-backed, inspiring, practical.',
        '🛠️ Build Resilience Toolkit: You have basic coping strategies. Good. But build COMPREHENSIVE TOOLKIT: (1) Emotional: 4-7-8 breathing (instant calm), Journaling (process emotions), Meditation (mind calm), Exercise (stress relief), Talk therapy (professional support). (2) Cognitive: Reframing (failure = feedback), Growth mindset (can improve), Gratitude (notice good despite setback), Perspective (will this matter in 5 years?). (3) Behavioral: Take action (small steps, build momentum), Seek support (call friend, family, mentor), Problem-solve (analyze, make plan, execute). (4) Social: Support network (friends, family, mentor, peers), Community (join resilience groups, share experiences), Give back (help others facing setbacks - helping others helps you). Practice each tool (know when to use what: anxious? Breathe. Stuck? Take action. Alone? Seek support.). Build comprehensive toolkit = handle any setback.',
        '🎯 Face Voluntary Challenges: You bounce back from INVOLUNTARY setbacks (exam failure, breakup - did not choose). Good. But VOLUNTARILY face challenges (choose difficult things, build resilience proactively): Voluntary challenges: (1) Apply for stretch job (might get rejected - practice handling rejection), (2) Start side project (might fail - practice bouncing back), (3) Learn difficult skill (might struggle - practice persistence), (4) Have difficult conversation (might go wrong - practice handling conflict), (5) Try new things (might fail - practice trying despite fear). Why voluntary challenges?: Build resilience BEFORE crisis (practice bouncing back from small failures, build capacity for big failures), Expand comfort zone (do scary things, grow confidence), Accelerate growth (challenges = learning opportunities). Each voluntary challenge: Practice resilience skills (reframe, cope, persist, learn). Build resilience muscle proactively (not just react to involuntary setbacks, but seek challenges to grow). In B.Com, seek challenges (do not avoid). Each challenge = resilience training. Build strong resilience muscle.',
        '📊 Track Resilience Growth: You bounce back from setbacks. Good. But TRACK (measure resilience growth): Track: (1) Setbacks faced (list each setback: exam failure, job rejection, project failure, relationship issue), (2) Bounce-back time (how long to recover? Month 1 failure: 2 months recovery. Month 6 failure: 1 week recovery. Improving!), (3) Learnings extracted (what did you learn from each setback? Write down.), (4) Actions taken (how did you bounce back? What worked?), (5) Growth (how did setback make you stronger, wiser?). Review quarterly: How many setbacks faced? (More setbacks = more resilience practice!), How fast bouncing back? (Faster over time = resilience muscle stronger), What learned? (Wisdom accumulated from failures), How grown? (Stronger, wiser, more capable). Year-end: Resilience story ("Faced 10 setbacks this year. Bounced back from all. Learned: [lessons]. Grew: [growth]. Resilience score: 8/10, was 3/10."). Share (inspire others). Tracking shows: Resilience is GROWING (not static - builds over time through practice). You are getting BETTER at handling setbacks (bounce back faster, learn more, grow more). Proof of growth = motivation to continue.',
        '👥 Help Others Build Resilience: You built resilience (bounced back from failures). Now HELP OTHERS: Mentor: Friend fails exam (devastated, wants to quit). You: Share your story ("I failed too. I was in bed 2 months. But I bounced back. Here is how: reframe, analyze, study differently, seek support, self-compassion. You can bounce back too!"). Help friend: Reframe their failure, Make study plan, Offer to study together, Encourage them. Friend: Passes supplementary (your support helped!). Teach: Workshop "Building Resilience" (2 hours, 40 people, teach: what is resilience, how to bounce back, coping strategies, growth mindset, support). Create: "Resilience Toolkit" PDF (strategies, resources, examples - share with 200 students). Lead: "Resilience Support Group" (20 members, students facing setbacks, share experiences, support each other, practice resilience together). Impact: Help 50+ people bounce back from setbacks (your resilience story inspires their resilience). Build resilience culture (normalize failure, normalize bounce back, celebrate persistence). Feel fulfilled (helping others = meaning, purpose). Teaching resilience = deepens your resilience (teach = best way to learn).'
      ]
    },
    badge: { name: 'Resilient One', emoji: '🛡️', description: 'Master of bouncing back' },
    shareMessage: 'Just built serious resilience! 🛡️ #Resilience #GrowthMindset'
  },
  {
    id: 'mindfulness-practices',
    title: 'Mindfulness Practices',
    emoji: '🧘',
    context: 'personal' as const,
    discover: {
      scenario: "Study 2hrs. Mind wanders every 2min: 'What if I fail?' (future), 'Should've studied yesterday' (past), Instagram 15min. Result: 5/30 pages. Retained nothing. 200hrs 'study' = 20hrs actual learning (10%). Mind never present.",
      problemExplanation: [
        "Mental chatter: 'What if I fail?' 'Should've studied!' 'Tomorrow assignment!' Non-stop. 90% repetitive, 70% negative. Can't focus, exhausted, anxious",
        "Time-traveling: Past regret ('I'm stupid'), future worry ('What if fail?'). Never present. Miss life, constant anxiety, poor performance",
        "Can't be present: Try to focus, mind wanders every 2min. Frustrated. No training = no control. Like running marathon without training",
        "Anxiety + distraction: Future worry = heart racing, can't sleep. Mind jumps: study→lunch→Instagram (15min lost). 2hrs study = 20min focus"
      ],
      solutionApproach: [
        "5min daily meditation: Sit, close eyes, focus breath. Mind wanders (normal!), gently return. 20 returns = 20 reps. Train mind like gym",
        "Be present NOW: Study? 'This sentence, this word.' Eat? Taste food. Walk? Feel steps. Breath = anchor. Throughout day, not just 5min",
        "Notice thoughts: 'I'll fail' = worry thought (not fact). Label it, don't believe it, let it pass. Thoughts = clouds, you = sky. Watch them pass",
        "Daily routine: Morning 5min meditation, lunch 2min mindful eating, evening 3min body scan, night 5min gratitude. 15min/day = trained mind"
      ]
    },
    video: {
      title: 'Train Your Mind: Mindfulness for B.Com Students',
      duration: 8,
      script: `[0:00-0:45] WHY YOU CANNOT FOCUS

"Study session: Sit down, open book. 2 hours later: Completed 5 pages (should complete 30!). Mind wandered: 40% future worry ('What if I fail?'), 30% past regret ('I should have studied yesterday'), 20% distracted (phone, thoughts), 10% actually present. Result: 2 hours study = 10 min actual learning. Exam: You studied 200 hours but mind present 20 hours (10% learning!). Poor score. You realize: Problem is not time. Problem is PRESENCE. Mind is never HERE. By the end of this video, you will master mindfulness. Train your mind. Be present. Let us start."

[0:45-2:15] WHAT IS MINDFULNESS (Not What You Think)

"Mindfulness = present moment awareness.

NOT:
- Emptying mind (impossible)
- Never having thoughts (unrealistic)
- Always calm (not goal)
- 1 hour meditation monastery (not required)

IS:
- Being HERE, NOW (not past, not future)
- Noticing thoughts WITHOUT JUDGMENT
- Gently returning when mind wanders
- 5 minutes daily (simple, doable)

Example: Mindful studying

BEFORE (no mindfulness):
Read → mind wanders to 'What if I fail?' → anxiety → cannot focus

AFTER (with mindfulness):
Read → mind wanders to 'What if I fail?' → NOTICE ('Oh, mind is worrying') → gently return to reading

Not stopping thoughts. Noticing thoughts. Returning to present.

THAT is mindfulness.

Simple. Practical. Powerful."

[2:15-3:45] HOW TO PRACTICE (5-Minute Daily Meditation)

"Do not need 1 hour, monastery, perfection.

5 MINUTES DAILY:

1. SIT comfortably (chair, floor, bed)

2. CLOSE EYES (or soft gaze down)

3. FOCUS ON BREATH
   Notice: Air in nose (cool), air out nose (warm)
   Chest rising, falling
   Just notice breath

4. MIND WILL WANDER (after 10 seconds!)
   'Am I doing this right?'
   'This is boring'
   'I have assignment due'
   
   This is NORMAL (not failure!)

5. GENTLY RETURN to breath
   Notice: 'Oh, mind wandered'
   No judgment: 'Bad! I failed!'
   Just return: Back to breath
   
   Like guiding puppy back (gentle, patient)

6. REPEAT
   Mind wanders → notice → return
   20 times in 5 minutes (normal!)

THAT IS THE PRACTICE.

Every return = 1 rep (like gym).

20 reps in 5 min = training session.

Daily: 5 min morning (after wake, before phone).

Consistency > duration."

[3:45-5:00] MINDFUL BREATHING (Instant Anxiety Relief)

"Exam in 10 minutes. You are panicking.

'What if I fail? I did not study enough! I will disappoint everyone!'

Heart racing. Hands shaking. Cannot think.

USE: 4-7-8 BREATHING (2 minutes)

1. Breathe IN nose (count 1, 2, 3, 4)
2. HOLD (count 1, 2, 3, 4, 5, 6, 7)
3. Breathe OUT mouth (count 1, 2, 3, 4, 5, 6, 7, 8)
4. Repeat 4 rounds

WHY IT WORKS:
Long exhale (8 sec) = activates relaxation response

Heart rate slows. Muscles relax. Anxiety reduces 50%.

After 2 min:
Calm. Focused. Ready for exam.

USE WHEN:
- Before exam (calm nerves)
- During panic (reduce anxiety)
- Before sleep (quiet racing mind)
- During conflict (respond calmly, not react)

Breath = remote control for nervous system.

Always available. Always works."

[5:00-6:30] BE PRESENT (Stop Missing Your Life)

"You eat lunch. But mind: 'I should be studying...'

You walk. But mind: 'I am late! I have to do this, then that...'

Friend talks. But mind: 'What time is it? I need to go...'

You are NEVER HERE.

Physically present. Mentally elsewhere.

Result: MISS LIFE.

Miss: Learning (study but mind elsewhere), Enjoyment (eat but do not taste), Connection (friend talks but you do not hear).

PRACTICE PRESENCE:

Studying: Notice mind wanders ('What if I fail?')
         Return to present ('Right NOW, I am reading THIS sentence')

Eating: Notice mind elsewhere ('I should be studying')
        Return to present ('Right NOW, I am tasting THIS food')

Walking: Notice mind planning ('I have to do...')
         Return to present ('Right NOW, I am taking THIS step, feeling sun, hearing birds')

ANCHOR: Breath (always present, always here, always now)

When mind time-travels: Return to breath.

Result: Actually LIVE life (not just exist in mental chatter)."

[6:30-7:45] DAILY PRACTICE BUILDS TRAINED MIND

"5 min daily meditation:

Week 1: Hard (mind wanders every 10 sec)
Week 4: Easier (mind wanders every 30 sec)
Week 12: Much easier (can focus 2 min straight)

This is TRAINING (like gym for mind).

Benefits build:

Week 1: Anxiety 7/10 → 5/10
Week 4: Can focus 30 min (was 5 min)
Week 12: Anxiety 3/10, focus 1 hour, calm even in stress

INTEGRATE throughout day:

Morning: 5 min meditation
Midday: 2 min mindful eating
Evening: 3 min body scan
Night: 5 min gratitude + breath

Total: 15 min/day scattered (easy to fit)

After 90 days: Mindfulness is HABIT.

Mind is TRAINED (you run mind, mind does not run you).

Performance: Study effectively (mind present = actually learn)
Well-being: Less anxiety, more calm, more joy

Mindfulness = essential life skill."

[7:45-8:00] YOUR CHALLENGE (30-Day Mindfulness)

"30-day challenge: Build mindfulness habit.

Days 1-7: 5 min morning meditation
Days 8-14: Add 2 min mindful eating
Days 15-21: Add 3 min body scan
Days 22-30: Add 5 min night gratitude

Track: ✓ each day

Benefits (30 days):
- Anxiety reduces 50%
- Focus improves dramatically
- Present more (actually live life)
- Calm (even in stress)

Train your mind. Master mindfulness.

Start tomorrow morning."

[End Screen: "Module 8 Complete! Mental Health & Well-being Mastered"]`,
      content: [
        'Mindfulness = Present Moment Awareness: Being HERE, NOW (not past regret, not future worry). Not emptying mind (impossible), noticing thoughts without judgment, gently returning when mind wanders',
        '5-Minute Daily Meditation: Sit, close eyes, focus on breath. Mind WILL wander (normal!). Gently return (no judgment). Repeat 20×/5 min. Every return = 1 rep (training!). Daily consistency > duration',
        '4-7-8 Breathing (Instant Calm): Breathe in 4 sec, hold 7 sec, out 8 sec, repeat 4× = 2 min. Long exhale activates relaxation response. Use: before exam, during panic, before sleep, during conflict',
        'Notice Thoughts Without Judgment: Thought arises ("I will fail"). Notice ("Mind is worrying"). Label (fear thought). Do not believe/fight. Let pass (clouds in sky). Return to present',
        'Integrate Throughout Day: Morning meditation 5 min, midday mindful eating 2 min, evening body scan 3 min, night gratitude 5 min = 15 min/day scattered (easy to fit, build habit)',
        'Benefits Build Over Time: Week 1 anxiety 7→5, Week 4 focus 5→30 min, Week 12 anxiety 3/10 + focus 1 hour + calm in stress. Mind trained = you run mind (not mind runs you)',
        'B.Com Applications: Exam anxiety relief, study focus improvement, placement interview calm, daily stress reduction, present living (not miss life in mental chatter)'
      ]
    },
    quiz: {
      title: 'Mindfulness Quiz',
      questions: [
        {
          id: 26,
          question: 'Mindfulness = empty mind, no thoughts, calm always, 1hr meditate? Try. Fail (thoughts come!). What IS mindfulness?',
          options: [
            'Empty mind, no thoughts',
            'Present moment awareness without judgment',
            'Relaxation only',
            'Avoiding thoughts'
          ],
          correct: 1,
          explanation: 'Mindfulness = being HERE NOW, noticing thoughts without judgment, gently returning when mind wanders. NOT stopping thoughts (impossible). Mind wanders ("Worrying exam") → NOTICE ("Mind worrying") → NO JUDGMENT ("OK") → RETURN ("Back to reading"). Notice faster, return effectively. Simple: present, aware, non-judgmental, return. Practice = training mind!'
        },
        {
          id: 27,
          question: 'Meditate 10 sec. Mind wanders ("Assignment due!"). "FAILED! Cannot meditate!" Mind wandering normal?',
          options: [
            'You failed, give up',
            'Gently return—notice, no judgment, return',
            'Give up, not for you',
            'Force control, fight mind'
          ],
          correct: 1,
          explanation: 'Mind wandering = NORMAL (not failure). Brain thinks 6000 thoughts/day. Notice mind wandered → NO judgment ("Mind wandered, OK") → GENTLY return to breath (like puppy, patient, kind) → Repeat. Wander 20× in 5min = NORMAL! Every notice + return = 1 rep. Training mind. Week 1: wander every 10sec. Week 12: every 2min. Improvement! Gently return!'
        },
        {
          id: 28,
          question: 'Start mindfulness: "Need 1hr daily, perfect quiet room, monastery." Have none. Start with what?',
          options: [
            '1 hour sessions, serious commitment',
            '2-5min breath focus—sit anywhere, daily',
            'Complex advanced techniques first',
            'Perfect meditation or do not start'
          ],
          correct: 1,
          explanation: 'Start SIMPLE: 2-5min breath focus. Anywhere (chair, bed, floor). Notice breath. Mind wanders (normal) → notice → return. Daily. Week 1: 2min. Week 4: 5min. 2min imperfect daily × 365 days = 12hrs training! Better than 1hr perfect × 1 day, then quit. Consistency beats duration. Simple beats perfect. Start NOW!'
        },
        {
          id: 29,
          question: 'Meditate when stressed (exam → 20min). Calm? No meditation. Week 10: Still anxious, no focus. Practice how?',
          options: [
            'Only when stressed, reactive',
            '5min daily—preventive training, habit',
            '1hr sessions when have time',
            'Occasional, when remember'
          ],
          correct: 1,
          explanation: 'REACTIVE (only when stressed) = calm temporarily, then stressed again (yo-yo). PREVENTIVE (5min daily even when calm) = builds trained mind, anxiety baseline drops. Week 1: 7/10. Week 12: 3/10. Focus improves. 5min daily × 90 days = 7.5hrs training! Daily habit like brushing teeth. Consistency beats intensity. Meditate DAILY, not just crisis!'
        },
        {
          id: 30,
          question: '5min daily × 12 weeks. Anxiety 7→3, focus 5min→1hr, sleep 1hr→15min, exams excellent. Coincidence?',
          options: [
            'Nothing proven, just trendy',
            'Reduces stress, improves focus—proven',
            'Only relaxation, temporary',
            'Just trendy fad'
          ],
          correct: 1,
          explanation: 'PROVEN benefits, not coincidence! 57% anxiety reduction. 12× focus improvement. 4× faster sleep. Brain scans show: mindfulness changes brain structure (increases gray matter in focus areas, decreases amygdala—anxiety center). 8 weeks reduces anxiety 50%, improves focus 40%. NOT placebo. REAL brain training. 5min daily = reduce stress, improve focus, better performance. Invest 5min/day, reap massive benefits!'
        }
      ]
    },
    challenge: {
      title: 'Mindfulness Challenge',
      description: '30-Day Mind Training - from scattered to focused',
      contexts: {
        academic: {
          title: 'Academic Mindfulness Excellence',
          description: 'B.Com student: Cannot focus (mind wanders every 2 min), anxious constantly (worry about exams, future), study 2 hours but complete 5 pages (should be 30!). Mind present 10% time. Exam: Studied 200 hours, learned 20 hours worth. Poor score. Goal: Train mind through mindfulness, improve focus, reduce anxiety, better academic performance.',
          instructions: [
            '1. Week 1 - Start Morning Meditation (Days 1-7, 35 min total): Current: Cannot focus (mind wanders every 2 min), anxious constantly (baseline 7/10). START SIMPLE (do not overwhelm): Morning meditation (Day 1): Wake 7 AM. Before checking phone (phone triggers distraction, anxiety - avoid). Sit on bed (comfortable, back straight). Set timer: 2 minutes (start small, build up). Close eyes. Focus on breath: Notice air coming in nose (cool), going out nose (warm). Chest rising, falling. Just notice. After 10 seconds: Mind wanders ("I have assignment due! What if I fail exam?"). NOTICE: "Oh, mind wandered." NO JUDGMENT: "I failed!" - NO. Just "Mind wandered" - neutral. GENTLY RETURN: Back to breath (notice air in, air out). Like guiding puppy back (patient, gentle, kind). Repeat: Mind wanders → notice → return (× 10 times in 2 min - NORMAL!). Timer rings: 2 min done. THAT IS IT. Day 1 meditation complete. Days 2-3: 2 min daily (build habit). Days 4-7: 3 min daily (slightly longer). Week 1: 7 days meditation ✓. Total: 18 min (2+2+3+3+3+3+3). Benefits (Week 1): Anxiety 7/10 → 6/10 (slight reduction, mind slightly calmer), Focus: Can study 10 min before wander (was 5 min - 2× improvement!), Awareness: Notice mind wanders faster (was lost 15 min in worry, now notice in 1 min).',
            '2. Week 2 - Increase to 5 Minutes + Mindful Studying (Days 8-14): Week 1: 2-3 min meditation ✓. Week 2: Increase to 5 min. MORNING MEDITATION: Days 8-14: 5 min daily (after wake, before phone). Same practice: Focus breath, mind wanders, notice, return (× 20 times in 5 min). MINDFUL STUDYING (new - apply mindfulness to study): Before study session: 2 min 4-7-8 breathing (calm mind, prepare focus). During study (2 hours): Read paragraph. Mind wanders ("What if I fail?"). NOTICE ("Mind is worrying"). RETURN ("Back to reading this sentence"). No judgment ("I failed!" - NO. "Mind wandered" - OK, return). Repeat throughout study. Study timer: Every 30 min, pause (check: Am I present? Or mind wandering? If wandering, 1 min breath, return to present). After study: 2 min breath (close study session, release any lingering thoughts). Week 2 studying: Mind wanders but NOTICE FASTER (within 30 sec, not 15 min lost), RETURN EASIER (back to study, not spiral into anxiety). Result: 2 hours study = complete 15 pages (was 5 pages!). 3× improvement! GPA: Quiz scores improving (better focus during study = actually learn).',
            '3. Week 3 - Add Mindful Eating (Days 15-21): Week 1-2: Meditation 5 min + mindful studying ✓. Week 3: Add mindful eating. Current: Eat lunch while studying/scrolling phone (mind elsewhere, do not taste food, eat fast, poor digestion). MINDFUL EATING (first 2 min of lunch): Day 15-21: Lunch time. Put away phone, books (no distractions). Look at food (colors, textures). Smell food (notice aroma). First bite: Chew slowly (20 chews, notice taste, texture, flavor - actually TASTE food). Second bite: Same (chew, taste, notice). 2 minutes: Just eat (no phone, no book, no thoughts about study - just eating). After 2 min: Can study/phone if want (but often, you will continue eating mindfully - it is pleasant!). Benefits (Week 3): Actually taste food (food tastes better! You were missing taste all these years!), Better digestion (chew properly, eat slower), More satisfied (eat less but feel fuller - was eating fast, not noticing fullness cues), Break from mental chatter (2 min where mind is not worrying - refreshing!). Week 3: Meditation 5 min + mindful studying + mindful eating ✓.',
            '4. Week 4 - Add Evening Body Scan (Days 22-30): Week 1-3: Meditation + mindful studying + mindful eating ✓. Week 4: Add evening body scan (release tension). EVENING BODY SCAN (3 min, after study, before dinner): Sit or lie down. Close eyes. Notice body: HEAD: Notice sensations (tension? Relaxed? Just notice). Forehead (furrowed? Relax). Jaw (clenched? Release). SHOULDERS: Notice (tense? Holding stress? Relax, drop shoulders). ARMS, HANDS: Notice (tight fists? Open hands). CHEST: Notice breath (chest rising, falling). Stomach knots (anxiety)? Breathe into stomach. LEGS, FEET: Notice (tense? Relax). WHOLE BODY: Notice (where is tension? Breathe into tension, release). 3 minutes: Scan entire body (notice tension, release). Benefits (Week 4): Release accumulated tension (after 6 hours study, body is tense - scan releases), Better sleep (less tension = fall asleep easier), Body awareness (notice when stressed - shoulders tense, jaw clenched - can release before becomes chronic pain). Week 4: Morning meditation 5 min + mindful studying + mindful eating 2 min + evening body scan 3 min ✓.',
            '5. Week 4-8 - Add Night Gratitude (Days 22-60, build consistency): Week 4: Morning meditation + mindful studying + mindful eating + evening body scan ✓. Add: Night gratitude (5 min before sleep). NIGHT GRATITUDE + BREATH (5 min): Before sleep (10 PM): Sit on bed. Gratitude: Think 3 things grateful for today (Today I am grateful for: Friend helped me with assignment, Had healthy lunch, Learned new concept in class). Appreciate each (feel gratitude - shifts mind from worry to appreciation). Breath: 5 min breath focus (calm mind for sleep). After 5 min: Lie down, sleep (mind calm, grateful, peaceful). Week 4-8: DAILY ROUTINE COMPLETE: Morning (5 min meditation), Midday (2 min mindful eating), Evening (3 min body scan), Night (5 min gratitude + breath). Total: 15 min/day (scattered, easy to fit into schedule). Track: Habit tracker (✓ each day all 4 practices). Week 4-8 consistency: Week 4: 6/7 days (missed Sunday - OK!), Week 5: 7/7 days ✓, Week 6: 6/7 days, Week 7: 7/7 days ✓, Week 8: 7/7 days ✓. Overall: 85% consistency (excellent!).',
            '6. Month 2-3 - Measure Transformation (Days 30-90): Month 2-3: Maintain daily practice. Measure transformation. BEFORE (Day 0 - no mindfulness): Anxiety: 7/10 baseline (constant worry), Focus: 5 min before mind wanders (cannot study effectively), Sleep: 1 hour to fall asleep (mind racing), Study: 2 hours = 5 pages (mind present 10% time), Exam: Poor performance (anxious, cannot focus, cannot remember). AFTER (Day 90 - daily mindfulness): Anxiety: 3/10 baseline (manageable, can handle stress - 57% reduction!), Focus: 1 hour straight before mind wanders (12× improvement! Can study effectively, mind present), Sleep: 15 min to fall asleep (mind quiet, calm - 4× faster!), Study: 2 hours = 25 pages (mind present 80% time - actually learning!), Exam: Excellent performance (calm, focused, sharp thinking, good memory). GPA: Improved significantly (better focus = better learning = better grades). BRAIN CHANGE (research shows): Increased gray matter (focus areas, emotional regulation, self-awareness), Decreased amygdala (anxiety center shrinks!). You: Built trained mind through daily practice (5 min × 90 days = 450 min = 7.5 hours mind training).',
            '7. Month 4 - Share and Help Others (Days 91-120): Month 4: You transformed (anxiety down 57%, focus up 12×, GPA up). Share with classmates: Social media post: "How Mindfulness Improved My Focus from 5 Min to 1 Hour (and GPA improved!)." Post: (1) BEFORE: Anxiety 7/10, focus 5 min, poor exam scores. (2) PRACTICE: 5 min daily meditation × 90 days (simple: sit, breathe, notice wander, return). (3) AFTER: Anxiety 3/10, focus 1 hour, excellent exam scores. (4) SCIENCE: Brain scans show mindfulness changes brain (increases focus areas, decreases anxiety areas). Post: 1.5K likes, 200 shares. 100 classmates message: "I have same problem (cannot focus, anxious)! How do I start?" You: Reply to all ("Start 2 min daily. Sit, breathe, notice, return. Build to 5 min. Daily consistency."). You: Start "Mindfulness Study Group" (25 members). Weekly: Meditate together 10 min (group energy, accountability), Share experiences (challenges, benefits), Support each other. Month 4: 15 members report: Focus improved, Anxiety reduced, Study more effectively. Professor notices: "Your academic transformation is remarkable! You are calmer, more focused. A grade!" You: Helped 100 classmates start mindfulness, 15 report benefits. Professor praises. Mindfulness = academic success + helping others.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Expecting empty mind: "Mind should not wander!" Result: Frustration, give up. Solution: Mind WILL wander (normal!). Practice is notice + return (not stop wandering).',
            '• Judging yourself: "I failed! I am bad at meditation!" Result: Harsh, discouraging. Solution: Be kind (mind wandered - OK, gently return. No judgment).',
            '• Needing perfect conditions: "I need quiet room, 1 hour, teacher." Result: Never start. Solution: Start imperfect (2 min, noisy hostel, no teacher - just start!).',
            '• Only when stressed: Meditate when anxious, stop when calm. Result: No training, still anxious. Solution: Daily practice (even when calm - train mind over time).',
            '• Giving up early: Practice 3 days, "This does not work!" Quit. Result: No benefits (takes time to train mind). Solution: 30 days minimum (benefits build over time).'
          ],
          successCriteria: [
            '✅ You start meditation (2-5 min daily, morning, after wake, before phone)',
            '✅ You practice mindful studying (notice mind wanders, return to reading, focus improves)',
            '✅ You add mindful eating (2 min lunch, actually taste food, break from mental chatter)',
            '✅ You add body scan (3 min evening, release tension, body awareness)',
            '✅ You add night gratitude (5 min before sleep, grateful + breath, better sleep)',
            '✅ You reduce anxiety (7/10 → 3/10 over 90 days, 57% reduction)',
            '✅ You improve focus (5 min → 1 hour over 90 days, 12× improvement, better GPA)',
            '✅ You help 100 classmates (share success, start mindfulness group, 15 report benefits)'
          ]
        },
        professional: {
          title: 'Professional Mindfulness Mastery',
          description: 'You are Project Manager. Work stress high: Constant worries (deadlines, client demands, team issues), cannot focus (mind jumps between tasks), anxious (future catastrophizing), reactive (snap at team when stressed). Goal: Build mindfulness practice, reduce stress, improve focus, better leadership.',
          instructions: [
            '1. Week 1 - Morning Meditation Routine (Days 1-7): Current: Wake, immediately check emails (anxiety starts 6 AM!), mind racing all day, reactive to stress. START: Morning meditation (before emails, before work thoughts). Wake 6 AM. Before phone: Sit on bed (2 min Day 1-2, 3 min Day 3-5, 5 min Day 6-7). Close eyes. Focus breath (air in, air out). Mind wanders ("I have deadline today! Client might be angry! Team member might mess up!"). Notice (mind worrying about work). Gently return (back to breath). Repeat (wander → notice → return × 10-20 times). After meditation: Open eyes. THEN check phone, emails (not BEFORE meditation - meditation first, work second). Week 1: 7 days meditation (2-5 min). Benefits (immediate): Start day CALM (not anxious from emails - started with breath, not stress), Can handle stress better (when stress arises during day, less reactive - have calm foundation from morning practice), Better decisions (morning clarity improves whole day decision-making).',
            '2. Week 2 - Mindful Meetings (Days 8-14): Week 1: Morning meditation ✓. Week 2: Apply mindfulness to meetings. Current: Meetings (mind wanders, not fully listening, reactive, interrupt, miss information). MINDFUL MEETINGS: Before meeting: 1 min 4-7-8 breathing (calm, present, ready). During meeting: LISTEN fully (when colleague talks, be PRESENT. Not planning your response, not thinking about other tasks. Just LISTEN.). Notice mind wanders ("I need to finish project after this..." - mind planning). Return to present ("Right NOW, colleague is talking. LISTEN."). Respond (not react): Colleague says something you disagree with. OLD response (reactive): Immediately interrupt, argue, defend (reactivity). NEW response (mindful): Notice emotion arising ("I feel defensive"). Pause (breathe 3 seconds). Respond consciously ("I hear your concern. Let me think about this. Can we explore both perspectives?"). Week 2: 5 meetings mindfully. Benefits: Understand better (actually listened, absorbed information - not missed half of meeting in mental planning), Better relationships (team feels heard, respected - you listened fully), Better decisions (respond thoughtfully, not react emotionally), Less conflict (pause before responding prevents arguments).',
            '3. Week 3 - Mindful Email/Communication (Days 15-21): Week 1-2: Meditation + mindful meetings ✓. Week 3: Mindful email/Slack communication. Current: Receive stressful email from client ("Project delayed! Unacceptable!"). Immediate reaction: Heart racing, anxiety, defensive, type angry reply ("This is NOT my fault! Team member..."). Send. Regret later (unprofessional, damaged relationship). MINDFUL COMMUNICATION: Receive stressful email. Notice reaction: Heart racing, defensive thoughts arising ("I want to defend myself!"). Pause (do NOT reply immediately). Breathe: 2 min 4-7-8 breathing (calm nervous system, reduce reactivity). Re-read email (calmly, what is actually being said? Client is stressed about delay, wants solution). Respond consciously (not defensively): "I understand your concern about timeline. Here is what happened [facts], here is solution [plan], delivery by [date]. Apologies for delay." Professional, solution-focused, calm. Week 3: 10 stressful communications (emails, Slacks, messages). Pause before responding (breathe, calm, respond consciously). Benefits: No regretted messages (was sending 2-3 defensive/angry messages per week, regretting later - now 0!), Better relationships (clients, team appreciate calm professional responses), Better solutions (calm mind = better problem-solving).',
            '4. Week 4 - Integrate Throughout Workday (Days 22-30): Week 1-3: Morning meditation + mindful meetings + mindful communication ✓. Week 4: Integrate mindfulness throughout entire workday. MINDFUL WORKDAY: 6 AM: Wake, 5 min meditation (calm start). 9 AM (work start): Mindful first task (fully present 30 min, notice wander, return). 10 AM: 1 min breathing break (between tasks, reset focus). 11 AM-12 PM: Mindful meeting (fully listen). 12 PM: Mindful lunch (2 min eating, taste food, break from work thoughts). 1-5 PM: Work tasks (notice when stressed, 1 min 4-7-8 breathing, continue calmly). Every hour: 30 sec breath break (maintain presence, reduce tension). 5 PM: Mindful email check (pause before stressful emails, breathe, respond consciously). 6 PM: End workday (2 min breath, release work thoughts, go home present - not bring work stress home). Week 4: Mindfulness integrated into entire day (not just 5 min morning, but throughout). Benefits: Sustained calm (baseline anxiety low all day), Sustained focus (present most of day, not lost in mental chatter), Better work quality (present = better decisions, better output), Better well-being (less stressed, more peaceful).',
            '5. Month 2-3 - Measure Professional Transformation (Days 30-90): Month 2-3: Maintain daily mindfulness practice. Measure work transformation. BEFORE (no mindfulness): Anxiety: High (baseline 7/10, constant worry about deadlines, clients, team), Focus: Poor (mind jumps between tasks, cannot sustain focus, distracted), Reactivity: High (snap at team when stressed, send defensive emails, regret later), Performance: Declining (stressed = poor decisions, missed details, client complaints), Leadership: Poor (team feels you do not listen, you are reactive, create stressful environment). AFTER (90 days daily mindfulness): Anxiety: Low (baseline 3/10, can handle stress calmly - 57% reduction!), Focus: Excellent (sustain focus 1 hour, present during tasks, productive), Reactivity: Low (pause before responding, respond consciously not react emotionally, no regretted emails), Performance: Excellent (calm = better decisions, notice details, client praised), Leadership: Improved (team feels heard - you listen fully in meetings, calm environment, team morale up). CEO feedback: "Your leadership transformed. Team productivity up 25%, Team morale excellent, Clients happy. You are calm under pressure, make better decisions. Promoted to Senior Project Manager + ₹15K raise." Promotion! Mindfulness = career success.',
            '6. Month 4 - Build Mindful Team Culture (Days 91-120): Month 4: You transformed (promoted, calm leader). Build mindful team culture. INITIATIVES: (1) TEAM MEDITATION: Start team day with 3 min group meditation (Mondays 9 AM - 10 people join, team starts week calm, focused), (2) MINDFUL MEETINGS: Team norm "Listen fully" (when someone talks, everyone listens - no interrupting, no planning response, just listen), (3) PAUSE PRACTICE: When team stressed, "Let us take 2 min breathing break" (calm team, better decisions), (4) MINDFULNESS RESOURCES: Share: Apps (Headspace, Calm), Books ("Wherever You Go, There You Are"), Short videos (team watches, learns). Impact: Team stress reduces (5 members start personal meditation practice), Team focus improves (meetings more productive, less distraction), Team relationships improve (listen fully = feel heard, respected), Team performance improves (calm team = better decisions, better collaboration). CEO: "Your team culture is exemplary. Mindful, focused, high-performing. Company-wide mindfulness program launching (based on your team success)." You: Became mindfulness leader (in addition to project management). Mindfulness = leadership skill + career advantage.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Checking emails before meditating: Wake → emails → stress starts. Result: Stressful day. Solution: Wake → meditate FIRST → then emails (calm start).',
            '• Reactive communication: Stressful email → immediate defensive reply. Result: Regret, damaged relationships. Solution: Pause, breathe 2 min, respond calmly.',
            '• Multitasking meetings: Meeting but planning other tasks mentally. Result: Miss information, poor decisions. Solution: Fully present (listen completely).',
            '• All day stress, no breaks: Work 9 hours straight, accumulate tension. Result: Burned out, reactive. Solution: Hourly 30 sec breath breaks (maintain calm all day).',
            '• Bringing work home: Leave office, mind still on work problems all evening. Result: No rest, exhausted. Solution: End-of-day 2 min breath (release work thoughts, be present at home).'
          ],
          successCriteria: [
            '✅ You build morning meditation (5 min daily before emails, calm start to day)',
            '✅ You practice mindful meetings (fully listen, notice wander, return, better decisions)',
            '✅ You pause before stressful communication (breathe 2 min, respond calmly not react defensively)',
            '✅ You integrate throughout day (hourly breath breaks, mindful lunch, end-of-day release)',
            '✅ You reduce anxiety (7/10 → 3/10 over 90 days, calm under pressure)',
            '✅ You improve leadership (team feels heard, calm environment, morale up)',
            '✅ You get promoted (Senior PM + ₹15K raise, CEO recognizes mindful leadership)',
            '✅ You build mindful team culture (team meditation, mindful meetings, company-wide program)'
          ]
        },
        personal: {
          title: 'Personal Mindfulness Wisdom',
          description: 'Personal: Mind always racing (past regrets, future worries), anxious constantly (baseline 8/10), cannot enjoy present moment (eat but do not taste, walk but do not notice, talk to friend but not really there). Goal: Train mind through mindfulness, be present, reduce anxiety, actually live life (not just exist in mental chatter).',
          instructions: [
            '1. Week 1 - Establish Foundation (Days 1-7, start 2 min): Current: Mind never present (always past regrets or future worries), anxious 8/10, missing life. START MINDFULNESS: Download app: Headspace OR Calm OR Insight Timer (free guided meditations for beginners). Day 1: Choose "Basics" course OR "Breath focus 2 min" guided meditation. Play. Sit comfortably. Follow voice guidance: "Notice your breath. Air coming in, going out. When mind wanders, gently return." Mind wanders 5 times in 2 min (normal!). Notice, return each time. Timer rings: 2 min done. Day 1 complete! Days 2-7: 2-3 min daily (guided meditation from app OR unguided: just sit, breathe, notice, return). Track: Mark ✓ in calendar each day (build streak motivation). Week 1: 7 days ✓ (2-3 min each). Total: 18 min mindfulness practice. Benefits (Week 1): Anxiety 8/10 → 7/10 (slight reduction, mind slightly calmer), Awareness (notice when mind wanders - was lost in thoughts 1 hour, now notice in 5 min), Kindness to self (learning to be patient with wandering mind, not harsh).',
            '2. Week 2-4 - Build to 5 Minutes Daily (Days 8-30): Week 1: 2-3 min ✓. Week 2-4: Build to 5 min daily (sustainable practice). MORNING ROUTINE: Wake 7 AM (or whenever). Before phone (phone = distraction trigger): Sit on bed OR chair. Set timer: 5 minutes. Option A: Guided meditation (app - voice guides you). Option B: Unguided (sit, close eyes, focus breath, notice wander, return - you know the practice now). 5 minutes daily. Week 2-4: 23 days practice (3 weeks × 7 days + 2 days). Miss 2 days (travel, sick - OK! Resume Day 3). Overall: 21/23 days = 91% consistency (excellent!). Benefits (Week 4): Anxiety 7/10 → 5/10 (noticeable reduction, mind calmer), Focus: Can focus 20 min on task (was 5 min - 4× improvement!), Sleep: Fall asleep 30 min (was 1.5 hours - mind quieter at night), Present: Start noticing present moment (taste food during eating, notice sun during walk - actually experiencing life, not lost in mental chatter).',
            '3. Month 2 - Integrate into Daily Life (Days 30-60): Month 2: Morning meditation 5 min established ✓. Integrate mindfulness into daily activities (not just sitting meditation - mindfulness while living). MINDFUL DAILY ACTIVITIES: MORNING: Mindful shower (notice water temperature, sensation, smell of soap - not thinking about day, just showering). COMMUTE: Mindful walking/bus (notice steps, breath, environment - not lost in phone, mental planning). EATING: Every meal, first 2 min mindful (taste food, chew slowly, notice flavors - break from thoughts). CONVERSATIONS: Fully listen (when someone talks, be PRESENT - not planning response, not thinking other things, just LISTEN). CHORES: Mindful dishwashing, cleaning (notice sensations, movements - not thinking "This is boring, I should be doing something else"). EVENING: Mindful walk 10 min (after dinner, notice nature, breath, body - not ruminating about day). NIGHT: 5 min gratitude + meditation (before sleep). Month 2: Mindfulness integrated into LIFE (not just 5 min sitting, but present throughout day). Benefits: More present (80% of day present, was 10% - actually LIVING life!), Less anxiety (baseline 5/10 → 4/10 - mind calmer overall), More joy (taste food, feel sun, hear birds, connect with people - life is richer when PRESENT), Better relationships (friends notice: "You actually listen now! You are HERE when we talk!").',
            '4. Month 3 - Deepen Practice (Days 60-90): Month 2: Integrated mindfulness ✓. Month 3: Deepen practice (longer sessions, new techniques). MORNING: Increase to 10 min meditation (was 5 min - build capacity). NEW TECHNIQUES: Body scan (10 min - scan entire body, notice sensations, release tension), Loving-kindness meditation (send goodwill: "May I be happy. May friend be happy. May all be happy" - builds compassion), Walking meditation (10 min walk, notice each step, breath, sensations - meditation in motion). RETREAT: Day-long mindfulness retreat (Saturday, 8 hours): Silent (no talking), Meditate (sitting, walking, eating - all mindful), Guided by teacher (deepens practice, learn from expert). Experience: Deep peace, quiet mind, insights. Month 3: Daily 10 min meditation + integrated mindfulness + tried new techniques + 1 retreat. Benefits: Anxiety 4/10 → 2/10 (very low anxiety, calm most times), Focus: 1.5 hours straight (powerful focus, deep work capability), Peace: Experience moments of deep peace (quiet mind, no mental chatter - profound!), Insights: Understand yourself better (meditation reveals patterns, triggers, truths).',
            '5. Month 4-6 - Make Mindfulness Lifestyle (Days 90-180): Month 3: Deep practice ✓. Month 4-6: Mindfulness becomes lifestyle (identity: "I am mindful person"). DAILY LIFE: Morning: 10 min meditation (non-negotiable, like brushing teeth), Throughout day: Present (eating, walking, talking, working - notice when mind wanders, return to present), Evening: 10 min meditation OR yoga, Night: Gratitude practice. WEEKLY: Join mindfulness community (meditation group, sangha - meditate together, discuss practice, learn from others). MONTHLY: Half-day retreat OR nature mindfulness (hike, beach - meditate in nature, deepens practice). IDENTITY SHIFT: Before: "I am anxious person (mind always racing, worrying)." After: "I am mindful person (can be present, can calm mind, can focus when needed)." Not changed circumstances (still have exams, deadlines, life challenges). Changed RELATIONSHIP to circumstances (circumstances happen, but you can be present, calm, respond vs react). Month 6: Mindfulness is WHO YOU ARE (not just what you do - identity, lifestyle, way of being).',
            '6. Month 6-12 - Share and Teach (Days 180-365): Month 6-12: You transformed (anxiety 2/10, focus excellent, present, peaceful). Share and teach. TEACH: (1) WORKSHOP: "Mindfulness for Beginners" (2 hours, teach: what is mindfulness, how to practice, benefits - 30 people attend). (2) BLOG: Write "My Mindfulness Journey: From Anxious (8/10) to Calm (2/10)" (share struggles, practice, transformation - inspire others). 5K views. (3) MENTOR: Help 5 friends start mindfulness (guide them, answer questions, support practice - teaching reinforces your learning). COMMUNITY: (1) Join meditation center (weekly sits, retreats, deepen practice), (2) Volunteer (teach mindfulness to students, underprivileged communities - give back). Year 1 results: Anxiety: 8/10 → 2/10 (75% reduction, rare anxiety episodes), Focus: 5 min → 2 hours (24× improvement, deep work mastery), Sleep: 1.5 hours to fall asleep → 10 min (9× faster, mind quiet), Presence: 10% → 90% (actually LIVING life, not existing in mental chatter), Quality of life: Transformed (calm, focused, joyful, connected, peaceful). You: Taught 30 people, mentored 5 friends, all report benefits. Mindfulness transformed your life. You are transforming others lives.',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Meditation perfectionism: "Mind should not wander! I am doing it wrong!" Result: Harsh, discouraged, quit. Solution: Mind wanders (normal!). Gently return (kind, patient).',
            '• Inconsistent practice: Meditate 3 days, skip 4 days, meditate 2 days. Result: No training, no benefits. Solution: Daily 5 min (even if busy, even if do not feel like it - consistency).',
            '• Waiting for "right time": "I will start when less busy, less stressed." Result: Never start. Solution: Start NOW (imperfect, busy, stressed - that is WHEN you need it most!).',
            '• Just sitting meditation: Only meditate 5 min morning, rest of day not present. Result: Limited benefits. Solution: Integrate (mindful eating, walking, listening - present all day).',
            '• Solo practice only: Never join community, never learn from others. Result: Plateau, limited growth. Solution: Join sangha, take retreat, learn from teachers (deepen practice).'
          ],
          successCriteria: [
            '✅ You establish daily meditation (5 min morning, build to 10 min, 91% consistency)',
            '✅ You integrate into work (mindful meetings, mindful emails, hourly breaks)',
            '✅ You integrate into daily life (mindful eating, walking, listening - present 90% of day)',
            '✅ You reduce anxiety (8/10 → 2/10 over 6 months, 75% reduction)',
            '✅ You improve focus (5 min → 2 hours, 24× improvement, deep work mastery)',
            '✅ You improve sleep (fall asleep 1.5 hours → 10 min, 9× faster)',
            '✅ You teach mindfulness (workshop 30 people, blog 5K views, mentor 5 friends)',
            '✅ You transform life quality (calm, focused, joyful, connected, peaceful - actually living)'
          ]
        }
      }
    },
    feedback: {
      strengths: [
        '🧘 Practice Daily Meditation: You establish daily meditation practice (5 min every morning, after wake, before phone - consistent, non-negotiable). You understand: Meditation is not emptying mind (impossible), meditation is training mind (notice wander, gently return - that IS practice). Mind wanders 20 times in 5 min (normal!). Every return = 1 rep (training!). You are patient (not harsh when mind wanders, gently return like guiding puppy). You are consistent (daily practice, even when busy, even when do not feel like it - consistency builds trained mind). Benefits: Anxiety reduces over time (Week 1: 7/10, Week 4: 5/10, Week 12: 3/10 - gradual improvement from daily training), Focus improves (Week 1: 5 min, Week 12: 1 hour - 12× improvement), Mind trained (you run mind, mind does not run you - can focus when needed, can calm when needed). Daily 5 min meditation = foundation for all other benefits.',
        '🎯 Present Moment Awareness: You practice being PRESENT (here, now - not past, not future). During study: Notice mind wanders to future worry ("What if I fail?"), return to present ("Right now, reading this sentence"). During eating: Notice mind elsewhere ("I should be studying"), return to present ("Right now, tasting this food"). During conversation: Notice mind planning ("What to say next?"), return to present ("Right now, listening to friend"). You use breath as anchor (when mind time-travels, return to breath - breath is always present, always now). Result: More present (80-90% of time present, was 10% - actually LIVING life!), Miss less (actually learn when studying, actually taste when eating, actually connect when talking), Less anxiety (anxiety = future worry; present moment usually OK), More joy (life is richer when PRESENT - notice sun, taste food, hear birds, feel alive).',
        '🧠 Notice Thoughts Without Judgment: You practice non-judgmental awareness. Thought arises: "I am going to fail exam." OLD you: Believe thought → anxiety spiral → paralyzed. NEW you: Notice thought ("I am having thought: I will fail"), Label ("This is fear thought"), Non-judgment ("Mind is worrying. That is OK. I do not have to believe every thought"), Let pass ("Thank you mind. Back to studying"). Thought passes like cloud (comes, goes, you remain calm). You understand: Thoughts = clouds in sky. You = sky. Clouds come (worry thoughts), clouds go (pass). You remain (spacious, calm). Do not grab clouds ("This is TRUE!"), do not fight clouds ("Should NOT think this!"), just watch pass. Result: Less controlled by thoughts (you have thoughts, thoughts do not have you), Less anxiety (notice worry, let pass - do not spiral), More calm (space between you and thoughts), Better decisions (not reactive to every thought).',
        '🌬️ Use Mindful Breathing: You use breath as tool (instant calm, always available). 4-7-8 breathing (2 min): Breathe in 4 sec, hold 7 sec, out 8 sec, repeat 4× = activates relaxation response (heart slows, muscles relax, anxiety reduces 50%). You use WHEN: Before exam (calm nerves, sharp focus), During panic (anxiety rising - breathe, calm in 2 min), Before sleep (mind racing - breathe, fall asleep faster), During conflict (angry - breathe, respond calmly not react harshly). You understand: Breath = remote control for nervous system (long exhale = relaxation mode). Instant tool (2 min, works anywhere, free). You carry this tool everywhere (breath always with you, always works). Result: Can calm yourself (not dependent on external calm - you can CREATE calm through breath), Handle stress better (when stress arises, breathe, calm, respond effectively), Better decisions (calm mind = clear thinking).',
        '📅 Consistent Practice Builds Trained Mind: You understand: Mindfulness benefits build over TIME through DAILY PRACTICE (not instant, not occasional). You practice: 5 min daily × 90 days (consistency!). Results build gradually: Week 1: Anxiety 7/10 → 6/10 (small change), Week 4: 6/10 → 5/10 (noticeable), Week 12: 5/10 → 3/10 (significant!). Not overnight transformation (Day 1 meditation ≠ instant calm). But over time (90 days consistent practice = trained mind). Like gym: 1 workout ≠ muscles. But 90 days daily workouts = strong body. Mindfulness same: 1 meditation ≠ calm. But 90 days daily meditation = trained mind (calm, focused). You commit to consistency (not perfection - miss 2 days? Resume Day 3. Overall 85% = good!). You track (habit tracker, celebrate streaks - motivation). You understand: Training mind takes time, patience, daily practice. You invest 5 min/day. Reap benefits for lifetime (trained mind is gift that keeps giving).'
      ],
      improvements: [
        '📚 Study Mindfulness Deeply: You practice mindfulness (5 min daily). Good. But STUDY DEEPLY (understand science, philosophy, applications): Read: (1) "Wherever You Go, There You Are" by Jon Kabat-Zinn (mindfulness fundamentals, accessible, practical - classic), (2) "The Miracle of Mindfulness" by Thich Nhat Hanh (mindful living, simple practices, beautiful), (3) "10% Happier" by Dan Harris (skeptic becomes believer, practical mindfulness, relatable). Learn: MBSR (Mindfulness-Based Stress Reduction - 8-week program, gold standard, research-proven - reduces stress 40-50%). Take course online (40 hours) OR local center. Understand: Neuroscience (how mindfulness changes brain - increases gray matter focus areas, decreases amygdala anxiety), Research (studies showing benefits: reduced anxiety, improved focus, better sleep, lower stress hormones, improved immune function). Deep knowledge provides: Motivation (understand WHY it works - brain science, research proof), Better practice (learn techniques, nuances, common mistakes), Ability to teach (share knowledge, help others). Invest 60 hours (read books, take MBSR course). Deep understanding transforms casual practice into deep practice.',
        '🧘 Try Advanced Techniques: You practice breath focus (basic). Good. But TRY ADVANCED (variety, deeper practice): Body scan (20 min - scan entire body, release all tension, deep relaxation), Loving-kindness (metta - send goodwill to self, friends, difficult people, all beings - builds compassion, reduces anger), Walking meditation (30 min slow walk, notice each step, breath, sensations - meditation in motion), Visualization (imagine peaceful scene, engage all senses - calm, healing), Mantra (repeat word: "peace", "calm", "om" - focus mind, vibration), Open awareness (notice all arising: sounds, sensations, thoughts, emotions - expansive awareness, not just breath). Try each (spend 1 week each technique). Find: What resonates? What deepens your practice? Build toolkit (different techniques for different needs: anxious? Loving-kindness. Tense? Body scan. Distracted? Breath focus.). Advanced techniques: Deepen practice (access deeper calm, peace, insights), Prevent boredom (variety keeps practice interesting), Build flexibility (can meditate anywhere, anytime - breath, walking, loving-kindness).',
        '🏞️ Attend Meditation Retreat: You meditate 5-10 min daily (good). But ATTEND RETREAT (intensive practice, deeper experience): Find: 3-day weekend retreat OR 7-day retreat OR 10-day Vipassana (silent meditation retreat, intensive, transformative). Experience: SILENCE (no talking, no phone, no distractions - just you and your mind), INTENSIVE (meditate 8-10 hours/day - sitting, walking, eating all mindful), TEACHER (learn from expert, ask questions, guided practice), COMMUNITY (meditate with others - group energy powerful). Challenges: Hard (sit 1 hour, back hurts, mind rebels "This is boring! I want to leave!"), Uncomfortable (face your mind - see thoughts, patterns, pain you usually distract from), Transformative (push through discomfort, breakthrough to deeper calm, peace, insights). Results: Deep peace (experience quiet mind for first time - no mental chatter, just presence, profound), Breakthrough insights (understand yourself, patterns, what matters - clarity), Renewed commitment (return from retreat committed to daily practice - experienced benefits deeply), Community (meet fellow practitioners, build friendships, ongoing support). Investment: 3-10 days, ₹5000-15000 (worth it - experience most people never have). Life-changing. In B.Com, attend retreat (summer break, between semesters). Intensive practice deepens what daily practice starts.',
        '📊 Track Mindfulness Metrics: You practice mindfulness. Feel better. But TRACK (measure transformation): Daily: (1) Meditation (did you meditate? Duration? How many times mind wandered? - track practice), (2) Anxiety level (1-10 scale, daily rating - see reduction over time), (3) Focus (how long can you focus before mind wanders? 5 min? 30 min? - track improvement), (4) Presence (what % of day felt present? 10%? 50%? - track growth). Weekly review: Average anxiety (Week 1: 7/10, Week 4: 5/10 - trending down!), Average focus duration (Week 1: 5 min, Week 4: 25 min - improving!), Meditation consistency (6/7 days - 86% good!). Monthly review: Graph trends (anxiety declining, focus improving - visual motivation!), Celebrate wins (focus 1 hour first time! Anxiety below 5/10 first time!), Adjust practice (not seeing benefits? Increase duration? Try new technique?). Year review: Transformation story ("Started: Anxiety 8/10, focus 5 min. Ended: Anxiety 2/10, focus 2 hours. Mindfulness changed my life."). Share (blog, social media - inspire others with data). Why track?: See progress (daily changes subtle, but 90-day graph shows MASSIVE transformation), Motivation (data proves practice works - keep going!), Optimization (experiment: Morning meditation better than evening? Data shows!). In B.Com, track mindfulness. What gets measured gets managed. Data = proof transformation is real.',
        '👥 Build Mindfulness Community: You practice alone. Good. But build COMMUNITY (support, deepen practice, teach): Join: Meditation center (weekly group sits - meditate with others, group energy powerful), Mindfulness course (MBSR 8-week course - structured, teacher-led, cohort support), Online community (r/Meditation, mindfulness apps communities - 24/7 support, share experiences), Retreat sangha (people from retreats - deep bonds, ongoing practice buddies). Lead: Start meditation group (college, office, neighborhood - 10 people, weekly sits, share practice), Teach workshop ("Mindfulness 101" - share knowledge, help beginners), Mentor (guide 3 friends through 30-day practice - teaching deepens your practice). Community provides: Accountability (less likely to skip when group expecting you), Motivation (see others progress, inspire each other), Learning (hear others insights, questions - learn from community), Support (tough practice day? Community encourages), Social (meditation friends - deep connections through shared practice), Fun (group meditation, dharma discussions, retreat together - joyful). In B.Com, build community. Solo practice is foundation. Community practice is expansion (deepen, sustain, share, grow together). Find your sangha.'
      ],
      nextSteps: [
        '📚 Read "Wherever You Go, There You Are" by Jon Kabat-Zinn: Read: 200-page book, 15 hours (mindfulness classic, accessible, practical, transformative). Key learnings: What is mindfulness (present moment awareness, non-judgmental, simple), Why practice (reduce stress, improve focus, better health, deeper life), How to practice (formal sitting, informal mindfulness in daily life, variety of practices), Common obstacles (mind wandering is not failure, perfection not goal, practice is practice). Apply: After reading, deeper understanding (know what you are doing and why - not just following instructions blindly). Experiment (try different practices book suggests), Integrate (mindfulness in daily life, not just sitting). Share: Recommend to 5 friends (spread knowledge). Investment: 15 hours reading this book will deepen your practice, provide lifetime framework. Classic for reason. Read it.',
        '🧘 Take MBSR Course (8-Week Mindfulness-Based Stress Reduction): Enroll: MBSR (Mindfulness-Based Stress Reduction) 8-week course (gold standard, research-proven, Jon Kabat-Zinn created). Course structure: Weekly 2-hour class (8 weeks, learn: sitting meditation, body scan, mindful yoga, mindful daily living), Daily practice (45 min home practice - guided audio, structure), Full-day retreat (Day 6, silent intensive). Investment: ₹5000-15000 OR free online (Palouse Mindfulness). Commitment: 8 weeks × 2 hours class + 45 min daily = 70 hours total. Benefits (research-proven): Anxiety reduces 40-50%, Stress reduces (lower cortisol), Focus improves, Sleep improves, Immune function improves, Pain reduces, Well-being increases. Why MBSR?: Structured (not figuring out alone - expert guidance), Proven (40 years research, thousands of studies), Comprehensive (multiple techniques, not just breath), Community (cohort support, shared journey), Certification (some programs certify - can teach others). After 8 weeks: Deep practice foundation, Trained mind, Tools for life, Community connections. In B.Com, invest in MBSR (best 70 hours you will spend, benefits last lifetime). Summer break perfect time. Transform your mind.',
        '🏞️ Attend 10-Day Vipassana Retreat: Attend: 10-day Vipassana meditation retreat (intensive, silent, transformative - ancient technique, profound experience). Retreat structure: Silent (no talking entire 10 days - just you and your mind), Intensive (meditate 10-12 hours/day - sitting, walking, all activities mindful), No distractions (no phone, no books, no writing, no eye contact - remove all escapes), Teacher guidance (evening discourses, technique instruction, questions), Free (donation-based, accessible to all). Experience: Days 1-3: Hard (mind rebels "I want to leave! This is boring! Too hard!"), body hurts (sitting hurts back, knees), want to quit. Days 4-7: Breakthrough (push through discomfort, mind settles, experience moments of deep peace, quiet mind), insights arise (understand patterns, see truth about yourself, profound realizations). Days 8-10: Deepest peace (mind very quiet, long stretches no mental chatter, present, blissful, profound experience). Re-entry (Day 11): Return to world transformed (different relationship with mind, thoughts, life). Benefits: Experience deep states (most people never experience quiet mind - you experience it, know it is possible), Transform relationship (with mind, thoughts, anxiety - see clearly: thoughts are just thoughts, not facts), Breakthrough insights (understand yourself deeply, what matters, how to live), Renewed commitment (after 10 days intensive, daily 30 min practice feels easy, joyful). Investment: 10 days, free (donation). Hardest thing you will do. Most transformative. In B.Com, attend Vipassana (summer break, between semesters). Life-changing.',
        '🎓 Teach Mindfulness to Others: You mastered mindfulness (anxiety reduced, focus improved, present). Now TEACH (help others, deepen your practice): Create: "30-Day Mindfulness Challenge" (guide 20 people through 30 days): Day 1-7: 2 min daily meditation, Day 8-14: 5 min, Day 15-21: Add mindful eating, Day 22-30: Add body scan. Daily: Send tips, reminders, encouragement. Weekly: Group meditation (Zoom OR in-person, 20 people meditate together). Track: Participants track daily (share progress, support each other). Results: 15/20 complete 30 days (75% completion!), All 15 report: Anxiety reduced, Focus improved, Sleep better. Teach: Workshop "Mindfulness for Stress" (2 hours, 50 people, teach: what is mindfulness, how to practice, science, benefits). Blog: "Mindfulness Changed My Life" (share journey, inspire 10K readers). Mentor: Guide 5 friends personally (answer questions, support practice, celebrate their progress). Teaching benefits: Deepens your practice (teach = best way to learn, explain = understand deeper), Helps many (your transformation inspires others transformation - multiplier effect), Builds community (students, workshop attendees, blog readers - build mindfulness community), Feels fulfilling (helping others = meaning, purpose). In B.Com, teach mindfulness. Share journey. Help others. Transform campus culture (from stressed to mindful).',
        '💼 Build Lifelong Mindfulness Practice: You practiced 90 days (good). But build LIFELONG (10+ years, rest of life). Lifelong mindfulness requires: (1) DAILY NON-NEGOTIABLE: Meditate daily (even when busy, even when calm - like brushing teeth, not optional), 10-30 min (sustainable duration you can maintain decades). (2) INTEGRATE INTO LIFE: Not just sitting meditation, but mindfulness while: eating, walking, working, talking, showering, everything (present throughout life). (3) EVOLVE PRACTICE: Years 1-2: Basic (breath focus, body scan), Years 3-5: Intermediate (loving-kindness, walking meditation, longer sits), Years 5+: Advanced (retreats, deep practices, teaching). Keep evolving (prevent plateau, keep interesting). (4) COMMUNITY: Maintain sangha (meditation group, retreat community - lifelong connections, mutual support). (5) RETREATS: Annual retreat (3-10 days intensive - deepen practice, renew commitment, prevent drift). (6) GIVE BACK: Teach, mentor, volunteer (share mindfulness, help others - giving deepens your practice). Lifelong thinking: "Can I meditate 10 min daily for 50 years?" If yes, do it. Benefits compound (Year 1: Anxiety 7→3. Year 5: Anxiety baseline 2. Year 10: Deep equanimity, rarely anxious). Build lifelong practice. Your 70-year-old self will be grateful 20-year-old self started, maintained. Mindfulness = lifelong gift.'
      ]
    },
    badge: { name: 'Mindful One', emoji: '🧘', description: 'Master of mindfulness' },
    shareMessage: 'Just started mindfulness journey! 🧘 #Mindfulness #Wellness'
  }
];

export const updateSubtopicProgress = (subtopicId: string, progress: number): void => { console.log(`Updated ${subtopicId}: ${progress}%`); };
export const generatePersonalizedFeedback = (responses: any[]): string => { return "Feedback..."; };
export const loadModuleProgress = (): any => { return {}; };
export const saveModuleProgress = (progress: any): void => { console.log('Saving:', progress); };
export const module8Subtopics = module8Data;

// Module 8 Assessment
export const module8Assessment: AssessmentData = {
  id: 'module8-assessment',
  title: 'Mental & Physical Health Assessment',
  description: 'Test your wellness and health management mastery',
  questions: [
    // Stress Management (1-5)
    {
      id: 1,
      question: 'Chronic stress (3+ months) affects your body and mind. What does it impact?',
      options: ['Nothing (stress is harmless)', 'PHYSICAL and MENTAL HEALTH - weakens immune system, disrupts sleep, increases anxiety/depression risk, impairs focus', 'Only mood (just feel stressed)', 'Only work performance'],
      correct: 1,
      explanation: 'Chronic stress affects PHYSICAL and MENTAL HEALTH (not nothing, not just mood, not just work). Chronic stress (3+ months constant stress) causes: PHYSICAL: Weakened immune system (sick often), disrupted sleep (insomnia, poor quality), high blood pressure, digestive issues, headaches, muscle tension. MENTAL: Increased anxiety/depression risk, impaired focus and memory, irritability, emotional exhaustion, burnout. In B.Com, chronic stress from exams/placements affects everything. Manage stress through: breathing, exercise, boundaries, support.'
    },
    {
      id: 2,
      question: 'Deep breathing (4-7-8 technique) helps with stress. How does it work?',
      options: ['Wastes time (does nothing)', 'ACTIVATES RELAXATION RESPONSE - long exhale triggers parasympathetic nervous system (heart slows, muscles relax, anxiety reduces 50% in 2 min)', 'Just trendy (no science)', 'Avoids problems (distraction only)'],
      correct: 1,
      explanation: 'Deep breathing ACTIVATES RELAXATION RESPONSE (not wastes time, proven science, not avoidance). 4-7-8 breathing (breathe in 4 sec, hold 7 sec, out 8 sec × 4 rounds = 2 min) works by: Long exhale (8 sec) activates parasympathetic nervous system (relaxation mode, opposite of fight-or-flight). Result: Heart rate slows, blood pressure drops, muscles relax, anxiety reduces 50%. Use before exams, during panic, before sleep. Instant calm tool, always available.'
    },
    {
      id: 3,
      question: 'Exercise for stress relief. What role does it play?',
      options: ['Makes stress worse', 'POWERFUL STRESS RELIEVER - releases endorphins (natural mood boosters), processes stress hormones, improves sleep, reduces anxiety 40%', 'Optional (nice to have)', 'Too tiring (adds stress)'],
      correct: 1,
      explanation: 'Exercise is POWERFUL STRESS RELIEVER (not worse, not optional, not tiring). 30 min exercise: Releases endorphins (natural mood boosters, "runner high"), processes stress hormones (cortisol), improves sleep (fall asleep faster), reduces anxiety 40%, boosts energy. In B.Com, exercise during exam stress = essential (not luxury). Run, gym, yoga, sports - choose what you enjoy. 30 min daily = stress management tool.'
    },
    {
      id: 4,
      question: 'Healthy coping mechanisms for stress include:',
      options: ['Substances (alcohol, drugs to numb)', 'EXERCISE, TALKING TO FRIENDS, CREATIVE OUTLETS - process stress healthily without harm', 'Isolation (deal alone)', 'Avoidance (ignore stress)'],
      correct: 1,
      explanation: 'Healthy coping = EXERCISE, TALKING, CREATIVE OUTLETS (not substances, not isolation, not avoidance). Healthy coping: Exercise (releases stress, boosts mood), talking to friends/family (share burden, get support), creative outlets (music, art, cooking - express emotions), journaling (process feelings), meditation (calm mind). Unhealthy coping: Substances (alcohol, drugs - temporary numb, long-term harm), isolation (face alone, worsens stress), avoidance (ignore problems, they worsen). In B.Com, build healthy coping habits. Stress is inevitable. Healthy coping = manage stress without harming yourself.'
    },
    {
      id: 5,
      question: 'When overwhelmed by stress, what should you do?',
      options: ['Push through alone (be tough)', 'SEEK SUPPORT - talk to friends, family, counselor (share burden, get help, reduce isolation)', 'Hide it (do not burden others)', 'Quit everything (give up)'],
      correct: 1,
      explanation: 'When overwhelmed: SEEK SUPPORT (not push alone, not hide, not quit). Overwhelmed = stress exceeds coping capacity (cannot handle alone). Seek support: Friends (talk, share burden, get encouragement), family (support, perspective), counselor (professional help, coping strategies). Support helps: Reduce isolation (not alone), provide perspective (see solutions), offer practical help. In B.Com, when overwhelmed by exams/placements: Reach out. Do not suffer alone. Support = essential for managing overwhelm.'
    },
    // Work-Life Balance (6-10)
    {
      id: 6,
      question: 'Work-life balance means equal time (8 hrs work, 8 hrs personal, 8 hrs sleep daily). True or false?',
      options: ['True (perfect 50-50 split daily)', 'FALSE - balance = RIGHT PRIORITIES and BOUNDARIES (work M-F 9-6, life evenings/weekends - flexible, long-term balance, not rigid 50-50)', 'Balance = no work (only life)', 'Balance = all work (hustle culture)'],
      correct: 1,
      explanation: 'Balance = RIGHT PRIORITIES and BOUNDARIES (not 50-50 split, not no work, not all work). Balance is NOT equal time daily (8 hrs work, 8 hrs personal - rigid, impractical). Balance IS: Right priorities at right time (deadline week = more work, post-deadline = more rest), boundaries (work 9-6, personal 6-10 PM, weekend rest), flexible (some days more work, some more personal), long-term (over weeks/months, both work and life get time). In B.Com, think weekly balance: M-F work 45 hrs, weekends personal 20 hrs = balanced (not equal, but both get time). Flexible priorities + clear boundaries = sustainable balance.'
    },
    {
      id: 7,
      question: 'Setting work boundaries (work 9-6, personal 6-10 PM) helps by:',
      options: ['Limiting success and career growth', 'PROTECTING ENERGY and PREVENTING BURNOUT - forces focus during work, protects personal time for rest/recovery, sustainable performance', 'Helping you avoid work', 'Being lazy (not working hard)'],
      correct: 1,
      explanation: 'Boundaries PROTECT ENERGY and PREVENT BURNOUT (not limit success, not avoid work, not lazy). Work 13 hrs/day (no boundaries) = burnout (Month 3: exhausted, performance drops). Work 9 hrs/day with boundaries (9-6, then personal 6-10 PM) = sustainable (forces focus during work, protects personal time for rest, prevents burnout). In B.Com, boundaries enable better performance (9 hrs focused > 13 hrs exhausted). Set boundaries early, protect them.'
    },
    {
      id: 8,
      question: 'Rest should be earned (work hard, then deserve rest) or scheduled?',
      options: ['Earned only (work hard first)', 'SCHEDULED and PROTECTED - block on calendar like work meetings (6:30 PM exercise, Saturday rest), non-negotiable, no guilt', 'Optional (when have time)', 'Only when exhausted (collapse)'],
      correct: 1,
      explanation: 'Rest should be SCHEDULED and PROTECTED (not earned, not optional, not only when exhausted). "Earned rest" problem: Never feel you earned it (always more work), guilt prevents rest, burnout inevitable. FIX: Schedule rest (block on calendar like work meetings - 6:30 PM exercise, Saturday rest day, non-negotiable). Scheduling rest: Guarantees it happens (not "when I have time" - never happens), eliminates guilt (scheduled = supposed to rest), equal status to work. In B.Com, schedule rest. Block on calendar. Protect it. Rest is REQUIRED (not earned).'
    },
    {
      id: 9,
      question: 'Manager asks: "Can you work Saturday?" You need rest. Saying NO helps or hurts?',
      options: ['Saying no avoids opportunities (limits career)', 'Saying NO PROTECTS TIME for PRIORITIES - rest Saturday (recover energy for better M-F performance) vs work Saturday (exhausted Monday, poor performance)', 'Saying no is rude (unprofessional)', 'Saying no limits growth'],
      correct: 1,
      explanation: 'Saying NO PROTECTS PRIORITIES (not avoids opportunity, not rude, not limits growth). Manager: "Work Saturday?" You need rest. Say no: "I have commitment Saturday (rest day). Can we finish by Friday?" Manager: "OK." You said no to Saturday work, yes to: Rest (recover energy), better M-F performance (rested = energized Monday = better work), sustainable pace. Result: You rest Saturday, perform better M-F than colleagues who worked Saturday (they are exhausted Monday). In B.Com, learn to say NO. Protect priorities (health, rest, relationships). Saying no = smart prioritization (not avoiding opportunity).'
    },
    {
      id: 10,
      question: 'Work-life balance improves what?',
      options: ['Nothing (balance reduces performance)', 'BOTH PERFORMANCE and WELL-BEING - work better (focused, energized, creative), live better (health, relationships, joy)', 'Only mood (feel better)', 'Only physical health'],
      correct: 1,
      explanation: 'Balance improves BOTH PERFORMANCE and WELL-BEING (not nothing, not just mood, not just health). With balance (work 9-6, personal 6-10 PM, Saturday rest): PERFORMANCE: Better focus (rested brain), higher productivity (9 hrs focused > 13 hrs exhausted), better decisions, more creativity, sustainable (can maintain long-term). WELL-BEING: Better health (exercise, sleep), stronger relationships (time for friends/family), more joy (hobbies), lower stress, higher life satisfaction. In B.Com, balance is WIN-WIN (not trade-off). Better work AND better life simultaneously.'
    },
    // Mental Health (11-15)
    {
      id: 11,
      question: 'Friend: "Depression = weakness. I should not need counselor." Is mental health important?',
      options: ['Mental health issues are weakness', 'Mental health is AS IMPORTANT as physical health - depression/anxiety are MEDICAL CONDITIONS (brain chemistry), need treatment, seeking help = strength', 'Mental health only for some people', 'Mental health problems are not real'],
      correct: 1,
      explanation: 'Mental health = AS IMPORTANT as physical health (not weakness, mental health problems ARE real). Depression/anxiety = medical conditions (brain chemistry imbalance, like diabetes). NOT weakness, NOT character flaw. If broken leg: see doctor (no shame). If depression: see counselor (same - medical treatment, no shame). Seeking help = strength (not weakness). Therapy works (80% improve). In B.Com, break stigma. Mental health matters. Seeking help = smart, not weak.'
    },
    {
      id: 12,
      question: 'Friend: Withdrawn (skips classes, avoids friends), sad (always down), sleep changes, quit hobbies, grades dropping. What are these?',
      options: ['Normal happiness', 'WARNING SIGNS of mental health struggles - persistent sadness, withdrawal, sleep changes, lost interest (needs professional help)', 'Just occasional stress', 'Just being busy'],
      correct: 1,
      explanation: 'These are WARNING SIGNS of mental health struggles (not normal, not just stress). Friend shows: Persistent sadness (2+ weeks), withdrawal (avoids friends), sleep changes (sleeps all day or insomnia), lost interest (quit hobbies), grades dropping. These are depression warning signs. Early recognition = early help = better outcomes. If you/friend show warning signs (especially 2+ weeks): Encourage professional help (college counseling, crisis hotline if suicidal). In B.Com, learn warning signs. Recognize early. You can save lives.'
    },
    {
      id: 13,
      question: 'You feel: Persistent sadness (3 weeks), cannot sleep, lost interest, grades dropping. What should you do?',
      options: ['Hide it (do not burden others)', 'SEEK PROFESSIONAL HELP - college counseling (free, confidential), talk to friends/family (reduce isolation), therapy if needed', 'Tough it out alone (be strong)', 'Ignore it (will go away)'],
      correct: 1,
      explanation: 'If struggling: SEEK PROFESSIONAL HELP (not hide, not tough it out, not ignore). Persistent sadness (3 weeks), sleep problems, lost interest, grades dropping = depression symptoms. Need: College counseling (FREE, confidential, professional - book appointment), support (talk to friends/family - reduce isolation), therapy if needed. Do NOT wait (depression worsens untreated). Seeking help = strength (not weakness). Depression is treatable (therapy works). In B.Com, if depressed/anxious 2+ weeks: Seek help. Do not suffer alone. You deserve to feel better.'
    },
    {
      id: 14,
      question: 'Friend: "I think I am depressed." How to support? (A) "Just think positive!" OR (B) "Thank you for sharing. Your feelings are valid. Have you considered counselor?"',
      options: ['A: Fix their problems yourself', 'B: LISTEN WITHOUT JUDGMENT - validate feelings, encourage professional help, stay connected (NOT: toxic positivity, minimize, judge)', 'A: Avoid the topic (uncomfortable)', 'A: Minimize (everyone gets sad)'],
      correct: 1,
      explanation: 'Support by: B: LISTEN WITHOUT JUDGMENT (not fix, not avoid, not minimize). Friend: "I am depressed." Option A (HARMFUL): "Just think positive!" (toxic positivity), "You are being dramatic!" (judgment), "You have good life, why sad?" (invalidation). Result: Friend feels worse, withdraws. Option B (SUPPORTIVE): "Thank you for sharing. This is hard. Your feelings are valid. Have you considered counselor? I will go with you. I am here." Result: Friend feels heard, supported, encouraged to get help. In B.Com, learn to support: Listen, validate, encourage help, stay connected. Do NOT: toxic positivity, judge, minimize.'
    },
    {
      id: 15,
      question: 'You help friend with depression. But YOUR mental health? High stress, poor sleep, no exercise, isolated. What is self-care?',
      options: ['Self-care is selfish', 'SELF-CARE = SLEEP, EXERCISE, CONNECTION, BOUNDARIES, HOBBIES - prevention (protect mental health before crisis, build reserves)', 'Self-care is avoiding responsibility', 'Self-care only when stressed'],
      correct: 1,
      explanation: 'Self-care = SLEEP, EXERCISE, CONNECTION, BOUNDARIES, HOBBIES (not selfish, not avoiding responsibility, not only when stressed). You help friend but neglect YOUR mental health (high stress, poor sleep, no exercise, isolated = HIGH RISK for depression/anxiety). Self-care is PREVENTION (protect mental health before crisis). Daily: Sleep 8 hrs, exercise 30 min, social connection, hobbies, boundaries (study 10 hrs max), mindfulness. Self-care = deposits in mental health bank. Stress = withdrawals. Keep deposits > withdrawals. In B.Com, practice self-care DAILY. You cannot pour from empty cup.'
    },
    // Physical Wellness (16-20)
    {
      id: 16,
      question: 'You study 14 hrs/day, sleep 5 hrs. GPA drops 7.5→6.8 despite studying MORE! Friend sleeps 8 hrs, studies 10 hrs. GPA improves 7.5→8.2. Recommended sleep?',
      options: ['4-5 hours (sacrifice sleep)', '8 HOURS - brain consolidates learning during sleep (without sleep: study→forget; with sleep: study→remember)', '10-12 hours (oversleep)', 'Whatever works (flexible)'],
      correct: 1,
      explanation: 'Recommended sleep = 8 HOURS (not 4-5, not 10-12). You sleep 5 hrs, study 14 hrs. GPA DROPS 7.5→6.8 (despite studying MORE!). Why? Brain needs sleep to consolidate learning. Without sleep: study → forget. Friend sleeps 8 hrs, studies 10 hrs. GPA IMPROVES 7.5→8.2. Why? With sleep: study → remember. Sleep deprivation = cannot focus, cannot remember, poor performance. In B.Com, sleep 8 hrs non-negotiable. 8 hrs sleep + 10 hrs focused study > 5 hrs sleep + 14 hrs foggy study. Your grades depend on sleep.'
    },
    {
      id: 17,
      question: 'You: No exercise (too tired, no time). Result: Exhausted, cannot focus. Classmate: Exercise 30 min/day. Result: High energy, sharp focus. Exercise frequency?',
      options: ['Only when feel like it', '30 MINUTES DAILY (5-7 days/week) - boosts energy, improves focus 50%, reduces stress, improves sleep', 'Daily 2 hours mandatory', 'Not needed for students'],
      correct: 1,
      explanation: 'Exercise = 30 MINUTES DAILY (not optional, not 2 hrs, not "not needed"). You: No exercise. "Too tired." Result: MORE tired (negative spiral). Classmate: Exercise 30 min/day. Result: High energy, sharp focus. PARADOX: Exercise BOOSTS energy (not takes energy). Benefits: Energy increases, focus improves 50%, stress reduces, sleep improves, mood improves. In B.Com, exercise 30 min daily (morning run, bodyweight, yoga, sports). Exercise = performance strategy (not luxury). 30 min exercise + 9.5 hrs study > 0 min + 10 hrs.'
    },
    {
      id: 18,
      question: 'Your diet: Skip breakfast, burger lunch, instant noodles dinner. Result: Brain fog, crash, grades dropping. What is good nutrition?',
      options: ['Supplements only', 'REAL FOOD - complex carbs (oats, rice), protein (eggs, dal), healthy fats (nuts), vitamins (fruits, vegetables)', 'Whatever is fast (junk)', 'Skip meals (save time)'],
      correct: 1,
      explanation: 'Good nutrition = REAL FOOD (not supplements, not junk, not skip meals). Your diet: Junk food (burger, noodles, energy drinks). Result: Brain fog, energy crashes, weak immunity, grades drop. Brain uses 20% energy, needs: Complex carbs (oats, rice - sustained energy), protein (eggs, dal - building blocks), healthy fats (nuts - brain function), vitamins (fruits, vegetables - immunity). Real food (dal rice eggs ₹270/day) = same price as junk but NUTRITIOUS. In B.Com, eat real food. Brain needs fuel to study effectively.'
    },
    {
      id: 19,
      question: 'Your hydration: Water 2 glasses, coffee 5 cups. Result: Headaches 4×/week, cannot focus. Research: 1-2% dehydration = 10-20% cognitive decline! What is hydration?',
      options: ['Drink only when thirsty', '8 GLASSES WATER DAILY (2 liters) - carry bottle, drink 1 glass/hour. Immediate benefits: headaches gone, focus improves 25%!', 'Coffee/energy drinks count', 'Ignore it (not important)'],
      correct: 1,
      explanation: 'Hydration = 8 GLASSES WATER DAILY (not only when thirsty, coffee does NOT count). Your hydration: Water 2 glasses, coffee 5 cups (caffeine DEHYDRATES). Result: Chronically dehydrated. Headaches 4×/week, cannot focus, exhausted. Research: 1-2% dehydration = 10-20% cognitive decline! You: 5% dehydrated = 25% performance loss! (Could score 25% HIGHER just by drinking water!). FIX: 8 glasses water/day, carry bottle, drink 1 glass/hour. Benefits (IMMEDIATE): Headaches disappear, energy increases, focus improves 25%. In B.Com, easiest performance boost: Drink water. 25% improvement for free!'
    },
    {
      id: 20,
      question: 'You neglect physical health (sleep 5hrs, junk food, no exercise). Result: GPA 7.5→6.8, sick 3×, exhausted, anxious. How does physical health affect you?',
      options: ['Body only (muscles, weight)', 'MENTAL PERFORMANCE and OVERALL WELL-BEING - affects: academic performance (focus, memory, grades), mental health (mood, anxiety), energy, long-term health', 'Nothing (separate)', 'Appearance only'],
      correct: 1,
      explanation: 'Physical health affects MENTAL PERFORMANCE and OVERALL WELL-BEING (not body only, not nothing, EVERYTHING connected). You neglect health (sleep 5hrs, junk food, no exercise). Result: GPA DROPS 7.5→6.8 (despite studying MORE!), cannot focus (brain fog), sick 3×, anxious, exhausted. Physical health = FOUNDATION for: Academic performance (brain needs sleep/nutrition to work), mental health (poor sleep worsens anxiety), energy (cannot function), life quality. In B.Com, health FIRST. Then academics. Health = investment in performance.'
    },
    // Resilience (21-25)
    {
      id: 21,
      question: 'You failed exam. Week 1: Devastated. Month 2: Still in bed. Classmate failed, Week 8: Passed supplementary (bounced back!). What is resilience?',
      options: ['Never failing (avoid failures)', 'BOUNCING BACK from setbacks - fail → feel emotions → reframe (failure = feedback) → learn → improve → try again → succeed', 'Avoiding challenges (stay safe)', 'Being perfect (never make mistakes)'],
      correct: 1,
      explanation: 'Resilience = BOUNCING BACK (not never failing, not avoiding challenges, not being perfect). You failed: Week 1 devastated, Month 2 still in bed (cannot bounce back). Classmate failed: Week 1 disappointed, Week 2 analyzed failure, Week 3-8 studied differently, Supplementary: Passed 72/100! (Bounced back!). Resilience process: Fail → feel emotions (1 day) → reframe (failure = feedback) → analyze (what went wrong?) → learn (how to improve) → try again → succeed. In B.Com, resilience = essential. You will fail many times. Resilience = bounce back every time.'
    },
    {
      id: 22,
      question: 'You failed exam. You think: "I am failure. I should quit." Friend: "Failure is FEEDBACK!" How to view failure?',
      options: ['Failure = final verdict (end)', 'Failure = FEEDBACK and LEARNING - tells you: what went wrong (study method), how to improve (practice problems), that you CAN improve', 'Failure = weakness (not good enough)', 'Failure = to avoid (never try)'],
      correct: 1,
      explanation: 'View failure as: FEEDBACK and LEARNING (not final, not weakness, not to avoid). You failed Financial Accounting. Your interpretation: "I am failure. I should quit." (FINAL VERDICT). WRONG. Failure is FEEDBACK: What went wrong (memorized without understanding), how to improve (understand concepts, practice 100 problems), that you CAN improve (not permanent, can pass next time). Failure is NOT: Final (end), identity (you ARE failure), permanent. Failure IS: Feedback (information), temporary (this time, not next), learning opportunity. In B.Com, reframe every failure. Ask: What is this teaching? How can I improve? Then: Learn, improve, try again.'
    },
    {
      id: 23,
      question: 'You think: "I am not smart enough for B.Com. I do not have talent." (Fixed mindset). Friend: "You can GROW!" What is growth mindset?',
      options: ['Challenges are threats (avoid)', 'CHALLENGES = OPPORTUNITIES TO GROW - intelligence GROWS through effort (not fixed). "I cannot do accounting YET" (can learn)', 'Challenges are failures (avoid)', 'Challenges to avoid (only do what you are good at)'],
      correct: 1,
      explanation: 'Growth mindset = CHALLENGES = OPPORTUNITIES TO GROW (not threats, not to avoid). You think: "I am not smart enough. I do not have talent." (FIXED MINDSET - intelligence is fixed, cannot improve). WRONG. GROWTH MINDSET: "I am not good at accounting YET. But I can LEARN (through effort, practice, help)." Intelligence GROWS through effort. You failed because: Wrong study method (can improve), not enough practice (can practice more), did not understand (can learn). NOT because: "Not smart enough." In B.Com, build growth mindset. Add YET. Embrace challenges. You CAN grow abilities through effort.'
    },
    {
      id: 24,
      question: 'You failed. Self-talk: "I am so stupid! I am failure!" Result: Feel worse, give up. Friend: "Be KIND!" What is self-compassion?',
      options: ['Being soft (low standards)', 'TREATING YOURSELF WITH KINDNESS - talk to yourself like friend (kind, understanding, encouraging). Self-compassion fuels motivation', 'Low standards (do not improve)', 'Giving up (accept failure)'],
      correct: 1,
      explanation: 'Self-compassion = TREATING YOURSELF WITH KINDNESS (not being soft, not low standards, not giving up). You failed. Self-talk: "I am stupid! I am failure!" (HARSH). Result: Feel WORSE, paralyzed, give up. Self-compassionate talk: "I failed. I feel disappointed. That is OK. Everyone fails. I am learning. I can improve. I can try again. I believe in myself." (KIND). Result: Feel BETTER, motivated, persist. Self-compassion is NOT low standards (you STILL try to improve, but you are KIND while doing it). Self-compassion IS: Being kind while learning, improving, trying again. In B.Com, be your own friend. Kind self-talk = bounce back. Harsh self-talk = stay stuck.'
    },
    {
      id: 25,
      question: 'You failed, isolated (avoid friends, lie to parents). Month 2: Still stuck. Classmate failed, told friends/family, got support. Week 8: Passed! How to build resilience?',
      options: ['Isolation (be tough alone)', 'SUPPORT NETWORK and PRACTICE - friends (encourage), family (believe in you), mentor (guide) + practice bouncing back from setbacks', 'Avoid challenges (prevent failures)', 'Tough alone (do not need anyone)'],
      correct: 1,
      explanation: 'Build resilience through: SUPPORT NETWORK and PRACTICE (not isolation, not avoiding, not tough alone). You isolated (avoid friends, lie to parents). Result: Month 2 still stuck (no support, cannot bounce back). Classmate sought support (told friends, family, professor). Result: Week 8 passed supplementary (support helped bounce back!). Build resilience: (1) SUPPORT NETWORK (close friends, family, mentor, peers - call when fail, get encouragement, help), (2) PRACTICE (every setback = practice bouncing back, build resilience muscle). In B.Com, build support network. Do not face setbacks alone. Support + practice = resilience.'
    },
    // Mindfulness (26-30)
    {
      id: 26,
      question: 'You think: "Mindfulness = empty mind (no thoughts)." You try, fail (thoughts keep coming!). Friend: "Mindfulness is NOT that!" What IS mindfulness?',
      options: ['Emptying mind completely', 'PRESENT MOMENT AWARENESS WITHOUT JUDGMENT - being HERE NOW, noticing thoughts without judgment, gently returning when mind wanders', 'Relaxation only (just calm)', 'Avoiding thoughts (never think)'],
      correct: 1,
      explanation: 'Mindfulness = PRESENT MOMENT AWARENESS WITHOUT JUDGMENT (not empty mind, not just relaxation, not avoiding thoughts). You think: "Mindfulness = empty mind (stop all thoughts)." You try: Thoughts keep coming. You think: "I failed!" WRONG. Mindfulness is NOT: Emptying mind (impossible), never having thoughts (unrealistic). Mindfulness IS: Being present (HERE, NOW), noticing when mind wanders ("Oh, mind is worrying"), no judgment ("That is OK"), gently returning (back to breath). Mind WILL wander (normal!). Practice = notice + return. In B.Com, mindfulness is simple: Present, aware, non-judgmental, return when wander.'
    },
    {
      id: 27,
      question: 'Meditation: You sit, focus on breath. 10 seconds later: Mind wanders. You think: "I FAILED!" Friend: "Mind wandering is NORMAL!" What to do when mind wanders?',
      options: ['You failed (give up)', 'GENTLY RETURN to focus - notice mind wandered (no judgment), gently return to breath. Mind wanders 20×/5 min is NORMAL!', 'Give up (not for you)', 'Force control (fight mind)'],
      correct: 1,
      explanation: 'When mind wanders: GENTLY RETURN (not "you failed", not give up, not force). You meditate: 10 sec later mind wanders. You think: "I failed!" WRONG. Mind wandering is NORMAL (brain produces 6000 thoughts/day, mind will wander). Meditation is NOT: Never let mind wander. Meditation IS: Notice when mind wanders ("Oh, I am thinking about assignment"), no judgment ("That is OK"), gently return to breath (like guiding puppy back - patient, kind), repeat (wander → notice → return × 20 times in 5 min = NORMAL!). Every return = 1 rep (training!). In B.Com, when mind wanders: Gently return. Be patient, be kind. Wandering is not failure. Wandering is opportunity to practice returning.'
    },
    {
      id: 28,
      question: 'You want to start mindfulness. You think: "I need 1 hour, perfect quiet room, monastery." You have none. What should you start with?',
      options: ['1 hour sessions (serious commitment)', '2-5 MINUTES BREATH FOCUS - sit anywhere, close eyes, notice breath, mind wanders (normal), gently return. Daily. Simple. Doable.', 'Complex techniques (advanced)', 'Perfection (perfect or do not start)'],
      correct: 1,
      explanation: 'Start with: 2-5 MINUTES BREATH FOCUS (not 1 hour, not complex, not perfection). You think: "Need 1 hour, quiet room, monastery." You have: Noisy hostel, 10 min free time. You think: "Cannot meditate." WRONG. Requirements: 2-5 minutes (have this!), anywhere (chair, bed - no monastery needed), just breath (no complex technique), imperfect (mind WILL wander - OK!). Start: 2 min daily (sit, breathe, notice, return). Build to 5 min. Consistency > duration. 2 min daily × 365 days = 12 hrs mind training! In B.Com, start SIMPLE. 2-5 min breath focus. Daily. That is ALL. Do not wait for perfect conditions. Start imperfect NOW.'
    },
    {
      id: 29,
      question: 'You meditate: When stressed (exam → meditate 20 min). When calm (no stress → no meditation). Week 10: Still anxious. Friend: "Meditate DAILY!" What should practice be?',
      options: ['Only when stressed (reactive)', 'DAILY CONSISTENT PRACTICE - 5 min every morning (preventive, training) - builds trained mind over time (NOT just when stressed)', 'Long sessions only (1 hour)', 'Occasional (when remember)'],
      correct: 1,
      explanation: 'Practice = DAILY CONSISTENT (not only when stressed, not long sessions only, not occasional). You meditate: Only when stressed (reactive). Week 10: Still anxious (meditation does not seem to work). Why? REACTIVE (meditate when stressed, stop when calm) does not build trained mind. PREVENTIVE (daily practice even when calm) builds trained mind over time. Like exercise: Daily exercise (even when healthy) = build strong body. Daily meditation (even when calm) = build trained mind. Result: Anxiety baseline REDUCES (Week 1: 7/10, Week 12: 3/10). In B.Com, meditate DAILY (5 min every morning). Daily consistency = train mind = anxiety reduces, focus improves.'
    },
    {
      id: 30,
      question: 'You meditate 5 min daily × 12 weeks. Results: Anxiety 7/10→3/10, focus 5 min→1 hour, better sleep, excellent exam performance. What are mindfulness benefits?',
      options: ['Nothing proven (just trendy)', 'REDUCES STRESS and IMPROVES FOCUS - anxiety down 50%, focus improves dramatically, better sleep, better performance (research-proven, brain changes)', 'Only relaxation (temporary)', 'Just trendy (no substance)'],
      correct: 1,
      explanation: 'Mindfulness benefits: REDUCES STRESS and IMPROVES FOCUS (not nothing, not just relaxation, not trendy - PROVEN). You practice: 5 min daily × 12 weeks. Results: Anxiety 7/10→3/10 (57% reduction!), focus 5 min→1 hour (12× improvement!), sleep improves (fall asleep 1 hour→15 min), exam performance excellent. Research: Brain scans show mindfulness changes brain (increases gray matter in focus areas, decreases amygdala anxiety center). Studies: 8 weeks mindfulness reduces anxiety 50%, improves focus 40%. In B.Com, mindfulness benefits are PROVEN. 5 min daily = reduce stress, improve focus, better performance. Real brain training, real benefits.'
    }
  ],
  gradingScale: {
    excellent: { min: 27, max: 30, message: 'Outstanding! Wellness master!', xpReward: 300 },
    good: { min: 21, max: 26, message: 'Great! Strong health awareness!', xpReward: 250 },
    satisfactory: { min: 15, max: 20, message: 'Good! Keep building habits!', xpReward: 200 },
    needsImprovement: { min: 0, max: 14, message: 'Review wellness practices!', xpReward: 100 }
  }
};
