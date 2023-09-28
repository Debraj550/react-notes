import React from "react";
import { CDN_URL } from "../utils/constants";
import noimage from "../assets/noimage.jpeg";
const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="flex border-b-2 p-2 m-2">
            <div className="w-9/12 m-4">
              <div className="font-semibold text-lg">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm">₹{item?.card?.info?.price / 100}.00</div>
              <p className="text-sm text-gray-600 font-normal">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 ">
              <div className="absolute ">
                <button className="p-2 bg-black text-white rounded-md ml-16 mt-[76px] text-sm">
                  Add+
                </button>
              </div>
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
