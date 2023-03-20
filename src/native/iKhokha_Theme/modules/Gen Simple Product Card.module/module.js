AOS.init({
    duration: 500,
    easing: "ease",
    once: true,
    anchorPlacement: "center-bottom",
});

setTimeout(function () {
  AOS.refresh();
}, 1000);