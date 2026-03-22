import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Sidebar() {
  const location = useLocation();

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111",
        color: "#fff",
        padding: "20px",
        position: "fixed"
      }}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="SmartCampus Logo"
        style={{ width: "100%", marginBottom: "20px" }}
      />

      {/* TITLE */}
      <h2>Smart Campus Institute</h2>
      <p style={{ fontSize: "12px", color: "#aaa" }}>
        Admin Panel
      </p>

      {/* MENU */}
      <ul style={{ listStyle: "none", padding: 0 }}>

        {/* DASHBOARD */}
        <li style={{ margin: "20px 0" }}>
          <Link
            to="/dashboard"
            style={{
              color: location.pathname === "/dashboard" ? "#4CAF50" : "#fff",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            📊 Dashboard
          </Link>
        </li>

        {/* ACADEMICS */}
        <li style={{ margin: "20px 0" }}>
          <Link
            to="/academics"
            style={{
              color: location.pathname === "/academics" ? "#4CAF50" : "#fff",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            📚 Academics
          </Link>
        </li>

        {/* FACILITIES */}
        <li style={{ margin: "20px 0" }}>
          <Link
            to="/facilities"
            style={{
              color: location.pathname === "/facilities" ? "#4CAF50" : "#fff",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            🏫 Facilities
          </Link>
        </li>

        {/* ABOUT */}
        <li style={{ margin: "20px 0" }}>
          <Link
            to="/about"
            style={{
              color: location.pathname === "/about" ? "#4CAF50" : "#fff",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            ℹ️ About
          </Link>
        </li>

      </ul>

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("isAdmin");
          window.location.href = "/login";
        }}
        style={{
          marginTop: "30px",
          padding: "10px",
          width: "100%",
          border: "none",
          borderRadius: "6px",
          background: "#f44336",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;