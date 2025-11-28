import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Abusaada Mohammed Alnabil — All Rights Reserved
        </p>
        
        <div className="social-links">
          <a href="https://github.com/Mohammedalnabile" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://www.instagram.com/mohammed.alnabil" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
          <a href="mailto:mohammedalnabil56@gmail.com" className="social-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
