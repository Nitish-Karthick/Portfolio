import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants.tsx';
import { GitHubIcon } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={`project-card fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary button-small">
              Live Demo
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary button-small">
            <GitHubIcon className="icon" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  const tags = useMemo(() => {
    const allTags = PROJECTS.reduce((acc, project) => {
      project.tags.forEach(tag => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, [] as string[]);
    return ['All', ...allTags.sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding section-alt">
      <div ref={ref} className="container">
        <h2 className={`section-title fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          Featured Projects
        </h2>
        
        <div className={`project-filters fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`filter-button ${activeFilter === tag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;