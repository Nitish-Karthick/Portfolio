import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle.tsx';
import { LogoIcon } from '../constants.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const headerClasses = `header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`;

  return (
    <header className={headerClasses}>
      <div className="header-container">
        <div className="header-content">
          <a href="#hero" className="logo" aria-label="Homepage">
            <LogoIcon className="logo-icon" />
          </a>
          <div className="desktop-nav">
            <nav className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
          <div className="mobile-nav-toggle">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="menu-button" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <nav>
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;