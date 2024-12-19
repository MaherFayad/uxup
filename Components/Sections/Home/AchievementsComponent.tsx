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
      title: "LFG Mobile App",
      description: "A gamified habit-tracking app with rewards system",
      image: "/project/project_1/element.jpg",
      link: "/projects/LFG",
    },
    {
      title: "Lucy",
      description: "A collaborative platform for photographers focused on storytelling and community",
      image: "/project/project_2/element.jpg",
      link: "/projects/LucyPhotographersPlatform",
    },
    {
      title: "NFT Print Pro",
      description: "A service to create physical prints of digital NFTs",
      image: "/project/project_3/element.jpg",
      link: "/projects/NFTPrintPro",
    },
    {
      title: "FACEDOCT App",
      description: "A secure collaboration platform for medical professionals",
      image: "/project/project_4/element.jpg",
      link: "/projects/FACEDOCTApp",
    },
    {
      title: "Banknote App",
      description: "A platform for managing digital contracts and e-signatures",
      image: "/project/project_5/element.jpg",
      link: "/projects/BanknoteApp",
    },
    {
      title: "Slash Website",
      description: "A custom software development company website",
      image: "/project/project_6/element.jpg",
      link: "/projects/SlashWebsite",
    },
    {
      title: "Pyramids City",
      description: "A 155-acre commercial development project in the New Administrative Capital",
      image: "/project/project_7/element.jpg",
      link: "/projects/PyramidsCity",
    },
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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
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
              slidesPerView={2.2}
              breakpoints={{
                200: {
                  slidesPerView: 1.25,
                },
                768: {
                  slidesPerView: 2.5,
                },
              }}
              className="carousel"
              autoHeight={true}
              updateOnWindowResize={true}
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide key={index} className="slide">
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="achievement-card h-100"
                  >
                    <div className="h-100">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="achievement-image"
                      />
                      <div className="achievement-info">
                        <h3 className="uxup-fs-h4 fw-bold achievement-title">{achievement.title}</h3>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                  </a>
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
