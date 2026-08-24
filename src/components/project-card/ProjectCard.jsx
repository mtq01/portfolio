import "./project-card.css";

function ProjectCard({ items, onSelect, isSystemHealthy, heading }) {
  return (
    <section className="card-container">
      <h1 className="card-title">{heading}</h1>

      {Object.entries(items).map(([key, entry]) => {
        const { title, caption, heroImg } = entry;

        const cardLabel = !isSystemHealthy
          ? `${title}: connection lost, details unavailable`
          : `${title}: View Details`;

        return (
          <button
            type="button"
            key={key}
            className={`project-grid-card border-radius box-shadow project-card-overlay ${!isSystemHealthy ? "card-disabled" : ""}`}
            aria-label={cardLabel}
            aria-disabled={!isSystemHealthy}
            onClick={() => onSelect(key)}
          >
            {isSystemHealthy ? (
              <>
                <img src={heroImg[0]} alt={title} className="card-img" />
                <div className="card-content">
                  <h2 className="card-header">{title}</h2>
                  <p className="card-description">{caption}</p>
                  <div className="card-cta-container">
                    <span className="view-link-btn">View Details</span>
                  </div>
                </div>
              </>
            ) : (
              /* offline view ('live' toggle) */
              <div className="card-error-state">
                <div className="offline-status-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="offline-status-icon"
                    aria-hidden="true"
                  >
                    <path d="M790-56 414-434q-47 11-87.5 33T254-346l-84-86q32-32 69-56t79-42l-90-90q-41 21-76.5 46.5T84-516L0-602q32-32 66.5-57.5T140-708l-84-84 56-56 736 736-58 56Zm-381-93.5Q380-179 380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120q-42 0-71-29.5ZM716-358l-29-29-29-29-144-144q81 8 151.5 41T790-432l-74 74Zm160-158q-77-77-178.5-120.5T480-680q-21 0-40.5 1.5T400-674L298-776q44-12 89.5-18t92.5-6q142 0 265 53t215 145l-84 86Z" />
                  </svg>
                </div>
                <h2 className="data-link-severed">Connection Lost</h2>
                <p className="card-error-state-details">
                  Project details are unavailable when the system is offline. (Simulated)
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
