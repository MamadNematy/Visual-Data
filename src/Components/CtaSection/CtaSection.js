import React from "react";
import "./CtaSection.css";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <h2>فراخوانی برای اقدام</h2>
        <p>
          تصمیم‌گیری بر پایه داده، آینده‌نگری را ممکن می‌سازد. ما به شما کمک
          می‌کنیم مسئولیت‌پذیرتر، دقیق‌تر و هوشمندتر تصمیم بگیرید.
        </p>
        <button className="cta-btn">فراخوانی برای اقدام</button>
      </div>
    </section>
  );
}
