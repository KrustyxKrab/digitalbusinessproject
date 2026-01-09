# Testing Patterns

**Analysis Date:** 2026-01-09

## Test Framework

**Current Status: NO FORMAL TESTING INFRASTRUCTURE**

**Runner:**
- None configured

**Assertion Library:**
- None

**Run Commands:**
- No test scripts in package.json
- Build includes type checking: `npm run build` executes `astro check && astro build`

## Test File Organization

**Location:**
- No test files found in `src/`
- No `*.test.*` or `*.spec.*` files
- No `__tests__/` directories

**Naming:**
- Not applicable (no tests)

**Structure:**
- Not applicable (no tests)

## Test Structure

**Suite Organization:**
- Not applicable (no test framework)

**Patterns:**
- Not applicable (no tests)

## Mocking

**Framework:**
- Not applicable (no test framework)

**Patterns:**
- Not applicable (no tests)

## Fixtures and Factories

**Test Data:**
- Not applicable (no tests)

**Location:**
- Not applicable (no tests)

## Coverage

**Requirements:**
- No coverage requirements
- No coverage tooling

**Configuration:**
- Not applicable

## Test Types

**Unit Tests:**
- Not present

**Integration Tests:**
- Not present

**E2E Tests:**
- Not present

## Common Patterns

**Code Organization for Testability:**
- Pure functions isolated in `src/utils/context-awareness.ts`
- Store logic separated in `src/stores/user-store.ts`
- Configuration isolated in `src/components/onboarding/quiz-config.ts`
- Type definitions centralized in `src/types/models.ts`

**Modular Components:**
- Quiz broken into: OnboardingQuiz, QuizStep, QuizProgress, QuizResults, quiz-config
- Reusable UI components

## Quality Assurance

**Type Checking:**
- Astro check runs during build: `astro check`
- TypeScript 5.4.5 with `strictNullChecks: true`

**Code Quality:**
- Biome v1.7.3 for linting and formatting
- Run: `npm run check` (executes `biome check --apply-unsafe .`)

## Recommendations

**High-Priority Test Candidates:**
1. `src/components/onboarding/quiz-config.ts` - Quiz flow logic
2. `src/utils/context-awareness.ts` - Recommendation algorithms
3. `src/stores/user-store.ts` - IndexedDB operations
4. `src/components/onboarding/QuizResults.tsx` - Answer analysis

**Suggested Test Structure** (if implementing):
- Unit tests: `src/**/*.test.ts` (co-located with source)
- Component tests: `src/**/*.spec.tsx` for React components
- Integration tests: `src/__tests__/integration/`
- E2E tests: `e2e/` directory

**Test Framework Recommendations:**
- Vitest for unit tests (Vite-native)
- React Testing Library for component tests
- Playwright for E2E tests

---

*Testing analysis: 2026-01-09*
*Update when test patterns change*
