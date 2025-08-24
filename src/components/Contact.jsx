import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactSection}>
      <a
        href="https://github.com/chipkarsaish"
        className={styles.contactBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/chipkarsaish"
        className={styles.contactBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Contact;
