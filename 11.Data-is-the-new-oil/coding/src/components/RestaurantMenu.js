import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(false);

  const restroInfo = resinfo?.data?.cards?.[0]?.card?.card?.info;
  const offers =
    resinfo?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const foodSectionCards =
    resinfo?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resinfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = () => {
    setShowItems(!showItems);
  };

  console.log(foodSectionCards);
  console.log(showItems);
  return (
    <div className="text-center p-2 m-6 text-2xl font-bold">
      <h1 className="mb-4">{restroInfo?.name}</h1>
      {foodSectionCards?.map((list, idx) => {
        return (
          <div key={idx}>
            <div
              className="bg-gray-100 px-2 py-1 my-2 w-6/12 m-auto rounded-lg cursor-pointer"
              onClick={() => handleClick()}
            >
              <div className="flex justify-between">
                <span className="font-bold text-lg">
                  {list?.card?.card?.title} - (
                  {list?.card?.card?.itemCards?.length})
                </span>
                <span>⬇️</span>
              </div>
              <div className="text-left">
                {showItems && <ItemList items={list?.card?.card?.itemCards} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
