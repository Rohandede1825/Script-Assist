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
    const storedUser = localStorage.getItem("registeredUser");

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);

    if (email === storedEmail && password === storedPassword) {
      setUser(email);
      navigate("/landing");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="text-button" onClick={() => navigate("/signup")}>
          Don't have an account? Signup here
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
