if ($(".about-header-popup-wrapper").length) {
  $("body").on(
    "click",
    ".about-header-popup-wrapper .close-modal-button img",
    function (e) {
      e.preventDefault();
      $(e.currentTarget)
        .closest(".about-header-popup-wrapper")
        .css("display", "none");
    }
  );
  $("body").on("click", ".about-header-popup-opener", function (e) {
    e.preventDefault();
    $(".about-header-popup-wrapper").css("display", "flex");
  });
}

// let btn = document.querySelectorAll(".about-header-wrapper .about-header-container.content-wrapper .button-area>a");

// const fireGetStartedEvent = () => {
//     mParticle.logEvent("Get started", mParticle.EventType.Other, {
//       page_url: window.location.href,
//       source_module:"Gen Header Section",
//     },
//     {
//      'Google.Category': 'Online Payment',
//      'Google.Label': 'Ik Pay Link',
//     "Facebook.EventSourceUrl": window.location.href,
//     "Google.Location": window.location.href,
//     "Google.Hostname": window.location.hostname,
//     "Google.Page": window.location.pathname,
//     "Google.DocumentReferrer": window.location.href,
//     "Google.Title": document.title,
//       }

//                       );
// }

// btn[0].addEventListener("click", fireGetStartedEvent);

//   if(screen.availWidth <= 1050)
//   {

// function getMobileOperatingSystem() {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if (/windows phone/i.test(userAgent)) {

//    btn[0].href = "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
//     }
//     else if (/android/i.test(userAgent)) {
//       btn[0].href = "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
//     }
//     else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//    btn[0].href = "https://apps.apple.com/za/app/ikhokha/id1325073911";
//     }
//    else {
//   btn[0].href = "https://appgallery.huawei.com/app/C102486477";
// }

// }

//    getMobileOperatingSystem()

//   }
