import {
  openPopup,
  previewPopup,
  previewPopupImage,
  previewPopupDescription,
} from "./utils.js";

export class Card {
  constructor({ name, link }, cardSelector) {
    //#card-template
    //this.data = data;
    this._cardSelector = cardSelector; //template selector
    //console.log(this._cardSelector);

    this._cardTemplate =
      this._cardSelector.content.querySelector(".photo-grid__item"); // selecting card template element

    this._text = name;
    this._link = link;
    this._alt = `Picture of ${name}`;

    // select card and card element parts
  }
  _getTemplate = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    this._cardTitleElement =
      this._cardElement.querySelector(".photo-grid__title");

    this._cardImageElement =
      this._cardElement.querySelector(".photo-grid__image");
    this._cardLikeButtonElement = this._cardElement.querySelector(
      ".photo-grid__like-button"
    );
    this._cardTrashButtonElement = this._cardElement.querySelector(
      ".photo-grid__delete-button"
    );
    return this._cardElement;
  };

  _setEventListeners() {
    //handlers setted here

    this._cardLikeButtonElement.addEventListener("mousedown", () =>
      this._handleLikeButtonClick()
    );
    this._cardTrashButtonElement.addEventListener("mousedown", () =>
      this._handleTrashButtonClick()
    );
    this._cardImageElement.addEventListener("mousedown", () =>
      this._handleCardImageClick()
    );
  }

  _handleLikeButtonClick = () => {
    //console.log(event);
    event.target.classList.toggle("photo-grid__like-button_active");
  };

  _handleTrashButtonClick = () => {
    //console.log(event);
    //this._element.remove;
    event.target.closest(".photo-grid__item").remove();
    //the same as this._cardElement.remove?
  };

  _handleCardImageClick = () => {
    previewPopupImage.src = this._link;
    previewPopupImage.alt = `Picture of ${this._text}`;
    previewPopupDescription.textContent = this._text;
    openPopup(previewPopup);
  };

  generateCard() {
    // getView mexican
    //init for a card class
    this._element = this._getTemplate();
    //console.log(this._element);
    this._element.querySelector(".photo-grid__image").src = this._link;
    this._element.querySelector(".photo-grid__image").alt = this._text;
    this._element.querySelector(".photo-grid__title").textContent = this._text;
    this._setEventListeners();
    return this._element;
  }
}
