import React, { useState } from "react";
import { restaurantList } from "../data/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([...restaurantList]);

  const handleToprated = () => {
    let tempData = [...allRestaurants];
    tempData = tempData.filter((res) => res.data.avgRating > 4);
    setAllRestaurants(tempData);
  };

  const handleAll = () => {
    setAllRestaurants([...restaurantList]);
  };

  return (
    <div className="body">
      <div className="fliter">
        <button className="all-btn" onClick={handleAll}>
          All Restaurants
        </button>
        <button className="filter-btn" onClick={handleToprated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {allRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
