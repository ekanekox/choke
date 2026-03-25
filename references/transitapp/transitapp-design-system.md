# Transit App Design System

Extracted from [transitapp.com](https://www.transitapp.com), [Mobbin Transit Colors](https://mobbin.com/colors/brand/transit-app-inc), [Transit 6.0 Blog](https://blog.transitapp.com/six-o/), and **`apps/transitapp`** (production assets from transitapp.com).

> **Note:** Transit’s website is built with Framer. The mobile app has its own Express Design System. Values marked *Production* come from app/brand sources.

---

## Brand Identity

**Mission:** The best app for buses and trains. Transit helps riders navigate public transportation with real-time data, trip planning, and GO step-by-step navigation. Funded by riders and transit agencies—no ad tracking.

**Tagline:** “The best app for public transit.”

**Design Principles:**
- **Human** — Puffin typography and friendly tone, avoiding car-culture associations
- **Urban** — Inspired by historic transit design and civic systems
- **Clarity first** — Big ETAs, clear hierarchy, scanability for complex networks
- **Beautiful** — Intentional craft and “bigger, bolder, bubbly” colors

---

## Color Palette

### Primary (Brand)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| **Jungle Green** | `#1DB954` | `29, 185, 84` | Primary accent, CTAs, “go” signal |
| **Jungle Green (alt)** | `#33B668` | `51, 182, 104` | Softer variant (Mobbin) |
| **Parsley** | `#12452B` | `18, 69, 43` | Deep green, trust, reliability |
| **Whisper** | `#F6F7FA` | `246, 247, 250` | Light backgrounds, contrast |
| **White** | `#FFFFFF` | `255, 255, 255` | Backgrounds, cards |
| **Black** | `#000000` | `0, 0, 0` | Dark mode, text |

### Neutrals (from production)

| Token | Hex | Usage |
|-------|-----|--------|
| **Dark Gray 1** | `#1A1A1A` | Dark surfaces |
| **Dark Gray 2** | `#202120` | Secondary dark |
| **Dark Gray 3** | `#222222` | Borders, surfaces |
| **Medium Gray 1** | `#484645` | Secondary text |
| **Medium Gray 2** | `#5F5E63` | Borders, labels |
| **Light Gray** | `#C3C4C8` | Disabled, placeholders |
| **Borders** | `#2E2C36`, `#28282A` | Dark mode borders |

### Accent (route / transit use)

| Token | Hex | Usage |
|-------|-----|--------|
| **Blue** | `#047cff`, `#07A8FF`, `#68B0FF` | Links, links, secondary accent |
| **Teal** | `#16A8B3` | Cool accent |
| **Light Blue** | `#A9DFFE`, `#CBDAE6` | Backgrounds, highlights |
| **Light Green** | `#ADE0CD`, `#DAF0D9`, `#B7C9C0` | Success, soft green states |
| **Purple** | `#790080`, `#A800B0` | Alternative accent |

### Semantic

| Role | Recommendation |
|------|----------------|
| Success / Go | Jungle Green (`#1DB954`) |
| Error / Alert | Red tones (`#B90D2E`, `#DB4141`, `#CA4539`) |
| Warning | Amber / `#993800` |
| Disabled | Neutrals at reduced opacity |
| Link | Blue (`#047cff`) |

### Neon Dark Mode™ (Transit 6.0+)

- Backgrounds use monochromatic midnight tones.
- Colors are derived from each agency’s route colors.
- A programmatic color picker ensures contrast while staying on-brand.

---

## Typography

### Primary: Puffin Transit™ (6.0+)

| Role | Font | Notes |
|------|------|-------|
| **Primary** | Puffin Transit | Custom by Bold Monday (Pieter van Rosmalen) |
| **Character** | Humanist sans-serif: friendly, round, legible |
| **Replacement** | Replaces Interstate (former FHA typeface) |

Puffin is tuned for Transit: adjusted “3” and “4”, French accents, and other refinements. It conveys a “car-free” civic identity and is optimized for numbers (ETAs) and navigation.

### Legacy: Interstate

Interstate (Highway Gothic–style) was used for over a decade and is associated with highway signage. It is no longer the primary typeface.

### Recommended Scale

- H1: 36–48px / Bold
- H2: 28–36px / Semibold–Bold
- H3: 20–24px / Medium–Semibold
- Body: 16–18px / Regular
- Small / Caption: 14px / Regular
- **ETA (hero)**: 60px / Bold — core “eureka” element on route and trip screens

---

## Component Patterns

### CTAs
- Primary: Solid Jungle Green background, white text
- Secondary: Outline or ghost on dark backgrounds
- Tertiary: Text links in accent blue

### ETA Cards (Transit 6.0+)
- ETA in 60px font as primary focus
- Route color as card accent
- Auxiliary info (alerts, crowding, accessibility) grouped inside the card
- Alternate trips selectable per departure

### Route Line Display
- Big, bold line labels in route colors
- Clear hierarchy for quick scanning
- Supports buses, subways, bikeshare, etc.

### Buttons
- Adequate touch targets (44px min on mobile)
- Rounded corners (8–12px or pill)
- Primary > secondary > tertiary hierarchy

### Cards
- Light Whisper or dark monochrome backgrounds
- Route-color accents where relevant
- Minimal borders, strong contrast

---

## Spacing & Layout

- **Section padding:** Generous vertical rhythm (e.g. 48–80px)
- **Max-width:** Centered content, responsive grid
- **Whitespace:** Increased in 6.0 to improve readability
- **Page flow:** Hero → Value props → Social proof → Trust → CTA blocks

---

## Product Features (reference)

| Feature | Purpose |
|---------|---------|
| See nearby transit | List of nearby options on open |
| Real-time data | Live bus/train positions |
| Plan a trip | A-to-B directions |
| GO | Step-by-step navigation |
| Crowdsourcing | User-shared real-time data |
| Royale | Premium subscription features |

---

## Content & Copy Patterns

### Headlines
- Short and confident: “All the buses, no fusses”
- Feature-led: “The best data, period.”
- Community: “We put the community in commuting”

### CTAs
- “GO”, “See nearby transit”, “Plan a trip”
- “Get Transit”, “Download Transit”, “Let’s work together!”
- “Learn about Royale”, “Read our manifesto”

### Trust Elements
- “1000+ cities”, “180+ agency partners”
- “Bus tracking, not ad tracking”
- “Your data is not our business”
- “Funded by riders and transit agencies”

### Agency Partner Cities (examples)
Montreal, Austin, Toronto, Santa Monica, Orange County, Connecticut, Miami, Baltimore, Columbus, Chicago, Ottawa, Twin Cities, Las Vegas, New York, London, Vancouver, Seattle, Houston

---

## References

- **Source:** `apps/transitapp/` — production assets from transitapp.com (Framer, txta)
- [Transit website](https://www.transitapp.com)
- [Mobbin Transit Colors](https://mobbin.com/colors/brand/transit-app-inc)
- [Transit 6.0: let’s make public transit more beautiful](https://blog.transitapp.com/six-o/)
- [Express Design System (Medium)](https://medium.com/@arnav_sharma/creativity-at-heart-efficiency-in-mind-creating-the-express-design-system-for-transit-c7826442a427)
- [Marketing Materials (Transit Resources)](https://resources.transitapp.com/article/176-marketing-materials-that-promote-transit)
