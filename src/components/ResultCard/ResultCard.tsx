/**
 * Composant ResultCard
 *
 * Container qui combine ScoreCircle et ResultFeedback.
 * C'est la partie gauche de l'interface (le panneau avec gradient).
 *
 * Design pattern:
 * - Composant container (composition de ScoreCircle + ResultFeedback)
 * - Gradient background (gradient-1 du design Figma)
 * - Layout flexbox vertical avec centrage
 * - Titre "Your Result" en haut
 *
 * @example
 * <ResultCard score={76} />
 * // Affiche :
 * // - Titre "Your Result"
 * // - ScoreCircle avec 76
 * // - ResultFeedback avec "Great" + message
 */

import { ScoreCircle } from '../ScoreCircle/ScoreCircle'
import { ResultFeedback } from '../ResultFeedback/ResultFeedback'
import type { ResultCardProps } from '../../types'
import styles from './ResultCard.module.scss'

export function ResultCard({ score }: ResultCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Your Result</h2>
      <ScoreCircle score={score} />
      <ResultFeedback score={score} />
    </div>
  )
}
