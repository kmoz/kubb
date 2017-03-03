$(document).ready(function(){
  // Nav collapse
  $(".nav-trigger").on("click", function() {
    $(".nav").toggleClass('open')
  })
  //Change navbar bgcolor on scroll
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $("nav").addClass('navbar-scroll')
    }
    else {
      $('nav').removeClass('navbar-scroll')
    }
  })
});
