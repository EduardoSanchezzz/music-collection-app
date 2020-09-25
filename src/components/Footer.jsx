import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Tests</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Tests</Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Tests</Link>
          </div>
          <div className="footer-link-items">
            <h2>Music</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Tests</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              NCHZ
            </Link>
          </div>
          <small className="website-rights">Eduardo Sanchez © 2020</small>
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/eddiesanchezz_/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
