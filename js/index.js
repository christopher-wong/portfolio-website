$("#main").hide();
$("#main").fadeIn(1000);

$(document).ready(function (){
  $("#show_email").click(function() {
    $(".email").fadeToggle()
  });
} );

document.onkeypress = function(e) {
  if (e.keyCode === 112 || window.event) {
    window.location="projects.html"
  }
}
