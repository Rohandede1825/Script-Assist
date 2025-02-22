import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

import "../../Css/Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
     
      <h1 className="logo" 
        onClick={() => navigate("/landing")}
        aria-label="Go to Dashboard">
          MyApp
      </h1>
      
      <nav className="nav">
        <button onClick={() => navigate("/dashboard")} aria-label="Go to Dashboard">
          Dashboard
        </button>
        <button onClick={() => navigate("/resources")} aria-label="Go to Resources">
          Resources
        </button>
       

        
      </nav>

      {/* <button className="logout" onClick={handleLogout} aria-label="Logout">
        Logout
      </button> */}
    </header>
  );
};

export default Header;
