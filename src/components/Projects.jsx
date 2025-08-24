import React from "react";
import styles from "./Projects.module.css";

const projects = [
  
  {
    title: "AI Chatbot",
    description:
      "Built a natural language processing chatbot using spaCy and NLTK. Integrated the bot into a web app using Flask for instant Q&A and intelligent conversation handling.",
    tags: ["NLP", "Python", "Flask", "spaCy", "NLTK"],
    link: "https://github.com/chipkarsaish/ai-chatbot"
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Designed an interactive dashboard with Streamlit to visualize complex datasets, enabling quick insights for business users. Used Matplotlib and Seaborn for advanced analytics.",
    tags: ["Data Visualization", "Streamlit", "Matplotlib", "Seaborn"],
    link: "https://github.com/chipkarsaish/data-viz-dashboard"
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <div className={styles.projectSection}>
      <h3 className={styles.heading}>Projects</h3>
      <div className={styles.projectsList}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectCard}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectDesc}>{project.description}</div>
            <div className={styles.tagsRow}>
              {project.tags.map(tag => (
                <span className={styles.tagChip} key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
