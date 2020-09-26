import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

// const LINKS = ["favourites", "learnMore"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link smooth to={linkTo} className="btn-mobile" target="_self">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => {
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
        }}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
