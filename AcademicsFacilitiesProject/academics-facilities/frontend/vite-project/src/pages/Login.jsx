import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      navigate("/");
    } else {
      setCheckingAuth(false);
    }
  }, [navigate]);

  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        localStorage.setItem("isAdmin", "true");
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 1000); // simulate API delay
  };

  if (checkingAuth) return null;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>

        {/* LOGO */}
        <img src={logo} alt="logo" style={logoStyle} />

        {/* TITLE */}
        <h2 style={titleStyle}>SmartCampus Login</h2>
        <p style={subtitleStyle}>
          Smart Education Management System
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <div style={errorStyle}>
            {error}
          </div>
        )}

        {/* INPUTS */}
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            ...buttonStyle,
            opacity: loading ? 0.7 : 1
          }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}

/* 🔥 STYLES */

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0f172a"
};

const cardStyle = {
  padding: "30px",
  background: "#1e293b",
  borderRadius: "12px",
  width: "320px",
  textAlign: "center",
  boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
  animation: "fadeIn 0.5s ease"
};

const logoStyle = {
  width: "130px",
  marginBottom: "15px"
};

const titleStyle = {
  color: "#4CAF50",
  marginBottom: "5px"
};

const subtitleStyle = {
  fontSize: "12px",
  color: "#aaa",
  marginBottom: "20px"
};

const errorStyle = {
  background: "#f44336",
  color: "#fff",
  padding: "8px",
  borderRadius: "6px",
  marginBottom: "10px",
  fontSize: "12px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #444",
  background: "#0f172a",
  color: "#fff"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s"
};

export default Login;