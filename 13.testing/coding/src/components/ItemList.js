import React from "react";
import { CDN_URL } from "../utils/constants";
import noimage from "../assets/noimage.jpeg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
      totalPrice: (item.card.info.price || item.card.info.defaultPrice) / 100,
    };
    dispatch(addItem(newItem));
  };
  return (
    <div className=" overflow-y-scroll cursor-default">
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="flex border-b-2">
            <div className="w-9/12 m-4">
              <div className="font-semibold text-lg">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm">
                ₹
                {parseFloat(item?.card?.info?.price / 100).toFixed(2) ||
                  parseFloat(item?.card?.info?.defaultPrice / 100).toFixed(2)}
              </div>
              <p className="text-sm text-gray-600 font-normal">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-4/12 relative items-center px-4">
              <img
                className="rounded-lg my-2"
                src={
                  item.card.info.imageId
                    ? CDN_URL + item?.card?.info?.imageId
                    : noimage
                }
              ></img>
              <button
                onClick={() => handleAddItem(item)}
                className="border-1 bottom-0 transition-all mb-2 hover:bg-gray-950
                 bg-gray-800 text-white px-3 py-1 text-sm font-extrabold border-2 border-gray-700 rounded-lg w-full"
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
