import React from "react";
import { CDN_URL } from "../utils/constants";
import noimage from "../assets/noimage.jpeg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const newItem = { ...item, quantity: 1 };
    dispatch(addItem(newItem));
  };
  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="flex border-b-2">
            <div className="w-9/12 m-4">
              <div className="font-semibold text-lg">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
              <p className="text-sm text-gray-600 font-normal">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 relative">
              <button
                onClick={() => handleAddItem(item)}
                className=" absolute bottom-0 bg-black text-white px-3 py-1 text-xl font-extrabold border-t-2 border-b-2 border-gray-400 rounded-lg "
              >
                +
              </button>
              <img
                className="p-1 rounded-lg"
                src={
                  item.card.info.imageId
                    ? CDN_URL + item?.card?.info?.imageId
                    : noimage
                }
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
