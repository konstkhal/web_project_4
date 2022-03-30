import { openPopup } from "../utils/utils.js";
import {
  previewPopup,
  previewPopupImage,
  previewPopupDescription,
  previewPopupCloseButton,
} from "./index.js";
export class Card {
  constructor({ name, link }, cardSelector) {
    //#card-template
    //this.data = data;
    this._cardSelector = cardSelector; //template selector

    this._cardTemplate =
      this._cardSelector.content.querySelector(".photo-grid__item"); // selecting card template element

    this._text = name;
    this._link = link;
    this._alt = `Picture of ${name}`;

    // select card and card element parts
  }
  _getTemplate = () => {
    return this._cardTemplate.cloneNode(true);

    //return this._element;
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
    this._cardImageElement.addEventListener(
      "mousedown",
      this._handleCardImageClick
    );
  }

  _handleLikeButtonClick = (event) => {
    event.target.classList.toggle("photo-grid__like-button_active");
  };

  _handleTrashButtonClick = () => {
    this._element.remove();
    this._element = null;
  };

  _handleCardImageClick = () => {
    previewPopupImage.src = this._link;
    previewPopupImage.alt = `Picture of ${this._text}`;
    previewPopupDescription.textContent = this._text;
    openPopup(previewPopup);
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
    this._cardImageElement.alt = this._text;
    this._cardTitleElement.textContent = this._text;
    this._setEventListeners();
    return this._element;
  }
}
