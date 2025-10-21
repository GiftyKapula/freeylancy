import React from "react";
import styles from "./Button.module.css";

/**
 * Button Component - Swiss design inspired
 * @param {string} variant - 'primary' | 'secondary' | 'ghost'
 * @param {string} size - 'small' | 'medium' | 'large'
 * @param {boolean} fullWidth - Make button full width
 * @param {string} href - If provided, renders as link
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {ReactNode} children - Button content
 */
const Button = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  href,
  onClick,
  disabled = false,
  children,
  className = "",
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size !== "medium" && styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
