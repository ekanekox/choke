# CapWords Design System

**Source:** `apps/capwords/` — 105 PNG screenshots (CapWords iOS Nov 2025)  
**Screens sampled:** 35 across onboarding, capture, learning, home, settings, support  
**External references:** [Apple Developer article](https://developer.apple.com/articles/capwords/), [capwords.app/about](https://capwords.app/about)

---

## Brand Identity

| Element | Description |
|--------|-------------|
| **Mission** | AI-powered language learning through real-world objects: snap, sticker, learn. |
| **Tagline** | "See it. Snap it. Learn the words." |
| **Design principles** | Warmth, wonder, discovery; grounded in sound, touch, and sight; human, not robotic. |
| **Origin** | HappyPlan Tech (Beijing); 2025 Apple Design Award (Delight and Fun). |

---

## Color Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `bg-primary` | `#F5F5F5` / `#F8F8F8` | rgb(245,245,245) | Main light background |
| `bg-dotted` | `#E0E0E0` | rgb(224,224,224) | Dot grid texture |
| `surface-light` | `#FFFFFF` | rgb(255,255,255) | Cards, modals, selected states |
| `surface-warm` | `#DBD5CD` / `#8B6D5A` | rgb(219,213,205) | Camera/object view backgrounds |
| `surface-dark` | `#1A1A1A` / `#000000` | rgb(26,26,26) | Dark mode, loading states |
| `text-primary` | `#000000` / `#1A2B47` | rgb(0,0,0) | Headings, primary text |
| `text-secondary` | `#3C3C43` / `#4A4A4A` | rgb(60,60,67) | Body, labels |
| `text-tertiary` | `#6B6C77` / `#888888` | rgb(107,108,119) | Hints, disclaimers |
| `text-muted` | `rgba(60,60,67,0.6)` | — | Inactive/unselected |
| `cta-bg-primary` | `#000000` / `#2C2C2E` | rgb(44,44,46) | Primary buttons, footer |
| `cta-text-primary` | `#FFFFFF` | rgb(255,255,255) | Button text, footer text |
| `accent-purple` | `#7A58E1` / `#A28DCC` / `#CEC7E0` | rgb(122,88,225) | Primary action (checkmark), AI badge |
| `accent-orange` | `#FF8C00` / `#FFA500` / `#FFC107` | rgb(255,140,0) | Highlights, toggles, CTA gradient |
| `accent-gold` | `#FDC830` / `#FFD700` | rgb(253,200,48) | Logo, stars, accents |
| `accent-coral-pink` | `#FF7F50` → `#FF1493` | — | Premium CTA gradient |
| `pastel-green` | Light green | — | Background shapes |
| `pastel-blue` | Light blue | — | Background shapes |
| `pastel-pink` | Light pink | — | Background shapes |
| `pastel-orange` | Pale orange | — | Background shapes |
| `footer-bg` | `#282828` / `#212121` | rgb(40,40,40) | Footer bar |
| `rainbow-gradient` | Pink → Purple → Blue → Green → Yellow | — | Capture button, loader |

---

## Typography

| Element | Font | Weight | Size (est.) | Color |
|---------|------|--------|-------------|-------|
| H1 / Display | Serif (Playfair Display / Georgia) | Bold | 28–34pt | `#000000` |
| H2 / Section | Serif | Bold | 24pt | `#000000` |
| Body | SF Pro Text | Regular | 15–17pt | `#3C3C43` |
| Caption | SF Pro Text | Regular | 12–14pt | `#888888` |
| Button | SF Pro Text | SemiBold | 17–19pt | `#FFFFFF` |
| Date header | Serif / New York | Regular | 24pt | `#000000` / `#FFFFFF` |
| Status bar | SF Pro Display | SemiBold | 15pt | `#000000` / `#FFFFFF` |

---

## Logo & Brand Assets

- **Primary logo:** Stylized "C" with swirl, metallic gradient (purple/blue/white), thin black outline.
- **Footer logo:** Yellow/gold "C" on dark footer; white "CapWords" wordmark.
- **AI badge:** Purple–yellow gradient with "AI ✨" and sparkles.

---

## Component Patterns

### CTAs & Buttons

| Component | Style | Usage |
|----------|-------|-------|
| Primary CTA | Black pill, white text, ~20–24px radius | "Get Started", "Next", "Start Review", "Save" |
| Secondary CTA | Text link, gray | "Review later", "Cancel", "Snap Your First Word" |
| Premium CTA | Coral–pink gradient, white text | "Start 3 days free trial" |
| Confirm (object) | White circle, purple checkmark | Object confirmation |
| Secondary actions | Gray circle, dark icon | Refresh, crop, redo, dismiss |

### Cards

- **Language cards:** White, rounded (12–16px), flag + label; selected = 2px black border.
- **Word cards:** Image + sticker-style label (bold text, white outline); 2×2 grid.
- **Settings card:** White, rounded, list rows with icon, label, value/chevron.
- **Flashcard:** Layered cards (orange/red-orange), dotted background, image + phrase + phonetic.

### Modals & Sheets

- **Input modal:** White, rounded, shadow; title, input, Save (black), Cancel (gray).
- **Success modal:** Illustration, title, body text.
- **Bottom sheet:** White, handle, close (X); list items with icon + chevron.

### Lists

- **Settings rows:** Icon (dark gray), label (black), value or chevron (light gray).
- **Language list:** Flag + label; selected = white bg + black border.

### Camera / Object Flow

- **Capture:** Rainbow gradient circular button; frosted bottom bar; "Place object within frame".
- **Confirm:** Three circles — refresh, purple checkmark, crop.
- **Hint:** "Not what you expected? Tap to adjust" with pencil icon.
- **Loader:** Pastel gradient circle with gray progress ring.

### Empty / Loading States

- **0%:** Large serif "0%" on light background.
- **Loading:** Pastel gradient circle, dark background, white status bar.

---

## Iconography

- Back chevron `<`
- Checkmark (primary action)
- Refresh/redo
- Crop
- Gallery (mountain/sun)
- Microphone (dashed circle)
- Bell, globe, sound waves, document, ribbon
- Toggle (orange when on)
- CapWords "C" logo
- Mobbin "M" logo

---

## Spacing & Layout

- **Padding:** Consistent horizontal padding; cards avoid screen edges.
- **Grid:** 2-column for language selection; 2×2 for word cards.
- **Vertical rhythm:** Clear spacing between logo, title, content, CTA.
- **Footer:** Fixed bottom bar, full width.

---

## Themes

| Theme | Background | Text | Notes |
|-------|------------|------|-------|
| Light | `#F8F8F8` | `#000000` | Default |
| Dark | `#000000` | `#FFFFFF` | Loading, some capture flows |
| Warm | `#DBD5CD` / `#8B6D5A` | Dark on light | Object/camera views |

---

## Product Features (from screens)

- Onboarding: welcome, language selection (learn + native), demo example
- Capture: camera, object detection, confirm/adjust, manual name input
- Learning: daily words, flashcards, phonetic transcription, "Hold to speak"
- Home: greeting, card collage, "Start Review", "Review later"
- Premium: free trial, feature list, testimonials, gradient CTA
- Profile: avatar, language selector, settings
- Settings: daily reminder, system language, voice, review reminder, subscription
- Accessibility: Spoken Content setup
- Support: App Ambassadors modal (Email, Telegram, X)

---

## Content & Copy Patterns

- **Headlines:** Direct questions ("Which language do you want to learn?") or statements ("See it. Snap it. Learn the words.").
- **CTAs:** Short, action-oriented ("Get Started", "Next", "Save", "Try a Demo").
- **Hints:** "Not what you expected? Tap to adjust", "Tap to recognize the full image".
- **Legal:** "By tapping Get Started above, you agree to our Privacy Policy and Terms of Use."

---

## References

- [Apple Developer: Behind the appealing design of CapWords](https://developer.apple.com/articles/capwords/)
- [CapWords About](https://capwords.app/about)
- [60fps.design: CapWords UI/UX animation](https://60fps.design/apps/capwords)
- Screenshots: `apps/capwords/` (105 PNGs)

---

## Screen Inventory

| Group | Indices | Screens |
|-------|---------|---------|
| Onboarding | 0–2 | onboarding-welcome, onboarding-camera-demo, onboarding-object-result |
| Onboarding | 3–7 | onboarding-language-learn, onboarding-language-native, onboarding-example |
| Account / Setup | 15 | account-premium-offer |
| Product / Capture | 10, 25, 40 | capture-object-view, capture-recognize-prompt, capture-edit-name-modal |
| Product / Capture | 35 | capture-crop-selection (dark) |
| Product / Learning | 20, 50, 60 | learning-daily-words, home-dashboard, learning-flashcard |
| Product / Loading | 30, 70 | loading-gradient, loading-percentage |
| Preferences | 80, 90 | profile-settings, profile-language-switch-success |
| Accessibility | 100 | preferences-spoken-content-setup |
| Support | 104 | support-app-ambassadors |
| Footer | All | Persistent CapWords + Mobbin attribution |
