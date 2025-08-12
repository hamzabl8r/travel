import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MainSearch from "./Components/MainSearch";
import FeedbackSection from "./Components/FeedbackSection";
import Services from "./Components/Services";
import HotelList from "./Components/HotelList";
import Card from "./Components/Card";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <HeroSection />
      <MainSearch />
      <HotelList />
      <Card />
      <Services />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default App;
