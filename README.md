# Cocktail
Projet réalisé lors de ma formation Développeur FullStack JS O'colock 2020-2021

## Express

Mise en place un serveur express en respectant l'architecture (dossier `views`, dossier `assets` ou `public`, routeur dans un fichier à part, ...)

## Route "simple"

Mise en place une page d'accueil sur la route "/" : 
- création de la view
- création de la route dans le routeur

La page d'accueil liste les noms de tous les cocktails fournis dans le module `cocktails.js`.

## Route paramétrée, niveau 1

Mise en place de la route `/cocktail/:id`, qui affiche les détails d'un cocktail.
- création de la view
- création de la route dans le routeur


## Factorisation

Utilisation du principe de partials et la fonction `include` fournie par ejs pour factoriser le HTML qui se répète dans les views.

## Route paramétrée, niveau 2

Mise en place la route `/type/:typeName`, qui affiche la liste des cocktails qui ont le type demandé.
