import React, { useEffect } from "react";
import "./Hero.css";
import headerlogo from "../images/hero-img.png";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="hero-header">
      <div className="hero--container">
        
        <div className="hero--title">
          <h1>LLM Hosting</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugiat, rem assumenda corrupti, eaque laudantium, eum
            eos corporis nisi nihil tempore asperiores voluptates aliquid omnis.
            Hic excepturi quod impedit saepe.
          </p>
          <div className="hero--email">
            <label htmlFor="email" className="sr-only"></label>
            <input
              type="email"
              id="email"
              required
              placeholder="JohnDoe@gmail.com"
            />
            <button>Get started</button>
          </div>
        </div>
        {/* <img src={headerlogo} alt="LLM Hosting logo" className="hero--logo" /> */}
      </div>
    </header>
  );
}
