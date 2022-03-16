export const previewPopup = document.querySelector(".popup_type_preview");
export const previewPopupImage = document.querySelector(
  ".popup__preview-image"
);
export const previewPopupCloseButton = document.querySelector(
  ".popup__close-button_place_preview"
);
export const previewPopupDescription = document.querySelector(
  ".popup__description"
);

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKeyDown);
  popup.addEventListener("mousedown", handlePopupMouseDown);
}
/* -------------------------------------------------------------------------- */
/*                            Universal popup close                           */
/* -------------------------------------------------------------------------- */
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKeyDown);
  popup.removeEventListener("mousedown", handlePopupMouseDown);
}

previewPopupCloseButton.addEventListener("mousedown", () => {
  closePopup(previewPopup);
});

/* -------------------------------------------------------------------------- */
/*                          Escape key value CONST                       */
/* -------------------------------------------------------------------------- */

const ESC_BUTTON = "Escape";

/* -------------------------------------------------------------------------- */
/*                           Escape action function                           */
/* -------------------------------------------------------------------------- */
const handleEscapeKeyDown = (event) => {
  if (event.key === ESC_BUTTON) {
    event.preventDefault();
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

/* -------------------------------------------------------------------------- */
/*                             Mouseclick Handling                            */
/* -------------------------------------------------------------------------- */

function handlePopupMouseDown(event) {
  const popup = document.querySelector(".popup_opened");
  //console.log(event.target + " VS " + event.currentTarget);
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

/* -------------------------------------------------------------------------- */
/*                              Export everything                             */
/* -------------------------------------------------------------------------- */
