import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftChevron from "../../../public/images/chevron-left.svg"
import RightChevron from "../../../public/images/chevron-right.svg"


import "./RightPannel.scss";

const RightPannel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const images = [
    "../../../public/images/chair_img/chair_1.png",
    "../../../public/images/chair_img/chair_2.png",
    "../../../public/images/chair_img/chair_3.png",
    "../../../public/images/chair_img/chair_4.png",
   "../../../public/images/chair_img/chair_5.png",
  ];

  const handleNext = () => {
    setDirection(1);
    setImgIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection(-1);
    setImgIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0.5,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? 50 : -50,
      opacity: 0.5,
    }),
  };

  return (
    <div className="right-panel">
      <div className="image-controls">
        <p className="image-index">
          <span className="current-image">{"0" + (imgIndex + 1)}</span> / 05
        </p>
        <div className="navigation-buttons">
          <img
            src={LeftChevron}
            alt="Previous Image"
            className="navigation-icon"
            onClick={handlePrevious}
          />
          <img
            src={RightChevron}
            alt="Next Image"
            className="navigation-icon"
            onClick={handleNext}
          />
        </div>
      </div>
      <AnimatePresence custom={direction}>
        <div className="image-display">
          <div className="background-gradient"></div>
          <motion.div
            key={imgIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2 },
              opacity: { duration: 0.3 },
            }}
            className="image-container"
          >
            <img
              src={images[imgIndex]}
              alt=""
              className="displayed-image"
            />
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === imgIndex ? "active-thumbnail" : ""}`}
            onClick={() => setImgIndex(index)}
          >
            <img
              src={image}
              width={88}
              height={88}
              alt={`Chair picture ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPannel;
