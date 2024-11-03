import React from 'react';
import './CartDisplay.scss';

const CartDisplay = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <h3>Cart</h3>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>Quantity : {item.quantity}</p>
            <p>Price : {item.price}€</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDisplay;
