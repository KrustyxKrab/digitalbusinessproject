# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-01-09)

**Core value:** Personalisierung als Gesamtpaket: Zero-Party-Data-Erfassung → individualisierte Produktempfehlungen → Dashboard-basiertes Tracking → kontextbewusste Beratung
**Current focus:** v1.1 — Product System Fix (critical infrastructure work)

## Current Position

Milestone: v1.1 Product System Fix
Phase: 9 of 12 (Dynamic Routing Implementation)
Plan: 09-01 Complete
Status: Ready for Phase 10
Last activity: 2026-01-11 — Phase 9 Plan 1 complete (Dynamic slug-based routing for all products)

Progress: ████░░░░░░ 40% (of v1.1 milestone - 2/5 phases complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 18
- Average duration: 3 min
- Total execution time: 1.2 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1. Foundation & Cleanup | 2 | 8 min | 4 min |
| 2. Fragebogen-Optimierung | 4 | 21 min | 5 min |
| 3. Hauptseite-Personalisierung | 5 | 8 min | 2 min |
| 4. Produktsystem-Überarbeitung | 5 | 15 min | 3 min |
| 8. Product Data Migration | 1 | 15 min | 15 min |
| 9. Dynamic Routing Implementation | 1 | 5 min | 5 min |

**Recent Trend:**
- Last 5 plans: 04-04 (3min), 04-05 (3min), 08-01 (15min), 09-01 (5min)
- Trend: Consistent execution, infrastructure work varies 5-15min based on complexity

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

| Phase | Decision | Rationale |
|-------|----------|-----------|
| 01-02 | Product folder naming: use slug format (kariesschutz-zahnpasta) | Consistency with URL routing and better readability |
| 01-02 | Image naming: {slug}_01.png, {slug}_02.png, {slug}_03.png | Ensures unique names, purpose-aligned numbering |
| 01-02 | Metadata format: JSON files matching ProductDetail interface | Ready for dynamic routing in Phase 4 |
| 01-02 | Expert images location: public/assets/experts/ | More semantic, consistent with asset organization patterns |
| 02-01 | Welcome question as first step with time estimate | Transparency about quiz duration (2-3 minutes) before user commits |
| 02-01 | Skip option to bypass quiz | Respects user autonomy - can go directly to results |
| 02-01 | Quiz popup restricted to main landing page only | Prevents intrusive popup behavior on other pages |
| 02-02 | Brushing technique as multiple-selection | Users often combine techniques, multiple selection captures real behavior |
| 02-02 | Eating habits focus on dental risk factors | Target behaviors with dental impact (sugar, acid, snacking) |
| 02-02 | Consumption limited to daily habits | Coffee, tea, smoking tracked for direct dental health implications |
| 02-03 | 2x/year marked as recommended for healthcare | Aligns with dental health best practices for visits and cleanings |
| 02-03 | Healthcare questions at end of quiz | Natural flow from daily habits → professional care |
| 02-04 | Account creation optional, not required | Quiz works perfectly in guest mode - respects user autonomy |
| 02-04 | No password for prototype simplicity | Account only captures email and name, avoiding auth complexity |
| 02-04 | localStorage for account preference | Integrated into existing user profile structure |
| 03-01 | Hook headline specificity over generic messaging | "welcher Zahntyp" performs better than vague "Zahngesundheit verbessern" |
| 03-01 | Minimal design with borders vs gradient backgrounds | Reduces visual competition, focuses attention on content and messaging |
| 03-02 | Single recommendation source (widget only) | Eliminates duplication, widget handles personalized and default states |
| 03-02 | Expert images in personalized content | Trust signals directly in personalized context increase perceived quality |
| 03-03 | Hero personalization priority: dentistFrequency → ageGroup → concern | Priority reflects urgency and specificity for most relevant messaging |
| 03-03 | Schema.org Brand markup for trust bar | Enhances SEO crawlability and enables Knowledge Graph features |
| 03-04 | Product finder after personalized recommendations | Above-fold positioning with high visibility increases engagement significantly |
| 03-04 | Full-width centered layout over split grid | Single prominent CTA converts better than competing actions |
| 03-04 | Advisory section after blog preview | Strategic engagement point captures content-interested users before footer |
| 03-04 | Problem category chips in advisory | Specific pain points resonate better than generic tips |
| 03-05 | FAQ accordion: one open at a time | Focused reading experience reduces cognitive load, keeps page scannable |
| 03-05 | 30 daily tips for monthly rotation | Full month of unique content before repeat keeps feature fresh, balances variety with maintenance |
| 03-05 | localStorage date tracking for tips | Ensures same tip all day, changes at midnight for consistent user experience |
| 08-01 | SKU pattern: EL-{LINE}-{TYPE}-{SIZE} | Consistent product identification across catalog |
| 08-01 | Default pricing: €3.99 toothpastes, €2.99 accessories | Standardized pricing structure for product catalog |
| 08-01 | Expert attribution: Dr. Sarah Schmidt | Trusted authority figure across all products for consistency |
| 08-01 | Buy links: dm, Rossmann, REWE | Standardized retailer selection for availability |
| 09-01 | Dynamic route with getStaticPaths | Single [slug].astro serves all 16 products reading from public/products/ |
| 09-01 | Ingredient transformation for compatibility | Simple arrays converted to detailed format {active, other} |
| 09-01 | Graceful JSON error handling | Invalid products logged but don't break build |

### Deferred Issues

**From v1.0 roadmap (now Future milestone):**
- Phase 5: Dashboard & Routine - Deferred pending product system fix
- Phase 6: Beratung & Wissen - Deferred pending product system fix
- Phase 7: Features & Polish - Deferred pending product system fix

**Rationale:** Product system has critical issues (hardcoded products, no slug routing, missing JSON metadata) that must be resolved before continuing with dashboard and advanced features.

### Blockers/Concerns

None yet.

### Roadmap Evolution

- v1.0 Foundation shipped: 4 phases (Phase 1-4) on 2026-01-09
- v1.1 Product System Fix created: 5 phases (Phase 8-12) on 2026-01-11 - critical infrastructure work to fix product routing and data structure

## Session Continuity

Last session: 2026-01-11 16:21
Stopped at: Phase 9 Plan 1 complete
Resume file: None
