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
        title: "Sigrika Hypercarry",
        slots: [
          {
            name: "Sigrika",
            image: "../../assets/img/tierlist/Sigrika.webp",
            guideSlug: "sigrika",
          },
          {
            name: "Qiuyuan",
            image: "../../assets/img/tierlist/Qiuyuan.webp",
            guideSlug: "qiuyuan",
          },
          {
            name: "Ciaccona",
            image: "../../assets/img/tierlist/Ciaccona.png",
            guideSlug: "ciaccona",
          },
        ],
      },
      {
        title: "Galbrena Hypercarry",
        slots: [
          {
            name: "Galbrena",
            image: "../../assets/img/tierlist/Galbrena.webp",
            guideSlug: "galbrena",
          },
          {
            name: "Qiuyuan",
            image: "../../assets/img/tierlist/Qiuyuan.webp",
            guideSlug: "qiuyuan",
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
        title: "Phrolova Echo",
        slots: [
          {
            name: "Phrolova",
            image: "../../assets/img/tierlist/Phrolova.png",
            guideSlug: "phrolova",
          },
          {
            name: "Cantarella",
            image: "../../assets/img/tierlist/Cantarella.png",
            guideSlug: "cantarella",
            alternatives: [
              {
                name: "Roccia",
                image: "../../assets/img/tierlist/Roccia.png",
                guideSlug: "roccia",
              },
              {
                name: "Danjin",
                image: "../../assets/img/tierlist/Danjin.png",
                guideSlug: "danjin",
              },
            ],
          },
          {
            name: "Qiuyuan",
            image: "../../assets/img/tierlist/Qiuyuan.webp",
            guideSlug: "qiuyuan",
          },
        ],
      },
      {
        title: "Phrolova sans Cantarella",
        slots: [
          {
            name: "Phrolova",
            image: "../../assets/img/tierlist/Phrolova.png",
            guideSlug: "phrolova",
          },
          {
            name: "Roccia",
            image: "../../assets/img/tierlist/Roccia.png",
            guideSlug: "roccia",
            alternatives: [
              {
                name: "Danjin",
                image: "../../assets/img/tierlist/Danjin.png",
                guideSlug: "danjin",
              },
            ],
          },
          {
            name: "Qiuyuan",
            image: "../../assets/img/tierlist/Qiuyuan.webp",
            guideSlug: "qiuyuan",
          },
        ],
      },
    ],
  });
};
