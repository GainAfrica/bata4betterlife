import React from "react";
import { Link } from "react-router-dom";
import Rarrow from "../assets/images/right-arrow.svg";

function Volunteer() {
  return (
    <section className="volunteer">
      <div className="volunteer__container">
        <div className="volunteer__box">
          <p className="volunteer__para">Become a part of our mission</p>
          <h3 className="volunteer__title">I want to become a Volunteer</h3>
          <Link to={"/volunteer"} className="volunteer__btn">
            <img className="volunteer__btn__arrow-1" src={Rarrow} alt="" />{" "}
            <span>Become a volunteer</span>{" "}
            <img className="volunteer__btn__arrow-2" src={Rarrow} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
