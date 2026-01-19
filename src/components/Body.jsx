import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { resList } from "../utils/mockData";
import fetchRestaurants from "../utils/fetchRestaurants";
import Search from "../utils/search";
import Shimmer from "./Shimmer";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  const topRatedFilter = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurants(filteredList);
  };

  useEffect(() => {
    fetchRestaurants().then((data) => {
      setRestaurants(data);
      setFilteredRestaurants(data);
    });
  }, []);

  if (restaurants.length === 0) {
    return (
      <>
        <Shimmer />
        <Shimmer />
      </>
    );
  }

  return (
    <div className="body">
      <h1>Welcome to Zwigato !</h1>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search dishes, restaurants........"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() =>
            Search(
              restaurants,
              setFilteredRestaurants,
              searchText,
              setSearchText
            )
          }
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="show-all"
          onClick={() => setFilteredRestaurants(restaurants)}
        >
          Show all
        </button>
        <button className="top-rated" onClick={topRatedFilter}>
          4.5⭐+
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/* Return a Promoted RestaurantCard component for restaurants with
            avgRating 4.7 or higher */}
            {restaurant.info.avgRating >= 4.7 ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
