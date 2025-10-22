import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";
import { technologies } from "../data/content";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useLanguage();

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
          <div className={styles.eyebrow}>{t("hero.eyebrow")}</div>

          <h1 className={styles.title}>{t("hero.title")}</h1>

          <p className={styles.subtitle}>{t("hero.description")}</p>

          <div className={styles.ctas}>
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.startProject")}
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => scrollToSection("work")}
            >
              {t("hero.viewWork")}
            </Button>
          </div>

          <div className={styles.technologies}>
            <div className={styles.techLabel}>
              {t("hero.technologiesLabel")}
            </div>
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
