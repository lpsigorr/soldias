import { useState } from "react";
import Footer from "../components/Footer";

const SECTIONS = {
  shipping: {
    title: "Shipping Policy",
    content: [
      { h: "Processing Time",        p: "Orders are processed within 1–2 business days. Drop launch days may extend processing by 24 hours." },
      { h: "Domestic Shipping (EU)", p: "Standard: 3–5 business days. Express: 1–2 business days (€9.95). Free standard shipping on orders over €150." },
      { h: "International Shipping", p: "7–14 business days. International shipping starts at €14.95. Customs and import duties are the responsibility of the recipient." },
      { h: "Tracking",               p: "All orders include tracking. You will receive an email with your tracking link once your order ships." },
    ],
  },
  returns: {
    title: "Returns & Exchanges",
    content: [
      { h: "Return Window",          p: "14 days from date of delivery. Items must be in original, unworn condition with all original tags attached." },
      { h: "How to Return",          p: "Start your return via hello@soldias.com with your order number. We'll send a return label and instructions." },
      { h: "Refunds",                p: "Refunds are processed within 5–7 business days of receiving the return. Original shipping costs are non-refundable." },
      { h: "Exchanges",              p: "We do not offer direct exchanges. Place a new order for the item you want and return the original for a refund." },
      { h: "Non-Returnable Items",   p: "Sale items, accessories (beanies, caps), and items marked as final sale cannot be returned." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      { h: "Data We Collect",        p: "Name, email, shipping address, and payment details (processed securely via Stripe). We do not store payment card information." },
      { h: "How We Use Your Data",   p: "To fulfill orders, send transactional emails, and (if opted in) marketing communications. We do not sell your data." },
      { h: "Cookies",                p: "We use functional cookies to maintain your cart and session. Analytics cookies are opt-in only." },
      { h: "Your Rights",            p: "You can request access to, correction of, or deletion of your personal data at any time by contacting hello@soldias.com." },
    ],
  },
  terms: {
    title: "Terms of Service",
    content: [
      { h: "Agreement",              p: "By accessing and using soldias.com, you accept these terms. If you do not agree, do not use the site." },
      { h: "Products & Availability",p: "All products are subject to availability. We reserve the right to limit quantities, cancel orders, or discontinue products." },
      { h: "Pricing",                p: "All prices are in EUR and inclusive of VAT where applicable. We reserve the right to change prices without notice." },
      { h: "Intellectual Property",  p: "All content, branding, and imagery on soldias.com is the property of SOLDIAS. You may not reproduce or redistribute without written permission." },
      { h: "Limitation of Liability",p: "SOLDIAS is not liable for indirect, incidental, or consequential damages arising from use of our products or website." },
    ],
  },
};

const TABS = [
  { key: "shipping", label: "Shipping" },
  { key: "returns",  label: "Returns"  },
  { key: "privacy",  label: "Privacy"  },
  { key: "terms",    label: "Terms"    },
];

export default function Policies() {
  const [active, setActive] = useState("shipping");
  const section = SECTIONS[active];

  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">Legal</p>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.88, marginBottom: 60 }}>POLICIES</h1>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 0, marginBottom: 60, borderBottom: "1px solid rgba(240,236,226,0.08)" }}>
          {TABS.map(({ key, label }) => (
            <button key={key} onClick={() => setActive(key)} style={{
              fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "14px 24px", borderBottom: "2px solid",
              borderBottomColor: active === key ? "#4a5340" : "transparent",
              color: active === key ? "#f0ece2" : "rgba(240,236,226,0.4)",
              cursor: "pointer", transition: "all 0.15s", marginBottom: -1,
            }}>
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {section && (
          <div key={active} style={{ animation: "fadeUp 0.3s ease" }}>
            <h2 style={{ fontSize: 40, marginBottom: 48, color: "#4a5340" }}>{section.title.toUpperCase()}</h2>
            {section.content.map((item, i) => (
              <div key={i} style={{
                marginBottom: 40, paddingBottom: 40,
                borderBottom: i < section.content.length - 1 ? "1px solid rgba(240,236,226,0.06)" : "none",
              }}>
                <h3 style={{ fontSize: 18, marginBottom: 12, letterSpacing: "0.05em" }}>{item.h.toUpperCase()}</h3>
                <p style={{ fontSize: 14, color: "rgba(240,236,226,0.55)", lineHeight: 1.9 }}>{item.p}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}