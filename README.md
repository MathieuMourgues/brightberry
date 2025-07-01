# Documentation du Projet Brightberry

Bienvenue dans le projet Brightberry ! Ce document a pour but de vous guider à travers le code, les technologies utilisées et la manière de faire fonctionner le projet. Il est rédigé en pensant à un développeur qui n'a pas ou peu d'expérience en développement web.

## 1. Vue d'ensemble des Technologies

Ce projet est construit avec des technologies modernes de l'écosystème JavaScript. Voici les principales :

### a. Node.js

Node.js est un environnement qui permet d'exécuter du code JavaScript en dehors d'un navigateur web. Dans ce projet, il est utilisé pour faire fonctionner le serveur de développement, compiler le projet pour la production et gérer les dépendances.

### b. Next.js 15

Next.js est le cœur de ce projet. C'est un framework (un "cadre de travail") construit au-dessus de React. Il simplifie la création d'applications web en fournissant une structure et des fonctionnalités prêtes à l'emploi.

- **Rendu Côté Serveur (SSR) et Génération de Site Statique (SSG)** : Next.js peut pré-générer les pages sur le serveur avant de les envoyer au navigateur. Le résultat est un site web plus rapide à charger et plus facile à référencer pour les moteurs de recherche comme Google.
- **Routage Basé sur les Fichiers** : La structure des URLs de votre application est directement liée à la structure des fichiers dans le dossier `app/`. Chaque dossier dans `app/` correspond à une "route" (une URL).

### c. React 19

React est une bibliothèque pour construire des interfaces utilisateur. L'idée fondamentale de React est de diviser l'interface en petits morceaux réutilisables appelés **composants**. Par exemple, un bouton, un menu, ou même une page entière peut être un composant.

Dans ce projet, les fichiers `.tsx` que vous verrez contiennent des composants React.

### d. TypeScript

TypeScript est un sur-ensemble de JavaScript qui ajoute le **typage statique**. Si vous avez déjà fait du Java ou du C#, vous serez en terrain connu. Cela signifie que vous pouvez définir le "type" des variables (par exemple, `string` pour une chaîne de caractères, `number` for un nombre).

Avantages :

- **Détection d'erreurs en amont** : Beaucoup d'erreurs sont détectées pendant le développement plutôt qu'à l'exécution.
- **Autocomplétion améliorée** : Votre éditeur de code peut vous aider à écrire le code plus rapidement et avec moins d'erreurs.
- **Code plus lisible** : Les types rendent le code plus facile à comprendre pour les autres développeurs (et pour vous-même dans le futur !).

### e. Tailwind CSS 4

Tailwind CSS est un framework CSS "utility-first". Au lieu d'écrire du code CSS dans des fichiers `.css` séparés, vous stylisez vos composants directement dans vos fichiers `.tsx` en utilisant des classes CSS prédéfinies.

Par exemple, pour créer un bouton bleu avec du texte blanc :
`<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Mon Bouton</button>`

C'est une approche très rapide et efficace pour le design d'interfaces.

---

## 2. Structure du Projet

Voici une description des fichiers et dossiers importants :

- **`app/`**: Le dossier le plus important de l'application Next.js.

  - **`layout.tsx`**: C'est le gabarit principal de votre application. Il définit la structure HTML de base (`<html>`, `<body>`) qui sera partagée par toutes les pages.
  - **`page.tsx`**: C'est la page d'accueil de votre application, correspondant à l'URL `/`.
  - **`globals.css`**: Contient les quelques styles CSS globaux qui s'appliquent à toute l'application.

- **`public/`**: Ce dossier contient tous les fichiers statiques qui sont accessibles publiquement via une URL, comme les images, les icônes (SVG), etc.

- **`package.json`**: Le fichier d'identité de tout projet Node.js. Il contient :

  - Le nom et la version du projet.
  - La liste des **dépendances** (`dependencies`) : les paquets nécessaires pour faire fonctionner l'application en production.
  - La liste des **dépendances de développement** (`devDependencies`) : les outils nécessaires uniquement pendant le développement (compilateur TypeScript, ESLint, etc.).
  - Les **scripts** (`scripts`) : des commandes que vous pouvez exécuter (voir section 4).

- **`next.config.ts`**: Fichier de configuration pour Next.js. On peut y personnaliser son comportement.

- **`tsconfig.json`**: Fichier de configuration pour TypeScript. Il indique au compilateur TypeScript comment interpréter votre code.

- **`postcss.config.mjs`**: Fichier de configuration pour PostCSS. PostCSS est un outil qui transforme le CSS. Ici, il est utilisé pour intégrer Tailwind CSS dans le processus de build.

- **`eslint.config.mjs`**: Fichier de configuration pour ESLint, un outil qui analyse votre code pour trouver des problèmes, des erreurs de style ou des incohérences.

---

## 3. Pour Commencer

Suivez ces étapes pour lancer le projet sur votre machine.

### Prérequis

Assurez-vous d'avoir [Node.js] version 22 (https://nodejs.org/) installé sur votre ordinateur. L'installation de Node.js inclut `npm` (Node Package Manager), l'outil utilisé pour gérer les dépendances.

### Étape 1 : Installation des Dépendances

Ouvrez un terminal à la racine du projet et exécutez la commande suivante. Cela va télécharger toutes les dépendances listées dans `package.json` dans un dossier `node_modules`.

```bash
npm install
```

### Étape 2 : Lancer le Serveur de Développement

Une fois les dépendances installées, vous pouvez lancer le serveur de développement local :

```bash
npm run dev
```

Cette commande va démarrer un serveur web sur votre machine. Vous verrez probablement un message comme celui-ci dans votre terminal :

```
- Ready on http://localhost:3000
```

Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`. Vous devriez voir la page d'accueil de l'application. Le serveur de développement se recharge automatiquement à chaque fois que vous modifiez un fichier.

---

## 4. Scripts Disponibles

Voici les scripts que vous pouvez utiliser via `npm run <nom-du-script>` :

- **`npm run dev`**

  - Lance l'application en mode **développement**.
  - Rapide, avec rechargement à chaud (hot-reloading).

- **`npm run build`**

  - Construit la version de **production** de l'application.
  - Optimise le code (minification, etc.) pour qu'il soit le plus performant possible.
  - Le résultat est stocké dans le dossier `.next/`.

- **`npm run start`**

  - Lance un serveur de **production**.
  - Vous devez avoir exécuté `npm run build` avant de pouvoir utiliser cette commande.
  - C'est la commande que l'on utiliserait sur un serveur pour héberger l'application.

- **`npm run lint`**
  - Lance ESLint pour analyser le code à la recherche d'erreurs ou de problèmes de style.
  - Utile pour maintenir une bonne qualité de code.

---

Nous espérons que cette documentation vous sera utile pour prendre en main le projet ! N'hésitez pas à explorer le code en commençant par `app/page.tsx`.
