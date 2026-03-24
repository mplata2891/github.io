# M1-K3 // SYSTEM_ROOT

M.P. // Computer Engineering Portfolio & Lab Archive

A statically generated portfolio and project archive built to emulate 
a hardware-level terminal interface. Cyberpunk-inspired aesthetic, 
pulsing status indicators, and CRT scanline effects.

---

## Tech Stack

- Framework: Astro (v6+)
- Styling: Tailwind CSS
- Logic: Vanilla JavaScript (ES6 Modules)
- Deployment: GitHub Pages via GitHub Actions
- Typography: JetBrains Mono, Chakra Petch, Inter

---

## File Structure
```
/
├── public/
│   └── assets/
│       ├── resume/         # Static resume PDF
│       └── docs/
│           └── f1tenth/    # F1TENTH project documentation PDFs
├── src/
│   ├── components/         # Modular Astro UI components
│   ├── data/               # Centralized data registries
│   ├── layouts/            # Global page wrappers and metadata
│   ├── pages/              # File-based routing
│   ├── scripts/            # Isolated JS logic
│   └── styles/             # Tailwind directives and custom CSS
├── .github/workflows/      # CI/CD deployment pipeline
└── astro.config.mjs
```
---

## Local Development

Node.js v22.12.0 or higher required.
```
npm install
npm run dev        # http://localhost:4321/
npm run build      # Outputs static files to dist/
```
---

## Core Features

- Data registries in src/data/ act as a single source of truth for 
  nav, contact links, and config
- window.matchMedia checks disable auto-scroll on touch devices, 
  defaulting to manual controls
- Intersection Observers trigger sequential boot animations on scroll
- Pushing to main triggers a GitHub Actions workflow that compiles 
  and deploys to GitHub Pages automatically

---

SYS_VER_1.0.0 // ONLINE
