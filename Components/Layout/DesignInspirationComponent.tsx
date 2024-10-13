import React from "react";
import ButtonComponent from "./ButtonComponent"; // Assuming you have the ButtonComponent to use

const DesignInspirationComponent: React.FC = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="col-12">
          <div className="text-center">
            <h1 className="uxup-fs-h2 text-gradient fw-bold">
              Design That Inspires
            </h1>
            <p className="uxup-fs-paragraph uxup-color-text-100 my-4">
              Advanced digital design solutions reshaping the future of your
              business.
            </p>
          </div>
          <div className="position-relative mt-3">
            <div className="row justify-content-center g-3">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="uxup-card uxup-1">
                  <h1>UX Strategy</h1>
                  <p className="pt-3">
                    Think deeply, plan smartly. We craft strategies that guide
                    you toward success and set you apart.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="uxup-card uxup-2">
                  <h1>Product Design</h1>
                  <p className="pt-3">
                    Creativity beyond expectations. We create products you'll
                    love at first sight.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="uxup-card uxup-3">
                  <h1>UI Design</h1>
                  <p className="pt-3">
                    Beauty in every pixel. We design interfaces that captivate
                    the senses.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="uxup-card uxup-4">
                  <h1>UX Research</h1>
                  <p className="pt-3">
                    We discover what others don’t see. Deepening our
                    understanding to deliver the best.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="uxup-card uxup-5">
                  <h1>Front-End Development</h1>
                  <p className="pt-3">
                    Technology that comes alive. We turn design into reality
                    that resonates with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <img
                src="./designInspiration/uxup-logo.svg"
                alt="UXup Logo" // Added alt text
                title="UXup Logo" // Optional title for tooltip
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignInspirationComponent;
