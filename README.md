# Paradise

Site statique recentre sur une tier list simple a maintenir, partagee entre la home et les guides :

- `index.html` : tier list centrale TOA / WW
- `pages/guide.html?slug=<personnage>` : template commun des guides
- `public/data/characters.json` : registre central des personnages
- `public/data/tier-rankings.json` : placements par mode, role et tier
- `public/data/echoes/*.json` : registre central des sonatas, echoes et correspondances
- `scripts/data/guides/<slug>.js` : contenu d'un guide
- `scripts/data/themes/<slug>.js` : theme visuel d'un guide

## Utilisation locale

Le projet lit maintenant des fichiers JSON via `fetch()`.

Il faut donc lancer un petit serveur local au lieu d'ouvrir directement `index.html`.

Exemples :

- `python -m http.server 8000`
- `npx serve .`

Puis ouvrir `http://localhost:8000`.

## Structure

- `public/data/characters.json`
  Metadonnees minimales par personnage :
  `id`, `name`, `rarity`, `element`, `weapon`, `icon`, `guideSlug`.

- `public/data/tier-rankings.json`
  Source de verite des tiers :
  `tierOrder`, puis `modes.TOA` et `modes.WW`, chacun avec `dps`, `hybrid`, `support`.

- `scripts/data/guides/shorekeeper.js`
  Contenu metier du guide Shorekeeper :
  hero, apercu, priorites, kit, sequences, armes, echos, stats endgame, teams, resume.
  La section `Tier` n'est plus stockee ici.

- `scripts/data/themes/default.js`
  Theme de secours commun.

- `scripts/data/themes/shorekeeper.js`
  Palette, ambiance et video de fond du guide Shorekeeper.

- `public/data/echoes/sonatas.json`
  Noms EN/FR des sonatas. Les images associees vivent dans `assets/img/set/`.

- `public/data/echoes/echoes.json`
  Noms EN/FR des echoes. Les images associees vivent dans `assets/img/echo/`.

- `public/data/echoes/memberships.json`
  Source de verite des appartenances echo -> sonata, avec le cout de chaque echo.

- `scripts/app/shared-data.js`
  Charge les JSON, construit les maps, valide les ids manquants et expose les helpers partages.

- `scripts/app/echo-data.js`
  Charge les registres des echoes, normalise les variantes de noms et signale les incoherences.

- `scripts/app/guide-tier.js`
  Widget commun de la section `Tier` pour les guides.

- `scripts/app/tierlist-home.js`
  Construit la tier list de la home a partir du JSON partage.

- `scripts/app/guide-page.js`
  Lit le slug, charge le theme + le contenu si le guide existe, puis branche la section `Tier` sur la source centralisee.

## Modifier la tier list

1. Ouvrir `public/data/tier-rankings.json`.
2. Choisir le mode : `TOA` ou `WW`.
3. Choisir le role : `dps`, `hybrid` ou `support`.
4. Deplacer les ids de personnages entre `T0`, `T0.5`, `T1`, `T1.5`, `T2`, `T3`, `T4`.

Le changement est centralise :

- la home change
- la section `Tier` des guides change

## Ajouter un personnage

1. Ajouter son entree dans `public/data/characters.json`.
2. Placer son portrait dans `assets/img/tierlist/`.
3. Utiliser un `id` stable et un `guideSlug` qui servira au lien vers le guide.
4. Si le personnage doit etre classe, ajouter son `id` dans `public/data/tier-rankings.json`.

## Multi-role

Le systeme accepte qu'un meme personnage apparaisse plusieurs fois dans un meme mode.

Exemple :

- `TOA > hybrid > T1`
- `TOA > dps > T1.5`

Il suffit de repeter le meme `id` dans plusieurs groupes.

## Ajouter un nouveau guide

1. Ajouter le personnage dans `public/data/characters.json`.
2. Creer `scripts/data/themes/<slug>.js` avec les couleurs, la video et l'ambiance.
3. Creer `scripts/data/guides/<slug>.js` avec le texte du guide.
4. Ajouter son `id` dans `public/data/tier-rankings.json` si tu veux le classer.

Une fois ces fichiers presents, le lien vers `pages/guide.html?slug=<slug>` fonctionne sans nouvelle page HTML.
