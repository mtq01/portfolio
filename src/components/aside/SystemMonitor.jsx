import ActivityLogUI from "../activity-log/ActivityLogUI";

function SystemMonitor({ isSystemHealthy, toggleSystemHealth }) {
  return (
    <aside className="aside-container border-radius box-shadow">
      <div className="aside-header-group">
        <h2 className="aside-title">Activity Log</h2>

        <div
          onClick={toggleSystemHealth}
          className={`system-monitor-toggle ${isSystemHealthy ? "live" : "offline"}`}
        >
          <span
            className={`dot ${isSystemHealthy ? "green blink" : "red"}`}
            aria-hidden="true"
          ></span>
          <span className="system-monitor-status">
            {isSystemHealthy ? "LIVE" : "OFFLINE"}
          </span>
        </div>
      </div>
      <ActivityLogUI />
    </aside>
  );
}

export default SystemMonitor;