import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const userData = useContext(UserContext);
  const userName = userData.getUser().name;

  const Log = () => {
    if (isLoggedIn === "Login") {
      setIsLoggedIn("Logout");
    } else {
      setIsLoggedIn("Login");
    }
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/images/zwigato-high-resolution-logo-grayscale-transparent.png"
          alt="Zwigato Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              🛒
              {cartItems.length > 0 && (
                <span>
                  <sup>{cartItems.length}</sup>
                </span>
              )}
            </Link>
          </li>
        </ul>

        <ul className="log-bar">
          <li>
            <button className="log-btn" onClick={Log}>
              {isLoggedIn}
            </button>
          </li>
          {isLoggedIn === "Logout" && <li>{userName}</li>}
        </ul>
      </div>
    </header>
  );
};
export default Header;
