import React, { useEffect } from "react";

const CounterComponent = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.project-value');
        counters.forEach((counter) => {
          counter.classList.add('animated-counter'); // Adding animation class for styling
          const updateCount = () => {
            const targetAttr = counter.getAttribute('data-target');
            const target = targetAttr ? +targetAttr : 0;
            const count = +(counter as HTMLElement).innerText;
            const increment = target / 150; // Smoother and more fluid movement with smaller increments
    
            if (count < target) {
              (counter as HTMLElement).innerText = Math.min(count + increment, target).toFixed(0);
              setTimeout(updateCount, 15); // Slower updates for smoother animation effect
            } else {
              (counter as HTMLElement).innerText = target.toString();
            }
          };
          updateCount();
        });
      });

  return (
    <section>
      <div className="container">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center text-center g-4">
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="10">+10</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">User Interviews</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="20">+20%</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Higher User Satisfaction</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="10">+10%</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Higher Conversion</p>
            </div>
            <div className="col">
              <h3 className="uxup-fs-h3 project-value uxup-color-neutral-200" data-target="64">+64</h3>
              <p className="uxup-fs-paragraph-large project-label uxup-color-neutral-200">Surveyed Users</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
