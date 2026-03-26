window.PageInit = window.PageInit || {};

window.PageInit["armes"] = function () {
  const grid = document.getElementById("armesGrid");
  const modal = document.getElementById("armeModal");
  const modalImg = document.getElementById("armeModalImg");
  const modalCaption = document.getElementById("armeModalCaption");
  const weaponData = window.ParadiseWeaponData;

  if (!grid || !modal || !modalImg || !modalCaption) {
    return;
  }

  const formatPercent = (value) =>
    Number(value).toFixed(2).replace(".", ",") + "%";

  const weapons = [
    {
      filename: "5star_Everbright_Polestar.png",
      refine: "R1",
      label: "Meilleur choix",
      percent: 100.0,
      note:
        "L'arme signature d'Aemeath est clairement son meilleur choix. Elle lui apporte de la RES Fusion, de l'ignore DEF sur son Ultime, ainsi que du bonus de degats, du Taux CRIT et une tres grosse ATQ de base.",
    },
    {
      filename: "5star_Emerald_of_Genesis.png",
      refine: "R1",
      label: "Alternative 5 etoiles",
      percent: 83.5,
      note:
        "En supposant un substat de Recharge d'energie en moins, reinvesti dans les stats offensives. C'est sa deuxieme meilleure option et la meilleure 5 etoiles permanente : meme ATQ de base et meme Taux CRIT que sa signature, avec en plus de la Recharge d'energie et de l'ATQ%.",
    },
    {
      filename: "5star_Red_Spring.png",
      refine: "R1",
      label: "Alternative 5 etoiles",
      percent: 83.5,
      note:
        "Comme les autres 5 etoiles CRIT, elle peut legerement depasser Emeraude eternelle si Aemeath n'a pas besoin de Recharge d'energie supplementaire. Elle prend un petit avantage car Aemeath inflige aussi des degats d'Attaque normale que cette arme peut renforcer.",
    },
    {
      filename: "5star_Emerald_Sentence.png",
      refine: "R1",
      label: "Stat stick 5 etoiles",
      percent: 83.2,
      note:
        "Surtout une arme a stats pour Aemeath avec son ATQ et son Taux CRIT. Comme elle ne joue pas sur les degats d'Attaque lourde, elle profite peu de son effet principal, en dehors d'un leger bonus de degats d'Echo pour l'equipe.",
    },
    {
      filename: "5star_Blazing_Brilliance.png",
      refine: "R1",
      label: "Stat stick 5 etoiles",
      percent: 82.9,
      note:
        "Bonne arme de statistiques pour Aemeath avec ATQ et DGT CRIT, mais elle ne profite pas vraiment des effets centres sur les degats de Competence. Solide, sans etre optimisee pour elle.",
    },
    {
      filename: "4star_Feather_Edge.png",
      refine: "R5",
      label: "Meilleure 4 etoiles",
      percent: 78.1,
      note:
        "La meilleure 4 etoiles pour Aemeath. Elle exploite tres bien les bonus d'ATQ et de degats d'Ultime tout en apportant une statistique CRIT utile. Sa seule vraie limite reste son ATQ de base bien plus faible que celle des 5 etoiles.",
    },
    {
      filename: "4star_Somnoire_Anchor.png",
      refine: "R5",
      label: "Bonne 4 etoiles evenement",
      percent: 74.8,
      note:
        "Une bonne option evenementielle qui donne de la montee en puissance en ATQ et du Taux CRIT. C'est une 4 etoiles propre a jouer, mais elle reste nettement derriere toutes les bonnes 5 etoiles.",
    },
    {
      filename: "4star_Endless_Collapse.png",
      refine: "R5",
      label: "Option recharge",
      percent: 74.1,
      note:
        "Son principal interet est d'effacer presque tous les besoins en Recharge d'energie d'Aemeath tout en donnant un bon montant d'ATQ. En revanche, elle n'apporte pas grand-chose au-dela, donc il vaut mieux passer sur une 5 etoiles des que possible.",
    },
    {
      filename: "4star_Commando_of_Conviction.png",
      refine: "R5",
      label: "Option gratuite",
      percent: 73.9,
      note:
        "La meilleure option sans gacha pour debuter avec Aemeath. Elle se recupere gratuitement au debut du jeu et donne une base d'ATQ correcte, mais il faut la remplacer par une 5 etoiles des que possible.",
    },
  ];

  function getWeaponViewModel(weapon) {
    if (weaponData && typeof weaponData.decorateWeapon === "function") {
      const entry = weaponData.decorateWeapon(weapon);
      return Object.assign({}, entry, {
        image:
          entry.image && !/^([a-z]+:|\/)/i.test(entry.image)
            ? "../../" + entry.image
            : entry.image,
        fullName: entry.displayName + " (" + weapon.refine + ")",
      });
    }

    const fallbackName = String(
      (weapon && (weapon.displayName || weapon.englishName || weapon.filename)) || ""
    ).trim();

    return Object.assign({}, weapon, {
      stableId: String((weapon && (weapon.filename || weapon.englishName)) || "").trim(),
      displayName: fallbackName,
      fullName: fallbackName + " (" + weapon.refine + ")",
      image:
        "../../assets/img/armes/sabre/" +
        encodeURIComponent(String(weapon.filename || "").trim()),
    });
  }

  function renderWeapons() {
    grid.innerHTML = "";

    weapons.forEach((weapon, index) => {
      const entry = getWeaponViewModel(weapon);
      const weaponName = entry.fullName || entry.displayName || entry.englishName || "";
      const stableId = entry.stableId || "";
      const article = document.createElement("article");
      const basePercent = Math.min(entry.percent, 100);
      const overflowPercent = Math.max(entry.percent - 100, 0);
      const overlayPercent = Math.min(overflowPercent, 100);

      article.className = "weapon-card" + (index === 0 ? " weapon-card--top" : "");
      article.tabIndex = 0;

      if (stableId) {
        article.dataset.weaponId = stableId;
      }

      if (entry.rarity >= 3 && entry.rarity <= 5) {
        article.dataset.weaponRarity = String(entry.rarity);
      }

      article.innerHTML = [
        '<div class="weapon-card__media">',
        '  <img src="' + entry.image + '" alt="' + weaponName + '" loading="lazy" decoding="async" />',
        "</div>",
        '<div class="weapon-card__body">',
        '  <div class="weapon-topline">',
        "    <div>",
        '      <p class="weapon-context">' + entry.label + "</p>",
        "      <h3>" + weaponName + "</h3>",
        '      <p class="weapon-note">' + entry.note + "</p>",
        "    </div>",
        '    <div class="weapon-percent-block" aria-label="Pourcentage relatif ' +
          formatPercent(entry.percent) +
          '">',
        "      <strong>" + formatPercent(entry.percent) + "</strong>",
        "    </div>",
        "  </div>",
        '  <div class="weapon-progress" aria-label="Pourcentage relatif ' +
          formatPercent(entry.percent) +
          '">',
        '    <div class="weapon-progress__track">',
        '      <span class="weapon-progress__fill" style="width:' +
          basePercent.toFixed(2) +
          '%;"></span>',
        overflowPercent > 0
          ? '      <span class="weapon-progress__overflow is-visible" style="width:' +
            overlayPercent.toFixed(2) +
            '%;"></span>'
          : "",
        "    </div>",
        "  </div>",
        "</div>",
      ].join("");

      article.addEventListener("click", () => openModal(entry));
      article.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(entry);
        }
      });

      grid.appendChild(article);
    });
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
  }

  function openModal(weapon) {
    modalImg.src = weapon.image;
    modalImg.alt = weapon.fullName || weapon.displayName;
    modalCaption.textContent = (weapon.fullName || weapon.displayName) + " - " + weapon.label;
    modal.setAttribute("aria-hidden", "false");
  }

  modal.querySelector(".arme-modal__backdrop").addEventListener("click", closeModal);
  modal.querySelector(".close").addEventListener("click", closeModal);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  const loadWeapons =
    weaponData && typeof weaponData.load === "function"
      ? weaponData.load().catch((error) => {
          console.warn("[Aemeath] weapon registry failed", error);
        })
      : Promise.resolve();

  loadWeapons.then(renderWeapons);
};
