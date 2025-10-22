import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { companyInfo } from "../data/content";
import { supabase } from "../lib/supabase";
import Toast from "../components/Toast";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            company: formData.company || null,
            email: formData.email,
            phone: formData.phone || null,
            service: formData.service || null,
            message: formData.message,
          },
        ])
        .select();

      if (error) throw error;

      // Success
      setToast({
        type: "success",
        message:
          t("contact.success") ||
          "Thank you for your inquiry! We will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setToast({
        type: "error",
        message:
          t("contact.error") ||
          "There was an error submitting your message. Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.label}>{t("contact.subtitle")}</div>
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <p className={styles.description}>{t("contact.description")}</p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <a
                  href={`mailto:${t("contact.info.email")}`}
                  className={styles.contactValue}
                >
                  {t("contact.info.email")}
                </a>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.phoneNumbers}>
                  <a
                    href={`tel:${t("contact.info.phone")}`}
                    className={styles.contactValue}
                  >
                    {t("contact.info.phone")}
                  </a>
                  <a
                    href={`tel:${t("contact.info.phoneAlt")}`}
                    className={styles.contactValue}
                  >
                    {t("contact.info.phoneAlt")}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Location</div>
                <span className={styles.contactValue}>
                  {companyInfo.address}
                </span>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  {t("contact.form.name")}{" "}
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={styles.formInput}
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  {t("contact.form.email")}{" "}
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.full}`}>
                <label htmlFor="service" className={styles.formLabel}>
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className={styles.formSelect}
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-dev">Mobile Development</option>
                  <option value="no-code">No-Code Solutions</option>
                  <option value="data">Data Solutions</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.full}`}>
                <label htmlFor="message" className={styles.formLabel}>
                  {t("contact.form.message")}{" "}
                  <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("contact.form.sending") || "Sending..."
                : t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
