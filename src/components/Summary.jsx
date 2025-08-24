import React from 'react';
import styles from './Summary.module.css';

function Summary() {
  return (
    <div className={styles.summarySection}>
      <h3 className={styles.heading}>Professional Summary</h3>
      <p className={styles.summaryText}>
        Passionate and results-driven professional with expertise in modern web technologies and software development. Experienced in building scalable applications and leading cross-functional teams to deliver high-quality solutions. Strong problem-solving skills and commitment to continuous learning and innovation.
      </p>
    </div>
  );
}

export default Summary;
