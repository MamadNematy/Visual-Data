import React from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="section-title">
        <h2>با ما تماس بگیرید</h2>
        <p>تماس با ما</p>
      </div>

      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.319577236712!2d52.46645007399601!3d29.68151304136056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb210dd3aba35f5%3A0x61b2662ca0f4579c!2z2YXYudin2YTbjCDYotio2KfYr9iMINi024zYsdin2LLYjCDYp9iz2KrYp9mGINmB2KfYsdiz2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1749152964380!5m2!1sfa!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="form-contact-wrapper">
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="نام" />
            <input type="email" placeholder="ایمیل" />
          </div>
          <input type="text" placeholder="عنوان" />
          <textarea placeholder="پیام"></textarea>
          <button type="submit">ارسال پیام</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>مکان:</strong>
              <p>شیراز، خیابان معالی آباد</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <strong>ایمیل:</strong>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <strong>شماره تماس:</strong>
              <p>۰۱۲۳۴۵۶۷۸۹</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
