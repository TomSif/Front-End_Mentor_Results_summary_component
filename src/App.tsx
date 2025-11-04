/**
 * Application principale - Results Summary Component
 *
 * Architecture:
 * - State management avec useState pour les scores
 * - Calcul en temps réel du score global
 * - Composition de containers: ResultCard + SummaryPanel
 * - Reset des scores à 0 via le bouton Continue
 *
 * Structure:
 * App
 * ├── ResultCard (panneau gauche avec gradient)
 * │   ├── ScoreCircle
 * │   └── ResultFeedback
 * └── SummaryPanel (panneau droit blanc)
 *     ├── SummaryList
 *     │   └── InputScore (×4)
 *     └── Button
 */

import { useState } from 'react'
import { ResultCard } from './components/ResultCard/ResultCard'
import { SummaryPanel } from './components/SummaryPanel/SummaryPanel'
import { DEFAULT_SCORES } from './data/defaultScores'
import { calculateScore } from './utils/calculateScore'
import type { ScoreData, Category } from './types'
import styles from './App.module.scss'

function App() {
  const [scores, setScores] = useState<ScoreData>(DEFAULT_SCORES)

  const handleScoreChange = (category: Category, newScore: number | null) => {
    console.log(`Category ${category} changed to ${newScore}`)

    // Mise à jour immutable du state
    setScores(prevScores =>
      prevScores.map(item =>
        item.category === category ? { ...item, score: newScore } : item
      )
    )
  }

  const handleContinue = () => {
    console.log('Continue clicked - Resetting all scores to null')
    // Reset tous les scores à null (champs vides, mais ResultCard affiche 0)
    setScores(prevScores =>
      prevScores.map(item => ({
        ...item,
        score: null,
      }))
    )
  }

  // Calcul du score global en temps réel avec la fonction utilitaire
  const globalScore = calculateScore(scores)

  return (
    <div className={styles.app}>
      <ResultCard score={globalScore} />
      <SummaryPanel
        items={scores}
        onScoreChange={handleScoreChange}
        onContinue={handleContinue}
      />
    </div>
  )
}

export default App
