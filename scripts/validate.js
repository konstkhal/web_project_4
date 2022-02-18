/* -------------------------------------------------------------------------- */
/*                             Configure variables                            */
/* -------------------------------------------------------------------------- */

export const toggleButton = (inputList, button, settings) => {
  if (hasValidInputs(inputList)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

export const hasValidInputs = (inputList) => {
  return inputList.every((input) => input.validity.valid === true);
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

export const config = enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "button_blocked",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
});
