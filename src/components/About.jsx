import React, { useState } from "react";
import Arrow from "../assets/icons/arrow-down.svg";
import Beach from "../assets/images/about__beach.png";
import KidGroup from "../assets/images/about__kids.png";

const About = () => {
  const [diffX, setdiffX] = useState("");
  const [diffY, setdiffY] = useState("");
  const [left, setLeft] = useState(500);
  const [top, setTop] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = function (e) {
    setdiffX(e.clientX - e.currentTarget.getBoundingClientRect().left);
    setdiffY(e.clientY - e.currentTarget.getBoundingClientRect().top);
    setIsDragging(true);
  };

  const dragging = function (e) {
    if (isDragging) {
      setLeft(e.pageX - diffX);
      setTop(e.pageY - diffY);
    }
  };

  const dragEnd = function () {
    setIsDragging(false);
  };

  const dragEnd2 = function () {
    if (isDragging) {
      setIsDragging(false);
    }
  };
  return (
    <div className="about">
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
            A Caribbean wide program that encourages children to enjoy and play
            football, starting in Curaçao. Future Goals turns fishing nets
            sourced from the ocean and plastic waste into colorful football
            goals.
          </p>
        </div>
      </div>

      <div className="about__container--3">
        <div className="about__container--3__left">
          <div className="about__container--3__left__beach">
            <img src={Beach} alt="" />
            <p>visitation to the beach</p>
          </div>
          <div
            className="about__container--3__left__btn"
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragEnd}
            onMouseOut={dragEnd2}
            style={{ left: left, top: top }}
          >
            {" "}
            Next{" "}
          </div>
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
