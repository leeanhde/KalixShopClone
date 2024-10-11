import React, { useState, useEffect } from "react";
import "./Slider.css";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    {
      src: "//kalix.vn/cdn/shop/files/sofa-rosy-kalix-1200-2_180x.png?v=1721295836 180w 183h",
    },
    {
      src: "//kalix.vn/cdn/shop/files/sofa-prime-1200-kalix_180x.png?v=1721295632 180w 183h",
    },
    {
      src: "//kalix.vn/cdn/shop/files/da-rio-banner-kalix_180x.jpg?v=1721355436 180w 101h",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slides.length) + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section>
      <div>
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`mySlides fade ${
                currentSlide === index + 1 ? "active" : ""
              }`}
              style={{
                display: currentSlide === index + 1 ? "flex" : "none",
                justifyContent: "center",
              }}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}
