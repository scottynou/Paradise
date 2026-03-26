window.PageInit = window.PageInit || {};

window.PageInit["team"] = function () {
  var root = document.getElementById("teamCards");
  var renderer = window.ParadiseGuideTeamCards;
  var context = window.TemplateCharacterContext || {};
  var currentName =
    (context.character && context.character.name) ||
    (context.display && context.display.name) ||
    "Aemeath";

  if (!root || !renderer || typeof renderer.render !== "function") {
    return;
  }

  function character(name, image, slug, alternatives) {
    return {
      name: name,
      image: image,
      guideSlug: slug,
      alternatives: alternatives || [],
    };
  }

  renderer.render(root, {
    variant: "minimal",
    cards: [
      {
        title: "Meilleure equipe",
        slots: [
          character(
            currentName,
            "../../assets/img/tierlist/Aemeath.webp",
            "aemeath"
          ),
          character(
            "Lynae",
            "../../assets/img/tierlist/Lynae.webp",
            "lynae"
          ),
          character(
            "Mornye",
            "../../assets/img/tierlist/Mornye.webp",
            "mornye",
            [
              character(
                "Shorekeeper",
                "../../assets/img/tierlist/shorekeeper.png",
                "shorekeeper"
              ),
              character(
                "Verina",
                "../../assets/img/tierlist/Verina.png",
                "verina"
              ),
              character(
                "Chisa",
                "../../assets/img/tierlist/Chisa.webp",
                "chisa"
              ),
            ]
          ),
        ],
      },
      {
        title: "Fusion pure",
        slots: [
          character(
            currentName,
            "../../assets/img/tierlist/Aemeath.webp",
            "aemeath"
          ),
          character(
            "Lupa",
            "../../assets/img/tierlist/Lupa.png",
            "lupa"
          ),
          character(
            "Mornye",
            "../../assets/img/tierlist/Mornye.webp",
            "mornye",
            [
              character(
                "Brant",
                "../../assets/img/tierlist/Brant.png",
                "brant"
              ),
              character(
                "Changli",
                "../../assets/img/tierlist/Changli.png",
                "changli"
              ),
            ]
          ),
        ],
      },
      {
        title: "Equipes alternatives",
        slots: [
          character(
            currentName,
            "../../assets/img/tierlist/Aemeath.webp",
            "aemeath"
          ),
          character(
            "Lupa",
            "../../assets/img/tierlist/Lupa.png",
            "lupa",
            [
              character(
                "Brant",
                "../../assets/img/tierlist/Brant.png",
                "brant"
              ),
              character(
                "Changli",
                "../../assets/img/tierlist/Changli.png",
                "changli"
              ),
            ]
          ),
          character(
            "Shorekeeper",
            "../../assets/img/tierlist/shorekeeper.png",
            "shorekeeper",
            [
              character(
                "Verina",
                "../../assets/img/tierlist/Verina.png",
                "verina"
              ),
              character(
                "Chisa",
                "../../assets/img/tierlist/Chisa.webp",
                "chisa"
              ),
            ]
          ),
        ],
      },
    ],
  });
};
