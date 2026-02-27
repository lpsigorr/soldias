import { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const { navigate } = useRouter();
  const { add } = useCart();
  const [hovered, setHovered] = useState(false);

  const isOOS = Object.values(product.stock).every((q) => q === 0);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Image */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "3/4",
          marginBottom: 16,
          transform: hovered ? "scale(1.01)" : "scale(1)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <ProductImage product={product} style={{ width: "100%", height: "100%" }} />

        {/* Tag badge */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          fontFamily: "'Space Mono', monospace", fontSize: 8,
          color: "#4a5340", letterSpacing: "0.2em",
          border: "1px solid rgba(74,83,64,0.4)", padding: "3px 8px",
          background: "rgba(10,10,8,0.8)",
        }}>
          {product.tag}
        </div>

        {/* OOS overlay */}
        {isOOS && (
          <div style={{
            position: "absolute", inset: 0, background: "rgba(10,10,8,0.7)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "'Barlow Condensed'", fontWeight: 900,
              fontSize: 24, letterSpacing: "0.1em", color: "rgba(240,236,226,0.5)",
            }}>
              SOLD OUT
            </span>
          </div>
        )}

        {/* Quick-add overlay */}
        {hovered && !isOOS && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "rgba(10,10,8,0.9)", padding: 16,
            animation: "fadeUp 0.2s ease",
          }}>
            <p style={{
              fontFamily: "'Space Mono', monospace", fontSize: 8,
              color: "rgba(240,236,226,0.4)", letterSpacing: "0.2em", marginBottom: 10,
            }}>
              QUICK ADD — SELECT SIZE
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (product.stock[s] > 0) add(product, s);
                  }}
                  style={{
                    padding: "6px 10px",
                    fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.1em", border: "1px solid",
                    borderColor: product.stock[s] > 0 ? "rgba(240,236,226,0.3)" : "rgba(240,236,226,0.1)",
                    color: product.stock[s] > 0 ? "#f0ece2" : "rgba(240,236,226,0.2)",
                    background: "transparent",
                    cursor: product.stock[s] > 0 ? "pointer" : "not-allowed",
                    transition: "all 0.15s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div onClick={() => navigate(`/product/${product.id}`)}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
          <h3 style={{ fontSize: 16, letterSpacing: "0.05em", fontWeight: 900 }}>{product.name}</h3>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#4a5340" }}>
            €{product.price}
          </span>
        </div>
        <p style={{
          fontSize: 12, color: "rgba(240,236,226,0.4)",
          letterSpacing: "0.1em", fontFamily: "'Space Mono', monospace",
        }}>
          {product.category.toUpperCase()}
        </p>
      </div>
    </div>
  );
}