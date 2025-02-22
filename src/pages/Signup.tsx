import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/LoginPage.scss";

const SignupPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter valid details.");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
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
          <button type="submit" className="login-button">Signup</button>
        </form>
        <p className="text-button" onClick={() => navigate("/login")}>
          Already have an account? Login here
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
