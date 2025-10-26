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
                  in
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${t("contact.info.phone").replace(
                    /[\s-]/g,
                    ""
                  )}`}
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wa
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
                  tg
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${t("contact.info.phone").replace(
                    /[\s-]/g,
                    ""
                  )}`}
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wa
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
                  tg
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
                <a
                  href={`https://wa.me/${t("contact.info.phone").replace(
                    /[\s-]/g,
                    ""
                  )}`}
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 {t("contact.info.phone")}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${t("contact.info.phoneAlt").replace(
                    /[\s-]/g,
                    ""
                  )}`}
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 {t("contact.info.phoneAlt")}
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
