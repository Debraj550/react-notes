import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);
  console.log(resinfo);
  return (
    <div className="res-menu">
      <h1>{resinfo?.name}</h1>
      <h2>menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Coffee</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
