# Technology Stack

**Analysis Date:** 2026-01-09

## Languages

**Primary:**
- TypeScript 5.4.5 - All application code (`package.json`)
- Astro (HTML-like syntax) - Component templates
- JSX/TSX - React and Preact components

**Secondary:**
- JavaScript (ES Modules) - Configuration files (`package.json` type: "module")
- CSS - Global styles and component-scoped styles

## Runtime

**Environment:**
- Node.js - Required for build and development
- Browser runtime for client-side features (React islands, animations, IndexedDB)

**Package Manager:**
- pnpm - Primary package manager
- Lockfile: `pnpm-lock.yaml` present (6,070 lines)

## Frameworks

**Core:**
- Astro 5.15.4 - Static Site Generator with islands architecture
  - `@astrojs/check` 0.9.5 - Type checking
  - `@astrojs/mdx` 4.3.10 - MDX/Markdown support
  - `@astrojs/react` 4.4.2 - React integration
  - `@astrojs/sitemap` 3.6.0 - Sitemap generation
  - `@astrojs/rss` 4.0.13 - RSS feed support

**UI Libraries:**
- React 19.2.3 - Interactive components
- Preact 10.28.1 - Lightweight React alternative
- `@preact/signals` 2.5.1 - State management for Preact

**Testing:**
- None - No test framework configured

**Build/Dev:**
- Vite 5.2.11 - Build tool (configured in `astro.config.mjs`)
- TypeScript 5.4.5 - Type checking and compilation
- PostCSS 8.4.31 - CSS processing (`postcss.config.cjs`)

## Key Dependencies

**Styling:**
- Tailwind CSS 4.1.14 - Utility CSS framework (`tailwind.config.mjs`)
  - `@tailwindcss/postcss` 4.1.18
  - `@tailwindcss/typography` 0.5.13
  - `@tailwindcss/vite` 4.1.14

**State Management:**
- nanostores 1.1.0 - Lightweight reactive stores
- `@nanostores/react` 1.0.0 - React integration
- Used in `src/stores/user-store.ts` for user profile persistence

**Animations & Interactions:**
- motion 12.23.24 - Animation library
- aos 2.3.4 - Animate On Scroll library
- matter-js 0.20.0 - 2D physics engine for interactive elements (`src/components/ui/Matter.astro`)

**Image Processing:**
- sharp 0.34.4 - Image optimization

**Icons:**
- `@lucide/astro` 0.546.0 - Icon library with Astro integration

**Development Tools:**
- `@biomejs/biome` 1.7.3 - Code formatter and linter

## Configuration

**Environment:**
- `.env.example` present - Shows required environment variables
- `PUBLIC_GA4_ID`, `PUBLIC_UMAMI_ID` for analytics
- `PUBLIC_SITE_URL` for site configuration

**Build:**
- `astro.config.mjs` - Astro configuration (site URL, integrations, aliases)
- `tailwind.config.mjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` → `src/*`)
- `src/content.config.js` - Astro Content Collections (MDX/Markdown loader)

## Platform Requirements

**Development:**
- Any platform with Node.js support
- No specific Node version requirement specified

**Production:**
- Static site - can deploy to any static hosting (Vercel, Netlify, Cloudflare Pages)
- Build output: `dist/` directory

---

*Stack analysis: 2026-01-09*
*Update after major dependency changes*
