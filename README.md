# Révisons !

## Express

Mettre en place un serveur express en respectant l'architecture vue en cours (dossier `views`, dossier `assets` ou `public`, routeur dans un fichier à part, ...)

N'oubliez pas d'installer et de require tous les modules qui vont semblent nécessaires.

:warning: NE PAS OUBLIER LE FICHIER `.gitignore` !!

## Route "simple"

Mettre en place une page d'accueil sur la route "/" : 
- créer la view (ejs, pas html !)
- créer la route dans le routeur

La page d'accueil doit lister les noms de tous les cocktails fournis dans le module `cocktails.js`.

:warning: Ne passez pas trop de temps sur le HTML. L'important c'est de travailler la syntaxe des balises EJS.

## Route paramétrée, niveau 1

Mettre en place la route `/cocktail/:id`, qui affiche les détails d'un cocktail.

Ici encore il faudra créer la view, et la route dans le routeur.

[La méthode `.find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find) risque de vous être utile :wink:

N'oubliez pas de renvoyer un code d'erreur 404 si le cocktail demandé n'existe pas !

## Factorisation

Utilisez le principe de partials et la fonction `include` fournie par ejs pour factoriser le HTML qui se répète dans les views.

## Route paramétrée, niveau 2

Mettre en place la route `/type/:typeName`, qui affiche la liste des cocktails qui ont le type demandé.

Ici, vous aurez plutôt besoin d'utiliser [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter). Ça s'utilise comme `find`, mais ça renvoie une liste !