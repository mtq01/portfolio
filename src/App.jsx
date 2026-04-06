import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import MainContent from "./components/main/MainContent";
import { ActivityLogProvider } from "./components/activity-log/context/ActivityLogContext";
import "./App.css";
import { useEffect } from "react";

function App() {
  // dynamic page title
  useEffect(() => {
    document.title = `emburr`;
  }, []);

  return (
    <div className="base-grid">
      <ActivityLogProvider>
        <Nav />
        <Header />
        <MainContent />
      </ActivityLogProvider>
    </div>
  );
}

export default App;
