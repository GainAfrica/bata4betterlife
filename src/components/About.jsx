import React from "react";
import Arrow from "../assets/icons/arrow-down.svg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__container--1">
          <h1 className="heading-primary u-center-text u-margin-bottom-medium">
            Small changes make a big impact on life
          </h1>

          <p className="paragraph__about--1 u-center-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>

          <div className="about__arrow">
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
        </div>

        <div className="about__container--2">
          <div className="about__container--2__left">
            <p className="paragraph__about--2">
              Bata 4 Better Life is a Nigerian non-profit organization
            </p>
          </div>

          <div className="about__container--2__right">
            <h2 className="heading-secondary u-margin-bottom-medium">
              We carry out humanitarian projects to respond to the primary needs
              of kids who have difficulties with good footwears in rural areas
            </h2>

            <p className="paragraph__about--3">
              A Caribbean wide program that encourages children to enjoy and
              play football, starting in Curaçao. Future Goals turns fishing
              nets sourced from the ocean and plastic waste into colorful
              football goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
