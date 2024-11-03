import React, { useState, useEffect } from "react";
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
      title: "LFG",
      description:
        "Habit-tracking app that combines fun goals and rewards to motivate users.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Third Project",
      description: "A description of the third project goes here.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Fourth Project",
      description: "A description of the fourth project goes here.",
      image: "https://fakeimg.pl/600x400",
    },
    {
      title: "Fifth Project",
      description: "A description of the fifth project goes here.",
      image: "https://fakeimg.pl/600x400",
    },
  ];

  const itemsPerPage = 2;
  const totalItems = achievements.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - 1
    );
  };

  useEffect(() => {
    // Dynamically update the CSS variable that controls the transform property
    const slidesContainer = document.querySelector(".slides");
    if (slidesContainer) {
      (slidesContainer as HTMLElement).style.setProperty(
        "--current-slide",
        currentIndex.toString()
      );
    }
  }, [currentIndex]);

  return (
    <section className="py-5 p-lg-5 my-lg-5">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 col-xxl-5">
              <h1 className="uxup-fs-h2 text-gradient fw-bold">
                Exceptional Achievements
              </h1>
              <p className="uxup-fs-paragraph uxup-color-text-100 py-4">
                Success stories that inspire and highlight UXup's excellence in
                pioneering user experience design.
              </p>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xx-6">
                <ButtonComponent
                  id="journey-button"
                  type="primary"
                  text="Start Your Journey Now"
                  onClick={() => console.log("Button clicked")}
                />
              </div>
            </div>

            {/* Carousel Section */}
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 col-xxl-7">
              <div className="carousel">
                <div className="slides">
                  {achievements.map((achievement, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default AchievementsComponent;
