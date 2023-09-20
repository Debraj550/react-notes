import React, { useState } from "react";
import logofull from "../assets/logofull.png";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
