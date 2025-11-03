/**
 * Composant SummaryPanel
 *
 * Container qui combine SummaryList et Button.
 * C'est la partie droite de l'interface (le panneau avec le résumé et le bouton).
 *
 * Design pattern:
 * - Composant container (composition de SummaryList + Button)
 * - Background blanc
 * - Layout flexbox vertical
 * - Espacement entre la liste et le bouton
 *
 * @example
 * <SummaryPanel
 *   items={scores}
 *   onScoreChange={handleScoreChange}
 *   onContinue={handleContinue}
 * />
 */

import { SummaryList } from '../SummaryList/SummaryList'
import { Button } from '../Button/Button'
import type { SummaryPanelProps } from '../../types'
import styles from './SummaryPanel.module.scss'

export function SummaryPanel({
  items,
  onScoreChange,
  onContinue,
}: SummaryPanelProps) {
  return (
    <div className={styles.panel}>
      <SummaryList items={items} onScoreChange={onScoreChange} />
      <Button onClick={onContinue}>Continue</Button>
    </div>
  )
}
