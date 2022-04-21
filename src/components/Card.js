/** Transforming the Card Class
 *  Connect the Card class to the popup.
 * Make Card take the handleCardClick() function into the constructor.
 * When the user clicks on the card,
 * this function will open the popup with an image
 */

export default class Card {
  constructor(data, cardSelector, handleCardClick, handleTrashButtonClick) {
    this._cardSelector = cardSelector; //template selector
    this._id = data._id;
    // console.log(data._id);
    this._cardTemplate =
      this._cardSelector.content.querySelector(".photo-grid__item"); // selecting card template element

    this._handleTrashButtonClick = handleTrashButtonClick;
    this._handleCardClick = handleCardClick;

    this._name = data.namePlace;
    this._link = data.linkPlace;
    this._alt = `Picture of ${data.namePlace}`;

    // select card and card element parts
  }
  _getTemplate = () => {
    return this._cardTemplate.cloneNode(true);
  };

  _setEventListeners() {
    //handlers setted here

    this._cardLikeButtonElement.addEventListener("click", () =>
      this._handleLikeButtonClick()
    );
    this._cardTrashButtonElement.addEventListener("click", () =>
      this._handleTrashButtonClick(this._id)
    );

    this._cardImageElement.addEventListener("click", () =>
      this._handleCardClick()
    );
  }

  _handleLikeButtonClick = (event) => {
    event.target.classList.toggle("photo-grid__like-button_active");
  };

  /*   _handleTrashButtonClick = () => {
    this._element.remove();
    this._element = null;
  }; */

  /*  _handleCardImageClick = () => {
    this._handleCardClick({ link: this._link, name: this._name });
  }; */

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

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
