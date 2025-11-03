/**
 * Documentation Storybook du composant ResultFeedback
 *
 * Cette story permet de :
 * - Visualiser tous les niveaux de feedback (terrible → amazing)
 * - Tester le message spécial pour score 0
 * - Observer le changement de title et message selon le score
 * - Vérifier la typographie et l'espacement
 */

import type { Meta, StoryObj } from '@storybook/react'
import { ResultFeedback } from './ResultFeedback'

/**
 * Configuration de la story
 */
const meta = {
  title: 'Components/ResultFeedback',
  component: ResultFeedback,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value:
            'linear-gradient(180deg, hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 100%)',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Score pour déterminer le feedback affiché',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px', padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultFeedback>

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
 * Story Zero - Message spécial
 * Message d'accueil quand tous les scores sont à 0
 * Level: "terrible" avec message "Ready to start?"
 */
export const Zero: Story = {
  args: {
    score: 0,
  },
}

/**
 * Story Terrible (1-9)
 * Score très bas
 */
export const Terrible: Story = {
  args: {
    score: 5,
  },
}

/**
 * Story Bad (10-19)
 * Score faible
 */
export const Bad: Story = {
  args: {
    score: 15,
  },
}

/**
 * Story Poor (20-29)
 * Score insuffisant
 */
export const Poor: Story = {
  args: {
    score: 25,
  },
}

/**
 * Story BelowAverage (30-39)
 * Score en dessous de la moyenne
 */
export const BelowAverage: Story = {
  args: {
    score: 35,
  },
}

/**
 * Story Average (40-49)
 * Score moyen
 */
export const Average: Story = {
  args: {
    score: 45,
  },
}

/**
 * Story Fair (50-59)
 * Score correct
 */
export const Fair: Story = {
  args: {
    score: 55,
  },
}

/**
 * Story Good (60-69)
 * Bon score
 */
export const Good: Story = {
  args: {
    score: 65,
  },
}

/**
 * Story Great (70-79)
 * Très bon score (c'est le cas du design)
 */
export const Great: Story = {
  args: {
    score: 76,
  },
}

/**
 * Story Excellent (80-89)
 * Score excellent
 */
export const Excellent: Story = {
  args: {
    score: 85,
  },
}

/**
 * Story Amazing (90-100)
 * Score exceptionnel
 */
export const Amazing: Story = {
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
