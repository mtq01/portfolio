# Decisions

A running log of notable changes and the reasoning behind them. Newest entries at the top.

Note: named `DECISIONS.md` (corrected from `DESCISIONS.md`) since this becomes a permanent, linkable file name.

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
