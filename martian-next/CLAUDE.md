# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js website for Martian Engineering, a software consulting firm. The site showcases the company's portfolio, team members, and client work. It's built with TypeScript, React 19, and Next.js 15.3.4 using the app router.

## Architecture

### Core Structure
- **App Router**: Uses Next.js 15 app directory structure with `app/page.tsx` as the main page
- **Component Library**: Extensive modular component system in `/components` with individual SCSS modules
- **TypeScript Configuration**: Strict mode enabled with path aliases (`@/*` points to project root)
- **Styling**: SCSS modules per component + global stylesheets, supports multiple monospace fonts

### Component System
- Atomic design with reusable components (Button, Card, Grid, etc.)
- Each component has its own `.module.scss` file for scoped styling
- Layout components: `DefaultLayout`, `SidebarLayout`, `Grid`, `Row`
- Interactive components: `ActionButton`, `ActionListItem`, `HoverComponentTrigger`
- Specialized components: `MarsMatrixLoader`, `ClientLogos`, `Avatar`

### Data Management
- Client data and constants defined inline in `app/page.tsx`
- Static content in `/content` directory (markdown files)
- Constants and utilities in `/common` directory (`constants.ts`, `utilities.ts`, `hooks.ts`)
- Custom hooks in `/hooks` directory (`useHotkeys` for keyboard shortcuts)
- Debounced callback utilities in `/common/hooks.ts`

## Development Commands

```bash
# Start development server (runs on port 3005)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Key Features

- Single-page portfolio site with client showcase and team profiles
- Interactive client selection with sidebar navigation in "OUR WORK & CLIENTS" section
- Smooth scrolling navigation between sections (team, clients)
- Responsive design with SCSS modules
- Custom hotkey system with `useHotkeys` hook
- Mars-themed loader animation (`MarsMatrixLoader`)
- Team member profiles with avatar components and biographies

## Development Notes

- Server runs on port 3005 (configured in package.json)
- Uses Martian Mono as primary font with multiple monospace fallbacks loaded from external CDN
- Theme system with dark mode default (`theme-dark` class on body)
- No testing framework currently configured
- Static export capability through Next.js
- Navigation uses both href links (`/hire`, `/team`) and JavaScript smooth scrolling
- Global styles include extensive font face definitions for various monospace fonts