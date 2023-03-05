import React from "react";
import Logo from "../assets/svgs/header-logo.svg";
import Heart from "../assets/svgs/heart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-scroll-section className="header">
      <div className="header__logo-box">
        <img src={Logo} alt="Logo" className="header__logo" />
      </div>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to={"/"} className="header__link">
              Home
            </Link>
          </li>
          <li className="header__item">
            <Link to={"/gallery"} className="header__link">
              Gallery
            </Link>
          </li>
          <li className="header__item">
            <Link to={"/contact"} className="header__link">
              Contact
            </Link>
          </li>
          <li className="header__item">
            <Link to={"/"} className="header__link header__link--4">
              <img
                src={Heart}
                alt="heart-icon"
                className="header__link--heart"
              />
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
