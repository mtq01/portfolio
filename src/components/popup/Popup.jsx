import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../popup/popup.css";

const Popup = ({ isOpen, onClose, title, description, isLocked }) => {
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
          {/* guest: popup content */}
          {isLocked ? (
            <>
              <h2 id="popup-title">Access Restricted!</h2>
              <p>
                This content is only available in <strong>Admin</strong> mode. Press the button in the sidebar to switch. No password is required.
              </p>

              <p>This is designed to simulate different types of available content based on a user role. This project is front end only and has no database for storage. </p>
            </>
          ) : (
            // admin: popup content
            <>
              <h2 id="popup-title">{title}</h2>
              {Array.isArray(description) ? (
                <div className="popup-description">
                  {description.map((block, i) => {
                    if (block.type === "heading") return <p key={i}><strong>{block.text}</strong></p>
                    if (block.type === "code") return <pre key={i}><code>{block.text}</code></pre>
                    return <p key={i}>{block.text}</p>
                  })}
                </div>
              ) : (
                <p>{description}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    // part of createPortal
    document.body,
  );
};

export default Popup;
