import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-logo">
        Visual Data
        <img src="/assets/logos/Main-Logo.png" alt="VD-logo" />
      </h1>
      <ul>
        <li>خانه</li>
        <li>درباره ما</li>
        <li>خدمات</li>
        <li>نمونه کار</li>
        <li>تیم</li>
        <li>لیست کشویی ▼</li>
        <li>تماس با ما</li>
      </ul>
      <li>شروع</li>
    </div>
  );
}
