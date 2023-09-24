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
    <div className="flex justify-between shadow-lg  bg-gray-100 mb-4 px-4 items-center">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-28 transition-transform	duration hover:scale-110"
            src={logofull}
          ></img>
        </Link>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:text-red-600">
            <Link to="/">
              <i className="fa-solid fa-house"></i>
              {" Home"}
            </Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/about">
              <i className="fa-solid fa-circle-info"></i>
              {" About"}
            </Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <i className="fa-solid fa-cart-shopping"></i>
            <span> {" Cart"}</span>
          </li>
          <li className="px-4">
            <button onClick={handleLogin}>
              <i className="fa-solid fa-right-to-bracket"></i>
              {isLoggedin ? "logout" : "login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
