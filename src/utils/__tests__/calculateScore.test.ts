/**
 * Tests pour la fonction calculateScore
 *
 * Pattern AAA (Arrange-Act-Assert) :
 * - Arrange : Préparer les données de test
 * - Act : Exécuter la fonction
 * - Assert : Vérifier le résultat
 */

import { describe, test, expect } from 'vitest'
import { calculateScore } from '../calculateScore'
import type { ScoreData } from '../../types'

describe('calculateScore', () => {
  /**
   * Test 1 : Cas nominal (exemple de Frontend Mentor)
   * Données : [80, 92, 61, 72]
   * Moyenne : (80+92+61+72) / 4 = 305 / 4 = 76.25
   * Arrondi : Math.round(76.25) = 76
   */
  test('calcule la moyenne des 4 scores et arrondit au plus proche', () => {
    // Arrange : Préparer les données
    const scores: ScoreData = [
      { category: 'Reaction', score: 80, icon: './icon.svg' },
      { category: 'Memory', score: 92, icon: './icon.svg' },
      { category: 'Verbal', score: 61, icon: './icon.svg' },
      { category: 'Visual', score: 72, icon: './icon.svg' },
    ]

    // Act : Exécuter la fonction
    const result = calculateScore(scores)

    // Assert : Vérifier le résultat
    expect(result).toBe(76)
  })

  /**
   * Test 2 : Arrondi vers le haut
   * Données : [75, 75, 75, 76]
   * Moyenne : 301 / 4 = 75.25 → arrondi à 75
   */
  test('arrondit 75.25 vers 75 (le plus proche)', () => {
    const scores: ScoreData = [
      { category: 'Reaction', score: 75, icon: './icon.svg' },
      { category: 'Memory', score: 75, icon: './icon.svg' },
      { category: 'Verbal', score: 75, icon: './icon.svg' },
      { category: 'Visual', score: 76, icon: './icon.svg' },
    ]

    const result = calculateScore(scores)

    expect(result).toBe(75)
  })

  /**
   * Test 3 : Arrondi vers le haut
   * Données : [75, 76, 76, 76]
   * Moyenne : 303 / 4 = 75.75 → arrondi à 76
   */
  test('arrondit 75.75 vers 76 (le plus proche)', () => {
    const scores: ScoreData = [
      { category: 'Reaction', score: 75, icon: './icon.svg' },
      { category: 'Memory', score: 76, icon: './icon.svg' },
      { category: 'Verbal', score: 76, icon: './icon.svg' },
      { category: 'Visual', score: 76, icon: './icon.svg' },
    ]

    const result = calculateScore(scores)

    expect(result).toBe(76)
  })

  /**
   * Test 4 : Score parfait
   * Toutes les catégories à 100
   */
  test('retourne 100 pour des scores parfaits', () => {
    const scores: ScoreData = [
      { category: 'Reaction', score: 100, icon: './icon.svg' },
      { category: 'Memory', score: 100, icon: './icon.svg' },
      { category: 'Verbal', score: 100, icon: './icon.svg' },
      { category: 'Visual', score: 100, icon: './icon.svg' },
    ]

    const result = calculateScore(scores)

    expect(result).toBe(100)
  })

  /**
   * Test 5 : Scores très faibles
   * Toutes les catégories à 0
   */
  test('retourne 0 pour des scores nuls', () => {
    const scores: ScoreData = [
      { category: 'Reaction', score: 0, icon: './icon.svg' },
      { category: 'Memory', score: 0, icon: './icon.svg' },
      { category: 'Verbal', score: 0, icon: './icon.svg' },
      { category: 'Visual', score: 0, icon: './icon.svg' },
    ]

    const result = calculateScore(scores)

    expect(result).toBe(0)
  })
})
