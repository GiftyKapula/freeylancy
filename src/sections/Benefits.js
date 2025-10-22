import React from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Benefits.module.css";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      number: "01",
      key: "experience",
      icon: "⚡",
    },
    {
      number: "02",
      key: "quality",
      icon: "✨",
    },
    {
      number: "03",
      key: "support",
      icon: "🤝",
    },
    {
      number: "04",
      key: "results",
      icon: "📈",
    },
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("benefits.subtitle")}</div>
          <h2 className={styles.title}>{t("benefits.title")}</h2>
          <p className={styles.description}>{t("benefits.description")}</p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.key} className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <span className={styles.benefitNumber}>{benefit.number}</span>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
              </div>

              <h3 className={styles.benefitTitle}>
                {t(`benefits.items.${benefit.key}.title`)}
              </h3>

              <p className={styles.benefitDescription}>
                {t(`benefits.items.${benefit.key}.description`)}
              </p>

              <ul className={styles.benefitList}>
                {t(`benefits.items.${benefit.key}.points`, {
                  returnObjects: true,
                }).map((point, index) => (
                  <li key={index} className={styles.benefitPoint}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>{t("benefits.cta.title")}</h3>
            <p className={styles.ctaText}>{t("benefits.cta.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
