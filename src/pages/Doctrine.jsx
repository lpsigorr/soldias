import { useRouter } from "../context/RouterContext";
import { PRINCIPLES } from "../data/data";
import Footer from "../components/Footer";

const PHASES = [
  {
    phase: "LOST",
    num: "PHASE I",
    desc: "Everyone starts here. You don't know what you're building, who you're building it for, or if it will ever mean anything. You feel behind. You compare. You doubt. This phase is not a problem — it is a requirement.",
    active: false,
  },
  {
    phase: "ENDURE & PUSH",
    num: "PHASE II",
    desc: "You stop waiting to feel ready. You stop waiting for the conditions to be right. You move anyway. You show up for the work when nothing is working. You stay in the room. This is the only phase that matters.",
    active: true,
  },
  {
    phase: "FORGE",
    num: "PHASE III",
    desc: "What you endured under pressure becomes who you are. Not a result — a formation. Forge is not arrival. It is the becoming that was happening all along. You don't reach Forge. You realize you were already there.",
    active: false,
  },
];

export default function Doctrine() {
  const { navigate } = useRouter();

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div style={{
        padding: "100px 24px 80px",
        borderBottom: "1px solid rgba(240,236,226,0.06)",
        background: "linear-gradient(135deg, #0a0a08 0%, #0d0e0a 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: "40%",
          background: "linear-gradient(to left, rgba(74,83,64,0.06), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="section-label">Brand Doctrine</p>
          <h1 style={{ fontSize: "clamp(64px, 10vw, 160px)", lineHeight: 0.85, maxWidth: 900 }}>
            THE<br /><span style={{ color: "#4a5340" }}>DOCTRINE</span>
          </h1>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(240,236,226,0.3)", letterSpacing: "0.25em", marginTop: 24 }}>
            ENDURE & PUSH — 2025 — EST. FROM BELIEF
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        {/* Origin */}
        <section style={{ marginBottom: 100 }}>
          <p className="section-label">Origin</p>
          <div style={{ borderLeft: "2px solid #4a5340", paddingLeft: 40, marginTop: 32 }}>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "rgba(240,236,226,0.8)", lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
              Soldias was never a brand idea. It was a place. A group chat. Three friends. No map. Only belief.
            </p>
            <p style={{ fontSize: 15, color: "rgba(240,236,226,0.5)", lineHeight: 1.9, marginBottom: 20 }}>
              It started in the years when everything felt suspended. No direction. No clear next step. Just the daily decision to keep going and the two or three people who were making the same decision beside you.
            </p>
            <p style={{ fontSize: 15, color: "rgba(240,236,226,0.5)", lineHeight: 1.9 }}>
              The name came before the product. Before the logo, before the first sample. It came from the feeling of being soldiers in something unnamed — a phase, a pressure, a becoming. SOLDIAS is that phase given form.
            </p>
          </div>
        </section>

        {/* Phases */}
        <section style={{ marginBottom: 100 }}>
          <p className="section-label">The Phases</p>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 1 }}>
            {PHASES.map((p) => (
              <div key={p.phase} style={{
                background: p.active ? "#0f100d" : "#0a0a08",
                padding: "48px 40px",
                border: "1px solid",
                borderColor: p.active ? "rgba(74,83,64,0.3)" : "rgba(240,236,226,0.06)",
                position: "relative", overflow: "hidden",
              }}>
                {p.active && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#4a5340" }} />}
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: p.active ? "#4a5340" : "rgba(240,236,226,0.2)", letterSpacing: "0.3em", marginBottom: 16 }}>{p.num}</p>
                <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: 20, color: p.active ? "#f0ece2" : "rgba(240,236,226,0.4)" }}>{p.phase}</h2>
                <p style={{ fontSize: 15, color: p.active ? "rgba(240,236,226,0.7)" : "rgba(240,236,226,0.35)", lineHeight: 1.9 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section style={{ marginBottom: 80 }}>
          <p className="section-label">The Principles</p>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 40 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, paddingBottom: 40, borderBottom: "1px solid rgba(240,236,226,0.06)" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.2em" }}>{p.number}</span>
                <div>
                  <h3 style={{ fontSize: 40, marginBottom: 16, letterSpacing: "0.04em" }}>{p.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(240,236,226,0.55)", lineHeight: 1.9 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section style={{ textAlign: "center", padding: "60px 0" }}>
          <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", marginBottom: 24, lineHeight: 0.92 }}>
            THIS IS NOT<br /><span style={{ color: "#4a5340" }}>A BRAND.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(240,236,226,0.5)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 40px" }}>
            It is a record. Of people who stayed in it when staying was the harder choice.
          </p>
          <button className="btn-primary" onClick={() => navigate("/shop")}>Shop the Drop →</button>
        </section>
      </div>
      <Footer />
    </div>
  );
}