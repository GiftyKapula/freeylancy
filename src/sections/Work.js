import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";
import { projects } from "../data/content";
import styles from "./Work.module.css";

const Work = () => {
  const { t } = useLanguage();

  const projectKeys = ["livelett", "sytesnap", "saccord"];

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("work.subtitle")}</div>
          <h2 className={styles.title}>{t("work.title")}</h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const projectKey = projectKeys[index];
            return (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img
                    src={project.image}
                    alt={`${project.name} - ${t(
                      `work.projects.${projectKey}.category`
                    )}`}
                    loading="lazy"
                  />
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectType}>{project.type}</span>
                    <span className={styles.projectCategory}>
                      {t(`work.projects.${projectKey}.category`)}
                    </span>
                  </div>

                  <h3 className={styles.projectName}>
                    {t(`work.projects.${projectKey}.title`)}
                  </h3>

                  <p className={styles.projectDescription}>
                    {t(`work.projects.${projectKey}.description`)}
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
                      {t("work.viewProject")}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
