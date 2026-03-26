(function () {
  var shared = window.ParadiseSharedData;

  if (!shared) {
    return;
  }

  function getBestTier(entries, tierOrder) {
    var list = Array.isArray(entries) ? entries : [];
    var order = Array.isArray(tierOrder) ? tierOrder : [];
    var bestEntry = list[0] || null;
    var bestIndex = bestEntry ? order.indexOf(bestEntry.tier) : -1;

    list.forEach(function (entry) {
      var nextIndex = order.indexOf(entry.tier);
      if (nextIndex === -1) {
        return;
      }

      if (bestIndex === -1 || nextIndex < bestIndex) {
        bestEntry = entry;
        bestIndex = nextIndex;
      }
    });

    return bestEntry && bestEntry.tier ? bestEntry.tier : "T?";
  }

  function setTierBadge(root, modeKey, tier) {
    var selector =
      modeKey === "TOA"
        ? ".tier-showcase--toa .tier-showcase__badge"
        : ".tier-showcase--ww .tier-showcase__badge";
    var badge = root.querySelector(selector);

    if (badge) {
      badge.textContent = tier;
    }
  }

  function resolveGuideSlug(root, options) {
    var settings = options || {};
    var pathname = String((window.location && window.location.pathname) || "");
    var pathSlug = pathname.split("/").pop().replace(/\.html$/i, "");

    return String(
      settings.guideSlug ||
        root.getAttribute("data-guide-slug") ||
        document.body.getAttribute("data-guide-slug") ||
        pathSlug ||
        ""
    ).trim();
  }

  function resolveCharacterId(root, options) {
    var settings = options || {};
    var presetCharacterId = String(settings.characterId || "").trim();

    if (presetCharacterId) {
      return Promise.resolve(presetCharacterId);
    }

    return shared.getCharacterByGuideSlug(resolveGuideSlug(root, settings)).then(function (character) {
      return character && character.id ? character.id : "";
    });
  }

  function mount(root, options) {
    var section;

    if (!root) {
      return Promise.resolve();
    }

    section =
      root.matches && root.matches('[data-page="resume"]')
        ? root
        : root.querySelector('[data-page="resume"]');

    if (!section || !section.querySelector(".tier-showcase")) {
      return Promise.resolve();
    }

    return Promise.all([shared.load(), resolveCharacterId(section, options)])
      .then(function (payload) {
        var data = payload[0] || {};
        var characterId = payload[1];

        if (!characterId) {
          return;
        }

        return Promise.all([
          shared.getCharacterTierEntries(characterId, "TOA"),
          shared.getCharacterTierEntries(characterId, "WW"),
        ]).then(function (entriesByMode) {
          setTierBadge(section, "TOA", getBestTier(entriesByMode[0], data.tierOrder));
          setTierBadge(section, "WW", getBestTier(entriesByMode[1], data.tierOrder));
        });
      })
      .catch(function (error) {
        console.error("[Guide resume tier] mount failed", error);
      });
  }

  window.ParadiseGuideResumeTier = {
    mount: mount,
  };
}());
