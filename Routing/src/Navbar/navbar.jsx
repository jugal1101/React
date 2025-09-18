import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          MyApp
        </Link>

        <ul className="navbar-links">
        <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/carts">Cart</Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={logoutUser}>
          Log Out
        </button>
      </div>
    </nav>
  );
}
