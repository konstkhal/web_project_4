/** Transforming the Card Class
 *  Connect the Card class to the popup.
 * Make Card take the handleCardClick() function into the constructor.
 * When the user clicks on the card,
 * this function will open the popup with an image
 */

export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleTrashButtonClick,
    handleLikeButtonClick
  ) {
    this._cardSelector = cardSelector; //template selector
    this._id = data._id;

    this._ownerId = data.owner._id;
    this._userId = data.user_id;
    this._likesCount = data.likes.length;
    this._likesList = data.likes;

    this._cardTemplate =
      this._cardSelector.content.querySelector(".photo-grid__item"); // selecting card template element

    this._handleTrashButtonClick = handleTrashButtonClick;
    this._handleCardClick = handleCardClick;
    this._handleLikeButtonClick = handleLikeButtonClick;

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

    this._cardLikeButtonElement.addEventListener("click", (e) =>
      this._handleLikeButtonClick(this._id)
    );
    this._cardTrashButtonElement.addEventListener("click", () =>
      this._handleTrashButtonClick(this._id)
    );

    this._cardImageElement.addEventListener("click", () =>
      this._handleCardClick()
    );
  }

  getIsLiked() {
    return this._isLiked();
  }

  updateLikes(likes) {
    // set instance variable
    this._likesList = likes;
    this._renderLikes();
  }

  _isLiked() {
    // return true if user liked the card, otherwise false
    return this._likesList.some((person) => person._id === this._userId);
  }

  _renderLikes() {
    const likesCount = this._likesList.length;
    this._cardLikesCounterElement.textContent = likesCount;

    if (this._isLiked()) {
      this._cardLikeButtonElement.classList.add(
        "photo-grid__like-button_active"
      );
    } else {
      this._cardLikeButtonElement.classList.remove(
        "photo-grid__like-button_active"
      );
    }
  }

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

    this._cardLikesCounterElement = this._element.querySelector(
      ".photo-grid__likes-counter"
    );

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;

    this._setEventListeners();

    if (this._ownerId !== this._userId) {
      this._element.querySelector(".photo-grid__delete-button").remove();
    }

    /*     if (this._isLiked) {
      this.renderLike(this._likesList);
    }*/
    this._renderLikes();
    //this._cardLikesCounterElement.textContent = likesCount;

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
