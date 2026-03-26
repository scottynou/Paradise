(function () {
  var site = window.ParadiseSiteData;
  var shared = window.ParadiseSharedData;
  var modeCopy = {
    TOA: "Tower of Adversity",
    WW: "Whimpering Wastes",
  };

  if (!site || !shared) {
    return;
  }

  function renderModeButtons(activeMode) {
    return ["TOA", "WW"]
      .map(function (modeKey) {
        var isActive = modeKey === activeMode;

        return [
          '<button class="guide-tier-widget__button' + (isActive ? " is-active" : "") + '"',
          ' type="button"',
          ' data-guide-tier-mode="' + site.escapeHTML(modeKey) + '"',
          ' aria-selected="' + String(isActive) + '">',
          '  <strong>' + site.escapeHTML(modeKey) + "</strong>",
          '  <span>' + site.escapeHTML(modeCopy[modeKey]) + "</span>",
          "</button>",
        ].join("");
      })
      .join("");
  }

  function renderEntries(entries) {
    if (!entries.length) {
      return [
        '<article class="guide-tier-empty">',
        "  <strong>Aucun placement pour ce mode</strong>",
        "  <p>Ce personnage n'apparait pas encore dans ce mode pour l'instant.</p>",
        "</article>",
      ].join("");
    }

    return [
      '<div class="guide-tier-widget__entries">',
      entries
        .map(function (entry) {
          return [
            '<article class="guide-tier-entry">',
            '  <span class="guide-tier-entry__role">' + site.escapeHTML(entry.roleLabel) + "</span>",
            '  <strong class="guide-tier-entry__tier">' + site.escapeHTML(entry.tier) + "</strong>",
            '  <p class="guide-tier-entry__body">Placement centralise pour ce role dans le mode actif.</p>',
            "</article>",
          ].join("");
        })
        .join(""),
      "</div>",
    ].join("");
  }

  function renderError(root, modeKey) {
    root.innerHTML = [
      '<div class="guide-tier-widget">',
      '  <div class="guide-tier-widget__switch" role="tablist" aria-label="Choisir le mode">',
      renderModeButtons(modeKey),
      "  </div>",
      '  <article class="guide-tier-empty">',
      "    <strong>Lecture impossible</strong>",
      "    <p>La source centralisee n'a pas pu etre lue pour cette section.</p>",
      "  </article>",
      "</div>",
    ].join("");
  }

  function renderLoading(root, modeKey) {
    root.innerHTML = [
      '<div class="guide-tier-widget">',
      '  <p class="guide-tier-widget__hint">Lecture centralisee par mode. Un personnage peut exister dans plusieurs roles avec des tiers differents.</p>',
      '  <div class="guide-tier-widget__switch" role="tablist" aria-label="Choisir le mode">',
      renderModeButtons(modeKey),
      "  </div>",
      '  <article class="guide-tier-empty">',
      "    <strong>Chargement</strong>",
      "    <p>Recuperation des placements partages...</p>",
      "  </article>",
      "</div>",
    ].join("");
  }

  function render(root) {
    var characterId = root.__guideTierCharacterId;
    var modeKey = root.__guideTierMode || "TOA";

    if (!characterId) {
      return;
    }

    renderLoading(root, modeKey);

    shared
      .getCharacterTierEntries(characterId, modeKey)
      .then(function (entries) {
        root.innerHTML = [
          '<div class="guide-tier-widget">',
          '  <p class="guide-tier-widget__hint">Lecture centralisee par mode. Un personnage peut exister dans plusieurs roles avec des tiers differents.</p>',
          '  <div class="guide-tier-widget__switch" role="tablist" aria-label="Choisir le mode">',
          renderModeButtons(modeKey),
          "  </div>",
          renderEntries(entries),
          "</div>",
        ].join("");
      })
      .catch(function (error) {
        console.error("[Guide tier] render failed", error);
        renderError(root, modeKey);
      });
  }

  function mount(root, options) {
    var settings = options || {};

    if (!root) {
      return;
    }

    root.__guideTierCharacterId = settings.characterId || root.getAttribute("data-character-id") || root.__guideTierCharacterId;
    root.__guideTierMode = settings.mode || root.__guideTierMode || "TOA";

    if (!root.__guideTierBound) {
      root.addEventListener("click", function (event) {
        var button = event.target.closest("[data-guide-tier-mode]");
        var nextMode;

        if (!button) {
          return;
        }

        nextMode = button.getAttribute("data-guide-tier-mode");
        if (!nextMode || nextMode === root.__guideTierMode) {
          return;
        }

        root.__guideTierMode = nextMode;
        render(root);
      });

      root.__guideTierBound = true;
    }

    render(root);
  }

  window.ParadiseGuideTier = {
    mount: mount,
  };
}());
