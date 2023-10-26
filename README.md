# Modèle de Projet Cypress

## Introduction

La mise en place de configurations et de bonnes pratiques pour chaque nouveau projet Cypress peut s'avérer fastidieuse. Cela demande du temps et peut entraîner des oublis. Afin de simplifier ce processus, je partage mon modèle de projet Cypress qui sert de point de départ pour éviter de repartir de zéro à chaque fois.

Ce modèle comprend les éléments suivants :

- Une architecture Cypress préconfigurée.
- Des modèles de fonctions et de commandes Cypress personnalisées prêts à l'emploi.
- Une configuration préconfigurée pour l'intégration continue avec CircleCI.
- Une configuration fonctionnelle des git hooks pour le formatage systématique du code.
- Des exemples d'utilisation de Newman dans le cadre de l'intégration continue.
- Des exemples de contrôle des débits réseau lors des tests.
- La possibilité de lancer les tests dans un tableau de bord Cypress préconfiguré.

**Remarque :** Ce projet est un modèle. Il contient plusieurs exemples d'implémentations et des pratiques courantes. Vous devrez l'adapter à votre application et à votre environnement, voire personnaliser complètement les fonctions en fonction de vos besoins (par exemple, en créant des commandes Cypress personnalisées).

### Public Cible

Ce modèle sera utile à tout développeur web et testeur souhaitant automatiser les tests d'applications web à l'aide de Cypress.io ou Postman. Un niveau de compétence minimum de **débutant** est requis, car des ajustements seront nécessaires pour l'adapter à des besoins spécifiques.

### Principaux Packages Installés

Ce modèle inclut déjà plusieurs packages importants, notamment :

- [Cypress](https://www.cypress.io/)
- [Newman](https://www.npmjs.com/package/newman), l'équivalent de Postman en ligne de commande.
- [ESLint](https://www.npmjs.com/package/eslint) et [Prettier](https://www.npmjs.com/package/prettier) pour l'analyse et le formatage du code.
- [Husky](https://typicode.github.io/husky/#/), pour la gestion des [git hooks](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Crochets-Git).
- [Junit Reporter](https://www.npmjs.com/package/mocha-junit-reporter) pour générer des rapports de tests au format JUnit.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un ordinateur (Mac, Windows, Linux).
- [Node](https://nodejs.org/) installé.
- [Visual Studio Code](https://code.visualstudio.com/download) installé.
- [Git](https://git-scm.com/) installé.
- [Postman](https://www.postman.com/downloads/) installé.
- Un compte [GitHub](https://github.com/).
- Un compte [CircleCI](https://circleci.com/vcs-authorize/) auquel vous vous connecterez avec votre compte GitHub.
- Un compte pour le [Tableau de Bord Cypress.io](https://dashboard.cypress.io/login).

Assurez-vous que Node et npm sont correctement installés en vérifiant leur version dans votre terminal :

```bash
$ node -v
# Exemple : v16.15.0
$ npm -v
# Exemple : 8.5.5
```

Pour obtenir le modèle et installer les dépendances NPM, suivez ces étapes :

1. Connectez-vous à votre compte [GitHub](https://github.com/).
2. Accédez au projet : [Lien vers le projet](https://github.com/rwralitera/cypress-postman-template-circleci-githooks).
3. Cliquez sur le bouton "Utiliser ce modèle".
4. Donnez un nom à votre nouveau projet.
5. Clonez votre nouveau projet et installez les dépendances :

```bash
git clone https://github.com/rwralitera/nom-projet
cd nom-projet
npm install
```

### Vérification Rapide ✅

Pour tester l'installation, ouvrez votre terminal et exécutez la commande suivante :

```bash
npx cypress:run
```

Vous devriez voir Cypress exécuter tous les tests avec succès.

## Configuration et Ajustements

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

### Configuration dans les Fichiers JSON

Recherchez le mot-clé **XXXXXXX** dans les fichiers de configuration et remplacez-le par les valeurs appropriées :

- Dans **_cypress.json_**, remplacez "**projectId**" par "**ID_PROJET_DASHBOARD_CYPRESS**".
- Dans **_develop.json_**, mettez à jour l'URL pour correspondre à votre environnement de développement.

### Configuration dans les Fichiers de Code

Recherchez le mot-clé **FIXME** dans les fichiers de code et remplacez-le par les valeurs appropriées :

- Dans le fichier **_command.ts_**, effectuez les ajustements nécessaires pour les URL cibles en fonction de votre environnement.
- Dans le fichier **\_waitLoader.ts**, adaptez simplement le sélecteur correspondant au chargement.
