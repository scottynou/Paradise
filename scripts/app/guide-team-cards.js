(function () {
  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      switch (character) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        default:
          return character;
      }
    });
  }

  function getGuideHref(item) {
    var site = window.ParadiseSiteData;
    var explicitHref = String((item && item.href) || "").trim();
    var guideSlug = String(
      (item && (item.guideSlug || item.slug || item.id)) || ""
    ).trim();

    if (explicitHref) {
      return explicitHref;
    }

    if (site && guideSlug && typeof site.getGuideUrl === "function") {
      return site.getGuideUrl(guideSlug);
    }

    return "";
  }

  function renderLinkableBlock(className, item, body, options) {
    var settings = options || {};
    var fallbackTag = settings.tagName || "div";
    var href = getGuideHref(item);
    var tagName = href ? "a" : fallbackTag;
    var label = String((item && item.name) || "").trim();
    var attributes = ['class="' + className + '"'];

    if (href) {
      attributes.push('href="' + escapeHTML(href) + '"');
    }

    if (label) {
      attributes.push('title="' + escapeHTML(label) + '"');
      attributes.push('aria-label="' + escapeHTML("Ouvrir le guide de " + label) + '"');
    }

    return [
      "<" + tagName + " " + attributes.join(" ") + ">",
      body,
      "</" + tagName + ">",
    ].join("");
  }

  function renderLegendItem(item) {
    return [
      '<span class="team-legend__item">',
      '  <span class="team-legend__dot team-legend__dot--' +
        escapeHTML(item.tone || "main") +
        '" aria-hidden="true"></span>',
      "  " + escapeHTML(item.label || ""),
      "</span>",
    ].join("");
  }

  function renderAlternative(item) {
    return [
      '<li class="team-slot__alt-item">',
      renderLinkableBlock(
        "team-alt-card",
        item,
        [
          '  <span class="team-alt-card__portrait">',
          '    <img src="' +
            escapeHTML(item.image || "") +
            '" alt="' +
            escapeHTML(item.name || "") +
            '" loading="lazy" decoding="async" />',
          "  </span>",
          '  <span class="team-alt-card__meta">',
          '    <strong class="team-alt-card__name">' + escapeHTML(item.name || "") + "</strong>",
          item.role
            ? '    <span class="team-alt-card__role">' + escapeHTML(item.role) + "</span>"
            : "",
          "  </span>",
        ].join(""),
        { tagName: "div" }
      ),
      "</li>",
    ].join("");
  }

  function renderSlot(slot) {
    var alternatives = Array.isArray(slot.alternatives)
      ? slot.alternatives.slice(0, 3)
      : [];

    return [
      '<article class="team-slot">',
      renderLinkableBlock(
        "team-slot__main",
        slot,
        [
          '  <div class="team-slot__portrait-shell">',
          '    <img src="' +
            escapeHTML(slot.image || "") +
            '" alt="' +
            escapeHTML(slot.name || "") +
            '" loading="lazy" decoding="async" />',
          "  </div>",
          '  <div class="team-slot__copy">',
          '    <h4 class="team-slot__name">' + escapeHTML(slot.name || "") + "</h4>",
          slot.role
            ? '    <p class="team-slot__role">' + escapeHTML(slot.role) + "</p>"
            : "",
          "  </div>",
        ].join(""),
        { tagName: "div" }
      ),
      alternatives.length
        ? [
            '  <div class="team-slot__alternatives">',
            '    <span class="team-slot__alt-label">Alternatives</span>',
            '    <ul class="team-slot__alt-list">',
            alternatives.map(renderAlternative).join(""),
            "    </ul>",
            "  </div>",
          ].join("")
        : "",
      "</article>",
    ].join("");
  }

  function renderCard(card, index) {
    return [
      '<article class="team-card' + (card.featured ? " team-card--featured" : "") + '">',
      '  <header class="team-card__header">',
      '    <div class="team-card__intro">',
      card.eyebrow
        ? '      <span class="team-card__eyebrow">' + escapeHTML(card.eyebrow) + "</span>"
        : "",
      '      <h3 class="team-card__title">' + escapeHTML(card.title || "") + "</h3>",
      card.description
        ? '      <p class="team-card__description">' + escapeHTML(card.description) + "</p>"
        : "",
      "    </div>",
      '    <span class="team-card__index">' +
        escapeHTML(String(index + 1).padStart(2, "0")) +
        "</span>",
      "  </header>",
      '  <div class="team-lineup">',
      (card.slots || []).slice(0, 3).map(renderSlot).join(""),
      "  </div>",
      card.footer
        ? [
            '  <footer class="team-card__footer">',
            '    <span class="team-card__footer-label">' +
              escapeHTML(card.footerLabel || "Pourquoi elle marche") +
              "</span>",
            "    " + escapeHTML(card.footer),
            "  </footer>",
          ].join("")
        : "",
      "</article>",
    ].join("");
  }

  function renderMinimalPortrait(item, className) {
    var label = escapeHTML(item.name || "");

    if (item.image) {
      return [
        '<span class="' + className + '" title="' + label + '">',
        '  <img src="' +
          escapeHTML(item.image) +
          '" alt="' +
          label +
          '" loading="lazy" decoding="async" />',
        "</span>",
      ].join("");
    }

    return [
      '<span class="' +
        className +
        " " +
        className +
        '--placeholder" role="img" aria-label="' +
        label +
        '">',
      escapeHTML((item.name || "?").slice(0, 1).toUpperCase()),
      "</span>",
    ].join("");
  }

  function renderMinimalMain(slot) {
    return renderLinkableBlock(
      "team-minimal-slot__main",
      slot,
      [
        renderMinimalPortrait(slot, "team-minimal-slot__portrait"),
        '<span class="team-minimal-slot__name">' + escapeHTML(slot.name || "") + "</span>",
      ].join(""),
      { tagName: "div" }
    );
  }

  function renderMinimalAlternative(item) {
    return [
      '<li class="team-minimal-slot__variant-item" style="width: auto; flex: 0 0 auto;">',
      renderLinkableBlock(
        "team-minimal-slot__variant-link",
        item,
        renderMinimalPortrait(item, "team-minimal-slot__alt"),
        { tagName: "div" }
      ),
      "</li>",
    ].join("");
  }

  function renderMinimalAlternativePlaceholder() {
    return [
      '<li class="team-minimal-slot__variant-item team-minimal-slot__variant-item--placeholder" aria-hidden="true" style="width: auto; flex: 0 0 auto;">',
      '  <span class="team-minimal-slot__variant-link team-minimal-slot__variant-link--placeholder">',
      '    <span class="team-minimal-slot__alt team-minimal-slot__alt--ghost"></span>',
      "  </span>",
      "</li>",
    ].join("");
  }

  function renderMinimalSlot(slot, variantCount) {
    var alternatives = Array.isArray(slot.alternatives)
      ? slot.alternatives.slice()
      : [];
    var variantItems = alternatives
      .map(renderMinimalAlternative)
      .concat(
        Array.from({ length: Math.max(0, (variantCount || 0) - alternatives.length) }, function () {
          return renderMinimalAlternativePlaceholder();
        })
      );
    var variantAreaStyle = variantItems.length
      ? ' style="min-height: var(--team-minimal-variant-row-height);"'
      : "";
    var variantsListStyle = variantItems.length
      ? ' style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: var(--team-minimal-variant-gap); width: min(100%, max-content); max-width: 100%; margin-inline: auto;"'
      : "";

    return [
      '<div class="team-minimal-slot">',
      renderMinimalMain(slot),
      '<div class="team-minimal-slot__variant-area"' +
        variantAreaStyle +
        (alternatives.length
          ? ' aria-label="Variantes pour ' + escapeHTML(slot.name || "") + '"'
          : ' aria-hidden="true"') +
        ">",
      variantItems.length
        ? [
            '  <ul class="team-minimal-slot__variants"' + variantsListStyle + ">",
            variantItems.join(""),
            "  </ul>",
          ].join("")
        : "",
      "</div>",
      "</div>",
    ].join("");
  }

  function getMinimalVariantCount(card) {
    return (card.slots || []).reduce(function (maxCount, slot) {
      var count = Array.isArray(slot.alternatives) ? slot.alternatives.length : 0;
      return Math.max(maxCount, count);
    }, 0);
  }

  function renderMinimalCard(card) {
    var variantCount = getMinimalVariantCount(card);
    var className =
      "team-minimal-card" + (variantCount ? " team-minimal-card--has-variants" : "");
    var style = variantCount
      ? ' style="--team-minimal-variant-count: ' + escapeHTML(String(variantCount)) + ';"'
      : "";

    return [
      '<article class="' + className + '"' + style + ">",
      '  <header class="team-minimal-card__header">',
      '    <h3 class="team-minimal-card__title">' + escapeHTML(card.title || "") + "</h3>",
      "  </header>",
      '  <div class="team-minimal-card__lineup">',
      (card.slots || []).slice(0, 3).map(function (slot) {
        return renderMinimalSlot(slot, variantCount);
      }).join(""),
      "  </div>",
      "</article>",
    ].join("");
  }

  function renderMinimal(root, data) {
    var cards = Array.isArray(data.cards) ? data.cards : [];

    root.innerHTML = [
      '<div class="team-minimal-grid">',
      cards.map(renderMinimalCard).join(""),
      "</div>",
    ].join("");
  }

  function render(root, data) {
    if (!root || !data) {
      return;
    }

    if (data.variant === "minimal") {
      renderMinimal(root, data);
      return;
    }

    var cards = Array.isArray(data.cards) ? data.cards : [];
    var legend = Array.isArray(data.legend) ? data.legend : [];

    root.innerHTML = [
      data.deckTitle || data.deckBody || legend.length
        ? [
            '<section class="team-deck">',
            '  <div class="team-deck__copy">',
            data.deckEyebrow
              ? '    <span class="team-deck__eyebrow">' +
                escapeHTML(data.deckEyebrow) +
                "</span>"
              : "",
            data.deckTitle
              ? '    <h3 class="team-deck__title">' + escapeHTML(data.deckTitle) + "</h3>"
              : "",
            data.deckBody
              ? '    <p class="team-deck__body">' + escapeHTML(data.deckBody) + "</p>"
              : "",
            "  </div>",
            legend.length
              ? [
                  '  <div class="team-legend" aria-label="Legende des compositions">',
                  legend.map(renderLegendItem).join(""),
                  "  </div>",
                ].join("")
              : "",
            "</section>",
          ].join("")
        : "",
      '<div class="team-card-list">',
      cards.map(renderCard).join(""),
      "</div>",
    ].join("");
  }

  window.ParadiseGuideTeamCards = {
    render: render,
  };
}());
