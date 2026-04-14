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
      filename: "5star_Emerald_Sentence.png",
      label: "Signature",
      percent: 100.0,
      note:
        "Sa meilleure option brute : Taux CRIT, ATQ, DGT d'Attaque lourde et un buff d'Écho pour toute l'équipe. Le gain est réel, mais pas indispensable.",
    },
    {
      filename: "5star_Red_Spring.png",
      label: "Alternative 5★",
      percent: 85.2,
      note:
        "Gros stat-stick Taux CRIT / ATQ. Qiuyuan n'exploite presque pas la partie centrée sur les attaques normales, mais les stats pures suffisent à la garder très haut.",
    },
    {
      filename: "5star_Blazing_Brilliance.png",
      label: "Alternative 5★",
      percent: 84.4,
      note:
        "Très bonne arme de stats pures grâce au DGT CRIT. Le passif orienté Skill sert peu ici, mais le socle 5★ reste excellent.",
    },
    {
      filename: "5star_Emerald_of_Genesis.png",
      label: "5★ permanente",
      percent: 84.1,
      note:
        "De loin sa meilleure 5★ toujours disponible. Recharge, Taux CRIT et ATQ collent parfaitement à son build pour une perte très faible face au top.",
    },
    {
      filename: "4star_Feather_Edge.png",
      label: "Battle Pass",
      percent: 80.1,
      note:
        "La meilleure 4★ offensive. La base ATQ reste inférieure à une 5★, mais elle apporte assez de stats pour rester très compétitive.",
    },
    {
      filename: "4star_Commando_of_Conviction.png",
      label: "4★ solide",
      percent: 74.1,
      note:
        "Beaucoup d'ATQ sur toute la rotation grâce au passif d'Intro. Simple, stable et totalement jouable si tu manques d'options premium.",
    },
    {
      filename: "5star_Bloodpacts_Pledge.png",
      label: "Meilleure gratuite",
      percent: 72.8,
      note:
        "Un pur stat-stick ATQ + Recharge. Qiuyuan n'utilise pas vraiment son passif, mais la base 5★ en fait malgré tout son meilleur choix gratuit.",
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
        '  <img src="' + entry.image + '" alt="' + weaponName + '" loading="lazy" decoding="async" />',
        "</div>",
        '<div class="weapon-card__body">',
        '  <div class="weapon-topline">',
        '    <div>',
        '      <p class="weapon-context">' + entry.label + '</p>',
        '      <h3>' + weaponName + '</h3>',
        '      <p class="weapon-note">' + entry.note + '</p>',
        '    </div>',
        '    <div class="weapon-percent-block" aria-label="Pourcentage relatif ' +
          formatPercent(entry.percent) +
          '">',
        '      <strong>' + formatPercent(entry.percent) + '</strong>',
        '    </div>',
        '  </div>',
        '  <div class="weapon-progress" aria-label="Pourcentage relatif ' +
          formatPercent(entry.percent) +
          '">',
        '    <div class="weapon-progress__track">',
        '      <span class="weapon-progress__fill" style="width:' + basePercent.toFixed(2) + '%;"></span>',
        overflowPercent > 0
          ? '      <span class="weapon-progress__overflow is-visible" style="width:' + overlayPercent.toFixed(2) + '%;"></span>'
          : "",
        '    </div>',
        '  </div>',
        '</div>',
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
          console.warn("[Qiuyuan] weapon registry failed", error);
        })
      : Promise.resolve();

  loadWeapons.then(renderWeapons);
};
