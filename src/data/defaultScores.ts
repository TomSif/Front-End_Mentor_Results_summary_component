/**
 * Valeurs par défaut des scores
 * Correspond exactement au design desktop-design.jpg de Frontend Mentor
 *
 * Ces valeurs sont utilisées comme état initial de l'application.
 * L'utilisateur peut les modifier via les inputs interactifs.
 *
 * Score calculé : (80 + 92 + 61 + 72) / 4 = 76.25 → Math.round() → 76
 * Feedback attendu : "Great" (tranche 70-79)
 * Message : "You scored higher than 65% of the people who have taken these tests."
 */

import type { ScoreData } from '../types'

export const DEFAULT_SCORES: ScoreData = [
  {
    category: 'Reaction',
    score: 80,
    icon: '/assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: '/assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: '/assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: '/assets/images/icon-visual.svg',
  },
]

/**
 * Couleurs associées à chaque catégorie
 * Utilisées pour le background et l'icône des InputScore
 *
 * Note : Ces couleurs sont définies dans variables.scss
 * mais on les exporte ici pour faciliter l'utilisation dans les composants
 */
export const CATEGORY_COLORS = {
  Reaction: 'hsl(0, 100%, 67%)',      // Light red
  Memory: 'hsl(39, 100%, 56%)',       // Orangey yellow
  Verbal: 'hsl(166, 100%, 37%)',      // Green teal
  Visual: 'hsl(234, 85%, 45%)',       // Cobalt blue
} as const
