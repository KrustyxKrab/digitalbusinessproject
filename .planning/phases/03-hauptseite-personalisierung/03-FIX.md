---
phase: 03-hauptseite-personalisierung
plan: 03-FIX
type: fix
---

<objective>
Fix 10 UAT issues from Phase 3 testing.

Source: 03-ISSUES.md
Priority: 2 blocker, 6 major, 2 minor
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/execute-phase.md
@~/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md

**Issues being fixed:**
@.planning/phases/03-hauptseite-personalisierung/03-ISSUES.md

**Original plans for reference:**
@.planning/phases/03-hauptseite-personalisierung/03-01-SUMMARY.md
@.planning/phases/03-hauptseite-personalisierung/03-03-SUMMARY.md
@.planning/phases/03-hauptseite-personalisierung/03-04-SUMMARY.md
</context>

<tasks>

<task type="auto">
  <name>Fix UAT-004: Hero headline personalization not working</name>
  <files>src/pages/index.astro</files>
  <action>
    Debug and fix hero personalization script:

    1. Check that script runs after DOM loads (DOMContentLoaded)
    2. Verify localStorage key 'elmex-user-profile' is correctly read
    3. Ensure selectors match elements: [data-personalized="headline"] and [data-personalized="subheadline"]
    4. Test all personalization paths:
       - dentistFrequency === 'never'
       - ageGroup === 'junior' or 'baby'
       - concern values (sensitivity, cavity, gum, whitening)
    5. Verify fallback works for users without quiz data
    6. Check console for any JavaScript errors

    WHY critical: Core feature of Phase 3 - personalization is the main value proposition
  </action>
  <verify>
    1. Clear localStorage
    2. Load homepage - shows fallback "Zahngesundheit für die ganze Familie"
    3. Complete quiz with concern='sensitivity'
    4. Return to homepage - headline changes to "Ihre Lösung für empfindliche Zähne"
    5. No console errors
  </verify>
  <done>Hero headline personalizes correctly based on quiz data, fallback works, no errors</done>
</task>

<task type="auto">
  <name>Fix UAT-008 & UAT-003: Add real products to homepage</name>
  <files>src/components/widgets/PersonalizedRecommendations.astro, src/pages/index.astro</files>
  <action>
    Integrate real product data from product slugs:

    1. In PersonalizedRecommendations.astro:
       - Import product metadata from public/produkte/ folders
       - Read metadata.json files for product info (or create product data structure)
       - Display real product cards with:
         * Product images from public/produkte/{slug}/
         * Product names, descriptions from metadata
         * Link to /produkte/{slug}

    2. Product selection logic:
       - If user has quiz data: Show personalized products based on concern/ageGroup
       - If no quiz data: Show default featured products (e.g., SENSITIVE Professional, Kariesschutz)

    3. Ensure 3-4 products visible on homepage

    WHY critical: Visitors need to see what products site offers - blockers for conversion
  </action>
  <verify>
    1. Load homepage - see 3-4 real product cards with images and names
    2. Click product card - navigates to /produkte/{slug}
    3. Complete quiz - products update based on concern
  </verify>
  <done>Real products from slug system visible on homepage, personalization works, links functional</done>
</task>

<task type="auto">
  <name>Fix UAT-001: Move hook section after recommendations</name>
  <files>src/pages/index.astro</files>
  <action>
    Reposition hook section in DOM:

    1. Find hook section (lines ~12-31): "Finde heraus, welcher Zahntyp du bist!"
    2. Cut entire section including &lt;section&gt; wrapper
    3. Paste AFTER PersonalizedRecommendations widget component
    4. Maintain all styling and functionality
    5. Update any animation delays if needed

    WHY: User wants personalized content first, then hook CTA - better conversion flow
  </action>
  <verify>
    Load homepage - hook section appears after "Für Sie empfohlen" widget, before product finder
  </verify>
  <done>Hook section positioned after recommendations, layout intact, animations work</done>
</task>

<task type="auto">
  <name>Fix UAT-002: Fix expert images layout in recommendations</name>
  <files>src/components/widgets/PersonalizedRecommendations.astro</files>
  <action>
    Fix "Empfohlen von Zahnexperten" layout:

    1. Check current positioning - likely using absolute/relative positioning incorrectly
    2. Restructure to use flex or grid layout:
       - Centered horizontally
       - Proper spacing between elements
       - Expert images row above or inline with text
    3. Ensure overlapping avatar effect works cleanly
    4. Responsive design maintained

    Example structure:
    ```
    <div class="flex flex-col items-center mb-6">
      <div class="flex -space-x-2 mb-2">
        {expert images with overlap}
      </div>
      <p class="text-sm text-neutral-600">Empfohlen von Zahnexperten</p>
    </div>
    ```
  </action>
  <verify>
    Load homepage - expert endorsement section centered, images overlap cleanly, text aligned properly
  </verify>
  <done>Expert images layout clean and professional, no awkward positioning</done>
</task>

<task type="auto">
  <name>Fix UAT-006 & UAT-010: Redesign advisory section with search field</name>
  <files>src/pages/index.astro</files>
  <action>
    Replace advisory section with search-based design:

    1. Remove category chips (Empfindliche Zähne, Zahnfleischbluten, etc.)
    2. Add single text input field:
       - Placeholder: "Ich habe Beschwerden mit..." or "Wonach suchen Sie?"
       - Clean, professional styling
       - Large enough for visibility (text-lg, py-3)
    3. Change gradient to professional neutral:
       - From bright blue/cyan/teal → subdued gray or single primary color
       - Example: from-neutral-100 to-neutral-200 OR from-primary/10 to-primary/20
    4. Keep button linking to /wissen but make it submit-like
    5. Add note: "Durchsuchen Sie unsere Expertenratgeber"

    WHY: User feedback - colored chips unprofessional, search field more flexible and clean
  </action>
  <verify>
    1. Load homepage - advisory section has single text input, professional colors
    2. No bright multi-color gradient
    3. Input field functional
  </verify>
  <done>Advisory section has search field, professional neutral styling, links to /wissen</done>
</task>

<task type="auto">
  <name>Fix UAT-007: Add product preview cards to product finder background</name>
  <files>src/pages/index.astro</files>
  <action>
    Add low-opacity product cards behind product finder:

    1. In product finder section (max-w-3xl container):
       - Add absolute-positioned div behind content (z-index lower)
       - Display 3-4 product images at low opacity (opacity-20 or opacity-30)
       - Arrange in scattered/grid pattern
       - Use actual product images from public/produkte/

    2. Ensure:
       - Text remains readable (products are background decoration)
       - Images don't compete with CTA button
       - Responsive design maintained

    Example structure:
    ```
    <div class="relative ...">
      <!-- Background products -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <img src="/produkte/sensitive-professional/sensitive-professional_01.png" class="absolute top-4 left-8 w-24 rotate-12" />
        {more products scattered}
      </div>

      <!-- Main content (existing) -->
      <div class="relative z-10">
        {sparkles, heading, button}
      </div>
    </div>
    ```
  </action>
  <verify>
    Load homepage - product finder has faded product images in background, text readable, looks professional
  </verify>
  <done>Product finder shows preview of actual products at low opacity, enhances visual without competing with CTA</done>
</task>

<task type="auto">
  <name>Fix UAT-009: Remove emojis from quiz and add expert photo</name>
  <files>src/pages/onboarding.astro, src/components/Quiz.tsx (or related quiz files)</files>
  <action>
    Fix quiz issues:

    1. Remove ALL emojis from quiz questions, options, UI text
       - Search for emoji Unicode characters or emoji syntax
       - Replace with text descriptions or icons from Lucide

    2. Add expert photo at quiz start:
       - Use expert images from public/assets/experts/
       - Display at beginning (welcome screen or first question)
       - Add professional context: "Entwickelt mit Zahnexperten" or similar

    3. Update PROJECT.md to document: "No emojis - use Lucide icons or text instead"

    WHY: Emojis unprofessional for dental health context, expert photo builds trust
  </action>
  <verify>
    1. Navigate to /onboarding
    2. See expert photo at start
    3. No emojis in any quiz questions or options
    4. Lucide icons used where visual indicators needed
  </verify>
  <done>Quiz has no emojis, expert photo at start, professional appearance, PROJECT.md updated</done>
</task>

<task type="auto">
  <name>Fix UAT-005: Add schema.org Brand markup to trust bar</name>
  <files>src/pages/index.astro</files>
  <action>
    Add missing schema.org structured data:

    1. Find trust bar section (Von Zahnärzten empfohlen, Klinisch getestet, etc.)
    2. Add to opening &lt;section&gt; tag:
       itemscope itemtype="https://schema.org/Brand"
    3. Wrap each trust item in &lt;article&gt; with itemprop="award"
    4. Add sr-only spans with itemprop="name" for each credential
    5. Add aria-label to SVG icons for accessibility

    Reference implementation from 03-03-PLAN.md task 2
  </action>
  <verify>
    View page source - search for "schema.org/Brand" and find structured data in trust bar
  </verify>
  <done>Trust bar has schema.org Brand markup, semantic article tags, accessibility labels</done>
</task>

</tasks>

<verification>
Before declaring plan complete:
- [ ] All blocker issues fixed (UAT-004, UAT-008)
- [ ] All major issues fixed (UAT-001, UAT-002, UAT-003, UAT-006, UAT-007, UAT-009)
- [ ] Minor issues fixed (UAT-005, UAT-010)
- [ ] npm run dev starts without errors
- [ ] Homepage loads with all fixes visible
- [ ] No console errors
- [ ] Re-test each fixed feature
</verification>

<success_criteria>
- All 10 UAT issues from 03-ISSUES.md addressed
- Hero personalization works
- Real products visible on homepage
- Professional styling throughout
- No emojis in quiz
- Schema.org markup present
- Tests pass and site functional
</success_criteria>

<output>
After completion, create `.planning/phases/03-hauptseite-personalisierung/03-FIX-SUMMARY.md`:

# Phase 3 FIX: UAT Issues Resolution Summary

**[One-liner describing what was fixed]**

## Issues Fixed

- UAT-004: Hero personalization (BLOCKER)
- UAT-008: Product visibility (BLOCKER)
- UAT-001: Hook positioning (MAJOR)
- UAT-002: Expert layout (MAJOR)
- UAT-003: Real product data (MAJOR)
- UAT-006: Advisory search field (MAJOR)
- UAT-007: Product finder background (MAJOR)
- UAT-009: Quiz emojis & expert photo (MAJOR)
- UAT-005: Schema.org markup (MINOR)
- UAT-010: Advisory styling (MINOR)

## Files Modified

[List of files changed]

## Verification Results

[Re-test results for each fixed issue]

## Next Step

Ready to continue Phase 3 with 03-05-PLAN.md or proceed to Phase 4
</output>
