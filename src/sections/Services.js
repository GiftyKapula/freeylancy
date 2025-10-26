import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/content";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useLanguage();

  // Each service object in `services` may include a `key` that maps
  // to translation entries under `services.items.<key>`.

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("services.subtitle")}</div>
          <h2 className={styles.title}>{t("services.title")}</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const serviceKey = service.key;

            // Prefer translated strings when available, otherwise fall back
            // to the content provided in `content.js`.
            let title = service.title;
            let description = service.description;

            if (serviceKey) {
              const titleKey = `services.items.${serviceKey}.title`;
              const descKey = `services.items.${serviceKey}.description`;
              const tt = t(titleKey);
              const dd = t(descKey);
              if (tt && tt !== titleKey) title = tt;
              if (dd && dd !== descKey) description = dd;
            }

            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>{title}</h3>
                  <div className={styles.tools}>
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className={styles.tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.serviceDescription}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
