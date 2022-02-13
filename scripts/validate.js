/* -------------------------------------------------------------------------- */
/*                             Configure variables                            */
/* -------------------------------------------------------------------------- */

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

/*

export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  errorClass: "form__input-error_visible",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  submitButtonSelector: ".form__submit-button",
};*/

/* -------------------------------------------------------------------------- */
/*                           Enable validation logic                          */
/* -------------------------------------------------------------------------- */

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    setFormListeners(form, config);
    form.addEventListener("submit", (event) => event.preventDefault());
  });
}

//enableValidation(config);

/* -------------------------------------------------------------------------- */
/*                             Removing span error                            */
/* -------------------------------------------------------------------------- */

function removeInputError(formElement, inputElement, config) {
  console.log(inputElement.id);
  console.log(`#${inputElement.id}-error`);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

/* -------------------------------------------------------------------------- */
/*                 Toggling Active / blocked state of buttons                 */
/* -------------------------------------------------------------------------- */
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

/* -------------------------------------------------------------------------- */
/*                             Reset form function                            */
/* -------------------------------------------------------------------------- */
function resetForm(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    removeInputError(formElement, inputElement, config);
    toggleButtonState(inputList, buttonElement, config);
  });
}

function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid)
    removeInputError(formElement, inputElement, config);
  else showInputError(formElement, inputElement, config);
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function setFormListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}
