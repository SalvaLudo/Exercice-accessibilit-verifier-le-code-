# Exercice : corriger l'accessibilité de la page d'accueil « Terre & Bois »

> Formation **Développer accessible** · Exercice pratique · Référentiel **RGAA 4.1.2** (WCAG 2.1 niveau AA)

![HTML](https://img.shields.io/badge/HTML-5-e34f26) ![CSS](https://img.shields.io/badge/CSS-3-1572b6) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-f7df1e) ![RGAA](https://img.shields.io/badge/RGAA-4.1.2-000091)

## Contexte

**Terre & Bois** est une boutique en ligne d'objets artisanaux fabriqués en France (vases, luminaires, linge de maison, art de la table).

Un client aveugle qui utilise un lecteur d'écran n'a pas réussi à commander sur le site. La page d'accueil a été développée rapidement, sans tenir compte de l'accessibilité. **Votre mission : la rendre accessible.**

La page contient les éléments suivants :

| Zone | Contenu |
|---|---|
| En-tête | Logo, recherche, lien « Mon compte », panier avec compteur |
| Menu principal | Accueil, Vases, Luminaires, Linge de maison, Art de la table, Promotions, avec des sous-menus qui s'ouvrent au survol et au clavier (menu replié sur mobile) |
| Bandeau promotionnel | Messages défilants |
| Mise en avant | Bannière « Collection automne » et lien vers la collection |
| Nos univers | 4 catégories |
| Meilleures ventes | 3 produits (prix, promotion, disponibilité, ajout au panier) |
| Nos engagements | Livraison, retours, paiement sécurisé |
| Livraison et retrait | Tableau des modes de livraison (délais, tarifs, suivi) |
| Notre atelier-boutique | Photo, adresse, horaires et carte OpenStreetMap intégrée |
| Newsletter | Formulaire d'inscription |
| Pied de page | Aide, informations légales, CGV |

## Prérequis

- [Visual Studio Code](https://code.visualstudio.com/)
- L'extension **Live Server** (proposée automatiquement à l'ouverture du projet)
- [NVDA](https://www.nvaccess.org/download/) (Windows, gratuit) avec **Firefox** ou **Chrome**
- Facultatif : [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) et le [validateur HTML du W3C](https://validator.w3.org/)

## Récupérer le projet

```bash
git clone https://github.com/<organisation>/exercice-accessibilite-terre-et-bois.git
cd exercice-accessibilite-terre-et-bois
git checkout -b correction-<votre-nom>
code .
```

## Structure

```
exercice-accessibilite-terre-et-bois/
├── index.html          ← la page à corriger
├── css/style.css       ← styles (contient aussi des erreurs)
├── js/script.js        ← scripts (contient aussi des erreurs)
├── images/             ← logo, icônes, photos (voir CREDITS.md)
├── RAPPORT-AUDIT.md    ← votre grille d'audit à compléter
└── CREDITS.md          ← crédits des photographies
```

---

## Énoncé

### 1. Identifier les erreurs

Parcourez le code HTML (ainsi que le CSS et le JavaScript) et listez **tous les problèmes d'accessibilité** que vous repérez.

Pour chaque erreur trouvée, notez dans [`RAPPORT-AUDIT.md`](RAPPORT-AUDIT.md) :

- **l'élément HTML concerné** ;
- **la nature du problème** ;
- **le critère RGAA correspondant**, si vous le connaissez.

> 💡 La page contient **plus de 30 erreurs**. Pensez à toutes les thématiques du RGAA : images, couleurs, liens, scripts, éléments obligatoires, structuration, présentation, formulaires, navigation, consultation.

### 2. Corriger le code

Apportez les corrections **directement dans les fichiers** `index.html`, `css/style.css` et `js/script.js`.

Ouvrez la page avec **Live Server** (clic droit sur `index.html` → *Open with Live Server*, ou bouton **Go Live** en bas à droite) pour vérifier le résultat dans le navigateur au fur et à mesure.

Contraintes :

- conserver l'apparence générale de la page ;
- HTML, CSS et JavaScript natifs uniquement, sans framework ;
- préférer les éléments HTML natifs (`<button>`, `<nav>`, `<label>`…) à ARIA ; n'utiliser ARIA que lorsque c'est nécessaire.

Faites des commits réguliers et explicites, par exemple :

```bash
git add .
git commit -m "Ajoute les alternatives textuelles des images (RGAA 1.1, 1.2, 1.3)"
```

### 3. Vérifier votre travail

Une fois les corrections effectuées, **testez la page avec NVDA** :

- [ ] La langue et le titre de la page sont annoncés correctement.
- [ ] La liste des titres (`NVDA + F7` → Titres) est cohérente et hiérarchisée.
- [ ] La liste des repères (`NVDA + F7` → Repères) contient bannière, navigation, principal, recherche et informations sur le contenu.
- [ ] Chaque lien de la liste des liens (`NVDA + F7` → Liens) est compréhensible hors contexte.
- [ ] Toutes les images informatives sont restituées ; les images décoratives sont ignorées.
- [ ] Le tableau de livraison est annoncé avec son titre, et chaque cellule est lue avec ses en-têtes (`Ctrl + Alt + flèches` dans le tableau).
- [ ] Le bouton du menu mobile annonce son état « réduit » / « développé ».
- [ ] Les sous-menus du menu principal sont signalés et leur état (ouvert / fermé) est annoncé ; `Échap` les referme.
- [ ] L'ajout au panier est annoncé sans que le focus ne bouge.
- [ ] Le formulaire de newsletter annonce l'étiquette, le caractère obligatoire, le format attendu et les messages d'erreur.

Vérifiez aussi, sans lecteur d'écran :

- [ ] La navigation au clavier seul (`Tab`, `Maj + Tab`, `Entrée`, `Espace`) permet d'atteindre et d'activer tous les éléments, dans un ordre logique.
- [ ] Le focus est toujours visible.
- [ ] La page reste lisible avec un zoom de 200 % et dans une fenêtre de 320 px de large, sans barre de défilement horizontale.
- [ ] Les contrastes respectent 4,5:1 pour le texte et 3:1 pour les éléments d'interface.

#### Aide-mémoire NVDA

| Action | Raccourci |
|---|---|
| Démarrer / arrêter NVDA | `Ctrl + Alt + N` / `NVDA + Q` |
| Arrêter la lecture | `Ctrl` |
| Lire tout depuis le curseur | `NVDA + ↓` |
| Titre suivant / précédent | `H` / `Maj + H` |
| Titre de niveau 1 à 6 | `1` à `6` |
| Repère suivant | `D` |
| Lien suivant | `K` |
| Champ de formulaire suivant | `F` |
| Bouton suivant | `B` |
| Graphique (image) suivant | `G` |
| Tableau suivant | `T` |
| Se déplacer dans un tableau | `Ctrl + Alt + flèches` |
| Liste des éléments (titres, liens, repères) | `NVDA + F7` |
| Basculer mode navigation / mode formulaire | `NVDA + Espace` |

*La touche `NVDA` est `Inser` par défaut, ou `Verr. Maj` en disposition « ordinateur portable ».*

---

## Rendu

1. Complétez [`RAPPORT-AUDIT.md`](RAPPORT-AUDIT.md), y compris la section « Résultats des tests NVDA ».
2. Poussez votre branche :
   ```bash
   git push -u origin correction-<votre-nom>
   ```
3. Ouvrez une **Pull Request** vers `main` et cochez la checklist proposée.

> ℹ️ La carte de la section « Notre atelier-boutique » nécessite une connexion Internet.

## Ressources

- [RGAA 4.1.2 : critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Glossaire du RGAA](https://accessibilite.numerique.gouv.fr/methode/glossaire/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [MDN : accessibilité](https://developer.mozilla.org/fr/docs/Web/Accessibility)
