import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.items); // Use the selector function
  console.log(cartData);
  return (
    <div>
      <h2 className="flex justify-center p-4 m-4 font-bold text-2xl">Cart</h2>
      <div className="bg-white-300">
        {cartData.map((item, idx) => (
          <div
            className="bg-slate-50 rounded-lg border-b-2 mb-4 p-4  w-8/12 m-auto flex items-center justify-between"
            key={idx}
          >
            <div className="">
              <img
                className="w-40 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
            <div className="m-6 w-full text-left">
              <h1 className="font-semibold">{item.card.info.name}</h1>
              <p>{item.card.info.description}</p>
              <p className="text-gray-400">
                Rs. {item.card.info.price / 100}.00
              </p>
            </div>
            <div>
              <button className="text-normal bg-red-500 text-white font-bold px-5 py-2 rounded-lg transition-all hover:scale-90 ">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
