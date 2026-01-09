# Architecture

**Analysis Date:** 2026-01-09

## Pattern Overview

**Overall:** Static Site Generator with Interactive Components (Astro Islands Architecture)

**Key Characteristics:**
- Build-time static HTML generation (SSG)
- Client-side interactivity through React islands
- Content-first JAMstack approach
- No server-side runtime

## Layers

**Presentation Layer** (`src/pages/`, `src/layouts/`, `src/components/`)
- Purpose: Route definitions and UI rendering
- Contains: Astro pages (file-based routing), layout templates, reusable components
- Depends on: State management, business logic, styling
- Used by: Browser (as rendered HTML)
- Entry points: `src/pages/index.astro`, `src/pages/dashboard.astro`

**State Management Layer** (`src/stores/`)
- Purpose: Client-side reactive state
- Contains: Nanostores with IndexedDB persistence
- Location: `src/stores/user-store.ts`
- Depends on: IndexedDB API, type definitions
- Used by: React components
- Pattern: Reactive stores with browser-only initialization

**Business Logic Layer** (`src/utils/`, `src/components/`)
- Purpose: Core application logic
- Contains: Context-awareness utilities, quiz logic, recommendations
- Location: `src/utils/context-awareness.ts`, `src/components/onboarding/quiz-config.ts`
- Depends on: Type definitions, product data
- Used by: Components, pages

**Data Layer** (`src/types/`, `src/content/`)
- Purpose: Type definitions and static content
- Contains: TypeScript interfaces, Markdown content, JSON collections
- Location: `src/types/models.ts`, `src/content/`, `src/collections/`
- Depends on: Nothing (pure data)
- Used by: All other layers

**API Layer** (`src/pages/api/`)
- Purpose: Minimal backend endpoints
- Contains: Health check endpoint
- Location: `src/pages/api/health.ts`
- Depends on: Nothing
- Used by: External monitoring

**Styling Layer** (`src/styles/`)
- Purpose: Global and component styles
- Contains: Tailwind CSS, custom CSS, animation styles
- Location: `src/styles/global.css`, `src/styles/article.css`, `src/styles/aos-custom.css`
- Depends on: Tailwind CSS framework
- Used by: All components

## Data Flow

**Static Generation Flow** (Build Time):
1. Astro builder processes `src/pages/*.astro` → Static HTML
2. Layout components wrap page content
3. Markdown content loaded via `@astrojs/mdx`
4. React islands marked for hydration
5. Vite bundles client-side JavaScript
6. Output written to `dist/`

**User Request Flow** (Runtime):
1. Browser requests static HTML from server/CDN
2. Layout (`src/layouts/Layout.astro`) renders with header/footer
3. Interactive React components hydrate (OnboardingQuiz, QuizResults)
4. State initializes from IndexedDB (`src/stores/user-store.ts`)
5. Nanostores trigger React re-renders on state changes
6. User interactions update IndexedDB

**Data Persistence Flow:**
```
User Action → React Component → Nanostores → IndexedDB
IndexedDB → user-store initialization → Component props
```

## Key Abstractions

**Layout Composition:**
- `src/layouts/Layout.astro` - Master layout (header, footer, meta)
- `src/layouts/PageLayout.astro` - Standard page wrapper
- `src/layouts/ArticleLayout.astro` - Blog/article template
- `src/layouts/PostLayout.astro` - Post listing template

**Component Categories:**
- **UI Components** (`src/components/ui/`): Button, Logo, Matter (3D physics), AnimatedText
- **Section Components** (`src/components/sections/`): Header, Footer, FeaturedWork, BlogSection
- **Card Components** (`src/components/cards/`): WorkCard, BlogCard
- **Widget Components** (`src/components/widgets/`): Meta, StructuredData, PersonalizedRecommendations, TrackGa, CookieConsent
- **Interactive Components** (React): OnboardingQuiz, QuizStep, QuizResults, QuizProgress

**Service-like Functions:**
- `src/utils/context-awareness.ts`:
  - `getGreeting()` - Time-based greeting
  - `getPersonalizedMessage()` - User-aware messaging
  - `getContextualRecommendations()` - Product recommendations
  - `shouldShowRoutineReminder()` - Routine timing logic

**Type-Driven Development:**
- `src/types/models.ts` - Comprehensive interfaces for UserProfile, Product, DentalRoutine, Subscription, Dentist, Prescription, ChatMessage, QuizResult

## Entry Points

**Primary:**
- Homepage: `src/pages/index.astro`
- Dashboard: `src/pages/dashboard.astro`
- API health check: `src/pages/api/health.ts`

**Dynamic Routes:**
- Blog posts: `src/pages/blog/[...slug].astro`
- Product details: `src/pages/produkte/[slug].astro`

**Build Configuration:**
- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind theme
- `tsconfig.json` - TypeScript settings with path aliases

## Error Handling

**Strategy:** Client-side error logging with console messages

**Patterns:**
- IndexedDB operations: Promise rejection with error logging
- Image loading: Silent failure with empty array fallback
- Video autoplay: Retry logic with exponential backoff

## Cross-Cutting Concerns

**SEO & Metadata:**
- Schema.org structured data via `src/components/widgets/StructuredData.astro`
- Meta tags via `src/components/widgets/Meta.astro`

**Analytics:**
- Google Analytics 4 and Umami via `src/components/widgets/TrackGa.astro`
- Cookie consent management via `src/components/widgets/CookieConsent.astro`

**Personalization:**
- Time-based recommendations via `src/utils/context-awareness.ts`
- User profile storage in IndexedDB

**Animations:**
- AOS (Animate On Scroll) library
- Motion library for component animations
- Matter.js for physics simulations

---

*Architecture analysis: 2026-01-09*
*Update when major patterns change*
