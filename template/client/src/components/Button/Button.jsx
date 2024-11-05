import React from "react";
import { motion } from "framer-motion";
import './Button.scss';

const Button = ({ onClick, children }) => {
  return (
    <motion.div
      initial={{ scale: 1, backgroundColor: "#59A19E" }}
      whileHover={{ scale: 1.05, backgroundColor: "#338c89" }}
      whileTap={{ scale: 0.95, backgroundColor: "#338c89" }}
      transition={{ duration: 0.2 }}
      className="add-to-cart-button"
      onClick={onClick} 
    >
      {children}
    </motion.div>
  );
};

export default Button;
