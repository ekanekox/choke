# Choke Timer — Design Spec (Locked)

**Last updated:** 2025-03-25
**Status:** Design locked. Ready for Expo implementation.
**Reference mockup:** `index.html` (deployed at choke.ac)

---

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Body / Labels | Poppins | 300–800 | All text, buttons, labels |
| Numbers / Timer | Azeret Mono | 400 | Countdown, steppers, stats, durations |

**Rules:**
- Timer numbers: 4-digit format with leading zero (`05:00`, `03:42`)
- Blinking colon on active countdown (1s step-end animation)
- No Orbitron, no Inter, no Space Grotesk

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| Red | `#e63946` | Work phase, active countdown, progress bar |
| Blue | `#457b9d` | Rest phase, rest countdown, rest progress |
| Gold | `#f4a423` | CTAs, pause button, done checkmark, paused tracking dot |
| Green | `#34d058` | Active tracking dot, location marker (active) |
| Background | `#0a0a0a` | App background |
| White 95% | `rgba(255,255,255,0.95)` | Primary text |
| White 30% | `rgba(255,255,255,0.3)` | Labels, secondary text |

**Phase colors:** Red = Work, Blue = Rest, Gold = Actions/Pause, Green = Active/Tracking

## Map

- **Library:** Leaflet.js (native app: `react-native-maps`)
- **Tiles:** OpenStreetMap
- **Dark mode filter:** `invert(1) hue-rotate(180deg) brightness(0.3) contrast(1.6) saturate(0)`
- **All screens** have map as background layer
- **Location marker:** Pulsing dot (green = active, gold = paused)

## Screen Flow

```
Config → Get Ready (3-2-1) → Work → Rest → Work → ... → Done
```

### 1. Config (Home)
- Full-screen dark map background
- Top: "Great to see you" greeting + location/weather line
- Activity selector pill → opens bottom sheet with search + 16 preset cards (2-column grid)
- Time config pill → expandable stepper panel (Rounds, Round Time, Rest Time)
- White "Start" CTA button (border-radius 22px)
- Bottom tab bar (Profile, Timer, Stats)

### 2. Get Ready
- Map background
- Centered frosted-glass ring with gold countdown (3, 2, 1)
- "Get Ready" label
- "First Up: Round 1 · 05:00" preview

### 3. Work (Training Active)
- Map background + green pulsing tracking dot
- Top: Full training name capitalized ("Brazilian Jiu-Jitsu")
- Floating pill: green dot + "Tracking"
- Bottom panel:
  - 2x2 stats grid (round time, rest time, active countdown in RED, round number)
  - Progress bar with pulsing red dot + gradient fill
  - Sport-specific tappable metric counters (e.g. Submissions, Sweeps, Guard Pulls)
  - Action buttons: lock (left), gold pause (center), expand (right)
- Tab bar

### 4. Rest
- Same layout as Work but blue accent throughout
- Blue tracking pill ("Rest")
- Blue countdown, blue progress bar
- Metric counters dimmed (not tappable during rest)

### 5. Done
- Gold checkmark animation (scale-in bounce)
- "Session Complete" + activity name + date
- 2x2 stats grid: Rounds, Total Time, Work Time, Rest Time
- "New Session" primary CTA + "Share" secondary
- Tab bar

## Activity Presets (16 total)

| Activity | Rounds | Round Time | Rest Time | Metrics |
|----------|--------|-----------|-----------|---------|
| Brazilian Jiu-Jitsu | 5 | 5:00 | 1:00 | Submissions, Sweeps, Guard Pulls |
| Boxing | 12 | 3:00 | 1:00 | Punches, Combos, Knockdowns |
| Muay Thai | 5 | 3:00 | 1:00 | Kicks, Knees, Elbows |
| Wrestling | 3 | 6:00 | 1:00 | Takedowns, Escapes, Pins |
| Judo | 5 | 5:00 | 1:00 | Throws, Pins, Submissions |
| MMA | 3 | 5:00 | 1:00 | Strikes, Takedowns, Submissions |
| Kickboxing | 5 | 3:00 | 1:00 | Kicks, Punches, Combos |
| Karate | 5 | 3:00 | 1:00 | Strikes, Katas, Blocks |
| Taekwondo | 3 | 2:00 | 1:00 | Kicks, Head Kicks, Spins |
| Capoeira | 5 | 3:00 | 1:00 | Attacks, Escapes, Floreios |
| Sambo | 5 | 5:00 | 1:00 | Throws, Locks, Pins |
| HIIT | 8 | 0:20 | 0:10 | Reps, Calories, Heart Rate |
| Tabata | 8 | 0:20 | 0:10 | Reps, Sets, Calories |
| Circuit Training | 5 | 1:00 | 0:30 | Stations, Reps, Calories |
| Strength | 5 | 0:45 | 1:30 | Sets, Reps, Weight |
| Custom | 3 | 3:00 | 1:00 | Count 1, Count 2, Count 3 |

## Icons

Material Design outline style: 24x24 viewBox, 1.5px stroke, no fill.

## Animations

| Element | Animation |
|---------|-----------|
| Location marker | Scale pulse 1→1.5→1, 2.5s ease-in-out infinite |
| Active countdown colon | Step blink 1s |
| Progress bar dot | Scale pulse 1→1.2→1, 2s ease-in-out infinite |
| Get Ready ring | Box-shadow pulse (gold glow expand) |
| Get Ready number | Fade + scale 0.9→1→0.9, 1s |
| Done checkmark | Scale 0→1 with bounce, 0.6s cubic-bezier |
| Metric pill tap | Scale 0.93, 0.12s |

## Tech Stack (Target)

| Layer | Choice |
|-------|--------|
| App framework | Expo (React Native) |
| Navigation | expo-router (file-based) |
| Maps | react-native-maps |
| Location | expo-location |
| Audio | expo-av |
| Haptics | expo-haptics |
| Landing page | Static HTML (Vercel) |
