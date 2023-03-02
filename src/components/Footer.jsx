import React from "react";
import Logo from "../assets/svgs/footer-logo.svg";
import Rectangle from "../assets/svgs/footer-rectangle.svg";
import { Link } from "react-router-dom";
import Heart from "../assets/svgs/heart.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* START OF LEFT SIDE OF FOOTER */}
        <div className="footer__left">
          <div className="footer__left__top">
            <div className="footer__logo-box">
              <img src={Logo} alt="Logo" className="footer__logo" />
            </div>

            <p>Helping the younger ones feel safe</p>
          </div>

          <div className="footer__address">
            <span className="footer__rectangles-container">
              <img src={Rectangle} className="footer__rectangle" alt="" />
              <img src={Rectangle} className="footer__rectangle" alt="" />
            </span>
            <p className="footer__address-details">
              1, New Airport Area, Oshodi, Nigeria
            </p>
            <p className="footer__address-details">info@better4life.com</p>
          </div>
        </div>
        {/* END OF LEFT SIDE OF FOOTER */}

        {/* START OF RIGHT SIDE OF FOOTER */}
        <div className="footer__right">
          <Link to={"/"} className="footer__link">
            <img src={Heart} alt="heart-icon" className="footer__link--heart" />
            Donate
          </Link>

          <p>© 2023 Bata 4 Better Life All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
