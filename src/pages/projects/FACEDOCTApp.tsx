// pages/projects/FACEDOCTApp.tsx

import Layout from "../../../Components/Layout/Layout";
import CustomComponent from "../../../Components/Sections/projects/ProjectsComponent";
import CounterComponent from "../../../Components/Sections/projects/CounterComponent";
import ProjectOverview from "../../../Components/Sections/projects/ProjectOverviewComponent";
import { useInView } from "../../../Components/hooks/useInView"; // Import the hook
import AchievementsComponent from "../../../Components/Sections/Home/AchievementsComponent";
import ContactFormComponent from "../../../Components/Sections/Home/ContactFormComponent";
import { ProjectContent } from "../../../Components/Contants/ProjectContent";

export default function FACEDOCTApp() {
  // Apply useInView to each section
  const heroBannerInView = useInView(0.2);
  const carouselInView = useInView(0.2);
  const digitalFutureInView = useInView(0.2);
  const achievementsInView = useInView(0.2);
  const contactFormInView = useInView(0.2);

  // Find the project with id = "4"
  const project = ProjectContent.find((p) => p.id === "4");

  // If the project doesn't exist, return a fallback UI.
  if (!project) return <div>Project not found.</div>;

  return (
    <Layout title={project.title} description={project.Overview}>
      {/* CustomComponent for Projects Overview */}
      <div
        ref={heroBannerInView.setRef}
        className={`fade-in-section ${heroBannerInView.isInView ? "visible" : ""}`}
      >
        <CustomComponent project={project} />
      </div>

      {/* CounterComponent
      <div
        ref={carouselInView.setRef}
        className={`fade-in-section ${carouselInView.isInView ? "visible" : ""}`}
      >
        <CounterComponent />
      </div> */}

      {/* Project Overview */}
      <div
        ref={digitalFutureInView.setRef}
        className={`fade-in-section ${digitalFutureInView.isInView ? "visible" : ""}`}
      >
        <ProjectOverview project={project} />
      </div>

      {/* Achievements Section */}
      <div
        ref={achievementsInView.setRef}
        id="Projects"
        className={`fade-in-section ${achievementsInView.isInView ? "visible" : ""}`}
      >
        <AchievementsComponent />
      </div>

      {/* Contact Form Section */}
      <div
        ref={contactFormInView.setRef}
        id="Contact"
        className={`fade-in-section ${contactFormInView.isInView ? "visible" : ""}`}
      >
        <ContactFormComponent />
      </div>
    </Layout>
  );
}
