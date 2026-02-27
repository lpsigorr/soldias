import { useState } from "react";
import FaqItem from "../components/FaqItem";
import Footer from "../components/Footer";

const FAQS = [
  { q: "How do drops work?",                a: "SOLDIAS releases in limited drops. Each drop is announced via newsletter first. Once a drop sells out, it does not restock. Follow us and sign up to the newsletter to stay ready." },
  { q: "Do you ship internationally?",      a: "Yes. We ship to most countries worldwide. International orders typically take 7–14 business days. Shipping costs are calculated at checkout." },
  { q: "What is your returns policy?",      a: "We accept returns within 14 days of delivery. Items must be in original, unworn condition with all tags attached. Start a return via the returns portal." },
  { q: "How do I find my size?",            a: "Each product page includes fit notes. As a general guide: SOLDIAS pieces tend to run in an oversized or structured fashion, fitting differently by product. Check the individual fit notes." },
  { q: "Can I cancel or change my order?",  a: "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters processing and cannot be changed." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Contact form */}
          <div>
            <p className="section-label">Get in Touch</p>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.88, marginBottom: 32 }}>
              CONTACT<br /><span style={{ color: "#4a5340" }}>US</span>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(240,236,226,0.45)", lineHeight: 1.8, marginBottom: 48 }}>
              For order questions, collaborations, wholesale, or press. We typically respond within 48 hours.
            </p>

            {sent ? (
              <div style={{ padding: 40, background: "#0d0d0a", border: "1px solid rgba(74,83,64,0.3)" }}>
                <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 900, fontSize: 28, color: "#4a5340", marginBottom: 8 }}>MESSAGE SENT</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.15em" }}>WE'LL GET BACK TO YOU.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "name",  label: "Name",  type: "text",  placeholder: "Your name"  },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.4)", letterSpacing: "0.2em", display: "block", marginBottom: 8 }}>
                      {label.toUpperCase()} *
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
                    MESSAGE *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                    rows={5}
                    style={{ width: "100%", background: "#0d0d0a", border: "1px solid rgba(240,236,226,0.1)", color: "#f0ece2", padding: "12px 16px", fontSize: 14, outline: "none", fontFamily: "'Barlow', sans-serif", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>SEND MESSAGE →</button>
              </form>
            )}

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(240,236,226,0.06)" }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "rgba(240,236,226,0.3)", letterSpacing: "0.2em", marginBottom: 8 }}>EMAIL</p>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 16, color: "#4a5340", letterSpacing: "0.05em" }}>hello@soldias.com</p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="section-label">FAQ</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 0.9, marginBottom: 40 }}>
              QUICK<br />ANSWERS
            </h2>
            <div>
              {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}