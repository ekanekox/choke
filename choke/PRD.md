# CHOKE — Product Requirements Document

**Domain:** choke.ac | **Author:** Eduardo Kaneko | **Version:** 1.0 | **Date:** March 2026
**Status:** Design Locked — Ready for Engineering

---

## 1. Executive Summary

Choke is a multi-sport interval timer designed for combat sports athletes and instructors. It combines AnyDistance-level design quality with sport-specific intelligence: 16 built-in presets for BJJ, Boxing, MMA, Muay Thai, Wrestling, Judo, HIIT, and more — each with contextual round structures, rest periods, and tappable metric counters.

The core insight is that during training, your phone screen is the only interface you glance at. Every pixel matters. Existing interval timers are either ugly (built by engineers), generic (no sport awareness), or locked behind native app installs. Choke is none of these.

### 1.1 Product Vision

Be the default training timer for every combat sports gym on the planet. Start with the phone propped against the wall during sparring. Expand to structured training plans, social features, and gym management.

### 1.2 Key Differentiators

**Sport-specific intelligence:** Each preset loads correct rounds, duration, rest, AND contextual metric counters (Submissions/Sweeps/Guard Pulls for BJJ, Punches/Combos/Knockdowns for Boxing). No other timer does this.

**AnyDistance-grade design:** Dark map background, thin monospace numbers, pulsing tracking dots, phase-coded colors (red=work, blue=rest, gold=actions). Designed like a premium fitness tracker, not a utility app.

**Location-aware training:** GPS tracking shows your training location on a live map. Green dot when active, gold when paused. Training sessions are geotagged.

**Zero-config start:** Open app, tap a preset, hit Start. Under 5 seconds from launch to first round.

---

## 2. Problem Statement

### 2.1 The Pain

Combat sports athletes train with interval timers every session. A typical BJJ class has 5–8 rounds of 5-minute sparring with 1-minute rest. Boxing uses 3-minute rounds with 1-minute rest. MMA uses 5-minute rounds. The timer is essential — it runs the entire training session.

Yet the tools available are embarrassingly bad:

- **Generic interval timers** (Interval Timer, Tabata Timer) have no concept of sport-specific rounds. Configuring 5 rounds of 5:00 with 1:00 rest requires navigating multiple screens. They look like they were designed in 2012.
- **Boxing-specific timers** (Boxing Timer Pro, Round Timer Pro) only serve one sport. A BJJ athlete who also boxes needs two apps.
- **Premium fitness apps** (AnyDistance, Strava, Nike Run Club) have beautiful UX but are designed for running and cycling. No interval timer. No round structure.
- **No app tracks sport-specific metrics during training.** How many submissions did you get in sparring? How many takedowns? Currently athletes track this on paper or not at all.

### 2.2 Who Feels This Pain

| Persona | Context | Current Behavior | Frustration |
|---------|---------|-----------------|-------------|
| BJJ Practitioner | Daily sparring, 3–5x/week | Uses free timer app or coach's phone | Can't track submissions/sweeps, ugly UI, slow to configure |
| Boxing/MMA Athlete | Bag work, pad work, sparring | Boxing Timer Pro or wall clock | Single-sport app, no metrics, no training log |
| Instructor/Coach | Running class for 10–30 students | Phone propped on speaker with timer | Needs giant readable numbers, quick preset selection, reliability |
| HIIT/Fitness Athlete | CrossFit, Tabata, circuit training | Multiple timer apps | Tabata is 20/10, HIIT varies — needs presets for each |
| Solo Practitioner | Shadow boxing, solo drills at home | YouTube round timer videos | No tracking, no customization, ads interrupting rounds |

---

## 3. Solution Overview

### 3.1 Core Product

A native mobile app (iOS + Android via Expo) that serves as the definitive training timer for combat sports and HIIT. The app launches to a home screen showing a live map with the user's location, a greeting, and the selected activity. One tap on "Start" begins a 3-2-1 countdown, then alternating Work/Rest rounds with sport-specific metrics.

### 3.2 Screen Flow

**Config → Get Ready (3-2-1) → Work → Rest → Work → ... → Done**

### 3.3 Activity Presets (16 at launch)

| Activity | Rounds | Round | Rest | Metrics |
|----------|--------|-------|------|---------|
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

---

## 4. Screen-by-Screen Specifications

### 4.1 Config (Home)

The home screen establishes context and trust. It shows the user's location on a live dark map, a warm greeting, current weather, and the selected training activity. The design language mirrors AnyDistance's home screen: map as hero, data overlaid at bottom.

**Layout:**
- Full-screen dark map background with green pulsing location dot
- Top overlay (gradient): "Great to see you" greeting + location/weather line (e.g., "São Paulo · 28°C · Sunny")
- Activity selector pill with search icon → opens bottom sheet with 16 presets in 2-column searchable grid
- Time config pill (collapsed) → expands to show Rounds / Round Time / Rest Time steppers
- White "Start" CTA (border-radius 22px, full-width)
- Tab bar: Profile, Timer (active), Stats

**Acceptance Criteria:**
1. Selecting a preset auto-populates rounds, round time, rest time, and metrics
2. Bottom sheet search filters presets in real-time (case-insensitive substring match)
3. Time-to-Start < 5 seconds from cold app launch with default preset
4. Total session time updates dynamically as user adjusts rounds/time/rest

### 4.2 Get Ready (3-2-1 Countdown)

A brief transition screen that builds anticipation. A frosted-glass ring with a large gold countdown number (3, 2, 1) pulses in the center of the screen over the map background. Below: "First Up: Round 1 · 05:00".

- Duration: 3 seconds (1s per count)
- Haptic feedback on each count (expo-haptics)
- Audio beep on each count, longer beep on "GO" (expo-av)

### 4.3 Work (Training Active)

The primary training screen. This is where the athlete spends 90% of their time. Every element is optimized for glanceability at arm's length.

**Layout:**
- Map background with green pulsing tracking dot
- Top: Full training name capitalized ("Brazilian Jiu-Jitsu") in Poppins 700
- Floating pill: green dot + "Tracking" (between map and stats panel)
- 2x2 stats grid: Round Time (dim), Rest Time (dim), Active Countdown (RED, blinking colon), Round Number
- Progress bar with pulsing red dot + gradient fill + total session time
- Sport-specific tappable metric counters (e.g., Submissions: 0, Sweeps: 0, Guard Pulls: 0)
- Action buttons: Lock (left), Gold Pause (center), Expand (right)

**Behavior:**
1. Countdown runs from round time down to 00:00
2. At 00:30 remaining: warning beep + yellow flash (the "Choke Point")
3. At 00:10 remaining: escalating beeps every second
4. At 00:00: loud buzzer + heavy haptic + auto-transition to Rest
5. Tapping a metric pill increments count by 1 (with haptic feedback + scale animation)
6. Pause button: timer stops, tracking dot changes from green to gold, pill text changes to "Paused"
7. Screen wake lock active throughout session (expo-keep-awake)

### 4.4 Rest

Identical layout to Work with blue accent throughout. Blue countdown, blue progress bar, blue tracking pill ("Rest"). Metric counters are dimmed and non-tappable during rest. Transition to next Work round is automatic.

### 4.5 Done (Session Complete)

Celebration screen. Gold checkmark animation (scale-in bounce), "Session Complete" title, activity name + date. 2x2 stats grid showing: Rounds completed, Total Time, Work Time, Rest Time. Plus accumulated metrics from the session (e.g., "3 Submissions, 2 Sweeps, 1 Guard Pull"). Two CTAs: "New Session" (primary) and "Share" (secondary).

---

## 5. Design System

Full design spec in [DESIGN.md](./DESIGN.md). Key decisions:

### 5.1 Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Body / Labels | Poppins | 300–800 | All text, buttons, labels, training names |
| Numbers / Timer | Azeret Mono | 400 | Countdown, steppers, stats, durations |

Timer numbers use 4-digit format with leading zero (05:00, 03:42). Active countdown has a blinking colon (1s step-end animation). No Orbitron, no Inter, no Space Grotesk.

### 5.2 Color System

| Token | Hex | Usage |
|-------|-----|-------|
| Red | #E63946 | Work phase, active countdown, work progress bar |
| Blue | #457B9D | Rest phase, rest countdown, rest progress bar |
| Gold | #F4A423 | CTAs, pause button, done checkmark, paused tracking dot |
| Green | #34D058 | Active tracking dot, location marker |
| Background | #0A0A0A | App background, all screens |

**Phase colors:** Red = Work, Blue = Rest, Gold = Actions/Pause, Green = Active/Tracking

### 5.3 Map

- react-native-maps with custom dark style (matches Leaflet invert filter from mockup)
- All screens share the map as background layer
- Location marker: pulsing dot (green = active, gold = paused)

### 5.4 Icons

Material Design outline style: 24x24 viewBox, 1.5px stroke, no fill.

### 5.5 Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Location marker | Scale pulse 1→1.5→1 | 2.5s ease-in-out infinite |
| Active countdown colon | Step blink | 1s step-end infinite |
| Progress bar dot | Scale pulse 1→1.2→1 | 2s ease-in-out infinite |
| Get Ready ring | Box-shadow gold glow expand | 1s ease-in-out infinite |
| Get Ready number | Fade + scale 0.9→1→0.9 | 1s per count |
| Done checkmark | Scale 0→1 with bounce | 0.6s cubic-bezier |
| Metric pill tap | Scale to 0.93 | 0.12s ease-out |

---

## 6. Technical Architecture

### 6.1 Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Expo (React Native) | Cross-platform iOS + Android, fast iteration, EAS Build |
| Navigation | expo-router | File-based routing, deep linking, tab navigation built-in |
| Maps | react-native-maps | Native performance, custom styling |
| Location | expo-location | Background location tracking, permissions |
| Audio | expo-av | Buzzer sounds, warning beeps, background audio |
| Haptics | expo-haptics | Tactile feedback on counts, metric taps, transitions |
| State | Zustand | Lightweight, no boilerplate, persisted state |
| Landing Page | Static HTML on Vercel | choke.ac serves design mockup |

### 6.2 Timer Engine

The timer is the most critical piece. It must be accurate to ±100ms over a 30-minute session, survive app backgrounding, and handle pause/resume cleanly.

- Use requestAnimationFrame for display updates (60fps visual countdown)
- Use Date.now() delta for actual elapsed time (drift-proof)
- Background: store timestamp on app blur, calculate drift on app focus
- State machine: IDLE → GET_READY → WORK → REST → WORK → ... → DONE

### 6.3 Audio Strategy

- Preload all sounds on app start (3 files: beep, warning, buzzer)
- Play through silent mode (iOS: Audio.setAudioModeAsync({ playsInSilentModeIOS: true }))
- Must cut through gym noise — use Web Audio API gain node if expo-av volume is insufficient

---

## 7. Success Metrics

### 7.1 Launch Metrics (Week 1)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Timer sessions started | 50+ | PostHog event: session_started |
| Session completion rate | >70% | session_completed / session_started |
| Distinct gyms/locations | 3+ | Unique GPS clusters with >2 sessions |
| Metric taps per session | >5 avg | PostHog event: metric_tap, grouped by session |
| Time to first Start | <5s | app_open to session_started timestamp delta |

### 7.2 Growth Metrics (Month 1)

| Metric | Target | Why It Matters |
|--------|--------|---------------|
| Weekly active users | 100+ | Minimum viable community for word-of-mouth |
| Sessions per user per week | >3 | Proves training integration, not novelty |
| Share rate | >10% | Done screen → Share taps / total completions |
| Preset diversity | >4 unique presets used | Validates multi-sport positioning |
| Retention D7 | >40% | Users who return 7 days after install |

### 7.3 Tracking Plan (PostHog)

| Event | Properties | Trigger |
|-------|-----------|---------|
| app_open | platform, version | App launch |
| preset_selected | preset_name, source (search\|pill) | User selects a training preset |
| config_adjusted | field, old_value, new_value | Stepper changed |
| session_started | preset, rounds, roundTime, restTime, totalTime | Start button tapped |
| round_completed | round_number, phase (work\|rest), duration | Round timer hits 00:00 |
| metric_tap | metric_name, new_count, round_number | Metric pill tapped |
| session_paused | elapsed_time, current_round, phase | Pause button tapped |
| session_completed | preset, total_time, rounds_completed, metrics_json | Final round ends |
| session_shared | share_method | Share button on Done screen |

---

## 8. Competitive Landscape

| App | Sport Focus | Design | Metrics | Location | Price |
|-----|-----------|--------|---------|----------|-------|
| Interval Timer (App Store) | Generic | ★★ | None | No | Free + Ads |
| Boxing Timer Pro | Boxing only | ★★★ | None | No | $2.99 |
| Round Timer Pro | MMA/Boxing | ★★ | None | No | Free + Ads |
| Tabata Timer | HIIT/Tabata | ★★ | None | No | Free + IAP |
| AnyDistance | Running/Cycling | ★★★★★ | Pace, HR, Elevation | Yes | $5.99/mo |
| Strava | Running/Cycling | ★★★★ | Pace, HR, Power | Yes | $11.99/mo |
| **CHOKE (us)** | **Multi-combat + HIIT** | **★★★★★** | **Sport-specific** | **Yes** | **Free (v1)** |

**Our wedge: AnyDistance design quality applied to combat sports. No competitor combines sport-specific presets + metric tracking + location + premium UX.**

---

## 9. Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Timer drift in background | High — wrong round times | Medium | Use Date.now() delta, not setInterval. Test backgrounding extensively. |
| Audio not heard over gym noise | High — missed transitions | High | Max volume override, play through silent mode, haptic backup. Test in real gym. |
| GPS battery drain | Medium — phone dies mid-session | Medium | Use significant-change location (low power). Option to disable map. |
| Screen lock during session | High — session interrupted | Low | expo-keep-awake, test on multiple devices with aggressive battery optimization. |
| Too many presets overwhelm users | Low — decision paralysis | Low | Default to BJJ (most common). Search + recent selections for power users. |
| Metric counters distract during sparring | Medium — poor UX | Medium | Optional: can hide metrics. Counters designed for between-round taps. |

---

## 10. Phased Roadmap

### Phase 1: Core Timer (Now → April 2026)

Ship the MVP to TestFlight. All 5 screens working: Config with presets, Get Ready countdown, Work/Rest timer with metric counters, Done with stats. Audio buzzer, haptic feedback, screen wake lock. Deploy to Eduardo's gym for dogfight testing.

### Phase 2: Polish + Launch (April → May 2026)

Fix everything from gym testing. Add: session history (local storage), custom preset creation, share session results as image card, App Store submission (iOS first).

### Phase 3: Social + Growth (June 2026+)

Training log with calendar view, gym leaderboards (opt-in), coach mode (one phone controls multiple sessions), Apple Watch companion for haptic-only round notifications, IBJJF rule presets by belt (white belt: 5min, black belt: 10min).

### Phase 4: Monetization (Q3 2026+)

Free tier: 3 presets, basic timer. Pro tier ($4.99/mo): all 16+ presets, training history, advanced metrics, share cards, coach mode. Gym tier ($19.99/mo): team management, branded timer, analytics dashboard.

---

## 11. Open Questions

1. **Metric counter design during active sparring:** Are tappable pills practical when you're grappling? Or should metrics be logged between rounds only? Needs gym testing to validate.
2. **Audio profile:** Should we ship with built-in sounds or let users choose custom sounds? MVP = built-in only.
3. **URL sharing from v1 web version:** The original concept had shareable URL-encoded configs. Should the native app support deep links that open preset configurations? Adds complexity but high viral potential.
4. **Landscape mode:** When phone is propped against wall, landscape shows bigger numbers. Worth building for v1?
5. **Apple Watch:** Haptic-only round notifications on wrist would be killer for BJJ (can't look at phone while rolling). Phase 2 or 3?

---

## 12. References

- **Design Mockup:** [choke.ac](https://www.choke.ac) (interactive 5-screen prototype)
- **Design Spec:** [DESIGN.md](./DESIGN.md) (locked typography, colors, animations, presets)
- **Repository:** [github.com/ekanekox/choke](https://github.com/ekanekox/choke)
- **Design Reference:** AnyDistance app (iOS) — primary UX inspiration
