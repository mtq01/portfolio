import { useState, useEffect } from "react";
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { projects } from "../../data/site-data";
import { LOG_TYPES } from "../../constants";
import { appTitle } from "../../globals/globals.js";
import ProjectTiles from "../project-tiles/ProjectTiles";
import Hero from "../hero/Hero";
import SystemMonitor from "../aside/SystemMonitor";
import ProjectCard from "../project-card/ProjectCard";
import Popup from "../popup/Popup";



function Home() {
  const [active, setActive] = useState("cinemax");
  const [activeCard, setActiveCard] = useState(null);
  const { isSystemHealthy, setIsSystemHealthy, addLog, userRole } = useActivityLog();
  const current = projects[active];

  // dynamic page title
  useEffect(() => {
    document.title = `Home | ${appTitle}`;
  }, []);

  // log: project tabs
  useEffect(() => {
    addLog(`Database: Initializing ${current.title} Module...`, LOG_TYPES.INFO);
    addLog(
      `Success: Loaded ${current.contributors.length} documentation nodes for ${current.title}`,
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
    <>

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

      {/* Popup Component */}
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

export default Home;
