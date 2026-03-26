(function () {
  var site = window.ParadiseSiteData || null;
  var prefetchedUrls = Object.create(null);
  var activeLink = null;
  var prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealObserver = null;
  var scrollProgressFill = null;
  var scrollProgressTicking = false;
  var mutationObserver = null;
  var tooltipNode = null;
  var tooltipActiveTarget = null;
  var tooltipPointerX = 0;
  var tooltipPointerY = 0;
  var tooltipFrame = 0;
  var revealSelector = [
    ".directory-panel",
    ".hero-stat",
    ".mode-switch__button",
    ".tier-row",
    ".tier-cell",
    ".tier-character",
    ".guide-hero",
    ".guide-section",
    ".section-nav",
    ".hero-badge",
    ".info-card",
    ".metric-card",
    ".weapon-card",
    ".weapon-percent-block",
    ".echo-card",
    ".echo-item",
    ".stat-card",
    ".kit-card",
    ".empty-guide",
    ".guide-tier-entry",
    ".guide-tier-empty",
    ".overview-hero__frame",
    ".overview-summary-card",
    ".overview-metric-card",
    ".overview-editorial__main",
    ".hero-info-card",
    ".hero-meta-pill",
    ".echo-set",
    ".mainstat-card",
    ".substat-card",
    ".endgame-stat",
    ".team-minimal-card",
    ".team-card",
    ".team-slot",
    ".team-alt-card",
    ".team-deck",
    ".tier-showcase",
    ".priority-item",
    ".sequence-details",
    ".overview-sidecard",
    ".role-block",
    ".guide-panel",
    ".section-link",
    ".tab-button",
    ".mini-chip",
    ".hero-action",
    ".filter-pill",
    ".directory-reset",
    ".guide-tier-widget__button"
  ].join(",");
  var countSelector = [
    ".hero-stat strong",
    ".hero-progress__copy strong",
    ".metric-card strong",
    ".endgame-stat__value"
  ].join(",");
  var fillSelector = [
    ".score-bar span",
    ".hero-progress__track span",
    ".weapon-progress__fill",
    ".weapon-progress__overflow"
  ].join(",");

  if (!document.body) {
    return;
  }

  initRevealSystem();
  initMutationBridge();
  initLinkWarming();
  initLinkActivationFeedback();
  initHomeGuideWarmup();
  primeNode(document.body);

  function getLinkURL(link) {
    try {
      return new URL(link.href, window.location.href);
    } catch (error) {
      return null;
    }
  }

  function isSameDocumentHash(url) {
    return (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.search === window.location.search &&
      Boolean(url.hash)
    );
  }

  function isNavigableLink(link) {
    var href;
    var url;

    if (!link) {
      return false;
    }

    if (link.hasAttribute("download")) {
      return false;
    }

    if (link.getAttribute("target") && link.getAttribute("target") !== "_self") {
      return false;
    }

    href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") {
      return false;
    }

    if (/^\s*javascript:/i.test(href)) {
      return false;
    }

    url = getLinkURL(link);
    if (!url || url.origin !== window.location.origin) {
      return false;
    }

    if (isSameDocumentHash(url)) {
      return false;
    }

    return true;
  }

  function isGuideDestination(pathName) {
    return /\/pages\/guide\.html$/.test(pathName) || /\/pages\/guides\/[^/]+\.html$/.test(pathName);
  }

  function shouldAnimateNavigation(link, url) {
    if (prefersReducedMotion || !url) {
      return false;
    }

    return link.classList.contains("tier-character") || link.classList.contains("character-card");
  }

  function setActiveLink(link) {
    if (activeLink && activeLink !== link) {
      activeLink.classList.remove("is-route-target");
    }

    activeLink = link;

    if (activeLink) {
      activeLink.classList.add("is-route-target");
    }
  }

  function clearActiveLink() {
    if (!activeLink) {
      return;
    }

    activeLink.classList.remove("is-route-target");
    activeLink = null;
  }

  function initLinkWarming() {
    document.addEventListener(
      "pointerover",
      function (event) {
        var link = event.target.closest("a[href]");
        if (!isNavigableLink(link)) {
          return;
        }

        warmLink(link);
      },
      { passive: true }
    );

    document.addEventListener("focusin", function (event) {
      var link = event.target.closest("a[href]");
      if (!isNavigableLink(link)) {
        return;
      }

      warmLink(link);
    });

    document.addEventListener(
      "touchstart",
      function (event) {
        var link = event.target.closest("a[href]");
        if (!isNavigableLink(link)) {
          return;
        }

        warmLink(link);
      },
      { passive: true }
    );
  }

  function initLinkActivationFeedback() {
    document.addEventListener(
      "pointerdown",
      function (event) {
        var link = event.target.closest("a[href]");
        var url;

        if (!isNavigableLink(link)) {
          return;
        }

        url = getLinkURL(link);
        if (!shouldAnimateNavigation(link, url)) {
          return;
        }

        setActiveLink(link);
      },
      { passive: true }
    );

    document.addEventListener(
      "pointerup",
      function () {
        window.setTimeout(clearActiveLink, 180);
      },
      { passive: true }
    );

    document.addEventListener(
      "pointercancel",
      function () {
        clearActiveLink();
      },
      { passive: true }
    );

    document.addEventListener("click", function (event) {
      var link;

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      link = event.target.closest("a[href]");
      if (!isNavigableLink(link)) {
        return;
      }

      warmLink(link);
    });

    window.addEventListener("pagehide", clearActiveLink);
    window.addEventListener("blur", clearActiveLink);
  }

  function scheduleIdle(task) {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(task, { timeout: 1200 });
      return;
    }

    window.setTimeout(task, 260);
  }

  function warmCommonGuideResources() {
    if (!site) {
      return;
    }

    Promise.allSettled([
      warmRequest(site.resolvePath("public/data/characters.json")),
      warmRequest(site.resolvePath("public/data/tier-rankings.json")),
      warmRequest(site.resolvePath("scripts/app/guide-page.js")),
      warmRequest(site.resolvePath("scripts/app/guide-tier.js")),
      warmRequest(site.resolvePath("styles/pages/guide.css")),
      warmRequest(site.resolvePath("styles/components/guide-tier.css")),
      warmRequest(site.resolvePath("scripts/data/themes/default.js")),
      warmRequest(site.resolvePath("pages/guides/shorekeeper.html")),
      warmRequest(site.resolvePath("scripts/guides/shorekeeper/pages-data.js")),
      warmRequest(site.resolvePath("scripts/guides/shorekeeper/app.js")),
    ]);
  }

  function warmPriorityGuideLinks() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll("#tierListMount a.tier-character[href]"),
      0,
      10
    );

    if (!links.length) {
      return false;
    }

    links.forEach(function (link) {
      warmLink(link);
    });

    return true;
  }

  function initHomeGuideWarmup() {
    var mount;
    var observer;

    if (!document.body.classList.contains("home-page")) {
      return;
    }

    mount = document.getElementById("tierListMount");
    scheduleIdle(warmCommonGuideResources);

    if (!mount) {
      return;
    }

    if (warmPriorityGuideLinks()) {
      return;
    }

    observer = new MutationObserver(function () {
      if (!warmPriorityGuideLinks()) {
        return;
      }

      observer.disconnect();
    });

    observer.observe(mount, {
      childList: true,
      subtree: true,
    });
  }

  function initAmbientChrome() {
    var ambience;
    var noise;
    var orbA;
    var orbB;

    if (document.querySelector(".site-ambience")) {
      return;
    }

    ambience = document.createElement("div");
    ambience.className = "site-ambience";
    ambience.setAttribute("aria-hidden", "true");

    noise = document.createElement("div");
    noise.className = "site-noise";

    orbA = document.createElement("div");
    orbA.className = "site-orb site-orb--a";

    orbB = document.createElement("div");
    orbB.className = "site-orb site-orb--b";

    ambience.appendChild(noise);
    ambience.appendChild(orbA);
    ambience.appendChild(orbB);
    document.body.appendChild(ambience);
  }

  function initScrollProgress() {
    var progress;

    if (document.querySelector(".site-scroll-progress")) {
      scrollProgressFill = document.querySelector(".site-scroll-progress__fill");
      updateScrollProgress();
      return;
    }

    progress = document.createElement("div");
    progress.className = "site-scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    progress.innerHTML = '<span class="site-scroll-progress__fill"></span>';
    document.body.appendChild(progress);
    scrollProgressFill = progress.firstElementChild;

    updateScrollProgress();
    window.addEventListener("scroll", requestScrollProgressUpdate, { passive: true });
    window.addEventListener("resize", requestScrollProgressUpdate, { passive: true });
  }

  function requestScrollProgressUpdate() {
    if (scrollProgressTicking) {
      return;
    }

    scrollProgressTicking = true;
    window.requestAnimationFrame(function () {
      scrollProgressTicking = false;
      updateScrollProgress();
    });
  }

  function updateScrollProgress() {
    var doc = document.documentElement;
    var scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
    var ratio = Math.max(0, Math.min(window.scrollY / scrollable, 1));

    if (!scrollProgressFill) {
      return;
    }

    scrollProgressFill.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
  }

  function initRevealSystem() {
    if (prefersReducedMotion || typeof window.IntersectionObserver !== "function") {
      revealObserver = null;
      return;
    }

    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var node = entry.target;

          if (!entry.isIntersecting) {
            return;
          }

          if (node.classList.contains("fx-reveal")) {
            node.classList.add("is-visible");
          }

          if (node.classList.contains("fx-fill")) {
            node.classList.add("is-filled");
          }

          if (node.hasAttribute("data-count-parts")) {
            runCountUp(node);
          }

          revealObserver.unobserve(node);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      }
    );
  }

  function initMutationBridge() {
    if (mutationObserver) {
      return;
    }

    mutationObserver = new MutationObserver(function (records) {
      records.forEach(function (record) {
        Array.prototype.forEach.call(record.addedNodes, function (node) {
          if (node && node.nodeType === 1) {
            primeNode(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  function primeNode(root) {
    prepareFillNodes(root);
    prepareCountNodes(root);
    prepareMediaNodes(root);
  }

  function queryWithin(root, selector) {
    var nodes = [];

    if (!(root && root.nodeType === 1)) {
      return nodes;
    }

    if (root.matches(selector)) {
      nodes.push(root);
    }

    return nodes.concat(Array.prototype.slice.call(root.querySelectorAll(selector)));
  }

  function prepareRevealNodes(root) {
    queryWithin(root, revealSelector).forEach(function (node) {
      if (node.hasAttribute("data-fx-reveal")) {
        return;
      }

      node.setAttribute("data-fx-reveal", "true");
      node.classList.add("fx-reveal");
      node.style.setProperty("--reveal-delay", getRevealDelay(node) + "ms");

      if (prefersReducedMotion || !revealObserver) {
        node.classList.add("is-visible");
        return;
      }

      revealObserver.observe(node);
    });
  }

  function getRevealDelay(node) {
    var parent = node.parentElement;
    var siblings;
    var index;

    if (!parent) {
      return 0;
    }

    siblings = Array.prototype.filter.call(parent.children, function (sibling) {
      return sibling.matches && sibling.matches(revealSelector);
    });
    index = siblings.indexOf(node);

    if (index < 0) {
      return 0;
    }

    return Math.min(index, 7) * 70;
  }

  function prepareFillNodes(root) {
    queryWithin(root, fillSelector).forEach(function (node, index) {
      var target = String(node.style.width || node.getAttribute("data-fill-target") || "").trim();
      var delay = Math.min(index, 5) * 35;

      if (node.hasAttribute("data-fx-fill")) {
        return;
      }

      if (!target) {
        return;
      }

      node.setAttribute("data-fx-fill", "true");
      node.setAttribute("data-fill-target", target);
      node.style.width = target;
      node.classList.add("fx-fill");

      if (prefersReducedMotion) {
        node.classList.add("is-filled");
        return;
      }

      queueFillAnimation(node, delay);
    });
  }

  function queueFillAnimation(node, delay) {
    if (node.hasAttribute("data-fill-queued")) {
      return;
    }

    node.setAttribute("data-fill-queued", "true");

    window.requestAnimationFrame(function () {
      window.setTimeout(function () {
        node.classList.add("is-filled");
      }, delay);
    });
  }

  function prepareCountNodes(root) {
    queryWithin(root, countSelector).forEach(function (node) {
      var parts = buildNumericParts(node.textContent || "");

      if (node.hasAttribute("data-count-parts")) {
        return;
      }

      if (!parts) {
        return;
      }

      node.setAttribute("data-count-parts", JSON.stringify(parts));
      node.setAttribute("data-count-original", node.textContent || "");

      if (prefersReducedMotion || !revealObserver) {
        return;
      }

      revealObserver.observe(node);
    });
  }

  function buildNumericParts(text) {
    var pattern = /\d[\d\s.,]*/g;
    var parts = [];
    var match;
    var cursor = 0;

    while ((match = pattern.exec(text))) {
      var raw = match[0];
      var normalized = raw.replace(/\s+/g, "").replace(",", ".");
      var value = Number(normalized);
      var decimals = 0;

      if (match.index > cursor) {
        parts.push({ type: "text", value: text.slice(cursor, match.index) });
      }

      if (!isFinite(value)) {
        parts.push({ type: "text", value: raw });
      } else {
        if (raw.indexOf(",") >= 0) {
          decimals = raw.split(",").pop().length;
        } else if (raw.indexOf(".") >= 0) {
          decimals = raw.split(".").pop().length;
        }

        parts.push({
          type: "number",
          raw: raw,
          value: value,
          decimals: decimals,
          grouped: /\s/.test(raw) || value >= 10000,
        });
      }

      cursor = match.index + raw.length;
    }

    if (!parts.length) {
      return null;
    }

    if (cursor < text.length) {
      parts.push({ type: "text", value: text.slice(cursor) });
    }

    if (!parts.some(function (part) { return part.type === "number"; })) {
      return null;
    }

    return parts;
  }

  function runCountUp(node) {
    var parts;
    var duration;
    var start;

    if (node.hasAttribute("data-count-ran")) {
      return;
    }

    parts = JSON.parse(node.getAttribute("data-count-parts") || "null");
    if (!parts) {
      return;
    }

    node.setAttribute("data-count-ran", "true");

    if (prefersReducedMotion) {
      node.textContent = node.getAttribute("data-count-original") || node.textContent;
      return;
    }

    duration = 900;
    start = performance.now();

    function frame(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);

      node.textContent = parts
        .map(function (part) {
          if (part.type !== "number") {
            return part.value;
          }

          return formatCountValue(part, part.value * eased);
        })
        .join("");

      if (progress < 1) {
        window.requestAnimationFrame(frame);
        return;
      }

      node.textContent = node.getAttribute("data-count-original") || node.textContent;
    }

    window.requestAnimationFrame(frame);
  }

  function formatCountValue(part, value) {
    var options = {
      minimumFractionDigits: part.decimals,
      maximumFractionDigits: part.decimals,
    };
    var formatted = (part.decimals ? value : Math.round(value)).toLocaleString("fr-FR", options);

    if (!part.grouped) {
      return formatted.replace(/[\s\u202f\u00a0]/g, "");
    }

    return formatted.replace(/[\u202f\u00a0]/g, " ");
  }

  function prepareMediaNodes(root) {
    queryWithin(root, "img").forEach(function (image) {
      if (image.hasAttribute("data-media-state")) {
        return;
      }

      image.setAttribute("data-media-state", image.complete && image.naturalWidth ? "ready" : "loading");
      image.classList.add("fx-media");

      if (image.complete && image.naturalWidth) {
        return;
      }

      image.addEventListener(
        "load",
        function () {
          image.setAttribute("data-media-state", "ready");
        },
        { once: true }
      );

      image.addEventListener(
        "error",
        function () {
          image.setAttribute("data-media-state", "error");
        },
        { once: true }
      );
    });
  }

  function initTooltipSystem() {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (document.querySelector(".site-tooltip")) {
      tooltipNode = document.querySelector(".site-tooltip");
      return;
    }

    tooltipNode = document.createElement("div");
    tooltipNode.className = "site-tooltip";
    tooltipNode.setAttribute("aria-hidden", "true");
    document.body.appendChild(tooltipNode);

    document.addEventListener("pointerenter", handleTooltipEnter, true);
    document.addEventListener("focusin", handleTooltipEnter, true);
    document.addEventListener("pointermove", handleTooltipMove, { passive: true, capture: true });
    document.addEventListener("pointerleave", handleTooltipLeave, true);
    document.addEventListener("focusout", handleTooltipLeave, true);
    window.addEventListener("scroll", hideTooltip, { passive: true });
  }

  function prepareTooltipTargets(root) {
    queryWithin(root, "[title]").forEach(function (node) {
      var title = node.getAttribute("title");

      if (!title || node.hasAttribute("data-paradise-tooltip")) {
        return;
      }

      node.setAttribute("data-paradise-tooltip", title);
      node.removeAttribute("title");
    });
  }

  function handleTooltipEnter(event) {
    var target = event.target.closest("[data-paradise-tooltip]");
    var text;
    var rect;

    if (!tooltipNode || !target) {
      return;
    }

    text = target.getAttribute("data-paradise-tooltip");
    if (!text) {
      return;
    }

    tooltipActiveTarget = target;
    tooltipNode.textContent = text;
    tooltipNode.setAttribute("aria-hidden", "false");
    tooltipNode.classList.add("is-visible");

    rect = target.getBoundingClientRect();
    tooltipPointerX = rect.left + rect.width / 2;
    tooltipPointerY = rect.top - 10;
    scheduleTooltipPosition();
  }

  function handleTooltipMove(event) {
    if (!tooltipActiveTarget) {
      return;
    }

    tooltipPointerX = event.clientX;
    tooltipPointerY = event.clientY - 16;
    scheduleTooltipPosition();
  }

  function handleTooltipLeave(event) {
    if (!tooltipActiveTarget) {
      return;
    }

    if (event.type === "focusout" && event.relatedTarget && tooltipActiveTarget.contains(event.relatedTarget)) {
      return;
    }

    hideTooltip();
  }

  function hideTooltip() {
    if (!tooltipNode) {
      return;
    }

    tooltipActiveTarget = null;
    tooltipNode.classList.remove("is-visible");
    tooltipNode.setAttribute("aria-hidden", "true");
  }

  function scheduleTooltipPosition() {
    if (!tooltipNode || tooltipFrame) {
      return;
    }

    tooltipFrame = window.requestAnimationFrame(function () {
      var x;
      var y;
      var maxX;

      tooltipFrame = 0;
      if (!tooltipNode || tooltipNode.getAttribute("aria-hidden") === "true") {
        return;
      }

      x = tooltipPointerX;
      y = tooltipPointerY;
      maxX = window.innerWidth - tooltipNode.offsetWidth / 2 - 16;
      x = Math.max(tooltipNode.offsetWidth / 2 + 16, Math.min(x, maxX));
      y = Math.max(18, y - tooltipNode.offsetHeight);

      tooltipNode.style.left = x + "px";
      tooltipNode.style.top = y + "px";
    });
  }

  function warmRequest(urlString) {
    if (!urlString) {
      return Promise.resolve(false);
    }

    if (prefetchedUrls[urlString]) {
      return prefetchedUrls[urlString];
    }

    prefetchedUrls[urlString] = fetch(urlString, {
      credentials: "same-origin",
      mode: "same-origin",
    })
      .then(function () {
        return true;
      })
      .catch(function () {
        return false;
      });

    return prefetchedUrls[urlString];
  }

  function warmLink(link) {
    var url = getLinkURL(link);
    var pathName;
    var slug;
    var guidePageMatch;
    var tasks;

    if (!url) {
      return Promise.resolve();
    }

    pathName = url.pathname.toLowerCase();
    tasks = [warmRequest(url.toString())];

    if (site && isGuideDestination(pathName)) {
      tasks.push(warmRequest(site.resolvePath("public/data/characters.json")));
      tasks.push(warmRequest(site.resolvePath("public/data/tier-rankings.json")));
      tasks.push(warmRequest(site.resolvePath("scripts/app/guide-tier.js")));
      tasks.push(warmRequest(site.resolvePath("styles/components/guide-tier.css")));
    }

    if (site && /\/pages\/guide\.html$/.test(pathName)) {
      slug = site.normalizeSlug(url.searchParams.get("slug"));
      tasks.push(warmRequest(site.resolvePath("scripts/app/guide-page.js")));
      tasks.push(warmRequest(site.resolvePath("styles/pages/guide.css")));

      if (slug) {
        if (site.hasThemeScript(slug)) {
          tasks.push(warmRequest(site.resolvePath("scripts/data/themes/" + slug + ".js")));
        }

        if (site.hasGuideScript(slug)) {
          tasks.push(warmRequest(site.resolvePath("scripts/data/guides/" + slug + ".js")));
        }
      }
    }

    if (site && /\/pages\/guides\/template-character\.html$/.test(pathName)) {
      tasks.push(warmRequest(site.resolvePath("scripts/guides/template-character/pages-data.js")));
      tasks.push(warmRequest(site.resolvePath("scripts/guides/template-character/app.js")));
      tasks.push(warmRequest(site.resolvePath("scripts/guides/template-character/armes.js")));
      tasks.push(warmRequest(site.resolvePath("scripts/guides/template-character/sequence.js")));
      tasks.push(warmRequest(site.resolvePath("scripts/guides/template-character/team.js")));
      tasks.push(warmRequest(site.resolvePath("styles/guides/template-character/base.css")));
      tasks.push(warmRequest(site.resolvePath("styles/guides/template-character/overview.css")));
    }

    if (site && /\/pages\/guides\/shorekeeper\.html$/.test(pathName)) {
      tasks.push(warmRequest(site.resolvePath("scripts/guides/shorekeeper/pages-data.js")));
      tasks.push(warmRequest(site.resolvePath("scripts/guides/shorekeeper/app.js")));
    }

    if (site) {
      guidePageMatch = pathName.match(/\/pages\/guides\/([^/]+)\.html$/);

      if (guidePageMatch && guidePageMatch[1] !== "shorekeeper" && guidePageMatch[1] !== "template-character") {
        slug = site.normalizeSlug(guidePageMatch[1]);

        tasks.push(warmRequest(site.resolvePath("scripts/guides/" + slug + "/pages-data.js")));
        tasks.push(warmRequest(site.resolvePath("scripts/guides/" + slug + "/app.js")));
        tasks.push(warmRequest(site.resolvePath("scripts/guides/" + slug + "/armes.js")));
        tasks.push(warmRequest(site.resolvePath("scripts/guides/" + slug + "/sequence.js")));
        tasks.push(warmRequest(site.resolvePath("scripts/guides/" + slug + "/team.js")));
        tasks.push(warmRequest(site.resolvePath("styles/guides/" + slug + "/base.css")));
        tasks.push(warmRequest(site.resolvePath("styles/guides/" + slug + "/overview.css")));
      }
    }

    return Promise.allSettled(tasks);
  }
}());
