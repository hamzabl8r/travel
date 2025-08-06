import React, { useState } from "react";
import "./Style/HeroSection.css";
import { FcNext,FcPrevious } from "react-icons/fc";
import Img1 from "./assets/04ac4f07298381a8e2471e7f2a96c99c.jpg";
import Img2 from "./assets/c31240b3151238182da21d99370ba1ce.jpg";
import Img3 from "./assets/cd388a1a2cd847dc605795b4f3e2121a.jpg";
import Img5 from "./assets/Djerba.jpg";
import BookingForm from "./BookingForm";

const HeroSection = () => {
  const images = [Img1, Img2, Img3, Img5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="Travel">Travel</span>
            <span className="Ease">Ease</span>
          </h1>
          <p>is a full-service travel agency that simplifies the process of planning and booking travel.</p>
        </div>
        <div className="carousel-container">
          <div className="carousel-image-wrapper">
            <img
              src={images[currentImageIndex]}
              alt={`Carousel Image ${currentImageIndex + 1}`}
            />
          </div>
          <div className="carousel-controls">
            <button onClick={prevImage}>
              <FcPrevious />
            </button>
            <button onClick={nextImage}>
              <FcNext />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-hero">
        <BookingForm/>
      </div>
      
    </>
  );
};

export default HeroSection;
