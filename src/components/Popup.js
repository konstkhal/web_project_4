import { ESC_BUTTON } from "../utils/constants.js";

/**
 * @class Popup opens and closes the popup window
 * as per the following requirements:
 * @constructor has a single
 * @param popupSelector it is the popup selector.
 * It stores the
 * public @method open() that will open the popup.
 * public @method close() that will close the popup.
 * It stores a
 * private @method _handleEscClose() that prevents default
 * and stores the logic for  * closing the popup by pressing the Esc key.
 * It stores a
 * public @method setEventListeners() that adds a click event listener
 *  to the close icon of the popup. The modal window should also
 * close when users click on the shaded area around the form.
 */

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    /* this.setEventListeners = this.setEventListeners.bind(this);
     i`m not sure it`s exactly here,
      but I will use arrow functions everywhere widely */
    //this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners = () => {
    this._popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__close-button")
        // || !event.closest("popup")
      ) {
        /*  closePopup(this._popupElement); */
        this.close();
      }
    });
    /*     imageModalWindow.addEve;
    popup__close - button; */
  };

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    //this._popupElement.addEventListener("mousedown", handlePopupMouseDown);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    //this._popupElement.removeEventListener("mousedown", handlePopupMouseDown);
  }

  _handleEscClose = (event) => {
    if (event.key === ESC_BUTTON) {
      event.preventDefault();
      this.close();
    }
  };
}
