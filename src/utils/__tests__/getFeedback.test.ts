/**
 * Tests pour la fonction getFeedback
 *
 * Cette fonction retourne un objet Feedback selon la tranche de score :
 * - 0-9   → poor
 * - 10-19 → below-average
 * - 20-29 → fair
 * - 30-39 → average
 * - 40-49 → good
 * - 50-59 → very-good
 * - 60-69 → great
 * - 70-79 → excellent
 * - 80-89 → superb
 * - 90-100 → perfect
 */

import { describe, test, expect } from 'vitest'
import { getFeedback } from '../getFeedback'

describe('getFeedback', () => {
  /**
   * Test de la structure de retour
   * Vérifie que l'objet contient bien les 3 propriétés attendues
   */
  test('retourne un objet avec level, title et message', () => {
    const result = getFeedback(76)

    // Vérifie que les 3 propriétés existent
    expect(result).toHaveProperty('level')
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('message')

    // Vérifie que ce sont des strings
    expect(typeof result.level).toBe('string')
    expect(typeof result.title).toBe('string')
    expect(typeof result.message).toBe('string')
  })

  /**
   * Tests pour chaque tranche de score
   * On teste le début, le milieu et la fin de chaque tranche
   */

  test('score 0-9 : retourne "terrible"', () => {
    expect(getFeedback(0).level).toBe('terrible')
    expect(getFeedback(5).level).toBe('terrible')
    expect(getFeedback(9).level).toBe('terrible')
  })

  test('score 10-19 : retourne "bad"', () => {
    expect(getFeedback(10).level).toBe('bad')
    expect(getFeedback(15).level).toBe('bad')
    expect(getFeedback(19).level).toBe('bad')
  })

  test('score 20-29 : retourne "poor"', () => {
    expect(getFeedback(20).level).toBe('poor')
    expect(getFeedback(25).level).toBe('poor')
    expect(getFeedback(29).level).toBe('poor')
  })

  test('score 30-39 : retourne "below-average"', () => {
    expect(getFeedback(30).level).toBe('below-average')
    expect(getFeedback(35).level).toBe('below-average')
    expect(getFeedback(39).level).toBe('below-average')
  })

  test('score 40-49 : retourne "average"', () => {
    expect(getFeedback(40).level).toBe('average')
    expect(getFeedback(45).level).toBe('average')
    expect(getFeedback(49).level).toBe('average')
  })

  test('score 50-59 : retourne "fair"', () => {
    expect(getFeedback(50).level).toBe('fair')
    expect(getFeedback(55).level).toBe('fair')
    expect(getFeedback(59).level).toBe('fair')
  })

  test('score 60-69 : retourne "good"', () => {
    expect(getFeedback(60).level).toBe('good')
    expect(getFeedback(65).level).toBe('good')
    expect(getFeedback(69).level).toBe('good')
  })

  test('score 70-79 : retourne "great"', () => {
    // Cas du score exemple (76) - Match le design
    const result = getFeedback(76)
    expect(result.level).toBe('great')
    expect(result.title).toBe('Great')
    expect(result.message).toBe('You scored higher than 65% of the people who have taken these tests.')

    expect(getFeedback(70).level).toBe('great')
    expect(getFeedback(79).level).toBe('great')
  })

  test('score 80-89 : retourne "excellent"', () => {
    expect(getFeedback(80).level).toBe('excellent')
    expect(getFeedback(85).level).toBe('excellent')
    expect(getFeedback(89).level).toBe('excellent')
  })

  test('score 90-100 : retourne "amazing"', () => {
    expect(getFeedback(90).level).toBe('amazing')
    expect(getFeedback(95).level).toBe('amazing')
    expect(getFeedback(100).level).toBe('amazing')
  })

  /**
   * Tests des cas limites (edge cases)
   */
  test('score exact de 0 : retourne "terrible"', () => {
    expect(getFeedback(0).level).toBe('terrible')
  })

  test('score exact de 100 : retourne "amazing"', () => {
    expect(getFeedback(100).level).toBe('amazing')
  })

  /**
   * Test des frontières entre tranches
   * Important pour vérifier qu'il n'y a pas de chevauchement
   */
  test('frontière 9/10 : passe de "terrible" à "bad"', () => {
    expect(getFeedback(9).level).toBe('terrible')
    expect(getFeedback(10).level).toBe('bad')
  })

  test('frontière 69/70 : passe de "good" à "great"', () => {
    expect(getFeedback(69).level).toBe('good')
    expect(getFeedback(70).level).toBe('great')
  })

  test('frontière 89/90 : passe de "excellent" à "amazing"', () => {
    expect(getFeedback(89).level).toBe('excellent')
    expect(getFeedback(90).level).toBe('amazing')
  })
})
