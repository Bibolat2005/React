export default function Home() {
    return (
      <section style={{ 
        textAlign: "center", 
        padding: "100px 20px",
        background: "#f8f9fa",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          background: "white",
          padding: "60px 40px",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          maxWidth: "600px",
          width: "100%"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#2d3748",
            marginBottom: "20px",
            letterSpacing: "-0.5px"
          }}>
            Rick & Morty Explorer
          </h1>
          
          <p style={{
            fontSize: "1.2rem",
            color: "#4a5568",
            marginBottom: "40px",
            lineHeight: "1.6"
          }}>
            Dive into the multiverse and explore the complete collection of characters from the Rick and Morty series. 
            Browse, search, and discover detailed information about your favorite characters.
          </p>
          
          <div style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <div style={{
              padding: "12px 20px",
              background: "#4299e1",
              color: "white",
              borderRadius: "8px",
              fontWeight: "500"
            }}>
              🚀 500+ Characters
            </div>
            <div style={{
              padding: "12px 20px",
              background: "#48bb78",
              color: "white",
              borderRadius: "8px",
              fontWeight: "500"
            }}>
              🔍 Smart Search
            </div>
            <div style={{
              padding: "12px 20px",
              background: "#ed8936",
              color: "white",
              borderRadius: "8px",
              fontWeight: "500"
            }}>
              📱 Responsive
            </div>
          </div>
        </div>
      </section>
    );
  }