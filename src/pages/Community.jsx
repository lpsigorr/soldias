import { useState } from "react";
import { COMMUNITY_POSTS } from "../data/data";
import Footer from "../components/Footer";

export default function Community() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ handle: "", message: "", link: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.handle && form.message) setSubmitted(true);
  };

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 24px" }}>
        <p className="section-label">Community</p>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 112px)", lineHeight: 0.88, marginBottom: 16 }}>
          SOLDIAS<br /><span style={{ color: "#4a5340" }}>WALL</span>
        </h1>
        <p style={{ fontSize: 14, color: "rgba(240,236,226,0.4)", marginBottom: 80, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>
          REAL PEOPLE. REAL WEAR. REVIEWED BEFORE POSTING.
        </p>

        {/* Posts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 100 }}>
          {COMMUNITY_POSTS.map((post) => (
            <div key={post.id} style={{ background: "#0d0d0a", border: "1px solid rgba(240,236,226,0.06)", overflow: "hidden" }}>
              <div style={{ height: 240, background: "#131310", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 13, color: "rgba(74,83,64,0.4)", letterSpacing: "0.2em" }}>SOLDIAS</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(240,236,226,0.2)", letterSpacing: "0.15em", marginTop: 8 }}>{post.product}</p>
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#4a5340", letterSpacing: "0.1em", marginBottom: 12 }}>{post.handle}</p>
                <p style={{ fontSize: 13, color: "rgba(240,236,226,0.6)", lineHeight: 1.7 }}>"{post.caption}"</p>
                <div style={{ marginTop: 16 }}>
                  <span className="stamp" style={{ color: "rgba(240,236,226,0.2)", fontSize: 8 }}>{post.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission form */}
        <div style={{ maxWidth: 600, borderTop: "2px solid #4a5340", paddingTop: 60 }}>
          <p className="section-label">Submit Your Post</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 16, lineHeight: 0.92 }}>
            SHOW US<br />HOW YOU WEAR IT
          </h2>
          <p style={{ fontSize: 13, color: "rgba(240,236,226,0.4)", lineHeight: 1.7, marginBottom: 40 }}>
            All submissions are reviewed before appearing on the wall. By submitting, you confirm the image is yours to share.
          </p>

          {submitted ? (
            <div style={{ padding: 40, background: "#0d0d0a", border: "1px solid rgba(74,83,64,0.3)", textAlign: "center" }}>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 28, color: "#4a5340", letterSpacing: "0.1em", marginBottom: 8 }}>SUBMISSION RECEIVED</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.15em" }}>WE'LL REVIEW IT. STAY TUNED.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { key: "handle",  label: "Handle / Name", placeholder: "@yourhandle",                      type: "text" },
                { key: "link",    label: "Image Link (optional)", placeholder: "https://...",              type: "url"  },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.4)", letterSpacing: "0.2em", display: "block", marginBottom: 8 }}>
                    {label.toUpperCase()} {key !== "link" && "*"}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{ width: "100%", background: "#0d0d0a", border: "1px solid rgba(240,236,226,0.1)", color: "#f0ece2", padding: "12px 16px", fontSize: 14, outline: "none", fontFamily: "'Barlow', sans-serif" }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.4)", letterSpacing: "0.2em", display: "block", marginBottom: 8 }}>
                  YOUR MESSAGE *
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How do you wear it? What does it mean?"
                  rows={4}
                  style={{ width: "100%", background: "#0d0d0a", border: "1px solid rgba(240,236,226,0.1)", color: "#f0ece2", padding: "12px 16px", fontSize: 14, outline: "none", fontFamily: "'Barlow', sans-serif", resize: "vertical" }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>SUBMIT FOR REVIEW →</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}