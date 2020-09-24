import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Footer Text</p>
        <p className="footer-subscription-text">Ur pre cool uk🥵</p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email here"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
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
            <Link to="/" className="social logo"></Link>
            <small className="website-rights">Eduardo Sanchez © 2020</small>
            <div className="social-icons">
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
