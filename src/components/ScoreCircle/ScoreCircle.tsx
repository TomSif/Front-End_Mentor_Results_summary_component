/**
 * Composant ScoreCircle - Affiche le score global dans un cercle avec gradient
 *
 * Props:
 * - score: number - Score calculé (ex: 76)
 * - maxScore?: number - Score maximum (défaut: 100)
 *
 * Exemple d'utilisation:
 * <ScoreCircle score={76} />
 * <ScoreCircle score={8} maxScore={10} />
 *
 * Concepts React :
 * - Composant présentationnel : pas de state, juste affichage
 * - Props avec valeur par défaut (maxScore = 100)
 * - Réutilisable avec différents maxScore
 *
 * Concepts CSS :
 * - Cercle parfait avec border-radius: 50%
 * - Gradient background (gradient-2 du design Figma)
 * - Centrage avec flexbox
 * - Text Presets Figma (Preset 1 pour le score, Preset 6 pour "of 100")
 */

import type { ScoreCircleProps } from '../../types'
import styles from './ScoreCircle.module.scss'

export function ScoreCircle({ score, maxScore = 100 }: ScoreCircleProps) {
  return (
    <div className={styles.circle}>
      {/* Score principal - Text Preset 1 (72px ExtraBold) */}
      <span className={styles.score}>{score}</span>

      {/* Texte "of 100" - Text Preset 6 (16px Medium) */}
      <span className={styles.maxScore}>of {maxScore}</span>
    </div>
  )
}
