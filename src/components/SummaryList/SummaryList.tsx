/**
 * Composant SummaryList - Container pour la liste des InputScore
 *
 * Props:
 * - items: ScoreData (tableau des 4 catégories)
 * - onScoreChange: Callback appelé quand un score change
 *
 * Exemple d'utilisation:
 * <SummaryList
 *   items={DEFAULT_SCORES}
 *   onScoreChange={(category, newScore) => {
 *     console.log(`${category} changed to ${newScore}`)
 *   }}
 * />
 *
 * Concepts React :
 * - .map() pour itérer sur un tableau et rendre une liste de composants
 * - key prop pour identifier chaque élément de la liste (performance + reconciliation)
 * - Delegation pattern : enrober le callback pour ajouter la category
 * - Closure : la fonction fléchée "capture" item.category
 */

import type { SummaryListProps } from '../../types'
import { InputScore } from '../InputScore/InputScore'
import styles from './SummaryList.module.scss'

export function SummaryList({ items, onScoreChange }: SummaryListProps) {
  return (
    <div className={styles.summaryList}>
      {/*
        .map() transforme le tableau de données en tableau de composants React

        Pour chaque item du tableau, on crée un composant InputScore

        Exemple : si items = [
          { category: 'Reaction', score: 80, icon: '...' },
          { category: 'Memory', score: 92, icon: '...' },
        ]

        Alors .map() génère :
        <InputScore item={{ category: 'Reaction', ... }} />
        <InputScore item={{ category: 'Memory', ... }} />
      */}
      {items.map(item => (
        <InputScore
          // key prop (OBLIGATOIRE pour les listes)
          // - Permet à React d'identifier chaque élément
          // - Doit être unique et stable
          // - ✅ item.category est parfait (unique et ne change jamais)
          // - ❌ Ne JAMAIS utiliser l'index comme key (sauf liste statique)
          key={item.category}
          // item prop : passe l'objet complet { category, score, icon }
          item={item}
          // Delegation pattern avec closure
          // Problème : InputScore appelle onScoreChange(newScore)
          //           mais on a besoin de savoir QUELLE catégorie !
          // Solution : Enrober le callback dans une fonction fléchée
          //           qui "capture" item.category (closure)
          // Flux :
          // 1. InputScore appelle onScoreChange(85)
          // 2. Cette fonction fléchée reçoit 85
          // 3. Elle appelle le vrai callback avec (item.category, 85)
          // 4. Le parent reçoit ('Reaction', 85) → il sait quelle catégorie !
          // Chaque InputScore a sa propre fonction qui se "souvient"
          // de son item.category grâce à la closure
          onScoreChange={newScore => onScoreChange(item.category, newScore)}
        />
      ))}
    </div>
  )
}
