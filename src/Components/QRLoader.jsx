import React, { useEffect, useState } from "react";
import "../css/QRLoader.css";
import qrLogo from "../assets/qr-code1.webp";

const MESSAGES = [
  "Generating your QR Code…",
  "Encoding your data…",
  "Building pixel matrix…",
  "Syncing modules…",
  "Almost ready…",
];

export default function QRLoader({ onDone, speed = "fast" }) {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);   // hits 100
  const [exit, setExit] = useState(false);   // fade-out trigger

  // Configuration based on speed (higher frequency = smoother)
  const isSlow = speed === "slow";
  const intervalDur = 30; // 30ms updates for high-fps feel
  const msgIntervalDur = isSlow ? 800 : 300;
  
  // Slow home (~3.5s) vs Fast other (~1s)
  const incrementMin = isSlow ? 0.6 : 3.0;
  const incrementMax = isSlow ? 1.0 : 5.0;
  
  const holdDur = isSlow ? 500 : 200;
  const exitDur = isSlow ? 400 : 300;

  /* cycle messages */
  useEffect(() => {
    const t = setInterval(() => {
      setMsgIdx((i) => (i + 1) % MESSAGES.length);
    }, msgIntervalDur);
    return () => clearInterval(t);
  }, [msgIntervalDur]);

  /* animate progress 0 → 100 */
  useEffect(() => {
    let val = 0;
    const t = setInterval(() => {
      val += Math.random() * (incrementMax - incrementMin) + incrementMin;
      if (val >= 100) {
        clearInterval(t);
        val = 100;
        setProgress(100);
        setDone(true);                // show ✓ flash
        setTimeout(() => {
          setExit(true);             // start fade-out
          setTimeout(() => {
            if (onDone) onDone();   // notify parent to remove loader
          }, exitDur);               // wait for CSS fade to finish
        }, holdDur);                 // hold ✓
        return;
      }
      setProgress(val);
    }, intervalDur);
    return () => clearInterval(t);
  }, [onDone, intervalDur, incrementMax, incrementMin, holdDur, exitDur]);

  return (
    <div className={`qrl-overlay${exit ? " qrl-exit" : ""}`} aria-label="Loading" role="status">
      {/* floating particles */}
      <div className="qrl-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="qrl-particle" style={{ "--i": i }} />
        ))}
      </div>

      <div className={`qrl-card${done ? " qrl-done" : ""}`}>
        {/* ── QR logo image with scanning beam ── */}
        <div className="qrl-qr-grid" aria-hidden="true">
          <img
            src={qrLogo}
            alt="QR Code Logo"
            className={`qrl-logo-img${done ? " qrl-logo-done" : ""}`}
          />
          {/* scanning laser beam — hide when done */}
          {!done && <div className="qrl-scan-beam" />}

          {/* ✓ checkmark on completion */}
          {done && (
            <div className="qrl-check-overlay" aria-hidden="true">
              <svg viewBox="0 0 52 52" className="qrl-check-svg">
                <circle cx="26" cy="26" r="25" fill="none" className="qrl-check-circle" />
                <path fill="none" d="M14 26 l9 9 l16-16" className="qrl-check-mark" />
              </svg>
            </div>
          )}
        </div>

        {/* ── logo text ── */}
        <div className="qrl-brand">
          <span className="qrl-brand-q">QR</span>
          <span className="qrl-brand-rest">IFY</span>
        </div>

        {/* ── animated message ── */}
        <p className="qrl-message" key={done ? "done" : msgIdx}>
          {done ? "Ready! Opening…" : MESSAGES[msgIdx]}
        </p>

        {/* ── progress bar ── */}
        <div className="qrl-progress-track">
          <div
            className={`qrl-progress-fill${done ? " qrl-fill-done" : ""}`}
            style={{ width: `${progress}%` }}
          />
          <span className="qrl-progress-pct">{Math.round(progress)}%</span>
        </div>

        {/* ── three bouncing dots (hide when done) ── */}
        {!done && (
          <div className="qrl-dots" aria-hidden="true">
            <span /><span /><span />
          </div>
        )}
      </div>
    </div>
  );
}
