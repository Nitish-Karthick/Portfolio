import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const About: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding section-alt">
      <div ref={ref} className={`container fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
              alt="A computer screen with lines of code" 
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <p>
             I'm a passionate Artificial Intelligence & Data Science (AIDS) student with a solid background in full-stack web development and a strong interest in Artificial Intelligence. My journey in technology comes from a desire to solve complex problems and create user-friendly applications that have a meaningful impact.           
              </p>
            <p>
             My technical skills cover both front-end and back-end development, with knowledge in technologies like React, Node.js, Python and Java. I am especially fascinated by Natural Language Processing and Large Language Models.         
                 </p>
            <p>
              I'm excited about the future of AI applications and always seeking opportunities to help teams build the next generation of smart software solutions.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
