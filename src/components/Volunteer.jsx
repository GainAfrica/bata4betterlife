import React from "react";
import Rarrow from "../assets/images/right-arrow.svg";

function Volunteer() {
  return (
    <>
      <div className="volunteer">
        <div className="volunteer__container">
          <div className="volunteer__box">
            <p className="volunteer__para">Become a part of our mission</p>
            <h3 className="volunteer__title">I want to become a Volunteer</h3>
            <div className="volunteer__btn">
              <span>Become a volunteer</span> <img src={Rarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
