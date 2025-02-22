import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import "../Css/LoginPage.scss";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();


  const backendUrl = "https://rentnow-backend.onrender.com/api/auth/login"; // Correct URL?

fetch(backendUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
})
  .then(response => response.json()) // Ensure the backend returns valid JSON
  .then(data => console.log("Login Success:", data))
  .catch(error => console.error("Fetch Error:", error));


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    

    try {
      const response = await axios.post("https://temp-app-backend.onrender.com/api/user/login", {
        email,
        password,
      });
      const token = response.data.token;
      login(token);
      console.log(token);
      navigate("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
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
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
