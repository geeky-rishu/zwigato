import { useState, useEffect } from "react";
import fetchRestaurantMenu from "./fetchRestaurantMenu";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu(resId).then((data) => {
      setResData(data);
    });
  }, [resId]);

  return resData;
};

export default useRestaurantMenu;
