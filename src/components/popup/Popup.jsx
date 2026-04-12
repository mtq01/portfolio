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
              <h2 id="popup-title">Switch to Admin Mode</h2>
              <p>
                Your current user role is set to: <strong>Guest</strong>
              </p>
              <p>
                Click the toggle button in the navbar to enable{" "}
                <strong>Admin</strong> access.
              </p>

              <p>
                This purpose of this feature is to simulate different types of
                available content based on <strong>user roles</strong>.
              </p>

              <p>
                This is a Front End project only and has no database for storage.
              </p>
            </>
          ) : (
            // admin: popup content
            <>
              <h2 id="popup-title">{title}</h2>
              {Array.isArray(description) ? (
                <div className="popup-description">
                  {description.map((block, i) => {
                    if (block.type === "heading")
                      return (
                        <p key={i}>
                          <strong>{block.text}</strong>
                        </p>
                      );
                    if (block.type === "code")
                      return (
                        <pre key={i}>
                          <code>{block.text}</code>
                        </pre>
                      );
                    return <p key={i}>{block.text}</p>;
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
