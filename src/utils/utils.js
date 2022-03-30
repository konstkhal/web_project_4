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
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

/* -------------------------------------------------------------------------- */
/*                              Export everything                             */
/* -------------------------------------------------------------------------- */
