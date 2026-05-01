import { useState, useRef, useEffect } from "react";
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES } from "../../constants";
import { NavLink } from "react-router-dom";
import ContactDrawer from "../../components/contact-drawer/ContactDrawer";
import "./nav.css";

const palette = {
  darkMode: "Dark",
  lightMode: "Light",
};

function Nav() {
  const [lightToggle, setLightToggle] = useState("darkMode");
  const { addLog, isSystemHealthy, userRole, setUserRole } = useActivityLog();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const contactRef = useRef(null);

  // +++++ close contact drawer (click outside)
  useEffect(() => {
    if (!drawerOpen) return;
    const clickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [drawerOpen]);

  // +++++ theme toggle (light or dark)
  const handleThemeToggle = () => {
    const newMode = lightToggle === "lightMode" ? "darkMode" : "lightMode";
    setLightToggle(newMode);

    // add or remove attribute for toggle
    document.documentElement.setAttribute("data-theme", newMode);

    const logMsg = !isSystemHealthy
      ? `UI_Local: Theme switched to ${palette[newMode]} (Sync pending...)`
      : `Theme switched to ${palette[newMode]} mode`;
    addLog(logMsg, LOG_TYPES.SUCCESS);
  };

  // +++++ role toggle
  const handleRoleToggle = () => {
    const newRole = userRole === "guest" ? "admin" : "guest";
    setUserRole(newRole);
    addLog(
      `Security: Access Level changed to ${newRole.toUpperCase()}`,
      LOG_TYPES.SECURITY,
    );
  };

  return (
    <nav className="site-nav">
      <img src="/emburr-logo.png" alt="emburr by Mike " className="site-logo" />

      {/* home */}
      <ul className="nav-link-container">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => addLog("Accessing Home Page...", LOG_TYPES.INFO)}
          >
            <svg viewBox="0 -960 960 960" className="nav-icon">
              <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="nav-icon-title">Home</span>
          </NavLink>
        </li>

        {/* about */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => addLog("Accessing About Page...", LOG_TYPES.INFO)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="M360-120v-200q-62-5-121.5-14T120-360l20-80q83 23 168 31.5t172 8.5q86 0 171-8.5T820-440l20 80q-60 17-119.5 26T600-320v200H360Zm120-320q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z" />
            </svg>
            <span className="nav-icon-title">About</span>
          </NavLink>
        </li>

        {/* contact */}
        <li ref={contactRef} className="contact-nav-item">
          <button
            className={`nav-link ${drawerOpen ? "active" : ""}`}
            onClick={() => {
              setDrawerOpen((prev) => !prev);
              addLog("Accessing Contact Information...", LOG_TYPES.INFO);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            <span className="nav-icon-title">Contact</span>
          </button>
          {/* holds GitHub, LinkedIn & EMail links */}
          <ContactDrawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
        </li>
      </ul>

      <div className="nav-controls">
        <div className="nav-link-container">
          <span className="control-label">Controls</span>

          {/* user roles: choose guest / developer */}
          <div onClick={handleRoleToggle} tabIndex={0}>
            <div className="nav-link">
              <svg viewBox="0 -960 960 960" className="nav-icon">
                <path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z" />
              </svg>
              <span className={`nav-icon-title role-display role-${userRole}`}>
                {userRole.toUpperCase()}
              </span>
            </div>
          </div>

          {/* palette: choose light / dark mode */}
          <div className="color-palette" onClick={handleThemeToggle} tabIndex={0}>
            <div className="nav-link">
              {lightToggle === "darkMode" ? (
                <svg viewBox="0 -960 960 960" className="nav-icon">
                  {/* sun icon */}
                  <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              ) : (
                <svg viewBox="0 -960 960 960" className="nav-icon">
                  {/* moon icon */}
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              )}
              <span className="nav-icon-title">
                {lightToggle === "darkMode" ? "Light" : "Dark"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
