(function () {
  var site = window.ParadiseSiteData;
  var shared = window.ParadiseSharedData;

  if (!site || !shared) {
    return;
  }

  var heroMount = document.getElementById("guideHero");
  var app = document.getElementById("guideApp");
  var nav = document.getElementById("sectionNav");
  var pageName = document.getElementById("pageName");
  var guideStatus = document.getElementById("guideStatus");
  var backToHome = document.getElementById("backToHome");
  var videoMount = document.getElementById("guideVideo");

  var escapeHTML = site.escapeHTML;
  var formatElementLabel = site.formatElementLabel;
  var getGuideUrl = site.getGuideUrl;
  var getHomeUrl = site.getHomeUrl;
  var normalizeSlug = site.normalizeSlug;
  var resolvePath = site.resolvePath;

  document.documentElement.setAttribute("data-theme-kind", "guide");
  document.body.setAttribute("data-theme-kind", "guide");
  backToHome.href = getHomeUrl();

  var themeTokenKeys = [
    "bgMain",
    "bgAlt",
    "surface",
    "surfaceStrong",
    "surfaceSoft",
    "textMain",
    "textMuted",
    "accent",
    "accentStrong",
    "accentSoft",
    "premium",
    "premiumSoft",
    "borderSoft",
    "borderStrong",
    "success",
    "danger",
    "shadow",
    "glowPrimary",
    "glowSecondary",
    "glowTertiary",
    "cardHighlight",
    "cardHighlightStrong",
    "chipBg",
    "chipBorder",
    "buttonPrimaryBg",
    "buttonPrimaryText",
    "buttonSecondaryBg",
    "buttonSecondaryText",
    "cursorLine",
    "cursorDot",
    "cursorGlow",
  ];

  function toCSSVariableName(key) {
    return "--theme-" + key.replace(/[A-Z]/g, function (character) {
      return "-" + character.toLowerCase();
    });
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    var tokens = (theme && theme.tokens) || {};
    var fonts = (theme && theme.fonts) || {};

    themeTokenKeys.forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(tokens, key)) {
        root.style.setProperty(toCSSVariableName(key), tokens[key]);
      } else {
        root.style.removeProperty(toCSSVariableName(key));
      }
    });

    if (fonts.display) root.style.setProperty("--theme-font-display", fonts.display);
    else root.style.removeProperty("--theme-font-display");

    if (fonts.body) root.style.setProperty("--theme-font-body", fonts.body);
    else root.style.removeProperty("--theme-font-body");

    document.documentElement.setAttribute("data-theme", (theme && theme.name) || "default");
    document.body.setAttribute("data-theme", (theme && theme.name) || "default");
  }

  function mountVideo(video) {
    if (!(video && video.youtubeId)) {
      videoMount.innerHTML = "";
      document.documentElement.style.removeProperty("--theme-video-bleed");
      return;
    }

    var src = new URL("https://www.youtube-nocookie.com/embed/" + video.youtubeId);
    src.searchParams.set("autoplay", "1");
    src.searchParams.set("mute", "1");
    src.searchParams.set("controls", "0");
    src.searchParams.set("disablekb", "1");
    src.searchParams.set("loop", "1");
    src.searchParams.set("playlist", video.youtubeId);
    src.searchParams.set("playsinline", "1");
    src.searchParams.set("start", String(video.start || 0));
    src.searchParams.set("rel", "0");
    src.searchParams.set("modestbranding", "1");

    videoMount.innerHTML = [
      "<iframe",
      '  src="' + src.toString() + '"',
      '  title="Background video"',
      '  allow="autoplay; encrypted-media"',
      '  referrerpolicy="strict-origin-when-cross-origin"',
      '  tabindex="-1"',
      '  aria-hidden="true"',
      "></iframe>",
    ].join("\n");

    document.documentElement.style.setProperty("--theme-video-bleed", String(video.bleed || 1.12));
  }

  function renderBadge(badge) {
    var icon = badge.icon
      ? '<img src="' + resolvePath(badge.icon) + '" alt="' + escapeHTML(badge.value) + '" />'
      : "";

    return `
      <article class="hero-badge">
        <span class="hero-badge__label">${escapeHTML(badge.label)}</span>
        <strong>${icon}${escapeHTML(badge.value)}</strong>
      </article>`.trim();
  }

  function renderSection(id, title, body, eyebrow, extraClass) {
    var classes = ["guide-section", "guide-panel"];
    if (extraClass) {
      classes.push(extraClass);
    }

    return [
      '<section class="' + classes.join(" ") + '" id="' + id + '" data-guide-panel="' + id + '">',
      '  <header class="guide-section__head">',
      '    <span class="section-eyebrow">' + escapeHTML(eyebrow || "Section") + "</span>",
      "    <h2>" + escapeHTML(title) + "</h2>",
      "  </header>",
      body,
      "</section>",
    ].join("");
  }

  function getInitialSectionId(sections) {
    var hash = normalizeSlug(window.location.hash.replace(/^#/, ""));
    var sectionIds = sections.map(function (section) {
      return section.id;
    });

    if (sectionIds.indexOf(hash) >= 0) {
      return hash;
    }

    return sections.length ? sections[0].id : "";
  }

  function activateSection(targetId, options) {
    var settings = options || {};
    var nextId = normalizeSlug(targetId);
    var hasMatch = false;

    document.querySelectorAll("[data-section-button]").forEach(function (button) {
      var isActive = button.getAttribute("data-section-target") === nextId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      if (isActive) {
        hasMatch = true;
      }
    });

    document.querySelectorAll("[data-guide-panel]").forEach(function (panel) {
      var isActive = panel.getAttribute("data-guide-panel") === nextId;
      panel.classList.toggle("is-active", isActive);
    });

    if (!hasMatch) {
      return;
    }

    if (settings.scrollIntoView !== false) {
      var navTop = nav.getBoundingClientRect().top + window.scrollY - 96;
      if (window.scrollY > navTop + 24) {
        window.scrollTo({
          top: Math.max(0, navTop),
          behavior: settings.behavior || "smooth",
        });
      }
    }

    if (settings.updateHash === false) {
      return;
    }

    if (window.location.hash !== "#" + nextId) {
      history.replaceState(null, "", "#" + nextId);
    }
  }

  function renderOverview(data) {
    data = data || {};

    var paragraphs = (data.paragraphs || []).map(function (paragraph) {
      return "<p>" + escapeHTML(paragraph) + "</p>";
    });

    var lead = paragraphs.shift() || "";
    var paragraphsMarkup = paragraphs.join("");

    var cards = (data.cards || []).map(function (card) {
      return [
        '<article class="info-card overview-card">',
        "  <h3>" + escapeHTML(card.title) + "</h3>",
        '  <ul class="bullet-list">',
        (card.bullets || []).map(function (item) {
          return "<li>" + escapeHTML(item) + "</li>";
        }).join(""),
        "  </ul>",
        "</article>",
      ].join("");
    }).join("");

    return renderSection(
      "overview",
      data.title || "Apercu",
      [
        '<div class="overview-layout">',
        '  <div class="overview-story">',
        '    <p class="overview-lead">' + lead.replace(/^<p>|<\/p>$/g, "") + "</p>",
        '    <div class="stacked-copy">' + paragraphsMarkup + "</div>",
        "  </div>",
        '  <div class="split-grid overview-cards">' + cards + "</div>",
        "</div>",
      ].join(""),
      "Fondation",
      "guide-panel--overview"
    );
  }

  function renderTierSection(character) {
    return renderSection(
      "tier",
      "Tier",
      [
        '<p class="section-caption">Lecture centralisee par mode. Un meme personnage peut apparaitre dans plusieurs roles avec des tiers differents.</p>',
        '<div class="guide-tier-root" data-guide-tier-root data-character-id="' +
          escapeHTML(character.id) +
          '"></div>',
      ].join(""),
      "Modes",
      "guide-panel--tier"
    );
  }

  function renderPriority(data) {
    data = data || {};

    var buttons = (data.variants || []).map(function (variant, index) {
      return '<button class="tab-button' + (index === 0 ? " is-active" : "") + '" data-tab-button data-tab-group="priority" data-tab-target="' + variant.id + '">' + escapeHTML(variant.label) + "</button>";
    }).join("");

    var panels = (data.variants || []).map(function (variant, index) {
      return [
        '<article class="tab-panel' + (index === 0 ? " is-active" : "") + '" data-tab-panel data-tab-group="priority" data-tab-panel-id="' + variant.id + '">',
        '  <p class="section-caption">' + escapeHTML(variant.caption) + "</p>",
        '  <ol class="rank-list">',
        (variant.items || []).map(function (item) {
          return "<li>" + escapeHTML(item) + "</li>";
        }).join(""),
        "  </ol>",
        "</article>",
      ].join("");
    }).join("");

    return renderSection(
      "priority",
      data.title || "Priorites",
      [
        '<div class="priority-layout">',
        '  <div class="tabs-block priority-tabs">',
        '    <div class="tab-buttons">' + buttons + "</div>",
        '    <div class="tab-panels">' + panels + "</div>",
        "  </div>",
        '  <aside class="priority-side info-card">',
        "    <h3>Lecture rapide</h3>",
        "    <p>Choisis une variante puis concentre tes ressources sur l'ordre affiche. Le premier skill de la liste est celui qui rapporte le plus vite de la valeur.</p>",
        '    <div class="priority-glow"></div>',
        "  </aside>",
        "</div>",
      ].join(""),
      "Build",
      "guide-panel--priority"
    );
  }

  function renderKit(data) {
    data = data || {};

    var groups = (data.groups || []).map(function (group) {
      var icon = group.icon
        ? '<img src="' + resolvePath(group.icon) + '" alt="" aria-hidden="true" />'
        : "";

      return [
        '<article class="kit-card">',
        "  <h3>" + icon + "<span>" + escapeHTML(group.title) + "</span></h3>",
        '  <ul class="bullet-list">',
        (group.bullets || []).map(function (item) {
          return "<li>" + escapeHTML(item) + "</li>";
        }).join(""),
        "  </ul>",
        "</article>",
      ].join("");
    }).join("");

    var rotation = (data.rotation || []).map(function (step) {
      return [
        "<li>",
        "  <strong>" + escapeHTML(step.label) + "</strong>",
        "  <span>" + escapeHTML(step.body) + "</span>",
        "</li>",
      ].join("");
    }).join("");

    var tips = (data.tips || []).map(function (tip) {
      return "<li>" + escapeHTML(tip) + "</li>";
    }).join("");

    return renderSection(
      "kit",
      data.title || "Kit",
      [
        '<div class="kit-layout">',
        '  <div class="kit-grid">' + groups + "</div>",
        '  <aside class="kit-sidebar">',
        '    <div class="guide-subsection info-card">',
        "      <h3>Rotation type</h3>",
        '      <ol class="rotation-list">' + rotation + "</ol>",
        "    </div>",
        '    <div class="guide-subsection info-card">',
        "      <h3>Memo rapide</h3>",
        '      <ul class="bullet-list bullet-list--tight">' + tips + "</ul>",
        "    </div>",
        "  </aside>",
        "</div>",
      ].join(""),
      "Gameplay",
      "guide-panel--kit"
    );
  }

  function renderSequences(data) {
    data = data || {};

    var buttons = (data.items || []).map(function (item, index) {
      return '<button class="tab-button' + (index === 0 ? " is-active" : "") + '" data-tab-button data-tab-group="sequences" data-tab-target="' + item.id + '">' + escapeHTML(item.id) + "</button>";
    }).join("");

    var panels = (data.items || []).map(function (item, index) {
      return [
        '<article class="tab-panel' + (index === 0 ? " is-active" : "") + '" data-tab-panel data-tab-group="sequences" data-tab-panel-id="' + item.id + '">',
        "  <h3>" + escapeHTML(item.title) + "</h3>",
        '  <p class="section-caption">' + escapeHTML(item.tag) + "</p>",
        "  <p>" + escapeHTML(item.lead) + "</p>",
        '  <ul class="bullet-list">',
        (item.bullets || []).map(function (bullet) {
          return "<li>" + escapeHTML(bullet) + "</li>";
        }).join(""),
        "  </ul>",
        '  <p class="inline-note">' + escapeHTML(item.note) + "</p>",
        "</article>",
      ].join("");
    }).join("");

    return renderSection(
      "sequences",
      data.title || "Sequences",
      [
        '<div class="tabs-block sequence-tabs">',
        '  <div class="tab-buttons">' + buttons + "</div>",
        '  <div class="tab-panels">' + panels + "</div>",
        "</div>",
      ].join(""),
      "Dupes",
      "guide-panel--sequences"
    );
  }

  function normalizeWeaponEntry(weapon) {
    var api = window.ParadiseWeaponData;
    var fallbackName = String(
      (weapon && (weapon.frenchName || weapon.displayName || weapon.englishName)) || ""
    ).trim();

    if (api && typeof api.decorateWeapon === "function") {
      return api.decorateWeapon(weapon);
    }

    return Object.assign({}, weapon, {
      stableId: String((weapon && (weapon.filename || weapon.englishName)) || "").trim(),
      englishName: String((weapon && weapon.englishName) || "").trim(),
      frenchName: String((weapon && weapon.frenchName) || "").trim(),
      displayName: fallbackName,
    });
  }

  function renderWeapons(data) {
    data = data || {};
    var weaponItems = (data.items || []).map(normalizeWeaponEntry);

    function renderWeaponCard(weapon, isFeatured) {
      var score = Number(weapon.score) || 0;
      var cardClass = isFeatured ? "weapon-card weapon-card--featured" : "weapon-card";
      var weaponName = weapon.displayName || weapon.englishName || "";
      var stableId = weapon.stableId || "";
      var rarityAttribute =
        weapon.rarity >= 3 && weapon.rarity <= 5
          ? ' data-weapon-rarity="' + escapeHTML(weapon.rarity) + '"'
          : "";

      return [
        '<article class="' +
          cardClass +
          '"' +
          (stableId ? ' data-weapon-id="' + escapeHTML(stableId) + '"' : "") +
          rarityAttribute +
          '>',
        '  <div class="weapon-card__media">',
        '    <img src="' + resolvePath(weapon.image) + '" alt="' + escapeHTML(weaponName) + '" />',
        "  </div>",
        '  <div class="weapon-card__body">',
        '    <div class="weapon-card__head">',
        "      <div>",
        "        <h3>" + escapeHTML(weaponName) + "</h3>",
        "        <p>" + escapeHTML(weapon.rank) + "</p>",
        "      </div>",
        "      <strong>" + score.toFixed(2) + "%</strong>",
        "    </div>",
        '    <div class="chip-row">',
        (weapon.tags || []).map(function (tag) {
          return '<span class="mini-chip">' + escapeHTML(tag) + "</span>";
        }).join(""),
        "    </div>",
        '    <div class="score-bar"><span style="width:' + Math.min(score, 100) + '%"></span></div>',
        "    <p>" + escapeHTML(weapon.description) + "</p>",
        "  </div>",
        "</article>",
      ].join("");
    }

    var featured = weaponItems[0] || null;
    var items = weaponItems.slice(featured ? 1 : 0).map(function (weapon) {
      return renderWeaponCard(weapon, false);
    }).join("");

    return renderSection(
      "weapons",
      data.title || "Armes",
      [
        '<p class="section-caption">' + escapeHTML(data.intro || "") + "</p>",
        featured ? '<div class="weapon-spotlight">' + renderWeaponCard(featured, true) + "</div>" : "",
        '<div class="weapon-list">' + items + "</div>",
      ].join(""),
      "Equipement",
      "guide-panel--weapons"
    );
  }

  function renderEchoSet(set) {
    var items = (set.items || []).map(function (item) {
      return `
        <article class="echo-item">
          <img src="${resolvePath(item.image)}" alt="${escapeHTML(item.name)}" />
          <div>
            <h4>${escapeHTML(item.name)}</h4>
            <p>${escapeHTML(item.description)}</p>
          </div>
        </article>`;
    }).join("");

    return `
      <article class="echo-card">
        <div class="echo-card__head">
          <span class="mini-chip">${escapeHTML(set.label)}</span>
          <div class="echo-card__title">
            <img src="${resolvePath(set.icon)}" alt="${escapeHTML(set.name)}" />
            <div>
              <h3>${escapeHTML(set.name)}</h3>
              <p>${escapeHTML(set.description)}</p>
            </div>
          </div>
        </div>
        <div class="echo-item-list">${items}</div>
      </article>`.trim();
  }

  function renderEchoes(data) {
    data = data || {};

    var sets = (data.bestSets || []).map(renderEchoSet).join("");
    var altSets = (data.altSets || []).map(renderEchoSet).join("");

    var stats = (data.mainStats || []).map(function (stat) {
      var choices = (stat.choices || []).map(function (choice) {
        return '<span class="mini-chip">' + escapeHTML(choice) + "</span>";
      }).join("");

      return `
        <article class="stat-card">
          <h4>${escapeHTML(stat.slot)}</h4>
          <div class="chip-row">${choices}</div>
          <p>${escapeHTML(stat.note)}</p>
        </article>`;
    }).join("");

    var substats = (data.substats || []).map(function (group) {
      var items = (group.items || []).map(function (item) {
        return "<li>" + escapeHTML(item) + "</li>";
      }).join("");

      return `
        <article class="info-card">
          <h3>${escapeHTML(group.title)}</h3>
          <ul class="bullet-list">${items}</ul>
        </article>`;
    }).join("");

    var summary = (data.summary || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");

    var altColumn = altSets ? `
      <div class="echoes-column">
        <h3>Alternative utile</h3>
        <div class="stack-section">${altSets}</div>
      </div>` : "";

    var body = `
      <div class="echoes-layout">
        <div class="echoes-column">
          <h3>Set principal</h3>
          <div class="stack-section">${sets}</div>
        </div>
        ${altColumn}
      </div>
      <div class="guide-subsection"><h3>Main stats</h3><div class="split-grid">${stats}</div></div>
      <div class="guide-subsection"><h3>Substats</h3><div class="split-grid">${substats}</div></div>
      <div class="guide-subsection"><h3>TL;DR</h3><ul class="bullet-list bullet-list--tight">${summary}</ul></div>
    `;

    return renderSection("echoes", data.title || "Echos", body, "Echos", "guide-panel--echoes");
  }

  function renderEndgame(data) {
    data = data || {};

    var targets = (data.targets || []).map(function (target) {
      return [
        '<article class="metric-card">',
        "  <span>" + escapeHTML(target.label) + "</span>",
        "  <strong>" + escapeHTML(target.value) + "</strong>",
        "  <p>" + escapeHTML(target.note) + "</p>",
        "</article>",
      ].join("");
    }).join("");

    var important = (data.important || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");

    var tips = ((data.energy && data.energy.tips) || []).map(function (tip) {
      return "<li>" + escapeHTML(tip) + "</li>";
    }).join("");

    return renderSection(
      "endgame",
      data.title || "Stats endgame",
      [
        '<p class="section-caption">' + escapeHTML(data.intro || "") + "</p>",
        '<div class="metric-grid metric-grid--hero">' + targets + "</div>",
        '<div class="split-grid endgame-grid">',
        '  <article class="info-card">',
        "    <h3>Points de base</h3>",
        '    <ul class="bullet-list">' + important + "</ul>",
        "  </article>",
        '  <article class="info-card">',
        "    <h3>Recharge d'energie</h3>",
        "    <p>" + escapeHTML((data.energy && data.energy.target) || "") + "</p>",
        '    <ul class="bullet-list">' + tips + "</ul>",
        "  </article>",
        "</div>",
      ].join(""),
      "Optimisation",
      "guide-panel--endgame"
    );
  }

  function renderTeams(data) {
    data = data || {};

    var items = (data.items || []).map(function (item) {
      return [
        '<article class="info-card">',
        "  <h3>" + escapeHTML(item.title) + "</h3>",
        "  <p>" + escapeHTML(item.body) + "</p>",
        "</article>",
      ].join("");
    }).join("");

    return renderSection(
      "teams",
      data.title || "Teams",
      [
        '<p class="section-caption">' + escapeHTML(data.intro || "") + "</p>",
        '<div class="split-grid team-grid">' + items + "</div>",
      ].join(""),
      "Composition",
      "guide-panel--teams"
    );
  }

  function renderSummary(data) {
    data = data || {};

    var body = (data.body || []).map(function (paragraph) {
      return "<p>" + escapeHTML(paragraph) + "</p>";
    }).join("");

    var pros = (data.pros || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");

    var cons = (data.cons || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");

    return renderSection(
      "summary",
      data.title || "Verdict final",
      [
        '<div class="summary-hero">',
        '  <p class="summary-tagline">' + escapeHTML(data.tagline || "") + "</p>",
        '  <div class="stacked-copy">' + body + "</div>",
        "</div>",
        '<div class="proscons-grid">',
        '  <article class="info-card info-card--success">',
        "    <h3>Points forts</h3>",
        '    <ul class="bullet-list">' + pros + "</ul>",
        "  </article>",
        '  <article class="info-card info-card--danger">',
        "    <h3>Points faibles</h3>",
        '    <ul class="bullet-list">' + cons + "</ul>",
        "  </article>",
        "</div>",
      ].join(""),
      "Conclusion",
      "guide-panel--summary"
    );
  }

  function renderPlaceholder(character) {
    var art = character.icon ? resolvePath(character.icon) : "";
    var shorekeeperUrl = getGuideUrl("shorekeeper");

    heroMount.innerHTML = [
      '<section class="guide-hero guide-hero--placeholder">',
      '  <div class="guide-hero__media">',
      '    <img src="' + art + '" alt="' + escapeHTML(character.name) + '" />',
      "  </div>",
      '  <div class="guide-hero__content">',
      '    <span class="hero-eyebrow">Guide en preparation</span>',
      "    <h1>" + escapeHTML(character.name) + "</h1>",
      '    <p class="hero-tagline">La fiche complete de ce personnage arrivera bientot. La page est deja reservee pour garder un acces propre et coherent a la tier list du site.</p>',
      "  </div>",
      "</section>",
    ].join("");

    app.innerHTML = [
      '<section class="guide-section" id="status">',
      '  <header class="guide-section__head">',
      '    <span class="section-eyebrow">Mise a jour a venir</span>',
      "    <h2>Contenu encore en cours</h2>",
      "  </header>",
      '  <div class="empty-guide">',
      "    <p>Le guide public n'est pas encore redige, mais la place du personnage est deja reservee dans le site pour garder une navigation stable.</p>",
      "    <p>En attendant, le guide Shorekeeper est disponible si tu veux voir le niveau de finition vise pour les prochaines fiches.</p>",
      '    <div class="tab-buttons">',
      '      <a class="section-link" href="' + shorekeeperUrl + '">Voir Shorekeeper</a>',
      '      <a class="section-link" href="' + getHomeUrl() + '">Retour a la tier list</a>',
      "    </div>",
      "  </div>",
      "</section>",
    ].join("");

    nav.innerHTML = '<a class="section-link" href="#status">En preparation</a>';
  }

  function renderBootHero(character) {
    var art = character.icon ? resolvePath(character.icon) : "";

    heroMount.innerHTML = [
      '<section class="guide-hero guide-hero--placeholder">',
      '  <div class="guide-hero__media">',
      art ? '    <img src="' + art + '" alt="' + escapeHTML(character.name) + '" />' : "",
      "  </div>",
      '  <div class="guide-hero__content">',
      '    <span class="hero-eyebrow">Ouverture du guide</span>',
      "    <h1>" + escapeHTML(character.name) + "</h1>",
      '    <p class="hero-tagline">Preparation du theme, des sections et des placements centralises...</p>',
      "  </div>",
      "</section>",
    ].join("");
  }

  function renderMissingGuide(character) {
    heroMount.innerHTML = [
      '<section class="guide-hero guide-hero--placeholder">',
      '  <div class="guide-hero__content">',
      '    <span class="hero-eyebrow">Contenu indisponible</span>',
      "    <h1>" + escapeHTML(character.name) + "</h1>",
      '    <p class="hero-tagline">Le guide est annonce comme disponible, mais son contenu n\'a pas ete charge correctement.</p>',
      "  </div>",
      "</section>",
    ].join("");

    app.innerHTML = [
      '<section class="guide-section">',
      '  <header class="guide-section__head">',
      '    <span class="section-eyebrow">Verification</span>',
      "    <h2>Chargement incomplet</h2>",
      "  </header>",
      "  <p>Le script de contenu de ce guide ne s'est pas charge correctement. Retourne a la tier list puis recharge la page.</p>",
      "</section>",
    ].join("");

    nav.innerHTML = "";
  }

  function renderGuide(character, guide) {
    var hero = guide.hero || {};
    var badges = (hero.badges || []).map(renderBadge).join("");
    var highlights = (hero.highlights || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");

    var sections = [
      { id: "overview", label: "Apercu", html: renderOverview(guide.overview) },
      { id: "tier", label: "Tier", html: renderTierSection(character) },
      { id: "priority", label: "Priorites", html: renderPriority(guide.priority) },
      { id: "kit", label: "Kit", html: renderKit(guide.kit) },
      { id: "sequences", label: "Sequences", html: renderSequences(guide.sequences) },
      { id: "weapons", label: "Armes", html: renderWeapons(guide.weapons) },
      { id: "echoes", label: "Echos", html: renderEchoes(guide.echoes) },
      { id: "endgame", label: "Stats", html: renderEndgame(guide.endgame) },
      { id: "teams", label: "Teams", html: renderTeams(guide.teams) },
      { id: "summary", label: "Resume", html: renderSummary(guide.summary) },
    ];

    nav.innerHTML = sections.map(function (section) {
      return '<button class="section-link" type="button" data-section-button data-section-target="' + section.id + '" aria-pressed="false">' + escapeHTML(section.label) + "</button>";
    }).join("");

    heroMount.innerHTML = [
      '<section class="guide-hero">',
      '  <div class="guide-hero__media">',
      '    <img src="' + resolvePath(hero.art) + '" alt="' + escapeHTML(character.name) + ' splash art" />',
      "  </div>",
      '  <div class="guide-hero__content">',
      '    <span class="hero-eyebrow">' + escapeHTML(hero.eyebrow || formatElementLabel(character.element)) + "</span>",
      "    <h1>" + escapeHTML(hero.title || character.name) + "</h1>",
      '    <p class="hero-tagline">' + escapeHTML(hero.tagline || "") + "</p>",
      '    <div class="hero-badges">' + badges + "</div>",
      '    <ul class="hero-highlight-list">' + highlights + "</ul>",
      "  </div>",
      "</section>",
    ].join("");

    app.innerHTML = sections.map(function (section) {
      return section.html;
    }).join("");

    if (window.ParadiseGuideTier && typeof window.ParadiseGuideTier.mount === "function") {
      document.querySelectorAll("[data-guide-tier-root]").forEach(function (node) {
        window.ParadiseGuideTier.mount(node);
      });
    }

    activateSection(getInitialSectionId(sections), { updateHash: false, scrollIntoView: false });
  }

  function initTabs() {
    document.addEventListener("click", function (event) {
      var sectionButton = event.target.closest("[data-section-button]");
      if (sectionButton) {
        activateSection(sectionButton.getAttribute("data-section-target"));
        return;
      }

      var button = event.target.closest("[data-tab-button]");
      if (!button) return;

      var group = button.getAttribute("data-tab-group");
      var target = button.getAttribute("data-tab-target");

      document
        .querySelectorAll('[data-tab-button][data-tab-group="' + group + '"]')
        .forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });

      document
        .querySelectorAll('[data-tab-panel][data-tab-group="' + group + '"]')
        .forEach(function (panel) {
          panel.classList.toggle("is-active", panel.getAttribute("data-tab-panel-id") === target);
        });
    });

    window.addEventListener("hashchange", function () {
      var nextId = normalizeSlug(window.location.hash.replace(/^#/, ""));
      if (nextId) {
        activateSection(nextId, { updateHash: false });
      }
    });
  }

  async function init() {
    var slug = normalizeSlug(new URLSearchParams(window.location.search).get("slug") || "shorekeeper");
    var defaultTheme = site.getTheme("default");
    var character = await shared.getCharacterByGuideSlug(slug);

    document.body.setAttribute("data-guide-slug", slug);
    document.documentElement.setAttribute("data-guide-slug", slug);

    if (!character) {
      pageName.textContent = "Guide introuvable";
      guideStatus.textContent = "Inconnu";
      heroMount.innerHTML = "";
      app.innerHTML = '<section class="guide-section"><header class="guide-section__head"><span class="section-eyebrow">Erreur</span><h2>Personnage introuvable</h2></header><p>Le slug demande n\'existe pas dans le registre des personnages.</p></section>';
      return;
    }

    document.body.setAttribute("data-guide-slug", character.guideSlug);
    document.documentElement.setAttribute("data-guide-slug", character.guideSlug);
    pageName.textContent = character.name;
    guideStatus.textContent = "Ouverture...";
    document.title = character.name + " | Paradise";
    renderBootHero(character);

    await Promise.all(
      [
        site.hasThemeScript(character.guideSlug)
          ? site.loadScript("scripts/data/themes/" + character.guideSlug + ".js", { required: false })
          : null,
        site.hasGuideScript(character.guideSlug)
          ? site.loadScript("scripts/data/guides/" + character.guideSlug + ".js", { required: false })
          : null,
      ].filter(Boolean)
    );

    var guide = site.getGuide(character.guideSlug);
    var themeName = (guide && guide.theme) || character.guideSlug;
    var theme = site.getTheme(themeName) || defaultTheme;

    applyTheme(theme);
    mountVideo(theme && theme.video);

    guideStatus.textContent = guide ? "Guide complet" : "Guide en preparation";

    if (!guide) {
      renderPlaceholder(character);
      return;
    }

    if (window.ParadiseWeaponData && typeof window.ParadiseWeaponData.load === "function") {
      try {
        await window.ParadiseWeaponData.load();
      } catch (error) {
        console.warn("[Guide] weapon registry failed", error);
      }
    }

    if (window.ParadiseEchoData && typeof window.ParadiseEchoData.load === "function") {
      try {
        await window.ParadiseEchoData.load();
      } catch (error) {
        console.warn("[Guide] echo registry failed", error);
      }
    }

    renderGuide(character, guide);
  }

  initTabs();
  init().catch(function (error) {
    console.error("[Guide] init failed", error);
    heroMount.innerHTML = "";
    app.innerHTML = '<section class="guide-section"><header class="guide-section__head"><span class="section-eyebrow">Erreur</span><h2>Chargement impossible</h2></header><p>La page du guide n\'a pas pu etre chargee.</p></section>';
  });
}());
