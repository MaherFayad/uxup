import React from "react";

const ProjectOverview: React.FC = () => {
  return (
    <section className="py-5 mt-5 uxup-color-neutral-100">
      <div className="container mt-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3">
          <h2 className="uxup-fs-h2 uxup-color-neutral-200 fw-bold mb-3">
            Project Overview
          </h2>
          <p className="uxup-fs-paragraph uxup-color-neutral-200">
            To design a mobile app that uses gamification aspects, to help users
            stay on their daily habits chasing after the rewards the app gives
            them, while also addressing their internal motivations.
          </p>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="row mt-3">
                <div className="col-12">
                  <picture>
                    <img
                      src="/projects-img/uxup-p-hero.png"
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-4 w-100"
                    />
                  </picture>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <picture>
                    <img
                      src="/projects-img/uxup-p1.png"
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-4 w-100"
                    />
                  </picture>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <picture>
                    <img
                      src="/projects-img/uxup-p2.png"
                      alt="Project Illustration"
                      className="img-fluid p-2 rounded-4 w-100"
                    />
                  </picture>
                </div>
                <div className="col-12">
                  <div className="row p-4">
                    <h2 className="uxup-fs-h4 uxup-color-neutral-200 fw-bold my-4">
                      Development & Accomplishment
                    </h2>
                    <p className="uxup-fs-paragraph uxup-color-neutral-200">
                      This drive focuses on the user's progression, achievements, and the satisfaction of reaching goals.
                    </p>
                    <ul>
                      <li className="my-3 my-md-5">
                        <strong>Create a compelling narrative</strong> about the ultimate mission of the app, such as contributing to a larger social cause or personal growth journey, to imbue users' activities with profound significance.
                      </li>
                      <li className="my-3 my-md-5">
                        <strong>Personal reminders and prompts</strong> that echo the app's grand vision, subtly woven into the user interface, to constantly realign user actions with the overarching purpose.
                      </li>
                      <li className="my-3 my-md-5">
                        <strong>Inclusive language and imagery</strong> throughout the app that resonates with the epic narrative, making every interaction a reinforcement of the user's vital role within the app ecosystem.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h2 className="uxup-fs-h4 uxup-color-neutral-200 fw-bold mb-4">
                Epic Meaning & Calling
              </h2>
              <p className="uxup-fs-paragraph uxup-color-neutral-200">
                To design a mobile app that uses gamification aspects, to help
                users stay on their daily habits chasing after the rewards the app
                gives them, while also addressing their internal motivations.
              </p>
              <div className="col-12">
                <div className="row g-3 p-4">
                  <ul>
                    <li className="my-3 my-md-5">
                      <strong>Create a compelling narrative</strong> about the ultimate mission of the app, such as contributing to a larger social cause or personal growth journey, to imbue users' activities with profound significance.
                    </li>
                    <li className="my-3 my-md-5">
                      <strong>Personal reminders and prompts</strong> that echo the app's grand vision, subtly woven into the user interface, to constantly realign user actions with the overarching purpose.
                    </li>
                    <li className="my-3 my-md-5">
                      <strong>Inclusive language and imagery</strong> throughout the app that resonates with the epic narrative, making every interaction a reinforcement of the user's vital role within the app ecosystem.
                    </li>
                  </ul>
                  <p className="uxup-fs-paragraph uxup-color-neutral-200 mt-3 mb-5">
                    Client is Mit olins which was founded in December, 2013 after Milt Olin, a prominent Music Entertainment Attorney, tragically lost his life due to the thoughtlessness of an LA County Sheriff Deputy, who was distracted driving. The Milt Olin Foundation team, along with Milt’s widow Louise Olin, is committed to making our roads safe for everyone by eliminating distracted driving through education, community awareness, collaboration, and advocacy. Thus, the Let’s Freakin’ Go App (our app) was born.
                  </p>
                </div>
              </div>
              <div className="col-12">
                  <picture>
                    <img
                      src="/projects-img/uxup-banner.png"
                      alt="Project Illustration"
                      className="img-fluid project p-2 rounded-4 w-100"
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