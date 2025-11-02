/**
 * Documentation Storybook du composant Button
 *
 * Cette story permet de :
 * - Visualiser toutes les variantes du composant
 * - Tester les interactions (hover, click, disabled)
 * - Vérifier l'accessibilité avec l'addon a11y
 * - Générer la documentation automatique
 */

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

/**
 * Configuration de la story
 * Meta définit les métadonnées du composant dans Storybook
 */
const meta = {
  title: 'Components/Button', // Chemin dans la sidebar Storybook
  component: Button,
  parameters: {
    layout: 'centered', // Centre le composant dans le canvas
  },
  tags: ['autodocs'], // Active la documentation automatique
  argTypes: {
    variant: {
      control: 'select', // Dropdown dans les controls
      options: ['primary', 'secondary'],
      description: 'Style variant of the button',
    },
    disabled: {
      control: 'boolean', // Toggle dans les controls
      description: 'Disables the button',
    },
    children: {
      control: 'text', // Input texte dans les controls
      description: 'Button text content',
    },
    onClick: {
      action: 'clicked', // Log les clics dans le panel Actions
      description: 'Click handler function',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Story Primary (défaut)
 * C'est le bouton principal de l'application
 */
export const Primary: Story = {
  args: {
    children: 'Continue',
    variant: 'primary',
  },
}

/**
 * Story Secondary
 * Variante secondaire avec bordure
 */
export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
}

/**
 * Story Disabled
 * Montre l'état désactivé du bouton
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

/**
 * Story LongText
 * Teste le comportement avec un texte long
 */
export const LongText: Story = {
  args: {
    children: 'This is a very long button text to test wrapping',
    variant: 'primary',
  },
}
