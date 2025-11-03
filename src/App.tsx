import { useState } from 'react'
import { SummaryList } from './components/SummaryList/SummaryList'
import { DEFAULT_SCORES } from './data/defaultScores'
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

  // Calcul du score moyen
  const averageScore = Math.round(
    scores.reduce((sum, item) => sum + item.score, 0) / scores.length
  )

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Results Summary Component</h1>

      <div style={{ marginBottom: '20px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Score moyen : {averageScore} / 100</h2>
      </div>

      <SummaryList items={scores} onScoreChange={handleScoreChange} />
    </div>
  )
}

export default App
