window.PageInit = window.PageInit || {};

window.PageInit["team"] = function () {
  var root = document.getElementById("teamCards");
  var renderer = window.ParadiseGuideTeamCards;

  if (!root || !renderer || typeof renderer.render !== "function") {
    return;
  }

  renderer.render(root, {
    variant: "minimal",
    cards: [
      {
        title: "Plafond maximal",
        slots: [
          {
            name: "Augusta",
            image: "../../assets/img/tierlist/Augusta.png",
            guideSlug: "augusta",
          },
          {
            name: "Iuno",
            image: "../../assets/img/tierlist/Iuno.webp",
            guideSlug: "iuno",
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
            alternatives: [
              {
                name: "Verina",
                image: "../../assets/img/tierlist/Verina.png",
                guideSlug: "verina",
              },
            ],
          },
        ],
      },
      {
        title: "Core accessible",
        slots: [
          {
            name: "Augusta",
            image: "../../assets/img/tierlist/Augusta.png",
            guideSlug: "augusta",
          },
          {
            name: "Mortefi",
            image: "../../assets/img/tierlist/Mortefi.png",
            guideSlug: "mortefi",
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
            alternatives: [
              {
                name: "Verina",
                image: "../../assets/img/tierlist/Verina.png",
                guideSlug: "verina",
              },
            ],
          },
        ],
      },
      {
        title: "Alternative Electro",
        slots: [
          {
            name: "Augusta",
            image: "../../assets/img/tierlist/Augusta.png",
            guideSlug: "augusta",
          },
          {
            name: "Yinlin",
            image: "../../assets/img/tierlist/Yinlin.png",
            guideSlug: "yinlin",
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
            alternatives: [
              {
                name: "Verina",
                image: "../../assets/img/tierlist/Verina.png",
                guideSlug: "verina",
              },
            ],
          },
        ],
      },
    ],
  });
};
