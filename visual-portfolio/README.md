# High performance engineering Portfolio

A premium, grid-driven, responsive developer portfolio engineered for speed, clean architecture and high conversion. Designed to communicate value, business scalability, and engineering quality to business owners and technical recruiters alike.

## Scope & Core Goals

- **High-Velocity Performance:** Maximize load speeds using Vite's lightning-fast asset bundling pipelines to guarantee zero friction for inbound leads
- **Conversion-Oriented UI** Target business owners with a clear value proposition translating engineering choices into business outcomes.
- **Responsive Fluidity** Flawless mobile-first experience using structured grid configurations to handle any screen size seamlessly
- **Zero-Dependancy Animations** Keep the final bundle size ultra-lean by avoiding heavy external physics engines, utilizing native hardware-accelerated Tailwind micro-interactions

## Deliverables & RoadMap

### P1: Blueprint & infrastructure

- Establish centralized layout tokens and theme hooks
- Set up decoupled, schema-driven data stores via internal JSON modeling

### P2: Core semantic componentization

- **Navigation & controls** Fixed multi-state Navbar complete with an automated class-driven Theme Switcher
- **Hero Section** Bold outcome-driven value statement matched with clear CTA handling
- **Services Layout** A structured bento-box grid explicitly defining core engineering capabilities
- **About & Strategy** A 3-step project lifecycle roadmap outlining execution steps from discovery to product shipping
- **Projects Showcase** Dynamic rendering cards reading from standard JSON layouts, utilizing hover-state card scaling
- **Social & Conversion Footer** Unified direct-action nodes for quick engineering recruitment and onboarding hooks

## Design System Tokens

The application maps statevariantsthrough standard class-driven dark/light selector flags

| Layer Element | Hex Token | Dark Mode Context | Light Mode Context |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#030B00` | Deep Forest Slate (Base) | Contrast Typography Core |
| **Primary Typography** | `#FAFFF2` | Alabaster Off-White | Structural Base Canvas |
| **Structural Surfaces** | `#203B16` | Blended Card Fills & Borders | Muted Grid Lines & Outlines |
| **Action & Highlights** | `#BDE872` | High-Vibrancy Lime Focus Tint | Accent Interactive Nodes |

### Typography & Border Radii Guidelines

- **Headings:** Sans-serif, high-weight geometric structure with tracked letter spacing (`tracking-tight`).
- **Surface Shapes:** Soft, systematic edge configurations capped at a max radius of `12px` (`rounded-xl`).

---

## Tech Stack & system constraints

- **Build Engine** Vite + React (SPA architecture)
- **Styling Utility** Tailwind CSS (Class-driven runtime switching)
- **Version Control** Git Workflow with explicit feature-branch isolation

### Architecture Rules

- All presentation copy **must** live isolated in `src/data/portfolioData.json`. Components must handleparsing dynamically.
- Custom state changes should utilize custom reactive hooks (e.g caching dark mode preferences natively to `localStorage` ).