// ✅ کامپوننت Swiper به سبک فول‌اسکرین بک‌گراند و اسلاید مستقل برای هر شخص

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";

const testimonials = [
  {
    name: "محمود حسینی نژاد",
    role: "کارآفرین",
    quote:
      "چه کسی برخی از مواردی را که من خواهم خواند، مطمئن بودم که برخی از آن‌ها به موقع عفو ما به دلیل تقصیر زمان، تقصیر او نیست، می‌خوانم که او می‌آید. تقصیر خواهد بود چیزی جز...",
    img: "/assets/images/testimonials/testimonials-1.jpg",
  },
  {
    name: "سارا نادری",
    role: "تحلیلگر داده",
    quote:
      "ویژوال دیتا باعث شد تحلیل و گزارش‌گیری در مجموعه ما چندین برابر سریع‌تر شود. تجربه‌ی فوق‌العاده‌ای بود.",
    img: "/assets/images/testimonials/testimonials-2.jpg",
  },
  {
    name: "رضا جوادی",
    role: "صاحب فروشگاه",
    quote:
      "زیرا اگر زحمتی کسانی که خداییان هستند را صادر کنند ، کار کسانی که مهم هستند ، چیزهایی که هیچ کدام از آنها نخواهد آمد ، و زحمت کسانی که کمترین زمان را دارند ؛ زحماتی که من کشیدم ، و عشق به کسانی که کمترین افراد خواهند بود.",
    img: "/assets/images/testimonials/testimonials-3.jpg",
  },
  {
    name: "شاهین رضایی",
    role: "فریلنسر",
    quote:
      "زیرا من آن کسی بودم که از درد رهایی می‌یافت ، درد هیچ تقصیری از بسیاری ندارد ، حداقل فوجیجات را حداقل از طریق درد ، کار می‌کند.",
    img: "/assets/images/testimonials/testimonials-4.jpg",
  },
];

export default function SwiperSlider() {
  return (
    <section
      className="full-swiper-section"
      style={{
        backgroundImage:
          "url('/assets/images/testimonials/testimonial-bg.jpg')",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${person.background})` }}
            >
              <div className="overlay">
                <img
                  src={person.img}
                  alt={person.name}
                  className="person-img"
                />
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <blockquote>{person.quote}</blockquote>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
