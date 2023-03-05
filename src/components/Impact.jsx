import React from "react";
import Keke from "../assets/images/keke-bg.png";

function Impact() {
  return (
    <section className="impact">
      <div className="impact__container">
        {/* <img className="impact__container__bg" src={Keke} alt="" /> */}
        <p className="impact__para">
          Our impact for the last <br /> couple of years
        </p>
        <div className="impact__stats">
          <div className="impact__stats__numbers">
            <h2>1397</h2>
            <p>Lives touched over time</p>
          </div>
          <div className="impact__stats__numbers">
            <h2>32</h2>
            <p>Donations received over time</p>
          </div>
          <div className="impact__stats__numbers">
            <h2>23</h2>
            <p>Lives touched over time</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
