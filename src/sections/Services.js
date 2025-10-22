import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/content";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useLanguage();

  const serviceKeys = [
    "design",
    "webDev",
    "mobileDev",
    "noCode",
    "data",
    "prototyping",
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("services.subtitle")}</div>
          <h2 className={styles.title}>{t("services.title")}</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const serviceKey = serviceKeys[index];
            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>
                    {t(`services.items.${serviceKey}.title`)}
                  </h3>
                  <div className={styles.tools}>
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className={styles.tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.serviceDescription}>
                  {t(`services.items.${serviceKey}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
