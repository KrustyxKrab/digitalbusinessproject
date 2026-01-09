---
phase: 01-foundation-cleanup
plan: 02
subsystem: content-structure
tags: [product-organization, expert-assets, metadata, foundation]
requires: [existing-product-images, expert-images]
provides: [product-slug-structure, product-metadata-json, expert-image-directory]
affects: [public/products, public/assets/experts]
tech-stack: [file-system, json]
key-files:
  - public/products/kariesschutz-zahnpasta/product-info.json
  - public/products/sensitive-zahnpasta/product-info.json
  - public/assets/experts/README.md
key-decisions:
  - slug-naming: Use kebab-case slugs (kariesschutz-zahnpasta, sensitive-zahnpasta)
  - image-naming: Pattern {slug}_01.png, {slug}_02.png, {slug}_03.png
  - metadata-format: JSON files for dynamic loading compatibility
  - expert-organization: Centralized in public/assets/experts/
patterns-established:
  - Product folder structure: public/products/{slug}/
  - Metadata file: product-info.json with ProductDetail interface
  - Image naming: {slug}_01.png (main), {slug}_02.png (hover), {slug}_03.png (detail)
  - Expert images: Descriptive names (expert-1.png, expert-landscape-1.png)
issues-created: []
duration: 4min
completed: 2026-01-09T13:40:50Z
---

# Phase 1 Plan 2: Content Structure Foundation Summary

**Established intelligent product organization and expert image structure**

## Accomplishments

- Created folder-based product slug structure in public/products/
- Implemented product-info.json metadata pattern for 2 existing products (kariesschutz-zahnpasta, sensitive-zahnpasta)
- Organized 5 expert images in public/assets/experts/ for Phase 2, 3, 6 use
- Documented patterns for future product additions
- Foundation ready for dynamic product system (Phase 4)

## Task Commits

1. **Task 1: Implement intelligent product slug structure** - `533bf87`
   - Created kariesschutz-zahnpasta/ folder with product-info.json + 3 images
   - Created sensitive-zahnpasta/ folder with product-info.json + 3 images
   - Established naming pattern: {slug}_01.png, {slug}_02.png, {slug}_03.png

2. **Task 2: Organize expert images from public/models for accessibility** - `5b685d2`
   - Created public/assets/experts/ directory
   - Organized 5 expert images with descriptive names (expert-1 to expert-3, plus landscape variants)
   - Created comprehensive README.md documenting purpose, usage, and requirements

## Files Created/Modified

**Created:**
- `public/products/kariesschutz-zahnpasta/product-info.json` - Product metadata (3028 bytes)
- `public/products/kariesschutz-zahnpasta/kariesschutz-zahnpasta_01.png` - Main product image
- `public/products/kariesschutz-zahnpasta/kariesschutz-zahnpasta_02.png` - Hover product image
- `public/products/kariesschutz-zahnpasta/kariesschutz-zahnpasta_03.png` - Detail product image
- `public/products/sensitive-zahnpasta/product-info.json` - Product metadata (3311 bytes)
- `public/products/sensitive-zahnpasta/sensitive-zahnpasta_01.png` - Main product image
- `public/products/sensitive-zahnpasta/sensitive-zahnpasta_02.png` - Hover product image
- `public/products/sensitive-zahnpasta/sensitive-zahnpasta_03.png` - Detail product image
- `public/assets/experts/README.md` - Expert images documentation (1005 bytes)
- `public/assets/experts/expert-1.png` - Expert photo 1 (4:3 format)
- `public/assets/experts/expert-2.png` - Expert photo 2 (4:3 format)
- `public/assets/experts/expert-3.png` - Expert photo 3 (4:3 format)
- `public/assets/experts/expert-landscape-1.png` - Expert photo landscape 1
- `public/assets/experts/expert-landscape-2.png` - Expert photo landscape 2

## Decisions Made

### Product Folder Naming
Use slug format (kariesschutz-zahnpasta, sensitive-zahnpasta) instead of combined names (elmexkariesschutz) for consistency with URL routing and better readability.

### Image Naming Convention
Standardized pattern: {slug}_01.png (main), {slug}_02.png (hover), {slug}_03.png (detail)
- Consistent numbering with zero-padding
- Slug prefix ensures unique names across all products
- Purpose-aligned: 01 for main view, 02 for hover state, 03 for detail view

### Metadata Format
JSON files for dynamic loading compatibility:
- Matches ProductDetail TypeScript interface from src/types/models.ts
- Includes comment field documenting image naming pattern
- All product data extracted from existing .astro files
- Ready for dynamic routing in Phase 4

### Expert Images Location
Centralized in public/assets/experts/ instead of keeping in public/models/:
- More semantic naming (experts vs models)
- Consistent with asset organization patterns
- Easier discovery for future developers
- Descriptive filenames (expert-1.png vs elmex_experten_4_3_1.png)

## Issues Encountered

None. All tasks completed successfully without blockers.

**Notes:**
- Existing product images were found in public/products/elmexkariesschutz/ and public/products/elmexsensitiveprofessional/
- Expert images were found in public/models/ as documented in PROJECT.md
- Images were copied (not moved) to preserve originals during transition
- Dev server starts without errors
- All JSON files validated with jq

## Deviations from Plan

None. Plan executed exactly as specified.

## Next Phase Readiness

**Phase 2 (Fragebogen-Optimierung):**
- Expert images ready for trust-building header at public/assets/experts/
- 5 images available (3 portrait 4:3, 2 landscape)
- README documents usage patterns for developers

**Phase 4 (Produktsystem-Überarbeitung):**
- Product folder structure established with slug-based naming
- Metadata JSON files created matching ProductDetail interface
- Image naming convention documented and implemented
- Pattern ready for dynamic routing and automated product loading
- Easy to extend: add folder → add product-info.json → add 3 images

## Verification Results

All verification checks passed:
- [x] public/products/ directory exists with 2 product folders (kariesschutz-zahnpasta, sensitive-zahnpasta)
- [x] Each product folder contains product-info.json with valid JSON (validated with jq)
- [x] Each product folder has 3 image files following {slug}_NN.png pattern
- [x] public/assets/experts/ directory exists
- [x] 5 expert images organized with descriptive names
- [x] README.md documents expert images usage patterns
- [x] npm run dev starts without errors (ready in 465ms)

Phase 1 Plan 2 complete. Ready for Phase 2 (Fragebogen-Optimierung).
