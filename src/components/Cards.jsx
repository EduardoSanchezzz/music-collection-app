import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>MY FAVOURITES</h1>
      <div id="scrollTo"></div>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-1.jpg")}
              albumName="Rodeo"
              artistName="Travi$ Scott"
              label="2015"
              path="/song-info"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              albumName="Die Lit"
              artistName="Playboi Carti"
              label="2018"
              path="/song-info"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg")}
              albumName="Echoes of Silence"
              artistName="The Weeknd"
              label="2011"
              path="/song-info"
            />
            <CardItem
              src={require("../images/img-4.jpg")}
              albumName="IGOR"
              artistName="Tyler, The Creator"
              label="2019"
              path="/song-info"
            />
            <CardItem
              src={require("../images/img-6.jpg")}
              albumName="Lil Uzi Vert Vs. The World"
              artistName="Lil Uzi Vert"
              label="2016"
              path="/song-info"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
