/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */

/* ------------------------ Popup close functionality ----------------------- */
/* ---------------------------- Selecting element --------------------------- */
let element = document.querySelector(".popup__close-button");

/* ------- Function to add appropriate class to element (popup_opened) ------ */
function hidePopup() {
  // selecting the element with the class name "popup"
  let element = document.querySelector(".popup");
  element.classList.toggle("popup_opened");

  console.log(element.classList); // her majesty the queen ))))

  element.log(`Her Majesty's Garage: ${garage.classList}`); // bentley rolls-royce
}

/* --------------------- Event listener for close button -------------------- */
element.addEventListener("click", hidePopup);
