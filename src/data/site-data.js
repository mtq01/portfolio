// import devicons
import htmlIcon from "../assets/html5-original.svg";
import cssIcon from "../assets/css3-original.svg";
import reactIcon from "../assets/react-original.svg";
import figmaIcon from "../assets/figma-original.svg";
import wooIcon from "../assets/woocommerce-original.svg";
import jsIcon from "../assets/javascript-original.svg";
import githubIcon from "../assets/github.svg";
import liveSiteIcon from "../assets/open-live.svg";

// import project images
import mkDragon from "../assets/mk-dragon.webp";
import cage from "../assets/cage.webp";
import raiden2 from "../assets/raiden2.webp";
import mortalKombat from "../assets/mortal-kombat.webp";
import rex from "../assets/rex.webp";
import toystory5 from "../assets/toystory5.webp";
import toyStory from "../assets/toy-story.jpg";
import buzz from "../assets/buzz.webp";
import twilight from "../assets/alex_agrico-twilight-7479665_1920.webp";
import mountain from "../assets/yt_ggfischlul-mountain-7690893_1920.webp";
import moon from "../assets/rkarkowski-moon.webp";
import terrace from "../assets/chiemseherin-terrace.webp";

// import about images
import leadershipImg from "../assets/leadership.png";
import peakLeadership from "../assets/peak-leadership.png";
import captain from "../assets/captain.png";
import valedictorian from "../assets/valedictorian.png";
import effort from "../assets/effort.png";
import drive from "../assets/drive.png";
import stamina from "../assets/stamina.png";
import productivity from "../assets/productivity.png";
import think from "../assets/think.png";
import problemSolve from "../assets/problem-solve.png";
import criticalThinking from "../assets/critical-thinking.png";
import patternRecognition from "../assets/pattern-recognition.png";
import skills from "../assets/skills.png";
import curiosity from "../assets/curiosity.png";
import improve from "../assets/improve.png";
import resilience from "../assets/resilience.png";
import harmonyImg from "../assets/harmony.png";
import teamwork from "../assets/teamwork.png";
import conflictResolution from "../assets/conflict-resolution.png";
import negotiate from "../assets/negotiate.png";

// ++++++++++ PROJECTS DATA ++++++++++
export const projects = {
  // key
  cinemax: {
    heroImg: [mkDragon],
    title: "Cinemax",
    caption: "A collaborative React movie database built for film lovers.",
    stackIcon: [
      { src: htmlIcon, alt: "HTML" },
      { src: cssIcon, alt: "CSS" },
      { src: reactIcon, alt: "React" },
      { src: figmaIcon, alt: "Figma" },
    ],
    projectLinks: [
      { src: githubIcon, alt: "Cinemax GitHub Repo", url: "https://github.com/mtq01/m3-movie-app" },
      { src: liveSiteIcon, alt: "Cinemax Live Site", url: "https://cinemax.emburr.com" },
    ],
    contributors: [
      { name: "Mike", url: `https://${import.meta.env.VITE_LINKEDIN_USER}` },
      { name: "Mahtab", url: `https://${import.meta.env.VITE_LINKEDIN_MSZ}` },
      { name: "Michelle", url: `https://${import.meta.env.VITE_LINKEDIN_MN}` },
    ],
    cards: [
      {
        title: "Accessibility System",
        detailsImg: cage,
        ctaText: "Expand Accessibility System",
        description: "Z-index conflict buried the popup under the navbar.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Ran into a z-index issue that caused the popup to render inside the carousel's DOM hierarchy, creating a stacking context conflict. Even with a high z-index, the navbar sat on top of the popup and partially blocked it." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "After researching, I came across React's createPortal which renders the popup directly to document.body, decoupling it from the carousel's CSS. This allowed z-index to work as expected." },
        ]
      },
      {
        title: "API Security",
        detailsImg: raiden2,
        ctaText: "Expand API Security",
        description: "Shipped with a visible API key, here's what we learned.",
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
          }`
          },
        ]
      },
      {
        title: "Trailer Popup",
        detailsImg: mortalKombat,
        ctaText: "Expand Trailer Popup",
        description: "Built for keyboard users, screen readers, and mobile from the ground up.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Accessibility is often treated as an afterthought that includes a few alt tags and nothing else. Building a React SPA that works for keyboard users, screen readers, and mobile users requires deliberate decision making at every layer of the app." },
          { type: "paragraph", text: "We all know that every page needs an H1, but our carousel already used H2s for each movie title. Adding a visible H1 above the carousel would have been redundant and visually awkward." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Added a consistent accessibility pattern across the entire application. Is it perfect? No. Is it good? Yes! Especially for a team still considered 'junior developers.' It includes a skip-to-content link that's wired to every pages content, aria-live labels for dynamic loading and error states, aria-expanded and aria-controls on all interactive toggles, decorative SVGs are hidden from screen readers, carousel focus management that prevents keyboard users from tabbing into off-screen slides, and modal dialogs with proper role and focus handling." },
          { type: "paragraph", text: "We used the sr-only CSS class to include an H1 that's visually hidden but still present in the DOM, giving screen readers a proper page title without affecting the visual layout." },
        ]
      },
    ],
  },
  // key
  cloudyToys: {
    heroImg: [rex],
    title: "Cloudy Toys",
    caption: "A fun Toy Store built with WooCommerce",
    stackIcon: [
      { src: htmlIcon, alt: "Hypertext Markup Language" },
      { src: cssIcon, alt: "Cascading Style Sheets" },
      { src: jsIcon, alt: "JavaScript" },
      { src: reactIcon, alt: "React" },
      { src: figmaIcon, alt: "Figma" },
      { src: wooIcon, alt: "WooCommerce" },
    ],
    projectLinks: [
      { src: githubIcon, alt: "Cloudy Toys GitHub Repo", url: "https://github.com/mtq01/cloudy-toy-theme" },
      { src: liveSiteIcon, alt: "Cloudy Toys Live Site", url: "https://cloudytoy.bcitwebdeveloper.ca/" }
    ],
    contributors: [
      { name: "Mike", url: `https://${import.meta.env.VITE_LINKEDIN_USER}` },
      { name: "Mahtab", url: `https://${import.meta.env.VITE_LINKEDIN_MSZ}` },
      { name: "Cloue", url: `https://${import.meta.env.VITE_LINKEDIN_CM}` },
      { name: "Faith", url: `https://${import.meta.env.VITE_LINKEDIN_FL}` },
    ],
    cards: [
      {
        title: "Custom Post Types",
        detailsImg: toystory5,
        ctaText: "Expand Custom Post Types",
        description: "A booking plugin's private database almost ruined our carousel.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "We needed a homepage carousel pulling live workshop/event data. The events were managed by the Amelia booking plugin, but Amelia is a Vue SPA that manages its own database outside of WordPress, meaning standard wp_query and Custom Post Types couldn't access it." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Rather than forcing content managers to create every event twice (once in Amelia, once in a custom CPT), we dug into Amelia's plugin files to understand its database structure and wrote a direct MySQL query to extract the event data we needed and feed it into the carousel." }
        ]
      },
      {
        title: "Non-Synced Patterns",
        detailsImg: toyStory,
        ctaText: "Expand Non-Synced Patterns",
        description: "WordPress has no mobile styling panel, custom CSS bridged the gap.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "WordPress has no built-in mobile styling interface for block patterns, so a pattern that looked great on desktop had broken spacing and layout on mobile with no obvious way to fix it." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Used custom CSS to target specific blocks inside the pattern and override styles at different breakpoints, effectively building a mobile stylesheet layer on top of WordPress's block editor limitations." },
        ]
      },
      {
        title: "Featured Products",
        detailsImg: buzz,
        ctaText: "Expand Featured Products",
        description: "Currently in progress. Please check back soon.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Still working on this." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Check back soon." },
        ]
      },
    ],
  },
  // key
  portfolio: {
    heroImg: [twilight],
    title: "Portfolio",
    caption: "Built to highlight state management, error states, and user roles.",
    stackIcon: [
      { src: htmlIcon, alt: "Hypertext Markup Language" },
      { src: cssIcon, alt: "Cascading Style Sheets" },
      { src: reactIcon, alt: "React" },
      { src: figmaIcon, alt: "Figma" },
    ],
    projectLinks: [
      { src: githubIcon, alt: "Cinemax GitHub Repo", url: "https://github.com/mtq01/portfolio" },
      { src: liveSiteIcon, alt: "Cinemax Live Site", url: "https://www.emburr.com" }
    ],
    contributors: [
      { name: "Mike", url: `https://${import.meta.env.VITE_LINKEDIN_USER}` },
    ],
    cards: [
      {
        title: "User Roles (Guest/Admin)",
        detailsImg: mountain,
        ctaText: "Expand User Roles",
        description: "Two users, two experiences. Built without a backend.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "A portfolio site that looks the same to everyone is a missed opportunity. The goal was to simulate a real-world role-based access system where a guest and an admin see fundamentally different things, without a backend or authentication system." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Built a toggle that switches between guest and admin roles using React Context, which makes the active role available to every component without prop drilling. Guest users see a locked popup with an access denied message logged to the activity log. Admin users see the full technical breakdown with structured content pulled from the data file." }
        ]
      },
      {
        title: "Activity Log",
        detailsImg: moon,
        ctaText: "Expand Activity Log",
        description: "Every action logged. Every state change visible.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Debugging and understanding what's happening inside an app is hard when state changes are invisible. A portfolio site also needs something that makes an interviewer stop and interact with it." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Built a global activity log using React Context that any component can write to without prop drilling. Every user action, switching projects, clicking cards, toggling roles, going offline, gets logged in real time with color coded status types (info, success, error)." }
        ]
      },
      {
        title: "Content Architecture",
        detailsImg: terrace,
        ctaText: "Expand Content Architecture",
        description: "Content lives in the data, not the components.",
        adminDescription: [
          { type: "heading", text: "Problem" },
          { type: "paragraph", text: "Hardcoding popup content directly in JSX means touching the component every time content changes. It also limits what you can render, plain strings can't express structure like headings, paragraphs, and code blocks." },
          { type: "heading", text: "Solution" },
          { type: "paragraph", text: "Built a structured content system where each card stores an array of typed objects in the data file. The popup reads the type of each block and renders it accordingly, bold headings, paragraphs, and formatted code blocks, all driven by the data, not the component." }
        ]
      },
    ],
  },
};




// ++++++++++ ABOUT DATA ++++++++++
export const strengths = {
  // key
  leadership: {
    heroImg: [leadershipImg],
    title: "Leadership",
    caption: "The ability to get people to support eachother to achieve a common goal.",
    cards: [
      {
        title: "BCITSa Peak Leadership",
        detailsImg: peakLeadership,
        description: "Pitched an AI startup idea to real entrepreneurs.",
        ctaText: "Expand BCITSa",
        adminDescription: [
          { type: "paragraph", text: "Took part in BCIT's Peak Leadership program, a six week course built around teamwork, communication, and leadership under pressure." },
          { type: "paragraph", text: "Our team developed an AI-driven concept focused on environmental impact and pitched it Dragons Den style to a panel of local entrepreneurs. Not a real business, but a real pitch to real people." },
        ]
      },
      {
        title: "Set Rep",
        detailsImg: captain,
        description: "El Capitan. Chosen by my class as the person to have their back.",
        ctaText: "Expand Set Rep",
        adminDescription: [
          { type: "paragraph", text: "Served as class Set Rep, the go-to person when students had questions, concerns, or needed to navigate the system." },
          { type: "paragraph", text: "Helped connect classmates to counselling, tutoring, medical and dental support, and other resources. Spent a lot of time working behind the scenes advocating for people who didn't know where to turn." },
        ]
      },
      {
        title: "Valedictorian (Nominee)",
        detailsImg: valedictorian,
        description: "The class voted. Apparently I did something right.",
        ctaText: "Expand Valedictorian",
        adminDescription: [
          { type: "paragraph", text: "Nominated for valedictorian by my classmates at the end of the program." },
          { type: "paragraph", text: "No campaign, no politics, just a vote from the people who watched you show up every day. Still waiting on the result, but the nomination alone felt like the real win." },
        ]
      },
    ],
  },
  // key
  achiever: {
    heroImg: [effort],
    title: "Achiever",
    caption: "Everyday starts at zero and ends with something done.",
    cards: [
      {
        title: "Drive",
        detailsImg: drive,
        description: "The internal fire that keeps pushing forward.",
        ctaText: "Expand Drive",
        adminDescription: [
          { type: "paragraph", text: "Achievers have a constant need for attainment. Every day feels like it starts at zero, and by the end of it, something meaningful needs to get done." },
          { type: "paragraph", text: "This isn't about burning out. It's about showing up consistently and taking satisfaction in the work itself, not just the finish line." },
        ]
      },
      {
        title: "Stamina",
        detailsImg: stamina,
        description: "Built for the long haul, not just the sprint.",
        ctaText: "Expand Stamina",
        adminDescription: [
          { type: "paragraph", text: "The ability to concentrate on tasks from start to finish, mentally and physically, is something that comes naturally." },
          { type: "paragraph", text: "When something needs to get done, the energy is there. Not just at the start of a project, but through the middle and the messy parts too." },
        ]
      },
      {
        title: "Productivity",
        detailsImg: productivity,
        description: "The goal is progress.",
        ctaText: "Expand Productivity",
        adminDescription: [
          { type: "paragraph", text: "There's a difference between being busy and being productive. The goal is always meaningful output, not just activity for the sake of it." },
          { type: "paragraph", text: "Taking immense satisfaction in checking things off, finishing what was started, and doing it well." },
        ]
      },
    ],
  },
  // key
  analytical: {
    heroImg: [think],
    title: "Analytical",
    caption: "Show me the data & then let's figure out why.",
    cards: [
      {
        title: "Problem Solving",
        detailsImg: problemSolve,
        description: "Break it down. Find the root. Fix it & solve the problem.",
        ctaText: "Expand Problem Solving",
        adminDescription: [
          { type: "paragraph", text: "The instinct when facing a problem is to identify the actual cause, not just the symptom. Jumping to a solution before understanding the problem usually means solving the wrong thing." },
          { type: "paragraph", text: "A methodical, step-by-step approach to breaking down what's actually happening tends to lead to cleaner, more lasting fixes." },
        ]
      },
      {
        title: "Critical Thinking",
        detailsImg: criticalThinking,
        description: "If it sounds too simple, something is probably missing.",
        ctaText: "Expand Critical Thinking",
        adminDescription: [
          { type: "paragraph", text: "Taking a critical approach to what others might quickly accept as true. Not contrarian, just thorough. Facts and reason over assumption and emotion." },
          { type: "paragraph", text: "This shows up in code reviews, in planning, and in how decisions get made. Always asking why before accepting how." },
        ]
      },
      {
        title: "Pattern Recognition",
        detailsImg: patternRecognition,
        description: "Everything has a pattern that tells a story if you know how to read it.",
        ctaText: "Expand Pattern Recognition",
        adminDescription: [
          { type: "paragraph", text: "The ability to spot patterns, in data, in behavior, in systems, and understand how they interact is something that comes naturally." },
          { type: "paragraph", text: "Whether it's identifying why a bug keeps reappearing or noticing where a team keeps getting stuck, recognizing the pattern is usually the hardest and most valuable part." },
        ]
      },
    ],
  },
  // key
  learner: {
    heroImg: [skills],
    title: "Learner",
    caption: "The learning process matters as much as the outcome.",
    cards: [
      {
        title: "Curiosity",
        detailsImg: curiosity,
        description: "If something is interesting, im going down the rabbit hole.",
        ctaText: "Expand Curiosity",
        adminDescription: [
          { type: "paragraph", text: "When something sparks curiosity, a concept, a problem, a tool, the natural response is to go deep on it. Not just skim the surface." },
          { type: "paragraph", text: "This applies to code, design, business, and pretty much everything else. The thrill of figuring something out is hard to replicate." },
        ]
      },
      {
        title: "Continuous Improvement",
        detailsImg: improve,
        description: "The last version is never the final chapter. You can always improve.",
        ctaText: "Expand Continuous Improvement",
        adminDescription: [
          { type: "paragraph", text: "There's always something to refine, upgrade, or rethink. Comfort with the current state of things isn't really in the vocabulary." },
          { type: "paragraph", text: "Whether it's a codebase, a process, or a skill, the question is always what could be better, and how to get there." },
        ]
      },
      {
        title: "Resilience",
        detailsImg: resilience,
        description: "Doing what's hard develops more character the easy path will never produce.",
        ctaText: "Expand Resilience",
        adminDescription: [
          { type: "paragraph", text: "Preferring rigorous challenges over easy ones isn't masochism, it's how real learning happens. The difficult stuff is where the growth is." },
          { type: "paragraph", text: "Trusting the process of working through something uncomfortable and coming out the other side with a skill that actually sticks." },
        ]
      },
    ],
  },
  // key
  harmony: {
    heroImg: [harmonyImg],
    title: "Harmony",
    caption: "Less friction. More progress.",
    cards: [
      {
        title: "Teamwork",
        detailsImg: teamwork,
        description: "A team can only perform at its highest level if its highly respected.",
        ctaText: "Expand Teamwork",
        adminDescription: [
          { type: "paragraph", text: "Strong teams aren't built on agreement, they're built on mutual respect and the ability to work through differences without unnecessary friction." },
          { type: "paragraph", text: "The goal is always to find the practical path forward that everyone can get behind, even when people are coming from different directions." },
        ]
      },
      {
        title: "Conflict Resolution",
        detailsImg: conflictResolution,
        description: "Tension doesn't disappear on its own. Someone has to address it.",
        ctaText: "Expand Conflict Resolution",
        adminDescription: [
          { type: "paragraph", text: "When conflict shows up in a team, and it always does, the instinct is to steer toward reconciliation rather than escalation." },
          { type: "paragraph", text: "Finding the common ground, helping people see each other's perspective, and redirecting energy toward the work rather than the argument." },
        ]
      },
      {
        title: "Negotiation",
        detailsImg: negotiate,
        description: "If everybody wins, nobody wins. The best outcome is true and workable.",
        ctaText: "Expand Negotiation",
        adminDescription: [
          { type: "paragraph", text: "Real consensus isn't about making everyone happy or splitting the difference. It's about finding the solution that actually works, even if it means someone doesn't get exactly what they wanted." },
          { type: "paragraph", text: "Harmony isn't conflict avoidance. It's knowing when to push for the right answer instead of the comfortable one." },
        ]
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