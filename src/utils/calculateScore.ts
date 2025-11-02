/**
 * Calcule le score global à partir des 4 catégories
 *
 * @param scores - Tableau des 4 scores (Reaction, Memory, Verbal, Visual)
 * @returns Le score moyen arrondi à l'entier le plus proche
 *
 * @example
 * const scores = [
 *   { category: 'Reaction', score: 80, icon: './icon.svg' },
 *   { category: 'Memory', score: 92, icon: './icon.svg' },
 *   { category: 'Verbal', score: 61, icon: './icon.svg' },
 *   { category: 'Visual', score: 72, icon: './icon.svg' }
 * ]
 * calculateScore(scores) // Returns: 76
 * // Calcul : (80 + 92 + 61 + 72) / 4 = 76.25 → Math.round(76.25) = 76
 */

import type { ScoreData } from '../types'

export function calculateScore(scores: ScoreData): number {
  // Étape 1 : Extraire juste les scores (nombres) du tableau d'objets
  // scores = [{ score: 80 }, { score: 92 }, ...]
  // → on veut juste [80, 92, 61, 72]
  const scoreValues = scores.map(item => item.score)

  // Étape 2 : Sommer tous les scores avec reduce
  // Départ : sum = 0
  // Tour 1 : sum = 0 + 80 = 80
  // Tour 2 : sum = 80 + 92 = 172
  // Tour 3 : sum = 172 + 61 = 233
  // Tour 4 : sum = 233 + 72 = 305
  const sum = scoreValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  // Étape 3 : Calculer la moyenne
  const average = sum / scores.length // 305 / 4 = 76.25

  // Étape 4 : Arrondir au plus proche
  return Math.round(average) // Math.round(76.25) = 76
}
