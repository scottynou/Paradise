# Zani Kit (Francais)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Zani`
- Skill base id: `10033`
- Localized range used: `490000000-530000000`

## Keywords

### Surplus d'énergie

Zani peut accumuler 100 points de « Surplus d'énergie ».
Obtenir le « Surplus d'énergie » lorsque les Attaques normales touchent la cible.
Obtenir le « Surplus d'énergie » lors du lancement de la Compétence d'Intro « Exécution immédiate ».
Obtenir le « Surplus d'énergie » lors du lancement de la Compétence résonatrice « Plan de défense ».
Obtenir le « Surplus d'énergie » lorsque la « Frappe précise » touche la cible.
Il est impossible d'obtenir le « Surplus d'énergie » pendant le Mode infernal.

### Taux de vibration

Quand le Taux de vibration est vidé, l'ennemi sera Paralysé. Il devient immobile pendant une certaine durée.

### Mode infernalp

Lancez la Libération résonatrice « Réignition » pour entrer en « Mode infernal ».

### Cendres enflammées

Quand Zani est dans l'équipe, quand les membres de l'équipe à proximité impose l'Effet de la lumière spectro à la cible, l'effet inflige le dégât immédiatement et les piles cumulés vont devenir les « Cendres enflammées ». Chaque fois que cela a eu lieu, Zani obtient les points de « Brasier » selon les piles transformées. Vous pouvez accumuler jusqu'à 60 « Cendres enflammées », chaque pile dure 6 secondes. Elles peuvent déclencher l'effet Sonata de « Lumière éternelle ».

### Brasier

Zani peut accumuler 100 points de « Brasier » si elle n'est pas en « Mode infernal ».
Elle peut avoir 150 points de « Brasier » pendant le « Mode infernal ».
Après que la Compétence résonatrice « Plan d'urgence est lancé, vous obtenez 10 points de « Brasier ».
Chaque fois une pile d'Effet de la lumière spectro devient une « Cendre enflammée », vous obtenez 5 points de « Brasier ».
Vous obtenez 50 points de « Brasier » quand la Libération résonatrice « Réignition » est lancée.

### Effet de la lumière spectro

- Si la cible est affectée par l' « Effet de la lumière spectro », il subit les Dégâts Spectro à l'intervalle régulière. Chaque fois que le dégât est infligé, 1 pile de l'Effet de la lumière spectro sera effacée.
- Les Dégâts infligés par l'Effet de la lumière spectro seront augmentés considérablement selon les piles de l'effet accumulées.

### En garde

Zani peut entrer en état « En garde » si : - Vous maintenez la Compétence résonatrice.
- Le « Mode infernal » n'est pas en vigueur et le « Surplus d'énergie » est plein.
- Le Mode infernal est en vigueur.

## Skills

### Attaque normale

- Id interne de competence: `1003301`
- Nom: `Négociation de routine`

Description

Attaque normale
Lancer jusqu'à 4 attaques consécutives pour infliger des Dégâts Spectro.
Appuyer sur l'Attaque normale au bon moment après l'Attaque normale III pour lancer l'Attaque normale « Avancée décisive », puis, appuyer brièvement sur l'Attaque normale pour lancer l'Attaque normale IV.

Attaque lourde
Lancer une attaque en consommant de l'Endurance pour infliger des Dégâts Spectro. Appuyer brièvement sur la touche de l'Attaque normale pour lancer l'Attaque normale III pendant une certaine durée.

Attaque aérienne
Lancer une attaque plongeante en consommant de l'Endurance pour infliger des Dégâts Spectro. Appuyer brièvement sur la touche de l'Attaque normale pour lancer l'Attaque normale III pendant une certaine durée.

Contre-attaque d'esquive
Appuyer brièvement sur l'Attaque normale après une Esquive réussie pour attaquer la cible et infliger des Dégâts Spectro. Puis appuyer sur l'Attaque normale au bon moment pour lancer l'Attaque normale « Avancée décisive ».

Resume court

Attaque normale
Infliger les Dégâts Spectro.

Attaque normale dérivée
Appuyer sur l'Attaque normale au bon moment après l'Attaque normale III pour lancer l'Attaque normale dérivée, qui inflige des Dégâts Spectro.

Attaque lourde
Infliger les Dégâts Spectro.

Attaque aérienne
Infliger les Dégâts Spectro.

Contre-attaque d'esquive
Infliger les Dégâts Spectro.

### Competence resonatrice

- Id interne de competence: `1003302`
- Nom: `Sur le qui-vive`

Description

Plan de défense
Attaquer la cible et infliger des Dégâts Spectro. Entrer en mode défense. L'effet est terminé dès que le membre actif est changé.
Appuyer brièvement sur la touche de l'Attaque normale pour lancer l'Attaque normale III pendant une certaine durée. Quand l'attaque touche la cible, vous obtenez 10 points de « Surplus d'énergie » supplémentaires, la cible sera immobilisée.
Si vous êtes attaqué par l'ennemi pendant le mode défense, les dégâts que vous subissez cette fois sont diminués de 100 %. La cible sera immobilisée et vous lancez la Compétence résonatrice « Frappe précise » pour infliger les Dégâts Spectro. Le Taux de vibration de la cible sera diminué de {0} de manière supplémentaire. Les Dégâts subis par Zani sont diminués de {3} pendant {2} seconde(s).

Plan d'urgence
Si le « Mode infernal » n'est pas en vigueur et le « Surplus d'énergie » est plein, la Compétence résonatrice devient la Compétence résonatrice « Plan d'urgence ».
Maintenir la Compétence résonatrice pour entrer en état « En garde ». Zani est immunisée contre l'interruption pendant cet état, l'effet est terminé dès que le membre actif est changé. Pendant « En garde », si vous relâchez la Compétence résonatrice ou si la durée de l'état est terminée, vous pouvez consommer tous les points de « Surplus d'énergie » pour lancer l'« Action ciblée » et infliger des Dégâts Spectro. Ces dégâts sont considérés comme ceux de l'Effet de la lumière spectro.
Si vous êtes attaqué par l'ennemi pendant « En garde », les dégâts que vous subissez cette fois sont diminués de 100 % et les cibles autour seront immobilisées. Puis, vous consommez tous les points de « Surplus d'énergie » pour lancer le « Coup brutal », qui inflige les Dégâts Spectro. Ces dégâts sont considérés comme ceux de l'Effet de la lumière spectro. Le Taux de vibration de la cible sera diminué de {1} de manière supplémentaire. Les Dégâts subis par Zani sont diminués de {2} pendant {3} seconde(s).
Quand l'« Action ciblée » ou le « Coup brutal » est lancé, vous entrez en état de « Symbiose d'acier ». 1 « Cendre enflammée » sera imposée à la cible touchée. Après que le dernier coup est lancé, vous obtenez le point de « Brasier ».

Symbiose d'acier
Les dégâts de l'Effet de la lumière spectro infligés par Zani sont intensifiés de {4}.

Resume court

Compétence résonatrice
Infliger les Dégâts Spectro. Il est possible de parer une attaque pendant une certaine période. Vous subissez moins de dégâts et lancez une contre-attaque quand la parade est réussie.

Énergie particulière « Surplus d'énergie »
- Lancez les Attaques normales, la Compétence résonatrice, la Compétence d'Intro pour obtenir le « Surplus d'énergie ».
Lorsque le Surplus d'énergie est plein, il est possible de lancer la Compétence résonatrice renforcée.

Compétence résonatrice renforcée
- Appuyez longuement sur la Compétence résonatrice pour charger. Vous êtes immunisé contre l'interruption pendant ceci. Il est possible de parer une attaque pendant une certaine période. Vous subissez moins de dégâts et lancez une contre-attaque quand la parade est réussie.
Une attaque sera lancée quand vous relâchez la touche ou quand le chargement est terminé.
- Infliger les Dégâts Spectro et imposer les « Cendres enflammées » à la cible. Ces dégâts seront considérés comme ceux de l'Effet de la lumière spectro. Les dégâts de l'Effet de la lumière spectro infligés par Zani sont intensifiés.

### Liberation resonatrice

- Id interne de competence: `1003303`
- Nom: `Entre l'aube et le crépuscule`

Description

Réignition
Infliger les Dégâts Spectro et activer le « Mode infernal ». La limite des points de « Brasier » passe de {0} à {1}. Vous obtenez immédiatement {2} points de « Brasier ». Pendant le Mode infernal, le multiplicateur d'Attaque normale est augmenté.

Persistance finale
Pendant le « Mode infernal », quand les points de « Brasier » n'ont pas atteint {3}, ou après que le « Mode infernal » a duré {4} seconde(s), la Libération résonatrice devient la Libération résonatrice « Persistance finale ».
Lancer la Libération résonatrice « Persistance finale » pour infliger les Dégâts Spectro et quitter le Mode infernal.

Resume court

Libération résonatrice
Infliger les Dégâts Spectro et entrer en un état renforcé. Le multiplicateur de Dégâts d'Attaque normale est augmenté et le Coup lourd et la Libération résonatrice finale sont disponibles.

Libération résonatrice finale
Peut être lancée quand l'énergie particulière « Brasier » n'a pas atteint la marque ou après que l'état renforcé a durée pendant une certaine période. Infliger beaucoup de Dégâts Spectro et quitter l'état renforcé.

### Passif inherent 1

- Id interne de competence: `1003304`
- Nom: `Réponse rapide`

Description

Quand vous lancez la Compétence d'Intro « Exécution immédiate », le Bonus de Dégâts Spectro est augmenté de {0} pendant {1} seconde(s).

Resume court

Quand vous lancez la Compétence d'Intro, le Bonus de Dégâts Spectro est augmenté.

### Passif inherent 2

- Id interne de competence: `1003305`
- Nom: `Aucune crainte`

Description

Pendant « En garde », les dégâts que vous subissez sont diminués de {0}.

Resume court

Quand vous chargez, les dégâts que vous subissez sont diminués.

### Competence d'Intro

- Id interne de competence: `1003306`
- Nom: `Exécution immédiatej`

Description

Attaquer la cible pour infliger des Dégâts Spectro.

Resume court

Infliger les Dégâts Spectro.

### Circuit Forte

- Id interne de competence: `1003307`
- Nom: `La lumière viendra`

Description

Cendres enflammées
Quand Zani est dans l'équipe, quand les membres de l'équipe à proximité imposent l'Effet de la lumière spectro à la cible, l'effet inflige les dégâts immédiatement et les piles cumulées vont devenir les « Cendres enflammées ». Chaque fois que cela a eu lieu, Zani obtient les points de « Brasier » selon les piles transformées. Vous pouvez accumuler jusqu'à {0} piles de « Cendres enflammées », chaque pile dure {1} secondes. Elles peuvent déclencher l'effet Sonata de « Lumière éternelle ».

En Feu
Pendant le Mode infernal, vous pouvez lancer les Coup lourd : Aube, Coup lourd : Éveil, Coup lourd : Ténèbres et Coup lourd : Éclat. Ils infligent les Dégâts Spectro. Ces dégâts sont considérés comme ceux de l'Attaque lourde et ceux de l'Effet de la lumière spectro.
Si les points de « Brasier » ≥ {2}, la Compétence résonatrice « Plan de défense » devient la Compétence résonatrice « En Feu ».
Maintenir la Compétence résonatrice pour entrer en état « En garde ». Zani est immunisée contre l'interruption pendant cet état, l'effet est terminé dès que le membre actif est changé. Dans l'état d'« En garde », relâchez la Compétence résonatrice pendant une certaine durée pour lancer le « Coup lourd : Aube » en consommant des points de « Brasier ».
Si vous êtes attaqué par l'ennemi pendant « En garde », les dégâts que vous subissez cette fois sont diminués de 100 % et les cibles autour seront immobilisées. Puis, vous

Resume court

Énergie particulière « Brasier »
- Quand les membres de l'équipe à proximité imposent l'Effet de la lumière spectro à la cible, l'effet inflige le dégât immédiatement. Les « Cendres enflammées » seront imposées et Zani obtient des points de « Brasier ».
- La Libération résonatrice et la Compétence résonatrice renforcée vous permettent de restaurer les points de « Brasier ».
- Pendant l'état renforcé, quand les points de « Brasier » dépasse la marque, vous pouvez lancer le Coup lourd.

Cendres enflammées
Les « Cendres enflammées » vont augmenter les Dégâts de Compétence d'Outro et elles peuvent déclencher l'effet Sonata de « Lumière éternelle ».

Coup lourd
- Appuyez brièvement l'Attaque normale ou maintenir la Compétence résonatrice pour lancer un Coup lourd.
- Appuyez longuement sur la Compétence résonatrice pour charger. Vous êtes immunisé contre l'interruption pendant ceci. Il est possible de parer une attaque pendant une certaine période. Vous subissez moins de dégâts et lancez une contre-attaque quand la parade est réussie. Une attaque sera lancée quand vous relâchez la touche ou quand le chargement est terminé.
- Infliger les Dégâts Spectro. Ces dégâts sont considérés comme ceux d'Attaque lourde et ceux de l'Effet de la lumière spectro.

### Passif utilitaire

- Id interne de competence: `1003308`
- Nom: `Cuisine habile`

Description

A la capacité de préparer des plats spéciaux en cuisinant.

### Competence d'Outro

- Id interne de competence: `1003309`
- Nom: `Ancre de l'avenir`

Description

Attaquer la cible pour infliger des Dégâts Spectro égaux à {0} d'ATQ de Zani. Toutes les « Cendres enflammées » de la cible seront supprimées. Chaque « Cendres enflammées » va augmenter le dégât subi cette fois de la cible de {1}. Ces dégâts sont considérés comme ceux de l'Effet de la lumière spectro. Les Dégâts Spectro infligés aux cibles avec les « Cendres enflammées » par les membres de l'équipe autres que Zani seront intensifiés de {2} pendant {3} seconde(s).

Resume court

- Infliger les Dégâts Spectro. Les dégâts infligés aux cibles avec les « Cendres enflammées » sont augmentés selon les piles accumulées.
Ces dégâts sont considérés comme ceux de l'Effet de la lumière spectro.
Les Dégâts Spectro infligés par les autres membres de l'équipe aux cibles avec les « Cendres enflammées » seront intensifiés.,
