import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
        <div className={styles.leftGroup}>
          <div className={styles.logo}>Freeylancy</div>

          <div className={styles.langActions}>
            <button
              className={`${styles.langBtn} ${
                language === "en" ? styles.active : ""
              }`}
              onClick={() => setLanguage("en")}
              aria-label="Set language to English"
            >
              EN
            </button>
            <button
              className={`${styles.langBtn} ${
                language === "ru" ? styles.active : ""
              }`}
              onClick={() => setLanguage("ru")}
              aria-label="Set language to Russian"
            >
              RU
            </button>
          </div>
        </div>

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
          {/* CTA inside nav stays the same */}
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
