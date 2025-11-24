/**
 * Composant InputScore - Ligne interactive pour modifier un score
 *
 * Props:
 * - item: ScoreItem avec {category, score, icon}
 * - onScoreChange: Callback appelé quand le score change
 *
 * Exemple d'utilisation:
 * <InputScore
 *   item={{ category: 'Reaction', score: 80, icon: '/assets/...' }}
 *   onScoreChange={(newScore) => console.log('New score:', newScore)}
 * />
 *
 * Concepts React :
 * - Controlled input : l'input est contrôlé par la prop item.score
 * - Event handling : onChange déclenche le callback onScoreChange
 * - Lookup table : CATEGORY_COLORS[item.category] pour récupérer la couleur
 */

import type { InputScoreProps } from '../../types'
import { CATEGORY_COLORS, CATEGORY_BACKGROUND_COLORS } from '../../data/defaultScores'
import styles from './InputScore.module.scss'

export function InputScore({ item, onScoreChange }: InputScoreProps) {
  // Pattern lookup table : récupère les couleurs via la clé category
  const color = CATEGORY_COLORS[item.category]
  const backgroundColor = CATEGORY_BACKGROUND_COLORS[item.category]

  /**
   * Handler pour le changement de valeur de l'input
   * - Extrait la nouvelle valeur de l'événement
   * - Si vide, passe null au parent
   * - Sinon, convertit en nombre avec Number()
   * - Valide que c'est un nombre entre 0 et 100
   * - Appelle le callback parent avec la nouvelle valeur
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    // Si l'input est vide, on passe null
    if (value === '') {
      onScoreChange(null)
      return
    }

    const newScore = Number(value)

    // Validation : score entre 0 et 100
    if (newScore >= 0 && newScore <= 100) {
      onScoreChange(newScore)
    }
  }

  return (
    <div
      className={styles.inputScore}
      style={
        {
          '--category-color': color,
          '--category-background': backgroundColor,
        } as React.CSSProperties
      }
    >
      {/* Container gauche : Icône + Catégorie */}
      <div className={styles.categoryContainer}>
        <img src={item.icon} alt={`${item.category} icon`} className={styles.icon} />
        <span className={styles.category}>{item.category}</span>
      </div>

      {/* Container droit : Input + notation */}
      <div className={styles.scoreContainer}>
        {/* Input contrôlé : la valeur vient de item.score (ou chaîne vide si null) */}
        <input
          type="number"
          value={item.score ?? ''}
          onChange={handleChange}
          min="0"
          max="100"
          className={styles.input}
          aria-label={`${item.category} score`}
        />
        <span className={styles.maxScore}>/ 100</span>
      </div>
    </div>
  )
}
