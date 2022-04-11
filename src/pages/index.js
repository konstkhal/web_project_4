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
  nameInput,
  roleInput,
  nameElement,
  roleElement,
  userInputImageTitle,
  userInputImageLink,
  nameElementSelector,
  roleElementSelector,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */

/* const cardsList = ".photo-grid__list"; */
// selecting photo-grid__list to fill with cards
const cardsListSelector = document.querySelector(".photo-grid__list");
// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");
// Edit form selector
const editFormElement = document.querySelector(
  ".popup__container_place-profile"
);
// Add form selector
const addCardFormElement = document.querySelector(
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
const cardListSection = new Section(
  {
    items: {},
    renderer: (item) => {
      const cardElement = new Card({ item }, cardTemplateSelector, () => {
        imagePopup.open(item.link, item.name);
      });
      return cardElement.getCardElement();
    },
  },
  ".photo-grid__list"
);
/* -------------------------------------------------------------------------- */
/*                    Popup Form Handlers                                     */
/* -------------------------------------------------------------------------- */
//console.log("we are here");
function handleEditFormSubmit(data) {
  //console.log(data);
  userInfo.setUserInfo(data);

  /* this.close();
   */
  // console.log(this);
}

const renderCard = (data) => {
  const card = new Card(data, cardTemplateElement, () => {
    imagePopup.open(data.linkPlace, data.namePlace);
  });

  return card.generateCard();
};

function handleNewCardFormSubmit() {
  cardListSection.addItem(
    renderCard({
      namePlace: userInputImageTitle.value,
      linkPlace: userInputImageLink.value,
    })
  );
  //console.log("here we are");

  // console.log(this);
}

const userInfo = new UserInfo(nameElementSelector, roleElementSelector);

const editProfilePopup = new PopupWithForm(
  ".popup_type_edit-profile",
  handleEditFormSubmit
);
const addCardPopup = new PopupWithForm(
  ".popup_type_new-card",
  handleNewCardFormSubmit
);

const imagePopup = new PopupWithImage(".popup_type_preview");

const addCardForm = new FormValidator(
  defaultFormConfig,
  addCardPopup.getPopupForm()
);
const editForm = new FormValidator(
  defaultFormConfig,
  editProfilePopup.getPopupForm()
);

addCardForm.enableValidation();
editForm.enableValidation();

/* -------------------------------------------------------------------------- */
/*                         Popup Event Listeners                              */
/* -------------------------------------------------------------------------- */
imagePopup.setEventListeners();

editProfilePopup.setEventListeners();
//debugger;
addCardPopup.setEventListeners();

const newCardPopupCloseButtonElement = document.querySelector(
  ".popup__close-button_place_card"
);

const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
);
/* -------------------------------------------------------------------------- */
/*                   Open / Close Popup Buttons listeners                             */
/* -------------------------------------------------------------------------- */

popupOpenEditProfileButton.addEventListener("mousedown", () => {
  const { name, job } = userInfo.getUserInfo();

  // console.log(userInfo.getUserInfo());
  nameInput.value = name;
  roleInput.value = job;
  editProfilePopup.open();
  // formValidators['profileEditForm'].resetValidation();
});
newCardButtonElement.addEventListener("mousedown", () => {
  addCardPopup.open();
});

newCardPopupCloseButtonElement.addEventListener("mousedown", () => {
  addCardPopup.close();
});

previewPopupCloseButton.addEventListener("mousedown", () => {
  imagePopup.close();
});

/* -------------------------------------------------------------------------- */
/*                                DOM selectors                               */
/* -------------------------------------------------------------------------- */

/* const cardsListSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".cards-list"
); */

/**
 * Newly created @constant cardsListElement contains new Section @object
 *
 * Need to complete
 */

/* const renderCard = (data, cardsListElement) => {
  const card = new Card(data, cardTemplateElement, () => {
    imagePopup.open(data.link, data.name);
  });

  cardsListElement.prepend(card.generateCard());
}; */

//validation activation

// selecting the Popup element with Profile

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
  initialCards.forEach(({ namePlace, linkPlace }) => {
    cardListSection.addItem(renderCard({ namePlace, linkPlace }));

    //console.log({ namePlace, linkPlace });
  });
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
