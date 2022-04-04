import { openPopup } from "../utils/utils.js";
import {
  previewPopup,
  previewPopupImage,
  previewPopupDescription,
  previewPopupCloseButton,
} from "../pages/index.js";

/** Transforming the Card Class
 *  Connect the Card class to the popup.
 * Make Card take the handleCardClick() function into the constructor.
 * When the user clicks on the card,
 * this function will open the popup with an image
 */

export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector; //template selector

    this._cardTemplate =
      this._cardSelector.content.querySelector(".photo-grid__item"); // selecting card template element

    this._handleCardClick = handleCardClick;

    this._name = name;
    this._link = link;
    this._alt = `Picture of ${name}`;

    // select card and card element parts
  }
  _getTemplate = () => {
    return this._cardTemplate.cloneNode(true);
  };

  _setEventListeners() {
    //handlers setted here

    this._cardLikeButtonElement.addEventListener(
      "mousedown",
      this._handleLikeButtonClick
    );
    this._cardTrashButtonElement.addEventListener(
      "mousedown",
      this._handleTrashButtonClick
    );
    this._cardImageElement.addEventListener("mousedown", this._handleCardClick);
  }

  _handleLikeButtonClick = (event) => {
    event.target.classList.toggle("photo-grid__like-button_active");
  };

  _handleTrashButtonClick = () => {
    this._element.remove();
    this._element = null;
  };

  _handleCardImageClick = () => {
    this._handleCardClick({ link: this._link, name: this._name });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitleElement = this._element.querySelector(".photo-grid__title");

    this._cardImageElement = this._element.querySelector(".photo-grid__image");
    this._cardLikeButtonElement = this._element.querySelector(
      ".photo-grid__like-button"
    );
    this._cardTrashButtonElement = this._element.querySelector(
      ".photo-grid__delete-button"
    );
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
