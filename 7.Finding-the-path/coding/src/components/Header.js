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
        <Link to="/">
          <img className="logo" src={logofull}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i>
              {" Home"}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i class="fa-solid fa-circle-info"></i>
              {" About"}
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <span> {" Cart"}</span>
          </li>
          <li>
            <button onClick={handleLogin}>
              <i class="fa-solid fa-right-to-bracket"></i>
              {isLoggedin ? "logout" : "login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
