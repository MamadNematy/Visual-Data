import React from "react";
import "./CountSection.css";

export default function CountSection() {
  return (
    <section className="count-section">
      <div className="count-text">
        <h2>شایسته‌ترین لذت را به هر حال ارائه می‌دهد</h2>
        <p>
          ما در Visual Data به کمک تحلیل‌های دقیق، داده‌ها را به بینش‌های قابل
          استفاده تبدیل می‌کنیم. تجربه، تخصص و رضایت مشتریان، دلایل اصلی اعتماد
          به ماست.
        </p>

        <div className="count-grid">
          <div className="count-box">
            <i className="fas fa-project-diagram"></i>
            <h3>۸۵</h3>
            <p>پروژه تحلیل داده موفق در صنایع مختلف</p>
          </div>
          <div className="count-box">
            <i className="fas fa-smile"></i>
            <h3>۶۵</h3>
            <p>مشتری رضایتمند با گزارش‌های سفارشی</p>
          </div>
          <div className="count-box">
            <i className="fas fa-award"></i>
            <h3>۲۰</h3>
            <p>جایزه و تقدیرنامه در حوزه هوش تجاری</p>
          </div>
          <div className="count-box">
            <i className="fas fa-briefcase"></i>
            <h3>۳۵</h3>
            <p>سال تجربه تجمیعی تیم در تحلیل داده</p>
          </div>
          <div className="count-box">
            <i className="fas fa-database"></i>
            <h3>۱۵۰</h3>
            <p>منبع داده ساختاریافته و نیم‌ساختاریافته بررسی‌شده</p>
          </div>
          <div className="count-box">
            <i className="fas fa-globe"></i>
            <h3>۱۲</h3>
            <p>مشارکت بین‌المللی در پروژه‌های تحقیقاتی و صنعتی</p>
          </div>
        </div>
      </div>

      <div className="count-image">
        <img
          src="/assets/images/meeting/clients-meeting.jpg"
          alt="team visual data"
        />
      </div>
    </section>
  );
}
