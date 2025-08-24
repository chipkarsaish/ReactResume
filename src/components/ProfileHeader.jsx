import React from "react";
import styles from "./ProfileHeader.module.css";
import profilePhoto from "../assets/pic.png";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.headerBg}>
      <img src={profilePhoto} className={styles.photo} alt="Profile"/>
      <h1 className={styles.name}>Saish Chipkar</h1>
      <p className={styles.titles}>
        Data Analyst | Machine Learning | Python Developer | Third Year Engineering
      </p>
      <div className={styles.contactRow}>
        <span className={styles.contactItem}>
          <i className="fa fa-envelope"></i> chipkarsaish75@gmail.com
        </span>
        
        <span className={styles.contactItem}>
          <i className="fa fa-map-marker"></i> Mulund(W), Mumbai
        </span>
        
      </div>
      <div className={styles.tabRow}>
        <span
          className={location.pathname === "/" ? styles.activeTab : styles.tab}
          onClick={() => navigate("/")}
        >
          Resume
        </span>
        <span
          className={location.pathname === "/projects" ? styles.activeTab : styles.tab}
          onClick={() => navigate("/projects")}
        >
          Projects
        </span>
      </div>
    </div>
  );
}

export default ProfileHeader;
