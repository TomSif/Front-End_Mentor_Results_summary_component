/**
 * Retourne le feedback approprié selon le score global
 *
 * @param score - Score global calculé (0-100)
 * @returns Objet Feedback contenant le niveau, titre et message
 *
 * @example
 * getFeedback(76)
 * // Returns:
 * // {
 * //   level: 'excellent',
 * //   title: 'Excellent',
 * //   message: 'Outstanding performance! You scored higher than most people.'
 * // }
 */

import type { Feedback, ResultLevel } from '../types'

/**
 * Tableau de configuration des feedbacks
 * Chaque tranche définit : min, max, level, title, message
 */
const FEEDBACK_DATA: Array<{
  min: number
  max: number
  level: ResultLevel
  title: string
  message: string
}> = [
  {
    min: 0,
    max: 9,
    level: 'terrible',
    title: 'Terrible',
    message:
      'You need a lot more practice. Keep studying and try again to improve your score.',
  },
  {
    min: 10,
    max: 19,
    level: 'bad',
    title: 'Bad',
    message:
      'Keep working on it! With more effort, you can definitely improve your results.',
  },
  {
    min: 20,
    max: 29,
    level: 'poor',
    title: 'Poor',
    message:
      "You're making some progress. Continue learning and you'll see better results soon.",
  },
  {
    min: 30,
    max: 39,
    level: 'below-average',
    title: 'Below Average',
    message:
      'Not bad, but there is room for improvement. Keep pushing yourself!',
  },
  {
    min: 40,
    max: 49,
    level: 'average',
    title: 'Average',
    message:
      "You're performing at an average level. A bit more practice will help you improve.",
  },
  {
    min: 50,
    max: 59,
    level: 'fair',
    title: 'Fair',
    message:
      'Fair performance! You have a decent understanding of the material.',
  },
  {
    min: 60,
    max: 69,
    level: 'good',
    title: 'Good',
    message:
      'Good job! You have a solid grasp of the concepts.',
  },
  {
    min: 70,
    max: 79,
    level: 'great',
    title: 'Great',
    message:
      'You scored higher than 65% of the people who have taken these tests.',
  },
  {
    min: 80,
    max: 89,
    level: 'excellent',
    title: 'Excellent',
    message: 'Exceptional results! You are among the top performers.',
  },
  {
    min: 90,
    max: 100,
    level: 'amazing',
    title: 'Amazing',
    message:
      "You're a genius! Nearly perfect score. Congratulations on your achievement!",
  },
]

/**
 * Fonction principale
 * Cherche dans le tableau la tranche correspondant au score
 */
export function getFeedback(score: number): Feedback {
  // Utilise .find() pour trouver le premier élément qui correspond
  // La condition : score >= min ET score <= max
  const feedbackItem = FEEDBACK_DATA.find(
    item => score >= item.min && score <= item.max
  )

  // Si aucune tranche trouvée (ne devrait jamais arriver si score entre 0-100)
  // On retourne un feedback par défaut
  if (!feedbackItem) {
    return {
      level: 'average',
      title: 'Average',
      message: 'Your score is being calculated.',
    }
  }

  // Retourne l'objet Feedback (sans min/max qui ne sont pas dans le type)
  return {
    level: feedbackItem.level,
    title: feedbackItem.title,
    message: feedbackItem.message,
  }
}
