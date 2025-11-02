# Instructions du Projet - Results Summary Component

## Contexte
Projet Frontend Mentor pour apprendre **Vite + React + TypeScript** avec les meilleures pratiques professionnelles 2025.

## Objectifs d'apprentissage
- ✅ Vite (build tool moderne)
- ✅ TypeScript avec React
- ✅ SASS (modules CSS)
- ✅ Storybook (documentation des composants)
- ✅ Vitest (tests unitaires)
- ✅ Architecture modulaire
- ✅ Workflow professionnel (ESLint, Prettier, Git)

---

## Spécifications du Design

### Layout
- **Mobile:** 375px
- **Desktop:** 1440px
- **Font:** Hanken Grotesk (weights: 500, 700, 800)
- **Font size (paragraphs):** 18px

### Couleurs (HSL)

**Primary:**
- Light red: `hsl(0, 100%, 67%)`
- Orangey yellow: `hsl(39, 100%, 56%)`
- Green teal: `hsl(166, 100%, 37%)`
- Cobalt blue: `hsl(234, 85%, 45%)`

**Gradients:**
- Light slate blue (background): `hsl(252, 100%, 67%)`
- Light royal blue (background): `hsl(241, 81%, 54%)`
- Violet blue (circle): `hsla(256, 72%, 46%, 1)`
- Persian blue (circle): `hsla(241, 72%, 46%, 0)`

**Neutral:**
- White: `hsl(0, 0%, 100%)`
- Pale blue: `hsl(221, 100%, 96%)`
- Light lavender: `hsl(241, 100%, 89%)`
- Dark gray blue: `hsl(224, 30%, 27%)`

---

## Architecture des Composants

```
App
├── ResultCard (partie gauche, fond violet gradient)
│   ├── ScoreCircle (cercle avec score global)
│   └── ResultFeedback (titre + message selon score)
│
└── SummaryPanel (partie droite, fond blanc)
    ├── SummaryList
    │   └── SummaryItem × 4 (Reaction, Memory, Verbal, Visual)
    └── Button (Continue)
```

### Composants détaillés

**1. ResultCard**
- Affiche le résultat global
- Background gradient violet
- Border radius

**2. ScoreCircle**
- Cercle avec gradient
- Affiche le score calculé (ex: 76)
- Texte "of 100"

**3. ResultFeedback**
- Titre dynamique ("Great", "Excellent", etc.)
- Message descriptif selon le score
- Logique de seuils par tranches de 10%

**4. SummaryPanel**
- Container de la partie droite
- Background blanc

**5. SummaryList**
- Liste des 4 catégories de scores
- Données depuis `data.json`

**6. SummaryItem**
- Icône SVG colorée
- Nom de la catégorie
- Score / 100
- Background coloré avec opacité

**7. Button**
- Bouton "Continue"
- États hover et focus

---

## Logique Métier

### Calcul du Score Global
```typescript
// Moyenne des 4 scores, arrondie à l'entier le plus proche
const totalScore = Math.round(
  (reaction + memory + verbal + visual) / 4
)
// Exemple: (80 + 92 + 61 + 72) / 4 = 76.25 → 76
```

### Feedback par Tranches de 10%
| Score    | Titre           | Message                                    |
|----------|-----------------|-------------------------------------------|
| 0-9      | Poor            | You need more practice...                 |
| 10-19    | Below Average   | Keep working on it...                     |
| 20-29    | Fair            | You're making progress...                 |
| 30-39    | Average         | Not bad, but room for improvement...      |
| 40-49    | Good            | You're doing well...                      |
| 50-59    | Very Good       | Above average performance...              |
| 60-69    | Great           | You scored higher than 65% of people...   |
| 70-79    | Excellent       | Outstanding performance...                |
| 80-89    | Superb          | Exceptional results...                    |
| 90-100   | Perfect         | You're a genius...                        |

---

## Structure du Projet

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.scss
│   │   └── Button.stories.tsx
│   ├── ResultCard/
│   ├── ResultFeedback/
│   ├── ScoreCircle/
│   ├── SummaryItem/
│   ├── SummaryList/
│   └── SummaryPanel/
├── types/
│   └── index.ts
├── utils/
│   ├── calculateScore.ts
│   ├── getFeedback.ts
│   └── __tests__/
│       ├── calculateScore.test.ts
│       └── getFeedback.test.ts
├── data/
│   └── data.json
├── styles/
│   ├── variables.scss
│   ├── mixins.scss
│   └── global.scss
└── App.tsx
```

---

## Stack Technique

### Core
- **Vite** - Build tool ultra-rapide
- **React 18** - UI library
- **TypeScript 5+** - Typage statique

### Styling
- **SASS (modules CSS)** - Preprocessing CSS
- **CSS Modules** - Scoped styles

### Quality & Testing
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **Storybook 8** - Component documentation

### DevOps
- **Git** - Version control
- **Conventional Commits** - Commit messages standardisés

---

## Fonctionnalités Requises

- ✅ Layout responsive (mobile 375px → desktop 1440px)
- ✅ Hover et focus states sur les éléments interactifs
- ✅ Chargement dynamique des données depuis `data.json`
- ✅ Calcul automatique du score global
- ✅ Affichage du feedback adapté au score
- ✅ Composants réutilisables et testables
- ✅ Documentation Storybook de chaque composant

---

## Bonnes Pratiques à Appliquer

### TypeScript
- ✅ Interfaces pour toutes les données
- ✅ Types stricts (pas de `any`)
- ✅ Props typées pour tous les composants
- ✅ Énumérations pour les valeurs fixes

### React
- ✅ Composants fonctionnels uniquement
- ✅ Hooks modernes (useState, useMemo, etc.)
- ✅ Props destructuring
- ✅ Composition over inheritance

### SASS
- ✅ Variables pour les couleurs/tailles
- ✅ Mixins pour les patterns répétitifs
- ✅ Modules CSS (scoped styles)
- ✅ Mobile-first approach

### Tests
- ✅ Tests unitaires pour la logique métier
- ✅ AAA pattern (Arrange, Act, Assert)
- ✅ Coverage > 80%

### Git
- ✅ Conventional Commits
- ✅ Branches feature
- ✅ Commits atomiques et descriptifs

---

## Data Structure (data.json)

```json
[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]
```

---

## TypeScript Interfaces (Prévu)

```typescript
// Types pour les données
interface ScoreItem {
  category: 'Reaction' | 'Memory' | 'Verbal' | 'Visual';
  score: number;
  icon: string;
}

type ResultLevel =
  | 'poor'
  | 'below-average'
  | 'fair'
  | 'average'
  | 'good'
  | 'very-good'
  | 'great'
  | 'excellent'
  | 'superb'
  | 'perfect';

interface Feedback {
  level: ResultLevel;
  title: string;
  message: string;
}

// Props des composants
interface ScoreCircleProps {
  score: number;
  maxScore: number;
}

interface ResultFeedbackProps {
  score: number;
}

interface SummaryItemProps {
  item: ScoreItem;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}
```

---

## Workflow de Développement

1. **Setup initial**
   - Init Vite + TS
   - Config ESLint + Prettier
   - Config Git + premier commit
   - Install SASS
   - Install Storybook
   - Install Vitest

2. **Développement TDD**
   - Créer les types TypeScript
   - Écrire les tests pour la logique métier
   - Implémenter la logique
   - Créer les composants
   - Documenter dans Storybook

3. **Styling**
   - Variables SASS
   - Mixins réutilisables
   - Mobile-first
   - États hover/focus

4. **Optimisation**
   - Vérifier les performances
   - Accessibilité (a11y)
   - SEO basique

---

## Déploiement (À venir)

- **Vercel** ou **Netlify**
- Build optimisé avec Vite
- Preview deployments sur PR

---

*Document créé le 2025-11-02*
