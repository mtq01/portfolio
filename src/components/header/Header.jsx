import { useActivityLog } from "../activity-log/context/ActivityLogContext";
import { useLocation } from "react-router-dom";
import "./header.css";

function Header() {
    const { isSystemHealthy } = useActivityLog();
    const location = useLocation();

const getPathName = () => {
    // update "breadcrumbs" on each page
    const path = location.pathname.slice(1).toUpperCase();
    
    // path empty?, use the default string (homepage)
    return " " + (path || "HOME / Projects");
}

    return (
        <header className="site-header">
            <div className="header-left">
                {/* <span className="system-path">DASHBOARD / </span> */}
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