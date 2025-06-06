import React from "react";
import Navbar from "./Components/Header/Navbar/Navbar";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Components/About/About";
import Clients from "./Components/Clients/Clients";
import Features from "./Components/Features/Features";
import Services from "./Components/Services/Services";
import CtaSection from "./Components/CtaSection/CtaSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import CountSection from "./Components/CountSection/CountSection";
import Swiper from "./Components/Swiper/Swiper";
import TeamSection from "./Components/TeamSection/TeamSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ScrollToTop />
      <About />
      <Clients />
      <Features />
      <Services />
      <CtaSection />
      <PortfolioSection />
      <CountSection />
      <Swiper />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
