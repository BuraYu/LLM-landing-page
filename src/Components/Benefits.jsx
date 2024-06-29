import React, { useState } from "react";
import "./Benefits.css";
import benefits from "../data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBenefit = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevBenefit}>
        ←
      </button>
      <div className="carousel-content">
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
      </div>
      <button className="carousel-button" onClick={nextBenefit}>
        →
      </button>
    </div>
  );
};

export default Carousel;
