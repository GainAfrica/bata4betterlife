import React, { useState } from "react";
import Beach from "../assets/images/about__beach.png";
import KidGroup from "../assets/images/about__kids.png";
import Draggable from "react-draggable";

const About = () => {
  return (
    <div className="about">
      <div className="about__container--1">
        <div className="about__container--1__left">
          <p className="about__paragraph--1">
            Bata 4 Better Life is a Nigerian non-profit organization
          </p>
        </div>

        <div className="about__container--1__right">
          <h2 className="heading-secondary u-margin-bottom-medium">
            We carry out humanitarian projects to respond to the primary needs
            of kids who have difficulties with good footwears in rural areas
          </h2>

          <p className="about__paragraph--2">
            A Caribbean wide program that encourages children to enjoy and play
            football, starting in Curaçao. Future Goals turns fishing nets
            sourced from the ocean and plastic waste into colorful football
            goals.
          </p>
        </div>
      </div>

      <div className="about__container--2">
        <div className="about__container--2__left">
          <div className="about__container--2__left__beach">
            <img src={Beach} alt="" />
            <p>visitation to the beach</p>
          </div>
          <Draggable>
            <div className="about__container--2__left__btn">Next</div>
          </Draggable>
        </div>
        <div className="about__container--3__right">
          <div className="about__container--3__right__kidGroup">
            <img src={KidGroup} alt="" />
            <p>visitation to the beach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
