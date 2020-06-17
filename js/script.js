(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function()
{
    $('.img-protect').bind('contextmenu', function(e){
        return false;
    }); 
});

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


function accHandler(){
  $('.accordion').each(function(){
  if($(this).is('.is-active')){
    $(this).find('.accordion-body').slideDown();
  }else{
    $(this).find('.accordion-body').slideUp();
  }
})
}

 $(document).ready(function(){
  accHandler();
  $('.accordion').each(function(){
    
    $(this).find('.accordion-header').on('click', function(){
      $(this).parent().toggleClass('is-active');
      accHandler()
    })
    
  })
 });

 $('.museum-gallery').owlCarousel({
  loop: true,
  nav: true,
  margin: 0,
  autoHeight:true,
  items: 1,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
 })
 $('.faq-carousel').owlCarousel({
  loop: true,
  nav: true,
  margin: 0,
  autoHeight:true,
  items: 1,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
 })

 $('.book-slider').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  margin: 0,
  items: 5,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  responsive:{
    0:{
      items: 2,
    },
    768:{
      items: 3,
    },
    990:{
      items: 5,
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,
});

function coverFlowEfx(e){
  if ($('.owl-dots')) {
    $('.owl-dots').remove();
  }
  var idx = e.item.index;
  $('.owl-item.big').removeClass('big');
  $('.owl-item.medium').removeClass('medium');
  $('.owl-item.mdright').removeClass('mdright');
  $('.owl-item.mdleft').removeClass('mdleft');
  $('.owl-item.smallRight').removeClass('smallRight');
  $('.owl-item.smallLeft').removeClass('smallLeft');
  $('.owl-item').eq(idx -1).addClass('medium mdleft');
  $('.owl-item').eq(idx - 2).addClass('smallLeft');
  $('.owl-item').eq(idx).addClass('big');
  $('.owl-item').eq(idx + 1).addClass('medium mdright');
  $('.owl-item').eq(idx + 2).addClass('smallRight');
}

})(jQuery); // End of use strict
