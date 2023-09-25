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
    <div className="px-2 py-2 w-[300px] gap-1 items-center">
      <div>
        <img className="rounded-lg mb-2" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div>
        <h3 className="font-serif font-bold text-lg">{name}</h3>
      </div>

      <div>
        <h4 className="text-gray-500 text-md  flex flex-wrap overflow-x-clip">
          {cuisines?.toString()}
        </h4>
      </div>
      <div>
        <h4 className="text-gray-500 ">{area}</h4>
      </div>
      <div className="flex gap-4">
        <h5 className="text-md">
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h5>
        <h5 className="">{lastMileTravelString}</h5>
        <h5 className="">{costForTwoString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
