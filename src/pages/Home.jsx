import { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { PRODUCTS, PRINCIPLES, LOOKBOOK } from "../data/data";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import EmailCapture from "../components/EmailCapture";
import Footer from "../components/Footer";

export default function Home() {
  const { navigate } = useRouter();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 24px 80px",
        position: "relative", overflow: "hidden",
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(74,83,64,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(74,83,64,0.06) 0%, transparent 50%),
          #0a0a08
        `,
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(74,83,64,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,83,64,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px", pointerEvents: "none",
        }} />

        {/* Stamp badge */}
        <div style={{
          position: "absolute", top: 120, right: 40,
          fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 10,
          letterSpacing: "0.4em", textTransform: "uppercase",
          color: "rgba(74,83,64,0.3)", border: "1px solid rgba(74,83,64,0.15)",
          padding: "6px 12px", transform: "rotate(3deg)",
        }}>
          DROP 001 — ACTIVE
        </div>

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>
          <div style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "none" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            <p className="section-label" style={{ marginBottom: 24 }}>// SOLDIAS — EST. 2025</p>
            <h1 style={{ fontSize: "clamp(72px, 13vw, 200px)", lineHeight: 0.88, marginBottom: 32, color: "#f0ece2" }}>
              ENDURE<br />
              <span style={{ WebkitTextStroke: "2px rgba(74,83,64,0.6)", color: "transparent" }}>&</span>{" "}
              <span style={{ color: "#4a5340" }}>PUSH</span>
            </h1>
            <p style={{
              fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(240,236,226,0.55)",
              maxWidth: 480, lineHeight: 1.7, marginBottom: 48, fontWeight: 300,
            }}>
              Forged through pressure. Built for the ones who keep going.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate("/drops")}>Shop Current Drop →</button>
              <button className="btn-outline" onClick={() => navigate("/doctrine")}>Read the Doctrine</button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.3 }}>
          <div style={{ width: 1, height: 60, background: "#4a5340", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: "0.3em", writingMode: "vertical-rl" }}>SCROLL</span>
        </div>
      </section>

      <Marquee />

      {/* ── FEATURED DROP ── */}
      <section style={{ padding: "100px 24px", background: "#0d0d0a" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p className="section-label">Current Drop</p>
            <h2 style={{ fontSize: "clamp(48px, 6vw, 80px)", marginBottom: 24, lineHeight: 0.92 }}>
              ENDURE & PUSH<br /><span style={{ color: "#4a5340" }}>DROP 001</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(240,236,226,0.55)", lineHeight: 1.8, marginBottom: 32, maxWidth: 440 }}>
              Three years of building in silence. Of not being ready but moving anyway. Six pieces designed for the ones still in the middle of something.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 40 }}>
              {["6 PIECES", "LIMITED RUN", "DROP 001"].map((t) => (
                <p key={t} style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, color: "#4a5340", letterSpacing: "0.1em" }}>{t}</p>
              ))}
            </div>
            <button className="btn-primary" onClick={() => navigate("/drops/endure-push-001")}>View the Drop →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {PRODUCTS.slice(0, 4).map((p) => (
              <div key={p.id} onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: "pointer" }}>
                <ProductImage product={p} style={{ height: 200 }} />
                <div style={{ padding: "12px 0" }}>
                  <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>{p.name}</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#4a5340" }}>€{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <p className="section-label">Drop 001</p>
              <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>FEATURED PIECES</h2>
            </div>
            <button className="btn-outline" onClick={() => navigate("/shop")}>View All →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── DOCTRINE PRINCIPLES ── */}
      <section style={{ padding: "100px 24px", background: "#0d0d0a" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="section-label">The Doctrine</p>
          <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: 64 }}>
            BUILT ON THREE<br /><span style={{ color: "#4a5340" }}>PRINCIPLES</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} style={{ background: "#0a0a08", padding: 40, borderTop: "2px solid #4a5340" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.2)", letterSpacing: "0.3em", display: "block", marginBottom: 24 }}>{p.number}</span>
                <h3 style={{ fontSize: 40, marginBottom: 20, letterSpacing: "0.05em" }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(240,236,226,0.55)", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <button className="btn-outline" onClick={() => navigate("/doctrine")}>Read the Full Doctrine →</button>
          </div>
        </div>
      </section>

      {/* ── LOOKBOOK STRIP ── */}
      <section style={{ padding: "100px 0 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", marginBottom: 32 }}>
          <p className="section-label">Lookbook</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              DROP 001<br /><span style={{ color: "#4a5340" }}>IN THE FIELD</span>
            </h2>
            <button className="btn-outline" onClick={() => navigate("/lookbook")}>Full Lookbook →</button>
          </div>
        </div>
        <div style={{ display: "flex", gap: 2, overflowX: "auto", paddingBottom: 2 }}>
          {LOOKBOOK.map((item) => (
            <div key={item.id} style={{
              flexShrink: 0,
              width: item.aspect === "landscape" ? 480 : item.aspect === "portrait" ? 280 : 320,
              height: 380,
              background: "#1a1a14",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <div style={{ textAlign: "center", padding: 24 }}>
                <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 13, color: "rgba(74,83,64,0.5)", letterSpacing: "0.2em", marginBottom: 8 }}>SOLDIAS</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.2)", letterSpacing: "0.2em" }}>{item.caption}</p>
              </div>
              <div style={{ position: "absolute", bottom: 16, left: 16, fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.35)", letterSpacing: "0.15em" }}>
                {String(item.id).padStart(2, "0")} / {String(LOOKBOOK.length).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <EmailCapture />
      <Footer />
    </div>
  );
}