# Phrolova Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Phrolova`
- Skill base id: `10037`
- Localized range used: `490000000-530000000`

## Keywords

### Réincarnation

Attaque normale « Mouvement du destin et de la finale »
En état de « Réincarnation », appuyez brièvement sur l'Attaque normale au sol pour lancer le « Mouvement du destin et de la finale » qui inflige des Dégâts Havoc et immobilise la cible. Ces Dégâts sont considérés comme des Dégâts de la Compétence résonatrice.
L'état de « Réincarnation » sera terminé après que ceci est lancée.

Compétence résonatrice « Murmure d'un rêve obsédant »
En état de « Réincarnation », appuyez brièvement sur la Compétence résonatrice au sol pour lancer le « Murmure d'un rêve obsédant » qui inflige des Dégâts Havoc. Ces dégâts sont considérés comme ceux de la Compétence résonatrice.
L'état de « Réincarnation » sera terminé après que ceci est lancée.

### Note fugace

Phrolova peut avoir 6 « Notes fugaces. Si la limite maximale est atteinte, une nouvelle Note fugace décale toutes les Notes fugaces d'un emplacement vers la gauche et la Note fugace - Cordes ou la Note fugace - Vents la plus à gauche sera supprimée.
Quand l'Attaque normale III ou le Mouvement du destin et de la finale touche la cible, vous obtenez 1 Note fugace - Cordes.
Obtient 1 Note fugace - Vents quand les Compétences résonatrices « Murmure d'un rêve fuyant » et « Murmure d'un rêve obsédant » touchent la cible.
Après que la Compétence essentielle « Altération » est activée, quand la Suite de Quietus, la Suite de l'immortalité ou la Compétence d'Écho est lancée, la prochaine Note fugace obtenue deviendra la Note fugace - Cadenza.
Il est impossible d'obtenir la « Note fugace pendant l'Accord conclusif.

### Accord conclusif

Après que la Finale écarlate est lancée, Phrolova entre en état d' « Accord conclusif ».
La « Valse de l'abîme délaissé » est disponible en état de « Accord conclusif ».

### Son résiduel

La limite maximale de « Son résiduel » est {0}.
Si Phrolova n'est pas le membre actif de l'équipe, elle obtient {1} point(s) de « Son résiduel » quand l'Attaque renforcée - Hecate : Cordes, l'Attaque renforcée - Hecate : Vents ou l'Attaque renforcée - Hecate : Cadenza est lancée.
Tous les points de « Son résiduel » seront supprimés toutes les {2} secondes si l'équipe ne participe pas au combat.

### Maestro

L'ATQ est augmentée de {1}.
Phrolova sera suspendue dans les airs et ordonnera à Hecate de combattre. Hecate partagera des attributs de Phrolova.
Les Notes fugaces seront joués selon l'ordre dans lequel elles ont été obtenues, chaque « Note fugace » joue pendant {0} seconde(s).

## Skills

### Attaque normale

- Id interne de competence: `1003701`
- Nom: `Mouvement de la vie et la mort`

Description

Attaque normale
Lancer jusqu'à 3 attaques consécutives qui infligent des Dégâts Havoc.
Phrolova entre en état de Réincarnation lorsqu'elle lance l'Attaque normale III.

Attaque lourde
Consomme des points d'Endurance pour attaquer la cible et infliger des Dégâts Havoc.
Appuyez brièvement sur la touche de l'Attaque normale après avoir lancé cette attaque pour effectuer une Attaque normale II.

Finale écarlate
La Composition est disponible toutes les {1} secondes.
L'Attaque lourde deviendra la Finale écarlate si les trois conditions suivantes sont remplies :
- Avoir 6 « Notes fugaces ».
- La « Composition » est activée.
- Ne pas être en état d'« Accord conclusif ».

La « Finale écarlate » consomme des points d'Endurance pour attirer et immobiliser les cibles à proximité et infliger des Dégâts Havoc. Ces Dégâts sont ceux de la Compétence résonatrice.
Chaque point de « Son résiduel » augmente le multiplicateur de dégâts de cette attaque.
Le lancement de cette compétence sera considéré comme celui de la Compétence d'Écho.
Lorsque cette compétence est lancée, la Composition commence à charger et l'« Accord conclusif » sera activé.

Attaque aérienne
Consomme des points de l'Endurance pour effectuer une attaque plongeante, qui inflige des Dégâts Havoc.

Contre-attaque d'esquive
Appuyez brièvement sur l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Havoc.
Appuyez brièvement sur la touche de l'Attaque normale pour lancer l'Attaque normale III.

Resume court

Attaque normale
Infliger des Dégâts Havoc.

Attaque lourde
Infliger des Dégâts Havoc.

Attaque lourde renforcée
Lorsque l'énergie particulière est pleine, l'Attaque lourde renforcée est disponible. Elle inflige beaucoup de Dégâts Havoc qui sont considérés comme ceux de la Compétence résonatrice.
Le Son résiduel augmente le multiplicateur de dégâts pour cette fois.
Le lancement de cette compétence est considéré comme celui d'une Compétence d'Écho. Elle ne peut pas être relancée avant un certain délai.

Attaque aérienne
Infliger des Dégâts Havoc.

Contre-attaque d'esquive
Infliger des Dégâts Havoc.

### Competence resonatrice

- Id interne de competence: `1003702`
- Nom: `Murmure d'un rêve fuyant`

Description

Attaquer la cible pour infliger des Dégâts Havoc.
Lancez cette compétence pour entrer en état de « Réincarnation ».

Resume court

Infliger des Dégâts Havoc.

### Liberation resonatrice

- Id interne de competence: `1003703`
- Nom: `Valse de l'abîme délaissé`

Description

Valse de l'abîme délaissé
L'Énergie résonatrice maximale de Phrolova est 0. La Valse de l'abîme délaissé ne consomme pas d'énergie résonatrice.
La « Valse de l'abîme délaissé » est disponible en état d'« Accord conclusif ».
Après le lancement de cette compétence, l'« Accord conclusif » sera annulé et Phrolova entre en état de « Maestro » qui dure {0} secondes.

Maestro
L'ATQ est augmentée de {5}.
Phrolova sera suspendue dans les airs et ordonnera à Hecate de combattre. Hecate partagera des attributs de Phrolova. Les Dégâts infligés par Hecate n'annulent pas le « Rêve brumeux ».
Les Notes fugaces seront jouées selon son ordre d'acquisition et chaque note se jouera pendant {1} seconde(s).
Si Phrolova est le membre actif de l'équipe, Hecate attaquera selon les ordres de Phrolova. Si Hecate est attaquée, c'est Phrolova qui subira les dégâts.
- Signal - Attaque normale : Appuyez sur l'Attaque normale pour commander Hecate de lancer une Attaque normale d'Hecate. Si Phrolova est le membre actif de l'équipe, après que l'Attaque normale d'Hecate a été lancée {2} fois, la prochaine Attaque normale d'Hecate devien

Resume court

Libération résonatrice
Lancez l'Attaque lourde renforcée pour débloquer la Libération résonatrice.
Après que la Libération résonatrice est lancée, Phrolova entre en état renforcé.

État renforcé
- Si Phrolova est le membre actif de l'équipe, elle peut commander Hecate de lancer l'Attaque normale d'Hecate. après que l'Attaque normale d'Hecate a été lancée {2} fois, la prochaine Attaque normale d'Hecate deviendra une Attaque renforcée d'Hecate.
- L'Attaque normale d'Hecate sera lancée automatiquement si Phrolova n'est pas le membre actif de l'équipe. Quand un membre actif lance une Compétence d'Écho, l'Attaque renforcée d'Hecate sera lancée automatiquement pour attaquer la cible.
- L'état renforcé se termine lorsque Phrolova redevient le membre actif.

Hecate
Attaque normale d'Hecate : Infliger des Dégâts Havoc qui sont considérés comme ceux de la Compétence d'Écho.
Attaque renforcée d'Hecate : Infliger des Dégâts Havoc qui sont considérés comme ceux de la Compétence d'Écho. Si Phrolova n'est pas le membre actif de l'équipe, elle obtient des points de « Son résiduel » quand cette attaque est lancée.

### Passif inherent 1

- Id interne de competence: `1003704`
- Nom: `Altération`

Description

Quand la Compétence d'Écho est lancée, la Résistance à l'interruption est améliorée, les Dégâts subis sont diminués de {0} pendant {1} secondes.
Quand la Suite de Quietus, la Suite de l'immortalité ou la Compétence d'Écho est lancée, la prochaine Note fugace obtenue deviendra la Note fugace - Cadenza.

Resume court

La Résistance à l'interruption est améliorée et les Dégâts subis sont diminués quand la Compétence d'Écho est lancée.
Le prochain point d'énergie particulière deviendra une énergie particulière combinée dès le lancement de la Compétence d'Intro, de la Compétence d'Intro renforcée ou de la Compétence d'Écho.

### Passif inherent 2

- Id interne de competence: `1003705`
- Nom: `Octuor`

Description

Vous obtenez {0} points de « Son résiduel »  lorsque le combat commence. Il est impossible de déclencher cet effet pendant {1} secondes après avoir quitté l'état de combat.
Les Dégâts critiques sont augmentés de {3} chaque fois que vous avez accumulé {2} point(s) de Son résiduel.
Vous pouvez continuer à obtenir les points de « Son résiduel » même s'ils ont atteint leur limite maximale. Chaque point de « Son résiduel » augmente les Dégâts critiques de Phrolova de {4}, jusqu'à {5}. Le bonus de Dégâts critiques sera annulé s'il n'y a plus de « Son résiduel ».

Resume court

Entrer en combat vous fait gagner des points de Son résiduel.
Le Son résiduel peut augmenter les Dégâts critiques.
Si vous obtenez des points de Son résiduel alors que la limite maximale est déjà atteinte, les Dégâts critiques sont augmentés de manière additionnelle.

### Competence d'Intro

- Id interne de competence: `1003706`
- Nom: `Suite de Quietus`

Description

Suite de Quietus
Attaquer la cible pour infliger des Dégâts Havoc.
Appuyez brièvement sur la touche de l'Attaque normale dans un certain délai après le lancement de cette compétence pour lancer l'Attaque normale III.

Suite de l'immortalité
En état de « Maestro », la prochaine Suite de Quietus deviendra la Suite de l'immortalité. Ce remplacement sera annulé si le Salut final est lancé pendant cette durée.
La Suite de l'immortalité immobilise la cible et inflige des Dégâts Havoc, qui sont considérés comme ceux de la Compétence résonatrice.
Appuyez brièvement sur la touche de l'Attaque normale dans un certain délai après le lancement de cette compétence pour lancer l'Attaque normale III.

Resume court

Compétence d'Intro
Infliger des Dégâts Havoc. Vous pouvez lancer l'Attaque normale III ensuite.

Compétence d'Intro renforcée
En état renforcé, la prochaine Compétence d'Intro deviendra la Compétence d'Intro renforcée. Elle inflige des Dégâts Havoc qui sont considérés comme ceux de la Compétence résonatrice.
Après que la Compétence d'Intro renforcée est lancée, vous pouvez lancer l'Attaque normale III ensuite.

### Circuit Forte

- Id interne de competence: `1003707`
- Nom: `Rhapsodie du nouveau monde`

Description

Attaque normale « Mouvement du destin et de la finale »
En état de « Réincarnation », appuyez brièvement sur l'Attaque normale au sol pour lancer le « Mouvement du destin et de la finale » qui immobilise la cible touchée puis inflige des Dégâts Havoc. Ces Dégâts sont considérés comme ceux de la Compétence résonatrice.
L'état de « Réincarnation » sera terminé lorsque cette attaque est lancée.

Compétence résonatrice « Murmure d'un rêve obsédant »
En état de « Réincarnation », appuyez brièvement sur la Compétence résonatrice au sol pour lancer le « Murmure d'un rêve obsédant » qui inflige des Dégâts Havoc. Ces dégâts sont considérés comme ceux de la Compétence résonatrice.
L'état de « Réincarnation » sera terminé lorsque cette compétence est lancée.

« Son résiduel »
Limite de « Son résiduel » : {0}.
Si Phrolova n'est pas le membre actif de l'équipe, elle obtient {1} point(s) de « Son résiduel » lorsque l'Attaque renforcée - Hecate : Cordes, l'Attaque renforcée - Hecate : Vents ou l'Attaque renforcée - Hecate : Cadenza est lancée.
Les points de « Son résiduel » accumulés seront supprimés toutes les {2} secondes si votre équipe ne participe pas au combat.

« Note fugace »
Phrolova peut avoir 6 « Notes fugaces ». Si la limite maximale est atteinte, une nouvelle Note fugace décale toutes les Notes fugaces d'un emplacement vers la gauche. La Note fugace - Cordes ou la Note fugace - Vents la plus à gauche sera supprimée.
Vous obtenez 1 Note fugace - Cordes lorsque l'Attaque normale III ou le Mouvement du destin et de la finale touche la cible.
Vous obtenez 1 Note fugace - Vents lorsque les Compétences résonatrices « Murmure d'un rêve fuyant » ou « Murmure d'un rêve obsédant » touchent la cible.
Après que la Compétence essentielle « Altération » est activée, quand la Suite de Quietus, la Suite de l'immortalité ou la Compétence d'Écho est lancée, la prochaine Note fugace obtenue deviendra la Note fugace - Cadenza.
Impossible d'obtenir la « Note fugace » pendant l'Accord conclusif.

Resume court

Mécanismes d'énergie particulière
Quand l'Attaque normale III ou la Compétence résonatrice est lancée, l'Attaque normale renforcée ou la Compétence résonatrice renforcée pourra être lancée ensuite. Cela inflige des Dégâts Havoc qui seront considérés comme ceux de la Compétence résonatrice.
Lancez l'Attaque normale III ou l'Attaque normale renforcée pour obtenir de l'énergie particulière rouge.
Lancez la Compétence résonatrice ou la Compétence résonatrice renforcée pour obtenir de l'énergie particulière violette.
En état renforcé, l'Attaque renforcée d'Hecate obtiendra des bonus différents selon la couleur de l'énergie particulière actuelle.
Énergie particulière rouge : L'Attaque renforcée d'Hecate peut immobiliser la cible.
Énergie particulière violette : L'Attaque renforcée d'Hecate peut attirer la cible.
Énergie particulière combinée : L'Attaque renforcée d'Hecate peut immobiliser et attirer la cible.

### Passif utilitaire

- Id interne de competence: `1003708`
- Nom: `Cuisine habile`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1003709`
- Nom: `Morceau à finir`

Description

Les Dégâts Havoc du prochain membre actif sont intensifiés de {0} et ceux de l'Attaque lourde sont intensifiés de {1}. L'effet dure {2} secondes, il disparaît quand le membre actif est changé.
Lorsque Phrolova utilise cette compétence en état de « Maestro », l'Attaque renforcée d'Hecate sera déclenchée {3} fois pendant le Maestro en cours, dès qu'un autre personnage devient actif.

Resume court

Les Dégâts Havoc et ceux de l'Attaque lourde du prochain membre actif sont intensifiés. L'effet disparaît quand le membre actif est changé.
Si Phrolova lance cette compétence en état renforcé, une autre Attaque renforcée d'Hecate sera lancée.
