# Rover-Aero Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Rover-Aero`
- Skill base id: `10032`
- Localized range used: `490000000-530000000`

## Keywords

### Corde de vent

Vous pouvez avoir 120 points de « Corde de vent ».
Chaque coup de l'Attaque aérienne « Danse des nuées » touche la cible, vous obtenez 25 points de « Corde de vent ».
Quand vous lancez la Compétence d'Intro, vous obtenez 20 points de « Corde de vent ».
Quand l'Attaque normale III, l'Attaque normale IV et la Contre-attaque d'esquive touche la cible, vous obtenez 10 points de « Corde de vent ».

### Effet de la lumière spectro

- Si la cible est affectée par l' « Effet de la lumière spectro », il subit les Dégâts Spectro à l'intervalle régulière. Chaque fois que le dégât est infligé, 1 pile de l'Effet de la lumière spectro sera effacée.
- Les Dégâts infligés par l'Effet de la lumière spectro seront augmentés considérablement selon les piles de l'effet accumulées.

### Effet de ravage havoc

- Si la cible est affectée par l'Effet de ravage havoc, sa DEF est réduite.
- L'Effet de ravage havoc peut se cumuler jusqu'à 3 fois par défaut. Chaque cumul réduit la DEF de la cible de 2%./

### Effet de l'explosion fusion

- Si les cumuls de l'Effet de l'explosion fusion atteignent son maximum, une Explosion sera déclenchée et les cumuls accumulés seront supprimés. Cela inflige beaucoup de Dégâts Fusion aux ennemis.
- L'Effet de l'explosion fusion peut être cumulé jusqu'à 10 fois par défaut, et chaque cumul augmente les dégâts infligés.

### Effet de givre glaçant

- L'application d'un Effet de givre glaçant inflige des dégâts Glacio.
- Si la cible a été affectée par l'Effet de givre glaçant, sa vitesse de déplacement est réduite progressivement selon les piles de l'effet accumulées.
- Si le nombre de cumuls de l'Effet de givre glaçant atteint son maximum, la cible est gelée et les cumuls sont supprimés. Vous pouvez vous débattre rapidement pour vous libérer de l'état de gel.
- L'Effet électromagnétique peut être cumulé jusqu'à 10 fois par défaut, et chaque cumul augmente les dégâts infligés et la durée de l'état de gel.

### Effet électromagnétique

- Un ennemi affecté par l'Effet électromagnétique subit des dégâts Electro réguliers pendant toute la durée de l'effet. La moitié des cumuls de cet effet est réduite à chaque déclenchement de dégâts.
- Si un Effet électromagnétique est appliqué à un ennemi déjà affecté par le nombre maximal de cumuls, celui-ci se transforme en un cumul d'Explosion électromagnétique.
- L'Explosion électromagnétique augmentera le prochain dégât infligé par l'Effet électromagnétique, elle sera supprimée lorsque le dégât a été déclenché.
- L'Effet électromagnétique peut être cumulé jusqu'à 10 fois par défaut, et chaque cumul augmente les dégâts infligés par cet effet.

### Effet de l'érosion aéronautique

- Si la cible est affectée par l' « Effet de l'érosion aéronautique », il subit les Dégâts Spectro à l'intervalle régulière.
- Les Dégâts infligés par l'Effet de l'érosion aéronautique seront augmentés selon les piles de l'effet accumulées.

## Skills

### Attaque normale

- Id interne de competence: `1003201`
- Nom: `Crevasse de vent`

Description

Attaque normale
Lancer jusqu'à 4 attaques consécutives pour infliger des Dégâts Aero.

Attaque lourde
Consommer les points d'Endurance pour infliger des Dégâts Aero.
- Peu après le lancement de cette attaque, appuyer brièvement sur l'Attaque normale pour lancer directement l'Attaque normale III.

Attaque lourde « Tourbillon tranchant »
Appuyer longuement sur l'Attaque normale après l'Attaque normale III, la Contre-attaque d'esquive ou l'Attaque lourde pour lancer l'Attaque lourde « Tourbillon tranchant ». Cela consomme les points d'Endurance pour infliger des Dégâts Aero.

Attaque aérienne
Consommer les points de l'Endurance pour effectuer une attaque plongeante, qui inflige des Dégâts Aero.
- Appuyer brièvement sur la touche de l'Attaque normale après l'atterrissage pour lancer l'Attaque normale IV.
- Quand les points de « Corde de vent » sont pleins, appuyer brièvement sur la touche de l'Attaque normale après l'atterrissage pour lancer la Compétence résonatrice « Courant indompté ».

Contre-attaque d'esquive
Appuyer brièvement sur l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Aero.

Resume court

Attaque normale
Infliger les Dégâts Aero.

Attaque lourde
Consommer les points d'Endurance pour infliger des Dégâts Aero.

Attaque lourde « Tourbillon tranchant »
Appuyer longuement sur l'Attaque normale après l'Attaque normale III, la Contre-attaque d'esquive ou l'Attaque lourde pour consommer les points d'Endurance et lancer une attaque qui inflige des Dégâts Aero.

Attaque aérienne
Consommer les points d'Endurance pour infliger des Dégâts Aero.

Contre-attaque d'esquive
Infliger les Dégâts Aero.

### Competence resonatrice

- Id interne de competence: `1003202`
- Nom: `Briseur d'illusions`

Description

Rafale réveillante
Lancer une attaque en l'air pour infliger les Dégâts Aero.

Coupure céleste
Lorsque vous êtes en l'air, lancez la Compétence résonatrice pour infliger des Dégâts Aero. Après qu'elle a touché la cible, toutes les piles d'« Effet de la lumière spectro », « Effet de ravage Havoc », « Effet de l'explosion fusion », « Effet de givre glaçant » et « Effet électromagnétique » seront supprimées. Les piles supprimées sont ensuite remplacées par celles de l'« Effet de l'érosion aéronautique ».

Resume court

Rafale réveillante
Infliger les Dégâts Aero.

Coupure céleste
Lorsque vous êtes en l'air, lancez la Compétence résonatrice pour infliger des Dégâts Aero. Dès qu'elle touche la cible, toutes les piles d'« Effet de la lumière spectro », « Effet de ravage Havoc », « Effet de l'explosion fusion », « Effet de givre glaçant » et « Effet électromagnétique » seront supprimées. Les piles supprimées sont ensuite remplacées par celles de l'« Effet de l'érosion aéronautique ».

### Liberation resonatrice

- Id interne de competence: `1003203`
- Nom: `Tempête ultime`

Description

Libérer la force d'Œil du cyclone pour infliger les Dégâts Aero. Vous restaurez les PV de tous les membres de l'équipe à proximité.
Cette attaque peut être lancée en l'air près du sol.

Resume court

Infliger les Dégâts Aero et vous restaurez les PV de tous les membres de l'équipe à proximité.
Cette attaque peut être lancée en l'air près du sol.

### Passif inherent 1

- Id interne de competence: `1003204`
- Nom: `Sable dans l'orage`

Description

Quand vous lancez la compétence d'Outro « Bourrasque incessante », l'ATQ est augmentée de {0} pendant {1} secondes.

Resume court

Quand vous lancez la compétence d'Outro, l'ATQ est augmentée de {0} pendant {1} secondes.

### Passif inherent 2

- Id interne de competence: `1003205`
- Nom: `Vents infinis`

Description

La Capacité de Soin de Libération résonatrice « Tempête ultime » est augmentée de {0}.

Resume court

La Capacité de Soin de Libération résonatrice est augmentée de {0}.(

### Competence d'Intro

- Id interne de competence: `1003206`
- Nom: `Bourrasque incessante`

Description

Infliger les Dégâts Aero.

Resume court

Infliger les Dégâts Aero.

### Circuit Forte

- Id interne de competence: `1003207`
- Nom: `Spirale de zéphyr`

Description

Attaque aérienne «Danse des nuées »
Cette compétence effectue jusqu'à 2 attaques consécutives pour infliger les Dégâts Aero et restaurer les PV de tous les membres de l'équipe à proximité. Ces dégâts sont considérés comme ceux de Compétence résonatrice.
Elle peut être lancée de 3 manières suivantes :
- Appuyez brièvement sur l'Attaque normale peu après le lancement de la Compétence résonatrice « Rafale réveillante ».
- Appuyez brièvement sur l'Attaque normale peu après le lancement de la Compétence d'Intro.
- Appuyez brièvement sur l'Attaque normale peu après le lancement de l'Attaque lourde « Tourbillon tranchant ».
Quand vous lancez l'Attaque aérienne « Danse des nuées », appuyez longuement sur l'Attaque normale pour lancer une Attaque aérienne, qui est l'une des Attaques normales.

Compétence résonatrice « Courant indompté »
- Quand les points de « Corde de vent » sont pleins, la Compétence résonatrice « Rafale réveillante » devient une autre Compétence résonatrice « Courant indompté ». Cela effectue jusqu'à 2 attaques consécutives, chaque coup consomme 60 points d'Énergie particulière et inflige des Dégâts Aero. Ces dégâts sont considérés comme ceux de Compétence résonatrice.
Pendant un certain délai après le lancement du 1er coup, si le membre actif est changé, le 2ème sera lancé automatiquement.

« Corde de vent »
Vous pouvez accumuler 120 points de « Corde de vent ».
Chaque fois qu'un coup de l'Attaque aérienne « Danse des nuées » touche la cible, vous obtenez 25 points de « Corde de vent ».
Quand vous lancez la Compétence d'Intro, vous obtenez 20 point(s) de « Corde de vent ».
Quand l'Attaque normale III, l'Attaque normale IV ou la Contre-attaque d'esquive touche la cible, vous obtenez 10 points de « Corde de vent ».

Resume court

Attaque aérienne « Danse des nuées »
Après avoir lancé la Compétence résonatrice « Rafale réveillante », la Compétence d'Intro ou l'Attaque lourde « Tourbillon tranchant », vous pouvez lancer l'Attaque aérienne « Danse des nuées ». Cela inflige les Dégâts Aero et restaure les PV de tous les membres de l'équipe à proximité.

Compétence résonatrice « Courant indompté »
L'Attaque aérienne « Danse des nuées », la Compétence d'Intro, l'Attaque normale et la Contre-attaque d'esquive vous permettent d'obtenir les points de « Corde de vent ».
- Quand les points de « Corde de vent » sont pleins, lancez la Compétence résonatrice «  Courant indompté » pour infliger les Dégâts Aero.

### Passif utilitaire

- Id interne de competence: `1003208`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

Resume court

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1003209`
- Nom: `Grondement orageux`

Description

Tous les membres de l'équipe à proximité obtiennent l'effet de « Royaume d'Éole » qui dure {0} secondes. Pendant le « Royaume d'Éole » :
- Une fois l'attaque a touché la cible, les piles d'« Effet de l'érosion aéronautique » applicables à la cible sont augmentées de {1} pendant {2} secondes. Cet effet n'est pas cumulable.

Resume court

Après qu'une attaque des membres de l'équipe à proximité a touché la cible, les piles d' « Effet de l'érosion aéronautique » qui peuvent être imposées à la cible sont augmentées de {1}.
