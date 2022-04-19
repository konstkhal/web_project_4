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
import Api from "../components/Api";
//import { initialCards } from "../utils/cards.js";
import {
  defaultFormConfig,
  popupOpenEditProfileButton,
  newCardButtonElement,
  nameInput,
  roleInput,
  nameElementSelector,
  roleElementSelector,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */

// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");

/**
 * @function renderCard creates Card object with data param and with template hardcoded
 * @param {array} data contains {name, link}
 * @param {text} cardTemplateElement contains text id of card element to be cloned
 * @param {Arrow function} is cardClick handler for opening PopupWithImage
 */
const renderCard = (data) => {
  const card = new Card(data, cardTemplateElement, () => {
    imagePopup.open(data.linkPlace, data.namePlace);
  });

  return card.generateCard();
};

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "cfbd7707-a110-44ae-8aa8-630296f53c66",
    "Content-Type": "application/json",
  },
});

const correctObject = [];
api.getInitialCards().then((res) => {
  res.forEach((element) => {
    const i = {
      createdAt: element.createdAt,
      namePlace: element.name,
      _id: element._id,
      linkPlace: element.link,
      owner: element.owner,
      likes: element.likes,
    };
    correctObject.push(i);
  });

  const cardListSection = new Section(
    { items: correctObject, renderer: renderCard },
    ".photo-grid__list"
  );
});

/* -------------------------------------------------------------------------- */
/*                        Objects creation                                    */
/* -------------------------------------------------------------------------- */
/**
 * Newly created @constant cardListSection contains Section @object
 *
 *
 */

/* -------------------------------------------------------------------------- */
/*                    Popup Form Handlers                                     */
/* -------------------------------------------------------------------------- */

function handleEditFormSubmit(data) {
  userInfo.setUserInfo(data);
}

function handleNewCardFormSubmit(data) {
  cardListSection.addItem(renderCard(data));
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

addCardPopup.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                   Open Popup Buttons listeners                             */
/* -------------------------------------------------------------------------- */

popupOpenEditProfileButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();

  editProfilePopup.open();
  editForm.resetValidation();
  nameInput.value = name;
  roleInput.value = job;
});
newCardButtonElement.addEventListener("click", () => {
  addCardPopup.open();
  addCardForm.resetValidation();
});
