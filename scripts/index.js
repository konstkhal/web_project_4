/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
//import * as evaModule from "./validate.js";
import { Card } from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  previewPopup,
  previewPopupImage,
  previewPopupCloseButton,
  previewPopupDescription,
} from "./utils.js"; //need to export all the least entities

//validation activation

const defaultFormConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
};

// selecting the Popup element with Profile

const profilePopupElement = document.querySelector(".popup_type_edit-profile");
//not sure
const newCardPopup = document.querySelector(".popup_type_new-card"); //not sure

//const profilePopupElement = document.querySelector(  ".popup__container_place-profile");
//not sure
//const newCardPopup = document.querySelector(".popup__container_place-card"); //not sure

const addCardForm = new FormValidator(defaultFormConfig, newCardPopup);
/*
console.log(
  addCardForm._element.querySelectorAll(addCardForm._config.inputSelector)
);
*/
/*
console.log("Индекс 1 Создали только эдд");
*/
const editForm = new FormValidator(defaultFormConfig, profilePopupElement);
/*

*/

addCardForm.enableValidation();
editForm.enableValidation();

/* console.log(
  addCardForm._element.querySelectorAll(addCardForm._config.inputSelector)
); */
//console.log(editForm._element.querySelectorAll(editForm._config.inputSelector));
//console.log("Индекс 2");

addCardForm.resetValidation();
/* console.log(
  addCardForm._element.querySelectorAll(addCardForm._config.inputSelector)
);
console.log(editForm._element.querySelectorAll(editForm._config.inputSelector));
console.log("Индекс 2"); */
editForm.resetValidation();

//import cards from "./cards";
/* -------------------------------------------------------------------------- */
/*                              Importing scripts                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     Cards initialization functionality                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                         Edit profile Functionality                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     INITIAL variables for profile edit                     */
/* -------------------------------------------------------------------------- */
const nameElement = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_type_name"); //popup form
const roleElement = document.querySelector(".profile__role");
const roleInput = document.querySelector(".form__input_type_role");
// const profilePopupElement = document.querySelector(".popup_type_edit-profile");
// selecting the element with the class name "popup_type_edit-profile"

/* -------------------------------------------------------------------------- */
/*                       Closing popup on outside click                       */
/* -------------------------------------------------------------------------- */
const overlays = document.querySelectorAll(".popup");

/* -------------------------- Universal popup open -------------------------- */

/* function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeUp);
  popup.addEventListener("mousedown", handlePopupMouseDown);

} */
/* -------------------------- Universal popup close ------------------------- */
/* function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeUp);
  popup.removeEventListener("mousedown", handlePopupMouseDown);
}
 */
/* ------- Function to edit popup ------ */
function openEditProfile() {
  editForm.resetValidation();
  openPopup(profilePopupElement);
  nameInput.value = nameElement.textContent;
  roleInput.value = roleElement.textContent;
}
/* ------- Function to save popup ------ */
function handleEditProfile(event) {
  // This line stops the browser from
  // submitting the form in the default way.
  event.preventDefault();
  closePopup(profilePopupElement);
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
}
/* ------------------ Function to close profile popup if opened-----------------
function closePopupEditProfile() {
  if (popup.classList.contains(popup_opened)) {
    closePopup(profilePopupElement);
  }
}*/

/* -------------------------------------------------------------------------- */
/*             Edit profile Popup close functionality                         */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting closing button element --------------------------- */
const popupCloseEditProfileButton = document.querySelector(
  ".popup__close-button_place-profile"
);
/* --------------------- Event listener for close button -------------------- */

popupCloseEditProfileButton.addEventListener("mousedown", () =>
  closePopup(profilePopupElement)
);
/* -------------------------------------------------------------------------- */
/*             Edit profile Popup open functionality                          */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting opening button element --------------------------- */
const popupOpenEditProfileButton = document.querySelector(
  ".profile__link-change"
);
/* --------------------- Event listener for open button -------------------- */
popupOpenEditProfileButton.addEventListener("mousedown", openEditProfile);

/* -------------------------------------------------------------------------- */
/*            Edit profile  Popup save functionality                          */
/* -------------------------------------------------------------------------- */
const editProfileformSubmitter = document.querySelector(
  ".popup__container_place-profile"
);

editProfileformSubmitter.addEventListener("submit", handleEditProfile);

/* -------------------------------------------------------------------------- */
/*                           Function to make card.                           */
/* -------------------------------------------------------------------------- */

/* function createCard(card) {
  // get card template and make a copy
  const cardElement = cardTemplateElement.content
    .querySelector(".photo-grid__item")
    .cloneNode(true);
  // select card element parts
  const cardTitleElement = cardElement.querySelector(".photo-grid__title");
  const cardImageElement = cardElement.querySelector(".photo-grid__image");
  const cardLikeButtonElement = cardElement.querySelector(
    ".photo-grid__like-button"
  );
  const cardTrashButtonElement = cardElement.querySelector(
    ".photo-grid__delete-button"
  );
  // add card information
  cardTitleElement.textContent = card.name;
  cardImageElement.src = card.link;
  cardImageElement.alt = card.name;
  // add event listeners

  // return card
  return cardElement;
} */

/* -------------------------------------------------------------------------- */
/*                      Function to render card.                              */
/* -------------------------------------------------------------------------- */

/*function renderCard(card) {
  cardsListElement.prepend(createCard(card));


}*/
// selecting photo-grid__list to fill with cards
const cardsListElement = document.querySelector(".photo-grid__list");
// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");

/**
 * @function renderCard creates Card object with data param and with template hardcoded
 * @param {array} data contains {name, link}
 * @var {text} cardTemplateElement contains text id of card element to be cloned
 */
function renderCard(data, cardsListElement) {
  const card = new Card(data, cardTemplateElement);
  cardsListElement.prepend(card.generateCard());
}

/* -------------------------------------------------------------------------- */
/*                     Function to render INITIAL cards.                      */
/* -------------------------------------------------------------------------- */

function renderInitialCards() {
  initialCards.forEach((data) => renderCard(data, cardsListElement));
}

/* -------------------------------------------------------------------------- */
/*                          Like button functionality                         */
/*                        Function to handle LIKE button click.               */
/* -------------------------------------------------------------------------- */

function handleLikeButtonClick(event) {
  event.target.classList.toggle("photo-grid__like-button_active");
}

/* -------------------------------------------------------------------------- */
/*               Function to handle DELETE button click.                      */
/* -------------------------------------------------------------------------- */

function handleTrashButtonClick(event) {
  event.target.closest(".photo-grid__item").remove();
}

/* -------------------------------------------------------------------------- */
/*                     Function to handle image click.                        */
/* -------------------------------------------------------------------------- */
/*
const previewPopup = document.querySelector(".popup_type_preview");
const previewPopupImage = document.querySelector(".popup__preview-image");
const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
);
const previewPopupDescription = document.querySelector(".popup__description");
 */
function handleCardImageClick(evt) {
  previewPopupImage.src = evt.target.src;
  previewPopupImage.alt = evt.target.alt;
  previewPopupDescription.textContent = evt.target.alt;
  openPopup(previewPopup);
  // document.addEventListener("keyup", handleEscapeUp);
  // document.addEventListener("mousedown", handlePopupMouseDown);
}

previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
  //  document.removeEventListener("keyup", handleEscapeUp);
  //  document.removeEventListener("mousedown", handlePopupMouseDown);
});

/* -------------------------------------------------------------------------- */
/*                          Escape key press listener                         */
/* -------------------------------------------------------------------------- */

/* const ESC_BUTTON = "Escape";

const handleEscapeUp = (evt) => {
  handleEscapeKeyDown(evt);
};
 */
/* -------------------------------------------------------------------------- */
/*                           Escape action function                           */
/* -------------------------------------------------------------------------- */
/* const handleEscapeKeyDown = (evt) => {
  if (evt.key === ESC_BUTTON) {
    evt.preventDefault();
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}; */

/* -------------------------------------------------------------------------- */
/*                             Mouseclick Handling                            */
/* -------------------------------------------------------------------------- */

/* function handlePopupMouseDown(event) {
  const popup = document.querySelector(".popup_opened");
  //console.log(event.target + " VS " + event.currentTarget);
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
} */
/* -------------------------------------------------------------------------- */
/*                        Popup ADD card functionality                        */
/* -------------------------------------------------------------------------- */
const newCardForm = document.querySelector(".popup__container_place-card");
//const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardButtonElement = document.querySelector(".profile__link-add");
const newCardPopupCloseButtonElement = document.querySelector(
  ".popup__close-button_place_card"
);
const userInputImageTitle = document.querySelector(
  ".form__input_type_image-title"
);
const userInputImageLink = document.querySelector(
  ".form__input_type_image-link"
);
function handleNewCardButtonClick() {
  //new card button
  openPopup(newCardPopup);
  console.log(newCardPopup);
  addCardForm.resetValidation();
  // newCardForm.reset();

  console.log("click");
}

function handleNewCardFormSubmit(event) {
  event.preventDefault();
  const card = {
    name: userInputImageTitle.value,
    link: userInputImageLink.value,
  };
  renderCard(card, cardsListElement);
  closePopup(newCardPopup);
}

newCardPopupCloseButtonElement.addEventListener("mousedown", () =>
  closePopup(newCardPopup)
);

//popupOpenEditProfileButton.addEventListener("mousedown", openEditProfile);
newCardButtonElement.addEventListener("mousedown", handleNewCardButtonClick);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);

/**
 * Implementation of classes based validation
 *
 */

renderInitialCards();
