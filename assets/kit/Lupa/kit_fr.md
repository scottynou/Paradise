# Lupa Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Lupa`
- Skill base id: `10036`
- Localized range used: `490000000-530000000`

## Keywords

### Flamme de la louve

« Flamme de la louve »
Vous pouvez avoir 100 points de « Flamme de la louve ».
- Obtenir la « Flamme de la louve » lorsque les Attaques Normales atteint la cible.
- Obtenir la « Flamme de la louve » quand la Compétence résonatrice est lancée.
- Obtenir la « Flamme de la louve » quand la Libération résonatrice est lancée.

### Foi de la louve

« Foi de la louve »
Vous pouvez avoir 2 points de « Foi de la louve ».
La « Foi de la louve » dure 10 secondes. La durée est réinitialisée quand vous l'obtenez de manière répétitive. Chaque points de « Foi de la louve » redevient 50 points de « Flamme de la louve ».
- Obtenir 1 point de « Foi de la louve » quand l'Attaque lourde « Morsure de la louve », l'Attaque lourde « Griffe de la louve » et l'Attaque aérienne « Impact de feu » sont lancées.

### Chasse fantastique

Chasse fantastique
L'ATQ des personnages qui ont le bonus de Chasse fantastique est augmenté de 6 %. De plus, le Bonus de Dégâts Fusion est augmenté de 10 % quand la cible est du Niveau Marée ou Seisme. L'effet n'est pas cumulable. S'il y a 3 membres d'attribut Fusion dans l'équipe, le Bonus de Dégâts Fusion est augmenté de 10 % de manière additionnelle quand la cible est du Niveau Marée ou Seisme. Quand le membre actif de l'équipe lance la Compétence d'Intro, l'effet de Chasse fantastique sera amélioré. Il va augmenter le bonus d'ATQ des membres qui ont cette amélioration de manière additionnelle de 6 %, jusqu'à 18 %.
Si l'effet de « Chasse fantastique » de Lupa atteint le maximum, pendant sa durée, elle va entrer en état de « Traque indomptée » et elle peut lancer la Compétence d'Intro « Nulle part où fuir ! ». La Traque indomptée ne pourra pas être activée de manière répétitive par la « Chasse fantastique ».

### Gloire

Libération résonatrice : Gloire
Le lancement de la Libération résonatrice Gloire embrasée par le feu applique l'effet Gloire. Pendant 35 secondes :
Les attaques de tous les personnages de l'équipe ignorent 5 % de la Résistance Fusion. À l'exception de Lupa, pour chaque personnage d'attribut Fusion dans l'équipe,  cet effet augmente de 5 % jusqu'à un maximum de 15 %.

### Balle de match ardente

L'efficacité d'obtenir les points de « Flamme de la louve » est augmentée de 500 % quand les Attaques normales touchent la cible. Impossible de lancer les Compétences résonatrices « Chasse de la louve » et « Croc sauvage ».

## Skills

### Attaque normale

- Id interne de competence: `1003601`
- Nom: `Étoile flamboyante`

Description

Attaque normale
Lancer jusqu'à 4 attaques consécutives pour infliger des Dégâts Fusion.
- Après le lancement de l'Attaque normale III, appuyez sur l'Attaque normale au bon moment pour lancer l'Attaque aérienne I.
- Après le lancement de la Contre-attaque d'esquive, la Chute stellaire, la Compétence résonatrice « Chasse de la louve » ou « Croc sauvage », appuyez sur l'Attaque normale dans un certain délai

Resume court

Attaque normale
Infliger les Dégâts Fusion.

Attaque lourde
Infliger les Dégâts Fusion.

Attaque lourde renforcée
Accumulez les points de Flamme de la louve jusqu'à un certain seuil pour lancer l'Attaque lourde renforcée, qui inflige des Dégâts Fusion.

Attaque aérienne
Infliger les Dégâts Fusion.

Attaque aérienne renforcée
Accumulez les points de Flamme de la louve jusqu'à un certain seuil pour lancer l'Attaque aérienne renforcée, qui inflige des Dégâts Fusion. Ces dégâts sont considérés comme ceux de l'Attaque lourde.

Attaque normale dérivée
Infliger les Dégâts Fusion.

Contre-attaque d'esquive
Infliger les Dégâts Fusion.

### Competence resonatrice

- Id interne de competence: `1003602`
- Nom: `Chasse de la louve`

Description

Lupa lance son drapeau de flamme pour attaquer et obtenir {0} points de « Flamme de la louve ». Cette attaque va infliger des Dégâts Fusion, elle marque la cible pendant {1} secondes. Après le lancement de la Compétence résonatrice « Chasse de la louve », vous pouvez lancer le Croc sauvage dans un certain délai.
Cette compétence peut être lancée en l'air près du sol.
- Lupa va sauter en l'air si vous appuyez longuement sur la Compétence résonatrice, puis appuyez brièvement sur l'Attaque normale pour lancer l'Attaque aérienne I.

Compétence résonatrice « Croc sauvage »
Lupa va attaquer la cible, quand cette compétence est lancée, elle obtient {2} points de « Flamme de la louve ». Cette attaque va infliger des Dégâts Fusion. Le multiplicateur de dégâts infligés aux cibles marquées est augmenté de {3}. Si la Compétence résonatrice « Croc sauvage » n'a pas été lancée ou si le membre actif est changé, la compétence entre en état de recharge. Elle peut être lancée en l'air près du sol.

Resume court

Compétence résonatrice
Infliger les Dégâts Fusion et marquer la cible.
Après le lancement de la Compétence résonatrice, Lupa peut lancer la Compétence résonatrice dérivée dans un certain délai.

Compétence résonatrice dérivée
Infliger des Dégâts Fusion et des Dégâts supplémentaires aux cibles marquées.

### Liberation resonatrice

- Id interne de competence: `1003603`
- Nom: `Gloire embrasée par le feu`

Description

Attaquer la cible pour infliger des Dégâts Fusion. Tous les points de « Foi de la louve » seront consommés pour obtenir {0} points de « Flamme de la louve ». Appuyez brièvement sur l'Attaque normale ou la Compétence résonatrice pour lancer la Compétence résonatrice « Fléau des ennemis ».
Peut être lancée en l'air près du sol.
Quand cette Compétence est lancée, Lupa et les membres de l'équipe seront renforcés. Pendant {1} secondes :
- Les membres de l'équipe obtiennent l'effet de Chasse fantastique.
- Cela permet au membre actif de se libérer immédiatement de l'étourdissement. Et cette esquive est considérée comme réussie s'il est au sol. L'effet peut être déclenché 3 fois.

Chasse fantastique
L'ATQ des personnages qui ont le bonus de Chasse fantastique est augmentée de {2}. De plus, le Bonus de Dégâts Fusion est augmenté de {3} quand la cible est du Niveau Marée ou Séisme. L'effet n'est pas cumulable. S'il y a {7} membres d'attribut Fusion dans l'équipe, le Bonus de Dégâts Fusion est augmenté de {8} de manière additionnelle quand la cible est du Niveau Marée ou Séisme. Quand le membre actif de l'équipe lance la Compétence d'Intro, l'effet de Chasse fantastique sera amélioré. Il va augmenter le bonus d'ATQ des membres qui ont cette amélioration de manière additionnelle de {4}, jusqu'à {5}.
Si l'effet de « Chasse fantastique » de Lupa est amélioré au maximum, pendant sa durée, elle va entrer en état de « Traque indomptée » et elle peut lancer la Compétence d'Intro « Nulle part où fuir ! ». La Traque indomptée peut être activée 1 fois par une « Chasse fantastique ».

Compétence résonatrice « Fléau des ennemis »
Consommer tous les points de « Flamme de la louve » pour infliger les Dégâts Fusion.
Quand le « Fléau des ennemis » est lancé, Lupa entre en état de « Balle de match ardente ».

Balle de match ardente
L'efficacité d'obtenir les points de « Flamme de la louve » est augmentée de {6} quand les Attaques normales touchent la cible. Impossible de lancer les Compétences résonatrices « Chasse de la louve » et « Croc sauvage ».

Resume court

Libération résonatrice
- Les membres de l'équipe obtiennent l'effet de Chasse fantastique. L'effet de « Foi de la louve » sera annulé pour infliger les Dégâts Fusion.
- Puis, appuyez sur l'Attaque normale ou sur la Compétence résonatrice dans un certain délai pour lancer le « Fléau des ennemis ».
Après le lancement de la Libération résonatrice, l'effet de « Chasse fantastique » sera accordé à tous les membres de l'équipe, leur bonus d'ATQ est augmenté. Le membre actif peut se libérer immédiatement de l'étourdissement. Quand un membre actif lance la Compétence d'Intro, l'effet de Chasse fantastique sera amélioré, l'ATQ sera augmentée de manière supplémentaire jusqu'à 2 fois. Pour les personnages bénéficiant du bonus de Chasse fantastique, leur Bonus de Dégâts Fusion est encore amélioré lorsque la cible est du Niveau Marée ou Séisme.

Fléau des ennemis
L'effet de Flamme de la louve sera annulé. Infliger des Dégâts Fusion et entrer en état renforcé.

État renforcé
Les Attaques normales peuvent obtenir plus de points de « Flamme de la louve » quand elles touchent la cible. Impossible de lancer les Compétences résonatrices et la Compétence résonatrice dérivée.

### Passif inherent 1

- Id interne de competence: `1003604`
- Nom: `Retiens mon nom`

Description

{0} secondes après que Lupa est entrée en état de sprint, elle va accélérer. La prochaine Attaque normale des Attaques normales sera remplacée par celle de la « Chute stellaire ».
La résistance à l'interruption de l'Attaque lourde « Morsure de la louve », l'Attaque lourde « Griffe de la louve » et l'Attaque aérienne « Impact de feu » est améliorée.

Resume court

Peu après que Lupa est entrée en état de sprint, elle va accélérer. Sa prochaine Attaque normale va devenir l'Attaque normale dérivée.
Les résistances à l'interruption de l'Attaque lourde renforcée et celle de l'Attaque aérienne renforcée sont améliorées.

### Passif inherent 2

- Id interne de competence: `1003605`
- Nom: `Ovation triomphale`

Description

Quand Lupa élimine une cible marquée, le Temps de recharge de la Compétence résonatrice « Chasse de la louve » est réinitialisé.

Libération résonatrice « Gloire »
Quand la Libération résonatrice « Gloire embrasée par le feu » est lancée, vous obtenez le bonus de « Gloire ». Pendant {0} secondes :
- Les attaques des membres de l'équipe ignorent {1} de la résistance aux Dégâts Fusion. Cet effet sera amélioré de {2} chaque fois qu'un membre d'attribut Fusion autre que Lupa est dans l'équipe, jusqu'à {3}. S'il y a {4} membres d'attribut Fusion dans l'équipe, les attaques des membres ignorent {5} de résistance aux Dégâts Fusion de manière additionnelle.

Resume court

Quand Lupa élimine une cible marquée, le Temps de recharge de sa Compétence résonatrice est réinitialisé.
Quand la Libération résonatrice est lancée, les membres de l'équipe obtiennent l'effet de « Gloire », ses attaques vont ignorer une partie de la résistance aux Dégâts Fusion. L'effet sera amélioré selon le nombre des membres d'attribut Fusion dans l'équipe.

### Competence d'Intro

- Id interne de competence: `1003606`
- Nom: `Concentre-toi, hein`

Description

Attaquer la cible pour infliger des Dégâts Fusion. Après le lancement de la Compétence d'Intro « Concentre-toi, hein ? », appuyez brièvement sur l'Attaque normale pour lancer l'Attaque aérienne III.

Nulle part où fuir !
Pendant la « Traque indomptée » de Lupa, sa prochaine Compétence d'Intro lancée devient « Nulle part où fuir ! ». Quand elle lance « Nulle part où fuir ! », l'effet de « Chasse fantastique » et celui de « Gloire » de tous les membres de l'équipe seront annulés. Elle va infliger des Dégâts Fusion, qui sont ceux de la Libération résonatrice.

Resume court

Compétence d'Intro
Infliger les Dégâts Fusion.

Compétence d'Intro renforcée
Si la « Chasse fantastique » est améliorée au maximum, vous pouvez lancer la Compétence d'Intro renforcée.
Dès le lancement de cette compétence, les effets de « Chasse fantastique » et de « Gloire » de tous les membres de l'équipe seront annulés. Infliger beaucoup de Dégâts Fusion, qui sont ceux de la Libération résonatrice.

### Circuit Forte

- Id interne de competence: `1003607`
- Nom: `Ignis Lupa`

Description

Bannière de flamme
L'ATQ de Lupa est augmentée de {0} pendant {1} secondes quand :
- Elle lance la Compétence résonatrice « Croc sauvage ».
- Elle lance l'Attaque lourde « Morsure de la louve », l'Attaque lourde « Griffe de la louve » ou l'Attaque aérienne « Impact de feu ».
- Elle lance la Libération résonatrice « Gloire embrasée par le feu ».
- Elle lance la Danse avec la louve et la Danse avec la louve Apogée.

Compétence résonatrice « Danse avec la louve »
Quand il y a {2} points de « Foi de la louve », la Compétence résonatrice devient la « Danse avec la louve ». Quand la Danse avec la louve est lancée, tous les points de « Foi de la louve » seront consommés pour infliger des Dégâts Fusion, qui sont considérés comme ceux de la Libération résonatrice.
Cette compétence peut être lancée en l'air près du sol.

Compétence résonatrice « Danse avec la louve Apogée »
Quand il y a {3} points de « Foi de la louve » pendant la Balle de match ardente, la Compétence résonatrice devient la « Danse avec la louve Apogée ». Quand cette dernière est lancée, l'effet de Balle de match ardente sera annulé et tous les points de « Foi de la louve » seront consommés pour infliger des Dégâts Fusion, qui sont considérés comme ceux de la Libération résonatrice.
Cette compétence peut être lancée en l'air près du sol.

Compétence résonatrice « Enflamme l'arène »
Dès le lancement de la Danse avec la louve ou de la Danse avec la louve Apogée, Lupa va rester dans le champ si le membre actif est changé en {4} secondes. Quand il lance la Libération résonatrice, elle va attaquer la cible et infliger des Dégâts Fusion. Ces dégâts sont considérés comme ceux de la Compétence résonatrice. L'effet peut être déclenché 1 fois.

« Flamme de la louve »
Lupa peut avoir {5} points de « Flamme de la louve ».
- Obtenir la « Flamme de la louve » lorsque les Attaques Normales atteignent la cible.
- Obtenir la « Flamme de la louve » quand la Compétence résonatrice est lancée.
- Obtenir la « Flamme de la louve » quand la Libération résonatrice est lancée.

« Foi de la louve »
Lupa peut avoir {6} points de « Foi de la louve ».
La « Foi de la louve » dure {7} secondes, sa durée est réinitialisée quand vous l'obtenez de manière répétitive. Chaque point de « Foi de la louve » qui n'a pas été consommé redevient {8} points de « Flamme de la louve » lorsque sa durée est expirée.
- Obtenir {9} point(s) de « Foi de la louve » quand l'Attaque lourde « Morsure de la louve », l'Attaque lourde « Griffe de la louve » ou l'Attaque aérienne « Impact de feu » est lancée.

Resume court

L'ATQ est augmentée quand l'Attaque lourde renforcée, l'Attaque aérienne renforcée, la Libération résonatrice, la Compétence résonatrice dérivée, la Compétence résonatrice renforcée ou la Compétence résonatrice finale est lancée.

Énergies particulières « Flamme de la louve » et « Foi de la louve »
- Lancez les Attaques normales, la Compétence résonatrice, la Compétence résonatrice dérivée ou la Libération résonatrice pour accumuler les points de « Flamme de la louve ».
Si les points de « Flamme de la louve » sont suffisants, vous pouvez lancer l'Attaque lourde renforcée et l'Attaque aérienne renforcée pour obtenir les points de « Foi de la louve ».
Quand la Foi de la louve est pleine, la Compétence résonatrice renforcée peut être lancée pour infliger des Dégâts Fusion, qui sont considérés comme ceux de la Libération résonatrice.
Si la Foi de la louve est pleine pendant l'état renforcé, vous pouvez lancer la Compétence résonatrice Finale pour infliger des Dégâts Fusion. Ces dégâts sont considérés comme ceux de la Libération résonatrice. L'état renforcé sera terminé.

Attaque coordonnée
Dans un certain délai après que la Compétence résonatrice renforcée ou la Compétence résonatrice Finale est lancée, quand un membre actif de l'équipe lance la Libération résonatrice, Lupa va attaquer la cible et infliger des Dégâts Fusion. Ces dégâts sont considérés comme ceux de la Compétence résonatrice.

### Passif utilitaire

- Id interne de competence: `1003608`
- Nom: `Cuisine habile`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

Resume court

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1003609`
- Nom: `À mes côtés, Combattant`

Description

Les Dégâts Fusion du prochain membre actif sont intensifiés de {0} et ceux de l'Attaque normale sont intensifiés de {1} pendant {2} secondes. L'effet est annulé si le membre actif est changé.

Resume court

Les Dégâts Fusion et ceux de l'Attaque normale du prochain membre actif sont intensifiés. L'effet est annulé si le membre actif est changé.
