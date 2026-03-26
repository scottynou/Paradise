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
        title: "Augusta",
        slots: [
          {
            name: "Augusta",
            image: "../../assets/img/tierlist/Augusta.png",
            guideSlug: "augusta",
          },
          {
            name: "Iuno",
            image: "../../assets/img/tierlist/Iuno.png",
            guideSlug: "iuno",
            alternatives: [
              {
                name: "Brant",
                image: "../../assets/img/tierlist/Brant.png",
                guideSlug: "brant",
              },
            ],
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
          },
        ],
      },
      {
        title: "Carlotta",
        slots: [
          {
            name: "Carlotta",
            image: "../../assets/img/tierlist/Carlotta.png",
            guideSlug: "carlotta",
          },
          {
            name: "Zhezhi",
            image: "../../assets/img/tierlist/Zhezhi.png",
            guideSlug: "zhezhi",
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
          },
        ],
      },
      {
        title: "Zani",
        slots: [
          {
            name: "Zani",
            image: "../../assets/img/tierlist/Zani.png",
            guideSlug: "zani",
          },
          {
            name: "Phoebe",
            image: "../../assets/img/tierlist/Phoebe.png",
            guideSlug: "phoebe",
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
          },
        ],
      },
      {
        title: "Camellya",
        slots: [
          {
            name: "Camellya",
            image: "../../assets/img/tierlist/Camellya.png",
            guideSlug: "camellya",
          },
          {
            name: "Roccia",
            image: "../../assets/img/tierlist/Roccia.png",
            guideSlug: "roccia",
            alternatives: [
              {
                name: "Sanhua",
                image: "../../assets/img/tierlist/Sanhua.png",
                guideSlug: "sanhua",
              },
            ],
          },
          {
            name: "Shorekeeper",
            image: "../../assets/img/tierlist/shorekeeper.png",
            guideSlug: "shorekeeper",
          },
        ],
      },
    ],
  });
};
