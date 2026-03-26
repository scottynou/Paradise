# Zhezhi Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Zhezhi`
- Skill base id: `10022`
- Localized range used: `490000000-530000000`

## Keywords

### Afflatus

Zhezhi peut cumuler jusqu'à 90 « Afflatus ».
Obtenir les « Afflatus » quand les Attaques normales infligent des dégâts.
Obtenir les « Afflatus » quand vous lancez la Compétence d'Intro.

### Empreinte Phantasmique

Compétence résonatrice « Coup de génie »
Lorsqu'une Empreinte Phantasmique est à proximité de Zhezhi, la Compétence résonatrice est remplacée par le « Coup de Génie ». Lorsqu'elle est lancée, Zhezhi va :
- Se rendre à l'emplacement de l'Empreinte Phantasmique et la retirer, puis invoquer un Esprit blanc pour attaquer la cible et infliger des Dégâts Glacio, qui sont considérés comme des dégâts d'Attaque normale. Les tentatives d'esquive en l'air sont actualisées si l'Empreinte Phantasmique est en l'air.
- Obtenir 1 « Délice du Peintre » qui dure 8 secondes. Cumulable jusqu'à 2 fois.
- Peut être lancé en l'air.

Compétence résonatrice « Coup de maestro »
Lorsqu'une Empreinte Phantasmique est à proximité et qu'il y a 2 « Délices du Peintre », le « Coup de Génie » est remplacé par le « Coup de maestro ». Lorsqu'elle est lancée, Zhezhi va :
- Consommer les « Délices du Peintre ».
- Se rendre à l'emplacement de l'Empreinte Phantasmique et la retirer, puis invoquer un Esprit blanc pour attaquer la cible et infliger des Dégâts Glacio plus considérables. Ces dégâts sont ceux de l'Attaque normale. Ceci augmente le bonus de Dégâts d'Attaque normale de 18 % pendant 27 secondes. Cela réinitialise les tentatives d'esquive en l'air si vous vous déplacez à une Empreinte Phantasmique en l'air.
- Peut être lancé en l'air.

## Skills

### Attaque normale

- Id interne de competence: `1002201`
- Nom: `Pinceau Atténuant`

Description

Attaque normale
Effectuer jusqu'à 3 attaques consécutives et infliger des Dégâts Glacio.

Attaque lourde
Consommer des points d'Endurance pour effectuer une attaque et infliger des Dégâts Glacio.
L'Attaque lourde n'interrompe pas le combo de l'Attaque normale.

Attaque aérienne
Consommer des points d'Endurance pour effectuer jusqu'à 2 attaques consécutives en l'air et infliger des Dégâts Glacio.

Contre-attaque d'esquive
Utilisez l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Glacio.

Resume court

Attaque normale
Infliger les Dégâts Glacio

Attaque lourde
Consommer des points d'Endurance pour infliger les Dégâts Glacio.

Attaque aérienne
Consommer des points d'Endurance pour infliger les Dégâts Glacio.

Contre-attaque d'esquive
Infliger les Dégâts Glacio.

### Competence resonatrice

- Id interne de competence: `1002202`
- Nom: `Manifestation`

Description

Infliger des Dégâts Glacio. Si vous avez plus de 60 points d'« Afflatus】 », vous consommez 60 points d' « Afflatus » pour invoquer l'Empreinte fantasmique : Gauche et l'Empreinte fantasmique : Droite.
- L'appui bref sur le sol invoque les Empreintes fantasmiques sur le sol.
- L'appui long sur le sol et l'appui bref en l'air invoquent les Empreintes fantasmiques en l'air./

Resume court

Infliger les Dégâts Glacio. Si Zhezhi a plus de 60 points d' « Afflatus », elle consomme 60 points d' « Afflatus » et invoque 2 « Empreintes Phantasmiques ».

### Liberation resonatrice

- Id interne de competence: `1002203`
- Nom: `Toile vivante`

Description

Invoquer l'Esprit encré dans le combat.
Peut être lancé en l'air.

Esprit encré
Lorsque le personnage actif dans l'équipe inflige des dégâts, un Esprit encré sera invoqué pour effectuer une attaque coopérative et infliger des Dégâts Glacio, qui sont considérés comme des dégâts de l'attaque normale.
- Invoquer 1 Esprit encré chaque seconde dans les {0} secondes après avoir infligé les dégâts. Cet effet peut être déclenché une fois chaque seconde, mais il ne peut pas être déclenché par les dégâts infligés par l'Esprit encré.
- Vous pouvez invoquer jusqu'à {1} Esprit(s) encré(s) chaque seconde, jusqu'à {2} au total.
- L'effet dure {3} secondes ou jusqu'à le nombre maximum d'Esprit encré soit atteint.

Resume court

Zhezhi invoque l'Esprit encré dans le combat.

Esprit encré
Lorsque le personnage actif dans l'équipe inflige des dégâts, un Esprit encré sera invoqué pour effectuer une attaque coopérative et infliger des Dégâts Glacio.

### Passif inherent 1

- Id interne de competence: `1002204`
- Nom: `Toucher de calligraphe`

Description

Lors du lancement de la Compétence résonatrice « Coup de génie » ou de la Compétence résonatrice « Coup de maestro », l'ATQ augmente de {0} pendant {2} secondes. Cet effet peut être cumulé jusqu'à {1} fois.(

Resume court

Lors du lancement de la Compétence résonatrice « Coup de génie » ou de la Compétence résonatrice « Coup de maestro », l'ATQ augmente de {0} pendant {2} secondes. Cet effet peut être cumulé jusqu'à {1} fois.

### Passif inherent 2

- Id interne de competence: `1002205`
- Nom: `Floraison`

Description

Après le lancement de la Compétence d'Outro, restaurez {0} points d'Énergie résonatrice pour le personnage entrant.

Resume court

Après le lancement de la Compétence d'Outro, restaurez {0} points d'Énergie résonatrice pour le personnage entrant.

Description supplementaire liee

Quand les personnages à proximité dans l'équipe activent la Compétence d'Outro de Zhezhi, ils obtiennent {0} points d'énergie résonatrice.

### Competence d'Intro

- Id interne de competence: `1002206`
- Nom: `Ruines radieusese`

Description

Attaquer la cible et infliger des Dégâts Glacio.

Resume court

Infliger les Dégâts Glacio.

### Circuit Forte

- Id interne de competence: `1002207`
- Nom: `Encre et Lavis`

Description

Empreintes Phantasmiques
Quand Zhezhi lance sa Compétence résonatrice « Manifestation » ou son Attaque lourde « Évocation », elle peut invoquer l'Empreinte Phantasmique.
Vous pouvez avoir jusqu'à 1 « Empreinte Phantasmique » de chaque type. L'Empreinte Phantasmique : Gauche, l'Empreinte Phantasmique : Centre et l'Empreinte Phantasmique : Droite peuvent exister simultanément. Chacune dure {0} secondes.

Attaque lourde : Évocation
Les 5 mouvements ci-dessous consomment des points d'Endurance pour infliger des Dégâts Glacio.
- Appuyer longuement sur la touche d'Attaque normale peu après le lancement de l'Attaque normale III.
- Appuyer brièvement sur l'Attaque normale  après avoir lancé la Compétence résonatrice « Manifestation ».
- Appuyer sur la touche d'Attaque normale après avoir lancé la Compétence résonatrice « Coup de génie » ou la Compétence résonatrice « Coup de maestro ».
- Appuyer longuement sur l'Attaque normale en l'air.
- Appuyer longuement sur l'Attaque normale après une esquive réussie.
Si Zhezhi a au moins 30 points d'« Afflatus » quand vous effectuez l'un de ces mouvements, elle consomme 30 points d'« Afflatus » pour invoquer l'Empreinte Phantasmique : Centre.

Compétence résonatrice : Coup de génie
Lorsqu'une Empreinte Phantasmique est à proximité de Zhezhi, la Compétence résonatrice est remplacée par le « Coup de Génie ». Lorsqu'elle est lancée, Zhezhi va :
- Se rendre à l'emplacement de l'Empreinte Phantasmique et la retirer, puis invoquer un Esprit blanc pour attaquer la cible et infliger des Dégâts Glacio, qui sont considérés comme des dégâts d'Attaque normale. Le compteur d'esquive en l'air est actualisé si l'Empreinte Phantasmique est en l'air.
- Obtenir 1 « Délice du Peintre » qui dure {1} secondes. Cumulable jusqu'à 2 fois.
Peut être lancé en l'air.

Compétence résonatrice : Coup de maestro
Lorsqu'une Empreinte Phantasmique est à proximité et qu'il y a 2 « Délices du Peintre », le « Coup de Génie » est remplacé par le « Coup de maestro ». Lorsqu'elle est lancée, Zhezhi va :
- Consommer les « Délices du Peintre ».
- Se rendre à l'emplacement de l'Empreinte Phantasmique et la retirer, puis invoquer un Esprit blanc pour attaquer la cible et infliger des Dégâts Glacio plus considérables. Ces dégâts sont ceux de l'Attaque normale. Ceci augmente le bonus de Dégâts d'Attaque normale de {2} pendant {3} secondes. Cela actualise le compteur d'Esquive en l'air si vous vous déplacez à une Empreinte Phantasmique en l'air.
Peut être lancé en air.

« Afflatus »
Zhezhi peut cumuler jusqu'à 90 « Afflatus ».
Les Attaques normales permettent d'obtenir des « Afflatus » lorsqu'elles infligent des dégâts.
Lancer la Compétence d'Intro permet d'obtenir des « Afflatus ».

Resume court

Empreintes Phantasmiques
Quand Zhezhi lance sa compétence résonatrice « Manifestation » ou son Attaque lourde « Evocation », elle peut invoquer l'Empreinte Phantasmique.

Attaque lourde : Evocation
Les 5 mouvements ci-dessous consomment des points d'Endurance pour infliger des Dégâts Glacio.
- Appuyer longuement la touche d'Attaque normale peu après le lancement de l'Attaque normale III.
- Appuyer brièvement sur l'
Attaque normale  après avoir lancé la compétence résonatrice « Manifestation ».
- Appuyer sur la touche d'Attaque normale après avoir lancé la Compétence résonatrice « Coup de génie » ou la Compétence résonatrice « Coup de maestro ».
- Appuyer longuement sur la touche d'Attaque normale en air.
- Appuyer longuement sur la touche d'Attaque normale après une esquive réussie.
Si Zhezhi a au moins 30 points d' « Afflatus » quand vous effectuez l'un de ces mouvements, elle consomme 30 « Afflatus » pour invoquer l'Empreinte Phantasmique : Centre

Compétence résonatrice : Coup de génie
- Lorsqu'une Empreinte Phantasmique est à proximité, la Compétence résonatrice est remplacée par le « Coup de Génie ». Lorsqu'elle est lancée, Zhezhi va :
- Infliger les Dégâts Glacio
- Obtenir 1 point de « Délice du Peintre »

Compétence résonatrice : Coup de maestro
- Lorsqu'une Empreinte Phantasmique est à proximité, quand vous avez 2 « Délices du Peintre », le « Coup de Génie » est remplacé par le « Coup de maestro ». Quand celui-ci est lancé, Zhezhi va :
- Infliger plus de Dégâts Glacio et augmenter le bonus de dégâts de l'Attaque normale de Zhezhi.

Règle d'obtenir les « Afflatus »
Zhezhi peut cumuler jusqu'à 90 « Afflatus ».
Les Attaques normales et la Compétence d'Intro vous permettent d'obtenir l' « Afflatus ».

### Passif utilitaire

- Id interne de competence: `1002208`
- Nom: `Cuisine adroite`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

Resume court

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1002209`
- Nom: `Sculpture et Dessin`

Description

Intensifier {0} de Dégâts Glacio du personnage entrant et {1} de ceux de la Compétence résonatrice pendant {2} secondes. L'effet sera terminé si vous changez le personnage.

Resume court

Intensifier les dégâts Glacio du personnage qui entera dans le combat de {0} et ceux de Compétence résonatrice de {1}. L'effet disparaît quand vous changez le personnage.

Description supplementaire liee

Lorsque les personnages à proximité dans l'équipe déclenchent la Compétence d'Outro de Zhezhi, leurs Dégâts Glacio sont intensifiés de {0}, ceux de la Compétence résonatrice sont intensifiés de {1} pendant {2} secondes. L'effet sera terminé si vous changez le personnage.
