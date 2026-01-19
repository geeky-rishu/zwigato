import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="menu-category">
      <div className="category-header" onClick={toggleOpen}>
        <h2>
          {category.title} ({category.itemCards.length})
        </h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="menu-items">
          {category.itemCards.map((item) => (
            <MenuItem key={item.card.info.id} item={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
