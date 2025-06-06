import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="feature-item">
          <div className="icon-box">
            <i className="fas fa-bullhorn"></i>
          </div>
          <div>
            <h4>تحلیل داده‌های پیچیده بدون نیاز به برنامه‌نویسی</h4>
            <p>
              ما پلتفرمی فراهم کرده‌ایم که کاربران حتی بدون دانش فنی هم بتوانند
              داده‌های خود را بررسی، فیلتر و تحلیل کنند.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon-box">
            <i className="fas fa-gem"></i>
          </div>
          <div>
            <h4>داشبوردهای بصری و تعاملی</h4>
            <p>
              داشبوردهایی شفاف و قابل تنظیم که در یک نگاه تصویری دقیق از وضعیت
              کسب‌وکار، فروش یا مخاطبان ارائه می‌دهد.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon-box">
            <i className="fas fa-image"></i>
          </div>
          <div>
            <h4>مدل‌سازی پیش‌بینی برای تصمیم‌های هوشمند</h4>
            <p>
              با کمک الگوریتم‌های یادگیری ماشین، روندها را قبل از وقوع شناسایی
              کرده و تصمیمات آینده‌نگرانه اتخاذ کنید.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon-box">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div>
            <h4>امنیت داده و محرمانگی کامل</h4>
            <p>
              ما از استانداردهای رمزنگاری و ذخیره‌سازی امن استفاده می‌کنیم تا
              اطلاعات شما همیشه محفوظ بماند.
            </p>
          </div>
        </div>
      </div>

      <div className="features-image">
        <img src="/assets/images/Features/Features.jpg" alt="features" />
      </div>
    </section>
  );
}
