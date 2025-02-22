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
      navigate("/dashboard");
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
        <p className="mt-3 text-sm">
          Don't have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
