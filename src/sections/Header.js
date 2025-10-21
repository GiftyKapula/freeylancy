import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "work")}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <Button
            variant="primary"
            size="small"
            className={styles.cta}
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
