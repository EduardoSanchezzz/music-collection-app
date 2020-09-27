import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import video from "../images/bg-vid.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        src={video}
        autoPlay
        loop
        muted
        poster="../images/bg-img.png"
      ></video>
      <h1>EXPERIENCE MUSIC!</h1>
      <p>
        A SHOWCASE OF SOME COOL MUSIC <i className="fas fa-arrow-down"></i>
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="/"
        >
          EXPLORE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/about"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
