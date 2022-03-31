/**
 * @class Popup opens and closes the popup window
 * as per the following requirements:
 * @constructor has a single
 * @param popupSelector it is the popup selector.
 * It stores the
 * public @method open() and
 * public @method close() that will open and close the popup.
 * It stores a
 * private @method _handleEscClose() that stores the logic for
 * closing the popup by pressing the Esc key.
 * It stores a
 * public @method setEventListeners() that adds a click event listener
 *  to the close icon of the popup. The modal window should also
 * close when users click on the shaded area around the form.
 */
import { ESC_BUTTON } from "../utils/utils.js";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`.$(popupSelector)`);
  }
  _handleEscClose(event) {}
  setEventListeners() {}
  open() {}
  close() {}
}
export default Popup;
