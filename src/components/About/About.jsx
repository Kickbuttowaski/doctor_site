import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>Fill your details</h1>
        <div className={style.field}>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className={style.field}>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className={style.field}>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className={style.field}>
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className={style.field}>
          <label>Additional Info</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className={style.contact}>
          <div>
            <h1>Address</h1>
            <span>
              No 26, Sumeru square, Kanaka Nagar, <br /> Agaram Main road ,
              Selaiyur,
              <br />
              Chennai -600073
            </span>
          </div>
          <div>
            <h1>Contact us</h1>
            <span>
              044-48557830/ 8015162649/ 7550187731 <br />{" "}
              healthpluscenter2016@gmail.com
            </span>
          </div>
        </div>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0473547178653!2d80.13993111482132!3d12.904676590899752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzE2LjgiTiA4MMKwMDgnMzEuNiJF!5e0!3m2!1sen!2sin!4v1602968141843!5m2!1sen!2sin"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
