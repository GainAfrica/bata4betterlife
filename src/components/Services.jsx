import React from "react";
import ServiceImg1 from "../assets/images/service-img-1.png";
import ServiceImg2 from "../assets/images/service-img-2.png";
import Rarrow from "../assets/images/right-arrow-white.svg";

function ServicesHelper(props) {
  return (
    <>
      <div className="services__box">
        <div className="services__box-left">
          <p className="services__box-number">/ {props.number}</p>
          <div className="services__box-image-container">
            <img src={props.img} alt="" className="services__section-image" />
          </div>
        </div>

        <div className="services__box-right">
          <h3 className="services__box-heading">{props.heading}</h3>
          <p className="services__box-para">{props.para}</p>
        </div>

        <div className="services__button">
          <img src={Rarrow} alt="" />
        </div>
      </div>

      <hr />
    </>
  );
}

function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <p>CAUSES</p>
        <h3>We’re focused on the projects that make life better kids</h3>
      </div>
      <hr />

      <ServicesHelper
        number="01"
        img={ServiceImg1}
        heading="We provide footwears for kids"
        para="We believe that every child deserves to have access to comfortable and durable shoes, regardless of their financial situation."
      />
      <ServicesHelper
        number="02"
        img={ServiceImg2}
        heading="We support education of less priviledged"
        para="We believe that education is a fundamental right that every child deserves. That's why we are committed to providing education for kids who have no access"
      />
    </section>
  );
}

export default Services;
