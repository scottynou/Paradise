(function () {
  var site = window.ParadiseSiteData;
  var charactersPromise = null;
  var rankingsPromise = null;
  var dataPromise = null;
  var warnedMessages = new Set();
  var storagePrefix = "paradise-json-cache:";
  var storageTTL = 15000;
  var roleOrder = ["dps", "hybrid", "support"];
  var roleLabels = {
    dps: "DPS",
    hybrid: "Hybrid",
    support: "Support",
  };

  if (!site) {
    return;
  }

  /*
    Source of truth:
    - Add a character in public/data/characters.json
    - Move character ids inside public/data/tier-rankings.json
    - Multi-role works by repeating the same id in multiple role groups
  */

  function warn(message) {
    if (warnedMessages.has(message)) {
      return;
    }

    warnedMessages.add(message);
    console.warn("[Paradise tiers] " + message);
  }

  function loadJSON(path) {
    var cached = readCache(path);

    if (cached !== null) {
      return Promise.resolve(cached);
    }

    return fetch(site.resolvePath(path), {
      credentials: "same-origin",
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("Impossible de charger " + path);
      }

      return response.json().then(function (payload) {
        writeCache(path, payload);
        return payload;
      });
    });
  }

  function readCache(path) {
    var rawValue;
    var payload;

    try {
      rawValue = window.sessionStorage.getItem(storagePrefix + path);
      if (!rawValue) {
        return null;
      }

      payload = JSON.parse(rawValue);
      if (!payload || typeof payload !== "object") {
        window.sessionStorage.removeItem(storagePrefix + path);
        return null;
      }

      if (Date.now() - Number(payload.time || 0) > storageTTL) {
        window.sessionStorage.removeItem(storagePrefix + path);
        return null;
      }

      return payload.data;
    } catch (error) {
      return null;
    }
  }

  function writeCache(path, data) {
    try {
      window.sessionStorage.setItem(
        storagePrefix + path,
        JSON.stringify({
          time: Date.now(),
          data: data,
        })
      );
    } catch (error) {}
  }

  function normalizeCharacter(rawCharacter) {
    return {
      id: String(rawCharacter.id || "").trim(),
      name: String(rawCharacter.name || "").trim(),
      rarity: Number(rawCharacter.rarity) || 0,
      element: site.formatElementLabel(rawCharacter.element),
      weapon: site.formatWeaponLabel(rawCharacter.weapon),
      icon: String(rawCharacter.icon || "").trim(),
      guideSlug: site.normalizeSlug(rawCharacter.guideSlug || rawCharacter.id),
    };
  }

  function buildCharacterMaps(rawCharacters) {
    var characters = [];
    var byId = new Map();
    var byGuideSlug = new Map();

    (rawCharacters || []).forEach(function (rawCharacter) {
      var character = normalizeCharacter(rawCharacter);

      if (!character.id) {
        warn("A character entry is missing its id and has been ignored.");
        return;
      }

      if (byId.has(character.id)) {
        warn('Duplicate character id "' + character.id + '" found in characters.json.');
        return;
      }

      characters.push(character);
      byId.set(character.id, character);
      byGuideSlug.set(character.guideSlug, character);
    });

    return {
      characters: characters,
      byId: byId,
      byGuideSlug: byGuideSlug,
    };
  }

  function resolveRankedCharacters(ids, charactersById, modeKey, roleKey, tierName) {
    return (Array.isArray(ids) ? ids : []).reduce(function (characters, characterId) {
      var character = charactersById.get(characterId);

      if (!character) {
        warn(
          'Missing character id "' +
            characterId +
            '" in tier-rankings.json for ' +
            modeKey +
            " / " +
            roleKey +
            " / " +
            tierName +
            "."
        );
        return characters;
      }

      characters.push(character);
      return characters;
    }, []);
  }

  function buildRoleTiers(modeKey, roleKey, modeData, tierOrder, charactersById) {
    var roleData = (modeData && modeData[roleKey]) || {};

    return tierOrder.map(function (tierName) {
      var ids = roleData[tierName] || [];

      return {
        tier: tierName,
        ids: Array.isArray(ids) ? ids.slice() : [],
        characters: resolveRankedCharacters(ids, charactersById, modeKey, roleKey, tierName),
      };
    });
  }

  function findCharacterEntries(modeKey, characterId, data) {
    var modeData = data.modes[modeKey] || {};
    var entries = [];

    roleOrder.forEach(function (roleKey) {
      var roleData = modeData[roleKey] || {};

      data.tierOrder.forEach(function (tierName) {
        var ids = Array.isArray(roleData[tierName]) ? roleData[tierName] : [];

        if (ids.indexOf(characterId) >= 0) {
          entries.push({
            role: roleKey,
            roleLabel: roleLabels[roleKey],
            tier: tierName,
          });
        }
      });
    });

    return entries;
  }

  function uniqueRankedIdsForMode(modeKey, data) {
    var modeData = data.modes[modeKey] || {};
    var seen = new Set();

    roleOrder.forEach(function (roleKey) {
      var roleData = modeData[roleKey] || {};

      data.tierOrder.forEach(function (tierName) {
        (Array.isArray(roleData[tierName]) ? roleData[tierName] : []).forEach(function (characterId) {
          if (data.charactersById.has(characterId)) {
            seen.add(characterId);
          } else {
            warn(
              'Missing character id "' +
                characterId +
                '" in tier-rankings.json for ' +
                modeKey +
                " / " +
                roleKey +
                " / " +
                tierName +
                "."
            );
          }
        });
      });
    });

    return seen;
  }

  function normalizeMode(modeKey, data) {
    var requested = String(modeKey || "TOA").toUpperCase();
    return Object.prototype.hasOwnProperty.call(data.modes, requested) ? requested : "TOA";
  }

  function loadCharacters() {
    if (charactersPromise) {
      return charactersPromise;
    }

    charactersPromise = loadJSON("public/data/characters.json").then(function (rawCharacters) {
      return buildCharacterMaps(rawCharacters);
    });

    return charactersPromise;
  }

  function loadRankings() {
    if (rankingsPromise) {
      return rankingsPromise;
    }

    rankingsPromise = loadJSON("public/data/tier-rankings.json").then(function (rankings) {
      return {
        tierOrder: Array.isArray(rankings && rankings.tierOrder) ? rankings.tierOrder.slice() : [],
        modes: (rankings && rankings.modes) || {},
      };
    });

    return rankingsPromise;
  }

  function load() {
    if (dataPromise) {
      return dataPromise;
    }

    dataPromise = Promise.all([loadCharacters(), loadRankings()]).then(function (payload) {
      var maps = payload[0];
      var rankings = payload[1];

      return {
        characters: maps.characters,
        charactersById: maps.byId,
        charactersByGuideSlug: maps.byGuideSlug,
        tierOrder: rankings.tierOrder.slice(),
        modes: rankings.modes,
      };
    });

    return dataPromise;
  }

  function getCharacterByGuideSlug(slug) {
    return loadCharacters().then(function (maps) {
      return maps.byGuideSlug.get(site.normalizeSlug(slug)) || null;
    });
  }

  function getCharacterTierEntries(characterId, modeKey) {
    return load().then(function (data) {
      var activeMode = normalizeMode(modeKey, data);
      return findCharacterEntries(activeMode, characterId, data);
    });
  }

  function buildTierListViewModel(modeKey) {
    return load().then(function (data) {
      var activeMode = normalizeMode(modeKey, data);
      var modeData = data.modes[activeMode] || {};

      return {
        mode: activeMode,
        tierOrder: data.tierOrder.slice(),
        roles: roleOrder.map(function (roleKey) {
          return {
            id: roleKey,
            label: roleLabels[roleKey],
            tiers: buildRoleTiers(activeMode, roleKey, modeData, data.tierOrder, data.charactersById),
          };
        }),
        rankedCharacterCount: uniqueRankedIdsForMode(activeMode, data).size,
        totalCharacters: data.characters.length,
      };
    });
  }

  window.ParadiseSharedData = {
    buildTierListViewModel: buildTierListViewModel,
    getCharacterByGuideSlug: getCharacterByGuideSlug,
    getCharacterTierEntries: getCharacterTierEntries,
    load: load,
    roleLabels: roleLabels,
    roleOrder: roleOrder.slice(),
  };
}());
