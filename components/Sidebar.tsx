import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-links">
                {SOCIAL_LINKS.map(link => (
                    <a 
                        href={link.url} 
                        key={link.name} 
                        aria-label={link.name} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="sidebar-link"
                    >
                        <link.icon className="icon" />
                    </a>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;