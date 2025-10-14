import { ComprehensionQuestion, ChallengeResult, ListeningAssessment } from '../types/challengeTypes';

export class ListeningSkillsService {
  
  /**
   * Evaluates user responses to comprehension questions
   */
  static evaluateComprehension(
    questions: ComprehensionQuestion[], 
    userAnswers: { [questionId: number]: any }
  ): { score: number; results: any[] } {
    let totalPoints = 0;
    let earnedPoints = 0;
    const results: any[] = [];

    questions.forEach(question => {
      totalPoints += question.points;
      const userAnswer = userAnswers[question.id];
      let isCorrect = false;
      let partialCredit = 0;

      switch (question.type) {
        case 'multiple-choice':
          isCorrect = userAnswer === question.correct;
          earnedPoints += isCorrect ? question.points : 0;
          break;

        case 'multiple-select':
          const correctAnswers = question.correct as number[];
          const userSelections = userAnswer as number[];
          const correctCount = userSelections?.filter(ans => correctAnswers.includes(ans)).length || 0;
          const incorrectCount = userSelections?.filter(ans => !correctAnswers.includes(ans)).length || 0;
          
          // Partial credit for multiple select
          partialCredit = Math.max(0, (correctCount - incorrectCount) / correctAnswers.length);
          earnedPoints += partialCredit * question.points;
          isCorrect = partialCredit >= 0.8; // 80% threshold for "correct"
          break;

        case 'short-answer':
          const answer = (userAnswer as string)?.toLowerCase() || '';
          const expectedKeywords = question.expectedKeywords || [];
          const forbiddenKeywords = question.forbiddenKeywords || [];
          
          let keywordScore = 0;
          expectedKeywords.forEach(keyword => {
            if (answer.includes(keyword.toLowerCase())) keywordScore++;
          });
          
          let penalty = 0;
          forbiddenKeywords.forEach(keyword => {
            if (answer.includes(keyword.toLowerCase())) penalty++;
          });
          
          partialCredit = Math.max(0, (keywordScore / expectedKeywords.length) - (penalty * 0.2));
          earnedPoints += partialCredit * question.points;
          isCorrect = partialCredit >= 0.7; // 70% threshold
          break;

        case 'comprehension':
          const comprehensionAnswer = (userAnswer as string)?.toLowerCase() || '';
          const correctAnswer = question.correctAnswer?.toLowerCase() || '';
          
          // Simple keyword matching for now (can be enhanced with NLP)
          const keywords = correctAnswer.split(' ').filter(word => word.length > 3);
          let matchCount = 0;
          keywords.forEach(keyword => {
            if (comprehensionAnswer.includes(keyword)) matchCount++;
          });
          
          partialCredit = matchCount / keywords.length;
          earnedPoints += partialCredit * question.points;
          isCorrect = partialCredit >= 0.6; // 60% threshold
          break;
      }

      results.push({
        questionId: question.id,
        isCorrect,
        partialCredit,
        userAnswer,
        explanation: question.explanation
      });
    });

    return {
      score: Math.round((earnedPoints / totalPoints) * 100),
      results
    };
  }

  /**
   * Calculates listening skills breakdown based on assessment criteria
   */
  static calculateSkillBreakdown(
    assessment: ListeningAssessment,
    overallScore: number,
    questionResults: any[]
  ): { [skill: string]: number } {
    const skillBreakdown: { [skill: string]: number } = {};
    
    assessment.criteria.forEach(criteria => {
      // For now, use overall score adjusted by criteria weight
      // This can be enhanced with more sophisticated analysis
      skillBreakdown[criteria.skill] = Math.round(overallScore * (criteria.weight / 100));
    });

    return skillBreakdown;
  }

  /**
   * Generates personalized feedback based on performance
   */
  static generatePersonalizedFeedback(
    score: number,
    skillBreakdown: { [skill: string]: number },
    assessment: ListeningAssessment
  ): { feedback: string[]; nextSteps: string[] } {
    const feedback: string[] = [];
    const nextSteps: string[] = [];

    // Overall performance feedback
    if (score >= 90) {
      feedback.push("🌟 Outstanding listening skills! You captured all key details and demonstrated excellent focus.");
      nextSteps.push("Challenge yourself with more complex listening scenarios involving multiple speakers");
    } else if (score >= 80) {
      feedback.push("💪 Strong listening performance! You understood the main concepts and most details.");
      nextSteps.push("Focus on retaining specific numbers, dates, and precise requirements");
    } else if (score >= 70) {
      feedback.push("📈 Good foundation in listening skills, with room for improvement in detail retention.");
      nextSteps.push("Practice the 3-2-1 method: capture 3 key points, 2 questions, 1 action item");
    } else if (score >= 60) {
      feedback.push("🔄 Basic listening skills present, but significant improvement needed for complex information.");
      nextSteps.push("Start with shorter, simpler listening exercises and gradually increase complexity");
    } else {
      feedback.push("🎯 Focus on building foundational listening habits: eliminate distractions and practice sustained attention.");
      nextSteps.push("Begin with 1-minute focused listening exercises and gradually extend duration");
    }

    // Skill-specific feedback
    Object.entries(skillBreakdown).forEach(([skill, skillScore]) => {
      if (skillScore < 70) {
        switch (skill) {
          case 'Information Retention':
            feedback.push("📝 Work on note-taking strategies to improve information retention");
            nextSteps.push("Practice the Cornell note-taking method during lectures");
            break;
          case 'Comprehension':
            feedback.push("🤔 Focus on understanding connections between ideas, not just individual facts");
            nextSteps.push("After listening, practice summarizing main concepts in your own words");
            break;
          case 'Attention Management':
            feedback.push("🎯 Improve sustained attention by eliminating distractions and practicing mindfulness");
            nextSteps.push("Try 5-minute focused listening exercises daily to build attention stamina");
            break;
          case 'Critical Analysis':
            feedback.push("🔍 Develop skills in identifying key information and understanding implications");
            nextSteps.push("Practice asking 'why is this important?' after hearing new information");
            break;
        }
      }
    });

    return { feedback, nextSteps };
  }

  /**
   * Determines if user needs ML/AI assistance for advanced feedback
   */
  static requiresAdvancedAnalysis(userResponse: string): boolean {
    // Simple heuristics - can be enhanced with ML models later
    const responseLength = userResponse.length;
    const wordCount = userResponse.split(' ').length;
    
    // If response is very detailed or complex, might benefit from NLP analysis
    return responseLength > 200 || wordCount > 50;
  }

  /**
   * Placeholder for future ML integration
   */
  static async analyzeResponseWithAI(userResponse: string): Promise<any> {
    // Future: Integrate with OpenAI API or local NLP model
    // For now, return simple analysis
    return {
      sentiment: 'neutral',
      keyPoints: [],
      suggestedImprovements: [],
      confidenceLevel: 'medium'
    };
  }
}





