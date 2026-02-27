const PALETTE = {
  "forged-tee":       { bg: "#1a1a14", text: "#4a5340" },
  "endure-hoodie":    { bg: "#141410", text: "#5a6450" },
  "loyalty-cap":      { bg: "#181c14", text: "#4a5340" },
  "pressure-pants":   { bg: "#1c1e18", text: "#6b7560" },
  "ritual-beanie":    { bg: "#101010", text: "#4a5340" },
  "soldias-crewneck": { bg: "#161612", text: "#5a6450" },
};

export default function ProductImage({ product, style, className }) {
  const c = PALETTE[product.id] || { bg: "#1a1a14", text: "#4a5340" };

  return (
    <div
      style={{
        background: c.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        ...style,
      }}
      className={className}
    >
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(11px, 2vw, 14px)",
        letterSpacing: "0.2em",
        color: c.text,
        textTransform: "uppercase",
        textAlign: "center",
        padding: "0 16px",
        lineHeight: 1.2,
      }}>
        SOLDIAS<br />
        <span style={{ fontSize: "0.75em", letterSpacing: "0.3em", opacity: 0.6 }}>
          {product.name}
        </span>
      </span>
      <div style={{ width: 32, height: 1, background: c.text, opacity: 0.4 }} />
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 9,
        color: c.text,
        opacity: 0.5,
        letterSpacing: "0.2em",
      }}>
        DROP 001
      </span>
    </div>
  );
}