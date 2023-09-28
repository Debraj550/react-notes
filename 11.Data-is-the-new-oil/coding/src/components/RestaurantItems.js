import React from "react";

const RestaurantItems = () => {
  return (
    <div key={idx}>
      <div className="bg-white px-2 py-1 my-2 w-6/12 m-auto rounded-lg cursor-pointer">
        <div className="flex justify-between border-b-2 border-gray-300">
          <span className="font-bold text-lg">
            {list?.card?.card?.title} ({list?.card?.card?.itemCards?.length})
          </span>
          {showItems ? (
            <span className="text-lg">⬆️</span>
          ) : (
            <span className="text-lg">⬇️</span>
          )}
        </div>
        <div className="text-left bg-gray-50 mb-3">
          {showItems && <ItemList items={list?.card?.card?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantItems;
