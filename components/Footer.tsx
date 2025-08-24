import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          {SOCIAL_LINKS.map(link => (
            <a 
              href={link.url} 
              key={link.name} 
              aria-label={link.name} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <link.icon className="icon" />
            </a>
          ))}
        </div>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
