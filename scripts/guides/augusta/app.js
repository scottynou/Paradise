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
    js: ["../../scripts/guides/augusta/armes.js"],
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
    js: ["../../scripts/guides/augusta/sequence.js"],
  },
  "stat-endgame": {
    title: "Stats finales",
    label: "Stats finales",
    js: [],
  },
  team: {
    title: "Equipes",
    label: "Equipes",
    js: [
      "../../scripts/app/guide-team-cards.js",
      "../../scripts/guides/augusta/team.js",
    ],
  },
  resume: {
    title: "Resume",
    label: "Resume",
    js: ["../../scripts/app/guide-resume-tier.js"],
  },
};

const DEFAULT_ROUTE = "overview";
const CHARACTER_SLUG = "augusta";
const PLACEHOLDER = "../../assets/img/placeholders/guide-template";
const ART_PATH = "../../assets/img/guides/augusta/Augusta_Splash_Art.webp";
const ROLE_ICON = "../../assets/img/guides/augusta/role_main_dps.webp";
const WEAPON_ICON = "../../assets/img/types%20armes/sabre.webp";
const DEFAULT_ICON = "../../assets/img/tierlist/Augusta.png";
const DEFAULT_CHARACTER = {
  name: "Augusta",
  kicker: "Main DPS • Electro • 5 etoiles",
  positioning:
    "Un carry Electro oriente Attaques lourdes, extremement explosif sur sa seconde Liberation et deja tres performant meme sans equipe premium.",
  metadata: [
    {
      label: "Main DPS",
      icon: ROLE_ICON,
    },
    {
      label: "Electro",
      icon: site.getElementIconPath("Electro") || PLACEHOLDER + "/element-icon.svg",
    },
    {
      label: "Sabre",
      icon: WEAPON_ICON,
    },
  ],
  verdict: "Carry Electro explosif, excellent avec Mortefi et monstrueux avec Iuno.",
  art: ART_PATH,
  icon: DEFAULT_ICON,
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

function buildCharacterContext(character) {
  var elementLabel = site.formatElementLabel((character && character.element) || "Electro") || "Electro";
  var elementIcon = site.getElementIconPath(elementLabel) || PLACEHOLDER + "/element-icon.svg";
  var slug = (character && character.guideSlug) || CHARACTER_SLUG;
  var icon = character && character.icon ? site.resolvePath(character.icon) : DEFAULT_ICON;

  return {
    slug: slug,
    name: (character && character.name) || DEFAULT_CHARACTER.name,
    kicker: "Main DPS • " + elementLabel + " • 5 etoiles",
    positioning:
      "Un carry Electro oriente Attaques lourdes, extremement explosif sur sa seconde Liberation et deja tres performant meme sans equipe premium.",
    metadata: [
      {
        label: "Main DPS",
        icon: ROLE_ICON,
      },
      {
        label: elementLabel,
        icon: elementIcon,
      },
      {
        label: "Sabre",
        icon: WEAPON_ICON,
      },
    ],
    verdict: "Carry Electro explosif, excellent avec Mortefi et monstrueux avec Iuno.",
    art: ART_PATH,
    icon: icon,
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
    brandLogoNode.src = CHARACTER.icon || DEFAULT_ICON;
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
    '      <p class="hero-meta-line" aria-label="Metadonnees de ' + CHARACTER.name + '">' + metadataMarkup + "</p>",
    CHARACTER.verdict ? '      <p class="hero-verdict"><strong>' + CHARACTER.verdict + "</strong></p>" : "",
    "    </div>",
    '    <div class="overview-hero__media overview-hero__media--editorial">',
    '      <div class="overview-hero__aura" aria-hidden="true"></div>',
    '      <div class="overview-hero__figure">',
    '        <div class="overview-hero__figure-shell" aria-hidden="true"></div>',
    '        <div class="overview-hero__figure-mist" aria-hidden="true"></div>',
    '        <img src="' + CHARACTER.art + '" alt="Illustration de ' + CHARACTER.name + '" />',
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

  const extension =
    route === "echo" || route === "stat-endgame" ? ".frag" : ".html";
  const response = await fetch("augusta/" + route + extension, {
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

  if (!document.querySelector(".site-video-bg")) {
    const background = document.createElement("div");
    background.className = "site-video-bg";
    background.innerHTML = '<div id="yt-bg-player"></div>';
    document.body.prepend(background);
  }

  if (!document.querySelector(".site-video-dim")) {
    const dim = document.createElement("div");
    dim.className = "site-video-dim";
    document.body.prepend(dim);
  }
}

function coverVideoFrame(iframe) {
  if (!iframe) {
    return;
  }

  const bleed = Number(document.body.getAttribute("data-video-bleed") || 1.18);
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const ratio = 16 / 9;

  let width;
  let height;

  if (viewportWidth / viewportHeight > ratio) {
    height = viewportHeight;
    width = height * ratio;
  } else {
    width = viewportWidth;
    height = width / ratio;
  }

  width *= bleed;
  height *= bleed;

  Object.assign(iframe.style, {
    width: width + "px",
    height: height + "px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  });
}

function ensureYouTubeAPI(callback) {
  if (window.YT && window.YT.Player) {
    callback();
    return;
  }

  if (window.__augustaWaitingForYT) {
    window.__augustaWaitingForYT.push(callback);
    return;
  }

  window.__augustaWaitingForYT = [callback];
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;
  document.head.appendChild(script);

  window.onYouTubeIframeAPIReady = function () {
    const queue = window.__augustaWaitingForYT || [];
    window.__augustaWaitingForYT = [];
    queue.forEach((fn) => fn());
  };
}

function enableVideoBackground() {
  const body = document.body;
  const videoId = body.getAttribute("data-video-id") || "w0CQyx13-EI";
  const startAt = Number(body.getAttribute("data-video-start") || 26);

  ensureYouTubeAPI(() => {
    ensureVideoLayers();

    if (
      window.__augustaVideoPlayer &&
      window.__augustaVideoPlayer.destroy
    ) {
      try {
        window.__augustaVideoPlayer.destroy();
      } catch (error) {
        console.warn("[Augusta] old video player destroy failed", error);
      }
    }

    const player = new window.YT.Player("yt-bg-player", {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        disablekb: 1,
        playsinline: 1,
        loop: 1,
        playlist: videoId,
        rel: 0,
        modestbranding: 1,
        fs: 0,
        iv_load_policy: 3,
        start: startAt,
      },
      events: {
        onReady: (event) => {
          window.__augustaVideoPlayer = player;
          try {
            event.target.mute();
            event.target.setLoop(true);
            event.target.seekTo(startAt, true);
            event.target.playVideo();
          } catch (error) {
            console.warn("[Augusta] video autoplay failed", error);
          }

          coverVideoFrame(document.querySelector(".site-video-bg iframe"));
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            try {
              player.seekTo(startAt, true);
              player.playVideo();
            } catch (error) {
              console.warn("[Augusta] video loop failed", error);
            }
          }
        },
      },
    });
  });

  window.addEventListener(
    "resize",
    () => {
      coverVideoFrame(document.querySelector(".site-video-bg iframe"));
    },
    { passive: true }
  );

  document.addEventListener("visibilitychange", () => {
    const player = window.__augustaVideoPlayer;
    if (!player) {
      return;
    }

    try {
      if (document.hidden) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    } catch (error) {
      console.warn("[Augusta] visibility video handling failed", error);
    }
  });
}

function reportError(error) {
  console.error("[Augusta] render failed", error);
  heroSlot.hidden = true;
  heroSlot.innerHTML = "";
  app.innerHTML = [
    '<section class="guide-panel error-panel">',
    '  <header class="panel-header">',
    '    <span class="eyebrow">Erreur</span>',
    '    <h2>Chargement impossible</h2>',
    '  </header>',
    '  <p>Le guide d\'Augusta n\'a pas pu etre affiche correctement. Verifiez les fragments puis rechargez la page.</p>',
    '</section>',
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
      rarity: 5,
      element: "Electro",
      weapon: "Broadblade",
      icon: "/assets/img/tierlist/Augusta.png",
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
