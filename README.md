# podnarWeb

> Personal portfolio and web presence for [marcus.podnar.ca](https://marcus.podnar.ca) — built from scratch with vanilla HTML, CSS, and JavaScript.

---

## Overview

podnarWeb is a fully hand-coded personal portfolio site built without any frameworks or libraries. It serves as both a professional showcase and a living project — a place to experiment with frontend design, practice clean code, and demonstrate skills to potential employers.

🌐 **Live site:** [https://marcus.podnar.ca](https://marcus.podnar.ca)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | All styling — custom properties, animations, responsive layout |
| **Vanilla JavaScript** | Interactivity, DOM manipulation, API calls |
| **GitHub API** | Dynamically fetches and displays public repositories |
| **Google Fonts** | Syne (display) + JetBrains Mono (monospace) |
| **Apache** | Production hosting |

No frameworks. No build tools. No dependencies.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero landing page with typewriter effect, profile image, and floating code elements |
| `about.html` | Background, education, career goals, tech stack, and personal philosophy |
| `skills.html` | Categorized skill cards — frontend, backend, networking, tools, and roadmap |
| `projects.html` | Dynamically loaded GitHub repositories via the GitHub REST API |
| `contact.html` | Contact links with a styled code block visual |

---

## Features

**Design**
- Dark, developer-aesthetic theme with deep navy, electric blue, and cyan accents
- Subtle film grain overlay for texture
- Animated background blobs and floating UI elements
- Smooth CSS keyframe animations throughout (fade, slide, float, pulse)

**Navigation**
- Fixed frosted-glass header with scroll-aware styling
- Responsive hamburger menu for mobile with slide-in panel
- Active page indicator with glowing dot

**Homepage**
- Typewriter effect (`js/typewriter.js`) — disabled on mobile for performance
- Parallax scroll effect on floating elements
- Profile photo with layered frame animation

**Projects Page**
- Fetches all public repos via the GitHub API at runtime
- Filters out forks, sorts by stars and last updated
- Displays language, star count, fork count, and relative update time
- Animated card entrance on load

**Skills Page**
- Organized into sections: Frontend, Backend, Networking, Tools, and On the Horizon
- Skill tag chips per category

---

## Project Structure

```
podnarWeb/
├── index.html          # Home / hero page
├── about.html          # About page
├── skills.html         # Skills page
├── projects.html       # GitHub projects (API-driven)
├── contact.html        # Contact page
├── css/
│   ├── style.css       # Main stylesheet
│   └── style-old.css   # Legacy reference stylesheet
├── js/
│   └── typewriter.js   # Typewriter animation script
└── images/             # Logo, profile photo, icons
```

---

## What I Learned

- Writing and organizing a **multi-page site in pure CSS** using custom properties and a consistent design system
- Using the **GitHub REST API** to dynamically populate content without a backend
- Implementing CSS **keyframe animations** and **parallax effects** without libraries
- Responsive design with a **mobile-first hamburger nav** and fluid typography using `clamp()`
- Managing a project for a **real production deployment** on Apache

---

## Status

✅ **Live and actively maintained** — [marcus.podnar.ca](https://marcus.podnar.ca)

---

## Author

[Marcus Podnar](https://marcus.podnar.ca) · [GitHub](https://github.com/TheCanadianYeti) · [LinkedIn](https://www.linkedin.com/in/marcus-podnar-582187260/)
