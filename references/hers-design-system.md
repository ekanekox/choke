# Hers Design System

Extracted from [forhers.com](https://www.forhers.com), [Mobbin Hers iOS](https://mobbin.com/apps/hers-ios-00880632-b43e-4811-a4cf-eb988c8cdce4/cbbc024e-df47-470f-bc11-64b781298a03/screens), and **`apps/forhers`** (production bundles from www.forhers.com).

> **Note:** Mobbin screens require authentication. Values marked *Production* are extracted from the actual Hers web app JavaScript/CSS bundles in `forhers/`.

---

## Brand Identity

**Mission:** Women's healthcare made accessible, confidential, and approachable. The design deliberately differentiates from sibling brand Hims with softer, warmer aesthetics while maintaining professionalism and trust.

**Design Principles:**
- **Approachable** — Remove stigma from healthcare through warm, feminine tones
- **Confident** — Clean layouts, clear hierarchy, trustworthy CTAs
- **Minimalist** — High contrast, sans-serif typography, focused content
- **Accessible** — Readable text, clear affordances, FSA/HSA and eligibility messaging

---

## Color Palette

### Primary (Hers Web & App)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| **Primary / Accent** | `#ff4974` | `255, 73, 116` | CTAs, links, highlights |
| **Primary Light** | `#ffb8c9` | `255, 184, 201` | Backgrounds, hover states |
| **White** | `#ffffff` | `255, 255, 255` | Backgrounds, cards |
| **Neutral Gray / Taupe** | `#a29598` | `162, 149, 152` | Secondary text, borders |
| **Dark Brown** | `#66444d` | `102, 68, 77` | Headlines, primary text |

### Extended (Hims & Hers App — design case studies)

| Token | Hex | Usage |
|-------|-----|--------|
| Light Lavender | `#EADEEE` | Soft backgrounds, sections |
| Mauve | `#AC94B1` | Secondary accents |
| Purple Gray | `#8F7498` | Tertiary elements |
| Dark Gray | `#344043` | Dark mode / contrast text |
| Purple | `#6C5A8B` | Alternative accent |
| Dusty Rose | `#D2B1AC` | Warm accents, cards |

### Semantic

| Role | Recommendation |
|------|----------------|
| Success | Green (e.g. eligibility, success states) |
| Error | Red tone aligned with `#ff4974` |
| Warning | Amber / warm neutral |
| Disabled | `#a29598` at reduced opacity |

---

## Production Tokens (from `forhers/`)

*Extracted from `www.forhers.com/*.js` and `transcend-cdn.com/*.css` bundles.*

### Global Tones

| Token | Hex | Token | Hex |
|-------|-----|-------|-----|
| white | `#FFFFFF` | black | `#000000` |
| NL050–NL900 | White overlays (12%–F7) | ND050–ND900 | Black overlays (08%–E3) |
| G050 | `#f7f7f7` | G900 | `#1c1c1c` |
| PR500 | `#726E8D` | RD500 | `#943B3B` |
| PUR400 | `#6443C7` | US300 | `#759159` |
| GR001 | `linear-gradient(135deg, #7441B1, #6353C2, #5B78D0)` | | |

### Hers-Specific (`hers.specials`)

| Category | Token | Value |
|----------|-------|--------|
| **Gradients** | HERGR001 | `linear-gradient(290deg, #6498A0, #76B2A7, #9CCCBC)` |
| | HERGR002 | `linear-gradient(135deg, #5D62C8, #5E91D6, #6CC2D6, #8FDFC5)` |
| **Weight loss** | HERW100 | `#EEF1EA` |
| | HERWXX | `#C5ED82` |
| | HERW700 | `#313630` |
| **Hair** | HERH100 | `#EAFCE5` |
| | HERHXX | `#3D5B58` |
| **Mental health** | HERMH400 | `#548AB2` |
| **Menopause (hmnl)** | HERMO100 | `#FFF7F3` |
| | HERMO400 | `#FF7350` |
| | HERMO900 | `#451310` |
| **Misc** | HERELEMENT | `#338585` |

### Hers Basic Palette (`hers.basic`)

| Token | Hex | Token | Hex |
|-------|-----|-------|-----|
| HERP100 | `#3A515A` | HERP900 | `#13262E` |
| HERS100 | `#F5FAF6` | HERS900 | `#9ABDB1` |
| HERALA100 | `#EAF2F5` | HERADA900 | `#332124` |

### Spacing (CSS vars)

| Base (mobile) | Tablet | Desktop |
|---------------|--------|---------|
| U002: 2px | 2px | 3px |
| U008: 8px | 9px | 10px |
| U016: 16px | 17px | 20px |
| U032: 32px | 34px | 40px |
| U064: 64px | 68px | 80px |

Theme tokens: `spacing.one` through `spacing.six`, `spacing.half`, `spacing.pixel`, `spacing.S050`.

### Typography (theme)

| Token | Usage | Line-height |
|-------|--------|-------------|
| `fontSizes.caption` | 12px | 16/12 |
| `fontSizes.bodySmall` | 14px | 18/14 → 20/14 |
| `fontSizes.bodyMedium` | 16px | 21/16 |
| `fontSizes.bodyLarge` | — | — |
| `fontSizes.label` | 16px | — |
| `fontSizes.headingSmall` | 23px | — |
| `fontSizes.headingMedium` | 24px | 32/24 |

**Font weights:** `light`, `regular`, `medium`, `semiBold`, `bold`

### Breakpoints

`XSMALL` < `SMALL` < `MEDIUM` < `LARGE` < `XLARGE` < `XXLARGE` < `XXXLARGE`

- `mobileUp` / `tabletUp`: `min-width(SMALL)`
- `desktopUp`: `min-width(MEDIUM)`

### Promo Banner (production)

| Variant | Background | Text | Accent |
|---------|------------|------|--------|
| Offer | `#402F29` | white | `#FFC671` |
| Confirmation | `#FFC671` | `#2C221B` | `#2C221B` |
| Alt (green) | `#1D3D44` | white | `#C5ED82` |

### Transcend CMP (consent modal)

- Font: `"sofia-pro", SofiaProWeb, Helvetica, Arial, sans-serif`
- `--primary-color`: `#333334`
- `--text-color`: `#010101`
- Border radius: 24px (modal), 500px (buttons)
- Box shadow: `0 8px 30px rgba(0,0,0,0.12)`

### Box Shadows

- `one`: `0 1px 4px rgba(0,0,0,0.08)`
- `two`: `0 4px 16px rgba(0,0,0,0.06)`
- `three`: `0 6px 12px rgba(0,0,0,0.08)`
- `four`: `0 8px 16px rgba(0,0,0,0.08)`
- `five`: `0 12px 24px rgba(0,0,0,0.12)`
- `six`: `0 10px 30px rgba(0,0,0,0.08)`
- `seven`: `0 16px 40px rgba(0,0,0,0.12)`

---

## Typography

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| **Primary** | Sofia Pro | Regular (400), Medium (500), Bold (700) | Headers, body, CTAs |
| **Fallback** | System sans-serif | — | e.g. -apple-system, BlinkMacSystemFont |

**Sofia Pro** is the custom typeface for Hims & Hers. It is used for headers and body content. A handwriting-style variant (Sofia) exists from Mostardesign; the Pro variant is their brand-specific implementation.

**Scale (recommended):**
- H1: 36–48px / Bold
- H2: 28–36px / Bold
- H3: 20–24px / Medium–Bold
- Body: 16–18px / Regular
- Small / Caption: 14px / Regular

---

## Component Patterns

### CTAs
- Primary: Solid `#ff4974` background, white text, rounded corners
- Secondary: Outline or light pink `#ffb8c9` background
- Tertiary: Text-only links in primary pink

### Buttons
- Rounded corners (typically 8–12px or pill)
- Adequate touch targets (44px min on mobile)
- Clear hierarchy: primary > secondary > tertiary

### Cards
- White or light pink backgrounds
- Subtle borders or shadows
- Testimonial cards: photo, quote, name, verification badge

### Trust Elements
- “Verified Hers customer”
- “FSA & HSA eligible”
- “100% online care”
- “Licensed providers in all 50 states”

---

## Content & Copy Patterns

### Headlines
- Short, confident phrases
- Often broken with commas: “Real stories, real results”
- Examples: “The care you've always deserved”, “Lose weight your way”

### CTAs
- “Get started”, “Get results”, “See if I'm eligible”
- “Start my labs”, “Learn more”, “Explore the plan”

### Sections
- Hero → Value props → Social proof (testimonials) → Trust (doctors, pharmacies) → Product-specific blocks → Footer

---

## Spacing & Layout

- **Section padding:** Generous vertical rhythm (e.g. 48–80px)
- **Grid:** Responsive, centered content with max-width
- **Card spacing:** Consistent internal padding for readability

*(Exact pixel values should be validated via DevTools on forhers.com)*

---

## References

- **Source:** `apps/forhers/` — production JS/CSS from www.forhers.com (bundle, components, transcend CMP)
- [Hers website](https://www.forhers.com)
- [Hers color palette (Color Hex)](https://www.color-hex.com/color-palette/109411)
- [Hims & Hers brand identity (CCGit)](https://ccgit.crown.edu/cyber-reels/hims-and-hers-logo-a-deep-dive-into-the-brands-visual-identity-1764798084)
- [Hims colors on Mobbin](https://mobbin.com/colors/brand/hims-hers-health-inc)
- [Sofia Pro usage on forhims.com](https://typ.io/s/24g1)
