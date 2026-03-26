window.PARADISE_DATA = window.PARADISE_DATA || {};
window.PARADISE_DATA.guides = window.PARADISE_DATA.guides || {};
window.PARADISE_DATA.guides.shorekeeper = {
  slug: "shorekeeper",
  theme: "shorekeeper",
  hero: {
    eyebrow: "Support universelle",
    title: "Shorekeeper",
    tagline: "Support Spectro orientee soins, buffs Crit et stabilite de rotation.",
    art: "assets/img/guides/shorekeeper/ww-shorekeeper-splash-art.jpg",
    badges: [
      { label: "Element", value: "Spectro", icon: "assets/img/guides/shorekeeper/spectro.png" },
      { label: "Arme", value: "Amplificateur", icon: "assets/img/types%20armes/amplificateurs.webp" },
      { label: "Role", value: "Support", icon: "assets/img/guides/shorekeeper/Support.webp" }
    ],
    highlights: [
      "Soins continus sur toute l'equipe.",
      "Jusqu'a +12.5% Crit Rate et +25% Crit Damage via l'ultime.",
      "Outro avec amplification de degats et anti interruption."
    ]
  },
  overview: {
    title: "Apercu",
    paragraphs: [
      "Shorekeeper rentre dans presque toutes les equipes du jeu. Son role est simple : securiser la rotation, apporter de gros soins et poser des buffs que tous les carries appreciant le Crit exploitent tres bien.",
      "Son vrai point de vigilance est l'energie. Une fois la recharge correctement geree, son cycle devient stable et son confort en combat est tres difficile a remplacer."
    ],
    cards: [
      {
        title: "Pourquoi la jouer",
        bullets: [
          "Support universelle tres facile a justifier dans une team.",
          "Excellent package : heal, buffs Crit, amplification de degats, protection de rotation.",
          "Peut aussi contribuer en degats via son Intro renforcee."
        ]
      },
      {
        title: "Ce qu'il faut surveiller",
        bullets: [
          "A besoin d'une bonne base de recharge d'energie.",
          "Les meilleures rotations demandent deux Intros dans l'anneau.",
          "Son confort monte beaucoup avec une arme qui aide le concerto."
        ]
      }
    ]
  },
  priority: {
    title: "Priorites",
    variants: [
      {
        id: "dps",
        label: "Variante degats",
        caption: "Intro > Competence resonatrice > Liberation resonatrice > Attaque basique > Forte circuit",
        items: [
          "Competence d'Intro",
          "Competence resonatrice",
          "Liberation resonatrice",
          "Attaque basique",
          "Forte circuit"
        ]
      },
      {
        id: "heal",
        label: "Variante soin",
        caption: "Competence resonatrice > Liberation resonatrice > Intro > Attaque basique > Forte circuit",
        items: [
          "Competence resonatrice",
          "Liberation resonatrice",
          "Competence d'Intro",
          "Attaque basique",
          "Forte circuit"
        ]
      }
    ]
  },
  kit: {
    title: "Kit",
    groups: [
      {
        title: "Attaque basique",
        icon: "assets/img/guides/shorekeeper/Skill_Rectifier.webp",
        bullets: [
          "Jusqu'a 4 coups Spectro consecutifs.",
          "Chaque coup genere un Noyau effondre.",
          "La chaine de base aide a preparer son Forte circuit."
        ]
      },
      {
        title: "Attaque lourde et aerienne",
        bullets: [
          "La lourde consomme l'endurance en continu et genere de la donnee speculative.",
          "A la sortie, les donnees deviennent des donnees reelles et produisent des Noyaux effondres.",
          "L'attaque aerienne et le contre d'esquive participent eux aussi a la generation."
        ]
      },
      {
        title: "Competence resonatrice",
        icon: "assets/img/guides/shorekeeper/Skill_Chaos_Theory.webp",
        bullets: [
          "Soigne tous les allies proches.",
          "Invoque 5 Dark Star Butterflies qui poursuivent la cible.",
          "Permet de reprendre rapidement le combo a l'etape 2."
        ]
      },
      {
        title: "Liberation resonatrice",
        icon: "assets/img/guides/shorekeeper/Skill_End_Loop (1).webp",
        bullets: [
          "Cout de 175 energie, duree de 30 secondes.",
          "Astre primaire : soins continus dans la zone.",
          "Astre sophistique : ajoute jusqu'a +12.5% Crit Rate en fonction de l'ER.",
          "Astre libere : ajoute jusqu'a +25% Crit Damage en fonction de l'ER."
        ]
      },
      {
        title: "Forte circuit - Accord Astral",
        icon: "assets/img/guides/shorekeeper/Skill_Astral_Chord.webp",
        bullets: [
          "Les Noyaux effondres deviennent des papillons apres quelques secondes.",
          "A 5 donnees reelles, la lourde ou l'aerienne convertit tout d'un coup.",
          "Ce bloc sert surtout a fiabiliser sa rotation et sa generation."
        ]
      },
      {
        title: "Passifs importants",
        bullets: [
          "Cycle de Vie peut sauver un allie d'un coup fatal toutes les 10 minutes.",
          "Auto Gravitation donne +10% ER a Shorekeeper dans la zone de l'ultime.",
          "Si Rover est present, Rover gagne lui aussi +10% ER."
        ]
      },
      {
        title: "Intro et Outro",
        icon: "assets/img/guides/shorekeeper/Skill_Binary_Butterfly.webp",
        bullets: [
          "L'Intro soigne, invoque des butterflies et peut finir l'anneau en Discernment.",
          "Discernment est un gros hit garanti Crit une fois l'Astre libere atteint.",
          "L'Outro donne +15% d'amplification de degats et de la protection anti interruption."
        ]
      }
    ],
    rotation: [
      { label: "Generation", body: "Construire le concerto et les ressources avec la chaine de base, les esquives et la competence." },
      { label: "Ultime", body: "Poser End Loop pour installer l'anneau et lancer les soins continus." },
      { label: "Outro", body: "Basculer rapidement pour offrir l'amplification de degats au carry." },
      { label: "Intro 1", body: "Faire entrer un allie dans l'anneau pour passer en Astre sophistique." },
      { label: "Intro 2", body: "Relancer une Intro dans l'anneau pour atteindre l'Astre libere." },
      { label: "Burst DPS", body: "Profiter de la fenetre max buffs pour lancer la sequence de degats du carry." },
      { label: "Refresh", body: "Utiliser Discernment pour rafraichir proprement la rotation et repartir." }
    ],
    tips: [
      "Vise environ 240 a 250% ER totale pour jouer confortablement.",
      "Sa vraie valeur arrive quand les deux Intros dans l'anneau sont tenues.",
      "Une arme qui aide le concerto change beaucoup la fluidite."
    ]
  },
  sequences: {
    title: "Sequences",
    items: [
      {
        id: "S1",
        title: "S1 - Conjecture inexprimmee",
        tag: "Fin de la boucle",
        lead: "Renforce la zone de l'ultime et la rend beaucoup plus confortable.",
        bullets: [
          "Portee de soins et de buffs +150%.",
          "Duree de l'anneau +10 secondes.",
          "Discernment ne termine plus la sphere."
        ],
        note: "Excellent saut de confort et de couverture."
      },
      {
        id: "S2",
        title: "S2 - Dons et refus de la nuit",
        tag: "Astre primaire",
        lead: "Ajoute un vrai buff d'ATK a l'equipe.",
        bullets: [
          "Les allies proches gagnent +40% ATK."
        ],
        note: "Tres fort pour les equipes basees sur l'ATK."
      },
      {
        id: "S3",
        title: "S3 - L'infini m'attend",
        tag: "Energie concertante",
        lead: "Rend les enchainements d'Intro encore plus faciles.",
        bullets: [
          "+20 energie concertante a End Loop toutes les 25 secondes."
        ],
        note: "Plus de fluidite et moins de stress sur la rotation."
      },
      {
        id: "S4",
        title: "S4 - Quietude debordante",
        tag: "Theorie du Chaos",
        lead: "Montee importante du soin.",
        bullets: [
          "Bonus de soins +70% apres la competence resonatrice."
        ],
        note: "Pur confort defensif pour les combats longs."
      },
      {
        id: "S5",
        title: "S5 - Echos dans le silence",
        tag: "Controle",
        lead: "Augmente la traction de certaines attaques.",
        bullets: [
          "Portee de traction de l'attaque normale III +50%.",
          "Portee de traction d'Illation +30%."
        ],
        note: "Pratique pour garder les packs sous controle."
      },
      {
        id: "S6",
        title: "S6 - Vers le nouveau monde",
        tag: "Discernment",
        lead: "Transforme son Intro renforcee en gros pic de degats.",
        bullets: [
          "Multiplicateur de Discernment +42%.",
          "Apres Discernment, Crit Damage de Shorekeeper +500%."
        ],
        note: "Le vrai cap offensif de son kit."
      }
    ]
  },
  weapons: {
    title: "Armes",
    intro: "Les meilleures options combinent regeneration d'energie, generation de concerto et valeur d'equipe.",
    items: [
      {
        filename: "5star_Stellar_Symphony.png",
        rank: "R1",
        score: 116.3,
        image: "assets/img/armes/amplificateurs/5star_Stellar_Symphony.png",
        tags: ["Signature", "ER", "Buff equipe"],
        description: "Sa meilleure arme. Elle apporte beaucoup d'ER, des PV, du concerto et un buff d'ATK d'equipe quand la competence soigne."
      },
      {
        filename: "4star_Variation.png",
        rank: "R5",
        score: 100,
        image: "assets/img/armes/amplificateurs/4star_Variation.png",
        tags: ["ER", "Concerto"],
        description: "La meilleure option hors signature. Elle accelere la rotation et aide beaucoup a tenir les cycles."
      },
      {
        filename: "4star_Rectifier25.png",
        rank: "R5",
        score: 87.2,
        image: "assets/img/armes/amplificateurs/4star_Rectifier25.png",
        tags: ["Budget", "ER"],
        description: "Le meilleur choix sans gacha. Il apporte beaucoup de recharge d'energie et un petit bonus d'ATQ en lançant la competence, tout en restant tres accessible."
      },
      {
        filename: "4star_Call_of_the_Abyss.png",
        rank: "R5",
        score: 85.1,
        image: "assets/img/armes/amplificateurs/4star_Call_of_the_Abyss.png",
        tags: ["Soin", "ER"],
        description: "Option plus orientee soin, offerte gratuitement via Rinascita. Elle garde une bonne recharge d'energie et peut passer devant Amplificateur#25 si tu privilegies davantage le sustain."
      }
    ]
  },
  echoes: {
    title: "Echos",
    bestSets: [
      {
        label: "Best",
        name: "Rejuvenating Glow",
        icon: "assets/img/set/Rejuvenating Glow.png",
        description: "2 pieces : bonus de soins. 5 pieces : soigner donne +15% ATK d'equipe pendant 30 secondes.",
        items: [
          {
            name: "Fallacy of No Return",
            image: "assets/img/echo/Fallacy of No Return.png",
            description: "Donne de l'ER et un bonus d'ATK d'equipe. Le choix polyvalent le plus stable."
          },
          {
            name: "Bell-Born Geochelone",
            image: "assets/img/echo/Bell-Borne Geochelone.png",
            description: "Alternative plus defensive avec mitigation et bouclier utile."
          }
        ]
      }
    ],
    altSets: [
      {
        label: "Alt",
        name: "Moonlit Clouds",
        icon: "assets/img/set/Moonlit Clouds.png",
        description: "2 pieces : ER. 5 pieces : l'Outro donne +22.5% ATK au prochain personnage pendant 15 secondes.",
        items: [
          {
            name: "Impermanence Heron",
            image: "assets/img/echo/Impermanence Heron.png",
            description: "Tres bon choix si tu veux concentrer encore plus la valeur sur le carry qui entre."
          }
        ]
      }
    ],
    mainStats: [
      { slot: "4 cout", choices: ["Crit DMG", "Bonus soin", "HP%"], note: "Crit DMG est recommande pour maximiser l'Intro renforcee (Discernment) qui crit obligatoirement." },
      { slot: "3 cout", choices: ["Energy Regen%"], note: "Priorite absolue. Shorekeeper a besoin de son ultime a chaque rotation." },
      { slot: "3 cout", choices: ["Energy Regen%", "HP%"], note: "Une seconde piece ER est souvent necessaire pour atteindre le palier des 250%." },
      { slot: "1 cout (x2)", choices: ["HP%"], note: "Shorekeeper soigne et buffe en fonction de ses PV max." }
    ],
    substats: [
      {
        title: "Focus DPS",
        items: [
          "Energy Regen% jusqu'au palier",
          "Crit DMG puis Liberation DMG",
          "HP%",
          "Flat HP"
        ]
      },
      {
        title: "Focus soin",
        items: [
          "Energy Regen% jusqu'au palier",
          "HP%",
          "Flat HP"
        ]
      }
    ],
    summary: [
      "Priorise l'Energy Regen (ER) avant toute chose jusqu'a 240-250%.",
      "Le 4-cout Crit DMG est plus rentable que le soin car son ultime garantit le crit sur l'Intro.",
      "N'oublie pas de monter les HP% en substats pour la survie et le scaling."
    ]
  },
  endgame: {
    title: "Stats endgame",
    intro: "Objectif principal : fiabiliser l'ultime sans sacrifier totalement le reste.",
    targets: [
      { label: "HP", value: "30 000+", note: "Confort defensif et bonne base de scaling." },
      { label: "DEF", value: "1 100+", note: "Seuil correct sans trop gaspiller." },
      { label: "ER via equipement", value: "130 a 140%", note: "Le reste vient des passifs, armes, echos et buffs." }
    ],
    important: [
      "Crit Damage a deja 150% de base en jeu.",
      "Energy Regen a deja 100% de base en jeu."
    ],
    energy: {
      target: "Vise environ 250% d'ER totale apres buffs pour une Liberation reguliaire.",
      tips: [
        "Passif + Fallacy actif : 130 a 140% sur l'equipement suffit souvent.",
        "Sans Fallacy : vise plutot 140 a 150%.",
        "Avec Moonlit 5 pieces : 120 a 130% peut deja etre confortable.",
        "Si la rotation reste bancale, surcoter l'ER reste tout a fait viable."
      ]
    }
  },
  teams: {
    title: "Teams",
    intro: "Shorekeeper peut accompagner presque n'importe quel personnage du jeu.",
    items: [
      {
        title: "Support universelle",
        body: "Si ton carry aime les buffs Crit, les soins et une rotation tres stable, Shorekeeper a deja une bonne place."
      },
      {
        title: "A quoi penser au build",
        body: "Priorise l'ER puis choisis si tu veux un profil plus support, plus hybride ou plus offensif."
      },
      {
        title: "Quand la choisir",
        body: "Excellent pick des que tu veux securiser le contenu sans te fermer de synergies."
      }
    ]
  },
  summary: {
    title: "Verdict final",
    tagline: "Un support premium qui reste utile partout et qui recompense surtout une bonne gestion de la rotation.",
    body: [
      "Shorekeeper apporte un package extremement complet : soins continus, buffs Crit, amplification de degats et enorme confort de jeu.",
      "Sa seule vraie exigence est de tenir son energie. Une fois ce point verrouille, elle devient l'un des supports les plus faciles a justifier dans le roster."
    ],
    pros: [
      "Buffs Crit uniques et tres puissants.",
      "Soins continus importants pour toute l'equipe.",
      "Amplification de degats via l'Outro.",
      "Tres flexible et facile a integrer dans beaucoup de teams.",
      "Peut aussi produire un vrai pic de degats via Discernment."
    ],
    cons: [
      "Demande une bonne base d'ER.",
      "Ses meilleures rotations prennent un peu de pratique.",
      "Moins naturelle que Verina si tu joues des synergies basees sur les attaques coordonnees."
    ]
  }
};
