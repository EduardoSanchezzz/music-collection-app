import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button.jsx";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={(closeMobileMenu, goToTop)}
          >
            <i className="fab fa-stripe-s"></i> NCHZ
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(closeMobileMenu, goToTop)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourites"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Favourites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/featured"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recently Featured
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" linkTo="/about">
              LEARN MORE
            </Button>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
