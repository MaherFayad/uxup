// components/Header.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Layer1Icon from '../../public/Logo.svg';

// Helper function to handle scrolling to a specific section
const scrollToSection = (ref: React.RefObject<HTMLDivElement>, router: any, sectionId: string) => {
  if (router.pathname === '/') {
    // If we're already on the homepage, scroll to the section directly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If we're on another page, navigate to the homepage first
    router.push('/').then(() => {
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 4000); // Adjust the delay if necessary
    });
  }
};

// Navigation links with scroll functionality
const NavigationLinks: React.FC<{
  aboutUsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}> = ({ aboutUsRef, servicesRef, projectsRef }) => {
  const router = useRouter(); // Initialize the router hook

  return (
    <div className="Nav-column uxup-fs-paragraph">
      <b className="Nav-Link" onClick={() => scrollToSection(aboutUsRef, router, 'About-us')}>
        About us
      </b>
      <b className="Nav-Link" onClick={() => scrollToSection(servicesRef, router, 'Services')}>
        Services
      </b>
      <b className="Nav-Link" onClick={() => scrollToSection(projectsRef, router, 'Projects')}>
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
  const router = useRouter();
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
          <Link href="/" passHref>
            <Image className="nav-logo" alt="UXUP Logo" src={Layer1Icon} />
          </Link>
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
            onClick={() => scrollToSection(contactUsRef, router, 'Contact')}
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
