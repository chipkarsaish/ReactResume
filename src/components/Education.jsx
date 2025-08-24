import React from 'react';
import styles from './Education.module.css';

function Education() {
  return (
    <div className={styles.eduSection}>
      <h3 className={styles.heading}>Education</h3>
      <div className={styles.eduBlock}>
        <div className={styles.eduItem}>
          <div className={styles.eduMain}>HSC Certification</div>
          <div className={styles.eduInstitute}>Ramanand Arya D.A.V Collage, Bhandup</div>
          <div className={styles.eduYear}>2021 - 2023</div>
        </div>
        <div className={styles.eduItem}>
          <div className={styles.eduMain}>BE in Artificial Intelligence & Data Science Engineering (Third Year)</div>
          <div className={styles.eduInstitute}>Datta Meghe College of Engineering, Airoli</div>
          <div className={styles.eduYear}>2023 - Present</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
