AOS.init({
  duration: 500,
  easing: "ease",
  once: true,
  anchorPlacement: "center-bottom",
});

setTimeout(function () {
  AOS.refresh();
}, 1000);

$(".accordion-content-item").click(function () {
  var accordion = $(this);

  if (accordion.hasClass("open")) {
    accordion.removeClass("open");
    accordion.find(".accordion-content-item-content").slideUp("fast");
  } else {
    var openAccordion = $(".accordion-content-item.open");
    openAccordion.removeClass("open");
    openAccordion.find(".accordion-content-item-content").slideUp("fast");

    accordion.addClass("open");
    accordion.find(".accordion-content-item-content").slideDown("fast");
  }
});
