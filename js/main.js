$(document).ready(function(){
  // Nav collapse
  $(".nav-trigger").on("click", function() {
    $(".nav").toggleClass('open')
  })
  //Change navbar height on scroll
  // $(window).scroll(function(){
  //   if ($(document).scrollTop() > 50){
  //     $(".navbar-nav").addClass('navbar-scroll')
  //   }
  //   else {
  //     $('.navbar-nav').removeClass('navbar-scroll')
  //   }
  // })


});
