import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-newsletter">
          <h4>خبرنامه ما</h4>
          <p>
            با این حال، هیچ یک از چیزهایی که من می‌خواهم تقصیر بزرگی ما نخواهد
            بود
          </p>
          <input type="text" placeholder="ایمیل خود را وارد کنید" />
          <button>دنبال کردن</button>
        </div>

        <div className="footer-column">
          <h4>خدمات ما</h4>
          <ul>
            <li>طراحی وب سایت</li>
            <li>توسعه وب</li>
            <li>مدیریت تولید</li>
            <li>بازار یابی</li>
            <li>طراحی گرافیک</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>لینک های مفید</h4>
          <ul>
            <li>خانه</li>
            <li>درباره ی ما</li>
            <li>خدمات</li>
            <li>شرایط استفاده از خدمات</li>
            <li>سیاست حفظ حریم خصوصی</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Visual Data</h4>
          <p>شیراز، خیابان معالی آباد</p>
          <p>تلفن : ۰۱۲۳۴۵۶۷۸۹</p>
          <p>ایمیل : info@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          همه حقوق محفوظ است &copy; Visual Data | طراحی شده توسط{" "}
          <span>
            <a className="designer" href="https://github.com/MamadNematy">
              MamadNematy
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
