var x = $("#lastName, #firstName");

x.focusin(function() {
  x.css("border", "1px solid green");
});

x.focusout(function() {
  x.css("border", "1px solid red");
});
