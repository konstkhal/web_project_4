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
const nameElementSelector = ".profile__name";
const nameElement = document.querySelector(nameElementselector);
const nameInput = document.querySelector(".form__input_type_name"); //popup form
const roleElementSelector = ".profile__role";
const roleElement = document.querySelector(roleElementSelector);
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

/* -------------------------------------------------------------------------- */
/*                          Escape key value CONST                       */
/* -------------------------------------------------------------------------- */

const ESC_BUTTON = "Escape";

export {
  ESC_BUTTON,
  defaultFormConfig,
  popupOpenEditProfileButton,
  newCardButtonElement,
  nameInput,
  roleInput,
  nameElementSelector,
  roleElementSelector,
  userInputImageTitle,
  userInputImageLink,
};
