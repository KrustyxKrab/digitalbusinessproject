---
phase: 03-hauptseite-personalisierung
plan: 02
subsystem: ui
tags: [personalization, expert-trust, recommendations, astro, widgets]

requires:
  - phase: 01-foundation-cleanup
    provides: Expert images in public/assets/experts/
  - phase: 02-fragebogen-optimierung
    provides: Quiz completion data in localStorage
provides:
  - Single source of truth for product recommendations
  - Expert trust signals in recommendation widget
  - Eliminated confusing duplication
affects: [03-03, 03-04, 04-01]

tech-stack:
  added: []
  patterns: [expert-trust-signals, overlapping-avatar-display]

key-files:
  created: []
  modified: [src/pages/index.astro, src/components/widgets/PersonalizedRecommendations.astro]

key-decisions:
  - "Removed duplicate static section - widget is single source for recommendations"
  - "Expert images with overlap effect builds credibility in personalized content"

patterns-established:
  - "Expert trust signals integrated into personalization features"

issues-created: []

duration: 1min
completed: 2026-01-09
---

# Phase 3 Plan 2: Fix Personalization Duplication & Expert Trust Summary

**Single recommendation source with overlapping expert images builds credibility and eliminates confusing duplication**

## Performance

- **Duration:** 1 min
- **Started:** 2026-01-09T14:43:48Z
- **Completed:** 2026-01-09T14:44:39Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Eliminated duplicate "Für Sie empfohlen" section - PersonalizedRecommendations widget is now single source
- Integrated expert trust signals with overlapping avatar display in widget header
- Cleaner information hierarchy without redundant product cards
- Increased recommendation credibility through expert endorsement visual

## Task Commits

1. **Task 1: Remove duplicate product recommendation section** - `2f57ea4` (feat)
2. **Task 2: Integrate expert images into recommendations widget** - `27870d5` (feat)

**Plan metadata:** _(pending)_ (docs)

## Files Created/Modified

- `src/pages/index.astro` - Removed lines 99-170 (72 lines) - duplicate static product section
- `src/components/widgets/PersonalizedRecommendations.astro` - Added expert image row with overlap effect, "Empfohlen von Zahnexperten" text

## Decisions Made

- **Single recommendation source:** PersonalizedRecommendations widget handles both personalized and default states - no need for duplicate static section
- **Expert images in widget:** Placing trust signals directly in personalized content (not global header) increases perceived personalization quality

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Next Phase Readiness

Ready for 03-03-PLAN.md (Personalized Hero Line & Trust Seals). Clean recommendation structure provides foundation for dynamic hero personalization.

---
*Phase: 03-hauptseite-personalisierung*
*Completed: 2026-01-09*
