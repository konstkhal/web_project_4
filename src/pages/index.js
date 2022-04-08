/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
//import { openPopup, closePopup } from "../utils/utils.js";
import { initialCards } from "../utils/cards.js";
import {
  defaultFormConfig,
  popupOpenEditProfileButton,
  newCardButtonElement,
  /*  nameInput,
  roleInput,
  nameElement,
  roleElement, */
  userInputImageTitle,
  userInputImageLink,
  nameElementSelector,
  roleElementSelector,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
// selecting photo-grid__list to fill with cards
const cardsListElement = document.querySelector(".photo-grid__list");
// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");
// Edit form selector
const editFormSelector = document.querySelector(
  ".popup__container_place-profile"
);
// Add form selector
const addCardFormSelector = document.querySelector(
  ".popup__container_place-card"
);

/* function fillProfileForm() {
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
} */

/* -------------------------------------------------------------------------- */
/*                        Objects creation                                    */
/* -------------------------------------------------------------------------- */

/* const userInfo = new UserInfo({name: '.profile__name', about: '.profile__about'}) */

const userInfo = new UserInfo({
  name: nameElementSelector,
  role: roleElementSelector,
});

const editProfilePopup = new PopupWithForm(
  ".popup_type_new-card",
  handleEditFormSubmit
);
const addCardPopup = new PopupWithForm(
  ".popup_type_edit-profile",
  handleNewCardFormSubmit
);

const previewPopup = new PopupWithImage({
  popupSelector: ".popup_type_preview",
  imageSelector: ".popup__preview-image",
  imageTitleSelector: ".popup__description",
});

const addCardForm = new FormValidator(defaultFormConfig, addCardPopup);
const editForm = new FormValidator(defaultFormConfig, editProfilePopup);

addCardForm.enableValidation();
editForm.enableValidation();

/* -------------------------------------------------------------------------- */
/*                    Popup Form Handlers                                     */
/* -------------------------------------------------------------------------- */

const handleEditFormSubmit = (data) => {
  userInfo.setUserInfo(data);
  editProfilePopup.close();
};

const handleNewCardFormSubmit = () => {
  cardsListElement.addItem(
    renderCard({
      name: userInputImageTitle.value,
      link: userInputImageLink.value,
    })
  );
};

/* -------------------------------------------------------------------------- */
/*                         Popup Event Listeners                              */
/* -------------------------------------------------------------------------- */
imagePopup.setEventListeners();

editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();

addCardPopup.addEventListener("submit", () => {
  addCardPopup.close(); //this?
});

editProfilePopup.addEventListener("submit", () => {
  editProfilePopup.close(); //this?
});

/* -------------------------------------------------------------------------- */
/*                   Open Popup Buttons listeners                             */
/* -------------------------------------------------------------------------- */

popupOpenEditProfileButton.addEventListener("mousedown", openEditProfile);
newCardButtonElement.addEventListener("mousedown", handleNewCardButtonClick);

editCloseButton.addEventListener("click", () => {
  editPopup.close();
});

addCloseButton.addEventListener("click", () => {
  addPopup.close();
});

imageCloseButton.addEventListener("click", () => {
  imagePopup.close();
});

/**
 *           Edit profile Popup close functionality
 *
 * Selecting closing button element
 */
const popupCloseEditProfileButton = document.querySelector(
  ".popup__close-button_place-profile"
);
/** Event listener for close button  */

popupCloseEditProfileButton.addEventListener("mousedown", () =>
  closePopup(profilePopupElement)
);

const newCardPopupCloseButtonElement = document.querySelector(
  ".popup__close-button_place_card"
);

newCardPopupCloseButtonElement.addEventListener("mousedown", () =>
  closePopup(newCardPopup)
);

/* export const previewPopup = document.querySelector(".popup_type_preview"); */
//const imagePopupFromVideo = document.querySelector(".popup_type_preview");

/* export const previewPopupImage = document.querySelector(
  ".popup__preview-image"
); */
/* export const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
); */
/* export const previewPopupDescription = document.querySelector(
  ".popup__description"
); */

/* previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
}); */

/* -------------------------------------------------------------------------- */
/*                                DOM selectors                               */
/* -------------------------------------------------------------------------- */

/* const profilePopupElement = document.querySelector(".popup_type_edit-profile");
const newCardPopup = document.querySelector(".popup_type_new-card"); */

const cardsListSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".cards-list"
);

/* const editProfilePopup = new PopupWithForm(".popup_type_new-card",  (data)=>{
  userInfo.setUserInfo(data);
  editProfilePopup.close();
}); */

/**
 * Newly created @constant cardsListElement contains new Section @object
 *
 * Need to complete
 */
/*
const cardsListElement = new Section(
  {
    renderer: (data) => {
      const card = new Card(
        {
          data,
          handleCardClick: () => {
            imagePopup.open(data);
          },
        },
        cardsConfig.CardSelector
      );
      cardsListElement.addItem(card.generateCard());
    },
  },
  cardsConfig.placesWrap
); */

const renderCard = (data, cardsListElement) => {
  const card = new Card(data, cardTemplateElement, () => {
    imagePopup.open(data.link, data.name);
  });

  cardsListElement.prepend(card.generateCard());
};

//validation activation

// selecting the Popup element with Profile

/* -------------------------------------------------------------------------- */
/*                       Closing popup on outside click                       */
/* -------------------------------------------------------------------------- */
//const overlays = document.querySelectorAll(".popup");

/* ------- Function to edit popup ------ */
/* function openEditProfile() {
  editForm.resetValidation();
  openPopup(profilePopupElement);
  nameInput.value = nameElement.textContent;
  roleInput.value = roleElement.textContent;
} */

/* ------- Function to save popup ------ */
/* function handleEditProfile(event) {
  // This line stops the browser from submitting the form in the default way.
  event.preventDefault();
  closePopup(profilePopupElement);
  fillProfileForm();
} */

/* -------------------------------------------------------------------------- */
/*            Edit profile  Popup save functionality                          */
/* -------------------------------------------------------------------------- */
/* const editProfileformSubmitter = document.querySelector(
  ".popup__container_place-profile"
); */

/* editProfileformSubmitter.addEventListener("submit", handleEditProfile); */

/* -------------------------------------------------------------------------- */
/*                      Function to render card.                              */
/* -------------------------------------------------------------------------- */
/*
// selecting photo-grid__list to fill with cards
const cardsListElement = document.querySelector(".photo-grid__list");
// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");
*/

//.popup_type_preview
// const imagePopup = new PopupWithImage(popupConfig.imageModalWindow);
const imagePopup = new PopupWithImage(".popup_type_preview");

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
/**
 * @function renderCard creates Card object with data param and with template hardcoded
 * @param {array} data contains {name, link}
 * @var {text} cardTemplateElement contains text id of card element to be cloned
 */
/* function renderCard(data, cardsListElement) {
  const card = new Card(data, cardTemplateElement, imagePopup.open);
  cardsListElement.prepend(card.generateCard());
} */

/* -------------------------------------------------------------------------- */
/*                     Function to render INITIAL cards.                      */
/* -------------------------------------------------------------------------- */

function renderInitialCards() {
  initialCards.forEach((data) => renderCard(data, cardsListElement));
}

/* previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
}); */

/* -------------------------------------------------------------------------- */
/*                        Popup ADD card functionality                        */
/* -------------------------------------------------------------------------- */
const newCardForm = document.querySelector(".popup__container_place-card");

/* const newCardPopupCloseButtonElement = document.querySelector(
  ".popup__close-button_place_card"
); */

/* function handleNewCardButtonClick() {
  //new card button
  openPopup(newCardPopup);
  addCardForm.resetValidation();
} */

/* function handleNewCardFormSubmit(event) {
  event.preventDefault();
  const card = {
    name: userInputImageTitle.value,
    link: userInputImageLink.value,
  };
  renderCard(card, cardsListElement);
  closePopup(newCardPopup);
} */

/* newCardPopupCloseButtonElement.addEventListener("mousedown", () =>
  closePopup(newCardPopup)
); */

/* newCardForm.addEventListener("submit", handleNewCardFormSubmit); */

/**
 * Implementation of classes based validation
 *
 */
//addCardForm.reset();
addCardForm.resetValidation();

editForm.resetValidation();

renderInitialCards();
