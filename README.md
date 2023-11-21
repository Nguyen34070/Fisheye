## Projet Front-end Fisheye

Voici le projet n°6 de la formation de développeur Front-end chez Openclassrooms. Les travaux a réaliser consiste à ajouter le code Javascript manquant pour que le site des photographes soit pleinement fonctionnel, l'ajout de l'attibut ARIA pour qu'une liseuse d'écran puisse lire toute les lignes et de modifier le code css pour que l'affichage soit correct et adapté pour le WCAG.

## Spécifications techniques

- Le code est séparé en différents fichiers (HTML, CSS, Javascript).
- Une version moderne (ES6 ou supérieur) de Javascript est utilisée et les fonctionnalités obselètes ne sont pas utilisées.
- Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que possivle, au lieu de mettre de éléments <div> et <span> partout.
- Lorsque vous devez créez un élément peersonnalisé, ajoutez des attributs ARIA pour décrire ce qu'il fait.
- Le code doit passer les tests Achecker sans "known issue" (afin qu'il soit conforme aux WCAG).

## Contraintes techniques additionnelles

- Le code est séparé en différents fichiers (HTML, CSS, JavaScript).
- ESLint est utilisé (avec les paramètres par défaut) pour garantir que le code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE VSCode.
- Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et les fonctionnalités obsolètes ne sont pas utilisées.
- Le code est lisible. il faudra s'assurer que les variables et fonctions ont un nom qui ont un sens, et commenter le code lorsque le nom n'indique pas explicitement ce qu'il se passe.

## Spécifications fonctionelles

Nous devons créer les pages suivantes pour le prototype :
 - Page d'accueil :
      - Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.
      - Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.
 - Page des photographes(le contenu de la apge sera généré de manière dynamique en fonction du photographe):
      - Affiche une gallerie des  travaux du photographe.
      - Les photographes peuvent montrer à la fois des photos et des vidéos.
             - Dans le cas des vidéos, montrer une image miniature dans la galerie.
      - Chaque média comprend un titre et un nombre de likes.
             - Lorsque l'utilisateur clique sur l'îcone "Like", le nombre de likes affiché est incrémenté.
             - Le nombre de likes total d'un photographe doit correspondre à la somme des likes de chacun des ses médias.
      - Les médias peuvent être triés par popularité ou par titre.
      - Lorsque l'utilisateur clique sur un média, celui-ci doit s'ouvrir dans une lightbox:
             - Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
             - Des boutons de navigation permettent de passer d'un élément à l'autre dans la lightbox (les utilisateurs peuvent cliquer sur ces bouton pour naviguer).