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

  const weaponImage = (filename) =>
    "../../assets/img/armes/amplificateurs/" + encodeURIComponent(filename);

  const formatPercent = (value) =>
    Number(value).toFixed(2).replace(".", ",") + "%";

  const weapons = [
    {
      filename: "5star_Stellar_Symphony.png",
      label: "Meilleur choix",
      percent: 116.3,
      image: weaponImage("5star_Stellar_Symphony.png"),
      note:
        "La référence si vous recherchez le package complet : recharge, Concerto et soutien d'équipe.",
    },
    {
      filename: "4star_Variation.png",
      label: "Alternative recommandée",
      percent: 100.0,
      image: weaponImage("4star_Variation.png"),
      note:
        "L'alternative la plus propre si vous n'avez pas la signature. Elle conserve une rotation très fluide.",
    },
    {
      filename: "4star_Rectifier25.png",
      label: "Transition",
      percent: 87.2,
      image: weaponImage("4star_Rectifier25.png"),
      note:
        "Le meilleur choix sans gacha. Bonne recharge d'énergie, petit bonus d'ATQ à la compétence et accès très simple.",
    },
    {
      filename: "4star_Call_of_the_Abyss.png",
      label: "Alternative soin",
      percent: 85.1,
      image: weaponImage("4star_Call_of_the_Abyss.png"),
      note:
        "Option plus orientée soin, offerte gratuitement via Rinascita, avec une recharge d'énergie solide et un vrai profil support.",
    },
  ];

  function getWeaponViewModel(weapon) {
    if (weaponData && typeof weaponData.decorateWeapon === "function") {
      return weaponData.decorateWeapon(weapon);
    }

    return Object.assign({}, weapon, {
      stableId: String((weapon && (weapon.filename || weapon.englishName)) || "").trim(),
      displayName: String((weapon && (weapon.displayName || weapon.englishName)) || "").trim(),
    });
  }

  function renderWeapons() {
    grid.innerHTML = "";

    weapons.forEach((weapon, index) => {
      const entry = getWeaponViewModel(weapon);
      const weaponName = entry.displayName || entry.englishName || "";
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
        '  <img src="' + entry.image + '" alt="' + weaponName + '" loading="lazy" />',
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
    modalImg.alt = weapon.displayName;
    modalCaption.textContent = weapon.displayName + " - " + weapon.label;
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
          console.warn("[Shorekeeper] weapon registry failed", error);
        })
      : Promise.resolve();

  loadWeapons.then(renderWeapons);
};
