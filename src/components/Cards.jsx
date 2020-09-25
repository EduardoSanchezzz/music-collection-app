import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Text</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-1.jpg")}
              text="Just a really long descrptioton of thos music like dammmnnnnnnn this bih long"
              label="Music"
              path="/services"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Just a really long descrptioton of thos music like dammmnnnnnnn this bih long"
              label="Music"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg")}
              text="Just a really long descrptioton of thos music like dammmnnnnnnn this bih long"
              label="Music"
              path="/services"
            />
            <CardItem
              src={require("../images/img-4.jpg")}
              text="Just a really long descrptioton of thos music like dammmnnnnnnn this bih long"
              label="Music"
              path="/services"
            />
            <CardItem
              src={require("../images/img-6.jpg")}
              text="Just a really long descrptioton of thos music like dammmnnnnnnn this bih long"
              label="Music"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
