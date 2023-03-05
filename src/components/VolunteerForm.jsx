import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/icons/arrow-left.svg";

const VolunteerForm = () => {
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
            <p className="general-form__paragraph">Become a volunteer</p>
            <h3 className="general-form__title">
              Interested in participating as a volunteer?
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
            <label htmlFor="skills" className="general-form__form-label">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              className="general-form__form-input"
              placeholder="Ex - First aid, Teaching, Financial aid "
            />
          </div>

          <div className="general-form__form-group">
            <label htmlFor="interest" className="general-form__form-label">
              How will you like to be involved?
            </label>
            <input
              type="text"
              name="interest"
              id="interest"
              className="general-form__form-input"
              placeholder="Enter your area of interest"
            />
          </div>
          <div>
            <button className="general-form__form-btn">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;