import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter.ts';

const Hero: React.FC = () => {
  const subtitleText = "A Full-Stack Developer with a passion for modern web development and AI innovation.";
  const typedSubtitle = useTypewriter(subtitleText, 30);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="animate-fade-in-up">
          <h1 className="hero-title">
            Hello, I'm <span className="hero-name">Nitish karthick V</span>
          </h1>
          <p className="hero-subtitle">
            {typedSubtitle}
            <span className="cursor">|</span>
          </p>
          <p className="hero-tagline">
            Turning ideas into reality through code.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="button button-primary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
