$(document).ready(function() {
    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("bg-white"); // navbar-light 
      } else {
        $(".navbar").removeClass("bg-white");
      }
    });
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark");
        } else {
        }
      }
    });
    // ############
  
    // document ready
  });