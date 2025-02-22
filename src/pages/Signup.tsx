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
    <div className="login-container flex flex-col items-center justify-center h-screen">
      <div className="login-card">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup} className="flex flex-col space-y-3">
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
          <button type="submit" className="bg-green-500 text-white p-2 rounded login-button">
            Signup
          </button>
        </form>
        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => navigate("/login")}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
