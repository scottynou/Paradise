(function () {
  var site = window.ParadiseSiteData;
  var shared = window.ParadiseSharedData;
  var prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mount = document.getElementById("tierListMount");
  var modeSwitchNode = document.getElementById("modeSwitch");
  var rarityFiltersNode = document.getElementById("rarityFilters");
  var elementFiltersNode = document.getElementById("elementFilters");
  var weaponFiltersNode = document.getElementById("weaponFilters");
  var clearFiltersNode = document.getElementById("clearFilters");
  var activeMode = "TOA";
  var currentModel = null;
  var modeViewModels = Object.create(null);
  var sharedState = null;
  var activeFilters = {
    rarity: null,
    element: null,
    weapon: null,
  };
  var elementIcons = {
    aero: "assets/img/element/element_aero.webp",
    electro: "assets/img/element/element_electro.webp",
    fusion: "assets/img/element/element_fusion.webp",
    glacio: "assets/img/element/element_glacio.webp",
    havoc: "assets/img/element/element_havoc.webp",
    spectro: "assets/img/element/element_spectro.webp",
  };
  var weaponIcons = {
    sword: "assets/img/types armes/\u00e9p\u00e9e.webp",
    broadblade: "assets/img/types armes/sabre.webp",
    pistols: "assets/img/types armes/pistolets.webp",
    gauntlets: "assets/img/types armes/gantelets.webp",
    rectifier: "assets/img/types armes/amplificateurs.webp",
  };
  var weaponOrder = ["sword", "broadblade", "pistols", "gauntlets", "rectifier"];
  var weaponLabels = {
    sword: "\u00c9p\u00e9e",
    broadblade: "Sabre",
    pistols: "Pistolets",
    gauntlets: "Gantelets",
    rectifier: "Amplificateur",
  };
  var modeCopy = {
    TOA: {
      label: "TOA",
      subtitle: "Tower of Adversity",
    },
    WW: {
      label: "WW",
      subtitle: "Whimpering Wastes",
    },
  };

  if (!site || !shared || !mount || !modeSwitchNode) {
    return;
  }

  function getRequestedMode() {
    var params = new URLSearchParams(window.location.search);
    return String(params.get("mode") || "").trim().toUpperCase();
  }

  function getInitialMode() {
    var availableModes = Object.keys((sharedState && sharedState.modes) || {});
    var requestedMode = getRequestedMode();

    if (availableModes.indexOf(requestedMode) >= 0) {
      return requestedMode;
    }

    if (availableModes.indexOf("TOA") >= 0) {
      return "TOA";
    }

    return availableModes[0] || "TOA";
  }

  function getElementKey(element) {
    return String(element || "").trim().toLowerCase();
  }

  function getWeaponKey(weapon) {
    var normalized = String(weapon || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    var aliases = {
      sword: "sword",
      epee: "sword",
      broadblade: "broadblade",
      sabre: "broadblade",
      pistols: "pistols",
      pistolet: "pistols",
      pistolets: "pistols",
      gauntlets: "gauntlets",
      gantelet: "gauntlets",
      gantelets: "gauntlets",
      rectifier: "rectifier",
      amplificateur: "rectifier",
      amplificateurs: "rectifier",
    };

    return aliases[normalized] || normalized;
  }

  function getElementIconPath(element) {
    var key = getElementKey(element);
    return elementIcons[key] ? site.resolvePath(elementIcons[key]) : "";
  }

  function getWeaponIconPath(weapon) {
    var key = getWeaponKey(weapon);
    return weaponIcons[key] ? site.resolvePath(weaponIcons[key]) : "";
  }

  function formatRarityLabel(value) {
    return String(value) + " etoiles";
  }

  function formatWeaponLabel(weaponKey) {
    return weaponLabels[weaponKey] || "Arme";
  }

  function toTransitionToken(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function renderModeSwitch() {
    var modes = Object.keys((sharedState && sharedState.modes) || {});

    modeSwitchNode.innerHTML = modes
      .map(function (modeKey) {
        var copy = modeCopy[modeKey] || { label: modeKey, subtitle: "Mode" };

        return [
          '<button class="mode-switch__button" type="button" role="tab"',
          ' data-mode="' + site.escapeHTML(modeKey) + '"',
          ' aria-selected="false">',
          '  <span class="mode-switch__art" aria-hidden="true">',
          '    <img src="' +
            site.getModeArtwork(modeKey) +
            '" alt="" loading="eager" fetchpriority="high" decoding="async" width="1600" height="900" />',
          "  </span>",
          '  <span class="mode-switch__copy">',
          "    <strong>" + site.escapeHTML(copy.label) + "</strong>",
          "    <small>" + site.escapeHTML(copy.subtitle) + "</small>",
          "  </span>",
          "</button>",
        ].join("");
      })
      .join("");

    syncModeButtons();
  }

  function renderRarityFilters(characters) {
    var rarities;

    if (!rarityFiltersNode) {
      return;
    }

    rarities = Array.from(
      new Set(
        characters.map(function (character) {
          return String(character.rarity);
        })
      )
    ).sort(function (left, right) {
      return Number(right) - Number(left);
    });

    rarityFiltersNode.innerHTML = rarities
      .map(function (rarity) {
        return [
          '<button class="filter-pill filter-pill--rarity" type="button"',
          ' data-filter-group="rarity"',
          ' data-filter-value="' + site.escapeHTML(rarity) + '"',
          ' aria-pressed="false"',
          ' title="' + site.escapeHTML(formatRarityLabel(rarity)) + '">',
          '  <span>' + site.escapeHTML(rarity) + '<span class="filter-pill__star" aria-hidden="true">&#9733;</span></span>',
          "</button>",
        ].join("");
      })
      .join("");
  }

  function renderElementFilters(characters) {
    var elements;

    if (!elementFiltersNode) {
      return;
    }

    elements = Array.from(
      new Set(
        characters.map(function (character) {
          return getElementKey(character.element);
        })
      )
    ).sort(function (left, right) {
      return site.formatElementLabel(left).localeCompare(site.formatElementLabel(right), "fr", {
        sensitivity: "base",
      });
    });

    elementFiltersNode.innerHTML = elements
      .map(function (elementKey) {
        var label = site.formatElementLabel(elementKey);
        var iconPath = getElementIconPath(elementKey);

        return [
          '<button class="filter-pill filter-pill--icon filter-pill--element" type="button"',
          ' data-filter-group="element"',
          ' data-filter-value="' + site.escapeHTML(elementKey) + '"',
          ' aria-pressed="false"',
          ' aria-label="' + site.escapeHTML(label) + '"',
          ' title="' + site.escapeHTML(label) + '">',
          iconPath
            ? '  <img class="filter-pill__icon" src="' + iconPath + '" alt="" loading="lazy" decoding="async" />'
            : '  <span class="filter-pill__fallback" aria-hidden="true">' + site.escapeHTML(label.charAt(0)) + "</span>",
          "</button>",
        ].join("");
      })
      .join("");
  }

  function renderWeaponFilters(characters) {
    var weapons;

    if (!weaponFiltersNode) {
      return;
    }

    weapons = weaponOrder.filter(function (weaponKey) {
      return characters.some(function (character) {
        return getWeaponKey(character.weapon) === weaponKey;
      });
    });

    weaponFiltersNode.innerHTML = weapons
      .map(function (weaponKey) {
        var label = formatWeaponLabel(weaponKey);
        var iconPath = getWeaponIconPath(weaponKey);

        return [
          '<button class="filter-pill filter-pill--icon filter-pill--weapon" type="button"',
          ' data-filter-group="weapon"',
          ' data-filter-value="' + site.escapeHTML(weaponKey) + '"',
          ' aria-pressed="false"',
          ' aria-label="' + site.escapeHTML(label) + '"',
          ' title="' + site.escapeHTML(label) + '">',
          iconPath
            ? '  <img class="filter-pill__icon" src="' + iconPath + '" alt="" loading="lazy" decoding="async" />'
            : '  <span class="filter-pill__fallback" aria-hidden="true">' + site.escapeHTML(label.charAt(0)) + "</span>",
          "</button>",
        ].join("");
      })
      .join("");
  }

  function renderFilterControls() {
    if (!sharedState) {
      return;
    }

    renderRarityFilters(sharedState.characters);
    renderElementFilters(sharedState.characters);
    renderWeaponFilters(sharedState.characters);
    syncFilterButtons();
    updateResetState();
  }

  function syncModeButtons() {
    modeSwitchNode.querySelectorAll("[data-mode]").forEach(function (button) {
      var isActive = button.getAttribute("data-mode") === activeMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function syncFilterButtons() {
    document.querySelectorAll("[data-filter-group][data-filter-value]").forEach(function (button) {
      var group = button.getAttribute("data-filter-group");
      var value = button.getAttribute("data-filter-value");
      var isActive = activeFilters[group] === value;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function hasActiveFilters() {
    return Boolean(activeFilters.rarity || activeFilters.element || activeFilters.weapon);
  }

  function updateResetState() {
    if (!clearFiltersNode) {
      return;
    }

    clearFiltersNode.disabled = !hasActiveFilters();
  }

  function matchesFilters(character) {
    var matchesRarity = !activeFilters.rarity || String(character.rarity) === activeFilters.rarity;
    var matchesElement = !activeFilters.element || getElementKey(character.element) === activeFilters.element;
    var matchesWeapon = !activeFilters.weapon || getWeaponKey(character.weapon) === activeFilters.weapon;

    return matchesRarity && matchesElement && matchesWeapon;
  }

  function buildTierMatrixRows() {
    var shouldFilter = hasActiveFilters();

    return currentModel.tierOrder.map(function (tierName, tierIndex) {
      return {
        tier: tierName,
        roles: currentModel.roles.map(function (role) {
          var tierEntry = role.tiers[tierIndex];
          var characters = tierEntry ? tierEntry.characters : [];

          return {
            id: role.id,
            label: role.label,
            characters: shouldFilter ? characters.filter(matchesFilters) : characters,
          };
        }),
      };
    });
  }

  function renderTierCard(character, roleId) {
    var elementKey = getElementKey(character.element);
    var elementIcon = getElementIconPath(character.element);
    var transitionName = "tier-card-" + toTransitionToken(roleId) + "-" + toTransitionToken(character.id);

    return [
      '<a class="tier-character" href="' + site.getGuideUrl(character.guideSlug) + '"',
      ' style="view-transition-name: ' + site.escapeHTML(transitionName) + ';"',
      ' aria-label="' + site.escapeHTML(character.name) + '"',
      ' title="' + site.escapeHTML(character.name) + '">',
      '  <div class="tier-character__media" data-element="' + site.escapeHTML(elementKey) + '">',
      elementIcon
        ? '    <span class="tier-character__element" aria-hidden="true"><img src="' +
          elementIcon +
          '" alt="" loading="lazy" decoding="async" /></span>'
        : '    <span class="tier-character__element tier-character__element--fallback" aria-hidden="true">' +
          site.escapeHTML(character.element.charAt(0)) +
          "</span>",
      '    <img class="tier-character__portrait" src="' +
        site.resolvePath(character.icon) +
        '" alt="' +
        site.escapeHTML(character.name) +
        '" loading="lazy" decoding="async" width="100" height="100" />',
      '    <span class="tier-character__name">' + site.escapeHTML(character.name) + "</span>",
      "  </div>",
      "</a>",
    ].join("");
  }

  function renderTierCell(roleEntry, tierName) {
    var transitionName = "tier-cell-" + toTransitionToken(roleEntry.id) + "-" + toTransitionToken(tierName);

    return [
      '<section class="tier-cell' +
        (roleEntry.characters.length ? "" : " tier-cell--empty") +
        '" data-role="' +
        site.escapeHTML(roleEntry.id) +
        '" style="view-transition-name: ' +
        site.escapeHTML(transitionName) +
        ';">',
      '  <span class="tier-cell__role">' + site.escapeHTML(roleEntry.label) + "</span>",
      '  <div class="tier-cell__cards' +
        (roleEntry.characters.length ? "" : " tier-cell__cards--empty") +
        '">' +
        (roleEntry.characters.length
          ? roleEntry.characters
              .map(function (character) {
                return renderTierCard(character, roleEntry.id);
              })
              .join("")
          : '<span class="tier-cell__placeholder" aria-hidden="true"></span>') +
        "</div>",
      "</section>",
    ].join("");
  }

  function renderTierRow(tierRow) {
    var transitionName = "tier-row-" + toTransitionToken(tierRow.tier);

    return [
      '<article class="tier-row" data-tier="' +
        site.escapeHTML(tierRow.tier) +
        '" style="view-transition-name: ' +
        site.escapeHTML(transitionName) +
        ';">',
      '  <div class="tier-row__label">',
      '    <strong>' + site.escapeHTML(tierRow.tier) + "</strong>",
      "  </div>",
      '  <div class="tier-row__roles">' +
        tierRow.roles
          .map(function (roleEntry) {
            return renderTierCell(roleEntry, tierRow.tier);
          })
          .join("") +
        "</div>",
      "</article>",
    ].join("");
  }

  function renderTierMatrix() {
    var rows = buildTierMatrixRows();
    var hasVisibleCharacters = rows.some(function (tierRow) {
      return tierRow.roles.some(function (roleEntry) {
        return roleEntry.characters.length > 0;
      });
    });

    return [
      '<section class="tier-matrix' + (hasVisibleCharacters ? "" : " tier-matrix--empty") + '">',
      '  <header class="tier-matrix__head">',
      '    <div class="tier-matrix__corner" aria-hidden="true"></div>',
      '    <div class="tier-matrix__roles">',
      currentModel.roles
        .map(function (role) {
          return [
            '<div class="tier-matrix__role" data-role="' + site.escapeHTML(role.id) + '">',
            "  <span>" + site.escapeHTML(role.label) + "</span>",
            "</div>",
          ].join("");
        })
        .join(""),
      "    </div>",
      "  </header>",
      !hasVisibleCharacters
        ? '  <p class="tier-matrix__notice">Aucun personnage ne correspond aux filtres actuels.</p>'
        : "",
      rows
        .map(function (tierRow) {
          return renderTierRow(tierRow);
        })
        .join(""),
      "</section>",
    ].join("");
  }

  function renderError(message) {
    mount.innerHTML = [
      '<article class="directory-empty">',
      "  <strong>Chargement impossible</strong>",
      "  <p>" + site.escapeHTML(message) + "</p>",
      "</article>",
    ].join("");
  }

  function commitRender() {
    if (!currentModel) {
      return;
    }

    mount.innerHTML = renderTierMatrix();
    syncModeButtons();
    syncFilterButtons();
    updateResetState();
  }

  function renderCurrentModel(options) {
    var settings = options || {};
    var shouldAnimate =
      settings.animate === true &&
      !prefersReducedMotion &&
      typeof document.startViewTransition === "function";
    var transition;

    if (!currentModel) {
      return Promise.resolve();
    }

    if (!shouldAnimate) {
      commitRender();
      return Promise.resolve();
    }

    transition = document.startViewTransition(function () {
      commitRender();
    });

    return transition.finished.catch(function () {
      return null;
    });
  }

  function getModeViewModel(modeKey) {
    var cacheKey = String(modeKey || "TOA").toUpperCase();

    if (modeViewModels[cacheKey]) {
      return Promise.resolve(modeViewModels[cacheKey]);
    }

    return shared.buildTierListViewModel(modeKey).then(function (model) {
      modeViewModels[model.mode] = model;
      return model;
    });
  }

  function loadMode(modeKey, options) {
    return getModeViewModel(modeKey).then(function (model) {
      currentModel = model;
      return renderCurrentModel(options);
    });
  }

  function toggleFilter(group, value) {
    activeFilters[group] = activeFilters[group] === value ? null : value;
    syncFilterButtons();
    updateResetState();
    renderCurrentModel({ animate: false });
  }

  function initModeEvents() {
    modeSwitchNode.addEventListener("click", function (event) {
      var button = event.target.closest("[data-mode]");
      var nextMode;
      var previousMode;

      if (!button) {
        return;
      }

      nextMode = button.getAttribute("data-mode");
      if (!nextMode || nextMode === activeMode) {
        return;
      }

      previousMode = activeMode;
      activeMode = nextMode;
      syncModeButtons();
      loadMode(activeMode, { animate: false }).catch(function (error) {
        activeMode = previousMode;
        syncModeButtons();
        console.error("[Tier list] render failed", error);
        renderError("La lecture du mode selectionne a echoue.");
      });
    });
  }

  function initFilterEvents() {
    if (rarityFiltersNode) {
      rarityFiltersNode.addEventListener("click", function (event) {
        var button = event.target.closest("[data-filter-group='rarity']");
        if (!button) {
          return;
        }

        toggleFilter("rarity", button.getAttribute("data-filter-value"));
      });
    }

    if (elementFiltersNode) {
      elementFiltersNode.addEventListener("click", function (event) {
        var button = event.target.closest("[data-filter-group='element']");
        if (!button) {
          return;
        }

        toggleFilter("element", button.getAttribute("data-filter-value"));
      });
    }

    if (weaponFiltersNode) {
      weaponFiltersNode.addEventListener("click", function (event) {
        var button = event.target.closest("[data-filter-group='weapon']");
        if (!button) {
          return;
        }

        toggleFilter("weapon", button.getAttribute("data-filter-value"));
      });
    }

    if (clearFiltersNode) {
      clearFiltersNode.addEventListener("click", function () {
        activeFilters.rarity = null;
        activeFilters.element = null;
        activeFilters.weapon = null;
        syncFilterButtons();
        updateResetState();
        renderCurrentModel({ animate: false });
      });
    }
  }

  function init() {
    return shared
      .load()
      .then(function (data) {
        sharedState = data;
        activeMode = getInitialMode();
        renderModeSwitch();
        renderFilterControls();
        initModeEvents();
        initFilterEvents();
        return loadMode(activeMode, { animate: false });
      })
      .catch(function (error) {
        console.error("[Tier list] init failed", error);
        renderError(
          "La page a besoin des fichiers JSON centralises. Verifie le serveur local et les fichiers public/data."
        );
      });
  }

  init();
}());
