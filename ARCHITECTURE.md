# Project Architecture & Performance Standards

This document describes the high-level architecture of the single-page portfolio application and outlines the constraints applied to ensure lightning-fast excecution and easy scaling

## System Components Layout

The application operates as a decoupled single-page application (SPA). Content delivery is entirely data driven toseparate layout structures from descriptive text.

```text
               ┌─────────────────────────────┐
               │    App.jsx (Root Layout)    │
               └──────────────┬──────────────┘
                              │
               ┌──────────────┴──────────────┐
               │       ThemeContext          │ (Tracks state: 'light' | 'dark')
               └──────────────┬──────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  Navbar.jsx  │       │ Section Views│       │  Footer.jsx  │
└──────────────┘       └──────┬───────┘       └──────────────┘
                              │ (Maps Data Structs)
                              ▼
               ┌─────────────────────────────┐
               │    portfolioData.json       │ (Central Content Store)
               └─────────────────────────────┘
```

## Content Separation Model

To ensure changing textcopy neveraccidentally introduces layout regressions, components are forbidden fromhardcoding long-form display descriptions.

- **The Database** All strings, tag lists, URLs and feature item blocks reside inside portfolioData.json.
**The Presenter** Sections like `sections.jsx` and `projects.jsx` read the structured JSON payloadsat initialization and dynamically loop over the elements using native array maps.

## Theme implementation strategy

The application uses class-based css processing combined with `localStorage` persistence to manage dark/light modes witout introducing visual flickering during initial rendering:

1. **Root Manipulation** The active theme utility injectsorupdates a global `.dark` classstring directly on the root `<html>` document block
2. **Tailwind Processing** Utility variants matching `dark:bg-brand-darkBg` adapt state seamlessly based on the presence of that class selector
3. **State Hook** A clean custom state controller (`src/hooks/useLocalStorage`) synchronizes selection history locally, bypassing unnecessary re-renders

## Performance Optimization Metrics

To deliver peak performanceto prospective clients and technical stakeholders, these build targets are enforced:

- **Ultra-lean bundle size** Third party layout dependancies are heavily restricted. Complex animation packages (e.g Framer motion) are locked out in favor of hardware-accelerated Tailwind utility transitions
- **Fast Media Delivery** All image components mustrun through image-crunching configurations to serve optimized formats. Large raw assets are prohibited from enteringthe active `src/assets/` runtime pipeline
