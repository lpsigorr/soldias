import { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/data";
import ProductImage from "../components/ProductImage";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(240,236,226,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
      >
        <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em" }}>
          {title.toUpperCase()}
        </span>
        <span style={{ color: "#4a5340", fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 20, animation: "fadeUp 0.2s ease" }}>
          {content.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 13, color: "rgba(240,236,226,0.55)", lineHeight: 1.8, marginBottom: 12 }}>{para}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail({ id }) {
  const { navigate } = useRouter();
  const { add } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);

  const [size, setSize] = useState(null);
  const [mainImg, setMainImg] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div style={{ paddingTop: 140, textAlign: "center" }}>
        <p>Product not found. <button onClick={() => navigate("/shop")} style={{ color: "#4a5340", textDecoration: "underline", cursor: "pointer" }}>Back to shop</button></p>
      </div>
    );
  }

  const handleAdd = () => {
    if (!size) return;
    add(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 24px 0", display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => navigate("/shop")} style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", cursor: "pointer", letterSpacing: "0.15em" }}>SHOP</button>
        <span style={{ color: "rgba(240,236,226,0.2)", fontSize: 9 }}>/</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.15em" }}>{product.name}</span>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Images */}
          <div>
            <div style={{ aspectRatio: "4/5", marginBottom: 12, overflow: "hidden" }}>
              <ProductImage product={product} style={{ width: "100%", height: "100%" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} onClick={() => setMainImg(i)} style={{
                  width: 80, height: 80, cursor: "pointer",
                  border: "1px solid",
                  borderColor: mainImg === i ? "#4a5340" : "rgba(240,236,226,0.08)",
                  overflow: "hidden",
                }}>
                  <ProductImage product={product} style={{ width: "100%", height: "100%" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div className="stamp" style={{ color: "#4a5340" }}>{product.tag}</div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.15em" }}>
                {product.category.toUpperCase()}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: 8, lineHeight: 0.92 }}>{product.name}</h1>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, color: "#4a5340", marginBottom: 32, fontWeight: 700 }}>€{product.price}.00</p>
            <p style={{ fontSize: 14, color: "rgba(240,236,226,0.6)", lineHeight: 1.8, marginBottom: 40 }}>{product.description}</p>

            {/* Size selector */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 12, letterSpacing: "0.12em" }}>SELECT SIZE</p>
                <button style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.1em", cursor: "pointer" }}>SIZE GUIDE</button>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {product.sizes.map((s) => {
                  const inStock = product.stock[s] > 0;
                  return (
                    <button key={s} onClick={() => inStock && setSize(s)} style={{
                      width: 52, height: 52, border: "1px solid",
                      borderColor: size === s ? "#f0ece2" : inStock ? "rgba(240,236,226,0.2)" : "rgba(240,236,226,0.08)",
                      background: size === s ? "#f0ece2" : "transparent",
                      color: size === s ? "#0a0a08" : inStock ? "#f0ece2" : "rgba(240,236,226,0.2)",
                      fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em",
                      cursor: inStock ? "pointer" : "not-allowed", transition: "all 0.15s",
                      position: "relative",
                    }}>
                      {s}
                      {!inStock && (
                        <div style={{
                          position: "absolute", top: "50%", left: 0, right: 0,
                          height: 1, background: "rgba(240,236,226,0.15)",
                          transform: "translateY(-50%) rotate(-45deg)",
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>
              {size && product.stock[size] <= 3 && (
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#6b7560", letterSpacing: "0.15em", marginTop: 10 }}>
                  ONLY {product.stock[size]} LEFT IN {size}
                </p>
              )}
            </div>

            {/* Add to cart */}
            <button onClick={handleAdd} disabled={!size} style={{
              width: "100%", padding: "18px",
              background: size ? (added ? "#2e3328" : "#4a5340") : "rgba(240,236,226,0.05)",
              border: "1px solid",
              borderColor: size ? "#4a5340" : "rgba(240,236,226,0.1)",
              color: size ? "#f0ece2" : "rgba(240,236,226,0.2)",
              fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 16,
              letterSpacing: "0.12em", textTransform: "uppercase",
              cursor: size ? "pointer" : "not-allowed", transition: "all 0.3s", marginBottom: 16,
            }}>
              {added ? "✓ ADDED TO CART" : size ? "ADD TO CART" : "SELECT A SIZE"}
            </button>

            {/* Accordions */}
            <div style={{ borderTop: "1px solid rgba(240,236,226,0.08)" }}>
              <Accordion title="Fit & Material" content={`${product.material}\n\n${product.fit}`} />
              <Accordion title="Shipping & Returns" content={"Free shipping on orders over €150. Standard delivery 3–7 business days in Europe, 7–14 days internationally.\n\nReturns accepted within 14 days of delivery. Items must be unworn with original tags. Start a return at our returns portal."} />
              <Accordion title="Drop Notes" content={product.dropNotes} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div style={{ marginTop: 100 }}>
            <div className="divider" style={{ marginBottom: 64 }} />
            <p className="section-label">You Might Also Like</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}