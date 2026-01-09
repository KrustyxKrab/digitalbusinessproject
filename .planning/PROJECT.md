# elmex Personalisierungs-Iteration

## What This Is

Eine umfassende Weiterentwicklung des elmex Prototyps - ein personalisiertes Zahngesundheits-Beratungssystem, das Nutzer durch einen Fragebogen führt, Zero-Party-Data sammelt, und darauf basierend individualisierte Produktempfehlungen, Dashboard-Insights und kontextbewusste Beratung bietet. Diese Iteration fokussiert sich auf verbesserte Personalisierung, optimierte Projektstruktur, und Design-Verfeinerungen unter Nutzung des frontend-design Plugins.

## Core Value

**Personalisierung als Gesamtpaket:** Zero-Party-Data-Erfassung → individualisierte Produktempfehlungen → Dashboard-basiertes Tracking → kontextbewusste Beratung. Alle drei Aspekte (Datensammlung, Empfehlungen, Dashboard) sind gleich wichtig und funktionieren nur zusammen optimal.

## Requirements

### Validated

<!-- Shipped und bestätigt wertvoll aus bestehendem Prototyp -->

- ✓ Astro Islands Architektur mit React-Komponenten für Interaktivität — existing
- ✓ Onboarding-Quiz-Flow mit Schritt-für-Schritt-Navigation — existing
- ✓ Dashboard mit Health-Score und Routine-Tracking — existing
- ✓ Dynamisches Routing für Produktseiten und Blog-Artikel — existing
- ✓ IndexedDB-basierte State-Persistierung für Nutzerdaten — existing
- ✓ Kontextbewusste Personalisierung (zeitbasiert, nutzerabhängig) — existing
- ✓ SEO-Optimierung mit Schema.org Structured Data — existing
- ✓ Analytics-Integration (GA4, Umami) mit Cookie-Consent — existing
- ✓ Responsive Design mit Tailwind CSS — existing
- ✓ MDX-basiertes Content-System für Blog/Artikel — existing

### Active

<!-- Neue Anforderungen für diese große Iteration -->

**Hauptseite (Landing Page):**
- [ ] Starker Hook am Anfang: "Finde heraus, welcher Zahntyp du bist! → Jetzt testen"
- [ ] Kästchenhintergrund entfernen
- [ ] "Für Sie empfohlen" Duplikation beheben
- [ ] Experten-Bilder aus `/public/models` einbauen
- [ ] Hero Line individualisiert an Fragebogen-Ergebnisse (mit Fallback wenn keine Zero-Party-Data)
- [ ] Crawlbare Siegel nutzen (wie auf aktueller elmex Website)
- [ ] Produktfinder prominenter/zentraler positionieren
- [ ] Zahngesundheits-Tipps neu gestalten: beratend statt passiv ("Sie haben Beschwerden? Finden Sie Tipps..." → Weiterleitung zu /wissen)
- [ ] FAQs erweitern
- [ ] "Tipp des Tages" Feature hinzufügen

**Wissen-Seite:**
- [ ] Beispielartikel basierend auf Expert & Science erstellen
- [ ] Vorsegmentierung in verschiedene Queries
- [ ] Alle zitierbaren Quellen strukturiert aufbereiten

**Beratungs-Seite:**
- [ ] Persönlichere, dynamischere Gestaltung
- [ ] Foto-Analyse Feature (UI-Mockup mit detaillierter Beschreibung)
- [ ] Video-Consulting Buchungsoption (UI-Mockup)
- [ ] Beratung basierend auf Ess-/Trinkgewohnheiten
- [ ] Tägliche Routine aus Beratung entfernen (gehört ins Dashboard)

**Fragebogen (Questionnaire):**
- [ ] Vertrauenswürdige Experten-Bilder zur Vertrauensbildung
- [ ] Erstes Fenster: "Möchten Sie personalisierte Beratung für Ihre Zahngesundheit?"
- [ ] Zeitangabe für Fragebogen-Dauer
- [ ] Neue Frage: "Beschreiben Sie kurz, wie Sie Ihre Zähne putzen"
- [ ] Essgewohnheiten erfassen
- [ ] Rauchen / Tee / Kaffee Konsum erfragen
- [ ] Zahnarzt/Zahnreinigung-Frequenz erfragen
- [ ] Account-Erstellung am Ende (optional - funktioniert auch ohne, aber mit Account umfassendere Beratung möglich)
- [ ] Gesamter Fragebogen bleibt kurz und prägnant

**Produkte-Übersicht:**
- [ ] "Für Ihre Routine / Vorgeschlagen" Bereich oben
- [ ] Intelligente Slug-Struktur: Ordner mit Subordnern pro Produkt
- [ ] Produkt-Subordner enthält: Produktinfo-Datei + 3 Bilder (titel_01.png, titel_02.png, titel_03.png)
- [ ] Produktkategorien: Zahnpasta, Zahnspülung, Zahnbürste, Interdentalbürste, Gelee
- [ ] Produktkarten optimieren: gesamte Card klickbar, Produktbild anzeigen, Hover-Effekt zum 2. Bild, "Wo kaufen" als Button, konsistentes Farbschema (elmex Orange)
- [ ] Produktfinder auch auf Produkte-Seite integrieren

**Produktseiten:**
- [ ] Produktname deutlich erkennbar
- [ ] "Wo kaufen" größer als Button / daneben "Online kaufen"
- [ ] Zeithinweis bei Routine entfernen
- [ ] "Zu Abo hinzufügen" neben "In Routine aufnehmen"
- [ ] Produktinformationen detailliert darstellen
- [ ] Inhaltsstoffe auflisten
- [ ] Drei Produktbilder above the fold: Hauptbild groß, zwei weitere daneben
- [ ] "Wo kaufen" Feature funktional machen (aktuell broken)

**Produktfinder:**
- [ ] Emojis entfernen
- [ ] 1. Frage: "Suchen Sie für sich oder andere?" → dann Alter (vereinfacht Zero-Party-Data/Profilerstellung)
- [ ] 2. Frage: Altersspezifische Schwerpunkte (z.B. Senior → Zahnfleischgesundheit wichtig)
- [ ] 4. Frage: Foto-Analyse ins Dashboard integrieren
- [ ] Produktvorschläge funktionierend machen
- [ ] "Wo kaufen" Links einfügen
- [ ] Rabatt auf Empfehlungen anbieten ("Damit Sie das neue Produkt ausprobieren können")

**Dashboard:**
- [ ] Health-Score kann auch sehr niedrig sein (realistischere Bandbreite)
- [ ] Tägliche Routine weiter unten platzieren (nicht prominentes Abhaken-Feature)
- [ ] Persönliche Routine und eigene Daten zentralisieren
- [ ] Individuelle Beratung hier integrieren (generelles Wissen auf /wissen)

**Abo-System:**
- [ ] Fulfillment-Provider auswählbar (Amazon, DocMorris, Rossmann Online, etc.)

**Über Elmex:**
- [ ] Wissenschaftliche Grundlage zu "Wissen" verschieben
- [ ] Experten-Bilder einbauen
- [ ] Ggf. Tochterfirmen/weitere Marken aufführen

**Crawler-Fokus Feature:**
- [ ] Auch auf Wissen-Seite einbauen
- [ ] Sinnvoller gestalten (nicht nur Schema & "Hierarchie")

**Fragen-Seite:**
- [ ] KI-Bot zur Fragen-Beantwortung (UI-Mockup)
- [ ] Umfassende FAQ

**Allgemeine Verbesserungen:**
- [ ] Chatbot unten rechts: "Brauchen Sie Hilfe?" (UI-Mockup)
- [ ] Alle ungenutzten Template-Files entfernen
- [ ] llms.txt Viewer-Icon in Navbar (ganz rechts, SVG Icon)
- [ ] Routine-Anpassungsseite: Speicher-Animation entfernen

### Out of Scope

- Echte Backend-Integration für KI-Features — KI-Chatbot, Foto-Analyse und Video-Consulting bleiben als UI-Mockups ohne API-Anbindung (für spätere Phase vorbereitet)
- E-Commerce Transaktionen — Kein echter Checkout/Warenkorb, nur "Wo kaufen" Links zu externen Shops (Amazon, DocMorris, Rossmann)
- Vollständiges Account-System — Account-Erstellung bleibt optional und vereinfacht, keine komplexe User-Authentifizierung (kann mit IndexedDB-Persistierung für Single-Device funktionieren)

## Context

**Bestehende Assets:**
- Experten-Fotos in `/public/models` verfügbar
- Produkt-Bilder in `/public/products` nach Produktordnern organisiert
- Bestehende elmex Website mit crawlbaren Siegeln als Referenz
- Aktuelle Prototype-Basis mit funktionierendem Quiz, Dashboard und Produktseiten

**Technische Umgebung:**
- Astro 5.15.4 mit Islands Architecture für optimale Performance
- React 19.2.3 für interaktive Komponenten
- Nanostores mit IndexedDB für Client-seitige State-Persistierung
- Tailwind CSS 4.1.14 für Styling
- MDX für Content-Management
- Statische Site-Generierung (JAMstack)

**Bekannte Verbesserungsbereiche aus Codebase-Analyse:**
- Projektstruktur kann optimiert werden (ungenutzte Template-Files)
- Content-Organisation sollte intelligentere Slug-Struktur nutzen
- Produktdaten bisher teilweise hardcoded statt dynamisch aus Ordner-Struktur

## Constraints

- **Tech-Stack**: Astro + bestehender Stack beibehalten — Keine Framework-Migration, nutze bestehende Architektur
- **Design-Ansatz**: frontend-design Plugin nutzen — Für alle Design-Entscheidungen das installierte claude-code-plugin frontend-design verwenden
- **Content-Kompatibilität**: Produktstruktur muss rückwärtskompatibel sein — Intelligente Slugs müssen mit bestehendem Content funktionieren
- **Performance**: Static Site Generation beibehalten — Keine Server-Side Rendering Requirements, alle Personalisierung client-seitig

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Dummy-Features als UI-Mockups | KI-Chatbot, Foto-Analyse, Video-Consulting ohne Backend-Logik vorbereiten | — Pending |
| Personalisierung als Gesamtpaket | Zero-Party-Data → Empfehlungen → Dashboard müssen zusammen funktionieren | — Pending |
| Intelligente Produkt-Slug-Struktur | Ordner-basierte Organisation statt Hardcoding für Wartbarkeit | — Pending |
| Account-System optional | Funktioniert auch ohne Account via IndexedDB, mit Account umfassendere Features | — Pending |
| Frontend-Design Plugin nutzen | Konsistente, hochwertige Design-Entscheidungen durch spezialisiertes Tool | — Pending |

---
*Last updated: 2026-01-09 after initialization*
