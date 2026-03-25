G# Transit iOS Design System

Extracted from [transitapp.com](https://transitapp.com), [Mobbin Transit Brand Colors](https://mobbin.com/colors/brand/transit-app-inc), [Transit 6.0 blog](https://blog.transitapp.com/six-o/), and **`apps/transit-ios`** (215 Transit iOS Dec 2025 screenshots from Mobbin).

> **Note:** Transit 6.0 (2025) introduced Puffin typeface and Neon Dark Mode. Values marked *Mobbin* are from official brand documentation; *Screens* are inferred from 35+ production iOS screenshots (0–213).

---

## Brand Identity

**Mission:** Simplify public transportation navigation. Transit shows buses, trains, bikeshare, and more near you—with real-time data, GO step-by-step navigation, and community crowdsourcing. “The best app for public transit.”

**Tagline:** The fastest way to find transit.

**Design Principles:**
- **Utilitarian first** — ETAs, routes, and maps are the hero; minimal cognitive load
- **Bold & bubbly** — Big fonts, bright route colors, playful illustrations
- **Humanist** — Friendly type, rounded terminals, “car-free” aesthetic (Puffin)
- **City-inspired** — Civic spirit; draws from transit design heritage (stations, signage, maps)
- **Accessible** — Neon Dark Mode for low-light; generous whitespace; clear hierarchy

---

## Color Palette

### Primary (Mobbin & Production)

| Token | Hex | RGB | Usage |
|-------|-----|-----|--------|
| **Jungle Green** | `#1DB954` | `29, 185, 84` | Primary CTAs, app icon, brand accent |
| **Jungle Green (alt)** | `#33B668` | — | Softer accent variant (Mobbin) |
| **Parsley** | `#12452B` | `18, 69, 43` | Deep green, trust, foundations |
| **Whisper** | `#F6F7FA` | `246, 247, 250` | Light backgrounds, cards |
| **White** | `#FFFFFF` | `255, 255, 255` | Surfaces, text on dark |
| **Black** | `#000000` | `0, 0, 0` | Headlines, dark mode base |

### UI Surfaces (from screens)

| Token | Hex | Usage |
|-------|-----|--------|
| **Footer / Bar** | `#252525` / `#282828` / `#333333` | Bottom branding bar, modals |
| **Dark Green (header)** | `#12452B` / darker Parsley | Headers, origin/destination fields, Favourites background |
| **Charcoal** | `#28282E` | Headlines, primary text |
| **Body Gray** | `#5F5F5F` | Form labels, body text |
| **Secondary Gray** | `#666666` | Secondary text, borders |
| **Placeholder / Muted** | `#ADADAD` | Placeholder text, inactive states |
| **Input BG** | `#F5F5F5` | Text input backgrounds |
| **Separator** | Light gray | Dividers in lists |

### Accent & Feature Colors

| Token | Hex | Usage |
|-------|-----|--------|
| **Map Location** | Purple | Chosen map point, “Map location” icon |
| **External / Link** | Blue `#037ffc`–`#319FD6` | Busbud, Token Transit, fare info links |
| **Royale CTA** | Yellow / Lime `#C5ED82`–`#FFB82B` | “Try it free” button (stands out on green) |
| **Permission Primary** | Dark blue | “Sure thing” (location for Big Blue Bus) |
| **GO Persona / Share** | `#319FD6` / `#53C3F0` / `#82DAF5` | Persona share modal, light blue accents |
| **Gamification** | Orange-yellow `#FFB82B` | Top Contributors leaderboard background |

### Transit Line Accents (dynamic)

| Context | Usage |
|---------|--------|
| **Red** | Metro/rail (B, Red Line), active GO card, close/cancel in route context |
| **Purple / Magenta** | Metro (D line), options bar, header “Options near” |
| **Orange** | Bus lines (217, 92), location prompt, DASH B |
| **Yellow** | E Line, highlight lines, schedule background |
| **Blue** | A Line, R10, Commuter Express, agency branding (Big Blue Bus) |
| **Dark Gray / Black** | J Line |
| **Agency colors** | Programmatic from GTFS/local data |

### Semantic

| Role | Recommendation |
|------|----------------|
| Primary CTA / Go | Jungle Green (`#1DB954`) |
| Secondary / Outline | White + gray border |
| Text link | Green (in-app) or Blue (external) |
| Location prompt | Orange |
| Success / Destination pin | Green |
| Error / Alert / Cancel | Red |
| Royale / Premium | Gold accent, crown icon |
| Selected (picker) | Route color or light gray highlight |

---

## Typography

### Puffin (Transit 6.0)

| Role | Font | Notes |
|------|------|--------|
| **Primary** | Puffin Transit (Bold Monday) | Custom humanist sans-serif for Transit; friendly, round, skimmable |
| **Fallback** | System sans-serif | `-apple-system`, `SF Pro` on iOS |

**Puffin** replaced Interstate (Highway Gothic–style) in 6.0. Described as “friendly, round, skimmable, charismatic, yet elegantly inconspicuous.” Custom glyphs and French accents tuned for Transit.

### Type Scale

| Role | Size | Weight | Notes |
|------|------|--------|--------|
| H1 / Hero | 36–48px | Bold | Onboarding, profile titles |
| H2 / Section | 24–28px | Bold | Section headers |
| H3 / Card title | 20–24px | Medium–Bold | Card titles, route IDs |
| **ETA (key)** | **60pt** | Bold | Supersized ETAs in route/GO views |
| Body | 16–18px | Regular | Body copy |
| Small / Caption | 14px | Regular | Secondary info |
| Label | 12–14px | Medium | Buttons, metadata |

---

## Logo & Brand Assets

- **App icon:** Green square (`#1DB954`), white stylized “S” or path/connection symbol
- **Wordmark:** “Transit” in white on dark backgrounds, dark on light
- **Royale:** Gold crown icon, premium tier badge

---

## Component Patterns

### CTAs
- **Primary:** Solid Jungle Green background, white text, rounded rectangle
- **Secondary:** White background, dark gray border, dark gray text
- **Ghost / Outline:** “MORE INFO”, “Learn more” — light gray bg + border
- **Text-only secondary:** “No thanks”, “Cancel” — plain dark gray text
- **Upgrade (Royale):** Darker green button on green gradient banner
- **Royale Try Free:** Yellow/lime background, dark green text (highest emphasis)
- **Permission:** Dark blue primary (“Sure thing”)

### Buttons
- Rounded corners (typically 8–12px)
- Adequate touch targets (44px min on iOS)
- Circular icon buttons: X (close/cancel), refresh, filter, locate
- Clear hierarchy: primary > secondary > tertiary

### Form Inputs
- **Background:** Light gray (`#F5F5F5`) or white with subtle border
- **Placeholder:** Muted gray (`#ADADAD`)
- **Split titles:** Gray for context + green for key term (e.g. “Create a” + “new account”, “Choose your” + “fare type”)
- **Password:** Show/hide toggle (eye icon)
- **Checkboxes/radio:** Circular; blue fill for selected
- **Informational:** “WHAT'S A TRANSIT ACCOUNT?” — uppercase, outlined button

### Modals & Bottom Sheets
- White background, rounded top corners, subtle shadow
- **Tabs:** “LEAVE AT” (green active) / “ARRIVE BY” (white inactive); “NEARBY” / “ELSEWHERE”
- **Dismiss:** X in top-right (light gray on green, dark on white)
- **Pull to dismiss:** Gray pill with down arrow + “Pull to dismiss”
- **Primary action:** Full-width green button at bottom

### Date / Time Picker
- Vertical date list; “Today” highlighted (light gray)
- Hour / minute / AM-PM in scrollable picker
- “Find trips” green primary button

### Cards
- White or Whisper backgrounds
- Rounded corners, subtle shadow
- **ETA cards:** Large (60pt) ETA, route color stripe, grouped metadata (alerts, crowding, accessibility)
- **Trip summary:** “Leave at X / Arrive at Y” with duration; progress bar (dots, route colors)

### Transit Line Cards
- Full-width cards with route color as **full background** (not just stripe)
- Bold route ID in white circle (A, E, J) or plain (92, 217)
- **Alert icon:** Yellow triangle + exclamation for service issues
- **Live data:** Wi-Fi/wave icon next to ETA or time
- Destination, stop name, ETA (minutes); right-aligned times
- Pagination dots for swipeable variations
- **“Hide inactive lines”:** Filter bar in route color (e.g. red)

### Banners
- **Location prompt:** Orange, rounded, “Tap to turn on location”
- **Options bar:** Magenta/purple, “Options near [address]”
- **Royale:** Green gradient, gold crown, “Upgrade” CTA
- **“Get off in X stops”:** Dark gray banner above active GO card

### GO / Active Trip
- **Arrive At card:** White with gray banner, route-colored time (e.g. red “5:47”)
- **Rating / capacity / fare chips:** Star (4.4), hourglass (72%), ticket ($2.40)
- **Walking time modal:** Route-colored selected state (red), “DEFAULT” badge on 5 min
- **Progress:** Yellow (past) + route color (upcoming) segments
- **FABs:** X (red), bell, help (with orange alert badge)

### Lists
- Grouped sections (Preferences, Accounts, Help centre)
- White or light gray cards within green or light backgrounds
- Thin light gray separators between rows
- Right-aligned icons (circular or rounded square)
- **List item:** Icon + primary text + secondary text + chevron or ellipsis

### Gamification (Top Contributors)
- **Background:** Orange-yellow (`#FFB82B`)
- **Profile circles:** Colored borders (green, gray, pink, blue, purple)
- **Badges:** 1st (yellow ribbon), 2nd (blue), 3rd (pink)
- **CTA:** “Use GO on your next trip” with crown + disco ball

### Royale Info Screen
- **Background:** Muted green (darker than primary)
- **Headings:** Dark green, bold
- **Body:** Lighter green / gray-green
- **Buttons:** Darker green (Learn more, FAQs, Restore, Contact)
- **Primary CTA:** “Try it free” — yellow/lime, dark green text
- **Dismiss banner:** “Not you? Your paid subscription…”

### Settings (On the Sidewalk)
- Green header with crown, accessibility (light blue), walking (green) icons
- **Sliders:** Custom thumbs (walking person emoji, shoe); green fill to selection
- **Speed labels:** STROLL, 4.3 KM/H
- **Toggles:** Standard iOS for “Display accessibility info”, “Show accessible trips first”
- **Time selector:** Segmented; orange underline for selected (e.g. 10:00 AM)

### Favourites
- **Background:** Dark green
- **Cards:** Transit lines (A, E, 10, J icons), Saved locations (house, briefcase, pin, coffee)
- **Transit fares:** “No tickets yet” empty state
- **Modal:** “Favourite lines” / “Saved locations” with tab (NEARBY / ELSEWHERE)
- **List item:** Star (favourite), mic (voice), pencil (edit); “Show on map” toggle

### Fare Selection
- **Radio buttons:** Blue circle + check for selected
- **Emoji icons:** Ticket, waving hand, baby for fare types
- **Info banner:** Light gray box, blue warning icon, blue “Learn more” link
- **MORE INFO:** Ghost/outline button

### Support Chat
- **User bubble:** Green, right-aligned
- **Agent bubble:** Light gray, left-aligned; “Transit” + S logo
- **Typing indicator:** Gray bubble with three dots
- **Placeholder:** “Ask us anything, or share your feedback”

### GO Persona / Share
- **Theme:** Blue (`#319FD6`, `#53C3F0`, `#82DAF5`)
- **Persona name:** Large white bold (e.g. “EVIL CUSTARD”)
- **Share button:** Light blue, white text + share icon
- **“Catch me on Transit”** pill with S logo

---

## Illustration & Imagery

### Onboarding
- Playful green bus with plant/flower-headed passengers (daffodil, cactus, orchid, etc.)
- Collage-style: vector bus + photographic plant heads
- Soft gradient backgrounds (lavender/purple → off-white)
- Friendly, inclusive, slightly whimsical

### Loading
- “Searching the stars” — dark blue starfield, white spinner, centered copy
- Cosmic metaphor for discovery

### Schedule View
- **Background:** Line color (e.g. yellow for E Line)
- **Line ID:** Black circle with white letter (E)
- **Next departure:** Play icon (►) + time, darker/brown text
- **Live times:** Wave/Wi-Fi icon; lighter gray for scheduled-only
- **FAB:** Accessibility icon (person with arms out)

---

## Spacing & Layout

- **Section padding:** Generous vertical rhythm (e.g. 16–24px between sections)
- **Card padding:** Consistent internal padding for readability
- **Whitespace:** 6.0 increased whitespace and font sizes; muscle memory preserved
- **Max-width:** Centered content where applicable

---

## Themes

### Light Mode
- Whisper / white backgrounds
- Charcoal text on light
- Green primary accents

### Neon Dark Mode (6.0)
- Programmatic color picker from agency route colors
- Monochromatic midnight tones (blues, deep grays)
- High contrast for low-light use
- ~50%+ users in dark mode; ~75% after sunset

---

## Iconography

| Icon | Usage |
|------|--------|
| **Chevron** | Navigation, “Choose on map”, “Set home” |
| **Ellipsis** | More options for saved items |
| **Swap** | Origin/destination swap (vertical arrows) |
| **Map pin** | Location, “Choose on map” |
| **Briefcase** | Work |
| **House** | Home, Set home |
| **Calendar + star** | Upcoming events |
| **Gear** | Settings |
| **Accessibility** | Wheelchair; step-free options |
| **Walking person** | Walking time, speed |
| **Wave / Wi-Fi** | Real-time / live data |
| **Alert** | Yellow triangle + exclamation on line cards |
| **Crown** | Royale / premium |
| **Pushpin** | Pin favourite line |
| **Share** | Arrow-up-from-box |

## Product Features (for context)

| Feature | Design relevance |
|--------|------------------|
| **GO** | Step-by-step navigation; ETA cards; walking time; rating/capacity/fare chips |
| **Royale** | Premium tier; gold crown; “Try it free” yellow CTA; muted green info screens |
| **Transit lines** | Bold, color-coded; agency colors from GTFS; “Hide inactive lines” filter |
| **Location** | Orange prompt when off; purple for map-chosen point |
| **Accounts** | Split titles; form inputs; agency sign-in (Big Blue Bus, etc.) |
| **Favourites** | Dark green background; Transit lines + Saved locations cards; modals |
| **Fares** | Fare type selector; radio buttons; info banners; Token Transit permission |
| **Gamification** | Top Contributors; orange-yellow theme; profile circles; badges |
| **Persona** | GO avatar; share modal with blue theme |
| **Support** | Chat with green user bubbles, gray agent bubbles |

---

## Content & Copy Patterns

### Headlines
- Short, confident: “The fastest way to find transit”
- Playful: “All the buses, no fusses”
- Benefit-led: “See all nearby transportation options as soon as you open the app”
- Form-focused: “Save your favourites, stats & settings”, “Create a new account”, “Choose your fare type”

### CTAs
- Primary: “Continue”, “Next”, “Sign up”, “Find trips”, “Set walking time”, “OK”, “Sure thing”
- Secondary: “Learn more”, “Cancel”, “No thanks”, “Sign in”, “MORE INFO”
- Royale: “Upgrade”, “Try it free”, “Restore purchase”, “Contact us”
- Navigation: “Choose on map”, “Set home”, “Show upcoming events”, “Get support”

### Modals & Empty States
- “What's a Transit account?” (with 🤓)
- “Pin a line or ride with GO and it will show up here”
- “No tickets yet”
- “Want to help Big Blue Bus improve service?”

### Trust
- “Bus tracking, not ad tracking”
- “Your data is not our business”
- “Funded by riders and transit agencies”
- “1000+ cities”

---

## Screen Inventory (sampled)

Screens 0–213 analyzed; representative samples: onboarding (0–2), account (6–10, 15), search/destination (20, 35), map (16, 30), trip planning (25, 40, 70), GO active (50, 60), schedule (90), transit lines (3, 100), preferences (5, 120), profile/Royale (4, 110), Favourites (130, 140, 160), fares (150), gamification (80), persona share (180), support (200).

## References

- **Source:** `apps/transit-ios/` — 215 Transit iOS Dec 2025 screenshots (Mobbin)
- [Transit website](https://transitapp.com)
- [Mobbin Transit Brand Colors](https://mobbin.com/colors/brand/transit-app-inc)
- [Transit 6.0: let’s make public transit more beautiful](https://blog.transitapp.com/six-o/)
- [Puffin by Bold Monday](https://boldmonday.com/)
- [Transit vision & manifesto](https://transitapp.com/vision)
