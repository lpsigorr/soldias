import { useState } from "react";

export default function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(240,236,226,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "20px 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span style={{
          fontFamily: "'Barlow Condensed'", fontWeight: 700,
          fontSize: 15, letterSpacing: "0.05em", textAlign: "left",
        }}>
          {faq.q.toUpperCase()}
        </span>
        <span style={{
          color: "#4a5340", fontSize: 18, flexShrink: 0, marginLeft: 16,
          transition: "transform 0.2s",
          transform: open ? "rotate(45deg)" : "none",
        }}>
          +
        </span>
      </button>

      {open && (
        <div style={{ paddingBottom: 20, animation: "fadeUp 0.2s ease" }}>
          <p style={{ fontSize: 13, color: "rgba(240,236,226,0.55)", lineHeight: 1.8 }}>{faq.a}</p>
        </div>
      )}
    </div>
  );
}