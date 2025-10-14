// Video Scripts for Active Listening Challenges

export interface VideoScript {
  id: string;
  title: string;
  scenario: string;
  duration: number; // seconds
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  speaker: string;
  context: 'academic' | 'professional' | 'personal';
  script: string;
  keyInformation: {
    dates: string[];
    times: string[];
    locations: string[];
    requirements: string[];
    numbers: string[];
    actionItems: string[];
  };
}

export const activeListeningVideoScripts: VideoScript[] = [
  {
    id: 'professor-exam-instructions',
    title: 'Professor Thompson\'s Final Exam Instructions',
    scenario: 'Psychology professor explains final exam details with multiple specific requirements',
    duration: 180, // 3 minutes
    difficulty: 'beginner',
    speaker: 'Professor Sarah Thompson',
    context: 'academic',
    script: `[SCENE: Professor Thompson in her office, speaking directly to camera]

Professor Thompson: "Good morning, everyone. I know many of you have been asking about the final exam, so I want to go over all the details carefully.

First, the exam date and location. Mark your calendars - the final exam will be on Friday, December 15th at 2:00 PM. Please note, we're NOT meeting in our usual classroom, Room 204. Instead, the exam will be held in the main auditorium, Henderson Hall. That's Henderson Hall, the big auditorium near the library.

Now, about the exam format. You'll have exactly 2 hours to complete the test. The exam covers three main areas that we've studied this semester. 

The first area is cognitive psychology - that's everything from chapters 8 through 12 in your textbook. Pay special attention to memory, attention, and perception theories.

The second area is social psychology, which covers chapters 15 through 18. Focus on group dynamics, social influence, and attribution theory.

The third and final area is research methods from chapters 3 through 5. You'll need to understand experimental design, statistical concepts, and data interpretation.

Regarding materials you can bring: You're allowed to bring ONE 3-by-5 inch index card with handwritten notes. I want to emphasize - handwritten only. No photocopies, no printed materials, no typed notes. Just one small index card with your own handwriting.

You'll also need to bring a basic calculator for the statistics section. Nothing fancy - just a simple calculator that can do basic math operations.

If you have questions before the exam, my office hours this week are Tuesday from 1:00 to 3:00 PM, and Thursday from 1:00 to 3:00 PM. That's Tuesday and Thursday, 1 to 3 PM in my office, Room 312.

This exam is worth 40% of your final course grade, so please prepare thoroughly. I recommend reviewing all three areas and practicing with the sample questions I posted online.

One more important note - please arrive 15 minutes early to get settled. The doors to Henderson Hall will close promptly at 2:00 PM, and late arrivals won't be admitted.

Are there any questions about the exam format, content, or logistics?"

[END SCENE]`,
    keyInformation: {
      dates: ['Friday, December 15th'],
      times: ['2:00 PM', '1:00 to 3:00 PM', '15 minutes early'],
      locations: ['Henderson Hall', 'main auditorium', 'Room 312', 'near the library'],
      requirements: ['3-by-5 inch index card', 'handwritten notes only', 'basic calculator'],
      numbers: ['2 hours', '40%', 'chapters 8-12', 'chapters 15-18', 'chapters 3-5'],
      actionItems: ['mark calendars', 'prepare thoroughly', 'review sample questions', 'arrive early']
    }
  },

  {
    id: 'group-project-meeting',
    title: 'Team Leader Assigns Project Roles',
    scenario: 'Team leader explains group project requirements and assigns specific roles to team members',
    duration: 240, // 4 minutes
    difficulty: 'intermediate',
    speaker: 'Alex Chen - Team Leader',
    context: 'academic',
    script: `[SCENE: Alex speaking to a group of 5 students in a study room]

Alex: "Alright everyone, thanks for meeting up. We need to finalize our business strategy project that's due in three weeks - that's Monday, November 27th by 11:59 PM. Professor Martinez was very specific about the submission format.

Let me break down what we need to deliver. We need a 20-page written report, a 15-minute presentation, and a financial model in Excel. The presentation will be on Friday, November 24th during our regular class time.

Now, for role assignments. Sarah, I'd like you to handle the market research section. You're great with data analysis, and this section needs someone who can dig deep into industry trends and competitor analysis. Your deadline for the initial research is Wednesday, November 15th.

Mike, can you take the financial modeling? I know you're comfortable with Excel and accounting. We'll need profit projections for three years, break-even analysis, and cash flow statements. I'll need your preliminary numbers by Friday, November 17th so we can integrate them into the report.

Jessica, would you handle the marketing strategy section? This includes promotional tactics, pricing strategy, and target audience analysis. Your section should be about 5 pages and due Tuesday, November 21st.

David, I'm assigning you the operations and logistics section. Cover supply chain, staffing requirements, and operational processes. Also about 5 pages, due the same day as Jessica's section.

I'll handle the executive summary, company overview, and final integration of everyone's sections. I'll also coordinate the presentation slides.

For our presentation, Sarah will present the market research findings, Mike will cover the financial projections, Jessica will explain the marketing strategy, and David will discuss operations. I'll do the introduction and conclusion.

We need to meet twice more before the deadline. Our next meeting is Thursday, November 16th at 3:00 PM in the library study room 205. The final meeting will be Sunday, November 26th at 2:00 PM, same location, for presentation practice.

Each section should include at least 5 credible sources, properly cited in APA format. Professor Martinez is strict about citations, so double-check everything.

The grading breakdown is 60% for the written report, 30% for the presentation, and 10% for peer evaluations of teamwork.

Any questions about your assignments or the timeline?"

[END SCENE]`,
    keyInformation: {
      dates: ['Monday, November 27th', 'Friday, November 24th', 'Wednesday, November 15th', 'Friday, November 17th', 'Tuesday, November 21st', 'Thursday, November 16th', 'Sunday, November 26th'],
      times: ['11:59 PM', '3:00 PM', '2:00 PM'],
      locations: ['library study room 205'],
      requirements: ['20-page written report', '15-minute presentation', 'Excel financial model', '5 credible sources', 'APA format'],
      numbers: ['3 weeks', '5 pages', '3 years', '60%', '30%', '10%'],
      actionItems: ['market research', 'financial modeling', 'marketing strategy', 'operations section', 'presentation practice']
    }
  },

  {
    id: 'office-hours-consultation',
    title: 'Professor Office Hours - Research Paper Guidance',
    scenario: 'Student visits professor during office hours for research paper guidance with specific requirements',
    duration: 200, // 3.3 minutes
    difficulty: 'intermediate',
    speaker: 'Dr. Rodriguez - History Professor',
    context: 'academic',
    script: `[SCENE: Dr. Rodriguez in her office speaking with a student]

Dr. Rodriguez: "Come in, have a seat. I'm glad you came to office hours to discuss your research paper. Let me give you some specific guidance on what I'm looking for.

Your research paper topic on the Industrial Revolution is good, but I need you to narrow it down significantly. Instead of covering the entire period, focus specifically on the impact of steam technology on transportation between 1825 and 1850. That's a 25-year window that will give you enough depth without being too broad.

For sources, you'll need a minimum of 8 academic sources. At least 5 must be primary sources from that time period - things like newspaper articles, government documents, or personal letters from the 1800s. The remaining 3 can be secondary sources, but they must be from peer-reviewed academic journals published within the last 15 years.

The paper length should be 12 to 15 pages, not including your bibliography. Use Chicago style citation format - that's footnotes, not in-text citations like APA. I want to see footnotes at the bottom of each page.

Your thesis statement needs to be more specific. Instead of saying "steam technology changed transportation," try something like "The introduction of steam-powered railways between 1825 and 1850 fundamentally altered British economic geography by reducing transport costs by 60% and enabling rapid industrial expansion into previously isolated regions."

For the paper structure, start with a 2-page introduction that establishes historical context. Then have three main body sections: first, the technological developments; second, the economic impacts; and third, the social consequences. End with a 1-page conclusion that ties everything together.

The draft is due for peer review on Wednesday, October 25th. Bring three printed copies to class for the workshop. The final paper is due Friday, November 10th by 5:00 PM. Submit it both in hard copy to my office mailbox and electronically through the course portal.

I'll be grading on argument strength, use of evidence, writing clarity, and proper citation format. The rubric is posted on the course website under "Assignments."

One more thing - if you need help finding primary sources, the university archives on the third floor of the library has an excellent collection of 19th-century transportation documents. Ask for Ms. Patterson - she's the special collections librarian and knows exactly what materials would be useful for your topic.

Do you have any questions about the requirements or timeline?"

[END SCENE]`,
    keyInformation: {
      dates: ['Wednesday, October 25th', 'Friday, November 10th'],
      times: ['5:00 PM', 'between 1825 and 1850'],
      locations: ['office mailbox', 'course portal', 'third floor of the library', 'university archives'],
      requirements: ['8 academic sources', '5 primary sources', '3 secondary sources', '12 to 15 pages', 'Chicago style citation', 'footnotes', 'three printed copies'],
      numbers: ['25-year window', '15 years', '60%', '2-page introduction', '1-page conclusion'],
      actionItems: ['narrow topic focus', 'find primary sources', 'write specific thesis', 'submit draft and final', 'contact Ms. Patterson']
    }
  },

  {
    id: 'internship-orientation',
    title: 'Internship Program Orientation',
    scenario: 'HR manager explains internship program details, expectations, and important policies',
    duration: 220, // 3.7 minutes
    difficulty: 'advanced',
    speaker: 'Maria Santos - HR Manager',
    context: 'professional',
    script: `[SCENE: Maria Santos in a conference room addressing new interns]

Maria Santos: "Welcome to TechCorp's summer internship program. I'm Maria Santos, your HR manager, and I want to make sure you understand all the important details about your 10-week program.

Your internship officially begins Monday, June 5th and runs through Friday, August 11th. Your first day orientation starts at 9:00 AM sharp in Conference Room B on the 12th floor. Please bring two forms of ID, your signed offer letter, and your completed I-9 form.

Regarding your schedule: You'll work Monday through Friday, 8:30 AM to 5:00 PM, with a one-hour lunch break. That's 37.5 hours per week. Your hourly rate is $18 per hour, paid bi-weekly on alternating Fridays.

Each intern will be assigned to a specific department for 6 weeks, then rotate to a second department for the remaining 4 weeks. This rotation helps you understand different aspects of our business. You'll receive your department assignments via email this Friday.

For dress code, we follow business casual Monday through Thursday. That means no jeans, no sneakers, no t-shirts. Fridays are casual dress days where jeans and appropriate footwear are acceptable.

Your direct supervisor will assign you a mentor within your first week. This mentor will meet with you weekly for 30 minutes to discuss your progress, answer questions, and provide career guidance. Take advantage of this - our mentors are senior employees who volunteer their time.

Regarding confidentiality, you'll sign a non-disclosure agreement on your first day. This is standard practice. You cannot share any proprietary information, client data, or internal processes outside the company. This includes social media posts about specific projects or clients.

For parking, interns receive temporary parking passes for the south garage. The daily rate is $8, which will be automatically deducted from your paycheck if you choose to drive. Alternatively, the company provides a $50 monthly public transportation subsidy if you prefer to take the metro.

Your final project presentation will be on Thursday, August 10th at 2:00 PM. You'll present to department heads and senior management about your experience and any improvement recommendations. This presentation should be 10 minutes long with 5 minutes for questions.

Performance evaluations happen at the midpoint - that's July 7th - and at the end of your internship. Strong performers may receive offers for part-time work during the school year or full-time positions after graduation.

If you have any questions during your internship, my office is Room 1205 on the 12th floor. My office hours for interns are Tuesday and Thursday from 2:00 to 4:00 PM, or you can email me anytime at maria.santos@techcorp.com.

Are there any questions about the program structure, expectations, or policies?"

[END SCENE]`,
    keyInformation: {
      dates: ['Monday, June 5th', 'Friday, August 11th', 'July 7th', 'Thursday, August 10th'],
      times: ['9:00 AM', '8:30 AM to 5:00 PM', '2:00 PM', '2:00 to 4:00 PM'],
      locations: ['Conference Room B', '12th floor', 'Room 1205', 'south garage'],
      requirements: ['two forms of ID', 'signed offer letter', 'I-9 form', 'non-disclosure agreement', 'business casual Monday-Thursday'],
      numbers: ['10-week program', '$18 per hour', '37.5 hours per week', '6 weeks', '4 weeks', '30 minutes weekly', '$8 daily parking', '$50 monthly subsidy', '10 minutes presentation', '5 minutes questions'],
      actionItems: ['bring required documents', 'check email for department assignments', 'meet with mentor weekly', 'prepare final presentation']
    }
  },

  {
    id: 'study-group-coordination',
    title: 'Study Group Planning Session',
    scenario: 'Study group leader coordinates exam preparation with multiple deadlines and responsibilities',
    duration: 160, // 2.7 minutes
    difficulty: 'intermediate',
    speaker: 'Emma Wilson - Study Group Leader',
    context: 'academic',
    script: `[SCENE: Emma speaking to 4 other students in library study room]

Emma: "Okay everyone, we have exactly 12 days until our Organic Chemistry final, so we need to organize this study plan carefully.

Let's start with our meeting schedule. We'll meet three times before the exam. Our next session is this Saturday, May 13th at 10:00 AM in library study room 308. The second meeting will be Tuesday, May 16th at 7:00 PM, same room. Our final review session is Thursday, May 18th at 6:00 PM.

For Saturday's session, we're covering chapters 12 through 15 - that's alkenes, alkynes, aromatic compounds, and stereochemistry. Jake, can you prepare practice problems for alkenes and alkynes? I need at least 10 problems with detailed solutions.

Lisa, would you handle the aromatic compounds section? Create a summary sheet with all the reaction mechanisms we need to know. Make sure to include electrophilic aromatic substitution and the directing effects of different substituents.

Tom, I'm assigning you stereochemistry. This is tricky material, so prepare visual aids - maybe some 3D models or clear diagrams showing R and S configurations, enantiomers, and diastereomers.

Sarah, can you work on creating a comprehensive reaction summary? We need all the major reactions from chapters 12-15 organized by functional group. Include reagents, conditions, and products for each reaction.

For Tuesday's meeting, we'll tackle chapters 16 through 19 - alcohols, ethers, aldehydes, and ketones. I'll send out specific assignments for that session by Sunday evening.

Everyone needs to bring their textbook, calculator, and the molecular model kit to every session. If you don't have a model kit, you can borrow one from the chemistry department - just ask Professor Chen's assistant.

We'll spend the first hour of each session reviewing the assigned material, then practice problems for 90 minutes, and end with a 30-minute quiz simulation.

For the Thursday final review, we'll do a complete practice exam under timed conditions. The actual exam is 3 hours long with 60 multiple choice questions and 8 synthesis problems.

Remember, this exam is worth 35% of our final grade. Professor Chen's exams are challenging, but if we work together and stay organized, we can all succeed.

Please confirm you can make all three sessions and let me know if you have any conflicts with the assignments I've given you."

[END SCENE]`,
    keyInformation: {
      dates: ['Saturday, May 13th', 'Tuesday, May 16th', 'Thursday, May 18th'],
      times: ['10:00 AM', '7:00 PM', '6:00 PM'],
      locations: ['library study room 308'],
      requirements: ['textbook', 'calculator', 'molecular model kit', '10 problems with solutions', 'summary sheet', 'visual aids', '3D models'],
      numbers: ['12 days', '3 times', 'chapters 12-15', 'chapters 16-19', '1 hour', '90 minutes', '30 minutes', '3 hours', '60 multiple choice', '8 synthesis problems', '35%'],
      actionItems: ['prepare practice problems', 'create summary sheet', 'make visual aids', 'organize reactions', 'bring required materials', 'confirm attendance']
    }
  },

  {
    id: 'research-methodology-lecture',
    title: 'Dr. Kim\'s Research Methods Lecture',
    scenario: 'Professor explains complex research methodology with statistical requirements and project deadlines',
    duration: 200, // 3.3 minutes
    difficulty: 'advanced',
    speaker: 'Dr. Jennifer Kim - Research Professor',
    context: 'academic',
    script: `[SCENE: Dr. Kim lecturing to graduate students in a classroom]

Dr. Kim: "Today we're discussing your thesis research methodology requirements. Pay close attention because these specifications are non-negotiable for your committee approval.

Your research proposal defense is scheduled for Friday, March 17th at 2:00 PM in the graduate conference room. You'll have 20 minutes to present, followed by 15 minutes of committee questions. Your committee consists of myself as chair, Dr. Patterson from Statistics, and Dr. Williams from your concentration area.

For your literature review, I require a minimum of 75 peer-reviewed sources published within the last 7 years. At least 25 of these must be empirical studies directly related to your research question. The remaining 50 can include theoretical papers, meta-analyses, and seminal works in your field.

Regarding sample size calculations, you'll need to demonstrate statistical power of at least 0.80 with an alpha level of 0.05. For your proposed correlational study, this means a minimum sample size of 84 participants. However, I recommend 100 participants to account for potential dropout and missing data.

Your data collection must follow strict ethical guidelines. IRB approval is required before you contact any participants. The IRB application deadline is Monday, February 27th. Include your recruitment materials, consent forms, and data collection instruments with your application.

For statistical analysis, you'll use SPSS version 28 or newer. Your analysis plan should include descriptive statistics, correlation matrices, and multiple regression analysis. If your data violates normality assumptions, be prepared to use non-parametric alternatives.

The methodology chapter of your thesis should be 15 to 20 pages and include four main sections: participants, materials, procedure, and data analysis plan. Each section must be detailed enough for replication.

Your data collection period runs from April 1st through June 30th. That gives you three months to recruit and test participants. Weekly progress reports are due every Friday by 5:00 PM via email.

For participant recruitment, you can use the university subject pool, but you're limited to 30 participants from that source. The remaining 70 participants must come from community recruitment or online platforms.

Budget considerations: You have $500 for participant compensation and materials. That's approximately $5 per participant for a one-hour session. Plan accordingly and submit your budget breakdown by Wednesday, March 8th.

Your thesis defense is tentatively scheduled for November 15th, but that depends on your data collection timeline and analysis completion. I expect your first three chapters to be complete by August 31st.

Remember, any changes to your methodology after IRB approval require an amendment application, which can delay your timeline by 4 to 6 weeks.

Questions about the requirements or timeline?"

[END SCENE]`,
    keyInformation: {
      dates: ['Friday, March 17th', 'Monday, February 27th', 'April 1st', 'June 30th', 'Wednesday, March 8th', 'August 31st', 'November 15th'],
      times: ['2:00 PM', '5:00 PM'],
      locations: ['graduate conference room'],
      requirements: ['75 peer-reviewed sources', '25 empirical studies', 'IRB approval', 'SPSS version 28', '15 to 20 pages', 'budget breakdown'],
      numbers: ['7 years', '20 minutes', '15 minutes', '0.80 power', '0.05 alpha', '84 participants', '100 participants', '30 from subject pool', '70 from community', '$500 budget', '$5 per participant', '4 to 6 weeks delay'],
      actionItems: ['prepare proposal defense', 'submit IRB application', 'recruit participants', 'collect data', 'submit weekly reports', 'complete first three chapters']
    }
  }
];

export default activeListeningVideoScripts;





