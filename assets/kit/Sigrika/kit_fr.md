# Sigrika Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Sigrika`
- Skill base id: `10051`
- Localized range used: `490000000-530000000`

## Keywords

### Point final

{0} Points finaux seront accordés après le lancement de l'Attaque lourde - Schémas runiques, sa limite maximale est de 100 points.

### Déchiffrage

Sigrika entre en état de Déchiffrage qui dure {0} secondes lorsque l'Attaque normale VI a été lancée. L'effet disparaît lorsque le membre actif est changé.

### Rune

Sigrika peut avoir {0} Runes, la limite des Runes est {1} si elle n'a pas de bonus de Point final. Si elle obtient une Rune quand la limite est atteinte, une nouvelle décale toutes les runes d'un emplacement vers la gauche et la Rune la plus à gauche sera supprimée. {2} Points finaux permettent à Sigrika de continuer à accumuler {3} Runes.
Une Rune : Confiance sera accordée dès que l'Attaque normale - Élucidé ou la Contre-attaque d'esquive - Déchiffrage touche une cible pendant le lancement de la compétence.
Une Rune : Réponse sera accordée dès que la Compétence résonatrice « MÉGA BOUM-BOUM ! » ou la Compétence résonatrice « Solisien à la rescousse » touche une cible pendant le lancement de la compétence./

### Coalescence

La prochaine fois que Sigrika obtient la Rune, une Rune identique sera accordée et la Coalescence se termine.
Si Sigrika a le bonus d'Éclatement et celui de la Coalescence, celui de Coalescence effet en premier.
Si Sigrika a {0} Points finaux, la Coalescence ne prend pas d'effet.

### Éclatement

La prochaine fois que Sigrika obtient la Rune, une Rune différente sera accordée et l'Éclatement se termine.
Si Sigrika a le bonus d'Éclatement et celui de la Coalescence, celui de Coalescence effet en premier.
Si Sigrika a {0} Points finaux, l'Éclatement ne prend pas d'effet.

### « Vitalité solisienne »

Lorsque un membre de l'équipe à proximité lance la Compétence d'Écho, Sigrika obtient {0} points de « Vitalité solisienne, jusqu'à un maximum de {1}. Le record sera réinitialisé lorsque la Compétence d'Outro « En cet instant précis » est lancée.

### « Don inné ? »

Le « Don inné ? » peut être cumulé jusqu'à un maximum de {0} fois, chaque cumul intensifie les dégâts d'Éruption runique, de Fouet à chaînes runiques de Solisien runique et du Forte circuit « Apprends mon vrai nom » de {1}.
Cet effet sera annulé dès que Sigrika lance son Forte Circuit « Apprends mon vrai nom » ou que le membre actif est changé.

### Interruption de tonalité

Lorsque les points de dissonance de la cible sont pleins, elle sera affectée par l'état d'Hors-tonalité :
Les membres de l'équipe peuvent lancer l'Interruption de tonalité pour infliger des dégâts à la cible, puis, l'état d'Hors-tonalité se termine.
Si la cible est du Niveau Onde, certaines compétences des membres de l'équipe vont infliger directement un dégât d'Interruption de tonalité lorsqu'elles touchent. Puis, l'état d'Hors-tonalité de la cible se termine.

## Skills

### Attaque normale

- Id interne de competence: `1005101`
- Nom: `Un, deux, trois…Z`

Description

Attaque normale
Lance jusqu'à 4 attaques consécutives pour infliger des Dégâts Aero.
Sigrika entre en état de Déchiffrage qui dure {0} secondes lorsque l'Attaque normale IV a été lancée. L'effet est annulé lorsque le membre actif a été changé.
Si elle a au moins {1} Points finaux, son attaque normale commence par l'Attaque normale II.

Attaque normale - Élucidé
Pendant l'état de Déchiffrage, appuyez brièvement sur l'Attaque normale sur le sol pour lancer l'Attaque normale - Élucidé pour infliger des Dégâts Aero, qui sont des dégâts de Compétence d'Écho.
Lorsqu'elle est lancée, l'état de Déchiffrage se termine.

Attaque lourde
Consomme des points d'Endurance pour infliger des Dégâts Aero.
Après qu'une Attaque lourde est lancée, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale II.

Attaque aérienne
Consomme des points d'Endurance pour effectuer une Attaque plongeante, qui inflige des Dégâts Aero.
Après qu'une Attaque plongeante est lancée, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale II.

Contre-attaque d'esquive
Appuyez brièvement sur l'Attaque normale après une Esquive réussie sur le sol pour attaquer la cible et infliger des Dégâts Aero.
Après qu'une Contre-attaque d'esquive est lancée, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale IV.

Contre-attaque d'esquive - Déchiffrage
Pendant l'état de Déchiffrage, appuyez brièvement sur l'Attaque normale après une Esquive réussie sur le sol pour lancer la Contre-attaque d'esquive - Déchiffrage et infliger des Dégâts Aero, qui sont les dégâts de Compétence d'Écho.
Lorsqu'elle est lancée, l'état de Déchiffrage se termine.

Contre-attaque d'esquive en l'air
Appuyez brièvement sur l'Attaque normale après une Esquive réussie en l'air pour attaquer la cible et infliger des Dégâts Aero.
Après qu'une Contre-attaque d'esquive en l'air est lancée, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale II.

Resume court

Attaque normale
Inflige des Dégâts Aero.
Sigrika entre en état de Déchiffrage lorsque l'Attaque normale IV est lancée. L'Attaque normale renforcée est disponible pendant l'état de Déchiffrage.

### Competence resonatrice

- Id interne de competence: `1005102`
- Nom: `Combat rapproché royan`

Description

BOUM-BOUM !
Inflige des Dégâts Aero.
Après que BOUM-BOUM ! est lancé, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale III.

MÉGA BOUM-BOUM !
Pendant l'état de Déchiffrage, appuyez brièvement sur la Compétence résonatrice quand Sigrika est au sol pour lancer MÉGA BOUM-BOUM !, infligeant des Dégâts Aero qui sont des dégâts de Compétence d'Écho.
Lorsqu'il est lancé, l'état de Déchiffrage se termine.

Solisien à la rescousse
Pendant l'état de Déchiffrage, si Sigrika a au moins {0} Points finaux, appuyez brièvement sur la Compétence résonatrice sur le sol pour lancer Solisien à la rescousse pour infliger des Dégâts Aero, qui sont des dégâts de Compétence d'Écho.
Lorsqu'il est lancé, l'état de Déchiffrage se termine.

Resume court

BOUM-BOUM !
Inflige des Dégâts Aero.

MÉGA BOUM-BOUM !
Pendant l'état de Déchiffrage, appuyez brièvement sur la Compétence résonatrice sur le sol pour lancer MÉGA BOUM-BOUM ! qui inflige des Dégâts Aero.

Solisien à la rescousse
Pendant l'état de Déchiffrage, si Sigrika a au moins {0} Points finaux, appuyez brièvement sur la Compétence résonatrice sur le sol pour lancer Solisien à la rescousse pour infliger des Dégâts Aero.

### Liberation resonatrice

- Id interne de competence: `1005103`
- Nom: `Là où la confiance me mène !`

Description

Inflige des Dégâts Aero qui sont considérés comme ceux de la Compétence d'Écho. Sigrika obtient le bonus d'Éclatement qui dure {0} secondes.

Éclatement
La prochaine fois que Sigrika obtient la Rune, une Rune supplémentaire différente sera accordée et l'Éclatement sera annulé.
Si Sigrika a le bonus d'Éclatement et celui de Coalescence, la Coalescence prendra effet en premier.
Si Sigrika a {1} Points finaux, l'Éclatement ne prend pas d'effet.

Resume court

Inflige des Dégâts Aero qui sont considérés comme ceux de la Compétence d'Écho. Sigrika obtient le bonus d'Éclatement.

### Passif inherent 1

- Id interne de competence: `1005104`
- Nom: `Vrais sens invoqués:`

Description

Sigrika obtient le bonus de Coalescence qui dure {0} secondes après le lancement de la Compétence d'Intro « Étymologie de l'illumination ».

Coalescence
La prochaine fois que Sigrika obtient la Rune, une Rune identique sera accordée et la Coalescence sera annulée.
Si Sigrika a le bonus d'Éclatement et celui de la Coalescence, celui de Coalescence prendra effet en premier.
Si Sigrika a {1} Points finaux, la Coalescence ne prend pas d'effet.

Resume court

Sigrika obtient le bonus de Coalescence après le lancement de la Compétence d'Intro « Étymologie de l'illumination ».

### Passif inherent 2

- Id interne de competence: `1005105`
- Nom: `Vrais sens alignés`

Description

Lorsqu'un membre de l'équipe lance une Compétence d'Écho, Sigrika obtient 1 cumul de Bénédiction des runes, jusqu'à {0} cumuls. L'effet peut être déclenché 1 fois par les Échos de même nom.
L'effet est réinitialisé une fois qu'un nouveau membre a été déployé dans l'équipe.

Bénédiction des runes
Chaque cumul de Bénédiction des runes augmente le Bonus de Dégâts Aero de {1} du membre actif et son Bonus de Dégâts de Compétence d'Écho de {2}.
Lorsqu'il y a {3} cumuls de Bénédiction des runes, le Bonus de Dégâts Aero et celui de Dégâts de Compétence d'Écho sont augmentés de {4} de manière additionnelle.

Si la Recharge résonante de Sigrika dépasse {5}, {6} de Recharge résonante dépassé augmente {7} de Bonus de Dégâts de Compétence d'Écho, jusqu'à un maximum de {8}.

Resume court

Quand un membre de l'équipe lance une Compétence d'Écho, les Bonus de Dégâts Aero et de Dégâts de Compétence d'Écho du membre actif sont augmentés et Sigrika obtient un bonus supplémentaire.

Sigrika obtient un Bonus de Dégâts de Compétence d'Écho en fonction de sa Recharge résonante.

### Competence d'Intro

- Id interne de competence: `1005106`
- Nom: `Étymologie de l'illumination`

Description

Inflige des Dégâts Aero.
Après que la Compétence d'Intro est lancée, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale II.

Resume court

Inflige des Dégâts Aero.

### Circuit Forte

- Id interne de competence: `1005107`
- Nom: `Dans l'étreinte de l'infini`

Description

Attaque lourde - Schémas runiques
Appuyez longuement sur l'Attaque normale pour lancer l'Attaque lourde - Schémas runiques pour consommer 2 Runes et infliger des Dégâts Aero. Les bonus seront accordés selon les types de Runes consommées :
- Si les Runes consommées sont une « Rune : Confiance » et une « Rune : Réponse », le bonus d'Éruption runique sera accordé.
- Si les Runes consommées sont deux « Runes : Confiance, le bonus de Fouet à chaînes runiques sera accordé.
- Si les Runes consommées sont deux « Runes : Réponse, le bonus de Solisien runique sera accordé.
Quand une Rune est consommée, si Sigrika a au moins {0} points de « Vitalité solisienne », {1} points de « Vitalité solisienne » seront consommés et les multiplicateurs de dégâts d'Éruption runique, du Fouet à chaînes runiques et du Solisien runique cette fois sont augmentés de {2} et elle obtient un cumul de « Don inné ? ».
Quand une Rune est consommée, si Sigrika a moins de {3} points de « Vitalité solisienne », tous les points de « Vitalité solisienne » seront consommés. {4} points de « Vitalité solisienne » consommés intensifient les dégâts d'Éruption runique, de Fouet à chaînes runiques et de Solisien runique de {5}.
L'Attaque lourde - Schémas

Resume court

« Rune »
Lorsque l'Attaque normale - Élucidé ou la Contre-attaque d'esquive - Déchiffrage touche la cible, une Rune : Confiance sera accordée.
Lorsque la Compétence résonatrice « MÉGA BOUM-BOUM ! » ou la Compétence résonatrice « Solisien à la rescousse » touche la cible, une Rune : Réponse sera accordée.

« Vitalité solisienne »
Lorsqu'un membre de l'équipe à proximité lance la Compétence d'Écho, Sigrika obtient des points de « Vitalité solisienne ».

Attaque lourde - Schémas runiques
Appuyez longuement sur l'Attaque normale pour consommer 2 Runes et infliger des Dégâts Aero. Les bonus différents seront accordés et les dégâts des attaques dérivées différentes seront infligés en fonction des Runes consommées.
Si Sigrika a au moins {0} points de « Vitalité solisienne », elle obtient un bonus de dégâts et 1 cumul de « Don inné ? ».

« Don inné ? »
Les cumuls de « Don inné ? » intensifient les dégâts du Forte Circuit « Apprends mon vrai nom » et des attaques dérivées de l'Attaque lourde - Schémas runiques.

« Point final »
Les Points finaux seront accordés après que l'Attaque lourde - Schémas runiques a été lancée.

Forte circuit « Apprends mon vrai nom »
Si les Points finaux sont pleins, appuyez longuement sur la Compétence résonatrice pour lancer le Forte Circuit « Apprends mon vrai nom » pour infliger beaucoup de Dégâts Aero qui sont des dégâts de Compétence d'Écho.

### Passif utilitaire

- Id interne de competence: `1005108`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

Resume court

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1005109`
- Nom: `En cet instant précis`

Description

Lance une attaque pour infliger des Dégâts Aero équivalents à {0} de l'ATQ de Sigrika. Sigrika accumule {1} points d'Encapsulation qui durent {2} secondes.

Encapsulation
Lorsqu'un membre de l'équipe à proximité lance une Compétence d'Écho, la cible sera immobilisée et {3} point d'Encapsulation sera consommé. Un maximum de {4} points d'Encapsulation peut être accumulé.
Tous les points d'Encapsulation sont supprimés dès que Sigrika n'est plus dans l'équipe.

Resume court

Attaque la cible et inflige des Dégâts Aero. Sigrika accumule des points d'Encapsulation, ce bonus permet aux membres de l'équipe à proximité de rendre les cibles immobiles lorsqu'ils lancent des compétences d'Écho.

### Competence speciale 10

- Id interne de competence: `1005110`

Description

Si les points de dissonance de la cible sont pleins, l'Interruption de tonalité peut être lancée.
Dans un certain délai après le lancement de l'Interruption de tonalité, appuyez brièvement sur l'Attaque normale pour lancer l'Attaque normale III.
