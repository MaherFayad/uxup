import React, { useEffect } from "react";

const CounterComponent: React.FC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.project-value');
    counters.forEach((counter) => {
      const targetAttr = counter.getAttribute('data-target');
      const target = targetAttr ? parseFloat(targetAttr) : 0;

      const duration = 8000; // Duration of the animation in milliseconds
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progress ranges from 0 to 1
        const currentValue = progress * target;

        (counter as HTMLElement).innerText = currentValue.toFixed(0);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount); // Start the counter animation
    });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center text-center g-4">
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="10">0</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">User Interviews</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="20">0</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Higher User Satisfaction</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="10">0</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Higher Conversion</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="64">0</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Surveyed Users</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;