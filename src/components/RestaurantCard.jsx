import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating} ⭐</p>
    </div>
  );
};

//creating a higher order component (HOC) to add "Promoted" label
export const withPromotedLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <div className="promoted-label">Promoted</div>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
