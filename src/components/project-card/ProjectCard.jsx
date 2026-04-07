import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES, ROLES } from "../../constants";

function ProjectCard({ cards, setActiveCard, isSystemHealthy, userRole }) {
  const { addLog } = useActivityLog();

  return (
    <section className="card-container">
      <h2 className="card-title">Problems & Solutions</h2>

      {cards.map((card, index) => {
        // destructuring
        const { title, description, detailsImg } = card;

        // determine the class name dynamically based on the index
        const cardClasses = ["card-one", "card-two", "card-three"];
        const specificClass = cardClasses[index] || "card-item";

        return (
          <div
            key={index}
            className={`${specificClass} border-radius box-shadow card-overlay ${!isSystemHealthy ? 'card-disabled' : ''}`}
            onClick={() => {
              if (!isSystemHealthy) {
                addLog(
                  "Warning: Cannot expand documentation while system is OFFLINE",
                  LOG_TYPES.ERROR,
                );
                return; // pevent popup from opening
              }
              setActiveCard(card);
              addLog(
                `System: Expanded technical breakdown for "${title}"`,
                LOG_TYPES.INFO,
              );
            }}
          >
            {isSystemHealthy ? (
              <>
                <img src={detailsImg} alt={title} className="card-img" />
                <div className="card-content">
                  <h3 className="card-header">
                    {userRole === ROLES.ADMIN ? `Module: ${title}` : title}
                  </h3>
                  <p className="card-description">
                    {userRole === ROLES.ADMIN
                      ? `Technical Specs: ${description.substring(0, 40)}... [View Source]`
                      : description}
                  </p>
                  <div
                    className="card-footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button className="view-link-btn">
                      {userRole === ROLES.ADMIN
                        ? "Inspect Code"
                        : `View Solution`}
                    </button>
                    {userRole === ROLES.ADMIN && (
                      <span className="stable-version">v1.0.4-stable</span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* offline view */
              <div className="card-error-state">
                <div className="offline-emoji">📡</div>
                <h3 class="data-link-severed">
                  Data Link Severed
                </h3>
                <p className="card-error-state-details" >
                  Detailed project schematics are unavailable in offline mode.
                </p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ProjectCard;
