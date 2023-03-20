var detroyGenProductFeatureCardCarousel = (slider) => {
  if(slider.hasClass("swiper-initialized")){
    slider[0].swiper.disable();
    slider[0].swiper.destroy();
    slider.find('.swiper-wrapper').attr('style', '');
    slider.find('.swiper-slide').attr('style', '')
  }
}
    
var genProductFeatureCardCarouselControl = () =>{
  $(".product-feature-card-carousel-swiper").each(function(index, slider) {
    if(screenWidthValue > 991){
      if(!Boolean($(slider).data("slider-active"))){
        createGenProductFeatureCardCarousel($(slider));
      }else{
        detroyGenProductFeatureCardCarousel($(slider));
      }
    }else{
      createGenProductFeatureCardCarousel($(slider));
    }

    checkGenProductFeatureCardArrows($(slider));
  });           
}
    
var createGenProductFeatureCardCarousel = (slider) =>{            
  if(!slider.hasClass("swiper-initialized")) {
    var sliderName = slider.data("slider-name");
    var sliderArrows = slider.data("slider-arrows");
    var sliderAutoplay = slider.data("slider-autoplay");
    var sliderCycleDelay = slider.data("slider-cycle-delay");
    var sliderPauseHover = slider.data("slider-pause-hover");
    var sliderPagination = slider.data("slider-pagination");
    
      new Swiper(slider[0] ,{
        centerInsufficientSlides: true,
        navigation: sliderArrows ? ({
          nextEl: "." + sliderName + "-button.swiper-button-next",
          prevEl: "." + sliderName + "-button.swiper-button-prev"
      }) : false,
        autoplay: sliderAutoplay ? ({
          delay: sliderCycleDelay,
          disableOnInteraction: !1,
          pauseOnMouseEnter: sliderPauseHover
      }) : false,
        pagination: sliderPagination ? ({
          el: "." + sliderName + "-pagination.swiper-pagination",
      }) : false,
        breakpoints: {
          1: {
            slidesPerView: 1.2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
      }
    })
  }
}

var checkGenProductFeatureCardArrows = (slider) => {
  var sliderName = slider.data("slider-name");
  
  if(slider.hasClass("swiper-initialized")){
    $("." + sliderName + "-button").removeClass("product-feature-card-hide");
  }else{
    $("." + sliderName + "-button").addClass("product-feature-card-hide");
  }
}
    
    //Initial

var screenWidthValue = typeof window !== "undefined" ? window.innerWidth : null;
genProductFeatureCardCarouselControl();

$(window).on("resize", function () {
  screenWidthValue = typeof window !== "undefined" ? window.innerWidth : null;
  genProductFeatureCardCarouselControl();
});


