import React from "react";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="my-4">
            <div className="font-semibold text-lg">
              {item?.card?.info?.name}
            </div>
            <div className="text-sm">₹{item?.card?.info?.price / 100}.00</div>
            <p className="text-sm text-gray-500 font-normal">
              {item?.card?.info?.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
