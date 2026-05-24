# NexaSite

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen)](https://github.com/your-username/nexasite/pulls)

A professional, responsive business landing page built with React 19, Vite 6, and Tailwind CSS v4. Designed for small businesses, freelancers, and developers who need a clean online presence without building a full-stack application.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Theme System](#theme-system)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Customization Guide](#customization-guide)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

NexaSite provides a complete landing page template with five content sections, a three-mode theme system, responsive navigation, and scroll-triggered animations. All content is managed through data files, making it straightforward to customize for portfolios, service agencies, product launches, or startup landing pages.

The project follows a component-based architecture with reusable UI primitives, layout components, and section components, all styled with Tailwind CSS utility classes and a CSS custom property theme system.

---

## Features

| Component | Description |
|-----------|-------------|
| **Hero Section** | Full-viewport hero with headline, description text, dual call-to-action buttons, and an animated grid background that adapts to the active theme. |
| **About Section** | Two-column layout with company description and a 2x2 stats grid (Projects Delivered, Happy Clients, Years Experience, Team Members). |
| **Services Section** | Six service cards arranged in a responsive grid. Each card displays an icon, title, and description. Icons are sourced from Lucide React. |
| **Portfolio Showcase** | Filterable project gallery with category tabs (All, Web, Branding, App). Cards display an image, category tag, title, and description. Clicking a card opens a full-size lightbox modal with project details and a contact link. |
| **Contact Form** | Validated form with Name, Email, and Message fields. Client-side validation checks for required fields and email format. On submission, data is logged to the browser console and a success toast notification is displayed. |
| **Navigation Bar** | Fixed top navbar with smooth-scroll links, a theme toggle button, and a responsive hamburger menu on mobile devices. Active section is highlighted using an IntersectionObserver-based scroll-spy hook. |
| **Footer** | Two-column footer with brand description, services links, social media icons, and a copyright notice. |
| **Theme System** | Three theme modes (Dark, Blue, Dust) controlled via CSS custom properties. Theme selection is persisted in localStorage and cycled through a button in the navbar. |
| **Scroll Animations** | Sections animate into view using the AOS library with fade and slide effects. Animation direction and delay are configured per element. |
| **Responsive Design** | Mobile-first layout with breakpoints at sm (640px), md (768px), and lg (1024px). The navigation collapses to a hamburger menu, grids adjust column counts, and typography scales proportionally. |

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed on your machine:

| Software | Minimum Version | Purpose |
|----------|----------------|---------|
| [Node.js](https://nodejs.org/) | 18.x or later | JavaScript runtime for running the development server and build tools |
| [npm](https://www.npmjs.com/) | 9.x or later | Package manager for installing dependencies (included with Node.js) |
| [Git](https://git-scm.com/) | 2.x or later | Version control for cloning the repository |

To verify your installed versions:

```bash
node --version
npm --version
git --version
```

---

## Local Setup

Follow these steps to get the project running on your laptop:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nexasite.git
cd nexasite
```

### 2. Install Dependencies

```bash
npm install
```

This command reads the `package.json` file and installs all required packages into the `node_modules/` directory.

### 3. Start the Development Server

```bash
npm run dev
```

The Vite development server will start, typically at `http://localhost:5173`. Open this URL in your browser to view the site. The page supports hot module replacement, so changes to source files will instantly update in the browser.

### 4. Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory. The output includes:

- `dist/index.html` -- The HTML entry point
- `dist/assets/` -- Compiled CSS and JavaScript bundles
- `dist/assets/` -- Any static assets

### 5. Preview the Production Build

```bash
npm run preview
```

This serves the production build locally so you can verify everything works before deploying.

---

## Project Structure

```
nexasite/
├── index.html                  HTML entry point with Google Fonts preconnect
├── package.json                Project metadata, dependencies, and scripts
├── package-lock.json           Lockfile for reproducible installs
├── vite.config.js              Vite configuration with React plugin, Tailwind plugin, and path alias (@/)
├── public/
│   └── vite.svg                Favicon placeholder
└── src/
    ├── main.jsx                React DOM entry point, renders App inside ThemeProvider
    ├── App.jsx                 Root component, imports all sections and initializes AOS
    ├── index.css               Tailwind import, theme CSS custom properties, global styles
    ├── components/
    │   ├── ui/                 Reusable UI primitives
    │   │   ├── Button.jsx      Button with variant (primary/outline/ghost) and size (sm/md/lg) props
    │   │   ├── Card.jsx        Card with icon, title, description, and children slots
    │   │   ├── Input.jsx       Form input with label, error state, and forwarded ref
    │   │   ├── Textarea.jsx    Form textarea with label, error state, and forwarded ref
    │   │   ├── Toast.jsx       Auto-dismissing notification toast with message prop
    │   │   ├── Modal.jsx       Portal-rendered modal with backdrop blur, Escape key close, and focus management
    │   │   └── GridBackground.jsx  Animated dot-grid background for the Hero section
    │   ├── layout/             Layout shell components
    │   │   ├── Navbar.jsx      Fixed navbar with smooth-scroll links, theme toggle, and mobile hamburger menu
    │   │   └── Footer.jsx      Two-column footer with brand, services links, social icons, and copyright
    │   └── sections/           Page section components
    │       ├── Hero.jsx        Full-screen hero with headline, description, CTAs, scroll indicator, and animated background
    │       ├── About.jsx       Two-column about section with company story and stats grid
    │       ├── Services.jsx    Six-card services grid with Lucide icons
    │       ├── Portfolio.jsx   Filterable project gallery with category tabs and lightbox modal
    │       └── Contact.jsx     Contact form with validation, console logging, and toast notification
    ├── context/
    │   └── ThemeContext.jsx     React context for theme state (dark/blue/dust), localStorage persistence, and cycle function
    ├── hooks/
    │   └── useScrollSpy.js     Custom hook using IntersectionObserver to track which section is in view
    ├── data/
    │   ├── navigation.js       Navigation link definitions (label + href pairs)
    │   ├── services.js         Service card data (icon, title, description)
    │   └── portfolio.js        Portfolio project data (title, category, image, description) and category filter list
    └── utils/
        └── cn.js               Class name utility combining clsx and tailwind-merge
```

---

## Component Architecture

The application follows a unidirectional data flow:

```
main.jsx
  └── ThemeProvider (context)
       └── App.jsx (AOS initialization)
            ├── Navbar (useScrollSpy, useTheme)
            ├── <main>
            │    ├── Hero (GridBackground, Button)
            │    ├── About
            │    ├── Services (Card from data/services.js)
            │    ├── Portfolio (Modal from data/portfolio.js)
            │    └── Contact (Input, Textarea, Button, Toast)
            └── Footer
```

- **State Management**: Theme state lives in React Context (`ThemeContext.jsx`). Portfolio filter state and contact form state are local to their respective components.
- **Data Layer**: Content for services, portfolio, and navigation is stored in plain JavaScript files under `src/data/`, making it straightforward to edit without touching component logic.
- **Styling**: All components use Tailwind CSS utility classes. Theme colors are accessed through custom CSS variables defined in `index.css`. The `cn()` utility resolves class conflicts via `tailwind-merge`.

---

## Theme System

The theme system uses CSS custom properties (variables) scoped to `[data-theme]` attributes on the `<html>` element. When the theme changes, all CSS variables update instantly, and the transition is animated with a 300ms `transition` on `background-color` and `color`.

### Built-in Themes

| Theme | Background | Text | Accent | Card Surface | Border | Description |
|-------|-----------|------|--------|-------------|--------|-------------|
| **Dark** (default) | `#0f172a` (slate-900) | `#f1f5f9` (slate-50) | `#6366f1` (indigo-500) | `#1e293b` (slate-800) | `#334155` (slate-700) | High-contrast dark mode, ideal for reduced eye strain and modern aesthetics. |
| **Blue** | `#eff6ff` (blue-50) | `#1e3a5f` (blue-900) | `#2563eb` (blue-600) | `#ffffff` (white) | `#bfdbfe` (blue-200) | Light and crisp blue palette, suitable for corporate and professional contexts. |
| **Dust** | `#faf6f1` (warm gray) | `#3d3229` (brown-900) | `#c97b4a` (amber-600) | `#ffffff` (white) | `#e8ddd0` (warm beige) | Warm earthy tones, appropriate for creative agencies and organic brands. |

### How Themes Work

1. `ThemeContext.jsx` reads the saved theme from `localStorage` on initialization, defaulting to `'dark'`.
2. When the theme changes, the context sets `document.documentElement.dataset.theme` to the new value.
3. CSS in `index.css` matches `[data-theme="dark"]`, `[data-theme="blue"]`, or `[data-theme="dust"]` and applies the corresponding CSS variables.
4. Components reference these variables through Tailwind classes (e.g., `bg-theme-bg`, `text-theme-accent`, `border-theme-border`).

### Adding a Custom Theme

To add a new theme, edit `src/index.css`:

```css
[data-theme="midnight"] {
  --theme-bg: #0a0a1a;
  --theme-text: #e2e8f0;
  --theme-accent: #a78bfa;
  --theme-card: #1a1a2e;
  --theme-border: #2d2d44;
  --theme-muted: #9ca3af;
  --theme-nav: rgba(10, 10, 26, 0.85);
}
```

Then register it in `src/context/ThemeContext.jsx`:

```js
const themes = ['dark', 'blue', 'dust', 'midnight']
```

The theme toggle will automatically cycle through all registered themes.

---

## Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Frontend Framework | React | 19.1 | Component-based UI library |
| Build Tool | Vite | 6.4 | Fast development server and production bundler |
| CSS Framework | Tailwind CSS | 4.1 | Utility-first styling |
| Animations | AOS (Animate on Scroll) | 2.3 | Scroll-triggered element animations |
| Icons | Lucide React | 0.487 | SVG icon library |
| Class Utilities | clsx + tailwind-merge | 2.1 / 3.2 | Conditional class name construction and conflict resolution |
| Language | JavaScript (JSX) | ES2022 | Application logic |
| Package Manager | npm | 9+ | Dependency management |
| Version Control | Git | 2+ | Source code management |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Vite development server with hot module replacement at `http://localhost:5173`. |
| `npm run build` | Compiles the application for production, outputting to the `dist/` directory. Includes CSS and JS minification, tree-shaking, and cache-busting hashes. |
| `npm run preview` | Serves the production build locally for final verification before deployment. |

---

## Customization Guide

### Changing Content

All site content is managed through data files in `src/data/`:

- **Navigation links**: Edit `src/data/navigation.js` to add, remove, or reorder nav items.
- **Services**: Edit `src/data/services.js` to update service names, descriptions, or icons.
- **Portfolio projects**: Edit `src/data/portfolio.js` to add, remove, or modify portfolio entries.

### Changing Colors

Theme colors are defined as CSS custom properties in `src/index.css`. Each theme block sets values for six variables:

- `--theme-bg` -- Page background
- `--theme-text` -- Default text color
- `--theme-accent` -- Accent color for buttons, links, and highlights
- `--theme-card` -- Card and container background
- `--theme-border` -- Border color for cards and dividers
- `--theme-muted` -- Muted/secondary text color
- `--theme-nav` -- Navbar background (typically with alpha transparency)

### Changing Typography

Fonts are configured in two places:

1. **`index.html`** -- Google Fonts link tag (currently Inter for headings and Source Sans 3 for body text)
2. **`src/index.css`** -- `--font-heading` and `--font-body` CSS variables used throughout the application

### Adding Sections

To add a new section:

1. Create a new component in `src/components/sections/`
2. Add the section to `src/data/navigation.js` with the corresponding href
3. Import and render the section in `src/App.jsx` within the `<main>` element
4. Add the section ID to the `sectionIds` array in `src/components/layout/Navbar.jsx`

---

## Browser Support

The project targets modern browsers that support CSS custom properties, ES2022 modules, and the Intersection Observer API:

- Google Chrome 90+
- Mozilla Firefox 90+
- Apple Safari 15+
- Microsoft Edge 90+

Internet Explorer is not supported.

---

## License

MIT -- free to use, modify, and distribute for personal or commercial projects. See the [LICENSE](LICENSE) file for details.
