window.PageInit = window.PageInit || {};

window.PageInit["tier"] = function () {
  var root = document.querySelector("[data-guide-tier-root]");

  if (!root || !window.ParadiseGuideTier || typeof window.ParadiseGuideTier.mount !== "function") {
    return;
  }

  window.ParadiseGuideTier.mount(root, {
    characterId: "shorekeeper",
    mode: "TOA",
  });
};
