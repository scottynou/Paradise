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
      title: "S1 - Le pull qui change tout",
      lead:
        "Confort de rotation solide, surtout appreciable en contenu AoE.",
      bullets: [
        "Les Heavy Attacks en forme Aemeath et Mech gagnent +300% CRIT DMG.",
        "Attire en continu les ennemis proches pendant la charge.",
        "Hors combat, une Heavy Attack chargee permet de recuperer 100 points de Synchronisation.",
      ],
      note:
        "Un palier de confort solide, surtout utile en contenu AoE.",
    },
    S2: {
      tag: "Forte",
      title: "S2 - Le coeur des degats",
      lead:
        "Le palier le plus rentable en termes de gain de degats pur.",
      bullets: [
        "Seraphic Duet: Overture et Encore voient leurs multiplicateurs doubles.",
        "En mode Tune Rupture, la meme cible peut subir jusqu'a +100% de multiplicateur avec 5 stacks.",
        "En mode Fusion Burst, le Fusion Burst est amplifie et se declenche automatiquement a la mort d'un ennemi proche.",
      ],
      note:
        "Le palier le plus rentable en termes de gain de degats pur.",
    },
    S3: {
      tag: "Crit DMG",
      title: "S3 - L'Ultime passe a la vitesse superieure",
      lead:
        "Indispensable si vous jouez Aemeath comme DPS principale en endgame.",
      bullets: [
        "Heavenfall Edict: Finale voit son multiplicateur double et son Amplification augmente de 25%.",
        "Heavenfall Edict: Overdrive gagne +40% de multiplicateur.",
        "+60% CRIT DMG tant que l'equipe applique Tune Rupture ou Fusion Burst.",
      ],
      note:
        "Indispensable si vous jouez Aemeath comme DPS principale en endgame.",
    },
    S4: {
      tag: "Equipe",
      title: "S4 - Un buff pour tous",
      lead:
        "Interessant dans les equipes hybrides ou multi-DPS.",
      bullets: [
        "+20% de bonus de DGT tous elements pour toute l'equipe pendant 30s.",
        "Le buff se declenche via l'Intro Skill, les Competences de resonance et les Sync Strikes.",
        "Apporte une vraie valeur de soutien meme hors hypercarry pure.",
      ],
      note:
        "Interessant dans les equipes hybrides ou multi-DPS.",
    },
    S5: {
      tag: "Survie",
      title: "S5 - Une vie de secours",
      lead:
        "Utile pour les contenus difficiles, mais sans impact offensif direct.",
      bullets: [
        "En cas de coup fatal, Aemeath entre en etat 2D Digital Ghost pendant 5 secondes.",
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
        "+40% de degats de Liberation de resonance sur les cibles touchees.",
        "Tune Rupture et Fusion Burst peuvent crit avec 80% de Crit Rate et 275% de Crit DMG fixes.",
        "Les stacks de Trail via le Forte sont doubles, avec une limite portee a 60 en combat.",
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
