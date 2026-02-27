import { useRouter } from "../context/RouterContext";

export default function NotFound() {
  const { navigate } = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: 24, textAlign: "center",
    }}>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#4a5340", letterSpacing: "0.3em", marginBottom: 24 }}>
        ERROR 404
      </p>
      <h1 style={{ fontSize: "clamp(80px, 15vw, 200px)", lineHeight: 0.85, marginBottom: 24 }}>
        LOST<span style={{ color: "#4a5340" }}>.</span>
      </h1>
      <p style={{ fontSize: 15, color: "rgba(240,236,226,0.4)", maxWidth: 400, lineHeight: 1.8, marginBottom: 40 }}>
        This is Phase I. No map. Only belief. But the page you're looking for isn't here.
      </p>
      <button className="btn-primary" onClick={() => navigate("/")}>Back to Home →</button>
    </div>
  );
}