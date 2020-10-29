import React, { useState } from "react";
import style from "./Special.module.css";
import cardio from "../../utils/svg/cardio.svg";
import physio from "../../utils/svg/009-psychiatrist.svg";
import onco from "../../utils/svg/021-oncologist.svg";
import pead from "../../utils/svg/018-pediatrician.svg";
import therapist from "../../utils/svg/006-therapist.svg";
import nurse from "../../utils/svg/029-nurse.svg";
import ortho from "../../utils/svg/005-orthopedist.svg";
import gastro from "../../utils/svg/049-surgeon.svg";
import general from "../../utils/svg/038-nurse.svg";
import gyno from "../../utils/svg/015-gynecologist.svg";
import obste from "../../utils/svg/039-gynecologist.svg";
import { withRouter } from "react-router-dom";
//import
const data = [
  { name: "General Surgeon", icon: general },
  { name: "ENT surgeon", icon: gastro },
  { name: "Cardiologist", icon: cardio },
  { name: "Psychiatrists", icon: physio },
  { name: "pediatrician", icon: pead },
  { name: "physiotherapist", icon: therapist },
  { name: "Gastroenterologist", icon: nurse },
  { name: "Surgical oncologist", icon: onco },
  { name: "Emergency physicians", icon: nurse },
  { name: "OBSTETRICS", icon: obste },
  { name: "Gynecology", icon: gyno },
  { name: "Spine and Orthopaedic clinic", icon: ortho },
];
const Special = ({ history }) => {
  const [content, setContent] = useState("GENERAL SURGEON");
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        {data.map((obj) => {
          return (
            <div
              className={style.capsule}
              onClick={() => {
                history.push(`/specialties/${obj.name.trim().toLowerCase()}`);
                // setContent(obj.name.toUpperCase());
              }}
            >
              <img src={obj.icon}></img>
              {obj.name.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Special);
/* <span>General medicine</span>
          <span>General Surgeon</span>
          <span>ENT surgeon</span>
          <span>Cardiologist</span>    
          <span>Psychiatrists</span>
          <span>pediatrician</span>
          <span>physiotherapist</span>
          <span>Gastroenterologist</span>
          <span>Surgical oncologist</span>
          <span>Emergency physicians</span>
          <span>Spine and Orthopaedic clinic</span> */
