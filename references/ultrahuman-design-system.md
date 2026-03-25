# Ultrahuman Design System

Extracted from [www.ultrahuman.com](https://www.ultrahuman.com), [Ultrahuman Brand Kit](https://cyborg.ultrahuman.com/brand-kit), [Mobbin Ultrahuman Colors](https://mobbin.com/colors/brand/ultrahuman), and **`apps/ultrahuman`** (production bundles from www.ultrahuman.com).

> **Note:** Production fonts differ from brand-kit typefaces. Values marked *Production* are from the live web app; *Brand Kit* values are from the official brand assets.

---

## Brand Identity

**Mission:** Track sleep, fitness, cycles, and blood markers to enhance healthspan and longevity. Ultrahuman offers a connected ecosystem for peak health and performance—Ring AIR, Ultrahuman Home, Blood Vision, M1 glucose tracker, and PowerPlugs.

**Tagline:** Personalised, Predictive, Proven.

**Design Principles:**
- **Premium** — Black and white foundation conveys sophistication and data-centric focus
- **Minimalist** — High contrast, clear hierarchy, health data as hero
- **Tech-forward** — Clean sans-serif typography, modern UI patterns
- **Accessible** — Crisp whites, legible text, clear affordances for health metrics

---

## Color Palette

### Primary (Brand Kit & Production)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| **Black** | `#000000` | `0, 0, 0` | Primary backgrounds, headlines, logo |
| **White** | `#ffffff` | `255, 255, 255` | Backgrounds, cards, light theme |
| **Dark Gray 1** | `#101010` | `16, 16, 16` | Dark mode surfaces |
| **Dark Gray 2** | `#212121` | `33, 33, 33` | Secondary dark backgrounds |
| **Medium Gray** | `#46494D` | `70, 73, 77` | Borders, secondary text |

### Brand Accents (Brand Kit)

| Token | Hex | Usage |
|-------|-----|--------|
| **Red** | `#FF0000` | Alerts, high-priority states |
| **Orange** | `#FD9400` | Warnings, energy |
| **Orange Red** | `#FF4500` | Strong accent |
| **Yellow** | `#FCDD00` / `#ffee00` | Highlights, optimism |
| **Lime Green** | `#0EFF27` | Success, vitality, positive metrics |
| **Light Green** | `#8cfb8d` | Soft success states |
| **Green (Spotify-style)** | `#1DB954` | Primary success, Mobbin/app UI |
| **Dark Green** | `#08a104` | Secondary success |
| **Pink** | `#FA74FF` / `#ff0170` | Women's health, cycle features |
| **Purple** | `#4d269a` | Premium, membership |
| **Cyan** | `#00fffd` / `#037ffc` | Links, technology, cool metrics |

### Production Tokens (from www.ultrahuman.com)

| Meta | Value |
|------|-------|
| `theme-color` (dark) | `#000000` |
| `theme-color` (PWA / webmanifest) | `#ffffff` |
| `background_color` (webmanifest) | `#ffffff` |
| Safari mask icon | `#000000` |

### Semantic

| Role | Recommendation |
|------|----------------|
| Success / Good health | Green (`#1DB954`, `#0EFF27`) |
| Error / Alert | Red (`#FF0000`) |
| Warning | Orange (`#FD9400`) |
| Disabled | `#46494D` at reduced opacity |
| Link | Cyan/Blue (`#037ffc`) |

---

## Typography

### Production Fonts (from `www.ultrahuman.com` bundles)

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| **Primary** | Graphik | 100–950 (Thin–Super) | Headers, body, UI |
| **Display** | twkEverett (TWK Everett) | 100–950 | Alternate display |
| **Monospace** | JetBrains Mono | 400, 500, 700 | Code, technical data |
| **Fallbacks** | Arial, system-ui, sans-serif | — | Via font-fallback metrics |

Additional typefaces referenced in HTML (likely for marketing/landing): Space Grotesk, Playfair Display, Helvetica Neue.

### Brand Kit Typography (official assets)

| Role | Font |
|------|------|
| Primary | Helvetica Neue |
| Secondary | Decimal |

### CSS Variables (production)

```css
--font-graphik: "graphik", "graphik Fallback", system-ui, sans-serif;
--font-jetbrains-mono: "JetBrains Mono", monospace;
--font-twk-everett: "twkEverett", "twkEverett Fallback", system-ui, sans-serif;
```

### Recommended Scale

- H1: 36–48px / Bold (700)
- H2: 28–36px / Semibold–Bold (600–700)
- H3: 20–24px / Medium–Semibold (500–600)
- Body: 16–18px / Regular (400)
- Small / Caption: 14px / Regular
- Technical / Data: JetBrains Mono for numbers, metrics

---

## Logo & Brand Assets

- **Primary logo:** Black fill on light backgrounds, white on dark
- **Wordmark:** "PRO" variant (Pro-wordmark.svg) — geometric sans, black
- **Assets:** Available via [Brand Kit Drive folder](https://drive.google.com/drive/folders/1w9DxyoL4IUR3cbWWLlOkV5Smc-i1TkuS)

---

## Component Patterns

### CTAs
- Primary: Solid black or accent (e.g. green) background, white text
- Secondary: Outline or ghost on dark backgrounds
- Tertiary: Text-only links in accent color

### Cards
- Dark backgrounds (`#101010`, `#212121`) for premium feel
- White or light gray for content emphasis
- Minimal borders, rely on contrast

### Health Data Display
- JetBrains Mono for metrics (glucose, HRV, sleep scores)
- Color-coding: Green (good), Yellow (moderate), Red (attention needed)
- Clear hierarchy for scanability

### Buttons
- Adequate touch targets (44px min on mobile)
- Rounded corners (typically 8–12px)
- Primary > secondary > tertiary hierarchy

---

## Spacing & Layout

- **Section padding:** Generous vertical rhythm (e.g. 48–80px)
- **Max-width:** Centered content, responsive grid
- **Product sections:** Hero → Value props → Social proof (UAE Emirates, Roojai, etc.) → Trust → CTA blocks

---

## Product Ecosystem Tokens (suggested)

| Product | Accent | Use Case |
|---------|--------|----------|
| Ring AIR | Black / White | Primary hardware |
| M1 / Metabolism | Green | Glucose, metabolic health |
| Blood Vision | Red / Cyan | Blood markers |
| Home | Neutral / Accent | Ambient monitoring |
| Women's Health | Pink | Cycle, fertility |
| PowerPlugs | Purple / Accent | Add-on modules |

---

## Content & Copy Patterns

### Headlines
- Short, confident: "Track sleep, fitness, cycles and blood markers"
- Product-focused: "World's most comfortable sleep tracker"
- Benefit-led: "Optimize your metabolic fitness"

### CTAs
- "Buy now", "Learn more", "Book test"
- "Get started", "Explore now", "Become a member"

### Trust Elements
- "Powering world champions" (UAE Emirates, Roojai, UAE Team ADQ)
- "Free. borderless. secure."
- "100+ biomarkers" (Blood Vision)
- "Licensed providers" where applicable

---

## References

- **Source:** `apps/ultrahuman/` — production assets from www.ultrahuman.com
- [Ultrahuman website](https://www.ultrahuman.com)
- [Ultrahuman Brand Kit](https://cyborg.ultrahuman.com/brand-kit)
- [Mobbin Ultrahuman Colors](https://mobbin.com/colors/brand/ultrahuman)
- [Public web assets](https://public-web-assets.uh-static.com/web_v2/)
