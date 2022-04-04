const defaultFormConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
};

const popupOpenEditProfileButton = document.querySelector(
  ".profile__link-change"
);
const newCardButtonElement = document.querySelector(".profile__link-add");

/* -------------------------------------------------------------------------- */
/*                     INITIAL variables for profile edit                     */
/* -------------------------------------------------------------------------- */
const nameElement = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_type_name"); //popup form
const roleElement = document.querySelector(".profile__role");
const roleInput = document.querySelector(".form__input_type_role");

/* -------------------------------------------------------------------------- */
/*                        Popup ADD card functionality                        */
/* -------------------------------------------------------------------------- */
const userInputImageTitle = document.querySelector(
  ".form__input_type_image-title"
);
const userInputImageLink = document.querySelector(
  ".form__input_type_image-link"
);

export {
  defaultFormConfig,
  popupOpenEditProfileButton,
  newCardButtonElement,
  nameInput,
  roleInput,
  userInputImageTitle,
  userInputImageLink,
};
