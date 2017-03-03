// Nav collapse
$(document).ready(function(){
  $(".nav-trigger").on("click", function() {
    $(".nav").toggleClass('open')
  })
});


//Change navbar bgcolor on scroll
$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
          $(".navbar").css("background-color", "rgba(0, 0, 0, 1)");
        } else {
          $(".navbar").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
      });
    });
