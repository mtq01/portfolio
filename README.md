# EMBURR — Mike's Portfolio

A personal developer portfolio built with React and Vite, styled as a
faux system dashboard: a live-updating activity log, a simulated
online/offline system status, and a Guest/Admin role toggle that
gates deeper project write-ups behind a "log in" affordance.

## Features

- **Home / About pages** — project tiles and "strengths" tiles that
  drive a shared Hero + card layout via React Router.
- **Guest / Admin roles** — switch roles from the nav to reveal
  admin-only technical breakdowns on project cards.
- **Light / Dark theme** toggle.
- **Simulated activity log** — a live `aria-live` log panel that
  narrates page navigation, role/theme changes, and periodic
  simulated system events.
- **Project detail popups** — accessible modal dialogs
  (`role="dialog"`, focus-visible close button, closes on Escape or
  outside click) with GitHub/live-site links per project.

## Tech stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Vite 7](https://vitejs.dev/)
- Plain CSS (no framework), organized per-component

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build -> emburr/ (see vite.config.js)
npm run lint      # eslint
npm run preview   # preview a production build locally
```

## Project structure

```
src/
  components/   # one folder per component (JSX + its own CSS)
  data/         # site-data.js: all project/about content
  globals/      # shared constants (app title, etc.)
  constants.js  # roles, log types, simulated log message pools
public/         # favicons, manifest, .htaccess
```

## Notes

- The production build output directory is `emburr/`, configured in
  `vite.config.js` — not the Vite default `dist/`.
- See [`DECISIONS.md`](./DECISIONS.md) for a running log of notable
  changes and the reasoning behind them.
