import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines?.toString().slice(0, 40)}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
