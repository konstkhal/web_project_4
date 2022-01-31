/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              INITIAL variables                             */
/* -------------------------------------------------------------------------- */

let nameElement = document.querySelector(".profile__name");
let nameInput = document.querySelector(".form__input_type_name");
let roleElement = document.querySelector(".profile__role");
let roleInput = document.querySelector(".form__input_type_role");
const popupElement = document.querySelector(".popup"); // selecting the element with the class name "popup"

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

/* ------- Function to toggle appropriate class of element (popup_opened) ------ */
function togglePopup() {
  popupElement.classList.toggle("popup_opened"); // toggling popup_opened class for selected element
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
  togglePopup();
  nameElement.textContent = nameInput.value;
  roleElement.textContent = roleInput.value;
}

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
/*                          Popup close functionality                         */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting closing button element --------------------------- */
let closeButton = document.querySelector(".popup__close-button");
/* --------------------- Event listener for close button -------------------- */
closeButton.addEventListener("click", togglePopup);

/* -------------------------------------------------------------------------- */
/*                          Popup open functionality                          */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting opening button element --------------------------- */
let openButton = document.querySelector(".profile__link-change");
/* --------------------- Event listener for open button -------------------- */
openButton.addEventListener("click", openPopup);

/* -------------------------------------------------------------------------- */
/*                          Popup save functionality                          */
/* -------------------------------------------------------------------------- */
let formSubmiter = document.querySelector(".popup__container");

formSubmiter.addEventListener("submit", savePopup);
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
/* -------------------------------------------------------------------------- */
/*                          INITIALIZATION                      */
/* -------------------------------------------------------------------------- */
renderInitialCards();
