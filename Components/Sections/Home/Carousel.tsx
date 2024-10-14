import React, { useEffect, useRef } from "react";

const images = [
  "/uxup-carousel/1.webp",
  "/uxup-carousel/2.webp",
  "/uxup-carousel/3.webp",
  "/uxup-carousel/4.webp",
  "/uxup-carousel/5.webp",
  "/uxup-carousel/6.webp",
  "/uxup-carousel/7.webp",
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let scrollAmount = 0;

      const moveCarousel = () => {
        scrollAmount += 1;

        // Scroll back to the beginning when we reach the end of the duplicated content
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll amount to the beginning
        }
        carousel.scrollLeft = scrollAmount;
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
        {/* Duplicate images to make the scrolling seamless */}
        {images.map((image, index) => (
          <div className="carousel-slide" key={index + images.length}>
            <img src={image} alt={`carousel-slide-duplicate-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;