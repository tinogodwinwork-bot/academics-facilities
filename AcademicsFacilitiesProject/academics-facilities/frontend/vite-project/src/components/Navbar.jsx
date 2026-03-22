import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#3b82f6" : "#fff",
    textDecoration: "none",
    fontWeight: "500"
  });

  return (
    <div className="navbar">

      {/* LOGO / NAME */}
      <h2 className="logo">Smart Campus Institute</h2>

      {/* NAV LINKS */}
<div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/academics">Academics</Link>   
  <Link to="/facilities">Facilities</Link> 
  <Link to="/contact">Contact</Link>
</div>

    </div>
  );
}

export default Navbar;