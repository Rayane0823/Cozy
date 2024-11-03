import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Minus from "../../../public/images/minus.svg"
import Plus from "../../../public/images/plus.svg"
import './Counter.scss'; 

const Counter = ({ onChange }) => {
  const [items, setItems] = useState(0);

  const handleIncrease = () => {
    setItems(items + 1);
  };

  const handleDecrease = () => {
    items > 0 ? setItems(items - 1) : setItems(0);
  };

  useEffect(() => {
    onChange(items);
  }, [items, onChange]);

  return (
    <div className="counter">
      <motion.button 
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.90 }}
        transition={{ duration: 0.2 }}
        onClick={handleDecrease}
        className="button"
      >
        <img src={Minus} alt="Moins" />
      </motion.button>
      <p className="count">{items}</p>
      <motion.button 
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.90 }}
        transition={{ duration: 0.2 }}
        onClick={handleIncrease}
        className="button"
      >
        <img src={Plus} alt="Plus" />
      </motion.button>
    </div>
  );
};

export default Counter;
