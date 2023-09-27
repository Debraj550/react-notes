import React from "react";
import { CDN_URL } from "../utils/constants";
import noimage from "../assets/noimage.jpeg";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="flex border-b-2 py-2">
            <div className="w-9/12 m-4">
              <div className="font-semibold text-lg">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm">₹{item?.card?.info?.price / 100}.00</div>
              <p className="text-sm text-gray-500 font-normal">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12">
              <img
                className="p-1"
                src={
                  CDN_URL + item?.card?.info?.imageId
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
