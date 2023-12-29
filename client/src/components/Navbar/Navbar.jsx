import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dark_logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const initialMode = localStorage.getItem("themeMode") || "Dark";
  document.documentElement.classList.add(initialMode);

  const [mode, setMode] = useState(initialMode);

  const toggleDarkMode = () => {
    const newMode = mode === "Dark" ? "Light" : "Dark";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  };

  useEffect(() => {
    document.documentElement.classList.remove("Dark", "Light");
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <div className="Navbar">
      <span className="set e1">
        <img src={dark_logo} alt="MASTERVANCE" />
        {/* <h1>LOGO</h1> */}
      </span>
      <span className="set e2">
        <ul>
          <li>
            <Link to="/" className="unformat-link">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="unformat-link">
              <p>Courses</p>
            </Link>
          </li>
          <li>
            <Link className="unformat-link" to="/mentor">
              <p>Mentor</p>
            </Link>
          </li>
          <li>
            <Link className="unformat-link" to="/community">
              <p>Community</p>
            </Link>
          </li>
          <li>
            <Link className="unformat-link" to="/about">
              <p>About Us</p>{" "}
            </Link>
          </li>
        </ul>
      </span>
      <span className="set e3">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <Link to="/auth">
          <button className="login-btn">LOGIN</button>
        </Link>
        <button className="apply">Apply Now</button>
      </span>
      <button className="hbm">HBM</button>
    </div>
  );
};

export default Navbar;
