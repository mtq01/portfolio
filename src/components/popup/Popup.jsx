import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../popup/popup.css";

const Popup = ({ isOpen, onClose, title, description }) => {
  useEffect(() => {
    const escKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", escKeyDown);
    return () => window.removeEventListener("keydown", escKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="popup-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="popup-content">
          <h2 id="popup-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
