# G_&_A Game Application

Une application web interactive permettant de gérer et de visualiser une liste de jeux vidéo. Les utilisateurs peuvent voir les détails des jeux et modifier les informations directement via un formulaire.

## Contenu du Projet

- **`index.html`** : La structure principale de l'application avec la présentation des jeux dans des cartes.
- **`script.js`** : La logique de gestion des jeux, affichage dynamique des jeux, et gestion des modals.
- **`form.html`** : Le formulaire utilisé pour modifier les informations des jeux.

## Fonctionnalités

### 1. Affichage des Jeux
- Les jeux sont affichés sous forme de cartes, avec une image, un titre et une année.
- Les données sont chargées dynamiquement à partir d'une liste dans `script.js`.

### 2. Modal d'Affichage et d'Édition
- Chaque carte possède deux boutons :
  - **`View`** : Affiche une vue détaillée avec une image agrandie.
  - **`Edit`** : Ouvre un formulaire prérempli pour modifier les informations du jeu.

### 3. Mise à jour Dynamique
- Après modification des informations via le modal, les données sont mises à jour en temps réel dans la liste et sur la page.

## Structure des Fichiers

- **`index.html`** : Contient :
  - Le conteneur des jeux.
  - Le modal Bootstrap pour afficher et modifier les jeux.
- **`form.html`** : Formulaire utilisé dans le modal d'édition. Contient :
  - Champ pour le titre.
  - Champ pour l'année.
  - Champ pour l'URL de l'image.
  - Aperçu dynamique de l'image.
- **`script.js`** : Contient :
  - La liste des jeux.
  - Les fonctions pour afficher les jeux (`writeDom`).
  - Gestion des modals (`viewModal` et `editModal`).
  - Gestion du formulaire et mise à jour des jeux (`modifyFom`, `updateGames`).

## Comment Exécuter le Projet

1. **Cloner le projet** :
2. 
   git clone <lien-du-repo>
   
3. **Ouvrir dans un navigateur** :
   Ouvrez le fichier `index.html` dans votre navigateur préféré.

## Dépendances

- [Bootstrap 5.3](https://getbootstrap.com) pour le style et les composants.
- Aucune dépendance externe pour le JavaScript.

## Aperçu Visuel

### Affichage Principal
Une page présentant des jeux sous forme de cartes.

### Modal d'Affichage
Un modal montrant une image agrandie avec des détails.

### Modal d'Édition
Un formulaire prérempli pour modifier les informations du jeu.

## Auteur

Créé par **[Godwin & Arame]**.

### Instructions pour l'utiliser :
- Remplacez `<lien-du-repo>` par le lien de votre dépôt GitHub si vous le publiez.
- Ajoutez des captures d'écran dans une section "Aperçu Visuel" si nécessaire.

Si vous souhaitez d'autres détails ou une modification spécifique, faites-le-moi savoir !
