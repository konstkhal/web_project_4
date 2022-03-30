/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Card } from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openPopup, closePopup } from "../utils/utils.js";

//validation activation

const defaultFormConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
};

export const previewPopup = document.querySelector(".popup_type_preview");
export const previewPopupImage = document.querySelector(
  ".popup__preview-image"
);
export const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
);
export const previewPopupDescription = document.querySelector(
  ".popup__description"
);

previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
});

// selecting the Popup element with Profile

const profilePopupElement = document.querySelector(".popup_type_edit-profile");
const newCardPopup = document.querySelector(".popup_type_new-card");

const addCardForm = new FormValidator(defaultFormConfig, newCardPopup);

const editForm = new FormValidator(defaultFormConfig, profilePopupElement);

addCardForm.enableValidation();
editForm.enableValidation();

/* -------------------------------------------------------------------------- */
/*                     INITIAL variables for profile edit                     */
/* -------------------------------------------------------------------------- */
const nameElement = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_type_name"); //popup form
const roleElement = document.querySelector(".profile__role");
const roleInput = document.querySelector(".form__input_type_role");

/* -------------------------------------------------------------------------- */
/*                       Closing popup on outside click                       */
/* -------------------------------------------------------------------------- */
const overlays = document.querySelectorAll(".popup");

/* ------- Function to edit popup ------ */
function openEditProfile() {
  editForm.resetValidation();
  openPopup(profilePopupElement);
  nameInput.value = nameElement.textContent;
  roleInput.value = roleElement.textContent;
}

function fillProfileForm() {
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
}

/* ------- Function to save popup ------ */
function handleEditProfile(event) {
  // This line stops the browser from submitting the form in the default way.
  event.preventDefault();
  closePopup(profilePopupElement);
  fillProfileForm();
}

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
/*                      Function to render card.                              */
/* -------------------------------------------------------------------------- */

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

previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
});

/* -------------------------------------------------------------------------- */
/*                        Popup ADD card functionality                        */
/* -------------------------------------------------------------------------- */
const newCardForm = document.querySelector(".popup__container_place-card");

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
  addCardForm.resetValidation();
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

newCardButtonElement.addEventListener("mousedown", handleNewCardButtonClick);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);

/**
 * Implementation of classes based validation
 *
 */
//addCardForm.reset();
addCardForm.resetValidation();

editForm.resetValidation();

renderInitialCards();