import React, { useEffect } from 'react';
import { Project } from '../types.ts';
import { GitHubIcon, ExternalLinkIcon, ServerIcon } from '../constants.tsx';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
                    &times;
                </button>

                <img src={project.imageUrl} alt={project.title} className="modal-image" />

                <div className="modal-body">
                    <h3 className="modal-title">{project.title}</h3>

                    <div className="modal-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>

                    <p className="modal-description">{project.description}</p>

                    <div className="modal-links">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                                <ExternalLinkIcon className="icon" />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {project.backendUrl && (
                            <a href={project.backendUrl} target="_blank" rel="noopener noreferrer" className="button button-primary" style={{ backgroundColor: '#8b5cf6' }}> {/* Violet color for backend */}
                                <ServerIcon className="icon" />
                                <span>Wake Up Backend</span>
                            </a>
                        )}
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                            <GitHubIcon className="icon" />
                            <span>Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
