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
      title: "S1 - Le vrai saut de confort",
      lead:
        "La première séquence change surtout la sensation de jeu : plus de rayon, plus de durée et moins de pression au moment du refresh.",
      bullets: [
        "Portée de soin et de buff fortement augmentée.",
        "Durée du Stellarealm plus longue.",
        "L'Intro renforcée ne termine plus immédiatement le Stellarealm existant.",
      ],
      note:
        "Si tu veux une séquence qui rend Shorekeeper plus agréable partout, c'est la plus marquante.",
    },
    S2: {
      tag: "Buff d'équipe",
      title: "S2 - Plus d'ATQ pour tout le monde",
      lead:
        "Cette séquence ajoute un vrai supplément de dégâts à la team en renforçant le premier palier du Stellarealm.",
      bullets: [
        "Les alliés proches gagnent un bonus d'ATQ significatif.",
        "Très simple à rentabiliser parce qu'il s'insère dans la rotation normale.",
      ],
      note:
        "Bonne séquence si tu joues autour d'un carry très gourmand en ATQ.",
    },
    S3: {
      tag: "Concerto",
      title: "S3 - Rotation plus rapide",
      lead:
        "Ici le but est surtout de rendre la chaîne Ult -> Outro -> Intro plus facile à reposer au bon moment.",
      bullets: [
        "Ajoute un supplément de Concerto lors de la Libération.",
        "Facilite l'accès aux transitions propres dans les rotations longues.",
      ],
      note:
        "Pas la plus spectaculaire visuellement, mais elle soutient bien la fluidité du personnage.",
    },
    S4: {
      tag: "Soin",
      title: "S4 - Grosse montée du sustain",
      lead:
        "Cette séquence pousse nettement la valeur heal de la Compétence résonatrice.",
      bullets: [
        "Bonus de soin très important sur la Skill.",
        "Particulièrement agréable en contenu prolongé ou si la team prend beaucoup de dégâts.",
      ],
      note:
        "À considérer surtout si tu utilises Shorekeeper avant tout pour le confort défensif.",
    },
    S5: {
      tag: "Contrôle",
      title: "S5 - Pull plus pratique",
      lead:
        "On gagne surtout en regroupement et en propreté de gameplay sur les packs d'ennemis.",
      bullets: [
        "Portée de traction améliorée sur les attaques concernées.",
      ],
      note:
        "Une séquence de confort, utile mais moins déterminante que S1 ou S6.",
    },
    S6: {
      tag: "Dégâts",
      title: "S6 - La grosse pointe offensive",
      lead:
        "La dernière séquence transforme l'Intro renforcée en vrai finisher et donne à Shorekeeper un pic de dégâts très visible.",
      bullets: [
        "Gros gain sur le multiplicateur de Discernment.",
        "Très forte montée des dégâts critiques personnels après l'Intro renforcée.",
      ],
      note:
        "C'est la séquence pour ceux qui veulent rentabiliser au maximum son volet offensif.",
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
