/* -------------------------------------------------------------------------- */
/*                             Configure variables                            */
/* -------------------------------------------------------------------------- */

const toggleButton = (inputList, button, settings) => {
  if (hasValidInputs(inputList)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

const hasValidInputs = (inputList) => {
  // let isValid = true;
  return inputList.every((input) => input.validity.valid === true);

  /*  inputList.forEach((input) => {
    if (!input.validity.valid) {
      isValid = false;
    }
  });*/
};

const hideInputError = (input, formEl, { errorClass }) => {
  const errorSpan = document.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const showInputError = (input, formEl, { errorClass }) => {
  const errorSpan = document.querySelector("#" + input.id + "-error");
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
};

const сheckInputValidity = (input, formEl, settings) => {
  // console.log(input.validity);
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

const setEventListeners = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      сheckInputValidity(input, formEl, settings);
      toggleButton(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
});
// enabling validation by calling enableValidation()
// pass all the settings on call
/*
enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
});*/

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
/*
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    setFormListeners(form, config);
    form.addEventListener("submit", (event) => event.preventDefault());
  });
}
*/
//enableValidation(config);

/* -------------------------------------------------------------------------- */
/*                             Removing span error                            */
/* -------------------------------------------------------------------------- */
/*
function removeInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}
*/
/* -------------------------------------------------------------------------- */
/*                 Toggling Active / blocked state of buttons                 */
/* -------------------------------------------------------------------------- */
/*function toggleButtonState(inputList, buttonElement, config) {
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
/*function resetForm(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    removeInputError(formElement, inputElement, config);
    toggleButtonState(inputList, buttonElement, config);
  });
}
/*
function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
}
*/
/*
function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    removeInputError(formElement, inputElement, config);
  } else showInputError(formElement, inputElement, config);
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
*/
