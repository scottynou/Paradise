# Cantarella Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Cantarella`
- Skill base id: `10031`
- Localized range used: `490000000-530000000`

## Keywords

### Mirage

- L'Attaque normale devient l'Attaque normale « Piqûre spectrale ». Cela effectue jusqu'à 3 attaques consécutives pour infliger des Dégâts Havoc. Cette attaque peut être lancée en l'air. Quand vous lancez l'Attaque normale « Piqûre spectrale » en l'air, les points d'Endurance seront consommés. De plus, le combo de l'Attaque normale « Piqûre spectrale » ne sera pas réinitialisé.
- Quand l'Attaque normale « Piqûre spectrale » touche la cible, vous consommez 1 point de « Flou » pour obtenir 1 point de « Frisson ». Cela restaure le PV de tous les personnages de l'équipe à proximité.
- L'Attaque normale III de « Piqûre spectrale » va effectuer 3 attaques coopératives pour infliger des Dégâts Havoc.
- L'Attaque aérienne devient « Vortex abyssal ». Appuyez sur la touche de Sauter pour consommer les points de l'Endurance pour effectuer une attaque plongeante, qui inflige des Dégâts Havoc.
- L'Contre-attaque d'esquive devient « Frappe des ombres ». Cela inflige des Dégâts Havoc. Après le lancement de celle-ci, appuyez brièvement sur l'Attaque normale pour lancer l'Attaque normale II de « Piqûre spectrale ».
- Quand l'Attaque aérienne « Vortex abyssal » ou la Contre-attaque d'esquive « Frappe des ombres » touche la cible, vous consommez 1 point de « Flou » pour obtenir 1 point de « Frisson ». Cela restaure le PV de tous les membres de l'équipe à proximité.
- Le « Mirage » dure 8 secondes.
- L'effet sera annulé quand les points de « Flou » sont épuisés.

## Skills

### Attaque normale

- Id interne de competence: `1003101`
- Nom: `Chute des illusions`

Description

Attaque normale
Effectuer jusqu'à 3 attaques consécutives qui infligent des Dégâts Havoc.

Attaque lourde
Consommer les points d'Endurance pour attaquer la cible et infliger des Dégâts Havoc.

Attaque lourde « Plongée trompeuse »
Avec les points de « Flou », l'Attaque lourde deviendra « Plongée trompeuse » et elle inflige des Dégâts Havoc. Vous entrez en état de « Mirage ». Si le « Mirage » est en vigueur, vous n'entrez pas encore une fois en cet état par lancer la « Plongée trompeuse ».
Cette attaque peut être lancée dans l'eau.

Attaque aérienne
Consommer les points de l'Endurance pour effectuer une attaque plongeante, qui inflige des Dégâts Havoc.

Contre-attaque d'esquive
Appuyer brièvement sur l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Havoc.

Resume court

Attaque normale
Infliger des Dégâts Havoc.

Attaque lourde
Consommer les points de l'Endurance pour lancer une attaque, qui inflige des Dégâts Havoc.

Attaque lourde «Plongée trompeuse »
Avec des points de « Flou », l'Attaque lourde deviendra « Plongée trompeuse ». Elle inflige des Dégâts Havoc. Vous entrez en état de « Mirage ».

Attaque aérienne
Consommer les points de l'Endurance pour lancer une attaque, qui inflige des Dégâts Havoc.

Contre-attaque d'esquive
Infliger des Dégâts Havoc.

### Competence resonatrice

- Id interne de competence: `1003102`
- Nom: `Danse avec les ombres`

Description

Marche élégante
Attaquer la cible pour infliger des Dégâts Havoc.

Rêverie vacillante
Pendant le « Mirage », la Compétence résonatrice devient Rêverie vacillante. Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.
Cela attaque la cible pour infliger des Dégâts Havoc et lui imposer le « Rêve brumeux ».
Cette compétence peut être lancée en l'air.

Rêve brumeux
L'efficacité des actions effectuées par la cible est réduite pendant {0} secondes. Quand la cible subit des Dégâts, un Sursaut sera déclenché, il inflige des Dégâts Havoc en annulant l'effet du Rêve brumeux. Ces dégâts sont considérés comme ceux de l'Attaque normale.
Les attaques des membres autres que Cantarella qui touchent la cible affectée par le « Rêve brumeux » ne peuvent pas déclencher l'effet de « Sursaut » et annuler le « Rêve brumeux ».
Le « Sursaut » ne peut pas être déclenché par les Dégâts d'Outils d'exploration et les Attaques coopératives.

Resume court

Marche élégante
Infliger des Dégâts Havoc.

Rêverie vacillante
Pendant le « Mirage », la Compétence résonatrice devient Rêverie vacillante. Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.
Attaquer la cible pour infliger des Dégâts Havoc et lui imposer le « Rêve brumeux ».

Rêve brumeux
L'efficacité des actions effectuées par la cible est réduite. Quand la cible subit des Dégâts, un Sursaut sera déclenché et il inflige des Dégâts Havoc.

### Liberation resonatrice

- Id interne de competence: `1003103`
- Nom: `Sous la mer`

Description

Étouffement insidieux
Attaquer la cible pour infliger des Dégâts Havoc et appliquer la « Diffusion » à tous les membres de l'équipe à proximité, ces dégâts sont considérés comme ceux d'Attaque normale.
Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.
Cette compétence peut être lancée en l'air près du sol.

Diffusion
Un « Tisseur de rêves » sera invoqué pour lancer une attaque coopérative qui inflige des Dégâts Havoc quand le membre actif inflige des dégâts. Ces dégâts sont considérés comme ceux de l'Attaque normale.
- {0} secondes après que les dégâts sont infligés, {1} Tisseur(s) de rêves peut être invoqué chaque seconde. L'effet peut être déclenché 1 fois chaque seconde, mais il ne pourra pas être déclenché par les dégâts infligés par le Tisseur de rêves.
- Vous pouvez invoquer {2} Tisseur(s) de rêves chaque seconde jusqu'il y a {3} Tisseurs de rêves présents.
- L'effet dure {4} secondes ou jusqu'à ce qu'on ne puisse plus invoquer de Tisseurs de rêves.

Resume court

Étouffement insidieux
Attaquer la cible pour infliger des Dégâts Havoc et appliquer la « Diffusion » à tous les membres de l'équipe à proximité.
Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.

Diffusion
Quand le membre actif inflige des dégâts à la cible, un « Tisseur de rêves » sera invoqué pour lancer une attaque coopérative pour infliger des Dégâts Havoc, qui sont considérés comme ceux de l'Attaque normale.
- Chaque fois que vous infligez des dégâts, {0} Tisseur(s) de rêves sera invoqué. Vous pouvez invoquer 1 Tisseur de rêves chaque seconde jusqu'il y a {1} Tisseurs de rêves.

### Passif inherent 1

- Id interne de competence: `1003104`
- Nom: `« Remède »E`

Description

Le Bonus de soin est augmenté de {0}.

### Passif inherent 2

- Id interne de competence: `1003105`
- Nom: `« Toxine »`

Description

Quand vous lancez la Compétence d'Écho, le bonus de Dégâts Havoc est augmenté de {0} pendant {1} secondes. Cet effet peut être cumulé {2} fois.

### Competence d'Intro

- Id interne de competence: `1003106`
- Nom: `Errance`

Description

Ondulation
Attaquer la cible pour infliger des Dégâts Havoc.
Appuyer brièvement sur la touche de l'Attaque normale pour lancer l'Attaque normale III.

Déferlante
Pendant le « Mirage », la Compétence d'Intro devient « Déferlante », qui lance 3 Attaques coopératives quand elle attaque la cible. Cela inflige des Dégâts Havoc. Après le lancement de la « Déferlante », le combo de l'Attaque normale « Piqûre spectrale » sera réinitialisé.

Resume court

Ondulation
Infliger des Dégâts Havoc.

Déferlante
Pendant le « Mirage », la Compétence d'Intro devient « Déferlante », qui inflige des Dégâts Havoc.

### Circuit Forte

- Id interne de competence: `1003107`
- Nom: `Entre illusion et réalité`

Description

Mirage
- L'Attaque normale devient l'Attaque normale « Piqûre spectrale », qui effectue jusqu'à 3 attaques consécutives pour infliger des Dégâts Havoc. Cette attaque peut être lancée en l'air. Les points d'Endurance seront consommés si l'Attaque normale « Piqûre spectrale » est lancée en l'air. De plus, le combo de l'Attaque normale « Piqûre spectrale » ne sera pas réinitialisé.
- Quand l'Attaque normale « Piqûre spectrale » touche la cible, vous consommez {0} points de « Flou » pour obtenir {1} points de « Frisson ». Cela restaure le PV de tous les personnages de l'équipe à proximité.
- Quand vous lancez l'Attaque normale III

Resume court

Mirage
- L'Attaque normale devient l'Attaque normale « Piqûre spectrale ». Cela effectuer jusqu'à 3 attaques consécutives pour infliger des Dégâts Havoc.
- Quand l'Attaque normale « Piqûre spectrale » touche la cible, vous consommez {1} points de « Flou » pour obtenir {1} points de « Frisson ». Cela restaure le PV de tous les personnages de l'équipe à proximité.
- L'Attaque aérienne devient « Vortex abyssal ». Appuyer brièvement sur Sauter pour consommer les points d'Endurance et attaquer. Cela inflige des Dégâts Havoc.
- La Contre-attaque d'esquive devient « Frappe des ombres ». Cela inflige des Dégâts Havoc.
- Quand l'Attaque aérienne « Vortex abyssal » ou la Contre-attaque d'esquive « Frappe des ombres » touche la cible, vous consommez {0} point(s) de « Flou » pour obtenir {1} point(s) de « Frisson ». Cela restaure le PV de tous les membres de l'équipe à proximité.
- Le « Mirage » sera annulé quand les points de « Flou » sont épuisés.

Forte circuit « Vol de perception »
Pendant le « Mirage », si vous avez {3} point(s) de « Frisson », la Compétence résonatrice devient « Vol de perception ».
Infliger des Dégâts Havoc. Ces dégâts sont considérés comme ceux de l'Attaque normale. Imposer le Rêve brumeux à la cible et restaurer les PV de tous les membres de l'équipe à proximité.
Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.

Renaissance abyssale
Après le lancement de la Compétence d'Intro, quand les membres lancent la Compétence d'Écho, ils obtiennent {4} points d'Énergie concertante. L'effet peut être déclenché 1 fois par un même Écho, jusqu'à 6 fois.

« Flou »
Vous pouvez accumuler {6} points de « Flou ».
Quand vous lancez la Compétence d'Intro, vous obtenez {7} point(s) de « Flou ».
Quand l'Attaque normale III touche la cible, vous obtenez {8} point(s) de « Flou ».
Quand vous lancez la Compétence résonatrice « Marche élégante », vous obtenez {9} point(s) de « Flou ».
Quand vous lancez la Libération résonatrice « Étouffement insidieux », vous obtenez {10} point(s) de « Flou ».
Si vous êtes dans l'eau, vous obtenez {12} point(s) de « Flou » toutes les {11} secondes.

« Frisson »
Vous pouvez accumuler {13} point(s) de « Frisson ».
Quand l'Attaque normale « Piqûre spectrale », vous obtenez {14} point(s) de « Frisson ».
Quand l'Attaque aérienne « Vortex abyssal » ou la Contre-attaque d'esquive « Frappe des ombres » touche la cible, vous obtenez {15} point(s) de « Frisson ».

### Passif utilitaire

- Id interne de competence: `1003108`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1003109`
- Nom: `Tentacules doux`

Description

Les Dégâts Havoc du prochain membre actif sont intensifiés de {0}, ceux de Compétence résonatrice sont intensifiés de {1}. Cet effet dure {2} secondes, il disparaît quand le membre actif est changé.
