!(function () {
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = function (e, a) {
      a = a || window;
      for (var t = 0; t < this.length; t++) e.call(a, this[t], t, this);
    });
  var e,
    a = document.querySelector(".header__navigation"),
    t = document.querySelector(".header__language-switcher"),
    s = document.querySelector(".header__search"),
    c = document.querySelectorAll(".header--toggle"),
    n = document.querySelector(".header__navigation--toggle"),
    i = document.querySelector(".header__language-switcher--toggle"),
    r = document.querySelector(".header__search--toggle"),
    o = document.querySelector(".header__close--toggle"),
    l = document.querySelectorAll(".header--element, .header--toggle"),
    u = document.querySelector('input[name="globalunsub"]');
  function h() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      a.classList.toggle("open"),
      n.classList.toggle("open"),
      o.classList.toggle("show");
  }
  function m() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      t.classList.toggle("open"),
      i.classList.toggle("open"),
      o.classList.toggle("show");
  }
  function p() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      s.classList.toggle("open"),
      r.classList.toggle("open"),
      o.classList.toggle("show");
  }
  function d() {
    l.forEach(function (e) {
      e.classList.remove("hide", "open");
    }),
      o.classList.remove("show");
  }
  function g() {
    var e = document.querySelector(".item"),
      a = e.querySelector("input");
    u.checked
      ? (e.classList.add("disabled"),
        a.setAttribute("disabled", "disabled"),
        (a.checked = !1))
      : (e.classList.remove("disabled"), a.removeAttribute("disabled"));
  }
  (e = function () {
    document.body &&
      (t && i.addEventListener("click", m),
      n && n.addEventListener("click", h),
      r && r.addEventListener("click", p),
      o && o.addEventListener("click", d),
      u && u.addEventListener("change", g));
  }),
    ["interactive", "complete"].indexOf(document.readyState) >= 0
      ? e()
      : document.addEventListener("DOMContentLoaded", e);
  let b = document.body;
  b.addEventListener("click", function e(a) {
    a.target.classList.contains("demo") && b.classList.add("pop-up-show-form");
  }),
    b.addEventListener("click", function e(a) {
      a.target.classList.contains("close") &&
        b.classList.remove("pop-up-show-form");
    });
})(),
  !0 ===
    window.location.href.includes("https://www.ikhokha.com/shopping-cart") &&
    $(".tooltiptext").css("visibility", "hidden");
const cartCountDiv = document.getElementById("cartCount");
if (cartCountDiv) {
  let e = window.localStorage.getItem("cart"),
    a = e ? JSON.parse(e).itemsCount : 0;
  cartCountDiv.setAttribute("data-count", a);
}
function updateQuantity(e) {
  let a = document.getElementById("cartCount");
  if (a) {
    let t = window.localStorage.getItem("cart"),
      s = t ? JSON.parse(t).itemsCount : 0;
    a.setAttribute("data-count", s);
  }
}

function getUserFun() {
  setUtmUserAttribute(mParticle.Identity.getCurrentUser());
}
function setUtmUserAttribute(e) {
  if (
    window.location.href.includes("utm_campaign") ||
    window.location.href.includes("utm_content") ||
    window.location.href.includes("utm_medium") ||
    window.location.href.includes("campaign_id") ||
    window.location.href.includes("utm_source")
  ) {
    let a = window.location.href,
      t = new URL(a),
      s = t.searchParams.get("$utm_content"),
      c = t.searchParams.get("utm_campaign"),
      n = t.searchParams.get("utm_source"),
      i = t.searchParams.get("utm_medium");
    t.searchParams.get("hsa_acc"),
      t.searchParams.get("hsa_cam"),
      t.searchParams.get("hsa_grp");
    let r = t.searchParams.get("hsa_ad");
    t.searchParams.get("hsa_src"),
      t.searchParams.get("hsa_net"),
      t.searchParams.get("hsa_ver"),
      t.searchParams.get("fbclid"),
      e.setUserAttribute("$utm_content", s),
      e.setUserAttribute("$campaign_id", r),
      e.setUserAttribute("$utm_medium", i),
      e.setUserAttribute("$utm_campaign", c),
      e.setUserAttribute("$utm_source", n),
      window.localStorage.setItem(
        "utm_tracking",
        JSON.stringify({
          utm_content: s || "",
          campaign_id: r || "",
          utm_medium: i || "",
          utm_campaign: c || "",
          utm_source: n || "",
        })
      );
  } else if (
    document.referrer.includes("utm_campaign") ||
    document.referrer.includes("utm_content") ||
    document.referrer.includes("utm_medium") ||
    document.referrer.includes("campaign_id") ||
    document.referrer.includes("utm_source")
  ) {
    let o = document.referrer,
      l = new URL(o);
    let u = l.searchParams.get("$utm_content"),
      h = l.searchParams.get("utm_campaign"),
      m = l.searchParams.get("utm_source"),
      p = l.searchParams.get("utm_medium");
    l.searchParams.get("hsa_acc"),
      l.searchParams.get("hsa_cam"),
      l.searchParams.get("hsa_grp");
    let d = l.searchParams.get("hsa_ad");
    l.searchParams.get("hsa_src"),
      l.searchParams.get("hsa_net"),
      l.searchParams.get("hsa_ver"),
      l.searchParams.get("fbclid"),
      e.setUserAttribute("$utm_content", u),
      e.setUserAttribute("$campaign_id", d),
      e.setUserAttribute("$utm_medium", p),
      e.setUserAttribute("$utm_campaign", h),
      e.setUserAttribute("$utm_source", m),
      window.localStorage.setItem(
        "utm_tracking",
        JSON.stringify({
          utm_content: u || "",
          campaign_id: d || "",
          utm_medium: p || "",
          utm_campaign: h || "",
          utm_source: m || "",
        })
      );
  }
}
// function MyAppBoy() {
//   appboy.initialize("a3b0e9d4-0dbe-456e-b2f0-0a4048ab80d8", {
//     baseUrl: "sdk.fra-01.braze.eu",
//   });
// }
window.addEventListener("quantity-updated", updateQuantity),
  $("#cartCount").click(function () {
    window.location.href = "https://www.ikhokha.com/shopping-cart";
  });

window.onload = (e) => {
  window.mParticle.ready(() => {
    getUserFun();
    // MyAppBoy();
  });
};

const getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
};

// Gen Card Blocks.module

let bnt = $(".cardblock-main-section__cardswrapper--card a");

if ($(".genblock-popup-wrapper").length) {
  $("body").on(
    "click",
    ".genblock-popup-wrapper .close-modal-button img",
    function (e) {
      e.preventDefault();
      $(e.currentTarget)
        .closest(".genblock-popup-wrapper")
        .css("display", "none");
    }
  );
  $(bnt[0]).on("click", function (e) {
    e.preventDefault();
    $(".genblock-popup-wrapper").css("display", "flex");
  });
} else {
  $(bnt[0]).click(function () {
    if ($(".footer").siblings(".call-back-wrapper").css("display") == "none") {
      $(".footer").siblings(".call-back-wrapper").css("display", "flex");
    } else {
      $(".footer").siblings(".call-back-wrapper").css("display", "none");
    }
  });
}

$(".call-back-wrapper .close-modal-button").click(function () {
  $(".call-back-wrapper").css("display", "none");
});

// ----------------------------------Events----------------------------------

let PageTitle = document.title;
let PageUrl = window.location.origin + window.location.pathname;
let Buttons = document.querySelectorAll(".cardblock-main-section a");
let TitlesSection = document.querySelectorAll(".cardblock-main-section h4");
let SubTitle = document.querySelectorAll(".cardblock-main-section p span");

let BtnPrimary = [...Buttons];

const BtnClick = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Card Blocks",
      card_title: TitlesSection[index]?.innerText,
      button_text: btn?.innerText,
      button_url: btn.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": window.location.href,
      "Google.Title": document.title,
      "Facebook.ActionSource": "website",
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
      "Google.Category": PageTitle,
      "Google.Label": btn?.innerText,
    }
  );
};

BtnPrimary.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClick(btn, index));
});

// Gen Card Blocks end

// Gen Large Multi Card With Image toggle

let btns = document.querySelectorAll(
  ".lmc-section .content-wrapper .lmc-content-holder .lmc-content.lmc-card .button-area a"
);
let TitlesLmcSection = document.querySelectorAll(
  ".lmc-section .content-wrapper .lmc-content-holder .lmc-content.lmc-card h3"
);

btns.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    BtnClickEvent(item, index);
  });
});

const BtnClickEvent = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Large Multi Card With Image toggle",
      card_title: TitlesLmcSection[index]?.innerText,
      button_text: btn?.innerText,
      button_url: btn.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": window.location.href,
      "Google.Title": document.title,
      "Facebook.ActionSource": "website",
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
      "Google.Category": PageTitle,
      "Google.Label": btn?.innerText,
    }
  );
};

const GetStartedEvent = () => {
  // mParticle.logEvent(
  //   "Get started",
  //   mParticle.EventType.Other,
  //   {
  //     page_url: window.location.href,
  //     source_module: "Gen Large Multi Card With Image toggle",
  //   },
  //   {
  //     "Google.Category": "Online Payment",
  //     "Google.Label":
  //       window.location.pathname === "/tap-on-phone"
  //         ? "Ik Tap on Phone"
  //         : "Ik Pay Link",
  //     "Facebook.EventSourceUrl": window.location.href,
  //     "Google.Location": window.location.href,
  //     "Google.Hostname": window.location.hostname,
  //     "Google.Page": window.location.pathname,
  //     "Google.DocumentReferrer": window.location.href,
  //     "Google.Title": document.title,
  //   }
  // );
};

if (screen.availWidth <= 1050) {
  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      let btninnerText = "Get Started";
      btns.forEach((item) => {
        if (item.innerText === btninnerText) {
          item.href =
            "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
        }
      });
    } else if (/android/i.test(userAgent)) {
      let btninnerText = "Get Started";
      btns.forEach((item) => {
        if (item.innerText === btninnerText) {
          item.href =
            "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
        }
      });
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      let btninnerText = "Get Started";
      btns.forEach((item) => {
        if (item.innerText === btninnerText) {
          item.href = "https://apps.apple.com/za/app/ikhokha/id1325073911";
        }
      });
    } else {
      btns.forEach((item) => {
        let btninnerText = "Get Started";
        btns.forEach((item) => {
          if (item.innerText === btninnerText) {
            item.href = "https://appgallery.huawei.com/app/C102486477";
          }
        });
      });
    }
  };

  getMobileOperatingSystem();
}

// Gen Large Multi Card With Image toggle end

// Gen Header Section

// ----------------------------------Events----------------------------------
//

let GHSPageTitle = document.title;
let GHSPageUrl = window.location.origin + window.location.pathname;

let btn = document?.querySelectorAll(".Gen-Header-Section a");

let HomePageHeading = document?.querySelector(
  ".Gen-Header-Section h2"
)?.innerText;
let OtherPageHeading = document?.querySelector(
  ".Gen-Header-Section h2"
)?.innerText;

const fireGetStartedEvent = () => {
  if (window.location.pathname != "/") {
    mParticle.logEvent(
      "Button Click",
      mParticle.EventType.Other,
      {
        page_url: GHSPageUrl,
        page_title: GHSPageTitle,
        module_title: "Gen Header Section",
        card_title: OtherPageHeading,
        button_text: btn[0]?.innerText,
        button_url: btn[0]?.href,
      },
      {
        "Facebook.EventSourceUrl": window.location.href,
        "Google.Location": window.location.href,
        "Google.Hostname": window.location.hostname,
        "Google.Page": window.location.pathname,
        "Google.DocumentReferrer": window.location.href,
        "Google.Title": document.title,
        "Facebook.ActionSource": "website",
        "Facebook.BrowserId": getCookie("_fbp"),
        "Facebook.ClickId": getCookie("_fbc"),
        "Google.Category": GHSPageTitle,
        "Google.Label": btn[0]?.innerText,
      }
    );
  }

  if (window.location.pathname == "/") {
    mParticle.logEvent(
      "Button Click",
      mParticle.EventType.Other,
      {
        page_url: GHSPageUrl,
        page_title: GHSPageTitle,
        module_title: "Gen Header Section",
        card_title: HomePageHeading,
        button_text: btn[0]?.innerText,
        button_url: btn[0]?.href,
      },
      {
        "Google.Category": GHSPageTitle,
        "Google.Label": btn[0]?.innerText,
        "Facebook.EventSourceUrl": window.location.href,
        "Google.Location": window.location.href,
        "Google.Hostname": window.location.hostname,
        "Google.Page": window.location.pathname,
        "Google.DocumentReferrer": window.location.href,
        "Google.Title": document.title,
        "Facebook.ActionSource": "website",
        "Facebook.BrowserId": getCookie("_fbp"),
        "Facebook.ClickId": getCookie("_fbc"),
      }
    );
  }
};

if (btn.length > 0) {
  btn[0]?.addEventListener("click", fireGetStartedEvent);
}
if (screen.availWidth <= 1050) {
  function getMobileOperatingSystem() {
    if (
      window.location.pathname == "/pay-link" ||
      window.location.pathname == "/tap-on-phone"
    ) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/windows phone/i.test(userAgent)) {
        btn[0].href =
          "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
      } else if (/android/i.test(userAgent)) {
        btn[0].href =
          "https://play.google.com/store/apps/details?id=ik.emerge.ikhokha&hl=en_ZA&gl=US";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        if (window.location.pathname == "/tap-on-phone") {
          btn[0].innerText = "Learn More";
          btn[0].href = "https://ikhokha.onelink.me/Os1X/ToP";
        } else {
          btn[0].href = "https://apps.apple.com/za/app/ikhokha/id1325073911";
        }
      } else {
        btn[0].href = "https://appgallery.huawei.com/app/C102486477";
      }
    }
  }

  getMobileOperatingSystem();
}

// Gen Header Section end

// Gen Header W Popup

let GenHeaderWPopupHeading = document?.querySelector(".gen-header-w-popup");
let GenHeaderWPopupBTN = document?.querySelectorAll(".gen-header-w-popup a");

const GenHeaderWPopupButtoClick = (btn) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Header W Popup",
      card_title: GenHeaderWPopupHeading?.innerText?.split("\n")[0],
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
GenHeaderWPopupBTN.forEach((btn) => {
  btn.addEventListener("click", () => GenHeaderWPopupButtoClick(btn));
});

// Gen Header W Popup End

// Gen Large Card with Image

let lcwiSection = document?.querySelector(".lcwi-section");
let lcwiSectionbtn = document?.querySelectorAll(".lcwi-section a");

const lcwiSectionButtoClick = (btn) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Large Card with Image",
      card_title: lcwiSection.innerText.split("\n\n")[0],
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
lcwiSectionbtn.forEach((btn) => {
  btn.addEventListener("click", () => lcwiSectionButtoClick(btn));
});

// Gen Large Multi Card

let lmcSectionCard = document?.querySelectorAll(".lmc-section-cards .lmc-card");
let lmcSectionBtn = document?.querySelectorAll(".lmc-section-cards a");

const lmcSectionButtoClick = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Large Card with Image",
      card_title: lmcSectionCard[index].innerText.split("\n\n")[0],
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
lmcSectionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => lmcSectionButtoClick(btn, index));
});

// Gen Large Multi Card end

// Gen Complex Product Card

let ComplexProductCardWrapper = document.querySelector(
  ".complex-product-card-wrapper"
);
ComplexProductCardWrapper?.innerText.split("\n")[1];
let ComplexProductCardBtn = document.querySelectorAll(
  ".complex-product-card-wrapper a"
);

const ComplexProductCardWrapperButtoClick = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Complex Product Card",
      card_title: ComplexProductCardWrapper.innerText.split("\n")[1],
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
ComplexProductCardBtn.forEach((btn) => {
  btn.addEventListener("click", () => ComplexProductCardWrapperButtoClick(btn));
});

// Gen Complex Product Card end

// Gen Complex Group Media Carousel

let btnsMir = document.querySelectorAll(".milr-content a");
let Copy = document.querySelector(".milr-content");
let HeadingMir = Copy?.innerText.split("\n\n")[0];
let imageLink = document?.querySelectorAll(".complex-slider .card-slider a");

const getDomainName = (url) => {
  let domain = new URL(url);
  domain = domain.hostname;
  let domainName = domain;
  return domainName;
};

const fireButtoClick = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Complex Group Media Carousel",
      card_title: HeadingMir,
      button_text: btn?.innerText ? btn?.innerText : getDomainName(btn?.href),
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window?.location?.href,
      "Google.Title": document?.title,
      "Google.Location": window?.location?.href,
      "Google.Hostname": window?.location?.hostname,
      "Google.Page": window?.location?.pathname,
      "Google.DocumentReferrer": document?.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn?.innerText
        ? btn?.innerText
        : getDomainName(btn?.href),
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

btnsMir?.forEach((btn) => {
  btn?.addEventListener("click", () => fireButtoClick(btn));
});
[...imageLink]?.forEach((image) => {
  image?.addEventListener("click", () => fireButtoClick(image));
});

// Gen Complex Group Media Carousel end

// Gen Large Card with Image

// Gen Card Blocks

// Gen Card Blocks end

// Gen One Media With Copy

// if (screen.availWidth <= 1050) {
//   if (window.location.pathname == "/tap-on-phone") {
//     function getMobileOperatingSystem() {
//       var userAgent = navigator.userAgent || navigator.vendor || window.opera;
//       let GOMButtons = document?.querySelector(".mclr-section .button-area a");

//       console.log("GOMButtons:", GOMButtons);
//       if (/windows phone/i.test(userAgent)) {
//         buttons[0].href = "https://ikhokha.onelink.me/Os1X/ToP";
//       } else if (/android/i.test(userAgent)) {
//         buttons[0].href = "https://ikhokha.onelink.me/Os1X/ToP";
//       } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         buttons[0].innerText = "Learn More";

//         buttons[0].href = "https://ikhokha.onelink.me/Os1X/ToP";
//       } else {
//         buttons[0].href = "https://ikhokha.onelink.me/Os1X/ToP";
//       }
//     }

//     getMobileOperatingSystem();
//   }
// }

const GenOneMediaWithCopyBtnClick = (btn) => {
  let PageTitle = document.title;
  let PageUrl = window.location.origin + window.location.pathname;
  let Title = btn?.parentElement?.parentElement?.firstElementChild.innerText;

  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen One Media With Copy",
      card_title: Title,
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Google.Category": PageTitle,
      "Google.Label": btn?.innerText,
      "Facebook.EventSourceUrl": window?.location?.href,
      "Google.Location": window?.location?.href,
      "Google.Hostname": window?.location?.hostname,
      "Google.Page": window?.location?.pathname,
      "Google.DocumentReferrer": window?.location?.href,
      "Google.Title": document?.title,
      "Facebook.ActionSource": "website",
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

let Mclrbtns = document?.querySelectorAll(".mclr-section .button-area a");
Mclrbtns?.forEach((item) => {
  item.addEventListener("click", (event) => {
    GenOneMediaWithCopyBtnClick(item);
  });
});

// Gen One Media With Copy

// Gen Media Blocks With Copy;

let GenMediaBlocksWithCopyTitle = document.querySelectorAll(
  ".mediablock-main-section .mediablock-main-section__content__blocks-container--block"
);
let GenMediaBlocksWithCopyTitleMobile = document.querySelectorAll(
  ".swiper.boxSwiper .swiper-wrapper .swiper-slide"
);
let GenMediaBlocksWithCopyBtn = document.querySelectorAll(
  ".mediablock-main-section .mediablock-main-section__content__blocks-container--block a"
);
let GenMediaBlocksWithCopyBtnMobile = document.querySelectorAll(
  ".mediablock-main-section-swiper__content a"
);

const BtnTabs = (btn, index, title) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Media Blocks With Copy",
      card_title: title,
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
GenMediaBlocksWithCopyBtn.forEach((btn, index) => {
  btn.addEventListener("click", () =>
    BtnTabs(
      btn,
      index,
      GenMediaBlocksWithCopyTitle[index]?.innerText?.split("\n")[0]
    )
  );
});
GenMediaBlocksWithCopyBtnMobile.forEach((btn, index) => {
  btn.addEventListener("click", () =>
    BtnTabs(
      btn,
      index,
      GenMediaBlocksWithCopyTitleMobile[index]?.innerText?.split("\n")[0]
    )
  );
});

// Gen Media Blocks With Copy end;

// Gen Product Feature Card

// ----------------------------------Events----------------------------------
//

let ButtonsGen = document.querySelectorAll(
  ".product-feature-card-carousel-swiper-item-content a"
);
let TitlesGen = document.querySelectorAll(
  ".product-feature-card-carousel-swiper-item-content-title"
);
let SubTitleGen = document.querySelectorAll(
  ".product-feature-card-carousel-swiper-item-content h3"
);

let BtnPrimaryGen = [...ButtonsGen].filter((e) => {
  return e.className.includes("theme-btn-iK");
});

let PrimaryLinksGen = [...ButtonsGen].filter((e) => {
  return e.className.includes("theme-link");
});

let AltLinksGen = [...ButtonsGen].filter((e) => {
  return (
    e.className ==
    "theme-btn theme-link link-text theme-arrow-right  link-text theme-btn-primary"
  );
});
// const productPageVariant = (id) => {
//   if (id === "hs-content-id-94598065823") {
//     return "Card Machines A";
//   } else if (id === "hs-content-id-102553040413") {
//     return "Card Machines B";
//   } else {
//     return "";
//   }
// };
const BtnClickGen = (btn, index) => {
  // const productPageVariant = (id) => {
  //   if (id === "hs-content-id-94598065823") {
  //     return "Card Machines A";
  //   } else if (id === "hs-content-id-102553040413") {
  //     return "Card Machines B";
  //   } else {
  //     return "";
  //   }
  // };

  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Product Feature Card",
      card_title: TitlesGen[index].innerText,
      button_text: btn.innerText,
      button_url: btn.href,
      page_variant: productPageVariant(
        document.querySelector("body > div ").classList[1]
      ),
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Facebook.ActionSource": "website",
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
    }
  );
};
const BtnClickEventGen = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Product Feature Card",
      card_title: SubTitleGen[index].innerText,
      button_text: btn.innerText,
      button_url: btn.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Facebook.ActionSource": "website",
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

BtnPrimaryGen.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClickGen(btn, index));
});
PrimaryLinksGen.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClickGen(btn, index));
});
AltLinksGen.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClickEventGen(btn, index));
});

// Gen Product Feature Card end

// Gen Full Width Image Carousel

let PageTitle2 = document.title;
let PageUrl2 = window.location.origin + window.location.pathname;
let Buttons2 = document.querySelectorAll(
  ".fwic-section .swiper.fwic-swiper .swiper-slide .fwic-slide-content a"
);
let Titles2 = document.querySelectorAll(
  ".fwic-section .swiper.fwic-swiper .swiper-slide .fwic-slide-content h3"
);

let Titles3 = document.querySelectorAll(
  ".fwic-section .swiper.fwic-swiper .swiper-slide .fwic-slide-content h2"
);

let PrimaryLinks = [...Buttons2].filter((e) => {
  return e.innerText != "";
});

let CleanTitles = [...Titles2].filter((e) => {
  return e.innerText != "";
});

const BtnClick_1 = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl2,
      page_title: PageTitle2,
      module_title: "Gen Full Width Image Carousel",
      card_title: Titles2[index]?.innerText
        ? Titles2[index]?.innerText
        : Titles3[index + Titles2.length]?.innerText,
      button_text: btn.innerText,
      button_url: btn.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

PrimaryLinks.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClick_1(btn, index));
});

// Gen Full Width Image Carousel end

// Gen Full Width Card Carousel

let ButtonsGFWCC = document.querySelectorAll(".fwcc-section a");
let TitlesGFWCC = document.querySelectorAll(
  ".fwcc-section .content-wrapper .fwcc-content-holder h3"
);

let PrimaryLinksGFWCC = [...ButtonsGFWCC];

const BtnClickGFWCC = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Full Width Card Carousel",
      card_title: TitlesGFWCC[index]?.innerText,
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window?.location?.href,
      "Google.Title": document?.title,
      "Google.Location": window?.location?.href,
      "Google.Hostname": window?.location?.hostname,
      "Google.Page": window?.location?.pathname,
      "Google.DocumentReferrer": document?.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn?.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

PrimaryLinksGFWCC.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClickGFWCC(btn, index));
});

// Gen Full Width Card Carousel end

// Gen Accordion Content

let Tab = document.querySelectorAll(".accordion-content-item-title");

let TabLinks = [...Tab];

const BtnClickTabs = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Accordion Content",
      card_title: btn.innerText,
      button_text: btn.innerText,
      button_url: btn.innerText,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};

TabLinks.forEach(function (btn, index) {
  btn.addEventListener("click", () => BtnClickTabs(btn, index));
});

// Gen Accordion Content end

// Gen Simple Product Card

let GenSimpleProductCardTitle = document.querySelectorAll(
  ".simple-product-card-item-content"
);
let GenSimpleProductCardBtn = document.querySelectorAll(
  ".simple-product-card-item-content-buttons-button a"
);

let GSPCTitle = [...GenSimpleProductCardTitle];
let GSPCBtns = [...GenSimpleProductCardBtn];

const GSPCBtn = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Simple Product Card",
      card_title: GSPCTitle[index]?.innerText?.split("\n")[0],
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
GSPCBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => GSPCBtn(btn, index));
});

// Gen Simple Product Card End

// Gen Image W Copy Tab
// AOS?.init({
//   duration: 500,
//   easing: "ease",
//   once: true,
//   anchorPlacement: "center-bottom",
// });

// setTimeout(function () {
//   AOS?.refresh();
// }, 1000);

$(".image-copy-tab-activate").hover(
  function () {
    var tab = $(this);
    var classHover = tab.data("hover-class");

    if (!tab.hasClass("active")) {
      tab
        .find("span")
        .removeClass("theme-bg-iK-Charcoal")
        .addClass("theme-bg-iK-ec-Primary-Color");
    }
  },
  function () {
    var tab = $(this);
    var classHover = tab.data("hover-class");
    tab
      .find("span")
      .removeClass("theme-bg-iK-ec-Primary-Color")
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

let GenImageWCopyTabTitle = document.querySelectorAll(
  ".image-copy-tab-titles-title"
);
let GenImageWCopyTabBtn = document.querySelectorAll(
  ".simple-product-card-item-content-buttons-button a"
);

let GIWCTTitle = [...GenImageWCopyTabTitle];

const GIWCTBtn = (btn, index) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen Image W Copy Tab",
      card_title: GIWCTTitle[index]?.innerText?.split("\n")[0],
      button_text: btn?.innerText,
      button_url: btn?.innerText,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
GIWCTTitle.forEach((btn, index) => {
  btn.addEventListener("click", () => GIWCTBtn(btn, index));
});

// Gen Image W Copy Tab end

// Gen One Media With Icons
let GenOneMediaIcon = document.querySelector(".milr-section");
let Title = GenOneMediaIcon?.innerText.split("\n")[0];
let GenOneMediaIconBtns = document.querySelectorAll(".milr-section a");

const GenOneMediaIconBtn = (btn) => {
  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    {
      page_url: PageUrl,
      page_title: PageTitle,
      module_title: "Gen One Media With Icons",
      card_title: Title,
      button_text: btn?.innerText,
      button_url: btn?.href,
    },
    {
      "Facebook.EventSourceUrl": window.location.href,
      "Google.Title": document.title,
      "Google.Location": window.location.href,
      "Google.Hostname": window.location.hostname,
      "Google.Page": window.location.pathname,
      "Google.DocumentReferrer": document.referrer,
      "Google.Category": PageTitle,
      "Google.Label": btn.innerText,
      "Facebook.BrowserId": getCookie("_fbp"),
      "Facebook.ClickId": getCookie("_fbc"),
    }
  );
};
GenOneMediaIconBtns.forEach((btn) => {
  btn.addEventListener("click", () => GenOneMediaIconBtn(btn));
});

// Gen One Media With Icons end

window.addEventListener("load", (event) => {
  let NavLinks = document.querySelectorAll(".ikhokha_mega_menu_v2_container a");

  let Links = [...NavLinks];

  let link = Links?.find(
    (p) => p?.innerText.trim().split("\n")[0] === "Get a Call Back"
  );

  let closebtn = document.querySelector(
    ".genblock-popup-wrapper .genblock-popup-modal .close-modal-button"
  );

  link?.addEventListener("click", (e) => {
    document.querySelector(".call-back-wrapper").style.display = "flex";
  });
  closebtn?.addEventListener("click", (e) => {
    document.querySelector(".call-back-wrapper").style.display = "none";
  });
});
