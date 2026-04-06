import { useState, useEffect } from "react";
import Popup from "../popup/Popup.jsx";
import { useActivityLog } from "../activity-log/context/ActivityLogContext.jsx";
import { projects } from "../../data/projects.js";
import { LOG_TYPES } from "../../constants.js";
import "./main-content.css";
import SystemMonitor from "../aside/SystemMonitor.jsx";

import ProjectTiles from "../project-tiles/ProjectTiles.jsx";
import Hero from "../hero/Hero.jsx";
import ProjectCard from "../project-card/ProjectCard.jsx";

function MainContent() {
  const [active, setActive] = useState("cinemax");
  const [activeCard, setActiveCard] = useState(null); // { title, description }
  const { isSystemHealthy, setIsSystemHealthy, addLog, userRole } =
    useActivityLog();
  const current = projects[active];

  // log: project tabs
  useEffect(() => {
    addLog(`Database: Initializing ${current.title} Module...`, LOG_TYPES.INFO);
    addLog(
      `Success: Loaded ${current.features.length} documentation nodes for ${current.title}`,
      LOG_TYPES.SUCCESS,
    );
  }, [active, addLog]); // runs each time the active project changes

  // system health toggle (simulated)
  const toggleSystemHealth = () => {
    if (isSystemHealthy) {
      setIsSystemHealthy(false);
      addLog("CRITICAL: API Conntect Lost (Simulated)", LOG_TYPES.ERROR);
    } else {
      setIsSystemHealthy(true);
      addLog(
        "System: Connection Restored. Re-syncing data...",
        LOG_TYPES.SUCCESS,
      );
    }
  };

  return (
    // .site-main is in App.css (where the main site layout is created)
    <main className={`site-main ${!isSystemHealthy ? "system-failure" : ""}`}>
      {/* Main Container */}
      <div className="main-container">
        {/* Project Tiles: Navigation */}
        <ProjectTiles
          projects={projects}
          active={active}
          setActive={setActive}
        />

        {/* Hero Card */}
        <Hero project={current} />

        {/* Aside: Activity Log */}
        <SystemMonitor
          isSystemHealthy={isSystemHealthy}
          toggleSystemHealth={toggleSystemHealth}
        />

        {/* Project Cards */}
        <ProjectCard
          cards={current.cards}
          setActiveCard={setActiveCard}
          isSystemHealthy={isSystemHealthy}
          userRole={userRole}
        />

        <footer className="grid-footer">&#169;Copyright 2026</footer>
      </div>

      {/* Popup Component */}
      <Popup
        isOpen={activeCard !== null}
        title={activeCard?.title}
        description={activeCard?.description}
        onClose={() => setActiveCard(null)}
      />
    </main>
  );
}

export default MainContent;
