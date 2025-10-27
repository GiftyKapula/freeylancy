import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/content";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useLanguage();

  // which service keys belong to the data-focused group
  const dataKeys = ["data", "dataAnalytics", "predictiveAI", "engineering"];
  const dataServices = services.filter((s) => dataKeys.includes(s.key));
  const generalServices = services.filter((s) => !dataKeys.includes(s.key));

  const renderCard = (service) => {
    const serviceKey = service.key;
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
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("services.subtitle")}</div>
          <h2 className={styles.title}>{t("services.title")}</h2>
        </div>

        {/* General services subheader */}
        <div className={styles.subHeader}>
          <div className={styles.label}>{t("services.subtitle")}</div>
          <h3 className={styles.generalTitle}>{t("services.devGroupTitle")}</h3>
        </div>

        <div className={styles.grid}>{generalServices.map(renderCard)}</div>

        {/* Data-focused services */}
        {dataServices.length > 0 && (
          <div className={styles.dataSection}>
            <div className={styles.subHeader}>
              <div className={styles.label}>{t("services.subtitle")}</div>
              <h3 className={styles.dataTitle}>
                {t("services.dataGroupTitle")}
              </h3>
            </div>
            <div className={styles.grid}>{dataServices.map(renderCard)}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
