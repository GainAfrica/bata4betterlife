import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VisibilitySensor from "react-visibility-sensor";
gsap.registerPlugin(ScrollTrigger);

function Impact() {
  const numberArr = [1, 2, 3, 4, 2];
  const decimalArr = ["2.5", "₦3.5", 7.5, "₦4.5", "₦1.5"];
  const letterArr = ["A", "R", "Z", "M"];

  const numberEls = numberArr.map((num, idx) => {
    return <li key={idx}>{num}</li>;
  });
  const decimalEls = decimalArr.map((num, idx) => {
    return <li key={idx}>{num}</li>;
  });
  const letterEls = letterArr.map((num, idx) => {
    return <li key={idx}>{num}</li>;
  });
  const para = useRef(null);

  useEffect(() => {
    const el = para.current;
    const tl = gsap;
    const myScrollValues = {
      trigger: el,
      toggleActions: "restart none none none",
      start: "top 80%",
    };

    tl.from("#numberList1", {
      y: 350,
      duration: 1.5,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });
    tl.from("#numberList3", {
      y: 350,
      duration: 1.5,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });
    tl.from("#decimalList", {
      y: 600,
      duration: 1.5,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });
    tl.from("#letterList", {
      y: 700,
      duration: 1.5,
      opacity: 0,
      delay: 0.3,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });

    tl.from("#numberList2", {
      y: 500,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });
    tl.from("#numberList4", {
      y: 500,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "circ.out",
      scrollTrigger: myScrollValues,
    });
  }, []);

  return (
    <section className="impact">
      <div className="impact__container">
        <p className="impact__para">
          Our impact for the last <br /> couple of years
        </p>

        <div className="impact__stats" id="impact_stats" ref={para}>
          <div>
            <div className="impact__stats__numbers">
              <h2 id="number1" className="numberList">
                <ul id="numberList1">{numberEls}</ul>
                <ul id="numberList2">{numberEls.slice(0, 3)}</ul>
              </h2>
              <p ref={para}>Lives touched over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2 className="numberList">
                <ul id="decimalList">{decimalEls}</ul>
                <ul id="letterList">{letterEls}</ul>
              </h2>
              <p id="para1"> Donations received over time</p>
            </div>
            <div className="impact__stats__numbers">
              <h2 id="number1" className="numberList">
                <ul id="numberList3">{numberEls}</ul>
                <ul id="numberList4">{numberEls.slice(0, 3)}</ul>
              </h2>
              <p>Lives touched over time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
