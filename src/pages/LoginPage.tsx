import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import "../Css/LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "user@gmail.com" && password === "123") {
      setUser(email); // Set user in auth store
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-center h-screen">
      <div className="login-card">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 input-field"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
