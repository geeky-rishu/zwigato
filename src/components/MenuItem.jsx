import { CDN_URL, FALLBACK_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
const MenuItem = ({ item }) => {
  const imageUrl = item.imageId ? CDN_URL + item.imageId : FALLBACK_IMAGE_URL;
  const price = item.price ? item.price / 100 : "Price not available";

  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="menu-item">
      <div className="item-left">
        <h3>{item.name}</h3>
        <p className="price">₹{price}</p>
        <p className="desc">{item.description}</p>

        {item.offerTags?.length > 0 && (
          <span className="offer">{item.offerTags[0].title}</span>
        )}
      </div>

      <div className="item-right">
        <img src={imageUrl} alt={item.name} />
        <button className="add-btn" onClick={() => addToCart(item)}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
