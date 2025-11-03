/**
 * Documentation Storybook du composant ResultCard
 *
 * Cette story permet de :
 * - Visualiser le container complet avec ScoreCircle + ResultFeedback
 * - Tester avec différents scores pour voir le feedback changer
 * - Observer le gradient background et la composition
 * - Vérifier l'alignement et l'espacement des éléments
 */

import type { Meta, StoryObj } from '@storybook/react'
import { ResultCard } from './ResultCard'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/ResultCard',
  component: ResultCard,
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
      description: 'Score global calculé (affiché dans le cercle et utilisé pour le feedback)',
    },
  },
} satisfies Meta<typeof ResultCard>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Default (score du design)
 * Affiche le score 76 comme dans le design desktop-design.jpg
 * Level: "great"
 */
export const Default: Story = {
  args: {
    score: 76,
  },
}

/**
 * Story Zero - État initial
 * Message d'accueil "Ready to start?"
 */
export const Zero: Story = {
  args: {
    score: 0,
  },
}

/**
 * Story LowScore
 * Score faible avec feedback "bad"
 */
export const LowScore: Story = {
  args: {
    score: 15,
  },
}

/**
 * Story Average
 * Score moyen
 */
export const Average: Story = {
  args: {
    score: 45,
  },
}

/**
 * Story Good
 * Bon score
 */
export const Good: Story = {
  args: {
    score: 65,
  },
}

/**
 * Story Excellent
 * Score excellent
 */
export const Excellent: Story = {
  args: {
    score: 85,
  },
}

/**
 * Story PerfectScore
 * Score parfait avec feedback "amazing"
 */
export const PerfectScore: Story = {
  args: {
    score: 100,
  },
}
