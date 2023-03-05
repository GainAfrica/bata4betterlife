import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/icons/arrow-left.svg";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerForm = () => {
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
    if (!pattern.test(values.phoneNo)) {
      errors.phoneNo = "Please enter only numbers";
    } else if (values.phoneNo.length !== 11) {
      errors.phoneNo = "Please enter a valid phone number";
    }
    // skills
    if (!values.skills) {
      errors.skills = "Please fill out this field";
    }
    // interest
    if (!values.interest) {
      errors.interest = "Please fill out this field";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      skills: "",
      interest: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        // toast.success(JSON.stringify(values, null, 2), {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        toast.success("Form submitted successfully");
        resetForm({ values: "" });
      }, 500);
    },
  });

  return (
    <div className="general-form">
      <div
        className="general-form__container"
        data-scroll-container
        id="scroll-container"
      >
        <div
          className="general-form__box"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#scroll-container"
        >
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
            <label htmlFor="skills" className="general-form__form-label">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              className="general-form__form-input"
              placeholder="Ex - First aid, Teaching, Financial aid"
              onChange={formik.handleChange}
              value={formik.values.skills}
              onBlur={formik.handleBlur}
            />
            {formik.touched.skills && formik.errors.skills ? (
              <div className="general-form__form-error">
                {formik.errors.skills}
              </div>
            ) : null}
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
              onChange={formik.handleChange}
              value={formik.values.interest}
              onBlur={formik.handleBlur}
            />
            {formik.touched.interest && formik.errors.interest ? (
              <div className="general-form__form-error">
                {formik.errors.interest}
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

export default VolunteerForm;
