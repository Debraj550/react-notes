import React, { useEffect, useState } from "react";
import { restaurantList } from "../data/data";
import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const PromotedCard = PromotedRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchData = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(searchData);
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data?.json();
    const resDataList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(json);
    setAllRestaurants(resDataList);
    setFilteredRestaurants(resDataList);
  };

  const handleToprated = () => {
    let tempData = allRestaurants?.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(tempData);
  };

  const handleAll = () => {
    setSearch("");
    setFilteredRestaurants(allRestaurants);
  };

  return (
    <div className="body">
      <div className="flex justify-between my-6 mx-12">
        <div>
          <button
            className="transition-all px-4 mx-2 my-2 py-1 bg-red-300 hover:bg-red-400 hover:scale-105  rounded-lg"
            onClick={handleAll}
          >
            {" "}
            All Restaurants
          </button>
          <button
            className="transition-all px-4 mx-2 my-2 py-1 bg-red-300 hover:bg-red-400 hover:scale-105  rounded-lg"
            onClick={handleToprated}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="px-4 my-2">
          <input
            placeholder="Search a restaurant"
            type="text"
            className="px-1 border border-gray-400 w-[400px] py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          ></input>
          <button
            className="ml-2 px-4 py-1 bg-green-300 rounded-md transition-transform hover:scale-105 hover:bg-green-400 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant, idx) => {
          return (
            <Link
              className="transition-transform hover:scale-[0.97] my-2 mx-2 bg-gray-200 hover:bg-gray-300 "
              to={"restaurants/" + restaurant.info?.id}
              key={idx}
            >
              {restaurant.data?.promoted ? (
                <PromotedCard {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
