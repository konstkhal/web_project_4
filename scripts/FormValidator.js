class FormValidator {
  constructor(config, formEl) {
    console.log(this);
    this._config = config; //configs are here
    this._element = formEl; //my form is here
    this._buttonElement = this._element.querySelector(
      this._config.submitButtonSelector
    );
    this._config.inputList = Array.from(
      this._element.querySelectorAll(this._config.inputSelector)
    );
  }

  _toggleButton() {
    if (this._hasValidInputs()) {
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.disabled = true;
    }
  }

  _hasValidInputs() {
    //check?
    return this._config.inputList.every(
      (input) => input.validity.valid === true
    );
  }

  _setEventListeners = () => {
    this._toggleButton();

    this._config.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._сheckInputValidity(input);
        this._toggleButton();
      });
    });
  };

  _showInputError = (inputElement) => {
    const errorSpan = this._element.querySelector(`#${inputElement.id}-error`);

    errorSpan.textContent = inputElement.validationMessage; //is it correct?
    errorSpan.classList.add(this._config.errorClass);
    inputElement.classList.add(this._config.inputErrorClass);
  };

  _hideInputError = (inputElement) => {
    const errorSpan = this._element.querySelector(`#${inputElement.id}-error`);
    /*     console.log(inputElement);
    console.log(errorSpan); */
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._config.errorClass);
    inputElement.classList.remove(this._config.inputErrorClass);
  };

  _сheckInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
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
      console.log(input);
      this._hideInputError(input);
    });
  }
}

export default FormValidator;
