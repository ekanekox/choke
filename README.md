# choke.

Multi-sport interval timer for BJJ, Boxing, MMA, and HIIT.

**[choke.ac](https://www.choke.ac)** — Live design preview

---

## What is this

A native mobile app (Expo) that replaces every generic interval timer in the gym. Pick your sport, hit Start, train. Each of the 16 built-in presets loads the correct rounds, duration, rest period, and sport-specific metric counters.

**BJJ**: 5 rounds x 5:00 with 1:00 rest. Track submissions, sweeps, guard pulls.
**Boxing**: 12 rounds x 3:00 with 1:00 rest. Track punches, combos, knockdowns.
**HIIT**: 8 rounds x 0:20 with 0:10 rest. Track reps, calories, heart rate.
**+ 13 more** presets including MMA, Muay Thai, Wrestling, Judo, Kickboxing, Karate, Taekwondo, Capoeira, Sambo, Tabata, Circuit Training, Strength, Custom.

## Design

Design is locked. AnyDistance-inspired dark UI with live map backgrounds, phase-coded colors (red=work, blue=rest, gold=actions), and thin monospace numbers.

See [DESIGN.md](./DESIGN.md) for the full spec (typography, colors, animations, screen layouts).

## Screens

```
Config → Get Ready (3-2-1) → Work → Rest → Work → ... → Done
```

| Screen | Key Feature |
|--------|------------|
| Config | Map + greeting + searchable preset picker + time steppers |
| Get Ready | Frosted glass ring, gold 3-2-1 countdown |
| Work | Red countdown, green tracking dot, tappable sport metrics |
| Rest | Blue countdown, dimmed metrics |
| Done | Gold checkmark, session stats, share |

## Stack

| Layer | Technology |
|-------|-----------|
| App | Expo (React Native) |
| Navigation | expo-router |
| Maps | react-native-maps |
| Location | expo-location |
| Audio | expo-av |
| Haptics | expo-haptics |
| Landing | Static HTML on Vercel |

## Status

- [x] Design exploration (font, color, layout iterations)
- [x] Design locked (choke-v3)
- [x] Landing page deployed to choke.ac
- [ ] Expo project init
- [ ] Config screen
- [ ] Timer engine
- [ ] Work/Rest screens
- [ ] Done screen
- [ ] Audio + haptics
- [ ] TestFlight

## Run locally

```bash
# Landing page (what's deployed to choke.ac)
open index.html

# App (coming soon)
npx expo start
```

## Docs

- [DESIGN.md](./DESIGN.md) — Locked design spec
- [CHOKE-PRD.docx](./CHOKE-PRD.docx) — Full product requirements document

---

Built for the gym.
