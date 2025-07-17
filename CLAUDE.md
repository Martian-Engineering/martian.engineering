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

This is a static website with no build process. To develop locally:

```bash
# Serve locally (any simple HTTP server)
python3 -m http.server 8000
# or
npx serve .
```

## Deployment

The site appears to be configured for GitHub Pages deployment via the CNAME file pointing to the custom domain.

## Local Server Configuration

- This site runs on port 3005