import Layout from "../../Components/Layout/Layout";
import CustomComponent from "../../Components/Sections/projects/ProjectsComponent";
import { useInView } from "../../Components/hooks/useInView"; // Import the hook

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
        className={`fade-in-section ${
          heroBannerInView.isInView ? "visible" : ""
        }`}
      >
        <CustomComponent />
      </div>

      
    </Layout>
  );
}
