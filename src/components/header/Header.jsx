import { useActivityLog } from "../activity-log/context/ActivityLogContext";

function Header() {
    const { isSystemHealthy } = useActivityLog();

    return (
        <header className="site-header">
            <div className="header-left">
                <span className="system-path">DASHBOARD / </span>
                <h3 className="page-title">PROJECT_FILES</h3>
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