import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/redux/cartSlice";
import { CDN_URL, FALLBACK_IMAGE_URL } from "../utils/constants";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice =
    cartItems.reduce(
      (total, item) => total + (item.price || item.defaultPrice || 0),
      0
    ) / 100;

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => {
          const imageUrl = item.imageId
            ? CDN_URL + item.imageId
            : FALLBACK_IMAGE_URL;

          return (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-img" src={imageUrl} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{(item.price || item.defaultPrice) / 100}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart-footer">
        <h2>Total: ₹{totalPrice.toFixed(2)}</h2>

        <div className="cart-actions">
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
