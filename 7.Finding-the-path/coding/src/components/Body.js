import React, { useEffect, useState } from "react";
import { restaurantList } from "../data/data";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchData = allRestaurants.filter((res) =>
      res.data.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(searchData);
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();

    // let x =
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    // let temp = [];
    // if (x) {
    //   x.map((res) => temp.push(res.info));
    // }
    // console.log(temp);
    // setAllRestaurants(temp);
    // setFilteredRestaurants(temp);
  };

  const handleToprated = () => {
    let tempData = allRestaurants.filter((res) => res.data.avgRating > 4);
    setFilteredRestaurants(tempData);
  };

  const handleAll = () => {
    setSearch("");
    setFilteredRestaurants(allRestaurants);
  };

  return (
    <div className="body">
      <div className="fliter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="all-btn" onClick={handleAll}>
          All Restaurants
        </button>
        <button className="filter-btn" onClick={handleToprated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="res-card-links"
              to={"restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
