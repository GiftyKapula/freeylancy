import React from "react";
import { companyInfo } from "../data/content";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>Freeylancy</div>
            <p className={styles.brandDescription}>{companyInfo.description}</p>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  href={companyInfo.social.twitter}
                  className={styles.socialLink}
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  𝕏
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.social.linkedin}
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.social.github}
                  className={styles.socialLink}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gh
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.social.dribbble}
                  className={styles.socialLink}
                  aria-label="Dribbble"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dr
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#services" className={styles.footerLink}>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className={styles.footerLink}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className={styles.footerLink}>
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className={styles.footerLink}>
                  No-Code Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#about" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className={styles.footerLink}>
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className={styles.footerLink}
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className={styles.footerLink}
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <span className={styles.footerLink}>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Freeylancy. All rights reserved.
          </p>
          <ul className={styles.footerNav}>
            <li>
              <a href="#privacy" className={styles.footerNavLink}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className={styles.footerNavLink}>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
