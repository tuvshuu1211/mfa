(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $('.main-news-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

  $(document).ready(function(){
    $('.accordion').each(function(){
      if($(this).is('.is-active')){
        $(this).find('.accordion-body').slideDown();
      }
    })
  })
  $(".accordion-header").click(function(){
    $('.accordion').each(function(){
      $(this).removeClass('is-active')
      if($(this).not('.is-active')){
        $(this).find('.accordion-body').slideUp();
      }
    })
      $(this).next().slideDown();
      $(this).parent().toggleClass('is-active');

  });


})(jQuery); // End of use strict
