import { RESTAURANT_API } from "./constants.js";

const fetchRestaurants = async () => {
  try {
    const response = await fetch(RESTAURANT_API);
    const data = await response.json();
    console.log("Data fetched successfully:");
    console.log(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    return data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchRestaurants;
