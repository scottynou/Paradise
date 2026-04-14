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
      filename: "5star_Thunderflare_Dominion.png",
      label: "Signature",
      percent: 100.0,
      note:
        "Son arme idéale : base ATQ monstrueuse, Taux CRIT, dégâts d'Attaque lourde et ignore DEF sur les lourdes dès que les boucliers tournent. Tout son kit est pensé pour l'exploiter.",
    },
    {
      filename: "5star_Verdant_Summit.png",
      label: "Alternative 5★",
      percent: 90.3,
      note:
        "L'une de ses meilleures alternatives premium. Beaucoup de DGT Attaque lourde, un bon socle 5★ et très peu de perte par rapport à la signature.",
    },
    {
      filename: "5star_Ages_of_Harvest.png",
      label: "Alternative 5★",
      percent: 80.4,
      note:
        "Très bon stat-stick Taux CRIT / ATQ. Une partie du passif cible la Skill, mais Augusta garde assez de dégâts de Compétence pour bien la rentabiliser.",
    },
    {
      filename: "5star_Wildfire_Mark.png",
      label: "Alternative 5★",
      percent: 77.3,
      note:
        "Elle l'utilise surtout pour ses stats brutes. Le passif lui sert peu directement, même s'il peut légèrement mieux s'intégrer quand Mortefi est dans l'équipe.",
    },
    {
      filename: "5star_Radiance_Cleaver.png",
      label: "5★ permanente",
      percent: 77.2,
      note:
        "Le meilleur vrai choix permanent : simple stat-stick ATQ + DGT CRIT, sans condition compliquée et sans dépendre d'une team précise.",
    },
    {
      filename: "5star_Kumokiri.png",
      label: "Alternative 5★",
      percent: 74.3,
      note:
        "Très confortable pour équilibrer le Taux CRIT, mais Augusta ne profite pratiquement pas de la partie centrée sur les dégâts de Libération.",
    },
    {
      filename: "5star_Lustrous_Razor.png",
      label: "5★ permanente",
      percent: 73.2,
      note:
        "Une option parfaitement jouable si tu n'as rien de mieux. La Recharge qu'elle apporte aide même à alléger un peu les besoins du build.",
    },
    {
      filename: "4star_Aureate_Zenith.png",
      label: "Battle Pass",
      percent: 71.0,
      note:
        "Sa meilleure 4★ offensive. À raffinement élevé, elle apporte énormément d'ATQ, de DGT Attaque lourde et de DGT CRIT malgré sa base ATQ plus faible qu'une 5★.",
    },
    {
      filename: "4star_Autumntrace.png",
      label: "Battle Pass",
      percent: 66.5,
      note:
        "Option Battle Pass plus classique : de bonnes stats globales, mais moins spécialisée et donc derrière Zénith doré sur Augusta.",
    },
    {
      filename: "4star_Waning_Redshift.png",
      label: "4★ solide",
      percent: 63.9,
      note:
        "Le meilleur choix 4★ hors Battle Pass. L'énergie plate qu'elle apporte rend son build beaucoup plus souple si ton roster est limité.",
    },
    {
      filename: "4star_Helios_Cleaver.png",
      label: "4★ solide",
      percent: 60.7,
      note:
        "Correcte au début, mais Augusta n'empile pas idéalement le passif lié aux Skills, ce qui la laisse derrière les autres options sérieuses.",
    },
    {
      filename: "4star_Meditations_on_Mercy.png",
      label: "Dernier recours",
      percent: 58.5,
      note:
        "Une simple arme de transition craftable. Le passif est quasi inutile ici, donc on la joue uniquement comme bâton de stats si tu n'as rien d'autre.",
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
          console.warn("[Augusta] weapon registry failed", error);
        })
      : Promise.resolve();

  loadWeapons.then(renderWeapons);
};
