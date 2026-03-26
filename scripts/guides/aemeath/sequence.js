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
      tag: "Confort",
      title: "S1 - L'aspiration qui change tout",
      lead:
        "Confort de rotation solide, surtout appreciable en contenu de zone.",
      bullets: [
        "Les Attaques lourdes en forme Aemeath et Mecha gagnent +300 % de degats critiques.",
        "Attire en continu les ennemis proches pendant la charge.",
        "Hors combat, une Attaque lourde chargee permet de recuperer 100 points de Taux de synchronisation.",
      ],
      note:
        "Un palier de confort solide, surtout utile en contenu de zone.",
    },
    S2: {
      tag: "Forte",
      title: "S2 - Le coeur des degats",
      lead:
        "Le palier le plus rentable en termes de gain de degats pur.",
      bullets: [
        "Duo de plumes seraphiques : Ouverture et Bis voient leurs multiplicateurs doubles.",
        "En mode Rupture d'accord, une meme cible peut subir jusqu'a +100 % de multiplicateur avec 5 cumuls.",
        "En mode Explosion fusion, l'Effet de l'explosion fusion est amplifie et se declenche automatiquement a la mort d'un ennemi proche.",
      ],
      note:
        "Le palier le plus rentable en termes de gain de degats pur.",
    },
    S3: {
      tag: "Critiques",
      title: "S3 - L'Ultime passe a la vitesse superieure",
      lead:
        "Indispensable si vous jouez Aemeath comme attaquante principale en fin de jeu.",
      bullets: [
        "Edit celeste : Final voit son multiplicateur doubler et son amplification augmenter de 25 %.",
        "Edit celeste : Surcharge gagne +40 % de multiplicateur.",
        "+60 % de degats critiques tant que l'equipe applique Rupture d'accord ou Explosion fusion.",
      ],
      note:
        "Indispensable si vous jouez Aemeath comme attaquante principale en fin de jeu.",
    },
    S4: {
      tag: "Equipe",
      title: "S4 - Un buff pour tous",
      lead:
        "Interessant dans les equipes hybrides ou a double attaquant.",
      bullets: [
        "+20% de bonus de DGT tous elements pour toute l'equipe pendant 30s.",
        "Le buff se declenche via la Competence d'Intro, les Competences resonatrices et les Frappes synchro.",
        "Apporte une vraie valeur de soutien meme hors composition a un seul attaquant.",
      ],
      note:
        "Interessant dans les equipes hybrides ou a double attaquant.",
    },
    S5: {
      tag: "Survie",
      title: "S5 - Une vie de secours",
      lead:
        "Utile pour les contenus difficiles, mais sans impact offensif direct.",
      bullets: [
        "En cas de coup fatal, Aemeath entre en etat de fantome numerique en 2D pendant 5 secondes.",
        "Accorde a toute l'equipe un Bouclier equivalent a 360% de son ATQ.",
        "Se revitalise avec 100% de ses PV et 30 points d'Energie, une fois toutes les 10 minutes.",
      ],
      note:
        "Utile pour les contenus difficiles, mais sans impact offensif direct.",
    },
    S6: {
      tag: "Offensif",
      title: "S6 - Le plafond explose",
      lead:
        "S6 transforme Aemeath en veritable monstre de degats.",
      bullets: [
        "+40 % de degats de Liberation resonatrice sur les cibles touchees.",
        "La Rupture d'accord et l'Effet de l'explosion fusion peuvent infliger des coups critiques avec 80 % de taux critique et 275 % de degats critiques fixes.",
        "Les cumuls de Sillage via le Circuit Forte sont doubles, avec une limite portee a 60 en combat.",
      ],
      note:
        "Le palier ultime si vous cherchez le maximum absolu sur son profil offensif.",
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
