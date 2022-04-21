import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }
  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitHandler();
      // this.close();
    });

    super.setEventListeners();
  }
}
