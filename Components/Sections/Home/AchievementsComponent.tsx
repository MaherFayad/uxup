// Components/AchievementsComponent.tsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ButtonComponent from "./ButtonComponent";

const AchievementsComponent: React.FC = () => {
  const swiperRef = useRef<any>(null); // Create a ref for the Swiper instance

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
    // Add more achievements as needed
  ];

  return (
    <section className="py-5 p-lg-5 my-lg-5">
      <div className="container">
        <div className="row">
          {/* Text Content */}
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
            {/* Custom Navigation Buttons */}
            <div className="position-relative">
              <button
                className="arrow left-arrow"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                &#8249;
              </button>
              <button
                className="arrow right-arrow"
                onClick={() => swiperRef.current?.slideNext()}
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Swiper Free Mode Carousel */}
          <div className="col-12 col-md-8 col-lg-8 col-xl-7">
            <Swiper
              loop={true}
              modules={[FreeMode]}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
              freeMode={{
                enabled: true,
                minimumVelocity: 0.02,
                momentum: true,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
              }}
              spaceBetween={20}
              slidesPerView={2.2} // Default for larger screens
              breakpoints={{
                200: {
                  slidesPerView: 1.25, // Show 1.25 slides on mobile screens
                },
                768: {
                  slidesPerView: 2.5, // Show 2.5 slides on screens 768px and above
                },
              }}
              className="carousel"
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide key={index} className="slide">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="achievement-image"
                  />
                  <div className="achievement-info">
                    <h3 className="uxup-fs-h4 fw-bold">{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsComponent;
