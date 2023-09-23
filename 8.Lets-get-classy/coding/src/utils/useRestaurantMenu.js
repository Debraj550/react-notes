import { useEffect, useState } from "react";
import { restaurantList } from "../data/data";

const useRestaurantMenu = (resId) => {
  const [resdata, setResdata] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = () => {
    let data = restaurantList.filter((res) => res.data.id === resId);
    data = data[0].data;
    console.log(data);
    setResdata(data);
  };

  return resdata;
};

export default useRestaurantMenu;
