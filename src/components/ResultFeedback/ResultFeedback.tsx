/**
 * Composant ResultFeedback
 *
 * Composant présentationnel qui affiche le feedback textuel selon le score.
 * Utilise la fonction getFeedback() pour obtenir le titre et message appropriés.
 *
 * Design pattern:
 * - Composant purement présentationnel (pas de state)
 * - Le score est passé en prop depuis le parent
 * - Le calcul du feedback est délégué à la fonction utilitaire
 *
 * @example
 * <ResultFeedback score={76} />
 * // Affiche :
 * // Titre: "Great"
 * // Message: "You scored higher than 65% of people..."
 */

import { getFeedback } from '../../utils/getFeedback'
import type { ResultFeedbackProps } from '../../types'
import styles from './ResultFeedback.module.scss'

export function ResultFeedback({ score }: ResultFeedbackProps) {
  // Obtient le feedback approprié selon le score
  const feedback = getFeedback(score)

  return (
    <div className={styles.feedback}>
      <h3 className={styles.title}>{feedback.title}</h3>
      <p className={styles.message}>{feedback.message}</p>
    </div>
  )
}
