import React from "react";
import style from "./Home.module.css";
import mainImg from "../../utils/mainImg.jpg";
const Home = () => {
  return (
    <div className={style.container}>
      <div
        className={style.bgImage}
        style={{
          backgroundImage: `url(${mainImg})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className={style.bgtext}>
        <label className={style.headertext}>
          WE ARE COMMITED TO YOUR HEALTH
        </label>
        <label className={style.subtext}>We are available 24/7</label>
        <div className={style.button}>Book Appointment</div>
      </div>
    </div>
  );
};

export default Home;
