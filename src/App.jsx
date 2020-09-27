import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Favourites } from "./components/pages/Favourites";
import { Featured } from "./components/pages/Featured";
import { Snapchat } from "./components/pages/Snapchat";

const loader1 = document.querySelector(".loader-ani");
const loader2 = document.querySelector(".loader-bg");

const hideLoader = () => {
  loader1.classList.add("loader--hideani");
  loader2.classList.add("loader--hidebg");
};

class App extends Component {
  componentDidMount() {
    hideLoader();
  }
  render() {
    return (
      <React.Fragment>
        <Router basename="/music-collection-app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/featured" component={Featured} />
            <Route path="/about" component={About} />
            <Route path="/snapchat" component={Snapchat} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
