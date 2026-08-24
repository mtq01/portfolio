import { BrowserRouter, Routes, Route } from "react-router-dom";
import { emburr } from "./globals/globals.js";
import { ActivityLogProvider } from "./components/activity-log/context/ActivityLogContext";
import MainLayout from "./components/main/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import { useEffect } from "react";

function App() {
  // dynamic page title
  useEffect(() => {
    document.title = `emburr`;
  }, []);

return (
    <ActivityLogProvider>
      <BrowserRouter basename="/">
        <Routes>
          {/* parent: outlet route (render main layout 1st */}
          <Route element={<MainLayout />}>
            {/* children: render unique child layouts 2nd */}
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ActivityLogProvider>
  );
}

export default App;
