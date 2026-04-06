import ActivityLogUI from "../activity-log/ActivityLogUI";

function SystemMonitor({ isSystemHealthy, toggleSystemHealth }) {
  return (
    <aside className="aside-container border-radius box-shadow">
      <div
        className="aside-header-group"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.25rem 0 0.5rem 0",
        }}
      >
        <h2 className="aside-title" style={{ margin: 0 }}>
          Activity Log
        </h2>

        {/* live / offline toggle */}
        <div
          onClick={toggleSystemHealth}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 8px",
            background: "#1a1a1a",
            borderRadius: "20px",
            border: `1px solid ${isSystemHealthy ? "#00ff8c33" : "#ff4d4d33"}`,
          }}
        >
            {/* live: flashing green, offline: solid red */}
          <span
            className={`dot green ${isSystemHealthy ? "green blink" : "red"}`}
            aria-hidden="true"
          ></span>
          <span
            style={{
              fontSize: "0.6rem",
              color: isSystemHealthy ? "#00ff8c" : "#ff4d4d",
              fontWeight: "bold",
            }}
          >
            {isSystemHealthy ? "LIVE" : "OFFLINE"}
          </span>
        </div>
      </div>
      <ActivityLogUI />
    </aside>
  );
}

export default SystemMonitor;
