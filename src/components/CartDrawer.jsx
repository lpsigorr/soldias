import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";

export default function CartDrawer() {
  const { items, remove, update, total, count, open, setOpen } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1100,
          animation: "overlayFade 0.2s ease",
        }}
      />

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(420px, 100vw)",
        background: "#0f0f0c",
        borderLeft: "1px solid rgba(240,236,226,0.08)",
        zIndex: 1101,
        display: "flex", flexDirection: "column",
        animation: "cartSlide 0.3s ease",
      }}>
        {/* Header */}
        <div style={{
          padding: "24px", borderBottom: "1px solid rgba(240,236,226,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 22, letterSpacing: "0.05em" }}>
              YOUR CART
            </h3>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.2em" }}>
              {count} ITEM{count !== 1 ? "S" : ""}
            </span>
          </div>
          <button onClick={() => setOpen(false)} style={{ color: "rgba(240,236,226,0.5)", cursor: "pointer" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 24px", color: "rgba(240,236,226,0.3)" }}>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 18, letterSpacing: "0.1em", marginBottom: 8 }}>
                NOTHING YET
              </p>
              <p style={{ fontSize: 13 }}>Go find something worth wearing.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} style={{
                display: "flex", gap: 16, padding: "16px 0",
                borderBottom: "1px solid rgba(240,236,226,0.06)",
              }}>
                <ProductImage product={item.product} style={{ width: 70, height: 80, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>
                      {item.product.name}
                    </span>
                    <button onClick={() => remove(item.key)} style={{ color: "rgba(240,236,226,0.3)", cursor: "pointer", flexShrink: 0, marginLeft: 8 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(240,236,226,0.4)", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 12 }}>
                    SIZE: {item.size}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(240,236,226,0.1)" }}>
                      <button onClick={() => update(item.key, item.qty - 1)} style={{ width: 28, height: 28, color: "rgba(240,236,226,0.6)", cursor: "pointer", fontSize: 16 }}>−</button>
                      <span style={{ width: 28, textAlign: "center", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>{item.qty}</span>
                      <button onClick={() => update(item.key, item.qty + 1)} style={{ width: 28, height: 28, color: "rgba(240,236,226,0.6)", cursor: "pointer", fontSize: 16 }}>+</button>
                    </div>
                    <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 16 }}>
                      €{(item.product.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "24px", borderTop: "1px solid rgba(240,236,226,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "rgba(240,236,226,0.5)", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>SUBTOTAL</span>
              <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 22 }}>€{total.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: 11, color: "rgba(240,236,226,0.3)", marginBottom: 20, fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}>
              Shipping calculated at checkout
            </p>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 14, padding: "16px" }}>
              PROCEED TO CHECKOUT →
            </button>
            <p style={{ textAlign: "center", fontSize: 10, color: "rgba(240,236,226,0.25)", marginTop: 12, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
              CHECKOUT COMING SOON
            </p>
          </div>
        )}
      </div>
    </>
  );
}