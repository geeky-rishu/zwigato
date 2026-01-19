import { MENU_API } from "./constants.js";

const fetchRestaurantMenu = async (resId) => {
  try {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    console.log("Menu Data fetched successfully:");
    console.log(data);
    const resInfoPath = data.data?.cards[2]?.card?.card?.info;
    const name = resInfoPath.name;
    const city = resInfoPath.city;
    const area = resInfoPath.areaName;
    const avgRating = resInfoPath.avgRatingString;
    const costForTwo = resInfoPath.costForTwoMessage;
    const cloudinaryImageId = resInfoPath.cloudinaryImageId;

    const resMenu =
      data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    const resInfo = {
      name,
      city,
      area,
      avgRating,
      costForTwo,
      cloudinaryImageId,
      resMenu,
    };

    console.log(resInfo);
    return resInfo;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
};

export default fetchRestaurantMenu;
