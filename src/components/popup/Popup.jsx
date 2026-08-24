import { useEffect } from "react";
import { createPortal } from "react-dom";
import Hero from "../hero/Hero";
import { ROLES } from "../../constants";
import "../popup/popup.css";

// renders a full project/strength: a Hero header (visible to everyone)
// plus the folded write-up sections from `project.cards`, gated behind
// Admin - Guests see the header and a locked notice in place of the
// technical breakdown
const Popup = ({ project, userRole, onClose }) => {
  useEffect(() => {
    const escKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (project) window.addEventListener("keydown", escKeyDown);
    return () => window.removeEventListener("keydown", escKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isAdmin = userRole === ROLES.ADMIN;

  return createPortal(
    <div
      className="popup-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
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
          <div className="popup-hero">
            <Hero project={project} />
          </div>

          {isAdmin ? (
            project.cards.map((card, i) => (
              <section key={i} className="popup-section">
                <h2 className="popup-section-title">{card.title}</h2>
                {Array.isArray(card.adminDescription) ? (
                  <div className="popup-description">
                    {card.adminDescription.map((block, j) => {
                      if (block.type === "heading")
                        return (
                          <p key={j}>
                            <strong>{block.text}</strong>
                          </p>
                        );
                      if (block.type === "code")
                        return (
                          <pre key={j}>
                            <code>{block.text}</code>
                          </pre>
                        );
                      return <p key={j}>{block.text}</p>;
                    })}
                  </div>
                ) : (
                  <p>{card.adminDescription}</p>
                )}
              </section>
            ))
          ) : (
            <section className="popup-section">
              <h2>Switch to Admin Mode</h2>
              <p>
                Your current user role is set to: <strong>Guest</strong>
              </p>
              <p>
                Click the toggle button in the navbar to enable{" "}
                <strong>Admin</strong> access and view the full technical
                breakdown for this project.
              </p>
              <p>
                This is a Front End project only and has no database for storage.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>,
    // part of createPortal
    document.body,
  );
};

export default Popup;
