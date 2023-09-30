import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { removeItem, clearCart, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleItemRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleItemAdd = (item) => {
    dispatch(addItem(item));
  };

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
              <p className="text-gray-400">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 flex flex-col items-center">
              <div>
                <p className="font-semibold text-gray-600">
                  Rs.{" "}
                  {(item.card.info.price / 100 ||
                    item?.card?.info?.defaultPrice) * item.quantity}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <button
                  onClick={() => handleItemRemove(item)}
                  className="text-normal bg-red-500 text-white font-bold mr-1 px-3 py-1 rounded-lg transition-all hover:scale-90 "
                >
                  -
                </button>
                <button
                  onClick={() => handleItemAdd(item)}
                  className="text-normal bg-red-500 text-white font-bold ml-1 px-3 py-1 rounded-lg transition-all hover:scale-90 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-8/12 m-auto flex justify-end">
        <button
          onClick={() => handleEmptyCart()}
          className=" bg-red-500 text-white font-bold p-2 m-2 rounded-lg transition-all hover:scale-90"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
