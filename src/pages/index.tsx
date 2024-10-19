import Layout from '../../Components/Layout/Layout';
import HeroBanner from '../../Components/Sections/Home/HeroBanner';
import Carousel from '../../Components/Sections/Home/Carousel';
import DigitalFutureComponent from '../../Components/Sections/Home/DigitalFutureComponent';
import DesignInspirationComponent from '../../Components/Sections/Home/DesignInspirationComponent';
import AchievementsComponent from "../../Components/Sections/Home/AchievementsComponent";
import ContactFormComponent from '../../Components/Sections/Home/ContactFormComponent';
import { useInView } from '../../Components/hooks/useInView'; // Import the hook

export default function Home() {
  // Apply useInView to each section
  const heroBannerInView = useInView(0.2);
  const carouselInView = useInView(0.2);
  const digitalFutureInView = useInView(0.2);
  const designInspirationInView = useInView(0.2);
  const achievementsInView = useInView(0.2);
  const contactFormInView = useInView(0.2);

  return (
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
        className={`fade-in-section ${digitalFutureInView.isInView ? "visible" : ""}`}
      >
        <DigitalFutureComponent />
      </div>

      <div
        ref={designInspirationInView.setRef}
        className={`fade-in-section ${designInspirationInView.isInView ? "visible" : ""}`}
      >
        <DesignInspirationComponent />
      </div>

      <div
        ref={achievementsInView.setRef}
        className={`fade-in-section ${achievementsInView.isInView ? "visible" : ""}`}
      >
        <AchievementsComponent />
      </div>

      <div
        ref={contactFormInView.setRef}
        className={`fade-in-section ${contactFormInView.isInView ? "visible" : ""}`}
      >
        <ContactFormComponent />
      </div>
    </Layout>
  );
}