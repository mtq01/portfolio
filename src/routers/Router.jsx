import { BrowserRouter, Routes, Route } from "react-router-dom";

// import nav & footer component
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

// import pages
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter basename={`/${portfolio}`}>
      <div className="site-wrapper">
        {/* jump to content - screen reader*/}
        <a id="screen-reader-text" href="#main-content">
          Skip to content
        </a>

        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
