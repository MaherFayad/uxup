import React from "react";

const ProjectsComponent = () => {
  return (
    <section className="py-5 mt-5 uxup-color-neutral-100">
      <div className="container mt-5">
        <div className="uxup-section">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <p className="uxup-fs-paragraph">LFG Mobile App</p>
                <h2 className="uxup-fs-h3 mt-2 mb-4">
                  habit-tracking app that WITH fun Gamification to motivate
                  users.
                </h2>
                <div className="d-inline-flex flex-start align-items-start">
                  <div className="badge px-2 py-1 d-flex justify-content-center align-items-center">
                    <h5>
                      <span className="badge text-bg-light rounded-pill">
                        Habit Tracking
                      </span>
                    </h5>
                  </div>
                  <div className="badge px-2 py-1 d-flex justify-content-center align-items-center">
                    <h5>
                      <span className="badge text-bg-light rounded-pill">
                        Mobile App
                      </span>
                    </h5>
                  </div>
                  <div className="badge px-2 py-1 d-flex justify-content-center align-items-center">
                    <h5>
                      <span className="badge text-bg-light rounded-pill">
                        Gamification
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <img
                  src="/projects-img/uxup-img-top.png"
                  className="img-fluid rounded-4"
                  alt=""
                  title=""
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
