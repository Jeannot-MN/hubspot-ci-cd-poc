document.addEventListener("DOMContentLoaded", (event) => {
  // mparticle events
  document.querySelectorAll("a.footer-col-link").forEach((item) =>
    item.addEventListener("click", (event) => {
      sendMparticleButtonClickEvent(event, "Gen Footer", "Footer");
    })
  );

  document
    .querySelector("#mobile-footer")
    .addEventListener("click", function (e) {
      document.querySelector("#mobile-footer").classList.toggle("slidedown");

      console.log(e.target);
    });

  document
    .querySelectorAll('.footer-container a[href*="#tel"]')
    .forEach((item) => {
      item.href = item.hash.replace("#", "");
    });
});
