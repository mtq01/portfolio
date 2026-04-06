// useState
import { useState } from "react";
// import activity log hooK
import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { LOG_TYPES } from "../../constants";
// Stylesheet
import "./nav.css";

const palette = {
  darkMode: "Dark",
  lightMode: "Light",
};

function Nav() {
  const [lightToggle, setLightToggle] = useState("darkMode");
  const { addLog, isSystemHealthy, userRole, setUserRole } = useActivityLog();
  const [activeTab, setActiveTab] = useState("Home");

  const handleThemeToggle = () => {
    const newMode = lightToggle === "darkMode" ? "lightMode" : "darkMode";
    setLightToggle(newMode);
    const logMsg = !isSystemHealthy
      ? `UI_Local: Theme switched to ${palette[newMode]} (Sync pending...)`
      : `Theme switched to ${palette[newMode]} mode`;
    addLog(logMsg, LOG_TYPES.SUCCESS);
  };

  const handleNavClick = (target) => {
    setActiveTab(target);
    addLog(`Redirecting to ${target.toLowerCase()}`, LOG_TYPES.INFO);
  };

  const handleRoleToggle = () => {
    const newRole = userRole === "guest" ? "developer" : "guest";
    setUserRole(newRole);
    addLog(
      `Security: Access Level changed to ${newRole.toUpperCase()}`,
      LOG_TYPES.SECURITY,
    );
  };

  return (
    <nav className="site-nav">
      <img src="/src/assets/react.svg" alt="logo" className="site-logo" />

      {/* dashboard */}
      <ul className="nav-link-container">
        <li onClick={() => handleNavClick("dashboard")}>
          <div className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}>
            <svg viewBox="0 -960 960 960" className="nav-icon">
              <path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="nav-icon-title">Dashboard</span>
          </div>
        </li>

        {/* about */}
        <li onClick={() => handleNavClick("about")}>
          <div className={`nav-link ${activeTab === "about" ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="M360-120v-200q-62-5-121.5-14T120-360l20-80q83 23 168 31.5t172 8.5q86 0 171-8.5T820-440l20 80q-60 17-119.5 26T600-320v200H360Zm120-320q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z" />
            </svg>
            <span className="nav-icon-title">About</span>
          </div>
        </li>

        {/* contact */}
        <li onClick={() => handleNavClick("contact")}>
          <div
            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="nav-icon-title">Contact</span>
          </div>
        </li>

        {/* githuub */}
        <li onClick={() => handleNavClick("github")}>
          <div className={`nav-link ${activeTab === "github" ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="nav-icon-title">GitHub</span>
          </div>
        </li>

        {/* email */}
        <li onClick={() => handleNavClick("email")}>
          <div className={`nav-link ${activeTab === "email" ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="nav-icon"
            >
              <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="nav-icon-title">Email</span>
          </div>
        </li>
      </ul>

      <div className="nav-controls">
        <span className="control-label">Controls</span>

        {/* user roles: choose guest / developer */}
        <div onClick={handleRoleToggle}>
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
        <div
          className="color-palette nav-link-container"
          onClick={handleThemeToggle}
        >
          <div className="nav-link">
            {lightToggle === "darkMode" ? (
              <svg viewBox="0 -960 960 960" className="nav-icon">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            ) : (
              <svg viewBox="0 -960 960 960" className="nav-icon">
                <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            )}
            <span className="nav-icon-title">{palette[lightToggle]}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

{
  /* GitHub Icon */
}
// <li className="flex-col-center">
//   <div className="nav-link">
//     <svg
//       viewBox="0 0 128 128"
//       xmlns="http://www.w3.org/2000/svg"
//       className="nav-icon"
//     >
//       <path d="M56.7937 84.9688C44.4187 83.4688 35.7 74.5625 35.7 63.0313C35.7 58.3438 37.3875 53.2813 40.2 49.9063C38.9812 46.8125 39.1687 40.25 40.575 37.5313C44.325 37.0625 49.3875 39.0313 52.3875 41.75C55.95 40.625 59.7 40.0625 64.2937 40.0625C68.8875 40.0625 72.6375 40.625 76.0125 41.6563C78.9187 39.0313 84.075 37.0625 87.825 37.5313C89.1375 40.0625 89.325 46.625 88.1062 49.8125C91.1062 53.375 92.7 58.1563 92.7 63.0313C92.7 74.5625 83.9812 83.2813 71.4187 84.875C74.6062 86.9375 76.7625 91.4375 76.7625 96.5938L76.7625 106.344C76.7625 109.156 79.1062 110.75 81.9187 109.625C98.8875 103.156 112.2 86.1875 112.2 65.1875C112.2 38.6563 90.6375 17 64.1062 17C37.575 17 16.2 38.6562 16.2 65.1875C16.2 86 29.4187 103.25 47.2312 109.719C49.7625 110.656 52.2 108.969 52.2 106.438L52.2 98.9375C50.8875 99.5 49.2 99.875 47.7 99.875C41.5125 99.875 37.8562 96.5 35.2312 90.2188C34.2 87.6875 33.075 86.1875 30.9187 85.9063C29.7937 85.8125 29.4187 85.3438 29.4187 84.7813C29.4187 83.6563 31.2937 82.8125 33.1687 82.8125C35.8875 82.8125 38.2312 84.5 40.6687 87.9688C42.5437 90.6875 44.5125 91.9063 46.8562 91.9063C49.2 91.9063 50.7 91.0625 52.8562 88.9063C54.45 87.3125 55.6687 85.9063 56.7937 84.9688Z" />
//     </svg>
//     <span className="nav-icon-title">GitHub</span>
//   </div>
// </li>

{
  /* Email Icon */
}
// <li className="flex-col-center">
//   <div className="nav-link">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 -960 960 960"
//       className="nav-icon"
//     >
//       <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
//     </svg>
//     <span className="nav-icon-title">Email</span>
//   </div>
// </li>
