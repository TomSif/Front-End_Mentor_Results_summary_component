/**
 * Documentation Storybook du composant InputScore
 *
 * Cette story permet de :
 * - Visualiser les 4 catégories avec leurs couleurs
 * - Tester l'input contrôlé et le callback onScoreChange
 * - Vérifier l'accessibilité
 * - Voir le comportement avec différents scores
 */

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputScore } from './InputScore'
import { DEFAULT_SCORES } from '../../data/defaultScores'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/InputScore',
  component: InputScore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      description: 'Score item avec category, score, icon',
    },
    onScoreChange: {
      action: 'score changed',
      description: 'Callback appelé quand le score change',
    },
  },
} satisfies Meta<typeof InputScore>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Reaction (catégorie rouge)
 * Démontre le composant avec la catégorie Reaction
 */
export const Reaction: Story = {
  args: {
    item: DEFAULT_SCORES[0], // Reaction: 80
    onScoreChange: (score) => console.log('New score:', score),
  },
}

/**
 * Story Memory (catégorie jaune)
 * Démontre le composant avec la catégorie Memory
 */
export const Memory: Story = {
  args: {
    item: DEFAULT_SCORES[1], // Memory: 92
    onScoreChange: (score) => console.log('New score:', score),
  },
}

/**
 * Story Verbal (catégorie verte)
 * Démontre le composant avec la catégorie Verbal
 */
export const Verbal: Story = {
  args: {
    item: DEFAULT_SCORES[2], // Verbal: 61
    onScoreChange: (score) => console.log('New score:', score),
  },
}

/**
 * Story Visual (catégorie bleue)
 * Démontre le composant avec la catégorie Visual
 */
export const Visual: Story = {
  args: {
    item: DEFAULT_SCORES[3], // Visual: 72
    onScoreChange: (score) => console.log('New score:', score),
  },
}

/**
 * Story Interactive
 * Démontre le controlled input avec un state local
 * Permet de tester le changement de score en temps réel
 */
export const Interactive = () => {
  const [score, setScore] = useState(80)

  return (
    <div style={{ width: '300px' }}>
      <InputScore
        item={{
          category: 'Reaction',
          score: score,
          icon: '/assets/images/icon-reaction.svg',
        }}
        onScoreChange={(newScore) => {
          setScore(newScore)
          console.log('New score:', newScore)
        }}
      />
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Score actuel: {score}
      </p>
    </div>
  )
}

/**
 * Story AllCategories
 * Affiche les 4 catégories ensemble pour comparer les couleurs
 */
export const AllCategories = () => {
  return (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {DEFAULT_SCORES.map((item) => (
        <InputScore key={item.category} item={item} onScoreChange={(score) => console.log(score)} />
      ))}
    </div>
  )
}

/**
 * Story EdgeCases
 * Teste les cas limites (scores min/max)
 */
export const EdgeCases = () => {
  return (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputScore
        item={{ category: 'Reaction', score: 0, icon: '/assets/images/icon-reaction.svg' }}
        onScoreChange={(score) => console.log(score)}
      />
      <InputScore
        item={{ category: 'Memory', score: 100, icon: '/assets/images/icon-memory.svg' }}
        onScoreChange={(score) => console.log(score)}
      />
      <InputScore
        item={{ category: 'Verbal', score: 50, icon: '/assets/images/icon-verbal.svg' }}
        onScoreChange={(score) => console.log(score)}
      />
    </div>
  )
}
