# st2s-kahani.fr

Site de STSS du lycée Gustave Eiffel de Kahani (Séb). Pages statiques, sans compte élève, publiées automatiquement à chaque modification de ce dépôt.

- `site/` : le site tel qu'il est publié (ne pas modifier à la main : il est reconstruit).
- `source/` : ce qu'on modifie.
  - `accueil.json` : la liste des entraînements affichés sur l'accueil.
  - `contenu/entrainements/*.json` : un fichier par entraînement (même format que les anciens `exercises.json`).
  - `definitions/` : les pages Définitions ; la base des notions est `definitions/notions.js`.
  - `js/`, `public/` : moteurs d'exercices, images, feuille de style, supports à télécharger.
- Reconstruire : `python source/build_site.py site`

Hébergement : Cloudflare Pages relié à ce dépôt (dossier publié : `site`, aucune commande de construction).
