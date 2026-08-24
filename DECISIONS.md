# Decisions

A running log of notable changes and the reasoning behind them. Newest entries at the top.

Note: named `DECISIONS.md` (corrected from `DESCISIONS.md`) since this becomes a permanent, linkable file name.

---

## 2026-08-23 — Trimmed tutorial-style comments in .htaccess

**Change:** `public/.htaccess` had a line-by-line comment explaining what
each individual directive does (`# We disable MultiViews`, `# Then we turn
on the RewriteEngine, allowing us to modify URLs based on certain
conditions`, etc.). Replaced with a single comment explaining *why* the
rule exists (SPA fallback routing for React Router), removed the rest.

**Why:** The directives themselves are standard, well-documented Apache
config — a reader can look up `RewriteEngine` or `QSA`/`L` flags in five
seconds if needed. Explaining what each line does inline reads as
copied-from-a-tutorial rather than understood, which isn't the impression
a portfolio's own deploy config should give. The reason the rule exists at
all (SPA client-side routing) is the part worth keeping, since that's not
obvious from the directives alone.

---

## 2026-08-23 — Added meta description and Open Graph/Twitter tags

**Change:** `index.html` had no `<meta name="description">` and no social
share tags at all. Added a description, Open Graph (`og:type`, `og:title`,
`og:description`, `og:image`, `og:url`), and Twitter card tags. Used
`https://www.emburr.com` as the canonical URL/image host — that's the live
URL already referenced in `site-data.js` for this same site's own project
entry, so it's the best available source of truth for the real domain
rather than a guess. `og:image` points at the existing `emburr-logo.png` in
`public/`.

**Why:** Without these tags, sharing a link to the site (Slack, LinkedIn,
Twitter, iMessage, etc. — exactly the channels a portfolio link travels
through) produces a bare, title-only preview with no description or image.
For a site meant to be shared with recruiters, that's a real first-impression
gap.

---

## 2026-08-23 — Wrote a real README

**Change:** Replaced the placeholder `README.md` (its entire contents were
`## info will go heya`) with an actual project README: what the app is,
its features, tech stack, setup/scripts, and project structure. Also noted
that the build output directory is `emburr/`, not Vite's default `dist/`,
since that's non-obvious and has already caused confusion (`eslint.config.js`
only ignores `dist`, so `npm run lint` currently trips over the built
bundle in `emburr/`).

**Why:** The only other README-shaped content in this repo's history is on
an unmerged branch (`feature/readme`) and is boilerplate for an unrelated
course assignment ("M3-MOVIE-APP"). A portfolio repo with no real README is
one of the first things a visiting recruiter or collaborator would notice.

---

## 2026-08-23 — Set real name/short_name in site.webmanifest

**Change:** `public/site.webmanifest` had `"name": "MyWebSite"` and
`"short_name": "MySite"` — the default placeholder values from whatever
favicon/PWA generator produced the icon set. Changed to
`"EMBURR | Mike's Portfolio"` / `"EMBURR"`, matching the app's actual title
(`appTitle` in `globals.js`, and `<title>EMBURR</title>` in `index.html`).

**Why:** These values are what shows up if someone adds the site to their
home screen (PWA install) or in browser/Lighthouse PWA audits — leaving the
generator's defaults in place would put "MySite" on a visitor's home
screen. Never customized after the favicon set was generated.

---

## 2026-08-23 — Fixed typos in the activity log

**Change:** Fixed three typos in strings that render live in the on-screen
Activity Log (`ActivityLogUI.jsx` displays every `addLog` message directly
to visitors, so these aren't just code-comment typos):
- `ActivityLogContext.jsx`: `"Mikes Portfolio v2.0"` → `"Mike's Portfolio v2.0"`
- `Home.jsx` and `About.jsx`: `"API Conntect Lost"` → `"API Connect Lost"`
  (duplicated identically in both files)
- `ProjectCard.jsx`: `"Admin privelages required"` → `"Admin privileges required"`

Also fixed a stale code comment in `ActivityLogContext.jsx` referencing a
`'deveolper'` role — the actual role values (`constants.js`'s `ROLES`) are
`guest`/`admin`, so the comment was both misspelled and out of date.

**Why:** These strings are visible to any visitor who opens the Activity Log
panel, which is on-screen by default on both pages — they read as
carelessness on a portfolio site meant to demonstrate attention to detail.

---

## 2026-08-23 — Added rel="noreferrer" to Hero's target="_blank" links

**Change:** In `src/components/hero/Hero.jsx`, the Repo and Live project
links (`projectLinks[0]`/`projectLinks[1]`) now set `rel="noreferrer"`
alongside their existing `target="_blank"`.

**Why:** A link with `target="_blank"` and no `rel="noopener"`/`noreferrer"`
lets the page it opens access `window.opener` and redirect the original tab
(reverse tabnabbing) — a real, if minor, security gap. Every other
`target="_blank"` link in this codebase (Hero's contributor links,
`ContactDrawer.jsx`) already sets `rel="noreferrer"`; these two were just
missed. Used `noreferrer` alone (not `noreferrer noopener`) to match that
existing convention — `noreferrer` alone already implies `noopener` in all
current browsers.

---

## 2026-08-23 — Made ProjectCard keyboard-reachable and removed the dead nested button

**Change:** In `src/components/project-card/ProjectCard.jsx`, the outer
`<div onClick={...}>` wrapping each project card (the element that opens the
detail popup) is now a `<button type="button">`. The inner
`<button className="view-link-btn">{ctaText}</button>` — which had no
`onClick` of its own and only "worked" because clicks bubbled up to the
parent — is now a `<span>`, since nesting an interactive element inside
another interactive element is invalid and was creating a second, non-
functional keyboard stop. Added `aria-label` (summarizing title + either the
CTA text, the locked/admin-required state, or the offline state, matching
the three branches already in the `onClick` handler) so the button has one
concise accessible name instead of screen readers reading its entire visual
content — image alt text, heading, description, and CTA — as one block.
Added `aria-disabled={!isSystemHealthy}` to mirror the existing
`card-disabled` visual state, and `aria-hidden="true"` on the decorative
lock/unlock/offline icons so they aren't announced separately from the
label that already conveys their meaning. `.card-one`/`.card-two`/
`.card-three` in `project-card.css` got a small reset (`background: none;
padding: 0; margin: 0; font: inherit; color: inherit; text-align: inherit;`)
so the buttons render identically to the divs they replaced — the existing
`border`/`cursor` rules were left as-is since they already matched what a
button needs.

**Why:** Unlike the Nav/ProjectTiles toggles fixed earlier (focusable but
not operable), this card had no `tabIndex` at all — it was completely
unreachable by keyboard, on both the Home and About pages, for what is the
primary interactive element on each. A `<button>` fixes that natively
(no manual `onKeyDown` needed) and, being a single element, also resolves
the double-tab-stop problem the dead nested button was causing.

---

## 2026-08-23 — Made Nav and ProjectTiles toggles keyboard-activatable

**Change:** In `src/components/nav/Nav.jsx`, the Guest/Admin role toggle and the
Light/Dark theme toggle were converted from `<div onClick={...} tabIndex={0}>`
to real `<button type="button">` elements, with `aria-pressed` added to expose
their on/off state. A matching `.nav-toggle-btn` reset was added to
`src/components/nav/nav.css` (`background: none; border: none; padding: 0;
font: inherit; color: inherit; text-align: inherit; cursor: pointer;`) so the
buttons render identically to the divs they replaced.

The same change was made in `src/components/project-tiles/ProjectTiles.jsx`:
the project filter tabs went from `<p tabIndex="0" onClick={...}>` to
`<button type="button" aria-pressed={...}>`.

**Why:** A recent pair of commits (`e771f3d`, `c5a6721`) added `tabIndex={0}`
to these elements specifically "for accessibility," so Tab now reaches them.
But `tabIndex` alone only makes an element *focusable* — it doesn't make it
*operable*. `div`/`p` elements have no built-in keydown behavior, so a
keyboard-only or screen-reader user could Tab onto any of these three
controls and then find that pressing Enter or Space did nothing at all,
since only a mouse `onClick` was wired up. That's arguably worse than not
being focusable, since it presents a false affordance.

Using real `<button>` elements fixes this for free: buttons are natively
operable via both Enter and Space, are announced as buttons by screen
readers, and (via `aria-pressed`) can now communicate their current
on/off state, which the previous markup had no way to expose. This avoids
hand-rolling an `onKeyDown` handler to reimplement behavior the platform
already provides, and matches the pattern already used elsewhere in this
codebase (e.g. `ProjectCard.jsx`'s `view-link-btn`, and the Live/Offline
toggle in `SystemMonitor.jsx`, both already real buttons).

**Not included in this change:** `ProjectCard.jsx`'s expandable card is
still a plain `<div onClick={...}>` with no `tabIndex` at all — unlike the
three controls above, it isn't focusable by keyboard *at all* yet. That's a
distinct, larger fix (the card wraps a nested real `<button>` with no
`onClick` of its own, relying on event bubbling) and is left for a
follow-up change rather than folded in here.
