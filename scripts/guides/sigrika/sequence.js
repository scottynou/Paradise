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
      tag: "Lecture utile 1",
      title: "S1 - Premier palier a completer",
      lead:
        "Description placeholder de la premiere sequence. Cette phrase doit etre remplacee par une analyse concrete du gain reel.",
      bullets: [
        "Premier point placeholder sur l'impact du palier.",
        "Deuxieme point placeholder pour garder la densite de lecture.",
        "Troisieme point placeholder si besoin d'un detail supplementaire.",
      ],
      note:
        "Conclusion courte placeholder pour resumer a qui cette sequence profite vraiment.",
    },
    S2: {
      tag: "Lecture utile 2",
      title: "S2 - Renfort d'equipe",
      lead:
        "Placeholder d'analyse pour un second palier davantage centre sur l'equipe ou le confort global.",
      bullets: [
        "Point placeholder a adapter selon le kit du personnage.",
        "Second point placeholder avec un volume similaire au guide de reference.",
      ],
      note:
        "Petit resume placeholder a personnaliser.",
    },
    S3: {
      tag: "Lecture utile 3",
      title: "S3 - Rotation et rythme",
      lead:
        "Texte generic de longueur moyenne prevu pour un palier de rotation, de generation ou de fluidite.",
      bullets: [
        "Premier point placeholder.",
        "Deuxieme point placeholder.",
      ],
      note:
        "Note placeholder sur la sensation de jeu et la valeur reelle du palier.",
    },
    S4: {
      tag: "Lecture utile 4",
      title: "S4 - Sustain ou stabilite",
      lead:
        "Description generique a completer pour un palier orientee survie, confort ou maintien de ressources.",
      bullets: [
        "Point placeholder sur la survie ou le maintien.",
        "Point placeholder sur les situations ou cette sequence devient interessante.",
      ],
      note:
        "Conclusion placeholder pour situer le palier dans un plan d'investissement.",
    },
    S5: {
      tag: "Lecture utile 5",
      title: "S5 - Confort additionnel",
      lead:
        "Explication placeholder de longueur moyenne pour une sequence de confort ou de specialisation.",
      bullets: [
        "Premier point placeholder sur l'interet du palier.",
      ],
      note:
        "Resume placeholder a adapter librement.",
    },
    S6: {
      tag: "Lecture utile 6",
      title: "S6 - Palier final offensif",
      lead:
        "Derniere sequence placeholder. Utilisez cette zone pour presenter le pic de puissance, de burst ou de finition du personnage.",
      bullets: [
        "Premier point placeholder sur le gain offensif.",
        "Deuxieme point placeholder sur la valeur en contenu avance.",
      ],
      note:
        "Conclusion placeholder sur le profil de joueur concerne par ce dernier investissement.",
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
