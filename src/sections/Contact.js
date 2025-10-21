import React, { useState } from "react";
import { companyInfo } from "../data/content";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.label}>Get In Touch</div>
            <h2 className={styles.title}>Let's Work Together</h2>
            <p className={styles.description}>
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll respond within 24 hours.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Email</div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className={styles.contactValue}
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>Phone</div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className={styles.contactValue}
                >
                  {companyInfo.phone}
                </a>
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
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your name"
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
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
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
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.full}`}>
                <label htmlFor="service" className={styles.formLabel}>
                  Service of Interest
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
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
