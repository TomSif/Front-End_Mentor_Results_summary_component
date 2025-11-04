// ============================================
// TYPES POUR LES DONNÉES
// ============================================

/**
 * Type littéral : les 4 seules catégories possibles
 * Cela empêche les typos comme "Reactio" ou "Memry"
 */
export type Category = 'Reaction' | 'Memory' | 'Verbal' | 'Visual'

/**
 * Interface : décrit la forme d'un objet "ScoreItem"
 * Correspond exactement à un objet dans data.json
 *
 * Exemple :
 * {
 *   category: "Reaction",
 *   score: 80,
 *   icon: "./assets/images/icon-reaction.svg"
 * }
 */
export interface ScoreItem {
  category: Category // Utilise le type Category défini ci-dessus
  score: number | null // Un nombre entre 0 et 100, ou null si pas encore saisi
  icon: string // Chemin vers l'icône SVG
}

/**
 * Type : tableau de ScoreItem
 * Représente le tableau complet des 4 catégories
 */
export type ScoreData = ScoreItem[]

// ============================================
// TYPES POUR LE FEEDBACK (selon le score)
// ============================================

/**
 * Type littéral : les 10 niveaux de feedback possibles
 * Basé sur les tranches de 10% (0-9, 10-19, ..., 90-100)
 */
export type ResultLevel =
  | 'terrible' // 0-9
  | 'bad' // 10-19
  | 'poor' // 20-29
  | 'below-average' // 30-39
  | 'average' // 40-49
  | 'fair' // 50-59
  | 'good' // 60-69
  | 'great' // 70-79
  | 'excellent' // 80-89
  | 'amazing' // 90-100

/**
 * Interface : structure du feedback affiché
 * Contient le niveau, le titre et le message personnalisé
 *
 * Exemple :
 * {
 *   level: "great",
 *   title: "Great",
 *   message: "You scored higher than 65% of people..."
 * }
 */
export interface Feedback {
  level: ResultLevel
  title: string
  message: string
}

// ============================================
// TYPES POUR LES PROPS DES COMPOSANTS REACT
// ============================================

/**
 * Props du composant ScoreCircle
 * Affiche le score global dans un cercle
 */
export interface ScoreCircleProps {
  score: number // Score calculé (ex: 76)
  maxScore?: number // Score maximum (par défaut 100)
}

/**
 * Props du composant ResultFeedback
 * Affiche le titre et message selon le score
 */
export interface ResultFeedbackProps {
  score: number // Score pour déterminer le feedback
}

/**
 * Props du composant ResultCard
 * Container qui combine ScoreCircle + ResultFeedback
 */
export interface ResultCardProps {
  score: number // Score calculé à afficher et utiliser pour le feedback
}

/**
 * Props du composant SummaryItem
 * Affiche une ligne du résumé (ex: Reaction 80/100)
 */
export interface SummaryItemProps {
  item: ScoreItem // Un objet du tableau data.json
}

/**
 * Props du composant InputScore
 * Affiche une ligne interactive avec input pour modifier le score
 */
export interface InputScoreProps {
  item: ScoreItem // Un objet du tableau data.json
  onScoreChange: (newScore: number | null) => void // Callback pour remonter le changement (null si input vide)
}

/**
 * Props du composant SummaryList
 * Affiche la liste des 4 catégories avec inputs interactifs
 */
export interface SummaryListProps {
  items: ScoreData // Le tableau complet des 4 scores
  onScoreChange: (category: Category, newScore: number | null) => void // Callback pour remonter les changements
}

/**
 * Props du composant SummaryPanel
 * Container qui combine SummaryList + Button (panneau droit)
 */
export interface SummaryPanelProps {
  items: ScoreData // Le tableau complet des 4 scores
  onScoreChange: (category: Category, newScore: number | null) => void // Callback pour remonter les changements
  onContinue: () => void // Callback pour le bouton Continue
}

/**
 * Props du composant Button
 * Bouton générique réutilisable
 */
export interface ButtonProps {
  children: React.ReactNode // Le texte/contenu du bouton
  onClick?: () => void // Fonction appelée au clic (optionnelle)
  variant?: 'primary' | 'secondary' // Style du bouton (optionnel)
  disabled?: boolean // Bouton désactivé ou non (optionnel)
}
