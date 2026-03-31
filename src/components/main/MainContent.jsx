// Import State
import { useState } from "react";
// Import Popup
import Popup from "../popup/Popup.jsx";
// Import Styles
import "./main-content.css";

// Move this to its own file after testing
const projects = {
  cinemax: {
    heroImg: ["/src/assets/toy-story.jpg"],
    title: "Cinemax",
    caption: "A collaborative React movie database built for film lovers.",
    features: [
      "Hero Carousel",
      "Trailer Popup",
      "Routing",
      "API",
      "Favorites",
      "Card Layout",
      "Regex",
    ],
    contributors: ["Mike", "Mahtab", "Michelle"],
    cards: [
      {
        title: "Routing",
        detailsImg: "/src/assets/street-fighter.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Trailer Popup",
        detailsImg: "/src/assets/street-fighter.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Carousel",
        detailsImg: "/src/assets/street-fighter.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
    ],
  },
  cloudyToys: {
    heroImg: ["/src/assets/street-fighter.jpg"],
    title: "Cloudy Toys",
    caption: "A collaborative React movie database built for film lovers.",
    features: [
      "Feature One",
      "Feature Two",
      "Feature Three",
      "Feature Four",
      "Feature Five",
    ],
    cards: [
      {
        title: "Custom Post Types",
        detailsImg: "/src/assets/toy-story.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Non-Synced Patterns",
        detailsImg: "/src/assets/toy-story.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Card Three",
        detailsImg: "/src/assets/toy-story.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
    ],
  },
  portfolio: {
    heroImg: ["/src/assets/pexels-pavel-danilyuk-7234276.jpg"],
    title: "Portfolio",
    caption: "A collaborative React movie database built for film lovers.",
    features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
    cards: [
      {
        title: "Card A",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Card B",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
      {
        title: "Card C",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy, fixing a z-index issue where the navbar would sit on top of the popup.",
      },
    ],
  },
};

function MainContent() {
  const [active, setActive] = useState("cinemax");
  const [activeCard, setActiveCard] = useState(null); // { title, description }
  const current = projects[active];

  return (
    // .site-main is in App.css (where the main site layout is created)
    <main className="site-main">
      {/* Main Container */}
      <div className="main-container">
        {/* Project Tiles */}
        <div className="project-tile-container">
          {Object.keys(projects).map((key) => {
            let tileClass = "project-tile";
            if (active === key) {
              tileClass = "project-tile active";
            }
            return (
              <p key={key} className={tileClass} onClick={() => setActive(key)}>
                {projects[key].title}
              </p>
            );
          })}
        </div>

        {/* Hero Section */}
        <section className="hero border-radius box-shadow overlay">
          <img src={current.heroImg} alt={current.title} className="hero-img" />

          <div className="hero-text">
            <h1 className="hero-title">{current.title}</h1>
            <p className="hero-caption">{current.caption}</p>
          </div>
        </section>

        {/* Aside - Features*/}
        <aside className="aside-container border-radius box-shadow">
          <h2 className="aside-title">Features</h2>
          {current.features.map((feature, i) => (
            <div key={i} className="aside-block border-radius">
              {feature}
            </div>
          ))}

          {current.contributors && (
            <>
              {current.contributors.map((contributor, i) => (
                <div key={i} className="aside-block border-radius">
                  <p>{contributor} <sup>Team</sup></p>
                  
                </div>
              ))}
            </>
          )}
        </aside>

        {/* Card Section */}
        <section className="card-container">
          <h2 className="card-title">Problems & Solutions</h2>

          <div
            className="card-one border-radius box-shadow card-overlay"
            onClick={() => setActiveCard(current.cards[0])}
          >
            <img
              src={current.cards[0].detailsImg}
              alt={current.cards[0].title}
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-header">{current.cards[0].title}</h3>
              <p className="card-description">{current.cards[0].description}</p>
              <a href="#">View Routing Solution</a>
            </div>
          </div>

          <div
            className="card-two border-radius box-shadow card-overlay"
            onClick={() => setActiveCard(current.cards[1])}
          >
            <img
              src={current.cards[1].detailsImg}
              alt={current.cards[1].title}
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-header">{current.cards[1].title}</h3>
              <p className="card-description">{current.cards[1].description}</p>
              <a href="#">View Popup Solution</a>
            </div>
          </div>

          <div
            className="card-three border-radius box-shadow card-overlay"
            onClick={() => setActiveCard(current.cards[2])}
          >
            <img
              src={current.cards[2].detailsImg}
              alt={current.cards[2].title}
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-header">{current.cards[2].title}</h3>
              <p className="card-description">{current.cards[2].description}</p>
              <a href="#">View Popup Solution</a>
            </div>
          </div>
        </section>
        <footer className="grid-footer">&#169;Copyright 2026</footer>
      </div>

      {/* Popup Component */}
      <Popup
        isOpen={activeCard !== null}
        title={activeCard?.title}
        description={activeCard?.description}
        onClose={() => setActiveCard(null)}
      />
    </main>
  );
}

export default MainContent;
