// ++++++++++ PROJECTS DATA ++++++++++
export const projects = {
  // key
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
        title: "Accessibility System",
        detailsImg: "/src/assets/street-fighter.jpg",
        ctaText: "View Accessibility Solution",
        description:
          "Z-index conflict buried the popup under the navbar.",
        // there has to be a better MF way to put the unique data each card... rn i loop thru this array in Popup.jsx
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Ran into a z-index issue that caused the popup to render inside the carousel's DOM hierarchy, creating a stacking context conflict. Even with a high z-index, the navbar sat on top of the popup and partially blocked it." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "After researching, I came across React's createPortal which renders the popup directly to document.body, decoupling it from the carousel's CSS. This allowed z-index to work as expected." },
        ]
      },
      {
        title: "API Security",
        detailsImg: "/src/assets/street-fighter.jpg",
        ctaText: "View API Security Solution",
        description:
          "Shipped with a visible API key, here's what we learned.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "We The TMDB API key was exposed directly in the request URL, meaning anyone inspecting network traffic could see and use it. This was a known issue identified during the project but couldn't be addressed before the deadline." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "A fix for this on the front end is moving the key to an Authorization token in the request header, which keeps it out of the URL and browser history. This still isn't perfect since true security requires a backend proxy and the frontend should call your own server, which calls the API using the key stored in an environment variable. On the frontend we can reduce exposure, but we can't fully protect a key on the client side." },
          {
            type: "code", text: `const fetchMovieData = async () => {
            const response = await fetch(
              \`\${movieDetails}\${movieId}\`,
              {
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer ' + apiReadToken
                }
              }
            );
            let data = await response.json();
            setMovieData(data);
          }` },

        ]
      },
      {
        title: "Trailer Popup",
        detailsImg: "/src/assets/street-fighter.jpg",
        ctaText: "View Popup Solution",
        description:
          "Built for keyboard users, screen readers, and mobile from the ground up.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Accessibility is often treated as an afterthought that includes a few alt tags and nothing else. Building a React SPA that works for keyboard users, screen readers, and mobile users requires deliberate decision making at every layer of the app." },
          { type: "paragraph", text: "We all know that every page needs an H1, but our carousel already used H2s for each movie title. Adding a visible H1 above the carousel would have been redundant and visually awkward." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Added a consistent accessibility pattern across the entire application. Is it perfect? No. Is it good? Yes! Especially for a team still considered 'junior developers.'' It includes a skip-to-content link that's wired to every pages content, `aria-live` labels for dynamic loading and error states, `aria-expanded` and `aria-controls` on all interactive toggles, decorative SVGs are hidden from screen readers, carousel focus management that prevents keyboard users from tabbing into off-screen slides, and modal dialogs with proper role and focus handling." },
          { type: "paragraph", text: "We used the `sr-only` CSS class to include an H1 that's visually hidden but still present in the DOM, giving screen readers a proper page title without affecting the visual layout." },
        ]
      },
    ],
  },
  // key
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
  // key
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




// ++++++++++ ABOUT DATA ++++++++++
export const strengths = {
  // key
  collaborative: {
    heroImg: ["/src/assets/toy-story.jpg"],
    title: "Collaborative",
    ctaText: "About Page",
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
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Trailer Popup",
        detailsImg: "/src/assets/street-fighter.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Carousel",
        detailsImg: "/src/assets/street-fighter.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
    ],
  },
  // key
  Communication: {
    heroImg: ["/src/assets/street-fighter.jpg"],
    ctaText: "About Page",

    title: "Communication",
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
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Non-Synced Patterns",
        detailsImg: "/src/assets/toy-story.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Card Three",
        detailsImg: "/src/assets/toy-story.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
    ],
  },
  // key
  Analytical: {
    heroImg: ["/src/assets/pexels-pavel-danilyuk-7234276.jpg"],
    title: "Analytical",
    ctaText: "About Page",

    caption: "A collaborative React movie database built for film lovers.",
    features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
    cards: [
      {
        title: "Card A",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Card B",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
      {
        title: "Card C",
        detailsImg: "/src/assets/pexels-pavel-danilyuk-7234238.jpg",
        description:
          "Built a trailer modal that uses createPortal to escape the carousel's DOM hierarchy.",
      },
    ],
  },
};

// ++++++++++ CONTACT DATA ++++++++++

/* 
an attempt to conceal my personal data from basic bots scraping my site lol.
wont stop anyone who is determined... or who looks at my code lmao 
*/
export const contactLinks = {
  email: {
    label: "Email",
    href: `mailto:${import.meta.env.VITE_EMAIL_USER}@${import.meta.env.VITE_EMAIL_DOMAIN}`,
  },
  github: {
    label: "GitHub",
    href: `https://${import.meta.env.VITE_GITHUB_USER}`,
  },
  linkedin: {
    label: "LinkedIn",
    href: `https://${import.meta.env.VITE_LINKEDIN_USER}`,
  },
};
