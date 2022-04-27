import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._handleSubmit = action;
  }
  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
    });

    super.setEventListeners();
  }
}
