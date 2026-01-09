# External Integrations

**Analysis Date:** 2026-01-09

## APIs & External Services

**Analytics & Tracking:**
- Google Analytics 4 - `src/components/widgets/TrackGa.astro`
  - Configuration: `PUBLIC_GA4_ID` environment variable
  - Script: `https://www.googletagmanager.com/gtag/js`
  - GDPR-compliant consent management via `src/components/widgets/CookieConsent.astro`

- Umami Analytics - `src/components/widgets/TrackGa.astro`
  - Configuration: `PUBLIC_UMAMI_ID` environment variable
  - Script: `https://cloud.umami.is/script.js`
  - Privacy-first analytics alternative

## Data Storage

**Client-side Storage:**
- IndexedDB - User profile persistence
  - Database name: `elmex-db`
  - Store name: `user-data`
  - Implementation: `src/stores/user-store.ts`
  - Stores: User profile, health scores, routine data, quiz results

- LocalStorage - Cookie preferences and session data
  - Keys: `elmex_cookie_consent`, `elmex_cookie_preferences`, `elmex-user-profile`
  - Implementation: `src/components/widgets/CookieConsent.astro`, `src/components/onboarding/QuizResults.tsx`

**No Backend Database:**
- All data persistence is client-side only
- No server-side database detected

## Content Management

**Astro Content Collections:**
- Configuration: `src/content.config.js`
- Loader: `glob` pattern for `.md` and `.mdx` files
- Base directory: `src/content/post/`
- Schema: title, description, publishDate, tags, featured flag

**Editorial Planning:**
- Content calendar: `src/content/editorial-plan.json`

## API Endpoints

**Health Check:**
- `GET /api/health` - `src/pages/api/health.ts`
  - Returns: `{status: 'ok', timestamp: ISO8601, version: '1.0.0', service: 'elmex-api'}`

## Site Configuration

**Site Metadata:**
- Configuration: `src/config/site.js`
  - Site URL: `https://elmex.de` (via `PUBLIC_SITE_URL` env var)
  - Title: "elmex - Wissenschaftlich fundierte Zahngesundheit"
  - Contact: `info@elmex.de`, `+49-40-27174-0`
  - Organization: Colgate-Palmolive (founded 1962)
  - Social links: Facebook, Instagram

## Monitoring & Observability

**Cookie Consent & GDPR:**
- Cookie banner: `src/components/widgets/CookieConsent.astro`
  - Essential cookies (always enabled)
  - Analytics cookies (user-controlled)
  - GA4 consent integration

**Error Tracking:**
- Not detected

**Logs:**
- Console logging only (no external service)

## CI/CD & Deployment

**Hosting:**
- Static site - no specific hosting platform configured
- Build output: `dist/` directory

## Environment Configuration

**Development:**
- Required env vars: Listed in `.env.example`
- `PUBLIC_GA4_ID`, `PUBLIC_UMAMI_ID`, `PUBLIC_SITE_URL`

**Production:**
- Same environment variables needed
- No staging environment detected

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- None detected

## Not Detected

- Payment processing (Stripe, PayPal)
- Authentication service (Auth0, Supabase Auth)
- Email service (SendGrid, Mailgun)
- CMS platform (Contentful, Sanity)
- CDN service
- External APIs
- Database service (PostgreSQL, MongoDB)
- File storage service (S3, Cloudinary)
- Form service

---

*Integration audit: 2026-01-09*
*Update when adding/removing external services*
