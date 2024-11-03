import React, { useState } from "react";
import Heart from "../Heart/Heart";
import './WishlistButton.scss';

const WishlistButton = () => {
  const [fill, setFill] = useState(false);
  return (
    <div
      className="wishlist-container"
      onClick={() => setFill(!fill)}
    >
      <Heart fill={fill ? "#3AA39F" : "transparent"} stroke="#3AA39F" />
      <p className="wishlist-text">
        Add to Wishlist
      </p>
    </div>
  );
};

export default WishlistButton;
