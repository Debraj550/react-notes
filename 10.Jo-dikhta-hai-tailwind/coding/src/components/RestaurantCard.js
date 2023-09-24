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
    <div className="px-2 py-2 w-[350px]">
      <img className="rounded-lg mb-2" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-serif font-bold text-xl mb-2">{name}</h3>
      <h4 className="italic mb-2 text-md font-bold flex flex-wrap overflow-x-clip">
        {cuisines?.toString()}
      </h4>
      <h4 className="font-bold my-1">{area}</h4>
      <span>
        <h4 className="my-1">
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4 className="my-1">{lastMileTravelString}</h4>
        <h4 className="my-1">{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
