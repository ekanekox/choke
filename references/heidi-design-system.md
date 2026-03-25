# Heidi Design System

Extracted from [heidihealth.com](https://www.heidihealth.com), [Heidi AI Care Partner](https://www.heidihealth.com/en-nz/blog/ai-care-partner-for-every-clinician), [Dixon Baxi case study](https://www.dixonbaxi.com/case-study/heidi), and **`apps/heidi`** (308 Heidi web Jan 2026 screenshots from Mobbin).

> **Note:** Heidi is an AI care partner for clinicians—an AI scribe that captures notes, summaries, and follow-ups. Values marked *Screens* are inferred from 35+ production web screenshots (0–307).

---

## Brand Identity

**Mission:** Restore the human connection in healthcare by giving clinicians back time and mental energy. Heidi believes technology should make care feel more human, not less.

**Tagline:** Your AI Care Partner for Modern Clinical Practice. Get time back. Move care forward.

**Design Principles:**
- **Human-first** — AI makes care more human; clinicians stay present with patients
- **Professional & trustworthy** — Healthcare-grade; dark brown/maroon conveys gravitas
- **Clean & modern** — Light backgrounds, generous whitespace, minimal cognitive load
- **Flowing symmetries** — Logo and patterns inspired by ripples, sound waves, balance, connection
- **Accessible** — Clear hierarchy, readable typography, distinct CTAs

---

## Color Palette

### Primary (from screens)

| Token | Hex | Usage |
|-------|-----|--------|
| **Maroon / Dark Brown** | `#5C4033` / `#4A3728` | Primary CTAs, logo, headlines, "Get Heidi free", "Join for free" |
| **Bright Yellow** | `#FFD93D` / `#F5D547` | Announcement banner, Sign up button, patient card accents |
| **Off-white / Cream** | `#F8F6F3` / `#FAF9F7` | Main backgrounds, hero section |
| **White** | `#FFFFFF` | Modal backgrounds, cards, input fields |
| **Dark Gray / Black** | `#1A1A1A` / `#262626` | Footer, sidebar (dark theme), primary text |
| **Charcoal** | `#2D2D2D` | Headlines, navigation text |

### UI Surfaces (from screens)

| Token | Hex | Usage |
|-------|-----|--------|
| **Footer / Bar** | `#252525` / `#1F1F1F` | Global footer, dark sidebar |
| **Purple Primary** | `#6B4E9E` / `#7C5CBF` | New session button, active nav, tags ("14 days") |
| **Green CTA** | `#22C55E` / `#4CAF50` | Transcribe button, success states |
| **Red / Maroon** | `#B91C1C` / `#D32F2F` | Destructive actions, Create button (some states) |
| **Body Gray** | `#5F5F5F` / `#6B7280` | Body text, labels |
| **Placeholder / Muted** | `#9CA3AF` / `#ADADAD` | Placeholder text, helper text |
| **Input BG** | `#F5F5F5` / `#F3F4F6` | Text input backgrounds |
| **Link Blue** | `#2563EB` / `#319FD6` | Usage Policy, Privacy Policy, Terms links |

### Accent & Feature Colors

| Token | Usage |
|-------|--------|
| **Orange** | Helper text, warnings, "consider work email" |
| **Yellow banner** | "Review your note before use" warning |
| **Purple badge** | Trial days ("14 days"), Pro upgrade |
| **Beige selected** | Active session in sidebar, selected tab |

---

## Typography

### Font Stack

| Role | Font | Notes |
|------|------|--------|
| **Headlines** | Serif (e.g. Playfair, Lora) | "Get time back. Move care forward." |
| **Body / UI** | Sans-serif | `-apple-system`, `Inter`, `SF Pro` |
| **Fallback** | System sans-serif | Consistent across web |

### Type Scale

| Role | Size | Weight | Notes |
|------|------|--------|--------|
| H1 / Hero | 36–48px | Bold | Landing headline |
| H2 / Modal title | 24–28px | Bold | "Join Heidi, save hours", "Set up your Heidi" |
| H3 / Section | 18–20px | Medium–Bold | Form labels, card titles |
| Body | 16px | Regular | Body copy |
| Small / Caption | 14px | Regular | Helper text, metadata |
| Label | 12–14px | Medium | Buttons, badges |

---

## Logo & Brand Assets

- **Logo:** Symmetrical knot-like icon (four intertwined loops / stylized 'H'), representing balance and connection. Dixon Baxi: "flowing symmetries," ripples, sound waves.
- **Variants:** Dark maroon on light; white/light on dark footer.
- **Yellow square:** Logo container in sidebar footer.

---

## Component Patterns

### Buttons

| Type | Style | Example |
|------|--------|---------|
| **Primary** | Dark maroon/brown, white text, rounded | "Get Heidi free", "Join for free", "Customize my experience" |
| **Secondary** | Light gray/beige, dark text | "Log in", "Sign up with Google" |
| **Accent** | Purple, white text | "New session" |
| **Success** | Green, white text | "Transcribe" |
| **Destructive** | Red, white text | "Delete patient and all linked sessions" |
| **Ghost** | Transparent, dark text | "Cancel" |

### Modals

- Light background, rounded corners, subtle shadow
- Centered overlay; blurred background
- Header: logo + title; optional close (X)
- Footer: primary + secondary buttons
- Consistent padding and spacing

### Form Inputs

- White/light gray background, light border
- Rounded corners
- Labels above fields
- Helper text below (smaller, gray)
- Icons: envelope (email), flag (country), calendar (date)

### Cards / Panels

- Rounded rectangles
- Yellow accent for patient summary cards
- Light gray for session list items
- Purple underline for active tab

### Navigation

- **Sidebar:** Vertical, icons + labels; "New session" prominent at top
- **Tabs:** "Upcoming" / "Past" for sessions; "Context" / "Transcript" / "Note" for session detail
- **Footer:** Dark bar, Heidi logo left, "curated by Mobbin" right

---

## Iconography

- Line-art icons throughout
- Plus (+), microphone, document, folder, gear, question mark
- Lightning bolt for Pro / AI features
- Chevron/dropdown arrows
- Sparkle icon for "Ask Heidi to do anything..."

---

## Spacing & Layout

- **Grid:** Three-column layout when expanded: sidebar | session list | session detail
- **Collapsible:** "Hide sessions" toggles middle panel
- **Modals:** Max-width ~480px, centered
- **Footer:** Full-width dark bar, fixed bottom

---

## Product Features (from screens)

- **Sessions:** New session, Upcoming/Past tabs, session list by date
- **Transcription:** Transcribe (live), Dictate, Upload session audio
- **Notes:** Context, Transcript, Note tabs; templates (e.g. Goldilocks, Client Initial Assessment)
- **Templates:** Template library, create (Note/document, Fill PDF form), edit, pin
- **Patient profile:** Edit patient modal (name, DOB, gender, email, phone, allergies)
- **Coding:** ICD-10-CM code search, add code panel
- **Tasks:** Session-specific tasks panel (Beta)
- **AI:** "Ask Heidi to do anything..." input
- **Settings:** Account, Billing, Memory (Replace, Snippets), Display, Defaults, Notifications, EMR integrations, Coding
- **Team / Community:** Navigation items

---

## Content & Copy Patterns

- **Value prop:** "18 million hours returned and counting"
- **CTA:** "Get Heidi free", "Join for free", "Customize my experience"
- **Disclaimer:** "Review your note before use to ensure it accurately represents the visit"
- **Onboarding:** "Keep it up Alex!", checklist (Sign up, Provide org details, Start session, Review note, Find template, etc.)

---

## References

- [Heidi Health](https://www.heidihealth.com)
- [AI Care Partner for Every Clinician](https://www.heidihealth.com/en-nz/blog/ai-care-partner-for-every-clinician)
- [Dixon Baxi – Heidi Case Study](https://www.dixonbaxi.com/case-study/heidi)
- **Source:** `apps/heidi` (308 screens, Mobbin)

---

## Screen Inventory

Grouped by flow with semantic names. Screens 0–307.

| Group | Indices | Screens |
|-------|---------|---------|
| **Landing** | 0 | landing-home |
| **Onboarding** | 1 | onboarding-get-started-modal |
| **Account** | 2–9 | account-join-signup (form variants: name, email, country, phone) |
| **Account** | 10 | account-verify-code |
| **Account** | 11–12 | account-password-setup |
| **Onboarding** | 13–19 | onboarding-* (post-signup, setup) |
| **Onboarding** | 20 | onboarding-setup-organization |
| **Product / Sessions** | 14–19, 21–69 | session-dashboard, session-list, session-detail, session-note-editor |
| **Product** | 25 | session-dashboard-onboarding-complete |
| **Product** | 35 | session-detail-context |
| **Product** | 40 | session-edit-patient-modal |
| **Product** | 50 | session-detail-note |
| **Templates** | 70 | template-create-type-modal |
| **Templates** | 71–89 | template-library, template-selector |
| **Templates** | 80 | template-selector-modal |
| **Templates** | 90 | template-edit-client-initial-assessment |
| **Product** | 91–130 | session-detail-*, session-with-tasks |
| **Product** | 100 | session-detail-with-tasks |
| **Product** | 110 | session-detail-client-assessment |
| **Product** | 130 | session-add-code-panel |
| **Product** | 131–159 | session-detail-*, document-editor |
| **Product** | 160 | session-upload-recording-modal |
| **Product** | 161–199 | session-upcoming, session-management |
| **Product** | 200 | session-upcoming-detail |
| **Settings / Preferences** | 201–249 | settings-*, team, community |
| **Settings** | 250 | settings-memory |
| **Settings / Support** | 251–307 | settings-account, settings-billing, integrations, help |

### Renamed Screen Files

All 308 screens renamed via `heidi/rename-screens.py`. Format: `heidi-{flow}-{screen}-{index:03d}.png`

Examples:
- `heidi-landing-home-000.png`
- `heidi-onboarding-get-started-modal-001.png`
- `heidi-account-join-signup-002.png` … `heidi-account-join-signup-009.png`
- `heidi-account-verify-code-010.png`
- `heidi-session-dashboard-add-patient-details-015.png`
- `heidi-template-create-type-modal-070.png`
- `heidi-settings-memory-250.png`
