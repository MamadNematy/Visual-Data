import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">خدمات ما را بررسی کنید</h2>
      <div className="services-grid">
        <div className="service-box">
          <i className="fas fa-database icon"></i>
          <h4>یکپارچه‌سازی داده</h4>
          <p>
            تجمیع داده‌ها از منابع مختلف برای ایجاد یک منبع قابل اطمینان و
            تحلیلی.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-chart-line icon"></i>
          <h4>تحلیل پیش‌بینانه</h4>
          <p>
            پیش‌بینی رفتارها و روندها با استفاده از مدل‌های آماری و یادگیری
            ماشین.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-chart-pie icon"></i>
          <h4>مصورسازی داده</h4>
          <p>
            ایجاد نمودارها و داشبوردهای تعاملی برای درک سریع‌تر و تصمیم‌سازی
            بهتر.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-shield-alt icon"></i>
          <h4>امنیت اطلاعات</h4>
          <p>
            حفاظت از داده‌ها در برابر دسترسی غیرمجاز و اطمینان از محرمانگی کامل.
          </p>
        </div>
        <div className="service-box">
          <i className="fas fa-code icon"></i>
          <h4>مدل‌سازی سفارشی</h4>
          <p>
            طراحی و پیاده‌سازی مدل‌های تحلیلی متناسب با نیاز دقیق کسب‌وکار شما.
          </p>
        </div>
      </div>
    </section>
  );
}
