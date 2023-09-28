import React, { useContext, useState } from "react";
import logofull from "../assets/logofull.png";
import { Link } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const { loggedinUser } = useContext(UserContext);
  const handleLogin = () => {
    setIsLoggedin((prev) => !prev);
  };

  return (
    <div className="flex justify-between shadow-lg px-4 items-center bg-gradient-to-b from-rose-300 to-rose-100 ">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-28 transition-all hover:scale-110"
            src={logofull}
          ></img>
        </Link>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110 cursor-pointer">
            <Link to="/">
              <i className="fa-solid fa-house"></i>
              {" Home"}
            </Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <Link to="/about">
              <i className="fa-solid fa-circle-info"></i>
              {" About"}
            </Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <i className="fa-solid fa-cart-shopping"></i>
            <span> {" Cart"}</span>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <button onClick={handleLogin}>
              <i className="fa-solid fa-right-to-bracket"></i>
              {isLoggedin ? " logout" : " login"}
            </button>
          </li>
          <li className="font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
