import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  const [openCardIdx, setOpenCardIdx] = useState(0);

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

  const handleClick = (idx) => {
    if (openCardIdx === idx) {
      setOpenCardIdx(null);
    } else {
      setOpenCardIdx(idx);
    }
  };

  console.log(foodSectionCards);

  return (
    <div className="text-center p-2 m-6 text-2xl font-bold">
      <h1 className="mb-4">{restroInfo?.name}</h1>
      {foodSectionCards?.map((list, idx) => {
        return (
          <div key={idx}>
            <div
              className="bg-white px-2 py-1 my-2 w-6/12 m-auto rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleClick(idx)}
            >
              <div className="flex justify-between border-b-2 border-gray-300">
                <span className="font-bold text-lg">
                  {list?.card?.card?.title} (
                  {list?.card?.card?.itemCards?.length})
                </span>
                {openCardIdx === idx ? (
                  <span className="text-lg">⬆️</span>
                ) : (
                  <span className="text-lg">⬇️</span>
                )}
              </div>
              <div
                className={`text-left bg-gray-50 mb-3 overflow-hidden ${
                  openCardIdx === idx
                    ? "max-h-screen transition-all duration-1000 ease-in-out"
                    : "max-h-0 transition-all duration-1000 ease-in-out"
                }`}
              >
                {openCardIdx === idx && (
                  <ItemList items={list?.card?.card?.itemCards} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
