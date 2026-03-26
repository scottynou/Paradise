# Mornye Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Mornye`
- Skill base id: `10044`
- Localized range used: `490000000-530000000`

## Keywords

### Mode d'observation à grand champ

Le Mode d'observation à grand champ dure {11} secondes.
Un Champ de syntonie sera généré lorsque Mornye entre en Mode d'observation à grand champ.
Pendant le Mode d'observation à grand champ, Mornye obtient de l'Élan relatif.
Appuyez longuement sur l'Attaque normale si l'Élan relatif n'atteint pas {0} points pour lancer successivement le combo de l'Attaque normale - Mode d'observation à grand champ I, II et III. Lorsque l'Élan relatif atteint {0} points, l'Attaque lourde - Inversion est disponible.
Mornye se déplace en consommant des points d'endurance. Pendant le Mode d'observation à grand champ, des points d'endurance ne seront pas restaurés.
Esquivez vers l'avant pour que la ruée en l'air de Mornye soit plus rapide pendant 10 secondes. Cet état est terminé dès que tous les points d'endurance ont été consommés ou que le Mode d'observation à grand champ est terminé.
Si l'action de Mornye a été interrompue, appuyez brièvement sur l'Esquive pour qu'elle se rétablissent, et cette esquive sera considérée comme réussie. Cet effet peut être déclenché {12} fois et les tentatives sont réinitialisées lorsque le Mode d'observation à grand champ est terminé.
Appuyez brièvement sur Sauter afin que Mornye descende lentement. Durant la descente, elle ne peut pas lancer l'Attaque normale - Mode d'observation à grand champ, la Compétence résonatrice - Matrice distribuée ou l'Attaque lourde - Inversion. Si l'endurance est épuisée, appuyez brièvement sur la touche de Saut pour pour mettre fin au Mode d'observation à grand champ. Quand Mornye descend lentement, appuyez brièvement sur l'Esquive, le Saut ou lancez une Attaque aérienne pour mettre fin au Mode d'observation à grand champ.
De plus, le Mode d'observation à grand champ prend fin automatiquement quand Mornye n'est pas en l'air ou si vous interagissez avec la scène, utilisez un outil d'exploration ou appuyez longuement sur la touche de saut.

### Champ de syntonie

- Le Champ d'hypersyntonie dure {1} secondes.
- Quand un Champ de syntonie est généré, il inflige des Dégâts Fusion qui sont des dégâts de Libération résonatrice.
- Le Champ de syntonie restaure continuellement les PV du personnage actif de l'équipe à proximité. L'effet peut être déclenché 1 fois toutes les {2} secondes.
- Le Champ de syntonie augmente le taux d'accumulation de Dissonance de tous les membres de l'équipe à proximité de {3}.
- Le Champ de syntonie améliore la Résistance à l'interruption de tous les membres de l'équipe à proximité.,

### Champ d'hypersyntonie

- Le Champ d'hypersyntonie dure {6} secondes.
- La DEF de tous les membres dans la portée du Champ d'hypersyntonie est augmentée de {8}.
- Il héritera les effets d'amélioration de la Résistance à l'interruption et du taux d'accumulation de Dissonance du .
- Il héritera l'effet de Bonus de soin du  et le multiplicateur de soin est augmenté de {7}.

### Énergie de masse au repos

La limite maximale de « Énergie de masse au repos » est de {0} points.
Pendant le Mode standard, lorsque l'Attaque normale, l'Attaque lourde ou la Contre-attaque d'esquive est lancée, ou lorsque la Compétence résonatrice - Solution optimale touche une cible, l'Énergie de masse au repos sera accordé.

### Élan relatif

La limite maximale d'« Élan relatif » est de {0} points.
Pendant le Mode d'observation à grand champ, l'Élan relatif sera accordé lorsque l'Attaque normale - Mode d'observation à grand champ, la Contre-attaque d'esquive - Mode d'observation à grand champ ou la Compétence résonatrice - Matrice distribuée touche une cible.
Pendant l'Attaque lourde - Inversion, Mornye n'obtient pas de l'Élan relatif.

### Rupture d'accord - Interférence

L'état qui affectera la cible après qu'une cible affectée par la Rupture d'accord - Basculement est touchée par l'Interruption de tonalité. Un personnage qui a la capacité de réagir à la Rupture d'accord - Interférence peut appliquer des effets spéciaux à la cible affectée par cet état. L'état de Rupture d'accord - Interférence dure 8 secondes.

### Tension d'accord - Interférence

L'état qui affectera la cible après qu'une cible affectée par la Tension d'accord - Basculement est touchée par l'Interruption de tonalité. Un personnage qui a la capacité de répondre à la Tension d'accord - Interférence peut appliquer des effets spéciaux à la cible affectée par cet état. L'état de Tension d'accord - Interférence dure 8 secondes.

### Interruption de tonalité

Lorsque les points de dissonance de la cible sont pleins, elle sera affectée par l'état d'Hors-tonalité :
Les membres de l'équipe peuvent lancer l'Interruption de tonalité pour infliger des dégâts à la cible, puis, l'état d'Hors-tonalité se termine.
Si la cible est du Niveau Onde, certaines compétences des membres de l'équipe vont infliger directement un dégât d'Interruption de tonalité lorsqu'elles touchent. Puis, l'état d'Hors-tonalité de la cible se termine.

## Skills

### Attaque normale

- Id interne de competence: `1004401`
- Nom: `Calibrage initial`

Description

Attaque normale
Lance jusqu'à 4 attaques consécutives pour infliger des Dégâts Fusion.

Attaque lourde
Consomme des points d'Endurance pour attaquer et infliger des Dégâts Fusion.

Attaque normale - Mode d'observation à grand champ
Pendant le Mode d'observation à grand champ, l'Attaque normale devient l'Attaque normale - Mode d'observation à grand champ.
Cela effectue jusqu'à 3 attaques consécutives pour infliger des Dégâts Fusion.

Attaque aérienne
Lance une attaque plongeante en consommant des points d'Endurance pour infliger des Dégâts Fusion. Puis, appuyez brièvement sur l'Attaque normale dans un certain délai pour lancer l'Attaque normale III.

Contre-attaque d'esquive
Appuyez brièvement sur l'Attaque normale dans un certain délai après une Esquive réussie pour attaquer la cible et infliger des Dégâts Fusion.
Appuyez brièvement sur l'Attaque normale dans un certain délai après cette attaque pour lancer l'Attaque normale II.

Contre-attaque d'esquive - Mode d'observation à grand champ
Pendant le Mode d'observation à grand champ, la Contre-attaque d'esquive devient la Contre-attaque d'esquive - Mode d'observation à grand champ.
Appuyez brièvement sur l'Attaque normale dans un certain délai après une Esquive réussie pour attaquer la cible et infliger des Dégâts Fusion.
Appuyez brièvement sur l'Attaque normale dans un certain délai après cette attaque pour lancer l'Attaque normale - Mode d'observation à grand champ III.

Resume court

Attaque normale
Inflige des Dégâts Fusion.

Attaque lourde
Consomme des points d'Endurance pour lancer une attaque qui inflige des Dégâts Fusion.

Attaque aérienne
Lancez une attaque plongeante en consommant des points d'Endurance pour infliger des Dégâts Fusion.

Contre-attaque d'esquive
Appuyez brièvement sur l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Fusion.,

### Competence resonatrice

- Id interne de competence: `1004402`
- Nom: `Résolution`

Description

Erreur prévisionnelle
Mornye restaure des PV pour tous les membres de l'équipe à proximité et entre en état de parade. Pendant cet état, ses dégâts subis sont diminués de 100 % durant une certaine durée, il se termine dès que le membre actif est changé.
Si elle a été attaquée pendant l'état de parade, l'état se termine et la Compétence résonatrice - Solution optimale sera lancée.
Si elle n'a pas été attaquée pendant l'état de parade, appuyez brièvement sur l'Attaque normale pour quitter cet état et lancer l'Attaque normale II.

Solution optimale
Mornye rend les cibles autour immobiles et inflige des Dégâts Fusion. Le Temps de recharge de la Compétence résonatrice - Erreur prévisionnelle est diminué de {0} secondes.
L'effet est terminé dès que le membre actif est changé.

Matrice distribuée
Pendant le Mode d'observation à grand champ, la Compétence résonatrice devient la Compétence résonatrice - Matrice distribuée.
Elle restaure des PV pour tous les membres de l'équipe à proximité et génère des Canons planeur pour attaquer et infliger des Dégâts Fusion.

Resume court

Compétence résonatrice au sol
Mornye restaure des PV pour tous les membres de l'équipe à proximité. Son état de parade peut bloquer les attaques pendant une certaine durée. Lors d'une parade réussie, une contre-attaque sera lancée et le temps de recharge de cette compétence sera réduit.

Compétence résonatrice aérienne
Pendant le Mode aérien, la Compétence résonatrice devient la Compétence résonatrice aérienne.
Cela restaure les PV de tous les membres de l'équipe à proximité et inflige des Dégâts Fusion.

### Liberation resonatrice

- Id interne de competence: `1004403`
- Nom: `Protocole critique`

Description

Attaque les cibles à portée et inflige des Dégâts Fusion.
Si la Recharge résonante de Mornye dépasse {0}, {1} de Recharge résonante dépassé devient {2} de Taux critique augmenté, jusqu'à un maximum de {3} et {4} de dégâts critiques augmentés, jusqu'à un maximum de {5}.
Si un Champ de syntonie existe déjà quand cette compétence est lancée, il sera supprimé tout de suite et un Champ d'hypersyntonie sera généré.
Cette compétence peut être lancée en l'air.

Champ d'hypersyntonie
- Le Champ d'hypersyntonie dure {6} secondes.
- La DEF de tous les membres à portée du Champ d'hypersyntonie est augmentée de {8}.
- Il héritera les effets d'amélioration de la Résistance à l'interruption et du taux d'accumulation de Dissonance du Champ de syntonie.
- Il héritera l'effet de Bonus de soin du Champ de syntonie et le multiplicateur de soin est augmenté de {7}.

Resume court

Inflige des Dégâts Fusion.
La Recharge résonante de Mornye augmente le Taux critique et les Dégâts critiques des dégâts infligés par cette compétence.
Si un champ existe déjà quand cette compétence est lancée, il sera supprimé et un Champ renforcé sera généré.

Champ renforcé
- Ce champ dure {6} secondes.
- Il restaure continuellement les PV du membre actif de l'équipe.
- La DEF et l'Efficacité de Dissonance de tous les membres de l'équipe à proximité dans la portée du champ sont augmentées. La Résistance à l'interruption du membre actif de l'équipe à proximité est améliorée.

### Passif inherent 1

- Id interne de competence: `1004404`
- Nom: `Plan directeur`

Description

La Recharge résonante de Mornye est augmentée de {4}.
Lorsque la Compétence d'Intro - Convergence est lancée, Mornye obtient {0} points d'énergie concertante. L'effet peut être déclenché 1 fois toutes les {1} secondes.
Lorsque l'Attaque normale - Mode d'observation à grand champ III est lancée, elle obtient {2} points d'énergie concertante. L'effet peut être déclenché 1 fois toutes les {3} secondes.

Resume court

La Recharge résonante de Mornye est augmentée. Lorsque la Compétence d'Intro est lancée ou l'Attaque normale III est lancée en l'air, elle obtient de l'énergie concertante.

### Passif inherent 2

- Id interne de competence: `1004405`
- Nom: `Limitation`

Description

Lorsque la Compétence résonatrice - Erreur prévisionnelle ou la Compétence résonatrice - Matrice distribuée est lancée, les membres de l'équipe obtiennent la Preuve de limitation :
- L'effet de Preuve de limitation dure {0} secondes et il peut être obtenu une fois toutes les {1} minute(s).
- Si le membre actif subit des dégâts qui dépassent {2} de ses PV max, ces dégâts seront réduits à {3} et cet effet peut être déclenché {4} fois. L'effet de la Preuve de limitation est annulé dès qu'il a été déclenché {5} fois.
- Si le membre actif subit des dégâts mortels, ces dégâts ne le feront tomber. Cet effet peut être déclenché {6} fois et l'effet de la Preuve de limitation sera annulé après qu'il a été déclenché {7} fois.
- Lorsque l'effet de la Preuve de limitation est annulé, le membre actif obtient des PV équivalents à {8} de la DEF de Mornye.

Resume court

Lorsque la Compétence résonatrice est lancée, les membres de l'équipe obtiennent le bonus de la Preuve de limitation, qui réduit les dégâts subis et permet au membre actif d'être immunisé à un coup fatal.

### Competence d'Intro

- Id interne de competence: `1004406`
- Nom: `Convergence`

Description

Attaque la cible pour infliger des Dégâts Fusion. Puis, Mornye se lance dans les airs, l'Énergie de masse au repos sera supprimée et elle entre en Mode d'observation à grand champ.

Resume court

Inflige des Dégâts Fusion et entre en mode aérien.

### Circuit Forte

- Id interne de competence: `1004407`
- Nom: `Équivalence masse-énergie`

Description

Mode standard
Pendant le Mode standard, Mornye peut obtenir de l'Énergie de masse au repos.

Attaque lourde - Décalage géopotentiel
- Si l'Énergie de masse au repos atteint {0} points, l'Attaque lourde devient l'Attaque lourde

Resume court

Mécanismes d'énergie particulière
Si Mornye est au sol, elle obtient des points d'énergie du Mode au sol.
Si Mornye est en l'air, elle obtient des points d'énergie du Mode aérien.

Attaque lourde renforcée au sol
Lorsque l'énergie du mode au sol est pleine, l'Attaque lourde renforcée au sol est disponible.
Cela consomme tous les points d'énergie du Mode au sol et inflige des Dégâts Fusion. Puis, Mornye entre en Mode aérien.

Mode aérien
Le mode aérien dure {11} secondes. Lorsque Mornye entre en ce mode, un champ qui inflige des Dégâts Fusion sera généré.

Champ
- Ce champ dure {1} secondes.
- Il restaure continuellement les PV du membre actif de l'équipe à proximité.
- L'Efficacité de Dissonance de tous les membres de l'équipe à proximité est augmentée. La Résistance à l'interruption du membre actif de l'équipe à proximité est améliorée.

Attaque lourde renforcée aérienne
Lorsque l'énergie du Mode aérien est pleine, l'Attaque lourde renforcée aérienne est disponible.
Cela consomme tous les points de l'énergie du mode aérien pour infliger des Dégâts Fusion et applique une marque qui dure {4} secondes à la cible.

Marque
Lorsqu'une cible marquée subit des dégâts d'Interruption de tonalité, Mornye lui applique une marque améliorée qui dure {5} secondes.

Marque améliorée
Si une cible a été affectée par la Rupture d'accord - Interférence ou par la Tension d'accord - Interférence, les dégâts infligés par tous les membres de l'équipe à proximité sont augmentés.

Champ visuel
Après qu'une cible affectée par la Marque ou la Marque améliorée a été vaincue, pendant une certaine durée, les membres de l'équipe peuvent appliquer une Marque à la cible lorsqu'ils infligent des dégâts.

Réaction de rupture - Flux particulaire
Mornye inflige des Dégâts Fusion qui sont des Dégâts de Rupture d'accord.

### Passif utilitaire

- Id interne de competence: `1004408`
- Nom: `Cuisine habile`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

Resume court

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1004409`
- Nom: `Récursivitéy`

Description

Tous les dégâts des membres de l'équipe sont intensifiés de {0} pendant {1} secondes.

Resume court

Intensifie tous les Dégâts des membres de l'équipe pendant {1} secondes.(

### Competence speciale 10

- Id interne de competence: `1004410`
- Nom: `Découplage`

Description

Mornye peut réagir à la Rupture d'accord - Interférence et à la Tension d'accord - Interférence.
Dans le cas de Rupture d'accord - Interférence : Lorsqu'un membre de l'équipe inflige des dégâts d'Interruption de tonalité à une cible et lui applique l'état de Rupture d'accord - Interférence, Mornye lancera la Réaction de rupture - Flux particulaire. Ces dégâts peuvent être infligés à une cible une fois toutes les {0} secondes.
Dans le cas de Tension d'accord - Interférence : Chaque cumul de Tension d'accord - Interférence augmente les dégâts totaux infligés par Mornye. Chaque point de Bonus de rupture augmente ses dégâts totaux de {1}. Si Mornye est dans l'équipe, les cumuls max de Tension d'accord - Interférence de la cible sont augmentés de {2}.
D'ailleurs, si les points de dissonance de la cible atteignent leur maximum, Mornye peut l'attaquer avec l'Interruption de tonalité.

Resume court

Mornye peut réagir à la Rupture d'accord - Interférence et à la Tension d'accord - Interférence.
D'ailleurs, si les points de dissonance de la cible sont pleins, Mornye peut l'attaquer avec l'Interruption de tonalité.
