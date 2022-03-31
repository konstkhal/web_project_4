/**
 * @class PopupWithImage a child @class of Popup.
 * This class has to change the @parent open() @method.
 * The @method open() of the PopupWithImage @class, adds an image to the popup
 * and the corresponding image src attribute along with a caption for the image.
 *
 * Puts "name" from @arguments to the ".popup__caption" selector
 * find image by the popup__image" selector set "src" and "alt" for it
 *  call super.open, it will call the original method from original Popup class
 */
import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  open({ link, name }) {}
}

export default PopupWithImage;
