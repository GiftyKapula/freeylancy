import React from "react";
import styles from "./Section.module.css";

/**
 * Section Component - Provides consistent spacing and styling for page sections
 * @param {string} size - 'small' | 'medium' | 'large'
 * @param {string} variant - 'light' | 'dark'
 * @param {boolean} bordered - Add bottom border
 * @param {ReactNode} children - Section content
 */
const Section = ({
  size = "medium",
  variant,
  bordered = false,
  className = "",
  children,
  ...props
}) => {
  const sectionClasses = [
    styles.section,
    size !== "medium" && styles[size],
    variant && styles[variant],
    bordered && styles.bordered,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
};

export default Section;
