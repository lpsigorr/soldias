import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section style={{
      padding: "120px 24px",
      background: "linear-gradient(135deg, #0d0d0a 0%, #111208 100%)",
      borderTop: "1px solid rgba(74,83,64,0.2)",
      borderBottom: "1px solid rgba(74,83,64,0.2)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, rgba(74,83,64,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ display: "inline-block", border: "1px solid rgba(74,83,64,0.4)", padding: "4px 16px", marginBottom: 24 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.3em" }}>
            JOIN THE DOCTRINE
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(48px, 7vw, 88px)", marginBottom: 24, lineHeight: 0.92 }}>
          STAY IN<br /><span style={{ color: "#4a5340" }}>THE LOOP</span>
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 40, flexWrap: "wrap" }}>
          {["Early Access", "Drop Alerts", "Private Releases"].map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 4, height: 4, background: "#4a5340" }} />
              <span style={{
                fontSize: 13, color: "rgba(240,236,226,0.55)",
                fontFamily: "'Barlow Condensed'", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                {b}
              </span>
            </div>
          ))}
        </div>

        {done ? (
          <div>
            <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 32, color: "#4a5340", letterSpacing: "0.05em" }}>
              REGISTERED.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(240,236,226,0.3)", letterSpacing: "0.2em", marginTop: 8 }}>
              STAY READY. WE'LL BE IN TOUCH.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1, minWidth: 200,
                background: "rgba(240,236,226,0.05)",
                border: "1px solid rgba(240,236,226,0.15)", borderRight: "none",
                color: "#f0ece2", padding: "14px 20px", fontSize: 14, outline: "none",
                fontFamily: "'Barlow', sans-serif",
              }}
            />
            <button type="submit" className="btn-primary" style={{ flexShrink: 0, padding: "14px 28px" }}>
              JOIN THE DOCTRINE →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}