/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     Cards initialization functionality                     */
/* -------------------------------------------------------------------------- */

const cardsListElement = document.querySelector(".photo-grid__list"); // selecting photo-grid__list to fill with cards
const cardTemplateElement = document.querySelector("#card-template"); // selecting card template element

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
function closePopupEditProfile() {
  togglePopup(popupElement);
}

/* -------------------------------------------------------------------------- */
/*             Edit profile Popup close functionality                         */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting closing button element --------------------------- */
const closeButton = document.querySelector(
  ".popup__close-button_place-profile"
);
/* --------------------- Event listener for close button -------------------- */

closeButton.addEventListener("click", () => togglePopup(popupElement));
/* -------------------------------------------------------------------------- */
/*             Edit profile Popup open functionality                          */
/* -------------------------------------------------------------------------- */
/* ------------- Selecting opening button element --------------------------- */
const openButton = document.querySelector(".profile__link-change");
/* --------------------- Event listener for open button -------------------- */
openButton.addEventListener("click", openPopup);

/* -------------------------------------------------------------------------- */
/*            Edit profile  Popup save functionality                          */
/* -------------------------------------------------------------------------- */
const formSubmiter = document.querySelector(".popup__container_place-profile");

formSubmiter.addEventListener("submit", savePopup);

/* -------------------------------------------------------------------------- */
/*                           Function to make card.                           */
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
/*                      Function to render card.                              */
/* -------------------------------------------------------------------------- */

function renderCard(card) {
  cardsListElement.prepend(createCard(card));
}

/* -------------------------------------------------------------------------- */
/*                     Function to render INITIAL cards.                      */
/* -------------------------------------------------------------------------- */

function renderInitialCards() {
  initialCards.forEach((card) => renderCard(card));
}

/* -------------------------------------------------------------------------- */
/*                        Function to handle LIKE button click.               */
/* -------------------------------------------------------------------------- */

function handleLikeButtonClick(event) {
  event.target.classList.toggle("like-button_active");
}

/* -------------------------------------------------------------------------- */
/*      Function to handle DELETE button click.                               */
/* -------------------------------------------------------------------------- */

function handleTrashButtonClick(event) {
  event.target.closest(".photo-grid__item").remove();
}

/* -------------------------------------------------------------------------- */
/*                     Function to handle image click.                        */
/* -------------------------------------------------------------------------- */

const previewPopup = document.querySelector(".popup_type_preview");
const previewPopupImage = document.querySelector(".popup__preview-image");
const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
);
const previewPopupDescription = document.querySelector(".popup__description");

function handleCardImageClick(evt) {
  previewPopupImage.src = evt.target.src;
  previewPopupImage.alt = evt.target.alt;
  previewPopupDescription.textContent = evt.target.alt;
  togglePopup(previewPopup);
}

previewPopupCloseButton.addEventListener("click", () =>
  togglePopup(previewPopup)
);
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
  console.log("click fo new card");
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

/* -------------------------------------------------------------------------- */
/*                          INITIALIZATION                      */
/* -------------------------------------------------------------------------- */
renderInitialCards();
