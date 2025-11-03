/**
 * Documentation Storybook du composant SummaryPanel
 *
 * Cette story permet de :
 * - Visualiser le container complet avec SummaryList + Button
 * - Tester l'interaction complète (modification + reset)
 * - Observer le layout et l'espacement
 * - Vérifier le comportement avec différents états
 */

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SummaryPanel } from './SummaryPanel'
import { DEFAULT_SCORES } from '../../data/defaultScores'
import type { ScoreData, Category } from '../../types'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/SummaryPanel',
  component: SummaryPanel,
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
    onContinue: {
      action: 'continue clicked',
      description: 'Callback appelé au clic sur le bouton Continue',
    },
  },
} satisfies Meta<typeof SummaryPanel>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Default
 * Affiche le panel complet avec les scores par défaut
 */
export const Default: Story = {
  args: {
    items: DEFAULT_SCORES,
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
    onContinue: () => console.log('Continue clicked'),
  },
}

/**
 * Story Interactive
 * Démontre le comportement complet avec state management
 * Permet de modifier les scores et de les reset avec le bouton Continue
 */
export const Interactive = () => {
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
    console.log('Continue clicked - Resetting all scores to 0')
    // Reset tous les scores à 0
    setScores((prevScores) =>
      prevScores.map((item) => ({
        ...item,
        score: 0,
      }))
    )
  }

  // Calcul du score moyen en temps réel
  const averageScore = Math.round(
    scores.reduce((sum, item) => sum + item.score, 0) / scores.length
  )

  return (
    <div>
      <SummaryPanel
        items={scores}
        onScoreChange={handleScoreChange}
        onContinue={handleContinue}
      />

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          width: '368px',
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>État actuel :</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
          {scores.map((item) => (
            <li key={item.category}>
              {item.category}: {item.score}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Score global : {averageScore} / 100
        </p>
        <p style={{ marginTop: '8px', fontSize: '14px', fontStyle: 'italic' }}>
          Modifiez les scores puis cliquez sur Continue pour tout réinitialiser à 0.
        </p>
      </div>
    </div>
  )
}

/**
 * Story ZeroScores
 * Tous les scores à 0 (état après reset)
 */
export const ZeroScores: Story = {
  args: {
    items: [
      { category: 'Reaction', score: 0, icon: '/assets/images/icon-reaction.svg' },
      { category: 'Memory', score: 0, icon: '/assets/images/icon-memory.svg' },
      { category: 'Verbal', score: 0, icon: '/assets/images/icon-verbal.svg' },
      { category: 'Visual', score: 0, icon: '/assets/images/icon-visual.svg' },
    ],
    onScoreChange: (category, score) => console.log(`${category}: ${score}`),
    onContinue: () => console.log('Continue clicked'),
  },
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
    onContinue: () => console.log('Continue clicked'),
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
    onContinue: () => console.log('Continue clicked'),
  },
}
