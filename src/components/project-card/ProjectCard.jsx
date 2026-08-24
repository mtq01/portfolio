import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES, ROLES } from "../../constants";
import "./project-card.css";

function ProjectCard({ cards, setActiveCard, isSystemHealthy, userRole }) {
  const { addLog } = useActivityLog();

  return (
    <section className="card-container">
      <h2 className="card-title">Details</h2>

      {/* creates a new div for each card in the array & assigns a unique grid class to each (ex: card-one) */}
      {cards.map((card, index) => {
        // destructuring
        const { title, description, detailsImg, ctaText } = card;

        // match each card to its unique grid class based on the loop index (0 = card-one)
        const cardClasses = ["card-one", "card-two", "card-three"];
        const specificClass = cardClasses[index];

        const cardLabel = !isSystemHealthy
          ? `${title}: connection lost, details unavailable`
          : userRole !== ROLES.ADMIN
            ? `${title}: locked, admin access required`
            : `${title}: ${ctaText}`;

        return (
          <button
            type="button"
            key={index}
            // applies additional classes to the specificClass card
            className={`${specificClass} border-radius box-shadow project-card-overlay ${!isSystemHealthy ? "card-disabled" : ""}`}
            aria-label={cardLabel}
            aria-disabled={!isSystemHealthy}
            onClick={() => {
              if (!isSystemHealthy) {
                addLog(
                  "Warning: Cannot expand documentation while system is OFFLINE",
                  LOG_TYPES.ERROR,
                );
                return;
              }

              // if guest > error logged > popup opens with guest content (see Popup.jsx)
              if (userRole !== ROLES.ADMIN) {
                addLog(
                  "Denied: Admin privileges required to view solutions.",
                  LOG_TYPES.ERROR,
                );
                setActiveCard({ ...card, isLocked: true });
                return;
              } else {
                // if admin > action logged > popup opens with admin content
                setActiveCard({
                  ...card,
                  title: title,
                  description: card.adminDescription || card.description,
                });
                addLog(
                  `Success: Opened technical breakdown for "${title}"`,
                  LOG_TYPES.INFO,
                );
              }
            }}
          >
            {isSystemHealthy ? (
              <>
                <img src={detailsImg} alt={title} className="card-img" />
                <div className="card-content">
                  <h3 className="card-header">{title}</h3>
                  <p className="card-description">{description}</p>
                  {/* cta btn label & lock/unlock icon based on user role */}
                  <div className="card-cta-container">
                    <span className="view-link-btn">
                      {ctaText}
                    </span>
                    {userRole === ROLES.ADMIN ? (
                      // unlock icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="user-access-granted-icon"
                        aria-hidden="true"
                      >
                        <path d="M240-160h480v-400H240v400Zm296.5-143.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM240-160v-400 400Zm0 80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h280v-80q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720h-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Z" />
                      </svg>
                    ) : (
                      // lock icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="user-access-denied-icon"
                        aria-hidden="true"
                      >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm296.5-143.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                      </svg>
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* offline view ('live' toggle*/
              <div className="card-error-state">
                <div className="offline-status-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="offline-status-icon"
                    aria-hidden="true"
                  >
                  <path d="M790-56 414-434q-47 11-87.5 33T254-346l-84-86q32-32 69-56t79-42l-90-90q-41 21-76.5 46.5T84-516L0-602q32-32 66.5-57.5T140-708l-84-84 56-56 736 736-58 56Zm-381-93.5Q380-179 380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120q-42 0-71-29.5ZM716-358l-29-29-29-29-144-144q81 8 151.5 41T790-432l-74 74Zm160-158q-77-77-178.5-120.5T480-680q-21 0-40.5 1.5T400-674L298-776q44-12 89.5-18t92.5-6q142 0 265 53t215 145l-84 86Z"/>
                  </svg>
                </div>
                <h3 className="data-link-severed">Connection Lost</h3>
                <p className="card-error-state-details">
                  Additional details are unavailable when the system is offline. (Simulated)
                </p>
              </div>
            )}
          </button>
        );
      })}
    </section>
  );
}

export default ProjectCard;
