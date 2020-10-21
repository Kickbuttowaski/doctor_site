import React from "react";
import style from "./Header.module.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../utils/logo.jpeg";

const Header = () => {
  return (
    <Router>
      <div className={style.container}>
        <div className={style.subcontainer1}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "24px" }}
              icon={faMapMarkerAlt}
            />
            <span> Chennai, Selaiyur</span>
          </div>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "24px" }}
              icon={faPhoneAlt}
            />
            <span>044-48557830</span>
          </div>
        </div>
        <div className={style.subcontainer2}>
          <img src={logo} className={style.logo}></img>
          {/* <h1 className={style.logo}>Health Plus</h1> */}
          <input
            type="checkbox"
            id="nav-toggle"
            className={style["nav-toggle"]}
          />
          <nav>
            {" "}
            <div style={{ width: "200px" }}></div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#facility">Facilities</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" className={style["nav-toggle-label"]}>
            <span></span>
          </label>
        </div>
      </div>
    </Router>
  );
};

export default Header;
