import { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { useCart } from "../context/CartContext";

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/shop",      label: "Shop"      },
  { href: "/drops",     label: "Drops"     },
  { href: "/doctrine",  label: "Doctrine"  },
  { href: "/lookbook",  label: "Lookbook"  },
  { href: "/community", label: "Community" },
];

export default function Nav() {
  const { navigate, path } = useRouter();
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (href) => { navigate(href); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(10,10,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(240,236,226,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto", padding: "0 24px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <button onClick={() => go("/")} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, cursor: "pointer" }}>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#f0ece2", lineHeight: 1,
            }}>SOLDIAS</span>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: 7,
              letterSpacing: "0.35em", color: "#4a5340", lineHeight: 1, marginTop: 2,
            }}>ENDURE & PUSH</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                color: path === l.href ? "#4a5340" : "rgba(240,236,226,0.65)",
                transition: "color 0.2s", cursor: "pointer",
              }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => setOpen(true)} style={{ position: "relative", color: "#f0ece2", cursor: "pointer" }}>
              <CartIcon />
              {count > 0 && (
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  background: "#4a5340", color: "#f0ece2",
                  borderRadius: "50%", width: 16, height: 16, fontSize: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Space Mono', monospace",
                  animation: "countPulse 0.3s ease",
                }}>
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: "none", color: "#f0ece2", cursor: "pointer" }}
              className="mobile-menu-btn"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "#0a0a08", zIndex: 999,
          display: "flex", flexDirection: "column", padding: "80px 32px 32px",
          animation: "fadeIn 0.2s ease",
        }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 48, letterSpacing: "-0.02em", textTransform: "uppercase",
              color: path === l.href ? "#4a5340" : "#f0ece2",
              textAlign: "left",
              borderBottom: "1px solid rgba(240,236,226,0.06)",
              padding: "16px 0", cursor: "pointer",
            }}>
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: "auto", display: "flex", gap: 24 }}>
            <button onClick={() => go("/about")} style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: "rgba(240,236,226,0.4)", textTransform: "uppercase", cursor: "pointer" }}>About</button>
            <button onClick={() => go("/contact")} style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: "rgba(240,236,226,0.4)", textTransform: "uppercase", cursor: "pointer" }}>Contact</button>
          </div>
        </div>
      )}
    </>
  );
}