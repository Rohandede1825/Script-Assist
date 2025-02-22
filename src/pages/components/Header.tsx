import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

import "../../Css/Header.scss";

const Header: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Optimize logout function using useCallback
  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return (
    <header className="header">
      <button 
        className="logo" 
        onClick={() => navigate("/dashboard")}
        aria-label="Go to Dashboard"
      >
        MyApp
      </button>
      
      <nav className="nav">
        <button onClick={() => navigate("/dashboard")} aria-label="Go to Dashboard">
          Dashboard
        </button>
        <button onClick={() => navigate("/resources")} aria-label="Go to Resources">
          Resources
        </button>
      </nav>

      <button className="logout" onClick={handleLogout} aria-label="Logout">
        Logout
      </button>
    </header>
  );
};

export default Header;
