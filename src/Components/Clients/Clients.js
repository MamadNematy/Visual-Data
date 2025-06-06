import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Clients.css";

const logos = [
  "/assets/clients/bi.svg",
  "/assets/clients/google-cloud-1.svg",
  "/assets/clients/graphql-wtf-1.svg",
  "/assets/clients/mongolab.svg",
  "/assets/clients/power-83.svg",
  "/assets/clients/tableau-logo-1.svg",
  "/assets/clients/belimo.svg",
  "/assets/clients/spss-1.svg",
  "/assets/clients/nodejs-1.svg",
  "/assets/clients/microsoft-sql-server-1.svg",
  "/assets/clients/tech-data.svg",
];

export default function Clients() {
  return (
    <div className="clients-swiper-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        dir="rtl"
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
          1440: { slidesPerView: 7, spaceBetween: 20 },
        }}
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`client-${i}`} className="client-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
