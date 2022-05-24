
$(document).ready(function () {

    // Banner Slider part
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplay:true,
    });

    // Team Slider part
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        responsive: [
           
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                 breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });

       $('.venobox').venobox();


    //employee info slider start
    $('.employee_info_slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.employee_info_slider_images'
    });
    $('.employee_info_slider_images').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.employee_info_slider_text',
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: '.employee_info_arrow_left',
        nextArrow: '.employee_info_arrow_right',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
           
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
   {
    breakpoint: 768,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
},

 ]

    });
    //employee info slider end

     // Sticky-top menu
     $(window).scroll(function(){
        var scrolling = $(this) . scrollTop ();
        var sticky = $(".sticky-top");
        if(scrolling >= 150){
            sticky.addClass("nav-bg");
        }else{
            sticky.removeClass("nav-bg");
        }
    }); 


      // Smooths scrolling
      $('body').scrollspy({target: ".navbar", offset: 50});
    
      var html_body = $('html, body');
      $('nav a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 50
                  }, 1500);
                  return false;
              }
          }
      });


    //   wow js activation code
    new WOW().init();

























});
