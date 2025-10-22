import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let isPaused = false;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Seamless loop: when reaching halfway point, reset to start
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const testimonialKeys = [
    "client1",
    "client2",
    "client3",
    "client4",
    "client5",
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{t("testimonials.subtitle")}</div>
          <h2 className={styles.title}>{t("testimonials.title")}</h2>
        </div>

        <div className={styles.scrollWrapper}>
          <div ref={scrollRef} className={styles.scrollContainer}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonialKeys, ...testimonialKeys].map((key, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quote}>
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 32V18.6667C0 13.1556 1.42222 8.62222 4.26667 5.06667C7.2 1.51111 11.3778 0 16.8 0V5.33333C14.2222 5.33333 12.0444 6.22222 10.2667 8C8.57778 9.68889 7.73333 11.9111 7.73333 14.6667H17.0667V32H0ZM22.9333 32V18.6667C22.9333 13.1556 24.3556 8.62222 27.2 5.06667C30.1333 1.51111 34.3111 0 39.7333 0V5.33333C37.1556 5.33333 34.9778 6.22222 33.2 8C31.5111 9.68889 30.6667 11.9111 30.6667 14.6667H40V32H22.9333Z"
                      fill="#E6EEFF"
                    />
                  </svg>
                </div>

                <p className={styles.testimonialText}>
                  {t(`testimonials.items.${key}.text`)}
                </p>

                <div className={styles.client}>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientName}>
                      {t(`testimonials.items.${key}.name`)}
                    </div>
                    <div className={styles.clientRole}>
                      {t(`testimonials.items.${key}.role`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
