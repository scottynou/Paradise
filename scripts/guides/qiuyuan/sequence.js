window.PageInit = window.PageInit || {};

window.PageInit["sequence"] = function () {
  const nodes = Array.from(document.querySelectorAll(".sequence-node"));
  const title = document.getElementById("seqTitle");
  const tag = document.getElementById("seqTag");
  const lead = document.getElementById("seqLead");
  const list = document.getElementById("seqList");
  const note = document.getElementById("seqNote");

  if (!nodes.length || !title || !tag || !lead || !list || !note) {
    return;
  }

  const data = {
    S1: {
      tag: "Confort de rotation",
      title: "S1 - Le palier qui sécurise vraiment le kit",
      lead:
        "La première séquence empêche l'interruption de ses lourdes de Forte et ajoute 20 % de Taux CRIT. C'est de très loin le plus gros gain de confort au quotidien.",
      bullets: [
        "Supprime le vrai défaut de S0 : perdre la chaîne Ainsi parle la lame : enseigner / sauver / sacrifier sur une interruption.",
        "Le bonus de Taux CRIT aide aussi à atteindre plus facilement le seuil de 65 % pour le buff de DGT CRIT de la Libération.",
        "Excellente séquence si tu le joues souvent en contenu exigeant ou sur des boss agressifs.",
      ],
      note:
        "La séquence la plus agréable à jouer si tu veux simplement fiabiliser tout son kit.",
    },
    S2: {
      tag: "Buff d'équipe",
      title: "S2 - Le meilleur renfort pour les carrys Echo Skill",
      lead:
        "Ombre du bambou donne 30 % supplémentaires d'Amplification de dégâts de Compétence d'Écho aux alliés proches. C'est le dupe qui pousse le plus clairement sa valeur de buffer pur.",
      bullets: [
        "Très fort pour Galbrena, Sigrika et tous les profils qui convertissent directement ce type de buff.",
        "S'ajoute naturellement à tout le reste de son package sans modifier la rotation.",
      ],
      note:
        "Si ton objectif est uniquement de maximiser ses équipes Echo Skill, S2 est la séquence la plus rentable après S1.",
    },
    S3: {
      tag: "Mode DPS",
      title: "S3 - Le palier qui lui ouvre un vrai rôle de DPS",
      lead:
        "Cette séquence ajoute un énorme gain à Coup scindant et débloque Cape de paille sous la pluie brumeuse, ce qui lui permet de relancer un second cycle complet.",
      bullets: [
        "Relance immédiatement 400 points de Soliloque de l'épéiste et renvoie vers Lavis d'encre 3 pour une seconde chaîne.",
        "Les lourdes de Forte gagnent un énorme supplément de multiplicateur, ce qui change vraiment son plafond personnel.",
        "En contrepartie, ses besoins en énergie montent et cette version est moins naturelle à jouer comme simple buffer.",
      ],
      note:
        "Le vrai pivot entre Qiuyuan hybride et Qiuyuan DPS.",
    },
    S4: {
      tag: "Stats",
      title: "S4 - +20 % ATQ",
      lead:
        "Un palier simple, propre et direct : plus d'ATQ, donc plus de dégâts personnels, sans rien changer à la rotation.",
      bullets: [
        "Gain plat toujours utile sur l'ensemble du kit.",
        "Beaucoup moins marquant que S1, S2 ou S3 en sensation de jeu.",
      ],
      note:
        "Bonne séquence de transition, mais rarement un objectif prioritaire à elle seule.",
    },
    S5: {
      tag: "Ignore DEF",
      title: "S5 - Plus de dégâts personnels",
      lead:
        "Qiuyuan ignore désormais 15 % de DEF quand il inflige des dégâts. C'est un pur palier de scaling offensif.",
      bullets: [
        "Augmente sensiblement sa partie dégâts sans rien demander de plus au joueur.",
        "Prend davantage de valeur si ton Qiuyuan est déjà très bien build ou joue S3+.",
      ],
      note:
        "Très bon palier de dégâts, mais secondaire si tu le joues avant tout comme buffer.",
    },
    S6: {
      tag: "Plafond maximal",
      title: "S6 - Le ceiling complet",
      lead:
        "To Sacrifice fige les ennemis, la sortie de Jet d'encre spirituel inflige des dégâts supplémentaires et Cape de paille sous la pluie brumeuse donne 100 % de DGT CRIT pendant 6 s.",
      bullets: [
        "Énorme montée sur son pic de dégâts personnels.",
        "Ajoute aussi un vrai contrôle utile sur certains packs grâce à la stagnation de To Sacrifice.",
        "Rentabilise pleinement le gameplay DPS ouvert par S3.",
      ],
      note:
        "Séquence de luxe pour pousser son plafond au maximum, pas une nécessité pour son rôle buffer.",
    },
  };

  function render(id) {
    const entry = data[id];
    if (!entry) {
      return;
    }

    tag.textContent = entry.tag;
    title.textContent = entry.title;
    lead.textContent = entry.lead;
    list.innerHTML = "";

    entry.bullets.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.appendChild(item);
    });

    note.textContent = entry.note;
  }

  function setActive(id) {
    nodes.forEach((node) => {
      const active = node.getAttribute("data-id") === id;
      node.classList.toggle("is-active", active);
    });

    render(id);
  }

  nodes.forEach((node) => {
    node.addEventListener("click", () => setActive(node.getAttribute("data-id")));
  });

  setActive("S1");
};
