import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES } from "../../constants";
import { appTitle } from "../../globals/globals.js";
import ProjectCard from "../project-card/ProjectCard";
import SystemMonitor from "../aside/SystemMonitor";
import Popup from "../popup/Popup";

// shared shell for Home & About: both page over a data set (projects or
// strengths) as a scrollable grid, with the selected item's details
// synced to the URL (detailPath/:id) and shown in a popup. indexPath is
// where the grid itself lives (e.g. "/" for Home) - not necessarily the
// same as detailPath (e.g. "/project"), which is only ever valid with an
// :id appended
function DataPage({ data, indexPath, detailPath, pageLabel, heading }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSystemHealthy, setIsSystemHealthy, addLog, userRole } =
    useActivityLog();
  const openItem = id ? data[id] : null;

  // dynamic page title
  useEffect(() => {
    document.title = `${pageLabel} | ${appTitle}`;
  }, [pageLabel]);

  const handleSelect = (key) => {
    if (!isSystemHealthy) {
      addLog(
        "Warning: Cannot view project details while system is OFFLINE",
        LOG_TYPES.ERROR,
      );
      return;
    }
    addLog(`Success: Opened details for "${data[key].title}"`, LOG_TYPES.INFO);
    navigate(`${detailPath}/${key}`);
  };

  const handleClose = () => navigate(indexPath);

  // system health toggle (simulated)
  const toggleSystemHealth = () => {
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
  };

  return (
    <>
      {/* Project/Strength grid */}
      <ProjectCard
        items={data}
        onSelect={handleSelect}
        isSystemHealthy={isSystemHealthy}
        heading={heading}
      />

      {/* Aside: Activity Log */}
      <SystemMonitor
        isSystemHealthy={isSystemHealthy}
        toggleSystemHealth={toggleSystemHealth}
      />

      {/* Popup: full details for the item matching the URL, if any */}
      <Popup project={openItem} userRole={userRole} onClose={handleClose} />
    </>
  );
}

export default DataPage;
