import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {

      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
