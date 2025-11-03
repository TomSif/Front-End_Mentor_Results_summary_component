# Progression du Projet

**Projet:** Results Summary Component - Frontend Mentor
**Date de début:** 2025-11-02
**Développeur:** Tom
**Mentor:** Claude Code

---

## Journal de Progression

### 2025-11-02 - Session 1: Planification et Setup Complet

#### Phase de Planification ✅

**Discussions et décisions:**

1. **Choix des technologies**
   - ✅ Vite (confirmé)
   - ✅ React + TypeScript (confirmé)
   - ✅ SASS au lieu de Tailwind (décision motivée)
   - ✅ Storybook pour la documentation
   - ✅ Vitest pour les tests

2. **Raisons du choix SASS vs Tailwind:**
   - Maîtrise préalable de SASS
   - Gradients HSL complexes plus naturels avec SASS
   - Focus sur l'apprentissage de Vite + TS
   - Projet mono-composant (Tailwind brille sur les design systems)

3. **Architecture validée:**
   ```
   App
   ├── ResultCard
   │   ├── ScoreCircle
   │   └── ResultFeedback (identifié par Tom - excellent!)
   └── SummaryPanel
       ├── SummaryList
       │   └── SummaryItem (×4)
       └── Button
   ```

4. **Logique métier clarifiée:**
   - Score global = moyenne arrondie des 4 scores
   - Feedback dynamique par tranches de 10%
   - 10 niveaux de feedback possibles

5. **Documentation créée:**
   - ✅ `instructions.md` - Spécifications complètes
   - ✅ `progression.md` - Ce fichier

#### Phase de Setup ✅

**Outils configurés:**

1. **ESLint + Prettier**
   - ESLint 9.36.0 (flat config moderne)
   - Prettier 3.6.2 avec intégration ESLint
   - Scripts: `npm run lint`, `npm run format`

2. **Git**
   - Repository initialisé
   - .gitignore configuré
   - 2 commits effectués avec conventional commits

3. **SASS**
   - sass ^1.93.3 installé
   - Design system complet créé:
     * `variables.scss` - Couleurs, typo, spacing
     * `mixins.scss` - Utilitaires réutilisables
     * `global.scss` - Reset CSS et styles de base
   - Font Hanken Grotesk configurée

4. **Storybook 10.0.2**
   - Framework: React-Vite
   - Addons installés:
     * addon-docs - Documentation
     * addon-a11y - Tests d'accessibilité
     * addon-vitest - Intégration tests
   - Preview configuré avec styles globaux
   - Scripts: `npm run storybook`, `npm run build-storybook`

5. **Vitest 4.0.6**
   - Configuration dual-project:
     * Tests unitaires (Node environment)
     * Tests Storybook (Browser avec Playwright)
   - Coverage V8 configuré
   - Scripts: `npm test`, `npm run test:watch`, `npm run test:coverage`

**Résultat:** Stack de développement professionnel complètement opérationnel!

---

## Prochaines Étapes

### ✅ Phase 1: Setup (Terminée)

- [x] Initialiser le projet Vite + React + TypeScript
- [x] Restructurer l'arborescence du projet (dossiers nettoyés)
- [x] Configurer ESLint + Prettier
- [x] Initialiser Git et premier commit
- [x] Installer et configurer SASS
- [x] Installer et configurer Storybook
- [x] Installer et configurer Vitest

### ✅ Phase 2: Types & Utils (Terminée)

- [x] Créer les interfaces TypeScript
- [x] Écrire les tests pour `calculateScore()`
- [x] Implémenter `calculateScore()`
- [x] Écrire les tests pour `getFeedback()`
- [x] Implémenter `getFeedback()`
- [x] Corriger l'alignement avec le design (feedback levels)

### 🔜 Phase 3: Composants (À venir)

- [ ] Créer les composants de base
- [ ] Ajouter les stories Storybook
- [ ] Styler avec SASS
- [ ] Tests d'intégration

### 🔜 Phase 4: Polish (À venir)

- [ ] Responsive design
- [ ] Accessibilité (a11y)
- [ ] États hover/focus
- [ ] Optimisations

### 🔜 Phase 5: Déploiement (À venir)

- [ ] Build production
- [ ] Déploiement Vercel/Netlify
- [ ] Documentation finale

---

## Défis Rencontrés

### Restructuration de l'arborescence
**Problème:** Dossiers imbriqués (results-summary-app/) pas pratiques
**Solution:** Remontée du projet Vite à la racine, organisation en dossiers cachés (.claude/, .frontend-mentor/)
**Apprentissage:** Organisation claire dès le début = meilleure maintenabilité

---

## Apprentissages Clés

### Workflow professionnel
- ✅ Importance de la documentation dès le début
- ✅ Planification de l'architecture avant le code
- ✅ Choix technologiques justifiés selon le contexte
- ✅ Organisation des fichiers dès l'init du projet

### Vite
- ✅ Template react-ts : Setup rapide et moderne
- ✅ Serveur dev < 1s de démarrage (vs 20-30s avec CRA)
- ✅ ESLint 9 préconfiguré (flat config)

### Architecture React
- ✅ Identification des composants logiques vs présentation
- ✅ Séparation logique métier (utils) vs UI (components)

### TypeScript
- 🔜 À venir lors de l'implémentation

---

## Métriques du Projet

**Temps estimé:** ~8-12 heures
**Temps passé:** ~4 heures (planification + setup + types & utils)

**Composants:**
- Total: 7
- Complétés: 0
- En cours: Phase 2 terminée (fondations prêtes)

**Tests:**
- Total prévu: ~40 (utils + composants)
- Écrits: 21
- Passing: 21 ✅
- Coverage: 100% sur utils

**Commits:**
- Total: 11
- Dernier: feat: add default scores data with design values

---

## Notes Techniques

### Décisions d'Architecture

**1. Structure de dossiers par composant**
Chaque composant aura son propre dossier avec:
- `*.tsx` (composant)
- `*.module.scss` (styles)
- `*.stories.tsx` (Storybook)
- `*.test.tsx` (tests - si nécessaire)

**2. Logique métier dans `/utils`**
Séparation claire entre:
- Calculs (pure functions testables)
- Présentation (React components)

**3. Types centralisés**
Un seul fichier `types/index.ts` pour éviter la duplication

---

## Questions / Réflexions

**Q:** Faut-il tester les composants React ou seulement la logique métier ?
**R:** Priorité sur les utils (calculateScore, getFeedback). Tests de composants si temps.

**Q:** Storybook avant ou après le développement ?
**R:** En parallèle - c'est un excellent driver pour penser "composant réutilisable"

---

## Ressources Consultées

- [Frontend Mentor - Challenge](https://www.frontendmentor.io/)
- Design files fournis (JPG)
- `style-guide.md` - Spécifications couleurs/typo
- `data.json` - Structure des données

---

---

### 2025-11-02 - Session 2: Phase 2 - Types & Utils avec TDD ✅

#### Approche pédagogique prioritaire

**Nouveau principe ajouté aux instructions :**
- L'apprentissage prime sur la vitesse
- Explications avant implémentation
- Participation active et vérification de compréhension
- Outils à maîtriser : TypeScript, Storybook, Vitest, SASS

#### Types TypeScript créés ✅

**Fichier:** `src/types/index.ts`

**Types de données:**
- `Category` : Type littéral pour les 4 catégories ('Reaction' | 'Memory' | 'Verbal' | 'Visual')
- `ScoreItem` : Interface pour la structure de data.json
- `ScoreData` : Type pour le tableau de ScoreItem
- `ResultLevel` : Type littéral pour les 10 niveaux de feedback
- `Feedback` : Interface pour la structure du feedback

**Props de composants:**
- `ScoreCircleProps`, `ResultFeedbackProps`, `SummaryItemProps`
- `SummaryListProps`, `ButtonProps`

**Apprentissages:**
- Différence entre `type` et `interface`
- Types littéraux pour limiter les valeurs possibles (protection contre typos)
- Propriétés optionnelles avec `?`
- Commentaires JSDoc pour documentation automatique

#### Fonction calculateScore() ✅

**Fichier:** `src/utils/calculateScore.ts`

**Implémentation:**
- Utilise `.map()` pour extraire les scores : `[{score:80}]` → `[80]`
- Utilise `.reduce()` pour sommer : `[80,92,61,72]` → `305`
- Divise par la longueur : `305 / 4 = 76.25`
- Arrondit avec `Math.round()` : `76.25` → `76`

**Tests:** 5 tests dans `calculateScore.test.ts`
- Cas nominal (données Frontend Mentor)
- Arrondis vers le bas et vers le haut
- Scores parfaits (100) et nuls (0)

**Apprentissages:**
- TDD : Tests d'abord, code ensuite
- Pattern AAA (Arrange-Act-Assert)
- `.map()`, `.reduce()` pour manipulation de tableaux
- `Math.round()` vs `Math.floor()` vs `Math.ceil()`

#### Fonction getFeedback() ✅

**Fichier:** `src/utils/getFeedback.ts`

**Approches discutées:**
1. Tableau + `.find()` (choisi) ✅
2. Conditions if/else comparatives
3. Calcul mathématique avec index (bug identifié : score 100 → index 10)

**Implémentation:**
- Tableau `FEEDBACK_DATA` avec 10 tranches
- Utilise `.find()` pour chercher la bonne tranche
- Programmation défensive (fallback si aucune tranche trouvée)

**Tests:** 16 tests dans `getFeedback.test.ts`
- Structure de retour (level, title, message)
- Toutes les tranches (début, milieu, fin)
- Edge cases (0, 100)
- Frontières entre tranches (9/10, 69/70, 89/90)

**Apprentissages:**
- `.find()` vs `.filter()` (arrêt vs continuation)
- Gestion de `undefined` avec TypeScript
- Edge cases et tests de frontières
- Discussion sur 3 approches différentes

#### Correction alignement design ✅

**Problème identifié par Tom:** Score 76 affichait "Excellent" au lieu de "Great"

**Solution:**
- Mise à jour des niveaux : terrible → amazing (au lieu de poor → perfect)
- Réalignement de toutes les tranches avec le design
- Score 76 → "Great" + "You scored higher than 65%..." ✅

**Fichiers modifiés:**
- `types/index.ts` : Type ResultLevel mis à jour
- `getFeedback.ts` : FEEDBACK_DATA réécrit
- `getFeedback.test.ts` : 21 tests mis à jour

**Apprentissages:**
- Importance de vérifier le design comme source de vérité
- Attention aux détails (qualité professionnelle)
- Communication claire des problèmes identifiés

#### Résultats Session 2

**Commits:**
- `feat: implement TypeScript types and utility functions with TDD`
- `fix: align feedback levels with design requirements`

**Statistiques:**
- ✅ 21 tests qui passent (5 calculateScore + 16 getFeedback)
- ✅ 5 fichiers créés (types + utils + tests)
- ✅ 539 lignes de code ajoutées
- ✅ 100% de coverage sur les fonctions utils

**Concepts maîtrisés:**
- TypeScript : types, interfaces, littéraux, optionnels, JSDoc
- JavaScript : .map(), .reduce(), .find(), arrow functions
- Vitest/TDD : describe, test, expect, AAA pattern, edge cases
- Git : conventional commits, messages descriptifs

---

### 2025-11-02 - Session 3: Phase 3 - Composants React + Interactivité 🚧

#### Innovation : Application interactive au lieu de statique

**Décision prise par Tom :**
Transformer le projet en application interactive où l'utilisateur peut modifier les scores.

**Pourquoi cette décision est excellente :**
- ✅ Exploite vraiment les fonctions utils créées (calculateScore, getFeedback)
- ✅ Ajoute de l'apprentissage React state management
- ✅ Rend le projet unique et plus engageant
- ✅ Crée un composant réutilisable (InputScore)

**Architecture ajustée :**
```
App (State global: scores avec useState)
├── ResultCard
│   ├── ScoreCircle (score dynamique recalculé)
│   └── ResultFeedback (feedback dynamique)
└── SummaryPanel
    ├── SummaryList
    │   └── InputScore × 4 (inputs éditables)
    └── Button
```

**Nouveaux apprentissages ajoutés :**
- useState pour gérer l'état des scores
- Controlled components (inputs contrôlés par React)
- Props drilling (passer onScoreChange)
- Event handling (onChange sur inputs)
- Immutabilité avec .map()

#### Fichier defaultScores.ts créé ✅

**Fichier:** `src/data/defaultScores.ts`

**Contenu:**
- `DEFAULT_SCORES`: Valeurs initiales du design (80, 92, 61, 72)
  * Score calculé initial: 76
  * Feedback initial: "Great"
- `CATEGORY_COLORS`: Mapping des couleurs HSL par catégorie
  * Reaction: Light red, Memory: Orangey yellow
  * Verbal: Green teal, Visual: Cobalt blue

**Concepts appris:**
- Export de constantes (`export const`)
- Typage strict (`: ScoreData`)
- `as const` pour readonly et inférence exacte
- Convention MAJUSCULES pour constantes globales
- Chemins absolus (`/assets/` → `public/assets/`)
- Séparation données/logique

**Commit:** `feat: add default scores data with design values`

#### Composant Button créé ✅

**Fichier:** `src/components/Button/`

**Structure du composant:**
- `Button.tsx` - Composant React fonctionnel
- `Button.module.scss` - Styles avec SASS modules
- `Button.stories.tsx` - Documentation Storybook

**Implémentation:**

1. **Button.tsx:**
   - Props: `children`, `onClick`, `variant`, `disabled`
   - Valeurs par défaut: `variant='primary'`, `disabled=false`
   - Utilise destructuring et typage strict avec ButtonProps
   - Combine dynamiquement les classes CSS: `${styles.button} ${styles[variant]}`

2. **Button.module.scss:**
   - Import des variables SASS: `@use '../../styles/variables' as *`
   - Variante **primary**: Fond gris foncé, hover avec gradient violet
   - Variante **secondary**: Fond transparent avec bordure
   - États: `:hover`, `:focus-visible`, `:disabled`
   - Transitions smooth (0.2s ease-in-out)
   - État disabled: `opacity: 0.5`, `cursor: not-allowed`

3. **Button.stories.tsx:**
   - 4 stories créées: Primary, Secondary, Disabled, LongText
   - Configuration Meta avec `argTypes` pour les controls
   - `action: 'clicked'` pour logger les clics dans Storybook
   - Tag `autodocs` pour génération automatique de la documentation

**Apprentissages:**

**1. CSS Modules avec SASS:**
- Import avec `@use` au lieu de `@import` (syntaxe moderne)
- Namespace avec `as *` pour accéder directement aux variables
- Classes scopées automatiquement par Vite (ex: `Button_button__a1b2c`)
- Permet d'éviter les conflits de noms CSS

**2. Composition de classes CSS:**
```typescript
className={`${styles.button} ${styles[variant]}`}
// Résultat: "Button_button__a1b2c Button_primary__d3e4f"
```
- Template literals pour combiner plusieurs classes
- `styles[variant]` permet d'accéder dynamiquement à `.primary` ou `.secondary`

**3. Storybook Meta configuration:**
- `argTypes` définit les contrôles interactifs:
  * `control: 'select'` → dropdown
  * `control: 'boolean'` → toggle
  * `control: 'text'` → input texte
- `action: 'clicked'` log automatiquement les événements
- `tags: ['autodocs']` génère la doc depuis JSDoc

**4. Pattern de composant réutilisable:**
- Props avec valeurs par défaut (variant, disabled)
- Props optionnelles avec `?` (onClick)
- Gère tous les cas d'usage (primary, secondary, disabled)
- Accessible (focus-visible, type="button")

**Tests visuels:**
- Build TypeScript: ✅ Compilation sans erreur
- Storybook: En cours de démarrage pour tests visuels

**Commit:** `feat: create Button component with variants and Storybook docs`

#### Architecture Sass 7-1 avec Design System Figma ✅

**Contexte:**
Ajout des fichiers de référence Figma (Colors.png, Typography.png, Spacing.png) dans `.claude/` pour avoir les spécifications exactes du design system.

**Restructuration complète:**

1. **Nouvelle architecture 7-1 (pattern hybride):**
```
src/styles/
├── abstracts/              # Variables et mixins
│   ├── _colors.scss        # Palette complète Figma
│   ├── _typography.scss    # 6 text presets + mixins
│   ├── _spacing.scss       # Échelle de spacing (0-1000)
│   ├── _config.scss        # Breakpoints, radius, z-index, transitions
│   ├── _variables.scss     # @forward de tous les partiels
│   └── _mixins.scss        # Mixins utilitaires
├── base/                   # Styles de base
│   ├── _reset.scss         # Reset CSS moderne
│   ├── _typography.scss    # Config globale typo (@font-face)
│   └── _global.scss        # Styles globaux (body, #root)
└── main.scss               # Point d'entrée unique
```

2. **Design System Figma intégré:**

**Colors (_colors.scss):**
- White (#FFFFFF), Black (#000000)
- Navy: 950 (#303B59), 200 (#CAC9FF), 50 (#ECF2FF)
- Blue: 800 (#1125D4), 50 (#F3F4FD)
- Yellow: 400 (#FFB21E), 50 (#FFF9F4)
- Red: 400 (#FF5555), 50 (#FFF6F6)
- Green: 500 (#00BB8F), 50 (#F2FCF9)
- Gradients: gradient-1 (#7755FF → #2527C9), gradient-2 (#7755FF → #2F2CE9)

**Typography (_typography.scss):**
- Font: Hanken Grotesk (Medium 500, Bold 700, ExtraBold 800)
- 6 Text Presets avec mixins:
  * Preset 1: 72px ExtraBold
  * Preset 2: 56px ExtraBold
  * Preset 3: 32px Bold
  * Preset 4: 24px Bold
  * Preset 5: 18px Bold/Medium
  * Preset 6: 16px Bold/Medium
- Line-height: 130%
- Letter-spacing: 0

**Spacing (_spacing.scss):**
- spacing-0: 0px
- spacing-100: 8px
- spacing-200: 16px
- spacing-300: 24px
- spacing-400: 32px
- spacing-1000: 80px
- Aliases sémantiques: xs, sm, md, lg, xl

3. **Mise à jour du composant Button:**
- Utilise `@use '../../styles/main' as *;` (un seul import)
- Typography: `@include text-preset-5-bold;` (18px Bold)
- Couleur par défaut: `$color-navy-950`
- Hover: `$gradient-1`
- Padding: `$spacing-200 $spacing-400` (16px 32px)

4. **Fichiers mis à jour:**
- `src/main.tsx` → importe `main.scss` au lieu de `global.scss`
- `.storybook/preview.ts` → importe `main.scss`
- `Button.module.scss` → utilise le nouveau système

**Apprentissages:**

**1. Architecture 7-1 Pattern:**
- **Abstracts:** Variables, mixins, functions (réutilisables, pas de CSS généré)
- **Base:** Reset, typo globale, styles de base
- **Components:** (optionnel avec CSS Modules - styles dans chaque composant/)
- **Layout, Pages, Themes, Vendors:** (pour projets plus grands)
- Un fichier `main.scss` qui centralise tout

**2. @forward vs @use:**
- `@forward` réexporte pour créer des points d'entrée
- `@use` importe pour utiliser (avec namespace)
- Ne peut pas mélanger `@forward` avec des variables dans le même fichier

**3. Approche hybride moderne:**
- Variables centralisées dans `abstracts/`
- Styles globaux dans `base/` (appliqués via main.scss)
- Styles de composants locaux (CSS Modules)
- Un seul import dans les composants: `@use 'main' as *;`

**4. Mixins de typographie:**
Au lieu de répéter:
```scss
font-size: 18px;
font-weight: 700;
line-height: 130%;
```
On utilise:
```scss
@include text-preset-5-bold;
```

**Résultat:**
- ✅ Build production: Fonctionne
- ✅ Storybook build: Fonctionne
- ✅ Architecture scalable et maintenable
- ✅ Design system Figma parfaitement intégré
- ✅ Un seul import dans les composants

**Commit:** `refactor: migrate to 7-1 Sass architecture with Figma design system`

**Fichiers ajoutés:**
- 3 PNG de référence Figma
- 6 fichiers dans `abstracts/`
- 3 fichiers dans `base/`
- 1 fichier `main.scss`

**Fichiers supprimés:**
- Anciens `variables.scss`, `mixins.scss`, `global.scss` (remplacés par la structure 7-1)

#### Composant InputScore créé ✅

**Fichiers créés:**
- `src/components/InputScore/InputScore.tsx` - Composant React
- `src/components/InputScore/InputScore.module.scss` - Styles
- `src/components/InputScore/InputScore.stories.tsx` - Documentation Storybook
- Interface `InputScoreProps` ajoutée dans `types/index.ts`

**Implémentation:**

1. **Pattern Controlled Input:**
```tsx
<input
  value={item.score}           // ← Valeur contrôlée par React
  onChange={handleChange}       // ← Handler pour le changement
/>
```
- React devient la source de vérité unique
- Validation en temps réel (0-100)
- Synchronisation automatique UI ↔ State

2. **Lookup Table Pattern (découverte clé):**
```tsx
// Deux structures séparées
DEFAULT_SCORES = [{ category: 'Reaction', score: 80 }]
CATEGORY_COLORS = { Reaction: 'hsl(0, 100%, 67%)' }

// Fusion au moment du render
const color = CATEGORY_COLORS[item.category]
//                              ↑
//                 Utilise category comme clé
```
**Pourquoi c'est puissant :**
- Évite la duplication de données
- Séparation données métier vs configuration UI
- Facile à maintenir (un seul endroit pour les couleurs)

3. **CSS Custom Properties (variables CSS dynamiques):**
```tsx
<div style={{ '--category-color': color }}>
```
```scss
.inputScore {
  background-color: color-mix(in srgb, var(--category-color) 5%, transparent);
}
```
- Injection de valeurs JavaScript dans CSS
- Permet des styles dynamiques sans inline styles partout

4. **Callback Props (State Lifting):**
```tsx
// Parent (App) détient le state
onScoreChange={(newScore) => {
  // Met à jour le state global
}}

// Enfant (InputScore) remonte les changements
<InputScore item={...} onScoreChange={callback} />
```

**Storybook - 7 stories créées:**
- Reaction, Memory, Verbal, Visual (4 catégories)
- Interactive (démo avec useState local)
- AllCategories (comparaison visuelle)
- EdgeCases (scores 0, 50, 100)

**Apprentissages Session 3 - Partie InputScore:**

1. **Controlled vs Uncontrolled inputs:**
   - Uncontrolled: DOM détient la valeur
   - Controlled: React détient la valeur (meilleur pour validation et sync)

2. **Lookup Table Pattern:**
   - Utiliser une valeur comme clé pour récupérer une autre valeur
   - `CATEGORY_COLORS[item.category]` → couleur
   - Comme une jointure de tables en base de données !

3. **Séparation des préoccupations:**
   - Données métier: `DEFAULT_SCORES` (category, score, icon)
   - Configuration UI: `CATEGORY_COLORS` (couleurs)
   - Fusion dans le composant, pas dans les données

4. **Event Handling:**
   - `event.target.value` pour récupérer la nouvelle valeur
   - `Number()` pour convertir string → number
   - Validation avant de remonter au parent

5. **TypeScript avec React:**
   - `React.ChangeEvent<HTMLInputElement>` pour typer l'événement
   - Props avec callbacks: `(newScore: number) => void`

**Concepts professionnels discutés:**

**Q: Bottom-Up vs Top-Down development?**
- Bottom-Up (ce qu'on fait): Composants isolés → assemblage
  * ✅ Réutilisabilité, testabilité, Storybook
  * ❌ Risque d'ajustements à l'intégration
- Top-Down: Architecture globale → détails
  * ✅ Pas de surprise, props exactes
  * ❌ Moins réutilisable, pas testable isolément
- **Réponse:** Les deux sont valides selon le contexte
  * Design systems → Bottom-Up
  * Features urgentes → Top-Down
  * Apps complètes → Hybride

**Q: Devrait-on fusionner CATEGORY_COLORS dans DEFAULT_SCORES?**
- ❌ Non, car mélange données métier et présentation
- ✅ Lookup table: séparation + flexibilité
- Permet de changer le système de couleurs sans toucher aux types

**Tests:**
- ✅ Build TypeScript: Compilation sans erreur
- ✅ Build Storybook: 7 stories générées

**Commit:** `feat: create InputScore component with controlled input`

#### Composant SummaryList créé ✅

**Fichiers créés:**
- `src/components/SummaryList/SummaryList.tsx` - Composant container
- `src/components/SummaryList/SummaryList.module.scss` - Styles flexbox
- `src/components/SummaryList/SummaryList.stories.tsx` - Documentation Storybook
- Interface `SummaryListProps` mise à jour dans `types/index.ts`

**Implémentation:**

1. **Array.map() pour le rendu de listes:**
```tsx
{items.map((item) => (
  <InputScore key={item.category} item={item} />
))}
```
- Transforme un tableau de données en tableau de composants React
- Évite la duplication de code (DRY)
- Dynamique : s'adapte automatiquement au nombre d'éléments

2. **La prop `key` (CRUCIALE) 🔑:**
```tsx
<InputScore
  key={item.category}  // ← Identifiant unique et stable
  item={item}
/>
```
**Pourquoi key est obligatoire :**
- React utilise `key` pour identifier chaque élément de la liste
- Améliore les performances (algorithme de réconciliation)
- Permet à React de savoir quel élément a changé/été ajouté/supprimé

**Bonnes pratiques :**
- ✅ Utiliser un identifiant unique et stable (`category`, `id`)
- ❌ Ne JAMAIS utiliser l'index comme key (sauf liste vraiment statique)

**Pourquoi pas l'index ?**
```tsx
// Si on supprime le premier élément, tous les index changent
// React réutilise les composants au mauvais endroit → BUG
```

3. **Delegation Pattern (délégation de callback) 🎯:**
```tsx
// SummaryList reçoit : (category, newScore) => void
// InputScore attend : (newScore) => void

// Solution : enrober le callback
<InputScore
  onScoreChange={(newScore) => onScoreChange(item.category, newScore)}
/>
```

**Flux de données :**
1. InputScore appelle `onScoreChange(85)`
2. La fonction fléchée reçoit 85
3. Elle appelle le callback parent avec `(item.category, 85)`
4. App reçoit `('Reaction', 85)` → sait quelle catégorie mettre à jour !

4. **Closure (fermeture lexicale) 🔒:**
```tsx
items.map((item) => (
  <InputScore
    // Cette fonction fléchée "capture" item.category
    // Chaque InputScore a sa propre fonction qui se "souvient"
    // de son item.category même quand elle est appelée plus tard
    onScoreChange={(newScore) => onScoreChange(item.category, newScore)}
  />
))
```
**Concept :** La fonction fléchée "se souvient" des variables de son contexte de création.

**Storybook - 5 stories créées:**
- **Default** : 4 catégories avec scores par défaut
- **Interactive** : Démo complète avec useState + calcul de moyenne en temps réel
- **LowScores** : Scores bas (10-25)
- **HighScores** : Scores élevés (92-98)
- **PerfectScores** : Tous les scores à 100

**Story Interactive (highlight) :**
```tsx
const handleScoreChange = (category, newScore) => {
  // Mise à jour immutable avec .map()
  setScores(prevScores =>
    prevScores.map(item =>
      item.category === category
        ? { ...item, score: newScore }  // Nouveau objet
        : item                           // Objet inchangé
    )
  )
}
```
Démontre le state management complet avec recalcul en temps réel.

**Apprentissages Session 3 - Partie SummaryList:**

1. **Array.map() pour React :**
   - Transforme `[data]` en `[<Component />]`
   - Pattern fondamental pour rendre des listes

2. **key prop :**
   - Obligatoire pour les listes
   - Doit être unique et stable
   - Jamais l'index (sauf exception)

3. **Delegation Pattern :**
   - Enrober un callback pour ajouter du contexte
   - Permet aux enfants d'appeler le parent avec plus d'infos

4. **Closure :**
   - Fonction qui "capture" les variables de son environnement
   - `item.category` est capturé par la fonction fléchée
   - Chaque InputScore a sa propre closure

5. **Immutable updates :**
   - `.map()` crée un nouveau tableau
   - Spread operator `{ ...item, score: newScore }` crée un nouvel objet
   - React détecte les changements et re-render

**Tests :**
- ✅ Build TypeScript : Compilation sans erreur
- ✅ Build Storybook : 5 stories générées

**Commit :** `feat: create SummaryList component with .map() and delegation`

#### Composant ScoreCircle créé ✅

**Fichiers créés:**
- `src/components/ScoreCircle/ScoreCircle.tsx`
- `src/components/ScoreCircle/ScoreCircle.module.scss`
- `src/components/ScoreCircle/ScoreCircle.stories.tsx` (8 stories)

**Implémentation:**

1. **Composant présentationnel pur :**
```tsx
function ScoreCircle({ score, maxScore = 100 }: ScoreCircleProps) {
  return (
    <div className={styles.circle}>
      <span>{score}</span>
      <span>of {maxScore}</span>
    </div>
  )
}
```
- Pas de state, juste affichage
- Reçoit le score calculé via props
- Props avec valeur par défaut (`maxScore = 100`)

2. **Cercle parfait en CSS :**
```scss
.circle {
  width: 200px;
  aspect-ratio: 1;      // Hauteur = Largeur
  border-radius: 50%;   // Cercle parfait !
}
```
**Pourquoi 50% ?** Sur un carré, 50% de border-radius transforme en cercle.

3. **Gradient et Typography Figma :**
- Background: `$gradient-2` (violet dégradé)
- Score: Text Preset 1 (72px ExtraBold)
- "of 100": Text Preset 6 Medium (16px) avec opacity 0.5

4. **Réutilisabilité démontrée :**
- 8 stories Storybook dont CustomMaxScore (8/10), FiveStars (4/5)
- Montre qu'on peut utiliser le composant pour n'importe quelle échelle

**Apprentissages:**
- Pattern présentationnel vs container
- `border-radius: 50%` vs valeur fixe en px
- `aspect-ratio: 1` pour garder un carré parfait

**Commit:** `feat: create ScoreCircle component with gradient background`

---

#### Application interactive complète ✅

**Décisions UX (discussion architecture) :**

**Q: Le bouton "Continue" devrait faire quoi ?**
- Option A: Calcul en temps réel (bouton inutile)
- Option B: Calcul au clic (pas de feedback immédiat)
- **Option choisie:** Calcul temps réel + Reset to zero

**Pourquoi reset to ZERO (pas default) ?**
```
Reset to default [80,92,61,72]:
User clique → Aucun changement visible → Confusion ❌

Reset to zero [0,0,0,0]:
User clique → Changement immédiat → Comprend l'interactivité ✅
```

**Flow UX final :**
1. Chargement: [80,92,61,72] → 76 → "Great"
2. Modification input: Recalcul temps réel ⚡
3. Clic "Continue": [0,0,0,0] → 0 → "Ready to start?"
4. Remplissage: Recalcul temps réel
5. Cycle...

**Implémentation App.tsx :**
```tsx
// Calcul temps réel avec fonction utilitaire
const globalScore = calculateScore(scores)

// Reset à 0
const handleContinue = () => {
  setScores(prevScores =>
    prevScores.map(item => ({ ...item, score: 0 }))
  )
}

<ScoreCircle score={globalScore} />
<SummaryList items={scores} onScoreChange={handleScoreChange} />
<Button onClick={handleContinue}>Continue</Button>
```

**Layout 2 colonnes :**
- Gauche: ScoreCircle (affichage résultat)
- Droite: SummaryList + Button

**Commit:** `feat: implement interactive UX flow with reset functionality`

---

#### Améliorations design et UX ✅

**1. Titre "Summary" ajouté**
- Observation de Tom: Le design montre un titre "Summary"
- Ajout d'un `<h2>` dans SummaryList
- Text Preset 5 Bold (18px)

**2. Couleurs de fond Figma exactes**
- Problème: `color-mix()` n'était pas exactement le design
- Solution: Nouveau tableau `CATEGORY_BACKGROUND_COLORS`
```typescript
export const CATEGORY_BACKGROUND_COLORS = {
  Reaction: '#FFF6F6',  // Red-50
  Memory: '#FFF9F4',    // Yellow-50
  Verbal: '#F2FCF9',    // Green-50
  Visual: '#F3F4FD',    // Blue-50
}
```
- Pattern lookup table appliqué (cohérent avec CATEGORY_COLORS)

**3. Message spécial pour score 0**
- Idée de Tom: Guider l'utilisateur après le reset
- Ajout dans `FEEDBACK_DATA` pour score === 0
```typescript
{
  min: 0,
  max: 0,
  title: 'Ready to start?',
  message: 'Fill in your scores in each category to see your result.',
}
```
- Approche data-driven (pas de condition spéciale dans le code)

**Commit:** `fix: add Summary title and use Figma background colors`
**Commit:** `feat: add special feedback message for score zero (reset state)`

---

#### Fixes CSS professionnels ✅

**1. Layout shift sur input focus**
- Problème identifié par Tom: Micro-décalage au focus (2px)
- Impact: CLS (Cumulative Layout Shift) - mauvais pour UX et SEO
```scss
.input {
  border-bottom: 2px solid transparent;  // Réserve l'espace
  transform: translateY(+1px);           // Alignement parfait

  &:focus {
    border-bottom: 2px solid var(--category-color);
  }
}

.maxScore {
  border-bottom: 2px solid transparent;  // Même espace
  transform: translateY(+1px);           // Cohérence
}
```
- Principe: 1 bouton = 1 action = simplicité UX
- **Apprentissage:** Attention aux détails qui font la qualité professionnelle

**Commit:** `fix: prevent layout shift on input focus and add dev preview`

**2. Text wrapping dans InputScore**
- Problème: "/ 100" passait à la ligne (seulement dans 2 premières catégories)
- Cause: `.scoreContainer` pouvait shrink en flexbox
```scss
.inputScore {
  flex-wrap: nowrap;  // Empêche le wrap au niveau parent
}

.scoreContainer {
  flex-shrink: 0;     // Ne peut pas rétrécir
  white-space: nowrap; // Texte sur une ligne
}
```
- **Apprentissage:** Debug CSS flexbox multi-niveaux

**Commit:** `fix: prevent text wrapping in InputScore component`

---

#### Concepts professionnels discutés

**1. Bottom-Up vs Top-Down development :**
- Bottom-Up (notre approche): Composants isolés → assemblage
- Top-Down: Architecture globale → détails
- Les deux sont valides selon le contexte
- Design systems → Bottom-Up

**2. Séparation données vs présentation :**
- ❌ Ajouter `color` et `className` dans `DEFAULT_SCORES`
- ✅ Lookup table séparée `CATEGORY_BACKGROUND_COLORS`
- Permet de changer le système de couleurs sans toucher aux types

**3. UX decision-making :**
- Toujours penser à l'effet visible (reset to zero vs default)
- 1 bouton = 1 action (simplicité)
- Guider l'utilisateur avec des messages appropriés

**4. Data-driven architecture :**
- Préférer les tableaux de configuration aux conditions dans le code
- Plus facile à maintenir et modifier
- Pattern appliqué partout: CATEGORY_COLORS, FEEDBACK_DATA, etc.

---

### Métriques Session 3 (suite)

**Temps passé:** ~6-7 heures (développement + discussions architecturales)

**Composants créés:** 3 nouveaux composants
- InputScore (avec controlled input pattern)
- SummaryList (avec .map() et delegation)
- ScoreCircle (composant présentationnel)

**Commits:** 9 commits
```
7bdadaa - feat: create InputScore component with controlled input
bc1c274 - docs: update progression after InputScore component creation
f415a0b - feat: create SummaryList component with .map() and delegation
f7bc9f2 - docs: update progression after SummaryList component creation
3206fea - fix: add Summary title and use Figma background colors
a94f385 - fix: prevent layout shift on input focus and add dev preview
0c91360 - feat: create ScoreCircle component with gradient background
159f33a - feat: implement interactive UX flow with reset functionality
0edcedf - fix: prevent text wrapping in InputScore component
2c3beab - feat: add special feedback message for score zero (reset state)
```

**Tests:** 22 tests qui passent (17 getFeedback + 5 calculateScore)

**Prototype fonctionnel:** ✅ Application interactive complète
- Calcul temps réel
- Reset to zero
- Layout 2 colonnes
- 4 composants assemblés

---

### 🔜 Prochaines étapes Session 3 (reprise)

**Composants à créer (ordre ajusté) :**
1. ✅ defaultScores.ts - Données initiales
2. ✅ Button - Composant simple pour apprendre le workflow
3. ✅ InputScore - Composant clé avec input contrôlé + fixes CSS
4. ✅ SummaryList - Map sur InputScore + titre "Summary"
5. ✅ ScoreCircle - Cercle parfait avec gradient
6. ✅ App.tsx - Prototype interactif fonctionnel
7. ⏳ ResultFeedback - Affichage dynamique du feedback
8. ⏳ ResultCard - Container gauche (ScoreCircle + ResultFeedback)
9. ⏳ SummaryPanel - Container droit (SummaryList + Button)
10. ⏳ App.tsx final - Polish du layout

---

### 2025-11-03 - Session 3 (Suite): Composants Containers et Finalisation

#### Composants créés ✅

**1. ResultFeedback - Affichage dynamique du feedback**
- Composant présentationnel qui utilise `getFeedback()`
- Affiche titre et message selon le score
- Text Preset 4 Bold pour le titre (24px)
- Text Preset 6 Medium pour le message (16px)
- Texte blanc avec opacity 0.5 pour le message
- 13 stories Storybook avec tous les niveaux de feedback
- Background gradient dans les stories pour prévisualisation

**2. ResultCard - Container gauche**
- Combine ScoreCircle + ResultFeedback
- Gradient background (gradient-1 du design Figma)
- Titre "Your Result" en haut (Text Preset 5 Bold, opacity 0.7)
- Layout flexbox vertical avec centrage
- Border radius 24px
- Gap 24px entre les éléments
- Min-width: 368px
- 7 stories Storybook (Default, Zero, LowScore, Average, Good, Excellent, Perfect)

**3. SummaryPanel - Container droit**
- Combine SummaryList + Button
- Background blanc
- Layout flexbox vertical
- Gap 32px entre SummaryList et Button
- Border radius 24px
- Min-width: 368px
- 5 stories Storybook avec Interactive demo complète

#### Refactoring App.tsx ✅

**Avant (version prototype):**
```tsx
// Imports directs des composants individuels
import { ScoreCircle } from './components/ScoreCircle/ScoreCircle'
import { SummaryList } from './components/SummaryList/SummaryList'
import { Button } from './components/Button/Button'

// Layout avec styles inline
<div style={{ padding: '40px', ... }}>
  <div style={{ flex: 1, ... }}>
    <ScoreCircle score={globalScore} />
  </div>
  <div style={{ flex: 1, ... }}>
    <SummaryList items={scores} onScoreChange={handleScoreChange} />
    <Button onClick={handleContinue}>Continue</Button>
  </div>
</div>
```

**Après (version finale):**
```tsx
// Imports des containers uniquement
import { ResultCard } from './components/ResultCard/ResultCard'
import { SummaryPanel } from './components/SummaryPanel/SummaryPanel'

// Layout avec CSS Module
<div className={styles.app}>
  <ResultCard score={globalScore} />
  <SummaryPanel
    items={scores}
    onScoreChange={handleScoreChange}
    onContinue={handleContinue}
  />
</div>
```

**App.module.scss créé:**
```scss
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: $spacing-500; // 40px
  display: flex;
  gap: $spacing-500; // 40px
  align-items: center;
  min-height: 100vh;
}
```

**Bénéfices du refactoring:**
- Code plus propre et maintenable
- Meilleure séparation des responsabilités
- Composition claire de containers
- Styles centralisés dans CSS Module
- Architecture finale alignée avec le plan initial

#### Architecture complète finalisée ✅

```
App (state management + layout)
├── ResultCard (panneau gauche - gradient)
│   ├── ScoreCircle (cercle avec score)
│   └── ResultFeedback (titre + message dynamique)
└── SummaryPanel (panneau droit - blanc)
    ├── SummaryList (liste des catégories)
    │   └── InputScore (×4 - inputs contrôlés)
    └── Button (action Continue)
```

#### Tous les composants Storybook ✅

**9 composants documentés:**
1. ✅ Button - 4 stories
2. ✅ InputScore - 7 stories
3. ✅ SummaryList - 5 stories
4. ✅ ScoreCircle - 8 stories
5. ✅ ResultFeedback - 13 stories (tous les niveaux)
6. ✅ ResultCard - 7 stories
7. ✅ SummaryPanel - 5 stories

**Total: 49 stories créées**

#### Commits Session 3 (suite) ✅

```
6b094eb - feat: create ResultFeedback component with dynamic feedback display
b7ccfff - feat: create ResultCard container component
2a1a2fd - feat: create SummaryPanel container component
[à venir] - refactor: finalize App.tsx with container composition and CSS Module
```

#### Métriques Session 3 complète

**Temps total:** ~8-9 heures (sur 2 jours)

**Composants créés:** 7 composants
- Button (session 3 jour 1)
- InputScore (session 3 jour 1)
- SummaryList (session 3 jour 1)
- ScoreCircle (session 3 jour 1)
- ResultFeedback (session 3 jour 2)
- ResultCard (session 3 jour 2)
- SummaryPanel (session 3 jour 2)

**Tests:** 22 tests qui passent (100% coverage des utils)

**Storybook:** 49 stories documentées

**Application complète:** ✅ Fonctionnelle et interactive
- Calcul temps réel
- Reset to zero
- Layout 2 colonnes professionnel
- Architecture container/presentational
- Design system complet appliqué

---

### 🎯 État du Projet

**Phase actuelle:** Application fonctionnelle complète ✅

**Fonctionnalités implémentées:**
- ✅ Chargement données DEFAULT_SCORES
- ✅ Calcul automatique score global (moyenne arrondie)
- ✅ Feedback dynamique par tranches (11 niveaux incluant score 0)
- ✅ Modification interactive des scores
- ✅ Reset complet avec bouton Continue
- ✅ Layout deux colonnes desktop
- ✅ Tous les composants documentés Storybook
- ✅ Tests unitaires complets (22 tests)

**Reste à faire (optionnel):**
- ⏳ Responsive design mobile (375px)
- ⏳ Animations/transitions
- ⏳ Tests de composants React (Vitest + Testing Library)
- ⏳ Accessibility audit complet
- ⏳ Performance optimizations

---

*Dernière mise à jour: 2025-11-03 (Session 3 complète - Application finalisée)*
