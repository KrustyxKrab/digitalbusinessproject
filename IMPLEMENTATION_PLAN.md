# elmex.de Redesign - Detaillierter Implementierungsplan

## Projektübersicht
Transformation der elmex.de Website von einer statischen Produktseite zu einer hyper-personalisierten, AI-gestützten Zahngesundheits-Plattform mit lokaler KI-Integration (Ollama), AR-Features und proaktiver Nutzerfürsorge.

**Technologie-Stack:**
- Frontend: Astro + React/Preact Components
- Styling: Tailwind CSS v4
- KI: Ollama (lokal) mit llama3/mistral Modellen
- 3D/AR: Three.js + WebXR API
- Video: WebRTC für Live-Consultations
- State Management: Zustand oder Nanostores
- Backend: Astro API Routes + Node.js
- Datenbank: IndexedDB (client-side) + SQLite (server-side)

---

## Phase 1: Hyper-Personalisierung & Zero-Party Data

### 1.1 Onboarding-Quiz System
**Ziel:** Digitaler Anamnesebogen statt statischer Homepage

**Features:**
- Multi-Step Conversational Quiz
- Personalisierter Dialog-Flow
- Datenerfassung: Alter, Zahnprobleme, Familie, Präferenzen

**Technische Umsetzung:**
```
/src/components/onboarding/
├── OnboardingQuiz.tsx          # Hauptkomponente
├── QuizStep.tsx                # Einzelne Quiz-Schritte
├── QuizProgress.tsx            # Fortschrittsanzeige
├── QuizResults.tsx             # Ergebnisauswertung
└── quiz-config.ts              # Quiz-Logik und Fragen
```

**Implementierungsschritte:**
1. Quiz-State-Management mit Zustand einrichten
2. Conversational UI mit animierten Übergängen
3. Branching Logic basierend auf Antworten
4. Daten in IndexedDB speichern
5. Ergebnis-Analyse und Produktempfehlungen generieren

**Zeitaufwand:** 3-4 Arbeitstage

---

### 1.2 "MeinElmex" Profil-Dashboard
**Ziel:** Dynamisches Nutzer-Dashboard mit Zahngesundheits-Tracking

**Features:**
- Zahngesundheits-Score (0-100)
- Persönliche Putz-Routine
- Produktverbrauch-Tracking
- Erinnerungen (Zahnbürsten-Wechsel, etc.)
- Fortschritts-Visualisierung

**Technische Umsetzung:**
```
/src/pages/mein-elmex/
├── dashboard.astro             # Dashboard Hauptseite
└── einstellungen.astro         # Profil-Einstellungen

/src/components/profile/
├── HealthScoreWidget.tsx       # Gesundheitsscore
├── RoutineTracker.tsx          # Routine-Tracking
├── ProductUsageWidget.tsx      # Produktverbrauch
├── ReminderWidget.tsx          # Erinnerungen
└── ProgressChart.tsx           # Fortschritts-Charts (Chart.js)
```

**Datenmodell:**
```typescript
interface UserProfile {
  id: string;
  name: string;
  age: number;
  familyMembers: FamilyMember[];
  dentalIssues: string[];
  preferences: Preferences;
  healthScore: number;
  routine: DentalRoutine;
  products: UserProduct[];
  reminders: Reminder[];
  createdAt: Date;
  updatedAt: Date;
}
```

**Implementierungsschritte:**
1. User-Profile-Schema definieren
2. IndexedDB Storage-Layer erstellen
3. Dashboard-Components entwickeln
4. Health-Score-Algorithmus implementieren
5. Erinnerungs-System mit Web Notifications
6. Daten-Synchronisation (optional)

**Zeitaufwand:** 4-5 Arbeitstage

---

### 1.3 Kontext-Awareness (Tageszeit-basierte Ansprache)
**Ziel:** Dynamische Begrüßung basierend auf Tageszeit und Nutzerverhalten

**Features:**
- Tageszeit-Detection
- Personalisierte Grüße
- Kontext-basierte Produktempfehlungen
- Last-Visit Tracking

**Technische Umsetzung:**
```typescript
// /src/utils/context-awareness.ts
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Guten Morgen, schon geputzt?";
  if (hour < 18) return "Guten Tag! Zeit für die Mittagsroutine?";
  return "Guten Abend! Bereit für die Nacht-Regeneration?";
}

export function getContextualRecommendations(profile: UserProfile) {
  // Intelligente Produktempfehlungen basierend auf Tageszeit
}
```

**Implementierungsschritte:**
1. Context-Detection Utils erstellen
2. Dynamic Hero Section Component
3. Zeitbasierte Content-Anpassung
4. A/B Testing für verschiedene Grußvarianten

**Zeitaufwand:** 1-2 Arbeitstage

---

## Phase 2: Service-First & AI-Consulting

### 2.1 Elmex Expert AI Bot (Ollama Integration)
**Ziel:** Lokaler KI-Chatbot mit zahnmedizinischem Wissen

**Features:**
- Conversational AI mit Dental-Domain-Wissen
- Produktempfehlungen basierend auf Symptomen
- Bilderkennung für Zahnfleisch-Analyse (optional, Phase 2.5)
- Rechtlich abgesicherte Antworten (Disclaimer)

**Technische Umsetzung:**
```
/src/components/ai-bot/
├── ChatInterface.tsx           # Chat UI
├── MessageBubble.tsx          # Nachrichtenblasen
├── InputField.tsx             # Eingabefeld mit Typing-Indicator
└── chat-store.ts              # Chat-State

/src/pages/api/
├── chat.ts                    # API Route für Ollama
└── image-analysis.ts          # Bildanalyse (optional)
```

**Ollama Setup:**
```bash
# Server-seitige Ollama-Installation
ollama pull llama3:8b-instruct-q4_0
ollama pull mistral:7b-instruct-v0.2-q4_0

# Custom Model mit Dental-Wissen (Fine-tuning)
# Modelfile für elmex-expert
```

**API Route Beispiel:**
```typescript
// /src/pages/api/chat.ts
export async function POST({ request }) {
  const { message, history } = await request.json();

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    body: JSON.stringify({
      model: 'llama3:8b-instruct-q4_0',
      prompt: buildDentalPrompt(message, history),
      system: DENTAL_SYSTEM_PROMPT,
      stream: false
    })
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

**System-Prompt für Dental-Expertise:**
```
Du bist ein zahnmedizinischer Berater für elmex. Du hilfst Nutzern bei:
- Auswahl der richtigen Zahnpasta
- Tipps zur Mundhygiene
- Erkennung von Symptomen (mit Disclaimer)
- Produktempfehlungen

WICHTIG: Du bist kein Zahnarzt. Bei ernsthaften Problemen verweise immer auf einen Zahnarztbesuch.
```

**Implementierungsschritte:**
1. Ollama lokal installieren und testen
2. API Routes für Chat-Kommunikation erstellen
3. Chat-UI mit React/Preact entwickeln
4. Streaming-Responses implementieren
5. Dental-spezifisches System-Prompt optimieren
6. Rate-Limiting und Error-Handling
7. Rechtliche Disclaimer prominent anzeigen

**Zeitaufwand:** 5-6 Arbeitstage

---

### 2.2 Live-Video-Consultation System
**Ziel:** Direkter Video-Call mit Dentalhygieniker:innen

**Features:**
- One-Click Video-Call
- Warteschlangen-System
- Kalender-Integration für Termine
- Screen-Sharing (optional)

**Technische Umsetzung:**
```
/src/components/video-consultation/
├── VideoCallButton.tsx        # Call-to-Action
├── VideoRoom.tsx              # WebRTC Video-Room
├── WaitingRoom.tsx            # Wartezimmer
└── ScheduleModal.tsx          # Termin buchen

/src/lib/webrtc/
├── peer-connection.ts         # WebRTC Setup
├── signaling.ts               # Signaling Server Connection
└── media-stream.ts            # Media Handling
```

**Technologie:**
- WebRTC für Peer-to-Peer Video
- Socket.io oder WebSockets für Signaling
- Simple-Peer oder PeerJS Library

**Implementierungsschritte:**
1. WebRTC Proof-of-Concept
2. Signaling-Server mit WebSockets
3. Video-UI mit Controls (Mute, Video On/Off)
4. Warteschlangen-System implementieren
5. Kalender-Integration (Cal.com oder Calendly)
6. Mobile-Responsiveness testen

**Zeitaufwand:** 6-7 Arbeitstage

---

### 2.3 Routine-Builder
**Ziel:** Personalisierte Morgen- und Abendroutine erstellen

**Features:**
- Schritt-für-Schritt Routine-Erstellung
- Produkt-Integration in Routine
- Timer und Erinnerungen
- Gamification (Streaks, Achievements)

**Technische Umsetzung:**
```
/src/components/routine-builder/
├── RoutineCreator.tsx         # Routine erstellen
├── RoutineStep.tsx            # Einzelne Schritte
├── RoutineTimer.tsx           # Timer für Putzzeit
└── RoutineAchievements.tsx    # Gamification

/src/stores/routine-store.ts   # Routine State Management
```

**Routine-Datenmodell:**
```typescript
interface DentalRoutine {
  morning: RoutineStep[];
  evening: RoutineStep[];
  streakCount: number;
  achievements: Achievement[];
}

interface RoutineStep {
  id: string;
  action: string;
  product?: Product;
  duration: number; // in Sekunden
  completed: boolean;
}
```

**Implementierungsschritte:**
1. Routine-Builder UI entwickeln
2. Timer-Funktionalität implementieren
3. Streak-Tracking System
4. Achievement-System (Badges)
5. Push-Notifications für Erinnerungen
6. Routine-Analytics Dashboard

**Zeitaufwand:** 4-5 Arbeitstage

---

## Phase 3: Immersion & Visualisierung

### 3.1 Augmented Reality (AR) Spiegel
**Ziel:** Webcam-basierte AR für Putz-Training

**Features:**
- Webcam-Zugriff mit Gesichtserkennung
- Overlay-Anzeige für "vergessene Stellen"
- Gamification des Putzens
- AR-Filter für Kinder

**Technische Umsetzung:**
```
/src/components/ar/
├── ARMirror.tsx               # AR Hauptkomponent
├── WebcamStream.tsx           # Webcam Handling
├── FaceDetection.tsx          # Gesichtserkennung
└── ToothOverlay.tsx           # Zahn-Overlay

/src/lib/ar/
├── face-mesh.ts               # MediaPipe Face Mesh
├── tooth-detection.ts         # Zahn-Erkennung
└── overlay-engine.ts          # AR Overlay Rendering
```

**Technologie:**
- MediaPipe Face Mesh (TensorFlow.js)
- WebXR Device API
- Three.js für 3D-Overlays

**Implementierungsschritte:**
1. WebRTC Webcam-Zugriff implementieren
2. MediaPipe Face Mesh Integration
3. Zahn-Overlay-Rendering mit Canvas/Three.js
4. Putz-Tracking-Algorithmus entwickeln
5. Gamification-Layer (Punkte, Feedback)
6. Performance-Optimierung (WebGL)
7. Privacy-Controls (Datenschutz)

**Zeitaufwand:** 8-10 Arbeitstage

---

### 3.2 3D-Wirkungsweise Visualisierung
**Ziel:** Interaktive 3D-Animation von Aminfluorid-Wirkung

**Features:**
- 3D-Modell eines Zahns
- Zoom-Funktion in den Zahnschmelz
- Animierte Schutzschicht-Bildung
- Interaktive Steuerung

**Technische Umsetzung:**
```
/src/components/3d/
├── ToothModel3D.tsx           # 3D Zahn-Modell
├── AminfluoridAnimation.tsx   # Wirkungsanimation
├── InteractiveControls.tsx    # Zoom/Rotate Controls
└── InfoOverlay.tsx            # Informations-Layer

/public/models/
├── tooth.glb                  # 3D Zahn-Modell
└── enamel-layer.glb           # Schmelz-Schicht
```

**Technologie:**
- Three.js + React Three Fiber
- GLTF/GLB 3D-Modelle
- GSAP für Animationen

**Implementierungsschritte:**
1. 3D Zahn-Modell erstellen (Blender) oder kaufen
2. Three.js Scene Setup
3. Camera Controls (OrbitControls)
4. Aminfluorid-Partikel-Animation
5. Schutzschicht-Bildung animieren
6. UI für Informationen und Controls
7. Mobile Touch-Controls

**Zeitaufwand:** 5-6 Arbeitstage

---

### 3.3 Sound Design System
**Ziel:** Beruhigendes, klinisch-sauberes Sound-Design

**Features:**
- Ambient Background Sound
- Interaktions-Sounds (Hover, Click)
- "Bling"-Effekt für Erfolge
- Sound On/Off Toggle

**Technische Umsetzung:**
```
/src/lib/sound/
├── sound-manager.ts           # Sound System
├── ambient-sounds.ts          # Background Sounds
└── interaction-sounds.ts      # UI Sounds

/public/sounds/
├── ambient-clean.mp3          # Hintergrund
├── click-soft.mp3             # Button Clicks
├── bling.mp3                  # Erfolgs-Sound
└── notification.mp3           # Erinnerungen
```

**Web Audio API Integration:**
```typescript
class SoundManager {
  private audioContext: AudioContext;
  private sounds: Map<string, AudioBuffer>;

  async playSound(soundId: string, volume = 0.5) {
    // Play sound with volume control
  }

  playAmbient() {
    // Loop ambient sound
  }
}
```

**Implementierungsschritte:**
1. Sound-Bibliothek erstellen/kaufen
2. Web Audio API Setup
3. Sound Manager implementieren
4. UI-Integration (Settings)
5. Accessibility (Audio-Präferenzen respektieren)

**Zeitaufwand:** 2-3 Arbeitstage

---

## Phase 4: Proaktivität & Fürsorge

### 4.1 Smart Subscription System
**Ziel:** Intelligentes Abo basierend auf Verbrauchsmuster

**Features:**
- Nutzungsbasierte Lieferprognose
- Automatische Nachbestellung
- Flexibles Abo-Management
- Verbrauchsanalyse

**Technische Umsetzung:**
```
/src/components/subscription/
├── SubscriptionManager.tsx    # Abo-Verwaltung
├── UsageTracker.tsx           # Verbrauchs-Tracking
├── DeliveryPredictor.tsx      # Lieferprognose
└── SubscriptionSettings.tsx   # Einstellungen

/src/lib/subscription/
├── usage-calculator.ts        # Verbrauchsberechnung
├── delivery-predictor.ts      # Lieferprognose-Algorithmus
└── subscription-api.ts        # API Integration
```

**Verbrauchsalgorithmus:**
```typescript
interface UsagePattern {
  tubeSize: number; // in ml
  dailyUsage: number; // Geschätzt aus Profil
  lastPurchase: Date;
  estimatedEmpty: Date;
}

function calculateDeliveryDate(pattern: UsagePattern): Date {
  const daysUntilEmpty = (pattern.tubeSize / pattern.dailyUsage);
  return new Date(Date.now() + daysUntilEmpty * 24 * 60 * 60 * 1000);
}
```

**Implementierungsschritte:**
1. Verbrauchsmuster-Tracking implementieren
2. Prognose-Algorithmus entwickeln
3. Abo-UI mit Einstellungen
4. Integration mit Payment-Gateway (Stripe)
5. E-Mail-Benachrichtigungen
6. Abo-Pause/Änderungs-Funktionen

**Zeitaufwand:** 5-6 Arbeitstage

---

### 4.2 Zahnarzt-Connect Integration
**Ziel:** Verknüpfung mit dem persönlichen Zahnarzt

**Features:**
- Zahnarzt-Profil anlegen
- Produkt-"Verschreibungen" vom Zahnarzt
- Behandlungsplan-Integration
- Sichere Datenübertragung

**Technische Umsetzung:**
```
/src/components/dentist-connect/
├── DentistProfile.tsx         # Zahnarzt-Profil
├── DentistSearch.tsx          # Zahnarzt suchen
├── PrescriptionView.tsx       # Verschreibungen
└── TreatmentPlan.tsx          # Behandlungsplan

/src/pages/api/dentist/
├── search.ts                  # Zahnarzt-Suche API
├── connect.ts                 # Verknüpfung
└── prescription.ts            # Verschreibungs-API
```

**Datenmodell:**
```typescript
interface Dentist {
  id: string;
  name: string;
  practice: string;
  email: string;
  phone: string;
  verified: boolean;
}

interface Prescription {
  id: string;
  dentistId: string;
  productIds: string[];
  notes: string;
  date: Date;
  validUntil: Date;
}
```

**Implementierungsschritte:**
1. Zahnarzt-Datenbank erstellen
2. Verknüpfungs-Mechanismus (QR-Code oder Link)
3. Verschreibungs-System implementieren
4. DSGVO-konforme Datenverschlüsselung
5. Zahnarzt-Portal (separate Applikation, optional)
6. Benachrichtigungen bei neuen Verschreibungen

**Zeitaufwand:** 7-8 Arbeitstage

---

### 4.3 Push-Motivation & Nudges
**Ziel:** Positive Verstärkung für Zahnpflege-Routine

**Features:**
- Streak-Counter (Tageszähler)
- Motivations-Nachrichten
- Achievement-Unlocks
- Optional: PWA mit Push-Notifications

**Technische Umsetzung:**
```
/src/components/motivation/
├── StreakCounter.tsx          # Streak Anzeige
├── DailyNudge.tsx            # Tägliche Motivation
├── AchievementPopup.tsx       # Achievement Popup
└── MotivationDashboard.tsx    # Übersicht

/src/lib/notifications/
├── push-manager.ts            # Push Notification Setup
├── nudge-scheduler.ts         # Nudge Zeitplanung
└── achievement-tracker.ts     # Achievement Logic
```

**PWA Setup:**
```javascript
// /public/sw.js - Service Worker
self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icon-192.png',
    badge: '/badge-72.png'
  });
});
```

**Implementierungsschritte:**
1. Streak-Tracking System implementieren
2. Achievement-System erstellen
3. PWA Manifest und Service Worker
4. Push Notification Setup
5. Nudge-Scheduling-Algorithmus
6. Opt-in/Opt-out UI
7. A/B Testing für Nachrichteninhalte

**Zeitaufwand:** 4-5 Arbeitstage

---

## Phase 5: UI/UX Design & Navigation

### 5.1 Conversational Interface
**Ziel:** Navigation als Gespräch statt Menü

**Features:**
- Guided Navigation Flows
- Kontextsensitive Navigation
- Breadcrumb mit Natural Language
- Search-First Approach

**Technische Umsetzung:**
```
/src/components/navigation/
├── ConversationalNav.tsx      # Conversational Navigation
├── GuidedFlow.tsx            # Guided User Flows
├── SearchBar.tsx             # Intelligente Suche
└── BreadcrumbNatural.tsx     # Natural Language Breadcrumb

/src/lib/navigation/
├── flow-engine.ts            # Navigation Flow Engine
├── intent-detection.ts       # User Intent Detection (mit Ollama)
└── route-suggester.ts        # Route Suggestions
```

**Flow-Beispiel:**
```typescript
const productFinderFlow = {
  start: {
    question: "Für wen suchst du heute?",
    options: [
      { label: "Für mich", next: "userAge" },
      { label: "Für mein Kind", next: "childAge" },
      { label: "Ich habe Beschwerden", next: "symptoms" }
    ]
  },
  userAge: {
    question: "Wie alt bist du?",
    // ...
  }
  // ...
};
```

**Implementierungsschritte:**
1. Flow-Engine-System entwickeln
2. Conversational UI Components
3. Intent-Detection mit Ollama (NLP)
4. Natural Language Breadcrumb
5. Search-First UI (Spotlight-Style)
6. User Testing und Iteration

**Zeitaufwand:** 5-6 Arbeitstage

---

### 5.2 Visuelle Ruhe & Weißraum
**Ziel:** Minimalistische, saubere Ästhetik

**Design-Prinzipien:**
- Großzügiger Weißraum (mindestens 50% der Fläche)
- Maximal 2 Call-to-Actions pro Screen
- Sanfte Farbübergänge (Gradients)
- Kein "Above the Fold"-Denken

**Technische Umsetzung:**
```css
/* Tailwind Config Anpassungen */
@theme {
  /* Großzügige Spacing-Skala */
  --spacing-section: 8rem;
  --spacing-component: 4rem;
  --spacing-element: 2rem;

  /* Sanfte Animationen */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Komponenten-Richtlinien:**
```typescript
// Spacing Utility
export const sectionSpacing = "py-32 px-8 md:px-16";
export const componentSpacing = "py-16 px-4";
export const cardSpacing = "p-8 md:p-12";
```

**Implementierungsschritte:**
1. Design System dokumentieren
2. Spacing-Utilities erstellen
3. Bestehende Components refactoren
4. Accessibility-Check (Kontraste)
5. Mobile-First Responsive Design
6. Performance-Audit (Lighthouse)

**Zeitaufwand:** 3-4 Arbeitstage

---

### 5.3 Micro-Interactions
**Ziel:** Satisfying Feedback bei Interaktionen

**Features:**
- Bling-Effekt bei Erfolgen
- Smooth Transitions
- Loading-Skeletons
- Haptic Feedback (Mobile)

**Technische Umsetzung:**
```
/src/components/micro-interactions/
├── BlingEffect.tsx            # "Bling"-Effekt
├── SmoothButton.tsx          # Button mit Micro-Interactions
├── LoadingSkeleton.tsx       # Skeleton Loading
└── HapticFeedback.tsx        # Haptic Feedback Wrapper

/src/styles/animations.css    # Custom Animations
```

**Animation-Beispiele:**
```css
@keyframes bling {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.bling-effect {
  animation: bling 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**Implementierungsschritte:**
1. Animation-Library erstellen (Framer Motion oder Custom)
2. Bling-Effekt implementieren
3. Button-Interactions (Ripple, Scale)
4. Loading-States designen
5. Haptic Feedback für Mobile
6. Performance-Testing (60fps)

**Zeitaufwand:** 3-4 Arbeitstage

---

## Technische Infrastruktur

### Projekt-Struktur
```
elmexde-dbproject/
├── src/
│   ├── components/
│   │   ├── onboarding/
│   │   ├── profile/
│   │   ├── ai-bot/
│   │   ├── video-consultation/
│   │   ├── routine-builder/
│   │   ├── ar/
│   │   ├── 3d/
│   │   ├── subscription/
│   │   ├── dentist-connect/
│   │   ├── motivation/
│   │   ├── navigation/
│   │   └── micro-interactions/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mein-elmex/
│   │   │   ├── dashboard.astro
│   │   │   └── einstellungen.astro
│   │   └── api/
│   │       ├── chat.ts
│   │       ├── subscription/
│   │       └── dentist/
│   ├── layouts/
│   ├── lib/
│   │   ├── sound/
│   │   ├── webrtc/
│   │   ├── ar/
│   │   ├── subscription/
│   │   └── notifications/
│   ├── stores/
│   │   ├── user-store.ts
│   │   ├── routine-store.ts
│   │   └── chat-store.ts
│   ├── utils/
│   │   ├── context-awareness.ts
│   │   └── analytics.ts
│   └── styles/
│       ├── global.css
│       └── animations.css
├── public/
│   ├── models/          # 3D Models
│   ├── sounds/          # Audio Files
│   └── sw.js           # Service Worker
├── ollama/
│   ├── Modelfile        # Custom Dental Model
│   └── dental-knowledge.txt
└── docs/
    ├── IMPLEMENTATION_PLAN.md
    └── API_DOCUMENTATION.md
```

---

## Datenbank-Schema (IndexedDB + SQLite)

### IndexedDB (Client-side)
```typescript
// User Profiles
interface UserProfileDB {
  id: string;
  profile: UserProfile;
  routine: DentalRoutine;
  achievements: Achievement[];
  subscriptions: Subscription[];
}

// Chat History
interface ChatHistoryDB {
  id: string;
  userId: string;
  messages: ChatMessage[];
  timestamp: Date;
}
```

### SQLite (Server-side)
```sql
-- Dentists Table
CREATE TABLE dentists (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  practice TEXT,
  email TEXT UNIQUE,
  verified BOOLEAN DEFAULT FALSE
);

-- Prescriptions Table
CREATE TABLE prescriptions (
  id TEXT PRIMARY KEY,
  dentist_id TEXT REFERENCES dentists(id),
  user_id TEXT NOT NULL,
  product_ids JSON,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions Table
CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  product_id TEXT,
  frequency INTEGER, -- in days
  next_delivery DATE,
  status TEXT DEFAULT 'active'
);
```

---

## Performance & Optimierung

### Lazy Loading Strategy
```typescript
// Route-based code splitting
const OnboardingQuiz = lazy(() => import('./components/onboarding/OnboardingQuiz'));
const ARMirror = lazy(() => import('./components/ar/ARMirror'));
const VideoRoom = lazy(() => import('./components/video-consultation/VideoRoom'));
```

### Service Worker Caching
```javascript
// Cache-First für statische Assets
// Network-First für API Calls
// Stale-While-Revalidate für Produktdaten
```

### Image Optimization
- WebP mit AVIF Fallback
- Responsive Images (srcset)
- Lazy Loading mit Intersection Observer
- Blur-Up Loading Technique

---

## Sicherheit & Datenschutz

### DSGVO-Compliance
1. **Consent Management:**
   - Cookie-Banner mit Granular Consent
   - Privacy-first Analytics (Plausible oder Fathom)

2. **Daten-Minimierung:**
   - Nur notwendige Daten erfassen
   - Client-side Processing (IndexedDB)
   - Verschlüsselung sensibler Daten

3. **Right to Delete:**
   - Account-Löschfunktion
   - Daten-Export (DSGVO Art. 20)

### Sicherheitsmaßnahmen
```typescript
// API Rate Limiting
import rateLimit from 'express-rate-limit';

const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 50 // max 50 Anfragen
});

// XSS Protection
import DOMPurify from 'dompurify';
const cleanHTML = DOMPurify.sanitize(userInput);

// CSRF Protection
// Content Security Policy Headers
```

---

## Testing-Strategie

### Unit Tests
- Jest + React Testing Library
- Alle Utils und Stores testen
- Coverage-Ziel: 80%+

### Integration Tests
- Playwright für E2E-Tests
- User-Flow-Tests (Onboarding, Checkout)

### Performance Tests
- Lighthouse CI in CI/CD
- Core Web Vitals Monitoring

### Accessibility Tests
- axe-core für A11y-Tests
- WCAG 2.1 AA Compliance

---

## Deployment & DevOps

### Hosting
- **Frontend:** Vercel oder Netlify
- **API:** Railway oder Fly.io
- **Ollama Server:** Dedizierter VPS (Hetzner, DigitalOcean)

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
      - name: Deploy
        uses: vercel/deploy-action@v2
```

### Monitoring
- **Error Tracking:** Sentry
- **Analytics:** Plausible (Privacy-first)
- **Performance:** Vercel Analytics
- **Uptime:** UptimeRobot

---

## Rollout-Plan

### Phase 1: MVP (Wochen 1-4)
- [x] Onboarding-Quiz
- [x] Basis-Profil
- [x] Einfacher AI-Chatbot
- [x] Conversational Navigation

### Phase 2: Core Features (Wochen 5-8)
- [ ] MeinElmex Dashboard komplett
- [ ] Routine-Builder
- [ ] 3D-Visualisierung
- [ ] Sound System

### Phase 3: Advanced Features (Wochen 9-12)
- [ ] AR-Spiegel
- [ ] Video-Consultation
- [ ] Smart Subscription
- [ ] Zahnarzt-Connect

### Phase 4: Polish & Launch (Wochen 13-16)
- [ ] UI/UX Refinement
- [ ] Performance-Optimierung
- [ ] Security-Audit
- [ ] Beta-Testing
- [ ] Launch

---

## Kosten-Schätzung

### Entwicklung
- **Frontend Entwicklung:** 60-80 Stunden
- **Backend/API:** 40-50 Stunden
- **AI-Integration:** 30-40 Stunden
- **3D/AR Entwicklung:** 50-60 Stunden
- **Testing & QA:** 20-30 Stunden

**Gesamt:** 200-260 Stunden (ca. 2-3 Monate bei Vollzeit)

### Laufende Kosten (monatlich)
- **Hosting (Vercel):** 20€
- **VPS für Ollama:** 40€ (16GB RAM minimum)
- **Datenbank (SQLite + Backup):** 10€
- **CDN & Assets:** 15€
- **Monitoring (Sentry):** 26€

**Gesamt:** ~110€/Monat

---

## Nächste Schritte

### Sofort starten:
1. **Ollama Setup lokal testen**
   ```bash
   # Ollama installieren
   curl https://ollama.ai/install.sh | sh

   # Modell laden
   ollama pull llama3:8b-instruct-q4_0

   # Testen
   ollama run llama3:8b-instruct-q4_0 "Erkläre wie Aminfluorid wirkt"
   ```

2. **Projekt-Struktur aufsetzen**
   ```bash
   mkdir -p src/{components,pages,lib,stores,utils}
   mkdir -p src/components/{onboarding,profile,ai-bot}
   ```

3. **Design System dokumentieren**
   - Farben, Typography, Spacing definieren
   - Component Library (Storybook optional)

4. **Erste Feature entwickeln: Onboarding-Quiz**
   - Überschaubares Scope
   - Zeigt sofort Mehrwert
   - Basis für Personalisierung

---

## Risiken & Mitigation

### Technische Risiken
1. **Ollama Performance auf Server**
   - Mitigation: Load Balancing, Model Quantization

2. **AR-Feature Browser-Kompatibilität**
   - Mitigation: Progressive Enhancement, Fallback UI

3. **WebRTC Komplexität**
   - Mitigation: Drittanbieter-Service (Daily.co, Agora) evaluieren

### Business-Risiken
1. **Rechtliche Haftung (medizinische Beratung)**
   - Mitigation: Klare Disclaimer, Anwalt konsultieren

2. **Nutzerakzeptanz (Datenschutz)**
   - Mitigation: Privacy-First Kommunikation, DSGVO-konform

---

## Erfolgs-Metriken (KPIs)

### User Engagement
- **Onboarding Completion Rate:** >70%
- **Daily Active Users (DAU):** 1000+ nach 3 Monaten
- **Routine Streak:** Durchschnitt 7+ Tage

### Business Metrics
- **Subscription Conversion Rate:** >15%
- **Average Order Value (AOV):** 30€+
- **Customer Retention:** >60% nach 6 Monaten

### Technical Metrics
- **Core Web Vitals:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- **Uptime:** 99.9%+

---

**Dokumentversion:** 1.0
**Letzte Aktualisierung:** 2026-01-04
**Erstellt von:** Claude Code
**Status:** Draft - Ready for Review
