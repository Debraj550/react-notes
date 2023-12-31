import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines?.toString().slice(0, 40)}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla?.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
