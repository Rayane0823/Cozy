import React, { useState } from "react";
import "./LeftPannel.scss";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import WishlistButton from "../WishlistButton/WishlistButton";
import Stars from "../../../public/images/Stars.svg";
import Back from "../../../public/images/back.svg";
import Facebook from "../../../public/images/facebook.svg";
import Twitter from "../../../public/images/twitter.svg";
import Pinterest from "../../../public/images/pinterest.svg";
import Instagram from "../../../public/images/instagram.svg";
import { useCart } from "../Context/CartContext";

const LeftPannel = () => {
  const [quantity, setQuantity] = useState(0);
  const [resetCounter, setResetCounter] = useState(false); 
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (quantity > 0) {
      const product = {
        id: "meryl-lounge-chair",
        name: "Meryl Lounge Chair",
        price: 149.99,
      };
      addToCart(product, quantity);
      setQuantity(0);
      setResetCounter(true);  
    }
  };

  return ( 
    <div className="left-pannel">
      <div className="header">
        <img src={Back} alt="Back" className="back-button" />
        <p className="breadcrumb">
          <span className="category">Chair</span>
          <span className="divider">/</span>
          <span className="product-name">Meryl Lounge Chair</span>
        </p>
      </div>
      <div className="product-info">
        <p className="product-title">Meryl Lounge Chair</p>
        <div className="price-and-rating">
          <p className="price">$149.99</p>
          <div className="rating">
            <img src={Stars} alt="Rating Stars" />
            <p>
              4.6 / 5.0 <span className="reviews">(556)</span>
            </p>
          </div>
        </div>
        <p className="description">
        The softly curved lines, highlighted by carefully stitched details, offer both comfort for your body and a pleasing aesthetic. Also, the tilt and height-adjustment mechanism is designed to withstand years of daily use and movement.
        </p>
        <div className="actions">
          <Counter onChange={setQuantity} reset={resetCounter} />
          <Button onClick={handleAddToCart}>Add To Cart</Button> 
        </div>
      </div>
      <div className="additional-info">
        <p className="shipping-info">
          Free 3-5 day shipping • Tool-free assembly • 30-day trial
        </p>
        <div className="wishlist-and-share">
          <WishlistButton />
          <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank">
  <img src={Facebook} alt="Facebook" />
</a>
<a href="https://www.twitter.com" target="_blank">
  <img src={Twitter} alt="Twitter" />
</a>
<a href="https://www.pinterest.com" target="_blank">
  <img src={Pinterest} alt="Pinterest" />
</a>
<a href="https://www.instagram.com" target="_blank">
  <img src={Instagram} alt="Instagram" />
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPannel;
