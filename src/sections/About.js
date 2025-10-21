import React from "react";
import styles from "./About.module.css";

/**
 * About Section - Optional section showcasing team/company info
 * To use: Import in App.js and add between sections
 */
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.label}>About Us</div>
            <h2 className={styles.title}>We Transform Ideas Into Reality</h2>
            <p className={styles.description}>
              Freeylancy is a design and development agency passionate about
              creating exceptional digital experiences. We combine creative
              design with technical expertise to build products that users love.
            </p>
            <p className={styles.description}>
              Our team specializes in modern web and mobile technologies,
              bringing together design thinking and engineering excellence to
              deliver solutions that drive business growth.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Satisfaction</div>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            {/* Add your team photo or office image here */}
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>👥</span>
              <p className={styles.placeholderText}>Add your team photo here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
