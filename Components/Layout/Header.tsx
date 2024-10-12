import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Layer1Icon from '../../public/Logo.svg';

// Helper function to scroll to a specific section
const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

// NavigationLinks component
const NavigationLinks: React.FC<{
  aboutUsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}> = ({ aboutUsRef, servicesRef, projectsRef }) => {
  return (
    <div className="Nav-column">
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

// Header component
const Header: React.FC = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null); // Define aboutUsRef
  const servicesRef = useRef<HTMLDivElement | null>(null); // Define servicesRef
  const projectsRef = useRef<HTMLDivElement | null>(null); // Define projectsRef
  const contactUsRef = useRef<HTMLDivElement | null>(null); // Define contactUsRef

  // Handle AR Click event
  const handleARClick: React.MouseEventHandler<HTMLElement> = (event) => {
    console.log('AR link clicked');
    // Add AR language switch functionality here if needed
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      const button = buttonRef.current;
      const icon = iconRef.current;

      if (nav && button) {
        if (window.scrollY > nav.clientHeight) {
          button.classList.add('primary');
          nav.classList.add('scrolled');
          icon?.classList.add('scrolled');
        } else {
          button.classList.remove('primary');
          nav.classList.remove('scrolled');
          icon?.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="Navcontainer" ref={navRef}>
      <div className="Navcontent">
        <div className="logo" ref={iconRef}>
          <Image className="nav-logo" alt="UXUP Logo" src={Layer1Icon} />
        </div>

        <NavigationLinks
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
        />

        <div className="button-parent">
          <div className="button" ref={buttonRef} onClick={() => scrollToSection(contactUsRef)}>
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
