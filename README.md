# EsmeWeb
## Introduction
Le projet EsmeWeb a pour but d'être à la fois un site vitrine pour l'association Sudrihack et une plateforme d'échange pour ses membres.
Ce site contiendra plusieurs modules propre à Sudrihack :
- Une vitrine des projets de l'association
- Un classement dynamique des membres de l'association, conformément au module RPG de l'association

À l'avenir, tous les projets de la Sudrihack auront un impact sur le projet EsmeWeb.

## Spécifications techniques

La partie frontend (tout ce qui apparaît sur le navigateur) utilise 2 principales technologies :
- React, un framework de templating en Javacript
- Tailwind, un outil assistant au CSS

En ce qui concerne la partie backend, tout est géré par Firebase, dans le cloud.  

Des connaissances en HTML, CSS et Javascript permettent de facilement se familiariser avec le projet.

## Prérequis du projet
### NodeJS
Afin de pouvoir faire fonctionner le projet localement, vous aurez besoin d'avoir NodeJS à la version 14.5.0 ou plus préférablement, 
voici comment voir la version actuelle de node sur son ordinateur, cette commande fonctionne pour tous les systèmes 
d'exploitation :
```console 
user@pc:~ $ node -v
v14.5.0 
```

Si vous n'avez pas NodeJS, ou la bonne version, voici [un lien de téléchargement](https://nodejs.org/en/download/) pour télécharger Node avec la bonne version.

### Yarn
Contrairement à NodeJS, Yarn n'est pas nécessaire au fonctionnement du projet, néanmoins,
nous vous recommandions fortement de l'utiliser, cet outil est beaucoup plus rapide que son
équivalent installé par défaut, NPM.

Vous trouverez un guide pour installer Yarn [ici](https://classic.yarnpkg.com/en/docs/install).

### Git
Comme Yarn, Git n'est pas nécessaire, mais fortement recommandé pour pouvoir facilement mettre le projet à jour
ou envoyer le code que vous avez produit dans le depot.

Voici un guide pour l'installer [ici](https://github.com/git-guides/install-git).


## Installer le projet localement
### Télécharger le projet via Git :
```console
user@pc:~/Dev/MesProjets $ git clone https://github.com/mindflix/esmeWeb.git
```
### Installer les dépendances
#### Avec Yarn
```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb $ yarn install
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb $ npm install
```
En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/esmeWeb/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

## Lancer le serveur de développement
#### Avec Yarn
```console
user@pc:~/Dev/MesProjets/esmeWeb $ yarn start
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets/esmeWeb $ npm run start
```
En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/esmeWeb/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

Le serveur sera généralement accessible sur votre navigateur a cette adresse :
```
http://localhost:3000
```

Nous utilisons Webpack en tant que bundler pour notre projet, ce qui nous donne accès au hot-reloading, cela veux dire que
lorsque vous sauvegarderez un fichier du projet pendant que le serveur est en route, votre page web sur votre
navigateur sera automatiquement rafraichie.

Cela ne fait gagner que quelques secondes, mais sur une journée où cette étape est répétée plusieurs centaines de fois, le gain de temps
est remarquable.


## Mise en production
La mise en production consiste à mettre le build de production sur le serveur de production.
Le build de production est généré de manière à augmenter les performances du site au coût du temps de génération.

#### Avec Yarn
```console
user@pc:~/Dev/MesProjets/esmeWeb $ yarn build
```

#### Avec NPM
```console
user@pc:~/Dev/MesProjets/esmeWeb $ npm run build
```
En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/esmeWeb/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/esmeWeb/issues/new).

## Fonctionnement général
Ce projet est découpé en 2 modules :
- Un module contenant des API en Javascript, permettant de communiquer avec la base de données Firebase.
- Un module interface frontend en Javascript avec React, qui utilise les API pour populer nos interfaces avec des données.

## Arborescence
À venir...

## Interface React
Un projet NodeJS standard, fonctionnant via ReactJs. React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.

## Screenshots du projet
### Module classement
![Screen1](https://github.com/mindflix/esmeWeb/blob/master/src/assets/images/review.png?raw=true)
### Page d'accueil
![Screen2](https://github.com/mindflix/esmeWeb/blob/master/src/assets/images/review2.png?raw=true)
