import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ButtonComponent from "./ButtonComponent";

const AchievementsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "Sanarte",
      description:
        "An App that uses sound to destress and increase the work quality and productivity of remote workers.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Sanarte",
      description:
        "An App that uses sound to destress and increase the work quality and productivity of remote workers.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Sanarte",
      description:
        "An App that uses sound to destress and increase the work quality and productivity of remote workers.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Sanarte",
      description:
        "An App that uses sound to destress and increase the work quality and productivity of remote workers.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Sanarte",
      description:
        "An App that uses sound to destress and increase the work quality and productivity of remote workers.",
      image: "https://fakeimg.pl/600x400",
    },
  ];

  // Duplicate items to create infinite scroll effect
  const infiniteAchievements = [
    achievements[achievements.length - 1], // Last item at the beginning
    ...achievements,
    achievements[0], // First item at the end
  ];

  const itemsPerPage = 2;
  const totalItems = infiniteAchievements.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsPerPage ? itemsPerPage : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage * 2 : prevIndex - 1
    );
  };

  // Update CSS variable for the current slide
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides");
    if (slidesContainer) {
      (slidesContainer as HTMLElement).style.setProperty(
        "--current-slide",
        currentIndex.toString()
      );
    }
  }, [currentIndex]);

  // Reset index when reaching duplicate slides for seamless infinite scrolling
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(totalItems - itemsPerPage * 2), 300);
    } else if (currentIndex === totalItems - itemsPerPage) {
      setTimeout(() => setCurrentIndex(itemsPerPage), 300);
    }
  }, [currentIndex, totalItems, itemsPerPage]);

  // Swipe handlers for touch inputs
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section className="py-5 p-lg-5 my-lg-5">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-5">
              <h1 className="uxup-fs-h2 text-gradient fw-bold">
                Exceptional Achievements
              </h1>
              <p className="uxup-fs-paragraph uxup-color-text-100 py-4">
                Success stories that inspire and highlight UXup's excellence in
                pioneering user experience design.
              </p>
              <ButtonComponent
                id="journey-button"
                type="primary"
                text="Start Your Journey Now"
                onClick={() => console.log("Button clicked")}
              />
                                        {/* Arrow Buttons */}
            <div className="position-relative">
              <button className="arrow left-arrow" onClick={prevSlide}>
                &#8249;
              </button>
              <button className="arrow right-arrow" onClick={nextSlide}>
                &#8250;
              </button>
            </div>
            </div>

            {/* Carousel Section */}
            <div className="col-12 col-md-8 col-lg-8 col-xl-7">
              <div className="carousel position-relative" {...swipeHandlers}>
                <div className="slides">
                  {infiniteAchievements.map((achievement, index) => (
                    <div key={index} className="slide">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="achievement-image"
                      />
                      <div className="achievement-info">
                        <h3 className="uxup-fs-h4 fw-bold">
                          {achievement.title}
                        </h3>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsComponent;
