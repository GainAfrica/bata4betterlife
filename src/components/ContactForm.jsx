import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/icons/arrow-left.svg";

const ContactForm = () => {
  return (
    <div className="general-form">
      <div className="general-form__container">
        <div className="general-form__box">
          <div className="general-form__box-back">
            <Link to={"/"}>
              <img src={LeftArrow} alt="left-arrow" /> <p>Back</p>
            </Link>
          </div>
          <div>
            <p className="general-form__paragraph">Get in touch</p>
            <h3 className="general-form__title">
              Interested in connecting with us at Bata4betterlife?
            </h3>
          </div>
        </div>
        <form className="general-form__form">
          <div className="general-form__form-group">
            <label htmlFor="name" className="general-form__form-label">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="general-form__form-input"
              placeholder="Your full name"
            />
          </div>
          <div className="general-form__form-group">
            <label htmlFor="email" className="general-form__form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="general-form__form-input"
              placeholder="Your email address"
            />
          </div>
          <div className="general-form__form-group">
            <label htmlFor="phone_number" className="general-form__form-label">
              Phone number
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="general-form__form-input"
              placeholder="+234"
            />
          </div>
          <div className="general-form__form-group">
            <label htmlFor="message" className="general-form__form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="general-form__form-textarea"
              cols="30"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div>
            <button className="general-form__form-btn">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
