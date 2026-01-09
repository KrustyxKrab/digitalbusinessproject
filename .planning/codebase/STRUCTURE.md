# Codebase Structure

**Analysis Date:** 2026-01-09

## Directory Layout

```
elmexde-dbproject/
├── src/
│   ├── pages/                 # Route definitions (file-based routing)
│   │   ├── api/              # API routes
│   │   ├── beratung/         # Consultation pages
│   │   ├── blog/             # Blog listing & dynamic posts
│   │   └── produkte/         # Product pages
│   ├── components/            # Reusable components
│   │   ├── ui/               # Basic UI elements
│   │   ├── sections/         # Page sections
│   │   ├── cards/            # Card components
│   │   ├── widgets/          # Feature widgets
│   │   └── onboarding/       # Onboarding quiz (React)
│   ├── layouts/              # Page layout templates
│   ├── stores/               # State management (Nanostores)
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── config/               # Configuration files
│   ├── collections/          # Data collections (JSON)
│   ├── content/              # Content source files (MDX)
│   └── styles/               # Global styles
├── public/                    # Static assets
├── dist/                     # Build output (generated)
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.cjs        # PostCSS configuration
├── package.json              # Dependencies
└── pnpm-lock.yaml           # Dependency lock file
```

## Directory Purposes

**src/pages/**
- Purpose: Route definitions using file-based routing
- Contains: `.astro` page files, API routes
- Key files:
  - `index.astro` - Homepage
  - `dashboard.astro` - User dashboard
  - `onboarding.astro` - Onboarding flow
  - `routine-builder.astro` - Routine builder tool
  - `subscription.astro` - Subscription management
  - `api/health.ts` - Health check endpoint
  - `blog/[...slug].astro` - Dynamic blog post routes
  - `produkte/[slug].astro` - Dynamic product detail routes

**src/components/**
- Purpose: Reusable Astro and React components
- Subdirectories:
  - `ui/` - Basic elements (Button, Logo, Matter, AnimatedText)
  - `sections/` - Page sections (Header, Footer, FeaturedWork)
  - `cards/` - Card components (WorkCard, BlogCard)
  - `widgets/` - Feature widgets (Meta, StructuredData, PersonalizedRecommendations, TrackGa, CookieConsent)
  - `onboarding/` - Quiz components (OnboardingQuiz.tsx, QuizStep.tsx, QuizResults.tsx, quiz-config.ts)

**src/layouts/**
- Purpose: Page layout templates
- Contains:
  - `Layout.astro` - Master layout (header + footer + meta)
  - `PageLayout.astro` - Standard page template
  - `ArticleLayout.astro` - Article-specific layout
  - `PostLayout.astro` - Blog post layout

**src/stores/**
- Purpose: State management with Nanostores
- Contains:
  - `user-store.ts` - User profile, health score, routine state with IndexedDB persistence

**src/types/**
- Purpose: TypeScript type definitions
- Contains:
  - `models.ts` - Core data models (UserProfile, Product, DentalRoutine, Subscription, etc.)

**src/utils/**
- Purpose: Utility functions
- Contains:
  - `context-awareness.ts` - Time-based personalization logic

**src/config/**
- Purpose: Configuration files
- Contains:
  - `site.js` - Site metadata and configuration

**src/collections/**
- Purpose: Data collections
- Contains:
  - `menu.json` - Navigation menu structure

**src/content/**
- Purpose: Content source files
- Contains:
  - `post/` - Blog posts (Markdown/MDX)
  - `editorial-plan.json` - Content calendar

**src/styles/**
- Purpose: Global styles
- Contains:
  - `global.css` - Tailwind directives & theme
  - `article.css` - Article typography
  - `aos-custom.css` - AOS animation customization

## Key File Locations

**Entry Points:**
- Homepage: `src/pages/index.astro`
- Dashboard: `src/pages/dashboard.astro`
- API health: `src/pages/api/health.ts`

**Configuration:**
- Astro: `astro.config.mjs`
- Tailwind: `tailwind.config.mjs`
- TypeScript: `tsconfig.json`
- PostCSS: `postcss.config.cjs`
- Content: `src/content.config.js`

**Core Logic:**
- State management: `src/stores/user-store.ts`
- Type definitions: `src/types/models.ts`
- Personalization: `src/utils/context-awareness.ts`
- Quiz logic: `src/components/onboarding/quiz-config.ts`

## Naming Conventions

**Files:**
- Pages: kebab-case (dashboard.astro, routine-builder.astro)
- Components: PascalCase (Header.astro, OnboardingQuiz.tsx)
- Utilities: kebab-case (context-awareness.ts, user-store.ts)
- Config: kebab-case (quiz-config.ts)

**Directories:**
- Plural for collections: pages/, components/, layouts/, stores/, types/, utils/, styles/
- Feature-based: onboarding/, ar/, subscription/, profile/

**Special Patterns:**
- Layout files: Layout.astro, PageLayout.astro
- Dynamic routes: [slug].astro, [...slug].astro

## Where to Add New Code

**New Page:**
- Primary code: `src/pages/{name}.astro`
- Layout: Use `src/layouts/Layout.astro` or create specialized layout

**New Component:**
- UI component: `src/components/ui/{Name}.astro`
- Section: `src/components/sections/{Name}.astro`
- Widget: `src/components/widgets/{Name}.astro`
- Interactive (React): `src/components/{feature}/{Name}.tsx`

**New State:**
- Store: `src/stores/{name}-store.ts`
- Type: Add to `src/types/models.ts`

**New Utility:**
- Function: `src/utils/{name}.ts`

**New Content:**
- Blog post: `src/content/post/{slug}.md` or `.mdx`

## Special Directories

**dist/**
- Purpose: Build output (static site)
- Source: Generated by Astro build
- Committed: No (in .gitignore)

**.astro/**
- Purpose: Astro generated types
- Source: Auto-generated by Astro
- Committed: No (in .gitignore)

**node_modules/**
- Purpose: Dependencies
- Source: Installed by pnpm
- Committed: No (in .gitignore)

---

*Structure analysis: 2026-01-09*
*Update when directory structure changes*
