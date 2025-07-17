# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Martian Engineering, a software consulting firm. The site is built with vanilla HTML/CSS/JavaScript and is designed to be deployed as a static site (likely GitHub Pages, given the CNAME file).

## Architecture

- **index.html**: Main and only page containing company information, team profiles, and contact details
- **assets/style.css**: All styling using Martian Mono font with responsive design
- **script.js**: Minimal JavaScript for Urbit ID tooltip functionality
- **assets/**: Static assets including favicon variants, logo, and Urbit logo
- **CNAME**: Domain configuration for GitHub Pages deployment

## Key Features

- Responsive design with mobile navigation handling
- Interactive tooltips on Urbit IDs (team member identifiers)
- Static company profile page with team member bios
- Contact integration via email links

## Development Commands

This site uses a Node.js-based build system that generates HTML from markdown files:

```bash
# Build the site from markdown files
npm run build

# Build and serve locally for development
npm run dev

# Just serve the built site
npm run serve
```

## Content Management

Content is stored in separate markdown files in the `content/` directory:

- `content/sections/` - Main page sections (hero, intro, what-we-do, hiring)
- `content/principals/` - Company principals with frontmatter for name
- `content/team/` - Team members with frontmatter for name, specialties, and urbit_id flag

Team member files support frontmatter:
```yaml
---
name: "Person Name"
specialties: "area1, area2, area3"
urbit_id: true  # for Urbit ID display
---
```

The build script (`build.js`) processes these files and generates the final `index.html`.

## Deployment

The site appears to be configured for GitHub Pages deployment via the CNAME file pointing to the custom domain.

## Code Style and Conventions

- Uses Martian Mono font family from Google Fonts for consistent branding
- CSS follows a simple, responsive approach with max-width container (800px)
- Brand color: #B52F2F (red) used for accents and CTAs
- Minimal JavaScript - only for interactive tooltip functionality on Urbit IDs
- HTML structure is semantic and accessible

## Content Management

- All content is directly embedded in index.html
- Team member information and project details are hardcoded
- Email contacts: team@martian.engineering (general), clients@martian.engineering (business)
- Urbit IDs are marked with class "urbit-id" for tooltip functionality

## Local Server Configuration

- This site runs on port 3005
