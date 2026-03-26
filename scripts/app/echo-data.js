(function () {
  var site = window.ParadiseSiteData;
  var registryPromise = null;
  var registryState = null;
  var warnedMessages = new Set();

  if (!site) {
    return;
  }

  function warn(message) {
    if (warnedMessages.has(message)) {
      return;
    }

    warnedMessages.add(message);
    console.warn("[Paradise echoes] " + message);
  }

  function normalizeText(value) {
    return String(value == null ? "" : value).trim();
  }

  function stripDiacritics(value) {
    return normalizeText(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function normalizeLookupKey(value) {
    return stripDiacritics(value)
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[:]/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function toId(value) {
    return normalizeLookupKey(value).replace(/\s+/g, "-");
  }

  function buildEchoImagePath(englishName) {
    var assetName = normalizeText(englishName).replace(/:/g, "");
    return assetName ? "assets/img/echo/" + assetName + ".png" : "";
  }

  function buildSonataImagePath(englishName) {
    var assetName = normalizeText(englishName);
    return assetName ? "assets/img/set/" + assetName + ".png" : "";
  }

  function loadJSON(path) {
    return fetch(site.resolvePath(path), {
      credentials: "same-origin",
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("Impossible de charger " + path + ".");
      }

      return response.json();
    });
  }

  function createSonataEntry(rawSonata) {
    var englishName = normalizeText(rawSonata && rawSonata.englishName);

    return {
      id: toId(englishName),
      englishName: englishName,
      frenchName: normalizeText(rawSonata && rawSonata.frenchName),
      image: buildSonataImagePath(englishName),
      echoes: [],
    };
  }

  function createEchoEntry(rawEcho) {
    var englishName = normalizeText(rawEcho && rawEcho.englishName);

    return {
      id: toId(englishName),
      englishName: englishName,
      frenchName: normalizeText(rawEcho && rawEcho.frenchName),
      image: buildEchoImagePath(englishName),
      cost: 0,
      sonatas: [],
    };
  }

  function cloneDiagnostics(diagnostics) {
    return {
      membershipsMissingSonataTranslation: diagnostics.membershipsMissingSonataTranslation.slice(),
      membershipsMissingEchoTranslation: diagnostics.membershipsMissingEchoTranslation.slice(),
      echoesWithoutSonatas: diagnostics.echoesWithoutSonatas.slice(),
      inconsistentEchoCosts: diagnostics.inconsistentEchoCosts.slice(),
      duplicateMemberships: diagnostics.duplicateMemberships.slice(),
    };
  }

  function buildRegistry(rawSonatas, rawEchoes, rawMemberships) {
    var diagnostics = {
      membershipsMissingSonataTranslation: [],
      membershipsMissingEchoTranslation: [],
      echoesWithoutSonatas: [],
      inconsistentEchoCosts: [],
      duplicateMemberships: [],
    };
    var sonatas = [];
    var echoes = [];
    var sonatasById = new Map();
    var sonatasByLookupKey = new Map();
    var echoesById = new Map();
    var echoesByLookupKey = new Map();
    var membershipEntriesByEchoKey = new Map();
    var membershipPairs = new Set();

    (Array.isArray(rawSonatas) ? rawSonatas : []).forEach(function (rawSonata) {
      var sonata = createSonataEntry(rawSonata);
      var englishLookupKey = normalizeLookupKey(sonata.englishName);
      var frenchLookupKey = normalizeLookupKey(sonata.frenchName);

      if (!sonata.id) {
        return;
      }

      sonatas.push(sonata);
      sonatasById.set(sonata.id, sonata);
      sonatasByLookupKey.set(englishLookupKey, sonata);

      if (frenchLookupKey) {
        sonatasByLookupKey.set(frenchLookupKey, sonata);
      }
    });

    (Array.isArray(rawEchoes) ? rawEchoes : []).forEach(function (rawEcho) {
      var echo = createEchoEntry(rawEcho);
      var englishLookupKey = normalizeLookupKey(echo.englishName);
      var frenchLookupKey = normalizeLookupKey(echo.frenchName);

      if (!echo.id) {
        return;
      }

      echoes.push(echo);
      echoesById.set(echo.id, echo);
      echoesByLookupKey.set(englishLookupKey, echo);

      if (frenchLookupKey) {
        echoesByLookupKey.set(frenchLookupKey, echo);
      }
    });

    (Array.isArray(rawMemberships) ? rawMemberships : []).forEach(function (rawGroup) {
      var sonataName = normalizeText(rawGroup && rawGroup.sonata);
      var sonataKey = normalizeLookupKey(sonataName);
      var sonata = sonatasByLookupKey.get(sonataKey);

      if (!sonata) {
        diagnostics.membershipsMissingSonataTranslation.push(sonataName);
        return;
      }

      (Array.isArray(rawGroup && rawGroup.echoes) ? rawGroup.echoes : []).forEach(function (rawEcho) {
        var echoName = normalizeText(rawEcho && rawEcho.name);
        var echoKey = normalizeLookupKey(echoName);
        var pairKey = sonata.id + "::" + echoKey;
        var echoEntries;

        if (membershipPairs.has(pairKey)) {
          diagnostics.duplicateMemberships.push(sonata.englishName + " -> " + echoName);
          return;
        }

        membershipPairs.add(pairKey);
        echoEntries = membershipEntriesByEchoKey.get(echoKey) || [];
        echoEntries.push({
          sonataId: sonata.id,
          sonataEnglishName: sonata.englishName,
          sonataFrenchName: sonata.frenchName,
          echoEnglishName: echoName,
          cost: Number(rawEcho && rawEcho.cost) || 0,
        });
        membershipEntriesByEchoKey.set(echoKey, echoEntries);
      });
    });

    echoes.forEach(function (echo) {
      var echoKey = normalizeLookupKey(echo.englishName);
      var memberships = membershipEntriesByEchoKey.get(echoKey) || [];
      var costs = [];

      echo.sonatas = memberships.map(function (membership) {
        if (costs.indexOf(membership.cost) < 0 && membership.cost > 0) {
          costs.push(membership.cost);
        }

        return {
          id: membership.sonataId,
          englishName: membership.sonataEnglishName,
          frenchName: membership.sonataFrenchName,
          cost: membership.cost,
          image: buildSonataImagePath(membership.sonataEnglishName),
        };
      });

      if (!memberships.length) {
        diagnostics.echoesWithoutSonatas.push(echo.englishName);
        return;
      }

      if (costs.length > 1) {
        diagnostics.inconsistentEchoCosts.push(echo.englishName);
      }

      echo.cost = costs[0] || memberships[0].cost || 0;
    });

    sonatas.forEach(function (sonata) {
      sonata.echoes = [];
    });

    membershipEntriesByEchoKey.forEach(function (memberships, echoKey) {
      var echo = echoesByLookupKey.get(echoKey);

      if (!echo) {
        diagnostics.membershipsMissingEchoTranslation.push(
          memberships[0] ? memberships[0].echoEnglishName : echoKey
        );
        return;
      }

      memberships.forEach(function (membership) {
        var sonata = sonatasById.get(membership.sonataId);

        if (!sonata) {
          return;
        }

        sonata.echoes.push({
          id: echo.id,
          englishName: echo.englishName,
          frenchName: echo.frenchName,
          image: echo.image,
          cost: membership.cost,
        });
      });
    });

    Object.keys(diagnostics).forEach(function (key) {
      diagnostics[key] = diagnostics[key]
        .filter(function (value, index, array) {
          return value && array.indexOf(value) === index;
        })
        .sort();
    });

    diagnostics.membershipsMissingSonataTranslation.forEach(function (name) {
      warn('Sonata absente du registre: "' + name + '".');
    });
    diagnostics.membershipsMissingEchoTranslation.forEach(function (name) {
      warn('Echo reference dans les sonatas mais absent du registre: "' + name + '".');
    });
    diagnostics.echoesWithoutSonatas.forEach(function (name) {
      warn('Echo sans sonata detecte: "' + name + '".');
    });
    diagnostics.inconsistentEchoCosts.forEach(function (name) {
      warn('Echo avec plusieurs couts detectes: "' + name + '".');
    });
    diagnostics.duplicateMemberships.forEach(function (pair) {
      warn('Doublon de correspondance detecte: "' + pair + '".');
    });

    return {
      version: "2026-03-25",
      paths: {
        sonataImages: "assets/img/set",
        echoImages: "assets/img/echo",
      },
      stats: {
        sonataCount: sonatas.length,
        echoCount: echoes.length,
        assignedEchoCount: echoes.length - diagnostics.echoesWithoutSonatas.length,
      },
      sonatas: sonatas,
      echoes: echoes,
      diagnostics: diagnostics,
      sonatasById: sonatasById,
      echoesById: echoesById,
      sonatasByLookupKey: sonatasByLookupKey,
      echoesByLookupKey: echoesByLookupKey,
    };
  }

  function load() {
    if (registryState) {
      return Promise.resolve(registryState);
    }

    if (registryPromise) {
      return registryPromise;
    }

    registryPromise = Promise.all([
      loadJSON("public/data/echoes/sonatas.json"),
      loadJSON("public/data/echoes/echoes.json"),
      loadJSON("public/data/echoes/memberships.json"),
    ])
      .then(function (payload) {
        registryState = buildRegistry(payload[0], payload[1], payload[2]);
        return registryState;
      })
      .catch(function (error) {
        registryPromise = null;
        throw error;
      });

    return registryPromise;
  }

  function getResolvedSonata(reference) {
    var lookup;

    if (!registryState) {
      return null;
    }

    if (typeof reference === "string") {
      lookup = normalizeLookupKey(reference);
      return (
        registryState.sonatasById.get(normalizeText(reference)) ||
        registryState.sonatasByLookupKey.get(lookup) ||
        null
      );
    }

    lookup = normalizeLookupKey(
      (reference && (reference.englishName || reference.frenchName || reference.displayName || reference.id)) ||
        ""
    );

    return (
      registryState.sonatasById.get(normalizeText(reference && reference.id)) ||
      registryState.sonatasByLookupKey.get(lookup) ||
      null
    );
  }

  function getResolvedEcho(reference) {
    var lookup;

    if (!registryState) {
      return null;
    }

    if (typeof reference === "string") {
      lookup = normalizeLookupKey(reference);
      return (
        registryState.echoesById.get(normalizeText(reference)) ||
        registryState.echoesByLookupKey.get(lookup) ||
        null
      );
    }

    lookup = normalizeLookupKey(
      (reference && (reference.englishName || reference.frenchName || reference.displayName || reference.id)) ||
        ""
    );

    return (
      registryState.echoesById.get(normalizeText(reference && reference.id)) ||
      registryState.echoesByLookupKey.get(lookup) ||
      null
    );
  }

  function decorateSonata(reference) {
    var source = reference && typeof reference === "object" ? reference : {};
    var resolved = getResolvedSonata(reference);

    return Object.assign({}, source, {
      id: normalizeText(source.id) || (resolved && resolved.id) || "",
      englishName: normalizeText(source.englishName) || (resolved && resolved.englishName) || "",
      frenchName: normalizeText(source.frenchName) || (resolved && resolved.frenchName) || "",
      displayName:
        normalizeText(source.displayName) ||
        normalizeText(source.frenchName) ||
        (resolved && resolved.frenchName) ||
        normalizeText(source.englishName) ||
        (resolved && resolved.englishName) ||
        "",
      image: normalizeText(source.image) || (resolved && resolved.image) || "",
      echoes: Array.isArray(source.echoes) ? source.echoes.slice() : (resolved && resolved.echoes.slice()) || [],
      registryMatch: Boolean(resolved),
    });
  }

  function decorateEcho(reference) {
    var source = reference && typeof reference === "object" ? reference : {};
    var resolved = getResolvedEcho(reference);

    return Object.assign({}, source, {
      id: normalizeText(source.id) || (resolved && resolved.id) || "",
      englishName: normalizeText(source.englishName) || (resolved && resolved.englishName) || "",
      frenchName: normalizeText(source.frenchName) || (resolved && resolved.frenchName) || "",
      displayName:
        normalizeText(source.displayName) ||
        normalizeText(source.frenchName) ||
        (resolved && resolved.frenchName) ||
        normalizeText(source.englishName) ||
        (resolved && resolved.englishName) ||
        "",
      image: normalizeText(source.image) || (resolved && resolved.image) || "",
      cost: Number(source.cost) || (resolved && resolved.cost) || 0,
      sonatas: Array.isArray(source.sonatas) ? source.sonatas.slice() : (resolved && resolved.sonatas.slice()) || [],
      registryMatch: Boolean(resolved),
    });
  }

  function getDiagnostics() {
    if (!registryState) {
      return null;
    }

    return cloneDiagnostics(registryState.diagnostics);
  }

  window.ParadiseEchoData = {
    decorateEcho: decorateEcho,
    decorateSonata: decorateSonata,
    getDiagnostics: getDiagnostics,
    getResolvedEcho: getResolvedEcho,
    getResolvedSonata: getResolvedSonata,
    load: load,
  };
}());
