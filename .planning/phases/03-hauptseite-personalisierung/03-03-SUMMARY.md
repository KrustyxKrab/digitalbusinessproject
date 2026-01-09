---
phase: 03-hauptseite-personalisierung
plan: 03
subsystem: ui
tags: [personalization, seo, schema-org, hero-line, trust-signals]

# Dependency graph
requires:
  - phase: 02-fragebogen-optimierung
    provides: Quiz data structure in localStorage (concern, ageGroup, dentistFrequency, etc.)
provides:
  - Personalized hero messaging based on quiz answers
  - SEO-crawlable trust seals with schema.org Brand markup
  - Accessibility-enhanced trust signals
affects: [03-04-product-finder, future-personalization]

# Tech tracking
tech-stack:
  added: []
  patterns: [client-side-personalization, schema-org-structured-data, accessibility-semantic-html]

key-files:
  created: []
  modified: [src/pages/index.astro]

key-decisions:
  - "Hero personalization priority: dentistFrequency === 'never' → concern-based → ageGroup-based"
  - "Schema.org Brand markup for trust bar to enhance SEO crawlability"
  - "Semantic article tags for trust credentials signal importance to crawlers"

patterns-established:
  - "data-personalized attributes for script targeting"
  - "Silent error handling in personalization scripts (console.error, no UI break)"
  - "sr-only class for screen reader accessibility"

issues-created: []

# Metrics
duration: 2min
completed: 2026-01-09
---

# Phase 3 Plan 3: Personalized Hero Line & Trust Seals Summary

**Dynamic hero messaging with quiz-based personalization and SEO-optimized trust signals using schema.org Brand markup**

## Performance

- **Duration:** 2 min
- **Started:** 2026-01-09T14:47:19Z
- **Completed:** 2026-01-09T14:49:24Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Personalized hero headline adapts to quiz answers (concern, ageGroup, dentistFrequency) with priority-based messaging
- Subheadline dynamically adjusts to user's specific concern
- Trust bar enhanced with schema.org Brand structured data for SEO
- Semantic article tags improve crawlability of credentials
- Accessibility improved with ARIA labels and sr-only spans for screen readers
- Fallback text preserved for first-time visitors without quiz data

## Task Commits

Each task was committed atomically:

1. **Task 1: Implement personalized hero line with quiz data** - `c7bab95` (feat)
2. **Task 2: Add crawlable trust seals with schema.org markup** - `cf81774` (feat)

## Files Created/Modified

- `src/pages/index.astro` - Added personalized hero script reading localStorage quiz data, priority-based headline generation (dentistFrequency → ageGroup → concern), dynamic subheadline with concern context. Enhanced trust bar with schema.org Brand markup, semantic article tags, itemprop="award", ARIA labels, sr-only spans for accessibility.

## Decisions Made

**Hero personalization priority order:**
1. `dentistFrequency === 'never'` → "Professionelle Beratung, jetzt verfügbar" (highest priority - addresses critical health gap)
2. `ageGroup === 'junior' or 'baby'` → "Zahngesundheit von Anfang an" (age-specific messaging)
3. `concern` → Concern-based messaging (sensitivity, cavity, gum, whitening)

**Rationale:** Priority reflects urgency and specificity. Users who never visit dentists need immediate engagement. Age-specific messaging for children is more relevant than generic concern-based messaging.

**Schema.org Brand vs Product:**
Brand markup chosen over Product because trust signals represent the elmex brand reputation (dentist recommendations, clinical testing, Made in Germany) rather than specific product attributes.

**Semantic article tags:**
Each trust credential wrapped in `<article itemprop="award">` to signal importance to search crawlers without changing visual design. Maintains identical user experience while improving SEO.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Next Phase Readiness

- Hero personalization complete and responsive to quiz data
- Trust signals SEO-optimized with structured data
- Fallback messaging ensures first-time visitors see value
- Ready for 03-04-PLAN.md (Prominent Product Finder & Advisory Tips)

---
*Phase: 03-hauptseite-personalisierung*
*Completed: 2026-01-09*
