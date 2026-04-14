(function () {
  var site = window.ParadiseSiteData;
  var registryPromise = null;
  var registryState = null;
  var categoryConfig = {
    Rectifiers: {
      aliases: ["rectifier", "rectifiers"],
      folder: "amplificateurs",
    },
    Gauntlets: {
      aliases: ["gauntlet", "gauntlets"],
      folder: "gantelets",
    },
    Pistols: {
      aliases: ["pistol", "pistols"],
      folder: "pistolets",
    },
    Swords: {
      aliases: ["sword", "swords"],
      folder: "sabre",
    },
    Broadblades: {
      aliases: ["broadblade", "broadblades"],
      folder: "\u00e9p\u00e9e",
    },
  };
  var categoryAliasMap = Object.create(null);

  if (!site) {
    return;
  }

  Object.keys(categoryConfig).forEach(function (categoryName) {
    categoryConfig[categoryName].aliases.forEach(function (alias) {
      categoryAliasMap[alias] = categoryName;
    });
  });

  function normalizeText(value) {
    return String(value == null ? "" : value).trim();
  }

  function normalizeLookupKey(value) {
    return normalizeText(value).toLowerCase();
  }

  function normalizeCategoryName(value) {
    return categoryAliasMap[normalizeLookupKey(value)] || normalizeText(value);
  }

  function buildWeaponEntry(categoryName, rawWeapon) {
    var canonicalCategory = normalizeCategoryName(categoryName);
    var folder = categoryConfig[canonicalCategory] ? categoryConfig[canonicalCategory].folder : "";
    var filename = normalizeText(rawWeapon && rawWeapon.filename);

    return {
      id: filename || normalizeText(rawWeapon && rawWeapon.englishName),
      category: canonicalCategory,
      rarity: Number(rawWeapon && rawWeapon.rarity) || 0,
      filename: filename,
      englishName: normalizeText(rawWeapon && rawWeapon.englishName),
      frenchName: normalizeText(rawWeapon && rawWeapon.frenchName),
      image:
        folder && filename
          ? site.resolvePath("assets/img/armes/" + folder + "/" + filename)
          : "",
    };
  }

  function buildRegistry(rawRegistry) {
    var weapons = [];
    var byFilename = new Map();
    var byEnglishName = new Map();

    Object.keys(rawRegistry || {}).forEach(function (categoryName) {
      (rawRegistry[categoryName] || []).forEach(function (rawWeapon) {
        var weapon = buildWeaponEntry(categoryName, rawWeapon);

        weapons.push(weapon);

        if (weapon.filename) {
          byFilename.set(weapon.filename, weapon);
        }

        if (weapon.englishName) {
          byEnglishName.set(normalizeLookupKey(weapon.englishName), weapon);
        }
      });
    });

    return {
      weapons: weapons,
      byFilename: byFilename,
      byEnglishName: byEnglishName,
    };
  }

  function load() {
    if (registryState) {
      return Promise.resolve(registryState);
    }

    if (registryPromise) {
      return registryPromise;
    }

    registryPromise = fetch(site.resolvePath("assets/img/armes/weapon-names-en.json"), {
      credentials: "same-origin",
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Impossible de charger le registre des armes.");
        }

        return response.json();
      })
      .then(function (rawRegistry) {
        registryState = buildRegistry(rawRegistry);
        return registryState;
      })
      .catch(function (error) {
        registryPromise = null;
        throw error;
      });

    return registryPromise;
  }

  function getResolvedWeapon(reference) {
    var filename;
    var englishName;

    if (!registryState) {
      return null;
    }

    if (typeof reference === "string") {
      filename = normalizeText(reference);
      englishName = filename;
    } else {
      filename = normalizeText(reference && reference.filename);
      englishName = normalizeText(reference && reference.englishName);
    }

    if (filename && registryState.byFilename.has(filename)) {
      return registryState.byFilename.get(filename);
    }

    if (englishName) {
      return registryState.byEnglishName.get(normalizeLookupKey(englishName)) || null;
    }

    return null;
  }

  function decorateWeapon(reference) {
    var source = reference && typeof reference === "object" ? reference : {};
    var resolved = getResolvedWeapon(source);
    var filename = normalizeText(source.filename) || (resolved && resolved.filename) || "";
    var englishName = normalizeText(source.englishName) || (resolved && resolved.englishName) || "";
    var frenchName =
      normalizeText(source.frenchName) || (resolved && resolved.frenchName) || "";
    var displayName = frenchName || normalizeText(source.displayName) || englishName;

    return Object.assign({}, source, {
      stableId: filename || englishName,
      filename: filename,
      englishName: englishName,
      frenchName: frenchName,
      displayName: displayName,
      rarity: Number(source.rarity) || (resolved && resolved.rarity) || 0,
      category: normalizeText(source.category) || (resolved && resolved.category) || "",
      image: normalizeText(source.image) || (resolved && resolved.image) || "",
      registryMatch: Boolean(resolved),
    });
  }

  function decorateWeapons(items) {
    return (Array.isArray(items) ? items : []).map(function (item) {
      return decorateWeapon(item);
    });
  }

  window.ParadiseWeaponData = {
    decorateWeapon: decorateWeapon,
    decorateWeapons: decorateWeapons,
    getResolvedWeapon: getResolvedWeapon,
    load: load,
  };
}());
