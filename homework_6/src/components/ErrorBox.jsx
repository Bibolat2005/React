export default function ErrorBox({ message }) {
    const errorStyle = {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
      color: "white",
      padding: "1.5rem 2rem",
      borderRadius: "16px",
      margin: "2rem auto",
      maxWidth: "600px",
      boxShadow: "0 10px 30px rgba(255, 107, 107, 0.3)",
      borderLeft: "5px solid rgba(255, 255, 255, 0.3)",
      animation: "shake 0.5s ease-in-out"
    };
  
    const iconStyle = {
      fontSize: "2.5rem",
      filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))"
    };
  
    const contentStyle = {
      flex: 1
    };
  
    const titleStyle = {
      margin: "0 0 0.5rem 0",
      fontSize: "1.3rem",
      fontWeight: "600",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
    };
  
    const messageStyle = {
      margin: 0,
      opacity: 0.9,
      lineHeight: 1.5,
      fontSize: "1rem"
    };
  
    const keyframes = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
    `;
  
    return (
      <>
        <style>{keyframes}</style>
        <div style={errorStyle}>
          <div style={iconStyle}>⚠️</div>
          <div style={contentStyle}>
            <h3 style={titleStyle}>Oops! Something went wrong</h3>
            <p style={messageStyle}>{message}</p>
          </div>
        </div>
      </>
    );
  }