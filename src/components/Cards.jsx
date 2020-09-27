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
              path="https://music.apple.com/us/album/rodeo-expanded-edition/1456176981"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              albumName="Die Lit"
              artistName="Playboi Carti"
              label="2018"
              path="https://music.apple.com/us/album/die-lit/1381553184"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg")}
              albumName="Echoes of Silence"
              artistName="The Weeknd"
              label="2011"
              path="https://music.apple.com/us/album/echoes-of-silence/1445890212"
            />
            <CardItem
              src={require("../images/img-4.jpg")}
              albumName="IGOR"
              artistName="Tyler, The Creator"
              label="2019"
              path="https://music.apple.com/us/album/igor/1463409338"
            />
            <CardItem
              src={require("../images/img-6.jpg")}
              albumName="Lil Uzi Vert Vs. The World"
              artistName="Lil Uzi Vert"
              label="2016"
              path="https://music.apple.com/us/album/lil-uzi-vert-vs-the-world/1116298635"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
