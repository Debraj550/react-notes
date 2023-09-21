import React, { useState } from "react";
import logofull from "../assets/logofull.png";
import { Link } from "react-router-dom";
import About from "./About";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logofull}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button onClick={handleLogin}>
              {isLoggedin ? "logout" : "login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
