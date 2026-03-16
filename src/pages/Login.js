// src/pages/Login.js

import { useState } from "react";
import { auth, db } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { useNavigate, useLocation } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (isLogin) {
        // 🔐 LOGIN
        await signInWithEmailAndPassword(auth, email, password);

        setIsLoggedIn(true);
        alert("Login Successful ✅");

        navigate(from, { replace: true });

      } else {
        // 🆕 SIGNUP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // Save user in Firestore
        await setDoc(doc(db, "users", user.uid), {
          email,
          createdAt: new Date()
        });

        setIsLoggedIn(true);
        alert("Signup Successful 🎉");

        navigate(from, { replace: true });
      }

    } catch (error) {
      console.log(error);

      if (error.code === "auth/user-not-found") {
        alert("No account found. Please signup.");
      } 
      else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      }  
      else if (error.code === "auth/email-already-in-use") {
        alert("Account Created Successfully!!. Please login.");
      } 
      else if (error.code === "auth/invalid-email") {
        alert("Invalid email format");
      } 
      else if (error.code === "auth/weak-password") {
        alert("Password must be at least 6 characters");
      } 
      else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

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

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Signup"}
      </button>

      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{ cursor: "pointer", color: "#14a0ca" }}
      >
        {isLogin
          ? "New user? Signup"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default Login;