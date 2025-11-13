import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const navStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "1rem 2rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)"
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease"
  };

  const linksStyle = {
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  };

  const linkStyle = (isActive) => ({
    color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    background: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
    boxShadow: isActive ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "none",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  });

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          🚀 Rick & Morty
        </Link>
        
        <div style={linksStyle}>
          <Link 
            to="/" 
            style={linkStyle(location.pathname === '/')}
          >
            🏠 Home
          </Link>
          <Link 
            to="/about" 
            style={linkStyle(location.pathname === '/about')}
          >
            ℹ️ About
          </Link>
          <Link 
            to="/items" 
            style={linkStyle(location.pathname === '/items')}
          >
            👥 Characters
          </Link>
          <Link 
            to="/login" 
            style={linkStyle(location.pathname === '/login')}
          >
            🔐 Login
          </Link>
        </div>
      </div>
    </nav>
  );
}