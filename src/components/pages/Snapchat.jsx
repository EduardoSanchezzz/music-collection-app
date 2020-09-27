import React from "react";
import "../../App.css";

export function Snapchat() {
  return (
    <div className="snapchat-page">
      <h1>ADD ME:</h1>
      <p className="username">@notsureeddie</p>
      <p>Or simply scan below</p>
      <img
        src={require("../../images/snapcode.svg")}
        className="snapcode"
      ></img>
    </div>
  );
}
