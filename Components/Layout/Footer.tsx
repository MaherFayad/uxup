import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="footer-component-line-navi-parent">
          {/* Logo Section */}
          <div className="footer-component-line-navi">
            <div className="footer-component-logo">
              <Image alt="Logo" src="/Logo-lg.svg" width={140} height={54} />
            </div>
          </div>

          <div className="Separator" />

          <div className="col-12">
            <div className="d-flex">
              <div className="w-100">
                <div className="copyright-2025-uxux">
                  © Copyright 2025 UXUX.
                </div>
              </div>
              <div className="flex-shrink-1">
                {/* Social Icons */}
                <div className="footer-element-socials">
                  <div className="footer-social-icon">
                    <Image
                      alt="Instagram"
                      src="/Social/Ig.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="footer-social-icon">
                    <Image
                      alt="LinkedIn"
                      src="/Social/In.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="footer-social-icon">
                    <Image
                      alt="X"
                      src="/Social/Xx.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="footer-social-icon">
                    <Image
                      alt="Facebook"
                      src="/Social/Fb.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
