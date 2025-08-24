import React from "react";
import styles from "./Skills.module.css";

const skillsLeft = ["Python", "Flask", "SQL lite", "Pandas"];
const skillsRight = ["HTML", "SQL", "Numpy", "Data Visualization"];

function Skills() {
  return (
    <div className={styles.skillSection}>
      <h3 className={styles.heading}>Skills</h3>
      <div className={styles.skillsGrid}>
        <div className={styles.skillsColumn}>
          {skillsLeft.map(skill => (
            <span key={skill} className={styles.skillChip}>{skill}</span>
          ))}
        </div>
        <div className={styles.skillsColumn}>
          {skillsRight.map(skill => (
            <span key={skill} className={styles.skillChip}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
