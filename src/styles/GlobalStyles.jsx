export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,700&family=Barlow:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }

      body {
        background: #0a0a08;
        color: #f0ece2;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        overflow-x: hidden;
      }

      body::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 9999;
        opacity: 0.35;
      }

      h1, h2, h3, h4, h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      a { color: inherit; text-decoration: none; }
      button { border: none; background: none; cursor: pointer; font-family: inherit; }
      input, textarea, select { font-family: inherit; }
      img { max-width: 100%; display: block; }

      ::selection { background: #4a5340; color: #f0ece2; }
      ::-webkit-scrollbar { width: 3px; height: 3px; }
      ::-webkit-scrollbar-track { background: #0a0a08; }
      ::-webkit-scrollbar-thumb { background: #4a5340; }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.4; }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes cartSlide {
        from { transform: translateX(100%); }
        to   { transform: translateX(0); }
      }
      @keyframes overlayFade {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes countPulse {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.3); }
        100% { transform: scale(1); }
      }

      .fade-up    { animation: fadeUp  0.7s ease forwards; }
      .fade-in    { animation: fadeIn  0.5s ease forwards; }
      .page-enter { animation: fadeUp  0.5s ease forwards; }

      .stamp {
        display: inline-block;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        border: 2px solid currentColor;
        padding: 2px 8px;
        font-size: 10px;
        opacity: 0.7;
      }

      .btn-primary {
        display: inline-flex; align-items: center; gap: 8px;
        background: #4a5340; color: #f0ece2;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700; font-size: 13px;
        letter-spacing: 0.12em; text-transform: uppercase;
        padding: 13px 28px; border: 1px solid #4a5340;
        cursor: pointer; transition: all 0.2s;
      }
      .btn-primary:hover { background: #6b7560; border-color: #6b7560; }

      .btn-outline {
        display: inline-flex; align-items: center; gap: 8px;
        background: transparent; color: #f0ece2;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700; font-size: 13px;
        letter-spacing: 0.12em; text-transform: uppercase;
        padding: 12px 28px; border: 1px solid rgba(240,236,226,0.4);
        cursor: pointer; transition: all 0.2s;
      }
      .btn-outline:hover { border-color: #f0ece2; }

      .btn-army-outline {
        display: inline-flex; align-items: center; gap: 8px;
        background: transparent; color: #4a5340;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700; font-size: 13px;
        letter-spacing: 0.12em; text-transform: uppercase;
        padding: 12px 28px; border: 1px solid #4a5340;
        cursor: pointer; transition: all 0.2s;
      }
      .btn-army-outline:hover { background: #4a5340; color: #f0ece2; }

      .section-label {
        font-family: 'Space Mono', monospace;
        font-size: 9px; letter-spacing: 0.3em;
        text-transform: uppercase; color: #4a5340;
        margin-bottom: 16px;
      }

      .divider { height: 1px; background: rgba(240,236,226,0.08); margin: 0; }

      @media (max-width: 768px) {
        h1 { font-size: clamp(56px, 15vw, 120px); }
        .desktop-nav { display: none !important; }
        .mobile-menu-btn { display: flex !important; }
      }
    `}</style>
  );
}