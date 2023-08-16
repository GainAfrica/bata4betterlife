import React, { useRef, useState } from "react";
import Logo from "../assets/svgs/header-logo.svg";
import Heart from "../assets/svgs/heart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const ham = useRef(null);
  const [not, setNot] = useState("");

  function handleMenu() {
    setIsShown(!isShown);
    if (ham.current.classList.contains("active")) {
      setNot("not");
    } else {
      setNot("");
    }
  }

  return (
    <>
      <div
        onClick={handleMenu}
        className={`header__overlay ${isShown ? "active" : ""}`}
      ></div>
      <header className="header">
        <div className="header__logo-box">
          <img src={Logo} alt="Logo" className="header__logo" />
        </div>

        <div
          ref={ham}
          onClick={handleMenu}
          className={`hamburger ${isShown ? "active" : ""} ${not}`}
        >
          <div className="ham-bar ham-bar-1"></div>
          <div className="ham-bar ham-bar-2"></div>
          <div className="ham-bar ham-bar-3"></div>
        </div>

        <nav className={`header__nav ${isShown ? "active" : ""}`}>
          <ul className="header__list">
            <li className="header__item">
              <Link to={"/"} className="header__link">
                Home
              </Link>
            </li>

            <li className="header__item">
              <Link to={"/volunteer"} className="header__link">
                Volunteer
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
    </>
  );
};

export default Header;
