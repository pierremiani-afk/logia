export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>LOGIA</h1>
        <p>Le moteur est démarré.</p>
      </div>
    </main>
  );
}
