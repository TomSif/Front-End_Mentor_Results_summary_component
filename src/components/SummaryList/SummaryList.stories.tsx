/**
 * Documentation Storybook du composant SummaryList
 *
 * Cette story permet de :
 * - Visualiser la liste complète des 4 InputScore
 * - Tester l'interaction et la délégation du callback
 * - Vérifier le comportement avec différents états
 * - Observer la key prop et le rendu de liste
 */

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SummaryList } from './SummaryList'
import { DEFAULT_SCORES } from '../../data/defaultScores'
import type { ScoreData, Category } from '../../types'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/SummaryList',
  component: SummaryList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Tableau de ScoreItem avec les 4 catégories',
    },
    onScoreChange: {
      action: 'score changed',
      description: 'Callback appelé avec (category, newScore)',
    },
  },
} satisfies Meta<typeof SummaryList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Default
 * Affiche les 4 catégories avec les scores par défaut
 */
export const Default: Story = {
  args: {
    items: DEFAULT_SCORES,
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
  },
}

/**
 * Story Interactive
 * Démontre le state management complet avec useState
 * Permet de modifier les scores et voir le recalcul en temps réel
 */
export const Interactive = () => {
  const [scores, setScores] = useState<ScoreData>(DEFAULT_SCORES)

  const handleScoreChange = (category: Category, newScore: number | null) => {
    console.log(`Category ${category} changed to ${newScore}`)

    // Mise à jour immutable du state avec .map()
    // On cherche l'item qui correspond à la category et on met à jour son score
    setScores((prevScores) =>
      prevScores.map((item) =>
        item.category === category
          ? { ...item, score: newScore } // Nouvel objet avec score mis à jour
          : item // Garde l'objet inchangé
      )
    )
  }

  // Calcul du score moyen en temps réel (traite null comme 0)
  const averageScore = Math.round(
    scores.reduce((sum, item) => sum + (item.score ?? 0), 0) / scores.length
  )

  return (
    <div style={{ width: '400px' }}>
      <SummaryList items={scores} onScoreChange={handleScoreChange} />

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Scores actuels :</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
          {scores.map((item) => (
            <li key={item.category}>
              {item.category}: {item.score ?? 'vide'}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Moyenne : {averageScore} / 100
        </p>
      </div>
    </div>
  )
}

/**
 * Story LowScores
 * Teste le comportement avec des scores bas
 */
export const LowScores: Story = {
  args: {
    items: [
      { category: 'Reaction', score: 20, icon: '/assets/images/icon-reaction.svg' },
      { category: 'Memory', score: 15, icon: '/assets/images/icon-memory.svg' },
      { category: 'Verbal', score: 10, icon: '/assets/images/icon-verbal.svg' },
      { category: 'Visual', score: 25, icon: '/assets/images/icon-visual.svg' },
    ],
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
  },
}

/**
 * Story HighScores
 * Teste le comportement avec des scores élevés
 */
export const HighScores: Story = {
  args: {
    items: [
      { category: 'Reaction', score: 95, icon: '/assets/images/icon-reaction.svg' },
      { category: 'Memory', score: 98, icon: '/assets/images/icon-memory.svg' },
      { category: 'Verbal', score: 92, icon: '/assets/images/icon-verbal.svg' },
      { category: 'Visual', score: 97, icon: '/assets/images/icon-visual.svg' },
    ],
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
  },
}

/**
 * Story PerfectScores
 * Tous les scores à 100
 */
export const PerfectScores: Story = {
  args: {
    items: [
      { category: 'Reaction', score: 100, icon: '/assets/images/icon-reaction.svg' },
      { category: 'Memory', score: 100, icon: '/assets/images/icon-memory.svg' },
      { category: 'Verbal', score: 100, icon: '/assets/images/icon-verbal.svg' },
      { category: 'Visual', score: 100, icon: '/assets/images/icon-visual.svg' },
    ],
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
  },
}
