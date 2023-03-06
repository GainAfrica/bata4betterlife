import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTriggrer from "react-scroll-trigger";

function Impact() {
  const [counterOn, setCounter] = useState(false);

  return (
    <section className="impact">
      <div className="impact__container">
        {/* <img className="impact__container__bg" src={Keke} alt="" /> */}
        <p className="impact__para">
          Our impact for the last <br /> couple of years
        </p>
        <ScrollTriggrer
          className="impact__stats-container"
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <div className="impact__stats">
            <div className="impact__stats__numbers">
              <h2>
                {counterOn && <CountUp start={0} end={23} duration={2} />}
              </h2>
              <p>Lives touched over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={1.5}
                    duration={2}
                    decimals={1}
                    prefix={"₦"}
                    suffix={"M"}
                  />
                )}
              </h2>
              <p>Donations received over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2>
                {counterOn && <CountUp start={0} end={23} duration={2} />}
              </h2>
              <p>Lives touched over time</p>
            </div>
          </div>
        </ScrollTriggrer>
      </div>
    </section>
  );
}

export default Impact;
