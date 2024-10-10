// components/Footer.tsx
import React from 'react';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-component-line-navi-parent'>
        {/* Logo Section */}
        <div className='footer-component-line-navi'>
              <Image
                className='Footer-Logo'
                alt="Logo"
                src="/Logo-lg.svg"
                width={140}
                height={54}
              />
        </div>

        <div className='Separator' />

        {/* Copyright and Socials */}
        <div className='footer-component-sign-line'>
          <div className='footer-element-copyright'>
            <div className='copyright-2025-uxux'>
              © Copyright 2025 UXUX.
            </div>
          </div>

          {/* Social Icons */}
          <div className='footer-element-socials'>
            <Image className='social-ig' alt="Instagram" src="/Social/Ig.svg" width={24} height={24} />
            <Image className='social-ig' alt="LinkedIn" src="/Social/In.svg" width={24} height={24} />
            <Image className='social-ig' alt="X" src="/Social/Xx.svg" width={24} height={24} />
            <Image className='social-ig' alt="Facebook" src="/Social/Fb.svg" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
