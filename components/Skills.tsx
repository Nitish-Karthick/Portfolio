import React from 'react';
import { SKILLS, LANGUAGES } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const Skills: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="container">
        <h2 className={`section-title fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          Technical Skills
        </h2>
        <div className={`skills-container fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-tag">
              {skill.name}
            </div>
          ))}
        </div>

        <h3 className={`section-subtitle fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          Languages
        </h3>
        <div className={`skills-container fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          {LANGUAGES.map((skill) => (
            <div key={skill.name} className="skill-tag">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;