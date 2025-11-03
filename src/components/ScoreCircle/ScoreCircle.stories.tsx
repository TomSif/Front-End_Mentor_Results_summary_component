/**
 * Documentation Storybook du composant ScoreCircle
 *
 * Cette story permet de :
 * - Visualiser le cercle avec gradient et typographie
 * - Tester avec différents scores
 * - Vérifier le comportement avec différents maxScore
 * - Observer le composant présentationnel
 */

import type { Meta, StoryObj } from '@storybook/react'
import { ScoreCircle } from './ScoreCircle'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/ScoreCircle',
  component: ScoreCircle,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Score calculé à afficher',
    },
    maxScore: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Score maximum (défaut: 100)',
    },
  },
} satisfies Meta<typeof ScoreCircle>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Default (score du design)
 * Affiche le score 76 comme dans le design desktop-design.jpg
 */
export const Default: Story = {
  args: {
    score: 76,
  },
}

/**
 * Story LowScore
 * Teste avec un score bas
 */
export const LowScore: Story = {
  args: {
    score: 23,
  },
}

/**
 * Story HighScore
 * Teste avec un score élevé
 */
export const HighScore: Story = {
  args: {
    score: 95,
  },
}

/**
 * Story PerfectScore
 * Score parfait à 100
 */
export const PerfectScore: Story = {
  args: {
    score: 100,
  },
}

/**
 * Story ZeroScore
 * Score minimum à 0
 */
export const ZeroScore: Story = {
  args: {
    score: 0,
  },
}

/**
 * Story CustomMaxScore
 * Démontre la réutilisabilité avec un maxScore différent
 * Exemple : notation sur 10
 */
export const CustomMaxScore: Story = {
  args: {
    score: 8,
    maxScore: 10,
  },
}

/**
 * Story FiveStars
 * Autre exemple de réutilisation : notation sur 5
 */
export const FiveStars: Story = {
  args: {
    score: 4,
    maxScore: 5,
  },
}

/**
 * Story ThreeDigitScore
 * Teste l'affichage avec un nombre à 3 chiffres
 */
export const ThreeDigitScore: Story = {
  args: {
    score: 100,
    maxScore: 100,
  },
}
