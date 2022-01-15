/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */

let nameElement = document.querySelector(".profile__name");
let nameInput = document.querySelector(".form__input_type_name");
let roleElement = document.querySelector(".profile__role");
let roleInput = document.querySelector(".form__input_type_role");

/* ------- Function to toggle appropriate class of element (popup_opened) ------ */
function togglePopup() {
  let element = document.querySelector(".popup"); // selecting the element with the class name "popup"
  element.classList.toggle("popup_opened"); // toggling popup_opened class for selected element
}
/* ------- Function to close popup ------ */
function closePopup() {
  togglePopup();
}
/* ------- Function to open popup ------ */
function openPopup() {
  togglePopup();
  nameInput.value = nameElement.textContent;
  roleInput.value = roleElement.textContent;
}
/* ------- Function to save popup ------ */
function savePopup(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
}

/* -------------------------------------------------------------------------- */
/*                          Popup close functionality                         */
/* -------------------------------------------------------------------------- */
/* ---------------------------- Selecting closing button element --------------------------- */
let closeButton = document.querySelector(".popup__close-button");
/* --------------------- Event listener for close button -------------------- */
closeButton.addEventListener("click", closePopup);

/* -------------------------------------------------------------------------- */
/*                          Popup open functionality                          */
/* -------------------------------------------------------------------------- */
/* ---------------------------- Selecting opening button element --------------------------- */
let openButton = document.querySelector(".profile__link-change");
/* --------------------- Event listener for open button -------------------- */
openButton.addEventListener("click", openPopup);

/* -------------------------------------------------------------------------- */
/*                          Popup save functionality                          */
/* -------------------------------------------------------------------------- */
let saveButton = document.querySelector(".form__submit-button");

saveButton.addEventListener("submit", savePopup);
/* -------------------------------------------------------------------------- */
/*                                 Submitting                                 */
/* -------------------------------------------------------------------------- */
/*
// Let's find the form in the DOM
let formElement = // Use the querySelector() method

// Next is the form submit handler, though
// it won't submit anywhere just yet

// Note that the function name starts with a verb
// and describes exactly what the function does
function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = // Use querySelector()
    let jobInput = // Use querySelector()

    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered

    // Insert new values using the textContent
    // property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleProfileFormSubmit);
 -------------------------------------------------------------------------- */
