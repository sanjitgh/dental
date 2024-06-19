$(document).ready(function () {
  $(".slider_carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    dots: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>',],
  });
});
$(document).ready(function () {
  $(".client_carousel").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>',],

    responsive : {
      // breakpoint from 0 up
      0 : {
          items: 2,
      },
      // breakpoint from 480 up
      768 : {
          items: 3,
      },
      // breakpoint from 768 up
      1024 : {
          
      }
  }
  });
});
// wow js
new WOW().init();