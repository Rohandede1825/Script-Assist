import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Css/Header.scss'

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Logo */}
      <button className="logo" onClick={() => navigate("/")}>
        🌟 MyApp
      </button>

      {/* Navigation Buttons */}
      <nav className="nav">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/resources")}>Resources</button>
      </nav>

      {/* Logout Button */}
      <button className="logout" onClick={() => console.log("Logout")}>
        Logout
      </button>
    </header>
  );
};

export default Header;
