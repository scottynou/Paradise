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
      title: "S1 - Le palier qui sécurise le kit",
      lead:
        "Chaque stack de Couronne des volontés donne aussi 15 % de DGT CRIT, l'Intro en ajoute une et toute la chaîne renforcée devient insensible aux interruptions.",
      bullets: [
        "Le gain de confort est énorme, car une interruption sur Strike / Leap / Plunge ne casse plus la rotation.",
        "La stack gratuite via l'Intro rend l'ouverture plus stable et améliore tout de suite les dégâts du cycle.",
        "C'est la séquence la plus agréable si tu veux simplement fiabiliser Augusta au quotidien.",
      ],
      note:
        "Le meilleur premier palier à viser si tu la joues souvent.",
    },
    S2: {
      tag: "Scaling critique",
      title: "S2 - Le vrai boost de stats CRIT",
      lead:
        "Couronne des volontés donne désormais 20 % de Taux CRIT par stack, puis l'excédent au-dessus de 100 % se convertit en DGT CRIT jusqu'à +100 %.",
      bullets: [
        "Très fort si ton build approche déjà de bons seuils CRIT.",
        "Ne change pas la rotation, mais augmente fortement son scaling sur tout le cycle.",
      ],
      note:
        "Une grosse séquence de chiffres, plus impressionnante sur un build déjà avancé.",
    },
    S3: {
      tag: "Spike DPS",
      title: "S3 - Le gros palier de dégâts",
      lead:
        "Backstep, Spinslash, Uppercut, Plunge, Sunborne et Everbright Protector gagnent tous 25 % de multiplicateur supplémentaire.",
      bullets: [
        "Cible directement les vraies sources de dégâts qui font la valeur d'Augusta.",
        "Améliore autant son milieu de rotation que son énorme finisher.",
        "Si tu cherches un vrai saut de DPS ressenti, c'est ici qu'il se trouve.",
      ],
      note:
        "Le palier de dégâts le plus marquant avant le luxe complet de S6.",
    },
    S4: {
      tag: "Buff d'équipe",
      title: "S4 - +20 % ATQ pour tout le groupe",
      lead:
        "L'Intro donne désormais 20 % d'ATQ à toute l'équipe pendant 30 s. C'est simple, propre et toujours utile.",
      bullets: [
        "Augmente un peu plus la valeur globale de l'équipe sans demander de changement de rotation.",
        "Moins spectaculaire que S1 ou S3, mais jamais perdu.",
      ],
      note:
        "Bonne séquence de transition, surtout si tu veux aussi renforcer ses teammates.",
    },
    S5: {
      tag: "Palier mineur",
      title: "S5 - Plus de bouclier, peu de sensation",
      lead:
        "Le bouclier de Faveur de la gloire gagne 50 % de valeur. Le gain existe, mais il ne change pas fondamentalement la manière de jouer Augusta.",
      bullets: [
        "Améliore un peu le confort brut et la fiabilité des activations liées aux boucliers.",
        "Reste très loin derrière les vrais gros paliers offensifs du kit.",
      ],
      note:
        "Un palier correct, rarement un objectif à lui seul.",
    },
    S6: {
      tag: "Plafond maximal",
      title: "S6 - Le ceiling complet",
      lead:
        "Le nombre maximum de Couronnes des volontés monte à 4, l'excédent de Taux CRIT au-dessus de 150 % se convertit encore en DGT CRIT, et Thunder Rage ajoute des dégâts Electro d'Attaque lourde supplémentaires.",
      bullets: [
        "Pousse son scaling critique au maximum.",
        "Accélère encore l'empilement grâce aux charges supplémentaires générées par certaines lourdes.",
        "Transforme complètement le haut de sa courbe de dégâts.",
      ],
      note:
        "Séquence de luxe pour pousser Augusta à son plafond absolu.",
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
