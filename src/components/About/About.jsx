import React, { useState } from "react";
import style from "./About.module.css";
const About = () => {
  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "-",
    email: "-",
    phone: "",
    notes: "-",
    service: "1",
  });
  const handleUserInput = (key, value) => {
    setPayload(Object.assign({}, payload, { [key]: value }));
  };
  const handleSubmit = () => {
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "post",
      headers: new Headers({
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "chottu64@gmail.com" }] }],
        from: { email: "promods96@gmail.com" },
        subject: "Appointment",
        content: [{ type: "text/plain", value: "hello abc" }],
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>Fill your details</h1>
        <div className={style.field}>
          <label>First Name</label>
          <input
            type="text"
            value={payload.first_name}
            onChange={(e) => {
              handleUserInput("first_name", e.currentTarget.value);
            }}
          />
        </div>
        <div className={style.field}>
          <label>Last Name</label>
          <input
            type="text"
            value={payload.last_name}
            onChange={(e) => {
              handleUserInput("last_name", e.currentTarget.value);
            }}
          />
        </div>
        <div className={style.field}>
          <label>Email</label>
          <input
            type="text"
            value={payload.email}
            onChange={(e) => {
              handleUserInput("email", e.currentTarget.value);
            }}
          />
        </div>
        <div className={style.field}>
          <label>Phone</label>
          <input
            type="text"
            value={payload.phone}
            onChange={(e) => {
              handleUserInput("phone", e.currentTarget.value);
            }}
          />
        </div>
        <div className={style.field}>
          <label>Additional Info</label>
          <input
            type="text"
            value={payload.notes}
            onChange={(e) => {
              handleUserInput("notes", e.currentTarget.value);
            }}
          />
        </div>
        <div className={style.field}>
          <label>Service</label>
          <select
            onChange={(e) => {
              handleUserInput("service", e.currentTarget.value);
            }}
            value={payload.service}
          >
            <option value="1">Consulting</option>
            <option value="2">Home Service</option>
          </select>
        </div>
        <div className={style.button} onClick={handleSubmit}>
          Book Appointment
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
