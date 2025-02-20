import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

import '../../Css/Header.scss'

const Header: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
    
      <button className="logo" onClick={() => navigate("/")}>
       MyApp
      </button>

  
      <nav className="nav">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/resources")}>Resources</button>
      </nav>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
