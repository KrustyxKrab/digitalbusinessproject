# Roadmap: elmex Personalisierungs-Iteration

## Overview

Eine umfassende Weiterentwicklung des elmex Prototyps von der aktuellen Basis zu einem vollständig personalisierten Zahngesundheits-Beratungssystem. Die Reise beginnt mit Projektstruktur-Bereinigung und intelligenter Content-Organisation, führt durch optimierte Zero-Party-Data-Erfassung im Fragebogen, personalisierte Landing-Experience, überarbeitetes Produktsystem, verbessertes Dashboard, dynamische Beratung, und endet mit Feature-Polish und UI-Mockups für zukünftige KI-Integration.

## Milestones

- ✅ **v1.0 Foundation** - Phases 1-4 (shipped 2026-01-09)
- 🚧 **v1.1 Product System Fix** - Phases 8-12 (in progress)

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

**v1.0 Foundation (Completed):**
- [x] **Phase 1: Foundation & Cleanup** - Projektstruktur bereinigen und intelligente Content-Organisation etablieren
- [x] **Phase 2: Fragebogen-Optimierung** - Vertrauensbildung und erweiterte Zero-Party-Data-Erfassung
- [x] **Phase 3: Hauptseite-Personalisierung** - Landing-Experience mit Hooks, Experten und Personalisierung
- [x] **Phase 4: Produktsystem-Überarbeitung** - Intelligente Slugs, optimierte Cards und Produktseiten

**v1.1 Product System Fix (In Progress):**
- [ ] **Phase 8: Product Data Migration** - Generate JSON metadata for all products in public/products/
- [ ] **Phase 9: Dynamic Routing Implementation** - Implement slug-based routing for product detail pages
- [ ] **Phase 10: Products Overview Refactor** - Replace hardcoded products with dynamic data loading
- [ ] **Phase 11: Product System Integration** - Connect recommendations, routine, and abo to new structure
- [ ] **Phase 12: Resume v1.0 Roadmap** - Continue with Dashboard & Routine (former Phase 5)

**Future (Deferred from v1.0):**
- [ ] **Phase 5: Dashboard & Routine** - Persönliche Daten, Score-Anpassungen und Routine-Optimierung
- [ ] **Phase 6: Beratung & Wissen** - Dynamische Beratung, UI-Mockups und Wissens-Content
- [ ] **Phase 7: Features & Polish** - Chatbot, llms.txt, Crawler-Fokus, FAQ und Abo-System

## Phase Details

<details>
<summary>✅ v1.0 Foundation (Phases 1-4) - SHIPPED 2026-01-09</summary>

### Phase 1: Foundation & Cleanup
**Goal**: Saubere Projektstruktur mit intelligenter Produkt-Slug-Organisation als Foundation für alle folgenden Features
**Depends on**: Nothing (first phase)
**Research**: Unlikely (interne Umstrukturierung, File-System-Operationen, bestehende Astro-Patterns)
**Plans**: 3-4 plans

Plans:
- [x] 01-01: Project Cleanup & UI Addition (Remove unused files, add llms.txt icon) — 3min
- [x] 01-02: Content Structure Foundation (Product folders, expert images organization) — 5min

### Phase 2: Fragebogen-Optimierung
**Goal**: Vertrauenswürdiger, umfassender Fragebogen mit erweiterter Zero-Party-Data-Erfassung
**Depends on**: Phase 1 (Experten-Bilder verfügbar)
**Research**: Unlikely (Erweiterung bestehendes React Quiz-System, Nanostores State-Management)
**Plans**: 3-4 plans

Plans:
- [x] 02-01: Experten-Bilder für Vertrauensbildung, erstes Fenster mit Willkommens-Frage, Zeitangabe — 9min
- [x] 02-02: Neue Fragen hinzufügen (Putztechnik beschreiben, Essgewohnheiten, Rauchen/Tee/Kaffee) — 7min
- [x] 02-03: Zahnarzt/Zahnreinigung-Frequenz erfragen — 1min
- [x] 02-04: Account-Erstellung optional am Ende (funktioniert auch ohne für einen Visit) — 4min

### Phase 3: Hauptseite-Personalisierung
**Goal**: Überzeugende Landing-Experience mit starkem Hook, Expertenelementen und personalisierten Inhalten
**Depends on**: Phase 2 (Zero-Party-Data aus Fragebogen verfügbar)
**Research**: Unlikely (UI-Komponenten, Tailwind CSS, Context-Awareness Utils bereits vorhanden)
**Plans**: 4-5 plans

Plans:
- [x] 03-01: Starker Hook am Anfang ("Finde heraus, welcher Zahntyp du bist! → Jetzt testen"), Kästchenhintergrund entfernen — 2min
- [x] 03-02: "Für Sie empfohlen" Duplikation beheben, Experten-Bilder einbauen — 1min
- [x] 03-03: Hero Line individualisiert an Fragebogen (mit Fallback), Crawlbare Siegel integrieren — 2min
- [x] 03-04: Produktfinder prominenter positionieren, Zahngesundheits-Tipps neu gestalten (beratend, Weiterleitung zu /wissen) — 1min
- [x] 03-05: FAQs erweitern, "Tipp des Tages" Feature — 2min

### Phase 4: Produktsystem-Überarbeitung
**Goal**: Vollständig funktionierendes Produktsystem mit intelligenten Slugs, optimierten Cards und detaillierten Produktseiten
**Depends on**: Phase 1 (Produkt-Slug-Struktur etabliert)
**Research**: Unlikely (Astro Dynamic Routing, Content Collections, bestehende Produktseiten-Patterns)
**Plans**: 4-5 plans

Plans:
- [x] 04-01: Produkte-Übersicht mit "Für Ihre Routine/Vorgeschlagen", Produktkarten optimieren (klickbar, Hover-Effekt, Button-Styling) — 3min
- [x] 04-02: Produktseiten: Name erkennbar, "Wo kaufen" größer, drei Bilder above the fold, Inhaltsstoffe — 3min
- [x] 04-03: "Zu Abo hinzufügen" neben "In Routine aufnehmen", Zeithinweis entfernen — 3min
- [x] 04-04: Produktfinder auf Produkte-Seite, Emojis entfernen, Kaufsplit-Frage (für sich/andere → Alter) — 3min
- [x] 04-05: Produktvorschläge funktionierend, Rabatt auf Empfehlungen, "Wo kaufen" Feature reparieren — 3min

</details>

### 🚧 v1.1 Product System Fix (In Progress)

**Milestone Goal:** Fix critical product system issues - migrate from hardcoded products to dynamic JSON-based routing with proper slug handling across all product-dependent features.

#### Phase 8: Product Data Migration
**Goal**: Generate comprehensive JSON metadata files for all products in public/products/ folders
**Depends on**: Phase 4 (Product folder structure established)
**Research**: Unlikely (JSON generation, file system operations, existing product data patterns)
**Plans**: TBD

Plans:
- [ ] 08-01: TBD (run /gsd:plan-phase 8 to break down)

#### Phase 9: Dynamic Routing Implementation
**Goal**: Implement slug-based dynamic routing for product detail pages using Astro patterns
**Depends on**: Phase 8 (JSON metadata available)
**Research**: Unlikely (Astro dynamic routes, getStaticPaths already established)
**Plans**: TBD

Plans:
- [ ] 09-01: TBD

#### Phase 10: Products Overview Refactor
**Goal**: Replace hardcoded products in src/pages/produkte/index.astro with dynamic data loading
**Depends on**: Phase 9 (Dynamic routing working)
**Research**: Unlikely (Astro data fetching, component patterns established)
**Plans**: TBD

Plans:
- [ ] 10-01: TBD

#### Phase 11: Product System Integration
**Goal**: Connect all product-dependent systems (recommendations, routine, abo) to new JSON-based structure
**Depends on**: Phase 10 (Dynamic products overview working)
**Research**: Unlikely (Nanostores integration, existing recommendation logic)
**Plans**: TBD

Plans:
- [ ] 11-01: TBD

#### Phase 12: Resume v1.0 Roadmap
**Goal**: Transition back to original roadmap - implement Dashboard & Routine features (former Phase 5)
**Depends on**: Phase 11 (Product system fully integrated)
**Research**: Unlikely (Dashboard patterns established, continuation of existing work)
**Plans**: TBD

Plans:
- [ ] 12-01: TBD

### Phase 5: Dashboard & Routine
**Goal**: Persönliches Dashboard mit realistischem Health-Score, optimierter Routine-Platzierung und individualisierten Daten
**Depends on**: Phase 2 (Fragebogen-Daten), Phase 4 (Routine/Abo-Integration)
**Research**: Unlikely (Dashboard bereits vorhanden, Nanostores State, IndexedDB Patterns etabliert)
**Plans**: 3 plans

Plans:
- [ ] 05-01: Health-Score realistische Bandbreite (kann sehr niedrig sein), Score-Berechnung anpassen
- [ ] 05-02: Tägliche Routine weiter unten platzieren (nicht prominentes Abhaken-Feature)
- [ ] 05-03: Persönliche Daten zentralisieren, individuelle Beratung ins Dashboard (generelles auf /wissen)

### Phase 6: Beratung & Wissen
**Goal**: Dynamische, persönliche Beratung mit UI-Mockups für Future-Features und strukturierte Wissens-Seite
**Depends on**: Phase 1 (Content-Struktur), Phase 2 (Essgewohnheiten-Daten)
**Research**: Unlikely (UI-Mockups ohne Backend, MDX Content-System bereits etabliert)
**Plans**: 3-4 plans

Plans:
- [ ] 06-01: Beratungsseite persönlicher/dynamischer, Foto-Analyse UI-Mockup mit Beschreibung
- [ ] 06-02: Video-Consulting buchbar (UI-Mockup), Beratung basierend auf Essen/Trinken
- [ ] 06-03: Tägliche Routine aus Beratung entfernen (ist im Dashboard)
- [ ] 06-04: Wissen-Seite: Beispielartikel (Expert & Science), vorsegmentiert, zitierbare Quellen, wissenschaftliche Grundlage von "Über elmex"

### Phase 7: Features & Polish
**Goal**: Finale Features, UI-Mockups und letzte Verfeinerungen für vollständige User-Experience
**Depends on**: Phase 6 (Wissen-Seite für Crawler-Fokus)
**Research**: Unlikely (UI-Komponenten, SVG Icons, kleinere Feature-Additions)
**Plans**: 4 plans

Plans:
- [ ] 07-01: Chatbot unten rechts "Brauchen Sie Hilfe?" (UI-Mockup), KI Bot zur Fragen-Beantwortung (UI-Mockup)
- [ ] 07-02: Crawler-Fokus Feature auf Wissen-Seite, sinnvollere Gestaltung
- [ ] 07-03: Umfassende FAQ, Über Elmex Experten-Bilder, ggf. Tochterfirmen
- [ ] 07-04: Abo-System mit Fulfillment-Provider-Auswahl, Routine-Anpassungsseite Animation entfernen

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 8 → 9 → 10 → 11 → 12 → 5 → 6 → 7

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation & Cleanup | v1.0 | 2/2 | Complete | 2026-01-09 |
| 2. Fragebogen-Optimierung | v1.0 | 4/4 | Complete | 2026-01-09 |
| 3. Hauptseite-Personalisierung | v1.0 | 5/5 | Complete | 2026-01-09 |
| 4. Produktsystem-Überarbeitung | v1.0 | 5/5 | Complete | 2026-01-09 |
| 8. Product Data Migration | v1.1 | 0/? | Not started | - |
| 9. Dynamic Routing Implementation | v1.1 | 0/? | Not started | - |
| 10. Products Overview Refactor | v1.1 | 0/? | Not started | - |
| 11. Product System Integration | v1.1 | 0/? | Not started | - |
| 12. Resume v1.0 Roadmap | v1.1 | 0/? | Not started | - |
| 5. Dashboard & Routine | Future | 0/3 | Deferred | - |
| 6. Beratung & Wissen | Future | 0/4 | Deferred | - |
| 7. Features & Polish | Future | 0/4 | Deferred | - |
