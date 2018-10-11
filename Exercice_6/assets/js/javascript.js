var x = $("#text")

$("#green").hover(
  function() {
    x.css("color", "green");
  }, function() {
    x.css("color", "inherit" );
  }
);

$("#red").hover(
  function() {
    x.css("color", "red");
  }, function() {
    x.css("color", "inherit" );
  }
);

$("#blue").hover(
  function() {
    x.css("color", "blue");
  }, function() {
    x.css("color", "inherit" );
  }
);
