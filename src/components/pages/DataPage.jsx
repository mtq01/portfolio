import { useState, useEffect } from "react";
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES } from "../../constants";
import { appTitle } from "../../globals/globals.js";
import ProjectTiles from "../project-tiles/ProjectTiles";
import Hero from "../hero/Hero";
import SystemMonitor from "../aside/SystemMonitor";
import ProjectCard from "../project-card/ProjectCard";
import Popup from "../popup/Popup";

// shared shell for Home & About: both page over a data set (projects or
// strengths) using the same tiles/hero/log/card/popup layout
function DataPage({ data, defaultActiveKey, pageLabel }) {
  const [active, setActive] = useState(defaultActiveKey);
  const [activeCard, setActiveCard] = useState(null);
  const { isSystemHealthy, setIsSystemHealthy, addLog, userRole } =
    useActivityLog();
  const current = data[active];

  // dynamic page title
  useEffect(() => {
    document.title = `${pageLabel} | ${appTitle}`;
  }, [pageLabel]);

  // log: project tabs
  useEffect(() => {
    addLog(`Database: Initializing ${current.title} Module...`, LOG_TYPES.INFO);
    addLog(
      `Success: Loaded ${current.cards.length} documentation nodes for ${current.title}`,
      LOG_TYPES.SUCCESS,
    );
  }, [active, addLog, current.cards.length, current.title]); // runs each time the active tile changes

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
      {/* Tiles: Navigation */}
      <ProjectTiles projects={data} active={active} setActive={setActive} />

      {/* Hero Card */}
      <Hero project={current} />

      {/* Aside: Activity Log */}
      <SystemMonitor
        isSystemHealthy={isSystemHealthy}
        toggleSystemHealth={toggleSystemHealth}
      />

      {/* Cards */}
      <ProjectCard
        cards={current.cards}
        setActiveCard={setActiveCard}
        isSystemHealthy={isSystemHealthy}
        userRole={userRole}
      />

      {/* Popup */}
      <Popup
        isOpen={activeCard !== null}
        isLocked={activeCard?.isLocked}
        title={activeCard?.title}
        description={activeCard?.description}
        onClose={() => setActiveCard(null)}
      />
    </>
  );
}

export default DataPage;
