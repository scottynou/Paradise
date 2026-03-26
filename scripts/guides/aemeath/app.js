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
    js: ["../../scripts/guides/aemeath/armes.js"],
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
    js: ["../../scripts/guides/aemeath/sequence.js"],
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
      "../../scripts/guides/aemeath/team.js",
    ],
  },
  resume: {
    title: "Resume",
    label: "Resume",
    js: [],
  },
};

const OVERVIEW_PAGE = `
<section class="guide-panel guide-panel--overview guide-panel--overview-editorial" data-page="overview">
  <div class="overview-editorial">
    <article class="overview-editorial__main">
      <span class="eyebrow">Resume</span>
      <h2>Pourquoi la jouer</h2>

      <ul class="overview-keypoints">
        <li>
          <strong>Degats massifs.</strong>
          Tres gros AoE et une seconde Ultimate qui nettoie presque tout.
        </li>
        <li>
          <strong>Flexibilite d'equipe.</strong>
          Peut jouer Tune Rupture, Fusion Burst ou Mono Fusion.
        </li>
        <li>
          <strong>Rotation structuree.</strong>
          Cycle base sur Ult -> Forte -> Ult pour maximiser les degats.
        </li>
      </ul>
    </article>

    <aside class="overview-editorial__aside" aria-label="Lecture rapide">
      <article class="overview-sidecard overview-sidecard--primary">
        <span class="overview-sidecard__label">Ce qu'elle apporte</span>
        <p><strong>DPS principal polyvalent.</strong> Gros degats et adaptation selon l'equipe.</p>
      </article>

      <article class="overview-sidecard">
        <span class="overview-sidecard__label">A savoir</span>
        <ul class="overview-sidecard__list">
          <li><strong>Kit complexe.</strong> Demande de comprendre les modes et la rotation.</li>
          <li><strong>Depend de l'equipe.</strong> Son mode (Rupture / Fusion) change selon tes persos.</li>
          <li><strong>Timing important.</strong> Sa puissance depend surtout de bien enchainer ses skills.</li>
        </ul>
      </article>
    </aside>
  </div>
</section>`;

const ARMES_PAGE = `
<section class="guide-panel" data-page="armes">
  <header class="panel-header">
    <span class="eyebrow">Armes</span>
    <h2>Armes recommandees</h2>
    <p class="lede">
      Les pourcentages comparent chaque arme a la signature d'Aemeath fixee a 100%.
      Utilise cette lecture pour distinguer les meilleures 5 etoiles, les options
      4 etoiles les plus propres et les choix gratuits de transition.
    </p>
  </header>

  <section id="armesGrid" class="armes-grid" aria-live="polite" aria-atomic="true"></section>

  <div id="armeModal" class="arme-modal" aria-hidden="true">
    <div class="arme-modal__backdrop"></div>
    <figure class="arme-modal__content">
      <button class="close" type="button" aria-label="Fermer">&times;</button>
      <img id="armeModalImg" src="" alt="Apercu de l'arme" />
      <figcaption id="armeModalCaption"></figcaption>
    </figure>
  </div>
</section>`;

const ECHO_PAGE = `
<section class="guide-panel" data-page="echo">
  <header class="panel-header">
    <span class="eyebrow">Echo</span>
    <h2>Sets et priorites de stats</h2>
  </header>

  <div class="echo-shell">
    <div class="echo-sets echo-sets--single">
      <article class="echo-set echo-set--best">
        <div class="echo-set__header">
          <div class="echo-set__title">
            <img src="../../assets/img/set/Trailblazing%20Star.png" alt="Etoile novatrice" />
            <div>
              <span class="echo-choice-label">Choix recommande</span>
              <h3>Etoile novatrice</h3>
              <p>
                Le set dedie d'Aemeath lui apporte facilement
                <span class="accent-value">+20% de Taux CRIT</span> et
                <span class="accent-value">un bonus de DGT Fusion</span> pendant toute sa rotation.
                C'est son meilleur choix sans discussion grace a ses buffs de stats tres puissants.
              </p>
            </div>
          </div>
        </div>

        <div class="echo-item-grid">
          <article class="echo-item echo-item--primary">
            <img src="../../assets/img/echo/Sigillum.png" alt="Sigilium" />
            <div>
              <span class="echo-item__label echo-item__label--primary">Echo recommande</span>
              <h4>Sigilium</h4>
              <p>
                Echo entierement dedie a Aemeath. En slot principal sur elle,
                il lui donne <span class="accent-value">+20% de DGT d'Ultime</span>
                et peut s'invoquer tres facilement a n'importe quel moment de sa rotation.
              </p>
            </div>
          </article>
        </div>
      </article>
    </div>

    <section class="echo-mainstats">
      <div class="echo-mainstats__header">
        <span class="echo-mainstats__kicker">Meilleures stats d'echo</span>
        <h3>Configuration 4 / 3 / 3 / 1 / 1</h3>
        <p>
          La base la plus stable pour Aemeath reste une orientation offensive pure,
          avec une flexibilite sur le deuxieme slot 3 cout selon vos pieces disponibles.
        </p>
      </div>

      <div class="echo-mainstats__grid echo-mainstats__grid--aemeath">
        <article class="mainstat-card">
          <span class="mainstat-card__slot">4 cout</span>
          <div class="mainstat-card__stats">
            <span class="mainstat-primary">DGT CRIT</span>
            <span class="mainstat-sep">/</span>
            <span class="mainstat-alt">Taux CRIT</span>
          </div>
        </article>

        <article class="mainstat-card">
          <span class="mainstat-card__slot">3 cout</span>
          <div class="mainstat-card__stats">
            <span class="mainstat-primary">DGT Fusion</span>
          </div>
        </article>

        <article class="mainstat-card">
          <span class="mainstat-card__slot">3 cout</span>
          <div class="mainstat-card__stats">
            <span class="mainstat-primary">ATQ%</span>
            <span class="mainstat-sep">=</span>
            <span class="mainstat-alt">DGT Fusion</span>
          </div>
        </article>

        <article class="mainstat-card">
          <span class="mainstat-card__slot">1 cout</span>
          <div class="mainstat-card__stats">
            <span class="mainstat-primary">ATQ%</span>
          </div>
        </article>

        <article class="mainstat-card">
          <span class="mainstat-card__slot">1 cout</span>
          <div class="mainstat-card__stats">
            <span class="mainstat-primary">ATQ%</span>
          </div>
        </article>
      </div>

      <div class="echo-substats-divider">
        <span>Substats prioritaires</span>
      </div>

      <div class="substats-grid substats-grid--single">
        <article class="substat-card">
          <h4>Ordre recommande</h4>
          <p>
            <span class="accent-text">Recharge d'energie</span> (jusqu'au seuil voulu)
            &gt; <span class="accent-text">DGT CRIT</span>
            = <span class="accent-text">Taux CRIT</span>
            &gt; <span class="accent-text">ATQ%</span>
            &gt; <span class="accent-text">DGT d'Ultime%</span>
            &gt; <span class="accent-text">ATQ</span>
          </p>
        </article>
      </div>
    </section>
  </div>
</section>`;

const PRIORITE_PAGE = `
<section class="guide-panel" data-page="priorite">
  <header class="panel-header">
    <span class="eyebrow">Priorite</span>
    <h2>Ordre d'investissement</h2>
  </header>

  <div class="priority-shell priority-shell--single">
    <ol class="priority-list" aria-label="Details de l'ordre d'investissement">
      <li class="priority-item priority-item--top">
        <span class="priority-rank" aria-hidden="true">
          <img src="../../assets/img/guides/aemeath/Liberation_resonatrice.webp" alt="" loading="lazy" decoding="async" />
        </span>
        <div class="priority-copy">
          <h3>Liberation de resonance</h3>
          <p>
            Priorite absolue. C'est la source de degats la plus importante d'Aemeath
            et l'investissement le plus rentable des le depart.
          </p>
        </div>
      </li>

      <li class="priority-item">
        <span class="priority-rank" aria-hidden="true">
          <img src="../../assets/img/guides/aemeath/Forte_Circuit.webp" alt="" loading="lazy" decoding="async" />
        </span>
        <div class="priority-copy">
          <h3>Circuit Forte</h3>
          <p>
            Juste derriere la Liberation. Le Forte porte une grosse partie de sa rotation
            et de ses degats reels, donc il doit etre monte tres vite.
          </p>
        </div>
      </li>

      <li class="priority-item">
        <span class="priority-rank" aria-hidden="true">
          <img src="../../assets/img/guides/aemeath/Competence_resonatrice.webp" alt="" loading="lazy" decoding="async" />
        </span>
        <div class="priority-copy">
          <h3>Competence de resonance</h3>
          <p>
            A monter ensuite. Elle reste derriere la Liberation et le Forte en valeur,
            mais apporte quand meme un gain utile a la rotation.
          </p>
        </div>
      </li>

      <li class="priority-item">
        <span class="priority-rank" aria-hidden="true">
          <img src="../../assets/img/guides/aemeath/Attaques_normales.webp" alt="" loading="lazy" decoding="async" />
        </span>
        <div class="priority-copy">
          <h3>Attaques normales</h3>
          <p>
            Peut etre retardee pour economiser des ressources. La perte de degats reste
            faible par rapport aux trois priorites du dessus.
          </p>
        </div>
      </li>

      <li class="priority-item">
        <span class="priority-rank" aria-hidden="true">
          <img src="../../assets/img/guides/aemeath/Competence_dIntro.webp" alt="" loading="lazy" decoding="async" />
        </span>
        <div class="priority-copy">
          <h3>Competence d'intro</h3>
          <p>
            Derniere priorite. Elle peut aussi etre laissee de cote pendant la progression
            si vous voulez optimiser les ressources au maximum.
          </p>
        </div>
      </li>
    </ol>
  </div>
</section>`;

window.TemplateCharacterPages = window.TemplateCharacterPages || {};
window.TemplateCharacterPages.overview = OVERVIEW_PAGE;
window.TemplateCharacterPages.armes = ARMES_PAGE;
window.TemplateCharacterPages.echo = ECHO_PAGE;
window.TemplateCharacterPages.priorite = PRIORITE_PAGE;

const DEFAULT_ROUTE = "overview";
const CHARACTER_SLUG = "aemeath";
const PLACEHOLDER = "../../assets/img/placeholders/guide-template";
const ROLE_LABEL = "Main DPS";
const ROLE_ICON = site.resolvePath("assets/img/guides/aemeath/Icon_Main_Damage_Dealer.webp");
const WEAPON_ICON = site.resolvePath("assets/img/types armes/\u00e9p\u00e9e.webp");
const SPLASH_ART = site.resolvePath("assets/img/guides/aemeath/Aemeath_Splash_Art.webp");
const DEFAULT_CHARACTER = {
  name: "Aemeath",
  kicker: "Main DPS / Element / Rarete a definir",
  positioning:
    "Description du personnage a completer. Ce texte placeholder reprend la longueur moyenne du bloc hero.",
  metadata: [
    {
      label: ROLE_LABEL,
      icon: ROLE_ICON,
    },
    {
      label: "[Element]",
      icon: PLACEHOLDER + "/element-icon.svg",
    },
    {
      label: "\u00c9p\u00e9e",
      icon: WEAPON_ICON,
    },
  ],
  verdict: "",
  art: SPLASH_ART,
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
        label: ROLE_LABEL,
        icon: ROLE_ICON,
      },
      {
        label: elementLabel,
        icon: elementIcon,
      },
      {
        label: weaponLabel,
        icon: WEAPON_ICON,
      },
    ],
    verdict: "",
    art: SPLASH_ART,
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
    '      <p class="hero-meta-line" aria-label="Metadonnees de ' + CHARACTER.name + '">' + metadataMarkup + "</p>",
    CHARACTER.verdict ? '      <p class="hero-verdict"><strong>' + CHARACTER.verdict + "</strong></p>" : "",
    "    </div>",
    '    <div class="overview-hero__media overview-hero__media--editorial">',
    '      <div class="overview-hero__aura" aria-hidden="true"></div>',
    '      <div class="overview-hero__figure">',
    '        <div class="overview-hero__figure-shell" aria-hidden="true"></div>',
    '        <div class="overview-hero__figure-mist" aria-hidden="true"></div>',
    '        <img src="' + CHARACTER.art + '" alt="Splash art de ' + CHARACTER.name + '" />',
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
  if (route !== "stat-endgame" && inlinePages && typeof inlinePages[route] === "string") {
    const inlineHTML = cleanFragmentHTML(personalizeMarkup(inlinePages[route]), route);
    pageCache.set(route, inlineHTML);
    return inlineHTML;
  }

  const extension =
    route === "echo" || route === "stat-endgame" ? ".frag" : ".html";
  const response = await fetch("aemeath/" + route + extension, {
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

  if (window.__aemeathWaitingForYT) {
    window.__aemeathWaitingForYT.push(callback);
    return;
  }

  window.__aemeathWaitingForYT = [callback];
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;
  document.head.appendChild(script);

  window.onYouTubeIframeAPIReady = function () {
    const queue = window.__aemeathWaitingForYT || [];
    window.__aemeathWaitingForYT = [];
    queue.forEach((fn) => fn());
  };
}

function enableVideoBackground() {
  const body = document.body;
  const videoId = body.getAttribute("data-video-id") || "H8gGJgMvr9w";
  const startAt = Number(body.getAttribute("data-video-start") || 20);

  ensureYouTubeAPI(() => {
    ensureVideoLayers();

    if (
      window.__aemeathVideoPlayer &&
      window.__aemeathVideoPlayer.destroy
    ) {
      try {
        window.__aemeathVideoPlayer.destroy();
      } catch (error) {
        console.warn("[Aemeath] old video player destroy failed", error);
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
          window.__aemeathVideoPlayer = player;
          try {
            event.target.mute();
            event.target.setLoop(true);
            event.target.playVideo();
          } catch (error) {
            console.warn("[Aemeath] video autoplay failed", error);
          }

          coverVideoFrame(document.querySelector(".site-video-bg iframe"));
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            try {
              player.seekTo(startAt, true);
              player.playVideo();
            } catch (error) {
              console.warn("[Aemeath] video loop failed", error);
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
    const player = window.__aemeathVideoPlayer;
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
      console.warn("[Aemeath] visibility video handling failed", error);
    }
  });
}

function reportError(error) {
  console.error("[Aemeath] render failed", error);
  heroSlot.hidden = true;
  heroSlot.innerHTML = "";
  app.innerHTML = [
    '<section class="guide-panel error-panel">',
    '  <header class="panel-header">',
    '    <span class="eyebrow">Erreur</span>',
    "    <h2>Chargement impossible</h2>",
    "  </header>",
    "  <p>La page Aemeath n'a pas pu etre affichee correctement. Verifiez les fragments et rechargez la page.</p>",
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


