window.PageInit = window.PageInit || {};

window.PageInit["team"] = function () {
  var root = document.getElementById("teamCards");
  var renderer = window.ParadiseGuideTeamCards;
  var portrait = "../../assets/img/placeholders/guide-template/character-portrait.svg";
  var context = window.TemplateCharacterContext || {};
  var currentName =
    (context.character && context.character.name) ||
    (context.display && context.display.name) ||
    "[Nom du personnage]";

  if (!root || !renderer || typeof renderer.render !== "function") {
    return;
  }

  renderer.render(root, {
    variant: "minimal",
    cards: [
      {
        title: "Composition 1",
        slots: [
          {
            name: "[Personnage 1]",
            image: portrait,
          },
          {
            name: "[Personnage 2]",
            image: portrait,
            alternatives: [
              {
                name: "[Alternative 1]",
                image: portrait,
              },
              {
                name: "[Alternative 2]",
                image: portrait,
              },
            ],
          },
          {
            name: currentName,
            image: portrait,
          },
        ],
      },
      {
        title: "Composition 2",
        slots: [
          {
            name: "[Personnage 3]",
            image: portrait,
            alternatives: [
              {
                name: "[Alternative 3]",
                image: portrait,
              },
            ],
          },
          {
            name: "[Personnage 4]",
            image: portrait,
          },
          {
            name: currentName,
            image: portrait,
          },
        ],
      },
      {
        title: "Composition 3",
        slots: [
          {
            name: "[Personnage 5]",
            image: portrait,
          },
          {
            name: "[Personnage 6]",
            image: portrait,
          },
          {
            name: currentName,
            image: portrait,
          },
        ],
      },
      {
        title: "Composition 4",
        slots: [
          {
            name: "[Personnage 7]",
            image: portrait,
          },
          {
            name: "[Personnage 8]",
            image: portrait,
            alternatives: [
              {
                name: "[Alternative 4]",
                image: portrait,
              },
            ],
          },
          {
            name: currentName,
            image: portrait,
          },
        ],
      },
    ],
  });
};
