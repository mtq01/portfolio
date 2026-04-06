import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { useLocation } from "react-router-dom";

function Header() {
    const { isSystemHealthy } = useActivityLog();
    const location = useLocation();

    const getPathName = () => {
        const path = location.pathname;
        if (path === "/") return " HOME / PROJECTS";
        if (path === "/about") return " ABOUT";
        if (path === "/contact") return " CONTACT";
        return "UNKNOWN";
    }

    return (
        <header className="site-header">
            <div className="header-left">
                <span className="system-path">DASHBOARD / </span>
                <h3 className="page-title">{getPathName()}</h3>
            </div>

            <div className="header-right">
                <div className="user-meta">
                    <h3 className="my-name">Mike</h3>
                    <span className="user-role">Front-End Developer</span>
                </div>
                {/* A tiny status pulse in the header ties it all together */}
                <div className={`header-status ${isSystemHealthy ? 'online' : 'degraded'}`}>
                    {isSystemHealthy ? "SYS_OK" : "SYS_ERR"}
                </div>
            </div>
        </header>
    );
}

export default Header;