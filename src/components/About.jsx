import React, { useState } from "react";
import Beach from "../assets/images/about__beach.png";
import KidGroup from "../assets/images/about__kids.png";
import Draggable from "react-draggable";
import { useRef } from "react";

const About = () => {
  const nextBtn = useRef(null);
  const cursorContainer = useRef(null);
  console.log(window.innerHeight, window.innerWidth)

  function moveCursor(e) {
    nextBtn.current.style.top = e.clientY + "px";
    nextBtn.current.style.left = e.clientX + "px";
    nextBtn.current.classList.add('active')

  }

  function addCursor(e){
    nextBtn.current.classList.add('active')
    nextBtn.current.style.top = e.clientY + "px";
    nextBtn.current.style.left = e.clientX + "px";
  }

  function removeCursor() {
    nextBtn.current.classList.remove('active')

  }

  return (
    <div className="about">
      <div className="about__container about__container--1">
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

      <div
        className="about__container about__container--2"
        onMouseMove={moveCursor}
        onMouseLeave={removeCursor}
        onMouseEnter={addCursor}
        ref={cursorContainer}
      >
        <div className="about__container--2__left">
          <div className="about__container--2__left__beach">
            <img src={Beach} alt="" />
            <p>visitation to the beach</p>
          </div>
          <div
            className={`about__container--2__left__btn `}
            ref={nextBtn}
          >
            Next
          </div>
        </div>
        <div className="about__container--2__right">
          <div className="about__container--2__right__kidGroup">
            <img src={KidGroup} alt="" />
            <p>visitation to the beach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
