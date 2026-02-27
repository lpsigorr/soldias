import { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { LOOKBOOK } from "../data/data";
import Footer from "../components/Footer";

export default function Lookbook() {
  const { navigate } = useRouter();
  const [selected, setSelected] = useState(null);

  // Double the items to fill the masonry grid nicely
  const items = [...LOOKBOOK, ...LOOKBOOK];

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 24px" }}>
        <p className="section-label">Visual Archive</p>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.88, marginBottom: 60 }}>
          LOOKBOOK<br /><span style={{ color: "#4a5340" }}>DROP 001</span>
        </h1>

        {/* Masonry grid */}
        <div style={{ columns: "3 280px", gap: 12 }}>
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelected(item)}
              style={{ breakInside: "avoid", marginBottom: 12, overflow: "hidden", cursor: "pointer", position: "relative" }}
            >
              <div
                style={{
                  height: item.aspect === "portrait" ? 420 : item.aspect === "landscape" ? 260 : 320,
                  background: `hsl(${(item.id * 37) % 360}, 4%, ${10 + (item.id % 4) * 3}%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ textAlign: "center", padding: 24 }}>
                  <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 13, color: "rgba(74,83,64,0.4)", letterSpacing: "0.2em", marginBottom: 8 }}>SOLDIAS</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.2)", letterSpacing: "0.15em" }}>{item.caption}</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(74,83,64,0.4)", letterSpacing: "0.2em", marginTop: 8 }}>
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
              {item.tag && (
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/product/${item.tag}`); }}
                  style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: "rgba(10,10,8,0.85)", border: "1px solid rgba(74,83,64,0.4)",
                    fontFamily: "'Space Mono', monospace", fontSize: 8,
                    color: "#4a5340", padding: "4px 10px", letterSpacing: "0.15em", cursor: "pointer",
                  }}
                >
                  + SHOP
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)",
            zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center",
            animation: "overlayFade 0.2s ease",
          }}
        >
          <div
            style={{ width: "min(700px, 90vw)", height: "min(700px, 80vh)", background: "#111", display: "flex", flexDirection: "column" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 18, color: "rgba(74,83,64,0.5)", letterSpacing: "0.2em", marginBottom: 12 }}>SOLDIAS</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(240,236,226,0.25)", letterSpacing: "0.2em" }}>{selected.caption}</p>
              </div>
            </div>
            <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(240,236,226,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.15em" }}>{selected.caption}</p>
              <button onClick={() => setSelected(null)} style={{ color: "rgba(240,236,226,0.4)", cursor: "pointer", fontSize: 18 }}>×</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}