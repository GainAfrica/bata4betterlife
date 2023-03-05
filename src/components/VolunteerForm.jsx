import React from "react";
import LeftArrow from "../assets/icons/arrow-left.svg";

const VolunteerForm = () => {
  return (
    <div className="volunteer-form">
      <div className="volunteer-form__container">
        <div className="volunteer-form__box">
          <div>
            <img src={LeftArrow} alt="left-arrow" /> Back
          </div>
          <div>
            <p className="volunteer-form__para">Become a volunteer</p>
            <h3 className="volunteer-form__title">
              Interested in participating as a volunteer?
            </h3>
          </div>
        </div>
        <form className="volunteer-form__form">
          <div className="volunteer-form__form-group">
            <label htmlFor="name" className="volunteer-form__form-label">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="volunteer-form__form-input"
              placeholder="Your full name"
            />
          </div>
          <div className="volunteer-form__form-group">
            <label htmlFor="email" className="volunteer-form__form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="volunteer-form__form-input"
              placeholder="Your email address"
            />
          </div>
          <div className="volunteer-form__form-group">
            <label
              htmlFor="phone_number"
              className="volunteer-form__form-label"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="volunteer-form__form-input"
              placeholder="+234"
            />
          </div>
          <div className="volunteer-form__form-group">
            <label htmlFor="skills" className="volunteer-form__form-label">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              className="volunteer-form__form-input"
              placeholder="Ex - First aid, Teaching, Financial aid "
            />
          </div>

          <div className="volunteer-form__form-group">
            <label htmlFor="interest" className="volunteer-form__form-label">
              How will you like to be involved?
            </label>
            <input
              type="text"
              name="interest"
              id="interest"
              className="volunteer-form__form-input"
              placeholder="Enter your area of interest"
            />
          </div>
          <div>
            <button className="volunteer-form__form-btn">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
