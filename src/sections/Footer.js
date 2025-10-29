import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { companyInfo } from "../data/content";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>Freeylancy</div>
            <p className={styles.brandDescription}>{t("footer.tagline")}</p>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  href={companyInfo.social.linkedin}
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1 3.86 1 4.98 2.12 4.98 3.5zM0 8.98h4.96V24H0V8.98zM8.02 8.98h4.76v2.04h.07c.66-1.25 2.28-2.55 4.7-2.55 5.02 0 5.95 3.31 5.95 7.61V24h-4.96v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24H8.02V8.98z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.phone.replace(
                    /[\s-]/g,
                    ""
                  )}`}
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.52 3.48A11.88 11.88 0 0012 .5C5.73.5.97 5.26.97 11.53c0 2.02.53 3.93 1.53 5.62L.5 23.5l6.6-1.72c1.65.9 3.55 1.37 5.4 1.37 6.27 0 11.03-4.76 11.03-11.03 0-3.02-1.17-5.85-3.01-7.64zM12 21.5c-1.6 0-3.16-.44-4.5-1.28l-.32-.19-3.92 1.02 1.05-3.82-.21-.36A8.4 8.4 0 013.6 11.5c0-4.65 3.78-8.43 8.43-8.43 2.25 0 4.36.88 5.95 2.48a8.34 8.34 0 012.46 5.95c0 4.64-3.79 8.44-8.44 8.44z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.3 14.12c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.76.91-.93 1.1-.17.19-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.13-.57.13-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.19.05-.36-.03-.5-.08-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.02 3.09 4.9 4.33 2.04.88 2.86.98 3.09.87.23-.1 1.52-.62 1.74-1.22.22-.6.22-1.12.15-1.23-.07-.11-.26-.17-.54-.31z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/mositech_chat`}
                  className={styles.socialLink}
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Telegram SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.18 7.44l-1.95 9.2c-.15.66-.56.82-1.13.52l-3.12-2.3-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.13 5.69-5.14c.25-.22-.06-.35-.39-.13l-7.04 4.42-3.04-.95c-.66-.2-.67-.66.14-.98L16.3 6.3c.58-.24 1.09.14.88 1.14z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{t("nav.services")}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#services" className={styles.footerLink}>
                  {t("services.items.design.title")}
                </a>
              </li>
              <li>
                <a href="#services" className={styles.footerLink}>
                  {t("services.items.webDev.title")}
                </a>
              </li>
              <li>
                <a href="#services" className={styles.footerLink}>
                  {t("services.items.mobileDev.title")}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{t("footer.quickLinks")}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#about" className={styles.footerLink}>
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#work" className={styles.footerLink}>
                  {t("nav.work")}
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.footerLink}>
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{t("nav.contact")}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href={`mailto:${t("contact.info.email")}`}
                  className={styles.footerLink}
                >
                  {t("contact.info.email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("contact.info.phone")}`}
                  className={styles.footerLink}
                >
                  {t("contact.info.phone")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("contact.info.phoneAlt")}`}
                  className={styles.footerLink}
                >
                  {t("contact.info.phoneAlt")}
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
            © {currentYear} Freeylancy. {t("footer.rights")}
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
