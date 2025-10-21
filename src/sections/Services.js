import React from "react";
import { services } from "../data/content";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>What We Do</div>
          <h2 className={styles.title}>Comprehensive Digital Solutions</h2>
          <p className={styles.description}>
            From initial concept to final deployment, we provide end-to-end
            services to bring your digital vision to life.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.tools}>
                  {service.tools.map((tool, index) => (
                    <span key={index} className={styles.tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
