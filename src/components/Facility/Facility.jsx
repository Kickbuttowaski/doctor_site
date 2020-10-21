import React from "react";
import style from "./Facility.module.css";
import {
  faUserMd,
  faAmbulance,
  faHospital,
  faHome,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Facility = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.capsule}>a</div> */}
      <h1 className={style.heading}>Why us?</h1>
      <div className={style.groupcapsule}>
        <div className={style.capsule}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "48px" }}
              icon={faUserMd}
            />
          </div>
          <h2>Qualified doctors</h2>
          <span className={style.capsuletext}>
            Our doctors have a wide range of clinical experience ranging from
            newly qualified junior doctors to senior consultant.
          </span>
        </div>
        <div className={style.capsule}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "48px" }}
              icon={faAmbulance}
            />
          </div>
          <h2>Emergency care</h2>
          <span className={style.capsuletext}>
            Our centers provide convenient and high quality care for a variety
            of common illness and injuries.
          </span>
        </div>
        <div className={style.capsule}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "48px" }}
              icon={faHospital}
            />
          </div>
          <h2>24 Hours Service</h2>
          <span className={style.capsuletext}>
            Our team is available for 24/7, We always prepared any emergency
            situation with 10 ambulances.
          </span>
        </div>
        <div className={style.capsule}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "48px" }}
              icon={faHome}
            />
          </div>
          <h2>Home service</h2>
          <span className={style.capsuletext}>
            Service at your door step.
            <ul>
              <li>House visit doctors</li>
              <li>Home collection service for lab</li>
              <li>Home care nursing service</li>
            </ul>
          </span>
        </div>
        <div className={style.capsule}>
          <div>
            <FontAwesomeIcon
              style={{ color: "#00587a", fontSize: "48px" }}
              icon={faFlask}
            />
          </div>
          <h2>Lab & Pharmacy</h2>
          <span className={style.capsuletext}>
            Why bounce between lab , hospital, and pharmacy? When you can get
            all 3 in a single place.
          </span>
        </div>
      </div>
      <div>
        {/* <h1 className={style.heading}>FACILTIES</h1>
        <ul>
          <li>House visit doctors </li>
          <li>Home collection service for lab</li>
          <li>Home care nursing service </li>
          <li>All Vaccination service available</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Facility;
{
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
}
