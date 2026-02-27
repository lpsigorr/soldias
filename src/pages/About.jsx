import { useRouter } from "../context/RouterContext";
import Footer from "../components/Footer";

export default function About() {
  const { navigate } = useRouter();

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">About</p>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 112px)", lineHeight: 0.88, marginBottom: 64 }}>
          WHO WE<br /><span style={{ color: "#4a5340" }}>ARE</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 80 }}>
          <p style={{ fontSize: 15, color: "rgba(240,236,226,0.6)", lineHeight: 1.9 }}>
            SOLDIAS started not as a business plan, but as a shared experience. Three people in different situations, all stuck in the same kind of pressure. The kind that doesn't announce itself — it just builds, slowly, until you either adapt or collapse.
            <br /><br />
            We adapted. We pushed. And when we came out the other side, we didn't want to make clothing that celebrated arrival — we wanted to make clothing for the people still in it.
          </p>
          <p style={{ fontSize: 15, color: "rgba(240,236,226,0.6)", lineHeight: 1.9 }}>
            Everything SOLDIAS makes is built to last, built to withstand, and built with enough restraint that it doesn't shout. It doesn't need to.
            <br /><br />
            Limited drops. No restocks. Not because scarcity is the strategy — but because we build what we stand behind, and we'd rather make less and mean it.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginBottom: 80 }}>
          {[["2025", "Founded"], ["3", "Founders"], ["1", "Drop so far"]].map(([v, l]) => (
            <div key={l} style={{ background: "#0d0d0a", padding: "40px 32px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 56, color: "#4a5340", lineHeight: 1, marginBottom: 8 }}>{v}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.2em" }}>{l.toUpperCase()}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => navigate("/doctrine")}>Read the Doctrine →</button>
          <button className="btn-outline" onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}