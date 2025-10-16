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
          title: 'Academic Stress Survival Kit',
          description: 'Finals week chaos? 5 exams + job hunt + burnout vibes. Let\'s build your stress toolkit.',
          instructions: [
            '• List your stress triggers: exams, assignments, job apps, finances, relationships',
            '• Practice 4-7-8 breathing daily: inhale 4s, hold 7s, exhale 8s',
            '• Exercise 30min daily: walk, jog, yoga—endorphins = natural stress relief',
            '• Set boundaries: study 8AM-6PM, sleep 8hrs, weekends = guilt-free rest',
            '• Talk to someone: friends, counselor, study group—you\'re not alone',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Ignoring stress until burnout—start managing early when symptoms appear',
            '• Using unhealthy coping: doomscrolling 4hrs, all-nighters, isolation—try exercise instead',
            '• No boundaries: 18hr study days = burnout—set limits now',
            '• Going solo: "I\'ll handle this alone"—nope, get support',
            '• One-time practice then quit—build daily routine for real results'
          ],
          successCriteria: [
            '✅ You identify your top 3 stress triggers clearly',
            '✅ You practice breathing 3x daily for 1 week straight',
            '✅ You exercise 30min, 5 days this week consistently',
            '✅ You set study + sleep boundaries and stick to them',
            '✅ Your stress drops from 8/10 to 5/10 or lower'
          ]
        },
        professional: {
          title: 'Workplace Stress Boss Mode',
          description: 'Intern life: 60hr weeks, tight deadlines, imposter syndrome. Time to set boundaries.',
          instructions: [
            '• Identify work stressors: workload, deadlines, expectations, work-life balance issues',
            '• Use breathing before meetings: 4-7-8 technique calms nerves instantly',
            '• Exercise before work: 30min morning jog boosts focus all day',
            '• Set work boundaries: negotiate workload, work 9-6, no weekend emails',
            '• Build healthy coping: talk to mentor, hobbies, social time matters',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Accepting 60hr weeks as normal—startups need boundaries too',
            '• Working evenings/weekends with no rest—burnout incoming fast',
            '• "Too busy to exercise"—30min exercise beats 30min extra work',
            '• Unhealthy coping: stress drinking, Netflix binges—temporary fix only',
            '• Suffering alone, not telling mentor—they can help, just ask'
          ],
          successCriteria: [
            '✅ You list 5 work stressors and prioritize top 3',
            '✅ You breathe before every stressful meeting for 1 week',
            '✅ You exercise 30min before work, 5 days straight',
            '✅ You set clear work hours and stick to them',
            '✅ You reduce work stress from 8/10 to 4/10 or lower'
          ]
        },
        personal: {
          title: 'Life Stress Survival Guide',
          description: 'Everything feels overwhelming? Exams, money, relationships, future. Build your daily stress management routine.',
          instructions: [
            '• List all stress sources: academic, career, money, relationships, health, future',
            '• Practice breathing 3x daily: morning wake-up, midday reset, bedtime wind-down',
            '• Walk 30min daily: clears mind, improves sleep, boosts mood naturally',
            '• Set life boundaries: study hours, sleep time, weekend rest, social media limits',
            '• Use healthy coping: journal, hobbies, friends, nature walks—not doomscrolling',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Too busy for stress management"—36min daily saves hours of low productivity',
            '• Inconsistent practice: Week 1 breathing, Week 2 skip—no lasting benefit',
            '• No boundaries: 18hr study, 4hr sleep—burnout guaranteed fast',
            '• Unhealthy coping: social media spirals, junk food binges—feel worse',
            '• Avoiding help: "Should handle alone"—everyone needs support sometimes'
          ],
          successCriteria: [
            '✅ You identify your top 5 personal stress sources',
            '✅ You complete 1 week of 3x daily breathing practice',
            '✅ You walk 30min for 5 days this week minimum',
            '✅ You set and maintain clear life boundaries daily',
            '✅ Your stress drops from 9/10 to 4/10 or lower'
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
          title: 'Study-Life Balance Kit',
          description: '14hr study days, zero life? Burned out, GPA tanking, friends gone. Time to work smart, not just hard.',
          instructions: [
            '• Track your time: Study hours, personal hours, sleep, friends—see the imbalance clearly',
            '• Set boundaries: Study 8AM-6PM only, personal 6-10PM, Saturdays = zero study guilt-free',
            '• Schedule rest like work: Block calendar—exercise 6:30PM, hobbies 8PM, Friday dinner = non-negotiable',
            '• Say no to overcommit: Decline 2 clubs, limit favors—protect your energy boundaries',
            '• Balance during exams: 10hr study + keep exercise + Friday dinner = better performance',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Studying 14hr daily with no rest—Month 2: GPA drops anyway',
            '• Guilt about resting—Saturday guilt-trap achieves nothing, just exhaustion',
            '• No boundaries: study "till done"—midnight every night, burnout incoming',
            '• Skipping personal time for urgent work—personal always loses, life disappears',
            '• Saying yes to everything—3 clubs + fest + favors = overwhelmed'
          ],
          successCriteria: [
            '✅ You track and see imbalance: 14hr study, 0 personal time',
            '✅ You set clear boundaries: study 8-6, personal 6-10PM, Saturday rest',
            '✅ You schedule and protect rest: exercise + hobbies + Friday dinner blocked',
            '✅ You say no: decline 2 clubs, fest volunteer—energy protected',
            '✅ Your GPA improves with LESS hours: 7.0→7.8, 14hr→10hr study'
          ]
        },
        professional: {
          title: 'Work-Life Balance Boss',
          description: '13hr days + weekends, partner threatening breakup, burned out. Manager says you\'re inefficient. Time for boundaries.',
          instructions: [
            '• Track imbalance: 91hr/week work, zero personal, relationship crisis—see the damage clearly',
            '• Set boundaries with manager: Work 9-6 only, no weekends, cut to 45hr/week',
            '• Schedule rest: Exercise 6:30PM, date night Wednesday 8PM, Saturday zero work—blocked calendar',
            '• Say no at work: Decline Saturday work, excessive projects—protect 45hr limit',
            '• Balance during deadlines: 10hr days + keep exercise + partner time = launch success',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Working 13hr/day with no boundaries—Month 3: can\'t work, quit job',
            '• Working every weekend—exhausted Monday, poor performance all week',
            '• "Rest when I have time"—never happens, burnout guaranteed fast',
            '• Canceling personal time for urgent work—relationships die slowly then suddenly',
            '• Saying yes to everything—65hr/week, overwhelmed, promoted? Nope, burned out'
          ],
          successCriteria: [
            '✅ You assess imbalance: 91hr/week work, burned out, performance dropping badly',
            '✅ You negotiate boundaries: 9-6 work, 45hr/week max, weekends protected',
            '✅ You schedule rest: exercise + date nights + Saturday rest = non-negotiable',
            '✅ You say no: decline Saturday work, protect 45hr cap consistently',
            '✅ You improve performance working LESS: better quality, happier, promoted!'
          ]
        },
        personal: {
          title: 'Life Balance Blueprint',
          description: '16hr/day work, no friends, no hobbies, no life. Exhausted, unfulfilled, lonely. Friend says "You need life, not just work."',
          instructions: [
            '• Assess life areas: Work 112hr/week, exercise 0, social 0, hobbies 0—see what\'s missing',
            '• Define life priorities: Health, relationships, joy, growth, meaning, rest—all matter, not just work',
            '• Set life boundaries: Work 8-6, personal 6-10PM, sleep 8hr, Saturday zero work—full life',
            '• Build life habits: Exercise daily, Friday dinner, hobbies 8PM, Sunday volunteer—complete life',
            '• Balance during busy times: 11hr work + 20min exercise + half Saturday rest = survived',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Work hard now, balance later"—burnout now, no later happens',
            '• Guilt about Saturday rest—force work, achieve nothing, still tired',
            '• "Exercise when I have time"—never happens, no life happens',
            '• Abandoning all balance during exams—burn out when you need focus most',
            '• Replying to 10PM work emails—work invades life, no boundaries'
          ],
          successCriteria: [
            '✅ You see life imbalance: 16hr work, 0 personal, exhausted, lonely',
            '✅ You define priorities: health, relationships, joy, growth, meaning, rest = equal to work',
            '✅ You set boundaries: work 8-6, personal 6-10PM, Saturday rest = life protected',
            '✅ You build habits: exercise, friends, hobbies, volunteer—complete life, not just work',
            '✅ You transform: better performance + health + relationships + joy = fulfilled life'
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
          title: 'Mental Health Support Kit',
          description: 'Friend withdrawn, sad, GPA dropping, quit cricket. Stigma says "be positive!" but they need real help. Learn to recognize, support, save lives.',
          instructions: [
            '• Recognize warning signs: Withdrawn, sad 2+ weeks, sleep changes, quit hobbies, GPA drops—not "just tired"',
            '• Learn resources NOW: College counseling (free, confidential), crisis hotlines (24/7), therapy, support groups, apps',
            '• Support friend right: Listen without judgment, validate feelings, encourage counseling—not "just be positive!"',
            '• Accompany to help: Go with friend to counseling, check in weekly—ongoing support matters',
            '• Practice self-care: Sleep 8hr, exercise 30min, boundaries—protect YOUR mental health too',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Missing signs 3 months: "Just tired"—nope, depression needs help early',
            '• Toxic positivity: "Smile more!"—friend feels judged, withdraws more',
            '• Don\'t know resources: Can\'t help in crisis—learn college counseling now',
            '• Abandon after one talk: Friend alone during recovery—check in weekly',
            '• Neglect your health helping others—you burn out, can\'t help anyone'
          ],
          successCriteria: [
            '✅ You recognize warning signs: Withdrawal, sadness, sleep changes, lost interest = depression',
            '✅ You know resources: College counseling free/confidential, crisis hotlines, therapy options',
            '✅ You support effectively: Listen, validate, encourage help, accompany, stay connected',
            '✅ Friend recovers: Gets therapy, improves, back to life—you helped save them',
            '✅ You share and reduce stigma: Post viral, 150 students helped, club started'
          ]
        },
        professional: {
          title: 'Workplace Mental Health Boss',
          description: 'Colleague exhausted, withdrawn, missing deadlines, talks about quitting. Burnout + depression at work. Learn to support, build healthy team culture.',
          instructions: [
            '• Notice workplace signs: Exhausted, withdrawn, performance drops, irritable, talks of quitting—burnout/depression',
            '• Learn company resources: EAP (free counseling), HR support, health insurance, flexible work options',
            '• Support colleague: Check in privately, listen, validate, share EAP contact, adjust workload—not "work harder!"',
            '• Implement support plan: Reduce workload 50hr→40hr, flexible hours, weekly check-ins—actual help',
            '• Build team culture: Normalize mental health talks, share resources, 40hr weeks, no weekend emails—prevention',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Ignoring signs: "Just stressed"—colleague quits or crisis happens',
            '• Toxic positivity at work: "Be positive!"—feels unsupported, leaves',
            '• Don\'t know EAP exists: Can\'t help because unaware of free resources',
            '• Give counseling but keep 50hr weeks—burnout continues, doesn\'t help',
            '• Help once, stop checking in—colleague alone during recovery'
          ],
          successCriteria: [
            '✅ You spot signs early: Exhausted, withdrawn, performance drop, quitting thoughts',
            '✅ You know workplace resources: EAP free counseling, HR accommodations, insurance coverage',
            '✅ You support well: Listen, validate, EAP contact, workload reduced, flexible hours',
            '✅ Colleague recovers: Counseling + workload fix = fully recovered, stays, thrives',
            '✅ You get promoted: CEO sees mentally healthy culture, productivity up, retention up'
          ]
        },
        personal: {
          title: 'Personal Mental Health Blueprint',
          description: 'You feel anxious 24/7, can\'t sleep, worry constantly, grades affected. Friend says "see counselor" but stigma: "I\'m not crazy!" Time to overcome stigma, get help.',
          instructions: [
            '• Recognize your symptoms: Anxious 3+ months, can\'t sleep, racing thoughts, can\'t focus—anxiety disorder, needs help',
            '• Overcome stigma: Anxiety = medical condition (like diabetes), counseling = smart, not crazy—break stigma',
            '• Seek help: Book college counseling, start therapy (CBT), learn coping tools—treatment works 80%',
            '• Practice therapy tools: CBT daily (challenge anxious thoughts), breathing exercises, mindfulness, self-care—recovery',
            '• Maintain and share: Continue self-care post-therapy, share story online—inspire 80 others to get help',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Stigma delays help: "Not crazy!"—suffer 6 months unnecessarily, anxiety worsens',
            '• "Can handle alone": Untreated anxiety 6+ months—affects life, grades, relationships badly',
            '• Stop self-care after therapy: Anxiety returns fast without maintenance',
            '• Learn CBT, don\'t practice: Tools don\'t work if not used daily',
            '• Isolate when anxious: Withdrawal worsens anxiety—stay connected to friends'
          ],
          successCriteria: [
            '✅ You recognize: Worry 3+ months, panic, sleep problems = anxiety disorder needing help',
            '✅ You overcome stigma: Anxiety = medical, counseling = smart health decision',
            '✅ You complete therapy: 8 sessions CBT, learn tools, practice daily consistently',
            '✅ Anxiety drops: 8/10 → 3/10 in 8 weeks—manageable, functional, thriving',
            '✅ You inspire others: LinkedIn post viral, 80 people seek therapy because of you'
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
          title: 'Academic Health Performance Kit',
          description: 'Study 14hr/day but GPA dropping? Sleep 5hr, junk food, zero exercise. Doctor: "Your lifestyle is tanking your grades. Fix health = fix performance."',
          instructions: [
            '• Fix sleep first: 8hr nightly (11PM-7AM), wind-down routine 10PM, no screens—memory consolidates, focus improves',
            '• Add healthy breakfast: Oats+eggs or dal ₹30-40, sustained energy—no mid-morning crash, brain fueled',
            '• Exercise 30min daily: Run, bodyweight, sports—energy paradox: exercise BOOSTS energy, focus up 50%',
            '• Hydrate 8 glasses: Carry bottle, drink hourly—headaches gone, 25% performance boost instantly',
            '• Track and maintain: Habit tracker for 4 pillars—gradual, sustainable, lifelong health habits',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Sacrificing sleep for study: 14hr study, 5hr sleep—GPA drops anyway',
            '• Junk food "saves time": Burger, noodles—brain fog, crash, worse focus',
            '• "Too tired for exercise": Paradox—exercise actually BOOSTS energy, try once',
            '• Dehydration: 5 coffees, 2 waters—headaches, focus down 25% easily fixed',
            '• All-or-nothing Day 1: Change everything, quit Day 3—build 1 habit/week'
          ],
          successCriteria: [
            '✅ You sleep 8hr nightly: Wind-down routine, consistent schedule maintained',
            '✅ You eat breakfast daily: Oats+eggs ₹30-40, energy sustained, focus sharp',
            '✅ You exercise 30min: Run/bodyweight 6 days/week, energy up, stress down',
            '✅ You drink 8 glasses: Carry bottle, headaches gone, 25% focus boost',
            '✅ Your GPA improves: 6.8→7.9 studying LESS (14hr→10hr but quality)'
          ]
        },
        professional: {
          title: 'Work Performance Health Boss',
          description: '12hr days, junk desk lunch, 5hr sleep, zero exercise. Month 3: Sick 3×, performance tanking. Boss warns. Fix health = fix career.',
          instructions: [
            '• Negotiate sleep: Talk to boss—work 9-6 not 9-9, leave 6PM sharp, 8hr sleep—quality improves',
            '• Meal prep Sunday: Dal rice ₹80/day (vs ₹150 junk), no afternoon crash—save ₹1400/month too',
            '• Exercise 5:30AM: Wake earlier, gym 30min before work—arrive energized, focus sharp all day',
            '• Hydrate + move hourly: 1L bottle, refill 2×, stand/stretch every hour—headaches gone, back pain gone',
            '• Build team culture: Lunch group, fitness challenge, hourly breaks—healthy office = better performance',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Working 12hr daily: Performance DECLINES anyway—9hr focused beats 12hr exhausted',
            '• Junk desk lunch: ₹150 burger, 2PM crash—meal prep ₹80, sustained energy',
            '• "No time for exercise": Wake 30min earlier—exercise BOOSTS work performance',
            '• Sitting 9hr straight: Back pain, stiff—hourly 2min breaks prevent hours of pain',
            '• Hustle culture "sleep = weak": Burnout, no promotion—health FIRST = promoted + raise!'
          ],
          successCriteria: [
            '✅ You negotiate 9-6 hours: 8hr sleep nightly, performance improves immediately',
            '✅ You meal prep: Dal rice ₹80, no crash, save ₹1400/month',
            '✅ You exercise 5:30AM: Gym 30min, arrive energized, sharp all day',
            '✅ You hydrate + move: 8 glasses, hourly breaks, headaches + back pain = gone',
            '✅ You get promoted: ₹10K raise, healthy culture leader, CEO recognition'
          ]
        },
        personal: {
          title: 'Lifelong Health Blueprint',
          description: 'Busy life, neglect health: 6hr sleep, skip meals, zero exercise. Month 3: Exhausted, gained weight, unhappy. Time for lifestyle change.',
          instructions: [
            '• Audit and fix sleep: Track 3 days, identify disruptors (phone scrolling, late dinner)—8hr target, wind-down routine',
            '• Nutrition overhaul: Breakfast (oats+eggs ₹40), lunch (dal rice ₹80), dinner 7:30PM—no junk, sustained energy',
            '• Find fun exercise: Try Zumba, yoga, hiking, swimming—pick what you ENJOY so you stick',
            '• Hydrate and track: 8 glasses daily, habit tracker app—measure all 4 pillars, 90% consistency target',
            '• Make it lifestyle: 80/20 flexibility, community support, evolve habits—lifelong, not 90-day program',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• All-or-nothing perfection: Miss 1 day, quit—80/20 rule, progress beats perfection',
            '• Temporary 90-day mindset: "Then back to normal"—lifestyle change is permanent',
            '• Boring routine: Same oats, same run daily—variety keeps it interesting',
            '• Solo journey, no support: Hard to sustain—find workout buddies, accountability',
            '• Perfection paralysis: "Can\'t be perfect so won\'t start"—start imperfect, 15min beats 0min'
          ],
          successCriteria: [
            '✅ You fix sleep: 8hr nightly, wind-down routine, 93% consistency maintained',
            '✅ You eat real food: Breakfast/lunch/dinner planned, 94% healthy, lost 3kg',
            '✅ You find fun exercise: Zumba+yoga+hiking, 85% consistency because enjoyable',
            '✅ You hydrate: 8 glasses daily, carry bottle everywhere, 87% consistent',
            '✅ You make it lifestyle: Not temporary, teach 5 friends, lifelong habits built'
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
          title: 'Bounce Back Playbook',
          description: 'Failed Accounting (35/100). Bed 2 months, given up. Supplementary in 2 weeks. Time to bounce back, study differently, pass.',
          instructions: [
            '• Feel emotions 1 day: Cry, be sad, rest—valid feelings, but Day 2 = decision time to bounce back',
            '• Reframe as feedback: Not "I\'m stupid," but "Study method wrong, can improve"—failure = temporary, fixable',
            '• Analyze and plan: What went wrong? (memorized not understood). New plan: Understand + practice 100 problems + professor help',
            '• Build support network: Tell friend, parents, professor truth—get encouragement, guidance, study group',
            '• Take action fast: Study 60hr over 2 weeks, new method, pass 68/100—resilience proven!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "I\'m a failure" = final identity—nope, you EXPERIENCED failure, temporary',
            '• Harsh self-talk: "Stupid!"—shame paralyzes, try self-compassion "Can learn, believe in myself"',
            '• Isolate, hide failure: Bed 2 months alone—tell truth, get support, bounce back faster',
            '• Ruminate, replay failure: Stuck in past—feel 1 day, then ACTION (analyze, plan, study)',
            '• Fixed mindset: "Not smart enough"—growth mindset "Can\'t do it YET, can LEARN"'
          ],
          successCriteria: [
            '✅ You feel then decide: Cry Day 1, commit to bounce back Day 2',
            '✅ You reframe: Failure = feedback, analyze what went wrong, make improvement plan',
            '✅ You build support: Tell friend/parents/professor, get encouragement and help',
            '✅ You pass supplementary: 68/100, bounced back from 35/100 in 2 weeks!',
            '✅ You help others: Share story, support group, 10 students pass because of you'
          ]
        },
        professional: {
          title: 'Startup Resilience Boss',
          description: 'Launched product, failed: 0 users, ₹5L burned. Devastated, quitting? Investor: "Most quit. Resilience = try again." Learn, pivot, succeed.',
          instructions: [
            '• Process failure Month 1: Feel emotions (valid), journal, talk to co-founder—reframe "attempt failed" not "I\'m failure"',
            '• Analyze deeply Month 2: Interview 20 non-users why they didn\'t use—extract learnings: product-market fit, UX, marketing',
            '• Pivot with learnings: Talk to 50 users FIRST, build simple MVP in 2 weeks (not 6 months), test with 10 users, iterate',
            '• Launch V2 Month 4: 200 waitlist sign-ups Day 1, ₹15K revenue Month 1—success because learned from failure!',
            '• Scale and persist: Handle bugs, competition, co-founder quits—each setback = practice resilience, bounce back faster',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Quit after first failure: V1 failed, quit—never build V2 success',
            '• Don\'t analyze why: Repeat same mistakes—talk to users, find root causes',
            '• Face alone, no support: Harder to bounce back—co-founder, investor, mentor help',
            '• "Wasted ₹5L, 6 months": Regret, bitter—reframe "Invested in learning, worth it"',
            '• Fixed mindset "Not entrepreneur material": Quit—growth "Learning, next attempt better"'
          ],
          successCriteria: [
            '✅ You analyze deeply: 20 user interviews, root causes found, learnings extracted',
            '✅ You secure support: Investor reinvests ₹3L because believes in resilience',
            '✅ V2 succeeds: 200 users Day 1, ₹50K/month by Month 4—learnings applied',
            '✅ You handle ongoing challenges: Bugs, competition, co-founder quits—bounce back from all',
            '✅ Year 2 success: 5000 users, ₹2L/month, profitable—resilience = entrepreneurship skill'
          ]
        },
        personal: {
          title: 'Heartbreak Recovery Blueprint',
          description: '3-year relationship ended. Devastated, bed crying Month 1, given up on love. Friend: "Heartbreak doesn\'t destroy you. Heal, grow, love again."',
          instructions: [
            '• Allow grief Month 1: Cry, be sad, journal, talk to friend—valid emotions, don\'t suppress or rush',
            '• Reframe Month 2: Not "unlovable forever," but "relationship ended, I CAN find love again"—painful but temporary',
            '• Learn from it: What went wrong? (Communication, life goals). Extract wisdom—grow from pain, don\'t repeat mistakes',
            '• Rebuild life Month 3-6: Therapy, self-care, hobbies, reconnect friends, focus career—heal AND grow',
            '• Open to love again Month 8+: Date when healed, communicate better, check alignment—healthier relationship because wiser',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Suppress grief "be strong": Bottled emotions, longer healing—allow crying, healing through feeling',
            '• Rebound immediately: Avoid pain, not healed—repeat patterns, heal FIRST 6 months',
            '• "Will never love again": Hopeless, closed—one ended, you CAN find love, you\'re lovable',
            '• Don\'t learn from it: Repeat same mistakes—extract learnings, grow wiser',
            '• Isolate alone: Longer healing, depression risk—lean on friends, family, therapy'
          ],
          successCriteria: [
            '✅ You grieve fully: Month 1 crying, processing—don\'t suppress emotions',
            '✅ You reframe: Not "unlovable," relationship ended, can love again—hopeful',
            '✅ You extract learnings: Communication, life goals, red flags—wisdom from pain',
            '✅ You rebuild: Therapy, hobbies, friends, career promoted—healed AND grown',
            '✅ Month 12: New healthy relationship, better than before—wiser, stronger, resilient'
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
          title: 'Focus Training Toolkit',
          description: 'Study 2hr, complete 5 pages (should be 30). Mind wanders every 2min. Anxious 7/10. Studied 200hr, learned 20hr worth. Train your mind.',
          instructions: [
            '• Start 2min meditation: Wake, before phone—sit, breathe, notice wander, return (10× normal!)—train mind like gym',
            '• Build to 5min + mindful study: Every 30min check "present or wandering?"—notice faster, return easier, 2hr = 15 pages (was 5)',
            '• Add mindful eating: First 2min lunch, no phone—actually TASTE food, break from mental chatter',
            '• Add body scan 3min: Evening, scan head→shoulders→chest→legs—release tension, better sleep',
            '• Add gratitude 5min: Before sleep, 3 things grateful for—mind shifts from worry to appreciation, calm sleep',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Expecting empty mind: "Shouldn\'t wander!"—mind WILL wander, practice = notice + return',
            '• Judging yourself: "Failed at meditation!"—be kind, wandering is normal, gently return',
            '• Need perfect conditions: "Need quiet, 1hr, teacher"—start imperfect: 2min, noisy hostel',
            '• Only when stressed: Meditate when anxious, stop when calm—daily practice trains mind',
            '• Quit Day 3: "Doesn\'t work!"—takes 30 days minimum, benefits build over time'
          ],
          successCriteria: [
            '✅ You meditate daily: 2min→5min, morning, before phone, 85% consistency',
            '✅ Focus improves: 5min→1hr over 90 days, 12× improvement, GPA up',
            '✅ Anxiety drops: 7/10→3/10 over 90 days, 57% reduction proven',
            '✅ You integrate: Mindful study, eating, body scan, gratitude—present 80% vs 10%',
            '✅ You help others: Share success, mindfulness group 25 members, 15 report benefits'
          ]
        },
        professional: {
          title: 'Mindful Leadership Blueprint',
          description: 'PM stress: Constant worries, can\'t focus, snap at team, reactive. Anxious 7/10. Bad decisions, client complaints. Train mind = better leadership.',
          instructions: [
            '• Morning meditation before emails: Wake 6AM, 5min breathe BEFORE work thoughts—calm start beats anxious start',
            '• Mindful meetings: 1min breathing before, LISTEN fully (not plan response)—pause 3sec before disagreeing, respond consciously',
            '• Pause before stressful emails: Client angry? Breathe 2min, calm, respond solution-focused—zero regretted defensive replies',
            '• Hourly work breaks: 30sec breath every hour, 2min mindful lunch—sustained calm all day, not burnout',
            '• Build team culture: Monday 3min group meditation, mindful meetings norm—team productivity +25%, you promoted!',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• Emails before meditation: Stress starts 6AM—meditate FIRST, then emails, calm foundation',
            '• Reactive communication: Angry email, instant defensive reply—regret, pause 2min, respond calmly',
            '• Multitasking meetings: Plan while listening—miss info, bad decisions, be PRESENT',
            '• 9hr straight, no breaks: Accumulate tension, burned out—hourly 30sec breaks maintain calm',
            '• Bring work home mentally: Mind on work all evening—2min end-of-day breath releases thoughts'
          ],
          successCriteria: [
            '✅ Morning meditation: 5min daily before emails, calm start established',
            '✅ Mindful communication: Pause before stressful replies, zero regretted messages',
            '✅ Anxiety reduces: 7/10→3/10 over 90 days, calm under pressure always',
            '✅ Leadership improves: Team feels heard, morale up, productivity +25%',
            '✅ You get promoted: Senior PM + ₹15K raise, mindful leadership recognized'
          ]
        },
        personal: {
          title: 'Present Moment Life Blueprint',
          description: 'Mind racing 24/7: past regrets, future worries. Anxious 8/10. Eat but don\'t taste, walk but don\'t notice. Missing life in mental chatter.',
          instructions: [
            '• Download app Day 1: Headspace/Calm, 2min guided "Breath focus"—sit, breathe, wander (5× normal!), notice, return gently',
            '• Build to 5min daily: Week 1: 2min, Week 2-4: 5min, 91% consistency—anxiety 8/10→5/10, focus 5min→20min (4×)',
            '• Integrate into life: Mindful shower, eating (taste!), walks (notice sun), conversations (LISTEN fully)—present 80% vs 10%',
            '• Deepen Month 3: 10min meditation, body scan, loving-kindness, walking meditation, day retreat—anxiety 2/10, focus 1.5hr',
            '• Make it lifestyle: Join sangha, monthly retreats, teach workshop—identity shift "I AM mindful person" not "I practice mindfulness"',
            '',
            '🚫 Common Mistakes to Avoid:',
            '• "Mind shouldn\'t wander!": Harsh, quit—wandering is NORMAL, practice = notice + return gently',
            '• Inconsistent: 3 days on, 4 days off—no training, no benefits, daily 5min builds mind',
            '• "Start when less busy": Never happens—start NOW busy/stressed, that\'s when need most',
            '• Only sitting 5min: Rest of day not present—integrate: eating, walking, listening all day',
            '• Solo only, no community: Plateau—join sangha, retreats, teachers deepen practice'
          ],
          successCriteria: [
            '✅ Daily meditation: 5min→10min, 91% consistency, anxiety 8/10→2/10 (75% reduction)',
            '✅ Integrate everywhere: Shower, eating, walks, conversations—present 90% of day',
            '✅ Focus mastery: 5min→2hr over 6 months, 24× improvement, deep work',
            '✅ Sleep improves: Fall asleep 1.5hr→10min, 9× faster, quiet mind',
            '✅ You teach: Workshop 30 people, blog 5K views, mentor 5 friends—transform others'
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
