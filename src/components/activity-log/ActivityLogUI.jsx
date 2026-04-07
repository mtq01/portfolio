import { useEffect } from "react";
import { useActivityLog } from "./context/ActivityLogContext";
import { LOG_TYPES, getRandomLog } from "../../constants";
import "../activity-log/activity-log.css";

// ++++++++++ log ui component
const ActivityLogUI = () => {
  const { logs, addLog, isSystemHealthy } = useActivityLog();

  // success log (runs once on mount)
  useEffect(() => {
    addLog("Activity Log Module Linked Successfully", LOG_TYPES.SUCCESS);
  }, [addLog]);

  // errors (simulated)
  useEffect(() => {
    // initial error (timeout after 5s when offline)
    const initialError = setTimeout(() => {
      addLog(
        "LATENCY_WARNING: Response time exceeding 500ms (Simulated)",
        LOG_TYPES.ERROR,
      );
    }, 25000);

    // pulse error (12% chance of running when offline)
    const pulseError = setInterval(() => {
      if (Math.random() > 0.85) {
        addLog(getRandomLog(LOG_TYPES.ERROR), LOG_TYPES.ERROR);
      } else {
        addLog(getRandomLog(LOG_TYPES.INFO), LOG_TYPES.INFO);
      }
    }, 50000);

    // cleanup: kills old timers before starting new ones
    return () => {
      clearTimeout(initialError);
      clearInterval(pulseError);
    };
  }, [addLog]);

  return (
    <div className="nav-activity-log" aria-label="System Activity Monitor">
      {/* status bar */}
      <div className="api-status-bar">
        {/* bigComm: reacts to the API health */}
        <div
          className="status-item"
          title={!isSystemHealthy ? "Offline" : "Online"}
        >
          <span className={`dot ${!isSystemHealthy ? "red" : "green"}`}></span>
          <small>
            Database: {isSystemHealthy ? "Online" : "Offline"}
            <span className="sr-only">
              {!isSystemHealthy ? "Offline" : "Online"}
            </span>
          </small>
        </div>

        {/* gesso: reacts to the system state */}
        <div
          className="status-item"
          title={isSystemHealthy ? "Searching for Connection" : "System Online"}
        >
          <span
            className={`dot green ${!isSystemHealthy ? "yellow blink" : "green"}`}
            aria-hidden="true"
          ></span>
          <small>
            System: {isSystemHealthy ? "Stable" : "Retrying"}
            <span className="sr-only">
              {!isSystemHealthy ? "Searching for Connection" : "Online"}
            </span>
          </small>
        </div>
      </div>

      <div
        className="log-scroll"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {logs.map(({ id, type, time, msg }) => (
          <div
            key={id}
            className={`log-entry ${type ? type.toLowerCase() : LOG_TYPES.INFO}`}
            role="listitem"
          >
            {/* log timestamp */}
            <span className="log-time" aria-label={`Logged at ${time}`}>
              [
              {new Date(time).toLocaleTimeString([], {
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
              ]
            </span>{" "}
            {/* log msg */}
            <span className="log-msg">{msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLogUI;
