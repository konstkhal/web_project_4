import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._handleSubmit = action;
    this._popupForm = this._popupElement.querySelector(".form");
    this._submitButton = this._popupForm.querySelector(".form__submit-button");
  }
  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
    });

    super.setEventListeners();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Deleting...";
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = "Yes";
      this._submitButton.disabled = false;
    }
  }
}
