# Roadmap: elmex Personalisierungs-Iteration

## Overview

Eine umfassende Weiterentwicklung des elmex Prototyps von der aktuellen Basis zu einem vollständig personalisierten Zahngesundheits-Beratungssystem. Die Reise beginnt mit Projektstruktur-Bereinigung und intelligenter Content-Organisation, führt durch optimierte Zero-Party-Data-Erfassung im Fragebogen, personalisierte Landing-Experience, überarbeitetes Produktsystem, verbessertes Dashboard, dynamische Beratung, und endet mit Feature-Polish und UI-Mockups für zukünftige KI-Integration.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Cleanup** - Projektstruktur bereinigen und intelligente Content-Organisation etablieren
- [x] **Phase 2: Fragebogen-Optimierung** - Vertrauensbildung und erweiterte Zero-Party-Data-Erfassung
- [x] **Phase 3: Hauptseite-Personalisierung** - Landing-Experience mit Hooks, Experten und Personalisierung
- [ ] **Phase 4: Produktsystem-Überarbeitung** - Intelligente Slugs, optimierte Cards und Produktseiten
- [ ] **Phase 5: Dashboard & Routine** - Persönliche Daten, Score-Anpassungen und Routine-Optimierung
- [ ] **Phase 6: Beratung & Wissen** - Dynamische Beratung, UI-Mockups und Wissens-Content
- [ ] **Phase 7: Features & Polish** - Chatbot, llms.txt, Crawler-Fokus, FAQ und Abo-System

## Phase Details

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
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Cleanup | 2/2 | Complete | 2026-01-09 |
| 2. Fragebogen-Optimierung | 4/4 | Complete | 2026-01-09 |
| 3. Hauptseite-Personalisierung | 5/5 | Complete | 2026-01-09 |
| 4. Produktsystem-Überarbeitung | 5/5 | Complete | 2026-01-09 |
| 5. Dashboard & Routine | 0/3 | Not started | - |
| 6. Beratung & Wissen | 0/4 | Not started | - |
| 7. Features & Polish | 0/4 | Not started | - |
