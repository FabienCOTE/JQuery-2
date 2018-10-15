//Création d'une variable
var x = $("#text");

//Quand notre curseur est sur un bouton, on change la couleur du texte
$("#green").hover(
  function() {
    x.css("color", "green");
  }, function() {
    x.css("color", "");
  }
);

$("#red").hover(
  function() {
    x.css("color", "red");
  }, function() {
    x.css("color", "");
  }
);

$("#blue").hover(
  function() {
    x.css("color", "blue");
  }, function() {
    x.css("color", "");
  }
);
