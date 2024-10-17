import React, { useEffect, useRef } from "react";

const images = [
  "/uxup-carousel/7.webp",
  "/uxup-carousel/4.webp",
  "/uxup-carousel/3.webp",
  "/uxup-carousel/1.webp",
  "/uxup-carousel/2.webp",
  "/uxup-carousel/5.webp",
  "/uxup-carousel/6.webp",
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let scrollAmount = carousel.scrollHeight / 2;

      const moveCarousel = () => {
        scrollAmount -= 1;

        // Scroll back to the end when we reach the beginning of the duplicated content
        if (scrollAmount <= 0) {
          scrollAmount = carousel.scrollHeight / 2; // Reset scroll amount to the end
        }
        carousel.scrollTop = scrollAmount;
      };

      const intervalId = setInterval(moveCarousel, 20); // Adjust speed here

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="carousel-container my-4" ref={carouselRef}>
      <div className="carousel">
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`carousel-slide-${index}`} />
          </div>
        ))}
      
      </div>
      {/* Overlay with the specified gradient */}
      <div className="carousel-overlay"></div>
    </div>
  );
};

export default Carousel;
