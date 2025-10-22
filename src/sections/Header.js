import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Freeylancy</div>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <a
                href="#services"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "services")}
              >
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "work")}
              >
                {t("nav.work")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "about")}
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "contact")}
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === "en" ? "RU" : "EN"}
          </button>
          <Button
            variant="primary"
            size="small"
            className={styles.cta}
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            {t("nav.getStarted")}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
