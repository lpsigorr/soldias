import { useState } from "react";
import { PRODUCTS } from "../data/data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const CATEGORIES = ["all", "tops", "bottoms", "accessories"];
const SIZES = ["all", "S", "M", "L", "XL", "ONE SIZE"];

export default function Shop() {
  const [cat, setCat] = useState("all");
  const [sizeF, setSizeF] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);

  let filtered = PRODUCTS;
  if (cat !== "all") filtered = filtered.filter((p) => p.category === cat);
  if (sizeF !== "all") filtered = filtered.filter((p) => p.sizes.includes(sizeF));
  if (inStockOnly) filtered = filtered.filter((p) => Object.values(p.stock).some((q) => q > 0));

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 60, borderBottom: "1px solid rgba(240,236,226,0.08)", paddingBottom: 40 }}>
          <p className="section-label">Drop 001</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.9 }}>
              SHOP<br /><span style={{ color: "#4a5340" }}>ALL PIECES</span>
            </h1>
            <p style={{ fontSize: 13, color: "rgba(240,236,226,0.4)", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
              {filtered.length} ITEMS
            </p>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 32, marginBottom: 48, flexWrap: "wrap", alignItems: "center" }}>
          {/* Category */}
          <div style={{ display: "flex", gap: 8 }}>
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{
                fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 12,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "6px 16px", border: "1px solid",
                borderColor: cat === c ? "#4a5340" : "rgba(240,236,226,0.1)",
                background: cat === c ? "#4a5340" : "transparent",
                color: cat === c ? "#f0ece2" : "rgba(240,236,226,0.5)",
                cursor: "pointer", transition: "all 0.15s",
              }}>
                {c === "all" ? "ALL" : c.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Size */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {SIZES.map((s) => (
              <button key={s} onClick={() => setSizeF(s)} style={{
                fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "5px 12px", border: "1px solid",
                borderColor: sizeF === s ? "rgba(240,236,226,0.5)" : "rgba(240,236,226,0.08)",
                background: sizeF === s ? "rgba(240,236,226,0.08)" : "transparent",
                color: sizeF === s ? "#f0ece2" : "rgba(240,236,226,0.35)",
                cursor: "pointer", transition: "all 0.15s",
              }}>
                {s}
              </button>
            ))}
          </div>

          {/* In stock toggle */}
          <button onClick={() => setInStockOnly(!inStockOnly)} style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.15em",
            color: inStockOnly ? "#4a5340" : "rgba(240,236,226,0.35)", cursor: "pointer",
          }}>
            <div style={{
              width: 14, height: 14, border: "1px solid",
              borderColor: inStockOnly ? "#4a5340" : "rgba(240,236,226,0.2)",
              background: inStockOnly ? "#4a5340" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {inStockOnly && <span style={{ color: "#f0ece2", fontSize: 8 }}>✓</span>}
            </div>
            IN STOCK ONLY
          </button>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(240,236,226,0.3)" }}>
            <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 32, letterSpacing: "0.05em" }}>NO RESULTS</p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.2em", marginTop: 8 }}>TRY ADJUSTING YOUR FILTERS</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}