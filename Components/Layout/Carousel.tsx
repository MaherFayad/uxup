import React, { useEffect, useRef, useState } from "react";

const images = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  "/path/to/image4.jpg",
  "/path/to/image5.jpg",
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let scrollAmount = 0;

      const moveCarousel = () => {
        if (!isPaused) {
          scrollAmount += 1;
          if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
          }
          carousel.scrollLeft = scrollAmount;
        }
      };

      const intervalId = setInterval(moveCarousel, 20); // Adjust speed here

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [isPaused]); // Re-run when `isPaused` state changes

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}  // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
    >
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
