$("#main").hide();
$("#main").fadeIn(1000);

$(document).ready(function (){
  $("#show_email").click(function() {
    $(".email").fadeToggle()
  });
} );
