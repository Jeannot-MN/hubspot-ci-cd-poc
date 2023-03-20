// let btns = document.querySelectorAll(
//   ".lmc-section .content-wrapper .lmc-content-holder .lmc-content.lmc-card .button-area a"
// );
// let Titles = document.querySelectorAll(
//   ".lmc-section .content-wrapper .lmc-content-holder .lmc-content.lmc-card h3"
// );

// btns.forEach((item, index) => {
//   item.addEventListener("click", (event) => {
//     GetStartedEvent();
//     BtnClickEvent(item, index);
//   });
// });

// const BtnClickEvent = (btn, index) => {
//   mParticle.logEvent("Button Click", mParticle.EventType.Other, {
//     page_url: PageUrl,
//     page_title: PageTitle,
//     module_title: "Gen Card Blocks",
//     card_title: Titles[index]?.innerText,
//     button_text: btn?.innerText,
//     button_url: btn.href,
//   });
// };

// const GetStartedEvent = () => {
//   mParticle.logEvent(
//     "Get started",
//     mParticle.EventType.Other,
//     {
//       page_url: window.location.href,
//       source_module: "Gen Large Multi Card With Image toggle",
//     },
//     {
//       "Google.Category": "Online Payment",
//       "Google.Label":
//         window.location.pathname === "/tap-on-phone"
//           ? "Ik Tap on Phone"
//           : "Ik Pay Link",
//       "Facebook.EventSourceUrl": window.location.href,
//       "Google.Location": window.location.href,
//       "Google.Hostname": window.location.hostname,
//       "Google.Page": window.location.pathname,
//       "Google.DocumentReferrer": window.location.href,
//       "Google.Title": document.title,
//     }
//   );
// };

// if (screen.availWidth <= 1050) {
//   const getMobileOperatingSystem = () => {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if (/windows phone/i.test(userAgent)) {
//       let btninnerText = "Get Started";
//       btns.forEach((item) => {
//         if (item.innerText === btninnerText) {
//           item.href =
//             "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
//         }
//       });
//     } else if (/android/i.test(userAgent)) {
//       let btninnerText = "Get Started";
//       btns.forEach((item) => {
//         if (item.innerText === btninnerText) {
//           item.href =
//             "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
//         }
//       });
//     } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//       let btninnerText = "Get Started";
//       btns.forEach((item) => {
//         if (item.innerText === btninnerText) {
//           item.href = "https://apps.apple.com/za/app/ikhokha/id1325073911";
//         }
//       });
//     } else {
//       btns.forEach((item) => {
//         let btninnerText = "Get Started";
//         btns.forEach((item) => {
//           if (item.innerText === btninnerText) {
//             item.href = "https://appgallery.huawei.com/app/C102486477";
//           }
//         });
//       });
//     }
//   };

//   getMobileOperatingSystem();
// }
