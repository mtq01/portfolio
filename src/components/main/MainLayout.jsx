import { Outlet } from "react-router-dom";
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import "./mainlayout.css"; 

function MainLayout() {
  const { isSystemHealthy } = useActivityLog();

  return (
    <div className="base-grid">
      <Nav />
      <Header />
      
      {/* site shell (holds components) */}
      <main className={`site-main ${!isSystemHealthy ? "system-failure" : ""}`}>
        <div className="main-container">
          
          {/* home, about, contact appear here based on the url in browser */}
          <Outlet />
          
          <footer className="grid-footer">©Copyright 2026</footer>
        </div>
      </main>
    </div>
  );
}

export default MainLayout;