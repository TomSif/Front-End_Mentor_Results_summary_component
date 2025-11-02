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
    level: 'poor',
    title: 'Poor',
    message:
      'You need more practice. Keep studying and try again to improve your score.',
  },
  {
    min: 10,
    max: 19,
    level: 'below-average',
    title: 'Below Average',
    message:
      'Keep working on it! With more effort, you can definitely improve your results.',
  },
  {
    min: 20,
    max: 29,
    level: 'fair',
    title: 'Fair',
    message:
      "You're making progress! Continue learning and you'll see better results soon.",
  },
  {
    min: 30,
    max: 39,
    level: 'average',
    title: 'Average',
    message:
      'Not bad, but there is room for improvement. Keep pushing yourself!',
  },
  {
    min: 40,
    max: 49,
    level: 'good',
    title: 'Good',
    message:
      "You're doing well! A bit more practice and you'll reach the next level.",
  },
  {
    min: 50,
    max: 59,
    level: 'very-good',
    title: 'Very Good',
    message:
      'Above average performance! You have a solid understanding of the material.',
  },
  {
    min: 60,
    max: 69,
    level: 'great',
    title: 'Great',
    message:
      'You scored higher than 65% of the people who have taken these tests.',
  },
  {
    min: 70,
    max: 79,
    level: 'excellent',
    title: 'Excellent',
    message:
      'Outstanding performance! You have a strong grasp of the concepts.',
  },
  {
    min: 80,
    max: 89,
    level: 'superb',
    title: 'Superb',
    message: 'Exceptional results! You are among the top performers.',
  },
  {
    min: 90,
    max: 100,
    level: 'perfect',
    title: 'Perfect',
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
