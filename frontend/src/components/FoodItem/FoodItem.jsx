import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(id);
    toast.success(`${name} added to cart!`, { autoClose: 3000, position: "top-right" });
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating_starts" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
