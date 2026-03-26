const PAGES = {
  overview: {
    title: "Aper\u00e7u",
    label: "Aper\u00e7u",
    js: [],
  },
  armes: {
    title: "Armes",
    label: "Armes",
    js: ["../../scripts/guides/shorekeeper/armes.js"],
  },
  echo: {
    title: "Echo",
    label: "Echo",
    js: [],
  },
  priorite: {
    title: "Priorit\u00e9",
    label: "Priorit\u00e9",
    js: [],
  },
  sequence: {
    title: "S\u00e9quence",
    label: "S\u00e9quence",
    js: ["../../scripts/guides/shorekeeper/sequence.js"],
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
      "../../scripts/guides/shorekeeper/team.js",
    ],
  },
  resume: {
    title: "R\u00e9sum\u00e9",
    label: "R\u00e9sum\u00e9",
    js: ["../../scripts/app/guide-resume-tier.js"],
  },
};

const DEFAULT_ROUTE = "overview";

const CHARACTER = {
  name: "Shorekeeper",
  kicker: "Support Spectro 5 \u00e9toiles",
  positioning:
    "Un support haut de gamme centr\u00e9 sur le confort, le soin et les buffs critiques.",
  metadata: [
    {
      label: "Support",
      icon: "../../assets/img/guides/shorekeeper/Support.webp",
    },
    {
      label: "Spectro",
      icon: "../../assets/img/guides/shorekeeper/spectro.png",
    },
    {
      label: "Amplificateur",
      icon: "../../assets/img/types%20armes/amplificateurs.webp",
    },
  ],
  verdict: "",
  art: "../../assets/img/guides/shorekeeper/ww-shorekeeper-splash-art.jpg",
};

const app = document.getElementById("app");
const heroSlot = document.getElementById("heroSlot");
const navbar = document.getElementById("navbar");
const pageCache = new Map();
const loadedJS = new Set();

let currentRoute = "";

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
  document.title = "Shorekeeper | " + page.title;
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
    '      <p class="hero-meta-line" aria-label="M\u00e9tadonn\u00e9es Shorekeeper">' + metadataMarkup + "</p>",
    CHARACTER.verdict ? '      <p class="hero-verdict"><strong>' + CHARACTER.verdict + "</strong></p>" : "",
    "    </div>",
    '    <div class="overview-hero__media overview-hero__media--editorial">',
    '      <div class="overview-hero__aura" aria-hidden="true"></div>',
    '      <div class="overview-hero__figure">',
    '        <div class="overview-hero__figure-shell" aria-hidden="true"></div>',
    '        <div class="overview-hero__figure-mist" aria-hidden="true"></div>',
    '        <img src="' + CHARACTER.art + '" alt="Illustration de Shorekeeper" />',
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
  const response = await fetch("shorekeeper/" + route + extension, {
    credentials: "same-origin",
  });

  if (!response.ok) {
    throw new Error("Impossible de charger la page " + route);
  }

  const rawHTML = await response.text();

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

  if (window.__shorekeeperWaitingForYT) {
    window.__shorekeeperWaitingForYT.push(callback);
    return;
  }

  window.__shorekeeperWaitingForYT = [callback];
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;
  document.head.appendChild(script);

  window.onYouTubeIframeAPIReady = function () {
    const queue = window.__shorekeeperWaitingForYT || [];
    window.__shorekeeperWaitingForYT = [];
    queue.forEach((fn) => fn());
  };
}

function enableVideoBackground() {
  const body = document.body;
  const videoId = body.getAttribute("data-video-id") || "FQEyNpQnK60";
  const startAt = Number(body.getAttribute("data-video-start") || 13);

  ensureYouTubeAPI(() => {
    ensureVideoLayers();

    if (
      window.__shorekeeperVideoPlayer &&
      window.__shorekeeperVideoPlayer.destroy
    ) {
      try {
        window.__shorekeeperVideoPlayer.destroy();
      } catch (error) {
        console.warn("[Shorekeeper] old video player destroy failed", error);
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
          window.__shorekeeperVideoPlayer = player;
          try {
            event.target.mute();
            event.target.setLoop(true);
            event.target.playVideo();
          } catch (error) {
            console.warn("[Shorekeeper] video autoplay failed", error);
          }

          coverVideoFrame(document.querySelector(".site-video-bg iframe"));
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            try {
              player.seekTo(startAt, true);
              player.playVideo();
            } catch (error) {
              console.warn("[Shorekeeper] video loop failed", error);
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
    const player = window.__shorekeeperVideoPlayer;
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
      console.warn("[Shorekeeper] visibility video handling failed", error);
    }
  });
}

function reportError(error) {
  console.error("[Shorekeeper] render failed", error);
  heroSlot.hidden = true;
  heroSlot.innerHTML = "";
  app.innerHTML = [
    '<section class="guide-panel error-panel">',
    '  <header class="panel-header">',
    '    <span class="eyebrow">Erreur</span>',
    "    <h2>Chargement impossible</h2>",
    "  </header>",
    "  <p>La page n'a pas pu \u00eatre affich\u00e9e correctement. V\u00e9rifiez les fragments Shorekeeper et rechargez la page.</p>",
    "</section>",
  ].join("");
}

function boot() {
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
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
