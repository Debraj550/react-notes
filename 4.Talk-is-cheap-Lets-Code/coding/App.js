import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../coding/assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div>
      <h3>Arslan</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
