import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>قدرت تصمیم گیری هوشمند با</h1>
          <h2 className="highlight">Visual Data</h2>
          <p>
            در دنیای پرشتاب امروز، داده‌ها قلب تپنده‌ی کسب‌وکارها هستند. ما با
            ترکیب تخصص آماری، هوش مصنوعی و علم داده، راه‌حل‌هایی ارائه می‌دهیم
            که تصمیم‌گیری را متکی بر شواهد، سریع و مطمئن می‌سازد.
          </p>
        </div>
        <div className="hero-services">
          <div className="service-box">
            <i className="fas fa-desktop"></i>
            <p>اطلاعات ذخیره‌شده</p>
          </div>
          <div className="service-box">
            <i className="fas fa-chart-bar"></i>
            <p>نمودار کیفی</p>
          </div>
          <div className="service-box">
            <i className="fas fa-calendar-alt"></i>
            <p>نمونه کارها</p>
          </div>
          <div className="service-box">
            <i className="fas fa-database"></i>
            <p>اطلاعات ذخیره شده</p>
          </div>
        </div>
      </div>
    </div>
  );
}
