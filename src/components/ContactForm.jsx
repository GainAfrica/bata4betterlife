import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/icons/arrow-left.svg";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validate = (values) => {
    const errors = {};
    // fullname
    if (!values.name) {
      errors.name = "Please fill out this field";
    } else if (values.name.split(" ").length < 2) {
      errors.name = "Must be 2 words or more";
    }
    // email
    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    // phone number
    let pattern = new RegExp(/^[0-9\b]+$/);
    if (!values.phoneNo) {
      errors.phoneNo = "Please fill out this field";
    } else if (!pattern.test(values.phoneNo)) {
      errors.phoneNo = "Please enter only numbers";
    } else if (values.phoneNo.length !== 11) {
      errors.phoneNo = "Please enter a valid phone number";
    }
    // message
    if (!values.message) {
      errors.message = "Please fill out this field";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      //   alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        toast.success("Form submitted successfully");
        resetForm({ values: "" });
      }, 500);
    },
  });

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
        <form className="general-form__form" onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="general-form__form-error">
                {formik.errors.name}
              </div>
            ) : null}
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
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="general-form__form-error">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="general-form__form-group">
            <label htmlFor="phoneNo" className="general-form__form-label">
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              className="general-form__form-input"
              placeholder="+234"
              onChange={formik.handleChange}
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
              <div className="general-form__form-error">
                {formik.errors.phoneNo}
              </div>
            ) : null}
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
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="general-form__form-error">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div>
            <button className="general-form__form-btn">Submit form</button>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
