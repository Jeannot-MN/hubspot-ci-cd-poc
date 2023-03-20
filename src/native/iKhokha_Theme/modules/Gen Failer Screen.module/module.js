let retrybtn = document.querySelector(".retry_button");
let pl = localStorage.getItem("pl");
retrybtn.href = `https://securepay.ikhokha.com${pl}`;

const sendMparticleButtonClickEvent = (e, moduleTitle, cardTitle) => {
  let customAttributes = {
    page_variant: "",
    button_url: e.target.href,
    button_text: e.target.innerText,
    card_title: cardTitle,
    module_title: moduleTitle,
    page_title: document.title,
    page_url: document.baseURI,
  };

  let flags = {
    "Facebook.EventSourceUrl": window.location.href,
    "Google.Title": document.title,
    "Google.Location": window.location.href,
    "Google.Hostname": window.location.hostname,
    "Google.Page": window.location.pathname,
    "Google.DocumentReferrer": document.referrer,
    "Google.Category": document.title,
    "Google.Label": btn.innerText,
    "Facebook.BrowserId": getCookie("_fbp"),
    "Facebook.ClickId": getCookie("_fbc"),
  };

  mParticle.logEvent(
    "Button Click",
    mParticle.EventType.Other,
    customAttributes,
    flags
  );
};

retrybtn.addEventListener("click", (e) =>
  sendMparticleButtonClickEvent(
    e,
    "Retry payment Page",
    "Oops!! Something went wrong."
  )
);
