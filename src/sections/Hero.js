import React from "react";
import Button from "../components/Button";
import { technologies } from "../data/content";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Design & Development Agency</div>

          <h1 className={styles.title}>
            Design. Build.
            <br />
            Deliver.
          </h1>

          <p className={styles.subtitle}>
            We transform ideas into exceptional digital experiences. From
            concept to launch, we handle design, development, and deployment of
            websites and mobile applications.
          </p>

          <div className={styles.ctas}>
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Project
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => scrollToSection("work")}
            >
              View Our Work
            </Button>
          </div>

          <div className={styles.technologies}>
            <div className={styles.techLabel}>Technologies We Use</div>
            <div className={styles.techGrid}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        onClick={() => scrollToSection("services")}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default Hero;
