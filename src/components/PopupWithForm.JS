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
import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector("form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {}
  setEventListeners() {}
  close() {
    this._popupForm.reset();

    super.close();
  }
}
