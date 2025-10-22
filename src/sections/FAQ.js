import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqKeys = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("faq.subtitle")}</div>
          <h2 className={styles.title}>{t("faq.title")}</h2>
          <p className={styles.description}>{t("faq.description")}</p>
        </div>

        <div className={styles.accordionContainer}>
          {faqKeys.map((key, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.accordionQuestion}>
                  {t(`faq.items.${key}.question`)}
                </span>
                <span className={styles.accordionIcon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.accordionContent} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <div className={styles.accordionAnswer}>
                  {t(`faq.items.${key}.answer`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
