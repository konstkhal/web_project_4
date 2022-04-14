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
    // this.setEventListeners = this.setEventListeners.bind(this);
    //Reserved for future use: solution for not losing contex
  }
  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__close-button")
        // || !event.closest("popup")
      ) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListenпшеer("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === ESC_BUTTON) {
      event.preventDefault();
      this.close();
    }
  };
}
