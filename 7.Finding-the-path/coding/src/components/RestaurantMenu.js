import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {};

  return (
    <div className="res-menu">
      <h1>Name of the restaurant</h1>
      <h2>menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Coffee</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
