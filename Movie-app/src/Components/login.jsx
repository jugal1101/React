import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setIsLoggedIn, setUsername }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (name.trim() === "") {
      alert("Please enter your name!");
    } else {
      setIsLoggedIn(true);
      setUsername(name);
      localStorage.setItem("username", name); 
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome back</h2>
        <p className="login-subtitle">Please enter your name to continue</p>

        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-input"
        />

        <button type="button" className="login-button" onClick={handleClick}>
          ➝
        </button>
      </div>
    </div>
  );
}
