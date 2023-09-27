import { useEffect, useState } from "react";
import { restaurantList } from "../data/data";
import { RESTAURANTS_DETAIL_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resdata, setResdata] = useState([]);
  const url = RESTAURANTS_DETAIL_URL + resId;

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetchData(url);
      const restroInfo = data?.data?.cards?.[0]?.card?.card?.info;
      console.log(data);
      const offers =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
      const foodSectionCards =
        data?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    } catch (err) {
      console.log(err);
    }
  };

  return resdata;
};

export default useRestaurantMenu;
