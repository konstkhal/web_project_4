/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     Cards initialization functionality                     */
/* -------------------------------------------------------------------------- */

const cardsListElement = document.querySelector(".photo-grid__list"); // selecting photo-grid__list to fill with cards
const cardTemplateElement = document.querySelector("#card-template"); // selecting card template element
/* -------------------------------------------------------------------------- */
/*                              Six initial cards                             */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                         Edit profile Functionality                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     INITIAL variables for profile edit                     */
/* -------------------------------------------------------------------------- */
const nameElement = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_type_name");
const roleElement = document.querySelector(".profile__role");
const roleInput = document.querySelector(".form__input_type_role");
const popupElement = document.querySelector(".popup_type_edit-profile"); // selecting the element with the class name "popup_type_edit-profile"

/* ------- Function to toggle appropriate class of element (popup_opened) ------ */
function togglePopup(popup) {
  popup.classList.toggle("popup_opened"); // toggling popup_opened class for selected element
}

/* ------- Function to open popup ------ */
function openPopup() {
  togglePopup(popupElement);
  nameInput.value = nameElement.textContent;
  roleInput.value = roleElement.textContent;
}
/* ------- Function to save popup ------ */
function savePopup(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
  togglePopup(popupElement);
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
}
/* ------------------ Function to close profile popup ----------------- */
function closePopup() {
  togglePopup(popupElement);
}

/* -------------------------------------------------------------------------- */
/*             Edit profile Popup close functionality                         */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting closing button element --------------------------- */
let closeButton = document.querySelector(".popup__close-button");
/* --------------------- Event listener for close button -------------------- */
closeButton.addEventListener("click", closePopup);

/* -------------------------------------------------------------------------- */
/*             Edit profile Popup open functionality                          */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting opening button element --------------------------- */
let openButton = document.querySelector(".profile__link-change");
/* --------------------- Event listener for open button -------------------- */
openButton.addEventListener("click", openPopup);

/* -------------------------------------------------------------------------- */
/*            Edit profile  Popup save functionality                          */
/* -------------------------------------------------------------------------- */
let formSubmiter = document.querySelector(".popup__container_place-profile");

formSubmiter.addEventListener("submit", savePopup);

/* -------------------------------------------------------------------------- */
/*       TEMPLATE. Function to make card. Need to change function names       */
/* -------------------------------------------------------------------------- */

function createCard(card) {
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
  cardLikeButtonElement.addEventListener("click", handleLikeButtonClick);
  cardTrashButtonElement.addEventListener("click", handleTrashButtonClick);
  cardImageElement.addEventListener("click", handleCardImageClick);
  // return card
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*       TEMPLATE. Function to render card. Need to change function names     */
/* -------------------------------------------------------------------------- */

function renderCard(card) {
  cardsListElement.prepend(createCard(card));
}

/* -------------------------------------------------------------------------- */
/* TEMPLATE. Function to render INITIAL cards. Need to change function names  */
/* -------------------------------------------------------------------------- */

function renderInitialCards() {
  initialCards.forEach((card) => renderCard(card));
}

/* -------------------------------------------------------------------------- */
/* TEMPLATE. Function to handle LIKE button click. Need to change f - names   */
/* -------------------------------------------------------------------------- */

function handleLikeButtonClick(event) {
  event.target.classList.toggle("like-button_active");
}

/* -------------------------------------------------------------------------- */
/* TEMPLATE. Function to handle DELETE button click. Need to change f - names */
/* -------------------------------------------------------------------------- */

function handleTrashButtonClick(event) {
  event.target.closest(".cards-list__item").remove();
}

/* -------------------------------------------------------------------------- */
/* TEMPLATE. Function to handle image click. Need to change function names  */
/* -------------------------------------------------------------------------- */

function handleCardImageClick(event) {
  previewPopupImage.src = event.target.src;
  previewPopupImage.alt = event.target.alt;
  previewPopupDescription.textContent = event.target.alt;
  openPopup(previewPopup);
}

/* -------------------------------------------------------------------------- */
/*                        Popup ADD card functionality                        */
/* -------------------------------------------------------------------------- */
const newCardForm = document.querySelector(".popup__container_place-card");
const newCardPopup = document.querySelector(".popup_type_new-card");
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
  console.log("click");
  newCardForm.reset();
  togglePopup(newCardPopup);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: userInputImageTitle.value,
    link: userInputImageLink.value,
  };
  renderCard(card);
  console.log(card);
  togglePopup(newCardPopup);
}

newCardButtonElement.addEventListener("click", handleNewCardButtonClick);
newCardPopupCloseButtonElement.addEventListener("click", () =>
  togglePopup(newCardPopup)
);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);

/* -------------------------------------------------------------------------- */
/*                          Like button functionality                         */
/* -------------------------------------------------------------------------- */
function handleLikeButtonClick(event) {
  event.target.classList.toggle("photo-grid__like-button_active");
}

//cardLikeButtonElement.addEventListener("click", handleLikeButtonClick);

/* -------------------------------------------------------------------------- */
/*                          INITIALIZATION                      */
/* -------------------------------------------------------------------------- */
renderInitialCards();
