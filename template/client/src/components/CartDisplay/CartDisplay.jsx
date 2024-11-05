import React from 'react';
import './CartDisplay.scss';
import { useCart } from "../Context/CartContext";

const CartDisplay = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const { removeFromCart } = useCart();

  return (
    <div className="cart-dropdown">
      <h3 className='cart-title'>Cart</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <p className='cart-item-name'>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{(item.price * item.quantity).toFixed(2)}<span className='cart-price-euro'>$</span></p>
            <button onClick={() => removeFromCart(item.id)} className='remove-cart-button'>X</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="total">
        <p className='cart-total'>Total: {totalPrice.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default CartDisplay;
