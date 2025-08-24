import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className={styles.expSection}>
      <h3 className={styles.heading}>Experience</h3>
      <div className={styles.expBlock}>
        <span className={styles.role}>Python Developer Intern</span>
        <span className={styles.company}>
          CODTECH IT SOLUTIONS PVT.LTD
        </span>
        <span className={styles.duration}>
          10th June 2025 - 10th July 2025
        </span>
        <ul className={styles.expList}>
          <li>Developed a Python script to fetch real-time data from a public API and created insightful visualizations using Matplotlib and Seaborn.</li>
          <li>Automated the generation of professional PDF reports by reading and analyzing data from external files using libraries like FPDF or ReportLab.</li>
          <li>Designed and implemented a functional AI chatbot using NLP libraries such as NLTK or spaCy to answer user queries intelligently.</li>
          <li>Built a predictive machine learning model using scikit-learn to classify data (e.g., for spam detection), including training, testing, and evaluation.</li>
          <li>Followed best coding practices by maintaining clean, well-documented code and systematically uploading all tasks to a dedicated GitHub repository.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
