//Création d'une variable
var x = $("#lastName");
var y = $("#firstName");

//Si focus cadre vert
x.focusin(function() {
  x.css("border", "1px solid green");
});

y.focusin(function() {
  y.css("border", "1px solid green");
});

//Si pas de focus cadre rouge
x.focusout(function() {
  x.css("border", "1px solid red");
});

y.focusout(function() {
  y.css("border", "1px solid red");
});
