import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from "./AppContainer.module.css";
import Facility from "./components/Facility/Facility";
const AppContainer = () => {
  return (
    <Router>
      <div>
        <div className={style.container}>
          <Header />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="facility">
          <Facility />
        </div>
        <div id="about">
          <About />
        </div>
      </div>
    </Router>
  );
};

export default AppContainer;
