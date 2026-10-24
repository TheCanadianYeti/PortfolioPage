# PortfolioPage

Personal portfolio and web presence for marcus.podnar.ca, built from scratch with vanilla HTML, CSS, and JavaScript.

---

## Overview

PortfolioPage is a hand-coded personal portfolio site built without frameworks or libraries. It serves as a professional showcase to experiment with frontend design, practice clean code, and demonstrate core web development capabilities.

Live site: <a href="https://marcus.podnar.ca" target="_blank" rel="noopener noreferrer">marcus.podnar.ca</a>

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, custom properties, animations, responsive layout |
| Vanilla JavaScript | Interactivity, DOM manipulation, API calls |
| GitHub API | Dynamically fetches and displays public repositories |
| Google Fonts | Syne and JetBrains Mono |
| Caddy on TrueNAS | Current self-hosted production reverse proxy |
| Apache | Legacy production web server deployment |

No frontend frameworks. No build tools. No runtime dependencies.

---

## Pages

| Page | Description |
|------|-------------|
| index.html | Hero landing page with typewriter effect, profile image, and floating code elements |
| about.html | Background, education, career goals, tech stack, and personal philosophy |
| skills.html | Categorized skill cards across frontend, backend, networking, tools, and roadmap |
| projects.html | Dynamically loaded public repositories via the GitHub REST API |
| contact.html | Contact links with a styled code block visual |

---

## Features

Design:
- Dark developer-focused theme with deep navy, electric blue, and cyan accents
- Subtle film grain texture overlay
- Animated background elements and floating UI components
- Pure CSS keyframe animations for entry and state transitions

Navigation:
- Fixed frosted-glass header with scroll-aware styling
- Mobile hamburger navigation with fluid slide-in panel
- Active page indicators

Homepage:
- Typewriter text effect disabled on mobile devices for performance
- Parallax depth effects on floating visual assets
- Profile framing animations

Projects Page:
- Runtime fetching of public repositories via the GitHub REST API
- Filters out forks and sorts repositories by stars and update timestamps
- Dynamically extracts repository languages, star counts, and fork counts
- Staggered card entrance transitions

Skills Page:
- Categorized skill breakdown covering Frontend, Backend, Systems, Networking, and Infrastructure
- Dedicated badge chips for each technology

---

## Project Structure

```
PortfolioPage/
├── index.html          # Hero page
├── about.html          # About page
├── skills.html         # Skills breakdown
├── projects.html       # GitHub API projects view
├── contact.html        # Contact endpoints
├── css/
│   ├── style.css       # Production stylesheet
│   └── style-old.css   # Legacy reference styles
├── js/
│   └── typewriter.js   # Typewriter effect script
└── images/             # Visual assets, branding, and headshots
    ├── github.png
    ├── thumb.png
    └── Me.jpg
```

---

## Infrastructure and Hosting Evolution

The application originally ran in production on an industry-standard Apache HTTP Server deployment, configuring virtual hosts, MIME types, and directory access rules.

To integrate with homelab infrastructure, the deployment moved to a self-hosted TrueNAS environment behind a Caddy reverse proxy. This architecture automates TLS certificate provisioning and terminates HTTPS traffic while routing requests to internal storage pools.

---

## What I Learned

- Writing scalable, multi-page stylesheets using native CSS variables and fluid typography clamp functions
- Interfacing with the GitHub REST API directly to handle live project updates without backend middleware
- Building lightweight UI animations using hardware-accelerated CSS keyframes instead of heavy JavaScript libraries
- Configuring production web servers with Apache HTTP Server
- Deploying, routing, and automating TLS certificates using Caddy on TrueNAS storage systems

---

## Status

Live and actively maintained: <a href="https://marcus.podnar.ca" target="_blank" rel="noopener noreferrer">marcus.podnar.ca</a>

---

## Author

<a href="https://marcus.podnar.ca" target="_blank" rel="noopener noreferrer">Marcus Podnar</a> | <a href="https://github.com/TheCanadianYeti" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/marcus-podnar-582187260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
