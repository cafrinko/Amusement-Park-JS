$(document).ready(function() {
  var height = parseInt(prompt("What is your height in feet?"));

  if (height >= 7) {
    alert("You're too tall for our rides. So sorry.");
    $('#tootall').show();
  } else if (height > 4) {
    $('#scaryrides').show();
  } else {
    $('#notscaryrides').show();
  }
});
