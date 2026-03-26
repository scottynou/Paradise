window.PageInit = window.PageInit || {};

window.PageInit["armes"] = function () {
  const grid = document.getElementById("armesGrid");
  const modal = document.getElementById("armeModal");
  const modalImg = document.getElementById("armeModalImg");
  const modalCaption = document.getElementById("armeModalCaption");
  const placeholderImage = "../../assets/img/placeholders/guide-template/weapon-art.svg";

  if (!grid || !modal || !modalImg || !modalCaption) {
    return;
  }

  const formatPercent = (value) => Number(value).toFixed(2).replace(".", ",") + "%";

  const weapons = [
    {
      stableId: "template-weapon-1",
      displayName: "[Arme 1]",
      label: "Meilleur choix",
      percent: 100.0,
      image: placeholderImage,
      note:
        "Description placeholder de l'arme principale. Detaillez ici l'effet, la logique de build et la place dans la rotation.",
    },
    {
      stableId: "template-weapon-2",
      displayName: "[Arme 2]",
      label: "Alternative recommandee",
      percent: 92.4,
      image: placeholderImage,
      note:
        "Alternative generique a completer. Ce texte sert a occuper le meme espace visuel que le guide de reference.",
    },
    {
      stableId: "template-weapon-3",
      displayName: "[Arme 3]",
      label: "Transition",
      percent: 84.8,
      image: placeholderImage,
      note:
        "Option de transition placeholder a adapter pour un profil plus accessible ou plus specialise.",
    },
    {
      stableId: "template-weapon-4",
      displayName: "[Arme 4]",
      label: "Alternative utilitaire",
      percent: 79.6,
      image: placeholderImage,
      note:
        "Derniere option placeholder. Remplacez ce texte par une analyse courte et concrete pour le personnage cible.",
    },
  ];

  function renderWeapons() {
    grid.innerHTML = "";

    weapons.forEach((entry, index) => {
      const article = document.createElement("article");
      const basePercent = Math.min(entry.percent, 100);
      const overflowPercent = Math.max(entry.percent - 100, 0);
      const overlayPercent = Math.min(overflowPercent, 100);

      article.className = "weapon-card" + (index === 0 ? " weapon-card--top" : "");
      article.tabIndex = 0;
      article.dataset.weaponId = entry.stableId;

      article.innerHTML = [
        '<div class="weapon-card__media">',
        '  <img src="' + entry.image + '" alt="' + entry.displayName + '" loading="lazy" decoding="async" />',
        "</div>",
        '<div class="weapon-card__body">',
        '  <div class="weapon-topline">',
        '    <div>',
        '      <p class="weapon-context">' + entry.label + "</p>",
        '      <h3>' + entry.displayName + "</h3>",
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
        '      <span class="weapon-progress__fill" style="width:' + basePercent.toFixed(2) + '%;"></span>',
        overflowPercent > 0
          ? '      <span class="weapon-progress__overflow is-visible" style="width:' + overlayPercent.toFixed(2) + '%;"></span>'
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

  renderWeapons();
};
