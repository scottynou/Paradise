(function () {
const site = window.ParadiseSiteData || null;
const shared = window.ParadiseSharedData || null;

if (!site || !shared) {
  return;
}

const PAGES = {
  overview: {
    title: "Apercu",
    label: "Apercu",
    js: [],
  },
  armes: {
    title: "Armes",
    label: "Armes",
    js: ["../../scripts/guides/brant/armes.js"],
  },
  echo: {
    title: "Echo",
    label: "Echo",
    js: [],
  },
  priorite: {
    title: "Priorite",
    label: "Priorite",
    js: [],
  },
  sequence: {
    title: "Sequence",
    label: "Sequence",
    js: ["../../scripts/guides/brant/sequence.js"],
  },
  "stat-endgame": {
    title: "Stats endgame",
    label: "Stats endgame",
    js: [],
  },
  team: {
    title: "Team",
    label: "Team",
    js: [
      "../../scripts/app/guide-team-cards.js",
      "../../scripts/guides/brant/team.js",
    ],
  },
  resume: {
    title: "Resume",
    label: "Resume",
    js: ["../../scripts/app/guide-resume-tier.js"],
  },
};

const DEFAULT_ROUTE = "overview";
const CHARACTER_SLUG = "brant";
const PLACEHOLDER = "../../assets/img/placeholders/guide-template";
const DEFAULT_CHARACTER = {
  name: "[Nom du personnage]",
  kicker: "Role / Element / Rarete a definir",
  positioning:
    "Description du personnage a completer. Ce texte placeholder reprend la longueur moyenne du bloc hero.",
  metadata: [
    {
      label: "[Role]",
      icon: PLACEHOLDER + "/role-icon.svg",
    },
    {
      label: "[Element]",
      icon: PLACEHOLDER + "/element-icon.svg",
    },
    {
      label: "[Type d'arme]",
      icon: PLACEHOLDER + "/weapon-type-icon.svg",
    },
  ],
  verdict: "",
  art: PLACEHOLDER + "/character-art.svg",
  icon: PLACEHOLDER + "/character-portrait.svg",
};
const brandNameNode = document.querySelector(".brand-copy strong");
const brandLogoNode = document.querySelector(".brand .logo");
let CHARACTER = Object.assign({}, DEFAULT_CHARACTER);

const app = document.getElementById("app");
const heroSlot = document.getElementById("heroSlot");
const navbar = document.getElementById("navbar");
const pageCache = new Map();
const loadedJS = new Set();

let currentRoute = "";
let templateVideoBound = false;

function buildCharacterContext(character) {
  var rarityLabel = character.rarity ? String(character.rarity) + " etoiles" : "Rarete a definir";
  var elementLabel = site.formatElementLabel(character.element) || "[Element]";
  var weaponLabel = site.formatWeaponLabel(character.weapon) || "[Type d'arme]";
  var elementIcon = site.getElementIconPath(elementLabel) || PLACEHOLDER + "/element-icon.svg";
  var slug = character.guideSlug || "";

  return {
    slug: slug,
    name: character.name || DEFAULT_CHARACTER.name,
    kicker: [elementLabel, weaponLabel, rarityLabel].join(" - "),
    positioning:
      "Description du personnage a completer. Ce texte placeholder reprend la longueur moyenne du bloc hero.",
    metadata: [
      {
        label: "[Role]",
        icon: PLACEHOLDER + "/role-icon.svg",
      },
      {
        label: elementLabel,
        icon: elementIcon,
      },
      {
        label: weaponLabel,
        icon: PLACEHOLDER + "/weapon-type-icon.svg",
      },
    ],
    verdict: "",
    art: PLACEHOLDER + "/character-art.svg",
  };
}

function setCharacterContext(character) {
  CHARACTER = buildCharacterContext(character);
  window.TemplateCharacterContext = {
    character: character,
    display: CHARACTER,
  };

  document.body.setAttribute("data-guide-slug", CHARACTER.slug || "");
  document.documentElement.setAttribute("data-guide-slug", CHARACTER.slug || "");

  if (brandNameNode) {
    brandNameNode.textContent = CHARACTER.name;
  }

  if (brandLogoNode) {
    var brandIcon = character && character.icon ? site.resolvePath(character.icon) : DEFAULT_CHARACTER.icon;
    brandLogoNode.src = brandIcon;
    brandLogoNode.alt = "Icone " + CHARACTER.name;
  }
}

function normalizeRoute(rawValue) {
  const raw = String(rawValue || "")
    .replace(/^#\/?/, "")
    .trim()
    .toLowerCase();

  if (raw === "kit") {
    return DEFAULT_ROUTE;
  }

  if (raw === "tier") {
    return "resume";
  }

  return Object.prototype.hasOwnProperty.call(PAGES, raw) ? raw : DEFAULT_ROUTE;
}

function routeKey() {
  return normalizeRoute(window.location.hash);
}

function setDocumentTitle(route) {
  const page = PAGES[route] || PAGES[DEFAULT_ROUTE];
  document.title = CHARACTER.name + " | " + page.title;
}

function personalizeMarkup(markup) {
  var replacements = {
    "[Nom du personnage]": CHARACTER.name,
    "[Element]": CHARACTER.metadata[1] ? CHARACTER.metadata[1].label : "[Element]",
    "[Type d'arme]": CHARACTER.metadata[2] ? CHARACTER.metadata[2].label : "[Type d'arme]",
  };

  return Object.keys(replacements).reduce(function (result, token) {
    return result.split(token).join(replacements[token]);
  }, markup);
}

function setActiveLink(route) {
  navbar.querySelectorAll("a[data-route]").forEach((link) => {
    const active = link.getAttribute("data-route") === route;
    link.setAttribute("aria-current", active ? "page" : "false");
  });

  moveIndicator();
}

function moveIndicator() {
  const indicator = navbar.querySelector(".indicator");
  const active =
    navbar.querySelector('a[aria-current="page"]') ||
    navbar.querySelector("a[data-route]");

  if (!indicator || !active) {
    return;
  }

  const linkRect = active.getBoundingClientRect();
  const navRect = navbar.getBoundingClientRect();

  indicator.style.width = linkRect.width + "px";
  indicator.style.transform =
    "translateX(" + (linkRect.left - navRect.left) + "px)";
}

function buildHeroMarkup() {
  const metadataMarkup = CHARACTER.metadata
    .map(
      (item) =>
        '<span class="hero-meta-pill">' +
        '  <span class="hero-meta-pill__icon" aria-hidden="true">' +
        '    <img src="' +
        item.icon +
        '" alt="" loading="eager" decoding="async" />' +
        "  </span>" +
        '  <span class="hero-meta-pill__label">' +
        item.label +
        "</span>" +
        "</span>"
    )
    .join("");

  return [
    '<section class="overview-hero is-visible">',
    '  <div class="overview-hero__frame overview-hero__frame--editorial">',
    '    <div class="overview-hero__content overview-hero__content--editorial">',
    '      <span class="hero-kicker">' + CHARACTER.kicker + "</span>",
    '      <h1 class="hero-title"><span>' + CHARACTER.name + "</span></h1>",
    '      <p class="hero-positioning">' + CHARACTER.positioning + "</p>",
    '      <p class="hero-meta-line" aria-label="Metadonnees du personnage template">' + metadataMarkup + "</p>",
    CHARACTER.verdict ? '      <p class="hero-verdict"><strong>' + CHARACTER.verdict + "</strong></p>" : "",
    "    </div>",
    '    <div class="overview-hero__media overview-hero__media--editorial">',
    '      <div class="overview-hero__aura" aria-hidden="true"></div>',
    '      <div class="overview-hero__figure">',
    '        <div class="overview-hero__figure-shell" aria-hidden="true"></div>',
    '        <div class="overview-hero__figure-mist" aria-hidden="true"></div>',
    '        <img src="' + CHARACTER.art + '" alt="Illustration placeholder du personnage" />',
    "      </div>",
    "    </div>",
    "  </div>",
    "</section>",
  ].join("");
}

function renderHero(route) {
  if (route !== "overview") {
    heroSlot.hidden = true;
    heroSlot.innerHTML = "";
    return;
  }

  heroSlot.hidden = false;
  heroSlot.innerHTML = buildHeroMarkup();
}

function cleanFragmentHTML(rawHTML, route) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = rawHTML;

  const candidates = ['[data-page="' + route + '"]', "section"];
  let section = null;

  for (const selector of candidates) {
    section = wrapper.querySelector(selector);
    if (section) {
      break;
    }
  }

  if (!section) {
    return rawHTML;
  }

  section.querySelectorAll("script").forEach((node) => node.remove());
  return section.outerHTML;
}

async function fetchPage(route) {
  if (pageCache.has(route)) {
    return pageCache.get(route);
  }

  const inlinePages = window.TemplateCharacterPages || null;
  if (route !== "stat-endgame" && route !== "resume" && inlinePages && typeof inlinePages[route] === "string") {
    const inlineHTML = cleanFragmentHTML(personalizeMarkup(inlinePages[route]), route);
    pageCache.set(route, inlineHTML);
    return inlineHTML;
  }

  const extension =
    route === "echo" || route === "stat-endgame" ? ".frag" : ".html";
  const response = await fetch("brant/" + route + extension, {
    credentials: "same-origin",
  });

  if (!response.ok) {
    throw new Error("Impossible de charger la page " + route);
  }

  const rawHTML = personalizeMarkup(await response.text());
  const cleaned = cleanFragmentHTML(rawHTML, route);
  pageCache.set(route, cleaned);
  return cleaned;
}

function ensureJS(files) {
  return Promise.all(
    (files || []).map((src) => {
      if (loadedJS.has(src)) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.onload = () => {
          loadedJS.add(src);
          resolve();
        };
        script.onerror = () => reject(new Error("Impossible de charger " + src));
        document.body.appendChild(script);
      });
    })
  );
}

function scrollStageIntoView(route) {
  if (!currentRoute || route === currentRoute) {
    return;
  }

  const anchor = route === "overview" ? heroSlot : app;
  const top = anchor.getBoundingClientRect().top + window.scrollY - 96;

  if (window.scrollY > top + 40) {
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  }
}

async function render(route) {
  const nextRoute = normalizeRoute(route);
  const page = PAGES[nextRoute];

  document.body.setAttribute("data-route", nextRoute);
  setDocumentTitle(nextRoute);
  setActiveLink(nextRoute);
  renderHero(nextRoute);

  await ensureJS(page.js);

  const html = await fetchPage(nextRoute);
  const previousView = app.firstElementChild;

  if (previousView) {
    previousView.classList.add("leave");
  }

  const view = document.createElement("div");
  view.className = "view";
  view.dataset.route = nextRoute;
  view.innerHTML = html;

  window.setTimeout(() => {
    app.innerHTML = "";
    app.appendChild(view);
    requestAnimationFrame(() => view.classList.add("enter"));

    if (window.PageInit && typeof window.PageInit[nextRoute] === "function") {
      window.PageInit[nextRoute]();
    }

    if (
      nextRoute === "resume" &&
      window.ParadiseGuideResumeTier &&
      typeof window.ParadiseGuideResumeTier.mount === "function"
    ) {
      window.ParadiseGuideResumeTier.mount(view);
    }
  }, previousView ? 140 : 0);

  scrollStageIntoView(nextRoute);
  currentRoute = nextRoute;
}

function navigate(route) {
  const nextRoute = normalizeRoute(route);
  const nextHash = "#/" + nextRoute;

  if (window.location.hash === nextHash) {
    render(nextRoute);
    return;
  }

  window.location.hash = nextHash;
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link) {
      return;
    }

    event.preventDefault();
    navigate(link.getAttribute("data-route"));
  });

  window.addEventListener("hashchange", () => {
    render(routeKey()).catch(reportError);
  });

  window.addEventListener("resize", moveIndicator, { passive: true });
}

function ensureVideoLayers() {
  document.body.classList.add("use-video-bg");

  let background = document.querySelector(".site-video-bg");
  if (!background) {
    background = document.createElement("div");
    background.className = "site-video-bg site-video-bg--placeholder";
    background.innerHTML = [
      '<video class="site-video-bg__video" muted loop playsinline preload="metadata" aria-hidden="true"></video>',
      '<div class="site-video-bg__placeholder" aria-hidden="true"><span>[Video de fond]</span></div>',
    ].join("");
    document.body.prepend(background);
  }

  if (!document.querySelector(".site-video-dim")) {
    const dim = document.createElement("div");
    dim.className = "site-video-dim";
    document.body.prepend(dim);
  }

  return background;
}

function enableVideoBackground() {
  const body = document.body;
  const videoUrl = String(body.getAttribute("data-video-url") || "").trim();
  const background = ensureVideoLayers();
  const video = background.querySelector(".site-video-bg__video");

  if (!video || !videoUrl || /placeholder-video-url\.mp4/i.test(videoUrl)) {
    return;
  }

  video.src = videoUrl;

  video.addEventListener(
    "canplay",
    () => {
      background.classList.add("site-video-bg--ready");
      background.classList.remove("site-video-bg--placeholder");
      try {
        video.play();
      } catch (error) {
        console.warn("[TemplateCharacter] video autoplay failed", error);
      }
    },
    { once: true }
  );

  video.addEventListener(
    "error",
    () => {
      background.classList.add("site-video-bg--placeholder");
      background.classList.remove("site-video-bg--ready");
    },
    { once: true }
  );

  try {
    video.load();
  } catch (error) {
    console.warn("[TemplateCharacter] video load failed", error);
  }

  if (!templateVideoBound) {
    templateVideoBound = true;
    document.addEventListener("visibilitychange", () => {
      if (!video) {
        return;
      }

      try {
        if (document.hidden) {
          video.pause();
        } else if (background.classList.contains("site-video-bg--ready")) {
          video.play();
        }
      } catch (error) {
        console.warn("[TemplateCharacter] visibility video handling failed", error);
      }
    });
  }
}

function reportError(error) {
  console.error("[TemplateCharacter] render failed", error);
  heroSlot.hidden = true;
  heroSlot.innerHTML = "";
  app.innerHTML = [
    '<section class="guide-panel error-panel">',
    '  <header class="panel-header">',
    '    <span class="eyebrow">Erreur</span>',
    "    <h2>Chargement impossible</h2>",
    "  </header>",
    "  <p>La page template n'a pas pu etre affichee correctement. Verifiez les fragments et rechargez la page.</p>",
    "</section>",
  ].join("");
}

async function boot() {
  var slug = site.normalizeSlug(document.body.getAttribute("data-guide-slug") || CHARACTER_SLUG || "");
  var character = await shared.getCharacterByGuideSlug(slug);

  if (character) {
    setCharacterContext(character);
  } else {
    setCharacterContext({
      guideSlug: slug,
      name: DEFAULT_CHARACTER.name,
      rarity: "",
      element: "[Element]",
      weapon: "[Type d'arme]",
    });
  }

  document.body.setAttribute("data-ready", "");
  bindNavigation();
  enableVideoBackground();

  const initialRoute = routeKey();
  if (window.location.hash !== "#/" + initialRoute) {
    history.replaceState(null, "", "#/" + initialRoute);
  }

  render(initialRoute).catch(reportError);
  window.setTimeout(moveIndicator, 60);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    boot().catch(reportError);
  }, { once: true });
} else {
  boot().catch(reportError);
}
}());


