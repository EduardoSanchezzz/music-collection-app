import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Favourites } from "./components/pages/Favourites";
import { Featured } from "./components/pages/Featured";

function App() {
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
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
