import { createContext, useState, useContext, useCallback } from "react";
import { LOG_TYPES, generateHexId } from "../../../constants";

const ActivityLogContext = createContext();

export const ActivityLogProvider = ({ children }) => {
  const [logs, setLogs] = useState([
    {
      id: "init-1",
      msg: "SYSTEM_BOOT: Mike's Portfolio v2.0",
      type: LOG_TYPES.INFO,
      time: new Date(),
    },
    {
      id: "init-2",
      msg: "READY: Initializing UI modules and Project Grid...",
      type: LOG_TYPES.INFO,
      time: new Date(),
    },
  ]);

  const [isSystemHealthy, setIsSystemHealthy] = useState(true);
  // user roles 'guest' or 'admin'
  const [userRole, setUserRole] = useState("guest");

  const addLog = useCallback((message, type = LOG_TYPES.INFO) => {
    // generates a hex key for all logs
    const hex = generateHexId();

    const newLog = {
      // generate collision resistant ID
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      msg: `[${hex}] ${message}`,
      // type = 'success', 'info', or 'error' from constants.js
      type: type,
      time: new Date(),
    };
    // keep max 15 logs to prevent lag
    setLogs((prevLogs) => [newLog, ...prevLogs].slice(0, 15));
  }, []);

  // system health toggle (simulated) - lives here rather than per-page
  // since it's just a context-state helper, not page-specific logic.
  // reads isSystemHealthy from closure (not a functional setState updater)
  // since addLog is a side effect - StrictMode double-invokes updater
  // functions in dev, which would double-log if addLog lived in one
  const toggleSystemHealth = useCallback(() => {
    if (isSystemHealthy) {
      setIsSystemHealthy(false);
      addLog("CRITICAL: API Connect Lost (Simulated)", LOG_TYPES.ERROR);
    } else {
      setIsSystemHealthy(true);
      addLog(
        "System: Connection Restored. Re-syncing data...",
        LOG_TYPES.SUCCESS,
      );
    }
  }, [isSystemHealthy, addLog]);

  return (
    <ActivityLogContext.Provider
      value={{
        logs,
        addLog,
        isSystemHealthy,
        setIsSystemHealthy,
        toggleSystemHealth,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </ActivityLogContext.Provider>
  );
};

export const useActivityLog = () => useContext(ActivityLogContext);
