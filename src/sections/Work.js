import React from "react";
import Button from "../components/Button";
import { projects } from "../data/content";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Our Work</div>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore our recent work spanning mobile apps, web applications, and
            custom website development.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.category}`}
                  loading="lazy"
                />
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectType}>{project.type}</span>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                </div>

                <h3 className={styles.projectName}>{project.name}</h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  <Button
                    variant="primary"
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View {project.platform}
                  </Button>
                  <Button
                    variant="ghost"
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
