import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing--container">
      <div className="pricing--box pricing--basic">
        <span className="pricing--package-name">Basic</span>
        <h2 className="pricing--price">$99</h2>
        <p className="pricing--description-basic-first">
          Best for small business owners, startups who need a landing page for
          their business.
        </p>
        <a href="#" className="pricing--start">
          Get started
        </a>
        <span className="pricing--included">What's included</span>
        <ul className="pricing--list">
          <li>130+ Coded Blocks</li>
          <li>Best for Developers, Freelancers</li>
          <li>Made with TailwindCSS</li>
        </ul>
      </div>
      <div className="pricing--box pricing--premium">
        <span className="pricing--package-name">Premium</span>
        <h2 className="pricing--price">$199</h2>
        <p className="pricing--description-basic-first">
          Ideal for growing businesses needing more features and support.
        </p>
        <a href="#" className="pricing--start">
          Get started
        </a>
        <span className="pricing--included">What's included</span>
        <ul className="pricing--list">
          <li>200+ Coded Blocks</li>
          <li>Priority Support</li>
          <li>Made with TailwindCSS</li>
        </ul>
      </div>
      <div className="pricing--box pricing--enterprise">
        <span className="pricing--package-name">Enterprise</span>
        <h2 className="pricing--price">$299</h2>
        <p className="pricing--description-basic-first">
          Best for large organizations needing extensive customization.
        </p>
        <a href="#" className="pricing--start">
          Get started
        </a>
        <span className="pricing--included">What's included</span>
        <ul className="pricing--list">
          <li>300+ Coded Blocks</li>
          <li>Dedicated Account Manager</li>
          <li>Made with TailwindCSS</li>
        </ul>
      </div>
    </div>
  );
}
