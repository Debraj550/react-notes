import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-indigo-950 mt-7 text-white">
      <div className="w-6/12 m-auto text-center">
        <h1 className="text-4xl pt-6 pb-1 font-semibold">Fake Swiggy</h1>
        <p className="text-gray-400 text-xl font-bold">
          {" "}
          (Educational Project - React, Redux, Tailwind)
        </p>
      </div>

      <div className="w-9/12 m-auto flex justify-between">
        <h1> Created By</h1>
        <Link to="https://www.linkedin.com/in/debraj1234/" className="m-2 p-2">
          Debraj Dhar
        </Link>
        <i className="fa-solid fa-copyright m-2 p-2">2023</i>
      </div>
    </div>
  );
};

export default Footer;
