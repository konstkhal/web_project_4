import Popup from "./Popup.js";

/**
 * @class PopupWithImage a child @class of Popup.
 * This class has to change the @parent open() @method.
 * The @method open() of the PopupWithImage @class, adds an image to the popup
 * and the corresponding image src attribute along with a caption for the image.
 *
 * Puts "name" from @arguments to the ".popup__caption" selector
 * find image by the popup__image" selector set "src" and "alt" for it
 *  call @class super.open, it will call the original @method from original @class Popup
 */

export default class PopupWithImage extends Popup {
  /*   constructor(popupSelector) {
    super(popupSelector);
  } */
  open = (linkPlace, namePlace) => {
    console.log(linkPlace, namePlace);
    //const previewPopup = document.querySelector(".popup_type_preview");
    const previewPopupImage = this._popupElement.querySelector(
      ".popup__preview-image"
    );
    const previewPopupDescription = this._popupElement.querySelector(
      ".popup__description"
    );

    previewPopupImage.src = linkPlace;
    previewPopupImage.alt = `Picture of ${namePlace}`;
    previewPopupDescription.textContent = namePlace;

    super.open();
    /*   this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", super._handleEscClose); */
    //openPopup(previewPopup);
  };
}
