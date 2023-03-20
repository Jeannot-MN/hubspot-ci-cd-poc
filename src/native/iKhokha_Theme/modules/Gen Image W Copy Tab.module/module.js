AOS.init({
  duration: 500,
  easing: "ease",
  once: true,
  anchorPlacement: "center-bottom",
});

setTimeout(function () {
  AOS.refresh();
}, 100);

$(".image-copy-tab-activate").hover(
  function () {
    var tab = $(this);
    var classHover = tab.data("hover-class");

    if (!tab.hasClass("active")) {
      tab
        .find("span")
        .removeClass("theme-bg-iK-Charcoal")
        .addClass("theme-bg-iK-Yellow");
    }
  },
  function () {
    var tab = $(this);
    var classHover = tab.data("hover-class");
    tab
      .find("span")
      .removeClass("theme-bg-iK-Yellow")
      .addClass("theme-bg-iK-Charcoal");
  }
);

$(".image-copy-tab-activate").click(function () {
  var tab = $(this);
  var content = tab.data("tab-selector");

  if (!tab.hasClass("active")) {
    $(".image-copy-tab-activate.active").removeClass("active");
    tab.addClass("active");

    $(".image-copy-tab-wrapper[data-tab-content]").each(function () {
      var tabContent = $(this);

      if (tabContent.is(":visible")) {
        tabContent.slideFadeToggle("fast");
        tabContent.removeClass("active");
      }
    });

    $(
      ".image-copy-tab-wrapper[data-tab-content='" + content + "']"
    ).slideFadeToggle("fast");
  }
});

jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
  return this.animate(
    { opacity: "toggle", height: "toggle" },
    speed,
    easing,
    callback
  );
};

$(".image-copy-tab-titles").each(function (index, slider) {
  new Swiper($(slider)[0], {
    centerInsufficientSlides: true,
    autoplay: false
      ? {
          delay: 2.5,
          disableOnInteraction: !1,
          pauseOnMouseEnter: true,
        }
      : false,
    breakpoints: {
      1: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      567: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 8,
        spaceBetween: 0,
      },
    },
  });
});
