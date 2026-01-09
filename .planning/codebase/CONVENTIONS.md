# Coding Conventions

**Analysis Date:** 2026-01-09

## Naming Patterns

**Files:**
- kebab-case for utilities: context-awareness.ts, user-store.ts, quiz-config.ts
- kebab-case for pages: dashboard.astro, routine-builder.astro
- PascalCase for components: WorkCard.astro, OnboardingQuiz.tsx, QuizStep.tsx
- Data files: kebab-case (menu.json, editorial-plan.json)

**Functions:**
- camelCase for all functions
- Example: `getGreeting()`, `getNextQuestion()`, `handleAnswer()`, `getTimeBasedGreeting()`
- No special prefix for async functions
- Event handlers: `handleEventName` pattern

**Variables:**
- camelCase for variables: `currentQuestion`, `selectedSingle`, `userProfile`, `healthScore`
- UPPER_SNAKE_CASE for constants: `MAX_PLAY_ATTEMPTS`, `PUBLIC_SITE_URL`
- No underscore prefix for private members

**Types:**
- PascalCase for interfaces: `UserProfile`, `Product`, `ProductDetail`, `DentalRoutine`
- No `I` prefix for interfaces
- PascalCase for type aliases
- Example: `interface QuizQuestion`, `interface UserProfile`

## Code Style

**Formatting:**
- Tool: Biome v1.7.3 (`.editorconfig` + Biome for formatting and linting)
- Indentation: 2 spaces (enforced by EditorConfig)
- Quotes: Single quotes for strings in TypeScript
- Semicolons: Required
- Line endings: LF (Unix-style)
- Charset: UTF-8

**Linting:**
- Tool: Biome v1.7.3
- Run: `npm run check` (executes `biome check --apply-unsafe .`)
- No ESLint or Prettier configuration files

## Import Organization

**Order:**
1. Astro imports (`@/layouts/`, `@/components/`)
2. External packages (React, Lucide icons)
3. Relative imports
4. Type imports (`import type { ... }`)

**Path Aliases:**
- `@/` maps to `src/`
- Example: `import Layout from "@/layouts/Layout.astro"`

**Grouping:**
- Imports from same package grouped together

## Error Handling

**Patterns:**
- IndexedDB operations: Promise rejection with error logging
- Image loading: Try/catch with console.error, continue with empty array
- Video autoplay: Retry logic with MAX_PLAY_ATTEMPTS constant
- Storage operations: Some missing try/catch (identified in concerns)

**Error Types:**
- Console logging preferred: `console.error()`, `console.log()`, `console.debug()`
- No custom error classes detected

## Logging

**Framework:**
- Console methods: `console.log()`, `console.error()`, `console.debug()`
- No unified logging library

**Patterns:**
- Debug messages in development
- Error logging with context
- No structured logging detected

## Comments

**When to Comment:**
- Function documentation with JSDoc style
- Complex algorithm explanations
- Business logic clarification
- Example: `src/utils/context-awareness.ts` has `/** */` block comments for exported functions

**JSDoc/TSDoc:**
- Used for exported utility functions
- Format: `/** Description */` above function
- Example:
  ```typescript
  /**
   * Get personalized greeting based on time of day
   */
  export function getGreeting(): string {
  ```

**Inline Comments:**
- Single-line `//` for implementation details
- Template comments: `<!-- HTML comment -->` in Astro files

## Function Design

**Size:**
- Most functions under 50 lines
- Complex components (Astro pages) can exceed 200 lines

**Parameters:**
- Prefer destructuring for objects
- Optional parameters marked with `?`
- Example: `interface Props { name: string; description?: string; }`

**Return Values:**
- Explicit return types in TypeScript
- No implicit returns

## Module Design

**Exports:**
- Named exports preferred
- Default exports for React components
- Example: `export function getGreeting()`, `export default OnboardingQuiz`

**Barrel Files:**
- No index.ts barrel files detected
- Direct imports used throughout

## TypeScript Configuration

**Settings:**
- `strictNullChecks: true` enabled
- Path aliases: `@/*` → `src/*`
- Type imports: `import type { ... }` pattern used
- Missing: Full `strict: true` mode (noted in concerns)

---

*Convention analysis: 2026-01-09*
*Update when patterns change*
