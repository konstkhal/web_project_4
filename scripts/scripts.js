/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */
/* ------------------------ Popup close functionality ----------------------- */
/* ---------------------------- Selecting closing button element --------------------------- */

let closeButton = document.querySelector(".popup__close-button");

/* ------- Function to toggle appropriate class of element (popup_opened) ------ */
function togglePopup() {
  // selecting the element with the class name "popup"
  let element = document.querySelector(".popup");
  element.classList.toggle("popup_opened");
}

/* --------------------- Event listener for close button -------------------- */
closeButton.addEventListener("click", togglePopup);

/* ------------------------ Popup open functionality ------------------------ */
/* ---------------------------- Selecting opening button element --------------------------- */

let openButton = document.querySelector(".profile__link-change");
/* --------------------- Event listener for open button -------------------- */
openButton.addEventListener("click", togglePopup);
