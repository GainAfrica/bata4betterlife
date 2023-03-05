import React from "react";
import Arrow from "../assets/icons/arrow-down.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div>
          <h1 className="heading-primary u-center-text u-margin-bottom-small">
            Small changes make a big impact on life
          </h1>

          <p className="hero__paragraph u-center-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>

        <div className="hero__arrow-box">
          <img src={Arrow} alt="arrow" className="hero__arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
