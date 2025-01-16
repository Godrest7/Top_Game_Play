# C_&_A Car Application

Une application web interactive permettant de gérer et de visualiser une liste de voitures. Les utilisateurs peuvent voir les détails des voitures et modifier les informations directement via un formulaire.

## Contenu du Projet

- **`index.html`** : La structure principale de l'application avec la présentation des voitures dans des cartes.
- **`script.js`** : La logique de gestion des voitures, affichage dynamique des voitures, et gestion des modals.
- **`form.html`** : Le formulaire utilisé pour modifier les informations des voitures.

## Fonctionnalités

### 1. Affichage des Voitures
- Les voitures sont affichées sous forme de cartes, avec une image, un modèle et une année.
- Les données sont chargées dynamiquement à partir d'une liste dans `script.js`.

### 2. Modal d'Affichage et d'Édition
- Chaque carte possède deux boutons :
  - **`View`** : Affiche une vue détaillée avec une image agrandie.
  - **`Edit`** : Ouvre un formulaire prérempli pour modifier les informations de la voiture.

### 3. Mise à jour Dynamique
- Après modification des informations via le modal, les données sont mises à jour en temps réel dans la liste et sur la page.

## Structure des Fichiers

- **`index.html`** : Contient :
  - Le conteneur des voitures.
  - Le modal Bootstrap pour afficher et modifier les voitures.
- **`form.html`** : Formulaire utilisé dans le modal d'édition. Contient :
  - Champ pour le modèle.
  - Champ pour l'année.
  - Champ pour l'URL de l'image.
  - Aperçu dynamique de l'image.
- **`script.js`** : Contient :
  - La liste des voitures.
  - Les fonctions pour afficher les voitures (`writeDom`).
  - Gestion des modals (`viewModal` et `editModal`).
  - Gestion du formulaire et mise à jour des voitures (`modifyForm`, `updateCars`).

## Comment Exécuter le Projet

1. **Cloner le projet** :
   ```bash
   git clone <lien-du-repo>
   ```
2. **Ouvrir dans un navigateur** :
   Ouvrez le fichier `index.html` dans votre navigateur préféré.

## Dépendances

- [Bootstrap 5.3](https://getbootstrap.com) pour le style et les composants.
- Aucune dépendance externe pour le JavaScript.

## Aperçu Visuel

### Affichage Principal
Une page présentant des voitures sous forme de cartes.

### Modal d'Affichage
Un modal montrant une image agrandie avec des détails.

### Modal d'Édition
Un formulaire prérempli pour modifier les informations de la voiture.

## Auteur

Créé par **[César & Antoine]**.

### Instructions pour l'utiliser :
- Remplacez `<lien-du-repo>` par le lien de votre dépôt GitHub si vous le publiez.
- Ajoutez des captures d'écran dans une section "Aperçu Visuel" si nécessaire.

Si vous souhaitez d'autres détails ou une modification spécifique, faites-le-moi savoir !

