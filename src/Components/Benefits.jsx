import React, { useState } from "react";
import "./Benefits.css";
import benefits from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [direction, setDirection] = useState(1);

  const nextBenefit = () => {
    // setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  const prevBenefit = () => {
    // setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length
    );
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevBenefit}>
        ←
      </button>
      <motion.div
        className="carousel-content"
        key={currentIndex}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className="carousel-details">
          <h2>{benefits[currentIndex].heading}</h2>
          {benefits[currentIndex].details.map((detail, index) => (
            <div key={index}>
              <h3>{detail.subheading}</h3>
            </div>
          ))}
        </div>
        <div className="carousel-description">
          {benefits[currentIndex].details.map((detail, index) => (
            <div key={index}>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <button className="carousel-button" onClick={nextBenefit}>
        →
      </button>
      <div className="carousel-dots">
        {benefits.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
