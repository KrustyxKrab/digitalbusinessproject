# UAT Issues: Phase 3 - Hauptseite-Personalisierung

**Tested:** 2026-01-09
**Source:** All Phase 3 SUMMARY.md files (03-01 through 03-04)
**Tester:** User via /gsd:verify-work

## Open Issues

### UAT-001: Hook section positioning - should be after recommendations

**Discovered:** 2026-01-09
**Phase/Plan:** 03-01
**Severity:** Major
**Feature:** Hook section ("Finde heraus, welcher Zahntyp du bist!")
**Description:** Hook section currently at top of page should move below "Für Sie empfohlen" recommendations section
**Expected:** Hook appears after personalized recommendations widget
**Actual:** Hook appears at very top before hero
**Repro:** Load homepage, observe hook is first section

### UAT-002: "Empfohlen von Zahnexperten" layout issue

**Discovered:** 2026-01-09
**Phase/Plan:** 03-02
**Severity:** Major
**Feature:** Expert trust signals in recommendations widget
**Description:** Expert images and text positioned weirdly on upper left of "Für Sie empfohlen" section
**Expected:** Clean, well-aligned expert endorsement visual
**Actual:** Layout appears awkward or misaligned
**Repro:** Load homepage, check recommendations widget header

### UAT-003: Recommendations widget needs real product data

**Discovered:** 2026-01-09
**Phase/Plan:** 03-02
**Severity:** Major
**Feature:** Product recommendations widget
**Description:** Recommendations should display actual products from product slugs, not placeholder data
**Expected:** Real product cards with images, names, descriptions from /produkte
**Actual:** Placeholder or hardcoded product data
**Repro:** Load homepage, check products shown in recommendations

### UAT-004: Hero headline doesn't personalize after quiz

**Discovered:** 2026-01-09
**Phase/Plan:** 03-03
**Severity:** Blocker
**Feature:** Personalized hero line
**Description:** Hero headline should change based on quiz answers (e.g., "Ihre Lösung für empfindliche Zähne" for concern='sensitivity') but remains generic
**Expected:** After completing quiz, hero headline personalizes to user's concern/ageGroup/dentistFrequency
**Actual:** Hero headline stays "Zahngesundheit für die ganze Familie" even after quiz
**Repro:**
1. Complete quiz at /onboarding with concern='sensitivity'
2. Return to homepage
3. Hero headline doesn't change

### UAT-005: schema.org Brand markup not present in trust bar

**Discovered:** 2026-01-09
**Phase/Plan:** 03-03
**Severity:** Minor
**Feature:** SEO-optimized trust seals
**Description:** Trust bar section missing schema.org/Brand structured data markup
**Expected:** View source shows itemscope itemtype="https://schema.org/Brand" in trust bar
**Actual:** No schema.org markup found in page source
**Repro:** View page source, search for "schema.org/Brand"

### UAT-006: Advisory section needs search field, not category chips

**Discovered:** 2026-01-09
**Phase/Plan:** 03-04
**Severity:** Major
**Feature:** Problem-solving advisory section ("Haben Sie Beschwerden...")
**Description:** Instead of colored category chips (Empfindliche Zähne, etc.), section needs single text input field where users describe their problem, then redirect to relevant /wissen page
**Expected:** "Ich habe Beschwerden mit..." text input → intelligent routing to /wissen
**Actual:** Static colored chips with generic categories
**Repro:** Scroll to advisory section before footer

### UAT-007: Product finder needs background product cards

**Discovered:** 2026-01-09
**Phase/Plan:** 03-04
**Severity:** Major
**Feature:** Product finder CTA section
**Description:** Behind "Welche Zahnpasta passt zu Ihnen?" section, add low-opacity product image cards to show visitors what products exist
**Expected:** Faded product images visible in background of product finder section
**Actual:** Plain gradient background without product preview
**Repro:** Check product finder section

### UAT-008: No products visible on landing page

**Discovered:** 2026-01-09
**Phase/Plan:** 03 (general)
**Severity:** Blocker
**Feature:** Homepage product visibility
**Description:** Landing page needs to show actual products somewhere. Visitors don't know what the site offers without seeing products.
**Expected:** Real product cards/images visible on landing page
**Actual:** No actual products displayed on homepage
**Repro:** Scroll through entire homepage

### UAT-009: Quiz has emojis and missing expert photo

**Discovered:** 2026-01-09
**Phase/Plan:** Related to 02 (Fragebogen)
**Severity:** Major
**Feature:** Quiz at /onboarding
**Description:** Quiz uses emojis (project guideline: no emojis). Also missing expert photo at beginning.
**Expected:** No emojis, expert photo at start of quiz
**Actual:** Emojis present, no expert photo
**Repro:** Navigate to /onboarding

### UAT-010: Advisory section colors too unprofessional

**Discovered:** 2026-01-09
**Phase/Plan:** 03-04
**Severity:** Minor
**Feature:** Advisory section styling
**Description:** Blue gradient and multiple colors in advisory section ("Haben Sie Beschwerden...") look unprofessional
**Expected:** More subdued, professional color scheme
**Actual:** Bright blue/cyan/teal gradient with multicolor chips
**Repro:** Check advisory section styling

## Resolved Issues

[None yet]

---

*Phase: 03-hauptseite-personalisierung*
*Tested: 2026-01-09*
