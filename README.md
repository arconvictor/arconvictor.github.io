# arconvictor.github.io

Personal portfolio site — [victor-arcon.de](https://victor-arcon.de) — built with plain HTML, CSS, and JavaScript, plus Bootstrap 5 for layout and the accordion component.

## Features

- Light/dark theme toggle (respects the visitor's system preference by default, remembers the choice via `localStorage`)
- Scroll-triggered reveal animations (`IntersectionObserver`), so content animates in as it's scrolled into view rather than only on page load
- A duplicated, seamless-loop marquee of tech stack icons, built without any extra libraries

## Structure

```
index.html
assets/
  css/style.css      → all styling, including both theme token sets
  js/
    theme-toggle.js       → light/dark switcher
    scroll-reveal.js      → scroll-in animations
    tech-band-duplicator.js → duplicates the tech icon list for a seamless marquee loop
  img/                → icons and project images
```

## Running locally

No build step — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server
```
