class FormValidator {
  constructor(config, formEl) {
    this._config = config; //configs are here
    this._element = formEl; //my form is here

    this._buttonElement = this._element.querySelector(
      this._config.submitButtonSelector
    );
    this._config.inputList = Array.from(
      this._element.querySelectorAll(this._config.inputSelector)
    );

    /*     console.log(this._config.inputList);
    console.log("Конструктор"); */
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

    this._config.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._сheckInputValidity(input);
        this._toggleButton();
      });
    });
  };

  _showInputError = (input) => {
    const errorSpan = this._element.querySelector(`#${input.id}-error`);

    errorSpan.textContent = input.validationMessage; //is it correct?
    errorSpan.classList.add(this._config.errorClass);
    input.classList.add(this._config.inputErrorClass);
  };

  _hideInputError = (input) => {
    /*     console.log(this);
    console.log(this._config.inputList); */
    const errorSpan = this._element.querySelector(`#${input.id}-error`);
    // console.log(errorSpan);

    errorSpan.textContent = "";
    errorSpan.classList.remove(this._config.errorClass);
    input.classList.remove(this._config.inputErrorClass);
  };

  _сheckInputValidity = (input) => {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
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
    /*  console.log(this);
    console.log(this._config.inputList); */
    //  this._toggleButton();

    this._config.inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
}

export default FormValidator;
