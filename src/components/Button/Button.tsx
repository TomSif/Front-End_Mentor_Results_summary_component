/**
 * Composant Button - Bouton réutilisable
 *
 * Props:
 * - children: Le texte ou contenu du bouton
 * - onClick?: Fonction appelée au clic (optionnelle)
 * - variant?: 'primary' | 'secondary' (défaut: 'primary')
 * - disabled?: true/false (défaut: false)
 *
 * Exemple d'utilisation:
 * <Button onClick={() => console.log('clicked')}>Continue</Button>
 * <Button variant="secondary">Cancel</Button>
 */

import type { ButtonProps } from '../../types'
import styles from './Button.module.scss'

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}
