import Popup from "./Popup";

/**
 * Create PopupWithForm as a child class of Popup.
 * The PopupWithForm class must comply with the following requirements:
 * It takes two arguments:
 * the popup selector,
 * and a callback function
 * which PopupWithForm calls when the form’s submit event fires.
 * It stores a private method named _getInputValues(),
 * which collects data from all the input fields and returns that data as an object.
 * It modifies the setEventListeners() parent method.
 * The setEventListeners() method of the PopupWithForm class
 *  has to add the submit event handler to the form0
 *  and the click event listener to the close icon.
 * It modifies the close() parent method
 * in order to reset the form once the popup is closed.
 */

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    //console.log(this._submitButtonText);
    this._popupForm = this._popupElement.querySelector(".form");

    this._submitButton = this._popupForm.querySelector(".form__submit-button");
    //console.log(this._submitButton);
    this.handleFormSubmit = handleFormSubmit;
    this._inputsArray = [...this._popupForm.querySelectorAll(".form__input")];
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = "Save";
      this._submitButton.disabled = false;
    }
  }

  getPopupForm() {
    return this._popupForm;
  }
  _getInputValues() {
    const inputValues = {};
    this._inputsArray.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", () => {
      /*   this._popupForm.querySelector(".form__submit-button").innerHTML =
        "Saving...";
      console.log(this._submitButtonText); */
      this.handleFormSubmit(this._getInputValues());
      //      setTimeout(100000);
      /*       this._popupForm.querySelector(".form__submit-button").innerHTML =
        this._submitButtonText; */
      // this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
