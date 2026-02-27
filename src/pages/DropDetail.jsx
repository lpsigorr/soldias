import { useRouter } from "../context/RouterContext";
import { DROPS, PRODUCTS } from "../data/data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function DropDetail({ slug }) {
  const { navigate } = useRouter();
  const drop = DROPS.find((d) => d.slug === slug);
  const products = PRODUCTS.filter((p) => drop?.products.includes(p.id));

  if (!drop) {
    return (
      <div style={{ paddingTop: 120, textAlign: "center" }}>
        <p>Drop not found. <button onClick={() => navigate("/drops")} style={{ color: "#4a5340", textDecoration: "underline", cursor: "pointer" }}>Back to drops</button></p>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div style={{
        minHeight: "60vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "80px 24px",
        background: "linear-gradient(to bottom, #0a0a08, #111208)",
        borderBottom: "1px solid rgba(74,83,64,0.2)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(74,83,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,83,64,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <button onClick={() => navigate("/drops")} style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", cursor: "pointer", letterSpacing: "0.15em" }}>
              ← ALL DROPS
            </button>
            {drop.status === "active" ? (
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "#4a5340", border: "1px solid rgba(74,83,64,0.4)", padding: "2px 10px", letterSpacing: "0.2em" }}>LIVE NOW</span>
            ) : (
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.2)", border: "1px solid rgba(240,236,226,0.1)", padding: "2px 10px", letterSpacing: "0.2em" }}>SOLD OUT</span>
            )}
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.9, marginBottom: 24 }}>{drop.title}</h1>
          <p style={{ fontSize: 15, color: "rgba(240,236,226,0.55)", maxWidth: 580, lineHeight: 1.8 }}>{drop.story}</p>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>
        {products.length > 0 ? (
          <>
            <p className="section-label" style={{ marginBottom: 40 }}>Pieces in This Drop</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
              {products.map((p) =>
                drop.status === "sold-out" ? (
                  <div key={p.id} style={{ opacity: 0.4 }}>
                    <ProductCard product={{ ...p, stock: Object.fromEntries(p.sizes.map((s) => [s, 0])) }} />
                  </div>
                ) : (
                  <ProductCard key={p.id} product={p} />
                )
              )}
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 32, color: "rgba(240,236,226,0.3)", letterSpacing: "0.1em" }}>
              NO ITEMS ON RECORD
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.2)", letterSpacing: "0.2em", marginTop: 12 }}>
              THIS DROP PREDATES THE ARCHIVE
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}