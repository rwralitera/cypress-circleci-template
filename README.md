Welcome file
Welcome file

# Modèle de projet Cypress

## Introduction

Mettre en place toutes les configurations et les bonnes pratiques à chaque nouveau projet Cypress peut être fastidieux. Cela prend du temps et peut entraîner des oublis. Pour faciliter ce processus, je partage mon modèle de projet Cypress, qui sert de point de départ pour éviter de repartir de zéro à chaque fois.

Ce modèle comprend les éléments suivants :

- Une architecture Cypress préconfigurée.
- Des modèles de fonctions et de commandes personnalisées Cypress prêts à l'emploi.
- Une configuration préconfigurée pour l'intégration continue avec CircleCI.
- Une configuration fonctionnelle des git hooks pour formater systématiquement le code.
- Des exemples d'utilisation de Newman dans le cadre d'une intégration continue.
- Des exemples de contrôle des débits réseau lors des tests.
- La possibilité de lancer les tests dans un tableau de bord Cypress préconfiguré.

**NB :** Ce projet est un modèle, il contient plusieurs exemples d'implémentations et des pratiques courantes. Vous devrez l'adapter à votre application et à votre environnement, voire personnaliser complètement les fonctions en fonction de vos besoins (par exemple, en créant des commandes Cypress personnalisées).

### Public cible

Ce modèle sera utile à tout développeur web et testeur souhaitant automatiser les tests d'applications web à l'aide de Cypress.io ou Postman. Un niveau de compétence minimum de **débutant ** est requis, car des ajustements seront nécessaires pour l'adapter à des besoins spécifiques.

### Principaux packages installés

Ce modèle inclut déjà plusieurs packages importants, notamment :

- [Cypress](https://www.cypress.io/)
- [Newman](https://www.npmjs.com/package/newman), qui est l'équivalent de Postman en ligne de commande.
- [ESLint](https://www.npmjs.com/package/eslint) et [Prettier](https://www.npmjs.com/package/prettier) pour l'analyse et le formatage du code.
- [Husky](https://typicode.github.io/husky/#/), pour la gestion des [git hooks](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Crochets-Git).
- [junit reporter](https://www.npmjs.com/package/mocha-junit-reporter) pour générer des rapports de tests au format JUnit.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Un ordinateur (Mac, Windows, Linux).
- [Node](https://nodejs.org/) installé.
- [Visual Studio Code](https://code.visualstudio.com/download) installé.
- [Git](https://git-scm.com/) installé.
- [Postman](https://www.postman.com/downloads/) installé.
- Un compte [GitHub](https://github.com/).
- Un compte [CircleCI](https://circleci.com/vcs-authorize/) auquel vous vous connecterez avec votre compte GitHub.
- Un compte pour le [Dashboard Cypress.io](https://dashboard.cypress.io/login).

Assurez-vous que Node et npm sont correctement installés en vérifiant leur version dans votre terminal :

```bash
$ node -v
# Exemple : v16.15.0
$ npm -v
# Exemple : 8.5.5
```

Pour obtenir le modèle et installer les dépendances NPM, suivez ces étapes :

1. Connectez-vous à votre compte [GitHub](https://github.com/).
2. Accédez au projet : [lien vers le projet](https://github.com/rwralitera/cypress-postman-template-circleci-githooks).
3. Cliquez sur le bouton "Utiliser ce modèle".
4. Donnez un nom à votre nouveau projet.
5. Clonez votre nouveau projet et installez les dépendances :

```bash
git clone https://github.com/rwralitera/nom-projet
cd nom-projet
npm install
```

### Vérification rapide ✅

Pour tester l'installation, ouvrez votre terminal et exécutez la commande suivante :

```bash
npx cypress:run
```

Vous devriez voir Cypress exécuter tous les tests avec succès.

## Configuration et ajustements

Maintenant que vous avez le modèle de projet, vous devrez effectuer quelques modifications pour l'adapter à votre environnement.

### Configuration CircleCI

Ce modèle de projet intègre déjà un fichier de configuration [config.yml](https://github.com/rwralitera/backup-cypress-postman-template-circleci-githooks/blob/master/.circleci/config.yml), qui lance automatiquement les tests à chaque push. Pour configurer CircleCI :

1. Connectez-vous à votre compte **CircleCI**.
2. Accédez à l'onglet "Projet".
3. Cliquez sur le bouton "Configurer le projet" correspondant au bon projet.

### Configuration Git Hooks

L'exécution des git hooks se fait grâce au package Husky, dont la configuration de lancement se trouve dans le fichier `package.json`. Vous trouverez deux étapes :

- Le "pre-commit", qui exécute simplement [prettier](https://www.npmjs.com/package/prettier) sur tous les fichiers modifiés.
- Le "prepare-commit-msg", qui ajoute les initiales de l'auteur du commit [prepare-commit-msg.sh](https://github.com/rwralitera/backup-cypress-postman-template-circleci-githooks/blob/master/scripts/prepare-commit-msg.sh).

Vous pouvez éventuellement modifier les branches pour lesquelles ces étapes doivent être exécutées :

```bash
if [ -z "$BRANCHES_TO_SKIP" ]; then
	BRANCHES_TO_SKIP=(develop)
fi
```

### Configuration dans les fichiers JSON

Recherchez le mot-clé **XXXXXXX** dans les fichiers de configuration et remplacez-le par les valeurs appropriées :

- Dans **_cypress.json_**, remplacez "**projectId**" par "**ID_PROJET_DASHBOARD_CYPRESS**".
- Dans **_develop.json_**, mettez à jour l'URL pour correspondre à votre environnement de développement.

### Configuration dans les fichiers de code

Recherchez le mot-clé **FIXME** dans les fichiers de code et remplacez-le par les valeurs appropriées :

- Dans le fichier **_command.ts_**, effectuez les ajustements nécessaires pour les URL cibles en fonction de votre environnement.
- Dans le fichier **waitLoader.ts**, adaptez simplement le sélecteur correspondant au chargement.

### Configuration des badges

N'oubliez pas de mettre à jour les liens des badges dans l'en-tête de ce fichier **README.md** pour visualiser rapidement l
Modèle de projet Cypress
Introduction
Mettre en place toutes les configurations et les bonnes pratiques à chaque nouveau projet Cypress peut être fastidieux. Cela prend du temps et peut entraîner des oublis. Pour faciliter ce processus, je partage mon modèle de projet Cypress, qui sert de point de départ pour éviter de repartir de zéro à chaque fois.

Ce modèle comprend les éléments suivants :

Une architecture Cypress préconfigurée.
Des modèles de fonctions et de commandes personnalisées Cypress prêts à l’emploi.
Une configuration préconfigurée pour l’intégration continue avec CircleCI.
Une configuration fonctionnelle des git hooks pour formater systématiquement le code.
Des exemples d’utilisation de Newman dans le cadre d’une intégration continue.
Des exemples de contrôle des débits réseau lors des tests.
La possibilité de lancer les tests dans un tableau de bord Cypress préconfiguré.
NB : Ce projet est un modèle, il contient plusieurs exemples d’implémentations et des pratiques courantes. Vous devrez l’adapter à votre application et à votre environnement, voire personnaliser complètement les fonctions en fonction de vos besoins (par exemple, en créant des commandes Cypress personnalisées).

Public cible
Ce modèle sera utile à tout développeur web et testeur souhaitant automatiser les tests d’applications web à l’aide de Cypress.io ou Postman. Un niveau de compétence minimum de **débutant ** est requis, car des ajustements seront nécessaires pour l’adapter à des besoins spécifiques.

Principaux packages installés
Ce modèle inclut déjà plusieurs packages importants, notamment :

Cypress
Newman, qui est l’équivalent de Postman en ligne de commande.
ESLint et Prettier pour l’analyse et le formatage du code.
Husky, pour la gestion des git hooks.
junit reporter pour générer des rapports de tests au format JUnit.
Prérequis
Avant de commencer, assurez-vous d’avoir les éléments suivants :

Un ordinateur (Mac, Windows, Linux).
Node installé.
Visual Studio Code installé.
Git installé.
Postman installé.
Un compte GitHub.
Un compte CircleCI auquel vous vous connecterez avec votre compte GitHub.
Un compte pour le Dashboard Cypress.io.
Assurez-vous que Node et npm sont correctement installés en vérifiant leur version dans votre terminal :

$ node -v

# Exemple : v16.15.0

$ npm -v

# Exemple : 8.5.5

Pour obtenir le modèle et installer les dépendances NPM, suivez ces étapes :

Connectez-vous à votre compte GitHub.
Accédez au projet : lien vers le projet.
Cliquez sur le bouton “Utiliser ce modèle”.
Donnez un nom à votre nouveau projet.
Clonez votre nouveau projet et installez les dépendances :
git clone https://github.com/rwralitera/nom-projet
cd nom-projet
npm install
Vérification rapide ✅
Pour tester l’installation, ouvrez votre terminal et exécutez la commande suivante :

npx cypress:run
Vous devriez voir Cypress exécuter tous les tests avec succès.

Configuration et ajustements
Maintenant que vous avez le modèle de projet, vous devrez effectuer quelques modifications pour l’adapter à votre environnement.

Configuration CircleCI
Ce modèle de projet intègre déjà un fichier de configuration config.yml, qui lance automatiquement les tests à chaque push. Pour configurer CircleCI :

Connectez-vous à votre compte CircleCI.
Accédez à l’onglet “Projet”.
Cliquez sur le bouton “Configurer le projet” correspondant au bon projet.
Configuration Git Hooks
L’exécution des git hooks se fait grâce au package Husky, dont la configuration de lancement se trouve dans le fichier package.json. Vous trouverez deux étapes :

Le “pre-commit”, qui exécute simplement prettier sur tous les fichiers modifiés.
Le “prepare-commit-msg”, qui ajoute les initiales de l’auteur du commit prepare-commit-msg.sh.
Vous pouvez éventuellement modifier les branches pour lesquelles ces étapes doivent être exécutées :

if [ -z "$BRANCHES_TO_SKIP" ]; then
BRANCHES_TO_SKIP=(develop)
fi
Configuration dans les fichiers JSON
Recherchez le mot-clé XXXXXXX dans les fichiers de configuration et remplacez-le par les valeurs appropriées :

Dans cypress.json, remplacez “projectId” par “ID_PROJET_DASHBOARD_CYPRESS”.
Dans develop.json, mettez à jour l’URL pour correspondre à votre environnement de développement.
Configuration dans les fichiers de code
Recherchez le mot-clé FIXME dans les fichiers de code et remplacez-le par les valeurs appropriées :

Dans le fichier command.ts, effectuez les ajustements nécessaires pour les URL cibles en fonction de votre environnement.
Dans le fichier waitLoader.ts, adaptez simplement le sélecteur correspondant au chargement.
Configuration des badges
N’oubliez pas de mettre à jour les liens des badges dans l’en-tête de ce fichier README.md pour visualiser rapidement l

Markdown 5886 bytes 738 words 123 lines Ln 101, Col 7HTML 4019 characters 684 words 74 paragraphs
