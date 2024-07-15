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

  const goToBenefit = (index) => {
    setCurrentIndex(index);
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  return (
    <div className="carousel">
      <i className="arrow left" onClick={nextBenefit}></i>

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
      <i class="arrow right" onClick={nextBenefit}></i>
      <div className="carousel-dots">
        {benefits.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToBenefit(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// import React from "react";
// import "./Benefits.css";

// const Benefits = () => {
//   return (
//     <div className="benefits--container">
//       <ul className="list">
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//       </ul>
//       <p>this is the corresponding text</p>
//     </div>
//   );
// };

// export default Benefits;
