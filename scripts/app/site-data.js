(function () {
  var siteBase = document.documentElement.getAttribute("data-site-base") || ".";
  var loadedScripts = Object.create(null);
  var availableThemeScripts = Object.create(null);
  var availableGuideScripts = Object.create(null);

  availableThemeScripts.default = true;
  availableThemeScripts.shorekeeper = true;
  availableGuideScripts.shorekeeper = true;

  var EMPTY_GUIDE_IMAGE_DATA_URI =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'%3E%3C/svg%3E";
  var emptyGuideHeroArtSlugs = {
    rover: true,
    "rover-aero": true,
    "rover-havoc": true,
    "rover-spectro": true,
  };
  var guideHeroArtSettings = {
    aalto: [
      "assets/img/guides/aalto/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    aemeath: [
      "assets/img/guides/aemeath/Aemeath_Splash_Art.webp",
      "50% 18%",
      "1.02",
      "50% 18%",
      "1.02",
    ],
    augusta: [
      "assets/img/guides/augusta/Augusta_Splash_Art.webp",
      "50% 26%",
      "1.02",
      "50% 26%",
      "1.02",
    ],
    baizhi: [
      "assets/img/guides/baizhi/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    brant: [
      "assets/img/guides/brant/splash.png",
      "56% 18%",
      "1.08",
      "56% 18%",
      "1.08",
    ],
    buling: [
      "assets/img/guides/buling/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    calcharo: [
      "assets/img/guides/calcharo/splash.png",
      "50% 20%",
      "1.04",
      "50% 20%",
      "1.04",
    ],
    camellya: [
      "assets/img/guides/camellya/splash.png",
      "52% 28%",
      "1",
      "52% 28%",
      "1",
    ],
    cantarella: [
      "assets/img/guides/cantarella/splash.png",
      "46% 24%",
      "1",
      "46% 24%",
      "1",
    ],
    carlotta: [
      "assets/img/guides/carlotta/splash.png",
      "50% 24%",
      "1.02",
      "50% 24%",
      "1.02",
    ],
    cartethyia: [
      "assets/img/guides/cartethyia/splash.png",
      "50% 28%",
      "1.06",
      "50% 28%",
      "1.06",
    ],
    changli: [
      "assets/img/guides/changli/splash.png",
      "56% 24%",
      "1.02",
      "56% 24%",
      "1.02",
    ],
    chisa: [
      "assets/img/guides/chisa/splash.png",
      "48% 22%",
      "1.08",
      "48% 22%",
      "1.08",
    ],
    chixia: [
      "assets/img/guides/chixia/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    ciaccona: [
      "assets/img/guides/ciaccona/splash.png",
      "50% 28%",
      "1",
      "50% 28%",
      "1",
    ],
    danjin: [
      "assets/img/guides/danjin/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    encore: [
      "assets/img/guides/encore/splash.png",
      "50% 26%",
      "1",
      "50% 26%",
      "1",
    ],
    galbrena: [
      "assets/img/guides/galbrena/splash.png",
      "50% 24%",
      "1",
      "50% 24%",
      "1",
    ],
    iuno: [
      "assets/img/guides/iuno/splash.png",
      "50% 27%",
      "1",
      "50% 27%",
      "1",
    ],
    jianxin: [
      "assets/img/guides/jianxin/splash.png",
      "52% 22%",
      "1.06",
      "52% 22%",
      "1.06",
    ],
    jinhsi: [
      "assets/img/guides/jinhsi/splash.png",
      "50% 24%",
      "1.02",
      "50% 24%",
      "1.02",
    ],
    jiyan: [
      "assets/img/guides/jiyan/splash.png",
      "50% 22%",
      "1.02",
      "50% 22%",
      "1.02",
    ],
    lingyang: [
      "assets/img/guides/lingyang/splash.png",
      "50% 24%",
      "1.06",
      "50% 24%",
      "1.06",
    ],
    lumi: [
      "assets/img/guides/lumi/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    lupa: [
      "assets/img/guides/lupa/splash.png",
      "50% 24%",
      "1.02",
      "50% 24%",
      "1.02",
    ],
    "luuk-herssen": [
      "assets/img/guides/luuk-herssen/splash.png",
      "50% 20%",
      "1.04",
      "50% 20%",
      "1.04",
    ],
    lynae: [
      "assets/img/guides/lynae/splash.png",
      "54% 22%",
      "1.04",
      "54% 22%",
      "1.04",
    ],
    mornye: [
      "assets/img/guides/mornye/splash.png",
      "48% 16%",
      "1.06",
      "48% 16%",
      "1.06",
    ],
    mortefi: [
      "assets/img/guides/mortefi/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    phoebe: [
      "assets/img/guides/phoebe/splash.png",
      "50% 24%",
      "1.06",
      "50% 24%",
      "1.06",
    ],
    phrolova: [
      "assets/img/guides/phrolova/splash.png",
      "52% 20%",
      "1.06",
      "52% 20%",
      "1.06",
    ],
    qiuyuan: [
      "assets/img/guides/qiuyuan/Qiuyuan_Splash_Art.webp",
      "46% 18%",
      "1.1",
      "46% 18%",
      "1.1",
    ],
    roccia: [
      "assets/img/guides/roccia/splash.png",
      "50% 22%",
      "1.02",
      "50% 22%",
      "1.02",
    ],
    sanhua: [
      "assets/img/guides/sanhua/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    shorekeeper: [
      "assets/img/guides/shorekeeper/ww-shorekeeper-splash-art.jpg",
      "50% 22%",
      "1.04",
      "50% 22%",
      "1.04",
    ],
    sigrika: [
      "assets/img/guides/sigrika/splash.png",
      "46% 22%",
      "1.02",
      "46% 22%",
      "1.02",
    ],
    taoqi: [
      "assets/img/guides/taoqi/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    verina: [
      "assets/img/guides/verina/splash.png",
      "50% 26%",
      "1",
      "50% 26%",
      "1",
    ],
    "xiangli-yao": [
      "assets/img/guides/xiangli-yao/splash.png",
      "50% 18%",
      "1.04",
      "50% 18%",
      "1.04",
    ],
    yangyang: [
      "assets/img/guides/yangyang/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    yinlin: [
      "assets/img/guides/yinlin/splash.png",
      "50% 22%",
      "1.04",
      "50% 22%",
      "1.04",
    ],
    youhu: [
      "assets/img/guides/youhu/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    yuanwu: [
      "assets/img/guides/yuanwu/splash.png",
      "50% 50%",
      "1",
      "50% 50%",
      "1",
      "poster",
    ],
    zani: [
      "assets/img/guides/zani/splash.png",
      "50% 20%",
      "1.06",
      "50% 20%",
      "1.06",
    ],
    zhezhi: [
      "assets/img/guides/zhezhi/splash.png",
      "54% 22%",
      "1.06",
      "54% 22%",
      "1.06",
    ],
  };

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

  function buildGuideHeroArtConfig(path, desktopPosition, desktopScale, mobilePosition, mobileScale, variant) {
    return {
      mode: "image",
      src: resolvePath(path),
      desktopPosition: desktopPosition || "50% 22%",
      desktopScale: String(desktopScale || "1.02"),
      mobilePosition: mobilePosition || desktopPosition || "50% 22%",
      mobileScale: String(mobileScale || desktopScale || "1.02"),
      variant: variant || "default",
    };
  }

  function buildEmptyGuideHeroArtConfig() {
    return {
      mode: "empty",
      src: EMPTY_GUIDE_IMAGE_DATA_URI,
      desktopPosition: "50% 22%",
      desktopScale: "1",
      mobilePosition: "50% 22%",
      mobileScale: "1",
      variant: "empty",
    };
  }

  function getGuideHeroArtConfig(slug) {
    var normalized = normalizeSlug(slug);
    var settings = guideHeroArtSettings[normalized];

    if (!normalized) {
      return buildEmptyGuideHeroArtConfig();
    }

    if (emptyGuideHeroArtSlugs[normalized]) {
      return buildEmptyGuideHeroArtConfig();
    }

    if (!settings) {
      return buildEmptyGuideHeroArtConfig();
    }

    return buildGuideHeroArtConfig(
      settings[0],
      settings[1],
      settings[2],
      settings[3],
      settings[4],
      settings[5]
    );
  }

  function getGuideSplashArtPath(slug) {
    var config = getGuideHeroArtConfig(slug);
    return config.mode === "image" ? config.src : EMPTY_GUIDE_IMAGE_DATA_URI;
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
    getGuideHeroArtConfig: getGuideHeroArtConfig,
    getGuideSplashArtPath: getGuideSplashArtPath,
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
