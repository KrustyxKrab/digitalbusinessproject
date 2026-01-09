---
phase: 02-fragebogen-optimierung
plan: 01
subsystem: onboarding
tags: [react, quiz, trust-building, ux, time-transparency]

# Dependency graph
requires:
  - phase: 01-02
    provides: Expert images organized in public/assets/experts/
provides:
  - Expert images header on quiz start screen for trust-building
  - Welcome question with time estimate (2-3 minutes)
  - Skip option to bypass quiz directly to results
  - Main-page-only popup restriction for better UX
affects: [02-02, 02-03, 02-04]

# Tech tracking
tech-stack:
  added: []
  patterns: [First-visit modal pattern, localStorage-based visitor tracking, pathname-based route checking]

key-files:
  created: []
  modified:
    - src/components/onboarding/OnboardingQuiz.tsx
    - src/components/onboarding/quiz-config.ts
    - src/pages/index.astro

key-decisions:
  - "Welcome question as first step with explicit time estimate for transparency"
  - "Skip option allows users to bypass quiz and go directly to results"
  - "Quiz popup restricted to main landing page only via pathname check"

patterns-established:
  - "Expert images display pattern: 3 images in horizontal row with rounded-full borders"
  - "Time transparency: Always show duration estimates for user actions"

issues-created: []

# Metrics
duration: 9min
completed: 2026-01-09
---

# Phase 2 Plan 1: Experten-Bilder, Welcome Screen & Zeitangabe Summary

**Trust-building quiz introduction with expert images, welcome screen with time estimate, and main-page-only popup restriction**

## Performance

- **Duration:** 9 min
- **Started:** 2026-01-09T14:57:17Z
- **Completed:** 2026-01-09T15:05:53Z
- **Tasks:** 3 (2 auto + 1 checkpoint)
- **Files modified:** 3

## Accomplishments
- Expert images header displays 3 expert photos on quiz start screen for credibility
- Welcome question as first step with "2-3 Minuten" time estimate for transparency
- Skip option allows users to bypass quiz and navigate directly to results
- Quiz popup restricted to main landing page only for better UX

## Task Commits

Each task was committed atomically:

1. **Task 1: Add expert images header to quiz** - `a9ca843` (feat)
2. **Task 2: Add welcome question before quiz starts** - `e958df9` (feat)
3. **User-requested fix: Restrict quiz popup to main page** - `1d9dfef` (fix)

**Plan metadata:** (to be added in docs commit)

## Files Created/Modified
- `src/components/onboarding/OnboardingQuiz.tsx` - Added expert images header above greeting on start screen
- `src/components/onboarding/quiz-config.ts` - Added 'welcome' question as first step with time estimate and skip option
- `src/pages/index.astro` - Added pathname check to restrict popup to main landing page only

## Decisions Made
- **Welcome question first:** Users see time commitment upfront (2-3 minutes) before starting
- **Skip option to results:** Respects user autonomy - can bypass quiz entirely
- **Expert images on start screen only:** Builds trust at decision point, not on every question
- **Main-page-only popup:** Prevents intrusive popup behavior on other pages

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Quiz popup restricted to main landing page only**
- **Found during:** Task 3 (Human verification checkpoint)
- **Issue:** User identified that quiz popup should only appear on main landing page, not on other pages where it would be intrusive
- **Fix:** Added pathname check (`window.location.pathname === '/' || window.location.pathname === '/index.html'`) to modal display logic
- **Files modified:** src/pages/index.astro
- **Verification:** Build passes, popup now only triggers on main landing page
- **Committed in:** 1d9dfef

---

**Total deviations:** 1 auto-fixed (missing critical UX improvement)
**Impact on plan:** Fix necessary for optimal user experience - prevents annoying popup behavior on non-landing pages

## Issues Encountered

None - execution proceeded smoothly with user approval at checkpoint

## Next Phase Readiness

Ready for 02-02: Neue Fragen hinzufügen (Putztechnik, Essgewohnheiten, Rauchen/Tee/Kaffee)

All quiz infrastructure enhancements in place:
- Welcome screen establishes trust and expectations
- Expert images pattern can be reused in future features
- Time transparency pattern established for user-facing actions

---
*Phase: 02-fragebogen-optimierung*
*Completed: 2026-01-09*
