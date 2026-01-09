# Codebase Concerns

**Analysis Date:** 2026-01-09

## Tech Debt

**Missing Test Coverage:**
- Issue: No test framework or test files present
- Files: Entire codebase (0 test files)
- Why: Rapid MVP development without test infrastructure
- Impact: No automated validation of business logic, quiz flow, or recommendations
- Fix approach: Add Vitest, write unit tests for `src/utils/context-awareness.ts`, `src/components/onboarding/quiz-config.ts`, `src/stores/user-store.ts`

**Duplicated IndexedDB Code:**
- Issue: Database open/transaction pattern repeated across files
- Files: `src/stores/user-store.ts` (lines 44-62, 72-84), `src/components/onboarding/OnboardingQuiz.tsx` (lines 56-77)
- Why: No shared database utility abstraction
- Impact: ~30 lines of duplicated boilerplate; changes must be made in multiple places
- Fix approach: Create `src/utils/db.ts` with reusable `openDB()`, `saveToStore()`, `loadFromStore()` functions

**Inconsistent Error Logging:**
- Issue: Mix of `console.error()`, `console.log()`, `console.debug()` throughout code
- Files: `src/components/ui/Matter.astro`, `src/components/sections/Explore.astro`, `src/components/onboarding/QuizResults.tsx`
- Why: No unified logging strategy
- Impact: Debug statements in production code; no centralized error tracking
- Fix approach: Create logging utility with levels (debug/info/error), configure production to suppress debug logs

## Known Bugs

**No Critical Bugs Identified**

## Security Considerations

**Sensitive User Data in LocalStorage:**
- Risk: User dental issues and health scores stored in plaintext localStorage
- Files: `src/components/onboarding/QuizResults.tsx` (line 98: `localStorage.setItem('elmex-user-profile', ...)`)
- Current mitigation: None (localStorage is plaintext)
- Recommendations: Consider encryption for sensitive health data, or move to more secure storage

**Missing Content Security Policy:**
- Risk: No CSP headers detected
- Files: No CSP configuration in `astro.config.mjs`
- Current mitigation: None
- Recommendations: Add CSP headers to protect against XSS, especially with analytics scripts

**Untyped Google Analytics:**
- Risk: `gtag` declared as `any` type
- Files: `src/env.d.ts` (line 1: `declare var gtag: any;`)
- Current mitigation: None
- Recommendations: Add proper TypeScript types for Google Analytics

## Performance Bottlenecks

**Inefficient Array Deduplication:**
- Problem: Triple array pass for deduplication
- Files: `src/utils/context-awareness.ts` (lines 99-101)
- Measurement: O(n²) instead of O(n) for recommendation deduplication
- Cause: `Array.from(Set)` + `.map(find)` + `.filter()`
- Improvement path: Use `Map` for single-pass deduplication

**Unoptimized Product Filtering:**
- Problem: Nested `.filter()` with `.some()` checking benefits
- Files: `src/utils/context-awareness.ts` (lines 66-86)
- Measurement: O(n*m) where n=products, m=benefits
- Cause: For each product, iterates through all benefits
- Improvement path: Pre-index products by benefit keywords

**Matter.js Physics Re-initialization:**
- Problem: Creates 15 physics bodies every intersection observer trigger
- Files: `src/components/ui/Matter.astro` (lines 194-198)
- Measurement: Potential multiple physics engines if section scrolls in/out
- Cause: No cleanup of previous physics engine instances
- Improvement path: Add cleanup in intersection observer, singleton pattern for physics engine

## Fragile Areas

**IndexedDB Without Browser Support Check:**
- Why fragile: Assumes IndexedDB availability without fallback
- Files: `src/stores/user-store.ts` (line 96)
- Common failures: Private browsing mode, older browsers, disabled storage
- Safe modification: Add feature detection, provide localStorage fallback
- Test coverage: None

**Missing Error Handling in Storage Operations:**
- Why fragile: `localStorage.setItem()` can throw if full or disabled
- Files: `src/components/onboarding/QuizResults.tsx` (line 98)
- Common failures: Storage full, private browsing, quota exceeded
- Safe modification: Wrap in try/catch with user notification
- Test coverage: None

**Video Autoplay Without Timeout:**
- Why fragile: Retry logic without overall timeout
- Files: `src/components/sections/Explore.astro` (lines 442-467)
- Common failures: Promise never resolves, memory leak from pending retries
- Safe modification: Add 10-second overall timeout across all retries
- Test coverage: None

## Scaling Limits

**Client-side Data Storage:**
- Current capacity: IndexedDB ~50MB typical limit per origin
- Limit: Large user profiles or many quiz results could hit quota
- Symptoms at limit: Storage operations fail, user data lost
- Scaling path: Implement backend API for persistent storage

**Static Site Build Time:**
- Current: Not measured
- Limit: As blog posts and products grow, build time increases
- Symptoms: Slower deployments, CI/CD timeout
- Scaling path: Implement incremental static regeneration (ISR)

## Dependencies at Risk

**No High-Risk Dependencies Identified**

- All dependencies are actively maintained
- No deprecated packages detected

## Missing Critical Features

**Backend Data Persistence:**
- Problem: All data stored client-side only
- Current workaround: Users store data locally (lost if cache cleared)
- Blocks: Multi-device sync, data backup, analytics on user behavior
- Implementation complexity: Medium (requires backend API, database, authentication)

**Error Tracking Service:**
- Problem: No error monitoring (Sentry, Bugsnag, etc.)
- Current workaround: Console logging only
- Blocks: Production error visibility, debugging user issues
- Implementation complexity: Low (add Sentry SDK, configure DSN)

**Test Infrastructure:**
- Problem: No automated testing
- Current workaround: Manual testing only
- Blocks: Confident refactoring, regression prevention, CI/CD validation
- Implementation complexity: Medium (setup Vitest, write initial test suite)

## Test Coverage Gaps

**Business Logic Untested:**
- What's not tested: Quiz flow logic in `src/components/onboarding/quiz-config.ts`
- Risk: Wrong questions shown, incorrect recommendations
- Priority: High
- Difficulty: Low (pure functions, easy to test)

**Recommendation Algorithm Untested:**
- What's not tested: `getContextualRecommendations()` in `src/utils/context-awareness.ts`
- Risk: Wrong products recommended to users
- Priority: High
- Difficulty: Low (pure function with predictable inputs/outputs)

**IndexedDB Operations Untested:**
- What's not tested: Storage and retrieval in `src/stores/user-store.ts`
- Risk: Data corruption, silent storage failures
- Priority: Medium
- Difficulty: Medium (requires IndexedDB mocking)

**Quiz Answer Analysis Untested:**
- What's not tested: `analyzeAnswers()` in `src/components/onboarding/QuizResults.tsx`
- Risk: Incorrect health scores, wrong product suggestions
- Priority: High
- Difficulty: Low (pure function)

---

*Concerns audit: 2026-01-09*
*Update as issues are fixed or new ones discovered*
