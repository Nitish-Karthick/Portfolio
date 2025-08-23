import React from 'react';
import { EXPERIENCE, EDUCATION, CODING_PROFILES, ExternalLinkIcon } from '../constants.tsx';
import type { ExperienceItem, EducationItem, CodingProfile } from '../types.ts';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const TimelineItem: React.FC<{ item: ExperienceItem | EducationItem, isVisible: boolean }> = ({ item, isVisible }) => {
  const isExperience = 'company' in item;

  return (
    <div className={`timeline-item fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="timeline-line"></div>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3 className="timeline-title">
          {isExperience ? (item as ExperienceItem).role : (item as EducationItem).degree}
        </h3>
        <p className="timeline-subtitle">
          {isExperience ? (item as ExperienceItem).company : (item as EducationItem).institution}
        </p>
        <p className="timeline-period">{item.period}</p>
      </div>
      {item.description && <p className="timeline-description">{item.description}</p>}
    </div>
  );
};

const CodingProfileCard: React.FC<{ profile: CodingProfile }> = ({ profile }) => {
  return (
    <div className="coding-profile-card">
      <a href={profile.url} target="_blank" rel="noopener noreferrer" className="coding-profile-header">
        <h4 className="coding-profile-title">{profile.name}</h4>
        <ExternalLinkIcon className="icon" />
      </a>
      <ul className="coding-profile-details">
        {profile.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });
  const [expRef, isExpVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });
  const [eduRef, isEduVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });
  const [profilesRef, areProfilesVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  const hasExperience = EXPERIENCE.length > 0;
  const hasEducation = EDUCATION.length > 0;
  const hasCodingProfiles = CODING_PROFILES.length > 0;

  const sectionCount = [hasExperience, hasEducation, hasCodingProfiles].filter(Boolean).length;

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 ref={titleRef} className={`section-title fade-in-up-on-scroll ${isTitleVisible ? 'is-visible' : ''}`}>
          Experience & Education
        </h2>
        <div className={`experience-grid ${sectionCount > 1 ? 'two-cols' : ''}`}>
          {hasExperience && (
            <div ref={expRef}>
              <h3 className={`experience-heading fade-in-up-on-scroll ${isExpVisible ? 'is-visible' : ''}`}>
                Work Experience
              </h3>
              <div className="timeline-container">
                {EXPERIENCE.map((item, index) => (
                  <TimelineItem key={index} item={item} isVisible={isExpVisible} />
                ))}
              </div>
            </div>
          )}
          {hasEducation && (
            <div ref={eduRef}>
              <h3 className={`experience-heading fade-in-up-on-scroll ${isEduVisible ? 'is-visible' : ''}`}>
                Education
              </h3>
               <div className="timeline-container">
                {EDUCATION.map((item, index) => (
                  <TimelineItem key={index} item={item} isVisible={isEduVisible} />
                ))}
              </div>
            </div>
          )}
          {hasCodingProfiles && (
             <div ref={profilesRef}>
              <h3 className={`experience-heading fade-in-up-on-scroll ${areProfilesVisible ? 'is-visible' : ''}`}>
                Coding Profiles
              </h3>
               <div className="coding-profiles-container">
                {CODING_PROFILES.map((profile, index) => (
                  <div key={index} className={`fade-in-up-on-scroll ${areProfilesVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 100}ms`}}>
                    <CodingProfileCard profile={profile} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;