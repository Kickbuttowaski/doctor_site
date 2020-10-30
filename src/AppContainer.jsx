import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from "./AppContainer.module.css";
import Facility from "./components/Facility/Facility";
import Special from "./components/Special/Special";
import SpecialDetail from "./components/SpecialDetail/SpecialDetail";
const AppContainer = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className={style.container}>
          <Header />
        </div>
        <Route
          path="/specialties/:specality"
          component={(props) => {
            return <SpecialDetail {...props} />;
          }}
        />
        <Route
          exact
          path="/home"
          component={(props) => {
            return (
              <React.Fragment>
                <div id="home">
                  <Home />
                </div>
                <div id="facility">
                  <Facility />
                </div>
                <div id="speciality">
                  <Special />
                </div>
                <div id="about">
                  <About />
                </div>
              </React.Fragment>
            );
          }}
        />
        <Route exact path="/">
          <Redirect to="/doctor_site/home" />
        </Route>
      </div>
    </Router>
  );
};

export default AppContainer;
