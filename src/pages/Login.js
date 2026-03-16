import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple validation (optional)
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ Set React state
    setIsLoggedIn(true);

    // ✅ Store login state in localStorage (IMPORTANT)
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Optional: store user info
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Redirect after login
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;