import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          🚀 Rick & Morty
        </Link>

        <div className="nav-links">
          <Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
            🏠 Home
          </Link>

          <Link
            to="/about"
            className={`nav-item ${isActive("/about") ? "active" : ""}`}
          >
            ℹ️ About
          </Link>

          <Link
            to="/items"
            className={`nav-item ${isActive("/items") ? "active" : ""}`}
          >
            👥 Characters
          </Link>

          {/* If user not authorized  */}
          {!user && (
            <>
              <Link
                to="/login"
                className={`nav-item ${isActive("/login") ? "active" : ""}`}
              >
                🔐 Login
              </Link>

              <Link
                to="/signup"
                className={`nav-item ${isActive("/signup") ? "active" : ""}`}
              >
                🆕 Signup
              </Link>
            </>
          )}

          {/* If user is authorixed */}
          {user && (
            <>
              <Link
                to="/profile"
                className={`nav-item ${isActive("/profile") ? "active" : ""}`}
              >
                🙍 Profile
              </Link>

              <button className="nav-item logout-btn" onClick={logout}>
                🚪 Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}