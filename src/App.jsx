// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivityLogProvider } from "./components/activity-log/context/ActivityLogContext";
import MainLayout from "./components/main/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import { useEffect } from "react";
// import ActivityLogUI from "./components/activity-log/ActivityLogUI";

function App() {
  // dynamic page title
  useEffect(() => {
    document.title = `emburr`;
  }, []);

return (
    <ActivityLogProvider>
      <BrowserRouter>
        <Routes>
          {/* parent: outlet route (render main layout 1st */}
          <Route element={<MainLayout />}>
            {/* children: render unique child layouts 2nd */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ActivityLogProvider>
  );
}

export default App;
