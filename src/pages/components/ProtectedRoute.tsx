import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAuthStore((state) => state.user) || localStorage.getItem("authToken");
  return user ? children : <Navigate to="/login" />;
};


export default ProtectedRoute;
