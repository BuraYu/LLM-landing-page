import React from "react";
import "./Steps.css";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";

export default function Steps() {
  return (
    <div className="steps">
      <div className="steps-step--container">
        <div className="steps-step-information">
          <h3 className="steps-step--header">Step 1</h3>
          <p className="steps-step--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ad enim quia assumenda delectus alias doloremque. Placeat, ab,
            eligendi optio hic saepe voluptatibus eaque, necessitatibus labore
            odit dolor in adipisci assumenda harum maiores nisi animi aspernatur
            molestias ipsam laboriosam tempore dolore! In, autem accusantium?
            Nam itaque velit ipsum ad fugit!
          </p>
        </div>
        <img src={step1} alt="" />
      </div>
      <div className="steps-step--container">
        <div className="steps-step-information">
          <h3 className="steps-step--header">Step 2</h3>
          <p className="steps-step--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ad enim quia assumenda delectus alias doloremque. Placeat, ab,
            eligendi optio hic saepe voluptatibus eaque, necessitatibus labore
            odit dolor in adipisci assumenda harum maiores nisi animi aspernatur
            molestias ipsam laboriosam tempore dolore! In, autem accusantium?
            Nam itaque velit ipsum ad fugit!
          </p>
        </div>
        <img src={step2} alt="" />
      </div>
      <div className="steps-step--container">
        <div className="steps-step-information">
          <h3 className="steps-step--header">Step 3</h3>
          <p className="steps-step--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ad enim quia assumenda delectus alias doloremque. Placeat, ab,
            eligendi optio hic saepe voluptatibus eaque, necessitatibus labore
            odit dolor in adipisci assumenda harum maiores nisi animi aspernatur
            molestias ipsam laboriosam tempore dolore! In, autem accusantium?
            Nam itaque velit ipsum ad fugit!
          </p>
        </div>
        <img src={step3} alt="" />
      </div>
    </div>
  );
}
