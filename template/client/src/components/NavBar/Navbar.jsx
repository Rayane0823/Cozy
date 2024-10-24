import React, { useState }  from "react";
import { motion } from "framer-motion";
import LogoCozy from "../../../public/images/logoCozy.svg"
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Navbar.scss"; 

const Navbar = () => {
  const [cartIsHovered, setCartIsHovered] = useState(false);
  const [searchIsHovered, setSearchIsHovered] = useState(false);
  const [menuIsHovered, setMenuIsHovered] = useState(false);

  return (
    <nav className="navbar">
      <img src={LogoCozy} alt="Logo Cozy" className="logo" />
      <ul className="navbar-links">
        {["SHOP", "COLLECTIVE", "DESIGNERS", "ABOUT US", "CONTACT"].map(
          (item) => (
            <motion.li
              key={item}
              initial={{ color: "#17183B" }}
              whileHover={{ color: "#3AA39F" }}
              transition={{ duration: 0.2 }}
              className="navbar-link"
            >
              {item}
            </motion.li>
          )
        )}
      </ul>
      <div className="navbar-icons">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="icon-wrapper"
          onMouseEnter={() => setMenuIsHovered(true)}
          onMouseLeave={() => setMenuIsHovered(false)}
        >
          <Menu isHovered={menuIsHovered} setIsHovered={setMenuIsHovered} />
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="icon-wrapper"
          onMouseEnter={() => setSearchIsHovered(true)}
          onMouseLeave={() => setSearchIsHovered(false)}
        >
          <Search
            isHovered={searchIsHovered}
            setIsHovered={setSearchIsHovered}
          />
        </motion.div>

        <div className="cart-container">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="icon-wrapper"
            onMouseEnter={() => setCartIsHovered(true)}
            onMouseLeave={() => setCartIsHovered(false)}
          >
            <ShoppingCart
              isHovered={cartIsHovered}
              setIsHovered={setCartIsHovered}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
