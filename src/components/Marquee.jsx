export default function Marquee({
  text = "ENDURE & PUSH — SOLDIAS — FORGED THROUGH PRESSURE — BUILT FOR THE ONES WHO KEEP GOING — DROP 001 — ",
}) {
  const doubled = text + text;
  return (
    <div style={{ overflow: "hidden", background: "#4a5340", padding: "10px 0", whiteSpace: "nowrap" }}>
      <div style={{ display: "inline-block", animation: "marquee 28s linear infinite" }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700, fontSize: 11,
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: "#f0ece2",
        }}>
          {doubled}{doubled}
        </span>
      </div>
    </div>
  );
}