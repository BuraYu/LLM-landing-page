import React from "react";
import "./Hero.css";
import headerlogo from "../images/llm-image.png";

export default function Hero() {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header--title">
          <h1>LLM Hosting</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugiat, rem assumenda corrupti, eaque laudantium, eum
            eos corporis nisi nihil tempore asperiores voluptates aliquid omnis.
            Hic excepturi quod impedit saepe.
          </p>
          <div className="header--email">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              required
              placeholder="JohnDoe@gmail.com"
            ></input>
            <button>Get startd</button>
          </div>
        </div>
        <img src={headerlogo} alt="" srcset="" />
      </div>
    </header>
  );
}
