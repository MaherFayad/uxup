// pages/Home/Home.tsx
import Layout from '../../Components/Layout/Layout';
import HeroBanner from '../../Components/Sections/Home/HeroBanner';
import Carousel from '../../Components/Sections/Home/Carousel';
import DigitalFutureComponent from '../../Components/Sections/Home/DigitalFutureComponent';
import DesignInspirationComponent from '../../Components/Sections/Home/DesignInspirationComponent';
import AchievementsComponent from "../../Components/Sections/Home/AchievementsComponent";
import ContactFormComponent from '../../Components/Sections/Home/ContactFormComponent';
import { useInView } from '../../Components/hooks/useInView'; // Import the hook
import Preloader from '../../Components/Preloader/Preloader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const heroBannerInView = useInView(0.2);
  const carouselInView = useInView(0);
  const digitalFutureInView = useInView(0.2);
  const designInspirationInView = useInView(0.2);
  const achievementsInView = useInView(0.2);
  const contactFormInView = useInView(0.2);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll'); // Apply to html element
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll'); // Remove from html element
    }
  }, [isLoading]);
  
  const handleAnimationComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsContentVisible(true);
    }, 100); // Delay before starting content fade-in
  };

  return (
    <>
      <div className={`preloader-overlay ${!isLoading ? 'hide' : ''}`}>
        <Preloader onAnimationComplete={handleAnimationComplete} />
      </div>
      <div className={`content ${isContentVisible ? 'visible' : ''}`}>
        <Layout title="Home" description="Redefining Digital Experiences">
          <div
            ref={heroBannerInView.setRef}
            className={`fade-in-section ${heroBannerInView.isInView ? "visible" : ""}`}
          >
            <HeroBanner />
          </div>

          <div
            ref={carouselInView.setRef}
            className={`fade-in-section ${carouselInView.isInView ? "visible" : ""}`}
          >
            <Carousel />
          </div>

          <div
            ref={digitalFutureInView.setRef}
            id='About-us'
            className={`fade-in-section ${digitalFutureInView.isInView ? "visible" : ""}`}
          >
            <DigitalFutureComponent />
          </div>

          <div
            ref={designInspirationInView.setRef}
            id='Services'
            className={`fade-in-section ${designInspirationInView.isInView ? "visible" : ""}`}
          >
            <DesignInspirationComponent />
          </div>

          <div
            ref={achievementsInView.setRef}
            id='Projects'
            className={`fade-in-section ${achievementsInView.isInView ? "visible" : ""}`}
          >
            <AchievementsComponent />
          </div>

          <div
            ref={contactFormInView.setRef}
            id='Contact'
            className={`fade-in-section ${contactFormInView.isInView ? "visible" : ""}`}
          >
            <ContactFormComponent />
          </div>
        </Layout>
      </div>
    </>
  );
}
