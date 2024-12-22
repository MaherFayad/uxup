import React from "react";
import Image from "next/image";

// Define the type for the `project` prop
interface Project {
  Overview: string;
  Epic: string;
  Development: string;
  images?: string[];
  coverImg?: string;
}

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  console.log('Project images:', project.images);
  
  return (
    <section className="py-5 mt-5 uxup-color-neutral-100">
      <div className="container mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3">
          <h2 className="uxup-fs-h2 uxup-color-neutral-200 fw-bold mb-3">
            Project Overview
          </h2>
          <p className="uxup-fs-paragraph uxup-color-neutral-200">
            {project.Overview}
          </p>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="row mt-3">
                <div className="col-12">
                  <picture>
                    <img
                      src={project.images?.[1] || "/projects-img/uxup-p-hero.png"}
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-6 w-100"
                    />
                  </picture>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <picture>
                    <img
                      src={project.images?.[2] || "/projects-img/uxup-p1.png"}
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-6 w-100"
                    />
                  </picture>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <picture>
                    <img
                      src={project.images?.[3] || "/projects-img/uxup-p2.png"}
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-6 w-100"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h2 className="uxup-fs-h4 uxup-color-neutral-200 fw-bold mb-4">
                Epic Meaning & Calling
              </h2>
              <div dangerouslySetInnerHTML={{ __html: project.Epic }} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="col-12">
                <div className="row p-4">
                  <div 
                    className="uxup-fs-paragraph uxup-color-neutral-200 mt-3 mb-5" 
                    dangerouslySetInnerHTML={{ __html: project.Development }} 
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="col-12">
                <picture>
                  <img
                    src={project.images?.[4] || "/projects-img/uxup-banner.png"}
                    alt="Project Illustration"
                    className="img-fluid project p-2 rounded-6 w-100"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
