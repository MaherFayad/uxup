// components/Header.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Layer1Icon from '../../public/Logo.svg';

// Helper function to handle scrolling to a specific section
const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

// Navigation links with scroll functionality
const NavigationLinks: React.FC<{
  aboutUsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}> = ({ aboutUsRef, servicesRef, projectsRef }) => {
  return (
    <div className="Nav-column uxup-fs-paragraph">
      <b className="Nav-Link" onClick={() => scrollToSection(aboutUsRef)}>
        About us
      </b>
      <b className="Nav-Link" onClick={() => scrollToSection(servicesRef)}>
        Services
      </b>
      <b className="Nav-Link" onClick={() => scrollToSection(projectsRef)}>
        Projects
      </b>
    </div>
  );
};


const Header: React.FC<{
  aboutUsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactUsRef: React.RefObject<HTMLDivElement>;
}> = ({ aboutUsRef, servicesRef, projectsRef, contactUsRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleARClick = () => {
    // Add AR language switch functionality here
  };

  useEffect(() => {
    let prevScrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollThreshold = 0.1;
  
    const handleScroll = () => {
      const currentScrollPos = document.body.scrollTop || document.documentElement.scrollTop;
  
      if (currentScrollPos !== prevScrollPos) {
        const newIsScrolled = currentScrollPos > scrollThreshold;
        setIsScrolled(newIsScrolled);
      }
  
      prevScrollPos = currentScrollPos;
    };
  
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  

  return (
    <header ref={headerRef} className={`Navcontainer ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Navcontent uxup-fs-paragraph">
        <div className={`logo ${isScrolled ? 'scrolled' : ''}`}>
          <Image className="nav-logo" alt="UXUP Logo" src={Layer1Icon} />
        </div>

        {/* Navigation Links */}
        <NavigationLinks
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
        />

        {/* Contact Us and AR */}
        <div className="button-parent uxup-fs-paragraph">
          <div
            className={`button ${isScrolled ? 'primary' : ''}`}
            onClick={() => scrollToSection(contactUsRef)}
          >
            <div className="contact-us">Contact us</div>
          </div>
          <b className="Nav-Link" id="linkTwoText" onClick={handleARClick}>
            AR
          </b>
        </div>
      </div>
    </header>
  );
};

export default Header;
