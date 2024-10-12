import React, { useRef, useEffect } from 'react';
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
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const handleARClick = () => {
    console.log('AR link clicked');
    // Add AR language switch functionality here
  };

  // useEffect to handle scroll event and manage button state
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.Navcontainer');
      const button = document.querySelector('.button');
      const icon = document.querySelector('.nav-logo');
  
      console.log('Scroll position:', window.scrollY);
      console.log('Nav element:', nav);
      console.log('Button element:', button);
      console.log('Icon element:', icon);
  
      if (nav && button) {
        // Check if the navbar is scrolled
        if (window.scrollY > nav.clientHeight) {
          button.classList.add('primary'); // Add 'primary' state
          nav.classList.add('scrolled'); // Add 'scrolled' state
          icon?.classList.add('scrolled'); // Add 'scrolled' state only if icon exists
          console.log('Added scrolled state');
        } else {
          button.classList.remove('primary'); // Remove 'primary' state
          nav.classList.remove('scrolled'); // Remove 'scrolled' state
          icon?.classList.remove('scrolled'); // Remove 'scrolled' state only if icon exists
          console.log('Removed scrolled state');
        }
      }
    };
    
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <>
      {/* Header Section */}
      <header className="Navcontainer">
        <div className="Navcontent">
          <div className="logo">
            <Image className="nav-logo" alt="UXUP Logo" src={Layer1Icon} />
          </div>

          {/* Navigation Links */}
          <NavigationLinks
            aboutUsRef={aboutUsRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
          />

          {/* Contact Us and AR */}
          <div className="button-parent">
            <div className="button" onClick={() => scrollToSection(contactUsRef)}>
              <div className="contact-us">Contact us</div>
            </div>
            <b className="Nav-Link" id="linkTwoText" onClick={handleARClick}>
              AR
            </b>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
