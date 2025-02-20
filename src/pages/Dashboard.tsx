import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { css } from "@emotion/react";

const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div >
      <h2  >Dashboard</h2>
      <p >Welcome to the protected dashboard!</p>
      
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
