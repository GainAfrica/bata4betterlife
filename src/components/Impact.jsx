import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import VisibilitySensor from "react-visibility-sensor";

function Impact() {
  const [counterOn, setCounter] = useState(false);

  return (
    <section className="impact">
      <div className="impact__container">
        <p className="impact__para">
          Our impact for the last <br /> couple of years
        </p>
        <ScrollTrigger
          className="impact__stats-container"
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <div className="impact__stats">
            <div className="impact__stats__numbers">
              <h2>
                {<CountUp start={0} end={23} duration={4} redraw={true} />}
              </h2>
              <p>Lives touched over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2>
                <CountUp
                  start={0}
                  end={1.5}
                  duration={4}
                  decimals={1}
                  prefix={"₦"}
                  suffix={"M"}
                  enableScrollSpy={"true"}
                ></CountUp>
              </h2>
              <p>Donations received over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2>
                <CountUp start={0} end={23} duration={4}></CountUp>
              </h2>
              <p>Lives touched over time</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}

export default Impact;
