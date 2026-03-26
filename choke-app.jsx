import { useState, useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";

// ===== DESIGN TOKENS =====
const T = {
  bg: "#0a0a0a",
  white: "#ffffff",
  gold: "#f4a423",
  red: "#e63946",
  blue: "#457b9d",
  green: "#34d058",
  font: "'Poppins', 'SF Pro Display', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
};

const w = (o) => `rgba(255,255,255,${o})`;

const SPORTS = [
  { name: "Brazilian Jiu-Jitsu", color: T.gold, roundTime: 300, restTime: 60, rounds: 5 },
  { name: "Boxing", color: T.red, roundTime: 180, restTime: 60, rounds: 12 },
  { name: "MMA", color: T.red, roundTime: 300, restTime: 60, rounds: 5 },
  { name: "HIIT", color: T.green, roundTime: 40, restTime: 20, rounds: 8 },
  { name: "Muay Thai", color: T.red, roundTime: 180, restTime: 120, rounds: 5 },
  { name: "Wrestling", color: T.blue, roundTime: 180, restTime: 30, rounds: 3 },
  { name: "Tabata", color: T.green, roundTime: 20, restTime: 10, rounds: 8 },
];

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const fmtPad = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

// ===== AUDIO ENGINE =====
class AudioEngine {
  constructor() { this.initialized = false; this.tickSynth = null; this.beepSynth = null; this.warnSynth = null; this.tickLoop = null; }
  async init() {
    if (this.initialized) return;
    await Tone.start();
    this.tickSynth = new Tone.MembraneSynth({ pitchDecay: 0.008, octaves: 2, oscillator: { type: "sine" }, envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.02 } }).toDestination();
    this.tickSynth.volume.value = -20;
    this.beepSynth = new Tone.Synth({ oscillator: { type: "sine" }, envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.2 } }).toDestination();
    this.beepSynth.volume.value = -6;
    this.warnSynth = new Tone.Synth({ oscillator: { type: "triangle" }, envelope: { attack: 0.005, decay: 0.15, sustain: 0, release: 0.3 } }).toDestination();
    this.warnSynth.volume.value = -8;
    this.initialized = true;
  }
  tick() { if (this.initialized) this.tickSynth.triggerAttackRelease("C1", "32n"); }
  startTicking() {
    if (!this.initialized) return; this.stopTicking();
    this.tickLoop = new Tone.Loop((time) => { this.tickSynth.triggerAttackRelease("C1", "32n", time); }, "1s");
    this.tickLoop.start(0); Tone.Transport.start();
  }
  stopTicking() { if (this.tickLoop) { this.tickLoop.stop(); this.tickLoop.dispose(); this.tickLoop = null; } Tone.Transport.stop(); }
  beepCountdown(remaining) {
    if (!this.initialized) return;
    if (remaining <= 3 && remaining > 0) this.warnSynth.triggerAttackRelease("G5", "8n");
    else if (remaining <= 10 && remaining > 3) this.warnSynth.triggerAttackRelease("E4", "16n");
  }
  roundEnd() { if (!this.initialized) return; const n = Tone.now(); this.beepSynth.triggerAttackRelease("C5", "8n", n); this.beepSynth.triggerAttackRelease("E5", "8n", n + 0.15); this.beepSynth.triggerAttackRelease("G5", "8n", n + 0.3); }
  sessionEnd() { if (!this.initialized) return; const n = Tone.now(); this.beepSynth.triggerAttackRelease("C5", "8n", n); this.beepSynth.triggerAttackRelease("E5", "8n", n + 0.12); this.beepSynth.triggerAttackRelease("G5", "8n", n + 0.24); this.beepSynth.triggerAttackRelease("C6", "4n", n + 0.4); }
  getReadyBeep() { if (this.initialized) this.warnSynth.triggerAttackRelease("A4", "8n"); }
}
const audio = new AudioEngine();

// ===== DARK MAP =====
function DarkMap({ style, children }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width = canvas.offsetWidth * 2;
    const H = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2); const w2 = W / 2, h2 = H / 2;
    ctx.fillStyle = "#0c0f0c"; ctx.fillRect(0, 0, w2, h2);
    ctx.strokeStyle = "rgba(255,255,255,0.03)"; ctx.lineWidth = 1;
    for (let i = 0; i < 18; i++) {
      const pts = []; let x = Math.random() * w2, y = Math.random() * h2;
      const angle = Math.random() * Math.PI * 2;
      for (let j = 0; j < 12; j++) { pts.push({ x, y }); x += Math.cos(angle + (Math.random() - 0.5) * 1.2) * (30 + Math.random() * 60); y += Math.sin(angle + (Math.random() - 0.5) * 1.2) * (30 + Math.random() * 60); }
      ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
      for (let k = 1; k < pts.length - 1; k++) { ctx.quadraticCurveTo(pts[k].x, pts[k].y, (pts[k].x + pts[k + 1].x) / 2, (pts[k].y + pts[k + 1].y) / 2); }
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(255,255,255,0.05)"; ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) { ctx.beginPath(); const sx = Math.random() * w2, sy = Math.random() * h2; ctx.moveTo(sx, sy); ctx.quadraticCurveTo((sx + Math.random() * w2) / 2, (sy + Math.random() * h2) / 2, Math.random() * w2, Math.random() * h2); ctx.stroke(); }
    ctx.strokeStyle = "rgba(255,255,255,0.06)"; ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) { const cx = Math.random() * w2, cy = Math.random() * h2; ctx.beginPath(); ctx.moveTo(cx - 5, cy); ctx.lineTo(cx + 5, cy); ctx.stroke(); ctx.beginPath(); ctx.moveTo(cx, cy - 5); ctx.lineTo(cx, cy + 5); ctx.stroke(); }
    ctx.fillStyle = "rgba(255,255,255,0.015)";
    for (let i = 0; i < 30; i++) ctx.fillRect(Math.random() * w2, Math.random() * h2, 8 + Math.random() * 20, 8 + Math.random() * 20);
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, ...style }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      <div style={{ position: "absolute", left: "50%", top: "42%", transform: "translate(-50%, -50%)" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(52,208,88,0.1)", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse 3s ease-in-out infinite" }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: T.green, boxShadow: "0 0 20px rgba(52,208,88,0.4), 0 0 60px rgba(52,208,88,0.15)" }} />
        </div>
      </div>
      {children}
    </div>
  );
}

// ===== ANIMATED START BUTTON =====
function StartButton({ onClick }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button onClick={onClick} className="start-btn" style={{
        position: "relative", zIndex: 1, width: "100%",
        background: "#141414", color: T.white, border: "none",
        borderRadius: 12, padding: 18, fontFamily: T.font,
        fontSize: 17, fontWeight: 700, cursor: "pointer",
        letterSpacing: -0.3, transition: "transform 0.2s",
      }}>
        Start Session
      </button>
    </div>
  );
}

// ===== GLOWING PROGRESS BAR =====
function GlowProgressBar({ pct, color, isRest }) {
  const barColor = isRest ? T.blue : T.gold;
  return (
    <div style={{ position: "relative", width: "100%", height: 10, borderRadius: 3, background: w(0.08) }}>
      <div style={{
        position: "absolute", top: 0, left: 0, height: "100%",
        width: `${pct}%`, borderRadius: 3,
        background: barColor,
        boxShadow: `${barColor} 0px 2px 29px 0px, ${barColor}88 0px 0px 12px 0px`,
        transition: "width 1s linear",
      }} />
      {/* Shimmer effect */}
      <div style={{
        position: "absolute", top: 0, left: 0, height: "100%",
        width: `${pct}%`, borderRadius: 3, overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "-100%", width: "200%", height: "100%",
          background: `linear-gradient(90deg, transparent 0%, ${w(0.3)} 50%, transparent 100%)`,
          animation: "shimmer 2s ease-in-out infinite",
        }} />
      </div>
    </div>
  );
}

// ===== SCREEN FLASH OVERLAY =====
function ScreenFlash({ remaining, isRest }) {
  if (remaining > 10 || remaining <= 0) return null;
  const intensity = remaining <= 3 ? 0.15 + (3 - remaining) * 0.08 : 0.04;
  const flashColor = isRest ? T.blue : T.gold;
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 50,
      background: flashColor, opacity: intensity,
      animation: remaining <= 3 ? "flashHard 1s ease-in-out infinite" : "flashSoft 1s ease-in-out infinite",
      pointerEvents: "none",
      transition: "opacity 0.3s",
    }} />
  );
}

// ===== CONFIG SCREEN =====
function ConfigScreen({ config, onStart, onSportSelect, onConfigOpen }) {
  const [weather, setWeather] = useState("São Paulo · 28°C · Sunny");
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (pos) => {
      try {
        const { latitude: lat, longitude: lon } = pos.coords;
        const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await resp.json(); const temp = Math.round(data.current_weather.temperature);
        const codes = { 0: "Clear", 1: "Mostly Clear", 2: "Partly Cloudy", 3: "Cloudy", 45: "Foggy", 51: "Light Rain", 61: "Rain" };
        const desc = codes[data.current_weather.weathercode] || "Weather";
        try { const geo = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`); const gd = await geo.json(); setWeather(`${gd.address?.city || gd.address?.town || "Your location"} · ${temp}°C · ${desc}`); } catch { setWeather(`${temp}°C · ${desc}`); }
      } catch {}
    }, () => {}, { timeout: 5000 });
  }, []);
  const totalSec = config.rounds * config.roundTime + (config.rounds - 1) * config.restTime;

  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
      <DarkMap>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.6) 25%, rgba(10,10,10,0.92) 50%, rgba(10,10,10,0.98) 100%)", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)" }} />
      </DarkMap>
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%", padding: "20px 24px" }}>
        <div style={{ fontFamily: T.font, fontSize: 38, fontWeight: 900, letterSpacing: -2, color: w(0.95), marginTop: 12 }}>choke.</div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <div style={{ fontFamily: T.font, fontSize: 22, fontWeight: 700, color: w(0.9) }}>Great to see you</div>
            <div style={{ fontFamily: T.font, fontSize: 12, color: w(0.35), marginTop: 2 }}>{weather}</div>
          </div>
          <div onClick={onSportSelect} style={{ display: "flex", alignItems: "center", gap: 12, background: w(0.05), border: `1px solid ${w(0.08)}`, borderRadius: 28, padding: "10px 12px 10px 16px", cursor: "pointer" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", border: `1.5px solid ${config.sport.color}`, flexShrink: 0 }} />
            <span style={{ fontFamily: T.font, fontSize: 16, fontWeight: 500, color: w(0.9), flex: 1 }}>{config.sport.name}</span>
            <span style={{ color: w(0.25), fontSize: 14 }}>&#9662;</span>
          </div>
          <div onClick={onConfigOpen} style={{ display: "flex", alignItems: "center", background: w(0.04), border: `1px solid ${w(0.05)}`, borderRadius: 14, padding: "12px 16px", fontFamily: T.mono, fontSize: 12, color: w(0.5), cursor: "pointer" }}>
            <span>{config.rounds} rounds · {fmt(config.roundTime)} work · {fmt(config.restTime)} rest</span>
            <span style={{ marginLeft: "auto", fontWeight: 600, color: w(0.6) }}>{fmt(totalSec)} <span style={{ fontSize: 10, color: w(0.25) }}>&#9662;</span></span>
          </div>
          <StartButton onClick={onStart} />
          <div style={{ display: "flex", justifyContent: "space-around", padding: "12px 0 4px" }}>
            {["profile", "timer", "stats"].map((icon, i) => (
              <div key={icon} style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${w(i === 1 ? 0.5 : 0.15)}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: w(i === 1 ? 0.4 : 0.2) }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== GET READY SCREEN =====
function GetReadyScreen({ config, count }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", background: T.bg }}>
      <div style={{ fontFamily: T.font, fontSize: 12, fontWeight: 700, letterSpacing: 6, color: w(0.35), textTransform: "uppercase" }}>GET READY</div>
      <div style={{ width: 180, height: 180, borderRadius: "50%", border: `3px solid ${T.gold}`, margin: "24px 0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(244,164,35,0.08), inset 0 0 40px rgba(244,164,35,0.04)", animation: "ringPulse 1s ease-in-out infinite" }}>
        <div style={{ fontFamily: T.mono, fontSize: 88, fontWeight: 900, color: T.gold, animation: "countFade 1s ease-in-out infinite" }}>{count}</div>
      </div>
      <div style={{ fontFamily: T.font, fontSize: 14, color: w(0.35), marginTop: 20 }}>{config.sport.name}</div>
      <div style={{ fontFamily: T.font, fontSize: 13, color: w(0.2), marginTop: 4 }}>Round 1 of {config.rounds}</div>
    </div>
  );
}

// ===== TIMER SCREEN — REDESIGNED =====
function TimerScreen({ config, timer, onPause, onSkip, onStop, onMetric }) {
  const isRest = timer.phase === "rest";
  const phaseDuration = isRest ? config.restTime : config.roundTime;
  const remaining = phaseDuration - timer.elapsed;
  const totalSec = config.rounds * config.roundTime + (config.rounds - 1) * config.restTime;
  const progressPct = Math.min(100, (timer.totalElapsed / totalSec) * 100);
  const endTime = new Date(Date.now() + (totalSec - timer.totalElapsed) * 1000);
  const endStr = `${endTime.getHours()}:${String(endTime.getMinutes()).padStart(2, "0")}`;
  const isWarning = remaining <= 10 && remaining > 0;
  const isCritical = remaining <= 3 && remaining > 0;

  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100%",
      background: isRest ? "#080a14" : T.bg, position: "relative",
      transition: "background 0.5s ease",
    }}>
      {/* Screen flash on last 10s */}
      <ScreenFlash remaining={remaining} isRest={isRest} />

      <DarkMap style={{ opacity: isRest ? 0.2 : 0.35 }}>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "80%",
          background: isRest
            ? "linear-gradient(to bottom, transparent, rgba(8,10,20,0.9) 40%, rgba(8,10,20,0.99) 100%)"
            : "linear-gradient(to bottom, transparent, rgba(10,10,10,0.9) 40%, rgba(10,10,10,0.99) 100%)",
        }} />
      </DarkMap>

      {/* Compact top bar: sport + status + round */}
      <div style={{ position: "relative", zIndex: 2, padding: "16px 24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: isRest ? T.blue : T.green, animation: "blink 2s infinite" }} />
          <span style={{ fontFamily: T.font, fontSize: 14, fontWeight: 600, color: w(0.7) }}>{config.sport.name}</span>
        </div>
        <div style={{ fontFamily: T.mono, fontSize: 12, color: w(0.35) }}>
          R{timer.currentRound}/{config.rounds}
        </div>
      </div>

      {/* ===== MASSIVE COUNTDOWN — 60% of screen ===== */}
      <div style={{
        position: "relative", zIndex: 2,
        flex: "0 0 55%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "0 24px",
      }}>
        {/* Phase label */}
        <div style={{
          fontFamily: T.font, fontSize: 13, fontWeight: 700,
          letterSpacing: 4, textTransform: "uppercase",
          color: isRest ? T.blue : (isCritical ? T.red : T.gold),
          marginBottom: 8, transition: "color 0.3s",
        }}>
          {isRest ? "REST" : "WORK"}
        </div>

        {/* THE BIG NUMBER */}
        <div style={{
          fontFamily: T.mono,
          fontSize: "min(28vw, 140px)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -4,
          color: isCritical ? T.red : isRest ? w(0.85) : T.white,
          textShadow: isCritical
            ? `0 0 40px ${T.red}66, 0 0 80px ${T.red}33`
            : isWarning
            ? `0 0 30px ${T.gold}44, 0 0 60px ${T.gold}22`
            : "none",
          transition: "color 0.3s, text-shadow 0.3s",
          animation: isCritical ? "criticalPulse 0.5s ease-in-out infinite" : "none",
        }}>
          {fmtPad(remaining)}
        </div>

        {/* Sub info: elapsed / total */}
        <div style={{
          fontFamily: T.mono, fontSize: 12, color: w(0.25),
          marginTop: 12, display: "flex", gap: 16,
        }}>
          <span>Elapsed {fmtPad(timer.elapsed)}</span>
          <span>·</span>
          <span>Ends {endStr}</span>
        </div>
      </div>

      {/* ===== GLOWING PROGRESS BAR ===== */}
      <div style={{ padding: "0 24px 8px", position: "relative", zIndex: 2 }}>
        <GlowProgressBar pct={progressPct} isRest={isRest} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          {Array.from({ length: config.rounds }, (_, i) => {
            const done = i + 1 < timer.currentRound;
            const active = i + 1 === timer.currentRound;
            return (
              <div key={i} style={{
                width: 12, height: 12, borderRadius: "50%",
                background: done ? T.gold : active ? (isRest ? T.blue : T.gold) : "transparent",
                border: done || active ? "none" : `1.5px solid ${w(0.12)}`,
                opacity: done ? 0.4 : 1,
                boxShadow: active ? `0 0 8px ${isRest ? T.blue : T.gold}66` : "none",
                transition: "all 0.3s",
              }} />
            );
          })}
        </div>
      </div>

      {/* Compact stats row */}
      <div style={{
        display: "flex", gap: 8, padding: "8px 24px",
        position: "relative", zIndex: 2,
      }}>
        {[
          { label: "Round", value: fmtPad(config.roundTime), color: w(0.5) },
          { label: "Rest", value: fmtPad(config.restTime), color: w(0.5) },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, background: w(0.03), border: `1px solid ${w(0.04)}`,
            borderRadius: 12, padding: "8px 12px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontFamily: T.font, fontSize: 10, color: w(0.25), textTransform: "uppercase", letterSpacing: 0.5 }}>{s.label}</span>
            <span style={{ fontFamily: T.mono, fontSize: 14, fontWeight: 700, color: s.color }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* Rest message */}
      {isRest && (
        <div style={{ textAlign: "center", padding: "4px 24px", fontFamily: T.font, fontSize: 13, color: w(0.18), fontStyle: "italic", position: "relative", zIndex: 2 }}>
          Breathe. Recover. Focus.
        </div>
      )}

      {/* Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, padding: "8px 24px", position: "relative", zIndex: 2 }}>
        {[
          { key: "submissions", label: "Subs" },
          { key: "sweeps", label: "Sweeps" },
          { key: "guards", label: "Guards" },
        ].map((m) => (
          <div key={m.key} onClick={() => onMetric(m.key)} style={{
            background: w(0.03), border: `1px solid ${w(0.05)}`,
            borderRadius: 10, padding: "8px 6px", textAlign: "center",
            cursor: "pointer", transition: "all 0.15s",
          }}>
            <div style={{ fontFamily: T.mono, fontSize: 18, fontWeight: 700, color: w(0.75) }}>{timer.metrics[m.key]}</div>
            <div style={{ fontFamily: T.font, fontSize: 8, color: w(0.25), textTransform: "uppercase", marginTop: 2, letterSpacing: 0.5 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 20, padding: "12px 24px 28px", position: "relative", zIndex: 2 }}>
        <button onClick={onStop} style={{ width: 44, height: 44, background: w(0.08), border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill={w(0.5)}><rect x="6" y="6" width="12" height="12" rx="1" /></svg>
        </button>
        <button onClick={onPause} style={{ width: 64, height: 64, background: T.gold, border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(244,164,35,0.3)" }}>
          {timer.paused ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={T.bg}><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={T.bg}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          )}
        </button>
        <button onClick={onSkip} style={{ width: 44, height: 44, background: w(0.08), border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill={w(0.5)}><path d="M5 4l10 8-10 8V4z" /><rect x="17" y="5" width="2" height="14" /></svg>
        </button>
      </div>
    </div>
  );
}

// ===== DONE SCREEN =====
function DoneScreen({ config, timer, onNewSession }) {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const now = new Date();
  const totalSec = config.rounds * config.roundTime + (config.rounds - 1) * config.restTime;
  const handleShare = () => {
    const text = `${config.sport.name} — ${config.rounds} rounds · ${fmt(config.rounds * config.roundTime)} work\nSubmissions: ${timer.metrics.submissions} | Sweeps: ${timer.metrics.sweeps} | Guard Pulls: ${timer.metrics.guards}\nTrained with choke.ac`;
    if (navigator.share) navigator.share({ title: "Choke Timer", text });
    else navigator.clipboard?.writeText(text).then(() => alert("Results copied!"));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", padding: "60px 24px 32px", background: T.bg }}>
      <div style={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid rgba(244,164,35,0.4)", background: "rgba(244,164,35,0.08)", display: "flex", alignItems: "center", justifyContent: "center", animation: "checkIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
        <svg width="36" height="36" viewBox="0 0 24 24" stroke={T.gold} fill="none" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <div style={{ fontFamily: T.font, fontSize: 24, fontWeight: 700, color: w(0.95), marginTop: 24 }}>Session Complete</div>
      <div style={{ fontFamily: T.font, fontSize: 10, fontWeight: 700, letterSpacing: 3, color: w(0.25), marginTop: 8, textTransform: "uppercase" }}>{config.sport.name.toUpperCase()} · {months[now.getMonth()]} {now.getDate()}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", marginTop: 32 }}>
        {[
          { label: "Rounds", value: String(config.rounds).padStart(2, "0") },
          { label: "Total Time", value: fmtPad(totalSec) },
          { label: "Work Time", value: fmtPad(config.rounds * config.roundTime) },
          { label: "Rest Time", value: fmtPad((config.rounds - 1) * config.restTime) },
        ].map((s, i) => (
          <div key={i} style={{ background: w(0.04), border: `1px solid ${w(0.05)}`, borderRadius: 16, padding: 18, textAlign: "center" }}>
            <div style={{ fontFamily: T.mono, fontSize: 28, fontWeight: 700, color: w(0.9) }}>{s.value}</div>
            <div style={{ fontFamily: T.font, fontSize: 12, color: w(0.35), marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ width: "100%", height: 1, background: w(0.04), margin: "24px 0 16px" }} />
      <div style={{ fontFamily: T.font, fontSize: 10, fontWeight: 700, letterSpacing: 2, color: w(0.2), alignSelf: "flex-start", marginBottom: 10 }}>PERFORMANCE</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, width: "100%" }}>
        {[{ key: "submissions", label: "Submissions" }, { key: "sweeps", label: "Sweeps" }, { key: "guards", label: "Guard Pulls" }].map((m) => (
          <div key={m.key} style={{ background: w(0.03), border: `1px solid ${w(0.05)}`, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
            <div style={{ fontFamily: T.mono, fontSize: 22, fontWeight: 700, color: T.gold }}>{timer.metrics[m.key]}</div>
            <div style={{ fontFamily: T.font, fontSize: 9, color: w(0.25), textTransform: "uppercase", marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={onNewSession} style={{ background: T.white, color: T.bg, border: "none", borderRadius: 28, padding: 16, fontFamily: T.font, fontSize: 16, fontWeight: 700, cursor: "pointer", width: "100%" }}>New Session</button>
        <button onClick={handleShare} style={{ background: "transparent", color: w(0.45), border: `1px solid ${w(0.15)}`, borderRadius: 22, padding: 12, fontFamily: T.font, fontSize: 13, fontWeight: 500, cursor: "pointer", width: "100%" }}>Share Results</button>
      </div>
    </div>
  );
}

// ===== MODALS =====
function SportModal({ open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#141414", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 500, padding: "24px 24px 40px", animation: "slideUp 0.3s ease" }}>
        <div style={{ fontFamily: T.font, fontSize: 18, fontWeight: 700, marginBottom: 16, color: T.white }}>Choose Activity</div>
        {SPORTS.map((s, i) => (
          <div key={i} onClick={() => onSelect(i)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: i < SPORTS.length - 1 ? `1px solid ${w(0.05)}` : "none", cursor: "pointer", color: T.white }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }} />
            <span style={{ fontFamily: T.font, fontSize: 16, fontWeight: 500 }}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfigModal({ open, onClose, config, setConfig }) {
  if (!open) return null;
  const adjust = (field, delta) => {
    setConfig((c) => ({ ...c, [field]: field === "rounds" ? Math.max(1, Math.min(30, c[field] + delta)) : Math.max(field === "restTime" ? 0 : 15, Math.min(field === "restTime" ? 600 : 3600, c[field] + delta)) }));
  };
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#141414", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 500, padding: "24px 24px 40px", animation: "slideUp 0.3s ease" }}>
        <div style={{ fontFamily: T.font, fontSize: 18, fontWeight: 700, marginBottom: 16, color: T.white }}>Session Settings</div>
        {[
          { field: "rounds", label: "ROUNDS", delta: 1, display: String(config.rounds) },
          { field: "roundTime", label: "ROUND TIME", delta: 30, display: fmt(config.roundTime) },
          { field: "restTime", label: "REST TIME", delta: 15, display: fmt(config.restTime) },
        ].map((row) => (
          <div key={row.field} style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: T.font, fontSize: 10, fontWeight: 700, letterSpacing: 2, color: w(0.35), marginBottom: 8 }}>{row.label}</div>
            <div style={{ display: "flex", alignItems: "center", background: w(0.05), borderRadius: 16, padding: 8 }}>
              <button onClick={() => adjust(row.field, -row.delta)} style={{ width: 48, height: 48, background: w(0.08), border: "none", borderRadius: 12, fontSize: 22, color: w(0.6), cursor: "pointer", fontFamily: T.font }}>−</button>
              <div style={{ flex: 1, textAlign: "center", fontFamily: T.mono, fontSize: 28, fontWeight: 700, color: T.white }}>{row.display}</div>
              <button onClick={() => adjust(row.field, row.delta)} style={{ width: 48, height: 48, background: w(0.08), border: "none", borderRadius: 12, fontSize: 22, color: w(0.6), cursor: "pointer", fontFamily: T.font }}>+</button>
            </div>
          </div>
        ))}
        <button onClick={onClose} style={{ background: T.white, color: T.bg, border: "none", borderRadius: 28, padding: 16, fontFamily: T.font, fontSize: 17, fontWeight: 700, cursor: "pointer", width: "100%" }}>Done</button>
      </div>
    </div>
  );
}

// ===== MAIN APP =====
export default function ChokeTimer() {
  const [screen, setScreen] = useState("config");
  const [config, setConfig] = useState({ sport: SPORTS[0], rounds: 5, roundTime: 300, restTime: 60 });
  const [timer, setTimer] = useState({ phase: "work", currentRound: 1, elapsed: 0, totalElapsed: 0, paused: false, metrics: { submissions: 0, sweeps: 0, guards: 0 } });
  const [getReadyCount, setGetReadyCount] = useState(3);
  const [sportModal, setSportModal] = useState(false);
  const [configModal, setConfigModal] = useState(false);
  const timerRef = useRef(null);
  const timerStateRef = useRef(timer);
  timerStateRef.current = timer;
  const configRef = useRef(config);
  configRef.current = config;

  const startSession = useCallback(async () => {
    await audio.init();
    setTimer({ phase: "work", currentRound: 1, elapsed: 0, totalElapsed: 0, paused: false, metrics: { submissions: 0, sweeps: 0, guards: 0 } });
    try { await document.documentElement.requestFullscreen?.(); } catch {}
    try { await navigator.wakeLock?.request("screen"); } catch {}
    setScreen("getready"); setGetReadyCount(3); audio.getReadyBeep();
    let cd = 3;
    const cdInterval = setInterval(() => {
      cd--;
      if (cd > 0) { setGetReadyCount(cd); audio.getReadyBeep(); }
      else { clearInterval(cdInterval); audio.roundEnd(); setScreen("timer"); audio.startTicking(); startTimerInterval(); }
    }, 1000);
  }, []);

  const startTimerInterval = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const t = timerStateRef.current; const c = configRef.current;
      if (t.paused) return;
      const newElapsed = t.elapsed + 1;
      const newTotalElapsed = t.totalElapsed + 1;
      const phaseDuration = t.phase === "work" ? c.roundTime : c.restTime;
      const remaining = phaseDuration - newElapsed;
      if (remaining <= 10 && remaining > 0) audio.beepCountdown(remaining);
      if (newElapsed >= phaseDuration) {
        if (t.phase === "work") {
          if (t.currentRound >= c.rounds) { clearInterval(timerRef.current); audio.stopTicking(); audio.sessionEnd(); setScreen("done"); setTimer((p) => ({ ...p, elapsed: newElapsed, totalElapsed: newTotalElapsed })); return; }
          audio.roundEnd(); setTimer((p) => ({ ...p, phase: "rest", elapsed: 0, totalElapsed: newTotalElapsed }));
        } else { audio.roundEnd(); setTimer((p) => ({ ...p, phase: "work", currentRound: p.currentRound + 1, elapsed: 0, totalElapsed: newTotalElapsed })); }
      } else { setTimer((p) => ({ ...p, elapsed: newElapsed, totalElapsed: newTotalElapsed })); }
    }, 1000);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); audio.stopTicking(); }, []);

  const handlePause = () => setTimer((p) => { const np = !p.paused; if (np) audio.stopTicking(); else audio.startTicking(); return { ...p, paused: np }; });
  const handleSkip = () => { const t = timerStateRef.current; const c = configRef.current; const pd = t.phase === "work" ? c.roundTime : c.restTime; const rem = pd - t.elapsed; setTimer((p) => ({ ...p, elapsed: pd - 1, totalElapsed: p.totalElapsed + rem - 1 })); };
  const handleStop = () => { clearInterval(timerRef.current); audio.stopTicking(); setScreen("done"); };
  const handleMetric = (key) => { audio.tick(); setTimer((p) => ({ ...p, metrics: { ...p.metrics, [key]: p.metrics[key] + 1 } })); };
  const handleSportSelect = (i) => { const s = SPORTS[i]; setConfig({ sport: s, rounds: s.rounds, roundTime: s.roundTime, restTime: s.restTime }); setSportModal(false); };

  return (
    <div style={{ width: "100%", height: "100vh", background: T.bg, overflow: "hidden", fontFamily: T.font, position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.5); opacity: 0.3; } }
        @keyframes ringPulse { 0%, 100% { box-shadow: 0 0 40px rgba(244,164,35,0.08), inset 0 0 40px rgba(244,164,35,0.04); } 50% { box-shadow: 0 0 60px rgba(244,164,35,0.15), inset 0 0 60px rgba(244,164,35,0.08); } }
        @keyframes countFade { 0%, 100% { opacity: 0.5; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes checkIn { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes flashSoft { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes flashHard { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes criticalPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes borderSpin { 0% { background-position: 0 0; } 50% { background-position: 400% 0; } 100% { background-position: 0 0; } }
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; user-select: none; -webkit-user-select: none; }
        body { overflow: hidden; }
        .start-btn { position: relative; }
        .start-btn::before, .start-btn::after {
          content: ''; position: absolute; left: -2px; top: -2px;
          border-radius: 14px; width: calc(100% + 4px); height: calc(100% + 4px); z-index: -1;
          background: linear-gradient(45deg, #141414, #1b1b1b, #2e2e2e, #e1e1e1, #2e2e2e, #1b1b1b, #141414, #141414);
          background-size: 400%; animation: borderSpin 20s linear infinite;
        }
        .start-btn::after { filter: blur(50px); }
        .start-btn:active { transform: scale(0.97); }
      `}</style>

      {["config", "getready", "timer", "done"].map((s) => (
        <div key={s} style={{ position: "absolute", inset: 0, opacity: screen === s ? 1 : 0, pointerEvents: screen === s ? "auto" : "none", transition: "opacity 0.4s ease" }}>
          {s === "config" && <ConfigScreen config={config} onStart={startSession} onSportSelect={() => setSportModal(true)} onConfigOpen={() => setConfigModal(true)} />}
          {s === "getready" && <GetReadyScreen config={config} count={getReadyCount} />}
          {s === "timer" && <TimerScreen config={config} timer={timer} onPause={handlePause} onSkip={handleSkip} onStop={handleStop} onMetric={handleMetric} />}
          {s === "done" && <DoneScreen config={config} timer={timer} onNewSession={() => setScreen("config")} />}
        </div>
      ))}

      <SportModal open={sportModal} onClose={() => setSportModal(false)} onSelect={handleSportSelect} />
      <ConfigModal open={configModal} onClose={() => setConfigModal(false)} config={config} setConfig={setConfig} />
    </div>
  );
}
