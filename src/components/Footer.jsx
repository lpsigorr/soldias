import { useState } from "react";
import { useRouter } from "../context/RouterContext";

export default function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer style={{ background: "#050503", borderTop: "1px solid rgba(240,236,226,0.06)", paddingTop: 64 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(240,236,226,0.06)",
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 32, letterSpacing: "0.1em", marginBottom: 12 }}>SOLDIAS</h3>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.25em", color: "#4a5340", marginBottom: 16 }}>ENDURE & PUSH</p>
            <p style={{ fontSize: 13, color: "rgba(240,236,226,0.4)", lineHeight: 1.7, maxWidth: 260 }}>
              Forged through pressure. Built for the ones who keep going.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Shop</p>
            {["All Products", "Current Drop", "Tops", "Bottoms", "Accessories"].map((l) => (
              <button key={l} onClick={() => navigate("/shop")} style={{
                display: "block", fontSize: 13, color: "rgba(240,236,226,0.5)",
                marginBottom: 10, cursor: "pointer",
                fontFamily: "'Barlow Condensed'", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
                transition: "color 0.2s",
              }}>
                {l}
              </button>
            ))}
          </div>

          {/* Brand links */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Brand</p>
            {[
              ["Doctrine",  "/doctrine"],
              ["Lookbook",  "/lookbook"],
              ["Community", "/community"],
              ["About",     "/about"],
              ["Contact",   "/contact"],
            ].map(([l, h]) => (
              <button key={l} onClick={() => navigate(h)} style={{
                display: "block", fontSize: 13, color: "rgba(240,236,226,0.5)",
                marginBottom: 10, cursor: "pointer",
                fontFamily: "'Barlow Condensed'", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
                transition: "color 0.2s",
              }}>
                {l}
              </button>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Join the Doctrine</p>
            <p style={{ fontSize: 13, color: "rgba(240,236,226,0.4)", marginBottom: 20, lineHeight: 1.6 }}>
              Early access. Drop alerts. Private releases.
            </p>
            {subscribed ? (
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#4a5340", letterSpacing: "0.15em" }}>
                REGISTERED. STAY READY.
              </p>
            ) : (
              <form onSubmit={handleSub} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: "#0f0f0c",
                    border: "1px solid rgba(240,236,226,0.1)",
                    color: "#f0ece2", padding: "10px 14px", fontSize: 13,
                    outline: "none", fontFamily: "'Barlow', sans-serif",
                  }}
                />
                <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>JOIN →</button>
              </form>
            )}
          </div>
        </div>

        <div style={{
          padding: "24px 0", display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.2)", letterSpacing: "0.2em" }}>
            © 2025 SOLDIAS. ALL RIGHTS RESERVED.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[["Shipping", "/policies"], ["Returns", "/policies"], ["Privacy", "/policies"], ["Terms", "/policies"]].map(([l, h]) => (
              <button key={l} onClick={() => navigate(h)} style={{
                fontFamily: "'Space Mono', monospace", fontSize: 9,
                color: "rgba(240,236,226,0.25)", letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s",
              }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}