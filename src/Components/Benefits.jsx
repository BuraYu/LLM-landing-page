import React from "react";
import "./Benefits.css";
import { useState } from "react";

export default function Benefits() {
  const benefits = [
    "Cost Efficiency: Long-term savings by avoiding subscription fees and recurring costs.",
    "Control and Customization: Full control over software configurations, updates, and integrations.",
    "Data Privacy and Security: Enhanced security and privacy by keeping data within your own servers.",
    "Performance and Availability: Dedicated resources ensure consistent performance and low latency.",
    "Scalability: Flexible resource scaling based on actual usage patterns and demands.",
    "No Vendor Lock-in: Independence from a single vendor’s ecosystem.",
    "Advanced Use Cases: Capability to deploy models at the edge or in specific geographic locations.",
    "Learning and Innovation: Develop in-house expertise and foster innovation.",
  ];

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
      <div className="carousel-content">{benefits[currentIndex]}</div>
      <button className="carousel-button" onClick={nextBenefit}>
        →
      </button>
    </div>
  );
}
