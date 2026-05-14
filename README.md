# Priyanshu Singh – Portfolio Website

A fully responsive multi-page portfolio website built with HTML5, CSS3, and vanilla JavaScript using advanced CSS techniques.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section + skills grid |
| About | `about.html` | Bio, info, education & experience |
| Services | `services.html` | Services offered as cards |
| Contact | `contact.html` | Validated contact form + info panel |

## Features

- CSS Grid for all major layouts (hero, skills, cards, about, contact)
- Flexbox for header, nav, and component-level layouts
- CSS Variables for full dark/light theme system
- Dark ↔ Light theme toggle with `localStorage` persistence
- Smooth animations: `fadeInUp`, `float`, `pulse-ring`, `shimmer`
- Scroll-reveal with `IntersectionObserver` and staggered delays
- BEM methodology for all CSS class naming
- Mobile-first responsive design with hamburger menu
- Contact form with client-side validation
- Semantic HTML5 + ARIA labels (accessibility)
- `prefers-reduced-motion` support
- Optimized images with `loading="lazy"`

## Project Structure

```
portfolio/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   ├── main.css         ← Variables, reset, BEM components
│   ├── layout.css       ← CSS Grid & Flexbox layouts
│   └── animations.css   ← Keyframes, transitions, effects
├── js/
│   ├── main.js          ← Nav, scroll reveal, form validation
│   └── theme-switcher.js← Dark/light theme toggle
├── images/
│   └── priyanshu.jpeg
├── screenshots/
└── README.md
```

## How to Run

```bash
python -m http.server 5500
```
Then open `http://localhost:5500` in any modern browser.

## Deployment

1. Push the repo to GitHub
2. Go to Settings → Pages → select `main` branch → Save
3. Site is live at `https://<username>.github.io/<repo>/`

## Tech Stack

- HTML5 · CSS3 (Grid, Flexbox, Variables, Animations) · JavaScript (ES6)
- BEM methodology · No frameworks or dependencies
