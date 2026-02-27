import { useRouter } from "../context/RouterContext";
import { DROPS, PRODUCTS } from "../data/data";
import ProductImage from "../components/ProductImage";
import Footer from "../components/Footer";

export default function Drops() {
  const { navigate } = useRouter();
  const current = DROPS.filter((d) => d.status === "active");
  const past    = DROPS.filter((d) => d.status === "sold-out");

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 24px" }}>
        <p className="section-label">All Drops</p>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.88, marginBottom: 80 }}>THE DROPS</h1>

        {/* Current drop */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.3em", color: "#4a5340" }}>CURRENT DROP</p>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4a5340", animation: "pulse 2s infinite" }} />
          </div>

          {current.map((drop) => (
            <div
              key={drop.slug}
              onClick={() => navigate(`/drops/${drop.slug}`)}
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
                background: "#0d0d0a", padding: 48,
                border: "1px solid rgba(74,83,64,0.2)",
                cursor: "pointer",
              }}
            >
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 16, lineHeight: 0.92 }}>{drop.title}</h2>
                <p style={{ fontSize: 14, color: "rgba(240,236,226,0.55)", lineHeight: 1.8, marginBottom: 32 }}>
                  {drop.story.substring(0, 160)}…
                </p>
                <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.3)", letterSpacing: "0.2em", marginBottom: 4 }}>STATUS</p>
                    <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, color: "#4a5340", letterSpacing: "0.1em" }}>ACTIVE</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.3)", letterSpacing: "0.2em", marginBottom: 4 }}>PIECES</p>
                    <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em" }}>{drop.products.length}</p>
                  </div>
                </div>
                <button className="btn-primary">Enter the Drop →</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <ProductImage key={p.id} product={p} style={{ height: 140 }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Past drops */}
        <div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.3em", color: "rgba(240,236,226,0.3)", marginBottom: 40 }}>
            PAST DROPS
          </p>
          {past.map((drop) => (
            <div
              key={drop.slug}
              onClick={() => navigate(`/drops/${drop.slug}`)}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "32px 0", borderBottom: "1px solid rgba(240,236,226,0.06)",
                cursor: "pointer", opacity: 0.5, transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
            >
              <div>
                <h3 style={{ fontSize: 28, letterSpacing: "0.02em", marginBottom: 4 }}>{drop.title}</h3>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.15em" }}>{drop.subtitle}</p>
              </div>
              <span style={{
                fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em",
                color: "rgba(240,236,226,0.3)", border: "1px solid rgba(240,236,226,0.1)", padding: "4px 12px",
              }}>
                SOLD OUT
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}