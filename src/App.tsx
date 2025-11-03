import { useState } from 'react'
import { ScoreCircle } from './components/ScoreCircle/ScoreCircle'
import { SummaryList } from './components/SummaryList/SummaryList'
import { Button } from './components/Button/Button'
import { DEFAULT_SCORES } from './data/defaultScores'
import { calculateScore } from './utils/calculateScore'
import type { ScoreData, Category } from './types'

function App() {
  const [scores, setScores] = useState<ScoreData>(DEFAULT_SCORES)

  const handleScoreChange = (category: Category, newScore: number) => {
    console.log(`Category ${category} changed to ${newScore}`)

    // Mise à jour immutable du state
    setScores((prevScores) =>
      prevScores.map((item) =>
        item.category === category ? { ...item, score: newScore } : item
      )
    )
  }

  const handleContinue = () => {
    // Reset tous les scores à 0
    setScores((prevScores) =>
      prevScores.map((item) => ({
        ...item,
        score: 0,
      }))
    )
  }

  // Calcul du score global en temps réel avec la fonction utilitaire
  const globalScore = calculateScore(scores)

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '40px' }}>
      {/* Colonne gauche : ScoreCircle */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ScoreCircle score={globalScore} />
      </div>

      {/* Colonne droite : SummaryList + Button */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SummaryList items={scores} onScoreChange={handleScoreChange} />
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </div>
  )
}

export default App
