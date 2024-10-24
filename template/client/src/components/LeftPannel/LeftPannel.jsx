import React from "react";
import "./LeftPannel.scss";
import Stars from "../../../public/images/Stars.svg"
import Back from "../../../public/images/back.svg"
import Facebook from "../../../public/images/facebook.svg"
import Twitter from "../../../public/images/twitter.svg"
import Pinterest from "../../../public/images/pinterest.svg"
import Instagram from "../../../public/images/instagram.svg"
import ColorSelection from "../../../public/images/color_selection.svg"

const LeftPannel = () => {
  return ( 
  <div className="left-pannel">
      <div className="header">
        <img src={Back} alt="Back" />
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
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also, there’s a tilt and
          height-adjusting mechanism that’s built to outlast years of ups and
          downs.
        </p>
        <img
          src={ColorSelection}
          alt="Color Selection"
          className="color-selection"
        />
        <div className="actions">
          <button>Add To Cart</button> 
        </div>
      </div>
      <div className="additional-info">
        <p className="shipping-info">
          Free 3-5 day shipping • Tool-free assembly • 30-day trial
        </p>
        <div className="wishlist-and-share">
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img
              src={Pinterest}
              alt="Pinterest"
            />
            <img
              src={Instagram}
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPannel;
