import React from "react";
import ButtonComponent from "./ButtonComponent"; // Adjust the path according to your folder structure

const HeroBanner: React.FC = () => {
  return (
    <div className="position-relative uxup-bg-herobanner overflow-hidden p-3 p-md-5 m-md-3 text-center">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="uxup-color-text-50 uxup-fs-h1-desktop fw-bold">Discover Simplicity at Its Finest.</h1>
        <h3 className="fw-normal uxup-color-text-50 uxup-fs-display-large-tablet my-3">
          At UXup, we redefine the digital experience. We turn bold ideas into stunning realities that captivate from the first moment.
        </h3>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <ButtonComponent
              id="learn-more"
              type="primary"
              text="Start Your Journey Now"
              onClick={() => console.log("Start Your Journey Now clicked")}
              isDisable={false}
              showLoading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
