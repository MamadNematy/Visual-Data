import React, { useState } from "react";
import "./PortfolioSection.css";

const categories = ["همه", "تحلیل", "داشبورد", "مدل‌سازی", "آمار"];

const portfolioItems = [
  {
    id: 1,
    title: "تحلیل فروش",
    category: "تحلیل",
    img: "/assets/images/portfolio/analytics1.jpg",
  },
  {
    id: 2,
    title: "داشبورد KPI",
    category: "داشبورد",
    img: "/assets/images/portfolio/dashboard1.jpg",
  },
  {
    id: 3,
    title: "مدل پیش‌بینی",
    category: "مدل‌سازی",
    img: "/assets/images/portfolio/model1.jpg",
  },
  {
    id: 4,
    title: "مصورسازی بازار",
    category: "داشبورد",
    img: "/assets/images/portfolio/viz1.jpg",
  },
  {
    id: 5,
    title: "تحلیل ریزداده",
    category: "تحلیل",
    img: "/assets/images/portfolio/detail1.jpg",
  },
  {
    id: 6,
    title: "آمار رفتار کاربر",
    category: "آمار",
    img: "/assets/images/portfolio/stats1.jpg",
  },
  {
    id: 7,
    title: "تحلیل شبکه اجتماعی",
    category: "تحلیل",
    img: "/assets/images/portfolio/social-analytics.jpg",
  },
  {
    id: 8,
    title: "مدل‌سازی ریسک مالی",
    category: "مدل‌سازی",
    img: "/assets/images/portfolio/financial-risk.jpg",
  },
  {
    id: 9,
    title: "داشبورد منابع انسانی",
    category: "داشبورد",
    img: "/assets/images/portfolio/hr-dashboard.jpg",
  },
  {
    id: 10,
    title: "تحلیل کمپین بازاریابی",
    category: "آمار",
    img: "/assets/images/portfolio/marketing-campaign.jpg",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredItems =
    activeCategory === "همه"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">نمونه‌کارهای ما را بررسی کنید</h2>
      <div className="portfolio-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
