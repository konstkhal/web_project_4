/* -------------------------------------------------------------------------- */
/*                              Main scripts file                             */
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
//import { initialCards } from "../utils/cards.js";
import {
  defaultFormConfig,
  popupOpenEditProfileButton,
  newCardButtonElement,
  nameInput,
  roleInput,
  nameElementSelector,
  roleElementSelector,
  popupOpenEditAvatarLink,
  avatarElementSelector,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */

// selecting card template element
const cardTemplateElement = document.querySelector("#card-template");

/* -------------------------------------------------------------------------- */
/*                                Declarations                                */
/* -------------------------------------------------------------------------- */

let userId;

/**
 * @function renderCard creates Card object with data param and with template hardcoded
 * @param {array} data contains {name, link}
 * @param {text} cardTemplateElement contains text id of card element to be cloned
 * @param {Arrow function} is cardClick handler for opening PopupWithImage
 */
const renderCard = (data) => {
  const card = new Card(
    data,
    cardTemplateElement,
    () => {
      imagePopup.open(data.linkPlace, data.namePlace);
    },
    (id) => {
      confirmModal.open();
      confirmModal.setAction(() => {
        confirmModal.renderLoading(true);
        api
          .deleteCard(id)
          .then((res) => {
            card.removeCard();
            confirmModal.close();
          })
          .catch((error) => {
            // error
            console.log(error);
          })
          .finally(() => {
            // end loading
            confirmModal.renderLoading(false);
          });
      });
    },
    (id) => {
      const isAlreadyLiked = card.getIsLiked();
      if (isAlreadyLiked) {
        api
          .disLikeCard(id)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((error) => {
            // error
            console.log(error);
          }) /*
          .finally(() => {
            // end loading
            confirmModal.renderLoading(false);
          }) */;
      } else {
        api
          .likeCard(id)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((error) => {
            // error
            console.log(error);
          }); /*
          .finally(() => {
            // end loading
            confirmModal.renderLoading(false);
          }); */
      }
    }
  );

  return card.generateCard();
};

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "cfbd7707-a110-44ae-8aa8-630296f53c66",
    "Content-Type": "application/json",
  },
});

const cardListSection = new Section(
  { items: [], renderer: renderCard },
  ".photo-grid__list"
);

api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo({
      profileFormNameInput: res.name,
      profileFormRoleInput: res.about,
      avatarLink: res.avatar,
    });
  })
  .catch((error) => {
    // error
    console.log(error);
  });

function handleAvatarFormSubmit(data) {
  editAvatarPopup.renderLoading(true);
  const avatarData = data.name;

  api
    .setAvatarLink(avatarData)
    .then((res) => {
      // update data
      userInfo.setUserAvatar(res);
      // close popup if necessary
      editAvatarPopup.close();
    })
    .catch((error) => {
      // error
      console.log(error);
    })
    .finally(() => {
      // end loading
      editAvatarPopup.renderLoading(false);
    });
}

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    const cards = [];
    cardData.forEach((element) => {
      const entry = {
        createdAt: element.createdAt,
        namePlace: element.name,
        _id: element._id,
        linkPlace: element.link,
        owner: element.owner,
        likes: element.likes,
        user_id: userId,
      };
      cards.push(entry);
    });

    cardListSection.renderItems(cards);
  })
  .catch((error) => {
    // error
    console.log(error);
  });

function handleEditFormSubmit(data) {
  // show loading
  editProfilePopup.renderLoading(true);

  // api request
  api
    .setUserInfo({
      name: data.profileFormNameInput,
      about: data.profileFormRoleInput,
    })
    .then((res) => {
      // update data
      userInfo.setUserInfo({
        profileFormNameInput: res.name,
        profileFormRoleInput: res.about,
        avatarLink: res.avatar,
      });
      // close popup if necessary
      editProfilePopup.close();
    })
    .catch((error) => {
      // error
      console.log(error);
    })
    .finally(() => {
      // end loading
      editProfilePopup.renderLoading(false);
    });
}

function handleNewCardFormSubmit(data) {
  // show loading
  addCardPopup.renderLoading(true);

  api
    .createCard({ name: data.namePlace, link: data.linkPlace })
    .then((res) => {
      // update data
      cardListSection.addItem(
        renderCard({
          namePlace: res.name,
          linkPlace: res.link,
          _id: res._id,
          owner: res.owner,
          user_id: userId,
          likes: res.likes,
        })
      );
      addCardPopup.close();
    })

    .catch((error) => {
      // error
      console.log(error);
    })
    .finally(() => {
      // end loading
      addCardPopup.renderLoading(false);
    });
}

const userInfo = new UserInfo(
  nameElementSelector,
  roleElementSelector,
  avatarElementSelector
);

const editProfilePopup = new PopupWithForm(
  ".popup_type_edit-profile",
  handleEditFormSubmit
);
const addCardPopup = new PopupWithForm(
  ".popup_type_new-card",
  handleNewCardFormSubmit
);

const editAvatarPopup = new PopupWithForm(
  ".popup_type_avatar-change",
  handleAvatarFormSubmit
);

const imagePopup = new PopupWithImage(".popup_type_preview");
const confirmModal = new PopupWithSubmit(".popup_type_confirm-delete-card");

const addCardForm = new FormValidator(
  defaultFormConfig,
  addCardPopup.getPopupForm()
);
const editForm = new FormValidator(
  defaultFormConfig,
  editProfilePopup.getPopupForm()
);

const editAvatarForm = new FormValidator(
  defaultFormConfig,
  editAvatarPopup.getPopupForm()
);

/* -------------------------------------------------------------------------- */
/*                         Popup Enable Validation                            */
/* -------------------------------------------------------------------------- */

addCardForm.enableValidation();
editForm.enableValidation();
editAvatarForm.enableValidation();

/* -------------------------------------------------------------------------- */
/*                         Popup Event Listeners                              */
/* -------------------------------------------------------------------------- */
imagePopup.setEventListeners();

editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();

confirmModal.setEventListeners();
editAvatarPopup.setEventListeners();
/* -------------------------------------------------------------------------- */
/*                   Open Popup Buttons listeners                             */
/* -------------------------------------------------------------------------- */

function fillProfileForm({ name, job }) {
  nameInput.value = name;
  roleInput.value = job;
}

popupOpenEditProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  editForm.resetValidation();

  fillProfileForm(userInfo.getUserInfo());
});

newCardButtonElement.addEventListener("click", () => {
  addCardPopup.open();
  addCardForm.resetValidation();
});

popupOpenEditAvatarLink.addEventListener("click", () => {
  editAvatarPopup.open();
  editAvatarForm.resetValidation();
});
