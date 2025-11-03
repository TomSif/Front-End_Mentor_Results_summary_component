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
 * Couleurs principales associées à chaque catégorie
 * Utilisées pour l'icône et le texte de la catégorie
 *
 * Note : Ces couleurs correspondent aux couleurs 400/500/800 du design Figma
 */
export const CATEGORY_COLORS = {
  Reaction: 'hsl(0, 100%, 67%)',      // Light red (Red-400)
  Memory: 'hsl(39, 100%, 56%)',       // Orangey yellow (Yellow-400)
  Verbal: 'hsl(166, 100%, 37%)',      // Green teal (Green-500)
  Visual: 'hsl(234, 85%, 45%)',       // Cobalt blue (Blue-800)
} as const

/**
 * Couleurs de fond associées à chaque catégorie
 * Utilisées pour le background des InputScore
 *
 * Note : Ces couleurs correspondent aux couleurs -50 du design Figma
 * (versions très claires des couleurs principales)
 */
export const CATEGORY_BACKGROUND_COLORS = {
  Reaction: '#FFF6F6',  // Red-50
  Memory: '#FFF9F4',    // Yellow-50
  Verbal: '#F2FCF9',    // Green-50
  Visual: '#F3F4FD',    // Blue-50
} as const
