(function () {
  var siteBase = document.documentElement.getAttribute("data-site-base") || ".";
  var loadedScripts = Object.create(null);
  var availableThemeScripts = Object.create(null);
  var availableGuideScripts = Object.create(null);

  availableThemeScripts.default = true;
  availableThemeScripts.shorekeeper = true;
  availableGuideScripts.shorekeeper = true;

  function getStore() {
    window.PARADISE_DATA = window.PARADISE_DATA || {};
    return window.PARADISE_DATA;
  }

  function resolvePath(path) {
    var cleanBase = String(siteBase || ".").replace(/\/+$/, "");
    var rawPath = String(path || "").replace(/^\/+/, "");
    var queryIndex = rawPath.indexOf("?");
    var pathname = queryIndex >= 0 ? rawPath.slice(0, queryIndex) : rawPath;
    var search = queryIndex >= 0 ? rawPath.slice(queryIndex) : "";
    var encodedPath = pathname
      .split("/")
      .filter(Boolean)
      .map(function (segment) {
        return encodeURIComponent(segment);
      })
      .join("/");

    return new URL(cleanBase + "/" + encodedPath + search, window.location.href).toString();
  }

  function loadScript(path, options) {
    var settings = options || {};
    var required = settings.required !== false;
    var url = resolvePath(path);

    if (loadedScripts[url]) {
      return loadedScripts[url];
    }

    loadedScripts[url] = new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[data-paradise-src="' + url + '"]');
      if (existing) {
        resolve();
        return;
      }

      var script = document.createElement("script");
      script.src = url;
      script.async = false;
      script.setAttribute("data-paradise-src", url);
      script.onload = function () {
        resolve();
      };
      script.onerror = function () {
        if (!required) {
          resolve(null);
          return;
        }
        reject(new Error("Failed to load " + path));
      };
      document.head.appendChild(script);
    });

    return loadedScripts[url];
  }

  function getGuide(slug) {
    var guides = getStore().guides || {};
    return guides[slug] || null;
  }

  function getTheme(name) {
    var themes = getStore().themes || {};
    return themes[name] || null;
  }

  function hasThemeScript(name) {
    return Boolean(availableThemeScripts[normalizeSlug(name)]);
  }

  function hasGuideScript(slug) {
    return Boolean(availableGuideScripts[normalizeSlug(slug)]);
  }

  function getGuideUrl(slug) {
    var normalized = normalizeSlug(slug);
    var guidePageUrl;

    if (normalized === "shorekeeper") {
      guidePageUrl = new URL(resolvePath("pages/guides/shorekeeper.html"));
      guidePageUrl.hash = "/overview";
      return guidePageUrl.toString();
    }

    guidePageUrl = new URL(resolvePath("pages/guides/" + normalized + ".html"));
    guidePageUrl.hash = "/overview";
    return guidePageUrl.toString();
  }

  function getHomeUrl() {
    return resolvePath("index.html");
  }

  function getModeArtwork(mode) {
    return resolvePath(
      String(mode || "").toUpperCase() === "WW"
        ? "assets/img/mode de jeu/ww.jpeg"
        : "assets/img/mode de jeu/toa.jpeg"
    );
  }

  function normalizeSlug(value) {
    return String(value || "").trim().toLowerCase();
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatElementLabel(element) {
    var raw = String(element || "").trim();
    var normalized = raw.toLowerCase();
    var labels = {
      aero: "Aero",
      electro: "Electro",
      fusion: "Fusion",
      fusio: "Fusion",
      glacio: "Glacio",
      havoc: "Havoc",
      spectro: "Spectro",
    };

    return labels[normalized] || raw || "Unknown";
  }

  function getElementIconPath(element) {
    var normalized = String(element || "").trim().toLowerCase();
    var icons = {
      aero: "assets/img/element/element_aero.webp",
      electro: "assets/img/element/element_electro.webp",
      fusion: "assets/img/element/element_fusion.webp",
      glacio: "assets/img/element/element_glacio.webp",
      havoc: "assets/img/element/element_havoc.webp",
      spectro: "assets/img/element/element_spectro.webp",
    };

    return icons[normalized] ? resolvePath(icons[normalized]) : "";
  }

  function formatWeaponLabel(weapon) {
    var raw = String(weapon || "").trim();
    var normalized = raw.toLowerCase();
    var labels = {
      sword: "\u00c9p\u00e9e",
      broadblade: "Sabre",
      pistols: "Pistolets",
      gauntlets: "Gantelets",
      rectifier: "Amplificateur",
    };

    return labels[normalized] || raw || "Arme";
  }

  window.ParadiseSiteData = {
    escapeHTML: escapeHTML,
    formatElementLabel: formatElementLabel,
    formatWeaponLabel: formatWeaponLabel,
    getElementIconPath: getElementIconPath,
    getGuide: getGuide,
    getGuideUrl: getGuideUrl,
    getHomeUrl: getHomeUrl,
    hasGuideScript: hasGuideScript,
    hasThemeScript: hasThemeScript,
    getModeArtwork: getModeArtwork,
    getTheme: getTheme,
    loadScript: loadScript,
    normalizeSlug: normalizeSlug,
    resolvePath: resolvePath,
  };
}());
