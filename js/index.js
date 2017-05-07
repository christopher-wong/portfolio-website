$("#main").hide();
$("#main").fadeIn(1000);

$(document).ready(function (){
  $("#show_email").click(function() {
    $(this).addClass("active");
    $(".email").fadeToggle();
  });
} );

document.onkeypress = function(e) {
  if (e.keyCode === 112) {
    window.location="projects.html";
  }
}
