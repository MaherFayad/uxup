import React from "react";

// Define the type for the `project` prop
interface Project {
  id: string;
  title?: string; // Optional title
  title1?: string; // Optional title1
  slug: string;
  coverImg: string;
  tags: string[];
  Overview: string;
  Epic: string;
  Development: string;
}

interface ProjectsComponentProps {
  project: Project;
}

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({ project }) => {
  return (
    <section className="py-5 mt-5 uxup-color-neutral-100">
      <div className="container mt-5">
        <div className="uxup-section">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <p className="uxup-fs-paragraph">{project.title1}</p>
                <h2 className="uxup-fs-h3 mt-2 mb-4">{project.slug}</h2>
                <div className="d-inline-flex flex-start align-items-start">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="badge px-2 py-1 d-flex justify-content-center align-items-center">
                      <h5>
                        <span className="badge text-bg-light rounded-pill">
                          {tag}
                        </span>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <img
                  src={project.coverImg}
                  className="img-fluid rounded-4"
                  alt={project.title1}
                  title={project.title1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
