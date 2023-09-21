import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../data/data";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resinfo, setResinfo] = useState(null);
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(resinfo);

  const fetchMenu = () => {
    let data = restaurantList.filter((res) => res.data.id === resId);
    data = data[0].data;
    setResinfo(data);
  };

  return (
    <div className="res-menu">
      <h1>{resinfo?.name}</h1>
      <h2>menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Coffee</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
