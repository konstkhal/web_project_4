class FormValidator {
  constructor(config, formElement) {
    this._config = config;

    this._element = formElement; //my form is here
    // console.log(this._config.inputList);
  }

  _showInputError = (inputElement) => {
    const errorSpan = this._element.querySelector(`#${inputElement.id}-error`);

    errorSpan.textContent = inputElement.validationMessage; //is it correct?
    errorSpan.classList.add(this._config.errorClass);
    inputElement.classList.add(this._config.inputErrorClass);
  };

  _hideInputError = (inputElement) => {
    const { inputErrorClass, errorClass } = this._config;
    /*  console.log(inputErrorClass);
      console.log(errorClass);
      console.log(inputElement); */
    const errorSpan = this._element.querySelector(`#${inputElement.id}-error`);
    console.log(inputElement.id);
    console.log(this._element.innerHTML);
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);
  };

  _сheckInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  };

  _toggleButton() {
    const buttonElement = this.formElement.querySelector(submitButtonSelector);
    if (this._hasValidInputs()) {
      buttonElement.disabled = false;
    } else {
      buttonElement.disabled = true;
    }
  }

  _hasValidInputs() {
    //check?
    return this._config.inputList.every(
      (input) => input.validity.valid === true
    );
  }

  _setEventListeners = () => {
    const { inputSelector } = this._config;
    //console.log(inputSelector);

    this._config.inputList = Array.from(
      this._element.querySelectorAll(inputSelector)
    );
    console.log(this._config.inputList);

    const submitButton = this._element.querySelector(
      this._config.submitButtonSelector
    );

    this._config.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._сheckInputValidity(input);
        this._toggleButton();
      });
    });
  };

  enableValidation() {
    //Public init entry point of the class
    this._element.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  }

  resetValidation() {
    this._config.inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
}

export default FormValidator;
