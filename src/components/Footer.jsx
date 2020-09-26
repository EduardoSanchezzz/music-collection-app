import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/">About Me</Link>
            <Link to="/">How it Works</Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>Music</h2>
            <Link to="/">My Favourites</Link>
            <Link to="/">Recently Featured</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fab fa-stripe-s"></i>NCHZ
            </Link>
          </div>
          <small className="website-rights">Eduardo Sanchez © 2020</small>
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/eddiesanchezz_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/eddiesanchezzz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <Link
              className="social-icon-link snapchat"
              to="/snapchat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
            >
              <i className="fab fa-snapchat-square"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
