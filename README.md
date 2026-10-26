# PortfolioPage

>  **THIS PROJECT IS DEPRECATED AND NO LONGER MAINTAINED**  
> This repository contains the legacy vanilla HTML/CSS/JS implementation of my portfolio. My active portfolio has been completely rewritten using Next.js, TypeScript, and Tailwind CSS and can be found at **[TheCanadianYeti/my-portfolio](https://github.com/TheCanadianYeti/my-portfolio/)**.

---

## Overview

`PortfolioPage` is a hand-coded, framework-free personal website built to showcase early software projects, experiment with fundamental web design, and establish personal homelab hosting infrastructure. 

While no longer serving as the active codebase for [marcus.podnar.ca](https://marcus.podnar.ca), this repository remains archived for historical reference and to document the evolution of my frontend development workflow.

---

## Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Custom properties, fluid layouts, keyframe animations |
| **Vanilla JavaScript** | DOM manipulation and direct API interactions |
| **GitHub REST API** | Client-side repository data fetching |
| **Google Fonts** | Syne and JetBrains Mono typography |
| **Caddy / TrueNAS** | Self-hosted production reverse proxy environment |
| **Apache HTTP Server** | Initial legacy web server deployment |

No frontend frameworks. No build tools. No runtime dependencies.

---

## Legacy Pages

| Page | Description |
| :--- | :--- |
| `index.html` | Hero landing page featuring a custom typewriter script and floating UI components |
| `about.html` | Background, education, tech stack breakdown, and personal philosophy |
| `skills.html` | Categorized skill cards across frontend, backend, networking, and tools |
| `projects.html` | Runtime GitHub API integration displaying dynamic repository cards |
| `contact.html` | Contact links with styled code block layout |

---

## Features

### Design & Styling
- Dark developer-focused palette featuring deep navy, electric blue, and cyan accents.
- Pure CSS keyframe animations for page entry, cards, and state transitions.
- Subtle film grain texture overlay with parallax visual effects.

### Interactivity & Dynamic Content
- **GitHub API Integration:** Fetched public repositories directly on the client, filtering forks and dynamically parsing repository statistics.
- **Navigation Controls:** Frosted-glass fixed navigation bar with active state indicators and mobile drawer menu.
- **Typewriter FX:** Custom vanilla JavaScript typewriter effect with mobile performance toggles.

---

## Project Structure

```text
PortfolioPage/
├── index.html        # Landing hero page
├── about.html        # About page
├── skills.html       # Skills breakdown
├── projects.html     # GitHub API dynamic projects view
├── contact.html      # Contact page
├── css/
│   ├── style.css     # Main stylesheet
│   └── style-old.css # Legacy reference styles
├── js/
│   └── typewriter.js # Typewriter script
└── images/           # Assets, branding, and media
```

---

## Infrastructure & Hosting Evolution

The original application ran on an Apache HTTP Server deployment with custom virtual hosts, MIME type rules, and path redirects. 

It later transitioned into a self-hosted TrueNAS environment operating behind a Caddy reverse proxy to automate TLS certificate management and route external HTTPS web traffic into internal homelab storage pools.

---

## What I Learned

- Structuring multi-page native web projects without build tools or transpilers.
- Direct interaction with RESTful APIs (GitHub API) in pure client-side JavaScript without backend middleware.
- Using native CSS variables, flexbox, grid, and fluid `clamp()` functions to manage complex responsive layouts.
- Configuring production web server deployments (Apache, Caddy) and self-hosting infrastructure on TrueNAS.

---

## Status

**Deprecated.** This repository is preserved as an archive.  
For current project updates and live site access, visit [marcus.podnar.ca](https://marcus.podnar.ca) or the active [my-portfolio](https://github.com/TheCanadianYeti/my-portfolio) repository.

---

## Author

[Marcus Podnar](https://marcus.podnar.ca) · [GitHub](https://github.com/TheCanadianYeti) · [LinkedIn](https://www.linkedin.com/in/marcus-podnar)
