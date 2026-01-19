import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import fetchRestaurantMenu from "../utils/fetchRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import MenuCategory from "./MenuCategory";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // applying accordion styling

  const resData = useRestaurantMenu(resId);

  if (!resData) return <ShimmerMenu />;

  const {
    name,
    city,
    area,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    resMenu,
  } = resData;

  return (
    <div className="restaurant-container">
      {/* Header */}
      <div className="restaurant-header">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />

        <div className="restaurant-info">
          <h1>{name}</h1>
          <p>
            {area}, {city}
          </p>

          <div className="restaurant-meta">
            <span>⭐ {avgRating}</span>
            <span>{costForTwo}</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-wrapper">
        {resMenu.map((category) => (
          <MenuCategory
            key={category.card.card.categoryId}
            category={category.card.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
