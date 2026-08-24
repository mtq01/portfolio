# Decisions

A running log of notable changes and the reasoning behind them. Newest entries at the top.

Note: named `DECISIONS.md` (corrected from `DESCISIONS.md`) since this becomes a permanent, linkable file name.

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
