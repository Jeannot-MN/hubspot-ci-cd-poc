let firstTap;
let secondTap;
let Hidebtn;
let activeRadioBtnStepOne;
let activeRadioBtnStepTwo;
let radioButton;
let ProductsServices;

function ready() {
  const isElementLoaded = async (selector) => {
    while (document.querySelector(selector) === null) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector)?.childNodes;
  };

  isElementLoaded("#genContactForm form").then((selector) => {
    if (!selector) return null;
    let firstElement = selector[7]?.childNodes[0]?.childNodes[2];
    let RadioArry = [...firstElement?.childNodes[0]?.childNodes];

    RadioArry.map((i) => {
      i.addEventListener("click", () => getParentElement(i));
    });
  });
}
const getParentElement = (clickedElement) => {
  firstTap?.classList?.remove("d-grid");
  secondTap?.classList?.remove("d-grid");
  if (activeRadioBtnStepOne?.checked) {
    activeRadioBtnStepOne?.classList?.add("afterKiller");
    radioButton?.classList?.add("afterKiller");
    activeRadioBtnStepOne.checked = false;

    console.log("radioButton: ", radioButton);

    if (radioButton) {
      radioButton.checked = false;
    }
    removeBackground(firstTap?.childNodes[2]?.childNodes[0]);
  }
  if (activeRadioBtnStepTwo?.checked) {
    activeRadioBtnStepTwo.classList?.add("afterKiller");
    radioButton?.classList?.add("afterKiller");
    activeRadioBtnStepTwo.checked = false;
    if (radioButton) {
      radioButton.checked = false;
    }
    removeBackground(firstTap?.childNodes[2]?.childNodes[0]);
  }

  getLastChild(clickedElement?.parentNode?.parentNode?.parentNode?.parentNode);
  getLastChildOnNO(
    clickedElement?.parentNode?.parentNode?.parentNode?.parentNode
  );
};

const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector)?.childNodes;
};

const getLastChildOnNO = () => {
  isElementLoaded(
    ".hs_are_you_interested_in_selling_products_or_services_online_.hs-are_you_interested_in_selling_products_or_services_online_.hs-fieldtype-radio.field.hs-form-field"
  ).then((selector) => {
    let HideArry = [...selector[2]?.childNodes[0].childNodes];
    HideArry.map((i) => {
      if (i?.childNodes[0]?.childNodes[0]?.checked) {
        unCheckAllItem(i?.childNodes[0]?.childNodes[0]);
      }
      i.addEventListener("click", () => {
        removeAfterKiller(i?.childNodes[0]?.childNodes[0]);
      });
    });
  });
};

const getLastChild = () => {
  isElementLoaded(
    ".hs_do_you_sell_your_products_or_services_online_radio"
  ).then((selector) => {
    let HideArry = [...selector[2]?.childNodes[0].childNodes];

    HideArry.map((i) => {
      if (i?.childNodes[0]?.childNodes[0]?.checked) {
        unCheckAllItem(i?.childNodes[0]?.childNodes[0]);
      }
      i.addEventListener("click", () => {
        displayHideElement(i);
        removeAfterKiller(i?.childNodes[0]?.childNodes[0]);
      });
    });
  });
};

// Do you sell your products or services online*

const displayHideElement = (item) => {
  activeRadioBtnStepOne = item?.childNodes[0]?.childNodes[0];
  activeRadioBtnStepOne.classList?.remove("afterKiller");

  console.log("displayHideElement:", item);

  if (item?.innerText === "Yes") {
    firstTap = document.querySelector(
      ".hs_does_your_website_for_under_the_following_options.hs-does_your_website_for_under_the_following_options.hs-fieldtype-radio.field.hs-form-field"
    );
    secondTap = document.querySelector(
      ".hs_are_you_interested_in_selling_products_or_services_online_on_no.hs-are_you_interested_in_selling_products_or_services_online_on_no.hs-fieldtype-radio.field.hs-form-field"
    );

    let items = firstTap.childNodes[2].childNodes[0].childNodes;

    if (!items) return null;

    removeBackground(firstTap.childNodes[2].childNodes[0]);

    [...items]?.map((i) => {
      i.addEventListener("click", () => addBackground(i, i.parentNode));
    });

    firstTap?.classList.add("d-grid");
    secondTap?.classList.remove("d-grid");
  } else {
    firstTap = document.querySelector(
      ".hs_does_your_website_for_under_the_following_options.hs-does_your_website_for_under_the_following_options.hs-fieldtype-radio.field.hs-form-field"
    );
    secondTap = document.querySelector(
      ".hs_are_you_interested_in_selling_products_or_services_online_on_no.hs-are_you_interested_in_selling_products_or_services_online_on_no.hs-fieldtype-radio.field.hs-form-field"
    );
    secondTap?.classList.add("d-grid");
    firstTap?.classList.remove("d-grid");

    let HideButtons = document.querySelector(
      ".hs_are_you_interested_in_selling_products_or_services_online_on_no.hs-are_you_interested_in_selling_products_or_services_online_on_no.hs-fieldtype-radio.field.hs-form-field"
    ).childNodes[2].childNodes[0].childNodes;

    Hidebtn = [...HideButtons];

    Hidebtn.map((i) => {
      if (i?.childNodes[0]?.childNodes[0]?.checked) {
        unCheckAllItem(i?.childNodes[0]?.childNodes[0]);
      }
      i.addEventListener("click", () => {
        displayMoreHideElement(i);
        checkSelectedItem(i);
      });
    });
  }
};

const addBackground = (item, parenItem) => {
  console.log("addBackground item:", item);
  console.log("addBackground parenItem:", parenItem);

  removeBackground(parenItem);
  item?.classList?.add("theme-bg-iK-Yellow");
  checkSelectedItem(item);
};

// Does your website for under the following options

const checkSelectedItem = (item) => {
  console.log("check Selected Item:", item?.childNodes[0]?.childNodes[0]);

  radioButton = item?.childNodes[0]?.childNodes[0];
  removeAfterKiller(radioButton);
  radioButton.checked = true;
};

const removeAfterKiller = (item) => {
  item?.classList?.remove("afterKiller");
};

//Are you interested in selling products or services online? on NO..

const displayMoreHideElement = (item) => {
  activeRadioBtnStepTwo = item?.childNodes[0]?.childNodes[0];
  // activeRadioBtnStepOne.classList?.remove("afterKiller");

  console.log("displayMoreHideElement:", item);

  if (item?.innerText === "Yes") {
    firstTap?.classList.add("d-grid");
    firstTap?.childNodes[2]?.childNodes[0] &&
      removeBackground(firstTap?.childNodes[2]?.childNodes[0]);
  } else {
    firstTap?.classList.remove("d-grid");
    firstTap?.childNodes[2]?.childNodes[0] &&
      removeBackground(firstTap?.childNodes[2]?.childNodes[0]);
  }
};

const removeBackground = (item) => {
  [...item?.childNodes].map((i) => {
    unCheckAllItem(i?.childNodes[0]?.childNodes[0]);
    i.classList?.remove("theme-bg-iK-Yellow");
  });
};

const unCheckAllItem = (i) => {
  i.classList?.add("afterKiller");
  i.checked = false;
};

document.addEventListener("DOMContentLoaded", ready);
