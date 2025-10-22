import React from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.toastContent}>
        <span className={styles.toastIcon}>
          {type === "success" ? "✓" : "✕"}
        </span>
        <p className={styles.toastMessage}>{message}</p>
      </div>
      <button className={styles.toastClose} onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
